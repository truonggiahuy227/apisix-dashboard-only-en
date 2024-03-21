import{isNonEmptyArray}from"../../../../base/common/arrays.js";import{DisposableStore}from"../../../../base/common/lifecycle.js";import{CharacterSet}from"../../../common/core/characterClassifier.js";export class CommitCharacterController{constructor(t,e,s){this._disposables=new DisposableStore,this._disposables.add(e.onDidShow((()=>this._onItem(e.getFocusedItem())))),this._disposables.add(e.onDidFocus(this._onItem,this)),this._disposables.add(e.onDidHide(this.reset,this)),this._disposables.add(t.onWillType((i=>{if(this._active&&!e.isFrozen()){const e=i.charCodeAt(i.length-1);this._active.acceptCharacters.has(e)&&t.getOption(0)&&s(this._active.item)}})))}_onItem(t){if(!t||!isNonEmptyArray(t.item.completion.commitCharacters))return void this.reset();if(this._active&&this._active.item.item===t.item)return;const e=new CharacterSet;for(const s of t.item.completion.commitCharacters)s.length>0&&e.add(s.charCodeAt(0));this._active={acceptCharacters:e,item:t}}reset(){this._active=void 0}dispose(){this._disposables.dispose()}}