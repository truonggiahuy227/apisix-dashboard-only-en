import{Range}from"../../../common/core/range.js";import{MinimapPosition,OverviewRulerLane}from"../../../common/model.js";import{ModelDecorationOptions}from"../../../common/model/textModel.js";import{minimapFindMatch,overviewRulerFindMatchForeground}from"../../../../platform/theme/common/colorRegistry.js";import{themeColorFromId}from"../../../../platform/theme/common/themeService.js";export class FindDecorations{constructor(e){this._editor=e,this._decorations=[],this._overviewRulerApproximateDecorations=[],this._findScopeDecorationIds=[],this._rangeHighlightDecorationId=null,this._highlightedDecorationId=null,this._startPosition=this._editor.getPosition()}dispose(){this._editor.deltaDecorations(this._allDecorations(),[]),this._decorations=[],this._overviewRulerApproximateDecorations=[],this._findScopeDecorationIds=[],this._rangeHighlightDecorationId=null,this._highlightedDecorationId=null}reset(){this._decorations=[],this._overviewRulerApproximateDecorations=[],this._findScopeDecorationIds=[],this._rangeHighlightDecorationId=null,this._highlightedDecorationId=null}getCount(){return this._decorations.length}getFindScope(){return this._findScopeDecorationIds[0]?this._editor.getModel().getDecorationRange(this._findScopeDecorationIds[0]):null}getFindScopes(){if(this._findScopeDecorationIds.length){const e=this._findScopeDecorationIds.map((e=>this._editor.getModel().getDecorationRange(e))).filter((e=>!!e));if(e.length)return e}return null}getStartPosition(){return this._startPosition}setStartPosition(e){this._startPosition=e,this.setCurrentFindMatch(null)}_getDecorationIndex(e){const i=this._decorations.indexOf(e);return i>=0?i+1:1}getCurrentMatchesPosition(e){let i=this._editor.getModel().getDecorationsInRange(e);for(const t of i){const e=t.options;if(e===FindDecorations._FIND_MATCH_DECORATION||e===FindDecorations._CURRENT_FIND_MATCH_DECORATION)return this._getDecorationIndex(t.id)}return 0}setCurrentFindMatch(e){let i=null,t=0;if(e)for(let o=0,n=this._decorations.length;o<n;o++){let n=this._editor.getModel().getDecorationRange(this._decorations[o]);if(e.equalsRange(n)){i=this._decorations[o],t=o+1;break}}return null===this._highlightedDecorationId&&null===i||this._editor.changeDecorations((e=>{if(null!==this._highlightedDecorationId&&(e.changeDecorationOptions(this._highlightedDecorationId,FindDecorations._FIND_MATCH_DECORATION),this._highlightedDecorationId=null),null!==i&&(this._highlightedDecorationId=i,e.changeDecorationOptions(this._highlightedDecorationId,FindDecorations._CURRENT_FIND_MATCH_DECORATION)),null!==this._rangeHighlightDecorationId&&(e.removeDecoration(this._rangeHighlightDecorationId),this._rangeHighlightDecorationId=null),null!==i){let t=this._editor.getModel().getDecorationRange(i);if(t.startLineNumber!==t.endLineNumber&&1===t.endColumn){let e=t.endLineNumber-1,i=this._editor.getModel().getLineMaxColumn(e);t=new Range(t.startLineNumber,t.startColumn,e,i)}this._rangeHighlightDecorationId=e.addDecoration(t,FindDecorations._RANGE_HIGHLIGHT_DECORATION)}})),t}set(e,i){this._editor.changeDecorations((t=>{let o=FindDecorations._FIND_MATCH_DECORATION,n=[];if(e.length>1e3){o=FindDecorations._FIND_MATCH_NO_OVERVIEW_DECORATION;const i=this._editor.getModel().getLineCount(),t=this._editor.getLayoutInfo().height,r=t/i,s=Math.max(2,Math.ceil(3/r));let a=e[0].range.startLineNumber,h=e[0].range.endLineNumber;for(let o=1,c=e.length;o<c;o++){const i=e[o].range;h+s>=i.startLineNumber?i.endLineNumber>h&&(h=i.endLineNumber):(n.push({range:new Range(a,1,h,1),options:FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION}),a=i.startLineNumber,h=i.endLineNumber)}n.push({range:new Range(a,1,h,1),options:FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION})}let r=new Array(e.length);for(let i=0,s=e.length;i<s;i++)r[i]={range:e[i].range,options:o};this._decorations=t.deltaDecorations(this._decorations,r),this._overviewRulerApproximateDecorations=t.deltaDecorations(this._overviewRulerApproximateDecorations,n),this._rangeHighlightDecorationId&&(t.removeDecoration(this._rangeHighlightDecorationId),this._rangeHighlightDecorationId=null),this._findScopeDecorationIds.length&&(this._findScopeDecorationIds.forEach((e=>t.removeDecoration(e))),this._findScopeDecorationIds=[]),(null===i||void 0===i?void 0:i.length)&&(this._findScopeDecorationIds=i.map((e=>t.addDecoration(e,FindDecorations._FIND_SCOPE_DECORATION))))}))}matchBeforePosition(e){if(0===this._decorations.length)return null;for(let i=this._decorations.length-1;i>=0;i--){let t=this._decorations[i],o=this._editor.getModel().getDecorationRange(t);if(o&&!(o.endLineNumber>e.lineNumber)){if(o.endLineNumber<e.lineNumber)return o;if(!(o.endColumn>e.column))return o}}return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length-1])}matchAfterPosition(e){if(0===this._decorations.length)return null;for(let i=0,t=this._decorations.length;i<t;i++){let t=this._decorations[i],o=this._editor.getModel().getDecorationRange(t);if(o&&!(o.startLineNumber<e.lineNumber)){if(o.startLineNumber>e.lineNumber)return o;if(!(o.startColumn<e.column))return o}}return this._editor.getModel().getDecorationRange(this._decorations[0])}_allDecorations(){let e=[];return e=e.concat(this._decorations),e=e.concat(this._overviewRulerApproximateDecorations),this._findScopeDecorationIds.length&&e.push(...this._findScopeDecorationIds),this._rangeHighlightDecorationId&&e.push(this._rangeHighlightDecorationId),e}}FindDecorations._CURRENT_FIND_MATCH_DECORATION=ModelDecorationOptions.register({description:"current-find-match",stickiness:1,zIndex:13,className:"currentFindMatch",showIfCollapsed:!0,overviewRuler:{color:themeColorFromId(overviewRulerFindMatchForeground),position:OverviewRulerLane.Center},minimap:{color:themeColorFromId(minimapFindMatch),position:MinimapPosition.Inline}}),FindDecorations._FIND_MATCH_DECORATION=ModelDecorationOptions.register({description:"find-match",stickiness:1,zIndex:10,className:"findMatch",showIfCollapsed:!0,overviewRuler:{color:themeColorFromId(overviewRulerFindMatchForeground),position:OverviewRulerLane.Center},minimap:{color:themeColorFromId(minimapFindMatch),position:MinimapPosition.Inline}}),FindDecorations._FIND_MATCH_NO_OVERVIEW_DECORATION=ModelDecorationOptions.register({description:"find-match-no-overview",stickiness:1,className:"findMatch",showIfCollapsed:!0}),FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION=ModelDecorationOptions.register({description:"find-match-only-overview",stickiness:1,overviewRuler:{color:themeColorFromId(overviewRulerFindMatchForeground),position:OverviewRulerLane.Center}}),FindDecorations._RANGE_HIGHLIGHT_DECORATION=ModelDecorationOptions.register({description:"find-range-highlight",stickiness:1,className:"rangeHighlight",isWholeLine:!0}),FindDecorations._FIND_SCOPE_DECORATION=ModelDecorationOptions.register({description:"find-scope",className:"findScope",isWholeLine:!0});