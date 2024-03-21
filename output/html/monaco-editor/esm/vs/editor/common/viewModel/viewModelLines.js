import*as arrays from"../../../base/common/arrays.js";import{Position}from"../core/position.js";import{Range}from"../core/range.js";import{IndentGuide,IndentGuideHorizontalLine}from"../textModelGuides.js";import{ModelDecorationOptions}from"../model/textModel.js";import{LineInjectedText}from"../textModelEvents.js";import*as viewEvents from"./viewEvents.js";import{createModelLineProjection}from"./modelLineProjection.js";import{ConstantTimePrefixSumComputer}from"../model/prefixSumComputer.js";import{ViewLineData}from"./viewModel.js";export class ViewModelLinesFromProjectedModel{constructor(e,i,n,t,o,s,r,l,d){this._editorId=e,this.model=i,this._validModelVersionId=-1,this._domLineBreaksComputerFactory=n,this._monospaceLineBreaksComputerFactory=t,this.fontInfo=o,this.tabSize=s,this.wrappingStrategy=r,this.wrappingColumn=l,this.wrappingIndent=d,this._constructLines(!0,null)}dispose(){this.hiddenAreasDecorationIds=this.model.deltaDecorations(this.hiddenAreasDecorationIds,[])}createCoordinatesConverter(){return new CoordinatesConverter(this)}_constructLines(e,i){this.modelLineProjections=[],e&&(this.hiddenAreasDecorationIds=this.model.deltaDecorations(this.hiddenAreasDecorationIds,[]));const n=this.model.getLinesContent(),t=this.model.getInjectedTextDecorations(this._editorId),o=n.length,s=this.createLineBreaksComputer(),r=new arrays.ArrayQueue(LineInjectedText.fromDecorations(t));for(let h=0;h<o;h++){const e=r.takeWhile((e=>e.lineNumber===h+1));s.addRequest(n[h],e,i?i[h]:null)}const l=s.finalize(),d=[],u=this.hiddenAreasDecorationIds.map((e=>this.model.getDecorationRange(e))).sort(Range.compareRangesUsingStarts);let m=1,a=0,L=-1,c=L+1<u.length?a+1:o+2;for(let h=0;h<o;h++){const e=h+1;e===c&&(L++,m=u[L].startLineNumber,a=u[L].endLineNumber,c=L+1<u.length?a+1:o+2);const i=e>=m&&e<=a,n=createModelLineProjection(l[h],!i);d[h]=n.getViewLineCount(),this.modelLineProjections[h]=n}this._validModelVersionId=this.model.getVersionId(),this.projectedModelLineLineCounts=new ConstantTimePrefixSumComputer(d)}getHiddenAreas(){return this.hiddenAreasDecorationIds.map((e=>this.model.getDecorationRange(e)))}setHiddenAreas(e){const i=e.map((e=>this.model.validateRange(e))),n=normalizeLineRanges(i),t=this.hiddenAreasDecorationIds.map((e=>this.model.getDecorationRange(e))).sort(Range.compareRangesUsingStarts);if(n.length===t.length){let e=!1;for(let i=0;i<n.length;i++)if(!n[i].equalsRange(t[i])){e=!0;break}if(!e)return!1}const o=n.map((e=>({range:e,options:ModelDecorationOptions.EMPTY})));this.hiddenAreasDecorationIds=this.model.deltaDecorations(this.hiddenAreasDecorationIds,o);const s=n;let r=1,l=0,d=-1,u=d+1<s.length?l+1:this.modelLineProjections.length+2,m=!1;for(let a=0;a<this.modelLineProjections.length;a++){const e=a+1;e===u&&(d++,r=s[d].startLineNumber,l=s[d].endLineNumber,u=d+1<s.length?l+1:this.modelLineProjections.length+2);let i=!1;if(e>=r&&e<=l?this.modelLineProjections[a].isVisible()&&(this.modelLineProjections[a]=this.modelLineProjections[a].setVisible(!1),i=!0):(m=!0,this.modelLineProjections[a].isVisible()||(this.modelLineProjections[a]=this.modelLineProjections[a].setVisible(!0),i=!0)),i){const e=this.modelLineProjections[a].getViewLineCount();this.projectedModelLineLineCounts.setValue(a,e)}}return m||this.setHiddenAreas([]),!0}modelPositionIsVisible(e,i){return!(e<1||e>this.modelLineProjections.length)&&this.modelLineProjections[e-1].isVisible()}getModelLineViewLineCount(e){return e<1||e>this.modelLineProjections.length?1:this.modelLineProjections[e-1].getViewLineCount()}setTabSize(e){return this.tabSize!==e&&(this.tabSize=e,this._constructLines(!1,null),!0)}setWrappingSettings(e,i,n,t){const o=this.fontInfo.equals(e),s=this.wrappingStrategy===i,r=this.wrappingColumn===n,l=this.wrappingIndent===t;if(o&&s&&r&&l)return!1;const d=o&&s&&!r&&l;this.fontInfo=e,this.wrappingStrategy=i,this.wrappingColumn=n,this.wrappingIndent=t;let u=null;if(d){u=[];for(let e=0,i=this.modelLineProjections.length;e<i;e++)u[e]=this.modelLineProjections[e].getProjectionData()}return this._constructLines(!1,u),!0}createLineBreaksComputer(){const e="advanced"===this.wrappingStrategy?this._domLineBreaksComputerFactory:this._monospaceLineBreaksComputerFactory;return e.createLineBreaksComputer(this.fontInfo,this.tabSize,this.wrappingColumn,this.wrappingIndent)}onModelFlushed(){this._constructLines(!0,null)}onModelLinesDeleted(e,i,n){if(!e||e<=this._validModelVersionId)return null;const t=1===i?1:this.projectedModelLineLineCounts.getPrefixSum(i-1)+1,o=this.projectedModelLineLineCounts.getPrefixSum(n);return this.modelLineProjections.splice(i-1,n-i+1),this.projectedModelLineLineCounts.removeValues(i-1,n-i+1),new viewEvents.ViewLinesDeletedEvent(t,o)}onModelLinesInserted(e,i,n,t){if(!e||e<=this._validModelVersionId)return null;const o=i>2&&!this.modelLineProjections[i-2].isVisible(),s=1===i?1:this.projectedModelLineLineCounts.getPrefixSum(i-1)+1;let r=0;const l=[],d=[];for(let u=0,m=t.length;u<m;u++){const e=createModelLineProjection(t[u],!o);l.push(e);const i=e.getViewLineCount();r+=i,d[u]=i}return this.modelLineProjections=this.modelLineProjections.slice(0,i-1).concat(l).concat(this.modelLineProjections.slice(i-1)),this.projectedModelLineLineCounts.insertValues(i-1,d),new viewEvents.ViewLinesInsertedEvent(s,s+r-1)}onModelLineChanged(e,i,n){if(null!==e&&e<=this._validModelVersionId)return[!1,null,null,null];const t=i-1,o=this.modelLineProjections[t].getViewLineCount(),s=this.modelLineProjections[t].isVisible(),r=createModelLineProjection(n,s);this.modelLineProjections[t]=r;const l=this.modelLineProjections[t].getViewLineCount();let d=!1,u=0,m=-1,a=0,L=-1,c=0,h=-1;o>l?(u=this.projectedModelLineLineCounts.getPrefixSum(i-1)+1,m=u+l-1,c=m+1,h=c+(o-l)-1,d=!0):o<l?(u=this.projectedModelLineLineCounts.getPrefixSum(i-1)+1,m=u+o-1,a=m+1,L=a+(l-o)-1,d=!0):(u=this.projectedModelLineLineCounts.getPrefixSum(i-1)+1,m=u+l-1),this.projectedModelLineLineCounts.setValue(t,l);const g=u<=m?new viewEvents.ViewLinesChangedEvent(u,m):null,w=a<=L?new viewEvents.ViewLinesInsertedEvent(a,L):null,V=c<=h?new viewEvents.ViewLinesDeletedEvent(c,h):null;return[d,g,w,V]}acceptVersionId(e){this._validModelVersionId=e,1!==this.modelLineProjections.length||this.modelLineProjections[0].isVisible()||this.setHiddenAreas([])}getViewLineCount(){return this.projectedModelLineLineCounts.getTotalSum()}_toValidViewLineNumber(e){if(e<1)return 1;const i=this.getViewLineCount();return e>i?i:0|e}getActiveIndentGuide(e,i,n){e=this._toValidViewLineNumber(e),i=this._toValidViewLineNumber(i),n=this._toValidViewLineNumber(n);const t=this.convertViewPositionToModelPosition(e,this.getViewLineMinColumn(e)),o=this.convertViewPositionToModelPosition(i,this.getViewLineMinColumn(i)),s=this.convertViewPositionToModelPosition(n,this.getViewLineMinColumn(n)),r=this.model.guides.getActiveIndentGuide(t.lineNumber,o.lineNumber,s.lineNumber),l=this.convertModelPositionToViewPosition(r.startLineNumber,1),d=this.convertModelPositionToViewPosition(r.endLineNumber,this.model.getLineMaxColumn(r.endLineNumber));return{startLineNumber:l.lineNumber,endLineNumber:d.lineNumber,indent:r.indent}}getViewLineInfo(e){e=this._toValidViewLineNumber(e);const i=this.projectedModelLineLineCounts.getIndexOf(e-1),n=i.index,t=i.remainder;return new ViewLineInfo(n+1,t)}getMinColumnOfViewLine(e){return this.modelLineProjections[e.modelLineNumber-1].getViewLineMinColumn(this.model,e.modelLineNumber,e.modelLineWrappedLineIdx)}getModelStartPositionOfViewLine(e){const i=this.modelLineProjections[e.modelLineNumber-1],n=i.getViewLineMinColumn(this.model,e.modelLineNumber,e.modelLineWrappedLineIdx),t=i.getModelColumnOfViewPosition(e.modelLineWrappedLineIdx,n);return new Position(e.modelLineNumber,t)}getModelEndPositionOfViewLine(e){const i=this.modelLineProjections[e.modelLineNumber-1],n=i.getViewLineMaxColumn(this.model,e.modelLineNumber,e.modelLineWrappedLineIdx),t=i.getModelColumnOfViewPosition(e.modelLineWrappedLineIdx,n);return new Position(e.modelLineNumber,t)}getViewLineInfosGroupedByModelRanges(e,i){const n=this.getViewLineInfo(e),t=this.getViewLineInfo(i),o=new Array;let s=this.getModelStartPositionOfViewLine(n),r=new Array;for(let l=n.modelLineNumber;l<=t.modelLineNumber;l++){const e=this.modelLineProjections[l-1];if(e.isVisible()){const i=l===n.modelLineNumber?n.modelLineWrappedLineIdx:0,o=l===t.modelLineNumber?t.modelLineWrappedLineIdx+1:e.getViewLineCount();for(let e=i;e<o;e++)r.push(new ViewLineInfo(l,e))}if(!e.isVisible()&&s){const e=new Position(l-1,this.model.getLineMaxColumn(l-1)+1),i=Range.fromPositions(s,e);o.push(new ViewLineInfoGroupedByModelRange(i,r)),r=[],s=null}else e.isVisible()&&!s&&(s=new Position(l,1))}if(s){const e=Range.fromPositions(s,this.getModelEndPositionOfViewLine(t));o.push(new ViewLineInfoGroupedByModelRange(e,r))}return o}getViewLinesBracketGuides(e,i,n,t){const o=n?this.convertViewPositionToModelPosition(n.lineNumber,n.column):null,s=[];for(const r of this.getViewLineInfosGroupedByModelRanges(e,i)){const e=r.modelRange.startLineNumber,i=this.model.guides.getLinesBracketGuides(e,r.modelRange.endLineNumber,o,t);for(const n of r.viewLines)if(n.isWrappedLineContinuation&&1===this.getMinColumnOfViewLine(n))s.push([]);else{let t=i[n.modelLineNumber-e];t=t.map((e=>e.horizontalLine?new IndentGuide(e.visibleColumn,e.className,new IndentGuideHorizontalLine(e.horizontalLine.top,this.convertModelPositionToViewPosition(n.modelLineNumber,e.horizontalLine.endColumn).column)):e)),s.push(t)}}return s}getViewLinesIndentGuides(e,i){e=this._toValidViewLineNumber(e),i=this._toValidViewLineNumber(i);const n=this.convertViewPositionToModelPosition(e,this.getViewLineMinColumn(e)),t=this.convertViewPositionToModelPosition(i,this.getViewLineMaxColumn(i));let o=[];const s=[],r=[],l=n.lineNumber-1,d=t.lineNumber-1;let u=null;for(let c=l;c<=d;c++){const e=this.modelLineProjections[c];if(e.isVisible()){const i=e.getViewLineNumberOfModelPosition(0,c===l?n.column:1),t=e.getViewLineNumberOfModelPosition(0,this.model.getLineMaxColumn(c+1)),o=t-i+1;let d=0;o>1&&1===e.getViewLineMinColumn(this.model,c+1,t)&&(d=0===i?1:2),s.push(o),r.push(d),null===u&&(u=new Position(c+1,0))}else null!==u&&(o=o.concat(this.model.guides.getLinesIndentGuides(u.lineNumber,c)),u=null)}null!==u&&(o=o.concat(this.model.guides.getLinesIndentGuides(u.lineNumber,t.lineNumber)),u=null);const m=i-e+1,a=new Array(m);let L=0;for(let c=0,h=o.length;c<h;c++){let e=o[c];const i=Math.min(m-L,s[c]),n=r[c];let t;t=2===n?0:1===n?1:i;for(let o=0;o<i;o++)o===t&&(e=0),a[L++]=e}return a}getViewLineContent(e){const i=this.getViewLineInfo(e);return this.modelLineProjections[i.modelLineNumber-1].getViewLineContent(this.model,i.modelLineNumber,i.modelLineWrappedLineIdx)}getViewLineLength(e){const i=this.getViewLineInfo(e);return this.modelLineProjections[i.modelLineNumber-1].getViewLineLength(this.model,i.modelLineNumber,i.modelLineWrappedLineIdx)}getViewLineMinColumn(e){const i=this.getViewLineInfo(e);return this.modelLineProjections[i.modelLineNumber-1].getViewLineMinColumn(this.model,i.modelLineNumber,i.modelLineWrappedLineIdx)}getViewLineMaxColumn(e){const i=this.getViewLineInfo(e);return this.modelLineProjections[i.modelLineNumber-1].getViewLineMaxColumn(this.model,i.modelLineNumber,i.modelLineWrappedLineIdx)}getViewLineData(e){const i=this.getViewLineInfo(e);return this.modelLineProjections[i.modelLineNumber-1].getViewLineData(this.model,i.modelLineNumber,i.modelLineWrappedLineIdx)}getViewLinesData(e,i,n){e=this._toValidViewLineNumber(e),i=this._toValidViewLineNumber(i);const t=this.projectedModelLineLineCounts.getIndexOf(e-1);let o=e;const s=t.index,r=t.remainder,l=[];for(let d=s,u=this.model.getLineCount();d<u;d++){const t=this.modelLineProjections[d];if(!t.isVisible())continue;const u=d===s?r:0;let m=t.getViewLineCount()-u,a=!1;if(o+m>i&&(a=!0,m=i-o+1),t.getViewLinesData(this.model,d+1,u,m,o-e,n,l),o+=m,a)break}return l}validateViewPosition(e,i,n){e=this._toValidViewLineNumber(e);const t=this.projectedModelLineLineCounts.getIndexOf(e-1),o=t.index,s=t.remainder,r=this.modelLineProjections[o],l=r.getViewLineMinColumn(this.model,o+1,s),d=r.getViewLineMaxColumn(this.model,o+1,s);i<l&&(i=l),i>d&&(i=d);const u=r.getModelColumnOfViewPosition(s,i),m=this.model.validatePosition(new Position(o+1,u));return m.equals(n)?new Position(e,i):this.convertModelPositionToViewPosition(n.lineNumber,n.column)}validateViewRange(e,i){const n=this.validateViewPosition(e.startLineNumber,e.startColumn,i.getStartPosition()),t=this.validateViewPosition(e.endLineNumber,e.endColumn,i.getEndPosition());return new Range(n.lineNumber,n.column,t.lineNumber,t.column)}convertViewPositionToModelPosition(e,i){const n=this.getViewLineInfo(e),t=this.modelLineProjections[n.modelLineNumber-1].getModelColumnOfViewPosition(n.modelLineWrappedLineIdx,i);return this.model.validatePosition(new Position(n.modelLineNumber,t))}convertViewRangeToModelRange(e){const i=this.convertViewPositionToModelPosition(e.startLineNumber,e.startColumn),n=this.convertViewPositionToModelPosition(e.endLineNumber,e.endColumn);return new Range(i.lineNumber,i.column,n.lineNumber,n.column)}convertModelPositionToViewPosition(e,i,n=2){const t=this.model.validatePosition(new Position(e,i)),o=t.lineNumber,s=t.column;let r=o-1,l=!1;while(r>0&&!this.modelLineProjections[r].isVisible())r--,l=!0;if(0===r&&!this.modelLineProjections[r].isVisible())return new Position(1,1);const d=1+this.projectedModelLineLineCounts.getPrefixSum(r);let u;return u=l?this.modelLineProjections[r].getViewPositionOfModelPosition(d,this.model.getLineMaxColumn(r+1),n):this.modelLineProjections[o-1].getViewPositionOfModelPosition(d,s,n),u}convertModelRangeToViewRange(e,i=0){if(e.isEmpty()){const n=this.convertModelPositionToViewPosition(e.startLineNumber,e.startColumn,i);return Range.fromPositions(n)}{const i=this.convertModelPositionToViewPosition(e.startLineNumber,e.startColumn,1),n=this.convertModelPositionToViewPosition(e.endLineNumber,e.endColumn,0);return new Range(i.lineNumber,i.column,n.lineNumber,n.column)}}getViewLineNumberOfModelPosition(e,i){let n=e-1;if(this.modelLineProjections[n].isVisible()){const e=1+this.projectedModelLineLineCounts.getPrefixSum(n);return this.modelLineProjections[n].getViewLineNumberOfModelPosition(e,i)}while(n>0&&!this.modelLineProjections[n].isVisible())n--;if(0===n&&!this.modelLineProjections[n].isVisible())return 1;const t=1+this.projectedModelLineLineCounts.getPrefixSum(n);return this.modelLineProjections[n].getViewLineNumberOfModelPosition(t,this.model.getLineMaxColumn(n+1))}getDecorationsInRange(e,i,n){const t=this.convertViewPositionToModelPosition(e.startLineNumber,e.startColumn),o=this.convertViewPositionToModelPosition(e.endLineNumber,e.endColumn);if(o.lineNumber-t.lineNumber<=e.endLineNumber-e.startLineNumber)return this.model.getDecorationsInRange(new Range(t.lineNumber,1,o.lineNumber,o.column),i,n);let s=[];const r=t.lineNumber-1,l=o.lineNumber-1;let d=null;for(let L=r;L<=l;L++){const e=this.modelLineProjections[L];if(e.isVisible())null===d&&(d=new Position(L+1,L===r?t.column:1));else if(null!==d){const e=this.model.getLineMaxColumn(L);s=s.concat(this.model.getDecorationsInRange(new Range(d.lineNumber,d.column,L,e),i,n)),d=null}}null!==d&&(s=s.concat(this.model.getDecorationsInRange(new Range(d.lineNumber,d.column,o.lineNumber,o.column),i,n)),d=null),s.sort(((e,i)=>{const n=Range.compareRangesUsingStarts(e.range,i.range);return 0===n?e.id<i.id?-1:e.id>i.id?1:0:n}));let u=[],m=0,a=null;for(const L of s){const e=L.id;a!==e&&(a=e,u[m++]=L)}return u}getInjectedTextAt(e){const i=this.getViewLineInfo(e.lineNumber);return this.modelLineProjections[i.modelLineNumber-1].getInjectedTextAt(i.modelLineWrappedLineIdx,e.column)}normalizePosition(e,i){const n=this.getViewLineInfo(e.lineNumber);return this.modelLineProjections[n.modelLineNumber-1].normalizePosition(n.modelLineWrappedLineIdx,e,i)}getLineIndentColumn(e){const i=this.getViewLineInfo(e);return 0===i.modelLineWrappedLineIdx?this.model.getLineIndentColumn(i.modelLineNumber):0}}function normalizeLineRanges(e){if(0===e.length)return[];const i=e.slice();i.sort(Range.compareRangesUsingStarts);const n=[];let t=i[0].startLineNumber,o=i[0].endLineNumber;for(let s=1,r=i.length;s<r;s++){const e=i[s];e.startLineNumber>o+1?(n.push(new Range(t,1,o,1)),t=e.startLineNumber,o=e.endLineNumber):e.endLineNumber>o&&(o=e.endLineNumber)}return n.push(new Range(t,1,o,1)),n}class ViewLineInfo{constructor(e,i){this.modelLineNumber=e,this.modelLineWrappedLineIdx=i}get isWrappedLineContinuation(){return this.modelLineWrappedLineIdx>0}}class ViewLineInfoGroupedByModelRange{constructor(e,i){this.modelRange=e,this.viewLines=i}}class CoordinatesConverter{constructor(e){this._lines=e}convertViewPositionToModelPosition(e){return this._lines.convertViewPositionToModelPosition(e.lineNumber,e.column)}convertViewRangeToModelRange(e){return this._lines.convertViewRangeToModelRange(e)}validateViewPosition(e,i){return this._lines.validateViewPosition(e.lineNumber,e.column,i)}validateViewRange(e,i){return this._lines.validateViewRange(e,i)}convertModelPositionToViewPosition(e,i){return this._lines.convertModelPositionToViewPosition(e.lineNumber,e.column,i)}convertModelRangeToViewRange(e,i){return this._lines.convertModelRangeToViewRange(e,i)}modelPositionIsVisible(e){return this._lines.modelPositionIsVisible(e.lineNumber,e.column)}getModelLineViewLineCount(e){return this._lines.getModelLineViewLineCount(e)}getViewLineNumberOfModelPosition(e,i){return this._lines.getViewLineNumberOfModelPosition(e,i)}}export class ViewModelLinesFromModelAsIs{constructor(e){this.model=e}dispose(){}createCoordinatesConverter(){return new IdentityCoordinatesConverter(this)}getHiddenAreas(){return[]}setHiddenAreas(e){return!1}setTabSize(e){return!1}setWrappingSettings(e,i,n,t){return!1}createLineBreaksComputer(){const e=[];return{addRequest:(i,n,t)=>{e.push(null)},finalize:()=>e}}onModelFlushed(){}onModelLinesDeleted(e,i,n){return new viewEvents.ViewLinesDeletedEvent(i,n)}onModelLinesInserted(e,i,n,t){return new viewEvents.ViewLinesInsertedEvent(i,n)}onModelLineChanged(e,i,n){return[!1,new viewEvents.ViewLinesChangedEvent(i,i),null,null]}acceptVersionId(e){}getViewLineCount(){return this.model.getLineCount()}getActiveIndentGuide(e,i,n){return{startLineNumber:e,endLineNumber:e,indent:0}}getViewLinesBracketGuides(e,i,n){return new Array(i-e+1).fill([])}getViewLinesIndentGuides(e,i){const n=i-e+1,t=new Array(n);for(let o=0;o<n;o++)t[o]=0;return t}getViewLineContent(e){return this.model.getLineContent(e)}getViewLineLength(e){return this.model.getLineLength(e)}getViewLineMinColumn(e){return this.model.getLineMinColumn(e)}getViewLineMaxColumn(e){return this.model.getLineMaxColumn(e)}getViewLineData(e){const i=this.model.getLineTokens(e),n=i.getLineContent();return new ViewLineData(n,!1,1,n.length+1,0,i.inflate(),null)}getViewLinesData(e,i,n){const t=this.model.getLineCount();e=Math.min(Math.max(1,e),t),i=Math.min(Math.max(1,i),t);const o=[];for(let s=e;s<=i;s++){const i=s-e;o[i]=n[i]?this.getViewLineData(s):null}return o}getDecorationsInRange(e,i,n){return this.model.getDecorationsInRange(e,i,n)}normalizePosition(e,i){return this.model.normalizePosition(e,i)}getLineIndentColumn(e){return this.model.getLineIndentColumn(e)}getInjectedTextAt(e){return null}}class IdentityCoordinatesConverter{constructor(e){this._lines=e}_validPosition(e){return this._lines.model.validatePosition(e)}_validRange(e){return this._lines.model.validateRange(e)}convertViewPositionToModelPosition(e){return this._validPosition(e)}convertViewRangeToModelRange(e){return this._validRange(e)}validateViewPosition(e,i){return this._validPosition(i)}validateViewRange(e,i){return this._validRange(i)}convertModelPositionToViewPosition(e){return this._validPosition(e)}convertModelRangeToViewRange(e){return this._validRange(e)}modelPositionIsVisible(e){const i=this._lines.model.getLineCount();return!(e.lineNumber<1||e.lineNumber>i)}getModelLineViewLineCount(e){return 1}getViewLineNumberOfModelPosition(e,i){return e}}