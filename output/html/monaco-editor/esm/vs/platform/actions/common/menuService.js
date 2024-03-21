var __decorate=this&&this.__decorate||function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},__param=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};import{RunOnceScheduler}from"../../../base/common/async.js";import{Emitter}from"../../../base/common/event.js";import{DisposableStore}from"../../../base/common/lifecycle.js";import{IMenuService,isIMenuItem,MenuItemAction,MenuRegistry,SubmenuItemAction}from"./actions.js";import{ICommandService}from"../../commands/common/commands.js";import{IContextKeyService}from"../../contextkey/common/contextkey.js";let MenuService=class{constructor(e){this._commandService=e}createMenu(e,t,n){return new Menu(e,Object.assign({emitEventsForSubmenuChanges:!1,eventDebounceDelay:50},n),this._commandService,t,this)}};MenuService=__decorate([__param(0,ICommandService)],MenuService);export{MenuService};let Menu=class e{constructor(e,t,n,o,i){this._id=e,this._options=t,this._commandService=n,this._contextKeyService=o,this._menuService=i,this._disposables=new DisposableStore,this._menuGroups=[],this._contextKeys=new Set,this._build();const s=new RunOnceScheduler((()=>{this._build(),this._onDidChange.fire(this)}),t.eventDebounceDelay);this._disposables.add(s),this._disposables.add(MenuRegistry.onDidChangeMenu((t=>{t.has(e)&&s.schedule()})));const r=this._disposables.add(new DisposableStore),c=()=>{const e=new RunOnceScheduler((()=>this._onDidChange.fire(this)),t.eventDebounceDelay);r.add(e),r.add(o.onDidChangeContext((t=>{t.affectsSome(this._contextKeys)&&e.schedule()})))};this._onDidChange=new Emitter({onFirstListenerAdd:c,onLastListenerRemove:r.clear.bind(r)}),this.onDidChange=this._onDidChange.event}dispose(){this._disposables.dispose(),this._onDidChange.dispose()}_build(){this._menuGroups.length=0,this._contextKeys.clear();const t=MenuRegistry.getMenuItems(this._id);let n;t.sort(e._compareMenuItems);for(const e of t){const t=e.group||"";n&&n[0]===t||(n=[t,[]],this._menuGroups.push(n)),n[1].push(e),this._collectContextKeys(e)}}_collectContextKeys(t){if(e._fillInKbExprKeys(t.when,this._contextKeys),isIMenuItem(t)){if(t.command.precondition&&e._fillInKbExprKeys(t.command.precondition,this._contextKeys),t.command.toggled){const n=t.command.toggled.condition||t.command.toggled;e._fillInKbExprKeys(n,this._contextKeys)}}else this._options.emitEventsForSubmenuChanges&&MenuRegistry.getMenuItems(t.submenu).forEach(this._collectContextKeys,this)}getActions(e){const t=[];for(let n of this._menuGroups){const[o,i]=n,s=[];for(const t of i)if(this._contextKeyService.contextMatchesRules(t.when)){const n=isIMenuItem(t)?new MenuItemAction(t.command,t.alt,e,this._contextKeyService,this._commandService):new SubmenuItemAction(t,this._menuService,this._contextKeyService,e);s.push(n)}s.length>0&&t.push([o,s])}return t}static _fillInKbExprKeys(e,t){if(e)for(let n of e.keys())t.add(n)}static _compareMenuItems(t,n){let o=t.group,i=n.group;if(o!==i){if(!o)return 1;if(!i)return-1;if("navigation"===o)return-1;if("navigation"===i)return 1;let e=o.localeCompare(i);if(0!==e)return e}let s=t.order||0,r=n.order||0;return s<r?-1:s>r?1:e._compareTitles(isIMenuItem(t)?t.command.title:t.title,isIMenuItem(n)?n.command.title:n.title)}static _compareTitles(e,t){const n="string"===typeof e?e:e.original,o="string"===typeof t?t:t.original;return n.localeCompare(o)}};Menu=__decorate([__param(2,ICommandService),__param(3,IContextKeyService),__param(4,IMenuService)],Menu);