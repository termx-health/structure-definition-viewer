# FHIR Structure Definition Viewer

FHIR Version 5

[Live Demo](https://kodality.gitlab.io/terminology/structure-definition-viewer/)

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

## Resolving binding & profile links against a host catalog (optional)

By default, binding (`ValueSet`) and profile-target (`StructureDefinition`)
links render with their canonical URL as `href`. FHIR canonical URLs are
identifiers, not necessarily real HTTP endpoints, so clicking them often
404s or hits a third-party page.

If the embedding host can answer "do you serve this canonical?" at a small
JSON endpoint, the viewer will rewrite resolved links to point at the local
copy instead. Configure via two attributes (or omit both for legacy behavior):

```html
<sd-view
  data="..."
  resolve-url="/api/fhir/_resolve"
  link-base="/fhir"
></sd-view>
```

- `resolve-url` — endpoint that answers `GET ?resourceType=…&url=…[&version=…]`
  with `200 {"resolved": true, "resourceType":"…", "id":"…", …}` on hit
  or `200 {"resolved": false}` on miss. `url` may include the FHIR
  `|version` suffix; the endpoint is expected to split it server-side.
- `link-base` — optional URL prefix used to build the rewritten `href`
  (`${link-base}/${resourceType}/${id}`). Defaults to `resolve-url` with
  the trailing `/_resolve` stripped.

Lookups are cached per component instance, so toggle / mode switches don't
refetch. Network errors and misses leave the original canonical href in
place — no error is shown.

## Run locally
```bash
npm run dev
```
