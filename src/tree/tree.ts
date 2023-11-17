import {ElementItem, mapToKeyValue} from './util.ts';
import {isDefined, isNil} from '../utils/object.util.ts';
import {ElementDefinition, StructureDefinition} from 'fhir/r5';


export interface TreeNode {
  key: string,
  data: {
    diff?: ElementRepresentation,
    snap?: ElementRepresentation
  },

  parent?: TreeNode,
  children?: TreeNode[],

  selectable: boolean,
  open: boolean
}

export interface ElementRepresentation {
  title: string,
  types?: {
    code: string,
    targetProfiles?: string[]
  }[];

  // aka. description
  // in-progress | completed | amended | entered-in-error | stopped
  // Binding: Questionnaire Response Status (Required)      ^ $short
  //          ^ $binding.valueSet           ^ $binding.strength
  short?: string;
  definition?: string;
  binding?: {
    valueSet?: string,
    strength?: string
  };

  // cardinality
  min?: string;
  max?: string;

  flags: {
    summary?: boolean;
    modifier?: boolean;
    constraint?: boolean;
  };
}

type ProcessingType = 'diff' | 'snap' | 'hybrid'

export class Tree {
  public static process(fhirSD: string, type: ProcessingType): TreeNode | undefined {
    const JSON_TOKEN = '{';

    if (fhirSD.startsWith(JSON_TOKEN)) {
      return this.processObj(JSON.parse(fhirSD), type);
    }

    throw Error('Unknown StructureDefinition source type')
  }


  private static processObj(fhirSd: StructureDefinition, type: ProcessingType): TreeNode | undefined {
    const els = mapToKeyValue(fhirSd);
    console.log(els)

    if (isNil(els)) {
      return
    }

    const el = els[type];
    if (el) {
      return Tree.composeTree(fhirSd.name, el)
    }
  }


  private static composeTree(key: string, item: ElementItem): TreeNode {
    item.children ??= {};
    // create tree node
    const _parentNode: TreeNode = {
      key: key,
      data: {
        diff: this.transformer(key, item.diff),
        snap: this.transformer(key, item.snap),
      },

      // parent: gets set later,
      children: Object.keys(item.children).map(k => this.composeTree(k, item.children[k])),

      selectable: Object.keys(item.children)?.length > 0,
      open: Object.keys(item.children).length > 0
    };

    // set parent node to children
    _parentNode.children?.forEach(c => c.parent = _parentNode)

    return _parentNode;
  }


  private static transformer = (key: string, el?: ElementDefinition): ElementRepresentation | undefined => {
    if (isNil(el)) {
      return undefined
    }

    return ({
      title: key,
      types: el.type?.map(t => ({
        code: t.code,
        targetProfiles: t.targetProfile
      })),

      short: el.short,
      definition: el.definition !== el.short ? el.definition : undefined,
      binding: el.binding ? {
        valueSet: el.binding.valueSet,
        strength: el.binding.strength
      } : undefined,


      min: isDefined(el.min) ? String(el.min) : undefined,
      max: el.max,

      flags: {
        summary: isDefined(el.isSummary) ? el.isSummary : undefined,
        modifier: isDefined(el.isModifier) ? el.isModifier : undefined,
        constraint: isDefined(el.constraint) ? !!el.constraint?.length : undefined
      }
    });
  };
}
