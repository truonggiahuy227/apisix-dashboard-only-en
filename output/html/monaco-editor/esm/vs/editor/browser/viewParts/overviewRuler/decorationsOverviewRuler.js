import{createFastDomNode}from"../../../../base/browser/fastDomNode.js";import{Color}from"../../../../base/common/color.js";import{ViewPart}from"../../view/viewPart.js";import{Position}from"../../../common/core/position.js";import{TokenizationRegistry}from"../../../common/languages.js";import{editorCursorForeground,editorOverviewRulerBorder,editorOverviewRulerBackground}from"../../../common/core/editorColorRegistry.js";import{OverviewRulerDecorationsGroup}from"../../../common/viewModel/viewModel.js";class Settings{constructor(t,e){const o=t.options;this.lineHeight=o.get(59),this.pixelRatio=o.get(129),this.overviewRulerLanes=o.get(74),this.renderBorder=o.get(73);const i=e.getColor(editorOverviewRulerBorder);this.borderColor=i?i.toString():null,this.hideCursor=o.get(52);const s=e.getColor(editorCursorForeground);this.cursorColor=s?s.transparent(.7).toString():null,this.themeType=e.type;const r=o.get(65),n=r.enabled,h=r.side,d=n?e.getColor(editorOverviewRulerBackground)||TokenizationRegistry.getDefaultBackground():null;this.backgroundColor=null===d||"left"===h?null:Color.Format.CSS.formatHex(d);const l=o.get(131),a=l.overviewRuler;this.top=a.top,this.right=a.right,this.domWidth=a.width,this.domHeight=a.height,0===this.overviewRulerLanes?(this.canvasWidth=0,this.canvasHeight=0):(this.canvasWidth=this.domWidth*this.pixelRatio|0,this.canvasHeight=this.domHeight*this.pixelRatio|0);const[g,c]=this._initLanes(1,this.canvasWidth,this.overviewRulerLanes);this.x=g,this.w=c}_initLanes(t,e,o){const i=e-t;if(o>=3){const e=Math.floor(i/3),o=Math.floor(i/3),s=i-e-o,r=t,n=r+e,h=r+e+s;return[[0,r,n,r,h,r,n,r],[0,e,s,e+s,o,e+s+o,s+o,e+s+o]]}if(2===o){const e=Math.floor(i/2),o=i-e,s=t,r=s+e;return[[0,s,s,s,r,s,s,s],[0,e,e,e,o,e+o,e+o,e+o]]}{const e=t,o=i;return[[0,e,e,e,e,e,e,e],[0,o,o,o,o,o,o,o]]}}equals(t){return this.lineHeight===t.lineHeight&&this.pixelRatio===t.pixelRatio&&this.overviewRulerLanes===t.overviewRulerLanes&&this.renderBorder===t.renderBorder&&this.borderColor===t.borderColor&&this.hideCursor===t.hideCursor&&this.cursorColor===t.cursorColor&&this.themeType===t.themeType&&this.backgroundColor===t.backgroundColor&&this.top===t.top&&this.right===t.right&&this.domWidth===t.domWidth&&this.domHeight===t.domHeight&&this.canvasWidth===t.canvasWidth&&this.canvasHeight===t.canvasHeight}}export class DecorationsOverviewRuler extends ViewPart{constructor(t){super(t),this._domNode=createFastDomNode(document.createElement("canvas")),this._domNode.setClassName("decorationsOverviewRuler"),this._domNode.setPosition("absolute"),this._domNode.setLayerHinting(!0),this._domNode.setContain("strict"),this._domNode.setAttribute("aria-hidden","true"),this._updateSettings(!1),this._tokensColorTrackerListener=TokenizationRegistry.onDidChange((t=>{t.changedColorMap&&this._updateSettings(!0)})),this._cursorPositions=[]}dispose(){super.dispose(),this._tokensColorTrackerListener.dispose()}_updateSettings(t){const e=new Settings(this._context.configuration,this._context.theme);return(!this._settings||!this._settings.equals(e))&&(this._settings=e,this._domNode.setTop(this._settings.top),this._domNode.setRight(this._settings.right),this._domNode.setWidth(this._settings.domWidth),this._domNode.setHeight(this._settings.domHeight),this._domNode.domNode.width=this._settings.canvasWidth,this._domNode.domNode.height=this._settings.canvasHeight,t&&this._render(),!0)}onConfigurationChanged(t){return this._updateSettings(!1)}onCursorStateChanged(t){this._cursorPositions=[];for(let e=0,o=t.selections.length;e<o;e++)this._cursorPositions[e]=t.selections[e].getPosition();return this._cursorPositions.sort(Position.compare),!0}onDecorationsChanged(t){return!!t.affectsOverviewRuler}onFlushed(t){return!0}onScrollChanged(t){return t.scrollHeightChanged}onZonesChanged(t){return!0}onThemeChanged(t){return this._context.model.invalidateOverviewRulerColorCache(),this._updateSettings(!1)}getDomNode(){return this._domNode.domNode}prepareRender(t){}render(t){this._render()}_render(){if(0===this._settings.overviewRulerLanes)return this._domNode.setBackgroundColor(this._settings.backgroundColor?this._settings.backgroundColor:""),void this._domNode.setDisplay("none");this._domNode.setDisplay("block");const t=this._settings.canvasWidth,e=this._settings.canvasHeight,o=this._settings.lineHeight,i=this._context.viewLayout,s=this._context.viewLayout.getScrollHeight(),r=e/s,n=this._context.model.getAllOverviewRulerDecorations(this._context.theme),h=6*this._settings.pixelRatio|0,d=h/2|0,l=this._domNode.domNode.getContext("2d");null===this._settings.backgroundColor?l.clearRect(0,0,t,e):(l.fillStyle=this._settings.backgroundColor,l.fillRect(0,0,t,e));const a=this._settings.x,g=this._settings.w;n.sort(OverviewRulerDecorationsGroup.cmp);for(const c of n){const t=c.color,s=c.data;l.fillStyle=t;let n=0,u=0,m=0;for(let c=0,_=s.length/3;c<_;c++){const t=s[3*c],_=s[3*c+1],v=s[3*c+2];let C=i.getVerticalOffsetForLineNumber(_)*r|0,p=(i.getVerticalOffsetForLineNumber(v)+o)*r|0;const f=p-C;if(f<h){let t=(C+p)/2|0;t<d?t=d:t+d>e&&(t=e-d),C=t-d,p=t+d}C>m+1||t!==n?(0!==c&&l.fillRect(a[n],u,g[n],m-u),n=t,u=C,m=p):p>m&&(m=p)}l.fillRect(a[n],u,g[n],m-u)}if(!this._settings.hideCursor&&this._settings.cursorColor){const t=2*this._settings.pixelRatio|0,o=t/2|0,s=this._settings.x[7],n=this._settings.w[7];l.fillStyle=this._settings.cursorColor;let h=-100,d=-100;for(let a=0,g=this._cursorPositions.length;a<g;a++){const g=this._cursorPositions[a];let c=i.getVerticalOffsetForLineNumber(g.lineNumber)*r|0;c<o?c=o:c+o>e&&(c=e-o);const u=c-o,m=u+t;u>d+1?(0!==a&&l.fillRect(s,h,n,d-h),h=u,d=m):m>d&&(d=m)}l.fillRect(s,h,n,d-h)}this._settings.renderBorder&&this._settings.borderColor&&this._settings.overviewRulerLanes>0&&(l.beginPath(),l.lineWidth=1,l.strokeStyle=this._settings.borderColor,l.moveTo(0,0),l.lineTo(0,e),l.stroke(),l.moveTo(0,0),l.lineTo(t,0),l.stroke())}}