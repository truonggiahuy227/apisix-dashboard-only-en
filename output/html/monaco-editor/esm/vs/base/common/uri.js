import*as paths from"./path.js";import{isWindows}from"./platform.js";const _schemePattern=/^\w[\w\d+.-]*$/,_singleSlashStart=/^\//,_doubleSlashStart=/^\/\//;function _validateUri(t,e){if(!t.scheme&&e)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);if(t.scheme&&!_schemePattern.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!_singleSlashStart.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(_doubleSlashStart.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}function _schemeFix(t,e){return t||e?t:"file"}function _referenceResolution(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==_slash&&(e=_slash+e):e=_slash;break}return e}const _empty="",_slash="/",_regexp=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;export class URI{constructor(t,e,r,s,o,h=!1){"object"===typeof t?(this.scheme=t.scheme||_empty,this.authority=t.authority||_empty,this.path=t.path||_empty,this.query=t.query||_empty,this.fragment=t.fragment||_empty):(this.scheme=_schemeFix(t,h),this.authority=e||_empty,this.path=_referenceResolution(this.scheme,r||_empty),this.query=s||_empty,this.fragment=o||_empty,_validateUri(this,h))}static isUri(t){return t instanceof URI||!!t&&("string"===typeof t.authority&&"string"===typeof t.fragment&&"string"===typeof t.path&&"string"===typeof t.query&&"string"===typeof t.scheme&&"string"===typeof t.fsPath&&"function"===typeof t.with&&"function"===typeof t.toString)}get fsPath(){return uriToFsPath(this,!1)}with(t){if(!t)return this;let{scheme:e,authority:r,path:s,query:o,fragment:h}=t;return void 0===e?e=this.scheme:null===e&&(e=_empty),void 0===r?r=this.authority:null===r&&(r=_empty),void 0===s?s=this.path:null===s&&(s=_empty),void 0===o?o=this.query:null===o&&(o=_empty),void 0===h?h=this.fragment:null===h&&(h=_empty),e===this.scheme&&r===this.authority&&s===this.path&&o===this.query&&h===this.fragment?this:new Uri(e,r,s,o,h)}static parse(t,e=!1){const r=_regexp.exec(t);return r?new Uri(r[2]||_empty,percentDecode(r[4]||_empty),percentDecode(r[5]||_empty),percentDecode(r[7]||_empty),percentDecode(r[9]||_empty),e):new Uri(_empty,_empty,_empty,_empty,_empty)}static file(t){let e=_empty;if(isWindows&&(t=t.replace(/\\/g,_slash)),t[0]===_slash&&t[1]===_slash){const r=t.indexOf(_slash,2);-1===r?(e=t.substring(2),t=_slash):(e=t.substring(2,r),t=t.substring(r)||_slash)}return new Uri("file",e,t,_empty,_empty)}static from(t){const e=new Uri(t.scheme,t.authority,t.path,t.query,t.fragment);return _validateUri(e,!0),e}static joinPath(t,...e){if(!t.path)throw new Error("[UriError]: cannot call joinPath on URI without path");let r;return r=isWindows&&"file"===t.scheme?URI.file(paths.win32.join(uriToFsPath(t,!0),...e)).path:paths.posix.join(t.path,...e),t.with({path:r})}toString(t=!1){return _asFormatted(this,t)}toJSON(){return this}static revive(t){if(t){if(t instanceof URI)return t;{const e=new Uri(t);return e._formatted=t.external,e._fsPath=t._sep===_pathSepMarker?t.fsPath:null,e}}return t}}const _pathSepMarker=isWindows?1:void 0;class Uri extends URI{constructor(){super(...arguments),this._formatted=null,this._fsPath=null}get fsPath(){return this._fsPath||(this._fsPath=uriToFsPath(this,!1)),this._fsPath}toString(t=!1){return t?_asFormatted(this,!0):(this._formatted||(this._formatted=_asFormatted(this,!1)),this._formatted)}toJSON(){const t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=_pathSepMarker),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t}}const encodeTable={[58]:"%3A",[47]:"%2F",[63]:"%3F",[35]:"%23",[91]:"%5B",[93]:"%5D",[64]:"%40",[33]:"%21",[36]:"%24",[38]:"%26",[39]:"%27",[40]:"%28",[41]:"%29",[42]:"%2A",[43]:"%2B",[44]:"%2C",[59]:"%3B",[61]:"%3D",[32]:"%20"};function encodeURIComponentFast(t,e){let r,s=-1;for(let o=0;o<t.length;o++){const h=t.charCodeAt(o);if(h>=97&&h<=122||h>=65&&h<=90||h>=48&&h<=57||45===h||46===h||95===h||126===h||e&&47===h)-1!==s&&(r+=encodeURIComponent(t.substring(s,o)),s=-1),void 0!==r&&(r+=t.charAt(o));else{void 0===r&&(r=t.substr(0,o));const e=encodeTable[h];void 0!==e?(-1!==s&&(r+=encodeURIComponent(t.substring(s,o)),s=-1),r+=e):-1===s&&(s=o)}}return-1!==s&&(r+=encodeURIComponent(t.substring(s))),void 0!==r?r:t}function encodeURIComponentMinimal(t){let e;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);35===s||63===s?(void 0===e&&(e=t.substr(0,r)),e+=encodeTable[s]):void 0!==e&&(e+=t[r])}return void 0!==e?e:t}export function uriToFsPath(t,e){let r;return r=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&t.path.charCodeAt(1)<=90||t.path.charCodeAt(1)>=97&&t.path.charCodeAt(1)<=122)&&58===t.path.charCodeAt(2)?e?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,isWindows&&(r=r.replace(/\//g,"\\")),r}function _asFormatted(t,e){const r=e?encodeURIComponentMinimal:encodeURIComponentFast;let s="",{scheme:o,authority:h,path:n,query:i,fragment:a}=t;if(o&&(s+=o,s+=":"),(h||"file"===o)&&(s+=_slash,s+=_slash),h){let t=h.indexOf("@");if(-1!==t){const e=h.substr(0,t);h=h.substr(t+1),t=e.indexOf(":"),-1===t?s+=r(e,!1):(s+=r(e.substr(0,t),!1),s+=":",s+=r(e.substr(t+1),!1)),s+="@"}h=h.toLowerCase(),t=h.indexOf(":"),-1===t?s+=r(h,!1):(s+=r(h.substr(0,t),!1),s+=h.substr(t))}if(n){if(n.length>=3&&47===n.charCodeAt(0)&&58===n.charCodeAt(2)){const t=n.charCodeAt(1);t>=65&&t<=90&&(n=`/${String.fromCharCode(t+32)}:${n.substr(3)}`)}else if(n.length>=2&&58===n.charCodeAt(1)){const t=n.charCodeAt(0);t>=65&&t<=90&&(n=`${String.fromCharCode(t+32)}:${n.substr(2)}`)}s+=r(n,!0)}return i&&(s+="?",s+=r(i,!1)),a&&(s+="#",s+=e?a:encodeURIComponentFast(a,!1)),s}function decodeURIComponentGraceful(t){try{return decodeURIComponent(t)}catch(e){return t.length>3?t.substr(0,3)+decodeURIComponentGraceful(t.substr(3)):t}}const _rEncodedAsHex=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function percentDecode(t){return t.match(_rEncodedAsHex)?t.replace(_rEncodedAsHex,(t=>decodeURIComponentGraceful(t))):t}