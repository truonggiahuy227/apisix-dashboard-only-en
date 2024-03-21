import*as browser from"../../../base/browser/browser.js";import*as dom from"../../../base/browser/dom.js";import{StandardKeyboardEvent}from"../../../base/browser/keyboardEvent.js";import{RunOnceScheduler}from"../../../base/common/async.js";import{Emitter}from"../../../base/common/event.js";import{Disposable}from"../../../base/common/lifecycle.js";import{Mimes}from"../../../base/common/mime.js";import*as strings from"../../../base/common/strings.js";import{TextAreaState,_debugComposition}from"./textAreaState.js";import{Selection}from"../../common/core/selection.js";export var TextAreaSyntethicEvents;(function(t){t.Tap="-monaco-textarea-synthetic-tap"})(TextAreaSyntethicEvents||(TextAreaSyntethicEvents={}));export const CopyOptions={forceCopyWithSyntaxHighlighting:!1};export class InMemoryClipboardMetadataManager{constructor(){this._lastState=null}set(t,e){this._lastState={lastCopiedValue:t,data:e}}get(t){return this._lastState&&this._lastState.lastCopiedValue===t?this._lastState.data:(this._lastState=null,null)}}InMemoryClipboardMetadataManager.INSTANCE=new InMemoryClipboardMetadataManager;class CompositionContext{constructor(){this._lastTypeTextLength=0}handleCompositionUpdate(t){t=t||"";const e={text:t,replacePrevCharCnt:this._lastTypeTextLength,replaceNextCharCnt:0,positionDelta:0};return this._lastTypeTextLength=t.length,e}}export class TextAreaInput extends Disposable{constructor(t,e,i,s){super(),this._host=t,this._textArea=e,this._OS=i,this._browser=s,this._onFocus=this._register(new Emitter),this.onFocus=this._onFocus.event,this._onBlur=this._register(new Emitter),this.onBlur=this._onBlur.event,this._onKeyDown=this._register(new Emitter),this.onKeyDown=this._onKeyDown.event,this._onKeyUp=this._register(new Emitter),this.onKeyUp=this._onKeyUp.event,this._onCut=this._register(new Emitter),this.onCut=this._onCut.event,this._onPaste=this._register(new Emitter),this.onPaste=this._onPaste.event,this._onType=this._register(new Emitter),this.onType=this._onType.event,this._onCompositionStart=this._register(new Emitter),this.onCompositionStart=this._onCompositionStart.event,this._onCompositionUpdate=this._register(new Emitter),this.onCompositionUpdate=this._onCompositionUpdate.event,this._onCompositionEnd=this._register(new Emitter),this.onCompositionEnd=this._onCompositionEnd.event,this._onSelectionChangeRequest=this._register(new Emitter),this.onSelectionChangeRequest=this._onSelectionChangeRequest.event,this._asyncTriggerCut=this._register(new RunOnceScheduler((()=>this._onCut.fire()),0)),this._asyncFocusGainWriteScreenReaderContent=this._register(new RunOnceScheduler((()=>this.writeScreenReaderContent("asyncFocusGain")),0)),this._textAreaState=TextAreaState.EMPTY,this._selectionChangeListener=null,this.writeScreenReaderContent("ctor"),this._hasFocus=!1,this._currentComposition=null;let o=null;this._register(this._textArea.onKeyDown((t=>{const e=new StandardKeyboardEvent(t);(109===e.keyCode||this._currentComposition&&1===e.keyCode)&&e.stopPropagation(),e.equals(9)&&e.preventDefault(),o=e,this._onKeyDown.fire(e)}))),this._register(this._textArea.onKeyUp((t=>{const e=new StandardKeyboardEvent(t);this._onKeyUp.fire(e)}))),this._register(this._textArea.onCompositionStart((t=>{_debugComposition&&console.log("[compositionstart]",t);const e=new CompositionContext;if(this._currentComposition)this._currentComposition=e;else{if(this._currentComposition=e,2===this._OS&&o&&o.equals(109)&&this._textAreaState.selectionStart===this._textAreaState.selectionEnd&&this._textAreaState.selectionStart>0&&this._textAreaState.value.substr(this._textAreaState.selectionStart-1,1)===t.data&&("ArrowRight"===o.code||"ArrowLeft"===o.code))return _debugComposition&&console.log("[compositionstart] Handling long press case on macOS + arrow key",t),e.handleCompositionUpdate("x"),void this._onCompositionStart.fire({data:t.data});this._browser.isAndroid,this._onCompositionStart.fire({data:t.data})}}))),this._register(this._textArea.onCompositionUpdate((t=>{_debugComposition&&console.log("[compositionupdate]",t);const e=this._currentComposition;if(!e)return;if(this._browser.isAndroid){const e=TextAreaState.readFromTextArea(this._textArea),i=TextAreaState.deduceAndroidCompositionInput(this._textAreaState,e);return this._textAreaState=e,this._onType.fire(i),void this._onCompositionUpdate.fire(t)}const i=e.handleCompositionUpdate(t.data);this._textAreaState=TextAreaState.readFromTextArea(this._textArea),this._onType.fire(i),this._onCompositionUpdate.fire(t)}))),this._register(this._textArea.onCompositionEnd((t=>{_debugComposition&&console.log("[compositionend]",t);const e=this._currentComposition;if(!e)return;if(this._currentComposition=null,this._browser.isAndroid){const t=TextAreaState.readFromTextArea(this._textArea),e=TextAreaState.deduceAndroidCompositionInput(this._textAreaState,t);return this._textAreaState=t,this._onType.fire(e),void this._onCompositionEnd.fire()}const i=e.handleCompositionUpdate(t.data);this._textAreaState=TextAreaState.readFromTextArea(this._textArea),this._onType.fire(i),this._onCompositionEnd.fire()}))),this._register(this._textArea.onInput((t=>{if(_debugComposition&&console.log("[input]",t),this._textArea.setIgnoreSelectionChangeTime("received input event"),this._currentComposition)return;const e=TextAreaState.readFromTextArea(this._textArea),i=TextAreaState.deduceInput(this._textAreaState,e,2===this._OS);0===i.replacePrevCharCnt&&1===i.text.length&&strings.isHighSurrogate(i.text.charCodeAt(0))||(this._textAreaState=e,""===i.text&&0===i.replacePrevCharCnt&&0===i.replaceNextCharCnt&&0===i.positionDelta||this._onType.fire(i))}))),this._register(this._textArea.onCut((t=>{this._textArea.setIgnoreSelectionChangeTime("received cut event"),this._ensureClipboardGetsEditorSelection(t),this._asyncTriggerCut.schedule()}))),this._register(this._textArea.onCopy((t=>{this._ensureClipboardGetsEditorSelection(t)}))),this._register(this._textArea.onPaste((t=>{if(this._textArea.setIgnoreSelectionChangeTime("received paste event"),t.preventDefault(),!t.clipboardData)return;let[e,i]=ClipboardEventUtils.getTextData(t.clipboardData);e&&(i=i||InMemoryClipboardMetadataManager.INSTANCE.get(e),this._onPaste.fire({text:e,metadata:i}))}))),this._register(this._textArea.onFocus((()=>{const t=this._hasFocus;this._setHasFocus(!0),this._browser.isSafari&&!t&&this._hasFocus&&this._asyncFocusGainWriteScreenReaderContent.schedule()}))),this._register(this._textArea.onBlur((()=>{this._currentComposition&&(this._currentComposition=null,this.writeScreenReaderContent("blurWithoutCompositionEnd"),this._onCompositionEnd.fire()),this._setHasFocus(!1)}))),this._register(this._textArea.onSyntheticTap((()=>{this._browser.isAndroid&&this._currentComposition&&(this._currentComposition=null,this.writeScreenReaderContent("tapWithoutCompositionEnd"),this._onCompositionEnd.fire())})))}_installSelectionChangeListener(){let t=0;return dom.addDisposableListener(document,"selectionchange",(e=>{if(!this._hasFocus)return;if(this._currentComposition)return;if(!this._browser.isChrome)return;const i=Date.now(),s=i-t;if(t=i,s<5)return;const o=i-this._textArea.getIgnoreSelectionChangeTime();if(this._textArea.resetSelectionChangeTime(),o<100)return;if(!this._textAreaState.selectionStartPosition||!this._textAreaState.selectionEndPosition)return;const n=this._textArea.getValue();if(this._textAreaState.value!==n)return;const r=this._textArea.getSelectionStart(),a=this._textArea.getSelectionEnd();if(this._textAreaState.selectionStart===r&&this._textAreaState.selectionEnd===a)return;const h=this._textAreaState.deduceEditorPosition(r),c=this._host.deduceModelPosition(h[0],h[1],h[2]),l=this._textAreaState.deduceEditorPosition(a),_=this._host.deduceModelPosition(l[0],l[1],l[2]),u=new Selection(c.lineNumber,c.column,_.lineNumber,_.column);this._onSelectionChangeRequest.fire(u)}))}dispose(){super.dispose(),this._selectionChangeListener&&(this._selectionChangeListener.dispose(),this._selectionChangeListener=null)}focusTextArea(){this._setHasFocus(!0),this.refreshFocusState()}isFocused(){return this._hasFocus}refreshFocusState(){this._setHasFocus(this._textArea.hasFocus())}_setHasFocus(t){this._hasFocus!==t&&(this._hasFocus=t,this._selectionChangeListener&&(this._selectionChangeListener.dispose(),this._selectionChangeListener=null),this._hasFocus&&(this._selectionChangeListener=this._installSelectionChangeListener()),this._hasFocus&&this.writeScreenReaderContent("focusgain"),this._hasFocus?this._onFocus.fire():this._onBlur.fire())}_setAndWriteTextAreaState(t,e){this._hasFocus||(e=e.collapseSelection()),e.writeToTextArea(t,this._textArea,this._hasFocus),this._textAreaState=e}writeScreenReaderContent(t){this._currentComposition||this._setAndWriteTextAreaState(t,this._host.getScreenReaderContent(this._textAreaState))}_ensureClipboardGetsEditorSelection(t){const e=this._host.getDataToCopy(),i={version:1,isFromEmptySelection:e.isFromEmptySelection,multicursorText:e.multicursorText,mode:e.mode};InMemoryClipboardMetadataManager.INSTANCE.set(this._browser.isFirefox?e.text.replace(/\r\n/g,"\n"):e.text,i),t.preventDefault(),t.clipboardData&&ClipboardEventUtils.setTextData(t.clipboardData,e.text,e.html,i)}}class ClipboardEventUtils{static getTextData(t){const e=t.getData(Mimes.text);let i=null;const s=t.getData("vscode-editor-data");if("string"===typeof s)try{i=JSON.parse(s),1!==i.version&&(i=null)}catch(o){}return[e,i]}static setTextData(t,e,i,s){t.setData(Mimes.text,e),"string"===typeof i&&t.setData("text/html",i),t.setData("vscode-editor-data",JSON.stringify(s))}}export class TextAreaWrapper extends Disposable{constructor(t){super(),this._actual=t,this.onKeyDown=this._register(dom.createEventEmitter(this._actual,"keydown")).event,this.onKeyUp=this._register(dom.createEventEmitter(this._actual,"keyup")).event,this.onCompositionStart=this._register(dom.createEventEmitter(this._actual,"compositionstart")).event,this.onCompositionUpdate=this._register(dom.createEventEmitter(this._actual,"compositionupdate")).event,this.onCompositionEnd=this._register(dom.createEventEmitter(this._actual,"compositionend")).event,this.onInput=this._register(dom.createEventEmitter(this._actual,"input")).event,this.onCut=this._register(dom.createEventEmitter(this._actual,"cut")).event,this.onCopy=this._register(dom.createEventEmitter(this._actual,"copy")).event,this.onPaste=this._register(dom.createEventEmitter(this._actual,"paste")).event,this.onFocus=this._register(dom.createEventEmitter(this._actual,"focus")).event,this.onBlur=this._register(dom.createEventEmitter(this._actual,"blur")).event,this._onSyntheticTap=this._register(new Emitter),this.onSyntheticTap=this._onSyntheticTap.event,this._ignoreSelectionChangeTime=0,this._register(dom.addDisposableListener(this._actual,TextAreaSyntethicEvents.Tap,(()=>this._onSyntheticTap.fire())))}hasFocus(){const t=dom.getShadowRoot(this._actual);return t?t.activeElement===this._actual:!!dom.isInDOM(this._actual)&&document.activeElement===this._actual}setIgnoreSelectionChangeTime(t){this._ignoreSelectionChangeTime=Date.now()}getIgnoreSelectionChangeTime(){return this._ignoreSelectionChangeTime}resetSelectionChangeTime(){this._ignoreSelectionChangeTime=0}getValue(){return this._actual.value}setValue(t,e){const i=this._actual;i.value!==e&&(this.setIgnoreSelectionChangeTime("setValue"),i.value=e)}getSelectionStart(){return"backward"===this._actual.selectionDirection?this._actual.selectionEnd:this._actual.selectionStart}getSelectionEnd(){return"backward"===this._actual.selectionDirection?this._actual.selectionStart:this._actual.selectionEnd}setSelectionRange(t,e,i){const s=this._actual;let o=null;const n=dom.getShadowRoot(s);o=n?n.activeElement:document.activeElement;const r=o===s,a=s.selectionStart,h=s.selectionEnd;if(r&&a===e&&h===i)browser.isFirefox&&window.parent!==window&&s.focus();else{if(r)return this.setIgnoreSelectionChangeTime("setSelectionRange"),s.setSelectionRange(e,i),void(browser.isFirefox&&window.parent!==window&&s.focus());try{const t=dom.saveParentsScrollTop(s);this.setIgnoreSelectionChangeTime("setSelectionRange"),s.focus(),s.setSelectionRange(e,i),dom.restoreParentsScrollTop(s,t)}catch(c){}}}}