var __decorate=this&&this.__decorate||function(e,r,o,t){var i,a=arguments.length,s=a<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,r,o,t);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(r,o,s):i(r,o))||s);return a>3&&s&&Object.defineProperty(r,o,s),s},__param=this&&this.__param||function(e,r){return function(o,t){r(o,t,e)}};import{IMarkerService,MarkerSeverity}from"../../../platform/markers/common/markers.js";import{Disposable,toDisposable}from"../../../base/common/lifecycle.js";import{OverviewRulerLane,MinimapPosition}from"../model.js";import{themeColorFromId}from"../../../platform/theme/common/themeService.js";import{overviewRulerWarning,overviewRulerInfo,overviewRulerError}from"../core/editorColorRegistry.js";import{IModelService}from"./model.js";import{Range}from"../core/range.js";import{Schemas}from"../../../base/common/network.js";import{Emitter}from"../../../base/common/event.js";import{minimapWarning,minimapError}from"../../../platform/theme/common/colorRegistry.js";import{ResourceMap}from"../../../base/common/map.js";class MarkerDecorations extends Disposable{constructor(e){super(),this.model=e,this._markersData=new Map,this._register(toDisposable((()=>{this.model.deltaDecorations([...this._markersData.keys()],[]),this._markersData.clear()})))}update(e,r){const o=[...this._markersData.keys()];this._markersData.clear();const t=this.model.deltaDecorations(o,r);for(let i=0;i<t.length;i++)this._markersData.set(t[i],e[i]);return 0!==o.length||0!==t.length}getMarker(e){return this._markersData.get(e.id)}}let MarkerDecorationsService=class extends Disposable{constructor(e,r){super(),this._markerService=r,this._onDidChangeMarker=this._register(new Emitter),this._markerDecorations=new ResourceMap,e.getModels().forEach((e=>this._onModelAdded(e))),this._register(e.onModelAdded(this._onModelAdded,this)),this._register(e.onModelRemoved(this._onModelRemoved,this)),this._register(this._markerService.onMarkerChanged(this._handleMarkerChange,this))}dispose(){super.dispose(),this._markerDecorations.forEach((e=>e.dispose())),this._markerDecorations.clear()}getMarker(e,r){const o=this._markerDecorations.get(e);return o&&o.getMarker(r)||null}_handleMarkerChange(e){e.forEach((e=>{const r=this._markerDecorations.get(e);r&&this._updateDecorations(r)}))}_onModelAdded(e){const r=new MarkerDecorations(e);this._markerDecorations.set(e.uri,r),this._updateDecorations(r)}_onModelRemoved(e){const r=this._markerDecorations.get(e.uri);r&&(r.dispose(),this._markerDecorations.delete(e.uri)),e.uri.scheme!==Schemas.inMemory&&e.uri.scheme!==Schemas.internal&&e.uri.scheme!==Schemas.vscode||this._markerService&&this._markerService.read({resource:e.uri}).map((e=>e.owner)).forEach((r=>this._markerService.remove(r,[e.uri])))}_updateDecorations(e){const r=this._markerService.read({resource:e.model.uri,take:500}),o=r.map((r=>({range:this._createDecorationRange(e.model,r),options:this._createDecorationOption(r)})));e.update(r,o)&&this._onDidChangeMarker.fire(e.model)}_createDecorationRange(e,r){let o=Range.lift(r);return r.severity!==MarkerSeverity.Hint||this._hasMarkerTag(r,1)||this._hasMarkerTag(r,2)||(o=o.setEndPosition(o.startLineNumber,o.startColumn+2)),e.validateRange(o)}_createDecorationOption(e){let r,o,t,i,a;switch(e.severity){case MarkerSeverity.Hint:r=this._hasMarkerTag(e,2)?void 0:this._hasMarkerTag(e,1)?"squiggly-unnecessary":"squiggly-hint",t=0;break;case MarkerSeverity.Warning:r="squiggly-warning",o=themeColorFromId(overviewRulerWarning),t=20,a={color:themeColorFromId(minimapWarning),position:MinimapPosition.Inline};break;case MarkerSeverity.Info:r="squiggly-info",o=themeColorFromId(overviewRulerInfo),t=10;break;case MarkerSeverity.Error:default:r="squiggly-error",o=themeColorFromId(overviewRulerError),t=30,a={color:themeColorFromId(minimapError),position:MinimapPosition.Inline};break}return e.tags&&(-1!==e.tags.indexOf(1)&&(i="squiggly-inline-unnecessary"),-1!==e.tags.indexOf(2)&&(i="squiggly-inline-deprecated")),{description:"marker-decoration",stickiness:1,className:r,showIfCollapsed:!0,overviewRuler:{color:o,position:OverviewRulerLane.Right},minimap:a,zIndex:t,inlineClassName:i}}_hasMarkerTag(e,r){return!!e.tags&&e.tags.indexOf(r)>=0}};MarkerDecorationsService=__decorate([__param(0,IModelService),__param(1,IMarkerService)],MarkerDecorationsService);export{MarkerDecorationsService};