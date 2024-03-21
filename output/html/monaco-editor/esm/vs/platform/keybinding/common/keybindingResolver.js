import{implies,expressionsAreEqualWithConstantSubstitution}from"../../contextkey/common/contextkey.js";export class KeybindingResolver{constructor(e,n,t){this._log=t,this._defaultKeybindings=e,this._defaultBoundCommands=new Map;for(const s of e){const e=s.command;e&&"-"!==e.charAt(0)&&this._defaultBoundCommands.set(e,!0)}this._map=new Map,this._lookupMap=new Map,this._keybindings=KeybindingResolver.handleRemovals([].concat(e).concat(n));for(let s=0,o=this._keybindings.length;s<o;s++){let e=this._keybindings[s];0!==e.keypressParts.length&&(e.when&&0===e.when.type||this._addKeyPress(e.keypressParts[0],e))}}static _isTargetedForRemoval(e,n,t,s){if(n&&e.keypressParts[0]!==n)return!1;if(t&&e.keypressParts[1]!==t)return!1;if(s){if(!e.when)return!1;if(!expressionsAreEqualWithConstantSubstitution(s,e.when))return!1}return!0}static handleRemovals(e){const n=new Map;for(let s=0,o=e.length;s<o;s++){const t=e[s];if(t.command&&"-"===t.command.charAt(0)){const e=t.command.substring(1);n.has(e)?n.get(e).push(t):n.set(e,[t])}}if(0===n.size)return e;const t=[];for(let s=0,o=e.length;s<o;s++){const o=e[s];if(!o.command||0===o.command.length){t.push(o);continue}if("-"===o.command.charAt(0))continue;const i=n.get(o.command);if(!i||!o.isDefault){t.push(o);continue}let r=!1;for(const e of i){const n=e.keypressParts[0],t=e.keypressParts[1],s=e.when;if(this._isTargetedForRemoval(o,n,t,s)){r=!0;break}}r||t.push(o)}return t}_addKeyPress(e,n){const t=this._map.get(e);if("undefined"===typeof t)return this._map.set(e,[n]),void this._addToLookupMap(n);for(let s=t.length-1;s>=0;s--){let e=t[s];if(e.command===n.command)continue;const o=e.keypressParts.length>1,i=n.keypressParts.length>1;o&&i&&e.keypressParts[1]!==n.keypressParts[1]||KeybindingResolver.whenIsEntirelyIncluded(e.when,n.when)&&this._removeFromLookupMap(e)}t.push(n),this._addToLookupMap(n)}_addToLookupMap(e){if(!e.command)return;let n=this._lookupMap.get(e.command);"undefined"===typeof n?(n=[e],this._lookupMap.set(e.command,n)):n.push(e)}_removeFromLookupMap(e){if(!e.command)return;let n=this._lookupMap.get(e.command);if("undefined"!==typeof n)for(let t=0,s=n.length;t<s;t++)if(n[t]===e)return void n.splice(t,1)}static whenIsEntirelyIncluded(e,n){return!n||1===n.type||!(!e||1===e.type)&&implies(e,n)}getKeybindings(){return this._keybindings}lookupPrimaryKeybinding(e,n){const t=this._lookupMap.get(e);if("undefined"===typeof t||0===t.length)return null;if(1===t.length)return t[0];for(let s=t.length-1;s>=0;s--){const e=t[s];if(n.contextMatchesRules(e.when))return e}return t[t.length-1]}resolve(e,n,t){this._log(`| Resolving ${t}${n?` chorded from ${n}`:""}`);let s=null;if(null!==n){const e=this._map.get(n);if("undefined"===typeof e)return this._log("\\ No keybinding entries."),null;s=[];for(let n=0,o=e.length;n<o;n++){let o=e[n];o.keypressParts[1]===t&&s.push(o)}}else{const e=this._map.get(t);if("undefined"===typeof e)return this._log("\\ No keybinding entries."),null;s=e}let o=this._findCommand(e,s);return o?null===n&&o.keypressParts.length>1&&null!==o.keypressParts[1]?(this._log(`\\ From ${s.length} keybinding entries, matched chord, when: ${printWhenExplanation(o.when)}, source: ${printSourceExplanation(o)}.`),{enterChord:!0,leaveChord:!1,commandId:null,commandArgs:null,bubble:!1}):(this._log(`\\ From ${s.length} keybinding entries, matched ${o.command}, when: ${printWhenExplanation(o.when)}, source: ${printSourceExplanation(o)}.`),{enterChord:!1,leaveChord:o.keypressParts.length>1,commandId:o.command,commandArgs:o.commandArgs,bubble:o.bubble}):(this._log(`\\ From ${s.length} keybinding entries, no when clauses matched the context.`),null)}_findCommand(e,n){for(let t=n.length-1;t>=0;t--){let s=n[t];if(KeybindingResolver._contextMatchesRules(e,s.when))return s}return null}static _contextMatchesRules(e,n){return!n||n.evaluate(e)}}function printWhenExplanation(e){return e?`${e.serialize()}`:"no when condition"}function printSourceExplanation(e){return e.extensionId?e.isBuiltinExtension?`built-in extension ${e.extensionId}`:`user extension ${e.extensionId}`:e.isDefault?"built-in":"user"}