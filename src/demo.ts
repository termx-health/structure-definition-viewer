import {structureDefinition} from './data';
import {initialize} from './index';

initialize({});


// @ts-ignore
document.querySelector('#app').innerHTML = `
  <div style="display: flex; justify-content: center; flex-direction: column">
    <div>
      <h1>Nested</h1>
      <sd-view data="${encodeURIComponent(JSON.stringify(structureDefinition))}"></sd-view>
    </div>


    <div style="border-top: 1px solid lightgray; margin-top: 2rem">
      <h1>Inline</h1>
      <sd-view data="${encodeURIComponent(JSON.stringify(structureDefinition))}" inline="true"></sd-view>
    </div>
    
    
    <div style="border-top: 1px solid lightgray; margin-top: 2rem">
      <h1>Code Block</h1>
      <pre class="language-structure-definition">${JSON.stringify(structureDefinition, null, 2)}<pre>
    </div>
  </div>
`
