import{MinimapCharRenderer}from"./minimapCharRenderer.js";import{allCharCodes}from"./minimapCharSheet.js";import{prebakedMiniMaps}from"./minimapPreBaked.js";import{toUint8}from"../../../../base/common/uint.js";export class MinimapCharRendererFactory{static create(e,t){if(this.lastCreated&&e===this.lastCreated.scale&&t===this.lastFontFamily)return this.lastCreated;let a;return a=prebakedMiniMaps[e]?new MinimapCharRenderer(prebakedMiniMaps[e](),e):MinimapCharRendererFactory.createFromSampleData(MinimapCharRendererFactory.createSampleData(t).data,e),this.lastFontFamily=t,this.lastCreated=a,a}static createSampleData(e){const t=document.createElement("canvas"),a=t.getContext("2d");t.style.height="16px",t.height=16,t.width=960,t.style.width="960px",a.fillStyle="#ffffff",a.font=`bold 16px ${e}`,a.textBaseline="middle";let r=0;for(const n of allCharCodes)a.fillText(String.fromCharCode(n),r,8),r+=10;return a.getImageData(0,0,960,16)}static createFromSampleData(e,t){const a=61440;if(e.length!==a)throw new Error("Unexpected source in MinimapCharRenderer");const r=MinimapCharRendererFactory._downsample(e,t);return new MinimapCharRenderer(r,t)}static _downsampleChar(e,t,a,r,n){const o=1*n,i=2*n;let s=r,l=0;for(let m=0;m<i;m++){const r=m/i*16,n=(m+1)/i*16;for(let i=0;i<o;i++){const m=i/o*10,h=(i+1)/o*10;let p=0,c=0;for(let a=r;a<n;a++){const r=t+3840*Math.floor(a),n=1-(a-Math.floor(a));for(let t=m;t<h;t++){const a=1-(t-Math.floor(t)),o=r+4*Math.floor(t),i=a*n;c+=i,p+=e[o]*e[o+3]/255*i}}const d=p/c;l=Math.max(l,d),a[s++]=toUint8(d)}}return l}static _downsample(e,t){const a=2*t*1*t,r=96*a,n=new Uint8ClampedArray(r);let o=0,i=0,s=0;for(let l=0;l<96;l++)s=Math.max(s,this._downsampleChar(e,i,n,o,t)),o+=a,i+=40;if(s>0){const e=255/s;for(let t=0;t<r;t++)n[t]*=e}return n}}