(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{IzEo:function(e,n,a){"use strict";a("cIOH"),a("lnY3"),a("Znn+"),a("14J3"),a("jCWc")},R9oj:function(e,n,a){"use strict";a("cIOH"),a("pwpV")},XNi5:function(e,n,a){"use strict";function t(){var e="/Users/truonggiahuy/Documents/FPT-work/apisix-dashboard/web/src/pages/Dashboard/service.ts",n="a80f270f934110b8042aa80d72481a2960af46c7",a=new Function("return this")(),c="__coverage__",l={path:"/Users/truonggiahuy/Documents/FPT-work/apisix-dashboard/web/src/pages/Dashboard/service.ts",statementMap:{0:{start:{line:17,column:29},end:{line:20,column:4}},1:{start:{line:18,column:2},end:{line:20,column:4}},2:{start:{line:19,column:4},end:{line:19,column:70}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:17,column:29},end:{line:17,column:30}},loc:{start:{line:18,column:2},end:{line:20,column:4}},line:18},1:{name:"(anonymous_1)",decl:{start:{line:18,column:14},end:{line:18,column:15}},loc:{start:{line:18,column:27},end:{line:20,column:3}},line:18}},branchMap:{0:{loc:{start:{line:19,column:12},end:{line:19,column:68}},type:"binary-expr",locations:[{start:{line:19,column:12},end:{line:19,column:62}},{start:{line:19,column:66},end:{line:19,column:68}}],line:19}},s:{0:0,1:0,2:0},f:{0:0,1:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a80f270f934110b8042aa80d72481a2960af46c7"},r=a[c]||(a[c]={});r[e]&&r[e].hash===n||(r[e]=l);var o=r[e];return t=function(){return o},o}a.d(n,"a",(function(){return c})),t(),t().s[0]++;var c=function(){return t().f[0]++,t().s[1]++,new Promise((function(e){t().f[1]++,t().s[2]++,e((t().b[0][0]++,localStorage.getItem("GLOBAL_SETTING_GRAFANA_URL")||(t().b[0][1]++,"")))}))}},bx4M:function(e,n,a){"use strict";var t=a("rePB"),c=a("wx14"),l=a("q1tI"),r=a("TSYQ"),o=a.n(r),i=a("bT9E"),s=a("H84U"),u=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(t=Object.getOwnPropertySymbols(e);c<t.length;c++)n.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(e,t[c])&&(a[t[c]]=e[t[c]])}return a},m=function(e){var n=e.prefixCls,a=e.className,r=e.hoverable,i=void 0===r||r,m=u(e,["prefixCls","className","hoverable"]);return l["createElement"](s["a"],null,(function(e){var r=e.getPrefixCls,s=r("card",n),u=o()("".concat(s,"-grid"),a,Object(t["a"])({},"".concat(s,"-grid-hoverable"),i));return l["createElement"]("div",Object(c["a"])({},m,{className:u}))}))},d=m,b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(t=Object.getOwnPropertySymbols(e);c<t.length;c++)n.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(e,t[c])&&(a[t[c]]=e[t[c]])}return a},p=function(e){return l["createElement"](s["a"],null,(function(n){var a=n.getPrefixCls,t=e.prefixCls,r=e.className,i=e.avatar,s=e.title,u=e.description,m=b(e,["prefixCls","className","avatar","title","description"]),d=a("card",t),p=o()("".concat(d,"-meta"),r),f=i?l["createElement"]("div",{className:"".concat(d,"-meta-avatar")},i):null,h=s?l["createElement"]("div",{className:"".concat(d,"-meta-title")},s):null,v=u?l["createElement"]("div",{className:"".concat(d,"-meta-description")},u):null,g=h||v?l["createElement"]("div",{className:"".concat(d,"-meta-detail")},h,v):null;return l["createElement"]("div",Object(c["a"])({},m,{className:p}),f,g)}))},f=p,h=a("ZTPi"),v=a("BMrR"),g=a("kPKH"),y=a("3Nzz"),E=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(t=Object.getOwnPropertySymbols(e);c<t.length;c++)n.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(e,t[c])&&(a[t[c]]=e[t[c]])}return a};function O(e){var n=e.map((function(n,a){return l["createElement"]("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},l["createElement"]("span",null,n))}));return n}var x=function(e){var n,a,r,u=l["useContext"](s["b"]),m=u.getPrefixCls,b=u.direction,p=l["useContext"](y["b"]),f=function(n){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,n)},x=function(){var n;return l["Children"].forEach(e.children,(function(e){e&&e.type&&e.type===d&&(n=!0)})),n},j=e.prefixCls,w=e.className,N=e.extra,P=e.headStyle,_=void 0===P?{}:P,C=e.bodyStyle,S=void 0===C?{}:C,T=e.title,k=e.loading,D=e.bordered,M=void 0===D||D,F=e.size,I=e.type,B=e.cover,U=e.actions,z=e.tabList,A=e.children,K=e.activeTabKey,L=e.defaultActiveTabKey,R=e.tabBarExtraContent,H=e.hoverable,G=e.tabProps,J=void 0===G?{}:G,V=E(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),Y=m("card",j),q=0===S.padding||"0px"===S.padding?{padding:24}:void 0,X=l["createElement"]("div",{className:"".concat(Y,"-loading-block")}),Z=l["createElement"]("div",{className:"".concat(Y,"-loading-content"),style:q},l["createElement"](v["a"],{gutter:8},l["createElement"](g["a"],{span:22},X)),l["createElement"](v["a"],{gutter:8},l["createElement"](g["a"],{span:8},X),l["createElement"](g["a"],{span:15},X)),l["createElement"](v["a"],{gutter:8},l["createElement"](g["a"],{span:6},X),l["createElement"](g["a"],{span:18},X)),l["createElement"](v["a"],{gutter:8},l["createElement"](g["a"],{span:13},X),l["createElement"](g["a"],{span:9},X)),l["createElement"](v["a"],{gutter:8},l["createElement"](g["a"],{span:4},X),l["createElement"](g["a"],{span:3},X),l["createElement"](g["a"],{span:16},X))),Q=void 0!==K,W=Object(c["a"])(Object(c["a"])({},J),(n={},Object(t["a"])(n,Q?"activeKey":"defaultActiveKey",Q?K:L),Object(t["a"])(n,"tabBarExtraContent",R),n)),$=z&&z.length?l["createElement"](h["a"],Object(c["a"])({size:"large"},W,{className:"".concat(Y,"-head-tabs"),onChange:f}),z.map((function(e){return l["createElement"](h["a"].TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(T||N||$)&&(r=l["createElement"]("div",{className:"".concat(Y,"-head"),style:_},l["createElement"]("div",{className:"".concat(Y,"-head-wrapper")},T&&l["createElement"]("div",{className:"".concat(Y,"-head-title")},T),N&&l["createElement"]("div",{className:"".concat(Y,"-extra")},N)),$));var ee=B?l["createElement"]("div",{className:"".concat(Y,"-cover")},B):null,ne=l["createElement"]("div",{className:"".concat(Y,"-body"),style:S},k?Z:A),ae=U&&U.length?l["createElement"]("ul",{className:"".concat(Y,"-actions")},O(U)):null,te=Object(i["a"])(V,["onTabChange"]),ce=F||p,le=o()(Y,(a={},Object(t["a"])(a,"".concat(Y,"-loading"),k),Object(t["a"])(a,"".concat(Y,"-bordered"),M),Object(t["a"])(a,"".concat(Y,"-hoverable"),H),Object(t["a"])(a,"".concat(Y,"-contain-grid"),x()),Object(t["a"])(a,"".concat(Y,"-contain-tabs"),z&&z.length),Object(t["a"])(a,"".concat(Y,"-").concat(ce),ce),Object(t["a"])(a,"".concat(Y,"-type-").concat(I),!!I),Object(t["a"])(a,"".concat(Y,"-rtl"),"rtl"===b),a),w);return l["createElement"]("div",Object(c["a"])({},te,{className:le}),r,ee,ne,ae)};x.Grid=d,x.Meta=f;n["a"]=x},lnY3:function(e,n,a){},o9oB:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return h}));a("IzEo");var t=a("bx4M"),c=(a("R9oj"),a("ECub")),l=(a("+L6B"),a("2/Rp")),r=(a("5Dmo"),a("3S7+")),o=a("tJVT"),i=a("Lyp1"),s=a("Hx5s"),u=a("q1tI"),m=a.n(u),d=a("9kvl"),b=a("XNi5");function p(){var e="/Users/truonggiahuy/Documents/FPT-work/apisix-dashboard/web/src/pages/Dashboard/Dashboard.tsx",n="418075fad4ed72d1e7450fb6e2325d238b908451",a=new Function("return this")(),t="__coverage__",c={path:"/Users/truonggiahuy/Documents/FPT-work/apisix-dashboard/web/src/pages/Dashboard/Dashboard.tsx",statementMap:{0:{start:{line:25,column:28},end:{line:79,column:1}},1:{start:{line:26,column:38},end:{line:26,column:68}},2:{start:{line:27,column:28},end:{line:27,column:37}},3:{start:{line:29,column:2},end:{line:33,column:9}},4:{start:{line:30,column:4},end:{line:32,column:7}},5:{start:{line:31,column:6},end:{line:31,column:25}},6:{start:{line:35,column:2},end:{line:78,column:4}},7:{start:{line:62,column:16},end:{line:64,column:19}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:25,column:28},end:{line:25,column:29}},loc:{start:{line:25,column:34},end:{line:79,column:1}},line:25},1:{name:"(anonymous_1)",decl:{start:{line:29,column:12},end:{line:29,column:13}},loc:{start:{line:29,column:18},end:{line:33,column:3}},line:29},2:{name:"(anonymous_2)",decl:{start:{line:30,column:25},end:{line:30,column:26}},loc:{start:{line:30,column:34},end:{line:32,column:5}},line:30},3:{name:"(anonymous_3)",decl:{start:{line:61,column:23},end:{line:61,column:24}},loc:{start:{line:61,column:29},end:{line:65,column:15}},line:61}},branchMap:{0:{loc:{start:{line:47,column:9},end:{line:70,column:9}},type:"binary-expr",locations:[{start:{line:47,column:9},end:{line:47,column:20}},{start:{line:48,column:10},end:{line:69,column:18}}],line:47},1:{loc:{start:{line:71,column:9},end:{line:75,column:9}},type:"binary-expr",locations:[{start:{line:71,column:9},end:{line:71,column:19}},{start:{line:72,column:10},end:{line:74,column:16}}],line:71}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"418075fad4ed72d1e7450fb6e2325d238b908451"},l=a[t]||(a[t]={});l[e]&&l[e].hash===n||(l[e]=c);var r=l[e];return p=function(){return r},r}p(),p().s[0]++;var f=function(){p().f[0]++;var e=(p().s[1]++,Object(u["useState"])()),n=Object(o["a"])(e,2),a=n[0],f=n[1],h=(p().s[2]++,Object(d["h"])()),v=h.formatMessage;return p().s[3]++,Object(u["useEffect"])((function(){p().f[1]++,p().s[4]++,Object(b["a"])().then((function(e){p().f[2]++,p().s[5]++,f(e)}))}),[]),p().s[6]++,m.a.createElement(s["a"],{title:m.a.createElement(m.a.Fragment,null,v({id:"menu.dashboard"}),"\xa0",m.a.createElement(r["a"],{title:v({id:"page.dashboard.tip"})},m.a.createElement(i["a"],null)))},m.a.createElement(t["a"],null,(p().b[0][0]++,!a&&(p().b[0][1]++,m.a.createElement(c["a"],{image:"empty.svg",imageStyle:{height:60},description:m.a.createElement("span",null,v({id:"page.dashboard.empty.description.grafanaNotConfig"}))},m.a.createElement(l["a"],{type:"primary",onClick:function(){p().f[3]++,p().s[7]++,d["e"].replace({pathname:"/settings"})}},v({id:"page.dashboard.button.grafanaConfig"}))))),(p().b[1][0]++,a&&(p().b[1][1]++,m.a.createElement("div",null,m.a.createElement("iframe",{title:"dashboard",src:a,width:"100%",height:"860",frameBorder:"0"}))))))},h=f;function v(){var e="/Users/truonggiahuy/Documents/FPT-work/apisix-dashboard/web/src/pages/Dashboard/index.ts",n="7ad4050737a399f00a764983e188d9e63b10c9ee",a=new Function("return this")(),t="__coverage__",c={path:"/Users/truonggiahuy/Documents/FPT-work/apisix-dashboard/web/src/pages/Dashboard/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7ad4050737a399f00a764983e188d9e63b10c9ee"},l=a[t]||(a[t]={});l[e]&&l[e].hash===n||(l[e]=c);var r=l[e];return v=function(){return r},r}v()},pwpV:function(e,n,a){}}]);