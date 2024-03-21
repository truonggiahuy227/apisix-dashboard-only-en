var __decorate=this&&this.__decorate||function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},__param=this&&this.__param||function(t,e){return function(i,o){e(i,o,t)}};import*as browser from"../../../base/browser/browser.js";import*as arrays from"../../../base/common/arrays.js";import{Emitter}from"../../../base/common/event.js";import{Disposable}from"../../../base/common/lifecycle.js";import*as objects from"../../../base/common/objects.js";import*as platform from"../../../base/common/platform.js";import{ElementSizeObserver}from"./elementSizeObserver.js";import{FontMeasurements}from"./fontMeasurements.js";import{migrateOptions}from"./migrateOptions.js";import{TabFocus}from"./tabFocus.js";import{ComputeOptionsMemory,ConfigurationChangedEvent,editorOptionsRegistry}from"../../common/config/editorOptions.js";import{EditorZoom}from"../../common/config/editorZoom.js";import{BareFontInfo}from"../../common/config/fontInfo.js";import{IAccessibilityService}from"../../../platform/accessibility/common/accessibility.js";let EditorConfiguration=class extends Disposable{constructor(t,e,i,o){super(),this._accessibilityService=o,this._onDidChange=this._register(new Emitter),this.onDidChange=this._onDidChange.event,this._onDidChangeFast=this._register(new Emitter),this.onDidChangeFast=this._onDidChangeFast.event,this._isDominatedByLongLines=!1,this._viewLineCount=1,this._lineNumbersDigitCount=1,this._reservedHeight=0,this._computeOptionsMemory=new ComputeOptionsMemory,this.isSimpleWidget=t,this._containerObserver=this._register(new ElementSizeObserver(i,e.dimension)),this._rawOptions=deepCloneAndMigrateOptions(e),this._validatedOptions=EditorOptionsUtil.validateOptions(this._rawOptions),this.options=this._computeOptions(),this.options.get(10)&&this._containerObserver.startObserving(),this._register(EditorZoom.onDidChangeZoomLevel((()=>this._recomputeOptions()))),this._register(TabFocus.onDidChangeTabFocus((()=>this._recomputeOptions()))),this._register(this._containerObserver.onDidChange((()=>this._recomputeOptions()))),this._register(FontMeasurements.onDidChange((()=>this._recomputeOptions()))),this._register(browser.PixelRatio.onDidChange((()=>this._recomputeOptions()))),this._register(this._accessibilityService.onDidChangeScreenReaderOptimized((()=>this._recomputeOptions())))}_recomputeOptions(){const t=this._computeOptions(),e=EditorOptionsUtil.checkEquals(this.options,t);null!==e&&(this.options=t,this._onDidChangeFast.fire(e),this._onDidChange.fire(e))}_computeOptions(){const t=this._readEnvConfiguration(),e=BareFontInfo.createFromValidatedSettings(this._validatedOptions,t.pixelRatio,this.isSimpleWidget),i=this._readFontInfo(e),o={memory:this._computeOptionsMemory,outerWidth:t.outerWidth,outerHeight:t.outerHeight-this._reservedHeight,fontInfo:i,extraEditorClassName:t.extraEditorClassName,isDominatedByLongLines:this._isDominatedByLongLines,viewLineCount:this._viewLineCount,lineNumbersDigitCount:this._lineNumbersDigitCount,emptySelectionClipboard:t.emptySelectionClipboard,pixelRatio:t.pixelRatio,tabFocusMode:TabFocus.getTabFocusMode(),accessibilitySupport:t.accessibilitySupport};return EditorOptionsUtil.computeOptions(this._validatedOptions,o)}_readEnvConfiguration(){return{extraEditorClassName:getExtraEditorClassName(),outerWidth:this._containerObserver.getWidth(),outerHeight:this._containerObserver.getHeight(),emptySelectionClipboard:browser.isWebKit||browser.isFirefox,pixelRatio:browser.PixelRatio.value,accessibilitySupport:this._accessibilityService.isScreenReaderOptimized()?2:this._accessibilityService.getAccessibilitySupport()}}_readFontInfo(t){return FontMeasurements.readFontInfo(t)}getRawOptions(){return this._rawOptions}updateOptions(t){const e=deepCloneAndMigrateOptions(t),i=EditorOptionsUtil.applyUpdate(this._rawOptions,e);i&&(this._validatedOptions=EditorOptionsUtil.validateOptions(this._rawOptions),this._recomputeOptions())}observeContainer(t){this._containerObserver.observe(t)}setIsDominatedByLongLines(t){this._isDominatedByLongLines!==t&&(this._isDominatedByLongLines=t,this._recomputeOptions())}setModelLineCount(t){const e=digitCount(t);this._lineNumbersDigitCount!==e&&(this._lineNumbersDigitCount=e,this._recomputeOptions())}setViewLineCount(t){this._viewLineCount!==t&&(this._viewLineCount=t,this._recomputeOptions())}setReservedHeight(t){this._reservedHeight!==t&&(this._reservedHeight=t,this._recomputeOptions())}};EditorConfiguration=__decorate([__param(3,IAccessibilityService)],EditorConfiguration);export{EditorConfiguration};function digitCount(t){let e=0;while(t)t=Math.floor(t/10),e++;return e||1}function getExtraEditorClassName(){let t="";return browser.isSafari||browser.isWebkitWebView||(t+="no-user-select "),browser.isSafari&&(t+="no-minimap-shadow "),platform.isMacintosh&&(t+="mac "),t}class ValidatedEditorOptions{constructor(){this._values=[]}_read(t){return this._values[t]}get(t){return this._values[t]}_write(t,e){this._values[t]=e}}export class ComputedEditorOptions{constructor(){this._values=[]}_read(t){if(t>=this._values.length)throw new Error("Cannot read uninitialized value");return this._values[t]}get(t){return this._read(t)}_write(t,e){this._values[t]=e}}class EditorOptionsUtil{static validateOptions(t){const e=new ValidatedEditorOptions;for(const i of editorOptionsRegistry){const o="_never_"===i.name?void 0:t[i.name];e._write(i.id,i.validate(o))}return e}static computeOptions(t,e){const i=new ComputedEditorOptions;for(const o of editorOptionsRegistry)i._write(o.id,o.compute(e,i,t._read(o.id)));return i}static _deepEquals(t,e){if("object"!==typeof t||"object"!==typeof e||!t||!e)return t===e;if(Array.isArray(t)||Array.isArray(e))return!(!Array.isArray(t)||!Array.isArray(e))&&arrays.equals(t,e);if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i in t)if(!EditorOptionsUtil._deepEquals(t[i],e[i]))return!1;return!0}static checkEquals(t,e){const i=[];let o=!1;for(const s of editorOptionsRegistry){const r=!EditorOptionsUtil._deepEquals(t._read(s.id),e._read(s.id));i[s.id]=r,r&&(o=!0)}return o?new ConfigurationChangedEvent(i):null}static applyUpdate(t,e){let i=!1;for(const o of editorOptionsRegistry)if(e.hasOwnProperty(o.name)){const s=o.applyUpdate(t[o.name],e[o.name]);t[o.name]=s.newValue,i=i||s.didChange}return i}}function deepCloneAndMigrateOptions(t){const e=objects.deepClone(t);return migrateOptions(e),e}