var __decorate=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var m=e.length-1;m>=0;m--)(i=e[m])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},__param=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};import{ModifierKeyEmitter}from"../../../base/browser/dom.js";import{Emitter}from"../../../base/common/event.js";import{Disposable}from"../../../base/common/lifecycle.js";import{IKeybindingService}from"../../keybinding/common/keybinding.js";import{INotificationService}from"../../notification/common/notification.js";import{ITelemetryService}from"../../telemetry/common/telemetry.js";import{IThemeService}from"../../theme/common/themeService.js";import{ContextMenuHandler}from"./contextMenuHandler.js";import{IContextViewService}from"./contextView.js";let ContextMenuService=class extends Disposable{constructor(e,t,n,o,i){super(),this._onDidShowContextMenu=new Emitter,this._onDidHideContextMenu=new Emitter,this.contextMenuHandler=new ContextMenuHandler(n,e,t,o,i)}configure(e){this.contextMenuHandler.configure(e)}showContextMenu(e){this.contextMenuHandler.showContextMenu(Object.assign(Object.assign({},e),{onHide:t=>{e.onHide&&e.onHide(t),this._onDidHideContextMenu.fire()}})),ModifierKeyEmitter.getInstance().resetKeyStatus(),this._onDidShowContextMenu.fire()}};ContextMenuService=__decorate([__param(0,ITelemetryService),__param(1,INotificationService),__param(2,IContextViewService),__param(3,IKeybindingService),__param(4,IThemeService)],ContextMenuService);export{ContextMenuService};