(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _f(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},Rs=[],ui=()=>{},nv=()=>!1,El=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gf=n=>n.startsWith("onUpdate:"),Vt=Object.assign,vf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},iv=Object.prototype.hasOwnProperty,ot=(n,e)=>iv.call(n,e),Ne=Array.isArray,Ps=n=>ea(n)==="[object Map]",Tl=n=>ea(n)==="[object Set]",vh=n=>ea(n)==="[object Date]",Ge=n=>typeof n=="function",bt=n=>typeof n=="string",di=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",kp=n=>(ht(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),zp=Object.prototype.toString,ea=n=>zp.call(n),rv=n=>ea(n).slice(8,-1),Vp=n=>ea(n)==="[object Object]",xf=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yo=_f(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},sv=/-(\w)/g,zn=bl(n=>n.replace(sv,(e,t)=>t?t.toUpperCase():"")),ov=/\B([A-Z])/g,ns=bl(n=>n.replace(ov,"-$1").toLowerCase()),Al=bl(n=>n.charAt(0).toUpperCase()+n.slice(1)),jl=bl(n=>n?`on${Al(n)}`:""),rr=(n,e)=>!Object.is(n,e),Va=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Hp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},tl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},av=n=>{const e=bt(n)?Number(n):NaN;return isNaN(e)?n:e};let xh;const wl=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sf(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=bt(i)?fv(i):Sf(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(n)||ht(n))return n}const lv=/;(?![^(]*\))/g,cv=/:([^]+)/,uv=/\/\*[^]*?\*\//g;function fv(n){const e={};return n.replace(uv,"").split(lv).forEach(t=>{if(t){const i=t.split(cv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ut(n){let e="";if(bt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=Ut(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const hv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dv=_f(hv);function Gp(n){return!!n||n===""}function pv(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Cl(n[i],e[i]);return t}function Cl(n,e){if(n===e)return!0;let t=vh(n),i=vh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=di(n),i=di(e),t||i)return n===e;if(t=Ne(n),i=Ne(e),t||i)return t&&i?pv(n,e):!1;if(t=ht(n),i=ht(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Cl(n[o],e[o]))return!1}}return String(n)===String(e)}function mv(n,e){return n.findIndex(t=>Cl(t,e))}const Wp=n=>!!(n&&n.__v_isRef===!0),je=n=>bt(n)?n:n==null?"":Ne(n)||ht(n)&&(n.toString===zp||!Ge(n.toString))?Wp(n)?je(n.value):JSON.stringify(n,Xp,2):String(n),Xp=(n,e)=>Wp(e)?Xp(n,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Kl(i,s)+" =>"]=r,t),{})}:Tl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Kl(t))}:di(e)?Kl(e):ht(e)&&!Ne(e)&&!Vp(e)?String(e):e,Kl=(n,e="")=>{var t;return di(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function $p(n){return new qp(n)}function Yp(){return nn}function _v(n,e=!1){nn&&nn.cleanups.push(n)}let pt;const Zl=new WeakSet;class jp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zl.has(this)&&(Zl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),Jp(this);const e=pt,t=Kn;pt=this,Kn=!0;try{return this.fn()}finally{Qp(this),pt=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ef(e);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jc(this)&&this.run()}get dirty(){return jc(this)}}let Kp=0,Mo,Eo;function Zp(n,e=!1){if(n.flags|=8,e){n.next=Eo,Eo=n;return}n.next=Mo,Mo=n}function yf(){Kp++}function Mf(){if(--Kp>0)return;if(Eo){let e=Eo;for(Eo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Mo;){let e=Mo;for(Mo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Jp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ef(i),gv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function jc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(em(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function em(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Io))return;n.globalVersion=Io;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!jc(n)){n.flags&=-3;return}const t=pt,i=Kn;pt=n,Kn=!0;try{Jp(n);const r=n.fn(n._value);(e.version===0||rr(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=t,Kn=i,Qp(n),n.flags&=-3}}function Ef(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ef(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function gv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const tm=[];function pr(){tm.push(Kn),Kn=!1}function mr(){const n=tm.pop();Kn=n===void 0?!0:n}function Sh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=pt;pt=void 0;try{e()}finally{pt=t}}}let Io=0;class vv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pt||!Kn||pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pt)t=this.activeLink=new vv(pt,this),pt.deps?(t.prevDep=pt.depsTail,pt.depsTail.nextDep=t,pt.depsTail=t):pt.deps=pt.depsTail=t,nm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=pt.depsTail,t.nextDep=void 0,pt.depsTail.nextDep=t,pt.depsTail=t,pt.deps===t&&(pt.deps=i)}return t}trigger(e){this.version++,Io++,this.notify(e)}notify(e){yf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mf()}}}function nm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)nm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nl=new WeakMap,Xr=Symbol(""),Kc=Symbol(""),Uo=Symbol("");function Yt(n,e,t){if(Kn&&pt){let i=nl.get(n);i||nl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tf),r.map=i,r.key=t),r.track()}}function Ci(n,e,t,i,r,s){const o=nl.get(n);if(!o){Io++;return}const a=l=>{l&&l.trigger()};if(yf(),e==="clear")o.forEach(a);else{const l=Ne(n),c=l&&xf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Uo||!di(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Uo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Xr)),Ps(n)&&a(o.get(Kc)));break;case"delete":l||(a(o.get(Xr)),Ps(n)&&a(o.get(Kc)));break;case"set":Ps(n)&&a(o.get(Xr));break}}Mf()}function xv(n,e){const t=nl.get(n);return t&&t.get(e)}function os(n){const e=Qe(n);return e===n?e:(Yt(e,"iterate",Uo),Bn(n)?e:e.map(jt))}function Rl(n){return Yt(n=Qe(n),"iterate",Uo),n}const Sv={__proto__:null,[Symbol.iterator](){return Jl(this,Symbol.iterator,jt)},concat(...n){return os(this).concat(...n.map(e=>Ne(e)?os(e):e))},entries(){return Jl(this,"entries",n=>(n[1]=jt(n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(jt),arguments)},find(n,e){return _i(this,"find",n,e,jt,arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,jt,arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ql(this,"includes",n)},indexOf(...n){return Ql(this,"indexOf",n)},join(n){return os(this).join(n)},lastIndexOf(...n){return Ql(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return so(this,"pop")},push(...n){return so(this,"push",n)},reduce(n,...e){return yh(this,"reduce",n,e)},reduceRight(n,...e){return yh(this,"reduceRight",n,e)},shift(){return so(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return so(this,"splice",n)},toReversed(){return os(this).toReversed()},toSorted(n){return os(this).toSorted(n)},toSpliced(...n){return os(this).toSpliced(...n)},unshift(...n){return so(this,"unshift",n)},values(){return Jl(this,"values",jt)}};function Jl(n,e,t){const i=Rl(n),r=i[e]();return i!==n&&!Bn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const yv=Array.prototype;function _i(n,e,t,i,r,s){const o=Rl(n),a=o!==n&&!Bn(n),l=o[e];if(l!==yv[e]){const f=l.apply(n,s);return a?jt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,jt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yh(n,e,t,i){const r=Rl(n);let s=t;return r!==n&&(Bn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,jt(a),l,n)}),r[e](s,...i)}function Ql(n,e,t){const i=Qe(n);Yt(i,"iterate",Uo);const r=i[e](...t);return(r===-1||r===!1)&&wf(t[0])?(t[0]=Qe(t[0]),i[e](...t)):r}function so(n,e,t=[]){pr(),yf();const i=Qe(n)[e].apply(n,t);return Mf(),mr(),i}const Mv=_f("__proto__,__v_isRef,__isVue"),im=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(di));function Ev(n){di(n)||(n=String(n));const e=Qe(this);return Yt(e,"has",n),e.hasOwnProperty(n)}class rm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Iv:lm:s?am:om).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!r){let l;if(o&&(l=Sv[t]))return l;if(t==="hasOwnProperty")return Ev}const a=Reflect.get(e,t,Rt(e)?e:i);return(di(t)?im.has(t):Mv(t))||(r||Yt(e,"get",t),s)?a:Rt(a)?o&&xf(t)?a:a.value:ht(a)?r?um(a):ta(a):a}}class sm extends rm{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Jr(s);if(!Bn(i)&&!Jr(i)&&(s=Qe(s),i=Qe(i)),!Ne(e)&&Rt(s)&&!Rt(i))return l?!1:(s.value=i,!0)}const o=Ne(e)&&xf(t)?Number(t)<e.length:ot(e,t),a=Reflect.set(e,t,i,Rt(e)?e:r);return e===Qe(r)&&(o?rr(i,s)&&Ci(e,"set",t,i):Ci(e,"add",t,i)),a}deleteProperty(e,t){const i=ot(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ci(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!di(t)||!im.has(t))&&Yt(e,"has",t),i}ownKeys(e){return Yt(e,"iterate",Ne(e)?"length":Xr),Reflect.ownKeys(e)}}class Tv extends rm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bv=new sm,Av=new Tv,wv=new sm(!0);const Zc=n=>n,ha=n=>Reflect.getPrototypeOf(n);function Cv(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=Ps(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Zc:e?Jc:jt;return!e&&Yt(s,"iterate",l?Kc:Xr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function da(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Rv(n,e){const t={get(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);n||(rr(r,a)&&Yt(o,"get",r),Yt(o,"get",a));const{has:l}=ha(o),c=e?Zc:n?Jc:jt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Yt(Qe(r),"iterate",Xr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);return n||(rr(r,a)&&Yt(o,"has",r),Yt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qe(a),c=e?Zc:n?Jc:jt;return!n&&Yt(l,"iterate",Xr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Vt(t,n?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(r){!e&&!Bn(r)&&!Jr(r)&&(r=Qe(r));const s=Qe(this);return ha(s).has.call(s,r)||(s.add(r),Ci(s,"add",r,r)),this},set(r,s){!e&&!Bn(s)&&!Jr(s)&&(s=Qe(s));const o=Qe(this),{has:a,get:l}=ha(o);let c=a.call(o,r);c||(r=Qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?rr(s,u)&&Ci(o,"set",r,s):Ci(o,"add",r,s),this},delete(r){const s=Qe(this),{has:o,get:a}=ha(s);let l=o.call(s,r);l||(r=Qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ci(s,"delete",r,void 0),c},clear(){const r=Qe(this),s=r.size!==0,o=r.clear();return s&&Ci(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Cv(r,n,e)}),t}function bf(n,e){const t=Rv(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ot(t,r)&&r in i?t:i,r,s)}const Pv={get:bf(!1,!1)},Dv={get:bf(!1,!0)},Lv={get:bf(!0,!1)};const om=new WeakMap,am=new WeakMap,lm=new WeakMap,Iv=new WeakMap;function Uv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nv(n){return n.__v_skip||!Object.isExtensible(n)?0:Uv(rv(n))}function ta(n){return Jr(n)?n:Af(n,!1,bv,Pv,om)}function cm(n){return Af(n,!1,wv,Dv,am)}function um(n){return Af(n,!0,Av,Lv,lm)}function Af(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Nv(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function sr(n){return Jr(n)?sr(n.__v_raw):!!(n&&n.__v_isReactive)}function Jr(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function wf(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Cf(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&Hp(n,"__v_skip",!0),n}const jt=n=>ht(n)?ta(n):n,Jc=n=>ht(n)?um(n):n;function Rt(n){return n?n.__v_isRef===!0:!1}function mt(n){return fm(n,!1)}function Fv(n){return fm(n,!0)}function fm(n,e){return Rt(n)?n:new Ov(n,e)}class Ov{constructor(e,t){this.dep=new Tf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:jt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Bn(e)||Jr(e);e=i?e:Qe(e),rr(e,t)&&(this._rawValue=e,this._value=i?e:jt(e),this.dep.trigger())}}function wt(n){return Rt(n)?n.value:n}const Bv={get:(n,e,t)=>e==="__v_raw"?n:wt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function hm(n){return sr(n)?n:new Proxy(n,Bv)}function kv(n){const e=Ne(n)?new Array(n.length):{};for(const t in n)e[t]=Vv(n,t);return e}class zv{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xv(Qe(this._object),this._key)}}function Vv(n,e,t){const i=n[e];return Rt(i)?i:new zv(n,e,t)}class Hv{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return Zp(this,!0),!0}get value(){const e=this.dep.track();return em(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gv(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new Hv(i,r,t)}const pa={},il=new WeakMap;let Ir;function Wv(n,e=!1,t=Ir){if(t){let i=il.get(t);i||il.set(t,i=[]),i.push(n)}}function Xv(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Bn(v)||r===!1||r===0?Ri(v,1):Ri(v);let u,f,h,d,g=!1,_=!1;if(Rt(n)?(f=()=>n.value,g=Bn(n)):sr(n)?(f=()=>c(n),g=!0):Ne(n)?(_=!0,g=n.some(v=>sr(v)||Bn(v)),f=()=>n.map(v=>{if(Rt(v))return v.value;if(sr(v))return c(v);if(Ge(v))return l?l(v,2):v()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){pr();try{h()}finally{mr()}}const v=Ir;Ir=u;try{return l?l(n,3,[d]):n(d)}finally{Ir=v}}:f=ui,e&&r){const v=f,y=r===!0?1/0:r;f=()=>Ri(v(),y)}const m=Yp(),p=()=>{u.stop(),m&&m.active&&vf(m.effects,u)};if(s&&e){const v=e;e=(...y)=>{v(...y),p()}}let A=_?new Array(n.length).fill(pa):pa;const b=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const y=u.run();if(r||g||(_?y.some((T,C)=>rr(T,A[C])):rr(y,A))){h&&h();const T=Ir;Ir=u;try{const C=[y,A===pa?void 0:_&&A[0]===pa?[]:A,d];l?l(e,3,C):e(...C),A=y}finally{Ir=T}}}else u.run()};return a&&a(b),u=new jp(f),u.scheduler=o?()=>o(b,!1):b,d=v=>Wv(v,!1,u),h=u.onStop=()=>{const v=il.get(u);if(v){if(l)l(v,4);else for(const y of v)y();il.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ri(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Rt(n))Ri(n.value,e,t);else if(Ne(n))for(let i=0;i<n.length;i++)Ri(n[i],e,t);else if(Tl(n)||Ps(n))n.forEach(i=>{Ri(i,e,t)});else if(Vp(n)){for(const i in n)Ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function na(n,e,t,i){try{return i?n(...i):n()}catch(r){Pl(r,e,t)}}function Jn(n,e,t,i){if(Ge(n)){const r=na(n,e,t,i);return r&&kp(r)&&r.catch(s=>{Pl(s,e,t)}),r}if(Ne(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Jn(n[s],e,t,i));return r}}function Pl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){pr(),na(s,null,10,[n,l,c]),mr();return}}qv(n,t,r,i,o)}function qv(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const rn=[];let ti=-1;const Ds=[];let ji=null,Ts=0;const dm=Promise.resolve();let rl=null;function Dl(n){const e=rl||dm;return n?e.then(this?n.bind(this):n):e}function $v(n){let e=ti+1,t=rn.length;for(;e<t;){const i=e+t>>>1,r=rn[i],s=No(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Rf(n){if(!(n.flags&1)){const e=No(n),t=rn[rn.length-1];!t||!(n.flags&2)&&e>=No(t)?rn.push(n):rn.splice($v(e),0,n),n.flags|=1,pm()}}function pm(){rl||(rl=dm.then(_m))}function Yv(n){Ne(n)?Ds.push(...n):ji&&n.id===-1?ji.splice(Ts+1,0,n):n.flags&1||(Ds.push(n),n.flags|=1),pm()}function Mh(n,e,t=ti+1){for(;t<rn.length;t++){const i=rn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;rn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function mm(n){if(Ds.length){const e=[...new Set(Ds)].sort((t,i)=>No(t)-No(i));if(Ds.length=0,ji){ji.push(...e);return}for(ji=e,Ts=0;Ts<ji.length;Ts++){const t=ji[Ts];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ji=null,Ts=0}}const No=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _m(n){try{for(ti=0;ti<rn.length;ti++){const e=rn[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),na(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<rn.length;ti++){const e=rn[ti];e&&(e.flags&=-2)}ti=-1,rn.length=0,mm(),rl=null,(rn.length||Ds.length)&&_m()}}let an=null,gm=null;function sl(n){const e=an;return an=n,gm=n&&n.type.__scopeId||null,e}function Qc(n,e=an,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ih(-1);const s=sl(e);let o;try{o=n(...r)}finally{sl(s),i._d&&Ih(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ol(n,e){if(an===null)return n;const t=Fl(an),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ft]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&Ri(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Sr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(pr(),Jn(l,t,8,[n.el,a,n,e]),mr())}}const jv=Symbol("_vte"),vm=n=>n.__isTeleport,Ki=Symbol("_leaveCb"),ma=Symbol("_enterCb");function Kv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qs(()=>{n.isMounted=!0}),wm(()=>{n.isUnmounting=!0}),n}const In=[Function,Array],xm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:In,onEnter:In,onAfterEnter:In,onEnterCancelled:In,onBeforeLeave:In,onLeave:In,onAfterLeave:In,onLeaveCancelled:In,onBeforeAppear:In,onAppear:In,onAfterAppear:In,onAppearCancelled:In},Sm=n=>{const e=n.subTree;return e.component?Sm(e.component):e},Zv={name:"BaseTransition",props:xm,setup(n,{slots:e}){const t=$0(),i=Kv();return()=>{const r=e.default&&Em(e.default(),!0);if(!r||!r.length)return;const s=ym(r),o=Qe(n),{mode:a}=o;if(i.isLeaving)return ec(s);const l=Eh(s);if(!l)return ec(s);let c=eu(l,o,i,t,f=>c=f);l.type!==fn&&Fo(l,c);let u=t.subTree&&Eh(t.subTree);if(u&&u.type!==fn&&!Or(l,u)&&Sm(t).type!==fn){let f=eu(u,o,i,t);if(Fo(u,f),a==="out-in"&&l.type!==fn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},ec(s);a==="in-out"&&l.type!==fn?f.delayLeave=(h,d,g)=>{const _=Mm(i,u);_[String(u.key)]=u,h[Ki]=()=>{d(),h[Ki]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function ym(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==fn){e=t;break}}return e}const Jv=Zv;function Mm(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function eu(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:b}=e,v=String(n.key),y=Mm(t,n),T=(x,M)=>{x&&Jn(x,i,9,M)},C=(x,M)=>{const I=M[1];T(x,M),Ne(x)?x.every(U=>U.length<=1)&&I():x.length<=1&&I()},P={mode:o,persisted:a,beforeEnter(x){let M=l;if(!t.isMounted)if(s)M=m||l;else return;x[Ki]&&x[Ki](!0);const I=y[v];I&&Or(n,I)&&I.el[Ki]&&I.el[Ki](),T(M,[x])},enter(x){let M=c,I=u,U=f;if(!t.isMounted)if(s)M=p||c,I=A||u,U=b||f;else return;let F=!1;const X=x[ma]=$=>{F||(F=!0,$?T(U,[x]):T(I,[x]),P.delayedLeave&&P.delayedLeave(),x[ma]=void 0)};M?C(M,[x,X]):X()},leave(x,M){const I=String(n.key);if(x[ma]&&x[ma](!0),t.isUnmounting)return M();T(h,[x]);let U=!1;const F=x[Ki]=X=>{U||(U=!0,M(),X?T(_,[x]):T(g,[x]),x[Ki]=void 0,y[I]===n&&delete y[I])};y[I]=n,d?C(d,[x,F]):F()},clone(x){const M=eu(x,e,t,i,r);return r&&r(M),M}};return P}function ec(n){if(Ll(n))return n=ur(n),n.children=null,n}function Eh(n){if(!Ll(n))return vm(n.type)&&n.children?ym(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function Fo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Fo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Em(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===_t?(o.patchFlag&128&&r++,i=i.concat(Em(o.children,e,a))):(e||o.type!==fn)&&i.push(a!=null?ur(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Tm(n,e){return Ge(n)?Vt({name:n.name},e,{setup:n}):n}function bm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function al(n,e,t,i,r=!1){if(Ne(n)){n.forEach((g,_)=>al(g,e&&(Ne(e)?e[_]:e),t,i,r));return}if(To(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&al(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Fl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,h=Qe(f),d=f===ft?()=>!1:g=>ot(h,g);if(c!=null&&c!==l&&(bt(c)?(u[c]=null,d(c)&&(f[c]=null)):Rt(c)&&(c.value=null)),Ge(l))na(l,a,12,[o,u]);else{const g=bt(l),_=Rt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Ne(p)&&vf(p,s):Ne(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Mn(m,t)):m()}}}wl().requestIdleCallback;wl().cancelIdleCallback;const To=n=>!!n.type.__asyncLoader,Ll=n=>n.type.__isKeepAlive;function Qv(n,e){Am(n,"a",e)}function e0(n,e){Am(n,"da",e)}function Am(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Il(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ll(r.parent.vnode)&&t0(i,e,t,r),r=r.parent}}function t0(n,e,t,i){const r=Il(e,n,i,!0);eo(()=>{vf(i[e],r)},t)}function Il(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{pr();const a=ia(t),l=Jn(e,t,n,o);return a(),mr(),l});return i?r.unshift(s):r.push(s),s}}const Oi=n=>(e,t=zt)=>{(!Bo||n==="sp")&&Il(n,(...i)=>e(...i),t)},n0=Oi("bm"),Qs=Oi("m"),i0=Oi("bu"),r0=Oi("u"),wm=Oi("bum"),eo=Oi("um"),s0=Oi("sp"),o0=Oi("rtg"),a0=Oi("rtc");function l0(n,e=zt){Il("ec",n,e)}const Cm="components";function Rm(n,e){return Dm(Cm,n,!0,e)||n}const Pm=Symbol.for("v-ndc");function c0(n){return bt(n)?Dm(Cm,n,!1)||n:n||Pm}function Dm(n,e,t=!0,i=!1){const r=an||zt;if(r){const s=r.type;{const a=J0(s,!1);if(a&&(a===e||a===zn(e)||a===Al(zn(e))))return s}const o=Th(r[n]||s[n],e)||Th(r.appContext[n],e);return!o&&i?s:o}}function Th(n,e){return n&&(n[e]||n[zn(e)]||n[Al(zn(e))])}function sn(n,e,t,i){let r;const s=t,o=Ne(n);if(o||bt(n)){const a=o&&sr(n);let l=!1;a&&(l=!Bn(n),n=Rl(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?jt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const tu=n=>n?Jm(n)?Fl(n):tu(n.parent):null,bo=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tu(n.parent),$root:n=>tu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Im(n),$forceUpdate:n=>n.f||(n.f=()=>{Rf(n.update)}),$nextTick:n=>n.n||(n.n=Dl.bind(n.proxy)),$watch:n=>D0.bind(n)}),tc=(n,e)=>n!==ft&&!n.__isScriptSetup&&ot(n,e),u0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(tc(i,e))return o[e]=1,i[e];if(r!==ft&&ot(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&ot(c,e))return o[e]=3,s[e];if(t!==ft&&ot(t,e))return o[e]=4,t[e];nu&&(o[e]=0)}}const u=bo[e];let f,h;if(u)return e==="$attrs"&&Yt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&ot(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ot(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return tc(r,e)?(r[e]=t,!0):i!==ft&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&ot(n,o)||tc(e,o)||(a=s[0])&&ot(a,o)||ot(i,o)||ot(bo,o)||ot(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function bh(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nu=!0;function f0(n){const e=Im(n),t=n.proxy,i=n.ctx;nu=!1,e.beforeCreate&&Ah(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:b,unmounted:v,render:y,renderTracked:T,renderTriggered:C,errorCaptured:P,serverPrefetch:x,expose:M,inheritAttrs:I,components:U,directives:F,filters:X}=e;if(c&&h0(c,i,null),o)for(const G in o){const V=o[G];Ge(V)&&(i[G]=V.bind(t))}if(r){const G=r.call(t,t);ht(G)&&(n.data=ta(G))}if(nu=!0,s)for(const G in s){const V=s[G],pe=Ge(V)?V.bind(t,t):Ge(V.get)?V.get.bind(t,t):ui,_e=!Ge(V)&&Ge(V.set)?V.set.bind(t):ui,Se=Nt({get:pe,set:_e});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Re=>Se.value=Re})}if(a)for(const G in a)Lm(a[G],i,t,G);if(l){const G=Ge(l)?l.call(t):l;Reflect.ownKeys(G).forEach(V=>{Ha(V,G[V])})}u&&Ah(u,n,"c");function B(G,V){Ne(V)?V.forEach(pe=>G(pe.bind(t))):V&&G(V.bind(t))}if(B(n0,f),B(Qs,h),B(i0,d),B(r0,g),B(Qv,_),B(e0,m),B(l0,P),B(a0,T),B(o0,C),B(wm,A),B(eo,v),B(s0,x),Ne(M))if(M.length){const G=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(G,V,{get:()=>t[V],set:pe=>t[V]=pe})})}else n.exposed||(n.exposed={});y&&n.render===ui&&(n.render=y),I!=null&&(n.inheritAttrs=I),U&&(n.components=U),F&&(n.directives=F),x&&bm(n)}function h0(n,e,t=ui){Ne(n)&&(n=iu(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=Zn(r.from||i,r.default,!0):s=Zn(r.from||i):s=Zn(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ah(n,e,t){Jn(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lm(n,e,t,i){let r=i.includes(".")?$m(t,i):()=>t[i];if(bt(n)){const s=e[n];Ge(s)&&Ls(r,s)}else if(Ge(n))Ls(r,n.bind(t));else if(ht(n))if(Ne(n))n.forEach(s=>Lm(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Ls(r,s,n)}}function Im(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ll(l,c,o,!0)),ll(l,e,o)),ht(e)&&s.set(e,l),l}function ll(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ll(n,s,t,!0),r&&r.forEach(o=>ll(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=d0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const d0={data:wh,props:Ch,emits:Ch,methods:go,computed:go,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:go,directives:go,watch:m0,provide:wh,inject:p0};function wh(n,e){return e?n?function(){return Vt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function p0(n,e){return go(iu(n),iu(e))}function iu(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function en(n,e){return n?[...new Set([].concat(n,e))]:e}function go(n,e){return n?Vt(Object.create(null),n,e):e}function Ch(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:Vt(Object.create(null),bh(n),bh(e??{})):e}function m0(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=en(n[i],e[i]);return t}function Um(){return{app:null,config:{isNativeTag:nv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _0=0;function g0(n,e){return function(i,r=null){Ge(i)||(i=Vt({},i)),r!=null&&!ht(r)&&(r=null);const s=Um(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:_0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ex,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(c,...f)):Ge(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ft(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Fl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=qr;qr=c;try{return u()}finally{qr=f}}};return c}}let qr=null;function Ha(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Zn(n,e,t=!1){const i=zt||an;if(i||qr){const r=qr?qr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function v0(){return!!(zt||an||qr)}const Nm={},Fm=()=>Object.create(Nm),Om=n=>Object.getPrototypeOf(n)===Nm;function x0(n,e,t,i=!1){const r={},s=Fm();n.propsDefaults=Object.create(null),Bm(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:cm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function S0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ul(n.emitsOptions,h))continue;const d=e[h];if(l)if(ot(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=zn(h);r[g]=ru(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Bm(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ot(e,f)&&((u=ns(f))===f||!ot(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ru(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ot(e,f))&&(delete s[f],c=!0)}c&&Ci(n.attrs,"set","")}function Bm(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(yo(l))continue;const c=e[l];let u;r&&ot(r,u=zn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ul(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ru(r,l,f,c[f],n,!ot(c,f))}}return o}function ru(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ia(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ns(t))&&(i=!0))}return i}const y0=new WeakMap;function km(n,e,t=!1){const i=t?y0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,d]=km(f,e,!0);Vt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,Rs),Rs;if(Ne(s))for(let u=0;u<s.length;u++){const f=zn(s[u]);Rh(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=zn(u);if(Rh(f)){const h=s[u],d=o[f]=Ne(h)||Ge(h)?{type:h}:Vt({},h),g=d.type;let _=!1,m=!0;if(Ne(g))for(let p=0;p<g.length;++p){const A=g[p],b=Ge(A)&&A.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Ge(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ot(d,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function Rh(n){return n[0]!=="$"&&!yo(n)}const zm=n=>n[0]==="_"||n==="$stable",Pf=n=>Ne(n)?n.map(ii):[ii(n)],M0=(n,e,t)=>{if(e._n)return e;const i=Qc((...r)=>Pf(e(...r)),t);return i._c=!1,i},Vm=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zm(r))continue;const s=n[r];if(Ge(s))e[r]=M0(r,s,i);else if(s!=null){const o=Pf(s);e[r]=()=>o}}},Hm=(n,e)=>{const t=Pf(e);n.slots.default=()=>t},Gm=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},E0=(n,e,t)=>{const i=n.slots=Fm();if(n.vnode.shapeFlag&32){const r=e._;r?(Gm(i,e,t),t&&Hp(i,"_",r,!0)):Vm(e,i)}else e&&Hm(n,e)},T0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Gm(r,e,t):(s=!e.$stable,Vm(e,r)),o=e}else e&&(Hm(n,e),o={default:1});if(s)for(const a in r)!zm(a)&&o[a]==null&&delete r[a]},Mn=B0;function b0(n){return A0(n)}function A0(n,e){const t=wl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ui,insertStaticContent:g}=n,_=(D,L,E,se=null,ee=null,j=null,ie=void 0,ue=null,te=!!L.dynamicChildren)=>{if(D===L)return;D&&!Or(D,L)&&(se=O(D),Re(D,ee,j,!0),D=null),L.patchFlag===-2&&(te=!1,L.dynamicChildren=null);const{type:w,ref:S,shapeFlag:N}=L;switch(w){case Nl:m(D,L,E,se);break;case fn:p(D,L,E,se);break;case ic:D==null&&A(L,E,se,ie);break;case _t:U(D,L,E,se,ee,j,ie,ue,te);break;default:N&1?y(D,L,E,se,ee,j,ie,ue,te):N&6?F(D,L,E,se,ee,j,ie,ue,te):(N&64||N&128)&&w.process(D,L,E,se,ee,j,ie,ue,te,ae)}S!=null&&ee&&al(S,D&&D.ref,j,L||D,!L)},m=(D,L,E,se)=>{if(D==null)i(L.el=a(L.children),E,se);else{const ee=L.el=D.el;L.children!==D.children&&c(ee,L.children)}},p=(D,L,E,se)=>{D==null?i(L.el=l(L.children||""),E,se):L.el=D.el},A=(D,L,E,se)=>{[D.el,D.anchor]=g(D.children,L,E,se,D.el,D.anchor)},b=({el:D,anchor:L},E,se)=>{let ee;for(;D&&D!==L;)ee=h(D),i(D,E,se),D=ee;i(L,E,se)},v=({el:D,anchor:L})=>{let E;for(;D&&D!==L;)E=h(D),r(D),D=E;r(L)},y=(D,L,E,se,ee,j,ie,ue,te)=>{L.type==="svg"?ie="svg":L.type==="math"&&(ie="mathml"),D==null?T(L,E,se,ee,j,ie,ue,te):x(D,L,ee,j,ie,ue,te)},T=(D,L,E,se,ee,j,ie,ue)=>{let te,w;const{props:S,shapeFlag:N,transition:W,dirs:K}=D;if(te=D.el=o(D.type,j,S&&S.is,S),N&8?u(te,D.children):N&16&&P(D.children,te,null,se,ee,nc(D,j),ie,ue),K&&Sr(D,null,se,"created"),C(te,D,D.scopeId,ie,se),S){for(const ge in S)ge!=="value"&&!yo(ge)&&s(te,ge,null,S[ge],j,se);"value"in S&&s(te,"value",null,S.value,j),(w=S.onVnodeBeforeMount)&&ei(w,se,D)}K&&Sr(D,null,se,"beforeMount");const q=w0(ee,W);q&&W.beforeEnter(te),i(te,L,E),((w=S&&S.onVnodeMounted)||q||K)&&Mn(()=>{w&&ei(w,se,D),q&&W.enter(te),K&&Sr(D,null,se,"mounted")},ee)},C=(D,L,E,se,ee)=>{if(E&&d(D,E),se)for(let j=0;j<se.length;j++)d(D,se[j]);if(ee){let j=ee.subTree;if(L===j||jm(j.type)&&(j.ssContent===L||j.ssFallback===L)){const ie=ee.vnode;C(D,ie,ie.scopeId,ie.slotScopeIds,ee.parent)}}},P=(D,L,E,se,ee,j,ie,ue,te=0)=>{for(let w=te;w<D.length;w++){const S=D[w]=ue?Zi(D[w]):ii(D[w]);_(null,S,L,E,se,ee,j,ie,ue)}},x=(D,L,E,se,ee,j,ie)=>{const ue=L.el=D.el;let{patchFlag:te,dynamicChildren:w,dirs:S}=L;te|=D.patchFlag&16;const N=D.props||ft,W=L.props||ft;let K;if(E&&yr(E,!1),(K=W.onVnodeBeforeUpdate)&&ei(K,E,L,D),S&&Sr(L,D,E,"beforeUpdate"),E&&yr(E,!0),(N.innerHTML&&W.innerHTML==null||N.textContent&&W.textContent==null)&&u(ue,""),w?M(D.dynamicChildren,w,ue,E,se,nc(L,ee),j):ie||V(D,L,ue,null,E,se,nc(L,ee),j,!1),te>0){if(te&16)I(ue,N,W,E,ee);else if(te&2&&N.class!==W.class&&s(ue,"class",null,W.class,ee),te&4&&s(ue,"style",N.style,W.style,ee),te&8){const q=L.dynamicProps;for(let ge=0;ge<q.length;ge++){const he=q[ge],xe=N[he],Be=W[he];(Be!==xe||he==="value")&&s(ue,he,xe,Be,ee,E)}}te&1&&D.children!==L.children&&u(ue,L.children)}else!ie&&w==null&&I(ue,N,W,E,ee);((K=W.onVnodeUpdated)||S)&&Mn(()=>{K&&ei(K,E,L,D),S&&Sr(L,D,E,"updated")},se)},M=(D,L,E,se,ee,j,ie)=>{for(let ue=0;ue<L.length;ue++){const te=D[ue],w=L[ue],S=te.el&&(te.type===_t||!Or(te,w)||te.shapeFlag&70)?f(te.el):E;_(te,w,S,null,se,ee,j,ie,!0)}},I=(D,L,E,se,ee)=>{if(L!==E){if(L!==ft)for(const j in L)!yo(j)&&!(j in E)&&s(D,j,L[j],null,ee,se);for(const j in E){if(yo(j))continue;const ie=E[j],ue=L[j];ie!==ue&&j!=="value"&&s(D,j,ue,ie,ee,se)}"value"in E&&s(D,"value",L.value,E.value,ee)}},U=(D,L,E,se,ee,j,ie,ue,te)=>{const w=L.el=D?D.el:a(""),S=L.anchor=D?D.anchor:a("");let{patchFlag:N,dynamicChildren:W,slotScopeIds:K}=L;K&&(ue=ue?ue.concat(K):K),D==null?(i(w,E,se),i(S,E,se),P(L.children||[],E,S,ee,j,ie,ue,te)):N>0&&N&64&&W&&D.dynamicChildren?(M(D.dynamicChildren,W,E,ee,j,ie,ue),(L.key!=null||ee&&L===ee.subTree)&&Wm(D,L,!0)):V(D,L,E,S,ee,j,ie,ue,te)},F=(D,L,E,se,ee,j,ie,ue,te)=>{L.slotScopeIds=ue,D==null?L.shapeFlag&512?ee.ctx.activate(L,E,se,ie,te):X(L,E,se,ee,j,ie,te):$(D,L,te)},X=(D,L,E,se,ee,j,ie)=>{const ue=D.component=q0(D,se,ee);if(Ll(D)&&(ue.ctx.renderer=ae),Y0(ue,!1,ie),ue.asyncDep){if(ee&&ee.registerDep(ue,B,ie),!D.el){const te=ue.subTree=Ft(fn);p(null,te,L,E)}}else B(ue,D,L,E,ee,j,ie)},$=(D,L,E)=>{const se=L.component=D.component;if(F0(D,L,E))if(se.asyncDep&&!se.asyncResolved){G(se,L,E);return}else se.next=L,se.update();else L.el=D.el,se.vnode=L},B=(D,L,E,se,ee,j,ie)=>{const ue=()=>{if(D.isMounted){let{next:N,bu:W,u:K,parent:q,vnode:ge}=D;{const Ee=Xm(D);if(Ee){N&&(N.el=ge.el,G(D,N,ie)),Ee.asyncDep.then(()=>{D.isUnmounted||ue()});return}}let he=N,xe;yr(D,!1),N?(N.el=ge.el,G(D,N,ie)):N=ge,W&&Va(W),(xe=N.props&&N.props.onVnodeBeforeUpdate)&&ei(xe,q,N,ge),yr(D,!0);const Be=Dh(D),de=D.subTree;D.subTree=Be,_(de,Be,f(de.el),O(de),D,ee,j),N.el=Be.el,he===null&&O0(D,Be.el),K&&Mn(K,ee),(xe=N.props&&N.props.onVnodeUpdated)&&Mn(()=>ei(xe,q,N,ge),ee)}else{let N;const{el:W,props:K}=L,{bm:q,m:ge,parent:he,root:xe,type:Be}=D,de=To(L);yr(D,!1),q&&Va(q),!de&&(N=K&&K.onVnodeBeforeMount)&&ei(N,he,L),yr(D,!0);{xe.ce&&xe.ce._injectChildStyle(Be);const Ee=D.subTree=Dh(D);_(null,Ee,E,se,D,ee,j),L.el=Ee.el}if(ge&&Mn(ge,ee),!de&&(N=K&&K.onVnodeMounted)){const Ee=L;Mn(()=>ei(N,he,Ee),ee)}(L.shapeFlag&256||he&&To(he.vnode)&&he.vnode.shapeFlag&256)&&D.a&&Mn(D.a,ee),D.isMounted=!0,L=E=se=null}};D.scope.on();const te=D.effect=new jp(ue);D.scope.off();const w=D.update=te.run.bind(te),S=D.job=te.runIfDirty.bind(te);S.i=D,S.id=D.uid,te.scheduler=()=>Rf(S),yr(D,!0),w()},G=(D,L,E)=>{L.component=D;const se=D.vnode.props;D.vnode=L,D.next=null,S0(D,L.props,se,E),T0(D,L.children,E),pr(),Mh(D),mr()},V=(D,L,E,se,ee,j,ie,ue,te=!1)=>{const w=D&&D.children,S=D?D.shapeFlag:0,N=L.children,{patchFlag:W,shapeFlag:K}=L;if(W>0){if(W&128){_e(w,N,E,se,ee,j,ie,ue,te);return}else if(W&256){pe(w,N,E,se,ee,j,ie,ue,te);return}}K&8?(S&16&&ve(w,ee,j),N!==w&&u(E,N)):S&16?K&16?_e(w,N,E,se,ee,j,ie,ue,te):ve(w,ee,j,!0):(S&8&&u(E,""),K&16&&P(N,E,se,ee,j,ie,ue,te))},pe=(D,L,E,se,ee,j,ie,ue,te)=>{D=D||Rs,L=L||Rs;const w=D.length,S=L.length,N=Math.min(w,S);let W;for(W=0;W<N;W++){const K=L[W]=te?Zi(L[W]):ii(L[W]);_(D[W],K,E,null,ee,j,ie,ue,te)}w>S?ve(D,ee,j,!0,!1,N):P(L,E,se,ee,j,ie,ue,te,N)},_e=(D,L,E,se,ee,j,ie,ue,te)=>{let w=0;const S=L.length;let N=D.length-1,W=S-1;for(;w<=N&&w<=W;){const K=D[w],q=L[w]=te?Zi(L[w]):ii(L[w]);if(Or(K,q))_(K,q,E,null,ee,j,ie,ue,te);else break;w++}for(;w<=N&&w<=W;){const K=D[N],q=L[W]=te?Zi(L[W]):ii(L[W]);if(Or(K,q))_(K,q,E,null,ee,j,ie,ue,te);else break;N--,W--}if(w>N){if(w<=W){const K=W+1,q=K<S?L[K].el:se;for(;w<=W;)_(null,L[w]=te?Zi(L[w]):ii(L[w]),E,q,ee,j,ie,ue,te),w++}}else if(w>W)for(;w<=N;)Re(D[w],ee,j,!0),w++;else{const K=w,q=w,ge=new Map;for(w=q;w<=W;w++){const ye=L[w]=te?Zi(L[w]):ii(L[w]);ye.key!=null&&ge.set(ye.key,w)}let he,xe=0;const Be=W-q+1;let de=!1,Ee=0;const Le=new Array(Be);for(w=0;w<Be;w++)Le[w]=0;for(w=K;w<=N;w++){const ye=D[w];if(xe>=Be){Re(ye,ee,j,!0);continue}let Ve;if(ye.key!=null)Ve=ge.get(ye.key);else for(he=q;he<=W;he++)if(Le[he-q]===0&&Or(ye,L[he])){Ve=he;break}Ve===void 0?Re(ye,ee,j,!0):(Le[Ve-q]=w+1,Ve>=Ee?Ee=Ve:de=!0,_(ye,L[Ve],E,null,ee,j,ie,ue,te),xe++)}const ke=de?C0(Le):Rs;for(he=ke.length-1,w=Be-1;w>=0;w--){const ye=q+w,Ve=L[ye],We=ye+1<S?L[ye+1].el:se;Le[w]===0?_(null,Ve,E,We,ee,j,ie,ue,te):de&&(he<0||w!==ke[he]?Se(Ve,E,We,2):he--)}}},Se=(D,L,E,se,ee=null)=>{const{el:j,type:ie,transition:ue,children:te,shapeFlag:w}=D;if(w&6){Se(D.component.subTree,L,E,se);return}if(w&128){D.suspense.move(L,E,se);return}if(w&64){ie.move(D,L,E,ae);return}if(ie===_t){i(j,L,E);for(let N=0;N<te.length;N++)Se(te[N],L,E,se);i(D.anchor,L,E);return}if(ie===ic){b(D,L,E);return}if(se!==2&&w&1&&ue)if(se===0)ue.beforeEnter(j),i(j,L,E),Mn(()=>ue.enter(j),ee);else{const{leave:N,delayLeave:W,afterLeave:K}=ue,q=()=>i(j,L,E),ge=()=>{N(j,()=>{q(),K&&K()})};W?W(j,q,ge):ge()}else i(j,L,E)},Re=(D,L,E,se=!1,ee=!1)=>{const{type:j,props:ie,ref:ue,children:te,dynamicChildren:w,shapeFlag:S,patchFlag:N,dirs:W,cacheIndex:K}=D;if(N===-2&&(ee=!1),ue!=null&&al(ue,null,E,D,!0),K!=null&&(L.renderCache[K]=void 0),S&256){L.ctx.deactivate(D);return}const q=S&1&&W,ge=!To(D);let he;if(ge&&(he=ie&&ie.onVnodeBeforeUnmount)&&ei(he,L,D),S&6)fe(D.component,E,se);else{if(S&128){D.suspense.unmount(E,se);return}q&&Sr(D,null,L,"beforeUnmount"),S&64?D.type.remove(D,L,E,ae,se):w&&!w.hasOnce&&(j!==_t||N>0&&N&64)?ve(w,L,E,!1,!0):(j===_t&&N&384||!ee&&S&16)&&ve(te,L,E),se&&Xe(D)}(ge&&(he=ie&&ie.onVnodeUnmounted)||q)&&Mn(()=>{he&&ei(he,L,D),q&&Sr(D,null,L,"unmounted")},E)},Xe=D=>{const{type:L,el:E,anchor:se,transition:ee}=D;if(L===_t){Y(E,se);return}if(L===ic){v(D);return}const j=()=>{r(E),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(D.shapeFlag&1&&ee&&!ee.persisted){const{leave:ie,delayLeave:ue}=ee,te=()=>ie(E,j);ue?ue(D.el,j,te):te()}else j()},Y=(D,L)=>{let E;for(;D!==L;)E=h(D),r(D),D=E;r(L)},fe=(D,L,E)=>{const{bum:se,scope:ee,job:j,subTree:ie,um:ue,m:te,a:w}=D;Ph(te),Ph(w),se&&Va(se),ee.stop(),j&&(j.flags|=8,Re(ie,D,L,E)),ue&&Mn(ue,L),Mn(()=>{D.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},ve=(D,L,E,se=!1,ee=!1,j=0)=>{for(let ie=j;ie<D.length;ie++)Re(D[ie],L,E,se,ee)},O=D=>{if(D.shapeFlag&6)return O(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const L=h(D.anchor||D.el),E=L&&L[jv];return E?h(E):L};let oe=!1;const le=(D,L,E)=>{D==null?L._vnode&&Re(L._vnode,null,null,!0):_(L._vnode||null,D,L,null,null,null,E),L._vnode=D,oe||(oe=!0,Mh(),mm(),oe=!1)},ae={p:_,um:Re,m:Se,r:Xe,mt:X,mc:P,pc:V,pbc:M,n:O,o:n};return{render:le,hydrate:void 0,createApp:g0(le)}}function nc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function w0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wm(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Wm(o,a)),a.type===Nl&&(a.el=o.el)}}function C0(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Xm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xm(e)}function Ph(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const R0=Symbol.for("v-scx"),P0=()=>Zn(R0);function Ls(n,e,t){return qm(n,e,t)}function qm(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=Vt({},t),l=e&&i||!e&&s!=="post";let c;if(Bo){if(s==="sync"){const d=P0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ui,d.resume=ui,d.pause=ui,d}}const u=zt;a.call=(d,g,_)=>Jn(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{Mn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Rf(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Xv(n,e,a);return Bo&&(c?c.push(h):l&&h()),h}function D0(n,e,t){const i=this.proxy,r=bt(n)?n.includes(".")?$m(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=ia(this),a=qm(r,s.bind(i),t);return o(),a}function $m(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const L0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${zn(e)}Modifiers`]||n[`${ns(e)}Modifiers`];function I0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&L0(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>bt(u)?u.trim():u)),o.number&&(r=t.map(tl)));let a,l=i[a=jl(e)]||i[a=jl(zn(e))];!l&&s&&(l=i[a=jl(ns(e))]),l&&Jn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Jn(c,n,6,r)}}function Ym(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=Ym(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):Vt(o,s),ht(n)&&i.set(n,o),o)}function Ul(n,e){return!n||!El(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,ns(e))||ot(n,e))}function Dh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=sl(n);let p,A;try{if(t.shapeFlag&4){const v=r||i,y=v;p=ii(c.call(y,v,u,f,d,h,g)),A=a}else{const v=e;p=ii(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),A=e.props?a:U0(a)}}catch(v){Ao.length=0,Pl(v,n,1),p=Ft(fn)}let b=p;if(A&&_!==!1){const v=Object.keys(A),{shapeFlag:y}=b;v.length&&y&7&&(s&&v.some(gf)&&(A=N0(A,s)),b=ur(b,A,!1,!0))}return t.dirs&&(b=ur(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Fo(b,t.transition),p=b,sl(m),p}const U0=n=>{let e;for(const t in n)(t==="class"||t==="style"||El(t))&&((e||(e={}))[t]=n[t]);return e},N0=(n,e)=>{const t={};for(const i in n)(!gf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function F0(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Lh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ul(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lh(i,o,c):!0:!!o;return!1}function Lh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ul(t,s))return!0}return!1}function O0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const jm=n=>n.__isSuspense;function B0(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Yv(n)}const _t=Symbol.for("v-fgt"),Nl=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),ic=Symbol.for("v-stc"),Ao=[];let bn=null;function Ue(n=!1){Ao.push(bn=n?null:[])}function k0(){Ao.pop(),bn=Ao[Ao.length-1]||null}let Oo=1;function Ih(n,e=!1){Oo+=n,n<0&&bn&&e&&(bn.hasOnce=!0)}function Km(n){return n.dynamicChildren=Oo>0?bn||Rs:null,k0(),Oo>0&&bn&&bn.push(n),n}function Oe(n,e,t,i,r,s){return Km(ne(n,e,t,i,r,s,!0))}function Df(n,e,t,i,r){return Km(Ft(n,e,t,i,r,!0))}function cl(n){return n?n.__v_isVNode===!0:!1}function Or(n,e){return n.type===e.type&&n.key===e.key}const Zm=({key:n})=>n??null,Ga=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Rt(n)||Ge(n)?{i:an,r:n,k:e,f:!!t}:n:null);function ne(n,e=null,t=null,i=0,r=null,s=n===_t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zm(e),ref:e&&Ga(e),scopeId:gm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return a?(Lf(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),Oo>0&&!o&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const Ft=z0;function z0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Pm)&&(n=fn),cl(n)){const a=ur(n,e,!0);return t&&Lf(a,t),Oo>0&&!s&&bn&&(a.shapeFlag&6?bn[bn.indexOf(n)]=a:bn.push(a)),a.patchFlag=-2,a}if(Q0(n)&&(n=n.__vccOpts),e){e=V0(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=Ut(a)),ht(l)&&(wf(l)&&!Ne(l)&&(l=Vt({},l)),e.style=Sf(l))}const o=bt(n)?1:jm(n)?128:vm(n)?64:ht(n)?4:Ge(n)?2:0;return ne(n,e,t,i,r,o,s,!0)}function V0(n){return n?wf(n)||Om(n)?Vt({},n):n:null}function ur(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?G0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Zm(c),ref:e&&e.ref?t&&s?Ne(s)?s.concat(Ga(e)):[s,Ga(e)]:Ga(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ur(n.ssContent),ssFallback:n.ssFallback&&ur(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Fo(u,l.clone(u)),u}function H0(n=" ",e=0){return Ft(Nl,null,n,e)}function Vr(n="",e=!1){return e?(Ue(),Df(fn,null,n)):Ft(fn,null,n)}function ii(n){return n==null||typeof n=="boolean"?Ft(fn):Ne(n)?Ft(_t,null,n.slice()):cl(n)?Zi(n):Ft(Nl,null,String(n))}function Zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ur(n)}function Lf(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Lf(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Om(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:an},t=32):(e=String(e),i&64?(t=16,e=[H0(e)]):t=8);n.children=e,n.shapeFlag|=t}function G0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ut([e.class,i.class]));else if(r==="style")e.style=Sf([e.style,i.style]);else if(El(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ei(n,e,t,i=null){Jn(n,e,7,[t,i])}const W0=Um();let X0=0;function q0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||W0,s={uid:X0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(i,r),emitsOptions:Ym(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=I0.bind(null,s),n.ce&&n.ce(s),s}let zt=null;const $0=()=>zt||an;let ul,su;{const n=wl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ul=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),su=e("__VUE_SSR_SETTERS__",t=>Bo=t)}const ia=n=>{const e=zt;return ul(n),n.scope.on(),()=>{n.scope.off(),ul(e)}},Uh=()=>{zt&&zt.scope.off(),ul(null)};function Jm(n){return n.vnode.shapeFlag&4}let Bo=!1;function Y0(n,e=!1,t=!1){e&&su(e);const{props:i,children:r}=n.vnode,s=Jm(n);x0(n,i,s,e),E0(n,r,t);const o=s?j0(n,e):void 0;return e&&su(!1),o}function j0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,u0);const{setup:i}=t;if(i){pr();const r=n.setupContext=i.length>1?Z0(n):null,s=ia(n),o=na(i,n,0,[n.props,r]),a=kp(o);if(mr(),s(),(a||n.sp)&&!To(n)&&bm(n),a){if(o.then(Uh,Uh),e)return o.then(l=>{Nh(n,l)}).catch(l=>{Pl(l,n,0)});n.asyncDep=o}else Nh(n,o)}else Qm(n)}function Nh(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=hm(e)),Qm(n)}function Qm(n,e,t){const i=n.type;n.render||(n.render=i.render||ui);{const r=ia(n);pr();try{f0(n)}finally{mr(),r()}}}const K0={get(n,e){return Yt(n,"get",""),n[e]}};function Z0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,K0),slots:n.slots,emit:n.emit,expose:e}}function Fl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hm(Cf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in bo)return bo[t](n)},has(e,t){return t in e||t in bo}})):n.proxy}function J0(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function Q0(n){return Ge(n)&&"__vccOpts"in n}const Nt=(n,e)=>Gv(n,e,Bo);function ks(n,e,t){const i=arguments.length;return i===2?ht(e)&&!Ne(e)?cl(e)?Ft(n,null,[e]):Ft(n,e):Ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&cl(t)&&(t=[t]),Ft(n,e,t))}const ex="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ou;const Fh=typeof window<"u"&&window.trustedTypes;if(Fh)try{ou=Fh.createPolicy("vue",{createHTML:n=>n})}catch{}const e_=ou?n=>ou.createHTML(n):n=>n,tx="http://www.w3.org/2000/svg",nx="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,Oh=bi&&bi.createElement("template"),ix={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?bi.createElementNS(tx,n):e==="mathml"?bi.createElementNS(nx,n):t?bi.createElement(n,{is:t}):bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Oh.innerHTML=e_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Oh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zi="transition",oo="animation",ko=Symbol("_vtc"),t_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rx=Vt({},xm,t_),sx=n=>(n.displayName="Transition",n.props=rx,n),ox=sx((n,{slots:e})=>ks(Jv,ax(n),e)),Mr=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},Bh=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function ax(n){const e={};for(const U in n)U in t_||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=lx(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:b,onLeave:v,onLeaveCancelled:y,onBeforeAppear:T=p,onAppear:C=A,onAppearCancelled:P=b}=e,x=(U,F,X,$)=>{U._enterCancelled=$,Er(U,F?u:a),Er(U,F?c:o),X&&X()},M=(U,F)=>{U._isLeaving=!1,Er(U,f),Er(U,d),Er(U,h),F&&F()},I=U=>(F,X)=>{const $=U?C:A,B=()=>x(F,U,X);Mr($,[F,B]),kh(()=>{Er(F,U?l:s),gi(F,U?u:a),Bh($)||zh(F,i,_,B)})};return Vt(e,{onBeforeEnter(U){Mr(p,[U]),gi(U,s),gi(U,o)},onBeforeAppear(U){Mr(T,[U]),gi(U,l),gi(U,c)},onEnter:I(!1),onAppear:I(!0),onLeave(U,F){U._isLeaving=!0;const X=()=>M(U,F);gi(U,f),U._enterCancelled?(gi(U,h),Gh()):(Gh(),gi(U,h)),kh(()=>{U._isLeaving&&(Er(U,f),gi(U,d),Bh(v)||zh(U,i,m,X))}),Mr(v,[U,X])},onEnterCancelled(U){x(U,!1,void 0,!0),Mr(b,[U])},onAppearCancelled(U){x(U,!0,void 0,!0),Mr(P,[U])},onLeaveCancelled(U){M(U),Mr(y,[U])}})}function lx(n){if(n==null)return null;if(ht(n))return[rc(n.enter),rc(n.leave)];{const e=rc(n);return[e,e]}}function rc(n){return av(n)}function gi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ko]||(n[ko]=new Set)).add(e)}function Er(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ko];t&&(t.delete(e),t.size||(n[ko]=void 0))}function kh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let cx=0;function zh(n,e,t,i){const r=n._endId=++cx,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=ux(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function ux(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${zi}Delay`),s=i(`${zi}Duration`),o=Vh(r,s),a=i(`${oo}Delay`),l=i(`${oo}Duration`),c=Vh(a,l);let u=null,f=0,h=0;e===zi?o>0&&(u=zi,f=o,h=s.length):e===oo?c>0&&(u=oo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?zi:oo:null,h=u?u===zi?s.length:l.length:0);const d=u===zi&&/\b(transform|all)(,|$)/.test(i(`${zi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Vh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Hh(t)+Hh(n[i])))}function Hh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Gh(){return document.body.offsetHeight}function fx(n,e,t){const i=n[ko];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wh=Symbol("_vod"),hx=Symbol("_vsh"),dx=Symbol(""),px=/(^|;)\s*display\s*:/;function mx(n,e,t){const i=n.style,r=bt(t);let s=!1;if(t&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Wa(i,a,"")}else for(const o in e)t[o]==null&&Wa(i,o,"");for(const o in t)o==="display"&&(s=!0),Wa(i,o,t[o])}else if(r){if(e!==t){const o=i[dx];o&&(t+=";"+o),i.cssText=t,s=px.test(t)}}else e&&n.removeAttribute("style");Wh in n&&(n[Wh]=s?i.display:"",n[hx]&&(i.display="none"))}const Xh=/\s*!important$/;function Wa(n,e,t){if(Ne(t))t.forEach(i=>Wa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=_x(n,e);Xh.test(t)?n.setProperty(ns(i),t.replace(Xh,""),"important"):n[i]=t}}const qh=["Webkit","Moz","ms"],sc={};function _x(n,e){const t=sc[e];if(t)return t;let i=zn(e);if(i!=="filter"&&i in n)return sc[e]=i;i=Al(i);for(let r=0;r<qh.length;r++){const s=qh[r]+i;if(s in n)return sc[e]=s}return e}const $h="http://www.w3.org/1999/xlink";function Yh(n,e,t,i,r,s=dv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS($h,e.slice(6,e.length)):n.setAttributeNS($h,e,t):t==null||s&&!Gp(t)?n.removeAttribute(e):n.setAttribute(e,s?"":di(t)?String(t):t)}function jh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?e_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Gp(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Br(n,e,t,i){n.addEventListener(e,t,i)}function gx(n,e,t,i){n.removeEventListener(e,t,i)}const Kh=Symbol("_vei");function vx(n,e,t,i,r=null){const s=n[Kh]||(n[Kh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=xx(e);if(i){const c=s[e]=Mx(i,r);Br(n,a,c,l)}else o&&(gx(n,a,o,l),s[e]=void 0)}}const Zh=/(?:Once|Passive|Capture)$/;function xx(n){let e;if(Zh.test(n)){e={};let i;for(;i=n.match(Zh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ns(n.slice(2)),e]}let oc=0;const Sx=Promise.resolve(),yx=()=>oc||(Sx.then(()=>oc=0),oc=Date.now());function Mx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jn(Ex(i,t.value),e,5,[i])};return t.value=n,t.attached=yx(),t}function Ex(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Jh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tx=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?fx(n,i,o):e==="style"?mx(n,t,i):El(e)?gf(e)||vx(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bx(n,e,i,o))?(jh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yh(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?jh(n,zn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Yh(n,e,i,o))};function bx(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Jh(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Jh(e)&&bt(t)?!1:e in n}const fl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>Va(e,t):e};function Ax(n){n.target.composing=!0}function Qh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Is=Symbol("_assign"),If={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Is]=fl(r);const s=i||r.props&&r.props.type==="number";Br(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=tl(a)),n[Is](a)}),t&&Br(n,"change",()=>{n.value=n.value.trim()}),e||(Br(n,"compositionstart",Ax),Br(n,"compositionend",Qh),Br(n,"change",Qh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Is]=fl(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?tl(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},wx={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Tl(e);Br(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?tl(hl(o)):hl(o));n[Is](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Dl(()=>{n._assigning=!1})}),n[Is]=fl(i)},mounted(n,{value:e}){ed(n,e)},beforeUpdate(n,e,t){n[Is]=fl(t)},updated(n,{value:e}){n._assigning||ed(n,e)}};function ed(n,e){const t=n.multiple,i=Ne(e);if(!(t&&!i&&!Tl(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=hl(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=mv(e,a)>-1}else o.selected=e.has(a);else if(Cl(hl(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function hl(n){return"_value"in n?n._value:n.value}const Cx=["ctrl","shift","alt","meta"],Rx={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Cx.some(t=>n[`${t}Key`]&&!e.includes(t))},zo=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Rx[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Px=Vt({patchProp:Tx},ix);let td;function Dx(){return td||(td=b0(Px))}const Lx=(...n)=>{const e=Dx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ux(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Ix(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ix(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ux(n){return bt(n)?document.querySelector(n):n}/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nx=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),Fx=n=>{const e=Nx(n);return e.charAt(0).toUpperCase()+e.slice(1)},Ox=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:r,name:s,class:o,...a},{slots:l})=>ks("svg",{..._a,width:n||_a.width,height:n||_a.height,stroke:i||_a.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:Ox("lucide",...s?[`lucide-${nd(Fx(s))}-icon`,`lucide-${nd(s)}`]:["lucide-icon"]),...a},[...r.map(c=>ks(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=(n,e)=>(t,{slots:i})=>ks(Bx,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=ra("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=ra("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ra("mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ra("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ra("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let n_;const Ol=n=>n_=n,i_=Symbol();function au(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var wo;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(wo||(wo={}));function Wx(){const n=$p(!0),e=n.run(()=>mt({}));let t=[],i=[];const r=Cf({install(s){Ol(r),r._a=s,s.provide(i_,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const r_=()=>{};function id(n,e,t,i=r_){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&Yp()&&_v(r),r}function as(n,...e){n.slice().forEach(t=>{t(...e)})}const Xx=n=>n(),rd=Symbol(),ac=Symbol();function lu(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];au(r)&&au(i)&&n.hasOwnProperty(t)&&!Rt(i)&&!sr(i)?n[t]=lu(r,i):n[t]=i}return n}const qx=Symbol();function $x(n){return!au(n)||!n.hasOwnProperty(qx)}const{assign:Yi}=Object;function Yx(n){return!!(Rt(n)&&n.effect)}function jx(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=kv(t.state.value[n]);return Yi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Cf(Nt(()=>{Ol(t);const d=t._s.get(n);return o[h].call(d,d)})),f),{}))}return l=s_(n,c,e,t,i,!0),l}function s_(n,e,t={},i,r,s){let o;const a=Yi({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],d;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={}),mt({});let _;function m(P){let x;c=u=!1,typeof P=="function"?(P(i.state.value[n]),x={type:wo.patchFunction,storeId:n,events:d}):(lu(i.state.value[n],P),x={type:wo.patchObject,payload:P,storeId:n,events:d});const M=_=Symbol();Dl().then(()=>{_===M&&(c=!0)}),u=!0,as(f,x,i.state.value[n])}const p=s?function(){const{state:x}=t,M=x?x():{};this.$patch(I=>{Yi(I,M)})}:r_;function A(){o.stop(),f=[],h=[],i._s.delete(n)}const b=(P,x="")=>{if(rd in P)return P[ac]=x,P;const M=function(){Ol(i);const I=Array.from(arguments),U=[],F=[];function X(G){U.push(G)}function $(G){F.push(G)}as(h,{args:I,name:M[ac],store:y,after:X,onError:$});let B;try{B=P.apply(this&&this.$id===n?this:y,I)}catch(G){throw as(F,G),G}return B instanceof Promise?B.then(G=>(as(U,G),G)).catch(G=>(as(F,G),Promise.reject(G))):(as(U,B),B)};return M[rd]=!0,M[ac]=x,M},v={_p:i,$id:n,$onAction:id.bind(null,h),$patch:m,$reset:p,$subscribe(P,x={}){const M=id(f,P,x.detached,()=>I()),I=o.run(()=>Ls(()=>i.state.value[n],U=>{(x.flush==="sync"?u:c)&&P({storeId:n,type:wo.direct,events:d},U)},Yi({},l,x)));return M},$dispose:A},y=ta(v);i._s.set(n,y);const C=(i._a&&i._a.runWithContext||Xx)(()=>i._e.run(()=>(o=$p()).run(()=>e({action:b}))));for(const P in C){const x=C[P];if(Rt(x)&&!Yx(x)||sr(x))s||(g&&$x(x)&&(Rt(x)?x.value=g[P]:lu(x,g[P])),i.state.value[n][P]=x);else if(typeof x=="function"){const M=b(x,P);C[P]=M,a.actions[P]=x}}return Yi(y,C),Yi(Qe(y),C),Object.defineProperty(y,"$state",{get:()=>i.state.value[n],set:P=>{m(x=>{Yi(x,P)})}}),i._p.forEach(P=>{Yi(y,o.run(()=>P({store:y,app:i._a,pinia:i,options:a})))}),g&&s&&t.hydrate&&t.hydrate(y.$state,g),c=!0,u=!0,y}/*! #__NO_SIDE_EFFECTS__ */function Kx(n,e,t){let i;const r=typeof e=="function";i=r?t:e;function s(o,a){const l=v0();return o=o||(l?Zn(i_,null):null),o&&Ol(o),o=n_,o._s.has(n)||(r?s_(n,e,i,o):jx(n,i,o)),o._s.get(n)}return s.$id=n,s}const Bi=Kx("settings",()=>{const e=mt((()=>{const a=localStorage.getItem("blogSettings");return a?JSON.parse(a):{isAddingGroup:!1,isShowingBg:!0,targetColor:"#ffffff"}})()),t=()=>{localStorage.setItem("blogSettings",JSON.stringify(e.value))},i=()=>{e.value.isAddingGroup=!e.value.isAddingGroup,t()},r=()=>{e.value.isShowingBg=!e.value.isShowingBg,t()},s=a=>{a==="Home"?e.value.isShowingBg=!0:e.value.isShowingBg=!1,t()},o=a=>{e.value.targetColor=a,document.documentElement.style.setProperty("--target-color",e.value.targetColor),t()};return Ls(e,t,{deep:!0}),{settings:e,toggleAddGroupMode:i,toggleShowingBg:r,resetShowingBg:s,setTargetColor:o}}),ki=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Zx={class:"nav-container"},Jx={key:0,class:"nav-items"},Qx={__name:"NavBar",setup(n){const e=Bi(),t=mt(!1),i=[{path:"/",title:"Home",icon:zx},{path:"/about",title:"About",icon:Gx},{path:"/posts",title:"Posts",icon:kx},{path:"/contact",title:"Contact",icon:Vx},{path:"/settings",title:"Settings",icon:Hx}];return(r,s)=>{const o=Rm("router-link");return Ue(),Oe("div",Zx,[ne("div",{class:Ut(["nav-logo",{expanded:t.value}]),onMouseenter:s[1]||(s[1]=a=>t.value=!0),onMouseleave:s[2]||(s[2]=a=>t.value=!1),onClick:s[3]||(s[3]=zo(()=>{},["stop"]))},[ne("div",{class:"logo",onClick:s[0]||(s[0]=(...a)=>wt(e).toggleShowingBg&&wt(e).toggleShowingBg(...a))},"B"),Ft(ox,{name:"fade"},{default:Qc(()=>[t.value?(Ue(),Oe("div",Jx,[(Ue(),Oe(_t,null,sn(i,a=>Ft(o,{key:a.path,to:a.path,class:"nav-icon",title:a.title,onClick:l=>wt(e).resetShowingBg(a.title)},{default:Qc(()=>[(Ue(),Df(c0(a.icon)))]),_:2},1032,["to","title","onClick"])),64))])):Vr("",!0)]),_:1})],34)])}}},eS=ki(Qx,[["__scopeId","data-v-85745478"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="175",tS=0,sd=1,nS=2,o_=1,iS=2,Ti=3,fr=0,hn=1,si=2,or=0,Us=1,od=2,ad=3,ld=4,rS=5,kr=100,sS=101,oS=102,aS=103,lS=104,cS=200,uS=201,fS=202,hS=203,cu=204,uu=205,dS=206,pS=207,mS=208,_S=209,gS=210,vS=211,xS=212,SS=213,yS=214,fu=0,hu=1,du=2,zs=3,pu=4,mu=5,_u=6,gu=7,a_=0,MS=1,ES=2,ar=0,TS=1,bS=2,AS=3,wS=4,CS=5,RS=6,PS=7,l_=300,Vs=301,Hs=302,vu=303,xu=304,Bl=306,Su=1e3,Hr=1001,yu=1002,wn=1003,DS=1004,ga=1005,ai=1006,lc=1007,Gr=1008,Li=1009,c_=1010,u_=1011,Vo=1012,Nf=1013,Qr=1014,li=1015,sa=1016,Ff=1017,Of=1018,Ho=1020,f_=35902,h_=1021,d_=1022,Yn=1023,p_=1024,m_=1025,Go=1026,Wo=1027,Bf=1028,kf=1029,__=1030,zf=1031,Vf=1033,Xa=33776,qa=33777,$a=33778,Ya=33779,Mu=35840,Eu=35841,Tu=35842,bu=35843,Au=36196,wu=37492,Cu=37496,Ru=37808,Pu=37809,Du=37810,Lu=37811,Iu=37812,Uu=37813,Nu=37814,Fu=37815,Ou=37816,Bu=37817,ku=37818,zu=37819,Vu=37820,Hu=37821,ja=36492,Gu=36494,Wu=36495,g_=36283,Xu=36284,qu=36285,$u=36286,LS=3200,IS=3201,US=0,NS=1,er="",Fn="srgb",Gs="srgb-linear",dl="linear",lt="srgb",ls=7680,cd=519,FS=512,OS=513,BS=514,v_=515,kS=516,zS=517,VS=518,HS=519,ud=35044,fd=35048,hd="300 es",Pi=2e3,pl=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=Math.PI/180,Yu=180/Math.PI;function oa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function GS(n,e){return(n%e+e)%e}function uc(n,e,t){return(1-t)*n+t*e}function ao(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],A=r[1],b=r[4],v=r[7],y=r[2],T=r[5],C=r[8];return s[0]=o*_+a*A+l*y,s[3]=o*m+a*b+l*T,s[6]=o*p+a*v+l*C,s[1]=c*_+u*A+f*y,s[4]=c*m+u*b+f*T,s[7]=c*p+u*v+f*C,s[2]=h*_+d*A+g*y,s[5]=h*m+d*b+g*T,s[8]=h*p+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new $e;function x_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ml(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WS(){const n=ml("canvas");return n.style.display="block",n}const dd={};function Ka(n){n in dd||(dd[n]=!0,console.warn(n))}function XS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function qS(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $S(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const n={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?dl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gs]:{primaries:e,whitePoint:i,transfer:dl,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),n}const nt=YS();function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class jS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=ml("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ml("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hc(r[o].image)):s.push(hc(r[o]))}else s=hc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;class ln extends to{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Hr,r=Hr,s=ai,o=Gr,a=Yn,l=Li,c=ln.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=oa(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Su:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Su:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=l_;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(d+1)/2,y=(p+1)/2,T=(u+h)/4,C=(f+_)/4,P=(g+m)/4;return b>v&&b>y?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=C/i):v>y?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=P/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=C/s,r=P/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-_)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends to{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends JS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class S_ extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const y=Math.sqrt(b),T=Math.atan2(y,p*A);m=Math.sin(m*T)/y,a=Math.sin(a*T)/y}const v=a*A;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new J,_d=new no;class is{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),xa.subVectors(this.max,lo),us.subVectors(e.a,lo),fs.subVectors(e.b,lo),hs.subVectors(e.c,lo),Vi.subVectors(fs,us),Hi.subVectors(hs,fs),Tr.subVectors(us,hs);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-Tr.z,Tr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,Tr.z,0,-Tr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-Tr.y,Tr.x,0];return!pc(t,us,fs,hs,xa)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,us,fs,hs,xa))?!1:(Sa.crossVectors(Vi,Hi),t=[Sa.x,Sa.y,Sa.z],pc(t,us,fs,hs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new J,new J,new J,new J,new J,new J,new J,new J],Gn=new J,va=new is,us=new J,fs=new J,hs=new J,Vi=new J,Hi=new J,Tr=new J,lo=new J,xa=new J,Sa=new J,br=new J;function pc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){br.fromArray(n,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ey=new is,co=new J,mc=new J;class aa{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ey.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(mc)),this.expandByPoint(co.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new J,_c=new J,ya=new J,Gi=new J,gc=new J,Ma=new J,vc=new J;class y_{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_c.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(_c);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Gi.dot(this.direction),l=-Gi.dot(ya),c=Gi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_c).addScaledVector(ya,h),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,s){gc.subVectors(t,e),Ma.subVectors(i,e),vc.crossVectors(gc,Ma);let o=this.direction.dot(vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(Gi,Ma));if(l<0)return null;const c=a*this.direction.dot(gc.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(vc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Wi.crossVectors(i,Sn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Wi.crossVectors(i,Sn)),Wi.normalize(),Ea.crossVectors(Sn,Wi),r[0]=Wi.x,r[4]=Ea.x,r[8]=Sn.x,r[1]=Wi.y,r[5]=Ea.y,r[9]=Sn.y,r[2]=Wi.z,r[6]=Ea.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],b=i[7],v=i[11],y=i[15],T=r[0],C=r[4],P=r[8],x=r[12],M=r[1],I=r[5],U=r[9],F=r[13],X=r[2],$=r[6],B=r[10],G=r[14],V=r[3],pe=r[7],_e=r[11],Se=r[15];return s[0]=o*T+a*M+l*X+c*V,s[4]=o*C+a*I+l*$+c*pe,s[8]=o*P+a*U+l*B+c*_e,s[12]=o*x+a*F+l*G+c*Se,s[1]=u*T+f*M+h*X+d*V,s[5]=u*C+f*I+h*$+d*pe,s[9]=u*P+f*U+h*B+d*_e,s[13]=u*x+f*F+h*G+d*Se,s[2]=g*T+_*M+m*X+p*V,s[6]=g*C+_*I+m*$+p*pe,s[10]=g*P+_*U+m*B+p*_e,s[14]=g*x+_*F+m*G+p*Se,s[3]=A*T+b*M+v*X+y*V,s[7]=A*C+b*I+v*$+y*pe,s[11]=A*P+b*U+v*B+y*_e,s[15]=A*x+b*F+v*G+y*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,y=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,T=t*A+i*b+r*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=A*C,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=b*C,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=v*C,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*C,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=y*C,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,A=l*c,b=l*u,v=l*f,y=i.x,T=i.y,C=i.z;return r[0]=(1-(_+p))*y,r[1]=(d+v)*y,r[2]=(g-b)*y,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(h+p))*T,r[6]=(m+A)*T,r[7]=0,r[8]=(g+b)*C,r[9]=(m-A)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Pi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Pi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===pl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Pi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===Pi)g=(o+s)*f,_=-2*f;else if(a===pl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new J,Wn=new gt,ty=new J(0,0,0),ny=new J(1,1,1),Wi=new J,Ea=new J,Sn=new J,gd=new gt,vd=new no;class Ii{constructor(e=0,t=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const xd=new J,ps=new no,Si=new gt,Ta=new J,uo=new J,ry=new J,sy=new no,Sd=new J(1,0,0),yd=new J(0,1,0),Md=new J(0,0,1),Ed={type:"added"},oy={type:"removed"},ms={type:"childadded",child:null},xc={type:"childremoved",child:null};class dn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new J,t=new Ii,i=new no,r=new J(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new $e}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(uo,Ta,this.up):Si.lookAt(Ta,uo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Si),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oy),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new J(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new J,yi=new J,Sc=new J,Mi=new J,_s=new J,gs=new J,Td=new J,yc=new J,Mc=new J,Ec=new J,Tc=new Ct,bc=new Ct,Ac=new Ct;class $n{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),yi.subVectors(i,t),Sc.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(yi),l=Xn.dot(Sc),c=yi.dot(yi),u=yi.dot(Sc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Tc.setScalar(0),bc.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,i),Ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tc,s.x),o.addScaledVector(bc,s.y),o.addScaledVector(Ac,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),yi.subVectors(e,t),Xn.cross(yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),gs.subVectors(s,i),yc.subVectors(e,i);const l=_s.dot(yc),c=gs.dot(yc);if(l<=0&&c<=0)return t.copy(i);Mc.subVectors(e,r);const u=_s.dot(Mc),f=gs.dot(Mc);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_s,o);Ec.subVectors(e,s);const d=_s.dot(Ec),g=gs.dot(Ec);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(gs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Td.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Td,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(_s,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=GS(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wc(o,s,e+1/3),this.g=wc(o,s,e),this.b=wc(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=M_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return nt.fromWorkingColorSpace($t.copy(this),e),Math.round(Ke($t.r*255,0,255))*65536+Math.round(Ke($t.g*255,0,255))*256+Math.round(Ke($t.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Fn){nt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ba);const i=uc(Xi.h,ba.h,t),r=uc(Xi.s,ba.s,t),s=uc(Xi.l,ba.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new et;et.NAMES=M_;let ay=0;class kl extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Us,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cu&&(i.blendSrc=this.blendSrc),this.blendDst!==uu&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class E_ extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=a_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new J,Aa=new ct;let ly=0;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),e}}class T_ extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class b_ extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $r extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cy=0;const Un=new gt,Cc=new dn,vs=new J,yn=new is,fo=new is,kt=new J;class _r extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?b_:T_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $r(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(yn.min,fo.min),yn.expandByPoint(kt),kt.addVectors(yn.max,fo.max),yn.expandByPoint(kt)):(yn.expandByPoint(fo.min),yn.expandByPoint(fo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),kt.add(vs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new J,l[P]=new J;const c=new J,u=new J,f=new J,h=new ct,d=new ct,g=new ct,_=new J,m=new J;function p(P,x,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[P].add(_),a[x].add(_),a[M].add(_),l[P].add(m),l[x].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,x=A.length;P<x;++P){const M=A[P],I=M.start,U=M.count;for(let F=I,X=I+U;F<X;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new J,v=new J,y=new J,T=new J;function C(P){y.fromBufferAttribute(r,P),T.copy(y);const x=a[P];b.copy(x),b.sub(y.multiplyScalar(y.dot(x))).normalize(),v.crossVectors(T,x);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,I)}for(let P=0,x=A.length;P<x;++P){const M=A[P],I=M.start,U=M.count;for(let F=I,X=I+U;F<X;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _r,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new gt,Ar=new y_,wa=new aa,Ad=new J,Ca=new J,Ra=new J,Pa=new J,Rc=new J,Da=new J,wd=new J,La=new J;class jn extends dn{constructor(e=new _r,t=new E_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Rc.fromBufferAttribute(f,e),o?Da.addScaledVector(Rc,u):Da.addScaledVector(Rc.sub(t),u))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(wa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(wa,Ad)===null||Ar.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(bd.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(bd),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=A,y=b;v<y;v+=3){const T=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);r=Ia(this,p,e,i,c,u,f,T,C,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);r=Ia(this,o,e,i,c,u,f,A,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=A,y=b;v<y;v+=3){const T=v,C=v+1,P=v+2;r=Ia(this,p,e,i,c,u,f,T,C,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=m,b=m+1,v=m+2;r=Ia(this,o,e,i,c,u,f,A,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function uy(n,e,t,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;La.copy(a),La.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:n}}function Ia(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ca),n.getVertexPosition(l,Ra),n.getVertexPosition(c,Pa);const u=uy(n,e,t,i,Ca,Ra,Pa,wd);if(u){const f=new J;$n.getBarycoord(wd,Ca,Ra,Pa,f),r&&(u.uv=$n.getInterpolatedAttribute(r,a,l,c,f,new ct)),s&&(u.uv1=$n.getInterpolatedAttribute(s,a,l,c,f,new ct)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new J,materialIndex:0};$n.getNormal(Ca,Ra,Pa,h.normal),u.face=h,u.barycoord=f}return u}class la extends _r{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $r(c,3)),this.setAttribute("normal",new $r(u,3)),this.setAttribute("uv",new $r(f,2));function g(_,m,p,A,b,v,y,T,C,P,x){const M=v/C,I=y/P,U=v/2,F=y/2,X=T/2,$=C+1,B=P+1;let G=0,V=0;const pe=new J;for(let _e=0;_e<B;_e++){const Se=_e*I-F;for(let Re=0;Re<$;Re++){const Xe=Re*M-U;pe[_]=Xe*A,pe[m]=Se*b,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=T>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Re/C),f.push(1-_e/P),G+=1}}for(let _e=0;_e<P;_e++)for(let Se=0;Se<C;Se++){const Re=h+Se+$*_e,Xe=h+Se+$*(_e+1),Y=h+(Se+1)+$*(_e+1),fe=h+(Se+1)+$*_e;l.push(Re,Xe,fe),l.push(Xe,Y,fe),V+=6}a.addGroup(d,V,x),d+=V,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const r in i)e[r]=i[r]}return e}function fy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function A_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const hy={clone:Ws,merge:tn};var dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class w_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new J,Cd=new ct,Rd=new ct;class qn extends w_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yu*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Rd),t.subVectors(Rd,Cd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class my extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(xs,Ss,e,t);r.layers=this.layers,this.add(r);const s=new qn(xs,Ss,e,t);s.layers=this.layers,this.add(s);const o=new qn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new qn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const l=new qn(xs,Ss,e,t);l.layers=this.layers,this.add(l);const c=new qn(xs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class C_ extends ln{constructor(e=[],t=Vs,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _y extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new C_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:or});s.uniforms.tEquirect.value=t;const o=new jn(r,s),a=t.minFilter;return t.minFilter===Gr&&(t.minFilter=ai),new my(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ua extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vy extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xy extends ln{constructor(e=null,t=1,i=1,r,s,o,a,l,c=wn,u=wn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji extends kn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new gt,Pd=new gt,Na=[],Dd=new is,Sy=new gt,ho=new jn,po=new aa;class yy extends jn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),Dd.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Dd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new aa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),po.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ys),Pd.multiplyMatrices(i,ys),ho.matrixWorld=Pd,ho.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){const l=Na[o];l.instanceId=s,l.object=this,t.push(l)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new xy(new Float32Array(r*this.count),r,this.count,Bf,li));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dc=new J,My=new J,Ey=new $e;class Ur{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dc.subVectors(i,t).cross(My.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ey.getNormalMatrix(e),r=this.coplanarPoint(Dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new aa,Fa=new J;class R_{constructor(e=new Ur,t=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],A=r[13],b=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-d,v-p).normalize(),i[1].setComponents(l+s,h+c,m+d,v+p).normalize(),i[2].setComponents(l+o,h+u,m+g,v+A).normalize(),i[3].setComponents(l-o,h-u,m-g,v-A).normalize(),i[4].setComponents(l-a,h-f,m-_,v-b).normalize(),t===Pi)i[5].setComponents(l+a,h+f,m+_,v+b).normalize();else if(t===pl)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P_ extends ln{constructor(e,t,i=Qr,r,s,o,a=wn,l=wn,c,u=Go){if(u!==Go&&u!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zl extends _r{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let b=0;b<c;b++){const v=b*f-s;g.push(v,-A,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const b=A+c*p,v=A+c*(p+1),y=A+1+c*(p+1),T=A+1+c*p;d.push(b,v,T),d.push(v,y,T)}this.setIndex(d),this.setAttribute("position",new $r(g,3)),this.setAttribute("normal",new $r(_,3)),this.setAttribute("uv",new $r(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ty extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ay extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class D_ extends w_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wy extends Ay{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cy extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ld=new gt;class Ry{constructor(e,t,i=0,r=1/0){this.ray=new y_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(e,t=!0,i=[]){return ju(e,this,i,t),i.sort(Id),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ju(e[r],this,i,t);return i.sort(Id),i}}function Id(n,e){return n.distance-e.distance}function ju(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ju(s[o],e,t,!0)}}function Ud(n,e,t,i){const r=Py(i);switch(t){case h_:return n*e;case p_:return n*e;case m_:return n*e*2;case Bf:return n*e/r.components*r.byteLength;case kf:return n*e/r.components*r.byteLength;case __:return n*e*2/r.components*r.byteLength;case zf:return n*e*2/r.components*r.byteLength;case d_:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case Vf:return n*e*4/r.components*r.byteLength;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eu:case bu:return Math.max(n,16)*Math.max(e,8)/4;case Mu:case Tu:return Math.max(n,8)*Math.max(e,8)/2;case Au:case wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Du:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ku:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ja:case Gu:case Wu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case g_:case Xu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qu:case $u:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Py(n){switch(n){case Li:case c_:return{byteLength:1,components:1};case Vo:case u_:case sa:return{byteLength:2,components:1};case Ff:case Of:return{byteLength:2,components:4};case Qr:case Nf:case li:return{byteLength:4,components:1};case f_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dy(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
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
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
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
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
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
#endif`,qy=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tM=`#define PI 3.141592653589793
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
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iM=`vec3 transformedNormal = objectNormal;
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
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
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
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
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
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,PM=`struct PhysicalMaterial {
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
}`,DM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VM=`#if defined( USE_POINTS_UV )
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
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
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
}`,BE=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,qE=`uniform vec3 diffuse;
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
}`,$E=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,jE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,rT=`#define TOON
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
}`,sT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,uT=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Ly,alphahash_pars_fragment:Iy,alphamap_fragment:Uy,alphamap_pars_fragment:Ny,alphatest_fragment:Fy,alphatest_pars_fragment:Oy,aomap_fragment:By,aomap_pars_fragment:ky,batching_pars_vertex:zy,batching_vertex:Vy,begin_vertex:Hy,beginnormal_vertex:Gy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:qy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Ky,color_fragment:Zy,color_pars_fragment:Jy,color_pars_vertex:Qy,color_vertex:eM,common:tM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:aM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:_M,fog_fragment:gM,fog_pars_fragment:vM,gradientmap_pars_fragment:xM,lightmap_pars_fragment:SM,lights_lambert_fragment:yM,lights_lambert_pars_fragment:MM,lights_pars_begin:EM,lights_toon_fragment:bM,lights_toon_pars_fragment:AM,lights_phong_fragment:wM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:PM,lights_fragment_begin:DM,lights_fragment_maps:LM,lights_fragment_end:IM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:OM,map_fragment:BM,map_pars_fragment:kM,map_particle_fragment:zM,map_particle_pars_fragment:VM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:GM,morphinstance_vertex:WM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:$M,morphtarget_vertex:YM,normal_fragment_begin:jM,normal_fragment_maps:KM,normal_pars_fragment:ZM,normal_pars_vertex:JM,normal_vertex:QM,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:aE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:_E,skinbase_vertex:gE,skinning_pars_vertex:vE,skinning_vertex:xE,skinnormal_vertex:SE,specularmap_fragment:yE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:bE,transmission_pars_fragment:AE,uv_pars_fragment:wE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:PE,background_vert:DE,background_frag:LE,backgroundCube_vert:IE,backgroundCube_frag:UE,cube_vert:NE,cube_frag:FE,depth_vert:OE,depth_frag:BE,distanceRGBA_vert:kE,distanceRGBA_frag:zE,equirect_vert:VE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:WE,meshbasic_vert:XE,meshbasic_frag:qE,meshlambert_vert:$E,meshlambert_frag:YE,meshmatcap_vert:jE,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:eT,meshphysical_vert:tT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:aT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ri={basic:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:tn([Me.points,Me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:tn([Me.common,Me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:tn([Me.sprite,Me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:tn([Me.common,Me.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:tn([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Oa={r:0,b:0,g:0},Cr=new Ii,fT=new gt;function hT(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Bl)?(u===void 0&&(u=new jn(new la(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ws(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cr.copy(v.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Cr)),u.material.toneMapped=nt.getTransfer(y.colorSpace)!==lt,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jn(new zl(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ws(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(Oa,A_(n)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,v,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:A}}function dT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,I,U,F,X){let $=!1;const B=f(F,U,I);s!==B&&(s=B,c(s.object)),$=d(M,F,U,X),$&&g(M,F,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,I,U,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,I,U){const F=U.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let $=X[I.id];$===void 0&&($={},X[I.id]=$);let B=$[F];return B===void 0&&(B=h(l()),$[F]=B),B}function h(M){const I=[],U=[],F=[];for(let X=0;X<t;X++)I[X]=0,U[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,I,U,F){const X=s.attributes,$=I.attributes;let B=0;const G=U.getAttributes();for(const V in G)if(G[V].location>=0){const _e=X[V];let Se=$[V];if(Se===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;B++}return s.attributesNum!==B||s.index!==F}function g(M,I,U,F){const X={},$=I.attributes;let B=0;const G=U.getAttributes();for(const V in G)if(G[V].location>=0){let _e=$[V];_e===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),X[V]=Se,B++}s.attributes=X,s.attributesNum=B,s.index=F}function _(){const M=s.newAttributes;for(let I=0,U=M.length;I<U;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const U=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;U[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),X[M]!==I&&(n.vertexAttribDivisor(M,I),X[M]=I)}function A(){const M=s.newAttributes,I=s.enabledAttributes;for(let U=0,F=I.length;U<F;U++)I[U]!==M[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function b(M,I,U,F,X,$,B){B===!0?n.vertexAttribIPointer(M,I,U,X,$):n.vertexAttribPointer(M,I,U,F,X,$)}function v(M,I,U,F){_();const X=F.attributes,$=U.getAttributes(),B=I.defaultAttributeValues;for(const G in $){const V=$[G];if(V.location>=0){let pe=X[G];if(pe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const _e=pe.normalized,Se=pe.itemSize,Re=e.get(pe);if(Re===void 0)continue;const Xe=Re.buffer,Y=Re.type,fe=Re.bytesPerElement,ve=Y===n.INT||Y===n.UNSIGNED_INT||pe.gpuType===Nf;if(pe.isInterleavedBufferAttribute){const O=pe.data,oe=O.stride,le=pe.offset;if(O.isInstancedInterleavedBuffer){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,O.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ae=0;ae<V.locationSize;ae++)b(V.location+ae,Se/V.locationSize,Y,_e,oe*fe,(le+Se/V.locationSize*ae)*fe,ve)}else{if(pe.isInstancedBufferAttribute){for(let O=0;O<V.locationSize;O++)p(V.location+O,pe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let O=0;O<V.locationSize;O++)m(V.location+O);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let O=0;O<V.locationSize;O++)b(V.location+O,Se/V.locationSize,Y,_e,Se*fe,Se/V.locationSize*O*fe,ve)}}else if(B!==void 0){const _e=B[G];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(V.location,_e);break;case 3:n.vertexAttrib3fv(V.location,_e);break;case 4:n.vertexAttrib4fv(V.location,_e);break;default:n.vertexAttrib1fv(V.location,_e)}}}}A()}function y(){P();for(const M in i){const I=i[M];for(const U in I){const F=I[U];for(const X in F)u(F[X].object),delete F[X];delete I[U]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const U in I){const F=I[U];for(const X in F)u(F[X].object),delete F[X];delete I[U]}delete i[M.id]}function C(M){for(const I in i){const U=i[I];if(U[M.id]===void 0)continue;const F=U[M.id];for(const X in F)u(F[X].object),delete F[X];delete U[M.id]}}function P(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function pT(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Li&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:y,maxSamples:T}}function _T(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ur,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,b=A*4;let v=p.clippingState||null;l.value=v,v=u(g,h,b,d);for(let y=0;y!==b;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gT(n){let e=new WeakMap;function t(o,a){return a===vu?o.mapping=Vs:a===xu&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vu||a===xu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _y(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const As=4,Nd=[.125,.215,.35,.446,.526,.582],zr=20,Lc=new D_,Fd=new et;let Ic=null,Uc=0,Nc=0,Fc=!1;const Nr=(1+Math.sqrt(5))/2,Ms=1/Nr,Od=[new J(-Nr,Ms,0),new J(Nr,Ms,0),new J(-Ms,0,Nr),new J(Ms,0,Nr),new J(0,Nr,-Ms),new J(0,Nr,Ms),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],vT=new J;class Bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=vT}=s;Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Uc,Nc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:sa,format:Yn,colorSpace:Gs,depthBuffer:!1},r=kd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(s)),this._blurMaterial=ST(s,e,t)}return r}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,i,r,s){const l=new qn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Fd),f.toneMapping=ar,f.autoClear=!1;const g=new E_({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new jn(new la,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Fd),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const v=this._cubeSize;Ba(r,b*v,A>2?v:0,v,v),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ba(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Od[(r-s-1)%Od.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new jn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const p=[];let A=0;for(let C=0;C<zr;++C){const P=C/_,x=Math.exp(-P*P/2);p.push(x),C===0?A+=x:C<m&&(A+=2*x)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const v=this._sizeLods[r],y=3*v*(r>b-As?r-b+As:0),T=4*(this._cubeSize-v);Ba(t,y,T,3*v,2*v),l.setRenderTarget(t),l.render(f,Lc)}}function xT(n){const e=[],t=[],i=[];let r=n;const s=n-As+1+Nd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-As?l=Nd[o-n+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,P=T>2?0:-1,x=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];A.set(x,_*g*T),b.set(h,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const y=new _r;y.setAttribute("position",new kn(A,_)),y.setAttribute("uv",new kn(b,m)),y.setAttribute("faceIndex",new kn(v,p)),e.push(y),r>As&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kd(n,e,t){const i=new es(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ST(n,e,t){const i=new Float32Array(zr),r=new J(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function zd(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Vd(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function yT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vu||l===xu,u=l===Vs||l===Hs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Bd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Bd(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ka("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ET(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const A=d.array;_=d.version;for(let b=0,v=A.length;b<v;b+=3){const y=A[b+0],T=A[b+1],C=A[b+2];h.push(y,T,T,C,C,y)}}else if(g!==void 0){const A=g.array;_=g.version;for(let b=0,v=A.length/3-1;b<v;b+=3){const y=b+0,T=b+1,C=b+2;h.push(y,T,T,C,C,y)}}else return;const m=new(x_(h)?b_:T_)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TT(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*_[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AT(n,e,t){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*T*4*f),P=new S_(C,y,T,f);P.type=li,P.needsUpdate=!0;const x=v*4;for(let I=0;I<f;I++){const U=p[I],F=A[I],X=b[I],$=y*T*4*I;for(let B=0;B<U.count;B++){const G=B*x;g===!0&&(r.fromBufferAttribute(U,B),C[$+G+0]=r.x,C[$+G+1]=r.y,C[$+G+2]=r.z,C[$+G+3]=0),_===!0&&(r.fromBufferAttribute(F,B),C[$+G+4]=r.x,C[$+G+5]=r.y,C[$+G+6]=r.z,C[$+G+7]=0),m===!0&&(r.fromBufferAttribute(X,B),C[$+G+8]=r.x,C[$+G+9]=r.y,C[$+G+10]=r.z,C[$+G+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ct(y,T)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function wT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const I_=new ln,Hd=new P_(1,1),U_=new S_,N_=new QS,F_=new C_,Gd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),$d=new Float32Array(4);function io(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gd[r];if(s===void 0&&(s=new Float32Array(r),Gd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vl(n,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function LT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;$d.set(i),n.uniformMatrix2fv(this.addr,!1,$d),Bt(t,i)}}function IT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;qd.set(i),n.uniformMatrix3fv(this.addr,!1,qd),Bt(t,i)}}function UT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Xd.set(i),n.uniformMatrix4fv(this.addr,!1,Xd),Bt(t,i)}}function NT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function OT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function kT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function GT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hd.compareFunction=v_,s=Hd):s=I_,t.setTexture2D(e||s,r)}function WT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||N_,r)}function XT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||F_,r)}function qT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||U_,r)}function $T(n){switch(n){case 5126:return CT;case 35664:return RT;case 35665:return PT;case 35666:return DT;case 35674:return LT;case 35675:return IT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return FT;case 35668:case 35672:return OT;case 35669:case 35673:return BT;case 5125:return kT;case 36294:return zT;case 36295:return VT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return qT}}function YT(n,e){n.uniform1fv(this.addr,e)}function jT(n,e){const t=io(e,this.size,2);n.uniform2fv(this.addr,t)}function KT(n,e){const t=io(e,this.size,3);n.uniform3fv(this.addr,t)}function ZT(n,e){const t=io(e,this.size,4);n.uniform4fv(this.addr,t)}function JT(n,e){const t=io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QT(n,e){const t=io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eb(n,e){const t=io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tb(n,e){n.uniform1iv(this.addr,e)}function nb(n,e){n.uniform2iv(this.addr,e)}function ib(n,e){n.uniform3iv(this.addr,e)}function rb(n,e){n.uniform4iv(this.addr,e)}function sb(n,e){n.uniform1uiv(this.addr,e)}function ob(n,e){n.uniform2uiv(this.addr,e)}function ab(n,e){n.uniform3uiv(this.addr,e)}function lb(n,e){n.uniform4uiv(this.addr,e)}function cb(n,e,t){const i=this.cache,r=e.length,s=Vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||I_,s[o])}function ub(n,e,t){const i=this.cache,r=e.length,s=Vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||N_,s[o])}function fb(n,e,t){const i=this.cache,r=e.length,s=Vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||F_,s[o])}function hb(n,e,t){const i=this.cache,r=e.length,s=Vl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||U_,s[o])}function db(n){switch(n){case 5126:return YT;case 35664:return jT;case 35665:return KT;case 35666:return ZT;case 35674:return JT;case 35675:return QT;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}class pb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$T(t.type)}}class mb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=db(t.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function Yd(n,e){n.seq.push(e),n.map[e.id]=e}function gb(n,e,t){const i=n.name,r=i.length;for(Oc.lastIndex=0;;){const s=Oc.exec(i),o=Oc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yd(t,c===void 0?new pb(a,n,e):new mb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new _b(a),Yd(t,f)),t=f}}}class Za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function jd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vb=37297;let xb=0;function Sb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Kd=new $e;function yb(n){nt._getMatrix(Kd,nt.workingColorSpace,n);const e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case dl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sb(n.getShaderSource(e),o)}else return r}function Mb(n,e){const t=yb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Eb(n,e){let t;switch(e){case TS:t="Linear";break;case bS:t="Reinhard";break;case AS:t="Cineon";break;case wS:t="ACESFilmic";break;case RS:t="AgX";break;case PS:t="Neutral";break;case CS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new J;function Tb(){nt.getLuminanceCoefficients(ka);const n=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Ab(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function vo(n){return n!==""}function Jd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(n){return n.replace(Cb,Pb)}const Rb=new Map;function Pb(n,e){let t=Ye[e];if(t===void 0){const i=Rb.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ku(t)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(n){return n.replace(Db,Lb)}function Lb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ib(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===o_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ub(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Fb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case a_:e="ENVMAP_BLENDING_MULTIPLY";break;case MS:e="ENVMAP_BLENDING_MIX";break;case ES:e="ENVMAP_BLENDING_ADD";break}return e}function Ob(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Bb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ib(t),c=Ub(t),u=Nb(t),f=Fb(t),h=Ob(t),d=bb(t),g=Ab(s),_=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ar?Eb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Mb("linearToOutputTexel",t.outputColorSpace),Tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),o=Ku(o),o=Jd(o,t),o=Qd(o,t),a=Ku(a),a=Jd(a,t),a=Qd(a,t),o=ep(o),a=ep(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=A+m+o,v=A+p+a,y=jd(r,r.VERTEX_SHADER,b),T=jd(r,r.FRAGMENT_SHADER,v);r.attachShader(_,y),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(y).trim(),X=r.getShaderInfoLog(T).trim();let $=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,T);else{const G=Zd(r,y,"vertex"),V=Zd(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+G+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||X==="")&&(B=!1);B&&(I.diagnostics={runnable:$,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(y),r.deleteShader(T),P=new Za(r,_),x=wb(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,vb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let kb=0;class zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vb(e),t.set(e,i)),i}}class Vb{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}}function Hb(n,e,t,i,r,s,o){const a=new Gf,l=new zb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,I,U,F){const X=U.fog,$=F.geometry,B=x.isMeshStandardMaterial?U.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),V=G&&G.mapping===Bl?G.image.height:null,pe=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=_e!==void 0?_e.length:0;let Re=0;$.morphAttributes.position!==void 0&&(Re=1),$.morphAttributes.normal!==void 0&&(Re=2),$.morphAttributes.color!==void 0&&(Re=3);let Xe,Y,fe,ve;if(pe){const at=ri[pe];Xe=at.vertexShader,Y=at.fragmentShader}else Xe=x.vertexShader,Y=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),ve=l.getFragmentShaderID(x);const O=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),le=F.isInstancedMesh===!0,ae=F.isBatchedMesh===!0,De=!!x.map,D=!!x.matcap,L=!!G,E=!!x.aoMap,se=!!x.lightMap,ee=!!x.bumpMap,j=!!x.normalMap,ie=!!x.displacementMap,ue=!!x.emissiveMap,te=!!x.metalnessMap,w=!!x.roughnessMap,S=x.anisotropy>0,N=x.clearcoat>0,W=x.dispersion>0,K=x.iridescence>0,q=x.sheen>0,ge=x.transmission>0,he=S&&!!x.anisotropyMap,xe=N&&!!x.clearcoatMap,Be=N&&!!x.clearcoatNormalMap,de=N&&!!x.clearcoatRoughnessMap,Ee=K&&!!x.iridescenceMap,Le=K&&!!x.iridescenceThicknessMap,ke=q&&!!x.sheenColorMap,ye=q&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,We=!!x.specularColorMap,dt=!!x.specularIntensityMap,k=ge&&!!x.transmissionMap,be=ge&&!!x.thicknessMap,re=!!x.gradientMap,ce=!!x.alphaMap,we=x.alphaTest>0,Ae=!!x.alphaHash,qe=!!x.extensions;let Mt=ar;x.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const Xt={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:Y,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ae,batchingColor:ae&&F._colorsTexture!==null,instancing:le,instancingColor:le&&F.instanceColor!==null,instancingMorph:le&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Gs,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:D,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:V,aoMap:E,lightMap:se,bumpMap:ee,normalMap:j,displacementMap:h&&ie,emissiveMap:ue,normalMapObjectSpace:j&&x.normalMapType===NS,normalMapTangentSpace:j&&x.normalMapType===US,metalnessMap:te,roughnessMap:w,anisotropy:S,anisotropyMap:he,clearcoat:N,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:de,dispersion:W,iridescence:K,iridescenceMap:Ee,iridescenceThicknessMap:Le,sheen:q,sheenColorMap:ke,sheenRoughnessMap:ye,specularMap:Ve,specularColorMap:We,specularIntensityMap:dt,transmission:ge,transmissionMap:k,thicknessMap:be,gradientMap:re,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:we,alphaHash:Ae,combine:x.combine,mapUv:De&&_(x.map.channel),aoMapUv:E&&_(x.aoMap.channel),lightMapUv:se&&_(x.lightMap.channel),bumpMapUv:ee&&_(x.bumpMap.channel),normalMapUv:j&&_(x.normalMap.channel),displacementMapUv:ie&&_(x.displacementMap.channel),emissiveMapUv:ue&&_(x.emissiveMap.channel),metalnessMapUv:te&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:he&&_(x.anisotropyMap.channel),clearcoatMapUv:xe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(x.sheenRoughnessMap.channel),specularMapUv:Ve&&_(x.specularMap.channel),specularColorMapUv:We&&_(x.specularColorMap.channel),specularIntensityMapUv:dt&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:be&&_(x.thicknessMap.channel),alphaMapUv:ce&&_(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(j||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(De||ce),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:oe,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:ue&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(A(M,x),b(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function A(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let I;if(M){const U=ri[M];I=hy.clone(U.uniforms)}else I=x.uniforms;return I}function y(x,M){let I;for(let U=0,F=u.length;U<F;U++){const X=u[U];if(X.cacheKey===M){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Bb(n,M,x,s),u.push(I)),I}function T(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:P}}function Gb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Wb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ip(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Wb),i.length>1&&i.sort(h||np),r.length>1&&r.sort(h||np)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Xb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ip,n.set(i,[o])):r>=s.length?(o=new ip,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new et};break;case"SpotLight":t={position:new J,direction:new J,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function $b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yb=0;function jb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Kb(n){const e=new qb,t=$b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new gt,o=new gt;function a(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,A=0,b=0,v=0,y=0,T=0,C=0;c.sort(jb);for(let x=0,M=c.length;x<M;x++){const I=c[x],U=I.color,F=I.intensity,X=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*F,f+=U.g*F,h+=U.b*F;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],F);C++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,V=t.get(I);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=I.shadow.matrix,A++}i.directional[d]=B,d++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(U).multiplyScalar(F),B.distance=X,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[_]=B;const G=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,G.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=G.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=$,v++}_++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(U).multiplyScalar(F),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=B,m++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const G=I.shadow,V=t.get(I);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=B,g++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(F),B.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==A||P.numPointShadows!==b||P.numSpotShadows!==v||P.numSpotMaps!==y||P.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=A,P.numPointShadows=b,P.numSpotShadows=v,P.numSpotMaps=y,P.numLightProbes=C,i.version=Yb++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const b=c[p];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(b.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function rp(n){const e=new Kb(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Zb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rp(n),e.set(r,[a])):s>=o.length?(a=new rp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
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
}`;function eA(n,e,t){let i=new R_;const r=new ct,s=new ct,o=new Ct,a=new Ty({depthPacking:IS}),l=new by,c={},u=t.maxTextureSize,f={[fr]:hn,[hn]:fr,[si]:si},h=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Jb,fragmentShader:Qb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new _r;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o_;let p=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(or),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==Ti&&this.type===Ti,X=p===Ti&&this.type!==Ti;for(let $=0,B=T.length;$<B;$++){const G=T[$],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();if(r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y)),V.map===null||F===!0||X===!0){const Se=this.type!==Ti?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new es(r.x,r.y,Se),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const _e=V.getViewportCount();for(let Se=0;Se<_e;Se++){const Re=V.getViewport(Se);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),U.viewport(o),V.updateMatrices(G,Se),i=V.getFrustum(),v(C,P,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===Ti&&A(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,M,I)};function A(T,C){const P=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,P,d,_,null)}function b(T,C,P,x){let M=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=M.uuid,F=C.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let $=X[F];$===void 0&&($=M.clone(),X[F]=$,C.addEventListener("dispose",y)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,x===Ti?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=P}return M}function v(T,C,P,x,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=e.update(T),X=T.material;if(Array.isArray(X)){const $=F.groups;for(let B=0,G=$.length;B<G;B++){const V=$[B],pe=X[V.materialIndex];if(pe&&pe.visible){const _e=b(T,pe,x,M);T.onBeforeShadow(n,T,C,P,F,_e,V),n.renderBufferDirect(P,null,F,_e,T,V),T.onAfterShadow(n,T,C,P,F,_e,V)}}}else if(X.visible){const $=b(T,X,x,M);T.onBeforeShadow(n,T,C,P,F,$,null),n.renderBufferDirect(P,null,F,$,T,null),T.onAfterShadow(n,T,C,P,F,$,null)}}const U=T.children;for(let F=0,X=U.length;F<X;F++)v(U[F],C,P,x,M)}function y(T){T.target.removeEventListener("dispose",y);for(const P in c){const x=c[P],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const tA={[fu]:hu,[du]:_u,[pu]:gu,[zs]:mu,[hu]:fu,[_u]:du,[gu]:pu,[mu]:zs};function nA(n,e){function t(){let k=!1;const be=new Ct;let re=null;const ce=new Ct(0,0,0,0);return{setMask:function(we){re!==we&&!k&&(n.colorMask(we,we,we,we),re=we)},setLocked:function(we){k=we},setClear:function(we,Ae,qe,Mt,Xt){Xt===!0&&(we*=Mt,Ae*=Mt,qe*=Mt),be.set(we,Ae,qe,Mt),ce.equals(be)===!1&&(n.clearColor(we,Ae,qe,Mt),ce.copy(be))},reset:function(){k=!1,re=null,ce.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,re=null,ce=null,we=null;return{setReversed:function(Ae){if(be!==Ae){const qe=e.get("EXT_clip_control");Ae?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),be=Ae;const Mt=we;we=null,this.setClear(Mt)}},getReversed:function(){return be},setTest:function(Ae){Ae?O(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(Ae){re!==Ae&&!k&&(n.depthMask(Ae),re=Ae)},setFunc:function(Ae){if(be&&(Ae=tA[Ae]),ce!==Ae){switch(Ae){case fu:n.depthFunc(n.NEVER);break;case hu:n.depthFunc(n.ALWAYS);break;case du:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case pu:n.depthFunc(n.EQUAL);break;case mu:n.depthFunc(n.GEQUAL);break;case _u:n.depthFunc(n.GREATER);break;case gu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){we!==Ae&&(be&&(Ae=1-Ae),n.clearDepth(Ae),we=Ae)},reset:function(){k=!1,re=null,ce=null,we=null,be=!1}}}function r(){let k=!1,be=null,re=null,ce=null,we=null,Ae=null,qe=null,Mt=null,Xt=null;return{setTest:function(at){k||(at?O(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(at){be!==at&&!k&&(n.stencilMask(at),be=at)},setFunc:function(at,Vn,mi){(re!==at||ce!==Vn||we!==mi)&&(n.stencilFunc(at,Vn,mi),re=at,ce=Vn,we=mi)},setOp:function(at,Vn,mi){(Ae!==at||qe!==Vn||Mt!==mi)&&(n.stencilOp(at,Vn,mi),Ae=at,qe=Vn,Mt=mi)},setLocked:function(at){k=at},setClear:function(at){Xt!==at&&(n.clearStencil(at),Xt=at)},reset:function(){k=!1,be=null,re=null,ce=null,we=null,Ae=null,qe=null,Mt=null,Xt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,b=null,v=null,y=null,T=null,C=new et(0,0,0),P=0,x=!1,M=null,I=null,U=null,F=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=G>=2);let pe=null,_e={};const Se=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Xe=new Ct().fromArray(Se),Y=new Ct().fromArray(Re);function fe(k,be,re,ce){const we=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(k,Ae),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<re;qe++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(be+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ae}const ve={};ve[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(n.DEPTH_TEST),o.setFunc(zs),ee(!1),j(sd),O(n.CULL_FACE),E(or);function O(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function oe(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function le(k,be){return f[k]!==be?(n.bindFramebuffer(k,be),f[k]=be,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function ae(k,be){let re=d,ce=!1;if(k){re=h.get(be),re===void 0&&(re=[],h.set(be,re));const we=k.textures;if(re.length!==we.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,qe=we.length;Ae<qe;Ae++)re[Ae]=n.COLOR_ATTACHMENT0+Ae;re.length=we.length,ce=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ce=!0);ce&&n.drawBuffers(re)}function De(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const D={[kr]:n.FUNC_ADD,[sS]:n.FUNC_SUBTRACT,[oS]:n.FUNC_REVERSE_SUBTRACT};D[aS]=n.MIN,D[lS]=n.MAX;const L={[cS]:n.ZERO,[uS]:n.ONE,[fS]:n.SRC_COLOR,[cu]:n.SRC_ALPHA,[gS]:n.SRC_ALPHA_SATURATE,[mS]:n.DST_COLOR,[dS]:n.DST_ALPHA,[hS]:n.ONE_MINUS_SRC_COLOR,[uu]:n.ONE_MINUS_SRC_ALPHA,[_S]:n.ONE_MINUS_DST_COLOR,[pS]:n.ONE_MINUS_DST_ALPHA,[vS]:n.CONSTANT_COLOR,[xS]:n.ONE_MINUS_CONSTANT_COLOR,[SS]:n.CONSTANT_ALPHA,[yS]:n.ONE_MINUS_CONSTANT_ALPHA};function E(k,be,re,ce,we,Ae,qe,Mt,Xt,at){if(k===or){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(O(n.BLEND),_=!0),k!==rS){if(k!==m||at!==x){if((p!==kr||v!==kr)&&(n.blendEquation(n.FUNC_ADD),p=kr,v=kr),at)switch(k){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case od:n.blendFunc(n.ONE,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case od:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,b=null,y=null,T=null,C.set(0,0,0),P=0,m=k,x=at}return}we=we||be,Ae=Ae||re,qe=qe||ce,(be!==p||we!==v)&&(n.blendEquationSeparate(D[be],D[we]),p=be,v=we),(re!==A||ce!==b||Ae!==y||qe!==T)&&(n.blendFuncSeparate(L[re],L[ce],L[Ae],L[qe]),A=re,b=ce,y=Ae,T=qe),(Mt.equals(C)===!1||Xt!==P)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Xt),C.copy(Mt),P=Xt),m=k,x=!1}function se(k,be){k.side===si?oe(n.CULL_FACE):O(n.CULL_FACE);let re=k.side===hn;be&&(re=!re),ee(re),k.blending===Us&&k.transparent===!1?E(or):E(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ce=k.stencilWrite;a.setTest(ce),ce&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function j(k){k!==tS?(O(n.CULL_FACE),k!==I&&(k===sd?n.cullFace(n.BACK):k===nS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),I=k}function ie(k){k!==U&&(B&&n.lineWidth(k),U=k)}function ue(k,be,re){k?(O(n.POLYGON_OFFSET_FILL),(F!==be||X!==re)&&(n.polygonOffset(be,re),F=be,X=re)):oe(n.POLYGON_OFFSET_FILL)}function te(k){k?O(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function w(k){k===void 0&&(k=n.TEXTURE0+$-1),pe!==k&&(n.activeTexture(k),pe=k)}function S(k,be,re){re===void 0&&(pe===null?re=n.TEXTURE0+$-1:re=pe);let ce=_e[re];ce===void 0&&(ce={type:void 0,texture:void 0},_e[re]=ce),(ce.type!==k||ce.texture!==be)&&(pe!==re&&(n.activeTexture(re),pe=re),n.bindTexture(k,be||ve[k]),ce.type=k,ce.texture=be)}function N(){const k=_e[pe];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function W(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(k){Xe.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Xe.copy(k))}function ye(k){Y.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function Ve(k,be){let re=c.get(be);re===void 0&&(re=new WeakMap,c.set(be,re));let ce=re.get(k);ce===void 0&&(ce=n.getUniformBlockIndex(be,k.name),re.set(k,ce))}function We(k,be){const ce=c.get(be).get(k);l.get(be)!==ce&&(n.uniformBlockBinding(be,ce,k.__bindingPointIndex),l.set(be,ce))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,_e={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,b=null,v=null,y=null,T=null,C=new et(0,0,0),P=0,x=!1,M=null,I=null,U=null,F=null,X=null,Xe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:oe,bindFramebuffer:le,drawBuffers:ae,useProgram:De,setBlending:E,setMaterial:se,setFlipSided:ee,setCullFace:j,setLineWidth:ie,setPolygonOffset:ue,setScissorTest:te,activeTexture:w,bindTexture:S,unbindTexture:N,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:Ee,texImage3D:Le,updateUBOMapping:Ve,uniformBlockBinding:We,texStorage2D:Be,texStorage3D:de,texSubImage2D:q,texSubImage3D:ge,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:ke,viewport:ye,reset:dt}}function iA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return d?new OffscreenCanvas(w,S):ml("canvas")}function _(w,S,N){let W=1;const K=te(w);if((K.width>N||K.height>N)&&(W=N/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(W*K.width),ge=Math.floor(W*K.height);f===void 0&&(f=g(q,ge));const he=S?g(q,ge):f;return he.width=q,he.height=ge,he.getContext("2d").drawImage(w,0,0,q,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+ge+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,S,N,W,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=S;if(S===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8)),S===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),S===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8)),S===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),S===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGB8UI),N===n.UNSIGNED_SHORT&&(q=n.RGB16UI),N===n.UNSIGNED_INT&&(q=n.RGB32UI),N===n.BYTE&&(q=n.RGB8I),N===n.SHORT&&(q=n.RGB16I),N===n.INT&&(q=n.RGB32I)),S===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),N===n.UNSIGNED_INT&&(q=n.RGBA32UI),N===n.BYTE&&(q=n.RGBA8I),N===n.SHORT&&(q=n.RGBA16I),N===n.INT&&(q=n.RGBA32I)),S===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),S===n.RGBA){const ge=K?dl:nt.getTransfer(W);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=ge===lt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(w,S){let N;return w?S===null||S===Qr||S===Ho?N=n.DEPTH24_STENCIL8:S===li?N=n.DEPTH32F_STENCIL8:S===Vo&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qr||S===Ho?N=n.DEPTH_COMPONENT24:S===li?N=n.DEPTH_COMPONENT32F:S===Vo&&(N=n.DEPTH_COMPONENT16),N}function y(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==ai?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){const S=w.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&u.delete(S)}function C(w){const S=w.target;S.removeEventListener("dispose",C),M(S)}function P(w){const S=i.get(w);if(S.__webglInit===void 0)return;const N=w.source,W=h.get(N);if(W){const K=W[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(w),Object.keys(W).length===0&&h.delete(N)}i.remove(w)}function x(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const N=w.source,W=h.get(N);delete W[S.__cacheKey],o.memory.textures--}function M(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let K=0;K<S.__webglFramebuffer[W].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[W][K]);else n.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)n.deleteFramebuffer(S.__webglFramebuffer[W]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=w.textures;for(let W=0,K=N.length;W<K;W++){const q=i.get(N[W]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(N[W])}i.remove(w)}let I=0;function U(){I=0}function F(){const w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function $(w,S){const N=i.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,w,S);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+S)}function B(w,S){const N=i.get(w);if(w.version>0&&N.__version!==w.version){Y(N,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+S)}function G(w,S){const N=i.get(w);if(w.version>0&&N.__version!==w.version){Y(N,w,S);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+S)}function V(w,S){const N=i.get(w);if(w.version>0&&N.__version!==w.version){fe(N,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+S)}const pe={[Su]:n.REPEAT,[Hr]:n.CLAMP_TO_EDGE,[yu]:n.MIRRORED_REPEAT},_e={[wn]:n.NEAREST,[DS]:n.NEAREST_MIPMAP_NEAREST,[ga]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[lc]:n.LINEAR_MIPMAP_NEAREST,[Gr]:n.LINEAR_MIPMAP_LINEAR},Se={[FS]:n.NEVER,[HS]:n.ALWAYS,[OS]:n.LESS,[v_]:n.LEQUAL,[BS]:n.EQUAL,[VS]:n.GEQUAL,[kS]:n.GREATER,[zS]:n.NOTEQUAL};function Re(w,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ai||S.magFilter===lc||S.magFilter===ga||S.magFilter===Gr||S.minFilter===ai||S.minFilter===lc||S.minFilter===ga||S.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,pe[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,pe[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,pe[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,_e[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==ga&&S.minFilter!==Gr||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(w,S){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));const W=S.source;let K=h.get(W);K===void 0&&(K={},h.set(W,K));const q=X(S);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[q].usedTimes++;const ge=K[w.__cacheKey];ge!==void 0&&(K[w.__cacheKey].usedTimes--,ge.usedTimes===0&&x(S)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return N}function Y(w,S,N){let W=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=n.TEXTURE_3D);const K=Xe(w,S),q=S.source;t.bindTexture(W,w.__webglTexture,n.TEXTURE0+N);const ge=i.get(q);if(q.version!==ge.__version||K===!0){t.activeTexture(n.TEXTURE0+N);const he=nt.getPrimaries(nt.workingColorSpace),xe=S.colorSpace===er?null:nt.getPrimaries(S.colorSpace),Be=S.colorSpace===er||he===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let de=_(S.image,!1,r.maxTextureSize);de=ue(S,de);const Ee=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let ke=b(S.internalFormat,Ee,Le,S.colorSpace,S.isVideoTexture);Re(W,S);let ye;const Ve=S.mipmaps,We=S.isVideoTexture!==!0,dt=ge.__version===void 0||K===!0,k=q.dataReady,be=y(S,de);if(S.isDepthTexture)ke=v(S.format===Wo,S.type),dt&&(We?t.texStorage2D(n.TEXTURE_2D,1,ke,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,ke,de.width,de.height,0,Ee,Le,null));else if(S.isDataTexture)if(Ve.length>0){We&&dt&&t.texStorage2D(n.TEXTURE_2D,be,ke,Ve[0].width,Ve[0].height);for(let re=0,ce=Ve.length;re<ce;re++)ye=Ve[re],We?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Ee,Le,ye.data):t.texImage2D(n.TEXTURE_2D,re,ke,ye.width,ye.height,0,Ee,Le,ye.data);S.generateMipmaps=!1}else We?(dt&&t.texStorage2D(n.TEXTURE_2D,be,ke,de.width,de.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Ee,Le,de.data)):t.texImage2D(n.TEXTURE_2D,0,ke,de.width,de.height,0,Ee,Le,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ke,Ve[0].width,Ve[0].height,de.depth);for(let re=0,ce=Ve.length;re<ce;re++)if(ye=Ve[re],S.format!==Yn)if(Ee!==null)if(We){if(k)if(S.layerUpdates.size>0){const we=Ud(ye.width,ye.height,S.format,S.type);for(const Ae of S.layerUpdates){const qe=ye.data.subarray(Ae*we/ye.data.BYTES_PER_ELEMENT,(Ae+1)*we/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ae,ye.width,ye.height,1,Ee,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,de.depth,Ee,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,ke,ye.width,ye.height,de.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,de.depth,Ee,Le,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,ke,ye.width,ye.height,de.depth,0,Ee,Le,ye.data)}else{We&&dt&&t.texStorage2D(n.TEXTURE_2D,be,ke,Ve[0].width,Ve[0].height);for(let re=0,ce=Ve.length;re<ce;re++)ye=Ve[re],S.format!==Yn?Ee!==null?We?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Ee,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,re,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Ee,Le,ye.data):t.texImage2D(n.TEXTURE_2D,re,ke,ye.width,ye.height,0,Ee,Le,ye.data)}else if(S.isDataArrayTexture)if(We){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ke,de.width,de.height,de.depth),k)if(S.layerUpdates.size>0){const re=Ud(de.width,de.height,S.format,S.type);for(const ce of S.layerUpdates){const we=de.data.subarray(ce*re/de.data.BYTES_PER_ELEMENT,(ce+1)*re/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,de.width,de.height,1,Ee,Le,we)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,Le,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,de.width,de.height,de.depth,0,Ee,Le,de.data);else if(S.isData3DTexture)We?(dt&&t.texStorage3D(n.TEXTURE_3D,be,ke,de.width,de.height,de.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,Le,de.data)):t.texImage3D(n.TEXTURE_3D,0,ke,de.width,de.height,de.depth,0,Ee,Le,de.data);else if(S.isFramebufferTexture){if(dt)if(We)t.texStorage2D(n.TEXTURE_2D,be,ke,de.width,de.height);else{let re=de.width,ce=de.height;for(let we=0;we<be;we++)t.texImage2D(n.TEXTURE_2D,we,ke,re,ce,0,Ee,Le,null),re>>=1,ce>>=1}}else if(Ve.length>0){if(We&&dt){const re=te(Ve[0]);t.texStorage2D(n.TEXTURE_2D,be,ke,re.width,re.height)}for(let re=0,ce=Ve.length;re<ce;re++)ye=Ve[re],We?k&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ee,Le,ye):t.texImage2D(n.TEXTURE_2D,re,ke,Ee,Le,ye);S.generateMipmaps=!1}else if(We){if(dt){const re=te(de);t.texStorage2D(n.TEXTURE_2D,be,ke,re.width,re.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Le,de)}else t.texImage2D(n.TEXTURE_2D,0,ke,Ee,Le,de);m(S)&&p(W),ge.__version=q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function fe(w,S,N){if(S.image.length!==6)return;const W=Xe(w,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);const q=i.get(K);if(K.version!==q.__version||W===!0){t.activeTexture(n.TEXTURE0+N);const ge=nt.getPrimaries(nt.workingColorSpace),he=S.colorSpace===er?null:nt.getPrimaries(S.colorSpace),xe=S.colorSpace===er||ge===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!Be&&!de?Ee[ce]=_(S.image[ce],!0,r.maxCubemapSize):Ee[ce]=de?S.image[ce].image:S.image[ce],Ee[ce]=ue(S,Ee[ce]);const Le=Ee[0],ke=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),Ve=b(S.internalFormat,ke,ye,S.colorSpace),We=S.isVideoTexture!==!0,dt=q.__version===void 0||W===!0,k=K.dataReady;let be=y(S,Le);Re(n.TEXTURE_CUBE_MAP,S);let re;if(Be){We&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ve,Le.width,Le.height);for(let ce=0;ce<6;ce++){re=Ee[ce].mipmaps;for(let we=0;we<re.length;we++){const Ae=re[we];S.format!==Yn?ke!==null?We?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,Ae.width,Ae.height,ke,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,Ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,Ae.width,Ae.height,ke,ye,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,Ve,Ae.width,Ae.height,0,ke,ye,Ae.data)}}}else{if(re=S.mipmaps,We&&dt){re.length>0&&be++;const ce=te(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ve,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(de){We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,ke,ye,Ee[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,Ee[ce].width,Ee[ce].height,0,ke,ye,Ee[ce].data);for(let we=0;we<re.length;we++){const qe=re[we].image[ce].image;We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,qe.width,qe.height,ke,ye,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,Ve,qe.width,qe.height,0,ke,ye,qe.data)}}else{We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,ye,Ee[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,ke,ye,Ee[ce]);for(let we=0;we<re.length;we++){const Ae=re[we];We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,ke,ye,Ae.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,Ve,ke,ye,Ae.image[ce])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),q.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ve(w,S,N,W,K,q){const ge=s.convert(N.format,N.colorSpace),he=s.convert(N.type),xe=b(N.internalFormat,ge,he,N.colorSpace),Be=i.get(S),de=i.get(N);if(de.__renderTarget=S,!Be.__hasExternalTextures){const Ee=Math.max(1,S.width>>q),Le=Math.max(1,S.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,q,xe,Ee,Le,S.depth,0,ge,he,null):t.texImage2D(K,q,xe,Ee,Le,0,ge,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),j(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,K,de.__webglTexture,0,ee(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,K,de.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(w,S,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const W=S.depthTexture,K=W&&W.isDepthTexture?W.type:null,q=v(S.stencilBuffer,K),ge=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=ee(S);j(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,q,S.width,S.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,w)}else{const W=S.textures;for(let K=0;K<W.length;K++){const q=W[K],ge=s.convert(q.format,q.colorSpace),he=s.convert(q.type),xe=b(q.internalFormat,ge,he,q.colorSpace),Be=ee(S);N&&j(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,S.width,S.height):j(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const K=W.__webglTexture,q=ee(S);if(S.depthTexture.format===Go)j(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===Wo)j(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function le(w){const S=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=W}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,w)}else if(N){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=n.createRenderbuffer(),O(S.__webglDepthbuffer[W],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),O(S.__webglDepthbuffer,w,!1);else{const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(w,S,N){const W=i.get(w);S!==void 0&&ve(W.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&le(w)}function De(w){const S=w.texture,N=i.get(w),W=i.get(S);w.addEventListener("dispose",C);const K=w.textures,q=w.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=S.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let xe=0;xe<S.mipmaps.length;xe++)N.__webglFramebuffer[he][xe]=n.createFramebuffer()}else N.__webglFramebuffer[he]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)N.__webglFramebuffer[he]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ge)for(let he=0,xe=K.length;he<xe;he++){const Be=i.get(K[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&j(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){const xe=K[he];N.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Be=s.convert(xe.format,xe.colorSpace),de=s.convert(xe.type),Ee=b(xe.internalFormat,Be,de,xe.colorSpace,w.isXRRenderTarget===!0),Le=ee(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ee,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,N.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),O(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Re(n.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ve(N.__webglFramebuffer[he][xe],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else ve(N.__webglFramebuffer[he],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let he=0,xe=K.length;he<xe;he++){const Be=K[he],de=i.get(Be);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Re(n.TEXTURE_2D,Be),ve(N.__webglFramebuffer,w,Be,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Re(he,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ve(N.__webglFramebuffer[xe],w,S,n.COLOR_ATTACHMENT0,he,xe);else ve(N.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,he,0);m(S)&&p(he),t.unbindTexture()}w.depthBuffer&&le(w)}function D(w){const S=w.textures;for(let N=0,W=S.length;N<W;N++){const K=S[N];if(m(K)){const q=A(w),ge=i.get(K).__webglTexture;t.bindTexture(q,ge),p(q),t.unbindTexture()}}}const L=[],E=[];function se(w){if(w.samples>0){if(j(w)===!1){const S=w.textures,N=w.width,W=w.height;let K=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(w),he=S.length>1;if(he)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const Be=i.get(S[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,N,W,0,0,N,W,K,n.NEAREST),l===!0&&(L.length=0,E.length=0,L.push(n.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(L.push(q),E.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const Be=i.get(S[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ee(w){return Math.min(r.maxSamples,w.samples)}function j(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ie(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function ue(w,S){const N=w.colorSpace,W=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Gs&&N!==er&&(nt.getTransfer(N)===lt?(W!==Yn||K!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=ae,this.setupRenderTarget=De,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=j}function rA(n,e){function t(i,r=er){let s;const o=nt.getTransfer(r);if(i===Li)return n.UNSIGNED_BYTE;if(i===Ff)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Of)return n.UNSIGNED_SHORT_5_5_5_1;if(i===f_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===c_)return n.BYTE;if(i===u_)return n.SHORT;if(i===Vo)return n.UNSIGNED_SHORT;if(i===Nf)return n.INT;if(i===Qr)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===h_)return n.ALPHA;if(i===d_)return n.RGB;if(i===Yn)return n.RGBA;if(i===p_)return n.LUMINANCE;if(i===m_)return n.LUMINANCE_ALPHA;if(i===Go)return n.DEPTH_COMPONENT;if(i===Wo)return n.DEPTH_STENCIL;if(i===Bf)return n.RED;if(i===kf)return n.RED_INTEGER;if(i===__)return n.RG;if(i===zf)return n.RG_INTEGER;if(i===Vf)return n.RGBA_INTEGER;if(i===Xa||i===qa||i===$a||i===Ya)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mu||i===Eu||i===Tu||i===bu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Au||i===wu||i===Cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Au||i===wu)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ru||i===Pu||i===Du||i===Lu||i===Iu||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu||i===ku||i===zu||i===Vu||i===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ru)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Du)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Iu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ou)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ku)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Gu||i===Wu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===g_||i===Xu||i===qu||i===$u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ui({vertexShader:sA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lA extends to{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new aA,m=t.getContextAttributes();let p=null,A=null;const b=[],v=[],y=new ct;let T=null;const C=new qn;C.viewport=new Ct;const P=new qn;P.viewport=new Ct;const x=[C,P],M=new Cy;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=b[Y];return fe===void 0&&(fe=new Pc,b[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=b[Y];return fe===void 0&&(fe=new Pc,b[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=b[Y];return fe===void 0&&(fe=new Pc,b[Y]=fe),fe.getHandSpace()};function F(Y){const fe=v.indexOf(Y.inputSource);if(fe===-1)return;const ve=b[fe];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){const fe=v[Y];fe!==null&&(v[Y]=null,b[Y].disconnect(fe))}I=null,U=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,O=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?Wo:Go,O=m.stencil?Ho:Qr);const le={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new es(h.textureWidth,h.textureHeight,{format:Yn,type:Li,depthTexture:new P_(h.textureWidth,h.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new es(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let fe=0;fe<Y.removed.length;fe++){const ve=Y.removed[fe],O=v.indexOf(ve);O>=0&&(v[O]=null,b[O].disconnect(ve))}for(let fe=0;fe<Y.added.length;fe++){const ve=Y.added[fe];let O=v.indexOf(ve);if(O===-1){for(let le=0;le<b.length;le++)if(le>=v.length){v.push(ve),O=le;break}else if(v[le]===null){v[le]=ve,O=le;break}if(O===-1)break}const oe=b[O];oe&&oe.connect(ve)}}const B=new J,G=new J;function V(Y,fe,ve){B.setFromMatrixPosition(fe.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const O=B.distanceTo(G),oe=fe.projectionMatrix.elements,le=ve.projectionMatrix.elements,ae=oe[14]/(oe[10]-1),De=oe[14]/(oe[10]+1),D=(oe[9]+1)/oe[5],L=(oe[9]-1)/oe[5],E=(oe[8]-1)/oe[0],se=(le[8]+1)/le[0],ee=ae*E,j=ae*se,ie=O/(-E+se),ue=ie*-E;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),oe[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const te=ae+ie,w=De+ie,S=ee-ue,N=j+(O-ue),W=D*De/w*te,K=L*De/w*te;Y.projectionMatrix.makePerspective(S,N,W,K,te,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pe(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let fe=Y.near,ve=Y.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),M.near=P.near=C.near=fe,M.far=P.far=C.far=ve,(I!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,U=M.far),C.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const O=Y.parent,oe=M.cameras;pe(M,O);for(let le=0;le<oe.length;le++)pe(oe[le],O);oe.length===2?V(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),_e(Y,M,O)};function _e(Y,fe,ve){ve===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yu*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Se=null;function Re(Y,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let O=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let ae=0;ae<ve.length;ae++){const De=ve[ae];let D=null;if(d!==null)D=d.getViewport(De);else{const E=f.getViewSubImage(h,De);D=E.viewport,ae===0&&(e.setRenderTargetTextures(A,E.colorTexture,E.depthStencilTexture),e.setRenderTarget(A))}let L=x[ae];L===void 0&&(L=new qn,L.layers.enable(ae),L.viewport=new Ct,x[ae]=L),L.matrix.fromArray(De.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(De.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(D.x,D.y,D.width,D.height),ae===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(L)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(ve[0]);ae&&ae.isValid&&ae.texture&&_.init(e,ae,r.renderState)}}for(let ve=0;ve<b.length;ve++){const O=v[ve],oe=b[ve];O!==null&&oe!==void 0&&oe.update(O,fe,c||o)}Se&&Se(Y,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Xe=new L_;Xe.setAnimationLoop(Re),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}const Rr=new Ii,cA=new gt;function uA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,A_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),b=A.envMap,v=A.envMapRotation;b&&(m.envMap.value=b,Rr.copy(v),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(cA.makeRotationFromEuler(Rr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const v=b.program;i.uniformBlockBinding(A,v)}function c(A,b){let v=r[A.id];v===void 0&&(g(A),v=u(A),r[A.id]=v,A.addEventListener("dispose",m));const y=b.program;i.updateUBOMapping(A,y);const T=e.render.frame;s[A.id]!==T&&(h(A),s[A.id]=T)}function u(A){const b=f();A.__bindingPointIndex=b;const v=n.createBuffer(),y=A.__size,T=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,y,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,v),v}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const b=r[A.id],v=A.uniforms,y=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=v.length;T<C;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,M=P.length;x<M;x++){const I=P[x];if(d(I,T,x,y)===!0){const U=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let $=0;$<F.length;$++){const B=F[$],G=_(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+X,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,b,v,y){const T=A.value,C=b+"_"+v;if(y[C]===void 0)return typeof T=="number"||typeof T=="boolean"?y[C]=T:y[C]=T.clone(),!0;{const P=y[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return y[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(A){const b=A.uniforms;let v=0;const y=16;for(let C=0,P=b.length;C<P;C++){const x=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,I=x.length;M<I;M++){const U=x[M],F=Array.isArray(U.value)?U.value:[U.value];for(let X=0,$=F.length;X<$;X++){const B=F[X],G=_(B),V=v%y,pe=V%G.boundary,_e=V+pe;v+=pe,_e!==0&&y-_e<G.storage&&(v+=y-_e),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=G.storage}}}const T=v%y;return T>0&&(v+=y-T),A.__size=v,A.__cache={},this}function _(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class hA{constructor(e={}){const{canvas:t=WS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=Fn;let T=0,C=0,P=null,x=-1,M=null;const I=new Ct,U=new Ct;let F=null;const X=new et(0);let $=0,B=t.width,G=t.height,V=1,pe=null,_e=null;const Se=new Ct(0,0,B,G),Re=new Ct(0,0,B,G);let Xe=!1;const Y=new R_;let fe=!1,ve=!1;const O=new gt,oe=new gt,le=new J,ae=new Ct,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function L(){return P===null?V:1}let E=i;function se(R,z){return t.getContext(R,z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),E===null){const z="webgl2";if(E=se(z,R),E===null)throw se(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ee,j,ie,ue,te,w,S,N,W,K,q,ge,he,xe,Be,de,Ee,Le,ke,ye,Ve,We,dt,k;function be(){ee=new MT(E),ee.init(),We=new rA(E,ee),j=new mT(E,ee,e,We),ie=new nA(E,ee),j.reverseDepthBuffer&&h&&ie.buffers.depth.setReversed(!0),ue=new bT(E),te=new Gb,w=new iA(E,ee,ie,te,j,We,ue),S=new gT(v),N=new yT(v),W=new Dy(E),dt=new dT(E,W),K=new ET(E,W,ue,dt),q=new wT(E,K,W,ue),ke=new AT(E,j,w),de=new _T(te),ge=new Hb(v,S,N,ee,j,dt,de),he=new uA(v,te),xe=new Xb,Be=new Zb(ee),Le=new hT(v,S,N,ie,q,d,l),Ee=new eA(v,q,j),k=new fA(E,ue,j,ie),ye=new pT(E,ee,ue),Ve=new TT(E,ee,ue),ue.programs=ge.programs,v.capabilities=j,v.extensions=ee,v.properties=te,v.renderLists=xe,v.shadowMap=Ee,v.state=ie,v.info=ue}be();const re=new lA(v,E);this.xr=re,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(B,G,!1))},this.getSize=function(R){return R.set(B,G)},this.setSize=function(R,z,Z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,G=z,t.width=Math.floor(R*V),t.height=Math.floor(z*V),Z===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(B*V,G*V).floor()},this.setDrawingBufferSize=function(R,z,Z){B=R,G=z,V=Z,t.width=Math.floor(R*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,z,Z,Q){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,z,Z,Q),ie.viewport(I.copy(Se).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Re)},this.setScissor=function(R,z,Z,Q){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,z,Z,Q),ie.scissor(U.copy(Re).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(R){ie.setScissorTest(Xe=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){_e=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,Z=!0){let Q=0;if(R){let H=!1;if(P!==null){const me=P.texture.format;H=me===Vf||me===zf||me===kf}if(H){const me=P.texture.type,Te=me===Li||me===Qr||me===Vo||me===Ho||me===Ff||me===Of,Ce=Le.getClearColor(),Pe=Le.getClearAlpha(),He=Ce.r,ze=Ce.g,Ie=Ce.b;Te?(g[0]=He,g[1]=ze,g[2]=Ie,g[3]=Pe,E.clearBufferuiv(E.COLOR,0,g)):(_[0]=He,_[1]=ze,_[2]=Ie,_[3]=Pe,E.clearBufferiv(E.COLOR,0,_))}else Q|=E.COLOR_BUFFER_BIT}z&&(Q|=E.DEPTH_BUFFER_BIT),Z&&(Q|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Le.dispose(),xe.dispose(),Be.dispose(),te.dispose(),S.dispose(),N.dispose(),q.dispose(),dt.dispose(),k.dispose(),ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",fh),re.removeEventListener("sessionend",hh),vr.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ue.autoReset,z=Ee.enabled,Z=Ee.autoUpdate,Q=Ee.needsUpdate,H=Ee.type;be(),ue.autoReset=R,Ee.enabled=z,Ee.autoUpdate=Z,Ee.needsUpdate=Q,Ee.type=H}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qe(R){const z=R.target;z.removeEventListener("dispose",qe),Mt(z)}function Mt(R){Xt(R),te.remove(R)}function Xt(R){const z=te.get(R).programs;z!==void 0&&(z.forEach(function(Z){ge.releaseProgram(Z)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Z,Q,H,me){z===null&&(z=De);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Ce=Kg(R,z,Z,Q,H);ie.setMaterial(Q,Te);let Pe=Z.index,He=1;if(Q.wireframe===!0){if(Pe=K.getWireframeAttribute(Z),Pe===void 0)return;He=2}const ze=Z.drawRange,Ie=Z.attributes.position;let Je=ze.start*He,it=(ze.start+ze.count)*He;me!==null&&(Je=Math.max(Je,me.start*He),it=Math.min(it,(me.start+me.count)*He)),Pe!==null?(Je=Math.max(Je,0),it=Math.min(it,Pe.count)):Ie!=null&&(Je=Math.max(Je,0),it=Math.min(it,Ie.count));const Pt=it-Je;if(Pt<0||Pt===1/0)return;dt.setup(H,Q,Ce,Z,Pe);let Et,tt=ye;if(Pe!==null&&(Et=W.get(Pe),tt=Ve,tt.setIndex(Et)),H.isMesh)Q.wireframe===!0?(ie.setLineWidth(Q.wireframeLinewidth*L()),tt.setMode(E.LINES)):tt.setMode(E.TRIANGLES);else if(H.isLine){let Fe=Q.linewidth;Fe===void 0&&(Fe=1),ie.setLineWidth(Fe*L()),H.isLineSegments?tt.setMode(E.LINES):H.isLineLoop?tt.setMode(E.LINE_LOOP):tt.setMode(E.LINE_STRIP)}else H.isPoints?tt.setMode(E.POINTS):H.isSprite&&tt.setMode(E.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ka("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,Gt=H._multiDrawCounts,rt=H._multiDrawCount,Hn=Pe?W.get(Pe).bytesPerElement:1,ss=te.get(Q).currentProgram.getUniforms();for(let xn=0;xn<rt;xn++)ss.setValue(E,"_gl_DrawID",xn),tt.render(Fe[xn]/Hn,Gt[xn])}else if(H.isInstancedMesh)tt.renderInstances(Je,Pt,H.count);else if(Z.isInstancedBufferGeometry){const Fe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Gt=Math.min(Z.instanceCount,Fe);tt.renderInstances(Je,Pt,Gt)}else tt.render(Je,Pt)};function at(R,z,Z){R.transparent===!0&&R.side===si&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,fa(R,z,Z),R.side=fr,R.needsUpdate=!0,fa(R,z,Z),R.side=si):fa(R,z,Z)}this.compile=function(R,z,Z=null){Z===null&&(Z=R),p=Be.get(Z),p.init(z),b.push(p),Z.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),R!==Z&&R.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Q=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Ce=me[Te];at(Ce,Z,H),Q.add(Ce)}else at(me,Z,H),Q.add(me)}),p=b.pop(),Q},this.compileAsync=function(R,z,Z=null){const Q=this.compile(R,z,Z);return new Promise(H=>{function me(){if(Q.forEach(function(Te){te.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){H(R);return}setTimeout(me,10)}ee.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Vn=null;function mi(R){Vn&&Vn(R)}function fh(){vr.stop()}function hh(){vr.start()}const vr=new L_;vr.setAnimationLoop(mi),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(R){Vn=R,re.setAnimationLoop(R),R===null?vr.stop():vr.start()},re.addEventListener("sessionstart",fh),re.addEventListener("sessionend",hh),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(z),z=re.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,z,P),p=Be.get(R,b.length),p.init(z),b.push(p),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(oe),ve=this.localClippingEnabled,fe=de.init(this.clippingPlanes,ve),m=xe.get(R,A.length),m.init(),A.push(m),re.enabled===!0&&re.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&$l(me,z,-1/0,v.sortObjects)}$l(R,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pe,_e),D=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,D&&Le.addToRenderList(m,R),this.info.render.frame++,fe===!0&&de.beginShadows();const Z=p.state.shadowsArray;Ee.render(Z,R,z),fe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const me=z.cameras;if(H.length>0)for(let Te=0,Ce=me.length;Te<Ce;Te++){const Pe=me[Te];ph(Q,H,R,Pe)}D&&Le.render(R);for(let Te=0,Ce=me.length;Te<Ce;Te++){const Pe=me[Te];dh(m,R,Pe,Pe.viewport)}}else H.length>0&&ph(Q,H,R,z),D&&Le.render(R),dh(m,R,z);P!==null&&C===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(v,R,z),dt.resetDefaultState(),x=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],fe===!0&&de.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function $l(R,z,Z,Q){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){Q&&ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);const Te=q.update(R),Ce=R.material;Ce.visible&&m.push(R,Te,Ce,Z,ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const Te=q.update(R),Ce=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ae.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ae.copy(Te.boundingSphere.center)),ae.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Ce)){const Pe=Te.groups;for(let He=0,ze=Pe.length;He<ze;He++){const Ie=Pe[He],Je=Ce[Ie.materialIndex];Je&&Je.visible&&m.push(R,Te,Je,Z,ae.z,Ie)}}else Ce.visible&&m.push(R,Te,Ce,Z,ae.z,null)}}const me=R.children;for(let Te=0,Ce=me.length;Te<Ce;Te++)$l(me[Te],z,Z,Q)}function dh(R,z,Z,Q){const H=R.opaque,me=R.transmissive,Te=R.transparent;p.setupLightsView(Z),fe===!0&&de.setGlobalState(v.clippingPlanes,Z),Q&&ie.viewport(I.copy(Q)),H.length>0&&ua(H,z,Z),me.length>0&&ua(me,z,Z),Te.length>0&&ua(Te,z,Z),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function ph(R,z,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new es(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?sa:Li,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const me=p.state.transmissionRenderTarget[Q.id],Te=Q.viewport||I;me.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(X),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),D&&Le.render(Z);const Pe=v.toneMapping;v.toneMapping=ar;const He=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),fe===!0&&de.setGlobalState(v.clippingPlanes,Q),ua(R,Z,Q),w.updateMultisampleRenderTarget(me),w.updateRenderTargetMipmap(me),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ie=0,Je=z.length;Ie<Je;Ie++){const it=z[Ie],Pt=it.object,Et=it.geometry,tt=it.material,Fe=it.group;if(tt.side===si&&Pt.layers.test(Q.layers)){const Gt=tt.side;tt.side=hn,tt.needsUpdate=!0,mh(Pt,Z,Q,Et,tt,Fe),tt.side=Gt,tt.needsUpdate=!0,ze=!0}}ze===!0&&(w.updateMultisampleRenderTarget(me),w.updateRenderTargetMipmap(me))}v.setRenderTarget(Ce),v.setClearColor(X,$),He!==void 0&&(Q.viewport=He),v.toneMapping=Pe}function ua(R,z,Z){const Q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,me=R.length;H<me;H++){const Te=R[H],Ce=Te.object,Pe=Te.geometry,He=Te.group;let ze=Te.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Ce.layers.test(Z.layers)&&mh(Ce,z,Z,Pe,ze,He)}}function mh(R,z,Z,Q,H,me){R.onBeforeRender(v,z,Z,Q,H,me),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(v,z,Z,Q,R,me),H.transparent===!0&&H.side===si&&H.forceSinglePass===!1?(H.side=hn,H.needsUpdate=!0,v.renderBufferDirect(Z,z,Q,H,R,me),H.side=fr,H.needsUpdate=!0,v.renderBufferDirect(Z,z,Q,H,R,me),H.side=si):v.renderBufferDirect(Z,z,Q,H,R,me),R.onAfterRender(v,z,Z,Q,H,me)}function fa(R,z,Z){z.isScene!==!0&&(z=De);const Q=te.get(R),H=p.state.lights,me=p.state.shadowsArray,Te=H.state.version,Ce=ge.getParameters(R,H.state,me,z,Z),Pe=ge.getProgramCacheKey(Ce);let He=Q.programs;Q.environment=R.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(R.isMeshStandardMaterial?N:S).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",qe),He=new Map,Q.programs=He);let ze=He.get(Pe);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===Te)return gh(R,Ce),ze}else Ce.uniforms=ge.getUniforms(R),R.onBeforeCompile(Ce,v),ze=ge.acquireProgram(Ce,Pe),He.set(Pe,ze),Q.uniforms=Ce.uniforms;const Ie=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=de.uniform),gh(R,Ce),Q.needsLights=Jg(R),Q.lightsStateVersion=Te,Q.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function _h(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Za.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function gh(R,z){const Z=te.get(R);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Kg(R,z,Z,Q,H){z.isScene!==!0&&(z=De),w.resetTextureUnits();const me=z.fog,Te=Q.isMeshStandardMaterial?z.environment:null,Ce=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gs,Pe=(Q.isMeshStandardMaterial?N:S).get(Q.envMap||Te),He=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ie=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,it=!!Z.morphAttributes.color;let Pt=ar;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,tt=Et!==void 0?Et.length:0,Fe=te.get(Q),Gt=p.state.lights;if(fe===!0&&(ve===!0||R!==M)){const Qt=R===M&&Q.id===x;de.setState(Q,R,Qt)}let rt=!1;Q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Gt.state.version||Fe.outputColorSpace!==Ce||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==Pe||Q.fog===!0&&Fe.fog!==me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==de.numPlanes||Fe.numIntersection!==de.numIntersection)||Fe.vertexAlphas!==He||Fe.vertexTangents!==ze||Fe.morphTargets!==Ie||Fe.morphNormals!==Je||Fe.morphColors!==it||Fe.toneMapping!==Pt||Fe.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Fe.__version=Q.version);let Hn=Fe.currentProgram;rt===!0&&(Hn=fa(Q,z,H));let ss=!1,xn=!1,ro=!1;const vt=Hn.getUniforms(),Dn=Fe.uniforms;if(ie.useProgram(Hn.program)&&(ss=!0,xn=!0,ro=!0),Q.id!==x&&(x=Q.id,xn=!0),ss||M!==R){ie.buffers.depth.getReversed()?(O.copy(R.projectionMatrix),qS(O),$S(O),vt.setValue(E,"projectionMatrix",O)):vt.setValue(E,"projectionMatrix",R.projectionMatrix),vt.setValue(E,"viewMatrix",R.matrixWorldInverse);const cn=vt.map.cameraPosition;cn!==void 0&&cn.setValue(E,le.setFromMatrixPosition(R.matrixWorld)),j.logarithmicDepthBuffer&&vt.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&vt.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,xn=!0,ro=!0)}if(H.isSkinnedMesh){vt.setOptional(E,H,"bindMatrix"),vt.setOptional(E,H,"bindMatrixInverse");const Qt=H.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),vt.setValue(E,"boneTexture",Qt.boneTexture,w))}H.isBatchedMesh&&(vt.setOptional(E,H,"batchingTexture"),vt.setValue(E,"batchingTexture",H._matricesTexture,w),vt.setOptional(E,H,"batchingIdTexture"),vt.setValue(E,"batchingIdTexture",H._indirectTexture,w),vt.setOptional(E,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(E,"batchingColorTexture",H._colorsTexture,w));const Ln=Z.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ke.update(H,Z,Hn),(xn||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,vt.setValue(E,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Dn.envMap.value=Pe,Dn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(Dn.envMapIntensity.value=z.environmentIntensity),xn&&(vt.setValue(E,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Zg(Dn,ro),me&&Q.fog===!0&&he.refreshFogUniforms(Dn,me),he.refreshMaterialUniforms(Dn,Q,V,G,p.state.transmissionRenderTarget[R.id]),Za.upload(E,_h(Fe),Dn,w)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Za.upload(E,_h(Fe),Dn,w),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&vt.setValue(E,"center",H.center),vt.setValue(E,"modelViewMatrix",H.modelViewMatrix),vt.setValue(E,"normalMatrix",H.normalMatrix),vt.setValue(E,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Qt=Q.uniformsGroups;for(let cn=0,Yl=Qt.length;cn<Yl;cn++){const xr=Qt[cn];k.update(xr,Hn),k.bind(xr,Hn)}}return Hn}function Zg(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Jg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,z,Z){const Q=te.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),te.get(R.texture).__webglTexture=z,te.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const Z=te.get(R);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Qg=E.createFramebuffer();this.setRenderTarget=function(R,z=0,Z=0){P=R,T=z,C=Z;let Q=!0,H=null,me=!1,Te=!1;if(R){const Pe=te.get(R);if(Pe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(E.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Pe.__hasExternalTextures)w.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ie=R.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&te.has(Ie)&&(R.width!==Ie.image.width||R.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const ze=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?H=ze[z][Z]:H=ze[z],me=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?H=te.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[Z]:H=ze,I.copy(R.viewport),U.copy(R.scissor),F=R.scissorTest}else I.copy(Se).multiplyScalar(V).floor(),U.copy(Re).multiplyScalar(V).floor(),F=Xe;if(Z!==0&&(H=Qg),ie.bindFramebuffer(E.FRAMEBUFFER,H)&&Q&&ie.drawBuffers(R,H),ie.viewport(I),ie.scissor(U),ie.setScissorTest(F),me){const Pe=te.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,Z)}else if(Te){const Pe=te.get(R.texture),He=z;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Pe.__webglTexture,Z,He)}else if(R!==null&&Z!==0){const Pe=te.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Pe.__webglTexture,Z)}x=-1},this.readRenderTargetPixels=function(R,z,Z,Q,H,me,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){ie.bindFramebuffer(E.FRAMEBUFFER,Ce);try{const Pe=R.texture,He=Pe.format,ze=Pe.type;if(!j.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Q&&Z>=0&&Z<=R.height-H&&E.readPixels(z,Z,Q,H,We.convert(He),We.convert(ze),me)}finally{const Pe=P!==null?te.get(P).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(R,z,Z,Q,H,me,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(z>=0&&z<=R.width-Q&&Z>=0&&Z<=R.height-H){ie.bindFramebuffer(E.FRAMEBUFFER,Ce);const Pe=R.texture,He=Pe.format,ze=Pe.type;if(!j.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ie),E.bufferData(E.PIXEL_PACK_BUFFER,me.byteLength,E.STREAM_READ),E.readPixels(z,Z,Q,H,We.convert(He),We.convert(ze),0);const Je=P!==null?te.get(P).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,Je);const it=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await XS(E,it,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ie),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,me),E.deleteBuffer(Ie),E.deleteSync(it),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,Z=0){const Q=Math.pow(2,-Z),H=Math.floor(R.image.width*Q),me=Math.floor(R.image.height*Q),Te=z!==null?z.x:0,Ce=z!==null?z.y:0;w.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,Z,0,0,Te,Ce,H,me),ie.unbindTexture()};const ev=E.createFramebuffer(),tv=E.createFramebuffer();this.copyTextureToTexture=function(R,z,Z=null,Q=null,H=0,me=null){me===null&&(H!==0?(Ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=H,H=0):me=0);let Te,Ce,Pe,He,ze,Ie,Je,it,Pt;const Et=R.isCompressedTexture?R.mipmaps[me]:R.image;if(Z!==null)Te=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,He=Z.min.x,ze=Z.min.y,Ie=Z.isBox3?Z.min.z:0;else{const Ln=Math.pow(2,-H);Te=Math.floor(Et.width*Ln),Ce=Math.floor(Et.height*Ln),R.isDataArrayTexture?Pe=Et.depth:R.isData3DTexture?Pe=Math.floor(Et.depth*Ln):Pe=1,He=0,ze=0,Ie=0}Q!==null?(Je=Q.x,it=Q.y,Pt=Q.z):(Je=0,it=0,Pt=0);const tt=We.convert(z.format),Fe=We.convert(z.type);let Gt;z.isData3DTexture?(w.setTexture3D(z,0),Gt=E.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(w.setTexture2DArray(z,0),Gt=E.TEXTURE_2D_ARRAY):(w.setTexture2D(z,0),Gt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment);const rt=E.getParameter(E.UNPACK_ROW_LENGTH),Hn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ss=E.getParameter(E.UNPACK_SKIP_PIXELS),xn=E.getParameter(E.UNPACK_SKIP_ROWS),ro=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Et.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Et.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,He),E.pixelStorei(E.UNPACK_SKIP_ROWS,ze),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ie);const vt=R.isDataArrayTexture||R.isData3DTexture,Dn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const Ln=te.get(R),Qt=te.get(z),cn=te.get(Ln.__renderTarget),Yl=te.get(Qt.__renderTarget);ie.bindFramebuffer(E.READ_FRAMEBUFFER,cn.__webglFramebuffer),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,Yl.__webglFramebuffer);for(let xr=0;xr<Pe;xr++)vt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,te.get(R).__webglTexture,H,Ie+xr),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,te.get(z).__webglTexture,me,Pt+xr)),E.blitFramebuffer(He,ze,Te,Ce,Je,it,Te,Ce,E.DEPTH_BUFFER_BIT,E.NEAREST);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(H!==0||R.isRenderTargetTexture||te.has(R)){const Ln=te.get(R),Qt=te.get(z);ie.bindFramebuffer(E.READ_FRAMEBUFFER,ev),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,tv);for(let cn=0;cn<Pe;cn++)vt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ln.__webglTexture,H,Ie+cn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ln.__webglTexture,H),Dn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Qt.__webglTexture,me,Pt+cn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Qt.__webglTexture,me),H!==0?E.blitFramebuffer(He,ze,Te,Ce,Je,it,Te,Ce,E.COLOR_BUFFER_BIT,E.NEAREST):Dn?E.copyTexSubImage3D(Gt,me,Je,it,Pt+cn,He,ze,Te,Ce):E.copyTexSubImage2D(Gt,me,Je,it,He,ze,Te,Ce);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Gt,me,Je,it,Pt,Te,Ce,Pe,tt,Fe,Et.data):z.isCompressedArrayTexture?E.compressedTexSubImage3D(Gt,me,Je,it,Pt,Te,Ce,Pe,tt,Et.data):E.texSubImage3D(Gt,me,Je,it,Pt,Te,Ce,Pe,tt,Fe,Et):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,me,Je,it,Te,Ce,tt,Fe,Et.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,me,Je,it,Et.width,Et.height,tt,Et.data):E.texSubImage2D(E.TEXTURE_2D,me,Je,it,Te,Ce,tt,Fe,Et);E.pixelStorei(E.UNPACK_ROW_LENGTH,rt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Hn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ss),E.pixelStorei(E.UNPACK_SKIP_ROWS,xn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ro),me===0&&z.generateMipmaps&&E.generateMipmap(Gt),ie.unbindTexture()},this.copyTextureToTexture3D=function(R,z,Z=null,Q=null,H=0){return Ka('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,Z,Q,H)},this.initRenderTarget=function(R){te.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),ie.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,ie.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function Ai(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function O_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},Xf,Wt,xt,fi=1e8,Zt=1/fi,Zu=Math.PI*2,dA=Zu/4,pA=0,B_=Math.sqrt,mA=Math.cos,_A=Math.sin,Ht=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Ni=function(e){return typeof e=="number"},qf=function(e){return typeof e>"u"},pi=function(e){return typeof e=="object"},pn=function(e){return e!==!1},$f=function(){return typeof window<"u"},za=function(e){return Tt(e)||Ht(e)},k_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Ju=/(?:-?\.?\d|\.)+/gi,z_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,V_=/[+-]=-?[.\d]+/,H_=/[^,'"\[\]\s]+/gi,gA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,St,ni,Qu,Yf,Rn={},_l={},G_,W_=function(e){return(_l=qs(e,Rn))&&vn},jf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xo=function(e,t){return!t&&console.warn(e)},X_=function(e,t){return e&&(Rn[e]=t)&&_l&&(_l[e]=t)||Rn},qo=function(){return 0},vA={suppressEvents:!0,isStart:!0,kill:!1},Ja={suppressEvents:!0,kill:!1},xA={suppressEvents:!0},Kf={},lr=[],ef={},q_,En={},kc={},sp=30,Qa=[],Zf="",Jf=function(e){var t=e[0],i,r;if(pi(t)||Tt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Qa.length;r--&&!Qa[r].targetTest(t););i=Qa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new _g(e[r],i)))||e.splice(r,1);return e},Yr=function(e){return e._gsap||Jf(On(e))[0]._gsap},$_=function(e,t,i){return(i=e[t])&&Tt(i)?e[t]():qf(i)&&e.getAttribute&&e.getAttribute(t)||i},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},Fs=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},SA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},gl=function(){var e=lr.length,t=lr.slice(0),i,r;for(ef={},lr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Y_=function(e,t,i,r){lr.length&&!Wt&&gl(),e.render(t,i,Wt&&t<0&&(e._initted||e._startAt)),lr.length&&!Wt&&gl()},j_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(H_).length<2?t:Ht(e)?e.trim():e},K_=function(e){return e},Pn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},yA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},qs=function(e,t){for(var i in t)e[i]=t[i];return e},op=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=pi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},vl=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Co=function(e){var t=e.parent||St,i=e.keyframes?yA(Jt(e.keyframes)):Pn;if(pn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},MA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Z_=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Hl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},EA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tf=function(e,t,i,r){return e._startAt&&(Wt?e._startAt.revert(Ja):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},TA=function n(e){return!e||e._ts&&n(e.parent)},ap=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var i=Math.floor(e=It(e/t));return e&&i===e?i-1:i},xl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gl=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||Zt)||0))},Wl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=It(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gl(e),i._dirty||jr(i,e)),e},J_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=xl(e.rawTime(),t),(!t._dur||ca(0,t.totalDuration(),i)-t._tTime>Zt)&&t.render(i,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},oi=function(e,t,i,r){return t.parent&&hr(t),t._start=It((Ni(i)?i:i||e!==St?Nn(e,i,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Z_(e,t,"_first","_last",e._sort?"_start":0),nf(t)||(e._recent=t),r||J_(e,t),e._ts<0&&Wl(e,e._tTime),e},Q_=function(e,t){return(Rn.ScrollTrigger||jf("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},eg=function(e,t,i,r,s){if(eh(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&q_!==Tn.frame)return lr.push(e),e._lazy=[s,r],1},bA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},nf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},AA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&bA(e)&&!(!e._initted&&nf(e))||(e._ts<0||e._dp._ts<0)&&!nf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=ca(0,e._tDur,t),u=$s(l,a),e._yoyo&&u&1&&(o=1-o),u!==$s(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Wt||r||e._zTime===Zt||!t&&e._zTime){if(!e._initted&&eg(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Zt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&tf(e,t,i,!0),e._onUpdate&&!i&&An(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&An(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&hr(e,1),!i&&!Wt&&(An(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ys=function(e,t,i,r){var s=e._repeat,o=It(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:It(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Wl(e,e._tTime=e._tDur*a),e.parent&&Gl(e),i||jr(e.parent,e),e},lp=function(e){return e instanceof on?jr(e):Ys(e,e._dur)},CA={_start:0,endTime:qo,totalDuration:qo},Nn=function n(e,t,i){var r=e.labels,s=e._recent||CA,o=e.duration()>=fi?s.endTime(!1):e._dur,a,l,c;return Ht(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ro=function(e,t,i){var r=Ni(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;o.immediateRender=pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Lt(t[0],o,t[s+1])},gr=function(e,t){return e||e===0?t(e):t},ca=function(e,t,i){return i<e?e:i>t?t:i},Kt=function(e,t){return!Ht(e)||!(t=gA.exec(e))?"":t[1]},RA=function(e,t,i){return gr(i,function(r){return ca(e,t,r)})},rf=[].slice,tg=function(e,t){return e&&pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pi(e[0]))&&!e.nodeType&&e!==ni},PA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ht(r)&&!t||tg(r,1)?(s=i).push.apply(s,On(r)):i.push(r)})||i},On=function(e,t,i){return xt&&!t&&xt.selector?xt.selector(e):Ht(e)&&!i&&(Qu||!js())?rf.call((t||Yf).querySelectorAll(e),0):Jt(e)?PA(e,i):tg(e)?rf.call(e,0):e?[e]:[]},sf=function(e){return e=On(e)[0]||Xo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return On(t,i.querySelectorAll?i:i===e?Xo("Invalid scope")||Yf.createElement("div"):e)}},ng=function(e){return e.sort(function(){return .5-Math.random()})},ig=function(e){if(Tt(e))return e;var t=pi(e)?e:{each:e},i=Kr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Ht(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,A,b,v,y,T,C,P,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,fi])[1],!x){for(C=-1e8;C<(C=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:r%x,A=x===fi?0:l?_*f/x-.5:r/x|0,C=0,P=fi,T=0;T<_;T++)b=T%x-p,v=A-(T/x|0),m[T]=y=c?Math.abs(c==="y"?v:b):B_(b*b+v*v),y>C&&(C=y),y<P&&(P=y);r==="random"&&ng(m),m.max=C-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Kt(t.amount||t.each)||0,i=i&&_<0?dg(i):i}return _=(m[h]-m.min)/m.max||0,It(m.b+(i?i(_):_)*m.v)+m.u}},of=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=It(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ni(i)?0:Kt(i))}},rg=function(e,t){var i=Jt(e),r,s;return!i&&pi(e)&&(r=i=e.radius||fi,e.values?(e=On(e.values),(s=!Ni(e[0]))&&(r*=r)):e=of(e.increment)),gr(t,i?Tt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Ni(o)?u:u+Kt(o)}:of(e))},sg=function(e,t,i,r){return gr(Jt(e)?!t:i===!0?!!(i=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},DA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},LA=function(e,t){return function(i){return e(parseFloat(i))+(t||Kt(i))}},IA=function(e,t,i){return ag(e,t,0,1,i)},og=function(e,t,i){return gr(i,function(r){return e[~~t(r)]})},UA=function n(e,t,i){var r=t-e;return Jt(e)?og(e,n(0,e.length),t):gr(i,function(s){return(r+(s-e)%r)%r+e})},NA=function n(e,t,i){var r=t-e,s=r*2;return Jt(e)?og(e,n(0,e.length-1),t):gr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},$o=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?H_:Ju),i+=e.substr(t,r-t)+sg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},ag=function(e,t,i,r,s){var o=t-e,a=r-i;return gr(s,function(l){return i+((l-e)/o*a||0)})},FA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ht(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=qs(Jt(e)?[]:{},e));if(!u){for(l in t)Qf.call(a,e,l,"get",t[l]);s=function(g){return ih(g,a)||(o?e.p:e)}}}return gr(i,s)},cp=function(e,t,i){var r=e.labels,s=fi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},An=function(e,t,i){var r=e.vars,s=r[t],o=xt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&lr.length&&gl(),a&&(xt=a),u=l?s.apply(c,l):s.call(c),xt=o,u},xo=function(e){return hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&An(e,"onInterrupt"),e},Cs,lg=[],cg=function(e){if(e)if(e=!e.name&&e.default||e,$f()||e.headless){var t=e.name,i=Tt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:qo,render:ih,add:Qf,kill:JA,modifier:ZA,rawVars:0},o={targetTest:0,get:0,getSetter:nh,aliases:{},register:0};if(js(),e!==r){if(En[t])return;Pn(r,Pn(vl(e,s),o)),qs(r.prototype,qs(s,vl(e,o))),En[r.prop=t]=r,e.targetTest&&(Qa.push(r),Kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}X_(t,r),e.register&&e.register(vn,r,_n)}else lg.push(e)},ut=255,So={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},zc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},ug=function(e,t,i){var r=e?Ni(e)?[e>>16,e>>8&ut,e&ut]:0:So.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),So[e])r=So[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Ju),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=zc(l+1/3,s,o),r[1]=zc(l,s,o),r[2]=zc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(z_),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ju)||So.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ut,o=r[1]/ut,a=r[2]/ut,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},fg=function(e){var t=[],i=[],r=-1;return e.split(cr).forEach(function(s){var o=s.match(ws)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},up=function(e,t,i){var r="",s=(e+r).match(cr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ug(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=fg(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(cr,"1").split(ws),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(cr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},cr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in So)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),OA=/hsl[a]?\(/,hg=function(e){var t=e.join(" "),i;if(cr.lastIndex=0,cr.test(t))return i=OA.test(t),e[1]=up(e[1],i),e[0]=up(e[0],i,fg(e[1])),!0},Yo,Tn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,A=m===!0,b,v,y,T;if((p>e||p<0)&&(i+=p-t),r+=p,y=r-i,b=y-o,(b>0||A)&&(T=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,o+=b+(b>=s?4:s-b),v=1),A||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](y,h,T,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){G_&&(!Qu&&$f()&&(ni=Qu=window,Yf=ni.document||{},Rn.gsap=vn,(ni.gsapVersions||(ni.gsapVersions=[])).push(vn.version),W_(_l||ni.GreenSockGlobals||!ni.gsap&&ni||{}),lg.forEach(cg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Yo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Yo=0,c=qo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,A){var b=p?function(v,y,T,C){m(v,y,T,C),f.remove(b)}:m;return f.remove(m),a[A?"unshift":"push"](b),js(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),js=function(){return!Yo&&Tn.wake()},Ze={},BA=/^[\d.\-M][\d.\-,\s]/,kA=/["']/g,zA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(kA,"").trim():+c,r=l.substr(a+1).trim();return t},VA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},HA=function(e){var t=(e+"").split("("),i=Ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[zA(t[1])]:VA(e).split(",").map(j_)):Ze._CE&&BA.test(e)?Ze._CE("",e):i},dg=function(e){return function(t){return 1-e(1-t)}},pg=function n(e,t){for(var i=e._first,r;i;)i instanceof on?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Kr=function(e,t){return e&&(Tt(e)?e:Ze[e]||HA(e))||t},rs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return mn(e,function(a){Ze[a]=Rn[a]=s,Ze[o=a.toLowerCase()]=i;for(var l in s)Ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[a+"."+l]=s[l]}),s},mg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vc=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Zu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*_A((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:mg(a);return s=Zu/s,l.config=function(c,u){return n(e,c,u)},l},Hc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:mg(i);return r.config=function(s){return n(e,s)},r};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;rs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;rs("Elastic",Vc("in"),Vc("out"),Vc());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});rs("Circ",function(n){return-(B_(1-n*n)-1)});rs("Sine",function(n){return n===1?1:-mA(n*dA)+1});rs("Back",Hc("in"),Hc("out"),Hc());Ze.SteppedEase=Ze.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Zt;return function(a){return((r*ca(0,o,a)|0)+s)*i}}};Xs.ease=Ze["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Zf+=n+","+n+"Params,"});var _g=function(e,t){this.id=pA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$_,this.set=t?t.getSetter:nh},jo=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ys(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Yo||Tn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wl(this,i),!s._dp||s.parent||J_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Zt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Y_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ap(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ap(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?xl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this._tDur,s),r!==!1),Gl(this),EA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Zt&&(this._tTime-=Zt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&oi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xl(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=xA);var r=Wt;return Wt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Wt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,lp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,lp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Nn(this,i),pn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,pn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Zt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Tt(i)?i:K_,a=function(){var c=r.then;r.then=null,Tt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){xo(this)},n}();Pn(jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var on=function(n){O_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=pn(i.sortChildren),St&&oi(i.parent||St,Ai(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Q_(Ai(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ro(0,arguments,this),this},t.from=function(r,s,o){return Ro(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ro(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,Nn(this,o),1),this},t.call=function(r,s,o){return oi(this,Lt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Lt(r,o,Nn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Co(o).immediateRender=pn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Co(a).immediateRender=pn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:It(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,A,b,v,y,T,C;if(this!==St&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,b=this._ts,p=!b,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=It(u%m),u===l?(_=this._repeat,h=c):(y=It(u/m),_=~~y,_&&_===y&&(h=c,_--),h>c&&(h=c)),y=$s(this._tTime,m),!a&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),T&&_&1&&(h=c-h,C=1),_!==y&&!this._lock){var P=T&&y&1,x=P===(T&&_&1);if(_<y&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(C?0:It(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&An(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;pg(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=wA(this,It(a),It(h)),A&&(u-=h-(h=A._start))),this._tTime=u,this._time=h,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(An(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&A!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){A=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var M=r<0?r:h;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&A!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Wt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){A=0,g&&(u+=this._zTime=M?-1e-8:Zt);break}}d=g}}if(A&&!s&&(this.pause(),A.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=v,Gl(this),this.render(r,s,o);this._onUpdate&&!s&&An(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(An(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ni(s)||(s=Nn(this,s,r)),!(r instanceof jo)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ht(r))return this.addLabel(r,s);if(Tt(r))r=Lt.delayedCall(0,r);else return this}return this!==r?oi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Lt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ht(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&Hl(this,r),r===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(Tn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Nn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Lt.delayedCall(0,s||qo,o);return a.data="isPause",this._hasPause=1,oi(this,a,Nn(this,r))},t.removePause=function(r){var s=this._first;for(r=Nn(this,r);s;)s._start===r&&s.data==="isPause"&&hr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=On(r),l=this._first,c=Ni(s),u;l;)l instanceof Lt?SA(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Nn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Lt.to(o,Pn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Zt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ys(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pn({startAt:{time:Nn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),cp(this,Nn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),cp(this,Nn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Zt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return jr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),jr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=fi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,oi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ys(o,o===St&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(St._ts&&(Y_(St,xl(r,St)),q_=Tn.frame),Tn.frame>=sp){sp+=Cn.autoSleep||120;var s=St._first;if((!s||!s._ts)&&Cn.autoSleep&&Tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Tn.sleep()}}},e}(jo);Pn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var GA=function(e,t,i,r,s,o,a){var l=new _n(this._pt,e,t,0,1,Mg,null,s),c=0,u=0,f,h,d,g,_,m,p,A;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=$o(r)),o&&(A=[i,r],o(A,e,t),i=A[0],r=A[1]),h=i.match(Bc)||[];f=Bc.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Bc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(V_.test(r)||p)&&(l.e=0),this._pt=l,l},Qf=function(e,t,i,r,s,o,a,l,c,u){Tt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Tt(f)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Tt(f)?c?YA:Sg:th,g;if(Ht(r)&&(~r.indexOf("random(")&&(r=$o(r)),r.charAt(1)==="="&&(g=Fs(h,r)+(Kt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||af)return!isNaN(h*r)&&r!==""?(g=new _n(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?KA:yg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&jf(t,r),GA.call(this,e,t,h,r,d,l||Cn.stringFilter,c))},WA=function(e,t,i,r,s){if(Tt(e)&&(e=Po(e,s,t,i,r)),!pi(e)||e.style&&e.nodeType||Jt(e)||k_(e))return Ht(e)?Po(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Po(e[a],s,t,i,r);return o},gg=function(e,t,i,r,s,o){var a,l,c,u;if(En[e]&&(a=new En[e]).init(s,a.rawVars?t[e]:WA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new _n(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Cs))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},tr,af,eh=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,A=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Xf,v=e.timeline,y,T,C,P,x,M,I,U,F,X,$,B,G;if(v&&(!h||!s)&&(s="none"),e._ease=Kr(s,Xs.ease),e._yEase=f?dg(Kr(f===!0?s:f,Xs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(U=m[0]?Yr(m[0]).harness:0,B=U&&r[U.prop],y=vl(r,Kf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ja:vA),_._lazy=0),o){if(hr(e._startAt=Lt.set(m,Pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return An(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!a&&!d)&&e._startAt.revert(Ja),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=Pn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&pn(l),immediateRender:a,stagger:0,parent:p},y),B&&(C[U.prop]=B),hr(e._startAt=Lt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(Ja):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Zt,Zt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&pn(l)||l&&!g,T=0;T<m.length;T++){if(x=m[T],I=x._gsap||Jf(m)[T]._gsap,e._ptLookup[T]=X={},ef[I.id]&&lr.length&&gl(),$=A===m?T:A.indexOf(x),U&&(F=new U).init(x,B||y,e,$,A)!==!1&&(e._pt=P=new _n(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){X[V]=P}),F.priority&&(M=1)),!U||B)for(C in y)En[C]&&(F=gg(C,y,e,$,x,A))?F.priority&&(M=1):X[C]=P=Qf.call(e,x,C,"get",y[C],$,A,0,r.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),b&&e._pt&&(tr=e,St.killTweensOf(x,X,e.globalTime(t)),G=!e.parent,tr=0),e._pt&&l&&(ef[I.id]=1)}M&&Eg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,h&&t<=0&&v.render(fi,!0,!0)},XA=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return af=1,e.vars[t]="+=0",eh(e,a),af=0,l?Xo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=At(i)+Kt(f.e)),f.b&&(f.b=u.s+Kt(f.b))},qA=function(e,t){var i=e[0]?Yr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=qs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},$A=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Po=function(e,t,i,r,s){return Tt(e)?e.call(t,i,r,s):Ht(e)&&~e.indexOf("random(")?$o(e):e},vg=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xg={};mn(vg+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return xg[n]=1});var Lt=function(n){O_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Co(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,A=r.parent||St,b=(Jt(i)||k_(i)?Ni(i[0]):"length"in r)?[i]:On(i),v,y,T,C,P,x,M,I;if(a._targets=b.length?Jf(b):Xo("GSAP target "+i+" not found. https://gsap.com",!Cn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||za(c)||za(u)){if(r=a.vars,v=a.timeline=new on({data:"nested",defaults:_||{},targets:A&&A.data==="nested"?A.vars.targets:b}),v.kill(),v.parent=v._dp=Ai(a),v._start=0,h||za(c)||za(u)){if(C=b.length,M=h&&ig(h),pi(h))for(P in h)~vg.indexOf(P)&&(I||(I={}),I[P]=h[P]);for(y=0;y<C;y++)T=vl(r,xg),T.stagger=0,p&&(T.yoyoEase=p),I&&qs(T,I),x=b[y],T.duration=+Po(c,Ai(a),y,x,b),T.delay=(+Po(u,Ai(a),y,x,b)||0)-a._delay,!h&&C===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(x,T,M?M(y,x,b):0),v._ease=Ze.none;v.duration()?c=u=0:a.timeline=0}else if(g){Co(Pn(v.vars.defaults,{ease:"none"})),v._ease=Kr(g.ease||r.ease||"none");var U=0,F,X,$;if(Jt(g))g.forEach(function(B){return v.to(b,B,">")}),v.duration();else{T={};for(P in g)P==="ease"||P==="easeEach"||$A(P,g[P],T,g.easeEach);for(P in T)for(F=T[P].sort(function(B,G){return B.t-G.t}),U=0,y=0;y<F.length;y++)X=F[y],$={ease:X.e,duration:(X.t-(y?F[y-1].t:0))/100*c},$[P]=X.v,v.to(b,$,U),U+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Xf&&(tr=Ai(a),St.killTweensOf(b),tr=0),oi(A,Ai(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===It(A._time)&&pn(f)&&TA(Ai(a))&&A.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&Q_(Ai(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Zt&&!u?l:r<Zt?0:r,h,d,g,_,m,p,A,b,v;if(!c)AA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=It(f%_),f===l?(g=this._repeat,h=c):(m=It(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=$s(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(b&&this._yEase&&pg(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(It(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(eg(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(v||this._ease)(h/c),this._from&&(this.ratio=A=1-A),h&&!a&&!s&&!g&&(An(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(A,d.d),d=d._next;b&&b.render(r<0?r:b._dur*b._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&tf(this,r,s,o),An(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&An(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&tf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&hr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(An(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Yo||Tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||eh(this,c),u=this._ease(c/this._dur),XA(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Wl(this,0),this.parent||Z_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,tr&&tr.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?On(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&MA(a,l))return s==="all"&&(this._pt=0),xo(this);for(f=this._op=this._op||[],s!=="all"&&(Ht(s)&&(_={},mn(s,function(A){return _[A]=1}),s=_),s=qA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Hl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&xo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ro(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ro(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return St.killTweensOf(r,s,o)},e}(jo);Pn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(n){Lt[n]=function(){var e=new on,t=rf.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var th=function(e,t,i){return e[t]=i},Sg=function(e,t,i){return e[t](i)},YA=function(e,t,i,r){return e[t](r.fp,i)},jA=function(e,t,i){return e.setAttribute(t,i)},nh=function(e,t){return Tt(e[t])?Sg:qf(e[t])&&e.setAttribute?jA:th},yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mg=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},ih=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ZA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},JA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Hl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},QA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Eg=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},_n=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||yg,this.d=l||this,this.set=c||th,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=QA,this.m=i,this.mt=s,this.tween=r},n}();mn(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Kf[n]=1});Rn.TweenMax=Rn.TweenLite=Lt;Rn.TimelineLite=Rn.TimelineMax=on;St=new on({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Cn.stringFilter=hg;var Zr=[],el={},e1=[],fp=0,t1=0,Gc=function(e){return(el[e]||e1).map(function(t){return t()})},lf=function(){var e=Date.now(),t=[];e-fp>2&&(Gc("matchMediaInit"),Zr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ni.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Gc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),fp=e,Gc("matchMedia"))},Tg=function(){function n(t,i){this.selector=i&&sf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=t1++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Tt(i)&&(s=r,r=i,i=Tt);var o=this,a=function(){var c=xt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=sf(s)),xt=o,f=r.apply(o,arguments),Tt(f)&&o._r.push(f),xt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Tt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=xt;xt=null,i(this),xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Zr.length;o--;)Zr[o].id===this.id&&Zr.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),n1=function(){function n(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){pi(i)||(i={matches:i});var o=new Tg(0,s||this.scope),a=o.conditions={},l,c,u;xt&&!o.selector&&(o.selector=xt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ni.matchMedia(i[c]),l&&(Zr.indexOf(o)<0&&Zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lf):l.addEventListener("change",lf)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return cg(r)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return St.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ht(e)&&(e=On(e)[0]);var s=Yr(e||{}).get,o=i?K_:j_;return i==="native"&&(i=""),e&&(t?o((En[t]&&En[t].get||s)(e,t,i,r)):function(a,l,c){return o((En[a]&&En[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=On(e),e.length>1){var r=e.map(function(u){return vn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=En[t],a=Yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Cs._pt=0,f.init(e,i?u+i:u,Cs,0,[e]),f.render(1,f),Cs._pt&&ih(1,Cs)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=vn.to(e,Pn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return St.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Kr(e.ease,Xs.ease)),op(Xs,e||{})},config:function(e){return op(Cn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!En[a]&&!Rn[a]&&Xo(t+" effect requires "+a+" plugin.")}),kc[t]=function(a,l,c){return i(On(a),Pn(l||{},s),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(kc[t](a,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=Kr(t)},parseEase:function(e,t){return arguments.length?Kr(e,t):Ze},getById:function(e){return St.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new on(e),r,s;for(i.smoothChildTiming=pn(e.smoothChildTiming),St.remove(i),i._dp=0,i._time=i._tTime=St._time,r=St._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&oi(i,r,r._start-r._delay),r=s;return oi(St,i,0),i},context:function(e,t){return e?new Tg(e,t):xt},matchMedia:function(e){return new n1(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||lf()},addEventListener:function(e,t){var i=el[e]||(el[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=el[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:UA,wrapYoyo:NA,distribute:ig,random:sg,snap:rg,normalize:IA,getUnit:Kt,clamp:RA,splitColor:ug,toArray:On,selector:sf,mapRange:ag,pipe:DA,unitize:LA,interpolate:FA,shuffle:ng},install:W_,effects:kc,ticker:Tn,updateRoot:on.updateRoot,plugins:En,globalTimeline:St,core:{PropTween:_n,globals:X_,Tween:Lt,Timeline:on,Animation:jo,getCache:Yr,_removeLinkedListItem:Hl,reverting:function(){return Wt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return Xf=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Sl[n]=Lt[n]});Tn.add(on.updateRoot);Cs=Sl.to({},{duration:0});var i1=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},r1=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=i1(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Wc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ht(s)&&(l={},mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}r1(a,s)}}}},vn=Sl.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Wt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Wc("roundProps",of),Wc("modifiers"),Wc("snap",rg))||Sl;Lt.version=on.version=vn.version="3.12.7";G_=1;$f()&&js();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hp,nr,Os,rh,Wr,dp,sh,s1=function(){return typeof window<"u"},Fi={},Fr=180/Math.PI,Bs=Math.PI/180,Es=Math.atan2,pp=1e8,oh=/([A-Z])/g,o1=/(left|right|width|margin|padding|x)/i,a1=/[\s,\(]\S/,ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},l1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},c1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},u1=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},bg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ag=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},f1=function(e,t,i){return e.style[t]=i},h1=function(e,t,i){return e.style.setProperty(t,i)},d1=function(e,t,i){return e._gsap[t]=i},p1=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},m1=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},_1=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},yt="transform",gn=yt+"Origin",g1=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Fi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=wi(r,a)}):this.tfm[e]=o.x?o[e]:wi(r,e),e===gn&&(this.tfm.zOrigin=o.zOrigin);else return ci.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(gn,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},wg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},v1=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(oh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sh(),(!s||!s.isStart)&&!i[yt]&&(wg(i),r.zOrigin&&i[gn]&&(i[gn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cg=function(e,t){var i={target:e,props:[],revert:v1,save:g1};return e._gsap||vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Rg,uf=function(e,t){var i=nr.createElementNS?nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return i&&i.style?i:nr.createElement(e)},hi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(oh,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ks(t)||t,1)||""},mp="O,Moz,ms,Ms,Webkit".split(","),Ks=function(e,t,i){var r=t||Wr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?mp[o]:"")+e},ff=function(){s1()&&window.document&&(hp=window,nr=hp.document,Os=nr.documentElement,Wr=uf("div")||{style:{}},uf("div"),yt=Ks(yt),gn=yt+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rg=!!Ks("perspective"),sh=vn.core.reverting,rh=1)},_p=function(e){var t=e.ownerSVGElement,i=uf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Os.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Os.removeChild(i),s},gp=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Pg=function(e){var t,i;try{t=e.getBBox()}catch{t=_p(e),i=1}return t&&(t.width||t.height)||i||(t=_p(e)),t&&!t.width&&!t.x&&!t.y?{x:+gp(e,["x","cx","x1"])||0,y:+gp(e,["y","cy","y1"])||0,width:0,height:0}:t},Dg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pg(e))},ts=function(e,t){if(t){var i=e.style,r;t in Fi&&t!==gn&&(t=yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(oh,"-$1").toLowerCase())):i.removeAttribute(t)}},ir=function(e,t,i,r,s,o){var a=new _n(e._pt,t,i,0,1,o?Ag:bg);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},vp={deg:1,rad:1,turn:1},x1={grid:1,flex:1},dr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Wr.style,l=o1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||vp[r]||vp[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&Dg(e),(d||o==="%")&&(Fi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],At(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Tn.time&&!m.uncache)return At(s/m.width*f);if(d&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=f+r,g=e[u],A?e.style[t]=A:ts(e,t)}else(d||o==="%")&&!x1[hi(_,"display")]&&(a.position=hi(e,"position")),_===e&&(a.position="static"),_.appendChild(Wr),g=Wr[u],_.removeChild(Wr),a.position="absolute";return l&&d&&(m=Yr(_),m.time=Tn.time,m.width=_[u]),At(h?g*s/f:g&&s?f/g*s:0)},wi=function(e,t,i,r){var s;return rh||ff(),t in ci&&t!=="transform"&&(t=ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fi[t]&&t!=="transform"?(s=Zo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ml(hi(e,gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yl[t]&&yl[t](e,t,i)||hi(e,t)||$_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?dr(e,t,s,i)+i:s},S1=function(e,t,i,r){if(!i||i==="none"){var s=Ks(t,e,1),o=s&&hi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=hi(e,"borderTopColor"))}var a=new _n(this._pt,e.style,t,0,1,Mg),l=0,c=0,u,f,h,d,g,_,m,p,A,b,v,y;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=hi(e,t)||r,_?e.style[t]=_:ts(e,t)),u=[i,r],hg(u),i=u[0],r=u[1],h=i.match(ws)||[],y=r.match(ws)||[],y.length){for(;f=ws.exec(r);)m=f[0],A=r.substring(l,f.index),g?g=(g+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Fs(d,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=ws.lastIndex-b.length,b||(b=b||Cn.units[t]||v,l===r.length&&(r+=b,a.e+=b)),v!==b&&(d=dr(e,t,_,b)||0),a._pt={_next:a._pt,p:A||c===1?A:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ag:bg;return V_.test(r)&&(a.e=0),this._pt=a,a},xp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},y1=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=xp[i]||i,t[1]=xp[r]||r,t.join(" ")},M1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Fi[a]&&(l=1,a=a==="transformOrigin"?gn:yt),ts(i,a);l&&(ts(i,yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Zo(i,1),o.uncache=1,wg(r)))}},yl={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new _n(e._pt,t,i,0,0,M1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ko=[1,0,0,1,0,0],Lg={},Ig=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sp=function(e){var t=hi(e,yt);return Ig(t)?Ko:t.substr(7).match(z_).map(At)},ah=function(e,t){var i=e._gsap||Yr(e),r=e.style,s=Sp(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ko:s):(s===Ko&&!e.offsetParent&&e!==Os&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Os.appendChild(e)),s=Sp(e),l?r.display=l:ts(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hf=function(e,t,i,r,s,o){var a=e._gsap,l=s||ah(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],A=l[5],b=t.split(" "),v=parseFloat(b[0])||0,y=parseFloat(b[1])||0,T,C,P,x;i?l!==Ko&&(C=d*m-g*_)&&(P=v*(m/C)+y*(-_/C)+(_*A-m*p)/C,x=v*(-g/C)+y*(d/C)-(d*A-g*p)/C,v=P,y=x):(T=Pg(e),v=T.x+(~b[0].indexOf("%")?v/100*T.width:v),y=T.y+(~(b[1]||b[0]).indexOf("%")?y/100*T.height:y)),r||r!==!1&&a.smooth?(p=v-c,A=y-u,a.xOffset=f+(p*d+A*_)-p,a.yOffset=h+(p*g+A*m)-A):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=y,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[gn]="0px 0px",o&&(ir(o,a,"xOrigin",c,v),ir(o,a,"yOrigin",u,y),ir(o,a,"xOffset",f,a.xOffset),ir(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},Zo=function(e,t){var i=e._gsap||new _g(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hi(e,gn)||"0",u,f,h,d,g,_,m,p,A,b,v,y,T,C,P,x,M,I,U,F,X,$,B,G,V,pe,_e,Se,Re,Xe,Y,fe;return u=f=h=_=m=p=A=b=v=0,d=g=1,i.svg=!!(e.getCTM&&Dg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),C=ah(e,i.svg),i.svg&&(i.uncache?(V=e.getBBox(),c=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),hf(e,G||c,!!G||i.originIsAbsolute,i.smooth!==!1,C)),y=i.xOrigin||0,T=i.yOrigin||0,C!==Ko&&(I=C[0],U=C[1],F=C[2],X=C[3],u=$=C[4],f=B=C[5],C.length===6?(d=Math.sqrt(I*I+U*U),g=Math.sqrt(X*X+F*F),_=I||U?Es(U,I)*Fr:0,A=F||X?Es(F,X)*Fr+_:0,A&&(g*=Math.abs(Math.cos(A*Bs))),i.svg&&(u-=y-(y*I+T*F),f-=T-(y*U+T*X))):(fe=C[6],Xe=C[7],_e=C[8],Se=C[9],Re=C[10],Y=C[11],u=C[12],f=C[13],h=C[14],P=Es(fe,Re),m=P*Fr,P&&(x=Math.cos(-P),M=Math.sin(-P),G=$*x+_e*M,V=B*x+Se*M,pe=fe*x+Re*M,_e=$*-M+_e*x,Se=B*-M+Se*x,Re=fe*-M+Re*x,Y=Xe*-M+Y*x,$=G,B=V,fe=pe),P=Es(-F,Re),p=P*Fr,P&&(x=Math.cos(-P),M=Math.sin(-P),G=I*x-_e*M,V=U*x-Se*M,pe=F*x-Re*M,Y=X*M+Y*x,I=G,U=V,F=pe),P=Es(U,I),_=P*Fr,P&&(x=Math.cos(P),M=Math.sin(P),G=I*x+U*M,V=$*x+B*M,U=U*x-I*M,B=B*x-$*M,I=G,$=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=At(Math.sqrt(I*I+U*U+F*F)),g=At(Math.sqrt(B*B+fe*fe)),P=Es($,B),A=Math.abs(P)>2e-4?P*Fr:0,v=Y?1/(Y<0?-Y:Y):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ig(hi(e,yt)),G&&e.setAttribute("transform",G))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(d*=-1,A+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,A+=A<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=At(d),i.scaleY=At(g),i.rotation=At(_)+a,i.rotationX=At(m)+a,i.rotationY=At(p)+a,i.skewX=A+a,i.skewY=b+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[gn]=Ml(c)),i.xOffset=i.yOffset=0,i.force3D=Cn.force3D,i.renderTransform=i.svg?T1:Rg?Ug:E1,i.uncache=0,i},Ml=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xc=function(e,t,i){var r=Kt(t);return At(parseFloat(t)+parseFloat(dr(e,"x",i+"px",r)))+r},E1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ug(e,t)},Pr="0deg",mo="0px",Dr=") ",Ug=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,A=i.target,b=i.zOrigin,v="",y=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==Pr||u!==Pr)){var T=parseFloat(u)*Bs,C=Math.sin(T),P=Math.cos(T),x;T=parseFloat(f)*Bs,x=Math.cos(T),o=Xc(A,o,C*x*-b),a=Xc(A,a,-Math.sin(T)*-b),l=Xc(A,l,P*x*-b+b)}m!==mo&&(v+="perspective("+m+Dr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(y||o!==mo||a!==mo||l!==mo)&&(v+=l!==mo||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Dr),c!==Pr&&(v+="rotate("+c+Dr),u!==Pr&&(v+="rotateY("+u+Dr),f!==Pr&&(v+="rotateX("+f+Dr),(h!==Pr||d!==Pr)&&(v+="skew("+h+", "+d+Dr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Dr),A.style[yt]=v||"translate(0, 0)"},T1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,A=i.forceCSS,b=parseFloat(o),v=parseFloat(a),y,T,C,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bs,c*=Bs,y=Math.cos(l)*f,T=Math.sin(l)*f,C=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Bs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),C*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),y*=x,T*=x)),y=At(y),T=At(T),C=At(C),P=At(P)):(y=f,P=h,T=C=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=dr(d,"x",o,"px"),v=dr(d,"y",a,"px")),(g||_||m||p)&&(b=At(b+g-(g*y+_*C)+m),v=At(v+_-(g*T+_*P)+p)),(r||s)&&(x=d.getBBox(),b=At(b+r/100*x.width),v=At(v+s/100*x.height)),x="matrix("+y+","+T+","+C+","+P+","+b+","+v+")",d.setAttribute("transform",x),A&&(d.style[yt]=x)},b1=function(e,t,i,r,s){var o=360,a=Ht(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*pp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*pp)%o-~~(c/o)*o)),e._pt=h=new _n(e._pt,t,i,r,c,l1),h.e=u,h.u="deg",e._props.push(i),h},yp=function(e,t){for(var i in t)e[i]=t[i];return e},A1=function(e,t,i){var r=yp({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[yt]=t,a=Zo(i,1),ts(i,yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[yt],o[yt]=t,a=Zo(i,1),o[yt]=c);for(l in Fi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Kt(c),g=Kt(u),f=d!==g?dr(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new _n(e._pt,a,l,f,h-f,cf),e._pt.u=g||0,e._props.push(l));yp(a,r)};mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});yl[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return wi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Ng={name:"css",register:ff,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,A,b,v,y,T,C,P;rh||ff(),this.styles=this.styles||Cg(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(En[_]&&gg(_,t,i,r,e,s)))){if(d=typeof u,g=yl[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=$o(u)),g)g(this,e,_,u,i)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",cr.lastIndex=0,cr.test(c)||(m=Kt(c),p=Kt(u)),p?m!==p&&(c=dr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Ht(c)&&~c.indexOf("random(")&&(c=$o(c)),Kt(c+"")||c==="auto"||(c+=Cn.units[_]||Kt(wi(e,_))||""),(c+"").charAt(1)==="="&&(c=wi(e,_))):c=wi(e,_),h=parseFloat(c),A=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),A&&(u=u.substr(2)),f=parseFloat(u),_ in ci&&(_==="autoAlpha"&&(h===1&&wi(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),ir(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ci[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Fi,b){if(this.styles.save(_),v||(y=e._gsap,y.renderTransform&&!t.parseTransform||Zo(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new _n(this._pt,a,yt,0,1,y.renderTransform,y,0,-1),v.dep=1),_==="scale")this._pt=new _n(this._pt,y,"scaleY",y.scaleY,(A?Fs(y.scaleY,A+f):f)-y.scaleY||0,cf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(gn,0,a[gn]),u=y1(u),y.svg?hf(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&ir(this,y,"zOrigin",y.zOrigin,p),ir(this,a,_,Ml(c),Ml(u)));continue}else if(_==="svgOrigin"){hf(e,u,1,T,0,this);continue}else if(_ in Lg){b1(this,y,_,h,A?Fs(h,A+u):u);continue}else if(_==="smoothOrigin"){ir(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){A1(this,u,e);continue}}else _ in a||(_=Ks(_)||_);if(b||(f||f===0)&&(h||h===0)&&!a1.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Kt(u)||(_ in Cn.units?Cn.units[_]:m),m!==p&&(h=dr(e,_,c,p)),this._pt=new _n(this._pt,b?y:a,_,h,(A?Fs(h,A+f):f)-h,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?u1:cf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=c1);else if(_ in a)S1.call(this,e,_,c,A?A+u:u);else if(_ in e)this.add(e,_,c||e[_],A?A+u:u,r,s);else if(_!=="parseTransform"){jf(_,u);continue}b||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),o.push(_)}}C&&Eg(this)},render:function(e,t){if(t.tween._time||!sh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:wi,aliases:ci,getSetter:function(e,t,i){var r=ci[t];return r&&r.indexOf(",")<0&&(t=r),t in Fi&&t!==gn&&(e._gsap.x||wi(e,"x"))?i&&dp===i?t==="scale"?p1:d1:(dp=i||{})&&(t==="scale"?m1:_1):e.style&&!qf(e.style[t])?f1:~t.indexOf("-")?h1:nh(e,t)},core:{_removeProperty:ts,_getMatrix:ah}};vn.utils.checkPrefix=Ks;vn.core.getStyleSaver=Cg;(function(n,e,t,i){var r=mn(n+","+e+","+t,function(s){Fi[s]=1});mn(e,function(s){Cn.units[s]="deg",Lg[s]=1}),ci[r[13]]=n+","+e,mn(i,function(s){var o=s.split(":");ci[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Cn.units[n]="px"});vn.registerPlugin(Ng);var Fg=vn.registerPlugin(Ng)||vn;Fg.core.Tween;const Lr=60,w1=`
attribute vec3 instanceColor;
attribute float instanceRotation;
attribute float instanceState;
attribute float flipProgress;
attribute float animationTime; // 添加时间戳属性
varying vec3 vColor;
varying float vState;
varying float vFlipProgress;
varying float vAnimationTime; // 传递时间戳到片元着色器

void main() {
    vColor = instanceColor;
    vState = instanceState;
    vFlipProgress = flipProgress;
    vAnimationTime = animationTime; // 传递时间戳
    
    vec3 pos = position;
    if (flipProgress > 0.0) {
    float angle = flipProgress * 3.14159;
    float height = 100.0 * sin(angle);
    pos.y += height;
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
}
`,C1=`
varying vec3 vColor;
varying float vState;
varying float vFlipProgress;
varying float vAnimationTime; // 接收时间戳

void main() {
    vec3 finalColor = vColor;
    gl_FragColor = vec4(finalColor, 1.0 - vFlipProgress);
}
`,R1={__name:"Background",setup(n){const e=Bi(),t=mt(null),i=Lr*Math.sqrt(3)/2,r={base:new et(12443902),target:new et(16763101),wireframe:new et(16777215)};let s,o,a,l,c,u;const f={positions:new Float32Array,adjacentTriangles:[],groups:new Uint8Array,isFlipped:new Uint8Array},h=()=>{const v=t.value;s=new vy,o=new D_(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3),o.position.z=100,a=new hA({antialias:!0,alpha:!0,powerPreference:"high-performance"}),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(16777215,1),v.appendChild(a.domElement);const y=new wy(16777215,.6);s.add(y),c=new Ry,u=new ct,d(),A()},d=()=>{const v=Math.ceil(window.innerHeight/Lr)+2,y=Math.ceil(window.innerWidth/i)+2,T=v*y*2,C=new _r,P=new Float32Array([0,0,0,0,Lr,0,i,Lr/2,0]);C.setAttribute("position",new kn(P,3));const x=new Float32Array(T*3),M=new Float32Array(T),I=new Float32Array(T),U=new Float32Array(T),F=new Float32Array(T),X=new Float32Array(T).fill(0),$=new Ui({vertexShader:w1,fragmentShader:C1,side:si,transparent:!0,uniforms:{}});l=new yy(C,$,T),l.instanceMatrix.setUsage(fd);let B=0;const G=new gt,V=new J,pe=new no,_e=new J(1,1,1);f.positions=new Array(T*3),f.adjacentTriangles=new Array(T),f.groups=new Uint8Array(T),f.isFlipped=new Uint8Array(T);const Se=[],Re=Y=>{Se.findIndex(([fe,ve,O])=>fe===f.positions[Y*3]&&ve===f.positions[Y*3+1]&&O===f.positions[Y*3+2])!==-1?F[Y]=1:F[Y]=0};for(let Y=0;Y<v;Y++)for(let fe=0;fe<y;fe++)for(let ve=0;ve<2;ve++){const O=fe%2===1?Lr/2:0,oe=fe*i-window.innerWidth/2,le=Y*Lr-window.innerHeight/2-Lr+O,ae=ve%2===1?Math.PI/3:0;V.set(oe,le,0),pe.setFromAxisAngle(new J(0,0,1),ae),G.compose(V,pe,_e),l.setMatrixAt(B,G);const De=r.base.clone();De.offsetHSL((Math.random()-.5)*.02,(Math.random()-.5)*.03,(Math.random()-.5)*.04),x[B*3]=De.r,x[B*3+1]=De.g,x[B*3+2]=De.b,M[B]=ae,I[B]=0,U[B]=0,f.positions[B*3]=fe,f.positions[B*3+1]=Y,f.positions[B*3+2]=ve%2,Re(B),f.groups[B]=F[B],f.isFlipped[B]=0,B++}for(let Y=0;Y<T;Y++)f.adjacentTriangles[Y]=g(Y);console.log("检查三角形位置:",f.positions);const Xe=new Ji(x,3);Xe.usage=fd,C.setAttribute("instanceColor",Xe),C.setAttribute("instanceRotation",new Ji(M,1)),C.setAttribute("instanceState",new Ji(I,1)),C.setAttribute("flipProgress",new Ji(U,1)),C.setAttribute("instanceGroup",new Ji(F,1)),C.setAttribute("animationId",new Ji(X,1)),s.add(l),l.instanceMatrix.needsUpdate=!0},g=v=>{const y=f.positions[v*3],T=f.positions[v*3+1],C=[];for(let P=0;P<f.positions.length/3;P++){if(P===v)continue;const x=f.positions[P*3],M=f.positions[P*3+1];if(v%2!==P%2){if(y===x&&T===M){C.push(P);continue}v%2===0?y%2===0?(y===x-1&&T===M||y===x-1&&T===M+1)&&C.push(P):(y===x-1&&T===M||y===x-1&&T===M-1)&&C.push(P):y%2===0?(y===x+1&&T===M||y===x+1&&T===M+1)&&C.push(P):(y===x+1&&T===M||y===x+1&&T===M-1)&&C.push(P)}}return C};let _=0;const m=v=>{const y=[],T=new Set,C=`${++_}`;console.log("New animationStartId: "+C),y.push([v]),T.add(v);const P=()=>{const U=y[y.length-1],F=new Set;U.forEach(X=>{const $=f.adjacentTriangles[X];$&&$.forEach(B=>{!T.has(B)&&f.groups[B]===f.groups[X]&&(F.add(B),T.add(B))})}),F.size>0&&(y.push(Array.from(F)),P())};P();const M=(()=>{const U=Math.random(),F=.3+Math.random()*.2,X=.35+Math.random()*.2;console.log("饱和度："+F+"亮度："+X);const $=new et;$.setHSL(U,F,X);const B=`#${$.getHexString()}`;return e.setTargetColor(B),$})(),I=async(U=0)=>{if(U>=y.length)return;const F=y[U],X=l.geometry,$=X.getAttribute("instanceState"),B=X.getAttribute("instanceColor"),G=X.getAttribute("animationId"),V=F.map(pe=>new Promise(_e=>{if(G.array[pe]>+C){_e();return}$.setX(pe,1),$.needsUpdate=!0,G.setX(pe,C),G.needsUpdate=!0;const Se=M.clone(),Re=(Math.random()-.5)*.02,Xe=(Math.random()-.5)*.03,Y=(Math.random()-.5)*.04;Se.offsetHSL(Re,Xe,Y),Fg.timeline({onStart:()=>{B.array[pe*3]=Se.r,B.array[pe*3+1]=Se.g,B.array[pe*3+2]=Se.b,B.needsUpdate=!0},onComplete:()=>{_e()}}).to({},{duration:.5/(U+1),ease:"power1.inOut",onUpdate:()=>{X.attributes.instanceColor.needsUpdate=!0}})}));await Promise.all(V),setTimeout(()=>{I(U+1)},10)};I()},p=v=>{v.preventDefault(),u.x=v.clientX/window.innerWidth*2-1,u.y=-(v.clientY/window.innerHeight)*2+1,c.setFromCamera(u,o);const y=c.intersectObject(l);if(y.length>0){const T=y[0].instanceId;console.log("点击了三角形:",T),console.log("Position: ["+f.positions[T*3]+","+f.positions[T*3+1]+","+f.positions[T*3+2]+"]"),e.settings.isAddingGroup?f.groups[T]=f.groups[T]===1?0:1:m(T)}},A=()=>{requestAnimationFrame(A),a.render(s,o)},b=()=>{o&&a&&(o.left=window.innerWidth/-2,o.right=window.innerWidth/2,o.top=window.innerHeight/2,o.bottom=window.innerHeight/-2,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),s.remove(l),d())};return Qs(()=>{h(),window.addEventListener("click",p),window.addEventListener("resize",b)}),eo(()=>{window.removeEventListener("click",p),window.removeEventListener("resize",b),a&&a.dispose()}),(v,y)=>(Ue(),Oe("div",{class:"canvas-container",ref_key:"containerRef",ref:t},null,512))}},P1=ki(R1,[["__scopeId","data-v-730d1c86"]]),D1={class:"home-container"},L1={__name:"Home",setup(n){const e=Bi(),t=mt(null),i=()=>{t.value&&(t.value.style.transform="translateZ(20px) translateY(-2px) ",t.value.style.boxShadow="0 10px 20px rgba(0,0,0,0.1)")},r=o=>{if(!t.value)return;const a=t.value.getBoundingClientRect(),l=a.left+a.width/2,c=a.top+a.height/2,u=(o.clientX-l)/(a.width/2),f=(o.clientY-c)/(a.height/2),h=15,d=u*h,g=-f*h;t.value.style.transform=`translateZ(20px) translateY(-2px) rotateX(${g}deg) rotateY(${d}deg)`},s=()=>{t.value&&(t.value.style.transform="translateZ(0) translateY(0) rotateX(0) rotateY(0)",t.value.style.boxShadow="none")};return(o,a)=>(Ue(),Oe("div",D1,[ne("div",{class:"blog-card",ref_key:"blogCard",ref:t,onClick:a[0]||(a[0]=(...l)=>wt(e).toggleShowingBg&&wt(e).toggleShowingBg(...l)),onMouseenter:i,onMousemove:a[1]||(a[1]=l=>r(l)),onMouseleave:s},a[2]||(a[2]=[ne("h1",null,"My blog",-1),ne("div",{class:"blog-content"},[ne("p",null,"Welcome")],-1)]),544)]))}},I1=ki(L1,[["__scopeId","data-v-5c97353e"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof document<"u";function Og(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function U1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Og(n.default)}const st=Object.assign;function qc(n,e){const t={};for(const i in e){const r=e[i];t[i]=Qn(r)?r.map(n):n(r)}return t}const Do=()=>{},Qn=Array.isArray,Bg=/#/g,N1=/&/g,F1=/\//g,O1=/=/g,B1=/\?/g,kg=/\+/g,k1=/%5B/g,z1=/%5D/g,zg=/%5E/g,V1=/%60/g,Vg=/%7B/g,H1=/%7C/g,Hg=/%7D/g,G1=/%20/g;function lh(n){return encodeURI(""+n).replace(H1,"|").replace(k1,"[").replace(z1,"]")}function W1(n){return lh(n).replace(Vg,"{").replace(Hg,"}").replace(zg,"^")}function df(n){return lh(n).replace(kg,"%2B").replace(G1,"+").replace(Bg,"%23").replace(N1,"%26").replace(V1,"`").replace(Vg,"{").replace(Hg,"}").replace(zg,"^")}function X1(n){return df(n).replace(O1,"%3D")}function q1(n){return lh(n).replace(Bg,"%23").replace(B1,"%3F")}function $1(n){return n==null?"":q1(n).replace(F1,"%2F")}function Jo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Y1=/\/$/,j1=n=>n.replace(Y1,"");function $c(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Q1(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Jo(o)}}function K1(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Mp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Z1(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Zs(e.matched[i],t.matched[r])&&Gg(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Zs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Gg(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!J1(n[t],e[t]))return!1;return!0}function J1(n,e){return Qn(n)?Ep(n,e):Qn(e)?Ep(e,n):n===e}function Ep(n,e){return Qn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Q1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const $i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qo;(function(n){n.pop="pop",n.push="push"})(Qo||(Qo={}));var Lo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Lo||(Lo={}));function ew(n){if(!n)if(bs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),j1(n)}const tw=/^[^#]+#/;function nw(n,e){return n.replace(tw,"#")+e}function iw(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Xl=()=>({left:window.scrollX,top:window.scrollY});function rw(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=iw(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tp(n,e){return(history.state?history.state.position-e:-1)+n}const pf=new Map;function sw(n,e){pf.set(n,e)}function ow(n){const e=pf.get(n);return pf.delete(n),e}let aw=()=>location.protocol+"//"+location.host;function Wg(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Mp(l,"")}return Mp(t,n)+i+r}function lw(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Wg(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:Qo.pop,direction:m?m>0?Lo.forward:Lo.back:Lo.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(st({},h.state,{scroll:Xl()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function bp(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Xl():null}}function cw(n){const{history:e,location:t}=window,i={value:Wg(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:aw()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=st({},e.state,bp(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:Xl()});s(u.current,u,!0);const f=st({},bp(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function uw(n){n=ew(n);const e=cw(n),t=lw(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=st({location:"",base:n,go:i,createHref:nw.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function fw(n){return typeof n=="string"||n&&typeof n=="object"}function Xg(n){return typeof n=="string"||typeof n=="symbol"}const qg=Symbol("");var Ap;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ap||(Ap={}));function Js(n,e){return st(new Error,{type:n,[qg]:!0},e)}function Ei(n,e){return n instanceof Error&&qg in n&&(e==null||!!(n.type&e))}const wp="[^/]+?",hw={sensitive:!1,strict:!1,start:!0,end:!0},dw=/[.+*?^${}()[\]/\\]/g;function pw(n,e){const t=st({},hw,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(dw,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const A=p||wp;if(A!==wp){d+=10;try{new RegExp(`(${A})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+v.message)}}let b=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,d+=20,m&&(d+=-8),_&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Qn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=Qn(p)?p.join("/"):p;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function mw(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $g(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=mw(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Cp(i))return 1;if(Cp(r))return-1}return r.length-i.length}function Cp(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const _w={type:0,value:""},gw=/[a-zA-Z0-9_]/;function vw(n){if(!n)return[[]];if(n==="/")return[[_w]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:gw.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function xw(n,e,t){const i=pw(vw(n.path),t),r=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Sw(n,e){const t=[],i=new Map;e=Lp({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=Pp(f);_.aliasOf=d&&d.record;const m=Lp(e,f),p=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const y of v)p.push(Pp(st({},_,{components:d?d.record.components:_.components,path:y,aliasOf:d?d.record:_})))}let A,b;for(const v of p){const{path:y}=v;if(h&&y[0]!=="/"){const T=h.record.path,C=T[T.length-1]==="/"?"":"/";v.path=h.record.path+(y&&C+y)}if(A=xw(v,h,m),d?d.alias.push(A):(b=b||A,b!==A&&b.alias.push(A),g&&f.name&&!Dp(A)&&o(f.name)),Yg(A)&&l(A),_.children){const T=_.children;for(let C=0;C<T.length;C++)s(T[C],A,d&&d.children[C])}d=d||A}return b?()=>{o(b)}:Do}function o(f){if(Xg(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=Ew(f,t);t.splice(h,0,f),f.record.name&&!Dp(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Js(1,{location:f});m=d.record.name,g=st(Rp(h.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Rp(f.params,d.keys.map(b=>b.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(b=>b.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(b=>b.re.test(h.path)),!d)throw Js(1,{location:f,currentLocation:h});m=d.record.name,g=st({},h.params,f.params),_=d.stringify(g)}const p=[];let A=d;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:_,params:g,matched:p,meta:Mw(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Rp(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Pp(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:yw(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yw(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Dp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Mw(n){return n.reduce((e,t)=>st(e,t.meta),{})}function Lp(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Ew(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;$g(n,e[s])<0?i=s:t=s+1}const r=Tw(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Tw(n){let e=n;for(;e=e.parent;)if(Yg(e)&&$g(n,e)===0)return e}function Yg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function bw(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(kg," "),o=s.indexOf("="),a=Jo(o<0?s:s.slice(0,o)),l=o<0?null:Jo(s.slice(o+1));if(a in e){let c=e[a];Qn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ip(n){let e="";for(let t in n){const i=n[t];if(t=X1(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Qn(i)?i.map(s=>s&&df(s)):[i&&df(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Aw(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Qn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ww=Symbol(""),Up=Symbol(""),ql=Symbol(""),jg=Symbol(""),mf=Symbol("");function _o(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Qi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Js(4,{from:t,to:e})):h instanceof Error?l(h):fw(h)?l(Js(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Yc(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Og(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Qi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=U1(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Qi(d,t,i,o,a,r)()}))}}return s}function Np(n){const e=Zn(ql),t=Zn(jg),i=Nt(()=>{const l=wt(n.to);return e.resolve(l)}),r=Nt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Zs.bind(null,u));if(h>-1)return h;const d=Fp(l[c-2]);return c>1&&Fp(u)===d&&f[f.length-1].path!==d?f.findIndex(Zs.bind(null,l[c-2])):h}),s=Nt(()=>r.value>-1&&Lw(t.params,i.value.params)),o=Nt(()=>r.value>-1&&r.value===t.matched.length-1&&Gg(t.params,i.value.params));function a(l={}){if(Dw(l)){const c=e[wt(n.replace)?"replace":"push"](wt(n.to)).catch(Do);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Nt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Cw(n){return n.length===1?n[0]:n}const Rw=Tm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Np,setup(n,{slots:e}){const t=ta(Np(n)),{options:i}=Zn(ql),r=Nt(()=>({[Op(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Op(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Cw(e.default(t));return n.custom?s:ks("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Pw=Rw;function Dw(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Lw(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Qn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Fp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Op=(n,e,t)=>n??e??t,Iw=Tm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Zn(mf),r=Nt(()=>n.route||i.value),s=Zn(Up,0),o=Nt(()=>{let c=wt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Nt(()=>r.value.matched[o.value]);Ha(Up,Nt(()=>o.value+1)),Ha(ww,a),Ha(mf,r);const l=mt();return Ls(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Zs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Bp(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=ks(h,st({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Bp(t.default,{Component:m,route:c})||m}}});function Bp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Uw=Iw;function Nw(n){const e=Sw(n.routes,n),t=n.parseQuery||bw,i=n.stringifyQuery||Ip,r=n.history,s=_o(),o=_o(),a=_o(),l=Fv($i);let c=$i;bs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qc.bind(null,O=>""+O),f=qc.bind(null,$1),h=qc.bind(null,Jo);function d(O,oe){let le,ae;return Xg(O)?(le=e.getRecordMatcher(O),ae=oe):ae=O,e.addRoute(ae,le)}function g(O){const oe=e.getRecordMatcher(O);oe&&e.removeRoute(oe)}function _(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,oe){if(oe=st({},oe||l.value),typeof O=="string"){const E=$c(t,O,oe.path),se=e.resolve({path:E.path},oe),ee=r.createHref(E.fullPath);return st(E,se,{params:h(se.params),hash:Jo(E.hash),redirectedFrom:void 0,href:ee})}let le;if(O.path!=null)le=st({},O,{path:$c(t,O.path,oe.path).path});else{const E=st({},O.params);for(const se in E)E[se]==null&&delete E[se];le=st({},O,{params:f(E)}),oe.params=f(oe.params)}const ae=e.resolve(le,oe),De=O.hash||"";ae.params=u(h(ae.params));const D=K1(i,st({},O,{hash:W1(De),path:ae.path})),L=r.createHref(D);return st({fullPath:D,hash:De,query:i===Ip?Aw(O.query):O.query||{}},ae,{redirectedFrom:void 0,href:L})}function A(O){return typeof O=="string"?$c(t,O,l.value.path):st({},O)}function b(O,oe){if(c!==O)return Js(8,{from:oe,to:O})}function v(O){return C(O)}function y(O){return v(st(A(O),{replace:!0}))}function T(O){const oe=O.matched[O.matched.length-1];if(oe&&oe.redirect){const{redirect:le}=oe;let ae=typeof le=="function"?le(O):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=A(ae):{path:ae},ae.params={}),st({query:O.query,hash:O.hash,params:ae.path!=null?{}:O.params},ae)}}function C(O,oe){const le=c=p(O),ae=l.value,De=O.state,D=O.force,L=O.replace===!0,E=T(le);if(E)return C(st(A(E),{state:typeof E=="object"?st({},De,E.state):De,force:D,replace:L}),oe||le);const se=le;se.redirectedFrom=oe;let ee;return!D&&Z1(i,ae,le)&&(ee=Js(16,{to:se,from:ae}),Se(ae,ae,!0,!1)),(ee?Promise.resolve(ee):M(se,ae)).catch(j=>Ei(j)?Ei(j,2)?j:_e(j):V(j,se,ae)).then(j=>{if(j){if(Ei(j,2))return C(st({replace:L},A(j.to),{state:typeof j.to=="object"?st({},De,j.to.state):De,force:D}),oe||se)}else j=U(se,ae,!0,L,De);return I(se,ae,j),j})}function P(O,oe){const le=b(O,oe);return le?Promise.reject(le):Promise.resolve()}function x(O){const oe=Y.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(O):O()}function M(O,oe){let le;const[ae,De,D]=Fw(O,oe);le=Yc(ae.reverse(),"beforeRouteLeave",O,oe);for(const E of ae)E.leaveGuards.forEach(se=>{le.push(Qi(se,O,oe))});const L=P.bind(null,O,oe);return le.push(L),ve(le).then(()=>{le=[];for(const E of s.list())le.push(Qi(E,O,oe));return le.push(L),ve(le)}).then(()=>{le=Yc(De,"beforeRouteUpdate",O,oe);for(const E of De)E.updateGuards.forEach(se=>{le.push(Qi(se,O,oe))});return le.push(L),ve(le)}).then(()=>{le=[];for(const E of D)if(E.beforeEnter)if(Qn(E.beforeEnter))for(const se of E.beforeEnter)le.push(Qi(se,O,oe));else le.push(Qi(E.beforeEnter,O,oe));return le.push(L),ve(le)}).then(()=>(O.matched.forEach(E=>E.enterCallbacks={}),le=Yc(D,"beforeRouteEnter",O,oe,x),le.push(L),ve(le))).then(()=>{le=[];for(const E of o.list())le.push(Qi(E,O,oe));return le.push(L),ve(le)}).catch(E=>Ei(E,8)?E:Promise.reject(E))}function I(O,oe,le){a.list().forEach(ae=>x(()=>ae(O,oe,le)))}function U(O,oe,le,ae,De){const D=b(O,oe);if(D)return D;const L=oe===$i,E=bs?history.state:{};le&&(ae||L?r.replace(O.fullPath,st({scroll:L&&E&&E.scroll},De)):r.push(O.fullPath,De)),l.value=O,Se(O,oe,le,L),_e()}let F;function X(){F||(F=r.listen((O,oe,le)=>{if(!fe.listening)return;const ae=p(O),De=T(ae);if(De){C(st(De,{replace:!0,force:!0}),ae).catch(Do);return}c=ae;const D=l.value;bs&&sw(Tp(D.fullPath,le.delta),Xl()),M(ae,D).catch(L=>Ei(L,12)?L:Ei(L,2)?(C(st(A(L.to),{force:!0}),ae).then(E=>{Ei(E,20)&&!le.delta&&le.type===Qo.pop&&r.go(-1,!1)}).catch(Do),Promise.reject()):(le.delta&&r.go(-le.delta,!1),V(L,ae,D))).then(L=>{L=L||U(ae,D,!1),L&&(le.delta&&!Ei(L,8)?r.go(-le.delta,!1):le.type===Qo.pop&&Ei(L,20)&&r.go(-1,!1)),I(ae,D,L)}).catch(Do)}))}let $=_o(),B=_o(),G;function V(O,oe,le){_e(O);const ae=B.list();return ae.length?ae.forEach(De=>De(O,oe,le)):console.error(O),Promise.reject(O)}function pe(){return G&&l.value!==$i?Promise.resolve():new Promise((O,oe)=>{$.add([O,oe])})}function _e(O){return G||(G=!O,X(),$.list().forEach(([oe,le])=>O?le(O):oe()),$.reset()),O}function Se(O,oe,le,ae){const{scrollBehavior:De}=n;if(!bs||!De)return Promise.resolve();const D=!le&&ow(Tp(O.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return Dl().then(()=>De(O,oe,D)).then(L=>L&&rw(L)).catch(L=>V(L,O,oe))}const Re=O=>r.go(O);let Xe;const Y=new Set,fe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:v,replace:y,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:B.add,isReady:pe,install(O){const oe=this;O.component("RouterLink",Pw),O.component("RouterView",Uw),O.config.globalProperties.$router=oe,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(l)}),bs&&!Xe&&l.value===$i&&(Xe=!0,v(r.location).catch(De=>{}));const le={};for(const De in $i)Object.defineProperty(le,De,{get:()=>l.value[De],enumerable:!0});O.provide(ql,oe),O.provide(jg,cm(le)),O.provide(mf,l);const ae=O.unmount;Y.add(O),O.unmount=function(){Y.delete(O),Y.size<1&&(c=$i,F&&F(),F=null,l.value=$i,Xe=!1,G=!1),ae()}}};function ve(O){return O.reduce((oe,le)=>oe.then(()=>x(le)),Promise.resolve())}return fe}function Fw(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Zs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Zs(c,l))||r.push(l))}return[t,i,r]}function ch(){return Zn(ql)}const Ow={class:"blog-card"},Bw={class:"search-section"},kw={class:"tags-section"},zw={class:"tags-list"},Vw=["onClick"],Hw={class:"articles-section"},Gw=["onClick"],Ww={class:"article-title"},Xw={class:"article-meta"},qw={class:"article-date"},$w={__name:"Posts",setup(n){const e=Bi(),t=ch(),i=mt(""),r=mt([]),s=mt([{id:1,title:"Vue3 组合式 API 实践心得",date:"2024-03-15",tags:["Vue3","前端开发"]},{id:2,title:"CSS 动画技巧分享",date:"2024-03-10",tags:["CSS","动画"]}]),o=Nt(()=>{const u=new Set;return s.value.forEach(f=>{f.tags.forEach(h=>u.add(h))}),Array.from(u)}),a=Nt(()=>s.value.filter(u=>{const f=u.title.toLowerCase().includes(i.value.toLowerCase()),h=r.value.length===0||u.tags.some(d=>r.value.includes(d));return f&&h})),l=u=>{const f=r.value.indexOf(u);f===-1?r.value.push(u):r.value.splice(f,1)},c=u=>{t.push({name:"PostDetail",params:{id:u.id}})};return(u,f)=>(Ue(),Oe("div",{class:Ut(["posts-container",{show:!wt(e).settings.isShowingBg}])},[ne("div",Ow,[ne("div",Bw,[ol(ne("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=h=>i.value=h),placeholder:"搜索文章...",class:"search-input"},null,512),[[If,i.value]])]),ne("div",kw,[ne("div",zw,[(Ue(!0),Oe(_t,null,sn(o.value,h=>(Ue(),Oe("span",{key:h,class:Ut(["tag",{active:r.value.includes(h)}]),onClick:d=>l(h)},je(h),11,Vw))),128))])]),ne("div",Hw,[(Ue(!0),Oe(_t,null,sn(a.value,h=>(Ue(),Oe("div",{key:h.id,class:"article-card",onClick:d=>c(h)},[ne("h3",Ww,je(h.title),1),ne("div",Xw,[ne("span",qw,je(h.date),1)])],8,Gw))),128))])])],2))}},Yw=ki($w,[["__scopeId","data-v-20bd279a"]]),jw={class:"main-scroll-container"},Kw={__name:"MainView",setup(n){const e=Bi();return(t,i)=>(Ue(),Oe("div",jw,[wt(e).settings.isShowingBg?(Ue(),Df(I1,{key:0})):Vr("",!0),Ft(Yw)]))}},Zw=ki(Kw,[["__scopeId","data-v-2e749486"]]),Jw={class:"app"},Qw={__name:"App",setup(n){return document.addEventListener("DOMContentLoaded",()=>{const e=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1}),t=document.querySelector(".articles-container");t&&e.observe(t)}),(e,t)=>{const i=Rm("router-view");return Ue(),Oe("div",Jw,[Ft(P1),Ft(eS),Ft(i)])}}},eC={class:"settings-container"},tC={class:"settings-section"},nC={class:"style-switcher"},iC={__name:"SettingsView",setup(n){const e=Bi();return(t,i)=>(Ue(),Oe("div",eC,[ne("div",{class:Ut(["blog-card",{"glass-effect":wt(e).settings.isGlassMode}])},[i[2]||(i[2]=ne("h1",null,"Blog Settings",-1)),ne("div",tC,[i[1]||(i[1]=ne("h2",null,"Appearance",-1)),ne("div",nC,[ne("button",{onClick:i[0]||(i[0]=(...r)=>wt(e).toggleVisualMode&&wt(e).toggleVisualMode(...r)),class:Ut(["style-toggle",{active:wt(e).settings.isGlassMode}])},je(wt(e).settings.isGlassMode?"Glass Morphism":"Light Mode"),3)])])],2)]))}},rC=ki(iC,[["__scopeId","data-v-9352e83d"]]),sC={class:"post-detail-content"},oC={class:"header-section"},aC={class:"post-meta"},lC={class:"post-date"},cC={class:"post-tags"},uC={class:"main-content"},fC={class:"article-content"},hC=["id"],dC={key:0},pC=["innerHTML"],mC={class:"sidebar"},_C={class:"toc-container"},gC={class:"toc-list"},vC=["onClick"],xC={__name:"PostsDetailView",setup(n){const e=Bi(),t=ch(),i=mt(0),r=mt(!1),s=()=>{const f=document.querySelector(".post-detail-container");f&&(r.value=f.scrollTop>300)},o=()=>{const f=document.querySelector(".post-detail-container");f&&f.scrollTo({top:0,behavior:"smooth"})},a=mt({id:1,title:"Vue3 组合式 API 实践心得",date:"2024-03-15",tags:["Vue3","前端开发","JavaScript"],content:[{title:"引言",content:`
      <p>在 Vue3 发布后，组合式 API 成为了前端开发中的一个重要话题。这种新的编程范式不仅改变了我们组织代码的方式，
      还为复杂组件的开发提供了更好的解决方案。本文将分享我在实际项目中使用组合式 API 的一些心得体会。</p>
  `},{title:"为什么选择组合式 API",content:`
      <p>传统的选项式 API 虽然直观易懂，但在处理复杂组件时往往会遇到一些问题：</p>
      <ul>
      <li>相关的逻辑代码被分散在不同的选项中，维护困难</li>
      <li>代码复用需要依赖 mixins，容易产生命名冲突</li>
      <li>TypeScript 支持有限，类型推导不够完善</li>
      </ul>
      <p>组合式 API 很好地解决了这些问题，让我们可以：</p>
      <ul>
      <li>按照逻辑关注点组织代码</li>
      <li>更好地复用逻辑代码</li>
      <li>获得更好的 TypeScript 支持</li>
      </ul>
  `},{title:"实践经验分享",content:`
      <p>在实际项目中，我总结了以下几点实践经验：</p>
      <h3>1. 合理拆分组合函数</h3>
      <p>将复杂的组件逻辑拆分为多个可复用的组合函数，每个函数负责一个独立的功能模块。
      这样不仅提高了代码的可维护性，还为后续的复用提供了可能。</p>
      <h3>2. 状态管理的新思路</h3>
      <p>使用 provide/inject 配合 ref 或 reactive，可以实现更灵活的状态管理方案。
      对于中小型项目，这种方案往往比使用 Vuex 更加轻量和简洁。</p>
      <h3>3. 生命周期钩子的使用</h3>
      <p>组合式 API 中的生命周期钩子使用起来更加直观，可以直接在相关的逻辑代码旁使用，
      提高了代码的可读性。</p>
  `},{title:"注意事项",content:`
      <p>在使用组合式 API 时，需要注意以下几点：</p>
      <ul>
      <li>避免过度解构 setup 上下文</li>
      <li>合理使用 ref 和 reactive</li>
      <li>注意响应式数据的性能开销</li>
      </ul>
      <p>同时，建议在项目中统一使用一种风格，不要混用组合式 API 和选项式 API，
      这样可以保持代码风格的一致性。</p>
  `},{title:"总结",content:`
      <p>组合式 API 为 Vue 开发带来了新的可能性，虽然学习曲线相对较陡，但带来的好处是显而易见的。
      希望这篇文章能够帮助你更好地理解和使用组合式 API。</p>
  `}]}),l=f=>{const h=document.getElementById(`section-${f}`);h&&(h.scrollIntoView({behavior:"smooth"}),i.value=f)},c=()=>{const f=document.querySelectorAll('[id^="section-"]'),h=document.querySelector(".post-detail-container");h&&(h.scrollTop,f.forEach((d,g)=>{d.getBoundingClientRect().top<=200&&(i.value=g)}))},u=()=>{t.push({name:"Posts"})};return Qs(()=>{const f=document.querySelector(".post-detail-container");f&&(f.addEventListener("scroll",c),f.addEventListener("scroll",s))}),eo(()=>{const f=document.querySelector(".post-detail-container");f&&(f.removeEventListener("scroll",c),f.removeEventListener("scroll",s))}),(f,h)=>(Ue(),Oe("div",{class:Ut(["post-detail-container",{show:!wt(e).settings.isShowingBg}]),onClick:h[0]||(h[0]=zo(()=>{},["stop"]))},[ne("div",{class:"back-button",onClick:u},h[1]||(h[1]=[ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[ne("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),ne("span",null,"返回",-1)])),ne("div",sC,[ne("div",oC,[ne("h1",null,je(a.value.title),1),ne("div",aC,[ne("span",lC,je(a.value.date),1),ne("div",cC,[(Ue(!0),Oe(_t,null,sn(a.value.tags,d=>(Ue(),Oe("span",{key:d,class:"tag"},je(d),1))),128))])]),h[2]||(h[2]=ne("div",{class:"divider"},null,-1))]),ne("div",uC,[ne("div",fC,[(Ue(!0),Oe(_t,null,sn(a.value.content,(d,g)=>(Ue(),Oe("div",{key:g,id:"section-"+g},[d.title?(Ue(),Oe("h2",dC,je(d.title),1)):Vr("",!0),ne("div",{class:"markdown-content",innerHTML:d.content},null,8,pC)],8,hC))),128))]),ne("div",mC,[ne("div",_C,[h[3]||(h[3]=ne("h3",null,"目录",-1)),ne("div",gC,[(Ue(!0),Oe(_t,null,sn(a.value.content,(d,g)=>(Ue(),Oe("div",{key:g,class:Ut(["toc-item",{active:i.value===g}]),onClick:_=>l(g)},je(d.title),11,vC))),128))])])])])]),ne("div",{class:Ut(["back-to-top",{show:r.value}]),onClick:o},h[4]||(h[4]=[ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[ne("path",{d:"M18 15l-6-6-6 6"})],-1)]),2)],2))}},SC=ki(xC,[["__scopeId","data-v-41c6d2bf"]]),yC={class:"posts-content"},MC={class:"main-content"},EC={class:"articles-section"},TC={class:"articles-list"},bC=["onClick"],AC={class:"article-meta"},wC={class:"article-date"},CC={class:"article-tags"},RC={class:"article-title"},PC={class:"article-excerpt"},DC={class:"sidebar"},LC={class:"search-box"},IC={class:"tags-section"},UC={class:"tags-cloud"},NC=["onClick"],FC={__name:"PostsView",setup(n){const e=ch(),t=Bi(),i=mt(!1),r=()=>{const d=document.querySelector(".posts-container");d&&(i.value=d.scrollTop>300)},s=()=>{const d=document.querySelector(".posts-container");d&&d.scrollTo({top:0,behavior:"smooth"})};Qs(()=>{const d=document.querySelector(".posts-container");d&&d.addEventListener("scroll",r)}),eo(()=>{const d=document.querySelector(".posts-container");d&&d.removeEventListener("scroll",r)});const o=mt([{id:1,title:"Vue3 组合式 API 实践心得",date:"2024-03-15",tags:["Vue3","前端开发","JavaScript"],excerpt:"在使用 Vue3 的组合式 API 开发过程中，我发现了一些有趣的模式和最佳实践。本文将分享这些经验，帮助你更好地组织代码结构..."},{id:2,title:"现代 CSS 动画技巧分享",date:"2024-03-10",tags:["CSS","动画","前端设计"],excerpt:"CSS 动画不仅能让界面更生动，还能提升用户体验。本文将介绍一些现代 CSS 动画技巧，包括关键帧动画、过渡效果等..."},{id:3,title:"TypeScript 类型体操实战",date:"2024-03-05",tags:["TypeScript","前端开发","编程技巧"],excerpt:"TypeScript 的类型系统非常强大，但有时也会让人感到困惑。这篇文章将通过实际例子，展示如何玩转 TypeScript 类型..."},{id:4,title:"浅谈前端性能优化",date:"2024-02-28",tags:["性能优化","前端开发","最佳实践"],excerpt:"前端性能优化是一个永恒的话题。从资源加载到渲染优化，从缓存策略到代码分割，让我们一起探讨如何提升网站性能..."}]),a=mt(""),l=mt([]),c=Nt(()=>{const d=new Set;return o.value.forEach(g=>{g.tags.forEach(_=>d.add(_))}),Array.from(d)}),u=Nt(()=>o.value.filter(d=>{const g=d.title.toLowerCase().includes(a.value.toLowerCase())||d.excerpt.toLowerCase().includes(a.value.toLowerCase()),_=l.value.length===0||d.tags.some(m=>l.value.includes(m));return g&&_})),f=d=>{const g=l.value.indexOf(d);g===-1?l.value.push(d):l.value.splice(g,1)},h=d=>{e.push({name:"PostDetail",params:{id:d.id}})};return(d,g)=>(Ue(),Oe("div",{class:Ut(["posts-container",{show:!wt(t).settings.isShowingBg}]),onClick:g[2]||(g[2]=zo(()=>{},["stop"]))},[ne("div",yC,[g[4]||(g[4]=ne("div",{class:"header-section"},[ne("h1",{class:"title"},"欢迎来到，我的博客"),ne("div",{class:"divider"})],-1)),ne("div",MC,[ne("div",EC,[ne("div",TC,[(Ue(!0),Oe(_t,null,sn(u.value,_=>(Ue(),Oe("div",{key:_.id,class:"article-card",onClick:m=>h(_)},[ne("div",AC,[ne("span",wC,je(_.date),1),ne("div",CC,[(Ue(!0),Oe(_t,null,sn(_.tags,m=>(Ue(),Oe("span",{key:m,class:"tag"},je(m),1))),128))])]),ne("h2",RC,je(_.title),1),ne("p",PC,je(_.excerpt),1)],8,bC))),128))])]),ne("div",DC,[ne("div",LC,[ol(ne("input",{type:"text","onUpdate:modelValue":g[0]||(g[0]=_=>a.value=_),placeholder:"搜索文章...",onInput:g[1]||(g[1]=(..._)=>d.handleSearch&&d.handleSearch(..._))},null,544),[[If,a.value]])]),ne("div",IC,[g[3]||(g[3]=ne("h3",null,"标签云",-1)),ne("div",UC,[(Ue(!0),Oe(_t,null,sn(c.value,_=>(Ue(),Oe("span",{key:_,class:Ut(["tag",{active:l.value.includes(_)}]),onClick:m=>f(_)},je(_),11,NC))),128))])])])])]),ne("div",{class:Ut(["back-to-top",{show:i.value}]),onClick:s},g[5]||(g[5]=[ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[ne("path",{d:"M18 15l-6-6-6 6"})],-1)]),2)],2))}},OC=ki(FC,[["__scopeId","data-v-13bbc410"]]),BC={class:"media-content"},kC={class:"main-content"},zC={class:"items-section"},VC={class:"filter-controls"},HC={class:"filter-buttons"},GC=["onClick"],WC={class:"sort-controls"},XC={class:"items-list"},qC=["onClick"],$C=["src","alt"],YC={key:1,class:"cover-placeholder"},jC={key:2,class:"media-rating"},KC={class:"media-info"},ZC={class:"media-meta"},JC={class:"media-date"},QC={class:"media-type"},eR={class:"media-title"},tR={class:"media-summary"},nR={class:"media-tags"},iR={class:"sidebar"},rR={class:"search-box"},sR={class:"tags-section"},oR={class:"tags-cloud"},aR=["onClick"],lR={class:"stats-section"},cR={class:"stats-grid"},uR={class:"stat-item"},fR={class:"stat-value"},hR={class:"stat-item"},dR={class:"stat-value"},pR={class:"stat-item"},mR={class:"stat-value"},_R={class:"stat-item"},gR={class:"stat-value"},vR={class:"modal-content"},xR={class:"modal-header"},SR={class:"modal-cover"},yR=["src","alt"],MR={key:1,class:"cover-placeholder"},ER={class:"modal-title-section"},TR={class:"modal-meta"},bR={class:"modal-type"},AR={class:"modal-date"},wR={key:0,class:"modal-rating"},CR={class:"modal-tags"},RR={class:"modal-body"},PR={class:"modal-review"},DR={key:0,class:"modal-notes"},LR={__name:"AboutView",setup(n){const e=Bi(),t=mt(!1),i=()=>{const v=document.querySelector(".media-container");v&&(t.value=v.scrollTop>300)},r=()=>{const v=document.querySelector(".media-container");v&&v.scrollTo({top:0,behavior:"smooth"})};Qs(()=>{const v=document.querySelector(".media-container");v&&v.addEventListener("scroll",i)}),eo(()=>{const v=document.querySelector(".media-container");v&&v.removeEventListener("scroll",i)});const s=mt([{value:"all",label:"全部"},{value:"movie",label:"电影"},{value:"anime",label:"动漫"},{value:"book",label:"书籍"}]),o=mt("all"),a=mt("dateDesc"),l=mt(null),c=mt([{id:1,title:"肖申克的救赎",type:"movie",date:"2024-03-20",rating:9.5,cover:"https://example.com/shawshank.jpg",tags:["剧情","励志","经典"],summary:"一部关于希望与自由的经典电影，讲述了银行家安迪被冤枉入狱后的故事。",review:"这部电影完美诠释了希望的力量。蒂姆·罗宾斯和摩根·弗里曼的表演令人难忘，尤其是安迪爬出污水管那一幕，堪称影史经典。",notes:["希望是好事，也许是最好的事，好的事从不会逝去。","有些鸟注定是不会被关在笼子里的，因为它们的每一片羽毛都闪耀着自由的光辉。"]},{id:2,title:"三体",type:"book",date:"2024-02-15",rating:9,cover:"https://example.com/three-body.jpg",tags:["科幻","小说","刘慈欣"],summary:"中国科幻文学的里程碑之作，讲述了地球文明与三体文明的接触与冲突。",review:"宏大的世界观和深刻的哲学思考让人震撼。黑暗森林理论彻底改变了我对宇宙文明的认知。",notes:["宇宙就是一座黑暗森林，每个文明都是带枪的猎人。","给岁月以文明，而不是给文明以岁月。"]},{id:3,title:"进击的巨人",type:"anime",date:"2024-01-10",rating:9.2,cover:"https://example.com/aot.jpg",tags:["动漫","热血","悬疑"],summary:"人类为对抗巨人的威胁而筑起高墙，直到城墙被打破的那一天...",review:"剧情反转令人震撼，世界观逐步展开的方式非常巧妙。角色塑造深刻，特别是艾伦的成长转变。",notes:["那一天，人类回想起了被他们支配的恐怖...","为了自由，献出心脏！"]},{id:4,title:"星际穿越",type:"movie",date:"2023-12-05",rating:9.3,cover:"https://example.com/interstellar.jpg",tags:["科幻","太空","诺兰"],summary:"一组探险家利用新发现的虫洞，试图超越人类太空旅行的极限。",review:"科学与情感的完美结合。汉斯·季默的配乐震撼心灵，五维空间的展现方式极具想象力。",notes:["爱不是人类发明的东西，它一直存在，而且很强大。","不要温和地走进那个良夜..."]}]),u=mt(""),f=mt([]),h=Nt(()=>{const v=new Set;return c.value.forEach(y=>{y.tags.forEach(T=>v.add(T))}),Array.from(v)}),d=Nt(()=>({total:c.value.length,movies:c.value.filter(y=>y.type==="movie").length,anime:c.value.filter(y=>y.type==="anime").length,books:c.value.filter(y=>y.type==="book").length})),g=Nt(()=>{let v=c.value.filter(y=>{const T=y.title.toLowerCase().includes(u.value.toLowerCase())||y.summary.toLowerCase().includes(u.value.toLowerCase()),C=f.value.length===0||y.tags.some(x=>f.value.includes(x)),P=o.value==="all"||y.type===o.value;return T&&C&&P});switch(a.value){case"dateDesc":v.sort((y,T)=>new Date(T.date)-new Date(y.date));break;case"dateAsc":v.sort((y,T)=>new Date(y.date)-new Date(T.date));break;case"ratingDesc":v.sort((y,T)=>(T.rating||0)-(y.rating||0));break;case"ratingAsc":v.sort((y,T)=>(y.rating||0)-(T.rating||0));break}return v}),_=v=>{const y=f.value.indexOf(v);y===-1?f.value.push(v):f.value.splice(y,1)},m=v=>{o.value=v},p=v=>{l.value=v},A=()=>{l.value=null},b=v=>{const y=s.value.find(T=>T.value===v);return y?y.label:v};return(v,y)=>(Ue(),Oe("div",{class:Ut(["media-container",{show:!wt(e).settings.isShowingBg}]),onClick:y[4]||(y[4]=zo(()=>{},["stop"]))},[ne("div",BC,[y[12]||(y[12]=ne("div",{class:"header-section"},[ne("h1",{class:"title"},"我的观影阅读记录"),ne("p",{class:"introduction"},"这里记录了我看过的影视作品和书籍，包含个人评分和简短感想。"),ne("div",{class:"divider"})],-1)),ne("div",kC,[ne("div",zC,[ne("div",VC,[ne("div",HC,[(Ue(!0),Oe(_t,null,sn(s.value,T=>(Ue(),Oe("button",{key:T.value,onClick:C=>m(T.value),class:Ut({active:o.value===T.value})},je(T.label),11,GC))),128))]),ne("div",WC,[ol(ne("select",{"onUpdate:modelValue":y[0]||(y[0]=T=>a.value=T),onChange:y[1]||(y[1]=(...T)=>v.sortItems&&v.sortItems(...T))},y[5]||(y[5]=[ne("option",{value:"dateDesc"},"按时间倒序",-1),ne("option",{value:"dateAsc"},"按时间正序",-1),ne("option",{value:"ratingDesc"},"按评分高→低",-1),ne("option",{value:"ratingAsc"},"按评分低→高",-1)]),544),[[wx,a.value]])])]),ne("div",XC,[(Ue(!0),Oe(_t,null,sn(g.value,T=>(Ue(),Oe("div",{key:T.id,class:Ut(["media-card",T.type])},[ne("div",{class:"media-cover",onClick:C=>p(T)},[T.cover?(Ue(),Oe("img",{key:0,src:T.cover,alt:T.title},null,8,$C)):(Ue(),Oe("div",YC,je(T.type==="movie"?"🎬":T.type==="book"?"📚":"📺"),1)),T.rating?(Ue(),Oe("div",jC,[ne("span",null,je(T.rating),1)])):Vr("",!0)],8,qC),ne("div",KC,[ne("div",ZC,[ne("span",JC,je(T.date),1),ne("span",QC,je(b(T.type)),1)]),ne("h2",eR,je(T.title),1),ne("p",tR,je(T.summary),1),ne("div",nR,[(Ue(!0),Oe(_t,null,sn(T.tags,C=>(Ue(),Oe("span",{key:C,class:"tag"},je(C),1))),128))])])],2))),128))])]),ne("div",iR,[ne("div",rR,[ol(ne("input",{type:"text","onUpdate:modelValue":y[2]||(y[2]=T=>u.value=T),placeholder:"搜索作品...",onInput:y[3]||(y[3]=(...T)=>v.handleSearch&&v.handleSearch(...T))},null,544),[[If,u.value]])]),ne("div",sR,[y[6]||(y[6]=ne("h3",null,"分类标签",-1)),ne("div",oR,[(Ue(!0),Oe(_t,null,sn(h.value,T=>(Ue(),Oe("span",{key:T,class:Ut(["tag",{active:f.value.includes(T)}]),onClick:C=>_(T)},je(T),11,aR))),128))])]),ne("div",lR,[y[11]||(y[11]=ne("h3",null,"我的统计",-1)),ne("div",cR,[ne("div",uR,[ne("span",fR,je(d.value.total),1),y[7]||(y[7]=ne("span",{class:"stat-label"},"总数量",-1))]),ne("div",hR,[ne("span",dR,je(d.value.movies),1),y[8]||(y[8]=ne("span",{class:"stat-label"},"电影",-1))]),ne("div",pR,[ne("span",mR,je(d.value.anime),1),y[9]||(y[9]=ne("span",{class:"stat-label"},"动漫",-1))]),ne("div",_R,[ne("span",gR,je(d.value.books),1),y[10]||(y[10]=ne("span",{class:"stat-label"},"书籍",-1))])])])])])]),ne("div",{class:Ut(["back-to-top",{show:t.value}]),onClick:r},y[13]||(y[13]=[ne("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[ne("path",{d:"M18 15l-6-6-6 6"})],-1)]),2),l.value?(Ue(),Oe("div",{key:0,class:"media-detail-modal",onClick:zo(A,["self"])},[ne("div",vR,[ne("button",{class:"close-btn",onClick:A},"×"),ne("div",xR,[ne("div",SR,[l.value.cover?(Ue(),Oe("img",{key:0,src:l.value.cover,alt:l.value.title},null,8,yR)):(Ue(),Oe("div",MR,je(l.value.type==="movie"?"🎬":l.value.type==="book"?"📚":"📺"),1))]),ne("div",ER,[ne("h2",null,je(l.value.title),1),ne("div",TR,[ne("span",bR,je(b(l.value.type)),1),ne("span",AR,je(l.value.date),1),l.value.rating?(Ue(),Oe("span",wR,"评分: "+je(l.value.rating)+"/10",1)):Vr("",!0)]),ne("div",CR,[(Ue(!0),Oe(_t,null,sn(l.value.tags,T=>(Ue(),Oe("span",{key:T,class:"tag"},je(T),1))),128))])])]),ne("div",RR,[y[15]||(y[15]=ne("h3",null,"我的评价",-1)),ne("p",PR,je(l.value.review),1),l.value.notes?(Ue(),Oe("div",DR,[y[14]||(y[14]=ne("h3",null,"精彩片段/台词",-1)),ne("ul",null,[(Ue(!0),Oe(_t,null,sn(l.value.notes,(T,C)=>(Ue(),Oe("li",{key:C},je(T),1))),128))])])):Vr("",!0)])])])):Vr("",!0)],2))}},IR=ki(LR,[["__scopeId","data-v-51bd9689"]]),UR=[{path:"/",name:"Home",component:Zw},{path:"/posts",name:"Posts",component:OC},{path:"/posts/:id",name:"PostDetail",component:SC},{path:"/about",name:"About",component:IR},{path:"/settings",name:"Settings",component:rC}],NR=Nw({hash:uw(),routes:UR}),FR=Wx(),uh=Lx(Qw);uh.use(NR);uh.use(FR);uh.mount("#app");
