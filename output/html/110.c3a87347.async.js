(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{"4yiN":function(e,t,r){"use strict";r.r(t),r.d(t,"Adapter",(function(){return I})),r.d(t,"CodeActionAdaptor",(function(){return q})),r.d(t,"DefinitionAdapter",(function(){return E})),r.d(t,"DiagnosticsAdapter",(function(){return T})),r.d(t,"FormatAdapter",(function(){return G})),r.d(t,"FormatHelper",(function(){return J})),r.d(t,"FormatOnTypeAdapter",(function(){return Q})),r.d(t,"InlayHintsAdapter",(function(){return Y})),r.d(t,"Kind",(function(){return W})),r.d(t,"LibFiles",(function(){return L})),r.d(t,"OccurrencesAdapter",(function(){return R})),r.d(t,"OutlineAdapter",(function(){return V})),r.d(t,"QuickInfoAdapter",(function(){return M})),r.d(t,"ReferenceAdapter",(function(){return H})),r.d(t,"RenameAdapter",(function(){return X})),r.d(t,"SignatureHelpAdapter",(function(){return K})),r.d(t,"SuggestAdapter",(function(){return P})),r.d(t,"WorkerManager",(function(){return C})),r.d(t,"flattenDiagnosticMessageText",(function(){return D})),r.d(t,"getJavaScriptWorker",(function(){return ee})),r.d(t,"getTypeScriptWorker",(function(){return te})),r.d(t,"setupJavaScript",(function(){return $})),r.d(t,"setupTypeScript",(function(){return Z}));var n,i,a,s,o=r("k1fw"),u=r("Pv/L"),c=r("yKVA"),l=r("879j"),d=r("WmNS"),p=r.n(d),f=r("9og8"),b=r("fWQN"),g=r("mtLc"),h=r("rAM+"),m=r("8z58"),v=r("z3hU"),y=Object.defineProperty,k=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,O=Object.prototype.hasOwnProperty,w=function(e,t,r){return t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},_=function(e,t,r,n){if(t&&"object"===typeof t||"function"===typeof t){var i,a=Object(h["a"])(x(t));try{var s=function(){var a=i.value;O.call(e,a)||!r&&"default"===a||y(e,a,{get:function(){return t[a]},enumerable:!(n=k(t,a))||n.enumerable})};for(a.s();!(i=a.n()).done;)s()}catch(o){a.e(o)}finally{a.f()}}return e},S=function(e,t,r){return w(e,"symbol"!==typeof t?t+"":t,r),r},j={};_(j,m);var C=(n=function(){function e(t,r){var n=this;Object(b["a"])(this,e),this._modeId=void 0,this._defaults=void 0,this._configChangeListener=void 0,this._updateExtraLibsToken=void 0,this._extraLibsChangeListener=void 0,this._worker=void 0,this._client=void 0,this._modeId=t,this._defaults=r,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return Object(g["a"])(e,[{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"dispose",value:function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}},{key:"_updateExtraLibs",value:function(){var e=Object(f["a"])(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._worker){e.next=2;break}return e.abrupt("return");case 2:return t=++this._updateExtraLibsToken,e.next=5,this._worker.getProxy();case 5:if(r=e.sent,this._updateExtraLibsToken===t){e.next=8;break}return e.abrupt("return");case 8:r.updateExtraLibs(this._defaults.getExtraLibs());case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"_getClient",value:function(){var e=this;if(!this._client){this._worker=j.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(j.editor.getModels().filter((function(t){return t.getLanguageId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e,t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))}}]),e}(),n),A={};function D(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("string"===typeof e)return e;if(void 0===e)return"";var n="";if(r){n+=t;for(var i=0;i<r;i++)n+="  "}if(n+=e.messageText,r++,e.next){var a,s=Object(h["a"])(e.next);try{for(s.s();!(a=s.n()).done;){var o=a.value;n+=D(o,t,r)}}catch(u){s.e(u)}finally{s.f()}}return n}function F(e){return e?e.map((function(e){return e.text})).join(""):""}A["lib.d.ts"]=!0,A["lib.dom.d.ts"]=!0,A["lib.dom.iterable.d.ts"]=!0,A["lib.es2015.collection.d.ts"]=!0,A["lib.es2015.core.d.ts"]=!0,A["lib.es2015.d.ts"]=!0,A["lib.es2015.generator.d.ts"]=!0,A["lib.es2015.iterable.d.ts"]=!0,A["lib.es2015.promise.d.ts"]=!0,A["lib.es2015.proxy.d.ts"]=!0,A["lib.es2015.reflect.d.ts"]=!0,A["lib.es2015.symbol.d.ts"]=!0,A["lib.es2015.symbol.wellknown.d.ts"]=!0,A["lib.es2016.array.include.d.ts"]=!0,A["lib.es2016.d.ts"]=!0,A["lib.es2016.full.d.ts"]=!0,A["lib.es2017.d.ts"]=!0,A["lib.es2017.full.d.ts"]=!0,A["lib.es2017.intl.d.ts"]=!0,A["lib.es2017.object.d.ts"]=!0,A["lib.es2017.sharedmemory.d.ts"]=!0,A["lib.es2017.string.d.ts"]=!0,A["lib.es2017.typedarrays.d.ts"]=!0,A["lib.es2018.asyncgenerator.d.ts"]=!0,A["lib.es2018.asynciterable.d.ts"]=!0,A["lib.es2018.d.ts"]=!0,A["lib.es2018.full.d.ts"]=!0,A["lib.es2018.intl.d.ts"]=!0,A["lib.es2018.promise.d.ts"]=!0,A["lib.es2018.regexp.d.ts"]=!0,A["lib.es2019.array.d.ts"]=!0,A["lib.es2019.d.ts"]=!0,A["lib.es2019.full.d.ts"]=!0,A["lib.es2019.object.d.ts"]=!0,A["lib.es2019.string.d.ts"]=!0,A["lib.es2019.symbol.d.ts"]=!0,A["lib.es2020.bigint.d.ts"]=!0,A["lib.es2020.d.ts"]=!0,A["lib.es2020.full.d.ts"]=!0,A["lib.es2020.intl.d.ts"]=!0,A["lib.es2020.promise.d.ts"]=!0,A["lib.es2020.sharedmemory.d.ts"]=!0,A["lib.es2020.string.d.ts"]=!0,A["lib.es2020.symbol.wellknown.d.ts"]=!0,A["lib.es2021.d.ts"]=!0,A["lib.es2021.full.d.ts"]=!0,A["lib.es2021.intl.d.ts"]=!0,A["lib.es2021.promise.d.ts"]=!0,A["lib.es2021.string.d.ts"]=!0,A["lib.es2021.weakref.d.ts"]=!0,A["lib.es5.d.ts"]=!0,A["lib.es6.d.ts"]=!0,A["lib.esnext.d.ts"]=!0,A["lib.esnext.full.d.ts"]=!0,A["lib.esnext.intl.d.ts"]=!0,A["lib.esnext.promise.d.ts"]=!0,A["lib.esnext.string.d.ts"]=!0,A["lib.esnext.weakref.d.ts"]=!0,A["lib.scripthost.d.ts"]=!0,A["lib.webworker.d.ts"]=!0,A["lib.webworker.importscripts.d.ts"]=!0,A["lib.webworker.iterable.d.ts"]=!0;var I=function(){function e(t){Object(b["a"])(this,e),this._worker=t}return Object(g["a"])(e,[{key:"_textSpanToRange",value:function(e,t){var r=e.getPositionAt(t.start),n=e.getPositionAt(t.start+t.length),i=r.lineNumber,a=r.column,s=n.lineNumber,o=n.column;return{startLineNumber:i,startColumn:a,endLineNumber:s,endColumn:o}}}]),e}(),L=(i=function(){function e(t){Object(b["a"])(this,e),this._libFiles=void 0,this._hasFetchedLibFiles=void 0,this._fetchLibFilesPromise=void 0,this._worker=t,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return Object(g["a"])(e,[{key:"isLibFile",value:function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!A[e.path.slice(1)])}},{key:"getOrCreateModel",value:function(e){var t=j.Uri.parse(e),r=j.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return j.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);var n=v["a"].getExtraLibs()[e];return n?j.editor.createModel(n.content,"typescript",t):null}},{key:"_containsLibFile",value:function(e){var t,r=Object(h["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this.isLibFile(n))return!0}}catch(i){r.e(i)}finally{r.f()}return!1}},{key:"fetchLibFilesIfNecessary",value:function(){var e=Object(f["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._containsLibFile(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._fetchLibFiles();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_fetchLibFiles",value:function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise}}]),e}(),i),T=(a=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(e,n,i,a){var s;Object(b["a"])(this,r),s=t.call(this,a),s._disposables=[],s._listener=Object.create(null),s._libFiles=e,s._defaults=n,s._selector=i;var o=function(e){if(e.getLanguageId()===i){var t,r=function(){var t=s._defaults.getDiagnosticsOptions(),r=t.onlyVisible;r?e.isAttachedToEditor()&&s._doValidate(e):s._doValidate(e)},n=e.onDidChangeContent((function(){clearTimeout(t),t=window.setTimeout(r,500)})),a=e.onDidChangeAttached((function(){var t=s._defaults.getDiagnosticsOptions(),n=t.onlyVisible;n&&(e.isAttachedToEditor()?r():j.editor.setModelMarkers(e,s._selector,[]))}));s._listener[e.uri.toString()]={dispose:function(){n.dispose(),a.dispose(),clearTimeout(t)}},r()}},u=function(e){j.editor.setModelMarkers(e,s._selector,[]);var t=e.uri.toString();s._listener[t]&&(s._listener[t].dispose(),delete s._listener[t])};s._disposables.push(j.editor.onDidCreateModel((function(e){return o(e)}))),s._disposables.push(j.editor.onWillDisposeModel(u)),s._disposables.push(j.editor.onDidChangeModelLanguage((function(e){u(e.model),o(e.model)}))),s._disposables.push({dispose:function(){var e,t=Object(h["a"])(j.editor.getModels());try{for(t.s();!(e=t.n()).done;){var r=e.value;u(r)}}catch(n){t.e(n)}finally{t.f()}}});var c=function(){var e,t=Object(h["a"])(j.editor.getModels());try{for(t.s();!(e=t.n()).done;){var r=e.value;u(r),o(r)}}catch(n){t.e(n)}finally{t.f()}};return s._disposables.push(s._defaults.onDidChange(c)),s._disposables.push(s._defaults.onDidExtraLibsChange(c)),j.editor.getModels().forEach((function(e){return o(e)})),s}return Object(g["a"])(r,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]}},{key:"_doValidate",value:function(){var e=Object(f["a"])(p.a.mark((function e(t){var r,n,i,a,s,o,u,c,l,d=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._worker(t.uri);case 2:if(r=e.sent,!t.isDisposed()){e.next=5;break}return e.abrupt("return");case 5:return n=[],i=this._defaults.getDiagnosticsOptions(),a=i.noSyntaxValidation,s=i.noSemanticValidation,o=i.noSuggestionDiagnostics,a||n.push(r.getSyntacticDiagnostics(t.uri.toString())),s||n.push(r.getSemanticDiagnostics(t.uri.toString())),o||n.push(r.getSuggestionDiagnostics(t.uri.toString())),e.next=12,Promise.all(n);case 12:if(u=e.sent,u&&!t.isDisposed()){e.next=15;break}return e.abrupt("return");case 15:return c=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),l=c.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?j.Uri.parse(e.file.fileName):null})),e.next=19,this._libFiles.fetchLibFilesIfNecessary(l);case 19:if(!t.isDisposed()){e.next=21;break}return e.abrupt("return");case 21:j.editor.setModelMarkers(t,this._selector,c.map((function(e){return d._convertDiagnostics(t,e)})));case 22:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_convertDiagnostics",value:function(e,t){var r=t.start||0,n=t.length||1,i=e.getPositionAt(r),a=i.lineNumber,s=i.column,o=e.getPositionAt(r+n),u=o.lineNumber,c=o.column,l=[];return t.reportsUnnecessary&&l.push(j.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(j.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:s,endLineNumber:u,endColumn:c,message:D(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}},{key:"_convertRelatedInformation",value:function(e,t){var r=this;if(!t)return[];var n=[];return t.forEach((function(t){var i=e;if(t.file&&(i=r._libFiles.getOrCreateModel(t.file.fileName)),i){var a=t.start||0,s=t.length||1,o=i.getPositionAt(a),u=o.lineNumber,c=o.column,l=i.getPositionAt(a+s),d=l.lineNumber,p=l.column;n.push({resource:i.uri,startLineNumber:u,startColumn:c,endLineNumber:d,endColumn:p,message:D(t.messageText,"\n")})}})),n}},{key:"_tsDiagnosticCategoryToMarkerSeverity",value:function(e){switch(e){case 1:return j.MarkerSeverity.Error;case 3:return j.MarkerSeverity.Info;case 0:return j.MarkerSeverity.Warning;case 2:return j.MarkerSeverity.Hint}return j.MarkerSeverity.Info}}]),r}(I),a),P=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideCompletionItems",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,n,i,a){var s,o,u,c,l,d,f;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.getWordUntilPosition(n),o=new j.Range(n.lineNumber,s.startColumn,n.lineNumber,s.endColumn),u=t.uri,c=t.getOffsetAt(n),e.next=6,this._worker(u);case 6:if(l=e.sent,!t.isDisposed()){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,l.getCompletionsAtPosition(u.toString(),c);case 11:if(d=e.sent,d&&!t.isDisposed()){e.next=14;break}return e.abrupt("return");case 14:return f=d.entries.map((function(e){var i,a=o;if(e.replacementSpan){var s=t.getPositionAt(e.replacementSpan.start),l=t.getPositionAt(e.replacementSpan.start+e.replacementSpan.length);a=new j.Range(s.lineNumber,s.column,l.lineNumber,l.column)}var d=[];return-1!==(null===(i=e.kindModifiers)||void 0===i?void 0:i.indexOf("deprecated"))&&d.push(j.languages.CompletionItemTag.Deprecated),{uri:u,position:n,offset:c,range:a,label:e.name,insertText:e.name,sortText:e.sortText,kind:r.convertKind(e.kind),tags:d}})),e.abrupt("return",{suggestions:f});case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()},{key:"resolveCompletionItem",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,n){var i,a,s,o,u,c;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,a=i.uri,s=i.position,o=i.offset,e.next=6,this._worker(a);case 6:return u=e.sent,e.next=9,u.getCompletionEntryDetails(a.toString(),o,i.label);case 9:if(c=e.sent,c){e.next=12;break}return e.abrupt("return",i);case 12:return e.abrupt("return",{uri:a,position:s,label:c.name,kind:r.convertKind(c.kind),detail:F(c.displayParts),documentation:{value:r.createDocumentationString(c)}});case 13:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"triggerCharacters",get:function(){return["."]}}],[{key:"convertKind",value:function(e){switch(e){case W.primitiveType:case W.keyword:return j.languages.CompletionItemKind.Keyword;case W.variable:case W.localVariable:return j.languages.CompletionItemKind.Variable;case W.memberVariable:case W.memberGetAccessor:case W.memberSetAccessor:return j.languages.CompletionItemKind.Field;case W.function:case W.memberFunction:case W.constructSignature:case W.callSignature:case W.indexSignature:return j.languages.CompletionItemKind.Function;case W.enum:return j.languages.CompletionItemKind.Enum;case W.module:return j.languages.CompletionItemKind.Module;case W.class:return j.languages.CompletionItemKind.Class;case W.interface:return j.languages.CompletionItemKind.Interface;case W.warning:return j.languages.CompletionItemKind.File}return j.languages.CompletionItemKind.Property}},{key:"createDocumentationString",value:function(e){var t=F(e.documentation);if(e.tags){var r,n=Object(h["a"])(e.tags);try{for(n.s();!(r=n.n()).done;){var i=r.value;t+="\n\n".concat(N(i))}}catch(a){n.e(a)}finally{n.f()}}return t}}]),r}(I);function N(e){var t="*@".concat(e.name,"*");if("param"===e.name&&e.text){var r=Object(u["a"])(e.text),n=r[0],i=r.slice(1);t+="`".concat(n.text,"`"),i.length>0&&(t+=" \u2014 ".concat(i.map((function(e){return e.text})).join(" ")))}else Array.isArray(e.text)?t+=" \u2014 ".concat(e.text.map((function(e){return e.text})).join(" ")):e.text&&(t+=" \u2014 ".concat(e.text));return t}var K=(s=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;Object(b["a"])(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),e.signatureHelpTriggerCharacters=["(",","],e}return Object(g["a"])(r,[{key:"provideSignatureHelp",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,n,i,a){var s,o,u,c,l;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.uri,o=t.getOffsetAt(n),e.next=4,this._worker(s);case 4:if(u=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,u.getSignatureHelpItems(s.toString(),o,{triggerReason:r._toSignatureHelpTriggerReason(a)});case 9:if(c=e.sent,c&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return l={activeSignature:c.selectedItemIndex,activeParameter:c.argumentIndex,signatures:[]},c.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:F(e.documentation)},t.label+=F(e.prefixDisplayParts),e.parameters.forEach((function(r,n,i){var a=F(r.displayParts),s={label:a,documentation:{value:F(r.documentation)}};t.label+=a,t.parameters.push(s),n<i.length-1&&(t.label+=F(e.separatorDisplayParts))})),t.label+=F(e.suffixDisplayParts),l.signatures.push(t)})),e.abrupt("return",{value:l,dispose:function(){}});case 15:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}],[{key:"_toSignatureHelpTriggerReason",value:function(e){switch(e.triggerKind){case j.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case j.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case j.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}}]),r}(I),s),M=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideHover",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n){var i,a,s,o,u,c,l;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=t.getOffsetAt(r),e.next=4,this._worker(i);case 4:if(s=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,s.getQuickInfoAtPosition(i.toString(),a);case 9:if(o=e.sent,o&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return u=F(o.documentation),c=o.tags?o.tags.map((function(e){return N(e)})).join("  \n\n"):"",l=F(o.displayParts),e.abrupt("return",{range:this._textSpanToRange(t,o.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:u+(c?"\n\n"+c:"")}]});case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),r}(I),R=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideDocumentHighlights",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n){var i,a,s,o,u=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=t.getOffsetAt(r),e.next=4,this._worker(i);case 4:if(s=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,s.getOccurrencesAtPosition(i.toString(),a);case 9:if(o=e.sent,o&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.abrupt("return",o.map((function(e){return{range:u._textSpanToRange(t,e.textSpan),kind:e.isWriteAccess?j.languages.DocumentHighlightKind.Write:j.languages.DocumentHighlightKind.Text}})));case 13:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),r}(I),E=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(e,n){var i;return Object(b["a"])(this,r),i=t.call(this,n),i._libFiles=e,i}return Object(g["a"])(r,[{key:"provideDefinition",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n){var i,a,s,o,u,c,l,d,f;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=t.getOffsetAt(r),e.next=4,this._worker(i);case 4:if(s=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,s.getDefinitionAtPosition(i.toString(),a);case 9:if(o=e.sent,o&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return j.Uri.parse(e.fileName)})));case 14:if(!t.isDisposed()){e.next=16;break}return e.abrupt("return");case 16:u=[],c=Object(h["a"])(o);try{for(c.s();!(l=c.n()).done;)d=l.value,f=this._libFiles.getOrCreateModel(d.fileName),f&&u.push({uri:f.uri,range:this._textSpanToRange(f,d.textSpan)})}catch(n){c.e(n)}finally{c.f()}return e.abrupt("return",u);case 20:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),r}(I),H=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(e,n){var i;return Object(b["a"])(this,r),i=t.call(this,n),i._libFiles=e,i}return Object(g["a"])(r,[{key:"provideReferences",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n,i){var a,s,o,u,c,l,d,f,b;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=t.getOffsetAt(r),e.next=4,this._worker(a);case 4:if(o=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,o.getReferencesAtPosition(a.toString(),s);case 9:if(u=e.sent,u&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,this._libFiles.fetchLibFilesIfNecessary(u.map((function(e){return j.Uri.parse(e.fileName)})));case 14:if(!t.isDisposed()){e.next=16;break}return e.abrupt("return");case 16:c=[],l=Object(h["a"])(u);try{for(l.s();!(d=l.n()).done;)f=d.value,b=this._libFiles.getOrCreateModel(f.fileName),b&&c.push({uri:b.uri,range:this._textSpanToRange(b,f.textSpan)})}catch(n){l.e(n)}finally{l.f()}return e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}]),r}(I),V=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideDocumentSymbols",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r){var n,i,a,s,o,u=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.uri,e.next=3,this._worker(n);case 3:if(i=e.sent,!t.isDisposed()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,i.getNavigationBarItems(n.toString());case 8:if(a=e.sent,a&&!t.isDisposed()){e.next=11;break}return e.abrupt("return");case 11:return s=function e(r,n,i){var a={name:n.text,detail:"",kind:B[n.kind]||j.languages.SymbolKind.Variable,range:u._textSpanToRange(t,n.spans[0]),selectionRange:u._textSpanToRange(t,n.spans[0]),tags:[]};if(i&&(a.containerName=i),n.childItems&&n.childItems.length>0){var s,o=Object(h["a"])(n.childItems);try{for(o.s();!(s=o.n()).done;){var c=s.value;e(r,c,a.name)}}catch(l){o.e(l)}finally{o.f()}}r.push(a)},o=[],a.forEach((function(e){return s(o,e)})),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}]),r}(I),W=function e(){Object(b["a"])(this,e)};S(W,"unknown",""),S(W,"keyword","keyword"),S(W,"script","script"),S(W,"module","module"),S(W,"class","class"),S(W,"interface","interface"),S(W,"type","type"),S(W,"enum","enum"),S(W,"variable","var"),S(W,"localVariable","local var"),S(W,"function","function"),S(W,"localFunction","local function"),S(W,"memberFunction","method"),S(W,"memberGetAccessor","getter"),S(W,"memberSetAccessor","setter"),S(W,"memberVariable","property"),S(W,"constructorImplementation","constructor"),S(W,"callSignature","call"),S(W,"indexSignature","index"),S(W,"constructSignature","construct"),S(W,"parameter","parameter"),S(W,"typeParameter","type parameter"),S(W,"primitiveType","primitive type"),S(W,"label","label"),S(W,"alias","alias"),S(W,"const","const"),S(W,"let","let"),S(W,"warning","warning");var B=Object.create(null);B[W.module]=j.languages.SymbolKind.Module,B[W.class]=j.languages.SymbolKind.Class,B[W.enum]=j.languages.SymbolKind.Enum,B[W.interface]=j.languages.SymbolKind.Interface,B[W.memberFunction]=j.languages.SymbolKind.Method,B[W.memberVariable]=j.languages.SymbolKind.Property,B[W.memberGetAccessor]=j.languages.SymbolKind.Property,B[W.memberSetAccessor]=j.languages.SymbolKind.Property,B[W.variable]=j.languages.SymbolKind.Variable,B[W.const]=j.languages.SymbolKind.Variable,B[W.localVariable]=j.languages.SymbolKind.Variable,B[W.variable]=j.languages.SymbolKind.Variable,B[W.function]=j.languages.SymbolKind.Function,B[W.localFunction]=j.languages.SymbolKind.Function;var U,z,J=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"_convertTextChanges",value:function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}}],[{key:"_convertOptions",value:function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}}]),r}(I),G=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideDocumentRangeFormattingEdits",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n,i){var a,s,o,u,c,l=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=t.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn}),o=t.getOffsetAt({lineNumber:r.endLineNumber,column:r.endColumn}),e.next=5,this._worker(a);case 5:if(u=e.sent,!t.isDisposed()){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,u.getFormattingEditsForRange(a.toString(),s,o,J._convertOptions(n));case 10:if(c=e.sent,c&&!t.isDisposed()){e.next=13;break}return e.abrupt("return");case 13:return e.abrupt("return",c.map((function(e){return l._convertTextChanges(t,e)})));case 14:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}]),r}(J),Q=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideOnTypeFormattingEdits",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n,i,a){var s,o,u,c,l=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.uri,o=t.getOffsetAt(r),e.next=4,this._worker(s);case 4:if(u=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,u.getFormattingEditsAfterKeystroke(s.toString(),o,n,J._convertOptions(i));case 9:if(c=e.sent,c&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.abrupt("return",c.map((function(e){return l._convertTextChanges(t,e)})));case 13:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i,a){return e.apply(this,arguments)}return t}()},{key:"autoFormatTriggerCharacters",get:function(){return[";","}","\n"]}}]),r}(J),q=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideCodeActions",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n,i){var a,s,o,u,c,l,d,f,b=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=t.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn}),o=t.getOffsetAt({lineNumber:r.endLineNumber,column:r.endColumn}),u=J._convertOptions(t.getOptions()),c=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),e.next=7,this._worker(a);case 7:if(l=e.sent,!t.isDisposed()){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,l.getCodeFixesAtPosition(a.toString(),s,o,c,u);case 12:if(d=e.sent,d&&!t.isDisposed()){e.next=15;break}return e.abrupt("return",{actions:[],dispose:function(){}});case 15:return f=d.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(e){return b._tsCodeFixActionToMonacoCodeAction(t,n,e)})),e.abrupt("return",{actions:f,dispose:function(){}});case 17:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()},{key:"_tsCodeFixActionToMonacoCodeAction",value:function(e,t,r){var n,i=[],a=Object(h["a"])(r.changes);try{for(a.s();!(n=a.n()).done;){var s,o=n.value,u=Object(h["a"])(o.textChanges);try{for(u.s();!(s=u.n()).done;){var c=s.value;i.push({resource:e.uri,edit:{range:this._textSpanToRange(e,c.span),text:c.newText}})}}catch(d){u.e(d)}finally{u.f()}}}catch(d){a.e(d)}finally{a.f()}var l={title:r.description,edit:{edits:i},diagnostics:t.markers,kind:"quickfix"};return l}}]),r}(J),X=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(e,n){var i;return Object(b["a"])(this,r),i=t.call(this,n),i._libFiles=e,i}return Object(g["a"])(r,[{key:"provideRenameEdits",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n,i){var a,s,o,u,c,l,d,f,b,g,m;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=a.toString(),o=t.getOffsetAt(r),e.next=5,this._worker(a);case 5:if(u=e.sent,!t.isDisposed()){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,u.getRenameInfo(s,o,{allowRenameOfImportPath:!1});case 10:if(c=e.sent,!1!==c.canRename){e.next=13;break}return e.abrupt("return",{edits:[],rejectReason:c.localizedErrorMessage});case 13:if(void 0===c.fileToRename){e.next=15;break}throw new Error("Renaming files is not supported.");case 15:return e.next=17,u.findRenameLocations(s,o,!1,!1,!1);case 17:if(l=e.sent,l&&!t.isDisposed()){e.next=20;break}return e.abrupt("return");case 20:d=[],f=Object(h["a"])(l),e.prev=22,f.s();case 24:if((b=f.n()).done){e.next=34;break}if(g=b.value,m=this._libFiles.getOrCreateModel(g.fileName),!m){e.next=31;break}d.push({resource:m.uri,edit:{range:this._textSpanToRange(m,g.textSpan),text:n}}),e.next=32;break;case 31:throw new Error("Unknown file ".concat(g.fileName,"."));case 32:e.next=24;break;case 34:e.next=39;break;case 36:e.prev=36,e.t0=e["catch"](22),f.e(e.t0);case 39:return e.prev=39,f.f(),e.finish(39);case 42:return e.abrupt("return",{edits:d});case 43:case"end":return e.stop()}}),e,this,[[22,36,39,42]])})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}]),r}(I),Y=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(b["a"])(this,r),t.apply(this,arguments)}return Object(g["a"])(r,[{key:"provideInlayHints",value:function(){var e=Object(f["a"])(p.a.mark((function e(t,r,n){var i,a,s,u,c,l,d,f=this;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=i.toString(),s=t.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn}),u=t.getOffsetAt({lineNumber:r.endLineNumber,column:r.endColumn}),e.next=6,this._worker(i);case 6:if(c=e.sent,!t.isDisposed()){e.next=9;break}return e.abrupt("return",null);case 9:return e.next=11,c.provideInlayHints(a,s,u);case 11:return l=e.sent,d=l.map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{label:e.text,position:t.getPositionAt(e.position),kind:f._convertHintKind(e.kind)})})),e.abrupt("return",{hints:d,dispose:function(){}});case 14:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"_convertHintKind",value:function(e){switch(e){case"Parameter":return j.languages.InlayHintKind.Parameter;case"Type":return j.languages.InlayHintKind.Type;default:return j.languages.InlayHintKind.Other}}}]),r}(I);function Z(e){z=re(e,"typescript")}function $(e){U=re(e,"javascript")}function ee(){return new Promise((function(e,t){if(!U)return t("JavaScript not registered!");e(U)}))}function te(){return new Promise((function(e,t){if(!z)return t("TypeScript not registered!");e(z)}))}function re(e,t){var r=new C(t,e),n=function(){return r.getLanguageServiceWorker.apply(r,arguments)},i=new L(n);return j.languages.registerCompletionItemProvider(t,new P(n)),j.languages.registerSignatureHelpProvider(t,new K(n)),j.languages.registerHoverProvider(t,new M(n)),j.languages.registerDocumentHighlightProvider(t,new R(n)),j.languages.registerDefinitionProvider(t,new E(i,n)),j.languages.registerReferenceProvider(t,new H(i,n)),j.languages.registerDocumentSymbolProvider(t,new V(n)),j.languages.registerDocumentRangeFormattingEditProvider(t,new G(n)),j.languages.registerOnTypeFormattingEditProvider(t,new Q(n)),j.languages.registerCodeActionProvider(t,new q(n)),j.languages.registerRenameProvider(t,new X(i,n)),j.languages.registerInlayHintsProvider(t,new Y(n)),new T(i,e,t,n),n}}}]);