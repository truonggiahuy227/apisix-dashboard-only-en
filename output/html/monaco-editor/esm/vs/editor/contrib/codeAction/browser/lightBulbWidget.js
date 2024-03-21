var LightBulbState,__decorate=this&&this.__decorate||function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},__param=this&&this.__param||function(t,e){return function(i,o){e(i,o,t)}};import*as dom from"../../../../base/browser/dom.js";import{GlobalMouseMoveMonitor,standardMouseMoveMerger}from"../../../../base/browser/globalMouseMoveMonitor.js";import{Gesture}from"../../../../base/browser/touch.js";import{Codicon}from"../../../../base/common/codicons.js";import{Emitter}from"../../../../base/common/event.js";import{Disposable}from"../../../../base/common/lifecycle.js";import"./lightBulbWidget.css";import{computeIndentLevel}from"../../../common/model/utils.js";import*as nls from"../../../../nls.js";import{IKeybindingService}from"../../../../platform/keybinding/common/keybinding.js";import{editorBackground,editorLightBulbAutoFixForeground,editorLightBulbForeground}from"../../../../platform/theme/common/colorRegistry.js";import{registerThemingParticipant}from"../../../../platform/theme/common/themeService.js";(function(t){t.Hidden={type:0};class e{constructor(t,e,i,o){this.actions=t,this.trigger=e,this.editorPosition=i,this.widgetPosition=o,this.type=1}}t.Showing=e})(LightBulbState||(LightBulbState={}));let LightBulbWidget=class t extends Disposable{constructor(t,e,i,o){super(),this._editor=t,this._quickFixActionId=e,this._preferredFixActionId=i,this._keybindingService=o,this._onClick=this._register(new Emitter),this.onClick=this._onClick.event,this._state=LightBulbState.Hidden,this._domNode=document.createElement("div"),this._domNode.className=Codicon.lightBulb.classNames,this._editor.addContentWidget(this),this._register(this._editor.onDidChangeModelContent((t=>{const e=this._editor.getModel();(1!==this.state.type||!e||this.state.editorPosition.lineNumber>=e.getLineCount())&&this.hide()}))),Gesture.ignoreTarget(this._domNode),this._register(dom.addStandardDisposableGenericMouseDownListner(this._domNode,(t=>{if(1!==this.state.type)return;this._editor.focus(),t.preventDefault();const{top:e,height:i}=dom.getDomNodePagePosition(this._domNode),o=this._editor.getOption(59);let s=Math.floor(o/3);null!==this.state.widgetPosition.position&&this.state.widgetPosition.position.lineNumber<this.state.editorPosition.lineNumber&&(s+=o),this._onClick.fire({x:t.posx,y:e+i+s,actions:this.state.actions,trigger:this.state.trigger})}))),this._register(dom.addDisposableListener(this._domNode,"mouseenter",(t=>{if(1!==(1&t.buttons))return;this.hide();const e=new GlobalMouseMoveMonitor;e.startMonitoring(t.target,t.buttons,standardMouseMoveMerger,(()=>{}),(()=>{e.dispose()}))}))),this._register(this._editor.onDidChangeConfiguration((t=>{t.hasChanged(57)&&!this._editor.getOption(57).enabled&&this.hide()}))),this._updateLightBulbTitleAndIcon(),this._register(this._keybindingService.onDidUpdateKeybindings(this._updateLightBulbTitleAndIcon,this))}dispose(){super.dispose(),this._editor.removeContentWidget(this)}getId(){return"LightBulbWidget"}getDomNode(){return this._domNode}getPosition(){return 1===this._state.type?this._state.widgetPosition:null}update(e,i,o){if(e.validActions.length<=0)return this.hide();const s=this._editor.getOptions();if(!s.get(57).enabled)return this.hide();const r=this._editor.getModel();if(!r)return this.hide();const{lineNumber:n,column:d}=r.validatePosition(o),h=r.getOptions().tabSize,l=s.get(44),a=r.getLineContent(n),c=computeIndentLevel(a,h),g=l.spaceWidth*c>22,u=t=>t>2&&this._editor.getTopForLineNumber(t)===this._editor.getTopForLineNumber(t-1);let m=n;if(!g)if(n>1&&!u(n-1))m-=1;else if(u(n+1)){if(d*l.spaceWidth<22)return this.hide()}else m+=1;this.state=new LightBulbState.Showing(e,i,o,{position:{lineNumber:m,column:1},preference:t._posPref}),this._editor.layoutContentWidget(this)}hide(){this.state=LightBulbState.Hidden,this._editor.layoutContentWidget(this)}get state(){return this._state}set state(t){this._state=t,this._updateLightBulbTitleAndIcon()}_updateLightBulbTitleAndIcon(){if(1===this.state.type&&this.state.actions.hasAutoFix){this._domNode.classList.remove(...Codicon.lightBulb.classNamesArray),this._domNode.classList.add(...Codicon.lightbulbAutofix.classNamesArray);const t=this._keybindingService.lookupKeybinding(this._preferredFixActionId);if(t)return void(this.title=nls.localize("preferredcodeActionWithKb","Show Code Actions. Preferred Quick Fix Available ({0})",t.getLabel()))}this._domNode.classList.remove(...Codicon.lightbulbAutofix.classNamesArray),this._domNode.classList.add(...Codicon.lightBulb.classNamesArray);const t=this._keybindingService.lookupKeybinding(this._quickFixActionId);this.title=t?nls.localize("codeActionWithKb","Show Code Actions ({0})",t.getLabel()):nls.localize("codeAction","Show Code Actions")}set title(t){this._domNode.title=t}};LightBulbWidget._posPref=[0],LightBulbWidget=__decorate([__param(3,IKeybindingService)],LightBulbWidget);export{LightBulbWidget};registerThemingParticipant(((t,e)=>{var i;const o=null===(i=t.getColor(editorBackground))||void 0===i?void 0:i.transparent(.7),s=t.getColor(editorLightBulbForeground);s&&e.addRule(`\n\t\t.monaco-editor .contentWidgets ${Codicon.lightBulb.cssSelector} {\n\t\t\tcolor: ${s};\n\t\t\tbackground-color: ${o};\n\t\t}`);const r=t.getColor(editorLightBulbAutoFixForeground);r&&e.addRule(`\n\t\t.monaco-editor .contentWidgets ${Codicon.lightbulbAutofix.cssSelector} {\n\t\t\tcolor: ${r};\n\t\t\tbackground-color: ${o};\n\t\t}`)}));