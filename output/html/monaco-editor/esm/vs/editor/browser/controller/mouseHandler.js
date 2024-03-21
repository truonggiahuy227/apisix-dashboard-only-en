import*as dom from"../../../base/browser/dom.js";import{StandardWheelEvent}from"../../../base/browser/mouseEvent.js";import{TimeoutTimer}from"../../../base/common/async.js";import{Disposable}from"../../../base/common/lifecycle.js";import*as platform from"../../../base/common/platform.js";import{HitTestContext,MouseTarget,MouseTargetFactory}from"./mouseTarget.js";import{ClientCoordinates,EditorMouseEventFactory,GlobalEditorMouseMoveMonitor,createEditorPagePosition,createCoordinatesRelativeToEditor}from"../editorDom.js";import{EditorZoom}from"../../common/config/editorZoom.js";import{Position}from"../../common/core/position.js";import{Selection}from"../../common/core/selection.js";import{ViewEventHandler}from"../../common/viewModel/viewEventHandler.js";export function createMouseMoveEventMerger(e){return function(t,o){let s=!1;return e&&(s=e.mouseTargetIsWidget(o)),s||o.preventDefault(),o}}export class MouseHandler extends ViewEventHandler{constructor(e,t,o){super(),this._context=e,this.viewController=t,this.viewHelper=o,this.mouseTargetFactory=new MouseTargetFactory(this._context,o),this._mouseDownOperation=this._register(new MouseDownOperation(this._context,this.viewController,this.viewHelper,((e,t)=>this._createMouseTarget(e,t)),(e=>this._getMouseColumn(e)))),this.lastMouseLeaveTime=-1,this._height=this._context.configuration.options.get(131).height;const s=new EditorMouseEventFactory(this.viewHelper.viewDomNode);this._register(s.onContextMenu(this.viewHelper.viewDomNode,(e=>this._onContextMenu(e,!0)))),this._register(s.onMouseMoveThrottled(this.viewHelper.viewDomNode,(e=>this._onMouseMove(e)),createMouseMoveEventMerger(this.mouseTargetFactory),MouseHandler.MOUSE_MOVE_MINIMUM_TIME)),this._register(s.onMouseUp(this.viewHelper.viewDomNode,(e=>this._onMouseUp(e)))),this._register(s.onMouseLeave(this.viewHelper.viewDomNode,(e=>this._onMouseLeave(e)))),this._register(s.onMouseDown(this.viewHelper.viewDomNode,(e=>this._onMouseDown(e))));const i=e=>{if(this.viewController.emitMouseWheel(e),!this._context.configuration.options.get(68))return;const t=new StandardWheelEvent(e),o=platform.isMacintosh?(e.metaKey||e.ctrlKey)&&!e.shiftKey&&!e.altKey:e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey;if(o){const e=EditorZoom.getZoomLevel(),o=t.deltaY>0?1:-1;EditorZoom.setZoomLevel(e+o),t.preventDefault(),t.stopPropagation()}};this._register(dom.addDisposableListener(this.viewHelper.viewDomNode,dom.EventType.MOUSE_WHEEL,i,{capture:!0,passive:!1})),this._context.addEventHandler(this)}dispose(){this._context.removeEventHandler(this),super.dispose()}onConfigurationChanged(e){if(e.hasChanged(131)){const e=this._context.configuration.options.get(131).height;this._height!==e&&(this._height=e,this._mouseDownOperation.onHeightChanged())}return!1}onCursorStateChanged(e){return this._mouseDownOperation.onCursorStateChanged(e),!1}onFocusChanged(e){return!1}onScrollChanged(e){return this._mouseDownOperation.onScrollChanged(),!1}getTargetAtClientPoint(e,t){const o=new ClientCoordinates(e,t),s=o.toPageCoordinates(),i=createEditorPagePosition(this.viewHelper.viewDomNode);if(s.y<i.y||s.y>i.y+i.height||s.x<i.x||s.x>i.x+i.width)return null;const n=createCoordinatesRelativeToEditor(this.viewHelper.viewDomNode,i,s);return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(),i,s,n,null)}_createMouseTarget(e,t){let o=e.target;if(!this.viewHelper.viewDomNode.contains(o)){const t=dom.getShadowRoot(this.viewHelper.viewDomNode);t&&(o=t.elementsFromPoint(e.posx,e.posy).find((e=>this.viewHelper.viewDomNode.contains(e))))}return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(),e.editorPos,e.pos,e.relativePos,t?o:null)}_getMouseColumn(e){return this.mouseTargetFactory.getMouseColumn(e.relativePos)}_onContextMenu(e,t){this.viewController.emitContextMenu({event:e,target:this._createMouseTarget(e,t)})}_onMouseMove(e){if(this._mouseDownOperation.isActive())return;const t=e.timestamp;t<this.lastMouseLeaveTime||this.viewController.emitMouseMove({event:e,target:this._createMouseTarget(e,!0)})}_onMouseLeave(e){this.lastMouseLeaveTime=(new Date).getTime(),this.viewController.emitMouseLeave({event:e,target:null})}_onMouseUp(e){this.viewController.emitMouseUp({event:e,target:this._createMouseTarget(e,!0)})}_onMouseDown(e){const t=this._createMouseTarget(e,!0),o=6===t.type||7===t.type,s=2===t.type||3===t.type||4===t.type,i=3===t.type,n=this._context.configuration.options.get(98),r=8===t.type||5===t.type,u=9===t.type;let a=e.leftButton||e.middleButton;platform.isMacintosh&&e.leftButton&&e.ctrlKey&&(a=!1);const h=()=>{e.preventDefault(),this.viewHelper.focusTextArea()};if(a&&(o||i&&n))h(),this._mouseDownOperation.start(t.type,e);else if(s)e.preventDefault();else if(r){const o=t.detail;this.viewHelper.shouldSuppressMouseDownOnViewZone(o.viewZoneId)&&(h(),this._mouseDownOperation.start(t.type,e),e.preventDefault())}else u&&this.viewHelper.shouldSuppressMouseDownOnWidget(t.detail)&&(h(),e.preventDefault());this.viewController.emitMouseDown({event:e,target:t})}}MouseHandler.MOUSE_MOVE_MINIMUM_TIME=100;class MouseDownOperation extends Disposable{constructor(e,t,o,s,i){super(),this._context=e,this._viewController=t,this._viewHelper=o,this._createMouseTarget=s,this._getMouseColumn=i,this._mouseMoveMonitor=this._register(new GlobalEditorMouseMoveMonitor(this._viewHelper.viewDomNode)),this._onScrollTimeout=this._register(new TimeoutTimer),this._mouseState=new MouseDownState,this._currentSelection=new Selection(1,1,1,1),this._isActive=!1,this._lastMouseEvent=null}dispose(){super.dispose()}isActive(){return this._isActive}_onMouseDownThenMove(e){this._lastMouseEvent=e,this._mouseState.setModifiers(e);const t=this._findMousePosition(e,!0);t&&(this._mouseState.isDragAndDrop?this._viewController.emitMouseDrag({event:e,target:t}):this._dispatchMouse(t,!0))}start(e,t){this._lastMouseEvent=t,this._mouseState.setStartedOnLineNumbers(3===e),this._mouseState.setStartButtons(t),this._mouseState.setModifiers(t);const o=this._findMousePosition(t,!0);if(!o||!o.position)return;this._mouseState.trySetCount(t.detail,o.position),t.detail=this._mouseState.count;const s=this._context.configuration.options;if(!s.get(81)&&s.get(31)&&!s.get(18)&&!this._mouseState.altKey&&t.detail<2&&!this._isActive&&!this._currentSelection.isEmpty()&&6===o.type&&o.position&&this._currentSelection.containsPosition(o.position))return this._mouseState.isDragAndDrop=!0,this._isActive=!0,void this._mouseMoveMonitor.startMonitoring(t.target,t.buttons,createMouseMoveEventMerger(null),(e=>this._onMouseDownThenMove(e)),(e=>{const t=this._findMousePosition(this._lastMouseEvent,!0);e&&e instanceof KeyboardEvent?this._viewController.emitMouseDropCanceled():this._viewController.emitMouseDrop({event:this._lastMouseEvent,target:t?this._createMouseTarget(this._lastMouseEvent,!0):null}),this._stop()}));this._mouseState.isDragAndDrop=!1,this._dispatchMouse(o,t.shiftKey),this._isActive||(this._isActive=!0,this._mouseMoveMonitor.startMonitoring(t.target,t.buttons,createMouseMoveEventMerger(null),(e=>this._onMouseDownThenMove(e)),(()=>this._stop())))}_stop(){this._isActive=!1,this._onScrollTimeout.cancel()}onHeightChanged(){this._mouseMoveMonitor.stopMonitoring()}onScrollChanged(){this._isActive&&this._onScrollTimeout.setIfNotSet((()=>{if(!this._lastMouseEvent)return;const e=this._findMousePosition(this._lastMouseEvent,!1);e&&(this._mouseState.isDragAndDrop||this._dispatchMouse(e,!0))}),10)}onCursorStateChanged(e){this._currentSelection=e.selections[0]}_getPositionOutsideEditor(e){const t=e.editorPos,o=this._context.model,s=this._context.viewLayout,i=this._getMouseColumn(e);if(e.posy<t.y){const o=Math.max(s.getCurrentScrollTop()-(t.y-e.posy),0),n=HitTestContext.getZoneAtCoord(this._context,o);if(n){const e=this._helpPositionJumpOverViewZone(n);if(e)return MouseTarget.createOutsideEditor(i,e)}const r=s.getLineNumberAtVerticalOffset(o);return MouseTarget.createOutsideEditor(i,new Position(r,1))}if(e.posy>t.y+t.height){const t=s.getCurrentScrollTop()+e.relativePos.y,n=HitTestContext.getZoneAtCoord(this._context,t);if(n){const e=this._helpPositionJumpOverViewZone(n);if(e)return MouseTarget.createOutsideEditor(i,e)}const r=s.getLineNumberAtVerticalOffset(t);return MouseTarget.createOutsideEditor(i,new Position(r,o.getLineMaxColumn(r)))}const n=s.getLineNumberAtVerticalOffset(s.getCurrentScrollTop()+e.relativePos.y);return e.posx<t.x?MouseTarget.createOutsideEditor(i,new Position(n,1)):e.posx>t.x+t.width?MouseTarget.createOutsideEditor(i,new Position(n,o.getLineMaxColumn(n))):null}_findMousePosition(e,t){const o=this._getPositionOutsideEditor(e);if(o)return o;const s=this._createMouseTarget(e,t),i=s.position;if(!i)return null;if(8===s.type||5===s.type){const e=this._helpPositionJumpOverViewZone(s.detail);if(e)return MouseTarget.createViewZone(s.type,s.element,s.mouseColumn,e,s.detail)}return s}_helpPositionJumpOverViewZone(e){const t=new Position(this._currentSelection.selectionStartLineNumber,this._currentSelection.selectionStartColumn),o=e.positionBefore,s=e.positionAfter;return o&&s?o.isBefore(t)?o:s:null}_dispatchMouse(e,t){e.position&&this._viewController.dispatchMouse({position:e.position,mouseColumn:e.mouseColumn,startedOnLineNumbers:this._mouseState.startedOnLineNumbers,inSelectionMode:t,mouseDownCount:this._mouseState.count,altKey:this._mouseState.altKey,ctrlKey:this._mouseState.ctrlKey,metaKey:this._mouseState.metaKey,shiftKey:this._mouseState.shiftKey,leftButton:this._mouseState.leftButton,middleButton:this._mouseState.middleButton})}}class MouseDownState{constructor(){this._altKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._shiftKey=!1,this._leftButton=!1,this._middleButton=!1,this._startedOnLineNumbers=!1,this._lastMouseDownPosition=null,this._lastMouseDownPositionEqualCount=0,this._lastMouseDownCount=0,this._lastSetMouseDownCountTime=0,this.isDragAndDrop=!1}get altKey(){return this._altKey}get ctrlKey(){return this._ctrlKey}get metaKey(){return this._metaKey}get shiftKey(){return this._shiftKey}get leftButton(){return this._leftButton}get middleButton(){return this._middleButton}get startedOnLineNumbers(){return this._startedOnLineNumbers}get count(){return this._lastMouseDownCount}setModifiers(e){this._altKey=e.altKey,this._ctrlKey=e.ctrlKey,this._metaKey=e.metaKey,this._shiftKey=e.shiftKey}setStartButtons(e){this._leftButton=e.leftButton,this._middleButton=e.middleButton}setStartedOnLineNumbers(e){this._startedOnLineNumbers=e}trySetCount(e,t){const o=(new Date).getTime();o-this._lastSetMouseDownCountTime>MouseDownState.CLEAR_MOUSE_DOWN_COUNT_TIME&&(e=1),this._lastSetMouseDownCountTime=o,e>this._lastMouseDownCount+1&&(e=this._lastMouseDownCount+1),this._lastMouseDownPosition&&this._lastMouseDownPosition.equals(t)?this._lastMouseDownPositionEqualCount++:this._lastMouseDownPositionEqualCount=1,this._lastMouseDownPosition=t,this._lastMouseDownCount=Math.min(e,this._lastMouseDownPositionEqualCount)}}MouseDownState.CLEAR_MOUSE_DOWN_COUNT_TIME=400;