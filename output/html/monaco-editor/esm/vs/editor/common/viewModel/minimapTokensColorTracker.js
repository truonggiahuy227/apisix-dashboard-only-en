import{Emitter}from"../../../base/common/event.js";import{Disposable,markAsSingleton}from"../../../base/common/lifecycle.js";import{RGBA8}from"../core/rgba.js";import{TokenizationRegistry}from"../languages.js";export class MinimapTokensColorTracker extends Disposable{constructor(){super(),this._onDidChange=new Emitter,this.onDidChange=this._onDidChange.event,this._updateColorMap(),this._register(TokenizationRegistry.onDidChange((o=>{o.changedColorMap&&this._updateColorMap()})))}static getInstance(){return this._INSTANCE||(this._INSTANCE=markAsSingleton(new MinimapTokensColorTracker)),this._INSTANCE}_updateColorMap(){const o=TokenizationRegistry.getColorMap();if(!o)return this._colors=[RGBA8.Empty],void(this._backgroundIsLight=!0);this._colors=[RGBA8.Empty];for(let e=1;e<o.length;e++){const t=o[e].rgba;this._colors[e]=new RGBA8(t.r,t.g,t.b,Math.round(255*t.a))}const t=o[2].getRelativeLuminance();this._backgroundIsLight=t>=.5,this._onDidChange.fire(void 0)}getColor(o){return(o<1||o>=this._colors.length)&&(o=2),this._colors[o]}backgroundIsLight(){return this._backgroundIsLight}}MinimapTokensColorTracker._INSTANCE=null;