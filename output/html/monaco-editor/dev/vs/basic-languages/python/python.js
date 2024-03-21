define("vs/basic-languages/python/python",["require"],(e=>{var t=(()=>{var t=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,a=e=>n(e,"__esModule",{value:!0}),l=(t=>"undefined"!==typeof e?e:"undefined"!==typeof Proxy?new Proxy(t,{get:(t,n)=>("undefined"!==typeof e?e:t)[n]}):t)((function(t){if("undefined"!==typeof e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')})),p=(e,t)=>function(){return t||(0,e[o(e)[0]])((t={exports:{}}).exports,t),t.exports},c=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},d=(e,t,s,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of o(t))i.call(e,l)||!s&&"default"===l||n(e,l,{get:()=>t[l],enumerable:!(a=r(t,l))||a.enumerable});return e},g=(e,r)=>d(a(n(null!=e?t(s(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),u=(e=>(t,n)=>e&&e.get(t)||(n=d(a({}),t,1),e&&e.set(t,n),n))("undefined"!==typeof WeakMap?new WeakMap:0),f=p({"src/fillers/monaco-editor-core-amd.ts"(e,t){var n=g(l("vs/editor/editor.api"));t.exports=n}}),m={};c(m,{conf:()=>b,language:()=>y});var _={};d(_,g(f()));var b={comments:{lineComment:"#",blockComment:["'''","'''"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$"),action:{indentAction:_.languages.IndentAction.Indent}}],folding:{offSide:!0,markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},y={defaultToken:"",tokenPostfix:".python",keywords:["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","exec","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","print","raise","return","try","while","with","yield","int","float","long","complex","hex","abs","all","any","apply","basestring","bin","bool","buffer","bytearray","callable","chr","classmethod","cmp","coerce","compile","complex","delattr","dict","dir","divmod","enumerate","eval","execfile","file","filter","format","frozenset","getattr","globals","hasattr","hash","help","id","input","intern","isinstance","issubclass","iter","len","locals","list","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","reversed","range","raw_input","reduce","reload","repr","reversed","round","self","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","unichr","unicode","vars","xrange","zip","__dict__","__methods__","__members__","__class__","__bases__","__name__","__mro__","__subclasses__","__init__","__import__"],brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"}],tokenizer:{root:[{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},[/[,:;]/,"delimiter"],[/[{}\[\]()]/,"@brackets"],[/@[a-zA-Z_]\w*/,"tag"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"keyword","@default":"identifier"}}]],whitespace:[[/\s+/,"white"],[/(^#.*$)/,"comment"],[/'''/,"string","@endDocString"],[/"""/,"string","@endDblDocString"]],endDocString:[[/[^']+/,"string"],[/\\'/,"string"],[/'''/,"string","@popall"],[/'/,"string"]],endDblDocString:[[/[^"]+/,"string"],[/\\"/,"string"],[/"""/,"string","@popall"],[/"/,"string"]],numbers:[[/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/,"number.hex"],[/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/,"number"]],strings:[[/'$/,"string.escape","@popall"],[/'/,"string.escape","@stringBody"],[/"$/,"string.escape","@popall"],[/"/,"string.escape","@dblStringBody"]],stringBody:[[/[^\\']+$/,"string","@popall"],[/[^\\']+/,"string"],[/\\./,"string"],[/'/,"string.escape","@popall"],[/\\$/,"string"]],dblStringBody:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,"string.escape","@popall"],[/\\$/,"string"]]}};return u(m)})();return t}));