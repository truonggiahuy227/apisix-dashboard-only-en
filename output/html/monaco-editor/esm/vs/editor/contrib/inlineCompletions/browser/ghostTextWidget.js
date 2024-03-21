var _a,__decorate=this&&this.__decorate||function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r},__param=this&&this.__param||function(e,t){return function(o,i){t(o,i,e)}};import*as dom from"../../../../base/browser/dom.js";import{Disposable,DisposableStore,toDisposable}from"../../../../base/common/lifecycle.js";import*as strings from"../../../../base/common/strings.js";import"./ghostText.css";import{applyFontInfo}from"../../../browser/config/domFontInfo.js";import{EditorFontLigatures}from"../../../common/config/editorOptions.js";import{LineTokens}from"../../../common/tokens/lineTokens.js";import{Position}from"../../../common/core/position.js";import{Range}from"../../../common/core/range.js";import{createStringBuilder}from"../../../common/core/stringBuilder.js";import{ILanguageService}from"../../../common/services/language.js";import{ghostTextBackground,ghostTextBorder,ghostTextForeground}from"../../../common/core/editorColorRegistry.js";import{LineDecoration}from"../../../common/viewLayout/lineDecorations.js";import{RenderLineInput,renderViewLine}from"../../../common/viewLayout/viewLineRenderer.js";import{IInstantiationService}from"../../../../platform/instantiation/common/instantiation.js";import{registerThemingParticipant}from"../../../../platform/theme/common/themeService.js";const ttPolicy=null===(_a=window.trustedTypes)||void 0===_a?void 0:_a.createPolicy("editorGhostText",{createHTML:e=>e});let GhostTextWidget=class extends Disposable{constructor(e,t,o,i){super(),this.editor=e,this.model=t,this.instantiationService=o,this.languageService=i,this.disposed=!1,this.partsWidget=this._register(this.instantiationService.createInstance(DecorationsWidget,this.editor)),this.additionalLinesWidget=this._register(new AdditionalLinesWidget(this.editor,this.languageService.languageIdCodec)),this.viewMoreContentWidget=void 0,this._register(this.editor.onDidChangeConfiguration((e=>{(e.hasChanged(29)||e.hasChanged(105)||e.hasChanged(88)||e.hasChanged(83)||e.hasChanged(45)||e.hasChanged(44)||e.hasChanged(59))&&this.update()}))),this._register(toDisposable((()=>{var e;this.disposed=!0,this.update(),null===(e=this.viewMoreContentWidget)||void 0===e||e.dispose(),this.viewMoreContentWidget=void 0}))),this._register(t.onDidChange((()=>{this.update()}))),this.update()}shouldShowHoverAtViewZone(e){return this.additionalLinesWidget.viewZoneId===e}update(){var e;const t=this.model.ghostText;if(!this.editor.hasModel()||!t||this.disposed)return this.partsWidget.clear(),void this.additionalLinesWidget.clear();const o=new Array,i=new Array;function n(e,t){if(i.length>0){const o=i[i.length-1];t&&o.decorations.push(new LineDecoration(o.content.length+1,o.content.length+1+e[0].length,t,0)),o.content+=e[0],e=e.slice(1)}for(const o of e)i.push({content:o,decorations:t?[new LineDecoration(1,o.length+1,t,0)]:[]})}const s=this.editor.getModel().getLineContent(t.lineNumber);let r;this.editor.getModel().getLineTokens(t.lineNumber);let d=0;for(const a of t.parts){let e=a.lines;void 0===r?(o.push({column:a.column,text:e[0],preview:a.preview}),e=e.slice(1)):n([s.substring(d,a.column-1)],void 0),e.length>0&&(n(e,"ghost-text"),void 0===r&&a.column<=s.length&&(r=a.column)),d=a.column-1}void 0!==r&&n([s.substring(d)],void 0),this.partsWidget.setParts(t.lineNumber,o,void 0!==r?{column:r,length:s.length+1-r}:void 0),this.additionalLinesWidget.updateLines(t.lineNumber,i,t.additionalReservedLineCount),t.parts.some((e=>e.lines.length<0))?this.viewMoreContentWidget=this.renderViewMoreLines(new Position(t.lineNumber,this.editor.getModel().getLineMaxColumn(t.lineNumber)),"",0):(null===(e=this.viewMoreContentWidget)||void 0===e||e.dispose(),this.viewMoreContentWidget=void 0)}renderViewMoreLines(e,t,o){const i=this.editor.getOption(44),n=document.createElement("div");n.className="suggest-preview-additional-widget",applyFontInfo(n,i);const s=document.createElement("span");s.className="content-spacer",s.append(t),n.append(s);const r=document.createElement("span");r.className="content-newline suggest-preview-text",r.append("\u23ce  "),n.append(r);const d=new DisposableStore,a=document.createElement("div");return a.className="button suggest-preview-text",a.append(`+${o} lines\u2026`),d.add(dom.addStandardDisposableListener(a,"mousedown",(e=>{var t;null===(t=this.model)||void 0===t||t.setExpanded(!0),e.preventDefault(),this.editor.focus()}))),n.append(a),new ViewMoreLinesContentWidget(this.editor,e,n,d)}};GhostTextWidget=__decorate([__param(2,IInstantiationService),__param(3,ILanguageService)],GhostTextWidget);export{GhostTextWidget};class DecorationsWidget{constructor(e){this.editor=e,this.decorationIds=[],this.disposableStore=new DisposableStore}dispose(){this.clear(),this.disposableStore.dispose()}clear(){this.editor.deltaDecorations(this.decorationIds,[]),this.disposableStore.clear()}setParts(e,t,o){this.disposableStore.clear();const i=this.editor.getModel();if(!i)return;const n=new Array;o&&n.push({range:Range.fromPositions(new Position(e,o.column),new Position(e,o.column+o.length)),options:{inlineClassName:"ghost-text-hidden",description:"ghost-text-hidden"}}),this.decorationIds=this.editor.deltaDecorations(this.decorationIds,t.map((t=>({range:Range.fromPositions(new Position(e,t.column)),options:{description:"ghost-text",after:{content:t.text,inlineClassName:t.preview?"ghost-text-decoration-preview":"ghost-text-decoration"},showIfCollapsed:!0}}))).concat(n))}}class AdditionalLinesWidget{constructor(e,t){this.editor=e,this.languageIdCodec=t,this._viewZoneId=void 0}get viewZoneId(){return this._viewZoneId}dispose(){this.clear()}clear(){this.editor.changeViewZones((e=>{this._viewZoneId&&(e.removeZone(this._viewZoneId),this._viewZoneId=void 0)}))}updateLines(e,t,o){const i=this.editor.getModel();if(!i)return;const{tabSize:n}=i.getOptions();this.editor.changeViewZones((i=>{this._viewZoneId&&(i.removeZone(this._viewZoneId),this._viewZoneId=void 0);const s=Math.max(t.length,o);if(s>0){const o=document.createElement("div");renderLines(o,n,t,this.editor.getOptions(),this.languageIdCodec),this._viewZoneId=i.addZone({afterLineNumber:e,heightInLines:s,domNode:o,afterColumnAffinity:1})}}))}}function renderLines(e,t,o,i,n){const s=i.get(29),r=i.get(105),d="none",a=i.get(83),c=i.get(45),g=i.get(44),h=i.get(59),l=createStringBuilder(1e4);l.appendASCIIString('<div class="suggest-preview-text">');for(let u=0,v=o.length;u<v;u++){const e=o[u],i=e.content;l.appendASCIIString('<div class="view-line'),l.appendASCIIString('" style="top:'),l.appendASCIIString(String(u*h)),l.appendASCIIString('px;width:1000000px;">');const p=strings.isBasicASCII(i),m=strings.containsRTL(i),v=LineTokens.createEmpty(i,n);renderViewLine(new RenderLineInput(g.isMonospace&&!s,g.canUseHalfwidthRightwardsArrow,i,!1,p,m,0,v,e.decorations,t,0,g.spaceWidth,g.middotWidth,g.wsmiddotWidth,r,d,a,c!==EditorFontLigatures.OFF,null),l),l.appendASCIIString("</div>")}l.appendASCIIString("</div>"),applyFontInfo(e,g);const p=l.build(),m=ttPolicy?ttPolicy.createHTML(p):p;e.innerHTML=m}class ViewMoreLinesContentWidget extends Disposable{constructor(e,t,o,i){super(),this.editor=e,this.position=t,this.domNode=o,this.allowEditorOverflow=!1,this.suppressMouseDown=!1,this._register(i),this._register(toDisposable((()=>{this.editor.removeContentWidget(this)}))),this.editor.addContentWidget(this)}getId(){return"editor.widget.viewMoreLinesWidget"}getDomNode(){return this.domNode}getPosition(){return{position:this.position,preference:[0]}}}registerThemingParticipant(((e,t)=>{const o=e.getColor(ghostTextForeground);o&&(t.addRule(`.monaco-editor .ghost-text-decoration { color: ${o.toString()} !important; }`),t.addRule(`.monaco-editor .ghost-text-decoration-preview { color: ${o.toString()} !important; }`),t.addRule(`.monaco-editor .suggest-preview-text .ghost-text { color: ${o.toString()} !important; }`));const i=e.getColor(ghostTextBackground);i&&(t.addRule(`.monaco-editor .ghost-text-decoration { background-color: ${i.toString()}; }`),t.addRule(`.monaco-editor .ghost-text-decoration-preview { background-color: ${i.toString()}; }`),t.addRule(`.monaco-editor .suggest-preview-text .ghost-text { background-color: ${i.toString()}; }`));const n=e.getColor(ghostTextBorder);n&&(t.addRule(`.monaco-editor .suggest-preview-text .ghost-text { border: 1px solid ${n}; }`),t.addRule(`.monaco-editor .ghost-text-decoration { border: 1px solid ${n}; }`),t.addRule(`.monaco-editor .ghost-text-decoration-preview { border: 1px solid ${n}; }`))}));