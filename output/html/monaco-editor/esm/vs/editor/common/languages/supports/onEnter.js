import{onUnexpectedError}from"../../../../base/common/errors.js";import*as strings from"../../../../base/common/strings.js";import{IndentAction}from"../languageConfiguration.js";export class OnEnterSupport{constructor(e){e=e||{},e.brackets=e.brackets||[["(",")"],["{","}"],["[","]"]],this._brackets=[],e.brackets.forEach((e=>{const t=OnEnterSupport._createOpenBracketRegExp(e[0]),r=OnEnterSupport._createCloseBracketRegExp(e[1]);t&&r&&this._brackets.push({open:e[0],openRegExp:t,close:e[1],closeRegExp:r})})),this._regExpRules=e.onEnterRules||[]}onEnter(e,t,r,n){if(e>=3)for(let s=0,o=this._regExpRules.length;s<o;s++){const e=this._regExpRules[s],o=[{reg:e.beforeText,text:r},{reg:e.afterText,text:n},{reg:e.previousLineText,text:t}].every((e=>!e.reg||(e.reg.lastIndex=0,e.reg.test(e.text))));if(o)return e.action}if(e>=2&&r.length>0&&n.length>0)for(let s=0,o=this._brackets.length;s<o;s++){const e=this._brackets[s];if(e.openRegExp.test(r)&&e.closeRegExp.test(n))return{indentAction:IndentAction.IndentOutdent}}if(e>=2&&r.length>0)for(let s=0,o=this._brackets.length;s<o;s++){const e=this._brackets[s];if(e.openRegExp.test(r))return{indentAction:IndentAction.Indent}}return null}static _createOpenBracketRegExp(e){let t=strings.escapeRegExpCharacters(e);return/\B/.test(t.charAt(0))||(t="\\b"+t),t+="\\s*$",OnEnterSupport._safeRegExp(t)}static _createCloseBracketRegExp(e){let t=strings.escapeRegExpCharacters(e);return/\B/.test(t.charAt(t.length-1))||(t+="\\b"),t="^\\s*"+t,OnEnterSupport._safeRegExp(t)}static _safeRegExp(e){try{return new RegExp(e)}catch(t){return onUnexpectedError(t),null}}}