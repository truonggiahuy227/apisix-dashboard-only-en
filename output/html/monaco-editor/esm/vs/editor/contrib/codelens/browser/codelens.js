var __awaiter=this&&this.__awaiter||function(e,o,s,r){function n(e){return e instanceof s?e:new s((function(o){o(e)}))}return new(s||(s=Promise))((function(s,t){function i(e){try{l(r.next(e))}catch(o){t(o)}}function a(e){try{l(r["throw"](e))}catch(o){t(o)}}function l(e){e.done?s(e.value):n(e.value).then(i,a)}l((r=r.apply(e,o||[])).next())}))};import{CancellationToken}from"../../../../base/common/cancellation.js";import{illegalArgument,onUnexpectedExternalError}from"../../../../base/common/errors.js";import{DisposableStore}from"../../../../base/common/lifecycle.js";import{assertType}from"../../../../base/common/types.js";import{URI}from"../../../../base/common/uri.js";import{CodeLensProviderRegistry}from"../../../common/languages.js";import{IModelService}from"../../../common/services/model.js";import{CommandsRegistry}from"../../../../platform/commands/common/commands.js";export class CodeLensModel{constructor(){this.lenses=[],this._disposables=new DisposableStore}dispose(){this._disposables.dispose()}get isDisposed(){return this._disposables.isDisposed}add(e,o){this._disposables.add(e);for(const s of e.lenses)this.lenses.push({symbol:s,provider:o})}}export function getCodeLensModel(e,o){return __awaiter(this,void 0,void 0,(function*(){const s=CodeLensProviderRegistry.ordered(e),r=new Map,n=new CodeLensModel,t=s.map(((s,t)=>__awaiter(this,void 0,void 0,(function*(){r.set(s,t);try{const r=yield Promise.resolve(s.provideCodeLenses(e,o));r&&n.add(r,s)}catch(i){onUnexpectedExternalError(i)}}))));return yield Promise.all(t),n.lenses=n.lenses.sort(((e,o)=>e.symbol.range.startLineNumber<o.symbol.range.startLineNumber?-1:e.symbol.range.startLineNumber>o.symbol.range.startLineNumber?1:r.get(e.provider)<r.get(o.provider)?-1:r.get(e.provider)>r.get(o.provider)?1:e.symbol.range.startColumn<o.symbol.range.startColumn?-1:e.symbol.range.startColumn>o.symbol.range.startColumn?1:0)),n}))}CommandsRegistry.registerCommand("_executeCodeLensProvider",(function(e,...o){let[s,r]=o;assertType(URI.isUri(s)),assertType("number"===typeof r||!r);const n=e.get(IModelService).getModel(s);if(!n)throw illegalArgument();const t=[],i=new DisposableStore;return getCodeLensModel(n,CancellationToken.None).then((e=>{i.add(e);let o=[];for(const s of e.lenses)void 0===r||null===r||Boolean(s.symbol.command)?t.push(s.symbol):r-- >0&&s.provider.resolveCodeLens&&o.push(Promise.resolve(s.provider.resolveCodeLens(n,s.symbol,CancellationToken.None)).then((e=>t.push(e||s.symbol))));return Promise.all(o)})).then((()=>t)).finally((()=>{setTimeout((()=>i.dispose()),100)}))}));