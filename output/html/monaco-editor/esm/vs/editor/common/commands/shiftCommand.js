import*as strings from"../../../base/common/strings.js";import{CursorColumns}from"../core/cursorColumns.js";import{Range}from"../core/range.js";import{Selection}from"../core/selection.js";import{LanguageConfigurationRegistry}from"../languages/languageConfigurationRegistry.js";const repeatCache=Object.create(null);export function cachedStringRepeat(t,e){if(e<=0)return"";repeatCache[t]||(repeatCache[t]=["",t]);const n=repeatCache[t];for(let s=n.length;s<=e;s++)n[s]=n[s-1]+t;return n[e]}export class ShiftCommand{constructor(t,e){this._opts=e,this._selection=t,this._selectionId=null,this._useLastEditRangeForCursorEndPosition=!1,this._selectionStartColumnStaysPut=!1}static unshiftIndent(t,e,n,s,i){const o=CursorColumns.visibleColumnFromColumn(t,e,n);if(i){const t=cachedStringRepeat(" ",s),e=CursorColumns.prevIndentTabStop(o,s),n=e/s;return cachedStringRepeat(t,n)}{const t="\t",e=CursorColumns.prevRenderTabStop(o,n),s=e/n;return cachedStringRepeat(t,s)}}static shiftIndent(t,e,n,s,i){const o=CursorColumns.visibleColumnFromColumn(t,e,n);if(i){const t=cachedStringRepeat(" ",s),e=CursorColumns.nextIndentTabStop(o,s),n=e/s;return cachedStringRepeat(t,n)}{const t="\t",e=CursorColumns.nextRenderTabStop(o,n),s=e/n;return cachedStringRepeat(t,s)}}_addEditOperation(t,e,n){this._useLastEditRangeForCursorEndPosition?t.addTrackedEditOperation(e,n):t.addEditOperation(e,n)}getEditOperations(t,e){const n=this._selection.startLineNumber;let s=this._selection.endLineNumber;1===this._selection.endColumn&&n!==s&&(s-=1);const{tabSize:i,indentSize:o,insertSpaces:r}=this._opts,a=n===s;if(this._opts.useTabStops){this._selection.isEmpty()&&/^\s*$/.test(t.getLineContent(n))&&(this._useLastEditRangeForCursorEndPosition=!0);let c=0,u=0;for(let l=n;l<=s;l++,c=u){u=0;const s=t.getLineContent(l);let h,d=strings.firstNonWhitespaceIndex(s);if((!this._opts.isUnshift||0!==s.length&&0!==d)&&(a||this._opts.isUnshift||0!==s.length)){if(-1===d&&(d=s.length),l>1){const e=CursorColumns.visibleColumnFromColumn(s,d+1,i);if(e%o!==0&&t.isCheapToTokenize(l-1)){const e=LanguageConfigurationRegistry.getEnterAction(this._opts.autoIndent,t,new Range(l-1,t.getLineMaxColumn(l-1),l-1,t.getLineMaxColumn(l-1)));if(e){if(u=c,e.appendText)for(let t=0,n=e.appendText.length;t<n&&u<o;t++){if(32!==e.appendText.charCodeAt(t))break;u++}e.removeText&&(u=Math.max(0,u-e.removeText));for(let t=0;t<u;t++){if(0===d||32!==s.charCodeAt(d-1))break;d--}}}}this._opts.isUnshift&&0===d||(h=this._opts.isUnshift?ShiftCommand.unshiftIndent(s,d+1,i,o,r):ShiftCommand.shiftIndent(s,d+1,i,o,r),this._addEditOperation(e,new Range(l,1,l,d+1),h),l!==n||this._selection.isEmpty()||(this._selectionStartColumnStaysPut=this._selection.startColumn<=d+1))}}}else{!this._opts.isUnshift&&this._selection.isEmpty()&&0===t.getLineLength(n)&&(this._useLastEditRangeForCursorEndPosition=!0);const i=r?cachedStringRepeat(" ",o):"\t";for(let r=n;r<=s;r++){const s=t.getLineContent(r);let c=strings.firstNonWhitespaceIndex(s);if((!this._opts.isUnshift||0!==s.length&&0!==c)&&((a||this._opts.isUnshift||0!==s.length)&&(-1===c&&(c=s.length),!this._opts.isUnshift||0!==c)))if(this._opts.isUnshift){c=Math.min(c,o);for(let t=0;t<c;t++){const e=s.charCodeAt(t);if(9===e){c=t+1;break}}this._addEditOperation(e,new Range(r,1,r,c+1),"")}else this._addEditOperation(e,new Range(r,1,r,1),i),r!==n||this._selection.isEmpty()||(this._selectionStartColumnStaysPut=1===this._selection.startColumn)}}this._selectionId=e.trackSelection(this._selection)}computeCursorState(t,e){if(this._useLastEditRangeForCursorEndPosition){const t=e.getInverseEditOperations()[0];return new Selection(t.range.endLineNumber,t.range.endColumn,t.range.endLineNumber,t.range.endColumn)}const n=e.getTrackedSelection(this._selectionId);if(this._selectionStartColumnStaysPut){const t=this._selection.startColumn,e=n.startColumn;return e<=t?n:0===n.getDirection()?new Selection(n.startLineNumber,t,n.endLineNumber,n.endColumn):new Selection(n.endLineNumber,n.endColumn,n.startLineNumber,t)}return n}}