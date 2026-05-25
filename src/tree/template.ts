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
    private columns = ['flags', 'cardinality', 'types', 'description'],
    /** see {@code HelloWorld.resolveUrl} doc */
    private resolveUrl?: string,
    /** see {@code HelloWorld.linkBase} doc */
    private linkBase?: string,
    /** shared {@code key: type|canonical → resolvedHref|null} cache, lifecycle = component instance */
    private resolveCache: Map<string, string | null> = new Map(),
  ) {}

  public static build(data: string, opts: {
    document: Document,
    container: HTMLElement | ShadowRoot,
    mode: 'diff' | 'snap' | 'hybrid',
    inline?: boolean,
    columns?: string[],
    resolveUrl?: string,
    linkBase?: string,
    resolveCache?: Map<string, string | null>,
  }): TemplateBuilder {
    opts.mode ??= 'diff';
    opts.inline ??= false;
    opts.columns ??= ['flags', 'cardinality', 'types', 'description'];

    return new TemplateBuilder(
      opts.document, opts.container,
      data,
      opts.mode, opts.inline, opts.columns,
      opts.resolveUrl, opts.linkBase, opts.resolveCache
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

    // Canonical-URL link rewriting — only when host configured a resolve endpoint.
    // No-op for embedders that don't set `resolve-url` (e.g. standalone demo).
    if (this.resolveUrl) {
      this.rewriteCanonicalLinks(container);
    }
  }


  // Canonical resolve

  /**
   * Walk all binding/profile links emitted by the tree, ask the host's
   * resolve endpoint whether the catalog serves each one, and on hit rewrite
   * the {@code href} to point at the local copy. Cached per component
   * instance so toggle/mode changes don't refetch.
   *
   * <p>Errors and misses are swallowed silently — the link keeps its
   * original canonical-URL href in that case, which is the legacy behavior
   * the standalone viewer already had.
   */
  private rewriteCanonicalLinks(container: HTMLElement): void {
    const links = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[data-sdv-canonical]'));
    if (links.length === 0) {
      return;
    }
    const linkBase = this.deriveLinkBase();

    // Dedup in-flight requests: many links can point to the same canonical.
    const pending = new Map<string, Promise<string | null>>();

    links.forEach(link => {
      const canonical = link.getAttribute('data-sdv-canonical');
      const type = link.getAttribute('data-sdv-canonical-type');
      if (!canonical || !type) return;

      const key = `${type}|${canonical}`;

      // 1) cache hit (positive or negative)
      if (this.resolveCache.has(key)) {
        const cached = this.resolveCache.get(key);
        if (cached) link.setAttribute('href', cached);
        return;
      }

      // 2) in-flight dedup
      let p = pending.get(key);
      if (!p) {
        p = this.fetchResolve(type, canonical, linkBase);
        pending.set(key, p);
      }
      p.then(href => {
        this.resolveCache.set(key, href);
        if (href) link.setAttribute('href', href);
      });
    });
  }

  private async fetchResolve(type: string, canonical: string, linkBase: string): Promise<string | null> {
    try {
      const url = new URL(this.resolveUrl!, window.location.href);
      url.searchParams.set('resourceType', type);
      url.searchParams.set('url', canonical);
      const resp = await fetch(url.toString(), {
        method: 'GET',
        headers: {'Accept': 'application/json'},
        credentials: 'same-origin',
      });
      if (!resp.ok) return null;
      const json = await resp.json();
      if (!json?.resolved || !json?.resourceType || !json?.id) return null;
      return `${stripTrailingSlash(linkBase)}/${encodeURIComponent(json.resourceType)}/${encodeURIComponent(json.id)}`;
    } catch {
      // Network error, CORS rejection, malformed JSON — fall back to canonical href.
      return null;
    }
  }

  private deriveLinkBase(): string {
    if (this.linkBase) return this.linkBase;
    // Default: derive from resolveUrl by stripping the trailing `/_resolve` segment.
    // e.g. `/api/fhir/_resolve` → `/api/fhir`. Works for both absolute and relative
    // resolveUrl since we only manipulate the path tail.
    const r = this.resolveUrl!;
    if (r.endsWith('/_resolve')) return r.substring(0, r.length - '/_resolve'.length);
    if (r.endsWith('/_resolve/')) return r.substring(0, r.length - '/_resolve/'.length);
    return r;
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

            return [`${typeEl}`, profileEls.length ? `(${profileEls.map(el => `<a href="${el.url}" data-sdv-canonical="${escapeAttr(el.url)}" data-sdv-canonical-type="StructureDefinition">${el.el}</a>`).join(', ')})` : ''].filter(Boolean).join('')
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
          ${_draw(_val('binding'), b => b?.valueSet ? `<div style="color: var(--color-text-secondary)">Binding: <a href="${b.valueSet}" data-sdv-canonical="${escapeAttr(b.valueSet)}" data-sdv-canonical-type="ValueSet">${b.valueSet.slice(
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


// File-local helpers used by inline-template construction. Not exported —
// only the TemplateBuilder is part of the public surface.

/**
 * Minimal HTML attribute-value escaper. Canonical URLs come from FHIR data
 * and can contain `&`, double quotes, or angle brackets; without escaping
 * they could break the surrounding {@code data-sdv-canonical="…"} attribute.
 */
function escapeAttr(s: string): string {
  return String(s).replace(/[&"<>]/g, c => {
    switch (c) {
      case '&': return '&amp;';
      case '"': return '&quot;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      default: return c;
    }
  });
}

function stripTrailingSlash(s: string): string {
  return s.endsWith('/') ? s.substring(0, s.length - 1) : s;
}
