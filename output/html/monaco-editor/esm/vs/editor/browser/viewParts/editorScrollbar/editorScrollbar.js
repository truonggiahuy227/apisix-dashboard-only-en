import*as dom from"../../../../base/browser/dom.js";import{createFastDomNode}from"../../../../base/browser/fastDomNode.js";import{SmoothScrollableElement}from"../../../../base/browser/ui/scrollbar/scrollableElement.js";import{PartFingerprints,ViewPart}from"../../view/viewPart.js";import{registerThemingParticipant,getThemeTypeSelector}from"../../../../platform/theme/common/themeService.js";import{scrollbarShadow,scrollbarSliderActiveBackground,scrollbarSliderBackground,scrollbarSliderHoverBackground}from"../../../../platform/theme/common/colorRegistry.js";export class EditorScrollbar extends ViewPart{constructor(e,o,t,r){super(e);const l=this._context.configuration.options,s=l.get(92),a=l.get(67),i=l.get(34),n=l.get(95),c={listenOnDomNode:t.domNode,className:"editor-scrollable "+getThemeTypeSelector(e.theme.type),useShadows:!1,lazyRender:!0,vertical:s.vertical,horizontal:s.horizontal,verticalHasArrows:s.verticalHasArrows,horizontalHasArrows:s.horizontalHasArrows,verticalScrollbarSize:s.verticalScrollbarSize,verticalSliderSize:s.verticalSliderSize,horizontalScrollbarSize:s.horizontalScrollbarSize,horizontalSliderSize:s.horizontalSliderSize,handleMouseWheel:s.handleMouseWheel,alwaysConsumeMouseWheel:s.alwaysConsumeMouseWheel,arrowSize:s.arrowSize,mouseWheelScrollSensitivity:a,fastScrollSensitivity:i,scrollPredominantAxis:n,scrollByPage:s.scrollByPage};this.scrollbar=this._register(new SmoothScrollableElement(o.domNode,c,this._context.viewLayout.getScrollable())),PartFingerprints.write(this.scrollbar.getDomNode(),5),this.scrollbarDomNode=createFastDomNode(this.scrollbar.getDomNode()),this.scrollbarDomNode.setPosition("absolute"),this._setLayout();const d=(e,o,t)=>{const r={};if(o){const o=e.scrollTop;o&&(r.scrollTop=this._context.viewLayout.getCurrentScrollTop()+o,e.scrollTop=0)}if(t){const o=e.scrollLeft;o&&(r.scrollLeft=this._context.viewLayout.getCurrentScrollLeft()+o,e.scrollLeft=0)}this._context.model.setScrollPosition(r,1)};this._register(dom.addDisposableListener(t.domNode,"scroll",(e=>d(t.domNode,!0,!0)))),this._register(dom.addDisposableListener(o.domNode,"scroll",(e=>d(o.domNode,!0,!1)))),this._register(dom.addDisposableListener(r.domNode,"scroll",(e=>d(r.domNode,!0,!1)))),this._register(dom.addDisposableListener(this.scrollbarDomNode.domNode,"scroll",(e=>d(this.scrollbarDomNode.domNode,!0,!1))))}dispose(){super.dispose()}_setLayout(){const e=this._context.configuration.options,o=e.get(131);this.scrollbarDomNode.setLeft(o.contentLeft);const t=e.get(65),r=t.side;"right"===r?this.scrollbarDomNode.setWidth(o.contentWidth+o.minimap.minimapWidth):this.scrollbarDomNode.setWidth(o.contentWidth),this.scrollbarDomNode.setHeight(o.height)}getOverviewRulerLayoutInfo(){return this.scrollbar.getOverviewRulerLayoutInfo()}getDomNode(){return this.scrollbarDomNode}delegateVerticalScrollbarMouseDown(e){this.scrollbar.delegateVerticalScrollbarMouseDown(e)}onConfigurationChanged(e){if(e.hasChanged(92)||e.hasChanged(67)||e.hasChanged(34)){const e=this._context.configuration.options,o=e.get(92),t=e.get(67),r=e.get(34),l=e.get(95),s={vertical:o.vertical,horizontal:o.horizontal,verticalScrollbarSize:o.verticalScrollbarSize,horizontalScrollbarSize:o.horizontalScrollbarSize,scrollByPage:o.scrollByPage,handleMouseWheel:o.handleMouseWheel,mouseWheelScrollSensitivity:t,fastScrollSensitivity:r,scrollPredominantAxis:l};this.scrollbar.updateOptions(s)}return e.hasChanged(131)&&this._setLayout(),!0}onScrollChanged(e){return!0}onThemeChanged(e){return this.scrollbar.updateClassName("editor-scrollable "+getThemeTypeSelector(this._context.theme.type)),!0}prepareRender(e){}render(e){this.scrollbar.renderNow()}}registerThemingParticipant(((e,o)=>{const t=e.getColor(scrollbarShadow);t&&o.addRule(`\n\t\t\t.monaco-scrollable-element > .shadow.top {\n\t\t\t\tbox-shadow: ${t} 0 6px 6px -6px inset;\n\t\t\t}\n\n\t\t\t.monaco-scrollable-element > .shadow.left {\n\t\t\t\tbox-shadow: ${t} 6px 0 6px -6px inset;\n\t\t\t}\n\n\t\t\t.monaco-scrollable-element > .shadow.top.left {\n\t\t\t\tbox-shadow: ${t} 6px 6px 6px -6px inset;\n\t\t\t}\n\t\t`);const r=e.getColor(scrollbarSliderBackground);r&&o.addRule(`\n\t\t\t.monaco-scrollable-element > .scrollbar > .slider {\n\t\t\t\tbackground: ${r};\n\t\t\t}\n\t\t`);const l=e.getColor(scrollbarSliderHoverBackground);l&&o.addRule(`\n\t\t\t.monaco-scrollable-element > .scrollbar > .slider:hover {\n\t\t\t\tbackground: ${l};\n\t\t\t}\n\t\t`);const s=e.getColor(scrollbarSliderActiveBackground);s&&o.addRule(`\n\t\t\t.monaco-scrollable-element > .scrollbar > .slider.active {\n\t\t\t\tbackground: ${s};\n\t\t\t}\n\t\t`)}));