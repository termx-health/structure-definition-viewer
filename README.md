# FHIR Structure Definition Viewer

FHIR Version 5

## Usage
```html
<div id="scoped-container">
  <pre class="custom-class">
    {
      "id": "TestModel",
      "name": "TestModel",
      "resourceType": "StructureDefinition",
      "kind": "logical",
      "url": "http://example.org/fhir/TestModel",
      "type": "http://example.org/fhir/TestModel",
      "fhirVersion": "5.0.0",
      "abstract": false,
      "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Element",
      "derivation": "specialization",
      "differential": {
        "element": [
          {
            "id": "TestModel",
            "path": "TestModel"
          },
          {
            "id": "TestModel.a",
            "max": "*",
            "min": 0,
            "path": "TestModel.a",
            "type": [
              {
                "code": "string"
              }
            ]
          },
          {
            "id": "TestModel.b",
            "max": "1",
            "min": 0,
            "path": "TestModel.b",
            "type": [
              {
                "code": "decimal"
              }
            ]
          }
        ]
      }
    }
  </pre>
</div>
```

```js
import {initialize} from "@kodality-web/fhir-structure-definition-viewer";

initialize({
  container: document.getElementById('scoped-container'),
  querySelector: 'pre.custom-class'
})
```

## Web Component

```html
<sd-web-component data="..."></sd-web-component>
```

```js
import {initializeWebComponent} from "@kodality-web/fhir-structure-definition-viewer";

initializeWebComponent('sd-web-component')
```

## Run locally
```bash
npm run dev
```
