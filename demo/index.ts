import {structureDefinition} from './data';
import {initialize} from '../src';


// @ts-ignore
document.querySelector('#app').innerHTML = `
  <h1>Demo</h1>
  
  <div style="display: flex; justify-content: center; flex-direction: column">
    <div>
      <h2>Inline</h2>
      <sd-view 
        data="${encodeURIComponent(JSON.stringify(structureDefinition))}" 
        inline="true"
      ></sd-view>
    </div>
    
    <div style="border-top: 1px solid lightgray; margin-top: 2rem">
      <h2>Code Block</h2>
      <pre class="language-structure-definition">
        ${JSON.stringify(structureDefinition, null, 2)}
      <pre>
    </div>
  </div>
`

initialize();
