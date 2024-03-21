import{addDisposableListener,EventHelper,EventType,reset,trackFocus}from"../../dom.js";import{StandardKeyboardEvent}from"../../keyboardEvent.js";import{EventType as TouchEventType,Gesture}from"../../touch.js";import{renderLabelWithIcons}from"../iconLabel/iconLabels.js";import{Color}from"../../../common/color.js";import{Emitter}from"../../../common/event.js";import{Disposable}from"../../../common/lifecycle.js";import{mixin}from"../../../common/objects.js";import"./button.css";const defaultOptions={buttonBackground:Color.fromHex("#0E639C"),buttonHoverBackground:Color.fromHex("#006BB3"),buttonForeground:Color.white};export class Button extends Disposable{constructor(t,e){super(),this._onDidClick=this._register(new Emitter),this.options=e||Object.create(null),mixin(this.options,defaultOptions,!1),this.buttonForeground=this.options.buttonForeground,this.buttonBackground=this.options.buttonBackground,this.buttonHoverBackground=this.options.buttonHoverBackground,this.buttonSecondaryForeground=this.options.buttonSecondaryForeground,this.buttonSecondaryBackground=this.options.buttonSecondaryBackground,this.buttonSecondaryHoverBackground=this.options.buttonSecondaryHoverBackground,this.buttonBorder=this.options.buttonBorder,this._element=document.createElement("a"),this._element.classList.add("monaco-button"),this._element.tabIndex=0,this._element.setAttribute("role","button"),t.appendChild(this._element),this._register(Gesture.addTarget(this._element)),[EventType.CLICK,TouchEventType.Tap].forEach((t=>{this._register(addDisposableListener(this._element,t,(t=>{this.enabled?this._onDidClick.fire(t):EventHelper.stop(t)})))})),this._register(addDisposableListener(this._element,EventType.KEY_DOWN,(t=>{const e=new StandardKeyboardEvent(t);let o=!1;this.enabled&&(e.equals(3)||e.equals(10))?(this._onDidClick.fire(t),o=!0):e.equals(9)&&(this._element.blur(),o=!0),o&&EventHelper.stop(e,!0)}))),this._register(addDisposableListener(this._element,EventType.MOUSE_OVER,(t=>{this._element.classList.contains("disabled")||this.setHoverBackground()}))),this._register(addDisposableListener(this._element,EventType.MOUSE_OUT,(t=>{this.applyStyles()}))),this.focusTracker=this._register(trackFocus(this._element)),this._register(this.focusTracker.onDidFocus((()=>this.setHoverBackground()))),this._register(this.focusTracker.onDidBlur((()=>this.applyStyles()))),this.applyStyles()}get onDidClick(){return this._onDidClick.event}setHoverBackground(){let t;t=this.options.secondary?this.buttonSecondaryHoverBackground?this.buttonSecondaryHoverBackground.toString():null:this.buttonHoverBackground?this.buttonHoverBackground.toString():null,t&&(this._element.style.backgroundColor=t)}style(t){this.buttonForeground=t.buttonForeground,this.buttonBackground=t.buttonBackground,this.buttonHoverBackground=t.buttonHoverBackground,this.buttonSecondaryForeground=t.buttonSecondaryForeground,this.buttonSecondaryBackground=t.buttonSecondaryBackground,this.buttonSecondaryHoverBackground=t.buttonSecondaryHoverBackground,this.buttonBorder=t.buttonBorder,this.applyStyles()}applyStyles(){if(this._element){let t,e;this.options.secondary?(e=this.buttonSecondaryForeground?this.buttonSecondaryForeground.toString():"",t=this.buttonSecondaryBackground?this.buttonSecondaryBackground.toString():""):(e=this.buttonForeground?this.buttonForeground.toString():"",t=this.buttonBackground?this.buttonBackground.toString():"");const o=this.buttonBorder?this.buttonBorder.toString():"";this._element.style.color=e,this._element.style.backgroundColor=t,this._element.style.borderWidth=o?"1px":"",this._element.style.borderStyle=o?"solid":"",this._element.style.borderColor=o}}get element(){return this._element}set label(t){this._element.classList.add("monaco-text-button"),this.options.supportIcons?reset(this._element,...renderLabelWithIcons(t)):this._element.textContent=t,"string"===typeof this.options.title?this._element.title=this.options.title:this.options.title&&(this._element.title=t)}set enabled(t){t?(this._element.classList.remove("disabled"),this._element.setAttribute("aria-disabled",String(!1)),this._element.tabIndex=0):(this._element.classList.add("disabled"),this._element.setAttribute("aria-disabled",String(!0)))}get enabled(){return!this._element.classList.contains("disabled")}}