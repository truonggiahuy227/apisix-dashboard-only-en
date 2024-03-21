define("vs/language/html/htmlMode",["require","require"],(e=>{var t=(()=>{var t=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=e=>n(e,"__esModule",{value:!0}),u=(t=>"undefined"!=typeof e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,n)=>("undefined"!=typeof e?e:t)[n]}):t)((function(t){if("undefined"!=typeof e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),d=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},g=(e,t,o,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of i(t))!a.call(e,u)&&(o||"default"!==u)&&n(e,u,{get:()=>t[u],enumerable:!(s=r(t,u))||s.enumerable});return e},l=(e,r)=>g(s(n(null!=e?t(o(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),f=(e=>(t,n)=>e&&e.get(t)||(n=g(s({}),t,1),e&&e.set(t,n),n))("undefined"!=typeof WeakMap?new WeakMap:0),h=c(((e,t)=>{var n=l(u("vs/editor/editor.api"));t.exports=n})),p={};d(p,{CompletionAdapter:()=>Re,DefinitionAdapter:()=>Ke,DiagnosticsAdapter:()=>Ie,DocumentColorAdapter:()=>et,DocumentFormattingEditProvider:()=>Je,DocumentHighlightAdapter:()=>Ve,DocumentLinkAdapter:()=>Ge,DocumentRangeFormattingEditProvider:()=>Ye,DocumentSymbolAdapter:()=>$e,FoldingRangeAdapter:()=>tt,HoverAdapter:()=>Oe,ReferenceAdapter:()=>Xe,RenameAdapter:()=>qe,SelectionRangeAdapter:()=>rt,WorkerManager:()=>z,fromPosition:()=>Pe,fromRange:()=>Te,setupMode:()=>at,setupMode1:()=>ot,toRange:()=>De,toTextEdit:()=>Fe});var m={};g(m,l(h()));var v,_,w,b,k,y,E,x,C,I,A,S,R,P,T,D,M,L,F,j,O,N,W,U,V,H,K=12e4,z=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>K&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=m.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(v||(v={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(_||(_={})),function(e){function t(e,t){return e===Number.MAX_VALUE&&(e=_.MAX_VALUE),t===Number.MAX_VALUE&&(t=_.MAX_VALUE),{line:e,character:t}}function n(e){var t=e;return xe.objectLiteral(t)&&xe.uinteger(t.line)&&xe.uinteger(t.character)}e.create=t,e.is=n}(w||(w={})),function(e){function t(e,t,n,r){if(xe.uinteger(e)&&xe.uinteger(t)&&xe.uinteger(n)&&xe.uinteger(r))return{start:w.create(e,t),end:w.create(n,r)};if(w.is(e)&&w.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")}function n(e){var t=e;return xe.objectLiteral(t)&&w.is(t.start)&&w.is(t.end)}e.create=t,e.is=n}(b||(b={})),function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return xe.defined(t)&&b.is(t.range)&&(xe.string(t.uri)||xe.undefined(t.uri))}e.create=t,e.is=n}(k||(k={})),function(e){function t(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}}function n(e){var t=e;return xe.defined(t)&&b.is(t.targetRange)&&xe.string(t.targetUri)&&(b.is(t.targetSelectionRange)||xe.undefined(t.targetSelectionRange))&&(b.is(t.originSelectionRange)||xe.undefined(t.originSelectionRange))}e.create=t,e.is=n}(y||(y={})),function(e){function t(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}}function n(e){var t=e;return xe.numberRange(t.red,0,1)&&xe.numberRange(t.green,0,1)&&xe.numberRange(t.blue,0,1)&&xe.numberRange(t.alpha,0,1)}e.create=t,e.is=n}(E||(E={})),function(e){function t(e,t){return{range:e,color:t}}function n(e){var t=e;return b.is(t.range)&&E.is(t.color)}e.create=t,e.is=n}(x||(x={})),function(e){function t(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}}function n(e){var t=e;return xe.string(t.label)&&(xe.undefined(t.textEdit)||L.is(t))&&(xe.undefined(t.additionalTextEdits)||xe.typedArray(t.additionalTextEdits,L.is))}e.create=t,e.is=n}(C||(C={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(I||(I={})),function(e){function t(e,t,n,r,i){var o={startLine:e,endLine:t};return xe.defined(n)&&(o.startCharacter=n),xe.defined(r)&&(o.endCharacter=r),xe.defined(i)&&(o.kind=i),o}function n(e){var t=e;return xe.uinteger(t.startLine)&&xe.uinteger(t.startLine)&&(xe.undefined(t.startCharacter)||xe.uinteger(t.startCharacter))&&(xe.undefined(t.endCharacter)||xe.uinteger(t.endCharacter))&&(xe.undefined(t.kind)||xe.string(t.kind))}e.create=t,e.is=n}(A||(A={})),function(e){function t(e,t){return{location:e,message:t}}function n(e){var t=e;return xe.defined(t)&&k.is(t.location)&&xe.string(t.message)}e.create=t,e.is=n}(S||(S={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(R||(R={})),function(e){e.Unnecessary=1,e.Deprecated=2}(P||(P={})),function(e){function t(e){var t=e;return null!=t&&xe.string(t.href)}e.is=t}(T||(T={})),function(e){function t(e,t,n,r,i,o){var a={range:e,message:t};return xe.defined(n)&&(a.severity=n),xe.defined(r)&&(a.code=r),xe.defined(i)&&(a.source=i),xe.defined(o)&&(a.relatedInformation=o),a}function n(e){var t,n=e;return xe.defined(n)&&b.is(n.range)&&xe.string(n.message)&&(xe.number(n.severity)||xe.undefined(n.severity))&&(xe.integer(n.code)||xe.string(n.code)||xe.undefined(n.code))&&(xe.undefined(n.codeDescription)||xe.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(xe.string(n.source)||xe.undefined(n.source))&&(xe.undefined(n.relatedInformation)||xe.typedArray(n.relatedInformation,S.is))}e.create=t,e.is=n}(D||(D={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return xe.defined(n)&&n.length>0&&(i.arguments=n),i}function n(e){var t=e;return xe.defined(t)&&xe.string(t.title)&&xe.string(t.command)}e.create=t,e.is=n}(M||(M={})),function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}function i(e){var t=e;return xe.objectLiteral(t)&&xe.string(t.newText)&&b.is(t.range)}e.replace=t,e.insert=n,e.del=r,e.is=i}(L||(L={})),function(e){function t(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r}function n(e){var t=e;return void 0!==t&&xe.objectLiteral(t)&&xe.string(t.label)&&(xe.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(xe.string(t.description)||void 0===t.description)}e.create=t,e.is=n}(F||(F={})),function(e){function t(e){var t=e;return"string"==typeof t}e.is=t}(j||(j={})),function(e){function t(e,t,n){return{range:e,newText:t,annotationId:n}}function n(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}}function r(e,t){return{range:e,newText:"",annotationId:t}}function i(e){var t=e;return L.is(t)&&(F.is(t.annotationId)||j.is(t.annotationId))}e.replace=t,e.insert=n,e.del=r,e.is=i}(O||(O={})),function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return xe.defined(t)&&B.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(N||(N={})),function(e){function t(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r}function n(e){var t=e;return t&&"create"===t.kind&&xe.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||xe.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||xe.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||j.is(t.annotationId))}e.create=t,e.is=n}(W||(W={})),function(e){function t(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i}function n(e){var t=e;return t&&"rename"===t.kind&&xe.string(t.oldUri)&&xe.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||xe.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||xe.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||j.is(t.annotationId))}e.create=t,e.is=n}(U||(U={})),function(e){function t(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r}function n(e){var t=e;return t&&"delete"===t.kind&&xe.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||xe.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||xe.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||j.is(t.annotationId))}e.create=t,e.is=n}(V||(V={})),function(e){function t(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return xe.string(e.kind)?W.is(e)||U.is(e)||V.is(e):N.is(e)})))}e.is=t}(H||(H={}));var X,q,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,ge,le,fe,he,pe,me,ve,_e,we,be,ke,ye=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=L.insert(e,t):j.is(n)?(i=n,r=O.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=O.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=L.replace(e,t):j.is(n)?(i=n,r=O.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=O.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=L.del(e):j.is(t)?(r=t,n=O.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=O.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),Ee=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(j.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Ee(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(N.is(e)){var n=new ye(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new ye(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(B.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new ye(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");n=this._textEditChanges[e];if(!n){r=[];this._workspaceEdit.changes[e]=r,n=new ye(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new Ee,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(F.is(t)||j.is(t)?r=t:n=t,void 0===r?i=W.create(e,n):(o=j.is(r)?r:this._changeAnnotations.manage(r),i=W.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(F.is(n)||j.is(n)?i=n:r=n,void 0===i?o=U.create(e,t,r):(a=j.is(i)?i:this._changeAnnotations.manage(i),o=U.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(F.is(t)||j.is(t)?r=t:n=t,void 0===r?i=V.create(e,n):(o=j.is(r)?r:this._changeAnnotations.manage(r),i=V.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(e){function t(e){return{uri:e}}function n(e){var t=e;return xe.defined(t)&&xe.string(t.uri)}e.create=t,e.is=n})(X||(X={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return xe.defined(t)&&xe.string(t.uri)&&xe.integer(t.version)}e.create=t,e.is=n}(q||(q={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return xe.defined(t)&&xe.string(t.uri)&&(null===t.version||xe.integer(t.version))}e.create=t,e.is=n}(B||(B={})),function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return xe.defined(t)&&xe.string(t.uri)&&xe.string(t.languageId)&&xe.integer(t.version)&&xe.string(t.text)}e.create=t,e.is=n}($||($={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(Q||(Q={})),function(e){function t(t){var n=t;return n===e.PlainText||n===e.Markdown}e.is=t}(Q||(Q={})),function(e){function t(e){var t=e;return xe.objectLiteral(e)&&Q.is(t.kind)&&xe.string(t.value)}e.is=t}(G||(G={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(J||(J={})),function(e){e.PlainText=1,e.Snippet=2}(Y||(Y={})),function(e){e.Deprecated=1}(Z||(Z={})),function(e){function t(e,t,n){return{newText:e,insert:t,replace:n}}function n(e){var t=e;return t&&xe.string(t.newText)&&b.is(t.insert)&&b.is(t.replace)}e.create=t,e.is=n}(ee||(ee={})),function(e){e.asIs=1,e.adjustIndentation=2}(te||(te={})),function(e){function t(e){return{label:e}}e.create=t}(ne||(ne={})),function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(re||(re={})),function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function n(e){var t=e;return xe.string(t)||xe.objectLiteral(t)&&xe.string(t.language)&&xe.string(t.value)}e.fromPlainText=t,e.is=n}(ie||(ie={})),function(e){function t(e){var t=e;return!!t&&xe.objectLiteral(t)&&(G.is(t.contents)||ie.is(t.contents)||xe.typedArray(t.contents,ie.is))&&(void 0===e.range||b.is(e.range))}e.is=t}(oe||(oe={})),function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(ae||(ae={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return xe.defined(t)&&(i.documentation=t),xe.defined(n)?i.parameters=n:i.parameters=[],i}e.create=t}(se||(se={})),function(e){e.Text=1,e.Read=2,e.Write=3}(ue||(ue={})),function(e){function t(e,t){var n={range:e};return xe.number(t)&&(n.kind=t),n}e.create=t}(ce||(ce={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(de||(de={})),function(e){e.Deprecated=1}(ge||(ge={})),function(e){function t(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=t}(le||(le={})),function(e){function t(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function n(e){var t=e;return t&&xe.string(t.name)&&xe.number(t.kind)&&b.is(t.range)&&b.is(t.selectionRange)&&(void 0===t.detail||xe.string(t.detail))&&(void 0===t.deprecated||xe.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}e.create=t,e.is=n}(fe||(fe={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(he||(he={})),function(e){function t(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n}function n(e){var t=e;return xe.defined(t)&&xe.typedArray(t.diagnostics,D.is)&&(void 0===t.only||xe.typedArray(t.only,xe.string))}e.create=t,e.is=n}(pe||(pe={})),function(e){function t(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):M.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r}function n(e){var t=e;return t&&xe.string(t.title)&&(void 0===t.diagnostics||xe.typedArray(t.diagnostics,D.is))&&(void 0===t.kind||xe.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||M.is(t.command))&&(void 0===t.isPreferred||xe.boolean(t.isPreferred))&&(void 0===t.edit||H.is(t.edit))}e.create=t,e.is=n}(me||(me={})),function(e){function t(e,t){var n={range:e};return xe.defined(t)&&(n.data=t),n}function n(e){var t=e;return xe.defined(t)&&b.is(t.range)&&(xe.undefined(t.command)||M.is(t.command))}e.create=t,e.is=n}(ve||(ve={})),function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return xe.defined(t)&&xe.uinteger(t.tabSize)&&xe.boolean(t.insertSpaces)}e.create=t,e.is=n}(_e||(_e={})),function(e){function t(e,t,n){return{range:e,target:t,data:n}}function n(e){var t=e;return xe.defined(t)&&b.is(t.range)&&(xe.undefined(t.target)||xe.string(t.target))}e.create=t,e.is=n}(we||(we={})),function(e){function t(e,t){return{range:e,parent:t}}function n(t){var n=t;return void 0!==n&&b.is(n.range)&&(void 0===n.parent||e.is(n.parent))}e.create=t,e.is=n}(be||(be={})),function(e){function t(e,t,n,r){return new Ce(e,t,n,r)}function n(e){var t=e;return!!(xe.defined(t)&&xe.string(t.uri)&&(xe.undefined(t.languageId)||xe.string(t.languageId))&&xe.uinteger(t.lineCount)&&xe.func(t.getText)&&xe.func(t.positionAt)&&xe.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=i(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=n.length,a=r.length-1;a>=0;a--){var s=r[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");n=n.substring(0,u)+s.newText+n.substring(c,n.length),o=u}return n}function i(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),o=e.slice(n);i(r,t),i(o,t);for(var a=0,s=0,u=0;a<r.length&&s<o.length;){var c=t(r[a],o[s]);e[u++]=c<=0?r[a++]:o[s++]}for(;a<r.length;)e[u++]=r[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=t,e.is=n,e.applyEdits=r}(ke||(ke={}));var xe,Ce=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return w.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return w.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();(function(e){var t=Object.prototype.toString;function n(e){return typeof e<"u"}function r(e){return typeof e>"u"}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===t.call(e)}function a(e){return"[object Number]"===t.call(e)}function s(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r}function u(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647}function c(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647}function d(e){return"[object Function]"===t.call(e)}function g(e){return null!==e&&"object"==typeof e}function l(e,t){return Array.isArray(e)&&e.every(t)}e.defined=n,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.numberRange=s,e.integer=u,e.uinteger=c,e.func=d,e.objectLiteral=g,e.typedArray=l})(xe||(xe={}));var Ie=class{constructor(e,t,n){this._languageId=e,this._worker=t;let r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{m.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(m.editor.onDidCreateModel(r)),this._disposables.push(m.editor.onWillDisposeModel(i)),this._disposables.push(m.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{m.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{m.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),m.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{let r=n.map((t=>Se(e,t))),i=m.editor.getModel(e);i&&i.getLanguageId()===t&&m.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function Ae(e){switch(e){case R.Error:return m.MarkerSeverity.Error;case R.Warning:return m.MarkerSeverity.Warning;case R.Information:return m.MarkerSeverity.Info;case R.Hint:return m.MarkerSeverity.Hint;default:return m.MarkerSeverity.Info}}function Se(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:Ae(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}var Re=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),Pe(t)))).then((n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new m.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:je(e.command),range:i,kind:Le(e.kind)};return e.textEdit&&(Me(e.textEdit)?t.range={insert:De(e.textEdit.insert),replace:De(e.textEdit.replace)}:t.range=De(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Fe)),e.insertTextFormat===Y.Snippet&&(t.insertTextRules=m.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function Pe(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Te(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function De(e){if(e)return new m.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Me(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function Le(e){let t=m.languages.CompletionItemKind;switch(e){case J.Text:return t.Text;case J.Method:return t.Method;case J.Function:return t.Function;case J.Constructor:return t.Constructor;case J.Field:return t.Field;case J.Variable:return t.Variable;case J.Class:return t.Class;case J.Interface:return t.Interface;case J.Module:return t.Module;case J.Property:return t.Property;case J.Unit:return t.Unit;case J.Value:return t.Value;case J.Enum:return t.Enum;case J.Keyword:return t.Keyword;case J.Snippet:return t.Snippet;case J.Color:return t.Color;case J.File:return t.File;case J.Reference:return t.Reference}return t.Property}function Fe(e){if(e)return{range:De(e.range),text:e.newText}}function je(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Oe=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),Pe(t)))).then((e=>{if(e)return{range:De(e.range),contents:Ue(e.contents)}}))}};function Ne(e){return e&&"object"==typeof e&&"string"==typeof e.kind}function We(e){return"string"==typeof e?{value:e}:Ne(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Ue(e){if(e)return Array.isArray(e)?e.map(We):[We(e)]}var Ve=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),Pe(t)))).then((e=>{if(e)return e.map((e=>({range:De(e.range),kind:He(e.kind)})))}))}};function He(e){switch(e){case ue.Read:return m.languages.DocumentHighlightKind.Read;case ue.Write:return m.languages.DocumentHighlightKind.Write;case ue.Text:return m.languages.DocumentHighlightKind.Text}return m.languages.DocumentHighlightKind.Text}var Ke=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),Pe(t)))).then((e=>{if(e)return[ze(e)]}))}};function ze(e){return{uri:m.Uri.parse(e.uri),range:De(e.range)}}var Xe=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),Pe(t)))).then((e=>{if(e)return e.map(ze)}))}},qe=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),Pe(t),n))).then((e=>Be(e)))}};function Be(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=m.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:De(i.range),text:i.newText}})}return{edits:t}}var $e=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Qe(e.kind),range:De(e.location.range),selectionRange:De(e.location.range),tags:[]})))}))}};function Qe(e){let t=m.languages.SymbolKind;switch(e){case de.File:return t.Array;case de.Module:return t.Module;case de.Namespace:return t.Namespace;case de.Package:return t.Package;case de.Class:return t.Class;case de.Method:return t.Method;case de.Property:return t.Property;case de.Field:return t.Field;case de.Constructor:return t.Constructor;case de.Enum:return t.Enum;case de.Interface:return t.Interface;case de.Function:return t.Function;case de.Variable:return t.Variable;case de.Constant:return t.Constant;case de.String:return t.String;case de.Number:return t.Number;case de.Boolean:return t.Boolean;case de.Array:return t.Array}return t.Function}var Ge=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:De(e.range),url:e.target})))}}))}},Je=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Ze(t)).then((e=>{if(e&&0!==e.length)return e.map(Fe)}))))}},Ye=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),Te(t),Ze(n)).then((e=>{if(e&&0!==e.length)return e.map(Fe)}))))}};function Ze(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var et=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:De(e.range)})))}))}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,Te(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=Fe(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Fe)),t}))}))}},tt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{let t={start:e.startLine+1,end:e.endLine+1};return typeof e.kind<"u"&&(t.kind=nt(e.kind)),t}))}))}};function nt(e){switch(e){case I.Comment:return m.languages.FoldingRangeKind.Comment;case I.Imports:return m.languages.FoldingRangeKind.Imports;case I.Region:return m.languages.FoldingRangeKind.Region}}var rt=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(Pe)))).then((e=>{if(e)return e.map((e=>{let t=[];for(;e;)t.push({range:De(e.range)}),e=e.parent;return t}))}))}},it=class extends Re{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function ot(e){let t=new z(e),n=(...e)=>t.getLanguageServiceWorker(...e),r=e.languageId;m.languages.registerCompletionItemProvider(r,new it(n)),m.languages.registerHoverProvider(r,new Oe(n)),m.languages.registerDocumentHighlightProvider(r,new Ve(n)),m.languages.registerLinkProvider(r,new Ge(n)),m.languages.registerFoldingRangeProvider(r,new tt(n)),m.languages.registerDocumentSymbolProvider(r,new $e(n)),m.languages.registerSelectionRangeProvider(r,new rt(n)),m.languages.registerRenameProvider(r,new qe(n)),"html"===r&&(m.languages.registerDocumentFormattingEditProvider(r,new Je(n)),m.languages.registerDocumentRangeFormattingEditProvider(r,new Ye(n)))}function at(e){let t=[],n=[],r=new z(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);function o(){let{languageId:t,modeConfiguration:r}=e;ut(n),r.completionItems&&n.push(m.languages.registerCompletionItemProvider(t,new it(i))),r.hovers&&n.push(m.languages.registerHoverProvider(t,new Oe(i))),r.documentHighlights&&n.push(m.languages.registerDocumentHighlightProvider(t,new Ve(i))),r.links&&n.push(m.languages.registerLinkProvider(t,new Ge(i))),r.documentSymbols&&n.push(m.languages.registerDocumentSymbolProvider(t,new $e(i))),r.rename&&n.push(m.languages.registerRenameProvider(t,new qe(i))),r.foldingRanges&&n.push(m.languages.registerFoldingRangeProvider(t,new tt(i))),r.selectionRanges&&n.push(m.languages.registerSelectionRangeProvider(t,new rt(i))),r.documentFormattingEdits&&n.push(m.languages.registerDocumentFormattingEditProvider(t,new Je(i))),r.documentRangeFormattingEdits&&n.push(m.languages.registerDocumentRangeFormattingEditProvider(t,new Ye(i)))}return o(),t.push(st(n)),st(t)}function st(e){return{dispose:()=>ut(e)}}function ut(e){for(;e.length;)e.pop().dispose()}return f(p)})();return t}));