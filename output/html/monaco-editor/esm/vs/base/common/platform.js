var _a;const LANGUAGE_DEFAULT="en";let _locale,_translationsConfigFile,_userAgent,nodeProcess,_isWindows=!1,_isMacintosh=!1,_isLinux=!1,_isLinuxSnap=!1,_isNative=!1,_isWeb=!1,_isElectron=!1,_isIOS=!1,_language=LANGUAGE_DEFAULT;export const globals="object"===typeof self?self:"object"===typeof global?global:{};"undefined"!==typeof globals.vscode&&"undefined"!==typeof globals.vscode.process?nodeProcess=globals.vscode.process:"undefined"!==typeof process&&(nodeProcess=process);const isElectronProcess="string"===typeof(null===(_a=null===nodeProcess||void 0===nodeProcess?void 0:nodeProcess.versions)||void 0===_a?void 0:_a.electron),isElectronRenderer=isElectronProcess&&"renderer"===(null===nodeProcess||void 0===nodeProcess?void 0:nodeProcess.type);if("object"!==typeof navigator||isElectronRenderer)if("object"===typeof nodeProcess){_isWindows="win32"===nodeProcess.platform,_isMacintosh="darwin"===nodeProcess.platform,_isLinux="linux"===nodeProcess.platform,_isLinuxSnap=_isLinux&&!!nodeProcess.env["SNAP"]&&!!nodeProcess.env["SNAP_REVISION"],_isElectron=isElectronProcess,_locale=LANGUAGE_DEFAULT,_language=LANGUAGE_DEFAULT;const s=nodeProcess.env["VSCODE_NLS_CONFIG"];if(s)try{const e=JSON.parse(s),o=e.availableLanguages["*"];_locale=e.locale,_language=o||LANGUAGE_DEFAULT,_translationsConfigFile=e._translationsConfigFile}catch(e){}_isNative=!0}else console.error("Unable to resolve platform.");else _userAgent=navigator.userAgent,_isWindows=_userAgent.indexOf("Windows")>=0,_isMacintosh=_userAgent.indexOf("Macintosh")>=0,_isIOS=(_userAgent.indexOf("Macintosh")>=0||_userAgent.indexOf("iPad")>=0||_userAgent.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0,_isLinux=_userAgent.indexOf("Linux")>=0,_isWeb=!0,_locale=navigator.language,_language=_locale;let _platform=0;_isMacintosh?_platform=1:_isWindows?_platform=3:_isLinux&&(_platform=2);export const isWindows=_isWindows;export const isMacintosh=_isMacintosh;export const isLinux=_isLinux;export const isNative=_isNative;export const isWeb=_isWeb;export const isIOS=_isIOS;export const userAgent=_userAgent;export const language=_language;export const setTimeout0=(()=>{if("function"===typeof globals.postMessage&&!globals.importScripts){let e=[];globals.addEventListener("message",(s=>{if(s.data&&s.data.vscodeScheduleAsyncWork)for(let o=0,n=e.length;o<n;o++){const n=e[o];if(n.id===s.data.vscodeScheduleAsyncWork)return e.splice(o,1),void n.callback()}}));let s=0;return o=>{const n=++s;e.push({id:n,callback:o}),globals.postMessage({vscodeScheduleAsyncWork:n},"*")}}return e=>setTimeout(e)})();export const OS=_isMacintosh||_isIOS?2:_isWindows?1:3;let _isLittleEndian=!0,_isLittleEndianComputed=!1;export function isLittleEndian(){if(!_isLittleEndianComputed){_isLittleEndianComputed=!0;const e=new Uint8Array(2);e[0]=1,e[1]=2;const s=new Uint16Array(e.buffer);_isLittleEndian=513===s[0]}return _isLittleEndian}export const isChrome=!!(userAgent&&userAgent.indexOf("Chrome")>=0);export const isFirefox=!!(userAgent&&userAgent.indexOf("Firefox")>=0);export const isSafari=!!(!isChrome&&userAgent&&userAgent.indexOf("Safari")>=0);export const isEdge=!!(userAgent&&userAgent.indexOf("Edg/")>=0);export const isAndroid=!!(userAgent&&userAgent.indexOf("Android")>=0);