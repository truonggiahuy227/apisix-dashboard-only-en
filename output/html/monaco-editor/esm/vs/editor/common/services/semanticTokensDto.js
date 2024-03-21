import{VSBuffer}from"../../../base/common/buffer.js";import*as platform from"../../../base/common/platform.js";function reverseEndianness(t){for(let e=0,n=t.length;e<n;e+=4){const n=t[e+0],a=t[e+1],o=t[e+2],r=t[e+3];t[e+0]=r,t[e+1]=o,t[e+2]=a,t[e+3]=n}}function toLittleEndianBuffer(t){const e=new Uint8Array(t.buffer,t.byteOffset,4*t.length);return platform.isLittleEndian()||reverseEndianness(e),VSBuffer.wrap(e)}export function encodeSemanticTokensDto(t){const e=new Uint32Array(encodeSemanticTokensDtoSize(t));let n=0;if(e[n++]=t.id,"full"===t.type)e[n++]=1,e[n++]=t.data.length,e.set(t.data,n),n+=t.data.length;else{e[n++]=2,e[n++]=t.deltas.length;for(const a of t.deltas)e[n++]=a.start,e[n++]=a.deleteCount,a.data?(e[n++]=a.data.length,e.set(a.data,n),n+=a.data.length):e[n++]=0}return toLittleEndianBuffer(e)}function encodeSemanticTokensDtoSize(t){let e=0;if(e+=2,"full"===t.type)e+=1+t.data.length;else{e+=1,e+=3*t.deltas.length;for(const n of t.deltas)n.data&&(e+=n.data.length)}return e}