import*as buffer from"../../../base/common/buffer.js";import{decodeUTF16LE}from"./stringBuilder.js";function escapeNewLine(e){return e.replace(/\n/g,"\\n").replace(/\r/g,"\\r")}export class TextChange{constructor(e,t,n,r){this.oldPosition=e,this.oldText=t,this.newPosition=n,this.newText=r}get oldLength(){return this.oldText.length}get oldEnd(){return this.oldPosition+this.oldText.length}get newLength(){return this.newText.length}get newEnd(){return this.newPosition+this.newText.length}toString(){return 0===this.oldText.length?`(insert@${this.oldPosition} "${escapeNewLine(this.newText)}")`:0===this.newText.length?`(delete@${this.oldPosition} "${escapeNewLine(this.oldText)}")`:`(replace@${this.oldPosition} "${escapeNewLine(this.oldText)}" with "${escapeNewLine(this.newText)}")`}static _writeStringSize(e){return 4+2*e.length}static _writeString(e,t,n){const r=t.length;buffer.writeUInt32BE(e,r,n),n+=4;for(let i=0;i<r;i++)buffer.writeUInt16LE(e,t.charCodeAt(i),n),n+=2;return n}static _readString(e,t){const n=buffer.readUInt32BE(e,t);return t+=4,decodeUTF16LE(e,t,n)}writeSize(){return 8+TextChange._writeStringSize(this.oldText)+TextChange._writeStringSize(this.newText)}write(e,t){return buffer.writeUInt32BE(e,this.oldPosition,t),t+=4,buffer.writeUInt32BE(e,this.newPosition,t),t+=4,t=TextChange._writeString(e,this.oldText,t),t=TextChange._writeString(e,this.newText,t),t}static read(e,t,n){const r=buffer.readUInt32BE(e,t);t+=4;const i=buffer.readUInt32BE(e,t);t+=4;const s=TextChange._readString(e,t);t+=TextChange._writeStringSize(s);const o=TextChange._readString(e,t);return t+=TextChange._writeStringSize(o),n.push(new TextChange(r,s,i,o)),t}}export function compressConsecutiveTextChanges(e,t){if(null===e||0===e.length)return t;const n=new TextChangeCompressor(e,t);return n.compress()}class TextChangeCompressor{constructor(e,t){this._prevEdits=e,this._currEdits=t,this._result=[],this._resultLen=0,this._prevLen=this._prevEdits.length,this._prevDeltaOffset=0,this._currLen=this._currEdits.length,this._currDeltaOffset=0}compress(){let e=0,t=0,n=this._getPrev(e),r=this._getCurr(t);while(e<this._prevLen||t<this._currLen){if(null===n){this._acceptCurr(r),r=this._getCurr(++t);continue}if(null===r){this._acceptPrev(n),n=this._getPrev(++e);continue}if(r.oldEnd<=n.newPosition){this._acceptCurr(r),r=this._getCurr(++t);continue}if(n.newEnd<=r.oldPosition){this._acceptPrev(n),n=this._getPrev(++e);continue}if(r.oldPosition<n.newPosition){const[e,t]=TextChangeCompressor._splitCurr(r,n.newPosition-r.oldPosition);this._acceptCurr(e),r=t;continue}if(n.newPosition<r.oldPosition){const[e,t]=TextChangeCompressor._splitPrev(n,r.oldPosition-n.newPosition);this._acceptPrev(e),n=t;continue}let i,s;if(r.oldEnd===n.newEnd)i=n,s=r,n=this._getPrev(++e),r=this._getCurr(++t);else if(r.oldEnd<n.newEnd){const[e,o]=TextChangeCompressor._splitPrev(n,r.oldLength);i=e,s=r,n=o,r=this._getCurr(++t)}else{const[t,o]=TextChangeCompressor._splitCurr(r,n.newLength);i=n,s=t,n=this._getPrev(++e),r=o}this._result[this._resultLen++]=new TextChange(i.oldPosition,i.oldText,s.newPosition,s.newText),this._prevDeltaOffset+=i.newLength-i.oldLength,this._currDeltaOffset+=s.newLength-s.oldLength}const i=TextChangeCompressor._merge(this._result),s=TextChangeCompressor._removeNoOps(i);return s}_acceptCurr(e){this._result[this._resultLen++]=TextChangeCompressor._rebaseCurr(this._prevDeltaOffset,e),this._currDeltaOffset+=e.newLength-e.oldLength}_getCurr(e){return e<this._currLen?this._currEdits[e]:null}_acceptPrev(e){this._result[this._resultLen++]=TextChangeCompressor._rebasePrev(this._currDeltaOffset,e),this._prevDeltaOffset+=e.newLength-e.oldLength}_getPrev(e){return e<this._prevLen?this._prevEdits[e]:null}static _rebaseCurr(e,t){return new TextChange(t.oldPosition-e,t.oldText,t.newPosition,t.newText)}static _rebasePrev(e,t){return new TextChange(t.oldPosition,t.oldText,t.newPosition+e,t.newText)}static _splitPrev(e,t){const n=e.newText.substr(0,t),r=e.newText.substr(t);return[new TextChange(e.oldPosition,e.oldText,e.newPosition,n),new TextChange(e.oldEnd,"",e.newPosition+t,r)]}static _splitCurr(e,t){const n=e.oldText.substr(0,t),r=e.oldText.substr(t);return[new TextChange(e.oldPosition,n,e.newPosition,e.newText),new TextChange(e.oldPosition+t,r,e.newEnd,"")]}static _merge(e){if(0===e.length)return e;const t=[];let n=0,r=e[0];for(let i=1;i<e.length;i++){const s=e[i];r.oldEnd===s.oldPosition?r=new TextChange(r.oldPosition,r.oldText+s.oldText,r.newPosition,r.newText+s.newText):(t[n++]=r,r=s)}return t[n++]=r,t}static _removeNoOps(e){if(0===e.length)return e;const t=[];let n=0;for(let r=0;r<e.length;r++){const i=e[r];i.oldText!==i.newText&&(t[n++]=i)}return t}}