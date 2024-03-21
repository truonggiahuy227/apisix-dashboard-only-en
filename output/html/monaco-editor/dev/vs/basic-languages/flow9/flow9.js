define("vs/basic-languages/flow9/flow9",["require"],(e=>{var t=(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,r=t=>e(t,"__esModule",{value:!0}),s=(t,o)=>{for(var n in o)e(t,n,{get:o[n],enumerable:!0})},i=(r,s,i,a)=>{if(s&&"object"===typeof s||"function"===typeof s)for(let l of o(s))n.call(r,l)||!i&&"default"===l||e(r,l,{get:()=>s[l],enumerable:!(a=t(s,l))||a.enumerable});return r},a=(e=>(t,o)=>e&&e.get(t)||(o=i(r({}),t,1),e&&e.set(t,o),o))("undefined"!==typeof WeakMap?new WeakMap:0),l={};s(l,{conf:()=>c,language:()=>p});var c={comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:"(",close:")",notIn:["string"]},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"<",close:">"}]},p={defaultToken:"",tokenPostfix:".flow",keywords:["import","require","export","forbid","native","if","else","cast","unsafe","switch","default"],types:["io","mutable","bool","int","double","string","flow","void","ref","true","false","with"],operators:["=",">","<","<=",">=","==","!","!=",":=","::=","&&","||","+","-","*","/","@","&","%",":","->","\\","$","??","^"],symbols:/[@$=><!~?:&|+\-*\\\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":"keyword","@types":"type","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"delimiter"],[/[<>](?!@symbols)/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]]}};return a(l)})();return t}));