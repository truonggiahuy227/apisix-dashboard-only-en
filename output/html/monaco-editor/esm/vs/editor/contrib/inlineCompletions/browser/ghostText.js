import{Emitter}from"../../../../base/common/event.js";import{Disposable}from"../../../../base/common/lifecycle.js";import{Range}from"../../../common/core/range.js";export class GhostText{constructor(t,e,s=0){this.lineNumber=t,this.parts=e,this.additionalReservedLineCount=s}renderForScreenReader(t){if(0===this.parts.length)return"";const e=this.parts[this.parts.length-1],s=t.substr(0,e.column-1),n=applyEdits(s,this.parts.map((t=>({range:{startLineNumber:1,endLineNumber:1,startColumn:t.column,endColumn:t.column},text:t.lines.join("\n")}))));return n.substring(this.parts[0].column-1)}}class PositionOffsetTransformer{constructor(t){this.lineStartOffsetByLineIdx=[],this.lineStartOffsetByLineIdx.push(0);for(let e=0;e<t.length;e++)"\n"===t.charAt(e)&&this.lineStartOffsetByLineIdx.push(e+1)}getOffset(t){return this.lineStartOffsetByLineIdx[t.lineNumber-1]+t.column-1}}function applyEdits(t,e){const s=new PositionOffsetTransformer(t),n=e.map((t=>{const e=Range.lift(t.range);return{startOffset:s.getOffset(e.getStartPosition()),endOffset:s.getOffset(e.getEndPosition()),text:t.text}}));n.sort(((t,e)=>e.startOffset-t.startOffset));for(const i of n)t=t.substring(0,i.startOffset)+i.text+t.substring(i.endOffset);return t}export class GhostTextPart{constructor(t,e,s){this.column=t,this.lines=e,this.preview=s}}export class BaseGhostTextWidgetModel extends Disposable{constructor(t){super(),this.editor=t,this._expanded=void 0,this.onDidChangeEmitter=new Emitter,this.onDidChange=this.onDidChangeEmitter.event,this._register(t.onDidChangeConfiguration((t=>{t.hasChanged(106)&&void 0===this._expanded&&this.onDidChangeEmitter.fire()})))}setExpanded(t){this._expanded=!0,this.onDidChangeEmitter.fire()}}