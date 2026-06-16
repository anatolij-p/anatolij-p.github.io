var Gp=Object.defineProperty;var Wp=(r,e,t)=>e in r?Gp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var De=(r,e,t)=>Wp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="165",Xp=0,gu=1,Yp=2,If=1,qp=2,Ei=3,nr=0,Mn=1,wi=2,Pi=0,ps=1,go=2,vu=3,xu=4,$p=5,Tr=100,Kp=101,Zp=102,jp=103,Jp=104,Qp=200,em=201,tm=202,nm=203,ic=204,rc=205,im=206,rm=207,sm=208,om=209,am=210,lm=211,cm=212,um=213,hm=214,fm=0,dm=1,pm=2,La=3,mm=4,_m=5,gm=6,vm=7,Nf=0,xm=1,Sm=2,ji=0,Of=1,Ff=2,Bf=3,Bc=4,Mm=5,zf=6,kf=7,Hf=300,Ts=301,bs=302,sc=303,oc=304,Ja=306,ac=1e3,wr=1001,lc=1002,qn=1003,ym=1004,Oo=1005,ni=1006,cl=1007,Ar=1008,ir=1009,Em=1010,Tm=1011,Ua=1012,Vf=1013,ws=1014,Xi=1015,Ji=1016,Gf=1017,Wf=1018,As=1020,bm=35902,wm=1021,Am=1022,hi=1023,Cm=1024,Rm=1025,ms=1026,Cs=1027,Pm=1028,Xf=1029,Dm=1030,Yf=1031,qf=1033,ul=33776,hl=33777,fl=33778,dl=33779,Su=35840,Mu=35841,yu=35842,Eu=35843,Tu=36196,bu=37492,wu=37496,Au=37808,Cu=37809,Ru=37810,Pu=37811,Du=37812,Lu=37813,Uu=37814,Iu=37815,Nu=37816,Ou=37817,Fu=37818,Bu=37819,zu=37820,ku=37821,pl=36492,Hu=36494,Vu=36495,Lm=36283,Gu=36284,Wu=36285,Xu=36286,Um=3200,Im=3201,Nm=0,Om=1,Wi="",si="srgb",lr="srgb-linear",zc="display-p3",Qa="display-p3-linear",Ia="linear",Mt="srgb",Na="rec709",Oa="p3",Hr=7680,Yu=519,Fm=512,Bm=513,zm=514,$f=515,km=516,Hm=517,Vm=518,Gm=519,qu=35044,$u=35048,Ku="300 es",Ci=2e3,Fa=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=Math.PI/180,cc=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function vn(r,e,t){return Math.max(e,Math.min(t,r))}function Wm(r,e){return(r%e+e)%e}function _l(r,e,t){return(1-t)*r+t*e}function Hs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],x=i[4],y=i[7],A=i[2],w=i[5],T=i[8];return s[0]=o*_+a*M+l*A,s[3]=o*p+a*x+l*w,s[6]=o*m+a*y+l*T,s[1]=c*_+u*M+f*A,s[4]=c*p+u*x+f*w,s[7]=c*m+u*y+f*T,s[2]=h*_+d*M+g*A,s[5]=h*p+d*x+g*w,s[8]=h*m+d*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new je;function Kf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xm(){const r=Ba("canvas");return r.style.display="block",r}const Zu={};function Zf(r){r in Zu||(Zu[r]=!0,console.warn(r))}function Ym(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ju=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ju=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fo={[lr]:{transfer:Ia,primaries:Na,toReference:r=>r,fromReference:r=>r},[si]:{transfer:Mt,primaries:Na,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qa]:{transfer:Ia,primaries:Oa,toReference:r=>r.applyMatrix3(Ju),fromReference:r=>r.applyMatrix3(ju)},[zc]:{transfer:Mt,primaries:Oa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ju),fromReference:r=>r.applyMatrix3(ju).convertLinearToSRGB()}},qm=new Set([lr,Qa]),ht={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!qm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Fo[e].toReference,i=Fo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Fo[r].primaries},getTransfer:function(r){return r===Wi?Ia:Fo[r].transfer}};function _s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vr;class $m{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=Ba("canvas")),Vr.width=e.width,Vr.height=e.height;const n=Vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Km=0;class jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xl(i[o].image)):s.push(xl(i[o]))}else s=xl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$m.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zm=0;class yn extends Fs{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=wr,i=wr,s=ni,o=Ar,a=hi,l=ir,c=yn.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ro(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Hf;yn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,A=(m+1)/2,w=(u+h)/4,T=(f+_)/4,R=(g+p)/4;return x>y&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=T/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=R/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends Fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends jm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jf extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*M);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const y=a*M;if(l=l*p+h*y,c=c*p+d*y,u=u*p+g*y,f=f*p+_*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new X,Qu=new Po;class Do{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),zo.subVectors(this.max,Vs),Gr.subVectors(e.a,Vs),Wr.subVectors(e.b,Vs),Xr.subVectors(e.c,Vs),Oi.subVectors(Wr,Gr),Fi.subVectors(Xr,Wr),hr.subVectors(Gr,Xr);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-hr.z,hr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,hr.z,0,-hr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-hr.y,hr.x,0];return!Ml(t,Gr,Wr,Xr,zo)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Gr,Wr,Xr,zo))?!1:(ko.crossVectors(Oi,Fi),t=[ko.x,ko.y,ko.z],Ml(t,Gr,Wr,Xr,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new X,new X,new X,new X,new X,new X,new X,new X],Jn=new X,Bo=new Do,Gr=new X,Wr=new X,Xr=new X,Oi=new X,Fi=new X,hr=new X,Vs=new X,zo=new X,ko=new X,fr=new X;function Ml(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){fr.fromArray(r,s);const a=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=n.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qm=new Do,Gs=new X,yl=new X;class Lo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(yl)),this.expandByPoint(Gs.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new X,El=new X,Ho=new X,Bi=new X,Tl=new X,Vo=new X,bl=new X;class kc{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){El.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(El);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=Bi.dot(this.direction),l=-Bi.dot(Ho),c=Bi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(El).addScaledVector(Ho,h),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,s){Tl.subVectors(t,e),Vo.subVectors(n,e),bl.crossVectors(Tl,Vo);let o=this.direction.dot(bl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Vo.crossVectors(Bi,Vo));if(l<0)return null;const c=a*this.direction.dot(Tl.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(bl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),zi.crossVectors(n,Cn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),zi.crossVectors(n,Cn)),zi.normalize(),Go.crossVectors(Cn,zi),i[0]=zi.x,i[4]=Go.x,i[8]=Cn.x,i[1]=zi.y,i[5]=Go.y,i[9]=Cn.y,i[2]=zi.z,i[6]=Go.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],A=n[15],w=i[0],T=i[4],R=i[8],S=i[12],v=i[1],D=i[5],N=i[9],B=i[13],Y=i[2],$=i[6],G=i[10],W=i[14],k=i[3],re=i[7],P=i[11],ue=i[15];return s[0]=o*w+a*v+l*Y+c*k,s[4]=o*T+a*D+l*$+c*re,s[8]=o*R+a*N+l*G+c*P,s[12]=o*S+a*B+l*W+c*ue,s[1]=u*w+f*v+h*Y+d*k,s[5]=u*T+f*D+h*$+d*re,s[9]=u*R+f*N+h*G+d*P,s[13]=u*S+f*B+h*W+d*ue,s[2]=g*w+_*v+p*Y+m*k,s[6]=g*T+_*D+p*$+m*re,s[10]=g*R+_*N+p*G+m*P,s[14]=g*S+_*B+p*W+m*ue,s[3]=M*w+x*v+y*Y+A*k,s[7]=M*T+x*D+y*$+A*re,s[11]=M*R+x*N+y*G+A*P,s[15]=M*S+x*B+y*W+A*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,x=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,y=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,A=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,w=t*M+n*x+i*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=M*T,e[1]=(_*h*s-f*p*s-_*i*d+n*p*d+f*i*m-n*h*m)*T,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,e[4]=x*T,e[5]=(u*p*s-g*h*s+g*i*d-t*p*d-u*i*m+t*h*m)*T,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*T,e[8]=y*T,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*m-t*f*m)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=A*T,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*p+t*f*p)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,M=l*c,x=l*u,y=l*f,A=n.x,w=n.y,T=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+y)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(h+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(p-M)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Yr.set(i[0],i[1],i[2]).length();const o=Yr.set(i[4],i[5],i[6]).length(),a=Yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const c=1/s,u=1/o,f=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ci){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(a===Ci)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fa)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ci){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(a===Ci)g=(o+s)*f,_=-2*f;else if(a===Fa)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yr=new X,Qn=new Nt,e_=new X(0,0,0),t_=new X(1,1,1),zi=new X,Go=new X,Cn=new X,eh=new Nt,th=new Po;class Li{constructor(e=0,t=0,n=0,i=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const nh=new X,qr=new Po,Si=new Nt,Wo=new X,Ws=new X,i_=new X,r_=new Po,ih=new X(1,0,0),rh=new X(0,1,0),sh=new X(0,0,1),oh={type:"added"},s_={type:"removed"},$r={type:"childadded",child:null},wl={type:"childremoved",child:null};class mn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new X,t=new Li,n=new Po,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new je}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ws,Wo,this.up):Si.lookAt(Wo,Ws,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(Si),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s_),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,r_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mn.DEFAULT_UP=new X(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new X,Mi=new X,Al=new X,yi=new X,Kr=new X,Zr=new X,ah=new X,Cl=new X,Rl=new X,Pl=new X;class ci{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),Mi.subVectors(n,t),Al.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(Mi),l=ei.dot(Al),c=Mi.dot(Mi),u=Mi.dot(Al),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Mi.subVectors(e,t),ei.cross(Mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ei.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Kr.subVectors(i,n),Zr.subVectors(s,n),Cl.subVectors(e,n);const l=Kr.dot(Cl),c=Zr.dot(Cl);if(l<=0&&c<=0)return t.copy(n);Rl.subVectors(e,i);const u=Kr.dot(Rl),f=Zr.dot(Rl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Kr,o);Pl.subVectors(e,s);const d=Kr.dot(Pl),g=Zr.dot(Pl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zr,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return ah.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(ah,a);const m=1/(p+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Dl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Wm(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Dl(o,s,e+1/3),this.g=Dl(o,s,e),this.b=Dl(o,s,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=si){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return ht.fromWorkingColorSpace(en.copy(this),e),Math.round(vn(en.r*255,0,255))*65536+Math.round(vn(en.g*255,0,255))*256+Math.round(vn(en.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(en.copy(this),t);const n=en.r,i=en.g,s=en.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=si){ht.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,i=en.b;return e!==si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Xo);const n=_l(ki.h,Xo.h,t),i=_l(ki.s,Xo.s,t),s=_l(ki.l,Xo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new at;at.NAMES=ed;let o_=0;class Bs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=ps,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hc extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new X,Yo=new $e;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qu&&(e.usage=this.usage),e}}class td extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nd extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ri extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let a_=0;const Vn=new Nt,Ll=new mn,jr=new X,Rn=new Do,Xs=new Do,Yt=new X;class jn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?nd:td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Rn.min,Xs.min),Rn.expandByPoint(Yt),Yt.addVectors(Rn.max,Xs.max),Rn.expandByPoint(Yt)):(Rn.expandByPoint(Xs.min),Rn.expandByPoint(Xs.max))}Rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),Yt.add(jr)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new X,l[R]=new X;const c=new X,u=new X,f=new X,h=new $e,d=new $e,g=new $e,_=new X,p=new X;function m(R,S,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[R].add(_),a[S].add(_),a[v].add(_),l[R].add(p),l[S].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,S=M.length;R<S;++R){const v=M[R],D=v.start,N=v.count;for(let B=D,Y=D+N;B<Y;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new X,y=new X,A=new X,w=new X;function T(R){A.fromBufferAttribute(i,R),w.copy(A);const S=a[R];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(w,S);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,S=M.length;R<S;++R){const v=M[R],D=v.start,N=v.count;for(let B=D,Y=D+N;B<Y;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new Nt,dr=new kc,qo=new Lo,ch=new X,Jr=new X,Qr=new X,es=new X,Ul=new X,$o=new X,Ko=new $e,Zo=new $e,jo=new $e,uh=new X,hh=new X,fh=new X,Jo=new X,Qo=new X;class fi extends mn{constructor(e=new jn,t=new Hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ul.fromBufferAttribute(f,e),o?$o.addScaledVector(Ul,u):$o.addScaledVector(Ul.sub(t),u))}t.add($o)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(qo.containsPoint(dr.origin)===!1&&(dr.intersectSphere(qo,ch)===null||dr.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(s).invert(),dr.copy(e.ray).applyMatrix4(lh),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){const w=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);i=ea(this,m,e,n,c,u,f,w,T,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=ea(this,o,e,n,c,u,f,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,A=x;y<A;y+=3){const w=y,T=y+1,R=y+2;i=ea(this,m,e,n,c,u,f,w,T,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,y=p+2;i=ea(this,o,e,n,c,u,f,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function l_(r,e,t,n,i,s,o,a){let l;if(e.side===Mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===nr,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:r}}function ea(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Jr),r.getVertexPosition(l,Qr),r.getVertexPosition(c,es);const u=l_(r,e,t,n,Jr,Qr,es,Jo);if(u){i&&(Ko.fromBufferAttribute(i,a),Zo.fromBufferAttribute(i,l),jo.fromBufferAttribute(i,c),u.uv=ci.getInterpolation(Jo,Jr,Qr,es,Ko,Zo,jo,new $e)),s&&(Ko.fromBufferAttribute(s,a),Zo.fromBufferAttribute(s,l),jo.fromBufferAttribute(s,c),u.uv1=ci.getInterpolation(Jo,Jr,Qr,es,Ko,Zo,jo,new $e)),o&&(uh.fromBufferAttribute(o,a),hh.fromBufferAttribute(o,l),fh.fromBufferAttribute(o,c),u.normal=ci.getInterpolation(Jo,Jr,Qr,es,uh,hh,fh,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};ci.getNormal(Jr,Qr,es,f.normal),u.face=f}return u}class Uo extends jn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function g(_,p,m,M,x,y,A,w,T,R,S){const v=y/T,D=A/R,N=y/2,B=A/2,Y=w/2,$=T+1,G=R+1;let W=0,k=0;const re=new X;for(let P=0;P<G;P++){const ue=P*D-B;for(let Q=0;Q<$;Q++){const _e=Q*v-N;re[_]=_e*M,re[p]=ue*x,re[m]=Y,c.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[m]=w>0?1:-1,u.push(re.x,re.y,re.z),f.push(Q/T),f.push(1-P/R),W+=1}}for(let P=0;P<R;P++)for(let ue=0;ue<T;ue++){const Q=h+ue+$*P,_e=h+ue+$*(P+1),H=h+(ue+1)+$*(P+1),Z=h+(ue+1)+$*P;l.push(Q,_e,Z),l.push(_e,H,Z),k+=6}a.addGroup(d,k,S),d+=k,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function un(r){const e={};for(let t=0;t<r.length;t++){const n=Rs(r[t]);for(const i in n)e[i]=n[i]}return e}function c_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function id(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const vo={clone:Rs,merge:un};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=c_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rd extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new X,dh=new $e,ph=new $e;class Wn extends rd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ml*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class f_ extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wn(ts,ns,e,t);i.layers=this.layers,this.add(i);const s=new Wn(ts,ns,e,t);s.layers=this.layers,this.add(s);const o=new Wn(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new Wn(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new Wn(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new Wn(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sd extends yn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d_ extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Uo(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Pi});s.uniforms.tEquirect.value=t;const o=new fi(i,s),a=t.minFilter;return t.minFilter===Ar&&(t.minFilter=ni),new f_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Il=new X,p_=new X,m_=new je;class xr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Il.subVectors(n,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m_.getNormalMatrix(e),i=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Lo,ta=new X;class od{constructor(e=new xr,t=new xr,n=new xr,i=new xr,s=new xr,o=new xr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,h-c,p-d,y-m).normalize(),n[1].setComponents(l+s,h+c,p+d,y+m).normalize(),n[2].setComponents(l+o,h+u,p+g,y+M).normalize(),n[3].setComponents(l-o,h-u,p-g,y-M).normalize(),n[4].setComponents(l-a,h-f,p-_,y-x).normalize(),t===Ci)n[5].setComponents(l+a,h+f,p+_,y+x).normalize();else if(t===Fa)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ta.x=i.normal.x>0?e.max.x:e.min.x,ta.y=i.normal.y>0?e.max.y:e.min.y,ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function __(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,a),f.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(r.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class el extends jn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*h-o;for(let x=0;x<c;x++){const y=x*f-s;g.push(y,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,y=M+c*(m+1),A=M+1+c*(m+1),w=M+1+c*m;d.push(x,y,w),d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var g_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_g=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,T0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:g_,alphahash_pars_fragment:v_,alphamap_fragment:x_,alphamap_pars_fragment:S_,alphatest_fragment:M_,alphatest_pars_fragment:y_,aomap_fragment:E_,aomap_pars_fragment:T_,batching_pars_vertex:b_,batching_vertex:w_,begin_vertex:A_,beginnormal_vertex:C_,bsdfs:R_,iridescence_fragment:P_,bumpmap_pars_fragment:D_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:U_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:N_,color_fragment:O_,color_pars_fragment:F_,color_pars_vertex:B_,color_vertex:z_,common:k_,cube_uv_reflection_fragment:H_,defaultnormal_vertex:V_,displacementmap_pars_vertex:G_,displacementmap_vertex:W_,emissivemap_fragment:X_,emissivemap_pars_fragment:Y_,colorspace_fragment:q_,colorspace_pars_fragment:$_,envmap_fragment:K_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:j_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:cg,envmap_vertex:Q_,fog_vertex:eg,fog_pars_vertex:tg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:rg,lightmap_pars_fragment:sg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:ug,lights_toon_pars_fragment:hg,lights_phong_fragment:fg,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:_g,lights_fragment_maps:gg,lights_fragment_end:vg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:yg,map_fragment:Eg,map_pars_fragment:Tg,map_particle_fragment:bg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Rg,morphcolor_vertex:Pg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Lg,morphtarget_vertex:Ug,normal_fragment_begin:Ig,normal_fragment_maps:Ng,normal_pars_fragment:Og,normal_pars_vertex:Fg,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Gg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:Yg,project_vertex:qg,dithering_fragment:$g,dithering_pars_fragment:Kg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:r0,skinnormal_vertex:s0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:h0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:_0,background_frag:g0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:S0,cube_frag:M0,depth_vert:y0,depth_frag:E0,distanceRGBA_vert:T0,distanceRGBA_frag:b0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:P0,meshbasic_frag:D0,meshlambert_vert:L0,meshlambert_frag:U0,meshmatcap_vert:I0,meshmatcap_frag:N0,meshnormal_vert:O0,meshnormal_frag:F0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:H0,meshtoon_vert:V0,meshtoon_frag:G0,points_vert:W0,points_frag:X0,shadow_vert:Y0,shadow_frag:q0,sprite_vert:$0,sprite_frag:K0},me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},li={basic:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:un([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:un([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:un([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:un([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:un([me.lights,me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};li.physical={uniforms:un([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const na={r:0,b:0,g:0},mr=new Li,Z0=new Nt;function j0(r,e,t,n,i,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=g(M);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Ja)?(u===void 0&&(u=new fi(new Uo(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Rs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),mr.copy(x.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(mr)),u.material.toneMapped=ht.getTransfer(y.colorSpace)!==Mt,(f!==y||h!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fi(new el(2,2),new on({name:"BackgroundMaterial",uniforms:Rs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(na,id(r)),n.buffers.color.setClear(na.r,na.g,na.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function J0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,D,N,B,Y){let $=!1;const G=f(B,N,D);s!==G&&(s=G,c(s.object)),$=d(v,B,N,Y),$&&g(v,B,N,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(v,D,N,B),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,D,N){const B=N.wireframe===!0;let Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let $=Y[D.id];$===void 0&&($={},Y[D.id]=$);let G=$[B];return G===void 0&&(G=h(l()),$[B]=G),G}function h(v){const D=[],N=[],B=[];for(let Y=0;Y<t;Y++)D[Y]=0,N[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function d(v,D,N,B){const Y=s.attributes,$=D.attributes;let G=0;const W=N.getAttributes();for(const k in W)if(W[k].location>=0){const P=Y[k];let ue=$[k];if(ue===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),P===void 0||P.attribute!==ue||ue&&P.data!==ue.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(v,D,N,B){const Y={},$=D.attributes;let G=0;const W=N.getAttributes();for(const k in W)if(W[k].location>=0){let P=$[k];P===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ue={};ue.attribute=P,P&&P.data&&(ue.data=P.data),Y[k]=ue,G++}s.attributes=Y,s.attributesNum=G,s.index=B}function _(){const v=s.newAttributes;for(let D=0,N=v.length;D<N;D++)v[D]=0}function p(v){m(v,0)}function m(v,D){const N=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;N[v]=1,B[v]===0&&(r.enableVertexAttribArray(v),B[v]=1),Y[v]!==D&&(r.vertexAttribDivisor(v,D),Y[v]=D)}function M(){const v=s.newAttributes,D=s.enabledAttributes;for(let N=0,B=D.length;N<B;N++)D[N]!==v[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function x(v,D,N,B,Y,$,G){G===!0?r.vertexAttribIPointer(v,D,N,Y,$):r.vertexAttribPointer(v,D,N,B,Y,$)}function y(v,D,N,B){_();const Y=B.attributes,$=N.getAttributes(),G=D.defaultAttributeValues;for(const W in $){const k=$[W];if(k.location>=0){let re=Y[W];if(re===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const P=re.normalized,ue=re.itemSize,Q=e.get(re);if(Q===void 0)continue;const _e=Q.buffer,H=Q.type,Z=Q.bytesPerElement,ce=H===r.INT||H===r.UNSIGNED_INT||re.gpuType===Vf;if(re.isInterleavedBufferAttribute){const le=re.data,Ne=le.stride,Le=re.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<k.locationSize;Xe++)m(k.location+Xe,le.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<k.locationSize;Xe++)p(k.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Xe=0;Xe<k.locationSize;Xe++)x(k.location+Xe,ue/k.locationSize,H,P,Ne*Z,(Le+ue/k.locationSize*Xe)*Z,ce)}else{if(re.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)m(k.location+le,re.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<k.locationSize;le++)p(k.location+le);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let le=0;le<k.locationSize;le++)x(k.location+le,ue/k.locationSize,H,P,ue*Z,ue/k.locationSize*le*Z,ce)}}else if(G!==void 0){const P=G[W];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(k.location,P);break;case 3:r.vertexAttrib3fv(k.location,P);break;case 4:r.vertexAttrib4fv(k.location,P);break;default:r.vertexAttrib1fv(k.location,P)}}}}M()}function A(){R();for(const v in n){const D=n[v];for(const N in D){const B=D[N];for(const Y in B)u(B[Y].object),delete B[Y];delete D[N]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const N in D){const B=D[N];for(const Y in B)u(B[Y].object),delete B[Y];delete D[N]}delete n[v.id]}function T(v){for(const D in n){const N=n[D];if(N[v.id]===void 0)continue;const B=N[v.id];for(const Y in B)u(B[Y].object),delete B[Y];delete N[v.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Q0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(c[d],u[d]);else{h.multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ev(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==hi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ir&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xi&&!T)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:A}}function tv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new xr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let y=m.clippingState||null;l.value=y,y=u(g,h,x,d);for(let A=0;A!==x;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function nv(r){let e=new WeakMap;function t(o,a){return a===sc?o.mapping=Ts:a===oc&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new d_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ld extends rd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,mh=[.125,.215,.35,.446,.526,.582],br=20,Nl=new ld,_h=new at;let Ol=null,Fl=0,Bl=0,zl=!1;const Sr=(1+Math.sqrt(5))/2,is=1/Sr,gh=[new X(-Sr,is,0),new X(Sr,is,0),new X(-is,0,Sr),new X(is,0,Sr),new X(0,Sr,-is),new X(0,Sr,is),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Fl,Bl),this._renderer.xr.enabled=zl,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Ji,format:hi,colorSpace:lr,depthBuffer:!1},i=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(s)),this._blurMaterial=rv(s,e,t)}return i}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Nl)}_sceneToCubeUV(e,t,n,i){const a=new Wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(_h),u.toneMapping=ji,u.autoClear=!1;const d=new Hc({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new fi(new Uo,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(_h),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ia(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ts||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gh[(i-s-1)%gh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new fi(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*br-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):br;p>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const m=[];let M=0;for(let T=0;T<br;++T){const R=T/_,S=Math.exp(-R*R/2);m.push(S),T===0?M+=S:T<p&&(M+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[i],A=3*y*(i>x-us?i-x+us:0),w=4*(this._cubeSize-y);ia(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Nl)}}function iv(r){const e=[],t=[],n=[];let i=r;const s=r-us+1+mh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-us?l=mh[o-r+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),x=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,_*g*w),x.set(h,p*g*w);const v=[w,w,w,w,w,w];y.set(v,m*g*w)}const A=new jn;A.setAttribute("position",new Sn(M,_)),A.setAttribute("uv",new Sn(x,p)),A.setAttribute("faceIndex",new Sn(y,m)),e.push(A),i>us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xh(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rv(r,e,t){const n=new Float32Array(br),i=new X(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Sh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Mh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sc||l===oc,u=l===Ts||l===bs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new vh(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new vh(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ov(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Zf("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function av(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,y=M.length;x<y;x+=3){const A=M[x+0],w=M[x+1],T=M[x+2];h.push(A,w,w,T,T,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const A=x+0,w=x+1,T=x+2;h.push(A,w,w,T,T,A)}}else return;const p=new(Kf(h)?nd:td)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function lv(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(h[p]/o,d[p]);else{_.multiDrawElementsWEBGL(n,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}}function f(h,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M];for(let M=0;M<_.length;M++)t.update(m,n,_[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function cv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uv(r,e,t){const n=new WeakMap,i=new Zt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*w*4*f),R=new Jf(T,A,w,f);R.type=Xi,R.needsUpdate=!0;const S=y*4;for(let D=0;D<f;D++){const N=m[D],B=M[D],Y=x[D],$=A*w*4*D;for(let G=0;G<N.count;G++){const W=G*S;g===!0&&(i.fromBufferAttribute(N,G),T[$+W+0]=i.x,T[$+W+1]=i.y,T[$+W+2]=i.z,T[$+W+3]=0),_===!0&&(i.fromBufferAttribute(B,G),T[$+W+4]=i.x,T[$+W+5]=i.y,T[$+W+6]=i.z,T[$+W+7]=0),p===!0&&(i.fromBufferAttribute(Y,G),T[$+W+8]=i.x,T[$+W+9]=i.y,T[$+W+10]=i.z,T[$+W+11]=Y.itemSize===4?i.w:1)}}h={count:f,texture:R,size:new $e(A,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function hv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class cd extends yn{constructor(e,t,n,i,s,o,a,l,c,u=ms){if(u!==ms&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=ws),n===void 0&&u===Cs&&(n=As),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new yn,hd=new cd(1,1);hd.compareFunction=$f;const fd=new Jf,dd=new Jm,pd=new sd,yh=[],Eh=[],Th=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=yh[i];if(s===void 0&&(s=new Float32Array(i),yh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function tl(r,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function _v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;wh.set(n),r.uniformMatrix2fv(this.addr,!1,wh),Wt(t,n)}}function gv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;bh.set(n),r.uniformMatrix3fv(this.addr,!1,bh),Wt(t,n)}}function vv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Th.set(n),r.uniformMatrix4fv(this.addr,!1,Th),Wt(t,n)}}function xv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function Mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function Ev(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function Av(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?hd:ud;t.setTexture2D(e||s,i)}function Cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dd,i)}function Rv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pd,i)}function Pv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fd,i)}function Dv(r){switch(r){case 5126:return fv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return _v;case 35675:return gv;case 35676:return vv;case 5124:case 35670:return xv;case 35667:case 35671:return Sv;case 35668:case 35672:return Mv;case 35669:case 35673:return yv;case 5125:return Ev;case 36294:return Tv;case 36295:return bv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Lv(r,e){r.uniform1fv(this.addr,e)}function Uv(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function Iv(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function Nv(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function Ov(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fv(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bv(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zv(r,e){r.uniform1iv(this.addr,e)}function kv(r,e){r.uniform2iv(this.addr,e)}function Hv(r,e){r.uniform3iv(this.addr,e)}function Vv(r,e){r.uniform4iv(this.addr,e)}function Gv(r,e){r.uniform1uiv(this.addr,e)}function Wv(r,e){r.uniform2uiv(this.addr,e)}function Xv(r,e){r.uniform3uiv(this.addr,e)}function Yv(r,e){r.uniform4uiv(this.addr,e)}function qv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ud,s[o])}function $v(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dd,s[o])}function Kv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pd,s[o])}function Zv(r,e,t){const n=this.cache,i=e.length,s=tl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fd,s[o])}function jv(r){switch(r){case 5126:return Lv;case 35664:return Uv;case 35665:return Iv;case 35666:return Nv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}}class ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const kl=/(\w+)(\])?(\[|\.)?/g;function Ah(r,e){r.seq.push(e),r.map[e.id]=e}function tx(r,e,t){const n=r.name,i=n.length;for(kl.lastIndex=0;;){const s=kl.exec(n),o=kl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ah(t,c===void 0?new Jv(a,r,e):new Qv(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new ex(a),Ah(t,f)),t=f}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);tx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ch(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const nx=37297;let ix=0;function rx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sx(r){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(r);let n;switch(e===t?n="":e===Oa&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===Oa&&(n="LinearSRGBToLinearDisplayP3"),r){case lr:case Qa:return[n,"LinearTransferOETF"];case si:case zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Rh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rx(r.getShaderSource(e),o)}else return i}function ox(r,e){const t=sx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ax(r,e){let t;switch(e){case Of:t="Linear";break;case Ff:t="Reinhard";break;case Bf:t="OptimizedCineon";break;case Bc:t="ACESFilmic";break;case zf:t="AgX";break;case kf:t="Neutral";break;case Mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function cx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ux(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Zs(r){return r!==""}function Ph(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(r){return r.replace(hx,dx)}const fx=new Map;function dx(r,e){let t=Ze[e];if(t===void 0){const n=fx.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(r){return r.replace(px,mx)}function mx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _x(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function gx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function xx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case xm:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function Sx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_x(t),c=gx(t),u=vx(t),f=xx(t),h=Sx(t),d=lx(t),g=cx(s),_=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),m=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ji?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=uc(o),o=Ph(o,t),o=Dh(o,t),a=uc(a),a=Ph(a,t),a=Dh(a,t),o=Lh(o),a=Lh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,y=M+m+a,A=Ch(i,i.VERTEX_SHADER,x),w=Ch(i,i.FRAGMENT_SHADER,y);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(A).trim(),Y=i.getShaderInfoLog(w).trim();let $=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const W=Rh(i,A,"vertex"),k=Rh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+W+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||Y==="")&&(G=!1);G&&(D.diagnostics={runnable:$,programLog:N,vertexShader:{log:B,prefix:p},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(A),i.deleteShader(w),R=new ya(i,_),S=ux(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,nx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let yx=0;class Ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tx(e),t.set(e,n)),n}}class Tx{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}}function bx(r,e,t,n,i,s,o){const a=new Qf,l=new Ex,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,D,N,B){const Y=N.fog,$=B.geometry,G=S.isMeshStandardMaterial?N.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),k=W&&W.mapping===Ja?W.image.height:null,re=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const P=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=P!==void 0?P.length:0;let Q=0;$.morphAttributes.position!==void 0&&(Q=1),$.morphAttributes.normal!==void 0&&(Q=2),$.morphAttributes.color!==void 0&&(Q=3);let _e,H,Z,ce;if(re){const st=li[re];_e=st.vertexShader,H=st.fragmentShader}else _e=S.vertexShader,H=S.fragmentShader,l.update(S),Z=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const le=r.getRenderTarget(),Ne=B.isInstancedMesh===!0,Le=B.isBatchedMesh===!0,Xe=!!S.map,L=!!S.matcap,Be=!!W,ve=!!S.aoMap,We=!!S.lightMap,ye=!!S.bumpMap,He=!!S.normalMap,F=!!S.displacementMap,Ie=!!S.emissiveMap,lt=!!S.metalnessMap,C=!!S.roughnessMap,E=S.anisotropy>0,q=S.clearcoat>0,ee=S.dispersion>0,ne=S.iridescence>0,J=S.sheen>0,we=S.transmission>0,se=E&&!!S.anisotropyMap,fe=q&&!!S.clearcoatMap,Fe=q&&!!S.clearcoatNormalMap,oe=q&&!!S.clearcoatRoughnessMap,Te=ne&&!!S.iridescenceMap,Re=ne&&!!S.iridescenceThicknessMap,ze=J&&!!S.sheenColorMap,de=J&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,Ye=!!S.specularColorMap,ct=!!S.specularIntensityMap,U=we&&!!S.transmissionMap,te=we&&!!S.thicknessMap,K=!!S.gradientMap,j=!!S.alphaMap,ae=S.alphaTest>0,Pe=!!S.alphaHash,Je=!!S.extensions;let pt=ji;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(pt=r.toneMapping);const mt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:H,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Le,batchingColor:Le&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:lr,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:L,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:k,aoMap:ve,lightMap:We,bumpMap:ye,normalMap:He,displacementMap:h&&F,emissiveMap:Ie,normalMapObjectSpace:He&&S.normalMapType===Om,normalMapTangentSpace:He&&S.normalMapType===Nm,metalnessMap:lt,roughnessMap:C,anisotropy:E,anisotropyMap:se,clearcoat:q,clearcoatMap:fe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ne,iridescenceMap:Te,iridescenceThicknessMap:Re,sheen:J,sheenColorMap:ze,sheenRoughnessMap:de,specularMap:Ve,specularColorMap:Ye,specularIntensityMap:ct,transmission:we,transmissionMap:U,thicknessMap:te,gradientMap:K,opaque:S.transparent===!1&&S.blending===ps&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ae,alphaHash:Pe,combine:S.combine,mapUv:Xe&&_(S.map.channel),aoMapUv:ve&&_(S.aoMap.channel),lightMapUv:We&&_(S.lightMap.channel),bumpMapUv:ye&&_(S.bumpMap.channel),normalMapUv:He&&_(S.normalMap.channel),displacementMapUv:F&&_(S.displacementMap.channel),emissiveMapUv:Ie&&_(S.emissiveMap.channel),metalnessMapUv:lt&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:se&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(S.sheenRoughnessMap.channel),specularMapUv:Ve&&_(S.specularMap.channel),specularColorMapUv:Ye&&_(S.specularColorMap.channel),specularIntensityMapUv:ct&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(He||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Xe||j),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Q,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Je&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function m(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(v,S),x(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function x(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),S.push(a.mask)}function y(S){const v=g[S.type];let D;if(v){const N=li[v];D=vo.clone(N.uniforms)}else D=S.uniforms;return D}function A(S,v){let D;for(let N=0,B=u.length;N<B;N++){const Y=u[N];if(Y.cacheKey===v){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new Mx(r,v,S,s),u.push(D)),D}function w(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function wx(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ax(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ih(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Ax),n.length>1&&n.sort(h||Ih),i.length>1&&i.sort(h||Ih)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Cx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Nh,r.set(n,[o])):i>=s.length?(o=new Nh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new at};break;case"SpotLight":t={position:new X,direction:new X,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Px(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Dx=0;function Lx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ux(r){const e=new Rx,t=Px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Nt,o=new Nt;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,x=0,y=0,A=0,w=0,T=0;c.sort(Lx);for(let S=0,v=c.length;S<v;S++){const D=c[S],N=D.color,B=D.intensity,Y=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*B,f+=N.g*B,h+=N.b*B;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],B);T++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,k=t.get(D);k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=D.shadow.matrix,M++}n.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=Y,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[_]=G;const W=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,W.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,D.castShadow){const k=t.get(D);k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=$,y++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=G,p++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const W=D.shadow,k=t.get(D);k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(B),G.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=T,n.version=Dx++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Oh(r){const e=new Ux(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ix(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Oh(r),e.set(i,[a])):s>=o.length?(a=new Oh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Nx extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ox extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zx(r,e,t){let n=new od;const i=new $e,s=new $e,o=new Zt,a=new Nx({depthPacking:Im}),l=new Ox,c={},u=t.maxTextureSize,f={[nr]:Mn,[Mn]:nr,[wi]:wi},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Fx,fragmentShader:Bx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new jn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fi(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let m=this.type;this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=m!==Ei&&this.type===Ei,Y=m===Ei&&this.type!==Ei;for(let $=0,G=w.length;$<G;$++){const W=w[$],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const re=k.getFrameExtents();if(i.multiply(re),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,k.mapSize.y=s.y)),k.map===null||B===!0||Y===!0){const ue=this.type!==Ei?{minFilter:qn,magFilter:qn}:{};k.map!==null&&k.map.dispose(),k.map=new ii(i.x,i.y,ue),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const P=k.getViewportCount();for(let ue=0;ue<P;ue++){const Q=k.getViewport(ue);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),N.viewport(o),k.updateMatrices(W,ue),n=k.getFrustum(),y(T,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Ei&&M(k,R),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,v,D)};function M(w,T){const R=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ii(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,R,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,R,d,_,null)}function x(w,T,R,S){let v=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)v=D;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=v.uuid,B=T.uuid;let Y=c[N];Y===void 0&&(Y={},c[N]=Y);let $=Y[B];$===void 0&&($=v.clone(),Y[B]=$,T.addEventListener("dispose",A)),v=$}if(v.visible=T.visible,v.wireframe=T.wireframe,S===Ei?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=R}return v}function y(w,T,R,S,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),Y=w.material;if(Array.isArray(Y)){const $=B.groups;for(let G=0,W=$.length;G<W;G++){const k=$[G],re=Y[k.materialIndex];if(re&&re.visible){const P=x(w,re,S,v);w.onBeforeShadow(r,w,T,R,B,P,k),r.renderBufferDirect(R,null,B,P,w,k),w.onAfterShadow(r,w,T,R,B,P,k)}}}else if(Y.visible){const $=x(w,Y,S,v);w.onBeforeShadow(r,w,T,R,B,$,null),r.renderBufferDirect(R,null,B,$,w,null),w.onAfterShadow(r,w,T,R,B,$,null)}}const N=w.children;for(let B=0,Y=N.length;B<Y;B++)y(N[B],T,R,S,v)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const S=c[R],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function kx(r){function e(){let U=!1;const te=new Zt;let K=null;const j=new Zt(0,0,0,0);return{setMask:function(ae){K!==ae&&!U&&(r.colorMask(ae,ae,ae,ae),K=ae)},setLocked:function(ae){U=ae},setClear:function(ae,Pe,Je,pt,mt){mt===!0&&(ae*=pt,Pe*=pt,Je*=pt),te.set(ae,Pe,Je,pt),j.equals(te)===!1&&(r.clearColor(ae,Pe,Je,pt),j.copy(te))},reset:function(){U=!1,K=null,j.set(-1,0,0,0)}}}function t(){let U=!1,te=null,K=null,j=null;return{setTest:function(ae){ae?ce(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(ae){te!==ae&&!U&&(r.depthMask(ae),te=ae)},setFunc:function(ae){if(K!==ae){switch(ae){case fm:r.depthFunc(r.NEVER);break;case dm:r.depthFunc(r.ALWAYS);break;case pm:r.depthFunc(r.LESS);break;case La:r.depthFunc(r.LEQUAL);break;case mm:r.depthFunc(r.EQUAL);break;case _m:r.depthFunc(r.GEQUAL);break;case gm:r.depthFunc(r.GREATER);break;case vm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ae}},setLocked:function(ae){U=ae},setClear:function(ae){j!==ae&&(r.clearDepth(ae),j=ae)},reset:function(){U=!1,te=null,K=null,j=null}}}function n(){let U=!1,te=null,K=null,j=null,ae=null,Pe=null,Je=null,pt=null,mt=null;return{setTest:function(st){U||(st?ce(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(st){te!==st&&!U&&(r.stencilMask(st),te=st)},setFunc:function(st,Oe,Ae){(K!==st||j!==Oe||ae!==Ae)&&(r.stencilFunc(st,Oe,Ae),K=st,j=Oe,ae=Ae)},setOp:function(st,Oe,Ae){(Pe!==st||Je!==Oe||pt!==Ae)&&(r.stencilOp(st,Oe,Ae),Pe=st,Je=Oe,pt=Ae)},setLocked:function(st){U=st},setClear:function(st){mt!==st&&(r.clearStencil(st),mt=st)},reset:function(){U=!1,te=null,K=null,j=null,ae=null,Pe=null,Je=null,pt=null,mt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,A=null,w=new at(0,0,0),T=0,R=!1,S=null,v=null,D=null,N=null,B=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=G>=2);let k=null,re={};const P=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Q=new Zt().fromArray(P),_e=new Zt().fromArray(ue);function H(U,te,K,j){const ae=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(U,Pe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<K;Je++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(te,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(te+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return Pe}const Z={};Z[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),s.setFunc(La),ye(!1),He(gu),ce(r.CULL_FACE),ve(Pi);function ce(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function le(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function Ne(U,te){return u[U]!==te?(r.bindFramebuffer(U,te),u[U]=te,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=te),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=te),!0):!1}function Le(U,te){let K=h,j=!1;if(U){K=f.get(te),K===void 0&&(K=[],f.set(te,K));const ae=U.textures;if(K.length!==ae.length||K[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,Je=ae.length;Pe<Je;Pe++)K[Pe]=r.COLOR_ATTACHMENT0+Pe;K.length=ae.length,j=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,j=!0);j&&r.drawBuffers(K)}function Xe(U){return d!==U?(r.useProgram(U),d=U,!0):!1}const L={[Tr]:r.FUNC_ADD,[Kp]:r.FUNC_SUBTRACT,[Zp]:r.FUNC_REVERSE_SUBTRACT};L[jp]=r.MIN,L[Jp]=r.MAX;const Be={[Qp]:r.ZERO,[em]:r.ONE,[tm]:r.SRC_COLOR,[ic]:r.SRC_ALPHA,[am]:r.SRC_ALPHA_SATURATE,[sm]:r.DST_COLOR,[im]:r.DST_ALPHA,[nm]:r.ONE_MINUS_SRC_COLOR,[rc]:r.ONE_MINUS_SRC_ALPHA,[om]:r.ONE_MINUS_DST_COLOR,[rm]:r.ONE_MINUS_DST_ALPHA,[lm]:r.CONSTANT_COLOR,[cm]:r.ONE_MINUS_CONSTANT_COLOR,[um]:r.CONSTANT_ALPHA,[hm]:r.ONE_MINUS_CONSTANT_ALPHA};function ve(U,te,K,j,ae,Pe,Je,pt,mt,st){if(U===Pi){g===!0&&(le(r.BLEND),g=!1);return}if(g===!1&&(ce(r.BLEND),g=!0),U!==$p){if(U!==_||st!==R){if((p!==Tr||x!==Tr)&&(r.blendEquation(r.FUNC_ADD),p=Tr,x=Tr),st)switch(U){case ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case go:r.blendFunc(r.ONE,r.ONE);break;case vu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case go:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,M=null,y=null,A=null,w.set(0,0,0),T=0,_=U,R=st}return}ae=ae||te,Pe=Pe||K,Je=Je||j,(te!==p||ae!==x)&&(r.blendEquationSeparate(L[te],L[ae]),p=te,x=ae),(K!==m||j!==M||Pe!==y||Je!==A)&&(r.blendFuncSeparate(Be[K],Be[j],Be[Pe],Be[Je]),m=K,M=j,y=Pe,A=Je),(pt.equals(w)===!1||mt!==T)&&(r.blendColor(pt.r,pt.g,pt.b,mt),w.copy(pt),T=mt),_=U,R=!1}function We(U,te){U.side===wi?le(r.CULL_FACE):ce(r.CULL_FACE);let K=U.side===Mn;te&&(K=!K),ye(K),U.blending===ps&&U.transparent===!1?ve(Pi):ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function He(U){U!==Xp?(ce(r.CULL_FACE),U!==v&&(U===gu?r.cullFace(r.BACK):U===Yp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),v=U}function F(U){U!==D&&($&&r.lineWidth(U),D=U)}function Ie(U,te,K){U?(ce(r.POLYGON_OFFSET_FILL),(N!==te||B!==K)&&(r.polygonOffset(te,K),N=te,B=K)):le(r.POLYGON_OFFSET_FILL)}function lt(U){U?ce(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+Y-1),k!==U&&(r.activeTexture(U),k=U)}function E(U,te,K){K===void 0&&(k===null?K=r.TEXTURE0+Y-1:K=k);let j=re[K];j===void 0&&(j={type:void 0,texture:void 0},re[K]=j),(j.type!==U||j.texture!==te)&&(k!==K&&(r.activeTexture(K),k=K),r.bindTexture(U,te||Z[U]),j.type=U,j.texture=te)}function q(){const U=re[k];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){Q.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Q.copy(U))}function de(U){_e.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),_e.copy(U))}function Ve(U,te){let K=l.get(te);K===void 0&&(K=new WeakMap,l.set(te,K));let j=K.get(U);j===void 0&&(j=r.getUniformBlockIndex(te,U.name),K.set(U,j))}function Ye(U,te){const j=l.get(te).get(U);a.get(te)!==j&&(r.uniformBlockBinding(te,j,U.__bindingPointIndex),a.set(te,j))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,re={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,A=null,w=new at(0,0,0),T=0,R=!1,S=null,v=null,D=null,N=null,B=null,Q.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ce,disable:le,bindFramebuffer:Ne,drawBuffers:Le,useProgram:Xe,setBlending:ve,setMaterial:We,setFlipSided:ye,setCullFace:He,setLineWidth:F,setPolygonOffset:Ie,setScissorTest:lt,activeTexture:C,bindTexture:E,unbindTexture:q,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:Te,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:Fe,texStorage3D:oe,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:ze,viewport:de,reset:ct}}function Hx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return d?new OffscreenCanvas(C,E):Ba("canvas")}function _(C,E,q){let ee=1;const ne=lt(C);if((ne.width>q||ne.height>q)&&(ee=q/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(ee*ne.width),we=Math.floor(ee*ne.height);f===void 0&&(f=g(J,we));const se=E?g(J,we):f;return se.width=J,se.height=we,se.getContext("2d").drawImage(C,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+we+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==qn&&C.minFilter!==ni}function m(C){r.generateMipmap(C)}function M(C,E,q,ee,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=E;if(E===r.RED&&(q===r.FLOAT&&(J=r.R32F),q===r.HALF_FLOAT&&(J=r.R16F),q===r.UNSIGNED_BYTE&&(J=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.R8UI),q===r.UNSIGNED_SHORT&&(J=r.R16UI),q===r.UNSIGNED_INT&&(J=r.R32UI),q===r.BYTE&&(J=r.R8I),q===r.SHORT&&(J=r.R16I),q===r.INT&&(J=r.R32I)),E===r.RG&&(q===r.FLOAT&&(J=r.RG32F),q===r.HALF_FLOAT&&(J=r.RG16F),q===r.UNSIGNED_BYTE&&(J=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.RG8UI),q===r.UNSIGNED_SHORT&&(J=r.RG16UI),q===r.UNSIGNED_INT&&(J=r.RG32UI),q===r.BYTE&&(J=r.RG8I),q===r.SHORT&&(J=r.RG16I),q===r.INT&&(J=r.RG32I)),E===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),E===r.RGBA){const we=ne?Ia:ht.getTransfer(ee);q===r.FLOAT&&(J=r.RGBA32F),q===r.HALF_FLOAT&&(J=r.RGBA16F),q===r.UNSIGNED_BYTE&&(J=we===Mt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(C,E){let q;return C?E===null||E===ws||E===As?q=r.DEPTH24_STENCIL8:E===Xi?q=r.DEPTH32F_STENCIL8:E===Ua&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ws||E===As?q=r.DEPTH_COMPONENT24:E===Xi?q=r.DEPTH_COMPONENT32F:E===Ua&&(q=r.DEPTH_COMPONENT16),q}function y(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==qn&&C.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),T(E),E.isVideoTexture&&u.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),S(E)}function T(C){const E=n.get(C);if(E.__webglInit===void 0)return;const q=C.source,ee=h.get(q);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(ee).length===0&&h.delete(q)}n.remove(C)}function R(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const q=C.source,ee=h.get(q);delete ee[E.__cacheKey],o.memory.textures--}function S(C){const E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ne=0;ne<E.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(E.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)r.deleteFramebuffer(E.__webglFramebuffer[ee]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=C.textures;for(let ee=0,ne=q.length;ee<ne;ee++){const J=n.get(q[ee]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(q[ee])}n.remove(C)}let v=0;function D(){v=0}function N(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function B(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){const q=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,C,E);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function $(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){_e(q,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function G(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){_e(q,C,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function W(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){H(q,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const k={[ac]:r.REPEAT,[wr]:r.CLAMP_TO_EDGE,[lc]:r.MIRRORED_REPEAT},re={[qn]:r.NEAREST,[ym]:r.NEAREST_MIPMAP_NEAREST,[Oo]:r.NEAREST_MIPMAP_LINEAR,[ni]:r.LINEAR,[cl]:r.LINEAR_MIPMAP_NEAREST,[Ar]:r.LINEAR_MIPMAP_LINEAR},P={[Fm]:r.NEVER,[Gm]:r.ALWAYS,[Bm]:r.LESS,[$f]:r.LEQUAL,[zm]:r.EQUAL,[Vm]:r.GEQUAL,[km]:r.GREATER,[Hm]:r.NOTEQUAL};function ue(C,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ni||E.magFilter===cl||E.magFilter===Oo||E.magFilter===Ar||E.minFilter===ni||E.minFilter===cl||E.minFilter===Oo||E.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,k[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,k[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,k[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,re[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==Oo&&E.minFilter!==Ar||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Q(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const ee=E.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const J=B(E);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[J].usedTimes++;const we=ne[C.__cacheKey];we!==void 0&&(ne[C.__cacheKey].usedTimes--,we.usedTimes===0&&R(E)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return q}function _e(C,E,q){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);const ne=Q(C,E),J=E.source;t.bindTexture(ee,C.__webglTexture,r.TEXTURE0+q);const we=n.get(J);if(J.version!==we.__version||ne===!0){t.activeTexture(r.TEXTURE0+q);const se=ht.getPrimaries(ht.workingColorSpace),fe=E.colorSpace===Wi?null:ht.getPrimaries(E.colorSpace),Fe=E.colorSpace===Wi||se===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let oe=_(E.image,!1,i.maxTextureSize);oe=Ie(E,oe);const Te=s.convert(E.format,E.colorSpace),Re=s.convert(E.type);let ze=M(E.internalFormat,Te,Re,E.colorSpace,E.isVideoTexture);ue(ee,E);let de;const Ve=E.mipmaps,Ye=E.isVideoTexture!==!0,ct=we.__version===void 0||ne===!0,U=J.dataReady,te=y(E,oe);if(E.isDepthTexture)ze=x(E.format===Cs,E.type),ct&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,ze,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,ze,oe.width,oe.height,0,Te,Re,null));else if(E.isDataTexture)if(Ve.length>0){Ye&&ct&&t.texStorage2D(r.TEXTURE_2D,te,ze,Ve[0].width,Ve[0].height);for(let K=0,j=Ve.length;K<j;K++)de=Ve[K],Ye?U&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,de.width,de.height,Te,Re,de.data):t.texImage2D(r.TEXTURE_2D,K,ze,de.width,de.height,0,Te,Re,de.data);E.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(r.TEXTURE_2D,te,ze,oe.width,oe.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe.width,oe.height,Te,Re,oe.data)):t.texImage2D(r.TEXTURE_2D,0,ze,oe.width,oe.height,0,Te,Re,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,ze,Ve[0].width,Ve[0].height,oe.depth);for(let K=0,j=Ve.length;K<j;K++)if(de=Ve[K],E.format!==hi)if(Te!==null)if(Ye){if(U)if(E.layerUpdates.size>0){for(const ae of E.layerUpdates){const Pe=de.width*de.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ae,de.width,de.height,1,Te,de.data.slice(Pe*ae,Pe*(ae+1)),0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,oe.depth,Te,de.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,ze,de.width,de.height,oe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,oe.depth,Te,Re,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,ze,de.width,de.height,oe.depth,0,Te,Re,de.data)}else{Ye&&ct&&t.texStorage2D(r.TEXTURE_2D,te,ze,Ve[0].width,Ve[0].height);for(let K=0,j=Ve.length;K<j;K++)de=Ve[K],E.format!==hi?Te!==null?Ye?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,de.width,de.height,Te,de.data):t.compressedTexImage2D(r.TEXTURE_2D,K,ze,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?U&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,de.width,de.height,Te,Re,de.data):t.texImage2D(r.TEXTURE_2D,K,ze,de.width,de.height,0,Te,Re,de.data)}else if(E.isDataArrayTexture)if(Ye){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,ze,oe.width,oe.height,oe.depth),U)if(E.layerUpdates.size>0){let K;switch(Re){case r.UNSIGNED_BYTE:switch(Te){case r.ALPHA:K=1;break;case r.LUMINANCE:K=1;break;case r.LUMINANCE_ALPHA:K=2;break;case r.RGB:K=3;break;case r.RGBA:K=4;break;default:throw new Error(`Unknown texel size for format ${Te}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:K=1;break;default:throw new Error(`Unknown texel size for type ${Re}.`)}const j=oe.width*oe.height*K;for(const ae of E.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,oe.width,oe.height,1,Te,Re,oe.data.slice(j*ae,j*(ae+1)));E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,Re,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,oe.width,oe.height,oe.depth,0,Te,Re,oe.data);else if(E.isData3DTexture)Ye?(ct&&t.texStorage3D(r.TEXTURE_3D,te,ze,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,Re,oe.data)):t.texImage3D(r.TEXTURE_3D,0,ze,oe.width,oe.height,oe.depth,0,Te,Re,oe.data);else if(E.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(r.TEXTURE_2D,te,ze,oe.width,oe.height);else{let K=oe.width,j=oe.height;for(let ae=0;ae<te;ae++)t.texImage2D(r.TEXTURE_2D,ae,ze,K,j,0,Te,Re,null),K>>=1,j>>=1}}else if(Ve.length>0){if(Ye&&ct){const K=lt(Ve[0]);t.texStorage2D(r.TEXTURE_2D,te,ze,K.width,K.height)}for(let K=0,j=Ve.length;K<j;K++)de=Ve[K],Ye?U&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,Te,Re,de):t.texImage2D(r.TEXTURE_2D,K,ze,Te,Re,de);E.generateMipmaps=!1}else if(Ye){if(ct){const K=lt(oe);t.texStorage2D(r.TEXTURE_2D,te,ze,K.width,K.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Re,oe)}else t.texImage2D(r.TEXTURE_2D,0,ze,Te,Re,oe);p(E)&&m(ee),we.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function H(C,E,q){if(E.image.length!==6)return;const ee=Q(C,E),ne=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+q);const J=n.get(ne);if(ne.version!==J.__version||ee===!0){t.activeTexture(r.TEXTURE0+q);const we=ht.getPrimaries(ht.workingColorSpace),se=E.colorSpace===Wi?null:ht.getPrimaries(E.colorSpace),fe=E.colorSpace===Wi||we===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let j=0;j<6;j++)!Fe&&!oe?Te[j]=_(E.image[j],!0,i.maxCubemapSize):Te[j]=oe?E.image[j].image:E.image[j],Te[j]=Ie(E,Te[j]);const Re=Te[0],ze=s.convert(E.format,E.colorSpace),de=s.convert(E.type),Ve=M(E.internalFormat,ze,de,E.colorSpace),Ye=E.isVideoTexture!==!0,ct=J.__version===void 0||ee===!0,U=ne.dataReady;let te=y(E,Re);ue(r.TEXTURE_CUBE_MAP,E);let K;if(Fe){Ye&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,Ve,Re.width,Re.height);for(let j=0;j<6;j++){K=Te[j].mipmaps;for(let ae=0;ae<K.length;ae++){const Pe=K[ae];E.format!==hi?ze!==null?Ye?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,Pe.width,Pe.height,ze,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,Ve,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,Pe.width,Pe.height,ze,de,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,Ve,Pe.width,Pe.height,0,ze,de,Pe.data)}}}else{if(K=E.mipmaps,Ye&&ct){K.length>0&&te++;const j=lt(Te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,Ve,j.width,j.height)}for(let j=0;j<6;j++)if(oe){Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te[j].width,Te[j].height,ze,de,Te[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,Te[j].width,Te[j].height,0,ze,de,Te[j].data);for(let ae=0;ae<K.length;ae++){const Je=K[ae].image[j].image;Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Je.width,Je.height,ze,de,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,Ve,Je.width,Je.height,0,ze,de,Je.data)}}else{Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ze,de,Te[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,ze,de,Te[j]);for(let ae=0;ae<K.length;ae++){const Pe=K[ae];Ye?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,ze,de,Pe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,Ve,ze,de,Pe.image[j])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),J.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Z(C,E,q,ee,ne,J){const we=s.convert(q.format,q.colorSpace),se=s.convert(q.type),fe=M(q.internalFormat,we,se,q.colorSpace);if(!n.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>J),Te=Math.max(1,E.height>>J);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,fe,oe,Te,E.depth,0,we,se,null):t.texImage2D(ne,J,fe,oe,Te,0,we,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),He(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ne,n.get(q).__webglTexture,0,ye(E)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ne,n.get(q).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(C,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const ee=E.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,J=x(E.stencilBuffer,ne),we=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=ye(E);He(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,J,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,J,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,J,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,C)}else{const ee=E.textures;for(let ne=0;ne<ee.length;ne++){const J=ee[ne],we=s.convert(J.format,J.colorSpace),se=s.convert(J.type),fe=M(J.internalFormat,we,se,J.colorSpace),Fe=ye(E);q&&He(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,fe,E.width,E.height):He(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Fe,fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,ne=ye(E);if(E.depthTexture.format===ms)He(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Cs)He(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const E=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,C)}else if(q){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),ce(E.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),ce(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,E,q){const ee=n.get(C);E!==void 0&&Z(ee.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ne(C)}function Xe(C){const E=C.texture,q=n.get(C),ee=n.get(E);C.addEventListener("dispose",w);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++),J){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let fe=0;fe<E.mipmaps.length;fe++)q.__webglFramebuffer[se][fe]=r.createFramebuffer()}else q.__webglFramebuffer[se]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)q.__webglFramebuffer[se]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(we)for(let se=0,fe=ne.length;se<fe;se++){const Fe=n.get(ne[se]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&He(C)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<ne.length;se++){const fe=ne[se];q.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[se]);const Fe=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),Te=M(fe.internalFormat,Fe,oe,fe.colorSpace,C.isXRRenderTarget===!0),Re=ye(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Te,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,q.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),ue(r.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Z(q.__webglFramebuffer[se][fe],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else Z(q.__webglFramebuffer[se],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let se=0,fe=ne.length;se<fe;se++){const Fe=ne[se],oe=n.get(Fe);t.bindTexture(r.TEXTURE_2D,oe.__webglTexture),ue(r.TEXTURE_2D,Fe),Z(q.__webglFramebuffer,C,Fe,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),p(Fe)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ee.__webglTexture),ue(se,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Z(q.__webglFramebuffer[fe],C,E,r.COLOR_ATTACHMENT0,se,fe);else Z(q.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,se,0);p(E)&&m(se),t.unbindTexture()}C.depthBuffer&&Ne(C)}function L(C){const E=C.textures;for(let q=0,ee=E.length;q<ee;q++){const ne=E[q];if(p(ne)){const J=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=n.get(ne).__webglTexture;t.bindTexture(J,we),m(J),t.unbindTexture()}}}const Be=[],ve=[];function We(C){if(C.samples>0){if(He(C)===!1){const E=C.textures,q=C.width,ee=C.height;let ne=r.COLOR_BUFFER_BIT;const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(C),se=E.length>1;if(se)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);const Fe=n.get(E[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,q,ee,0,0,q,ee,ne,r.NEAREST),l===!0&&(Be.length=0,ve.length=0,Be.push(r.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Be.push(J),ve.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);const Fe=n.get(E[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ye(C){return Math.min(i.maxSamples,C.samples)}function He(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Ie(C,E){const q=C.colorSpace,ee=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==lr&&q!==Wi&&(ht.getTransfer(q)===Mt?(ee!==hi||ne!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Le,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=He}function Vx(r,e){function t(n,i=Wi){let s;const o=ht.getTransfer(i);if(n===ir)return r.UNSIGNED_BYTE;if(n===Gf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Em)return r.BYTE;if(n===Tm)return r.SHORT;if(n===Ua)return r.UNSIGNED_SHORT;if(n===Vf)return r.INT;if(n===ws)return r.UNSIGNED_INT;if(n===Xi)return r.FLOAT;if(n===Ji)return r.HALF_FLOAT;if(n===wm)return r.ALPHA;if(n===Am)return r.RGB;if(n===hi)return r.RGBA;if(n===Cm)return r.LUMINANCE;if(n===Rm)return r.LUMINANCE_ALPHA;if(n===ms)return r.DEPTH_COMPONENT;if(n===Cs)return r.DEPTH_STENCIL;if(n===Pm)return r.RED;if(n===Xf)return r.RED_INTEGER;if(n===Dm)return r.RG;if(n===Yf)return r.RG_INTEGER;if(n===qf)return r.RGBA_INTEGER;if(n===ul||n===hl||n===fl||n===dl)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Su||n===Mu||n===yu||n===Eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tu||n===bu||n===wu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tu||n===bu)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Au||n===Cu||n===Ru||n===Pu||n===Du||n===Lu||n===Uu||n===Iu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Au)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ru)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Du)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ou)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ku)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===Hu||n===Vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pl)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lm||n===Gu||n===Wu||n===Xu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Gx extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wx={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ra;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:Xx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new el(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class $x extends Fs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new qx,p=t.getContextAttributes();let m=null,M=null;const x=[],y=[],A=new $e;let w=null;const T=new Wn;T.layers.enable(1),T.viewport=new Zt;const R=new Wn;R.layers.enable(2),R.viewport=new Zt;const S=[T,R],v=new Gx;v.layers.enable(1),v.layers.enable(2);let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=x[H];return Z===void 0&&(Z=new Hl,x[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=x[H];return Z===void 0&&(Z=new Hl,x[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=x[H];return Z===void 0&&(Z=new Hl,x[H]=Z),Z.getHandSpace()};function B(H){const Z=y.indexOf(H.inputSource);if(Z===-1)return;const ce=x[Z];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||o),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",$);for(let H=0;H<x.length;H++){const Z=y[H];Z!==null&&(y[H]=null,x[H].disconnect(Z))}D=null,N=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,i=null,M=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ii(d.framebufferWidth,d.framebufferHeight,{format:hi,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ce=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?Cs:ms,ce=p.stencil?As:ws);const Ne={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(Ne),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ii(h.textureWidth,h.textureHeight,{format:hi,type:ir,depthTexture:new cd(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function $(H){for(let Z=0;Z<H.removed.length;Z++){const ce=H.removed[Z],le=y.indexOf(ce);le>=0&&(y[le]=null,x[le].disconnect(ce))}for(let Z=0;Z<H.added.length;Z++){const ce=H.added[Z];let le=y.indexOf(ce);if(le===-1){for(let Le=0;Le<x.length;Le++)if(Le>=y.length){y.push(ce),le=Le;break}else if(y[Le]===null){y[Le]=ce,le=Le;break}if(le===-1)break}const Ne=x[le];Ne&&Ne.connect(ce)}}const G=new X,W=new X;function k(H,Z,ce){G.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const le=G.distanceTo(W),Ne=Z.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Xe=Ne[14]/(Ne[10]-1),L=Ne[14]/(Ne[10]+1),Be=(Ne[9]+1)/Ne[5],ve=(Ne[9]-1)/Ne[5],We=(Ne[8]-1)/Ne[0],ye=(Le[8]+1)/Le[0],He=Xe*We,F=Xe*ye,Ie=le/(-We+ye),lt=Ie*-We;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(lt),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const C=Xe+Ie,E=L+Ie,q=He-lt,ee=F+(le-lt),ne=Be*L/E*C,J=ve*L/E*C;H.projectionMatrix.makePerspective(q,ee,ne,J,C,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function re(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;_.texture!==null&&(H.near=_.depthNear,H.far=_.depthFar),v.near=R.near=T.near=H.near,v.far=R.far=T.far=H.far,(D!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,N=v.far,T.near=D,T.far=N,R.near=D,R.far=N,T.updateProjectionMatrix(),R.updateProjectionMatrix(),H.updateProjectionMatrix());const Z=H.parent,ce=v.cameras;re(v,Z);for(let le=0;le<ce.length;le++)re(ce[le],Z);ce.length===2?k(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),P(H,v,Z)};function P(H,Z,ce){ce===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=cc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ue=null;function Q(H,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let le=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Le=0;Le<ce.length;Le++){const Xe=ce[Le];let L=null;if(d!==null)L=d.getViewport(Xe);else{const ve=f.getViewSubImage(h,Xe);L=ve.viewport,Le===0&&(e.setRenderTargetTextures(M,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(M))}let Be=S[Le];Be===void 0&&(Be=new Wn,Be.layers.enable(Le),Be.viewport=new Zt,S[Le]=Be),Be.matrix.fromArray(Xe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Xe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(L.x,L.y,L.width,L.height),Le===0&&(v.matrix.copy(Be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(Be)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Le=f.getDepthInformation(ce[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,i.renderState)}}for(let ce=0;ce<x.length;ce++){const le=y[ce],Ne=x[ce];le!==null&&Ne!==void 0&&Ne.update(le,Z,c||o)}ue&&ue(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const _e=new ad;_e.setAnimationLoop(Q),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}}const _r=new Li,Kx=new Nt;function Zx(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,id(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,_r.copy(y),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(_r)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(M,A);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const x=f();M.__bindingPointIndex=x;const y=r.createBuffer(),A=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=i[M.id],y=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,T=y.length;w<T;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,v=R.length;S<v;S++){const D=R[S];if(d(D,w,S,A)===!0){const N=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let $=0;$<B.length;$++){const G=B[$],W=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+Y,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,x,y,A){const w=M.value,T=x+"_"+y;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const R=A[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(M){const x=M.uniforms;let y=0;const A=16;for(let T=0,R=x.length;T<R;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,D=S.length;v<D;v++){const N=S[v],B=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,$=B.length;Y<$;Y++){const G=B[Y],W=_(G),k=y%A;k!==0&&A-k<W.boundary&&(y+=A-k),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=W.storage}}}const w=y%A;return w>0&&(y+=A-w),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Jx{constructor(e={}){const{canvas:t=Xm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=ji,this.toneMappingExposure=1;const x=this;let y=!1,A=0,w=0,T=null,R=-1,S=null;const v=new Zt,D=new Zt;let N=null;const B=new at(0);let Y=0,$=t.width,G=t.height,W=1,k=null,re=null;const P=new Zt(0,0,$,G),ue=new Zt(0,0,$,G);let Q=!1;const _e=new od;let H=!1,Z=!1;const ce=new Nt,le=new X,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Xe(){return T===null?W:1}let L=n;function Be(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",j,!1),L===null){const I="webgl2";if(L=Be(I,b),L===null)throw Be(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,We,ye,He,F,Ie,lt,C,E,q,ee,ne,J,we,se,fe,Fe,oe,Te,Re,ze,de,Ve,Ye;function ct(){ve=new ov(L),ve.init(),de=new Vx(L,ve),We=new ev(L,ve,e,de),ye=new kx(L),He=new cv(L),F=new wx,Ie=new Hx(L,ve,ye,F,We,de,He),lt=new nv(x),C=new sv(x),E=new __(L),Ve=new J0(L,E),q=new av(L,E,He,Ve),ee=new hv(L,q,E,He),Te=new uv(L,We,Ie),fe=new tv(F),ne=new bx(x,lt,C,ve,We,Ve,fe),J=new Zx(x,F),we=new Cx,se=new Ix(ve),oe=new j0(x,lt,C,ye,ee,h,l),Fe=new zx(x,ee,We),Ye=new jx(L,He,We,ye),Re=new Q0(L,ve,He),ze=new lv(L,ve,He),He.programs=ne.programs,x.capabilities=We,x.extensions=ve,x.properties=F,x.renderLists=we,x.shadowMap=Fe,x.state=ye,x.info=He}ct();const U=new $x(x,L);this.xr=U,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize($,G,!1))},this.getSize=function(b){return b.set($,G)},this.setSize=function(b,I,z=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,G=I,t.width=Math.floor(b*W),t.height=Math.floor(I*W),z===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set($*W,G*W).floor()},this.setDrawingBufferSize=function(b,I,z){$=b,G=I,W=z,t.width=Math.floor(b*z),t.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,I,z,V){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,I,z,V),ye.viewport(v.copy(P).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(ue)},this.setScissor=function(b,I,z,V){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,I,z,V),ye.scissor(D.copy(ue).multiplyScalar(W).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){ye.setScissorTest(Q=b)},this.setOpaqueSort=function(b){k=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(b=!0,I=!0,z=!0){let V=0;if(b){let O=!1;if(T!==null){const ie=T.texture.format;O=ie===qf||ie===Yf||ie===Xf}if(O){const ie=T.texture.type,he=ie===ir||ie===ws||ie===Ua||ie===As||ie===Gf||ie===Wf,ge=oe.getClearColor(),Ee=oe.getClearAlpha(),Me=ge.r,xe=ge.g,be=ge.b;he?(d[0]=Me,d[1]=xe,d[2]=be,d[3]=Ee,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Me,g[1]=xe,g[2]=be,g[3]=Ee,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}I&&(V|=L.DEPTH_BUFFER_BIT),z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",j,!1),we.dispose(),se.dispose(),F.dispose(),lt.dispose(),C.dispose(),ee.dispose(),Ve.dispose(),Ye.dispose(),ne.dispose(),U.dispose(),U.removeEventListener("sessionstart",Oe),U.removeEventListener("sessionend",Ae),Qe.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=He.autoReset,I=Fe.enabled,z=Fe.autoUpdate,V=Fe.needsUpdate,O=Fe.type;ct(),He.autoReset=b,Fe.enabled=I,Fe.autoUpdate=z,Fe.needsUpdate=V,Fe.type=O}function j(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const I=b.target;I.removeEventListener("dispose",ae),Pe(I)}function Pe(b){Je(b),F.remove(b)}function Je(b){const I=F.get(b).programs;I!==void 0&&(I.forEach(function(z){ne.releaseProgram(z)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,V,O,ie){I===null&&(I=Ne);const he=O.isMesh&&O.matrixWorld.determinant()<0,ge=Tt(b,I,z,V,O);ye.setMaterial(V,he);let Ee=z.index,Me=1;if(V.wireframe===!0){if(Ee=q.getWireframeAttribute(z),Ee===void 0)return;Me=2}const xe=z.drawRange,be=z.attributes.position;let ot=xe.start*Me,yt=(xe.start+xe.count)*Me;ie!==null&&(ot=Math.max(ot,ie.start*Me),yt=Math.min(yt,(ie.start+ie.count)*Me)),Ee!==null?(ot=Math.max(ot,0),yt=Math.min(yt,Ee.count)):be!=null&&(ot=Math.max(ot,0),yt=Math.min(yt,be.count));const _t=yt-ot;if(_t<0||_t===1/0)return;Ve.setup(O,V,ge,z,Ee);let bt,it=Re;if(Ee!==null&&(bt=E.get(Ee),it=ze,it.setIndex(bt)),O.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Xe()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(O.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),ye.setLineWidth(Ce*Xe()),O.isLineSegments?it.setMode(L.LINES):O.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else O.isPoints?it.setMode(L.POINTS):O.isSprite&&it.setMode(L.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?it.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)it.renderInstances(ot,_t,O.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wt=Math.min(z.instanceCount,Ce);it.renderInstances(ot,_t,wt)}else it.render(ot,_t)};function pt(b,I,z){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,Ke(b,I,z),b.side=nr,b.needsUpdate=!0,Ke(b,I,z),b.side=wi):Ke(b,I,z)}this.compile=function(b,I,z=null){z===null&&(z=b),p=se.get(z),p.init(I),M.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==z&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return b.traverse(function(O){const ie=O.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const ge=ie[he];pt(ge,z,O),V.add(ge)}else pt(ie,z,O),V.add(ie)}),M.pop(),p=null,V},this.compileAsync=function(b,I,z=null){const V=this.compile(b,I,z);return new Promise(O=>{function ie(){if(V.forEach(function(he){F.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){O(b);return}setTimeout(ie,10)}ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let mt=null;function st(b){mt&&mt(b)}function Oe(){Qe.stop()}function Ae(){Qe.start()}const Qe=new ad;Qe.setAnimationLoop(st),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(b){mt=b,U.setAnimationLoop(b),b===null?Qe.stop():Qe.start()},U.addEventListener("sessionstart",Oe),U.addEventListener("sessionend",Ae),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(I),I=U.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,T),p=se.get(b,M.length),p.init(I),M.push(p),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),_e.setFromProjectionMatrix(ce),Z=this.localClippingEnabled,H=fe.init(this.clippingPlanes,Z),_=we.get(b,m.length),_.init(),m.push(_),U.enabled===!0&&U.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&pe(ie,I,-1/0,x.sortObjects)}pe(b,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,re),Le=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Le&&oe.addToRenderList(_,b),this.info.render.frame++,H===!0&&fe.beginShadows();const z=p.state.shadowsArray;Fe.render(z,b,I),H===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,O=_.transmissive;if(p.setupLights(),I.isArrayCamera){const ie=I.cameras;if(O.length>0)for(let he=0,ge=ie.length;he<ge;he++){const Ee=ie[he];Ue(V,O,b,Ee)}Le&&oe.render(b);for(let he=0,ge=ie.length;he<ge;he++){const Ee=ie[he];Ge(_,b,Ee,Ee.viewport)}}else O.length>0&&Ue(V,O,b,I),Le&&oe.render(b),Ge(_,b,I);T!==null&&(Ie.updateMultisampleRenderTarget(T),Ie.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,I),Ve.resetDefaultState(),R=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],H===!0&&fe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function pe(b,I,z,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||_e.intersectsSprite(b)){V&&le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const he=ee.update(b),ge=b.material;ge.visible&&_.push(b,he,ge,z,le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||_e.intersectsObject(b))){const he=ee.update(b),ge=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),le.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),le.copy(he.boundingSphere.center)),le.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(ge)){const Ee=he.groups;for(let Me=0,xe=Ee.length;Me<xe;Me++){const be=Ee[Me],ot=ge[be.materialIndex];ot&&ot.visible&&_.push(b,he,ot,z,le.z,be)}}else ge.visible&&_.push(b,he,ge,z,le.z,null)}}const ie=b.children;for(let he=0,ge=ie.length;he<ge;he++)pe(ie[he],I,z,V)}function Ge(b,I,z,V){const O=b.opaque,ie=b.transmissive,he=b.transparent;p.setupLightsView(z),H===!0&&fe.setGlobalState(x.clippingPlanes,z),V&&ye.viewport(v.copy(V)),O.length>0&&ke(O,I,z),ie.length>0&&ke(ie,I,z),he.length>0&&ke(he,I,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ue(b,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ii(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Ji:ir,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ie=p.state.transmissionRenderTarget[V.id],he=V.viewport||v;ie.setSize(he.z,he.w);const ge=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(B),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),Le?oe.render(z):x.clear();const Ee=x.toneMapping;x.toneMapping=ji;const Me=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),H===!0&&fe.setGlobalState(x.clippingPlanes,V),ke(b,z,V),Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie),ve.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let be=0,ot=I.length;be<ot;be++){const yt=I[be],_t=yt.object,bt=yt.geometry,it=yt.material,Ce=yt.group;if(it.side===wi&&_t.layers.test(V.layers)){const wt=it.side;it.side=Mn,it.needsUpdate=!0,Lt(_t,z,V,bt,it,Ce),it.side=wt,it.needsUpdate=!0,xe=!0}}xe===!0&&(Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie))}x.setRenderTarget(ge),x.setClearColor(B,Y),Me!==void 0&&(V.viewport=Me),x.toneMapping=Ee}function ke(b,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ie=b.length;O<ie;O++){const he=b[O],ge=he.object,Ee=he.geometry,Me=V===null?he.material:V,xe=he.group;ge.layers.test(z.layers)&&Lt(ge,I,z,Ee,Me,xe)}}function Lt(b,I,z,V,O,ie){b.onBeforeRender(x,I,z,V,O,ie),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,I,z,V,b,ie),O.transparent===!0&&O.side===wi&&O.forceSinglePass===!1?(O.side=Mn,O.needsUpdate=!0,x.renderBufferDirect(z,I,V,O,b,ie),O.side=nr,O.needsUpdate=!0,x.renderBufferDirect(z,I,V,O,b,ie),O.side=wi):x.renderBufferDirect(z,I,V,O,b,ie),b.onAfterRender(x,I,z,V,O,ie)}function Ke(b,I,z){I.isScene!==!0&&(I=Ne);const V=F.get(b),O=p.state.lights,ie=p.state.shadowsArray,he=O.state.version,ge=ne.getParameters(b,O.state,ie,I,z),Ee=ne.getProgramCacheKey(ge);let Me=V.programs;V.environment=b.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(b.isMeshStandardMaterial?C:lt).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Me===void 0&&(b.addEventListener("dispose",ae),Me=new Map,V.programs=Me);let xe=Me.get(Ee);if(xe!==void 0){if(V.currentProgram===xe&&V.lightsStateVersion===he)return kt(b,ge),xe}else ge.uniforms=ne.getUniforms(b),b.onBuild(z,ge,x),b.onBeforeCompile(ge,x),xe=ne.acquireProgram(ge,Ee),Me.set(Ee,xe),V.uniforms=ge.uniforms;const be=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(be.clippingPlanes=fe.uniform),kt(b,ge),V.needsLights=ft(b),V.lightsStateVersion=he,V.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=xe,V.uniformsList=null,xe}function Et(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=ya.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function kt(b,I){const z=F.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Tt(b,I,z,V,O){I.isScene!==!0&&(I=Ne),Ie.resetTextureUnits();const ie=I.fog,he=V.isMeshStandardMaterial?I.environment:null,ge=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,Ee=(V.isMeshStandardMaterial?C:lt).get(V.envMap||he),Me=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,xe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!z.morphAttributes.position,ot=!!z.morphAttributes.normal,yt=!!z.morphAttributes.color;let _t=ji;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=x.toneMapping);const bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=bt!==void 0?bt.length:0,Ce=F.get(V),wt=p.state.lights;if(H===!0&&(Z===!0||b!==S)){const Hn=b===S&&V.id===R;fe.setState(V,b,Hn)}let gt=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wt.state.version||Ce.outputColorSpace!==ge||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Ee||V.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==fe.numPlanes||Ce.numIntersection!==fe.numIntersection)||Ce.vertexAlphas!==Me||Ce.vertexTangents!==xe||Ce.morphTargets!==be||Ce.morphNormals!==ot||Ce.morphColors!==yt||Ce.toneMapping!==_t||Ce.morphTargetsCount!==it)&&(gt=!0):(gt=!0,Ce.__version=V.version);let gi=Ce.currentProgram;gt===!0&&(gi=Ke(V,I,O));let No=!1,ur=!1,ol=!1;const Xt=gi.getUniforms(),Ni=Ce.uniforms;if(ye.useProgram(gi.program)&&(No=!0,ur=!0,ol=!0),V.id!==R&&(R=V.id,ur=!0),No||S!==b){Xt.setValue(L,"projectionMatrix",b.projectionMatrix),Xt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Hn=Xt.map.cameraPosition;Hn!==void 0&&Hn.setValue(L,le.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&Xt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Xt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,ur=!0,ol=!0)}if(O.isSkinnedMesh){Xt.setOptional(L,O,"bindMatrix"),Xt.setOptional(L,O,"bindMatrixInverse");const Hn=O.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Xt.setValue(L,"boneTexture",Hn.boneTexture,Ie))}O.isBatchedMesh&&(Xt.setOptional(L,O,"batchingTexture"),Xt.setValue(L,"batchingTexture",O._matricesTexture,Ie),Xt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Xt.setValue(L,"batchingColorTexture",O._colorsTexture,Ie));const al=z.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0)&&Te.update(O,z,gi),(ur||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Xt.setValue(L,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ni.envMap.value=Ee,Ni.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Ni.envMapIntensity.value=I.environmentIntensity),ur&&(Xt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&St(Ni,ol),ie&&V.fog===!0&&J.refreshFogUniforms(Ni,ie),J.refreshMaterialUniforms(Ni,V,W,G,p.state.transmissionRenderTarget[b.id]),ya.upload(L,Et(Ce),Ni,Ie)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ya.upload(L,Et(Ce),Ni,Ie),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Xt.setValue(L,"center",O.center),Xt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Xt.setValue(L,"normalMatrix",O.normalMatrix),Xt.setValue(L,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Hn=V.uniformsGroups;for(let ll=0,Vp=Hn.length;ll<Vp;ll++){const _u=Hn[ll];Ye.update(_u,gi),Ye.bind(_u,gi)}}return gi}function St(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function ft(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,z){F.get(b.texture).__webglTexture=I,F.get(b.depthTexture).__webglTexture=z;const V=F.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const z=F.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,z=0){T=b,A=I,w=z;let V=!0,O=null,ie=!1,he=!1;if(b){const Ee=F.get(b);Ee.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):Ee.__webglFramebuffer===void 0?Ie.setupRenderTarget(b):Ee.__hasExternalTextures&&Ie.rebindTextures(b,F.get(b.texture).__webglTexture,F.get(b.depthTexture).__webglTexture);const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const xe=F.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(xe[I])?O=xe[I][z]:O=xe[I],ie=!0):b.samples>0&&Ie.useMultisampledRTT(b)===!1?O=F.get(b).__webglMultisampledFramebuffer:Array.isArray(xe)?O=xe[z]:O=xe,v.copy(b.viewport),D.copy(b.scissor),N=b.scissorTest}else v.copy(P).multiplyScalar(W).floor(),D.copy(ue).multiplyScalar(W).floor(),N=Q;if(ye.bindFramebuffer(L.FRAMEBUFFER,O)&&V&&ye.drawBuffers(b,O),ye.viewport(v),ye.scissor(D),ye.setScissorTest(N),ie){const Ee=F.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,z)}else if(he){const Ee=F.get(b.texture),Me=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,z||0,Me)}R=-1},this.readRenderTargetPixels=function(b,I,z,V,O,ie,he){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=F.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){ye.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Ee=b.texture,Me=Ee.format,xe=Ee.type;if(!We.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&z>=0&&z<=b.height-O&&L.readPixels(I,z,V,O,de.convert(Me),de.convert(xe),ie)}finally{const Ee=T!==null?F.get(T).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,I,z,V,O,ie,he){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=F.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){ye.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Ee=b.texture,Me=Ee.format,xe=Ee.type;if(!We.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-V&&z>=0&&z<=b.height-O){const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(I,z,V,O,de.convert(Me),de.convert(xe),0),L.flush();const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Ym(L,ot,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie)}finally{L.deleteBuffer(be),L.deleteSync(ot)}return ie}}finally{const Ee=T!==null?F.get(T).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(b,I=null,z=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-z),O=Math.floor(b.image.width*V),ie=Math.floor(b.image.height*V),he=I!==null?I.x:0,ge=I!==null?I.y:0;Ie.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,he,ge,O,ie),ye.unbindTexture()},this.copyTextureToTexture=function(b,I,z=null,V=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],I=arguments[2],O=arguments[3]||0,z=null);let ie,he,ge,Ee,Me,xe;z!==null?(ie=z.max.x-z.min.x,he=z.max.y-z.min.y,ge=z.min.x,Ee=z.min.y):(ie=b.image.width,he=b.image.height,ge=0,Ee=0),V!==null?(Me=V.x,xe=V.y):(Me=0,xe=0);const be=de.convert(I.format),ot=de.convert(I.type);Ie.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const yt=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),bt=L.getParameter(L.UNPACK_SKIP_PIXELS),it=L.getParameter(L.UNPACK_SKIP_ROWS),Ce=L.getParameter(L.UNPACK_SKIP_IMAGES),wt=b.isCompressedTexture?b.mipmaps[O]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Me,xe,ie,he,be,ot,wt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Me,xe,wt.width,wt.height,be,wt.data):L.texSubImage2D(L.TEXTURE_2D,O,Me,xe,be,ot,wt),L.pixelStorei(L.UNPACK_ROW_LENGTH,yt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,it),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),O===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(b,I,z=null,V=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,b=arguments[2],I=arguments[3],O=arguments[4]||0);let ie,he,ge,Ee,Me,xe,be,ot,yt;const _t=b.isCompressedTexture?b.mipmaps[O]:b.image;z!==null?(ie=z.max.x-z.min.x,he=z.max.y-z.min.y,ge=z.max.z-z.min.z,Ee=z.min.x,Me=z.min.y,xe=z.min.z):(ie=_t.width,he=_t.height,ge=_t.depth,Ee=0,Me=0,xe=0),V!==null?(be=V.x,ot=V.y,yt=V.z):(be=0,ot=0,yt=0);const bt=de.convert(I.format),it=de.convert(I.type);let Ce;if(I.isData3DTexture)Ie.setTexture3D(I,0),Ce=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ie.setTexture2DArray(I,0),Ce=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const wt=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gi=L.getParameter(L.UNPACK_SKIP_PIXELS),No=L.getParameter(L.UNPACK_SKIP_ROWS),ur=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xe),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ce,O,be,ot,yt,ie,he,ge,bt,it,_t.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,O,be,ot,yt,ie,he,ge,bt,_t.data):L.texSubImage3D(Ce,O,be,ot,yt,ie,he,ge,bt,it,_t),L.pixelStorei(L.UNPACK_ROW_LENGTH,wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,No),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ur),O===0&&I.generateMipmaps&&L.generateMipmap(Ce),ye.unbindTexture()},this.initRenderTarget=function(b){F.get(b).__webglFramebuffer===void 0&&Ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,ye.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Qa?"display-p3":"srgb"}}class Qx extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class md extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new X,ka=new X,Fh=new Nt,Ys=new kc,sa=new Lo,Vl=new X,Bh=new X;class eS extends mn{constructor(e=new jn,t=new md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)za.fromBufferAttribute(t,i-1),ka.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=za.distanceTo(ka);e.setAttribute("lineDistance",new ri(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;Fh.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(Fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),M=u.getX(_+1),x=oa(this,e,Ys,l,m,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=oa(this,e,Ys,l,_,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=oa(this,e,Ys,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=oa(this,e,Ys,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function oa(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(za.fromBufferAttribute(o,i),ka.fromBufferAttribute(o,s),t.distanceSqToSegment(za,ka,Vl,Bh)>n)return;Vl.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Vl);if(!(l<e.near||l>e.far))return{distance:l,point:Bh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const zh=new X,kh=new X;class tS extends eS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)zh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zh.distanceTo(kh);e.setAttribute("lineDistance",new ri(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nS extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new Nt,hc=new kc,aa=new Lo,la=new X;class iS extends mn{constructor(e=new jn,t=new nS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;Hh.copy(i).invert(),hc.copy(e.ray).applyMatrix4(Hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const p=c.getX(g);la.fromBufferAttribute(f,p),Vh(la,p,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)la.fromBufferAttribute(f,g),Vh(la,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vh(r,e,t,n,i,s,o){const a=hc.distanceSqToPoint(r);if(a<t){const l=new X;hc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class rS extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const _d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const oS=new ld(-1,1,1,-1,0,1);class aS extends jn{constructor(){super(),this.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ri([0,2,0,0,2,0],2))}}const lS=new aS;class Gc{constructor(e){this._mesh=new fi(lS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fc extends ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vo.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Gc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wh extends ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class cS extends ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ji}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fc(_d),this.copyPass.material.blending=Pi,this.clock=new sS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wh!==void 0&&(o instanceof Wh?n=!0:o instanceof cS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hS extends ks{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const fS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ps extends ks{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(s,o,{type:Ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new ii(s,o,{type:Ji});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new ii(s,o,{type:Ji});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=fS;this.highPassUniforms=vo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new $e(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=_d;this.copyUniforms=vo.clone(u.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:go,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new Hc,this.fsQuad=new Gc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new $e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ps.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ps.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ps.BlurDirectionX=new $e(1,0);Ps.BlurDirectionY=new $e(0,1);const dS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class pS extends ks{constructor(){super();const e=dS;this.uniforms=vo.clone(e.uniforms),this.material=new rS({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Gc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Of?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Ti(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xo={duration:.5,overwrite:!1,delay:0},Wc,Jt,At,$n=1e8,xt=1/$n,dc=Math.PI*2,mS=dc/4,_S=0,vd=Math.sqrt,gS=Math.cos,vS=Math.sin,Kt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Ui=function(e){return typeof e=="number"},Xc=function(e){return typeof e>"u"},_i=function(e){return typeof e=="object"},En=function(e){return e!==!1},Yc=function(){return typeof window<"u"},ca=function(e){return Dt(e)||Kt(e)},xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,xS=/random\([^)]+\)/g,SS=/,\s*/g,Xh=/(?:-?\.?\d|\.)+/gi,Sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Md=/[+-]=-?[.\d]+/,MS=/[^,'"\[\]\s]+/gi,yS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,oi,pc,qc,zn={},Ha={},yd,Ed=function(e){return(Ha=Ds(e,zn))&&An},$c=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},So=function(e,t){return!t&&console.warn(e)},Td=function(e,t){return e&&(zn[e]=t)&&Ha&&(Ha[e]=t)||zn},Mo=function(){return 0},ES={suppressEvents:!0,isStart:!0,kill:!1},Ea={suppressEvents:!0,kill:!1},TS={suppressEvents:!0},Kc={},Qi=[],mc={},bd,Ln={},Wl={},Yh=30,Ta=[],Zc="",jc=function(e){var t=e[0],n,i;if(_i(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ta.length;i--&&!Ta[i].targetTest(t););n=Ta[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new qd(e[i],n)))||e.splice(i,1);return e},Pr=function(e){return e._gsap||jc(Kn(e))[0]._gsap},wd=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():Xc(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},gs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},bS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Va=function(){var e=Qi.length,t=Qi.slice(0),n,i;for(mc={},Qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jc=function(e){return!!(e._initted||e._startAt||e.add)},Ad=function(e,t,n,i){Qi.length&&!Jt&&Va(),e.render(t,n,!!(Jt&&t<0&&Jc(e))),Qi.length&&!Jt&&Va()},Cd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(MS).length<2?t:Kt(e)?e.trim():e},Rd=function(e){return e},kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ds=function(e,t){for(var n in t)e[n]=t[n];return e},qh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ro=function(e){var t=e.parent||Rt,n=e.keyframes?wS(an(e.keyframes)):kn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},AS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Pd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},nl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},CS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_c=function(e,t,n,i){return e._startAt&&(Jt?e._startAt.revert(Ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},RS=function r(e){return!e||e._ts&&r(e.parent)},$h=function(e){return e._repeat?Ls(e._tTime,e=e.duration()+e._rDelay)*e:0},Ls=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},il=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),il(e),n._dirty||Dr(n,e)),e},Dd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wa(e.rawTime(),t),(!t._dur||Io(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),Dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},ui=function(e,t,n,i){return t.parent&&rr(t),t._start=Ct((Ui(n)?n:n||e!==Rt?Gn(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pd(e,t,"_first","_last",e._sort?"_start":0),gc(t)||(e._recent=t),i||Dd(e,t),e._ts<0&&rl(e,e._tTime),e},Ld=function(e,t){return(zn.ScrollTrigger||$c("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},Ud=function(e,t,n,i,s){if(eu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bd!==In.frame)return Qi.push(e),e._lazy=[s,i],1},PS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&PS(e)&&!(!e._initted&&gc(e))||(e._ts<0||e._dp._ts<0)&&!gc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Io(0,e._tDur,t),u=Ls(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ls(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Jt||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Ud(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_c(e,t,n,!0),e._onUpdate&&!n&&On(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&On(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&rr(e,1),!n&&!Jt&&(On(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},LS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Us=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&rl(e,e._tTime=e._tDur*a),e.parent&&il(e),n||Dr(e.parent,e),e},Kh=function(e){return e instanceof xn?Dr(e):Us(e,e._dur)},US={_start:0,endTime:Mo,totalDuration:Mo},Gn=function r(e,t,n){var i=e.labels,s=e._recent||US,o=e.duration()>=$n?s.endTime(!1):e._dur,a,l,c;return Kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},so=function(e,t,n){var i=Ui(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},Io=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!Kt(e)||!(t=yS.exec(e))?"":t[1]},IS=function(e,t,n){return cr(n,function(i){return Io(e,t,i)})},vc=[].slice,Id=function(e,t){return e&&_i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_i(e[0]))&&!e.nodeType&&e!==oi},NS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Kt(i)&&!t||Id(i,1)?(s=n).push.apply(s,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Kt(e)&&!n&&(pc||!Is())?vc.call((t||qc).querySelectorAll(e),0):an(e)?NS(e,n):Id(e)?vc.call(e,0):e?[e]:[]},xc=function(e){return e=Kn(e)[0]||So("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?So("Invalid scope")||qc.createElement("div"):e)}},Nd=function(e){return e.sort(function(){return .5-Math.random()})},Od=function(e){if(Dt(e))return e;var t=_i(e)?e:{each:e},n=Lr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Kt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,p=o[_],m,M,x,y,A,w,T,R,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,$n])[1],!S){for(T=-$n;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],m=l?Math.min(S,_)*u-.5:i%S,M=S===$n?0:l?_*f/S-.5:i/S|0,T=0,R=$n,w=0;w<_;w++)x=w%S-m,y=M-(w/S|0),p[w]=A=c?Math.abs(c==="y"?y:x):vd(x*x+y*y),A>T&&(T=A),A<R&&(R=A);i==="random"&&Nd(p),p.max=T-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=rn(t.amount||t.each)||0,n=n&&_<0?$S(n):n}return _=(p[h]-p.min)/p.max||0,Ct(p.b+(n?n(_):_)*p.v)+p.u}},Sc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ui(n)?0:rn(n))}},Fd=function(e,t){var n=an(e),i,s;return!n&&_i(e)&&(i=n=e.radius||$n,e.values?(e=Kn(e.values),(s=!Ui(e[0]))&&(i*=i)):e=Sc(e.increment)),cr(t,n?Dt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=$n,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ui(o)?u:u+rn(o)}:Sc(e))},Bd=function(e,t,n,i){return cr(an(e)?!t:n===!0?!!(n=0):!i,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},OS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},FS=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},BS=function(e,t,n){return kd(e,t,0,1,n)},zd=function(e,t,n){return cr(n,function(i){return e[~~t(i)]})},zS=function r(e,t,n){var i=t-e;return an(e)?zd(e,r(0,e.length),t):cr(n,function(s){return(i+(s-e)%i)%i+e})},kS=function r(e,t,n){var i=t-e,s=i*2;return an(e)?zd(e,r(0,e.length-1),t):cr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},yo=function(e){return e.replace(xS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(SS);return Bd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kd=function(e,t,n,i,s){var o=t-e,a=i-n;return cr(s,function(l){return n+((l-e)/o*a||0)})},HS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Kt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ds(an(e)?[]:{},e));if(!u){for(l in t)Qc.call(a,e,l,"get",t[l]);s=function(g){return iu(g,a)||(o?e.p:e)}}}return cr(n,s)},Zh=function(e,t,n){var i=e.labels,s=$n,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},On=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Qi.length&&Va(),a&&(At=a),u=l?s.apply(c,l):s.call(c),At=o,u},js=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&On(e,"onInterrupt"),e},fs,Hd=[],Vd=function(e){if(e)if(e=!e.name&&e.default||e,Yc()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Mo,render:iu,add:Qc,kill:rM,modifier:iM,rawVars:0},o={targetTest:0,get:0,getSetter:nu,aliases:{},register:0};if(Is(),e!==i){if(Ln[t])return;kn(i,kn(Ga(e,s),o)),Ds(i.prototype,Ds(s,Ga(e,o))),Ln[i.prop=t]=i,e.targetTest&&(Ta.push(i),Kc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Td(t,i),e.register&&e.register(An,i,bn)}else Hd.push(e)},vt=255,Js={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},Xl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},Gd=function(e,t,n){var i=e?Ui(e)?[e>>16,e>>8&vt,e&vt]:0:Js.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Js[e])i=Js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Xh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Xl(l+1/3,s,o),i[1]=Xl(l,s,o),i[2]=Xl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Sd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xh)||Js.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/vt,o=i[1]/vt,a=i[2]/vt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Wd=function(e){var t=[],n=[],i=-1;return e.split(er).forEach(function(s){var o=s.match(hs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},jh=function(e,t,n){var i="",s=(e+i).match(er),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Gd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Wd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(er,"1").split(hs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(er),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},er=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Js)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),VS=/hsl[a]?\(/,Xd=function(e){var t=e.join(" "),n;if(er.lastIndex=0,er.test(t))return n=VS.test(t),e[1]=jh(e[1],n),e[0]=jh(e[0],n,Wd(e[1])),!0},Eo,In=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=r()-i,M=p===!0,x,y,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,x=A-o,(x>0||M)&&(w=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](A,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){yd&&(!pc&&Yc()&&(oi=pc=window,qc=oi.document||{},zn.gsap=An,(oi.gsapVersions||(oi.gsapVersions=[])).push(An.version),Ed(Ha||oi.GreenSockGlobals||!oi.gsap&&oi||{}),Hd.forEach(Vd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Eo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Eo=0,c=Mo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,M){var x=m?function(y,A,w,T){p(y,A,w,T),f.remove(x)}:p;return f.remove(p),a[M?"unshift":"push"](x),Is(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),Is=function(){return!Eo&&In.wake()},rt={},GS=/^[\d.\-M][\d.\-,\s]/,WS=/["']/g,XS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(WS,"").trim():+c,i=l.substr(a+1).trim();return t},YS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},qS=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[XS(t[1])]:YS(e).split(",").map(Cd)):rt._CE&&GS.test(e)?rt._CE("",e):n},$S=function(e){return function(t){return 1-e(1-t)}},Lr=function(e,t){return e&&(Dt(e)?e:rt[e]||qS(e))||t},kr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Tn(e,function(a){rt[a]=zn[a]=s,rt[o=a.toLowerCase()]=n;for(var l in s)rt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[a+"."+l]=s[l]}),s},Yd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/dc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*vS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Yd(a);return s=dc/s,l.config=function(c,u){return r(e,c,u)},l},ql=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Yd(n);return i.config=function(s){return r(e,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;kr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;kr("Elastic",Yl("in"),Yl("out"),Yl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});kr("Circ",function(r){return-(vd(1-r*r)-1)});kr("Sine",function(r){return r===1?1:-gS(r*mS)+1});kr("Back",ql("in"),ql("out"),ql());rt.SteppedEase=rt.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-xt;return function(a){return((i*Io(0,o,a)|0)+s)*n}}};xo.ease=rt["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zc+=r+","+r+"Params,"});var qd=function(e,t){this.id=_S++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wd,this.set=t?t.getSetter:nu},To=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Eo||In.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rl(this,n),!s._dp||s.parent||Dd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ad(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$h(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$h(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ls(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime(Io(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),il(this),CS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=TS);var i=Jt;return Jt=n,Jc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Jt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Gn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Dt(n)?n:Rd,l=function(){var u=i.then;i.then=null,s&&s(),Dt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){js(this)},r}();kn(To.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var xn=function(r){gd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),Rt&&ui(n.parent||Rt,Ti(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ld(Ti(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return so(0,arguments,this),this},t.from=function(i,s,o){return so(1,arguments,this),this},t.fromTo=function(i,s,o,a){return so(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ro(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,Gn(this,o),1),this},t.call=function(i,s,o){return ui(this,zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new zt(i,o,Gn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ro(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,ro(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,p,m,M,x,y,A,w,T;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,x=this._ts,m=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Ct(u%p),u===l?(_=this._repeat,h=c):(A=Ct(u/p),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=Ls(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(h=c-h,T=1),_!==A&&!this._lock){var R=w&&A&1,S=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ct(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=LS(this,Ct(a),Ct(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(On(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-xt);break}}d=g}else{d=this._last;for(var v=i<0?i:h;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||Jt&&Jc(d)),h!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=v?-xt:xt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-xt)._zTime=h>=a?1:-1,this._ts))return this._start=y,il(this),this.render(i,s,o);this._onUpdate&&!s&&On(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(On(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ui(s)||(s=Gn(this,s,i)),!(i instanceof To)){if(an(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Kt(i))return this.addLabel(i,s);if(Dt(i))i=zt.delayedCall(0,i);else return this}return this!==i?ui(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-$n);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Kt(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(i.parent===this&&nl(this,i),i===this._recent&&(this._recent=this._last),Dr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(In.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Gn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=zt.delayedCall(0,s||Mo,o);return a.data="isPause",this._hasPause=1,ui(this,a,Gn(this,i))},t.removePause=function(i){var s=this._first;for(i=Gn(this,i);s;)s._start===i&&s.data==="isPause"&&rr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Yi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Kn(i),l=this._first,c=Ui(s),u;l;)l instanceof zt?bS(l._targets,a)&&(c?(!Yi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Gn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=zt.to(o,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||xt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Us(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,kn({startAt:{time:Gn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Zh(this,Gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Zh(this,Gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Dr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Dr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=$n,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Us(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Ad(Rt,Wa(i,Rt)),bd=In.frame),In.frame>=Yh){Yh+=Bn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&Bn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}(To);kn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var KS=function(e,t,n,i,s,o,a){var l=new bn(this._pt,e,t,0,1,Qd,null,s),c=0,u=0,f,h,d,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=yo(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),h=n.match(Gl)||[];f=Gl.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?gs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Gl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Md.test(i)||m)&&(l.e=0),this._pt=l,l},Qc=function(e,t,n,i,s,o,a,l,c,u){Dt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Dt(f)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Dt(f)?c?eM:jd:tu,g;if(Kt(i)&&(~i.indexOf("random(")&&(i=yo(i)),i.charAt(1)==="="&&(g=gs(h,i)+(rn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Mc)return!isNaN(h*i)&&i!==""?(g=new bn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?nM:Jd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&$c(t,i),KS.call(this,e,t,h,i,d,l||Bn.stringFilter,c))},ZS=function(e,t,n,i,s){if(Dt(e)&&(e=oo(e,s,t,n,i)),!_i(e)||e.style&&e.nodeType||an(e)||xd(e))return Kt(e)?oo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=oo(e[a],s,t,n,i);return o},$d=function(e,t,n,i,s,o){var a,l,c,u;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:ZS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Yi,Mc,eu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Wc,y=e.timeline,A=i.easeReverse||f,w,T,R,S,v,D,N,B,Y,$,G,W,k;if(y&&(!h||!s)&&(s="none"),e._ease=Lr(s,xo.ease),e._rEase=A&&(Lr(A)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(B=p[0]?Pr(p[0]).harness:0,W=B&&i[B.prop],w=Ga(i,Kc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ea:ES),_._lazy=0),o){if(rr(e._startAt=zt.set(p,kn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return On(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt||!a&&!d)&&e._startAt.revert(Ea),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),R=kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&En(l),immediateRender:a,stagger:0,parent:m},w),W&&(R[B.prop]=W),rr(e._startAt=zt.set(p,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt?e._startAt.revert(Ea):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&En(l)||l&&!g,T=0;T<p.length;T++){if(v=p[T],N=v._gsap||jc(p)[T]._gsap,e._ptLookup[T]=$={},mc[N.id]&&Qi.length&&Va(),G=M===p?T:M.indexOf(v),B&&(Y=new B).init(v,W||w,e,G,M)!==!1&&(e._pt=S=new bn(e._pt,v,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(re){$[re]=S}),Y.priority&&(D=1)),!B||W)for(R in w)Ln[R]&&(Y=$d(R,w,e,G,v,M))?Y.priority&&(D=1):$[R]=S=Qc.call(e,v,R,"get",w[R],G,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),x&&e._pt&&(Yi=e,Rt.killTweensOf(v,$,e.globalTime(t)),k=!e.parent,Yi=0),e._pt&&l&&(mc[N.id]=1)}D&&ep(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,h&&t<=0&&y.render($n,!0,!0)},jS=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mc=1,e.vars[t]="+=0",eu(e,a),Mc=0,l?So(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ut(n)+rn(f.e)),f.b&&(f.b=u.s+rn(f.b))},JS=function(e,t){var n=e[0]?Pr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ds({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},QS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(an(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},oo=function(e,t,n,i,s){return Dt(e)?e.call(t,n,i,s):Kt(e)&&~e.indexOf("random(")?yo(e):e},Kd=Zc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zd={};Tn(Kd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zd[r]=1});var zt=function(r){gd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ro(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Rt,M=(an(n)||xd(n)?Ui(n[0]):"length"in i)?[n]:Kn(n),x,y,A,w,T,R,S,v;if(a._targets=M.length?jc(M):So("GSAP target "+n+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||ca(c)||ca(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(x=a.timeline=new xn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),x.kill(),x.parent=x._dp=Ti(a),x._start=0,h||ca(c)||ca(u)){if(w=M.length,S=h&&Od(h),_i(h))for(T in h)~Kd.indexOf(T)&&(v||(v={}),v[T]=h[T]);for(y=0;y<w;y++)A=Ga(i,Zd),A.stagger=0,D&&(A.easeReverse=D),v&&Ds(A,v),R=M[y],A.duration=+oo(c,Ti(a),y,R,M),A.delay=(+oo(u,Ti(a),y,R,M)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(R,A,S?S(y,R,M):0),x._ease=rt.none;x.duration()?c=u=0:a.timeline=0}else if(g){ro(kn(x.vars.defaults,{ease:"none"})),x._ease=Lr(g.ease||i.ease||"none");var N=0,B,Y,$;if(an(g))g.forEach(function(G){return x.to(M,G,">")}),x.duration();else{A={};for(T in g)T==="ease"||T==="easeEach"||QS(T,g[T],A,g.easeEach);for(T in A)for(B=A[T].sort(function(G,W){return G.t-W.t}),N=0,y=0;y<B.length;y++)Y=B[y],$={ease:Y.e,duration:(Y.t-(y?B[y-1].t:0))/100*c},$[T]=Y.v,x.to(M,$,N),N+=$.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Wc&&(Yi=Ti(a),Rt.killTweensOf(M),Yi=0),ui(m,Ti(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ct(m._time)&&En(f)&&RS(Ti(a))&&m.data!=="nested")&&(a._tTime=-xt,a.render(Math.max(0,-u)||0)),p&&Ld(Ti(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-xt&&!u?l:i<xt?0:i,h,d,g,_,p,m,M,x;if(!c)DS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ct(f%_),f===l?(g=this._repeat,h=c):(p=Ct(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=Ls(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ct(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ud(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var A=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(On(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_c(this,i,s,o),On(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&_c(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(On(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Eo||In.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||eu(this,c),u=this._ease(c/this._dur),jS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(rl(this,0),this.parent||Pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Jt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Yi&&Yi.vars.overwrite!==!0)._first||js(this),this.parent&&o!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Kn(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&AS(a,l))return s==="all"&&(this._pt=0),js(this);for(f=this._op=this._op||[],s!=="all"&&(Kt(s)&&(_={},Tn(s,function(M){return _[M]=1}),s=_),s=JS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&nl(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&js(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return so(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return so(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(To);kn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new xn,t=vc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var tu=function(e,t,n){return e[t]=n},jd=function(e,t,n){return e[t](n)},eM=function(e,t,n,i){return e[t](i.fp,n)},tM=function(e,t,n){return e.setAttribute(t,n)},nu=function(e,t){return Dt(e[t])?jd:Xc(e[t])&&e.setAttribute?tM:tu},Jd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},iu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},rM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?nl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ep=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},bn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Jd,this.d=l||this,this.set=c||tu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sM,this.m=n,this.mt=s,this.tween=i},r}();Tn(Zc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Kc[r]=1});zn.TweenMax=zn.TweenLite=zt;zn.TimelineLite=zn.TimelineMax=xn;Rt=new xn({sortChildren:!1,defaults:xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=Xd;var Ur=[],ba={},oM=[],Jh=0,aM=0,$l=function(e){return(ba[e]||oM).map(function(t){return t()})},yc=function(){var e=Date.now(),t=[];e-Jh>2&&($l("matchMediaInit"),Ur.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=oi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),$l("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Jh=e,$l("matchMedia"))},tp=function(){function r(t,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=aM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Dt(n)&&(s=i,i=n,n=Dt);var o=this,a=function(){var c=At,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=xc(s)),At=o,f=i.apply(o,arguments),Dt(f)&&o._r.push(f),At=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Dt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ur.length;o--;)Ur[o].id===this.id&&Ur.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),lM=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){_i(n)||(n={matches:n});var o=new tp(0,s||this.scope),a=o.conditions={},l,c,u;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=oi.matchMedia(n[c]),l&&(Ur.indexOf(o)<0&&Ur.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yc):l.addEventListener("change",yc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Vd(i)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Kt(e)&&(e=Kn(e)[0]);var s=Pr(e||{}).get,o=n?Rd:Cd;return n==="native"&&(n=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,n,i)):function(a,l,c){return o((Ln[a]&&Ln[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Ln[t],a=Pr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;fs._pt=0,f.init(e,n?u+n:u,fs,0,[e]),f.render(1,f),fs._pt&&iu(1,fs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=An.to(e,kn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Lr(e.ease,xo.ease)),qh(xo,e||{})},config:function(e){return qh(Bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ln[a]&&!zn[a]&&So(t+" effect requires "+a+" plugin.")}),Wl[t]=function(a,l,c){return n(Kn(a),kn(l||{},s),c)},o&&(xn.prototype[t]=function(a,l,c){return this.add(Wl[t](a,_i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Lr(t)},parseEase:function(e,t){return arguments.length?Lr(e,t):rt},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new xn(e),i,s;for(n.smoothChildTiming=En(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=s;return ui(Rt,n,0),n},context:function(e,t){return e?new tp(e,t):At},matchMedia:function(e){return new lM(e)},matchMediaRefresh:function(){return Ur.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||yc()},addEventListener:function(e,t){var n=ba[e]||(ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ba[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:zS,wrapYoyo:kS,distribute:Od,random:Bd,snap:Fd,normalize:BS,getUnit:rn,clamp:IS,splitColor:Gd,toArray:Kn,selector:xc,mapRange:kd,pipe:OS,unitize:FS,interpolate:HS,shuffle:Nd},install:Ed,effects:Wl,ticker:In,updateRoot:xn.updateRoot,plugins:Ln,globalTimeline:Rt,core:{PropTween:bn,globals:Td,Tween:zt,Timeline:xn,Animation:To,getCache:Pr,_removeLinkedListItem:nl,reverting:function(){return Jt},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Wc=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xa[r]=zt[r]});In.add(xn.updateRoot);fs=Xa.to({},{duration:0});var cM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=cM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Kl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Kt(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}uM(a,s)}}}},An=Xa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Kl("roundProps",Sc),Kl("modifiers"),Kl("snap",Fd))||Xa;zt.version=xn.version=An.version="3.15.0";yd=1;Yc()&&Is();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qh,qi,vs,ru,Cr,ef,su,hM=function(){return typeof window<"u"},Ii={},Mr=180/Math.PI,xs=Math.PI/180,rs=Math.atan2,tf=1e8,ou=/([A-Z])/g,fM=/(left|right|width|margin|padding|x)/i,dM=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_M=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},np=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ip=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vM=function(e,t,n){return e.style[t]=n},xM=function(e,t,n){return e.style.setProperty(t,n)},SM=function(e,t,n){return e._gsap[t]=n},MM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yM=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},EM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Pt="transform",wn=Pt+"Origin",TM=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ii&&s){if(this.tfm=this.tfm||{},e!=="transform")e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=bi(i,a)}):this.tfm[e]=o.x?o[e]:bi(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return di.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},rp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ou,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=su(),(!s||!s.isStart)&&!n[Pt]&&(rp(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sp=function(e,t){var n={target:e,props:[],revert:bM,save:TM};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},op,Tc=function(e,t){var n=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return n&&n.style?n:qi.createElement(e)},Fn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ou,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ns(t)||t,1)||""},nf="O,Moz,ms,Ms,Webkit".split(","),Ns=function(e,t,n){var i=t||Cr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(nf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?nf[o]:"")+e},bc=function(){hM()&&window.document&&(Qh=window,qi=Qh.document,vs=qi.documentElement,Cr=Tc("div")||{style:{}},Tc("div"),Pt=Ns(Pt),wn=Pt+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",op=!!Ns("perspective"),su=An.core.reverting,ru=1)},rf=function(e){var t=e.ownerSVGElement,n=Tc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),vs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),vs.removeChild(n),s},sf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ap=function(e){var t,n;try{t=e.getBBox()}catch{t=rf(e),n=1}return t&&(t.width||t.height)||n||(t=rf(e)),t&&!t.width&&!t.x&&!t.y?{x:+sf(e,["x","cx","x1"])||0,y:+sf(e,["y","cy","y1"])||0,width:0,height:0}:t},lp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ap(e))},sr=function(e,t){if(t){var n=e.style,i;t in Ii&&t!==wn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ou,"-$1").toLowerCase())):n.removeAttribute(t)}},$i=function(e,t,n,i,s,o){var a=new bn(e._pt,t,n,0,1,o?ip:np);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},of={deg:1,rad:1,turn:1},wM={grid:1,flex:1},or=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Cr.style,l=fM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||of[i]||of[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&lp(e),(d||o==="%")&&(Ii[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Ut(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===qi||!_.appendChild)&&(_=qi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===In.time&&!p.uncache)return Ut(s/p.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,g=e[u],M?e.style[t]=M:sr(e,t)}else(d||o==="%")&&!wM[Fn(_,"display")]&&(a.position=Fn(e,"position")),_===e&&(a.position="static"),_.appendChild(Cr),g=Cr[u],_.removeChild(Cr),a.position="absolute";return l&&d&&(p=Pr(_),p.time=In.time,p.width=_[u]),Ut(h?g*s/f:g&&s?f/g*s:0)},bi=function(e,t,n,i){var s;return ru||bc(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ii[t]&&t!=="transform"?(s=wo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qa(Fn(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ya[t]&&Ya[t](e,t,n)||Fn(e,t)||wd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?or(e,t,s,n)+n:s},AM=function(e,t,n,i){if(!n||n==="none"){var s=Ns(t,e,1),o=s&&Fn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Fn(e,"borderTopColor"))}var a=new bn(this._pt,e.style,t,0,1,Qd),l=0,c=0,u,f,h,d,g,_,p,m,M,x,y,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Fn(e,t)||i,_?e.style[t]=_:sr(e,t)),u=[n,i],Xd(u),n=u[0],i=u[1],h=n.match(hs)||[],A=i.match(hs)||[],A.length){for(;f=hs.exec(i);)p=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=gs(d,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=hs.lastIndex-x.length,x||(x=x||Bn.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(d=or(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?ip:np;return Md.test(i)&&(a.e=0),this._pt=a,a},af={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=af[n]||n,t[1]=af[i]||i,t.join(" ")},RM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ii[a]&&(l=1,a=a==="transformOrigin"?wn:Pt),sr(n,a);l&&(sr(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",wo(n,1),o.uncache=1,rp(i)))}},Ya={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new bn(e._pt,t,n,0,0,RM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},bo=[1,0,0,1,0,0],cp={},up=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lf=function(e){var t=Fn(e,Pt);return up(t)?bo:t.substr(7).match(Sd).map(Ut)},au=function(e,t){var n=e._gsap||Pr(e),i=e.style,s=lf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bo:s):(s===bo&&!e.offsetParent&&e!==vs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,vs.appendChild(e)),s=lf(e),l?i.display=l:sr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):vs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wc=function(e,t,n,i,s,o){var a=e._gsap,l=s||au(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],x=t.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,T,R,S;n?l!==bo&&(T=d*p-g*_)&&(R=y*(p/T)+A*(-_/T)+(_*M-p*m)/T,S=y*(-g/T)+A*(d/T)-(d*M-g*m)/T,y=R,A=S):(w=ap(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=y-c,M=A-u,a.xOffset=f+(m*d+M*_)-m,a.yOffset=h+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&($i(o,a,"xOrigin",c,y),$i(o,a,"yOrigin",u,A),$i(o,a,"xOffset",f,a.xOffset),$i(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},wo=function(e,t){var n=e._gsap||new qd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fn(e,wn)||"0",u,f,h,d,g,_,p,m,M,x,y,A,w,T,R,S,v,D,N,B,Y,$,G,W,k,re,P,ue,Q,_e,H,Z;return u=f=h=_=p=m=M=x=y=0,d=g=1,n.svg=!!(e.getCTM&&lp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),T=au(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),wc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==bo&&(D=T[0],N=T[1],B=T[2],Y=T[3],u=$=T[4],f=G=T[5],T.length===6?(d=Math.sqrt(D*D+N*N),g=Math.sqrt(Y*Y+B*B),_=D||N?rs(N,D)*Mr:0,M=B||Y?rs(B,Y)*Mr+_:0,M&&(g*=Math.abs(Math.cos(M*xs))),n.svg&&(u-=A-(A*D+w*B),f-=w-(A*N+w*Y))):(Z=T[6],_e=T[7],P=T[8],ue=T[9],Q=T[10],H=T[11],u=T[12],f=T[13],h=T[14],R=rs(Z,Q),p=R*Mr,R&&(S=Math.cos(-R),v=Math.sin(-R),W=$*S+P*v,k=G*S+ue*v,re=Z*S+Q*v,P=$*-v+P*S,ue=G*-v+ue*S,Q=Z*-v+Q*S,H=_e*-v+H*S,$=W,G=k,Z=re),R=rs(-B,Q),m=R*Mr,R&&(S=Math.cos(-R),v=Math.sin(-R),W=D*S-P*v,k=N*S-ue*v,re=B*S-Q*v,H=Y*v+H*S,D=W,N=k,B=re),R=rs(N,D),_=R*Mr,R&&(S=Math.cos(R),v=Math.sin(R),W=D*S+N*v,k=$*S+G*v,N=N*S-D*v,G=G*S-$*v,D=W,$=k),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Ut(Math.sqrt(D*D+N*N+B*B)),g=Ut(Math.sqrt(G*G+Z*Z)),R=rs($,G),M=Math.abs(R)>2e-4?R*Mr:0,y=H?1/(H<0?-H:H):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!up(Fn(e,Pt)),W&&e.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ut(d),n.scaleY=Ut(g),n.rotation=Ut(_)+a,n.rotationX=Ut(p)+a,n.rotationY=Ut(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=qa(c)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?DM:op?hp:PM,n.uncache=0,n},qa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zl=function(e,t,n){var i=rn(t);return Ut(parseFloat(t)+parseFloat(or(e,"x",n+"px",i)))+i},PM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hp(e,t)},gr="0deg",qs="0px",vr=") ",hp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,y="",A=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==gr||u!==gr)){var w=parseFloat(u)*xs,T=Math.sin(w),R=Math.cos(w),S;w=parseFloat(f)*xs,S=Math.cos(w),o=Zl(M,o,T*S*-x),a=Zl(M,a,-Math.sin(w)*-x),l=Zl(M,l,R*S*-x+x)}p!==qs&&(y+="perspective("+p+vr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(A||o!==qs||a!==qs||l!==qs)&&(y+=l!==qs||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vr),c!==gr&&(y+="rotate("+c+vr),u!==gr&&(y+="rotateY("+u+vr),f!==gr&&(y+="rotateX("+f+vr),(h!==gr||d!==gr)&&(y+="skew("+h+", "+d+vr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+vr),M.style[Pt]=y||"translate(0, 0)"},DM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),A,w,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xs,c*=xs,A=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=xs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Ut(A),w=Ut(w),T=Ut(T),R=Ut(R)):(A=f,R=h,w=T=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=or(d,"x",o,"px"),y=or(d,"y",a,"px")),(g||_||p||m)&&(x=Ut(x+g-(g*A+_*T)+p),y=Ut(y+_-(g*w+_*R)+m)),(i||s)&&(S=d.getBBox(),x=Ut(x+i/100*S.width),y=Ut(y+s/100*S.height)),S="matrix("+A+","+w+","+T+","+R+","+x+","+y+")",d.setAttribute("transform",S),M&&(d.style[Pt]=S)},LM=function(e,t,n,i,s){var o=360,a=Kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Mr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*tf)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*tf)%o-~~(c/o)*o)),e._pt=h=new bn(e._pt,t,n,i,c,pM),h.e=u,h.u="deg",e._props.push(n),h},cf=function(e,t){for(var n in t)e[n]=t[n];return e},UM=function(e,t,n){var i=cf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=wo(n,1),sr(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],o[Pt]=t,a=wo(n,1),o[Pt]=c);for(l in Ii)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=rn(c),g=rn(u),f=d!==g?or(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new bn(e._pt,a,l,f,h-f,Ec),e._pt.u=g||0,e._props.push(l));cf(a,i)};Tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ya[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return bi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var fp={name:"css",register:bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,M,x,y,A,w,T,R,S;ru||bc(),this.styles=this.styles||sp(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ln[_]&&$d(_,t,n,i,e,s)))){if(d=typeof u,g=Ya[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=yo(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",er.lastIndex=0,er.test(c)||(p=rn(c),m=rn(u),m?p!==m&&(c=or(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Kt(c)&&~c.indexOf("random(")&&(c=yo(c)),rn(c+"")||c==="auto"||(c+=Bn.units[_]||rn(bi(e,_))||""),(c+"").charAt(1)==="="&&(c=bi(e,_))):c=bi(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in di&&(_==="autoAlpha"&&(h===1&&bi(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),$i(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ii,x){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Fn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Fn(e,"perspective"),v?e.style.perspective=v:sr(e,"perspective")}f=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||wo(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new bn(this._pt,a,Pt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new bn(this._pt,A,"scaleY",A.scaleY,(M?gs(A.scaleY,M+f):f)-A.scaleY||0,Ec),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(wn,0,a[wn]),u=CM(u),A.svg?wc(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&$i(this,A,"zOrigin",A.zOrigin,m),$i(this,a,_,qa(c),qa(u)));continue}else if(_==="svgOrigin"){wc(e,u,1,w,0,this);continue}else if(_ in cp){LM(this,A,_,h,M?gs(h,M+u):u);continue}else if(_==="smoothOrigin"){$i(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){UM(this,u,e);continue}}else _ in a||(_=Ns(_)||_);if(x||(f||f===0)&&(h||h===0)&&!dM.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=rn(u)||(_ in Bn.units?Bn.units[_]:p),p!==m&&(h=or(e,_,c,m)),this._pt=new bn(this._pt,x?A:a,_,h,(M?gs(h,M+f):f)-h,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?gM:Ec),this._pt.u=m||0,x&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=_M):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=mM);else if(_ in a)AM.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){$c(_,u);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}T&&ep(this)},render:function(e,t){if(t.tween._time||!su())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:bi,aliases:di,getSetter:function(e,t,n){var i=di[t];return i&&i.indexOf(",")<0&&(t=i),t in Ii&&t!==wn&&(e._gsap.x||bi(e,"x"))?n&&ef===n?t==="scale"?MM:SM:(ef=n||{})&&(t==="scale"?yM:EM):e.style&&!Xc(e.style[t])?vM:~t.indexOf("-")?xM:nu(e,t)},core:{_removeProperty:sr,_getMatrix:au}};An.utils.checkPrefix=Ns;An.core.getStyleSaver=sp;(function(r,e,t,n){var i=Tn(r+","+e+","+t,function(s){Ii[s]=1});Tn(e,function(s){Bn.units[s]="deg",cp[s]=1}),di[i[13]]=r+","+e,Tn(n,function(s){var o=s.split(":");di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Bn.units[r]="px"});An.registerPlugin(fp);var Bt=An.registerPlugin(fp)||An;Bt.core.Tween;function IM(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function NM(r,e,t){return e&&IM(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jt,wa,Nn,Ki,Zi,Ss,dp,yr,Ms,pp,Ri,ti,mp,_p=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},gp=1,ds=[],nt=[],mi=[],ao=Date.now,Ac=function(e,t){return t},OM=function(){var e=Ms.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,mi),nt=n,mi=i,Ac=function(o,a){return t[o](a)}},tr=function(e,t){return~mi.indexOf(e)&&mi[mi.indexOf(e)+1][t]},lo=function(e){return!!~pp.indexOf(e)},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ua="scrollLeft",ha="scrollTop",Cc=function(){return Ri&&Ri.isPressed||nt.cache++},$a=function(e,t){var n=function i(s){if(s||s===0){gp&&(Nn.history.scrollRestoration="manual");var o=Ri&&Ri.isPressed;s=i.v=Math.round(s)||(Ri&&Ri.iOS?1:0),e(s),i.cacheID=nt.cache,o&&Ac("ss",s)}else(t||nt.cache!==i.cacheID||Ac("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:ua,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$a(function(r){return arguments.length?Nn.scrollTo(r,Vt.sc()):Nn.pageXOffset||Ki[ua]||Zi[ua]||Ss[ua]||0})},Vt={s:ha,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:$a(function(r){return arguments.length?Nn.scrollTo(pn.sc(),r):Nn.pageYOffset||Ki[ha]||Zi[ha]||Ss[ha]||0})},gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},FM=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ar=function(e,t){var n=t.s,i=t.sc;lo(e)&&(e=Ki.scrollingElement||Zi);var s=nt.indexOf(e),o=i===Vt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||cn(e,"scroll",Cc);var a=nt[s+o],l=a||(nt[s+o]=$a(tr(e,n),!0)||(lo(e)?i:$a(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Rc=function(e,t,n){var i=e,s=e,o=ao(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=ao();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,p=s,m=ao();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},$s=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},uf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},vp=function(){Ms=jt.core.globals().ScrollTrigger,Ms&&Ms.core&&OM()},xp=function(e){return jt=e||_p(),!wa&&jt&&typeof document<"u"&&document.body&&(Nn=window,Ki=document,Zi=Ki.documentElement,Ss=Ki.body,pp=[Nn,Ki,Zi,Ss],jt.utils.clamp,mp=jt.core.context||function(){},yr="onpointerenter"in Ss?"pointer":"mouse",dp=It.isTouch=Nn.matchMedia&&Nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=It.eventTypes=("ontouchstart"in Zi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gp=0},500),wa=1),Ms||vp(),wa};pn.op=Vt;nt.cache=0;var It=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){wa||xp(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Ms||vp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,y=n.onRelease,A=n.onRight,w=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,v=n.onChangeY,D=n.onChange,N=n.onToggleX,B=n.onToggleY,Y=n.onHover,$=n.onHoverEnd,G=n.onMove,W=n.ignoreCheck,k=n.isNormalizer,re=n.onGestureStart,P=n.onGestureEnd,ue=n.onWheel,Q=n.onEnable,_e=n.onDisable,H=n.onClick,Z=n.scrollSpeed,ce=n.capture,le=n.allowClicks,Ne=n.lockAxis,Le=n.onLockAxis;this.target=a=gn(a)||Zi,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Z=Z||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Nn.getComputedStyle(Ss).lineHeight)||22);var Xe,L,Be,ve,We,ye,He,F=this,Ie=0,lt=0,C=n.passive||!u&&n.passive!==!1,E=ar(a,pn),q=ar(a,Vt),ee=E(),ne=q(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ti[0]==="pointerdown",we=lo(a),se=a.ownerDocument||Ki,fe=[0,0,0],Fe=[0,0,0],oe=0,Te=function(){return oe=ao()},Re=function(Ae,Qe){return(F.event=Ae)&&d&&FM(Ae.target,d)||Qe&&J&&Ae.pointerType!=="touch"||W&&W(Ae,Qe)},ze=function(){F._vx.reset(),F._vy.reset(),L.pause(),f&&f(F)},de=function(){var Ae=F.deltaX=uf(fe),Qe=F.deltaY=uf(Fe),pe=Math.abs(Ae)>=i,Ge=Math.abs(Qe)>=i;D&&(pe||Ge)&&D(F,Ae,Qe,fe,Fe),pe&&(A&&F.deltaX>0&&A(F),w&&F.deltaX<0&&w(F),S&&S(F),N&&F.deltaX<0!=Ie<0&&N(F),Ie=F.deltaX,fe[0]=fe[1]=fe[2]=0),Ge&&(R&&F.deltaY>0&&R(F),T&&F.deltaY<0&&T(F),v&&v(F),B&&F.deltaY<0!=lt<0&&B(F),lt=F.deltaY,Fe[0]=Fe[1]=Fe[2]=0),(ve||Be)&&(G&&G(F),Be&&(p&&Be===1&&p(F),M&&M(F),Be=0),ve=!1),ye&&!(ye=!1)&&Le&&Le(F),We&&(ue(F),We=!1),Xe=0},Ve=function(Ae,Qe,pe){fe[pe]+=Ae,Fe[pe]+=Qe,F._vx.update(Ae),F._vy.update(Qe),c?Xe||(Xe=requestAnimationFrame(de)):de()},Ye=function(Ae,Qe){Ne&&!He&&(F.axis=He=Math.abs(Ae)>Math.abs(Qe)?"x":"y",ye=!0),He!=="y"&&(fe[2]+=Ae,F._vx.update(Ae,!0)),He!=="x"&&(Fe[2]+=Qe,F._vy.update(Qe,!0)),c?Xe||(Xe=requestAnimationFrame(de)):de()},ct=function(Ae){if(!Re(Ae,1)){Ae=$s(Ae,u);var Qe=Ae.clientX,pe=Ae.clientY,Ge=Qe-F.x,Ue=pe-F.y,ke=F.isDragging;F.x=Qe,F.y=pe,(ke||(Ge||Ue)&&(Math.abs(F.startX-Qe)>=s||Math.abs(F.startY-pe)>=s))&&(Be||(Be=ke?2:1),ke||(F.isDragging=!0),Ye(Ge,Ue))}},U=F.onPress=function(Oe){Re(Oe,1)||Oe&&Oe.button||(F.axis=He=null,L.pause(),F.isPressed=!0,Oe=$s(Oe),Ie=lt=0,F.startX=F.x=Oe.clientX,F.startY=F.y=Oe.clientY,F._vx.reset(),F._vy.reset(),cn(k?a:se,ti[1],ct,C,!0),F.deltaX=F.deltaY=0,x&&x(F))},te=F.onRelease=function(Oe){if(!Re(Oe,1)){ln(k?a:se,ti[1],ct,!0);var Ae=!isNaN(F.y-F.startY),Qe=F.isDragging,pe=Qe&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ge=$s(Oe);!pe&&Ae&&(F._vx.reset(),F._vy.reset(),u&&le&&jt.delayedCall(.08,function(){if(ao()-oe>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(se.createEvent){var Ue=se.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Nn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Ue)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&Qe&&!k&&L.restart(!0),Be&&de(),m&&Qe&&m(F),y&&y(F,pe)}},K=function(Ae){return Ae.touches&&Ae.touches.length>1&&(F.isGesturing=!0)&&re(Ae,F.isDragging)},j=function(){return(F.isGesturing=!1)||P(F)},ae=function(Ae){if(!Re(Ae)){var Qe=E(),pe=q();Ve((Qe-ee)*Z,(pe-ne)*Z,1),ee=Qe,ne=pe,f&&L.restart(!0)}},Pe=function(Ae){if(!Re(Ae)){Ae=$s(Ae,u),ue&&(We=!0);var Qe=(Ae.deltaMode===1?l:Ae.deltaMode===2?Nn.innerHeight:1)*g;Ve(Ae.deltaX*Qe,Ae.deltaY*Qe,0),f&&!k&&L.restart(!0)}},Je=function(Ae){if(!Re(Ae)){var Qe=Ae.clientX,pe=Ae.clientY,Ge=Qe-F.x,Ue=pe-F.y;F.x=Qe,F.y=pe,ve=!0,f&&L.restart(!0),(Ge||Ue)&&Ye(Ge,Ue)}},pt=function(Ae){F.event=Ae,Y(F)},mt=function(Ae){F.event=Ae,$(F)},st=function(Ae){return Re(Ae)||$s(Ae,u)&&H(F)};L=F._dc=jt.delayedCall(h||.25,ze).pause(),F.deltaX=F.deltaY=0,F._vx=Rc(0,50,!0),F._vy=Rc(0,50,!0),F.scrollX=E,F.scrollY=q,F.isDragging=F.isGesturing=F.isPressed=!1,mp(this),F.enable=function(Oe){return F.isEnabled||(cn(we?se:a,"scroll",Cc),o.indexOf("scroll")>=0&&cn(we?se:a,"scroll",ae,C,ce),o.indexOf("wheel")>=0&&cn(a,"wheel",Pe,C,ce),(o.indexOf("touch")>=0&&dp||o.indexOf("pointer")>=0)&&(cn(a,ti[0],U,C,ce),cn(se,ti[2],te),cn(se,ti[3],te),le&&cn(a,"click",Te,!0,!0),H&&cn(a,"click",st),re&&cn(se,"gesturestart",K),P&&cn(se,"gestureend",j),Y&&cn(a,yr+"enter",pt),$&&cn(a,yr+"leave",mt),G&&cn(a,yr+"move",Je)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=ve=Be=!1,F._vx.reset(),F._vy.reset(),ee=E(),ne=q(),Oe&&Oe.type&&U(Oe),Q&&Q(F)),F},F.disable=function(){F.isEnabled&&(ds.filter(function(Oe){return Oe!==F&&lo(Oe.target)}).length||ln(we?se:a,"scroll",Cc),F.isPressed&&(F._vx.reset(),F._vy.reset(),ln(k?a:se,ti[1],ct,!0)),ln(we?se:a,"scroll",ae,ce),ln(a,"wheel",Pe,ce),ln(a,ti[0],U,ce),ln(se,ti[2],te),ln(se,ti[3],te),ln(a,"click",Te,!0),ln(a,"click",st),ln(se,"gesturestart",K),ln(se,"gestureend",j),ln(a,yr+"enter",pt),ln(a,yr+"leave",mt),ln(a,yr+"move",Je),F.isEnabled=F.isPressed=F.isDragging=!1,_e&&_e(F))},F.kill=F.revert=function(){F.disable();var Oe=ds.indexOf(F);Oe>=0&&ds.splice(Oe,1),Ri===F&&(Ri=0)},ds.push(F),k&&lo(a)&&(Ri=F),F.enable(_)},NM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();It.version="3.15.0";It.create=function(r){return new It(r)};It.register=xp;It.getAll=function(){return ds.slice()};It.getById=function(r){return ds.filter(function(e){return e.vars.id===r})[0]};_p()&&jt.registerPlugin(It);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,ls,tt,dt,Un,ut,lu,Ka,Ao,co,Qs,fa,tn,sl,Pc,fn,hf,ff,cs,Sp,jl,Mp,hn,Dc,yp,Ep,Gi,Lc,cu,ys,uu,uo,Uc,Jl,da=1,nn=Date.now,Ql=nn(),Zn=0,eo=0,df=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},pf=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},BM=function r(){return eo&&requestAnimationFrame(r)},mf=function(){return sl=1},_f=function(){return sl=0},ai=function(e){return e},to=function(e){return Math.round(e*1e5)/1e5||0},Tp=function(){return typeof window<"u"},bp=function(){return Se||Tp()&&(Se=window.gsap)&&Se.registerPlugin&&Se},Fr=function(e){return!!~lu.indexOf(e)},wp=function(e){return(e==="Height"?uu:tt["inner"+e])||Un["client"+e]||ut["client"+e]},Ap=function(e){return tr(e,"getBoundingClientRect")||(Fr(e)?function(){return Da.width=tt.innerWidth,Da.height=uu,Da}:function(){return Ai(e)})},zM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=tr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?wp(s):e["client"+s])||0}},kM=function(e,t){return!t||~mi.indexOf(e)?Ap(e):function(){return Da}},pi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=tr(e,n))?o()-Ap(e)()[s]:Fr(e)?(Un[n]||ut[n])-wp(i):e[n]-e["offset"+i])},pa=function(e,t){for(var n=0;n<cs.length;n+=3)(!t||~t.indexOf(cs[n+1]))&&e(cs[n],cs[n+1],cs[n+2])},Dn=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},no=function(e){return typeof e=="number"},Er=function(e){return typeof e=="object"},Ks=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ss=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},os=Math.abs,Cp="left",Rp="top",hu="right",fu="bottom",Ir="width",Nr="height",ho="Right",fo="Left",po="Top",mo="Bottom",Ft="padding",Xn="margin",Os="Width",du="Height",Ht="px",Yn=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},HM=function(e){var t=Yn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ai=function(e,t){var n=t&&Yn(e)[Pc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Za=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Pp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},VM=function(e){return function(t){return Se.utils.snap(Pp(e),t)}},pu=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},GM=function(e){return function(t,n){return pu(Pp(e))(t,n.direction)}},ma=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$t=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_a=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},vf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ga={toggleActions:"play",anticipatePin:0},ja={top:0,left:0,center:.5,bottom:1,right:1},Aa=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ja?ja[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},va=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=dt.createElement("div"),_=Fr(n)||tr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?ut:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,x=M?c:u,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Vt?hu:fu)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ca(g,0,i,M),g},Ca=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Os]=1,s["border"+a+Os]=0,s[n.p]=t+"px",Se.set(e,s)},et=[],Ic={},Co,xf=function(){return nn()-Zn>34&&(Co||(Co=requestAnimationFrame(Di)))},as=function(){(!hn||!hn.isPressed||hn.startX>ut.clientWidth)&&(nt.cache++,hn?Co||(Co=requestAnimationFrame(Di)):Di(),Zn||zr("scrollStart"),Zn=nn())},ec=function(){Ep=tt.innerWidth,yp=tt.innerHeight},io=function(e){nt.cache++,(e===!0||!tn&&!Mp&&!dt.fullscreenElement&&!dt.webkitFullscreenElement&&(!Dc||Ep!==tt.innerWidth||Math.abs(tt.innerHeight-yp)>tt.innerHeight*.25))&&Ka.restart(!0)},Br={},WM=[],Dp=function r(){return qt(qe,"scrollEnd",r)||Rr(!0)},zr=function(e){return Br[e]&&Br[e].map(function(t){return t()})||WM},Pn=[],Lp=function(e){for(var t=0;t<Pn.length;t+=5)(!e||Pn[t+4]&&Pn[t+4].query===e)&&(Pn[t].style.cssText=Pn[t+1],Pn[t].getBBox&&Pn[t].setAttribute("transform",Pn[t+2]||""),Pn[t+3].uncache=1)},Up=function(){return nt.forEach(function(e){return sn(e)&&++e.cacheID&&(e.rec=e())})},mu=function(e,t){var n;for(fn=0;fn<et.length;fn++)n=et[fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));uo=!0,t&&Lp(t),t||zr("revert")},Ip=function(e,t){nt.cache++,(t||!dn)&&nt.forEach(function(n){return sn(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(tt.history.scrollRestoration=cu=e)},dn,Or=0,Sf,XM=function(){if(Sf!==Or){var e=Sf=Or;requestAnimationFrame(function(){return e===Or&&Rr(!0)})}},Np=function(){ut.appendChild(ys),uu=!hn&&ys.offsetHeight||tt.innerHeight,ut.removeChild(ys)},Mf=function(e){return Ao(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Rr=function(e,t){if(Un=dt.documentElement,ut=dt.body,lu=[tt,dt,Un,ut],Zn&&!e&&!uo){$t(qe,"scrollEnd",Dp);return}Np(),dn=qe.isRefreshing=!0,uo||Up();var n=zr("refreshInit");Sp&&qe.sort(),t||mu(),nt.forEach(function(i){sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),uo=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Uc=1,Mf(!0),et.forEach(function(i){var s=pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Mf(!1),Uc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ip(cu,1),Ka.pause(),Or++,dn=2,Di(2),et.forEach(function(i){return sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),dn=qe.isRefreshing=!1,zr("refresh")},Nc=0,Ra=1,_o,Di=function(e){if(e===2||!dn&&!uo){qe.isUpdating=!0,_o&&_o.update(0);var t=et.length,n=nn(),i=n-Ql>=50,s=t&&et[0].scroll();if(Ra=Nc>s?-1:1,dn||(Nc=s),i&&(Zn&&!sl&&n-Zn>200&&(Zn=0,zr("scrollEnd")),Qs=Ql,Ql=n),Ra<0){for(fn=t;fn-- >0;)et[fn]&&et[fn].update(0,i);Ra=1}else for(fn=0;fn<t;fn++)et[fn]&&et[fn].update(0,i);qe.isUpdating=!1}Co=0},Oc=[Cp,Rp,fu,hu,Xn+mo,Xn+ho,Xn+po,Xn+fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pa=Oc.concat([Ir,Nr,"boxSizing","max"+Os,"max"+du,"position",Xn,Ft,Ft+po,Ft+ho,Ft+mo,Ft+fo]),YM=function(e,t,n){Es(n);var i=e._gsap;if(i.spacerIsNative)Es(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Oc.length,o=t.style,a=e.style,l;s--;)l=Oc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[fu]=a[hu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ir]=Za(e,pn)+Ht,o[Nr]=Za(e,Vt)+Ht,o[Ft]=a[Xn]=a[Rp]=a[Cp]="0",Es(i),a[Ir]=a["max"+Os]=n[Ir],a[Nr]=a["max"+du]=n[Nr],a[Ft]=n[Ft],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qM=/([A-Z])/g,Es=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(qM,"-$1").toLowerCase())}},xa=function(e){for(var t=Pa.length,n=e.style,i=[],s=0;s<t;s++)i.push(Pa[s],n[Pa[s]]);return i.t=e,i},$M=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Da={left:0,top:0},yf=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){sn(e)&&(e=e(l)),Dn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Aa("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),no(e))d&&(e=Se.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Ca(a,n,i,!0);else{sn(t)&&(t=t(l));var x=(e||"0").split(" "),y,A,w,T;M=gn(t,l)||ut,y=Ai(M)||{},(!y||!y.left&&!y.top)&&Yn(M).display==="none"&&(T=M.style.display,M.style.display="block",y=Ai(M),T?M.style.display=T:M.style.removeProperty("display")),A=Aa(x[0],y[i.d]),w=Aa(x[1]||"0",n),e=y[i.p]-c[i.p]-u+A+s-w,a&&Ca(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,S=o._isStart;p="scroll"+i.d2,Ca(o,R,i,S&&R>20||!S&&(f?Math.max(ut[p],Un[p]):o.parentNode[p])<=R+1),f&&(c=Ai(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ht))}return d&&M&&(p=Ai(M),d.seek(h),m=Ai(M),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},KM=/(webkit|moz|length|cssText|inset)/i,Ef=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ut){e._stOrig=s.cssText,a=Yn(e);for(o in a)!+o&&!KM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},Op=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Sa=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Tf=function(e,t){var n=ar(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=Op(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Di()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Se.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$t(e,"wheel",n.wheelHandler),qe.isTouch&&$t(e,"touchmove",n.wheelHandler),s},qe=function(){function r(t,n){ls||r.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eo){this.update=this.refresh=this.kill=ai;return}n=gf(Dn(n)||no(n)||n.nodeType?{trigger:n}:n,ga);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,y=s.snap,A=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Vt,D=!f&&f!==0,N=gn(n.scroller||tt),B=Se.core.getCache(N),Y=Fr(N),$=("pinType"in n?n.pinType:tr(N,"pinType")||Y&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=D&&n.toggleActions.split(" "),k="markers"in n?n.markers:ga.markers,re=Y?0:parseFloat(Yn(N)["border"+v.p2+Os])||0,P=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Q=zM(N,Y,v),_e=kM(N,Y),H=0,Z=0,ce=0,le=ar(N,v),Ne,Le,Xe,L,Be,ve,We,ye,He,F,Ie,lt,C,E,q,ee,ne,J,we,se,fe,Fe,oe,Te,Re,ze,de,Ve,Ye,ct,U,te,K,j,ae,Pe,Je,pt,mt;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=N,P.scroll=T?T.time.bind(T):le,L=le(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Sp=1,n.refreshPriority===-9999&&(_o=P)),B.tweenScroll=B.tweenScroll||{top:Tf(N,Vt),left:Tf(N,pn)},P.tweenTo=Ne=B.tweenScroll[v.p],P.scrubDuration=function(pe){K=no(pe)&&pe,K?te?te.duration(pe):te=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(P)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),ct=0,l||(l=i.vars.id)),y&&((!Er(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ut.style&&Se.set(Y?[ut,Un]:N,{scrollBehavior:"auto"}),nt.forEach(function(pe){return sn(pe)&&pe.target===(Y?dt.scrollingElement||Un:N)&&(pe.smooth=!1)}),Xe=sn(y.snapTo)?y.snapTo:y.snapTo==="labels"?VM(i):y.snapTo==="labelsDirectional"?GM(i):y.directional!==!1?function(pe,Ge){return pu(y.snapTo)(pe,nn()-Z<500?0:Ge.direction)}:Se.utils.snap(y.snapTo),j=y.duration||{min:.1,max:2},j=Er(j)?co(j.min,j.max):co(j,j),ae=Se.delayedCall(y.delay||K/2||.1,function(){var pe=le(),Ge=nn()-Z<500,Ue=Ne.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!Ue&&!sl&&H!==pe){var ke=(pe-ve)/E,Lt=i&&!D?i.totalProgress():ke,Ke=Ge?0:(Lt-U)/(nn()-Qs)*1e3||0,Et=Se.utils.clamp(-ke,1-ke,os(Ke/2)*Ke/.185),kt=ke+(y.inertia===!1?0:Et),Tt,St,ft=y,b=ft.onStart,I=ft.onInterrupt,z=ft.onComplete;if(Tt=Xe(kt,P),no(Tt)||(Tt=kt),St=Math.max(0,Math.round(ve+Tt*E)),pe<=We&&pe>=ve&&St!==pe){if(Ue&&!Ue._initted&&Ue.data<=os(St-pe))return;y.inertia===!1&&(Et=Tt-ke),Ne(St,{duration:j(os(Math.max(os(kt-Lt),os(Tt-Lt))*.185/Ke/.05||0)),ease:y.ease||"power3",data:os(St-pe),onInterrupt:function(){return ae.restart(!0)&&I&&ss(P,I)},onComplete:function(){P.update(),H=le(),i&&!D&&(te?te.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),ct=U=i&&!D?i.totalProgress():P.progress,M&&M(P),z&&ss(P,z)}},pe,Et*E,St-pe-Et*E),b&&ss(P,b,Ne.tween)}}else P.isActive&&H!==pe&&ae.restart(!0)}).pause()),l&&(Ic[l]=P),h=P.trigger=gn(h||d!==!0&&d),mt=h&&h._gsap&&h._gsap.stRevert,mt&&(mt=mt(P)),d=d===!0?h:gn(d),Dn(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Xn||(g=!g&&d.parentNode&&d.parentNode.style&&Yn(d.parentNode).display==="flex"?!1:Ft),P.pin=d,Le=Se.core.getCache(d),Le.spacer?q=Le.pinState:(w&&(w=gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Le.spacerIsNative=!!w,w&&(Le.spacerState=xa(w))),Le.spacer=J=w||dt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Le.pinState=q=xa(d)),n.force3D!==!1&&Se.set(d,{force3D:!0}),P.spacer=J=Le.spacer,Ye=Yn(d),Te=Ye[g+v.os2],se=Se.getProperty(d),fe=Se.quickSetter(d,v.a,Ht),tc(d,J,Ye),ne=xa(d)),k){lt=Er(k)?gf(k,vf):vf,F=va("scroller-start",l,N,v,lt,0),Ie=va("scroller-end",l,N,v,lt,0,F),we=F["offset"+v.op.d2];var st=gn(tr(N,"content")||N);ye=this.markerStart=va("start",l,st,v,lt,we,0,T),He=this.markerEnd=va("end",l,st,v,lt,we,0,T),T&&(pt=Se.quickSetter([ye,He],v.a,Ht)),!$&&!(mi.length&&tr(N,"fixedMarkers")===!0)&&(HM(Y?ut:N),Se.set([F,Ie],{force3D:!0}),ze=Se.quickSetter(F,v.a,Ht),Ve=Se.quickSetter(Ie,v.a,Ht))}if(T){var Oe=T.vars.onUpdate,Ae=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),Oe&&Oe.apply(T,Ae||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(pe,Ge){if(!Ge)return P.kill(!0);var Ue=pe!==!1||!P.enabled,ke=tn;Ue!==P.isReverted&&(Ue&&(Pe=Math.max(le(),P.scroll.rec||0),ce=P.progress,Je=i&&i.progress()),ye&&[ye,He,F,Ie].forEach(function(Lt){return Lt.style.display=Ue?"none":"block"}),Ue&&(tn=P,P.update(Ue)),d&&(!A||!P.isActive)&&(Ue?YM(d,J,q):tc(d,J,Yn(d),Re)),Ue||P.update(Ue),tn=ke,P.isReverted=Ue)},P.refresh=function(pe,Ge,Ue,ke){if(!((tn||!P.enabled)&&!Ge)){if(d&&pe&&Zn){$t(r,"scrollEnd",Dp);return}!dn&&ue&&ue(P),tn=P,Ne.tween&&!Ue&&(Ne.tween.kill(),Ne.tween=0),te&&te.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(wt){return wt.vars.immediateRender&&wt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Lt=Q(),Ke=_e(),Et=T?T.duration():pi(N,v),kt=E<=.01||!E,Tt=0,St=ke||0,ft=Er(Ue)?Ue.end:n.end,b=n.endTrigger||h,I=Er(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),z=P.pinnedContainer=n.pinnedContainer&&gn(n.pinnedContainer,P),V=h&&Math.max(0,et.indexOf(P))||0,O=V,ie,he,ge,Ee,Me,xe,be,ot,yt,_t,bt,it,Ce;for(k&&Er(Ue)&&(it=Se.getProperty(F,v.p),Ce=Se.getProperty(Ie,v.p));O-- >0;)xe=et[O],xe.end||xe.refresh(0,1)||(tn=P),be=xe.pin,be&&(be===h||be===d||be===z)&&!xe.isReverted&&(_t||(_t=[]),_t.unshift(xe),xe.revert(!0,!0)),xe!==et[O]&&(V--,O--);for(sn(I)&&(I=I(P)),I=df(I,"start",P),ve=yf(I,h,Lt,v,le(),ye,F,P,Ke,re,$,Et,T,P._startClamp&&"_startClamp")||(d?-.001:0),sn(ft)&&(ft=ft(P)),Dn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Dn(I)?I.split(" ")[0]:"")+ft:(Tt=Aa(ft.substr(2),Lt),ft=Dn(I)?I:(T?Se.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,ve):ve)+Tt,b=h)),ft=df(ft,"end",P),We=Math.max(ve,yf(ft||(b?"100% 0":Et),b,Lt,v,le()+Tt,He,Ie,P,Ke,re,$,Et,T,P._endClamp&&"_endClamp"))||-.001,Tt=0,O=V;O--;)xe=et[O]||{},be=xe.pin,be&&xe.start-xe._pinPush<=ve&&!T&&xe.end>0&&(ie=xe.end-(P._startClamp?Math.max(0,xe.start):xe.start),(be===h&&xe.start-xe._pinPush<ve||be===z)&&isNaN(I)&&(Tt+=ie*(1-xe.progress)),be===d&&(St+=ie));if(ve+=Tt,We+=Tt,P._startClamp&&(P._startClamp+=Tt),P._endClamp&&!dn&&(P._endClamp=We||-.001,We=Math.min(We,pi(N,v))),E=We-ve||(ve-=.01)&&.001,kt&&(ce=Se.utils.clamp(0,1,Se.utils.normalize(ve,We,Pe))),P._pinPush=St,ye&&Tt&&(ie={},ie[v.a]="+="+Tt,z&&(ie[v.p]="-="+le()),Se.set([ye,He],ie)),d&&!(Uc&&P.end>=pi(N,v)))ie=Yn(d),Ee=v===Vt,ge=le(),Fe=parseFloat(se(v.a))+St,!Et&&We>1&&(bt=(Y?dt.scrollingElement||Un:N).style,bt={style:bt,value:bt["overflow"+v.a.toUpperCase()]},Y&&Yn(ut)["overflow"+v.a.toUpperCase()]!=="scroll"&&(bt.style["overflow"+v.a.toUpperCase()]="scroll")),tc(d,J,ie),ne=xa(d),he=Ai(d,!0),ot=$&&ar(N,Ee?pn:Vt)(),g?(Re=[g+v.os2,E+St+Ht],Re.t=J,O=g===Ft?Za(d,v)+E+St:0,O&&(Re.push(v.d,O+Ht),J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+Ht)),Es(Re),z&&et.forEach(function(wt){wt.pin===z&&wt.vars.pinSpacing!==!1&&(wt._subPinOffset=!0)}),$&&le(Pe)):(O=Za(d,v),O&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+Ht)),$&&(Me={top:he.top+(Ee?ge-ve:ot)+Ht,left:he.left+(Ee?ot:ge-ve)+Ht,boxSizing:"border-box",position:"fixed"},Me[Ir]=Me["max"+Os]=Math.ceil(he.width)+Ht,Me[Nr]=Me["max"+du]=Math.ceil(he.height)+Ht,Me[Xn]=Me[Xn+po]=Me[Xn+ho]=Me[Xn+mo]=Me[Xn+fo]="0",Me[Ft]=ie[Ft],Me[Ft+po]=ie[Ft+po],Me[Ft+ho]=ie[Ft+ho],Me[Ft+mo]=ie[Ft+mo],Me[Ft+fo]=ie[Ft+fo],ee=$M(q,Me,A),dn&&le(0)),i?(yt=i._initted,jl(1),i.render(i.duration(),!0,!0),oe=se(v.a)-Fe+E+St,de=Math.abs(E-oe)>1,$&&de&&ee.splice(ee.length-2,2),i.render(0,!0,!0),yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jl(0)):oe=E,bt&&(bt.value?bt.style["overflow"+v.a.toUpperCase()]=bt.value:bt.style.removeProperty("overflow-"+v.a));else if(h&&le()&&!T)for(he=h.parentNode;he&&he!==ut;)he._pinOffset&&(ve-=he._pinOffset,We-=he._pinOffset),he=he.parentNode;_t&&_t.forEach(function(wt){return wt.revert(!1,!0)}),P.start=ve,P.end=We,L=Be=dn?Pe:le(),!T&&!dn&&(L<Pe&&le(Pe),P.scroll.rec=0),P.revert(!1,!0),Z=nn(),ae&&(H=-1,ae.restart(!0)),tn=0,i&&D&&(i._initted||Je)&&i.progress()!==Je&&i.progress(Je||0,!0).render(i.time(),!0,!0),(kt||ce!==P.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(T&&ve<-.001&&!ce?Se.utils.normalize(ve,We,0):ce,!0),P.progress=kt||(L-ve)/E===ce?0:ce),d&&g&&(J._pinOffset=Math.round(P.progress*oe)),te&&te.invalidate(),isNaN(it)||(it-=Se.getProperty(F,v.p),Ce-=Se.getProperty(Ie,v.p),Sa(F,v,it),Sa(ye,v,it-(ke||0)),Sa(Ie,v,Ce),Sa(He,v,Ce-(ke||0))),kt&&!dn&&P.update(),u&&!dn&&!C&&(C=!0,u(P),C=!1)}},P.getVelocity=function(){return(le()-Be)/(nn()-Qs)*1e3||0},P.endAnimation=function(){Ks(P.callbackAnimation),i&&(te?te.progress(1):i.paused()?D||Ks(i,P.direction<0,1):Ks(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(ve||P.refresh()||ve)+i.labels[pe]/i.duration()*E||0},P.getTrailing=function(pe){var Ge=et.indexOf(P),Ue=P.direction>0?et.slice(0,Ge).reverse():et.slice(Ge+1);return(Dn(pe)?Ue.filter(function(ke){return ke.vars.preventOverlaps===pe}):Ue).filter(function(ke){return P.direction>0?ke.end<=ve:ke.start>=We})},P.update=function(pe,Ge,Ue){if(!(T&&!Ue&&!pe)){var ke=dn===!0?Pe:P.scroll(),Lt=pe?0:(ke-ve)/E,Ke=Lt<0?0:Lt>1?1:Lt||0,Et=P.progress,kt,Tt,St,ft,b,I,z,V;if(Ge&&(Be=L,L=T?le():ke,y&&(U=ct,ct=i&&!D?i.totalProgress():Ke)),p&&d&&!tn&&!da&&Zn&&(!Ke&&ve<ke+(ke-Be)/(nn()-Qs)*p?Ke=1e-4:Ke===1&&We>ke+(ke-Be)/(nn()-Qs)*p&&(Ke=.9999)),Ke!==Et&&P.enabled){if(kt=P.isActive=!!Ke&&Ke<1,Tt=!!Et&&Et<1,I=kt!==Tt,b=I||!!Ke!=!!Et,P.direction=Ke>Et?1:-1,P.progress=Ke,b&&!tn&&(St=Ke&&!Et?0:Ke===1?1:Et===1?2:3,D&&(ft=!I&&W[St+1]!=="none"&&W[St+1]||W[St],V=i&&(ft==="complete"||ft==="reset"||ft in i))),S&&(I||V)&&(V||f||!i)&&(sn(S)?S(P):P.getTrailing(S).forEach(function(ge){return ge.endAnimation()})),D||(te&&!tn&&!da?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",Ke,i._tTime/i._tDur):(te.vars.totalProgress=Ke,te.invalidate().restart())):i&&i.totalProgress(Ke,!!(tn&&(Z||pe)))),d){if(pe&&g&&(J.style[g+v.os2]=Te),!$)fe(to(Fe+oe*Ke));else if(b){if(z=!pe&&Ke>Et&&We+1>ke&&ke+1>=pi(N,v),A)if(!pe&&(kt||z)){var O=Ai(d,!0),ie=ke-ve;Ef(d,ut,O.top+(v===Vt?ie:0)+Ht,O.left+(v===Vt?0:ie)+Ht)}else Ef(d,J);Es(kt||z?ee:ne),de&&Ke<1&&kt||fe(Fe+(Ke===1&&!z?oe:0))}}y&&!Ne.tween&&!tn&&!da&&ae.restart(!0),a&&(I||x&&Ke&&(Ke<1||!Jl))&&Ao(a.targets).forEach(function(ge){return ge.classList[kt||x?"add":"remove"](a.className)}),o&&!D&&!pe&&o(P),b&&!tn?(D&&(V&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),o&&o(P)),(I||!Jl)&&(c&&I&&ss(P,c),G[St]&&ss(P,G[St]),x&&(Ke===1?P.kill(!1,1):G[St]=0),I||(St=Ke===1?1:3,G[St]&&ss(P,G[St]))),R&&!kt&&Math.abs(P.getVelocity())>(no(R)?R:2500)&&(Ks(P.callbackAnimation),te?te.progress(1):Ks(i,ft==="reverse"?1:!Ke,1))):D&&o&&!tn&&o(P)}if(Ve){var he=T?ke/T.duration()*(T._caScrollDist||0):ke;ze(he+(F._isFlipped?1:0)),Ve(he)}pt&&pt(-ke/T.duration()*(T._caScrollDist||0))}},P.enable=function(pe,Ge){P.enabled||(P.enabled=!0,$t(N,"resize",io),Y||$t(N,"scroll",as),ue&&$t(r,"refreshInit",ue),pe!==!1&&(P.progress=ce=0,L=Be=H=le()),Ge!==!1&&P.refresh())},P.getTween=function(pe){return pe&&Ne?Ne.tween:te},P.setPositions=function(pe,Ge,Ue,ke){if(T){var Lt=T.scrollTrigger,Ke=T.duration(),Et=Lt.end-Lt.start;pe=Lt.start+Et*pe/Ke,Ge=Lt.start+Et*Ge/Ke}P.refresh(!1,!1,{start:pf(pe,Ue&&!!P._startClamp),end:pf(Ge,Ue&&!!P._endClamp)},ke),P.update()},P.adjustPinSpacing=function(pe){if(Re&&pe){var Ge=Re.indexOf(v.d)+1;Re[Ge]=parseFloat(Re[Ge])+pe+Ht,Re[1]=parseFloat(Re[1])+pe+Ht,Es(Re)}},P.disable=function(pe,Ge){if(pe!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||te&&te.pause(),Pe=0,Le&&(Le.uncache=1),ue&&qt(r,"refreshInit",ue),ae&&(ae.pause(),Ne.tween&&Ne.tween.kill()&&(Ne.tween=0)),!Y)){for(var Ue=et.length;Ue--;)if(et[Ue].scroller===N&&et[Ue]!==P)return;qt(N,"resize",io),Y||qt(N,"scroll",as)}},P.kill=function(pe,Ge){P.disable(pe,Ge),te&&!Ge&&te.kill(),l&&delete Ic[l];var Ue=et.indexOf(P);Ue>=0&&et.splice(Ue,1),Ue===fn&&Ra>0&&fn--,Ue=0,et.forEach(function(ke){return ke.scroller===P.scroller&&(Ue=1)}),Ue||dn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ge||i.kill()),ye&&[ye,He,F,Ie].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),_o===P&&(_o=0),d&&(Le&&(Le.uncache=1),Ue=0,et.forEach(function(ke){return ke.pin===d&&Ue++}),Ue||(Le.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),mt&&mt(P),i&&i.add&&!E){var Qe=P.update;P.update=function(){P.update=Qe,nt.cache++,ve||We||P.refresh()},Se.delayedCall(.01,P.update),E=.01,ve=We=0}else P.refresh();d&&XM()},r.register=function(n){return ls||(Se=n||bp(),Tp()&&window.document&&r.enable(),ls=eo),ls},r.defaults=function(n){if(n)for(var i in n)ga[i]=n[i];return ga},r.disable=function(n,i){eo=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),qt(tt,"wheel",as),qt(dt,"scroll",as),clearInterval(fa),qt(dt,"touchcancel",ai),qt(ut,"touchstart",ai),ma(qt,dt,"pointerdown,touchstart,mousedown",mf),ma(qt,dt,"pointerup,touchend,mouseup",_f),Ka.kill(),pa(qt);for(var s=0;s<nt.length;s+=3)_a(qt,nt[s],nt[s+1]),_a(qt,nt[s],nt[s+2])},r.enable=function(){if(tt=window,dt=document,Un=dt.documentElement,ut=dt.body,Se){if(Ao=Se.utils.toArray,co=Se.utils.clamp,Lc=Se.core.context||ai,jl=Se.core.suppressOverwrites||ai,cu=tt.history.scrollRestoration||"auto",Nc=tt.pageYOffset||0,Se.core.globals("ScrollTrigger",r),ut){eo=1,ys=document.createElement("div"),ys.style.height="100vh",ys.style.position="absolute",Np(),BM(),It.register(Se),r.isTouch=It.isTouch,Gi=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Dc=It.isTouch===1,$t(tt,"wheel",as),lu=[tt,dt,Un,ut],Se.matchMedia?(r.matchMedia=function(u){var f=Se.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Se.addEventListener("matchMediaInit",function(){Up(),mu()}),Se.addEventListener("matchMediaRevert",function(){return Lp()}),Se.addEventListener("matchMedia",function(){Rr(0,1),zr("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return ec(),ec})):console.warn("Requires GSAP 3.11.0 or later"),ec(),$t(dt,"scroll",as);var n=ut.hasAttribute("style"),i=ut.style,s=i.borderTopStyle,o=Se.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ai(ut),Vt.m=Math.round(a.top+Vt.sc())||0,pn.m=Math.round(a.left+pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ut.setAttribute("style",""),ut.removeAttribute("style")),fa=setInterval(xf,250),Se.delayedCall(.5,function(){return da=0}),$t(dt,"touchcancel",ai),$t(ut,"touchstart",ai),ma($t,dt,"pointerdown,touchstart,mousedown",mf),ma($t,dt,"pointerup,touchend,mouseup",_f),Pc=Se.utils.checkPrefix("transform"),Pa.push(Pc),ls=nn(),Ka=Se.delayedCall(.2,Rr).pause(),cs=[dt,"visibilitychange",function(){var u=tt.innerWidth,f=tt.innerHeight;dt.hidden?(hf=u,ff=f):(hf!==u||ff!==f)&&io()},dt,"DOMContentLoaded",Rr,tt,"load",Rr,tt,"resize",io],pa($t),et.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)_a(qt,nt[l],nt[l+1]),_a(qt,nt[l],nt[l+2])}else if(dt){var c=function u(){r.enable(),dt.removeEventListener("DOMContentLoaded",u)};dt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Jl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(fa)||(fa=i)&&setInterval(xf,i),"ignoreMobileResize"in n&&(Dc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pa(qt)||pa($t,n.autoRefreshEvents||"none"),Mp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=gn(n),o=nt.indexOf(s),a=Fr(s);~o&&nt.splice(o,a?6:2),i&&(a?mi.unshift(tt,i,ut,i,Un,i):mi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Dn(n)?gn(n):n).getBoundingClientRect(),a=o[s?Ir:Nr]*i||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},r.positionInViewport=function(n,i,s){Dn(n)&&(n=gn(n));var o=n.getBoundingClientRect(),a=o[s?Ir:Nr],l=i==null?a/2:i in ja?ja[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Br.killAll||[];Br={},i.forEach(function(s){return s()})}},r}();qe.version="3.15.0";qe.saveStyles=function(r){return r?Ao(r).forEach(function(e){if(e&&e.style){var t=Pn.indexOf(e);t>=0&&Pn.splice(t,5),Pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),Lc())}}):Pn};qe.revert=function(r,e){return mu(!r,e)};qe.create=function(r,e){return new qe(r,e)};qe.refresh=function(r){return r?io(!0):(ls||qe.register())&&Rr(!0)};qe.update=function(r){return++nt.cache&&Di(r===!0?2:0)};qe.clearScrollMemory=Ip;qe.maxScroll=function(r,e){return pi(r,e?pn:Vt)};qe.getScrollFunc=function(r,e){return ar(gn(r),e?pn:Vt)};qe.getById=function(r){return Ic[r]};qe.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qe.isScrolling=function(){return!!Zn};qe.snapDirectional=pu;qe.addEventListener=function(r,e){var t=Br[r]||(Br[r]=[]);~t.indexOf(e)||t.push(e)};qe.removeEventListener=function(r,e){var t=Br[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Se.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return sn(s)&&(s=s(),$t(qe,"refresh",function(){return s=e.batchMax()})),Ao(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(qe.create(c))}),t};var bf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===Un&&r(ut,t)},Ma={auto:1,scroll:1},ZM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Se.core.getCache(s),a=nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ut&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ma[(l=Yn(s)).overflowY]||Ma[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Fr(s)&&(Ma[(l=Yn(s)).overflowY]||Ma[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Fp=function(e,t,n,i){return It.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ZM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$t(dt,It.eventTypes[0],Af,!1,!0)},onDisable:function(){return qt(dt,It.eventTypes[0],Af,!0)}})},jM=/(input|label|select|textarea)/i,wf,Af=function(e){var t=jM.test(e.target.tagName);(t||wf)&&(e._gsapAllow=!0,wf=t)},JM=function(e){Er(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=gn(e.target)||Un,u=Se.core.globals().ScrollSmoother,f=u&&u.get(),h=Gi&&(e.content&&gn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ar(c,Vt),g=ar(c,pn),_=1,p=(It.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,m=0,M=sn(i)?function(){return i(a)}:function(){return i||2.8},x,y,A=Fp(c,e.type,!0,s),w=function(){return y=!1},T=ai,R=ai,S=function(){l=pi(c,Vt),R=co(Gi?1:0,l),n&&(T=co(0,pi(c,pn))),x=Or},v=function(){h._gsap.y=to(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var k=to(a.deltaY/2),re=R(d.v-k);if(h&&re!==d.v+d.offset){d.offset=re-d.v;var P=to((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=nt.cache,Di()}return!0}d.offset&&v(),y=!0},N,B,Y,$,G=function(){S(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&Se.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return Gi&&W.type==="touchmove"&&D()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){y=!1;var W=_;_=to((tt.visualViewport&&tt.visualViewport.scale||1)/p),N.pause(),W!==_&&nc(c,_>1.01?!0:n?!1:"x"),B=g(),Y=d(),S(),x=Or},e.onRelease=e.onGestureStart=function(W,k){if(d.offset&&v(),!k)$.restart(!0);else{nt.cache++;var re=M(),P,ue;n&&(P=g(),ue=P+re*.05*-W.velocityX/.227,re*=bf(g,P,ue,pi(c,pn)),N.vars.scrollX=T(ue)),P=d(),ue=P+re*.05*-W.velocityY/.227,re*=bf(d,P,ue,pi(c,Vt)),N.vars.scrollY=R(ue),N.invalidate().duration(re).play(.01),(Gi&&N.vars.scrollY>=l||P>=l-1)&&Se.to({},{onUpdate:G,duration:re})}o&&o(W)},e.onWheel=function(){N._ts&&N.pause(),nn()-m>1e3&&(x=0,m=nn())},e.onChange=function(W,k,re,P,ue){if(Or!==x&&S(),k&&n&&g(T(P[2]===k?B+(W.startX-W.x):g()+k-P[1])),re){d.offset&&v();var Q=ue[2]===re,_e=Q?Y+W.startY-W.y:d()+re-ue[1],H=R(_e);Q&&_e!==H&&(Y+=H-_e),d(H)}(re||k)&&Di()},e.onEnable=function(){nc(c,n?!1:"x"),qe.addEventListener("refresh",G),$t(tt,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){nc(c,!0),qt(tt,"resize",G),qe.removeEventListener("refresh",G),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new It(e),a.iOS=Gi,Gi&&!d()&&d(1),Gi&&Se.ticker.add(ai),$=a._dc,N=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Op(d,d(),function(){return N.pause()})},onUpdate:Di,onComplete:$.vars.onComplete}),a};qe.sort=function(r){if(sn(r))return et.sort(r);var e=tt.pageYOffset||0;return qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};qe.observe=function(r){return new It(r)};qe.normalizeScroll=function(r){if(typeof r>"u")return hn;if(r===!0&&hn)return hn.enable();if(r===!1){hn&&hn.kill(),hn=r;return}var e=r instanceof It?r:JM(r);return hn&&hn.target===e.target&&hn.kill(),Fr(e.target)&&(hn=e),e};qe.core={_getVelocityProp:Rc,_inputObserver:Fp,_scrollers:nt,_proxies:mi,bridge:{ss:function(){Zn||zr("scrollStart"),Zn=nn()},ref:function(){return tn}}};bp()&&Se.registerPlugin(qe);var Cf="1.3.23";function Bp(r,e,t){return Math.max(r,Math.min(e,t))}function QM(r,e,t){return(1-t)*r+t*e}function ey(r,e,t,n){return QM(r,e,1-Math.exp(-t*n))}function ty(r,e){return(r%e+e)%e}var ny=class{constructor(){De(this,"isRunning",!1);De(this,"value",0);De(this,"from",0);De(this,"to",0);De(this,"currentTime",0);De(this,"lerp");De(this,"duration");De(this,"easing");De(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Bp(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=ey(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function iy(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var ry=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){De(this,"width",0);De(this,"height",0);De(this,"scrollHeight",0);De(this,"scrollWidth",0);De(this,"debouncedResize");De(this,"wrapperResizeObserver");De(this,"contentResizeObserver");De(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});De(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});De(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=iy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},zp=class{constructor(){De(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const sy=100/6,Vi={passive:!1};function Rf(r,e){return r===1?sy:r===2?e:1}var oy=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){De(this,"touchStart",{x:0,y:0});De(this,"lastDelta",{x:0,y:0});De(this,"window",{width:0,height:0});De(this,"emitter",new zp);De(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});De(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});De(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});De(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Rf(n,this.window.width),s=Rf(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});De(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vi),this.element.addEventListener("touchstart",this.onTouchStart,Vi),this.element.addEventListener("touchmove",this.onTouchMove,Vi),this.element.addEventListener("touchend",this.onTouchEnd,Vi)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Vi),this.element.removeEventListener("touchstart",this.onTouchStart,Vi),this.element.removeEventListener("touchmove",this.onTouchMove,Vi),this.element.removeEventListener("touchend",this.onTouchEnd,Vi)}};const Pf=r=>Math.min(1,1.001-2**(-10*r));var ay=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:M=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:R=T,stopInertiaOnNavigate:S=!1}={}){De(this,"_isScrolling",!1);De(this,"_isStopped",!1);De(this,"_isLocked",!1);De(this,"_preventNextNativeScrollEvent",!1);De(this,"_resetVelocityTimeout",null);De(this,"_rafId",null);De(this,"isTouching");De(this,"time",0);De(this,"userData",{});De(this,"lastVelocity",0);De(this,"velocity",0);De(this,"direction",0);De(this,"options");De(this,"targetScroll");De(this,"animatedScroll");De(this,"animate",new ny);De(this,"emitter",new zp);De(this,"dimensions");De(this,"virtualScroll");De(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});De(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});De(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});De(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});De(this,"onPointerDown",r=>{r.button===1&&this.reset()});De(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,p,m,M,x;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((M=g.hasAttribute)==null?void 0:M.call(g,"data-lenis-prevent-touch"))||s&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});De(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});De(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Cf,window.lenis||(window.lenis={}),window.lenis.version=Cf,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Pf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:M,autoRaf:x,anchors:y,autoToggle:A,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:S},this.dimensions=new ry(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new oy(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),M=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Bp(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Pf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=h>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,M,x,y,A;if(_==="horizontal")p=Math.round(r.scrollLeft),m=f-d,M=e,x=s,y=a,A=c;else if(_==="vertical")p=Math.round(r.scrollTop),m=h-g,M=t,x=o,y=l,A=u;else return!1;return!A&&(p>=m||p<=0)?!0:(M>0?p<m:p>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ty(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};Bt.registerPlugin(qe);const kp=window.matchMedia("(max-width: 768px)").matches,Hp=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Df=["> INITIALISING 1334.TECH","> LOADING...","> READY"];function ly(){return new Promise(r=>{const e=document.getElementById("preloader-lines"),t=document.getElementById("preloader-cursor");let n=0,i=0;function s(){if(n>=Df.length){t.remove(),setTimeout(()=>{const l=document.getElementById("preloader");l.classList.add("hidden"),l.addEventListener("transitionend",r,{once:!0})},400);return}const o=Df[n];if(i===0){const l=document.createElement("div");e.appendChild(l),e.appendChild(t)}const a=e.querySelectorAll("div");a[n].textContent=o.slice(0,i+1),i++,i<o.length?setTimeout(s,22):(n++,i=0,setTimeout(s,180))}s()})}function Lf(){if(kp)return;const r=document.getElementById("cursor-dot"),e=document.getElementById("cursor-ring");let t=0,n=0,i=0,s=0;window.addEventListener("mousemove",l=>{t=l.clientX,n=l.clientY,r.style.left=t+"px",r.style.top=n+"px"}),document.querySelectorAll("a, button, .card, .tech-item, .sidenav-item").forEach(l=>{l.addEventListener("mouseenter",()=>e.classList.add("expanded")),l.addEventListener("mouseleave",()=>e.classList.remove("expanded"))});function a(){i+=(t-i)*.12,s+=(n-s)*.12,e.style.left=i+"px",e.style.top=s+"px",requestAnimationFrame(a)}a()}function Uf(){const r=new ay({lerp:.08,duration:1.4});r.on("scroll",qe.update),Bt.ticker.add(i=>r.raf(i*1e3)),Bt.ticker.lagSmoothing(0);const e=document.querySelectorAll(".section"),t=document.querySelectorAll(".sidenav-item"),n=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){t.forEach(a=>a.classList.remove("active"));const o=document.querySelector(`.sidenav-item[data-section="${s.target.id}"]`);o&&o.classList.add("active")}})},{threshold:.4});return e.forEach(i=>n.observe(i)),document.querySelectorAll('[href^="#"]').forEach(i=>{i.addEventListener("click",s=>{s.preventDefault();const o=document.querySelector(i.getAttribute("href"));o&&r.scrollTo(o,{duration:1.6,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a))})})}),r}function cy(){document.querySelectorAll(".reveal-word, .mono-label, .hero-body, .cta-btn, .card, .section-h2, .contact-h2, .contact-h2 span").forEach(e=>{e.classList.add("visible"),e.style.opacity="1",e.style.transform="none",e.style.clipPath="none"});const r=document.getElementById("webgl");r&&(r.style.opacity="1")}function uy(r){r&&r.canvas&&Bt.to(r.canvas,{opacity:1,duration:1.4,ease:"power2.out"}),r&&r.bloom&&(r.bloom.strength=2,Bt.to(r.bloom,{strength:1,duration:1.2,ease:"power3.out"}));const e=document.querySelector("#hero .mono-label"),t=document.querySelectorAll("#hero .reveal-word"),n=document.querySelector("#hero .hero-body"),i=document.querySelector("#hero .cta-btn"),s=document.querySelector(".scroll-cue");s&&Bt.set(s,{opacity:0,y:12});const o=Bt.timeline({defaults:{ease:"power3.out"},delay:.15});o.fromTo(e,{opacity:0,y:20},{opacity:1,y:0,duration:.6},.1),o.fromTo(t,{clipPath:"inset(0 100% 0 0)",y:24},{clipPath:"inset(0 0% 0 0)",y:0,duration:.9,stagger:.15,ease:"expo.out"},.25),o.fromTo(n,{opacity:0,y:18},{opacity:1,y:0,duration:.7},"-=0.45"),o.fromTo(i,{opacity:0,y:16,scale:.96},{opacity:1,y:0,scale:1,duration:.6,onStart:()=>{i&&i.classList.add("cta-glow-pulse")},onComplete:()=>{i&&i.classList.remove("cta-glow-pulse")}},"-=0.25"),s&&o.to(s,{opacity:1,y:0,duration:.6},"-=0.2")}function hy(){const r=document.querySelector("#stack .mono-label"),e=document.querySelector("#stack .section-h2"),t=Bt.utils.toArray("#stack .card");Bt.set(r,{opacity:0,x:-30}),Bt.set(e,{clipPath:"inset(0 100% 0 0)"}),Bt.set(t,{opacity:0,y:50,scale:.95}),qe.create({trigger:"#stack",start:"top 70%",once:!0,onEnter:()=>{const o=Bt.timeline({defaults:{ease:"power3.out"}});o.to(r,{opacity:1,x:0,duration:.6},0),o.to(e,{clipPath:"inset(0 0% 0 0)",duration:1,ease:"expo.out"},.1),o.to(t,{opacity:1,y:0,scale:1,duration:.7,stagger:.12,clearProps:"transform,scale"},.35)}});const n=document.querySelector("#contact .mono-label"),i=Bt.utils.toArray("#contact .contact-h2 span"),s=document.querySelector("#contact .contact-cta");Bt.set(n,{opacity:0,x:-30}),Bt.set(i,{opacity:0,y:40}),Bt.set(s,{opacity:0,y:30}),qe.create({trigger:"#contact",start:"top 70%",once:!0,onEnter:()=>{const o=Bt.timeline({defaults:{ease:"power3.out"}});o.to(n,{opacity:1,x:0,duration:.6},0),o.to(i,{opacity:1,y:0,duration:.7,stagger:.1},.1),o.to(s,{opacity:1,y:0,duration:.6,onStart:()=>{s&&s.classList.add("cta-glow-pulse")},onComplete:()=>{s&&s.classList.remove("cta-glow-pulse")}},.35)}})}function fy(){if(kp||Hp)return;const r=document.getElementById("webgl"),e=new Jx({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.toneMapping=Bc,e.toneMappingExposure=1;const t=new Qx,n=new Wn(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,0,80);const i=5e4,s=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i*3);for(let Q=0;Q<i;Q++){const _e=Math.random()*Math.PI*2,H=Math.acos(2*Math.random()-1),Z=20+Math.random()*60;s[Q*3]=Z*Math.sin(H)*Math.cos(_e),s[Q*3+1]=Z*Math.sin(H)*Math.sin(_e),s[Q*3+2]=(Math.random()-.5)*120;const ce=Math.random();ce<.5?(c[Q*3]=0,c[Q*3+1]=.9,c[Q*3+2]=1):ce<.8?(c[Q*3]=.48,c[Q*3+1]=.36,c[Q*3+2]=1):(c[Q*3]=.9,c[Q*3+1]=.93,c[Q*3+2]=.95),l[Q]=.3+Math.random()*1.2}const u=Math.ceil(Math.cbrt(i));for(let Q=0;Q<i;Q++){const _e=Q%u-u/2,H=Math.floor(Q/u)%u-u/2,Z=Math.floor(Q/(u*u))-u/2;o[Q*3]=_e*4,o[Q*3+1]=H*4,o[Q*3+2]=Z*4}for(let Q=0;Q<i;Q++){const _e=Math.random()*Math.PI*2,H=Math.acos(2*Math.random()-1),Z=Math.pow(Math.random(),2)*14;a[Q*3]=Z*Math.sin(H)*Math.cos(_e)+55,a[Q*3+1]=Z*Math.sin(H)*Math.sin(_e)+0,a[Q*3+2]=Z*Math.cos(H)}const f=new jn,h=new Sn(s.slice(),3);h.setUsage($u),f.setAttribute("position",h),f.setAttribute("color",new Sn(c,3)),f.setAttribute("aSize",new Sn(l,1));const d=`
    attribute float aSize;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uExplosion;
    varying vec3 vColor;
    varying float vDist;

    void main() {
      vColor = color;
      vec3 pos = position;

      // radial explosion from orb centre when in contact section
      if (uExplosion > 0.0) {
        vec3 orbCentre = vec3(55.0, 0.0, 0.0);
        vec3 dir = normalize(pos - orbCentre + vec3(0.001, 0.001, 0.001));
        float wave = sin(uTime * 1.2 + length(pos - orbCentre) * 0.3) * 0.5 + 0.5;
        pos += dir * uExplosion * 80.0 * wave;
      }

      vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
      vDist = length(mvPos.xyz);
      float pulse = sin(uTime * 1.5 + pos.x * 0.05 + pos.y * 0.05) * 0.4 + 0.6;
      gl_PointSize = aSize * uPixelRatio * pulse * (120.0 / -mvPos.z);
      gl_Position = projectionMatrix * mvPos;
    }
  `,g=`
    varying vec3 vColor;
    varying float vDist;

    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      float alpha = 1.0 - smoothstep(0.0, 0.5, d);
      float glow = exp(-d * 5.0);
      vec3 col = vColor * (1.0 + glow * 0.8);
      gl_FragColor = vec4(col, alpha * 0.65);
    }
  `,_=new on({vertexShader:d,fragmentShader:g,uniforms:{uTime:{value:0},uPixelRatio:{value:e.getPixelRatio()},uExplosion:{value:0}},transparent:!0,vertexColors:!0,depthWrite:!1,blending:go}),p=new iS(f,_);t.add(p);const m=800,M=new Float32Array(m*2*3);function x(){const Q=f.attributes.position.array;for(let _e=0;_e<m;_e++){const H=Math.floor(Math.random()*i),Z=Math.floor(Math.random()*i);M[_e*6]=Q[H*3],M[_e*6+1]=Q[H*3+1],M[_e*6+2]=Q[H*3+2],M[_e*6+3]=Q[Z*3],M[_e*6+4]=Q[Z*3+1],M[_e*6+5]=Q[Z*3+2]}}x();const y=new jn,A=new Sn(M,3);A.setUsage($u),y.setAttribute("position",A);const w=new md({color:58879,transparent:!0,opacity:.06,blending:go,depthWrite:!1}),T=new tS(y,w);t.add(T);const R=new uS(e);R.addPass(new hS(t,n));const S=new Ps(new $e(window.innerWidth,window.innerHeight),1,.6,.15);R.addPass(S);const v=new fc({uniforms:{tDiffuse:{value:null},uOffset:{value:.003}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uOffset;
      varying vec2 vUv;
      void main() {
        vec2 dir = vUv - 0.5;
        float r = texture2D(tDiffuse, vUv + dir * uOffset).r;
        float g = texture2D(tDiffuse, vUv).g;
        float b = texture2D(tDiffuse, vUv - dir * uOffset).b;
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `});R.addPass(v);const D=new fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      varying vec2 vUv;
      void main() {
        vec4 col = texture2D(tDiffuse, vUv);
        float vignette = 1.0 - smoothstep(0.4, 1.2, length(vUv - 0.5) * 1.8);
        gl_FragColor = vec4(col.rgb * vignette, col.a);
      }
    `});R.addPass(D),R.addPass(new pS);let N=0,B=0;window.addEventListener("mousemove",Q=>{N=(Q.clientX/window.innerWidth-.5)*2,B=-(Q.clientY/window.innerHeight-.5)*2});function Y(Q,_e,H){const Z=f.attributes.position.array;for(let ce=0;ce<i*3;ce++)Z[ce]=Q[ce]+(_e[ce]-Q[ce])*H;f.attributes.position.needsUpdate=!0}qe.create({trigger:"#stack",start:"top 80%",end:"top 20%",onUpdate:Q=>{const _e=Q.progress;Y(s,o,_e),w.opacity=.06*(1-_e),S.strength=1-_e*.2},onLeaveBack:()=>{Y(s,o,0),w.opacity=.06,S.strength=1}});let $=null,G=null,W=!1;qe.create({trigger:"#contact",start:"top 80%",end:"top 20%",onUpdate:Q=>{const _e=Q.progress;Y(o,a,_e),S.strength=.8+_e*.5,n.position.z=80-_e*15},onEnter:()=>{W=!0,G=Bt.to(p.rotation,{y:0,x:0,duration:1.2,ease:"power2.out"}),$||($=Bt.to(_.uniforms.uExplosion,{value:1,duration:1.8,ease:"power2.inOut",yoyo:!0,repeat:-1,onUpdate:()=>{S.strength=.8+_.uniforms.uExplosion.value*.9}}))},onLeaveBack:()=>{W=!1,G&&(G.kill(),G=null),$&&($.kill(),$=null),_.uniforms.uExplosion.value=0,Y(o,a,0),S.strength=.8,n.position.z=80}});let k=0,re=60,P=!1;function ue(Q){requestAnimationFrame(ue);const _e=Q-k;re=re*.95+1e3/_e*.05,k=Q,re<30&&!P&&(P=!0,v.enabled=!1,D.enabled=!1);const H=Q*.001;_.uniforms.uTime.value=H,W||(p.rotation.y=H*.03+N*.08,p.rotation.x=B*.05),T.rotation.y=p.rotation.y,T.rotation.x=p.rotation.x,R.render()}return ue(0),window.addEventListener("resize",()=>{const Q=window.innerWidth,_e=window.innerHeight;n.aspect=Q/_e,n.updateProjectionMatrix(),e.setSize(Q,_e),R.setSize(Q,_e),_.uniforms.uPixelRatio.value=e.getPixelRatio()}),r.addEventListener("webglcontextlost",Q=>{Q.preventDefault(),r.style.display="none"}),{bloom:S,material:_,canvas:r}}document.getElementById("footer-year").textContent=new Date().getFullYear();async function dy(){if(Hp){document.getElementById("preloader").classList.add("hidden"),Lf(),Uf(),cy();return}await ly(),Lf(),Uf();const r=fy();uy(r),hy()}dy();
