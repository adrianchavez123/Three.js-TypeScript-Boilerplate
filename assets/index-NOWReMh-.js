var VG=Object.defineProperty;var XG=(Lg,ug,lC)=>ug in Lg?VG(Lg,ug,{enumerable:!0,configurable:!0,writable:!0,value:lC}):Lg[ug]=lC;var DA=(Lg,ug,lC)=>XG(Lg,typeof ug!="symbol"?ug+"":ug,lC);(async()=>{(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&I(Q)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const Lg="165",ug=0,lC=1,Ps=2,_o=1,js=2,Hg=3,mg=0,Ig=1,sg=2,CC=0,OC=1,YE=2,Zo=3,Wo=4,Vs=5,GC=100,Xs=101,zs=102,$s=103,AD=104,ID=200,gD=201,CD=202,BD=203,LE=204,uE=205,QD=206,ED=207,iD=208,oD=209,eD=210,tD=211,aD=212,sD=213,DD=214,hD=0,rD=1,nD=2,yQ=3,SD=4,wD=5,cD=6,lD=7,HE=0,GD=1,yD=2,BC=0,kD=1,UD=2,MD=3,ND=4,KD=5,JD=6,FD=7,Po="attached",RD="detached",jo=300,vC=301,_C=302,kQ=303,mE=304,UQ=306,yC=1e3,Gg=1001,MQ=1002,xI=1003,Vo=1004,qB=1005,LI=1006,NQ=1007,yg=1008,kg=1009,pD=1010,dD=1011,KQ=1012,Xo=1013,ZC=1014,gg=1015,QC=1016,zo=1017,$o=1018,WC=1020,qD=35902,YD=1021,LD=1022,Dg=1023,uD=1024,HD=1025,PC=1026,jC=1027,Ae=1028,Ie=1029,mD=1030,ge=1031,Ce=1033,fE=33776,TE=33777,xE=33778,bE=33779,Be=35840,Qe=35841,Ee=35842,ie=35843,oe=36196,ee=37492,te=37496,ae=37808,se=37809,De=37810,he=37811,re=37812,ne=37813,Se=37814,we=37815,ce=37816,le=37817,Ge=37818,ye=37819,ke=37820,Ue=37821,OE=36492,Me=36494,Ne=36495,fD=36283,Ke=36284,Je=36285,Fe=36286,TD=2200,xD=2201,bD=2202,YB=2300,LB=2301,vE=2302,VC=2400,XC=2401,JQ=2402,_E=2500,Re=2501,OD=0,pe=1,ZE=2,vD=3200,_D=3201,WE=0,ZD=1,EC="",bI="srgb",JI="srgb-linear",PE="display-p3",FQ="display-p3-linear",RQ="linear",aI="srgb",pQ="rec709",dQ="p3",zC=7680,de=519,WD=512,PD=513,jD=514,qe=515,VD=516,XD=517,zD=518,$D=519,jE=35044,Ye="300 es",fg=2e3,qQ=2001;class kC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,Q=g.length;C<Q;C++)g[C].call(this,A);A.target=null}}}const ZI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Le=1234567;const uB=Math.PI/180,$C=180/Math.PI;function hg(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ZI[B&255]+ZI[B>>8&255]+ZI[B>>16&255]+ZI[B>>24&255]+"-"+ZI[A&255]+ZI[A>>8&255]+"-"+ZI[A>>16&15|64]+ZI[A>>24&255]+"-"+ZI[I&63|128]+ZI[I>>8&255]+"-"+ZI[I>>16&255]+ZI[I>>24&255]+ZI[g&255]+ZI[g>>8&255]+ZI[g>>16&255]+ZI[g>>24&255]).toLowerCase()}function OI(B,A,I){return Math.max(A,Math.min(I,B))}function VE(B,A){return(B%A+A)%A}function Ah(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function Ih(B,A,I){return B!==A?(I-B)/(A-B):0}function HB(B,A,I){return(1-I)*B+I*A}function gh(B,A,I,g){return HB(B,A,1-Math.exp(-I*g))}function Ch(B,A=1){return A-Math.abs(VE(B,A*2)-A)}function Bh(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function Qh(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function Eh(B,A){return B+Math.floor(Math.random()*(A-B+1))}function ih(B,A){return B+Math.random()*(A-B)}function oh(B){return B*(.5-Math.random())}function eh(B){B!==void 0&&(Le=B);let A=Le+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function th(B){return B*uB}function ah(B){return B*$C}function sh(B){return(B&B-1)===0&&B!==0}function Dh(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function hh(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function rh(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),e=Q((A+g)/2),t=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),h=Q((g-A)/2),S=E((g-A)/2);switch(C){case"XYX":B.set(i*t,o*a,o*s,i*e);break;case"YZY":B.set(o*s,i*t,o*a,i*e);break;case"ZXZ":B.set(o*a,o*s,i*t,i*e);break;case"XZX":B.set(i*t,o*S,o*h,i*e);break;case"YXY":B.set(o*h,i*t,o*S,i*e);break;case"ZYZ":B.set(o*S,o*h,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function rg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function CI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const nh={DEG2RAD:uB,RAD2DEG:$C,generateUUID:hg,clamp:OI,euclideanModulo:VE,mapLinear:Ah,inverseLerp:Ih,lerp:HB,damp:gh,pingpong:Ch,smoothstep:Bh,smootherstep:Qh,randInt:Eh,randFloat:ih,randFloatSpread:oh,seededRandom:eh,degToRad:th,radToDeg:ah,isPowerOfTwo:sh,ceilPowerOfTwo:Dh,floorPowerOfTwo:hh,setQuaternionFromProperEuler:rh,normalize:CI,denormalize:rg};class pA{constructor(A=0,I=0){pA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uA{constructor(A,I,g,C,Q,E,i,o,e){uA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e)}set(A,I,g,C,Q,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=Q,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],h=g[5],S=g[8],w=C[0],n=C[3],r=C[6],l=C[1],c=C[4],M=C[7],L=C[2],K=C[5],N=C[8];return Q[0]=E*w+i*l+o*L,Q[3]=E*n+i*c+o*K,Q[6]=E*r+i*M+o*N,Q[1]=e*w+t*l+a*L,Q[4]=e*n+t*c+a*K,Q[7]=e*r+t*M+a*N,Q[2]=s*w+h*l+S*L,Q[5]=s*n+h*c+S*K,Q[8]=s*r+h*M+S*N,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*Q*t+g*i*o+C*Q*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*Q,h=e*Q-E*o,S=I*a+g*s+C*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(t*I-C*o)*w,A[5]=(C*Q-i*I)*w,A[6]=h*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*Q)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),e=Math.sin(Q);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(XE.makeScale(A,I)),this}rotate(A){return this.premultiply(XE.makeRotation(-A)),this}translate(A,I){return this.premultiply(XE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const XE=new uA;function ue(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function mB(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function Sh(){const B=mB("canvas");return B.style.display="block",B}const He={};function zE(B){B in He||(He[B]=!0,console.warn(B))}function wh(B,A,I){return new Promise(function(g,C){function Q(){switch(B.clientWaitSync(A,B.SYNC_FLUSH_COMMANDS_BIT,0)){case B.WAIT_FAILED:C();break;case B.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}const me=new uA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fe=new uA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),YQ={[JI]:{transfer:RQ,primaries:pQ,toReference:B=>B,fromReference:B=>B},[bI]:{transfer:aI,primaries:pQ,toReference:B=>B.convertSRGBToLinear(),fromReference:B=>B.convertLinearToSRGB()},[FQ]:{transfer:RQ,primaries:dQ,toReference:B=>B.applyMatrix3(fe),fromReference:B=>B.applyMatrix3(me)},[PE]:{transfer:aI,primaries:dQ,toReference:B=>B.convertSRGBToLinear().applyMatrix3(fe),fromReference:B=>B.applyMatrix3(me).convertLinearToSRGB()}},ch=new Set([JI,FQ]),AI={enabled:!0,_workingColorSpace:JI,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(B){if(!ch.has(B))throw new Error(`Unsupported working color space, "${B}".`);this._workingColorSpace=B},convert:function(B,A,I){if(this.enabled===!1||A===I||!A||!I)return B;const g=YQ[A].toReference,C=YQ[I].fromReference;return C(g(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this._workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this._workingColorSpace)},getPrimaries:function(B){return YQ[B].primaries},getTransfer:function(B){return B===EC?RQ:YQ[B].transfer}};function AB(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function $E(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let IB;class lh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{IB===void 0&&(IB=mB("canvas")),IB.width=A.width,IB.height=A.height;const g=IB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=IB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=mB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=AB(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(AB(I[g]/255)*255):I[g]=AB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Gh=0;class Te{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=hg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(Ai(C[E].image)):Q.push(Ai(C[E]))}else Q=Ai(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function Ai(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?lh.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class FI extends kC{constructor(A=FI.DEFAULT_IMAGE,I=FI.DEFAULT_MAPPING,g=Gg,C=Gg,Q=LI,E=yg,i=Dg,o=kg,e=FI.DEFAULT_ANISOTROPY,t=EC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=hg(),this.name="",this.source=new Te(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new pA(0,0),this.repeat=new pA(1,1),this.center=new pA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new uA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==jo)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case yC:A.x=A.x-Math.floor(A.x);break;case Gg:A.x=A.x<0?0:1;break;case MQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case yC:A.y=A.y-Math.floor(A.y);break;case Gg:A.y=A.y<0?0:1;break;case MQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}FI.DEFAULT_IMAGE=null,FI.DEFAULT_MAPPING=jo,FI.DEFAULT_ANISOTROPY=1;class QI{constructor(A=0,I=0,g=0,C=1){QI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],s=E[9],h=E[2],S=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-h)<.01&&Math.abs(s-S)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+h)<.1&&Math.abs(s+S)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const r=(i+1)/2,l=(a+1)/2,c=(w+1)/2,M=(o+t)/4,L=(e+h)/4,K=(s+S)/4;return r>l&&r>c?r<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(r),C=M/g,Q=L/g):l>c?l<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(l),g=M/C,Q=K/C):c<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(c),g=L/Q,C=K/Q),this.set(g,C,Q,I),this}let n=Math.sqrt((S-s)*(S-s)+(e-h)*(e-h)+(t-o)*(t-o));return Math.abs(n)<.001&&(n=1),this.x=(S-s)/n,this.y=(e-h)/n,this.z=(t-o)/n,this.w=Math.acos((i+a+w-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kh extends kC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new QI(0,0,A,I),this.scissorTest=!1,this.viewport=new QI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LI,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new FI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,Q=this.textures.length;C<Q;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Te(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class UC extends kh{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class xe extends FI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=xI,this.minFilter=xI,this.wrapR=Gg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends FI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=xI,this.minFilter=xI,this.wrapR=Gg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=Q[E+0],h=Q[E+1],S=Q[E+2],w=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=h,A[I+2]=S,A[I+3]=w;return}if(a!==w||o!==s||e!==h||t!==S){let n=1-i;const r=o*s+e*h+t*S+a*w,l=r>=0?1:-1,c=1-r*r;if(c>Number.EPSILON){const L=Math.sqrt(c),K=Math.atan2(L,r*l);n=Math.sin(n*K)/L,i=Math.sin(i*K)/L}const M=i*l;if(o=o*n+s*M,e=e*n+h*M,t=t*n+S*M,a=a*n+w*M,n===1-i){const L=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=L,e*=L,t*=L,a*=L}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=Q[E],s=Q[E+1],h=Q[E+2],S=Q[E+3];return A[I]=i*S+t*a+o*h-e*s,A[I+1]=o*S+t*s+e*a-i*h,A[I+2]=e*S+t*h+i*s-o*a,A[I+3]=t*S-i*a-o*s-e*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(Q/2),s=o(g/2),h=o(C/2),S=o(Q/2);switch(E){case"XYZ":this._x=s*t*a+e*h*S,this._y=e*h*a-s*t*S,this._z=e*t*S+s*h*a,this._w=e*t*a-s*h*S;break;case"YXZ":this._x=s*t*a+e*h*S,this._y=e*h*a-s*t*S,this._z=e*t*S-s*h*a,this._w=e*t*a+s*h*S;break;case"ZXY":this._x=s*t*a-e*h*S,this._y=e*h*a+s*t*S,this._z=e*t*S+s*h*a,this._w=e*t*a-s*h*S;break;case"ZYX":this._x=s*t*a-e*h*S,this._y=e*h*a+s*t*S,this._z=e*t*S-s*h*a,this._w=e*t*a+s*h*S;break;case"YZX":this._x=s*t*a+e*h*S,this._y=e*h*a+s*t*S,this._z=e*t*S-s*h*a,this._w=e*t*a-s*h*S;break;case"XZY":this._x=s*t*a-e*h*S,this._y=e*h*a-s*t*S,this._z=e*t*S+s*h*a,this._w=e*t*a+s*h*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const h=.5/Math.sqrt(s+1);this._w=.25/h,this._x=(t-o)*h,this._y=(Q-e)*h,this._z=(E-C)*h}else if(g>i&&g>a){const h=2*Math.sqrt(1+g-i-a);this._w=(t-o)/h,this._x=.25*h,this._y=(C+E)/h,this._z=(Q+e)/h}else if(i>a){const h=2*Math.sqrt(1+i-g-a);this._w=(Q-e)/h,this._x=(C+E)/h,this._y=.25*h,this._z=(o+t)/h}else{const h=2*Math.sqrt(1+a-g-i);this._w=(E-C)/h,this._x=(Q+e)/h,this._y=(o+t)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(OI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-Q*o,this._y=C*t+E*o+Q*i-g*e,this._z=Q*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const h=1-I;return this._w=h*E+I*this._w,this._x=h*g+I*this._x,this._y=h*C+I*this._y,this._z=h*Q+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(A=0,I=0,g=0){Y.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(be.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(be.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-Q*a,this.z=C+o*a+Q*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Ii.copy(this).projectOnVector(A),this.sub(Ii)}reflect(A){return this.sub(Ii.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ii=new Y,be=new uI;class Tg{constructor(A=new Y(1/0,1/0,1/0),I=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(ng.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(ng.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=ng.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,ng):ng.fromBufferAttribute(Q,E),ng.applyMatrix4(A.matrixWorld),this.expandByPoint(ng);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),LQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),LQ.copy(g.boundingBox)),LQ.applyMatrix4(A.matrixWorld),this.union(LQ)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,ng),ng.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(fB),uQ.subVectors(this.max,fB),gB.subVectors(A.a,fB),CB.subVectors(A.b,fB),BB.subVectors(A.c,fB),iC.subVectors(CB,gB),oC.subVectors(BB,CB),MC.subVectors(gB,BB);let I=[0,-iC.z,iC.y,0,-oC.z,oC.y,0,-MC.z,MC.y,iC.z,0,-iC.x,oC.z,0,-oC.x,MC.z,0,-MC.x,-iC.y,iC.x,0,-oC.y,oC.x,0,-MC.y,MC.x,0];return!gi(I,gB,CB,BB,uQ)||(I=[1,0,0,0,1,0,0,0,1],!gi(I,gB,CB,BB,uQ))?!1:(HQ.crossVectors(iC,oC),I=[HQ.x,HQ.y,HQ.z],gi(I,gB,CB,BB,uQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,ng).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(ng).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(xg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),xg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),xg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),xg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),xg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),xg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),xg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),xg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(xg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const xg=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ng=new Y,LQ=new Tg,gB=new Y,CB=new Y,BB=new Y,iC=new Y,oC=new Y,MC=new Y,fB=new Y,uQ=new Y,HQ=new Y,NC=new Y;function gi(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){NC.fromArray(B,Q);const i=C.x*Math.abs(NC.x)+C.y*Math.abs(NC.y)+C.z*Math.abs(NC.z),o=A.dot(NC),e=I.dot(NC),t=g.dot(NC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const Mh=new Tg,TB=new Y,Ci=new Y;class Ug{constructor(A=new Y,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Mh.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;TB.subVectors(A,this.center);const I=TB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(TB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Ci.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(TB.copy(A.center).add(Ci)),this.expandByPoint(TB.copy(A.center).sub(Ci))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bg=new Y,Bi=new Y,mQ=new Y,eC=new Y,Qi=new Y,fQ=new Y,Ei=new Y;class TQ{constructor(A=new Y,I=new Y(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,bg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=bg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(bg.copy(this.origin).addScaledVector(this.direction,I),bg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){Bi.copy(A).add(I).multiplyScalar(.5),mQ.copy(I).sub(A).normalize(),eC.copy(this.origin).sub(Bi);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(mQ),i=eC.dot(this.direction),o=-eC.dot(mQ),e=eC.lengthSq(),t=Math.abs(1-E*E);let a,s,h,S;if(t>0)if(a=E*o-i,s=E*i-o,S=Q*t,a>=0)if(s>=-S)if(s<=S){const w=1/t;a*=w,s*=w,h=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;else s=-Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;else s<=-S?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+s*(s+2*o)+e):s<=S?(a=0,s=Math.min(Math.max(-Q,-o),Q),h=s*(s+2*o)+e):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+s*(s+2*o)+e);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(Bi).addScaledVector(mQ,s),h}intersectSphere(A,I){bg.subVectors(A.center,this.origin);const g=bg.dot(this.direction),C=bg.dot(bg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(Q=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(Q=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,bg)!==null}intersectTriangle(A,I,g,C,Q){Qi.subVectors(I,A),fQ.subVectors(g,A),Ei.crossVectors(Qi,fQ);let E=this.direction.dot(Ei),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;eC.subVectors(this.origin,A);const o=i*this.direction.dot(fQ.crossVectors(eC,fQ));if(o<0)return null;const e=i*this.direction.dot(Qi.cross(eC));if(e<0||o+e>E)return null;const t=-i*eC.dot(Ei);return t<0?null:this.at(t/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qA{constructor(A,I,g,C,Q,E,i,o,e,t,a,s,h,S,w,n){qA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e,t,a,s,h,S,w,n)}set(A,I,g,C,Q,E,i,o,e,t,a,s,h,S,w,n){const r=this.elements;return r[0]=A,r[4]=I,r[8]=g,r[12]=C,r[1]=Q,r[5]=E,r[9]=i,r[13]=o,r[2]=e,r[6]=t,r[10]=a,r[14]=s,r[3]=h,r[7]=S,r[11]=w,r[15]=n,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/QB.setFromMatrixColumn(A,0).length(),Q=1/QB.setFromMatrixColumn(A,1).length(),E=1/QB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*t,h=E*a,S=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=h+S*e,I[5]=s-w*e,I[9]=-i*o,I[2]=w-s*e,I[6]=S+h*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,h=o*a,S=e*t,w=e*a;I[0]=s+w*i,I[4]=S*i-h,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=h*i-S,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,h=o*a,S=e*t,w=e*a;I[0]=s-w*i,I[4]=-E*a,I[8]=S+h*i,I[1]=h+S*i,I[5]=E*t,I[9]=w-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,h=E*a,S=i*t,w=i*a;I[0]=o*t,I[4]=S*e-h,I[8]=s*e+w,I[1]=o*a,I[5]=w*e+s,I[9]=h*e-S,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,h=E*e,S=i*o,w=i*e;I[0]=o*t,I[4]=w-s*a,I[8]=S*a+h,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=h*a+S,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,h=E*e,S=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+w,I[5]=E*t,I[9]=h*a-S,I[2]=S*a-h,I[6]=i*t,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Nh,A,Kh)}lookAt(A,I,g){const C=this.elements;return Cg.subVectors(A,I),Cg.lengthSq()===0&&(Cg.z=1),Cg.normalize(),tC.crossVectors(g,Cg),tC.lengthSq()===0&&(Math.abs(g.z)===1?Cg.x+=1e-4:Cg.z+=1e-4,Cg.normalize(),tC.crossVectors(g,Cg)),tC.normalize(),xQ.crossVectors(Cg,tC),C[0]=tC.x,C[4]=xQ.x,C[8]=Cg.x,C[1]=tC.y,C[5]=xQ.y,C[9]=Cg.y,C[2]=tC.z,C[6]=xQ.z,C[10]=Cg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],h=g[13],S=g[2],w=g[6],n=g[10],r=g[14],l=g[3],c=g[7],M=g[11],L=g[15],K=C[0],N=C[4],d=C[8],U=C[12],G=C[1],R=C[5],T=C[9],x=C[13],Z=C[2],V=C[6],_=C[10],z=C[14],W=C[3],iA=C[7],cA=C[11],FA=C[15];return Q[0]=E*K+i*G+o*Z+e*W,Q[4]=E*N+i*R+o*V+e*iA,Q[8]=E*d+i*T+o*_+e*cA,Q[12]=E*U+i*x+o*z+e*FA,Q[1]=t*K+a*G+s*Z+h*W,Q[5]=t*N+a*R+s*V+h*iA,Q[9]=t*d+a*T+s*_+h*cA,Q[13]=t*U+a*x+s*z+h*FA,Q[2]=S*K+w*G+n*Z+r*W,Q[6]=S*N+w*R+n*V+r*iA,Q[10]=S*d+w*T+n*_+r*cA,Q[14]=S*U+w*x+n*z+r*FA,Q[3]=l*K+c*G+M*Z+L*W,Q[7]=l*N+c*R+M*V+L*iA,Q[11]=l*d+c*T+M*_+L*cA,Q[15]=l*U+c*x+M*z+L*FA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],h=A[14],S=A[3],w=A[7],n=A[11],r=A[15];return S*(+Q*o*a-C*e*a-Q*i*s+g*e*s+C*i*h-g*o*h)+w*(+I*o*h-I*e*s+Q*E*s-C*E*h+C*e*t-Q*o*t)+n*(+I*e*a-I*i*h-Q*E*a+g*E*h+Q*i*t-g*e*t)+r*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],h=A[11],S=A[12],w=A[13],n=A[14],r=A[15],l=a*n*e-w*s*e+w*o*h-i*n*h-a*o*r+i*s*r,c=S*s*e-t*n*e-S*o*h+E*n*h+t*o*r-E*s*r,M=t*w*e-S*a*e+S*i*h-E*w*h-t*i*r+E*a*r,L=S*a*o-t*w*o-S*i*s+E*w*s+t*i*n-E*a*n,K=I*l+g*c+C*M+Q*L;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/K;return A[0]=l*N,A[1]=(w*s*Q-a*n*Q-w*C*h+g*n*h+a*C*r-g*s*r)*N,A[2]=(i*n*Q-w*o*Q+w*C*e-g*n*e-i*C*r+g*o*r)*N,A[3]=(a*o*Q-i*s*Q-a*C*e+g*s*e+i*C*h-g*o*h)*N,A[4]=c*N,A[5]=(t*n*Q-S*s*Q+S*C*h-I*n*h-t*C*r+I*s*r)*N,A[6]=(S*o*Q-E*n*Q-S*C*e+I*n*e+E*C*r-I*o*r)*N,A[7]=(E*s*Q-t*o*Q+t*C*e-I*s*e-E*C*h+I*o*h)*N,A[8]=M*N,A[9]=(S*a*Q-t*w*Q-S*g*h+I*w*h+t*g*r-I*a*r)*N,A[10]=(E*w*Q-S*i*Q+S*g*e-I*w*e-E*g*r+I*i*r)*N,A[11]=(t*i*Q-E*a*Q-t*g*e+I*a*e+E*g*h-I*i*h)*N,A[12]=L*N,A[13]=(t*w*C-S*a*C+S*g*s-I*w*s-t*g*n+I*a*n)*N,A[14]=(S*i*C-E*w*C-S*g*o+I*w*o+E*g*n-I*i*n)*N,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*N,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,e=Q*E,t=Q*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,e=Q+Q,t=E+E,a=i+i,s=Q*e,h=Q*t,S=Q*a,w=E*t,n=E*a,r=i*a,l=o*e,c=o*t,M=o*a,L=g.x,K=g.y,N=g.z;return C[0]=(1-(w+r))*L,C[1]=(h+M)*L,C[2]=(S-c)*L,C[3]=0,C[4]=(h-M)*K,C[5]=(1-(s+r))*K,C[6]=(n+l)*K,C[7]=0,C[8]=(S+c)*N,C[9]=(n-l)*N,C[10]=(1-(s+w))*N,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=QB.set(C[0],C[1],C[2]).length();const E=QB.set(C[4],C[5],C[6]).length(),i=QB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],Sg.copy(this);const o=1/Q,e=1/E,t=1/i;return Sg.elements[0]*=o,Sg.elements[1]*=o,Sg.elements[2]*=o,Sg.elements[4]*=e,Sg.elements[5]*=e,Sg.elements[6]*=e,Sg.elements[8]*=t,Sg.elements[9]*=t,Sg.elements[10]*=t,I.setFromRotationMatrix(Sg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=fg){const o=this.elements,e=2*Q/(I-A),t=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let h,S;if(i===fg)h=-(E+Q)/(E-Q),S=-2*E*Q/(E-Q);else if(i===qQ)h=-E/(E-Q),S=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=fg){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-Q),s=(I+A)*e,h=(g+C)*t;let S,w;if(i===fg)S=(E+Q)*a,w=-2*a;else if(i===qQ)S=Q*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=w,o[14]=-S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const QB=new Y,Sg=new qA,Nh=new Y(0,0,0),Kh=new Y(1,1,1),tC=new Y,xQ=new Y,Cg=new Y,Oe=new qA,ve=new uI;class jI{constructor(A=0,I=0,g=0,C=jI.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],h=C[10];switch(I){case"XYZ":this._y=Math.asin(OI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,h),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-OI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,h),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(OI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-OI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,h),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(OI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,h));break;case"XZY":this._z=Math.asin(-OI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-t,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Oe.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Oe,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return ve.setFromEuler(this),this.setFromQuaternion(ve,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jI.DEFAULT_ORDER="XYZ";class _e{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Jh=0;const Ze=new Y,EB=new uI,Og=new qA,bQ=new Y,xB=new Y,Fh=new Y,Rh=new uI,We=new Y(1,0,0),Pe=new Y(0,1,0),je=new Y(0,0,1),Ve={type:"added"},ph={type:"removed"},iB={type:"childadded",child:null},ii={type:"childremoved",child:null};class oI extends kC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=hg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oI.DEFAULT_UP.clone();const A=new Y,I=new jI,g=new uI,C=new Y(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new qA},normalMatrix:{value:new uA}}),this.matrix=new qA,this.matrixWorld=new qA,this.matrixAutoUpdate=oI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _e,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return EB.setFromAxisAngle(A,I),this.quaternion.multiply(EB),this}rotateOnWorldAxis(A,I){return EB.setFromAxisAngle(A,I),this.quaternion.premultiply(EB),this}rotateX(A){return this.rotateOnAxis(We,A)}rotateY(A){return this.rotateOnAxis(Pe,A)}rotateZ(A){return this.rotateOnAxis(je,A)}translateOnAxis(A,I){return Ze.copy(A).applyQuaternion(this.quaternion),this.position.add(Ze.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(We,A)}translateY(A){return this.translateOnAxis(Pe,A)}translateZ(A){return this.translateOnAxis(je,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Og.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?bQ.copy(A):bQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),xB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Og.lookAt(xB,bQ,this.up):Og.lookAt(bQ,xB,this.up),this.quaternion.setFromRotationMatrix(Og),C&&(Og.extractRotation(C.matrixWorld),EB.setFromRotationMatrix(Og),this.quaternion.premultiply(EB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Ve),iB.child=A,this.dispatchEvent(iB),iB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(ph),ii.child=A,this.dispatchEvent(ii),ii.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Og.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Og.multiply(A.parent.matrixWorld)),A.applyMatrix4(Og),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Ve),iB.child=A,this.dispatchEvent(iB),iB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xB,A,Fh),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xB,Rh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),h=E(A.animations),S=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),h.length>0&&(g.animations=h),S.length>0&&(g.nodes=S)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}oI.DEFAULT_UP=new Y(0,1,0),oI.DEFAULT_MATRIX_AUTO_UPDATE=!0,oI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wg=new Y,vg=new Y,oi=new Y,_g=new Y,oB=new Y,eB=new Y,Xe=new Y,ei=new Y,ti=new Y,ai=new Y;class Mg{constructor(A=new Y,I=new Y,g=new Y){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),wg.subVectors(A,I),C.cross(wg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){wg.subVectors(C,I),vg.subVectors(g,I),oi.subVectors(A,I);const E=wg.dot(wg),i=wg.dot(vg),o=wg.dot(oi),e=vg.dot(vg),t=vg.dot(oi),a=E*e-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,h=(e*o-i*t)*s,S=(E*t-i*o)*s;return Q.set(1-h-S,S,h)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,_g)===null?!1:_g.x>=0&&_g.y>=0&&_g.x+_g.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,_g)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,_g.x),o.addScaledVector(E,_g.y),o.addScaledVector(i,_g.z),o)}static isFrontFacing(A,I,g,C){return wg.subVectors(g,I),vg.subVectors(A,I),wg.cross(vg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return wg.subVectors(this.c,this.b),vg.subVectors(this.a,this.b),wg.cross(vg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Mg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Mg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return Mg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return Mg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Mg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;oB.subVectors(C,g),eB.subVectors(Q,g),ei.subVectors(A,g);const o=oB.dot(ei),e=eB.dot(ei);if(o<=0&&e<=0)return I.copy(g);ti.subVectors(A,C);const t=oB.dot(ti),a=eB.dot(ti);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(oB,E);ai.subVectors(A,Q);const h=oB.dot(ai),S=eB.dot(ai);if(S>=0&&h<=S)return I.copy(Q);const w=h*e-o*S;if(w<=0&&e>=0&&S<=0)return i=e/(e-S),I.copy(g).addScaledVector(eB,i);const n=t*S-h*a;if(n<=0&&a-t>=0&&h-S>=0)return Xe.subVectors(Q,C),i=(a-t)/(a-t+(h-S)),I.copy(C).addScaledVector(Xe,i);const r=1/(n+w+s);return E=w*r,i=s*r,I.copy(g).addScaledVector(oB,E).addScaledVector(eB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const ze={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},aC={h:0,s:0,l:0},OQ={h:0,s:0,l:0};function si(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class NA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=bI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,AI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=AI.workingColorSpace){return this.r=A,this.g=I,this.b=g,AI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=AI.workingColorSpace){if(A=VE(A,1),I=OI(I,0,1),g=OI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=si(E,Q,A+1/3),this.g=si(E,Q,A),this.b=si(E,Q,A-1/3)}return AI.toWorkingColorSpace(this,C),this}setStyle(A,I=bI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=bI){const g=ze[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=AB(A.r),this.g=AB(A.g),this.b=AB(A.b),this}copyLinearToSRGB(A){return this.r=$E(A.r),this.g=$E(A.g),this.b=$E(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=bI){return AI.fromWorkingColorSpace(WI.copy(this),A),Math.round(OI(WI.r*255,0,255))*65536+Math.round(OI(WI.g*255,0,255))*256+Math.round(OI(WI.b*255,0,255))}getHexString(A=bI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=AI.workingColorSpace){AI.fromWorkingColorSpace(WI.copy(this),I);const g=WI.r,C=WI.g,Q=WI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=AI.workingColorSpace){return AI.fromWorkingColorSpace(WI.copy(this),I),A.r=WI.r,A.g=WI.g,A.b=WI.b,A}getStyle(A=bI){AI.fromWorkingColorSpace(WI.copy(this),A);const I=WI.r,g=WI.g,C=WI.b;return A!==bI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(aC),this.setHSL(aC.h+A,aC.s+I,aC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(aC),A.getHSL(OQ);const g=HB(aC.h,OQ.h,I),C=HB(aC.s,OQ.s,I),Q=HB(aC.l,OQ.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const WI=new NA;NA.NAMES=ze;let dh=0;class cg extends kC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=hg(),this.name="",this.type="Material",this.blending=OC,this.side=mg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=LE,this.blendDst=uE,this.blendEquation=GC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new NA(0,0,0),this.blendAlpha=0,this.depthFunc=yQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=de,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zC,this.stencilZFail=zC,this.stencilZPass=zC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==OC&&(g.blending=this.blending),this.side!==mg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==LE&&(g.blendSrc=this.blendSrc),this.blendDst!==uE&&(g.blendDst=this.blendDst),this.blendEquation!==GC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==yQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==de&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==zC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==zC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class sC extends cg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new NA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jI,this.combine=HE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Zg=qh();function qh(){const B=new ArrayBuffer(4),A=new Float32Array(B),I=new Uint32Array(B),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const Q=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Q[o]=e|t}for(let o=1024;o<2048;++o)Q[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:Q,exponentTable:E,offsetTable:i}}function Yh(B){Math.abs(B)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),B=OI(B,-65504,65504),Zg.floatView[0]=B;const A=Zg.uint32View[0],I=A>>23&511;return Zg.baseTable[I]+((A&8388607)>>Zg.shiftTable[I])}function Lh(B){const A=B>>10;return Zg.uint32View[0]=Zg.mantissaTable[Zg.offsetTable[A]+(B&1023)]+Zg.exponentTable[A],Zg.floatView[0]}const vQ={toHalfFloat:Yh,fromHalfFloat:Lh},kI=new Y,_Q=new pA;class RI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=jE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return zE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)_Q.fromBufferAttribute(this,I),_Q.applyMatrix3(A),this.setXY(I,_Q.x,_Q.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyMatrix3(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyMatrix4(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyNormalMatrix(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.transformDirection(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=rg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=CI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=rg(I,this.array)),I}setX(A,I){return this.normalized&&(I=CI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=rg(I,this.array)),I}setY(A,I){return this.normalized&&(I=CI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=rg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=CI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=rg(I,this.array)),I}setW(A,I){return this.normalized&&(I=CI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=CI(I,this.array),g=CI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=CI(I,this.array),g=CI(g,this.array),C=CI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=CI(I,this.array),g=CI(g,this.array),C=CI(C,this.array),Q=CI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==jE&&(A.usage=this.usage),A}}class $e extends RI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class At extends RI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class VI extends RI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let uh=0;const og=new qA,Di=new oI,tB=new Y,Bg=new Tg,bB=new Tg,HI=new Y;class XI extends kC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=hg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(ue(A)?At:$e)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new uA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return og.makeRotationFromQuaternion(A),this.applyMatrix4(og),this}rotateX(A){return og.makeRotationX(A),this.applyMatrix4(og),this}rotateY(A){return og.makeRotationY(A),this.applyMatrix4(og),this}rotateZ(A){return og.makeRotationZ(A),this.applyMatrix4(og),this}translate(A,I,g){return og.makeTranslation(A,I,g),this.applyMatrix4(og),this}scale(A,I,g){return og.makeScale(A,I,g),this.applyMatrix4(og),this}lookAt(A){return Di.lookAt(A),Di.updateMatrix(),this.applyMatrix4(Di.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tB).negate(),this.translate(tB.x,tB.y,tB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new VI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Bg.setFromBufferAttribute(Q),this.morphTargetsRelative?(HI.addVectors(this.boundingBox.min,Bg.min),this.boundingBox.expandByPoint(HI),HI.addVectors(this.boundingBox.max,Bg.max),this.boundingBox.expandByPoint(HI)):(this.boundingBox.expandByPoint(Bg.min),this.boundingBox.expandByPoint(Bg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ug);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(A){const g=this.boundingSphere.center;if(Bg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];bB.setFromBufferAttribute(i),this.morphTargetsRelative?(HI.addVectors(Bg.min,bB.min),Bg.expandByPoint(HI),HI.addVectors(Bg.max,bB.max),Bg.expandByPoint(HI)):(Bg.expandByPoint(bB.min),Bg.expandByPoint(bB.max))}Bg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)HI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(HI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)HI.fromBufferAttribute(i,e),o&&(tB.fromBufferAttribute(A,e),HI.add(tB)),C=Math.max(C,g.distanceToSquared(HI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new RI(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let d=0;d<g.count;d++)i[d]=new Y,o[d]=new Y;const e=new Y,t=new Y,a=new Y,s=new pA,h=new pA,S=new pA,w=new Y,n=new Y;function r(d,U,G){e.fromBufferAttribute(g,d),t.fromBufferAttribute(g,U),a.fromBufferAttribute(g,G),s.fromBufferAttribute(Q,d),h.fromBufferAttribute(Q,U),S.fromBufferAttribute(Q,G),t.sub(e),a.sub(e),h.sub(s),S.sub(s);const R=1/(h.x*S.y-S.x*h.y);isFinite(R)&&(w.copy(t).multiplyScalar(S.y).addScaledVector(a,-h.y).multiplyScalar(R),n.copy(a).multiplyScalar(h.x).addScaledVector(t,-S.x).multiplyScalar(R),i[d].add(w),i[U].add(w),i[G].add(w),o[d].add(n),o[U].add(n),o[G].add(n))}let l=this.groups;l.length===0&&(l=[{start:0,count:A.count}]);for(let d=0,U=l.length;d<U;++d){const G=l[d],R=G.start,T=G.count;for(let x=R,Z=R+T;x<Z;x+=3)r(A.getX(x+0),A.getX(x+1),A.getX(x+2))}const c=new Y,M=new Y,L=new Y,K=new Y;function N(d){L.fromBufferAttribute(C,d),K.copy(L);const U=i[d];c.copy(U),c.sub(L.multiplyScalar(L.dot(U))).normalize(),M.crossVectors(K,U);const G=M.dot(o[d])<0?-1:1;E.setXYZW(d,c.x,c.y,c.z,G)}for(let d=0,U=l.length;d<U;++d){const G=l[d],R=G.start,T=G.count;for(let x=R,Z=R+T;x<Z;x+=3)N(A.getX(x+0)),N(A.getX(x+1)),N(A.getX(x+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new RI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,h=g.count;s<h;s++)g.setXYZ(s,0,0,0);const C=new Y,Q=new Y,E=new Y,i=new Y,o=new Y,e=new Y,t=new Y,a=new Y;if(A)for(let s=0,h=A.count;s<h;s+=3){const S=A.getX(s+0),w=A.getX(s+1),n=A.getX(s+2);C.fromBufferAttribute(I,S),Q.fromBufferAttribute(I,w),E.fromBufferAttribute(I,n),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),i.fromBufferAttribute(g,S),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,n),i.add(t),o.add(t),e.add(t),g.setXYZ(S,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(n,e.x,e.y,e.z)}else for(let s=0,h=I.count;s<h;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)HI.fromBufferAttribute(A,I),HI.normalize(),A.setXYZ(I,HI.x,HI.y,HI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let h=0,S=0;for(let w=0,n=o.length;w<n;w++){i.isInterleavedBufferAttribute?h=o[w]*i.data.stride+i.offset:h=o[w]*t;for(let r=0;r<t;r++)s[S++]=e[h++]}return new RI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new XI,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const Q=this.morphAttributes;for(const i in Q){const o=[],e=Q[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],h=A(s,g);o.push(h)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const h=e[a];t.push(h.toJSON(A.data))}t.length>0&&(C[o]=t,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const Q=A.morphAttributes;for(const e in Q){const t=[],a=Q[e];for(let s=0,h=a.length;s<h;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const It=new qA,KC=new TQ,ZQ=new Ug,gt=new Y,aB=new Y,sB=new Y,DB=new Y,hi=new Y,WQ=new Y,PQ=new pA,jQ=new pA,VQ=new pA,Ct=new Y,Bt=new Y,Qt=new Y,XQ=new Y,zQ=new Y;class SI extends oI{constructor(A=new XI,I=new sC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){WQ.set(0,0,0);for(let o=0,e=Q.length;o<e;o++){const t=i[o],a=Q[o];t!==0&&(hi.fromBufferAttribute(a,A),E?WQ.addScaledVector(hi,t):WQ.addScaledVector(hi.sub(I),t))}I.add(WQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),ZQ.copy(g.boundingSphere),ZQ.applyMatrix4(Q),KC.copy(A.ray).recast(A.near),!(ZQ.containsPoint(KC.origin)===!1&&(KC.intersectSphere(ZQ,gt)===null||KC.origin.distanceToSquared(gt)>(A.far-A.near)**2))&&(It.copy(Q).invert(),KC.copy(A.ray).applyMatrix4(It),!(g.boundingBox!==null&&KC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,KC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,e=Q.attributes.uv,t=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,h=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const n=s[S],r=E[n.materialIndex],l=Math.max(n.start,h.start),c=Math.min(i.count,Math.min(n.start+n.count,h.start+h.count));for(let M=l,L=c;M<L;M+=3){const K=i.getX(M),N=i.getX(M+1),d=i.getX(M+2);C=$Q(this,r,A,g,e,t,a,K,N,d),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const S=Math.max(0,h.start),w=Math.min(i.count,h.start+h.count);for(let n=S,r=w;n<r;n+=3){const l=i.getX(n),c=i.getX(n+1),M=i.getX(n+2);C=$Q(this,E,A,g,e,t,a,l,c,M),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const n=s[S],r=E[n.materialIndex],l=Math.max(n.start,h.start),c=Math.min(o.count,Math.min(n.start+n.count,h.start+h.count));for(let M=l,L=c;M<L;M+=3){const K=M,N=M+1,d=M+2;C=$Q(this,r,A,g,e,t,a,K,N,d),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const S=Math.max(0,h.start),w=Math.min(o.count,h.start+h.count);for(let n=S,r=w;n<r;n+=3){const l=n,c=n+1,M=n+2;C=$Q(this,E,A,g,e,t,a,l,c,M),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}}}function Hh(B,A,I,g,C,Q,E,i){let o;if(A.side===Ig?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===mg,i),o===null)return null;zQ.copy(i),zQ.applyMatrix4(B.matrixWorld);const e=I.ray.origin.distanceTo(zQ);return e<I.near||e>I.far?null:{distance:e,point:zQ.clone(),object:B}}function $Q(B,A,I,g,C,Q,E,i,o,e){B.getVertexPosition(i,aB),B.getVertexPosition(o,sB),B.getVertexPosition(e,DB);const t=Hh(B,A,I,g,aB,sB,DB,XQ);if(t){C&&(PQ.fromBufferAttribute(C,i),jQ.fromBufferAttribute(C,o),VQ.fromBufferAttribute(C,e),t.uv=Mg.getInterpolation(XQ,aB,sB,DB,PQ,jQ,VQ,new pA)),Q&&(PQ.fromBufferAttribute(Q,i),jQ.fromBufferAttribute(Q,o),VQ.fromBufferAttribute(Q,e),t.uv1=Mg.getInterpolation(XQ,aB,sB,DB,PQ,jQ,VQ,new pA)),E&&(Ct.fromBufferAttribute(E,i),Bt.fromBufferAttribute(E,o),Qt.fromBufferAttribute(E,e),t.normal=Mg.getInterpolation(XQ,aB,sB,DB,Ct,Bt,Qt,new Y),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const a={a:i,b:o,c:e,normal:new Y,materialIndex:0};Mg.getNormal(aB,sB,DB,a.normal),t.face=a}return t}class hB extends XI{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,h=0;S("z","y","x",-1,-1,g,I,A,E,Q,0),S("z","y","x",1,-1,g,I,-A,E,Q,1),S("x","z","y",1,1,A,g,I,C,E,2),S("x","z","y",1,-1,A,g,-I,C,E,3),S("x","y","z",1,-1,A,I,g,C,Q,4),S("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new VI(e,3)),this.setAttribute("normal",new VI(t,3)),this.setAttribute("uv",new VI(a,2));function S(w,n,r,l,c,M,L,K,N,d,U){const G=M/N,R=L/d,T=M/2,x=L/2,Z=K/2,V=N+1,_=d+1;let z=0,W=0;const iA=new Y;for(let cA=0;cA<_;cA++){const FA=cA*R-x;for(let VA=0;VA<V;VA++){const EI=VA*G-T;iA[w]=EI*l,iA[n]=FA*c,iA[r]=Z,e.push(iA.x,iA.y,iA.z),iA[w]=0,iA[n]=0,iA[r]=K>0?1:-1,t.push(iA.x,iA.y,iA.z),a.push(VA/N),a.push(1-cA/d),z+=1}}for(let cA=0;cA<d;cA++)for(let FA=0;FA<N;FA++){const VA=s+FA+V*cA,EI=s+FA+V*(cA+1),j=s+(FA+1)+V*(cA+1),CA=s+(FA+1)+V*cA;o.push(VA,EI,CA),o.push(EI,j,CA),W+=6}i.addGroup(h,W,U),h+=W,s+=z}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new hB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function rB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function zI(B){const A={};for(let I=0;I<B.length;I++){const g=rB(B[I]);for(const C in g)A[C]=g[C]}return A}function mh(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function Et(B){const A=B.getRenderTarget();return A===null?B.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:AI.workingColorSpace}const fh={clone:rB,merge:zI};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wg extends cg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=rB(A.uniforms),this.uniformsGroups=mh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class it extends oI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qA,this.projectionMatrix=new qA,this.projectionMatrixInverse=new qA,this.coordinateSystem=fg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const DC=new Y,ot=new pA,et=new pA;class $I extends it{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=$C*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(uB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return $C*2*Math.atan(Math.tan(uB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){DC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(DC.x,DC.y).multiplyScalar(-A/DC.z),DC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(DC.x,DC.y).multiplyScalar(-A/DC.z)}getViewSize(A,I){return this.getViewBounds(A,ot,et),I.subVectors(et,ot)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(uB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const nB=-90,SB=1;class bh extends oI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new $I(nB,SB,A,I);C.layers=this.layers,this.add(C);const Q=new $I(nB,SB,A,I);Q.layers=this.layers,this.add(Q);const E=new $I(nB,SB,A,I);E.layers=this.layers,this.add(E);const i=new $I(nB,SB,A,I);i.layers=this.layers,this.add(i);const o=new $I(nB,SB,A,I);o.layers=this.layers,this.add(o);const e=new $I(nB,SB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const e of I)this.remove(e);if(A===fg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===qQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,e,t]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),h=A.getActiveMipmapLevel(),S=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,s,h),A.xr.enabled=S,g.texture.needsPMREMUpdate=!0}}class tt extends FI{constructor(A,I,g,C,Q,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:vC,super(A,I,g,C,Q,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Oh extends UC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new tt(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:LI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new hB(5,5,5),Q=new Wg({name:"CubemapFromEquirect",uniforms:rB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Ig,blending:CC});Q.uniforms.tEquirect.value=I;const E=new SI(C,Q),i=I.minFilter;return I.minFilter===yg&&(I.minFilter=LI),new bh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const ri=new Y,vh=new Y,_h=new uA;class JC{constructor(A=new Y(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=ri.subVectors(g,I).cross(vh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(ri),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||_h.getNormalMatrix(A),C=this.coplanarPoint(ri).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const FC=new Ug,AE=new Y;class ni{constructor(A=new JC,I=new JC,g=new JC,C=new JC,Q=new JC,E=new JC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=fg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],h=C[8],S=C[9],w=C[10],n=C[11],r=C[12],l=C[13],c=C[14],M=C[15];if(g[0].setComponents(o-Q,s-e,n-h,M-r).normalize(),g[1].setComponents(o+Q,s+e,n+h,M+r).normalize(),g[2].setComponents(o+E,s+t,n+S,M+l).normalize(),g[3].setComponents(o-E,s-t,n-S,M-l).normalize(),g[4].setComponents(o-i,s-a,n-w,M-c).normalize(),I===fg)g[5].setComponents(o+i,s+a,n+w,M+c).normalize();else if(I===qQ)g[5].setComponents(i,a,w,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),FC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),FC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(FC)}intersectsSprite(A){return FC.center.set(0,0,0),FC.radius=.7071067811865476,FC.applyMatrix4(A.matrixWorld),this.intersectsSphere(FC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(AE.x=C.normal.x>0?A.max.x:A.min.x,AE.y=C.normal.y>0?A.max.y:A.min.y,AE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(AE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function at(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Zh(B){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,s=B.createBuffer();B.bindBuffer(o,s),B.bufferData(o,e,t),i.onUploadCallback();let h;if(e instanceof Float32Array)h=B.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?h=B.HALF_FLOAT:h=B.UNSIGNED_SHORT;else if(e instanceof Int16Array)h=B.SHORT;else if(e instanceof Uint32Array)h=B.UNSIGNED_INT;else if(e instanceof Int32Array)h=B.INT;else if(e instanceof Int8Array)h=B.BYTE;else if(e instanceof Uint8Array)h=B.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)h=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:s,type:h,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o._updateRange,s=o.updateRanges;if(B.bindBuffer(e,i),a.count===-1&&s.length===0&&B.bufferSubData(e,0,t),s.length!==0){for(let h=0,S=s.length;h<S;h++){const w=s[h];B.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}a.count!==-1&&(B.bufferSubData(e,a.offset*t.BYTES_PER_ELEMENT,t,a.offset,a.count),a.count=-1),o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(B.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}i.isInterleavedBufferAttribute&&(i=i.data);const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:Q,update:E}}class IE extends XI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,h=[],S=[],w=[],n=[];for(let r=0;r<t;r++){const l=r*s-E;for(let c=0;c<e;c++){const M=c*a-Q;S.push(M,-l,0),w.push(0,0,1),n.push(c/i),n.push(1-r/o)}}for(let r=0;r<o;r++)for(let l=0;l<i;l++){const c=l+e*r,M=l+e*(r+1),L=l+1+e*(r+1),K=l+1+e*r;h.push(c,M,K),h.push(M,L,K)}this.setIndex(h),this.setAttribute("position",new VI(S,3)),this.setAttribute("normal",new VI(w,3)),this.setAttribute("uv",new VI(n,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new IE(A.width,A.height,A.widthSegments,A.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ph=`#ifdef USE_ALPHAHASH
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
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
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
#endif`,Ar=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ir=`#ifdef USE_BATCHING
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
#endif`,gr=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Br=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qr=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Er=`#ifdef USE_IRIDESCENCE
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
#endif`,ir=`#ifdef USE_BUMPMAP
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
#endif`,or=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,er=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ar=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rr=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nr=`#define PI 3.141592653589793
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
} // validated`,Sr=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wr=`vec3 transformedNormal = objectNormal;
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
#endif`,cr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gr=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yr=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kr="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ur=`
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
}`,Mr=`#ifdef USE_ENVMAP
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
#endif`,Nr=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kr=`#ifdef USE_ENVMAP
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
#endif`,Jr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fr=`#ifdef USE_ENVMAP
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
#endif`,Rr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dr=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qr=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yr=`#ifdef USE_GRADIENTMAP
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
}`,Lr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ur=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mr=`uniform bool receiveShadow;
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
#endif`,fr=`#ifdef USE_ENVMAP
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
#endif`,Tr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,br=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Or=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vr=`PhysicalMaterial material;
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
#endif`,_r=`struct PhysicalMaterial {
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
}`,Zr=`
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
#endif`,Wr=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jr=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vr=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xr=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zr=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$r=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,An=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,In=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gn=`#if defined( USE_POINTS_UV )
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
#endif`,Cn=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bn=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qn=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,En=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,on=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,en=`#ifdef USE_MORPHTARGETS
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
#endif`,tn=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,an=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sn=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rn=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nn=`#ifdef USE_NORMALMAP
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
#endif`,Sn=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wn=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cn=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ln=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gn=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yn=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kn=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Un=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mn=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nn=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kn=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jn=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fn=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rn=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pn=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dn=`float getShadowMask() {
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
}`,qn=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yn=`#ifdef USE_SKINNING
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
#endif`,Ln=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,un=`#ifdef USE_SKINNING
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
#endif`,Hn=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fn=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tn=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xn=`#ifdef USE_TRANSMISSION
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
#endif`,bn=`#ifdef USE_TRANSMISSION
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
#endif`,On=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_n=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zn=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wn=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pn=`uniform sampler2D t2D;
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
}`,jn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vn=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zn=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$n=`#include <common>
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
}`,AS=`#if DEPTH_PACKING == 3200
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
}`,IS=`#define DISTANCE
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
}`,gS=`#define DISTANCE
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,iS=`#include <common>
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
}`,oS=`uniform vec3 diffuse;
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
}`,eS=`#define LAMBERT
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
}`,tS=`#define LAMBERT
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
}`,aS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,hS=`#define NORMAL
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
}`,rS=`#define PHONG
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
}`,nS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,wS=`#define STANDARD
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
}`,cS=`#define TOON
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
}`,lS=`#define TOON
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
}`,GS=`uniform float size;
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
}`,yS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,US=`uniform vec3 color;
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
}`,MS=`uniform float rotation;
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
}`,NS=`uniform vec3 diffuse;
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
}`,HA={alphahash_fragment:Wh,alphahash_pars_fragment:Ph,alphamap_fragment:jh,alphamap_pars_fragment:Vh,alphatest_fragment:Xh,alphatest_pars_fragment:zh,aomap_fragment:$h,aomap_pars_fragment:Ar,batching_pars_vertex:Ir,batching_vertex:gr,begin_vertex:Cr,beginnormal_vertex:Br,bsdfs:Qr,iridescence_fragment:Er,bumpmap_pars_fragment:ir,clipping_planes_fragment:or,clipping_planes_pars_fragment:er,clipping_planes_pars_vertex:tr,clipping_planes_vertex:ar,color_fragment:sr,color_pars_fragment:Dr,color_pars_vertex:hr,color_vertex:rr,common:nr,cube_uv_reflection_fragment:Sr,defaultnormal_vertex:wr,displacementmap_pars_vertex:cr,displacementmap_vertex:lr,emissivemap_fragment:Gr,emissivemap_pars_fragment:yr,colorspace_fragment:kr,colorspace_pars_fragment:Ur,envmap_fragment:Mr,envmap_common_pars_fragment:Nr,envmap_pars_fragment:Kr,envmap_pars_vertex:Jr,envmap_physical_pars_fragment:fr,envmap_vertex:Fr,fog_vertex:Rr,fog_pars_vertex:pr,fog_fragment:dr,fog_pars_fragment:qr,gradientmap_pars_fragment:Yr,lightmap_pars_fragment:Lr,lights_lambert_fragment:ur,lights_lambert_pars_fragment:Hr,lights_pars_begin:mr,lights_toon_fragment:Tr,lights_toon_pars_fragment:xr,lights_phong_fragment:br,lights_phong_pars_fragment:Or,lights_physical_fragment:vr,lights_physical_pars_fragment:_r,lights_fragment_begin:Zr,lights_fragment_maps:Wr,lights_fragment_end:Pr,logdepthbuf_fragment:jr,logdepthbuf_pars_fragment:Vr,logdepthbuf_pars_vertex:Xr,logdepthbuf_vertex:zr,map_fragment:$r,map_pars_fragment:An,map_particle_fragment:In,map_particle_pars_fragment:gn,metalnessmap_fragment:Cn,metalnessmap_pars_fragment:Bn,morphinstance_vertex:Qn,morphcolor_vertex:En,morphnormal_vertex:on,morphtarget_pars_vertex:en,morphtarget_vertex:tn,normal_fragment_begin:an,normal_fragment_maps:sn,normal_pars_fragment:Dn,normal_pars_vertex:hn,normal_vertex:rn,normalmap_pars_fragment:nn,clearcoat_normal_fragment_begin:Sn,clearcoat_normal_fragment_maps:wn,clearcoat_pars_fragment:cn,iridescence_pars_fragment:ln,opaque_fragment:Gn,packing:yn,premultiplied_alpha_fragment:kn,project_vertex:Un,dithering_fragment:Mn,dithering_pars_fragment:Nn,roughnessmap_fragment:Kn,roughnessmap_pars_fragment:Jn,shadowmap_pars_fragment:Fn,shadowmap_pars_vertex:Rn,shadowmap_vertex:pn,shadowmask_pars_fragment:dn,skinbase_vertex:qn,skinning_pars_vertex:Yn,skinning_vertex:Ln,skinnormal_vertex:un,specularmap_fragment:Hn,specularmap_pars_fragment:mn,tonemapping_fragment:fn,tonemapping_pars_fragment:Tn,transmission_fragment:xn,transmission_pars_fragment:bn,uv_pars_fragment:On,uv_pars_vertex:vn,uv_vertex:_n,worldpos_vertex:Zn,background_vert:Wn,background_frag:Pn,backgroundCube_vert:jn,backgroundCube_frag:Vn,cube_vert:Xn,cube_frag:zn,depth_vert:$n,depth_frag:AS,distanceRGBA_vert:IS,distanceRGBA_frag:gS,equirect_vert:CS,equirect_frag:BS,linedashed_vert:QS,linedashed_frag:ES,meshbasic_vert:iS,meshbasic_frag:oS,meshlambert_vert:eS,meshlambert_frag:tS,meshmatcap_vert:aS,meshmatcap_frag:sS,meshnormal_vert:DS,meshnormal_frag:hS,meshphong_vert:rS,meshphong_frag:nS,meshphysical_vert:SS,meshphysical_frag:wS,meshtoon_vert:cS,meshtoon_frag:lS,points_vert:GS,points_frag:yS,shadow_vert:kS,shadow_frag:US,sprite_vert:MS,sprite_frag:NS},EA={common:{diffuse:{value:new NA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new uA},alphaMap:{value:null},alphaMapTransform:{value:new uA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new uA}},envmap:{envMap:{value:null},envMapRotation:{value:new uA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new uA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new uA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new uA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new uA},normalScale:{value:new pA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new uA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new uA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new uA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new uA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new NA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new NA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new uA},alphaTest:{value:0},uvTransform:{value:new uA}},sprite:{diffuse:{value:new NA(16777215)},opacity:{value:1},center:{value:new pA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new uA},alphaMap:{value:null},alphaMapTransform:{value:new uA},alphaTest:{value:0}}},Ng={basic:{uniforms:zI([EA.common,EA.specularmap,EA.envmap,EA.aomap,EA.lightmap,EA.fog]),vertexShader:HA.meshbasic_vert,fragmentShader:HA.meshbasic_frag},lambert:{uniforms:zI([EA.common,EA.specularmap,EA.envmap,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.fog,EA.lights,{emissive:{value:new NA(0)}}]),vertexShader:HA.meshlambert_vert,fragmentShader:HA.meshlambert_frag},phong:{uniforms:zI([EA.common,EA.specularmap,EA.envmap,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.fog,EA.lights,{emissive:{value:new NA(0)},specular:{value:new NA(1118481)},shininess:{value:30}}]),vertexShader:HA.meshphong_vert,fragmentShader:HA.meshphong_frag},standard:{uniforms:zI([EA.common,EA.envmap,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.roughnessmap,EA.metalnessmap,EA.fog,EA.lights,{emissive:{value:new NA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:HA.meshphysical_vert,fragmentShader:HA.meshphysical_frag},toon:{uniforms:zI([EA.common,EA.aomap,EA.lightmap,EA.emissivemap,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.gradientmap,EA.fog,EA.lights,{emissive:{value:new NA(0)}}]),vertexShader:HA.meshtoon_vert,fragmentShader:HA.meshtoon_frag},matcap:{uniforms:zI([EA.common,EA.bumpmap,EA.normalmap,EA.displacementmap,EA.fog,{matcap:{value:null}}]),vertexShader:HA.meshmatcap_vert,fragmentShader:HA.meshmatcap_frag},points:{uniforms:zI([EA.points,EA.fog]),vertexShader:HA.points_vert,fragmentShader:HA.points_frag},dashed:{uniforms:zI([EA.common,EA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:HA.linedashed_vert,fragmentShader:HA.linedashed_frag},depth:{uniforms:zI([EA.common,EA.displacementmap]),vertexShader:HA.depth_vert,fragmentShader:HA.depth_frag},normal:{uniforms:zI([EA.common,EA.bumpmap,EA.normalmap,EA.displacementmap,{opacity:{value:1}}]),vertexShader:HA.meshnormal_vert,fragmentShader:HA.meshnormal_frag},sprite:{uniforms:zI([EA.sprite,EA.fog]),vertexShader:HA.sprite_vert,fragmentShader:HA.sprite_frag},background:{uniforms:{uvTransform:{value:new uA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:HA.background_vert,fragmentShader:HA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new uA}},vertexShader:HA.backgroundCube_vert,fragmentShader:HA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:HA.cube_vert,fragmentShader:HA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:HA.equirect_vert,fragmentShader:HA.equirect_frag},distanceRGBA:{uniforms:zI([EA.common,EA.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:HA.distanceRGBA_vert,fragmentShader:HA.distanceRGBA_frag},shadow:{uniforms:zI([EA.lights,EA.fog,{color:{value:new NA(0)},opacity:{value:1}}]),vertexShader:HA.shadow_vert,fragmentShader:HA.shadow_frag}};Ng.physical={uniforms:zI([Ng.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new uA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new uA},clearcoatNormalScale:{value:new pA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new uA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new uA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new uA},sheen:{value:0},sheenColor:{value:new NA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new uA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new uA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new uA},transmissionSamplerSize:{value:new pA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new uA},attenuationDistance:{value:0},attenuationColor:{value:new NA(0)},specularColor:{value:new NA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new uA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new uA},anisotropyVector:{value:new pA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new uA}}]),vertexShader:HA.meshphysical_vert,fragmentShader:HA.meshphysical_frag};const gE={r:0,b:0,g:0},RC=new jI,KS=new qA;function JS(B,A,I,g,C,Q,E){const i=new NA(0);let o=Q===!0?0:1,e,t,a=null,s=0,h=null;function S(l){let c=l.isScene===!0?l.background:null;return c&&c.isTexture&&(c=(l.backgroundBlurriness>0?I:A).get(c)),c}function w(l){let c=!1;const M=S(l);M===null?r(i,o):M&&M.isColor&&(r(M,1),c=!0);const L=B.xr.getEnvironmentBlendMode();L==="additive"?g.buffers.color.setClear(0,0,0,1,E):L==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||c)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil))}function n(l,c){const M=S(c);M&&(M.isCubeTexture||M.mapping===UQ)?(t===void 0&&(t=new SI(new hB(1,1,1),new Wg({name:"BackgroundCubeMaterial",uniforms:rB(Ng.backgroundCube.uniforms),vertexShader:Ng.backgroundCube.vertexShader,fragmentShader:Ng.backgroundCube.fragmentShader,side:Ig,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(L,K,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),RC.copy(c.backgroundRotation),RC.x*=-1,RC.y*=-1,RC.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(RC.y*=-1,RC.z*=-1),t.material.uniforms.envMap.value=M,t.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(RC)),t.material.toneMapped=AI.getTransfer(M.colorSpace)!==aI,(a!==M||s!==M.version||h!==B.toneMapping)&&(t.material.needsUpdate=!0,a=M,s=M.version,h=B.toneMapping),t.layers.enableAll(),l.unshift(t,t.geometry,t.material,0,0,null)):M&&M.isTexture&&(e===void 0&&(e=new SI(new IE(2,2),new Wg({name:"BackgroundMaterial",uniforms:rB(Ng.background.uniforms),vertexShader:Ng.background.vertexShader,fragmentShader:Ng.background.fragmentShader,side:mg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=M,e.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,e.material.toneMapped=AI.getTransfer(M.colorSpace)!==aI,M.matrixAutoUpdate===!0&&M.updateMatrix(),e.material.uniforms.uvTransform.value.copy(M.matrix),(a!==M||s!==M.version||h!==B.toneMapping)&&(e.material.needsUpdate=!0,a=M,s=M.version,h=B.toneMapping),e.layers.enableAll(),l.unshift(e,e.geometry,e.material,0,0,null))}function r(l,c){l.getRGB(gE,Et(B)),g.buffers.color.setClear(gE.r,gE.g,gE.b,c,E)}return{getClearColor:function(){return i},setClearColor:function(l,c=1){i.set(l),o=c,r(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(l){o=l,r(i,o)},render:w,addToRenderList:n}}function FS(B,A){const I=B.getParameter(B.MAX_VERTEX_ATTRIBS),g={},C=s(null);let Q=C,E=!1;function i(G,R,T,x,Z){let V=!1;const _=a(x,T,R);Q!==_&&(Q=_,e(Q.object)),V=h(G,x,T,Z),V&&S(G,x,T,Z),Z!==null&&A.update(Z,B.ELEMENT_ARRAY_BUFFER),(V||E)&&(E=!1,M(G,R,T,x),Z!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,A.get(Z).buffer))}function o(){return B.createVertexArray()}function e(G){return B.bindVertexArray(G)}function t(G){return B.deleteVertexArray(G)}function a(G,R,T){const x=T.wireframe===!0;let Z=g[G.id];Z===void 0&&(Z={},g[G.id]=Z);let V=Z[R.id];V===void 0&&(V={},Z[R.id]=V);let _=V[x];return _===void 0&&(_=s(o()),V[x]=_),_}function s(G){const R=[],T=[],x=[];for(let Z=0;Z<I;Z++)R[Z]=0,T[Z]=0,x[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:T,attributeDivisors:x,object:G,attributes:{},index:null}}function h(G,R,T,x){const Z=Q.attributes,V=R.attributes;let _=0;const z=T.getAttributes();for(const W in z)if(z[W].location>=0){const iA=Z[W];let cA=V[W];if(cA===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(cA=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(cA=G.instanceColor)),iA===void 0||iA.attribute!==cA||cA&&iA.data!==cA.data)return!0;_++}return Q.attributesNum!==_||Q.index!==x}function S(G,R,T,x){const Z={},V=R.attributes;let _=0;const z=T.getAttributes();for(const W in z)if(z[W].location>=0){let iA=V[W];iA===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(iA=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(iA=G.instanceColor));const cA={};cA.attribute=iA,iA&&iA.data&&(cA.data=iA.data),Z[W]=cA,_++}Q.attributes=Z,Q.attributesNum=_,Q.index=x}function w(){const G=Q.newAttributes;for(let R=0,T=G.length;R<T;R++)G[R]=0}function n(G){r(G,0)}function r(G,R){const T=Q.newAttributes,x=Q.enabledAttributes,Z=Q.attributeDivisors;T[G]=1,x[G]===0&&(B.enableVertexAttribArray(G),x[G]=1),Z[G]!==R&&(B.vertexAttribDivisor(G,R),Z[G]=R)}function l(){const G=Q.newAttributes,R=Q.enabledAttributes;for(let T=0,x=R.length;T<x;T++)R[T]!==G[T]&&(B.disableVertexAttribArray(T),R[T]=0)}function c(G,R,T,x,Z,V,_){_===!0?B.vertexAttribIPointer(G,R,T,Z,V):B.vertexAttribPointer(G,R,T,x,Z,V)}function M(G,R,T,x){w();const Z=x.attributes,V=T.getAttributes(),_=R.defaultAttributeValues;for(const z in V){const W=V[z];if(W.location>=0){let iA=Z[z];if(iA===void 0&&(z==="instanceMatrix"&&G.instanceMatrix&&(iA=G.instanceMatrix),z==="instanceColor"&&G.instanceColor&&(iA=G.instanceColor)),iA!==void 0){const cA=iA.normalized,FA=iA.itemSize,VA=A.get(iA);if(VA===void 0)continue;const EI=VA.buffer,j=VA.type,CA=VA.bytesPerElement,nA=j===B.INT||j===B.UNSIGNED_INT||iA.gpuType===Xo;if(iA.isInterleavedBufferAttribute){const eA=iA.data,vA=eA.stride,TA=iA.offset;if(eA.isInstancedInterleavedBuffer){for(let zA=0;zA<W.locationSize;zA++)r(W.location+zA,eA.meshPerAttribute);G.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=eA.meshPerAttribute*eA.count)}else for(let zA=0;zA<W.locationSize;zA++)n(W.location+zA);B.bindBuffer(B.ARRAY_BUFFER,EI);for(let zA=0;zA<W.locationSize;zA++)c(W.location+zA,FA/W.locationSize,j,cA,vA*CA,(TA+FA/W.locationSize*zA)*CA,nA)}else{if(iA.isInstancedBufferAttribute){for(let eA=0;eA<W.locationSize;eA++)r(W.location+eA,iA.meshPerAttribute);G.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=iA.meshPerAttribute*iA.count)}else for(let eA=0;eA<W.locationSize;eA++)n(W.location+eA);B.bindBuffer(B.ARRAY_BUFFER,EI);for(let eA=0;eA<W.locationSize;eA++)c(W.location+eA,FA/W.locationSize,j,cA,FA*CA,FA/W.locationSize*eA*CA,nA)}}else if(_!==void 0){const cA=_[z];if(cA!==void 0)switch(cA.length){case 2:B.vertexAttrib2fv(W.location,cA);break;case 3:B.vertexAttrib3fv(W.location,cA);break;case 4:B.vertexAttrib4fv(W.location,cA);break;default:B.vertexAttrib1fv(W.location,cA)}}}}l()}function L(){d();for(const G in g){const R=g[G];for(const T in R){const x=R[T];for(const Z in x)t(x[Z].object),delete x[Z];delete R[T]}delete g[G]}}function K(G){if(g[G.id]===void 0)return;const R=g[G.id];for(const T in R){const x=R[T];for(const Z in x)t(x[Z].object),delete x[Z];delete R[T]}delete g[G.id]}function N(G){for(const R in g){const T=g[R];if(T[G.id]===void 0)continue;const x=T[G.id];for(const Z in x)t(x[Z].object),delete x[Z];delete T[G.id]}}function d(){U(),E=!0,Q!==C&&(Q=C,e(Q.object))}function U(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:d,resetDefaultState:U,dispose:L,releaseStatesOfGeometry:K,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:n,disableUnusedAttributes:l}}function RS(B,A,I){let g;function C(e){g=e}function Q(e,t){B.drawArrays(g,e,t),I.update(t,g,1)}function E(e,t,a){a!==0&&(B.drawArraysInstanced(g,e,t,a),I.update(t,g,a))}function i(e,t,a){if(a===0)return;const s=A.get("WEBGL_multi_draw");if(s===null)for(let h=0;h<a;h++)this.render(e[h],t[h]);else{s.multiDrawArraysWEBGL(g,e,0,t,0,a);let h=0;for(let S=0;S<a;S++)h+=t[S];I.update(h,g,1)}}function o(e,t,a,s){if(a===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let S=0;S<e.length;S++)E(e[S],t[S],s[S]);else{h.multiDrawArraysInstancedWEBGL(g,e,0,t,0,s,0,a);let S=0;for(let w=0;w<a;w++)S+=t[w];for(let w=0;w<s.length;w++)I.update(S,g,s[w])}}this.setMode=C,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function pS(B,A,I,g){let C;function Q(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const K=A.get("EXT_texture_filter_anisotropic");C=B.getParameter(K.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(K){return!(K!==Dg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(K){const N=K===QC&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(K!==kg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&K!==gg&&!N)}function o(K){if(K==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";K="mediump"}return K==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let e=I.precision!==void 0?I.precision:"highp";const t=o(e);t!==e&&(console.warn("THREE.WebGLRenderer:",e,"not supported, using",t,"instead."),e=t);const a=I.logarithmicDepthBuffer===!0,s=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),h=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=B.getParameter(B.MAX_TEXTURE_SIZE),w=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),n=B.getParameter(B.MAX_VERTEX_ATTRIBS),r=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),l=B.getParameter(B.MAX_VARYING_VECTORS),c=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,L=B.getParameter(B.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:e,logarithmicDepthBuffer:a,maxTextures:s,maxVertexTextures:h,maxTextureSize:S,maxCubemapSize:w,maxAttributes:n,maxVertexUniforms:r,maxVaryings:l,maxFragmentUniforms:c,vertexTextures:M,maxSamples:L}}function dS(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new JC,i=new uA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const h=a.length!==0||s||g!==0||C;return C=s,g=a.length,h},this.beginShadows=function(){Q=!0,t(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,h){const S=a.clippingPlanes,w=a.clipIntersection,n=a.clipShadows,r=B.get(a);if(!C||S===null||S.length===0||Q&&!n)Q?t(null):e();else{const l=Q?0:g,c=l*4;let M=r.clippingState||null;o.value=M,M=t(S,s,c,h);for(let L=0;L!==c;++L)M[L]=I[L];r.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=l}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,h,S){const w=a!==null?a.length:0;let n=null;if(w!==0){if(n=o.value,S!==!0||n===null){const r=h+w*4,l=s.matrixWorldInverse;i.getNormalMatrix(l),(n===null||n.length<r)&&(n=new Float32Array(r));for(let c=0,M=h;c!==w;++c,M+=4)E.copy(a[c]).applyMatrix4(l,i),E.normal.toArray(n,M),n[M+3]=E.constant}o.value=n,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,n}}function qS(B){let A=new WeakMap;function I(E,i){return i===kQ?E.mapping=vC:i===mE&&(E.mapping=_C),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===kQ||i===mE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new Oh(o.height);return e.fromEquirectangularTexture(B,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class Si extends it{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const wB=4,st=[.125,.215,.35,.446,.526,.582],pC=20,wi=new Si,Dt=new NA;let ci=null,li=0,Gi=0,yi=!1;const dC=(1+Math.sqrt(5))/2,cB=1/dC,ht=[new Y(-dC,cB,0),new Y(dC,cB,0),new Y(-cB,0,dC),new Y(cB,0,dC),new Y(0,dC,-cB),new Y(0,dC,cB),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class rt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){ci=this._renderer.getRenderTarget(),li=this._renderer.getActiveCubeFace(),Gi=this._renderer.getActiveMipmapLevel(),yi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=St(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ci,li,Gi),this._renderer.xr.enabled=yi,A.scissorTest=!1,CE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===vC||A.mapping===_C?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ci=this._renderer.getRenderTarget(),li=this._renderer.getActiveCubeFace(),Gi=this._renderer.getActiveMipmapLevel(),yi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:LI,minFilter:LI,generateMipmaps:!1,type:QC,format:Dg,colorSpace:JI,depthBuffer:!1},C=nt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YS(Q)),this._blurMaterial=LS(Q,A,I)}return C}_compileMaterial(A){const I=new SI(this._lodPlanes[0],A);this._renderer.compile(I,wi)}_sceneToCubeUV(A,I,g,C){const Q=new $I(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(Dt),o.toneMapping=BC,o.autoClear=!1;const a=new sC({name:"PMREM.Background",side:Ig,depthWrite:!1,depthTest:!1}),s=new SI(new hB,a);let h=!1;const S=A.background;S?S.isColor&&(a.color.copy(S),A.background=null,h=!0):(a.color.copy(Dt),h=!0);for(let w=0;w<6;w++){const n=w%3;n===0?(Q.up.set(0,E[w],0),Q.lookAt(i[w],0,0)):n===1?(Q.up.set(0,0,E[w]),Q.lookAt(0,i[w],0)):(Q.up.set(0,E[w],0),Q.lookAt(0,0,i[w]));const r=this._cubeSize;CE(C,n*r,w>2?r:0,r,r),o.setRenderTarget(C),h&&o.render(s,Q),o.render(A,Q)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=S}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===vC||A.mapping===_C;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=wt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=St());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new SI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;CE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,wi)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let Q=1;Q<C;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=ht[(C-Q-1)%ht.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new SI(this._lodPlanes[C],e),s=e.uniforms,h=this._sizeLods[g]-1,S=isFinite(Q)?Math.PI/(2*h):2*Math.PI/(2*pC-1),w=Q/S,n=isFinite(Q)?1+Math.floor(t*w):pC;n>pC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${n} samples when the maximum is set to ${pC}`);const r=[];let l=0;for(let N=0;N<pC;++N){const d=N/w,U=Math.exp(-d*d/2);r.push(U),N===0?l+=U:N<n&&(l+=2*U)}for(let N=0;N<r.length;N++)r[N]=r[N]/l;s.envMap.value=A.texture,s.samples.value=n,s.weights.value=r,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:c}=this;s.dTheta.value=S,s.mipInt.value=c-g;const M=this._sizeLods[C],L=3*M*(C>c-wB?C-c+wB:0),K=4*(this._cubeSize-M);CE(I,L,K,3*M,2*M),o.setRenderTarget(I),o.render(a,wi)}}function YS(B){const A=[],I=[],g=[];let C=B;const Q=B-wB+1+st.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-wB?o=st[E-B+wB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],h=6,S=6,w=3,n=2,r=1,l=new Float32Array(w*S*h),c=new Float32Array(n*S*h),M=new Float32Array(r*S*h);for(let K=0;K<h;K++){const N=K%3*2/3-1,d=K>2?0:-1,U=[N,d,0,N+2/3,d,0,N+2/3,d+1,0,N,d,0,N+2/3,d+1,0,N,d+1,0];l.set(U,w*S*K),c.set(s,n*S*K);const G=[K,K,K,K,K,K];M.set(G,r*S*K)}const L=new XI;L.setAttribute("position",new RI(l,w)),L.setAttribute("uv",new RI(c,n)),L.setAttribute("faceIndex",new RI(M,r)),A.push(L),C>wB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function nt(B,A,I){const g=new UC(B,A,I);return g.texture.mapping=UQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function CE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function LS(B,A,I){const g=new Float32Array(pC),C=new Y(0,1,0);return new Wg({name:"SphericalGaussianBlur",defines:{n:pC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:ki(),fragmentShader:`

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
		`,blending:CC,depthTest:!1,depthWrite:!1})}function St(){return new Wg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ki(),fragmentShader:`

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
		`,blending:CC,depthTest:!1,depthWrite:!1})}function wt(){return new Wg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ki(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:CC,depthTest:!1,depthWrite:!1})}function ki(){return`

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
	`}function uS(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===kQ||o===mE,t=o===vC||o===_C;if(e||t){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new rt(B)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const h=i.image;return e&&h&&h.height>0||t&&h&&C(h)?(I===null&&(I=new rt(B)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function HS(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&zE("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function mS(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const S in s.attributes)A.remove(s.attributes[S]);for(const S in s.morphAttributes){const w=s.morphAttributes[S];for(let n=0,r=w.length;n<r;n++)A.remove(w[n])}s.removeEventListener("dispose",E),delete C[s.id];const h=Q.get(s);h&&(A.remove(h),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const S in s)A.update(s[S],B.ARRAY_BUFFER);const h=a.morphAttributes;for(const S in h){const w=h[S];for(let n=0,r=w.length;n<r;n++)A.update(w[n],B.ARRAY_BUFFER)}}function e(a){const s=[],h=a.index,S=a.attributes.position;let w=0;if(h!==null){const l=h.array;w=h.version;for(let c=0,M=l.length;c<M;c+=3){const L=l[c+0],K=l[c+1],N=l[c+2];s.push(L,K,K,N,N,L)}}else if(S!==void 0){const l=S.array;w=S.version;for(let c=0,M=l.length/3-1;c<M;c+=3){const L=c+0,K=c+1,N=c+2;s.push(L,K,K,N,N,L)}}else return;const n=new(ue(s)?At:$e)(s,1);n.version=w;const r=Q.get(a);r&&A.remove(r),Q.set(a,n)}function t(a){const s=Q.get(a);if(s){const h=a.index;h!==null&&s.version<h.version&&e(a)}else e(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function fS(B,A,I){let g;function C(s){g=s}let Q,E;function i(s){Q=s.type,E=s.bytesPerElement}function o(s,h){B.drawElements(g,h,Q,s*E),I.update(h,g,1)}function e(s,h,S){S!==0&&(B.drawElementsInstanced(g,h,Q,s*E,S),I.update(h,g,S))}function t(s,h,S){if(S===0)return;const w=A.get("WEBGL_multi_draw");if(w===null)for(let n=0;n<S;n++)this.render(s[n]/E,h[n]);else{w.multiDrawElementsWEBGL(g,h,0,Q,s,0,S);let n=0;for(let r=0;r<S;r++)n+=h[r];I.update(n,g,1)}}function a(s,h,S,w){if(S===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let r=0;r<s.length;r++)e(s[r]/E,h[r],w[r]);else{n.multiDrawElementsInstancedWEBGL(g,h,0,Q,s,0,w,0,S);let r=0;for(let l=0;l<S;l++)r+=h[l];for(let l=0;l<w.length;l++)I.update(r,g,w[l])}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t,this.renderMultiDrawInstances=a}function TS(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function xS(B,A,I){const g=new WeakMap,C=new QI;function Q(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let h=function(){d.dispose(),g.delete(i),i.removeEventListener("dispose",h)};s!==void 0&&s.texture.dispose();const S=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,r=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],c=i.morphAttributes.color||[];let M=0;S===!0&&(M=1),w===!0&&(M=2),n===!0&&(M=3);let L=i.attributes.position.count*M,K=1;L>A.maxTextureSize&&(K=Math.ceil(L/A.maxTextureSize),L=A.maxTextureSize);const N=new Float32Array(L*K*4*a),d=new xe(N,L,K,a);d.type=gg,d.needsUpdate=!0;const U=M*4;for(let G=0;G<a;G++){const R=r[G],T=l[G],x=c[G],Z=L*K*4*G;for(let V=0;V<R.count;V++){const _=V*U;S===!0&&(C.fromBufferAttribute(R,V),N[Z+_+0]=C.x,N[Z+_+1]=C.y,N[Z+_+2]=C.z,N[Z+_+3]=0),w===!0&&(C.fromBufferAttribute(T,V),N[Z+_+4]=C.x,N[Z+_+5]=C.y,N[Z+_+6]=C.z,N[Z+_+7]=0),n===!0&&(C.fromBufferAttribute(x,V),N[Z+_+8]=C.x,N[Z+_+9]=C.y,N[Z+_+10]=C.z,N[Z+_+11]=x.itemSize===4?C.w:1)}}s={count:a,texture:d,size:new pA(L,K)},g.set(i,s),i.addEventListener("dispose",h)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(B,"morphTexture",E.morphTexture,I);else{let h=0;for(let w=0;w<e.length;w++)h+=e[w];const S=i.morphTargetsRelative?1:1-h;o.getUniforms().setValue(B,"morphTargetBaseInfluence",S),o.getUniforms().setValue(B,"morphTargetInfluences",e)}o.getUniforms().setValue(B,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(B,"morphTargetsTextureSize",s.size)}return{update:Q}}function bS(B,A,I,g){let C=new WeakMap;function Q(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==e&&(s.update(),C.set(s,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:E}}class ct extends FI{constructor(A,I,g,C,Q,E,i,o,e,t=PC){if(t!==PC&&t!==jC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===PC&&(g=ZC),g===void 0&&t===jC&&(g=WC),super(null,C,Q,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:xI,this.minFilter=o!==void 0?o:xI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const lt=new FI,Gt=new ct(1,1);Gt.compareFunction=qe;const yt=new xe,kt=new Uh,Ut=new tt,Mt=[],Nt=[],Kt=new Float32Array(16),Jt=new Float32Array(9),Ft=new Float32Array(4);function lB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=Mt[C];if(Q===void 0&&(Q=new Float32Array(C),Mt[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function pI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function dI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function BE(B,A){let I=Nt[A];I===void 0&&(I=new Int32Array(A),Nt[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function OS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function vS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(pI(I,A))return;B.uniform2fv(this.addr,A),dI(I,A)}}function _S(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(pI(I,A))return;B.uniform3fv(this.addr,A),dI(I,A)}}function ZS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(pI(I,A))return;B.uniform4fv(this.addr,A),dI(I,A)}}function WS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(pI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),dI(I,A)}else{if(pI(I,g))return;Ft.set(g),B.uniformMatrix2fv(this.addr,!1,Ft),dI(I,g)}}function PS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(pI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),dI(I,A)}else{if(pI(I,g))return;Jt.set(g),B.uniformMatrix3fv(this.addr,!1,Jt),dI(I,g)}}function jS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(pI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),dI(I,A)}else{if(pI(I,g))return;Kt.set(g),B.uniformMatrix4fv(this.addr,!1,Kt),dI(I,g)}}function VS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function XS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(pI(I,A))return;B.uniform2iv(this.addr,A),dI(I,A)}}function zS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(pI(I,A))return;B.uniform3iv(this.addr,A),dI(I,A)}}function $S(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(pI(I,A))return;B.uniform4iv(this.addr,A),dI(I,A)}}function Aw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function Iw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(pI(I,A))return;B.uniform2uiv(this.addr,A),dI(I,A)}}function gw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(pI(I,A))return;B.uniform3uiv(this.addr,A),dI(I,A)}}function Cw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(pI(I,A))return;B.uniform4uiv(this.addr,A),dI(I,A)}}function Bw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);const Q=this.type===B.SAMPLER_2D_SHADOW?Gt:lt;I.setTexture2D(A||Q,C)}function Qw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||kt,C)}function Ew(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Ut,C)}function iw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||yt,C)}function ow(B){switch(B){case 5126:return OS;case 35664:return vS;case 35665:return _S;case 35666:return ZS;case 35674:return WS;case 35675:return PS;case 35676:return jS;case 5124:case 35670:return VS;case 35667:case 35671:return XS;case 35668:case 35672:return zS;case 35669:case 35673:return $S;case 5125:return Aw;case 36294:return Iw;case 36295:return gw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return iw}}function ew(B,A){B.uniform1fv(this.addr,A)}function tw(B,A){const I=lB(A,this.size,2);B.uniform2fv(this.addr,I)}function aw(B,A){const I=lB(A,this.size,3);B.uniform3fv(this.addr,I)}function sw(B,A){const I=lB(A,this.size,4);B.uniform4fv(this.addr,I)}function Dw(B,A){const I=lB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function hw(B,A){const I=lB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function rw(B,A){const I=lB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function nw(B,A){B.uniform1iv(this.addr,A)}function Sw(B,A){B.uniform2iv(this.addr,A)}function ww(B,A){B.uniform3iv(this.addr,A)}function cw(B,A){B.uniform4iv(this.addr,A)}function lw(B,A){B.uniform1uiv(this.addr,A)}function Gw(B,A){B.uniform2uiv(this.addr,A)}function yw(B,A){B.uniform3uiv(this.addr,A)}function kw(B,A){B.uniform4uiv(this.addr,A)}function Uw(B,A,I){const g=this.cache,C=A.length,Q=BE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||lt,Q[E])}function Mw(B,A,I){const g=this.cache,C=A.length,Q=BE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||kt,Q[E])}function Nw(B,A,I){const g=this.cache,C=A.length,Q=BE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Ut,Q[E])}function Kw(B,A,I){const g=this.cache,C=A.length,Q=BE(I,C);pI(g,Q)||(B.uniform1iv(this.addr,Q),dI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||yt,Q[E])}function Jw(B){switch(B){case 5126:return ew;case 35664:return tw;case 35665:return aw;case 35666:return sw;case 35674:return Dw;case 35675:return hw;case 35676:return rw;case 5124:case 35670:return nw;case 35667:case 35671:return Sw;case 35668:case 35672:return ww;case 35669:case 35673:return cw;case 5125:return lw;case 36294:return Gw;case 36295:return yw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Kw}}class Fw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=ow(I.type)}}class Rw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Jw(I.type)}}class pw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const Ui=/(\w+)(\])?(\[|\.)?/g;function Rt(B,A){B.seq.push(A),B.map[A.id]=A}function dw(B,A,I){const g=B.name,C=g.length;for(Ui.lastIndex=0;;){const Q=Ui.exec(g),E=Ui.lastIndex;let i=Q[1];const o=Q[2]==="]",e=Q[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){Rt(I,e===void 0?new Fw(i,B,A):new Rw(i,B,A));break}else{let t=I.map[i];t===void 0&&(t=new pw(i),Rt(I,t)),I=t}}}class QE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);dw(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function pt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const qw=37297;let Yw=0;function Lw(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function uw(B){const A=AI.getPrimaries(AI.workingColorSpace),I=AI.getPrimaries(B);let g;switch(A===I?g="":A===dQ&&I===pQ?g="LinearDisplayP3ToLinearSRGB":A===pQ&&I===dQ&&(g="LinearSRGBToLinearDisplayP3"),B){case JI:case FQ:return[g,"LinearTransferOETF"];case bI:case PE:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),[g,"LinearTransferOETF"]}}function dt(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+Lw(B.getShaderSource(A),E)}else return C}function Hw(B,A){const I=uw(A);return`vec4 ${B}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function mw(B,A){let I;switch(A){case kD:I="Linear";break;case UD:I="Reinhard";break;case MD:I="OptimizedCineon";break;case ND:I="ACESFilmic";break;case JD:I="AgX";break;case FD:I="Neutral";break;case KD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function fw(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(OB).join(`
`)}function Tw(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function xw(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function OB(B){return B!==""}function qt(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Yt(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mi(B){return B.replace(bw,vw)}const Ow=new Map;function vw(B,A){let I=HA[A];if(I===void 0){const g=Ow.get(A);if(g!==void 0)I=HA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Mi(I)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lt(B){return B.replace(_w,Zw)}function Zw(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function ut(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	precision ${B.precision} sampler3D;
	precision ${B.precision} sampler2DArray;
	precision ${B.precision} sampler2DShadow;
	precision ${B.precision} samplerCubeShadow;
	precision ${B.precision} sampler2DArrayShadow;
	precision ${B.precision} isampler2D;
	precision ${B.precision} isampler3D;
	precision ${B.precision} isamplerCube;
	precision ${B.precision} isampler2DArray;
	precision ${B.precision} usampler2D;
	precision ${B.precision} usampler3D;
	precision ${B.precision} usamplerCube;
	precision ${B.precision} usampler2DArray;
	`;return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Ww(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===_o?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===js?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===Hg&&(A="SHADOWMAP_TYPE_VSM"),A}function Pw(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case vC:case _C:A="ENVMAP_TYPE_CUBE";break;case UQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function jw(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case _C:A="ENVMAP_MODE_REFRACTION";break}return A}function Vw(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case HE:A="ENVMAP_BLENDING_MULTIPLY";break;case GD:A="ENVMAP_BLENDING_MIX";break;case yD:A="ENVMAP_BLENDING_ADD";break}return A}function Xw(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function zw(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Ww(I),e=Pw(I),t=jw(I),a=Vw(I),s=Xw(I),h=fw(I),S=Tw(Q),w=C.createProgram();let n,r,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(n=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S].filter(OB).join(`
`),n.length>0&&(n+=`
`),r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S].filter(OB).join(`
`),r.length>0&&(r+=`
`)):(n=[ut(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(OB).join(`
`),r=[ut(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==BC?"#define TONE_MAPPING":"",I.toneMapping!==BC?HA.tonemapping_pars_fragment:"",I.toneMapping!==BC?mw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",HA.colorspace_pars_fragment,Hw("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(OB).join(`
`)),E=Mi(E),E=qt(E,I),E=Yt(E,I),i=Mi(i),i=qt(i,I),i=Yt(i,I),E=Lt(E),i=Lt(i),I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,n=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+n,r=["#define varying in",I.glslVersion===Ye?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Ye?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const c=l+n+E,M=l+r+i,L=pt(C,C.VERTEX_SHADER,c),K=pt(C,C.FRAGMENT_SHADER,M);C.attachShader(w,L),C.attachShader(w,K),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function N(R){if(B.debug.checkShaderErrors){const T=C.getProgramInfoLog(w).trim(),x=C.getShaderInfoLog(L).trim(),Z=C.getShaderInfoLog(K).trim();let V=!0,_=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(V=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,w,L,K);else{const z=dt(C,L,"vertex"),W=dt(C,K,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+T+`
`+z+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(x===""||Z==="")&&(_=!1);_&&(R.diagnostics={runnable:V,programLog:T,vertexShader:{log:x,prefix:n},fragmentShader:{log:Z,prefix:r}})}C.deleteShader(L),C.deleteShader(K),d=new QE(C,w),U=xw(C,w)}let d;this.getUniforms=function(){return d===void 0&&N(this),d};let U;this.getAttributes=function(){return U===void 0&&N(this),U};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=C.getProgramParameter(w,qw)),G},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Yw++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=K,this}let $w=0;class Ac{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Ic(A),I.set(A,g)),g}}class Ic{constructor(A){this.id=$w++,this.code=A,this.usedTimes=0}}function gc(B,A,I,g,C,Q,E){const i=new _e,o=new Ac,e=new Set,t=[],a=C.logarithmicDepthBuffer,s=C.vertexTextures;let h=C.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(U){return e.add(U),U===0?"uv":`uv${U}`}function n(U,G,R,T,x){const Z=T.fog,V=x.geometry,_=U.isMeshStandardMaterial?T.environment:null,z=(U.isMeshStandardMaterial?I:A).get(U.envMap||_),W=z&&z.mapping===UQ?z.image.height:null,iA=S[U.type];U.precision!==null&&(h=C.getMaxPrecision(U.precision),h!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",h,"instead."));const cA=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,FA=cA!==void 0?cA.length:0;let VA=0;V.morphAttributes.position!==void 0&&(VA=1),V.morphAttributes.normal!==void 0&&(VA=2),V.morphAttributes.color!==void 0&&(VA=3);let EI,j,CA,nA;if(iA){const iI=Ng[iA];EI=iI.vertexShader,j=iI.fragmentShader}else EI=U.vertexShader,j=U.fragmentShader,o.update(U),CA=o.getVertexShaderID(U),nA=o.getFragmentShaderID(U);const eA=B.getRenderTarget(),vA=x.isInstancedMesh===!0,TA=x.isBatchedMesh===!0,zA=!!U.map,q=!!U.matcap,XA=!!z,WA=!!U.aoMap,rI=!!U.lightMap,KA=!!U.bumpMap,$A=!!U.normalMap,_A=!!U.displacementMap,fA=!!U.emissiveMap,NI=!!U.metalnessMap,J=!!U.roughnessMap,y=U.anisotropy>0,v=U.clearcoat>0,$=U.dispersion>0,IA=U.iridescence>0,AA=U.sheen>0,kA=U.transmission>0,oA=y&&!!U.anisotropyMap,tA=v&&!!U.clearcoatMap,YA=v&&!!U.clearcoatNormalMap,BA=v&&!!U.clearcoatRoughnessMap,lA=IA&&!!U.iridescenceMap,ZA=IA&&!!U.iridescenceThicknessMap,dA=AA&&!!U.sheenColorMap,aA=AA&&!!U.sheenRoughnessMap,xA=!!U.specularMap,PA=!!U.specularColorMap,lI=!!U.specularIntensityMap,p=kA&&!!U.transmissionMap,sA=kA&&!!U.thicknessMap,P=!!U.gradientMap,X=!!U.alphaMap,QA=U.alphaTest>0,UA=!!U.alphaHash,hI=!!U.extensions;let GI=BC;U.toneMapped&&(eA===null||eA.isXRRenderTarget===!0)&&(GI=B.toneMapping);const fI={shaderID:iA,shaderType:U.type,shaderName:U.name,vertexShader:EI,fragmentShader:j,defines:U.defines,customVertexShaderID:CA,customFragmentShaderID:nA,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:h,batching:TA,batchingColor:TA&&x._colorsTexture!==null,instancing:vA,instancingColor:vA&&x.instanceColor!==null,instancingMorph:vA&&x.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:eA===null?B.outputColorSpace:eA.isXRRenderTarget===!0?eA.texture.colorSpace:JI,alphaToCoverage:!!U.alphaToCoverage,map:zA,matcap:q,envMap:XA,envMapMode:XA&&z.mapping,envMapCubeUVHeight:W,aoMap:WA,lightMap:rI,bumpMap:KA,normalMap:$A,displacementMap:s&&_A,emissiveMap:fA,normalMapObjectSpace:$A&&U.normalMapType===ZD,normalMapTangentSpace:$A&&U.normalMapType===WE,metalnessMap:NI,roughnessMap:J,anisotropy:y,anisotropyMap:oA,clearcoat:v,clearcoatMap:tA,clearcoatNormalMap:YA,clearcoatRoughnessMap:BA,dispersion:$,iridescence:IA,iridescenceMap:lA,iridescenceThicknessMap:ZA,sheen:AA,sheenColorMap:dA,sheenRoughnessMap:aA,specularMap:xA,specularColorMap:PA,specularIntensityMap:lI,transmission:kA,transmissionMap:p,thicknessMap:sA,gradientMap:P,opaque:U.transparent===!1&&U.blending===OC&&U.alphaToCoverage===!1,alphaMap:X,alphaTest:QA,alphaHash:UA,combine:U.combine,mapUv:zA&&w(U.map.channel),aoMapUv:WA&&w(U.aoMap.channel),lightMapUv:rI&&w(U.lightMap.channel),bumpMapUv:KA&&w(U.bumpMap.channel),normalMapUv:$A&&w(U.normalMap.channel),displacementMapUv:_A&&w(U.displacementMap.channel),emissiveMapUv:fA&&w(U.emissiveMap.channel),metalnessMapUv:NI&&w(U.metalnessMap.channel),roughnessMapUv:J&&w(U.roughnessMap.channel),anisotropyMapUv:oA&&w(U.anisotropyMap.channel),clearcoatMapUv:tA&&w(U.clearcoatMap.channel),clearcoatNormalMapUv:YA&&w(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:BA&&w(U.clearcoatRoughnessMap.channel),iridescenceMapUv:lA&&w(U.iridescenceMap.channel),iridescenceThicknessMapUv:ZA&&w(U.iridescenceThicknessMap.channel),sheenColorMapUv:dA&&w(U.sheenColorMap.channel),sheenRoughnessMapUv:aA&&w(U.sheenRoughnessMap.channel),specularMapUv:xA&&w(U.specularMap.channel),specularColorMapUv:PA&&w(U.specularColorMap.channel),specularIntensityMapUv:lI&&w(U.specularIntensityMap.channel),transmissionMapUv:p&&w(U.transmissionMap.channel),thicknessMapUv:sA&&w(U.thicknessMap.channel),alphaMapUv:X&&w(U.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($A||y),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!V.attributes.uv&&(zA||X),fog:!!Z,useFog:U.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:x.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:FA,morphTextureStride:VA,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:U.dithering,shadowMapEnabled:B.shadowMap.enabled&&R.length>0,shadowMapType:B.shadowMap.type,toneMapping:GI,decodeVideoTexture:zA&&U.map.isVideoTexture===!0&&AI.getTransfer(U.map.colorSpace)===aI,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===sg,flipSided:U.side===Ig,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:hI&&U.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:hI&&U.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return fI.vertexUv1s=e.has(1),fI.vertexUv2s=e.has(2),fI.vertexUv3s=e.has(3),e.clear(),fI}function r(U){const G=[];if(U.shaderID?G.push(U.shaderID):(G.push(U.customVertexShaderID),G.push(U.customFragmentShaderID)),U.defines!==void 0)for(const R in U.defines)G.push(R),G.push(U.defines[R]);return U.isRawShaderMaterial===!1&&(l(G,U),c(G,U),G.push(B.outputColorSpace)),G.push(U.customProgramCacheKey),G.join()}function l(U,G){U.push(G.precision),U.push(G.outputColorSpace),U.push(G.envMapMode),U.push(G.envMapCubeUVHeight),U.push(G.mapUv),U.push(G.alphaMapUv),U.push(G.lightMapUv),U.push(G.aoMapUv),U.push(G.bumpMapUv),U.push(G.normalMapUv),U.push(G.displacementMapUv),U.push(G.emissiveMapUv),U.push(G.metalnessMapUv),U.push(G.roughnessMapUv),U.push(G.anisotropyMapUv),U.push(G.clearcoatMapUv),U.push(G.clearcoatNormalMapUv),U.push(G.clearcoatRoughnessMapUv),U.push(G.iridescenceMapUv),U.push(G.iridescenceThicknessMapUv),U.push(G.sheenColorMapUv),U.push(G.sheenRoughnessMapUv),U.push(G.specularMapUv),U.push(G.specularColorMapUv),U.push(G.specularIntensityMapUv),U.push(G.transmissionMapUv),U.push(G.thicknessMapUv),U.push(G.combine),U.push(G.fogExp2),U.push(G.sizeAttenuation),U.push(G.morphTargetsCount),U.push(G.morphAttributeCount),U.push(G.numDirLights),U.push(G.numPointLights),U.push(G.numSpotLights),U.push(G.numSpotLightMaps),U.push(G.numHemiLights),U.push(G.numRectAreaLights),U.push(G.numDirLightShadows),U.push(G.numPointLightShadows),U.push(G.numSpotLightShadows),U.push(G.numSpotLightShadowsWithMaps),U.push(G.numLightProbes),U.push(G.shadowMapType),U.push(G.toneMapping),U.push(G.numClippingPlanes),U.push(G.numClipIntersection),U.push(G.depthPacking)}function c(U,G){i.disableAll(),G.supportsVertexTextures&&i.enable(0),G.instancing&&i.enable(1),G.instancingColor&&i.enable(2),G.instancingMorph&&i.enable(3),G.matcap&&i.enable(4),G.envMap&&i.enable(5),G.normalMapObjectSpace&&i.enable(6),G.normalMapTangentSpace&&i.enable(7),G.clearcoat&&i.enable(8),G.iridescence&&i.enable(9),G.alphaTest&&i.enable(10),G.vertexColors&&i.enable(11),G.vertexAlphas&&i.enable(12),G.vertexUv1s&&i.enable(13),G.vertexUv2s&&i.enable(14),G.vertexUv3s&&i.enable(15),G.vertexTangents&&i.enable(16),G.anisotropy&&i.enable(17),G.alphaHash&&i.enable(18),G.batching&&i.enable(19),G.dispersion&&i.enable(20),G.batchingColor&&i.enable(21),U.push(i.mask),i.disableAll(),G.fog&&i.enable(0),G.useFog&&i.enable(1),G.flatShading&&i.enable(2),G.logarithmicDepthBuffer&&i.enable(3),G.skinning&&i.enable(4),G.morphTargets&&i.enable(5),G.morphNormals&&i.enable(6),G.morphColors&&i.enable(7),G.premultipliedAlpha&&i.enable(8),G.shadowMapEnabled&&i.enable(9),G.doubleSided&&i.enable(10),G.flipSided&&i.enable(11),G.useDepthPacking&&i.enable(12),G.dithering&&i.enable(13),G.transmission&&i.enable(14),G.sheen&&i.enable(15),G.opaque&&i.enable(16),G.pointsUvs&&i.enable(17),G.decodeVideoTexture&&i.enable(18),G.alphaToCoverage&&i.enable(19),U.push(i.mask)}function M(U){const G=S[U.type];let R;if(G){const T=Ng[G];R=fh.clone(T.uniforms)}else R=U.uniforms;return R}function L(U,G){let R;for(let T=0,x=t.length;T<x;T++){const Z=t[T];if(Z.cacheKey===G){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new zw(B,G,U,Q),t.push(R)),R}function K(U){if(--U.usedTimes===0){const G=t.indexOf(U);t[G]=t[t.length-1],t.pop(),U.destroy()}}function N(U){o.remove(U)}function d(){o.dispose()}return{getParameters:n,getProgramCacheKey:r,getUniforms:M,acquireProgram:L,releaseProgram:K,releaseShaderCache:N,programs:t,dispose:d}}function Cc(){let B=new WeakMap;function A(Q){let E=B.get(Q);return E===void 0&&(E={},B.set(Q,E)),E}function I(Q){B.delete(Q)}function g(Q,E,i){B.get(Q)[E]=i}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function Bc(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function Ht(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function mt(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,h,S,w,n){let r=B[A];return r===void 0?(r={id:a.id,object:a,geometry:s,material:h,groupOrder:S,renderOrder:a.renderOrder,z:w,group:n},B[A]=r):(r.id=a.id,r.object=a,r.geometry=s,r.material=h,r.groupOrder=S,r.renderOrder=a.renderOrder,r.z=w,r.group=n),A++,r}function i(a,s,h,S,w,n){const r=E(a,s,h,S,w,n);h.transmission>0?g.push(r):h.transparent===!0?C.push(r):I.push(r)}function o(a,s,h,S,w,n){const r=E(a,s,h,S,w,n);h.transmission>0?g.unshift(r):h.transparent===!0?C.unshift(r):I.unshift(r)}function e(a,s){I.length>1&&I.sort(a||Bc),g.length>1&&g.sort(s||Ht),C.length>1&&C.sort(s||Ht)}function t(){for(let a=A,s=B.length;a<s;a++){const h=B[a];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:t,sort:e}}function Qc(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new mt,B.set(g,[E])):C>=Q.length?(E=new mt,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function Ec(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new Y,color:new NA};break;case"SpotLight":I={position:new Y,direction:new Y,color:new NA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new Y,color:new NA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new Y,skyColor:new NA,groundColor:new NA};break;case"RectAreaLight":I={color:new NA,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return B[A.id]=I,I}}}function ic(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let oc=0;function ec(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function tc(B){const A=new Ec,I=ic(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new Y);const C=new Y,Q=new qA,E=new qA;function i(e){let t=0,a=0,s=0;for(let U=0;U<9;U++)g.probe[U].set(0,0,0);let h=0,S=0,w=0,n=0,r=0,l=0,c=0,M=0,L=0,K=0,N=0;e.sort(ec);for(let U=0,G=e.length;U<G;U++){const R=e[U],T=R.color,x=R.intensity,Z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)t+=T.r*x,a+=T.g*x,s+=T.b*x;else if(R.isLightProbe){for(let _=0;_<9;_++)g.probe[_].addScaledVector(R.sh.coefficients[_],x);N++}else if(R.isDirectionalLight){const _=A.get(R);if(_.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,W=I.get(R);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,g.directionalShadow[h]=W,g.directionalShadowMap[h]=V,g.directionalShadowMatrix[h]=R.shadow.matrix,l++}g.directional[h]=_,h++}else if(R.isSpotLight){const _=A.get(R);_.position.setFromMatrixPosition(R.matrixWorld),_.color.copy(T).multiplyScalar(x),_.distance=Z,_.coneCos=Math.cos(R.angle),_.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),_.decay=R.decay,g.spot[w]=_;const z=R.shadow;if(R.map&&(g.spotLightMap[L]=R.map,L++,z.updateMatrices(R),R.castShadow&&K++),g.spotLightMatrix[w]=z.matrix,R.castShadow){const W=I.get(R);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,g.spotShadow[w]=W,g.spotShadowMap[w]=V,M++}w++}else if(R.isRectAreaLight){const _=A.get(R);_.color.copy(T).multiplyScalar(x),_.halfWidth.set(R.width*.5,0,0),_.halfHeight.set(0,R.height*.5,0),g.rectArea[n]=_,n++}else if(R.isPointLight){const _=A.get(R);if(_.color.copy(R.color).multiplyScalar(R.intensity),_.distance=R.distance,_.decay=R.decay,R.castShadow){const z=R.shadow,W=I.get(R);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,g.pointShadow[S]=W,g.pointShadowMap[S]=V,g.pointShadowMatrix[S]=R.shadow.matrix,c++}g.point[S]=_,S++}else if(R.isHemisphereLight){const _=A.get(R);_.skyColor.copy(R.color).multiplyScalar(x),_.groundColor.copy(R.groundColor).multiplyScalar(x),g.hemi[r]=_,r++}}n>0&&(B.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=EA.LTC_FLOAT_1,g.rectAreaLTC2=EA.LTC_FLOAT_2):(g.rectAreaLTC1=EA.LTC_HALF_1,g.rectAreaLTC2=EA.LTC_HALF_2)),g.ambient[0]=t,g.ambient[1]=a,g.ambient[2]=s;const d=g.hash;(d.directionalLength!==h||d.pointLength!==S||d.spotLength!==w||d.rectAreaLength!==n||d.hemiLength!==r||d.numDirectionalShadows!==l||d.numPointShadows!==c||d.numSpotShadows!==M||d.numSpotMaps!==L||d.numLightProbes!==N)&&(g.directional.length=h,g.spot.length=w,g.rectArea.length=n,g.point.length=S,g.hemi.length=r,g.directionalShadow.length=l,g.directionalShadowMap.length=l,g.pointShadow.length=c,g.pointShadowMap.length=c,g.spotShadow.length=M,g.spotShadowMap.length=M,g.directionalShadowMatrix.length=l,g.pointShadowMatrix.length=c,g.spotLightMatrix.length=M+L-K,g.spotLightMap.length=L,g.numSpotLightShadowsWithMaps=K,g.numLightProbes=N,d.directionalLength=h,d.pointLength=S,d.spotLength=w,d.rectAreaLength=n,d.hemiLength=r,d.numDirectionalShadows=l,d.numPointShadows=c,d.numSpotShadows=M,d.numSpotMaps=L,d.numLightProbes=N,g.version=oc++)}function o(e,t){let a=0,s=0,h=0,S=0,w=0;const n=t.matrixWorldInverse;for(let r=0,l=e.length;r<l;r++){const c=e[r];if(c.isDirectionalLight){const M=g.directional[a];M.direction.setFromMatrixPosition(c.matrixWorld),C.setFromMatrixPosition(c.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(n),a++}else if(c.isSpotLight){const M=g.spot[h];M.position.setFromMatrixPosition(c.matrixWorld),M.position.applyMatrix4(n),M.direction.setFromMatrixPosition(c.matrixWorld),C.setFromMatrixPosition(c.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(n),h++}else if(c.isRectAreaLight){const M=g.rectArea[S];M.position.setFromMatrixPosition(c.matrixWorld),M.position.applyMatrix4(n),E.identity(),Q.copy(c.matrixWorld),Q.premultiply(n),E.extractRotation(Q),M.halfWidth.set(c.width*.5,0,0),M.halfHeight.set(0,c.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),S++}else if(c.isPointLight){const M=g.point[s];M.position.setFromMatrixPosition(c.matrixWorld),M.position.applyMatrix4(n),s++}else if(c.isHemisphereLight){const M=g.hemi[w];M.direction.setFromMatrixPosition(c.matrixWorld),M.direction.transformDirection(n),w++}}}return{setup:i,setupView:o,state:g}}function ft(B){const A=new tc(B),I=[],g=[];function C(t){e.camera=t,I.length=0,g.length=0}function Q(t){I.push(t)}function E(t){g.push(t)}function i(){A.setup(I)}function o(t){A.setupView(I,t)}const e={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:e,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function ac(B){let A=new WeakMap;function I(C,Q=0){const E=A.get(C);let i;return E===void 0?(i=new ft(B),A.set(C,[i])):Q>=E.length?(i=new ft(B),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}class sc extends cg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Dc extends cg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const hc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rc=`uniform sampler2D shadow_pass;
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
}`;function nc(B,A,I){let g=new ni;const C=new pA,Q=new pA,E=new QI,i=new sc({depthPacking:_D}),o=new Dc,e={},t=I.maxTextureSize,a={[mg]:Ig,[Ig]:mg,[sg]:sg},s=new Wg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pA},radius:{value:4}},vertexShader:hc,fragmentShader:rc}),h=s.clone();h.defines.HORIZONTAL_PASS=1;const S=new XI;S.setAttribute("position",new RI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new SI(S,s),n=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let r=this.type;this.render=function(K,N,d){if(n.enabled===!1||n.autoUpdate===!1&&n.needsUpdate===!1||K.length===0)return;const U=B.getRenderTarget(),G=B.getActiveCubeFace(),R=B.getActiveMipmapLevel(),T=B.state;T.setBlending(CC),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const x=r!==Hg&&this.type===Hg,Z=r===Hg&&this.type!==Hg;for(let V=0,_=K.length;V<_;V++){const z=K[V],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;C.copy(W.mapSize);const iA=W.getFrameExtents();if(C.multiply(iA),Q.copy(W.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(Q.x=Math.floor(t/iA.x),C.x=Q.x*iA.x,W.mapSize.x=Q.x),C.y>t&&(Q.y=Math.floor(t/iA.y),C.y=Q.y*iA.y,W.mapSize.y=Q.y)),W.map===null||x===!0||Z===!0){const FA=this.type!==Hg?{minFilter:xI,magFilter:xI}:{};W.map!==null&&W.map.dispose(),W.map=new UC(C.x,C.y,FA),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}B.setRenderTarget(W.map),B.clear();const cA=W.getViewportCount();for(let FA=0;FA<cA;FA++){const VA=W.getViewport(FA);E.set(Q.x*VA.x,Q.y*VA.y,Q.x*VA.z,Q.y*VA.w),T.viewport(E),W.updateMatrices(z,FA),g=W.getFrustum(),M(N,d,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===Hg&&l(W,d),W.needsUpdate=!1}r=this.type,n.needsUpdate=!1,B.setRenderTarget(U,G,R)};function l(K,N){const d=A.update(w);s.defines.VSM_SAMPLES!==K.blurSamples&&(s.defines.VSM_SAMPLES=K.blurSamples,h.defines.VSM_SAMPLES=K.blurSamples,s.needsUpdate=!0,h.needsUpdate=!0),K.mapPass===null&&(K.mapPass=new UC(C.x,C.y)),s.uniforms.shadow_pass.value=K.map.texture,s.uniforms.resolution.value=K.mapSize,s.uniforms.radius.value=K.radius,B.setRenderTarget(K.mapPass),B.clear(),B.renderBufferDirect(N,null,d,s,w,null),h.uniforms.shadow_pass.value=K.mapPass.texture,h.uniforms.resolution.value=K.mapSize,h.uniforms.radius.value=K.radius,B.setRenderTarget(K.map),B.clear(),B.renderBufferDirect(N,null,d,h,w,null)}function c(K,N,d,U){let G=null;const R=d.isPointLight===!0?K.customDistanceMaterial:K.customDepthMaterial;if(R!==void 0)G=R;else if(G=d.isPointLight===!0?o:i,B.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const T=G.uuid,x=N.uuid;let Z=e[T];Z===void 0&&(Z={},e[T]=Z);let V=Z[x];V===void 0&&(V=G.clone(),Z[x]=V,N.addEventListener("dispose",L)),G=V}if(G.visible=N.visible,G.wireframe=N.wireframe,U===Hg?G.side=N.shadowSide!==null?N.shadowSide:N.side:G.side=N.shadowSide!==null?N.shadowSide:a[N.side],G.alphaMap=N.alphaMap,G.alphaTest=N.alphaTest,G.map=N.map,G.clipShadows=N.clipShadows,G.clippingPlanes=N.clippingPlanes,G.clipIntersection=N.clipIntersection,G.displacementMap=N.displacementMap,G.displacementScale=N.displacementScale,G.displacementBias=N.displacementBias,G.wireframeLinewidth=N.wireframeLinewidth,G.linewidth=N.linewidth,d.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const T=B.properties.get(G);T.light=d}return G}function M(K,N,d,U,G){if(K.visible===!1)return;if(K.layers.test(N.layers)&&(K.isMesh||K.isLine||K.isPoints)&&(K.castShadow||K.receiveShadow&&G===Hg)&&(!K.frustumCulled||g.intersectsObject(K))){K.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,K.matrixWorld);const T=A.update(K),x=K.material;if(Array.isArray(x)){const Z=T.groups;for(let V=0,_=Z.length;V<_;V++){const z=Z[V],W=x[z.materialIndex];if(W&&W.visible){const iA=c(K,W,U,G);K.onBeforeShadow(B,K,N,d,T,iA,z),B.renderBufferDirect(d,null,T,iA,K,z),K.onAfterShadow(B,K,N,d,T,iA,z)}}}else if(x.visible){const Z=c(K,x,U,G);K.onBeforeShadow(B,K,N,d,T,Z,null),B.renderBufferDirect(d,null,T,Z,K,null),K.onAfterShadow(B,K,N,d,T,Z,null)}}const R=K.children;for(let T=0,x=R.length;T<x;T++)M(R[T],N,d,U,G)}function L(K){K.target.removeEventListener("dispose",L);for(const N in e){const d=e[N],U=K.target.uuid;U in d&&(d[U].dispose(),delete d[U])}}}function Sc(B){function A(){let p=!1;const sA=new QI;let P=null;const X=new QI(0,0,0,0);return{setMask:function(QA){P!==QA&&!p&&(B.colorMask(QA,QA,QA,QA),P=QA)},setLocked:function(QA){p=QA},setClear:function(QA,UA,hI,GI,fI){fI===!0&&(QA*=GI,UA*=GI,hI*=GI),sA.set(QA,UA,hI,GI),X.equals(sA)===!1&&(B.clearColor(QA,UA,hI,GI),X.copy(sA))},reset:function(){p=!1,P=null,X.set(-1,0,0,0)}}}function I(){let p=!1,sA=null,P=null,X=null;return{setTest:function(QA){QA?nA(B.DEPTH_TEST):eA(B.DEPTH_TEST)},setMask:function(QA){sA!==QA&&!p&&(B.depthMask(QA),sA=QA)},setFunc:function(QA){if(P!==QA){switch(QA){case hD:B.depthFunc(B.NEVER);break;case rD:B.depthFunc(B.ALWAYS);break;case nD:B.depthFunc(B.LESS);break;case yQ:B.depthFunc(B.LEQUAL);break;case SD:B.depthFunc(B.EQUAL);break;case wD:B.depthFunc(B.GEQUAL);break;case cD:B.depthFunc(B.GREATER);break;case lD:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}P=QA}},setLocked:function(QA){p=QA},setClear:function(QA){X!==QA&&(B.clearDepth(QA),X=QA)},reset:function(){p=!1,sA=null,P=null,X=null}}}function g(){let p=!1,sA=null,P=null,X=null,QA=null,UA=null,hI=null,GI=null,fI=null;return{setTest:function(iI){p||(iI?nA(B.STENCIL_TEST):eA(B.STENCIL_TEST))},setMask:function(iI){sA!==iI&&!p&&(B.stencilMask(iI),sA=iI)},setFunc:function(iI,qg,Yg){(P!==iI||X!==qg||QA!==Yg)&&(B.stencilFunc(iI,qg,Yg),P=iI,X=qg,QA=Yg)},setOp:function(iI,qg,Yg){(UA!==iI||hI!==qg||GI!==Yg)&&(B.stencilOp(iI,qg,Yg),UA=iI,hI=qg,GI=Yg)},setLocked:function(iI){p=iI},setClear:function(iI){fI!==iI&&(B.clearStencil(iI),fI=iI)},reset:function(){p=!1,sA=null,P=null,X=null,QA=null,UA=null,hI=null,GI=null,fI=null}}}const C=new A,Q=new I,E=new g,i=new WeakMap,o=new WeakMap;let e={},t={},a=new WeakMap,s=[],h=null,S=!1,w=null,n=null,r=null,l=null,c=null,M=null,L=null,K=new NA(0,0,0),N=0,d=!1,U=null,G=null,R=null,T=null,x=null;const Z=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,_=0;const z=B.getParameter(B.VERSION);z.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=_>=1):z.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=_>=2);let W=null,iA={};const cA=B.getParameter(B.SCISSOR_BOX),FA=B.getParameter(B.VIEWPORT),VA=new QI().fromArray(cA),EI=new QI().fromArray(FA);function j(p,sA,P,X){const QA=new Uint8Array(4),UA=B.createTexture();B.bindTexture(p,UA),B.texParameteri(p,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(p,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let hI=0;hI<P;hI++)p===B.TEXTURE_3D||p===B.TEXTURE_2D_ARRAY?B.texImage3D(sA,0,B.RGBA,1,1,X,0,B.RGBA,B.UNSIGNED_BYTE,QA):B.texImage2D(sA+hI,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,QA);return UA}const CA={};CA[B.TEXTURE_2D]=j(B.TEXTURE_2D,B.TEXTURE_2D,1),CA[B.TEXTURE_CUBE_MAP]=j(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),CA[B.TEXTURE_2D_ARRAY]=j(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),CA[B.TEXTURE_3D]=j(B.TEXTURE_3D,B.TEXTURE_3D,1,1),C.setClear(0,0,0,1),Q.setClear(1),E.setClear(0),nA(B.DEPTH_TEST),Q.setFunc(yQ),KA(!1),$A(lC),nA(B.CULL_FACE),WA(CC);function nA(p){e[p]!==!0&&(B.enable(p),e[p]=!0)}function eA(p){e[p]!==!1&&(B.disable(p),e[p]=!1)}function vA(p,sA){return t[p]!==sA?(B.bindFramebuffer(p,sA),t[p]=sA,p===B.DRAW_FRAMEBUFFER&&(t[B.FRAMEBUFFER]=sA),p===B.FRAMEBUFFER&&(t[B.DRAW_FRAMEBUFFER]=sA),!0):!1}function TA(p,sA){let P=s,X=!1;if(p){P=a.get(sA),P===void 0&&(P=[],a.set(sA,P));const QA=p.textures;if(P.length!==QA.length||P[0]!==B.COLOR_ATTACHMENT0){for(let UA=0,hI=QA.length;UA<hI;UA++)P[UA]=B.COLOR_ATTACHMENT0+UA;P.length=QA.length,X=!0}}else P[0]!==B.BACK&&(P[0]=B.BACK,X=!0);X&&B.drawBuffers(P)}function zA(p){return h!==p?(B.useProgram(p),h=p,!0):!1}const q={[GC]:B.FUNC_ADD,[Xs]:B.FUNC_SUBTRACT,[zs]:B.FUNC_REVERSE_SUBTRACT};q[$s]=B.MIN,q[AD]=B.MAX;const XA={[ID]:B.ZERO,[gD]:B.ONE,[CD]:B.SRC_COLOR,[LE]:B.SRC_ALPHA,[eD]:B.SRC_ALPHA_SATURATE,[iD]:B.DST_COLOR,[QD]:B.DST_ALPHA,[BD]:B.ONE_MINUS_SRC_COLOR,[uE]:B.ONE_MINUS_SRC_ALPHA,[oD]:B.ONE_MINUS_DST_COLOR,[ED]:B.ONE_MINUS_DST_ALPHA,[tD]:B.CONSTANT_COLOR,[aD]:B.ONE_MINUS_CONSTANT_COLOR,[sD]:B.CONSTANT_ALPHA,[DD]:B.ONE_MINUS_CONSTANT_ALPHA};function WA(p,sA,P,X,QA,UA,hI,GI,fI,iI){if(p===CC){S===!0&&(eA(B.BLEND),S=!1);return}if(S===!1&&(nA(B.BLEND),S=!0),p!==Vs){if(p!==w||iI!==d){if((n!==GC||c!==GC)&&(B.blendEquation(B.FUNC_ADD),n=GC,c=GC),iI)switch(p){case OC:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case YE:B.blendFunc(B.ONE,B.ONE);break;case Zo:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Wo:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",p);break}else switch(p){case OC:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case YE:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case Zo:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Wo:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",p);break}r=null,l=null,M=null,L=null,K.set(0,0,0),N=0,w=p,d=iI}return}QA=QA||sA,UA=UA||P,hI=hI||X,(sA!==n||QA!==c)&&(B.blendEquationSeparate(q[sA],q[QA]),n=sA,c=QA),(P!==r||X!==l||UA!==M||hI!==L)&&(B.blendFuncSeparate(XA[P],XA[X],XA[UA],XA[hI]),r=P,l=X,M=UA,L=hI),(GI.equals(K)===!1||fI!==N)&&(B.blendColor(GI.r,GI.g,GI.b,fI),K.copy(GI),N=fI),w=p,d=!1}function rI(p,sA){p.side===sg?eA(B.CULL_FACE):nA(B.CULL_FACE);let P=p.side===Ig;sA&&(P=!P),KA(P),p.blending===OC&&p.transparent===!1?WA(CC):WA(p.blending,p.blendEquation,p.blendSrc,p.blendDst,p.blendEquationAlpha,p.blendSrcAlpha,p.blendDstAlpha,p.blendColor,p.blendAlpha,p.premultipliedAlpha),Q.setFunc(p.depthFunc),Q.setTest(p.depthTest),Q.setMask(p.depthWrite),C.setMask(p.colorWrite);const X=p.stencilWrite;E.setTest(X),X&&(E.setMask(p.stencilWriteMask),E.setFunc(p.stencilFunc,p.stencilRef,p.stencilFuncMask),E.setOp(p.stencilFail,p.stencilZFail,p.stencilZPass)),fA(p.polygonOffset,p.polygonOffsetFactor,p.polygonOffsetUnits),p.alphaToCoverage===!0?nA(B.SAMPLE_ALPHA_TO_COVERAGE):eA(B.SAMPLE_ALPHA_TO_COVERAGE)}function KA(p){U!==p&&(p?B.frontFace(B.CW):B.frontFace(B.CCW),U=p)}function $A(p){p!==ug?(nA(B.CULL_FACE),p!==G&&(p===lC?B.cullFace(B.BACK):p===Ps?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):eA(B.CULL_FACE),G=p}function _A(p){p!==R&&(V&&B.lineWidth(p),R=p)}function fA(p,sA,P){p?(nA(B.POLYGON_OFFSET_FILL),(T!==sA||x!==P)&&(B.polygonOffset(sA,P),T=sA,x=P)):eA(B.POLYGON_OFFSET_FILL)}function NI(p){p?nA(B.SCISSOR_TEST):eA(B.SCISSOR_TEST)}function J(p){p===void 0&&(p=B.TEXTURE0+Z-1),W!==p&&(B.activeTexture(p),W=p)}function y(p,sA,P){P===void 0&&(W===null?P=B.TEXTURE0+Z-1:P=W);let X=iA[P];X===void 0&&(X={type:void 0,texture:void 0},iA[P]=X),(X.type!==p||X.texture!==sA)&&(W!==P&&(B.activeTexture(P),W=P),B.bindTexture(p,sA||CA[p]),X.type=p,X.texture=sA)}function v(){const p=iA[W];p!==void 0&&p.type!==void 0&&(B.bindTexture(p.type,null),p.type=void 0,p.texture=void 0)}function $(){try{B.compressedTexImage2D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function IA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function AA(){try{B.texSubImage2D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function kA(){try{B.texSubImage3D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function oA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function tA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function YA(){try{B.texStorage2D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function BA(){try{B.texStorage3D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function lA(){try{B.texImage2D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function ZA(){try{B.texImage3D.apply(B,arguments)}catch(p){console.error("THREE.WebGLState:",p)}}function dA(p){VA.equals(p)===!1&&(B.scissor(p.x,p.y,p.z,p.w),VA.copy(p))}function aA(p){EI.equals(p)===!1&&(B.viewport(p.x,p.y,p.z,p.w),EI.copy(p))}function xA(p,sA){let P=o.get(sA);P===void 0&&(P=new WeakMap,o.set(sA,P));let X=P.get(p);X===void 0&&(X=B.getUniformBlockIndex(sA,p.name),P.set(p,X))}function PA(p,sA){const P=o.get(sA).get(p);i.get(sA)!==P&&(B.uniformBlockBinding(sA,P,p.__bindingPointIndex),i.set(sA,P))}function lI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),e={},W=null,iA={},t={},a=new WeakMap,s=[],h=null,S=!1,w=null,n=null,r=null,l=null,c=null,M=null,L=null,K=new NA(0,0,0),N=0,d=!1,U=null,G=null,R=null,T=null,x=null,VA.set(0,0,B.canvas.width,B.canvas.height),EI.set(0,0,B.canvas.width,B.canvas.height),C.reset(),Q.reset(),E.reset()}return{buffers:{color:C,depth:Q,stencil:E},enable:nA,disable:eA,bindFramebuffer:vA,drawBuffers:TA,useProgram:zA,setBlending:WA,setMaterial:rI,setFlipSided:KA,setCullFace:$A,setLineWidth:_A,setPolygonOffset:fA,setScissorTest:NI,activeTexture:J,bindTexture:y,unbindTexture:v,compressedTexImage2D:$,compressedTexImage3D:IA,texImage2D:lA,texImage3D:ZA,updateUBOMapping:xA,uniformBlockBinding:PA,texStorage2D:YA,texStorage3D:BA,texSubImage2D:AA,texSubImage3D:kA,compressedTexSubImage2D:oA,compressedTexSubImage3D:tA,scissor:dA,viewport:aA,reset:lI}}function wc(B,A,I,g,C,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new pA,t=new WeakMap;let a;const s=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(J,y){return h?new OffscreenCanvas(J,y):mB("canvas")}function w(J,y,v){let $=1;const IA=NI(J);if((IA.width>v||IA.height>v)&&($=v/Math.max(IA.width,IA.height)),$<1)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap||typeof VideoFrame<"u"&&J instanceof VideoFrame){const AA=Math.floor($*IA.width),kA=Math.floor($*IA.height);a===void 0&&(a=S(AA,kA));const oA=y?S(AA,kA):a;return oA.width=AA,oA.height=kA,oA.getContext("2d").drawImage(J,0,0,AA,kA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+IA.width+"x"+IA.height+") to ("+AA+"x"+kA+")."),oA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+IA.width+"x"+IA.height+")."),J;return J}function n(J){return J.generateMipmaps&&J.minFilter!==xI&&J.minFilter!==LI}function r(J){B.generateMipmap(J)}function l(J,y,v,$,IA=!1){if(J!==null){if(B[J]!==void 0)return B[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let AA=y;if(y===B.RED&&(v===B.FLOAT&&(AA=B.R32F),v===B.HALF_FLOAT&&(AA=B.R16F),v===B.UNSIGNED_BYTE&&(AA=B.R8)),y===B.RED_INTEGER&&(v===B.UNSIGNED_BYTE&&(AA=B.R8UI),v===B.UNSIGNED_SHORT&&(AA=B.R16UI),v===B.UNSIGNED_INT&&(AA=B.R32UI),v===B.BYTE&&(AA=B.R8I),v===B.SHORT&&(AA=B.R16I),v===B.INT&&(AA=B.R32I)),y===B.RG&&(v===B.FLOAT&&(AA=B.RG32F),v===B.HALF_FLOAT&&(AA=B.RG16F),v===B.UNSIGNED_BYTE&&(AA=B.RG8)),y===B.RG_INTEGER&&(v===B.UNSIGNED_BYTE&&(AA=B.RG8UI),v===B.UNSIGNED_SHORT&&(AA=B.RG16UI),v===B.UNSIGNED_INT&&(AA=B.RG32UI),v===B.BYTE&&(AA=B.RG8I),v===B.SHORT&&(AA=B.RG16I),v===B.INT&&(AA=B.RG32I)),y===B.RGB&&v===B.UNSIGNED_INT_5_9_9_9_REV&&(AA=B.RGB9_E5),y===B.RGBA){const kA=IA?RQ:AI.getTransfer($);v===B.FLOAT&&(AA=B.RGBA32F),v===B.HALF_FLOAT&&(AA=B.RGBA16F),v===B.UNSIGNED_BYTE&&(AA=kA===aI?B.SRGB8_ALPHA8:B.RGBA8),v===B.UNSIGNED_SHORT_4_4_4_4&&(AA=B.RGBA4),v===B.UNSIGNED_SHORT_5_5_5_1&&(AA=B.RGB5_A1)}return(AA===B.R16F||AA===B.R32F||AA===B.RG16F||AA===B.RG32F||AA===B.RGBA16F||AA===B.RGBA32F)&&A.get("EXT_color_buffer_float"),AA}function c(J,y){let v;return J?y===null||y===ZC||y===WC?v=B.DEPTH24_STENCIL8:y===gg?v=B.DEPTH32F_STENCIL8:y===KQ&&(v=B.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ZC||y===WC?v=B.DEPTH_COMPONENT24:y===gg?v=B.DEPTH_COMPONENT32F:y===KQ&&(v=B.DEPTH_COMPONENT16),v}function M(J,y){return n(J)===!0||J.isFramebufferTexture&&J.minFilter!==xI&&J.minFilter!==LI?Math.log2(Math.max(y.width,y.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?y.mipmaps.length:1}function L(J){const y=J.target;y.removeEventListener("dispose",L),N(y),y.isVideoTexture&&t.delete(y)}function K(J){const y=J.target;y.removeEventListener("dispose",K),U(y)}function N(J){const y=g.get(J);if(y.__webglInit===void 0)return;const v=J.source,$=s.get(v);if($){const IA=$[y.__cacheKey];IA.usedTimes--,IA.usedTimes===0&&d(J),Object.keys($).length===0&&s.delete(v)}g.remove(J)}function d(J){const y=g.get(J);B.deleteTexture(y.__webglTexture);const v=J.source,$=s.get(v);delete $[y.__cacheKey],E.memory.textures--}function U(J){const y=g.get(J);if(J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let IA=0;IA<y.__webglFramebuffer[$].length;IA++)B.deleteFramebuffer(y.__webglFramebuffer[$][IA]);else B.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&B.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)B.deleteFramebuffer(y.__webglFramebuffer[$]);else B.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&B.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&B.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&B.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&B.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const v=J.textures;for(let $=0,IA=v.length;$<IA;$++){const AA=g.get(v[$]);AA.__webglTexture&&(B.deleteTexture(AA.__webglTexture),E.memory.textures--),g.remove(v[$])}g.remove(J)}let G=0;function R(){G=0}function T(){const J=G;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),G+=1,J}function x(J){const y=[];return y.push(J.wrapS),y.push(J.wrapT),y.push(J.wrapR||0),y.push(J.magFilter),y.push(J.minFilter),y.push(J.anisotropy),y.push(J.internalFormat),y.push(J.format),y.push(J.type),y.push(J.generateMipmaps),y.push(J.premultiplyAlpha),y.push(J.flipY),y.push(J.unpackAlignment),y.push(J.colorSpace),y.join()}function Z(J,y){const v=g.get(J);if(J.isVideoTexture&&_A(J),J.isRenderTargetTexture===!1&&J.version>0&&v.__version!==J.version){const $=J.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{EI(v,J,y);return}}I.bindTexture(B.TEXTURE_2D,v.__webglTexture,B.TEXTURE0+y)}function V(J,y){const v=g.get(J);if(J.version>0&&v.__version!==J.version){EI(v,J,y);return}I.bindTexture(B.TEXTURE_2D_ARRAY,v.__webglTexture,B.TEXTURE0+y)}function _(J,y){const v=g.get(J);if(J.version>0&&v.__version!==J.version){EI(v,J,y);return}I.bindTexture(B.TEXTURE_3D,v.__webglTexture,B.TEXTURE0+y)}function z(J,y){const v=g.get(J);if(J.version>0&&v.__version!==J.version){j(v,J,y);return}I.bindTexture(B.TEXTURE_CUBE_MAP,v.__webglTexture,B.TEXTURE0+y)}const W={[yC]:B.REPEAT,[Gg]:B.CLAMP_TO_EDGE,[MQ]:B.MIRRORED_REPEAT},iA={[xI]:B.NEAREST,[Vo]:B.NEAREST_MIPMAP_NEAREST,[qB]:B.NEAREST_MIPMAP_LINEAR,[LI]:B.LINEAR,[NQ]:B.LINEAR_MIPMAP_NEAREST,[yg]:B.LINEAR_MIPMAP_LINEAR},cA={[WD]:B.NEVER,[$D]:B.ALWAYS,[PD]:B.LESS,[qe]:B.LEQUAL,[jD]:B.EQUAL,[zD]:B.GEQUAL,[VD]:B.GREATER,[XD]:B.NOTEQUAL};function FA(J,y){if(y.type===gg&&A.has("OES_texture_float_linear")===!1&&(y.magFilter===LI||y.magFilter===NQ||y.magFilter===qB||y.magFilter===yg||y.minFilter===LI||y.minFilter===NQ||y.minFilter===qB||y.minFilter===yg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B.texParameteri(J,B.TEXTURE_WRAP_S,W[y.wrapS]),B.texParameteri(J,B.TEXTURE_WRAP_T,W[y.wrapT]),(J===B.TEXTURE_3D||J===B.TEXTURE_2D_ARRAY)&&B.texParameteri(J,B.TEXTURE_WRAP_R,W[y.wrapR]),B.texParameteri(J,B.TEXTURE_MAG_FILTER,iA[y.magFilter]),B.texParameteri(J,B.TEXTURE_MIN_FILTER,iA[y.minFilter]),y.compareFunction&&(B.texParameteri(J,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(J,B.TEXTURE_COMPARE_FUNC,cA[y.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xI||y.minFilter!==qB&&y.minFilter!==yg||y.type===gg&&A.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||g.get(y).__currentAnisotropy){const v=A.get("EXT_texture_filter_anisotropic");B.texParameterf(J,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,C.getMaxAnisotropy())),g.get(y).__currentAnisotropy=y.anisotropy}}}function VA(J,y){let v=!1;J.__webglInit===void 0&&(J.__webglInit=!0,y.addEventListener("dispose",L));const $=y.source;let IA=s.get($);IA===void 0&&(IA={},s.set($,IA));const AA=x(y);if(AA!==J.__cacheKey){IA[AA]===void 0&&(IA[AA]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,v=!0),IA[AA].usedTimes++;const kA=IA[J.__cacheKey];kA!==void 0&&(IA[J.__cacheKey].usedTimes--,kA.usedTimes===0&&d(y)),J.__cacheKey=AA,J.__webglTexture=IA[AA].texture}return v}function EI(J,y,v){let $=B.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=B.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=B.TEXTURE_3D);const IA=VA(J,y),AA=y.source;I.bindTexture($,J.__webglTexture,B.TEXTURE0+v);const kA=g.get(AA);if(AA.version!==kA.__version||IA===!0){I.activeTexture(B.TEXTURE0+v);const oA=AI.getPrimaries(AI.workingColorSpace),tA=y.colorSpace===EC?null:AI.getPrimaries(y.colorSpace),YA=y.colorSpace===EC||oA===tA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,y.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,YA);let BA=w(y.image,!1,C.maxTextureSize);BA=fA(y,BA);const lA=Q.convert(y.format,y.colorSpace),ZA=Q.convert(y.type);let dA=l(y.internalFormat,lA,ZA,y.colorSpace,y.isVideoTexture);FA($,y);let aA;const xA=y.mipmaps,PA=y.isVideoTexture!==!0,lI=kA.__version===void 0||IA===!0,p=AA.dataReady,sA=M(y,BA);if(y.isDepthTexture)dA=c(y.format===jC,y.type),lI&&(PA?I.texStorage2D(B.TEXTURE_2D,1,dA,BA.width,BA.height):I.texImage2D(B.TEXTURE_2D,0,dA,BA.width,BA.height,0,lA,ZA,null));else if(y.isDataTexture)if(xA.length>0){PA&&lI&&I.texStorage2D(B.TEXTURE_2D,sA,dA,xA[0].width,xA[0].height);for(let P=0,X=xA.length;P<X;P++)aA=xA[P],PA?p&&I.texSubImage2D(B.TEXTURE_2D,P,0,0,aA.width,aA.height,lA,ZA,aA.data):I.texImage2D(B.TEXTURE_2D,P,dA,aA.width,aA.height,0,lA,ZA,aA.data);y.generateMipmaps=!1}else PA?(lI&&I.texStorage2D(B.TEXTURE_2D,sA,dA,BA.width,BA.height),p&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,BA.width,BA.height,lA,ZA,BA.data)):I.texImage2D(B.TEXTURE_2D,0,dA,BA.width,BA.height,0,lA,ZA,BA.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){PA&&lI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,sA,dA,xA[0].width,xA[0].height,BA.depth);for(let P=0,X=xA.length;P<X;P++)if(aA=xA[P],y.format!==Dg)if(lA!==null)if(PA){if(p)if(y.layerUpdates.size>0){for(const QA of y.layerUpdates){const UA=aA.width*aA.height;I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,P,0,0,QA,aA.width,aA.height,1,lA,aA.data.slice(UA*QA,UA*(QA+1)),0,0)}y.clearLayerUpdates()}else I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,P,0,0,0,aA.width,aA.height,BA.depth,lA,aA.data,0,0)}else I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,P,dA,aA.width,aA.height,BA.depth,0,aA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else PA?p&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,P,0,0,0,aA.width,aA.height,BA.depth,lA,ZA,aA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,P,dA,aA.width,aA.height,BA.depth,0,lA,ZA,aA.data)}else{PA&&lI&&I.texStorage2D(B.TEXTURE_2D,sA,dA,xA[0].width,xA[0].height);for(let P=0,X=xA.length;P<X;P++)aA=xA[P],y.format!==Dg?lA!==null?PA?p&&I.compressedTexSubImage2D(B.TEXTURE_2D,P,0,0,aA.width,aA.height,lA,aA.data):I.compressedTexImage2D(B.TEXTURE_2D,P,dA,aA.width,aA.height,0,aA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):PA?p&&I.texSubImage2D(B.TEXTURE_2D,P,0,0,aA.width,aA.height,lA,ZA,aA.data):I.texImage2D(B.TEXTURE_2D,P,dA,aA.width,aA.height,0,lA,ZA,aA.data)}else if(y.isDataArrayTexture)if(PA){if(lI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,sA,dA,BA.width,BA.height,BA.depth),p)if(y.layerUpdates.size>0){let P;switch(ZA){case B.UNSIGNED_BYTE:switch(lA){case B.ALPHA:P=1;break;case B.LUMINANCE:P=1;break;case B.LUMINANCE_ALPHA:P=2;break;case B.RGB:P=3;break;case B.RGBA:P=4;break;default:throw new Error(`Unknown texel size for format ${lA}.`)}break;case B.UNSIGNED_SHORT_4_4_4_4:case B.UNSIGNED_SHORT_5_5_5_1:case B.UNSIGNED_SHORT_5_6_5:P=1;break;default:throw new Error(`Unknown texel size for type ${ZA}.`)}const X=BA.width*BA.height*P;for(const QA of y.layerUpdates)I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,QA,BA.width,BA.height,1,lA,ZA,BA.data.slice(X*QA,X*(QA+1)));y.clearLayerUpdates()}else I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,BA.width,BA.height,BA.depth,lA,ZA,BA.data)}else I.texImage3D(B.TEXTURE_2D_ARRAY,0,dA,BA.width,BA.height,BA.depth,0,lA,ZA,BA.data);else if(y.isData3DTexture)PA?(lI&&I.texStorage3D(B.TEXTURE_3D,sA,dA,BA.width,BA.height,BA.depth),p&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,BA.width,BA.height,BA.depth,lA,ZA,BA.data)):I.texImage3D(B.TEXTURE_3D,0,dA,BA.width,BA.height,BA.depth,0,lA,ZA,BA.data);else if(y.isFramebufferTexture){if(lI)if(PA)I.texStorage2D(B.TEXTURE_2D,sA,dA,BA.width,BA.height);else{let P=BA.width,X=BA.height;for(let QA=0;QA<sA;QA++)I.texImage2D(B.TEXTURE_2D,QA,dA,P,X,0,lA,ZA,null),P>>=1,X>>=1}}else if(xA.length>0){if(PA&&lI){const P=NI(xA[0]);I.texStorage2D(B.TEXTURE_2D,sA,dA,P.width,P.height)}for(let P=0,X=xA.length;P<X;P++)aA=xA[P],PA?p&&I.texSubImage2D(B.TEXTURE_2D,P,0,0,lA,ZA,aA):I.texImage2D(B.TEXTURE_2D,P,dA,lA,ZA,aA);y.generateMipmaps=!1}else if(PA){if(lI){const P=NI(BA);I.texStorage2D(B.TEXTURE_2D,sA,dA,P.width,P.height)}p&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,lA,ZA,BA)}else I.texImage2D(B.TEXTURE_2D,0,dA,lA,ZA,BA);n(y)&&r($),kA.__version=AA.version,y.onUpdate&&y.onUpdate(y)}J.__version=y.version}function j(J,y,v){if(y.image.length!==6)return;const $=VA(J,y),IA=y.source;I.bindTexture(B.TEXTURE_CUBE_MAP,J.__webglTexture,B.TEXTURE0+v);const AA=g.get(IA);if(IA.version!==AA.__version||$===!0){I.activeTexture(B.TEXTURE0+v);const kA=AI.getPrimaries(AI.workingColorSpace),oA=y.colorSpace===EC?null:AI.getPrimaries(y.colorSpace),tA=y.colorSpace===EC||kA===oA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,y.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,tA);const YA=y.isCompressedTexture||y.image[0].isCompressedTexture,BA=y.image[0]&&y.image[0].isDataTexture,lA=[];for(let X=0;X<6;X++)!YA&&!BA?lA[X]=w(y.image[X],!0,C.maxCubemapSize):lA[X]=BA?y.image[X].image:y.image[X],lA[X]=fA(y,lA[X]);const ZA=lA[0],dA=Q.convert(y.format,y.colorSpace),aA=Q.convert(y.type),xA=l(y.internalFormat,dA,aA,y.colorSpace),PA=y.isVideoTexture!==!0,lI=AA.__version===void 0||$===!0,p=IA.dataReady;let sA=M(y,ZA);FA(B.TEXTURE_CUBE_MAP,y);let P;if(YA){PA&&lI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,sA,xA,ZA.width,ZA.height);for(let X=0;X<6;X++){P=lA[X].mipmaps;for(let QA=0;QA<P.length;QA++){const UA=P[QA];y.format!==Dg?dA!==null?PA?p&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA,0,0,UA.width,UA.height,dA,UA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA,xA,UA.width,UA.height,0,UA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):PA?p&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA,0,0,UA.width,UA.height,dA,aA,UA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA,xA,UA.width,UA.height,0,dA,aA,UA.data)}}}else{if(P=y.mipmaps,PA&&lI){P.length>0&&sA++;const X=NI(lA[0]);I.texStorage2D(B.TEXTURE_CUBE_MAP,sA,xA,X.width,X.height)}for(let X=0;X<6;X++)if(BA){PA?p&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,lA[X].width,lA[X].height,dA,aA,lA[X].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,xA,lA[X].width,lA[X].height,0,dA,aA,lA[X].data);for(let QA=0;QA<P.length;QA++){const UA=P[QA].image[X].image;PA?p&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA+1,0,0,UA.width,UA.height,dA,aA,UA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA+1,xA,UA.width,UA.height,0,dA,aA,UA.data)}}else{PA?p&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,dA,aA,lA[X]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,xA,dA,aA,lA[X]);for(let QA=0;QA<P.length;QA++){const UA=P[QA];PA?p&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA+1,0,0,dA,aA,UA.image[X]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,QA+1,xA,dA,aA,UA.image[X])}}}n(y)&&r(B.TEXTURE_CUBE_MAP),AA.__version=IA.version,y.onUpdate&&y.onUpdate(y)}J.__version=y.version}function CA(J,y,v,$,IA,AA){const kA=Q.convert(v.format,v.colorSpace),oA=Q.convert(v.type),tA=l(v.internalFormat,kA,oA,v.colorSpace);if(!g.get(y).__hasExternalTextures){const YA=Math.max(1,y.width>>AA),BA=Math.max(1,y.height>>AA);IA===B.TEXTURE_3D||IA===B.TEXTURE_2D_ARRAY?I.texImage3D(IA,AA,tA,YA,BA,y.depth,0,kA,oA,null):I.texImage2D(IA,AA,tA,YA,BA,0,kA,oA,null)}I.bindFramebuffer(B.FRAMEBUFFER,J),$A(y)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,$,IA,g.get(v).__webglTexture,0,KA(y)):(IA===B.TEXTURE_2D||IA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&IA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,$,IA,g.get(v).__webglTexture,AA),I.bindFramebuffer(B.FRAMEBUFFER,null)}function nA(J,y,v){if(B.bindRenderbuffer(B.RENDERBUFFER,J),y.depthBuffer){const $=y.depthTexture,IA=$&&$.isDepthTexture?$.type:null,AA=c(y.stencilBuffer,IA),kA=y.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,oA=KA(y);$A(y)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,oA,AA,y.width,y.height):v?B.renderbufferStorageMultisample(B.RENDERBUFFER,oA,AA,y.width,y.height):B.renderbufferStorage(B.RENDERBUFFER,AA,y.width,y.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,kA,B.RENDERBUFFER,J)}else{const $=y.textures;for(let IA=0;IA<$.length;IA++){const AA=$[IA],kA=Q.convert(AA.format,AA.colorSpace),oA=Q.convert(AA.type),tA=l(AA.internalFormat,kA,oA,AA.colorSpace),YA=KA(y);v&&$A(y)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,YA,tA,y.width,y.height):$A(y)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,YA,tA,y.width,y.height):B.renderbufferStorage(B.RENDERBUFFER,tA,y.width,y.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function eA(J,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,J),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const v=g.get(y.depthTexture).__webglTexture,$=KA(y);if(y.depthTexture.format===PC)$A(y)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,v,0,$):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,v,0);else if(y.depthTexture.format===jC)$A(y)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,v,0,$):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,v,0);else throw new Error("Unknown depthTexture format")}function vA(J){const y=g.get(J),v=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!y.__autoAllocateDepthBuffer){if(v)throw new Error("target.depthTexture not supported in Cube render targets");eA(y.__webglFramebuffer,J)}else if(v){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)I.bindFramebuffer(B.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=B.createRenderbuffer(),nA(y.__webglDepthbuffer[$],J,!1)}else I.bindFramebuffer(B.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=B.createRenderbuffer(),nA(y.__webglDepthbuffer,J,!1);I.bindFramebuffer(B.FRAMEBUFFER,null)}function TA(J,y,v){const $=g.get(J);y!==void 0&&CA($.__webglFramebuffer,J,J.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),v!==void 0&&vA(J)}function zA(J){const y=J.texture,v=g.get(J),$=g.get(y);J.addEventListener("dispose",K);const IA=J.textures,AA=J.isWebGLCubeRenderTarget===!0,kA=IA.length>1;if(kA||($.__webglTexture===void 0&&($.__webglTexture=B.createTexture()),$.__version=y.version,E.memory.textures++),AA){v.__webglFramebuffer=[];for(let oA=0;oA<6;oA++)if(y.mipmaps&&y.mipmaps.length>0){v.__webglFramebuffer[oA]=[];for(let tA=0;tA<y.mipmaps.length;tA++)v.__webglFramebuffer[oA][tA]=B.createFramebuffer()}else v.__webglFramebuffer[oA]=B.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){v.__webglFramebuffer=[];for(let oA=0;oA<y.mipmaps.length;oA++)v.__webglFramebuffer[oA]=B.createFramebuffer()}else v.__webglFramebuffer=B.createFramebuffer();if(kA)for(let oA=0,tA=IA.length;oA<tA;oA++){const YA=g.get(IA[oA]);YA.__webglTexture===void 0&&(YA.__webglTexture=B.createTexture(),E.memory.textures++)}if(J.samples>0&&$A(J)===!1){v.__webglMultisampledFramebuffer=B.createFramebuffer(),v.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let oA=0;oA<IA.length;oA++){const tA=IA[oA];v.__webglColorRenderbuffer[oA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,v.__webglColorRenderbuffer[oA]);const YA=Q.convert(tA.format,tA.colorSpace),BA=Q.convert(tA.type),lA=l(tA.internalFormat,YA,BA,tA.colorSpace,J.isXRRenderTarget===!0),ZA=KA(J);B.renderbufferStorageMultisample(B.RENDERBUFFER,ZA,lA,J.width,J.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+oA,B.RENDERBUFFER,v.__webglColorRenderbuffer[oA])}B.bindRenderbuffer(B.RENDERBUFFER,null),J.depthBuffer&&(v.__webglDepthRenderbuffer=B.createRenderbuffer(),nA(v.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(AA){I.bindTexture(B.TEXTURE_CUBE_MAP,$.__webglTexture),FA(B.TEXTURE_CUBE_MAP,y);for(let oA=0;oA<6;oA++)if(y.mipmaps&&y.mipmaps.length>0)for(let tA=0;tA<y.mipmaps.length;tA++)CA(v.__webglFramebuffer[oA][tA],J,y,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+oA,tA);else CA(v.__webglFramebuffer[oA],J,y,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+oA,0);n(y)&&r(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(kA){for(let oA=0,tA=IA.length;oA<tA;oA++){const YA=IA[oA],BA=g.get(YA);I.bindTexture(B.TEXTURE_2D,BA.__webglTexture),FA(B.TEXTURE_2D,YA),CA(v.__webglFramebuffer,J,YA,B.COLOR_ATTACHMENT0+oA,B.TEXTURE_2D,0),n(YA)&&r(B.TEXTURE_2D)}I.unbindTexture()}else{let oA=B.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(oA=J.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY),I.bindTexture(oA,$.__webglTexture),FA(oA,y),y.mipmaps&&y.mipmaps.length>0)for(let tA=0;tA<y.mipmaps.length;tA++)CA(v.__webglFramebuffer[tA],J,y,B.COLOR_ATTACHMENT0,oA,tA);else CA(v.__webglFramebuffer,J,y,B.COLOR_ATTACHMENT0,oA,0);n(y)&&r(oA),I.unbindTexture()}J.depthBuffer&&vA(J)}function q(J){const y=J.textures;for(let v=0,$=y.length;v<$;v++){const IA=y[v];if(n(IA)){const AA=J.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:B.TEXTURE_2D,kA=g.get(IA).__webglTexture;I.bindTexture(AA,kA),r(AA),I.unbindTexture()}}}const XA=[],WA=[];function rI(J){if(J.samples>0){if($A(J)===!1){const y=J.textures,v=J.width,$=J.height;let IA=B.COLOR_BUFFER_BIT;const AA=J.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,kA=g.get(J),oA=y.length>1;if(oA)for(let tA=0;tA<y.length;tA++)I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,kA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,kA.__webglFramebuffer);for(let tA=0;tA<y.length;tA++){if(J.resolveDepthBuffer&&(J.depthBuffer&&(IA|=B.DEPTH_BUFFER_BIT),J.stencilBuffer&&J.resolveStencilBuffer&&(IA|=B.STENCIL_BUFFER_BIT)),oA){B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,kA.__webglColorRenderbuffer[tA]);const YA=g.get(y[tA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,YA,0)}B.blitFramebuffer(0,0,v,$,0,0,v,$,IA,B.NEAREST),o===!0&&(XA.length=0,WA.length=0,XA.push(B.COLOR_ATTACHMENT0+tA),J.depthBuffer&&J.resolveDepthBuffer===!1&&(XA.push(AA),WA.push(AA),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,WA)),B.invalidateFramebuffer(B.READ_FRAMEBUFFER,XA))}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),oA)for(let tA=0;tA<y.length;tA++){I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.RENDERBUFFER,kA.__webglColorRenderbuffer[tA]);const YA=g.get(y[tA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.TEXTURE_2D,YA,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,kA.__webglMultisampledFramebuffer)}else if(J.depthBuffer&&J.resolveDepthBuffer===!1&&o){const y=J.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT;B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[y])}}}function KA(J){return Math.min(C.maxSamples,J.samples)}function $A(J){const y=g.get(J);return J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _A(J){const y=E.render.frame;t.get(J)!==y&&(t.set(J,y),J.update())}function fA(J,y){const v=J.colorSpace,$=J.format,IA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||v!==JI&&v!==EC&&(AI.getTransfer(v)===aI?($!==Dg||IA!==kg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",v)),y}function NI(J){return typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement?(e.width=J.naturalWidth||J.width,e.height=J.naturalHeight||J.height):typeof VideoFrame<"u"&&J instanceof VideoFrame?(e.width=J.displayWidth,e.height=J.displayHeight):(e.width=J.width,e.height=J.height),e}this.allocateTextureUnit=T,this.resetTextureUnits=R,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=_,this.setTextureCube=z,this.rebindTextures=TA,this.setupRenderTarget=zA,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=rI,this.setupDepthRenderbuffer=vA,this.setupFrameBufferTexture=CA,this.useMultisampledRTT=$A}function cc(B,A){function I(g,C=EC){let Q;const E=AI.getTransfer(C);if(g===kg)return B.UNSIGNED_BYTE;if(g===zo)return B.UNSIGNED_SHORT_4_4_4_4;if(g===$o)return B.UNSIGNED_SHORT_5_5_5_1;if(g===qD)return B.UNSIGNED_INT_5_9_9_9_REV;if(g===pD)return B.BYTE;if(g===dD)return B.SHORT;if(g===KQ)return B.UNSIGNED_SHORT;if(g===Xo)return B.INT;if(g===ZC)return B.UNSIGNED_INT;if(g===gg)return B.FLOAT;if(g===QC)return B.HALF_FLOAT;if(g===YD)return B.ALPHA;if(g===LD)return B.RGB;if(g===Dg)return B.RGBA;if(g===uD)return B.LUMINANCE;if(g===HD)return B.LUMINANCE_ALPHA;if(g===PC)return B.DEPTH_COMPONENT;if(g===jC)return B.DEPTH_STENCIL;if(g===Ae)return B.RED;if(g===Ie)return B.RED_INTEGER;if(g===mD)return B.RG;if(g===ge)return B.RG_INTEGER;if(g===Ce)return B.RGBA_INTEGER;if(g===fE||g===TE||g===xE||g===bE)if(E===aI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===fE)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===TE)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===xE)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===bE)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===fE)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===TE)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===xE)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===bE)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Be||g===Qe||g===Ee||g===ie)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===Be)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Qe)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Ee)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===ie)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===oe||g===ee||g===te)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===oe||g===ee)return E===aI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===te)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===ae||g===se||g===De||g===he||g===re||g===ne||g===Se||g===we||g===ce||g===le||g===Ge||g===ye||g===ke||g===Ue)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===ae)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===se)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===De)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===he)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===re)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===ne)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===Se)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===we)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===ce)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===le)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===Ge)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===ye)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===ke)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===Ue)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===OE||g===Me||g===Ne)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===OE)return E===aI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Me)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Ne)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===fD||g===Ke||g===Je||g===Fe)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===OE)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===Ke)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===Je)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Fe)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===WC?B.UNSIGNED_INT_24_8:B[g]!==void 0?B[g]:null}return{convert:I}}class lc extends $I{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Pg extends oI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gc={type:"move"};class Ni{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pg,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pg,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pg,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const n=I.getJointPose(w,g),r=this._getHandJoint(e,w);n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=n.radius),r.visible=n!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),h=.02,S=.005;e.inputState.pinching&&s>h+S?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=h-S&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Gc)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Pg;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const yc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kc=`
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

	property:`,I,`
	object:`,A,`
	value:`,E)}addColor(A,I,g=1){return new Wl(this,A,I,g)}addFolder(A){return new qo({parent:this,title:A})}load(A,I=!0){return A.controllers&&this.controllers.forEach(g=>{g instanceof po||g._name in A.controllers&&g.load(A.controllers[g._name])}),I&&A.folders&&this.folders.forEach(g=>{g._title in A.folders&&g.load(A.folders[g._title])}),this}save(A=!0){const I={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof po)){if(g._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);I.controllers[g._name]=g.save()}}),A&&this.folders.forEach(g=>{if(g._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);I.folders[g._title]=g.save()}),I}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");const g=Q=>{Q.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const C=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=C+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(I=>{A=A.concat(I.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(I=>{A=A.concat(I.foldersRecursive())}),A}}class Xl extends Xc{constructor(A){super(A),this.type=QC}parse(A){const I=function(r,l){switch(r){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(l||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(l||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(l||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(l||""))}},g=`
`,C=function(r,l,c){l=l||1024;let M=r.pos,L=-1,K=0,N="",d=String.fromCharCode.apply(null,new Uint16Array(r.subarray(M,M+128)));for(;0>(L=d.indexOf(g))&&K<l&&M<r.byteLength;)N+=d,K+=d.length,M+=128,d+=String.fromCharCode.apply(null,new Uint16Array(r.subarray(M,M+128)));return-1<L?(r.pos+=K+L+1,N+d.slice(0,L)):!1},Q=function(r){const l=/^#\?(\S+)/,c=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,K=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let d,U;for((r.pos>=r.byteLength||!(d=C(r)))&&I(1,"no header found"),(U=d.match(l))||I(3,"bad initial token"),N.valid|=1,N.programtype=U[1],N.string+=d+`
`;d=C(r),d!==!1;){if(N.string+=d+`
`,d.charAt(0)==="#"){N.comments+=d+`
`;continue}if((U=d.match(c))&&(N.gamma=parseFloat(U[1])),(U=d.match(M))&&(N.exposure=parseFloat(U[1])),(U=d.match(L))&&(N.valid|=2,N.format=U[1]),(U=d.match(K))&&(N.valid|=4,N.height=parseInt(U[1],10),N.width=parseInt(U[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||I(3,"missing format specifier"),N.valid&4||I(3,"missing image size specifier"),N},E=function(r,l,c){const M=l;if(M<8||M>32767||r[0]!==2||r[1]!==2||r[2]&128)return new Uint8Array(r);M!==(r[2]<<8|r[3])&&I(3,"wrong scanline width");const L=new Uint8Array(4*l*c);L.length||I(4,"unable to allocate buffer space");let K=0,N=0;const d=4*M,U=new Uint8Array(4),G=new Uint8Array(d);let R=c;for(;R>0&&N<r.byteLength;){N+4>r.byteLength&&I(1),U[0]=r[N++],U[1]=r[N++],U[2]=r[N++],U[3]=r[N++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=M)&&I(3,"bad rgbe scanline format");let T=0,x;for(;T<d&&N<r.byteLength;){x=r[N++];const V=x>128;if(V&&(x-=128),(x===0||T+x>d)&&I(3,"bad scanline data"),V){const _=r[N++];for(let z=0;z<x;z++)G[T++]=_}else G.set(r.subarray(N,N+x),T),T+=x,N+=x}const Z=M;for(let V=0;V<Z;V++){let _=0;L[K]=G[V+_],_+=M,L[K+1]=G[V+_],_+=M,L[K+2]=G[V+_],_+=M,L[K+3]=G[V+_],K+=4}R--}return L},i=function(r,l,c,M){const L=r[l+3],K=Math.pow(2,L-128)/255;c[M+0]=r[l+0]*K,c[M+1]=r[l+1]*K,c[M+2]=r[l+2]*K,c[M+3]=1},o=function(r,l,c,M){const L=r[l+3],K=Math.pow(2,L-128)/255;c[M+0]=vQ.toHalfFloat(Math.min(r[l+0]*K,65504)),c[M+1]=vQ.toHalfFloat(Math.min(r[l+1]*K,65504)),c[M+2]=vQ.toHalfFloat(Math.min(r[l+2]*K,65504)),c[M+3]=vQ.toHalfFloat(1)},e=new Uint8Array(A);e.pos=0;const t=Q(e),a=t.width,s=t.height,h=E(e.subarray(e.pos),a,s);let S,w,n;switch(this.type){case gg:n=h.length/4;const r=new Float32Array(n*4);for(let c=0;c<n;c++)i(h,c*4,r,c*4);S=r,w=gg;break;case QC:n=h.length/4;const l=new Uint16Array(n*4);for(let c=0;c<n;c++)o(h,c*4,l,c*4);S=l,w=QC;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:a,height:s,data:S,header:t.string,gamma:t.gamma,exposure:t.exposure,type:w}}setDataType(A){return this.type=A,this}load(A,I,g,C){function Q(E,i){switch(E.type){case gg:case QC:E.colorSpace=JI,E.minFilter=LI,E.magFilter=LI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,Q,g,C)}}class wQ extends SI{constructor(){super(wQ.Geometry,new sC({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const A=new Y,I=new Y,g=new Ba(16,16),C=new Ba(16,16);let Q=kg;const E=wQ.Geometry,i=new Hi({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new Hi({uniforms:{map:{value:g},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),e=new SI(E,i),t=[],a=fC.Shader,s=new Hi({name:a.name,uniforms:{map:{value:null},occlusionMap:{value:C},color:{value:new NA(16777215)},scale:{value:new pA},screenPosition:{value:new Y}},vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:YE,transparent:!0,depthWrite:!1}),h=new SI(E,s);this.addElement=function(l){t.push(l)};const S=new pA,w=new pA,n=new wl,r=new QI;this.onBeforeRender=function(l,c,M){l.getCurrentViewport(r);const L=l.getRenderTarget(),K=L!==null?L.texture.type:kg;Q!==K&&(g.dispose(),C.dispose(),g.type=C.type=K,Q=K);const N=r.w/r.z,d=r.z/2,U=r.w/2;let G=16/r.w;if(S.set(G*N,G),n.min.set(r.x,r.y),n.max.set(r.x+(r.z-16),r.y+(r.w-16)),I.setFromMatrixPosition(this.matrixWorld),I.applyMatrix4(M.matrixWorldInverse),!(I.z>0)&&(A.copy(I).applyMatrix4(M.projectionMatrix),w.x=r.x+A.x*d+d-8,w.y=r.y+A.y*U+U-8,n.containsPoint(w))){l.copyFramebufferToTexture(g,w);let R=i.uniforms;R.scale.value=S,R.screenPosition.value=A,l.renderBufferDirect(M,null,E,i,e,null),l.copyFramebufferToTexture(C,w),R=o.uniforms,R.scale.value=S,R.screenPosition.value=A,l.renderBufferDirect(M,null,E,o,e,null);const T=-A.x*2,x=-A.y*2;for(let Z=0,V=t.length;Z<V;Z++){const _=t[Z],z=s.uniforms;z.color.value.copy(_.color),z.map.value=_.texture,z.screenPosition.value.x=A.x+T*_.distance,z.screenPosition.value.y=A.y+x*_.distance,G=_.size/r.w;const W=r.w/r.z;z.scale.value.set(G*W,G),s.uniformsNeedUpdate=!0,l.renderBufferDirect(M,null,E,s,h,null)}}},this.dispose=function(){i.dispose(),o.dispose(),s.dispose(),g.dispose(),C.dispose();for(let l=0,c=t.length;l<c;l++)t[l].texture.dispose()}}}class fC{constructor(A,I=1,g=0,C=new NA(16777215)){this.texture=A,this.size=I,this.distance=g,this.color=C}}fC.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`},wQ.Geometry=function(){const B=new XI,A=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),I=new Tt(A,5);return B.setIndex([0,1,2,0,2,3]),B.setAttribute("position",new vB(I,3,0,!1)),B.setAttribute("uv",new vB(I,2,3,!1)),B}();class zl{constructor(A){DA(this,"scene");DA(this,"light");this.scene=A,this.light=new sa(16777215,Math.PI),this.light.position.set(65.7,19.2,50.2),this.light.castShadow=!0,this.scene.add(this.light);const I=new xi,g=I.load("img/lensflare0.png"),C=I.load("img/lensflare3.png"),Q=new wQ;Q.addElement(new fC(g,1e3,0)),Q.addElement(new fC(C,500,.2)),Q.addElement(new fC(C,250,.8)),Q.addElement(new fC(C,125,.6)),Q.addElement(new fC(C,62.5,.4)),this.light.add(Q)}async init(){await new Xl().loadAsync("img/venice_sunset_1k.hdr").then(A=>{A.mapping=kQ,this.scene.environment=A,this.scene.background=A,this.scene.backgroundBlurriness=.4})}}function Ks(B,A){if(A===OD)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),B;if(A===ZE||A===pe){let I=B.getIndex();if(I===null){const E=[],i=B.getAttribute("position");if(i!==void 0){for(let o=0;o<i.count;o++)E.push(o);B.setIndex(E),I=B.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),B}const g=I.count-2,C=[];if(A===ZE)for(let E=1;E<=g;E++)C.push(I.getX(0)),C.push(I.getX(E)),C.push(I.getX(E+1));else for(let E=0;E<g;E++)E%2===0?(C.push(I.getX(E)),C.push(I.getX(E+1)),C.push(I.getX(E+2))):(C.push(I.getX(E+2)),C.push(I.getX(E+1)),C.push(I.getX(E)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const Q=B.clone();return Q.setIndex(C),Q.clearGroups(),Q}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),B}class Yo extends rC{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new CG(I)}),this.register(function(I){return new BG(I)}),this.register(function(I){return new DG(I)}),this.register(function(I){return new hG(I)}),this.register(function(I){return new rG(I)}),this.register(function(I){return new EG(I)}),this.register(function(I){return new iG(I)}),this.register(function(I){return new oG(I)}),this.register(function(I){return new eG(I)}),this.register(function(I){return new gG(I)}),this.register(function(I){return new tG(I)}),this.register(function(I){return new QG(I)}),this.register(function(I){return new sG(I)}),this.register(function(I){return new aG(I)}),this.register(function(I){return new AG(I)}),this.register(function(I){return new nG(I)}),this.register(function(I){return new SG(I)})}load(A,I,g,C){const Q=this;let E;if(this.resourcePath!=="")E=this.resourcePath;else if(this.path!==""){const e=zB.extractUrlBase(A);E=zB.resolveURL(e,this.path)}else E=zB.extractUrlBase(A);this.manager.itemStart(A);const i=function(e){C?C(e):console.error(e),Q.manager.itemError(A),Q.manager.itemEnd(A)},o=new VB(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(A,function(e){try{Q.parse(e,E,function(t){I(t),Q.manager.itemEnd(A)},i)}catch(t){i(t)}},g,i)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let Q;const E={},i={},o=new TextDecoder;if(typeof A=="string")Q=JSON.parse(A);else if(A instanceof ArrayBuffer)if(o.decode(new Uint8Array(A,0,4))===Js){try{E[OA.KHR_BINARY_GLTF]=new wG(A)}catch(t){C&&C(t);return}Q=JSON.parse(E[OA.KHR_BINARY_GLTF].content)}else Q=JSON.parse(o.decode(A));else Q=A;if(Q.asset===void 0||Q.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const e=new pG(Q,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});e.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const a=this.pluginCallbacks[t](e);a.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),i[a.name]=a,E[a.name]=!0}if(Q.extensionsUsed)for(let t=0;t<Q.extensionsUsed.length;++t){const a=Q.extensionsUsed[t],s=Q.extensionsRequired||[];switch(a){case OA.KHR_MATERIALS_UNLIT:E[a]=new IG;break;case OA.KHR_DRACO_MESH_COMPRESSION:E[a]=new cG(Q,this.dracoLoader);break;case OA.KHR_TEXTURE_TRANSFORM:E[a]=new lG;break;case OA.KHR_MESH_QUANTIZATION:E[a]=new GG;break;default:s.indexOf(a)>=0&&i[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}e.setExtensions(E),e.setPlugins(i),e.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,Q){g.parse(A,I,C,Q)})}}function $l(){let B={};return{get:function(A){return B[A]},add:function(A,I){B[A]=I},remove:function(A){delete B[A]},removeAll:function(){B={}}}}const OA={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AG{constructor(A){this.parser=A,this.name=OA.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const Q=I[g];Q.extensions&&Q.extensions[this.name]&&Q.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,Q.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const Q=I.json,E=((Q.extensions&&Q.extensions[this.name]||{}).lights||[])[A];let i;const o=new NA(16777215);E.color!==void 0&&o.setRGB(E.color[0],E.color[1],E.color[2],JI);const e=E.range!==void 0?E.range:0;switch(E.type){case"directional":i=new sa(o),i.target.position.set(0,0,-1),i.add(i.target);break;case"point":i=new Il(o),i.distance=e;break;case"spot":i=new $c(o),i.distance=e,E.spot=E.spot||{},E.spot.innerConeAngle=E.spot.innerConeAngle!==void 0?E.spot.innerConeAngle:0,E.spot.outerConeAngle=E.spot.outerConeAngle!==void 0?E.spot.outerConeAngle:Math.PI/4,i.angle=E.spot.outerConeAngle,i.penumbra=1-E.spot.innerConeAngle/E.spot.outerConeAngle,i.target.position.set(0,0,-1),i.add(i.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+E.type)}return i.position.set(0,0,0),i.decay=2,IC(i,E),E.intensity!==void 0&&(i.intensity=E.intensity),i.name=I.createUniqueName(E.name||"light_"+A),C=Promise.resolve(i),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,C=g.json.nodes[A],Q=(C.extensions&&C.extensions[this.name]||{}).light;return Q===void 0?null:this._loadLight(Q).then(function(E){return g._getNodeRef(I.cache,Q,E)})}}class IG{constructor(){this.name=OA.KHR_MATERIALS_UNLIT}getMaterialType(){return sC}extendParams(A,I,g){const C=[];A.color=new NA(1,1,1),A.opacity=1;const Q=I.pbrMetallicRoughness;if(Q){if(Array.isArray(Q.baseColorFactor)){const E=Q.baseColorFactor;A.color.setRGB(E[0],E[1],E[2],JI),A.opacity=E[3]}Q.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",Q.baseColorTexture,bI))}return Promise.all(C)}}class gG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const g=this.parser.json.materials[A];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const C=g.extensions[this.name].emissiveStrength;return C!==void 0&&(I.emissiveIntensity=C),Promise.resolve()}}class CG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];if(E.clearcoatFactor!==void 0&&(I.clearcoat=E.clearcoatFactor),E.clearcoatTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatMap",E.clearcoatTexture)),E.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=E.clearcoatRoughnessFactor),E.clearcoatRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatRoughnessMap",E.clearcoatRoughnessTexture)),E.clearcoatNormalTexture!==void 0&&(Q.push(g.assignTexture(I,"clearcoatNormalMap",E.clearcoatNormalTexture)),E.clearcoatNormalTexture.scale!==void 0)){const i=E.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new pA(i,i)}return Promise.all(Q)}}class BG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_DISPERSION}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser.json.materials[A];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const C=g.extensions[this.name];return I.dispersion=C.dispersion!==void 0?C.dispersion:0,Promise.resolve()}}class QG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.iridescenceFactor!==void 0&&(I.iridescence=E.iridescenceFactor),E.iridescenceTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceMap",E.iridescenceTexture)),E.iridescenceIor!==void 0&&(I.iridescenceIOR=E.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),E.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=E.iridescenceThicknessMinimum),E.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=E.iridescenceThicknessMaximum),E.iridescenceThicknessTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceThicknessMap",E.iridescenceThicknessTexture)),Promise.all(Q)}}class EG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_SHEEN}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[];I.sheenColor=new NA(0,0,0),I.sheenRoughness=0,I.sheen=1;const E=C.extensions[this.name];if(E.sheenColorFactor!==void 0){const i=E.sheenColorFactor;I.sheenColor.setRGB(i[0],i[1],i[2],JI)}return E.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=E.sheenRoughnessFactor),E.sheenColorTexture!==void 0&&Q.push(g.assignTexture(I,"sheenColorMap",E.sheenColorTexture,bI)),E.sheenRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"sheenRoughnessMap",E.sheenRoughnessTexture)),Promise.all(Q)}}class iG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.transmissionFactor!==void 0&&(I.transmission=E.transmissionFactor),E.transmissionTexture!==void 0&&Q.push(g.assignTexture(I,"transmissionMap",E.transmissionTexture)),Promise.all(Q)}}class oG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_VOLUME}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];I.thickness=E.thicknessFactor!==void 0?E.thicknessFactor:0,E.thicknessTexture!==void 0&&Q.push(g.assignTexture(I,"thicknessMap",E.thicknessTexture)),I.attenuationDistance=E.attenuationDistance||1/0;const i=E.attenuationColor||[1,1,1];return I.attenuationColor=new NA().setRGB(i[0],i[1],i[2],JI),Promise.all(Q)}}class eG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_IOR}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser.json.materials[A];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const C=g.extensions[this.name];return I.ior=C.ior!==void 0?C.ior:1.5,Promise.resolve()}}class tG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_SPECULAR}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];I.specularIntensity=E.specularFactor!==void 0?E.specularFactor:1,E.specularTexture!==void 0&&Q.push(g.assignTexture(I,"specularIntensityMap",E.specularTexture));const i=E.specularColorFactor||[1,1,1];return I.specularColor=new NA().setRGB(i[0],i[1],i[2],JI),E.specularColorTexture!==void 0&&Q.push(g.assignTexture(I,"specularColorMap",E.specularColorTexture,bI)),Promise.all(Q)}}class aG{constructor(A){this.parser=A,this.name=OA.EXT_MATERIALS_BUMP}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return I.bumpScale=E.bumpFactor!==void 0?E.bumpFactor:1,E.bumpTexture!==void 0&&Q.push(g.assignTexture(I,"bumpMap",E.bumpTexture)),Promise.all(Q)}}class sG{constructor(A){this.parser=A,this.name=OA.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){const I=this.parser.json.materials[A];return!I.extensions||!I.extensions[this.name]?null:Kg}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.anisotropyStrength!==void 0&&(I.anisotropy=E.anisotropyStrength),E.anisotropyRotation!==void 0&&(I.anisotropyRotation=E.anisotropyRotation),E.anisotropyTexture!==void 0&&Q.push(g.assignTexture(I,"anisotropyMap",E.anisotropyTexture)),Promise.all(Q)}}class DG{constructor(A){this.parser=A,this.name=OA.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const Q=C.extensions[this.name],E=I.options.ktx2Loader;if(!E){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,Q.source,E)}}class hG{constructor(A){this.parser=A,this.name=OA.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const E=Q.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class rG{constructor(A){this.parser=A,this.name=OA.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const E=Q.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class nG{constructor(A){this.name=OA.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],Q=this.parser.getDependency("buffer",C.buffer),E=this.parser.options.meshoptDecoder;if(!E||!E.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Q.then(function(i){const o=C.byteOffset||0,e=C.byteLength||0,t=C.count,a=C.byteStride,s=new Uint8Array(i,o,e);return E.decodeGltfBufferAsync?E.decodeGltfBufferAsync(t,a,s,C.mode,C.filter).then(function(h){return h.buffer}):E.ready.then(function(){const h=new ArrayBuffer(t*a);return E.decodeGltfBuffer(new Uint8Array(h),t,a,s,C.mode,C.filter),h})})}else return null}}class SG{constructor(A){this.name=OA.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const o of C.primitives)if(o.mode!==tg.TRIANGLES&&o.mode!==tg.TRIANGLE_STRIP&&o.mode!==tg.TRIANGLE_FAN&&o.mode!==void 0)return null;const Q=g.extensions[this.name].attributes,E=[],i={};for(const o in Q)E.push(this.parser.getDependency("accessor",Q[o]).then(e=>(i[o]=e,i[o])));return E.length<1?null:(E.push(this.parser.createNodeMesh(A)),Promise.all(E).then(o=>{const e=o.pop(),t=e.isGroup?e.children:[e],a=o[0].count,s=[];for(const h of t){const S=new qA,w=new Y,n=new uI,r=new Y(1,1,1),l=new Lc(h.geometry,h.material,a);for(let c=0;c<a;c++)i.TRANSLATION&&w.fromBufferAttribute(i.TRANSLATION,c),i.ROTATION&&n.fromBufferAttribute(i.ROTATION,c),i.SCALE&&r.fromBufferAttribute(i.SCALE,c),l.setMatrixAt(c,S.compose(w,n,r));for(const c in i)if(c==="_COLOR_0"){const M=i[c];l.instanceColor=new pi(M.array,M.itemSize,M.normalized)}else c!=="TRANSLATION"&&c!=="ROTATION"&&c!=="SCALE"&&h.geometry.setAttribute(c,i[c]);oI.prototype.copy.call(l,h),this.parser.assignFinalMaterial(l),s.push(l)}return e.isGroup?(e.clear(),e.add(...s),e):s[0]}))}}const Js="glTF",cQ=12,Fs={JSON:1313821514,BIN:5130562};class wG{constructor(A){this.name=OA.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,cQ),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==Js)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-cQ,Q=new DataView(A,cQ);let E=0;for(;E<C;){const i=Q.getUint32(E,!0);E+=4;const o=Q.getUint32(E,!0);if(E+=4,o===Fs.JSON){const e=new Uint8Array(A,cQ+E,i);this.content=g.decode(e)}else if(o===Fs.BIN){const e=cQ+E;this.body=A.slice(e,e+i)}E+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cG{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=OA.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,Q=A.extensions[this.name].bufferView,E=A.extensions[this.name].attributes,i={},o={},e={};for(const t in E){const a=uo[t]||t.toLowerCase();i[a]=E[t]}for(const t in A.attributes){const a=uo[t]||t.toLowerCase();if(E[t]!==void 0){const s=g.accessors[A.attributes[t]],h=pB[s.componentType];e[a]=h.name,o[a]=s.normalized===!0}}return I.getDependency("bufferView",Q).then(function(t){return new Promise(function(a,s){C.decodeDracoFile(t,function(h){for(const S in h.attributes){const w=h.attributes[S],n=o[S];n!==void 0&&(w.normalized=n)}a(h)},i,e,JI,s)})})}}class lG{constructor(){this.name=OA.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class GG{constructor(){this.name=OA.KHR_MESH_QUANTIZATION}}class Rs extends jB{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C*3+C;for(let E=0;E!==C;E++)I[E]=g[Q+E];return I}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=i*2,e=i*3,t=C-I,a=(g-I)/t,s=a*a,h=s*a,S=A*e,w=S-e,n=-2*h+3*s,r=h-s,l=1-n,c=r-s+a;for(let M=0;M!==i;M++){const L=E[w+M+i],K=E[w+M+o]*t,N=E[S+M+i],d=E[S+M]*t;Q[M]=l*L+c*K+n*N+r*d}return Q}}const yG=new uI;class kG extends Rs{interpolate_(A,I,g,C){const Q=super.interpolate_(A,I,g,C);return yG.fromArray(Q).normalize().toArray(Q),Q}}const tg={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pB={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ps={9728:xI,9729:LI,9984:Vo,9985:NQ,9986:qB,9987:yg},ds={33071:Gg,33648:MQ,10497:yC},Lo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UG={CUBICSPLINE:void 0,LINEAR:LB,STEP:YB},Ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MG(B){return B.DefaultMaterial===void 0&&(B.DefaultMaterial=new jg({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mg})),B.DefaultMaterial}function TC(B,A,I){for(const g in I.extensions)B[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function IC(B,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(B.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function NG(B,A,I){let g=!1,C=!1,Q=!1;for(let e=0,t=A.length;e<t;e++){const a=A[e];if(a.POSITION!==void 0&&(g=!0),a.NORMAL!==void 0&&(C=!0),a.COLOR_0!==void 0&&(Q=!0),g&&C&&Q)break}if(!g&&!C&&!Q)return Promise.resolve(B);const E=[],i=[],o=[];for(let e=0,t=A.length;e<t;e++){const a=A[e];if(g){const s=a.POSITION!==void 0?I.getDependency("accessor",a.POSITION):B.attributes.position;E.push(s)}if(C){const s=a.NORMAL!==void 0?I.getDependency("accessor",a.NORMAL):B.attributes.normal;i.push(s)}if(Q){const s=a.COLOR_0!==void 0?I.getDependency("accessor",a.COLOR_0):B.attributes.color;o.push(s)}}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o)]).then(function(e){const t=e[0],a=e[1],s=e[2];return g&&(B.morphAttributes.position=t),C&&(B.morphAttributes.normal=a),Q&&(B.morphAttributes.color=s),B.morphTargetsRelative=!0,B})}function KG(B,A){if(B.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)B.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(B.morphTargetInfluences.length===I.length){B.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)B.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JG(B){let A;const I=B.extensions&&B.extensions[OA.KHR_DRACO_MESH_COMPRESSION];if(I?A="draco:"+I.bufferView+":"+I.indices+":"+mo(I.attributes):A=B.indices+":"+mo(B.attributes)+":"+B.mode,B.targets!==void 0)for(let g=0,C=B.targets.length;g<C;g++)A+=":"+mo(B.targets[g]);return A}function mo(B){let A="";const I=Object.keys(B).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+B[I[g]]+";";return A}function fo(B){switch(B){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FG(B){return B.search(/\.jpe?g($|\?)/i)>0||B.search(/^data\:image\/jpeg/)===0?"image/jpeg":B.search(/\.webp($|\?)/i)>0||B.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const RG=new qA;class pG{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new $l,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,Q=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,Q=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&Q<98?this.textureLoader=new xi(this.options.manager):this.textureLoader=new Cl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new VB(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,Q=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(E){return E._markDefs&&E._markDefs()}),Promise.all(this._invokeAll(function(E){return E.beforeRoot&&E.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(E){const i={scene:E[0][C.scene||0],scenes:E[0],animations:E[1],cameras:E[2],asset:C.asset,parser:g,userData:{}};return TC(Q,i,C),IC(i,C),Promise.all(g._invokeAll(function(o){return o.afterRoot&&o.afterRoot(i)})).then(function(){for(const o of i.scenes)o.updateMatrixWorld();A(i)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,Q=I.length;C<Q;C++){const E=I[C].joints;for(let i=0,o=E.length;i<o;i++)A[E[i]].isBone=!0}for(let C=0,Q=A.length;C<Q;C++){const E=A[C];E.mesh!==void 0&&(this._addNodeRef(this.meshCache,E.mesh),E.skin!==void 0&&(g[E.mesh].isSkinnedMesh=!0)),E.camera!==void 0&&this._addNodeRef(this.cameraCache,E.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),Q=(E,i)=>{const o=this.associations.get(E);o!=null&&this.associations.set(i,o);for(const[e,t]of E.children.entries())Q(t,i.children[e])};return Q(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const Q=A(I[C]);Q&&g.push(Q)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(Q){return Q.loadNode&&Q.loadNode(I)});break;case"mesh":C=this._invokeOne(function(Q){return Q.loadMesh&&Q.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(Q){return Q.loadBufferView&&Q.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(Q){return Q.loadMaterial&&Q.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(Q){return Q.loadTexture&&Q.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(Q){return Q.loadAnimation&&Q.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(Q){return Q!=this&&Q.getDependency&&Q.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(Q,E){return g.getDependency(A,E)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[OA.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(Q,E){g.load(zB.resolveURL(I.uri,C.path),Q,void 0,function(){E(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,Q=I.byteOffset||0;return g.slice(Q,Q+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const E=Lo[C.type],i=pB[C.componentType],o=C.normalized===!0,e=new i(C.count*E);return Promise.resolve(new RI(e,E,o))}const Q=[];return C.bufferView!==void 0?Q.push(this.getDependency("bufferView",C.bufferView)):Q.push(null),C.sparse!==void 0&&(Q.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),Q.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(Q).then(function(E){const i=E[0],o=Lo[C.type],e=pB[C.componentType],t=e.BYTES_PER_ELEMENT,a=t*o,s=C.byteOffset||0,h=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,S=C.normalized===!0;let w,n;if(h&&h!==a){const r=Math.floor(s/h),l="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+r+":"+C.count;let c=I.cache.get(l);c||(w=new e(i,r*h,C.count*h/t),c=new Tt(w,h/t),I.cache.add(l,c)),n=new vB(c,o,s%h/t,S)}else i===null?w=new e(C.count*o):w=new e(i,s,C.count*o),n=new RI(w,o,S);if(C.sparse!==void 0){const r=Lo.SCALAR,l=pB[C.sparse.indices.componentType],c=C.sparse.indices.byteOffset||0,M=C.sparse.values.byteOffset||0,L=new l(E[1],c,C.sparse.count*r),K=new e(E[2],M,C.sparse.count*o);i!==null&&(n=new RI(n.array.slice(),n.itemSize,n.normalized));for(let N=0,d=L.length;N<d;N++){const U=L[N];if(n.setX(U,K[N*o]),o>=2&&n.setY(U,K[N*o+1]),o>=3&&n.setZ(U,K[N*o+2]),o>=4&&n.setW(U,K[N*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return n})}loadTexture(A){const I=this.json,g=this.options,C=I.textures[A].source,Q=I.images[C];let E=this.textureLoader;if(Q.uri){const i=g.manager.getHandler(Q.uri);i!==null&&(E=i)}return this.loadTextureImage(A,C,E)}loadTextureImage(A,I,g){const C=this,Q=this.json,E=Q.textures[A],i=Q.images[I],o=(i.uri||i.bufferView)+":"+E.sampler;if(this.textureCache[o])return this.textureCache[o];const e=this.loadImageSource(I,g).then(function(t){t.flipY=!1,t.name=E.name||i.name||"",t.name===""&&typeof i.uri=="string"&&i.uri.startsWith("data:image/")===!1&&(t.name=i.uri);const a=(Q.samplers||{})[E.sampler]||{};return t.magFilter=ps[a.magFilter]||LI,t.minFilter=ps[a.minFilter]||yg,t.wrapS=ds[a.wrapS]||yC,t.wrapT=ds[a.wrapT]||yC,C.associations.set(t,{textures:A}),t}).catch(function(){return null});return this.textureCache[o]=e,e}loadImageSource(A,I){const g=this,C=this.json,Q=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(a=>a.clone());const E=C.images[A],i=self.URL||self.webkitURL;let o=E.uri||"",e=!1;if(E.bufferView!==void 0)o=g.getDependency("bufferView",E.bufferView).then(function(a){e=!0;const s=new Blob([a],{type:E.mimeType});return o=i.createObjectURL(s),o});else if(E.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const t=Promise.resolve(o).then(function(a){return new Promise(function(s,h){let S=s;I.isImageBitmapLoader===!0&&(S=function(w){const n=new FI(w);n.needsUpdate=!0,s(n)}),I.load(zB.resolveURL(a,Q.path),S,void 0,h)})}).then(function(a){return e===!0&&i.revokeObjectURL(o),IC(a,E),a.userData.mimeType=E.mimeType||FG(E.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),a});return this.sourceCache[A]=t,t}assignTexture(A,I,g,C){const Q=this;return this.getDependency("texture",g.index).then(function(E){if(!E)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(E=E.clone(),E.channel=g.texCoord),Q.extensions[OA.KHR_TEXTURE_TRANSFORM]){const i=g.extensions!==void 0?g.extensions[OA.KHR_TEXTURE_TRANSFORM]:void 0;if(i){const o=Q.associations.get(E);E=Q.extensions[OA.KHR_TEXTURE_TRANSFORM].extendTexture(E,i),Q.associations.set(E,o)}}return C!==void 0&&(E.colorSpace=C),A[I]=E,E})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,Q=I.attributes.color!==void 0,E=I.attributes.normal===void 0;if(A.isPoints){const i="PointsMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new Ia,cg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,o.sizeAttenuation=!1,this.cache.add(i,o)),g=o}else if(A.isLine){const i="LineBasicMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new di,cg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,this.cache.add(i,o)),g=o}if(C||Q||E){let i="ClonedMaterial:"+g.uuid+":";C&&(i+="derivative-tangents:"),Q&&(i+="vertex-colors:"),E&&(i+="flat-shading:");let o=this.cache.get(i);o||(o=g.clone(),Q&&(o.vertexColors=!0),E&&(o.flatShading=!0),C&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(i,o),this.associations.set(o,this.associations.get(g))),g=o}A.material=g}getMaterialType(){return jg}loadMaterial(A){const I=this,g=this.json,C=this.extensions,Q=g.materials[A];let E;const i={},o=Q.extensions||{},e=[];if(o[OA.KHR_MATERIALS_UNLIT]){const a=C[OA.KHR_MATERIALS_UNLIT];E=a.getMaterialType(),e.push(a.extendParams(i,Q,I))}else{const a=Q.pbrMetallicRoughness||{};if(i.color=new NA(1,1,1),i.opacity=1,Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;i.color.setRGB(s[0],s[1],s[2],JI),i.opacity=s[3]}a.baseColorTexture!==void 0&&e.push(I.assignTexture(i,"map",a.baseColorTexture,bI)),i.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,i.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(e.push(I.assignTexture(i,"metalnessMap",a.metallicRoughnessTexture)),e.push(I.assignTexture(i,"roughnessMap",a.metallicRoughnessTexture))),E=this._invokeOne(function(s){return s.getMaterialType&&s.getMaterialType(A)}),e.push(Promise.all(this._invokeAll(function(s){return s.extendMaterialParams&&s.extendMaterialParams(A,i)})))}Q.doubleSided===!0&&(i.side=sg);const t=Q.alphaMode||Ho.OPAQUE;if(t===Ho.BLEND?(i.transparent=!0,i.depthWrite=!1):(i.transparent=!1,t===Ho.MASK&&(i.alphaTest=Q.alphaCutoff!==void 0?Q.alphaCutoff:.5)),Q.normalTexture!==void 0&&E!==sC&&(e.push(I.assignTexture(i,"normalMap",Q.normalTexture)),i.normalScale=new pA(1,1),Q.normalTexture.scale!==void 0)){const a=Q.normalTexture.scale;i.normalScale.set(a,a)}if(Q.occlusionTexture!==void 0&&E!==sC&&(e.push(I.assignTexture(i,"aoMap",Q.occlusionTexture)),Q.occlusionTexture.strength!==void 0&&(i.aoMapIntensity=Q.occlusionTexture.strength)),Q.emissiveFactor!==void 0&&E!==sC){const a=Q.emissiveFactor;i.emissive=new NA().setRGB(a[0],a[1],a[2],JI)}return Q.emissiveTexture!==void 0&&E!==sC&&e.push(I.assignTexture(i,"emissiveMap",Q.emissiveTexture,bI)),Promise.all(e).then(function(){const a=new E(i);return Q.name&&(a.name=Q.name),IC(a,Q),I.associations.set(a,{materials:A}),Q.extensions&&TC(C,a,Q),a})}createUniqueName(A){const I=II.sanitizeNodeName(A||"");return I in this.nodeNamesUsed?I+"_"+ ++this.nodeNamesUsed[I]:(this.nodeNamesUsed[I]=0,I)}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function Q(i){return g[OA.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i,I).then(function(o){return qs(o,i,I)})}const E=[];for(let i=0,o=A.length;i<o;i++){const e=A[i],t=JG(e),a=C[t];if(a)E.push(a.promise);else{let s;e.extensions&&e.extensions[OA.KHR_DRACO_MESH_COMPRESSION]?s=Q(e):s=qs(new XI,e,I),C[t]={primitive:e,promise:s},E.push(s)}}return Promise.all(E)}loadMesh(A){const I=this,g=this.json,C=this.extensions,Q=g.meshes[A],E=Q.primitives,i=[];for(let o=0,e=E.length;o<e;o++){const t=E[o].material===void 0?MG(this.cache):this.getDependency("material",E[o].material);i.push(t)}return i.push(I.loadGeometries(E)),Promise.all(i).then(function(o){const e=o.slice(0,o.length-1),t=o[o.length-1],a=[];for(let h=0,S=t.length;h<S;h++){const w=t[h],n=E[h];let r;const l=e[h];if(n.mode===tg.TRIANGLES||n.mode===tg.TRIANGLE_STRIP||n.mode===tg.TRIANGLE_FAN||n.mode===void 0)r=Q.isSkinnedMesh===!0?new dc(w,l):new SI(w,l),r.isSkinnedMesh===!0&&r.normalizeSkinWeights(),n.mode===tg.TRIANGLE_STRIP?r.geometry=Ks(r.geometry,pe):n.mode===tg.TRIANGLE_FAN&&(r.geometry=Ks(r.geometry,ZE));else if(n.mode===tg.LINES)r=new Aa(w,l);else if(n.mode===tg.LINE_STRIP)r=new Yi(w,l);else if(n.mode===tg.LINE_LOOP)r=new uc(w,l);else if(n.mode===tg.POINTS)r=new Hc(w,l);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+n.mode);Object.keys(r.geometry.morphAttributes).length>0&&KG(r,Q),r.name=I.createUniqueName(Q.name||"mesh_"+A),IC(r,Q),n.extensions&&TC(C,r,n),I.assignFinalMaterial(r),a.push(r)}for(let h=0,S=a.length;h<S;h++)I.associations.set(a[h],{meshes:A,primitives:h});if(a.length===1)return Q.extensions&&TC(C,a[0],Q),a[0];const s=new Pg;Q.extensions&&TC(C,s,Q),I.associations.set(s,{meshes:A});for(let h=0,S=a.length;h<S;h++)s.add(a[h]);return s})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new $I(nh.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new Si(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),IC(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,Q=I.joints.length;C<Q;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const Q=C.pop(),E=C,i=[],o=[];for(let e=0,t=E.length;e<t;e++){const a=E[e];if(a){i.push(a);const s=new qA;Q!==null&&s.fromArray(Q.array,e*16),o.push(s)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[e])}return new Ri(i,o)})}loadAnimation(A){const I=this.json,g=this,C=I.animations[A],Q=C.name?C.name:"animation_"+A,E=[],i=[],o=[],e=[],t=[];for(let a=0,s=C.channels.length;a<s;a++){const h=C.channels[a],S=C.samplers[h.sampler],w=h.target,n=w.node,r=C.parameters!==void 0?C.parameters[S.input]:S.input,l=C.parameters!==void 0?C.parameters[S.output]:S.output;w.node!==void 0&&(E.push(this.getDependency("node",n)),i.push(this.getDependency("accessor",r)),o.push(this.getDependency("accessor",l)),e.push(S),t.push(w))}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o),Promise.all(e),Promise.all(t)]).then(function(a){const s=a[0],h=a[1],S=a[2],w=a[3],n=a[4],r=[];for(let l=0,c=s.length;l<c;l++){const M=s[l],L=h[l],K=S[l],N=w[l],d=n[l];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const U=g._createAnimationTracks(M,L,K,N,d);if(U)for(let G=0;G<U.length;G++)r.push(U[G])}return new Ti(Q,void 0,r)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(Q){const E=g._getNodeRef(g.meshCache,C.mesh,Q);return C.weights!==void 0&&E.traverse(function(i){if(i.isMesh)for(let o=0,e=C.weights.length;o<e;o++)i.morphTargetInfluences[o]=C.weights[o]}),E})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],Q=g._loadNodeShallow(A),E=[],i=C.children||[];for(let e=0,t=i.length;e<t;e++)E.push(g.getDependency("node",i[e]));const o=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([Q,Promise.all(E),o]).then(function(e){const t=e[0],a=e[1],s=e[2];s!==null&&t.traverse(function(h){h.isSkinnedMesh&&h.bind(s,RG)});for(let h=0,S=a.length;h<S;h++)t.add(a[h]);return t})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const Q=I.nodes[A],E=Q.name?C.createUniqueName(Q.name):"",i=[],o=C._invokeOne(function(e){return e.createNodeMesh&&e.createNodeMesh(A)});return o&&i.push(o),Q.camera!==void 0&&i.push(C.getDependency("camera",Q.camera).then(function(e){return C._getNodeRef(C.cameraCache,Q.camera,e)})),C._invokeAll(function(e){return e.createNodeAttachment&&e.createNodeAttachment(A)}).forEach(function(e){i.push(e)}),this.nodeCache[A]=Promise.all(i).then(function(e){let t;if(Q.isBone===!0?t=new Zt:e.length>1?t=new Pg:e.length===1?t=e[0]:t=new oI,t!==e[0])for(let a=0,s=e.length;a<s;a++)t.add(e[a]);if(Q.name&&(t.userData.name=Q.name,t.name=E),IC(t,Q),Q.extensions&&TC(g,t,Q),Q.matrix!==void 0){const a=new qA;a.fromArray(Q.matrix),t.applyMatrix4(a)}else Q.translation!==void 0&&t.position.fromArray(Q.translation),Q.rotation!==void 0&&t.quaternion.fromArray(Q.rotation),Q.scale!==void 0&&t.scale.fromArray(Q.scale);return C.associations.has(t)||C.associations.set(t,{}),C.associations.get(t).nodes=A,t}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,Q=new Pg;g.name&&(Q.name=C.createUniqueName(g.name)),IC(Q,g),g.extensions&&TC(I,Q,g);const E=g.nodes||[],i=[];for(let o=0,e=E.length;o<e;o++)i.push(C.getDependency("node",E[o]));return Promise.all(i).then(function(o){for(let t=0,a=o.length;t<a;t++)Q.add(o[t]);const e=t=>{const a=new Map;for(const[s,h]of C.associations)(s instanceof cg||s instanceof FI)&&a.set(s,h);return t.traverse(s=>{const h=C.associations.get(s);h!=null&&a.set(s,h)}),a};return C.associations=e(Q),Q})}_createAnimationTracks(A,I,g,C,Q){const E=[],i=A.name?A.name:A.uuid,o=[];wC[Q.path]===wC.weights?A.traverse(function(s){s.morphTargetInfluences&&o.push(s.name?s.name:s.uuid)}):o.push(i);let e;switch(wC[Q.path]){case wC.weights:e=kB;break;case wC.rotation:e=UB;break;case wC.position:case wC.scale:e=NB;break;default:switch(g.itemSize){case 1:e=kB;break;case 2:case 3:default:e=NB;break}break}const t=C.interpolation!==void 0?UG[C.interpolation]:LB,a=this._getArrayFromAccessor(g);for(let s=0,h=o.length;s<h;s++){const S=new e(o[s]+"."+wC[Q.path],I.array,a,t);C.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),E.push(S)}return E}_getArrayFromAccessor(A){let I=A.array;if(A.normalized){const g=fo(I.constructor),C=new Float32Array(I.length);for(let Q=0,E=I.length;Q<E;Q++)C[Q]=I[Q]*g;I=C}return I}_createCubicSplineTrackInterpolant(A){A.createInterpolant=function(I){const g=this instanceof UB?kG:Rs;return new g(this.times,this.values,this.getValueSize()/3,I)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dG(B,A,I){const g=A.attributes,C=new Tg;if(g.POSITION!==void 0){const i=I.json.accessors[g.POSITION],o=i.min,e=i.max;if(o!==void 0&&e!==void 0){if(C.set(new Y(o[0],o[1],o[2]),new Y(e[0],e[1],e[2])),i.normalized){const t=fo(pB[i.componentType]);C.min.multiplyScalar(t),C.max.multiplyScalar(t)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const Q=A.targets;if(Q!==void 0){const i=new Y,o=new Y;for(let e=0,t=Q.length;e<t;e++){const a=Q[e];if(a.POSITION!==void 0){const s=I.json.accessors[a.POSITION],h=s.min,S=s.max;if(h!==void 0&&S!==void 0){if(o.setX(Math.max(Math.abs(h[0]),Math.abs(S[0]))),o.setY(Math.max(Math.abs(h[1]),Math.abs(S[1]))),o.setZ(Math.max(Math.abs(h[2]),Math.abs(S[2]))),s.normalized){const w=fo(pB[s.componentType]);o.multiplyScalar(w)}i.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(i)}B.boundingBox=C;const E=new Ug;C.getCenter(E.center),E.radius=C.min.distanceTo(C.max)/2,B.boundingSphere=E}function qs(B,A,I){const g=A.attributes,C=[];function Q(E,i){return I.getDependency("accessor",E).then(function(o){B.setAttribute(i,o)})}for(const E in g){const i=uo[E]||E.toLowerCase();i in B.attributes||C.push(Q(g[E],i))}if(A.indices!==void 0&&!B.index){const E=I.getDependency("accessor",A.indices).then(function(i){B.setIndex(i)});C.push(E)}return AI.workingColorSpace!==JI&&"COLOR_0"in g&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${AI.workingColorSpace}" not supported.`),IC(B,A),dG(B,A,I),Promise.all(C).then(function(){return A.targets!==void 0?NG(B,A.targets,I):B})}class qG{constructor(A,I,g){DA(this,"dynamicBody");DA(this,"material",new jg);DA(this,"texture");DA(this,"handle",-1);this.texture=new xi().load("img/finish.png",Q=>{Q.repeat.x=2,Q.wrapS=yC,Q.flipY=!0});const C=new SI(new PB(3.4,3.4,2,12,1,!0),new mc({transparent:!0,opacity:.75,map:this.texture,side:sg}));C.position.set(...g),C.position.y+=3,A.add(C),new Yo().load("models/finish.glb",Q=>{const E=Q.scene.getObjectByName("Cylinder");E.receiveShadow=!0,A.add(E),this.material=E.material;const i=I.createRigidBody(PI.fixed().setTranslation(...g));this.handle=i.handle;const o=new Float32Array(E.geometry.attributes.position.array),e=tI.convexHull(o);I.createCollider(e,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}update(A){this.texture.offset.x+=A/3}}class RE{constructor(A,I,g,C=0){DA(this,"dynamicBodies",[]);DA(this,"handles",[-1,-1]);const Q=[];for(let E=0;E<4;E++){const i=new SI(new ui(.4),new jg);i.position.set(g[0],g[1],E+g[2]),i.castShadow=!0,A.add(i);let o;E==0?o=Eg.Fixed:o=Eg.Dynamic;const e=I.createRigidBody(new PI(o).setTranslation(g[0],g[1],E+g[2]).setRotation(new uI().setFromEuler(new jI(0,C,0))));let t=tI.ball(.4).setMass(1);if(E>=2&&this.handles.push(e.handle),I.createCollider(t,e),E>0){let a=Q[Q.length-1],s=Fg.spherical(new kE(0,0,0),new kE(0,0,-1));I.createImpulseJoint(s,a,e,!0)}Q.push(e),this.dynamicBodies.push([i,e])}}update(){for(let A=0,I=this.dynamicBodies.length;A<I;A++)this.dynamicBodies[A][0].position.copy(this.dynamicBodies[A][1].translation()),this.dynamicBodies[A][0].quaternion.copy(this.dynamicBodies[A][1].rotation())}}class dg{constructor(A,I,g,C,Q=[0,0,0]){const E=new SI(new hB(...g),new jg);E.castShadow=!0,E.receiveShadow=!0,A.add(E);const i=I.createRigidBody(PI.fixed().setTranslation(...C).setRotation(new uI().setFromEuler(new jI(...Q)))),o=tI.cuboid(g[0]/2,g[1]/2,g[2]/2);I.createCollider(o,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation())}}const To=new WeakMap;class YG extends rC{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,I,g,C){const Q=new VB(this.manager);Q.setPath(this.path),Q.setResponseType("arraybuffer"),Q.setRequestHeader(this.requestHeader),Q.setWithCredentials(this.withCredentials),Q.load(A,E=>{this.parse(E,I,C)},g,C)}parse(A,I,g=()=>{}){this.decodeDracoFile(A,I,null,null,bI,g).catch(g)}decodeDracoFile(A,I,g,C,Q=JI,E=()=>{}){const i={attributeIDs:g||this.defaultAttributeIDs,attributeTypes:C||this.defaultAttributeTypes,useUniqueIDs:!!g,vertexColorSpace:Q};return this.decodeGeometry(A,i).then(I).catch(E)}decodeGeometry(A,I){const g=JSON.stringify(I);if(To.has(A)){const o=To.get(A);if(o.key===g)return o.promise;if(A.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let C;const Q=this.workerNextTaskID++,E=A.byteLength,i=this._getWorker(Q,E).then(o=>(C=o,new Promise((e,t)=>{C._callbacks[Q]={resolve:e,reject:t},C.postMessage({type:"decode",id:Q,taskConfig:I,buffer:A},[A])}))).then(o=>this._createGeometry(o.geometry));return i.catch(()=>!0).then(()=>{C&&Q&&this._releaseTask(C,Q)}),To.set(A,{key:g,promise:i}),i}_createGeometry(A){const I=new XI;A.index&&I.setIndex(new RI(A.index.array,1));for(let g=0;g<A.attributes.length;g++){const C=A.attributes[g],Q=C.name,E=C.array,i=C.itemSize,o=new RI(E,i);Q==="color"&&(this._assignVertexColorSpace(o,C.vertexColorSpace),o.normalized=!(E instanceof Float32Array)),I.setAttribute(Q,o)}return I}_assignVertexColorSpace(A,I){if(I!==bI)return;const g=new NA;for(let C=0,Q=A.count;C<Q;C++)g.fromBufferAttribute(A,C).convertSRGBToLinear(),A.setXYZ(C,g.r,g.g,g.b)}_loadLibrary(A,I){const g=new VB(this.manager);return g.setPath(this.decoderPath),g.setResponseType(I),g.setWithCredentials(this.withCredentials),new Promise((C,Q)=>{g.load(A,C,void 0,Q)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const A=typeof WebAssembly!="object"||this.decoderConfig.type==="js",I=[];return A?I.push(this._loadLibrary("draco_decoder.js","text")):(I.push(this._loadLibrary("draco_wasm_wrapper.js","text")),I.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(I).then(g=>{const C=g[0];A||(this.decoderConfig.wasmBinary=g[1]);const Q=LG.toString(),E=["/* draco decoder */",C,"","/* worker */",Q.substring(Q.indexOf("{")+1,Q.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(Q){const E=Q.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,Q){return C._taskLoad>Q._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function LG(){let B,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":B=i.decoderConfig,A=new Promise(function(t){B.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(B)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const h=I(a,s,new Int8Array(o),e),S=h.attributes.map(w=>w.array.buffer);h.index&&S.push(h.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:h},S)}catch(h){console.error(h),self.postMessage({type:"error",id:i.id,error:h.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,h;const S=i.GetEncodedGeometryType(o);if(S===E.TRIANGULAR_MESH)s=new E.Mesh,h=i.DecodeArrayToMesh(o,o.byteLength,s);else if(S===E.POINT_CLOUD)s=new E.PointCloud,h=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());const w={index:null,attributes:[]};for(const n in t){const r=self[a[n]];let l,c;if(e.useUniqueIDs)c=t[n],l=i.GetAttributeByUniqueId(s,c);else{if(c=i.GetAttributeId(s,E[t[n]]),c===-1)continue;l=i.GetAttribute(s,c)}const M=C(E,i,s,n,r,l);n==="color"&&(M.vertexColorSpace=e.vertexColorSpace),w.attributes.push(M)}return S===E.TRIANGULAR_MESH&&(w.index=g(E,i,s)),E.destroy(s),w}function g(E,i,o){const e=o.num_faces()*3,t=e*4,a=E._malloc(t);i.GetTrianglesUInt32Array(o,t,a);const s=new Uint32Array(E.HEAPF32.buffer,a,e).slice();return E._free(a),{array:s,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),h=o.num_points()*s,S=h*t.BYTES_PER_ELEMENT,w=Q(E,t),n=E._malloc(S);i.GetAttributeDataArrayForAllPoints(o,a,w,S,n);const r=new t(E.HEAPF32.buffer,n,h).slice();return E._free(n),{name:e,array:r,itemSize:s}}function Q(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}class uG extends Pg{constructor(){super();DA(this,"mixer");DA(this,"glTFLoader");const I=new YG;I.setDecoderPath("jsm/libs/draco/"),this.glTFLoader=new Yo,this.glTFLoader.setDRACOLoader(I)}async init(I){const[g,C,Q,E]=await Promise.all([this.glTFLoader.loadAsync("models/eve$@walk_compressed.glb"),this.glTFLoader.loadAsync("models/eve@idle.glb"),this.glTFLoader.loadAsync("models/eve@jump.glb"),this.glTFLoader.loadAsync("models/eve@pose.glb")]);g.scene.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),this.mixer=new Sl(g.scene),I.idle=this.mixer.clipAction(C.animations[0]),I.walk=this.mixer.clipAction(xc.subclip(g.animations[0],"walk",0,42)),Q.animations[0].tracks=Q.animations[0].tracks.filter(function(i){return!i.name.endsWith(".position")}),console.log(Q.animations[0].tracks),I.jump=this.mixer.clipAction(Q.animations[0]),I.pose=this.mixer.clipAction(E.animations[0]),I.idle.play(),this.add(g.scene)}update(I){var g;(g=this.mixer)==null||g.update(I)}}class HG{constructor(A,I){DA(this,"scene");DA(this,"wait",!1);DA(this,"animationActions",{});DA(this,"activeAction");DA(this,"speed",0);DA(this,"keyboard");DA(this,"model");this.scene=A,this.keyboard=I}async init(){this.model=new uG,await this.model.init(this.animationActions),this.activeAction=this.animationActions.idle,this.scene.add(this.model)}setAction(A){var I;this.activeAction!=A&&((I=this.activeAction)==null||I.fadeOut(.1),A.reset().fadeIn(.1).play(),this.activeAction=A)}update(A){var I,g;if(!this.wait){let C=!1;this.keyboard.keyMap.Space&&(this.setAction(this.animationActions.jump),C=!0,this.wait=!0,setTimeout(()=>this.wait=!1,1200)),!C&&(this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyD)&&(this.setAction(this.animationActions.walk),C=!0),!C&&this.keyboard.keyMap.KeyQ&&(this.setAction(this.animationActions.pose),C=!0),!C&&this.setAction(this.animationActions.idle)}this.activeAction===this.animationActions.walk?(I=this.model)==null||I.update(A*2):(g=this.model)==null||g.update(A)}}class mG{constructor(A,I,g){DA(this,"camera");DA(this,"pivot",new oI);DA(this,"yaw",new oI);DA(this,"pitch",new oI);DA(this,"onDocumentMouseMove",A=>{this.yaw.rotation.y-=A.movementX*.002;const I=this.pitch.rotation.x-A.movementY*.002;I>-1&&I<1&&(this.pitch.rotation.x=I)});DA(this,"onDocumentMouseWheel",A=>{A.preventDefault();const I=this.camera.position.z+A.deltaY*.005;I>=.5&&I<=10&&(this.camera.position.z=I)});this.camera=I,this.yaw.position.y=.75,document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===g.domElement?(g.domElement.addEventListener("mousemove",this.onDocumentMouseMove),g.domElement.addEventListener("wheel",this.onDocumentMouseWheel)):(g.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),g.domElement.removeEventListener("wheel",this.onDocumentMouseWheel))}),A.add(this.pivot),this.pivot.add(this.yaw),this.yaw.add(this.pitch),this.pitch.add(I)}}class fG{constructor(A){DA(this,"keyMap",{});DA(this,"onDocumentKey",A=>{this.keyMap[A.code]=A.type==="keydown"});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===A.domElement?(document.addEventListener("keydown",this.onDocumentKey),document.addEventListener("keyup",this.onDocumentKey)):(document.removeEventListener("keydown",this.onDocumentKey),document.removeEventListener("keyup",this.onDocumentKey))})}}class TG{constructor(A,I,g,C,Q=[0,0,0],E){DA(this,"scene");DA(this,"world");DA(this,"ui");DA(this,"body");DA(this,"animationController");DA(this,"vector",new Y);DA(this,"inputVelocity",new Y);DA(this,"euler",new jI);DA(this,"quaternion",new uI);DA(this,"followTarget",new oI);DA(this,"grounded",!1);DA(this,"rotationMatrix",new qA);DA(this,"targetQuaternion",new uI);DA(this,"followCam");DA(this,"keyboard");DA(this,"wait",!1);DA(this,"handle",-1);this.scene=A,this.world=C,this.ui=E,this.keyboard=new fG(g),this.followCam=new mG(this.scene,I,g),A.add(this.followTarget),this.body=C.createRigidBody(PI.dynamic().setTranslation(...Q).enabledRotations(!1,!1,!1).setCanSleep(!1)),this.handle=this.body.handle;const i=tI.capsule(.5,.15).setTranslation(0,.645,0).setMass(1).setFriction(0).setActiveEvents(tQ.COLLISION_EVENTS);C.createCollider(i,this.body)}async init(){this.animationController=new HG(this.scene,this.keyboard),await this.animationController.init()}setGrounded(A){A!=this.grounded&&(this.grounded=A,A?(this.body.setLinearDamping(4),setTimeout(()=>{this.wait=!1},250)):this.body.setLinearDamping(0))}reset(){this.body.setLinvel(new Y(0,0,0),!0),this.body.setTranslation(new Y(0,1,0),!0),this.ui.reset()}update(A){var g,C,Q,E,i,o,e,t,a,s,h,S,w;this.inputVelocity.set(0,0,0);let I=1;this.grounded&&(this.keyboard.keyMap.KeyW&&(this.inputVelocity.z=-1,I=9.5),this.keyboard.keyMap.KeyS&&(this.inputVelocity.z=1,I=9.5),this.keyboard.keyMap.KeyA&&(this.inputVelocity.x=-1,I=9.5),this.keyboard.keyMap.KeyD&&(this.inputVelocity.x=1,I=9.5),this.inputVelocity.setLength(A*I),!this.wait&&this.keyboard.keyMap.Space&&(this.wait=!0,this.inputVelocity.y=5)),this.euler.y=this.followCam.yaw.rotation.y,this.quaternion.setFromEuler(this.euler),this.inputVelocity.applyQuaternion(this.quaternion),this.body.applyImpulse(this.inputVelocity,!0),this.body.translation().y<-3&&this.reset(),this.followTarget.position.copy(this.body.translation()),this.followTarget.getWorldPosition(this.vector),this.followCam.pivot.position.lerp(this.vector,A*10),(C=(g=this.animationController)==null?void 0:g.model)==null||C.position.lerp(this.vector,A*20),this.rotationMatrix.lookAt(this.followTarget.position,(E=(Q=this.animationController)==null?void 0:Q.model)==null?void 0:E.position,(o=(i=this.animationController)==null?void 0:i.model)==null?void 0:o.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix),((t=(e=this.animationController)==null?void 0:e.model)==null?void 0:t.position.distanceTo(this.followTarget.position))>1e-4&&!((s=(a=this.animationController)==null?void 0:a.model)!=null&&s.quaternion.equals(this.targetQuaternion))&&(this.targetQuaternion.z=0,this.targetQuaternion.x=0,this.targetQuaternion.normalize(),(S=(h=this.animationController)==null?void 0:h.model)==null||S.quaternion.rotateTowards(this.targetQuaternion,A*20)),(w=this.animationController)==null||w.update(A)}}class xG{constructor(A,I){DA(this,"mesh");DA(this,"world");DA(this,"enabled",!0);this.world=I,this.mesh=new Aa(new XI,new di({color:16777215,vertexColors:!0})),this.mesh.frustumCulled=!1,A.add(this.mesh)}update(){if(this.enabled){const{vertices:A,colors:I}=this.world.debugRender();this.mesh.geometry.setAttribute("position",new RI(A,3)),this.mesh.geometry.setAttribute("color",new RI(I,4)),this.mesh.visible=!0}else this.mesh.visible=!1}}class Ys{constructor(A,I,g){DA(this,"group");DA(this,"body");DA(this,"handle",-1);this.group=new Pg,this.group.position.set(...g),A.add(this.group);const C=new SI(new PB(.25,.25,1.5),new jg);C.castShadow=!0,this.group.add(C);const Q=new SI(new PB(.25,.25,4),new jg);Q.rotateX(-Math.PI/2),Q.castShadow=!0,this.group.add(Q),this.body=I.createRigidBody(PI.kinematicPositionBased().setTranslation(...g)),this.handle=this.body.handle;const E=tI.cylinder(2,.25).setRotation(new uI().setFromEuler(new jI(-Math.PI/2,0,0)));I.createCollider(E,this.body)}update(A){this.group.rotation.y+=A,this.body.setNextKinematicRotation(this.group.quaternion)}}class bG{constructor(A,I,g){DA(this,"material",new jg);new Yo().load("models/start.glb",C=>{var e;const Q=C.scene.getObjectByName("Cylinder");Q.receiveShadow=!0,A.add(Q),this.material=Q.material,(e=this.material.map)==null||e.center.set(.1034,0);const E=I.createRigidBody(PI.fixed().setTranslation(...g)),i=new Float32Array(Q.geometry.attributes.position.array),o=tI.convexHull(i);I.createCollider(o,E),Q.position.copy(E.translation()),Q.quaternion.copy(E.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}}class OG{constructor(A){DA(this,"renderer");DA(this,"instructions");DA(this,"timeDisplay");DA(this,"levelCompleted");DA(this,"interval",-1);DA(this,"time",0);this.renderer=A,this.instructions=document.getElementById("instructions"),this.timeDisplay=document.getElementById("timeDisplay"),this.levelCompleted=document.getElementById("levelCompleted"),document.getElementById("startButton").addEventListener("click",()=>{A.domElement.requestPointerLock()},!1),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===this.renderer.domElement?(this.levelCompleted.style.display="none",this.instructions.style.display="none",this.timeDisplay.style.display="block",this.interval=setInterval(()=>{this.time+=1,this.timeDisplay.innerText=this.time.toString()},1e3)):(this.instructions.style.display="block",this.timeDisplay.style.display="none",clearInterval(this.interval))})}show(){document.getElementById("spinner").style.display="none",this.instructions.style.display="block"}reset(){clearInterval(this.interval),this.levelCompleted.style.display="none",this.time=0,this.timeDisplay.innerText=this.time.toString(),this.interval=setInterval(()=>{this.time+=1,this.timeDisplay.innerText=this.time.toString()},1e3)}showLevelCompleted(){clearInterval(this.interval),this.levelCompleted.style.display="block"}}class vG{constructor(A,I,g){DA(this,"scene");DA(this,"camera");DA(this,"renderer");DA(this,"ui");DA(this,"player");DA(this,"world");DA(this,"rapierDebugRenderer");DA(this,"eventQueue");DA(this,"finish");DA(this,"spinners",[]);DA(this,"pendulums",[]);this.scene=A,this.camera=I,this.renderer=g,this.ui=new OG(this.renderer)}async init(){await xl.init();const A=new Y(0,-9.81,0);this.world=new nQ(A),this.eventQueue=new ks(!0),this.rapierDebugRenderer=new xG(this.scene,this.world),this.rapierDebugRenderer.enabled=!1,new qo().add(this.rapierDebugRenderer,"enabled").name("Rapier Degug Renderer"),new bG(this.scene,this.world,[0,-.5,0]),new dg(this.scene,this.world,[1,.1,2],[0,0,6]),new dg(this.scene,this.world,[2.5,.1,1],[3,.25,6]),new dg(this.scene,this.world,[2,.1,1],[6,1,6]),new dg(this.scene,this.world,[.25,.1,4.5],[6,2,2.25]),new dg(this.scene,this.world,[4,.1,5],[6,2,-3]),this.spinners.push(new Ys(this.scene,this.world,[6,2.8,-3])),new dg(this.scene,this.world,[1,.1,2],[6.25,2.5,-7.5]),new dg(this.scene,this.world,[4,.1,4],[2.5,3,-8]),this.spinners.push(new Ys(this.scene,this.world,[2.5,3.8,-8])),new dg(this.scene,this.world,[1,.1,2.75],[1.5,3.75,-3.25],[-Math.PI/8,0,0]),new dg(this.scene,this.world,[6,.1,1],[-1,4.5,-1]),this.pendulums.push(new RE(this.scene,this.world,[0,8,-1])),this.pendulums.push(new RE(this.scene,this.world,[-2,8,-1])),new dg(this.scene,this.world,[1.5,.1,8],[-5.5,4.5,4.5],[0,0,-Math.PI/8]),this.pendulums.push(new RE(this.scene,this.world,[-5,8,2.5],Math.PI/2)),this.pendulums.push(new RE(this.scene,this.world,[-5,8,5],Math.PI/2)),this.finish=new qG(this.scene,this.world,[0,4,10]),this.player=new TG(this.scene,this.camera,this.renderer,this.world,[0,.1,0],this.ui),await this.player.init();const I=new zl(this.scene);await I.init(),I.light.target=this.player.followTarget,this.ui.show()}update(A){var I,g,C,Q,E;this.spinners.forEach(i=>{i.update(A)}),this.world.timestep=Math.min(A,.1),(I=this.world)==null||I.step(this.eventQueue),(g=this.eventQueue)==null||g.drainCollisionEvents((i,o,e)=>{var s,h;e&&[i,o].includes((s=this.finish)==null?void 0:s.handle)&&this.ui.showLevelCompleted();let t=!1;this.spinners.forEach(S=>{[i,o].includes(S.handle)&&(t=!0)});let a=!1;this.pendulums.forEach(S=>{S.handles.some(w=>[i,o].includes(w))&&(a=!0)}),!t&&!a&&((h=this.player)==null||h.setGrounded(e))}),(C=this.player)==null||C.update(A),(Q=this.finish)==null||Q.update(A),this.pendulums.forEach(i=>{i.update()}),(E=this.rapierDebugRenderer)==null||E.update()}}const Ls=new Rc,lQ=new $I(75,window.innerWidth/window.innerHeight,.1,1e3);lQ.position.set(0,0,2);const dB=new Fc({antialias:!0});dB.setSize(window.innerWidth,window.innerHeight),dB.shadowMap.enabled=!0,document.body.appendChild(dB.domElement),window.addEventListener("resize",()=>{lQ.aspect=window.innerWidth/window.innerHeight,lQ.updateProjectionMatrix(),dB.setSize(window.innerWidth,window.innerHeight)});const us=new $B;document.body.appendChild(us.dom);const Hs=new vG(Ls,lQ,dB);await Hs.init();const _G=new Bl;let ms=0;function fs(){requestAnimationFrame(fs),ms=_G.getDelta(),Hs.update(ms),dB.render(Ls,lQ),us.update()}fs()})();