export class ResolvedKeybindingItem{constructor(e,t,s,i,r,n,l){this._resolvedKeybindingItemBrand=void 0,this.resolvedKeybinding=e,this.keypressParts=e?removeElementsAfterNulls(e.getDispatchParts()):[],e&&0===this.keypressParts.length&&(this.keypressParts=removeElementsAfterNulls(e.getSingleModifierDispatchParts())),this.bubble=!!t&&94===t.charCodeAt(0),this.command=this.bubble?t.substr(1):t,this.commandArgs=s,this.when=i,this.isDefault=r,this.extensionId=n,this.isBuiltinExtension=l}}export function removeElementsAfterNulls(e){let t=[];for(let s=0,i=e.length;s<i;s++){const i=e[s];if(!i)return t;t.push(i)}return t}