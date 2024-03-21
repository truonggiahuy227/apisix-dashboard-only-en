export class StableEditorScrollState{constructor(o,i,t){this._visiblePosition=o,this._visiblePositionScrollDelta=i,this._cursorPosition=t}static capture(o){let i=null,t=0;if(0!==o.getScrollTop()){const e=o.getVisibleRanges();if(e.length>0){i=e[0].getStartPosition();const s=o.getTopForPosition(i.lineNumber,i.column);t=o.getScrollTop()-s}}return new StableEditorScrollState(i,t,o.getPosition())}restore(o){if(this._visiblePosition){const i=o.getTopForPosition(this._visiblePosition.lineNumber,this._visiblePosition.column);o.setScrollTop(i+this._visiblePositionScrollDelta)}}restoreRelativeVerticalPositionOfCursor(o){const i=o.getPosition();if(!this._cursorPosition||!i)return;const t=o.getTopForLineNumber(i.lineNumber)-o.getTopForLineNumber(this._cursorPosition.lineNumber);o.setScrollTop(o.getScrollTop()+t)}}