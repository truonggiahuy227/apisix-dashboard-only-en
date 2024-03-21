var __decorate=this&&this.__decorate||function(e,t,i,o){var r,c=arguments.length,n=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(c<3?r(n):c>3?r(t,i,n):r(t,i))||n);return c>3&&n&&Object.defineProperty(t,i,n),n},__param=this&&this.__param||function(e,t){return function(i,o){t(i,o,e)}};import"./standaloneQuickInput.css";import{registerEditorContribution}from"../../../browser/editorExtensions.js";import{IThemeService}from"../../../../platform/theme/common/themeService.js";import{CancellationToken}from"../../../../base/common/cancellation.js";import{IInstantiationService}from"../../../../platform/instantiation/common/instantiation.js";import{IContextKeyService}from"../../../../platform/contextkey/common/contextkey.js";import{IAccessibilityService}from"../../../../platform/accessibility/common/accessibility.js";import{EditorScopedLayoutService}from"../standaloneLayoutService.js";import{ICodeEditorService}from"../../../browser/services/codeEditorService.js";import{QuickInputService}from"../../../../platform/quickinput/browser/quickInput.js";import{once}from"../../../../base/common/functional.js";let EditorScopedQuickInputService=class extends QuickInputService{constructor(e,t,i,o,r,c){super(t,i,o,r,new EditorScopedLayoutService(e.getContainerDomNode(),c)),this.host=void 0;const n=QuickInputEditorContribution.get(e);if(n){const t=n.widget;this.host={_serviceBrand:void 0,get hasContainer(){return!0},get container(){return t.getDomNode()},get dimension(){return e.getLayoutInfo()},get onDidLayout(){return e.onDidLayoutChange},focus:()=>e.focus()}}else this.host=void 0}createController(){return super.createController(this.host)}};EditorScopedQuickInputService=__decorate([__param(1,IInstantiationService),__param(2,IContextKeyService),__param(3,IThemeService),__param(4,IAccessibilityService),__param(5,ICodeEditorService)],EditorScopedQuickInputService);export{EditorScopedQuickInputService};let StandaloneQuickInputService=class{constructor(e,t){this.instantiationService=e,this.codeEditorService=t,this.mapEditorToService=new Map}get activeService(){const e=this.codeEditorService.getFocusedCodeEditor();if(!e)throw new Error("Quick input service needs a focused editor to work.");let t=this.mapEditorToService.get(e);if(!t){const i=t=this.instantiationService.createInstance(EditorScopedQuickInputService,e);this.mapEditorToService.set(e,t),once(e.onDidDispose)((()=>{i.dispose(),this.mapEditorToService.delete(e)}))}return t}get quickAccess(){return this.activeService.quickAccess}pick(e,t={},i=CancellationToken.None){return this.activeService.pick(e,t,i)}createQuickPick(){return this.activeService.createQuickPick()}};StandaloneQuickInputService=__decorate([__param(0,IInstantiationService),__param(1,ICodeEditorService)],StandaloneQuickInputService);export{StandaloneQuickInputService};export class QuickInputEditorContribution{constructor(e){this.editor=e,this.widget=new QuickInputEditorWidget(this.editor)}static get(e){return e.getContribution(QuickInputEditorContribution.ID)}dispose(){this.widget.dispose()}}QuickInputEditorContribution.ID="editor.controller.quickInput";export class QuickInputEditorWidget{constructor(e){this.codeEditor=e,this.domNode=document.createElement("div"),this.codeEditor.addOverlayWidget(this)}getId(){return QuickInputEditorWidget.ID}getDomNode(){return this.domNode}getPosition(){return{preference:2}}dispose(){this.codeEditor.removeOverlayWidget(this)}}QuickInputEditorWidget.ID="editor.contrib.quickInputWidget",registerEditorContribution(QuickInputEditorContribution.ID,QuickInputEditorContribution);