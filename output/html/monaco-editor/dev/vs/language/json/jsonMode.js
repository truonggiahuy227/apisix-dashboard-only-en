define("vs/language/json/jsonMode",["require"],(e=>{var t=(()=>{var t=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=e=>n(e,"__esModule",{value:!0}),c=(t=>"undefined"!==typeof e?e:"undefined"!==typeof Proxy?new Proxy(t,{get:(t,n)=>("undefined"!==typeof e?e:t)[n]}):t)((function(t){if("undefined"!==typeof e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),u=(e,t)=>function(){return t||(0,e[i(e)[0]])((t={exports:{}}).exports,t),t.exports},d=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},g=(e,t,o,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let c of i(t))a.call(e,c)||!o&&"default"===c||n(e,c,{get:()=>t[c],enumerable:!(s=r(t,c))||s.enumerable});return e},l=(e,r)=>g(s(n(null!=e?t(o(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),f=(e=>(t,n)=>e&&e.get(t)||(n=g(s({}),t,1),e&&e.set(t,n),n))("undefined"!==typeof WeakMap?new WeakMap:0),h=u({"src/fillers/monaco-editor-core-amd.ts"(e,t){var n=l(c("vs/editor/editor.api"));t.exports=n}}),p={};d(p,{CompletionAdapter:()=>Te,DefinitionAdapter:()=>Ke,DiagnosticsAdapter:()=>xe,DocumentColorAdapter:()=>et,DocumentFormattingEditProvider:()=>Je,DocumentHighlightAdapter:()=>Ve,DocumentLinkAdapter:()=>Ge,DocumentRangeFormattingEditProvider:()=>Ye,DocumentSymbolAdapter:()=>$e,FoldingRangeAdapter:()=>tt,HoverAdapter:()=>Oe,ReferenceAdapter:()=>qe,RenameAdapter:()=>Xe,SelectionRangeAdapter:()=>it,WorkerManager:()=>z,fromPosition:()=>Re,fromRange:()=>De,setupMode:()=>xt,toRange:()=>Me,toTextEdit:()=>Le});var m={};g(m,l(h()));var v,_,w,b,k,C,y,E,A,x,I,S,T,R,D,M,P,j,L,F,O,W,N,U,V,H,K=12e4,z=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;let e=Date.now()-this._lastUsedTime;e>K&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=m.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(v||(v={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(_||(_={})),function(e){function t(e,t){return e===Number.MAX_VALUE&&(e=_.MAX_VALUE),t===Number.MAX_VALUE&&(t=_.MAX_VALUE),{line:e,character:t}}function n(e){var t=e;return Ee.objectLiteral(t)&&Ee.uinteger(t.line)&&Ee.uinteger(t.character)}e.create=t,e.is=n}(w||(w={})),function(e){function t(e,t,n,r){if(Ee.uinteger(e)&&Ee.uinteger(t)&&Ee.uinteger(n)&&Ee.uinteger(r))return{start:w.create(e,t),end:w.create(n,r)};if(w.is(e)&&w.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")}function n(e){var t=e;return Ee.objectLiteral(t)&&w.is(t.start)&&w.is(t.end)}e.create=t,e.is=n}(b||(b={})),function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return Ee.defined(t)&&b.is(t.range)&&(Ee.string(t.uri)||Ee.undefined(t.uri))}e.create=t,e.is=n}(k||(k={})),function(e){function t(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}}function n(e){var t=e;return Ee.defined(t)&&b.is(t.targetRange)&&Ee.string(t.targetUri)&&(b.is(t.targetSelectionRange)||Ee.undefined(t.targetSelectionRange))&&(b.is(t.originSelectionRange)||Ee.undefined(t.originSelectionRange))}e.create=t,e.is=n}(C||(C={})),function(e){function t(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}}function n(e){var t=e;return Ee.numberRange(t.red,0,1)&&Ee.numberRange(t.green,0,1)&&Ee.numberRange(t.blue,0,1)&&Ee.numberRange(t.alpha,0,1)}e.create=t,e.is=n}(y||(y={})),function(e){function t(e,t){return{range:e,color:t}}function n(e){var t=e;return b.is(t.range)&&y.is(t.color)}e.create=t,e.is=n}(E||(E={})),function(e){function t(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}}function n(e){var t=e;return Ee.string(t.label)&&(Ee.undefined(t.textEdit)||j.is(t))&&(Ee.undefined(t.additionalTextEdits)||Ee.typedArray(t.additionalTextEdits,j.is))}e.create=t,e.is=n}(A||(A={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(x||(x={})),function(e){function t(e,t,n,r,i){var o={startLine:e,endLine:t};return Ee.defined(n)&&(o.startCharacter=n),Ee.defined(r)&&(o.endCharacter=r),Ee.defined(i)&&(o.kind=i),o}function n(e){var t=e;return Ee.uinteger(t.startLine)&&Ee.uinteger(t.startLine)&&(Ee.undefined(t.startCharacter)||Ee.uinteger(t.startCharacter))&&(Ee.undefined(t.endCharacter)||Ee.uinteger(t.endCharacter))&&(Ee.undefined(t.kind)||Ee.string(t.kind))}e.create=t,e.is=n}(I||(I={})),function(e){function t(e,t){return{location:e,message:t}}function n(e){var t=e;return Ee.defined(t)&&k.is(t.location)&&Ee.string(t.message)}e.create=t,e.is=n}(S||(S={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(T||(T={})),function(e){e.Unnecessary=1,e.Deprecated=2}(R||(R={})),function(e){function t(e){var t=e;return void 0!==t&&null!==t&&Ee.string(t.href)}e.is=t}(D||(D={})),function(e){function t(e,t,n,r,i,o){var a={range:e,message:t};return Ee.defined(n)&&(a.severity=n),Ee.defined(r)&&(a.code=r),Ee.defined(i)&&(a.source=i),Ee.defined(o)&&(a.relatedInformation=o),a}function n(e){var t,n=e;return Ee.defined(n)&&b.is(n.range)&&Ee.string(n.message)&&(Ee.number(n.severity)||Ee.undefined(n.severity))&&(Ee.integer(n.code)||Ee.string(n.code)||Ee.undefined(n.code))&&(Ee.undefined(n.codeDescription)||Ee.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(Ee.string(n.source)||Ee.undefined(n.source))&&(Ee.undefined(n.relatedInformation)||Ee.typedArray(n.relatedInformation,S.is))}e.create=t,e.is=n}(M||(M={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return Ee.defined(n)&&n.length>0&&(i.arguments=n),i}function n(e){var t=e;return Ee.defined(t)&&Ee.string(t.title)&&Ee.string(t.command)}e.create=t,e.is=n}(P||(P={})),function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}function i(e){var t=e;return Ee.objectLiteral(t)&&Ee.string(t.newText)&&b.is(t.range)}e.replace=t,e.insert=n,e.del=r,e.is=i}(j||(j={})),function(e){function t(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r}function n(e){var t=e;return void 0!==t&&Ee.objectLiteral(t)&&Ee.string(t.label)&&(Ee.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(Ee.string(t.description)||void 0===t.description)}e.create=t,e.is=n}(L||(L={})),function(e){function t(e){var t=e;return"string"===typeof t}e.is=t}(F||(F={})),function(e){function t(e,t,n){return{range:e,newText:t,annotationId:n}}function n(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}}function r(e,t){return{range:e,newText:"",annotationId:t}}function i(e){var t=e;return j.is(t)&&(L.is(t.annotationId)||F.is(t.annotationId))}e.replace=t,e.insert=n,e.del=r,e.is=i}(O||(O={})),function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return Ee.defined(t)&&B.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(W||(W={})),function(e){function t(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r}function n(e){var t=e;return t&&"create"===t.kind&&Ee.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||Ee.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||Ee.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}e.create=t,e.is=n}(N||(N={})),function(e){function t(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i}function n(e){var t=e;return t&&"rename"===t.kind&&Ee.string(t.oldUri)&&Ee.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||Ee.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||Ee.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}e.create=t,e.is=n}(U||(U={})),function(e){function t(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r}function n(e){var t=e;return t&&"delete"===t.kind&&Ee.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||Ee.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||Ee.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}e.create=t,e.is=n}(V||(V={})),function(e){function t(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return Ee.string(e.kind)?N.is(e)||U.is(e)||V.is(e):W.is(e)})))}e.is=t}(H||(H={}));var q,X,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ce,ue,de,ge,le,fe,he,pe,me,ve,_e,we,be,ke,Ce=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=j.insert(e,t):F.is(n)?(i=n,r=O.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=O.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=j.replace(e,t):F.is(n)?(i=n,r=O.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=O.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=j.del(e):F.is(t)?(r=t,n=O.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=O.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ye=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(F.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ye(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(W.is(e)){var n=new Ce(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new Ce(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(B.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new Ce(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");n=this._textEditChanges[e];if(!n){r=[];this._workspaceEdit.changes[e]=r,n=new Ce(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ye,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(L.is(t)||F.is(t)?r=t:n=t,void 0===r?i=N.create(e,n):(o=F.is(r)?r:this._changeAnnotations.manage(r),i=N.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(L.is(n)||F.is(n)?i=n:r=n,void 0===i?o=U.create(e,t,r):(a=F.is(i)?i:this._changeAnnotations.manage(i),o=U.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(L.is(t)||F.is(t)?r=t:n=t,void 0===r?i=V.create(e,n):(o=F.is(r)?r:this._changeAnnotations.manage(r),i=V.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(e){function t(e){return{uri:e}}function n(e){var t=e;return Ee.defined(t)&&Ee.string(t.uri)}e.create=t,e.is=n})(q||(q={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return Ee.defined(t)&&Ee.string(t.uri)&&Ee.integer(t.version)}e.create=t,e.is=n}(X||(X={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return Ee.defined(t)&&Ee.string(t.uri)&&(null===t.version||Ee.integer(t.version))}e.create=t,e.is=n}(B||(B={})),function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return Ee.defined(t)&&Ee.string(t.uri)&&Ee.string(t.languageId)&&Ee.integer(t.version)&&Ee.string(t.text)}e.create=t,e.is=n}($||($={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(Q||(Q={})),function(e){function t(t){var n=t;return n===e.PlainText||n===e.Markdown}e.is=t}(Q||(Q={})),function(e){function t(e){var t=e;return Ee.objectLiteral(e)&&Q.is(t.kind)&&Ee.string(t.value)}e.is=t}(G||(G={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(J||(J={})),function(e){e.PlainText=1,e.Snippet=2}(Y||(Y={})),function(e){e.Deprecated=1}(Z||(Z={})),function(e){function t(e,t,n){return{newText:e,insert:t,replace:n}}function n(e){var t=e;return t&&Ee.string(t.newText)&&b.is(t.insert)&&b.is(t.replace)}e.create=t,e.is=n}(ee||(ee={})),function(e){e.asIs=1,e.adjustIndentation=2}(te||(te={})),function(e){function t(e){return{label:e}}e.create=t}(ne||(ne={})),function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(re||(re={})),function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function n(e){var t=e;return Ee.string(t)||Ee.objectLiteral(t)&&Ee.string(t.language)&&Ee.string(t.value)}e.fromPlainText=t,e.is=n}(ie||(ie={})),function(e){function t(e){var t=e;return!!t&&Ee.objectLiteral(t)&&(G.is(t.contents)||ie.is(t.contents)||Ee.typedArray(t.contents,ie.is))&&(void 0===e.range||b.is(e.range))}e.is=t}(oe||(oe={})),function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(ae||(ae={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return Ee.defined(t)&&(i.documentation=t),Ee.defined(n)?i.parameters=n:i.parameters=[],i}e.create=t}(se||(se={})),function(e){e.Text=1,e.Read=2,e.Write=3}(ce||(ce={})),function(e){function t(e,t){var n={range:e};return Ee.number(t)&&(n.kind=t),n}e.create=t}(ue||(ue={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(de||(de={})),function(e){e.Deprecated=1}(ge||(ge={})),function(e){function t(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=t}(le||(le={})),function(e){function t(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function n(e){var t=e;return t&&Ee.string(t.name)&&Ee.number(t.kind)&&b.is(t.range)&&b.is(t.selectionRange)&&(void 0===t.detail||Ee.string(t.detail))&&(void 0===t.deprecated||Ee.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}e.create=t,e.is=n}(fe||(fe={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(he||(he={})),function(e){function t(e,t){var n={diagnostics:e};return void 0!==t&&null!==t&&(n.only=t),n}function n(e){var t=e;return Ee.defined(t)&&Ee.typedArray(t.diagnostics,M.is)&&(void 0===t.only||Ee.typedArray(t.only,Ee.string))}e.create=t,e.is=n}(pe||(pe={})),function(e){function t(e,t,n){var r={title:e},i=!0;return"string"===typeof t?(i=!1,r.kind=t):P.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r}function n(e){var t=e;return t&&Ee.string(t.title)&&(void 0===t.diagnostics||Ee.typedArray(t.diagnostics,M.is))&&(void 0===t.kind||Ee.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||P.is(t.command))&&(void 0===t.isPreferred||Ee.boolean(t.isPreferred))&&(void 0===t.edit||H.is(t.edit))}e.create=t,e.is=n}(me||(me={})),function(e){function t(e,t){var n={range:e};return Ee.defined(t)&&(n.data=t),n}function n(e){var t=e;return Ee.defined(t)&&b.is(t.range)&&(Ee.undefined(t.command)||P.is(t.command))}e.create=t,e.is=n}(ve||(ve={})),function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return Ee.defined(t)&&Ee.uinteger(t.tabSize)&&Ee.boolean(t.insertSpaces)}e.create=t,e.is=n}(_e||(_e={})),function(e){function t(e,t,n){return{range:e,target:t,data:n}}function n(e){var t=e;return Ee.defined(t)&&b.is(t.range)&&(Ee.undefined(t.target)||Ee.string(t.target))}e.create=t,e.is=n}(we||(we={})),function(e){function t(e,t){return{range:e,parent:t}}function n(t){var n=t;return void 0!==n&&b.is(n.range)&&(void 0===n.parent||e.is(n.parent))}e.create=t,e.is=n}(be||(be={})),function(e){function t(e,t,n,r){return new Ae(e,t,n,r)}function n(e){var t=e;return!!(Ee.defined(t)&&Ee.string(t.uri)&&(Ee.undefined(t.languageId)||Ee.string(t.languageId))&&Ee.uinteger(t.lineCount)&&Ee.func(t.getText)&&Ee.func(t.positionAt)&&Ee.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=i(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=n.length,a=r.length-1;a>=0;a--){var s=r[a],c=e.offsetAt(s.range.start),u=e.offsetAt(s.range.end);if(!(u<=o))throw new Error("Overlapping edit");n=n.substring(0,c)+s.newText+n.substring(u,n.length),o=c}return n}function i(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),o=e.slice(n);i(r,t),i(o,t);var a=0,s=0,c=0;while(a<r.length&&s<o.length){var u=t(r[a],o[s]);e[c++]=u<=0?r[a++]:o[s++]}while(a<r.length)e[c++]=r[a++];while(s<o.length)e[c++]=o[s++];return e}e.create=t,e.is=n,e.applyEdits=r}(ke||(ke={}));var Ee,Ae=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return w.create(0,e);while(n<r){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return w.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();(function(e){var t=Object.prototype.toString;function n(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===t.call(e)}function a(e){return"[object Number]"===t.call(e)}function s(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r}function c(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647}function u(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647}function d(e){return"[object Function]"===t.call(e)}function g(e){return null!==e&&"object"===typeof e}function l(e,t){return Array.isArray(e)&&e.every(t)}e.defined=n,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.numberRange=s,e.integer=c,e.uinteger=u,e.func=d,e.objectLiteral=g,e.typedArray=l})(Ee||(Ee={}));var xe=class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{m.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(m.editor.onDidCreateModel(r)),this._disposables.push(m.editor.onWillDisposeModel(i)),this._disposables.push(m.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{m.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{m.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),m.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((t=>Se(e,t)));let i=m.editor.getModel(e);i&&i.getLanguageId()===t&&m.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function Ie(e){switch(e){case T.Error:return m.MarkerSeverity.Error;case T.Warning:return m.MarkerSeverity.Warning;case T.Information:return m.MarkerSeverity.Info;case T.Hint:return m.MarkerSeverity.Hint;default:return m.MarkerSeverity.Info}}function Se(e,t){let n="number"===typeof t.code?String(t.code):t.code;return{severity:Ie(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}var Te=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),Re(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new m.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:Fe(e.command),range:i,kind:je(e.kind)};return e.textEdit&&(Pe(e.textEdit)?t.range={insert:Me(e.textEdit.insert),replace:Me(e.textEdit.replace)}:t.range=Me(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Le)),e.insertTextFormat===Y.Snippet&&(t.insertTextRules=m.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function Re(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function De(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function Me(e){if(e)return new m.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Pe(e){return"undefined"!==typeof e.insert&&"undefined"!==typeof e.replace}function je(e){const t=m.languages.CompletionItemKind;switch(e){case J.Text:return t.Text;case J.Method:return t.Method;case J.Function:return t.Function;case J.Constructor:return t.Constructor;case J.Field:return t.Field;case J.Variable:return t.Variable;case J.Class:return t.Class;case J.Interface:return t.Interface;case J.Module:return t.Module;case J.Property:return t.Property;case J.Unit:return t.Unit;case J.Value:return t.Value;case J.Enum:return t.Enum;case J.Keyword:return t.Keyword;case J.Snippet:return t.Snippet;case J.Color:return t.Color;case J.File:return t.File;case J.Reference:return t.Reference}return t.Property}function Le(e){if(e)return{range:Me(e.range),text:e.newText}}function Fe(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Oe=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),Re(t)))).then((e=>{if(e)return{range:Me(e.range),contents:Ue(e.contents)}}))}};function We(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function Ne(e){return"string"===typeof e?{value:e}:We(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Ue(e){if(e)return Array.isArray(e)?e.map(Ne):[Ne(e)]}var Ve=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),Re(t)))).then((e=>{if(e)return e.map((e=>({range:Me(e.range),kind:He(e.kind)})))}))}};function He(e){switch(e){case ce.Read:return m.languages.DocumentHighlightKind.Read;case ce.Write:return m.languages.DocumentHighlightKind.Write;case ce.Text:return m.languages.DocumentHighlightKind.Text}return m.languages.DocumentHighlightKind.Text}var Ke=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),Re(t)))).then((e=>{if(e)return[ze(e)]}))}};function ze(e){return{uri:m.Uri.parse(e.uri),range:Me(e.range)}}var qe=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),Re(t)))).then((e=>{if(e)return e.map(ze)}))}},Xe=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),Re(t),n))).then((e=>Be(e)))}};function Be(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=m.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:Me(i.range),text:i.newText}})}return{edits:t}}var $e=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Qe(e.kind),range:Me(e.location.range),selectionRange:Me(e.location.range),tags:[]})))}))}};function Qe(e){let t=m.languages.SymbolKind;switch(e){case de.File:return t.Array;case de.Module:return t.Module;case de.Namespace:return t.Namespace;case de.Package:return t.Package;case de.Class:return t.Class;case de.Method:return t.Method;case de.Property:return t.Property;case de.Field:return t.Field;case de.Constructor:return t.Constructor;case de.Enum:return t.Enum;case de.Interface:return t.Interface;case de.Function:return t.Function;case de.Variable:return t.Variable;case de.Constant:return t.Constant;case de.String:return t.String;case de.Number:return t.Number;case de.Boolean:return t.Boolean;case de.Array:return t.Array}return t.Function}var Ge=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:Me(e.range),url:e.target})))}}))}},Je=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Ze(t)).then((e=>{if(e&&0!==e.length)return e.map(Le)}))))}},Ye=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),De(t),Ze(n)).then((e=>{if(e&&0!==e.length)return e.map(Le)}))))}};function Ze(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var et=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:Me(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,De(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=Le(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Le)),t}))}))}},tt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(t.kind=nt(e.kind)),t}))}))}};function nt(e){switch(e){case x.Comment:return m.languages.FoldingRangeKind.Comment;case x.Imports:return m.languages.FoldingRangeKind.Imports;case x.Region:return m.languages.FoldingRangeKind.Region}}var rt,it=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(Re)))).then((e=>{if(e)return e.map((e=>{const t=[];while(e)t.push({range:Me(e.range)}),e=e.parent;return t}))}))}};function ot(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,c=0,u=0,d=0,g=0;function l(t,n){var i=0,o=0;while(i<t||!n){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<t&&(o=-1),o}function f(e){r=e,i="",o=0,a=16,g=0}function h(){var t=r;if(48===e.charCodeAt(r))r++;else{r++;while(r<e.length&&ct(e.charCodeAt(r)))r++}if(r<e.length&&46===e.charCodeAt(r)){if(r++,!(r<e.length&&ct(e.charCodeAt(r))))return g=3,e.substring(t,r);r++;while(r<e.length&&ct(e.charCodeAt(r)))r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if(r++,(r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&ct(e.charCodeAt(r))){r++;while(r<e.length&&ct(e.charCodeAt(r)))r++;n=r}else g=3;return e.substring(t,n)}function p(){var t="",i=r;while(1){if(r>=n){t+=e.substring(i,r),g=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(st(o)){t+=e.substring(i,r),g=2;break}g=6}r++}else{if(t+=e.substring(i,r),r++,r>=n){g=2;break}var a=e.charCodeAt(r++);switch(a){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var s=l(4,!0);s>=0?t+=String.fromCharCode(s):g=4;break;default:g=5}i=r}}return t}function m(){if(i="",g=0,o=r,c=s,d=u,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(at(t)){do{r++,i+=String.fromCharCode(t),t=e.charCodeAt(r)}while(at(t));return a=15}if(st(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,u=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=p(),a=10;case 47:var l=r-1;if(47===e.charCodeAt(r+1)){r+=2;while(r<n){if(st(e.charCodeAt(r)))break;r++}return i=e.substring(l,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;var f=n-1,m=!1;while(r<f){var _=e.charCodeAt(r);if(42===_&&47===e.charCodeAt(r+1)){r+=2,m=!0;break}r++,st(_)&&(13===_&&10===e.charCodeAt(r)&&r++,s++,u=r)}return m||(r++,g=1),i=e.substring(l,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),r++,r===n||!ct(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=h(),a=11;default:while(r<n&&v(t))r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r),i){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}function v(e){if(at(e)||st(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function _(){var e;do{e=m()}while(e>=12&&e<=15);return e}return{setPosition:f,getPosition:function(){return r},scan:t?_:m,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return g}}}function at(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function st(e){return 10===e||13===e||8232===e||8233===e}function ct(e){return e>=48&&e<=57}(function(e){e.DEFAULT={allowTrailingComma:!1}})(rt||(rt={}));var ut=ot;function dt(e){return{getInitialState:()=>new yt(null,null,!1,null),tokenize:(t,n)=>Et(e,t,n)}}var gt="delimiter.bracket.json",lt="delimiter.array.json",ft="delimiter.colon.json",ht="delimiter.comma.json",pt="keyword.json",mt="keyword.json",vt="string.value.json",_t="number.json",wt="string.key.json",bt="comment.block.json",kt="comment.line.json",Ct=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new Ct(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;while(e&&t){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},yt=class{_state;scanError;lastWasColon;parents;constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new yt(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!(e&&e instanceof yt)&&(this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&Ct.equals(this.parents,e.parents))}getStateData(){return this._state}setStateData(e){this._state=e}};function Et(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2;break}const a=ut(t);let s=n.lastWasColon,c=n.parents;const u={tokens:[],endState:n.clone()};while(1){let d=r+a.getPosition(),g="";const l=a.scan();if(17===l)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,l){case 1:c=Ct.push(c,0),g=gt,s=!1;break;case 2:c=Ct.pop(c),g=gt,s=!1;break;case 3:c=Ct.push(c,1),g=lt,s=!1;break;case 4:c=Ct.pop(c),g=lt,s=!1;break;case 6:g=ft,s=!0;break;case 5:g=ht,s=!1;break;case 8:case 9:g=pt,s=!1;break;case 7:g=mt,s=!1;break;case 10:const e=c?c.type:0,t=1===e;g=s||t?vt:wt,s=!1;break;case 11:g=_t,s=!1;break}if(e)switch(l){case 12:g=kt;break;case 13:g=bt;break}u.endState=new yt(n.getStateData(),a.getTokenError(),s,c),u.tokens.push({startIndex:d,scopes:g})}return u}var At=class extends xe{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(m.editor.onWillDisposeModel((e=>{this._resetSchema(e.uri)}))),this._disposables.push(m.editor.onDidChangeModelLanguage((e=>{this._resetSchema(e.model.uri)})))}_resetSchema(e){this._worker().then((t=>{t.resetSchema(e.toString())}))}};function xt(e){const t=[],n=[],r=new z(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);function o(){const{languageId:t,modeConfiguration:r}=e;St(n),r.documentFormattingEdits&&n.push(m.languages.registerDocumentFormattingEditProvider(t,new Je(i))),r.documentRangeFormattingEdits&&n.push(m.languages.registerDocumentRangeFormattingEditProvider(t,new Ye(i))),r.completionItems&&n.push(m.languages.registerCompletionItemProvider(t,new Te(i,[" ",":",'"']))),r.hovers&&n.push(m.languages.registerHoverProvider(t,new Oe(i))),r.documentSymbols&&n.push(m.languages.registerDocumentSymbolProvider(t,new $e(i))),r.tokens&&n.push(m.languages.setTokensProvider(t,dt(!0))),r.colors&&n.push(m.languages.registerColorProvider(t,new et(i))),r.foldingRanges&&n.push(m.languages.registerFoldingRangeProvider(t,new tt(i))),r.diagnostics&&n.push(new At(t,i,e)),r.selectionRanges&&n.push(m.languages.registerSelectionRangeProvider(t,new it(i)))}o(),t.push(m.languages.setLanguageConfiguration(e.languageId,Tt));let a=e.modeConfiguration;return e.onDidChange((e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),t.push(It(n)),It(t)}function It(e){return{dispose:()=>St(e)}}function St(e){while(e.length)e.pop().dispose()}var Tt={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};return f(p)})();return t}));