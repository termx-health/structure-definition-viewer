import {ElementDefinition, StructureDefinition} from 'fhir/r5';
import {getPathValue, isDefined, isNil, RecursiveKeyOf} from '../utils/object.util.ts';
import {mergeAndMaintainRelativeOrder} from '../utils/array.util.ts';

export type ElementHolder = {
  diff?: ElementItem,
  snap?: ElementItem,
  hybrid?: ElementItem,
}

export interface ElementItem {
  diff?: ElementDefinition,
  snap?: ElementDefinition,
  children: {[field: string]: ElementItem},
}

interface Pair {
  diff?: ElementDefinition,
  snap?: ElementDefinition,
}


export function mapToKeyValue(fhirObj: StructureDefinition): ElementHolder | undefined {
  if (isNil(fhirObj)) {
    return undefined;
  }

  if (fhirObj.resourceType === 'StructureDefinition') {
    return mapSD(fhirObj);
  }
  return undefined;
}


const mapSD = (def: StructureDefinition): ElementHolder => {
  const pairs = composePairs(def);
  const snapPairs = pairs.filter(i => isDefined(i.snap)).map(i => ({snap: i.snap}));
  const diffPairs = pairs.filter(i => isDefined(i.diff)).map(i => ({diff: i.diff}));

  return {
    hybrid: nestPairs(pairs, def.name),
    snap: nestPairs(snapPairs, def.name),
    diff: nestPairs(diffPairs, def.name)
  };
}

/**
 * @example ElementDefinition
 * {
 *   "id": "MyModel.Specialty",
 *   "max": "*",
 *   "min": 0,
 *   "path": "MyModel.Specialty",
 *   "short": "Eriala kood või nimetus",
 *   "type": [
 *     {
 *       "code": "string"
 *     }
 *   ]
 * },
 */
const composePairs = (def: StructureDefinition): Pair[] => {
  // collect paths from both 'differential' and 'snapshot' versions, hopefully in right order
  const paths = mergeAndMaintainRelativeOrder([
    def.snapshot?.element.map(e => e.path) ?? [],
    def.differential?.element.map(e => e.path) ?? [],
  ])

  return paths.map(p => {
    const diff = def.differential?.element?.find(c => c.path === p);
    const snap = def.snapshot?.element?.find(c => c.path === p);
    return ({
      diff,
      snap
    });
  })
}

const nestPairs = (pairs: Pair[], rootName: string): ElementItem => {
  const $ = (el: Pair, key: RecursiveKeyOf<ElementDefinition>): any => {
    const v2 = getPathValue(el.diff, key);
    const v1 = getPathValue(el.snap, key);
    if (isDefined(v1) && isDefined(v2)) {
      if (v1 !== v2) {
        throw Error(`Different values for key ${key}`)
      }
    }
    return v1 ?? v2
  }

  const root = pairs.find(el => $(el, 'path') === rootName) ?? {
    diff: {path: rootName},
    snap: {path: rootName},
  };

  return pairs
    .filter(i => $(i, 'path') !== $(root, 'path'))
    .reduce((rootAcc: ElementItem, i: Pair) => {
      // ids without the first element, e.g. 'MyModel.Specialty' -> ['Specialty']
      const ids = $(i, 'id').split(/\.|:/).slice(1);
      return {
        ...rootAcc,
        ...nest(rootAcc, ids, i)
      }
    }, {
      ...root,
      children: {}
    } as ElementItem);
}

const nest = (parent: ElementItem, path: string[], p: Pair): ElementItem => {
  parent.children ??= {};
  const [objName, ...rest] = path;

  const magic = (key: string) => {
    return isDefined(parent.children[key])
      ? parent.children[key]
      : parent.children[key] = {...p, children: {}};
  }

  if (path.length === 1) {
    magic(objName)
  }
  if (path.length > 1) {
    const parent = magic(objName);
    nest(parent, rest, p)
  }

  return parent;
}

