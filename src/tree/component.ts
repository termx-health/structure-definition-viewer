import {TemplateBuilder} from './template.ts';

const STYLES = `
      :host {
          --color-primary: #d97706;
          --color-text: #1f1f1f;
          --color-text-secondary: #00000073;
          --color-borders: #d2d3d8;
          --border-radius-component: 6px;
      }


      .m-tree-row {
          text-align: left;
          white-space: nowrap;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
      }

      .m-tree-row:nth-child(odd) {
          background-color: #F7F7F7;
      }


      /* Profile wrapper */
      .m-tree-profile-wrapper {
          height: 0;
      }

      .m-tree-profile-wrapper > * {
          display: flex;
          height: 100%;
      }


      /* Indentation */

      .m-tree-indent {
          align-self: stretch;
          white-space: nowrap;
          user-select: none;
          display: flex;
      }

      .m-tree-indent-unit {
          display: inline-block;
          width: 1.7142857142857rem;
          height: 100%;
      }


      /* Toggle */

      .m-tree-toggle {
          position: relative;
          width: 1.7142857142857rem;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .m-tree-toggle > i {
          display: flex;
      }


      /* Vertical Line */

      .m-tree-row--show-line .m-tree-indent--vertical-line {
          position: relative;
          z-index: 1;
      }

      .m-tree-row--show-line .m-tree-indent--vertical-line::before {
          position: absolute;
          top: -1px;
          left: 0.85714285714286rem;
          bottom: -1px;
          margin-left: -1px;
          border-right: 1px solid var(--color-borders);
          content: ' ';
      }

      .m-tree-row--show-line.m-tree-row--last-row .m-tree-indent:not(.m-tree-indent--inline) .m-tree-indent--vertical-line:last-of-type::before,
      .m-tree-row--show-line.m-tree-row--last-row.m-tree-row--leaf .m-tree-indent--vertical-line:last-of-type::before {
          height: 12.7px;
      }


      /* Horizontal Line */

      .m-tree-row--show-line .m-tree-indent--horizontal-line::after {
          position: absolute;
          content: ' ';
          height: 10.7px;
          width: 0.71428571428571rem;
          left: 0.85714285714286rem;
          border-bottom: 1px solid var(--color-borders);
      }
      
      .button {
        appearance: none;
        background-color: #FAFBFC;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: var(--border-radius-component);
        box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
        box-sizing: border-box;
        color: #24292E;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        list-style: none;
        padding: 2px 16px;
        position: relative;
        transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
        word-wrap: break-word;
    }


    /* Links */
    
    a {
      color: var(--color-primary);
    }


    /* Buttons */
    
    .button.active {
      color: white;
      background-color: var(--color-primary);
      box-shadow: var(--color-primary) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    }

    .button-group .button {
      border-radius: 0
    }
    
    .button-group .button:first-child {
      border-top-left-radius: var(--border-radius-component);
      border-bottom-left-radius: var(--border-radius-component);
    }
    
    .button-group .button:last-child {
      border-top-right-radius: var(--border-radius-component);
      border-bottom-right-radius: var(--border-radius-component);
    }
    
    .button-group .button:not(:last-child) {
      border-right: none;
    }
  `


export class HelloWorld extends HTMLElement {
  private mode: 'diff' | 'snap' | 'hybrid' = 'diff';
  private data?: string;
  private inline?: boolean;
  private columns = ['flags', 'cardinality', 'types', 'description'];

  static get observedAttributes() {
    return ['mode', 'data', 'inline', 'columns'];
  }

  attributeChangedCallback(property: keyof this, oldValue: any, newValue: any) {
    if (oldValue === newValue) {
      return;
    }
    this[property] = newValue;
    Promise.resolve().then(() => this.render());
  }

  connectedCallback() {
    // attaches shadow tree and returns shadow root reference
    const shadow = this.attachShadow({mode: 'open'});

    // appends styles to shadow root
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(STYLES);
    shadow.adoptedStyleSheets.push(sheet);

    this.render();
  }


  private render(): void {
    const decodedData = decodeURIComponent(this.data ?? '');

    TemplateBuilder
      .build(decodedData, {
        document: document,
        container: this.shadowRoot!,
        mode: this.mode,
        inline: this.inline,
        columns: this.columns
      })
      .render()
  }
}
