import*as dom from"../../dom.js";import{DomEmitter}from"../../event.js";import{renderFormattedText,renderText}from"../../formattedTextRenderer.js";import{ActionBar}from"../actionbar/actionbar.js";import*as aria from"../aria/aria.js";import{ScrollableElement}from"../scrollbar/scrollableElement.js";import{Widget}from"../widget.js";import{Color}from"../../../common/color.js";import{Emitter,Event}from"../../../common/event.js";import{HistoryNavigator}from"../../../common/history.js";import{mixin}from"../../../common/objects.js";import"./inputBox.css";import*as nls from"../../../../nls.js";const $=dom.$,defaultOpts={inputBackground:Color.fromHex("#3C3C3C"),inputForeground:Color.fromHex("#CCCCCC"),inputValidationInfoBorder:Color.fromHex("#55AAFF"),inputValidationInfoBackground:Color.fromHex("#063B49"),inputValidationWarningBorder:Color.fromHex("#B89500"),inputValidationWarningBackground:Color.fromHex("#352A05"),inputValidationErrorBorder:Color.fromHex("#BE1100"),inputValidationErrorBackground:Color.fromHex("#5A1D1D")};export class InputBox extends Widget{constructor(t,i,e){var s;super(),this.state="idle",this.maxHeight=Number.POSITIVE_INFINITY,this._onDidChange=this._register(new Emitter),this.onDidChange=this._onDidChange.event,this._onDidHeightChange=this._register(new Emitter),this.onDidHeightChange=this._onDidHeightChange.event,this.contextViewProvider=i,this.options=e||Object.create(null),mixin(this.options,defaultOpts,!1),this.message=null,this.placeholder=this.options.placeholder||"",this.tooltip=null!==(s=this.options.tooltip)&&void 0!==s?s:this.placeholder||"",this.ariaLabel=this.options.ariaLabel||"",this.inputBackground=this.options.inputBackground,this.inputForeground=this.options.inputForeground,this.inputBorder=this.options.inputBorder,this.inputValidationInfoBorder=this.options.inputValidationInfoBorder,this.inputValidationInfoBackground=this.options.inputValidationInfoBackground,this.inputValidationInfoForeground=this.options.inputValidationInfoForeground,this.inputValidationWarningBorder=this.options.inputValidationWarningBorder,this.inputValidationWarningBackground=this.options.inputValidationWarningBackground,this.inputValidationWarningForeground=this.options.inputValidationWarningForeground,this.inputValidationErrorBorder=this.options.inputValidationErrorBorder,this.inputValidationErrorBackground=this.options.inputValidationErrorBackground,this.inputValidationErrorForeground=this.options.inputValidationErrorForeground,this.options.validationOptions&&(this.validation=this.options.validationOptions.validation),this.element=dom.append(t,$(".monaco-inputbox.idle"));let o=this.options.flexibleHeight?"textarea":"input",r=dom.append(this.element,$(".ibwrapper"));if(this.input=dom.append(r,$(o+".input.empty")),this.input.setAttribute("autocorrect","off"),this.input.setAttribute("autocapitalize","off"),this.input.setAttribute("spellcheck","false"),this.onfocus(this.input,(()=>this.element.classList.add("synthetic-focus"))),this.onblur(this.input,(()=>this.element.classList.remove("synthetic-focus"))),this.options.flexibleHeight){this.maxHeight="number"===typeof this.options.flexibleMaxHeight?this.options.flexibleMaxHeight:Number.POSITIVE_INFINITY,this.mirror=dom.append(r,$("div.mirror")),this.mirror.innerText="\xa0",this.scrollableElement=new ScrollableElement(this.element,{vertical:1}),this.options.flexibleWidth&&(this.input.setAttribute("wrap","off"),this.mirror.style.whiteSpace="pre",this.mirror.style.wordWrap="initial"),dom.append(t,this.scrollableElement.getDomNode()),this._register(this.scrollableElement),this._register(this.scrollableElement.onScroll((t=>this.input.scrollTop=t.scrollTop)));const i=this._register(new DomEmitter(document,"selectionchange")),e=Event.filter(i.event,(()=>{const t=document.getSelection();return(null===t||void 0===t?void 0:t.anchorNode)===r}));this._register(e(this.updateScrollDimensions,this)),this._register(this.onDidHeightChange(this.updateScrollDimensions,this))}else this.input.type=this.options.type||"text",this.input.setAttribute("wrap","off");this.ariaLabel&&this.input.setAttribute("aria-label",this.ariaLabel),this.placeholder&&!this.options.showPlaceholderOnFocus&&this.setPlaceHolder(this.placeholder),this.tooltip&&this.setTooltip(this.tooltip),this.oninput(this.input,(()=>this.onValueChange())),this.onblur(this.input,(()=>this.onBlur())),this.onfocus(this.input,(()=>this.onFocus())),this.ignoreGesture(this.input),setTimeout((()=>this.updateMirror()),0),this.options.actions&&(this.actionbar=this._register(new ActionBar(this.element)),this.actionbar.push(this.options.actions,{icon:!0,label:!1})),this.applyStyles()}onBlur(){this._hideMessage(),this.options.showPlaceholderOnFocus&&this.input.setAttribute("placeholder","")}onFocus(){this._showMessage(),this.options.showPlaceholderOnFocus&&this.input.setAttribute("placeholder",this.placeholder||"")}setPlaceHolder(t){this.placeholder=t,this.input.setAttribute("placeholder",t)}setTooltip(t){this.tooltip=t,this.input.title=t}setAriaLabel(t){this.ariaLabel=t,t?this.input.setAttribute("aria-label",this.ariaLabel):this.input.removeAttribute("aria-label")}getAriaLabel(){return this.ariaLabel}get inputElement(){return this.input}get value(){return this.input.value}set value(t){this.input.value!==t&&(this.input.value=t,this.onValueChange())}get height(){return"number"===typeof this.cachedHeight?this.cachedHeight:dom.getTotalHeight(this.element)}focus(){this.input.focus()}blur(){this.input.blur()}hasFocus(){return document.activeElement===this.input}select(t=null){this.input.select(),t&&(this.input.setSelectionRange(t.start,t.end),t.end===this.input.value.length&&(this.input.scrollLeft=this.input.scrollWidth))}isSelectionAtEnd(){return this.input.selectionEnd===this.input.value.length&&this.input.selectionStart===this.input.selectionEnd}enable(){this.input.removeAttribute("disabled")}disable(){this.blur(),this.input.disabled=!0,this._hideMessage()}get width(){return dom.getTotalWidth(this.input)}set width(t){if(this.options.flexibleHeight&&this.options.flexibleWidth){let i=0;if(this.mirror){const t=parseFloat(this.mirror.style.paddingLeft||"")||0,e=parseFloat(this.mirror.style.paddingRight||"")||0;i=t+e}this.input.style.width=t-i+"px"}else this.input.style.width=t+"px";this.mirror&&(this.mirror.style.width=t+"px")}set paddingRight(t){this.input.style.width=`calc(100% - ${t}px)`,this.mirror&&(this.mirror.style.paddingRight=t+"px")}updateScrollDimensions(){if("number"!==typeof this.cachedContentHeight||"number"!==typeof this.cachedHeight||!this.scrollableElement)return;const t=this.cachedContentHeight,i=this.cachedHeight,e=this.input.scrollTop;this.scrollableElement.setScrollDimensions({scrollHeight:t,height:i}),this.scrollableElement.setScrollPosition({scrollTop:e})}showMessage(t,i){this.message=t,this.element.classList.remove("idle"),this.element.classList.remove("info"),this.element.classList.remove("warning"),this.element.classList.remove("error"),this.element.classList.add(this.classForType(t.type));const e=this.stylesForType(this.message.type);this.element.style.border=e.border?`1px solid ${e.border}`:"",(this.hasFocus()||i)&&this._showMessage()}hideMessage(){this.message=null,this.element.classList.remove("info"),this.element.classList.remove("warning"),this.element.classList.remove("error"),this.element.classList.add("idle"),this._hideMessage(),this.applyStyles()}validate(){let t=null;return this.validation&&(t=this.validation(this.value),t?(this.inputElement.setAttribute("aria-invalid","true"),this.showMessage(t)):this.inputElement.hasAttribute("aria-invalid")&&(this.inputElement.removeAttribute("aria-invalid"),this.hideMessage())),null===t||void 0===t?void 0:t.type}stylesForType(t){switch(t){case 1:return{border:this.inputValidationInfoBorder,background:this.inputValidationInfoBackground,foreground:this.inputValidationInfoForeground};case 2:return{border:this.inputValidationWarningBorder,background:this.inputValidationWarningBackground,foreground:this.inputValidationWarningForeground};default:return{border:this.inputValidationErrorBorder,background:this.inputValidationErrorBackground,foreground:this.inputValidationErrorForeground}}}classForType(t){switch(t){case 1:return"info";case 2:return"warning";default:return"error"}}_showMessage(){if(!this.contextViewProvider||!this.message)return;let t,i,e=()=>t.style.width=dom.getTotalWidth(this.element)+"px";this.contextViewProvider.showContextView({getAnchor:()=>this.element,anchorAlignment:1,render:i=>{if(!this.message)return null;t=dom.append(i,$(".monaco-inputbox-container")),e();const s={inline:!0,className:"monaco-inputbox-message"},o=this.message.formatContent?renderFormattedText(this.message.content,s):renderText(this.message.content,s);o.classList.add(this.classForType(this.message.type));const r=this.stylesForType(this.message.type);return o.style.backgroundColor=r.background?r.background.toString():"",o.style.color=r.foreground?r.foreground.toString():"",o.style.border=r.border?`1px solid ${r.border}`:"",dom.append(t,o),null},onHide:()=>{this.state="closed"},layout:e}),i=3===this.message.type?nls.localize("alertErrorMessage","Error: {0}",this.message.content):2===this.message.type?nls.localize("alertWarningMessage","Warning: {0}",this.message.content):nls.localize("alertInfoMessage","Info: {0}",this.message.content),aria.alert(i),this.state="open"}_hideMessage(){this.contextViewProvider&&("open"===this.state&&this.contextViewProvider.hideContextView(),this.state="idle")}onValueChange(){this._onDidChange.fire(this.value),this.validate(),this.updateMirror(),this.input.classList.toggle("empty",!this.value),"open"===this.state&&this.contextViewProvider&&this.contextViewProvider.layout()}updateMirror(){if(!this.mirror)return;const t=this.value,i=t.charCodeAt(t.length-1),e=10===i?" ":"",s=(t+e).replace(/\u000c/g,"");s?this.mirror.textContent=t+e:this.mirror.innerText="\xa0",this.layout()}style(t){this.inputBackground=t.inputBackground,this.inputForeground=t.inputForeground,this.inputBorder=t.inputBorder,this.inputValidationInfoBackground=t.inputValidationInfoBackground,this.inputValidationInfoForeground=t.inputValidationInfoForeground,this.inputValidationInfoBorder=t.inputValidationInfoBorder,this.inputValidationWarningBackground=t.inputValidationWarningBackground,this.inputValidationWarningForeground=t.inputValidationWarningForeground,this.inputValidationWarningBorder=t.inputValidationWarningBorder,this.inputValidationErrorBackground=t.inputValidationErrorBackground,this.inputValidationErrorForeground=t.inputValidationErrorForeground,this.inputValidationErrorBorder=t.inputValidationErrorBorder,this.applyStyles()}applyStyles(){const t=this.inputBackground?this.inputBackground.toString():"",i=this.inputForeground?this.inputForeground.toString():"",e=this.inputBorder?this.inputBorder.toString():"";this.element.style.backgroundColor=t,this.element.style.color=i,this.input.style.backgroundColor="inherit",this.input.style.color=i,this.element.style.borderWidth=e?"1px":"",this.element.style.borderStyle=e?"solid":"",this.element.style.borderColor=e}layout(){if(!this.mirror)return;const t=this.cachedContentHeight;this.cachedContentHeight=dom.getTotalHeight(this.mirror),t!==this.cachedContentHeight&&(this.cachedHeight=Math.min(this.cachedContentHeight,this.maxHeight),this.input.style.height=this.cachedHeight+"px",this._onDidHeightChange.fire(this.cachedContentHeight))}insertAtCursor(t){const i=this.inputElement,e=i.selectionStart,s=i.selectionEnd,o=i.value;null!==e&&null!==s&&(this.value=o.substr(0,e)+t+o.substr(s),i.setSelectionRange(e+1,e+1),this.layout())}dispose(){this._hideMessage(),this.message=null,this.actionbar&&this.actionbar.dispose(),super.dispose()}}export class HistoryInputBox extends InputBox{constructor(t,i,e){const s=nls.localize({key:"history.inputbox.hint",comment:["Text will be prefixed with \u21c5 plus a single space, then used as a hint where input field keeps history"]},"for history"),o=` or \u21c5 ${s}`,r=` (\u21c5 ${s})`;super(t,i,e),this.history=new HistoryNavigator(e.history,100);const n=()=>{if(e.showHistoryHint&&e.showHistoryHint()&&!this.placeholder.endsWith(o)&&!this.placeholder.endsWith(r)&&this.history.getHistory().length){const t=this.placeholder.endsWith(")")?o:r,i=this.placeholder+t;e.showPlaceholderOnFocus&&document.activeElement!==this.input?this.placeholder=i:this.setPlaceHolder(i)}};this.observer=new MutationObserver(((t,i)=>{t.forEach((t=>{t.target.textContent||n()}))})),this.observer.observe(this.input,{attributeFilter:["class"]}),this.onfocus(this.input,(()=>n())),this.onblur(this.input,(()=>{const t=t=>{if(this.placeholder.endsWith(t)){const i=this.placeholder.slice(0,this.placeholder.length-t.length);return e.showPlaceholderOnFocus?this.placeholder=i:this.setPlaceHolder(i),!0}return!1};t(r)||t(o)}))}dispose(){super.dispose(),this.observer&&(this.observer.disconnect(),this.observer=void 0)}addToHistory(){this.value&&this.value!==this.getCurrentValue()&&this.history.add(this.value)}showNextValue(){this.history.has(this.value)||this.addToHistory();let t=this.getNextValue();t&&(t=t===this.value?this.getNextValue():t),t&&(this.value=t,aria.status(this.value))}showPreviousValue(){this.history.has(this.value)||this.addToHistory();let t=this.getPreviousValue();t&&(t=t===this.value?this.getPreviousValue():t),t&&(this.value=t,aria.status(this.value))}getCurrentValue(){let t=this.history.current();return t||(t=this.history.last(),this.history.next()),t}getPreviousValue(){return this.history.previous()||this.history.first()}getNextValue(){return this.history.next()||this.history.last()}}