import {StructureDefinition} from 'fhir/r5';

export const structureDefinition: StructureDefinition = {
  "id": "QuestionnaireResponse",
  "url": "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
  "date": "2023-03-26T15:21:02+11:00",
  "kind": "resource",
  "meta": {
    "lastUpdated": "2023-05-31T06:47:22Z",
    "versionId": "2"
  },
  "name": "QuestionnaireResponse",
  "text": {
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border: 0px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;\"><tr style=\"border: 1px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top\"><th style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"The logical name of the element\">Name</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"Information about the use of the element\">Flags</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"Minimum and Maximum # of times the the element can appear in the instance\">Card.</a></th><th style=\"width: 100px\" class=\"hierarchy\"><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"Reference to the type of the element\">Type</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"Additional information about the element\">Description &amp; Constraints</a><span style=\"float: right\"><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"Legend for this format\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goXBCwdPqAP0wAAAldJREFUOMuNk0tIlFEYhp9z/vE2jHkhxXA0zJCMitrUQlq4lnSltEqCFhFG2MJFhIvIFpkEWaTQqjaWZRkp0g26URZkTpbaaOJkDqk10szoODP//7XIMUe0elcfnPd9zsfLOYplGrpRwZaqTtw3K7PtGem7Q6FoidbGgqHVy/HRb669R+56zx7eRV1L31JGxYbBtjKK93cxeqfyQHbehkZbUkK20goELEuIzEd+dHS+qz/Y8PTSif0FnGkbiwcAjHaU1+QWOptFiyCLp/LnKptpqIuXHx6rbR26kJcBX3yLgBfnd7CxwJmflpP2wUg0HIAoUUpZBmKzELGWcN8nAr6Gpu7tLU/CkwAaoKTWRSQyt89Q8w6J+oVQkKnBoblH7V0PPvUOvDYXfopE/SJmALsxnVm6LbkotrUtNowMeIrVrBcBpaMmdS0j9df7abpSuy7HWehwJdt1lhVwi/J58U5beXGAF6c3UXLycw1wdFklArBn87xdh0ZsZtArghBdAA3+OEDVubG4UEzP6x1FOWneHh2VDAHBAt80IbdXDcesNoCvs3E5AFyNSU5nbrDPZpcUEQQTFZiEVx+51fxMhhyJEAgvlriadIJZZksRuwBYMOPBbO3hePVVqgEJhFeUuFLhIPkRP6BQLIBrmMenujm/3g4zc398awIe90Zb5A1vREALqneMcYgP/xVQWlG+Ncu5vgwwlaUNx+3799rfe96u9K0JSDXcOzOTJg4B6IgmXfsygc7/Bvg9g9E58/cDVmGIBOP/zT8Bz1zqWqpbXIsd0O9hajXfL6u4BaOS6SeWAAAAAElFTkSuQmCC\" alt=\"doco\" style=\"background-color: inherit\"/></a></span></th></tr><tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAJUlEQVR4Xu3IIQEAAAgDsHd9/w4EQIOamFnaBgAA4MMKAACAKwNp30CqZFfFmwAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVQ4y4XTv2sUQRTA8e9Mzt3kjoOLSXFgZ6GJQlALCysLC89OsLTXv0VFxE4stRAEQUghSWEXuM4qMZpATsUD70dyMdnduZ15z2IvMV5IfDDNm5nPm59GVTkpms1mTVXvhxDuichlEZn03m+KyJL3/mWj0fiKqp7YVlZWXrfbbR2PTqeji4uLn1WVEqdECKFRr9eP5WdnZ/HeXwROB0TEA3S7XarVKiLC1tYW8/PzeO/5LxBCUABrLXEc02q1KJfLB30F0P144dPU9LVL1kwcrU06WP0ewhML4JwDYDgcHo7I87wAjNq5ypU3Z8arT8F5u/xejw52zmGM+Rcg1wyIcc/BTYCdBlODyh3ElA1AHMekaUoURURRBECWZSNgaGzBxxAU9jfQ9jrJr2dcbbXobRYHlQAzo9X1gDR9+KUArE6CwLefZD9WCW6P0uRZKreXqADkHXZ3dshzjwRholJH397AOXcTwHTfzQ1n7q6NnYEAy+DWQVNwKWQJ6vcx557Se7HAzIN1M9rCwVteA/rAYDRRICQgSZEr7WLYO3bzJVJGQBu0D74PkoHkoBnIHvjfkO9AGABmDHCjFWgH8i7kPQh9yEeYH4DfLhBJgA2A7BBQJ9uwXWY3rhJqFo1AaiB1CBngwKZQcqAeSFSduL9Akj7qPF64jnALS5VTPwdgPwwJ+uog9Qcx4kRZiPKqxgAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse : A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.\">QuestionnaireResponse</span><a name=\"QuestionnaireResponse\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; border: 1px grey solid; font-weight: bold; color: black; background-color: #fff5e6\" href=\"versions.html#std-process\" title=\"Standards Status = Trial Use\">TU</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"domainresource.html\">DomainResource</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">A structured set of questions and their answers<br/><br/>Elements defined in Ancestors: <a href=\"resource.html#Resource\" title=\"The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.\">id</a>, <a href=\"resource.html#Resource\" title=\"The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.\">meta</a>, <a href=\"resource.html#Resource\" title=\"A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.\">implicitRules</a>, <a href=\"resource.html#Resource\" title=\"The base language in which the resource is written.\">language</a>, <a href=\"domainresource.html#DomainResource\" title=\"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it &quot;clinically safe&quot; for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.\">text</a>, <a href=\"domainresource.html#DomainResource\" title=\"These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.\">contained</a>, <a href=\"domainresource.html#DomainResource\" title=\"May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.\">extension</a>, <a href=\"domainresource.html#DomainResource\" title=\"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).\">modifierExtension</a></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAPZ/APrkusOiYvvfqbiXWaV2G+jGhdq1b8GgYf3v1frw3vTUlsWkZNewbcSjY/DQkad4Hb6dXv3u0f3v1ObEgfPTlerJiP3w1v79+e7OkPrfrfnjuNOtZPrpydaxa+/YrvvdpP779ZxvFPvnwKKBQaFyF/369M2vdaqHRPz58/HNh/vowufFhfroxO3OkPrluv779tK0e6JzGProwvrow9m4eOnIifPTlPDPkP78+Naxaf3v0/zowfXRi+bFhLWUVv379/rnwPvszv3rye3LiPvnv+3MjPDasKiIS/789/3x2f747eXDg+7Mifvu0tu7f+/QkfDTnPXWmPrjsvrjtPbPgrqZW+/QlPz48K2EMv36866OUPvowat8Ivvgq/Pbrvzgq/PguvrgrqN0Gda2evfYm9+7d/rpw9q6e/LSku/Rl/XVl/LSlfrkt+zVqe7Wqv3x1/bNffbOf59wFdS6if3u0vrqyP3owPvepfXQivDQkO/PkKh9K7STVf779P///wD/ACH5BAEKAH8ALAAAAAAQABAAAAemgH+CgxeFF4OIhBdKGwFChYl/hYwbdkoBPnaQkosbG3d3VEpSUlonUoY1Gzo6QkI8SrGxWBOFG4uySgY5ZWR3PFy2hnaWZXC/PHcPwkpJk1ShoHcxhQEXSUmtFy6+0iSFVResrjoTPDzdcoU+F65CduVU6KAhhQa3F8Tx8nchBoYuqoTLZoAKFRIhqGwqJAULFx0GYpBQeChRIR4TJm6KJMhQRUSBAAA7\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Data Type\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.identifier : Business identifiers assigned to this questionnaire response by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server.\">identifier</span><a name=\"QuestionnaireResponse.identifier\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#Identifier\">Identifier</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Business identifier for this set of answers<br/><br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.basedOn : A plan, proposal or order that is fulfilled in whole or in part by this questionnaire response.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.\">basedOn</span><a name=\"QuestionnaireResponse.basedOn\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"careplan.html\">CarePlan</a> | <a href=\"servicerequest.html\">ServiceRequest</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Request fulfilled by this QuestionnaireResponse<br/><br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.partOf : A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.\">partOf</span><a name=\"QuestionnaireResponse.partOf\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"observation.html\">Observation</a> | <a href=\"procedure.html\">Procedure</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Part of referenced event<br/><br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.questionnaire : The Questionnaire that defines and organizes the questions for which answers are being provided.\">questionnaire</span><a name=\"QuestionnaireResponse.questionnaire\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#canonical\">canonical</a>(<a href=\"questionnaire.html\">Questionnaire</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Canonical URL of Questionnaire being answered<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.status : The current state of the questionnaire response.\">status</span><a name=\"QuestionnaireResponse.status\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"conformance-rules.html#isModifier\" title=\"This element is a modifier element\">?!</a><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#code\">code</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">in-progress | completed | amended | entered-in-error | stopped<br/>Binding: <a href=\"valueset-questionnaire-answers-status.html\">Questionnaire Response Status</a> (<a href=\"terminologies.html#required\" title=\"To be conformant, the concept in this element SHALL be from the specified value set.\">Required</a>)<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.subject : The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.\">subject</span><a name=\"QuestionnaireResponse.subject\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"resourcelist.html\">Any</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">The subject of the questions<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.encounter : The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.\">encounter</span><a name=\"QuestionnaireResponse.encounter\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"encounter.html\">Encounter</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Encounter the questionnaire response is part of<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.authored : The date and/or time that this questionnaire response was last modified by the user - e.g. changing answers or revising status.\">authored</span><a name=\"QuestionnaireResponse.authored\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#dateTime\">dateTime</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Date the answers were gathered<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.author : The individual or device that received the answers to the questions in the QuestionnaireResponse and recorded them in the system.\">author</span><a name=\"QuestionnaireResponse.author\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"device.html\">Device</a> | <a href=\"practitioner.html\">Practitioner</a> | <a href=\"practitionerrole.html\">PractitionerRole</a> | <a href=\"patient.html\">Patient</a> | <a href=\"relatedperson.html\">RelatedPerson</a> | <a href=\"organization.html\">Organization</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">The individual or device that received and recorded the answers<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALUlEQVR4Xu3IoREAIAwEwfT6/ddA0GBAxO3NrLlKUj9263wAAAAvrgEAADClAVWFQIBRHMicAAAAAElFTkSuQmCC)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.source : The individual or device that answered the questions about the subject.\">source</span><a name=\"QuestionnaireResponse.source\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; color: black; null\" href=\"elementdefinition-definitions.html#ElementDefinition.isSummary\" title=\"This element is included in summaries\">Σ</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"device.html\">Device</a> | <a href=\"organization.html\">Organization</a> | <a href=\"patient.html\">Patient</a> | <a href=\"practitioner.html\">Practitioner</a> | <a href=\"practitionerrole.html\">PractitionerRole</a> | <a href=\"relatedperson.html\">RelatedPerson</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">The individual or device that answered the questions<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAJUlEQVR4Xu3IIQEAAAgDsHd9/w4EQIOamFnaBgAA4MMKAACAKwNp30CqZFfFmwAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzME+lXFigAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+3OsRUAIAjEUOL+O8cJABttJM11/x1qZAGqRBEVcNIqdWj1efDqQbb3HwwwwEfABmQUHSPM9dtDAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAPQfAOvGUf7ztuvPMf/78/fkl/Pbg+u8Rvjqteu2Pf3zxPz36Pz0z+vTmPzurPvuw/npofbjquvNefHVduuyN+uuMu3Oafbgjfnqvf/3zv/3xevPi+vRjP/20/bmsP///wD/ACH5BAEKAB8ALAAAAAAQABAAAAVl4CeOZGme5qCqqDg8jyVJaz1876DsmAQAgqDgltspMEhMJoMZ4iy6I1AooFCIv+wKybziALVAoAEjYLwDgGIpJhMslgxaLR4/3rMAWoBp32V5exg8Shl1ckRUQVaMVkQ2kCstKCEAOw==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Element\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item : A group or question item from the original questionnaire for which answers are provided.\">item</span><a name=\"QuestionnaireResponse.item\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; border: 1px maroon solid; font-weight: bold; color: #301212; background-color: #fdf4f4;\" href=\"conformance-rules.html#constraints\" title=\"This element has or is affected by some invariants\">C</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"types.html#BackBoneElement\">BackboneElement</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Groups and questions<br/><span style=\"font-style: italic\" title=\"qrs-1\">+ Rule: Item cannot contain both item and answer</span><br/><span style=\"font-style: italic\" title=\"qrs-2\">+ Rule: Repeated answers are combined in the answers array of a single item</span><br/><br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALElEQVR4Xu3IsQ0AIAwEsez6+89AqKGGJj7JzVWS+mm3zgcAAMxwDQAAgFcaYAVAgNGLTjgAAAAASUVORK5CYII=)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.linkId : The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.\">linkId</span><a name=\"QuestionnaireResponse.item.linkId\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; border: 1px maroon solid; font-weight: bold; color: #301212; background-color: #fdf4f4;\" href=\"conformance-rules.html#constraints\" title=\"This element has or is affected by some invariants\">C</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Pointer to specific item from Questionnaire<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALElEQVR4Xu3IsQ0AIAwEsez6+89AqKGGJj7JzVWS+mm3zgcAAMxwDQAAgFcaYAVAgNGLTjgAAAAASUVORK5CYII=)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.definition : A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.\">definition</span><a name=\"QuestionnaireResponse.item.definition\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#uri\">uri</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">ElementDefinition - details for the item<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALElEQVR4Xu3IsQ0AIAwEsez6+89AqKGGJj7JzVWS+mm3zgcAAMxwDQAAgFcaYAVAgNGLTjgAAAAASUVORK5CYII=)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.text : Text that is displayed above the contents of the group or as the text of the question being answered.\">text</span><a name=\"QuestionnaireResponse.item.text\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Name for group or question text<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALElEQVR4Xu3IsQ0AIAwEsez6+89AqKGGJj7JzVWS+mm3zgcAAMxwDQAAgFcaYAVAgNGLTjgAAAAASUVORK5CYII=)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAPQfAOvGUf7ztuvPMf/78/fkl/Pbg+u8Rvjqteu2Pf3zxPz36Pz0z+vTmPzurPvuw/npofbjquvNefHVduuyN+uuMu3Oafbgjfnqvf/3zv/3xevPi+vRjP/20/bmsP///wD/ACH5BAEKAB8ALAAAAAAQABAAAAVl4CeOZGme5qCqqDg8jyVJaz1876DsmAQAgqDgltspMEhMJoMZ4iy6I1AooFCIv+wKybziALVAoAEjYLwDgGIpJhMslgxaLR4/3rMAWoBp32V5exg8Shl1ckRUQVaMVkQ2kCstKCEAOw==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Element\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.answer : The respondent's answer(s) to the question.\">answer</span><a name=\"QuestionnaireResponse.item.answer\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; border: 1px maroon solid; font-weight: bold; color: #301212; background-color: #fdf4f4;\" href=\"conformance-rules.html#constraints\" title=\"This element has or is affected by some invariants\">C</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"types.html#BackBoneElement\">BackboneElement</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">The response(s) to the question<br/><br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbUSUZsLXPMglaReGmtz23H6BwAA/lkCAADALR1gq0BWueJ34gAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAMQfAGm6/idTd4yTmF+v8Xa37KvW+lyh3KHJ62aq41ee2bXZ98nm/2mt5W2Ck5XN/C1chEZieho8WXXA/2Gn4P39/W+y6V+l3qjP8Njt/lx2izxPYGyv51Oa1EJWZ////////yH5BAEAAB8ALAAAAAAQABAAAAWH4Cd+Xml6Y0pCQts0EKp6GbYshaM/skhjhCChUmFIeL4OsHIxXRAISQTl6SgIG8+FgfBMoh2qtbLZQr0TQJhk3TC4pYPBApiyFVDEwSOf18UFXxMWBoUJBn9sDgmDewcJCRyJJBoEkRyYmAABPZQEAAOhA5seFDMaDw8BAQ9TpiokJyWwtLUhADs=\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Choice of Types\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.answer.value[x] : The answer (or one of the answers) provided by the respondent to the question.\">value[x]</span><a name=\"QuestionnaireResponse.item.answer.value_x_\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a style=\"padding-left: 3px; padding-right: 3px; border: 1px maroon solid; font-weight: bold; color: #301212; background-color: #fdf4f4;\" href=\"conformance-rules.html#constraints\" title=\"This element has or is affected by some invariants\">C</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Single-valued answer to the question<br/>Binding: <a href=\"valueset-questionnaire-answers.html\" title=\"Code indicating the response provided for a question.\">Questionnaire Answer Codes</a> (<a href=\"terminologies.html#example\" title=\"Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.\">Example</a>)<br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"Value of &quot;true&quot; or &quot;false&quot;\">valueBoolean</span></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#boolean\">boolean</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"A rational number with implicit precision\">valueDecimal</span></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#decimal\">decimal</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"A whole number\">valueInteger</span></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#integer\">integer</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"A date or partial date (e.g. just year or year + month). There is no UTC offset. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.\">valueDate</span></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#date\">date</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a UTC offset SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.\">valueDateTime</span></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#dateTime\">dateTime</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"A time during the day, with no date specified\">valueTime</span></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#time\">time</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"A sequence of Unicode characters\">valueString</span></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQ4y2P8//8/AyWAhYFCMAgMuHjx4n+KXaCv+I0szW8WpCG8kFO1lGFKW/SIjAUYgxz/MzAwMDC+nqhDUTQyjuYFBgCNmhP4OvTRgwAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Primitive Data Type\" class=\"hierarchy\"/> <span title=\"String of characters used to identify a name or a resource\">valueUri</span></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#uri\">uri</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAPZ/APrkusOiYvvfqbiXWaV2G+jGhdq1b8GgYf3v1frw3vTUlsWkZNewbcSjY/DQkad4Hb6dXv3u0f3v1ObEgfPTlerJiP3w1v79+e7OkPrfrfnjuNOtZPrpydaxa+/YrvvdpP779ZxvFPvnwKKBQaFyF/369M2vdaqHRPz58/HNh/vowufFhfroxO3OkPrluv779tK0e6JzGProwvrow9m4eOnIifPTlPDPkP78+Naxaf3v0/zowfXRi+bFhLWUVv379/rnwPvszv3rye3LiPvnv+3MjPDasKiIS/789/3x2f747eXDg+7Mifvu0tu7f+/QkfDTnPXWmPrjsvrjtPbPgrqZW+/QlPz48K2EMv36866OUPvowat8Ivvgq/Pbrvzgq/PguvrgrqN0Gda2evfYm9+7d/rpw9q6e/LSku/Rl/XVl/LSlfrkt+zVqe7Wqv3x1/bNffbOf59wFdS6if3u0vrqyP3owPvepfXQivDQkO/PkKh9K7STVf779P///wD/ACH5BAEKAH8ALAAAAAAQABAAAAemgH+CgxeFF4OIhBdKGwFChYl/hYwbdkoBPnaQkosbG3d3VEpSUlonUoY1Gzo6QkI8SrGxWBOFG4uySgY5ZWR3PFy2hnaWZXC/PHcPwkpJk1ShoHcxhQEXSUmtFy6+0iSFVResrjoTPDzdcoU+F65CduVU6KAhhQa3F8Tx8nchBoYuqoTLZoAKFRIhqGwqJAULFx0GYpBQeChRIR4TJm6KJMhQRUSBAAA7\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Data Type\" class=\"hierarchy\"/> <span title=\"For referring to data content defined in other formats.\">valueAttachment</span></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#Attachment\">Attachment</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAPZ/APrkusOiYvvfqbiXWaV2G+jGhdq1b8GgYf3v1frw3vTUlsWkZNewbcSjY/DQkad4Hb6dXv3u0f3v1ObEgfPTlerJiP3w1v79+e7OkPrfrfnjuNOtZPrpydaxa+/YrvvdpP779ZxvFPvnwKKBQaFyF/369M2vdaqHRPz58/HNh/vowufFhfroxO3OkPrluv779tK0e6JzGProwvrow9m4eOnIifPTlPDPkP78+Naxaf3v0/zowfXRi+bFhLWUVv379/rnwPvszv3rye3LiPvnv+3MjPDasKiIS/789/3x2f747eXDg+7Mifvu0tu7f+/QkfDTnPXWmPrjsvrjtPbPgrqZW+/QlPz48K2EMv36866OUPvowat8Ivvgq/Pbrvzgq/PguvrgrqN0Gda2evfYm9+7d/rpw9q6e/LSku/Rl/XVl/LSlfrkt+zVqe7Wqv3x1/bNffbOf59wFdS6if3u0vrqyP3owPvepfXQivDQkO/PkKh9K7STVf779P///wD/ACH5BAEKAH8ALAAAAAAQABAAAAemgH+CgxeFF4OIhBdKGwFChYl/hYwbdkoBPnaQkosbG3d3VEpSUlonUoY1Gzo6QkI8SrGxWBOFG4uySgY5ZWR3PFy2hnaWZXC/PHcPwkpJk1ShoHcxhQEXSUmtFy6+0iSFVResrjoTPDzdcoU+F65CduVU6KAhhQa3F8Tx8nchBoYuqoTLZoAKFRIhqGwqJAULFx0GYpBQeChRIR4TJm6KJMhQRUSBAAA7\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Data Type\" class=\"hierarchy\"/> <span title=\"A reference to a code defined by a terminology system.\">valueCoding</span></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#Coding\">Coding</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbVSUJsLXPMglaReGmtz2/H7DwAAnFsCAADALR1r0UAs80WDJQAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzI3XJ6V3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+2RsQ0AIAzDav7/2VzQwoCY4iWbZSmo1QGoUgNMghvWaIejPQW/CrrNCylIwcOCDYfLNRcNer4SAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,R0lGODlhEAAQAPZ/APrkusOiYvvfqbiXWaV2G+jGhdq1b8GgYf3v1frw3vTUlsWkZNewbcSjY/DQkad4Hb6dXv3u0f3v1ObEgfPTlerJiP3w1v79+e7OkPrfrfnjuNOtZPrpydaxa+/YrvvdpP779ZxvFPvnwKKBQaFyF/369M2vdaqHRPz58/HNh/vowufFhfroxO3OkPrluv779tK0e6JzGProwvrow9m4eOnIifPTlPDPkP78+Naxaf3v0/zowfXRi+bFhLWUVv379/rnwPvszv3rye3LiPvnv+3MjPDasKiIS/789/3x2f747eXDg+7Mifvu0tu7f+/QkfDTnPXWmPrjsvrjtPbPgrqZW+/QlPz48K2EMv36866OUPvowat8Ivvgq/Pbrvzgq/PguvrgrqN0Gda2evfYm9+7d/rpw9q6e/LSku/Rl/XVl/LSlfrkt+zVqe7Wqv3x1/bNffbOf59wFdS6if3u0vrqyP3owPvepfXQivDQkO/PkKh9K7STVf779P///wD/ACH5BAEKAH8ALAAAAAAQABAAAAemgH+CgxeFF4OIhBdKGwFChYl/hYwbdkoBPnaQkosbG3d3VEpSUlonUoY1Gzo6QkI8SrGxWBOFG4uySgY5ZWR3PFy2hnaWZXC/PHcPwkpJk1ShoHcxhQEXSUmtFy6+0iSFVResrjoTPDzdcoU+F65CduVU6KAhhQa3F8Tx8nchBoYuqoTLZoAKFRIhqGwqJAULFx0GYpBQeChRIR4TJm6KJMhQRUSBAAA7\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Data Type\" class=\"hierarchy\"/> valueQuantity</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"datatypes.html#SimpleQuantity\">SimpleQuantity</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAMUlEQVR4Xu3LsQkAIBRDwb9r9p9BrbUSUZsLXPMglaReGmtz23H6BwAA/lkCAADALR1gq0BWueJ34gAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzME+lXFigAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+3OsRUAIAjEUOL+O8cJABttJM11/x1qZAGqRBEVcNIqdWj1efDqQbb3HwwwwEfABmQUHSPM9dtDAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAFxJREFUOE/NjEEOACEIA/0o/38GGw+agoXYeNnDJDCUDnd/gkoFKhWozJiZI3gLwY6rAgxhsPKTPUzycTl8lAryMyMsVQG6TFi6cHULyz8KOjC7OIQKlQpU3uPjAwhX2CCcGsgOAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Reference to another Resource\" class=\"hierarchy\"/> valueReference</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"references.html#Reference\">Reference</a>(<a href=\"resourcelist.html\">Any</a>)</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAALElEQVR4Xu3IsQ0AIAwEsez6+89AqKGGJj7JzVWS+mm3zgcAAMxwDQAAgFcaYAVAgNGLTjgAAAAASUVORK5CYII=)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzMPbYccAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAMElEQVQ4y+3OQREAIBDDwAv+PQcFFN5MIyCzqHMKUGVCpMFLK97heq+gggoq+EiwAVjvMhFGmlEUAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzME+lXFigAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+3OsRUAIAjEUOL+O8cJABttJM11/x1qZAGqRBEVcNIqdWj1efDqQbb3HwwwwEfABmQUHSPM9dtDAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKjSURBVDjLrZLdT1JhHMfd6q6L7voT3NrEuQq6aTircWFQ04u4MetCZ4UXGY2J1UoMdCoWxMZWDWtrrqHgylZ54RbkZtkiJ5aAku8MXXqQl3PgAOfb8xwq5LrOzmfnd34vn+d5tqcMQNm/UPZfBMHXx2ZWvI386odLe7jIL7w5EQ68qjhEOFjCmMj+v4LQmCwtCHkSCuSlFOIst4X1KU1mbUqT/kPki57bmL6xEnx55HxRMCqNCTkO6fUBpH5YkFoeBLsyAiHLEFcSQi5B2C38Z3eAPJ8JjcrmigKnLJ7nd8mwDcnFh4h/68T29FVsfW4F4zeCmb0LZqYDO191hOtkZ5sIuY8lioJhKZ9lo2DmbNjx9WDTowW7+YmsGv+9Ov3GijsgxwsNy7iiYOg4L54/nyawQC4lDubYANIRG7g1I9glHVILl5EMNCCXnEfouXSP4JksI+RY5OIfkWXGwf8cQSb6hAz2gV2+BXaxFangBSS/n0PCfxq5xAxCg3sFj2TpPB8Hvz2G3dWneOvqhLnPCIfDgd5uPebfNyAyrUR/t1bMmft7MdR1NiuXyw8UBDYpJ/AMkhsOPLa2wmKxIBqNIhwOw+Px4EG/Hvb7GoSCc2JucnJS7FEqlb2FizRwNMLHFmPvXnQJN/U6+Px+3LvdApVKiebmZlitVuj1ejFWqc7AZNCJEq1WGxMFAVPFtUCPZKhDXZUyGu6IAr+pklOclGNiYgI+nw9erxculws0N2uqjFOBwWDgSu61RCK50tLSwlBBfX39eE1NDa9QKFBXVydCY5qjNSqgvSWCw+RRqVTzZrOZcTqd2263G3a7HW1tbWhvbxdjmqM12kN7SwTl5eX7qqurq2pra5eampqSGo2GI2TUanUj4RSJ4zRHa7SH9v4C8Nrl+GFh7LoAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Reference to another Element\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.answer.item : Nested groups and/or questions found within this particular answer.\">item</span><a name=\"QuestionnaireResponse.item.answer.item\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">see <a href=\"#QuestionnaireResponse.item\" title=\"QuestionnaireResponse.item\">item</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Child items of question<br/><br/></td></tr>\r\n<tr style=\"border: 0px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAACCAYAAACg/LjIAAAAJUlEQVR4Xu3IIQEAAAgDsHd9/w4EQIOamFnaBgAA4MMKAACAKwNp30CqZFfFmwAAAABJRU5ErkJggg==)\" class=\"hierarchy\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAWCAYAAAABxvaqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIs1vtcMQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAE0lEQVQI12P4//8/AxMDAwNdCABMPwMo2ctnoQAAAABJRU5ErkJggg==\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzIZgEiYEgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIElEQVQ4y2P8//8/AyWAiYFCMGrAqAGjBowaMGoAAgAALL0DKYQ0DPIAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYeFzME+lXFigAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAANklEQVQ4y+3OsRUAIAjEUOL+O8cJABttJM11/x1qZAGqRBEVcNIqdWj1efDqQbb3HwwwwEfABmQUHSPM9dtDAAAAAElFTkSuQmCC\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKjSURBVDjLrZLdT1JhHMfd6q6L7voT3NrEuQq6aTircWFQ04u4MetCZ4UXGY2J1UoMdCoWxMZWDWtrrqHgylZ54RbkZtkiJ5aAku8MXXqQl3PgAOfb8xwq5LrOzmfnd34vn+d5tqcMQNm/UPZfBMHXx2ZWvI386odLe7jIL7w5EQ68qjhEOFjCmMj+v4LQmCwtCHkSCuSlFOIst4X1KU1mbUqT/kPki57bmL6xEnx55HxRMCqNCTkO6fUBpH5YkFoeBLsyAiHLEFcSQi5B2C38Z3eAPJ8JjcrmigKnLJ7nd8mwDcnFh4h/68T29FVsfW4F4zeCmb0LZqYDO191hOtkZ5sIuY8lioJhKZ9lo2DmbNjx9WDTowW7+YmsGv+9Ov3GijsgxwsNy7iiYOg4L54/nyawQC4lDubYANIRG7g1I9glHVILl5EMNCCXnEfouXSP4JksI+RY5OIfkWXGwf8cQSb6hAz2gV2+BXaxFangBSS/n0PCfxq5xAxCg3sFj2TpPB8Hvz2G3dWneOvqhLnPCIfDgd5uPebfNyAyrUR/t1bMmft7MdR1NiuXyw8UBDYpJ/AMkhsOPLa2wmKxIBqNIhwOw+Px4EG/Hvb7GoSCc2JucnJS7FEqlb2FizRwNMLHFmPvXnQJN/U6+Px+3LvdApVKiebmZlitVuj1ejFWqc7AZNCJEq1WGxMFAVPFtUCPZKhDXZUyGu6IAr+pklOclGNiYgI+nw9erxculws0N2uqjFOBwWDgSu61RCK50tLSwlBBfX39eE1NDa9QKFBXVydCY5qjNSqgvSWCw+RRqVTzZrOZcTqd2263G3a7HW1tbWhvbxdjmqM12kN7SwTl5eX7qqurq2pra5eampqSGo2GI2TUanUj4RSJ4zRHa7SH9v4C8Nrl+GFh7LoAAAAASUVORK5CYII=\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Reference to another Element\" class=\"hierarchy\"/> <span title=\"QuestionnaireResponse.item.item : Sub-questions, sub-groups or display items nested beneath a group.\">item</span><a name=\"QuestionnaireResponse.item.item\"> </a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..*</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">see <a href=\"#QuestionnaireResponse.item\" title=\"QuestionnaireResponse.item\">item</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 0px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Child items of group item<br/><br/></td></tr>\r\n<tr><td colspan=\"5\" class=\"hierarchy\"><br/><a href=\"https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#table-views\" title=\"Legend for this format\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goXBCwdPqAP0wAAAldJREFUOMuNk0tIlFEYhp9z/vE2jHkhxXA0zJCMitrUQlq4lnSltEqCFhFG2MJFhIvIFpkEWaTQqjaWZRkp0g26URZkTpbaaOJkDqk10szoODP//7XIMUe0elcfnPd9zsfLOYplGrpRwZaqTtw3K7PtGem7Q6FoidbGgqHVy/HRb669R+56zx7eRV1L31JGxYbBtjKK93cxeqfyQHbehkZbUkK20goELEuIzEd+dHS+qz/Y8PTSif0FnGkbiwcAjHaU1+QWOptFiyCLp/LnKptpqIuXHx6rbR26kJcBX3yLgBfnd7CxwJmflpP2wUg0HIAoUUpZBmKzELGWcN8nAr6Gpu7tLU/CkwAaoKTWRSQyt89Q8w6J+oVQkKnBoblH7V0PPvUOvDYXfopE/SJmALsxnVm6LbkotrUtNowMeIrVrBcBpaMmdS0j9df7abpSuy7HWehwJdt1lhVwi/J58U5beXGAF6c3UXLycw1wdFklArBn87xdh0ZsZtArghBdAA3+OEDVubG4UEzP6x1FOWneHh2VDAHBAt80IbdXDcesNoCvs3E5AFyNSU5nbrDPZpcUEQQTFZiEVx+51fxMhhyJEAgvlriadIJZZksRuwBYMOPBbO3hePVVqgEJhFeUuFLhIPkRP6BQLIBrmMenujm/3g4zc398awIe90Zb5A1vREALqneMcYgP/xVQWlG+Ncu5vgwwlaUNx+3799rfe96u9K0JSDXcOzOTJg4B6IgmXfsygc7/Bvg9g9E58/cDVmGIBOP/zT8Bz1zqWqpbXIsd0O9hajXfL6u4BaOS6SeWAAAAAElFTkSuQmCC\" alt=\"doco\" style=\"background-color: inherit\"/> Documentation for this format</a></td></tr></table></div>",
    "status": "generated"
  },
  "type": "QuestionnaireResponse",
  "status": "draft",
  "contact": [
    {
      "telecom": [
        {
          "value": "http://hl7.org/fhir",
          "system": "url"
        }
      ]
    },
    {
      "telecom": [
        {
          "value": "http://www.hl7.org/Special/committees/fiwg/index.cfm",
          "system": "url"
        }
      ]
    }
  ],
  "mapping": [
    {
      "uri": "http://hl7.org/fhir/workflow",
      "name": "Workflow Pattern",
      "identity": "workflow"
    },
    {
      "uri": "http://hl7.org/fhir/fivews",
      "name": "FiveWs Pattern Mapping",
      "identity": "w5"
    },
    {
      "uri": "http://hl7.org/v3",
      "name": "RIM Mapping",
      "identity": "rim"
    }
  ],
  "purpose": "To support structured, hierarchical reporting of data gathered using digital forms and other questionnaires.",
  "version": "5.0.0",
  "abstract": false,
  "snapshot": {
    "element": [
      {
        "id": "QuestionnaireResponse",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse"
        },
        "path": "QuestionnaireResponse",
        "alias": [
          "Form",
          "QuestionnaireAnswers"
        ],
        "short": "A structured set of questions and their answers",
        "comment": "The QuestionnaireResponse contains enough information about the questions asked and their organization that it can be interpreted somewhat independently from the Questionnaire it is based on.  I.e. You don't need access to the Questionnaire in order to extract basic information from a QuestionnaireResponse.",
        "mapping": [
          {
            "map": "Entity, Role, or Act,Observation[moodCode=EVN]",
            "identity": "rim"
          },
          {
            "map": "Event",
            "identity": "workflow"
          },
          {
            "map": "infrastructure.information",
            "identity": "w5"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "dom-2",
            "human": "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
            "source": "http://hl7.org/fhir/StructureDefinition/DomainResource",
            "severity": "error",
            "expression": "contained.contained.empty()"
          },
          {
            "key": "dom-3",
            "human": "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
            "source": "http://hl7.org/fhir/StructureDefinition/DomainResource",
            "severity": "error",
            "expression": "contained.where((('#'+id in (%resource.descendants().reference | %resource.descendants().ofType(canonical) | %resource.descendants().ofType(uri) | %resource.descendants().ofType(url))) or descendants().where(reference = '#').exists() or descendants().where(ofType(canonical) = '#').exists() or descendants().where(ofType(canonical) = '#').exists()).not()).trace('unmatched', id).empty()"
          },
          {
            "key": "dom-4",
            "human": "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
            "source": "http://hl7.org/fhir/StructureDefinition/DomainResource",
            "severity": "error",
            "expression": "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()"
          },
          {
            "key": "dom-5",
            "human": "If a resource is contained in another resource, it SHALL NOT have a security label",
            "source": "http://hl7.org/fhir/StructureDefinition/DomainResource",
            "severity": "error",
            "expression": "contained.meta.security.empty()"
          },
          {
            "key": "dom-6",
            "human": "A resource should have narrative for robust management",
            "source": "http://hl7.org/fhir/StructureDefinition/DomainResource",
            "severity": "warning",
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
                "valueBoolean": true
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
                "valueMarkdown": "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time."
              }
            ],
            "expression": "text.`div`.exists()"
          }
        ],
        "definition": "A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.id",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "Resource.id"
        },
        "path": "QuestionnaireResponse.id",
        "type": [
          {
            "code": "http://hl7.org/fhirpath/System.String",
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
                "valueUrl": "id"
              }
            ]
          }
        ],
        "short": "Logical id of this artifact",
        "comment": "Within the context of the FHIR RESTful interactions, the resource has an id except for cases like the create and conditional update. Otherwise, the use of the resouce id depends on the given use case.",
        "isSummary": true,
        "definition": "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.meta",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "Resource.meta"
        },
        "path": "QuestionnaireResponse.meta",
        "type": [
          {
            "code": "Meta"
          }
        ],
        "short": "Metadata about the resource",
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.implicitRules",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "Resource.implicitRules"
        },
        "path": "QuestionnaireResponse.implicitRules",
        "type": [
          {
            "code": "uri"
          }
        ],
        "short": "A set of rules under which this content was created",
        "comment": "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of its narrative along with other profiles, value sets, etc.",
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
        "isModifier": true,
        "mustSupport": false,
        "isModifierReason": "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies its meaning or interpretation"
      },
      {
        "id": "QuestionnaireResponse.language",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "Resource.language"
        },
        "path": "QuestionnaireResponse.language",
        "type": [
          {
            "code": "code"
          }
        ],
        "short": "Language of the resource content",
        "binding": {
          "strength": "required",
          "valueSet": "http://hl7.org/fhir/ValueSet/all-languages|5.0.0",
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              "valueString": "Language"
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              "valueBoolean": true
            }
          ],
          "description": "IETF language tag for a human language"
        },
        "comment": "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The base language in which the resource is written.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.text",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "DomainResource.text"
        },
        "path": "QuestionnaireResponse.text",
        "type": [
          {
            "code": "Narrative"
          }
        ],
        "alias": [
          "narrative",
          "html",
          "xhtml",
          "display"
        ],
        "short": "Text summary of the resource, for human interpretation",
        "comment": "Contained resources do not have a narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a \"text blob\" or where text is additionally entered raw or narrated and encoded information is added later.",
        "mapping": [
          {
            "map": "Act.text?",
            "identity": "rim"
          }
        ],
        "condition": [
          "dom-6"
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.contained",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "DomainResource.contained"
        },
        "path": "QuestionnaireResponse.contained",
        "type": [
          {
            "code": "Resource"
          }
        ],
        "alias": [
          "inline resources",
          "anonymous resources",
          "contained resources"
        ],
        "short": "Contained, inline Resources",
        "comment": "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags in their meta elements, but SHALL NOT have security labels.",
        "mapping": [
          {
            "map": "N/A",
            "identity": "rim"
          }
        ],
        "condition": [
          "dom-2",
          "dom-4",
          "dom-3",
          "dom-5"
        ],
        "isSummary": false,
        "definition": "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.extension",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "DomainResource.extension"
        },
        "path": "QuestionnaireResponse.extension",
        "type": [
          {
            "code": "Extension"
          }
        ],
        "alias": [
          "extensions",
          "user content"
        ],
        "short": "Additional content defined by implementations",
        "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "mapping": [
          {
            "map": "N/A",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "ext-1",
            "human": "Must have either extensions or value[x], not both",
            "source": "http://hl7.org/fhir/StructureDefinition/Extension",
            "severity": "error",
            "expression": "extension.exists() != value.exists()"
          }
        ],
        "definition": "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.modifierExtension",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "DomainResource.modifierExtension"
        },
        "path": "QuestionnaireResponse.modifierExtension",
        "type": [
          {
            "code": "Extension"
          }
        ],
        "alias": [
          "extensions",
          "user content"
        ],
        "short": "Extensions that cannot be ignored",
        "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "mapping": [
          {
            "map": "N/A",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "ext-1",
            "human": "Must have either extensions or value[x], not both",
            "source": "http://hl7.org/fhir/StructureDefinition/Extension",
            "severity": "error",
            "expression": "extension.exists() != value.exists()"
          }
        ],
        "definition": "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "isModifier": true,
        "mustSupport": false,
        "requirements": "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "isModifierReason": "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them"
      },
      {
        "id": "QuestionnaireResponse.identifier",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.identifier"
        },
        "path": "QuestionnaireResponse.identifier",
        "type": [
          {
            "code": "Identifier"
          }
        ],
        "short": "Business identifier for this set of answers",
        "comment": "Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).",
        "mapping": [
          {
            "map": "Event.identifier",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.identifier",
            "identity": "w5"
          },
          {
            "map": ".id",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "Business identifiers assigned to this questionnaire response by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Allows identification of the questionnaire response as it is known by various participating systems and in a way that remains consistent across servers."
      },
      {
        "id": "QuestionnaireResponse.basedOn",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.basedOn"
        },
        "path": "QuestionnaireResponse.basedOn",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/CarePlan",
              "http://hl7.org/fhir/StructureDefinition/ServiceRequest"
            ]
          }
        ],
        "alias": [
          "order"
        ],
        "short": "Request fulfilled by this QuestionnaireResponse",
        "mapping": [
          {
            "map": "Event.basedOn",
            "identity": "workflow"
          },
          {
            "map": ".outboundRelationship[typeCode=FLFS].target",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "A plan, proposal or order that is fulfilled in whole or in part by this questionnaire response.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Supports traceability of responsibility for the questionnaire response and allows linkage of the response to the proposals/recommendations acted upon."
      },
      {
        "id": "QuestionnaireResponse.partOf",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.partOf"
        },
        "path": "QuestionnaireResponse.partOf",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Observation",
              "http://hl7.org/fhir/StructureDefinition/Procedure"
            ]
          }
        ],
        "short": "Part of referenced event",
        "comment": "Not to be used to link an questionnaire response to an Encounter - use 'context' for that.\n\nComposition of questionnaire responses will be handled using the Assemble operation defined in the SDC IG.  For relationships to referrals, and other types of requests, use basedOn.",
        "mapping": [
          {
            "map": "Event.partOf",
            "identity": "workflow"
          },
          {
            "map": ".inboundRelationship[typeCode=COMP].source[moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.questionnaire",
        "max": "1",
        "min": 1,
        "base": {
          "max": "1",
          "min": 1,
          "path": "QuestionnaireResponse.questionnaire"
        },
        "path": "QuestionnaireResponse.questionnaire",
        "type": [
          {
            "code": "canonical",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Questionnaire"
            ]
          }
        ],
        "alias": [
          "Form"
        ],
        "short": "Canonical URL of Questionnaire being answered",
        "comment": "If a QuestionnaireResponse references a Questionnaire that can be resolved, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).  It is possible to have a QuestionnaireResponse whose 'questionnaire' element does not resolve.  It is also possible for the questionnaire element to not have a value but only extensions (e.g. conveying the title or identifier for the questionnaire).  This may happen for legacy data.  If there is no formally defined Questionnaire, it is undefined what the 'correct' values for the linkId elements should be and it is possible that linkIds might be inconsistent for QuestionnaireResponses for the same form if captured by distinct systems.",
        "mapping": [
          {
            "map": "./outboundRelationship[typeCode=INST]/target[classCode=OBS, moodCode=DEFN]",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The Questionnaire that defines and organizes the questions for which answers are being provided.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Needed to allow editing of the questionnaire response in a manner that enforces the constraints of the original form."
      },
      {
        "id": "QuestionnaireResponse.status",
        "max": "1",
        "min": 1,
        "base": {
          "max": "1",
          "min": 1,
          "path": "QuestionnaireResponse.status"
        },
        "path": "QuestionnaireResponse.status",
        "type": [
          {
            "code": "code"
          }
        ],
        "short": "in-progress | completed | amended | entered-in-error | stopped",
        "binding": {
          "strength": "required",
          "valueSet": "http://hl7.org/fhir/ValueSet/questionnaire-answers-status|5.0.0",
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              "valueString": "QuestionnaireResponseStatus"
            }
          ],
          "description": "Lifecycle status of the questionnaire response."
        },
        "comment": "Unknown does not represent \"other\" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.",
        "mapping": [
          {
            "map": "Event.status",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.status",
            "identity": "w5"
          },
          {
            "map": ".statusCode (also whether there's a revisionControlAct - and possibly mood to distinguish \"in-progress\" from \"published)",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The current state of the questionnaire response.",
        "isModifier": true,
        "mustSupport": false,
        "requirements": "The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished.",
        "isModifierReason": "This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid"
      },
      {
        "id": "QuestionnaireResponse.subject",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.subject"
        },
        "path": "QuestionnaireResponse.subject",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Resource"
            ]
          }
        ],
        "alias": [
          "Patient",
          "Focus"
        ],
        "short": "The subject of the questions",
        "comment": "If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.",
        "mapping": [
          {
            "map": "Event.subject",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.subject[x]",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=SBJ].role",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Links the questionnaire response to the Patient context.  May also affect access control."
      },
      {
        "id": "QuestionnaireResponse.encounter",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.encounter"
        },
        "path": "QuestionnaireResponse.encounter",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Encounter"
            ]
          }
        ],
        "short": "Encounter the questionnaire response is part of",
        "comment": "This will typically be the encounter the questionnaire response was created during, but some questionnaire responses may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission forms).  A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.",
        "mapping": [
          {
            "map": "Event.encounter",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.context",
            "identity": "w5"
          },
          {
            "map": ".inboundRelationship(typeCode=COMP].source[classCode<=PCPR, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Links the questionnaire response to the Encounter context.  May also affect access control."
      },
      {
        "id": "QuestionnaireResponse.authored",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.authored"
        },
        "path": "QuestionnaireResponse.authored",
        "type": [
          {
            "code": "dateTime"
          }
        ],
        "alias": [
          "Date Created",
          "Date published",
          "Date Issued",
          "Date updated"
        ],
        "short": "Date the answers were gathered",
        "comment": "May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.\n\nThis element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.",
        "mapping": [
          {
            "map": "Event.recorded",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.recorded",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=AUT].time",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The date and/or time that this questionnaire response was last modified by the user - e.g. changing answers or revising status.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers."
      },
      {
        "id": "QuestionnaireResponse.author",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.author"
        },
        "path": "QuestionnaireResponse.author",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole2",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
              "http://hl7.org/fhir/StructureDefinition/Organization"
            ]
          }
        ],
        "alias": [
          "Laboratory",
          "Service",
          "Practitioner",
          "Department",
          "Company",
          "Performer"
        ],
        "short": "The individual or device that received and recorded the answers",
        "comment": "Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation. Authoring by device would indicate that some portion of the questionnaire had been auto-populated. Device should only be used if it directly determined the answers, not if it was merely used as a capture tool to record answers provided by others. In the latter case, information about the physical device, software, etc. would be captured using Provenance.",
        "mapping": [
          {
            "map": "Event.performer.actor",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.author",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=AUT].role",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The individual or device that received the answers to the questions in the QuestionnaireResponse and recorded them in the system.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Need to know who interpreted the subject's answers to the questions in the questionnaire, and selected the appropriate options for answers."
      },
      {
        "id": "QuestionnaireResponse.source",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.source"
        },
        "path": "QuestionnaireResponse.source",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Organization",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson"
            ]
          }
        ],
        "short": "The individual or device that answered the questions",
        "comment": "If not specified, no inference can be made about who provided the data. Device should only be used if it directly determined the answers, not if it was merely used as a capture tool to record answers provided by others. In the latter case, information about the physical device, software, etc. would be captured using Provenance.",
        "mapping": [
          {
            "map": "FiveWs.source",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=INF].role",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The individual or device that answered the questions about the subject.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "When answering questions about a subject that is minor, incapable of answering or an animal, another human source may answer the questions."
      },
      {
        "id": "QuestionnaireResponse.item",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.item"
        },
        "path": "QuestionnaireResponse.item",
        "type": [
          {
            "code": "BackboneElement"
          }
        ],
        "short": "Groups and questions",
        "comment": "Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).\\nWhen dealing with repeating items, each group repetition will be handled by a separate item.  However, repeating questions are handled with a single question item and potentially multiple answers.",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=COMP].target[classCode=OBS, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "qrs-1",
            "human": "Item cannot contain both item and answer",
            "source": "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
            "severity": "error",
            "expression": "(answer.exists() and item.exists()).not()"
          },
          {
            "key": "qrs-2",
            "human": "Repeated answers are combined in the answers array of a single item",
            "source": "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
            "severity": "error",
            "expression": "repeat(answer|item).select(item.where(answer.value.exists()).linkId.isDistinct()).allTrue()"
          }
        ],
        "definition": "A group or question item from the original questionnaire for which answers are provided.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.item.id",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "Element.id"
        },
        "path": "QuestionnaireResponse.item.id",
        "type": [
          {
            "code": "http://hl7.org/fhirpath/System.String",
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
                "valueUrl": "string"
              }
            ]
          }
        ],
        "short": "Unique id for inter-element referencing",
        "mapping": [
          {
            "map": "n/a",
            "identity": "rim"
          }
        ],
        "condition": [
          "ele-1"
        ],
        "isSummary": false,
        "definition": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "isModifier": false,
        "representation": [
          "xmlAttr"
        ]
      },
      {
        "id": "QuestionnaireResponse.item.extension",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "Element.extension"
        },
        "path": "QuestionnaireResponse.item.extension",
        "type": [
          {
            "code": "Extension"
          }
        ],
        "alias": [
          "extensions",
          "user content"
        ],
        "short": "Additional content defined by implementations",
        "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "mapping": [
          {
            "map": "n/a",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "ext-1",
            "human": "Must have either extensions or value[x], not both",
            "source": "http://hl7.org/fhir/StructureDefinition/Extension",
            "severity": "error",
            "expression": "extension.exists() != value.exists()"
          }
        ],
        "definition": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "isModifier": false
      },
      {
        "id": "QuestionnaireResponse.item.modifierExtension",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "BackboneElement.modifierExtension"
        },
        "path": "QuestionnaireResponse.item.modifierExtension",
        "type": [
          {
            "code": "Extension"
          }
        ],
        "alias": [
          "extensions",
          "user content",
          "modifiers"
        ],
        "short": "Extensions that cannot be ignored even if unrecognized",
        "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "mapping": [
          {
            "map": "N/A",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "ext-1",
            "human": "Must have either extensions or value[x], not both",
            "source": "http://hl7.org/fhir/StructureDefinition/Extension",
            "severity": "error",
            "expression": "extension.exists() != value.exists()"
          }
        ],
        "definition": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "isModifier": true,
        "requirements": "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "isModifierReason": "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them"
      },
      {
        "id": "QuestionnaireResponse.item.linkId",
        "max": "1",
        "min": 1,
        "base": {
          "max": "1",
          "min": 1,
          "path": "QuestionnaireResponse.item.linkId"
        },
        "path": "QuestionnaireResponse.item.linkId",
        "type": [
          {
            "code": "string"
          }
        ],
        "short": "Pointer to specific item from Questionnaire",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=DEFN].target[classCode=OBS, moodCode=DEFN].id",
            "identity": "rim"
          }
        ],
        "condition": [
          "qrs-2"
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Items can repeat in the answers, so a direct 1..1 correspondence by position might not exist - requiring correspondence by identifier."
      },
      {
        "id": "QuestionnaireResponse.item.definition",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.item.definition"
        },
        "path": "QuestionnaireResponse.item.definition",
        "type": [
          {
            "code": "uri"
          }
        ],
        "short": "ElementDefinition - details for the item",
        "comment": "The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].\n\nThere is no need for this element if the item pointed to by the linkId has a definition listed.",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=DEFN].target[classCode=OBS, moodCode=DEFN].code",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "A common pattern is to define a set of data elements, and then build multiple different questionnaires for different circumstances to gather the data. This element provides traceability to the common definition."
      },
      {
        "id": "QuestionnaireResponse.item.text",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "QuestionnaireResponse.item.text"
        },
        "path": "QuestionnaireResponse.item.text",
        "type": [
          {
            "code": "string"
          }
        ],
        "short": "Name for group or question text",
        "comment": "The text for an item SHOULD be identical to the text from the corresponding Questionnaire.item. This can't be strictly enforced because it's possible for the Questionnaire to be updated subsequent to the QuestionnaireResponse having been created, however the intention is that the text in the QuestionnaireResponse reflects what the user saw when completing the Questionnaire.",
        "mapping": [
          {
            "map": ".text",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "Text that is displayed above the contents of the group or as the text of the question being answered.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Allows the questionnaire response to be read without access to the questionnaire."
      },
      {
        "id": "QuestionnaireResponse.item.answer",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.item.answer"
        },
        "path": "QuestionnaireResponse.item.answer",
        "type": [
          {
            "code": "BackboneElement"
          }
        ],
        "short": "The response(s) to the question",
        "comment": "The value is nested because we cannot have a repeating structure that has variable type.",
        "mapping": [
          {
            "map": ".value[type=LIST_ANY]",
            "identity": "rim"
          }
        ],
        "condition": [
          "qrs-1",
          "qrs-2"
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The respondent's answer(s) to the question.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.item.answer.id",
        "max": "1",
        "min": 0,
        "base": {
          "max": "1",
          "min": 0,
          "path": "Element.id"
        },
        "path": "QuestionnaireResponse.item.answer.id",
        "type": [
          {
            "code": "http://hl7.org/fhirpath/System.String",
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
                "valueUrl": "string"
              }
            ]
          }
        ],
        "short": "Unique id for inter-element referencing",
        "mapping": [
          {
            "map": "n/a",
            "identity": "rim"
          }
        ],
        "condition": [
          "ele-1"
        ],
        "isSummary": false,
        "definition": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "isModifier": false,
        "representation": [
          "xmlAttr"
        ]
      },
      {
        "id": "QuestionnaireResponse.item.answer.extension",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "Element.extension"
        },
        "path": "QuestionnaireResponse.item.answer.extension",
        "type": [
          {
            "code": "Extension"
          }
        ],
        "alias": [
          "extensions",
          "user content"
        ],
        "short": "Additional content defined by implementations",
        "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "mapping": [
          {
            "map": "n/a",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "ext-1",
            "human": "Must have either extensions or value[x], not both",
            "source": "http://hl7.org/fhir/StructureDefinition/Extension",
            "severity": "error",
            "expression": "extension.exists() != value.exists()"
          }
        ],
        "definition": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "isModifier": false
      },
      {
        "id": "QuestionnaireResponse.item.answer.modifierExtension",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "BackboneElement.modifierExtension"
        },
        "path": "QuestionnaireResponse.item.answer.modifierExtension",
        "type": [
          {
            "code": "Extension"
          }
        ],
        "alias": [
          "extensions",
          "user content",
          "modifiers"
        ],
        "short": "Extensions that cannot be ignored even if unrecognized",
        "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "mapping": [
          {
            "map": "N/A",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          },
          {
            "key": "ext-1",
            "human": "Must have either extensions or value[x], not both",
            "source": "http://hl7.org/fhir/StructureDefinition/Extension",
            "severity": "error",
            "expression": "extension.exists() != value.exists()"
          }
        ],
        "definition": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        "isModifier": true,
        "requirements": "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        "isModifierReason": "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them"
      },
      {
        "id": "QuestionnaireResponse.item.answer.value[x]",
        "max": "1",
        "min": 1,
        "base": {
          "max": "1",
          "min": 1,
          "path": "QuestionnaireResponse.item.answer.value[x]"
        },
        "path": "QuestionnaireResponse.item.answer.value[x]",
        "type": [
          {
            "code": "boolean"
          },
          {
            "code": "decimal"
          },
          {
            "code": "integer"
          },
          {
            "code": "date"
          },
          {
            "code": "dateTime"
          },
          {
            "code": "time"
          },
          {
            "code": "string"
          },
          {
            "code": "uri"
          },
          {
            "code": "Attachment"
          },
          {
            "code": "Coding"
          },
          {
            "code": "Quantity",
            "profile": [
              "http://hl7.org/fhir/StructureDefinition/SimpleQuantity"
            ]
          },
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Resource"
            ]
          }
        ],
        "short": "Single-valued answer to the question",
        "binding": {
          "strength": "example",
          "valueSet": "http://hl7.org/fhir/ValueSet/questionnaire-answers",
          "extension": [
            {
              "url": "http://hl7.org/fhir/tools/StructureDefinition/binding-definition",
              "valueString": "Code indicating the response provided for a question."
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              "valueString": "QuestionnaireAnswer"
            }
          ],
          "description": "Binding this is problematic because one value set can't apply to both codes and quantities."
        },
        "comment": "More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.     Note that a question is answered using one of the possible choices defined with answerOption, answerValueSet or some other means and the answer has a complex data type, all elements within the answer in the QuestionnaireResponse **SHOULD** match the elements defined corresponding choice value in the Questionnaire.  However, it is possible that not all elements will be propagated.  Also, some systems might use language translations resulting in different displays.  Comparison of value to the values defined in the Questionnaire (whether by answerOption, answerValueSet or answerExpression) **SHALL NOT** pay attention to Coding.display, Reference.display, Quantity.unit unless those are the only elements present.  As well, systems are not required to check for a match on any extensions (e.g. ordinal values, translations, etc.).  Systems **MAY** enforce that if extensions such as ordinal values are present in both Questionnaire and QuestionnaireResponse, they match.",
        "mapping": [
          {
            "map": ".item",
            "identity": "rim"
          }
        ],
        "condition": [
          "qrs-2"
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "The answer (or one of the answers) provided by the respondent to the question.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Ability to retain a single-valued answer to a question."
      },
      {
        "id": "QuestionnaireResponse.item.answer.item",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.item.answer.item"
        },
        "path": "QuestionnaireResponse.item.answer.item",
        "short": "Child items of question",
        "comment": "Only used when nesting beneath a question - see item.item for nesting beneath groups",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=COMP].target[classCode=OBS, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "Nested groups and/or questions found within this particular answer.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "It is useful to have \"sub-questions\", questions which normally appear when certain answers are given and which collect additional details.",
        "contentReference": "#QuestionnaireResponse.item"
      },
      {
        "id": "QuestionnaireResponse.item.item",
        "max": "*",
        "min": 0,
        "base": {
          "max": "*",
          "min": 0,
          "path": "QuestionnaireResponse.item.item"
        },
        "path": "QuestionnaireResponse.item.item",
        "short": "Child items of group item",
        "comment": "Only used when nesting beneath a group - see item.answer.item for nesting beneath questions",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=COMP].target[classCode=OBS, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "ele-1",
            "human": "All FHIR elements must have a @value or children",
            "source": "http://hl7.org/fhir/StructureDefinition/Element",
            "severity": "error",
            "expression": "hasValue() or (children().count() > id.count())"
          }
        ],
        "definition": "Sub-questions, sub-groups or display items nested beneath a group.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Reports can consist of complex nested groups.",
        "contentReference": "#QuestionnaireResponse.item"
      }
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-category",
      "valueString": "Clinical.Diagnostics"
    },
    {
      "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode": "trial-use"
    },
    {
      "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger": 5
    },
    {
      "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-security-category",
      "valueCode": "patient"
    },
    {
      "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode": "fhir"
    }
  ],
  "publisher": "Health Level Seven International (FHIR Infrastructure)",
  "derivation": "specialization",
  "description": "A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.",
  "fhirVersion": "5.0.0",
  "differential": {
    "element": [
      {
        "id": "QuestionnaireResponse",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse",
        "alias": [
          "Form",
          "QuestionnaireAnswers"
        ],
        "short": "A structured set of questions and their answers",
        "comment": "The QuestionnaireResponse contains enough information about the questions asked and their organization that it can be interpreted somewhat independently from the Questionnaire it is based on.  I.e. You don't need access to the Questionnaire in order to extract basic information from a QuestionnaireResponse.",
        "mapping": [
          {
            "map": "Event",
            "identity": "workflow"
          },
          {
            "map": "infrastructure.information",
            "identity": "w5"
          },
          {
            "map": "Observation[moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "definition": "A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.identifier",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.identifier",
        "type": [
          {
            "code": "Identifier"
          }
        ],
        "short": "Business identifier for this set of answers",
        "comment": "Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).",
        "mapping": [
          {
            "map": "Event.identifier",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.identifier",
            "identity": "w5"
          },
          {
            "map": ".id",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "definition": "Business identifiers assigned to this questionnaire response by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Allows identification of the questionnaire response as it is known by various participating systems and in a way that remains consistent across servers."
      },
      {
        "id": "QuestionnaireResponse.basedOn",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.basedOn",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/CarePlan",
              "http://hl7.org/fhir/StructureDefinition/ServiceRequest"
            ]
          }
        ],
        "alias": [
          "order"
        ],
        "short": "Request fulfilled by this QuestionnaireResponse",
        "mapping": [
          {
            "map": "Event.basedOn",
            "identity": "workflow"
          },
          {
            "map": ".outboundRelationship[typeCode=FLFS].target",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "A plan, proposal or order that is fulfilled in whole or in part by this questionnaire response.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Supports traceability of responsibility for the questionnaire response and allows linkage of the response to the proposals/recommendations acted upon."
      },
      {
        "id": "QuestionnaireResponse.partOf",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.partOf",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Observation",
              "http://hl7.org/fhir/StructureDefinition/Procedure"
            ]
          }
        ],
        "short": "Part of referenced event",
        "comment": "Not to be used to link an questionnaire response to an Encounter - use 'context' for that.\n\nComposition of questionnaire responses will be handled using the Assemble operation defined in the SDC IG.  For relationships to referrals, and other types of requests, use basedOn.",
        "mapping": [
          {
            "map": "Event.partOf",
            "identity": "workflow"
          },
          {
            "map": ".inboundRelationship[typeCode=COMP].source[moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.questionnaire",
        "max": "1",
        "min": 1,
        "path": "QuestionnaireResponse.questionnaire",
        "type": [
          {
            "code": "canonical",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Questionnaire"
            ]
          }
        ],
        "alias": [
          "Form"
        ],
        "short": "Canonical URL of Questionnaire being answered",
        "comment": "If a QuestionnaireResponse references a Questionnaire that can be resolved, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).  It is possible to have a QuestionnaireResponse whose 'questionnaire' element does not resolve.  It is also possible for the questionnaire element to not have a value but only extensions (e.g. conveying the title or identifier for the questionnaire).  This may happen for legacy data.  If there is no formally defined Questionnaire, it is undefined what the 'correct' values for the linkId elements should be and it is possible that linkIds might be inconsistent for QuestionnaireResponses for the same form if captured by distinct systems.",
        "mapping": [
          {
            "map": "./outboundRelationship[typeCode=INST]/target[classCode=OBS, moodCode=DEFN]",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The Questionnaire that defines and organizes the questions for which answers are being provided.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Needed to allow editing of the questionnaire response in a manner that enforces the constraints of the original form."
      },
      {
        "id": "QuestionnaireResponse.status",
        "max": "1",
        "min": 1,
        "path": "QuestionnaireResponse.status",
        "type": [
          {
            "code": "code"
          }
        ],
        "short": "in-progress | completed | amended | entered-in-error | stopped",
        "binding": {
          "strength": "required",
          "valueSet": "http://hl7.org/fhir/ValueSet/questionnaire-answers-status|5.0.0",
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              "valueString": "QuestionnaireResponseStatus"
            }
          ],
          "description": "Lifecycle status of the questionnaire response."
        },
        "comment": "Unknown does not represent \"other\" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.",
        "mapping": [
          {
            "map": "Event.status",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.status",
            "identity": "w5"
          },
          {
            "map": ".statusCode (also whether there's a revisionControlAct - and possibly mood to distinguish \"in-progress\" from \"published)",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The current state of the questionnaire response.",
        "isModifier": true,
        "mustSupport": false,
        "requirements": "The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished.",
        "isModifierReason": "This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid"
      },
      {
        "id": "QuestionnaireResponse.subject",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.subject",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Resource"
            ]
          }
        ],
        "alias": [
          "Patient",
          "Focus"
        ],
        "short": "The subject of the questions",
        "comment": "If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.",
        "mapping": [
          {
            "map": "Event.subject",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.subject[x]",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=SBJ].role",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Links the questionnaire response to the Patient context.  May also affect access control."
      },
      {
        "id": "QuestionnaireResponse.encounter",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.encounter",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Encounter"
            ]
          }
        ],
        "short": "Encounter the questionnaire response is part of",
        "comment": "This will typically be the encounter the questionnaire response was created during, but some questionnaire responses may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission forms).  A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.",
        "mapping": [
          {
            "map": "Event.encounter",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.context",
            "identity": "w5"
          },
          {
            "map": ".inboundRelationship(typeCode=COMP].source[classCode<=PCPR, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Links the questionnaire response to the Encounter context.  May also affect access control."
      },
      {
        "id": "QuestionnaireResponse.authored",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.authored",
        "type": [
          {
            "code": "dateTime"
          }
        ],
        "alias": [
          "Date Created",
          "Date published",
          "Date Issued",
          "Date updated"
        ],
        "short": "Date the answers were gathered",
        "comment": "May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.\n\nThis element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.",
        "mapping": [
          {
            "map": "Event.recorded",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.recorded",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=AUT].time",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The date and/or time that this questionnaire response was last modified by the user - e.g. changing answers or revising status.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers."
      },
      {
        "id": "QuestionnaireResponse.author",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.author",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
              "http://hl7.org/fhir/StructureDefinition/Organization"
            ]
          }
        ],
        "alias": [
          "Laboratory",
          "Service",
          "Practitioner",
          "Department",
          "Company",
          "Performer"
        ],
        "short": "The individual or device that received and recorded the answers",
        "comment": "Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation. Authoring by device would indicate that some portion of the questionnaire had been auto-populated. Device should only be used if it directly determined the answers, not if it was merely used as a capture tool to record answers provided by others. In the latter case, information about the physical device, software, etc. would be captured using Provenance.",
        "mapping": [
          {
            "map": "Event.performer.actor",
            "identity": "workflow"
          },
          {
            "map": "FiveWs.author",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=AUT].role",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The individual or device that received the answers to the questions in the QuestionnaireResponse and recorded them in the system.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Need to know who interpreted the subject's answers to the questions in the questionnaire, and selected the appropriate options for answers."
      },
      {
        "id": "QuestionnaireResponse.source",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.source",
        "type": [
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Organization",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson"
            ]
          }
        ],
        "short": "The individual or device that answered the questions",
        "comment": "If not specified, no inference can be made about who provided the data. Device should only be used if it directly determined the answers, not if it was merely used as a capture tool to record answers provided by others. In the latter case, information about the physical device, software, etc. would be captured using Provenance.",
        "mapping": [
          {
            "map": "FiveWs.source",
            "identity": "w5"
          },
          {
            "map": ".participation[typeCode=INF].role",
            "identity": "rim"
          }
        ],
        "isSummary": true,
        "definition": "The individual or device that answered the questions about the subject.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "When answering questions about a subject that is minor, incapable of answering or an animal, another human source may answer the questions."
      },
      {
        "id": "QuestionnaireResponse.item",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.item",
        "type": [
          {
            "code": "BackboneElement"
          }
        ],
        "short": "Groups and questions",
        "comment": "Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).\\nWhen dealing with repeating items, each group repetition will be handled by a separate item.  However, repeating questions are handled with a single question item and potentially multiple answers.",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=COMP].target[classCode=OBS, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "constraint": [
          {
            "key": "qrs-2",
            "human": "Repeated answers are combined in the answers array of a single item",
            "source": "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
            "severity": "error",
            "expression": "repeat(answer|item).select(item.where(answer.value.exists()).linkId.isDistinct()).allTrue()"
          },
          {
            "key": "qrs-1",
            "human": "Item cannot contain both item and answer",
            "source": "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
            "severity": "error",
            "expression": "(answer.exists() and item.exists()).not()"
          }
        ],
        "definition": "A group or question item from the original questionnaire for which answers are provided.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.item.linkId",
        "max": "1",
        "min": 1,
        "path": "QuestionnaireResponse.item.linkId",
        "type": [
          {
            "code": "string"
          }
        ],
        "short": "Pointer to specific item from Questionnaire",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=DEFN].target[classCode=OBS, moodCode=DEFN].id",
            "identity": "rim"
          }
        ],
        "condition": [
          "qrs-2"
        ],
        "isSummary": false,
        "definition": "The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Items can repeat in the answers, so a direct 1..1 correspondence by position might not exist - requiring correspondence by identifier."
      },
      {
        "id": "QuestionnaireResponse.item.definition",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.item.definition",
        "type": [
          {
            "code": "uri"
          }
        ],
        "short": "ElementDefinition - details for the item",
        "comment": "The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].\n\nThere is no need for this element if the item pointed to by the linkId has a definition listed.",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=DEFN].target[classCode=OBS, moodCode=DEFN].code",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "definition": "A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "A common pattern is to define a set of data elements, and then build multiple different questionnaires for different circumstances to gather the data. This element provides traceability to the common definition."
      },
      {
        "id": "QuestionnaireResponse.item.text",
        "max": "1",
        "min": 0,
        "path": "QuestionnaireResponse.item.text",
        "type": [
          {
            "code": "string"
          }
        ],
        "short": "Name for group or question text",
        "comment": "The text for an item SHOULD be identical to the text from the corresponding Questionnaire.item. This can't be strictly enforced because it's possible for the Questionnaire to be updated subsequent to the QuestionnaireResponse having been created, however the intention is that the text in the QuestionnaireResponse reflects what the user saw when completing the Questionnaire.",
        "mapping": [
          {
            "map": ".text",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "definition": "Text that is displayed above the contents of the group or as the text of the question being answered.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Allows the questionnaire response to be read without access to the questionnaire."
      },
      {
        "id": "QuestionnaireResponse.item.answer",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.item.answer",
        "type": [
          {
            "code": "BackboneElement"
          }
        ],
        "short": "The response(s) to the question",
        "comment": "The value is nested because we cannot have a repeating structure that has variable type.",
        "mapping": [
          {
            "map": ".value[type=LIST_ANY]",
            "identity": "rim"
          }
        ],
        "condition": [
          "qrs-1",
          "qrs-2"
        ],
        "isSummary": false,
        "definition": "The respondent's answer(s) to the question.",
        "isModifier": false,
        "mustSupport": false
      },
      {
        "id": "QuestionnaireResponse.item.answer.value[x]",
        "max": "1",
        "min": 1,
        "path": "QuestionnaireResponse.item.answer.value[x]",
        "type": [
          {
            "code": "boolean"
          },
          {
            "code": "decimal"
          },
          {
            "code": "integer"
          },
          {
            "code": "date"
          },
          {
            "code": "dateTime"
          },
          {
            "code": "time"
          },
          {
            "code": "string"
          },
          {
            "code": "uri"
          },
          {
            "code": "Attachment"
          },
          {
            "code": "Coding"
          },
          {
            "code": "Quantity",
            "profile": [
              "http://hl7.org/fhir/StructureDefinition/SimpleQuantity"
            ]
          },
          {
            "code": "Reference",
            "targetProfile": [
              "http://hl7.org/fhir/StructureDefinition/Resource"
            ]
          }
        ],
        "short": "Single-valued answer to the question",
        "binding": {
          "strength": "example",
          "valueSet": "http://hl7.org/fhir/ValueSet/questionnaire-answers",
          "extension": [
            {
              "url": "http://hl7.org/fhir/tools/StructureDefinition/binding-definition",
              "valueString": "Code indicating the response provided for a question."
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              "valueString": "QuestionnaireAnswer"
            }
          ],
          "description": "Binding this is problematic because one value set can't apply to both codes and quantities."
        },
        "comment": "More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.     Note that a question is answered using one of the possible choices defined with answerOption, answerValueSet or some other means and the answer has a complex data type, all elements within the answer in the QuestionnaireResponse **SHOULD** match the elements defined corresponding choice value in the Questionnaire.  However, it is possible that not all elements will be propagated.  Also, some systems might use language translations resulting in different displays.  Comparison of value to the values defined in the Questionnaire (whether by answerOption, answerValueSet or answerExpression) **SHALL NOT** pay attention to Coding.display, Reference.display, Quantity.unit unless those are the only elements present.  As well, systems are not required to check for a match on any extensions (e.g. ordinal values, translations, etc.).  Systems **MAY** enforce that if extensions such as ordinal values are present in both Questionnaire and QuestionnaireResponse, they match.",
        "mapping": [
          {
            "map": ".item",
            "identity": "rim"
          }
        ],
        "condition": [
          "qrs-2"
        ],
        "isSummary": false,
        "definition": "The answer (or one of the answers) provided by the respondent to the question.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Ability to retain a single-valued answer to a question."
      },
      {
        "id": "QuestionnaireResponse.item.answer.item",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.item.answer.item",
        "short": "Child items of question",
        "comment": "Only used when nesting beneath a question - see item.item for nesting beneath groups",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=COMP].target[classCode=OBS, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "definition": "Nested groups and/or questions found within this particular answer.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "It is useful to have \"sub-questions\", questions which normally appear when certain answers are given and which collect additional details.",
        "contentReference": "#QuestionnaireResponse.item"
      },
      {
        "id": "QuestionnaireResponse.item.item",
        "max": "*",
        "min": 0,
        "path": "QuestionnaireResponse.item.item",
        "short": "Child items of group item",
        "comment": "Only used when nesting beneath a group - see item.answer.item for nesting beneath questions",
        "mapping": [
          {
            "map": ".outboundRelationship[typeCode=COMP].target[classCode=OBS, moodCode=EVN]",
            "identity": "rim"
          }
        ],
        "isSummary": false,
        "definition": "Sub-questions, sub-groups or display items nested beneath a group.",
        "isModifier": false,
        "mustSupport": false,
        "requirements": "Reports can consist of complex nested groups.",
        "contentReference": "#QuestionnaireResponse.item"
      }
    ]
  },
  "experimental": false,
  "jurisdiction": [
    {
      "coding": [
        {
          "code": "001",
          "system": "http://unstats.un.org/unsd/methods/m49/m49.htm",
          "display": "World"
        }
      ]
    }
  ],
  "resourceType": "StructureDefinition",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/DomainResource"
}