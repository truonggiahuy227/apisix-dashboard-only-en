import{illegalArgument}from"./errors.js";export function createKeybinding(e,t){if(0===e)return null;const i=(65535&e)>>>0,s=(4294901760&e)>>>16;return new ChordKeybinding(0!==s?[createSimpleKeybinding(i,t),createSimpleKeybinding(s,t)]:[createSimpleKeybinding(i,t)])}export function createSimpleKeybinding(e,t){const i=!!(2048&e),s=!!(256&e),r=2===t?s:i,h=!!(1024&e),n=!!(512&e),o=2===t?i:s,y=255&e;return new SimpleKeybinding(r,h,n,o,y)}export class SimpleKeybinding{constructor(e,t,i,s,r){this.ctrlKey=e,this.shiftKey=t,this.altKey=i,this.metaKey=s,this.keyCode=r}equals(e){return this.ctrlKey===e.ctrlKey&&this.shiftKey===e.shiftKey&&this.altKey===e.altKey&&this.metaKey===e.metaKey&&this.keyCode===e.keyCode}isModifierKey(){return 0===this.keyCode||5===this.keyCode||57===this.keyCode||6===this.keyCode||4===this.keyCode}toChord(){return new ChordKeybinding([this])}isDuplicateModifierCase(){return this.ctrlKey&&5===this.keyCode||this.shiftKey&&4===this.keyCode||this.altKey&&6===this.keyCode||this.metaKey&&57===this.keyCode}}export class ChordKeybinding{constructor(e){if(0===e.length)throw illegalArgument("parts");this.parts=e}}export class ScanCodeBinding{constructor(e,t,i,s,r){this.ctrlKey=e,this.shiftKey=t,this.altKey=i,this.metaKey=s,this.scanCode=r}isDuplicateModifierCase(){return this.ctrlKey&&(157===this.scanCode||161===this.scanCode)||this.shiftKey&&(158===this.scanCode||162===this.scanCode)||this.altKey&&(159===this.scanCode||163===this.scanCode)||this.metaKey&&(160===this.scanCode||164===this.scanCode)}}export class ResolvedKeybindingPart{constructor(e,t,i,s,r,h){this.ctrlKey=e,this.shiftKey=t,this.altKey=i,this.metaKey=s,this.keyLabel=r,this.keyAriaLabel=h}}export class ResolvedKeybinding{}