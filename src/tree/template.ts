import {ElementRepresentation, Tree, TreeNode} from './tree.ts';
import {getPathValue, isDefined, isNil, RecursiveKeyOf} from '../utils/object.util.ts';
import {mergeAndMaintainRelativeOrder} from '../utils/array.util.ts';


export class TemplateBuilder {
  private node?: TreeNode;

  protected constructor(
    private DOCUMENT: Document,
    private CONTAINER: HTMLElement | ShadowRoot,
    private data: string,
    private mode: 'diff' | 'snap' | 'hybrid' = 'diff',
    private inline: boolean = false,
    private columns = ['flags', 'cardinality', 'types', 'description']
  ) {}

  public static build(data: string, opts: {
    document: Document,
    container: HTMLElement | ShadowRoot,
    mode: 'diff' | 'snap' | 'hybrid',
    inline?: boolean,
    columns?: string[],
  }): TemplateBuilder {
    opts.mode ??= 'diff';
    opts.inline ??= false;
    opts.columns ??= ['flags', 'cardinality', 'types', 'description'];

    return new TemplateBuilder(
      opts.document, opts.container,
      data,
      opts.mode, opts.inline, opts.columns
    )
  }


  public render(): void {
    // raw data -> TreeNode object
    this.node = Tree.process(this.data, this.mode)
    return this._render();
  }

  private _render(): void {
    if (isNil(this.CONTAINER)) {
      return;
    }

    const node = this.node;
    if (node === undefined) {
      this.CONTAINER.innerHTML = 'error'
      return;
    }

    const container = this.DOCUMENT.createElement('div');
    container.innerHTML = `
      <div style="display: flex; justify-content: flex-end" class="button-group">
        <button class="button ${this.mode === 'diff' ? 'active' : ''}" data-mode="diff">diff</button>
        <button class="button ${this.mode === 'hybrid' ? 'active' : ''}" data-mode="hybrid">hybrid</button>
        <button class="button ${this.mode === 'snap' ? 'active' : ''}" data-mode="snap">snap</button>
      </div>
      <br>

      <div style="overflow: auto;">
        ${this.createView(node)}
      </div>
    `;

    this.CONTAINER.replaceChildren(container)

    // fixme: how will it work if template is generated in server, how to hydrate with JS?

    // mode change handler
    container.querySelectorAll('[data-mode]').forEach(el => {
      el.addEventListener('click', () => {
        this.mode = el.getAttribute('data-mode') as any;
        this.render();
      })
    })

    // toggle click handler
    container.querySelectorAll(`.m-tree-toggle`).forEach(el => {
      el.addEventListener('click', ({target}) => {
        const toggleEl = (target as HTMLElement).closest('[data-key]')
        if (isNil(toggleEl)) {
          return
        }

        const flatten = (n: TreeNode): TreeNode[] => [n, ...n.children?.flatMap(c => flatten(c)) ?? []];

        const key = toggleEl.getAttribute('data-key');
        const targetNode = flatten(node).find(c => c.key === key)!;
        targetNode.open = !targetNode.open;

        this._render()
      });
    })
  }


  // Main view

  private createView(node: TreeNode): string {
    return `
      <table style="border-collapse: collapse; width: 100%;">
        ${this.createRow(node)}
      </table>
    `
  }

