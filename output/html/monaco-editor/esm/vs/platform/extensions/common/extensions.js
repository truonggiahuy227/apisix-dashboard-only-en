export class ExtensionIdentifier{constructor(t){this.value=t,this._lower=t.toLowerCase()}static toKey(t){return"string"===typeof t?t.toLowerCase():t._lower}}