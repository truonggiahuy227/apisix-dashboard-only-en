(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[107],{"20/g":function(e,n,t){"use strict";t.r(n),t.d(n,"CompletionAdapter",(function(){return Ie})),t.d(n,"DefinitionAdapter",(function(){return Ve})),t.d(n,"DiagnosticsAdapter",(function(){return Ee})),t.d(n,"DocumentColorAdapter",(function(){return Ye})),t.d(n,"DocumentFormattingEditProvider",(function(){return $e})),t.d(n,"DocumentHighlightAdapter",(function(){return Ue})),t.d(n,"DocumentLinkAdapter",(function(){return Qe})),t.d(n,"DocumentRangeFormattingEditProvider",(function(){return qe})),t.d(n,"DocumentSymbolAdapter",(function(){return Be})),t.d(n,"FoldingRangeAdapter",(function(){return Ze})),t.d(n,"HoverAdapter",(function(){return Pe})),t.d(n,"ReferenceAdapter",(function(){return Ke})),t.d(n,"RenameAdapter",(function(){return ze})),t.d(n,"SelectionRangeAdapter",(function(){return nn})),t.d(n,"WorkerManager",(function(){return H})),t.d(n,"fromPosition",(function(){return Se})),t.d(n,"fromRange",(function(){return je})),t.d(n,"setupMode",(function(){return tn})),t.d(n,"toRange",(function(){return Oe})),t.d(n,"toTextEdit",(function(){return De}));var r,i,o=t("fWQN"),a=t("mtLc"),u=t("rAM+"),s=t("8z58"),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,l=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var i,o=Object(u["a"])(f(n));try{var a=function(){var o=i.value;g.call(e,o)||!t&&"default"===o||c(e,o,{get:function(){return n[o]},enumerable:!(r=d(n,o))||r.enumerable})};for(o.s();!(i=o.n()).done;)a()}catch(s){o.e(s)}finally{o.f()}}return e},h={};l(h,s);var v,p,m,_,b,w,k,y,C,E,x,A,I,S,j,O,R,T,D,M,P,L,F,N,U,W,V=12e4,H=(r=function(){function e(n){var t=this;Object(o["a"])(this,e),this._defaults=void 0,this._idleCheckInterval=void 0,this._lastUsedTime=void 0,this._configChangeListener=void 0,this._worker=void 0,this._client=void 0,this._defaults=n,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return Object(a["a"])(e,[{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"dispose",value:function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}},{key:"_checkIfIdle",value:function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>V&&this._stopWorker()}}},{key:"_getClient",value:function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=h.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e,n=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this._getClient().then((function(n){e=n})).then((function(e){if(n._worker)return n._worker.withSyncedResources(r)})).then((function(n){return e}))}}]),e}(),r);(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(v||(v={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(p||(p={})),function(e){function n(e,n){return e===Number.MAX_VALUE&&(e=p.MAX_VALUE),n===Number.MAX_VALUE&&(n=p.MAX_VALUE),{line:e,character:n}}function t(e){var n=e;return ye.objectLiteral(n)&&ye.uinteger(n.line)&&ye.uinteger(n.character)}e.create=n,e.is=t}(m||(m={})),function(e){function n(e,n,t,r){if(ye.uinteger(e)&&ye.uinteger(n)&&ye.uinteger(t)&&ye.uinteger(r))return{start:m.create(e,n),end:m.create(t,r)};if(m.is(e)&&m.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+r+"]")}function t(e){var n=e;return ye.objectLiteral(n)&&m.is(n.start)&&m.is(n.end)}e.create=n,e.is=t}(_||(_={})),function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return ye.defined(n)&&_.is(n.range)&&(ye.string(n.uri)||ye.undefined(n.uri))}e.create=n,e.is=t}(b||(b={})),function(e){function n(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}}function t(e){var n=e;return ye.defined(n)&&_.is(n.targetRange)&&ye.string(n.targetUri)&&(_.is(n.targetSelectionRange)||ye.undefined(n.targetSelectionRange))&&(_.is(n.originSelectionRange)||ye.undefined(n.originSelectionRange))}e.create=n,e.is=t}(w||(w={})),function(e){function n(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}}function t(e){var n=e;return ye.numberRange(n.red,0,1)&&ye.numberRange(n.green,0,1)&&ye.numberRange(n.blue,0,1)&&ye.numberRange(n.alpha,0,1)}e.create=n,e.is=t}(k||(k={})),function(e){function n(e,n){return{range:e,color:n}}function t(e){var n=e;return _.is(n.range)&&k.is(n.color)}e.create=n,e.is=t}(y||(y={})),function(e){function n(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}}function t(e){var n=e;return ye.string(n.label)&&(ye.undefined(n.textEdit)||T.is(n))&&(ye.undefined(n.additionalTextEdits)||ye.typedArray(n.additionalTextEdits,T.is))}e.create=n,e.is=t}(C||(C={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(E||(E={})),function(e){function n(e,n,t,r,i){var o={startLine:e,endLine:n};return ye.defined(t)&&(o.startCharacter=t),ye.defined(r)&&(o.endCharacter=r),ye.defined(i)&&(o.kind=i),o}function t(e){var n=e;return ye.uinteger(n.startLine)&&ye.uinteger(n.startLine)&&(ye.undefined(n.startCharacter)||ye.uinteger(n.startCharacter))&&(ye.undefined(n.endCharacter)||ye.uinteger(n.endCharacter))&&(ye.undefined(n.kind)||ye.string(n.kind))}e.create=n,e.is=t}(x||(x={})),function(e){function n(e,n){return{location:e,message:n}}function t(e){var n=e;return ye.defined(n)&&b.is(n.location)&&ye.string(n.message)}e.create=n,e.is=t}(A||(A={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(I||(I={})),function(e){e.Unnecessary=1,e.Deprecated=2}(S||(S={})),function(e){function n(e){var n=e;return void 0!==n&&null!==n&&ye.string(n.href)}e.is=n}(j||(j={})),function(e){function n(e,n,t,r,i,o){var a={range:e,message:n};return ye.defined(t)&&(a.severity=t),ye.defined(r)&&(a.code=r),ye.defined(i)&&(a.source=i),ye.defined(o)&&(a.relatedInformation=o),a}function t(e){var n,t=e;return ye.defined(t)&&_.is(t.range)&&ye.string(t.message)&&(ye.number(t.severity)||ye.undefined(t.severity))&&(ye.integer(t.code)||ye.string(t.code)||ye.undefined(t.code))&&(ye.undefined(t.codeDescription)||ye.string(null===(n=t.codeDescription)||void 0===n?void 0:n.href))&&(ye.string(t.source)||ye.undefined(t.source))&&(ye.undefined(t.relatedInformation)||ye.typedArray(t.relatedInformation,A.is))}e.create=n,e.is=t}(O||(O={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return ye.defined(t)&&t.length>0&&(i.arguments=t),i}function t(e){var n=e;return ye.defined(n)&&ye.string(n.title)&&ye.string(n.command)}e.create=n,e.is=t}(R||(R={})),function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}function i(e){var n=e;return ye.objectLiteral(n)&&ye.string(n.newText)&&_.is(n.range)}e.replace=n,e.insert=t,e.del=r,e.is=i}(T||(T={})),function(e){function n(e,n,t){var r={label:e};return void 0!==n&&(r.needsConfirmation=n),void 0!==t&&(r.description=t),r}function t(e){var n=e;return void 0!==n&&ye.objectLiteral(n)&&ye.string(n.label)&&(ye.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(ye.string(n.description)||void 0===n.description)}e.create=n,e.is=t}(D||(D={})),function(e){function n(e){var n=e;return"string"===typeof n}e.is=n}(M||(M={})),function(e){function n(e,n,t){return{range:e,newText:n,annotationId:t}}function t(e,n,t){return{range:{start:e,end:e},newText:n,annotationId:t}}function r(e,n){return{range:e,newText:"",annotationId:n}}function i(e){var n=e;return T.is(n)&&(D.is(n.annotationId)||M.is(n.annotationId))}e.replace=n,e.insert=t,e.del=r,e.is=i}(P||(P={})),function(e){function n(e,n){return{textDocument:e,edits:n}}function t(e){var n=e;return ye.defined(n)&&X.is(n.textDocument)&&Array.isArray(n.edits)}e.create=n,e.is=t}(L||(L={})),function(e){function n(e,n,t){var r={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==t&&(r.annotationId=t),r}function t(e){var n=e;return n&&"create"===n.kind&&ye.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||ye.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||ye.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||M.is(n.annotationId))}e.create=n,e.is=t}(F||(F={})),function(e){function n(e,n,t,r){var i={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i}function t(e){var n=e;return n&&"rename"===n.kind&&ye.string(n.oldUri)&&ye.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||ye.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||ye.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||M.is(n.annotationId))}e.create=n,e.is=t}(N||(N={})),function(e){function n(e,n,t){var r={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(r.options=n),void 0!==t&&(r.annotationId=t),r}function t(e){var n=e;return n&&"delete"===n.kind&&ye.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||ye.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||ye.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||M.is(n.annotationId))}e.create=n,e.is=t}(U||(U={})),function(e){function n(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return ye.string(e.kind)?F.is(e)||N.is(e)||U.is(e):L.is(e)})))}e.is=n}(W||(W={}));var K,z,X,B,J,Q,$,q,G,Y,Z,ee,ne,te,re,ie,oe,ae,ue,se,ce,de,fe,ge,le,he,ve,pe,me,_e,be,we=function(){function e(e,n){this.edits=e,this.changeAnnotations=n}return e.prototype.insert=function(e,n,t){var r,i;if(void 0===t?r=T.insert(e,n):M.is(t)?(i=t,r=P.insert(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=P.insert(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,n,t){var r,i;if(void 0===t?r=T.replace(e,n):M.is(t)?(i=t,r=P.replace(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=P.replace(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,n){var t,r;if(void 0===n?t=T.del(e):M.is(n)?(r=n,t=P.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),t=P.del(e,r)),this.edits.push(t),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ke=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,n){var t;if(M.is(e)?t=e:(t=this.nextId(),n=e),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+t);return this._annotations[t]=n,this._size++,t},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(e){var n=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ke(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(L.is(e)){var t=new we(e.edits,n._changeAnnotations);n._textEditChanges[e.textDocument.uri]=t}}))):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new we(e.changes[t]);n._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(X.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:e.uri,version:e.version},t=this._textEditChanges[n.uri];if(!t){var r=[],i={textDocument:n,edits:r};this._workspaceEdit.documentChanges.push(i),t=new we(r,this._changeAnnotations),this._textEditChanges[n.uri]=t}return t}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");t=this._textEditChanges[e];if(!t){r=[];this._workspaceEdit.changes[e]=r,t=new we(r),this._textEditChanges[e]=t}return t},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ke,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(D.is(n)||M.is(n)?r=n:t=n,void 0===r?i=F.create(e,t):(o=M.is(r)?r:this._changeAnnotations.manage(r),i=F.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,n,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(D.is(t)||M.is(t)?i=t:r=t,void 0===i?o=N.create(e,n,r):(a=M.is(i)?i:this._changeAnnotations.manage(i),o=N.create(e,n,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(D.is(n)||M.is(n)?r=n:t=n,void 0===r?i=U.create(e,t):(o=M.is(r)?r:this._changeAnnotations.manage(r),i=U.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(e){function n(e){return{uri:e}}function t(e){var n=e;return ye.defined(n)&&ye.string(n.uri)}e.create=n,e.is=t})(K||(K={})),function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return ye.defined(n)&&ye.string(n.uri)&&ye.integer(n.version)}e.create=n,e.is=t}(z||(z={})),function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return ye.defined(n)&&ye.string(n.uri)&&(null===n.version||ye.integer(n.version))}e.create=n,e.is=t}(X||(X={})),function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return ye.defined(n)&&ye.string(n.uri)&&ye.string(n.languageId)&&ye.integer(n.version)&&ye.string(n.text)}e.create=n,e.is=t}(B||(B={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(J||(J={})),function(e){function n(n){var t=n;return t===e.PlainText||t===e.Markdown}e.is=n}(J||(J={})),function(e){function n(e){var n=e;return ye.objectLiteral(e)&&J.is(n.kind)&&ye.string(n.value)}e.is=n}(Q||(Q={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}($||($={})),function(e){e.PlainText=1,e.Snippet=2}(q||(q={})),function(e){e.Deprecated=1}(G||(G={})),function(e){function n(e,n,t){return{newText:e,insert:n,replace:t}}function t(e){var n=e;return n&&ye.string(n.newText)&&_.is(n.insert)&&_.is(n.replace)}e.create=n,e.is=t}(Y||(Y={})),function(e){e.asIs=1,e.adjustIndentation=2}(Z||(Z={})),function(e){function n(e){return{label:e}}e.create=n}(ee||(ee={})),function(e){function n(e,n){return{items:e||[],isIncomplete:!!n}}e.create=n}(ne||(ne={})),function(e){function n(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function t(e){var n=e;return ye.string(n)||ye.objectLiteral(n)&&ye.string(n.language)&&ye.string(n.value)}e.fromPlainText=n,e.is=t}(te||(te={})),function(e){function n(e){var n=e;return!!n&&ye.objectLiteral(n)&&(Q.is(n.contents)||te.is(n.contents)||ye.typedArray(n.contents,te.is))&&(void 0===e.range||_.is(e.range))}e.is=n}(re||(re={})),function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(ie||(ie={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return ye.defined(n)&&(i.documentation=n),ye.defined(t)?i.parameters=t:i.parameters=[],i}e.create=n}(oe||(oe={})),function(e){e.Text=1,e.Read=2,e.Write=3}(ae||(ae={})),function(e){function n(e,n){var t={range:e};return ye.number(n)&&(t.kind=n),t}e.create=n}(ue||(ue={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(se||(se={})),function(e){e.Deprecated=1}(ce||(ce={})),function(e){function n(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}e.create=n}(de||(de={})),function(e){function n(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function t(e){var n=e;return n&&ye.string(n.name)&&ye.number(n.kind)&&_.is(n.range)&&_.is(n.selectionRange)&&(void 0===n.detail||ye.string(n.detail))&&(void 0===n.deprecated||ye.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))}e.create=n,e.is=t}(fe||(fe={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(ge||(ge={})),function(e){function n(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t}function t(e){var n=e;return ye.defined(n)&&ye.typedArray(n.diagnostics,O.is)&&(void 0===n.only||ye.typedArray(n.only,ye.string))}e.create=n,e.is=t}(le||(le={})),function(e){function n(e,n,t){var r={title:e},i=!0;return"string"===typeof n?(i=!1,r.kind=n):R.is(n)?r.command=n:r.edit=n,i&&void 0!==t&&(r.kind=t),r}function t(e){var n=e;return n&&ye.string(n.title)&&(void 0===n.diagnostics||ye.typedArray(n.diagnostics,O.is))&&(void 0===n.kind||ye.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||R.is(n.command))&&(void 0===n.isPreferred||ye.boolean(n.isPreferred))&&(void 0===n.edit||W.is(n.edit))}e.create=n,e.is=t}(he||(he={})),function(e){function n(e,n){var t={range:e};return ye.defined(n)&&(t.data=n),t}function t(e){var n=e;return ye.defined(n)&&_.is(n.range)&&(ye.undefined(n.command)||R.is(n.command))}e.create=n,e.is=t}(ve||(ve={})),function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return ye.defined(n)&&ye.uinteger(n.tabSize)&&ye.boolean(n.insertSpaces)}e.create=n,e.is=t}(pe||(pe={})),function(e){function n(e,n,t){return{range:e,target:n,data:t}}function t(e){var n=e;return ye.defined(n)&&_.is(n.range)&&(ye.undefined(n.target)||ye.string(n.target))}e.create=n,e.is=t}(me||(me={})),function(e){function n(e,n){return{range:e,parent:n}}function t(n){var t=n;return void 0!==t&&_.is(t.range)&&(void 0===t.parent||e.is(t.parent))}e.create=n,e.is=t}(_e||(_e={})),function(e){function n(e,n,t,r){return new Ce(e,n,t,r)}function t(e){var n=e;return!!(ye.defined(n)&&ye.string(n.uri)&&(ye.undefined(n.languageId)||ye.string(n.languageId))&&ye.uinteger(n.lineCount)&&ye.func(n.getText)&&ye.func(n.positionAt)&&ye.func(n.offsetAt))}function r(e,n){for(var t=e.getText(),r=i(n,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=t.length,a=r.length-1;a>=0;a--){var u=r[a],s=e.offsetAt(u.range.start),c=e.offsetAt(u.range.end);if(!(c<=o))throw new Error("Overlapping edit");t=t.substring(0,s)+u.newText+t.substring(c,t.length),o=s}return t}function i(e,n){if(e.length<=1)return e;var t=e.length/2|0,r=e.slice(0,t),o=e.slice(t);i(r,n),i(o,n);var a=0,u=0,s=0;while(a<r.length&&u<o.length){var c=n(r[a],o[u]);e[s++]=c<=0?r[a++]:o[u++]}while(a<r.length)e[s++]=r[a++];while(u<o.length)e[s++]=o[u++];return e}e.create=n,e.is=t,e.applyEdits=r}(be||(be={}));var ye,Ce=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,r=n.length;if(0===r)return m.create(0,e);while(t<r){var i=Math.floor((t+r)/2);n[i]>e?r=i:t=i+1}var o=t-1;return m.create(o,e-n[o])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();(function(e){var n=Object.prototype.toString;function t(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===n.call(e)}function a(e){return"[object Number]"===n.call(e)}function u(e,t,r){return"[object Number]"===n.call(e)&&t<=e&&e<=r}function s(e){return"[object Number]"===n.call(e)&&-2147483648<=e&&e<=2147483647}function c(e){return"[object Number]"===n.call(e)&&0<=e&&e<=2147483647}function d(e){return"[object Function]"===n.call(e)}function f(e){return null!==e&&"object"===typeof e}function g(e,n){return Array.isArray(e)&&e.every(n)}e.defined=t,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.numberRange=u,e.integer=s,e.uinteger=c,e.func=d,e.objectLiteral=f,e.typedArray=g})(ye||(ye={}));var Ee=(i=function(){function e(n,t,r){var i=this;Object(o["a"])(this,e),this._disposables=[],this._listener=Object.create(null),this._languageId=n,this._worker=t;var a=function(e){var n,t=e.getLanguageId();t===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){window.clearTimeout(n),n=window.setTimeout((function(){return i._doValidate(e.uri,t)}),500)})),i._doValidate(e.uri,t))},u=function(e){h.editor.setModelMarkers(e,i._languageId,[]);var n=e.uri.toString(),t=i._listener[n];t&&(t.dispose(),delete i._listener[n])};this._disposables.push(h.editor.onDidCreateModel(a)),this._disposables.push(h.editor.onWillDisposeModel(u)),this._disposables.push(h.editor.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),this._disposables.push(r((function(e){h.editor.getModels().forEach((function(e){e.getLanguageId()===i._languageId&&(u(e),a(e))}))}))),this._disposables.push({dispose:function(){for(var e in h.editor.getModels().forEach(u),i._listener)i._listener[e].dispose()}}),h.editor.getModels().forEach(a)}return Object(a["a"])(e,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables.length=0}},{key:"_doValidate",value:function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(n){return Ae(e,n)})),i=h.editor.getModel(e);i&&i.getLanguageId()===n&&h.editor.setModelMarkers(i,n,r)})).then(void 0,(function(e){console.error(e)}))}}]),e}(),i);function xe(e){switch(e){case I.Error:return h.MarkerSeverity.Error;case I.Warning:return h.MarkerSeverity.Warning;case I.Information:return h.MarkerSeverity.Info;case I.Hint:return h.MarkerSeverity.Hint;default:return h.MarkerSeverity.Info}}function Ae(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:xe(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}var Ie=function(){function e(n,t){Object(o["a"])(this,e),this._worker=n,this._triggerCharacters=t}return Object(a["a"])(e,[{key:"provideCompletionItems",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),Se(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new h.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:Me(e.command),range:i,kind:Te(e.kind)};return e.textEdit&&(Re(e.textEdit)?n.range={insert:Oe(e.textEdit.insert),replace:Oe(e.textEdit.replace)}:n.range=Oe(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(De)),e.insertTextFormat===q.Snippet&&(n.insertTextRules=h.languages.CompletionItemInsertTextRule.InsertAsSnippet),n}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))}},{key:"triggerCharacters",get:function(){return this._triggerCharacters}}]),e}();function Se(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function je(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function Oe(e){if(e)return new h.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Re(e){return"undefined"!==typeof e.insert&&"undefined"!==typeof e.replace}function Te(e){var n=h.languages.CompletionItemKind;switch(e){case $.Text:return n.Text;case $.Method:return n.Method;case $.Function:return n.Function;case $.Constructor:return n.Constructor;case $.Field:return n.Field;case $.Variable:return n.Variable;case $.Class:return n.Class;case $.Interface:return n.Interface;case $.Module:return n.Module;case $.Property:return n.Property;case $.Unit:return n.Unit;case $.Value:return n.Value;case $.Enum:return n.Enum;case $.Keyword:return n.Keyword;case $.Snippet:return n.Snippet;case $.Color:return n.Color;case $.File:return n.File;case $.Reference:return n.Reference}return n.Property}function De(e){if(e)return{range:Oe(e.range),text:e.newText}}function Me(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Pe=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideHover",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),Se(n))})).then((function(e){if(e)return{range:Oe(e.range),contents:Ne(e.contents)}}))}}]),e}();function Le(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function Fe(e){return"string"===typeof e?{value:e}:Le(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Ne(e){if(e)return Array.isArray(e)?e.map(Fe):[Fe(e)]}var Ue=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideDocumentHighlights",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),Se(n))})).then((function(e){if(e)return e.map((function(e){return{range:Oe(e.range),kind:We(e.kind)}}))}))}}]),e}();function We(e){switch(e){case ae.Read:return h.languages.DocumentHighlightKind.Read;case ae.Write:return h.languages.DocumentHighlightKind.Write;case ae.Text:return h.languages.DocumentHighlightKind.Text}return h.languages.DocumentHighlightKind.Text}var Ve=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideDefinition",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDefinition(r.toString(),Se(n))})).then((function(e){if(e)return[He(e)]}))}}]),e}();function He(e){return{uri:h.Uri.parse(e.uri),range:Oe(e.range)}}var Ke=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideReferences",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.findReferences(i.toString(),Se(n))})).then((function(e){if(e)return e.map(He)}))}}]),e}(),ze=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideRenameEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),Se(n),t)})).then((function(e){return Xe(e)}))}}]),e}();function Xe(e){if(e&&e.changes){var n=[];for(var t in e.changes){var r,i=h.Uri.parse(t),o=Object(u["a"])(e.changes[t]);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.push({resource:i,edit:{range:Oe(a.range),text:a.newText}})}}catch(s){o.e(s)}finally{o.f()}}return{edits:n}}}var Be=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideDocumentSymbols",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:Je(e.kind),range:Oe(e.location.range),selectionRange:Oe(e.location.range),tags:[]}}))}))}}]),e}();function Je(e){var n=h.languages.SymbolKind;switch(e){case se.File:return n.Array;case se.Module:return n.Module;case se.Namespace:return n.Namespace;case se.Package:return n.Package;case se.Class:return n.Class;case se.Method:return n.Method;case se.Property:return n.Property;case se.Field:return n.Field;case se.Constructor:return n.Constructor;case se.Enum:return n.Enum;case se.Interface:return n.Interface;case se.Function:return n.Function;case se.Variable:return n.Variable;case se.Constant:return n.Constant;case se.String:return n.String;case se.Number:return n.Number;case se.Boolean:return n.Boolean;case se.Array:return n.Array}return n.Function}var Qe=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideLinks",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentLinks(t.toString())})).then((function(e){if(e)return{links:e.map((function(e){return{range:Oe(e.range),url:e.target}}))}}))}}]),e}(),$e=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideDocumentFormattingEdits",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,Ge(n)).then((function(e){if(e&&0!==e.length)return e.map(De)}))}))}}]),e}(),qe=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideDocumentRangeFormattingEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),je(n),Ge(t)).then((function(e){if(e&&0!==e.length)return e.map(De)}))}))}}]),e}();function Ge(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Ye=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideDocumentColors",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:Oe(e.range)}}))}))}},{key:"provideColorPresentations",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,je(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=De(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(De)),n}))}))}}]),e}(),Ze=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideFoldingRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=en(e.kind)),n}))}))}}]),e}();function en(e){switch(e){case E.Comment:return h.languages.FoldingRangeKind.Comment;case E.Imports:return h.languages.FoldingRangeKind.Imports;case E.Region:return h.languages.FoldingRangeKind.Region}}var nn=function(){function e(n){Object(o["a"])(this,e),this._worker=n}return Object(a["a"])(e,[{key:"provideSelectionRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),n.map(Se))})).then((function(e){if(e)return e.map((function(e){var n=[];while(e)n.push({range:Oe(e.range)}),e=e.parent;return n}))}))}}]),e}();function tn(e){var n=[],t=[],r=new H(e);n.push(r);var i=function(){return r.getLanguageServiceWorker.apply(r,arguments)};function o(){var n=e.languageId,r=e.modeConfiguration;on(t),r.completionItems&&t.push(h.languages.registerCompletionItemProvider(n,new Ie(i,["/","-",":"]))),r.hovers&&t.push(h.languages.registerHoverProvider(n,new Pe(i))),r.documentHighlights&&t.push(h.languages.registerDocumentHighlightProvider(n,new Ue(i))),r.definitions&&t.push(h.languages.registerDefinitionProvider(n,new Ve(i))),r.references&&t.push(h.languages.registerReferenceProvider(n,new Ke(i))),r.documentSymbols&&t.push(h.languages.registerDocumentSymbolProvider(n,new Be(i))),r.rename&&t.push(h.languages.registerRenameProvider(n,new ze(i))),r.colors&&t.push(h.languages.registerColorProvider(n,new Ye(i))),r.foldingRanges&&t.push(h.languages.registerFoldingRangeProvider(n,new Ze(i))),r.diagnostics&&t.push(new Ee(n,i,e.onDidChange)),r.selectionRanges&&t.push(h.languages.registerSelectionRangeProvider(n,new nn(i)))}return o(),n.push(rn(t)),rn(n)}function rn(e){return{dispose:function(){return on(e)}}}function on(e){while(e.length)e.pop().dispose()}}}]);