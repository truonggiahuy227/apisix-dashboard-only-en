import{Emitter}from"../../../../../base/common/event.js";import{Disposable}from"../../../../../base/common/lifecycle.js";import{Range}from"../../../core/range.js";import{BracketInfo,BracketPairWithMinIndentationInfo}from"../../../textModelBracketPairs.js";import{TextEditInfo}from"./beforeEditPositionMapper.js";import{LanguageAgnosticBracketTokens}from"./brackets.js";import{lengthAdd,lengthGreaterThanEqual,lengthLessThanEqual,lengthOfString,lengthsToRange,lengthZero,positionToLength,toLength}from"./length.js";import{parseDocument}from"./parser.js";import{DenseKeyProvider}from"./smallImmutableSet.js";import{FastTokenizer,TextBufferTokenizer}from"./tokenizer.js";export class BracketPairsTree extends Disposable{constructor(t,e){if(super(),this.textModel=t,this.getLanguageConfiguration=e,this.didChangeEmitter=new Emitter,this.denseKeyProvider=new DenseKeyProvider,this.brackets=new LanguageAgnosticBracketTokens(this.denseKeyProvider,this.getLanguageConfiguration),this.onDidChange=this.didChangeEmitter.event,this._register(t.onBackgroundTokenizationStateChanged((()=>{if(2===t.backgroundTokenizationState){const t=void 0===this.initialAstWithoutTokens;this.initialAstWithoutTokens=void 0,t||this.didChangeEmitter.fire()}}))),this._register(t.onDidChangeTokens((({ranges:t})=>{const e=t.map((t=>new TextEditInfo(toLength(t.fromLineNumber-1,0),toLength(t.toLineNumber,0),toLength(t.toLineNumber-t.fromLineNumber+1,0))));this.astWithTokens=this.parseDocumentFromTextBuffer(e,this.astWithTokens,!1),this.initialAstWithoutTokens||this.didChangeEmitter.fire()}))),0===t.backgroundTokenizationState){const t=this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId()),e=new FastTokenizer(this.textModel.getValue(),t);this.initialAstWithoutTokens=parseDocument(e,[],void 0,!0),this.astWithTokens=this.initialAstWithoutTokens}else 2===t.backgroundTokenizationState?(this.initialAstWithoutTokens=void 0,this.astWithTokens=this.parseDocumentFromTextBuffer([],void 0,!1)):1===t.backgroundTokenizationState&&(this.initialAstWithoutTokens=this.parseDocumentFromTextBuffer([],void 0,!0),this.astWithTokens=this.initialAstWithoutTokens)}didLanguageChange(t){return this.brackets.didLanguageChange(t)}handleContentChanged(t){const e=t.changes.map((t=>{const e=Range.lift(t.range);return new TextEditInfo(positionToLength(e.getStartPosition()),positionToLength(e.getEndPosition()),lengthOfString(t.text))})).reverse();this.astWithTokens=this.parseDocumentFromTextBuffer(e,this.astWithTokens,!1),this.initialAstWithoutTokens&&(this.initialAstWithoutTokens=this.parseDocumentFromTextBuffer(e,this.initialAstWithoutTokens,!1))}parseDocumentFromTextBuffer(t,e,n){const i=!1,o=i?null===e||void 0===e?void 0:e.deepClone():e,s=new TextBufferTokenizer(this.textModel,this.brackets),a=parseDocument(s,t,o,n);return a}getBracketsInRange(t){const e=toLength(t.startLineNumber-1,t.startColumn-1),n=toLength(t.endLineNumber-1,t.endColumn-1),i=new Array,o=this.initialAstWithoutTokens||this.astWithTokens;return collectBrackets(o,lengthZero,o.length,e,n,i),i}getBracketPairsInRange(t,e){const n=new Array,i=positionToLength(t.getStartPosition()),o=positionToLength(t.getEndPosition()),s=this.initialAstWithoutTokens||this.astWithTokens,a=new CollectBracketPairsContext(n,e,this.textModel);return collectBracketPairs(s,lengthZero,s.length,i,o,a),n}}function collectBrackets(t,e,n,i,o,s,a=0){if(1===t.kind){const t=lengthsToRange(e,n);s.push(new BracketInfo(t,a-1,!1))}else if(3===t.kind){const t=lengthsToRange(e,n);s.push(new BracketInfo(t,a-1,!0))}else if(4===t.kind)for(const r of t.children)n=lengthAdd(e,r.length),lengthLessThanEqual(e,o)&&lengthGreaterThanEqual(n,i)&&collectBrackets(r,e,n,i,o,s,a),e=n;else if(2===t.kind){a++;{const r=t.openingBracket;n=lengthAdd(e,r.length),lengthLessThanEqual(e,o)&&lengthGreaterThanEqual(n,i)&&collectBrackets(r,e,n,i,o,s,a),e=n}if(t.child){const r=t.child;n=lengthAdd(e,r.length),lengthLessThanEqual(e,o)&&lengthGreaterThanEqual(n,i)&&collectBrackets(r,e,n,i,o,s,a),e=n}if(t.closingBracket){const r=t.closingBracket;n=lengthAdd(e,r.length),lengthLessThanEqual(e,o)&&lengthGreaterThanEqual(n,i)&&collectBrackets(r,e,n,i,o,s,a),e=n}}}class CollectBracketPairsContext{constructor(t,e,n){this.result=t,this.includeMinIndentation=e,this.textModel=n}}function collectBracketPairs(t,e,n,i,o,s,a=0){var r;if(2===t.kind){const i=lengthAdd(e,t.openingBracket.length);let o=-1;s.includeMinIndentation&&(o=t.computeMinIndentation(e,s.textModel)),s.result.push(new BracketPairWithMinIndentationInfo(lengthsToRange(e,n),lengthsToRange(e,i),t.closingBracket?lengthsToRange(lengthAdd(i,(null===(r=t.child)||void 0===r?void 0:r.length)||lengthZero),n):void 0,a,o)),a++}let h=e;for(const l of t.children){const t=h;h=lengthAdd(h,l.length),lengthLessThanEqual(t,o)&&lengthLessThanEqual(i,h)&&collectBracketPairs(l,t,h,i,o,s,a)}}