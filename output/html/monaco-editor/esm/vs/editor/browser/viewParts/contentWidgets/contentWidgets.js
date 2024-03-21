import*as dom from"../../../../base/browser/dom.js";import{createFastDomNode}from"../../../../base/browser/fastDomNode.js";import{PartFingerprints,ViewPart}from"../../view/viewPart.js";class Coordinate{constructor(e,t){this._coordinateBrand=void 0,this.top=e,this.left=t}}export class ViewContentWidgets extends ViewPart{constructor(e,t){super(e),this._viewDomNode=t,this._widgets={},this.domNode=createFastDomNode(document.createElement("div")),PartFingerprints.write(this.domNode,1),this.domNode.setClassName("contentWidgets"),this.domNode.setPosition("absolute"),this.domNode.setTop(0),this.overflowingContentWidgetsDomNode=createFastDomNode(document.createElement("div")),PartFingerprints.write(this.overflowingContentWidgetsDomNode,2),this.overflowingContentWidgetsDomNode.setClassName("overflowingContentWidgets")}dispose(){super.dispose(),this._widgets={}}onConfigurationChanged(e){const t=Object.keys(this._widgets);for(const o of t)this._widgets[o].onConfigurationChanged(e);return!0}onDecorationsChanged(e){return!0}onFlushed(e){return!0}onLineMappingChanged(e){const t=Object.keys(this._widgets);for(const o of t)this._widgets[o].onLineMappingChanged(e);return!0}onLinesChanged(e){return!0}onLinesDeleted(e){return!0}onLinesInserted(e){return!0}onScrollChanged(e){return!0}onZonesChanged(e){return!0}addWidget(e){const t=new Widget(this._context,this._viewDomNode,e);this._widgets[t.id]=t,t.allowEditorOverflow?this.overflowingContentWidgetsDomNode.appendChild(t.domNode):this.domNode.appendChild(t.domNode),this.setShouldRender()}setWidgetPosition(e,t,o){const i=this._widgets[e.getId()];i.setPosition(t,o),this.setShouldRender()}removeWidget(e){const t=e.getId();if(this._widgets.hasOwnProperty(t)){const e=this._widgets[t];delete this._widgets[t];const o=e.domNode.domNode;o.parentNode.removeChild(o),o.removeAttribute("monaco-visible-content-widget"),this.setShouldRender()}}shouldSuppressMouseDownOnWidget(e){return!!this._widgets.hasOwnProperty(e)&&this._widgets[e].suppressMouseDown}onBeforeRender(e){const t=Object.keys(this._widgets);for(const o of t)this._widgets[o].onBeforeRender(e)}prepareRender(e){const t=Object.keys(this._widgets);for(const o of t)this._widgets[o].prepareRender(e)}render(e){const t=Object.keys(this._widgets);for(const o of t)this._widgets[o].render(e)}}class Widget{constructor(e,t,o){this._context=e,this._viewDomNode=t,this._actual=o,this.domNode=createFastDomNode(this._actual.getDomNode()),this.id=this._actual.getId(),this.allowEditorOverflow=this._actual.allowEditorOverflow||!1,this.suppressMouseDown=this._actual.suppressMouseDown||!1;const i=this._context.configuration.options,s=i.get(131);this._fixedOverflowWidgets=i.get(36),this._contentWidth=s.contentWidth,this._contentLeft=s.contentLeft,this._lineHeight=i.get(59),this._range=null,this._viewRange=null,this._preference=[],this._cachedDomNodeOffsetWidth=-1,this._cachedDomNodeOffsetHeight=-1,this._maxWidth=this._getMaxWidth(),this._isVisible=!1,this._renderData=null,this.domNode.setPosition(this._fixedOverflowWidgets&&this.allowEditorOverflow?"fixed":"absolute"),this.domNode.setDisplay("none"),this.domNode.setVisibility("hidden"),this.domNode.setAttribute("widgetId",this.id),this.domNode.setMaxWidth(this._maxWidth)}onConfigurationChanged(e){const t=this._context.configuration.options;if(this._lineHeight=t.get(59),e.hasChanged(131)){const e=t.get(131);this._contentLeft=e.contentLeft,this._contentWidth=e.contentWidth,this._maxWidth=this._getMaxWidth()}}onLineMappingChanged(e){this._setPosition(this._range)}_setPosition(e){if(this._range=e,this._viewRange=null,this._range){const e=this._context.model.validateModelRange(this._range);(this._context.model.coordinatesConverter.modelPositionIsVisible(e.getStartPosition())||this._context.model.coordinatesConverter.modelPositionIsVisible(e.getEndPosition()))&&(this._viewRange=this._context.model.coordinatesConverter.convertModelRangeToViewRange(e))}}_getMaxWidth(){return this.allowEditorOverflow?window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth:this._contentWidth}setPosition(e,t){this._setPosition(e),this._preference=t,this._viewRange&&this._preference&&this._preference.length>0?this.domNode.setDisplay("block"):this.domNode.setDisplay("none"),this._cachedDomNodeOffsetWidth=-1,this._cachedDomNodeOffsetHeight=-1}_layoutBoxInViewport(e,t,o,i,s){const n=e.top,r=n,d=t.top+this._lineHeight,h=s.viewportHeight-d,a=n-i,l=r>=i,f=d,c=h>=i;let g=e.left,_=t.left;return g+o>s.scrollLeft+s.viewportWidth&&(g=s.scrollLeft+s.viewportWidth-o),_+o>s.scrollLeft+s.viewportWidth&&(_=s.scrollLeft+s.viewportWidth-o),g<s.scrollLeft&&(g=s.scrollLeft),_<s.scrollLeft&&(_=s.scrollLeft),{fitsAbove:l,aboveTop:a,aboveLeft:g,fitsBelow:c,belowTop:f,belowLeft:_}}_layoutHorizontalSegmentInPage(e,t,o,i){const s=Math.max(0,t.left-i),n=Math.min(t.left+t.width+i,e.width);let r=t.left+o-dom.StandardWindow.scrollX;if(r+i>n){const e=r-(n-i);r-=e,o-=e}if(r<s){const e=r-s;r-=e,o-=e}return[o,r]}_layoutBoxInPage(e,t,o,i,s){const n=e.top-i,r=t.top+this._lineHeight,d=dom.getDomNodePagePosition(this._viewDomNode.domNode),h=d.top+n-dom.StandardWindow.scrollY,a=d.top+r-dom.StandardWindow.scrollY,l=dom.getClientArea(document.body),[f,c]=this._layoutHorizontalSegmentInPage(l,d,e.left-s.scrollLeft+this._contentLeft,o),[g,_]=this._layoutHorizontalSegmentInPage(l,d,t.left-s.scrollLeft+this._contentLeft,o),m=22,u=22,w=h>=m,p=a+i<=l.height-u;return this._fixedOverflowWidgets?{fitsAbove:w,aboveTop:Math.max(h,m),aboveLeft:c,fitsBelow:p,belowTop:a,belowLeft:_}:{fitsAbove:w,aboveTop:n,aboveLeft:f,fitsBelow:p,belowTop:r,belowLeft:g}}_prepareRenderWidgetAtExactPositionOverflowing(e){return new Coordinate(e.top,e.left+this._contentLeft)}_getTopAndBottomLeft(e){if(!this._viewRange)return[null,null];const t=e.linesVisibleRangesForRange(this._viewRange,!1);if(!t||0===t.length)return[null,null];let o=t[0],i=t[0];for(const l of t)l.lineNumber<o.lineNumber&&(o=l),l.lineNumber>i.lineNumber&&(i=l);let s=1073741824;for(const l of o.ranges)l.left<s&&(s=l.left);let n=1073741824;for(const l of i.ranges)l.left<n&&(n=l.left);const r=e.getVerticalOffsetForLineNumber(o.lineNumber)-e.scrollTop,d=new Coordinate(r,s),h=e.getVerticalOffsetForLineNumber(i.lineNumber)-e.scrollTop,a=new Coordinate(h,n);return[d,a]}_prepareRenderWidget(e){if(!this._preference||0===this._preference.length)return null;const[t,o]=this._getTopAndBottomLeft(e);if(!t||!o)return null;if(-1===this._cachedDomNodeOffsetWidth||-1===this._cachedDomNodeOffsetHeight){let e=null;if("function"===typeof this._actual.beforeRender&&(e=safeInvoke(this._actual.beforeRender,this._actual)),e)this._cachedDomNodeOffsetWidth=e.width,this._cachedDomNodeOffsetHeight=e.height;else{const e=this.domNode.domNode;this._cachedDomNodeOffsetWidth=e.offsetWidth,this._cachedDomNodeOffsetHeight=e.offsetHeight}}let i;i=this.allowEditorOverflow?this._layoutBoxInPage(t,o,this._cachedDomNodeOffsetWidth,this._cachedDomNodeOffsetHeight,e):this._layoutBoxInViewport(t,o,this._cachedDomNodeOffsetWidth,this._cachedDomNodeOffsetHeight,e);for(let s=1;s<=2;s++)for(const e of this._preference)if(1===e){if(!i)return null;if(2===s||i.fitsAbove)return{coordinate:new Coordinate(i.aboveTop,i.aboveLeft),position:1}}else{if(2!==e)return this.allowEditorOverflow?{coordinate:this._prepareRenderWidgetAtExactPositionOverflowing(t),position:0}:{coordinate:t,position:0};if(!i)return null;if(2===s||i.fitsBelow)return{coordinate:new Coordinate(i.belowTop,i.belowLeft),position:2}}return null}onBeforeRender(e){this._viewRange&&this._preference&&(this._viewRange.endLineNumber<e.startLineNumber||this._viewRange.startLineNumber>e.endLineNumber||this.domNode.setMaxWidth(this._maxWidth))}prepareRender(e){this._renderData=this._prepareRenderWidget(e)}render(e){if(!this._renderData)return this._isVisible&&(this.domNode.removeAttribute("monaco-visible-content-widget"),this._isVisible=!1,this.domNode.setVisibility("hidden")),void("function"===typeof this._actual.afterRender&&safeInvoke(this._actual.afterRender,this._actual,null));this.allowEditorOverflow?(this.domNode.setTop(this._renderData.coordinate.top),this.domNode.setLeft(this._renderData.coordinate.left)):(this.domNode.setTop(this._renderData.coordinate.top+e.scrollTop-e.bigNumbersDelta),this.domNode.setLeft(this._renderData.coordinate.left)),this._isVisible||(this.domNode.setVisibility("inherit"),this.domNode.setAttribute("monaco-visible-content-widget","true"),this._isVisible=!0),"function"===typeof this._actual.afterRender&&safeInvoke(this._actual.afterRender,this._actual,this._renderData.position)}}function safeInvoke(e,t,...o){try{return e.call(t,...o)}catch(i){return null}}