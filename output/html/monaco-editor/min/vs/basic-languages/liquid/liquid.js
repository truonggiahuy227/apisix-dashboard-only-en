define("vs/basic-languages/liquid/liquid",["require","require"],(e=>{var t=(()=>{var t=Object.create,i=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,a=e=>i(e,"__esModule",{value:!0}),d=(t=>"undefined"!=typeof e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,i)=>("undefined"!=typeof e?e:t)[i]}):t)((function(t){if("undefined"!=typeof e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),u=(e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})},c=(e,t,o,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let d of n(t))!l.call(e,d)&&(o||"default"!==d)&&i(e,d,{get:()=>t[d],enumerable:!(a=r(t,d))||a.enumerable});return e},m=(e,r)=>c(a(i(null!=e?t(o(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),p=(e=>(t,i)=>e&&e.get(t)||(i=c(a({}),t,1),e&&e.set(t,i),i))("undefined"!=typeof WeakMap?new WeakMap:0),f=s(((e,t)=>{var i=m(d("vs/editor/editor.api"));t.exports=i})),w={};u(w,{conf:()=>q,language:()=>h});var g={};c(g,m(f()));var b=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],q={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,brackets:[["\x3c!--","--\x3e"],["<",">"],["{{","}}"],["{%","%}"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"%",close:"%"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${b.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:g.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`<(?!(?:${b.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:g.languages.IndentAction.Indent}}]},h={defaultToken:"",tokenPostfix:"",builtinTags:["if","else","elseif","endif","render","assign","capture","endcapture","case","endcase","comment","endcomment","cycle","decrement","for","endfor","include","increment","layout","raw","endraw","render","tablerow","endtablerow","unless","endunless"],builtinFilters:["abs","append","at_least","at_most","capitalize","ceil","compact","date","default","divided_by","downcase","escape","escape_once","first","floor","join","json","last","lstrip","map","minus","modulo","newline_to_br","plus","prepend","remove","remove_first","replace","replace_first","reverse","round","rstrip","size","slice","sort","sort_natural","split","strip","strip_html","strip_newlines","times","truncate","truncatewords","uniq","upcase","url_decode","url_encode","where"],constants:["true","false"],operators:["==","!=",">","<",">=","<="],symbol:/[=><!]+/,identifier:/[a-zA-Z_][\w]*/,tokenizer:{root:[[/\{\%\s*comment\s*\%\}/,"comment.start.liquid","@comment"],[/\{\{/,{token:"@rematch",switchTo:"@liquidState.root"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.root"}],[/(<)([\w\-]+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)([\w\-]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/\{/,"delimiter.html"],[/[^<{]+/]],comment:[[/\{\%\s*endcomment\s*\%\}/,"comment.end.liquid","@pop"],[/./,"comment.content.liquid"]],otherTag:[[/\{\{/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],liquidState:[[/\{\{/,"delimiter.output.liquid"],[/\}\}/,{token:"delimiter.output.liquid",switchTo:"@$S2.$S3"}],[/\{\%/,"delimiter.tag.liquid"],[/raw\s*\%\}/,"delimiter.tag.liquid","@liquidRaw"],[/\%\}/,{token:"delimiter.tag.liquid",switchTo:"@$S2.$S3"}],{include:"liquidRoot"}],liquidRaw:[[/^(?!\{\%\s*endraw\s*\%\}).+/],[/\{\%/,"delimiter.tag.liquid"],[/@identifier/],[/\%\}/,{token:"delimiter.tag.liquid",next:"@root"}]],liquidRoot:[[/\d+(\.\d+)?/,"number.liquid"],[/"[^"]*"/,"string.liquid"],[/'[^']*'/,"string.liquid"],[/\s+/],[/@symbol/,{cases:{"@operators":"operator.liquid","@default":""}}],[/\./],[/@identifier/,{cases:{"@constants":"keyword.liquid","@builtinFilters":"predefined.liquid","@builtinTags":"predefined.liquid","@default":"variable.liquid"}}],[/[^}|%]/,"variable.liquid"]]}};return p(w)})();return t}));