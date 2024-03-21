import{CursorColumns}from"../../../core/cursorColumns.js";import{lengthAdd,lengthGetLineCount,lengthToObj,lengthZero}from"./length.js";import{SmallImmutableSet}from"./smallImmutableSet.js";class BaseAstNode{constructor(t){this._length=t}get length(){return this._length}}export class PairAstNode extends BaseAstNode{constructor(t,e,i,n,s){super(t),this.openingBracket=e,this.child=i,this.closingBracket=n,this.missingOpeningBracketIds=s}static create(t,e,i){let n=t.length;return e&&(n=lengthAdd(n,e.length)),i&&(n=lengthAdd(n,i.length)),new PairAstNode(n,t,e,i,e?e.missingOpeningBracketIds:SmallImmutableSet.getEmpty())}get kind(){return 2}get listHeight(){return 0}get childrenLength(){return 3}getChild(t){switch(t){case 0:return this.openingBracket;case 1:return this.child;case 2:return this.closingBracket}throw new Error("Invalid child index")}get children(){const t=new Array;return t.push(this.openingBracket),this.child&&t.push(this.child),this.closingBracket&&t.push(this.closingBracket),t}canBeReused(t){return null!==this.closingBracket&&!t.intersects(this.missingOpeningBracketIds)}deepClone(){return new PairAstNode(this.length,this.openingBracket.deepClone(),this.child&&this.child.deepClone(),this.closingBracket&&this.closingBracket.deepClone(),this.missingOpeningBracketIds)}computeMinIndentation(t,e){return this.child?this.child.computeMinIndentation(lengthAdd(t,this.openingBracket.length),e):Number.MAX_SAFE_INTEGER}}export class ListAstNode extends BaseAstNode{constructor(t,e,i){super(t),this.listHeight=e,this._missingOpeningBracketIds=i,this.cachedMinIndentation=-1}static create23(t,e,i,n=!1){let s=t.length,r=t.missingOpeningBracketIds;if(t.listHeight!==e.listHeight)throw new Error("Invalid list heights");if(s=lengthAdd(s,e.length),r=r.merge(e.missingOpeningBracketIds),i){if(t.listHeight!==i.listHeight)throw new Error("Invalid list heights");s=lengthAdd(s,i.length),r=r.merge(i.missingOpeningBracketIds)}return n?new Immutable23ListAstNode(s,t.listHeight+1,t,e,i,r):new TwoThreeListAstNode(s,t.listHeight+1,t,e,i,r)}static getEmpty(){return new ImmutableArrayListAstNode(lengthZero,0,[],SmallImmutableSet.getEmpty())}get kind(){return 4}get missingOpeningBracketIds(){return this._missingOpeningBracketIds}throwIfImmutable(){}makeLastElementMutable(){this.throwIfImmutable();const t=this.childrenLength;if(0===t)return;const e=this.getChild(t-1),i=4===e.kind?e.toMutable():e;return e!==i&&this.setChild(t-1,i),i}makeFirstElementMutable(){this.throwIfImmutable();const t=this.childrenLength;if(0===t)return;const e=this.getChild(0),i=4===e.kind?e.toMutable():e;return e!==i&&this.setChild(0,i),i}canBeReused(t){if(t.intersects(this.missingOpeningBracketIds))return!1;let e,i=this;while(4===i.kind&&(e=i.childrenLength)>0)i=i.getChild(e-1);return i.canBeReused(t)}handleChildrenChanged(){this.throwIfImmutable();const t=this.childrenLength;let e=this.getChild(0).length,i=this.getChild(0).missingOpeningBracketIds;for(let n=1;n<t;n++){const t=this.getChild(n);e=lengthAdd(e,t.length),i=i.merge(t.missingOpeningBracketIds)}this._length=e,this._missingOpeningBracketIds=i,this.cachedMinIndentation=-1}computeMinIndentation(t,e){if(-1!==this.cachedMinIndentation)return this.cachedMinIndentation;let i=Number.MAX_SAFE_INTEGER,n=t;for(let s=0;s<this.childrenLength;s++){const t=this.getChild(s);t&&(i=Math.min(i,t.computeMinIndentation(n,e)),n=lengthAdd(n,t.length))}return this.cachedMinIndentation=i,i}}class TwoThreeListAstNode extends ListAstNode{constructor(t,e,i,n,s,r){super(t,e,r),this._item1=i,this._item2=n,this._item3=s}get childrenLength(){return null!==this._item3?3:2}getChild(t){switch(t){case 0:return this._item1;case 1:return this._item2;case 2:return this._item3}throw new Error("Invalid child index")}setChild(t,e){switch(t){case 0:return void(this._item1=e);case 1:return void(this._item2=e);case 2:return void(this._item3=e)}throw new Error("Invalid child index")}get children(){return this._item3?[this._item1,this._item2,this._item3]:[this._item1,this._item2]}get item1(){return this._item1}get item2(){return this._item2}get item3(){return this._item3}deepClone(){return new TwoThreeListAstNode(this.length,this.listHeight,this._item1.deepClone(),this._item2.deepClone(),this._item3?this._item3.deepClone():null,this.missingOpeningBracketIds)}appendChildOfSameHeight(t){if(this._item3)throw new Error("Cannot append to a full (2,3) tree node");this.throwIfImmutable(),this._item3=t,this.handleChildrenChanged()}unappendChild(){if(!this._item3)throw new Error("Cannot remove from a non-full (2,3) tree node");this.throwIfImmutable();const t=this._item3;return this._item3=null,this.handleChildrenChanged(),t}prependChildOfSameHeight(t){if(this._item3)throw new Error("Cannot prepend to a full (2,3) tree node");this.throwIfImmutable(),this._item3=this._item2,this._item2=this._item1,this._item1=t,this.handleChildrenChanged()}unprependChild(){if(!this._item3)throw new Error("Cannot remove from a non-full (2,3) tree node");this.throwIfImmutable();const t=this._item1;return this._item1=this._item2,this._item2=this._item3,this._item3=null,this.handleChildrenChanged(),t}toMutable(){return this}}class Immutable23ListAstNode extends TwoThreeListAstNode{toMutable(){return new TwoThreeListAstNode(this.length,this.listHeight,this.item1,this.item2,this.item3,this.missingOpeningBracketIds)}throwIfImmutable(){throw new Error("this instance is immutable")}}class ArrayListAstNode extends ListAstNode{constructor(t,e,i,n){super(t,e,n),this._children=i}get childrenLength(){return this._children.length}getChild(t){return this._children[t]}setChild(t,e){this._children[t]=e}get children(){return this._children}deepClone(){const t=new Array(this._children.length);for(let e=0;e<this._children.length;e++)t[e]=this._children[e].deepClone();return new ArrayListAstNode(this.length,this.listHeight,t,this.missingOpeningBracketIds)}appendChildOfSameHeight(t){this.throwIfImmutable(),this._children.push(t),this.handleChildrenChanged()}unappendChild(){this.throwIfImmutable();const t=this._children.pop();return this.handleChildrenChanged(),t}prependChildOfSameHeight(t){this.throwIfImmutable(),this._children.unshift(t),this.handleChildrenChanged()}unprependChild(){this.throwIfImmutable();const t=this._children.shift();return this.handleChildrenChanged(),t}toMutable(){return this}}class ImmutableArrayListAstNode extends ArrayListAstNode{toMutable(){return new ArrayListAstNode(this.length,this.listHeight,[...this.children],this.missingOpeningBracketIds)}throwIfImmutable(){throw new Error("this instance is immutable")}}const emptyArray=[];class ImmutableLeafAstNode extends BaseAstNode{get listHeight(){return 0}get childrenLength(){return 0}getChild(t){return null}get children(){return emptyArray}deepClone(){return this}}export class TextAstNode extends ImmutableLeafAstNode{get kind(){return 0}get missingOpeningBracketIds(){return SmallImmutableSet.getEmpty()}canBeReused(t){return!0}computeMinIndentation(t,e){const i=lengthToObj(t),n=(0===i.columnCount?i.lineCount:i.lineCount+1)+1,s=lengthGetLineCount(lengthAdd(t,this.length))+1;let r=Number.MAX_SAFE_INTEGER;for(let h=n;h<=s;h++){const t=e.getLineFirstNonWhitespaceColumn(h),i=e.getLineContent(h);if(0===t)continue;const n=CursorColumns.visibleColumnFromColumn(i,t,e.getOptions().tabSize);r=Math.min(r,n)}return r}}export class BracketAstNode extends ImmutableLeafAstNode{constructor(t,e,i){super(t),this.languageId=e,this.bracketIds=i}static create(t,e,i){const n=new BracketAstNode(t,e,i);return n}get kind(){return 1}get missingOpeningBracketIds(){return SmallImmutableSet.getEmpty()}canBeReused(t){return!1}computeMinIndentation(t,e){return Number.MAX_SAFE_INTEGER}}export class InvalidBracketAstNode extends ImmutableLeafAstNode{constructor(t,e){super(e),this.missingOpeningBracketIds=t}get kind(){return 3}canBeReused(t){return!t.intersects(this.missingOpeningBracketIds)}computeMinIndentation(t,e){return Number.MAX_SAFE_INTEGER}}