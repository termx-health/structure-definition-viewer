import {HelloWorld} from './tree/component.ts';

export {HelloWorld} from "./tree/component"
export * from "./tree/template"

export function initializeWebComponent(name: string = 'sd-view'): void {
  !customElements.get(name) && customElements.define(name, HelloWorld);
}

interface InitializeParams {
  container?: HTMLElement,
  startOnLoad?: boolean,
  querySelector?: string
}

export function initialize(options?: InitializeParams): void {
  const _opts: Required<InitializeParams> = {
    container: options?.container ?? document.body,
    startOnLoad: options?.startOnLoad ?? true,
    querySelector: options?.querySelector ?? 'pre.language-structure-definition',
  }

  initializeWebComponent('sd-view')

  if (_opts.startOnLoad) {
    window.addEventListener('load', () => {
      run(Array.from(document.querySelectorAll<HTMLElement>(_opts.querySelector)))
    })
  } else {
    run(Array.from(document.querySelectorAll<HTMLElement>(_opts.querySelector)))
  }
}

function run(nodes: HTMLElement[]) {
  nodes.forEach(el => {
    el.outerHTML = `<sd-view data="${encodeURIComponent(el.textContent!.trim())}"></sd-view>`;
  })
}
