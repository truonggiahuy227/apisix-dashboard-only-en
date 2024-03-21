var __awaiter=this&&this.__awaiter||function(t,e,i,s){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function r(t){try{h(s.next(t))}catch(e){o(e)}}function a(t){try{h(s["throw"](t))}catch(e){o(e)}}function h(t){t.done?i(t.value):n(t.value).then(r,a)}h((s=s.apply(t,e||[])).next())}))};import{Emitter}from"./event.js";import{Disposable}from"./lifecycle.js";import*as nls from"../../nls.js";export class Action extends Disposable{constructor(t,e="",i="",s=!0,n){super(),this._onDidChange=this._register(new Emitter),this.onDidChange=this._onDidChange.event,this._enabled=!0,this._id=t,this._label=e,this._cssClass=i,this._enabled=s,this._actionCallback=n}get id(){return this._id}get label(){return this._label}set label(t){this._setLabel(t)}_setLabel(t){this._label!==t&&(this._label=t,this._onDidChange.fire({label:t}))}get tooltip(){return this._tooltip||""}set tooltip(t){this._setTooltip(t)}_setTooltip(t){this._tooltip!==t&&(this._tooltip=t,this._onDidChange.fire({tooltip:t}))}get class(){return this._cssClass}set class(t){this._setClass(t)}_setClass(t){this._cssClass!==t&&(this._cssClass=t,this._onDidChange.fire({class:t}))}get enabled(){return this._enabled}set enabled(t){this._setEnabled(t)}_setEnabled(t){this._enabled!==t&&(this._enabled=t,this._onDidChange.fire({enabled:t}))}get checked(){return this._checked}set checked(t){this._setChecked(t)}_setChecked(t){this._checked!==t&&(this._checked=t,this._onDidChange.fire({checked:t}))}run(t,e){return __awaiter(this,void 0,void 0,(function*(){this._actionCallback&&(yield this._actionCallback(t))}))}}export class ActionRunner extends Disposable{constructor(){super(...arguments),this._onBeforeRun=this._register(new Emitter),this.onBeforeRun=this._onBeforeRun.event,this._onDidRun=this._register(new Emitter),this.onDidRun=this._onDidRun.event}run(t,e){return __awaiter(this,void 0,void 0,(function*(){if(!t.enabled)return;let i;this._onBeforeRun.fire({action:t});try{yield this.runAction(t,e)}catch(s){i=s}this._onDidRun.fire({action:t,error:i})}))}runAction(t,e){return __awaiter(this,void 0,void 0,(function*(){yield t.run(e)}))}}export class Separator extends Action{constructor(t){super(Separator.ID,t,t?"separator text":"separator"),this.checked=!1,this.enabled=!1}}Separator.ID="vs.actions.separator";export class SubmenuAction{constructor(t,e,i,s){this.tooltip="",this.enabled=!0,this.checked=void 0,this.id=t,this.label=e,this.class=s,this._actions=i}get actions(){return this._actions}dispose(){}run(){return __awaiter(this,void 0,void 0,(function*(){}))}}export class EmptySubmenuAction extends Action{constructor(){super(EmptySubmenuAction.ID,nls.localize("submenu.empty","(empty)"),void 0,!1)}}EmptySubmenuAction.ID="vs.actions.empty";