  private createRow(node: TreeNode, level = 0): string {
    const {data} = node;
    const _val = (key: RecursiveKeyOf<ElementRepresentation>): {val?: any, src: 'snap' | 'diff'} => {
      const snap = getPathValue(data.snap, key);
      const diff = getPathValue(data.diff, key);
      const val = {
        diff,
        snap,
        hybrid: diff ?? snap
      }
      return {val: val[this.mode], src: isDefined(diff) ? 'diff' : 'snap'}
    }

    const _draw = (v: {val?: any, src?: 'snap' | 'diff' | string}, transform?: (v: any) => string) => {
      return isDefined(v.val)
        ? `<span style="opacity: ${this.mode === 'hybrid' && v.src === 'snap' ? 0.3 : 1}">${transform?.(v.val) ?? v.val}</span>`
        : ''
    }


    const DATA_VIEW = () => {
      const constrains: Record<keyof ElementRepresentation['flags'], string> = {
        modifier: '?!',
        summary: 'Σ',
        constraint: '<code style="padding-left: 3px; padding-right: 3px; border: 1px maroon solid; font-weight: bold; color: #301212; background-color: #fdf4f4;">C</code>'
      }

      const renderTypes = () => {
        const snapTypes = data.snap?.types?.map(t => ({type: t, src: 'snap'})) ?? [];
        const diffTypes = data.diff?.types?.map(t => ({type: t, src: 'diff'})) ?? [];
        const types = mergeAndMaintainRelativeOrder([
          snapTypes.map(t => t.type.code),
          diffTypes.map(t => t.type.code),
        ])

        return types
          .map(code => {
            const snap = snapTypes.find(t => t.type.code === code)
            const diff = diffTypes.find(t => t.type.code === code)

            const type = diff || snap
            const typeEl = _draw({val: type?.type.code, src: type?.src});

            const diffProfiles = diff?.type.targetProfiles ?? [];
            const snapProfiles = snap?.type.targetProfiles?.filter(p => !diffProfiles.includes(p)) ?? [];
            const profileEls = [
              ...diffProfiles.map(val => ({el: _draw({val, src: 'diff'}, p => p.slice(p.lastIndexOf('/') + 1)), url: val})),
              ...snapProfiles.map(val => ({el: _draw({val, src: 'snap'}, p => p.slice(p.lastIndexOf('/') + 1)), url: val}))
            ]

            return [`${typeEl}`, profileEls.length ? `(${profileEls.map(el => `<a href="${el.url}">${el.el}</a>`).join(', ')})` : ''].filter(Boolean).join('')
          })
          .join('<br>')
      }

      return `
        <!-- Constraints -->
        ${this.columns.includes('flags') ?
        `<td style="vertical-align: top">
          ${Object.entries(constrains).map(([k, v]) => _draw(_val(`flags.${k}` as any), is => is ? v : '')).join(' ')}
        </td>` : ''}
        
        <!-- Cardinality -->
        ${this.columns.includes('cardinality') ?
        `<td style="vertical-align: top">
          ${_draw(_val('min'))}..${_draw(_val('max'))}
        </td>` : ''}
        
         <!-- Types -->
        ${this.columns.includes('types') ?
        `<td style="vertical-align: top">
          ${renderTypes()}
        </td>` : ''}
        
        <!-- Description -->
        ${this.columns.includes('description') ?
        `<td style="vertical-align: top">
          ${_draw(_val('short'), s => s ? `<div>${s}</div>` : '')}
          ${_draw(_val('definition'), d => d ? `<i style="color: var(--color-text-secondary)">${d}</i>` : '')}
          ${_draw(_val('binding'), b => b ? `<div style="color: var(--color-text-secondary)">Binding: <a href="${b.valueSet}">${b.valueSet.slice(
          b.valueSet.lastIndexOf('/') + 1)}</a> (${b?.strength})</div>` : '')}
        </td>` : ''}
      `;
    };


    return `
      <tr
        class="${[
      'm-tree-row',
      'm-tree-row--show-line',
      !TemplateBuilder.calcNextSibling(node) ? 'm-tree-row--last-row' : '',
      !node.children?.length ? 'm-tree-row--leaf' : ''].join(' ')
    }"
        style="font-weight: ${node.children?.length ? 'bold' : 'initial'}"
      >
        <td class="m-tree-profile-wrapper" >
          <div>
            <!-- indents -->
            ${this._indents(node)}
            <!-- toggle -->
            ${this._toggle(node)}
            <!-- title -->
            ${_draw(_val('title'))}
          </div>
        </td>
        
        ${DATA_VIEW()}
      </tr>
  
      ${node.open ? node.children?.map(c => this.createRow(c, level + 1)).join('') : ''}
    `
  }


  // Building blocks

  private _indents(node: TreeNode): string {
    const tShape = '<span class="m-tree-indent-unit m-tree-indent--vertical-line m-tree-indent--horizontal-line"></span>';
    let indents: string[] = [];

    if (String(this.inline) === 'true') {
      const temp = TemplateBuilder.calcIndents(node).map(t => `<span class="m-tree-indent-unit ${t ? 'm-tree-indent--vertical-line' : ''}"></span>`);
      if (!node.selectable) {
        temp.push(tShape)
      }
      indents = temp.slice(1)
    } else {
      const temp = TemplateBuilder.calcIndents(node).map(t => `<span class="m-tree-indent-unit ${t ? 'm-tree-indent--vertical-line' : ''}"></span>`)
      if (node.parent) {
        temp.push(tShape)
      }
      indents = temp.slice(1);
    }


    return [
      `<span class="m-tree-indent ${this.inline ? 'm-tree-indent--inline' : ''}">`,
      indents.join('\n'),
      `</span>`
    ].join('\n')
  }

  private _toggle(node: TreeNode): string {
    if (!node.children?.length) {
      return ''
    }
    const icons = {
      open: '<path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>',
      close: '<path d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>'
    }
    return `
      <span class="m-tree-toggle" data-key="${node.key}">
        <i>
          <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="minus-square" aria-hidden="true">
            ${icons[node.open ? 'open' : 'close']}
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
          </svg>
        </i>
      </span>
    `;
  }


  // Utils

  private static calcIndents(node: TreeNode): boolean[] {
    const indents = [];
    let parent = node.parent;
    while (parent) {
      const parentNextSibling = TemplateBuilder.calcNextSibling(parent);
      if (parentNextSibling) {
        indents.unshift(true);
      } else {
        indents.unshift(false);
      }
      parent = parent.parent;
    }
    return indents;
  }

  private static calcNextSibling(node: TreeNode): TreeNode | undefined {
    const parenChildren = node.parent?.children ?? [];
    const nodeIndex = parenChildren.findIndex(c => c.key === node.key);
    return nodeIndex !== -1 ? parenChildren[nodeIndex + 1] : undefined;
  }
}
