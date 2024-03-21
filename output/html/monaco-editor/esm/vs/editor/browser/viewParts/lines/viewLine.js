import*as browser from"../../../../base/browser/browser.js";import{createFastDomNode}from"../../../../base/browser/fastDomNode.js";import*as platform from"../../../../base/common/platform.js";import{RangeUtil}from"./rangeUtil.js";import{FloatHorizontalRange,VisibleRanges}from"../../view/renderingContext.js";import{LineDecoration}from"../../../common/viewLayout/lineDecorations.js";import{RenderLineInput,renderViewLine,LineRange,DomPosition}from"../../../common/viewLayout/viewLineRenderer.js";import{ColorScheme}from"../../../../platform/theme/common/theme.js";import{EditorFontLigatures}from"../../../common/config/editorOptions.js";const canUseFastRenderedViewLine=function(){return!!platform.isNative||!(platform.isLinux||browser.isFirefox||browser.isSafari)}();let monospaceAssumptionsAreValid=!0;export class DomReadingContext{constructor(e,t){this._domNode=e,this._clientRectDeltaLeft=0,this._clientRectScale=1,this._clientRectRead=!1,this.endNode=t}readClientRect(){if(!this._clientRectRead){this._clientRectRead=!0;const e=this._domNode.getBoundingClientRect();this._clientRectDeltaLeft=e.left,this._clientRectScale=e.width/this._domNode.offsetWidth}}get clientRectDeltaLeft(){return this._clientRectRead||this.readClientRect(),this._clientRectDeltaLeft}get clientRectScale(){return this._clientRectRead||this.readClientRect(),this._clientRectScale}}export class ViewLineOptions{constructor(e,t){this.themeType=t;const i=e.options,n=i.get(44);this.renderWhitespace=i.get(88),this.renderControlCharacters=i.get(83),this.spaceWidth=n.spaceWidth,this.middotWidth=n.middotWidth,this.wsmiddotWidth=n.wsmiddotWidth,this.useMonospaceOptimizations=n.isMonospace&&!i.get(29),this.canUseHalfwidthRightwardsArrow=n.canUseHalfwidthRightwardsArrow,this.lineHeight=i.get(59),this.stopRenderingLineAfter=i.get(105),this.fontLigatures=i.get(45)}equals(e){return this.themeType===e.themeType&&this.renderWhitespace===e.renderWhitespace&&this.renderControlCharacters===e.renderControlCharacters&&this.spaceWidth===e.spaceWidth&&this.middotWidth===e.middotWidth&&this.wsmiddotWidth===e.wsmiddotWidth&&this.useMonospaceOptimizations===e.useMonospaceOptimizations&&this.canUseHalfwidthRightwardsArrow===e.canUseHalfwidthRightwardsArrow&&this.lineHeight===e.lineHeight&&this.stopRenderingLineAfter===e.stopRenderingLineAfter&&this.fontLigatures===e.fontLigatures}}export class ViewLine{constructor(e){this._options=e,this._isMaybeInvalid=!0,this._renderedViewLine=null}getDomNode(){return this._renderedViewLine&&this._renderedViewLine.domNode?this._renderedViewLine.domNode.domNode:null}setDomNode(e){if(!this._renderedViewLine)throw new Error("I have no rendered view line to set the dom node to...");this._renderedViewLine.domNode=createFastDomNode(e)}onContentChanged(){this._isMaybeInvalid=!0}onTokensChanged(){this._isMaybeInvalid=!0}onDecorationsChanged(){this._isMaybeInvalid=!0}onOptionsChanged(e){this._isMaybeInvalid=!0,this._options=e}onSelectionChanged(){return(this._options.themeType===ColorScheme.HIGH_CONTRAST||"selection"===this._options.renderWhitespace)&&(this._isMaybeInvalid=!0,!0)}renderLine(e,t,i,n){if(!1===this._isMaybeInvalid)return!1;this._isMaybeInvalid=!1;const s=i.getViewLineRenderingData(e),r=this._options,o=LineDecoration.filter(s.inlineDecorations,e,s.minColumn,s.maxColumn);let a=null;if(r.themeType===ColorScheme.HIGH_CONTRAST||"selection"===this._options.renderWhitespace){const t=i.selections;for(const i of t){if(i.endLineNumber<e||i.startLineNumber>e)continue;const t=i.startLineNumber===e?i.startColumn:s.minColumn,n=i.endLineNumber===e?i.endColumn:s.maxColumn;t<n&&(r.themeType===ColorScheme.HIGH_CONTRAST||"selection"!==this._options.renderWhitespace?o.push(new LineDecoration(t,n,"inline-selected-text",0)):(a||(a=[]),a.push(new LineRange(t-1,n-1))))}}const d=new RenderLineInput(r.useMonospaceOptimizations,r.canUseHalfwidthRightwardsArrow,s.content,s.continuesWithWrappedLine,s.isBasicASCII,s.containsRTL,s.minColumn-1,s.tokens,o,s.tabSize,s.startVisibleColumn,r.spaceWidth,r.middotWidth,r.wsmiddotWidth,r.stopRenderingLineAfter,r.renderWhitespace,r.renderControlCharacters,r.fontLigatures!==EditorFontLigatures.OFF,a);if(this._renderedViewLine&&this._renderedViewLine.input.equals(d))return!1;n.appendASCIIString('<div style="top:'),n.appendASCIIString(String(t)),n.appendASCIIString("px;height:"),n.appendASCIIString(String(this._options.lineHeight)),n.appendASCIIString('px;" class="'),n.appendASCIIString(ViewLine.CLASS_NAME),n.appendASCIIString('">');const h=renderViewLine(d,n);n.appendASCIIString("</div>");let c=null;return monospaceAssumptionsAreValid&&canUseFastRenderedViewLine&&s.isBasicASCII&&r.useMonospaceOptimizations&&0===h.containsForeignElements&&s.content.length<300&&d.lineTokens.getCount()<100&&(c=new FastRenderedViewLine(this._renderedViewLine?this._renderedViewLine.domNode:null,d,h.characterMapping)),c||(c=createRenderedLine(this._renderedViewLine?this._renderedViewLine.domNode:null,d,h.characterMapping,h.containsRTL,h.containsForeignElements)),this._renderedViewLine=c,!0}layoutLine(e,t){this._renderedViewLine&&this._renderedViewLine.domNode&&(this._renderedViewLine.domNode.setTop(t),this._renderedViewLine.domNode.setHeight(this._options.lineHeight))}getWidth(){return this._renderedViewLine?this._renderedViewLine.getWidth():0}getWidthIsFast(){return!this._renderedViewLine||this._renderedViewLine.getWidthIsFast()}needsMonospaceFontCheck(){return!!this._renderedViewLine&&this._renderedViewLine instanceof FastRenderedViewLine}monospaceAssumptionsAreValid(){return this._renderedViewLine&&this._renderedViewLine instanceof FastRenderedViewLine?this._renderedViewLine.monospaceAssumptionsAreValid():monospaceAssumptionsAreValid}onMonospaceAssumptionsInvalidated(){this._renderedViewLine&&this._renderedViewLine instanceof FastRenderedViewLine&&(this._renderedViewLine=this._renderedViewLine.toSlowRenderedLine())}getVisibleRangesForRange(e,t,i,n){if(!this._renderedViewLine)return null;t=Math.min(this._renderedViewLine.input.lineContent.length+1,Math.max(1,t)),i=Math.min(this._renderedViewLine.input.lineContent.length+1,Math.max(1,i));const s=this._renderedViewLine.input.stopRenderingLineAfter;let r=!1;-1!==s&&t>s+1&&i>s+1&&(r=!0),-1!==s&&t>s+1&&(t=s+1),-1!==s&&i>s+1&&(i=s+1);const o=this._renderedViewLine.getVisibleRangesForRange(e,t,i,n);return o&&o.length>0?new VisibleRanges(r,o):null}getColumnOfNodeOffset(e,t,i){return this._renderedViewLine?this._renderedViewLine.getColumnOfNodeOffset(e,t,i):1}}ViewLine.CLASS_NAME="view-line";class FastRenderedViewLine{constructor(e,t,i){this.domNode=e,this.input=t,this._characterMapping=i,this._charWidth=t.spaceWidth}getWidth(){return Math.round(this._getCharPosition(this._characterMapping.length))}getWidthIsFast(){return!0}monospaceAssumptionsAreValid(){if(!this.domNode)return monospaceAssumptionsAreValid;const e=this.getWidth(),t=this.domNode.domNode.firstChild.offsetWidth;return Math.abs(e-t)>=2&&(console.warn("monospace assumptions have been violated, therefore disabling monospace optimizations!"),monospaceAssumptionsAreValid=!1),monospaceAssumptionsAreValid}toSlowRenderedLine(){return createRenderedLine(this.domNode,this.input,this._characterMapping,!1,0)}getVisibleRangesForRange(e,t,i,n){const s=this._getCharPosition(t),r=this._getCharPosition(i);return[new FloatHorizontalRange(s,r-s)]}_getCharPosition(e){const t=this._characterMapping.getAbsoluteOffset(e);return this._charWidth*t}getColumnOfNodeOffset(e,t,i){const n=t.textContent.length;let s=-1;while(t)t=t.previousSibling,s++;return this._characterMapping.getColumn(new DomPosition(s,i),n)}}class RenderedViewLine{constructor(e,t,i,n,s){if(this.domNode=e,this.input=t,this._characterMapping=i,this._isWhitespaceOnly=/^\s*$/.test(t.lineContent),this._containsForeignElements=s,this._cachedWidth=-1,this._pixelOffsetCache=null,!n||0===this._characterMapping.length){this._pixelOffsetCache=new Float32Array(Math.max(2,this._characterMapping.length+1));for(let e=0,t=this._characterMapping.length;e<=t;e++)this._pixelOffsetCache[e]=-1}}_getReadingTarget(e){return e.domNode.firstChild}getWidth(){return this.domNode?(-1===this._cachedWidth&&(this._cachedWidth=this._getReadingTarget(this.domNode).offsetWidth),this._cachedWidth):0}getWidthIsFast(){return-1!==this._cachedWidth}getVisibleRangesForRange(e,t,i,n){if(!this.domNode)return null;if(null!==this._pixelOffsetCache){const s=this._readPixelOffset(this.domNode,e,t,n);if(-1===s)return null;const r=this._readPixelOffset(this.domNode,e,i,n);return-1===r?null:[new FloatHorizontalRange(s,r-s)]}return this._readVisibleRangesForRange(this.domNode,e,t,i,n)}_readVisibleRangesForRange(e,t,i,n,s){if(i===n){const n=this._readPixelOffset(e,t,i,s);return-1===n?null:[new FloatHorizontalRange(n,0)]}return this._readRawVisibleRangesForRange(e,i,n,s)}_readPixelOffset(e,t,i,n){if(0===this._characterMapping.length){if(0===this._containsForeignElements)return 0;if(2===this._containsForeignElements)return 0;if(1===this._containsForeignElements)return this.getWidth();const t=this._getReadingTarget(e);return t.firstChild?t.firstChild.offsetWidth:0}if(null!==this._pixelOffsetCache){const s=this._pixelOffsetCache[i];if(-1!==s)return s;const r=this._actualReadPixelOffset(e,t,i,n);return this._pixelOffsetCache[i]=r,r}return this._actualReadPixelOffset(e,t,i,n)}_actualReadPixelOffset(e,t,i,n){if(0===this._characterMapping.length){const t=RangeUtil.readHorizontalRanges(this._getReadingTarget(e),0,0,0,0,n.clientRectDeltaLeft,n.clientRectScale,n.endNode);return t&&0!==t.length?t[0].left:-1}if(i===this._characterMapping.length&&this._isWhitespaceOnly&&0===this._containsForeignElements)return this.getWidth();const s=this._characterMapping.getDomPosition(i),r=RangeUtil.readHorizontalRanges(this._getReadingTarget(e),s.partIndex,s.charIndex,s.partIndex,s.charIndex,n.clientRectDeltaLeft,n.clientRectScale,n.endNode);if(!r||0===r.length)return-1;const o=r[0].left;if(this.input.isBasicASCII){const e=this._characterMapping.getAbsoluteOffset(i),t=Math.round(this.input.spaceWidth*e);if(Math.abs(t-o)<=1)return t}return o}_readRawVisibleRangesForRange(e,t,i,n){if(1===t&&i===this._characterMapping.length)return[new FloatHorizontalRange(0,this.getWidth())];const s=this._characterMapping.getDomPosition(t),r=this._characterMapping.getDomPosition(i);return RangeUtil.readHorizontalRanges(this._getReadingTarget(e),s.partIndex,s.charIndex,r.partIndex,r.charIndex,n.clientRectDeltaLeft,n.clientRectScale,n.endNode)}getColumnOfNodeOffset(e,t,i){const n=t.textContent.length;let s=-1;while(t)t=t.previousSibling,s++;return this._characterMapping.getColumn(new DomPosition(s,i),n)}}class WebKitRenderedViewLine extends RenderedViewLine{_readVisibleRangesForRange(e,t,i,n,s){const r=super._readVisibleRangesForRange(e,t,i,n,s);if(!r||0===r.length||i===n||1===i&&n===this._characterMapping.length)return r;if(!this.input.containsRTL){const i=this._readPixelOffset(e,t,n,s);if(-1!==i){const e=r[r.length-1];e.left<i&&(e.width=i-e.left)}}return r}}const createRenderedLine=function(){return browser.isWebKit?createWebKitRenderedLine:createNormalRenderedLine}();function createWebKitRenderedLine(e,t,i,n,s){return new WebKitRenderedViewLine(e,t,i,n,s)}function createNormalRenderedLine(e,t,i,n,s){return new RenderedViewLine(e,t,i,n,s)}