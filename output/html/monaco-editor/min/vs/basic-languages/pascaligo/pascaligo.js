define("vs/basic-languages/pascaligo/pascaligo",["require","require"],(e=>{var o=(()=>{var e=Object.defineProperty,o=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,r=o=>e(o,"__esModule",{value:!0}),s=(o,t)=>{for(var n in t)e(o,n,{get:t[n],enumerable:!0})},i=(r,s,i,a)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let l of t(s))!n.call(r,l)&&(i||"default"!==l)&&e(r,l,{get:()=>s[l],enumerable:!(a=o(s,l))||a.enumerable});return r},a=(e=>(o,t)=>e&&e.get(o)||(t=i(r({}),o,1),e&&e.set(o,t),t))("undefined"!=typeof WeakMap?new WeakMap:0),l={};s(l,{conf:()=>c,language:()=>p});var c={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}]},p={defaultToken:"",tokenPostfix:".pascaligo",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["begin","block","case","const","else","end","fail","for","from","function","if","is","nil","of","remove","return","skip","then","type","var","while","with","option","None","transaction"],typeKeywords:["bool","int","list","map","nat","record","string","unit","address","map","mtz","xtz"],operators:["=",">","<","<=",">=","<>",":",":=","and","mod","or","+","-","*","/","@","&","^","%"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\(\*]+/,"comment"],[/\*\)/,"comment","@pop"],[/\(\*/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}};return a(l)})();return o}));