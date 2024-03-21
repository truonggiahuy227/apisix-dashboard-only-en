var ParameterHintState,__awaiter=this&&this.__awaiter||function(t,e,i,r){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function a(t){try{o(r.next(t))}catch(e){n(e)}}function g(t){try{o(r["throw"](t))}catch(e){n(e)}}function o(t){t.done?i(t.value):s(t.value).then(a,g)}o((r=r.apply(t,e||[])).next())}))};import{createCancelablePromise,Delayer}from"../../../../base/common/async.js";import{onUnexpectedError}from"../../../../base/common/errors.js";import{Emitter}from"../../../../base/common/event.js";import{Disposable,MutableDisposable}from"../../../../base/common/lifecycle.js";import{CharacterSet}from"../../../common/core/characterClassifier.js";import*as modes from"../../../common/languages.js";import{provideSignatureHelp}from"./provideSignatureHelp.js";(function(t){t.Default={type:0};class e{constructor(t,e){this.request=t,this.previouslyActiveHints=e,this.type=2}}t.Pending=e;class i{constructor(t){this.hints=t,this.type=1}}t.Active=i})(ParameterHintState||(ParameterHintState={}));export class ParameterHintsModel extends Disposable{constructor(t,e=ParameterHintsModel.DEFAULT_DELAY){super(),this._onChangedHints=this._register(new Emitter),this.onChangedHints=this._onChangedHints.event,this.triggerOnType=!1,this._state=ParameterHintState.Default,this._pendingTriggers=[],this._lastSignatureHelpResult=this._register(new MutableDisposable),this.triggerChars=new CharacterSet,this.retriggerChars=new CharacterSet,this.triggerId=0,this.editor=t,this.throttledDelayer=new Delayer(e),this._register(this.editor.onDidBlurEditorWidget((()=>this.cancel()))),this._register(this.editor.onDidChangeConfiguration((()=>this.onEditorConfigurationChange()))),this._register(this.editor.onDidChangeModel((t=>this.onModelChanged()))),this._register(this.editor.onDidChangeModelLanguage((t=>this.onModelChanged()))),this._register(this.editor.onDidChangeCursorSelection((t=>this.onCursorChange(t)))),this._register(this.editor.onDidChangeModelContent((t=>this.onModelContentChange()))),this._register(modes.SignatureHelpProviderRegistry.onDidChange(this.onModelChanged,this)),this._register(this.editor.onDidType((t=>this.onDidType(t)))),this.onEditorConfigurationChange(),this.onModelChanged()}get state(){return this._state}set state(t){2===this._state.type&&this._state.request.cancel(),this._state=t}cancel(t=!1){this.state=ParameterHintState.Default,this.throttledDelayer.cancel(),t||this._onChangedHints.fire(void 0)}trigger(t,e){const i=this.editor.getModel();if(!i||!modes.SignatureHelpProviderRegistry.has(i))return;const r=++this.triggerId;this._pendingTriggers.push(t),this.throttledDelayer.trigger((()=>this.doTrigger(r)),e).catch(onUnexpectedError)}next(){if(1!==this.state.type)return;const t=this.state.hints.signatures.length,e=this.state.hints.activeSignature,i=e%t===t-1,r=this.editor.getOption(76).cycle;!(t<2||i)||r?this.updateActiveSignature(i&&r?0:e+1):this.cancel()}previous(){if(1!==this.state.type)return;const t=this.state.hints.signatures.length,e=this.state.hints.activeSignature,i=0===e,r=this.editor.getOption(76).cycle;!(t<2||i)||r?this.updateActiveSignature(i&&r?t-1:e-1):this.cancel()}updateActiveSignature(t){1===this.state.type&&(this.state=new ParameterHintState.Active(Object.assign(Object.assign({},this.state.hints),{activeSignature:t})),this._onChangedHints.fire(this.state.hints))}doTrigger(t){return __awaiter(this,void 0,void 0,(function*(){const e=1===this.state.type||2===this.state.type,i=this.getLastActiveHints();if(this.cancel(!0),0===this._pendingTriggers.length)return!1;const r=this._pendingTriggers.reduce(mergeTriggerContexts);this._pendingTriggers=[];const s={triggerKind:r.triggerKind,triggerCharacter:r.triggerCharacter,isRetrigger:e,activeSignatureHelp:i};if(!this.editor.hasModel())return!1;const n=this.editor.getModel(),a=this.editor.getPosition();this.state=new ParameterHintState.Pending(createCancelablePromise((t=>provideSignatureHelp(n,a,s,t))),i);try{const e=yield this.state.request;return t!==this.triggerId?(null===e||void 0===e||e.dispose(),!1):e&&e.value.signatures&&0!==e.value.signatures.length?(this.state=new ParameterHintState.Active(e.value),this._lastSignatureHelpResult.value=e,this._onChangedHints.fire(this.state.hints),!0):(null===e||void 0===e||e.dispose(),this._lastSignatureHelpResult.clear(),this.cancel(),!1)}catch(g){return t===this.triggerId&&(this.state=ParameterHintState.Default),onUnexpectedError(g),!1}}))}getLastActiveHints(){switch(this.state.type){case 1:return this.state.hints;case 2:return this.state.previouslyActiveHints;default:return}}get isTriggered(){return 1===this.state.type||2===this.state.type||this.throttledDelayer.isTriggered()}onModelChanged(){this.cancel(),this.triggerChars=new CharacterSet,this.retriggerChars=new CharacterSet;const t=this.editor.getModel();if(t)for(const e of modes.SignatureHelpProviderRegistry.ordered(t)){for(const t of e.signatureHelpTriggerCharacters||[])this.triggerChars.add(t.charCodeAt(0)),this.retriggerChars.add(t.charCodeAt(0));for(const t of e.signatureHelpRetriggerCharacters||[])this.retriggerChars.add(t.charCodeAt(0))}}onDidType(t){if(!this.triggerOnType)return;const e=t.length-1,i=t.charCodeAt(e);(this.triggerChars.has(i)||this.isTriggered&&this.retriggerChars.has(i))&&this.trigger({triggerKind:modes.SignatureHelpTriggerKind.TriggerCharacter,triggerCharacter:t.charAt(e)})}onCursorChange(t){"mouse"===t.source?this.cancel():this.isTriggered&&this.trigger({triggerKind:modes.SignatureHelpTriggerKind.ContentChange})}onModelContentChange(){this.isTriggered&&this.trigger({triggerKind:modes.SignatureHelpTriggerKind.ContentChange})}onEditorConfigurationChange(){this.triggerOnType=this.editor.getOption(76).enabled,this.triggerOnType||this.cancel()}dispose(){this.cancel(!0),super.dispose()}}function mergeTriggerContexts(t,e){switch(e.triggerKind){case modes.SignatureHelpTriggerKind.Invoke:return e;case modes.SignatureHelpTriggerKind.ContentChange:return t;case modes.SignatureHelpTriggerKind.TriggerCharacter:default:return e}}ParameterHintsModel.DEFAULT_DELAY=120;