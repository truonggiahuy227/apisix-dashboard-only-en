import{PixelRatio}from"../../../../base/browser/browser.js";import*as dom from"../../../../base/browser/dom.js";import{GlobalMouseMoveMonitor,standardMouseMoveMerger}from"../../../../base/browser/globalMouseMoveMonitor.js";import{Widget}from"../../../../base/browser/ui/widget.js";import{Color,HSVA,RGBA}from"../../../../base/common/color.js";import{Emitter}from"../../../../base/common/event.js";import{Disposable}from"../../../../base/common/lifecycle.js";import"./colorPicker.css";import{localize}from"../../../../nls.js";import{editorHoverBackground}from"../../../../platform/theme/common/colorRegistry.js";import{registerThemingParticipant}from"../../../../platform/theme/common/themeService.js";const $=dom.$;export class ColorPickerHeader extends Disposable{constructor(o,t,i){super(),this.model=t,this.domNode=$(".colorpicker-header"),dom.append(o,this.domNode),this.pickedColorNode=dom.append(this.domNode,$(".picked-color"));const e=localize("clickToToggleColorOptions","Click to toggle color options (rgb/hsl/hex)");this.pickedColorNode.setAttribute("title",e);const s=dom.append(this.domNode,$(".original-color"));s.style.backgroundColor=Color.Format.CSS.format(this.model.originalColor)||"",this.backgroundColor=i.getColorTheme().getColor(editorHoverBackground)||Color.white,this._register(registerThemingParticipant(((o,t)=>{this.backgroundColor=o.getColor(editorHoverBackground)||Color.white}))),this._register(dom.addDisposableListener(this.pickedColorNode,dom.EventType.CLICK,(()=>this.model.selectNextColorPresentation()))),this._register(dom.addDisposableListener(s,dom.EventType.CLICK,(()=>{this.model.color=this.model.originalColor,this.model.flushColor()}))),this._register(t.onDidChangeColor(this.onDidChangeColor,this)),this._register(t.onDidChangePresentation(this.onDidChangePresentation,this)),this.pickedColorNode.style.backgroundColor=Color.Format.CSS.format(t.color)||"",this.pickedColorNode.classList.toggle("light",t.color.rgba.a<.5?this.backgroundColor.isLighter():t.color.isLighter()),this.onDidChangeColor(this.model.color)}onDidChangeColor(o){this.pickedColorNode.style.backgroundColor=Color.Format.CSS.format(o)||"",this.pickedColorNode.classList.toggle("light",o.rgba.a<.5?this.backgroundColor.isLighter():o.isLighter()),this.onDidChangePresentation()}onDidChangePresentation(){this.pickedColorNode.textContent=this.model.presentation?this.model.presentation.label:"",this.pickedColorNode.prepend($(".codicon.codicon-color-mode"))}}export class ColorPickerBody extends Disposable{constructor(o,t,i){super(),this.model=t,this.pixelRatio=i,this.domNode=$(".colorpicker-body"),dom.append(o,this.domNode),this.saturationBox=new SaturationBox(this.domNode,this.model,this.pixelRatio),this._register(this.saturationBox),this._register(this.saturationBox.onDidChange(this.onDidSaturationValueChange,this)),this._register(this.saturationBox.onColorFlushed(this.flushColor,this)),this.opacityStrip=new OpacityStrip(this.domNode,this.model),this._register(this.opacityStrip),this._register(this.opacityStrip.onDidChange(this.onDidOpacityChange,this)),this._register(this.opacityStrip.onColorFlushed(this.flushColor,this)),this.hueStrip=new HueStrip(this.domNode,this.model),this._register(this.hueStrip),this._register(this.hueStrip.onDidChange(this.onDidHueChange,this)),this._register(this.hueStrip.onColorFlushed(this.flushColor,this))}flushColor(){this.model.flushColor()}onDidSaturationValueChange({s:o,v:t}){const i=this.model.color.hsva;this.model.color=new Color(new HSVA(i.h,o,t,i.a))}onDidOpacityChange(o){const t=this.model.color.hsva;this.model.color=new Color(new HSVA(t.h,t.s,t.v,o))}onDidHueChange(o){const t=this.model.color.hsva,i=360*(1-o);this.model.color=new Color(new HSVA(360===i?0:i,t.s,t.v,t.a))}layout(){this.saturationBox.layout(),this.opacityStrip.layout(),this.hueStrip.layout()}}class SaturationBox extends Disposable{constructor(o,t,i){super(),this.model=t,this.pixelRatio=i,this._onDidChange=new Emitter,this.onDidChange=this._onDidChange.event,this._onColorFlushed=new Emitter,this.onColorFlushed=this._onColorFlushed.event,this.domNode=$(".saturation-wrap"),dom.append(o,this.domNode),this.canvas=document.createElement("canvas"),this.canvas.className="saturation-box",dom.append(this.domNode,this.canvas),this.selection=$(".saturation-selection"),dom.append(this.domNode,this.selection),this.layout(),this._register(dom.addDisposableGenericMouseDownListner(this.domNode,(o=>this.onMouseDown(o)))),this._register(this.model.onDidChangeColor(this.onDidChangeColor,this)),this.monitor=null}onMouseDown(o){this.monitor=this._register(new GlobalMouseMoveMonitor);const t=dom.getDomNodePagePosition(this.domNode);o.target!==this.selection&&this.onDidChangePosition(o.offsetX,o.offsetY),this.monitor.startMonitoring(o.target,o.buttons,standardMouseMoveMerger,(o=>this.onDidChangePosition(o.posx-t.left,o.posy-t.top)),(()=>null));const i=dom.addDisposableGenericMouseUpListner(document,(()=>{this._onColorFlushed.fire(),i.dispose(),this.monitor&&(this.monitor.stopMonitoring(!0),this.monitor=null)}),!0)}onDidChangePosition(o,t){const i=Math.max(0,Math.min(1,o/this.width)),e=Math.max(0,Math.min(1,1-t/this.height));this.paintSelection(i,e),this._onDidChange.fire({s:i,v:e})}layout(){this.width=this.domNode.offsetWidth,this.height=this.domNode.offsetHeight,this.canvas.width=this.width*this.pixelRatio,this.canvas.height=this.height*this.pixelRatio,this.paint();const o=this.model.color.hsva;this.paintSelection(o.s,o.v)}paint(){const o=this.model.color.hsva,t=new Color(new HSVA(o.h,1,1,1)),i=this.canvas.getContext("2d"),e=i.createLinearGradient(0,0,this.canvas.width,0);e.addColorStop(0,"rgba(255, 255, 255, 1)"),e.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),e.addColorStop(1,"rgba(255, 255, 255, 0)");const s=i.createLinearGradient(0,0,0,this.canvas.height);s.addColorStop(0,"rgba(0, 0, 0, 0)"),s.addColorStop(1,"rgba(0, 0, 0, 1)"),i.rect(0,0,this.canvas.width,this.canvas.height),i.fillStyle=Color.Format.CSS.format(t),i.fill(),i.fillStyle=e,i.fill(),i.fillStyle=s,i.fill()}paintSelection(o,t){this.selection.style.left=o*this.width+"px",this.selection.style.top=this.height-t*this.height+"px"}onDidChangeColor(){this.monitor&&this.monitor.isMonitoring()||this.paint()}}class Strip extends Disposable{constructor(o,t){super(),this.model=t,this._onDidChange=new Emitter,this.onDidChange=this._onDidChange.event,this._onColorFlushed=new Emitter,this.onColorFlushed=this._onColorFlushed.event,this.domNode=dom.append(o,$(".strip")),this.overlay=dom.append(this.domNode,$(".overlay")),this.slider=dom.append(this.domNode,$(".slider")),this.slider.style.top="0px",this._register(dom.addDisposableGenericMouseDownListner(this.domNode,(o=>this.onMouseDown(o)))),this.layout()}layout(){this.height=this.domNode.offsetHeight-this.slider.offsetHeight;const o=this.getValue(this.model.color);this.updateSliderPosition(o)}onMouseDown(o){const t=this._register(new GlobalMouseMoveMonitor),i=dom.getDomNodePagePosition(this.domNode);this.domNode.classList.add("grabbing"),o.target!==this.slider&&this.onDidChangeTop(o.offsetY),t.startMonitoring(o.target,o.buttons,standardMouseMoveMerger,(o=>this.onDidChangeTop(o.posy-i.top)),(()=>null));const e=dom.addDisposableGenericMouseUpListner(document,(()=>{this._onColorFlushed.fire(),e.dispose(),t.stopMonitoring(!0),this.domNode.classList.remove("grabbing")}),!0)}onDidChangeTop(o){const t=Math.max(0,Math.min(1,1-o/this.height));this.updateSliderPosition(t),this._onDidChange.fire(t)}updateSliderPosition(o){this.slider.style.top=(1-o)*this.height+"px"}}class OpacityStrip extends Strip{constructor(o,t){super(o,t),this.domNode.classList.add("opacity-strip"),this._register(t.onDidChangeColor(this.onDidChangeColor,this)),this.onDidChangeColor(this.model.color)}onDidChangeColor(o){const{r:t,g:i,b:e}=o.rgba,s=new Color(new RGBA(t,i,e,1)),r=new Color(new RGBA(t,i,e,0));this.overlay.style.background=`linear-gradient(to bottom, ${s} 0%, ${r} 100%)`}getValue(o){return o.hsva.a}}class HueStrip extends Strip{constructor(o,t){super(o,t),this.domNode.classList.add("hue-strip")}getValue(o){return 1-o.hsva.h/360}}export class ColorPickerWidget extends Widget{constructor(o,t,i,e){super(),this.model=t,this.pixelRatio=i,this._register(PixelRatio.onDidChange((()=>this.layout())));const s=$(".colorpicker-widget");o.appendChild(s);const r=new ColorPickerHeader(s,this.model,e);this.body=new ColorPickerBody(s,this.model,this.pixelRatio),this._register(r),this._register(this.body)}layout(){this.body.layout()}}