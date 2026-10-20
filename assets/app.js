/**
* vue v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var e,t;let n,l,r,i,s,o,a,f,p,d;function h(e){let t=Object.create(null);for(let n of e.split(","))t[n]=1;return e=>e in t}let g={},v=[],_=()=>{},m=()=>false,y=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||97>e.charCodeAt(2)),b=e=>e.startsWith("onUpdate:"),S=Object.assign,C=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1);},x=Object.prototype.hasOwnProperty,w=(e,t)=>x.call(e,t),k=Array.isArray,E=e=>"function"==typeof e,T=e=>"string"==typeof e,A=e=>"symbol"==typeof e,R=e=>null!==e&&"object"==typeof e,O=e=>(R(e)||E(e))&&E(e.then)&&E(e.catch),N=Object.prototype.toString,P=e=>T(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,M=h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),I=e=>{let t=Object.create(null);return n=>t[n]||(t[n]=e(n))},F=/-\w/g,L=I(e=>e.replace(F,e=>e.slice(1).toUpperCase())),j=/\B([A-Z])/g,V=I(e=>e.replace(j,"-$1").toLowerCase()),D=I(e=>e.charAt(0).toUpperCase()+e.slice(1)),U=I(e=>e?`on${D(e)}`:""),B=(e,t)=>!Object.is(e,t),$=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t);},H$1=(e,t,n,l=false)=>{Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:l,value:n});},W$1=e=>{let t=parseFloat(e);return isNaN(t)?e:t},K=e=>{let t=T(e)?Number(e):0/0;return isNaN(t)?e:t},z=()=>n||(n="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{}),q=h("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");function G(e){if(k(e)){let t={};for(let n=0;n<e.length;n++){let l=e[n],r=T(l)?function(e){let t={};return e.replace(Z,e=>e.startsWith("/*")?"":e).split(X).forEach(e=>{if(e){let n=e.split(J);n.length>1&&(t[n[0].trim()]=n[1].trim());}}),t}(l):G(l);if(r)for(let e in r)t[e]=r[e];}return t}if(T(e)||R(e))return e}let X=/;(?![^(]*\))/g,J=/:([^]+)/,Z=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Y(e){let t="";if(T(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){let l=Y(e[n]);l&&(t+=l+" ");}else if(R(e))for(let n in e)e[n]&&(t+=n+" ");return t.trim()}let ee=h("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");function et(e,t,n){if(e.length!==t.length)return  false;let l=true;for(let r=0;l&&r<e.length;r++)l=ei(e[r],t[r],n);return l}function en(e,t,n){if(e.size!==t.size)return  false;let l=Array.from(t),r=new Uint8Array(l.length);for(let t of e){let e=-1;for(let i=0;i<l.length;i++)if(!r[i]&&ei(t,l[i],n)){e=i;break}if(e<0)return  false;r[e]=1;}return  true}function el(e,t,n){let l,r,i,s,o="[object Map]"===(l=e,N.call(l)),a="[object Map]"===(r=t,N.call(r));if(o||a)return !!o&&!!a&&en(e,t,n);o="[object Set]"===(i=e,N.call(i));if(a="[object Set]"===(s=t,N.call(s)),o||a)return !!o&&!!a&&en(e,t,n);if(Object.keys(e).length!==Object.keys(t).length)return  false;for(let l in e){let r=e.hasOwnProperty(l),i=t.hasOwnProperty(l);if(r&&!i||!r&&i||!ei(e[l],t[l],n))return  false}return String(e)===String(t)}function er(e,t,n,l){n||(n=[new Map,new Map]);let[r,i]=n;if(r.has(e)||i.has(t))return r.get(e)===t&&i.get(t)===e;r.set(e,t),i.set(t,e);let s=l(e,t,n);return r.delete(e),i.delete(t),s}function ei(e,t,n){let l,r;if(e===t)return  true;let i="[object Date]"===(l=e,N.call(l)),s="[object Date]"===(r=t,N.call(r));return i||s?!!i&&!!s&&e.getTime()===t.getTime():(i=A(e),s=A(t),i||s)?e===t:(i=k(e),s=k(t),i||s)?!!i&&!!s&&er(e,t,n,et):(i=R(e),s=R(t),i||s)?!!i&&!!s&&er(e,t,n,el):String(e)===String(t)}function es(e,t){return e.findIndex(e=>ei(e,t))}let eo=e=>!!(e&&true===e.__v_isRef),ea=e=>T(e)?e:null==e?"":k(e)||R(e)&&(e.toString===N||!E(e.toString))?eo(e)?ea(e.value):JSON.stringify(e,eu,2):String(e),eu=(e,t)=>{let n;if(eo(t))return eu(e,t.value);if("[object Map]"===(n=t,N.call(n)))return {[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],l)=>(e[ec(t,l)+" =>"]=n,e),{})};{let e;if("[object Set]"===(e=t,N.call(e)))return {[`Set(${t.size})`]:[...t.values()].map(e=>ec(e))};else {if(A(t))return ec(t);let e;if(R(t)&&!k(t)&&"[object Object]"!==(e=t,N.call(e)))return String(t)}}return t},ec=(e,t="")=>{var n;return A(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};class ef{constructor(e=false){this.detached=e,this._active=true,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=false,this._warnOnRun=true,this.__v_skip=true,!e&&l&&(l.active?(this.parent=l,this.index=(l.scopes||(l.scopes=[])).push(this)-1):(this._active=false,this._warnOnRun=false));}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=true,this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause();}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause();}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=false,this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume();}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume();}}run(e){if(this._active){let t=l;try{return l=this,e()}finally{l=t;}}}on(){1==++this._on&&(this.prevScope=l,l=this);}off(){if(this._on>0&&0==--this._on){if(l===this)l=this.prevScope;else {let e=l;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope;}}this.prevScope=void 0;}}stop(e){if(this._active){let t,n;for(this._active=false,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(true);this.scopes.length=0;}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index);}this.parent=void 0;}}}function ed(){return l}let eg=new WeakSet;class ev{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,l&&(l.active?l.effects.push(this):this.flags&=-2);}pause(){this.flags|=64;}resume(){64&this.flags&&(this.flags&=-65,eg.has(this)&&(eg.delete(this),this.trigger()));}notify(){(!(2&this.flags)||32&this.flags)&&(8&this.flags||em(this));}run(){if(!(1&this.flags))return this.fn();this.flags|=2,eN(this),eb(this);let e=r,t=eT;r=this,eT=true;try{return this.fn()}finally{eS(this),r=e,eT=t,this.flags&=-3;}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)ew(e);this.deps=this.depsTail=void 0,eN(this),this.onStop&&this.onStop(),this.flags&=-2;}}trigger(){64&this.flags?eg.add(this):this.scheduler?this.scheduler():this.runIfDirty();}runIfDirty(){eC(this)&&this.run();}get dirty(){return eC(this)}}let e_=0;function em(e,t=false){if(e.flags|=8,t){e.next=s,s=e;return}e.next=i,i=e;}function ey(){let e;if(!(--e_>0)){if(s){let e=s;for(s=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t;}}for(;i;){let t=i;for(i=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,1&t.flags)try{t.trigger();}catch(t){e||(e=t);}t=n;}}if(e)throw e}}function eb(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t;}function eS(e){let t,n=e.depsTail,l=n;for(;l;){let e=l.prevDep;-1===l.version?(l===n&&(n=e),ew(l),function(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0);}(l)):t=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=e;}e.deps=t,e.depsTail=n;}function eC(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ex(t.dep.computed)||t.dep.version!==t.version))return  true;return !!e._dirty}function ex(e){if(4&e.flags&&!(16&e.flags)||(e.flags&=-17,e.globalVersion===eP)||(e.globalVersion=eP,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!eC(e))))return;e.flags|=2;let t=e.dep,n=r,l=eT;r=e,eT=true;try{eb(e);let n=e.fn(e._value);(0===t.version||B(n,e._value))&&(e.flags|=128,e._value=n,t.version++);}catch(e){throw t.version++,e}finally{r=n,eT=l,eS(e),e.flags&=-3;}}function ew(e,t=false){let{dep:n,prevSub:l,nextSub:r}=e;if(l&&(l.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=l,e.nextSub=void 0),n.subs===e&&(n.subs=l,!l&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)ew(e,true);}t||--n.sc||!n.map||n.map.delete(n.key);}let eT=true,eA=[];function eR(){eA.push(eT),eT=false;}function eO(){let e=eA.pop();eT=void 0===e||e;}function eN(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=r;r=void 0;try{t();}finally{r=e;}}}let eP=0;class eM{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0;}}class eI{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=true;}track(e){if(!r||!eT||r===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==r)t=this.activeLink=new eM(r,this),r.deps?(t.prevDep=r.depsTail,r.depsTail.nextDep=t,r.depsTail=t):r.deps=r.depsTail=t,function e(t){if(t.dep.sc++,4&t.sub.flags){let n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let t=n.deps;t;t=t.nextDep)e(t);}let l=t.dep.subs;l!==t&&(t.prevSub=l,l&&(l.nextSub=t)),t.dep.subs=t;}}(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=r.depsTail,t.nextDep=void 0,r.depsTail.nextDep=t,r.depsTail=t,r.deps===t&&(r.deps=e);}return t}trigger(e){this.version++,eP++,this.notify(e);}notify(e){e_++;try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify();}finally{ey();}}}let eF=new WeakMap,eL=Symbol(""),ej=Symbol(""),eV=Symbol("");function eD(e,t,n){if(eT&&r){let t=eF.get(e);t||eF.set(e,t=new Map);let l=t.get(n);l||(t.set(n,l=new eI),l.map=t,l.key=n),l.track();}}function eU(e,t,n,l,r,i){let s=eF.get(e);if(!s)return void eP++;let o=e=>{e&&e.trigger();};if(e_++,"clear"===t)s.forEach(o);else {let r=k(e),i=r&&P(n);if(r&&"length"===n){let e=Number(l);s.forEach((t,n)=>{("length"===n||n===eV||!A(n)&&n>=e)&&o(t);});}else switch((void 0!==n||s.has(void 0))&&o(s.get(n)),i&&o(s.get(eV)),t){case "add":if(r)i&&o(s.get("length"));else {let t;o(s.get(eL));"[object Map]"===(t=e,N.call(t))&&o(s.get(ej));}break;case "delete":if(!r){let t;o(s.get(eL));"[object Map]"===(t=e,N.call(t))&&o(s.get(ej));}break;case "set":let a;"[object Map]"===(a=e,N.call(a))&&o(s.get(eL));}}ey();}function eB(e){let t=tm(e);return t===e||(eD(t,"iterate",eV),tv(e))?t:tg(e)?th(e)?t.map(e=>tS(tb(e))):t.map(tS):t.map(tb)}function e$(e){return eD(e=tm(e),"iterate",eV),e}function eH(e,t){return tg(e)?th(e)?tS(tb(t)):tS(t):tb(t)}let eW={__proto__:null,[Symbol.iterator](){return eK(this,Symbol.iterator,e=>eH(this,e))},concat(...e){return eB(this).concat(...e.map(e=>k(e)?eB(e):e))},entries(){return eK(this,"entries",e=>(e[1]=eH(this,e[1]),e))},every(e,t){return eG(this,"every",e,t,void 0,arguments)},filter(e,t){return eG(this,"filter",e,t,e=>e.map(e=>eH(this,e)),arguments)},find(e,t){return eG(this,"find",e,t,e=>eH(this,e),arguments)},findIndex(e,t){return eG(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return eG(this,"findLast",e,t,e=>eH(this,e),arguments)},findLastIndex(e,t){return eG(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return eG(this,"forEach",e,t,void 0,arguments)},includes(...e){return eJ(this,"includes",e)},indexOf(...e){return eJ(this,"indexOf",e)},join(e){return eB(this).join(e)},lastIndexOf(...e){return eJ(this,"lastIndexOf",e)},map(e,t){return eG(this,"map",e,t,void 0,arguments)},pop(){return eZ(this,"pop")},push(...e){return eZ(this,"push",e)},reduce(e,...t){return eX(this,"reduce",e,t)},reduceRight(e,...t){return eX(this,"reduceRight",e,t)},shift(){return eZ(this,"shift")},some(e,t){return eG(this,"some",e,t,void 0,arguments)},splice(...e){return eZ(this,"splice",e)},toReversed(){return eB(this).toReversed()},toSorted(e){return eB(this).toSorted(e)},toSpliced(...e){return eB(this).toSpliced(...e)},unshift(...e){return eZ(this,"unshift",e)},values(){return eK(this,"values",e=>eH(this,e))}};function eK(e,t,n){let l=e$(e),r=l[t],i=r.call(l);if(l!==e&&!tv(e)){if("Array Iterator"===i[Symbol.toStringTag]){let e=Object.create(Object.getPrototypeOf(i));return e.next=()=>ez(i.next(),n),r!==eq[t]&&Object.defineProperties(e,{return:{get(){let e=i.return;return "function"==typeof e?e.bind(i):e}},throw:{get(){let e=i.throw;return "function"==typeof e?e.bind(i):e}}}),e}i._next=i.next,i.next=()=>ez(i._next(),n);}return i}function ez(e,t){return e.done||(e.value=t(e.value)),e}let eq=Array.prototype;function eG(e,t,n,l,r,i){let s=e$(e),o=s!==e&&!tv(e),a=s[t];if(a!==eq[t]){let t=a.apply(e,i);return o?tb(t):t}let u=n;s!==e&&(o?u=function(t,l){return n.call(this,eH(e,t),l,e)}:n.length>2&&(u=function(t,l){return n.call(this,t,l,e)}));let c=a.call(s,u,l);return o&&r?r(c):c}function eX(e,t,n,l){let r=e$(e),i=r!==e&&!tv(e),s=n,o=false;r!==e&&(i?(o=0===l.length,s=function(t,l,r){return o&&(o=false,t=eH(e,t)),n.call(this,t,eH(e,l),r,e)}):n.length>3&&(s=function(t,l,r){return n.call(this,t,l,r,e)}));let a=r[t](s,...l);return o?eH(e,a):a}function eJ(e,t,n){let l=tm(e);eD(l,"iterate",eV);let r=l[t](...n);return (-1===r||false===r)&&t_(n[0])?(n[0]=tm(n[0]),l[t](...n)):r}function eZ(e,t,n=[]){eR(),e_++;let l=tm(e)[t].apply(e,n);return ey(),eO(),l}let eY=h("__proto__,__v_isRef,__isVue"),eQ=new Set((((Object.getOwnPropertyNames(Symbol)).filter(e=>"arguments"!==e&&"caller"!==e)).map(e=>Symbol[e])).filter(A));function e0(e){A(e)||(e=String(e));let t=tm(this);return eD(t,"has",e),t.hasOwnProperty(e)}class e1{constructor(e=false,t=false){this._isReadonly=e,this._isShallow=t;}get(e,t,n){if("__v_skip"===t)return e.__v_skip;let l=this._isReadonly,r=this._isShallow;if("__v_isReactive"===t)return !l;if("__v_isReadonly"===t)return l;if("__v_isShallow"===t)return r;if("__v_raw"===t)return n===(l?r?ta:to:r?ts:ti).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let i=k(e);if(!l){let e;if(i&&(e=eW[t]))return e;if("hasOwnProperty"===t)return e0}let s=Reflect.get(e,t,tC(e)?e:n);if((A(t)?eQ.has(t):eY(t))||(l||eD(e,"get",t),r))return s;if(tC(s)){let e=i&&P(t)?s:s.value;return l&&R(e)?tf(e):e}return R(s)?l?tf(s):tu(s):s}}class e2 extends e1{constructor(e=false){super(false,e);}set(e,t,n,l){let r=e[t],i=k(e)&&P(t);if(!this._isShallow){let e=tg(r);if(tv(n)||tg(n)||(r=tm(r),n=tm(n)),!i&&tC(r)&&!tC(n))if(e)return  true;else return r.value=n,true}let s=i?Number(t)<e.length:w(e,t),o=Reflect.set(e,t,n,tC(e)?e:l);return e===tm(l)&&o&&(s?B(n,r)&&eU(e,"set",t,n):eU(e,"add",t,n)),o}deleteProperty(e,t){let n=w(e,t);e[t];let l=Reflect.deleteProperty(e,t);return l&&n&&eU(e,"delete",t,void 0),l}has(e,t){let n=Reflect.has(e,t);return A(t)&&eQ.has(t)||eD(e,"has",t),n}ownKeys(e){return eD(e,"iterate",k(e)?"length":eL),Reflect.ownKeys(e)}}class e6 extends e1{constructor(e=false){super(true,e);}set(e,t){return  true}deleteProperty(e,t){return  true}}let e8=new e2,e4=new e6,e3=new e2(true);new e6(true);let e9=e=>e;function e7(e){return function(){return "delete"!==e&&("clear"===e?void 0:this)}}function te(e,t){let n,l=(S(n={get(n){let l=this.__v_raw,r=tm(l),i=tm(n);e||(B(n,i)&&eD(r,"get",n),eD(r,"get",i));let{has:s}=Reflect.getPrototypeOf(r),o=t?e9:e?tS:tb;return s.call(r,n)?o(l.get(n)):s.call(r,i)?o(l.get(i)):void(l!==r&&l.get(n))},get size(){let t=this.__v_raw;return e||eD(tm(t),"iterate",eL),t.size},has(t){let n=this.__v_raw,l=tm(n),r=tm(t);return e||(B(t,r)&&eD(l,"has",t),eD(l,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)},forEach(n,l){let r=this,i=r.__v_raw,s=tm(i),o=t?e9:e?tS:tb;return e||eD(s,"iterate",eL),i.forEach((e,t)=>n.call(l,o(e),o(t),r))}},e?{add:e7("add"),set:e7("set"),delete:e7("delete"),clear:e7("clear")}:{add(e){let n=tm(this),l=Reflect.getPrototypeOf(n),r=tm(e),i=t||tv(e)||tg(e)?e:r;return l.has.call(n,i)||B(e,i)&&l.has.call(n,e)||B(r,i)&&l.has.call(n,r)||(n.add(i),eU(n,"add",i,i)),this},set(e,n){t||tv(n)||tg(n)||(n=tm(n));let l=tm(this),{has:r,get:i}=Reflect.getPrototypeOf(l),s=r.call(l,e);s||(e=tm(e),s=r.call(l,e));let o=i.call(l,e);return l.set(e,n),s?B(n,o)&&eU(l,"set",e,n):eU(l,"add",e,n),this},delete(e){let t=tm(this),{has:n,get:l}=Reflect.getPrototypeOf(t),r=n.call(t,e);r||(e=tm(e),r=n.call(t,e)),l&&l.call(t,e);let i=t.delete(e);return r&&eU(t,"delete",e,void 0),i},clear(){let e=tm(this),t=0!==e.size,n=e.clear();return t&&eU(e,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=function(...n){let r,i=this.__v_raw,s=tm(i),o="[object Map]"===(r=s,N.call(r)),a="entries"===l||l===Symbol.iterator&&o,u=i[l](...n),c=t?e9:e?tS:tb;return e||eD(s,"iterate","keys"===l&&o?ej:eL),S(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:a?[c(e[0]),c(e[1])]:c(e),done:t}}})};}),n);return (n,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_isShallow"===r?t:"__v_raw"===r?n:Reflect.get(w(l,r)&&r in n?l:n,r,i)}let tt={get:te(false,false)},tn={get:te(false,true)},tl={get:te(true,false)};({get:te(true,true)});let ti=new WeakMap,ts=new WeakMap,to=new WeakMap,ta=new WeakMap;function tu(e){return tg(e)?e:td(e,false,e8,tt,ti)}function tc(e){return td(e,false,e3,tn,ts)}function tf(e){return td(e,true,e4,tl,to)}function td(e,t,n,l,r){let i;if(!R(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let s=r.get(e);if(s)return s;let o=function(e){switch(e){case "Object":case "Array":return 1;case "Map":case "Set":case "WeakMap":case "WeakSet":return 2;default:return 0}}((i=e,N.call(i)).slice(8,-1));if(0===o)return e;let a=new Proxy(e,2===o?l:n);return r.set(e,a),a}function th(e){return tg(e)?th(e.__v_raw):!!(e&&e.__v_isReactive)}function tg(e){return !!(e&&e.__v_isReadonly)}function tv(e){return !!(e&&e.__v_isShallow)}function t_(e){return !!e&&!!e.__v_raw}function tm(e){let t=e&&e.__v_raw;return t?tm(t):e}function ty(e){return !w(e,"__v_skip")&&Object.isExtensible(e)&&H$1(e,"__v_skip",true),e}let tb=e=>R(e)?tu(e):e,tS=e=>R(e)?tf(e):e;function tC(e){return !!e&&true===e.__v_isRef}function tx(e){return tk(e,false)}function tk(e,t){return tC(e)?e:new tE(e,t)}class tE{constructor(e,t){this.dep=new eI,this.__v_isRef=true,this.__v_isShallow=false,this._rawValue=t?e:tm(e),this._value=t?e:tb(e),this.__v_isShallow=t;}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||tv(e)||tg(e);B(e=n?e:tm(e),t)&&(this._rawValue=e,this._value=n?e:tb(e),this.dep.trigger());}}function tA(e){return tC(e)?e.value:e}let tO={get:(e,t,n)=>"__v_raw"===t?e:tA(Reflect.get(e,t,n)),set:(e,t,n,l)=>{let r=e[t];return tC(r)&&!tC(n)?(r.value=n,true):Reflect.set(e,t,n,l)}};function tN(e){return th(e)?e:new Proxy(e,tO)}class tV{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new eI(this),this.__v_isRef=true,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eP-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n;}notify(){if(this.flags|=16,!(8&this.flags)&&r!==this)return em(this,true),true}get value(){let e=this.dep.track();return ex(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e);}}let tB={},t$=new WeakMap;function tW(e,t=false,n=p){if(n){let t=t$.get(n);t||t$.set(n,t=[]),t.push(e);}}function tK(e,t=1/0,n){if(t<=0||!R(e)||e.__v_skip||((n=n||new Map).get(e)||0)>=t)return e;if(n.set(e,t),t--,tC(e))tK(e.value,t,n);else if(k(e))for(let l=0;l<e.length;l++)tK(e[l],t,n);else {let l,r;if("[object Set]"===(l=e,N.call(l))||"[object Map]"===(r=e,N.call(r)))e.forEach(e=>{tK(e,t,n);});else {let l;if("[object Object]"===(l=e,N.call(l))){for(let l in e)tK(e[l],t,n);for(let l of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,l)&&tK(e[l],t,n);}}}return e}function tG(e,t,n,l){try{return l?e(...l):e()}catch(e){tJ(e,t,n);}}function tX(e,t,n,l){if(E(e)){let r=tG(e,t,n,l);return r&&O(r)&&r.catch(e=>{tJ(e,t,n);}),r}if(k(e)){let r=[];for(let i=0;i<e.length;i++)r.push(tX(e[i],t,n,l));return r}}function tJ(e,t,n,l=true){t?t.vnode:null;let {errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||g;if(t){let l=t.parent,r=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){let t=l.ec;if(t){for(let n=0;n<t.length;n++)if(false===t[n](e,r,s))return}l=l.parent;}if(i){eR(),tG(i,null,10,[e,r,s]),eO();return}}!function(e,t=true,n=false){if(n)throw e;console.error(e);}(e,l,s);}let tZ=[],tY=-1,tQ=[],t0=null,t1=0,t2=Promise.resolve(),t6=null;function t8(e){let t=t6||t2;return e?t.then(this?e.bind(this):e):t}function t4(e){if(!(1&e.flags)){let t=nt(e),n=tZ[tZ.length-1];!n||!(2&e.flags)&&t>=nt(n)?tZ.push(e):tZ.splice(function(e){let t=tY+1,n=tZ.length;for(;t<n;){let l=t+n>>>1,r=tZ[l],i=nt(r);i<e||i===e&&2&r.flags?t=l+1:n=l;}return t}(t),0,e),e.flags|=1,t3();}}function t3(){t6||(t6=t2.then(function e(t){try{for(tY=0;tY<tZ.length;tY++){let e=tZ[tY];e&&!(8&e.flags)&&(4&e.flags&&(e.flags&=-2),tG(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2));}}finally{for(;tY<tZ.length;tY++){let e=tZ[tY];e&&(e.flags&=-2);}tY=-1,tZ.length=0,t7(),t6=null,(tZ.length||tQ.length)&&e();}}));}function t5(e){if(k(e))for(let t=0;t<e.length;t++)tQ.push(e[t]);else t0&&-1===e.id?t0.splice(t1+1,0,e):1&e.flags||(tQ.push(e),e.flags|=1);t3();}function t9(e,t,n,l=tY+1){for(;l<tZ.length;l++){let n=tZ[l];if(n&&2&n.flags){if(e&&n.id!==e.uid||void 0!==t&&!(n.id>=t))continue;tZ.splice(l,1),l=e?l-1:tY,4&n.flags&&(n.flags&=-2),n(),4&n.flags||(n.flags&=-2);}}}function t7(e,t,n=0){if(tQ.length){let e=tQ,l=0;if(t){e=[];for(let r=0;r<tQ.length;r++){let i=tQ[r];(void 0!==i.i?!i.i||i.i.uid<n:t.has(i))?tQ[l++]=i:e.push(i);}}let r=[...new Set(e)].sort((e,t)=>nt(e)-nt(t));if(tQ.length=l,t0){for(let e=0;e<r.length;e++)t0.push(r[e]);return}for(t0=r,t1=0;t1<t0.length;t1++){let e=t0[t1];4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2;}t0=null,t1=0;}}let ne=false,nt=e=>null==e.id?2&e.flags?-1:1/0:e.id,nn=null,nl=null;function nr(e){let t=nn;return nn=e,nl=e&&e.type.__scopeId||null,t}function na(e,t=nn,n){if(!t||e._n)return e;let l=(...n)=>{let r;l._d&&r9(-1);let i=nr(t),s=r6.length;try{r=e(...n);}finally{for(let e=r6.length;e>s;e--)r3();nr(i),l._d&&r9(1);}return r};return l._n=true,l._c=true,l._d=true,l}function nu(e,t){if(null===nn)return e;let n=ij(nn),l=e.dirs||(e.dirs=[]);for(let e=0;e<t.length;e++){let[r,i,s,o=g]=t[e];r&&(E(r)&&(r={mounted:r,updated:r}),r.deep&&tK(i),l.push({dir:r,instance:n,value:i,oldValue:void 0,arg:s,modifiers:o}));}return e}function nc(e,t,n,l){let r=e.dirs,i=t&&t.dirs;for(let s=0;s<r.length;s++){let o=r[s];i&&(o.oldValue=i[s].value);let a=o.dir[l];a&&(eR(),tX(a,n,8,[e.el,o,e,t]),eO());}}function nf(e,t){if(iw){let n=iw.provides,l=iw.parent&&iw.parent.provides;l===n&&(n=iw.provides=Object.create(l)),n[e]=t;}}function np(e,t,n=false){let l=ik();if(l||rc){let r=rc?rc._context.provides:l?null==l.parent||l.ce?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&E(t)?t.call(l&&l.proxy):t}}let nh=Symbol.for("v-scx"),ng=()=>np(nh);function ny(e,t,n){return nb(e,t,n)}function nb(e,t,n=g){let l,{immediate:r,flush:i}=n,s=S({},n),o=t&&r||!t&&"post"!==i;if(iR){if("sync"===i){let e=ng();l=e.__watcherHandles||(e.__watcherHandles=[]);}else if(!o){let e=()=>{};return e.stop=_,e.resume=_,e.pause=_,e}}let a=iw;s.call=(e,t,n)=>tX(e,a,t,n);let u=false;"post"===i?s.scheduler=e=>{e.i=a,rF(e,a&&a.suspense);}:"sync"!==i&&(u=true,s.scheduler=(e,t)=>{t?e():t4(e);}),s.augmentJob=e=>{t&&(e.flags|=4),u&&(e.flags|=2,a&&(e.id=a.uid,e.i=a));};let c=function(e,t,n=g){let l,r,i,s,{immediate:o,deep:a,once:u,scheduler:c,augmentJob:f,call:d}=n,h=e=>a?e:tv(e)||false===a||0===a?tK(e,1):tK(e),v=false,m=false;if(tC(e)?(r=()=>e.value,v=tv(e)):th(e)?(r=()=>h(e),v=true):k(e)?(m=true,v=e.some(e=>th(e)||tv(e)),r=()=>e.map(e=>tC(e)?e.value:th(e)?h(e):E(e)?d?d(e,2):e():void 0)):r=E(e)?t?d?()=>d(e,2):e:()=>{if(i){eR();try{i();}finally{eO();}}let t=p;p=l;try{return d?d(e,3,[s]):e(s)}finally{p=t;}}:_,t&&a){let e=r,t=true===a?1/0:a;r=()=>tK(e(),t);}let y=ed(),b=()=>{l.stop(),y&&y.active&&C(y.effects,l);};if(u&&t){let e=t;t=(...t)=>{try{return e(...t)}finally{b();}};}let S=m?Array(e.length).fill(tB):tB,x=e=>{if(1&l.flags&&(l.dirty||e))if(t){let n=l.run();if(e||a||v||(m?n.some((e,t)=>B(e,S[t])):B(n,S))){let e=p;eR();try{i&&i(),p=l;let e=[n,S===tB?void 0:m&&S[0]===tB?[]:S,s];S=n,d?d(t,3,e):t(...e);}finally{p=e,eO();}}}else l.run();};return f&&f(x),(l=new ev(r)).scheduler=c?()=>c(x,false):x,s=e=>tW(e,false,l),i=l.onStop=()=>{let e=t$.get(l);if(e){if(d)d(e,4);else for(let t of e)t();t$.delete(l);}},t?o?x(true):S=l.run():c?c(x.bind(null,true),true):l.run(),b.pause=l.pause.bind(l),b.resume=l.resume.bind(l),b.stop=b,b}(e,t,s);return iR&&(l?l.push(c):o&&c()),c}function nS(e,t,n){let l,r=this.proxy,i=T(e)?e.includes(".")?nC(r,e):()=>r[e]:e.bind(r,r);E(t)?l=t:(l=t.handler,n=t);let s=iE(this),o=nb(i,l.bind(r),n);return s(),o}function nC(e,t){let n=t.split(".");return ()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}let nw=Symbol("_vte");let nM=Symbol("_leaveCb"),nI=Symbol("_enterCb");function nF(){let e={isMounted:false,isLeaving:false,isUnmounting:false,leavingVNodes:new Map};return lS(()=>{e.isMounted=true;}),lw(()=>{e.isUnmounting=true;}),e}let nL=[Function,Array],nj={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nL,onEnter:nL,onAfterEnter:nL,onEnterCancelled:nL,onBeforeLeave:nL,onLeave:nL,onAfterLeave:nL,onLeaveCancelled:nL,onBeforeAppear:nL,onAppear:nL,onAfterAppear:nL,onAppearCancelled:nL};function nV(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==r1){t=n;break}}return t}let nD={name:"BaseTransition",props:nj,setup(e,{slots:t}){let n=ik(),l=nF();return ()=>{let r=t.default&&nK(t.default(),true),i=r&&r.length?nV(r):n.subTree?ig():void 0;if(!i)return;let s=tm(e),{mode:o}=s;if(l.isLeaving)return n$(i);let a=nH(i);if(!a)return n$(i);let u=nB(a,s,l,n,e=>u=e);a.type!==r1&&nW(a,u);let c=n.subTree&&nH(n.subTree);if(c&&c.type!==r1&&!ir(c,a)&&nz(n.subTree)){let e=nB(c,s,l,n);if(nW(c,e),"out-in"===o&&a.type!==r1)return l.isLeaving=true,e.afterLeave=()=>{l.isLeaving=false,8&n.job.flags||n.update(),delete e.afterLeave,c=void 0;},n$(i);"in-out"===o&&a.type!==r1?e.delayLeave=(e,t,n)=>{nU(l,c)[String(c.key)]=c,e[nM]=()=>{t(),e[nM]=void 0,delete u.delayedLeave,c=void 0;},u.delayedLeave=()=>{n(),delete u.delayedLeave,c=void 0;};}:c=void 0;}else c&&(c=void 0);return i}}};function nU(e,t){let{leavingVNodes:n}=e,l=n.get(t.type);return l||(l=Object.create(null),n.set(t.type,l)),l}function nB(e,t,n,l,r){let{appear:i,mode:s,persisted:o=false,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:v,onAppear:_,onAfterAppear:m,onAppearCancelled:y}=t,b=String(e.key),S=nU(n,e),C=(e,t)=>{e&&tX(e,l,9,t);},x=(e,t)=>{let n=t[1];C(e,t),k(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n();},w={mode:s,persisted:o,beforeEnter(t){let l=a;if(!n.isMounted)if(!i)return;else l=v||a;t[nM]&&t[nM](true);let r=S[b];if(r&&ir(e,r)){let e=r.el[nM];if(!e){let t=nz(r);e=t&&t.el[nM];}e&&e();}C(l,[t]);},enter(t){if(S[b]===e)return;let l=u,r=c,s=f;if(!n.isMounted)if(!i)return;else l=_||u,r=m||c,s=y||f;let o=false;t[nI]=e=>{o||(o=true,e?C(s,[t]):C(r,[t]),w.delayedLeave&&w.delayedLeave(),t[nI]=void 0);};let a=t[nI].bind(null,false);l?x(l,[t,a]):a();},leave(t,l){let r=String(e.key);if(t[nI]&&t[nI](true),n.isUnmounting)return l();C(p,[t]);let i=false;t[nM]=n=>{i||(i=true,l(),n?C(g,[t]):C(h,[t]),t[nM]=void 0,S[r]===e&&delete S[r]);};let s=t[nM].bind(null,false);S[r]=e,d?x(d,[t,s]):s();},clone(e){let i=nB(e,t,n,l,r);return r&&r(i),i}};return w}function n$(e){if(lc(e))return (e=ip(e)).children=null,e}function nH(e){if(!lc(e))return e.type.__isTeleport&&e.children?nV(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&E(n.default))return n.default()}}function nW(e,t){if(6&e.shapeFlag&&e.component){e.transition=t;let n=e.component.subTree;nW(n.type.__isTeleport&&nH(n)||n,t);}else if(128&e.shapeFlag)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===rQ&&k(e.children)){let n=r_(e.children,false);n&&nW(n,t);}}function nK(e,t=false,n){let l=[],r=0;for(let i=0;i<e.length;i++){let s=e[i],o=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===rQ?(128&s.patchFlag&&r++,l=l.concat(nK(s.children,t,o))):(t||s.type!==r1)&&l.push(null!=o?ip(s,{key:o}):s);}if(r>1)for(let e=0;e<l.length;e++)l[e].patchFlag=-2;return l}function nz(e){if(e.component)return nz(e.component.subTree);if(e.type===rQ){let t=k(e.children)&&r_(e.children,false);return t?nz(t):void 0}if(e.type!==r1)return e}function nX(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0];}function nZ(e,t){let n;return !!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}let nY=new WeakMap;function nQ(e,t,n,l,r=false){if(k(e))return void e.forEach((e,i)=>nQ(e,t&&(k(t)?t[i]:t),n,l,r));if(lo(l)&&!r){512&l.shapeFlag&&l.type.__asyncResolved&&l.component.subTree.component&&nQ(e,t,n,l.component.subTree);return}let i=4&l.shapeFlag?ij(l.component):l.el,s=r?null:i,{i:o,r:a}=e,u=t&&t.r,c=o.refs===g?o.refs={}:o.refs,f=o.setupState,p=tm(f),d=f===g?m:e=>!nZ(c,e)&&w(p,e),h=(e,t)=>!(t&&nZ(c,t));if(null!=u&&u!==a&&(n0(t),T(u)?(c[u]=null,d(u)&&(f[u]=null)):tC(u)&&(h(u,t.k)&&(u.value=null),t.k&&(c[t.k]=null))),E(a))tG(a,o,12,[s,c]);else {let t=T(a),l=tC(a);if(t||l){let o=()=>{if(e.f){let n=t?d(a)?f[a]:c[a]:h()||!e.k?a.value:c[e.k];if(r)k(n)&&C(n,i);else if(k(n))n.includes(i)||n.push(i);else if(t)c[a]=[i],d(a)&&(f[a]=c[a]);else {let t=[i];h(a,e.k)&&(a.value=t),e.k&&(c[e.k]=t);}}else t?(c[a]=s,d(a)&&(f[a]=s)):l&&(h(a,e.k)&&(a.value=s),e.k&&(c[e.k]=s));};if(s){let t=()=>{o(),nY.delete(e);};t.id=-1,nY.set(e,t),rF(t,n);}else n0(e),o();}}}function n0(e){let t=nY.get(e);t&&(t.flags|=8,nY.delete(e));}z().requestIdleCallback||(e=>setTimeout(e,1));z().cancelIdleCallback||(e=>clearTimeout(e));let lo=e=>!!e.type.__asyncLoader;let lc=e=>e.type.__isKeepAlive;function ld(e,t){lg(e,"a",t);}function lh(e,t){lg(e,"da",t);}function lg(e,t,n=iw){let l=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent;}return e()});if(lm(t,l,n),n){let e=n.parent;for(;e&&e.parent;)lc(e.parent.vnode)&&function(e,t,n,l){let r=lm(t,e,l,true);lk(()=>{C(l[t],r);},n);}(l,t,n,e),e=e.parent;}}function lm(e,t,n=iw,l=false){if(n){let r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{eR();let r=iE(n),i=tX(t,n,e,l);return r(),eO(),i});return l?r.unshift(i):r.push(i),i}}let ly=e=>(t,n=iw)=>{iR&&"sp"!==e||lm(e,(...e)=>t(...e),n);},lb=ly("bm"),lS=ly("m"),lC=ly("bu"),lx=ly("u"),lw=ly("bum"),lk=ly("um"),lE=ly("sp"),lT=ly("rtg"),lA=ly("rtc");function lR(e,t=iw){lm("ec",e,t);}let lO="components";let lP=Symbol.for("v-ndc");function lM(e){return T(e)?lF(lO,e,false)||e:e||lP}function lF(e,t,n=true,l=false){let r=nn||iw;if(r){let n=r.type;{let e=iV(n,false);if(e&&(e===t||e===L(t)||e===D(L(t))))return n}let i=lL(r[e]||n[e],t)||lL(r.appContext[e],t);return !i&&l?n:i}}function lL(e,t){return e&&(e[t]||e[L(t)]||e[D(L(t))])}function lj(e,t,n,l){let r,i=n,s=k(e);if(s||T(e)){let n=s&&th(e),l=false,o=false;n&&(l=!tv(e),o=tg(e),e=e$(e)),r=Array(e.length);for(let n=0,s=e.length;n<s;n++)r[n]=t(l?o?tS(tb(e[n])):tb(e[n]):e[n],n,void 0,i);}else if("number"==typeof e)if(!Number.isInteger(e)||e<0)r=[];else {r=Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,i);}else if(R(e))if(e[Symbol.iterator])r=Array.from(e,(e,n)=>t(e,n,void 0,i));else {let n=Object.keys(e);r=Array(n.length);for(let l=0,s=n.length;l<s;l++){let s=n[l];r[l]=t(e[s],s,l,i);}}else r=[];return r}let l$=e=>e?iA(e)?ij(e):l$(e.parent):null,lH=S(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>l$(e.parent),$root:e=>l$(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>re(e),$forceUpdate:e=>e.f||(e.f=()=>{t4(e.update);}),$nextTick:e=>e.n||(e.n=t8.bind(e.proxy)),$watch:e=>nS.bind(e)}),lW=(e,t)=>e!==g&&!e.__isScriptSetup&&w(e,t),lK={get({_:e},t){let n,l;if("__v_skip"===t)return  true;let{ctx:r,setupState:i,data:s,props:o,accessCache:a,type:u,appContext:c}=e;if("$"!==t[0]){let e=a[t];if(void 0!==e)switch(e){case 1:return i[t];case 2:return s[t];case 4:return r[t];case 3:return o[t]}else {if(lW(i,t))return a[t]=1,i[t];if(s!==g&&w(s,t))return a[t]=2,s[t];if(w(o,t))return a[t]=3,o[t];if(r!==g&&w(r,t))return a[t]=4,r[t];l9&&(a[t]=0);}}let f=lH[t];return f?("$attrs"===t&&eD(e.attrs,"get",""),f(e)):(n=u.__cssModules)&&(n=n[t])?n:r!==g&&w(r,t)?(a[t]=4,r[t]):w(l=c.config.globalProperties,t)?l[t]:void 0},set({_:e},t,n){let{data:l,setupState:r,ctx:i}=e;return lW(r,t)?(r[t]=n,true):l!==g&&w(l,t)?(l[t]=n,true):!w(e.props,t)&&!("$"===t[0]&&t.slice(1)in e)&&(i[t]=n,true)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:r,props:i,type:s}},o){let a;return !!(n[o]||e!==g&&"$"!==o[0]&&w(e,o)||lW(t,o)||w(i,o)||w(l,o)||w(lH,o)||w(r.config.globalProperties,o)||(a=s.__cssModules)&&a[o])},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:w(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};S({},lK,{get(e,t){if(t!==Symbol.unscopables)return lK.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!q(t)});function l6(e){return k(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let l9=true;function l7(e,t,n){tX(k(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n);}function re(e){let t,n=e.type,{mixins:l,extends:r}=n,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(n);return a?t=a:i.length||l||r?(t={},i.length&&i.forEach(e=>rt(t,e,o,true)),rt(t,n,o)):t=n,R(n)&&s.set(n,t),t}function rt(e,t,n,l=false){let{mixins:r,extends:i}=t;for(let s in i&&rt(e,i,n,true),r&&r.forEach(t=>rt(e,t,n,true)),t)if(l&&"expose"===s);else {let l=rn[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s];}return e}let rn={data:rl,props:ro,emits:ro,methods:rs,computed:rs,beforeCreate:ri,created:ri,beforeMount:ri,mounted:ri,beforeUpdate:ri,updated:ri,beforeDestroy:ri,beforeUnmount:ri,destroyed:ri,unmounted:ri,activated:ri,deactivated:ri,errorCaptured:ri,serverPrefetch:ri,components:rs,directives:rs,watch:function(e,t){if(!e)return t;if(!t)return e;let n=S(Object.create(null),e);for(let l in t)n[l]=ri(e[l],t[l]);return n},provide:rl,inject:function(e,t){return rs(rr(e),rr(t))}};function rl(e,t){return t?e?function(){return S(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function rr(e){if(k(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ri(e,t){return e?[...new Set([].concat(e,t))]:t}function rs(e,t){return e?S(Object.create(null),e,t):t}function ro(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:S(Object.create(null),l6(e),l6(null!=t?t:{})):t}function ra(){return {app:null,config:{isNativeTag:m,performance:false,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ru=0,rc=null;let rp=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${L(t)}Modifiers`]||e[`${V(t)}Modifiers`];function rd(e,t,...n){let l;if(e.isUnmounted)return;let r=e.vnode.props||g,i=n,s=t.startsWith("update:"),o=s&&rp(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>T(e)?e.trim():e)),o.number&&(i=i.map(W$1)));let a=r[l=U(t)]||r[l=U(L(t))];!a&&s&&(a=r[l=U(V(t))]),a&&tX(a,e,6,i);let u=r[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=true,tX(u,e,6,i);}}let rh=new WeakMap;function rg(e,t){return !!e&&!!y(t)&&(w(e,(t="Once"===(t=t.slice(2))?t:t.replace(/Once$/,""))[0].toLowerCase()+t.slice(1))||w(e,V(t))||w(e,t))}function rv(e){let t,n,{type:l,vnode:r,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:u,emit:c,render:f,renderCache:p,props:d,data:h,setupState:g,ctx:v,inheritAttrs:_}=e,m=nr(e);try{if(4&r.shapeFlag){let e=s||i;t=iv(f.call(e,e,p,d,g,h,v)),n=u;}else t=iv(l.length>1?l(d,{attrs:u,slots:a,emit:c}):l(d,null)),n=l.props?u:rm(u);}catch(n){r6.length=0,tJ(n,e,1),t=iu(r1);}let y=t;if(n&&false!==_){let e=Object.keys(n),{shapeFlag:t}=y;e.length&&7&t&&(o&&e.some(b)&&(n=ry(n,o)),y=ip(y,n,false,true));}return r.dirs&&((y=ip(y,null,false,true)).dirs=y.dirs?y.dirs.concat(r.dirs):r.dirs),r.transition&&nW(y.type.__isTeleport&&nH(y)||y,r.transition),t=y,nr(m),t}function r_(e,t=true){let n;for(let t=0;t<e.length;t++){let l=e[t];if(!il(l))return;if(l.type!==r1||"v-if"===l.children)if(n)return;else n=l;}return n}let rm=e=>{let t;for(let n in e)("class"===n||"style"===n||y(n))&&((t||(t={}))[n]=e[n]);return t},ry=(e,t)=>{let n={};for(let l in e)b(l)&&l.slice(9)in t||(n[l]=e[l]);return n};function rb(e,t,n){let l=Object.keys(t);if(l.length!==Object.keys(e).length)return  true;for(let r=0;r<l.length;r++){let i=l[r];if(!w(e,i)||rS(t,e,i)&&!rg(n,i))return  true}return  false}function rS(e,t,n){let l=e[n],r=t[n];return "style"===n&&R(l)&&R(r)?!ei(l,r):l!==r}function rC({vnode:e,parent:t,suspense:n},l){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=l,e=n),n===e)(e=t.vnode).el=l,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=l);}let rx={},rw=e=>Object.getPrototypeOf(e)===rx;function rk(e,t,n,l){let r,[i,s]=e.propsOptions,o=false;if(t)for(let a in t){let u;if(M(a))continue;let c=t[a];i&&w(i,u=L(a))?s&&s.includes(u)?(r||(r={}))[u]=c:n[u]=c:rg(e.emitsOptions,a)||a in l&&c===l[a]||(l[a]=c,o=true);}if(s){let t=tm(n),l=r||g;for(let r=0;r<s.length;r++){let o=s[r];n[o]=rE(i,t,o,l[o],e,!w(l,o));}}return o}function rE(e,t,n,l,r,i){let s=e[n];if(null!=s){let e=w(s,"default");if(e&&void 0===l){let e=s.default;if(s.type!==Function&&!s.skipFactory&&E(e)){let{propsDefaults:i}=r;if(n in i)l=i[n];else {let s=iE(r);l=i[n]=e.call(null,t),s();}}else l=e;r.ce&&r.ce._setProp(n,l);}s[0]&&(i&&!e?l=false:s[1]&&(""===l||l===V(n))&&(l=true));}return l}let rT=new WeakMap;function rA(e){return !("$"===e[0]||M(e))}let rR=e=>"_"===e||"_ctx"===e||"$stable"===e,rO=e=>k(e)?e.map(iv):[iv(e)],rN=(e,t,n)=>{if(t._n)return t;let l=na((...e)=>rO(t(...e)),n);return l._c=false,l},rP=(e,t,n)=>{let l=e._ctx;for(let n in e){if(rR(n))continue;let r=e[n];if(E(r))t[n]=rN(n,r,l);else if(null!=r){let e=rO(r);t[n]=()=>e;}}},rM=(e,t)=>{let n=rO(t);e.slots.default=()=>n;},rI=(e,t,n)=>{for(let l in t)(n||!rR(l))&&(e[l]=t[l]);},rF=rZ;function rL(e){return rV(e)}function rV(e,t){var n;let l,r;z().__VUE__=true;let{insert:i,remove:s,patchProp:o,createElement:a,createText:u,createComment:c,setText:f,setElementText:p,parentNode:d,nextSibling:h,setScopeId:m=_,insertStaticContent:y}=e,b=(e,t,n,l=null,r=null,i=null,s,o=null,a=!!t.dynamicChildren)=>{if(e===t)return;e&&!ir(e,t)&&(l=et(e),J(e,r,i,true),e=null),-2===t.patchFlag&&(a=false,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===v&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=true);let{type:u,ref:c,shapeFlag:f}=t;switch(u){case r0:C(e,t,n,l);break;case r1:x(e,t,n,l);break;case r2:null==e&&k(t,n,l,s);break;case rQ:j(e,t,n,l,r,i,s,o,a);break;default:1&f?T(e,t,n,l,r,i,s,o,a):6&f?D(e,t,n,l,r,i,s,o,a):64&f?u.process(e,t,n,l,r,i,s,o,a,el):128&f&&u.process(e,t,n,l,r,i,s,o,a,el);}null!=c&&r?nQ(c,e&&e.ref,i,t||e,!t):null==c&&e&&null!=e.ref&&nQ(e.ref,null,i,e,true);},C=(e,t,n,l)=>{if(null==e)i(t.el=u(t.children),n,l);else {let n=t.el=e.el;t.children!==e.children&&f(n,t.children);}},x=(e,t,n,l)=>{null==e?i(t.el=c(t.children||""),n,l):t.el=e.el;},k=(e,t,n,l)=>{[e.el,e.anchor]=y(e.children,t,n,l,e.el,e.anchor);},T=(e,t,n,l,r,i,s,o,a)=>{if("svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e)A(t,n,l,r,i,s,o,a);else {let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),P(e,t,r,i,s,o,a);}finally{n&&n._endPatch();}}},A=(e,t,n,l,r,s,u,c)=>{let f,d,{props:h,shapeFlag:g,transition:v,dirs:_}=e;if(f=e.el=a(e.type,s,h&&h.is,h),8&g?p(f,e.children):16&g&&N(e.children,f,null,l,r,rD(e,s),u,c),_&&nc(e,null,l,"created"),O(f,e,e.scopeId,u,l),h){for(let e in h)"value"===e||M(e)||o(f,e,null,h[e],s,l);"value"in h&&o(f,"value",null,h.value,s),(d=h.onVnodeBeforeMount)&&ib(d,l,e);}_&&nc(e,null,l,"beforeMount");let m=rB(r,v);m&&v.beforeEnter(f),i(f,t,n),((d=h&&h.onVnodeMounted)||m||_)&&rF(()=>{d&&ib(d,l,e),m&&v.enter(f),_&&nc(e,null,l,"mounted");},r);},O=(e,t,n,l,r)=>{if(n&&m(e,n),l)for(let t=0;t<l.length;t++)m(e,l[t]);if(r){let n=r.subTree;if(t===n||rK(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=r.vnode;O(e,t,t.scopeId,t.slotScopeIds,r.parent);}}},N=(e,t,n,l,r,i,s,o,a=0)=>{for(let u=a;u<e.length;u++)b(null,e[u]=o?i_(e[u]):iv(e[u]),t,n,l,r,i,s,o);},P=(e,t,n,l,r,i,s)=>{let a,u=t.el=e.el,{patchFlag:c,dynamicChildren:f,dirs:d}=t;c|=16&e.patchFlag;let h=e.props||g,v=t.props||g;if(n&&rU(n,false),(a=v.onVnodeBeforeUpdate)&&ib(a,n,t,e),d&&nc(t,e,n,"beforeUpdate"),n&&rU(n,true),f&&(!e.dynamicChildren||e.dynamicChildren.length!==f.length)&&(c=0,s=false,f=null),(h.innerHTML&&null==v.innerHTML||h.textContent&&null==v.textContent)&&p(u,""),f?I(e.dynamicChildren,f,u,n,l,rD(t,r),i):s||K(e,t,u,null,n,l,rD(t,r),i,false),c>0){if(16&c)F(u,h,v,n,r);else if(2&c&&h.class!==v.class&&o(u,"class",null,v.class,r),4&c&&o(u,"style",h.style,v.style,r),8&c){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let l=e[t],i=h[l],s=v[l];(s!==i||"value"===l)&&o(u,l,i,s,r,n);}}1&c&&e.children!==t.children&&p(u,t.children);}else s||null!=f||F(u,h,v,n,r);((a=v.onVnodeUpdated)||d)&&rF(()=>{a&&ib(a,n,t,e),d&&nc(t,e,n,"updated");},l);},I=(e,t,n,l,r,i,s)=>{for(let o=0;o<t.length;o++){let a=e[o],u=t[o],c=a.el||rW(a),f=c&&(a.type===rQ||!ir(a,u)||198&a.shapeFlag)?d(c):n;b(a,u,f,null,l,r,i,s,true);}},F=(e,t,n,l,r)=>{if(t!==n){if(t!==g)for(let i in t)M(i)||i in n||o(e,i,t[i],null,r,l);for(let i in n){if(M(i))continue;let s=n[i],a=t[i];s!==a&&"value"!==i&&o(e,i,a,s,r,l);}"value"in n&&o(e,"value",t.value,n.value,r);}},j=(e,t,n,l,r,s,o,a,c)=>{let f=t.el=e?e.el:u(""),p=t.anchor=e?e.anchor:u(""),{patchFlag:d,dynamicChildren:h,slotScopeIds:g}=t;g&&(a=a?a.concat(g):g),null==e?(i(f,n,l),i(p,n,l),N(t.children||[],n,p,r,s,o,a,c)):d>0&&64&d&&h&&e.dynamicChildren&&e.dynamicChildren.length===h.length?(I(e.dynamicChildren,h,n,r,s,o,a),(null!=t.key||r&&t===r.subTree)&&r$(e,t,true)):K(e,t,n,p,r,s,o,a,c);},D=(e,t,n,l,r,i,s,o,a)=>{t.slotScopeIds=o,null==e?512&t.shapeFlag?r.ctx.activate(t,n,l,s,a):U(t,n,l,r,i,s,a):B(e,t,a);},U=(e,t,n,l,r,i,s)=>{let o=e.component=ix(e,l,r);if(lc(e)&&(o.ctx.renderer=el),iO(o,false,s),o.asyncDep){if(r&&r.registerDep(o,H,s,i),!e.el){let l=o.subTree=iu(r1);x(null,l,t,n),e.placeholder=l.el;}}else H(o,e,t,n,r,i,s);},B=(e,t,n)=>{let l=t.component=e.component;if(function(e,t,n){let{props:l,children:r,component:i}=e,{props:s,children:o,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return  true;if(!n||!(a>=0))return (!!r||!!o)&&(!o||!o.$stable)||l!==s&&(l?!s||rb(l,s,u):!!s);if(1024&a)return  true;if(16&a)return l?rb(l,s,u):!!s;if(8&a){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(rS(s,l,n)&&!rg(u,n))return  true}}return  false}(e,t,n))if(l.asyncDep&&!l.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,W(l,t,n);return}else l.next=t,l.update();else t.el=e.el,t.placeholder=e.placeholder,l.vnode=t;},H=(e,t,n,l,i,s,o)=>{e.scope.on();let a=e.effect=new ev(()=>{if(e.isMounted){let t,{next:n,bu:l,u:r,parent:a,vnode:c}=e;{let t=function e(t){let n=t.subTree.component;if(n)if(n.asyncDep&&!n.asyncResolved)return n;else return e(n)}(e);if(t){n&&(n.el=c.el,W(e,n,o)),t.asyncDep.then(()=>{rF(()=>{e.isUnmounted||u();},i);});return}}let f=n;rU(e,false),n?(n.el=c.el,W(e,n,o)):n=c,l&&$(l),(t=n.props&&n.props.onVnodeBeforeUpdate)&&ib(t,a,n,c),rU(e,true);let p=rv(e),h=e.subTree;e.subTree=p,b(h,p,d(h.el),et(h),e,i,s),n.el=p.el,null===f&&rC(e,p.el),r&&rF(r,i),(t=n.props&&n.props.onVnodeUpdated)&&rF(()=>ib(t,a,n,c),i);}else {let o,{el:a,props:u}=t,{bm:c,m:f,parent:p,root:d,type:h}=e,g=lo(t);if(rU(e,false),c&&$(c),!g&&(o=u&&u.onVnodeBeforeMount)&&ib(o,p,t),rU(e,true),a&&r);else {d.ce&&d.ce._hasShadowRoot()&&d.ce._injectChildStyle(h,e.parent?e.parent.type:void 0);let r=e.subTree=rv(e);b(null,r,n,l,e,i,s),t.el=r.el;}if(f&&rF(f,i),!g&&(o=u&&u.onVnodeMounted)){let e=t;rF(()=>ib(o,p,e),i);}(256&t.shapeFlag||p&&lo(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&rF(e.a,i),e.isMounted=true,t=n=l=null;}});e.scope.off();let u=e.update=a.run.bind(a),c=e.job=a.runIfDirty.bind(a);c.i=e,c.id=e.uid,a.scheduler=()=>t4(c),rU(e,true),u();},W=(e,t,n)=>{t.component=e;let l=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,l){let{props:r,attrs:i,vnode:{patchFlag:s}}=e,o=tm(r),[a]=e.propsOptions,u=false;if((l||s>0)&&!(16&s)){if(8&s){let n=e.vnode.dynamicProps;for(let l=0;l<n.length;l++){let s=n[l];if(rg(e.emitsOptions,s))continue;let c=t[s];if(a)if(w(i,s))c!==i[s]&&(i[s]=c,u=true);else {let t=L(s);r[t]=rE(a,o,t,c,e,false);}else c!==i[s]&&(i[s]=c,u=true);}}}else {let l;for(let s in rk(e,t,r,i)&&(u=true),o)t&&(w(t,s)||(l=V(s))!==s&&w(t,l))||(a?n&&(void 0!==n[s]||void 0!==n[l])&&(r[s]=rE(a,o,s,void 0,e,true)):delete r[s]);if(i!==o)for(let e in i)t&&w(t,e)||(delete i[e],u=true);}u&&eU(e.attrs,"set","");}(e,t.props,l,n),((e,t,n)=>{let{vnode:l,slots:r}=e,i=true,s=g;if(32&l.shapeFlag){let e=t._;e?n&&1===e?i=false:rI(r,t,n):(i=!t.$stable,rP(t,r)),s=t;}else t&&(rM(e,t),s={default:1});if(i)for(let e in r)rR(e)||null!=s[e]||delete r[e];})(e,t.children,n),eR(),t9(e),eO();},K=(e,t,n,l,r,i,s,o,a=false)=>{let u=e&&e.children,c=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:h}=t;if(d>0){if(128&d)return void G(u,f,n,l,r,i,s,o,a);else if(256&d)return void q(u,f,n,l,r,i,s,o,a)}8&h?(16&c&&ee(u,r,i),f!==u&&p(n,f)):16&c?16&h?G(u,f,n,l,r,i,s,o,a):ee(u,r,i,true):(8&c&&p(n,""),16&h&&N(f,n,l,r,i,s,o,a));},q=(e,t,n,l,r,i,s,o,a)=>{let u;e=e||v,t=t||v;let c=e.length,f=t.length,p=Math.min(c,f);for(u=0;u<p;u++){let l=t[u]=a?i_(t[u]):iv(t[u]);b(e[u],l,n,null,r,i,s,o,a);}c>f?ee(e,r,i,true,false,p):N(t,n,l,r,i,s,o,a,p);},G=(e,t,n,l,r,i,s,o,a)=>{let u=0,c=t.length,f=e.length-1,p=c-1;for(;u<=f&&u<=p;){let l=e[u],c=t[u]=a?i_(t[u]):iv(t[u]);if(ir(l,c))b(l,c,n,null,r,i,s,o,a);else break;u++;}for(;u<=f&&u<=p;){let l=e[f],u=t[p]=a?i_(t[p]):iv(t[p]);if(ir(l,u))b(l,u,n,null,r,i,s,o,a);else break;f--,p--;}if(u>f){if(u<=p){let e=p+1,f=e<c?t[e].el:l;for(;u<=p;)b(null,t[u]=a?i_(t[u]):iv(t[u]),n,f,r,i,s,o,a),u++;}}else if(u>p)for(;u<=f;)J(e[u],r,i,true),u++;else {let d,h=u,g=u,_=new Map;for(u=g;u<=p;u++){let e=t[u]=a?i_(t[u]):iv(t[u]);null!=e.key&&_.set(e.key,u);}let m=0,y=p-g+1,S=false,C=0,x=Array(y);for(u=0;u<y;u++)x[u]=0;for(u=h;u<=f;u++){let l,c=e[u];if(m>=y){J(c,r,i,true);continue}if(null!=c.key)l=_.get(c.key);else for(d=g;d<=p;d++)if(0===x[d-g]&&ir(c,t[d])){l=d;break} void 0===l?J(c,r,i,true):(x[l-g]=u+1,l>=C?C=l:S=true,b(c,t[l],n,null,r,i,s,o,a),m++);}let w=S?function(e){let t,n,l,r,i,s=e.slice(),o=[0],a=e.length;for(t=0;t<a;t++){let a=e[t];if(0!==a){if(e[n=o[o.length-1]]<a){s[t]=n,o.push(t);continue}for(l=0,r=o.length-1;l<r;)e[o[i=l+r>>1]]<a?l=i+1:r=i;a<e[o[l]]&&(l>0&&(s[t]=o[l-1]),o[l]=t);}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=s[r];return o}(x):v;for(d=w.length-1,u=y-1;u>=0;u--){let e=g+u,f=t[e],p=t[e+1],h=e+1<c?p.el||rW(p):l;0===x[u]?b(null,f,n,h,r,i,s,o,a):S&&(d<0||u!==w[d]?X(f,n,h,2):d--);}}},X=(e,t,n,l,r=null)=>{let{el:o,type:a,transition:u,children:c,shapeFlag:f}=e;if(6&f)return void X(e.component.subTree,t,n,l);if(128&f)return void e.suspense.move(t,n,l);if(64&f)return void a.move(e,t,n,el);if(a===rQ){i(o,t,n);for(let e=0;e<c.length;e++)X(c[e],t,n,l);i(e.anchor,t,n);return}if(a===r2)return void(({el:e,anchor:t},n,l)=>{let r;for(;e&&e!==t;)r=h(e),i(e,n,l),e=r;i(t,n,l);})(e,t,n);if(2!==l&&1&f&&u)if(0===l)u.persisted&&!o[nM]?i(o,t,n):(u.beforeEnter(o),i(o,t,n),rF(()=>u.enter(o),r));else {let{leave:l,delayLeave:r,afterLeave:a}=u,c=()=>{e.ctx.isUnmounted?s(o):i(o,t,n);},f=()=>{let e=o._isLeaving||!!o[nM];o._isLeaving&&o[nM](true),u.persisted&&!e?c():l(o,()=>{c(),a&&a();});};r?r(o,c,f):f();}else i(o,t,n);},J=(e,t,n,l=false,r=false)=>{let i,{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:f,patchFlag:p,dirs:d,cacheIndex:h,memo:g}=e;if((-2===p||c&&c.hasOnce)&&(r=false),null!=a&&(eR(),nQ(a,null,n,e,true),eO()),null==h||e.ctx&&e.ctx!==t||(t.renderCache[h]=void 0),256&f)return void t.ctx.deactivate(e);let v=1&f&&d,_=!lo(e);if(_&&(i=o&&o.onVnodeBeforeUnmount)&&ib(i,t,e),6&f)Q(e.component,n,l);else {if(128&f)return void e.suspense.unmount(n,l);v&&nc(e,null,t,"beforeUnmount"),64&f?e.type.remove(e,t,n,el,l):c&&!c.hasOnce&&(s!==rQ||p>0&&64&p)?ee(c,t,n,false,true):(s===rQ&&384&p||!r&&16&f)&&ee(u,t,n),l&&Z(e);}let m=null!=g&&null==h;(_&&(i=o&&o.onVnodeUnmounted)||v||m)&&rF(()=>{i&&ib(i,t,e),v&&nc(e,null,t,"unmounted"),m&&(e.el=null);},n);},Z=e=>{let{type:t,el:n,anchor:l,transition:r}=e,i=t===rQ;if(i&&!r)return void Y(n,l);if(t===r2){(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t);})(e),r&&!r.persisted&&r.afterLeave&&r.afterLeave();return}let o=i?nz(e):e,a=()=>{i?d(n)&&Y(n,l):s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave();};if(o&&1&o.shapeFlag&&r&&!r.persisted){let{leave:e,delayLeave:t}=r,n=o.el,l=()=>e(n,a);t?t(n,a,l):l();}else a();},Y=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t);},Q=(e,t,n)=>{let{bum:l,scope:r,job:i,subTree:s,um:o,m:a,a:u}=e;rH(a),rH(u),l&&$(l),r.stop(),i?(i.flags|=8,J(s,e,t,n)):e.vnode.el&&s&&(s.transition=e.vnode.transition,J(s,e,t,n)),o&&rF(o,t),rF(()=>{e.isUnmounted=true;},t);},ee=(e,t,n,l=false,r=false,i=0)=>{for(let s=i;s<e.length;s++)J(e[s],t,n,l,r);},et=e=>{if(6&e.shapeFlag)return et(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[nw];return n?h(n):t},en=(e,t,n)=>{!function(e,t){if(ne)return e();let n=void 0===t?void 0:new Set(tQ);e(),ne=true;try{t9(void 0,t),t7(void 0,n,t);}finally{ne=false;}}(()=>{null==e?t._vnode&&J(t._vnode,null,null,true):b(t._vnode||null,e,t,null,null,null,n),t._vnode=e;},e&&t._vnode?void 0:e&&e.component?e.component.uid:iC);},el={p:b,um:J,m:X,r:Z,mt:U,mc:N,pc:K,pbc:I,n:et,o:e};return {render:en,hydrate:l,createApp:(n=l,function(e,t=null){E(e)||(e=S({},e)),null==t||R(t)||(t=null);let l=ra(),r=new WeakSet,i=[],s=false,o=l.app={_uid:ru++,_component:e,_props:t,_container:null,_context:l,_instance:null,version:iW,get config(){return l.config},set config(e){},use:(e,...t)=>(r.has(e)||(e&&E(e.install)?(r.add(e),e.install(o,...t)):E(e)&&(r.add(e),e(o,...t))),o),mixin:e=>(l.mixins.includes(e)||l.mixins.push(e),o),component:(e,t)=>t?(l.components[e]=t,o):l.components[e],directive:(e,t)=>t?(l.directives[e]=t,o):l.directives[e],mount(r,i,a){if(!s){let u=o._ceVNode||iu(e,t);return u.appContext=l,true===a?a="svg":false===a&&(a=void 0),i&&n?n(u,r):en(u,r,a),s=true,o._container=r,r.__vue_app__=o,ij(u.component)}},onUnmount(e){i.push(e);},unmount(){s&&(tX(i,o._instance,16),en(null,o._container),delete o._container.__vue_app__);},provide:(e,t)=>(l.provides[e]=t,o),runWithContext(e){let t=rc;rc=o;try{return e()}finally{rc=t;}}};return o})}}function rD({type:e,props:t},n){return "svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rU({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5);}function rB(e,t){return (!e||e&&!e.pendingBranch)&&t&&!t.persisted}function r$(e,t,n=false){let l=e.children,r=t.children;if(k(l)&&k(r))for(let e=0;e<l.length;e++){let t=l[e],i=r[e];1&i.shapeFlag&&!i.dynamicChildren&&((i.patchFlag<=0||32===i.patchFlag)&&((i=r[e]=i_(r[e])).el=t.el),n||-2===i.patchFlag||r$(t,i)),i.type===r0&&(-1===i.patchFlag&&(i=r[e]=i_(i)),i.el=t.el),i.type!==r1||i.el||(i.el=t.el);}}function rH(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8;}function rW(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?rW(t.subTree):null}let rK=e=>e.__isSuspense;function rZ(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):t5(e);}let rQ=Symbol.for("v-fgt"),r0=Symbol.for("v-txt"),r1=Symbol.for("v-cmt"),r2=Symbol.for("v-stc"),r6=[],r8=null;function r4(e=false){r6.push(r8=e?null:[]);}function r3(){r6.pop(),r8=r6[r6.length-1]||null;}let r5=1;function r9(e,t=false){r5+=e,e<0&&r8&&t&&(r8.hasOnce=true);}function r7(e){return e.dynamicChildren=r5>0?r8||v:null,r3(),r5>0&&r8&&r8.push(e),e}function ie(e,t,n,l,r,i){return r7(ia(e,t,n,l,r,i,true))}function it(e,t,n,l,r){return r7(iu(e,t,n,l,r,true))}function il(e){return !!e&&true===e.__v_isVNode}function ir(e,t){return e.type===t.type&&e.key===t.key}let is=({key:e})=>null!=e?e:null,io=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?T(e)||tC(e)||E(e)?{i:nn,r:e,k:t,f:!!n}:e:null);function ia(e,t=null,n=null,l=0,r=null,i=+(e!==rQ),s=false,o=false){let a={__v_isVNode:true,__v_skip:true,type:e,props:t,key:t&&is(t),ref:t&&io(t),scopeId:nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return o?(im(a,n),128&i&&e.normalize(a)):n&&(a.shapeFlag|=T(n)?8:16),r5>0&&!s&&r8&&(a.patchFlag>0||6&i)&&32!==a.patchFlag&&r8.push(a),a}let iu=function(e,t=null,n=null,l=0,r=null,i=false){var s;if(e&&e!==lP||(e=r1),il(e)){let l=ip(e,t,true);return n&&im(l,n),r5>0&&!i&&r8&&(6&l.shapeFlag?r8[r8.indexOf(e)]=l:r8.push(l)),l.patchFlag=-2,l}if(E(s=e)&&"__vccOpts"in s&&(e=e.__vccOpts),t){let{class:e,style:n}=t=ic(t);e&&!T(e)&&(t.class=Y(e)),R(n)&&(t_(n)&&!k(n)&&(n=S({},n)),t.style=G(n));}let o=T(e)?1:rK(e)?128:e.__isTeleport?64:R(e)?4:2*!!E(e);return ia(e,t,n,l,r,o,i,true)};function ic(e){return e?t_(e)||rw(e)?S({},e):e:null}function ip(e,t,n=false,l=false){let{props:r,ref:i,patchFlag:s,children:o,transition:a}=e,u=t?iy(r||{},t):r,c={__v_isVNode:true,__v_skip:true,type:e.type,props:u,key:u&&is(u),ref:t&&t.ref?n&&i?k(i)?i.concat(io(t)):[i,io(t)]:io(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rQ?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ip(e.ssContent),ssFallback:e.ssFallback&&ip(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return a&&l&&nW(c,a.clone(c)),c}function id(e=" ",t=0){return iu(r0,null,e,t)}function ih(e,t){let n=iu(r2,null,e);return n.staticCount=t,n}function ig(e="",t=false){return t?(r4(),it(r1,null,e)):iu(r1,null,e)}function iv(e){return null==e||"boolean"==typeof e?iu(r1):k(e)?iu(rQ,null,e.slice()):il(e)?i_(e):iu(r0,null,String(e))}function i_(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ip(e)}function im(e,t){let n=0,{shapeFlag:l}=e;if(null==t)t=null;else if(k(t))n=16;else if("object"==typeof t)if(65&l){let n=t.default;n&&(n._c&&(n._d=false),im(e,n()),n._c&&(n._d=true));return}else {n=32;let l=t._;l||rw(t)?3===l&&nn&&(1===nn.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=nn;}else if(E(t)){if(65&l)return void im(e,{default:t});t={default:t,_ctx:nn},n=32;}else t=String(t),64&l?(n=16,t=[id(t)]):n=8;e.children=t,e.shapeFlag|=n;}function iy(...e){let t={};for(let n=0;n<e.length;n++){let l=e[n];for(let e in l)if("class"===e)t.class!==l.class&&(t.class=Y([t.class,l.class]));else if("style"===e)t.style=G([t.style,l.style]);else if(y(e)){let n=t[e],r=l[e];r&&n!==r&&!(k(n)&&n.includes(r))?t[e]=n?[].concat(n,r):r:null!=r||null!=n||b(e)||(t[e]=r);}else ""!==e&&(t[e]=l[e]);}return t}function ib(e,t,n,l=null){tX(e,t,7,[n,l]);}let iS=ra(),iC=0;function ix(e,t,n){let l=e.type,r=(t?t.appContext:e.appContext)||iS,i={uid:iC++,vnode:e,type:l,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ef(true),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:function e(t,n,l=false){let r=l?rT:n.propsCache,i=r.get(t);if(i)return i;let s=t.props,o={},a=[],u=false;if(!E(t)){let r=t=>{u=true;let[l,r]=e(t,n,true);S(o,l),r&&a.push(...r);};!l&&n.mixins.length&&n.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r);}if(!s&&!u)return R(t)&&r.set(t,v),v;if(k(s))for(let e=0;e<s.length;e++){let t=L(s[e]);rA(t)&&(o[t]=g);}else if(s)for(let e in s){let t=L(e);if(rA(t)){let n=s[e],l=o[t]=k(n)||E(n)?{type:n}:S({},n),r=l.type,i=false,u=true;if(k(r))for(let e=0;e<r.length;++e){let t=r[e],n=E(t)&&t.name;if("Boolean"===n){i=true;break}"String"===n&&(u=false);}else i=E(r)&&"Boolean"===r.name;l[0]=i,l[1]=u,(i||w(l,"default"))&&a.push(t);}}let c=[o,a];return R(t)&&r.set(t,c),c}(l,r),emitsOptions:function e(t,n,l=false){let r=l?rh:n.emitsCache,i=r.get(t);if(void 0!==i)return i;let s=t.emits,o={},a=false;if(!E(t)){let r=t=>{let l=e(t,n,true);l&&(a=true,S(o,l));};!l&&n.mixins.length&&n.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r);}return s||a?(k(s)?s.forEach(e=>o[e]=null):S(o,s),R(t)&&r.set(t,o),o):(R(t)&&r.set(t,null),null)}(l,r),emit:null,emitted:null,propsDefaults:g,inheritAttrs:l.inheritAttrs,ctx:g,data:g,props:g,attrs:g,slots:g,refs:g,setupState:g,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:false,isMounted:false,isUnmounted:false,isDeactivated:false,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rd.bind(null,i),e.ce&&e.ce(i),i}let iw=null,ik=()=>iw||nn;{let e=z(),t=(t,n)=>{let l;return (l=e[t])||(l=e[t]=[]),l.push(n),e=>{l.length>1?l.forEach(t=>t(e)):l[0](e);}};o=t("__VUE_INSTANCE_SETTERS__",e=>iw=e),a=t("__VUE_SSR_SETTERS__",e=>iR=e);}let iE=e=>{let t=iw;return o(e),e.scope.on(),()=>{e.scope.off(),o(t);}},iT=()=>{iw&&iw.scope.off(),o(null);};function iA(e){return 4&e.vnode.shapeFlag}let iR=false;function iO(e,t=false,n=false){t&&a(t);let{props:l,children:r}=e.vnode,i=iA(e);!function(e,t,n,l=false){let r={},i=Object.create(rx);for(let n in e.propsDefaults=Object.create(null),rk(e,t,r,i),e.propsOptions[0])n in r||(r[n]=void 0);n?e.props=l?r:tc(r):e.type.props?e.props=r:e.props=i,e.attrs=i;}(e,l,i,t);var s=n||t;let o=e.slots=Object.create(rx);if(32&e.vnode.shapeFlag){let e=r._;e?(rI(o,r,s),s&&H$1(o,"_",e,true)):rP(r,o);}else r&&rM(e,r);let u=i?function(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,lK);let{setup:l}=n;if(l){eR();let n=e.setupContext=l.length>1?iL(e):null,r=iE(e),i=tG(l,e,0,[e.props,n]),s=O(i);if(eO(),r(),(s||e.sp)&&!lo(e)&&nX(e),s){if(i.then(iT,iT),t)return i.then(n=>{a(true);try{iN(e,n,t);}finally{a(false);}}).catch(t=>{tJ(t,e,0);});e.asyncDep=i;}else iN(e,i);}else iI(e);}(e,t):void 0;return t&&a(false),u}function iN(e,t,n){E(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:R(t)&&(e.setupState=tN(t)),iI(e);}function iI(e,t,n){let l=e.type;if(!e.render){e.render=l.render||_;}{let t=iE(e);eR();try{!function(e){let t=re(e),n=e.proxy,l=e.ctx;l9=!1,t.beforeCreate&&l7(t.beforeCreate,e,"bc");let{data:r,computed:i,methods:s,watch:o,provide:a,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:h,activated:g,deactivated:v,beforeUnmount:m,unmounted:y,render:b,renderTracked:S,renderTriggered:C,errorCaptured:x,serverPrefetch:w,expose:A,inheritAttrs:O,components:N,directives:P}=t;if(u&&function(e,t){for(let n in k(e)&&(e=rr(e)),e){let l,r=e[n];tC(l=R(r)?"default"in r?np(r.from||n,r.default,!0):np(r.from||n):np(r))?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e}):t[n]=l;}}(u,l),s)for(let e in s){let t=s[e];E(t)&&(l[e]=t.bind(n));}if(r){let t=r.call(n,n);R(t)&&(e.data=tu(t));}if(l9=!0,i)for(let e in i){let t=i[e],r=E(t)?t.bind(n,n):E(t.get)?t.get.bind(n,n):_,s=iD({get:r,set:!E(t)&&E(t.set)?t.set.bind(n):_});Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e});}if(o)for(let e in o)!function e(t,n,l,r){let i=r.includes(".")?nC(l,r):()=>l[r];if(T(t)){let e=n[t];E(e)&&ny(i,e);}else if(E(t))ny(i,t.bind(l));else if(R(t))if(k(t))t.forEach(t=>e(t,n,l,r));else {let e=E(t.handler)?t.handler.bind(l):n[t.handler];E(e)&&ny(i,e,t);}}(o[e],l,n,e);if(a){let e=E(a)?a.call(n):a;Reflect.ownKeys(e).forEach(t=>{nf(t,e[t]);});}function M(e,t){k(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n));}if(c&&l7(c,e,"c"),M(lb,f),M(lS,p),M(lC,d),M(lx,h),M(ld,g),M(lh,v),M(lR,x),M(lA,S),M(lT,C),M(lw,m),M(lk,y),M(lE,w),k(A))if(A.length){let t=e.exposed||(e.exposed={});A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0});});}else e.exposed||(e.exposed={});b&&e.render===_&&(e.render=b),null!=O&&(e.inheritAttrs=O),N&&(e.components=N),P&&(e.directives=P),w&&nX(e);}(e);}finally{eO(),t();}}}let iF={get:(e,t)=>(eD(e,"get",""),e[t])};function iL(e){return {attrs:new Proxy(e.attrs,iF),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{};}}}function ij(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tN(ty(e.exposed)),{get:(t,n)=>n in t?t[n]:n in lH?lH[n](e):void 0,has:(e,t)=>t in e||t in lH})):e.proxy}function iV(e,t=true){return E(e)?e.displayName||e.name:e.name||t&&e.__name}let iD=(e,t)=>(function(e,t=false){let n,l;return E(e)?n=e:(n=e.get,l=e.set),new tV(n,l,t)})(e,iR);function iU(e,t,n){try{r9(-1);let l=arguments.length;if(2!==l)return l>3?n=Array.prototype.slice.call(arguments,2):3===l&&il(n)&&(n=[n]),iu(e,t,n);if(!R(t)||k(t))return iu(e,null,t);if(il(t))return iu(e,null,[t]);return iu(e,t)}finally{r9(1);}}let iW="3.5.44",iQ="u">typeof window&&window.trustedTypes;if(iQ)try{d=iQ.createPolicy("vue",{createHTML:e=>e});}catch(e){}let i0=d?e=>d.createHTML(e):e=>e,i1="u">typeof document?document:null,i2=i1&&i1.createElement("template"),i6={insert:(e,t,n)=>{t.insertBefore(e,n||null);},remove:e=>{let t=e.parentNode;t&&t.removeChild(e);},createElement:(e,t,n,l)=>{let r="svg"===t?i1.createElementNS("http://www.w3.org/2000/svg",e):"mathml"===t?i1.createElementNS("http://www.w3.org/1998/Math/MathML",e):n?i1.createElement(e,{is:n}):i1.createElement(e);return "select"===e&&l&&null!=l.multiple&&r.setAttribute("multiple",l.multiple),r},createText:e=>i1.createTextNode(e),createComment:e=>i1.createComment(e),setText:(e,t)=>{e.nodeValue=t;},setElementText:(e,t)=>{e.textContent=t;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>i1.querySelector(e),setScopeId(e,t){e.setAttribute(t,"");},insertStaticContent(e,t,n,l,r,i){let s=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(true),n),r!==i&&(r=r.nextSibling););else {i2.innerHTML=i0("svg"===l?`<svg>${e}</svg>`:"mathml"===l?`<math>${e}</math>`:e);let r=i2.content;if("svg"===l||"mathml"===l){let e=r.firstChild;for(;e.firstChild;)r.appendChild(e.firstChild);r.removeChild(e);}t.insertBefore(r,n);}return [s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},i8="transition",i4="animation",i3=Symbol("_vtc"),i5={name:String,type:String,css:{type:Boolean,default:true},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},i9=S({},nj,i5),i7=((e=(e,{slots:t})=>iU(nD,sn(e),t)).displayName="Transition",e.props=i9,e),se=(e,t=[])=>{k(e)?e.forEach(e=>e(...t)):e&&e(...t);},st=e=>!!e&&(k(e)?e.some(e=>e.length>1):e.length>1);function sn(e){let t={};for(let n in e)n in i5||(t[n]=e[n]);if(false===e.css)return t;let{name:n="v",type:l,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=s,appearToClass:c=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;{if(R(e))return [function(e){return K(e)}(e.enter),function(e){return K(e)}(e.leave)];let t=function(e){return K(e)}(e);return [t,t]}}(r),g=h&&h[0],v=h&&h[1],{onBeforeEnter:_,onEnter:m,onEnterCancelled:y,onLeave:b,onLeaveCancelled:C,onBeforeAppear:x=_,onAppear:w=m,onAppearCancelled:k=y}=t,E=(e,t,n,l)=>{e._enterCancelled=l,sr(e,t?c:o),sr(e,t?u:s),n&&n();},T=(e,t)=>{e._isLeaving=false,sr(e,f),sr(e,d),sr(e,p),t&&t();},A=e=>(t,n)=>{let r=e?w:m,s=()=>E(t,e,n);se(r,[t,s]),si(()=>{sr(t,e?a:i),sl(t,e?c:o),st(r)||so(t,l,g,s);});};return S(t,{onBeforeEnter(e){se(_,[e]),sl(e,i),sl(e,s);},onBeforeAppear(e){se(x,[e]),sl(e,a),sl(e,u);},onEnter:A(false),onAppear:A(true),onLeave(e,t){e._isLeaving=true;let n=()=>T(e,t);sl(e,f),e._enterCancelled?(sl(e,p),sf(e)):(sf(e),sl(e,p)),si(()=>{e._isLeaving&&(sr(e,f),sl(e,d),st(b)||so(e,l,v,n));}),se(b,[e,n]);},onEnterCancelled(e){E(e,false,void 0,true),se(y,[e]);},onAppearCancelled(e){E(e,true,void 0,true),se(k,[e]);},onLeaveCancelled(e){T(e),se(C,[e]);}})}function sl(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[i3]||(e[i3]=new Set)).add(t);}function sr(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[i3];n&&(n.delete(t),n.size||(e[i3]=void 0));}function si(e){requestAnimationFrame(()=>{requestAnimationFrame(e);});}let ss=0;function so(e,t,n,l){let r=e._endId=++ss,i=()=>{r===e._endId&&l();};if(null!=n)return setTimeout(i,n);let{type:s,timeout:o,propCount:a}=sa(e,t);if(!s)return l();let u=s+"end",c=0,f=()=>{e.removeEventListener(u,p),i();},p=t=>{t.target===e&&++c>=a&&f();};setTimeout(()=>{c<a&&f();},o+1),e.addEventListener(u,p);}function sa(e,t){let n=window.getComputedStyle(e),l=e=>(n[e]||"").split(", "),r=l(`${i8}Delay`),i=l(`${i8}Duration`),s=su(r,i),o=l(`${i4}Delay`),a=l(`${i4}Duration`),u=su(o,a),c=null,f=0,p=0;t===i8?s>0&&(c=i8,f=s,p=i.length):t===i4?u>0&&(c=i4,f=u,p=a.length):p=(c=(f=Math.max(s,u))>0?s>u?i8:i4:null)?c===i8?i.length:a.length:0;let d=c===i8&&/\b(?:transform|all)(?:,|$)/.test(l(`${i8}Property`).toString());return {type:c,timeout:f,propCount:p,hasTransform:d}}function su(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>sc(t)+sc(e[n])))}function sc(e){return "auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function sf(e){return (e?e.ownerDocument:document).body.offsetHeight}let sp=Symbol("_vod"),sd=Symbol("_vsh");let sv=Symbol("");let sy=/(?:^|;)\s*display\s*:/,sb=/\s*!important$/;function sS(e,t,n){if(k(n))n.forEach(n=>sS(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))sb.test(n)?e.setProperty(t,n.replace(sb,""),"important"):e.setProperty(t,n);else {let l=function(e,t){let n=sx[t];if(n)return n;let l=L(t);if("filter"!==l&&l in e)return sx[t]=l;l=D(l);for(let n=0;n<sC.length;n++){let r=sC[n]+l;if(r in e)return sx[t]=r}return t}(e,t);sb.test(n)?e.setProperty(V(l),n.replace(sb,""),"important"):e[l]=n;}}let sC=["Webkit","Moz","ms"],sx={},sw="http://www.w3.org/1999/xlink";function sk(e,t,n,l,r,i=ee(t)){if(l&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(sw,t.slice(6,t.length)):e.setAttributeNS(sw,t,n);else null==n||i&&!(n||""===n)?e.removeAttribute(t):e.setAttribute(t,i?"":A(n)?String(n):n);}function sE(e,t,n,l,r){if("innerHTML"===t||"textContent"===t){null!=n&&(e[t]="innerHTML"===t?i0(n):n);return}let i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){let l="OPTION"===i?e.getAttribute("value")||"":e.value,r=null==n?"checkbox"===e.type?"on":"":String(n);l===r&&"_value"in e||(e.value=r),null==n&&e.removeAttribute(t),e._value=n;return}let s=false;if(""===n||null==n){let l=typeof e[t];if("boolean"===l){var o;n=!!(o=n)||""===o;}else null==n&&"string"===l?(n="",s=true):"number"===l&&(n=0,s=true);}try{e[t]=n;}catch(e){}s&&e.removeAttribute(r||t);}function sT(e,t,n,l){e.addEventListener(t,n,l);}let sA=Symbol("_vei"),sR=/(Once|Passive|Capture)$/,sO=/^on:?(?:Once|Passive|Capture)$/,sN=0,sP=Promise.resolve(),sM=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&123>e.charCodeAt(2),sI=(e,t,n,l,r,i)=>{let s="svg"===r;if("class"===t){var o;let t;o=l,(t=e[i3])&&(o=(o?[o,...t]:[...t]).join(" ")),null==o?e.removeAttribute("class"):s?e.setAttribute("class",o):e.className=o;}else "style"===t?function(e,t,n){let l=e.style,r=T(n),i=false;if(n&&!r){if(t)if(T(t))for(let e of t.split(";")){let t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&sS(l,t,"");}else for(let e in t)null==n[e]&&sS(l,e,"");for(let r in n){var s,o,a,u;"display"===r&&(i=true);let c=n[r];null!=c?(s=e,o=r,a=!T(t)&&t?t[r]:void 0,u=c,"TEXTAREA"===s.tagName&&("width"===o||"height"===o)&&T(u)&&a===u||sS(l,r,c)):sS(l,r,"");}}else if(r){if(t!==n){let e=l[sv];e&&(n+=";"+e),l.cssText=n,i=sy.test(n);}}else t&&e.removeAttribute("style");sp in e&&(r&&t===n||(e[sp]=i?l.display:""),e[sd]&&(l.display="none"));}(e,n,l):y(t)?b(t)||function(e,t,n,l=null){let r=e[sA]||(e[sA]={}),i=r[t];if(n&&i)i.value=n;else {let[a,u]=function(e){let t,n;for(;(n=e.match(sR))&&!sO.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=true;return [":"===e[2]?e.slice(3):V(e.slice(2)),t]}(t);if(n){var s,o;let i;sT(e,a,r[t]=(s=n,o=l,(i=e=>{if(e._vts){if(e._vts<=i.attached)return}else e._vts=Date.now();let t=i.value;if(k(t)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=true;};let l=t.slice(),r=[e];for(let t=0;t<l.length&&!e._stopped;t++){let e=l[t];e&&tX(e,o,5,r);}}else tX(t,o,5,[e]);}).value=s,i.attached=sN||(sP.then(()=>sN=0),sN=Date.now()),i),u);}else i&&(e.removeEventListener(a,i,u),r[t]=void 0);}}(e,t,l,i):("."===t[0]?(t=t.slice(1),0):"^"===t[0]?(t=t.slice(1),1):!function(e,t,n,l){if(l)return !!("innerHTML"===t||"textContent"===t||t in e&&sM(t)&&E(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t||"sandbox"===t&&"IFRAME"===e.tagName||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return  false;if("width"===t||"height"===t){let t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return  false}return !(sM(t)&&T(n))&&t in e}(e,t,l,s))?e._isVueCE&&(function(e,t){let n=e._def.props;if(!n)return  false;let l=L(t);return Array.isArray(n)?n.some(e=>L(e)===l):Object.keys(n).some(e=>L(e)===l)}(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!T(l)))?sE(e,L(t),l,i,t):("true-value"===t?e._trueValue=l:"false-value"===t&&(e._falseValue=l),sk(e,t,l,s)):(sE(e,t,l),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||sk(e,t,l,s,i,"value"!==t));};let sH=new WeakMap,sW=new WeakMap,sK=Symbol("_moveCb"),sz=Symbol("_enterCb"),sq=new WeakMap;(t={name:"TransitionGroup",props:S({},i9,{tag:String,moveClass:String}),setup(e,{slots:t}){let n,l,r,i,s=ik(),o=nF(),a=()=>(void 0===i&&(i=n.length>0&&function(e,t,n){let l=e.cloneNode(),r=e[i3];r&&r.forEach(e=>{e.split(/\s+/).forEach(e=>e&&l.classList.remove(e));}),n.split(/\s+/).forEach(e=>e&&l.classList.add(e)),l.style.display="none";let i=1===t.nodeType?t:t.parentNode;i.appendChild(l);let{hasTransform:s}=sa(l);return i.removeChild(l),s}(n[0].el,s.vnode.el,sJ(e))),i);return lx(()=>{var t,l;let i;if(sq.delete(s),!a()){n=[],r=void 0;return}let o=sJ(e);n.forEach(sX);let u=r&&(t=r,l=s.vnode.el,(i=t.find(e=>e.willMove()&&e.item.contains(l)))&&sY(i.item,i));r=void 0,n.forEach(e=>{var t,n;return t=e,n=u,void sW.set(t,sY(t.el,n))});let c=n.filter(sZ);sf(s.vnode.el),c.forEach(e=>{let t=e.el,n=t.style;sl(t,o),n.transform=n.webkitTransform=n.transitionDuration="";let l=t[sK]=e=>{(!e||e.target===t)&&(!e||e.propertyName.endsWith("transform"))&&(t.removeEventListener("transitionend",l),t[sK]=null,sr(t,o));};t.addEventListener("transitionend",l);}),n=[];}),()=>{let u=tm(e),c=sn(u),f=u.tag||rQ;if(n=[],i=void 0,l)for(let e=0;e<l.length;e++){let t=l[e];t.el&&t.el instanceof Element&&!t.el[sd]&&(n.push(t),nW(t,nB(t,c,o,s)),sH.set(t,sY(t.el)));}l=t.default?nK(t.default()):[];for(let e=0;e<l.length;e++){let t=l[e];null!=t.key&&nW(t,nB(t,c,o,s));}return n.length&&(r=function(e){let t;for(let n=e.parent;n;n=n.parent){let l=sq.get(n);if(l){let r=function(e,t){let n=1===e.nodeType?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&1===t.nodeType)return t}(n.vnode.el,e.vnode.el);r&&(t||(t=[])).push(S(sY(r),{item:r,willMove:l}));}}return t}(s),sq.set(s,a)),iu(f,null,l)}}},delete t.props.mode,t);function sX(e){let t=e.el;t[sK]&&t[sK](),t[sz]&&t[sz]();}function sJ(e){return e.moveClass||`${e.name||"v"}-move`}function sZ(e){let t=sH.get(e),n=sW.get(e),l=t.left-n.left,r=t.top-n.top;if(l||r){let t=e.el,n=t.style,i=t.getBoundingClientRect(),s=1,o=1;return t.offsetWidth&&(s=i.width/t.offsetWidth),t.offsetHeight&&(o=i.height/t.offsetHeight),Number.isFinite(s)&&0!==s||(s=1),Number.isFinite(o)&&0!==o||(o=1),.01>Math.abs(s-1)&&(s=1),.01>Math.abs(o-1)&&(o=1),n.transform=n.webkitTransform=`translate(${l/s}px,${r/o}px)`,n.transitionDuration="0s",e}}function sY(e,t){let n=e.getBoundingClientRect();return {left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}let sQ=e=>{let t=e.props["onUpdate:modelValue"]||false;return k(t)?e=>$(t,e):t};function s0(e){e.target.composing=true;}function s1(e){let t=e.target;t.composing&&(t.composing=false,t.dispatchEvent(new Event("input")));}let s2=Symbol("_assign"),s6=Symbol("_initialValue");function s8(e,t,n){return t&&(e=e.trim()),n&&(e=W$1(e)),e}let s4={created(e,{modifiers:{lazy:t,trim:n,number:l}},r){e.parentNode&&("text"===e.type?e[s6]=e.defaultValue.replace(/[\r\n]/g,""):"textarea"===e.type&&(e[s6]=e.defaultValue.replace(/\r\n?/g,`
`))),e[s2]=sQ(r);let i=l||r.props&&"number"===r.props.type;sT(e,t?"change":"input",t=>{t.target.composing||e[s2](s8(e.value,n,i));}),(n||i)&&sT(e,"change",()=>{e.value=s8(e.value,n,i);}),t||(sT(e,"compositionstart",s0),sT(e,"compositionend",s1),sT(e,"change",s1));},mounted(e,{value:t,modifiers:{trim:n,number:l}}){let r=e[s6];delete e[s6],void 0!==r&&("text"===e.type||"textarea"===e.type)&&e.value!==r?e[s2](s8(e.value,n,l)):e.value=null==t?"":t;},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:l,trim:r,number:i}},s){if(e[s2]=sQ(s),e.composing)return;let o=(i||"number"===e.type)&&!/^0\d/.test(e.value)?W$1(e.value):e.value,a=null==t?"":t;if(o===a)return;let u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&"range"!==e.type&&(l&&t===n||r&&e.value.trim()===a)||(e.value=a);}},s3={deep:true,created(e,t,n){e[s2]=sQ(n),sT(e,"change",()=>{let t=e._modelValue,n=ot(e),l=e.checked,r=e[s2];if(k(t)){let e=es(t,n),i=-1!==e;if(l&&!i)r(t.concat(n));else if(!l&&i){let n=[...t];n.splice(e,1),r(n);}}else {let i;if("[object Set]"===(i=t,N.call(i))){let e=new Set(t);l?e.add(n):e.delete(n),r(e);}else r(on(e,l));}});},mounted:s5,beforeUpdate(e,t,n){e[s2]=sQ(n),s5(e,t,n);}};function s5(e,{value:t,oldValue:n},l){let r;if(e._modelValue=t,k(t))r=es(t,l.props.value)>-1;else {let i;if("[object Set]"===(i=t,N.call(i)))r=t.has(l.props.value);else {if(t===n)return;r=ei(t,on(e,true));}}e.checked!==r&&(e.checked=r);}function ot(e){return "_value"in e?e._value:e.value}function on(e,t){let n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}let os=["ctrl","shift","alt","meta"],oo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>os.some(n=>e[`${n}Key`]&&!t.includes(n))},oa=(e,t)=>{if(!e)return e;let n=e._withMods||(e._withMods={}),l=t.join(".");return n[l]||(n[l]=(n,...l)=>{for(let e=0;e<t.length;e++){let l=oo[t[e]];if(l&&l(n,t))return}return e(n,...l)})},ou={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oc=(e,t)=>{let n=e._withKeys||(e._withKeys={}),l=t.join(".");return n[l]||(n[l]=n=>{if(!("key"in n))return;let l=V(n.key);if(t.some(e=>e===l||ou[e]===l))return e(n)})},of=S({patchProp:sI},i6);let ov=(...e)=>{let t=(f||(f=rL(of))).createApp(...e),{mount:n}=t;return t.mount=e=>{let l=oy(e);if(!l)return;let r=t._component;E(r)||r.render||r.template||(r.template=l.innerHTML),1===l.nodeType&&(l.textContent="");let i=n(l,false,om(l));return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function om(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function oy(e){return T(e)?document.querySelector(e):e}

const LS_KEY = "dushiji.state.v1";
const DATA = "data/";

const defaultSettings = {
  mode: "day",
  font: "serif",
  size: 19,
  lineHeight: 2.05,
  layout: "dual",
  pinyin: false,
  vertical: false,
  showNotes: true,
  showEntities: true,
};

function loadSaved() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    return raw && typeof raw === "object" ? raw : {};
  } catch { return {}; }
}
const saved = loadSaved();

const store = tu({
  ready: false,
  index: null,
  entities: [],
  people: null,
  places: null,
  campaigns: null,
  events: null,
  poems: null,
  decisions: null,
  lexicon: null,
  offices: null,
  climate: null,
  companions: null,
  tables: null,
  hanshuIndex: null,
  hanshuMap: null,
  hanshuLinks: null,
  hanshuCache: {},
  libraryChapter: null,
  annotOpen: false,
  chapter: null,
  chapterNo: 1,
  chapterCache: {},
  currentPara: 0,

  settings: { ...defaultSettings, ...(saved.settings || {}) },
  user: saved.user || null,
  annotations: saved.annotations || [],
  bookmarks: saved.bookmarks || [],
  favorites: saved.favorites || [],
  history: saved.history || [],
  progress: saved.progress || {},
  readChapters: saved.readChapters || [],
  votes: saved.votes || {},

  panel: null,
  assistant: false,
  assistantTab: "apps",
  tocOpen: true,
  searchOpen: false,
  dialogue: null,
  toast: "",
  loading: false,
  ai: saved.ai || { endpoint: "https://api.deepseek.com/v1/chat/completions", model: "deepseek-chat", key: "" },
});

let saveTimer = null;
ny(
  () => [store.settings, store.user, store.annotations, store.bookmarks, store.favorites, store.history, store.progress, store.readChapters, store.votes, store.ai],
  () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveLocal, 260);
  },
  { deep: true }
);

/* ---------------- 本地账号与数据隔离 ---------------- */
const PROFILE_KEY = "dushiji.profiles.v1";
const dataKey = (name) => "dushiji.data." + name;

function saveLocal() {
  try {
    // 账号列表与设置（全局）
    const meta = JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}");
    meta.profiles = meta.profiles || [];
    if (store.user && !meta.profiles.some((p) => p.name === store.user.name)) {
      meta.profiles.push({ name: store.user.name, hash: store.user.hash || "", created: Date.now() });
    }
    meta.last = store.user ? store.user.name : "";
    localStorage.setItem(PROFILE_KEY, JSON.stringify(meta));
    // 设置与 AI 配置（全局，不随账号）
    localStorage.setItem(LS_KEY, JSON.stringify({ settings: store.settings, ai: store.ai }));
    // 阅读数据（按账号）
    const payload = {
      annotations: store.annotations, bookmarks: store.bookmarks, favorites: store.favorites,
      history: store.history, progress: store.progress, readChapters: store.readChapters, votes: store.votes,
    };
    localStorage.setItem(dataKey(store.user ? store.user.name : "__guest__"), JSON.stringify(payload));
  } catch {}
}

function loadDataFor(name) {
  let d = {};
  try { d = JSON.parse(localStorage.getItem(dataKey(name || "__guest__")) || "{}"); } catch {}
  store.annotations = d.annotations || [];
  store.bookmarks = d.bookmarks || [];
  store.favorites = d.favorites || [];
  store.history = d.history || [];
  store.progress = d.progress || {};
  store.readChapters = d.readChapters || [];
  store.votes = d.votes || {};
}

async function sha256(text) {
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch { return "plain:" + text; }
}

async function register(name, pwd) {
  name = (name || "").trim();
  if (!name) return { ok: false, msg: "请填写昵称" };
  if (name.length > 16) return { ok: false, msg: "昵称不要超过 16 字" };
  const meta = JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}");
  const profiles = meta.profiles || [];
  if (profiles.some((p) => p.name === name)) return { ok: false, msg: "该昵称已存在，请直接登录" };
  const hash = await sha256(name + ":" + pwd);
  profiles.push({ name, hash, created: Date.now() });
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...meta, profiles, last: name }));
  store.user = { name, hash };
  loadDataFor(name);
  saveLocal();
  toast("账号已创建：" + name);
  return { ok: true };
}

async function signIn(name, pwd) {
  name = (name || "").trim();
  const meta = JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}");
  const profiles = meta.profiles || [];
  const p = profiles.find((x) => x.name === name);
  if (!p) return { ok: false, msg: "没有这个账号，可先注册" };
  if (p.hash) {
    const hash = await sha256(name + ":" + pwd);
    if (hash !== p.hash) return { ok: false, msg: "密码不对" };
  }
  store.user = { name, hash: p.hash };
  loadDataFor(name);
  toast("欢迎回来，" + name);
  return { ok: true };
}

function signOut() {
  saveLocal();
  store.user = null;
  loadDataFor("__guest__");
  toast("已退出，当前为访客数据");
}

function profileList() {
  try { return (JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}").profiles || []).map((p) => p.name); } catch { return []; }
}

/* 首次启动：把旧版单用户数据迁移到访客/当前账号 */
function migrateLegacy() {
  try {
    const old = JSON.parse(localStorage.getItem("dushiji.state.v1") || "null");
    if (!old) return;
    if (old.settings) store.settings = { ...store.settings, ...old.settings };
    if (old.ai) store.ai = { ...store.ai, ...old.ai };
    if (old.user) store.user = { name: old.user.name };
    const target = store.user ? store.user.name : "__guest__";
    if (!localStorage.getItem(dataKey(target))) {
      localStorage.setItem(dataKey(target), JSON.stringify({
        annotations: old.annotations || [], bookmarks: old.bookmarks || [], favorites: old.favorites || [],
        history: old.history || [], progress: old.progress || {}, readChapters: old.readChapters || [], votes: old.votes || [],
      }));
    }
    localStorage.removeItem("dushiji.state.v1");
  } catch {}
}

async function fetchJSON(path) {
  const res = await fetch(DATA + path, { cache: "force-cache" });
  if (!res.ok) throw new Error(`${path} ${res.status}`);
  return res.json();
}

async function initStore() {
  migrateLegacy();
  const [index, entities] = await Promise.all([fetchJSON("index.json"), fetchJSON("entities.json")]);
  store.index = index;
  store.entities = entities;
  const names = ["people", "places", "campaigns", "events", "poems", "decisions", "lexicon", "offices", "climate", "companions", "tables"];
  const loaded = await Promise.all(names.map(async (n) => {
    try { return [n, await fetchJSON(`enrich/${n}.json`)]; } catch { return [n, null]; }
  }));
  for (const [n, v] of loaded) store[n] = v;
  // 《汉书》资料库（缺失时静默跳过）
  try { store.hanshuIndex = await fetchJSON("hanshu-index.json"); } catch {}
  try { store.hanshuMap = await fetchJSON("hanshu-map.json"); } catch {}
  try { store.hanshuLinks = await fetchJSON("hanshu-links.json"); } catch {}
  // 恢复上次登录的账号并载入其数据
  try {
    const meta = JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}");
    if (!store.user && meta.last) {
      const p = (meta.profiles || []).find((x) => x.name === meta.last);
      if (p) store.user = { name: p.name, hash: p.hash };
    }
  } catch {}
  loadDataFor(store.user ? store.user.name : "__guest__");
  store.ready = true;
}

async function loadHanshu(id) {
  if (!id) { store.libraryChapter = null; return null; }
  if (store.hanshuCache[id]) { store.libraryChapter = store.hanshuCache[id]; return store.libraryChapter; }
  const ch = await fetchJSON(`hanshu/${id}.json`);
  store.hanshuCache[id] = ch;
  store.libraryChapter = ch;
  return ch;
}

async function loadHanshuText(id) {
  if (store.hanshuCache[id]) return store.hanshuCache[id];
  const ch = await fetchJSON(`hanshu/${id}.json`);
  store.hanshuCache[id] = ch;
  return ch;
}

async function loadChapter(no) {
  no = Number(no) || 1;
  if (store.chapterCache[no]) {
    store.chapter = store.chapterCache[no];
    store.chapterNo = no;
    store.currentPara = 1;
    touchHistory(no);
    return store.chapter;
  }
  store.loading = true;
  const ch = await fetchJSON(`chapters/${String(no).padStart(3, "0")}.json`);
  store.chapterCache[no] = ch;
  store.chapter = ch;
  store.chapterNo = no;
  store.currentPara = 1;
  store.loading = false;
  touchHistory(no);
  return ch;
}

function touchHistory(no) {
  const meta = store.index?.chapters.find((c) => c.no === no);
  if (!meta) return;
  store.history = [{ no, title: meta.title, ts: Date.now() }, ...store.history.filter((h) => h.no !== no)].slice(0, 40);
  if (!store.readChapters.includes(no)) store.readChapters = [...store.readChapters, no];
}

/* ---------------- 路由 ---------------- */
function parseRoute() {
  const h = location.hash.replace(/^#\/?/, "");
  const [path, query] = h.split("?");
  const seg = path.split("/").filter(Boolean);
  if (!seg.length) return { name: "reader", no: 1 };
  if (seg[0] === "c") return { name: "reader", no: Number(seg[1]) || 1, anchor: seg[2] ? Number(seg[2]) : null };
  if (seg[0] === "events") return { name: "events", id: seg[1] || null };
  if (seg[0] === "people") return { name: "people", id: seg[1] || null };
  if (seg[0] === "sandbox") return { name: "sandbox", id: seg[1] || null };
  if (seg[0] === "map") return { name: "map" };
  if (seg[0] === "poems") return { name: "poems" };
  if (seg[0] === "decisions") return { name: "decisions", id: seg[1] || null };
  if (seg[0] === "lexicon") return { name: "lexicon", id: seg[1] || null };
  if (seg[0] === "climate") return { name: "climate" };
  if (seg[0] === "offices") return { name: "offices" };
  if (seg[0] === "me") return { name: "me" };
  if (seg[0] === "search") {
    const params = new URLSearchParams(query || "");
    return { name: "search", q: params.get("q") || "" };
  }
  if (seg[0] === "tables") return { name: "tables", id: seg[1] || null };
  if (seg[0] === "library") return { name: "library", id: seg[1] || null, anchor: seg[2] ? Number(seg[2]) : null };
  if (seg[0] === "changelog") return { name: "changelog" };
  if (seg[0] === "about") return { name: "about" };
  if (seg[0] === "login") return { name: "login" };
  return { name: "reader", no: 1 };
}

function go(path) {
  if (!path.startsWith("#")) path = "#" + (path.startsWith("/") ? path : "/" + path);
  if (location.hash === path) { window.dispatchEvent(new HashChangeEvent("hashchange")); return; }
  location.hash = path;
}

function openChapter(no, anchor) {
  go(`/c/${no}${anchor ? "/" + anchor : ""}`);
}

function toast(msg) {
  store.toast = msg;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (store.toast = ""), 2200);
}

function addAnnotation(a) {
  const item = { id: "a" + Date.now().toString(36), ts: Date.now(), color: "hl-y", ...a };
  store.annotations = [...store.annotations, item];
  return item;
}
function removeAnnotation(id) {
  store.annotations = store.annotations.filter((a) => a.id !== id);
}

function updateAnnotation(id, patch) {
  store.annotations = store.annotations.map((a) => (a.id === id ? { ...a, ...patch } : a));
}

/* 跨标签页同步（同一浏览器打开多个页面时） */
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== LS_KEY || !e.newValue) return;
    try {
      const v = JSON.parse(e.newValue);
      for (const k of ["annotations", "bookmarks", "favorites", "progress", "readChapters", "votes"]) {
        if (v[k]) store[k] = v[k];
      }
    } catch {}
  });
}

function toggleFavorite(chapter, para, quote) {
  const hit = store.favorites.find((f) => f.chapter === chapter && f.para === para);
  if (hit) {
    store.favorites = store.favorites.filter((f) => f !== hit);
    toast("已取消收藏");
  } else {
    store.favorites = [{ chapter, para, quote: (quote || "").slice(0, 60), ts: Date.now() }, ...store.favorites];
    toast("已收藏本段");
  }
}
function isFavorite(chapter, para) {
  return store.favorites.some((f) => f.chapter === chapter && f.para === para);
}
function setProgress(no, para) {
  const cur = store.progress[no] || 0;
  if (para > cur) store.progress = { ...store.progress, [no]: para };
}

/* ---------------- 查询工具 ---------------- */
const personById = (id) => (store.people?.people || []).find((p) => p.id === id);
const placeById = (id) => (store.places?.places || []).find((p) => p.id === id);
const termById = (id) => (store.lexicon?.entries || []).find((p) => p.id === id);

// 正文渲染：注音、实体高亮、注释角标、批注高亮
const PY_RE = /([\u4e00-\u9fa5])\(([a-zA-Züāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜńňǹḿ]{1,14})\)/g;

const esc$1 = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// 把文本拆成「单字 + 可能附带的注音」
function tokenize(text) {
  const chars = [];
  const re = new RegExp(PY_RE);
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    const pyStart = m.index + 1;
    for (let i = last; i < pyStart; i++) chars.push({ ch: text[i] });
    chars[chars.length - 1].py = m[2];
    last = pyStart + m[0].length - 1;
  }
  for (let i = last; i < text.length; i++) chars.push({ ch: text[i] });
  return chars;
}

const ONE_CHAR_WHITELIST = new Set(["尧", "舜", "禹", "汤", "桀", "纣", "启", "武", "旦", "召", "幽", "厉", "宣", "平", "桓", "文", "景", "惠", "昭", "悼", "襄", "灵", "成", "康", "穆", "庄", "简", "定", "献", "孝", "高", "后", "主"]);

let cachedMatcher = null;
function buildMatcher(entities) {
  if (cachedMatcher && cachedMatcher.size === entities.length) return cachedMatcher;
  const map = new Map();
  for (const e of entities || []) {
    for (const nm of [e.name, ...(e.aliases || [])]) {
      if (!nm) continue;
      if (nm.length === 1 && !(e.type === "person" && ONE_CHAR_WHITELIST.has(nm))) continue;
      if (!map.has(nm)) map.set(nm, e);
    }
  }
  const names = [...map.keys()].sort((a, b) => b.length - a.length);
  const re = names.length ? new RegExp(names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g") : null;
  cachedMatcher = { map, re, size: entities.length };
  return cachedMatcher;
}

// 计算每字样式：[{kind, id, extra}]
function paint(chars, matcher, { notes = [], annotations = [], showEntities = true }) {
  const n = chars.length;
  const style = new Array(n).fill(null);
  const plain = chars.map((c) => c.ch).join("");

  // 1. 实体
  if (showEntities && matcher?.re) {
    matcher.re.lastIndex = 0;
    let m;
    while ((m = matcher.re.exec(plain))) {
      const ent = matcher.map.get(m[0]);
      if (!ent) continue;
      for (let i = m.index; i < m.index + m[0].length; i++) {
        if (!style[i]) style[i] = { kind: ent.type, id: ent.id, name: m[0] };
      }
    }
  }

  // 2. 注释（取首次出现）
  for (const note of notes) {
    if (!note.term) continue;
    const t = note.term.split(/[、，,／/]/)[0].trim();
    if (!t) continue;
    const at = plain.indexOf(t);
    if (at < 0) continue;
    for (let i = at; i < at + t.length; i++) style[i] = { kind: "note", id: note.n, term: t };
  }

  // 3. 批注（覆盖优先级最高）
  for (const a of annotations) {
    if (!a.quote) continue;
    let at = plain.indexOf(a.quote);
    if (at < 0 && a.quote.length > 6) at = plain.indexOf(a.quote.slice(0, 6));
    if (at < 0) continue;
    const len = Math.min(a.quote.length, n - at);
    for (let i = at; i < at + len; i++) style[i] = { kind: "ann", id: a.id, color: a.color || "hl-y" };
  }
  return style;
}

function renderParagraph(text, opts = {}) {
  const { matcher, notes = [], annotations = [], pinyin = false, showEntities = true } = opts;
  const chars = tokenize(text);
  const style = paint(chars, matcher, { notes, annotations, showEntities });

  let out = "";
  let i = 0;
  while (i < chars.length) {
    const s = style[i];
    const key = s ? `${s.kind}:${s.id}` : "";
    let j = i + 1;
    while (j < chars.length) {
      const s2 = style[j];
      const k2 = s2 ? `${s2.kind}:${s2.id}` : "";
      if (k2 !== key) break;
      j++;
    }
    let seg = "";
    for (let k = i; k < j; k++) {
      const c = chars[k];
      const body = pinyin && c.py ? `<ruby>${esc$1(c.ch)}<rt>${esc$1(c.py)}</rt></ruby>` : esc$1(c.ch);
      seg += body;
    }
    if (!s) out += seg;
    else if (s.kind === "note") out += `<span class="nref-wrap">${seg}<sup class="note-ref" data-note="${s.id}">${s.id}</sup></span>`;
    else if (s.kind === "ann") out += `<span class="hl ${s.color}" data-ann="${s.id}">${seg}</span>`;
    else out += `<span class="e e-${s.kind}" data-ent="${s.kind}" data-id="${s.id}">${seg}</span>`;
    i = j;
  }
  return out;
}

// 纯文本预览（去注音、去标记）
function plainText(s) {
  return (s || "").replace(/\([a-zA-Züāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜńňǹḿ]{1,14}\)/g, "");
}

function highlightHTML(s, q) {
  const safe = esc$1(s);
  if (!q) return safe;
  const idx = safe.toLowerCase().indexOf(q.toLowerCase());
  if (idx < 0) return safe;
  return safe.slice(0, idx) + "<mark>" + safe.slice(idx, idx + q.length) + "</mark>" + safe.slice(idx + q.length);
}

const _hoisted_1$n = { class: "topbar" };
const _hoisted_2$n = { class: "topnav" };
const _hoisted_3$n = ["onClick", "href"];
const _hoisted_4$n = { class: "top-right" };
const _hoisted_5$n = {
  key: 0,
  class: "vip-tag"
};
const _hoisted_6$n = { class: "ava" };
const _hoisted_7$n = { class: "search-hits" };
const _hoisted_8$n = {
  key: 0,
  class: "desc",
  style: {"padding":"10px","color":"var(--muted)"}
};
const _hoisted_9$n = ["onClick"];
const _hoisted_10$m = { class: "h" };
const _hoisted_11$m = ["innerHTML"];
const _hoisted_12$l = {
  key: 1,
  class: "desc",
  style: {"padding":"10px","color":"var(--muted)"}
};


var TopBar = {
  __name: 'TopBar',
  props: { route: { type: Object, required: true } },
  emits: ["open-settings", "open-login", "toggle-assistant"],
  setup(__props, { emit: __emit }) {

const props = __props;
const emit = __emit;

const q = tx("");
const hits = tx([]);
const searchIndex = tx(null);
const inputEl = tx(null);

const nav = [
  { key: "reader", label: "史记", path: "/c/1" },
  { key: "events", label: "纪事本末", path: "/events" },
  { key: "people", label: "人物志", path: "/people" },
  { key: "tables", label: "年表", path: "/tables" },
  { key: "library", label: "资料库", path: "/library" },
];
const activeKey = iD(() => {
  if (["reader"].includes(props.route.name)) return "reader";
  if (props.route.name === "events") return "events";
  if (props.route.name === "people") return "people";
  if (props.route.name === "tables") return "tables";
  if (props.route.name === "library") return "library";
  return "";
});

async function openSearch() {
  store.searchOpen = !store.searchOpen;
  if (store.searchOpen && !searchIndex.value) {
    searchIndex.value = await fetchJSON("search.json");
  }
  if (store.searchOpen) setTimeout(() => inputEl.value?.focus(), 30);
}

function runSearch() {
  const kw = q.value.trim();
  if (!kw || !searchIndex.value) { hits.value = []; return; }
  const low = kw.toLowerCase();
  const out = [];
  for (const row of searchIndex.value) {
    const o = plainText(row.o);
    const t = plainText(row.t);
    let at = o.indexOf(kw);
    let field = "o";
    if (at < 0) { at = t.indexOf(kw); field = "t"; }
    if (at < 0) at = o.toLowerCase().indexOf(low);
    if (at < 0) continue;
    const src = field === "o" ? o : t;
    const s = Math.max(0, at - 26);
    out.push({
      no: row.c, p: row.p, sec: row.sec, field,
      snippet: (s > 0 ? "…" : "") + src.slice(s, at + kw.length + 34) + (at + kw.length + 34 < src.length ? "…" : ""),
    });
    if (out.length >= 24) break;
  }
  hits.value = out;
}

function gotoHit(h) {
  store.searchOpen = false;
  q.value = "";
  hits.value = [];
  go(`/c/${h.no}/${h.p}`);
}
function onKeydown(e) { if (e.key === "Escape") { store.searchOpen = false; } }
lS(() => window.addEventListener("keydown", onKeydown));
lw(() => window.removeEventListener("keydown", onKeydown));

function chapterTitle(no) {
  return store.index?.chapters.find((c) => c.no === Number(no))?.title || "";
}

return (_ctx, _cache) => {
  return (r4(), ie("header", _hoisted_1$n, [
    ia("div", {
      class: "brand",
      onClick: _cache[0] || (_cache[0] = $event => (tA(go)('/c/1')))
    }, [...(_cache[9] || (_cache[9] = [
      ia("div", { class: "seal" }, "史", -1 /* CACHED */),
      ia("div", { class: "name" }, [
        id("读"),
        ia("em", null, "史记")
      ], -1 /* CACHED */)
    ]))]),
    ia("nav", _hoisted_2$n, [
      (r4(), ie(rQ, null, lj(nav, (n) => {
        return ia("a", {
          key: n.key,
          class: Y({ on: activeKey.value === n.key }),
          onClick: oa($event => (tA(go)(n.path)), ["prevent"]),
          href: '#' + n.path
        }, ea(n.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_3$n)
      }), 64 /* STABLE_FRAGMENT */))
    ]),
    ia("div", _hoisted_4$n, [
      ia("button", {
        class: Y(["icon-btn", { on: tA(store).searchOpen }]),
        title: "搜索全文",
        onClick: openSearch
      }, [...(_cache[10] || (_cache[10] = [
        ia("svg", {
          viewBox: "0 0 24 24",
          width: "17",
          height: "17",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.7"
        }, [
          ia("circle", {
            cx: "10.5",
            cy: "10.5",
            r: "6.2"
          }),
          ia("path", {
            d: "M15.2 15.2 20 20",
            "stroke-linecap": "round"
          })
        ], -1 /* CACHED */)
      ]))], 2 /* CLASS */),
      ia("button", {
        class: "icon-btn",
        title: "历史地图",
        onClick: _cache[1] || (_cache[1] = $event => (tA(go)('/map')))
      }, [...(_cache[11] || (_cache[11] = [
        ia("svg", {
          viewBox: "0 0 24 24",
          width: "17",
          height: "17",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.6"
        }, [
          ia("path", {
            d: "M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z",
            "stroke-linejoin": "round"
          }),
          ia("path", { d: "M9 4v14M15 6v14" })
        ], -1 /* CACHED */)
      ]))]),
      ia("button", {
        class: "icon-btn",
        title: "沙盘推演",
        onClick: _cache[2] || (_cache[2] = $event => (tA(go)('/sandbox')))
      }, [...(_cache[12] || (_cache[12] = [
        ia("svg", {
          viewBox: "0 0 24 24",
          width: "17",
          height: "17",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.6"
        }, [
          ia("path", {
            d: "M5 20V4",
            "stroke-linecap": "round"
          }),
          ia("path", {
            d: "M5 5h11l-2.2 3.4L16 12H5",
            "stroke-linejoin": "round"
          })
        ], -1 /* CACHED */)
      ]))]),
      ia("button", {
        class: Y(["icon-btn", { on: tA(store).assistant }]),
        title: "史记助手",
        onClick: _cache[3] || (_cache[3] = $event => (emit('toggle-assistant')))
      }, [...(_cache[13] || (_cache[13] = [
        ia("svg", {
          viewBox: "0 0 24 24",
          width: "17",
          height: "17",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.6"
        }, [
          ia("path", {
            d: "M5 4h11a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2V4Z",
            "stroke-linejoin": "round"
          }),
          ia("path", { d: "M8 8h7M8 11.5h5" })
        ], -1 /* CACHED */)
      ]))], 2 /* CLASS */),
      ia("button", {
        class: "icon-btn",
        title: "阅读设置",
        onClick: _cache[4] || (_cache[4] = $event => (emit('open-settings')))
      }, [...(_cache[14] || (_cache[14] = [
        ia("svg", {
          viewBox: "0 0 24 24",
          width: "17",
          height: "17",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.6"
        }, [
          ia("circle", {
            cx: "12",
            cy: "12",
            r: "3.1"
          }),
          ia("path", { d: "M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" })
        ], -1 /* CACHED */)
      ]))]),
      (tA(store).user)
        ? (r4(), ie("span", _hoisted_5$n, ea(tA(store).user.vip ? "会员" : "读史者"), 1 /* TEXT */))
        : ig("v-if", true),
      (!tA(store).user)
        ? (r4(), ie("button", {
            key: 1,
            class: "user-chip",
            onClick: _cache[5] || (_cache[5] = $event => (emit('open-login')))
          }, [...(_cache[15] || (_cache[15] = [
            ia("span", { class: "ava" }, "?", -1 /* CACHED */),
            ia("span", null, "登录", -1 /* CACHED */)
          ]))]))
        : (r4(), ie("button", {
            key: 2,
            class: "user-chip",
            onClick: _cache[6] || (_cache[6] = $event => (tA(go)('/me')))
          }, [
            ia("span", _hoisted_6$n, ea(tA(store).user.name.slice(0, 1)), 1 /* TEXT */),
            ia("span", null, ea(tA(store).user.name.slice(0, 6)), 1 /* TEXT */)
          ]))
    ]),
    (tA(store).searchOpen)
      ? (r4(), ie("div", {
          key: 0,
          class: "search-pop",
          onKeydown: _cache[8] || (_cache[8] = oc($event => (tA(store).searchOpen = false), ["esc"]))
        }, [
          nu(ia("input", {
            ref_key: "inputEl",
            ref: inputEl,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((q).value = $event)),
            class: "search-input",
            placeholder: "搜索《史记》原文、译文、篇名，如：鸿门宴 / 项羽 / 破釜沉舟",
            onInput: runSearch
          }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
            [s4, q.value]
          ]),
          ia("div", _hoisted_7$n, [
            (!q.value)
              ? (r4(), ie("div", _hoisted_8$n, " 共 " + ea((tA(store).index?.stats?.paras || 0).toLocaleString()) + " 个段落可检索 · 试试「完璧归赵」「巨鹿」「太史公曰」 ", 1 /* TEXT */))
              : ig("v-if", true),
            (r4(true), ie(rQ, null, lj(hits.value, (h) => {
              return (r4(), ie("div", {
                key: h.no + '-' + h.p,
                class: "search-hit",
                onClick: $event => (gotoHit(h))
              }, [
                ia("div", _hoisted_10$m, "卷" + ea(h.no) + " · " + ea(chapterTitle(h.no)) + " · 第 " + ea(h.p) + " 段 · " + ea(h.sec), 1 /* TEXT */),
                ia("div", {
                  class: "t",
                  innerHTML: tA(highlightHTML)(h.snippet, q.value)
                }, null, 8 /* PROPS */, _hoisted_11$m)
              ], 8 /* PROPS */, _hoisted_9$n))
            }), 128 /* KEYED_FRAGMENT */)),
            (q.value && hits.value.length === 0)
              ? (r4(), ie("div", _hoisted_12$l, "没有找到匹配的段落"))
              : ig("v-if", true)
          ])
        ], 32 /* NEED_HYDRATION */))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$m = { class: "toc-pane" };
const _hoisted_2$m = { class: "toc-head" };
const _hoisted_3$m = { class: "toc-scroll" };
const _hoisted_4$m = ["onClick"];
const _hoisted_5$m = { class: "caret" };
const _hoisted_6$m = { style: {"margin-left":"auto","font-size":"10.5px","opacity":".7"} };
const _hoisted_7$m = ["onClick"];
const _hoisted_8$m = { class: "no" };
const _hoisted_9$m = { style: {"flex":"1"} };
const _hoisted_10$l = {
  key: 0,
  style: {"font-size":"9px","color":"var(--green)"}
};
const _hoisted_11$l = {
  key: 1,
  style: {"font-size":"9px","color":"var(--muted)"}
};


var TocPane = {
  __name: 'TocPane',
  props: { current: { type: Number, default: 1 } },
  setup(__props) {
const filter = tx("");
const collapsed = tx({});

const groups = iD(() => {
  const gs = store.index?.groups || [];
  const kw = filter.value.trim();
  return gs.map((g) => ({
    ...g,
    items: (store.index?.chapters || []).filter(
      (c) => c.catKey === g.key && (!kw || c.title.includes(kw) || String(c.no).padStart(3, "0").includes(kw))
    ),
  })).filter((g) => g.items.length);
});

function toggle(key) {
  collapsed.value = { ...collapsed.value, [key]: !collapsed.value[key] };
}
function pct(c) {
  const done = store.progress[c.no] || 0;
  return c.paraCount ? Math.min(100, Math.round((done / c.paraCount) * 100)) : 0;
}

return (_ctx, _cache) => {
  return (r4(), ie("aside", _hoisted_1$m, [
    ia("div", _hoisted_2$m, [
      _cache[1] || (_cache[1] = ia("div", { class: "toc-title" }, "史记 · 一百三十篇", -1 /* CACHED */)),
      nu(ia("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((filter).value = $event)),
        class: "toc-filter",
        placeholder: "筛选篇目，如「列传」「项羽」"
      }, null, 512 /* NEED_PATCH */), [
        [s4, filter.value]
      ])
    ]),
    ia("div", _hoisted_3$m, [
      (r4(true), ie(rQ, null, lj(groups.value, (g) => {
        return (r4(), ie("div", {
          key: g.key,
          class: "toc-group"
        }, [
          ia("div", {
            class: "toc-group-h",
            onClick: $event => (toggle(g.key))
          }, [
            ia("span", _hoisted_5$m, ea(collapsed.value[g.key] ? "▸" : "▾"), 1 /* TEXT */),
            ia("span", null, ea(g.name), 1 /* TEXT */),
            ia("span", _hoisted_6$m, ea(g.items.length), 1 /* TEXT */)
          ], 8 /* PROPS */, _hoisted_4$m),
          (!collapsed.value[g.key])
            ? (r4(true), ie(rQ, { key: 0 }, lj(g.items, (c) => {
                return (r4(), ie("div", {
                  key: c.no,
                  class: Y(["toc-item", { on: c.no === __props.current }]),
                  onClick: $event => (tA(openChapter)(c.no))
                }, [
                  ia("span", _hoisted_8$m, ea(String(c.no).padStart(3, "0")), 1 /* TEXT */),
                  ia("span", _hoisted_9$m, ea(c.title), 1 /* TEXT */),
                  (pct(c) >= 100)
                    ? (r4(), ie("span", _hoisted_10$l, "✓"))
                    : (pct(c) > 0)
                      ? (r4(), ie("span", _hoisted_11$l, ea(pct(c)) + "%", 1 /* TEXT */))
                      : ig("v-if", true)
                ], 10 /* CLASS, PROPS */, _hoisted_7$m))
              }), 128 /* KEYED_FRAGMENT */))
            : ig("v-if", true)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}
}

};

const _hoisted_1$l = { class: "assistant" };
const _hoisted_2$l = { class: "as-head" };
const _hoisted_3$l = {
  class: "as-tabs",
  style: {"margin-left":"10px"}
};
const _hoisted_4$l = { class: "as-body" };
const _hoisted_5$l = { key: 0 };
const _hoisted_6$l = { class: "app-grid" };
const _hoisted_7$l = ["onClick"];
const _hoisted_8$l = { class: "ico" };
const _hoisted_9$l = { class: "nm" };
const _hoisted_10$k = { class: "ds" };
const _hoisted_11$k = { class: "app-grid" };
const _hoisted_12$k = {
  key: 1,
  style: {"padding":"14px"}
};
const _hoisted_13$j = { key: 0 };
const _hoisted_14$i = { class: "card-title" };
const _hoisted_15$g = { style: {"margin":"6px 0 10px"} };
const _hoisted_16$f = { class: "tagline" };
const _hoisted_17$e = { class: "tagline" };
const _hoisted_18$d = {
  key: 0,
  class: "tagline"
};
const _hoisted_19$d = {
  key: 0,
  class: "kv"
};
const _hoisted_20$b = {
  class: "desc",
  style: {"margin":"10px 0"}
};
const _hoisted_21$b = { class: "rel-group-title" };
const _hoisted_22$a = { class: "rel-list" };
const _hoisted_23$a = ["onClick"];
const _hoisted_24$9 = { class: "ty" };
const _hoisted_25$8 = { class: "rel-list" };
const _hoisted_26$8 = ["onClick"];
const _hoisted_27$7 = { class: "rel-group-title" };
const _hoisted_28$6 = { style: {"font-weight":"400"} };
const _hoisted_29$6 = { style: {"max-height":"320px","overflow":"auto","margin-top":"6px"} };
const _hoisted_30$6 = ["onClick"];
const _hoisted_31$6 = { class: "mh" };
const _hoisted_32$6 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_33$5 = { class: "card-title" };
const _hoisted_34$4 = { style: {"margin":"6px 0 10px"} };
const _hoisted_35$4 = { class: "tagline" };
const _hoisted_36$4 = { class: "tagline" };
const _hoisted_37$3 = { class: "desc" };
const _hoisted_38$3 = {
  class: "kv",
  style: {"margin-top":"8px"}
};
const _hoisted_39$3 = { class: "rel-list" };
const _hoisted_40$2 = ["onClick"];
const _hoisted_41$2 = { class: "rel-group-title" };
const _hoisted_42$2 = { style: {"max-height":"260px","overflow":"auto"} };
const _hoisted_43$2 = ["onClick"];
const _hoisted_44$2 = { class: "mh" };
const _hoisted_45$2 = { class: "card-title" };
const _hoisted_46$2 = { style: {"margin":"6px 0 10px"} };
const _hoisted_47$2 = { class: "tagline" };
const _hoisted_48$2 = { class: "desc" };
const _hoisted_49$2 = { class: "rel-list" };
const _hoisted_50$2 = ["onClick"];
const _hoisted_51$2 = {
  key: 3,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_52$2 = {
  key: 2,
  class: "chat",
  style: {"height":"100%"}
};
const _hoisted_53$1 = { style: {"display":"flex","align-items":"center","gap":"8px","padding":"7px 12px","border-bottom":"1px solid var(--line-2)","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_54$1 = { class: "who" };
const _hoisted_55$1 = { class: "bubble" };
const _hoisted_56$1 = { style: {"white-space":"pre-line"} };
const _hoisted_57$1 = ["onClick"];
const _hoisted_58$1 = {
  key: 0,
  class: "msg"
};
const _hoisted_59$1 = { class: "chat-input" };
const _hoisted_60$1 = ["onKeydown"];


var Assistant = {
  __name: 'Assistant',
  setup(__props) {

const tab = tx(store.assistantTab || "apps");
ny(() => store.panel, (p) => { if (p) tab.value = "panel"; });
ny(tab, (t) => (store.assistantTab = t));

const panel = iD(() => store.panel);
const person = iD(() => (panel.value?.type === "person" ? personById(panel.value.id) : null));
const place = iD(() => (panel.value?.type === "place" ? placeById(panel.value.id) : null));
const term = iD(() => (panel.value?.type === "term" ? termById(panel.value.id) : null));

const relGroups = iD(() => {
  if (!person.value) return [];
  const groups = {};
  for (const r of person.value.relations || []) {
    const target = personById(r.target);
    if (!target) continue;
    (groups[r.type] = groups[r.type] || []).push({ ...r, target });
  }
  return Object.entries(groups).map(([type, list]) => ({ type, list }));
});

function openRel(id) { store.panel = { type: "person", id }; }

/* 出场段落聚合（按需检索） */
const mentions = tx([]);
const mentionLoading = tx(false);
ny([person, place, term], async () => {
  mentions.value = [];
  const target = person.value || place.value || term.value;
  if (!target) return;
  mentionLoading.value = true;
  try {
    if (!window.__searchIndex) window.__searchIndex = await fetchJSON("search.json");
    const names = [target.name, ...(target.aliases || [])].filter(Boolean);
    const out = [];
    for (const row of window.__searchIndex) {
      const o = plainText(row.o);
      if (names.some((n) => o.includes(n))) {
        out.push(row);
        if (out.length >= 24) break;
      }
    }
    mentions.value = out;
  } catch (e) { mentions.value = []; }
  mentionLoading.value = false;
}, { immediate: true });

const apps = [
  { key: "people", ico: "人", nm: "人物志", ds: "数风流人物", go: "/people" },
  { key: "map", ico: "圖", nm: "历史地图", ds: "左图右史", go: "/map" },
  { key: "sandbox", ico: "沙", nm: "沙盘态势", ds: "历史空间观察与推演", go: "/sandbox" },
  { key: "tables", ico: "表", nm: "十表年表", ds: "以表系年，观大势", go: "/tables" },
  { key: "library", ico: "籍", nm: "资料库·汉书", ds: "与《史记》对读", go: "/library" },
  { key: "events", ico: "事", nm: "纪事本末", ds: "按事件读史", go: "/events" },
  { key: "poems", ico: "詩", nm: "咏史诗", ds: "后人如何看这段史", go: "/poems" },
  { key: "decisions", ico: "决", nm: "决策演武场", ds: "参与历史关键抉择", go: "/decisions" },
  { key: "climate", ico: "氣", nm: "历史气候", ds: "五千年气温曲线", go: "/climate" },
  { key: "offices", ico: "官", nm: "历代官职", ds: "读懂权力结构", go: "/offices" },
  { key: "lexicon", ico: "典", nm: "通鉴百科", ds: "制度与典故", go: "/lexicon" },
  { key: "me", ico: "我", nm: "个人空间", ds: "批注与足迹", go: "/me" },
];
function nav(p) { go(p); }

/* AI 问答（本地检索式） */
const msgs = tx([
  { who: "ai", text: "我是史记助手。可以直接问我：《史记》里鸿门宴是怎么回事？项羽为什么不肯过江东？韩信是怎样被杀的？" },
]);
const input = tx("");
const busy = tx(false);
const logEl = tx(null);

async function ask() {
  const q = input.value.trim();
  if (!q || busy.value) return;
  msgs.value.push({ who: "me", text: q });
  input.value = "";
  busy.value = true;
  await t8();
  logEl.value?.scrollTo({ top: 1e9 });

  if (store.ai?.key) {
    await askModel(q);
  } else {
    await askLocal(q);
  }
  busy.value = false;
  await t8();
  logEl.value?.scrollTo({ top: 1e9 });
}

/* 检索增强：取最相关的《史记》段落作为上下文 */
async function retrieve(q, limit = 5) {
  if (!window.__searchIndex) window.__searchIndex = await fetchJSON("search.json");
  const grams = [...new Set(q.replace(/[，。？！、；：""''（）\s]/g, "").split("").filter((c) => /[\u4e00-\u9fa5]/.test(c)))];
  const scored = [];
  for (const row of window.__searchIndex) {
    const o = plainText(row.o);
    let sc = 0;
    for (const g of grams) if (o.includes(g)) sc += 1;
    if (q.length >= 2 && o.includes(q)) sc += 12;
    if (sc >= Math.min(4, grams.length)) scored.push({ row, sc });
  }
  scored.sort((a, b) => b.sc - a.sc);
  return scored.slice(0, limit).map((x) => x.row);
}

async function askLocal(q) {
  try {
    const top = await retrieve(q, 3);
    const meta = (no) => store.index?.chapters.find((c) => c.no === no);
    if (!top.length) {
      msgs.value.push({ who: "ai", text: "没有在《史记》全文中找到足够相关的段落。可以换一组关键词；也可以在「阅读设置 → 史记助手」里填入大模型 API Key，让我真正作答。" });
      return;
    }
    let text = `在《史记》中检索到相关记载，最相关的是：\n`;
    top.forEach((row, i) => {
      text += `\n${i + 1}. 卷${row.c}《${meta(row.c)?.title}》（${row.sec}）\n「${plainText(row.o).slice(0, 90)}…」`;
    });
    text += "\n\n（当前为本地检索模式；填入 API Key 后可直接对史料作答。）";
    msgs.value.push({ who: "ai", text, srcs: top.map((row) => ({ no: row.c, p: row.p, label: `卷${row.c}《${meta(row.c)?.title}》第 ${row.p} 段` })) });
  } catch (e) {
    msgs.value.push({ who: "ai", text: "检索出错了：" + e.message });
  }
}

async function askModel(q) {
  const meta = (no) => store.index?.chapters.find((c) => c.no === no);
  let ctx = "";
  let srcs = [];
  try {
    const rows = await retrieve(q, 5);
    srcs = rows.map((row) => ({ no: row.c, p: row.p, label: `卷${row.c}《${meta(row.c)?.title}》第 ${row.p} 段` }));
    ctx = rows.map((row, i) => `【材料${i + 1}】《史记·${meta(row.c)?.title}》${row.sec}：${plainText(row.o).slice(0, 500)}`).join("\n");
  } catch {}

  const msg = { who: "ai", text: "", srcs };
  msgs.value.push(msg);
  const idx = msgs.value.length - 1;
  const sys = "你是「读史记」网站的助手，熟读《史记》。回答用简洁的现代汉语，先给结论，再引原文为证；引用史料时标明篇名。不要编造原文，若材料不足就直说。";
  const user = ctx ? `【检索到的《史记》材料】\n${ctx}\n\n【问题】${q}` : q;

  try {
    const res = await fetch(store.ai.endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${store.ai.key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: store.ai.model,
        stream: true,
        temperature: 0.3,
        messages: [{ role: "system", content: sys }, { role: "user", content: user }],
      }),
    });
    if (!res.ok || !res.body) throw new Error("HTTP " + res.status + " " + (await res.text().catch(() => "")).slice(0, 120));
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() || "";
      for (const line of lines) {
        const t = line.trim();
        if (!t.startsWith("data:")) continue;
        const payload = t.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const j = JSON.parse(payload);
          const delta = j.choices?.[0]?.delta?.content || "";
          if (delta) {
            msgs.value[idx].text += delta;
            await t8();
            logEl.value?.scrollTo({ top: 1e9 });
          }
        } catch {}
      }
    }
    if (!msgs.value[idx].text) msgs.value[idx].text = "（模型没有返回内容）";
  } catch (e) {
    msgs.value[idx].text = "调用模型失败：" + e.message + "\n可检查「阅读设置 → 史记助手」里的接口地址、模型名与 Key。";
  }
}

function goto(no, p) { openChapter(no, p); }

return (_ctx, _cache) => {
  return (r4(), ie("aside", _hoisted_1$l, [
    ia("div", _hoisted_2$l, [
      _cache[12] || (_cache[12] = ia("b", { style: {"font-family":"var(--serif)","font-size":"15px"} }, "史记助手", -1 /* CACHED */)),
      ia("div", _hoisted_3$l, [
        ia("button", {
          class: Y(["as-tab", { on: tab.value === 'apps' }]),
          onClick: _cache[0] || (_cache[0] = $event => {tab.value = 'apps'; tA(store).panel = null;})
        }, "应用", 2 /* CLASS */),
        ia("button", {
          class: Y(["as-tab", { on: tab.value === 'chat' }]),
          onClick: _cache[1] || (_cache[1] = $event => (tab.value = 'chat'))
        }, "问助手", 2 /* CLASS */),
        (tA(store).panel)
          ? (r4(), ie("button", {
              key: 0,
              class: Y(["as-tab", { on: tab.value === 'panel' }]),
              onClick: _cache[2] || (_cache[2] = $event => (tab.value = 'panel'))
            }, "详情", 2 /* CLASS */))
          : ig("v-if", true)
      ]),
      ia("button", {
        class: "icon-btn",
        style: {"margin-left":"auto"},
        title: "关闭",
        onClick: _cache[3] || (_cache[3] = $event => (tA(store).assistant = false))
      }, "✕")
    ]),
    ia("div", _hoisted_4$l, [
      ig(" 应用宫格 "),
      (tab.value === 'apps' && !tA(store).panel)
        ? (r4(), ie("div", _hoisted_5$l, [
            _cache[17] || (_cache[17] = ia("div", { class: "section-label" }, "应 用", -1 /* CACHED */)),
            ia("div", _hoisted_6$l, [
              (r4(), ie(rQ, null, lj(apps, (a) => {
                return ia("div", {
                  key: a.key,
                  class: "app-item",
                  onClick: $event => (nav(a.go))
                }, [
                  ia("div", _hoisted_8$l, ea(a.ico), 1 /* TEXT */),
                  ia("div", null, [
                    ia("div", _hoisted_9$l, ea(a.nm), 1 /* TEXT */),
                    ia("div", _hoisted_10$k, ea(a.ds), 1 /* TEXT */)
                  ])
                ], 8 /* PROPS */, _hoisted_7$l)
              }), 64 /* STABLE_FRAGMENT */))
            ]),
            _cache[18] || (_cache[18] = ia("div", { class: "section-label" }, "共 建", -1 /* CACHED */)),
            ia("div", _hoisted_11$k, [
              ia("div", {
                class: "app-item",
                onClick: _cache[4] || (_cache[4] = $event => (nav('/changelog')))
              }, [...(_cache[13] || (_cache[13] = [
                ia("div", { class: "ico" }, "更", -1 /* CACHED */),
                ia("div", null, [
                  ia("div", { class: "nm" }, "更新日志"),
                  ia("div", { class: "ds" }, "v1.1 新增内容")
                ], -1 /* CACHED */)
              ]))]),
              ia("div", {
                class: "app-item",
                onClick: _cache[5] || (_cache[5] = $event => (nav('/about')))
              }, [...(_cache[14] || (_cache[14] = [
                ia("div", { class: "ico" }, "计", -1 /* CACHED */),
                ia("div", null, [
                  ia("div", { class: "nm" }, "开发计划"),
                  ia("div", { class: "ds" }, "待开发与已采纳")
                ], -1 /* CACHED */)
              ]))]),
              ia("div", {
                class: "app-item",
                onClick: _cache[6] || (_cache[6] = $event => (nav('/about')))
              }, [...(_cache[15] || (_cache[15] = [
                ia("div", { class: "ico" }, "则", -1 /* CACHED */),
                ia("div", null, [
                  ia("div", { class: "nm" }, "读史记准则"),
                  ia("div", { class: "ds" }, "编辑凡例")
                ], -1 /* CACHED */)
              ]))]),
              ia("div", {
                class: "app-item",
                onClick: _cache[7] || (_cache[7] = $event => (nav('/about')))
              }, [...(_cache[16] || (_cache[16] = [
                ia("div", { class: "ico" }, "问", -1 /* CACHED */),
                ia("div", null, [
                  ia("div", { class: "nm" }, "常见问题"),
                  ia("div", { class: "ds" }, "使用与版权")
                ], -1 /* CACHED */)
              ]))])
            ]),
            _cache[19] || (_cache[19] = ia("div", { style: {"padding":"6px 14px 18px","color":"var(--muted)","font-size":"11px","line-height":"1.7"} }, " 正文以中华书局点校本为参校，白话译文为编者们自撰。本站为研究性演示项目。 ", -1 /* CACHED */))
          ]))
        : ig("v-if", true),
      ig(" 实体详情 "),
      (tA(store).panel && tab.value !== 'chat')
        ? (r4(), ie("div", _hoisted_12$k, [
            ia("button", {
              class: "chip ghost",
              style: {"margin-bottom":"10px"},
              onClick: _cache[8] || (_cache[8] = $event => {tA(store).panel = null; tab.value = 'apps';})
            }, "← 返回应用"),
            ig(" 人物 "),
            (person.value)
              ? (r4(), ie("div", _hoisted_13$j, [
                  ia("div", _hoisted_14$i, ea(person.value.name), 1 /* TEXT */),
                  ia("div", _hoisted_15$g, [
                    ia("span", _hoisted_16$f, ea(person.value.dynasty), 1 /* TEXT */),
                    ia("span", _hoisted_17$e, ea(person.value.identity), 1 /* TEXT */),
                    (person.value.years)
                      ? (r4(), ie("span", _hoisted_18$d, ea(person.value.years), 1 /* TEXT */))
                      : ig("v-if", true)
                  ]),
                  (person.value.aliases?.length)
                    ? (r4(), ie("div", _hoisted_19$d, [
                        _cache[20] || (_cache[20] = ia("b", null, "别名", -1 /* CACHED */)),
                        ia("span", null, ea(person.value.aliases.join("、")), 1 /* TEXT */)
                      ]))
                    : ig("v-if", true),
                  ia("div", _hoisted_20$b, ea(person.value.desc), 1 /* TEXT */),
                  _cache[22] || (_cache[22] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
                  (r4(true), ie(rQ, null, lj(relGroups.value, (g) => {
                    return (r4(), ie("div", {
                      class: "rel-group",
                      key: g.type
                    }, [
                      ia("div", _hoisted_21$b, ea(g.type), 1 /* TEXT */),
                      ia("div", _hoisted_22$a, [
                        (r4(true), ie(rQ, null, lj(g.list, (r) => {
                          return (r4(), ie("span", {
                            key: r.target.id + r.type,
                            class: "rel-pill",
                            onClick: $event => (openRel(r.target.id))
                          }, [
                            id(ea(r.target.name), 1 /* TEXT */),
                            ia("span", _hoisted_24$9, ea(r.label), 1 /* TEXT */)
                          ], 8 /* PROPS */, _hoisted_23$a))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ]))
                  }), 128 /* KEYED_FRAGMENT */)),
                  _cache[23] || (_cache[23] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
                  _cache[24] || (_cache[24] = ia("div", { class: "rel-group-title" }, "相关篇目", -1 /* CACHED */)),
                  ia("div", _hoisted_25$8, [
                    (r4(true), ie(rQ, null, lj(person.value.chapters, (no) => {
                      return (r4(), ie("span", {
                        key: no,
                        class: "rel-pill",
                        onClick: $event => (goto(no))
                      }, " 卷" + ea(no) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === no)?.title), 9 /* TEXT, PROPS */, _hoisted_26$8))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _cache[25] || (_cache[25] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
                  ia("div", _hoisted_27$7, [
                    _cache[21] || (_cache[21] = id(" 出现段落聚合 ", -1 /* CACHED */)),
                    ia("span", _hoisted_28$6, "（" + ea(mentionLoading.value ? "检索中…" : mentions.value.length + " 段") + "）", 1 /* TEXT */)
                  ]),
                  ia("div", _hoisted_29$6, [
                    (r4(true), ie(rQ, null, lj(mentions.value, (m) => {
                      return (r4(), ie("div", {
                        key: m.c + '-' + m.p,
                        class: "mention",
                        onClick: $event => (goto(m.c, m.p))
                      }, [
                        ia("div", _hoisted_31$6, "卷" + ea(m.c) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === m.c)?.title) + " · 第 " + ea(m.p) + " 段", 1 /* TEXT */),
                        id(" " + ea(tA(plainText)(m.o).slice(0, 68)) + "… ", 1 /* TEXT */)
                      ], 8 /* PROPS */, _hoisted_30$6))
                    }), 128 /* KEYED_FRAGMENT */)),
                    (!mentionLoading.value && !mentions.value.length)
                      ? (r4(), ie("div", _hoisted_32$6, "未检索到出现段落"))
                      : ig("v-if", true)
                  ])
                ]))
              : (place.value)
                ? (r4(), ie(rQ, { key: 1 }, [
                    ig(" 地名 "),
                    ia("div", null, [
                      ia("div", _hoisted_33$5, ea(place.value.name), 1 /* TEXT */),
                      ia("div", _hoisted_34$4, [
                        ia("span", _hoisted_35$4, ea(place.value.type), 1 /* TEXT */),
                        ia("span", _hoisted_36$4, "今 " + ea(place.value.modern), 1 /* TEXT */)
                      ]),
                      ia("div", _hoisted_37$3, ea(place.value.desc), 1 /* TEXT */),
                      ia("div", _hoisted_38$3, [
                        _cache[26] || (_cache[26] = ia("b", null, "坐标", -1 /* CACHED */)),
                        ia("span", null, ea(place.value.lon) + ", " + ea(place.value.lat), 1 /* TEXT */)
                      ]),
                      ia("button", {
                        class: "btn sm",
                        style: {"margin-top":"10px"},
                        onClick: _cache[9] || (_cache[9] = $event => (nav('/map')))
                      }, "在地图中查看 →"),
                      _cache[27] || (_cache[27] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
                      _cache[28] || (_cache[28] = ia("div", { class: "rel-group-title" }, "相关篇目", -1 /* CACHED */)),
                      ia("div", _hoisted_39$3, [
                        (r4(true), ie(rQ, null, lj(place.value.chapters, (no) => {
                          return (r4(), ie("span", {
                            key: no,
                            class: "rel-pill",
                            onClick: $event => (goto(no))
                          }, "卷" + ea(no) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === no)?.title), 9 /* TEXT, PROPS */, _hoisted_40$2))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]),
                      _cache[29] || (_cache[29] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
                      ia("div", _hoisted_41$2, "出现段落聚合（" + ea(mentions.value.length) + " 段）", 1 /* TEXT */),
                      ia("div", _hoisted_42$2, [
                        (r4(true), ie(rQ, null, lj(mentions.value, (m) => {
                          return (r4(), ie("div", {
                            key: m.c + '-' + m.p,
                            class: "mention",
                            onClick: $event => (goto(m.c, m.p))
                          }, [
                            ia("div", _hoisted_44$2, "卷" + ea(m.c) + " · 第 " + ea(m.p) + " 段", 1 /* TEXT */),
                            id(" " + ea(tA(plainText)(m.o).slice(0, 66)) + "… ", 1 /* TEXT */)
                          ], 8 /* PROPS */, _hoisted_43$2))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                : (term.value)
                  ? (r4(), ie(rQ, { key: 2 }, [
                      ig(" 词条 "),
                      ia("div", null, [
                        ia("div", _hoisted_45$2, ea(term.value.term), 1 /* TEXT */),
                        ia("div", _hoisted_46$2, [
                          ia("span", _hoisted_47$2, ea(term.value.category), 1 /* TEXT */)
                        ]),
                        ia("div", _hoisted_48$2, ea(term.value.definition), 1 /* TEXT */),
                        _cache[30] || (_cache[30] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
                        _cache[31] || (_cache[31] = ia("div", { class: "rel-group-title" }, "相关篇目", -1 /* CACHED */)),
                        ia("div", _hoisted_49$2, [
                          (r4(true), ie(rQ, null, lj(term.value.chapters, (no) => {
                            return (r4(), ie("span", {
                              key: no,
                              class: "rel-pill",
                              onClick: $event => (goto(no))
                            }, "卷" + ea(no), 9 /* TEXT, PROPS */, _hoisted_50$2))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                  : (r4(), ie("div", _hoisted_51$2, "暂无该条目。"))
          ]))
        : ig("v-if", true),
      ig(" AI 对话 "),
      (tab.value === 'chat')
        ? (r4(), ie("div", _hoisted_52$2, [
            ia("div", _hoisted_53$1, [
              ia("span", null, ea(tA(store).ai && tA(store).ai.key ? "已接入：" + tA(store).ai.model : "本地检索模式"), 1 /* TEXT */),
              _cache[32] || (_cache[32] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
              ia("button", {
                class: "chip ghost",
                onClick: _cache[10] || (_cache[10] = $event => (tA(store).dialogue = { kind: 'settings' }))
              }, "设置模型")
            ]),
            ia("div", {
              class: "chat-log",
              ref_key: "logEl",
              ref: logEl
            }, [
              (r4(true), ie(rQ, null, lj(msgs.value, (m, i) => {
                return (r4(), ie("div", {
                  key: i,
                  class: Y(["msg", { me: m.who === 'me' }])
                }, [
                  ia("div", _hoisted_54$1, ea(m.who === "me" ? "我" : "史"), 1 /* TEXT */),
                  ia("div", _hoisted_55$1, [
                    ia("div", _hoisted_56$1, ea(m.text), 1 /* TEXT */),
                    (r4(true), ie(rQ, null, lj(m.srcs || [], (s, j) => {
                      return (r4(), ie("a", {
                        key: j,
                        class: "src",
                        onClick: $event => (goto(s.no, s.p))
                      }, "↗ " + ea(s.label), 9 /* TEXT, PROPS */, _hoisted_57$1))
                    }), 128 /* KEYED_FRAGMENT */))
                  ])
                ], 2 /* CLASS */))
              }), 128 /* KEYED_FRAGMENT */)),
              (busy.value)
                ? (r4(), ie("div", _hoisted_58$1, [...(_cache[33] || (_cache[33] = [
                    ia("div", { class: "who" }, "史", -1 /* CACHED */),
                    ia("div", { class: "bubble" }, "正在翻检卷帙……", -1 /* CACHED */)
                  ]))]))
                : ig("v-if", true)
            ], 512 /* NEED_PATCH */),
            ia("div", _hoisted_59$1, [
              nu(ia("textarea", {
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((input).value = $event)),
                placeholder: "向《史记》提问，如：项羽为何不肯过江东？",
                onKeydown: oc(oa(ask, ["exact","prevent"]), ["enter"])
              }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_60$1), [
                [s4, input.value]
              ]),
              ia("button", {
                class: "btn primary",
                onClick: ask
              }, "问")
            ])
          ]))
        : ig("v-if", true)
    ])
  ]))
}
}

};

const _hoisted_1$k = {
  class: "modal",
  style: {"width":"560px"}
};
const _hoisted_2$k = { class: "modal-head" };
const _hoisted_3$k = { class: "modal-body" };
const _hoisted_4$k = { class: "setting-row" };
const _hoisted_5$k = { class: "seg" };
const _hoisted_6$k = ["onClick"];
const _hoisted_7$k = { class: "setting-row" };
const _hoisted_8$k = { class: "seg" };
const _hoisted_9$k = { class: "setting-row" };
const _hoisted_10$j = ["max", "value"];
const _hoisted_11$j = { style: {"font-size":"12px","color":"var(--muted)"} };
const _hoisted_12$j = { class: "setting-row" };
const _hoisted_13$i = ["value"];
const _hoisted_14$h = { style: {"font-size":"12px","color":"var(--muted)"} };
const _hoisted_15$f = { class: "setting-row" };
const _hoisted_16$e = { class: "seg" };
const _hoisted_17$d = { class: "setting-row" };
const _hoisted_18$c = { class: "seg" };
const _hoisted_19$c = { class: "setting-row" };
const _hoisted_20$a = { class: "seg" };
const _hoisted_21$a = { class: "setting-row" };
const _hoisted_22$9 = { class: "setting-row" };
const _hoisted_23$9 = { class: "setting-row" };
const _hoisted_24$8 = {
  class: "setting-row",
  style: {"border-bottom":"none"}
};
const _hoisted_25$7 = ["disabled"];
const _hoisted_26$7 = { style: {"font-size":"12px","color":"var(--muted)"} };


var SettingsModal = {
  __name: 'SettingsModal',
  emits: ["close"],
  setup(__props) {


const sizes = [16, 17, 18, 19, 20, 21, 22, 24];
const modes = [
  { k: "day", n: "日间" },
  { k: "eye", n: "护眼" },
  { k: "night", n: "夜间" },
];
function reset() {
  Object.assign(store.settings, { mode: "day", font: "serif", size: 19, lineHeight: 2.05, layout: "dual", pinyin: false, showEntities: true });
  toast("已恢复默认排版");
}
function clearAll() {
  localStorage.removeItem("dushiji.state.v1");
  location.reload();
}

const testing = tx(false);
const testMsg = tx("");
async function testAI() {
  if (!store.ai.key) { testMsg.value = "请先填写 API Key"; return; }
  testing.value = true;
  testMsg.value = "";
  try {
    const r = await fetch(store.ai.endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${store.ai.key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: store.ai.model, messages: [{ role: "user", content: "只回复：连接成功" }], max_tokens: 16 }),
    });
    if (!r.ok) throw new Error("HTTP " + r.status + " " + (await r.text()).slice(0, 80));
    const j = await r.json();
    testMsg.value = "✓ " + (j.choices?.[0]?.message?.content || "连接成功").slice(0, 24);
  } catch (e) {
    testMsg.value = "✗ " + e.message.slice(0, 80);
  }
  testing.value = false;
}

return (_ctx, _cache) => {
  return (r4(), ie("div", {
    class: "overlay",
    onClick: _cache[17] || (_cache[17] = oa($event => (_ctx.$emit('close')), ["self"]))
  }, [
    ia("div", _hoisted_1$k, [
      ia("div", _hoisted_2$k, [
        _cache[18] || (_cache[18] = ia("b", null, "阅读设置", -1 /* CACHED */)),
        ia("button", {
          class: "icon-btn",
          style: {"margin-left":"auto"},
          onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('close')))
        }, "✕")
      ]),
      ia("div", _hoisted_3$k, [
        ia("div", _hoisted_4$k, [
          _cache[19] || (_cache[19] = ia("span", { class: "lb" }, "阅读模式", -1 /* CACHED */)),
          ia("div", _hoisted_5$k, [
            (r4(), ie(rQ, null, lj(modes, (m) => {
              return ia("button", {
                key: m.k,
                class: Y({ on: tA(store).settings.mode === m.k }),
                onClick: $event => (tA(store).settings.mode = m.k)
              }, ea(m.n), 11 /* TEXT, CLASS, PROPS */, _hoisted_6$k)
            }), 64 /* STABLE_FRAGMENT */))
          ])
        ]),
        ia("div", _hoisted_7$k, [
          _cache[20] || (_cache[20] = ia("span", { class: "lb" }, "正文字体", -1 /* CACHED */)),
          ia("div", _hoisted_8$k, [
            ia("button", {
              class: Y({ on: tA(store).settings.font === 'serif' }),
              onClick: _cache[1] || (_cache[1] = $event => (tA(store).settings.font = 'serif'))
            }, "宋体", 2 /* CLASS */),
            ia("button", {
              class: Y({ on: tA(store).settings.font === 'kai' }),
              onClick: _cache[2] || (_cache[2] = $event => (tA(store).settings.font = 'kai'))
            }, "楷体", 2 /* CLASS */),
            ia("button", {
              class: Y({ on: tA(store).settings.font === 'sans' }),
              onClick: _cache[3] || (_cache[3] = $event => (tA(store).settings.font = 'sans'))
            }, "黑体", 2 /* CLASS */)
          ])
        ]),
        ia("div", _hoisted_9$k, [
          _cache[21] || (_cache[21] = ia("span", { class: "lb" }, "字号", -1 /* CACHED */)),
          ia("input", {
            type: "range",
            min: "0",
            max: sizes.length - 1,
            step: "1",
            value: sizes.indexOf(tA(store).settings.size),
            onInput: _cache[4] || (_cache[4] = $event => (tA(store).settings.size = sizes[$event.target.value]))
          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_10$j),
          ia("span", _hoisted_11$j, ea(tA(store).settings.size) + "px", 1 /* TEXT */)
        ]),
        ia("div", _hoisted_12$j, [
          _cache[22] || (_cache[22] = ia("span", { class: "lb" }, "行距", -1 /* CACHED */)),
          ia("input", {
            type: "range",
            min: "1.6",
            max: "2.6",
            step: "0.05",
            value: tA(store).settings.lineHeight,
            onInput: _cache[5] || (_cache[5] = $event => (tA(store).settings.lineHeight = Number($event.target.value)))
          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13$i),
          ia("span", _hoisted_14$h, ea(tA(store).settings.lineHeight.toFixed(2)), 1 /* TEXT */)
        ]),
        ia("div", _hoisted_15$f, [
          _cache[23] || (_cache[23] = ia("span", { class: "lb" }, "版式", -1 /* CACHED */)),
          ia("div", _hoisted_16$e, [
            ia("button", {
              class: Y({ on: tA(store).settings.layout === 'dual' }),
              onClick: _cache[6] || (_cache[6] = $event => (tA(store).settings.layout = 'dual'))
            }, "文白对照", 2 /* CLASS */),
            ia("button", {
              class: Y({ on: tA(store).settings.layout === 'orig' }),
              onClick: _cache[7] || (_cache[7] = $event => (tA(store).settings.layout = 'orig'))
            }, "仅原文", 2 /* CLASS */),
            ia("button", {
              class: Y({ on: tA(store).settings.layout === 'trans' }),
              onClick: _cache[8] || (_cache[8] = $event => (tA(store).settings.layout = 'trans'))
            }, "仅译文", 2 /* CLASS */)
          ])
        ]),
        ia("div", _hoisted_17$d, [
          _cache[24] || (_cache[24] = ia("span", { class: "lb" }, "生僻字注音", -1 /* CACHED */)),
          ia("div", _hoisted_18$c, [
            ia("button", {
              class: Y({ on: !tA(store).settings.pinyin }),
              onClick: _cache[9] || (_cache[9] = $event => (tA(store).settings.pinyin = false))
            }, "关闭", 2 /* CLASS */),
            ia("button", {
              class: Y({ on: tA(store).settings.pinyin }),
              onClick: _cache[10] || (_cache[10] = $event => (tA(store).settings.pinyin = true))
            }, "开启", 2 /* CLASS */)
          ]),
          _cache[25] || (_cache[25] = ia("span", { style: {"font-size":"11.5px","color":"var(--muted)"} }, "如「徇(xùn)齐」", -1 /* CACHED */))
        ]),
        ia("div", _hoisted_19$c, [
          _cache[26] || (_cache[26] = ia("span", { class: "lb" }, "人物地名高亮", -1 /* CACHED */)),
          ia("div", _hoisted_20$a, [
            ia("button", {
              class: Y({ on: !tA(store).settings.showEntities }),
              onClick: _cache[11] || (_cache[11] = $event => (tA(store).settings.showEntities = false))
            }, "关闭", 2 /* CLASS */),
            ia("button", {
              class: Y({ on: tA(store).settings.showEntities }),
              onClick: _cache[12] || (_cache[12] = $event => (tA(store).settings.showEntities = true))
            }, "开启", 2 /* CLASS */)
          ]),
          _cache[27] || (_cache[27] = ia("span", { style: {"font-size":"11.5px","color":"var(--muted)"} }, "点击可查看人物、地名、词条", -1 /* CACHED */))
        ]),
        ia("div", {
          class: "setting-row",
          style: {"border-bottom":"none"}
        }, [
          ia("button", {
            class: "btn sm",
            onClick: reset
          }, "恢复默认"),
          ia("button", {
            class: "btn sm danger",
            onClick: clearAll
          }, "清除本站本地数据")
        ]),
        _cache[32] || (_cache[32] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
        _cache[33] || (_cache[33] = ia("div", { class: "sec-title" }, "史记助手 · 大模型", -1 /* CACHED */)),
        _cache[34] || (_cache[34] = ia("div", {
          class: "desc",
          style: {"font-size":"12px","color":"var(--muted)","margin-bottom":"8px"}
        }, " 填入任意 OpenAI 兼容接口即可让助手真正回答问题（推荐 DeepSeek）。Key 只保存在本机浏览器，不会上传到别处。 未填写时助手使用本地全文检索模式。 ", -1 /* CACHED */)),
        ia("div", _hoisted_21$a, [
          _cache[28] || (_cache[28] = ia("span", {
            class: "lb",
            style: {"min-width":"64px"}
          }, "接口地址", -1 /* CACHED */)),
          nu(ia("input", {
            "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((tA(store).ai.endpoint) = $event)),
            class: "search-input",
            style: {"flex":"1"},
            placeholder: "https://api.deepseek.com/v1/chat/completions"
          }, null, 512 /* NEED_PATCH */), [
            [s4, tA(store).ai.endpoint]
          ])
        ]),
        ia("div", _hoisted_22$9, [
          _cache[29] || (_cache[29] = ia("span", {
            class: "lb",
            style: {"min-width":"64px"}
          }, "模型名", -1 /* CACHED */)),
          nu(ia("input", {
            "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => ((tA(store).ai.model) = $event)),
            class: "search-input",
            style: {"flex":"1"},
            placeholder: "deepseek-chat"
          }, null, 512 /* NEED_PATCH */), [
            [s4, tA(store).ai.model]
          ])
        ]),
        ia("div", _hoisted_23$9, [
          _cache[30] || (_cache[30] = ia("span", {
            class: "lb",
            style: {"min-width":"64px"}
          }, "API Key", -1 /* CACHED */)),
          nu(ia("input", {
            "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((tA(store).ai.key) = $event)),
            type: "password",
            class: "search-input",
            style: {"flex":"1"},
            placeholder: "sk-...",
            autocomplete: "off"
          }, null, 512 /* NEED_PATCH */), [
            [s4, tA(store).ai.key]
          ])
        ]),
        ia("div", _hoisted_24$8, [
          ia("button", {
            class: "btn sm",
            onClick: testAI,
            disabled: testing.value
          }, ea(testing.value ? "测试中…" : "测试连接"), 9 /* TEXT, PROPS */, _hoisted_25$7),
          ia("span", _hoisted_26$7, ea(testMsg.value), 1 /* TEXT */),
          _cache[31] || (_cache[31] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
          ia("button", {
            class: "btn sm danger",
            onClick: _cache[16] || (_cache[16] = $event => {tA(store).ai.key = ''; testMsg.value = '已清除 Key';})
          }, "清除 Key")
        ])
      ])
    ])
  ]))
}
}

};

const _hoisted_1$j = { class: "modal" };
const _hoisted_2$j = { class: "modal-head" };
const _hoisted_3$j = { key: 0 };
const _hoisted_4$j = { key: 1 };
const _hoisted_5$j = { key: 2 };
const _hoisted_6$j = { key: 3 };
const _hoisted_7$j = { class: "modal-body" };
const _hoisted_8$j = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"15px","color":"var(--ink)"}
};
const _hoisted_9$j = {
  key: 0,
  class: "desc",
  style: {"margin-top":"10px"}
};
const _hoisted_10$i = { style: {"display":"flex","gap":"8px","margin-top":"16px"} };
const _hoisted_11$i = { style: {"font-family":"var(--serif)"} };
const _hoisted_12$i = {
  class: "desc",
  style: {"margin-top":"4px"}
};
const _hoisted_13$h = { style: {"display":"flex","align-items":"baseline","gap":"8px"} };
const _hoisted_14$g = { style: {"font-family":"var(--serif)","font-size":"16px"} };
const _hoisted_15$e = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_16$d = {
  class: "poem",
  style: {"margin-top":"6px"}
};
const _hoisted_17$c = {
  class: "desc",
  style: {"margin-top":"6px","color":"var(--ink-3)"}
};


var DialogueHost = {
  __name: 'DialogueHost',
  setup(__props) {

const d = iD(() => store.dialogue);
function close() { store.dialogue = null; }
function del(a) {
  removeAnnotation(a.id);
  store.toast = "批注已删除";
  setTimeout(() => (store.toast = ""), 1600);
  close();
}

return (_ctx, _cache) => {
  return (d.value && d.value.kind !== 'settings')
    ? (r4(), ie("div", {
        key: 0,
        class: "overlay",
        onClick: oa(close, ["self"])
      }, [
        ia("div", _hoisted_1$j, [
          ia("div", _hoisted_2$j, [
            (d.value.kind === 'annotation')
              ? (r4(), ie("b", _hoisted_3$j, "我的批注"))
              : (d.value.kind === 'notes')
                ? (r4(), ie("b", _hoisted_4$j, "注释"))
                : (d.value.kind === 'poems')
                  ? (r4(), ie("b", _hoisted_5$j, "后人咏史"))
                  : (r4(), ie("b", _hoisted_6$j, "详情")),
            ia("button", {
              class: "icon-btn",
              style: {"margin-left":"auto"},
              onClick: close
            }, "✕")
          ]),
          ia("div", _hoisted_7$j, [
            (d.value.kind === 'annotation')
              ? (r4(), ie(rQ, { key: 0 }, [
                  ia("div", _hoisted_8$j, " 「" + ea(d.value.data.quote) + "」 ", 1 /* TEXT */),
                  (d.value.data.note)
                    ? (r4(), ie("div", _hoisted_9$j, "批注：" + ea(d.value.data.note), 1 /* TEXT */))
                    : ig("v-if", true),
                  ia("div", _hoisted_10$i, [
                    ia("button", {
                      class: "btn sm",
                      onClick: _cache[0] || (_cache[0] = $event => {tA(go)(`/c/${d.value.data.chapter}/${d.value.data.para}`); close();})
                    }, "定位到原文"),
                    _cache[2] || (_cache[2] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
                    ia("button", {
                      class: "btn sm danger",
                      onClick: _cache[1] || (_cache[1] = $event => (del(d.value.data)))
                    }, "删除批注")
                  ])
                ], 64 /* STABLE_FRAGMENT */))
              : (d.value.kind === 'notes')
                ? (r4(true), ie(rQ, { key: 1 }, lj(d.value.data, (n) => {
                    return (r4(), ie("div", {
                      key: n.n,
                      style: {"padding":"8px 0","border-bottom":"1px dashed var(--line-2)"}
                    }, [
                      ia("b", _hoisted_11$i, ea(n.n) + ". " + ea(n.term), 1 /* TEXT */),
                      ia("div", _hoisted_12$i, ea(n.text), 1 /* TEXT */)
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                : (d.value.kind === 'poems')
                  ? (r4(true), ie(rQ, { key: 2 }, lj(d.value.data, (p) => {
                      return (r4(), ie("div", {
                        key: p.id,
                        style: {"padding":"12px 0","border-bottom":"1px dashed var(--line-2)"}
                      }, [
                        ia("div", _hoisted_13$h, [
                          ia("b", _hoisted_14$g, ea(p.title), 1 /* TEXT */),
                          ia("span", _hoisted_15$e, ea(p.dynasty) + " · " + ea(p.author), 1 /* TEXT */)
                        ]),
                        ia("div", _hoisted_16$d, [
                          (r4(true), ie(rQ, null, lj(p.lines, (l, i) => {
                            return (r4(), ie("span", {
                              key: i,
                              class: "l"
                            }, ea(l), 1 /* TEXT */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]),
                        ia("div", _hoisted_17$c, ea(p.note), 1 /* TEXT */)
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  : ig("v-if", true)
          ])
        ])
      ]))
    : ig("v-if", true)
}
}

};

// 极简 Markdown 渲染（标题 / 粗体 / 列表 / 引用 / 段落 / [[篇名]] 链接文本）
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderMD(md) {
  if (!md) return "";
  const lines = md.replace(/\r/g, "").split("\n");
  const out = [];
  let inUl = false;
  const closeUl = () => { if (inUl) { out.push("</ul>"); inUl = false; } };

  for (let raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) { closeUl(); continue; }

    const h = line.match(/^(#{1,5})\s+(.+)$/);
    if (h) {
      closeUl();
      const lv = Math.min(5, h[1].length + 2);
      out.push(`<h${lv} class="md-h">${inline(h[2])}</h${lv}>`);
      continue;
    }
    const li = line.match(/^\s*[-*]\s+(.+)$/);
    if (li) {
      if (!inUl) { out.push('<ul class="md-ul">'); inUl = true; }
      out.push(`<li>${inline(li[1])}</li>`);
      continue;
    }
    if (/^>\s?/.test(line)) {
      closeUl();
      out.push(`<blockquote class="md-q">${inline(line.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }
    if (/^[-*_]{3,}$/.test(line.trim())) { closeUl(); out.push("<hr />"); continue; }
    closeUl();
    out.push(`<p class="md-p">${inline(line)}</p>`);
  }
  closeUl();
  return out.join("");
}

function inline(s) {
  let t = esc(s);
  t = t.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\[\[(.+?)\]\]/g, "$1");
  t = t.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return t;
}

const _hoisted_1$i = { class: "annot-panel" };
const _hoisted_2$i = { class: "as-head" };
const _hoisted_3$i = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_4$i = { style: {"padding":"8px 12px","display":"flex","gap":"6px","flex-wrap":"wrap","border-bottom":"1px solid var(--line-2)"} };
const _hoisted_5$i = {
  class: "as-body",
  style: {"padding":"10px 12px"}
};
const _hoisted_6$i = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_7$i = { class: "annot-meta" };
const _hoisted_8$i = { style: {"margin-left":"auto","font-size":"10.5px","color":"var(--muted)"} };
const _hoisted_9$i = ["onClick"];
const _hoisted_10$h = { style: {"display":"flex","gap":"6px","margin-top":"6px"} };
const _hoisted_11$h = ["onClick"];
const _hoisted_12$h = {
  key: 0,
  class: "annot-note"
};
const _hoisted_13$g = { class: "annot-actions" };
const _hoisted_14$f = ["onClick"];
const _hoisted_15$d = ["onClick"];
const _hoisted_16$c = ["onClick"];


var AnnotationPanel = {
  __name: 'AnnotationPanel',
  props: { chapter: { type: Number, default: 1 } },
  emits: ["close"],
  setup(__props, { emit: __emit }) {

const props = __props;
const emit = __emit;

const scope = tx("chapter");
const editing = tx(null);
const editText = tx("");

const list = iD(() => {
  const all = [...store.annotations].sort((a, b) => (a.chapter - b.chapter) || (a.para - b.para));
  if (scope.value === "chapter") return all.filter((a) => a.chapter === props.chapter);
  return all;
});

const titleOf = (no) => store.index?.chapters.find((c) => c.no === Number(no))?.title || "";

function jump(a) {
  go(`/c/${a.chapter}/${a.para}`);
}
function startEdit(a) {
  editing.value = a.id;
  editText.value = a.note || "";
}
function saveEdit(a) {
  updateAnnotation(a.id, { note: editText.value.trim() });
  editing.value = null;
  editText.value = "";
}
function del(a) {
  removeAnnotation(a.id);
  toast("批注已删除");
}

function exportJSON() {
  const data = JSON.stringify({ version: 1, annotations: store.annotations }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `读史记-批注-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("已导出批注");
}

const fileEl = tx(null);
function importJSON(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(String(reader.result));
      const arr = Array.isArray(obj) ? obj : obj.annotations || [];
      const valid = arr.filter((x) => x && x.chapter && x.para && x.quote);
      const exist = new Set(store.annotations.map((a) => a.chapter + ":" + a.para + ":" + a.quote));
      const add = valid.filter((x) => !exist.has(x.chapter + ":" + x.para + ":" + x.quote));
      store.annotations = [...store.annotations, ...add.map((x) => ({ id: "a" + Math.random().toString(36).slice(2), ts: Date.now(), color: x.color || "hl-y", ...x }))];
      toast(`导入 ${add.length} 条批注`);
    } catch (err) {
      toast("导入失败：文件格式不对");
    }
  };
  reader.readAsText(f);
  e.target.value = "";
}

return (_ctx, _cache) => {
  return (r4(), ie("aside", _hoisted_1$i, [
    ia("div", _hoisted_2$i, [
      _cache[6] || (_cache[6] = ia("b", { style: {"font-family":"var(--serif)","font-size":"15px"} }, "批注", -1 /* CACHED */)),
      ia("span", _hoisted_3$i, ea(list.value.length) + " 条", 1 /* TEXT */),
      ia("button", {
        class: "icon-btn",
        style: {"margin-left":"auto"},
        onClick: _cache[0] || (_cache[0] = $event => (emit('close')))
      }, "✕")
    ]),
    ia("div", _hoisted_4$i, [
      ia("button", {
        class: Y(["filter-pill", { on: scope.value === 'chapter' }]),
        onClick: _cache[1] || (_cache[1] = $event => (scope.value = 'chapter'))
      }, "本篇", 2 /* CLASS */),
      ia("button", {
        class: Y(["filter-pill", { on: scope.value === 'all' }]),
        onClick: _cache[2] || (_cache[2] = $event => (scope.value = 'all'))
      }, "全部", 2 /* CLASS */),
      _cache[7] || (_cache[7] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
      ia("button", {
        class: "chip ghost",
        onClick: exportJSON
      }, "导出"),
      ia("button", {
        class: "chip ghost",
        onClick: _cache[3] || (_cache[3] = $event => (fileEl.value.click()))
      }, "导入"),
      ia("input", {
        ref_key: "fileEl",
        ref: fileEl,
        type: "file",
        accept: "application/json",
        style: {"display":"none"},
        onChange: importJSON
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)
    ]),
    ia("div", _hoisted_5$i, [
      (!list.value.length)
        ? (r4(), ie("div", _hoisted_6$i, " 还没有批注。阅读时选中原文，即可划线并写下批注；批注会实时显示在正文中，并汇总在这里。 "))
        : ig("v-if", true),
      (r4(true), ie(rQ, null, lj(list.value, (a) => {
        return (r4(), ie("div", {
          key: a.id,
          class: "annot-item"
        }, [
          ia("div", _hoisted_7$i, [
            ia("span", null, "卷" + ea(a.chapter) + " · " + ea(titleOf(a.chapter)) + " · 第 " + ea(a.para) + " 段", 1 /* TEXT */),
            ia("span", _hoisted_8$i, ea(new Date(a.ts).toLocaleDateString("zh-CN")), 1 /* TEXT */)
          ]),
          ia("div", {
            class: Y(["annot-quote", a.color]),
            onClick: $event => (jump(a))
          }, "「" + ea(a.quote) + "」", 11 /* TEXT, CLASS, PROPS */, _hoisted_9$i),
          (editing.value === a.id)
            ? (r4(), ie(rQ, { key: 0 }, [
                nu(ia("textarea", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((editText).value = $event)),
                  class: "annot-edit",
                  placeholder: "批注内容"
                }, null, 512 /* NEED_PATCH */), [
                  [s4, editText.value]
                ]),
                ia("div", _hoisted_10$h, [
                  ia("button", {
                    class: "btn sm primary",
                    onClick: $event => (saveEdit(a))
                  }, "保存", 8 /* PROPS */, _hoisted_11$h),
                  ia("button", {
                    class: "btn sm",
                    onClick: _cache[5] || (_cache[5] = $event => (editing.value = null))
                  }, "取消")
                ])
              ], 64 /* STABLE_FRAGMENT */))
            : (r4(), ie(rQ, { key: 1 }, [
                (a.note)
                  ? (r4(), ie("div", _hoisted_12$h, ea(a.note), 1 /* TEXT */))
                  : ig("v-if", true),
                ia("div", _hoisted_13$g, [
                  ia("button", {
                    class: "chip ghost",
                    onClick: $event => (jump(a))
                  }, "定位", 8 /* PROPS */, _hoisted_14$f),
                  ia("button", {
                    class: "chip ghost",
                    onClick: $event => (startEdit(a))
                  }, ea(a.note ? "编辑" : "补写"), 9 /* TEXT, PROPS */, _hoisted_15$d),
                  ia("button", {
                    class: "chip ghost",
                    onClick: $event => (del(a))
                  }, "删除", 8 /* PROPS */, _hoisted_16$c)
                ])
              ], 64 /* STABLE_FRAGMENT */))
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}
}

};

const _hoisted_1$h = { class: "reader-bar" };
const _hoisted_2$h = { class: "crumb" };
const _hoisted_3$h = { style: {"font-size":"11.5px"} };
const _hoisted_4$h = { class: "reader-tools" };
const _hoisted_5$h = {
  class: "seg",
  title: "版式"
};
const _hoisted_6$h = { class: "reading" };
const _hoisted_7$h = { class: "chapter-head" };
const _hoisted_8$h = { class: "cat" };
const _hoisted_9$h = { class: "meta" };
const _hoisted_10$g = { key: 0 };
const _hoisted_11$g = { key: 1 };
const _hoisted_12$g = {
  key: 0,
  class: "panel",
  style: {"margin-bottom":"22px"}
};
const _hoisted_13$f = { class: "panel-head" };
const _hoisted_14$e = {
  key: 0,
  class: "panel-body"
};
const _hoisted_15$c = {
  class: "desc",
  style: {"white-space":"pre-line"}
};
const _hoisted_16$b = {
  class: "para-chips",
  style: {"margin-top":"12px"}
};
const _hoisted_17$b = ["onClick"];
const _hoisted_18$b = ["onClick"];
const _hoisted_19$b = ["id"];
const _hoisted_20$9 = {
  key: 0,
  class: "para-sec"
};
const _hoisted_21$9 = { class: "para-chips" };
const _hoisted_22$8 = ["onClick"];
const _hoisted_23$8 = ["onClick"];
const _hoisted_24$7 = ["onClick"];
const _hoisted_25$6 = ["onClick"];
const _hoisted_26$6 = ["onClick"];
const _hoisted_27$6 = {
  class: "para-no",
  style: {"position":"static"}
};
const _hoisted_28$5 = { class: "pcols" };
const _hoisted_29$5 = { class: "para" };
const _hoisted_30$5 = ["innerHTML"];
const _hoisted_31$5 = { class: "para" };
const _hoisted_32$5 = {
  key: 0,
  class: "text-trans"
};
const _hoisted_33$4 = {
  key: 1,
  class: "text-trans",
  style: {"color":"var(--muted)"}
};
const _hoisted_34$3 = {
  key: 1,
  class: "desc",
  style: {"text-align":"center","padding":"60px","color":"var(--muted)"}
};
const _hoisted_35$3 = {
  key: 2,
  style: {"margin-top":"34px"}
};
const _hoisted_36$3 = { class: "panel-head" };
const _hoisted_37$2 = { class: "panel-body" };
const _hoisted_38$2 = ["innerHTML"];
const _hoisted_39$2 = {
  class: "panel",
  style: {"margin-top":"20px"}
};
const _hoisted_40$1 = { class: "panel-head" };
const _hoisted_41$1 = { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_42$1 = {
  key: 0,
  class: "panel-body"
};
const _hoisted_43$1 = { style: {"font-family":"var(--serif)","color":"var(--ink)"} };
const _hoisted_44$1 = { class: "desc" };
const _hoisted_45$1 = { style: {"display":"flex","gap":"10px","margin-top":"26px","flex-wrap":"wrap"} };
const _hoisted_46$1 = { style: {"font-family":"var(--serif)","font-size":"13px","color":"var(--ink-2)","max-height":"54px","overflow":"hidden"} };
const _hoisted_47$1 = { class: "row" };
const _hoisted_48$1 = ["onClick"];
const _hoisted_49$1 = { style: {"font-size":"11px","color":"var(--muted)","margin-bottom":"4px"} };
const _hoisted_50$1 = { style: {"font-family":"var(--serif)"} };
const _hoisted_51$1 = {
  class: "desc",
  style: {"margin-top":"6px"}
};
const _hoisted_52$1 = {
  class: "modal",
  style: {"width":"680px"}
};
const _hoisted_53 = { class: "modal-head" };
const _hoisted_54 = { class: "modal-body" };
const _hoisted_55 = { style: {"display":"flex","gap":"8px","align-items":"center","margin-bottom":"6px"} };
const _hoisted_56 = {
  class: "vip-tag",
  style: {"background":"var(--accent-soft)","color":"var(--accent)"}
};
const _hoisted_57 = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_58 = {
  class: "mini-pill",
  style: {"margin-left":"auto"}
};
const _hoisted_59 = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"14px","line-height":"1.9"}
};
const _hoisted_60 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_61 = {
  class: "modal",
  style: {"width":"820px"}
};
const _hoisted_62 = { class: "modal-head" };
const _hoisted_63 = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_64 = { class: "modal-body" };
const _hoisted_65 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_66 = { class: "hs-head" };
const _hoisted_67 = ["onClick"];
const _hoisted_68 = { class: "hs-orig" };
const _hoisted_69 = {
  key: 0,
  class: "hs-trans"
};


var ReaderView = {
  __name: 'ReaderView',
  props: { route: { type: Object, required: true } },
  setup(__props) {

const props = __props;

const annotText = tx("");
const annotColor = tx("hl-y");
const winW = tx(typeof window !== "undefined" ? window.innerWidth : 1200);
const onResize = () => { winW.value = window.innerWidth; };

const matcher = iD(() => buildMatcher(store.entities));
const renderCache = new Map();
const showIntro = tx(true);
const notesOpen = tx(false);
const companionsOpen = tx(false);
const annotOpen = tx(false);
const myAnnots = iD(() => store.annotations.filter((a) => a.chapter === Number(props.route.no)));
const sel = tx(null);
const notePop = tx(null);

const chapter = iD(() => store.chapter);
const paras = iD(() => chapter.value?.paras || []);
const notes = iD(() => chapter.value?.notes || []);
const meta = iD(() => store.index?.chapters.find((c) => c.no === Number(props.route.no)));
const companions = iD(() => (store.companions?.companions || []).filter((c) => c.chapter === Number(props.route.no)));
const poems = iD(() => (store.poems?.poems || []).filter((p) => (p.chapters || []).includes(Number(props.route.no))));
const campaigns = iD(() => (store.campaigns?.campaigns || []).filter((c) => Number(c.chapter) === Number(props.route.no)));

/* 《汉书》资料对照 */
const hsLinks = iD(() => (store.hanshuLinks?.links || {})[Number(props.route.no)] || {});
const hsMap = iD(() => (store.hanshuMap?.map || []).filter((m) => m.shiji === Number(props.route.no)));
const hsTitle = (id) => (store.hanshuIndex?.chapters || []).find((c) => c.id === id)?.title || id;
const hsDrawer = tx(null);
const hsLoading = tx(false);
async function openHanshu(pi) {
  const arr = hsLinks.value[pi] || [];
  if (!arr.length) return;
  hsLoading.value = true;
  hsDrawer.value = { items: [], para: pi };
  const items = [];
  for (const l of arr) {
    try {
      const ch = await loadHanshuText(l.h);
      items.push({ id: l.h, p: l.p, title: ch.title, text: ch.paras[l.p] || "", trans: (ch.trans || [])[l.p] || "" });
    } catch {}
  }
  hsDrawer.value = { items, para: pi };
  hsLoading.value = false;
}

function entitiesIn(text) {
  const m = matcher.value;
  if (!m || !m.re) return [];
  m.re.lastIndex = 0;
  const found = new Map();
  const plain = plainText(text);
  let hit;
  while ((hit = m.re.exec(plain))) {
    const ent = m.map.get(hit[0]);
    if (ent) found.set(ent.id, ent);
  }
  return [...found.values()];
}
function personsIn(text) {
  return entitiesIn(text).filter((x) => x.type === "person");
}
function notesIn(text) {
  const plain = plainText(text);
  return notes.value.filter((n) => {
    const t = (n.term || "").split(/[、，,／/]/)[0].trim();
    return t && t.length >= 2 && plain.includes(t);
  });
}
function isTaishi(sec) { return !!sec && sec.indexOf("太史公") >= 0; }

function render(p, i) {
  const key = `${props.route.no}:${i}`;
  const anns = store.annotations.filter((a) => a.chapter === Number(props.route.no) && a.para === i + 1);
  const sig = JSON.stringify([store.settings.pinyin, store.settings.showEntities, anns.map((a) => a.id + a.color)]);
  const cached = renderCache.get(key);
  if (cached && cached.sig === sig) return cached.html;
  const html = renderParagraph(p.o, {
    matcher: matcher.value,
    notes: notes.value,
    annotations: anns,
    pinyin: store.settings.pinyin,
    showEntities: store.settings.showEntities,
  });
  renderCache.set(key, { sig, html });
  return html;
}

function secChanged(i) {
  if (i === 0) return true;
  return paras.value[i].sec !== paras.value[i - 1].sec;
}

/* 交互 */
function onReadingClick(e) {
  const ent = e.target.closest("[data-ent]");
  if (ent) {
    store.panel = { type: ent.dataset.ent, id: ent.dataset.id };
    store.assistant = true;
    return;
  }
  const note = e.target.closest("[data-note]");
  if (note) {
    const n = Number(note.dataset.note);
    const found = notes.value.find((x) => x.n === n);
    if (found) {
      const r = note.getBoundingClientRect();
      notePop.value = { ...found, x: r.left + window.scrollX, y: r.top + window.scrollY + 26 };
    }
    return;
  }
  const ann = e.target.closest("[data-ann]");
  if (ann) {
    const found = store.annotations.find((a) => a.id === ann.dataset.ann);
    if (found) store.dialogue = { kind: "annotation", data: found };
  }
}

function onMouseUp(e) {
  const box = e.currentTarget;
  setTimeout(() => {
    const s = window.getSelection();
    if (!s || s.isCollapsed) return;
    const txt = s.toString().trim();
    if (txt.length < 2 || txt.length > 160) return;
    const holder = s.anchorNode && s.anchorNode.parentElement ? s.anchorNode.parentElement.closest("[id^='p-']") : null;
    if (!holder || !box.contains(holder)) return;
    const rect = s.getRangeAt(0).getBoundingClientRect();
    if (!rect.width) return;
    sel.value = {
      chapter: Number(props.route.no),
      para: Number(holder.id.slice(2)),
      text: txt,
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY + 26,
    };
    notePop.value = null;
  }, 10);
}

function saveAnnotation() {
  if (!sel.value) return;
  addAnnotation({ chapter: sel.value.chapter, para: sel.value.para, quote: sel.value.text, note: annotText.value, color: annotColor.value });
  sel.value = null;
  annotText.value = "";
  window.getSelection()?.removeAllRanges();
  store.toast = "批注已保存";
  setTimeout(() => (store.toast = ""), 1800);
}

/* 进度 */
let io = null;
function setupObserver() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) {
        const n = Number(en.target.id.slice(2));
        store.currentPara = n;
        setProgress(props.route.no, n);
      }
    }
  }, { rootMargin: "-30% 0px -60% 0px" });
  t8(() => document.querySelectorAll("[id^='p-']").forEach((el) => io.observe(el)));
}

ny(() => store.chapter, () => {
  renderCache.clear();
  t8(setupObserver);
}, { immediate: true });

lS(() => {
  setupObserver();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
});
lw(() => {
  if (io) io.disconnect();
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onResize);
});
function onScroll() {
  if (sel.value) sel.value = null;
  if (notePop.value) notePop.value = null;
}

const prevNo = iD(() => (props.route.no > 1 ? props.route.no - 1 : null));
const nextNo = iD(() => (props.route.no < 130 ? props.route.no + 1 : null));
const prevTitle = iD(() => store.index?.chapters.find((c) => c.no === prevNo.value)?.title);
const nextTitle = iD(() => store.index?.chapters.find((c) => c.no === nextNo.value)?.title);

const selStyle = iD(() => {
  if (!sel.value) return {};
  const left = Math.min(Math.max(sel.value.x - 150, 12), winW.value - 320);
  return { left: left + "px", top: sel.value.y + "px" };
});
const noteStyle = iD(() => {
  if (!notePop.value) return {};
  const left = Math.min(Math.max(notePop.value.x - 150, 12), winW.value - 320);
  return { left: left + "px", top: notePop.value.y + "px" };
});

function openPerson(id) { store.panel = { type: "person", id }; store.assistant = true; }
function openSandbox(id) { go("/sandbox/" + id); }
function copyLink(i) {
  const url = `${location.origin}${location.pathname}#/c/${props.route.no}/${i + 1}`;
  if (navigator.clipboard) navigator.clipboard.writeText(url);
  store.toast = "段落链接已复制";
  setTimeout(() => (store.toast = ""), 1600);
}

return (_ctx, _cache) => {
  return (r4(), ie(rQ, null, [
    ia("div", _hoisted_1$h, [
      ia("button", {
        class: Y(["icon-btn", { on: tA(store).tocOpen }]),
        title: "目录",
        onClick: _cache[0] || (_cache[0] = $event => (tA(store).tocOpen = !tA(store).tocOpen))
      }, "☰", 2 /* CLASS */),
      ia("div", _hoisted_2$h, [
        _cache[25] || (_cache[25] = ia("span", null, "史记", -1 /* CACHED */)),
        _cache[26] || (_cache[26] = ia("span", { class: "sep" }, "/", -1 /* CACHED */)),
        ia("b", null, ea(chapter.value ? chapter.value.cat : ""), 1 /* TEXT */),
        _cache[27] || (_cache[27] = ia("span", { class: "sep" }, "/", -1 /* CACHED */)),
        ia("b", null, ea(chapter.value ? chapter.value.title : ""), 1 /* TEXT */),
        _cache[28] || (_cache[28] = ia("span", { class: "sep" }, "·", -1 /* CACHED */)),
        ia("span", _hoisted_3$h, "第 " + ea(tA(store).currentPara || 1) + " / " + ea(paras.value.length) + " 段", 1 /* TEXT */)
      ]),
      ia("div", _hoisted_4$h, [
        ia("div", _hoisted_5$h, [
          ia("button", {
            class: Y({ on: tA(store).settings.layout === 'dual' }),
            onClick: _cache[1] || (_cache[1] = $event => (tA(store).settings.layout = 'dual'))
          }, "对照", 2 /* CLASS */),
          ia("button", {
            class: Y({ on: tA(store).settings.layout === 'orig' }),
            onClick: _cache[2] || (_cache[2] = $event => (tA(store).settings.layout = 'orig'))
          }, "原文", 2 /* CLASS */),
          ia("button", {
            class: Y({ on: tA(store).settings.layout === 'trans' }),
            onClick: _cache[3] || (_cache[3] = $event => (tA(store).settings.layout = 'trans'))
          }, "译文", 2 /* CLASS */)
        ]),
        ia("button", {
          class: Y(["chip ghost", { on: tA(store).settings.pinyin }]),
          onClick: _cache[4] || (_cache[4] = $event => (tA(store).settings.pinyin = !tA(store).settings.pinyin))
        }, " 注音" + ea(tA(store).settings.pinyin ? " · 开" : ""), 3 /* TEXT, CLASS */),
        ia("button", {
          class: "chip ghost",
          onClick: _cache[5] || (_cache[5] = $event => (companionsOpen.value = true))
        }, "伴读" + ea(companions.value.length ? " " + companions.value.length : ""), 1 /* TEXT */),
        ia("button", {
          class: Y(["chip ghost", { on: annotOpen.value }]),
          onClick: _cache[6] || (_cache[6] = $event => (annotOpen.value = !annotOpen.value))
        }, "批注" + ea(myAnnots.value.length ? " " + myAnnots.value.length : ""), 3 /* TEXT, CLASS */),
        ia("button", {
          class: "icon-btn",
          title: "阅读设置",
          onClick: _cache[7] || (_cache[7] = $event => (tA(store).dialogue = { kind: 'settings' }))
        }, "⚙")
      ])
    ]),
    ia("div", {
      class: "reading-wrap",
      onMouseup: onMouseUp,
      onClick: onReadingClick
    }, [
      ia("div", _hoisted_6$h, [
        ia("div", _hoisted_7$h, [
          ia("div", _hoisted_8$h, ea(chapter.value ? chapter.value.cat : "") + " · 卷" + ea(String(__props.route.no).padStart(3, "0")), 1 /* TEXT */),
          ia("h1", null, ea(chapter.value ? chapter.value.title : ""), 1 /* TEXT */),
          ia("div", _hoisted_9$h, [
            id(ea(meta.value ? meta.value.chars.toLocaleString() : 0) + " 字 · " + ea(paras.value.length) + " 段 · 注 " + ea(notes.value.length) + " 条 ", 1 /* TEXT */),
            (companions.value.length)
              ? (r4(), ie("span", _hoisted_10$g, " · 伴读 " + ea(companions.value.length), 1 /* TEXT */))
              : ig("v-if", true),
            (poems.value.length)
              ? (r4(), ie("span", _hoisted_11$g, " · 相关诗词 " + ea(poems.value.length), 1 /* TEXT */))
              : ig("v-if", true)
          ]),
          _cache[29] || (_cache[29] = ia("div", { class: "rule" }, null, -1 /* CACHED */))
        ]),
        (chapter.value && chapter.value.intro)
          ? (r4(), ie("div", _hoisted_12$g, [
              ia("div", _hoisted_13$f, [
                _cache[30] || (_cache[30] = ia("b", null, "本篇导读", -1 /* CACHED */)),
                _cache[31] || (_cache[31] = ia("span", { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} }, "编者按", -1 /* CACHED */)),
                ia("button", {
                  class: "chip ghost",
                  onClick: _cache[8] || (_cache[8] = $event => (showIntro.value = !showIntro.value))
                }, ea(showIntro.value ? "收起" : "展开"), 1 /* TEXT */)
              ]),
              (showIntro.value)
                ? (r4(), ie("div", _hoisted_14$e, [
                    ia("div", _hoisted_15$c, ea(chapter.value.intro), 1 /* TEXT */),
                    ia("div", _hoisted_16$b, [
                      (companions.value.length)
                        ? (r4(), ie("button", {
                            key: 0,
                            class: "chip",
                            onClick: _cache[9] || (_cache[9] = $event => (companionsOpen.value = true))
                          }, "伴读 · 历代评点 " + ea(companions.value.length), 1 /* TEXT */))
                        : ig("v-if", true),
                      (poems.value.length)
                        ? (r4(), ie("button", {
                            key: 1,
                            class: "chip",
                            onClick: _cache[10] || (_cache[10] = $event => (tA(store).dialogue = { kind: 'poems', data: poems.value }))
                          }, "后人咏史 " + ea(poems.value.length) + " 首", 1 /* TEXT */))
                        : ig("v-if", true),
                      (r4(true), ie(rQ, null, lj(campaigns.value, (c) => {
                        return (r4(), ie("button", {
                          key: c.id,
                          class: "chip red",
                          onClick: $event => (openSandbox(c.id))
                        }, "沙盘 · " + ea(c.name), 9 /* TEXT, PROPS */, _hoisted_17$b))
                      }), 128 /* KEYED_FRAGMENT */)),
                      (r4(true), ie(rQ, null, lj(hsMap.value, (m) => {
                        return (r4(), ie("button", {
                          key: m.hanshu.join(),
                          class: "chip",
                          onClick: $event => (tA(go)('/library/' + m.hanshu[0]))
                        }, " 《汉书》" + ea(m.hanshu.map(hsTitle).join("、")), 9 /* TEXT, PROPS */, _hoisted_18$b))
                      }), 128 /* KEYED_FRAGMENT */)),
                      ia("button", {
                        class: "chip ghost",
                        onClick: _cache[11] || (_cache[11] = $event => (notesOpen.value = true))
                      }, "注释 " + ea(notes.value.length) + " 条", 1 /* TEXT */)
                    ])
                  ]))
                : ig("v-if", true)
            ]))
          : ig("v-if", true),
        (r4(true), ie(rQ, null, lj(paras.value, (p, i) => {
          return (r4(), ie("div", {
            id: 'p-' + (i + 1),
            key: i,
            class: Y(["pblock", { taishigong: isTaishi(p.sec) }])
          }, [
            (secChanged(i) && p.sec)
              ? (r4(), ie("div", _hoisted_20$9, ea(p.sec), 1 /* TEXT */))
              : ig("v-if", true),
            ia("div", _hoisted_21$9, [
              ia("button", {
                class: Y(["chip plain", { fav: tA(isFavorite)(Number(__props.route.no), i + 1) }]),
                onClick: oa($event => (tA(toggleFavorite)(Number(__props.route.no), i + 1, p.o)), ["stop"])
              }, ea(tA(isFavorite)(Number(__props.route.no), i + 1) ? "★ 已收藏" : "☆ 收藏"), 11 /* TEXT, CLASS, PROPS */, _hoisted_22$8),
              (notesIn(p.o).length)
                ? (r4(), ie("button", {
                    key: 0,
                    class: "chip",
                    onClick: oa($event => (tA(store).dialogue = { kind: 'notes', data: notesIn(p.o) }), ["stop"])
                  }, " 注 " + ea(notesIn(p.o).length), 9 /* TEXT, PROPS */, _hoisted_23$8))
                : ig("v-if", true),
              (hsLinks.value[i + 1])
                ? (r4(), ie("button", {
                    key: 1,
                    class: "chip red",
                    onClick: oa($event => (openHanshu(i + 1)), ["stop"])
                  }, " 资料 " + ea(hsLinks.value[i + 1].length), 9 /* TEXT, PROPS */, _hoisted_24$7))
                : ig("v-if", true),
              (r4(true), ie(rQ, null, lj(personsIn(p.o).slice(0, 2), (e) => {
                return (r4(), ie("button", {
                  key: e.id,
                  class: "chip",
                  onClick: oa($event => (openPerson(e.id)), ["stop"])
                }, ea(e.name), 9 /* TEXT, PROPS */, _hoisted_25$6))
              }), 128 /* KEYED_FRAGMENT */)),
              (poems.value.length)
                ? (r4(), ie("button", {
                    key: 2,
                    class: "chip ghost",
                    onClick: _cache[12] || (_cache[12] = oa($event => (tA(store).dialogue = { kind: 'poems', data: poems.value }), ["stop"]))
                  }, "诗词"))
                : ig("v-if", true),
              ia("button", {
                class: "chip plain",
                onClick: oa($event => (copyLink(i)), ["stop"])
              }, "复制本段", 8 /* PROPS */, _hoisted_26$6),
              _cache[32] || (_cache[32] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
              ia("span", _hoisted_27$6, ea(i + 1), 1 /* TEXT */)
            ]),
            ia("div", _hoisted_28$5, [
              ia("div", _hoisted_29$5, [
                ia("div", {
                  class: "text-orig pinyin",
                  innerHTML: render(p, i)
                }, null, 8 /* PROPS */, _hoisted_30$5)
              ]),
              ia("div", _hoisted_31$5, [
                (p.t)
                  ? (r4(), ie("div", _hoisted_32$5, ea(p.t), 1 /* TEXT */))
                  : (r4(), ie("div", _hoisted_33$4, "（本篇此段暂无译文）"))
              ])
            ])
          ], 10 /* CLASS, PROPS */, _hoisted_19$b))
        }), 128 /* KEYED_FRAGMENT */)),
        (!paras.value.length)
          ? (r4(), ie("div", _hoisted_34$3, " 本篇为表谱之体，正文以表格呈现，暂未收录分段原文。 "))
          : ig("v-if", true),
        (chapter.value && chapter.value.extra && chapter.value.extra.length)
          ? (r4(), ie("div", _hoisted_35$3, [
              (r4(true), ie(rQ, null, lj(chapter.value.extra, (ex, i) => {
                return (r4(), ie("div", {
                  key: i,
                  class: "panel",
                  style: {"margin-bottom":"12px"}
                }, [
                  ia("div", _hoisted_36$3, [
                    ia("b", null, ea(ex.title), 1 /* TEXT */)
                  ]),
                  ia("div", _hoisted_37$2, [
                    ia("div", {
                      class: "md",
                      innerHTML: tA(renderMD)(ex.text.slice(0, 2400))
                    }, null, 8 /* PROPS */, _hoisted_38$2)
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : ig("v-if", true),
        ia("div", _hoisted_39$2, [
          ia("div", _hoisted_40$1, [
            _cache[33] || (_cache[33] = ia("b", null, "本篇注释", -1 /* CACHED */)),
            ia("span", _hoisted_41$1, ea(notes.value.length) + " 条", 1 /* TEXT */),
            ia("button", {
              class: "chip ghost",
              onClick: _cache[13] || (_cache[13] = $event => (notesOpen.value = !notesOpen.value))
            }, ea(notesOpen.value ? "收起" : "展开"), 1 /* TEXT */)
          ]),
          (notesOpen.value)
            ? (r4(), ie("div", _hoisted_42$1, [
                (r4(true), ie(rQ, null, lj(notes.value, (n) => {
                  return (r4(), ie("div", {
                    key: n.n,
                    style: {"padding":"7px 0","border-bottom":"1px dashed var(--line-2)"}
                  }, [
                    ia("b", _hoisted_43$1, ea(n.n) + ". " + ea(n.term), 1 /* TEXT */),
                    ia("span", _hoisted_44$1, " — " + ea(n.text), 1 /* TEXT */)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : ig("v-if", true)
        ]),
        ia("div", _hoisted_45$1, [
          (prevNo.value)
            ? (r4(), ie("button", {
                key: 0,
                class: "btn",
                onClick: _cache[14] || (_cache[14] = $event => (tA(openChapter)(prevNo.value)))
              }, "← 上一篇 · " + ea(prevTitle.value), 1 /* TEXT */))
            : ig("v-if", true),
          _cache[34] || (_cache[34] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
          (nextNo.value)
            ? (r4(), ie("button", {
                key: 1,
                class: "btn primary",
                onClick: _cache[15] || (_cache[15] = $event => (tA(openChapter)(nextNo.value)))
              }, "下一篇 · " + ea(nextTitle.value) + " →", 1 /* TEXT */))
            : ig("v-if", true)
        ])
      ]),
      (sel.value)
        ? (r4(), ie("div", {
            key: 0,
            class: "annot-pop",
            style: G(selStyle.value),
            onClick: _cache[18] || (_cache[18] = oa(() => {}, ["stop"]))
          }, [
            ia("div", _hoisted_46$1, " 「" + ea(sel.value.text.slice(0, 42)) + ea(sel.value.text.length > 42 ? "…" : "") + "」 ", 1 /* TEXT */),
            nu(ia("textarea", {
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ((annotText).value = $event)),
              placeholder: "写下批注（可不填，仅划线）"
            }, null, 512 /* NEED_PATCH */), [
              [s4, annotText.value]
            ]),
            ia("div", _hoisted_47$1, [
              (r4(), ie(rQ, null, lj(['hl-y', 'hl-g', 'hl-b', 'hl-p'], (c) => {
                return ia("span", {
                  key: c,
                  class: Y(["swatch", [c, { on: annotColor.value === c }]]),
                  onClick: $event => (annotColor.value = c)
                }, null, 10 /* CLASS, PROPS */, _hoisted_48$1)
              }), 64 /* STABLE_FRAGMENT */)),
              _cache[35] || (_cache[35] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
              ia("button", {
                class: "btn sm",
                onClick: _cache[17] || (_cache[17] = $event => (sel.value = null))
              }, "取消"),
              ia("button", {
                class: "btn sm primary",
                onClick: saveAnnotation
              }, "保存批注")
            ])
          ], 4 /* STYLE */))
        : ig("v-if", true),
      (notePop.value)
        ? (r4(), ie("div", {
            key: 1,
            class: "annot-pop",
            style: G(noteStyle.value),
            onClick: _cache[19] || (_cache[19] = oa(() => {}, ["stop"]))
          }, [
            ia("div", _hoisted_49$1, "注 " + ea(notePop.value.n), 1 /* TEXT */),
            ia("b", _hoisted_50$1, ea(notePop.value.term), 1 /* TEXT */),
            ia("div", _hoisted_51$1, ea(notePop.value.text), 1 /* TEXT */)
          ], 4 /* STYLE */))
        : ig("v-if", true)
    ], 32 /* NEED_HYDRATION */),
    (companionsOpen.value)
      ? (r4(), ie("div", {
          key: 0,
          class: "overlay",
          onClick: _cache[21] || (_cache[21] = oa($event => (companionsOpen.value = false), ["self"]))
        }, [
          ia("div", _hoisted_52$1, [
            ia("div", _hoisted_53, [
              ia("b", null, "伴读 · " + ea(chapter.value ? chapter.value.title : ""), 1 /* TEXT */),
              _cache[36] || (_cache[36] = ia("span", { style: {"font-size":"11.5px","color":"var(--muted)"} }, "订阅伴读者的公开批注", -1 /* CACHED */)),
              ia("button", {
                class: "icon-btn",
                style: {"margin-left":"auto"},
                onClick: _cache[20] || (_cache[20] = $event => (companionsOpen.value = false))
              }, "✕")
            ]),
            ia("div", _hoisted_54, [
              (r4(true), ie(rQ, null, lj(companions.value, (c) => {
                return (r4(), ie("div", {
                  key: c.id,
                  style: {"padding":"12px 0","border-bottom":"1px dashed var(--line-2)"}
                }, [
                  ia("div", _hoisted_55, [
                    ia("span", _hoisted_56, ea(c.author), 1 /* TEXT */),
                    ia("span", _hoisted_57, ea(c.source), 1 /* TEXT */),
                    ia("span", _hoisted_58, ea(c.kind), 1 /* TEXT */)
                  ]),
                  ia("div", _hoisted_59, ea(c.text), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              (!companions.value.length)
                ? (r4(), ie("div", _hoisted_60, "本篇暂无伴读评点。"))
                : ig("v-if", true)
            ])
          ])
        ]))
      : ig("v-if", true),
    (annotOpen.value)
      ? (r4(), it(AnnotationPanel, {
          key: 1,
          chapter: Number(__props.route.no),
          onClose: _cache[22] || (_cache[22] = $event => (annotOpen.value = false))
        }, null, 8 /* PROPS */, ["chapter"]))
      : ig("v-if", true),
    (hsDrawer.value)
      ? (r4(), ie("div", {
          key: 2,
          class: "overlay",
          onClick: _cache[24] || (_cache[24] = oa($event => (hsDrawer.value = null), ["self"]))
        }, [
          ia("div", _hoisted_61, [
            ia("div", _hoisted_62, [
              _cache[37] || (_cache[37] = ia("b", null, "资料库 · 《汉书》对照", -1 /* CACHED */)),
              ia("span", _hoisted_63, "《史记》第 " + ea(hsDrawer.value.para) + " 段 · 互见 " + ea(hsDrawer.value.items.length) + " 条", 1 /* TEXT */),
              ia("button", {
                class: "icon-btn",
                style: {"margin-left":"auto"},
                onClick: _cache[23] || (_cache[23] = $event => (hsDrawer.value = null))
              }, "✕")
            ]),
            ia("div", _hoisted_64, [
              (hsLoading.value)
                ? (r4(), ie("div", _hoisted_65, "正在翻检《汉书》……"))
                : ig("v-if", true),
              (r4(true), ie(rQ, null, lj(hsDrawer.value.items, (it, i) => {
                return (r4(), ie("div", {
                  key: i,
                  class: "hs-item"
                }, [
                  ia("div", _hoisted_66, [
                    ia("a", {
                      onClick: $event => (tA(go)('/library/' + it.id + '/' + (it.p + 1)))
                    }, "《汉书·" + ea(it.title) + "》第 " + ea(it.p + 1) + " 段", 9 /* TEXT, PROPS */, _hoisted_67),
                    _cache[38] || (_cache[38] = ia("span", { style: {"margin-left":"auto","font-size":"11px","color":"var(--muted)"} }, "原文", -1 /* CACHED */))
                  ]),
                  ia("div", _hoisted_68, ea(it.text), 1 /* TEXT */),
                  (it.trans)
                    ? (r4(), ie("div", _hoisted_69, ea(it.trans), 1 /* TEXT */))
                    : ig("v-if", true)
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              _cache[39] || (_cache[39] = ia("div", {
                class: "desc",
                style: {"margin-top":"10px","color":"var(--muted)","font-size":"11.5px"}
              }, " 对照由人物、地名共现自动匹配，仅供互见参考；两书叙事详略与书法不同，正可互参。 ", -1 /* CACHED */))
            ])
          ])
        ]))
      : ig("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}
}

};

const _hoisted_1$g = { class: "page" };
const _hoisted_2$g = { class: "filters" };
const _hoisted_3$g = ["onClick"];
const _hoisted_4$g = { class: "grid-cards" };
const _hoisted_5$g = ["onClick"];
const _hoisted_6$g = { class: "pill-row" };
const _hoisted_7$g = { class: "meta" };
const _hoisted_8$g = {
  class: "modal",
  style: {"width":"720px"}
};
const _hoisted_9$g = { class: "modal-head" };
const _hoisted_10$f = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_11$f = { class: "modal-body" };
const _hoisted_12$f = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"14.5px","line-height":"2"}
};
const _hoisted_13$e = { class: "rel-list" };
const _hoisted_14$d = ["onClick"];
const _hoisted_15$b = { class: "rel-list" };


var EventsView = {
  __name: 'EventsView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const kw = tx("");
const period = tx("全部");

const events = iD(() => store.events?.events || []);
const periods = iD(() => ["全部", ...new Set(events.value.map((e) => e.period).filter(Boolean))]);
const list = iD(() =>
  events.value.filter((e) =>
    (period.value === "全部" || e.period === period.value) &&
    (!kw.value.trim() || e.name.includes(kw.value) || (e.summary || "").includes(kw.value) || (e.keyFigures || []).some((k) => k.includes(kw.value)))
  )
);
const detail = iD(() => events.value.find((e) => e.id === props.route.id) || null);
function open(e) { go("/events/" + e.id); }
function close() { go("/events"); }
function jump(no) { go(`/c/${no}`); }

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$g, [
    _cache[4] || (_cache[4] = ia("div", { class: "page-head" }, [
      ia("h2", null, "纪事本末"),
      ia("p", null, "《史记》是纪传体，一事的始末散落在本纪、世家、列传之间。此处按「事」重新打包，可集中看完一件大事的来龙去脉。")
    ], -1 /* CACHED */)),
    ia("div", _hoisted_2$g, [
      nu(ia("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((kw).value = $event)),
        class: "search-input",
        style: {"max-width":"260px"},
        placeholder: "搜索事件、人物"
      }, null, 512 /* NEED_PATCH */), [
        [s4, kw.value]
      ]),
      (r4(true), ie(rQ, null, lj(periods.value, (p) => {
        return (r4(), ie("button", {
          key: p,
          class: Y(["filter-pill", { on: period.value === p }]),
          onClick: $event => (period.value = p)
        }, ea(p), 11 /* TEXT, CLASS, PROPS */, _hoisted_3$g))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    ia("div", _hoisted_4$g, [
      (r4(true), ie(rQ, null, lj(list.value, (e) => {
        return (r4(), ie("div", {
          key: e.id,
          class: "item-card",
          onClick: $event => (open(e))
        }, [
          ia("h4", null, ea(e.name), 1 /* TEXT */),
          ia("p", null, ea(e.summary), 1 /* TEXT */),
          ia("div", _hoisted_6$g, [
            (r4(true), ie(rQ, null, lj((e.keyFigures || []).slice(0, 4), (k) => {
              return (r4(), ie("span", {
                key: k,
                class: "mini-pill"
              }, ea(k), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          ia("div", _hoisted_7$g, [
            ia("span", null, ea(e.period), 1 /* TEXT */),
            ia("span", null, "涉及 " + ea((e.chapters || []).length) + " 篇", 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, _hoisted_5$g))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (detail.value)
      ? (r4(), ie("div", {
          key: 0,
          class: "overlay",
          onClick: oa(close, ["self"])
        }, [
          ia("div", _hoisted_8$g, [
            ia("div", _hoisted_9$g, [
              ia("b", null, ea(detail.value.name), 1 /* TEXT */),
              ia("span", _hoisted_10$f, ea(detail.value.period), 1 /* TEXT */),
              ia("button", {
                class: "icon-btn",
                style: {"margin-left":"auto"},
                onClick: close
              }, "✕")
            ]),
            ia("div", _hoisted_11$f, [
              ia("div", _hoisted_12$f, ea(detail.value.summary), 1 /* TEXT */),
              _cache[1] || (_cache[1] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
              _cache[2] || (_cache[2] = ia("div", { class: "rel-group-title" }, "涉及篇目", -1 /* CACHED */)),
              ia("div", _hoisted_13$e, [
                (r4(true), ie(rQ, null, lj(detail.value.chapters, (no) => {
                  return (r4(), ie("span", {
                    key: no,
                    class: "rel-pill",
                    onClick: $event => {close(); jump(no);}
                  }, " 卷" + ea(no) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === no)?.title), 9 /* TEXT, PROPS */, _hoisted_14$d))
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              _cache[3] || (_cache[3] = ia("div", {
                class: "rel-group-title",
                style: {"margin-top":"12px"}
              }, "关键人物", -1 /* CACHED */)),
              ia("div", _hoisted_15$b, [
                (r4(true), ie(rQ, null, lj(detail.value.keyFigures || [], (k) => {
                  return (r4(), ie("span", {
                    key: k,
                    class: "rel-pill"
                  }, ea(k), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ])
          ])
        ]))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$f = { class: "page" };
const _hoisted_2$f = { class: "page-head" };
const _hoisted_3$f = { style: {"margin-top":"10px"} };
const _hoisted_4$f = { class: "tagline" };
const _hoisted_5$f = { class: "tagline" };
const _hoisted_6$f = {
  key: 0,
  class: "tagline"
};
const _hoisted_7$f = {
  key: 1,
  class: "tagline"
};
const _hoisted_8$f = { style: {"display":"grid","grid-template-columns":"1fr 340px","gap":"18px","align-items":"start"} };
const _hoisted_9$f = { class: "panel" };
const _hoisted_10$e = { class: "panel-body" };
const _hoisted_11$e = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"15px","line-height":"2"}
};
const _hoisted_12$e = {
  class: "panel",
  style: {"margin-top":"12px"}
};
const _hoisted_13$d = { class: "panel-head" };
const _hoisted_14$c = { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_15$a = {
  class: "panel-body",
  style: {"max-height":"420px","overflow":"auto"}
};
const _hoisted_16$a = ["onClick"];
const _hoisted_17$a = { class: "mh" };
const _hoisted_18$a = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_19$a = { class: "panel" };
const _hoisted_20$8 = { class: "panel-body" };
const _hoisted_21$8 = { class: "rel-group-title" };
const _hoisted_22$7 = { class: "rel-list" };
const _hoisted_23$7 = ["onClick"];
const _hoisted_24$6 = { class: "ty" };
const _hoisted_25$5 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_26$5 = {
  class: "panel",
  style: {"margin-top":"12px"}
};
const _hoisted_27$5 = { class: "panel-body" };
const _hoisted_28$4 = { class: "rel-list" };
const _hoisted_29$4 = ["onClick"];
const _hoisted_30$4 = { class: "filters" };
const _hoisted_31$4 = ["onClick"];
const _hoisted_32$4 = { class: "rel-group-title" };
const _hoisted_33$3 = { class: "grid-cards" };
const _hoisted_34$2 = ["onClick"];
const _hoisted_35$2 = { class: "meta" };
const _hoisted_36$2 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};


var PeopleView = {
  __name: 'PeopleView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const kw = tx("");
const dynasty = tx("全部");
const people = iD(() => store.people?.people || []);
const dynasties = iD(() => ["全部", ...new Set(people.value.map((p) => p.dynasty).filter(Boolean))]);

const person = iD(() => (props.route.id ? personById(props.route.id) : null));

const list = iD(() =>
  people.value.filter(
    (p) =>
      (dynasty.value === "全部" || p.dynasty === dynasty.value) &&
      (!kw.value.trim() || p.name.includes(kw.value) || (p.aliases || []).some((a) => a.includes(kw.value)) || (p.identity || "").includes(kw.value))
  )
);

const groups = iD(() => {
  const m = new Map();
  for (const p of list.value) {
    if (!m.has(p.dynasty)) m.set(p.dynasty, []);
    m.get(p.dynasty).push(p);
  }
  return [...m.entries()];
});

const relGroups = iD(() => {
  if (!person.value) return [];
  const g = {};
  for (const r of person.value.relations || []) {
    const t = personById(r.target);
    if (!t) continue;
    (g[r.type] = g[r.type] || []).push({ ...r, target: t });
  }
  return Object.entries(g);
});

const mentions = tx([]);
ny(person, async () => {
  mentions.value = [];
  if (!person.value) return;
  if (!window.__searchIndex) window.__searchIndex = await fetchJSON("search.json");
  const names = [person.value.name, ...(person.value.aliases || [])];
  const out = [];
  for (const row of window.__searchIndex) {
    const o = plainText(row.o);
    if (names.some((n) => o.includes(n))) { out.push(row); if (out.length >= 30) break; }
  }
  mentions.value = out;
}, { immediate: true });

function jump(id) { go("/people/" + id); }
function openCh(no, p) { openChapter(no, p); }

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$f, [
    ig(" 人物详情 "),
    (person.value)
      ? (r4(), ie(rQ, { key: 0 }, [
          ia("div", _hoisted_2$f, [
            ia("button", {
              class: "chip ghost",
              onClick: _cache[0] || (_cache[0] = $event => (tA(go)('/people')))
            }, "← 人物志"),
            ia("h2", _hoisted_3$f, ea(person.value.name), 1 /* TEXT */),
            ia("p", null, [
              ia("span", _hoisted_4$f, ea(person.value.dynasty), 1 /* TEXT */),
              ia("span", _hoisted_5$f, ea(person.value.identity), 1 /* TEXT */),
              (person.value.years)
                ? (r4(), ie("span", _hoisted_6$f, ea(person.value.years), 1 /* TEXT */))
                : ig("v-if", true),
              (person.value.aliases?.length)
                ? (r4(), ie("span", _hoisted_7$f, "别名：" + ea(person.value.aliases.join("、")), 1 /* TEXT */))
                : ig("v-if", true)
            ])
          ]),
          ia("div", _hoisted_8$f, [
            ia("div", null, [
              ia("div", _hoisted_9$f, [
                _cache[2] || (_cache[2] = ia("div", { class: "panel-head" }, [
                  ia("b", null, "小传")
                ], -1 /* CACHED */)),
                ia("div", _hoisted_10$e, [
                  ia("div", _hoisted_11$e, ea(person.value.desc), 1 /* TEXT */)
                ])
              ]),
              ia("div", _hoisted_12$e, [
                ia("div", _hoisted_13$d, [
                  _cache[3] || (_cache[3] = ia("b", null, "出现段落聚合", -1 /* CACHED */)),
                  ia("span", _hoisted_14$c, ea(mentions.value.length) + " 段", 1 /* TEXT */)
                ]),
                ia("div", _hoisted_15$a, [
                  (r4(true), ie(rQ, null, lj(mentions.value, (m) => {
                    return (r4(), ie("div", {
                      key: m.c + '-' + m.p,
                      class: "mention",
                      onClick: $event => (openCh(m.c, m.p))
                    }, [
                      ia("div", _hoisted_17$a, "卷" + ea(m.c) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === m.c)?.title) + " · 第 " + ea(m.p) + " 段", 1 /* TEXT */),
                      id(" " + ea(tA(plainText)(m.o).slice(0, 90)) + "… ", 1 /* TEXT */)
                    ], 8 /* PROPS */, _hoisted_16$a))
                  }), 128 /* KEYED_FRAGMENT */)),
                  (!mentions.value.length)
                    ? (r4(), ie("div", _hoisted_18$a, "未检索到出现段落。"))
                    : ig("v-if", true)
                ])
              ])
            ]),
            ia("div", null, [
              ia("div", _hoisted_19$a, [
                _cache[4] || (_cache[4] = ia("div", { class: "panel-head" }, [
                  ia("b", null, "人物关系")
                ], -1 /* CACHED */)),
                ia("div", _hoisted_20$8, [
                  (r4(true), ie(rQ, null, lj(relGroups.value, ([type, arr]) => {
                    return (r4(), ie("div", {
                      key: type,
                      class: "rel-group"
                    }, [
                      ia("div", _hoisted_21$8, ea(type), 1 /* TEXT */),
                      ia("div", _hoisted_22$7, [
                        (r4(true), ie(rQ, null, lj(arr, (r) => {
                          return (r4(), ie("span", {
                            key: r.target.id + type,
                            class: "rel-pill",
                            onClick: $event => (jump(r.target.id))
                          }, [
                            id(ea(r.target.name), 1 /* TEXT */),
                            ia("span", _hoisted_24$6, ea(r.label), 1 /* TEXT */)
                          ], 8 /* PROPS */, _hoisted_23$7))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ]))
                  }), 128 /* KEYED_FRAGMENT */)),
                  (!relGroups.value.length)
                    ? (r4(), ie("div", _hoisted_25$5, "暂无关系数据。"))
                    : ig("v-if", true)
                ])
              ]),
              ia("div", _hoisted_26$5, [
                _cache[5] || (_cache[5] = ia("div", { class: "panel-head" }, [
                  ia("b", null, "相关篇目")
                ], -1 /* CACHED */)),
                ia("div", _hoisted_27$5, [
                  ia("div", _hoisted_28$4, [
                    (r4(true), ie(rQ, null, lj(person.value.chapters, (no) => {
                      return (r4(), ie("span", {
                        key: no,
                        class: "rel-pill",
                        onClick: $event => (openCh(no))
                      }, " 卷" + ea(no) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === no)?.title), 9 /* TEXT, PROPS */, _hoisted_29$4))
                    }), 128 /* KEYED_FRAGMENT */))
                  ])
                ])
              ])
            ])
          ])
        ], 64 /* STABLE_FRAGMENT */))
      : (r4(), ie(rQ, { key: 1 }, [
          ig(" 人物列表 "),
          _cache[6] || (_cache[6] = ia("div", { class: "page-head" }, [
            ia("h2", null, "人物志"),
            ia("p", null, "《史记》首创纪传体，以人系事。这里把散见各篇的人物抽出，附小传、关系与出场段落——读编年史易忘人，读列传易忘时，人物志可补两者之阙。")
          ], -1 /* CACHED */)),
          ia("div", _hoisted_30$4, [
            nu(ia("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((kw).value = $event)),
              class: "search-input",
              style: {"max-width":"240px"},
              placeholder: "搜索人名、别名、身份"
            }, null, 512 /* NEED_PATCH */), [
              [s4, kw.value]
            ]),
            (r4(true), ie(rQ, null, lj(dynasties.value, (d) => {
              return (r4(), ie("button", {
                key: d,
                class: Y(["filter-pill", { on: dynasty.value === d }]),
                onClick: $event => (dynasty.value = d)
              }, ea(d), 11 /* TEXT, CLASS, PROPS */, _hoisted_31$4))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          (r4(true), ie(rQ, null, lj(groups.value, ([d, arr]) => {
            return (r4(), ie("div", {
              key: d,
              style: {"margin-bottom":"20px"}
            }, [
              ia("div", _hoisted_32$4, ea(d) + " · " + ea(arr.length) + " 人", 1 /* TEXT */),
              ia("div", _hoisted_33$3, [
                (r4(true), ie(rQ, null, lj(arr, (p) => {
                  return (r4(), ie("div", {
                    key: p.id,
                    class: "item-card",
                    onClick: $event => (jump(p.id))
                  }, [
                    ia("h4", null, ea(p.name), 1 /* TEXT */),
                    ia("p", null, ea((p.desc || "").slice(0, 58)) + "…", 1 /* TEXT */),
                    ia("div", _hoisted_35$2, [
                      ia("span", null, ea(p.identity), 1 /* TEXT */),
                      ia("span", null, ea((p.relations || []).length) + " 条关系", 1 /* TEXT */)
                    ])
                  ], 8 /* PROPS */, _hoisted_34$2))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          (!list.value.length)
            ? (r4(), ie("div", _hoisted_36$2, "没有找到匹配的人物。"))
            : ig("v-if", true)
        ], 64 /* STABLE_FRAGMENT */))
  ]))
}
}

};

// 简易地理投影与示意底图数据（经度 73~135，纬度 18~46）
const BBOX = { lon0: 73, lon1: 135, lat0: 17.5, lat1: 46.5 };
const W = 1000;
const H = 545;

function project(lon, lat) {
  const x = ((lon - BBOX.lon0) / (BBOX.lon1 - BBOX.lon0)) * W;
  const y = ((BBOX.lat1 - lat) / (BBOX.lat1 - BBOX.lat0)) * H;
  return [x, y];
}

// 粗略海岸线（仅作陆地着色示意）
const COAST = [
  [124.4, 40.0], [122.1, 40.9], [121.6, 38.9], [119.6, 39.9], [117.6, 39.0], [118.9, 37.8],
  [120.4, 36.1], [122.1, 37.5], [121.4, 37.4], [119.2, 34.6], [121.9, 31.0], [121.6, 29.9],
  [120.7, 28.0], [119.6, 26.0], [118.1, 24.5], [116.7, 23.4], [114.1, 22.5], [110.4, 21.2],
  [109.1, 21.5], [108.3, 21.6],
];
const LAND_BORDER = [
  [106.7, 22.0], [104.0, 22.5], [101.8, 21.2], [99.2, 22.1], [97.5, 23.9], [98.7, 25.9],
  [97.5, 28.3], [95.0, 29.0], [92.0, 27.8], [88.7, 27.3], [86.0, 27.9], [81.0, 30.2],
  [78.7, 32.5], [79.0, 34.5], [76.0, 35.5], [74.9, 37.0], [76.5, 40.4], [80.2, 42.2],
  [83.0, 47.2], [87.3, 49.2], [90.0, 47.9], [96.4, 42.8], [101.8, 42.5], [106.0, 42.0],
  [111.0, 43.5], [116.0, 45.0], [120.0, 45.0], [124.0, 43.0], [125.0, 41.0],
];

const RIVERS = [
  {
    name: "黄河",
    pts: [[96.2, 34.9], [100.2, 34.5], [102.7, 36.0], [103.8, 36.1], [105.2, 37.5], [106.3, 38.5], [108.5, 40.3], [110.0, 40.6], [110.6, 38.0], [110.5, 36.5], [111.2, 34.8], [113.6, 34.8], [115.5, 35.3], [117.0, 36.7], [118.3, 37.4], [118.9, 37.8]],
    width: 2.4,
  },
  {
    name: "长江",
    pts: [[96.5, 33.5], [99.5, 31.5], [101.5, 29.5], [103.8, 28.5], [104.6, 28.8], [106.5, 29.6], [108.4, 30.4], [111.3, 30.7], [114.3, 30.6], [116.0, 29.7], [117.5, 30.6], [118.8, 32.1], [120.3, 31.9], [121.5, 31.2]],
    width: 2.2,
  },
  {
    name: "淮水",
    pts: [[113.4, 33.7], [115.0, 32.9], [116.6, 32.6], [118.0, 33.1], [119.0, 33.5]],
    width: 1.4,
  },
  {
    name: "渭水",
    pts: [[104.5, 35.0], [106.5, 34.6], [108.0, 34.4], [109.3, 34.5], [110.3, 34.6]],
    width: 1.2,
  },
  {
    name: "济水",
    pts: [[113.5, 35.1], [115.8, 35.6], [117.4, 36.3], [118.4, 36.9]],
    width: 1.1,
  },
];

// 凸包（用于由城邑点集生成势力范围示意）
function convexHull(points) {
  if (points.length < 3) return points;
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}

function smoothPoly(points, pad = 1.6) {
  // 简单外扩 + 中点平滑，让凸包看起来更像自然疆域
  const cx = points.reduce((s, p) => s + p[0], 0) / points.length;
  const cy = points.reduce((s, p) => s + p[1], 0) / points.length;
  const expanded = points.map(([x, y]) => {
    const dx = x - cx, dy = y - cy;
    const d = Math.hypot(dx, dy) || 1;
    return [x + (dx / d) * pad * 12, y + (dy / d) * pad * 12];
  });
  const out = [];
  for (let i = 0; i < expanded.length; i++) {
    const a = expanded[i];
    const b = expanded[(i + 1) % expanded.length];
    out.push(a);
    out.push([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]);
  }
  return out;
}

// 主要山脉（示意折线）
const RANGES = [
  { name: "秦岭", pts: [[104.4, 34.2], [106.4, 33.9], [108.4, 33.8], [110.4, 33.9], [112.0, 34.0]] },
  { name: "太行", pts: [[113.6, 35.2], [113.9, 36.5], [114.3, 37.5], [114.9, 38.8], [115.6, 39.8]] },
  { name: "燕山", pts: [[115.4, 40.4], [117.0, 40.6], [118.6, 40.7], [119.9, 40.3]] },
  { name: "阴山", pts: [[106.4, 41.2], [109.0, 41.3], [111.0, 41.4], [113.0, 41.0]] },
  { name: "昆仑", pts: [[76.0, 36.6], [80.0, 36.0], [85.0, 36.2], [90.0, 36.0], [95.0, 35.8], [99.0, 35.5]] },
  { name: "天山", pts: [[78.0, 42.6], [82.0, 42.9], [86.0, 43.2], [90.0, 43.0]] },
  { name: "南岭", pts: [[109.8, 25.3], [112.0, 25.2], [114.0, 25.0], [116.0, 25.2], [118.0, 25.5]] },
  { name: "大巴", pts: [[105.8, 32.8], [108.0, 32.2], [110.0, 32.0]] },
  { name: "大别", pts: [[113.8, 31.7], [115.4, 31.3], [116.8, 31.2]] },
  { name: "五岭", pts: [[110.5, 24.6], [112.5, 24.8], [114.5, 24.9]] },
];

// 疆域示意：城邑点集（cities）或手绘多边形（polygon）
const REGIONS = {
  zhanguo: {
    name: "战国七雄（示意）",
    groups: [
      { name: "秦", color: "#8a5a3b", cities: ["咸阳", "雍", "栎阳", "汉中", "南郑", "成都", "巴蜀", "陇西", "上郡", "蓝田"] },
      { name: "楚", color: "#2f7d63", cities: ["郢", "寿春", "陈", "宛", "南阳", "长沙", "彭城", "淮南", "衡山", "番禺"] },
      { name: "齐", color: "#2f6db3", cities: ["临淄", "即墨", "莒", "定陶", "陶", "薛"] },
      { name: "燕", color: "#7d5ba6", cities: ["蓟", "渔阳", "右北平", "辽东", "上谷", "涿鹿"] },
      { name: "赵", color: "#b3282d", cities: ["邯郸", "晋阳", "代", "雁门", "云中", "巨鹿"] },
      { name: "魏", color: "#a9803f", cities: ["大梁", "安邑", "平阳", "邺", "朝歌"] },
      { name: "韩", color: "#3f7f8a", cities: ["新郑", "阳翟", "宜阳", "长平"] },
    ],
  },
  qin: {
    name: "秦（始皇二十六年，前221）",
    groups: [
      {
        name: "秦",
        color: "#8a5a3b",
        polygon: [
          [103.8, 34.6], [106.5, 35.2], [109.0, 35.4], [111.5, 35.8], [113.5, 36.4], [116.0, 36.9],
          [118.8, 37.4], [121.2, 37.8], [122.4, 39.6], [121.0, 40.6], [119.0, 41.2], [116.0, 41.8],
          [112.5, 41.6], [109.0, 41.2], [106.0, 40.2], [103.6, 39.0], [101.5, 37.2], [100.8, 34.9],
          [101.6, 32.6], [103.2, 30.6], [105.4, 28.9], [107.5, 28.4], [109.6, 29.4], [111.8, 29.8],
          [114.2, 29.8], [116.8, 30.4], [118.8, 31.8], [120.4, 33.6], [119.0, 34.9], [116.4, 34.6],
          [113.5, 34.2], [110.5, 33.6], [107.6, 33.5], [105.4, 33.8],
        ],
      },
    ],
  },
  chuhan: {
    name: "楚汉之际（前206 分封）",
    groups: [
      { name: "汉", color: "#b3282d", cities: ["南郑", "汉中", "巴蜀", "成都"] },
      { name: "西楚", color: "#7a4b8a", cities: ["彭城", "下相", "薛", "定陶", "陈"] },
      { name: "齐", color: "#2f6db3", cities: ["临淄", "即墨", "莒"] },
      { name: "赵", color: "#c26a3a", cities: ["邯郸", "巨鹿", "代"] },
      { name: "燕", color: "#7d5ba6", cities: ["蓟", "辽东", "渔阳"] },
      { name: "魏", color: "#a9803f", cities: ["平阳", "大梁", "朝歌"] },
      { name: "韩", color: "#3f7f8a", cities: ["新郑", "阳翟"] },
      { name: "临江", color: "#2f7d63", cities: ["郢", "江陵", "长沙"] },
    ],
  },
  hanchu: {
    name: "汉初（高帝十二年，前195）",
    groups: [
      {
        name: "汉",
        color: "#8a5a3b",
        polygon: [
          [103.8, 34.6], [106.5, 35.2], [109.0, 35.4], [111.5, 35.8], [113.5, 36.4], [116.0, 36.9],
          [118.8, 37.4], [121.0, 37.6], [121.6, 39.8], [119.8, 40.8], [116.6, 41.4], [112.6, 41.2],
          [109.2, 40.8], [106.2, 39.8], [103.8, 38.6], [101.8, 36.8], [101.0, 34.6], [101.8, 32.2],
          [103.4, 30.2], [105.6, 28.6], [107.8, 28.2], [109.8, 29.2], [111.6, 29.4], [113.2, 28.6],
          [115.4, 27.8], [117.0, 28.6], [118.2, 30.4], [119.5, 32.4], [118.6, 34.4], [116.2, 34.4],
          [113.4, 34.0], [110.4, 33.4], [107.4, 33.4], [105.2, 33.8],
        ],
      },
    ],
  },
};

const _hoisted_1$e = { class: "map-shell" };
const _hoisted_2$e = ["viewBox"];
const _hoisted_3$e = ["width", "height"];
const _hoisted_4$e = ["width", "height"];
const _hoisted_5$e = ["d"];
const _hoisted_6$e = ["d"];
const _hoisted_7$e = { key: 3 };
const _hoisted_8$e = ["d", "fill", "stroke"];
const _hoisted_9$e = ["x", "y", "fill"];
const _hoisted_10$d = { key: 4 };
const _hoisted_11$d = ["d"];
const _hoisted_12$d = { key: 5 };
const _hoisted_13$c = ["d", "stroke-width"];
const _hoisted_14$b = { key: 6 };
const _hoisted_15$9 = ["d", "stroke"];
const _hoisted_16$9 = { key: 7 };
const _hoisted_17$9 = ["onClick"];
const _hoisted_18$9 = ["cx", "cy", "r", "fill"];
const _hoisted_19$9 = ["d", "fill"];
const _hoisted_20$7 = ["cx", "cy", "r", "fill"];
const _hoisted_21$7 = ["cx", "cy"];
const _hoisted_22$6 = ["x", "y", "fill", "transform-origin"];
const _hoisted_23$6 = { key: 8 };
const _hoisted_24$5 = ["x", "y", "font-weight"];
const _hoisted_25$4 = {
  key: 0,
  class: "map-toolbar"
};
const _hoisted_26$4 = { class: "layer-item" };
const _hoisted_27$4 = { class: "layer-item" };
const _hoisted_28$3 = { class: "layer-item" };
const _hoisted_29$3 = { class: "layer-item" };
const _hoisted_30$3 = { class: "layer-item" };
const _hoisted_31$3 = { class: "layer-item" };
const _hoisted_32$3 = { class: "layer-item" };
const _hoisted_33$2 = { class: "layer-item" };
const _hoisted_34$1 = {
  key: 1,
  class: "map-minimap"
};
const _hoisted_35$1 = ["viewBox"];
const _hoisted_36$1 = ["d"];
const _hoisted_37$1 = ["x", "y", "width", "height"];
const _hoisted_38$1 = {
  key: 2,
  class: "map-caption"
};
const _hoisted_39$1 = {
  key: 3,
  class: "map-legend"
};


var MapCanvas = {
  __name: 'MapCanvas',
  props: {
  places: { type: Array, default: () => [] },
  routes: { type: Array, default: () => [] },
  markers: { type: Array, default: () => [] },
  region: { type: String, default: "" },
  height: { type: Number, default: 560 },
  compact: { type: Boolean, default: false },
  focusId: { type: String, default: "" },
  fit: { type: Array, default: () => [] },
  caption: { type: String, default: "" },
},
  emits: ["place"],
  setup(__props, { emit: __emit }) {

const props = __props;
const emit = __emit;

const layers = tx({
  land: true, rivers: true, grid: true, places: true, labels: true,
  regions: !!props.region, routes: true, mountains: true, modern: false,
});

const svgEl = tx(null);
const view = tx({ cx: W / 2, cy: H / 2, scale: 1 });

const fitBox = iD(() => {
  const pts = (props.fit || []).filter((p) => Array.isArray(p) && p.length === 2);
  if (pts.length < 2) return null;
  const xy = pts.map(([lon, lat]) => project(lon, lat));
  let minX = Math.min(...xy.map((p) => p[0])), maxX = Math.max(...xy.map((p) => p[0]));
  let minY = Math.min(...xy.map((p) => p[1])), maxY = Math.max(...xy.map((p) => p[1]));
  const pad = 46;
  minX -= pad; maxX += pad; minY -= pad; maxY += pad;
  let w = Math.max(260, maxX - minX);
  let h = Math.max(180, maxY - minY);
  const ratio = W / H;
  if (w / h < ratio) w = h * ratio; else h = w / ratio;
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  return { x: cx - w / 2, y: cy - h / 2, w, h, cx, cy };
});

const base = iD(() => fitBox.value || { x: 0, y: 0, w: W, h: H, cx: W / 2, cy: H / 2 });

ny(base, (b) => { view.value = { cx: b.cx, cy: b.cy, scale: 1 }; }, { immediate: true });

const viewBox = iD(() => {
  const w = base.value.w / view.value.scale;
  const h = base.value.h / view.value.scale;
  return `${view.value.cx - w / 2} ${view.value.cy - h / 2} ${w} ${h}`;
});

const landPath = iD(() => {
  const pts = [...COAST, ...LAND_BORDER];
  return "M" + pts.map(([lon, lat]) => project(lon, lat).map((v) => v.toFixed(1)).join(",")).join("L") + "Z";
});

const riverPaths = iD(() =>
  RIVERS.map((r) => ({
    name: r.name,
    d: "M" + r.pts.map(([lon, lat]) => project(lon, lat).map((v) => v.toFixed(1)).join(",")).join("L"),
    w: r.width,
  }))
);

const mountainPaths = iD(() =>
  (RANGES || []).map((m) => ({
    name: m.name,
    d: "M" + m.pts.map(([lon, lat]) => project(lon, lat).map((v) => v.toFixed(1)).join(",")).join("L"),
  }))
);

// 疆域：支持「城邑点集推演」与「手绘多边形」两种
const regionPolys = iD(() => {
  if (!props.region || !REGIONS[props.region]) return [];
  const conf = REGIONS[props.region];
  const byName = new Map(props.places.map((p) => [p.name, p]));
  return (conf.groups || []).map((g) => {
    let pts = [];
    if (g.polygon) pts = g.polygon.map(([lon, lat]) => project(lon, lat));
    else {
      const cities = (g.cities || []).map((n) => byName.get(n)).filter(Boolean);
      if (cities.length >= 3) pts = smoothPoly(convexHull(cities.map((p) => project(p.lon, p.lat))), g.pad || 1.2);
    }
    if (pts.length < 3) return null;
    const d = "M" + pts.map((p) => p.map((v) => v.toFixed(1)).join(",")).join("L") + "Z";
    const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
    const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
    return { name: g.name, color: g.color, d, cx, cy };
  }).filter(Boolean);
});

const placed = iD(() => props.places.map((p) => ({ ...p, xy: project(p.lon, p.lat) })));

const spotScore = (p) => (p.chapters ? p.chapters.length : 0) + (p.type === "都城" ? 4 : p.type === "战场" ? 3 : p.type === "关隘" ? 2 : 0);
const labels = iD(() => {
  const items = [];
  const seen = new Set();
  const add = (name, lon, lat, pr, modern) => {
    const shown = layers.value.modern ? (modern || name) : name;
    if (seen.has(shown)) return;
    seen.add(shown);
    const [x, y] = project(lon, lat);
    items.push({ name: shown, x, y, pr });
  };
  for (const m of props.markers || []) add(m.name, m.lon, m.lat, 999);
  const focus = props.places.find((p) => p.id === props.focusId);
  if (focus) add(focus.name, focus.lon, focus.lat, 998, focus.modern);
  const sorted = [...props.places].sort((a, b) => spotScore(b) - spotScore(a));
  const minScore = props.compact ? 7 : view.value.scale > 1.6 ? 2 : 4;
  for (const p of sorted) if (spotScore(p) >= minScore) add(p.name, p.lon, p.lat, spotScore(p), p.modern);

  const rects = [];
  const out = [];
  for (const it of items) {
    const w = it.name.length * 11.5 + 8;
    const h = 13;
    const rx = it.x + 7;
    const ry = it.y - 10;
    const clash = rects.some((r) => !(rx + w < r.x || rx > r.x + r.w || ry + h < r.y || ry > r.y + r.h));
    if (clash) continue;
    rects.push({ x: rx, y: ry, w, h });
    out.push({ ...it, lx: rx, ly: ry + 11 });
  }
  return out;
});

const routePaths = iD(() =>
  (props.routes || []).map((r) => ({
    color: r.color || "#b3282d",
    d: "M" + r.points.map(([lon, lat]) => project(lon, lat).map((v) => v.toFixed(1)).join(",")).join("L"),
  }))
);

const markerPts = iD(() => (props.markers || []).map((m) => ({ ...m, xy: project(m.lon, m.lat) })));

/* 交互：缩放 / 平移 */
function zoomAt(factor, clientX, clientY) {
  const svg = svgEl.value;
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const vb = viewBox.value.split(" ").map(Number);
  const px = vb[0] + ((clientX - rect.left) / rect.width) * vb[2];
  const py = vb[1] + ((clientY - rect.top) / rect.height) * vb[3];
  const next = Math.min(8, Math.max(1, view.value.scale * factor));
  const k = view.value.scale / next;
  view.value = {
    scale: next,
    cx: px + (view.value.cx - px) * k,
    cy: py + (view.value.cy - py) * k,
  };
}
function onWheel(e) { e.preventDefault(); zoomAt(e.deltaY < 0 ? 1.18 : 1 / 1.18, e.clientX, e.clientY); }

let drag = null;
function onDown(e) {
  if (e.button !== 0) return;
  drag = { x: e.clientX, y: e.clientY, cx: view.value.cx, cy: view.value.cy };
}
function onMove(e) {
  if (!drag) return;
  const svg = svgEl.value;
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const vb = viewBox.value.split(" ").map(Number);
  view.value = {
    ...view.value,
    cx: drag.cx - ((e.clientX - drag.x) / rect.width) * vb[2],
    cy: drag.cy - ((e.clientY - drag.y) / rect.height) * vb[3],
  };
}
function onUp() { drag = null; }
function zoomIn() { const s = svgEl.value?.getBoundingClientRect(); zoomAt(1.35, s.left + s.width / 2, s.top + s.height / 2); }
function zoomOut() { const s = svgEl.value?.getBoundingClientRect(); zoomAt(1 / 1.35, s.left + s.width / 2, s.top + s.height / 2); }
function reset() { view.value = { cx: base.value.cx, cy: base.value.cy, scale: 1 }; }

lw(() => { drag = null; });

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$e, [
    (r4(), ie("svg", {
      ref_key: "svgEl",
      ref: svgEl,
      class: "map-svg",
      viewBox: viewBox.value,
      style: G({ maxHeight: __props.height + 'px', cursor: view.value.scale > 1 ? 'grab' : 'default' }),
      preserveAspectRatio: "xMidYMid meet",
      onWheel: onWheel,
      onPointerdown: onDown,
      onPointermove: onMove,
      onPointerup: onUp,
      onPointerleave: onUp
    }, [
      _cache[9] || (_cache[9] = ih("<defs><pattern id=\"grid\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"><path d=\"M40 0H0V40\" fill=\"none\" stroke=\"#c9c2ad\" stroke-width=\"0.5\" opacity=\"0.45\"></path></pattern><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"context-stroke\"></path></marker><filter id=\"soft\"><feGaussianBlur stdDeviation=\"6\"></feGaussianBlur></filter><linearGradient id=\"landGrad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#eae7d6\"></stop><stop offset=\"100%\" stop-color=\"#e2dec8\"></stop></linearGradient></defs>", 1)),
      ia("rect", {
        x: "-500",
        y: "-500",
        width: tA(W) + 1000,
        height: tA(H) + 1000,
        fill: "#f2efe3"
      }, null, 8 /* PROPS */, _hoisted_3$e),
      (layers.value.grid)
        ? (r4(), ie("rect", {
            key: 0,
            x: "-500",
            y: "-500",
            width: tA(W) + 1000,
            height: tA(H) + 1000,
            fill: "url(#grid)"
          }, null, 8 /* PROPS */, _hoisted_4$e))
        : ig("v-if", true),
      (layers.value.land)
        ? (r4(), ie("path", {
            key: 1,
            d: landPath.value,
            fill: "url(#landGrad)",
            stroke: "#cdc7b2",
            "stroke-width": "1.2"
          }, null, 8 /* PROPS */, _hoisted_5$e))
        : ig("v-if", true),
      (layers.value.land)
        ? (r4(), ie("path", {
            key: 2,
            d: landPath.value,
            fill: "none",
            stroke: "#d8d2bd",
            "stroke-width": "6",
            opacity: "0.3",
            filter: "url(#soft)"
          }, null, 8 /* PROPS */, _hoisted_6$e))
        : ig("v-if", true),
      ig(" 疆域 "),
      (layers.value.regions)
        ? (r4(), ie("g", _hoisted_7$e, [
            (r4(true), ie(rQ, null, lj(regionPolys.value, (r) => {
              return (r4(), ie("path", {
                key: r.name,
                d: r.d,
                fill: r.color,
                "fill-opacity": "0.13",
                stroke: r.color,
                "stroke-width": "1.3",
                "stroke-opacity": "0.5",
                "stroke-dasharray": "7 4"
              }, null, 8 /* PROPS */, _hoisted_8$e))
            }), 128 /* KEYED_FRAGMENT */)),
            (r4(true), ie(rQ, null, lj(regionPolys.value, (r) => {
              return (r4(), ie("text", {
                key: r.name + '-t',
                x: r.cx,
                y: r.cy,
                "text-anchor": "middle",
                "font-size": "16",
                "font-family": "serif",
                fill: r.color,
                opacity: "0.8",
                style: {"paint-order":"stroke","stroke":"#f2efe3","stroke-width":"3px"}
              }, ea(r.name), 9 /* TEXT, PROPS */, _hoisted_9$e))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : ig("v-if", true),
      ig(" 山脉 "),
      (layers.value.mountains)
        ? (r4(), ie("g", _hoisted_10$d, [
            (r4(true), ie(rQ, null, lj(mountainPaths.value, (m) => {
              return (r4(), ie("path", {
                key: m.name,
                d: m.d,
                fill: "none",
                stroke: "#b9ae95",
                "stroke-width": "2.4",
                "stroke-linecap": "round",
                "stroke-dasharray": "1 7",
                opacity: "0.75"
              }, null, 8 /* PROPS */, _hoisted_11$d))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : ig("v-if", true),
      ig(" 水系 "),
      (layers.value.rivers)
        ? (r4(), ie("g", _hoisted_12$d, [
            (r4(true), ie(rQ, null, lj(riverPaths.value, (r) => {
              return (r4(), ie("path", {
                key: r.name,
                d: r.d,
                fill: "none",
                stroke: "#8fb2c9",
                "stroke-width": r.w,
                "stroke-linecap": "round",
                opacity: "0.9"
              }, null, 8 /* PROPS */, _hoisted_13$c))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : ig("v-if", true),
      ig(" 路线 "),
      (layers.value.routes)
        ? (r4(), ie("g", _hoisted_14$b, [
            (r4(true), ie(rQ, null, lj(routePaths.value, (r, i) => {
              return (r4(), ie("path", {
                key: 'rt' + i,
                d: r.d,
                fill: "none",
                stroke: r.color,
                "stroke-width": "3",
                "stroke-dasharray": "8 5",
                "marker-end": "url(#arrow)",
                opacity: "0.92"
              }, [...(_cache[8] || (_cache[8] = [
                ia("animate", {
                  attributeName: "stroke-dashoffset",
                  from: "26",
                  to: "0",
                  dur: "1.5s",
                  repeatCount: "indefinite"
                }, null, -1 /* CACHED */)
              ]))], 8 /* PROPS */, _hoisted_15$9))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : ig("v-if", true),
      ig(" 地名 "),
      (layers.value.places)
        ? (r4(), ie("g", _hoisted_16$9, [
            (r4(true), ie(rQ, null, lj(placed.value, (p) => {
              return (r4(), ie("g", {
                key: p.id,
                style: {"cursor":"pointer"},
                onClick: oa($event => (emit('place', p.id)), ["stop"])
              }, [
                (p.type === '都城')
                  ? (r4(), ie("circle", {
                      key: 0,
                      cx: p.xy[0],
                      cy: p.xy[1],
                      r: p.id === __props.focusId ? 5.2 : 3.4,
                      fill: p.id === __props.focusId ? '#b3282d' : '#3c3a34',
                      stroke: "#fff",
                      "stroke-width": "1.2"
                    }, null, 8 /* PROPS */, _hoisted_18$9))
                  : (p.type === '关隘')
                    ? (r4(), ie("path", {
                        key: 1,
                        d: `M${p.xy[0]},${p.xy[1] - 4.6} L${p.xy[0] + 4.4},${p.xy[1] + 3} L${p.xy[0] - 4.4},${p.xy[1] + 3} Z`,
                        fill: p.id === __props.focusId ? '#b3282d' : '#5b564b',
                        stroke: "#fff",
                        "stroke-width": "0.8"
                      }, null, 8 /* PROPS */, _hoisted_19$9))
                    : (r4(), ie("circle", {
                        key: 2,
                        cx: p.xy[0],
                        cy: p.xy[1],
                        r: p.id === __props.focusId ? 5 : 2.6,
                        fill: p.id === __props.focusId ? '#b3282d' : '#5b564b',
                        stroke: "#fff",
                        "stroke-width": "0.8"
                      }, null, 8 /* PROPS */, _hoisted_20$7)),
                ia("circle", {
                  cx: p.xy[0],
                  cy: p.xy[1],
                  r: "9",
                  fill: "transparent"
                }, null, 8 /* PROPS */, _hoisted_21$7),
                ia("title", null, ea(p.name) + "（" + ea(p.modern) + "）：" + ea(p.desc), 1 /* TEXT */)
              ], 8 /* PROPS */, _hoisted_17$9))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : ig("v-if", true),
      ig(" 沙盘标记 "),
      (r4(true), ie(rQ, null, lj(markerPts.value, (m, i) => {
        return (r4(), ie("g", {
          key: 'mk' + i
        }, [
          ia("rect", {
            x: m.xy[0] - 4.6,
            y: m.xy[1] - 4.6,
            width: "9.2",
            height: "9.2",
            fill: m.side === 0 ? '#b3282d' : '#1f4e79',
            stroke: "#fff",
            "stroke-width": "1",
            transform: "rotate(45)",
            "transform-origin": `${m.xy[0]} ${m.xy[1]}`,
            opacity: "0.95"
          }, null, 8 /* PROPS */, _hoisted_22$6)
        ]))
      }), 128 /* KEYED_FRAGMENT */)),
      ig(" 标注 "),
      (layers.value.labels)
        ? (r4(), ie("g", _hoisted_23$6, [
            (r4(true), ie(rQ, null, lj(labels.value, (l) => {
              return (r4(), ie("text", {
                key: 'lb-' + l.name + l.lx,
                x: l.lx,
                y: l.ly,
                "font-size": "11.5",
                "font-family": "serif",
                fill: "#33302a",
                "font-weight": l.pr > 900 ? 700 : 400,
                style: {"paint-order":"stroke","stroke":"#f2efe3","stroke-width":"2.8px","stroke-linejoin":"round"}
              }, ea(l.name), 9 /* TEXT, PROPS */, _hoisted_24$5))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : ig("v-if", true)
    ], 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_2$e)),
    (!__props.compact)
      ? (r4(), ie("div", _hoisted_25$4, [
          _cache[18] || (_cache[18] = ia("div", { class: "layer-title" }, "图层", -1 /* CACHED */)),
          ia("label", _hoisted_26$4, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((layers.value.regions) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.regions]
            ]),
            _cache[10] || (_cache[10] = id(" 疆域", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_27$4, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((layers.value.rivers) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.rivers]
            ]),
            _cache[11] || (_cache[11] = id(" 水系", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_28$3, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((layers.value.mountains) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.mountains]
            ]),
            _cache[12] || (_cache[12] = id(" 山脉", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_29$3, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((layers.value.places) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.places]
            ]),
            _cache[13] || (_cache[13] = id(" 历史地名", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_30$3, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((layers.value.labels) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.labels]
            ]),
            _cache[14] || (_cache[14] = id(" 地名标注", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_31$3, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((layers.value.modern) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.modern]
            ]),
            _cache[15] || (_cache[15] = id(" 现代地名", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_32$3, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((layers.value.grid) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.grid]
            ]),
            _cache[16] || (_cache[16] = id(" 计里画方", -1 /* CACHED */))
          ]),
          ia("label", _hoisted_33$2, [
            nu(ia("input", {
              type: "checkbox",
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((layers.value.land) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [s3, layers.value.land]
            ]),
            _cache[17] || (_cache[17] = id(" 陆界", -1 /* CACHED */))
          ])
        ]))
      : ig("v-if", true),
    ia("div", { class: "map-zoom" }, [
      ia("button", { onClick: zoomIn }, "＋"),
      ia("button", { onClick: zoomOut }, "－"),
      ia("button", { onClick: reset }, "⟲")
    ]),
    ig(" 鹰眼 "),
    (view.value.scale > 1.15)
      ? (r4(), ie("div", _hoisted_34$1, [
          (r4(), ie("svg", {
            viewBox: `0 0 ${tA(W)} ${tA(H)}`
          }, [
            ia("path", {
              d: landPath.value,
              fill: "#e8e6d3",
              stroke: "#cdc7b2",
              "stroke-width": "3"
            }, null, 8 /* PROPS */, _hoisted_36$1),
            ia("rect", {
              x: view.value.cx - base.value.w / view.value.scale / 2,
              y: view.value.cy - base.value.h / view.value.scale / 2,
              width: base.value.w / view.value.scale,
              height: base.value.h / view.value.scale,
              fill: "none",
              stroke: "#b3282d",
              "stroke-width": "6"
            }, null, 8 /* PROPS */, _hoisted_37$1)
          ], 8 /* PROPS */, _hoisted_35$1))
        ]))
      : ig("v-if", true),
    (__props.caption)
      ? (r4(), ie("div", _hoisted_38$1, ea(__props.caption), 1 /* TEXT */))
      : ig("v-if", true),
    (!__props.compact)
      ? (r4(), ie("div", _hoisted_39$1, [...(_cache[19] || (_cache[19] = [
          ih("<span><i style=\"background:#3c3a34;\"></i>都城</span><span><i style=\"background:#5b564b;\"></i>城邑/关隘</span><span><i style=\"background:#8fb2c9;\"></i>水系</span><span><i style=\"background:#b3282d;\"></i>行军路线</span><span style=\"opacity:.7;\">示意古地图 · 坐标取今地</span>", 5)
        ]))]))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$d = { class: "page" };
const _hoisted_2$d = { class: "map-grid" };
const _hoisted_3$d = { class: "map-main" };
const _hoisted_4$d = {
  class: "filters",
  style: {"margin-top":"0"}
};
const _hoisted_5$d = ["onClick"];
const _hoisted_6$d = {
  key: 0,
  class: "panel",
  style: {"margin-top":"12px"}
};
const _hoisted_7$d = { class: "panel-body" };
const _hoisted_8$d = { style: {"display":"flex","align-items":"baseline","gap":"10px"} };
const _hoisted_9$d = { class: "card-title" };
const _hoisted_10$c = { class: "tagline" };
const _hoisted_11$c = { class: "tagline" };
const _hoisted_12$c = {
  class: "desc",
  style: {"margin-top":"8px"}
};
const _hoisted_13$b = {
  class: "rel-list",
  style: {"margin-top":"10px"}
};
const _hoisted_14$a = ["onClick"];
const _hoisted_15$8 = {
  class: "panel",
  style: {"position":"sticky","top":"70px"}
};
const _hoisted_16$8 = { class: "panel-head" };
const _hoisted_17$8 = { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_18$8 = {
  class: "panel-body",
  style: {"padding":"10px 12px"}
};
const _hoisted_19$8 = {
  class: "filters",
  style: {"margin":"8px 0 6px"}
};
const _hoisted_20$6 = ["onClick"];
const _hoisted_21$6 = { style: {"max-height":"430px","overflow":"auto"} };
const _hoisted_22$5 = ["onClick"];
const _hoisted_23$5 = { style: {"flex":"1"} };
const _hoisted_24$4 = { style: {"font-size":"10.5px","color":"var(--muted)"} };


var MapView = {
  __name: 'MapView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {
const kw = tx("");
const type = tx("全部");
const focus = tx(null);
const period = tx("");
const eras = [
  { k: "zhanguo", n: "战国七雄" },
  { k: "qin", n: "秦（前221）" },
  { k: "chuhan", n: "楚汉分封（前206）" },
  { k: "hanchu", n: "汉初（前195）" },
];

const places = iD(() => store.places?.places || []);
const types = iD(() => ["全部", ...new Set(places.value.map((p) => p.type))]);
const list = iD(() =>
  places.value.filter((p) => (type.value === "全部" || p.type === type.value) && (!kw.value.trim() || p.name.includes(kw.value) || (p.modern || "").includes(kw.value)))
);
const focusPlace = iD(() => places.value.find((p) => p.id === focus.value));
function pick(id) { focus.value = id; }

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$d, [
    _cache[4] || (_cache[4] = ia("div", { class: "page-head" }, [
      ia("h2", null, "历史地图"),
      ia("p", null, "古人讲「左图右史」。读《史记》不辨方位，则战争看不懂、巡狩串不起。此处收 160 处古地名，点选可查今地与会涉及篇目。")
    ], -1 /* CACHED */)),
    ia("div", _hoisted_2$d, [
      ia("div", _hoisted_3$d, [
        ia("div", _hoisted_4$d, [
          ia("button", {
            class: Y(["filter-pill", { on: !period.value }]),
            onClick: _cache[0] || (_cache[0] = $event => (period.value = ''))
          }, "无疆域", 2 /* CLASS */),
          (r4(), ie(rQ, null, lj(eras, (e) => {
            return ia("button", {
              key: e.k,
              class: Y(["filter-pill", { on: period.value === e.k }]),
              onClick: $event => (period.value = e.k)
            }, ea(e.n), 11 /* TEXT, CLASS, PROPS */, _hoisted_5$d)
          }), 64 /* STABLE_FRAGMENT */)),
          _cache[2] || (_cache[2] = ia("span", { style: {"font-size":"12px","color":"var(--muted)","align-self":"center"} }, "疆域为示意，非精确边界；滚轮缩放、拖拽平移", -1 /* CACHED */))
        ]),
        iu(MapCanvas, {
          places: places.value,
          region: period.value,
          "focus-id": focus.value || '',
          height: 600,
          onPlace: pick
        }, null, 8 /* PROPS */, ["places", "region", "focus-id"]),
        (focusPlace.value)
          ? (r4(), ie("div", _hoisted_6$d, [
              ia("div", _hoisted_7$d, [
                ia("div", _hoisted_8$d, [
                  ia("div", _hoisted_9$d, ea(focusPlace.value.name), 1 /* TEXT */),
                  ia("span", _hoisted_10$c, ea(focusPlace.value.type), 1 /* TEXT */),
                  ia("span", _hoisted_11$c, "今 " + ea(focusPlace.value.modern), 1 /* TEXT */)
                ]),
                ia("div", _hoisted_12$c, ea(focusPlace.value.desc), 1 /* TEXT */),
                ia("div", _hoisted_13$b, [
                  (r4(true), ie(rQ, null, lj(focusPlace.value.chapters, (no) => {
                    return (r4(), ie("span", {
                      key: no,
                      class: "rel-pill",
                      onClick: $event => (tA(go)('/c/' + no))
                    }, " 卷" + ea(no) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === no)?.title), 9 /* TEXT, PROPS */, _hoisted_14$a))
                  }), 128 /* KEYED_FRAGMENT */))
                ])
              ])
            ]))
          : ig("v-if", true)
      ]),
      ia("div", _hoisted_15$8, [
        ia("div", _hoisted_16$8, [
          _cache[3] || (_cache[3] = ia("b", null, "地名索引", -1 /* CACHED */)),
          ia("span", _hoisted_17$8, ea(list.value.length), 1 /* TEXT */)
        ]),
        ia("div", _hoisted_18$8, [
          nu(ia("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((kw).value = $event)),
            class: "toc-filter",
            placeholder: "搜索地名或今地"
          }, null, 512 /* NEED_PATCH */), [
            [s4, kw.value]
          ]),
          ia("div", _hoisted_19$8, [
            (r4(true), ie(rQ, null, lj(types.value, (t) => {
              return (r4(), ie("button", {
                key: t,
                class: Y(["filter-pill", { on: type.value === t }]),
                onClick: $event => (type.value = t),
                style: {"padding":"3px 9px","font-size":"11.5px"}
              }, ea(t), 11 /* TEXT, CLASS, PROPS */, _hoisted_20$6))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          ia("div", _hoisted_21$6, [
            (r4(true), ie(rQ, null, lj(list.value, (p) => {
              return (r4(), ie("div", {
                key: p.id,
                class: Y(["toc-item", { on: focus.value === p.id }]),
                style: {"padding-left":"8px"},
                onClick: $event => (pick(p.id))
              }, [
                ia("span", _hoisted_23$5, ea(p.name), 1 /* TEXT */),
                ia("span", _hoisted_24$4, ea(p.type), 1 /* TEXT */)
              ], 10 /* CLASS, PROPS */, _hoisted_22$5))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ])
    ])
  ]))
}
}

};

const _hoisted_1$c = { class: "page" };
const _hoisted_2$c = { class: "grid-cards" };
const _hoisted_3$c = ["onClick"];
const _hoisted_4$c = { class: "meta" };
const _hoisted_5$c = {
  class: "page-head",
  style: {"display":"flex","align-items":"flex-end","gap":"14px"}
};
const _hoisted_6$c = { style: {"margin-left":"auto","display":"flex","gap":"8px"} };
const _hoisted_7$c = { class: "sandbox-grid" };
const _hoisted_8$c = {
  class: "panel",
  style: {"margin-top":"10px"}
};
const _hoisted_9$c = {
  class: "panel-body",
  style: {"display":"flex","align-items":"center","gap":"12px","flex-wrap":"wrap"}
};
const _hoisted_10$b = { class: "side-legend" };
const _hoisted_11$b = { style: {"font-size":"12px","color":"var(--muted)"} };
const _hoisted_12$b = {
  class: "panel-body",
  style: {"padding-top":"0","display":"flex","align-items":"center","gap":"12px"}
};
const _hoisted_13$a = ["max", "value"];
const _hoisted_14$9 = { style: {"font-size":"11.5px","color":"var(--muted)","white-space":"nowrap"} };
const _hoisted_15$7 = { class: "panel" };
const _hoisted_16$7 = { class: "panel-head" };
const _hoisted_17$7 = { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_18$7 = {
  class: "panel-body",
  style: {"padding":"10px"}
};
const _hoisted_19$7 = { class: "step-list" };
const _hoisted_20$5 = ["onClick"];
const _hoisted_21$5 = { class: "sn" };
const _hoisted_22$4 = { class: "st" };
const _hoisted_23$4 = {
  key: 0,
  class: "sd"
};


var SandboxView = {
  __name: 'SandboxView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const campaigns = iD(() => store.campaigns?.campaigns || []);
const active = iD(() => campaigns.value.find((c) => c.id === props.route.id) || null);
const step = tx(0);
const playing = tx(false);
let timer = null;

ny(active, () => { step.value = 0; playing.value = false; }, { immediate: true });

const cur = iD(() => (active.value?.steps || [])[step.value] || null);
const routes = iD(() => {
  if (!cur.value) return [];
  return (cur.value.routes || []).map((r) => ({ ...r, color: active.value.sides?.[r.side]?.color || "#b3282d" }));
});
const markers = iD(() => cur.value?.markers || []);

const places = iD(() => store.places?.places || []);
const relevantPlaces = iD(() => {
  const names = new Set();
  for (const s of active.value?.steps || []) for (const m of s.markers || []) names.add(m.name);
  const always = ["咸阳", "洛阳", "邯郸", "临淄", "大梁", "郢", "蓟", "晋阳", "彭城", "下相", "沛", "成皋", "荥阳", "汉中", "南郑"];
  return places.value.filter((p) => names.has(p.name) || always.includes(p.name));
});
const fitPts = iD(() => {
  const pts = [];
  for (const s of active.value?.steps || []) {
    for (const m of s.markers || []) pts.push([m.lon, m.lat]);
    for (const r of s.routes || []) for (const p of r.points || []) pts.push(p);
  }
  return pts;
});
function play() {
  playing.value = !playing.value;
  clearInterval(timer);
  if (playing.value) {
    timer = setInterval(() => {
      if (!active.value) return;
      if (step.value >= active.value.steps.length - 1) { playing.value = false; clearInterval(timer); return; }
      step.value++;
    }, 2600);
  }
}
lw(() => clearInterval(timer));

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$c, [
    (!active.value)
      ? (r4(), ie(rQ, { key: 0 }, [
          _cache[5] || (_cache[5] = ia("div", { class: "page-head" }, [
            ia("h2", null, "沙盘态势"),
            ia("p", null, "《史记》写战争，常几百字带过，读者云里雾里。沙盘把行军路线、交战地点、兵力方向还原到地图上，按阶段推进，可「开上帝视角」看一场仗怎么打的。")
          ], -1 /* CACHED */)),
          ia("div", _hoisted_2$c, [
            (r4(true), ie(rQ, null, lj(campaigns.value, (c) => {
              return (r4(), ie("div", {
                key: c.id,
                class: "item-card",
                onClick: $event => (tA(go)('/sandbox/' + c.id))
              }, [
                ia("h4", null, ea(c.name), 1 /* TEXT */),
                ia("p", null, ea(c.summary), 1 /* TEXT */),
                ia("div", _hoisted_4$c, [
                  ia("span", null, ea(c.date), 1 /* TEXT */),
                  ia("span", null, ea(c.steps?.length) + " 个阶段", 1 /* TEXT */),
                  ia("span", null, "卷" + ea(c.chapter), 1 /* TEXT */)
                ])
              ], 8 /* PROPS */, _hoisted_3$c))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ], 64 /* STABLE_FRAGMENT */))
      : (r4(), ie(rQ, { key: 1 }, [
          ia("div", _hoisted_5$c, [
            ia("div", null, [
              ia("h2", null, ea(active.value.name), 1 /* TEXT */),
              ia("p", null, ea(active.value.summary), 1 /* TEXT */)
            ]),
            ia("div", _hoisted_6$c, [
              ia("button", {
                class: "btn sm",
                onClick: _cache[0] || (_cache[0] = $event => (tA(go)('/sandbox')))
              }, "← 全部战役"),
              ia("button", {
                class: "btn sm",
                onClick: _cache[1] || (_cache[1] = $event => (tA(go)('/c/' + active.value.chapter)))
              }, "读原文 →")
            ])
          ]),
          ia("div", _hoisted_7$c, [
            ia("div", null, [
              iu(MapCanvas, {
                places: relevantPlaces.value,
                routes: routes.value,
                markers: markers.value,
                fit: fitPts.value,
                height: 560,
                caption: cur.value ? '阶段 ' + (step.value + 1) + ' · ' + cur.value.title : '',
                compact: ""
              }, null, 8 /* PROPS */, ["places", "routes", "markers", "fit", "caption"]),
              ia("div", _hoisted_8$c, [
                ia("div", _hoisted_9$c, [
                  ia("div", _hoisted_10$b, [
                    (r4(true), ie(rQ, null, lj(active.value.sides, (s, i) => {
                      return (r4(), ie("span", { key: i }, [
                        ia("i", {
                          style: G({ background: s.color })
                        }, null, 4 /* STYLE */),
                        id(ea(s.name), 1 /* TEXT */)
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _cache[6] || (_cache[6] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
                  ia("span", _hoisted_11$b, "第 " + ea(step.value + 1) + " / " + ea(active.value.steps.length) + " 阶段", 1 /* TEXT */),
                  ia("button", {
                    class: "btn sm",
                    onClick: _cache[2] || (_cache[2] = $event => (step.value = Math.max(0, step.value - 1)))
                  }, "上一阶段"),
                  ia("button", {
                    class: "btn sm",
                    onClick: _cache[3] || (_cache[3] = $event => (step.value = Math.min(active.value.steps.length - 1, step.value + 1)))
                  }, "下一阶段"),
                  ia("button", {
                    class: "btn sm primary",
                    onClick: play
                  }, ea(playing.value ? "暂停" : "自动推演"), 1 /* TEXT */)
                ]),
                ia("div", _hoisted_12$b, [
                  _cache[7] || (_cache[7] = ia("span", { style: {"font-size":"11.5px","color":"var(--muted)","white-space":"nowrap"} }, "时间轴", -1 /* CACHED */)),
                  ia("input", {
                    type: "range",
                    style: {"flex":"1","width":"auto"},
                    min: 0,
                    max: active.value.steps.length - 1,
                    value: step.value,
                    onInput: _cache[4] || (_cache[4] = $event => (step.value = Number($event.target.value)))
                  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13$a),
                  ia("span", _hoisted_14$9, ea(active.value.steps.length) + " 阶段", 1 /* TEXT */)
                ])
              ])
            ]),
            ia("div", null, [
              ia("div", _hoisted_15$7, [
                ia("div", _hoisted_16$7, [
                  _cache[8] || (_cache[8] = ia("b", null, "态势推演", -1 /* CACHED */)),
                  ia("span", _hoisted_17$7, ea(active.value.date), 1 /* TEXT */)
                ]),
                ia("div", _hoisted_18$7, [
                  ia("div", _hoisted_19$7, [
                    (r4(true), ie(rQ, null, lj(active.value.steps, (s, i) => {
                      return (r4(), ie("div", {
                        key: i,
                        class: Y(["step", { on: i === step.value }]),
                        onClick: $event => (step.value = i)
                      }, [
                        ia("div", _hoisted_21$5, "阶段 " + ea(i + 1), 1 /* TEXT */),
                        ia("div", _hoisted_22$4, ea(s.title), 1 /* TEXT */),
                        (i === step.value)
                          ? (r4(), ie("div", _hoisted_23$4, ea(s.desc), 1 /* TEXT */))
                          : ig("v-if", true)
                      ], 10 /* CLASS, PROPS */, _hoisted_20$5))
                    }), 128 /* KEYED_FRAGMENT */))
                  ])
                ])
              ]),
              _cache[9] || (_cache[9] = ia("div", {
                class: "panel",
                style: {"margin-top":"12px"}
              }, [
                ia("div", {
                  class: "panel-body desc",
                  style: {"font-size":"12.5px","color":"var(--ink-3)"}
                }, " 沙盘坐标取今地，路线为示意性推演，据《史记》相关篇目与通行史地考证还原，非考古测绘。 ")
              ], -1 /* CACHED */))
            ])
          ])
        ], 64 /* STABLE_FRAGMENT */))
  ]))
}
}

};

const _hoisted_1$b = { class: "page" };
const _hoisted_2$b = { class: "filters" };
const _hoisted_3$b = { style: {"font-size":"12px","color":"var(--muted)","align-self":"center"} };
const _hoisted_4$b = { style: {"display":"flex","align-items":"baseline","gap":"10px","margin-bottom":"8px"} };
const _hoisted_5$b = { style: {"font-family":"var(--serif)","font-size":"17px"} };
const _hoisted_6$b = ["onClick"];
const _hoisted_7$b = { class: "grid-cards" };
const _hoisted_8$b = { class: "poem" };
const _hoisted_9$b = { class: "meta" };
const _hoisted_10$a = { key: 0 };
const _hoisted_11$a = { style: {"margin-top":"6px"} };
const _hoisted_12$a = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};


var PoemsView = {
  __name: 'PoemsView',
  setup(__props) {

const kw = tx("");
const poems = iD(() => store.poems?.poems || []);
const list = iD(() =>
  poems.value.filter((p) => !kw.value.trim() || [p.title, p.author, p.subject, ...(p.lines || [])].join(" ").includes(kw.value.trim()))
);
const byChapter = iD(() => {
  const m = new Map();
  for (const p of list.value) for (const c of p.chapters || []) { if (!m.has(c)) m.set(c, []); m.get(c).push(p); }
  return [...m.entries()].sort((a, b) => a[0] - b[0]);
});

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$b, [
    _cache[1] || (_cache[1] = ia("div", { class: "page-head" }, [
      ia("h2", null, "后人咏史"),
      ia("p", null, "《史记》里的人与事，被历代诗人反复吟咏。读史之余，看后人如何评说——这是「伴读」的另一种形态。")
    ], -1 /* CACHED */)),
    ia("div", _hoisted_2$b, [
      nu(ia("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((kw).value = $event)),
        class: "search-input",
        style: {"max-width":"280px"},
        placeholder: "搜索诗人、诗题、诗句，如「项羽」「荆轲」"
      }, null, 512 /* NEED_PATCH */), [
        [s4, kw.value]
      ]),
      ia("span", _hoisted_3$b, "共 " + ea(list.value.length) + " 首 · 关联 " + ea(byChapter.value.length) + " 篇", 1 /* TEXT */)
    ]),
    (r4(true), ie(rQ, null, lj(byChapter.value, ([c, arr]) => {
      return (r4(), ie("div", {
        key: c,
        style: {"margin-bottom":"22px"}
      }, [
        ia("div", _hoisted_4$b, [
          ia("b", _hoisted_5$b, "卷" + ea(c) + " · " + ea(tA(store).index?.chapters.find((x) => x.no === c)?.title), 1 /* TEXT */),
          ia("a", {
            style: {"font-size":"12px"},
            onClick: $event => (tA(go)('/c/' + c))
          }, "读原文 →", 8 /* PROPS */, _hoisted_6$b)
        ]),
        ia("div", _hoisted_7$b, [
          (r4(true), ie(rQ, null, lj(arr, (p) => {
            return (r4(), ie("div", {
              key: p.id,
              class: "item-card"
            }, [
              ia("h4", null, ea(p.title), 1 /* TEXT */),
              ia("div", _hoisted_8$b, [
                (r4(true), ie(rQ, null, lj(p.lines, (l, i) => {
                  return (r4(), ie("span", {
                    key: i,
                    class: "l"
                  }, ea(l), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              ia("div", _hoisted_9$b, [
                ia("span", null, ea(p.dynasty) + " · " + ea(p.author), 1 /* TEXT */),
                (p.subject)
                  ? (r4(), ie("span", _hoisted_10$a, "咏 " + ea(p.subject), 1 /* TEXT */))
                  : ig("v-if", true)
              ]),
              ia("p", _hoisted_11$a, ea(p.note), 1 /* TEXT */)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    (!list.value.length)
      ? (r4(), ie("div", _hoisted_12$a, "没有找到匹配的诗词。"))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$a = { class: "page" };
const _hoisted_2$a = { class: "grid-cards" };
const _hoisted_3$a = ["onClick"];
const _hoisted_4$a = { class: "meta" };
const _hoisted_5$a = {
  class: "modal",
  style: {"width":"760px"}
};
const _hoisted_6$a = { class: "modal-head" };
const _hoisted_7$a = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_8$a = { class: "modal-body" };
const _hoisted_9$a = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"14.5px","line-height":"2"}
};
const _hoisted_10$9 = ["onClick"];
const _hoisted_11$9 = { class: "pro-con" };
const _hoisted_12$9 = {
  key: 0,
  style: {"margin-top":"14px"}
};
const _hoisted_13$9 = { style: {"display":"flex","align-items":"center","gap":"8px","font-size":"12.5px","color":"var(--ink-3)"} };
const _hoisted_14$8 = { style: {"color":"var(--accent)"} };
const _hoisted_15$6 = { class: "vote-bar" };
const _hoisted_16$6 = {
  class: "panel",
  style: {"margin-top":"14px","background":"var(--panel-2)"}
};
const _hoisted_17$6 = { class: "panel-body" };
const _hoisted_18$6 = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"14.5px"}
};
const _hoisted_19$6 = { class: "desc" };


var DecisionsView = {
  __name: 'DecisionsView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const cards = iD(() => store.decisions?.decisions || []);
const active = iD(() => cards.value.find((c) => c.id === props.route.id) || null);
const picked = tx(null);

function open(c) { picked.value = store.votes[c.id]?.pick ?? null; go("/decisions/" + c.id); }
function close() { go("/decisions"); }
ny(active, () => { picked.value = active.value ? (store.votes[active.value.id]?.pick ?? null) : null; }, { immediate: true });
function vote(i) {
  if (!active.value) return;
  const c = active.value;
  const base = store.votes[c.id] || { agree: c.vote?.agree ?? 55, disagree: c.vote?.disagree ?? 45};
  if (picked.value === null) {
    const agree = Math.min(99, base.agree + (i === 0 ? 1 : 0));
    store.votes = { ...store.votes, [c.id]: { agree, disagree: 100 - agree, pick: i } };
  }
  picked.value = i;
}
const result = iD(() => {
  if (!active.value) return null;
  return store.votes[active.value.id] || { agree: active.value.vote?.agree ?? 55, disagree: active.value.vote?.disagree ?? 45, pick: null };
});

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$a, [
    _cache[9] || (_cache[9] = ia("div", { class: "page-head" }, [
      ia("h2", null, "决策演武场"),
      ia("p", null, "读史最痛快处，是设身处地：若你是当时的决策者，会怎么选？选完再看古人如何选、结果如何——历史没有标准答案，但有真实后果。")
    ], -1 /* CACHED */)),
    ia("div", _hoisted_2$a, [
      (r4(true), ie(rQ, null, lj(cards.value, (c) => {
        return (r4(), ie("div", {
          key: c.id,
          class: "item-card",
          onClick: $event => (open(c))
        }, [
          ia("h4", null, ea(c.title), 1 /* TEXT */),
          ia("p", null, ea((c.background || "").slice(0, 76)) + "…", 1 /* TEXT */),
          ia("div", _hoisted_4$a, [
            ia("span", null, "卷" + ea(c.chapter), 1 /* TEXT */),
            ia("span", null, ea(c.year < 0 ? "前" + Math.abs(c.year) + "年" : c.year + "年"), 1 /* TEXT */),
            ia("span", null, ea((c.options || []).length) + " 个选项", 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, _hoisted_3$a))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (active.value)
      ? (r4(), ie("div", {
          key: 0,
          class: "overlay",
          onClick: oa(close, ["self"])
        }, [
          ia("div", _hoisted_5$a, [
            ia("div", _hoisted_6$a, [
              ia("b", null, ea(active.value.title), 1 /* TEXT */),
              ia("span", _hoisted_7$a, " 卷" + ea(active.value.chapter) + " · " + ea(active.value.year < 0 ? "前" + Math.abs(active.value.year) + "年" : active.value.year + "年"), 1 /* TEXT */),
              ia("button", {
                class: "icon-btn",
                style: {"margin-left":"auto"},
                onClick: close
              }, "✕")
            ]),
            ia("div", _hoisted_8$a, [
              ia("div", _hoisted_9$a, ea(active.value.background), 1 /* TEXT */),
              _cache[7] || (_cache[7] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
              _cache[8] || (_cache[8] = ia("div", { class: "rel-group-title" }, "请从你的视角决断", -1 /* CACHED */)),
              (r4(true), ie(rQ, null, lj(active.value.options, (o, i) => {
                return (r4(), ie("div", {
                  key: i,
                  class: Y(["decision-opt", { on: picked.value === i }]),
                  onClick: $event => (vote(i))
                }, [
                  ia("h5", null, ea(String.fromCharCode(65 + i)) + ". " + ea(o.label), 1 /* TEXT */),
                  ia("div", _hoisted_11$9, [
                    ia("div", null, [
                      _cache[1] || (_cache[1] = ia("b", { class: "pro" }, "支持的理由", -1 /* CACHED */)),
                      id(ea(o.support), 1 /* TEXT */)
                    ]),
                    ia("div", null, [
                      _cache[2] || (_cache[2] = ia("b", { class: "con" }, "反对的理由", -1 /* CACHED */)),
                      id(ea(o.oppose), 1 /* TEXT */)
                    ])
                  ])
                ], 10 /* CLASS, PROPS */, _hoisted_10$9))
              }), 128 /* KEYED_FRAGMENT */)),
              (picked.value !== null)
                ? (r4(), ie("div", _hoisted_12$9, [
                    ia("div", _hoisted_13$9, [
                      _cache[3] || (_cache[3] = ia("span", null, "读史者投票", -1 /* CACHED */)),
                      ia("b", _hoisted_14$8, ea(result.value.agree) + "%", 1 /* TEXT */),
                      _cache[4] || (_cache[4] = ia("span", null, "/", -1 /* CACHED */)),
                      ia("b", null, ea(result.value.disagree) + "%", 1 /* TEXT */)
                    ]),
                    ia("div", _hoisted_15$6, [
                      ia("i", {
                        style: G([{"background":"var(--accent)"}, { width: result.value.agree + '%' }])
                      }, null, 4 /* STYLE */),
                      ia("i", {
                        style: G([{"background":"var(--line)"}, { width: result.value.disagree + '%' }])
                      }, null, 4 /* STYLE */)
                    ]),
                    ia("div", _hoisted_16$6, [
                      ia("div", _hoisted_17$6, [
                        _cache[5] || (_cache[5] = ia("div", { class: "rel-group-title" }, "史实的选择", -1 /* CACHED */)),
                        ia("div", _hoisted_18$6, ea(active.value.history), 1 /* TEXT */),
                        _cache[6] || (_cache[6] = ia("div", {
                          class: "rel-group-title",
                          style: {"margin-top":"10px"}
                        }, "结果与评价", -1 /* CACHED */)),
                        ia("div", _hoisted_19$6, ea(active.value.result), 1 /* TEXT */),
                        ia("button", {
                          class: "btn sm",
                          style: {"margin-top":"10px"},
                          onClick: _cache[0] || (_cache[0] = $event => {close(); tA(go)('/c/' + active.value.chapter);})
                        }, "去读原文 →")
                      ])
                    ])
                  ]))
                : ig("v-if", true)
            ])
          ])
        ]))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$9 = { class: "page" };
const _hoisted_2$9 = { class: "filters" };
const _hoisted_3$9 = ["onClick"];
const _hoisted_4$9 = { class: "grid-cards" };
const _hoisted_5$9 = ["onClick"];
const _hoisted_6$9 = { class: "meta" };
const _hoisted_7$9 = {
  class: "modal",
  style: {"width":"620px"}
};
const _hoisted_8$9 = { class: "modal-head" };
const _hoisted_9$9 = { class: "tagline" };
const _hoisted_10$8 = { class: "modal-body" };
const _hoisted_11$8 = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"14.5px","line-height":"2"}
};
const _hoisted_12$8 = { class: "rel-list" };
const _hoisted_13$8 = ["onClick"];


var LexiconView = {
  __name: 'LexiconView',
  setup(__props) {

const kw = tx("");
const cat = tx("全部");
const entries = iD(() => store.lexicon?.entries || []);
const cats = iD(() => ["全部", ...new Set(entries.value.map((e) => e.category))]);
const list = iD(() =>
  entries.value.filter((e) =>
    (cat.value === "全部" || e.category === cat.value) &&
    (!kw.value.trim() || e.term.includes(kw.value) || (e.definition || "").includes(kw.value))
  )
);
const active = tx(null);

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$9, [
    _cache[5] || (_cache[5] = ia("div", { class: "page-head" }, [
      ia("h2", null, "通鉴百科"),
      ia("p", null, "读《史记》最常卡住的三件事：官职是什么、制度怎么运转、典故从何而来。此处收《史记》正文涉及的官制、礼乐、军事、经济、法律与典故。")
    ], -1 /* CACHED */)),
    ia("div", _hoisted_2$9, [
      nu(ia("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((kw).value = $event)),
        class: "search-input",
        style: {"max-width":"260px"},
        placeholder: "搜索词条，如「丞相」「封禅」「破釜沉舟」"
      }, null, 512 /* NEED_PATCH */), [
        [s4, kw.value]
      ]),
      (r4(true), ie(rQ, null, lj(cats.value, (c) => {
        return (r4(), ie("button", {
          key: c,
          class: Y(["filter-pill", { on: cat.value === c }]),
          onClick: $event => (cat.value = c)
        }, ea(c), 11 /* TEXT, CLASS, PROPS */, _hoisted_3$9))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    ia("div", _hoisted_4$9, [
      (r4(true), ie(rQ, null, lj(list.value, (e) => {
        return (r4(), ie("div", {
          key: e.id,
          class: "item-card",
          onClick: $event => (active.value = e)
        }, [
          ia("h4", null, ea(e.term), 1 /* TEXT */),
          ia("p", null, ea((e.definition || "").slice(0, 64)) + "…", 1 /* TEXT */),
          ia("div", _hoisted_6$9, [
            ia("span", null, ea(e.category), 1 /* TEXT */),
            ia("span", null, ea((e.chapters || []).length) + " 篇相关", 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, _hoisted_5$9))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (active.value)
      ? (r4(), ie("div", {
          key: 0,
          class: "overlay",
          onClick: _cache[2] || (_cache[2] = oa($event => (active.value = null), ["self"]))
        }, [
          ia("div", _hoisted_7$9, [
            ia("div", _hoisted_8$9, [
              ia("b", null, ea(active.value.term), 1 /* TEXT */),
              ia("span", _hoisted_9$9, ea(active.value.category), 1 /* TEXT */),
              ia("button", {
                class: "icon-btn",
                style: {"margin-left":"auto"},
                onClick: _cache[1] || (_cache[1] = $event => (active.value = null))
              }, "✕")
            ]),
            ia("div", _hoisted_10$8, [
              ia("div", _hoisted_11$8, ea(active.value.definition), 1 /* TEXT */),
              _cache[3] || (_cache[3] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
              _cache[4] || (_cache[4] = ia("div", { class: "rel-group-title" }, "相关篇目", -1 /* CACHED */)),
              ia("div", _hoisted_12$8, [
                (r4(true), ie(rQ, null, lj(active.value.chapters, (no) => {
                  return (r4(), ie("span", {
                    key: no,
                    class: "rel-pill",
                    onClick: $event => {active.value = null; tA(go)('/c/' + no);}
                  }, " 卷" + ea(no) + " · " + ea(tA(store).index?.chapters.find((c) => c.no === no)?.title), 9 /* TEXT, PROPS */, _hoisted_13$8))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ])
          ])
        ]))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$8 = { class: "page" };
const _hoisted_2$8 = { class: "page-head" };
const _hoisted_3$8 = {
  class: "panel",
  style: {"padding":"10px 6px 0"}
};
const _hoisted_4$8 = ["viewBox"];
const _hoisted_5$8 = ["x", "y", "width", "height", "fill"];
const _hoisted_6$8 = ["x1", "x2", "y1", "y2"];
const _hoisted_7$8 = ["x", "y"];
const _hoisted_8$8 = ["x", "y"];
const _hoisted_9$8 = ["x", "y"];
const _hoisted_10$7 = ["d"];
const _hoisted_11$7 = ["d"];
const _hoisted_12$7 = ["x1", "x2", "y1", "y2"];
const _hoisted_13$7 = ["x", "y"];
const _hoisted_14$7 = ["cx", "cy"];
const _hoisted_15$5 = ["x1", "x2", "y1", "y2"];
const _hoisted_16$5 = ["cx", "cy"];
const _hoisted_17$5 = ["x", "y", "fill"];
const _hoisted_18$5 = {
  key: 0,
  style: {"padding":"0 18px 12px","font-size":"12.5px","color":"var(--ink-3)"}
};
const _hoisted_19$5 = {
  key: 1,
  style: {"padding":"0 18px 12px","font-size":"12px","color":"var(--muted)"}
};


var ClimateView = {
  __name: 'ClimateView',
  setup(__props) {

const climate = iD(() => store.climate || { points: [], segments: [] });
const W = 1000, H = 420, PAD = { l: 46, r: 18, t: 26, b: 34 };
const years = iD(() => climate.value.points.map((p) => p.year));
const yMin = iD(() => Math.min(...years.value, -3400));
const yMax = iD(() => Math.max(...years.value, 2000));

const sx = (y) => PAD.l + ((y - yMin.value) / (yMax.value - yMin.value)) * (W - PAD.l - PAD.r);
const sy = (d) => PAD.t + ((1.6 - d) / 3.2) * (H - PAD.t - PAD.b);

const linePath = iD(() =>
  climate.value.points.map((p, i) => `${i ? "L" : "M"}${sx(p.year).toFixed(1)},${sy(p.delta).toFixed(1)}`).join("")
);
const areaPath = iD(() => {
  const pts = climate.value.points;
  if (!pts.length) return "";
  return linePath.value + `L${sx(pts[pts.length - 1].year).toFixed(1)},${sy(0).toFixed(1)}L${sx(pts[0].year).toFixed(1)},${sy(0).toFixed(1)}Z`;
});

const bands = iD(() =>
  (climate.value.segments || []).map((s) => ({
    ...s,
    x: sx(s.from), w: Math.max(1, sx(s.to) - sx(s.from)),
    color: s.type === "warm" ? "#c8836b" : s.type === "cold" ? "#6b8fae" : "#9a9a8a",
  }))
);

const dynasties = [
  { name: "夏", year: -2070 }, { name: "商", year: -1600 }, { name: "周", year: -1046 },
  { name: "秦", year: -221 }, { name: "汉", year: -202 }, { name: "三国", year: 220 },
  { name: "晋", year: 265 }, { name: "南北朝", year: 420 }, { name: "隋", year: 581 },
  { name: "唐", year: 618 }, { name: "宋", year: 960 }, { name: "元", year: 1271 },
  { name: "明", year: 1368 }, { name: "清", year: 1644 },
];

const hover = tx(null);
function onMove(e) {
  const svg = e.currentTarget;
  const rect = svg.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * W;
  const year = yMin.value + ((x - PAD.l) / (W - PAD.l - PAD.r)) * (yMax.value - yMin.value);
  let best = null, bd = Infinity;
  for (const p of climate.value.points) {
    const d = Math.abs(p.year - year);
    if (d < bd) { bd = d; best = p; }
  }
  if (best && bd < 240) hover.value = { ...best, x: sx(best.year), y: sy(best.delta) };
  else hover.value = null;
}
const verdict = (d) => (d > 0.25 ? "偏暖" : d < -0.25 ? "偏冷" : "接近现代");

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$8, [
    ia("div", _hoisted_2$8, [
      _cache[1] || (_cache[1] = ia("h2", null, "历史气候", -1 /* CACHED */)),
      ia("p", null, ea(climate.value.note || "依竺可桢《中国近五千年来气候变迁的初步研究》总体趋势整理的示意曲线。") + " 冷期常见游牧南下、农区收缩；暖期则宜农区北移、人口增长——这是比朝代更长的周期。", 1 /* TEXT */)
    ]),
    ia("div", _hoisted_3$8, [
      (r4(), ie("svg", {
        class: "chart-svg",
        viewBox: `0 0 ${W} ${H}`,
        onMousemove: onMove,
        onMouseleave: _cache[0] || (_cache[0] = $event => (hover.value = null))
      }, [
        ia("rect", {
          x: "0",
          y: "0",
          width: W,
          height: H,
          fill: "transparent"
        }),
        ig(" 冷暖期底色 "),
        (r4(true), ie(rQ, null, lj(bands.value, (b, i) => {
          return (r4(), ie("rect", {
            key: i,
            x: b.x,
            y: PAD.t,
            width: b.w,
            height: H - PAD.t - PAD.b,
            fill: b.color,
            opacity: "0.12"
          }, null, 8 /* PROPS */, _hoisted_5$8))
        }), 128 /* KEYED_FRAGMENT */)),
        ig(" 零线 "),
        ia("line", {
          x1: PAD.l,
          x2: W - PAD.r,
          y1: sy(0),
          y2: sy(0),
          stroke: "#b9b2a1",
          "stroke-dasharray": "4 4",
          "stroke-width": "1"
        }, null, 8 /* PROPS */, _hoisted_6$8),
        ia("text", {
          x: PAD.l - 6,
          y: sy(0) + 4,
          "font-size": "10",
          "text-anchor": "end",
          fill: "#8c8679"
        }, "0℃", 8 /* PROPS */, _hoisted_7$8),
        ia("text", {
          x: PAD.l - 6,
          y: sy(1) + 4,
          "font-size": "10",
          "text-anchor": "end",
          fill: "#8c8679"
        }, "+1℃", 8 /* PROPS */, _hoisted_8$8),
        ia("text", {
          x: PAD.l - 6,
          y: sy(-1) + 4,
          "font-size": "10",
          "text-anchor": "end",
          fill: "#8c8679"
        }, "-1℃", 8 /* PROPS */, _hoisted_9$8),
        ig(" 面积与曲线 "),
        ia("path", {
          d: areaPath.value,
          fill: "#b3282d",
          opacity: "0.08"
        }, null, 8 /* PROPS */, _hoisted_10$7),
        ia("path", {
          d: linePath.value,
          fill: "none",
          stroke: "#8a5a3b",
          "stroke-width": "2.2",
          "stroke-linejoin": "round"
        }, null, 8 /* PROPS */, _hoisted_11$7),
        ig(" 朝代刻度 "),
        (r4(), ie(rQ, null, lj(dynasties, (d) => {
          return ia("g", {
            key: d.name
          }, [
            ia("line", {
              x1: sx(d.year),
              x2: sx(d.year),
              y1: PAD.t,
              y2: H - PAD.b,
              stroke: "#a9a293",
              "stroke-width": "0.8",
              "stroke-dasharray": "2 5",
              opacity: "0.55"
            }, null, 8 /* PROPS */, _hoisted_12$7),
            ia("text", {
              x: sx(d.year) + 2,
              y: H - PAD.b + 15,
              "font-size": "10.5",
              fill: "#8c8679",
              "font-family": "serif"
            }, ea(d.name), 9 /* TEXT, PROPS */, _hoisted_13$7)
          ])
        }), 64 /* STABLE_FRAGMENT */)),
        ig(" 点 "),
        (r4(true), ie(rQ, null, lj(climate.value.points, (p, i) => {
          return (r4(), ie("circle", {
            key: i,
            cx: sx(p.year),
            cy: sy(p.delta),
            r: "2.2",
            fill: "#8a5a3b"
          }, null, 8 /* PROPS */, _hoisted_14$7))
        }), 128 /* KEYED_FRAGMENT */)),
        (hover.value)
          ? (r4(), ie(rQ, { key: 0 }, [
              ia("line", {
                x1: hover.value.x,
                x2: hover.value.x,
                y1: PAD.t,
                y2: H - PAD.b,
                stroke: "#b3282d",
                "stroke-width": "0.8",
                opacity: "0.5"
              }, null, 8 /* PROPS */, _hoisted_15$5),
              ia("circle", {
                cx: hover.value.x,
                cy: hover.value.y,
                r: "4.5",
                fill: "#b3282d"
              }, null, 8 /* PROPS */, _hoisted_16$5)
            ], 64 /* STABLE_FRAGMENT */))
          : ig("v-if", true),
        ig(" 冷暖标签 "),
        (r4(true), ie(rQ, null, lj(bands.value, (b, i) => {
          return (r4(), ie("text", {
            key: 'bl' + i,
            x: b.x + b.w / 2,
            y: PAD.t + 12,
            "font-size": "10",
            "text-anchor": "middle",
            fill: b.color,
            opacity: "0.9"
          }, ea(b.name), 9 /* TEXT, PROPS */, _hoisted_17$5))
        }), 128 /* KEYED_FRAGMENT */))
      ], 40 /* PROPS, NEED_HYDRATION */, _hoisted_4$8)),
      (hover.value)
        ? (r4(), ie("div", _hoisted_18$5, [
            id(ea(hover.value.year < 0 ? "公元前 " + Math.abs(hover.value.year) : "公元 " + hover.value.year) + " 年 · 年均温较现代 ", 1 /* TEXT */),
            ia("b", {
              style: G({ color: hover.value.delta >= 0 ? '#b3282d' : '#2f6db3' })
            }, ea(hover.value.delta > 0 ? "+" : "") + ea(hover.value.delta) + "℃", 5 /* TEXT, STYLE */),
            id(" （" + ea(verdict(hover.value.delta)) + "） ", 1 /* TEXT */)
          ]))
        : (r4(), ie("div", _hoisted_19$5, "将鼠标移到曲线上查看具体年代"))
    ]),
    _cache[2] || (_cache[2] = ia("div", {
      class: "grid-cards",
      style: {"margin-top":"18px"}
    }, [
      ia("div", { class: "item-card" }, [
        ia("h4", null, "冷期与北族南下"),
        ia("p", null, "西周之亡于犬戎、魏晋南北朝之大乱、金灭北宋与蒙古灭南宋、清兵入关，多落在寒冷期。年均温降 1℃，宜农区边界南退数百里，游牧生计受压，南下成为长期压力。")
      ]),
      ia("div", { class: "item-card" }, [
        ia("h4", null, "暖期与盛世"),
        ia("p", null, "仰韶至殷墟、春秋战国、隋唐前期气温偏高，农区北扩、熟制增加，人口与国力随之上升。秦并六国与汉唐盛世，皆在暖期之中。")
      ]),
      ia("div", { class: "item-card" }, [
        ia("h4", null, "怎样读这条曲线"),
        ia("p", null, "本曲线是宏观趋势的示意，不是逐年观测值；朝代兴衰自有其政治、制度与人事的原因。气候提供一个「更长周期」的观察尺度，而非决定论。")
      ])
    ], -1 /* CACHED */))
  ]))
}
}

};

const _hoisted_1$7 = { class: "page" };
const _hoisted_2$7 = { class: "page-head" };
const _hoisted_3$7 = { class: "rel-group-title" };
const _hoisted_4$7 = { class: "office-level" };
const _hoisted_5$7 = ["onClick"];
const _hoisted_6$7 = { class: "on-name" };
const _hoisted_7$7 = { class: "on-desc" };
const _hoisted_8$7 = {
  class: "modal",
  style: {"width":"560px"}
};
const _hoisted_9$7 = { class: "modal-head" };
const _hoisted_10$6 = { class: "tagline" };
const _hoisted_11$6 = { class: "modal-body" };
const _hoisted_12$6 = {
  class: "desc",
  style: {"font-family":"var(--serif)","font-size":"14.5px","line-height":"2"}
};
const _hoisted_13$6 = { class: "rel-list" };
const _hoisted_14$6 = ["onClick"];


var OfficesView = {
  __name: 'OfficesView',
  setup(__props) {

const offices = iD(() => store.offices || { nodes: [], edges: [], title: "秦汉官制" });
const levels = iD(() => {
  const m = new Map();
  for (const n of offices.value.nodes || []) {
    if (!m.has(n.level)) m.set(n.level, []);
    m.get(n.level).push(n);
  }
  return [...m.entries()].sort((a, b) => a[0] - b[0]);
});
const levelName = (l) => ["皇帝", "三公", "九卿", "属官 / 地方"][l] || "第 " + l + " 层";
const active = tx(null);

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$7, [
    ia("div", _hoisted_2$7, [
      _cache[2] || (_cache[2] = ia("h2", null, "历代官职", -1 /* CACHED */)),
      ia("p", null, ea(offices.value.title) + "。秦与汉初行三公九卿制：丞相总百官、太尉主兵、御史大夫掌监察；九卿分理庶务。读《史记》时遇到「廷尉」「典客」「中尉」等，可在此对照其位次与职掌。", 1 /* TEXT */)
    ]),
    (r4(true), ie(rQ, null, lj(levels.value, ([lv, nodes]) => {
      return (r4(), ie("div", {
        key: lv,
        style: {"margin-bottom":"22px"}
      }, [
        ia("div", _hoisted_3$7, ea(levelName(lv)) + " · 第 " + ea(lv) + " 层", 1 /* TEXT */),
        ia("div", _hoisted_4$7, [
          (r4(true), ie(rQ, null, lj(nodes, (n) => {
            return (r4(), ie("div", {
              key: n.id,
              class: Y(["office-node", 'l' + Math.min(1, lv)]),
              onClick: $event => (active.value = n)
            }, [
              ia("div", _hoisted_6$7, ea(n.name), 1 /* TEXT */),
              ia("div", _hoisted_7$7, ea((n.desc || "").slice(0, 26)) + "…", 1 /* TEXT */)
            ], 10 /* CLASS, PROPS */, _hoisted_5$7))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    _cache[5] || (_cache[5] = ia("div", { class: "panel" }, [
      ia("div", { class: "panel-head" }, [
        ia("b", null, "制度变迁")
      ]),
      ia("div", { class: "panel-body desc" }, " 秦统一后确立三公九卿；汉承秦制而有所增损。武帝以后，尚书、中书等内朝官渐夺外朝之权，丞相之位遂虚——这也是《史记》中「丞相」前后地位不同的原因。 ")
    ], -1 /* CACHED */)),
    (active.value)
      ? (r4(), ie("div", {
          key: 0,
          class: "overlay",
          onClick: _cache[1] || (_cache[1] = oa($event => (active.value = null), ["self"]))
        }, [
          ia("div", _hoisted_8$7, [
            ia("div", _hoisted_9$7, [
              ia("b", null, ea(active.value.name), 1 /* TEXT */),
              ia("span", _hoisted_10$6, ea(active.value.group), 1 /* TEXT */),
              ia("button", {
                class: "icon-btn",
                style: {"margin-left":"auto"},
                onClick: _cache[0] || (_cache[0] = $event => (active.value = null))
              }, "✕")
            ]),
            ia("div", _hoisted_11$6, [
              ia("div", _hoisted_12$6, ea(active.value.desc), 1 /* TEXT */),
              _cache[3] || (_cache[3] = ia("div", { class: "divider" }, null, -1 /* CACHED */)),
              _cache[4] || (_cache[4] = ia("div", { class: "rel-group-title" }, "下辖", -1 /* CACHED */)),
              ia("div", _hoisted_13$6, [
                (r4(true), ie(rQ, null, lj((offices.value.edges || []).filter((x) => x.from === active.value.id), (e) => {
                  return (r4(), ie("span", {
                    key: e.to,
                    class: "rel-pill",
                    onClick: $event => (active.value = (offices.value.nodes || []).find((n) => n.id === e.to))
                  }, ea((offices.value.nodes || []).find((n) => n.id === e.to)?.name), 9 /* TEXT, PROPS */, _hoisted_14$6))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ])
          ])
        ]))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$6 = { class: "page" };
const _hoisted_2$6 = {
  class: "page-head",
  style: {"display":"flex","align-items":"flex-end","gap":"16px"}
};
const _hoisted_3$6 = { key: 0 };
const _hoisted_4$6 = { key: 1 };
const _hoisted_5$6 = { style: {"margin-left":"auto","display":"flex","gap":"8px","align-items":"center"} };
const _hoisted_6$6 = { style: {"font-size":"12px","color":"var(--muted)"} };
const _hoisted_7$6 = { style: {"color":"var(--ink)"} };
const _hoisted_8$6 = {
  class: "panel",
  style: {"margin-bottom":"16px"}
};
const _hoisted_9$6 = { class: "panel-body" };
const _hoisted_10$5 = { class: "stat-row" };
const _hoisted_11$5 = { class: "stat" };
const _hoisted_12$5 = { class: "v" };
const _hoisted_13$5 = { class: "stat" };
const _hoisted_14$5 = { class: "v" };
const _hoisted_15$4 = { class: "stat" };
const _hoisted_16$4 = { class: "v" };
const _hoisted_17$4 = { class: "stat" };
const _hoisted_18$4 = { class: "v" };
const _hoisted_19$4 = { class: "stat" };
const _hoisted_20$4 = { class: "v" };
const _hoisted_21$4 = {
  class: "progress-track",
  style: {"margin-top":"14px"}
};
const _hoisted_22$3 = {
  class: "filters",
  style: {"margin-top":"4px"}
};
const _hoisted_23$3 = ["onClick"];
const _hoisted_24$3 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_25$3 = { class: "panel-body" };
const _hoisted_26$3 = { style: {"font-size":"11.5px","color":"var(--muted)","margin-bottom":"4px"} };
const _hoisted_27$3 = { style: {"font-family":"var(--serif)","font-size":"14.5px","color":"var(--ink)"} };
const _hoisted_28$2 = {
  key: 0,
  class: "desc",
  style: {"margin-top":"6px"}
};
const _hoisted_29$2 = { style: {"display":"flex","gap":"8px","margin-top":"8px"} };
const _hoisted_30$2 = ["onClick"];
const _hoisted_31$2 = ["onClick"];
const _hoisted_32$2 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_33$1 = { class: "panel-body" };
const _hoisted_34 = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_35 = { style: {"font-family":"var(--serif)","font-size":"14px","margin-top":"4px"} };
const _hoisted_36 = ["onClick"];
const _hoisted_37 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_38 = {
  class: "panel-body",
  style: {"display":"flex","align-items":"center","gap":"10px"}
};
const _hoisted_39 = { style: {"font-size":"13px","color":"var(--ink)"} };
const _hoisted_40 = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_41 = ["onClick"];
const _hoisted_42 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_43 = { class: "grid-cards" };
const _hoisted_44 = ["onClick"];
const _hoisted_45 = { class: "meta" };
const _hoisted_46 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_47 = { style: {"display":"flex","justify-content":"space-between","font-size":"12.5px","color":"var(--ink-3)"} };
const _hoisted_48 = {
  class: "progress-track",
  style: {"margin-top":"4px"}
};
const _hoisted_49 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_50 = {
  class: "panel-body",
  style: {"display":"flex","align-items":"center","gap":"10px"}
};
const _hoisted_51 = { style: {"font-size":"13px"} };
const _hoisted_52 = { style: {"font-size":"11.5px","color":"var(--muted)"} };


var MeView = {
  __name: 'MeView',
  setup(__props) {

const tab = tx("annotations");
tx("");
const tabs = [
  { k: "annotations", n: "我的批注" },
  { k: "favorites", n: "我的收藏" },
  { k: "bookmarks", n: "书签" },
  { k: "history", n: "阅读足迹" },
  { k: "progress", n: "阅读进度" },
  { k: "votes", n: "决策投票" },
];

const stats = iD(() => ({
  chapters: store.readChapters.length,
  annots: store.annotations.length,
  favs: store.favorites.length,
  marks: store.bookmarks.length,
  paras: store.index?.stats?.paras || 0,
}));
const pct = iD(() => Math.round((store.readChapters.length / 130) * 100));

const progressList = iD(() =>
  Object.entries(store.progress)
    .map(([no, p]) => {
      const meta = store.index?.chapters.find((c) => c.no === Number(no));
      return { no: Number(no), p, total: meta?.paraCount || 0, title: meta?.title || "", percent: meta ? Math.round((p / meta.paraCount) * 100) : 0 };
    })
    .sort((a, b) => b.no - a.no)
);

function doLogin() { store.dialogue = { kind: "login" }; }
function doLogout() { signOut(); }
function del(a) { removeAnnotation(a.id); }
iD(() => profileList());

/* 全量数据导出 / 导入 */
const importEl = tx(null);
function exportAll() {
  const data = {
    app: "读史记", version: 1, exportedAt: new Date().toISOString(),
    user: store.user ? store.user.name : "",
    annotations: store.annotations, bookmarks: store.bookmarks, favorites: store.favorites,
    history: store.history, progress: store.progress, readChapters: store.readChapters, votes: store.votes,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `读史记-数据-${store.user ? store.user.name : "访客"}-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("已导出全部数据");
}
function importAll(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(String(r.result));
      if (d.annotations) store.annotations = d.annotations;
      if (d.bookmarks) store.bookmarks = d.bookmarks;
      if (d.favorites) store.favorites = d.favorites;
      if (d.history) store.history = d.history;
      if (d.progress) store.progress = d.progress;
      if (d.readChapters) store.readChapters = d.readChapters;
      if (d.votes) store.votes = d.votes;
      toast("数据已导入");
    } catch { toast("导入失败：文件格式不对"); }
  };
  r.readAsText(f);
  e.target.value = "";
}
const titleOf = (no) => store.index?.chapters.find((c) => c.no === Number(no))?.title || "";

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$6, [
    ia("div", _hoisted_2$6, [
      ia("div", null, [
        _cache[2] || (_cache[2] = ia("h2", null, "个人空间", -1 /* CACHED */)),
        (tA(store).user)
          ? (r4(), ie("p", _hoisted_3$6, ea(tA(store).user.name) + " · 读史 " + ea(stats.value.chapters) + " 篇 · 批注 " + ea(stats.value.annots) + " 条", 1 /* TEXT */))
          : (r4(), ie("p", _hoisted_4$6, "登录后可保存批注、收藏、书签与阅读进度（数据保存在本机浏览器）。"))
      ]),
      ia("div", _hoisted_5$6, [
        (!tA(store).user)
          ? (r4(), ie("button", {
              key: 0,
              class: "btn primary",
              onClick: doLogin
            }, "登录 / 注册"))
          : (r4(), ie(rQ, { key: 1 }, [
              ia("span", _hoisted_6$6, [
                _cache[3] || (_cache[3] = id("当前账号：", -1 /* CACHED */)),
                ia("b", _hoisted_7$6, ea(tA(store).user.name), 1 /* TEXT */)
              ]),
              ia("button", {
                class: "btn",
                onClick: doLogout
              }, "退出")
            ], 64 /* STABLE_FRAGMENT */)),
        ia("button", {
          class: "btn",
          onClick: exportAll
        }, "导出数据"),
        ia("button", {
          class: "btn",
          onClick: _cache[0] || (_cache[0] = $event => (importEl.value.click()))
        }, "导入数据"),
        ia("input", {
          ref_key: "importEl",
          ref: importEl,
          type: "file",
          accept: "application/json",
          style: {"display":"none"},
          onChange: importAll
        }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)
      ])
    ]),
    ia("div", _hoisted_8$6, [
      ia("div", _hoisted_9$6, [
        ia("div", _hoisted_10$5, [
          ia("div", _hoisted_11$5, [
            ia("div", _hoisted_12$5, [
              id(ea(stats.value.chapters), 1 /* TEXT */),
              _cache[4] || (_cache[4] = ia("span", { style: {"font-size":"12px","color":"var(--muted)"} }, " / 130", -1 /* CACHED */))
            ]),
            _cache[5] || (_cache[5] = ia("div", { class: "k" }, "读过的篇目", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_13$5, [
            ia("div", _hoisted_14$5, ea(stats.value.annots), 1 /* TEXT */),
            _cache[6] || (_cache[6] = ia("div", { class: "k" }, "批注", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_15$4, [
            ia("div", _hoisted_16$4, ea(stats.value.favs), 1 /* TEXT */),
            _cache[7] || (_cache[7] = ia("div", { class: "k" }, "收藏段落", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_17$4, [
            ia("div", _hoisted_18$4, ea(stats.value.marks), 1 /* TEXT */),
            _cache[8] || (_cache[8] = ia("div", { class: "k" }, "书签", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_19$4, [
            ia("div", _hoisted_20$4, ea(pct.value) + "%", 1 /* TEXT */),
            _cache[9] || (_cache[9] = ia("div", { class: "k" }, "全书进度", -1 /* CACHED */))
          ])
        ]),
        ia("div", _hoisted_21$4, [
          ia("i", {
            style: G({ width: pct.value + '%' })
          }, null, 4 /* STYLE */)
        ])
      ])
    ]),
    ia("div", _hoisted_22$3, [
      (r4(), ie(rQ, null, lj(tabs, (t) => {
        return ia("button", {
          key: t.k,
          class: Y(["filter-pill", { on: tab.value === t.k }]),
          onClick: $event => (tab.value = t.k)
        }, ea(t.n), 11 /* TEXT, CLASS, PROPS */, _hoisted_23$3)
      }), 64 /* STABLE_FRAGMENT */))
    ]),
    (tab.value === 'annotations')
      ? (r4(), ie(rQ, { key: 0 }, [
          (!tA(store).annotations.length)
            ? (r4(), ie("div", _hoisted_24$3, "还没有批注。阅读时选中原文即可添加。"))
            : ig("v-if", true),
          (r4(true), ie(rQ, null, lj(tA(store).annotations, (a) => {
            return (r4(), ie("div", {
              key: a.id,
              class: "panel",
              style: {"margin-bottom":"10px"}
            }, [
              ia("div", _hoisted_25$3, [
                ia("div", _hoisted_26$3, "卷" + ea(a.chapter) + " · " + ea(titleOf(a.chapter)) + " · 第 " + ea(a.para) + " 段", 1 /* TEXT */),
                ia("div", _hoisted_27$3, "「" + ea(a.quote) + "」", 1 /* TEXT */),
                (a.note)
                  ? (r4(), ie("div", _hoisted_28$2, ea(a.note), 1 /* TEXT */))
                  : ig("v-if", true),
                ia("div", _hoisted_29$2, [
                  ia("button", {
                    class: "btn sm",
                    onClick: $event => (tA(go)(`/c/${a.chapter}/${a.para}`))
                  }, "定位原文", 8 /* PROPS */, _hoisted_30$2),
                  ia("button", {
                    class: "btn sm danger",
                    onClick: $event => (del(a))
                  }, "删除", 8 /* PROPS */, _hoisted_31$2)
                ])
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 64 /* STABLE_FRAGMENT */))
      : (tab.value === 'favorites')
        ? (r4(), ie(rQ, { key: 1 }, [
            (!tA(store).favorites.length)
              ? (r4(), ie("div", _hoisted_32$2, "还没有收藏。段落旁的「☆ 收藏」可加入此处。"))
              : ig("v-if", true),
            (r4(true), ie(rQ, null, lj(tA(store).favorites, (f) => {
              return (r4(), ie("div", {
                key: f.chapter + '-' + f.para,
                class: "panel",
                style: {"margin-bottom":"10px"}
              }, [
                ia("div", _hoisted_33$1, [
                  ia("div", _hoisted_34, "卷" + ea(f.chapter) + " · " + ea(titleOf(f.chapter)) + " · 第 " + ea(f.para) + " 段", 1 /* TEXT */),
                  ia("div", _hoisted_35, ea(f.quote) + "…", 1 /* TEXT */),
                  ia("button", {
                    class: "btn sm",
                    style: {"margin-top":"8px"},
                    onClick: $event => (tA(go)(`/c/${f.chapter}/${f.para}`))
                  }, "查看", 8 /* PROPS */, _hoisted_36)
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 64 /* STABLE_FRAGMENT */))
        : (tab.value === 'bookmarks')
          ? (r4(), ie(rQ, { key: 2 }, [
              (!tA(store).bookmarks.length)
                ? (r4(), ie("div", _hoisted_37, "还没有书签。"))
                : ig("v-if", true),
              (r4(true), ie(rQ, null, lj(tA(store).bookmarks, (b) => {
                return (r4(), ie("div", {
                  key: b.chapter + '-' + b.para,
                  class: "panel",
                  style: {"margin-bottom":"10px"}
                }, [
                  ia("div", _hoisted_38, [
                    ia("div", null, [
                      ia("div", _hoisted_39, "卷" + ea(b.chapter) + " · " + ea(titleOf(b.chapter)), 1 /* TEXT */),
                      ia("div", _hoisted_40, "第 " + ea(b.para) + " 段 · " + ea(b.label), 1 /* TEXT */)
                    ]),
                    ia("button", {
                      class: "btn sm",
                      style: {"margin-left":"auto"},
                      onClick: $event => (tA(go)(`/c/${b.chapter}/${b.para}`))
                    }, "打开", 8 /* PROPS */, _hoisted_41)
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ], 64 /* STABLE_FRAGMENT */))
          : (tab.value === 'history')
            ? (r4(), ie(rQ, { key: 3 }, [
                (!tA(store).history.length)
                  ? (r4(), ie("div", _hoisted_42, "还没有阅读记录。"))
                  : ig("v-if", true),
                ia("div", _hoisted_43, [
                  (r4(true), ie(rQ, null, lj(tA(store).history, (h) => {
                    return (r4(), ie("div", {
                      key: h.no,
                      class: "item-card",
                      onClick: $event => (tA(openChapter)(h.no))
                    }, [
                      ia("h4", null, "卷" + ea(h.no) + " · " + ea(h.title), 1 /* TEXT */),
                      ia("div", _hoisted_45, [
                        ia("span", null, ea(new Date(h.ts).toLocaleString("zh-CN")), 1 /* TEXT */)
                      ])
                    ], 8 /* PROPS */, _hoisted_44))
                  }), 128 /* KEYED_FRAGMENT */))
                ])
              ], 64 /* STABLE_FRAGMENT */))
            : (tab.value === 'progress')
              ? (r4(), ie(rQ, { key: 4 }, [
                  (!progressList.value.length)
                    ? (r4(), ie("div", _hoisted_46, "还没有进度记录，滚动阅读即可自动记录。"))
                    : ig("v-if", true),
                  (r4(true), ie(rQ, null, lj(progressList.value, (p) => {
                    return (r4(), ie("div", {
                      key: p.no,
                      style: {"margin-bottom":"10px"}
                    }, [
                      ia("div", _hoisted_47, [
                        ia("span", null, "卷" + ea(p.no) + " · " + ea(p.title), 1 /* TEXT */),
                        ia("span", null, ea(p.p) + " / " + ea(p.total) + " 段 · " + ea(p.percent) + "%", 1 /* TEXT */)
                      ]),
                      ia("div", _hoisted_48, [
                        ia("i", {
                          style: G({ width: p.percent + '%' })
                        }, null, 4 /* STYLE */)
                      ])
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                ], 64 /* STABLE_FRAGMENT */))
              : (r4(), ie(rQ, { key: 5 }, [
                  (!Object.keys(tA(store).votes).length)
                    ? (r4(), ie("div", _hoisted_49, "还没有参与过决策投票。"))
                    : ig("v-if", true),
                  (r4(true), ie(rQ, null, lj(tA(store).votes, (v, id) => {
                    return (r4(), ie("div", {
                      key: id,
                      class: "panel",
                      style: {"margin-bottom":"10px"}
                    }, [
                      ia("div", _hoisted_50, [
                        ia("div", null, [
                          ia("div", _hoisted_51, ea((tA(store).decisions?.decisions || []).find((d) => d.id === id)?.title || id), 1 /* TEXT */),
                          ia("div", _hoisted_52, "你的选择：" + ea(String.fromCharCode(65 + (v.pick ?? 0))) + " · 当前赞同 " + ea(v.agree) + "%", 1 /* TEXT */)
                        ]),
                        ia("button", {
                          class: "btn sm",
                          style: {"margin-left":"auto"},
                          onClick: _cache[1] || (_cache[1] = $event => (tA(go)('/decisions')))
                        }, "去看看")
                      ])
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                ], 64 /* STABLE_FRAGMENT */))
  ]))
}
}

};

const _hoisted_1$5 = { class: "page" };
const _hoisted_2$5 = { class: "page-head" };
const _hoisted_3$5 = { class: "filters" };
const _hoisted_4$5 = {
  key: 0,
  style: {"font-size":"12px","color":"var(--muted)","align-self":"center"}
};
const _hoisted_5$5 = ["onClick"];
const _hoisted_6$5 = { class: "panel-body" };
const _hoisted_7$5 = { style: {"font-size":"11.5px","color":"var(--muted)","margin-bottom":"4px"} };
const _hoisted_8$5 = {
  class: "mini-pill",
  style: {"margin-left":"6px"}
};
const _hoisted_9$5 = ["innerHTML"];
const _hoisted_10$4 = {
  key: 0,
  style: {"display":"flex","gap":"6px","justify-content":"center","margin-top":"18px"}
};
const _hoisted_11$4 = ["disabled"];
const _hoisted_12$4 = { style: {"font-size":"12.5px","color":"var(--muted)","align-self":"center"} };
const _hoisted_13$4 = ["disabled"];
const _hoisted_14$4 = {
  key: 1,
  class: "desc",
  style: {"color":"var(--muted)"}
};

const PER = 30;


var SearchView = {
  __name: 'SearchView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;
const q = tx(props.route.q || "");
const results = tx([]);
const page = tx(1);
async function run() {
  const kw = (props.route.q || "").trim();
  q.value = kw;
  page.value = 1;
  if (!kw) { results.value = []; return; }
  if (!window.__searchIndex) window.__searchIndex = await fetchJSON("search.json");
  const out = [];
  for (const row of window.__searchIndex) {
    const o = plainText(row.o);
    const t = plainText(row.t);
    if (!o.includes(kw) && !t.includes(kw)) continue;
    const inO = o.includes(kw);
    const src = inO ? o : t;
    const at = src.indexOf(kw);
    out.push({
      c: row.c, p: row.p, sec: row.sec, inO,
      title: store.index?.chapters.find((c) => c.no === row.c)?.title || "",
      snippet: (at > 20 ? "…" : "") + src.slice(Math.max(0, at - 20), at + kw.length + 50) + (at + kw.length + 50 < src.length ? "…" : ""),
    });
  }
  results.value = out;
}
ny(() => props.route.q, run, { immediate: true });
const shown = iD(() => results.value.slice((page.value - 1) * PER, page.value * PER));
const pages = iD(() => Math.max(1, Math.ceil(results.value.length / PER)));

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$5, [
    ia("div", _hoisted_2$5, [
      _cache[5] || (_cache[5] = ia("h2", null, "全文检索", -1 /* CACHED */)),
      ia("p", null, "检索范围：《史记》130 篇的原文与白话译文，共 " + ea((tA(store).index?.stats?.paras || 0).toLocaleString()) + " 段。", 1 /* TEXT */)
    ]),
    ia("div", _hoisted_3$5, [
      nu(ia("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((q).value = $event)),
        class: "search-input",
        style: {"max-width":"420px"},
        placeholder: "输入关键词，如「鸿门」「背水」「太史公曰」",
        onKeyup: _cache[1] || (_cache[1] = oc($event => (tA(go)('/search?q=' + encodeURIComponent(q.value))), ["enter"]))
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
        [s4, q.value]
      ]),
      ia("button", {
        class: "btn primary",
        onClick: _cache[2] || (_cache[2] = $event => (tA(go)('/search?q=' + encodeURIComponent(q.value))))
      }, "检索"),
      (__props.route.q)
        ? (r4(), ie("span", _hoisted_4$5, "「" + ea(__props.route.q) + "」找到 " + ea(results.value.length) + " 段", 1 /* TEXT */))
        : ig("v-if", true)
    ]),
    (r4(true), ie(rQ, null, lj(shown.value, (r) => {
      return (r4(), ie("div", {
        key: r.c + '-' + r.p,
        class: "panel",
        style: {"margin-bottom":"10px","cursor":"pointer"},
        onClick: $event => (tA(openChapter)(r.c, r.p))
      }, [
        ia("div", _hoisted_6$5, [
          ia("div", _hoisted_7$5, [
            id(" 卷" + ea(r.c) + " · " + ea(r.title) + " · " + ea(r.sec) + " · 第 " + ea(r.p) + " 段 ", 1 /* TEXT */),
            ia("span", _hoisted_8$5, ea(r.inO ? "原文" : "译文"), 1 /* TEXT */)
          ]),
          ia("div", {
            style: {"font-family":"var(--serif)","font-size":"14.5px","line-height":"1.9"},
            innerHTML: tA(highlightHTML)(r.snippet, __props.route.q)
          }, null, 8 /* PROPS */, _hoisted_9$5)
        ])
      ], 8 /* PROPS */, _hoisted_5$5))
    }), 128 /* KEYED_FRAGMENT */)),
    (pages.value > 1)
      ? (r4(), ie("div", _hoisted_10$4, [
          ia("button", {
            class: "btn sm",
            disabled: page.value === 1,
            onClick: _cache[3] || (_cache[3] = $event => (page.value = Math.max(1, page.value - 1)))
          }, "上一页", 8 /* PROPS */, _hoisted_11$4),
          ia("span", _hoisted_12$4, ea(page.value) + " / " + ea(pages.value), 1 /* TEXT */),
          ia("button", {
            class: "btn sm",
            disabled: page.value === pages.value,
            onClick: _cache[4] || (_cache[4] = $event => (page.value = Math.min(pages.value, page.value + 1)))
          }, "下一页", 8 /* PROPS */, _hoisted_13$4)
        ]))
      : ig("v-if", true),
    (__props.route.q && !results.value.length)
      ? (r4(), ie("div", _hoisted_14$4, "没有找到匹配的段落，试试更短的关键词。"))
      : ig("v-if", true)
  ]))
}
}

};

const _hoisted_1$4 = { class: "page" };
const _hoisted_2$4 = {
  class: "panel",
  style: {"margin-bottom":"16px"}
};
const _hoisted_3$4 = { class: "panel-body" };
const _hoisted_4$4 = { class: "stat-row" };
const _hoisted_5$4 = { class: "stat" };
const _hoisted_6$4 = { class: "v" };
const _hoisted_7$4 = { class: "stat" };
const _hoisted_8$4 = { class: "v" };
const _hoisted_9$4 = { class: "stat" };
const _hoisted_10$3 = { class: "v" };
const _hoisted_11$3 = { class: "stat" };
const _hoisted_12$3 = { class: "v" };
const _hoisted_13$3 = {
  class: "panel",
  style: {"margin-bottom":"16px"}
};
const _hoisted_14$3 = { class: "panel-body" };
const _hoisted_15$3 = { style: {"font-size":"13px","color":"var(--ink)"} };
const _hoisted_16$3 = {
  class: "desc",
  style: {"font-size":"12.5px"}
};
const _hoisted_17$3 = { style: {"font-size":"11.5px","color":"f.s.startsWith('已') ? 'var(--green)' : f.s === '模拟' ? 'var(--gold)' : 'var(--muted)'"} };
const _hoisted_18$3 = { style: {"display":"grid","grid-template-columns":"1fr 1fr","gap":"16px"} };
const _hoisted_19$3 = { class: "panel" };
const _hoisted_20$3 = { class: "panel-body" };
const _hoisted_21$3 = { style: {"font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_22$2 = {
  class: "desc",
  style: {"font-size":"12.8px","margin-top":"3px"}
};
const _hoisted_23$2 = { style: {"font-size":"12.8px","color":"var(--ink-2)","flex":"1"} };
const _hoisted_24$2 = { class: "mini-pill" };
const _hoisted_25$2 = {
  class: "panel",
  style: {"margin-top":"16px"}
};
const _hoisted_26$2 = {
  class: "panel-body desc",
  style: {"font-size":"12.5px","color":"var(--ink-3)"}
};
const _hoisted_27$2 = { style: {"margin-top":"8px"} };


var AboutView = {
  __name: 'AboutView',
  setup(__props) {

const stats = iD(() => store.index?.stats || {});
const features = [
  { k: "文白对照", v: "左右分屏逐段对照，可切「对照 / 仅原文 / 仅译文」", s: "已实现" },
  { k: "注释", v: "每篇附注释（篇末列表 + 正文角标 + 悬浮气泡）", s: "已实现" },
  { k: "生僻字注音", v: "原文自带注音，可一键开关，以 ruby 呈现", s: "已实现" },
  { k: "排版设置", v: "宋/楷/黑三体，字号、行距、日间/护眼/夜间", s: "已实现" },
  { k: "目录树", v: "本纪/表/书/世家/列传分组，130 篇可筛选，标进度", s: "已实现" },
  { k: "段落深链", v: "每段可复制链接，形如 #/c/7/18", s: "已实现" },
  { k: "人物面板", v: "小传、别名、关系图谱、相关篇目、出现段落聚合", s: "已实现" },
  { k: "地名与地图", v: "160 处古地名，示意古地图，点选查今地与相关篇目", s: "已实现" },
  { k: "沙盘态势", v: "10 场战役，分阶段推演行军路线、交战点、自动播放", s: "已实现" },
  { k: "纪事本末", v: "按事件重组的专题索引", s: "已实现" },
  { k: "咏史诗", v: "历代诗人咏《史记》人物事件，关联篇目", s: "已实现" },
  { k: "决策演武场", v: "16 张抉择卡：选项、支持/反对、投票、史实结果", s: "已实现" },
  { k: "历史气候", v: "近五千年气温示意曲线，冷暖期与朝代刻度", s: "已实现" },
  { k: "历代官职", v: "秦汉三公九卿官制分层图", s: "已实现" },
  { k: "百科词典", v: "100 条官职、制度、典故词条", s: "已实现" },
  { k: "批注", v: "选中划线，四色高亮 + 文字批注，本地保存", s: "已实现" },
  { k: "伴读", v: "历代名家评点，按篇聚合为「伴读」抽屉", s: "已实现" },
  { k: "收藏 / 书签 / 进度", v: "段落收藏、书签、自动进度、足迹", s: "已实现" },
  { k: "全文检索", v: "原文与译文全文检索，结果定位到段", s: "已实现" },
  { k: "史记助手", v: "本地检索式问答，给出相关记载与出处", s: "已实现（检索式）" },
  { k: "登录与会员", v: "本地账号、会员标记（演示）", s: "模拟" },
  { k: "古本影印", v: "原站可看元刊本影印对照", s: "未实现（无公开影像）" },
  { k: "繁体竖排", v: "原站支持繁简与竖排切换", s: "未实现" },
];
const logs = [
  { d: "2026-10-20", t: "首版：130 篇全录（含十表篇序），3505 段原文与译文、约 4700 条注释；人物、地名、沙盘、事件、诗词、决策、气候、官制、百科、批注、伴读全部上线。" },
  { d: "2026-10-20", t: "阅读器支持注音开关、三体字、日夜护眼、段落深链与进度记录。" },
];
const plans = [
  { t: "繁体竖排与繁简切换", s: "待开发" },
  { t: "三家注（集解/索隐/正义）逐条嵌入", s: "待调研" },
  { t: "古本影印对照（需公开影像授权）", s: "待调研" },
  { t: "年表可视化（十表数据化）", s: "待开发" },
  { t: "接入真实大模型，替换检索式问答", s: "已采纳" },
  { t: "跨设备同步批注与进度", s: "待开发" },
];

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$4, [
    _cache[10] || (_cache[10] = ia("div", { class: "page-head" }, [
      ia("h2", null, "关于读史记"),
      ia("p", null, "一个仿「读通鉴」而作的《史记》阅读器：把编年/纪传的文本，拆成可对照、可追踪、可推演的多层阅读空间。")
    ], -1 /* CACHED */)),
    ia("div", _hoisted_2$4, [
      ia("div", _hoisted_3$4, [
        ia("div", _hoisted_4$4, [
          ia("div", _hoisted_5$4, [
            ia("div", _hoisted_6$4, ea(stats.value.chapters), 1 /* TEXT */),
            _cache[1] || (_cache[1] = ia("div", { class: "k" }, "篇", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_7$4, [
            ia("div", _hoisted_8$4, ea((stats.value.paras || 0).toLocaleString()), 1 /* TEXT */),
            _cache[2] || (_cache[2] = ia("div", { class: "k" }, "段", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_9$4, [
            ia("div", _hoisted_10$3, ea((stats.value.chars || 0).toLocaleString()), 1 /* TEXT */),
            _cache[3] || (_cache[3] = ia("div", { class: "k" }, "字（含注音）", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_11$3, [
            ia("div", _hoisted_12$3, ea((stats.value.notes || 0).toLocaleString()), 1 /* TEXT */),
            _cache[4] || (_cache[4] = ia("div", { class: "k" }, "注释", -1 /* CACHED */))
          ])
        ])
      ])
    ]),
    ia("div", _hoisted_13$3, [
      _cache[5] || (_cache[5] = ia("div", { class: "panel-head" }, [
        ia("b", null, "功能清单"),
        ia("span", { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} }, "对照原站「读通鉴」")
      ], -1 /* CACHED */)),
      ia("div", _hoisted_14$3, [
        (r4(), ie(rQ, null, lj(features, (f) => {
          return ia("div", {
            key: f.k,
            style: {"display":"grid","grid-template-columns":"120px 1fr 120px","gap":"12px","padding":"7px 0","border-bottom":"1px dashed var(--line-2)"}
          }, [
            ia("b", _hoisted_15$3, ea(f.k), 1 /* TEXT */),
            ia("span", _hoisted_16$3, ea(f.v), 1 /* TEXT */),
            ia("span", _hoisted_17$3, ea(f.s), 1 /* TEXT */)
          ])
        }), 64 /* STABLE_FRAGMENT */))
      ])
    ]),
    ia("div", _hoisted_18$3, [
      _cache[8] || (_cache[8] = ia("div", { class: "panel" }, [
        ia("div", { class: "panel-head" }, [
          ia("b", null, "数据与凡例")
        ]),
        ia("div", {
          class: "panel-body desc",
          style: {"font-size":"12.8px"}
        }, [
          ia("p", { style: {"margin-top":"0"} }, "一、正文底本为通行点校本，参校维基文库《史記》各卷；异体字（惪→德、徧→遍、彊→强）径改，专名用字保留。"),
          ia("p", null, "二、白话译文为编者们自撰，力求信达，非出版社译本的复制。"),
          ia("p", null, "三、注释侧重制度、地名、名物、难词与史事背景；部分篇目注释带有评析性质。"),
          ia("p", null, "四、地图、沙盘为示意性还原：坐标取今地，路线据史文与通行史地考证推演，非考古测绘。"),
          ia("p", null, "五、气候曲线据竺可桢《中国近五千年来气候变迁的初步研究》总体趋势整理，为示意数据。")
        ])
      ], -1 /* CACHED */)),
      ia("div", _hoisted_19$3, [
        _cache[7] || (_cache[7] = ia("div", { class: "panel-head" }, [
          ia("b", null, "更新日志")
        ], -1 /* CACHED */)),
        ia("div", _hoisted_20$3, [
          (r4(), ie(rQ, null, lj(logs, (l) => {
            return ia("div", {
              key: l.d,
              style: {"padding":"6px 0","border-bottom":"1px dashed var(--line-2)"}
            }, [
              ia("div", _hoisted_21$3, ea(l.d), 1 /* TEXT */),
              ia("div", _hoisted_22$2, ea(l.t), 1 /* TEXT */)
            ])
          }), 64 /* STABLE_FRAGMENT */)),
          _cache[6] || (_cache[6] = ia("div", {
            class: "rel-group-title",
            style: {"margin-top":"14px"}
          }, "开发计划", -1 /* CACHED */)),
          (r4(), ie(rQ, null, lj(plans, (p) => {
            return ia("div", {
              key: p.t,
              style: {"display":"flex","align-items":"center","gap":"8px","padding":"5px 0"}
            }, [
              ia("span", _hoisted_23$2, ea(p.t), 1 /* TEXT */),
              ia("span", _hoisted_24$2, ea(p.s), 1 /* TEXT */)
            ])
          }), 64 /* STABLE_FRAGMENT */))
        ])
      ])
    ]),
    ia("div", _hoisted_25$2, [
      ia("div", _hoisted_26$2, [
        _cache[9] || (_cache[9] = id(" 本站为个人研究性演示项目，非商业站点。正文属公有领域；白话译文、注释、人物小传、战役推演、词条均为本项目自撰。 若需引用，请注明出处。原站「读通鉴」为独立作品，本站仅借鉴其产品框架。 ", -1 /* CACHED */)),
        ia("div", _hoisted_27$2, [
          ia("button", {
            class: "btn sm",
            onClick: _cache[0] || (_cache[0] = $event => (tA(go)('/c/1')))
          }, "从头读《史记》→")
        ])
      ])
    ])
  ]))
}
}

};

const _hoisted_1$3 = { class: "page" };
const _hoisted_2$3 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--muted)"}
};
const _hoisted_3$3 = { class: "tables-layout" };
const _hoisted_4$3 = {
  class: "panel",
  style: {"align-self":"start","position":"sticky","top":"70px"}
};
const _hoisted_5$3 = { class: "panel-head" };
const _hoisted_6$3 = { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_7$3 = {
  class: "panel-body",
  style: {"padding":"8px"}
};
const _hoisted_8$3 = ["onClick"];
const _hoisted_9$3 = { class: "no" };
const _hoisted_10$2 = { style: {"flex":"1"} };
const _hoisted_11$2 = { style: {"font-size":"10px","color":"var(--muted)"} };
const _hoisted_12$2 = {
  key: 0,
  style: {"min-width":"0"}
};
const _hoisted_13$2 = {
  class: "panel",
  style: {"margin-bottom":"12px"}
};
const _hoisted_14$2 = { class: "panel-head" };
const _hoisted_15$2 = {
  class: "mini-pill",
  style: {"margin-left":"6px"}
};
const _hoisted_16$2 = { style: {"margin-left":"auto","font-size":"11.5px","color":"var(--muted)"} };
const _hoisted_17$2 = { class: "panel-body" };
const _hoisted_18$2 = {
  key: 0,
  class: "desc"
};
const _hoisted_19$2 = {
  class: "filters",
  style: {"margin-top":"10px"}
};
const _hoisted_20$2 = ["placeholder"];
const _hoisted_21$2 = {
  key: 1,
  style: {"font-size":"12px","color":"var(--muted)","align-self":"center"}
};
const _hoisted_22$1 = {
  key: 0,
  class: "panel"
};
const _hoisted_23$1 = { class: "panel-body" };
const _hoisted_24$1 = { class: "g-name" };
const _hoisted_25$1 = { class: "g-note" };
const _hoisted_26$1 = { class: "table-wrap" };
const _hoisted_27$1 = { class: "data-table" };
const _hoisted_28$1 = { class: "col-year" };
const _hoisted_29$1 = { class: "col-year" };
const _hoisted_30$1 = {
  key: 0,
  style: {"color":"var(--muted)"}
};
const _hoisted_31$1 = { key: 1 };
const _hoisted_32$1 = ["onClick"];
const _hoisted_33 = { key: 1 };


var TablesView = {
  __name: 'TablesView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;

const tables = iD(() => (store.tables?.tables || []).slice().sort((a, b) => a.no - b.no));
const active = iD(() => tables.value.find((t) => t.id === props.route.id) || tables.value[0] || null);
const kw = tx("");
const hideEmpty = tx(true);

const KIND_LABEL = { year: "年表", month: "月表", genealogy: "世表", roster: "侯表" };

const isEmptyRow = (r) => !r.cells || Object.values(r.cells).every((v) => !v || v === "—");

const emptyCount = iD(() => {
  const t = active.value;
  if (!t || !t.rows) return 0;
  return t.rows.filter(isEmptyRow).length;
});

const rows = iD(() => {
  const t = active.value;
  if (!t || !t.rows) return [];
  let base = t.rows;
  if (hideEmpty.value && (t.kind === "year" || t.kind === "month")) base = base.filter((r) => !isEmptyRow(r));
  const k = kw.value.trim();
  if (!k) return base;
  return base.filter((r) => JSON.stringify(r.cells || {}).includes(k) || String(r.label || "").includes(k) || String(r.year || "").includes(k));
});

// 世表：把树拍平
const treeRows = iD(() => {
  const t = active.value;
  if (!t || t.kind !== "genealogy" || !t.tree) return [];
  const out = [];
  const walk = (nodes, depth) => {
    for (const n of nodes || []) {
      out.push({ name: n.name, note: n.note || "", depth });
      walk(n.children, depth + 1);
    }
  };
  walk(t.tree, 0);
  return out;
});

const yearLabel = (r) => {
  if (r.label) return r.label;
  if (r.year == null) return "";
  return r.year < 0 ? "前" + Math.abs(r.year) + "年" : r.year + "年";
};
const cell = (r, c) => (r.cells && r.cells[c.key]) || "—";
const isLink = (v) => /^\[\[(\d+)\]\]/.test(v || "");
const linkNo = (v) => Number((v.match(/^\[\[(\d+)\]\]/) || [])[1]);
const cleanCell = (v) => (v || "").replace(/^\[\[\d+\]\]\s*/, "");

function openTable(t) { go("/tables/" + t.id); }

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$3, [
    (!tables.value.length)
      ? (r4(), ie("div", _hoisted_2$3, "年表数据尚未生成。"))
      : (r4(), ie(rQ, { key: 1 }, [
          _cache[5] || (_cache[5] = ia("div", { class: "page-head" }, [
            ia("h2", null, "十表 · 年表"),
            ia("p", null, " 《史记》十表以表格系年，最便观大势。此处按原表体例数据化：年表可逐年检索，侯表可按国、人、功检索； 表中带链接的纪年可直达对应纪传。 ")
          ], -1 /* CACHED */)),
          ia("div", _hoisted_3$3, [
            ia("aside", _hoisted_4$3, [
              ia("div", _hoisted_5$3, [
                _cache[3] || (_cache[3] = ia("b", null, "十表", -1 /* CACHED */)),
                ia("span", _hoisted_6$3, ea(tables.value.length), 1 /* TEXT */)
              ]),
              ia("div", _hoisted_7$3, [
                (r4(true), ie(rQ, null, lj(tables.value, (t) => {
                  return (r4(), ie("div", {
                    key: t.id,
                    class: Y(["toc-item", { on: active.value && active.value.id === t.id }]),
                    style: {"padding-left":"10px"},
                    onClick: $event => (openTable(t))
                  }, [
                    ia("span", _hoisted_9$3, ea(String(t.no).padStart(3, "0")), 1 /* TEXT */),
                    ia("span", _hoisted_10$2, ea(t.title), 1 /* TEXT */),
                    ia("span", _hoisted_11$2, ea(KIND_LABEL[t.kind] || ""), 1 /* TEXT */)
                  ], 10 /* CLASS, PROPS */, _hoisted_8$3))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            (active.value)
              ? (r4(), ie("div", _hoisted_12$2, [
                  ia("div", _hoisted_13$2, [
                    ia("div", _hoisted_14$2, [
                      ia("b", null, ea(active.value.title), 1 /* TEXT */),
                      ia("span", _hoisted_15$2, ea(KIND_LABEL[active.value.kind]), 1 /* TEXT */),
                      ia("span", _hoisted_16$2, ea(active.value.kind === "genealogy" ? treeRows.value.length + " 世" : (active.value.rows || []).length + " 行"), 1 /* TEXT */),
                      ia("button", {
                        class: "chip ghost",
                        onClick: _cache[0] || (_cache[0] = $event => (tA(go)('/c/' + active.value.no)))
                      }, "读原篇 →")
                    ]),
                    ia("div", _hoisted_17$2, [
                      (active.value.note)
                        ? (r4(), ie("div", _hoisted_18$2, ea(active.value.note), 1 /* TEXT */))
                        : ig("v-if", true),
                      ia("div", _hoisted_19$2, [
                        nu(ia("input", {
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((kw).value = $event)),
                          class: "search-input",
                          style: {"max-width":"300px"},
                          placeholder: active.value.kind === 'roster' ? '搜索侯国、人名、功状' : '搜索年份、纪年或事件'
                        }, null, 8 /* PROPS */, _hoisted_20$2), [
                          [s4, kw.value]
                        ]),
                        (active.value.kind === 'year' || active.value.kind === 'month')
                          ? (r4(), ie("label", {
                              key: 0,
                              class: Y(["filter-pill", { on: hideEmpty.value }]),
                              style: {"cursor":"pointer"}
                            }, [
                              nu(ia("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((hideEmpty).value = $event)),
                                style: {"margin-right":"5px","vertical-align":"middle"}
                              }, null, 512 /* NEED_PATCH */), [
                                [s3, hideEmpty.value]
                              ]),
                              _cache[4] || (_cache[4] = id(" 隐藏无记载年份", -1 /* CACHED */)),
                              (emptyCount.value)
                                ? (r4(), ie(rQ, { key: 0 }, [
                                    id("（" + ea(emptyCount.value) + "）", 1 /* TEXT */)
                                  ], 64 /* STABLE_FRAGMENT */))
                                : ig("v-if", true)
                            ], 2 /* CLASS */))
                          : ig("v-if", true),
                        (kw.value)
                          ? (r4(), ie("span", _hoisted_21$2, "匹配 " + ea(rows.value.length) + " 条", 1 /* TEXT */))
                          : ig("v-if", true)
                      ])
                    ])
                  ]),
                  ig(" 世表 "),
                  (active.value.kind === 'genealogy')
                    ? (r4(), ie("div", _hoisted_22$1, [
                        ia("div", _hoisted_23$1, [
                          (r4(true), ie(rQ, null, lj(treeRows.value, (n, i) => {
                            return (r4(), ie("div", {
                              key: i,
                              class: "genealogy-row",
                              style: G({ paddingLeft: n.depth * 26 + 4 + 'px' })
                            }, [
                              ia("span", _hoisted_24$1, ea(n.name), 1 /* TEXT */),
                              ia("span", _hoisted_25$1, ea(n.note), 1 /* TEXT */)
                            ], 4 /* STYLE */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ]))
                    : (r4(), ie(rQ, { key: 1 }, [
                        ig(" 年表 / 月表 / 侯表 "),
                        ia("div", _hoisted_26$1, [
                          ia("table", _hoisted_27$1, [
                            ia("thead", null, [
                              ia("tr", null, [
                                ia("th", _hoisted_28$1, ea(active.value.kind === "month" ? "年月" : active.value.kind === "roster" ? "序" : "纪年"), 1 /* TEXT */),
                                (r4(true), ie(rQ, null, lj(active.value.columns, (c) => {
                                  return (r4(), ie("th", {
                                    key: c.key
                                  }, ea(c.name), 1 /* TEXT */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ])
                            ]),
                            ia("tbody", null, [
                              (r4(true), ie(rQ, null, lj(rows.value, (r, ri) => {
                                return (r4(), ie("tr", { key: ri }, [
                                  ia("td", _hoisted_29$1, [
                                    (active.value.kind === 'roster')
                                      ? (r4(), ie("span", _hoisted_30$1, ea(ri + 1), 1 /* TEXT */))
                                      : (r4(), ie("span", _hoisted_31$1, ea(yearLabel(r)), 1 /* TEXT */))
                                  ]),
                                  (r4(true), ie(rQ, null, lj(active.value.columns, (c) => {
                                    return (r4(), ie("td", {
                                      key: c.key,
                                      class: Y({ 'has-link': isLink(cell(r, c)) })
                                    }, [
                                      (isLink(cell(r, c)))
                                        ? (r4(), ie("a", {
                                            key: 0,
                                            onClick: $event => (tA(go)('/c/' + linkNo(cell(r, c))))
                                          }, ea(cleanCell(cell(r, c))), 9 /* TEXT, PROPS */, _hoisted_32$1))
                                        : (r4(), ie("span", _hoisted_33, ea(cell(r, c)), 1 /* TEXT */))
                                    ], 2 /* CLASS */))
                                  }), 128 /* KEYED_FRAGMENT */))
                                ]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ])
                          ])
                        ])
                      ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                ]))
              : ig("v-if", true)
          ])
        ], 64 /* STABLE_FRAGMENT */))
  ]))
}
}

};

const _hoisted_1$2 = { class: "page" };
const _hoisted_2$2 = {
  class: "panel",
  style: {"margin-bottom":"16px"}
};
const _hoisted_3$2 = { class: "panel-body" };
const _hoisted_4$2 = { class: "stat-row" };
const _hoisted_5$2 = { class: "stat" };
const _hoisted_6$2 = { class: "v" };
const _hoisted_7$2 = { class: "stat" };
const _hoisted_8$2 = { class: "v" };
const _hoisted_9$2 = { class: "stat" };
const _hoisted_10$1 = { class: "v" };
const _hoisted_11$1 = { class: "stat" };
const _hoisted_12$1 = { class: "v" };
const _hoisted_13$1 = { class: "filters" };
const _hoisted_14$1 = ["onClick"];
const _hoisted_15$1 = { class: "grid-cards" };
const _hoisted_16$1 = ["onClick"];
const _hoisted_17$1 = { class: "meta" };
const _hoisted_18$1 = { key: 0 };
const _hoisted_19$1 = { class: "page-head" };
const _hoisted_20$1 = { style: {"margin-top":"10px"} };
const _hoisted_21$1 = { key: 0 };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = {
  class: "filters",
  style: {"margin":"12px 0 0"}
};
const _hoisted_24 = {
  class: "reading",
  style: {"max-width":"900px","margin":"0 auto"}
};
const _hoisted_25 = ["id"];
const _hoisted_26 = { class: "para-chips" };
const _hoisted_27 = {
  class: "chip plain",
  style: {"cursor":"default"}
};
const _hoisted_28 = ["onClick"];
const _hoisted_29 = {
  class: "text-orig",
  style: {"font-size":"18px","line-height":"1.95"}
};
const _hoisted_30 = {
  key: 0,
  class: "text-trans",
  style: {"margin-top":"8px"}
};
const _hoisted_31 = {
  key: 1,
  class: "pop-trans"
};
const _hoisted_32 = ["onClick"];


var LibraryView = {
  __name: 'LibraryView',
  props: { route: { type: Object, default: () => ({}) } },
  setup(__props) {

const props = __props;

const showTrans = tx(true);
const group = tx("全部");
const kw = tx("");
const chapter = iD(() => store.libraryChapter);
const chapters = iD(() => store.hanshuIndex?.chapters || []);
const groups = iD(() => ["全部", ...new Set(chapters.value.map((c) => c.cat))]);
const list = iD(() =>
  chapters.value.filter(
    (c) => (group.value === "全部" || c.cat === group.value) && (!kw.value.trim() || c.title.includes(kw.value) || c.name.includes(kw.value))
  )
);

// 反查：本篇对应哪些《史记》篇
const shijiOf = iD(() => {
  if (!chapter.value) return [];
  const out = [];
  for (const m of store.hanshuMap?.map || []) {
    if ((m.hanshu || []).includes(chapter.value.id)) out.push(m.shiji);
  }
  return out;
});

const sTitle = (no) => store.index?.chapters.find((c) => c.no === no)?.title || "";

ny(
  () => props.route.id,
  async (id) => {
    if (id) {
      await loadHanshu(id);
      if (props.route.anchor) {
        t8(() => {
          const el = document.getElementById("h-" + props.route.anchor);
          if (el) el.scrollIntoView({ block: "center" });
        });
      } else window.scrollTo({ top: 0 });
    }
  },
  { immediate: true }
);

function open(id, p) { go(`/library/${id}${""}`); }

/* 对照：把《汉书》段落与《史记》同段并列 */
const compare = tx(null);
function toggleCompare(pi) {
  compare.value = compare.value === pi ? null : pi;
}

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$2, [
    (!chapter.value)
      ? (r4(), ie(rQ, { key: 0 }, [
          _cache[8] || (_cache[8] = ia("div", { class: "page-head" }, [
            ia("h2", null, "资料库 · 《汉书》"),
            ia("p", null, " 读《史记》到汉初，最该对读的是《汉书》。此处收录与《史记》重叠的 40 篇《汉书》纪传（约 29 万字）， 逐段可与《史记》互见；点开一篇可对照原文与白话。 ")
          ], -1 /* CACHED */)),
          ia("div", _hoisted_2$2, [
            ia("div", _hoisted_3$2, [
              ia("div", _hoisted_4$2, [
                ia("div", _hoisted_5$2, [
                  ia("div", _hoisted_6$2, ea(chapters.value.length), 1 /* TEXT */),
                  _cache[4] || (_cache[4] = ia("div", { class: "k" }, "篇", -1 /* CACHED */))
                ]),
                ia("div", _hoisted_7$2, [
                  ia("div", _hoisted_8$2, ea(chapters.value.reduce((s, c) => s + c.paras, 0).toLocaleString()), 1 /* TEXT */),
                  _cache[5] || (_cache[5] = ia("div", { class: "k" }, "段", -1 /* CACHED */))
                ]),
                ia("div", _hoisted_9$2, [
                  ia("div", _hoisted_10$1, ea((chapters.value.reduce((s, c) => s + c.chars, 0) / 10000).toFixed(1)) + "万", 1 /* TEXT */),
                  _cache[6] || (_cache[6] = ia("div", { class: "k" }, "字", -1 /* CACHED */))
                ]),
                ia("div", _hoisted_11$1, [
                  ia("div", _hoisted_12$1, ea((tA(store).hanshuMap?.map || []).length), 1 /* TEXT */),
                  _cache[7] || (_cache[7] = ia("div", { class: "k" }, "《史记》篇有对照", -1 /* CACHED */))
                ])
              ])
            ])
          ]),
          ia("div", _hoisted_13$1, [
            nu(ia("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((kw).value = $event)),
              class: "search-input",
              style: {"max-width":"240px"},
              placeholder: "搜索篇名，如「高帝」「酷吏」"
            }, null, 512 /* NEED_PATCH */), [
              [s4, kw.value]
            ]),
            (r4(true), ie(rQ, null, lj(groups.value, (g) => {
              return (r4(), ie("button", {
                key: g,
                class: Y(["filter-pill", { on: group.value === g }]),
                onClick: $event => (group.value = g)
              }, ea(g), 11 /* TEXT, CLASS, PROPS */, _hoisted_14$1))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          ia("div", _hoisted_15$1, [
            (r4(true), ie(rQ, null, lj(list.value, (c) => {
              return (r4(), ie("div", {
                key: c.id,
                class: "item-card",
                onClick: $event => (open(c.id))
              }, [
                ia("h4", null, ea(c.title), 1 /* TEXT */),
                ia("div", _hoisted_17$1, [
                  ia("span", null, "《汉书》" + ea(c.cat), 1 /* TEXT */),
                  ia("span", null, ea(c.paras) + " 段", 1 /* TEXT */),
                  ia("span", null, ea(c.chars.toLocaleString()) + " 字", 1 /* TEXT */),
                  (c.hasTrans)
                    ? (r4(), ie("span", _hoisted_18$1, "有译文"))
                    : ig("v-if", true)
                ])
              ], 8 /* PROPS */, _hoisted_16$1))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ], 64 /* STABLE_FRAGMENT */))
      : (r4(), ie(rQ, { key: 1 }, [
          ia("div", _hoisted_19$1, [
            ia("button", {
              class: "chip ghost",
              onClick: _cache[1] || (_cache[1] = $event => (tA(go)('/library')))
            }, "← 资料库"),
            ia("h2", _hoisted_20$1, ea(chapter.value.title), 1 /* TEXT */),
            ia("p", null, [
              id(" 《汉书》" + ea(chapter.value.cat) + " · " + ea(chapter.value.paras.length) + " 段 · ", 1 /* TEXT */),
              (shijiOf.value.length)
                ? (r4(), ie("span", _hoisted_21$1, "对应《史记》："))
                : ig("v-if", true),
              (r4(true), ie(rQ, null, lj(shijiOf.value, (no) => {
                return (r4(), ie("a", {
                  key: no,
                  style: {"margin-right":"8px"},
                  onClick: $event => (tA(go)('/c/' + no))
                }, "卷" + ea(no) + " " + ea(sTitle(no)), 9 /* TEXT, PROPS */, _hoisted_22))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            ia("div", _hoisted_23, [
              ia("button", {
                class: Y(["filter-pill", { on: showTrans.value }]),
                onClick: _cache[2] || (_cache[2] = $event => (showTrans.value = true))
              }, "原文＋译文", 2 /* CLASS */),
              ia("button", {
                class: Y(["filter-pill", { on: !showTrans.value }]),
                onClick: _cache[3] || (_cache[3] = $event => (showTrans.value = false))
              }, "仅原文", 2 /* CLASS */)
            ])
          ]),
          ia("div", _hoisted_24, [
            (r4(true), ie(rQ, null, lj(chapter.value.paras, (p, i) => {
              return (r4(), ie("div", {
                id: 'h-' + (i + 1),
                key: i,
                class: "pblock",
                style: {"border-bottom":"1px dashed var(--line-2)","padding-bottom":"10px"}
              }, [
                ia("div", _hoisted_26, [
                  ia("span", _hoisted_27, ea(i + 1), 1 /* TEXT */),
                  ia("button", {
                    class: "chip ghost",
                    onClick: $event => (toggleCompare(i))
                  }, ea(compare.value === i ? "收起对照" : "对照《史记》"), 9 /* TEXT, PROPS */, _hoisted_28)
                ]),
                ia("div", _hoisted_29, ea(p), 1 /* TEXT */),
                (showTrans.value && chapter.value.trans[i])
                  ? (r4(), ie("div", _hoisted_30, ea(chapter.value.trans[i]), 1 /* TEXT */))
                  : ig("v-if", true),
                (compare.value === i)
                  ? (r4(), ie("div", _hoisted_31, [
                      _cache[9] || (_cache[9] = ia("div", { style: {"font-size":"11.5px","color":"var(--muted)","margin-bottom":"4px"} }, "互见提示", -1 /* CACHED */)),
                      _cache[10] || (_cache[10] = id(" 此段可与 ", -1 /* CACHED */)),
                      (r4(true), ie(rQ, null, lj(shijiOf.value, (no) => {
                        return (r4(), ie("a", {
                          key: no,
                          style: {"margin":"0 4px"},
                          onClick: $event => (tA(go)('/c/' + no))
                        }, "《史记·" + ea(sTitle(no)) + "》", 9 /* TEXT, PROPS */, _hoisted_32))
                      }), 128 /* KEYED_FRAGMENT */)),
                      _cache[11] || (_cache[11] = id(" 对读；两书叙事详略、书法不同，正可互参。 ", -1 /* CACHED */))
                    ]))
                  : ig("v-if", true)
              ], 8 /* PROPS */, _hoisted_25))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ], 64 /* STABLE_FRAGMENT */))
  ]))
}
}

};

const _hoisted_1$1 = { class: "page" };
const _hoisted_2$1 = { class: "panel-head" };
const _hoisted_3$1 = {
  class: "mini-pill",
  style: {"margin-left":"6px"}
};
const _hoisted_4$1 = { style: {"margin-left":"10px","font-size":"12.5px","color":"var(--ink-3)"} };
const _hoisted_5$1 = { class: "panel-body" };
const _hoisted_6$1 = { class: "log-title" };
const _hoisted_7$1 = {
  class: "desc",
  style: {"font-size":"12.8px","margin-top":"3px"}
};
const _hoisted_8$1 = { class: "panel" };
const _hoisted_9$1 = { class: "panel-body" };
const _hoisted_10 = { class: "stat-row" };
const _hoisted_11 = { class: "stat" };
const _hoisted_12 = { class: "v" };
const _hoisted_13 = { class: "stat" };
const _hoisted_14 = { class: "v" };
const _hoisted_15 = { class: "stat" };
const _hoisted_16 = { class: "v" };
const _hoisted_17 = { class: "stat" };
const _hoisted_18 = { class: "v" };
const _hoisted_19 = { class: "stat" };
const _hoisted_20 = { class: "v" };
const _hoisted_21 = { style: {"margin-top":"14px","display":"flex","gap":"8px","flex-wrap":"wrap"} };


var ChangelogView = {
  __name: 'ChangelogView',
  setup(__props) {

const entries = [
  {
    version: "v1.1",
    date: "2026-10-20",
    title: "十表、资料库、沙盘与批注体系",
    items: [
      { k: "新增", t: "十表数据化年表", d: "《史记》十表按原表体例结构化：六国年表逐年（前476—前221，256 行）、十二诸侯年表、秦楚之际月表、三代世表（世系树），以及四张侯者年表与将相名臣年表；表格可检索、可直达纪传。" },
      { k: "新增", t: "资料库 · 《汉书》对读", d: "收录与《史记》重叠的 40 篇《汉书》纪传（约 29 万字，原文＋白话），并按人物、地名共现自动生成 3,045 条段级对照；读到汉初纪传可直接展开《汉书》相应段落。" },
      { k: "升级", t: "地图与沙盘", d: "支持滚轮缩放与拖拽平移、鹰眼缩略图、山脉图层、四种疆域（战国七雄／秦／楚汉分封／汉初）、现代地名切换；沙盘增加阶段时间轴与地图字幕，行军路线带动画箭头。" },
      { k: "升级", t: "批注体系", d: "新增批注侧栏：本篇/全部切换、点句定位、就地编辑、删除、一键导出与导入 JSON；多标签页之间实时同步，正文高亮随批注即时更新。" },
      { k: "新增", t: "本地账号", d: "支持注册/登录，账号数据在本机分别存储（批注、收藏、书签、进度互不干扰），可一键导出全量数据迁移到其他设备。" },
      { k: "新增", t: "接入真实大模型", d: "助手可配置任意 OpenAI 兼容接口（如 DeepSeek）：自动检索《史记》相关段落作为上下文，流式回答并给出出处；Key 仅保存在本机浏览器。未配置时保留本地检索模式。" },
      { k: "优化", t: "导航与检索", d: "顶栏新增「年表」「资料库」入口；检索结果、章节深链、助手出处均可直达段落。" },
      { k: "修复", t: "部署相关", d: "修复 PowerShell 打包 zip 使用反斜杠路径导致 Netlify 子目录 404；关闭 Netlify 新站默认 SSO；修正 `#/search?q=` 参数解析。" },
    ],
  },
  {
    version: "v1.0",
    date: "2026-10-20",
    title: "首版：130 篇全录与十一类知识层",
    items: [
      { k: "首版", t: "全文与文白对照", d: "130 篇、3,505 段、约 62 万字；逐段文白对照、4,700+ 条注释、生僻字注音、三体字号行距、日间/护眼/夜间。" },
      { k: "首版", t: "实体与空间", d: "181 人小传与 522 条关系、160 处古地名、10 场战役沙盘、秦汉官制分层图。" },
      { k: "首版", t: "解读与互动", d: "40 个纪事本末专题、40 首咏史诗、79 条伴读评点、16 张决策卡、五千年气候曲线、划线批注、收藏书签进度。" },
    ],
  },
];

const tagColor = (k) => ({ "新增": "var(--accent)", "升级": "var(--green)", "优化": "var(--gold)", "修复": "var(--red)", "首版": "var(--ink-3)" }[k] || "var(--ink-3)");
const stats = iD(() => store.index?.stats || {});

return (_ctx, _cache) => {
  return (r4(), ie("div", _hoisted_1$1, [
    _cache[9] || (_cache[9] = ia("div", { class: "page-head" }, [
      ia("h2", null, "更新日志"),
      ia("p", null, "「读史记」的版本记录。当前为 v1.1，新增十表年表、汉书资料库、地图沙盘升级、批注体系与真实大模型问答。")
    ], -1 /* CACHED */)),
    (r4(), ie(rQ, null, lj(entries, (e) => {
      return ia("div", {
        key: e.version,
        class: "panel",
        style: {"margin-bottom":"16px"}
      }, [
        ia("div", _hoisted_2$1, [
          ia("b", null, ea(e.version), 1 /* TEXT */),
          ia("span", _hoisted_3$1, ea(e.date), 1 /* TEXT */),
          ia("span", _hoisted_4$1, ea(e.title), 1 /* TEXT */)
        ]),
        ia("div", _hoisted_5$1, [
          (r4(true), ie(rQ, null, lj(e.items, (it, i) => {
            return (r4(), ie("div", {
              key: i,
              class: "log-item"
            }, [
              ia("span", {
                class: "log-tag",
                style: G({ color: tagColor(it.k), borderColor: tagColor(it.k) })
              }, ea(it.k), 5 /* TEXT, STYLE */),
              ia("div", null, [
                ia("div", _hoisted_6$1, ea(it.t), 1 /* TEXT */),
                ia("div", _hoisted_7$1, ea(it.d), 1 /* TEXT */)
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    }), 64 /* STABLE_FRAGMENT */)),
    ia("div", _hoisted_8$1, [
      _cache[8] || (_cache[8] = ia("div", { class: "panel-head" }, [
        ia("b", null, "现在的规模")
      ], -1 /* CACHED */)),
      ia("div", _hoisted_9$1, [
        ia("div", _hoisted_10, [
          ia("div", _hoisted_11, [
            ia("div", _hoisted_12, ea(stats.value.chapters), 1 /* TEXT */),
            _cache[3] || (_cache[3] = ia("div", { class: "k" }, "《史记》篇", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_13, [
            ia("div", _hoisted_14, ea((stats.value.paras || 0).toLocaleString()), 1 /* TEXT */),
            _cache[4] || (_cache[4] = ia("div", { class: "k" }, "段", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_15, [
            ia("div", _hoisted_16, ea((tA(store).tables?.tables || []).length), 1 /* TEXT */),
            _cache[5] || (_cache[5] = ia("div", { class: "k" }, "张年表", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_17, [
            ia("div", _hoisted_18, ea((tA(store).hanshuIndex?.chapters || []).length), 1 /* TEXT */),
            _cache[6] || (_cache[6] = ia("div", { class: "k" }, "《汉书》篇", -1 /* CACHED */))
          ]),
          ia("div", _hoisted_19, [
            ia("div", _hoisted_20, ea(Object.values(tA(store).hanshuLinks?.links || {}).reduce((s, o) => s + Object.keys(o).length, 0).toLocaleString()), 1 /* TEXT */),
            _cache[7] || (_cache[7] = ia("div", { class: "k" }, "段级对照", -1 /* CACHED */))
          ])
        ]),
        ia("div", _hoisted_21, [
          ia("button", {
            class: "btn sm",
            onClick: _cache[0] || (_cache[0] = $event => (tA(go)('/tables')))
          }, "看看年表 →"),
          ia("button", {
            class: "btn sm",
            onClick: _cache[1] || (_cache[1] = $event => (tA(go)('/library')))
          }, "翻翻《汉书》→"),
          ia("button", {
            class: "btn sm",
            onClick: _cache[2] || (_cache[2] = $event => (tA(go)('/about')))
          }, "关于本站")
        ])
      ])
    ])
  ]))
}
}

};

const _hoisted_1 = {
  key: 0,
  class: "boot"
};
const _hoisted_2 = ["data-layout", "data-font"];
const _hoisted_3 = { class: "main-col" };
const _hoisted_4 = {
  class: "modal",
  style: {"width":"420px"}
};
const _hoisted_5 = { class: "modal-head" };
const _hoisted_6 = { class: "modal-body" };
const _hoisted_7 = {
  key: 0,
  class: "desc",
  style: {"color":"var(--red)","margin-top":"8px","font-size":"12.5px"}
};
const _hoisted_8 = { style: {"display":"flex","gap":"8px","margin-top":"14px"} };
const _hoisted_9 = {
  key: 0,
  class: "toast"
};


var App = {
  __name: 'App',
  setup(__props) {

const route = tx(parseRoute());
const settingsOpen = tx(false);
const loginOpen = tx(false);
const loginName = tx("");
const loginPwd = tx("");
const loginMsg = tx("");
const booting = tx(true);

const viewMap = {
  reader: ReaderView,
  events: EventsView,
  people: PeopleView,
  map: MapView,
  sandbox: SandboxView,
  poems: PoemsView,
  decisions: DecisionsView,
  lexicon: LexiconView,
  climate: ClimateView,
  offices: OfficesView,
  me: MeView,
  search: SearchView,
  about: AboutView,
  tables: TablesView,
  library: LibraryView,
  changelog: ChangelogView,
};

const currentView = iD(() => viewMap[route.value.name] || ReaderView);
const isReader = iD(() => route.value.name === "reader");

function scrollToAnchor(anchor) {
  if (!anchor) { window.scrollTo({ top: 0 }); return; }
  setTimeout(() => {
    const el = document.getElementById("p-" + anchor);
    if (el) el.scrollIntoView({ block: "center" });
  }, 80);
}

function onHash() {
  route.value = parseRoute();
  store.searchOpen = false;
  const q = new URLSearchParams((location.hash.split("?")[1] || ""));
  if (q.get("as") === "1") store.assistant = true;
  if (q.get("panel")) {
    const [type, id] = String(q.get("panel")).split(":");
    if (type && id) { store.panel = { type, id }; store.assistant = true; }
  }
  if (route.value.name === "reader") {
    loadChapter(route.value.no).then(() => scrollToAnchor(route.value.anchor));
  } else {
    window.scrollTo({ top: 0 });
  }
}

lS(async () => {
  try {
    await initStore();
    await loadChapter(route.value.no);
    document.documentElement.dataset.mode = store.settings.mode;
    const q = new URLSearchParams(location.hash.split("?")[1] || "");
    if (q.get("as") === "1") store.assistant = true;
    if (q.get("panel")) {
      const [type, id] = String(q.get("panel")).split(":");
      if (type && id) { store.panel = { type, id }; store.assistant = true; }
    }
    scrollToAnchor(route.value.anchor);
  } catch (e) {
    console.error(e);
  } finally {
    booting.value = false;
  }
  window.addEventListener("hashchange", onHash);
});
lw(() => window.removeEventListener("hashchange", onHash));

ny(() => store.settings.mode, (m) => {
  document.documentElement.dataset.mode = m;
});
ny(
  () => [store.settings.size, store.settings.lineHeight],
  () => {
    const el = document.documentElement;
    el.style.setProperty("--font-size", store.settings.size + "px");
    el.style.setProperty("--line-height", String(store.settings.lineHeight));
  },
  { immediate: true }
);
ny(() => store.dialogue, (d) => {
  if (d && d.kind === "settings") {
    settingsOpen.value = true;
    store.dialogue = null;
  }
  if (d && d.kind === "login") {
    loginOpen.value = true;
    store.dialogue = null;
  }
});

async function doLogin() {
  loginMsg.value = "";
  const r = await signIn(loginName.value, loginPwd.value);
  if (!r.ok) { loginMsg.value = r.msg; return; }
  loginOpen.value = false;
  loginName.value = "";
  loginPwd.value = "";
}

async function doRegister() {
  loginMsg.value = "";
  const r = await register(loginName.value, loginPwd.value);
  if (!r.ok) { loginMsg.value = r.msg; return; }
  loginOpen.value = false;
  loginName.value = "";
  loginPwd.value = "";
}

const narrow = tx(typeof window !== "undefined" ? window.innerWidth < 1180 : false);
function measure() {
  narrow.value = window.innerWidth < 1180;
}
lS(() => {
  window.addEventListener("resize", measure);
  setTimeout(() => {
    measure();
    if (narrow.value) {
      store.tocOpen = false;
      store.assistant = false;
    }
  }, 600);
});
lw(() => window.removeEventListener("resize", measure));

return (_ctx, _cache) => {
  return (booting.value)
    ? (r4(), ie("div", _hoisted_1, [...(_cache[10] || (_cache[10] = [
        ia("div", { class: "boot-seal" }, "史", -1 /* CACHED */),
        ia("div", { class: "boot-text" }, "读史记 · 正在展开卷帙……", -1 /* CACHED */)
      ]))]))
    : (r4(), ie(rQ, { key: 1 }, [
        iu(TopBar, {
          route: route.value,
          onOpenSettings: _cache[0] || (_cache[0] = $event => (settingsOpen.value = true)),
          onOpenLogin: _cache[1] || (_cache[1] = $event => (loginOpen.value = true)),
          onToggleAssistant: _cache[2] || (_cache[2] = $event => (tA(store).assistant = !tA(store).assistant))
        }, null, 8 /* PROPS */, ["route"]),
        ia("div", {
          class: "shell",
          "data-layout": tA(store).settings.layout,
          "data-font": tA(store).settings.font
        }, [
          (narrow.value && (tA(store).assistant || (isReader.value && tA(store).tocOpen)))
            ? (r4(), ie("div", {
                key: 0,
                class: "drawer-mask",
                onClick: _cache[3] || (_cache[3] = $event => {tA(store).tocOpen = false; tA(store).assistant = false;})
              }))
            : ig("v-if", true),
          (isReader.value && tA(store).tocOpen)
            ? (r4(), it(TocPane, {
                key: 1,
                current: route.value.no
              }, null, 8 /* PROPS */, ["current"]))
            : ig("v-if", true),
          ia("div", _hoisted_3, [
            (r4(), it(lM(currentView.value), { route: route.value }, null, 8 /* PROPS */, ["route"]))
          ]),
          (tA(store).assistant)
            ? (r4(), it(Assistant, { key: 2 }))
            : ig("v-if", true)
        ], 8 /* PROPS */, _hoisted_2),
        (settingsOpen.value)
          ? (r4(), it(SettingsModal, {
              key: 0,
              onClose: _cache[4] || (_cache[4] = $event => (settingsOpen.value = false))
            }))
          : ig("v-if", true),
        iu(DialogueHost),
        (loginOpen.value)
          ? (r4(), ie("div", {
              key: 1,
              class: "overlay",
              onClick: _cache[9] || (_cache[9] = oa($event => (loginOpen.value = false), ["self"]))
            }, [
              ia("div", _hoisted_4, [
                ia("div", _hoisted_5, [
                  _cache[11] || (_cache[11] = ia("b", null, "登录读史记", -1 /* CACHED */)),
                  ia("button", {
                    class: "icon-btn",
                    style: {"margin-left":"auto"},
                    onClick: _cache[5] || (_cache[5] = $event => (loginOpen.value = false))
                  }, "✕")
                ]),
                ia("div", _hoisted_6, [
                  _cache[13] || (_cache[13] = ia("p", {
                    class: "desc",
                    style: {"margin-top":"0"}
                  }, " 账号与阅读数据（批注、收藏、书签、进度）都保存在本机浏览器，按账号隔离，可随时导出备份。 演示站不联网、无需邮箱；换设备请用「个人空间 → 导出全部数据」迁移。 ", -1 /* CACHED */)),
                  nu(ia("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((loginName).value = $event)),
                    class: "search-input",
                    placeholder: "昵称，如「太史公门下」",
                    onKeyup: oc(doLogin, ["enter"])
                  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
                    [s4, loginName.value]
                  ]),
                  nu(ia("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((loginPwd).value = $event)),
                    type: "password",
                    class: "search-input",
                    style: {"margin-top":"8px"},
                    placeholder: "密码（可留空，仅本机校验）",
                    onKeyup: oc(doLogin, ["enter"])
                  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
                    [s4, loginPwd.value]
                  ]),
                  (loginMsg.value)
                    ? (r4(), ie("div", _hoisted_7, ea(loginMsg.value), 1 /* TEXT */))
                    : ig("v-if", true),
                  ia("div", _hoisted_8, [
                    ia("button", {
                      class: "btn primary",
                      onClick: doLogin
                    }, "登录"),
                    ia("button", {
                      class: "btn",
                      onClick: doRegister
                    }, "注册新账号"),
                    _cache[12] || (_cache[12] = ia("span", { style: {"flex":"1"} }, null, -1 /* CACHED */)),
                    ia("button", {
                      class: "btn",
                      onClick: _cache[8] || (_cache[8] = $event => (loginOpen.value = false))
                    }, "稍后")
                  ])
                ])
              ])
            ]))
          : ig("v-if", true),
        iu(i7, { name: "fade" }, {
          default: na(() => [
            (tA(store).toast)
              ? (r4(), ie("div", _hoisted_9, ea(tA(store).toast), 1 /* TEXT */))
              : ig("v-if", true)
          ]),
          _: 1 /* STABLE */
        })
      ], 64 /* STABLE_FRAGMENT */))
}
}

};

ov(App).mount("#app");
