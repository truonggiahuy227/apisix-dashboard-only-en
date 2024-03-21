import{Range}from"../core/range.js";import{Selection}from"../core/selection.js";export class SurroundSelectionCommand{constructor(e,n,t){this._range=e,this._charBeforeSelection=n,this._charAfterSelection=t}getEditOperations(e,n){n.addTrackedEditOperation(new Range(this._range.startLineNumber,this._range.startColumn,this._range.startLineNumber,this._range.startColumn),this._charBeforeSelection),n.addTrackedEditOperation(new Range(this._range.endLineNumber,this._range.endColumn,this._range.endLineNumber,this._range.endColumn),this._charAfterSelection)}computeCursorState(e,n){const t=n.getInverseEditOperations(),r=t[0].range,i=t[1].range;return new Selection(r.endLineNumber,r.endColumn,i.endLineNumber,i.endColumn-this._charAfterSelection.length)}}