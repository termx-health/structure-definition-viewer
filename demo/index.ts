import {structureDefinition} from './data';
import {initialize} from '../src';

initialize()


document.querySelector('#app').innerHTML = `
  <h1>Demo</h1>
  <input id="file-input" type="file">
  <div id="outlet"></div>
`

const render = (fhirSD: object) => {
  document.querySelector('#outlet').innerHTML = `
    <div style="display: flex; justify-content: center; flex-direction: column">
      <div>
        <h2>Web Component</h2>
        <sd-view 
          data="${encodeURIComponent(JSON.stringify(fhirSD))}" 
          inline="true"
        ></sd-view>
      </div>
      
      <div style="border-top: 1px solid lightgray; margin-top: 2rem">
        <h2>Code Block</h2>
        <pre class="language-structure-definition">
          <code>${JSON.stringify(fhirSD, null, 2)}</code>
        <pre>
      </div>
    </div>
  `
}

document.querySelector('#file-input').addEventListener('change', (ev: Event) => {
  const fileInput: HTMLInputElement = ev.target;
  fileInput.files[0].text().then((content: string) => {
    try {
      render(JSON.parse(content))
      initialize({startOnLoad: false}); // todo: use 'run' method instead
    } catch (e) {
      console.error("Could not parse the file contents!")
    }
  })
})


render(structureDefinition)
