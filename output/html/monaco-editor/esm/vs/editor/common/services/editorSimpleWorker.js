var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function l(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(s,l)}u((r=r.apply(e,t||[])).next())}))};import{stringDiff}from"../../../base/common/diff/diff.js";import{globals}from"../../../base/common/platform.js";import{URI}from"../../../base/common/uri.js";import{Position}from"../core/position.js";import{Range}from"../core/range.js";import{DiffComputer}from"../diff/diffComputer.js";import{MirrorTextModel as BaseMirrorModel}from"../model/mirrorTextModel.js";import{ensureValidWordDefinition,getWordAtText}from"../core/wordHelper.js";import{computeLinks}from"../languages/linkComputer.js";import{BasicInplaceReplace}from"../languages/supports/inplaceReplaceSupport.js";import{createMonacoBaseAPI}from"./editorBaseApi.js";import*as types from"../../../base/common/types.js";import{StopWatch}from"../../../base/common/stopwatch.js";import{UnicodeTextModelHighlighter}from"../languages/unicodeTextModelHighlighter.js";export class MirrorModel extends BaseMirrorModel{get uri(){return this._uri}get eol(){return this._eol}getValue(){return this.getText()}getLinesContent(){return this._lines.slice(0)}getLineCount(){return this._lines.length}getLineContent(e){return this._lines[e-1]}getWordAtPosition(e,t){const n=getWordAtText(e.column,ensureValidWordDefinition(t),this._lines[e.lineNumber-1],0);return n?new Range(e.lineNumber,n.startColumn,e.lineNumber,n.endColumn):null}words(e){const t=this._lines,n=this._wordenize.bind(this);let r=0,i="",o=0,s=[];return{*[Symbol.iterator](){while(1)if(o<s.length){const e=i.substring(s[o].start,s[o].end);o+=1,yield e}else{if(!(r<t.length))break;i=t[r],s=n(i,e),o=0,r+=1}}}}getLineWords(e,t){const n=this._lines[e-1],r=this._wordenize(n,t),i=[];for(const o of r)i.push({word:n.substring(o.start,o.end),startColumn:o.start+1,endColumn:o.end+1});return i}_wordenize(e,t){const n=[];let r;t.lastIndex=0;while(r=t.exec(e)){if(0===r[0].length)break;n.push({start:r.index,end:r.index+r[0].length})}return n}getValueInRange(e){if(e=this._validateRange(e),e.startLineNumber===e.endLineNumber)return this._lines[e.startLineNumber-1].substring(e.startColumn-1,e.endColumn-1);const t=this._eol,n=e.startLineNumber-1,r=e.endLineNumber-1,i=[];i.push(this._lines[n].substring(e.startColumn-1));for(let o=n+1;o<r;o++)i.push(this._lines[o]);return i.push(this._lines[r].substring(0,e.endColumn-1)),i.join(t)}offsetAt(e){return e=this._validatePosition(e),this._ensureLineStarts(),this._lineStarts.getPrefixSum(e.lineNumber-2)+(e.column-1)}positionAt(e){e=Math.floor(e),e=Math.max(0,e),this._ensureLineStarts();const t=this._lineStarts.getIndexOf(e),n=this._lines[t.index].length;return{lineNumber:1+t.index,column:1+Math.min(t.remainder,n)}}_validateRange(e){const t=this._validatePosition({lineNumber:e.startLineNumber,column:e.startColumn}),n=this._validatePosition({lineNumber:e.endLineNumber,column:e.endColumn});return t.lineNumber!==e.startLineNumber||t.column!==e.startColumn||n.lineNumber!==e.endLineNumber||n.column!==e.endColumn?{startLineNumber:t.lineNumber,startColumn:t.column,endLineNumber:n.lineNumber,endColumn:n.column}:e}_validatePosition(e){if(!Position.isIPosition(e))throw new Error("bad position");let{lineNumber:t,column:n}=e,r=!1;if(t<1)t=1,n=1,r=!0;else if(t>this._lines.length)t=this._lines.length,n=this._lines[t-1].length+1,r=!0;else{const e=this._lines[t-1].length+1;n<1?(n=1,r=!0):n>e&&(n=e,r=!0)}return r?{lineNumber:t,column:n}:e}}export class EditorSimpleWorker{constructor(e,t){this._host=e,this._models=Object.create(null),this._foreignModuleFactory=t,this._foreignModule=null}dispose(){this._models=Object.create(null)}_getModel(e){return this._models[e]}_getModels(){const e=[];return Object.keys(this._models).forEach((t=>e.push(this._models[t]))),e}acceptNewModel(e){this._models[e.url]=new MirrorModel(URI.parse(e.url),e.lines,e.EOL,e.versionId)}acceptModelChanged(e,t){if(!this._models[e])return;const n=this._models[e];n.onEvents(t)}acceptRemovedModel(e){this._models[e]&&delete this._models[e]}computeUnicodeHighlights(e,t,n){return __awaiter(this,void 0,void 0,(function*(){const r=this._getModel(e);return r?UnicodeTextModelHighlighter.computeUnicodeHighlights(r,t,n):{ranges:[],hasMore:!1,ambiguousCharacterCount:0,invisibleCharacterCount:0,nonBasicAsciiCharacterCount:0}}))}computeDiff(e,t,n,r){return __awaiter(this,void 0,void 0,(function*(){const i=this._getModel(e),o=this._getModel(t);if(!i||!o)return null;const s=i.getLinesContent(),l=o.getLinesContent(),u=new DiffComputer(s,l,{shouldComputeCharChanges:!0,shouldPostProcessCharChanges:!0,shouldIgnoreTrimWhitespace:n,shouldMakePrettyDiff:!0,maxComputationTime:r}),a=u.computeDiff(),m=!(a.changes.length>0)&&this._modelsAreIdentical(i,o);return{quitEarly:a.quitEarly,identical:m,changes:a.changes}}))}_modelsAreIdentical(e,t){const n=e.getLineCount(),r=t.getLineCount();if(n!==r)return!1;for(let i=1;i<=n;i++){const n=e.getLineContent(i),r=t.getLineContent(i);if(n!==r)return!1}return!0}computeMoreMinimalEdits(e,t){return __awaiter(this,void 0,void 0,(function*(){const n=this._getModel(e);if(!n)return t;const r=[];let i;t=t.slice(0).sort(((e,t)=>{if(e.range&&t.range)return Range.compareRangesUsingStarts(e.range,t.range);const n=e.range?0:1,r=t.range?0:1;return n-r}));for(let{range:e,text:o,eol:s}of t){if("number"===typeof s&&(i=s),Range.isEmpty(e)&&!o)continue;const t=n.getValueInRange(e);if(o=o.replace(/\r\n|\n|\r/g,n.eol),t===o)continue;if(Math.max(o.length,t.length)>EditorSimpleWorker._diffLimit){r.push({range:e,text:o});continue}const l=stringDiff(t,o,!1),u=n.offsetAt(Range.lift(e).getStartPosition());for(const e of l){const t=n.positionAt(u+e.originalStart),i=n.positionAt(u+e.originalStart+e.originalLength),s={text:o.substr(e.modifiedStart,e.modifiedLength),range:{startLineNumber:t.lineNumber,startColumn:t.column,endLineNumber:i.lineNumber,endColumn:i.column}};n.getValueInRange(s.range)!==s.text&&r.push(s)}}return"number"===typeof i&&r.push({eol:i,text:"",range:{startLineNumber:0,startColumn:0,endLineNumber:0,endColumn:0}}),r}))}computeLinks(e){return __awaiter(this,void 0,void 0,(function*(){const t=this._getModel(e);return t?computeLinks(t):null}))}textualSuggest(e,t,n,r){return __awaiter(this,void 0,void 0,(function*(){const i=new StopWatch(!0),o=new RegExp(n,r),s=new Set;e:for(let n of e){const e=this._getModel(n);if(e)for(let n of e.words(o))if(n!==t&&isNaN(Number(n))&&(s.add(n),s.size>EditorSimpleWorker._suggestionsLimit))break e}return{words:Array.from(s),duration:i.elapsed()}}))}computeWordRanges(e,t,n,r){return __awaiter(this,void 0,void 0,(function*(){const i=this._getModel(e);if(!i)return Object.create(null);const o=new RegExp(n,r),s=Object.create(null);for(let e=t.startLineNumber;e<t.endLineNumber;e++){const t=i.getLineWords(e,o);for(const n of t){if(!isNaN(Number(n.word)))continue;let t=s[n.word];t||(t=[],s[n.word]=t),t.push({startLineNumber:e,startColumn:n.startColumn,endLineNumber:e,endColumn:n.endColumn})}}return s}))}navigateValueSet(e,t,n,r,i){return __awaiter(this,void 0,void 0,(function*(){const o=this._getModel(e);if(!o)return null;const s=new RegExp(r,i);t.startColumn===t.endColumn&&(t={startLineNumber:t.startLineNumber,startColumn:t.startColumn,endLineNumber:t.endLineNumber,endColumn:t.endColumn+1});const l=o.getValueInRange(t),u=o.getWordAtPosition({lineNumber:t.startLineNumber,column:t.startColumn},s);if(!u)return null;const a=o.getValueInRange(u),m=BasicInplaceReplace.INSTANCE.navigateValueSet(t,l,u,a,n);return m}))}loadForeignModule(e,t,n){const r=(e,t)=>this._host.fhr(e,t),i=types.createProxyObject(n,r),o={host:i,getMirrorModels:()=>this._getModels()};return this._foreignModuleFactory?(this._foreignModule=this._foreignModuleFactory(o,t),Promise.resolve(types.getAllMethodNames(this._foreignModule))):Promise.reject(new Error("Unexpected usage"))}fmr(e,t){if(!this._foreignModule||"function"!==typeof this._foreignModule[e])return Promise.reject(new Error("Missing requestHandler or method: "+e));try{return Promise.resolve(this._foreignModule[e].apply(this._foreignModule,t))}catch(n){return Promise.reject(n)}}}EditorSimpleWorker._diffLimit=1e5,EditorSimpleWorker._suggestionsLimit=1e4;export function create(e){return new EditorSimpleWorker(e,null)}"function"===typeof importScripts&&(globals.monaco=createMonacoBaseAPI());