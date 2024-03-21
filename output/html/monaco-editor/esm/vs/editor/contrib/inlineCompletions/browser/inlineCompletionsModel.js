var __decorate=this&&this.__decorate||function(e,t,i,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},__param=this&&this.__param||function(e,t){return function(i,n){t(i,n,e)}},__awaiter=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,s){function r(e){try{a(n.next(e))}catch(t){s(t)}}function l(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?i(e.value):o(e.value).then(r,l)}a((n=n.apply(e,t||[])).next())}))};import{createCancelablePromise,RunOnceScheduler}from"../../../../base/common/async.js";import{CancellationToken}from"../../../../base/common/cancellation.js";import{onUnexpectedError,onUnexpectedExternalError}from"../../../../base/common/errors.js";import{Emitter}from"../../../../base/common/event.js";import{Disposable,MutableDisposable,toDisposable}from"../../../../base/common/lifecycle.js";import{commonPrefixLength,commonSuffixLength}from"../../../../base/common/strings.js";import{CoreEditingCommands}from"../../../browser/controller/coreCommands.js";import{EditOperation}from"../../../common/core/editOperation.js";import{Range}from"../../../common/core/range.js";import{InlineCompletionsProviderRegistry,InlineCompletionTriggerKind}from"../../../common/languages.js";import{BaseGhostTextWidgetModel}from"./ghostText.js";import{ICommandService}from"../../../../platform/commands/common/commands.js";import{inlineSuggestCommitId}from"./consts.js";import{inlineCompletionToGhostText}from"./inlineCompletionToGhostText.js";import{ILanguageConfigurationService}from"../../../common/languages/languageConfigurationRegistry.js";import{fixBracketsInLine}from"../../../common/model/bracketPairsTextModelPart/fixBrackets.js";let InlineCompletionsModel=class extends Disposable{constructor(e,t,i,n){super(),this.editor=e,this.cache=t,this.commandService=i,this.languageConfigurationService=n,this.onDidChangeEmitter=new Emitter,this.onDidChange=this.onDidChangeEmitter.event,this.completionSession=this._register(new MutableDisposable),this.active=!1,this.disposed=!1,this._register(i.onDidExecuteCommand((t=>{const i=new Set([CoreEditingCommands.Tab.id,CoreEditingCommands.DeleteLeft.id,CoreEditingCommands.DeleteRight.id,inlineSuggestCommitId,"acceptSelectedSuggestion"]);i.has(t.commandId)&&e.hasTextFocus()&&this.handleUserInput()}))),this._register(this.editor.onDidType((e=>{this.handleUserInput()}))),this._register(this.editor.onDidChangeCursorPosition((e=>{this.session&&!this.session.isValid&&this.hide()}))),this._register(toDisposable((()=>{this.disposed=!0}))),this._register(this.editor.onDidBlurEditorWidget((()=>{this.hide()})))}handleUserInput(){this.session&&!this.session.isValid&&this.hide(),setTimeout((()=>{this.disposed||this.startSessionIfTriggered()}),0)}get session(){return this.completionSession.value}get ghostText(){var e;return null===(e=this.session)||void 0===e?void 0:e.ghostText}get minReservedLineCount(){return this.session?this.session.minReservedLineCount:0}setExpanded(e){var t;null===(t=this.session)||void 0===t||t.setExpanded(e)}setActive(e){var t;this.active=e,e&&(null===(t=this.session)||void 0===t||t.scheduleAutomaticUpdate())}startSessionIfTriggered(){const e=this.editor.getOption(55);e.enabled&&(this.session&&this.session.isValid||this.trigger(InlineCompletionTriggerKind.Automatic))}trigger(e){this.completionSession.value?e===InlineCompletionTriggerKind.Explicit&&this.completionSession.value.ensureUpdateWithExplicitContext():(this.completionSession.value=new InlineCompletionsSession(this.editor,this.editor.getPosition(),(()=>this.active),this.commandService,this.cache,e,this.languageConfigurationService),this.completionSession.value.takeOwnership(this.completionSession.value.onDidChange((()=>{this.onDidChangeEmitter.fire()}))))}hide(){this.completionSession.clear(),this.onDidChangeEmitter.fire()}commitCurrentSuggestion(){var e;null===(e=this.session)||void 0===e||e.commitCurrentCompletion()}showNext(){var e;null===(e=this.session)||void 0===e||e.showNextInlineCompletion()}showPrevious(){var e;null===(e=this.session)||void 0===e||e.showPreviousInlineCompletion()}hasMultipleInlineCompletions(){var e;return __awaiter(this,void 0,void 0,(function*(){const t=yield null===(e=this.session)||void 0===e?void 0:e.hasMultipleInlineCompletions();return void 0!==t&&t}))}};InlineCompletionsModel=__decorate([__param(2,ICommandService),__param(3,ILanguageConfigurationService)],InlineCompletionsModel);export{InlineCompletionsModel};export class InlineCompletionsSession extends BaseGhostTextWidgetModel{constructor(e,t,i,n,o,s,r){let l;super(e),this.triggerPosition=t,this.shouldUpdate=i,this.commandService=n,this.cache=o,this.initialTriggerKind=s,this.languageConfigurationService=r,this.minReservedLineCount=0,this.updateOperation=this._register(new MutableDisposable),this.updateSoon=this._register(new RunOnceScheduler((()=>{let e=this.initialTriggerKind;return this.initialTriggerKind=InlineCompletionTriggerKind.Automatic,this.update(e)}),50)),this.currentlySelectedCompletionId=void 0,this._register(this.onDidChange((()=>{const e=this.currentCompletion;if(e&&e.sourceInlineCompletion!==l){l=e.sourceInlineCompletion;const t=e.sourceProvider;t.handleItemDidShow&&t.handleItemDidShow(e.sourceInlineCompletions,l)}}))),this._register(toDisposable((()=>{this.cache.clear()}))),this._register(this.editor.onDidChangeCursorPosition((e=>{this.cache.value&&this.onDidChangeEmitter.fire()}))),this._register(this.editor.onDidChangeModelContent((e=>{this.scheduleAutomaticUpdate()}))),this._register(InlineCompletionsProviderRegistry.onDidChange((()=>{this.updateSoon.schedule()}))),this.scheduleAutomaticUpdate()}fixAndGetIndexOfCurrentSelection(){if(!this.currentlySelectedCompletionId||!this.cache.value)return 0;if(0===this.cache.value.completions.length)return 0;const e=this.cache.value.completions.findIndex((e=>e.semanticId===this.currentlySelectedCompletionId));return-1===e?(this.currentlySelectedCompletionId=void 0,0):e}get currentCachedCompletion(){if(this.cache.value)return this.cache.value.completions[this.fixAndGetIndexOfCurrentSelection()]}showNextInlineCompletion(){var e;return __awaiter(this,void 0,void 0,(function*(){yield this.ensureUpdateWithExplicitContext();const t=(null===(e=this.cache.value)||void 0===e?void 0:e.completions)||[];if(t.length>0){const e=(this.fixAndGetIndexOfCurrentSelection()+1)%t.length;this.currentlySelectedCompletionId=t[e].semanticId}else this.currentlySelectedCompletionId=void 0;this.onDidChangeEmitter.fire()}))}showPreviousInlineCompletion(){var e;return __awaiter(this,void 0,void 0,(function*(){yield this.ensureUpdateWithExplicitContext();const t=(null===(e=this.cache.value)||void 0===e?void 0:e.completions)||[];if(t.length>0){const e=(this.fixAndGetIndexOfCurrentSelection()+t.length-1)%t.length;this.currentlySelectedCompletionId=t[e].semanticId}else this.currentlySelectedCompletionId=void 0;this.onDidChangeEmitter.fire()}))}ensureUpdateWithExplicitContext(){var e;return __awaiter(this,void 0,void 0,(function*(){this.updateOperation.value?this.updateOperation.value.triggerKind===InlineCompletionTriggerKind.Explicit?yield this.updateOperation.value.promise:yield this.update(InlineCompletionTriggerKind.Explicit):(null===(e=this.cache.value)||void 0===e?void 0:e.triggerKind)!==InlineCompletionTriggerKind.Explicit&&(yield this.update(InlineCompletionTriggerKind.Explicit))}))}hasMultipleInlineCompletions(){var e;return __awaiter(this,void 0,void 0,(function*(){return yield this.ensureUpdateWithExplicitContext(),((null===(e=this.cache.value)||void 0===e?void 0:e.completions.length)||0)>1}))}get ghostText(){const e=this.currentCompletion,t=this.editor.getOptions().get(55).mode;return e?inlineCompletionToGhostText(e,this.editor.getModel(),t,this.editor.getPosition()):void 0}get currentCompletion(){const e=this.currentCachedCompletion;if(e)return e.toLiveInlineCompletion()}get isValid(){return this.editor.getPosition().lineNumber===this.triggerPosition.lineNumber}scheduleAutomaticUpdate(){this.updateOperation.clear(),this.updateSoon.schedule()}update(e){return __awaiter(this,void 0,void 0,(function*(){if(!this.shouldUpdate())return;const t=this.editor.getPosition(),i=createCancelablePromise((i=>__awaiter(this,void 0,void 0,(function*(){let n;try{n=yield provideInlineCompletions(t,this.editor.getModel(),{triggerKind:e,selectedSuggestionInfo:void 0},i,this.languageConfigurationService)}catch(o){return void onUnexpectedError(o)}i.isCancellationRequested||(this.cache.setValue(this.editor,n,e),this.onDidChangeEmitter.fire())})))),n=new UpdateOperation(i,e);this.updateOperation.value=n,yield i,this.updateOperation.value===n&&this.updateOperation.clear()}))}takeOwnership(e){this._register(e)}commitCurrentCompletion(){if(!this.ghostText)return;const e=this.currentCompletion;e&&this.commit(e)}commit(e){const t=this.cache.clearAndLeak();this.editor.executeEdits("inlineSuggestion.accept",[EditOperation.replaceMove(e.range,e.text)]),e.command?this.commandService.executeCommand(e.command.id,...e.command.arguments||[]).finally((()=>{null===t||void 0===t||t.dispose()})).then(void 0,onUnexpectedExternalError):null===t||void 0===t||t.dispose(),this.onDidChangeEmitter.fire()}}export class UpdateOperation{constructor(e,t){this.promise=e,this.triggerKind=t}dispose(){this.promise.cancel()}}export class SynchronizedInlineCompletionsCache extends Disposable{constructor(e,t,i,n){super(),this.triggerKind=n;const o=e.deltaDecorations([],t.items.map((e=>({range:e.range,options:{description:"inline-completion-tracking-range"}}))));this._register(toDisposable((()=>{e.deltaDecorations(o,[])}))),this.completions=t.items.map(((e,t)=>new CachedInlineCompletion(e,o[t]))),this._register(e.onDidChangeModelContent((()=>{let t=!1;const n=e.getModel();for(const e of this.completions){const i=n.getDecorationRange(e.decorationId);i?e.synchronizedRange.equalsRange(i)||(t=!0,e.synchronizedRange=i):onUnexpectedError(new Error("Decoration has no range"))}t&&i()}))),this._register(t)}}class CachedInlineCompletion{constructor(e,t){this.inlineCompletion=e,this.decorationId=t,this.semanticId=JSON.stringify({text:this.inlineCompletion.text,startLine:this.inlineCompletion.range.startLineNumber,startColumn:this.inlineCompletion.range.startColumn,command:this.inlineCompletion.command}),this.synchronizedRange=e.range}toLiveInlineCompletion(){return{text:this.inlineCompletion.text,range:this.synchronizedRange,command:this.inlineCompletion.command,sourceProvider:this.inlineCompletion.sourceProvider,sourceInlineCompletions:this.inlineCompletion.sourceInlineCompletions,sourceInlineCompletion:this.inlineCompletion.sourceInlineCompletion}}}function getDefaultRange(e,t){const i=t.getWordAtPosition(e),n=t.getLineMaxColumn(e.lineNumber);return i?new Range(e.lineNumber,i.startColumn,e.lineNumber,n):Range.fromPositions(e,e.with(void 0,n))}export function provideInlineCompletions(e,t,i,n=CancellationToken.None,o){return __awaiter(this,void 0,void 0,(function*(){const s=getDefaultRange(e,t),r=InlineCompletionsProviderRegistry.all(t),l=yield Promise.all(r.map((o=>__awaiter(this,void 0,void 0,(function*(){const s=yield o.provideInlineCompletions(t,e,i,n);return{completions:s,provider:o,dispose:()=>{s&&o.freeInlineCompletions(s)}}}))))),a=new Map;for(const e of l){const i=e.completions;if(i)for(const n of i.items){const r=n.range?Range.lift(n.range):s;if(r.startLineNumber!==r.endLineNumber)continue;const l=o&&n.completeBracketPairs?closeBrackets(n.text,r.getStartPosition(),t,o):n.text,c={text:l,range:r,command:n.command,sourceProvider:e.provider,sourceInlineCompletions:i,sourceInlineCompletion:n};a.set(JSON.stringify({text:l,range:n.range}),c)}}return{items:[...a.values()],dispose:()=>{for(const e of l)e.dispose()}}}))}function closeBrackets(e,t,i,n){const o=i.getLineContent(t.lineNumber).substring(0,t.column-1),s=o+e,r=i.tokenizeLineWithEdit(t,s.length-(t.column-1),e),l=null===r||void 0===r?void 0:r.sliceAndInflate(t.column-1,s.length,0);if(!l)return e;console.log(l);const a=fixBracketsInLine(l,n);return a}export function minimizeInlineCompletion(e,t){if(!t)return t;const i=e.getValueInRange(t.range),n=commonPrefixLength(i,t.text),o=e.getOffsetAt(t.range.getStartPosition())+n,s=e.getPositionAt(o),r=i.substr(n),l=commonSuffixLength(r,t.text),a=e.getPositionAt(Math.max(o,e.getOffsetAt(t.range.getEndPosition())-l));return{range:Range.fromPositions(s,a),text:t.text.substr(n,t.text.length-n-l)}}