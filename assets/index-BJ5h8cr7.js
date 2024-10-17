const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Layout-Czxdn7AV.js","assets/el-button-Deub0Cbu.js","assets/index-Cdowt2US.js","assets/plugin-vue_export-helper-Cd_d_7dB.js","assets/use-global-config-K9BRxxrC.js","assets/index-BGctWzOp.js","assets/el-input-OxPUwKGn.js","assets/typescript-Bp3YSIOJ.js","assets/el-popper-C9LbwScd.js","assets/index-Bb3OQcAj.js","assets/constants-Dnj8X3EN.js","assets/el-popper-DL6Na3xw.css","assets/event-BB_Ol6Sd.js","assets/use-form-common-props-DsLqBHT9.js","assets/el-input-DbH0jb8o.css","assets/el-button-IKbc-kyC.css","assets/el-text-Dos6SDwX.js","assets/el-text-CjuDOozN.css","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/vnode-Dmyral2g.js","assets/validator-BKvVTGv4.js","assets/index-MNUNvU54.js","assets/index-guausdOw.js","assets/Layout-Dzdu1jsK.css","assets/Home-CzZ4A9A3.js","assets/index-CJTEn_5w.js","assets/Home-BrDtff_7.css","assets/Layout-Br2eamAi.js","assets/el-notification-BSVUeJ6R.js","assets/el-notification-BUIf-K48.css","assets/38447162-CSW1a_R6.js","assets/el-empty-DJzxOYY4.js","assets/el-empty-BgB1A-Jc.css","assets/Floor-CnTe57W8.js","assets/el-card-L-aEQmaZ.js","assets/el-card-BJ3sbP9B.css","assets/el-col-Brxi7Qjo.js","assets/el-col-BP4dtlli.css","assets/el-link-CDAy3Hzj.js","assets/el-link-Dc88KzPr.css","assets/Floor-CjAbPJk_.css","assets/el-form-item-CtTSItv3.js","assets/castArray-DCNcbH5p.js","assets/el-form-item-i3Gm6waE.css","assets/el-date-picker-CwTEBnDZ.js","assets/el-date-picker-C3hHpewI.css","assets/38447162-DNWuEw05.css","assets/38466050-O7aB5Qfa.js","assets/38466050-BRnYSKOU.css","assets/38498128-DlFQm0Wm.js","assets/38498128-DX0Vdfry.css","assets/38725142-BHJnZxPP.js","assets/38725142-Bzuzot90.css","assets/Other-DnZxbtXY.js","assets/Edit-Dw8pXMjX.js","assets/Letter-DT_1SSiV.js","assets/Letter-B3k4_3nz.css","assets/Recreation-EQJvcU-q.js","assets/Recreation-Ctt0KGty.css","assets/Layout-S3eWfOli.js","assets/Friends-CW91k1Zc.js","assets/Events-gYwvmWOo.js","assets/Events-D1tx0yXB.css","assets/Resources-DXxwk4yO.js","assets/Resources-CEBC-k23.css","assets/About-CE6718FL.js","assets/About-keklZC0K.css","assets/Books-CiGtRzzJ.js","assets/Books-BPoIoIyI.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function makeMap(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,isOn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),isModelListener=e=>e.startsWith("onUpdate:"),extend=Object.assign,remove=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},hasOwnProperty$1=Object.prototype.hasOwnProperty,hasOwn=(e,t)=>hasOwnProperty$1.call(e,t),isArray$1=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isDate=e=>toTypeString(e)==="[object Date]",isFunction=e=>typeof e=="function",isString=e=>typeof e=="string",isSymbol=e=>typeof e=="symbol",isObject=e=>e!==null&&typeof e=="object",isPromise=e=>(isObject(e)||isFunction(e))&&isFunction(e.then)&&isFunction(e.catch),objectToString=Object.prototype.toString,toTypeString=e=>objectToString.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject$1=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(t,r)=>r?r.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,t)=>!Object.is(e,t),invokeArrayFns=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},def=(e,t,r,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:r})},looseToNumber=e=>{const t=parseFloat(e);return isNaN(t)?e:t},toNumber=e=>{const t=isString(e)?Number(e):NaN;return isNaN(t)?e:t};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function normalizeStyle(e){if(isArray$1(e)){const t={};for(let r=0;r<e.length;r++){const o=e[r],n=isString(o)?parseStringStyle(o):normalizeStyle(o);if(n)for(const a in n)t[a]=n[a]}return t}else if(isString(e)||isObject(e))return e}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*[^]*?\*\//g;function parseStringStyle(e){const t={};return e.replace(styleCommentRE,"").split(listDelimiterRE).forEach(r=>{if(r){const o=r.split(propertyDelimiterRE);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function normalizeClass(e){let t="";if(isString(e))t=e;else if(isArray$1(e))for(let r=0;r<e.length;r++){const o=normalizeClass(e[r]);o&&(t+=o+" ")}else if(isObject(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}function looseCompareArrays(e,t){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=looseEqual(e[o],t[o]);return r}function looseEqual(e,t){if(e===t)return!0;let r=isDate(e),o=isDate(t);if(r||o)return r&&o?e.getTime()===t.getTime():!1;if(r=isSymbol(e),o=isSymbol(t),r||o)return e===t;if(r=isArray$1(e),o=isArray$1(t),r||o)return r&&o?looseCompareArrays(e,t):!1;if(r=isObject(e),o=isObject(t),r||o){if(!r||!o)return!1;const n=Object.keys(e).length,a=Object.keys(t).length;if(n!==a)return!1;for(const s in e){const m=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(m&&!c||!m&&c||!looseEqual(e[s],t[s]))return!1}}return String(e)===String(t)}function looseIndexOf(e,t){return e.findIndex(r=>looseEqual(r,t))}const isRef$1=e=>!!(e&&e.__v_isRef===!0),toDisplayString=e=>isString(e)?e:e==null?"":isArray$1(e)||isObject(e)&&(e.toString===objectToString||!isFunction(e.toString))?isRef$1(e)?toDisplayString(e.value):JSON.stringify(e,replacer,2):String(e),replacer=(e,t)=>isRef$1(t)?replacer(e,t.value):isMap(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[o,n],a)=>(r[stringifySymbol(o,a)+" =>"]=n,r),{})}:isSet(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>stringifySymbol(r))}:isSymbol(t)?stringifySymbol(t):isObject(t)&&!isArray$1(t)&&!isPlainObject$1(t)?String(t):t,stringifySymbol=(e,t="")=>{var r;return isSymbol(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let activeEffectScope;class EffectScope{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=activeEffectScope,!t&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=activeEffectScope;try{return activeEffectScope=this,t()}finally{activeEffectScope=r}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(t){if(this._active){let r,o;for(r=0,o=this.effects.length;r<o;r++)this.effects[r].stop();for(r=0,o=this.cleanups.length;r<o;r++)this.cleanups[r]();if(this.scopes)for(r=0,o=this.scopes.length;r<o;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function effectScope(e){return new EffectScope(e)}function getCurrentScope(){return activeEffectScope}function onScopeDispose(e,t=!1){activeEffectScope&&activeEffectScope.cleanups.push(e)}let activeSub;const pausedQueueEffects=new WeakSet;class ReactiveEffect{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,activeEffectScope&&activeEffectScope.active&&activeEffectScope.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pausedQueueEffects.has(this)&&(pausedQueueEffects.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||batch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cleanupEffect(this),prepareDeps(this);const t=activeSub,r=shouldTrack;activeSub=this,shouldTrack=!0;try{return this.fn()}finally{cleanupDeps(this),activeSub=t,shouldTrack=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)removeSub(t);this.deps=this.depsTail=void 0,cleanupEffect(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pausedQueueEffects.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){isDirty(this)&&this.run()}get dirty(){return isDirty(this)}}let batchDepth=0,batchedSub,batchedComputed;function batch(e,t=!1){if(e.flags|=8,t){e.next=batchedComputed,batchedComputed=e;return}e.next=batchedSub,batchedSub=e}function startBatch(){batchDepth++}function endBatch(){if(--batchDepth>0)return;if(batchedComputed){let t=batchedComputed;for(batchedComputed=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;batchedSub;){let t=batchedSub;for(batchedSub=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=r}}if(e)throw e}function prepareDeps(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function cleanupDeps(e){let t,r=e.depsTail,o=r;for(;o;){const n=o.prevDep;o.version===-1?(o===r&&(r=n),removeSub(o),removeDep(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=n}e.deps=t,e.depsTail=r}function isDirty(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(refreshComputed(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function refreshComputed(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===globalVersion))return;e.globalVersion=globalVersion;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!isDirty(e)){e.flags&=-3;return}const r=activeSub,o=shouldTrack;activeSub=e,shouldTrack=!0;try{prepareDeps(e);const n=e.fn(e._value);(t.version===0||hasChanged(n,e._value))&&(e._value=n,t.version++)}catch(n){throw t.version++,n}finally{activeSub=r,shouldTrack=o,cleanupDeps(e),e.flags&=-3}}function removeSub(e,t=!1){const{dep:r,prevSub:o,nextSub:n}=e;if(o&&(o.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=o,e.nextSub=void 0),r.subs===e&&(r.subs=o,!o&&r.computed)){r.computed.flags&=-5;for(let a=r.computed.deps;a;a=a.nextDep)removeSub(a,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function removeDep(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function cleanupEffect(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=activeSub;activeSub=void 0;try{t()}finally{activeSub=r}}}let globalVersion=0;class Link{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dep{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!activeSub||!shouldTrack||activeSub===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==activeSub)r=this.activeLink=new Link(activeSub,this),activeSub.deps?(r.prevDep=activeSub.depsTail,activeSub.depsTail.nextDep=r,activeSub.depsTail=r):activeSub.deps=activeSub.depsTail=r,addSub(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const o=r.nextDep;o.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=o),r.prevDep=activeSub.depsTail,r.nextDep=void 0,activeSub.depsTail.nextDep=r,activeSub.depsTail=r,activeSub.deps===r&&(activeSub.deps=o)}return r}trigger(t){this.version++,globalVersion++,this.notify(t)}notify(t){startBatch();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{endBatch()}}}function addSub(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)addSub(o)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const targetMap=new WeakMap,ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol(""),ARRAY_ITERATE_KEY=Symbol("");function track(e,t,r){if(shouldTrack&&activeSub){let o=targetMap.get(e);o||targetMap.set(e,o=new Map);let n=o.get(r);n||(o.set(r,n=new Dep),n.map=o,n.key=r),n.track()}}function trigger(e,t,r,o,n,a){const s=targetMap.get(e);if(!s){globalVersion++;return}const m=c=>{c&&c.trigger()};if(startBatch(),t==="clear")s.forEach(m);else{const c=isArray$1(e),u=c&&isIntegerKey(r);if(c&&r==="length"){const f=Number(o);s.forEach((y,d)=>{(d==="length"||d===ARRAY_ITERATE_KEY||!isSymbol(d)&&d>=f)&&m(y)})}else switch((r!==void 0||s.has(void 0))&&m(s.get(r)),u&&m(s.get(ARRAY_ITERATE_KEY)),t){case"add":c?u&&m(s.get("length")):(m(s.get(ITERATE_KEY)),isMap(e)&&m(s.get(MAP_KEY_ITERATE_KEY)));break;case"delete":c||(m(s.get(ITERATE_KEY)),isMap(e)&&m(s.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&m(s.get(ITERATE_KEY));break}}endBatch()}function getDepFromReactive(e,t){const r=targetMap.get(e);return r&&r.get(t)}function reactiveReadArray(e){const t=toRaw(e);return t===e?t:(track(t,"iterate",ARRAY_ITERATE_KEY),isShallow(e)?t:t.map(toReactive))}function shallowReadArray(e){return track(e=toRaw(e),"iterate",ARRAY_ITERATE_KEY),e}const arrayInstrumentations={__proto__:null,[Symbol.iterator](){return iterator(this,Symbol.iterator,toReactive)},concat(...e){return reactiveReadArray(this).concat(...e.map(t=>isArray$1(t)?reactiveReadArray(t):t))},entries(){return iterator(this,"entries",e=>(e[1]=toReactive(e[1]),e))},every(e,t){return apply(this,"every",e,t,void 0,arguments)},filter(e,t){return apply(this,"filter",e,t,r=>r.map(toReactive),arguments)},find(e,t){return apply(this,"find",e,t,toReactive,arguments)},findIndex(e,t){return apply(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return apply(this,"findLast",e,t,toReactive,arguments)},findLastIndex(e,t){return apply(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return apply(this,"forEach",e,t,void 0,arguments)},includes(...e){return searchProxy(this,"includes",e)},indexOf(...e){return searchProxy(this,"indexOf",e)},join(e){return reactiveReadArray(this).join(e)},lastIndexOf(...e){return searchProxy(this,"lastIndexOf",e)},map(e,t){return apply(this,"map",e,t,void 0,arguments)},pop(){return noTracking(this,"pop")},push(...e){return noTracking(this,"push",e)},reduce(e,...t){return reduce(this,"reduce",e,t)},reduceRight(e,...t){return reduce(this,"reduceRight",e,t)},shift(){return noTracking(this,"shift")},some(e,t){return apply(this,"some",e,t,void 0,arguments)},splice(...e){return noTracking(this,"splice",e)},toReversed(){return reactiveReadArray(this).toReversed()},toSorted(e){return reactiveReadArray(this).toSorted(e)},toSpliced(...e){return reactiveReadArray(this).toSpliced(...e)},unshift(...e){return noTracking(this,"unshift",e)},values(){return iterator(this,"values",toReactive)}};function iterator(e,t,r){const o=shallowReadArray(e),n=o[t]();return o!==e&&!isShallow(e)&&(n._next=n.next,n.next=()=>{const a=n._next();return a.value&&(a.value=r(a.value)),a}),n}const arrayProto=Array.prototype;function apply(e,t,r,o,n,a){const s=shallowReadArray(e),m=s!==e&&!isShallow(e),c=s[t];if(c!==arrayProto[t]){const y=c.apply(e,a);return m?toReactive(y):y}let u=r;s!==e&&(m?u=function(y,d){return r.call(this,toReactive(y),d,e)}:r.length>2&&(u=function(y,d){return r.call(this,y,d,e)}));const f=c.call(s,u,o);return m&&n?n(f):f}function reduce(e,t,r,o){const n=shallowReadArray(e);let a=r;return n!==e&&(isShallow(e)?r.length>3&&(a=function(s,m,c){return r.call(this,s,m,c,e)}):a=function(s,m,c){return r.call(this,s,toReactive(m),c,e)}),n[t](a,...o)}function searchProxy(e,t,r){const o=toRaw(e);track(o,"iterate",ARRAY_ITERATE_KEY);const n=o[t](...r);return(n===-1||n===!1)&&isProxy(r[0])?(r[0]=toRaw(r[0]),o[t](...r)):n}function noTracking(e,t,r=[]){pauseTracking(),startBatch();const o=toRaw(e)[t].apply(e,r);return endBatch(),resetTracking(),o}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol));function hasOwnProperty(e){isSymbol(e)||(e=String(e));const t=toRaw(this);return track(t,"has",e),t.hasOwnProperty(e)}class BaseReactiveHandler{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,o){const n=this._isReadonly,a=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return a;if(r==="__v_raw")return o===(n?a?shallowReadonlyMap:readonlyMap:a?shallowReactiveMap:reactiveMap).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const s=isArray$1(t);if(!n){let c;if(s&&(c=arrayInstrumentations[r]))return c;if(r==="hasOwnProperty")return hasOwnProperty}const m=Reflect.get(t,r,isRef(t)?t:o);return(isSymbol(r)?builtInSymbols.has(r):isNonTrackableKeys(r))||(n||track(t,"get",r),a)?m:isRef(m)?s&&isIntegerKey(r)?m:m.value:isObject(m)?n?readonly(m):reactive(m):m}}class MutableReactiveHandler extends BaseReactiveHandler{constructor(t=!1){super(!1,t)}set(t,r,o,n){let a=t[r];if(!this._isShallow){const c=isReadonly(a);if(!isShallow(o)&&!isReadonly(o)&&(a=toRaw(a),o=toRaw(o)),!isArray$1(t)&&isRef(a)&&!isRef(o))return c?!1:(a.value=o,!0)}const s=isArray$1(t)&&isIntegerKey(r)?Number(r)<t.length:hasOwn(t,r),m=Reflect.set(t,r,o,isRef(t)?t:n);return t===toRaw(n)&&(s?hasChanged(o,a)&&trigger(t,"set",r,o):trigger(t,"add",r,o)),m}deleteProperty(t,r){const o=hasOwn(t,r);t[r];const n=Reflect.deleteProperty(t,r);return n&&o&&trigger(t,"delete",r,void 0),n}has(t,r){const o=Reflect.has(t,r);return(!isSymbol(r)||!builtInSymbols.has(r))&&track(t,"has",r),o}ownKeys(t){return track(t,"iterate",isArray$1(t)?"length":ITERATE_KEY),Reflect.ownKeys(t)}}class ReadonlyReactiveHandler extends BaseReactiveHandler{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const mutableHandlers=new MutableReactiveHandler,readonlyHandlers=new ReadonlyReactiveHandler,shallowReactiveHandlers=new MutableReactiveHandler(!0),shallowReadonlyHandlers=new ReadonlyReactiveHandler(!0),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function createIterableMethod(e,t,r){return function(...o){const n=this.__v_raw,a=toRaw(n),s=isMap(a),m=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=n[e](...o),f=r?toShallow:t?toReadonly:toReactive;return!t&&track(a,"iterate",c?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:y,done:d}=u.next();return d?{value:y,done:d}:{value:m?[f(y[0]),f(y[1])]:f(y),done:d}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function createInstrumentations(e,t){const r={get(n){const a=this.__v_raw,s=toRaw(a),m=toRaw(n);e||(hasChanged(n,m)&&track(s,"get",n),track(s,"get",m));const{has:c}=getProto(s),u=t?toShallow:e?toReadonly:toReactive;if(c.call(s,n))return u(a.get(n));if(c.call(s,m))return u(a.get(m));a!==s&&a.get(n)},get size(){const n=this.__v_raw;return!e&&track(toRaw(n),"iterate",ITERATE_KEY),Reflect.get(n,"size",n)},has(n){const a=this.__v_raw,s=toRaw(a),m=toRaw(n);return e||(hasChanged(n,m)&&track(s,"has",n),track(s,"has",m)),n===m?a.has(n):a.has(n)||a.has(m)},forEach(n,a){const s=this,m=s.__v_raw,c=toRaw(m),u=t?toShallow:e?toReadonly:toReactive;return!e&&track(c,"iterate",ITERATE_KEY),m.forEach((f,y)=>n.call(a,u(f),u(y),s))}};return extend(r,e?{add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear")}:{add(n){!t&&!isShallow(n)&&!isReadonly(n)&&(n=toRaw(n));const a=toRaw(this);return getProto(a).has.call(a,n)||(a.add(n),trigger(a,"add",n,n)),this},set(n,a){!t&&!isShallow(a)&&!isReadonly(a)&&(a=toRaw(a));const s=toRaw(this),{has:m,get:c}=getProto(s);let u=m.call(s,n);u||(n=toRaw(n),u=m.call(s,n));const f=c.call(s,n);return s.set(n,a),u?hasChanged(a,f)&&trigger(s,"set",n,a):trigger(s,"add",n,a),this},delete(n){const a=toRaw(this),{has:s,get:m}=getProto(a);let c=s.call(a,n);c||(n=toRaw(n),c=s.call(a,n)),m&&m.call(a,n);const u=a.delete(n);return c&&trigger(a,"delete",n,void 0),u},clear(){const n=toRaw(this),a=n.size!==0,s=n.clear();return a&&trigger(n,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=createIterableMethod(n,e,t)}),r}function createInstrumentationGetter(e,t){const r=createInstrumentations(e,t);return(o,n,a)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?o:Reflect.get(hasOwn(r,n)&&n in o?r:o,n,a)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},shallowReadonlyCollectionHandlers={get:createInstrumentationGetter(!0,!0)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function shallowReadonly(e){return createReactiveObject(e,!0,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap)}function createReactiveObject(e,t,r,o,n){if(!isObject(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=n.get(e);if(a)return a;const s=getTargetType(e);if(s===0)return e;const m=new Proxy(e,s===2?o:r);return n.set(e,m),m}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return e?!!e.__v_raw:!1}function toRaw(e){const t=e&&e.__v_raw;return t?toRaw(t):e}function markRaw(e){return!hasOwn(e,"__v_skip")&&Object.isExtensible(e)&&def(e,"__v_skip",!0),e}const toReactive=e=>isObject(e)?reactive(e):e,toReadonly=e=>isObject(e)?readonly(e):e;function isRef(e){return e?e.__v_isRef===!0:!1}function ref(e){return createRef(e,!1)}function shallowRef(e){return createRef(e,!0)}function createRef(e,t){return isRef(e)?e:new RefImpl(e,t)}class RefImpl{constructor(t,r){this.dep=new Dep,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:toRaw(t),this._value=r?t:toReactive(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,o=this.__v_isShallow||isShallow(t)||isReadonly(t);t=o?t:toRaw(t),hasChanged(t,r)&&(this._rawValue=t,this._value=o?t:toReactive(t),this.dep.trigger())}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,t,r)=>t==="__v_raw"?e:unref(Reflect.get(e,t,r)),set:(e,t,r,o)=>{const n=e[t];return isRef(n)&&!isRef(r)?(n.value=r,!0):Reflect.set(e,t,r,o)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}function toRefs(e){const t=isArray$1(e)?new Array(e.length):{};for(const r in e)t[r]=propertyToRef(e,r);return t}class ObjectRefImpl{constructor(t,r,o){this._object=t,this._key=r,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return getDepFromReactive(toRaw(this._object),this._key)}}class GetterRefImpl{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function toRef(e,t,r){return isRef(e)?e:isFunction(e)?new GetterRefImpl(e):isObject(e)&&arguments.length>1?propertyToRef(e,t,r):ref(e)}function propertyToRef(e,t,r){const o=e[t];return isRef(o)?o:new ObjectRefImpl(e,t,r)}class ComputedRefImpl{constructor(t,r,o){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Dep(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=globalVersion-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&activeSub!==this)return batch(this,!0),!0}get value(){const t=this.dep.track();return refreshComputed(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function computed$1(e,t,r=!1){let o,n;return isFunction(e)?o=e:(o=e.get,n=e.set),new ComputedRefImpl(o,n,r)}const INITIAL_WATCHER_VALUE={},cleanupMap=new WeakMap;let activeWatcher;function onWatcherCleanup(e,t=!1,r=activeWatcher){if(r){let o=cleanupMap.get(r);o||cleanupMap.set(r,o=[]),o.push(e)}}function watch$1(e,t,r=EMPTY_OBJ){const{immediate:o,deep:n,once:a,scheduler:s,augmentJob:m,call:c}=r,u=O=>n?O:isShallow(O)||n===!1||n===0?traverse(O,1):traverse(O);let f,y,d,k,b=!1,C=!1;if(isRef(e)?(y=()=>e.value,b=isShallow(e)):isReactive(e)?(y=()=>u(e),b=!0):isArray$1(e)?(C=!0,b=e.some(O=>isReactive(O)||isShallow(O)),y=()=>e.map(O=>{if(isRef(O))return O.value;if(isReactive(O))return u(O);if(isFunction(O))return c?c(O,2):O()})):isFunction(e)?t?y=c?()=>c(e,2):e:y=()=>{if(d){pauseTracking();try{d()}finally{resetTracking()}}const O=activeWatcher;activeWatcher=f;try{return c?c(e,3,[k]):e(k)}finally{activeWatcher=O}}:y=NOOP,t&&n){const O=y,V=n===!0?1/0:n;y=()=>traverse(O(),V)}const A=getCurrentScope(),w=()=>{f.stop(),A&&remove(A.effects,f)};if(a&&t){const O=t;t=(...V)=>{O(...V),w()}}let D=C?new Array(e.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const F=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(t){const V=f.run();if(n||b||(C?V.some((pe,S)=>hasChanged(pe,D[S])):hasChanged(V,D))){d&&d();const pe=activeWatcher;activeWatcher=f;try{const S=[V,D===INITIAL_WATCHER_VALUE?void 0:C&&D[0]===INITIAL_WATCHER_VALUE?[]:D,k];c?c(t,3,S):t(...S),D=V}finally{activeWatcher=pe}}}else f.run()};return m&&m(F),f=new ReactiveEffect(y),f.scheduler=s?()=>s(F,!1):F,k=O=>onWatcherCleanup(O,!1,f),d=f.onStop=()=>{const O=cleanupMap.get(f);if(O){if(c)c(O,4);else for(const V of O)V();cleanupMap.delete(f)}},t?o?F(!0):D=f.run():s?s(F.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function traverse(e,t=1/0,r){if(t<=0||!isObject(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,isRef(e))traverse(e.value,t,r);else if(isArray$1(e))for(let o=0;o<e.length;o++)traverse(e[o],t,r);else if(isSet(e)||isMap(e))e.forEach(o=>{traverse(o,t,r)});else if(isPlainObject$1(e)){for(const o in e)traverse(e[o],t,r);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&traverse(e[o],t,r)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const stack=[];let isWarning=!1;function warn$1(e,...t){if(isWarning)return;isWarning=!0,pauseTracking();const r=stack.length?stack[stack.length-1].component:null,o=r&&r.appContext.config.warnHandler,n=getComponentTrace();if(o)callWithErrorHandling(o,r,11,[e+t.map(a=>{var s,m;return(m=(s=a.toString)==null?void 0:s.call(a))!=null?m:JSON.stringify(a)}).join(""),r&&r.proxy,n.map(({vnode:a})=>`at <${formatComponentName(r,a.type)}>`).join(`
`),n]);else{const a=[`[Vue warn]: ${e}`,...t];n.length&&a.push(`
`,...formatTrace(n)),console.warn(...a)}resetTracking(),isWarning=!1}function getComponentTrace(){let e=stack[stack.length-1];if(!e)return[];const t=[];for(;e;){const r=t[0];r&&r.vnode===e?r.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function formatTrace(e){const t=[];return e.forEach((r,o)=>{t.push(...o===0?[]:[`
`],...formatTraceEntry(r))}),t}function formatTraceEntry({vnode:e,recurseCount:t}){const r=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,n=` at <${formatComponentName(e.component,e.type,o)}`,a=">"+r;return e.props?[n,...formatProps(e.props),a]:[n+a]}function formatProps(e){const t=[],r=Object.keys(e);return r.slice(0,3).forEach(o=>{t.push(...formatProp(o,e[o]))}),r.length>3&&t.push(" ..."),t}function formatProp(e,t,r){return isString(t)?(t=JSON.stringify(t),r?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?r?t:[`${e}=${t}`]:isRef(t)?(t=formatProp(e,toRaw(t.value),!0),r?t:[`${e}=Ref<`,t,">"]):isFunction(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=toRaw(t),r?t:[`${e}=`,t])}function callWithErrorHandling(e,t,r,o){try{return o?e(...o):e()}catch(n){handleError(n,t,r)}}function callWithAsyncErrorHandling(e,t,r,o){if(isFunction(e)){const n=callWithErrorHandling(e,t,r,o);return n&&isPromise(n)&&n.catch(a=>{handleError(a,t,r)}),n}if(isArray$1(e)){const n=[];for(let a=0;a<e.length;a++)n.push(callWithAsyncErrorHandling(e[a],t,r,o));return n}}function handleError(e,t,r,o=!0){const n=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||EMPTY_OBJ;if(t){let m=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${r}`;for(;m;){const f=m.ec;if(f){for(let y=0;y<f.length;y++)if(f[y](e,c,u)===!1)return}m=m.parent}if(a){pauseTracking(),callWithErrorHandling(a,null,10,[e,c,u]),resetTracking();return}}logError(e,r,n,o,s)}function logError(e,t,r,o=!0,n=!1){if(n)throw e;console.error(e)}const queue=[];let flushIndex=-1;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(e){const t=currentFlushPromise||resolvedPromise;return e?t.then(this?e.bind(this):e):t}function findInsertionIndex$1(e){let t=flushIndex+1,r=queue.length;for(;t<r;){const o=t+r>>>1,n=queue[o],a=getId(n);a<e||a===e&&n.flags&2?t=o+1:r=o}return t}function queueJob(e){if(!(e.flags&1)){const t=getId(e),r=queue[queue.length-1];!r||!(e.flags&2)&&t>=getId(r)?queue.push(e):queue.splice(findInsertionIndex$1(t),0,e),e.flags|=1,queueFlush()}}function queueFlush(){currentFlushPromise||(currentFlushPromise=resolvedPromise.then(flushJobs))}function queuePostFlushCb(e){isArray$1(e)?pendingPostFlushCbs.push(...e):activePostFlushCbs&&e.id===-1?activePostFlushCbs.splice(postFlushIndex+1,0,e):e.flags&1||(pendingPostFlushCbs.push(e),e.flags|=1),queueFlush()}function flushPreFlushCbs(e,t,r=flushIndex+1){for(;r<queue.length;r++){const o=queue[r];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;queue.splice(r,1),r--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const t=[...new Set(pendingPostFlushCbs)].sort((r,o)=>getId(r)-getId(o));if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...t);return}for(activePostFlushCbs=t,postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){const r=activePostFlushCbs[postFlushIndex];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?e.flags&2?-1:1/0:e.id;function flushJobs(e){try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const t=queue[flushIndex];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),callWithErrorHandling(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;flushIndex<queue.length;flushIndex++){const t=queue[flushIndex];t&&(t.flags&=-2)}flushIndex=-1,queue.length=0,flushPostFlushCbs(),currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const t=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,t}function withCtx(e,t=currentRenderingInstance,r){if(!t||e._n)return e;const o=(...n)=>{o._d&&setBlockTracking(-1);const a=setCurrentRenderingInstance(t);let s;try{s=e(...n)}finally{setCurrentRenderingInstance(a),o._d&&setBlockTracking(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function withDirectives(e,t){if(currentRenderingInstance===null)return e;const r=getComponentPublicInstance(currentRenderingInstance),o=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[a,s,m,c=EMPTY_OBJ]=t[n];a&&(isFunction(a)&&(a={mounted:a,updated:a}),a.deep&&traverse(s),o.push({dir:a,instance:r,value:s,oldValue:void 0,arg:m,modifiers:c}))}return e}function invokeDirectiveHook(e,t,r,o){const n=e.dirs,a=t&&t.dirs;for(let s=0;s<n.length;s++){const m=n[s];a&&(m.oldValue=a[s].value);let c=m.dir[o];c&&(pauseTracking(),callWithAsyncErrorHandling(c,r,8,[e.el,m,e,t]),resetTracking())}}const TeleportEndKey=Symbol("_vte"),isTeleport=e=>e.__isTeleport,isTeleportDisabled=e=>e&&(e.disabled||e.disabled===""),isTeleportDeferred=e=>e&&(e.defer||e.defer===""),isTargetSVG=e=>typeof SVGElement<"u"&&e instanceof SVGElement,isTargetMathML=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,resolveTarget=(e,t)=>{const r=e&&e.to;return isString(r)?t?t(r):null:r},TeleportImpl={name:"Teleport",__isTeleport:!0,process(e,t,r,o,n,a,s,m,c,u){const{mc:f,pc:y,pbc:d,o:{insert:k,querySelector:b,createText:C,createComment:A}}=u,w=isTeleportDisabled(t.props);let{shapeFlag:D,children:F,dynamicChildren:O}=t;if(e==null){const V=t.el=C(""),pe=t.anchor=C("");k(V,r,o),k(pe,r,o);const S=(M,J)=>{D&16&&(n&&n.isCE&&(n.ce._teleportTarget=M),f(F,M,J,n,a,s,m,c))},K=()=>{const M=t.target=resolveTarget(t.props,b),J=prepareAnchor(M,t,C,k);M&&(s!=="svg"&&isTargetSVG(M)?s="svg":s!=="mathml"&&isTargetMathML(M)&&(s="mathml"),w||(S(M,J),updateCssVars(t,!1)))};w&&(S(r,pe),updateCssVars(t,!0)),isTeleportDeferred(t.props)?queuePostRenderEffect(K,a):K()}else{t.el=e.el,t.targetStart=e.targetStart;const V=t.anchor=e.anchor,pe=t.target=e.target,S=t.targetAnchor=e.targetAnchor,K=isTeleportDisabled(e.props),M=K?r:pe,J=K?V:S;if(s==="svg"||isTargetSVG(pe)?s="svg":(s==="mathml"||isTargetMathML(pe))&&(s="mathml"),O?(d(e.dynamicChildren,O,M,n,a,s,m),traverseStaticChildren(e,t,!0)):c||y(e,t,M,J,n,a,s,m,!1),w)K?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):moveTeleport(t,r,V,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const j=t.target=resolveTarget(t.props,b);j&&moveTeleport(t,j,null,u,0)}else K&&moveTeleport(t,pe,S,u,1);updateCssVars(t,w)}},remove(e,t,r,{um:o,o:{remove:n}},a){const{shapeFlag:s,children:m,anchor:c,targetStart:u,targetAnchor:f,target:y,props:d}=e;if(y&&(n(u),n(f)),a&&n(c),s&16){const k=a||!isTeleportDisabled(d);for(let b=0;b<m.length;b++){const C=m[b];o(C,t,r,k,!!C.dynamicChildren)}}},move:moveTeleport,hydrate:hydrateTeleport};function moveTeleport(e,t,r,{o:{insert:o},m:n},a=2){a===0&&o(e.targetAnchor,t,r);const{el:s,anchor:m,shapeFlag:c,children:u,props:f}=e,y=a===2;if(y&&o(s,t,r),(!y||isTeleportDisabled(f))&&c&16)for(let d=0;d<u.length;d++)n(u[d],t,r,2);y&&o(m,t,r)}function hydrateTeleport(e,t,r,o,n,a,{o:{nextSibling:s,parentNode:m,querySelector:c,insert:u,createText:f}},y){const d=t.target=resolveTarget(t.props,c);if(d){const k=isTeleportDisabled(t.props),b=d._lpa||d.firstChild;if(t.shapeFlag&16)if(k)t.anchor=y(s(e),t,m(e),r,o,n,a),t.targetStart=b,t.targetAnchor=b&&s(b);else{t.anchor=s(e);let C=b;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")t.targetStart=C;else if(C.data==="teleport anchor"){t.targetAnchor=C,d._lpa=t.targetAnchor&&s(t.targetAnchor);break}}C=s(C)}t.targetAnchor||prepareAnchor(d,t,f,u),y(b&&s(b),t,d,r,o,n,a)}updateCssVars(t,k)}return t.anchor&&s(t.anchor)}const Teleport=TeleportImpl;function updateCssVars(e,t){const r=e.ctx;if(r&&r.ut){let o,n;for(t?(o=e.el,n=e.anchor):(o=e.targetStart,n=e.targetAnchor);o&&o!==n;)o.nodeType===1&&o.setAttribute("data-v-owner",r.uid),o=o.nextSibling;r.ut()}}function prepareAnchor(e,t,r,o){const n=t.targetStart=r(""),a=t.targetAnchor=r("");return n[TeleportEndKey]=a,e&&(o(n,e),o(a,e)),a}const leaveCbKey=Symbol("_leaveCb"),enterCbKey$1=Symbol("_enterCb");function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionPropsValidators={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},recursiveGetSubtree=e=>{const t=e.subTree;return t.component?recursiveGetSubtree(t.component):t},BaseTransitionImpl={name:"BaseTransition",props:BaseTransitionPropsValidators,setup(e,{slots:t}){const r=getCurrentInstance(),o=useTransitionState();return()=>{const n=t.default&&getTransitionRawChildren(t.default(),!0);if(!n||!n.length)return;const a=findNonCommentChild(n),s=toRaw(e),{mode:m}=s;if(o.isLeaving)return emptyPlaceholder(a);const c=getInnerChild$1(a);if(!c)return emptyPlaceholder(a);let u=resolveTransitionHooks(c,s,o,r,d=>u=d);c.type!==Comment&&setTransitionHooks(c,u);const f=r.subTree,y=f&&getInnerChild$1(f);if(y&&y.type!==Comment&&!isSameVNodeType(c,y)&&recursiveGetSubtree(r).type!==Comment){const d=resolveTransitionHooks(y,s,o,r);if(setTransitionHooks(y,d),m==="out-in"&&c.type!==Comment)return o.isLeaving=!0,d.afterLeave=()=>{o.isLeaving=!1,r.job.flags&8||r.update(),delete d.afterLeave},emptyPlaceholder(a);m==="in-out"&&c.type!==Comment&&(d.delayLeave=(k,b,C)=>{const A=getLeavingNodesForType(o,y);A[String(y.key)]=y,k[leaveCbKey]=()=>{b(),k[leaveCbKey]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return a}}};function findNonCommentChild(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==Comment){t=r;break}}return t}const BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,t){const{leavingVNodes:r}=e;let o=r.get(t.type);return o||(o=Object.create(null),r.set(t.type,o)),o}function resolveTransitionHooks(e,t,r,o,n){const{appear:a,mode:s,persisted:m=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:y,onBeforeLeave:d,onLeave:k,onAfterLeave:b,onLeaveCancelled:C,onBeforeAppear:A,onAppear:w,onAfterAppear:D,onAppearCancelled:F}=t,O=String(e.key),V=getLeavingNodesForType(r,e),pe=(M,J)=>{M&&callWithAsyncErrorHandling(M,o,9,J)},S=(M,J)=>{const j=J[1];pe(M,J),isArray$1(M)?M.every(W=>W.length<=1)&&j():M.length<=1&&j()},K={mode:s,persisted:m,beforeEnter(M){let J=c;if(!r.isMounted)if(a)J=A||c;else return;M[leaveCbKey]&&M[leaveCbKey](!0);const j=V[O];j&&isSameVNodeType(e,j)&&j.el[leaveCbKey]&&j.el[leaveCbKey](),pe(J,[M])},enter(M){let J=u,j=f,W=y;if(!r.isMounted)if(a)J=w||u,j=D||f,W=F||y;else return;let oe=!1;const ge=M[enterCbKey$1]=de=>{oe||(oe=!0,de?pe(W,[M]):pe(j,[M]),K.delayedLeave&&K.delayedLeave(),M[enterCbKey$1]=void 0)};J?S(J,[M,ge]):ge()},leave(M,J){const j=String(e.key);if(M[enterCbKey$1]&&M[enterCbKey$1](!0),r.isUnmounting)return J();pe(d,[M]);let W=!1;const oe=M[leaveCbKey]=ge=>{W||(W=!0,J(),ge?pe(C,[M]):pe(b,[M]),M[leaveCbKey]=void 0,V[j]===e&&delete V[j])};V[j]=e,k?S(k,[M,oe]):oe()},clone(M){const J=resolveTransitionHooks(M,t,r,o,n);return n&&n(J),J}};return K}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getInnerChild$1(e){if(!isKeepAlive(e))return isTeleport(e.type)&&e.children?findNonCommentChild(e.children):e;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&isFunction(r.default))return r.default()}}function setTransitionHooks(e,t){e.shapeFlag&6&&e.component?(e.transition=t,setTransitionHooks(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function getTransitionRawChildren(e,t=!1,r){let o=[],n=0;for(let a=0;a<e.length;a++){let s=e[a];const m=r==null?s.key:String(r)+String(s.key!=null?s.key:a);s.type===Fragment?(s.patchFlag&128&&n++,o=o.concat(getTransitionRawChildren(s.children,t,m))):(t||s.type!==Comment)&&o.push(m!=null?cloneVNode(s,{key:m}):s)}if(n>1)for(let a=0;a<o.length;a++)o[a].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function defineComponent(e,t){return isFunction(e)?extend({name:e.name},t,{setup:e}):e}function markAsyncBoundary(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function setRef(e,t,r,o,n=!1){if(isArray$1(e)){e.forEach((b,C)=>setRef(b,t&&(isArray$1(t)?t[C]:t),r,o,n));return}if(isAsyncWrapper(o)&&!n)return;const a=o.shapeFlag&4?getComponentPublicInstance(o.component):o.el,s=n?null:a,{i:m,r:c}=e,u=t&&t.r,f=m.refs===EMPTY_OBJ?m.refs={}:m.refs,y=m.setupState,d=toRaw(y),k=y===EMPTY_OBJ?()=>!1:b=>hasOwn(d,b);if(u!=null&&u!==c&&(isString(u)?(f[u]=null,k(u)&&(y[u]=null)):isRef(u)&&(u.value=null)),isFunction(c))callWithErrorHandling(c,m,12,[s,f]);else{const b=isString(c),C=isRef(c);if(b||C){const A=()=>{if(e.f){const w=b?k(c)?y[c]:f[c]:c.value;n?isArray$1(w)&&remove(w,a):isArray$1(w)?w.includes(a)||w.push(a):b?(f[c]=[a],k(c)&&(y[c]=f[c])):(c.value=[a],e.k&&(f[e.k]=c.value))}else b?(f[c]=s,k(c)&&(y[c]=s)):C&&(c.value=s,e.k&&(f[e.k]=s))};s?(A.id=-1,queuePostRenderEffect(A,r)):A()}}}getGlobalThis().requestIdleCallback;getGlobalThis().cancelIdleCallback;const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive;function onActivated(e,t){registerKeepAliveHook(e,"a",t)}function onDeactivated(e,t){registerKeepAliveHook(e,"da",t)}function registerKeepAliveHook(e,t,r=currentInstance){const o=e.__wdc||(e.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(injectHook(t,o,r),r){let n=r.parent;for(;n&&n.parent;)isKeepAlive(n.parent.vnode)&&injectToKeepAliveRoot(o,t,r,n),n=n.parent}}function injectToKeepAliveRoot(e,t,r,o){const n=injectHook(t,e,o,!0);onUnmounted(()=>{remove(o[t],n)},r)}function injectHook(e,t,r=currentInstance,o=!1){if(r){const n=r[e]||(r[e]=[]),a=t.__weh||(t.__weh=(...s)=>{pauseTracking();const m=setCurrentInstance(r),c=callWithAsyncErrorHandling(t,r,e,s);return m(),resetTracking(),c});return o?n.unshift(a):n.push(a),a}}const createHook=e=>(t,r=currentInstance)=>{(!isInSSRComponentSetup||e==="sp")&&injectHook(e,(...o)=>t(...o),r)},onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,t=currentInstance){injectHook("ec",e,t)}const COMPONENTS="components",DIRECTIVES="directives";function resolveComponent(e,t){return resolveAsset(COMPONENTS,e,!0,t)||e}const NULL_DYNAMIC_COMPONENT=Symbol.for("v-ndc");function resolveDynamicComponent(e){return isString(e)?resolveAsset(COMPONENTS,e,!1)||e:e||NULL_DYNAMIC_COMPONENT}function resolveDirective(e){return resolveAsset(DIRECTIVES,e)}function resolveAsset(e,t,r=!0,o=!1){const n=currentRenderingInstance||currentInstance;if(n){const a=n.type;if(e===COMPONENTS){const m=getComponentName(a,!1);if(m&&(m===t||m===camelize(t)||m===capitalize(camelize(t))))return a}const s=resolve(n[e]||a[e],t)||resolve(n.appContext[e],t);return!s&&o?a:s}}function resolve(e,t){return e&&(e[t]||e[camelize(t)]||e[capitalize(camelize(t))])}function renderList(e,t,r,o){let n;const a=r,s=isArray$1(e);if(s||isString(e)){const m=s&&isReactive(e);let c=!1;m&&(c=!isShallow(e),e=shallowReadArray(e)),n=new Array(e.length);for(let u=0,f=e.length;u<f;u++)n[u]=t(c?toReactive(e[u]):e[u],u,void 0,a)}else if(typeof e=="number"){n=new Array(e);for(let m=0;m<e;m++)n[m]=t(m+1,m,void 0,a)}else if(isObject(e))if(e[Symbol.iterator])n=Array.from(e,(m,c)=>t(m,c,void 0,a));else{const m=Object.keys(e);n=new Array(m.length);for(let c=0,u=m.length;c<u;c++){const f=m[c];n[c]=t(e[f],f,c,a)}}else n=[];return n}function renderSlot(e,t,r={},o,n){if(currentRenderingInstance.ce||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.ce)return t!=="default"&&(r.name=t),openBlock(),createBlock(Fragment,null,[createVNode("slot",r,o&&o())],64);let a=e[t];a&&a._c&&(a._d=!1),openBlock();const s=a&&ensureValidVNode(a(r)),m=r.key||s&&s.key,c=createBlock(Fragment,{key:(m&&!isSymbol(m)?m:`_${t}`)+(!s&&o?"_fb":"")},s||(o?o():[]),s&&e._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),a&&a._c&&(a._d=!0),c}function ensureValidVNode(e){return e.some(t=>isVNode(t)?!(t.type===Comment||t.type===Fragment&&!ensureValidVNode(t.children)):!0)?e:null}function toHandlers(e,t){const r={};for(const o in e)r[toHandlerKey(o)]=e[o];return r}const getPublicInstance=e=>e?isStatefulComponent(e)?getComponentPublicInstance(e):getPublicInstance(e.parent):null,publicPropertiesMap=extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>{queueJob(e.update)}),$nextTick:e=>e.n||(e.n=nextTick.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),hasSetupBinding=(e,t)=>e!==EMPTY_OBJ&&!e.__isScriptSetup&&hasOwn(e,t),PublicInstanceProxyHandlers={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:o,data:n,props:a,accessCache:s,type:m,appContext:c}=e;let u;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return o[t];case 2:return n[t];case 4:return r[t];case 3:return a[t]}else{if(hasSetupBinding(o,t))return s[t]=1,o[t];if(n!==EMPTY_OBJ&&hasOwn(n,t))return s[t]=2,n[t];if((u=e.propsOptions[0])&&hasOwn(u,t))return s[t]=3,a[t];if(r!==EMPTY_OBJ&&hasOwn(r,t))return s[t]=4,r[t];shouldCacheAccess&&(s[t]=0)}}const f=publicPropertiesMap[t];let y,d;if(f)return t==="$attrs"&&track(e.attrs,"get",""),f(e);if((y=m.__cssModules)&&(y=y[t]))return y;if(r!==EMPTY_OBJ&&hasOwn(r,t))return s[t]=4,r[t];if(d=c.config.globalProperties,hasOwn(d,t))return d[t]},set({_:e},t,r){const{data:o,setupState:n,ctx:a}=e;return hasSetupBinding(n,t)?(n[t]=r,!0):o!==EMPTY_OBJ&&hasOwn(o,t)?(o[t]=r,!0):hasOwn(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:o,appContext:n,propsOptions:a}},s){let m;return!!r[s]||e!==EMPTY_OBJ&&hasOwn(e,s)||hasSetupBinding(t,s)||(m=a[0])&&hasOwn(m,s)||hasOwn(o,s)||hasOwn(publicPropertiesMap,s)||hasOwn(n.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:hasOwn(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function useSlots(){return getContext().slots}function useAttrs(){return getContext().attrs}function getContext(){const e=getCurrentInstance();return e.setupContext||(e.setupContext=createSetupContext(e))}function normalizePropsOrEmits(e){return isArray$1(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let shouldCacheAccess=!0;function applyOptions(e){const t=resolveMergedOptions(e),r=e.proxy,o=e.ctx;shouldCacheAccess=!1,t.beforeCreate&&callHook$1(t.beforeCreate,e,"bc");const{data:n,computed:a,methods:s,watch:m,provide:c,inject:u,created:f,beforeMount:y,mounted:d,beforeUpdate:k,updated:b,activated:C,deactivated:A,beforeDestroy:w,beforeUnmount:D,destroyed:F,unmounted:O,render:V,renderTracked:pe,renderTriggered:S,errorCaptured:K,serverPrefetch:M,expose:J,inheritAttrs:j,components:W,directives:oe,filters:ge}=t;if(u&&resolveInjections(u,o,null),s)for(const ae in s){const ie=s[ae];isFunction(ie)&&(o[ae]=ie.bind(r))}if(n){const ae=n.call(r,r);isObject(ae)&&(e.data=reactive(ae))}if(shouldCacheAccess=!0,a)for(const ae in a){const ie=a[ae],be=isFunction(ie)?ie.bind(r,r):isFunction(ie.get)?ie.get.bind(r,r):NOOP,he=!isFunction(ie)&&isFunction(ie.set)?ie.set.bind(r):NOOP,we=computed({get:be,set:he});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>we.value,set:ke=>we.value=ke})}if(m)for(const ae in m)createWatcher(m[ae],o,r,ae);if(c){const ae=isFunction(c)?c.call(r):c;Reflect.ownKeys(ae).forEach(ie=>{provide(ie,ae[ie])})}f&&callHook$1(f,e,"c");function me(ae,ie){isArray$1(ie)?ie.forEach(be=>ae(be.bind(r))):ie&&ae(ie.bind(r))}if(me(onBeforeMount,y),me(onMounted,d),me(onBeforeUpdate,k),me(onUpdated,b),me(onActivated,C),me(onDeactivated,A),me(onErrorCaptured,K),me(onRenderTracked,pe),me(onRenderTriggered,S),me(onBeforeUnmount,D),me(onUnmounted,O),me(onServerPrefetch,M),isArray$1(J))if(J.length){const ae=e.exposed||(e.exposed={});J.forEach(ie=>{Object.defineProperty(ae,ie,{get:()=>r[ie],set:be=>r[ie]=be})})}else e.exposed||(e.exposed={});V&&e.render===NOOP&&(e.render=V),j!=null&&(e.inheritAttrs=j),W&&(e.components=W),oe&&(e.directives=oe),M&&markAsyncBoundary(e)}function resolveInjections(e,t,r=NOOP){isArray$1(e)&&(e=normalizeInject(e));for(const o in e){const n=e[o];let a;isObject(n)?"default"in n?a=inject(n.from||o,n.default,!0):a=inject(n.from||o):a=inject(n),isRef(a)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):t[o]=a}}function callHook$1(e,t,r){callWithAsyncErrorHandling(isArray$1(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,r)}function createWatcher(e,t,r,o){let n=o.includes(".")?createPathGetter(r,o):()=>r[o];if(isString(e)){const a=t[e];isFunction(a)&&watch(n,a)}else if(isFunction(e))watch(n,e.bind(r));else if(isObject(e))if(isArray$1(e))e.forEach(a=>createWatcher(a,t,r,o));else{const a=isFunction(e.handler)?e.handler.bind(r):t[e.handler];isFunction(a)&&watch(n,a,e)}}function resolveMergedOptions(e){const t=e.type,{mixins:r,extends:o}=t,{mixins:n,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,m=a.get(t);let c;return m?c=m:!n.length&&!r&&!o?c=t:(c={},n.length&&n.forEach(u=>mergeOptions$1(c,u,s,!0)),mergeOptions$1(c,t,s)),isObject(t)&&a.set(t,c),c}function mergeOptions$1(e,t,r,o=!1){const{mixins:n,extends:a}=t;a&&mergeOptions$1(e,a,r,!0),n&&n.forEach(s=>mergeOptions$1(e,s,r,!0));for(const s in t)if(!(o&&s==="expose")){const m=internalOptionMergeStrats[s]||r&&r[s];e[s]=m?m(e[s],t[s]):t[s]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeEmitsOrPropsOptions,emits:mergeEmitsOrPropsOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,t){return t?e?function(){return extend(isFunction(e)?e.call(this,this):e,isFunction(t)?t.call(this,this):t)}:t:e}function mergeInject(e,t){return mergeObjectOptions(normalizeInject(e),normalizeInject(t))}function normalizeInject(e){if(isArray$1(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function mergeAsArray(e,t){return e?[...new Set([].concat(e,t))]:t}function mergeObjectOptions(e,t){return e?extend(Object.create(null),e,t):t}function mergeEmitsOrPropsOptions(e,t){return e?isArray$1(e)&&isArray$1(t)?[...new Set([...e,...t])]:extend(Object.create(null),normalizePropsOrEmits(e),normalizePropsOrEmits(t??{})):t}function mergeWatchOptions(e,t){if(!e)return t;if(!t)return e;const r=extend(Object.create(null),e);for(const o in t)r[o]=mergeAsArray(e[o],t[o]);return r}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(e,t){return function(o,n=null){isFunction(o)||(o=extend({},o)),n!=null&&!isObject(n)&&(n=null);const a=createAppContext(),s=new WeakSet,m=[];let c=!1;const u=a.app={_uid:uid$1++,_component:o,_props:n,_container:null,_context:a,_instance:null,version,get config(){return a.config},set config(f){},use(f,...y){return s.has(f)||(f&&isFunction(f.install)?(s.add(f),f.install(u,...y)):isFunction(f)&&(s.add(f),f(u,...y))),u},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),u},component(f,y){return y?(a.components[f]=y,u):a.components[f]},directive(f,y){return y?(a.directives[f]=y,u):a.directives[f]},mount(f,y,d){if(!c){const k=u._ceVNode||createVNode(o,n);return k.appContext=a,d===!0?d="svg":d===!1&&(d=void 0),y&&t?t(k,f):e(k,f,d),c=!0,u._container=f,f.__vue_app__=u,getComponentPublicInstance(k.component)}},onUnmount(f){m.push(f)},unmount(){c&&(callWithAsyncErrorHandling(m,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(f,y){return a.provides[f]=y,u},runWithContext(f){const y=currentApp;currentApp=u;try{return f()}finally{currentApp=y}}};return u}}let currentApp=null;function provide(e,t){if(currentInstance){let r=currentInstance.provides;const o=currentInstance.parent&&currentInstance.parent.provides;o===r&&(r=currentInstance.provides=Object.create(o)),r[e]=t}}function inject(e,t,r=!1){const o=currentInstance||currentRenderingInstance;if(o||currentApp){const n=currentApp?currentApp._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return r&&isFunction(t)?t.call(o&&o.proxy):t}}function hasInjectionContext(){return!!(currentInstance||currentRenderingInstance||currentApp)}const internalObjectProto={},createInternalObject=()=>Object.create(internalObjectProto),isInternalObject=e=>Object.getPrototypeOf(e)===internalObjectProto;function initProps(e,t,r,o=!1){const n={},a=createInternalObject();e.propsDefaults=Object.create(null),setFullProps(e,t,n,a);for(const s in e.propsOptions[0])s in n||(n[s]=void 0);r?e.props=o?n:shallowReactive(n):e.type.props?e.props=n:e.props=a,e.attrs=a}function updateProps(e,t,r,o){const{props:n,attrs:a,vnode:{patchFlag:s}}=e,m=toRaw(n),[c]=e.propsOptions;let u=!1;if((o||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let y=0;y<f.length;y++){let d=f[y];if(isEmitListener(e.emitsOptions,d))continue;const k=t[d];if(c)if(hasOwn(a,d))k!==a[d]&&(a[d]=k,u=!0);else{const b=camelize(d);n[b]=resolvePropValue(c,m,b,k,e,!1)}else k!==a[d]&&(a[d]=k,u=!0)}}}else{setFullProps(e,t,n,a)&&(u=!0);let f;for(const y in m)(!t||!hasOwn(t,y)&&((f=hyphenate(y))===y||!hasOwn(t,f)))&&(c?r&&(r[y]!==void 0||r[f]!==void 0)&&(n[y]=resolvePropValue(c,m,y,void 0,e,!0)):delete n[y]);if(a!==m)for(const y in a)(!t||!hasOwn(t,y))&&(delete a[y],u=!0)}u&&trigger(e.attrs,"set","")}function setFullProps(e,t,r,o){const[n,a]=e.propsOptions;let s=!1,m;if(t)for(let c in t){if(isReservedProp(c))continue;const u=t[c];let f;n&&hasOwn(n,f=camelize(c))?!a||!a.includes(f)?r[f]=u:(m||(m={}))[f]=u:isEmitListener(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,s=!0)}if(a){const c=toRaw(r),u=m||EMPTY_OBJ;for(let f=0;f<a.length;f++){const y=a[f];r[y]=resolvePropValue(n,c,y,u[y],e,!hasOwn(u,y))}}return s}function resolvePropValue(e,t,r,o,n,a){const s=e[r];if(s!=null){const m=hasOwn(s,"default");if(m&&o===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&isFunction(c)){const{propsDefaults:u}=n;if(r in u)o=u[r];else{const f=setCurrentInstance(n);o=u[r]=c.call(null,t),f()}}else o=c;n.ce&&n.ce._setProp(r,o)}s[0]&&(a&&!m?o=!1:s[1]&&(o===""||o===hyphenate(r))&&(o=!0))}return o}const mixinPropsCache=new WeakMap;function normalizePropsOptions(e,t,r=!1){const o=r?mixinPropsCache:t.propsCache,n=o.get(e);if(n)return n;const a=e.props,s={},m=[];let c=!1;if(!isFunction(e)){const f=y=>{c=!0;const[d,k]=normalizePropsOptions(y,t,!0);extend(s,d),k&&m.push(...k)};!r&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!a&&!c)return isObject(e)&&o.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$1(a))for(let f=0;f<a.length;f++){const y=camelize(a[f]);validatePropName(y)&&(s[y]=EMPTY_OBJ)}else if(a)for(const f in a){const y=camelize(f);if(validatePropName(y)){const d=a[f],k=s[y]=isArray$1(d)||isFunction(d)?{type:d}:extend({},d),b=k.type;let C=!1,A=!0;if(isArray$1(b))for(let w=0;w<b.length;++w){const D=b[w],F=isFunction(D)&&D.name;if(F==="Boolean"){C=!0;break}else F==="String"&&(A=!1)}else C=isFunction(b)&&b.name==="Boolean";k[0]=C,k[1]=A,(C||hasOwn(k,"default"))&&m.push(y)}}const u=[s,m];return isObject(e)&&o.set(e,u),u}function validatePropName(e){return e[0]!=="$"&&!isReservedProp(e)}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray$1(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot$1=(e,t,r)=>{if(t._n)return t;const o=withCtx((...n)=>normalizeSlotValue(t(...n)),r);return o._c=!1,o},normalizeObjectSlots=(e,t,r)=>{const o=e._ctx;for(const n in e){if(isInternalKey(n))continue;const a=e[n];if(isFunction(a))t[n]=normalizeSlot$1(n,a,o);else if(a!=null){const s=normalizeSlotValue(a);t[n]=()=>s}}},normalizeVNodeSlots=(e,t)=>{const r=normalizeSlotValue(t);e.slots.default=()=>r},assignSlots=(e,t,r)=>{for(const o in t)(r||o!=="_")&&(e[o]=t[o])},initSlots=(e,t,r)=>{const o=e.slots=createInternalObject();if(e.vnode.shapeFlag&32){const n=t._;n?(assignSlots(o,t,r),r&&def(o,"_",n,!0)):normalizeObjectSlots(t,o)}else t&&normalizeVNodeSlots(e,t)},updateSlots=(e,t,r)=>{const{vnode:o,slots:n}=e;let a=!0,s=EMPTY_OBJ;if(o.shapeFlag&32){const m=t._;m?r&&m===1?a=!1:assignSlots(n,t,r):(a=!t.$stable,normalizeObjectSlots(t,n)),s=t}else t&&(normalizeVNodeSlots(e,t),s={default:1});if(a)for(const m in n)!isInternalKey(m)&&s[m]==null&&delete n[m]},queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,t){const r=getGlobalThis();r.__VUE__=!0;const{insert:o,remove:n,patchProp:a,createElement:s,createText:m,createComment:c,setText:u,setElementText:f,parentNode:y,nextSibling:d,setScopeId:k=NOOP,insertStaticContent:b}=e,C=(R,E,_,z=null,T=null,I=null,B=void 0,H=null,L=!!E.dynamicChildren)=>{if(R===E)return;R&&!isSameVNodeType(R,E)&&(z=P(R),ke(R,T,I,!0),R=null),E.patchFlag===-2&&(L=!1,E.dynamicChildren=null);const{type:N,ref:te,shapeFlag:q}=E;switch(N){case Text:A(R,E,_,z);break;case Comment:w(R,E,_,z);break;case Static:R==null&&D(E,_,z,B);break;case Fragment:W(R,E,_,z,T,I,B,H,L);break;default:q&1?V(R,E,_,z,T,I,B,H,L):q&6?oe(R,E,_,z,T,I,B,H,L):(q&64||q&128)&&N.process(R,E,_,z,T,I,B,H,L,X)}te!=null&&T&&setRef(te,R&&R.ref,I,E||R,!E)},A=(R,E,_,z)=>{if(R==null)o(E.el=m(E.children),_,z);else{const T=E.el=R.el;E.children!==R.children&&u(T,E.children)}},w=(R,E,_,z)=>{R==null?o(E.el=c(E.children||""),_,z):E.el=R.el},D=(R,E,_,z)=>{[R.el,R.anchor]=b(R.children,E,_,z,R.el,R.anchor)},F=({el:R,anchor:E},_,z)=>{let T;for(;R&&R!==E;)T=d(R),o(R,_,z),R=T;o(E,_,z)},O=({el:R,anchor:E})=>{let _;for(;R&&R!==E;)_=d(R),n(R),R=_;n(E)},V=(R,E,_,z,T,I,B,H,L)=>{E.type==="svg"?B="svg":E.type==="math"&&(B="mathml"),R==null?pe(E,_,z,T,I,B,H,L):M(R,E,T,I,B,H,L)},pe=(R,E,_,z,T,I,B,H)=>{let L,N;const{props:te,shapeFlag:q,transition:Q,dirs:ne}=R;if(L=R.el=s(R.type,I,te&&te.is,te),q&8?f(L,R.children):q&16&&K(R.children,L,null,z,T,resolveChildrenNamespace(R,I),B,H),ne&&invokeDirectiveHook(R,null,z,"created"),S(L,R,R.scopeId,B,z),te){for(const fe in te)fe!=="value"&&!isReservedProp(fe)&&a(L,fe,null,te[fe],I,z);"value"in te&&a(L,"value",null,te.value,I),(N=te.onVnodeBeforeMount)&&invokeVNodeHook(N,z,R)}ne&&invokeDirectiveHook(R,null,z,"beforeMount");const se=needTransition(T,Q);se&&Q.beforeEnter(L),o(L,E,_),((N=te&&te.onVnodeMounted)||se||ne)&&queuePostRenderEffect(()=>{N&&invokeVNodeHook(N,z,R),se&&Q.enter(L),ne&&invokeDirectiveHook(R,null,z,"mounted")},T)},S=(R,E,_,z,T)=>{if(_&&k(R,_),z)for(let I=0;I<z.length;I++)k(R,z[I]);if(T){let I=T.subTree;if(E===I||isSuspense(I.type)&&(I.ssContent===E||I.ssFallback===E)){const B=T.vnode;S(R,B,B.scopeId,B.slotScopeIds,T.parent)}}},K=(R,E,_,z,T,I,B,H,L=0)=>{for(let N=L;N<R.length;N++){const te=R[N]=H?cloneIfMounted(R[N]):normalizeVNode(R[N]);C(null,te,E,_,z,T,I,B,H)}},M=(R,E,_,z,T,I,B)=>{const H=E.el=R.el;let{patchFlag:L,dynamicChildren:N,dirs:te}=E;L|=R.patchFlag&16;const q=R.props||EMPTY_OBJ,Q=E.props||EMPTY_OBJ;let ne;if(_&&toggleRecurse(_,!1),(ne=Q.onVnodeBeforeUpdate)&&invokeVNodeHook(ne,_,E,R),te&&invokeDirectiveHook(E,R,_,"beforeUpdate"),_&&toggleRecurse(_,!0),(q.innerHTML&&Q.innerHTML==null||q.textContent&&Q.textContent==null)&&f(H,""),N?J(R.dynamicChildren,N,H,_,z,resolveChildrenNamespace(E,T),I):B||ie(R,E,H,null,_,z,resolveChildrenNamespace(E,T),I,!1),L>0){if(L&16)j(H,q,Q,_,T);else if(L&2&&q.class!==Q.class&&a(H,"class",null,Q.class,T),L&4&&a(H,"style",q.style,Q.style,T),L&8){const se=E.dynamicProps;for(let fe=0;fe<se.length;fe++){const ce=se[fe],Re=q[ce],ve=Q[ce];(ve!==Re||ce==="value")&&a(H,ce,Re,ve,T,_)}}L&1&&R.children!==E.children&&f(H,E.children)}else!B&&N==null&&j(H,q,Q,_,T);((ne=Q.onVnodeUpdated)||te)&&queuePostRenderEffect(()=>{ne&&invokeVNodeHook(ne,_,E,R),te&&invokeDirectiveHook(E,R,_,"updated")},z)},J=(R,E,_,z,T,I,B)=>{for(let H=0;H<E.length;H++){const L=R[H],N=E[H],te=L.el&&(L.type===Fragment||!isSameVNodeType(L,N)||L.shapeFlag&70)?y(L.el):_;C(L,N,te,null,z,T,I,B,!0)}},j=(R,E,_,z,T)=>{if(E!==_){if(E!==EMPTY_OBJ)for(const I in E)!isReservedProp(I)&&!(I in _)&&a(R,I,E[I],null,T,z);for(const I in _){if(isReservedProp(I))continue;const B=_[I],H=E[I];B!==H&&I!=="value"&&a(R,I,H,B,T,z)}"value"in _&&a(R,"value",E.value,_.value,T)}},W=(R,E,_,z,T,I,B,H,L)=>{const N=E.el=R?R.el:m(""),te=E.anchor=R?R.anchor:m("");let{patchFlag:q,dynamicChildren:Q,slotScopeIds:ne}=E;ne&&(H=H?H.concat(ne):ne),R==null?(o(N,_,z),o(te,_,z),K(E.children||[],_,te,T,I,B,H,L)):q>0&&q&64&&Q&&R.dynamicChildren?(J(R.dynamicChildren,Q,_,T,I,B,H),(E.key!=null||T&&E===T.subTree)&&traverseStaticChildren(R,E,!0)):ie(R,E,_,te,T,I,B,H,L)},oe=(R,E,_,z,T,I,B,H,L)=>{E.slotScopeIds=H,R==null?E.shapeFlag&512?T.ctx.activate(E,_,z,B,L):ge(E,_,z,T,I,B,L):de(R,E,L)},ge=(R,E,_,z,T,I,B)=>{const H=R.component=createComponentInstance(R,z,T);if(isKeepAlive(R)&&(H.ctx.renderer=X),setupComponent(H,!1,B),H.asyncDep){if(T&&T.registerDep(H,me,B),!R.el){const L=H.subTree=createVNode(Comment);w(null,L,E,_)}}else me(H,R,E,_,T,I,B)},de=(R,E,_)=>{const z=E.component=R.component;if(shouldUpdateComponent(R,E,_))if(z.asyncDep&&!z.asyncResolved){ae(z,E,_);return}else z.next=E,z.update();else E.el=R.el,z.vnode=E},me=(R,E,_,z,T,I,B)=>{const H=()=>{if(R.isMounted){let{next:q,bu:Q,u:ne,parent:se,vnode:fe}=R;{const Ce=locateNonHydratedAsyncRoot(R);if(Ce){q&&(q.el=fe.el,ae(R,q,B)),Ce.asyncDep.then(()=>{R.isUnmounted||H()});return}}let ce=q,Re;toggleRecurse(R,!1),q?(q.el=fe.el,ae(R,q,B)):q=fe,Q&&invokeArrayFns(Q),(Re=q.props&&q.props.onVnodeBeforeUpdate)&&invokeVNodeHook(Re,se,q,fe),toggleRecurse(R,!0);const ve=renderComponentRoot(R),Ae=R.subTree;R.subTree=ve,C(Ae,ve,y(Ae.el),P(Ae),R,T,I),q.el=ve.el,ce===null&&updateHOCHostEl(R,ve.el),ne&&queuePostRenderEffect(ne,T),(Re=q.props&&q.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(Re,se,q,fe),T)}else{let q;const{el:Q,props:ne}=E,{bm:se,m:fe,parent:ce,root:Re,type:ve}=R,Ae=isAsyncWrapper(E);if(toggleRecurse(R,!1),se&&invokeArrayFns(se),!Ae&&(q=ne&&ne.onVnodeBeforeMount)&&invokeVNodeHook(q,ce,E),toggleRecurse(R,!0),Q&&ye){const Ce=()=>{R.subTree=renderComponentRoot(R),ye(Q,R.subTree,R,T,null)};Ae&&ve.__asyncHydrate?ve.__asyncHydrate(Q,R,Ce):Ce()}else{Re.ce&&Re.ce._injectChildStyle(ve);const Ce=R.subTree=renderComponentRoot(R);C(null,Ce,_,z,R,T,I),E.el=Ce.el}if(fe&&queuePostRenderEffect(fe,T),!Ae&&(q=ne&&ne.onVnodeMounted)){const Ce=E;queuePostRenderEffect(()=>invokeVNodeHook(q,ce,Ce),T)}(E.shapeFlag&256||ce&&isAsyncWrapper(ce.vnode)&&ce.vnode.shapeFlag&256)&&R.a&&queuePostRenderEffect(R.a,T),R.isMounted=!0,E=_=z=null}};R.scope.on();const L=R.effect=new ReactiveEffect(H);R.scope.off();const N=R.update=L.run.bind(L),te=R.job=L.runIfDirty.bind(L);te.i=R,te.id=R.uid,L.scheduler=()=>queueJob(te),toggleRecurse(R,!0),N()},ae=(R,E,_)=>{E.component=R;const z=R.vnode.props;R.vnode=E,R.next=null,updateProps(R,E.props,z,_),updateSlots(R,E.children,_),pauseTracking(),flushPreFlushCbs(R),resetTracking()},ie=(R,E,_,z,T,I,B,H,L=!1)=>{const N=R&&R.children,te=R?R.shapeFlag:0,q=E.children,{patchFlag:Q,shapeFlag:ne}=E;if(Q>0){if(Q&128){he(N,q,_,z,T,I,B,H,L);return}else if(Q&256){be(N,q,_,z,T,I,B,H,L);return}}ne&8?(te&16&&_e(N,T,I),q!==N&&f(_,q)):te&16?ne&16?he(N,q,_,z,T,I,B,H,L):_e(N,T,I,!0):(te&8&&f(_,""),ne&16&&K(q,_,z,T,I,B,H,L))},be=(R,E,_,z,T,I,B,H,L)=>{R=R||EMPTY_ARR,E=E||EMPTY_ARR;const N=R.length,te=E.length,q=Math.min(N,te);let Q;for(Q=0;Q<q;Q++){const ne=E[Q]=L?cloneIfMounted(E[Q]):normalizeVNode(E[Q]);C(R[Q],ne,_,null,T,I,B,H,L)}N>te?_e(R,T,I,!0,!1,q):K(E,_,z,T,I,B,H,L,q)},he=(R,E,_,z,T,I,B,H,L)=>{let N=0;const te=E.length;let q=R.length-1,Q=te-1;for(;N<=q&&N<=Q;){const ne=R[N],se=E[N]=L?cloneIfMounted(E[N]):normalizeVNode(E[N]);if(isSameVNodeType(ne,se))C(ne,se,_,null,T,I,B,H,L);else break;N++}for(;N<=q&&N<=Q;){const ne=R[q],se=E[Q]=L?cloneIfMounted(E[Q]):normalizeVNode(E[Q]);if(isSameVNodeType(ne,se))C(ne,se,_,null,T,I,B,H,L);else break;q--,Q--}if(N>q){if(N<=Q){const ne=Q+1,se=ne<te?E[ne].el:z;for(;N<=Q;)C(null,E[N]=L?cloneIfMounted(E[N]):normalizeVNode(E[N]),_,se,T,I,B,H,L),N++}}else if(N>Q)for(;N<=q;)ke(R[N],T,I,!0),N++;else{const ne=N,se=N,fe=new Map;for(N=se;N<=Q;N++){const Ee=E[N]=L?cloneIfMounted(E[N]):normalizeVNode(E[N]);Ee.key!=null&&fe.set(Ee.key,N)}let ce,Re=0;const ve=Q-se+1;let Ae=!1,Ce=0;const Pe=new Array(ve);for(N=0;N<ve;N++)Pe[N]=0;for(N=ne;N<=q;N++){const Ee=R[N];if(Re>=ve){ke(Ee,T,I,!0);continue}let Se;if(Ee.key!=null)Se=fe.get(Ee.key);else for(ce=se;ce<=Q;ce++)if(Pe[ce-se]===0&&isSameVNodeType(Ee,E[ce])){Se=ce;break}Se===void 0?ke(Ee,T,I,!0):(Pe[Se-se]=N+1,Se>=Ce?Ce=Se:Ae=!0,C(Ee,E[Se],_,null,T,I,B,H,L),Re++)}const Me=Ae?getSequence(Pe):EMPTY_ARR;for(ce=Me.length-1,N=ve-1;N>=0;N--){const Ee=se+N,Se=E[Ee],De=Ee+1<te?E[Ee+1].el:z;Pe[N]===0?C(null,Se,_,De,T,I,B,H,L):Ae&&(ce<0||N!==Me[ce]?we(Se,_,De,2):ce--)}}},we=(R,E,_,z,T=null)=>{const{el:I,type:B,transition:H,children:L,shapeFlag:N}=R;if(N&6){we(R.component.subTree,E,_,z);return}if(N&128){R.suspense.move(E,_,z);return}if(N&64){B.move(R,E,_,X);return}if(B===Fragment){o(I,E,_);for(let q=0;q<L.length;q++)we(L[q],E,_,z);o(R.anchor,E,_);return}if(B===Static){F(R,E,_);return}if(z!==2&&N&1&&H)if(z===0)H.beforeEnter(I),o(I,E,_),queuePostRenderEffect(()=>H.enter(I),T);else{const{leave:q,delayLeave:Q,afterLeave:ne}=H,se=()=>o(I,E,_),fe=()=>{q(I,()=>{se(),ne&&ne()})};Q?Q(I,se,fe):fe()}else o(I,E,_)},ke=(R,E,_,z=!1,T=!1)=>{const{type:I,props:B,ref:H,children:L,dynamicChildren:N,shapeFlag:te,patchFlag:q,dirs:Q,cacheIndex:ne}=R;if(q===-2&&(T=!1),H!=null&&setRef(H,null,_,R,!0),ne!=null&&(E.renderCache[ne]=void 0),te&256){E.ctx.deactivate(R);return}const se=te&1&&Q,fe=!isAsyncWrapper(R);let ce;if(fe&&(ce=B&&B.onVnodeBeforeUnmount)&&invokeVNodeHook(ce,E,R),te&6)Oe(R.component,_,z);else{if(te&128){R.suspense.unmount(_,z);return}se&&invokeDirectiveHook(R,null,E,"beforeUnmount"),te&64?R.type.remove(R,E,_,X,z):N&&!N.hasOnce&&(I!==Fragment||q>0&&q&64)?_e(N,E,_,!1,!0):(I===Fragment&&q&384||!T&&te&16)&&_e(L,E,_),z&&xe(R)}(fe&&(ce=B&&B.onVnodeUnmounted)||se)&&queuePostRenderEffect(()=>{ce&&invokeVNodeHook(ce,E,R),se&&invokeDirectiveHook(R,null,E,"unmounted")},_)},xe=R=>{const{type:E,el:_,anchor:z,transition:T}=R;if(E===Fragment){Te(_,z);return}if(E===Static){O(R);return}const I=()=>{n(_),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(R.shapeFlag&1&&T&&!T.persisted){const{leave:B,delayLeave:H}=T,L=()=>B(_,I);H?H(R.el,I,L):L()}else I()},Te=(R,E)=>{let _;for(;R!==E;)_=d(R),n(R),R=_;n(E)},Oe=(R,E,_)=>{const{bum:z,scope:T,job:I,subTree:B,um:H,m:L,a:N}=R;invalidateMount(L),invalidateMount(N),z&&invokeArrayFns(z),T.stop(),I&&(I.flags|=8,ke(B,R,E,_)),H&&queuePostRenderEffect(H,E),queuePostRenderEffect(()=>{R.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},_e=(R,E,_,z=!1,T=!1,I=0)=>{for(let B=I;B<R.length;B++)ke(R[B],E,_,z,T)},P=R=>{if(R.shapeFlag&6)return P(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const E=d(R.anchor||R.el),_=E&&E[TeleportEndKey];return _?d(_):E};let G=!1;const U=(R,E,_)=>{R==null?E._vnode&&ke(E._vnode,null,null,!0):C(E._vnode||null,R,E,null,null,null,_),E._vnode=R,G||(G=!0,flushPreFlushCbs(),flushPostFlushCbs(),G=!1)},X={p:C,um:ke,m:we,r:xe,mt:ge,mc:K,pc:ie,pbc:J,n:P,o:e};let ue,ye;return{render:U,hydrate:ue,createApp:createAppAPI(U,ue)}}function resolveChildrenNamespace({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function toggleRecurse({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function needTransition(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function traverseStaticChildren(e,t,r=!1){const o=e.children,n=t.children;if(isArray$1(o)&&isArray$1(n))for(let a=0;a<o.length;a++){const s=o[a];let m=n[a];m.shapeFlag&1&&!m.dynamicChildren&&((m.patchFlag<=0||m.patchFlag===32)&&(m=n[a]=cloneIfMounted(n[a]),m.el=s.el),!r&&m.patchFlag!==-2&&traverseStaticChildren(s,m)),m.type===Text&&(m.el=s.el)}}function getSequence(e){const t=e.slice(),r=[0];let o,n,a,s,m;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(n=r[r.length-1],e[n]<u){t[o]=n,r.push(o);continue}for(a=0,s=r.length-1;a<s;)m=a+s>>1,e[r[m]]<u?a=m+1:s=m;u<e[r[a]]&&(a>0&&(t[o]=r[a-1]),r[a]=o)}}for(a=r.length,s=r[a-1];a-- >0;)r[a]=s,s=t[s];return r}function locateNonHydratedAsyncRoot(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:locateNonHydratedAsyncRoot(t)}function invalidateMount(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ssrContextKey=Symbol.for("v-scx"),useSSRContext=()=>inject(ssrContextKey);function watchEffect(e,t){return doWatch(e,null,t)}function watch(e,t,r){return doWatch(e,t,r)}function doWatch(e,t,r=EMPTY_OBJ){const{immediate:o,deep:n,flush:a,once:s}=r,m=extend({},r),c=t&&o||!t&&a!=="post";let u;if(isInSSRComponentSetup){if(a==="sync"){const k=useSSRContext();u=k.__watcherHandles||(k.__watcherHandles=[])}else if(!c){const k=()=>{};return k.stop=NOOP,k.resume=NOOP,k.pause=NOOP,k}}const f=currentInstance;m.call=(k,b,C)=>callWithAsyncErrorHandling(k,f,b,C);let y=!1;a==="post"?m.scheduler=k=>{queuePostRenderEffect(k,f&&f.suspense)}:a!=="sync"&&(y=!0,m.scheduler=(k,b)=>{b?k():queueJob(k)}),m.augmentJob=k=>{t&&(k.flags|=4),y&&(k.flags|=2,f&&(k.id=f.uid,k.i=f))};const d=watch$1(e,t,m);return isInSSRComponentSetup&&(u?u.push(d):c&&d()),d}function instanceWatch(e,t,r){const o=this.proxy,n=isString(e)?e.includes(".")?createPathGetter(o,e):()=>o[e]:e.bind(o,o);let a;isFunction(t)?a=t:(a=t.handler,r=t);const s=setCurrentInstance(this),m=doWatch(n,a.bind(o),r);return s(),m}function createPathGetter(e,t){const r=t.split(".");return()=>{let o=e;for(let n=0;n<r.length&&o;n++)o=o[r[n]];return o}}const getModelModifiers=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${camelize(t)}Modifiers`]||e[`${hyphenate(t)}Modifiers`];function emit(e,t,...r){if(e.isUnmounted)return;const o=e.vnode.props||EMPTY_OBJ;let n=r;const a=t.startsWith("update:"),s=a&&getModelModifiers(o,t.slice(7));s&&(s.trim&&(n=r.map(f=>isString(f)?f.trim():f)),s.number&&(n=r.map(looseToNumber)));let m,c=o[m=toHandlerKey(t)]||o[m=toHandlerKey(camelize(t))];!c&&a&&(c=o[m=toHandlerKey(hyphenate(t))]),c&&callWithAsyncErrorHandling(c,e,6,n);const u=o[m+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[m])return;e.emitted[m]=!0,callWithAsyncErrorHandling(u,e,6,n)}}function normalizeEmitsOptions(e,t,r=!1){const o=t.emitsCache,n=o.get(e);if(n!==void 0)return n;const a=e.emits;let s={},m=!1;if(!isFunction(e)){const c=u=>{const f=normalizeEmitsOptions(u,t,!0);f&&(m=!0,extend(s,f))};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!m?(isObject(e)&&o.set(e,null),null):(isArray$1(a)?a.forEach(c=>s[c]=null):extend(s,a),isObject(e)&&o.set(e,s),s)}function isEmitListener(e,t){return!e||!isOn(t)?!1:(t=t.slice(2).replace(/Once$/,""),hasOwn(e,t[0].toLowerCase()+t.slice(1))||hasOwn(e,hyphenate(t))||hasOwn(e,t))}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:t,vnode:r,proxy:o,withProxy:n,propsOptions:[a],slots:s,attrs:m,emit:c,render:u,renderCache:f,props:y,data:d,setupState:k,ctx:b,inheritAttrs:C}=e,A=setCurrentRenderingInstance(e);let w,D;try{if(r.shapeFlag&4){const O=n||o,V=O;w=normalizeVNode(u.call(V,O,f,y,k,d,b)),D=m}else{const O=t;w=normalizeVNode(O.length>1?O(y,{attrs:m,slots:s,emit:c}):O(y,null)),D=t.props?m:getFunctionalFallthrough(m)}}catch(O){blockStack.length=0,handleError(O,e,1),w=createVNode(Comment)}let F=w;if(D&&C!==!1){const O=Object.keys(D),{shapeFlag:V}=F;O.length&&V&7&&(a&&O.some(isModelListener)&&(D=filterModelListeners(D,a)),F=cloneVNode(F,D,!1,!0))}return r.dirs&&(F=cloneVNode(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(r.dirs):r.dirs),r.transition&&setTransitionHooks(F,r.transition),w=F,setCurrentRenderingInstance(A),w}const getFunctionalFallthrough=e=>{let t;for(const r in e)(r==="class"||r==="style"||isOn(r))&&((t||(t={}))[r]=e[r]);return t},filterModelListeners=(e,t)=>{const r={};for(const o in e)(!isModelListener(o)||!(o.slice(9)in t))&&(r[o]=e[o]);return r};function shouldUpdateComponent(e,t,r){const{props:o,children:n,component:a}=e,{props:s,children:m,patchFlag:c}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&c>=0){if(c&1024)return!0;if(c&16)return o?hasPropsChanged(o,s,u):!!s;if(c&8){const f=t.dynamicProps;for(let y=0;y<f.length;y++){const d=f[y];if(s[d]!==o[d]&&!isEmitListener(u,d))return!0}}}else return(n||m)&&(!m||!m.$stable)?!0:o===s?!1:o?s?hasPropsChanged(o,s,u):!0:!!s;return!1}function hasPropsChanged(e,t,r){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let n=0;n<o.length;n++){const a=o[n];if(t[a]!==e[a]&&!isEmitListener(r,a))return!0}return!1}function updateHOCHostEl({vnode:e,parent:t},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=r,t=t.parent;else break}}const isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,t){t&&t.pendingBranch?isArray$1(e)?t.effects.push(...e):t.effects.push(e):queuePostFlushCb(e)}const Fragment=Symbol.for("v-fgt"),Text=Symbol.for("v-txt"),Comment=Symbol.for("v-cmt"),Static=Symbol.for("v-stc"),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e){isBlockTreeEnabled+=e,e<0&&currentBlock&&(currentBlock.hasOnce=!0)}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,t,r,o,n,a){return setupBlock(createBaseVNode(e,t,r,o,n,a,!0))}function createBlock(e,t,r,o,n){return setupBlock(createVNode(e,t,r,o,n,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,t){return e.type===t.type&&e.key===t.key}const normalizeKey=({key:e})=>e??null,normalizeRef=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?isString(e)||isRef(e)||isFunction(e)?{i:currentRenderingInstance,r:e,k:t,f:!!r}:e:null);function createBaseVNode(e,t=null,r=null,o=0,n=null,a=e===Fragment?0:1,s=!1,m=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&normalizeKey(t),ref:t&&normalizeRef(t),scopeId:currentScopeId,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return m?(normalizeChildren(c,r),a&128&&e.normalize(c)):r&&(c.shapeFlag|=isString(r)?8:16),isBlockTreeEnabled>0&&!s&&currentBlock&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&currentBlock.push(c),c}const createVNode=_createVNode;function _createVNode(e,t=null,r=null,o=0,n=null,a=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment),isVNode(e)){const m=cloneVNode(e,t,!0);return r&&normalizeChildren(m,r),isBlockTreeEnabled>0&&!a&&currentBlock&&(m.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=m:currentBlock.push(m)),m.patchFlag=-2,m}if(isClassComponent(e)&&(e=e.__vccOpts),t){t=guardReactiveProps(t);let{class:m,style:c}=t;m&&!isString(m)&&(t.class=normalizeClass(m)),isObject(c)&&(isProxy(c)&&!isArray$1(c)&&(c=extend({},c)),t.style=normalizeStyle(c))}const s=isString(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject(e)?4:isFunction(e)?2:0;return createBaseVNode(e,t,r,o,n,s,a,!0)}function guardReactiveProps(e){return e?isProxy(e)||isInternalObject(e)?extend({},e):e:null}function cloneVNode(e,t,r=!1,o=!1){const{props:n,ref:a,patchFlag:s,children:m,transition:c}=e,u=t?mergeProps(n||{},t):n,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&normalizeKey(u),ref:t&&t.ref?r&&a?isArray$1(a)?a.concat(normalizeRef(t)):[a,normalizeRef(t)]:normalizeRef(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fragment?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&setTransitionHooks(f,c.clone(f)),f}function createTextVNode(e=" ",t=0){return createVNode(Text,null,e,t)}function createCommentVNode(e="",t=!1){return t?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray$1(e)?createVNode(Fragment,null,e.slice()):isVNode(e)?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cloneVNode(e)}function normalizeChildren(e,t){let r=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(isArray$1(t))r=16;else if(typeof t=="object")if(o&65){const n=t.default;n&&(n._c&&(n._d=!1),normalizeChildren(e,n()),n._c&&(n._d=!0));return}else{r=32;const n=t._;!n&&!isInternalObject(t)?t._ctx=currentRenderingInstance:n===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else isFunction(t)?(t={default:t,_ctx:currentRenderingInstance},r=32):(t=String(t),o&64?(r=16,t=[createTextVNode(t)]):r=8);e.children=t,e.shapeFlag|=r}function mergeProps(...e){const t={};for(let r=0;r<e.length;r++){const o=e[r];for(const n in o)if(n==="class")t.class!==o.class&&(t.class=normalizeClass([t.class,o.class]));else if(n==="style")t.style=normalizeStyle([t.style,o.style]);else if(isOn(n)){const a=t[n],s=o[n];s&&a!==s&&!(isArray$1(a)&&a.includes(s))&&(t[n]=a?[].concat(a,s):s)}else n!==""&&(t[n]=o[n])}return t}function invokeVNodeHook(e,t,r,o=null){callWithAsyncErrorHandling(e,t,7,[r,o])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(e,t,r){const o=e.type,n=(t?t.appContext:e.appContext)||emptyAppContext,a={uid:uid++,vnode:e,type:o,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(o,n),emitsOptions:normalizeEmitsOptions(o,n),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:o.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=emit.bind(null,a),e.ce&&e.ce(a),a}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance;let internalSetCurrentInstance,setInSSRSetupState;{const e=getGlobalThis(),t=(r,o)=>{let n;return(n=e[r])||(n=e[r]=[]),n.push(o),a=>{n.length>1?n.forEach(s=>s(a)):n[0](a)}};internalSetCurrentInstance=t("__VUE_INSTANCE_SETTERS__",r=>currentInstance=r),setInSSRSetupState=t("__VUE_SSR_SETTERS__",r=>isInSSRComponentSetup=r)}const setCurrentInstance=e=>{const t=currentInstance;return internalSetCurrentInstance(e),e.scope.on(),()=>{e.scope.off(),internalSetCurrentInstance(t)}},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),internalSetCurrentInstance(null)};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,t=!1,r=!1){t&&setInSSRSetupState(t);const{props:o,children:n}=e.vnode,a=isStatefulComponent(e);initProps(e,o,a,t),initSlots(e,n,r);const s=a?setupStatefulComponent(e,t):void 0;return t&&setInSSRSetupState(!1),s}function setupStatefulComponent(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,PublicInstanceProxyHandlers);const{setup:o}=r;if(o){pauseTracking();const n=e.setupContext=o.length>1?createSetupContext(e):null,a=setCurrentInstance(e),s=callWithErrorHandling(o,e,0,[e.props,n]),m=isPromise(s);if(resetTracking(),a(),(m||e.sp)&&!isAsyncWrapper(e)&&markAsyncBoundary(e),m){if(s.then(unsetCurrentInstance,unsetCurrentInstance),t)return s.then(c=>{handleSetupResult(e,c,t)}).catch(c=>{handleError(c,e,0)});e.asyncDep=s}else handleSetupResult(e,s,t)}else finishComponentSetup(e,t)}function handleSetupResult(e,t,r){isFunction(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:isObject(t)&&(e.setupState=proxyRefs(t)),finishComponentSetup(e,r)}let compile;function finishComponentSetup(e,t,r){const o=e.type;if(!e.render){if(!t&&compile&&!o.render){const n=o.template||resolveMergedOptions(e).template;if(n){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:m,compilerOptions:c}=o,u=extend(extend({isCustomElement:a,delimiters:m},s),c);o.render=compile(n,u)}}e.render=o.render||NOOP}{const n=setCurrentInstance(e);pauseTracking();try{applyOptions(e)}finally{resetTracking(),n()}}}const attrsProxyHandlers={get(e,t){return track(e,"get",""),e[t]}};function createSetupContext(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,attrsProxyHandlers),slots:e.slots,emit:e.emit,expose:t}}function getComponentPublicInstance(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in publicPropertiesMap)return publicPropertiesMap[r](e)},has(t,r){return r in t||r in publicPropertiesMap}})):e.proxy}const classifyRE=/(?:^|[-_])(\w)/g,classify=e=>e.replace(classifyRE,t=>t.toUpperCase()).replace(/[-_]/g,"");function getComponentName(e,t=!0){return isFunction(e)?e.displayName||e.name:e.name||t&&e.__name}function formatComponentName(e,t,r=!1){let o=getComponentName(t);if(!o&&t.__file){const n=t.__file.match(/([^/\\]+)\.\w+$/);n&&(o=n[1])}if(!o&&e&&e.parent){const n=a=>{for(const s in a)if(a[s]===t)return s};o=n(e.components||e.parent.type.components)||n(e.appContext.components)}return o?classify(o):r?"App":"Anonymous"}function isClassComponent(e){return isFunction(e)&&"__vccOpts"in e}const computed=(e,t)=>computed$1(e,t,isInSSRComponentSetup);function h(e,t,r){const o=arguments.length;return o===2?isObject(t)&&!isArray$1(t)?isVNode(t)?createVNode(e,null,[t]):createVNode(e,t):createVNode(e,null,t):(o>3?r=Array.prototype.slice.call(arguments,2):o===3&&isVNode(r)&&(r=[r]),createVNode(e,t,r))}const version="3.5.12",warn=NOOP;/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let policy;const tt=typeof window<"u"&&window.trustedTypes;if(tt)try{policy=tt.createPolicy("vue",{createHTML:e=>e})}catch{}const unsafeToTrustedHTML=policy?e=>policy.createHTML(e):e=>e,svgNS="http://www.w3.org/2000/svg",mathmlNS="http://www.w3.org/1998/Math/MathML",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,o)=>{const n=t==="svg"?doc.createElementNS(svgNS,e):t==="mathml"?doc.createElementNS(mathmlNS,e):r?doc.createElement(e,{is:r}):doc.createElement(e);return e==="select"&&o&&o.multiple!=null&&n.setAttribute("multiple",o.multiple),n},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,o,n,a){const s=r?r.previousSibling:t.lastChild;if(n&&(n===a||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),r),!(n===a||!(n=n.nextSibling)););else{templateContainer.innerHTML=unsafeToTrustedHTML(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const m=templateContainer.content;if(o==="svg"||o==="mathml"){const c=m.firstChild;for(;c.firstChild;)m.appendChild(c.firstChild);m.removeChild(c)}t.insertBefore(m,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},TRANSITION="transition",ANIMATION="animation",vtcKey=Symbol("_vtc"),DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TransitionPropsValidators=extend({},BaseTransitionPropsValidators,DOMTransitionPropsValidators),decorate$1=e=>(e.displayName="Transition",e.props=TransitionPropsValidators,e),Transition=decorate$1((e,{slots:t})=>h(BaseTransition,resolveTransitionProps(e),t)),callHook=(e,t=[])=>{isArray$1(e)?e.forEach(r=>r(...t)):e&&e(...t)},hasExplicitCallback=e=>e?isArray$1(e)?e.some(t=>t.length>1):e.length>1:!1;function resolveTransitionProps(e){const t={};for(const W in e)W in DOMTransitionPropsValidators||(t[W]=e[W]);if(e.css===!1)return t;const{name:r="v",type:o,duration:n,enterFromClass:a=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:m=`${r}-enter-to`,appearFromClass:c=a,appearActiveClass:u=s,appearToClass:f=m,leaveFromClass:y=`${r}-leave-from`,leaveActiveClass:d=`${r}-leave-active`,leaveToClass:k=`${r}-leave-to`}=e,b=normalizeDuration(n),C=b&&b[0],A=b&&b[1],{onBeforeEnter:w,onEnter:D,onEnterCancelled:F,onLeave:O,onLeaveCancelled:V,onBeforeAppear:pe=w,onAppear:S=D,onAppearCancelled:K=F}=t,M=(W,oe,ge)=>{removeTransitionClass(W,oe?f:m),removeTransitionClass(W,oe?u:s),ge&&ge()},J=(W,oe)=>{W._isLeaving=!1,removeTransitionClass(W,y),removeTransitionClass(W,k),removeTransitionClass(W,d),oe&&oe()},j=W=>(oe,ge)=>{const de=W?S:D,me=()=>M(oe,W,ge);callHook(de,[oe,me]),nextFrame(()=>{removeTransitionClass(oe,W?c:a),addTransitionClass(oe,W?f:m),hasExplicitCallback(de)||whenTransitionEnds(oe,o,C,me)})};return extend(t,{onBeforeEnter(W){callHook(w,[W]),addTransitionClass(W,a),addTransitionClass(W,s)},onBeforeAppear(W){callHook(pe,[W]),addTransitionClass(W,c),addTransitionClass(W,u)},onEnter:j(!1),onAppear:j(!0),onLeave(W,oe){W._isLeaving=!0;const ge=()=>J(W,oe);addTransitionClass(W,y),addTransitionClass(W,d),forceReflow(),nextFrame(()=>{W._isLeaving&&(removeTransitionClass(W,y),addTransitionClass(W,k),hasExplicitCallback(O)||whenTransitionEnds(W,o,A,ge))}),callHook(O,[W,ge])},onEnterCancelled(W){M(W,!1),callHook(F,[W])},onAppearCancelled(W){M(W,!0),callHook(K,[W])},onLeaveCancelled(W){J(W),callHook(V,[W])}})}function normalizeDuration(e){if(e==null)return null;if(isObject(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const t=NumberOf(e);return[t,t]}}function NumberOf(e){return toNumber(e)}function addTransitionClass(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[vtcKey]||(e[vtcKey]=new Set)).add(t)}function removeTransitionClass(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const r=e[vtcKey];r&&(r.delete(t),r.size||(e[vtcKey]=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,t,r,o){const n=e._endId=++endId,a=()=>{n===e._endId&&o()};if(r!=null)return setTimeout(a,r);const{type:s,timeout:m,propCount:c}=getTransitionInfo(e,t);if(!s)return o();const u=s+"end";let f=0;const y=()=>{e.removeEventListener(u,d),a()},d=k=>{k.target===e&&++f>=c&&y()};setTimeout(()=>{f<c&&y()},m+1),e.addEventListener(u,d)}function getTransitionInfo(e,t){const r=window.getComputedStyle(e),o=b=>(r[b]||"").split(", "),n=o(`${TRANSITION}Delay`),a=o(`${TRANSITION}Duration`),s=getTimeout(n,a),m=o(`${ANIMATION}Delay`),c=o(`${ANIMATION}Duration`),u=getTimeout(m,c);let f=null,y=0,d=0;t===TRANSITION?s>0&&(f=TRANSITION,y=s,d=a.length):t===ANIMATION?u>0&&(f=ANIMATION,y=u,d=c.length):(y=Math.max(s,u),f=y>0?s>u?TRANSITION:ANIMATION:null,d=f?f===TRANSITION?a.length:c.length:0);const k=f===TRANSITION&&/\b(transform|all)(,|$)/.test(o(`${TRANSITION}Property`).toString());return{type:f,timeout:y,propCount:d,hasTransform:k}}function getTimeout(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,o)=>toMs(r)+toMs(e[o])))}function toMs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}function patchClass(e,t,r){const o=e[vtcKey];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const vShowOriginalDisplay=Symbol("_vod"),vShowHidden=Symbol("_vsh"),vShow={beforeMount(e,{value:t},{transition:r}){e[vShowOriginalDisplay]=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):setDisplay(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:o}){!t!=!r&&(o?t?(o.beforeEnter(e),setDisplay(e,!0),o.enter(e)):o.leave(e,()=>{setDisplay(e,!1)}):setDisplay(e,t))},beforeUnmount(e,{value:t}){setDisplay(e,t)}};function setDisplay(e,t){e.style.display=t?e[vShowOriginalDisplay]:"none",e[vShowHidden]=!t}const CSS_VAR_TEXT=Symbol(""),displayRE=/(^|;)\s*display\s*:/;function patchStyle(e,t,r){const o=e.style,n=isString(r);let a=!1;if(r&&!n){if(t)if(isString(t))for(const s of t.split(";")){const m=s.slice(0,s.indexOf(":")).trim();r[m]==null&&setStyle(o,m,"")}else for(const s in t)r[s]==null&&setStyle(o,s,"");for(const s in r)s==="display"&&(a=!0),setStyle(o,s,r[s])}else if(n){if(t!==r){const s=o[CSS_VAR_TEXT];s&&(r+=";"+s),o.cssText=r,a=displayRE.test(r)}}else t&&e.removeAttribute("style");vShowOriginalDisplay in e&&(e[vShowOriginalDisplay]=a?o.display:"",e[vShowHidden]&&(o.display="none"))}const importantRE=/\s*!important$/;function setStyle(e,t,r){if(isArray$1(r))r.forEach(o=>setStyle(e,t,o));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const o=autoPrefix(e,t);importantRE.test(r)?e.setProperty(hyphenate(o),r.replace(importantRE,""),"important"):e[o]=r}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,t){const r=prefixCache[t];if(r)return r;let o=camelize(t);if(o!=="filter"&&o in e)return prefixCache[t]=o;o=capitalize(o);for(let n=0;n<prefixes.length;n++){const a=prefixes[n]+o;if(a in e)return prefixCache[t]=a}return t}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,t,r,o,n,a=isSpecialBooleanAttr(t)){o&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(xlinkNS,t.slice(6,t.length)):e.setAttributeNS(xlinkNS,t,r):r==null||a&&!includeBooleanAttr(r)?e.removeAttribute(t):e.setAttribute(t,a?"":isSymbol(r)?String(r):r)}function patchDOMProp(e,t,r,o,n){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?unsafeToTrustedHTML(r):r);return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const m=a==="OPTION"?e.getAttribute("value")||"":e.value,c=r==null?e.type==="checkbox"?"on":"":String(r);(m!==c||!("_value"in e))&&(e.value=c),r==null&&e.removeAttribute(t),e._value=r;return}let s=!1;if(r===""||r==null){const m=typeof e[t];m==="boolean"?r=includeBooleanAttr(r):r==null&&m==="string"?(r="",s=!0):m==="number"&&(r=0,s=!0)}try{e[t]=r}catch{}s&&e.removeAttribute(n||t)}function addEventListener(e,t,r,o){e.addEventListener(t,r,o)}function removeEventListener(e,t,r,o){e.removeEventListener(t,r,o)}const veiKey=Symbol("_vei");function patchEvent(e,t,r,o,n=null){const a=e[veiKey]||(e[veiKey]={}),s=a[t];if(o&&s)s.value=o;else{const[m,c]=parseName(t);if(o){const u=a[t]=createInvoker(o,n);addEventListener(e,m,u,c)}else s&&(removeEventListener(e,m,s,c),a[t]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let t;if(optionsModifierRE.test(e)){t={};let o;for(;o=e.match(optionsModifierRE);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hyphenate(e.slice(2)),t]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(e,t){const r=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=r.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(o,r.value),t,5,[o])};return r.value=e,r.attached=getNow(),r}function patchStopImmediatePropagation(e,t){if(isArray$1(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(o=>n=>!n._stopped&&o&&o(n))}else return t}const isNativeOn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,patchProp=(e,t,r,o,n,a)=>{const s=n==="svg";t==="class"?patchClass(e,o,s):t==="style"?patchStyle(e,r,o):isOn(t)?isModelListener(t)||patchEvent(e,t,r,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):shouldSetAsProp(e,t,o,s))?(patchDOMProp(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&patchAttr(e,t,o,s,a,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!isString(o))?patchDOMProp(e,camelize(t),o,a,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),patchAttr(e,t,o,s))};function shouldSetAsProp(e,t,r,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&isNativeOn(t)&&isFunction(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return isNativeOn(t)&&isString(r)?!1:t in e}const positionMap=new WeakMap,newPositionMap=new WeakMap,moveCbKey=Symbol("_moveCb"),enterCbKey=Symbol("_enterCb"),decorate=e=>(delete e.props.mode,e),TransitionGroupImpl=decorate({name:"TransitionGroup",props:extend({},TransitionPropsValidators,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=getCurrentInstance(),o=useTransitionState();let n,a;return onUpdated(()=>{if(!n.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!hasCSSTransform(n[0].el,r.vnode.el,s))return;n.forEach(callPendingCbs),n.forEach(recordPosition);const m=n.filter(applyTranslation);forceReflow(),m.forEach(c=>{const u=c.el,f=u.style;addTransitionClass(u,s),f.transform=f.webkitTransform=f.transitionDuration="";const y=u[moveCbKey]=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",y),u[moveCbKey]=null,removeTransitionClass(u,s))};u.addEventListener("transitionend",y)})}),()=>{const s=toRaw(e),m=resolveTransitionProps(s);let c=s.tag||Fragment;if(n=[],a)for(let u=0;u<a.length;u++){const f=a[u];f.el&&f.el instanceof Element&&(n.push(f),setTransitionHooks(f,resolveTransitionHooks(f,m,o,r)),positionMap.set(f,f.el.getBoundingClientRect()))}a=t.default?getTransitionRawChildren(t.default()):[];for(let u=0;u<a.length;u++){const f=a[u];f.key!=null&&setTransitionHooks(f,resolveTransitionHooks(f,m,o,r))}return createVNode(c,null,a)}}}),TransitionGroup=TransitionGroupImpl;function callPendingCbs(e){const t=e.el;t[moveCbKey]&&t[moveCbKey](),t[enterCbKey]&&t[enterCbKey]()}function recordPosition(e){newPositionMap.set(e,e.el.getBoundingClientRect())}function applyTranslation(e){const t=positionMap.get(e),r=newPositionMap.get(e),o=t.left-r.left,n=t.top-r.top;if(o||n){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${o}px,${n}px)`,a.transitionDuration="0s",e}}function hasCSSTransform(e,t,r){const o=e.cloneNode(),n=e[vtcKey];n&&n.forEach(m=>{m.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),r.split(/\s+/).forEach(m=>m&&o.classList.add(m)),o.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(o);const{hasTransform:s}=getTransitionInfo(o);return a.removeChild(o),s}const getModelAssigner=e=>{const t=e.props["onUpdate:modelValue"]||!1;return isArray$1(t)?r=>invokeArrayFns(t,r):t};function onCompositionStart(e){e.target.composing=!0}function onCompositionEnd(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const assignKey=Symbol("_assign"),vModelText={created(e,{modifiers:{lazy:t,trim:r,number:o}},n){e[assignKey]=getModelAssigner(n);const a=o||n.props&&n.props.type==="number";addEventListener(e,t?"change":"input",s=>{if(s.target.composing)return;let m=e.value;r&&(m=m.trim()),a&&(m=looseToNumber(m)),e[assignKey](m)}),r&&addEventListener(e,"change",()=>{e.value=e.value.trim()}),t||(addEventListener(e,"compositionstart",onCompositionStart),addEventListener(e,"compositionend",onCompositionEnd),addEventListener(e,"change",onCompositionEnd))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:o,trim:n,number:a}},s){if(e[assignKey]=getModelAssigner(s),e.composing)return;const m=(a||e.type==="number")&&!/^0\d/.test(e.value)?looseToNumber(e.value):e.value,c=t??"";m!==c&&(document.activeElement===e&&e.type!=="range"&&(o&&t===r||n&&e.value.trim()===c)||(e.value=c))}},vModelCheckbox={deep:!0,created(e,t,r){e[assignKey]=getModelAssigner(r),addEventListener(e,"change",()=>{const o=e._modelValue,n=getValue(e),a=e.checked,s=e[assignKey];if(isArray$1(o)){const m=looseIndexOf(o,n),c=m!==-1;if(a&&!c)s(o.concat(n));else if(!a&&c){const u=[...o];u.splice(m,1),s(u)}}else if(isSet(o)){const m=new Set(o);a?m.add(n):m.delete(n),s(m)}else s(getCheckboxValue(e,a))})},mounted:setChecked,beforeUpdate(e,t,r){e[assignKey]=getModelAssigner(r),setChecked(e,t,r)}};function setChecked(e,{value:t,oldValue:r},o){e._modelValue=t;let n;if(isArray$1(t))n=looseIndexOf(t,o.props.value)>-1;else if(isSet(t))n=t.has(o.props.value);else{if(t===r)return;n=looseEqual(t,getCheckboxValue(e,!0))}e.checked!==n&&(e.checked=n)}function getValue(e){return"_value"in e?e._value:e.value}function getCheckboxValue(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const systemModifiers=["ctrl","shift","alt","meta"],modifierGuards={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>systemModifiers.some(r=>e[`${r}Key`]&&!t.includes(r))},withModifiers=(e,t)=>{const r=e._withMods||(e._withMods={}),o=t.join(".");return r[o]||(r[o]=(n,...a)=>{for(let s=0;s<t.length;s++){const m=modifierGuards[t[s]];if(m&&m(n,t))return}return e(n,...a)})},keyNames={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},withKeys=(e,t)=>{const r=e._withKeys||(e._withKeys={}),o=t.join(".");return r[o]||(r[o]=n=>{if(!("key"in n))return;const a=hyphenate(n.key);if(t.some(s=>s===a||keyNames[s]===a))return e(n)})},rendererOptions=extend({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const render=(...e)=>{ensureRenderer().render(...e)},createApp=(...e)=>{const t=ensureRenderer().createApp(...e),{mount:r}=t;return t.mount=o=>{const n=normalizeContainer(o);if(!n)return;const a=t._component;!isFunction(a)&&!a.render&&!a.template&&(a.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const s=r(n,!1,resolveRootNamespace(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},t};function resolveRootNamespace(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function normalizeContainer(e){return isString(e)?document.querySelector(e):e}const _hoisted_1={key:0,id:"app"},_sfc_main={__name:"App",setup(e){const t=ref(!0);return/(phone|iPad|pad|ios|pod|iPhone|iPod|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)&&alert("请使用电脑访问本网站！"),(r,o)=>{const n=resolveComponent("router-view");return t.value?(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(n)])):createCommentVNode("",!0)}}},scriptRel="modulepreload",assetsURL=function(e){return"/"+e},seen={},__vitePreload=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),m=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(c=>{if(c=assetsURL(c),c in seen)return;seen[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":scriptRel,u||(y.as="script"),y.crossOrigin="",y.href=c,m&&y.setAttribute("nonce",m),document.head.appendChild(y),u)return new Promise((d,k)=>{y.addEventListener("load",d),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(s){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=s,window.dispatchEvent(m),!m.defaultPrevented)throw s}return n.then(s=>{for(const m of s||[])m.status==="rejected"&&a(m.reason);return t().catch(a)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const isBrowser=typeof document<"u";function isRouteComponent(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function isESModule(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&isRouteComponent(e.default)}const assign$1=Object.assign;function applyToParams(e,t){const r={};for(const o in t){const n=t[o];r[o]=isArray(n)?n.map(e):e(n)}return r}const noop$1=()=>{},isArray=Array.isArray,HASH_RE=/#/g,AMPERSAND_RE=/&/g,SLASH_RE=/\//g,EQUAL_RE=/=/g,IM_RE=/\?/g,PLUS_RE=/\+/g,ENC_BRACKET_OPEN_RE=/%5B/g,ENC_BRACKET_CLOSE_RE=/%5D/g,ENC_CARET_RE=/%5E/g,ENC_BACKTICK_RE=/%60/g,ENC_CURLY_OPEN_RE=/%7B/g,ENC_PIPE_RE=/%7C/g,ENC_CURLY_CLOSE_RE=/%7D/g,ENC_SPACE_RE=/%20/g;function commonEncode(e){return encodeURI(""+e).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]")}function encodeHash(e){return commonEncode(e).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryValue(e){return commonEncode(e).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryKey(e){return encodeQueryValue(e).replace(EQUAL_RE,"%3D")}function encodePath(e){return commonEncode(e).replace(HASH_RE,"%23").replace(IM_RE,"%3F")}function encodeParam(e){return e==null?"":encodePath(e).replace(SLASH_RE,"%2F")}function decode(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const TRAILING_SLASH_RE=/\/$/,removeTrailingSlash=e=>e.replace(TRAILING_SLASH_RE,"");function parseURL(e,t,r="/"){let o,n={},a="",s="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(o=t.slice(0,c),a=t.slice(c+1,m>-1?m:t.length),n=e(a)),m>-1&&(o=o||t.slice(0,m),s=t.slice(m,t.length)),o=resolveRelativePath(o??t,r),{fullPath:o+(a&&"?")+a+s,path:o,query:n,hash:decode(s)}}function stringifyURL(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function stripBase(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function isSameRouteLocation(e,t,r){const o=t.matched.length-1,n=r.matched.length-1;return o>-1&&o===n&&isSameRouteRecord(t.matched[o],r.matched[n])&&isSameRouteLocationParams(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function isSameRouteRecord(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function isSameRouteLocationParams(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!isSameRouteLocationParamsValue(e[r],t[r]))return!1;return!0}function isSameRouteLocationParamsValue(e,t){return isArray(e)?isEquivalentArray(e,t):isArray(t)?isEquivalentArray(t,e):e===t}function isEquivalentArray(e,t){return isArray(t)?e.length===t.length&&e.every((r,o)=>r===t[o]):e.length===1&&e[0]===t}function resolveRelativePath(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),o=e.split("/"),n=o[o.length-1];(n===".."||n===".")&&o.push("");let a=r.length-1,s,m;for(s=0;s<o.length;s++)if(m=o[s],m!==".")if(m==="..")a>1&&a--;else break;return r.slice(0,a).join("/")+"/"+o.slice(s).join("/")}const START_LOCATION_NORMALIZED={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var NavigationType;(function(e){e.pop="pop",e.push="push"})(NavigationType||(NavigationType={}));var NavigationDirection;(function(e){e.back="back",e.forward="forward",e.unknown=""})(NavigationDirection||(NavigationDirection={}));function normalizeBase(e){if(!e)if(isBrowser){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),removeTrailingSlash(e)}const BEFORE_HASH_RE=/^[^#]+#/;function createHref(e,t){return e.replace(BEFORE_HASH_RE,"#")+t}function getElementPosition(e,t){const r=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-r.left-(t.left||0),top:o.top-r.top-(t.top||0)}}const computeScrollPosition=()=>({left:window.scrollX,top:window.scrollY});function scrollToPosition(e){let t;if("el"in e){const r=e.el,o=typeof r=="string"&&r.startsWith("#"),n=typeof r=="string"?o?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!n)return;t=getElementPosition(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function getScrollKey(e,t){return(history.state?history.state.position-t:-1)+e}const scrollPositions=new Map;function saveScrollPosition(e,t){scrollPositions.set(e,t)}function getSavedScrollPosition(e){const t=scrollPositions.get(e);return scrollPositions.delete(e),t}let createBaseLocation=()=>location.protocol+"//"+location.host;function createCurrentLocation(e,t){const{pathname:r,search:o,hash:n}=t,a=e.indexOf("#");if(a>-1){let m=n.includes(e.slice(a))?e.slice(a).length:1,c=n.slice(m);return c[0]!=="/"&&(c="/"+c),stripBase(c,"")}return stripBase(r,e)+o+n}function useHistoryListeners(e,t,r,o){let n=[],a=[],s=null;const m=({state:d})=>{const k=createCurrentLocation(e,location),b=r.value,C=t.value;let A=0;if(d){if(r.value=k,t.value=d,s&&s===b){s=null;return}A=C?d.position-C.position:0}else o(k);n.forEach(w=>{w(r.value,b,{delta:A,type:NavigationType.pop,direction:A?A>0?NavigationDirection.forward:NavigationDirection.back:NavigationDirection.unknown})})};function c(){s=r.value}function u(d){n.push(d);const k=()=>{const b=n.indexOf(d);b>-1&&n.splice(b,1)};return a.push(k),k}function f(){const{history:d}=window;d.state&&d.replaceState(assign$1({},d.state,{scroll:computeScrollPosition()}),"")}function y(){for(const d of a)d();a=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:y}}function buildState(e,t,r,o=!1,n=!1){return{back:e,current:t,forward:r,replaced:o,position:window.history.length,scroll:n?computeScrollPosition():null}}function useHistoryStateNavigation(e){const{history:t,location:r}=window,o={value:createCurrentLocation(e,r)},n={value:t.state};n.value||a(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,u,f){const y=e.indexOf("#"),d=y>-1?(r.host&&document.querySelector("base")?e:e.slice(y))+c:createBaseLocation()+e+c;try{t[f?"replaceState":"pushState"](u,"",d),n.value=u}catch(k){console.error(k),r[f?"replace":"assign"](d)}}function s(c,u){const f=assign$1({},t.state,buildState(n.value.back,c,n.value.forward,!0),u,{position:n.value.position});a(c,f,!0),o.value=c}function m(c,u){const f=assign$1({},n.value,t.state,{forward:c,scroll:computeScrollPosition()});a(f.current,f,!0);const y=assign$1({},buildState(o.value,c,null),{position:f.position+1},u);a(c,y,!1),o.value=c}return{location:o,state:n,push:m,replace:s}}function createWebHistory(e){e=normalizeBase(e);const t=useHistoryStateNavigation(e),r=useHistoryListeners(e,t.state,t.location,t.replace);function o(a,s=!0){s||r.pauseListeners(),history.go(a)}const n=assign$1({location:"",base:e,go:o,createHref:createHref.bind(null,e)},t,r);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function createWebHashHistory(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),createWebHistory(e)}function isRouteLocation(e){return typeof e=="string"||e&&typeof e=="object"}function isRouteName(e){return typeof e=="string"||typeof e=="symbol"}const NavigationFailureSymbol=Symbol("");var NavigationFailureType;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(NavigationFailureType||(NavigationFailureType={}));function createRouterError(e,t){return assign$1(new Error,{type:e,[NavigationFailureSymbol]:!0},t)}function isNavigationFailure(e,t){return e instanceof Error&&NavigationFailureSymbol in e&&(t==null||!!(e.type&t))}const BASE_PARAM_PATTERN="[^/]+?",BASE_PATH_PARSER_OPTIONS={sensitive:!1,strict:!1,start:!0,end:!0},REGEX_CHARS_RE=/[.+*?^${}()[\]/\\]/g;function tokensToParser(e,t){const r=assign$1({},BASE_PATH_PARSER_OPTIONS,t),o=[];let n=r.start?"^":"";const a=[];for(const u of e){const f=u.length?[]:[90];r.strict&&!u.length&&(n+="/");for(let y=0;y<u.length;y++){const d=u[y];let k=40+(r.sensitive?.25:0);if(d.type===0)y||(n+="/"),n+=d.value.replace(REGEX_CHARS_RE,"\\$&"),k+=40;else if(d.type===1){const{value:b,repeatable:C,optional:A,regexp:w}=d;a.push({name:b,repeatable:C,optional:A});const D=w||BASE_PARAM_PATTERN;if(D!==BASE_PARAM_PATTERN){k+=10;try{new RegExp(`(${D})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${b}" (${D}): `+O.message)}}let F=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;y||(F=A&&u.length<2?`(?:/${F})`:"/"+F),A&&(F+="?"),n+=F,k+=20,A&&(k+=-8),C&&(k+=-20),D===".*"&&(k+=-50)}f.push(k)}o.push(f)}if(r.strict&&r.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}r.strict||(n+="/?"),r.end?n+="$":r.strict&&(n+="(?:/|$)");const s=new RegExp(n,r.sensitive?"":"i");function m(u){const f=u.match(s),y={};if(!f)return null;for(let d=1;d<f.length;d++){const k=f[d]||"",b=a[d-1];y[b.name]=k&&b.repeatable?k.split("/"):k}return y}function c(u){let f="",y=!1;for(const d of e){(!y||!f.endsWith("/"))&&(f+="/"),y=!1;for(const k of d)if(k.type===0)f+=k.value;else if(k.type===1){const{value:b,repeatable:C,optional:A}=k,w=b in u?u[b]:"";if(isArray(w)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const D=isArray(w)?w.join("/"):w;if(!D)if(A)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):y=!0);else throw new Error(`Missing required param "${b}"`);f+=D}}return f||"/"}return{re:s,score:o,keys:a,parse:m,stringify:c}}function compareScoreArray(e,t){let r=0;for(;r<e.length&&r<t.length;){const o=t[r]-e[r];if(o)return o;r++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function comparePathParserScore(e,t){let r=0;const o=e.score,n=t.score;for(;r<o.length&&r<n.length;){const a=compareScoreArray(o[r],n[r]);if(a)return a;r++}if(Math.abs(n.length-o.length)===1){if(isLastScoreNegative(o))return 1;if(isLastScoreNegative(n))return-1}return n.length-o.length}function isLastScoreNegative(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ROOT_TOKEN={type:0,value:""},VALID_PARAM_RE=/[a-zA-Z0-9_]/;function tokenizePath(e){if(!e)return[[]];if(e==="/")return[[ROOT_TOKEN]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(k){throw new Error(`ERR (${r})/"${u}": ${k}`)}let r=0,o=r;const n=[];let a;function s(){a&&n.push(a),a=[]}let m=0,c,u="",f="";function y(){u&&(r===0?a.push({type:0,value:u}):r===1||r===2||r===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&r!==2){o=r,r=4;continue}switch(r){case 0:c==="/"?(u&&y(),s()):c===":"?(y(),r=1):d();break;case 4:d(),r=o;break;case 1:c==="("?r=2:VALID_PARAM_RE.test(c)?d():(y(),r=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:r=3:f+=c;break;case 3:y(),r=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,f="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${u}"`),y(),s(),n}function createRouteRecordMatcher(e,t,r){const o=tokensToParser(tokenizePath(e.path),r),n=assign$1(o,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function createRouterMatcher(e,t){const r=[],o=new Map;t=mergeOptions({strict:!1,end:!0,sensitive:!1},t);function n(y){return o.get(y)}function a(y,d,k){const b=!k,C=normalizeRouteRecord(y);C.aliasOf=k&&k.record;const A=mergeOptions(t,y),w=[C];if("alias"in y){const O=typeof y.alias=="string"?[y.alias]:y.alias;for(const V of O)w.push(normalizeRouteRecord(assign$1({},C,{components:k?k.record.components:C.components,path:V,aliasOf:k?k.record:C})))}let D,F;for(const O of w){const{path:V}=O;if(d&&V[0]!=="/"){const pe=d.record.path,S=pe[pe.length-1]==="/"?"":"/";O.path=d.record.path+(V&&S+V)}if(D=createRouteRecordMatcher(O,d,A),k?k.alias.push(D):(F=F||D,F!==D&&F.alias.push(D),b&&y.name&&!isAliasRecord(D)&&s(y.name)),isMatchable(D)&&c(D),C.children){const pe=C.children;for(let S=0;S<pe.length;S++)a(pe[S],D,k&&k.children[S])}k=k||D}return F?()=>{s(F)}:noop$1}function s(y){if(isRouteName(y)){const d=o.get(y);d&&(o.delete(y),r.splice(r.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=r.indexOf(y);d>-1&&(r.splice(d,1),y.record.name&&o.delete(y.record.name),y.children.forEach(s),y.alias.forEach(s))}}function m(){return r}function c(y){const d=findInsertionIndex(y,r);r.splice(d,0,y),y.record.name&&!isAliasRecord(y)&&o.set(y.record.name,y)}function u(y,d){let k,b={},C,A;if("name"in y&&y.name){if(k=o.get(y.name),!k)throw createRouterError(1,{location:y});A=k.record.name,b=assign$1(paramsFromLocation(d.params,k.keys.filter(F=>!F.optional).concat(k.parent?k.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),y.params&&paramsFromLocation(y.params,k.keys.map(F=>F.name))),C=k.stringify(b)}else if(y.path!=null)C=y.path,k=r.find(F=>F.re.test(C)),k&&(b=k.parse(C),A=k.record.name);else{if(k=d.name?o.get(d.name):r.find(F=>F.re.test(d.path)),!k)throw createRouterError(1,{location:y,currentLocation:d});A=k.record.name,b=assign$1({},d.params,y.params),C=k.stringify(b)}const w=[];let D=k;for(;D;)w.unshift(D.record),D=D.parent;return{name:A,path:C,params:b,matched:w,meta:mergeMetaFields(w)}}e.forEach(y=>a(y));function f(){r.length=0,o.clear()}return{addRoute:a,resolve:u,removeRoute:s,clearRoutes:f,getRoutes:m,getRecordMatcher:n}}function paramsFromLocation(e,t){const r={};for(const o of t)o in e&&(r[o]=e[o]);return r}function normalizeRouteRecord(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:normalizeRecordProps(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function normalizeRecordProps(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const o in e.components)t[o]=typeof r=="object"?r[o]:r;return t}function isAliasRecord(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mergeMetaFields(e){return e.reduce((t,r)=>assign$1(t,r.meta),{})}function mergeOptions(e,t){const r={};for(const o in e)r[o]=o in t?t[o]:e[o];return r}function findInsertionIndex(e,t){let r=0,o=t.length;for(;r!==o;){const a=r+o>>1;comparePathParserScore(e,t[a])<0?o=a:r=a+1}const n=getInsertionAncestor(e);return n&&(o=t.lastIndexOf(n,o-1)),o}function getInsertionAncestor(e){let t=e;for(;t=t.parent;)if(isMatchable(t)&&comparePathParserScore(e,t)===0)return t}function isMatchable({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function parseQuery(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<o.length;++n){const a=o[n].replace(PLUS_RE," "),s=a.indexOf("="),m=decode(s<0?a:a.slice(0,s)),c=s<0?null:decode(a.slice(s+1));if(m in t){let u=t[m];isArray(u)||(u=t[m]=[u]),u.push(c)}else t[m]=c}return t}function stringifyQuery(e){let t="";for(let r in e){const o=e[r];if(r=encodeQueryKey(r),o==null){o!==void 0&&(t+=(t.length?"&":"")+r);continue}(isArray(o)?o.map(a=>a&&encodeQueryValue(a)):[o&&encodeQueryValue(o)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+r,a!=null&&(t+="="+a))})}return t}function normalizeQuery(e){const t={};for(const r in e){const o=e[r];o!==void 0&&(t[r]=isArray(o)?o.map(n=>n==null?null:""+n):o==null?o:""+o)}return t}const matchedRouteKey=Symbol(""),viewDepthKey=Symbol(""),routerKey=Symbol(""),routeLocationKey=Symbol(""),routerViewLocationKey=Symbol("");function useCallbacks(){let e=[];function t(o){return e.push(o),()=>{const n=e.indexOf(o);n>-1&&e.splice(n,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function guardToPromiseFn(e,t,r,o,n,a=s=>s()){const s=o&&(o.enterCallbacks[n]=o.enterCallbacks[n]||[]);return()=>new Promise((m,c)=>{const u=d=>{d===!1?c(createRouterError(4,{from:r,to:t})):d instanceof Error?c(d):isRouteLocation(d)?c(createRouterError(2,{from:t,to:d})):(s&&o.enterCallbacks[n]===s&&typeof d=="function"&&s.push(d),m())},f=a(()=>e.call(o&&o.instances[n],t,r,u));let y=Promise.resolve(f);e.length<3&&(y=y.then(u)),y.catch(d=>c(d))})}function extractComponentsGuards(e,t,r,o,n=a=>a()){const a=[];for(const s of e)for(const m in s.components){let c=s.components[m];if(!(t!=="beforeRouteEnter"&&!s.instances[m]))if(isRouteComponent(c)){const f=(c.__vccOpts||c)[t];f&&a.push(guardToPromiseFn(f,r,o,s,m,n))}else{let u=c();a.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${m}" at "${s.path}"`);const y=isESModule(f)?f.default:f;s.mods[m]=f,s.components[m]=y;const k=(y.__vccOpts||y)[t];return k&&guardToPromiseFn(k,r,o,s,m,n)()}))}}return a}function useLink(e){const t=inject(routerKey),r=inject(routeLocationKey),o=computed(()=>{const c=unref(e.to);return t.resolve(c)}),n=computed(()=>{const{matched:c}=o.value,{length:u}=c,f=c[u-1],y=r.matched;if(!f||!y.length)return-1;const d=y.findIndex(isSameRouteRecord.bind(null,f));if(d>-1)return d;const k=getOriginalPath(c[u-2]);return u>1&&getOriginalPath(f)===k&&y[y.length-1].path!==k?y.findIndex(isSameRouteRecord.bind(null,c[u-2])):d}),a=computed(()=>n.value>-1&&includesParams(r.params,o.value.params)),s=computed(()=>n.value>-1&&n.value===r.matched.length-1&&isSameRouteLocationParams(r.params,o.value.params));function m(c={}){return guardEvent(c)?t[unref(e.replace)?"replace":"push"](unref(e.to)).catch(noop$1):Promise.resolve()}return{route:o,href:computed(()=>o.value.href),isActive:a,isExactActive:s,navigate:m}}const RouterLinkImpl=defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink,setup(e,{slots:t}){const r=reactive(useLink(e)),{options:o}=inject(routerKey),n=computed(()=>({[getLinkClass(e.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[getLinkClass(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const a=t.default&&t.default(r);return e.custom?a:h("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:n.value},a)}}}),RouterLink=RouterLinkImpl;function guardEvent(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function includesParams(e,t){for(const r in t){const o=t[r],n=e[r];if(typeof o=="string"){if(o!==n)return!1}else if(!isArray(n)||n.length!==o.length||o.some((a,s)=>a!==n[s]))return!1}return!0}function getOriginalPath(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const getLinkClass=(e,t,r)=>e??t??r,RouterViewImpl=defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const o=inject(routerViewLocationKey),n=computed(()=>e.route||o.value),a=inject(viewDepthKey,0),s=computed(()=>{let u=unref(a);const{matched:f}=n.value;let y;for(;(y=f[u])&&!y.components;)u++;return u}),m=computed(()=>n.value.matched[s.value]);provide(viewDepthKey,computed(()=>s.value+1)),provide(matchedRouteKey,m),provide(routerViewLocationKey,n);const c=ref();return watch(()=>[c.value,m.value,e.name],([u,f,y],[d,k,b])=>{f&&(f.instances[y]=u,k&&k!==f&&u&&u===d&&(f.leaveGuards.size||(f.leaveGuards=k.leaveGuards),f.updateGuards.size||(f.updateGuards=k.updateGuards))),u&&f&&(!k||!isSameRouteRecord(f,k)||!d)&&(f.enterCallbacks[y]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=n.value,f=e.name,y=m.value,d=y&&y.components[f];if(!d)return normalizeSlot(r.default,{Component:d,route:u});const k=y.props[f],b=k?k===!0?u.params:typeof k=="function"?k(u):k:null,A=h(d,assign$1({},b,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(y.instances[f]=null)},ref:c}));return normalizeSlot(r.default,{Component:A,route:u})||A}}});function normalizeSlot(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const RouterView=RouterViewImpl;function createRouter(e){const t=createRouterMatcher(e.routes,e),r=e.parseQuery||parseQuery,o=e.stringifyQuery||stringifyQuery,n=e.history,a=useCallbacks(),s=useCallbacks(),m=useCallbacks(),c=shallowRef(START_LOCATION_NORMALIZED);let u=START_LOCATION_NORMALIZED;isBrowser&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=applyToParams.bind(null,P=>""+P),y=applyToParams.bind(null,encodeParam),d=applyToParams.bind(null,decode);function k(P,G){let U,X;return isRouteName(P)?(U=t.getRecordMatcher(P),X=G):X=P,t.addRoute(X,U)}function b(P){const G=t.getRecordMatcher(P);G&&t.removeRoute(G)}function C(){return t.getRoutes().map(P=>P.record)}function A(P){return!!t.getRecordMatcher(P)}function w(P,G){if(G=assign$1({},G||c.value),typeof P=="string"){const E=parseURL(r,P,G.path),_=t.resolve({path:E.path},G),z=n.createHref(E.fullPath);return assign$1(E,_,{params:d(_.params),hash:decode(E.hash),redirectedFrom:void 0,href:z})}let U;if(P.path!=null)U=assign$1({},P,{path:parseURL(r,P.path,G.path).path});else{const E=assign$1({},P.params);for(const _ in E)E[_]==null&&delete E[_];U=assign$1({},P,{params:y(E)}),G.params=y(G.params)}const X=t.resolve(U,G),ue=P.hash||"";X.params=f(d(X.params));const ye=stringifyURL(o,assign$1({},P,{hash:encodeHash(ue),path:X.path})),R=n.createHref(ye);return assign$1({fullPath:ye,hash:ue,query:o===stringifyQuery?normalizeQuery(P.query):P.query||{}},X,{redirectedFrom:void 0,href:R})}function D(P){return typeof P=="string"?parseURL(r,P,c.value.path):assign$1({},P)}function F(P,G){if(u!==P)return createRouterError(8,{from:G,to:P})}function O(P){return S(P)}function V(P){return O(assign$1(D(P),{replace:!0}))}function pe(P){const G=P.matched[P.matched.length-1];if(G&&G.redirect){const{redirect:U}=G;let X=typeof U=="function"?U(P):U;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=D(X):{path:X},X.params={}),assign$1({query:P.query,hash:P.hash,params:X.path!=null?{}:P.params},X)}}function S(P,G){const U=u=w(P),X=c.value,ue=P.state,ye=P.force,R=P.replace===!0,E=pe(U);if(E)return S(assign$1(D(E),{state:typeof E=="object"?assign$1({},ue,E.state):ue,force:ye,replace:R}),G||U);const _=U;_.redirectedFrom=G;let z;return!ye&&isSameRouteLocation(o,X,U)&&(z=createRouterError(16,{to:_,from:X}),we(X,X,!0,!1)),(z?Promise.resolve(z):J(_,X)).catch(T=>isNavigationFailure(T)?isNavigationFailure(T,2)?T:he(T):ie(T,_,X)).then(T=>{if(T){if(isNavigationFailure(T,2))return S(assign$1({replace:R},D(T.to),{state:typeof T.to=="object"?assign$1({},ue,T.to.state):ue,force:ye}),G||_)}else T=W(_,X,!0,R,ue);return j(_,X,T),T})}function K(P,G){const U=F(P,G);return U?Promise.reject(U):Promise.resolve()}function M(P){const G=Te.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(P):P()}function J(P,G){let U;const[X,ue,ye]=extractChangingRecords(P,G);U=extractComponentsGuards(X.reverse(),"beforeRouteLeave",P,G);for(const E of X)E.leaveGuards.forEach(_=>{U.push(guardToPromiseFn(_,P,G))});const R=K.bind(null,P,G);return U.push(R),_e(U).then(()=>{U=[];for(const E of a.list())U.push(guardToPromiseFn(E,P,G));return U.push(R),_e(U)}).then(()=>{U=extractComponentsGuards(ue,"beforeRouteUpdate",P,G);for(const E of ue)E.updateGuards.forEach(_=>{U.push(guardToPromiseFn(_,P,G))});return U.push(R),_e(U)}).then(()=>{U=[];for(const E of ye)if(E.beforeEnter)if(isArray(E.beforeEnter))for(const _ of E.beforeEnter)U.push(guardToPromiseFn(_,P,G));else U.push(guardToPromiseFn(E.beforeEnter,P,G));return U.push(R),_e(U)}).then(()=>(P.matched.forEach(E=>E.enterCallbacks={}),U=extractComponentsGuards(ye,"beforeRouteEnter",P,G,M),U.push(R),_e(U))).then(()=>{U=[];for(const E of s.list())U.push(guardToPromiseFn(E,P,G));return U.push(R),_e(U)}).catch(E=>isNavigationFailure(E,8)?E:Promise.reject(E))}function j(P,G,U){m.list().forEach(X=>M(()=>X(P,G,U)))}function W(P,G,U,X,ue){const ye=F(P,G);if(ye)return ye;const R=G===START_LOCATION_NORMALIZED,E=isBrowser?history.state:{};U&&(X||R?n.replace(P.fullPath,assign$1({scroll:R&&E&&E.scroll},ue)):n.push(P.fullPath,ue)),c.value=P,we(P,G,U,R),he()}let oe;function ge(){oe||(oe=n.listen((P,G,U)=>{if(!Oe.listening)return;const X=w(P),ue=pe(X);if(ue){S(assign$1(ue,{replace:!0}),X).catch(noop$1);return}u=X;const ye=c.value;isBrowser&&saveScrollPosition(getScrollKey(ye.fullPath,U.delta),computeScrollPosition()),J(X,ye).catch(R=>isNavigationFailure(R,12)?R:isNavigationFailure(R,2)?(S(R.to,X).then(E=>{isNavigationFailure(E,20)&&!U.delta&&U.type===NavigationType.pop&&n.go(-1,!1)}).catch(noop$1),Promise.reject()):(U.delta&&n.go(-U.delta,!1),ie(R,X,ye))).then(R=>{R=R||W(X,ye,!1),R&&(U.delta&&!isNavigationFailure(R,8)?n.go(-U.delta,!1):U.type===NavigationType.pop&&isNavigationFailure(R,20)&&n.go(-1,!1)),j(X,ye,R)}).catch(noop$1)}))}let de=useCallbacks(),me=useCallbacks(),ae;function ie(P,G,U){he(P);const X=me.list();return X.length?X.forEach(ue=>ue(P,G,U)):console.error(P),Promise.reject(P)}function be(){return ae&&c.value!==START_LOCATION_NORMALIZED?Promise.resolve():new Promise((P,G)=>{de.add([P,G])})}function he(P){return ae||(ae=!P,ge(),de.list().forEach(([G,U])=>P?U(P):G()),de.reset()),P}function we(P,G,U,X){const{scrollBehavior:ue}=e;if(!isBrowser||!ue)return Promise.resolve();const ye=!U&&getSavedScrollPosition(getScrollKey(P.fullPath,0))||(X||!U)&&history.state&&history.state.scroll||null;return nextTick().then(()=>ue(P,G,ye)).then(R=>R&&scrollToPosition(R)).catch(R=>ie(R,P,G))}const ke=P=>n.go(P);let xe;const Te=new Set,Oe={currentRoute:c,listening:!0,addRoute:k,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:C,resolve:w,options:e,push:O,replace:V,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:a.add,beforeResolve:s.add,afterEach:m.add,onError:me.add,isReady:be,install(P){const G=this;P.component("RouterLink",RouterLink),P.component("RouterView",RouterView),P.config.globalProperties.$router=G,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>unref(c)}),isBrowser&&!xe&&c.value===START_LOCATION_NORMALIZED&&(xe=!0,O(n.location).catch(ue=>{}));const U={};for(const ue in START_LOCATION_NORMALIZED)Object.defineProperty(U,ue,{get:()=>c.value[ue],enumerable:!0});P.provide(routerKey,G),P.provide(routeLocationKey,shallowReactive(U)),P.provide(routerViewLocationKey,c);const X=P.unmount;Te.add(P),P.unmount=function(){Te.delete(P),Te.size<1&&(u=START_LOCATION_NORMALIZED,oe&&oe(),oe=null,c.value=START_LOCATION_NORMALIZED,xe=!1,ae=!1),X()}}};function _e(P){return P.reduce((G,U)=>G.then(()=>M(U)),Promise.resolve())}return Oe}function extractChangingRecords(e,t){const r=[],o=[],n=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const m=t.matched[s];m&&(e.matched.find(u=>isSameRouteRecord(u,m))?o.push(m):r.push(m));const c=e.matched[s];c&&(t.matched.find(u=>isSameRouteRecord(u,c))||n.push(c))}return[r,o,n]}const router=createRouter({history:createWebHashHistory("/"),routes:[{path:"/",component:()=>__vitePreload(()=>import("./Layout-Czxdn7AV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])),redirect:"/about",children:[{path:"home",component:()=>__vitePreload(()=>import("./Home-CzZ4A9A3.js"),__vite__mapDeps([24,25,21,4,3,5,2,7,18,12,19,26]))},{path:"posts",component:()=>__vitePreload(()=>import("./Layout-Br2eamAi.js"),__vite__mapDeps([27,28,4,3,5,2,29])),children:[{path:"38447162",component:()=>__vitePreload(()=>import("./38447162-CSW1a_R6.js"),__vite__mapDeps([30,31,3,9,5,32,8,4,10,11,33,2,34,35,36,7,37,38,39,18,40,41,42,13,6,12,14,43,1,15,44,45,25,21,20,46]))},{path:"38466050",component:()=>__vitePreload(()=>import("./38466050-O7aB5Qfa.js"),__vite__mapDeps([47,8,3,5,4,9,10,11,33,2,34,35,36,7,37,38,39,18,40,25,21,48]))},{path:"38498128",component:()=>__vitePreload(()=>import("./38498128-DlFQm0Wm.js"),__vite__mapDeps([49,8,3,5,4,9,10,11,33,2,34,35,36,7,37,38,39,18,40,25,21,50]))},{path:"38725142",component:()=>__vitePreload(()=>import("./38725142-BHJnZxPP.js"),__vite__mapDeps([51,8,3,5,4,9,10,11,33,2,34,35,36,7,37,38,39,18,40,25,21,52]))},{path:"other",component:()=>__vitePreload(()=>import("./Other-DnZxbtXY.js"),__vite__mapDeps([53,18]))},{path:"edit",component:()=>__vitePreload(()=>import("./Edit-Dw8pXMjX.js"),__vite__mapDeps([54,18]))},{path:"letter",component:()=>__vitePreload(()=>import("./Letter-DT_1SSiV.js"),__vite__mapDeps([55,31,3,9,5,32,41,10,4,42,13,6,2,7,8,11,12,14,43,34,35,36,37,18,25,21,56]))},{path:"recreation",component:()=>__vitePreload(()=>import("./Recreation-EQJvcU-q.js"),__vite__mapDeps([57,31,3,9,5,32,34,35,36,7,37,18,58]))}]},{path:"chat",component:()=>__vitePreload(()=>import("./Layout-S3eWfOli.js"),__vite__mapDeps([59,18])),children:[{path:"friends",component:()=>__vitePreload(()=>import("./Friends-CW91k1Zc.js"),__vite__mapDeps([60,28,4,3,5,2,29]))}]},{path:"events",component:()=>__vitePreload(()=>import("./Events-gYwvmWOo.js"),__vite__mapDeps([61,34,3,35,25,21,4,5,2,7,18,62]))},{path:"resources",component:()=>__vitePreload(()=>import("./Resources-DXxwk4yO.js"),__vite__mapDeps([63,38,2,3,39,18,7,12,42,22,9,64]))},{path:"about",component:()=>__vitePreload(()=>import("./About-CE6718FL.js"),__vite__mapDeps([65,16,3,4,5,13,10,17,25,21,2,7,19,66]))},{path:"books",component:()=>__vitePreload(()=>import("./Books-CiGtRzzJ.js"),__vite__mapDeps([67,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,41,42,43,44,45,25,21,28,29,18,68]))}]}]});var isVue2=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let activePinia;const setActivePinia=e=>activePinia=e,piniaSymbol=Symbol();function isPlainObject(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var MutationType;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(MutationType||(MutationType={}));function createPinia(){const e=effectScope(!0),t=e.run(()=>ref({}));let r=[],o=[];const n=markRaw({install(a){setActivePinia(n),n._a=a,a.provide(piniaSymbol,n),a.config.globalProperties.$pinia=n,o.forEach(s=>r.push(s)),o=[]},use(a){return!this._a&&!isVue2?o.push(a):r.push(a),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return n}const noop=()=>{};function addSubscription(e,t,r,o=noop){e.push(t);const n=()=>{const a=e.indexOf(t);a>-1&&(e.splice(a,1),o())};return!r&&getCurrentScope()&&onScopeDispose(n),n}function triggerSubscriptions(e,...t){e.slice().forEach(r=>{r(...t)})}const fallbackRunWithContext=e=>e(),ACTION_MARKER=Symbol(),ACTION_NAME=Symbol();function mergeReactiveObjects(e,t){e instanceof Map&&t instanceof Map?t.forEach((r,o)=>e.set(o,r)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const o=t[r],n=e[r];isPlainObject(n)&&isPlainObject(o)&&e.hasOwnProperty(r)&&!isRef(o)&&!isReactive(o)?e[r]=mergeReactiveObjects(n,o):e[r]=o}return e}const skipHydrateSymbol=Symbol();function shouldHydrate(e){return!isPlainObject(e)||!e.hasOwnProperty(skipHydrateSymbol)}const{assign}=Object;function isComputed(e){return!!(isRef(e)&&e.effect)}function createOptionsStore(e,t,r,o){const{state:n,actions:a,getters:s}=t,m=r.state.value[e];let c;function u(){m||(r.state.value[e]=n?n():{});const f=toRefs(r.state.value[e]);return assign(f,a,Object.keys(s||{}).reduce((y,d)=>(y[d]=markRaw(computed(()=>{setActivePinia(r);const k=r._s.get(e);return s[d].call(k,k)})),y),{}))}return c=createSetupStore(e,u,t,r,o,!0),c}function createSetupStore(e,t,r={},o,n,a){let s;const m=assign({actions:{}},r),c={deep:!0};let u,f,y=[],d=[],k;const b=o.state.value[e];!a&&!b&&(o.state.value[e]={}),ref({});let C;function A(K){let M;u=f=!1,typeof K=="function"?(K(o.state.value[e]),M={type:MutationType.patchFunction,storeId:e,events:k}):(mergeReactiveObjects(o.state.value[e],K),M={type:MutationType.patchObject,payload:K,storeId:e,events:k});const J=C=Symbol();nextTick().then(()=>{C===J&&(u=!0)}),f=!0,triggerSubscriptions(y,M,o.state.value[e])}const w=a?function(){const{state:M}=r,J=M?M():{};this.$patch(j=>{assign(j,J)})}:noop;function D(){s.stop(),y=[],d=[],o._s.delete(e)}const F=(K,M="")=>{if(ACTION_MARKER in K)return K[ACTION_NAME]=M,K;const J=function(){setActivePinia(o);const j=Array.from(arguments),W=[],oe=[];function ge(ae){W.push(ae)}function de(ae){oe.push(ae)}triggerSubscriptions(d,{args:j,name:J[ACTION_NAME],store:V,after:ge,onError:de});let me;try{me=K.apply(this&&this.$id===e?this:V,j)}catch(ae){throw triggerSubscriptions(oe,ae),ae}return me instanceof Promise?me.then(ae=>(triggerSubscriptions(W,ae),ae)).catch(ae=>(triggerSubscriptions(oe,ae),Promise.reject(ae))):(triggerSubscriptions(W,me),me)};return J[ACTION_MARKER]=!0,J[ACTION_NAME]=M,J},O={_p:o,$id:e,$onAction:addSubscription.bind(null,d),$patch:A,$reset:w,$subscribe(K,M={}){const J=addSubscription(y,K,M.detached,()=>j()),j=s.run(()=>watch(()=>o.state.value[e],W=>{(M.flush==="sync"?f:u)&&K({storeId:e,type:MutationType.direct,events:k},W)},assign({},c,M)));return J},$dispose:D},V=reactive(O);o._s.set(e,V);const S=(o._a&&o._a.runWithContext||fallbackRunWithContext)(()=>o._e.run(()=>(s=effectScope()).run(()=>t({action:F}))));for(const K in S){const M=S[K];if(isRef(M)&&!isComputed(M)||isReactive(M))a||(b&&shouldHydrate(M)&&(isRef(M)?M.value=b[K]:mergeReactiveObjects(M,b[K])),o.state.value[e][K]=M);else if(typeof M=="function"){const J=F(M,K);S[K]=J,m.actions[K]=M}}return assign(V,S),assign(toRaw(V),S),Object.defineProperty(V,"$state",{get:()=>o.state.value[e],set:K=>{A(M=>{assign(M,K)})}}),o._p.forEach(K=>{assign(V,s.run(()=>K({store:V,app:o._a,pinia:o,options:m})))}),b&&a&&r.hydrate&&r.hydrate(V.$state,b),u=!0,f=!0,V}function defineStore(e,t,r){let o,n;const a=typeof t=="function";o=e,n=a?r:t;function s(m,c){const u=hasInjectionContext();return m=m||(u?inject(piniaSymbol,null):null),m&&setActivePinia(m),m=activePinia,m._s.has(o)||(a?createSetupStore(o,t,n,m):createOptionsStore(o,n,m)),m._s.get(o)}return s.$id=o,s}const suspectProtoRx=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,suspectConstructorRx=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,JsonSigRx=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function jsonParseTransform(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){warnKeyDropped(e);return}return t}function warnKeyDropped(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function destr(e,t={}){if(typeof e!="string")return e;const r=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const o=r.toLowerCase();if(o==="true")return!0;if(o==="false")return!1;if(o==="undefined")return;if(o==="null")return null;if(o==="nan")return Number.NaN;if(o==="infinity")return Number.POSITIVE_INFINITY;if(o==="-infinity")return Number.NEGATIVE_INFINITY}if(!JsonSigRx.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(suspectProtoRx.test(e)||suspectConstructorRx.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,jsonParseTransform)}return JSON.parse(e)}catch(o){if(t.strict)throw o;return e}}function get(e,t){if(e==null)return;let r=e;for(let o=0;o<t.length;o++){if(r==null||r[t[o]]==null)return;r=r[t[o]]}return r}function set(e,t,r){if(r.length===0)return t;const o=r[0];return r.length>1&&(t=set(typeof e!="object"||e===null||!Object.prototype.hasOwnProperty.call(e,o)?Number.isInteger(Number(r[1]))?[]:{}:e[o],t,Array.prototype.slice.call(r,1))),Number.isInteger(Number(o))&&Array.isArray(e)?e.slice()[o]:Object.assign({},e,{[o]:t})}function unset(e,t){if(e==null||t.length===0)return e;if(t.length===1){if(e==null)return e;if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(t[0],1);const r={};for(const o in e)r[o]=e[o];return delete r[t[0]],r}if(e[t[0]]==null){if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const r={};for(const o in e)r[o]=e[o];return r}return set(e,unset(e[t[0]],Array.prototype.slice.call(t,1)),[t[0]])}function deepPickUnsafe(e,t){return t.map(r=>r.split(".")).map(r=>[r,get(e,r)]).filter(r=>r[1]!==void 0).reduce((r,o)=>set(r,o[1],o[0]),{})}function deepOmitUnsafe(e,t){return t.map(r=>r.split(".")).reduce((r,o)=>unset(r,o),e)}function hydrateStore(e,{storage:t,serializer:r,key:o,debug:n,pick:a,omit:s,beforeHydrate:m,afterHydrate:c},u,f=!0){try{f&&(m==null||m(u));const y=t.getItem(o);if(y){const d=r.deserialize(y),k=a?deepPickUnsafe(d,a):d,b=s?deepOmitUnsafe(k,s):k;e.$patch(b)}f&&(c==null||c(u))}catch(y){n&&console.error("[pinia-plugin-persistedstate]",y)}}function persistState(e,{storage:t,serializer:r,key:o,debug:n,pick:a,omit:s}){try{const m=a?deepPickUnsafe(e,a):e,c=s?deepOmitUnsafe(m,s):m,u=r.serialize(c);t.setItem(o,u)}catch(m){n&&console.error("[pinia-plugin-persistedstate]",m)}}function createPersistence(e,t,r){const{pinia:o,store:n,options:{persist:a=r}}=e;if(!a)return;if(!(n.$id in o.state.value)){const c=o._s.get(n.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const m=(Array.isArray(a)?a:a===!0?[{}]:[a]).map(t);n.$hydrate=({runHooks:c=!0}={})=>{m.forEach(u=>{hydrateStore(n,u,e,c)})},n.$persist=()=>{m.forEach(c=>{persistState(n.$state,c)})},m.forEach(c=>{hydrateStore(n,c,e),n.$subscribe((u,f)=>persistState(f,c),{detached:!0})})}function createPersistedState(e={}){return function(t){createPersistence(t,r=>({key:(e.key?e.key:o=>o)(r.key??t.store.$id),debug:r.debug??e.debug??!1,serializer:r.serializer??e.serializer??{serialize:o=>JSON.stringify(o),deserialize:o=>destr(o)},storage:r.storage??e.storage??window.localStorage,beforeHydrate:r.beforeHydrate,afterHydrate:r.afterHydrate,pick:r.pick,omit:r.omit}),e.auto??!1)}}var src_default=createPersistedState(),commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const pinia=createPinia();pinia.use(src_default);var mock={exports:{}};(function(module,exports){(function(t,r){module.exports=r()})(commonjsGlobal,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){var o=r(1),n=r(3),a=r(5),s=r(20),m=r(23),c=r(25),u;typeof window<"u"&&(u=r(27));/*!
    Mock - 模拟请求 & 模拟数据
    https://github.com/nuysoft/Mock
    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
*/var f={Handler:o,Random:a,Util:n,XHR:u,RE:s,toJSONSchema:m,valid:c,heredoc:n.heredoc,setup:function(y){return u.setup(y)},_mocked:{}};f.version="1.0.1-beta3",u&&(u.Mock=f),f.mock=function(y,d,k){return arguments.length===1?o.gen(y):(arguments.length===2&&(k=d,d=void 0),u&&(window.XMLHttpRequest=u),f._mocked[y+(d||"")]={rurl:y,rtype:d,template:k},f)},e.exports=f},function(module,exports,__webpack_require__){var Constant=__webpack_require__(2),Util=__webpack_require__(3),Parser=__webpack_require__(4),Random=__webpack_require__(5),RE=__webpack_require__(20),Handler={extend:Util.extend};Handler.gen=function(e,t,r){t=t==null?"":t+"",r=r||{},r={path:r.path||[Constant.GUID],templatePath:r.templatePath||[Constant.GUID++],currentContext:r.currentContext,templateCurrentContext:r.templateCurrentContext||e,root:r.root||r.currentContext,templateRoot:r.templateRoot||r.templateCurrentContext||e};var o=Parser.parse(t),n=Util.type(e),a;return Handler[n]?(a=Handler[n]({type:n,template:e,name:t,parsedName:t&&t.replace(Constant.RE_KEY,"$1"),rule:o,context:r}),r.root||(r.root=a),a):e},Handler.extend({array:function(e){var t=[],r,o;if(e.template.length===0)return t;if(e.rule.parameters)if(e.rule.min===1&&e.rule.max===void 0)e.context.path.push(e.name),e.context.templatePath.push(e.name),t=Random.pick(Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else if(e.rule.parameters[2])e.template.__order_index=e.template.__order_index||0,e.context.path.push(e.name),e.context.templatePath.push(e.name),t=Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})[e.template.__order_index%e.template.length],e.template.__order_index+=+e.rule.parameters[2],e.context.path.pop(),e.context.templatePath.pop();else for(r=0;r<e.rule.count;r++)for(o=0;o<e.template.length;o++)e.context.path.push(t.length),e.context.templatePath.push(o),t.push(Handler.gen(e.template[o],t.length,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else for(r=0;r<e.template.length;r++)e.context.path.push(r),e.context.templatePath.push(r),t.push(Handler.gen(e.template[r],r,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();return t},object:function(e){var t={},r,o,n,a,s,m;if(e.rule.min!=null)for(r=Util.keys(e.template),r=Random.shuffle(r),r=r.slice(0,e.rule.count),m=0;m<r.length;m++)n=r[m],a=n.replace(Constant.RE_KEY,"$1"),e.context.path.push(a),e.context.templatePath.push(n),t[a]=Handler.gen(e.template[n],n,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop();else{r=[],o=[];for(n in e.template)(typeof e.template[n]=="function"?o:r).push(n);for(r=r.concat(o),m=0;m<r.length;m++)n=r[m],a=n.replace(Constant.RE_KEY,"$1"),e.context.path.push(a),e.context.templatePath.push(n),t[a]=Handler.gen(e.template[n],n,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop(),s=n.match(Constant.RE_KEY),s&&s[2]&&Util.type(e.template[n])==="number"&&(e.template[n]+=parseInt(s[2],10))}return t},number:function(e){var t,r;if(e.rule.decimal){for(e.template+="",r=e.template.split("."),r[0]=e.rule.range?e.rule.count:r[0],r[1]=(r[1]||"").slice(0,e.rule.dcount);r[1].length<e.rule.dcount;)r[1]+=r[1].length<e.rule.dcount-1?Random.character("number"):Random.character("123456789");t=parseFloat(r.join("."),10)}else t=e.rule.range&&!e.rule.parameters[2]?e.rule.count:e.template;return t},boolean:function(e){var t;return t=e.rule.parameters?Random.bool(e.rule.min,e.rule.max,e.template):e.template,t},string:function(e){var t="",r,o,n,a;if(e.template.length){for(e.rule.count==null&&(t+=e.template),r=0;r<e.rule.count;r++)t+=e.template;for(o=t.match(Constant.RE_PLACEHOLDER)||[],r=0;r<o.length;r++){if(n=o[r],/^\\/.test(n)){o.splice(r--,1);continue}if(a=Handler.placeholder(n,e.context.currentContext,e.context.templateCurrentContext,e),o.length===1&&n===t&&typeof a!=typeof t){t=a;break}t=t.replace(n,a)}}else t=e.rule.range?Random.string(e.rule.count):e.template;return t},function:function(e){return e.template.call(e.context.currentContext,e)},regexp:function(e){var t="";e.rule.count==null&&(t+=e.template.source);for(var r=0;r<e.rule.count;r++)t+=e.template.source;return RE.Handler.gen(RE.Parser.parse(t))}}),Handler.extend({_all:function(){var e={};for(var t in Random)e[t.toLowerCase()]=t;return e},placeholder:function(placeholder,obj,templateContext,options){Constant.RE_PLACEHOLDER.exec("");var parts=Constant.RE_PLACEHOLDER.exec(placeholder),key=parts&&parts[1],lkey=key&&key.toLowerCase(),okey=this._all()[lkey],params=parts&&parts[2]||"",pathParts=this.splitPathToArray(key);try{params=eval("(function(){ return [].splice.call(arguments, 0 ) })("+params+")")}catch(e){params=parts[2].split(/,\s*/)}if(obj&&key in obj)return obj[key];if(key.charAt(0)==="/"||pathParts.length>1)return this.getValueByKeyPath(key,options);if(templateContext&&typeof templateContext=="object"&&key in templateContext&&placeholder!==templateContext[key])return templateContext[key]=Handler.gen(templateContext[key],key,{currentContext:obj,templateCurrentContext:templateContext}),templateContext[key];if(!(key in Random)&&!(lkey in Random)&&!(okey in Random))return placeholder;for(var i=0;i<params.length;i++)Constant.RE_PLACEHOLDER.exec(""),Constant.RE_PLACEHOLDER.test(params[i])&&(params[i]=Handler.placeholder(params[i],obj,templateContext,options));var handle=Random[key]||Random[lkey]||Random[okey];switch(Util.type(handle)){case"array":return Random.pick(handle);case"function":handle.options=options;var re=handle.apply(Random,params);return re===void 0&&(re=""),delete handle.options,re}},getValueByKeyPath:function(e,t){var r=e,o=this.splitPathToArray(e),n=[];e.charAt(0)==="/"?n=[t.context.path[0]].concat(this.normalizePath(o)):o.length>1&&(n=t.context.path.slice(0),n.pop(),n=this.normalizePath(n.concat(o)));try{e=o[o.length-1];for(var a=t.context.root,s=t.context.templateRoot,m=1;m<n.length-1;m++)a=a[n[m]],s=s[n[m]];if(a&&e in a)return a[e];if(s&&typeof s=="object"&&e in s&&r!==s[e])return s[e]=Handler.gen(s[e],e,{currentContext:a,templateCurrentContext:s}),s[e]}catch{}return"@"+o.join("/")},normalizePath:function(e){for(var t=[],r=0;r<e.length;r++)switch(e[r]){case"..":t.pop();break;case".":break;default:t.push(e[r])}return t},splitPathToArray:function(e){var t=e.split(/\/+/);return t[t.length-1]||(t=t.slice(0,-1)),t[0]||(t=t.slice(1)),t}}),module.exports=Handler},function(e,t){e.exports={GUID:1,RE_KEY:/(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,RE_RANGE:/([\+\-]?\d+)-?([\+\-]?\d+)?/,RE_PLACEHOLDER:/\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g}},function(e,t){var r={};r.extend=function(){var n=arguments[0]||{},a=1,s=arguments.length,m,c,u,f,y;for(s===1&&(n=this,a=0);a<s;a++)if(m=arguments[a],!!m)for(c in m)u=n[c],f=m[c],n!==f&&f!==void 0&&(r.isArray(f)||r.isObject(f)?(r.isArray(f)&&(y=u&&r.isArray(u)?u:[]),r.isObject(f)&&(y=u&&r.isObject(u)?u:{}),n[c]=r.extend(y,f)):n[c]=f);return n},r.each=function(n,a,s){var m,c;if(this.type(n)==="number")for(m=0;m<n;m++)a(m,m);else if(n.length===+n.length)for(m=0;m<n.length&&a.call(s,n[m],m,n)!==!1;m++);else for(c in n)if(a.call(s,n[c],c,n)===!1)break},r.type=function(n){return n==null?String(n):Object.prototype.toString.call(n).match(/\[object (\w+)\]/)[1].toLowerCase()},r.each("String Object Array RegExp Function".split(" "),function(o){r["is"+o]=function(n){return r.type(n)===o.toLowerCase()}}),r.isObjectOrArray=function(o){return r.isObject(o)||r.isArray(o)},r.isNumeric=function(o){return!isNaN(parseFloat(o))&&isFinite(o)},r.keys=function(o){var n=[];for(var a in o)o.hasOwnProperty(a)&&n.push(a);return n},r.values=function(o){var n=[];for(var a in o)o.hasOwnProperty(a)&&n.push(o[a]);return n},r.heredoc=function(n){return n.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"").replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")},r.noop=function(){},e.exports=r},function(e,t,r){var o=r(2),n=r(5);e.exports={parse:function(a){a=a==null?"":a+"";var s=(a||"").match(o.RE_KEY),m=s&&s[3]&&s[3].match(o.RE_RANGE),c=m&&m[1]&&parseInt(m[1],10),u=m&&m[2]&&parseInt(m[2],10),f=m?m[2]?n.integer(c,u):parseInt(m[1],10):void 0,y=s&&s[4]&&s[4].match(o.RE_RANGE),d=y&&y[1]&&parseInt(y[1],10),k=y&&y[2]&&parseInt(y[2],10),b=y?!y[2]&&parseInt(y[1],10)||n.integer(d,k):void 0,C={parameters:s,range:m,min:c,max:u,count:f,decimal:y,dmin:d,dmax:k,dcount:b};for(var A in C)if(C[A]!=null)return C;return{}}}},function(e,t,r){var o=r(3),n={extend:o.extend};n.extend(r(6)),n.extend(r(7)),n.extend(r(8)),n.extend(r(10)),n.extend(r(13)),n.extend(r(15)),n.extend(r(16)),n.extend(r(17)),n.extend(r(14)),n.extend(r(19)),e.exports=n},function(e,t){e.exports={boolean:function(r,o,n){return n!==void 0?(r=typeof r<"u"&&!isNaN(r)?parseInt(r,10):1,o=typeof o<"u"&&!isNaN(o)?parseInt(o,10):1,Math.random()>1/(r+o)*r?!n:n):Math.random()>=.5},bool:function(r,o,n){return this.boolean(r,o,n)},natural:function(r,o){return r=typeof r<"u"?parseInt(r,10):0,o=typeof o<"u"?parseInt(o,10):9007199254740992,Math.round(Math.random()*(o-r))+r},integer:function(r,o){return r=typeof r<"u"?parseInt(r,10):-9007199254740992,o=typeof o<"u"?parseInt(o,10):9007199254740992,Math.round(Math.random()*(o-r))+r},int:function(r,o){return this.integer(r,o)},float:function(r,o,n,a){n=n===void 0?0:n,n=Math.max(Math.min(n,17),0),a=a===void 0?17:a,a=Math.max(Math.min(a,17),0);for(var s=this.integer(r,o)+".",m=0,c=this.natural(n,a);m<c;m++)s+=m<c-1?this.character("number"):this.character("123456789");return parseFloat(s,10)},character:function(r){var o={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"!@#$%^&*()[]"};return o.alpha=o.lower+o.upper,o.undefined=o.lower+o.upper+o.number+o.symbol,r=o[(""+r).toLowerCase()]||r,r.charAt(this.natural(0,r.length-1))},char:function(r){return this.character(r)},string:function(r,o,n){var a;switch(arguments.length){case 0:a=this.natural(3,7);break;case 1:a=r,r=void 0;break;case 2:typeof arguments[0]=="string"?a=o:(a=this.natural(r,o),r=void 0);break;case 3:a=this.natural(o,n);break}for(var s="",m=0;m<a;m++)s+=this.character(r);return s},str:function(){return this.string.apply(this,arguments)},range:function(r,o,n){arguments.length<=1&&(o=r||0,r=0),n=arguments[2]||1,r=+r,o=+o,n=+n;for(var a=Math.max(Math.ceil((o-r)/n),0),s=0,m=new Array(a);s<a;)m[s++]=r,r+=n;return m}}},function(e,t){var r={yyyy:"getFullYear",yy:function(o){return(""+o.getFullYear()).slice(2)},y:"yy",MM:function(o){var n=o.getMonth()+1;return n<10?"0"+n:n},M:function(o){return o.getMonth()+1},dd:function(o){var n=o.getDate();return n<10?"0"+n:n},d:"getDate",HH:function(o){var n=o.getHours();return n<10?"0"+n:n},H:"getHours",hh:function(o){var n=o.getHours()%12;return n<10?"0"+n:n},h:function(o){return o.getHours()%12},mm:function(o){var n=o.getMinutes();return n<10?"0"+n:n},m:"getMinutes",ss:function(o){var n=o.getSeconds();return n<10?"0"+n:n},s:"getSeconds",SS:function(o){var n=o.getMilliseconds();return n<10&&"00"+n||n<100&&"0"+n||n},S:"getMilliseconds",A:function(o){return o.getHours()<12?"AM":"PM"},a:function(o){return o.getHours()<12?"am":"pm"},T:"getTime"};e.exports={_patternLetters:r,_rformat:new RegExp(function(){var o=[];for(var n in r)o.push(n);return"("+o.join("|")+")"}(),"g"),_formatDate:function(o,n){return n.replace(this._rformat,function a(s,m){return typeof r[m]=="function"?r[m](o):r[m]in r?a(s,r[m]):o[r[m]]()})},_randomDate:function(o,n){return o=o===void 0?new Date(0):o,n=n===void 0?new Date:n,new Date(Math.random()*(n.getTime()-o.getTime()))},date:function(o){return o=o||"yyyy-MM-dd",this._formatDate(this._randomDate(),o)},time:function(o){return o=o||"HH:mm:ss",this._formatDate(this._randomDate(),o)},datetime:function(o){return o=o||"yyyy-MM-dd HH:mm:ss",this._formatDate(this._randomDate(),o)},now:function(o,n){arguments.length===1&&(/year|month|day|hour|minute|second|week/.test(o)||(n=o,o="")),o=(o||"").toLowerCase(),n=n||"yyyy-MM-dd HH:mm:ss";var a=new Date;switch(o){case"year":a.setMonth(0);case"month":a.setDate(1);case"week":case"day":a.setHours(0);case"hour":a.setMinutes(0);case"minute":a.setSeconds(0);case"second":a.setMilliseconds(0)}switch(o){case"week":a.setDate(a.getDate()-a.getDay())}return this._formatDate(a,n)}}},function(e,t,r){(function(o){o.exports={_adSize:["300x250","250x250","240x400","336x280","180x150","720x300","468x60","234x60","88x31","120x90","120x60","120x240","125x125","728x90","160x600","120x600","300x600"],_screenSize:["320x200","320x240","640x480","800x480","800x480","1024x600","1024x768","1280x800","1440x900","1920x1200","2560x1600"],_videoSize:["720x480","768x576","1280x720","1920x1080"],image:function(n,a,s,m,c){return arguments.length===4&&(c=m,m=void 0),arguments.length===3&&(c=s,s=void 0),n||(n=this.pick(this._adSize)),a&&~a.indexOf("#")&&(a=a.slice(1)),s&&~s.indexOf("#")&&(s=s.slice(1)),"http://dummyimage.com/"+n+(a?"/"+a:"")+(s?"/"+s:"")+(m?"."+m:"")+(c?"&text="+c:"")},img:function(){return this.image.apply(this,arguments)},_brandColors:{"4ormat":"#fb0a2a","500px":"#02adea","About.me (blue)":"#00405d","About.me (yellow)":"#ffcc33",Addvocate:"#ff6138",Adobe:"#ff0000",Aim:"#fcd20b",Amazon:"#e47911",Android:"#a4c639","Angie's List":"#7fbb00",AOL:"#0060a3",Atlassian:"#003366",Behance:"#053eff","Big Cartel":"#97b538",bitly:"#ee6123",Blogger:"#fc4f08",Boeing:"#0039a6","Booking.com":"#003580",Carbonmade:"#613854",Cheddar:"#ff7243","Code School":"#3d4944",Delicious:"#205cc0",Dell:"#3287c1",Designmoo:"#e54a4f",Deviantart:"#4e6252","Designer News":"#2d72da",Devour:"#fd0001",DEWALT:"#febd17","Disqus (blue)":"#59a3fc","Disqus (orange)":"#db7132",Dribbble:"#ea4c89",Dropbox:"#3d9ae8",Drupal:"#0c76ab",Dunked:"#2a323a",eBay:"#89c507",Ember:"#f05e1b",Engadget:"#00bdf6",Envato:"#528036",Etsy:"#eb6d20",Evernote:"#5ba525","Fab.com":"#dd0017",Facebook:"#3b5998",Firefox:"#e66000","Flickr (blue)":"#0063dc","Flickr (pink)":"#ff0084",Forrst:"#5b9a68",Foursquare:"#25a0ca",Garmin:"#007cc3",GetGlue:"#2d75a2",Gimmebar:"#f70078",GitHub:"#171515","Google Blue":"#0140ca","Google Green":"#16a61e","Google Red":"#dd1812","Google Yellow":"#fcca03","Google+":"#dd4b39",Grooveshark:"#f77f00",Groupon:"#82b548","Hacker News":"#ff6600",HelloWallet:"#0085ca","Heroku (light)":"#c7c5e6","Heroku (dark)":"#6567a5",HootSuite:"#003366",Houzz:"#73ba37",HTML5:"#ec6231",IKEA:"#ffcc33",IMDb:"#f3ce13",Instagram:"#3f729b",Intel:"#0071c5",Intuit:"#365ebf",Kickstarter:"#76cc1e",kippt:"#e03500",Kodery:"#00af81",LastFM:"#c3000d",LinkedIn:"#0e76a8",Livestream:"#cf0005",Lumo:"#576396",Mixpanel:"#a086d3",Meetup:"#e51937",Nokia:"#183693",NVIDIA:"#76b900",Opera:"#cc0f16",Path:"#e41f11","PayPal (dark)":"#1e477a","PayPal (light)":"#3b7bbf",Pinboard:"#0000e6",Pinterest:"#c8232c",PlayStation:"#665cbe",Pocket:"#ee4056",Prezi:"#318bff",Pusha:"#0f71b4",Quora:"#a82400","QUOTE.fm":"#66ceff",Rdio:"#008fd5",Readability:"#9c0000","Red Hat":"#cc0000",Resource:"#7eb400",Rockpack:"#0ba6ab",Roon:"#62b0d9",RSS:"#ee802f",Salesforce:"#1798c1",Samsung:"#0c4da2",Shopify:"#96bf48",Skype:"#00aff0",Snagajob:"#f47a20",Softonic:"#008ace",SoundCloud:"#ff7700","Space Box":"#f86960",Spotify:"#81b71a",Sprint:"#fee100",Squarespace:"#121212",StackOverflow:"#ef8236",Staples:"#cc0000","Status Chart":"#d7584f",Stripe:"#008cdd",StudyBlue:"#00afe1",StumbleUpon:"#f74425","T-Mobile":"#ea0a8e",Technorati:"#40a800","The Next Web":"#ef4423",Treehouse:"#5cb868",Trulia:"#5eab1f",Tumblr:"#34526f","Twitch.tv":"#6441a5",Twitter:"#00acee",TYPO3:"#ff8700",Ubuntu:"#dd4814",Ustream:"#3388ff",Verizon:"#ef1d1d",Vimeo:"#86c9ef",Vine:"#00a478",Virb:"#06afd8","Virgin Media":"#cc0000",Wooga:"#5b009c","WordPress (blue)":"#21759b","WordPress (orange)":"#d54e21","WordPress (grey)":"#464646",Wunderlist:"#2b88d9",XBOX:"#9bc848",XING:"#126567","Yahoo!":"#720e9e",Yandex:"#ffcc00",Yelp:"#c41200",YouTube:"#c4302b",Zalongo:"#5498dc",Zendesk:"#78a300",Zerply:"#9dcc7a",Zootool:"#5e8b1d"},_brandNames:function(){var n=[];for(var a in this._brandColors)n.push(a);return n},dataImage:function(n,a){var s;if(typeof document<"u")s=document.createElement("canvas");else{var m=o.require("canvas");s=new m}var c=s&&s.getContext&&s.getContext("2d");if(!s||!c)return"";n||(n=this.pick(this._adSize)),a=a!==void 0?a:n,n=n.split("x");var u=parseInt(n[0],10),f=parseInt(n[1],10),y=this._brandColors[this.pick(this._brandNames())],d="#FFF",k=14,b="sans-serif";return s.width=u,s.height=f,c.textAlign="center",c.textBaseline="middle",c.fillStyle=y,c.fillRect(0,0,u,f),c.fillStyle=d,c.font="bold "+k+"px "+b,c.fillText(a,u/2,f/2,u),s.toDataURL("image/png")}}}).call(t,r(9)(e))},function(e,t){e.exports=function(r){return r.webpackPolyfill||(r.deprecate=function(){},r.paths=[],r.children=[],r.webpackPolyfill=1),r}},function(e,t,r){var o=r(11),n=r(12);e.exports={color:function(a){return a||n[a]?n[a].nicer:this.hex()},hex:function(){var a=this._goldenRatioColor(),s=o.hsv2rgb(a),m=o.rgb2hex(s[0],s[1],s[2]);return m},rgb:function(){var a=this._goldenRatioColor(),s=o.hsv2rgb(a);return"rgb("+parseInt(s[0],10)+", "+parseInt(s[1],10)+", "+parseInt(s[2],10)+")"},rgba:function(){var a=this._goldenRatioColor(),s=o.hsv2rgb(a);return"rgba("+parseInt(s[0],10)+", "+parseInt(s[1],10)+", "+parseInt(s[2],10)+", "+Math.random().toFixed(2)+")"},hsl:function(){var a=this._goldenRatioColor(),s=o.hsv2hsl(a);return"hsl("+parseInt(s[0],10)+", "+parseInt(s[1],10)+", "+parseInt(s[2],10)+")"},_goldenRatioColor:function(a,s){return this._goldenRatio=.618033988749895,this._hue=this._hue||Math.random(),this._hue+=this._goldenRatio,this._hue%=1,typeof a!="number"&&(a=.5),typeof s!="number"&&(s=.95),[this._hue*360,a*100,s*100]}}},function(e,t){e.exports={rgb2hsl:function(o){var n=o[0]/255,a=o[1]/255,s=o[2]/255,m=Math.min(n,a,s),c=Math.max(n,a,s),u=c-m,f,y,d;return c==m?f=0:n==c?f=(a-s)/u:a==c?f=2+(s-n)/u:s==c&&(f=4+(n-a)/u),f=Math.min(f*60,360),f<0&&(f+=360),d=(m+c)/2,c==m?y=0:d<=.5?y=u/(c+m):y=u/(2-c-m),[f,y*100,d*100]},rgb2hsv:function(o){var n=o[0],a=o[1],s=o[2],m=Math.min(n,a,s),c=Math.max(n,a,s),u=c-m,f,y,d;return c===0?y=0:y=u/c*1e3/10,c==m?f=0:n==c?f=(a-s)/u:a==c?f=2+(s-n)/u:s==c&&(f=4+(n-a)/u),f=Math.min(f*60,360),f<0&&(f+=360),d=c/255*1e3/10,[f,y,d]},hsl2rgb:function(o){var n=o[0]/360,a=o[1]/100,s=o[2]/100,m,c,u,f,y;if(a===0)return y=s*255,[y,y,y];s<.5?c=s*(1+a):c=s+a-s*a,m=2*s-c,f=[0,0,0];for(var d=0;d<3;d++)u=n+1/3*-(d-1),u<0&&u++,u>1&&u--,6*u<1?y=m+(c-m)*6*u:2*u<1?y=c:3*u<2?y=m+(c-m)*(2/3-u)*6:y=m,f[d]=y*255;return f},hsl2hsv:function(o){var n=o[0],a=o[1]/100,s=o[2]/100,m,c;return s*=2,a*=s<=1?s:2-s,c=(s+a)/2,m=2*a/(s+a),[n,m*100,c*100]},hsv2rgb:function(o){var n=o[0]/60,a=o[1]/100,s=o[2]/100,m=Math.floor(n)%6,c=n-Math.floor(n),u=255*s*(1-a),f=255*s*(1-a*c),y=255*s*(1-a*(1-c));switch(s=255*s,m){case 0:return[s,y,u];case 1:return[f,s,u];case 2:return[u,s,y];case 3:return[u,f,s];case 4:return[y,u,s];case 5:return[s,u,f]}},hsv2hsl:function(o){var n=o[0],a=o[1]/100,s=o[2]/100,m,c;return c=(2-a)*s,m=a*s,m/=c<=1?c:2-c,c/=2,[n,m*100,c*100]},rgb2hex:function(r,o,n){return"#"+((256+r<<8|o)<<8|n).toString(16).slice(1)},hex2rgb:function(r){return r="0x"+r.slice(1).replace(r.length>4?r:/./g,"$&$&")|0,[r>>16,r>>8&255,r&255]}}},function(e,t){e.exports={navy:{value:"#000080",nicer:"#001F3F"},blue:{value:"#0000ff",nicer:"#0074D9"},aqua:{value:"#00ffff",nicer:"#7FDBFF"},teal:{value:"#008080",nicer:"#39CCCC"},olive:{value:"#008000",nicer:"#3D9970"},green:{value:"#008000",nicer:"#2ECC40"},lime:{value:"#00ff00",nicer:"#01FF70"},yellow:{value:"#ffff00",nicer:"#FFDC00"},orange:{value:"#ffa500",nicer:"#FF851B"},red:{value:"#ff0000",nicer:"#FF4136"},maroon:{value:"#800000",nicer:"#85144B"},fuchsia:{value:"#ff00ff",nicer:"#F012BE"},purple:{value:"#800080",nicer:"#B10DC9"},silver:{value:"#c0c0c0",nicer:"#DDDDDD"},gray:{value:"#808080",nicer:"#AAAAAA"},black:{value:"#000000",nicer:"#111111"},white:{value:"#FFFFFF",nicer:"#FFFFFF"}}},function(e,t,r){var o=r(6),n=r(14);function a(s,m,c,u){return c===void 0?o.natural(s,m):u===void 0?c:o.natural(parseInt(c,10),parseInt(u,10))}e.exports={paragraph:function(s,m){for(var c=a(3,7,s,m),u=[],f=0;f<c;f++)u.push(this.sentence());return u.join(" ")},cparagraph:function(s,m){for(var c=a(3,7,s,m),u=[],f=0;f<c;f++)u.push(this.csentence());return u.join("")},sentence:function(s,m){for(var c=a(12,18,s,m),u=[],f=0;f<c;f++)u.push(this.word());return n.capitalize(u.join(" "))+"."},csentence:function(s,m){for(var c=a(12,18,s,m),u=[],f=0;f<c;f++)u.push(this.cword());return u.join("")+"。"},word:function(s,m){for(var c=a(3,10,s,m),u="",f=0;f<c;f++)u+=o.character("lower");return u},cword:function(s,m,c){var u="的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞",f;switch(arguments.length){case 0:s=u,f=1;break;case 1:typeof arguments[0]=="string"?f=1:(f=s,s=u);break;case 2:typeof arguments[0]=="string"?f=m:(f=this.natural(s,m),s=u);break;case 3:f=this.natural(m,c);break}for(var y="",d=0;d<f;d++)y+=s.charAt(this.natural(0,s.length-1));return y},title:function(s,m){for(var c=a(3,7,s,m),u=[],f=0;f<c;f++)u.push(this.capitalize(this.word()));return u.join(" ")},ctitle:function(s,m){for(var c=a(3,7,s,m),u=[],f=0;f<c;f++)u.push(this.cword());return u.join("")}}},function(e,t,r){var o=r(3);e.exports={capitalize:function(n){return(n+"").charAt(0).toUpperCase()+(n+"").substr(1)},upper:function(n){return(n+"").toUpperCase()},lower:function(n){return(n+"").toLowerCase()},pick:function(a,s,m){return o.isArray(a)?(s===void 0&&(s=1),m===void 0&&(m=s)):(a=[].slice.call(arguments),s=1,m=1),s===1&&m===1?a[this.natural(0,a.length-1)]:this.shuffle(a,s,m)},shuffle:function(a,s,m){a=a||[];for(var c=a.slice(0),u=[],f=0,y=c.length,d=0;d<y;d++)f=this.natural(0,c.length-1),u.push(c[f]),c.splice(f,1);switch(arguments.length){case 0:case 1:return u;case 2:m=s;case 3:return s=parseInt(s,10),m=parseInt(m,10),u.slice(0,this.natural(s,m))}},order:function n(a){n.cache=n.cache||{},arguments.length>1&&(a=[].slice.call(arguments,0));var s=n.options,m=s.context.templatePath.join("."),c=n.cache[m]=n.cache[m]||{index:0,array:a};return c.array[c.index++%c.array.length]}}},function(e,t){e.exports={first:function(){var r=["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric"].concat(["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna"]);return this.pick(r)},last:function(){var r=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen"];return this.pick(r)},name:function(r){return this.first()+" "+(r?this.first()+" ":"")+this.last()},cfirst:function(){var r="王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文".split(" ");return this.pick(r)},clast:function(){var r="伟 芳 娜 秀英 敏 静 丽 强 磊 军 洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 平 刚 桂英".split(" ");return this.pick(r)},cname:function(){return this.cfirst()+this.clast()}}},function(e,t){e.exports={url:function(r,o){return(r||this.protocol())+"://"+(o||this.domain())+"/"+this.word()},protocol:function(){return this.pick("http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" "))},domain:function(r){return this.word()+"."+(r||this.tld())},tld:function(){return this.pick("com net org edu gov int mil cn com.cn net.cn gov.cn org.cn 中国 中国互联.公司 中国互联.网络 tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" "))},email:function(r){return this.character("lower")+"."+this.word()+"@"+(r||this.word()+"."+this.tld())},ip:function(){return this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)}}},function(e,t,r){var o=r(18),n=["东北","华北","华东","华中","华南","西南","西北"];e.exports={region:function(){return this.pick(n)},province:function(){return this.pick(o).name},city:function(a){var s=this.pick(o),m=this.pick(s.children);return a?[s.name,m.name].join(" "):m.name},county:function(a){var s=this.pick(o),m=this.pick(s.children),c=this.pick(m.children)||{name:"-"};return a?[s.name,m.name,c.name].join(" "):c.name},zip:function(a){for(var s="",m=0;m<(a||6);m++)s+=this.natural(0,9);return s}}},function(e,t){var r={11e4:"北京",110100:"北京市",110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",110107:"石景山区",110108:"海淀区",110109:"门头沟区",110111:"房山区",110112:"通州区",110113:"顺义区",110114:"昌平区",110115:"大兴区",110116:"怀柔区",110117:"平谷区",110228:"密云县",110229:"延庆县",110230:"其它区",12e4:"天津",120100:"天津市",120101:"和平区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区",120106:"红桥区",120110:"东丽区",120111:"西青区",120112:"津南区",120113:"北辰区",120114:"武清区",120115:"宝坻区",120116:"滨海新区",120221:"宁河县",120223:"静海县",120225:"蓟县",120226:"其它区",13e4:"河北省",130100:"石家庄市",130102:"长安区",130103:"桥东区",130104:"桥西区",130105:"新华区",130107:"井陉矿区",130108:"裕华区",130121:"井陉县",130123:"正定县",130124:"栾城县",130125:"行唐县",130126:"灵寿县",130127:"高邑县",130128:"深泽县",130129:"赞皇县",130130:"无极县",130131:"平山县",130132:"元氏县",130133:"赵县",130181:"辛集市",130182:"藁城市",130183:"晋州市",130184:"新乐市",130185:"鹿泉市",130186:"其它区",130200:"唐山市",130202:"路南区",130203:"路北区",130204:"古冶区",130205:"开平区",130207:"丰南区",130208:"丰润区",130223:"滦县",130224:"滦南县",130225:"乐亭县",130227:"迁西县",130229:"玉田县",130230:"曹妃甸区",130281:"遵化市",130283:"迁安市",130284:"其它区",130300:"秦皇岛市",130302:"海港区",130303:"山海关区",130304:"北戴河区",130321:"青龙满族自治县",130322:"昌黎县",130323:"抚宁县",130324:"卢龙县",130398:"其它区",130400:"邯郸市",130402:"邯山区",130403:"丛台区",130404:"复兴区",130406:"峰峰矿区",130421:"邯郸县",130423:"临漳县",130424:"成安县",130425:"大名县",130426:"涉县",130427:"磁县",130428:"肥乡县",130429:"永年县",130430:"邱县",130431:"鸡泽县",130432:"广平县",130433:"馆陶县",130434:"魏县",130435:"曲周县",130481:"武安市",130482:"其它区",130500:"邢台市",130502:"桥东区",130503:"桥西区",130521:"邢台县",130522:"临城县",130523:"内丘县",130524:"柏乡县",130525:"隆尧县",130526:"任县",130527:"南和县",130528:"宁晋县",130529:"巨鹿县",130530:"新河县",130531:"广宗县",130532:"平乡县",130533:"威县",130534:"清河县",130535:"临西县",130581:"南宫市",130582:"沙河市",130583:"其它区",130600:"保定市",130602:"新市区",130603:"北市区",130604:"南市区",130621:"满城县",130622:"清苑县",130623:"涞水县",130624:"阜平县",130625:"徐水县",130626:"定兴县",130627:"唐县",130628:"高阳县",130629:"容城县",130630:"涞源县",130631:"望都县",130632:"安新县",130633:"易县",130634:"曲阳县",130635:"蠡县",130636:"顺平县",130637:"博野县",130638:"雄县",130681:"涿州市",130682:"定州市",130683:"安国市",130684:"高碑店市",130699:"其它区",130700:"张家口市",130702:"桥东区",130703:"桥西区",130705:"宣化区",130706:"下花园区",130721:"宣化县",130722:"张北县",130723:"康保县",130724:"沽源县",130725:"尚义县",130726:"蔚县",130727:"阳原县",130728:"怀安县",130729:"万全县",130730:"怀来县",130731:"涿鹿县",130732:"赤城县",130733:"崇礼县",130734:"其它区",130800:"承德市",130802:"双桥区",130803:"双滦区",130804:"鹰手营子矿区",130821:"承德县",130822:"兴隆县",130823:"平泉县",130824:"滦平县",130825:"隆化县",130826:"丰宁满族自治县",130827:"宽城满族自治县",130828:"围场满族蒙古族自治县",130829:"其它区",130900:"沧州市",130902:"新华区",130903:"运河区",130921:"沧县",130922:"青县",130923:"东光县",130924:"海兴县",130925:"盐山县",130926:"肃宁县",130927:"南皮县",130928:"吴桥县",130929:"献县",130930:"孟村回族自治县",130981:"泊头市",130982:"任丘市",130983:"黄骅市",130984:"河间市",130985:"其它区",131e3:"廊坊市",131002:"安次区",131003:"广阳区",131022:"固安县",131023:"永清县",131024:"香河县",131025:"大城县",131026:"文安县",131028:"大厂回族自治县",131081:"霸州市",131082:"三河市",131083:"其它区",131100:"衡水市",131102:"桃城区",131121:"枣强县",131122:"武邑县",131123:"武强县",131124:"饶阳县",131125:"安平县",131126:"故城县",131127:"景县",131128:"阜城县",131181:"冀州市",131182:"深州市",131183:"其它区",14e4:"山西省",140100:"太原市",140105:"小店区",140106:"迎泽区",140107:"杏花岭区",140108:"尖草坪区",140109:"万柏林区",140110:"晋源区",140121:"清徐县",140122:"阳曲县",140123:"娄烦县",140181:"古交市",140182:"其它区",140200:"大同市",140202:"城区",140203:"矿区",140211:"南郊区",140212:"新荣区",140221:"阳高县",140222:"天镇县",140223:"广灵县",140224:"灵丘县",140225:"浑源县",140226:"左云县",140227:"大同县",140228:"其它区",140300:"阳泉市",140302:"城区",140303:"矿区",140311:"郊区",140321:"平定县",140322:"盂县",140323:"其它区",140400:"长治市",140421:"长治县",140423:"襄垣县",140424:"屯留县",140425:"平顺县",140426:"黎城县",140427:"壶关县",140428:"长子县",140429:"武乡县",140430:"沁县",140431:"沁源县",140481:"潞城市",140482:"城区",140483:"郊区",140485:"其它区",140500:"晋城市",140502:"城区",140521:"沁水县",140522:"阳城县",140524:"陵川县",140525:"泽州县",140581:"高平市",140582:"其它区",140600:"朔州市",140602:"朔城区",140603:"平鲁区",140621:"山阴县",140622:"应县",140623:"右玉县",140624:"怀仁县",140625:"其它区",140700:"晋中市",140702:"榆次区",140721:"榆社县",140722:"左权县",140723:"和顺县",140724:"昔阳县",140725:"寿阳县",140726:"太谷县",140727:"祁县",140728:"平遥县",140729:"灵石县",140781:"介休市",140782:"其它区",140800:"运城市",140802:"盐湖区",140821:"临猗县",140822:"万荣县",140823:"闻喜县",140824:"稷山县",140825:"新绛县",140826:"绛县",140827:"垣曲县",140828:"夏县",140829:"平陆县",140830:"芮城县",140881:"永济市",140882:"河津市",140883:"其它区",140900:"忻州市",140902:"忻府区",140921:"定襄县",140922:"五台县",140923:"代县",140924:"繁峙县",140925:"宁武县",140926:"静乐县",140927:"神池县",140928:"五寨县",140929:"岢岚县",140930:"河曲县",140931:"保德县",140932:"偏关县",140981:"原平市",140982:"其它区",141e3:"临汾市",141002:"尧都区",141021:"曲沃县",141022:"翼城县",141023:"襄汾县",141024:"洪洞县",141025:"古县",141026:"安泽县",141027:"浮山县",141028:"吉县",141029:"乡宁县",141030:"大宁县",141031:"隰县",141032:"永和县",141033:"蒲县",141034:"汾西县",141081:"侯马市",141082:"霍州市",141083:"其它区",141100:"吕梁市",141102:"离石区",141121:"文水县",141122:"交城县",141123:"兴县",141124:"临县",141125:"柳林县",141126:"石楼县",141127:"岚县",141128:"方山县",141129:"中阳县",141130:"交口县",141181:"孝义市",141182:"汾阳市",141183:"其它区",15e4:"内蒙古自治区",150100:"呼和浩特市",150102:"新城区",150103:"回民区",150104:"玉泉区",150105:"赛罕区",150121:"土默特左旗",150122:"托克托县",150123:"和林格尔县",150124:"清水河县",150125:"武川县",150126:"其它区",150200:"包头市",150202:"东河区",150203:"昆都仑区",150204:"青山区",150205:"石拐区",150206:"白云鄂博矿区",150207:"九原区",150221:"土默特右旗",150222:"固阳县",150223:"达尔罕茂明安联合旗",150224:"其它区",150300:"乌海市",150302:"海勃湾区",150303:"海南区",150304:"乌达区",150305:"其它区",150400:"赤峰市",150402:"红山区",150403:"元宝山区",150404:"松山区",150421:"阿鲁科尔沁旗",150422:"巴林左旗",150423:"巴林右旗",150424:"林西县",150425:"克什克腾旗",150426:"翁牛特旗",150428:"喀喇沁旗",150429:"宁城县",150430:"敖汉旗",150431:"其它区",150500:"通辽市",150502:"科尔沁区",150521:"科尔沁左翼中旗",150522:"科尔沁左翼后旗",150523:"开鲁县",150524:"库伦旗",150525:"奈曼旗",150526:"扎鲁特旗",150581:"霍林郭勒市",150582:"其它区",150600:"鄂尔多斯市",150602:"东胜区",150621:"达拉特旗",150622:"准格尔旗",150623:"鄂托克前旗",150624:"鄂托克旗",150625:"杭锦旗",150626:"乌审旗",150627:"伊金霍洛旗",150628:"其它区",150700:"呼伦贝尔市",150702:"海拉尔区",150703:"扎赉诺尔区",150721:"阿荣旗",150722:"莫力达瓦达斡尔族自治旗",150723:"鄂伦春自治旗",150724:"鄂温克族自治旗",150725:"陈巴尔虎旗",150726:"新巴尔虎左旗",150727:"新巴尔虎右旗",150781:"满洲里市",150782:"牙克石市",150783:"扎兰屯市",150784:"额尔古纳市",150785:"根河市",150786:"其它区",150800:"巴彦淖尔市",150802:"临河区",150821:"五原县",150822:"磴口县",150823:"乌拉特前旗",150824:"乌拉特中旗",150825:"乌拉特后旗",150826:"杭锦后旗",150827:"其它区",150900:"乌兰察布市",150902:"集宁区",150921:"卓资县",150922:"化德县",150923:"商都县",150924:"兴和县",150925:"凉城县",150926:"察哈尔右翼前旗",150927:"察哈尔右翼中旗",150928:"察哈尔右翼后旗",150929:"四子王旗",150981:"丰镇市",150982:"其它区",152200:"兴安盟",152201:"乌兰浩特市",152202:"阿尔山市",152221:"科尔沁右翼前旗",152222:"科尔沁右翼中旗",152223:"扎赉特旗",152224:"突泉县",152225:"其它区",152500:"锡林郭勒盟",152501:"二连浩特市",152502:"锡林浩特市",152522:"阿巴嘎旗",152523:"苏尼特左旗",152524:"苏尼特右旗",152525:"东乌珠穆沁旗",152526:"西乌珠穆沁旗",152527:"太仆寺旗",152528:"镶黄旗",152529:"正镶白旗",152530:"正蓝旗",152531:"多伦县",152532:"其它区",152900:"阿拉善盟",152921:"阿拉善左旗",152922:"阿拉善右旗",152923:"额济纳旗",152924:"其它区",21e4:"辽宁省",210100:"沈阳市",210102:"和平区",210103:"沈河区",210104:"大东区",210105:"皇姑区",210106:"铁西区",210111:"苏家屯区",210112:"东陵区",210113:"新城子区",210114:"于洪区",210122:"辽中县",210123:"康平县",210124:"法库县",210181:"新民市",210184:"沈北新区",210185:"其它区",210200:"大连市",210202:"中山区",210203:"西岗区",210204:"沙河口区",210211:"甘井子区",210212:"旅顺口区",210213:"金州区",210224:"长海县",210281:"瓦房店市",210282:"普兰店市",210283:"庄河市",210298:"其它区",210300:"鞍山市",210302:"铁东区",210303:"铁西区",210304:"立山区",210311:"千山区",210321:"台安县",210323:"岫岩满族自治县",210381:"海城市",210382:"其它区",210400:"抚顺市",210402:"新抚区",210403:"东洲区",210404:"望花区",210411:"顺城区",210421:"抚顺县",210422:"新宾满族自治县",210423:"清原满族自治县",210424:"其它区",210500:"本溪市",210502:"平山区",210503:"溪湖区",210504:"明山区",210505:"南芬区",210521:"本溪满族自治县",210522:"桓仁满族自治县",210523:"其它区",210600:"丹东市",210602:"元宝区",210603:"振兴区",210604:"振安区",210624:"宽甸满族自治县",210681:"东港市",210682:"凤城市",210683:"其它区",210700:"锦州市",210702:"古塔区",210703:"凌河区",210711:"太和区",210726:"黑山县",210727:"义县",210781:"凌海市",210782:"北镇市",210783:"其它区",210800:"营口市",210802:"站前区",210803:"西市区",210804:"鲅鱼圈区",210811:"老边区",210881:"盖州市",210882:"大石桥市",210883:"其它区",210900:"阜新市",210902:"海州区",210903:"新邱区",210904:"太平区",210905:"清河门区",210911:"细河区",210921:"阜新蒙古族自治县",210922:"彰武县",210923:"其它区",211e3:"辽阳市",211002:"白塔区",211003:"文圣区",211004:"宏伟区",211005:"弓长岭区",211011:"太子河区",211021:"辽阳县",211081:"灯塔市",211082:"其它区",211100:"盘锦市",211102:"双台子区",211103:"兴隆台区",211121:"大洼县",211122:"盘山县",211123:"其它区",211200:"铁岭市",211202:"银州区",211204:"清河区",211221:"铁岭县",211223:"西丰县",211224:"昌图县",211281:"调兵山市",211282:"开原市",211283:"其它区",211300:"朝阳市",211302:"双塔区",211303:"龙城区",211321:"朝阳县",211322:"建平县",211324:"喀喇沁左翼蒙古族自治县",211381:"北票市",211382:"凌源市",211383:"其它区",211400:"葫芦岛市",211402:"连山区",211403:"龙港区",211404:"南票区",211421:"绥中县",211422:"建昌县",211481:"兴城市",211482:"其它区",22e4:"吉林省",220100:"长春市",220102:"南关区",220103:"宽城区",220104:"朝阳区",220105:"二道区",220106:"绿园区",220112:"双阳区",220122:"农安县",220181:"九台市",220182:"榆树市",220183:"德惠市",220188:"其它区",220200:"吉林市",220202:"昌邑区",220203:"龙潭区",220204:"船营区",220211:"丰满区",220221:"永吉县",220281:"蛟河市",220282:"桦甸市",220283:"舒兰市",220284:"磐石市",220285:"其它区",220300:"四平市",220302:"铁西区",220303:"铁东区",220322:"梨树县",220323:"伊通满族自治县",220381:"公主岭市",220382:"双辽市",220383:"其它区",220400:"辽源市",220402:"龙山区",220403:"西安区",220421:"东丰县",220422:"东辽县",220423:"其它区",220500:"通化市",220502:"东昌区",220503:"二道江区",220521:"通化县",220523:"辉南县",220524:"柳河县",220581:"梅河口市",220582:"集安市",220583:"其它区",220600:"白山市",220602:"浑江区",220621:"抚松县",220622:"靖宇县",220623:"长白朝鲜族自治县",220625:"江源区",220681:"临江市",220682:"其它区",220700:"松原市",220702:"宁江区",220721:"前郭尔罗斯蒙古族自治县",220722:"长岭县",220723:"乾安县",220724:"扶余市",220725:"其它区",220800:"白城市",220802:"洮北区",220821:"镇赉县",220822:"通榆县",220881:"洮南市",220882:"大安市",220883:"其它区",222400:"延边朝鲜族自治州",222401:"延吉市",222402:"图们市",222403:"敦化市",222404:"珲春市",222405:"龙井市",222406:"和龙市",222424:"汪清县",222426:"安图县",222427:"其它区",23e4:"黑龙江省",230100:"哈尔滨市",230102:"道里区",230103:"南岗区",230104:"道外区",230106:"香坊区",230108:"平房区",230109:"松北区",230111:"呼兰区",230123:"依兰县",230124:"方正县",230125:"宾县",230126:"巴彦县",230127:"木兰县",230128:"通河县",230129:"延寿县",230181:"阿城区",230182:"双城市",230183:"尚志市",230184:"五常市",230186:"其它区",230200:"齐齐哈尔市",230202:"龙沙区",230203:"建华区",230204:"铁锋区",230205:"昂昂溪区",230206:"富拉尔基区",230207:"碾子山区",230208:"梅里斯达斡尔族区",230221:"龙江县",230223:"依安县",230224:"泰来县",230225:"甘南县",230227:"富裕县",230229:"克山县",230230:"克东县",230231:"拜泉县",230281:"讷河市",230282:"其它区",230300:"鸡西市",230302:"鸡冠区",230303:"恒山区",230304:"滴道区",230305:"梨树区",230306:"城子河区",230307:"麻山区",230321:"鸡东县",230381:"虎林市",230382:"密山市",230383:"其它区",230400:"鹤岗市",230402:"向阳区",230403:"工农区",230404:"南山区",230405:"兴安区",230406:"东山区",230407:"兴山区",230421:"萝北县",230422:"绥滨县",230423:"其它区",230500:"双鸭山市",230502:"尖山区",230503:"岭东区",230505:"四方台区",230506:"宝山区",230521:"集贤县",230522:"友谊县",230523:"宝清县",230524:"饶河县",230525:"其它区",230600:"大庆市",230602:"萨尔图区",230603:"龙凤区",230604:"让胡路区",230605:"红岗区",230606:"大同区",230621:"肇州县",230622:"肇源县",230623:"林甸县",230624:"杜尔伯特蒙古族自治县",230625:"其它区",230700:"伊春市",230702:"伊春区",230703:"南岔区",230704:"友好区",230705:"西林区",230706:"翠峦区",230707:"新青区",230708:"美溪区",230709:"金山屯区",230710:"五营区",230711:"乌马河区",230712:"汤旺河区",230713:"带岭区",230714:"乌伊岭区",230715:"红星区",230716:"上甘岭区",230722:"嘉荫县",230781:"铁力市",230782:"其它区",230800:"佳木斯市",230803:"向阳区",230804:"前进区",230805:"东风区",230811:"郊区",230822:"桦南县",230826:"桦川县",230828:"汤原县",230833:"抚远县",230881:"同江市",230882:"富锦市",230883:"其它区",230900:"七台河市",230902:"新兴区",230903:"桃山区",230904:"茄子河区",230921:"勃利县",230922:"其它区",231e3:"牡丹江市",231002:"东安区",231003:"阳明区",231004:"爱民区",231005:"西安区",231024:"东宁县",231025:"林口县",231081:"绥芬河市",231083:"海林市",231084:"宁安市",231085:"穆棱市",231086:"其它区",231100:"黑河市",231102:"爱辉区",231121:"嫩江县",231123:"逊克县",231124:"孙吴县",231181:"北安市",231182:"五大连池市",231183:"其它区",231200:"绥化市",231202:"北林区",231221:"望奎县",231222:"兰西县",231223:"青冈县",231224:"庆安县",231225:"明水县",231226:"绥棱县",231281:"安达市",231282:"肇东市",231283:"海伦市",231284:"其它区",232700:"大兴安岭地区",232702:"松岭区",232703:"新林区",232704:"呼中区",232721:"呼玛县",232722:"塔河县",232723:"漠河县",232724:"加格达奇区",232725:"其它区",31e4:"上海",310100:"上海市",310101:"黄浦区",310104:"徐汇区",310105:"长宁区",310106:"静安区",310107:"普陀区",310108:"闸北区",310109:"虹口区",310110:"杨浦区",310112:"闵行区",310113:"宝山区",310114:"嘉定区",310115:"浦东新区",310116:"金山区",310117:"松江区",310118:"青浦区",310120:"奉贤区",310230:"崇明县",310231:"其它区",32e4:"江苏省",320100:"南京市",320102:"玄武区",320104:"秦淮区",320105:"建邺区",320106:"鼓楼区",320111:"浦口区",320113:"栖霞区",320114:"雨花台区",320115:"江宁区",320116:"六合区",320124:"溧水区",320125:"高淳区",320126:"其它区",320200:"无锡市",320202:"崇安区",320203:"南长区",320204:"北塘区",320205:"锡山区",320206:"惠山区",320211:"滨湖区",320281:"江阴市",320282:"宜兴市",320297:"其它区",320300:"徐州市",320302:"鼓楼区",320303:"云龙区",320305:"贾汪区",320311:"泉山区",320321:"丰县",320322:"沛县",320323:"铜山区",320324:"睢宁县",320381:"新沂市",320382:"邳州市",320383:"其它区",320400:"常州市",320402:"天宁区",320404:"钟楼区",320405:"戚墅堰区",320411:"新北区",320412:"武进区",320481:"溧阳市",320482:"金坛市",320483:"其它区",320500:"苏州市",320505:"虎丘区",320506:"吴中区",320507:"相城区",320508:"姑苏区",320581:"常熟市",320582:"张家港市",320583:"昆山市",320584:"吴江区",320585:"太仓市",320596:"其它区",320600:"南通市",320602:"崇川区",320611:"港闸区",320612:"通州区",320621:"海安县",320623:"如东县",320681:"启东市",320682:"如皋市",320684:"海门市",320694:"其它区",320700:"连云港市",320703:"连云区",320705:"新浦区",320706:"海州区",320721:"赣榆县",320722:"东海县",320723:"灌云县",320724:"灌南县",320725:"其它区",320800:"淮安市",320802:"清河区",320803:"淮安区",320804:"淮阴区",320811:"清浦区",320826:"涟水县",320829:"洪泽县",320830:"盱眙县",320831:"金湖县",320832:"其它区",320900:"盐城市",320902:"亭湖区",320903:"盐都区",320921:"响水县",320922:"滨海县",320923:"阜宁县",320924:"射阳县",320925:"建湖县",320981:"东台市",320982:"大丰市",320983:"其它区",321e3:"扬州市",321002:"广陵区",321003:"邗江区",321023:"宝应县",321081:"仪征市",321084:"高邮市",321088:"江都区",321093:"其它区",321100:"镇江市",321102:"京口区",321111:"润州区",321112:"丹徒区",321181:"丹阳市",321182:"扬中市",321183:"句容市",321184:"其它区",321200:"泰州市",321202:"海陵区",321203:"高港区",321281:"兴化市",321282:"靖江市",321283:"泰兴市",321284:"姜堰区",321285:"其它区",321300:"宿迁市",321302:"宿城区",321311:"宿豫区",321322:"沭阳县",321323:"泗阳县",321324:"泗洪县",321325:"其它区",33e4:"浙江省",330100:"杭州市",330102:"上城区",330103:"下城区",330104:"江干区",330105:"拱墅区",330106:"西湖区",330108:"滨江区",330109:"萧山区",330110:"余杭区",330122:"桐庐县",330127:"淳安县",330182:"建德市",330183:"富阳市",330185:"临安市",330186:"其它区",330200:"宁波市",330203:"海曙区",330204:"江东区",330205:"江北区",330206:"北仑区",330211:"镇海区",330212:"鄞州区",330225:"象山县",330226:"宁海县",330281:"余姚市",330282:"慈溪市",330283:"奉化市",330284:"其它区",330300:"温州市",330302:"鹿城区",330303:"龙湾区",330304:"瓯海区",330322:"洞头县",330324:"永嘉县",330326:"平阳县",330327:"苍南县",330328:"文成县",330329:"泰顺县",330381:"瑞安市",330382:"乐清市",330383:"其它区",330400:"嘉兴市",330402:"南湖区",330411:"秀洲区",330421:"嘉善县",330424:"海盐县",330481:"海宁市",330482:"平湖市",330483:"桐乡市",330484:"其它区",330500:"湖州市",330502:"吴兴区",330503:"南浔区",330521:"德清县",330522:"长兴县",330523:"安吉县",330524:"其它区",330600:"绍兴市",330602:"越城区",330621:"绍兴县",330624:"新昌县",330681:"诸暨市",330682:"上虞市",330683:"嵊州市",330684:"其它区",330700:"金华市",330702:"婺城区",330703:"金东区",330723:"武义县",330726:"浦江县",330727:"磐安县",330781:"兰溪市",330782:"义乌市",330783:"东阳市",330784:"永康市",330785:"其它区",330800:"衢州市",330802:"柯城区",330803:"衢江区",330822:"常山县",330824:"开化县",330825:"龙游县",330881:"江山市",330882:"其它区",330900:"舟山市",330902:"定海区",330903:"普陀区",330921:"岱山县",330922:"嵊泗县",330923:"其它区",331e3:"台州市",331002:"椒江区",331003:"黄岩区",331004:"路桥区",331021:"玉环县",331022:"三门县",331023:"天台县",331024:"仙居县",331081:"温岭市",331082:"临海市",331083:"其它区",331100:"丽水市",331102:"莲都区",331121:"青田县",331122:"缙云县",331123:"遂昌县",331124:"松阳县",331125:"云和县",331126:"庆元县",331127:"景宁畲族自治县",331181:"龙泉市",331182:"其它区",34e4:"安徽省",340100:"合肥市",340102:"瑶海区",340103:"庐阳区",340104:"蜀山区",340111:"包河区",340121:"长丰县",340122:"肥东县",340123:"肥西县",340192:"其它区",340200:"芜湖市",340202:"镜湖区",340203:"弋江区",340207:"鸠江区",340208:"三山区",340221:"芜湖县",340222:"繁昌县",340223:"南陵县",340224:"其它区",340300:"蚌埠市",340302:"龙子湖区",340303:"蚌山区",340304:"禹会区",340311:"淮上区",340321:"怀远县",340322:"五河县",340323:"固镇县",340324:"其它区",340400:"淮南市",340402:"大通区",340403:"田家庵区",340404:"谢家集区",340405:"八公山区",340406:"潘集区",340421:"凤台县",340422:"其它区",340500:"马鞍山市",340503:"花山区",340504:"雨山区",340506:"博望区",340521:"当涂县",340522:"其它区",340600:"淮北市",340602:"杜集区",340603:"相山区",340604:"烈山区",340621:"濉溪县",340622:"其它区",340700:"铜陵市",340702:"铜官山区",340703:"狮子山区",340711:"郊区",340721:"铜陵县",340722:"其它区",340800:"安庆市",340802:"迎江区",340803:"大观区",340811:"宜秀区",340822:"怀宁县",340823:"枞阳县",340824:"潜山县",340825:"太湖县",340826:"宿松县",340827:"望江县",340828:"岳西县",340881:"桐城市",340882:"其它区",341e3:"黄山市",341002:"屯溪区",341003:"黄山区",341004:"徽州区",341021:"歙县",341022:"休宁县",341023:"黟县",341024:"祁门县",341025:"其它区",341100:"滁州市",341102:"琅琊区",341103:"南谯区",341122:"来安县",341124:"全椒县",341125:"定远县",341126:"凤阳县",341181:"天长市",341182:"明光市",341183:"其它区",341200:"阜阳市",341202:"颍州区",341203:"颍东区",341204:"颍泉区",341221:"临泉县",341222:"太和县",341225:"阜南县",341226:"颍上县",341282:"界首市",341283:"其它区",341300:"宿州市",341302:"埇桥区",341321:"砀山县",341322:"萧县",341323:"灵璧县",341324:"泗县",341325:"其它区",341400:"巢湖市",341421:"庐江县",341422:"无为县",341423:"含山县",341424:"和县",341500:"六安市",341502:"金安区",341503:"裕安区",341521:"寿县",341522:"霍邱县",341523:"舒城县",341524:"金寨县",341525:"霍山县",341526:"其它区",341600:"亳州市",341602:"谯城区",341621:"涡阳县",341622:"蒙城县",341623:"利辛县",341624:"其它区",341700:"池州市",341702:"贵池区",341721:"东至县",341722:"石台县",341723:"青阳县",341724:"其它区",341800:"宣城市",341802:"宣州区",341821:"郎溪县",341822:"广德县",341823:"泾县",341824:"绩溪县",341825:"旌德县",341881:"宁国市",341882:"其它区",35e4:"福建省",350100:"福州市",350102:"鼓楼区",350103:"台江区",350104:"仓山区",350105:"马尾区",350111:"晋安区",350121:"闽侯县",350122:"连江县",350123:"罗源县",350124:"闽清县",350125:"永泰县",350128:"平潭县",350181:"福清市",350182:"长乐市",350183:"其它区",350200:"厦门市",350203:"思明区",350205:"海沧区",350206:"湖里区",350211:"集美区",350212:"同安区",350213:"翔安区",350214:"其它区",350300:"莆田市",350302:"城厢区",350303:"涵江区",350304:"荔城区",350305:"秀屿区",350322:"仙游县",350323:"其它区",350400:"三明市",350402:"梅列区",350403:"三元区",350421:"明溪县",350423:"清流县",350424:"宁化县",350425:"大田县",350426:"尤溪县",350427:"沙县",350428:"将乐县",350429:"泰宁县",350430:"建宁县",350481:"永安市",350482:"其它区",350500:"泉州市",350502:"鲤城区",350503:"丰泽区",350504:"洛江区",350505:"泉港区",350521:"惠安县",350524:"安溪县",350525:"永春县",350526:"德化县",350527:"金门县",350581:"石狮市",350582:"晋江市",350583:"南安市",350584:"其它区",350600:"漳州市",350602:"芗城区",350603:"龙文区",350622:"云霄县",350623:"漳浦县",350624:"诏安县",350625:"长泰县",350626:"东山县",350627:"南靖县",350628:"平和县",350629:"华安县",350681:"龙海市",350682:"其它区",350700:"南平市",350702:"延平区",350721:"顺昌县",350722:"浦城县",350723:"光泽县",350724:"松溪县",350725:"政和县",350781:"邵武市",350782:"武夷山市",350783:"建瓯市",350784:"建阳市",350785:"其它区",350800:"龙岩市",350802:"新罗区",350821:"长汀县",350822:"永定县",350823:"上杭县",350824:"武平县",350825:"连城县",350881:"漳平市",350882:"其它区",350900:"宁德市",350902:"蕉城区",350921:"霞浦县",350922:"古田县",350923:"屏南县",350924:"寿宁县",350925:"周宁县",350926:"柘荣县",350981:"福安市",350982:"福鼎市",350983:"其它区",36e4:"江西省",360100:"南昌市",360102:"东湖区",360103:"西湖区",360104:"青云谱区",360105:"湾里区",360111:"青山湖区",360121:"南昌县",360122:"新建县",360123:"安义县",360124:"进贤县",360128:"其它区",360200:"景德镇市",360202:"昌江区",360203:"珠山区",360222:"浮梁县",360281:"乐平市",360282:"其它区",360300:"萍乡市",360302:"安源区",360313:"湘东区",360321:"莲花县",360322:"上栗县",360323:"芦溪县",360324:"其它区",360400:"九江市",360402:"庐山区",360403:"浔阳区",360421:"九江县",360423:"武宁县",360424:"修水县",360425:"永修县",360426:"德安县",360427:"星子县",360428:"都昌县",360429:"湖口县",360430:"彭泽县",360481:"瑞昌市",360482:"其它区",360483:"共青城市",360500:"新余市",360502:"渝水区",360521:"分宜县",360522:"其它区",360600:"鹰潭市",360602:"月湖区",360622:"余江县",360681:"贵溪市",360682:"其它区",360700:"赣州市",360702:"章贡区",360721:"赣县",360722:"信丰县",360723:"大余县",360724:"上犹县",360725:"崇义县",360726:"安远县",360727:"龙南县",360728:"定南县",360729:"全南县",360730:"宁都县",360731:"于都县",360732:"兴国县",360733:"会昌县",360734:"寻乌县",360735:"石城县",360781:"瑞金市",360782:"南康市",360783:"其它区",360800:"吉安市",360802:"吉州区",360803:"青原区",360821:"吉安县",360822:"吉水县",360823:"峡江县",360824:"新干县",360825:"永丰县",360826:"泰和县",360827:"遂川县",360828:"万安县",360829:"安福县",360830:"永新县",360881:"井冈山市",360882:"其它区",360900:"宜春市",360902:"袁州区",360921:"奉新县",360922:"万载县",360923:"上高县",360924:"宜丰县",360925:"靖安县",360926:"铜鼓县",360981:"丰城市",360982:"樟树市",360983:"高安市",360984:"其它区",361e3:"抚州市",361002:"临川区",361021:"南城县",361022:"黎川县",361023:"南丰县",361024:"崇仁县",361025:"乐安县",361026:"宜黄县",361027:"金溪县",361028:"资溪县",361029:"东乡县",361030:"广昌县",361031:"其它区",361100:"上饶市",361102:"信州区",361121:"上饶县",361122:"广丰县",361123:"玉山县",361124:"铅山县",361125:"横峰县",361126:"弋阳县",361127:"余干县",361128:"鄱阳县",361129:"万年县",361130:"婺源县",361181:"德兴市",361182:"其它区",37e4:"山东省",370100:"济南市",370102:"历下区",370103:"市中区",370104:"槐荫区",370105:"天桥区",370112:"历城区",370113:"长清区",370124:"平阴县",370125:"济阳县",370126:"商河县",370181:"章丘市",370182:"其它区",370200:"青岛市",370202:"市南区",370203:"市北区",370211:"黄岛区",370212:"崂山区",370213:"李沧区",370214:"城阳区",370281:"胶州市",370282:"即墨市",370283:"平度市",370285:"莱西市",370286:"其它区",370300:"淄博市",370302:"淄川区",370303:"张店区",370304:"博山区",370305:"临淄区",370306:"周村区",370321:"桓台县",370322:"高青县",370323:"沂源县",370324:"其它区",370400:"枣庄市",370402:"市中区",370403:"薛城区",370404:"峄城区",370405:"台儿庄区",370406:"山亭区",370481:"滕州市",370482:"其它区",370500:"东营市",370502:"东营区",370503:"河口区",370521:"垦利县",370522:"利津县",370523:"广饶县",370591:"其它区",370600:"烟台市",370602:"芝罘区",370611:"福山区",370612:"牟平区",370613:"莱山区",370634:"长岛县",370681:"龙口市",370682:"莱阳市",370683:"莱州市",370684:"蓬莱市",370685:"招远市",370686:"栖霞市",370687:"海阳市",370688:"其它区",370700:"潍坊市",370702:"潍城区",370703:"寒亭区",370704:"坊子区",370705:"奎文区",370724:"临朐县",370725:"昌乐县",370781:"青州市",370782:"诸城市",370783:"寿光市",370784:"安丘市",370785:"高密市",370786:"昌邑市",370787:"其它区",370800:"济宁市",370802:"市中区",370811:"任城区",370826:"微山县",370827:"鱼台县",370828:"金乡县",370829:"嘉祥县",370830:"汶上县",370831:"泗水县",370832:"梁山县",370881:"曲阜市",370882:"兖州市",370883:"邹城市",370884:"其它区",370900:"泰安市",370902:"泰山区",370903:"岱岳区",370921:"宁阳县",370923:"东平县",370982:"新泰市",370983:"肥城市",370984:"其它区",371e3:"威海市",371002:"环翠区",371081:"文登市",371082:"荣成市",371083:"乳山市",371084:"其它区",371100:"日照市",371102:"东港区",371103:"岚山区",371121:"五莲县",371122:"莒县",371123:"其它区",371200:"莱芜市",371202:"莱城区",371203:"钢城区",371204:"其它区",371300:"临沂市",371302:"兰山区",371311:"罗庄区",371312:"河东区",371321:"沂南县",371322:"郯城县",371323:"沂水县",371324:"苍山县",371325:"费县",371326:"平邑县",371327:"莒南县",371328:"蒙阴县",371329:"临沭县",371330:"其它区",371400:"德州市",371402:"德城区",371421:"陵县",371422:"宁津县",371423:"庆云县",371424:"临邑县",371425:"齐河县",371426:"平原县",371427:"夏津县",371428:"武城县",371481:"乐陵市",371482:"禹城市",371483:"其它区",371500:"聊城市",371502:"东昌府区",371521:"阳谷县",371522:"莘县",371523:"茌平县",371524:"东阿县",371525:"冠县",371526:"高唐县",371581:"临清市",371582:"其它区",371600:"滨州市",371602:"滨城区",371621:"惠民县",371622:"阳信县",371623:"无棣县",371624:"沾化县",371625:"博兴县",371626:"邹平县",371627:"其它区",371700:"菏泽市",371702:"牡丹区",371721:"曹县",371722:"单县",371723:"成武县",371724:"巨野县",371725:"郓城县",371726:"鄄城县",371727:"定陶县",371728:"东明县",371729:"其它区",41e4:"河南省",410100:"郑州市",410102:"中原区",410103:"二七区",410104:"管城回族区",410105:"金水区",410106:"上街区",410108:"惠济区",410122:"中牟县",410181:"巩义市",410182:"荥阳市",410183:"新密市",410184:"新郑市",410185:"登封市",410188:"其它区",410200:"开封市",410202:"龙亭区",410203:"顺河回族区",410204:"鼓楼区",410205:"禹王台区",410211:"金明区",410221:"杞县",410222:"通许县",410223:"尉氏县",410224:"开封县",410225:"兰考县",410226:"其它区",410300:"洛阳市",410302:"老城区",410303:"西工区",410304:"瀍河回族区",410305:"涧西区",410306:"吉利区",410307:"洛龙区",410322:"孟津县",410323:"新安县",410324:"栾川县",410325:"嵩县",410326:"汝阳县",410327:"宜阳县",410328:"洛宁县",410329:"伊川县",410381:"偃师市",410400:"平顶山市",410402:"新华区",410403:"卫东区",410404:"石龙区",410411:"湛河区",410421:"宝丰县",410422:"叶县",410423:"鲁山县",410425:"郏县",410481:"舞钢市",410482:"汝州市",410483:"其它区",410500:"安阳市",410502:"文峰区",410503:"北关区",410505:"殷都区",410506:"龙安区",410522:"安阳县",410523:"汤阴县",410526:"滑县",410527:"内黄县",410581:"林州市",410582:"其它区",410600:"鹤壁市",410602:"鹤山区",410603:"山城区",410611:"淇滨区",410621:"浚县",410622:"淇县",410623:"其它区",410700:"新乡市",410702:"红旗区",410703:"卫滨区",410704:"凤泉区",410711:"牧野区",410721:"新乡县",410724:"获嘉县",410725:"原阳县",410726:"延津县",410727:"封丘县",410728:"长垣县",410781:"卫辉市",410782:"辉县市",410783:"其它区",410800:"焦作市",410802:"解放区",410803:"中站区",410804:"马村区",410811:"山阳区",410821:"修武县",410822:"博爱县",410823:"武陟县",410825:"温县",410881:"济源市",410882:"沁阳市",410883:"孟州市",410884:"其它区",410900:"濮阳市",410902:"华龙区",410922:"清丰县",410923:"南乐县",410926:"范县",410927:"台前县",410928:"濮阳县",410929:"其它区",411e3:"许昌市",411002:"魏都区",411023:"许昌县",411024:"鄢陵县",411025:"襄城县",411081:"禹州市",411082:"长葛市",411083:"其它区",411100:"漯河市",411102:"源汇区",411103:"郾城区",411104:"召陵区",411121:"舞阳县",411122:"临颍县",411123:"其它区",411200:"三门峡市",411202:"湖滨区",411221:"渑池县",411222:"陕县",411224:"卢氏县",411281:"义马市",411282:"灵宝市",411283:"其它区",411300:"南阳市",411302:"宛城区",411303:"卧龙区",411321:"南召县",411322:"方城县",411323:"西峡县",411324:"镇平县",411325:"内乡县",411326:"淅川县",411327:"社旗县",411328:"唐河县",411329:"新野县",411330:"桐柏县",411381:"邓州市",411382:"其它区",411400:"商丘市",411402:"梁园区",411403:"睢阳区",411421:"民权县",411422:"睢县",411423:"宁陵县",411424:"柘城县",411425:"虞城县",411426:"夏邑县",411481:"永城市",411482:"其它区",411500:"信阳市",411502:"浉河区",411503:"平桥区",411521:"罗山县",411522:"光山县",411523:"新县",411524:"商城县",411525:"固始县",411526:"潢川县",411527:"淮滨县",411528:"息县",411529:"其它区",411600:"周口市",411602:"川汇区",411621:"扶沟县",411622:"西华县",411623:"商水县",411624:"沈丘县",411625:"郸城县",411626:"淮阳县",411627:"太康县",411628:"鹿邑县",411681:"项城市",411682:"其它区",411700:"驻马店市",411702:"驿城区",411721:"西平县",411722:"上蔡县",411723:"平舆县",411724:"正阳县",411725:"确山县",411726:"泌阳县",411727:"汝南县",411728:"遂平县",411729:"新蔡县",411730:"其它区",42e4:"湖北省",420100:"武汉市",420102:"江岸区",420103:"江汉区",420104:"硚口区",420105:"汉阳区",420106:"武昌区",420107:"青山区",420111:"洪山区",420112:"东西湖区",420113:"汉南区",420114:"蔡甸区",420115:"江夏区",420116:"黄陂区",420117:"新洲区",420118:"其它区",420200:"黄石市",420202:"黄石港区",420203:"西塞山区",420204:"下陆区",420205:"铁山区",420222:"阳新县",420281:"大冶市",420282:"其它区",420300:"十堰市",420302:"茅箭区",420303:"张湾区",420321:"郧县",420322:"郧西县",420323:"竹山县",420324:"竹溪县",420325:"房县",420381:"丹江口市",420383:"其它区",420500:"宜昌市",420502:"西陵区",420503:"伍家岗区",420504:"点军区",420505:"猇亭区",420506:"夷陵区",420525:"远安县",420526:"兴山县",420527:"秭归县",420528:"长阳土家族自治县",420529:"五峰土家族自治县",420581:"宜都市",420582:"当阳市",420583:"枝江市",420584:"其它区",420600:"襄阳市",420602:"襄城区",420606:"樊城区",420607:"襄州区",420624:"南漳县",420625:"谷城县",420626:"保康县",420682:"老河口市",420683:"枣阳市",420684:"宜城市",420685:"其它区",420700:"鄂州市",420702:"梁子湖区",420703:"华容区",420704:"鄂城区",420705:"其它区",420800:"荆门市",420802:"东宝区",420804:"掇刀区",420821:"京山县",420822:"沙洋县",420881:"钟祥市",420882:"其它区",420900:"孝感市",420902:"孝南区",420921:"孝昌县",420922:"大悟县",420923:"云梦县",420981:"应城市",420982:"安陆市",420984:"汉川市",420985:"其它区",421e3:"荆州市",421002:"沙市区",421003:"荆州区",421022:"公安县",421023:"监利县",421024:"江陵县",421081:"石首市",421083:"洪湖市",421087:"松滋市",421088:"其它区",421100:"黄冈市",421102:"黄州区",421121:"团风县",421122:"红安县",421123:"罗田县",421124:"英山县",421125:"浠水县",421126:"蕲春县",421127:"黄梅县",421181:"麻城市",421182:"武穴市",421183:"其它区",421200:"咸宁市",421202:"咸安区",421221:"嘉鱼县",421222:"通城县",421223:"崇阳县",421224:"通山县",421281:"赤壁市",421283:"其它区",421300:"随州市",421302:"曾都区",421321:"随县",421381:"广水市",421382:"其它区",422800:"恩施土家族苗族自治州",422801:"恩施市",422802:"利川市",422822:"建始县",422823:"巴东县",422825:"宣恩县",422826:"咸丰县",422827:"来凤县",422828:"鹤峰县",422829:"其它区",429004:"仙桃市",429005:"潜江市",429006:"天门市",429021:"神农架林区",43e4:"湖南省",430100:"长沙市",430102:"芙蓉区",430103:"天心区",430104:"岳麓区",430105:"开福区",430111:"雨花区",430121:"长沙县",430122:"望城区",430124:"宁乡县",430181:"浏阳市",430182:"其它区",430200:"株洲市",430202:"荷塘区",430203:"芦淞区",430204:"石峰区",430211:"天元区",430221:"株洲县",430223:"攸县",430224:"茶陵县",430225:"炎陵县",430281:"醴陵市",430282:"其它区",430300:"湘潭市",430302:"雨湖区",430304:"岳塘区",430321:"湘潭县",430381:"湘乡市",430382:"韶山市",430383:"其它区",430400:"衡阳市",430405:"珠晖区",430406:"雁峰区",430407:"石鼓区",430408:"蒸湘区",430412:"南岳区",430421:"衡阳县",430422:"衡南县",430423:"衡山县",430424:"衡东县",430426:"祁东县",430481:"耒阳市",430482:"常宁市",430483:"其它区",430500:"邵阳市",430502:"双清区",430503:"大祥区",430511:"北塔区",430521:"邵东县",430522:"新邵县",430523:"邵阳县",430524:"隆回县",430525:"洞口县",430527:"绥宁县",430528:"新宁县",430529:"城步苗族自治县",430581:"武冈市",430582:"其它区",430600:"岳阳市",430602:"岳阳楼区",430603:"云溪区",430611:"君山区",430621:"岳阳县",430623:"华容县",430624:"湘阴县",430626:"平江县",430681:"汨罗市",430682:"临湘市",430683:"其它区",430700:"常德市",430702:"武陵区",430703:"鼎城区",430721:"安乡县",430722:"汉寿县",430723:"澧县",430724:"临澧县",430725:"桃源县",430726:"石门县",430781:"津市市",430782:"其它区",430800:"张家界市",430802:"永定区",430811:"武陵源区",430821:"慈利县",430822:"桑植县",430823:"其它区",430900:"益阳市",430902:"资阳区",430903:"赫山区",430921:"南县",430922:"桃江县",430923:"安化县",430981:"沅江市",430982:"其它区",431e3:"郴州市",431002:"北湖区",431003:"苏仙区",431021:"桂阳县",431022:"宜章县",431023:"永兴县",431024:"嘉禾县",431025:"临武县",431026:"汝城县",431027:"桂东县",431028:"安仁县",431081:"资兴市",431082:"其它区",431100:"永州市",431102:"零陵区",431103:"冷水滩区",431121:"祁阳县",431122:"东安县",431123:"双牌县",431124:"道县",431125:"江永县",431126:"宁远县",431127:"蓝山县",431128:"新田县",431129:"江华瑶族自治县",431130:"其它区",431200:"怀化市",431202:"鹤城区",431221:"中方县",431222:"沅陵县",431223:"辰溪县",431224:"溆浦县",431225:"会同县",431226:"麻阳苗族自治县",431227:"新晃侗族自治县",431228:"芷江侗族自治县",431229:"靖州苗族侗族自治县",431230:"通道侗族自治县",431281:"洪江市",431282:"其它区",431300:"娄底市",431302:"娄星区",431321:"双峰县",431322:"新化县",431381:"冷水江市",431382:"涟源市",431383:"其它区",433100:"湘西土家族苗族自治州",433101:"吉首市",433122:"泸溪县",433123:"凤凰县",433124:"花垣县",433125:"保靖县",433126:"古丈县",433127:"永顺县",433130:"龙山县",433131:"其它区",44e4:"广东省",440100:"广州市",440103:"荔湾区",440104:"越秀区",440105:"海珠区",440106:"天河区",440111:"白云区",440112:"黄埔区",440113:"番禺区",440114:"花都区",440115:"南沙区",440116:"萝岗区",440183:"增城市",440184:"从化市",440189:"其它区",440200:"韶关市",440203:"武江区",440204:"浈江区",440205:"曲江区",440222:"始兴县",440224:"仁化县",440229:"翁源县",440232:"乳源瑶族自治县",440233:"新丰县",440281:"乐昌市",440282:"南雄市",440283:"其它区",440300:"深圳市",440303:"罗湖区",440304:"福田区",440305:"南山区",440306:"宝安区",440307:"龙岗区",440308:"盐田区",440309:"其它区",440320:"光明新区",440321:"坪山新区",440322:"大鹏新区",440323:"龙华新区",440400:"珠海市",440402:"香洲区",440403:"斗门区",440404:"金湾区",440488:"其它区",440500:"汕头市",440507:"龙湖区",440511:"金平区",440512:"濠江区",440513:"潮阳区",440514:"潮南区",440515:"澄海区",440523:"南澳县",440524:"其它区",440600:"佛山市",440604:"禅城区",440605:"南海区",440606:"顺德区",440607:"三水区",440608:"高明区",440609:"其它区",440700:"江门市",440703:"蓬江区",440704:"江海区",440705:"新会区",440781:"台山市",440783:"开平市",440784:"鹤山市",440785:"恩平市",440786:"其它区",440800:"湛江市",440802:"赤坎区",440803:"霞山区",440804:"坡头区",440811:"麻章区",440823:"遂溪县",440825:"徐闻县",440881:"廉江市",440882:"雷州市",440883:"吴川市",440884:"其它区",440900:"茂名市",440902:"茂南区",440903:"茂港区",440923:"电白县",440981:"高州市",440982:"化州市",440983:"信宜市",440984:"其它区",441200:"肇庆市",441202:"端州区",441203:"鼎湖区",441223:"广宁县",441224:"怀集县",441225:"封开县",441226:"德庆县",441283:"高要市",441284:"四会市",441285:"其它区",441300:"惠州市",441302:"惠城区",441303:"惠阳区",441322:"博罗县",441323:"惠东县",441324:"龙门县",441325:"其它区",441400:"梅州市",441402:"梅江区",441421:"梅县",441422:"大埔县",441423:"丰顺县",441424:"五华县",441426:"平远县",441427:"蕉岭县",441481:"兴宁市",441482:"其它区",441500:"汕尾市",441502:"城区",441521:"海丰县",441523:"陆河县",441581:"陆丰市",441582:"其它区",441600:"河源市",441602:"源城区",441621:"紫金县",441622:"龙川县",441623:"连平县",441624:"和平县",441625:"东源县",441626:"其它区",441700:"阳江市",441702:"江城区",441721:"阳西县",441723:"阳东县",441781:"阳春市",441782:"其它区",441800:"清远市",441802:"清城区",441821:"佛冈县",441823:"阳山县",441825:"连山壮族瑶族自治县",441826:"连南瑶族自治县",441827:"清新区",441881:"英德市",441882:"连州市",441883:"其它区",441900:"东莞市",442e3:"中山市",442101:"东沙群岛",445100:"潮州市",445102:"湘桥区",445121:"潮安区",445122:"饶平县",445186:"其它区",445200:"揭阳市",445202:"榕城区",445221:"揭东区",445222:"揭西县",445224:"惠来县",445281:"普宁市",445285:"其它区",445300:"云浮市",445302:"云城区",445321:"新兴县",445322:"郁南县",445323:"云安县",445381:"罗定市",445382:"其它区",45e4:"广西壮族自治区",450100:"南宁市",450102:"兴宁区",450103:"青秀区",450105:"江南区",450107:"西乡塘区",450108:"良庆区",450109:"邕宁区",450122:"武鸣县",450123:"隆安县",450124:"马山县",450125:"上林县",450126:"宾阳县",450127:"横县",450128:"其它区",450200:"柳州市",450202:"城中区",450203:"鱼峰区",450204:"柳南区",450205:"柳北区",450221:"柳江县",450222:"柳城县",450223:"鹿寨县",450224:"融安县",450225:"融水苗族自治县",450226:"三江侗族自治县",450227:"其它区",450300:"桂林市",450302:"秀峰区",450303:"叠彩区",450304:"象山区",450305:"七星区",450311:"雁山区",450321:"阳朔县",450322:"临桂区",450323:"灵川县",450324:"全州县",450325:"兴安县",450326:"永福县",450327:"灌阳县",450328:"龙胜各族自治县",450329:"资源县",450330:"平乐县",450331:"荔浦县",450332:"恭城瑶族自治县",450333:"其它区",450400:"梧州市",450403:"万秀区",450405:"长洲区",450406:"龙圩区",450421:"苍梧县",450422:"藤县",450423:"蒙山县",450481:"岑溪市",450482:"其它区",450500:"北海市",450502:"海城区",450503:"银海区",450512:"铁山港区",450521:"合浦县",450522:"其它区",450600:"防城港市",450602:"港口区",450603:"防城区",450621:"上思县",450681:"东兴市",450682:"其它区",450700:"钦州市",450702:"钦南区",450703:"钦北区",450721:"灵山县",450722:"浦北县",450723:"其它区",450800:"贵港市",450802:"港北区",450803:"港南区",450804:"覃塘区",450821:"平南县",450881:"桂平市",450882:"其它区",450900:"玉林市",450902:"玉州区",450903:"福绵区",450921:"容县",450922:"陆川县",450923:"博白县",450924:"兴业县",450981:"北流市",450982:"其它区",451e3:"百色市",451002:"右江区",451021:"田阳县",451022:"田东县",451023:"平果县",451024:"德保县",451025:"靖西县",451026:"那坡县",451027:"凌云县",451028:"乐业县",451029:"田林县",451030:"西林县",451031:"隆林各族自治县",451032:"其它区",451100:"贺州市",451102:"八步区",451119:"平桂管理区",451121:"昭平县",451122:"钟山县",451123:"富川瑶族自治县",451124:"其它区",451200:"河池市",451202:"金城江区",451221:"南丹县",451222:"天峨县",451223:"凤山县",451224:"东兰县",451225:"罗城仫佬族自治县",451226:"环江毛南族自治县",451227:"巴马瑶族自治县",451228:"都安瑶族自治县",451229:"大化瑶族自治县",451281:"宜州市",451282:"其它区",451300:"来宾市",451302:"兴宾区",451321:"忻城县",451322:"象州县",451323:"武宣县",451324:"金秀瑶族自治县",451381:"合山市",451382:"其它区",451400:"崇左市",451402:"江州区",451421:"扶绥县",451422:"宁明县",451423:"龙州县",451424:"大新县",451425:"天等县",451481:"凭祥市",451482:"其它区",46e4:"海南省",460100:"海口市",460105:"秀英区",460106:"龙华区",460107:"琼山区",460108:"美兰区",460109:"其它区",460200:"三亚市",460300:"三沙市",460321:"西沙群岛",460322:"南沙群岛",460323:"中沙群岛的岛礁及其海域",469001:"五指山市",469002:"琼海市",469003:"儋州市",469005:"文昌市",469006:"万宁市",469007:"东方市",469025:"定安县",469026:"屯昌县",469027:"澄迈县",469028:"临高县",469030:"白沙黎族自治县",469031:"昌江黎族自治县",469033:"乐东黎族自治县",469034:"陵水黎族自治县",469035:"保亭黎族苗族自治县",469036:"琼中黎族苗族自治县",471005:"其它区",5e5:"重庆",500100:"重庆市",500101:"万州区",500102:"涪陵区",500103:"渝中区",500104:"大渡口区",500105:"江北区",500106:"沙坪坝区",500107:"九龙坡区",500108:"南岸区",500109:"北碚区",500110:"万盛区",500111:"双桥区",500112:"渝北区",500113:"巴南区",500114:"黔江区",500115:"长寿区",500222:"綦江区",500223:"潼南县",500224:"铜梁县",500225:"大足区",500226:"荣昌县",500227:"璧山县",500228:"梁平县",500229:"城口县",500230:"丰都县",500231:"垫江县",500232:"武隆县",500233:"忠县",500234:"开县",500235:"云阳县",500236:"奉节县",500237:"巫山县",500238:"巫溪县",500240:"石柱土家族自治县",500241:"秀山土家族苗族自治县",500242:"酉阳土家族苗族自治县",500243:"彭水苗族土家族自治县",500381:"江津区",500382:"合川区",500383:"永川区",500384:"南川区",500385:"其它区",51e4:"四川省",510100:"成都市",510104:"锦江区",510105:"青羊区",510106:"金牛区",510107:"武侯区",510108:"成华区",510112:"龙泉驿区",510113:"青白江区",510114:"新都区",510115:"温江区",510121:"金堂县",510122:"双流县",510124:"郫县",510129:"大邑县",510131:"蒲江县",510132:"新津县",510181:"都江堰市",510182:"彭州市",510183:"邛崃市",510184:"崇州市",510185:"其它区",510300:"自贡市",510302:"自流井区",510303:"贡井区",510304:"大安区",510311:"沿滩区",510321:"荣县",510322:"富顺县",510323:"其它区",510400:"攀枝花市",510402:"东区",510403:"西区",510411:"仁和区",510421:"米易县",510422:"盐边县",510423:"其它区",510500:"泸州市",510502:"江阳区",510503:"纳溪区",510504:"龙马潭区",510521:"泸县",510522:"合江县",510524:"叙永县",510525:"古蔺县",510526:"其它区",510600:"德阳市",510603:"旌阳区",510623:"中江县",510626:"罗江县",510681:"广汉市",510682:"什邡市",510683:"绵竹市",510684:"其它区",510700:"绵阳市",510703:"涪城区",510704:"游仙区",510722:"三台县",510723:"盐亭县",510724:"安县",510725:"梓潼县",510726:"北川羌族自治县",510727:"平武县",510781:"江油市",510782:"其它区",510800:"广元市",510802:"利州区",510811:"昭化区",510812:"朝天区",510821:"旺苍县",510822:"青川县",510823:"剑阁县",510824:"苍溪县",510825:"其它区",510900:"遂宁市",510903:"船山区",510904:"安居区",510921:"蓬溪县",510922:"射洪县",510923:"大英县",510924:"其它区",511e3:"内江市",511002:"市中区",511011:"东兴区",511024:"威远县",511025:"资中县",511028:"隆昌县",511029:"其它区",511100:"乐山市",511102:"市中区",511111:"沙湾区",511112:"五通桥区",511113:"金口河区",511123:"犍为县",511124:"井研县",511126:"夹江县",511129:"沐川县",511132:"峨边彝族自治县",511133:"马边彝族自治县",511181:"峨眉山市",511182:"其它区",511300:"南充市",511302:"顺庆区",511303:"高坪区",511304:"嘉陵区",511321:"南部县",511322:"营山县",511323:"蓬安县",511324:"仪陇县",511325:"西充县",511381:"阆中市",511382:"其它区",511400:"眉山市",511402:"东坡区",511421:"仁寿县",511422:"彭山县",511423:"洪雅县",511424:"丹棱县",511425:"青神县",511426:"其它区",511500:"宜宾市",511502:"翠屏区",511521:"宜宾县",511522:"南溪区",511523:"江安县",511524:"长宁县",511525:"高县",511526:"珙县",511527:"筠连县",511528:"兴文县",511529:"屏山县",511530:"其它区",511600:"广安市",511602:"广安区",511603:"前锋区",511621:"岳池县",511622:"武胜县",511623:"邻水县",511681:"华蓥市",511683:"其它区",511700:"达州市",511702:"通川区",511721:"达川区",511722:"宣汉县",511723:"开江县",511724:"大竹县",511725:"渠县",511781:"万源市",511782:"其它区",511800:"雅安市",511802:"雨城区",511821:"名山区",511822:"荥经县",511823:"汉源县",511824:"石棉县",511825:"天全县",511826:"芦山县",511827:"宝兴县",511828:"其它区",511900:"巴中市",511902:"巴州区",511903:"恩阳区",511921:"通江县",511922:"南江县",511923:"平昌县",511924:"其它区",512e3:"资阳市",512002:"雁江区",512021:"安岳县",512022:"乐至县",512081:"简阳市",512082:"其它区",513200:"阿坝藏族羌族自治州",513221:"汶川县",513222:"理县",513223:"茂县",513224:"松潘县",513225:"九寨沟县",513226:"金川县",513227:"小金县",513228:"黑水县",513229:"马尔康县",513230:"壤塘县",513231:"阿坝县",513232:"若尔盖县",513233:"红原县",513234:"其它区",513300:"甘孜藏族自治州",513321:"康定县",513322:"泸定县",513323:"丹巴县",513324:"九龙县",513325:"雅江县",513326:"道孚县",513327:"炉霍县",513328:"甘孜县",513329:"新龙县",513330:"德格县",513331:"白玉县",513332:"石渠县",513333:"色达县",513334:"理塘县",513335:"巴塘县",513336:"乡城县",513337:"稻城县",513338:"得荣县",513339:"其它区",513400:"凉山彝族自治州",513401:"西昌市",513422:"木里藏族自治县",513423:"盐源县",513424:"德昌县",513425:"会理县",513426:"会东县",513427:"宁南县",513428:"普格县",513429:"布拖县",513430:"金阳县",513431:"昭觉县",513432:"喜德县",513433:"冕宁县",513434:"越西县",513435:"甘洛县",513436:"美姑县",513437:"雷波县",513438:"其它区",52e4:"贵州省",520100:"贵阳市",520102:"南明区",520103:"云岩区",520111:"花溪区",520112:"乌当区",520113:"白云区",520121:"开阳县",520122:"息烽县",520123:"修文县",520151:"观山湖区",520181:"清镇市",520182:"其它区",520200:"六盘水市",520201:"钟山区",520203:"六枝特区",520221:"水城县",520222:"盘县",520223:"其它区",520300:"遵义市",520302:"红花岗区",520303:"汇川区",520321:"遵义县",520322:"桐梓县",520323:"绥阳县",520324:"正安县",520325:"道真仡佬族苗族自治县",520326:"务川仡佬族苗族自治县",520327:"凤冈县",520328:"湄潭县",520329:"余庆县",520330:"习水县",520381:"赤水市",520382:"仁怀市",520383:"其它区",520400:"安顺市",520402:"西秀区",520421:"平坝县",520422:"普定县",520423:"镇宁布依族苗族自治县",520424:"关岭布依族苗族自治县",520425:"紫云苗族布依族自治县",520426:"其它区",522200:"铜仁市",522201:"碧江区",522222:"江口县",522223:"玉屏侗族自治县",522224:"石阡县",522225:"思南县",522226:"印江土家族苗族自治县",522227:"德江县",522228:"沿河土家族自治县",522229:"松桃苗族自治县",522230:"万山区",522231:"其它区",522300:"黔西南布依族苗族自治州",522301:"兴义市",522322:"兴仁县",522323:"普安县",522324:"晴隆县",522325:"贞丰县",522326:"望谟县",522327:"册亨县",522328:"安龙县",522329:"其它区",522400:"毕节市",522401:"七星关区",522422:"大方县",522423:"黔西县",522424:"金沙县",522425:"织金县",522426:"纳雍县",522427:"威宁彝族回族苗族自治县",522428:"赫章县",522429:"其它区",522600:"黔东南苗族侗族自治州",522601:"凯里市",522622:"黄平县",522623:"施秉县",522624:"三穗县",522625:"镇远县",522626:"岑巩县",522627:"天柱县",522628:"锦屏县",522629:"剑河县",522630:"台江县",522631:"黎平县",522632:"榕江县",522633:"从江县",522634:"雷山县",522635:"麻江县",522636:"丹寨县",522637:"其它区",522700:"黔南布依族苗族自治州",522701:"都匀市",522702:"福泉市",522722:"荔波县",522723:"贵定县",522725:"瓮安县",522726:"独山县",522727:"平塘县",522728:"罗甸县",522729:"长顺县",522730:"龙里县",522731:"惠水县",522732:"三都水族自治县",522733:"其它区",53e4:"云南省",530100:"昆明市",530102:"五华区",530103:"盘龙区",530111:"官渡区",530112:"西山区",530113:"东川区",530121:"呈贡区",530122:"晋宁县",530124:"富民县",530125:"宜良县",530126:"石林彝族自治县",530127:"嵩明县",530128:"禄劝彝族苗族自治县",530129:"寻甸回族彝族自治县",530181:"安宁市",530182:"其它区",530300:"曲靖市",530302:"麒麟区",530321:"马龙县",530322:"陆良县",530323:"师宗县",530324:"罗平县",530325:"富源县",530326:"会泽县",530328:"沾益县",530381:"宣威市",530382:"其它区",530400:"玉溪市",530402:"红塔区",530421:"江川县",530422:"澄江县",530423:"通海县",530424:"华宁县",530425:"易门县",530426:"峨山彝族自治县",530427:"新平彝族傣族自治县",530428:"元江哈尼族彝族傣族自治县",530429:"其它区",530500:"保山市",530502:"隆阳区",530521:"施甸县",530522:"腾冲县",530523:"龙陵县",530524:"昌宁县",530525:"其它区",530600:"昭通市",530602:"昭阳区",530621:"鲁甸县",530622:"巧家县",530623:"盐津县",530624:"大关县",530625:"永善县",530626:"绥江县",530627:"镇雄县",530628:"彝良县",530629:"威信县",530630:"水富县",530631:"其它区",530700:"丽江市",530702:"古城区",530721:"玉龙纳西族自治县",530722:"永胜县",530723:"华坪县",530724:"宁蒗彝族自治县",530725:"其它区",530800:"普洱市",530802:"思茅区",530821:"宁洱哈尼族彝族自治县",530822:"墨江哈尼族自治县",530823:"景东彝族自治县",530824:"景谷傣族彝族自治县",530825:"镇沅彝族哈尼族拉祜族自治县",530826:"江城哈尼族彝族自治县",530827:"孟连傣族拉祜族佤族自治县",530828:"澜沧拉祜族自治县",530829:"西盟佤族自治县",530830:"其它区",530900:"临沧市",530902:"临翔区",530921:"凤庆县",530922:"云县",530923:"永德县",530924:"镇康县",530925:"双江拉祜族佤族布朗族傣族自治县",530926:"耿马傣族佤族自治县",530927:"沧源佤族自治县",530928:"其它区",532300:"楚雄彝族自治州",532301:"楚雄市",532322:"双柏县",532323:"牟定县",532324:"南华县",532325:"姚安县",532326:"大姚县",532327:"永仁县",532328:"元谋县",532329:"武定县",532331:"禄丰县",532332:"其它区",532500:"红河哈尼族彝族自治州",532501:"个旧市",532502:"开远市",532522:"蒙自市",532523:"屏边苗族自治县",532524:"建水县",532525:"石屏县",532526:"弥勒市",532527:"泸西县",532528:"元阳县",532529:"红河县",532530:"金平苗族瑶族傣族自治县",532531:"绿春县",532532:"河口瑶族自治县",532533:"其它区",532600:"文山壮族苗族自治州",532621:"文山市",532622:"砚山县",532623:"西畴县",532624:"麻栗坡县",532625:"马关县",532626:"丘北县",532627:"广南县",532628:"富宁县",532629:"其它区",532800:"西双版纳傣族自治州",532801:"景洪市",532822:"勐海县",532823:"勐腊县",532824:"其它区",532900:"大理白族自治州",532901:"大理市",532922:"漾濞彝族自治县",532923:"祥云县",532924:"宾川县",532925:"弥渡县",532926:"南涧彝族自治县",532927:"巍山彝族回族自治县",532928:"永平县",532929:"云龙县",532930:"洱源县",532931:"剑川县",532932:"鹤庆县",532933:"其它区",533100:"德宏傣族景颇族自治州",533102:"瑞丽市",533103:"芒市",533122:"梁河县",533123:"盈江县",533124:"陇川县",533125:"其它区",533300:"怒江傈僳族自治州",533321:"泸水县",533323:"福贡县",533324:"贡山独龙族怒族自治县",533325:"兰坪白族普米族自治县",533326:"其它区",533400:"迪庆藏族自治州",533421:"香格里拉县",533422:"德钦县",533423:"维西傈僳族自治县",533424:"其它区",54e4:"西藏自治区",540100:"拉萨市",540102:"城关区",540121:"林周县",540122:"当雄县",540123:"尼木县",540124:"曲水县",540125:"堆龙德庆县",540126:"达孜县",540127:"墨竹工卡县",540128:"其它区",542100:"昌都地区",542121:"昌都县",542122:"江达县",542123:"贡觉县",542124:"类乌齐县",542125:"丁青县",542126:"察雅县",542127:"八宿县",542128:"左贡县",542129:"芒康县",542132:"洛隆县",542133:"边坝县",542134:"其它区",542200:"山南地区",542221:"乃东县",542222:"扎囊县",542223:"贡嘎县",542224:"桑日县",542225:"琼结县",542226:"曲松县",542227:"措美县",542228:"洛扎县",542229:"加查县",542231:"隆子县",542232:"错那县",542233:"浪卡子县",542234:"其它区",542300:"日喀则地区",542301:"日喀则市",542322:"南木林县",542323:"江孜县",542324:"定日县",542325:"萨迦县",542326:"拉孜县",542327:"昂仁县",542328:"谢通门县",542329:"白朗县",542330:"仁布县",542331:"康马县",542332:"定结县",542333:"仲巴县",542334:"亚东县",542335:"吉隆县",542336:"聂拉木县",542337:"萨嘎县",542338:"岗巴县",542339:"其它区",542400:"那曲地区",542421:"那曲县",542422:"嘉黎县",542423:"比如县",542424:"聂荣县",542425:"安多县",542426:"申扎县",542427:"索县",542428:"班戈县",542429:"巴青县",542430:"尼玛县",542431:"其它区",542432:"双湖县",542500:"阿里地区",542521:"普兰县",542522:"札达县",542523:"噶尔县",542524:"日土县",542525:"革吉县",542526:"改则县",542527:"措勤县",542528:"其它区",542600:"林芝地区",542621:"林芝县",542622:"工布江达县",542623:"米林县",542624:"墨脱县",542625:"波密县",542626:"察隅县",542627:"朗县",542628:"其它区",61e4:"陕西省",610100:"西安市",610102:"新城区",610103:"碑林区",610104:"莲湖区",610111:"灞桥区",610112:"未央区",610113:"雁塔区",610114:"阎良区",610115:"临潼区",610116:"长安区",610122:"蓝田县",610124:"周至县",610125:"户县",610126:"高陵县",610127:"其它区",610200:"铜川市",610202:"王益区",610203:"印台区",610204:"耀州区",610222:"宜君县",610223:"其它区",610300:"宝鸡市",610302:"渭滨区",610303:"金台区",610304:"陈仓区",610322:"凤翔县",610323:"岐山县",610324:"扶风县",610326:"眉县",610327:"陇县",610328:"千阳县",610329:"麟游县",610330:"凤县",610331:"太白县",610332:"其它区",610400:"咸阳市",610402:"秦都区",610403:"杨陵区",610404:"渭城区",610422:"三原县",610423:"泾阳县",610424:"乾县",610425:"礼泉县",610426:"永寿县",610427:"彬县",610428:"长武县",610429:"旬邑县",610430:"淳化县",610431:"武功县",610481:"兴平市",610482:"其它区",610500:"渭南市",610502:"临渭区",610521:"华县",610522:"潼关县",610523:"大荔县",610524:"合阳县",610525:"澄城县",610526:"蒲城县",610527:"白水县",610528:"富平县",610581:"韩城市",610582:"华阴市",610583:"其它区",610600:"延安市",610602:"宝塔区",610621:"延长县",610622:"延川县",610623:"子长县",610624:"安塞县",610625:"志丹县",610626:"吴起县",610627:"甘泉县",610628:"富县",610629:"洛川县",610630:"宜川县",610631:"黄龙县",610632:"黄陵县",610633:"其它区",610700:"汉中市",610702:"汉台区",610721:"南郑县",610722:"城固县",610723:"洋县",610724:"西乡县",610725:"勉县",610726:"宁强县",610727:"略阳县",610728:"镇巴县",610729:"留坝县",610730:"佛坪县",610731:"其它区",610800:"榆林市",610802:"榆阳区",610821:"神木县",610822:"府谷县",610823:"横山县",610824:"靖边县",610825:"定边县",610826:"绥德县",610827:"米脂县",610828:"佳县",610829:"吴堡县",610830:"清涧县",610831:"子洲县",610832:"其它区",610900:"安康市",610902:"汉滨区",610921:"汉阴县",610922:"石泉县",610923:"宁陕县",610924:"紫阳县",610925:"岚皋县",610926:"平利县",610927:"镇坪县",610928:"旬阳县",610929:"白河县",610930:"其它区",611e3:"商洛市",611002:"商州区",611021:"洛南县",611022:"丹凤县",611023:"商南县",611024:"山阳县",611025:"镇安县",611026:"柞水县",611027:"其它区",62e4:"甘肃省",620100:"兰州市",620102:"城关区",620103:"七里河区",620104:"西固区",620105:"安宁区",620111:"红古区",620121:"永登县",620122:"皋兰县",620123:"榆中县",620124:"其它区",620200:"嘉峪关市",620300:"金昌市",620302:"金川区",620321:"永昌县",620322:"其它区",620400:"白银市",620402:"白银区",620403:"平川区",620421:"靖远县",620422:"会宁县",620423:"景泰县",620424:"其它区",620500:"天水市",620502:"秦州区",620503:"麦积区",620521:"清水县",620522:"秦安县",620523:"甘谷县",620524:"武山县",620525:"张家川回族自治县",620526:"其它区",620600:"武威市",620602:"凉州区",620621:"民勤县",620622:"古浪县",620623:"天祝藏族自治县",620624:"其它区",620700:"张掖市",620702:"甘州区",620721:"肃南裕固族自治县",620722:"民乐县",620723:"临泽县",620724:"高台县",620725:"山丹县",620726:"其它区",620800:"平凉市",620802:"崆峒区",620821:"泾川县",620822:"灵台县",620823:"崇信县",620824:"华亭县",620825:"庄浪县",620826:"静宁县",620827:"其它区",620900:"酒泉市",620902:"肃州区",620921:"金塔县",620922:"瓜州县",620923:"肃北蒙古族自治县",620924:"阿克塞哈萨克族自治县",620981:"玉门市",620982:"敦煌市",620983:"其它区",621e3:"庆阳市",621002:"西峰区",621021:"庆城县",621022:"环县",621023:"华池县",621024:"合水县",621025:"正宁县",621026:"宁县",621027:"镇原县",621028:"其它区",621100:"定西市",621102:"安定区",621121:"通渭县",621122:"陇西县",621123:"渭源县",621124:"临洮县",621125:"漳县",621126:"岷县",621127:"其它区",621200:"陇南市",621202:"武都区",621221:"成县",621222:"文县",621223:"宕昌县",621224:"康县",621225:"西和县",621226:"礼县",621227:"徽县",621228:"两当县",621229:"其它区",622900:"临夏回族自治州",622901:"临夏市",622921:"临夏县",622922:"康乐县",622923:"永靖县",622924:"广河县",622925:"和政县",622926:"东乡族自治县",622927:"积石山保安族东乡族撒拉族自治县",622928:"其它区",623e3:"甘南藏族自治州",623001:"合作市",623021:"临潭县",623022:"卓尼县",623023:"舟曲县",623024:"迭部县",623025:"玛曲县",623026:"碌曲县",623027:"夏河县",623028:"其它区",63e4:"青海省",630100:"西宁市",630102:"城东区",630103:"城中区",630104:"城西区",630105:"城北区",630121:"大通回族土族自治县",630122:"湟中县",630123:"湟源县",630124:"其它区",632100:"海东市",632121:"平安县",632122:"民和回族土族自治县",632123:"乐都区",632126:"互助土族自治县",632127:"化隆回族自治县",632128:"循化撒拉族自治县",632129:"其它区",632200:"海北藏族自治州",632221:"门源回族自治县",632222:"祁连县",632223:"海晏县",632224:"刚察县",632225:"其它区",632300:"黄南藏族自治州",632321:"同仁县",632322:"尖扎县",632323:"泽库县",632324:"河南蒙古族自治县",632325:"其它区",632500:"海南藏族自治州",632521:"共和县",632522:"同德县",632523:"贵德县",632524:"兴海县",632525:"贵南县",632526:"其它区",632600:"果洛藏族自治州",632621:"玛沁县",632622:"班玛县",632623:"甘德县",632624:"达日县",632625:"久治县",632626:"玛多县",632627:"其它区",632700:"玉树藏族自治州",632721:"玉树市",632722:"杂多县",632723:"称多县",632724:"治多县",632725:"囊谦县",632726:"曲麻莱县",632727:"其它区",632800:"海西蒙古族藏族自治州",632801:"格尔木市",632802:"德令哈市",632821:"乌兰县",632822:"都兰县",632823:"天峻县",632824:"其它区",64e4:"宁夏回族自治区",640100:"银川市",640104:"兴庆区",640105:"西夏区",640106:"金凤区",640121:"永宁县",640122:"贺兰县",640181:"灵武市",640182:"其它区",640200:"石嘴山市",640202:"大武口区",640205:"惠农区",640221:"平罗县",640222:"其它区",640300:"吴忠市",640302:"利通区",640303:"红寺堡区",640323:"盐池县",640324:"同心县",640381:"青铜峡市",640382:"其它区",640400:"固原市",640402:"原州区",640422:"西吉县",640423:"隆德县",640424:"泾源县",640425:"彭阳县",640426:"其它区",640500:"中卫市",640502:"沙坡头区",640521:"中宁县",640522:"海原县",640523:"其它区",65e4:"新疆维吾尔自治区",650100:"乌鲁木齐市",650102:"天山区",650103:"沙依巴克区",650104:"新市区",650105:"水磨沟区",650106:"头屯河区",650107:"达坂城区",650109:"米东区",650121:"乌鲁木齐县",650122:"其它区",650200:"克拉玛依市",650202:"独山子区",650203:"克拉玛依区",650204:"白碱滩区",650205:"乌尔禾区",650206:"其它区",652100:"吐鲁番地区",652101:"吐鲁番市",652122:"鄯善县",652123:"托克逊县",652124:"其它区",652200:"哈密地区",652201:"哈密市",652222:"巴里坤哈萨克自治县",652223:"伊吾县",652224:"其它区",652300:"昌吉回族自治州",652301:"昌吉市",652302:"阜康市",652323:"呼图壁县",652324:"玛纳斯县",652325:"奇台县",652327:"吉木萨尔县",652328:"木垒哈萨克自治县",652329:"其它区",652700:"博尔塔拉蒙古自治州",652701:"博乐市",652702:"阿拉山口市",652722:"精河县",652723:"温泉县",652724:"其它区",652800:"巴音郭楞蒙古自治州",652801:"库尔勒市",652822:"轮台县",652823:"尉犁县",652824:"若羌县",652825:"且末县",652826:"焉耆回族自治县",652827:"和静县",652828:"和硕县",652829:"博湖县",652830:"其它区",652900:"阿克苏地区",652901:"阿克苏市",652922:"温宿县",652923:"库车县",652924:"沙雅县",652925:"新和县",652926:"拜城县",652927:"乌什县",652928:"阿瓦提县",652929:"柯坪县",652930:"其它区",653e3:"克孜勒苏柯尔克孜自治州",653001:"阿图什市",653022:"阿克陶县",653023:"阿合奇县",653024:"乌恰县",653025:"其它区",653100:"喀什地区",653101:"喀什市",653121:"疏附县",653122:"疏勒县",653123:"英吉沙县",653124:"泽普县",653125:"莎车县",653126:"叶城县",653127:"麦盖提县",653128:"岳普湖县",653129:"伽师县",653130:"巴楚县",653131:"塔什库尔干塔吉克自治县",653132:"其它区",653200:"和田地区",653201:"和田市",653221:"和田县",653222:"墨玉县",653223:"皮山县",653224:"洛浦县",653225:"策勒县",653226:"于田县",653227:"民丰县",653228:"其它区",654e3:"伊犁哈萨克自治州",654002:"伊宁市",654003:"奎屯市",654021:"伊宁县",654022:"察布查尔锡伯自治县",654023:"霍城县",654024:"巩留县",654025:"新源县",654026:"昭苏县",654027:"特克斯县",654028:"尼勒克县",654029:"其它区",654200:"塔城地区",654201:"塔城市",654202:"乌苏市",654221:"额敏县",654223:"沙湾县",654224:"托里县",654225:"裕民县",654226:"和布克赛尔蒙古自治县",654227:"其它区",654300:"阿勒泰地区",654301:"阿勒泰市",654321:"布尔津县",654322:"富蕴县",654323:"福海县",654324:"哈巴河县",654325:"青河县",654326:"吉木乃县",654327:"其它区",659001:"石河子市",659002:"阿拉尔市",659003:"图木舒克市",659004:"五家渠市",71e4:"台湾",710100:"台北市",710101:"中正区",710102:"大同区",710103:"中山区",710104:"松山区",710105:"大安区",710106:"万华区",710107:"信义区",710108:"士林区",710109:"北投区",710110:"内湖区",710111:"南港区",710112:"文山区",710113:"其它区",710200:"高雄市",710201:"新兴区",710202:"前金区",710203:"芩雅区",710204:"盐埕区",710205:"鼓山区",710206:"旗津区",710207:"前镇区",710208:"三民区",710209:"左营区",710210:"楠梓区",710211:"小港区",710212:"其它区",710241:"苓雅区",710242:"仁武区",710243:"大社区",710244:"冈山区",710245:"路竹区",710246:"阿莲区",710247:"田寮区",710248:"燕巢区",710249:"桥头区",710250:"梓官区",710251:"弥陀区",710252:"永安区",710253:"湖内区",710254:"凤山区",710255:"大寮区",710256:"林园区",710257:"鸟松区",710258:"大树区",710259:"旗山区",710260:"美浓区",710261:"六龟区",710262:"内门区",710263:"杉林区",710264:"甲仙区",710265:"桃源区",710266:"那玛夏区",710267:"茂林区",710268:"茄萣区",710300:"台南市",710301:"中西区",710302:"东区",710303:"南区",710304:"北区",710305:"安平区",710306:"安南区",710307:"其它区",710339:"永康区",710340:"归仁区",710341:"新化区",710342:"左镇区",710343:"玉井区",710344:"楠西区",710345:"南化区",710346:"仁德区",710347:"关庙区",710348:"龙崎区",710349:"官田区",710350:"麻豆区",710351:"佳里区",710352:"西港区",710353:"七股区",710354:"将军区",710355:"学甲区",710356:"北门区",710357:"新营区",710358:"后壁区",710359:"白河区",710360:"东山区",710361:"六甲区",710362:"下营区",710363:"柳营区",710364:"盐水区",710365:"善化区",710366:"大内区",710367:"山上区",710368:"新市区",710369:"安定区",710400:"台中市",710401:"中区",710402:"东区",710403:"南区",710404:"西区",710405:"北区",710406:"北屯区",710407:"西屯区",710408:"南屯区",710409:"其它区",710431:"太平区",710432:"大里区",710433:"雾峰区",710434:"乌日区",710435:"丰原区",710436:"后里区",710437:"石冈区",710438:"东势区",710439:"和平区",710440:"新社区",710441:"潭子区",710442:"大雅区",710443:"神冈区",710444:"大肚区",710445:"沙鹿区",710446:"龙井区",710447:"梧栖区",710448:"清水区",710449:"大甲区",710450:"外埔区",710451:"大安区",710500:"金门县",710507:"金沙镇",710508:"金湖镇",710509:"金宁乡",710510:"金城镇",710511:"烈屿乡",710512:"乌坵乡",710600:"南投县",710614:"南投市",710615:"中寮乡",710616:"草屯镇",710617:"国姓乡",710618:"埔里镇",710619:"仁爱乡",710620:"名间乡",710621:"集集镇",710622:"水里乡",710623:"鱼池乡",710624:"信义乡",710625:"竹山镇",710626:"鹿谷乡",710700:"基隆市",710701:"仁爱区",710702:"信义区",710703:"中正区",710704:"中山区",710705:"安乐区",710706:"暖暖区",710707:"七堵区",710708:"其它区",710800:"新竹市",710801:"东区",710802:"北区",710803:"香山区",710804:"其它区",710900:"嘉义市",710901:"东区",710902:"西区",710903:"其它区",711100:"新北市",711130:"万里区",711131:"金山区",711132:"板桥区",711133:"汐止区",711134:"深坑区",711135:"石碇区",711136:"瑞芳区",711137:"平溪区",711138:"双溪区",711139:"贡寮区",711140:"新店区",711141:"坪林区",711142:"乌来区",711143:"永和区",711144:"中和区",711145:"土城区",711146:"三峡区",711147:"树林区",711148:"莺歌区",711149:"三重区",711150:"新庄区",711151:"泰山区",711152:"林口区",711153:"芦洲区",711154:"五股区",711155:"八里区",711156:"淡水区",711157:"三芝区",711158:"石门区",711200:"宜兰县",711214:"宜兰市",711215:"头城镇",711216:"礁溪乡",711217:"壮围乡",711218:"员山乡",711219:"罗东镇",711220:"三星乡",711221:"大同乡",711222:"五结乡",711223:"冬山乡",711224:"苏澳镇",711225:"南澳乡",711226:"钓鱼台",711300:"新竹县",711314:"竹北市",711315:"湖口乡",711316:"新丰乡",711317:"新埔镇",711318:"关西镇",711319:"芎林乡",711320:"宝山乡",711321:"竹东镇",711322:"五峰乡",711323:"横山乡",711324:"尖石乡",711325:"北埔乡",711326:"峨眉乡",711400:"桃园县",711414:"中坜市",711415:"平镇市",711416:"龙潭乡",711417:"杨梅市",711418:"新屋乡",711419:"观音乡",711420:"桃园市",711421:"龟山乡",711422:"八德市",711423:"大溪镇",711424:"复兴乡",711425:"大园乡",711426:"芦竹乡",711500:"苗栗县",711519:"竹南镇",711520:"头份镇",711521:"三湾乡",711522:"南庄乡",711523:"狮潭乡",711524:"后龙镇",711525:"通霄镇",711526:"苑里镇",711527:"苗栗市",711528:"造桥乡",711529:"头屋乡",711530:"公馆乡",711531:"大湖乡",711532:"泰安乡",711533:"铜锣乡",711534:"三义乡",711535:"西湖乡",711536:"卓兰镇",711700:"彰化县",711727:"彰化市",711728:"芬园乡",711729:"花坛乡",711730:"秀水乡",711731:"鹿港镇",711732:"福兴乡",711733:"线西乡",711734:"和美镇",711735:"伸港乡",711736:"员林镇",711737:"社头乡",711738:"永靖乡",711739:"埔心乡",711740:"溪湖镇",711741:"大村乡",711742:"埔盐乡",711743:"田中镇",711744:"北斗镇",711745:"田尾乡",711746:"埤头乡",711747:"溪州乡",711748:"竹塘乡",711749:"二林镇",711750:"大城乡",711751:"芳苑乡",711752:"二水乡",711900:"嘉义县",711919:"番路乡",711920:"梅山乡",711921:"竹崎乡",711922:"阿里山乡",711923:"中埔乡",711924:"大埔乡",711925:"水上乡",711926:"鹿草乡",711927:"太保市",711928:"朴子市",711929:"东石乡",711930:"六脚乡",711931:"新港乡",711932:"民雄乡",711933:"大林镇",711934:"溪口乡",711935:"义竹乡",711936:"布袋镇",712100:"云林县",712121:"斗南镇",712122:"大埤乡",712123:"虎尾镇",712124:"土库镇",712125:"褒忠乡",712126:"东势乡",712127:"台西乡",712128:"仑背乡",712129:"麦寮乡",712130:"斗六市",712131:"林内乡",712132:"古坑乡",712133:"莿桐乡",712134:"西螺镇",712135:"二仑乡",712136:"北港镇",712137:"水林乡",712138:"口湖乡",712139:"四湖乡",712140:"元长乡",712400:"屏东县",712434:"屏东市",712435:"三地门乡",712436:"雾台乡",712437:"玛家乡",712438:"九如乡",712439:"里港乡",712440:"高树乡",712441:"盐埔乡",712442:"长治乡",712443:"麟洛乡",712444:"竹田乡",712445:"内埔乡",712446:"万丹乡",712447:"潮州镇",712448:"泰武乡",712449:"来义乡",712450:"万峦乡",712451:"崁顶乡",712452:"新埤乡",712453:"南州乡",712454:"林边乡",712455:"东港镇",712456:"琉球乡",712457:"佳冬乡",712458:"新园乡",712459:"枋寮乡",712460:"枋山乡",712461:"春日乡",712462:"狮子乡",712463:"车城乡",712464:"牡丹乡",712465:"恒春镇",712466:"满州乡",712500:"台东县",712517:"台东市",712518:"绿岛乡",712519:"兰屿乡",712520:"延平乡",712521:"卑南乡",712522:"鹿野乡",712523:"关山镇",712524:"海端乡",712525:"池上乡",712526:"东河乡",712527:"成功镇",712528:"长滨乡",712529:"金峰乡",712530:"大武乡",712531:"达仁乡",712532:"太麻里乡",712600:"花莲县",712615:"花莲市",712616:"新城乡",712617:"太鲁阁",712618:"秀林乡",712619:"吉安乡",712620:"寿丰乡",712621:"凤林镇",712622:"光复乡",712623:"丰滨乡",712624:"瑞穗乡",712625:"万荣乡",712626:"玉里镇",712627:"卓溪乡",712628:"富里乡",712700:"澎湖县",712707:"马公市",712708:"西屿乡",712709:"望安乡",712710:"七美乡",712711:"白沙乡",712712:"湖西乡",712800:"连江县",712805:"南竿乡",712806:"北竿乡",712807:"莒光乡",712808:"东引乡",81e4:"香港特别行政区",810100:"香港岛",810101:"中西区",810102:"湾仔",810103:"东区",810104:"南区",810200:"九龙",810201:"九龙城区",810202:"油尖旺区",810203:"深水埗区",810204:"黄大仙区",810205:"观塘区",810300:"新界",810301:"北区",810302:"大埔区",810303:"沙田区",810304:"西贡区",810305:"元朗区",810306:"屯门区",810307:"荃湾区",810308:"葵青区",810309:"离岛区",82e4:"澳门特别行政区",820100:"澳门半岛",820200:"离岛",99e4:"海外",990100:"海外"};function o(a){for(var s={},m=0,c;m<a.length;m++)c=a[m],!(!c||!c.id)&&(s[c.id]=c);for(var u=[],f=0;f<a.length;f++)if(c=a[f],!!c){if(c.pid==null&&c.parentId==null){u.push(c);continue}var y=s[c.pid]||s[c.parentId];y&&(y.children||(y.children=[]),y.children.push(c))}return u}var n=function(){var a=[];for(var s in r){var m=s.slice(2,6)==="0000"?void 0:s.slice(4,6)=="00"?s.slice(0,2)+"0000":s.slice(0,4)+"00";a.push({id:s,pid:m,name:r[s]})}return o(a)}();e.exports=n},function(e,t,r){var o=r(18);e.exports={d4:function(){return this.natural(1,4)},d6:function(){return this.natural(1,6)},d8:function(){return this.natural(1,8)},d12:function(){return this.natural(1,12)},d20:function(){return this.natural(1,20)},d100:function(){return this.natural(1,100)},guid:function(){var n="abcdefABCDEF1234567890",a=this.string(n,8)+"-"+this.string(n,4)+"-"+this.string(n,4)+"-"+this.string(n,4)+"-"+this.string(n,12);return a},uuid:function(){return this.guid()},id:function(){var n,a=0,s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],m=["1","0","X","9","8","7","6","5","4","3","2"];n=this.pick(o).id+this.date("yyyyMMdd")+this.string("number",3);for(var c=0;c<n.length;c++)a+=n[c]*s[c];return n+=m[a%11],n},increment:function(){var n=0;return function(a){return n+=+a||1}}(),inc:function(n){return this.increment(n)}}},function(e,t,r){var o=r(21),n=r(22);e.exports={Parser:o,Handler:n}},function(e,t){function r(O){this.type=O,this.offset=r.offset(),this.text=r.text()}function o(O,V){r.call(this,"alternate"),this.left=O,this.right=V}function n(O){r.call(this,"match"),this.body=O.filter(Boolean)}function a(O,V){r.call(this,O),this.body=V}function s(O){a.call(this,"capture-group"),this.index=F[this.offset]||(F[this.offset]=D++),this.body=O}function m(O,V){r.call(this,"quantified"),this.body=O,this.quantifier=V}function c(O,V){r.call(this,"quantifier"),this.min=O,this.max=V,this.greedy=!0}function u(O,V){r.call(this,"charset"),this.invert=O,this.body=V}function f(O,V){r.call(this,"range"),this.start=O,this.end=V}function y(O){r.call(this,"literal"),this.body=O,this.escaped=this.body!=this.text}function d(O){r.call(this,"unicode"),this.code=O.toUpperCase()}function k(O){r.call(this,"hex"),this.code=O.toUpperCase()}function b(O){r.call(this,"octal"),this.code=O.toUpperCase()}function C(O){r.call(this,"back-reference"),this.code=O.toUpperCase()}function A(O){r.call(this,"control-character"),this.code=O.toUpperCase()}var w=function(){function O(S,K){function M(){this.constructor=S}M.prototype=K.prototype,S.prototype=new M}function V(S,K,M,J,j){function W(oe,ge){function de(ie){function be(he){return he.charCodeAt(0).toString(16).toUpperCase()}return ie.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(he){return"\\x0"+be(he)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(he){return"\\x"+be(he)}).replace(/[\u0180-\u0FFF]/g,function(he){return"\\u0"+be(he)}).replace(/[\u1080-\uFFFF]/g,function(he){return"\\u"+be(he)})}var me,ae;switch(oe.length){case 0:me="end of input";break;case 1:me=oe[0];break;default:me=oe.slice(0,-1).join(", ")+" or "+oe[oe.length-1]}return ae=ge?'"'+de(ge)+'"':"end of input","Expected "+me+" but "+ae+" found."}this.expected=S,this.found=K,this.offset=M,this.line=J,this.column=j,this.name="SyntaxError",this.message=W(S,K)}function pe(S){function K(){return S.substring(ee,v)}function M(){return ee}function J(l){function g(x,Y,le){var je,Ne;for(je=Y;le>je;je++)Ne=S.charAt(je),Ne===`
`?(x.seenCR||x.line++,x.column=1,x.seenCR=!1):Ne==="\r"||Ne==="\u2028"||Ne==="\u2029"?(x.line++,x.column=1,x.seenCR=!0):(x.column++,x.seenCR=!1)}return Ie!==l&&(Ie>l&&(Ie=0,Ye={line:1,column:1,seenCR:!1}),g(Ye,Ie,l),Ie=l),Ye}function j(l){$e>v||(v>$e&&($e=v,Ue=[]),Ue.push(l))}function W(l){var g=0;for(l.sort();g<l.length;)l[g-1]===l[g]?l.splice(g,1):g++}function oe(){var l,g,x,Y,le;return l=v,g=ge(),g!==null?(x=v,S.charCodeAt(v)===124?(Y=Lt,v++):(Y=null,$===0&&j(Ht)),Y!==null?(le=oe(),le!==null?(Y=[Y,le],x=Y):(v=x,x=Z)):(v=x,x=Z),x===null&&(x=ze),x!==null?(ee=l,g=Ft(g,x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function ge(){var l,g,x,Y,le;if(l=v,g=me(),g===null&&(g=ze),g!==null)if(x=v,$++,Y=be(),$--,Y===null?x=ze:(v=x,x=Z),x!==null){for(Y=[],le=ie(),le===null&&(le=de());le!==null;)Y.push(le),le=ie(),le===null&&(le=de());Y!==null?(le=ae(),le===null&&(le=ze),le!==null?(ee=l,g=Vt(g,Y,le),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)}else v=l,l=Z;else v=l,l=Z;return l}function de(){var l;return l=U(),l===null&&(l=E(),l===null&&(l=B())),l}function me(){var l,g;return l=v,S.charCodeAt(v)===94?(g=nt,v++):(g=null,$===0&&j(pt)),g!==null&&(ee=l,g=Bt()),g===null&&(v=l),l=g,l}function ae(){var l,g;return l=v,S.charCodeAt(v)===36?(g=$t,v++):(g=null,$===0&&j(Ut)),g!==null&&(ee=l,g=Kt()),g===null&&(v=l),l=g,l}function ie(){var l,g,x;return l=v,g=de(),g!==null?(x=be(),x!==null?(ee=l,g=Gt(g,x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function be(){var l,g,x;return $++,l=v,g=he(),g!==null?(x=P(),x===null&&(x=ze),x!==null?(ee=l,g=Wt(g,x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),$--,l===null&&(g=null,$===0&&j(qt)),l}function he(){var l;return l=we(),l===null&&(l=ke(),l===null&&(l=xe(),l===null&&(l=Te(),l===null&&(l=Oe(),l===null&&(l=_e()))))),l}function we(){var l,g,x,Y,le,je;return l=v,S.charCodeAt(v)===123?(g=Ge,v++):(g=null,$===0&&j(qe)),g!==null?(x=G(),x!==null?(S.charCodeAt(v)===44?(Y=Yt,v++):(Y=null,$===0&&j(Jt)),Y!==null?(le=G(),le!==null?(S.charCodeAt(v)===125?(je=at,v++):(je=null,$===0&&j(st)),je!==null?(ee=l,g=Xt(x,le),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z),l}function ke(){var l,g,x,Y;return l=v,S.charCodeAt(v)===123?(g=Ge,v++):(g=null,$===0&&j(qe)),g!==null?(x=G(),x!==null?(S.substr(v,2)===it?(Y=it,v+=2):(Y=null,$===0&&j(Qt)),Y!==null?(ee=l,g=Zt(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z),l}function xe(){var l,g,x,Y;return l=v,S.charCodeAt(v)===123?(g=Ge,v++):(g=null,$===0&&j(qe)),g!==null?(x=G(),x!==null?(S.charCodeAt(v)===125?(Y=at,v++):(Y=null,$===0&&j(st)),Y!==null?(ee=l,g=er(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z),l}function Te(){var l,g;return l=v,S.charCodeAt(v)===43?(g=tr,v++):(g=null,$===0&&j(rr)),g!==null&&(ee=l,g=or()),g===null&&(v=l),l=g,l}function Oe(){var l,g;return l=v,S.charCodeAt(v)===42?(g=nr,v++):(g=null,$===0&&j(pr)),g!==null&&(ee=l,g=ar()),g===null&&(v=l),l=g,l}function _e(){var l,g;return l=v,S.charCodeAt(v)===63?(g=lt,v++):(g=null,$===0&&j(mt)),g!==null&&(ee=l,g=sr()),g===null&&(v=l),l=g,l}function P(){var l;return S.charCodeAt(v)===63?(l=lt,v++):(l=null,$===0&&j(mt)),l}function G(){var l,g,x;if(l=v,g=[],ct.test(S.charAt(v))?(x=S.charAt(v),v++):(x=null,$===0&&j(ut)),x!==null)for(;x!==null;)g.push(x),ct.test(S.charAt(v))?(x=S.charAt(v),v++):(x=null,$===0&&j(ut));else g=Z;return g!==null&&(ee=l,g=ir(g)),g===null&&(v=l),l=g,l}function U(){var l,g,x,Y;return l=v,S.charCodeAt(v)===40?(g=lr,v++):(g=null,$===0&&j(mr)),g!==null?(x=ye(),x===null&&(x=R(),x===null&&(x=ue(),x===null&&(x=X()))),x!==null?(S.charCodeAt(v)===41?(Y=cr,v++):(Y=null,$===0&&j(ur)),Y!==null?(ee=l,g=fr(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z),l}function X(){var l,g;return l=v,g=oe(),g!==null&&(ee=l,g=gr(g)),g===null&&(v=l),l=g,l}function ue(){var l,g,x;return l=v,S.substr(v,2)===ft?(g=ft,v+=2):(g=null,$===0&&j(yr)),g!==null?(x=oe(),x!==null?(ee=l,g=hr(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function ye(){var l,g,x;return l=v,S.substr(v,2)===gt?(g=gt,v+=2):(g=null,$===0&&j(dr)),g!==null?(x=oe(),x!==null?(ee=l,g=vr(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function R(){var l,g,x;return l=v,S.substr(v,2)===yt?(g=yt,v+=2):(g=null,$===0&&j(br)),g!==null?(x=oe(),x!==null?(ee=l,g=kr(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function E(){var l,g,x,Y,le;if($++,l=v,S.charCodeAt(v)===91?(g=Cr,v++):(g=null,$===0&&j(Er)),g!==null)if(S.charCodeAt(v)===94?(x=nt,v++):(x=null,$===0&&j(pt)),x===null&&(x=ze),x!==null){for(Y=[],le=_(),le===null&&(le=z());le!==null;)Y.push(le),le=_(),le===null&&(le=z());Y!==null?(S.charCodeAt(v)===93?(le=_r,v++):(le=null,$===0&&j(Ar)),le!==null?(ee=l,g=Sr(x,Y),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)}else v=l,l=Z;else v=l,l=Z;return $--,l===null&&(g=null,$===0&&j(Rr)),l}function _(){var l,g,x,Y;return $++,l=v,g=z(),g!==null?(S.charCodeAt(v)===45?(x=xr,v++):(x=null,$===0&&j(Tr)),x!==null?(Y=z(),Y!==null?(ee=l,g=Pr(g,Y),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z)):(v=l,l=Z),$--,l===null&&(g=null,$===0&&j(wr)),l}function z(){var l;return $++,l=I(),l===null&&(l=T()),$--,l===null&&$===0&&j(jr),l}function T(){var l,g;return l=v,Or.test(S.charAt(v))?(g=S.charAt(v),v++):(g=null,$===0&&j(zr)),g!==null&&(ee=l,g=We(g)),g===null&&(v=l),l=g,l}function I(){var l;return l=te(),l===null&&(l=Se(),l===null&&(l=ne(),l===null&&(l=se(),l===null&&(l=fe(),l===null&&(l=ce(),l===null&&(l=Re(),l===null&&(l=ve(),l===null&&(l=Ae(),l===null&&(l=Ce(),l===null&&(l=Pe(),l===null&&(l=Me(),l===null&&(l=Ee(),l===null&&(l=Je(),l===null&&(l=Xe(),l===null&&(l=Qe(),l===null&&(l=Ze(),l===null&&(l=et()))))))))))))))))),l}function B(){var l;return l=H(),l===null&&(l=N(),l===null&&(l=L())),l}function H(){var l,g;return l=v,S.charCodeAt(v)===46?(g=Mr,v++):(g=null,$===0&&j(Ir)),g!==null&&(ee=l,g=Nr()),g===null&&(v=l),l=g,l}function L(){var l,g;return $++,l=v,Lr.test(S.charAt(v))?(g=S.charAt(v),v++):(g=null,$===0&&j(Hr)),g!==null&&(ee=l,g=We(g)),g===null&&(v=l),l=g,$--,l===null&&(g=null,$===0&&j(Dr)),l}function N(){var l;return l=q(),l===null&&(l=Q(),l===null&&(l=Se(),l===null&&(l=ne(),l===null&&(l=se(),l===null&&(l=fe(),l===null&&(l=ce(),l===null&&(l=Re(),l===null&&(l=ve(),l===null&&(l=Ae(),l===null&&(l=Ce(),l===null&&(l=Pe(),l===null&&(l=Me(),l===null&&(l=Ee(),l===null&&(l=De(),l===null&&(l=Je(),l===null&&(l=Xe(),l===null&&(l=Qe(),l===null&&(l=Ze(),l===null&&(l=et()))))))))))))))))))),l}function te(){var l,g;return l=v,S.substr(v,2)===He?(g=He,v+=2):(g=null,$===0&&j(ht)),g!==null&&(ee=l,g=Fr()),g===null&&(v=l),l=g,l}function q(){var l,g;return l=v,S.substr(v,2)===He?(g=He,v+=2):(g=null,$===0&&j(ht)),g!==null&&(ee=l,g=Vr()),g===null&&(v=l),l=g,l}function Q(){var l,g;return l=v,S.substr(v,2)===dt?(g=dt,v+=2):(g=null,$===0&&j(Br)),g!==null&&(ee=l,g=$r()),g===null&&(v=l),l=g,l}function ne(){var l,g;return l=v,S.substr(v,2)===vt?(g=vt,v+=2):(g=null,$===0&&j(Ur)),g!==null&&(ee=l,g=Kr()),g===null&&(v=l),l=g,l}function se(){var l,g;return l=v,S.substr(v,2)===bt?(g=bt,v+=2):(g=null,$===0&&j(Gr)),g!==null&&(ee=l,g=qr()),g===null&&(v=l),l=g,l}function fe(){var l,g;return l=v,S.substr(v,2)===kt?(g=kt,v+=2):(g=null,$===0&&j(Wr)),g!==null&&(ee=l,g=Yr()),g===null&&(v=l),l=g,l}function ce(){var l,g;return l=v,S.substr(v,2)===Rt?(g=Rt,v+=2):(g=null,$===0&&j(Jr)),g!==null&&(ee=l,g=Xr()),g===null&&(v=l),l=g,l}function Re(){var l,g;return l=v,S.substr(v,2)===Ct?(g=Ct,v+=2):(g=null,$===0&&j(Qr)),g!==null&&(ee=l,g=Zr()),g===null&&(v=l),l=g,l}function ve(){var l,g;return l=v,S.substr(v,2)===Et?(g=Et,v+=2):(g=null,$===0&&j(eo)),g!==null&&(ee=l,g=to()),g===null&&(v=l),l=g,l}function Ae(){var l,g;return l=v,S.substr(v,2)===_t?(g=_t,v+=2):(g=null,$===0&&j(ro)),g!==null&&(ee=l,g=oo()),g===null&&(v=l),l=g,l}function Ce(){var l,g;return l=v,S.substr(v,2)===At?(g=At,v+=2):(g=null,$===0&&j(no)),g!==null&&(ee=l,g=po()),g===null&&(v=l),l=g,l}function Pe(){var l,g;return l=v,S.substr(v,2)===St?(g=St,v+=2):(g=null,$===0&&j(ao)),g!==null&&(ee=l,g=so()),g===null&&(v=l),l=g,l}function Me(){var l,g;return l=v,S.substr(v,2)===wt?(g=wt,v+=2):(g=null,$===0&&j(io)),g!==null&&(ee=l,g=lo()),g===null&&(v=l),l=g,l}function Ee(){var l,g;return l=v,S.substr(v,2)===xt?(g=xt,v+=2):(g=null,$===0&&j(mo)),g!==null&&(ee=l,g=co()),g===null&&(v=l),l=g,l}function Se(){var l,g,x;return l=v,S.substr(v,2)===Tt?(g=Tt,v+=2):(g=null,$===0&&j(uo)),g!==null?(S.length>v?(x=S.charAt(v),v++):(x=null,$===0&&j(Pt)),x!==null?(ee=l,g=fo(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function De(){var l,g,x;return l=v,S.charCodeAt(v)===92?(g=jt,v++):(g=null,$===0&&j(Ot)),g!==null?(go.test(S.charAt(v))?(x=S.charAt(v),v++):(x=null,$===0&&j(yo)),x!==null?(ee=l,g=ho(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}function Je(){var l,g,x,Y;if(l=v,S.substr(v,2)===Fe?(g=Fe,v+=2):(g=null,$===0&&j(zt)),g!==null){if(x=[],Mt.test(S.charAt(v))?(Y=S.charAt(v),v++):(Y=null,$===0&&j(It)),Y!==null)for(;Y!==null;)x.push(Y),Mt.test(S.charAt(v))?(Y=S.charAt(v),v++):(Y=null,$===0&&j(It));else x=Z;x!==null?(ee=l,g=vo(x),g===null&&(v=l),l=g):(v=l,l=Z)}else v=l,l=Z;return l}function Xe(){var l,g,x,Y;if(l=v,S.substr(v,2)===Nt?(g=Nt,v+=2):(g=null,$===0&&j(bo)),g!==null){if(x=[],Ve.test(S.charAt(v))?(Y=S.charAt(v),v++):(Y=null,$===0&&j(Be)),Y!==null)for(;Y!==null;)x.push(Y),Ve.test(S.charAt(v))?(Y=S.charAt(v),v++):(Y=null,$===0&&j(Be));else x=Z;x!==null?(ee=l,g=ko(x),g===null&&(v=l),l=g):(v=l,l=Z)}else v=l,l=Z;return l}function Qe(){var l,g,x,Y;if(l=v,S.substr(v,2)===Dt?(g=Dt,v+=2):(g=null,$===0&&j(Ro)),g!==null){if(x=[],Ve.test(S.charAt(v))?(Y=S.charAt(v),v++):(Y=null,$===0&&j(Be)),Y!==null)for(;Y!==null;)x.push(Y),Ve.test(S.charAt(v))?(Y=S.charAt(v),v++):(Y=null,$===0&&j(Be));else x=Z;x!==null?(ee=l,g=Co(x),g===null&&(v=l),l=g):(v=l,l=Z)}else v=l,l=Z;return l}function Ze(){var l,g;return l=v,S.substr(v,2)===Fe?(g=Fe,v+=2):(g=null,$===0&&j(zt)),g!==null&&(ee=l,g=Eo()),g===null&&(v=l),l=g,l}function et(){var l,g,x;return l=v,S.charCodeAt(v)===92?(g=jt,v++):(g=null,$===0&&j(Ot)),g!==null?(S.length>v?(x=S.charAt(v),v++):(x=null,$===0&&j(Pt)),x!==null?(ee=l,g=We(x),g===null&&(v=l),l=g):(v=l,l=Z)):(v=l,l=Z),l}var Ke,Le=arguments.length>1?arguments[1]:{},rt={regexp:oe},ot=oe,Z=null,ze="",Lt="|",Ht='"|"',Ft=function(l,g){return g?new o(l,g[1]):l},Vt=function(l,g,x){return new n([l].concat(g).concat([x]))},nt="^",pt='"^"',Bt=function(){return new r("start")},$t="$",Ut='"$"',Kt=function(){return new r("end")},Gt=function(l,g){return new m(l,g)},qt="Quantifier",Wt=function(l,g){return g&&(l.greedy=!1),l},Ge="{",qe='"{"',Yt=",",Jt='","',at="}",st='"}"',Xt=function(l,g){return new c(l,g)},it=",}",Qt='",}"',Zt=function(l){return new c(l,1/0)},er=function(l){return new c(l,l)},tr="+",rr='"+"',or=function(){return new c(1,1/0)},nr="*",pr='"*"',ar=function(){return new c(0,1/0)},lt="?",mt='"?"',sr=function(){return new c(0,1)},ct=/^[0-9]/,ut="[0-9]",ir=function(l){return+l.join("")},lr="(",mr='"("',cr=")",ur='")"',fr=function(l){return l},gr=function(l){return new s(l)},ft="?:",yr='"?:"',hr=function(l){return new a("non-capture-group",l)},gt="?=",dr='"?="',vr=function(l){return new a("positive-lookahead",l)},yt="?!",br='"?!"',kr=function(l){return new a("negative-lookahead",l)},Rr="CharacterSet",Cr="[",Er='"["',_r="]",Ar='"]"',Sr=function(l,g){return new u(!!l,g)},wr="CharacterRange",xr="-",Tr='"-"',Pr=function(l,g){return new f(l,g)},jr="Character",Or=/^[^\\\]]/,zr="[^\\\\\\]]",We=function(l){return new y(l)},Mr=".",Ir='"."',Nr=function(){return new r("any-character")},Dr="Literal",Lr=/^[^|\\\/.[()?+*$\^]/,Hr="[^|\\\\\\/.[()?+*$\\^]",He="\\b",ht='"\\\\b"',Fr=function(){return new r("backspace")},Vr=function(){return new r("word-boundary")},dt="\\B",Br='"\\\\B"',$r=function(){return new r("non-word-boundary")},vt="\\d",Ur='"\\\\d"',Kr=function(){return new r("digit")},bt="\\D",Gr='"\\\\D"',qr=function(){return new r("non-digit")},kt="\\f",Wr='"\\\\f"',Yr=function(){return new r("form-feed")},Rt="\\n",Jr='"\\\\n"',Xr=function(){return new r("line-feed")},Ct="\\r",Qr='"\\\\r"',Zr=function(){return new r("carriage-return")},Et="\\s",eo='"\\\\s"',to=function(){return new r("white-space")},_t="\\S",ro='"\\\\S"',oo=function(){return new r("non-white-space")},At="\\t",no='"\\\\t"',po=function(){return new r("tab")},St="\\v",ao='"\\\\v"',so=function(){return new r("vertical-tab")},wt="\\w",io='"\\\\w"',lo=function(){return new r("word")},xt="\\W",mo='"\\\\W"',co=function(){return new r("non-word")},Tt="\\c",uo='"\\\\c"',Pt="any character",fo=function(l){return new A(l)},jt="\\",Ot='"\\\\"',go=/^[1-9]/,yo="[1-9]",ho=function(l){return new C(l)},Fe="\\0",zt='"\\\\0"',Mt=/^[0-7]/,It="[0-7]",vo=function(l){return new b(l.join(""))},Nt="\\x",bo='"\\\\x"',Ve=/^[0-9a-fA-F]/,Be="[0-9a-fA-F]",ko=function(l){return new k(l.join(""))},Dt="\\u",Ro='"\\\\u"',Co=function(l){return new d(l.join(""))},Eo=function(){return new r("null-character")},v=0,ee=0,Ie=0,Ye={line:1,column:1,seenCR:!1},$e=0,Ue=[],$=0;if("startRule"in Le){if(!(Le.startRule in rt))throw new Error(`Can't start parsing from rule "`+Le.startRule+'".');ot=rt[Le.startRule]}if(r.offset=M,r.text=K,Ke=ot(),Ke!==null&&v===S.length)return Ke;throw W(Ue),ee=Math.max(v,$e),new V(Ue,ee<S.length?S.charAt(ee):null,ee,J(ee).line,J(ee).column)}return O(V,Error),{SyntaxError:V,parse:pe}}(),D=1,F={};e.exports=w},function(e,t,r){var o=r(3),n=r(5),a={extend:o.extend},s=k(97,122),m=k(65,90),c=k(48,57),u=k(32,47)+k(58,64)+k(91,96)+k(123,126),f=k(32,126),y=` \f
\r	\v \u2028\u2029`,d={"\\w":s+m+c+"_","\\W":u.replace("_",""),"\\s":y,"\\S":function(){for(var b=f,C=0;C<y.length;C++)b=b.replace(y[C],"");return b}(),"\\d":c,"\\D":s+m+u};function k(b,C){for(var A="",w=b;w<=C;w++)A+=String.fromCharCode(w);return A}a.gen=function(b,C,A){return A=A||{guid:1},a[b.type]?a[b.type](b,C,A):a.token(b,C,A)},a.extend({token:function(b,C,A){switch(b.type){case"start":case"end":return"";case"any-character":return n.character();case"backspace":return"";case"word-boundary":return"";case"non-word-boundary":break;case"digit":return n.pick(c.split(""));case"non-digit":return n.pick((s+m+u).split(""));case"form-feed":break;case"line-feed":return b.body||b.text;case"carriage-return":break;case"white-space":return n.pick(y.split(""));case"non-white-space":return n.pick((s+m+c).split(""));case"tab":break;case"vertical-tab":break;case"word":return n.pick((s+m+c).split(""));case"non-word":return n.pick(u.replace("_","").split(""))}return b.body||b.text},alternate:function(b,C,A){return this.gen(n.boolean()?b.left:b.right,C,A)},match:function(b,C,A){C="";for(var w=0;w<b.body.length;w++)C+=this.gen(b.body[w],C,A);return C},"capture-group":function(b,C,A){return C=this.gen(b.body,C,A),A[A.guid++]=C,C},"non-capture-group":function(b,C,A){return this.gen(b.body,C,A)},"positive-lookahead":function(b,C,A){return this.gen(b.body,C,A)},"negative-lookahead":function(b,C,A){return""},quantified:function(b,C,A){C="";for(var w=this.quantifier(b.quantifier),D=0;D<w;D++)C+=this.gen(b.body,C,A);return C},quantifier:function(b,C,A){var w=Math.max(b.min,0),D=isFinite(b.max)?b.max:w+n.integer(3,7);return n.integer(w,D)},charset:function(b,C,A){if(b.invert)return this["invert-charset"](b,C,A);var w=n.pick(b.body);return this.gen(w,C,A)},"invert-charset":function(b,C,A){for(var w=f,D=0,F;D<b.body.length;D++)switch(F=b.body[D],F.type){case"literal":w=w.replace(F.body,"");break;case"range":for(var O=this.gen(F.start,C,A).charCodeAt(),V=this.gen(F.end,C,A).charCodeAt(),pe=O;pe<=V;pe++)w=w.replace(String.fromCharCode(pe),"");default:var S=d[F.text];if(S)for(var K=0;K<=S.length;K++)w=w.replace(S[K],"")}return n.pick(w.split(""))},range:function(b,C,A){var w=this.gen(b.start,C,A).charCodeAt(),D=this.gen(b.end,C,A).charCodeAt();return String.fromCharCode(n.integer(w,D))},literal:function(b,C,A){return b.escaped?b.body:b.text},unicode:function(b,C,A){return String.fromCharCode(parseInt(b.code,16))},hex:function(b,C,A){return String.fromCharCode(parseInt(b.code,16))},octal:function(b,C,A){return String.fromCharCode(parseInt(b.code,8))},"back-reference":function(b,C,A){return A[b.code]||""},CONTROL_CHARACTER_MAP:function(){for(var b="@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "),C=`\0       \x07 \b 	 
 \v \f \r              \x1B    `.split(" "),A={},w=0;w<b.length;w++)A[b[w]]=C[w];return A}(),"control-character":function(b,C,A){return this.CONTROL_CHARACTER_MAP[b.code]}}),e.exports=a},function(e,t,r){e.exports=r(24)},function(e,t,r){var o=r(2),n=r(3),a=r(4);function s(m,c,u){u=u||[];var f={name:typeof c=="string"?c.replace(o.RE_KEY,"$1"):c,template:m,type:n.type(m),rule:a.parse(c)};switch(f.path=u.slice(0),f.path.push(c===void 0?"ROOT":f.name),f.type){case"array":f.items=[],n.each(m,function(y,d){f.items.push(s(y,d,f.path))});break;case"object":f.properties=[],n.each(m,function(y,d){f.properties.push(s(y,d,f.path))});break}return f}e.exports=s},function(e,t,r){e.exports=r(26)},function(e,t,r){var o=r(2),n=r(3),a=r(23);function s(u,f){for(var y=a(u),d=m.diff(y,f),k=0;k<d.length;k++);return d}var m={diff:function(f,y,d){var k=[];return this.name(f,y,d,k)&&this.type(f,y,d,k)&&(this.value(f,y,d,k),this.properties(f,y,d,k),this.items(f,y,d,k)),k},name:function(u,f,y,d){var k=d.length;return c.equal("name",u.path,y+"",u.name+"",d),d.length===k},type:function(u,f,y,d){var k=d.length;switch(u.type){case"string":if(u.template.match(o.RE_PLACEHOLDER))return!0;break;case"array":if(u.rule.parameters&&(u.rule.min!==void 0&&u.rule.max===void 0&&u.rule.count===1||u.rule.parameters[2]))return!0;break;case"function":return!0}return c.equal("type",u.path,n.type(f),u.type,d),d.length===k},value:function(u,f,y,d){var k=d.length,b=u.rule,C=u.type;if(C==="object"||C==="array"||C==="function")return!0;if(!b.parameters){switch(C){case"regexp":return c.match("value",u.path,f,u.template,d),d.length===k;case"string":if(u.template.match(o.RE_PLACEHOLDER))return d.length===k;break}return c.equal("value",u.path,f,u.template,d),d.length===k}var A;switch(C){case"number":var w=(f+"").split(".");w[0]=+w[0],b.min!==void 0&&b.max!==void 0&&(c.greaterThanOrEqualTo("value",u.path,w[0],Math.min(b.min,b.max),d),c.lessThanOrEqualTo("value",u.path,w[0],Math.max(b.min,b.max),d)),b.min!==void 0&&b.max===void 0&&c.equal("value",u.path,w[0],b.min,d,"[value] "+y),b.decimal&&(b.dmin!==void 0&&b.dmax!==void 0&&(c.greaterThanOrEqualTo("value",u.path,w[1].length,b.dmin,d),c.lessThanOrEqualTo("value",u.path,w[1].length,b.dmax,d)),b.dmin!==void 0&&b.dmax===void 0&&c.equal("value",u.path,w[1].length,b.dmin,d));break;case"boolean":break;case"string":A=f.match(new RegExp(u.template,"g")),A=A?A.length:0,b.min!==void 0&&b.max!==void 0&&(c.greaterThanOrEqualTo("repeat count",u.path,A,b.min,d),c.lessThanOrEqualTo("repeat count",u.path,A,b.max,d)),b.min!==void 0&&b.max===void 0&&c.equal("repeat count",u.path,A,b.min,d);break;case"regexp":A=f.match(new RegExp(u.template.source.replace(/^\^|\$$/g,""),"g")),A=A?A.length:0,b.min!==void 0&&b.max!==void 0&&(c.greaterThanOrEqualTo("repeat count",u.path,A,b.min,d),c.lessThanOrEqualTo("repeat count",u.path,A,b.max,d)),b.min!==void 0&&b.max===void 0&&c.equal("repeat count",u.path,A,b.min,d);break}return d.length===k},properties:function(u,f,y,d){var k=d.length,b=u.rule,C=n.keys(f);if(u.properties){if(u.rule.parameters?(b.min!==void 0&&b.max!==void 0&&(c.greaterThanOrEqualTo("properties length",u.path,C.length,Math.min(b.min,b.max),d),c.lessThanOrEqualTo("properties length",u.path,C.length,Math.max(b.min,b.max),d)),b.min!==void 0&&b.max===void 0&&b.count!==1&&c.equal("properties length",u.path,C.length,b.min,d)):c.equal("properties length",u.path,C.length,u.properties.length,d),d.length!==k)return!1;for(var A=0;A<C.length;A++)d.push.apply(d,this.diff(function(){var w;return n.each(u.properties,function(D){D.name===C[A]&&(w=D)}),w||u.properties[A]}(),f[C[A]],C[A]));return d.length===k}},items:function(u,f,y,d){var k=d.length;if(u.items){var b=u.rule;if(!u.rule.parameters)c.equal("items length",u.path,f.length,u.items.length,d);else{if(b.min!==void 0&&b.max!==void 0&&(c.greaterThanOrEqualTo("items",u.path,f.length,Math.min(b.min,b.max)*u.items.length,d,"[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"),c.lessThanOrEqualTo("items",u.path,f.length,Math.max(b.min,b.max)*u.items.length,d,"[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements")),b.min!==void 0&&b.max===void 0){if(b.count===1)return d.length===k;c.equal("items length",u.path,f.length,b.min*u.items.length,d)}if(b.parameters[2])return d.length===k}if(d.length!==k)return!1;for(var C=0;C<f.length;C++)d.push.apply(d,this.diff(u.items[C%u.items.length],f[C],C%u.items.length));return d.length===k}}},c={message:function(u){return(u.message||"[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}",u.type.toUpperCase()).replace("{ltype}",u.type.toLowerCase()).replace("{path}",n.isArray(u.path)&&u.path.join(".")||u.path).replace("{action}",u.action).replace("{expected}",u.expected).replace("{actual}",u.actual)},equal:function(u,f,y,d,k,b){if(y===d)return!0;switch(u){case"type":if(d==="regexp"&&y==="string")return!0;break}var C={path:f,type:u,actual:y,expected:d,action:"is equal to",message:b};return C.message=c.message(C),k.push(C),!1},match:function(u,f,y,d,k,b){if(d.test(y))return!0;var C={path:f,type:u,actual:y,expected:d,action:"matches",message:b};return C.message=c.message(C),k.push(C),!1},notEqual:function(u,f,y,d,k,b){if(y!==d)return!0;var C={path:f,type:u,actual:y,expected:d,action:"is not equal to",message:b};return C.message=c.message(C),k.push(C),!1},greaterThan:function(u,f,y,d,k,b){if(y>d)return!0;var C={path:f,type:u,actual:y,expected:d,action:"is greater than",message:b};return C.message=c.message(C),k.push(C),!1},lessThan:function(u,f,y,d,k,b){if(y<d)return!0;var C={path:f,type:u,actual:y,expected:d,action:"is less to",message:b};return C.message=c.message(C),k.push(C),!1},greaterThanOrEqualTo:function(u,f,y,d,k,b){if(y>=d)return!0;var C={path:f,type:u,actual:y,expected:d,action:"is greater than or equal to",message:b};return C.message=c.message(C),k.push(C),!1},lessThanOrEqualTo:function(u,f,y,d,k,b){if(y<=d)return!0;var C={path:f,type:u,actual:y,expected:d,action:"is less than or equal to",message:b};return C.message=c.message(C),k.push(C),!1}};s.Diff=m,s.Assert=c,e.exports=s},function(e,t,r){e.exports=r(28)},function(e,t,r){var o=r(3);window._XMLHttpRequest=window.XMLHttpRequest,window._ActiveXObject=window.ActiveXObject;try{new window.Event("custom")}catch{window.Event=function(b,C,A,w){var D=document.createEvent("CustomEvent");return D.initCustomEvent(b,C,A,w),D}}var n={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},a="readystatechange loadstart progress abort error load timeout loadend".split(" "),s="timeout withCredentials".split(" "),m="readyState responseURL status statusText responseType response responseText responseXML".split(" "),c={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};function u(){this.custom={events:{},requestHeaders:{},responseHeaders:{}}}u._settings={timeout:"10-100"},u.setup=function(k){return o.extend(u._settings,k),u._settings},o.extend(u,n),o.extend(u.prototype,n),u.prototype.mock=!0,u.prototype.match=!1,o.extend(u.prototype,{open:function(k,b,C,A,w){var D=this;o.extend(this.custom,{method:k,url:b,async:typeof C=="boolean"?C:!0,username:A,password:w,options:{url:b,type:k}}),this.custom.timeout=function(K){if(typeof K=="number")return K;if(typeof K=="string"&&!~K.indexOf("-"))return parseInt(K,10);if(typeof K=="string"&&~K.indexOf("-")){var M=K.split("-"),J=parseInt(M[0],10),j=parseInt(M[1],10);return Math.round(Math.random()*(j-J))+J}}(u._settings.timeout);var F=y(this.custom.options);function O(K){for(var M=0;M<m.length;M++)try{D[m[M]]=V[m[M]]}catch{}D.dispatchEvent(new Event(K.type))}if(!F){var V=f();this.custom.xhr=V;for(var pe=0;pe<a.length;pe++)V.addEventListener(a[pe],O);A?V.open(k,b,C,A,w):V.open(k,b,C);for(var S=0;S<s.length;S++)try{V[s[S]]=D[s[S]]}catch{}return}this.match=!0,this.custom.template=F,this.readyState=u.OPENED,this.dispatchEvent(new Event("readystatechange"))},setRequestHeader:function(k,b){if(!this.match){this.custom.xhr.setRequestHeader(k,b);return}var C=this.custom.requestHeaders;C[k]?C[k]+=","+b:C[k]=b},timeout:0,withCredentials:!1,upload:{},send:function(b){var C=this;if(this.custom.options.body=b,!this.match){this.custom.xhr.send(b);return}this.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),this.dispatchEvent(new Event("loadstart")),this.custom.async?setTimeout(A,this.custom.timeout):A();function A(){C.readyState=u.HEADERS_RECEIVED,C.dispatchEvent(new Event("readystatechange")),C.readyState=u.LOADING,C.dispatchEvent(new Event("readystatechange")),C.status=200,C.statusText=c[200],C.response=C.responseText=JSON.stringify(d(C.custom.template,C.custom.options),null,4),C.readyState=u.DONE,C.dispatchEvent(new Event("readystatechange")),C.dispatchEvent(new Event("load")),C.dispatchEvent(new Event("loadend"))}},abort:function(){if(!this.match){this.custom.xhr.abort();return}this.readyState=u.UNSENT,this.dispatchEvent(new Event("abort",!1,!1,this)),this.dispatchEvent(new Event("error",!1,!1,this))}}),o.extend(u.prototype,{responseURL:"",status:u.UNSENT,statusText:"",getResponseHeader:function(k){return this.match?this.custom.responseHeaders[k.toLowerCase()]:this.custom.xhr.getResponseHeader(k)},getAllResponseHeaders:function(){if(!this.match)return this.custom.xhr.getAllResponseHeaders();var k=this.custom.responseHeaders,b="";for(var C in k)k.hasOwnProperty(C)&&(b+=C+": "+k[C]+`\r
`);return b},overrideMimeType:function(){},responseType:"",response:null,responseText:"",responseXML:null}),o.extend(u.prototype,{addEventListener:function(b,C){var A=this.custom.events;A[b]||(A[b]=[]),A[b].push(C)},removeEventListener:function(b,C){for(var A=this.custom.events[b]||[],w=0;w<A.length;w++)A[w]===C&&A.splice(w--,1)},dispatchEvent:function(b){for(var C=this.custom.events[b.type]||[],A=0;A<C.length;A++)C[A].call(this,b);var w="on"+b.type;this[w]&&this[w](b)}});function f(){var k=function(){var A=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,w=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,D=location.href,F=w.exec(D.toLowerCase())||[];return A.test(F[1])}();return window.ActiveXObject?!k&&b()||C():b();function b(){try{return new window._XMLHttpRequest}catch{}}function C(){try{return new window._ActiveXObject("Microsoft.XMLHTTP")}catch{}}}function y(k){for(var b in u.Mock._mocked){var C=u.Mock._mocked[b];if((!C.rurl||A(C.rurl,k.url))&&(!C.rtype||A(C.rtype,k.type.toLowerCase())))return C}function A(w,D){if(o.type(w)==="string")return w===D;if(o.type(w)==="regexp")return w.test(D)}}function d(k,b){return o.isFunction(k.template)?k.template(b):u.Mock.mock(k.template)}e.exports=u}])})})(mock);var mockExports=mock.exports;const Mock=getDefaultExportFromCjs(mockExports),letters=[{to:"火龙果叉烧肠粉",time:"2023-11-22",detail:`<p>画好可爱！</p>
    <p>很喜欢你的画～不用叠甲大胆发就好！我不介意哒～笔芯~</p>`},{to:"火龙果叉烧肠粉",time:"2023-11-22",detail:`<p>谢谢你～玩得很开心嘻嘻！</p>
    <p>虽然有点坏心眼，但是可以用你的画给她当头像嘛hhh</p>
    <p>如果你不介意的话~</p>
    <p>介意的话我就不换啦，我就是问问~</p>
    <p>画师大佬love~</p>`},{to:"火龙果叉烧肠粉",time:"2023-11-22",detail:`<p>hhh现在的就很好呀！我先换上啦！</p>
    <p>其实是想捉弄一下楼主啦～</p>
    <p>她不知道哦，她没发现的话你们不要告诉她哦！</p>
    <p>爰您～</p>`},{to:"火龙果叉烧肠粉",time:"2023-11-22",detail:"<p>？？？？你们？！</p>"},{to:"火龙果叉烧肠粉",time:"2023-11-24",detail:"<p>别紧张～她就是害羞啦嘻嘻～欢迎大家的新二创哦！头像还可以继续加~</p>"},{to:"火龙果叉烧肠粉",time:"2023-11-27",detail:`<p>嘻嘻你想参考我们真人嘛？还是自由发挥更好吖？</p>
    <p>如果想画参考真人也可以啦，你想知道什么信息？身材发型衣品啥的？</p>
    <p>群里我不会去的！但是你就当我跟你的回复是在群里发言吧！都可以转给群里哦</p>`},{to:"火龙果叉烧肠粉",time:"2023-11-27",detail:`<p>hhh不是，我感觉明是我们在约稿啊，不用那么迁就我们吧！</p>
    <p>你们的友人A桑165cm，头发就soyo那个长度，你们的chaurin161.5cm(小数点别问，问就是她坚特的)，头发大概到腰，体重都大约50kg。</p>
    <p>你如果想参考呢，就这样，如果不想参考自由发挥我们都没有意见哦！！</p>
    <p>没想到真的有一天能约到合照图，期待住了，怎么发挥都可以！！！</p>
    <p>谢谢画师大佬哦~</p>
    <p>爱您~</p>`},{to:"火龙果叉烧肠粉",time:"2023-11-27",detail:`<p>发色都是黑色吖！我俩都不染头发的~</p>
    <p>不过你想发挥我们没有意见哦！！</p>`}],books=[{name:"回到过去变成猫",author:"陈词懒调",time:2013,rate:10,tag:"日常/变身"},{name:"长夜将明",author:"尺间萤火",time:2021,rate:7,tag:"日常/恋爱"},{name:"独游",author:"酒精过敏",time:2008,rate:8,tag:"游戏"},{name:"诡秘之主",author:"爱潜水的乌贼",time:2018,rate:10,tag:"玄幻"},{name:"史上第一混乱",author:"张小花",time:2008,rate:10,tag:"搞笑/群穿"},{name:"放开那个女巫",author:"二目",time:2016,rate:7,tag:"奇幻"},{name:"覆汉",author:"榴弹怕水",time:2018,rate:8,tag:"历史"},{name:"秦吏",author:"七月新番",time:2018,rate:10,tag:"历史"},{name:"新书",author:"七月新番",time:2020,rate:7,tag:"历史"},{name:"汉阙",author:"七月新番",time:2019,rate:9,tag:"历史"},{name:"匡扶汉室",author:"七月新番",time:2023,rate:8,tag:"历史"},{name:"穷鬼的上下两千年",author:"非玩家角色",time:2017,rate:8,tag:"历史/变单"},{name:"捡到一只始皇帝",author:"历史系之狼",time:2020,rate:8,tag:"历史"},{name:"每周三都要进行灵魂互换",author:"江别月",time:2020,rate:8,tag:"日常/恋爱"},{name:"绍宋",author:"榴弹怕水",time:2019,rate:8,tag:"历史"},{name:"看守魔女们的典狱长",author:"广场喂鸽子",time:2020,rate:8,tag:"奇幻"},{name:"我们生活在南京",author:"天瑞说符",time:2021,rate:9,tag:"科幻"},{name:"亏成首富从游戏开始",author:"青衫取醉",time:2019,rate:8,tag:"游戏/迪化"},{name:"终宋",author:"怪诞的表哥",time:2021,rate:6,tag:"历史"},{name:"我的时空旅舍",author:"金色茉莉花",time:2018,rate:6,tag:"日常/无限"},{name:"世界树的游戏",author:"咯嘣",time:2019,rate:8,tag:"奇幻/变单/第四天灾"},{name:"我家老婆来自一千年前",author:"花还没开",time:2020,rate:8,tag:"日常/恋爱/反穿"},{name:"黎明之剑",author:"远瞳",time:2018,rate:9,tag:"科幻"},{name:"领主大人是卧底",author:"学语新风",time:2023,rate:6,tag:"游戏"},{name:"下班，然后变成魔法少女",author:"弧盐",time:2023,rate:9,tag:"变身"},{name:"那不勒斯之鸦",author:"天下云怅",time:2024,rate:7,tag:"奇幻/变身"},{name:"谁把我的尸体藏起来了！",author:"有妖眼",time:2024,rate:7,tag:"奇幻"},{name:"夜明珠",author:"伯伦希尔",time:2005,rate:10,tag:"变嫁/日常"},{name:"异世界女神传",author:"伯伦希尔",time:0,rate:8,tag:"奇幻/变身"},{name:"辽宁1950",author:"过渡形态",time:2021,rate:5,tag:"历史/群穿"},{name:"姬的时代",author:"黑暗中凝聚",time:0,rate:8,tag:"变百/科幻"},{name:"花开娇艳的卷柏",author:"双色瞳的猫猫",time:2013,rate:9,tag:"变身/日常"},{name:"铁十字",author:"月影梧桐",time:2016,rate:7,tag:"历史"},{name:"赛汗塔拉的雪",author:"伴伊走天涯",time:2021,rate:9,tag:"变嫁/日常"},{name:"我的第三帝国",author:"龙灵骑士",time:2016,rate:7,tag:"历史"},{name:"我的二战不可能这么萌",author:"月面",time:2016,rate:8,tag:"历史/娘化/奇幻"},{name:"恶魔狂想曲之明日骄阳",author:"胡鳕",time:2003,rate:8,tag:"奇幻/变装"},{name:"她的山，她的海",author:"扶华",time:2019,rate:10,tag:"百合/日常"},{name:"重生成为情敌妻",author:"舒怀",time:2014,rate:8,tag:"变嫁/日常"},{name:"永夜",author:"桩桩",time:2009,rate:7,tag:"变身/奇幻"},{name:"我，退休传奇，被迫上岸",author:"虾球",time:2021,rate:7,tag:"百合/奇幻"},{name:"与你编织的传说之歌",author:"逢坂琪",time:2017,rate:9,tag:"变嫁/奇幻"},{name:"我的妈妈是虹夏怎么办？",author:"彩根",time:2022,rate:5,tag:"乐子/同人"},{name:"魔女的镇魂歌",author:"Ain Soph Aur",time:2017,rate:8,tag:"百合/奇幻"},{name:"脑袋开花",author:"月鸦",time:2017,rate:9,tag:"变百/游戏"},{name:"巴赫小姐的螃蟹卡农",author:"月鸦",time:2020,rate:8,tag:"变百/奇幻"},{name:"神的调色盘",author:"月鸦",time:2018,rate:8,tag:"变百/日常"},{name:"被善意所欺骗的她们都重生了",author:"日高舞夜",time:2022,rate:8,tag:"恋爱/抱憾终身"},{name:"孤独与摇滚与乐队观察家",author:"新手工具人员",time:2023,rate:6,tag:"百合/同人"},{name:"恶役公主不会死于王室战争",author:"一个路过的five",time:2022,rate:7,tag:"奇幻/百合"},{name:"千反田的超高难度重生攻略",author:"哈士奇菌",time:2018,rate:7,tag:"百合/同人"},{name:"我是我的错误",author:"乱世银娘",time:2022,rate:8,tag:"自百/日常"},{name:"伊芙特罗娜的旧日见闻",author:"橘赭Juzer",time:2021,rate:9,tag:"变身/奇幻"},{name:"守护神的我成了魔王的猫娘爱妃",author:"苏御茗",time:2022,rate:5,tag:"奇幻/变嫁"},{name:"转生成精灵的我不想当宠物",author:"孜然风",time:2018,rate:7,tag:"奇幻/变单/虐主"},{name:"关于我基友是魔法少女这件事",author:"猫的眼镜",time:2021,rate:6,tag:"变身"},{name:"来自深渊的我今天也要拯救人类",author:"一簇西语",time:2019,rate:7,tag:"奇幻/变身"},{name:"我才不是魔法少女",author:"吃土的书语",time:2017,rate:6,tag:"变身"},{name:"傀儡师搞事日记",author:"帷间客转生",time:2022,rate:6,tag:"变嫁/奇幻"},{name:"魔王大人即使变身也要复仇哟",author:"兰玉边",time:2019,rate:7,tag:"变嫁/奇幻"},{name:"血后",author:"伯伦希尔",time:2024,rate:7,tag:"变嫁/奇幻"},{name:"萌娘三国演义",author:"三十二变",time:2011,rate:8,tag:"历史/娘化"},{name:"魔王奶爸",author:"盘古混沌",time:0,rate:8,tag:"奇幻/虐主"},{name:"我捡了只重生的猫",author:"半亩南山",time:2020,rate:7,tag:"日常"},{name:"变身女学霸",author:"醉卧笑伊人",time:2014,rate:5,tag:"变身/日常"},{name:"重生女学霸",author:"迷失之途",time:2015,rate:7,tag:"变百/日常"},{name:"东京影姬",author:"小迷",time:2016,rate:7,tag:"变百/日常"},{name:"侵入人间",author:"发条橙之梦",time:2020,rate:7,tag:"日常/恋爱"},{name:"绑架全人类",author:"小雨清晨",time:2012,rate:9,tag:"科幻/穿越"},{name:"疯巫妖的实验日志",author:"愤怒的松鼠",time:2014,rate:8,tag:"游戏"},{name:"静的平行世界",author:"雪先生",time:2011,rate:8,tag:"变百/日常"},{name:"回到过去变成鼠",author:"一点不好笑",time:2015,rate:6,tag:"日常/变身/同人"},{name:"桃李不言gl",author:"一盏夜灯",time:2017,rate:7,tag:"百合/日常"},{name:"西风盛开之塔",author:"黄连苦寒",time:2016,rate:8,tag:"百合/奇幻"},{name:"域外天魔搞事日记",author:"帷间客",time:2017,rate:5,tag:"奇幻/乐子"},{name:"女主从书里跑出来了怎么办",author:"姬叉",time:2021,rate:6,tag:"玄幻/日常"},{name:"暴风城打工实录",author:"又一个鱼雷",time:2022,rate:8,tag:"奇幻/同人"},{name:"吕布的人生模拟器",author:"会说话的胡子",time:2021,rate:6,tag:"历史"},{name:"诡秘：从阅读者开始",author:"名火速返",time:2021,rate:6,tag:"奇幻/同人"},{name:"好莱坞的秘密花园",author:"三千烦恼丝",time:2011,rate:7,tag:"百合/日常"},{name:"年度最垃圾伪圣女",author:"わからないマン",time:2020,rate:10,tag:"变单/奇幻/恶役/误解"},{name:"游戏人生",author:"榎宮祐",time:2012,rate:8,tag:"奇幻"},{name:"妹妹人生",author:"入間人間",time:2015,rate:9,tag:"日常/骨科"},{name:"青春猪头少年系列",author:"鴨志田一",time:2014,rate:8,tag:"恋爱/校园"},{name:"在地下城寻求邂逅是否搞错了什么",author:"大森藤ノ",time:2013,rate:8,tag:"奇幻"},{name:"欢迎来到实力至上主义的教室",author:"衣笠彰梧",time:2015,rate:6,tag:"校园"},{name:"加速世界",author:"川原礫",time:2009,rate:8,tag:"游戏"},{name:"刀剑神域: Progressive",author:"川原礫",time:2012,rate:8,tag:"游戏/恋爱"},{name:"魔女之旅",author:"白石定規",time:2016,rate:7,tag:"奇幻/旅行/百合"},{name:"刀剑神域",author:"川原礫",time:2009,rate:8,tag:"游戏/恋爱"},{name:"Re：从零开始的异世界生活",author:"長月達平",time:2014,rate:7,tag:"奇幻/轮回"},{name:"86―不存在的战区―",author:"安里アサト",time:2017,rate:8,tag:"科幻"},{name:"這個勇者明明超TUEEE卻過度謹慎",author:"土日月",time:2017,rate:8,tag:"奇幻/搞笑"},{name:"不正经的魔术讲师与禁忌教典",author:"羊太郎",time:2014,rate:7,tag:"奇幻"},{name:"约会大作战",author:"橘公司",time:2011,rate:7,tag:"奇幻/后宫"},{name:"打倒女神勇者的下流手段",author:"笹木さくま",time:2017,rate:6,tag:"奇幻/后宫"},{name:"三角的距离无限趋近零",author:"岬鷺宮",time:2018,rate:6,tag:"恋爱/日常"},{name:"刺客守则",author:"天城ケイ",time:2016,rate:6,tag:"奇幻/后宫"},{name:"精灵使的剑舞",author:"志瑞祐",time:2010,rate:6,tag:"奇幻/后宫"},{name:"紫罗兰永恒花园",author:"暁佳奈",time:2015,rate:7,tag:"奇幻/恋爱"},{name:"剃须。然后捡到女高中生",author:"しめさば",time:2018,rate:6,tag:"恋爱/日常"},{name:"平凡职业造就世界最强",author:"白米良",time:2013,rate:6,tag:"群穿/奇幻/后宫"},{name:"盾之勇者成名录",author:"アネコユサギ",time:2012,rate:5,tag:"奇幻/后宫"},{name:"夜伽之国的月光姬",author:"青野海鳥",time:2015,rate:8,tag:"变单/奇幻/误解"},{name:"叶隐樱不悲叹",author:"玖洞",time:2021,rate:7,tag:"变身/奇幻"},{name:"转生成为魔剑了",author:"棚架ユウ",time:2016,rate:5,tag:"奇幻/变身"},{name:"堤亚穆帝国物语 ～从断头台开始，公主重生后的逆转人生～",author:"餅月望",time:2018,rate:7,tag:"奇幻/误解"},{name:"只有我知道这个世界是个游戏",author:"ウスバー",time:2012,rate:8,tag:"游戏"},{name:"被寝取的勇者由性转少女来拯救",author:"アネコユサギ",time:2016,rate:8,tag:"变嫁/奇幻/r18"},{name:"リコリス・リコイル Ordinary days",author:"アサウラ",time:2022,rate:8,tag:"百合/日常"},{name:"转生王女与天才千金的魔法革命",author:"鴉ぴえろ",time:2019,rate:7,tag:"奇幻/百合"},{name:"星刻的龙骑士",author:"瑞智士記",time:2010,rate:6,tag:"奇幻/后宫"},{name:"〈古典部〉系列",author:"米澤穂信",time:2001,rate:8,tag:"校园/推理"},{name:"我的青春恋爱物语果然有问题",author:"渡航",time:2011,rate:8,tag:"校园/恋爱"},{name:"末日时在做什么？有没有空？可以来拯救吗？",author:"枯野瑛",time:2014,rate:8,tag:"奇幻/恋爱"},{name:"龙王的工作！",author:"白鳥士郎",time:2015,rate:7,tag:"将棋/萝莉"},{name:"为美好的世界献上祝福！",author:"暁なつめ",time:2013,rate:8,tag:"搞笑/奇幻"},{name:"TS卫生兵小姐的战场日记",author:"まさきたま（サンキューカッス）",time:2023,rate:9,tag:"变嫁/战争"},{name:"谦虚踏实的生活下去",author:"ひよこのケーキ",time:2013,rate:8,tag:"校园/恋爱"},{name:"我的妹妹是最棒的配菜",author:"風見源一郎",time:2021,rate:8,tag:"日常/r18"},{name:"植物魔物娘日记",author:"水無瀬",time:2021,rate:6,tag:"百合/奇幻"},{name:"TS人渣碧池少女想被寝取",author:"二本目海老天マン",time:2022,rate:8,tag:"变身/误解/日常"},{name:"不在手游里拿到人气投票第一名就回不去！",author:"夢泉",time:2022,rate:7,tag:"变身/游戏"},{name:"一般性癖TS转生少女真白光绝望地渴望被拯救",author:"エテンジオール",time:2024,rate:6,tag:"变身/误解/日常"},{name:"TS转生手游女主角，偷偷抽烟的时候被主人公撞了个正着",author:"恥谷きゆう",time:2023,rate:7,tag:"变身/游戏"},{name:"龙神的巫女",author:"都森メメ",time:2021,rate:6,tag:"奇幻/变身"},{name:"TS转生魔法少女但属性是情报灾害",author:"忍法ウミウシの舞",time:2023,rate:7,tag:"奇幻/变身"},{name:"腐血的萨尔瓦多：TS反派外道转生",author:"WhatSoon",time:2023,rate:8,tag:"变嫁/奇幻"},{name:"转生的我不会放弃TS的~以美少女化为目标!",author:"不破ふわり",time:2023,rate:7,tag:"奇幻/变装"},{name:"深海余烬",author:"远瞳",time:2022,rate:8,tag:"科幻"},{name:"炮火弧线",author:"康斯坦丁伯爵",time:2024,rate:7,tag:"历史"},{name:"诡秘：善魔女",author:"囧囧哟",time:2023,rate:7,tag:"奇幻/同人"},{name:"舍弟诸葛亮",author:"浙东匹夫",time:2023,rate:6,tag:"历史"},{name:"家父汉高祖",author:"历史系之狼",time:2022,rate:7,tag:"历史"},{name:"天才俱乐部",author:"城城与蝉",time:2023,rate:6,tag:"科幻"},{name:"剧透历史：从三国开始",author:"冷泡茶加冰",time:2023,rate:7,tag:"历史"},{name:"宿命之环",author:"爱潜水的乌贼",time:2023,rate:6,tag:"玄幻"},{name:"篡清：我初恋是慈禧",author:"沉默的糕点",time:2023,rate:5,tag:"历史"},{name:"箱子里的大明",author:"三十二变",time:2023,rate:6,tag:"历史"},{name:"血之圣典",author:"咯嘣",time:2022,rate:6,tag:"奇幻/变身"},{name:"蒸汽之国的爱丽丝",author:"超究极武神崩坏",time:2022,rate:7,tag:"奇幻"},{name:"转生女妖，与重生千金拯救世界",author:"宇宙鸽",time:2023,rate:6,tag:"奇幻/变身/百合"},{name:"三国：我马谡只想作死",author:"蜀中剑士",time:2023,rate:6,tag:"历史"},{name:"魔法！",author:"学语新风",time:2023,rate:7,tag:"奇幻"},{name:"重生之心动",author:"初恋璀璨如夏花",time:2010,rate:8,tag:"日常/恋爱"},{name:"和她假戏真做了",author:"清汤涮香菜",time:2021,rate:7,tag:"日常/百合"},{name:"平生一顾",author:"楠安",time:2018,rate:7,tag:"日常/百合"},{name:"奋斗在苏俄",author:"懵懂的猪",time:2021,rate:8,tag:"历史"},{name:"网游之射破苍穹",author:"龙大人",time:2011,rate:6,tag:"游戏"},{name:"征服异界从游戏开始",author:"爱吃辣鸡粉",time:2020,rate:7,tag:"游戏/第四天灾"},{name:"花与剑与法兰西",author:"匂宮出夢",time:2014,rate:7,tag:"历史/修罗场"},{name:"爱丽丝梦游异境",author:"约书亚",time:2017,rate:6,tag:"奇幻/变身"},{name:"水色（短篇）",author:"逢坂琪",time:2017,rate:7,tag:"日常/变身"},{name:"二次元的影后指南书",author:"小迷",time:2019,rate:7,tag:"变百/日常"},{name:"致四千年后",author:"祈耳喵",time:2017,rate:7,tag:"历史"},{name:"但愿世界能和平",author:"月鸦",time:2016,rate:7,tag:"奇幻/变百"},{name:"圣母男主角不伺候了！",author:"阿布阿布",time:2021,rate:6,tag:"日常"},{name:"东京声士",author:"匿友小尘",time:2020,rate:7,tag:"日常/声优"},{name:"稻荷妖神记事",author:"天使末日",time:2019,rate:6,tag:"奇幻/变单"},{name:"我，你们的翅膀",author:"黑桐五更",time:2021,rate:7,tag:"日常/百合"},{name:"勇者爱丽丝的社会性死亡传说",author:"才不是H萝莉",time:2020,rate:7,tag:"奇幻/百合/萝莉"},{name:"我在东瀛当巫女",author:"清鸾",time:2020,rate:7,tag:"奇幻/变百"},{name:"我真不是邪神走狗",author:"万劫火",time:2020,rate:7,tag:"奇幻/迪化"},{name:"在黑暗组织当干部",author:"论外的我",time:2021,rate:6,tag:"奇幻/百合"},{name:"萝莉勇者饲养日记",author:"泯冬",time:2020,rate:7,tag:"奇幻/后宫/萝莉"},{name:"拷问官小姐只想摸鱼",author:"速冻玉米",time:2021,rate:7,tag:"奇幻/百合"},{name:"希茨菲尔探案集",author:"爱丽丝威震天",time:2021,rate:7,tag:"奇幻/变百"},{name:"穿越方式崩坏的鲁路修",author:"双子座的凌",time:2015,rate:6,tag:"同人/变嫁"},{name:"东京女公关",author:"栗子香糕",time:2022,rate:6,tag:"日常/变百"},{name:"成为了挚友的赛马娘",author:"醉猫",time:2023,rate:6,tag:"变嫁/同人/日常"},{name:"转生哥布林，姬骑士想拿我练级？",author:"咖啡中毒",time:2023,rate:7,tag:"奇幻/搞笑"},{name:"多萝西的禁密书典",author:"天使末日",time:2021,rate:8,tag:"奇幻/变单"},{name:"我怎么可能成为你的恋人，不行不行！(※不是不可能！？)",author:"みかみてれん",time:2020,rate:7,tag:"百合/日常"},{name:"无欲圣女",author:"中村 颯希",time:2016,rate:7,tag:"变身/误解/奇幻"},{name:"四个青梅竹马被勇者NTR了…咦？有一个人样子？",author:"鶴沢仁",time:2019,rate:6,tag:"奇幻"},{name:"TS转生女配角",author:"まさきたま（サンキューカッス）",time:2017,rate:7,tag:"奇幻/变嫁/r18"},{name:"我替神明写剧本",author:"地球popi子",time:2024,rate:6,tag:"日常/恶役"},{name:"新世纪厨男战士",author:"TheJinFu",time:2024,rate:7,tag:"乐子/奇幻/病娇"},{name:"女儿你懂不懂什么叫孝义啊！",author:"godineye",time:2024,rate:7,tag:"乐子/变嫁/奇幻"}],floorDetail$3=[{floor:"319",username:"万世常青",time:"2023-12-20 10:23",reply:"",comment:`<p>我感觉这个说话风格，楼主不像男孩子啊，感觉很多点不是男孩子会去在意的</p>
      <p><del>女大形象跃然纸上</del></p>`},{floor:"419",username:"kngchau",time:"2023-12-20 13:36",reply:"",comment:`<p>你们也太离谱了</p>
    <p>不过现在跟着坛友回顾一下当时的发言还挺好玩的</p>
    <p>收藏了！</p>
    <p>期待楼主的锐评</p>`},{floor:"420",username:"hejuujur",time:"2023-12-20 13:37",reply:"419",comment:"<p>咿呀！是本尊打过来啦！</p>"},{floor:"421",username:"kngchau",time:"2023-12-20 13:39",reply:"319",comment:`<p>其实虽然没想着故意隐瞒，一开始不太想暴露性别来着，所以发言挺中性的……这也能被看出来么？</p>
    <p>最最开始的时候有的内容还是朋友拿我手机总结了我的发言发上来的</p>`},{floor:"423",username:"kngchau",time:"2023-12-20 13:40",reply:"420",comment:"<p>带路党明明就是你呀！</p>"},{floor:"783",username:"kngchau",time:"2023-12-23 23:51",reply:"",comment:`<p>友人anon是美少女我不是</p>
    <p>毕竟我不光矮……还矮……(怨念)</p>`},{floor:"784",username:"而今听雨",time:"2023-12-23 23:55",reply:"783",comment:`<p>chaurin别这样，161很标准的美少女身高啦！</p>
    <p>ano酱也就160呢！</p>`},{floor:"785",username:"71和EU",time:"2023-12-23 23:57",reply:"783",comment:`<p>茶屋灵别这样，至少你品味很好</p>
    <p>某个友人A没你收拾，能给自己搭得不成样子不是</p>`},{floor:"787",username:"kngchau",time:"2023-12-23 23:58",reply:"784",comment:`<p>你们怎么还能记得我多高的</p>
    <p>记也给我记准一点啊！</p>
    <p>161.5！.5！</p>`},{floor:"790",username:"鬼龙影天",time:"2023-12-24 00:09",reply:"",comment:"<p>所以这个楼现在是：chaurin看楼主直播看chaurin直播看mygo？</p>"},{floor:"792",username:"kngchau",time:"2023-12-24 00:11",reply:"",comment:`<p>有没有一种可能，不是我的品味好，而是某人衣品太糟糕了哭</p>
    <p>每一个光鲜亮丽的女神背后，都站着一个默默支持她的女人(指本科那会每天晚上睡觉之前在穿搭APP上截图发给她)</p>`},{floor:"794",username:"kngchau",time:"2023-12-24 00:19",reply:"",comment:`<p>话说我是看了访谈才知道soyo喜欢玩手机是个宅女的，我觉得不合理，哪有宅女给人发了那么久消息才想起来看看自己是不是被屏蔽了的</p>
    <p>我隔好几天看不见一个人的朋友圈都要给她转账试试看看是不是被删好友了</p>`},{floor:"863",username:"明日下山",time:"2023-12-24 19:02",reply:"792",comment:`<p>是我们敬爱的chaurin！</p>
      <p>虽然关注点很奇怪但我能问一下是什么穿搭app吗</p>`},{floor:"887",username:"kngchau",time:"2023-12-24 21:18",reply:"863",comment:`<p>现在用的这个app叫“搭搭”，很推荐哦！</p>
    <p>
      就是你需要把你的所有衣服鞋子拍照，它可以帮你抠图存起来。之后你就可以在里面选搭配，它会帮你生成一个大致的效果图。不过如果是两个人用的话我不太清楚能不能共享账号，友人A手机上没有，我是直接把我俩衣柜各拍了一遍存手机上了，这样如果要出门的话起床之间先趴在床上把两个人的衣服搭配好再出门
    </p>
    <p>不在一起也可以远程帮她搭衣服</p>`},{floor:"953",username:"万世常青",time:"2023-12-26 20:59",reply:"",comment:`<p>其实楼高了以后看的人就少起来了，也有可能是直播直播楼有点太新了，我为什么不直接看直播楼呢对吧</p>
    <p>但是！细细品味chaurin的直播楼，感受一位和soyo特别能共鸣的，会日语的，特别敏感又细腻的，爱哭的女孩 99年的小男孩应该是喊姐姐</p>
    <p>仿佛又把我带回了一周前第一次点开mygo的感觉</p>
    <p>陪着一个月前的楼主一起欢笑，一起假药，一起 楼主这里真的是牵手互诉衷肠，你看我没骗你吧 和当初的嗜血长颈鹿一起嘴角上扬</p>
    <p>非常非常感谢茶屋灵分享的快乐和感动！mygo和你的直播楼我大抵是一辈子也不会忘记了！</p>
    <p>希望mujica开播以后我们可以继续一起追动画，一起造假药喔！XD</p>`},{floor:"955",username:"万世常青",time:"2023-12-26 21:48",reply:"",comment:`<p>chaurin楼里的长颈鹿们真的很有才，完结感言才华横溢的我自卑jpg</p>
    <p>但是那又有什么关系呢！毕竟只有我才是我，我在这世上就是独一无二的呀~</p>
    <p>所以当然~</p>
    <p>下面有写给chaurin的话~</p>
    <p>− 写给chaurin的~！ ...</p>
    <p>钝感的人有钝感的人的优势，敏感的人有敏感的人的长处</p>
    <p>能来看mygo并且能开心看下去的人应该大多都是比较敏感的孩子吧！</p>
    <p>chaurin的这份温柔，或者说每个人的温柔，背后其实一定都是有很多经历、挫折在的</p>
    <p>痛苦，悲伤，难过，酸与苦与辣与咸。</p>
    <p>但是，正因为你的一份善良，不愿意也不舍得让别人再经历这一份难过</p>
    <p>你就普通的变成了别人口中那个理所应当的温柔的孩子。</p>
    <p>可，“普通和理所当然是什么呢”？对每个人的温柔是理所应当的吗？</p>
    <p>柔软如剧中的soyo，温柔背后也有私心，是想要一个归宿和朋友陪伴罢了</p>
    <p>楼追下来，我很开心能够感受到chaurin的番剧分享与快乐！</p>
    <p>也期望chaurin，不用为自己的敏感难过，这是上天给予你的宝藏哦！要更喜欢自己多一点呀！</p>
    <p>做不到也没关系！我也是花了十几年不断尝试才逐渐慢慢的认可自己喜欢自己！</p>
    <p>何况你也有一位像海玲一样靠谱，又像anon一样可爱的友人a！这是特别特别幸运的事！两位都是！</p>
    <p>两位要做一辈子的朋友哦！听起来太重的话，两位当下的每时每刻都要一起，开开心心！</p>`},{floor:"957",username:"kngchau",time:"2023-12-26 23:14",reply:"955",comment:`<p>谢谢你！！感觉在NGA遇到了很多很善良很善良的人呢！</p>
    <p>我甚至有的时候都在想，我这个普通的女孩子怎么能配得上那么多陌生人的善意呢，我只能说我很幸运吧！</p>
    <p>而且坦白讲大家可能是带着一些滤镜看我的</p>
    <p>
      可能我在论坛的只言片语会让人感觉我是个开朗活泼的女孩子，其实并没有，我很敏感、有些内向、特别宅，会因为奇奇怪怪的事情emo，我其实一直都不喜欢这样的自己，很多时候因为一点小事哭出来的时候，会觉得“啊，你们这么不争气，这么点事情值得哭出来么？”，然后就因为生气自己怎么不争气哭得更凶
    </p>
    <p>而且坦白地讲，如果认识我的人尤其是关系好的人就会知道，我在常人眼里是有些“重女”的</p>
    <p>但是来NGA认识的朋友都是很好的人呀，所以我真心希望大家能从我这儿得到快乐，每次大家想听我的故事，我也都会在你说的“痛苦，悲伤，难过”那部分刹车( <del>楼友肯定也不想听我这个看起来乐观开朗的姑娘的沉痛过去</del>
      )。</p>
    <p>
      不过你说得对哦！我乱七八糟的人生中最幸运的事情就是从我记事起就有一个人一直陪伴，如果没有她的话我真的不敢想象我能不能坚持到现在。不过我感觉这些年运气一直都还挺不错的，现实中遇到的人，甚至网络上遇到的人都是很好的人，一路上受了大家许多照顾。
    </p>
    <p>哈哈哈，你这个感想莫名戳我，感慨了一堆有的没的呢！无论如何，楼主接下来的生活也一定要开开心心啊！有一个可能远在千里之外，素未谋面的陌生姑娘在给你祝福哦！(哦对，是两个</p>`},{floor:"958",username:"kngchau",time:"2023-12-26 23:27",reply:"",comment:`<p>友人A说如果你们知道前男友对我做的那些事会直接炸锅</p>
    <p>(其实没分手那会她就炸过很多次了，但是我一直以为只是她太关心我了</p>
    <p>我真以为我是普通地谈了段恋爱然后普通地无疾而终了，以及我对男孩子的了解有一半都从他那儿来，现在看来我要好好更新对男孩子的理解了</p>
    <p>以及，你们真的好暖！我感觉像是有一群可靠的娘家人支持我的快乐</p>`},{floor:"959",username:"kngchau",time:"2023-12-26 23:29",reply:"953",comment:"<p>我比你还小两岁呢！谁是你姐姐！</p>"},{floor:"960",username:"不存在的竹渊",time:"2023-12-26 23:36",reply:"",comment:`<p>借着这边的感谢也说一下自己感受吧
      现在对chaurin就是有那种，素未谋面，久仰大名，神交已久 的感觉</p>
    <p>也姑且以旁观者的角度聊聊吧</p>
    <p>
      对于chaurin“生气自己怎么不争气哭得更凶”这点，个人还是觉得不必在意的。感情细腻是好事啊，更何况你并不缺少能为你擦去泪水、拉你走出情绪低谷的挚友吧。某种程度上这也可以是一种独特的“恃宠而骄”呢，因为知道有人关心照顾，所以还能保留着这样的缺陷。
    </p>
    <p>至于重女嘛……因为实质压不到咱们身上，你讲述故事时候的感情指向的某人想必也不会介意这份沉重，故而对长颈鹿而言都是值得狂欢的内容呢。</p>
    <p>此外的话，虽然想听听所谓“痛苦，悲伤，难过”的故事——但是毕竟对于当事人而言，这大概不是什么好回忆，所以还是算了吧。毕竟chaurin现在这种温柔体贴的样子，肯定已经在陪伴下走出来了。</p>
    <p>嗯，零零散散自说自话，不过总之，chaurin接下来的生活也要平安快乐！</p>
    <p>——因为你们的故事而获得喜悦、体会温馨的同好在为你献上祝福！</p>`},{floor:"973",username:"kngchau",time:"2023-12-27 20:21",reply:"960",comment:`<p>你好呀竹渊桑！包括你在内的很多ID我也都神交已久哦</p>
    <p>谢谢你啦！但是我苦恼的一部分就是来自这种“恃宠而骄”呀</p>
    <p>经常反思自己是不是太麻烦了，是不是给某个人帮我擦眼泪的人造成了太大的负担，自己是不是只是“被偏爱有恃无恐”。所以很多时候宁愿多起来偷偷哭。</p>
    <p>至于重女，可不就是因为实际上压不到你们身上吗</p>
    <p>所以我觉得我适合当朋友不适合当恋人……</p>
    <p>另外我的过去，毕竟都过去了，早就跟自己和解了，现在说起来也没有什么波澜，我只是觉得说出来会坏了大家的好心情而已，既然有人想知道我就说两句嘛</p>
    <p>我会用折叠了！快夸我！(</p>
    <p>不想看的朋友就不要看了哦！真的会坏心情的！</p>
    <p>− 点击显示隐藏的内容 ...</p>
    <p>嘛，我觉得最坏心情的反而是那种“所有人都没有错，但是最后就是BE了”的故事。所以就不讲那种故事了！</p>
    <p>
      人生中经历的有明确的“坏人”的事，大概就是中学时代，大概是初二之后吧经历了好多年的，现在来看应该叫霸凌吧，但是当时完全没有这种概念。就是影视剧总给人一种刻板印象就是被霸凌的女孩子都是那种孤僻内向长相普通甚至有点被攻击“丑女”的类型，我自认我长得也还可以吧，初中的我也还算开朗，至少比现在开朗多了。初二之后胸部开始发育得比较明显，至少是比同龄女生也明显很多的，结果不知道什么时候大家开始传一些谣言，一开始是我在跟外校的学生谈恋爱，后来就变成了我跟一个不存在的人上过床，再后来就变成那种很难听的话，就是荡妇羞辱那种话。
    </p>
    <p>
      我本来以为这事初中毕业就完了，结果上了高中又不知道是谁把以前这些谣言传开了，后来发展成那种，我不知道你们的高中有没有那种，下课一群小团体会扎堆在外面闲聊，然后我经过的很多小团体都会起哄。这些事我也不好意思跟家里人说，也觉得这种事不太想和老师说，因为老师眼里我毕竟还是个乖乖女，我去说这种事总感觉很不好。反正那会每天起床一睁眼，感觉就是灰色的一天，就会特别抗拒去学校，说话越来越少，特别期待秋天和冬天。因为天一冷就可以穿上校服外套，我校服外套是买了大一码的，夏天穿夏季校服有时候早上穿上那个衣服照着镜子我都能哭出来，因为看到镜子里的我就能听到他们在说什么。也干过很多蠢事，比如含胸走路，比如晚上穿着小一码的文胸睡觉希望能不能裹小一点，比如特别想买的那种裹胸布，虽然被我妈严厉制止了
    </p>
    <p>
      之前还在其他论坛看到有中学女生提问怎么能让胸变小一点我真的很能切身体会。当时我们高中我们按成绩选座位，我成绩还不错总是能先选，但是我旁边的位置总是能空到最后一个人，可能也不是刻意孤立我，只是气氛变成了那种谁跟我主动坐在一起会被大家投以异样的目光，大家就不敢选了……反正后来除了友人A我也没什么朋友了(后来以至于搞得她也没什么朋友了)。后来想想那会精神状态大概就是抑郁症吧，但是当时也没有意识到，意识到了应该也不会想去治疗。我印象特别深刻的一件事是，我在那里之前完全不知道评价一个女孩子“公交车”是什么意思，后来搜到之后特别崩溃，哭了好长时间(当然现在的我只会回一句：傻逼)
    </p>
    <p>
      一些我觉得很不靠谱的猜测：据友人A后来打听到的，最早好像是从一个男孩子开始传的。她打听到的情报是那个男孩子喜欢我，不知道怎么的后来开始造我黄谣。友人A本来很想去找他麻烦的，被我拦住了。因为其实他跟我没太大交际，甚至都没来找我表白过，完全不可能对我凭空产生敌意吧？所以我觉得应该是道听途说不可靠(但是这段是她坚持要我写上的)
    </p>
    <p>哎呀输出了好多负能量！你们看了不要心情不好啊，我现在早就看淡了哈哈哈哈！本小姐身材这么好有什么可自卑的。</p>
    <p>另，友人A坚持说我还遇到过另外一个坏人就是前男友，但是我觉得，他应该也不是那么坏吧？(完了友人A暴跳如雷了)</p>`},{floor:"974",username:"typeomicron",time:"2023-12-27 20:41",reply:"973",comment:`<p>长颈鹿们，愤怒了！</p>
      <p>chaurin信不信但凡有些关于那位的信息大家真的会组队寄刀片</p>`},{floor:"979",username:"kngchau",time:"2023-12-27 21:15",reply:"974",comment:`<p>− 以下是友人A的激情开麦，会引起强烈不适，建议不要点开 ...</p>
    <p>我不行了，我不能忍了，我他妈要激情开麦了！</p>
    <p>我实在忍不了你们chaurin的“前男友只是大男子主义了点，本质应该不是个坏人”的发言了！</p>
    <p>我他妈要给你吐槽她前男友那个傻逼都干过什么傻逼事了！</p>
    <p>
      傻逼跟她一起出门，他没花过一分钱，一分钱都没花过哦一分钱！他们约会还总是去些挺不错的，人均好几百的馆子或者小酒吧之类的，傻逼从来不买单。她还老是跟我说什么“两个人在一起就是要互相帮助”啊，“他家里条件不好她就多出点，反正她也不是付不起”之类的话。这不是付不付的起的问题啊！这是态度问题啊！我不说两个人谈恋爱账单AA吧，至少付出差不多吧，你付不起你他妈别让你女朋友带你去啊！
    </p>
    <p>这也就算了，有一次他们吵架，就当着我的面，当！着！我！的！面！，就狠狠推了她一把，差点没把推倒。我当场给了他一巴掌他竟然还想还手。我问你们chaurin楼主那傻逼有没有动手打过她，她说没有，我反正是不信。</p>
    <p>这也还就算了，最他妈让我血压爆炸的是！傻逼在他们的一个游戏群里，就炫耀，大意就是钓了个正妹，还拿了一血之类的恶心话，游戏群里有个跟我关系还不错的哥们，就私下暗示了一下这个事。我反正直接他妈的直接五雷轰顶好吧！！！！</p>
    <p>这事之后我直接把她拉过来，让她当天分的手。</p>
    <p>草草草！晦气！</p>
    <p>我人生中说出的脏话有一半都是因为这个臭傻逼！</p>
    <p>你们就说你们赞同谁吧！</p>`},{floor:"988",username:"kngchau",time:"2023-12-27 21:49",reply:"",comment:`<p>哎呀哎呀大家不要这样啦！！</p>
    <p>我当然知道前男友不是什么好人啦(虽然但是大家反应这么激烈还是出乎我的意料</p>
    <p><del>原来友人A骂我傻白甜竟然是真的么</del>)感觉大家都有在好好站在我的角度关心我呢，被大家暖到哦！</p>
    <p>不过我不想因为听了我的事惹大家不开心呀！！！刚才是友人A上头了实在没拦住，怪我怪我！我拉她上床看剧去啦，大家消消气哦！不然我会难过的！</p>`},{floor:"989",username:"kngchau",time:"2023-12-27 21:50",reply:"",comment:"<p>以及你们还记得这是常青桑的直播楼嘛！我们在这儿聊这些有的没的楼主应该会介意的吧</p>"},{floor:"1001",username:"万世常青",time:"2023-12-27 23:43",reply:"",comment:`<p>chaurin，大家只是在为你过去受到的委屈生气喔！这个时候就不用再说别生气啦！</p>
    <p><del>下次不要喊楼主啦，要好好喊常青喔！</del></p>
    <p>− 这段话是专门夸夸友人a的 ...</p>
    <p>友人a！我的海1！超人！傻白甜小笨蛋chaurin的守护神！！</p>
    <p>青春期的烦恼是很正常的！如果chaurin或者友人a感兴趣的话我也很乐意分享一下我的故事~</p>
    <p>我也有一些从小一直陪伴到现在的朋友！虽然很可惜没有能像友人a和chaurin这样同居这么亲密 太男同了 虽然也不是没和哥们一起睡过</p>
    <p>能这样一路走过来确实很不容易！陪着被谣言卷入漩涡的chaurin，因为chaurin的谣言可能导致自己也被孤立但是仍然义无反顾的陪在他身边</p>
    <p>而且能让很明显很容易缺少安全感的chaurin这么放心的依靠你，友人a你是个特别特别靠谱的人！不论是谁有你这样的朋友都是超级幸运的！</p>
    <p>衣品什么的放一边去了！看好傻白甜小chau不要再被臭人骗了！！！她这个性格最容易被坏人骗了！最容易！</p>`},{floor:"1002",username:"hejuujur",time:"2023-12-27 23:46",reply:"959",comment:`<p>啊？chaurin是01年的，研究生？</p>
      <p><del>这笔账怎么算不对，01年的不应该跟我今年一起考来着吗</del></p>
      <p>发现也没什么算不对的，我室友就21的，也就是我和chaurin是同一届的，只是我二战了</p>
      <p>话说发现自己比学姐大一岁，心情逐渐复杂</p>`},{floor:"1004",username:"kngchau",time:"2023-12-28 10:47",reply:"1002",comment:"<p>哈哈哈哈，初试现在应该考完了吧，祝你顺利上岸哦！ <del>(学弟哥哥加油)</del></p>"},{floor:"1005",username:"hejuujur",time:"2023-12-28 10:49",reply:"1004",comment:`<p>唉，不说伤心的话题了</p>
  <p>chaurin看二创的时候有没有看过日本乐队人看mygo系列啊，没看过的话推荐哦</p>`},{floor:"1006",username:"kngchau",time:"2023-12-28 10:51",reply:"",comment:`<p>知道啦知道啦，我会好好听话的！</p>
    <p>以及，楼友的故事，想听！(又多了一对可以磕的好兄弟了么嘻嘻嘻嘻)</p>
    <p>btw，友人A现在衣品好多了，毕竟衣柜里以前她自己买的衣服都被我捐了</p>`},{floor:"1007",username:"kngchau",time:"2023-12-28 10:51",reply:"1005",comment:"<p>没看过哎，我去搜来看看！</p>"},{floor:"1009",username:"CNSCVN春蘭",time:"2023-12-28 12:26",reply:"1006",comment:`<p>又？</p>
    <p><del>关键词察觉</del></p>`},{floor:"1010",username:"林猫音",time:"2023-12-28 12:30",reply:"1006",comment:`<p>嘛，嘛啊…</p>
    <p>有些故事是不太能在楼里讲的，讲了的话楼里的重点就是我了(biz)</p>
    <p>不过我这里id还是林风音?我去改一下(。</p>`},{floor:"1014",username:"kngchau",time:"2023-12-28 20:51",reply:"1009",comment:"<p>上一个磕的不就是你嘛，耳机线画师大佬(我错了</p>"},{floor:"1015",username:"kngchau",time:"2023-12-28 20:53",reply:"1010",comment:"<p>楼友想讲故事大家应该都爱听的嘛！当然是要挑能讲的，自己愿意去回忆的那些讲就好啦</p>"},{floor:"1018",username:"林猫音",time:"2023-12-28 21:08",reply:"",comment:`<p>− 故事折 ...</p>
    <p>其实就是自己的初恋啦。</p>
    <p>当时有在文学社写东西的习惯，然后认识了个风格跟自己完全不一样的同学，那位跟我的风格完全反过来，当时我写东西的时候满脑子的粉红泡泡很喜欢把自己往里代，文学社上到老师下到编辑都觉得我是美少女，后来就认识了那位同学。</p>
    <p>两个人不在一个校区，当时大家又都没有手机，所以就靠文学社两边送信联系着，后来因为我的问题两个人吵了一架，就暂时分开了
      然后等我上高三她已经上大学的时候，她回头给文学社供稿回忆了一下自己的高中生活，然后说高中时期的朋友的时候点名了我，还说猫音怎么你又改名字了，然后我才意识到她不仅没生我的气还一直在看着我，知道我改名字了这件事</p>
    <p>然后在一位现在还在联系的学姐的帮助下两个人重新认识了，之后对方才发现都错判了彼此的性别</p>
    <p>又过了一段时间，我被一个网恋失败的女孩子缠着，然后她跟我说，我想缠着你还没有机会，两个人就这么谈上了</p>
    <p>
      高中时期的恋爱总是纯洁又(下略)的，两个人说了很多也做了很多，我还记得她跟我第一次见面是高考倒数前两天，我说高考前想跟她见面，她跟我说我正好身体不舒服回家两天——现在想想她身体不舒服就不舒服好了，为什么非得回家——然后发生的事情我现在都记得很清楚
    </p>
    <p>那是10.24，当天太阳很好，她穿着黑色的长纱裙在我们班门口问我，说猫音在吗？我点了点头，她当着全班的面把我牵出了教室，高跟鞋的声音很好听。</p>
    <p>那会好死不死正是龙族流行的时候.jpg</p>
    <p>然后她还陪我看了考场，两天双方分别的时候都以拥抱做结。</p>
    <p>之后大家过了一个很开心的暑假，一起做了很多也玩了很多，但那会高考的时候她跟我家里人都劝我说不要总想着她，要为自己考虑考虑……就没有考到她所在的城市。</p>
    <p>
      结果后来因为我的幼稚，啊不对，当时的我就tm是纯傻逼，两个人的关系开始有裂痕，分手的时候我说我可以为她改变自己，我也在做了，然后她哭着问那你为什么没来北京把我问蒙了，两个人都哭着分的手，后来因为我的问题，两个人就从初恋到朋友关系再到陌路
    </p>
    <p>之后的故事就没有什么可讲的了，我发现自己失去了恋情，追求不了前程，以恋情为交换的那所学校也根本没有去的意义，因此就 分化成了需要天天吃抑制剂的omega 被严重的精神问题困扰着，直到今天，已经七年了</p>
    <p>当然现在的猫音是在逐渐的变好的，还有群友给我写情书.jpg</p>
    <p>总之这就是我的故事了，希望茶屋零听得开心，现在我也看得很开，过去的就过去吧，让它成为我的一部分，就不要总想着挖出来看看了</p>
    <p>以上，祝看到这里的每个人身体健康</p>`},{floor:"1024",username:"万世常青",time:"2023-12-29 13:03",reply:"",comment:`<p>看完青春伤痛当然要补一些小甜饼啦，这楼就让chaurin爽嗑w前面折叠的也写好啦</p>
    <p>− 让你见识一下男孩子的高浓度友情-z ...</p>
    <p>我这个性格来说也是，交的朋友不算很多，但是玩到现在的朋友关系都非常好</p>
    <p>挚友小z：认识十五年！小学转学来我的隔壁班，熟络起来是在初中上学的时候每天乘公交车一起回家。那个时候我的语文老师特别严格！我经常要放学被留一个小时。我这个轴哥们就硬等呀，一直等到我写完一起回家才走。</p>
    <p>
      初二的时候iTouch刚出嘛，小男孩对新奇的数码产品当然都是好奇的。他就找我借了400元去买一个iTouch。不过我那个时候坚信他肯定不会骗走我的钱。我不相信一周多等三次一个小时也要陪我回家的人会骗我。当然，纸肯定包不住火，后来还是被家长发现啦。被狠狠的说了一通。
    </p>
    <p><del>后来他天天说我傻逼怎么天天轻信别人，人太好了要受伤的，可恶</del> 后来他这个钱也还我啦。但是友谊凝固下来了！</p>
    <p>高中分开了三年，大学后来慢慢又联系上了，还认识了他的一圈高中好友！我们现在一圈大概五六个人玩的特别好～。</p>
    <p>啊你说为什么是五六个？圈里有一位女孩子小l和我的轴哥们小z谈恋爱啦～！至于后面甜蜜的谈了三年又分手，分手以后半夜我们五个找警察找到因为抑郁吃过量安眠药倒在草丛里的小l送去抢救的细节就先不说啦～</p>
    <p><del>不再喊我楼主或者楼友，好好称呼常青的话就给你讲哦～哼哼哼w</del></p>`},{floor:"1026",username:"kngchau",time:"2023-12-29 14:05",reply:"1024",comment:`<p>好滴收到常青桑</p>
    <p>甜甜甜！这样的感情真是好呀！我超能理解常青的想法的！就是嘛，一周多等三次一个小时也要陪我回家的人怎么可能会骗我，而且这样的人就算骗我我也认了呀，至少他此前输出给我的情绪价值不是假的！</p>
    <p><del>友人A又骂我了，骂了跟你好哥们一样的话，还说她跟你好哥们狠狠共情了</del></p>
    <p>不过小L好让人心疼呀，看的出来她跟你哥们感情真的很好呀哎</p>`},{floor:"1027",username:"kngchau",time:"2023-12-29 14:11",reply:"1018",comment:`<p>啊这，看完真怀疑你是不是江南本人</p>
    <p>昨天阴天适合出片，出门拍了好多还不错的照片，回来一张一张挂在墙上啦；今天中午点了一份披萨吃的好开心；今天外面有点湿冷，大雾，下午准备猫在被窝里刷MyGO二创！</p>
    <p>生活就是这样嘛，它有很多真的让人非常非常痛苦的事情，又有很多虽然不会让人欣喜若狂，但是会让人会心一笑的点点滴滴，大家一起面对这样的人生吧！</p>`},{floor:"1036",username:"万世常青",time:"2023-12-30 13:21",reply:"1026",comment:`<p>好！那我们就是好朋友了～！嘿嘿(anon傻笑)</p>
    <p>− 癫火难耐，不要点开 ...</p>
    <p>友人a！！！我必须立刻拥有你的联系方式然后狠狠的夸夸你！！！！！</p>
    <p><del>开玩笑的开玩笑的不是真要真不用给</del></p>
    <p>我从读书的时候我就想不明白你们这种人是图什么！！</p>
    <p>就因为小学认识了一两年又恰好进了一个初中下班一起走，就愿意甚至不是自己的错陪着晚放学？次次如此？</p>
    <p>就因为两家人似乎从小认识，不惧被充满恶意的谣言一同伤害也要陪在她身边？ <del>只是隔着屏幕的妄加猜测，我觉得当时的情况一定难过万倍</del></p>
    <p>这是一句兄弟情或者闺蜜情能够概括的吗？</p>
    <p>真的真的感谢，敬爱你们。打心底里觉得chaurin和我非常幸运，还好有你们。</p>
    <p>− 答应茶屋灵的更新～后面的好哥们故事就不会这么重啦 ...</p>
    <p>我的哥们小z是一个比较典型的事业型小伙，做事情会经常想着去冲一把，拼一把的那种类型。大学的时候是怎么重新联系回来了呢？因为他实在是顶不住压力了，想找一个放的下心的朋友倾诉。自然就找到我了。</p>
    <p>在烤串桌子上，我才知道他大学里又做学生会长又做团委书记什么的，三四个职位吧，每天从早到晚材料策划案一堆事常事。我劝着他也慢慢辞了一些职务。总归是不希望哥们太累的嘛！</p>
    <p>恢复联系以后，他把他的高中的朋友也介绍给我啦。两个女孩子，三个小伙子。 <del>英文太麻烦了还是打外号吧</del> 小z是阿朱，小伙子们是阿廖，阿牛和阿萌，女生是小杨和小罗(是女生小l)</p>
    <p>因为阿朱一直挺照顾小罗的，高中的时候小罗一直管阿朱喊妈hhhh，阿牛和小杨是情侣～。 <del>不过在我们认识的时候分手了</del>，一直到最近才复合</p>
    <p>然后到大学以后，阿朱和小罗感情还是很不错的嘛～我们经常也会一起去个迪斯尼呀，周边民宿啊之类的，一起出去玩。慢慢的他们俩就在一起了。我们出去玩都是六个人一起噢！那段时光还是很开心的～</p>
    <p>等到工作以后，阿朱进了银行工作，小罗去了对口的社区医院。阿朱一直也没变，进了银行也是努力工作。真的好忙喔！每天早九晚七，加班到十都是家常便饭。</p>
    <p>介绍一下我们的小罗！她是在高中的时候就要靠药物治疗的抑郁，还有比较严重的肠胃炎。细心的chaurin应该也能猜到。是的！我们线下一起玩的时候真的只能看见一个开朗活泼的姑娘，但是看不见的地方真的是个敏感，感性，缺少安全感的女孩。
    </p>
    <p>在我们哥们几个看不见的地方，俩人吵架的次数也越来越多。两个人的家庭环境其实都不错。女孩子希望小伙子能多陪陪她，工作无所谓反正不差钱。小伙子希望自己能做出一番事业，真正开一片能和女孩子安心生活的地方。</p>
    <p>他婚房都买好了耶！在上海诶！</p>
    <p>他们提出‘‘先做回一段时间朋友吧’’是上海封控前的时候</p>
    <p>后面的故事我不评论对错，只说故事哦。</p>
    <p>女孩子在玩王者排解时间的时候认识了一个代练弟弟。刚上大一的小朋友。打了几个月，这个臭小孩说要奔现。趁着去年上海特殊时间前，臭小孩跑过来，来找了女孩子。</p>
    <p>中间发生了什么，谁都没有让任何人知道。</p>
    <p>只知道在特殊时间结束后，臭小孩又来找了一次女孩子。两个人吵的很厉害。深夜。女孩子的出租屋。一男一女。臭小孩喊着你要跟我分手我就自尽。他拿起了女孩子家里的剪刀对着自己，作势就要戳下去。</p>
    <p>女孩子很害怕，伸手就要去夺剪刀。女孩子的力气当然比不过一个男生。唰。女孩子的手上被剪刀划出来四道口子。女孩子彻底害怕了，什么也不顾，甚至不怕自己的东西被刚见过两面的臭小孩偷走，夺门而出。</p>
    <p>其实当初最正确的选择应该是报警。但是情绪压下来，chaurin应该很能感同身受。当时，家里人的妈妈在西部支教，爸爸在出差。猜猜女孩子去了哪里？</p>
    <p>是了。阿朱家。</p>
    <p>一直到现在都放不下的阿朱家。</p>
    <p>我不知道阿朱那天的情绪得有多么的五味杂陈。</p>
    <p>我更加不知道我事后听说，小罗偷偷跑出去外地去做一个我不太好和chaurin直接说的手术还做出了医疗事故不仅拿不到赔偿还被多收费的时候，每个人是什么心情。</p>
    <p><del>我真是局外人，好多事情都是事后才知道</del></p>
    <p><del>也许正是因为如此才能接着陪着大家吧</del></p>
    <p>时间来到九月份。虽然特殊时期过了，但是我还是需要在一线抗疫。当我夜班终于走出实验室能够喘口气的时候，我看到我微信上面有十个微信电话未接。下面还有其他兄弟的文字留言：</p>
    <p>20：22
      赶紧来。
      小罗失踪了。
      她给你发过消息吗？</p>
    <p>21：30
      黄浦警方找到了人了。
      倒在立交桥的草丛里面。
      来xx医院。</p>
    <p>赶紧跟同事交代情况请了假，打车赶过去。
      一个小时。</p>
    <p>抢救室担架上面，脸色苍白的小罗刚刚洗过胃。几十片安眠药。意识刚刚朦朦胧胧恢复。
      六个人都在。很讽刺，这是六个人最后一次齐聚。</p>
    <p>阿朱坐在床边握着小罗的手。两个哥们和小杨姑娘在抢救室被医生赶在门口。
      两位兄弟把刚刚我讲给chaurin的故事来龙去脉和我说了一下。</p>
    <p>小罗的情况好一点了，醒来了。</p>
    <p>小罗的爸爸赶来了。打通了小罗妈妈的电话。
      两位家长哭着在感谢我们几个朋友救了小罗一命。</p>
    <p>一点钟。没有大家能做的事情了。阿朱陪了通宵，其他人回家休息了，我回单位继续工作。
      不过等我三点回到单位的时候发现同事留了字条让我安心休息他们把工作做完了。谢谢你们呀。</p>
    <p>后来吗？没有特别多的后续了。
      小罗和阿朱不联系了。我们六个人维持着朋友，但是是各自的朋友。
      小杨是小罗的发小闺蜜，她站在小罗那边，对我们有点不太开心。但是在事件之后和阿牛复合了。可喜可贺。
      在阿朱面前提到小罗脸色会特别难看。陪着阿朱听了一年的分手快乐。三点钟在街边垃圾桶喝吐。有次唱歌突然毫无征兆的摔碎了酒瓶倒在沙发上哭哭累了睡。给他送回家。等等，等等。</p>
    <p>希望时间再多抚平一点创伤。</p>
    <p>挺长的～慢慢看噢</p>`},{floor:"1044",username:"kngchau",time:"2024-01-02 23:54",reply:"",comment:"<p>常青桑新年快乐哦！！</p>"},{floor:"1046",username:"kngchau",time:"2024-01-03 00:20",reply:"1036",comment:`<p>想要友人A的联系方式先排队哈，过去一年不知道听到过来自多少人的这种要求了</p>
    <p><del>我才不给，她是我的！</del></p>
    <p>− 来自友人A的回复 ...
      就是因为不图什么才会这样做呀嘻嘻嘻！如果你想问的是我高中时的那事，害，我是真没啥感觉，嘛，好吧，还是偷偷哭过，但是大部分时候都会觉得很无所谓。我当时就是这么想的：会跟着流言人云亦云，因为一些子虚乌有的传言就去中伤别人的人，我看不起他们，我有什么必要在意这种人的评价，有什么必要因为失去这种人的友情而伤心呢？我倒是要谢谢你们的chaurin，因为她的事我能在刚入学的时候就看清楚一些人的真面目，避免我的感情错付给不必要的人~所以你的好兄弟也好，我也好，我们的想法都没有什么特别的呀，一段珍贵的感情，远远比被傻逼中伤，远远比每周几个小时的等待要重要得多呀！高中的我如果不去保护她，我只会收获一个痛苦的她，自责的我，一些并不重要的人的虚情假意的“友情”，这不是血亏么？？
    </p>
    <p>− 来自chaurin的读后感： ...
      哎，人生啊！真的很感慨阿朱和小罗两个人的情感和经历。我真的非常非常能理解小罗为什么要跑出去找阿朱，换成是我的话，我可能也会这样，两个人心里肯定都有对方很重要的位置吧。但是都这样了两个人最后没能走到最后也可能有他们的苦衷！</p>
    <p>之前说过，我觉得最让人难过的事情，不是那种遇到坏人的难过，是那种明明没有人又做错什么，但是事情就是变得没能让所有人都幸福起来。</p>
    <p>
      我是陌生人，听到的也是一个经过转述甚至是二次转述的故事，但是衷心地祝福她们两个都能各自获得幸福的人生，也祝你们几位的友情(包括爱情)能长长久久！我也有一些可能得一两年才能见上一面，好多年才能团聚一次的朋友，这种多年异地还能一切如旧的朋友我觉得非常珍贵哦！
    </p>
    <p>お幸せに！(真心)</p>`}],floorDetail$2=[{floor:"0",username:"而今听雨",time:"2023-11-24 20:19",reply:"",comment:`<p>本帖是目前mygo直播最高楼帖子的楼层索引：</p>
    <p>[mygo直播贴] 被朋友拉来直播mygo了，模拟追番，一天一集(尽量)不多看(第11/13话)</p>
    <p>(又称ansy直播帖、soyo女士亲自直播楼、soyo带你看mygo、mygo观影体式直播楼、acha直播楼)</p>
    <p><strong>以下索引是不包含剧透的，每一话开始位置</strong></p>
    <p>警告：如果你想获得最好的补番(？)体验，请从只从这里点索引，不要往下翻了！下面我要发亮点位置了！</p>
    <figure class='table-figure'>
      <table>
        <thead>
          <tr>
            <th style='text-align:left;'>第1话开始</th>
            <th style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728046560&amp;opt=128' target='_blank'>第56楼</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style='text-align:left;'>第2话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728054978&amp;opt=128' target='_blank'>第85楼</a></td>
          </tr>
          <tr>
            <td style='text-align:left;'>第3话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728066755&amp;opt=128' target='_blank'>第112楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第4话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728100988&amp;opt=128' target='_blank'>第194楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第5话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728113527&amp;opt=128' target='_blank'>第270楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第6话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728195355&amp;opt=128' target='_blank'>第361楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第7话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728276245&amp;opt=128' target='_blank'>第459楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第8话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728318265&amp;opt=128' target='_blank'>第684楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第9话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728364483&amp;opt=128' target='_blank'>第1053楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第10话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728415748&amp;opt=128' target='_blank'>第1583楼</a>
            </td>
          </tr>
          <tr>
            <td style='text-align:left;'>第11话开始</td>
            <td style='text-align:center;'><a href='https://bbs.nga.cn/read.php?pid=728705794&amp;opt=128' target='_blank'>第2153楼</a>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>`},{floor:"1",username:"而今听雨",time:"2023-11-24 20:22",reply:"",comment:`<p>精彩楼层和简述</p>
    <figure class='table-figure'>
      <table>
        <thead>
          <tr>
            <th>根据PV和官方的自我介绍推断角色第一印象</th>
            <th><a href='https://bbs.nga.cn/read.php?pid=728010018&amp;opt=128' target='_blank'>第27楼</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>剪切线第一次发力</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728047028&amp;opt=128' target='_blank'>第58楼</a></td>
          </tr>
          <tr>
            <td>朋友酱第一次间接出场</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728053705&amp;opt=128' target='_blank'>第82楼</a></td>
          </tr>
          <tr>
            <td>吐槽op剧透</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728056287&amp;opt=128' target='_blank'>第89楼</a></td>
          </tr>
          <tr>
            <td>发现路人海玲</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728057783&amp;opt=128' target='_blank'>第95楼</a></td>
          </tr>
          <tr>
            <td>希望soyo利用爱音复辟的回旋镖</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728068554&amp;opt=128' target='_blank'>第121楼</a></td>
          </tr>
          <tr>
            <td>开始回顾1-3话</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728078204&amp;opt=128' target='_blank'>第146楼</a></td>
          </tr>
          <tr>
            <td>四姐妹说的最初提出</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728103492&amp;opt=128' target='_blank'>第203楼</a></td>
          </tr>
          <tr>
            <td>soyo挺武帝一辞挺王于爱音</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728106469&amp;opt=128' target='_blank'>第218楼</a></td>
          </tr>
          <tr>
            <td>很早就在共情soyo</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728110644&amp;opt=128' target='_blank'>第249楼</a></td>
          </tr>
          <tr>
            <td>锐评碧天伴走，丝毫不知大的要来了</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728280444&amp;opt=128' target='_blank'>第487楼</a></td>
          </tr>
          <tr>
            <td>被春日影破防</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728282256&amp;opt=128' target='_blank'>第512楼</a></td>
          </tr>
          <tr>
            <td>楼友整活“手牵手互诉衷肠”</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728284161&amp;opt=128' target='_blank'>第555楼</a></td>
          </tr>
          <tr>
            <td>“如果soyo看到这个帖子，肯定会指着楼主说：天啊这根本就是我”</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728288558&amp;opt=128' target='_blank'>第612楼</a></td>
          </tr>
          <tr>
            <td>楼友整理的第7话反应合集</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728289412&amp;opt=128' target='_blank'>第621楼</a></td>
          </tr>
          <tr>
            <td>继续发展四姐妹说</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728323793&amp;opt=128' target='_blank'>第715楼</a></td>
          </tr>
          <tr>
            <td>soyo惊世一跪</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728330401&amp;opt=128' target='_blank'>第809楼</a></td>
          </tr>
          <tr>
            <td>第9话开头彻底共情soyo</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728365532&amp;opt=128' target='_blank'>第1069楼</a></td>
          </tr>
          <tr>
            <td>“立希还好没说出来”</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728373792&amp;opt=128' target='_blank'>第1176楼</a></td>
          </tr>
          <tr>
            <td>被立希给anon扔直球发言破防</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728374797&amp;opt=128' target='_blank'>第1202楼</a></td>
          </tr>
          <tr>
            <td>顶级节目效果：手里只有9话资源</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728377691&amp;opt=128' target='_blank'>第1297楼</a></td>
          </tr>
          <tr>
            <td>指着soyo说“这简直就是我”</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728424906&amp;opt=128' target='_blank'>第1677楼</a></td>
          </tr>
          <tr>
            <td>anon第一次上号发言</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728427091&amp;opt=128' target='_blank'>第1692楼</a></td>
          </tr>
          <tr>
            <td>楼主的过去</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728436091&amp;opt=128' target='_blank'>第1758楼</a></td>
          </tr>
          <tr>
            <td>女性视角看mygo：soyo的头发和背带</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728514338&amp;opt=128' target='_blank'>第1871楼</a></td>
          </tr>
          <tr>
            <td>soyo0争1</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728517375&amp;opt=128' target='_blank'>第1884楼</a></td>
          </tr>
          <tr>
            <td>直播楼的二创图</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728518899&amp;opt=128' target='_blank'>第1888楼</a></td>
          </tr>
          <tr>
            <td>发糖(？)</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728701209&amp;opt=128' target='_blank'>第2081楼</a></td>
          </tr>
          <tr>
            <td>全网最新的soyo(本人)理解</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728716523&amp;opt=128' target='_blank'>第2341楼</a></td>
          </tr>
          <tr>
            <td>soyo挺武帝二辞挺王于立希</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728720325&amp;opt=128' target='_blank'>第2422楼</a></td>
          </tr>
          <tr>
            <td>女性视角看mygo：锐评爱音的服装审美</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728718134&amp;opt=128' target='_blank'>第2379楼</a></td>
          </tr>
          <tr>
            <td>被11话完全破防</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728727307&amp;opt=128' target='_blank'>第2593楼</a></td>
          </tr>
          <tr>
            <td>长颈鹿集会(读评论)</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728729754&amp;opt=128' target='_blank'>第2639楼</a></td>
          </tr>
          <tr>
            <td>温柔朋友酱上线</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728869556&amp;opt=128' target='_blank'>第2843楼</a></td>
          </tr>
          <tr>
            <td>朋友酱暴露同居</td>
            <td><a href='https://bbs.nga.cn/read.php?pid=728870190&amp;opt=128' target='_blank'>第2846楼</a></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>欢迎补充！</p>`},{floor:"2",username:"彩色的月",time:"2023-11-24 20:34",reply:"",comment:"<p>怎么连直播楼导引都有了……我见识少，这很正常吗？</p>"},{floor:"4",username:"而今听雨",time:"2023-11-24 20:38",reply:"",comment:`<p><img src="/image/4.jpg" style="zoom: 80%;" /> </p>
    <p>一个有趣的数据分析：每一话楼层数的变化(注：12话还没播，统计截至今晚8点)</p>`},{floor:"5",username:"瓜山熏",time:"2023-11-24 20:54",reply:"",comment:"<p>这个楼最草生的还是十集前后，从一个“很不错的直播贴”变成了“十分戏剧性又十分有趣的直播贴”，楼主对待爱音第十话之前是可怜心疼到了第十集后面变得和soyo差不多一个态度起来，太好玩啦</p>"},{floor:"8",username:"而今听雨",time:"2023-11-24 21:00",reply:"",comment:`<p>后排名词解释：</p>
    <p>soyo/soyorin：对楼主的称呼。由于楼主观剧全程跟soyo共情程度非常之高，后期更是发表了“soyo第一人称视角”的剧情解析，被大家戏称为soyo本人。soyo女士补番楼由此得名。</p>
    <p>chaurin：对楼主的称呼。楼主11话补番时，认为soyorin这一昵称特别腻味(就是本人！)，楼友马上将楼主id kngchau改写为chaurin。</p>
    <p>anon酱：对楼主朋友的称呼。10话结束楼里说楼主简直就是soyo时，有楼友马上表示那楼主损友岂不就是anon。于此得名。</p>
    <p>ansy楼：后面由于楼主的身体原因、情绪原因、 用电脑太菜的原因 ，楼主朋友经常上号发言，两人互动十分亲密，楼友开始磕两人CP，后来由于戏称两人为soyo anon，索性用ansy专楼指代这一直播楼。</p>`},{floor:"13",username:"而今听雨",time:"2023-11-24 21:05",reply:"5",comment:`<p>她可不是一直心疼爱音的，刚开播的时候高赞热评就是：“你怎么还没看就开始优化爱音”、“你怎么看了三集还要优化爱音”，以及楼主在第三话看完后发表了“支持soyo利用爱音重组C团”的暴论，
      <del>前期一直被认为是铁爱音黑</del>
    </p>`},{floor:"28",username:"Caresland",time:"2023-11-26 22:17",reply:"",comment:"<p>chaurin看MyGO三件事：共情，落泪，嘴爱音</p>"},{floor:"35",username:"半世丶浮华。",time:"2023-11-27 19:11",reply:"",comment:`<p>小标几个我个人觉得需要标记的点
      nga用得少不会标楼层我就直接写楼层数麻烦各位自行跳转啦
      2928是第12话开始
      3061是被迷路日击破
      (3062是看见几只鱼发的迷路日封面二破 笑 )
      (3435是是我个人在此楼最大的收获，层主总结的很好，原来像chaurin这种心思细腻的妹子看见小睦头那句话反应真的会很大)
      3436是看完姐妹论的反应(虽然好像只有这一层)</p>`}],floorDetail$1=[{floor:"0",username:"轻风cc",time:"2023-11-21 18:32",reply:"",comment:`<p>不然有些东西长颈鹿会因为剧透而没办法说出口……</p>
    <p>比如刚刚哪位楼主对第九集做出的预测。</p>
    <p>“你这么写不怕观众喷你拍动漫拍了个寂寞吗？”</p>
    <p>我真的很想说，我tm第九集的时候就是这么吐槽的！</p>`},{floor:"2",username:"MrBullut",time:"2023-11-21 18:47",reply:"",comment:"<p>1969年，涌入阿姆斯特朗家中的记者为两位老人购买最新彩电，然后将摄像机对准两位老人，来直播看直播的宇航员父母(无端)</p>"},{floor:"7",username:"南明丶璃歌",time:"2023-11-21 18:53",reply:"",comment:"<p>一般来讲，当然有人提议设置专楼的时候，那这里就是专楼了</p>"},{floor:"8",username:"1.048596",time:"2023-11-21 18:53",reply:"",comment:"<p>有一种微妙的这个楼会变成伥鬼集中营，各位长颈鹿有什么头猪吗</p>"},{floor:"11",username:"Paper Tiger",time:"2023-11-21 18:56",reply:"",comment:`<p>人太多了总有剧透的</p>
    <p>什么“这是伏笔”、“大的要来了”这种起哄都是剧透，新人知道的越少，新人的观感和围观的观感都更好，最完美的就是只讨论当前剧情并且不使用后续知识，可惜这标准太高了</p>`},{floor:"20",username:"DarthPPT",time:"2023-11-21 19:42",reply:"",comment:`<p>隔壁那个被朋友安利的lz真的好强</p>
    <p>无论是前几集的脑洞还是对第九集的假药，简直太天才了，抓细节的能力也很强</p>`},{floor:"33",username:"谷不勤",time:"2023-11-21 20:14",reply:"",comment:`<p>七月新番：mygo</p>
    <p>十月新番：猴区看mygo</p>`},{floor:"40",username:"火龙果叉烧肠粉",time:"2023-11-21 21:10",reply:"",comment:`<p>那我们就在这里默默地关注隔壁楼吧桀桀桀</p>
    <p>救命看到楼主信誓旦旦的觉得解散的是c团，而且木头要出来做出重要影响的时候我真的笑得好大声，这真的是我可以看的吗，这下我也是soyo了，感觉回到了三个月之前看mygo的时光</p>`},{floor:"69",username:"不存在的竹渊",time:"2023-11-21 22:09",reply:"",comment:`<p>隔壁真的笑死了</p>
    <p>看完第九集那反应本就美味</p>
    <p>空虚无比的楼主被回旋镖击中，再猛然发现只拿到了就此的资源</p>
    <p>#我就打个回复的两分钟，就能刷新出三页出来，此前都是躲着看不回复是吧</p>`},{floor:"70",username:"松鼠之梦",time:"2023-11-21 22:11",reply:"69",comment:`<p>因为节目效果拉满啊。</p>
    <p>那楼主的朋友就是故意的。</p>
    <p>请他？吃饭，然后刚好停到9。</p>
    <p>楼主开始尖叫抓挠，</p>`},{floor:"96",username:"typeomicron",time:"2023-11-22 03:00",reply:"",comment:`<p>什么长颈鹿二台</p>
    <p>顺便我算是想明白我们在看什么了</p>
    <p>我们在看过去经历过同样反应的自己</p>
    <p>因为一辈子只有一次初见mygo，那之后就只剩下永远的追忆，因为无法触及所以耀眼</p>
    <p>所以哪怕是他人所燃烧出的那一丁点闪耀也要簇拥而上</p>
    <p>长颈鹿们笑话soyo的时候最好反思一下被困在过去的到底是谁！</p>`},{floor:"97",username:"黑堂隐月",time:"2023-11-22 07:11",reply:"96",comment:`<p>我上次再演(指上个直播楼)的时候就意识到了</p>
    <p>天天追求着直播楼的我</p>
    <p>观望名场景哀嚎的我</p>
    <p>打开消息提醒，一刷水几十条来自mygo直播楼提醒的我</p>
    <p>忘不了过去，没法看向前方的我的丑态瞎</p>
    <p><del>改变命运的英国留学生在哪里，救一救啊</del></p>`},{floor:"102",username:"世间可有两全法",time:"2023-11-22 11:33",reply:"",comment:`<p>我在想，如果有一个观影楼看到后面楼主觉得不好看然后就不看了，长颈鹿们会是什么表情？</p>
    <p>哎呀哎呀也太扭曲了吧，我想看这样的场景呀！</p>`},{floor:"105",username:"MrBullut",time:"2023-11-22 11:59",reply:"102",comment:`<p>这个，不需要了(退回)</p>
    <p>(瞳孔地震)</p>`},{floor:"109",username:"顾秋声",time:"2023-11-22 12:24",reply:"",comment:"<p>或许出现了……(10/13)楼变成爱素专楼的可能性</p>"},{floor:"126",username:"黑堂隐月",time:"2023-11-23 08:55",reply:"",comment:`<p>ansy楼2000楼贺电</p>
    <p>另外悲报</p>
    <p>食用完ansy楼后感觉自己吃撑了</p>
    <p>又或者是嗜血狂热被净化了</p>
    <p>看别的直播楼提不太起劲来了</p>`}],floorDetail=[{floor:"0",username:"kngchau",time:"2023-11-19 21:16",reply:"",comment:`<p>被朋友要求一定要来nga直播mygo……</p>
    <p>目前：对mygo一无所知，邦邦前作没看过，ll看过，只知道泛式强推(视频没点进去过)，然后mygo好像有角色拿了挺王。</p>
    <p>观看计划：很多人说追番似乎体验更好，决定模拟追番，一天一集，看完来nga讨论这一天的观感和后续剧情推测，绝不多看。</p>
    <p>今天决定看一些播出前的信息。</p>
    <p>目前过了一遍PV，感觉是个很普通的美少女乐队企划，如果没有这么多人推荐我肯定是：快端下去吧已经品鉴的够多了.jpg</p>
    <p>虽然看起来情况不是这样……</p>
    <p>目前感觉对里面那个双色瞳的角色挺感兴趣，有两个角色太夹了不知道是不是新人声优……有个角色看起来有点内向，感觉会有让她变得开朗的剧情(或者类似于只有搞音乐能让她快乐或者兴奋之类的设定)</p>
    <p>还有什么播出前就有的信息大家欢迎提供给我~</p>
    <p>11月20号，看完1-3了，目前被第三话破防中</p>
    <p>还是11月20号，前5话全都看完了</p>
    <p>我已经完全入坑了，要不是被很多坛友和朋友强烈要求，我今天至少看完前九话</p>`},{floor:"2",username:"逢田绘梨子",time:"2023-11-19 21:18",reply:"",comment:"<p>能不能一周一话，然后按时间节点看二创</p>"},{floor:"3",username:"71和EU",time:"2023-11-19 21:18",reply:"",comment:"<p>我这么幸福真的可以吗[指每天都能看mygo直播]</p>"},{floor:"6",username:"又冷又饿又失智",time:"2023-11-19 21:19",reply:"",comment:`<p>不需要任何额外消息，现在就给我看！姨妈大，扣扣你！</p>
    <p>建议是如果有什么感想随笔的话可以先写下来每5-10分钟集中发一次，不然可能会打乱观看节奏，这番分镜以及角色台词信息量还挺大的</p>`},{floor:"8",username:"wthhh1",time:"2023-11-19 21:20",reply:"",comment:"<p>推荐第一天看三集吧，因为开始就是三集连发的，才是真正模拟追番</p>"},{floor:"10",username:"kngchau",time:"2023-11-19 21:23",reply:"8",comment:`<p>建议收到</p>
    <p>那明天看1-3话</p>`},{floor:"11",username:"Xh_Authentic",time:"2023-11-19 21:24",reply:"",comment:`<p>怎么才一天一集</p>
    <p>一周一集</p>
    <p>然后看完第12集时候等2个星期再看第13集</p>`},{floor:"12",username:"kngchau",time:"2023-11-19 21:24",reply:"6",comment:`<p>收到建议</p>
    <p>明天开看1-3，今天的计划是看pv和其他开播前的场外信息</p>`},{floor:"14",username:"kngchau",time:"2023-11-19 21:26",reply:"2",comment:`<p>说实话一周一话我觉得我可能忍不住……</p>
    <p>不过这番有这么多二创可以看么</p>`},{floor:"16",username:"kngchau",time:"2023-11-19 21:26",reply:"11",comment:"<p>不会最后一话之前还停播过一周吧，听起来追番党好惨</p>"},{floor:"17",username:"71和EU",time:"2023-11-19 21:28",reply:"14",comment:"<p>不止多，还耐溜，越溜劲越大</p>"},{floor:"18",username:"結千",time:"2023-11-19 21:28",reply:"",comment:`<p>看的话1-3，然后每周一集就行</p>
    <p>另外不要给自己上预期，觉得无趣或如何都很正常，本身也不是面相所有人群的作品，最重要的还是自己感到开心，有疑问提出来就可以</p>
    <p>最后祝你有个愉快的体验</p>`},{floor:"22",username:"ch19930611",time:"2023-11-19 21:33",reply:"",comment:`<p><a href='https://www.bilibili.com/video/BV1tB4y1E7Cv' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1tB4y1E7Cv</a>
      既然如此就先听贝斯手的翻唱曲吧，在动画之前的投稿，记得关弹幕</p>`},{floor:"23",username:"波与粒的境界",time:"2023-11-19 21:43",reply:"",comment:`<p>目前可以透露的信息：最搞笑的是人物pv把灯说的一辈子乐队翻译成一起乐队导致大家都以为是老套乐队少女动画</p>
    <p>你可以看看官方号发的那些人物介绍了，一问一答了之类的，都是22年发的其实一直到现实里的4thlive上才宣布动画的，日常小动画也可以看，都是播出前就有的，不过记得关弹幕和不要看评论区
      ，说到小动画不得不品的[[まいご！！！！！]そよ編-哔哩哔哩] <a href='https://b23.tv/BvIHFhB' target='_blank'
        class='url'>https://b23.tv/BvIHFhB</a></p>
    <p>但是一定要记得关弹幕</p>`},{floor:"24",username:"Arthurrrrrrrrr",time:"2023-11-19 21:45",reply:"",comment:`<p>我以为如此嗜血的长颈鹿已经不多见了 你朋友真是太懂了</p>
    <p>楼主一定会获得最好的体验的 大家也要守护住不要剧透吔——</p>`},{floor:"26",username:"流云际影",time:"2023-11-19 22:12",reply:"",comment:`<p>你朋友真的是只想着大家呢</p>
    <p>听我说谢谢你</p>`},{floor:"27",username:"kngchau",time:"2023-11-19 22:18",reply:"",comment:`<p>目前根据楼上建议，关弹幕看了官方发的角色自我介绍和一问一答，大致熟悉了角色了(如果我把角色搞混了请帮我指正)。</p>
    <p>首先吐槽，自我介绍怎么只有贝斯手soyo有字幕！！还好我会日语……</p>
    <p>体会是，我对主唱灯产生了浓厚的兴趣。首先是楼上说pv里灯说的是一辈子组乐队！！这直接重量级重女是吧……</p>
    <p>
      然后自我介绍和一问一答里，她说她喜欢收集石头和创可贴，好奇怪的爱好(创可贴有什么好收集的？？？)，然后她说她喜欢金平糖，但是吃了就会没有了，不喜欢鱼子酱，像是吃了有生命的东西一样。哇这个情感真的好细腻，感觉是个情感十分细腻，十分容易受伤(可能被伤害过，不像再被伤害所以才说什么一辈子组乐队？)的姑娘(重女？)，而且她还担当作词，感觉乐队的曲风会是那种感情十分细腻，温柔平淡的民谣曲风？
    </p>
    <p>然后是鼓手立希，感觉是个技术大佬，乐队音乐顶梁柱，负责作曲，其他看不出来。</p>
    <p>
      贝斯手soyo感觉就负责协调队内成员的润滑剂，就是那种团队后勤妈妈的感觉。上面发的让我听的那个翻唱不确定啥意思，歌词很符合剧情么？那么贝斯手也有段情伤？伤害这么温柔的妹子良心不会痛么野郎！(告别前男友，加入百合乐队怀抱的剧情是吧，有点意思)
    </p>
    <p>吉他手乐奈感觉很沉默话很少。</p>
    <p>吉他手爱音感觉……很菜？？？因为练吉他手会疼那是菜鸟才会有的问题吧……</p>`},{floor:"28",username:"unkonw990",time:"2023-11-19 22:20",reply:"",comment:`<p>既然楼主每一话间隔时间较长，那么恐怕难免会关注一些场外信息，发个各话播放时间表给楼主
      楼主自己把握，看的场外内容的发布日期不要超过自己的进度，视频类别开弹幕</p>
    <figure class='table-figure'>
      <table>
        <thead>
          <tr>
            <th>话数</th>
            <th>播出日期</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>第1-3话</td>
            <td>2023/6/29</td>
          </tr>
          <tr>
            <td>第4话</td>
            <td>2023/7/6</td>
          </tr>
          <tr>
            <td>第5话</td>
            <td>2023/7/13</td>
          </tr>
          <tr>
            <td>第6话</td>
            <td>2023/7/20</td>
          </tr>
          <tr>
            <td>第7话</td>
            <td>2023/7/27</td>
          </tr>
          <tr>
            <td>第8话</td>
            <td>2023/8/3</td>
          </tr>
          <tr>
            <td>第9话</td>
            <td>2023/8/10</td>
          </tr>
          <tr>
            <td>第10话</td>
            <td>2023/8/17</td>
          </tr>
          <tr>
            <td>第11话</td>
            <td>2023/8/24</td>
          </tr>
          <tr>
            <td>第12话</td>
            <td>2023/8/31</td>
          </tr>
          <tr>
            <td>第13话</td>
            <td>2023/9/14</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>第四话和第七话的ED结束后还有C Part，别错过了</p>`},{floor:"29",username:"kngchau",time:"2023-11-19 22:21",reply:"23",comment:"<p>这个短剧橘味溢出啊……盲猜这俩是cp，还是soyo追爱音？</p>"},{floor:"30",username:"Xh_Authentic",time:"2023-11-19 22:21",reply:"",comment:"<p>爱音：怎么还没看就想着把我优化了(恼</p>"},{floor:"31",username:"kngchau",time:"2023-11-19 22:21",reply:"28",comment:"<p>多谢！很有用！</p>"},{floor:"39",username:"ch19930611",time:"2023-11-19 23:03",reply:"27",comment:"<p>其实乐队风格偏向情绪朋克，但肯定不是民谣</p>"},{floor:"40",username:"西园寺凹凹子",time:"2023-11-19 23:03",reply:"",comment:`<p>标记一下</p>
    <p>看忍到第几天开始进入雏见泽L5开始挠自己喉咙</p>`},{floor:"42",username:"kngchau",time:"2023-11-19 23:09",reply:"39",comment:`<p>竟然是个朋克乐队，有些意外</p>
    <p>我现在歌还攒着一首都没听呢，朋友说剧情里有live让我去动画里听</p>`},{floor:"43",username:"唯案",time:"2023-11-19 23:10",reply:"",comment:"<p>你忍得住吗哭笑你忍得住我只能怀疑你戒过毒</p>"},{floor:"45",username:"波与粒的境界",time:"2023-11-19 23:17",reply:"42",comment:"<p>翻唱的那些动画里没有可以先听听，动画播出前评论区甚至都在猜是大学生乐队</p>"},{floor:"47",username:"火龙果叉烧肠粉",time:"2023-11-19 23:39",reply:"",comment:`<p>还是一天一集吧，现在这个讨论的环境已经过去了，不是追番那时候的每天都有活的样子了</p>
    <p>一周一集体验不像以前那么好了</p>`},{floor:"48",username:"几只鱼",time:"2023-11-20 01:29",reply:"",comment:`<p>关于声优这点我说一下，粉毛确实是新人，虽然夹但是这是本音</p>
    <p>棕毛我现在只能说是有原因的</p>`},{floor:"51",username:"kngchau",time:"2023-11-20 06:55",reply:"",comment:`<p>今天起来又溜了一遍楼里发的歌和小短剧，才发现soyo翻唱的这首剪切线，有八十多万播放</p>
    <p>这也太恐怖了</p>
    <p>这歌绝对是有点什么</p>`},{floor:"52",username:"Xh_Authentic",time:"2023-11-20 07:22",reply:"51",comment:"<p>答案基本都在弹幕里 但是开了弹幕绝对要被剧透一脸 <del>还有不相干的5t5</del> </p>"},{floor:"54",username:"kngchau",time:"2023-11-20 07:39",reply:"",comment:"<p>好了，前戏结束，先凑早上把第一集看了，今日计划1-3</p>"},{floor:"56",username:"kngchau",time:"2023-11-20 07:48",reply:"",comment:`<p>卧槽这个开头真的开幕雷击</p>
    <p>
      首先我要吐槽一下这种企划乐队成员早就公布了，这不就是官方剧透么！！我只开始还以为开头是倒叙，但是仔细看了一下，蓝头发的saki和绿头发的mutsumi都不是乐队成员啊，仔细一听这乐队叫crychic，所以这是soyo灯和立希的前任乐队(什么前任文学？)
    </p>
    <p>先盘一下场外信息，这是我不理解的地方，开场是3d运镜，saki和mutsumi建模都十分精致，肯定是重要角色，但是却不是乐队成员？她们两个应该是节奏吉他和主音吉他吧，后来换成了乐奈和爱音？五人乐队怎么有七个主要角色，怪起来了
    </p>
    <p>这个蓝发saki也挺有意思，满口敬语看起来是个大小姐人设，绿发妹子感觉有点像乐奈人设？(你们邦邦吉他手都这样吗？)，话不多，但是重量级……五个人走俩直接炸团了呗</p>`},{floor:"57",username:"黑之阐释者",time:"2023-11-20 07:48",reply:"",comment:`<p>笑死，第一次见看之前给自己插这么多flag的</p>
    <p>到时候回旋镖打起来得多狠</p>`},{floor:"58",username:"kngchau",time:"2023-11-20 07:54",reply:"",comment:`<p>我突然悟了，soyo那首剪切线，就是剪切前任乐队是吧</p>
    <p>亏我还以为是前男友，美少女乐队企划怎么会有前男友这种东西</p>`},{floor:"59",username:"imfyz",time:"2023-11-20 07:54",reply:"56",comment:"<p>可公开的情报：其实是十个人两支团</p>"},{floor:"60",username:"kngchau",time:"2023-11-20 07:56",reply:"",comment:"<p>镜头一转变得十分阳间，眼镜娘粉毛好可爱。吉他手和主唱就这么相遇了(由我们开启的故事是吧)</p>"},{floor:"61",username:"kngchau",time:"2023-11-20 07:58",reply:"59",comment:"<p>那就清楚了，一个乐队分裂各自重组新乐队～(为什么不一个叫cry一个叫chic)</p>"},{floor:"62",username:"kngchau",time:"2023-11-20 08:01",reply:"",comment:`<p>有意思，虽然不知道后面能不能保持，但是开头这些微表情做的好细！</p>
    <p>爱音看起来并不是那种元气少女啊，感觉多少有点腹黑或者其实内心冷漠？</p>`},{floor:"63",username:"02feng33",time:"2023-11-20 08:02",reply:"",comment:`<p>好早，居然这么早就开始看了么</p>
    <p>说实话，mygo播出前真的毫无关注度，连泛式打分都只给了3.8的期待度 <del>处处都是回旋镖</del> </p>
    <p>大部分人都是第七集入坑，我估计也跟泛式视频有关 <del>这就是泛式力推的含金量</del></p>`},{floor:"65",username:"kngchau",time:"2023-11-20 08:06",reply:"",comment:"<p>虽然不重要但是还想吐槽一下，你邦的设定不会就是是个姑娘就会玩乐队吧，跟隔壁是个妹子就想做学院偶像一样</p>"},{floor:"66",username:"02feng33",time:"2023-11-20 08:07",reply:"58",comment:`<p>很好，你已经进入了“常看常新”的第一层境界</p>
    <p><del>原谅我在被子里偷乐</del> </p>
    <p>美味，太美味了，最近直播楼真的是佳肴频出</p>`},{floor:"67",username:"ALex_bianfu",time:"2023-11-20 08:08",reply:"65",comment:"<p>正确的，就是游戏王人均会打牌一样，邦邦人均会乐器，这是个没乐器就活不下去的世界</p>"},{floor:"68",username:"kngchau",time:"2023-11-20 08:12",reply:"",comment:"<p>原来灯喜欢收集创可贴是这种有图案的，感觉是个集各种小众爱好于一身的姑娘呢</p>"},{floor:"69",username:"kngchau",time:"2023-11-20 08:22",reply:"",comment:`<p>ktv这段剧情有点震惊。</p>
    <p>首先是实锤了爱音不是什么典型的元气少女，其实是个共情能力一般，只关心自己关心的事情的那种，有点负面的性格(我知道会有反转，但是技术又不好性格又不好你们乐队为啥会组这种的……)</p>
    <p>然后是灯，好重……但是又好心疼，本来就是个情感细腻的姑娘，肯定是被上一次乐队经历伤到了吧，但是看起来没什么识人之明，遇人不淑</p>
    <p>上一次遇到saki那种一言不合就退团的，这一次遇到一个外热内冷的</p>`},{floor:"70",username:"轻风cc",time:"2023-11-20 08:26",reply:"69",comment:"<p>你说得对，但是爱音已经是这五个人里精神状态最稳定的了……</p>"},{floor:"71",username:"kngchau",time:"2023-11-20 08:27",reply:"",comment:`<p>鼓手立希终于出场了，有种小时候看水浒传，等着一百零八将都什么时候出场的感觉哈哈哈哈</p>
    <p>立希践行了鼓手都脾气不好的刻板印象</p>
    <p>另，立希灯这对cp我站了，立希护着灯的样子好像一个老父亲护着女儿</p>
    <p>不过爱音也是无妄之灾被骂一顿，小虎牙真的好可爱</p>`},{floor:"72",username:"diclaw",time:"2023-11-20 08:28",reply:"70",comment:"<p>第一阶段，质疑爱音</p>"},{floor:"75",username:"黑堂隐月",time:"2023-11-20 08:36",reply:"",comment:`<p>很好，今天上班就住这里了</p>
    <p>剪切前乐队了吗？如剪</p>
    <p>格温来全剪了</p>`},{floor:"77",username:"kngchau",time:"2023-11-20 08:37",reply:"",comment:`<p>第一话总结：信息量很大，从人设到剧情都跟我想的不一样。</p>
    <p>人设上，感觉已经出场的这些人性格多少都有些问题，跟传统的美少女企划很不一样，她们不是那种小别扭，不是想法不合，是真的，放在现实里也可以被称为有问题的。</p>
    <p>目前乐奈还没出场，感觉后续需要妈妈角色soyo发力来把这些性格各异的角色粘合起来。</p>
    <p>剧情开展上很有意义，不是树立一个好用明确的什么废部之类的冲突，让大家去解决。先立了一个悬念，然后大家都在按各自的逻辑做事，期待后续展开。</p>`},{floor:"79",username:"黑堂隐月",time:"2023-11-20 08:42",reply:"",comment:"<p>和隔壁看到四集开始预测走向的是相同类型的替身使者呢</p>"},{floor:"80",username:"kngchau",time:"2023-11-20 08:46",reply:"79",comment:`<p>是你们某位坛友强烈要求的</p>
    <p>她说看完随时分享我认为的剧情进展，虽然我知道会有很多打脸，但是被打脸也感觉很有意思</p>`},{floor:"82",username:"kngchau",time:"2023-11-20 08:48",reply:"",comment:`<p>朋友刚才让我替她在楼里发一句</p>
    <p>“我是不是满脑子都想着大家”</p>
    <p>(总感觉这是个梗</p>`},{floor:"83",username:"黑堂隐月",time:"2023-11-20 08:51",reply:"82",comment:`<p>是了</p>
    <p>你这朋友，还真是满脑子都想着大家呢</p>`},{floor:"84",username:"波与粒的境界",time:"2023-11-20 08:52",reply:"82",comment:"<p>替我谢谢你朋友</p>"},{floor:"85",username:"kngchau",time:"2023-11-20 08:56",reply:"",comment:"<p>第二话启动～</p>"},{floor:"87",username:"kngchau",time:"2023-11-20 09:02",reply:"",comment:"<p>虽然有点夹，但是soyo果然好温柔，感觉是为数不多的阳间角色了</p>"},{floor:"88",username:"西园寺凹凹子",time:"2023-11-20 09:03",reply:"",comment:"<p>该狠狠依赖soyo妈妈了</p>"},{floor:"89",username:"kngchau",time:"2023-11-20 09:04",reply:"",comment:`<p>这个op好好听，但是也太剧透了吧！虽然早就知道是这五个人，但是剧情里还乱着呢，op一转大家开开心唱歌，真的合适么</p>
    <p>或者可以设计成那种，每一集op里角色逐渐增多的模式啊。每加入一个新成员op就加入一个。</p>`},{floor:"91",username:"71和EU",time:"2023-11-20 09:06",reply:"89",comment:"<p>因为没这个op，大家会颠得更彻底</p>"},{floor:"93",username:"黑堂隐月",time:"2023-11-20 09:11",reply:"",comment:"<p>这个op在中期开始会变成兜底用的强心剂</p>"},{floor:"95",username:"kngchau",time:"2023-11-20 09:12",reply:"",comment:`<p><img src="/image/95.jpg" style="zoom:50%;" /> </p>
    <p>想先吐槽一句：不是，有必要么，经费这么足的？路人妹子专门建模？而且，这皮衣紧身裙好戳我xp</p>
    <p>我只能说制作确实爆炸</p>`},{floor:"96",username:"时咕咕",time:"2023-11-20 09:13",reply:"95",comment:"<p>可不是路人。路人都是重复建模的。群演老辛苦了。</p>"},{floor:"97",username:"71和EU",time:"2023-11-20 09:14",reply:"95",comment:`<p>因为不是路人</p>
    <p>这是超人</p>`},{floor:"98",username:"黑堂隐月",time:"2023-11-20 09:15",reply:"",comment:`<p>细啊</p>
    <p>第一遍很多人都注意到贝斯英雄</p>`},{floor:"101",username:"kngchau",time:"2023-11-20 09:24",reply:"",comment:`<p>soyo怪起来了，不对劲，三句话不离灯，这不会是想搞什么借尸还魂吧。利用爱音把以前乐队重新组起来？总感觉这些小表情不像是我想的那么纯良</p>
    <p>这mygo团不会全员恶人吧，有趣有趣</p>`},{floor:"103",username:"kngchau",time:"2023-11-20 09:26",reply:"",comment:"<p>额，有可能是邪道cp，但是爱音和立希这对感觉还挺好磕的</p>"},{floor:"105",username:"轻风cc",time:"2023-11-20 09:28",reply:"103",comment:"<p>前期大火的cp爱希啊……可惜被后期某个遥遥领先的cp干碎了……</p>"},{floor:"107",username:"kngchau",time:"2023-11-20 09:37",reply:"",comment:"<p>灯到底是什么人见人爱的设定啊哭笑怎么所有人一说到灯就变了</p>"},{floor:"108",username:"kngchau",time:"2023-11-20 09:40",reply:"",comment:"<p>第二话信息量也不少，容我再回过头去看看</p>"},{floor:"109",username:"黑堂隐月",time:"2023-11-20 09:41",reply:"107",comment:"<p><del>魅魔</del> </p>"},{floor:"112",username:"kngchau",time:"2023-11-20 09:57",reply:"",comment:`<p>差点忘了你们还在nga等直播。</p>
    <p>第三话第一人称视角也太犯规了！灯的第一人称我要爱上saki了！唯一的问题是她那个满口的敬语和大小姐说话方式好别扭啊</p>`},{floor:"114",username:"kngchau",time:"2023-11-20 10:03",reply:"",comment:`<p>我靠，我靠，我人傻了，怎么第三话就开始刀我？？？？？</p>
    <p>前面给我铺垫了那么多crychic的美好回忆，灯和祥子的美好回忆，在我快忘了第一话开头是她们解散的时候，突然镜头一转雨天祥子说要退团了？？？</p>
    <p>啊，你为什么啊，我不李姐</p>`},{floor:"118",username:"kngchau",time:"2023-11-20 10:04",reply:"",comment:"<p>啊，孩子被刀傻了，镜头一转又是春天，灯一个人在天桥上发呆，景色那么美，但是曾经的crychic和祥子就像昙花一现一样，再也回不去了</p>"},{floor:"120",username:"kngchau",time:"2023-11-20 10:05",reply:"",comment:"<p>我本来打算第三集看完回过头去拉片，分析剧情走向的，这下冷静不下来了</p>"},{floor:"121",username:"kngchau",time:"2023-11-20 10:06",reply:"",comment:"<p>啊，爱音被利用就被利用吧，我现在支持soyo利用爱音把crychic组回来了</p>"},{floor:"122",username:"kngchau",time:"2023-11-20 10:07",reply:"",comment:"<p>啊不对，crychic解散关键还是祥子，把人拉回来一点用都没用</p>"},{floor:"123",username:"黑堂隐月",time:"2023-11-20 10:07",reply:"",comment:`<p>又一个忘不了C团的</p>
    <p>唉，C团...唉，春日影...</p>`},{floor:"124",username:"kngchau",time:"2023-11-20 10:07",reply:"",comment:"<p>我先去静静了你们聊</p>"},{floor:"125",username:"黑堂隐月",time:"2023-11-20 10:08",reply:"",comment:"<p>质疑soyo，理解soyo，成为soyo</p>"},{floor:"128",username:"takilovee",time:"2023-11-20 10:09",reply:"121",comment:"<p>没看前就想着优化爱音，看完三集了还要优化爱音</p>"},{floor:"130",username:"时咕咕",time:"2023-11-20 10:12",reply:"121",comment:"<p>你这人满脑子都是想着自己呢。</p>"},{floor:"133",username:"枞枞那年",time:"2023-11-20 10:17",reply:"",comment:"<p>楼主c团余孽，等着被圣爱音超度吧</p>"},{floor:"134",username:"对说你呢",time:"2023-11-20 10:22",reply:"121",comment:"<p>坏人，我要代表anon酱拉黑你</p>"},{floor:"135",username:"71和EU",time:"2023-11-20 10:22",reply:"134",comment:"<p>不要拉黑，屏蔽比较好啦</p>"},{floor:"137",username:"kngchau",time:"2023-11-20 10:30",reply:"",comment:`<p>我又回去看了好几遍春日影，太好听了，太切题了，配合灯的回忆，简直是顶级演出</p>
    <p>一开始灯是孤独一个人，后来祥子这束光闯进了她的生活，填满她的心</p>
    <p>歌词最后一句</p>
    <p>ねおねがい、どかこのまま離さないでいて</p>
    <p>太戳我了</p>
    <p>这就是灯的心里话，希望祥子这束光永远不要离开她</p>
    <p>结果转眼，祥子就退团了</p>
    <p>也许祥子真的有什么苦衷，有什么难言之隐，也许你就只是不想玩乐队了都可以，有什么事是不能对灯一五一十地说清楚的</p>
    <p>就算真的是难言之隐，也不用用那么决绝的态度和语气退团吧</p>
    <p>你的良心不会痛吗！！</p>`},{floor:"138",username:"kngchau",time:"2023-11-20 10:32",reply:"",comment:"<p>如果剧情结束祥子不给一个合理的解释我是不会原谅她的！</p>"},{floor:"142",username:"Xh_Authentic",time:"2023-11-20 10:39",reply:"138",comment:"<p>质疑 理解 <del>成为</del> </p>"},{floor:"143",username:"叹之惘然",time:"2023-11-20 10:40",reply:"",comment:`<p>嘻嘻，楼主，你感觉如何，你感觉如何啊</p>
    <p>这种情况，又怎能忍住点击下一集的手啊，嘻嘻嘻</p>`},{floor:"144",username:"kngchau",time:"2023-11-20 10:50",reply:"143",comment:"<p>我觉得我应该能坚持住的，朋友跟我说我要是这样就点开了第四话，可能接下来就停不住了</p>"},{floor:"145",username:"黑堂隐月",time:"2023-11-20 10:51",reply:"",comment:`<p>第三集不点下一集还挺正常</p>
    <p>毕竟是一段终结，一个终点</p>
    <p>等到时候3的倍数集再看楼主抓耳挠腮</p>
    <p>想要看下一集的手和与坛友们一天一集约定的对撞</p>
    <p>嘻 嘻嘻嘻嘻</p>`},{floor:"146",username:"kngchau",time:"2023-11-20 10:51",reply:"",comment:"<p>我要开始回顾前三集了</p>"},{floor:"147",username:"kngchau",time:"2023-11-20 10:54",reply:"",comment:`<p><img src="/image/147.jpg" style="zoom: 33%;" /> </p>
    <p>这里有点问题，看第三话以及听祥子说话语气，她应该是个很富有的大小姐，但是这里是冒雨、没打伞，看上去是像从地铁站跑过去的，所以退团的原因不会是家里破产了吧</p>`},{floor:"151",username:"kngchau",time:"2023-11-20 11:00",reply:"",comment:`<p><img src="/image/151.jpg" style="zoom: 33%;" /> </p>
    <p>睦这个角色有点怪，一开始C团炸团明明她也是主要责任人，她应该并不想玩乐队？但是这里soyo应该是想撺掇着复活C团，睦为什么要配合她做这些呢？</p>`},{floor:"152",username:"1.4.2",time:"2023-11-20 11:00",reply:"147",comment:"<p>第一话有个镜头里，井盖边上五块砖裂了一块，这番细节真是太多了</p>"},{floor:"153",username:"kngchau",time:"2023-11-20 11:05",reply:"",comment:`<p><img src="/image/153-1.jpg" style="zoom: 33%;" /> </p>
    <p><img src="/image/153-2.jpg" style="zoom: 33%;" /> </p>
    <p>这里挺有意思，睦应该叫若叶睦，是若叶家的女儿，母亲是女演员，父亲是搞笑艺人(真是常见的日本艺人CP呢，女演员X男搞笑艺人)</p>
    <p>所以第三话里灯这俩同学想跟她讨论的电视剧应该是睦的母亲主演的，应该结婚后随了夫姓也以若叶XX公开活动的那种，这俩同学应该没想到灯这么快就跟若叶女士的女儿有了交集</p>`},{floor:"154",username:"kngchau",time:"2023-11-20 11:08",reply:"",comment:`<p>乐奈这里感觉挺电波系的，想弹吉他了就来演奏一曲，弹完就走。</p>
    <p>乘兴而来，尽兴而归是吧</p>
    <p>不过她凭什么来人家咖啡馆随便弹琴啊，店员还很熟的样子，怕不是什么关系户</p>`},{floor:"155",username:"kngchau",time:"2023-11-20 11:14",reply:"",comment:`<p>今日总结</p>
    <p>
      灯：跟我看之前猜想的比较像，但比我想得还要重一点，但是原因已经比较清楚了。灯是情感很纤细很敏感的类型，爱好比较小众，有些收集癖，朋友不多，不太能被人理解。但是有一天遇到了命运之人祥子，就像春日影写的，想一束光照进了她的生活，带她度过了一段美好的C团经历，结果又把她抛弃了。让灯变得更敏感，更害怕失去，所以才有了一辈子组乐队这种发言。我看cast列表灯排第一个，所以灯似乎才是主角，的确从人物关系而言，似乎所有人都是以灯为中心铺展开的。
    </p>`},{floor:"156",username:"kngchau",time:"2023-11-20 11:16",reply:"",comment:"<p>爱音：是个有些小性子、有些菜、有些想出风头的小姑娘，感觉应该也有些什么经历，但是好像还挺纯良的(跟soyo比？)，毕竟被soyo说可以一起组乐队第二天蹦蹦跳跳就去上学了，可能没我一开始设想的那么腹黑。有点黑但不多。</p>"},{floor:"157",username:"kngchau",time:"2023-11-20 11:19",reply:"",comment:`<p>
      soyo：本来以为是妈妈型角色，现在彻底推翻了，妈妈只是面具，其实对C团十分念念不忘，到现在为止soyo整个人的行为动机都围绕着C团展开，跟睦也是希望联系祥子，跟爱音、跟立希都是希望能把C团重组，她似乎才是对C团感情最深的那个？靠，不会soyo也是个重女吧……一个乐队两个重女这乐队吃枣药丸
    </p>
    <p>另外，一开始以为剪切线那首歌是要剪切C团，但现在看起来又不像，因为她可一点都不想切C团啊？？</p>`},{floor:"158",username:"又冷又饿又失智",time:"2023-11-20 11:20",reply:"157",comment:"<p>两个？</p>"},{floor:"159",username:"kngchau",time:"2023-11-20 11:20",reply:"",comment:`<p>乐奈看不出什么来 ，只能说是咖啡店的关系户？</p>
    <p>立希看起来对灯很有感情，soyo似乎也很清楚这一点，直接用灯来说服立希来进乐队。</p>`},{floor:"163",username:"kngchau",time:"2023-11-20 11:24",reply:"",comment:`<p>祥子我姑且猜一手家里破产，睦如果祥子说的她不会说谎是对的，那她可能真不喜欢玩乐队，那她是那种不擅长拒绝别人的类型？毕竟soyo一直在缠着睦找祥子。感觉睦蛮两头受气里外不是人的。</p>
    <p>等等，写到这儿我突然想到，睦不会喜欢soyo吧？？？</p>
    <p>所以是因为乐队有soyo，她才能在C团待下去，其实不喜欢玩音乐只喜欢soyo</p>
    <p>虽然不想重组C团，但是soyo要求她拒绝不了</p>
    <p>我靠越想越合理。</p>`},{floor:"164",username:"kngchau",time:"2023-11-20 11:26",reply:"",comment:"<p>全员重女这乐队还玩不玩了，这番不对劲起来了</p>"},{floor:"165",username:"西园寺凹凹子",time:"2023-11-20 11:27",reply:"",comment:`<p>每一个分析都又对又错的</p>
    <p>所以才美味啊</p>`},{floor:"168",username:"kngchau",time:"2023-11-20 11:33",reply:"",comment:"<p>坏了，分析了半天我想看第四话了</p>"},{floor:"170",username:"71和EU",time:"2023-11-20 11:34",reply:"168",comment:"<p>看吧看吧没事的，就一集，就一集而已</p>"},{floor:"172",username:"叹之惘然",time:"2023-11-20 11:38",reply:"168",comment:`<p>嘻嘻，此时此刻，与谭友的约定和不由自主点击下一集的手正在不断的冲突啊</p>
    <p>我想看的就是这个JPG</p>`},{floor:"173",username:"kngchau",time:"2023-11-20 11:39",reply:"172",comment:"<p>让我再挣扎一顿午饭的时间</p>"},{floor:"178",username:"Inattent",time:"2023-11-20 11:50",reply:"",comment:"<p>咦，标题是改过吗，怎么感觉多了什么</p>"},{floor:"179",username:"kngchau",time:"2023-11-20 11:51",reply:"178",comment:"<p>不要说出来</p>"},{floor:"184",username:"overfly48",time:"2023-11-20 12:05",reply:"179",comment:`<p>没有变化，没有变化呀</p>
    <p><del>指头上多了一个回旋镖</del></p>`},{floor:"188",username:"黑堂隐月",time:"2023-11-20 12:06",reply:"",comment:`<p>尽量</p>
    <p>快进到破戒</p>`},{floor:"190",username:"黄瓜人酋长",time:"2023-11-20 12:13",reply:"",comment:`<p>好好好好好</p>
    <p>楼主一天一看，我一天一看楼主，四舍五入我也在追番</p>
    <p>当初一口气看完了，没体验到戒毒</p>`},{floor:"194",username:"kngchau",time:"2023-11-20 12:40",reply:"",comment:`<p>好了朋友们，我开始第4话了哭笑</p>
    <p>朋友跟我说今天的底线是停在第6话，否则我睡不了觉</p>
    <p>我选择相信她</p>`},{floor:"195",username:"kngchau",time:"2023-11-20 12:43",reply:"",comment:`<p><img src="/image/195.jpg" style="zoom: 33%;" /> </p>
    <p>soyo害搁这洗呢！</p>
    <p>soyo视角祥子应该是退团之后就玩失踪了，那她知道内情的可能性不大，所以soyo真的要么对C团所有人有滤镜，要么就……喜欢祥子？！！</p>
    <p>我靠我这造什么假药呢</p>
    <p>睦喜欢soyo，soyo喜欢祥子，祥子喜欢青梅竹马的睦</p>
    <p>三角恋成了</p>`},{floor:"198",username:"rtxxx",time:"2023-11-20 12:46",reply:"195",comment:"<p>楼主厉害啊，已经一定程度领先版本了</p>"},{floor:"200",username:"kngchau",time:"2023-11-20 12:49",reply:"",comment:"<p>不过有一说一soyo就算有些腹黑，但是也真的很细心，应该是第3话里她们第一次在咖啡店见面的时候，灯点了摩卡，她还记着，还从赛百味(？)买了摩卡带来</p>"},{floor:"201",username:"Arthurrrrrrrrr",time:"2023-11-20 12:49",reply:"",comment:"<p>楼主要是追番的时候就在 起码是个高级假药制造师 每个药看起来很离谱但又好像很合理</p>"},{floor:"203",username:"kngchau",time:"2023-11-20 12:54",reply:"",comment:`<p><img src="/image/203.jpg" style="zoom:33%;" /> </p>
    <p>朋友跟我说这番很少无用镜头</p>
    <p>那你黑板上写的字很难不让我多想啊</p>
    <p>四人，姐妹，哪四人啊</p>
    <p>灯应该是第一次跟soyo她们见面，是被祥子额外拉进来的</p>
    <p>soyo、祥子、睦是一个学校的，好像立希姐姐也在她们学校</p>
    <p>这四个人不会还有点血缘关系吧</p>`},{floor:"205",username:"骨肉琉璃",time:"2023-11-20 12:54",reply:"137",comment:"<p>有一说一，重看第一集，你会发现她那叫一个心疼那叫一个愧疚哭笑以前一个阳光自信的大小姐都不敢正眼看c团成员，全程低头抱手的防御愧疚姿态</p>"},{floor:"209",username:"黑堂隐月",time:"2023-11-20 12:57",reply:"194",comment:`<p>你朋友不会害你</p>
    <p>是真话</p>
    <p>第六话我沿用在隔壁楼的说法：</p>
    <p>第六集真的是一个非常适合的检查点(check point)</p>
    <p>节奏轻松、欢快，并且给后续的重要事件留下了美好的期待，作为“暂且休息”的地方再好不过了</p>
    <p>想想RPG游戏里系统提醒存档的节点后面都是什么吧</p>`},{floor:"210",username:"kngchau",time:"2023-11-20 13:02",reply:"",comment:`<p>我靠我之前的两个假药越来越真了</p>
    <p>祥子因为破产了只能在学校练琴(ps.她看起来真的是的确怀有愧疚呢，不过这不是我原谅她的理由)</p>
    <p>soyo看起来真的很喜欢祥子</p>`},{floor:"213",username:"kngchau",time:"2023-11-20 13:07",reply:"",comment:`<p><img src="/image/213-1.jpg" style="zoom: 33%;" /> </p>
    <p><img src="/image/213-2.jpg" style="zoom: 50%;" /> </p>
    <p>爱音这个动作，跟昨天看的小短剧哈哈哈哈，真是有端联想</p>
    <p>散了吧，人家是想复活C团的，就你一个橘外人</p>`},{floor:"214",username:"kngchau",time:"2023-11-20 13:09",reply:"",comment:"<p>立希对灯的在意也太明显了吧笑死</p>"},{floor:"215",username:"kngchau",time:"2023-11-20 13:10",reply:"",comment:`<p><img src="/image/215.jpg" style="zoom:33%;" /> </p>
    <p>我要笑死了，怎么你们都觉得我想优化爱音，那是我想优化么</p>
    <p>她根本就是橘外人啊</p>`},{floor:"216",username:"轻风cc",time:"2023-11-20 13:11",reply:"",comment:"<p>长崎素世经典发言：大家(不含爱音)</p>"},{floor:"217",username:"71和EU",time:"2023-11-20 13:11",reply:"215",comment:"<p>因为优化爱音是我们mygo的传统文化</p>"},{floor:"218",username:"kngchau",time:"2023-11-20 13:13",reply:"",comment:`<p><img src="/image/218.jpg" style="zoom:33%;" /> </p>
    <p>那 我 呢.jpg</p>
    <p>今年挺萌没关注，不会加冕为王的就是千早爱音女士吧，笑死，这很合理</p>`},{floor:"221",username:"kngchau",time:"2023-11-20 13:15",reply:"",comment:`<p><img src="/image/221.jpg" style="zoom:33%;" /> </p>
    <p>坛友诚不欺我</p>
    <p>怎么一瞬间三个重女了</p>
    <p>爱音你果然格格不入嗷</p>
    <p>不过这样也好，三个重女的乐队爱音你hold不住的</p>`},{floor:"222",username:"索德-莱特",time:"2023-11-20 13:15",reply:"218",comment:"<p>挺王在截图上我只能说</p>"},{floor:"224",username:"71和EU",time:"2023-11-20 13:16",reply:"221",comment:"<p>三个？你再想想</p>"},{floor:"225",username:"kngchau",time:"2023-11-20 13:17",reply:"",comment:`<p><img src="/image/225.jpg" style="zoom:33%;" /> </p>
    <p>不会是四个重女吧</p>`},{floor:"230",username:"黑堂隐月",time:"2023-11-20 13:20",reply:"225",comment:"<p>四个？你再想想</p>"},{floor:"231",username:"ch19930611",time:"2023-11-20 13:20",reply:"218",comment:"<p>LZ，你在看完MyGO前千万别去看今年的挺好萌好不好？只要是我能做的，我什么都愿意做</p>"},{floor:"232",username:"kngchau",time:"2023-11-20 13:21",reply:"231",comment:"<p>我已经被勒令补完之前不看挺萌，不进战吧了，据说挺萌和战吧现在全是剧透</p>"},{floor:"235",username:"kngchau",time:"2023-11-20 13:23",reply:"",comment:`<p><img src="/image/235.jpg" style="zoom:33%;" /> </p>
    <p>爱音女士，一个把局外人三个字贯彻到底的姑娘</p>`},{floor:"236",username:"kngchau",time:"2023-11-20 13:25",reply:"",comment:`<p><img src="/image/236.jpg" style="zoom:33%;" /> </p>
    <p>这不是！那个皮衣路人妹子！！果然是主要人物啊！</p>
    <p>既然mygo团人齐了那估计是另一个团的咯~</p>`},{floor:"238",username:"kngchau",time:"2023-11-20 13:26",reply:"",comment:`<p><img src="/image/238.jpg" style="zoom:33%;" /> </p>
    <p>好家伙，三个乐队公用乐手是吧</p>
    <p><del>那不用猜了肯定是贝斯</del></p>`},{floor:"239",username:"kngchau",time:"2023-11-20 13:27",reply:"",comment:`<p>哇海玲她真的好懂啊，情商智商都好高啊</p>
    <p>而且跟立希两个人好好磕</p>`},{floor:"240",username:"索德-莱特",time:"2023-11-20 13:27",reply:"238",comment:"<p>虽然辱贝斯了，但确实</p>"},{floor:"242",username:"kngchau",time:"2023-11-20 13:29",reply:"",comment:"<p>哈哈哈，这段爱音暴露得好明显啊，她唱歌咋样不清楚，吉他应该是挺菜的，怎么敢的</p>"},{floor:"244",username:"kngchau",time:"2023-11-20 13:33",reply:"",comment:`<p><img src="/image/244.jpg" style="zoom:33%;" /> </p>
    <p>这段真是把我笑死，这桌上人都不装了是吧，都暴露得太明显了喂，心里话都说出来了哦！</p>`},{floor:"245",username:"索德-莱特",time:"2023-11-20 13:33",reply:"242",comment:`<p>爱音:大家不都是从零开始搞搞休闲乐队的嘛？</p>
    <p>爱音人设最大的缺点，就是吉他菜，从零开始要跟上有底子的</p>
    <p><del>说好的娱乐车队，你们怎么一上来就是军事化上分啊</del> </p>
    <p>你可以看看第二集猫出场的那一段，爱音本来想当吉他主唱，猫弹完自己怂了</p>`},{floor:"247",username:"kngchau",time:"2023-11-20 13:36",reply:"",comment:`<p><img src="/image/247.jpg" style="zoom:33%;" /> </p>
    <p>这段尬得我头皮发麻，只知道爱音菜，没想到菜到这个地步</p>
    <p>我知道你们为什么喜欢玩优化爱音的梗了，果然还是优化掉吧</p>
    <p>另外，这翻译有点问题啊，Aマイナー明显是Am和弦吧，A小调是什么鬼</p>`},{floor:"249",username:"kngchau",time:"2023-11-20 13:39",reply:"",comment:`<p><img src="/image/249.jpg" style="zoom:33%;" /> </p>
    <p>我反对！！！</p>
    <p>虽然祥子不当人，但是这歌明显是灯写给祥子的情歌啊！怎么能跟其他人一起唱！这岂不是……ntr？</p>`},{floor:"252",username:"71和EU",time:"2023-11-20 13:41",reply:"249",comment:"<p>C团姨姥的嘴脸</p>"},{floor:"253",username:"kngchau",time:"2023-11-20 13:41",reply:"",comment:`<p><img src="/image/253.jpg" style="zoom:33%;" /> </p>
    <p>哇新角色！这两个妹子都好漂亮！</p>`},{floor:"256",username:"kngchau",time:"2023-11-20 13:42",reply:"",comment:`<p><img src="/image/256.jpg" style="zoom:33%;" /> </p>
    <p>出现了！拿名字当第一人称的软妹子</p>`},{floor:"257",username:"轻风cc",time:"2023-11-20 13:42",reply:"253",comment:"<p>新角色？罚你回去重看第一集后半段！</p>"},{floor:"258",username:"kngchau",time:"2023-11-20 13:44",reply:"",comment:`<p><img src="/image/258.jpg" style="zoom:33%;" /> </p>
    <p>这个妹子让我开始认真反思我这4话都看了个什么番？</p>
    <p>真正的美少女乐队企划不应该长这样才对么！！！</p>`},{floor:"260",username:"kngchau",time:"2023-11-20 13:45",reply:"257",comment:"<p>我想起来了！是爱音在KTV点了歌的两个妹子！！太细了</p>"},{floor:"261",username:"kngchau",time:"2023-11-20 13:47",reply:"",comment:`<p><img src="/image/261-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/261-2.jpg" style="zoom:33%;" /> </p>
    <p>劲爆尾杀！！！！</p>
    <p>好家伙，直接给我愣住了。</p>
    <p>一个当红乐队妹子也喜欢祥子，看起来还很重！？？</p>
    <p>一开始我还说灯是魅魔，现在看来祥子才是高段位魅魔啊！</p>`},{floor:"262",username:"索德-莱特",time:"2023-11-20 13:47",reply:"258",comment:"<p>真奈一走初华就泄气开始看短信了哭笑这就是你想要的偶像番？</p>"},{floor:"263",username:"骨肉琉璃",time:"2023-11-20 13:47",reply:"",comment:"<p>一个不算太重要也不影响任何信息的剧透：甜甜圈女士已经杀青辣</p>"},{floor:"264",username:"kngchau",time:"2023-11-20 13:50",reply:"263",comment:`<p>？？？甜甜圈女士说的是mana酱？</p>
    <p>不是，刚才我截图海玲说路人妹子都建模，你们说这是主要人物。</p>
    <p>这次我觉得是个主要人物建了非常漂亮的模，你们跟我说这是路人？？？？</p>`},{floor:"265",username:"Darkly23",time:"2023-11-20 13:50",reply:"",comment:`<p>楼主这扣细节和分析能力……我只能说你没生在追番时代真的太可惜了，不然高低也得是个go学家</p>
    <p>一路看下来，每话基本上都还原了对应进度下，场内+场外讨论后得出的总结，如果你没有被剧透过，那你是真的和独角兽老师共振起来了</p>
    <p><del>快把一天一话什么的繁文缛节通通抛弃掉吧，我现在只想看楼主一转嗜血长颈鹿啊</del></p>`},{floor:"268",username:"71和EU",time:"2023-11-20 13:52",reply:"264",comment:"<p>这一季杀青了而已，换句话说，甜甜圈女士是最早备战下赛季的选手</p>"},{floor:"270",username:"kngchau",time:"2023-11-20 13:56",reply:"",comment:"<p>我上头了兄弟们，第5话启动</p>"},{floor:"274",username:"kngchau",time:"2023-11-20 13:59",reply:"",comment:`<p><img src="/image/274.jpg" style="zoom:33%;" /> </p>
    <p>都是些不够重的女人是吧</p>`},{floor:"277",username:"kngchau",time:"2023-11-20 14:02",reply:"",comment:`<p><img src="/image/277.jpg" style="zoom:33%;" /> </p>
    <p>唉，这里真的跟灯共情了，明明是灯和祥子两个人的故事，现在却变成了和别人一起演唱。是那种虽然能继续组乐队有些开心，但是物是人非又有些惆怅的感情。</p>`},{floor:"278",username:"kngchau",time:"2023-11-20 14:04",reply:"",comment:`<p><img src="/image/278-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/278-1.jpg" style="zoom:33%;" /> </p>
    <p>“忘了前任吧，我会好好对你的”</p>
    <p>乐</p>`},{floor:"281",username:"kngchau",time:"2023-11-20 14:06",reply:"",comment:`<p><img src="/image/281.jpg" style="zoom:33%;" /> </p>
    <p>怎么又有新角色</p>
    <p>看这个动作，明显也是个有建模的角色吧</p>
    <p>咋回事，真是所有东西都是伏笔是吧</p>`},{floor:"283",username:"Parades、lust",time:"2023-11-20 14:07",reply:"",comment:`<p>一天一集(4/13)</p>
    <p><img src="/image/283.jpg" style="zoom: 80%;" /> </p>`},{floor:"285",username:"Darkly23",time:"2023-11-20 14:11",reply:"281",comment:"<p>至少一季结束了都在贯彻契诃夫之枪理论，所以，放心大胆地看，放心大胆地揣摩细节，放心大胆地去造假药，mygo一定会给到你正反馈的</p>"},{floor:"287",username:"71和EU",time:"2023-11-20 14:12",reply:"285",comment:"<p>契科夫之枪？契科夫军火库！</p>"},{floor:"288",username:"kngchau",time:"2023-11-20 14:14",reply:"",comment:`<p><img src="/image/288.jpg" style="zoom:33%;" /> </p>
    <p>果然立希也是有一段什么过去的</p>
    <p>如果根据现有剧情推测，或许是跟立希姐姐有关系，之前soyo说立希的姐姐是吹奏乐部部长( <del>黄部长是你吗？</del>
      )，非常优秀，一般这种姐妹家庭，姐姐非常优秀的话会对妹妹产生很大压力吧。所以可以设想的会有姐妹矛盾，妹妹可能会自卑，会有那种追赶姐姐的想法，如果怎么也追赶不上可能情绪和精神上都会出问题。</p>`},{floor:"289",username:"kngchau",time:"2023-11-20 14:16",reply:"",comment:`<p><img src="/image/289.jpg" style="zoom:33%;" /> </p>
    <p>@祥子，说你呢</p>`},{floor:"291",username:"kngchau",time:"2023-11-20 14:19",reply:"",comment:`<p><img src="/image/291.jpg" style="zoom:33%;" /> </p>
    <p>谁说的mana杀青了！这不还有么</p>`},{floor:"292",username:"kngchau",time:"2023-11-20 14:21",reply:"",comment:`<p><img src="/image/292.jpg" style="zoom:33%;" /> </p>
    <p>这段的镜头语言太棒了，soyo的脸一会被阴影挡住，一会露出来。就像她的表现一样，一会腹黑，一会温柔善解人意</p>`},{floor:"293",username:"kngchau",time:"2023-11-20 14:22",reply:"",comment:`<p><img src="/image/293.jpg" style="zoom:33%;" /> </p>
    <p>不要跳啊！(指卧轨</p>`},{floor:"295",username:"kngchau",time:"2023-11-20 14:24",reply:"",comment:`<p><img src="/image/295.jpg" style="zoom:33%;" /> </p>
    <p>开始解决爱音的问题了！</p>
    <p>看来是骗同学自己出国了但是其实并没有？只能说很符合她的性格</p>`},{floor:"298",username:"索德-莱特",time:"2023-11-20 14:26",reply:"295",comment:"<p>出是出了，就是逃回来了</p>"},{floor:"301",username:"火龙果叉烧肠粉",time:"2023-11-20 14:28",reply:"295",comment:`<p>敦敦逃兵千早爱音！</p>
    <p>其实第一集开头ano就在伦敦机场</p>`},{floor:"302",username:"kngchau",time:"2023-11-20 14:29",reply:"",comment:`<p><img src="/image/302.jpg" style="zoom:33%;" /> </p>
    <p>这，我只能说这从老师到同学很没礼貌了。</p>
    <p>而且能把Anon看成Ann就离谱，这个姓一看就是个日本人，好歹要注意下人家是真的给自己起了个英语名字还是自己看错了吧</p>`},{floor:"305",username:"kngchau",time:"2023-11-20 14:32",reply:"",comment:`<p>爱音的问题没我想的那么严重，甚至算不上黑历史</p>
    <p>甚至我觉得连她自己的问题都算不上</p>
    <p>只能说如果英语水平达不到就先去上一年半年的语言班就好了</p>
    <p>这很难说是黑历史，感觉还是爱音之前的经历太一帆风顺了，自己跟自己，还有自己的自尊心过不去吧</p>`},{floor:"306",username:"kngchau",time:"2023-11-20 14:33",reply:"",comment:"<p>原来mygo就是迷子！之前看官方剧透写着まいご我都没注意，原来是双关啊</p>"},{floor:"309",username:"kngchau",time:"2023-11-20 14:35",reply:"",comment:`<p><img src="/image/309.jpg" style="zoom:33%;" /> </p>
    <p>艹</p>
    <p>笑疯了</p>
    <p>什么白学构图pro max</p>
    <p>爱音直接偷家成功是吧</p>`},{floor:"311",username:"kngchau",time:"2023-11-20 14:40",reply:"",comment:`<p><img src="/image/311.jpg" style="zoom:33%;" /> </p>
    <p>喜闻乐见的cast列表剧透环节</p>
    <p>所以那个美妆博主叫祐天寺にゃむ，果然是个主要角色，顺序直接排在mygo五个人后面</p>
    <p>(真是真名当艺名用啊</p>`},{floor:"313",username:"kngchau",time:"2023-11-20 14:42",reply:"",comment:"<p>可以，正好这里也不是特别断章，我去翻翻泛式直播</p>"},{floor:"324",username:"kngchau",time:"2023-11-20 15:37",reply:"",comment:`<p>泛式1-4话的直播指路了另一个团，原来叫Ave mujica</p>
    <p>看到第5话这团的成员基本就是全都知道了</p>
    <p>祥子、睦、初华、nyamu还有海玲</p>
    <p>震惊，这几个人是怎么产生交集的</p>`},{floor:"331",username:"kngchau",time:"2023-11-20 15:51",reply:"",comment:`<p>晚上要去跟推荐我补mygo的朋友一起吃饭怕(她是用一顿饭换来了我在nga给你们直播的)</p>
    <p>她警告我如果想睡觉今天最多再看一集</p>
    <p>所以我决定还是晚上回来看比较好</p>`},{floor:"332",username:"火龙果叉烧肠粉",time:"2023-11-20 15:53",reply:"331",comment:`<p>要替潭友们好好感谢你的朋友</p>
    <p>你的朋友？我的义父！</p>
    <p>
      顺带一提第六集氛围上比较，混乱，但是确实难得的情绪上暂时告一段落，没有更多吊着一口气的地方了(除非你马上就想看她们开live)如果要停一下的话，可以趁着这个时间收拾一下心情，把之前的六集里面一些感兴趣的地方再看一看，说不定会有新的发现
    </p>
    <p>毕竟这部动画被大家叫做契诃夫军火库也是有理由的，而接下来的情绪过山车可就没有那么多时间由得人细想了</p>`},{floor:"336",username:"overfly48",time:"2023-11-20 15:55",reply:"331",comment:`<p>一顿饭换了谭友的直播楼</p>
    <p>这下奉为赛博亚父</p>`},{floor:"346",username:"typeomicron",time:"2023-11-20 17:21",reply:"",comment:`<p>我的观后感比较奇怪</p>
    <p>很羡慕能只要请一顿饭就会去看mygo的朋友，我强迫别人看都是使尽了手段</p>`},{floor:"349",username:"Darkly23",time:"2023-11-20 18:33",reply:"346",comment:`<p>如果是安利给了对的人，应该会是被对方请吃饭(真实经历</p>
    <p>比如楼主，被请客的理由也不是“吃了安利”而是“建直播楼”，能对上电波并乐在其中才是最重要的</p>`},{floor:"351",username:"夜空下的夕阳",time:"2023-11-20 19:00",reply:"",comment:`<p>看完mygo的人会伸长脖子看其他直播看mygo的人。</p>
    <p>我愿意称之为一辈子看mygo的循环</p>`},{floor:"353",username:"黑堂隐月",time:"2023-11-20 19:24",reply:"",comment:`<p>我澄清一下</p>
    <p>我在直播楼里见到两个还没直播完的了哭笑</p>
    <p>伥鬼化有明显加速现象</p>`},{floor:"361",username:"kngchau",time:"2023-11-20 22:06",reply:"",comment:"<p>我回来了兄弟们！第6话开始！</p>"},{floor:"362",username:"kngchau",time:"2023-11-20 22:08",reply:"",comment:`<p><img src="/image/362.jpg" style="zoom:33%;" /> </p>
    <p>爱音你演我呢？这才几天时间就熟练大横按，和弦转换这么流畅？？你也是呆唯？</p>`},{floor:"365",username:"索德-莱特",time:"2023-11-20 22:10",reply:"362",comment:"<p>狠狠的练了是这样的，缩在角落一个人练哭笑爱音的设定是有天赋但容易停，没东西逼她一下她就逃了。</p>"},{floor:"366",username:"kngchau",time:"2023-11-20 22:12",reply:"",comment:`<p><img src="/image/366.jpg" style="zoom:33%;" /> </p>
    <p>不是，一个爱音刚会弹吉他，一个灯歌词其实是日记，一个soyo其实是当年祥子看着低音提琴拉得好被拉来的，被我认为是顶梁柱的立希作曲也是现学的？？</p>
    <p>你们这什么草台班子啊</p>`},{floor:"367",username:"kngchau",time:"2023-11-20 22:17",reply:"",comment:`<p><img src="/image/367.jpg" style="zoom:33%;" /> </p>
    <p>我之前就想吐槽了，你们贵族学校的大小姐，不是应该搞点花艺茶道什么的，怎么每天种黄瓜</p>
    <p>btw，睦喜欢soyo这假药越来越真了，她俩同框频率也太高了</p>
    <p>如果这个假药真，那睦也太惨了！明明因为喜欢soyo才跟她在一起，结果她每天跟自己聊的全都是祥子的事</p>
    <p>完全届不到啊</p>`},{floor:"370",username:"kngchau",time:"2023-11-20 22:20",reply:"",comment:`<p><img src="/image/370.jpg" style="zoom:33%;" /> </p>
    <p>这里soyo的语气让人有些不爽啊，感觉soyo一直大小姐人设，只有对睦才会这么过分和压迫(暴露本性？)</p>
    <p>不会是被偏爱的有恃无恐吧</p>
    <p>那soyo和睦的假药真是越来越真了</p>`},{floor:"374",username:"kngchau",time:"2023-11-20 22:28",reply:"",comment:`<p>爱音始终在错付</p>
    <p>不过你俩出现得也太不是时候了，你俩晚点出来说不定主线就可以推动了！</p>
    <p><img src="/image/374.jpg" style="zoom:33%;" /> </p>`},{floor:"376",username:"kngchau",time:"2023-11-20 22:40",reply:"",comment:`<p><img src="/image/376.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈在被子里练习好可爱</p>`},{floor:"377",username:"kngchau",time:"2023-11-20 22:41",reply:"",comment:`<p><img src="/image/377.jpg" style="zoom:33%;" /> </p>
    <p>我靠？？？？你们仨是一个学校的，还是一个班的？？还坐前后桌，好家伙</p>
    <p><del>(这就是邦邦么，爱了</del></p>`},{floor:"378",username:"kngchau",time:"2023-11-20 22:43",reply:"",comment:`<p><img src="/image/378.jpg" style="zoom:33%;" /> </p>
    <p>祥子到底是什么魅魔啊我人傻了，人均暗恋祥子是吧</p>`},{floor:"380",username:"kngchau",time:"2023-11-20 22:44",reply:"",comment:`<p><img src="/image/380.jpg" style="zoom:33%;" /> </p>
    <p>感觉立希是真的急了啊，她真的很重视这次live了，有点上头口不择言了唉。</p>`},{floor:"382",username:"kngchau",time:"2023-11-20 22:49",reply:"",comment:`<p><img src="/image/382.jpg" style="zoom:33%;" /> </p>
    <p>我看到这儿了，已经明白了。感觉立希个性里是有些自卑的成分在里面，或者说应该是很渴望认可，应该之前一直活在跟姐姐的比较里，这次又开始代入跟祥子的比较了。</p>
    <p>我理解她为什么这么重视这次live了。这是mygo团取代c团的第一次live，也是她作曲取代祥子的第一次作曲，她想证明自己不比祥子差。</p>
    <p>假药时间：</p>
    <p>立希：“灯，我一定要证明，我做的一定比你前女友更好！”</p>`},{floor:"383",username:"立希RRRR",time:"2023-11-20 22:50",reply:"382",comment:`<p>要是立希病情那麼輕就好了</p>
    <p>第五集他講過&quot;讓我覺得我這種人也有資格活下去&quot;</p>`},{floor:"384",username:"kngchau",time:"2023-11-20 22:51",reply:"",comment:`<p><img src="/image/384.jpg" style="zoom:33%;" /> </p>
    <p>我知道为什么都不让我看第7话了，看来第7话要开始解决祥子退团这个主线问题了，而且看起来一话解决不完</p>`},{floor:"385",username:"甲基晨",time:"2023-11-20 22:53",reply:"384",comment:"<p>等你明天看到第七集再回来看看自己的猜测(</p>"},{floor:"386",username:"kngchau",time:"2023-11-20 22:54",reply:"383",comment:"<p>对，这里我当时还截图了，看起来立希这个，应该说自卑么还是什么，比自卑更严重的这个心理问题。</p>"},{floor:"389",username:"kngchau",time:"2023-11-20 22:57",reply:"",comment:`<p><img src="/image/389-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/389-2.jpg" style="zoom:33%;" /> </p>
    <p>唉，立希……真的给自己太大压力了。</p>
    <p>我大概看明白了，立希围绕着一个自卑的问题，灯是一个自闭的问题，爱音是有一个自尊的问题。</p>
    <p>现在还不清楚soyo会有什么样的心理上的问题，可能是她对过去的执念？乐奈就不太清楚了，戏份太少了 ，<del>可能是个自由的问题。</del></p>`},{floor:"391",username:"kngchau",time:"2023-11-20 22:59",reply:"",comment:`<p><img src="/image/391.jpg" style="zoom:33%;" /> </p>
    <p>一首《想太多》送给爱音：</p>
    <p>所以你说“我们”，不是你和我</p>
    <p>哎，感觉很适合剪个AMV</p>`},{floor:"393",username:"kngchau",time:"2023-11-20 23:05",reply:"",comment:`<p><img src="/image/393-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/393-2.jpg" style="zoom:33%;" /> </p>
    <p>这两句就是立希的症结所在啊，对自己要求太高，自卑又给自己太大的压力，奈何她比较的对象又真的太完美了</p>`},{floor:"394",username:"kngchau",time:"2023-11-20 23:06",reply:"",comment:`<p><img src="/image/394.jpg" style="zoom:33%;" /> </p>
    <p>可怜的爱音没有意识到soyo说的“大家”其实不包括你么</p>`},{floor:"396",username:"kngchau",time:"2023-11-20 23:07",reply:"",comment:`<p><img src="/image/396-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/396-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/396-3.jpg" style="zoom:33%;" /> </p>
    <p>海玲和立希真的好好磕！</p>
    <p>另外这里海玲最后加入ave mujica的动因找到了，她虽然在好几个乐队里充当临时乐手，但是还是很渴望有一个自己的乐队的。</p>`},{floor:"397",username:"kngchau",time:"2023-11-20 23:09",reply:"",comment:`<p><img src="/image/397-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/397-2.jpg" style="zoom:33%;" /> </p>
    <p>这里像极了硬要凭空加飙车戏的爆米花电影</p>
    <p>你们美少女番就一定要加个美少女追逐战是吧(幻视久美子雨中追小奏</p>
    <p>btw，灯釜底抽薪nice</p>`},{floor:"399",username:"kngchau",time:"2023-11-20 23:10",reply:"",comment:`<p><img src="/image/399-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/399-2.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈笑死，这俩路过老师办公室还知道减速也太真实了</p>`},{floor:"400",username:"kngchau",time:"2023-11-20 23:11",reply:"",comment:`<p><img src="/image/400.jpg" style="zoom:33%;" /> </p>
    <p>不得不说，这俩真的好好磕</p>`},{floor:"401",username:"黑堂隐月",time:"2023-11-20 23:12",reply:"",comment:`<p>不让你看第七话的确实是我们</p>
    <p>原因不能说，依据楼主的情况，我建议往复杂了想</p>
    <p>另外</p>
    <p>爱音与soyo的对话可以看看爱音的各种小表情</p>
    <p>现在不注意也没所谓，后面还有的</p>
    <p>我承认我有圣化爱音的成分，但她真的不是小笨蛋</p>`},{floor:"402",username:"kngchau",time:"2023-11-20 23:13",reply:"",comment:`<p>本回顶级构图 <del>(假药)</del> ，一边是喜欢祥子的初华，一边是喜欢祥子的soyo，两大重女一个在明一个在暗，说不定都在想祥子的事情</p>
    <p><img src="/image/402.jpg" style="zoom:33%;" /> </p>`},{floor:"405",username:"kngchau",time:"2023-11-20 23:15",reply:"",comment:"<p>OK今天的计划结束，第7话留到明天了，听劝。不过准备奶一口明天的剧情！(期待被打脸</p>"},{floor:"406",username:"kngchau",time:"2023-11-20 23:18",reply:"",comment:`<p>根据下集预告，这live肯定是开起来了，但是肯定出了点问题。</p>
    <p>看爱音的表情，应该这货现场又出问题了，预计可能是跟孤独摇滚一样，有一些不忍卒睹尬穿地心的现场。</p>`},{floor:"409",username:"kngchau",time:"2023-11-20 23:24",reply:"",comment:`<p><img src="/image/409-1.jpg" style="zoom:33%;" /> </p>
    <p>但是这个地方十分让人在意。感觉可能预示着下回的重大剧情走向。</p>
    <p>soyo的贝斯应该是挺熟了，至少不至于出问题，那么soyo这个表情是为什么呢？</p>
    <p>而且，从soyo视角来看，她只是想复活c团而已吧，这爱音把live搞砸了应该也不至于有这样的表情。</p>
    <p>感觉最有可能的线索在这儿：</p>
    <p><img src="/image/409-2.jpg" style="zoom:33%;" /> </p>
    <p>祥子得知soyo组了新乐队，第一反应是这是在羞辱我么。</p>
    <p>
      mygo团现在应该只是在大乐队间隙给人暖场的小透明，所以应该是祥子来听某个大乐队的live，结果无意间碰上了上来暖场的mygo，然后祥子已经知道了soyo在组乐队，肯定没什么，但是soyo看到台下站着祥子，哈哈哈哈炸裂。有种一边挽回前女友，一边又谈了一个新女友，然后跟新女友逛街被前女友发现了的感觉。
    </p>
    <p>哈哈哈哈假药结束~</p>`},{floor:"412",username:"kngchau",time:"2023-11-20 23:27",reply:"",comment:`<p>
      如果第7话剧情是这种尴尬场面，那么后续可能比较乐观，后面第8话可能就是soyo找祥子解释，祥子心一软，把事实澄清一下，然后跟soyo说既然你现在已经有新的归宿我也放心了，我带上睦再组一个乐队，我们比比谁的作品更优秀吧，后面变成敌人&amp;朋友的这种关系
    </p>
    <p>哈哈哈哈，不过这样其实还是解释不了祥子为什么拆了c团，后面又组了ave mujica</p>`},{floor:"413",username:"kngchau",time:"2023-11-20 23:30",reply:"",comment:`<p>一般这类乐队番应该以7 8为分界分成A part和B part吧，A part讲乐队组成，B part讲组好乐队之后解决的下一段剧情</p>
    <p>现在是A part应该快结束了，预计第8话mygo团就能落地，但是本季叫it&#39;s mygo，应该不会有太多ave
      mujica的戏份，那么mygo下一段剧情从哪儿开始发力就是问题了，感觉剧情冲突没有了，前面似乎也没有太多关于后续剧情冲突点的伏笔，这点还蛮好奇的。</p>`},{floor:"414",username:"KamenRider-Luyuan",time:"2023-11-20 23:30",reply:"394",comment:"<p>不要太小看爱音，好歹是当过学生会长的，只不过她不会主动往糟糕的方面想</p>"},{floor:"415",username:"kngchau",time:"2023-11-20 23:31",reply:"414",comment:"<p>的确soyo说了大家之后，爱音的表情特写，她好像是懂的</p>"},{floor:"416",username:"Saltyfish_King",time:"2023-11-20 23:32",reply:"413",comment:"<p>楼主分析的好精准，感觉你天生就是看这个的</p>"},{floor:"418",username:"黑堂隐月",time:"2023-11-20 23:35",reply:"",comment:`<p>楼主思考得越多，预测得越多</p>
    <p>到时就会愈发的美味呀</p>`},{floor:"419",username:"ch19930611",time:"2023-11-20 23:36",reply:"409",comment:"<p>其实第六集里睦和大祥老师提了去live的话就能碰到soyo，所以应该是大祥老师主动找她把话挑明</p>"},{floor:"421",username:"叹之惘然",time:"2023-11-20 23:37",reply:"",comment:`<p>打了一下午宝可梦回来，楼主已经彻底成为mygo腐乳了啊</p>
    <p>桀桀桀，不过好戏明天才要开始啊，一下到明天楼主看完第七集就停住，后天看完第八集就停住，我就我就，就兴奋到扯旗啊口牙</p>
    <p>顺带一提楼主的猜测几乎都在对与错之间左右横跳，绝对是名侦探吧喂()</p>`},{floor:"425",username:"kngchau",time:"2023-11-20 23:39",reply:"419",comment:`<p>对，如果这样的话其实在下一话祥子和soyo应该就能直接地解决一下c团的问题。</p>
    <p>不过一来楼里让我想复杂点，二来我觉得祥子很难给出一个我能接受的理由来解决c团的问题</p>
    <p>而且以soyo对c团的执念，也很难说一场live就能忘掉。</p>
    <p>艹 如果真的能的话，那岂不是音乐番里的睡服</p>
    <p>本来对c团念念不忘的soyo小姐姐，在跟新团开了一场live后，被新团的音乐打动，决定抛开过去，留在新团</p>
    <p><del>你们邦邦有这样的设定么，暗黑版的音乐打动人心，音乐版的黄毛(们)(？)睡服女主</del></p>`},{floor:"427",username:"DarthPPT",time:"2023-11-20 23:43",reply:"",comment:`<p>好像全对了，又好像全错了</p>
    <p>lz，现在的你，很美味！</p>`},{floor:"430",username:"unkonw990",time:"2023-11-20 23:47",reply:"",comment:"<p>楼主猜得挺准，第八话都手牵手了</p>"},{floor:"431",username:"kngchau",time:"2023-11-20 23:48",reply:"",comment:"<p>话说我姑且问一句，邦邦前作都是这种类型的企划么</p>"},{floor:"433",username:"轻风cc",time:"2023-11-20 23:54",reply:"431",comment:`<p>游戏倒是有不少比mygo还要狠的狠活，比起游戏来说mygo甚至算是收敛了。</p>
    <p>倒是动漫，前三季只能说整了一些别人不敢整的活，但是还达不到mygo这样革命性的程度。</p>`},{floor:"436",username:"kngchau",time:"2023-11-20 23:58",reply:"433",comment:`<p>mygo现在看下来的确很不同，在卖人设企划里敢做一大堆性格天然有硬伤的角色真的很大胆，但是革命性剧情……</p>
    <p>我要期待下面发展了</p>
    <p>因为按我的预测下面应该做收束了，莫不是乐队成立之后的B part有狠活</p>`},{floor:"439",username:"Fallenleaf_落叶",time:"2023-11-21 00:08",reply:"",comment:`<p>1.楼内各位请别剧透楼主</p>
    <p>2.楼主后续可以一天一集(然后剩下的时间用来复盘，以及找对应播出时间段内的mygo二创看感受当时的氛围)</p>
    <p>3.推荐楼主听一下mygo翻唱的teardrops</p>`},{floor:"440",username:"秋叶罹殇",time:"2023-11-21 00:10",reply:"",comment:"<p>怎么就第六话了 一天一级呢</p>"},{floor:"441",username:"kngchau",time:"2023-11-21 00:10",reply:"439",comment:"<p>据说第7话开了之后我没有能力控制住自己</p>"},{floor:"442",username:"黑堂隐月",time:"2023-11-21 00:10",reply:"",comment:`<p>明天的第七话看完后楼主的某些猜测应该就要推翻后重头来过了</p>
    <p>根基性质的东西出错的话某种意义上建立于此的推测都变成了无效项</p>
    <p><del>但大伙得到了乐子，所以楼主的努力没有木大</del></p>`},{floor:"443",username:"kngchau",time:"2023-11-21 00:12",reply:"440",comment:`<p>是mygo先动的手！</p>
    <p>坛友怂恿我看1-3，看完灯被破防就忍不住看4 5了，然后被警告不能看7于是把6看了……</p>
    <p>多么的……顺理成章(？)</p>`},{floor:"445",username:"kngchau",time:"2023-11-21 00:13",reply:"442",comment:`<p>我确信你们得到了乐子，看了我的预测朋友已经笑疯了</p>
    <p>看了她和你们的反应我越来越期待后面的发展了</p>`},{floor:"455",username:"py123456aa",time:"2023-11-21 09:24",reply:"",comment:"<p>对的对的，哦不对不对，诶呀对的对的，哎呦对什么对呀不对不对。对。。。对吗</p>"},{floor:"459",username:"kngchau",time:"2023-11-21 12:11",reply:"",comment:"<p>下午有课，决定午饭时间先把第7话看了</p>"},{floor:"462",username:"轻风cc",time:"2023-11-21 12:14",reply:"459",comment:"<p>我劝你如果不打算下午满脑子都是mygo的话最好不要看第七话……</p>"},{floor:"464",username:"kngchau",time:"2023-11-21 12:15",reply:"462",comment:"<p>朋友：看吧看吧，本来可是想让你一天一话的，体会体会我们追番时候的快乐</p>"},{floor:"465",username:"kngchau",time:"2023-11-21 12:16",reply:"",comment:`<p><img src="/image/465.jpg" style="zoom:33%;" /> </p>
    <p>题外话：这俩妹子是不是邦邦前作角色啊，感觉好可爱</p>`},{floor:"468",username:"kngchau",time:"2023-11-21 12:17",reply:"",comment:`<p><img src="/image/468.jpg" style="zoom:33%;" /> </p>
    <p>live前一天把鼓手抓回来，试音的时候把吉他手抓回来，你们这个live是非开不可么</p>`},{floor:"470",username:"kngchau",time:"2023-11-21 12:19",reply:"",comment:"<p>话说如果第七话顺利live成团之后，op是不是会换一个了</p>"},{floor:"471",username:"kngchau",time:"2023-11-21 12:20",reply:"",comment:`<p><img src="/image/471.jpg" style="zoom:33%;" /> </p>
    <p>镜子里穿帮啦！！</p>`},{floor:"474",username:"martinquincy",time:"2023-11-21 12:21",reply:"470",comment:"<p>如果当时确实换一个的话那可就神了</p>"},{floor:"476",username:"kngchau",time:"2023-11-21 12:23",reply:"",comment:`<p><img src="/image/476.jpg" style="zoom:33%;" /> </p>
    <p>这个休息室的紧张氛围烘托得好好啊，我都开始有点紧张了</p>`},{floor:"477",username:"kngchau",time:"2023-11-21 12:26",reply:"",comment:`<p><img src="/image/477.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈我来打脸了，昨天猜错了，祥子没来。那soyo那个表情是为什么我更好奇了</p>`},{floor:"479",username:"kngchau",time:"2023-11-21 12:27",reply:"",comment:`<p><img src="/image/479.jpg" style="zoom:33%;" /> </p>
    <p>我靠！打脸刚才的打脸！</p>
    <p>她俩真的来了！！看起来是专门来听mygo的live的！</p>
    <p>我靠好戏要开场了</p>`},{floor:"487",username:"kngchau",time:"2023-11-21 12:33",reply:"",comment:`<p><img src="/image/487.jpg" style="zoom:33%;" /> </p>
    <p>一首完整的歌肯定没办法中断哈~第一首听完了来发个长评</p>
    <p>太精彩了！！！</p>
    <p>原来mygo是这么解决了成团的问题，竟然是靠灯看到前任祥子来听歌，放下了过去能唱出声音，祥子也笑了。果然音乐番世界观就要靠音乐来解决啊。</p>`},{floor:"488",username:"kngchau",time:"2023-11-21 12:34",reply:"",comment:"<p>另外这首歌，我要大吹特吹呀！词也太棒了！</p>"},{floor:"489",username:"索德-莱特",time:"2023-11-21 12:34",reply:"487",comment:"<p>你说对了，但是可能和你想的稍微有点区别</p>"},{floor:"495",username:"火龙果叉烧肠粉",time:"2023-11-21 12:35",reply:"488",comment:"<p>碧天绊走是灯写给爱音的哦，之前的春日影和成为人类之歌是自己的呐喊，这也是她第一次给别人写词</p>"},{floor:"500",username:"kngchau",time:"2023-11-21 12:36",reply:"",comment:`<p>感觉就是灯写给每一个人的，特别特别合适的歌词，感觉立希、爱音、soyo每个人都能从这歌里听到自己！</p>
    <p>我明白立希为什么为了这首歌那么拼命了，这首歌在她听来简直是在写自己啊，尤其是那句：我不会再说“我这种人了”。完完全全就是立希。立希你已经很努力了，已经很拼命了，做回自己就好，放弃那些没有意义的比较。</p>
    <p>爱音也一样，soyo也一样，你们都值得开开心心地继续生活下去，忘掉过去就好了呀！</p>`},{floor:"503",username:"kngchau",time:"2023-11-21 12:37",reply:"",comment:"<p>唯一的问题是主唱声音有点小 <del>(主唱太不拼命了)</del> ，但是她们既然顺利开了live，感觉能在后面听到这首歌的完整完美演绎版。期待了。</p>"},{floor:"504",username:"kngchau",time:"2023-11-21 12:38",reply:"",comment:"<p>OK我要继续听下一首了，这live回也太享受了</p>"},{floor:"506",username:"谷不勤",time:"2023-11-21 12:39",reply:"504",comment:"<p>太享受了(指长颈鹿们)</p>"},{floor:"507",username:"卜也挺好吗",time:"2023-11-21 12:39",reply:"",comment:"<p>悲报，碧天伴走就没在番剧里好好演奏过</p>"},{floor:"512",username:"kngchau",time:"2023-11-21 12:44",reply:"",comment:`<p><img src="/image/512.jpg" referrerpolicy="no-referrer"><img src="/image/512.jpg"
        referrerpolicy="no-referrer"><img src="/image/512.jpg" referrerpolicy="no-referrer"><img src="/image/512.jpg"
        referrerpolicy="no-referrer"><img src="/image/512.jpg" referrerpolicy="no-referrer"><img
        src="/image/512.jpg" referrerpolicy="no-referrer"></p>`},{floor:"514",username:"kngchau",time:"2023-11-21 12:44",reply:"",comment:"<p>这跟说好的不一样啊！！！楼里你们这群骗子</p>"},{floor:"515",username:"Ryodaze",time:"2023-11-21 12:44",reply:"512",comment:`<p>嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</p>
    <p>多谢款待！</p>`},{floor:"517",username:"kngchau",time:"2023-11-21 12:44",reply:"",comment:`<p><img src="/image/517-1.jpg" referrerpolicy="no-referrer"><img src="/image/512.jpg"
        referrerpolicy="no-referrer"><img src="/image/517-2.jpg" referrerpolicy="no-referrer"><img src="/image/517-3.jpg"
        referrerpolicy="no-referrer"><img src="/image/517-4.jpg" referrerpolicy="no-referrer"></p>`},{floor:"520",username:"夏目提督",time:"2023-11-21 12:45",reply:"517",comment:"<p>好！我要看的就是这个！</p>"},{floor:"521",username:"kngchau",time:"2023-11-21 12:45",reply:"",comment:"<p>让我缓缓</p>"},{floor:"525",username:"西园寺凹凹子",time:"2023-11-21 12:45",reply:"",comment:"<p>你就说灯皇是不是完美发挥吧</p>"},{floor:"528",username:"caricy",time:"2023-11-21 12:46",reply:"",comment:"<p>“不属于crychic的春日影”</p>"},{floor:"529",username:"鬼龙影天",time:"2023-11-21 12:46",reply:"",comment:`<p>楼里有骗你吗</p>
    <p>大家明明都非常诚实 <del>在等着看第七集的乐子</del></p>`},{floor:"531",username:"71和EU",time:"2023-11-21 12:46",reply:"514",comment:"<p>唉，娃儿，你着相了，这哪里有C团的姨姥，都是M团的帐鬼！</p>"},{floor:"533",username:"轻风cc",time:"2023-11-21 12:47",reply:"",comment:"<p>我可是劝过你上课前别看第七集的，这要怪怪你朋友吧。</p>"},{floor:"536",username:"Ryodaze",time:"2023-11-21 12:48",reply:"",comment:`<p>楼主 第七集ed后还有c part别忘了哦</p>
    <p>一天一集！第八集就留到明天，先来和大家复盘一整天的第七集吧！</p>`},{floor:"539",username:"kngchau",time:"2023-11-21 12:49",reply:"",comment:"<p>哦对还有C part，我先去看完C part再来复盘</p>"},{floor:"541",username:"kngchau",time:"2023-11-21 12:50",reply:"",comment:`<p><img src="/image/541.jpg" style="zoom:33%;" /> </p>
    <p>艹</p>
    <p>我看的是正经番么</p>
    <p>你想怎么忘掉一切啊</p>
    <p><del>(此处是不是有本</del></p>`},{floor:"542",username:"kngchau",time:"2023-11-21 12:52",reply:"",comment:`<p>不是啊，后期乐奈这个开团</p>
    <p>这不对啊</p>
    <p>这不对吧</p>
    <p>这团怎么能这么开呢？？？</p>`},{floor:"544",username:"unkonw990",time:"2023-11-21 12:52",reply:"",comment:"<p>楼主不要慌，下一话soyo马上就和祥子牵手，真的</p>"},{floor:"547",username:"kngchau",time:"2023-11-21 12:53",reply:"",comment:`<p>我靠我春日影前半段代入祥子破防一次，后半段代入soyo又破防一次</p>
    <p>直接给我沉默+穿甲一套带走了</p>`},{floor:"548",username:"摸鱼船长",time:"2023-11-21 12:53",reply:"542",comment:"<p>立希不说了吗，“灯MC后再弹”，人家说到做到</p>"},{floor:"549",username:"kngchau",time:"2023-11-21 12:53",reply:"544",comment:"<p>我再也不相信你们的鬼话了</p>"},{floor:"550",username:"西园寺凹凹子",time:"2023-11-21 12:53",reply:"",comment:`<p>立希:只有在灯宝mc之后才能弹琴哦</p>
    <p>猫猫只是听话的好孩子</p>`},{floor:"554",username:"西园寺凹凹子",time:"2023-11-21 12:55",reply:"549",comment:`<p>但他说的是真的哦</p>
    <p>楼里大家都可以证明</p>`},{floor:"555",username:"轻风cc",time:"2023-11-21 12:55",reply:"549",comment:"<p>他说的是真的，soyo下一话真的和祥子牵手互诉衷肠了。</p>"},{floor:"556",username:"kngchau",time:"2023-11-21 12:55",reply:"",comment:"<p>我靠太难受了，我现在还在双重代入soyo和祥子破防中</p>"},{floor:"561",username:"ch19930611",time:"2023-11-21 12:56",reply:"",comment:"<p>有没有一种可能，是灯想唱春日影给大祥老师听，猫猫读懂了她的意思，直接开始弹前奏。有个细节是C团春日影的前奏是键盘开始，这里是吉他开始，所以已经没有大祥老师的位子力</p>"},{floor:"565",username:"kngchau",time:"2023-11-21 12:58",reply:"",comment:`<p><img src="/image/565-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/565-2.jpg" style="zoom:33%;" /> </p>
    <p>这里真的太难受了，如果祥子真的是有什么难言之隐迫不得已才退团，那真的太难受了</p>
    <p>明明是她和灯两个人自己的歌，可是现在昔日的队友和两个陌生的女人站在台上动情地唱，至少在祥子看起来，灯口中的那个光，已经变成了爱音她们</p>`},{floor:"567",username:"kngchau",time:"2023-11-21 12:59",reply:"",comment:`<p>突然想到一句歌词</p>
    <p>你在台上唱着我的创作，布局谋篇像本悲情小说</p>`},{floor:"569",username:"kngchau",time:"2023-11-21 13:00",reply:"",comment:"<p>春日影在这唱给祥子听那这布局谋篇真纯纯悲情小说啊</p>"},{floor:"577",username:"kngchau",time:"2023-11-21 13:03",reply:"",comment:`<p><img src="/image/577-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/577-2.jpg" style="zoom:33%;" /> </p>
    <p>制作组你是会迫害的</p>
    <p>这两句子配给祥子的画面真的，钻心疼</p>`},{floor:"579",username:"西园寺凹凹子",time:"2023-11-21 13:03",reply:"",comment:`<p>某些音乐up主在这里的解读更是残酷</p>
    <p>此时的大祥老师，一定无法静音掉脑内的钢琴伴奏音轨，肌肉记忆在伴随着旋律做出反应，却既没有键盘也没有立场和大家再弹奏这支曲子</p>`},{floor:"581",username:"71和EU",time:"2023-11-21 13:05",reply:"577",comment:`<p>这个镜头的歌词，我更喜欢另一种翻译</p>
    <p>绽放骄傲的重要之人</p>
    <p>完全卡在祥子小珍珠掉下来的点出的歌词，堪称完美</p>`},{floor:"582",username:"kngchau",time:"2023-11-21 13:05",reply:"",comment:`<p><img src="/image/582-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/582-2.jpg" style="zoom:33%;" /> </p>
    <p>后半段就开始迫害soyo，soyo的画面歌词配得一绝</p>
    <p>看着面前的好友把挚爱的祥子唱破防，自己不光什么都做不了还是帮凶，真的，更难受了</p>`},{floor:"584",username:"kngchau",time:"2023-11-21 13:06",reply:"",comment:`<p><img src="/image/584.jpg" style="zoom:33%;" /> </p>
    <p>真的太痛了，我真的很想跟soyo吼一样的话</p>
    <p>那可是灯和祥子的情歌啊，你们mygo有了上一首那么绝配那么棒的歌不好么？为什么要唱春日影啊啊啊啊啊</p>`},{floor:"586",username:"一虫破万法",time:"2023-11-21 13:09",reply:"249",comment:"<p>soyo？何时来的？</p>"},{floor:"588",username:"kngchau",time:"2023-11-21 13:10",reply:"409",comment:`<p>我来亲自打脸一下</p>
    <p>结论：猜对了，但是全tm猜错了</p>
    <p>猜到了soyo可能是看到了祥子破防，没想到剧情是这个猜想的超级加倍pro plus max ultra版，是soyo亲自弹了春日影看到祥子破防之后而破防</p>
    <p>这真是真实伤害我艹</p>`},{floor:"591",username:"kngchau",time:"2023-11-21 13:12",reply:"586",comment:`<p>谢谢你让我想起来了之前这条</p>
    <p>真就是ntr的感觉</p>
    <p>如果说祥子是女主，那soyo就是又当苦主又当黄毛</p>
    <p>soyo不破防谁破防</p>
    <p>哦对，还有我</p>
    <p>我破大防</p>`},{floor:"593",username:"西园寺凹凹子",time:"2023-11-21 13:12",reply:"",comment:`<p>矛盾已经爆发了</p>
    <p>该解决矛盾包饺子了</p>`},{floor:"597",username:"kngchau",time:"2023-11-21 13:14",reply:"",comment:`<p>第八集走向我完全迷惑了，我知道你们为什么说mygo剧情是革命性的了。一般上一个剧情段落到了第7话这里要收束一下了，下面开始新阶段。</p>
    <p>结果你mygo到了第7话，眼瞅着刹车就要点下去了，结果后面直接一脚地板油</p>
    <p>人傻了</p>
    <p>你这怎么解决啊</p>`},{floor:"599",username:"谷不勤",time:"2023-11-21 13:14",reply:"",comment:`<p>楼主你就说大家现在享受不享受吧。</p>
    <p>然后，楼主，你便把现在心中的震惊，纠结，苦涩，给我好好体会</p>
    <p>因为在接下来的集数里，你将感到的是……乘二！</p>`},{floor:"603",username:"kngchau",time:"2023-11-21 13:17",reply:"",comment:"<p>下集预告看起来也没什么有用的信息</p>"},{floor:"604",username:"unkonw990",time:"2023-11-21 13:17",reply:"",comment:"<p>下午是14:00上课吗？教室远不远？先平复一下心情，准备上课吧</p>"},{floor:"605",username:"kngchau",time:"2023-11-21 13:20",reply:"604",comment:`<p>谢谢，两点上课，我缓过来了。</p>
    <p>主要我觉得这里断章断在这儿很有可能是个欺诈，应该是故意断在剧情最低谷的。</p>
    <p>后面剧情应该不会这么悲观，毕竟这个问题是可以说清楚的。</p>`},{floor:"607",username:"西园寺凹凹子",time:"2023-11-21 13:21",reply:"",comment:"<p>确实，下一集的主题就是见面说清楚</p>"},{floor:"609",username:"kngchau",time:"2023-11-21 13:21",reply:"",comment:`<p>这里剧情的关键点在于祥子和soyo没有见面好好谈，一五一十的把话说清楚。</p>
    <p>只要祥子和soyo见面了，祥子说清楚退团的原因，soyo说清楚她还是爱着祥子(？)和C团的，然后她们互项理解，问题应该是可以解决的。</p>`},{floor:"612",username:"西园寺凹凹子",time:"2023-11-21 13:23",reply:"",comment:`<p>如果soyo看到这个帖子，肯定会指着楼主说</p>
    <p>天啊这根本就是我</p>`},{floor:"613",username:"Kfly",time:"2023-11-21 13:23",reply:"609",comment:"<p>老哥你的见解真不是没有道理的，人与人之间终究要互相理解的啊</p>"},{floor:"614",username:"Inattent",time:"2023-11-21 13:24",reply:"609",comment:"<p>只要soyo和祥子见面了，一切都会好起来的</p>"},{floor:"618",username:"kngchau",time:"2023-11-21 13:26",reply:"",comment:`<p>睦是全程陪着soyo复兴C团，又是她来陪着祥子听live，睦在前期一直是个工具人，我感觉下一话里应该剧情推动应该会落在睦身上。</p>
    <p>比如睦看到这个情况觉得祥子状态很不好，终于肯把soyo和祥子拉到一起了，然后两个人坐在一起</p>
    <p>可能去的还是最早那个咖啡店，然后让C团由此开始，并最终在此结束，和平分手</p>
    <p>之后祥子和睦 以及soyo她们可以各自没有顾虑地开始新的乐队了</p>
    <p>这样解决的话其实第8话问题就结束了，C团的开始和结束也有一种对称的美。这样解决问题虽然晚了些，但是毕竟是13话的作品，后面还有5话足够展开一段新的发展。</p>`},{floor:"620",username:"kngchau",time:"2023-11-21 13:28",reply:"",comment:`<p>我觉得我OK了~虽然这段剧情非常刺激，但是未来可期</p>
    <p>不过看你们的反应总感觉又是哪里猜错了的样子</p>
    <p>不重要，我被剧情打脸我也很开心，如果剧情能直接被我猜到那显然是个很无聊的剧情</p>`},{floor:"623",username:"黑堂隐月",time:"2023-11-21 13:29",reply:"",comment:`<p>楼主分析完了对吧</p>
    <p>那...</p>
    <p>你刚刚干掉的是四天王里最菜的那个</p>
    <p>等你上完课回来</p>`},{floor:"628",username:"彩笔小旧",time:"2023-11-21 13:30",reply:"618",comment:`<p>兄弟你真的不是看过一遍来装萌新戏耍网友们的嘛？</p>
    <p>这直觉也太准了，第8话就是睦全程陪soyo找祥子好好沟通，而且睦也确实是在关键的剧情点上做了推动。</p>
    <p>简直简直了，有考虑过当编剧嘛？</p>`},{floor:"629",username:"yako0755",time:"2023-11-21 13:31",reply:"",comment:`<p>看到楼主的样子让我回忆起了那个八月</p>
    <p>看大家都在吹MyGO，让我瞧瞧是怎么个事.jpg</p>
    <p>往笔记本上下好了6集MyGO，在飞机上一次嗑了六集</p>
    <p>落地收到信号还没下飞机我就已经在群里发电了</p>`},{floor:"632",username:"kngchau",time:"2023-11-21 13:34",reply:"628",comment:`<p>我觉得你这绝对不是夸我</p>
    <p>第八话肯定有非常意料之外的展开</p>`},{floor:"636",username:"西园寺凹凹子",time:"2023-11-21 13:40",reply:"",comment:`<p>楼主已经完全领悟了soyo立场和偶像剧制片方立场</p>
    <p>但这里就很适合大陆秀夫的一句话</p>
    <p>角色也有自己的生活</p>`},{floor:"641",username:"松鼠之梦",time:"2023-11-21 13:47",reply:"",comment:`<p>首先，感谢楼主的这盘好菜。</p>
    <p>其次说点楼主一周目没办法注意到的环节。
      忘记一切算是动画前期一个释放点，这句话其实谁都可以说，它就是mygo的x张力。</p>
    <p>猫猫不是乱弹琴。</p>
    <p><img src="/image/641-1.jpg" alt="img" style="zoom: 50%;" /> </p>
    <p>前面休息室的时候有提到过，猫的大部分互动是藏在几秒钟的对白里的。</p>
    <p>然后就是伸手环节。</p>
    <p><img src="/image/641-2.jpg" style="zoom: 50%;" /> </p>
    <p>我直说吧，春日影.crychic.ver有伸手，春日影.mygo.ver这个伸手，楼主你细品。</p>
    <p>祥子跑路环节是脚本独角兽老师最喜欢的镜头之一。</p>
    <p>原话为：第7集的春日影印象最深。“骄傲绽放的重要之人”这句歌词配上祥子哭泣着从会场逃离的镜头，说起来有点坏心眼，但实在是太棒了。第十集出色的live也很不错。 翻译：Miki Sayaka</p>
    <p>(因为这是完结访谈，所以楼主要等完结再去看)</p>
    <p>不过现在可以解谜的是，独角兽老师担任脚本的集数都是重要集数，例如3、7。</p>
    <p>楼主刚刚被独角兽老师好好招待了一顿呢。</p>
    <p>soyo的问题我建议你重新看一遍1-7，找找soyo的镜头，作为过来者的提示有三：1、官网里写了soyo玩手指 2、soyo的语调 3、有soyo的场景中的打光和阴影以及背景。</p>
    <p>还有，堵上我的名誉做担保。</p>
    <p>第八集soyo和祥子百分之一百牵了手互诉心肠</p>`},{floor:"643",username:"火龙果叉烧肠粉",time:"2023-11-21 13:49",reply:"",comment:"<p>楼主今天还看第八集吗</p>"},{floor:"644",username:"kngchau",time:"2023-11-21 13:50",reply:"643",comment:"<p>看，我回来就看</p>"},{floor:"645",username:"kngchau",time:"2023-11-21 13:51",reply:"641",comment:`<p>谢谢~我好好品一品</p>
    <p>另外你们所有人都说的第八话牵手是怎么回事，我好好奇啊！！！！！</p>`},{floor:"650",username:"火龙果叉烧肠粉",time:"2023-11-21 13:53",reply:"645",comment:"<p>就是，字面意思啊，大家情绪已经烘托到位了，该约出来聊聊天解决问题了哭笑(这就是惊喜啊)</p>"},{floor:"652",username:"卖萌型抖抖",time:"2023-11-21 13:54",reply:"",comment:"<p>不是，昨天看见还是1/13，今天怎么就7/13了</p>"},{floor:"654",username:"谷不勤",time:"2023-11-21 13:56",reply:"",comment:`<p>第八集素祥牵手诉衷肠</p>
    <p>第九集迷子真心换真心</p>
    <p>第十集全员协力谋live</p>
    <p>赌上我的信誉没有半分虚假，真是庸俗的大团圆展开呢</p>`},{floor:"657",username:"DarthPPT",time:"2023-11-21 14:00",reply:"654",comment:`<p>太对了太对了</p>
    <p>真是俗套的展开呢</p>`},{floor:"664",username:"枞枞那年",time:"2023-11-21 14:08",reply:"",comment:"<p>后面真没什么看头，89集来解决问题然后10集开live，后面又开了两场live，同质化严重编剧没活了</p>"},{floor:"669",username:"永远背锅服务器",time:"2023-11-21 14:33",reply:"",comment:"<p>lz在我们这帮嗜血长颈鹿眼里比满汉全席还要美味啊</p>"},{floor:"685",username:"kngchau",time:"2023-11-21 16:09",reply:"",comment:"<p>安心，朋友跟我说很多二创画面有剧透，一个二创我都没看呢。</p>"},{floor:"686",username:"西园寺凹凹子",time:"2023-11-21 16:09",reply:"",comment:`<p>看来是在好好上课</p>
    <p>竟然没先写一下悟道了什么新东西</p>`},{floor:"687",username:"kngchau",time:"2023-11-21 16:10",reply:"686",comment:"<p>悟个锤子道，你知道我这两个小时多么煎熬么怒！当然是一回来就开始下一话了！！！</p>"},{floor:"688",username:"kngchau",time:"2023-11-21 16:11",reply:"686",comment:"<p>不过你们当时要等整整一星期，真能忍哭笑心疼</p>"},{floor:"692",username:"kngchau",time:"2023-11-21 16:13",reply:"",comment:`<p>你们楼里赞同我的人那么多那就说明……</p>
    <p>肯定不是那么发展啊喂！我早就看透你们了</p>`},{floor:"695",username:"71和EU",time:"2023-11-21 16:15",reply:"692",comment:"<p>错误的啊，大家是被楼主的惊世智慧深深折服了啊羡慕没想到小小的猴区居然出现了伟大的独角兽二世，这又如何能让人不点赞了</p>"},{floor:"697",username:"kngchau",time:"2023-11-21 16:18",reply:"",comment:`<p><img src="/image/697-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/697-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/697-3.jpg" style="zoom:33%;" /> </p>
    <p>这里很难绷，同班同学竟然连一个知道祥子叫什么的人都没有，祥子真是一个朋友多没有啊。</p>
    <p>对比之前c团大家一口一个saki酱</p>
    <p>唉</p>
    <p>祥子过得也很不好啊</p>`},{floor:"701",username:"kngchau",time:"2023-11-21 16:23",reply:"",comment:`<p><img src="/image/701.jpg" style="zoom:33%;" /> </p>
    <p>妈呀，soyo重女不是开玩笑的啊，假药成真了？这……</p>`},{floor:"703",username:"Kfly",time:"2023-11-21 16:24",reply:"697",comment:"<p>祥子的常用读法不是saki/sakiko，所以这里同学们没马上意识到是在说祥子，同时也表明祥子在这个班存在感不高</p>"},{floor:"704",username:"kngchau",time:"2023-11-21 16:26",reply:"",comment:`<p><img src="/image/704.jpg" style="zoom:33%;" /> </p>
    <p>这里感觉也有点问题，之前镜头给过灯的家人、爱音的家人、立希知道有姐姐、乐奈知道有奶奶(还是外婆来着？)，好像唯独没提过soyo的家人，她在家的镜头也是好大一个高层公寓，没有家人。</p>
    <p>soyo不会是父母不在了吧？</p>
    <p>可是父母不在应该不会有钱上贵族学校</p>
    <p>跟家里闹翻了？</p>
    <p>总之感觉soyo的家庭似乎是一个大问题</p>`},{floor:"707",username:"kngchau",time:"2023-11-21 16:28",reply:"",comment:`<p><img src="/image/707.jpg" style="zoom:33%;" /> </p>
    <p>初华也喜欢看星星？</p>
    <p>突然有个假药，灯和初华不会是血缘关系的吧？</p>
    <p>姐妹同时爱上祥子，哇……</p>`},{floor:"709",username:"kngchau",time:"2023-11-21 16:29",reply:"",comment:`<p><img src="/image/709.jpg" style="zoom:33%;" /> </p>
    <p>灯：我也是哦，你怎么不来找我哭笑</p>
    <p>假药越来越真了</p>`},{floor:"710",username:"一天猫两次的咸鱼博士",time:"2023-11-21 16:30",reply:"",comment:'<p><img src="/image/710.jpg" style="zoom: 80%;" /> </p>'},{floor:"711",username:"kngchau",time:"2023-11-21 16:31",reply:"",comment:`<p><img src="/image/711.jpg" style="zoom:33%;" /> </p>
    <p>等一下，当时都没注意，所以这短信是刚出道的时候就发给初华的，初华是隔三岔五把祥子好久之前给她发的短信拿出来看啊！</p>
    <p>我去，初华是真重女啊</p>`},{floor:"712",username:"轻风cc",time:"2023-11-21 16:32",reply:"711",comment:"<p>全员(不含爱音)重女警告。</p>"},{floor:"715",username:"kngchau",time:"2023-11-21 16:35",reply:"",comment:`<p><img src="/image/715.jpg" style="zoom:33%;" /> </p>
    <p>我又要把之前黑板上那个四人姐妹的假药翻新了</p>
    <p>已知：祥子、初华、灯都喜欢虫子和星星，有没有可能三人都是姐妹，如果一定要四人姐妹，就再算上青梅竹马的睦</p>
    <p>故事变成了四个(堂/表)姐妹组成乐队又各自分散的故事</p>`},{floor:"716",username:"kngchau",time:"2023-11-21 16:36",reply:"",comment:`<p><img src="/image/716.jpg" style="zoom:33%;" /> </p>
    <p>我要求婚了！</p>
    <p>哈哈哈不是，应该是要组ave mujica了吧。原来ave mujica成立这条线也要塞进mygo这一季了么，倒也合理</p>`},{floor:"718",username:"kngchau",time:"2023-11-21 16:37",reply:"",comment:`<p><img src="/image/718.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈爱音终究是错付了</p>`},{floor:"721",username:"LuckyLow",time:"2023-11-21 16:38",reply:"",comment:"<p>我从一楼爬到这 这么幸福真的可以吗</p>"},{floor:"722",username:"kngchau",time:"2023-11-21 16:39",reply:"",comment:`<p><img src="/image/722.jpg" style="zoom:33%;" /> </p>
    <p>不是，不解决问题去么soyo，你怎么黑了</p>
    <p>妈妈成员黑了那种事情不要呀</p>
    <p>我就知道我猜的肯定是错的</p>
    <p>骗子们</p>`},{floor:"726",username:"Ryodaze",time:"2023-11-21 16:41",reply:"722",comment:"<p>大伙真没骗你，后面真的有拉手手真的有互诉衷肠</p>"},{floor:"731",username:"kngchau",time:"2023-11-21 16:42",reply:"",comment:`<p><img src="/image/731.jpg" style="zoom:33%;" /> </p>
    <p><del>睦喜欢soyo这假药是不是已经实锤了</del></p>
    <p>soyo你怎么可以这么对睦！！人家睦做错了什么！！</p>
    <p>再说伤害祥子的可是你的mygo，你有什么立场欺负睦？！！！</p>`},{floor:"733",username:"索德-莱特",time:"2023-11-21 16:43",reply:"731",comment:`<p>你说soyo的MyGO</p>
    <p>你把你这话记住嗷</p>`},{floor:"734",username:"kngchau",time:"2023-11-21 16:43",reply:"",comment:`<p><img src="/image/734.jpg" style="zoom:33%;" /> </p>
    <p>哦我知道了，合着是怪睦带祥子来看live</p>
    <p>你这真是无能狂怒了属于，这关睦什么事呀！</p>`},{floor:"735",username:"Ryodaze",time:"2023-11-21 16:44",reply:"734",comment:"<p>最开始一句暴言彻底炸掉crychic的就是睦呀</p>"},{floor:"738",username:"kngchau",time:"2023-11-21 16:45",reply:"",comment:`<p><img src="/image/738.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈睦这是在反击么，人狠话不多，句句扎心啊</p>`},{floor:"741",username:"匿名咸鱼x",time:"2023-11-21 16:46",reply:"",comment:"<p>睦头:精准与否就是屠宰和手术的区别</p>"},{floor:"743",username:"71和EU",time:"2023-11-21 16:46",reply:"734",comment:"<p>这里有个点盖章的是，soyo一直认为睦是毁灭了crychic的罪魁祸首</p>"},{floor:"744",username:"kngchau",time:"2023-11-21 16:47",reply:"",comment:`<p>我来自我处刑一下</p>
    <p><img src="/image/744.jpg" style="zoom:33%;" /> </p>
    <p>真是没有识人之明</p>`},{floor:"746",username:"71和EU",time:"2023-11-21",reply:"744",comment:"<p>没事，你目前战绩起码比圣爱音强</p>"},{floor:"747",username:"Kfly",time:"2023-11-21",reply:"744",comment:`<p>楼主已经开始熟练使用回旋镖了，已经掌握mygo的精髓了哇</p>
    <p>这里还有个回旋镖</p>
    <p><img src="/image/747.jpg" style="zoom:33%;" /> </p>`},{floor:"748",username:"kngchau",time:"2023-11-21 16:48",reply:"",comment:`<p><img src="/image/748.jpg" style="zoom:33%;" /> </p>
    <p>什么PUA啊这是，先把人骂一顿，再提出要求。先让睦受伤自责内疚，然后拒绝不了她提出的要求是吧。这……</p>`},{floor:"751",username:"kngchau",time:"2023-11-21 16:49",reply:"",comment:`<p><img src="/image/751.jpg" style="zoom:33%;" /> </p>
    <p>我没记错的话，你第一话的时候可是说过</p>
    <p>这不是睦的错</p>
    <p>忘了？都忘了？！.jpg</p>`},{floor:"755",username:"谷不勤",time:"2023-11-21 16:51",reply:"",comment:"<p>忘！啦！那颗小歪脖子黄瓜，就站在月之森后面，天天的盯着你们呐！</p>"},{floor:"758",username:"kngchau",time:"2023-11-21 16:52",reply:"",comment:`<p>啊这，条已过大半，这跟我想的完全不一样啊……</p>
    <p>主要是这第八话的节奏怎么这么缓？</p>
    <p>好像上一话无事发生一样，一点都不着急解决戏剧冲突。</p>
    <p>虽然每个人物按照自己的动机行动我很喜欢这点，但是这节奏有点不对劲啊</p>`},{floor:"761",username:"匿名咸鱼x",time:"2023-11-21 16:53",reply:"751",comment:"<p>当你和朋友一起打游戏，输了朋友说不是你的问题，你就应该知道是谁的问题了</p>"},{floor:"762",username:"沐秋夜",time:"2023-11-21 16:54",reply:"",comment:`<p>被吵别吵这里很关键</p>
    <p>这里包饺子重要你别搞事啊</p>`},{floor:"768",username:"kngchau",time:"2023-11-21 16:55",reply:"",comment:`<p><img src="/image/768.jpg" style="zoom:33%;" /> </p>
    <p>终于开始主线了！！</p>
    <p><del>什么线下开盒</del></p>
    <p>最期待的祥子退团原因，以及mygo和ave mujica各自成团的契机应该就在接下来的内容了！</p>`},{floor:"770",username:"宵暗花火496",time:"2023-11-21 16:55",reply:"",comment:"<p>只要soyo和祥子当面谈一谈，一切都会好起来的</p>"},{floor:"776",username:"kngchau",time:"2023-11-21 16:57",reply:"",comment:`<p><img src="/image/776.jpg" style="zoom:33%;" /> </p>
    <p>等等？？？</p>
    <p>不是</p>
    <p>这是回家换了个衣服？</p>
    <p>家还是她家？？破产假药破产了？</p>
    <p>啊这……</p>
    <p>(果然我猜的就没一个对的</p>
    <p>那这退团原因是什么越来越期待了！</p>`},{floor:"780",username:"黑堂隐月",time:"2023-11-21 16:58",reply:"",comment:"<p>一向敏锐的楼主竟然没有关注小祥这风格诡异的手机壁纸</p>"},{floor:"781",username:"kngchau",time:"2023-11-21 16:58",reply:"",comment:`<p><img src="/image/781.jpg" style="zoom:33%;" /> </p>
    <p>你们就在外面站着聊啊哭笑</p>
    <p>ps.从咖啡馆开始从咖啡馆结束的C团假药也破产了</p>`},{floor:"784",username:"kngchau",time:"2023-11-21 16:59",reply:"780",comment:"<p>她不是挺喜欢洋娃娃的嘛？</p>"},{floor:"786",username:"松鼠之梦",time:"2023-11-21 16:59",reply:"758",comment:`<p>主要是这第八话的节奏怎么这么缓？</p>
    <p>虽然楼主现在开始一点点看，但我必须要提醒的是，第七话中“为什么要演奏春日影”是第七话里素世说的最后一句话，时间轴大致是21：00左右，而全片时长是23：40。
      祥子的c part更是只有80秒。</p>
    <p>mygo的制作组拥有我见过最精炼压缩的制作水平，没有之一</p>`},{floor:"796",username:"zxj147576518",time:"2023-11-21 17:02",reply:"",comment:"<p>我刷新都快按出火星子了</p>"},{floor:"802",username:"DarthPPT",time:"2023-11-21 17:04",reply:"796",comment:"<p>伥鬼的丑态！什么我也是啊，那没事儿了</p>"},{floor:"809",username:"kngchau",time:"2023-11-21 17:06",reply:"",comment:`<p>我……艹？</p>
    <p><img src="/image/512.jpg" referrerpolicy="no-referrer"><img src="/image/512.jpg"
        referrerpolicy="no-referrer"><img src="/image/512.jpg" referrerpolicy="no-referrer"><img src="/image/512.jpg"
        referrerpolicy="no-referrer"><img src="/image/512.jpg" referrerpolicy="no-referrer"><img
        src="/image/512.jpg" referrerpolicy="no-referrer"><img src="/image/512.jpg" referrerpolicy="no-referrer">
    </p>`},{floor:"810",username:"kngchau",time:"2023-11-21 17:06",reply:"",comment:"<p>不是，这个展开</p>"},{floor:"812",username:"kngchau",time:"2023-11-21 17:06",reply:"",comment:"<p>我艹直接给我干沉默了</p>"},{floor:"813",username:"西园寺凹凹子",time:"2023-11-21 17:06",reply:"",comment:"<p>恭喜嘉宾牵手</p>"},{floor:"815",username:"kngchau",time:"2023-11-21 17:06",reply:"",comment:"<p>我看到了什么</p>"},{floor:"819",username:"kngchau",time:"2023-11-21 17:07",reply:"",comment:"<p>这剧情直接在脑子里炸裂</p>"},{floor:"821",username:"Fallenleaf_落叶",time:"2023-11-21 17:07",reply:"815",comment:"<p>你看，大伙没骗你吧，牵手互诉衷肠</p>"},{floor:"827",username:"永远背锅服务器",time:"2023-11-21 17:08",reply:"",comment:"<p>你就说有没有互诉衷肠和手牵手吧</p>"},{floor:"828",username:"結千",time:"2023-11-21 17:08",reply:"688",comment:`<p>那是能忍吗？那是没办法</p>
    <p>整整一个月都在发癫，周四蹲第一时间片源然后来论坛发癫，周五继续发癫，周六看go大将，周日周一狂炫二创，周二说服自己mygo也就这样吧，该回归正常生活了，周三就开始急</p>
    <p>就这么每周都在循环，那叫一个天昏地暗</p>`},{floor:"829",username:"71和EU",time:"2023-11-21 17:08",reply:"",comment:"<p>很喜欢楼主的一句话，支持soyo重建crychic</p>"},{floor:"830",username:"宵暗花火496",time:"2023-11-21 17:08",reply:"",comment:`<p>实际上这个构图也相当值得品味</p>
    <p>睦头人站在soyo正前方，但soyo满眼只有祥子</p>
    <p>睦和素世在一起的镜头里，十有八九睦都在看素世</p>
    <p><img src="/image/830.jpg" alt="img" style="zoom: 50%;" /> </p>
    <p>小睦，我的小睦啊</p>`},{floor:"831",username:"kngchau",time:"2023-11-21 17:09",reply:"",comment:`<p>艹这就是你们说的手牵手互诉衷肠是吧</p>
    <p>你们给我翻译翻译</p>
    <p>什么叫手牵手</p>
    <p>什么叫互诉衷肠</p>
    <p>什么tmd叫手牵手</p>`},{floor:"832",username:"立希RRRR",time:"2023-11-21 17:09",reply:"",comment:`<p>他們握手表露真心，將心裡的話都說出來了，完全沒問題</p>
    <p>睦這邊被消音的話是&quot;我從沒那樣打算過&quot;</p>`},{floor:"840",username:"EDTA_",time:"2023-11-21 17:10",reply:"",comment:`<p>啊对了，例行环节：</p>
    <p>楼主你对第九集的剧情有什么预期？</p>`},{floor:"843",username:"kngchau",time:"2023-11-21 17:11",reply:"",comment:`<p>不是，等一下</p>
    <p>邦邦</p>
    <p>它应该是美少女乐队企划没错吧</p>
    <p>2.5次元的那种，有番剧、有手游、有真人乐队的那种没错吧</p>
    <p>是要卖人设赚钱的没错吧</p>
    <p>我重复一遍我昨天晚上的问题</p>
    <p>你们告诉我</p>
    <p>邦邦是这样的企划么？！！！！</p>`},{floor:"847",username:"71和EU",time:"2023-11-21 17:12",reply:"843",comment:"<p>虽然听上去很离谱，但mygo本质只是把前辈有的问题整合了一下，再提纯了一下</p>"},{floor:"848",username:"Fallenleaf_落叶",time:"2023-11-21 17:12",reply:"843",comment:"<p>您先别急，soyo和祥子的冲突已经达到巅峰了，接下来您对第九集里如何交流，如何解决问题怎么看？</p>"},{floor:"851",username:"kngchau",time:"2023-11-21 17:13",reply:"",comment:`<p>行了，我知道了，今年挺王是soyo是吧</p>
    <p>战吧一群迫害狂老哥没道理不把soyo投到挺王</p>`},{floor:"857",username:"kngchau",time:"2023-11-21 17:14",reply:"",comment:"<p>我先去看一眼下集预告平复一下</p>"},{floor:"863",username:"kngchau",time:"2023-11-21 17:15",reply:"",comment:`<p>等等？？你告诉我下一话叫什么</p>
    <p>下一话叫</p>
    <p>解散</p>
    <p>？？？？？？？？？？？？？？？？？？？？？？？？？？？？</p>`},{floor:"864",username:"轻风cc",time:"2023-11-21 17:15",reply:"857",comment:"<p>下集预告……楼主是懂享受的。</p>"},{floor:"874",username:"宵暗花火496",time:"2023-11-21 17:16",reply:"",comment:`<p>很喜欢楼主一句话</p>
    <p>“一天一集，不多看”</p>`},{floor:"877",username:"kngchau",time:"2023-11-21 17:17",reply:"",comment:`<p>cpu烧了兄弟们</p>
    <p>我现在就摊在电脑前陷入沉思</p>
    <p>mygo</p>
    <p>它是个这样的作品么</p>`},{floor:"883",username:"imfyz",time:"2023-11-21 17:17",reply:"863",comment:`<p>楼主，不要慌，这里是一点场外消息：</p>
    <p>MYGO在第九集之后的那个周末开了真人线下演唱会</p>
    <p>所以不要急</p>`},{floor:"885",username:"Seeeven33",time:"2023-11-21 17:18",reply:"",comment:`<p>长颈鹿：楼主快猜猜下集发展，该包饺子了。</p>
    <p>预告：下一话，城之内之死！</p>
    <p>楼主：……</p>`},{floor:"891",username:"kngchau",time:"2023-11-21 17:20",reply:"",comment:`<p>来，你们喜欢的回旋镖环节。</p>
    <p>对不起，给爱音小可爱道歉。</p>
    <p>爱音不配拿挺王</p>
    <p>soyo，对不起，有眼无珠了</p>
    <p>私密马赛！</p>`},{floor:"898",username:"typeomicron",time:"2023-11-21 17:22",reply:"",comment:`<p>我笑得人仰马翻了</p>
    <p>我都能想象到你的朋友的表情</p>
    <p>能想象到注视这一切的大家的表情口牙！</p>`},{floor:"899",username:"kngchau",time:"2023-11-21 17:23",reply:"618",comment:`<p>回旋镖+1</p>
    <p>行，一点没对呗</p>
    <p>的确是soyo和祥子在一起解决问题了，手牵手互诉衷肠那种</p>
    <p>楼友还是好人多呀</p>
    <p>楼友都是有一说一，像睦一样直言不讳呀</p>`},{floor:"910",username:"kngchau",time:"2023-11-21 17:27",reply:"636",comment:`<p>认真分析：这位楼友说得很有道理</p>
    <p>我还是陷入到之前的前半段组成乐队，后半段讲乐队故事那种传统剧情模式里面去了</p>
    <p>但是正如我开始说的，mygo是一个完全按照人物自主行为动机去发展的剧情，它不会给人物强加一个剧情走向</p>
    <p>一切都对，但是soyo本质上是想复活C团，但是睦和祥子本质上并不想继续C团。她们坐下来，根本无法相互理解，也解决不了问题，只能变成soyo苦苦哀求，睦和祥子轮流捅上一刀</p>`},{floor:"913",username:"松鼠之梦",time:"2023-11-21 17:29",reply:"899",comment:`<p>不不不，楼友和睦最大的区别是，动画里的睦不出手则已，一出手一鸣惊人，人送外号剑姬绝活。</p>
    <p>我可以告诉楼主，手游版本睦的几个关键地方是有明确的台词而非使用表现手法的，到时候你只会直呼xxxxxx。
      ps：毕竟一周目，某个人物的某些手法还是没办法一眼察觉， 楼主你后面看完了可以再看几遍的。</p>`},{floor:"916",username:"kngchau",time:"2023-11-21 17:30",reply:"",comment:`<p>我现在知道剪切线是在剪切什么了</p>
    <p>是在剪前任乐队，是在剪祥子，但也不是soyo主动想剪</p>
    <p>这首曲子被大家点上上百万播放是有道理的</p>`},{floor:"919",username:"Kfly",time:"2023-11-21 17:32",reply:"916",comment:"<p>只剪了这个可到不了那么高播放</p>"},{floor:"920",username:"kngchau",time:"2023-11-21 17:32",reply:"",comment:`<p>朋友们，意外情况，我被朋友线下开盒人肉拽出来了</p>
    <p>她让我物理戒断一下，可以包我晚饭</p>
    <p>但是路上和点菜期间让我在楼里分析剧情</p>
    <p>我……</p>
    <p>我想看下一话啊啊啊啊啊</p>`},{floor:"923",username:"对说你呢",time:"2023-11-21 17:33",reply:"920",comment:"<p>我超，盒！</p>"},{floor:"927",username:"EDTA_",time:"2023-11-21 17:34",reply:"920",comment:`<p>你这个朋友，真的满脑子都想着大家呢</p>
    <p>话说楼主现在应该看得懂这句话了</p>`},{floor:"928",username:"西园寺凹凹子",time:"2023-11-21 17:34",reply:"",comment:`<p>让你朋友别急，你看完9再开始分析</p>
    <p>你只要告诉她你马上看完9然后就陪她吃饭，她100%会同意</p>`},{floor:"931",username:"松鼠之梦",time:"2023-11-21 17:35",reply:"920",comment:"<p>可以包我晚饭(×)以一顿晚饭为代价，享受楼主的每个表情(√)</p>"},{floor:"932",username:"kngchau",time:"2023-11-21 17:35",reply:"",comment:`<p>我现在终于知道你们这些梗都是哪里来的了</p>
    <p>我什么都会做的</p>
    <p>你满脑子都是你自己</p>`},{floor:"934",username:"kngchau",time:"2023-11-21 17:36",reply:"928",comment:`<p>她说她饶我一命，吃完饭放我回来再看第九话，到时候我会谢谢她的</p>
    <p>所以第九话比第八话还难顶惊</p>
    <p>这是什么编剧啊艹</p>`},{floor:"935",username:"Fallenleaf_落叶",time:"2023-11-21 17:38",reply:"934",comment:"<p>所以说啊，我最讨厌敏感的坏孩子了</p>"},{floor:"939",username:"老吴老不及人之老",time:"2023-11-21 17:39",reply:"934",comment:"<p>这就是写女女关系如同呼吸一样自然的绫奈独角兽老师的含金量了</p>"},{floor:"942",username:"71和EU",time:"2023-11-21 17:41",reply:"920",comment:"<p>朋友:啊？你觉得我为什么想要包你最近的饭，不会真觉得只是为了让你看mygo吧 </p>"},{floor:"944",username:"kngchau",time:"2023-11-21 17:42",reply:"",comment:`<p>那我来复盘一下剧情。</p>
    <p>首先是完全意料之外的soyo这么重和挺</p>
    <p>之前还对soyo是重女持玩笑态度真是大不敬</p>
    <p>不过认真说，感觉绝对是soyo家庭问题导致了她特别缺爱，所以她才对在C团的开心生活那么的记忆犹新，经常掏出手机来怀念C团，所以她才是对C团感情最深最沉重，最希望C团回来的人。</p>
    <p>但是soyo忘记了一个问题，也是之前我忽略的，就是祥子和睦的态度。</p>
    <p>你如果想解决C团的问题，首先要把祥子的退团原因搞明白，而不是上来就求她回来。</p>
    <p>祥子和睦本质上是不想继续c团的，不会因为你求情就改变。足以让祥子这个完美的角色狠心退团的原因，绝对不可能因为心软就改变。</p>`},{floor:"949",username:"kngchau",time:"2023-11-21 17:48",reply:"",comment:`<p>找了个在线版本手机上重温了一下下集预告。</p>
    <p>非常非常令人在意的是soyo还在带着面具跟同学说笑，以及灯去电车上追soyo没追上。</p>
    <p>好家伙又要上演美少女追逐戏了是吧。</p>
    <p>所以接下来继爱音追灯、爱音追立希、爱音找乐奈之后，又要上演灯追soyo了是吧</p>
    <p>那么可以推测下一集soyo在祥子这儿受了伤，跟mygo那边也没有再续前缘</p>`},{floor:"952",username:"htx18",time:"2023-11-21 17:50",reply:"781",comment:"<p>如果在咖啡馆好聚好散的话是个不错的前后呼应。但是这段访谈原话是，希望写的尽可能不堪入目</p>"},{floor:"957",username:"kngchau",time:"2023-11-21 17:54",reply:"",comment:`<p>现在整个剧情进展是非常离谱的节奏</p>
    <p><del>(刚吐槽完节奏慢呢，回旋镖+1)</del></p>
    <p>第八话了，已经第八话了</p>
    <p>现在乐队不光没落地，反而直接崩了</p>
    <p>下一话叫解散</p>
    <p>这真的，我很难想象下一话里这个问题怎么解决</p>`},{floor:"962",username:"黑堂隐月",time:"2023-11-21 17:57",reply:"",comment:`<p>隔壁千楼完结</p>
    <p>这边千楼第八集</p>
    <p>直播楼一栋比一栋高(赞赏)</p>
    <p>前途一片光明哇</p>`},{floor:"965",username:"ALex_bianfu",time:"2023-11-21 17:59",reply:"957",comment:"<p>当初第八集播完，部分兄弟们对这个标题的理解是解散c团彻底的消失，也有部分兄弟理解是解散m团，楼主你怎么看 <del>这个不算剧透吧</del></p>"},{floor:"966",username:"fenix1611",time:"2023-11-21 18:00",reply:"",comment:"<p>独角兽老师可是自己下场表演惊天一跪让其他工作人员观摩的.</p>"},{floor:"967",username:"kngchau",time:"2023-11-21 18:00",reply:"",comment:`<p>先分析一个感觉比较合理的发展</p>
    <p>毕竟mygo的OP都摆在那儿了，大家肯定最后是要像OP一样开live的，那么乐队番传统肯定要用一两话讲讲接下来的作词作曲准备live或者跟其他乐队的互动。所以还是得解决一下问题。</p>
    <p>解决soyo的问题说难也难，说容易也容易：只需要祥子给出一个合理的，真的没有办法复活C团的理由就行了。</p>
    <p>第八话里面睦的镜头非常之多，我还是坚持，在下一话里睦起着推动剧情的作用。</p>
    <p>那么有没有可能，睦是知道祥子退团原因的，只是碍于祥子的压力一直没说，但是看着soyo这么消沉，必须要说了。</p>
    <p>soyo是对C团又沉重的感情，但是是明事理的，这个原因解释清楚了，soyo走出来了，看开了，决定带着C团前成员在mygo继续发展</p>`},{floor:"969",username:"kngchau",time:"2023-11-21 18:02",reply:"965",comment:"<p>对，如果顺着我上面那个推测，解散C团是合理的答案。</p>"},{floor:"978",username:"kngchau",time:"2023-11-21 18:06",reply:"",comment:`<p>这里的关键问题就变成了祥子到底为什么退团。</p>
    <p>靠这番快变成悬疑推理番了。</p>
    <p>我最初的猜想是这样的：</p>
    <p>祥子家破产了，同为大小姐群体，然后碍于自尊心，不想告诉soyo，只有青梅竹马的睦从家里知道了这件事。祥子因此勒令睦不准说出去。</p>
    <p>因为乐队是个有些烧钱又没有收入的爱好，乐队只能退出。祥子不愿意说，睦只能陪她演戏，说她也不喜欢乐队，顺利拆了C团</p>
    <p>并且睦在第八话帮了她第二次：soyo你看，不止是祥子的原因，我也不喜欢乐队呀。</p>
    <p>如果真的是这样，睦作为一个喜欢soyo又夹在soyo和祥子之间的角色，也太苦情可怜了。</p>
    <p>但是这个假药有一个致命问题：祥子家的豪宅还在，破产这个理由似乎并不太成立。但是如果豪宅还在，祥子又为什么要跑到音乐教室去偷偷练琴呢？</p>`},{floor:"982",username:"蓝全球",time:"2023-11-21 18:08",reply:"",comment:`<p>我不能剧透</p>
    <p>又不能点评</p>
    <p>也不敢暗示</p>
    <p>甚至我的喜或是惊或是怒都会对初见的观众带来不好的影响</p>
    <p>我还能说什么呢</p>
    <p>那我只能收藏帖子静待后续发展口牙</p>`},{floor:"984",username:"黑堂隐月",time:"2023-11-21 18:09",reply:"",comment:`<p>我将第六话描述为boss战前检查点</p>
    <p>而接下来的第九话则是</p>
    <p>分支路线存档点</p>
    <p>毕竟这可是衍生出了数个名作的关键节点呀哭笑</p>
    <p>少女们，未来该如何抉择？</p>`},{floor:"985",username:"kngchau",time:"2023-11-21 18:11",reply:"",comment:"<p>如果加上楼上的场外因素，2.5次元企划，的确不太可能三次元live二次元拆团</p>"},{floor:"994",username:"kngchau",time:"2023-11-21 18:14",reply:"",comment:`<p>但是我已经成长了！我学会两手准备了！如果接下来的剧情是继续油门踩到底呢？！</p>
    <p>开始假药啊，这个真是离谱的假药：</p>
    <p>soyo退出了，向爱音坦白自己只是在利用她重组C团，于是爱音愤而离去</p>
    <p>soyo跟灯和立希坦白，自己只是在缅怀过去的C团，并不是真的想玩乐队开live，灯和立希也走了</p>
    <p>乐奈看这些人不重了，分崩离析了，觉得这些女人不再有趣了，乐奈也走了</p>
    <p>OK，整个乐队恢复出厂设置了</p>
    <p>但是……但是怎么再组起来呢，这……这我倒是没想好，只想着踩油门了</p>`},{floor:"996",username:"轻风cc",time:"2023-11-21 18:15",reply:"",comment:"<p>玛德真给他预测对了……怎么办兄弟们。</p>"},{floor:"1001",username:"kngchau",time:"2023-11-21 18:17",reply:"",comment:"<p>如果非要给这个假药一个完整的结尾，我能想到的只能是：过了很久之后，五个人机缘巧合之下，在某次大家比较喜欢的live会面了(可以是前作某些乐队的live)，因为音乐和歌曲而感动，抱头痛哭，最后重组mygo，开启新的生活。</p>"},{floor:"1002",username:"loneyuki_nd",time:"2023-11-21 18:17",reply:"",comment:`<p>你这假药………有点不好评价</p>
    <p>不过mygo的结局我觉得好就好在大家都很真</p>`},{floor:"1007",username:"結千",time:"2023-11-21 18:18",reply:"1001",comment:`<p>你如果当时在追番，说不定会成为一员大将</p>
    <p>但是在现在，我只能说，对了但不全对</p>`},{floor:"1010",username:"71和EU",time:"2023-11-21 18:18",reply:"",comment:`<p>好真啊，太真了，面对这么可怕的假药，长颈鹿又有什么办法抵抗了？</p>
    <p>是了，没有办法……已是长颈鹿该离去的时候了</p>`},{floor:"1012",username:"谷不勤",time:"2023-11-21 18:19",reply:"",comment:`<p>确实是春去夏来，在大家都很喜欢的live上相会呢。</p>
    <p>楼主加油，继续造假药下去，无法呼吸的伥鬼们就靠你了</p>`},{floor:"1013",username:"kngchau",time:"2023-11-21 18:20",reply:"",comment:`<p>怎么假药把你们搞沉默了，不至于吧兄弟们，我说着玩的</p>
    <p>真要这么写不早就骂翻天了</p>
    <p>“你这动画做了个寂寞”这种评价不得满天飞</p>`},{floor:"1015",username:"結千",time:"2023-11-21 18:22",reply:"1013",comment:"<p>大伙不敢说话是有原因的，只能等你看完再点评了</p>"},{floor:"1018",username:"mqyjdh1",time:"2023-11-21 18:22",reply:"",comment:"<p>这哪是什么直播楼，这是一部小型mygo史</p>"},{floor:"1020",username:"kngchau",time:"2023-11-21 18:22",reply:"",comment:"<p>好了我要去吃饭了哈哈哈哈哈，连着两天白嫖晚饭了</p>"},{floor:"1022",username:"htx18",time:"2023-11-21 18:23",reply:"",comment:`<p>长颈鹿在听到楼主的预测之后发冷地缩了缩脖子，许是受惊了罢</p>
    <p>但是有一说一，团炸的稀里哗啦之后过了几年再在机缘巧合之下遇上，这种画面真的很文青</p>
    <p>不过不是再续前缘，而是一笑置之那种感觉了</p>`},{floor:"1023",username:"松鼠之梦",time:"2023-11-21 18:24",reply:"1020",comment:"<p>啧，晚饭钱是小数，我怎么就没有像楼主这样直播看mygo的朋友呢。</p>"},{floor:"1024",username:"枞枞那年",time:"2023-11-21 18:24",reply:"",comment:"<p>你这假药太恶毒了，这就是你心中的mygo吗，那我真的会哭死</p>"},{floor:"1029",username:"谷不勤",time:"2023-11-21 18:39",reply:"",comment:"<p>我宣布，猴区mygoopenAI训练企划，取得阶段性成功！大家很快就有第二季看啦</p>"},{floor:"1050",username:"71和EU",time:"2023-11-21 20:21",reply:"",comment:"<p>可恶，楼主怎么还没吃完饭，感觉耳边有普通和理所当然是什么呢在响</p>"},{floor:"1053",username:"kngchau",time:"2023-11-21 20:30",reply:"",comment:"<p>回来了兄弟们！第九集我tm莱纳！</p>"},{floor:"1057",username:"kngchau",time:"2023-11-21 20:32",reply:"",comment:`<p><img src="/image/1057.jpg" style="zoom:33%;" /> </p>
    <p>天呐开幕雷击，这话是soyo个人回了么</p>
    <p>果然是家庭原因，看起来是离异或者母亲改嫁？唉……</p>`},{floor:"1064",username:"kngchau",time:"2023-11-21 20:33",reply:"",comment:`<p><img src="/image/1064.jpg" style="zoom:33%;" /> </p>
    <p><del>世界名画：soyo伤心地看着灯</del></p>`},{floor:"1069",username:"kngchau",time:"2023-11-21 20:38",reply:"",comment:`<p><img src="/image/1069.jpg" style="zoom:33%;" /> </p>
    <p>我觉得看到这儿我能完全理解soyo了。</p>
    <p>离异家庭，母亲忙于工作，自己一个人住在大house里，但是没有人陪伴。高层公寓有可能也懒得下楼逛逛，就每天自己在家，吃吃外卖这样。很容易变得孤僻和敏感。(别问我是怎么知道的</p>
    <p>soyo对C团有这么沉重的感情也很合理了，毕竟有可能是她为数不多的有那么多朋友陪伴的时光。</p>
    <p>唉</p>
    <p>不过不得不感叹制作水平，开头十几秒，把soyo的人物形象和动机塑造得清楚明白</p>`},{floor:"1070",username:"kngchau",time:"2023-11-21 20:40",reply:"",comment:`<p>第一话的伏笔回收：爱音问soyo是不是月之森的大小姐都说贵安，soyo说是后面转学过来的，大家都说她也说了</p>
    <p>以及</p>
    <p>原来soyo是这样开始夹的……</p>`},{floor:"1071",username:"宵暗花火496",time:"2023-11-21 20:41",reply:"1069",comment:`<p>楼主是哪里来的go大将</p>
    <p>这都猜出来了？</p>
    <p>话不多说上访谈——</p>`},{floor:"1074",username:"71和EU",time:"2023-11-21 20:42",reply:"1069",comment:"<p>这个还真是，后续访谈有盖章，因为住太高懒得下楼，soyo女士是重度网络依赖患者</p>"},{floor:"1075",username:"iridium945",time:"2023-11-21 20:43",reply:"",comment:"<p>答应我，母鸡卡开播的时候你来第一时间造假药好吗</p>"},{floor:"1076",username:"kngchau",time:"2023-11-21 20:44",reply:"",comment:`<p><img src="/image/1076.jpg" style="zoom:33%;" /> </p>
    <p>我的天啊</p>
    <p>祥子到底是什么人间魅魔啊</p>
    <p>只能说俘获了这么多妹子真不亏</p>
    <p>我看了都心动</p>
    <p>而且祥子对每个人都是在她心理防线最薄弱的时候突然闯入她的生活。在灯最需要人理解的时候，soyo最需要人陪伴的时候，立希最需要人认可的时候，估计还是在初华和睦最需要玩伴的时候</p>
    <p>真是白月光啊，我上我也迷糊</p>`},{floor:"1077",username:"轻风cc",time:"2023-11-21 20:45",reply:"1076",comment:'<p><img src="/image/1077.jpg" style="zoom: 50%;" /> </p>'},{floor:"1079",username:"Ryodaze",time:"2023-11-21 20:46",reply:"1069",comment:`<p>怎么连高层公寓影响都能读出来啊</p>
    <p>请您务必预测一下mujica的剧情，他们什么都会做的</p>`},{floor:"1081",username:"kngchau",time:"2023-11-21 20:47",reply:"",comment:`<p>天啊，开始soyo第一视角了</p>
    <p>你别……</p>
    <p>又给我搞一套第一人称视角的C团建立、C团的美好、C团的解散，最后到第一人称的祥子骂我(soyo)</p>
    <p>真搞这一套我怕是又要破防</p>`},{floor:"1082",username:"kngchau",time:"2023-11-21 20:48",reply:"1079",comment:`<p>因为高层公寓有个特写啊</p>
    <p>不是你们说的么，这番没有无用镜头</p>`},{floor:"1084",username:"71和EU",time:"2023-11-21 20:49",reply:"1081",comment:"<p>令和二年，一魅魔冒雨走进crychic的训练室</p>"},{floor:"1086",username:"kngchau",time:"2023-11-21 20:50",reply:"",comment:`<p><img src="/image/1086.jpg" style="zoom:33%;" /> </p>
    <p>这番构图太绝了</p>
    <p>这个构图</p>
    <p>空荡荡的公寓房间，但是soyo的心却第一次被填满了，第一次有了喜欢的朋友和一起为之努力的事情</p>
    <p>天啊，不要再让C团毁灭一次给我看啊，我受不了的！！！！</p>`},{floor:"1093",username:"kngchau",time:"2023-11-21 20:54",reply:"",comment:`<p><img src="/image/1093.jpg" style="zoom:33%;" /> </p>
    <p>之前的假药果然是假的了，看你们反应吓死我了</p>
    <p>所以这一话正确答案是讲C团的解散</p>
    <p>好消息get</p>`},{floor:"1094",username:"kngchau",time:"2023-11-21 20:55",reply:"",comment:`<p><img src="/image/1094.jpg" style="zoom:33%;" /> </p>
    <p>睦果然是最后一个离开soyo的</p>
    <p>那soyo和睦的假药真的好真</p>`},{floor:"1097",username:"71和EU",time:"2023-11-21 20:56",reply:"1093",comment:"<p>这里有个小细节，睦是唯一回头看的</p>"},{floor:"1100",username:"kngchau",time:"2023-11-21 20:56",reply:"",comment:`<p><img src="/image/1100.jpg" style="zoom:33%;" /> </p>
    <p>怎么把指甲咬成这样，唉，真的好心疼</p>`},{floor:"1102",username:"kngchau",time:"2023-11-21 21:00",reply:"",comment:`<p><img src="/image/1102.jpg" style="zoom:33%;" /> </p>
    <p>唉，感觉这里的soyo既可怜、又可悲</p>
    <p>祥子说得其实没错，soyo的确就是在把自己的想法强加给C团所有人，就是为了自己</p>
    <p>打着为了大家的名义，其实只是自己不想失去C团的美好时光</p>
    <p>但是soyo又有什么错呢，她只是想回到曾经那个快乐的日子</p>
    <p>或者其实，soyo并不是想复活C团，她只是想复活C团还在时的快乐，C团复活不了，她的快乐更复活不了</p>`},{floor:"1103",username:"kngchau",time:"2023-11-21 21:01",reply:"",comment:`<p><img src="/image/1103.jpg" style="zoom:33%;" /> </p>
    <p>这下理解你们说的平行世界是什么意思了</p>
    <p>md这都第九话了</p>
    <p>你tm告诉我怎么才能让她们变成这样啊！</p>`},{floor:"1104",username:"kngchau",time:"2023-11-21 21:02",reply:"",comment:`<p><img src="/image/1104.jpg" style="zoom:33%;" /> </p>
    <p>感觉我的预测要对一次了，果然是靠睦来推动了</p>`},{floor:"1110",username:"弦歌不语",time:"2023-11-21 21:05",reply:"",comment:"<p>楼主真是soyo本人啊，太美味了</p>"},{floor:"1111",username:"kngchau",time:"2023-11-21 21:06",reply:"",comment:`<p><img src="/image/1111.jpg" style="zoom:33%;" /> </p>
    <p>感觉立希和灯这对塑造也很有意思</p>
    <p>立希应该是真的很喜欢灯，但是她往往在上头的时候顾及不到灯的感受</p>
    <p>灯要的是一个团结友好的乐队，在灯那里live成功不是首要的</p>
    <p>但是一开始她作曲那会就骂完soyo骂爱音，最后骂自己，把灯搞得很为难；后来也好几次撺掇唱春日影，真春日影那会她鼓也敲得很欢</p>
    <p>感觉是有点情商低，至少上头的时候情商低</p>`},{floor:"1112",username:"图书馆的谐振电路",time:"2023-11-21 21:06",reply:"",comment:"<p>一天看太多对身体不好。lz看完第九集后好好睡觉休息吧</p>"},{floor:"1116",username:"kngchau",time:"2023-11-21 21:08",reply:"",comment:`<p><img src="/image/1116.jpg" style="zoom:33%;" /> </p>
    <p>祥子和睦打配合说谎的假药真起来了，睦这不是很喜欢音乐么</p>`},{floor:"1117",username:"kngchau",time:"2023-11-21 21:09",reply:"",comment:`<p><img src="/image/1117.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈艹，什么回旋镖</p>
    <p>这不是当时祥子跟她说的原话么</p>
    <p>愿意当soyo的信鸽不愿意当立希的是吧</p>`},{floor:"1118",username:"71和EU",time:"2023-11-21 21:10",reply:"1116",comment:"<p>但这里仔细听能听出一个点，睦头玩的音乐是很噪的那种硬核派的，跟crychic的抒情流不能说不搭边吧，只能说命里犯冲</p>"},{floor:"1119",username:"kngchau",time:"2023-11-21 21:11",reply:"1118",comment:`<p>原来如此，有道理，所以ave mujica是硬核摇滚是吧</p>
    <p>没有怪你剧透的意思</p>`},{floor:"1123",username:"kngchau",time:"2023-11-21 21:14",reply:"",comment:`<p><img src="/image/1123-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/1123-2.jpg" style="zoom:33%;" /> </p>
    <p>我懂了</p>
    <p>剪切线是吧</p>
    <p>不光切C团，切祥子，还要切爱音，切灯</p>
    <p>等一下？？？</p>
    <p>我之前说的假药不会是真的吧？？？？</p>
    <p>别把……</p>`},{floor:"1125",username:"kngchau",time:"2023-11-21 21:16",reply:"",comment:`<p><img src="/image/1125.jpg" style="zoom:33%;" /> </p>
    <p>行……这下又切割立希了</p>
    <p>什么魔鬼构图</p>
    <p>不过老实讲有点讨厌这种车站错过的俗套戏码</p>`},{floor:"1126",username:"立希RRRR",time:"2023-11-21 21:16",reply:"1123",comment:`<p>這邊有個迴旋鏢是第三集</p>
    <p>soyo對燈講過&quot;搞不好我們曾經哪天擦身而過呢&quot;</p>`},{floor:"1128",username:"71和EU",time:"2023-11-21 21:18",reply:"1125",comment:`<p>这里是注定错过的</p>
    <p>立希是听到灯出了状态才有直接反应的，她的唯一目标也是立刻去看看灯怎样了，这里她就算真看到素世，估计也只是咬咬牙就上车罢了</p>`},{floor:"1131",username:"kngchau",time:"2023-11-21 21:19",reply:"",comment:`<p><img src="/image/1131.jpg" style="zoom:33%;" /> </p>
    <p>题外话，这里很适合剪一个 长崎soyo的千层套路</p>
    <p>把这个sounanda当作音源</p>`},{floor:"1133",username:"西园寺凹凹子",time:"2023-11-21 21:20",reply:"",comment:`<p>1.睦(和初华)使用的都是七弦吉他，比普通吉他多一根低音弦，更适合金属</p>
    <p>2.睦在第三话咖啡厅主动发问要弹什么音乐</p>
    <p>3.睦在对soyo态度如此的情况下，实际在拒绝soyo的开盒要求，最后实际生效的见面中，soyo是通过anon意外盒到的</p>
    <p>4.第8话睦那个短信到底是在搭线当传声筒，还是在已知soyo已经盒了大祥的学校的情况下进行通知，我觉得需要额外信息</p>`},{floor:"1135",username:"kngchau",time:"2023-11-21 21:22",reply:"",comment:`<p><img src="/image/1135.jpg" style="zoom:33%;" /> </p>
    <p>坏了，这不像是解决问题，像是来激化问题的啊</p>
    <p>立希上一句是那家伙竟然敢无视灯</p>
    <p>你mygo不会还要整出打人的活吧</p>`},{floor:"1137",username:"kngchau",time:"2023-11-21 21:23",reply:"",comment:`<p><img src="/image/1137.jpg" style="zoom:33%;" /> </p>
    <p>soyo真的不太擅长说谎呢，一说谎就开始玩头发</p>
    <p>唉</p>
    <p>何必呢</p>`},{floor:"1138",username:"71和EU",time:"2023-11-21 21:23",reply:"1135",comment:"<p>立希:你有几个马，敢这么对灯？！</p>"},{floor:"1140",username:"Ryodaze",time:"2023-11-21 21:24",reply:"1135",comment:`<p>其实大家经常说感觉她们不打一架这个事过不去了</p>
    <p>另外立希找姐姐帮忙这里还可以品</p>`},{floor:"1142",username:"kngchau",time:"2023-11-21 21:24",reply:"",comment:`<p><img src="/image/1142.jpg" style="zoom:33%;" /> </p>
    <p>艹幸亏爱音没在这儿，不然我假药成真了md</p>`},{floor:"1144",username:"明日下山",time:"2023-11-21 21:25",reply:"1135",comment:"<p>三弟为人刚直，最看不惯这等反复小人</p>"},{floor:"1145",username:"雏幻",time:"2023-11-21 21:25",reply:"",comment:`<p>喘希望能在第2季看到楼主一起追番</p>
    <p>你的回旋镖也真不错</p>`},{floor:"1148",username:"Winter丶act",time:"2023-11-21 21:26",reply:"",comment:"<p>哭笑这可是美少女企划，立希女士怎么可能会打人呢。当然如果这里不是美少女企划，立希女士在令和二年就已经动手了</p>"},{floor:"1149",username:"kngchau",time:"2023-11-21 21:26",reply:"",comment:`<p><img src="/image/1149.jpg" style="zoom:33%;" /> </p>
    <p>这不废话么，C团那是你的白月光，那你有本事把C团需要的祥子拉回来啊</p>`},{floor:"1151",username:"kngchau",time:"2023-11-21 21:27",reply:"",comment:`<p><img src="/image/1151.jpg" style="zoom:33%;" /> </p>
    <p>我靠，这台词，这构图，这表情，真是绝了</p>
    <p>制作组牛逼！</p>`},{floor:"1154",username:"htx18",time:"2023-11-21 21:28",reply:"",comment:`<p>哭笑这段是soyo对挺好颜的终极侮辱</p>
    <p>摆着最挺的表情说最刺人的话</p>`},{floor:"1156",username:"kngchau",time:"2023-11-21 21:29",reply:"",comment:`<p><img src="/image/1156.jpg" style="zoom:33%;" /> </p>
    <p>不是啊soyo</p>
    <p>这是奔着炸团去的么？</p>`},{floor:"1157",username:"kngchau",time:"2023-11-21 21:29",reply:"",comment:"<p>什么各怀鬼胎五人组绝了</p>"},{floor:"1161",username:"秋叶罹殇",time:"2023-11-21 21:31",reply:"",comment:"<p>没事你要相信粉毛大天使 只要爱音发起进攻</p>"},{floor:"1165",username:"kngchau",time:"2023-11-21 21:32",reply:"",comment:`<p><img src="/image/1165.jpg" style="zoom:33%;" /> </p>
    <p>坏了，这立希要干蠢事啊</p>
    <p>怕不是想让海玲去顶mygo里的贝斯位</p>
    <p>不是你不想想春日影祥子是为什么破防的？</p>
    <p>你是不是也想开个live，跟海玲一起演唱大家的歌曲碧天伴走唱给soyo听？</p>
    <p>最后看爱音去给soyo跪下说soyo你回来吧我什么都愿意做</p>
    <p>？？？？</p>
    <p>退一万步说，灯她们现在想要的是live吗？她们想要的是大家在一起的快乐的乐队，而不是live本身啊</p>`},{floor:"1167",username:"立希RRRR",time:"2023-11-21 21:32",reply:"1149",comment:`<p>其實soyo也用不少手段了吧</p>
    <p>開場就看到他在問睦，結果得知祥子再羽丘是第四集愛音說的，之後一直在學校堵門</p>
    <p>然後發現被祥子封了後去強迫睦把他帶去找祥子，最後被祥子狠狠洗臉</p>
    <p>認真說她真的挺用力再找了，結果睦對祥子完全是底線</p>`},{floor:"1169",username:"索德-莱特",time:"2023-11-21 21:33",reply:"1157",comment:"<p>这会爱音还在给soyo说话呢，还在因为技术练好了欣喜哭笑 鬼胎是没有的，是先相信再相信</p>"},{floor:"1171",username:"明日下山",time:"2023-11-21 21:33",reply:"1157",comment:`<p>最开始看到爱音：</p>
    <p>啊，这种贪慕虚荣总是夸夸其谈的性格有点不喜欢啊</p>
    <p>看到后来：</p>
    <p>(捂住心口)她只是一只爱晒的海豹，她做错了什么？</p>
    <p>你们这样对她是不人道的！！！</p>`},{floor:"1172",username:"kngchau",time:"2023-11-21 21:34",reply:"",comment:`<p><img src="/image/1172.jpg" style="zoom:33%;" /> </p>
    <p>有一说一，她俩也太好磕，虽然有事，但是你有事的话我就没事</p>`},{floor:"1173",username:"Hathaway103",time:"2023-11-21 21:36",reply:"",comment:"<p>楼主看完不会能剧透我们第二季了吧</p>"},{floor:"1174",username:"核桃冰仁",time:"2023-11-21 21:36",reply:"",comment:`<p>喘跟着楼主再品味一遍soyo的特写</p>
    <p>这张脸实在太适合做出刺人的表情了，一直感觉她表露生气伤心闹别扭的负面情绪时，要比常规状态下美貌100倍</p>
    <p>大多数角色颜对不对我胃口第一眼就能知道了，就算后面喜欢上也是因为性格，就算喜欢上性格依旧不会喜欢脸</p>
    <p>但soyo不是，虽然有性格和趣味加成，但我是真觉得生动的负面情绪是她美貌的最佳滤镜</p>`},{floor:"1176",username:"kngchau",time:"2023-11-21 21:37",reply:"",comment:`<p><img src="/image/1176.jpg" style="zoom:33%;" /> </p>
    <p>我靠这里吓得我心脏骤停</p>
    <p>还好没说出来</p>
    <p>这要是立希个直脑筋直接把soyo的话给复述一遍mygo团不是当场爆炸？</p>`},{floor:"1180",username:"明日下山",time:"2023-11-21 21:38",reply:"1176",comment:"<p>三弟为人刚直(复读)</p>"},{floor:"1182",username:"镜面者",time:"2023-11-21 21:38",reply:"1165",comment:"<p>这里理解错了，立希确实是想维持乐队(因为灯想要组乐队)，soyo在立希看来是不可能回来了，那么新的贝斯手就是必要的。只不过立希理解的乐队和灯想要的乐队是不一样，这里就很好体现了立希对灯的不理解……</p>"},{floor:"1184",username:"kngchau",time:"2023-11-21 21:38",reply:"",comment:`<p><img src="/image/1184.jpg" style="zoom:33%;" /> </p>
    <p>夺少？？？</p>
    <p>牛逼</p>
    <p>一开始还以为你是路人，失敬失敬</p>`},{floor:"1185",username:"火龙果叉烧肠粉",time:"2023-11-21 21:39",reply:"1184",comment:"<p>这位是贝斯英雄(矿工模式)</p>"},{floor:"1188",username:"轻风cc",time:"2023-11-21 21:40",reply:"1184",comment:"<p>我大概在30个乐队扣女人(bushi)</p>"},{floor:"1193",username:"kngchau",time:"2023-11-21 21:41",reply:"",comment:`<p><img src="/image/1193.jpg" style="zoom:33%;" /> </p>
    <p>哇，怎么会有这种技术情商都爆表的角色啊</p>
    <p>我好爱她！！！</p>
    <p>这下终于可以集中精力解决soyo的问题了(长舒一口气</p>`},{floor:"1195",username:"摸鱼船长",time:"2023-11-21 21:42",reply:"1184",comment:"<p>冷知识:海玲是有现实原型的，制作组是真见过这种人的</p>"},{floor:"1197",username:"轻风cc",time:"2023-11-21 21:42",reply:"1193",comment:`<p>集中精力解决soyo×</p>
    <p>一口气被soyo解决√</p>`},{floor:"1200",username:"htx18",time:"2023-11-21 21:43",reply:"",comment:"<p>长颈鹿在屏幕前发出奇怪的笑声.wav</p>"},{floor:"1202",username:"kngchau",time:"2023-11-21 21:43",reply:"",comment:`<p><img src="/image/1202.jpg" style="zoom:33%;" /> </p>
    <p>我……艹！！！！！！！！！！！！！！！！！！</p>
    <p>惊</p>
    <p>完了</p>
    <p>全完了</p>
    <p>朕的crychic亡了</p>
    <p>朕的mygo也亡了</p>
    <p>md你们让我选是C团解散还是mygo解散，可没告诉我直接把角色关系恢复出厂设置全都解散啊？？？？？？？？？</p>`},{floor:"1205",username:"谷不勤",time:"2023-11-21 21:44",reply:"",comment:"<p>soyo人在家中坐，头上跳助攻</p>"},{floor:"1206",username:"71和EU",time:"2023-11-21 21:44",reply:"1202",comment:"<p>我们也没说不是多选题啊</p>"},{floor:"1207",username:"Hathaway103",time:"2023-11-21 21:44",reply:"",comment:`<p>刚刚看到的图</p>
    <p><img src="/image/1207.jpg" style="zoom:67%;" /> </p>`},{floor:"1210",username:"AlExAmAmI",time:"2023-11-21 21:45",reply:"",comment:"<p>lz你再仔细想想现在亡的真的是mygo吗</p>"},{floor:"1211",username:"索德-莱特",time:"2023-11-21 21:45",reply:"1202",comment:"<p>前一秒爱音还在因为技术跟上了海玲欣喜，还在帮soyo说话</p>"},{floor:"1212",username:"kngchau",time:"2023-11-21 21:45",reply:"",comment:`<p>立希！！！！！！！！！！！！！！！</p>
    <p>我！！！！！！！！！！！</p>
    <p>这把立希全责！！！！！！！！</p>`},{floor:"1213",username:"Ryodaze",time:"2023-11-21 21:45",reply:"",comment:"<p>其实soyo没想炸mygo，她对mygo完全无所谓，这里是立希女士的操作太愣了</p>"},{floor:"1214",username:"htx18",time:"2023-11-21 21:46",reply:"",comment:`<p>看到楼主在第八集过场的时候还对猫抱有期待，我澄清一下，猫在甩下那句无聊的女孩子离开的时候就已经不会再出现了</p>
    <p>另外立希是不是全责呢，最好冷静之后再分析一下</p>`},{floor:"1219",username:"kngchau",time:"2023-11-21 21:46",reply:"",comment:`<p><img src="/image/1219.jpg" style="zoom:33%;" /> </p>
    <p>缓缓打出一个？</p>
    <p>您还真是直言不讳呢</p>`},{floor:"1221",username:"71和EU",time:"2023-11-21 21:46",reply:"1213",comment:"<p>但最整蛊的是，连立希本人也没想过解散mygo</p>"},{floor:"1223",username:"明日下山",time:"2023-11-21 21:46",reply:"1212",comment:"<p>错误的，立希女士人肉排雷罢了</p>"},{floor:"1224",username:"eMiRiCo",time:"2023-11-21 21:47",reply:"",comment:"<p>好的 楼主 那么现在请问第十集怎么演</p>"},{floor:"1225",username:"盲目痴愚的数字",time:"2023-11-21 21:47",reply:"",comment:"<p>无名乐队罢了，哪里是mygo</p>"},{floor:"1227",username:"西园寺凹凹子",time:"2023-11-21 21:48",reply:"",comment:`<p>立希已经动用了她能动用的最粗两条大腿</p>
    <p>姐姐和海铃</p>
    <p>她真的为了乐队好尽力</p>
    <p>我狠狠跟立希共情了</p>`},{floor:"1229",username:"立希RRRR",time:"2023-11-21 21:48",reply:"1219",comment:"<p>他其實帶海鈴來就是想蓋掉這問題，但他情商不足無法好好地蓋過去，最後被剩餘隊友逼問就只能全爆了，眼神都往旁飄了</p>"},{floor:"1230",username:"Ryodaze",time:"2023-11-21 21:48",reply:"",comment:`<p>楼主，答应我，明天再看第十话好吗</p>
    <p>“普通”とか”あたりまえ”ってなんだろう</p>`},{floor:"1231",username:"瓜山熏",time:"2023-11-21 21:49",reply:"",comment:`<p>其实这里立希高估了爱音的抗压能力(或者说G点判断错误)，她说完后就懵逼了
      “卧槽你干嘛？”</p>`},{floor:"1233",username:"kngchau",time:"2023-11-21 21:49",reply:"",comment:`<p><img src="/image/1233.jpg" style="zoom:33%;" /> </p>
    <p>爱音这个啊</p>
    <p>痛到我心里去了</p>
    <p>啊！！！！！</p>
    <p>她为了乐队那么拼命练琴，从一个小菜鸡那么短时间变得那么熟练</p>
    <p>为了乐队付出了那么多！！！！！</p>
    <p>她只是个在国外自尊心受伤，想回国好好过一段高中生活，只是想组个乐队出风头的小姑娘啊！！!</p>`},{floor:"1236",username:"71和EU",time:"2023-11-21 21:50",reply:"1231",comment:"<p>这波圣爱音抗压其实也没问题哭笑她只是成就你们而已</p>"},{floor:"1242",username:"71和EU",time:"2023-11-21 21:50",reply:"1233",comment:"<p>很喜欢楼主一句话，我支持soyo利用爱音</p>"},{floor:"1243",username:"kngchau",time:"2023-11-21 21:51",reply:"",comment:`<p><img src="/image/1243-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/1243-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/1243-3.jpg" style="zoom:33%;" /> </p>
    <p>立希！！！！！！！！！！！！</p>
    <p>你这说的是人话？！！！！！！！！！！</p>`},{floor:"1244",username:"unkonw990",time:"2023-11-21 21:51",reply:"",comment:'<p><img src="/image/1244.jpg" style="zoom: 80%;" /> </p>'},{floor:"1245",username:"对说你呢",time:"2023-11-21 21:52",reply:"1243",comment:"<p>只能说立希女士心是好的，但做出来全是反面教材</p>"},{floor:"1246",username:"kngchau",time:"2023-11-21 21:52",reply:"",comment:`<p><img src="/image/1246.jpg" style="zoom:33%;" /> </p>
    <p>艹 被狠狠锤了一下</p>`},{floor:"1247",username:"轻风cc",time:"2023-11-21 21:52",reply:"",comment:"<p>很喜欢楼主的一句话：“这要是立希个直脑筋直接把soyo的话给复述一遍mygo团不是当场爆炸？”</p>"},{floor:"1250",username:"kngchau",time:"2023-11-21 21:53",reply:"",comment:`<p><img src="/image/1250.jpg" style="zoom:33%;" /> </p>
    <p>天呐！！！！！！！</p>
    <p>我好心疼爱音！！！！！</p>
    <p>她都到这样情况了，竟然还能不崩溃保持冷静，还能说出这种话</p>`},{floor:"1251",username:"明日下山",time:"2023-11-21 21:53",reply:"1245",comment:"<p>其实爱音是能get到立希是站她这边的，但是老话说泥人也有三分火性，看到灯犹犹豫豫直接就爆压了</p>"},{floor:"1252",username:"71和EU",time:"2023-11-21 21:53",reply:"1243",comment:`<p>其实这波反而是立希在拉爱音留下来</p>
    <p>因为在她的视角，她觉得素世已经罪已诏了，灯没必要为了一个罪人把剩下两正常的抛开，所以她给选择题，也只是顺便让爱音知道我们选你</p>
    <p>但是她没反应过来，灯想要五个人在一起，所以她面对选择题糯了，没反应过来自己其实多选</p>
    <p>然后这个问题就变得像是她俩选择素世了</p>`},{floor:"1253",username:"Hathaway103",time:"2023-11-21 21:54",reply:"",comment:"<p>就正常来说立希把soyo的想法转述了，我是想不到有什么办法再回避这个二选一的了，只能先稳爱音了</p>"},{floor:"1254",username:"kngchau",time:"2023-11-21 21:54",reply:"",comment:`<p><img src="/image/1254.jpg" style="zoom:33%;" /> </p>
    <p>解散是吧，真就解散啊！？</p>`},{floor:"1255",username:"立希RRRR",time:"2023-11-21 21:54",reply:"1250",comment:"<p>這邊在燈回答&quot;不是，我想跟大家&quot;，但在愛音跟立希看來燈還是想要soyo，愛音有看出來立希站她這邊所以還特地抓一個新bass手，所以最後離場的時候是說燈就跟soyo組吧，是在怪燈</p>"},{floor:"1256",username:"索德-莱特",time:"2023-11-21 21:55",reply:"1250",comment:"<p>配音说自己配的时候是真心祝福</p>"},{floor:"1257",username:"雷军单推人",time:"2023-11-21 21:55",reply:"1233",comment:`<p>放在纯良少女偶像乐队企划里</p>
    <p>爱音这性子就是是乐队的主要问题</p>
    <p>要被感化成乐队塔诺西的</p>
    <p>可是在mygo里</p>
    <p>可怜粉毛属于是坐实了被害者的位置</p>`},{floor:"1258",username:"火龙果叉烧肠粉",time:"2023-11-21 21:55",reply:"1250",comment:"<p>这里按照访谈的说法，爱音是真心希望灯和立希好好把心思留在crychic上，不希望自己再成为她们的阻碍了，所以是真挚的祝福哦</p>"},{floor:"1259",username:"kngchau",time:"2023-11-21 21:55",reply:"",comment:"<p>这就是mygo的第九话么？</p>"},{floor:"1260",username:"太阳咸鱼",time:"2023-11-21 21:55",reply:"",comment:"<p>这把难道是我打的有问题.jpg</p>"},{floor:"1263",username:"wayfly",time:"2023-11-21 21:56",reply:"",comment:"<p>对了，我告诉你个事，当时播完第9集之后的那个周末，现实中的mygo乐队还开了场live来着，是不是很魔幻</p>"},{floor:"1265",username:"htx18",time:"2023-11-21 21:56",reply:"",comment:`<p>有没有一种可能，“你也觉得crychic好吗”不完全是反问句，而是疑问句</p>
    <p>你可以稍微带入一点点谍战片的思维来看这里的不对称信息差。立希女士也很懵逼啊，soyo都切割成那个样子了灯还想着挽留，难道我又一次没能理解灯的想法？而这里灯只是无法接受誓言被打破的现实，所以犹豫不决，但有些时候不表态就意味着默认
    </p>`},{floor:"1268",username:"对说你呢",time:"2023-11-21 21:56",reply:"",comment:'<p><img src="/image/1268.jpg" style="zoom:50%;" /> </p>'},{floor:"1271",username:"nemo011",time:"2023-11-21 21:57",reply:"",comment:"<p>楼主，要不复盘一下后，咱今天就歇了吧</p>"},{floor:"1274",username:"松鼠之梦",time:"2023-11-21 21:57",reply:"",comment:`<p>我还是复读一下：</p>
    <p>第九话放送后当周周末，是mygo现实演出的5th live。</p>
    <p>楼主你可以试着猜一下为什么会出现这种情况。哭笑 虽然长颈鹿们早知道答案。</p>
    <p>至于擦肩而过的剧情，mygo的制作组就是挑了这么一个站台去做的。为醋包饺子了。</p>
    <p>这里发一个战吧铁道宅的相关考据。</p>
    <p><a href='https://tieba.baidu.com/p/8546300330?see_lz=1' target='_blank'
        class='url'>https://tieba.baidu.com/p/8546300330?see_lz=1</a></p>`},{floor:"1283",username:"wayfly",time:"2023-11-21 21:59",reply:"",comment:"<p>决定今天楼主还能不能睡的命运时刻即将来到</p>"},{floor:"1288",username:"71和EU",time:"2023-11-21 22:01",reply:"",comment:"<p>楼主的朋友桑，求你了，带楼主出门吃顿宵夜吧</p>"},{floor:"1291",username:"松鼠之梦",time:"2023-11-21 22:01",reply:"",comment:`<p>第九话开始前：</p>
    <p>她说她饶我一命，吃完饭放我回来再看第九话，到时候我会谢谢她的</p>
    <p>所以第九话比第八话还难顶</p>
    <p>这是什么编剧啊艹</p>
    <p>第九话开始：兄弟们，我tm来啦。</p>
    <p>第九话结束：不行我得缓缓。</p>
    <p>啊，多么美妙的感情，桀桀桀</p>`},{floor:"1292",username:"kngchau",time:"2023-11-21 22:02",reply:"1288",comment:"<p>她也来求我明天再看第十话了</p>"},{floor:"1297",username:"kngchau",time:"2023-11-21 22:03",reply:"",comment:"<p>我靠，等一下，她只给了我前九话的资源？！！！</p>"},{floor:"1300",username:"松鼠之梦",time:"2023-11-21 22:03",reply:"",comment:`<p>我的建议只有两个。</p>
    <p>1，复盘789然后睡一觉。</p>
    <p>2，复盘9然后直接冲10。不过你看完10大概率今晚就别想好好休息了。</p>`},{floor:"1301",username:"71和EU",time:"2023-11-21 22:03",reply:"1297",comment:"<p>哈哈哈哈哈</p>"},{floor:"1302",username:"kngchau",time:"2023-11-21 22:03",reply:"",comment:"<p>妈的后面几话她没拷给我，你们有资源么？！</p>"},{floor:"1305",username:"﹍﹎╭殘骸",time:"2023-11-21 22:04",reply:"1297",comment:"<p>这好友绝了</p>"},{floor:"1306",username:"轻风cc",time:"2023-11-21 22:04",reply:"1013",comment:"<p>不知道现在楼主如何评价自己的这句话。</p>"},{floor:"1307",username:"kngchau",time:"2023-11-21 22:04",reply:"",comment:"<p>求资源兄弟们！！！</p>"},{floor:"1308",username:"太阳咸鱼",time:"2023-11-21 22:04",reply:"1297",comment:"<p>这下釜底抽薪了</p>"},{floor:"1309",username:"明日下山",time:"2023-11-21 22:04",reply:"1297",comment:`<p>嚯哈哈哈哈哈哈哈哈太美妙了，这正是我想看到的！</p>
    <p>楼主的朋友，我先替大家狠狠地感谢你口牙</p>`},{floor:"1312",username:"立希RRRR",time:"2023-11-21 22:04",reply:"1297",comment:"<p>樓主的朋友真是為了大家呢，真是太狠毒了</p>"},{floor:"1313",username:"VOV",time:"2023-11-21 22:04",reply:"",comment:"<p>我发现了，MyGO虽说未必是劲儿最大的原创番，但却是最容易让人掉以轻心最后被重锤打晕的</p>"},{floor:"1317",username:"松鼠之梦",time:"2023-11-21 22:04",reply:"1297",comment:`<p>卧槽，楼主朋友比我们还狠，这下真的要复盘789然后睡觉了。</p>
    <p>ps：楼里绝大部分都是有路子看的，但是楼主你想不想是一回事，现在楼主有点抓耳挠腮，骑虎难下了。</p>
    <p>我真的没想到楼主朋友在这埋伏了一手。哈哈哈哈哈哈哈哈哈哈哈。</p>`},{floor:"1322",username:"kngchau",time:"2023-11-21 22:05",reply:"",comment:"<p>我先出门去把她打一顿了各位一会见</p>"},{floor:"1323",username:"71和EU",time:"2023-11-21 22:05",reply:"",comment:`<p>MyGO动画1-13话</p>
    <p>阿里云盘
      <a href='https://www.aliyundrive.com/s/4vHPUhfMMEK' target='_blank'
        class='url'>https://www.aliyundrive.com/s/4vHPUhfMMEK</a>
      提取码: ja76
    </p>
    <p>百度网盘
      链接：<a href='https://pan.baidu.com/s/1HvgzEUAjr2yLYxTyj508LA' target='_blank'
        class='url'>https://pan.baidu.com/s/1HvgzEUAjr2yLYxTyj508LA</a>
      提取码：mygo</p>
    <p>夸克网盘
      链接：<a href='https://pan.quark.cn/s/c00b8516bd40' target='_blank'
        class='url'>https://pan.quark.cn/s/c00b8516bd40</a>
      提取码：Lfgt</p>
    <p>此路过后，绝无希望 </p>`},{floor:"1325",username:"71和EU",time:"2023-11-21 22:06",reply:"",comment:"<p>乐死！哭笑楼主距离资源只有一步 </p>"},{floor:"1337",username:"wayfly",time:"2023-11-21 22:09",reply:"",comment:"<p>这时候不是应该去找你那个朋友下跪拖手求求你我什么都会做的一条龙吗</p>"},{floor:"1340",username:"黑堂隐月",time:"2023-11-21 22:09",reply:"",comment:`<p>anon每次在soyo发出有排除自己的发言时都有表情特写
      她观察力出色，soyo有小心思她早就知道</p>
    <p>这个很轻的“啊a”，没有愤恨，没有醒悟，只有哀伤
      她知道soyo多少是个坏女人，但能有多坏呢？
      ...从一开始就不需要啊</p>
    <p>我真的非常喜欢这一声a
      ano对soyo还是挺复杂的，毕竟是被祥子、灯二连拒绝之后，第一个接受了自己的人
      所以虽然多次注意到soyo话里有话但都以好感滤镜无视掉了
      直到这边立希直接掀桌</p>
    <p>这边哪怕anon发火，哪怕anon皱眉质疑，都不会像现在这般令人心疼
      无声无息，淡然接受，波澜不惊
      所谓心死</p>`},{floor:"1350",username:"核桃冰仁",time:"2023-11-21 22:12",reply:"1297",comment:`<p>哭笑诡计多端的朋友</p>
    <p>编辑：你看看你不行，笑死我了，节目效果拉满
      一刻都没有为被朋友算计的楼主哀悼，下一秒赶来的是——紧接着楼主出门宣言的楼下发出的资源链接</p>`},{floor:"1354",username:"黑堂隐月",time:"2023-11-21 22:13",reply:"",comment:`<p>发完看到楼里这么大乐子</p>
    <p>我宣布这是本月最佳直播楼</p>
    <p>楼主的朋友太懂了</p>
    <p>楼主的反应就跟溜大了突然没得溜一样，你们这看的是个什么动画片啊</p>`},{floor:"1363",username:"松鼠之梦",time:"2023-11-21 22:20",reply:"1125",comment:`<p>？</p>
    <p>等下，现在，1322和1323，好像就是楼主最讨厌的错过的俗套戏码。哭笑好像，回旋镖打到自己了</p>`},{floor:"1366",username:"71和EU",time:"2023-11-21 22:24",reply:"",comment:"<p>说起来，普通路人看着这个帖子短短一小时之内炸开三位数的回复，不会真以为里面在撕架吧</p>"},{floor:"1371",username:"轻风cc",time:"2023-11-21 22:26",reply:"1366",comment:"<p>我们真的没有在撕架吗？如此多的长颈鹿分食一只楼主……</p>"},{floor:"1372",username:"黑堂隐月",time:"2023-11-21 22:26",reply:"1366",comment:`<p>不会的，现在哪有普通路人啊</p>
    <p>猴区一般通过人：tama的这帮长颈鹿又在发癫</p>`},{floor:"1376",username:"宵暗花火496",time:"2023-11-21 22:28",reply:"1371",comment:"<p>这哪里是长颈鹿，这分明是秃鹫和鬣狗</p>"},{floor:"1377",username:"71和EU",time:"2023-11-21 22:29",reply:"",comment:"<p>考虑到楼主提过课表，高楼层应该是放假的时候，现在估计是宿舍串门真人现实timing</p>"},{floor:"1393",username:"kngchau",time:"2023-11-21 22:38",reply:"",comment:"<p>怎么我出门这么一会你们水了整整三页出来？！！！</p>"},{floor:"1394",username:"黑堂隐月",time:"2023-11-21 22:39",reply:"",comment:`<p>有没有一种可能
      算了 根本不是可能</p>
    <p>楼主的朋友桑一定正在观赏我们这些长颈鹿吧？
      或许其实早就混在我们之中了吧？
      ....无所谓，我一样的起舞呀</p>`},{floor:"1395",username:"kngchau",time:"2023-11-21 22:39",reply:"1377",comment:"<p>我被盒了？</p>"},{floor:"1400",username:"kngchau",time:"2023-11-21 22:40",reply:"1394",comment:"<p>她说前段时间还高强度在你坛水mygo贴呢，最近倒是一直在潜水观望你们发电</p>"},{floor:"1404",username:"kngchau",time:"2023-11-21 22:42",reply:"1363",comment:`<p>md，这也能回旋镖么</p>
    <p>你mygo是有什么回旋镖诅咒么</p>`},{floor:"1408",username:"kngchau",time:"2023-11-21 22:43",reply:"",comment:`<p>先说一句，我投降了~</p>
    <p>10-13的资源我拿到了，但是今晚不看了，发电预测就睡觉</p>`},{floor:"1412",username:"kngchau",time:"2023-11-21 22:45",reply:"",comment:`<p>虽然我很想继续，但是一来她告诉我10-13话剧情连贯性很强，第10话又是个大断章，只看10话收不住</p>
    <p><del>二来我又多了两天饭票</del></p>
    <p>于是，今天休战</p>`},{floor:"1416",username:"71和EU",time:"2023-11-21 22:46",reply:"1412",comment:`<p>楼主啊，你居然还信她？</p>
    <p>娃啊，你着相了，她在骗你，第十集才不是什么大断章</p>`},{floor:"1422",username:"kngchau",time:"2023-11-21 22:48",reply:"1306",comment:`<p>首先回旋镖展示</p>
    <p>以及</p>
    <p>这就是我想说的</p>
    <p>仔细回顾一下</p>
    <p>我看了9话了</p>
    <p>然后呢</p>
    <p>白茫茫一片大地真干净是吧</p>`},{floor:"1424",username:"松鼠之梦",time:"2023-11-21 22:49",reply:"1412",comment:"<p>稍微问一下，楼主朋友对剩下4话的推荐是怎么来的？拜托了，这对我很重要</p>"},{floor:"1425",username:"kngchau",time:"2023-11-21 22:50",reply:"1416",comment:"<p>虽然她也不是什么好人，但是你们楼友我是再也不会相信了</p>"},{floor:"1432",username:"71和EU",time:"2023-11-21 22:52",reply:"1425",comment:`<p>楼主，你再想想，到底谁才是你真正的盟友</p>
    <p>你看，我们期待你的反应，期待你继续看下去，我们怎么会做出这种损害我们友好关系的行为呢</p>
    <p>其次，在你说想要资源之后，我可以立刻就给你补上了，你看，你唯一能相信的人，只有我</p>`},{floor:"1435",username:"kngchau",time:"2023-11-21 22:52",reply:"1424",comment:`<p>她跟我共同的推测(等下，好奇怪？？她为什么要推测)是接下来要逐个解决成员归队的问题</p>
    <p>那么第10话可能断在soyo或者爱音这样重要成员归队的地方</p>
    <p>我觉得挺合理的，以mygo的尿性在这里断章很合理，所以的确也不敢再看了</p>`},{floor:"1440",username:"kngchau",time:"2023-11-21 22:55",reply:"",comment:`<p>目前发展到现在有个很明朗的问题就是：这番恐怕根本没有B part！</p>
    <p>这恐怕是一个用13话全部在讲乐队成立的故事。</p>
    <p>这特么根本就是有一整季的OP欺诈好吧！！！！！！！！！</p>
    <p>所以根本没有留下给后面讲乐队组成之后的live故事之类的。</p>`},{floor:"1442",username:"Fallenleaf_落叶",time:"2023-11-21 22:56",reply:"1422",comment:`<p>楼主终于达到了我们当初的状态：
      7集：这下矛盾爆发了，该解决问题了
      8集：这下矛盾彻底爆发了，该解决问题了
      9集：这下矛盾……妈个鸡，寄
      以及……
      7集：只要睦头发起进攻，一切都会好起来的
      8集：只要anon发起进攻，一切都会好起来的
      9集：只要催眠app发起进攻，一切都会好起来的……罢</p>`},{floor:"1447",username:"kngchau",time:"2023-11-21 22:57",reply:"",comment:`<p>那么，估计10-12话是重组mygo的故事，这样后面节奏反而就不那么紧迫了</p>
    <p>第13话应该是个大场面的live，最后以重组后全员共同全身心投入的一次完美live作为全季谢幕。</p>`},{floor:"1452",username:"DarthPPT",time:"2023-11-21 22:58",reply:"1447",comment:"<p>要素察觉：重组mygo，大场面live</p>"},{floor:"1456",username:"kngchau",time:"2023-11-21 23:00",reply:"",comment:"<p>额，写到这儿感觉你们不对劲起来了</p>"},{floor:"1468",username:"黑堂隐月",time:"2023-11-21 23:02",reply:"",comment:`<p>但楼主的预测这次也完全没有错</p>
    <p>确实是10~12话组成了mygo</p>
    <p>13话有大场面live</p>
    <p>你是不是偷偷看过了</p>
    <p><del>大家怎么会骗楼主呢</del></p>`},{floor:"1473",username:"kngchau",time:"2023-11-21 23:03",reply:"",comment:`<p>好吧，先说一下，我原本想的就是10-12话，以祥子的退团原因为契机解决soyo的问题</p>
    <p>其实问题就还是在soyo身上，一旦soyo回来了，爱音是个耳根子软的应该很好劝回来</p>
    <p>但是祥子退团原因实在比较难以处理所以要铺垫一话</p>`},{floor:"1475",username:"kngchau",time:"2023-11-21 23:04",reply:"",comment:"<p>等下，我突然忘了看下集预告了。</p>"},{floor:"1483",username:"kngchau",time:"2023-11-21 23:07",reply:"",comment:`<p>啊不是，怎么下集预告还在踩油门啊</p>
    <p>而且怎么都换夏季校服了</p>
    <p>啥意思啊</p>
    <p>给我整不会了</p>`},{floor:"1484",username:"kngchau",time:"2023-11-21 23:08",reply:"",comment:`<p>不是，我之前编的假药别真是真的吧</p>
    <p>真的要很久之后再聚首才能重组啊</p>`},{floor:"1486",username:"htx18",time:"2023-11-21 23:08",reply:"",comment:"<p>请看下回：一直解散着</p>"},{floor:"1489",username:"谷不勤",time:"2023-11-21 23:09",reply:"1483",comment:`<p>还记得你之前说，多年以后她们才在一场热爱的live上重新相聚吗？</p>
    <p>这句话，现在来杀你了。</p>`},{floor:"1491",username:"kngchau",time:"2023-11-21 23:10",reply:"",comment:`<p>看你们的语气我大概懂了</p>
    <p>下集大概率还是油门，艹</p>`},{floor:"1507",username:"kngchau",time:"2023-11-21 23:12",reply:"",comment:`<p>我本来想的是，这话都这样了，下一话还能再怎么糟糕</p>
    <p>但是从楼友反应和下集预告来看，真的还能糟糕</p>
    <p>有些关系看起来还可以继续破坏</p>
    <p><img src="/image/1507.jpg" style="zoom:33%;" /> </p>
    <p>首先是这里，剪切线怕不是下一刀要切soyo和睦了</p>`},{floor:"1508",username:"方糖块",time:"2023-11-21 23:12",reply:"1491",comment:"<p>怎么会呢？都已经第十集了，该包饺子了</p>"},{floor:"1514",username:"火龙果叉烧肠粉",time:"2023-11-21 23:13",reply:"",comment:`<p>完了，现在楼主已经不再信任长颈鹿了，真作假时真亦假了</p>
    <p>ps，“不要相信长颈鹿”是什么两年前的规则类怪谈吗</p>`},{floor:"1515",username:"kngchau",time:"2023-11-21 23:13",reply:"1508",comment:`<p>我不会再信楼里的这种话了抓狂</p>
    <p>每当你们说这句话的时候</p>
    <p>下一集只会继续爆炸！</p>`},{floor:"1523",username:"kngchau",time:"2023-11-21 23:15",reply:"",comment:`<p>下一个还能剪切的是立希和灯的关系</p>
    <p>看上去下一话灯是独自一个人了，立希也跟海玲混迹在一起了</p>
    <p>所以可能是因为立希的说话艺术，立希和灯也闹翻了</p>
    <p>这样就真的把所有能剪切的关系全都剪切了</p>`},{floor:"1526",username:"71和EU",time:"2023-11-21 23:16",reply:"1514",comment:`<p>正确的规则应该是</p>
    <p>不应该完全信任长颈鹿！</p>`},{floor:"1529",username:"kngchau",time:"2023-11-21 23:17",reply:"",comment:"<p>如果再继续踩油门，睦和祥子的关系也可以剪切，因为之前睦带着soyo来找祥子是破坏了跟祥子约定的</p>"},{floor:"1536",username:"kngchau",time:"2023-11-21 23:19",reply:"",comment:`<p>但是其实搞剪切容易，下一话切得这么彻底，就真的只能上演我之前说的那种：</p>
    <p>很久之后某个live再聚首(前作角色蹭个出场)</p>
    <p>大家相遇</p>
    <p>跳一个很吻合现状的歌(前作应该有吧？)</p>
    <p>大家听了抱头痛哭</p>
    <p>之后爱音把大家拉在一起，说大家已经各自迷失了这么久，不如让我们再次一次迷失吧</p>
    <p>然后重组mygo</p>`},{floor:"1540",username:"修格拉格那",time:"2023-11-21 23:21",reply:"1483",comment:"<p>mygo故事开始的时候就已经是五月了。</p>"},{floor:"1543",username:"kngchau",time:"2023-11-21 23:22",reply:"1540",comment:`<p>哦哦，也就是说其实没过去多久</p>
    <p>但是这里也有点在意，因为mygo真的很少无用的操作么，为什么早不换晚不换，偏偏到了第10话换衣服呢。而且建模换套衣服也挺麻烦的，如果没必要换应该不会多此一举吧</p>`},{floor:"1546",username:"谷不勤",time:"2023-11-21 23:23",reply:"1536",comment:"<p>我有一计，不如命你为独角兽老师，现在就开始连载第二季</p>"},{floor:"1547",username:"kngchau",time:"2023-11-21 23:24",reply:"",comment:`<p>下一话叫一直在迷失</p>
    <p>队名就叫mygo</p>
    <p>那么这个操作岂不是很切题</p>`},{floor:"1553",username:"kngchau",time:"2023-11-21 23:29",reply:"",comment:"<p>大概就是这样啦其他的猜不出来啦，交卷！明天开看！</p>"},{floor:"1558",username:"htx18",time:"2023-11-21 23:35",reply:"",comment:`<p>羡慕失散的乐队成员在不知名的live上不期而遇，重新唤回心中的kirakiradokidoki，确实也很邦邦呢</p>
    <p>楼主完全没有从一集拉一个回来的角度考虑，而是寻求一次性包好饺子的机械降神展开，显然是已经失去对坛友们的信任了</p>`},{floor:"1583",username:"kngchau",time:"2023-11-22 08:13",reply:"",comment:"<p>我忍不了了！一睡醒满脑子都是mygo！我要看第10话了！</p>"},{floor:"1585",username:"kngchau",time:"2023-11-22 08:15",reply:"",comment:`<p><img src="/image/1585.jpg" style="zoom:33%;" /> </p>
    <p>不是，真过了很久然后解散了？？</p>`},{floor:"1586",username:"kngchau",time:"2023-11-22 08:16",reply:"",comment:`<p><img src="/image/1586.jpg" style="zoom:33%;" /> </p>
    <p>啊这，怎么下集预告画面都在这么前面</p>
    <p>那soyo和睦剪切没有我还真又说不好了</p>`},{floor:"1588",username:"kngchau",time:"2023-11-22 08:17",reply:"",comment:`<p><img src="/image/1588.jpg" style="zoom:33%;" /> </p>
    <p>这个表情也太心疼了</p>`},{floor:"1589",username:"kngchau",time:"2023-11-22 08:18",reply:"",comment:`<p><img src="/image/1589.jpg" style="zoom:33%;" /> </p>
    <p>下集预告欺诈是吧</p>
    <p>你怎么开头一分钟把下集预告重播了一遍啊</p>
    <p>那昨天推测完全作废了呗</p>`},{floor:"1591",username:"kngchau",time:"2023-11-22 08:19",reply:"",comment:"<p>这集好低气压</p>"},{floor:"1599",username:"kngchau",time:"2023-11-22 08:23",reply:"",comment:`<p><img src="/image/1599.jpg" style="zoom:33%;" /> </p>
    <p>我觉得我不该大早上看这个的</p>
    <p>这段独白太扎心了啊</p>`},{floor:"1606",username:"kngchau",time:"2023-11-22 08:28",reply:"",comment:`<p><img src="/image/1606.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈，连续低气压到这里终于笑出声了！</p>
    <p>所以在这里竟然安排了灯和初华的相遇……</p>
    <p>天呐，不会她们真是姐妹吧</p>
    <p>灯借由初华的契机有机会跟祥子重聚，由灯对祥子发起攻击，解决C团的问题</p>
    <p>毕竟C团也算是灯和祥子一起开始的故事了，由祥子和灯来结束C团的故事，初华和祥子去开启下一段故事！</p>`},{floor:"1612",username:"kngchau",time:"2023-11-22 08:31",reply:"",comment:`<p><img src="/image/1612.jpg" style="zoom:33%;" /> </p>
    <p>这是成员谈心御用台阶啊</p>
    <p>那这里初华和灯绝对有大发展啊！</p>`},{floor:"1615",username:"kngchau",time:"2023-11-22 08:33",reply:"",comment:`<p><img src="/image/1615.jpg" style="zoom:33%;" /> </p>
    <p>有一个问题，初华看起来把重女人设贯彻到底了(好喜欢！)</p>
    <p>祥子乐队成员竟然都记得脸</p>
    <p>但是这样的她不记得C团叫什么？这合理么？</p>`},{floor:"1618",username:"轻风cc",time:"2023-11-22 08:34",reply:"1615",comment:"<p>不记得这种事当然是装出来的啊！</p>"},{floor:"1620",username:"kngchau",time:"2023-11-22 08:34",reply:"",comment:`<p><img src="/image/1620.jpg" style="zoom:33%;" /> </p>
    <p>喂你们怎么一个两个拿起来人家日记就看啊</p>`},{floor:"1621",username:"kn哘雅乐乃gchau",time:"2023-11-22 08:34",reply:"1615",comment:"<p>而且她经常去星象馆，今天却突然放不下椅子</p>"},{floor:"1623",username:"kngchau",time:"2023-11-22 08:36",reply:"",comment:`<p><img src="/image/1623-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/1623-2.jpg" style="zoom:33%;" /> </p>
    <p>初华！你带我走吧！.jpg</p>
    <p>她太美好了呀</p>
    <p>她简直就是另一个祥子</p>
    <p><del>(艹她还喜欢祥子</del></p>`},{floor:"1628",username:"kngchau",time:"2023-11-22 08:38",reply:"",comment:`<p><img src="/image/1628.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈这跟我闹别扭的时候一模一样</p>
    <p>灯快上啊，这种的哄哄就好了呀！</p>`},{floor:"1632",username:"kngchau",time:"2023-11-22 08:39",reply:"",comment:`<p><img src="/image/1632.jpg" style="zoom:33%;" /> </p>
    <p>你们再聊一会水就凉了，咖啡萃出来就不好喝了！</p>`},{floor:"1634",username:"kngchau",time:"2023-11-22 08:43",reply:"",comment:`<p><img src="/image/1634.jpg" style="zoom:33%;" /> </p>
    <p>原来是这样解决的么？.jpg</p>
    <p>这集感觉好起来了啊(虽然有点ptsd了……</p>
    <p>乐奈好像可以被灯吸引回来的样子</p>`},{floor:"1636",username:"kngchau",time:"2023-11-22 08:45",reply:"",comment:`<p>啊，感觉这段配乐诗朗诵好棒</p>
    <p>我快听哭了md</p>
    <p>词写的真好啊</p>`},{floor:"1638",username:"kngchau",time:"2023-11-22 08:47",reply:"",comment:`<p><img src="/image/1638.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈爱音太可爱了，装作玩手机实际上支起耳朵来听别人讨论灯的事</p>`},{floor:"1639",username:"kngchau",time:"2023-11-22 08:50",reply:"",comment:`<p><img src="/image/1639.jpg" style="zoom:33%;" /> </p>
    <p>这个闹小别扭可太细节了</p>
    <p>感觉就是，如果在冷战，不光不理人，连男朋友给买的东西都不用，他给端的水都不喝</p>
    <p>爱音这明明还在练琴但是都不用灯的创可贴了</p>
    <p>不过虽然我知道这个镜头是想表达她在练琴，但是左手一般不是指腹受伤吧，应该是靠近指甲的指头那部分。或者说这里想说爱音左手指法不标准？</p>`},{floor:"1643",username:"kngchau",time:"2023-11-22 08:54",reply:"",comment:`<p><img src="/image/1643.jpg" style="zoom:33%;" /> </p>
    <p>原来这集是阳间回啊！！</p>
    <p>这里就是玩一个聚光灯挨个亮起的活</p>
    <p>就像之前C团解散那里聚光灯挨个熄灭！</p>
    <p>mygo重组3/5！</p>
    <p>(不过剩下的才是难点啊</p>
    <p>爱音其实看起来也不难搞，难搞的是soyo</p>`},{floor:"1644",username:"kngchau",time:"2023-11-22 08:57",reply:"",comment:`<p><img src="/image/1644.jpg" style="zoom:33%;" /> </p>
    <p>被我在7 8 9寄予厚望的睦没有发力，原来在这里埋伏了一手！！</p>
    <p>好起来了兄弟们！！</p>`},{floor:"1645",username:"Czm7913654",time:"2023-11-22 08:58",reply:"1644",comment:"<p>睦后黑手</p>"},{floor:"1647",username:"kngchau",time:"2023-11-22 08:59",reply:"",comment:`<p><img src="/image/1647.jpg" style="zoom:33%;" /> </p>
    <p>越看越像同班小情侣在班里吵架或者求复合哭笑</p>
    <p>虽然看起来挺合理，但是你们这个节奏怎么另一种意义的踩油门了</p>
    <p>条才一半就要解决了四个人了？？？</p>`},{floor:"1649",username:"Winter丶act",time:"2023-11-22 09:00",reply:"1647",comment:"<p>世界名画，祥子在隔壁班</p>"},{floor:"1651",username:"71和EU",time:"2023-11-22 09:01",reply:"1647",comment:"<p>此刻，在隔壁的祥子:什么b动静</p>"},{floor:"1654",username:"kngchau",time:"2023-11-22 09:02",reply:"",comment:`<p><img src="/image/1654.jpg" style="zoom:33%;" /> </p>
    <p>我要回旋镖一下</p>
    <p>爱音你是个好姑娘啊</p>
    <p>她们想要利用你是坏女人的不对</p>
    <p>你虽然起因是爱慕虚荣，但是你真的很努力很努力为乐队付出了啊</p>
    <p>没有你这个乐队要散的(是不是有楼友很早就跟我说过这个</p>`},{floor:"1659",username:"kngchau",time:"2023-11-22 09:05",reply:"",comment:`<p><img src="/image/1659.jpg" style="zoom:33%;" /> </p>
    <p>爱音果然还是耳根子软啊</p>
    <p>虽然合理，但是作为剧情，这么安排还是太紧凑了</p>
    <p>会让观众感觉上一集用半集把四个人拆了，这一集用半集把四个人拉回来，那你演了个寂寞的感觉(怎么回旋镖又打到我了？</p>
    <p>当然我自己是很有体会的我觉得很合理</p>
    <p>但是从剧情张弛来说这前半集和上一话后半集着实快了点</p>`},{floor:"1661",username:"kngchau",time:"2023-11-22 09:07",reply:"",comment:`<p><img src="/image/1661.jpg" style="zoom:33%;" /> </p>
    <p>翻译：请务必跟着我！</p>
    <p>唉，女人就是这么麻烦！</p>`},{floor:"1668",username:"kngchau",time:"2023-11-22 09:09",reply:"",comment:`<p><img src="/image/1668.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈，这编剧绝对是个妹子好吧她太懂了</p>
    <p>说这话这就有戏了</p>`},{floor:"1672",username:"kngchau",time:"2023-11-22 09:10",reply:"",comment:`<p><img src="/image/1672.jpg" style="zoom:33%;" /> </p>
    <p>你们怎么一个两个都这么直言不讳啊</p>`},{floor:"1675",username:"71和EU",time:"2023-11-22 09:10",reply:"",comment:"<p>独角兽老师可是有切身体会的重女</p>"},{floor:"1677",username:"kngchau",time:"2023-11-22 09:12",reply:"",comment:`<p><img src="/image/1677.jpg" style="zoom:33%;" /> </p>
    <p>soyo！！！！！！！</p>
    <p>你会后悔的！！！！</p>
    <p>气话上头不可取啊！！！！</p>
    <p>啊啊啊啊，恨铁不成钢！</p>
    <p>有一说一，我真的很在soyo身上看到我自己。</p>`},{floor:"1681",username:"西园寺凹凹子",time:"2023-11-22 09:14",reply:"",comment:`<p>大家都会找个角色进行天啊这根本就是我</p>
    <p>但楼主和soyo的同步率确实是很高</p>`},{floor:"1685",username:"乙凌全巳袁史",time:"2023-11-22 09:17",reply:"1681",comment:`<p>那楼主的朋友就是爱音吗</p>
    <p>完了，已经可以看到爱音只留下9集资源时的坏笑 <del>和soyo嘴上说着抓耳挠腮其实还是从了爱音不往后看的叹气</del> 了</p>`},{floor:"1687",username:"caricy",time:"2023-11-22 09:18",reply:"",comment:"<p>我是来结束乐队的，你们要干什么</p>"},{floor:"1688",username:"Ryodaze",time:"2023-11-22 09:19",reply:"1685",comment:"<p>在奇怪的地方磕到了爱素假糖</p>"},{floor:"1692",username:"kngchau",time:"2023-11-22 09:23",reply:"",comment:`<p>我是楼主朋友，楼主现在情绪有点不太稳定，你们先聊着，等她好些了再回复你们哈</p>
    <p>爱你们~</p>`},{floor:"1693",username:"ch19930611",time:"2023-11-22 09:24",reply:"",comment:"<p>楼主你不会也被诗超绊击沉了吧？</p>"},{floor:"1696",username:"西园寺凹凹子",time:"2023-11-22 09:24",reply:"",comment:`<p>谢谢你</p>
    <p>嗜血长颈鹿朋友</p>`},{floor:"1698",username:"Варшавянка1920",time:"2023-11-22 09:25",reply:"",comment:"<p>楼主已经化身soyo原地开哭了</p>"},{floor:"1699",username:"71和EU",time:"2023-11-22 09:25",reply:"1692",comment:"<p>ano酱，求你了，快让soyorin回来吧，我们什么都会做的</p>"},{floor:"1703",username:"typeomicron",time:"2023-11-22 09:25",reply:"1692",comment:`<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
    <p>在群里我们已经擅自把你定义成楼主的ano酱了</p>
    <p>总之ano酱love！你做的好啊！</p>`},{floor:"1706",username:"vincent2751",time:"2023-11-22 09:27",reply:"",comment:"<p>樓主應該是哭成soyo了</p>"},{floor:"1708",username:"DarthPPT",time:"2023-11-22 09:28",reply:"",comment:"<p>这下真被诗超绊超市了</p>"},{floor:"1712",username:"wayfly",time:"2023-11-22 09:29",reply:"",comment:"<p>你们也要玩半夜抢号play？</p>"},{floor:"1715",username:"saotur",time:"2023-11-22 09:30",reply:"",comment:"<p>又有人被灯皇超哭了</p>"},{floor:"1717",username:"黑堂隐月",time:"2023-11-22 09:31",reply:"",comment:"<p>坏了长颈鹿怎么开始磕楼主和朋友了</p>"},{floor:"1719",username:"diclaw",time:"2023-11-22 09:32",reply:"1692",comment:"<p>谢谢你，朋友酱，昨晚楼主有没有抓着你的手说求求你让我再看一集我什么都会做的</p>"},{floor:"1721",username:"71和EU",time:"2023-11-22 09:32",reply:"1717",comment:"<p>因为是soyorin跟ano酱啦</p>"},{floor:"1722",username:"药师寺琉璃",time:"2023-11-22 09:32",reply:"",comment:`<p>總覺得樓主會很羨慕soyo有燈皇哭笑</p>
    <p>就不用羨慕有愛音了 樓主的朋友已經是愛音了</p>`},{floor:"1729",username:"蔷薇花开",time:"2023-11-22 09:44",reply:"",comment:`<p>楼主已经汗流浃背了吧？</p>
    <p>另，楼主真是妹子啊？惊</p>
    <p><del>那更加的美味哩</del></p>`},{floor:"1734",username:"乙凌全巳袁史",time:"2023-11-22 09:46",reply:"",comment:`<p>拒绝泥塑坛友从我做起(心虚)</p>
    <p>还有长颈鹿没有性别</p>`},{floor:"1737",username:"typeomicron",time:"2023-11-22 09:50",reply:"1734",comment:`<p>ano酱love</p>
    <p><del>桀桀桀…不管什么性别我都一样的磕啊…</del></p>
    <p>编辑：我知道很失礼且一般不会做这种事但账号姑且是离本人比较远的网络皮套所以浅磕一下大概不会造成困扰(支离破碎的思考?发言</p>`},{floor:"1741",username:"今天SBR动画化了吗",time:"2023-11-22 09:53",reply:"",comment:"<p>在灯宝生日被诗超绊击沉，独一份的追番体验啊</p>"},{floor:"1742",username:"Angelic_Layer",time:"2023-11-22 09:53",reply:"1734",comment:`<p>anon酱快说句话</p>
    <p>楼主是不是被拉上台自愿演奏诗超绊啊</p>`},{floor:"1748",username:"vincent2751",time:"2023-11-22 10:00",reply:"",comment:`<p>不說別的 樓主的朋友真的是 <del>各方面的</del> 好朋友了</p>
    <p>前面精彩的戲劇效果不說</p>
    <p>還提前預見到樓主看完第十集會被超爆 去一起陪著ta看了</p>
    <p><del>我也想要這樣的朋友</del></p>`},{floor:"1753",username:"Gen_Mark_Wang",time:"2023-11-22 10:02",reply:"",comment:"<p>完了，这下抓耳挠腮的是我了</p>"},{floor:"1758",username:"kngchau",time:"2023-11-22 10:07",reply:"",comment:`<p>我回来了，抱歉大家第10话直播约等于鸽了你们</p>
    <p>看第10话后半段的live真的哭得稀里哗啦</p>
    <p>当然哭成这样老实说还有些场外因素，我感觉我曾经就是soyo，一切都很像，唯一的不像的是，当时的我甚至还不如soyo坦率，也没有遇到自己的爱音把我一把拉上台来</p>
    <p>soyo的mygo组成了，我的mygo却永远留在回忆里了</p>
    <p>或许动画是动画，人生是人生</p>
    <p>现在回看这段live眼泪还是忍不住，所以直播要先稍微搁置一下了抱歉各位~</p>`},{floor:"1759",username:"用户7160874941",time:"2023-11-22 10:08",reply:"",comment:"<p>楼主终于彻底理解了为什么这番让一群人变成了近乎精神病一般的存在，而且自己也成为了其中的一员</p>"},{floor:"1760",username:"REMIX1",time:"2023-11-22 10:08",reply:"",comment:"<p>这唱的根本就是我</p>"},{floor:"1761",username:"Caresland",time:"2023-11-22 10:09",reply:"",comment:"<p>我竟有幸目睹楼主与命中注定的闪耀相会的珍贵瞬间……至福……</p>"},{floor:"1765",username:"黑堂隐月",time:"2023-11-22 10:11",reply:"",comment:"<p>要不看看你旁边那个正在看你哭哭的...？</p>"},{floor:"1769",username:"shenyumo",time:"2023-11-22 10:18",reply:"",comment:"<p>吓死了，还以为楼主要找人忘记一切了(</p>"},{floor:"1776",username:"ZweiZala",time:"2023-11-22 10:30",reply:"",comment:"<p>我超还真有soyo能看到第十集啊</p>"},{floor:"1780",username:"xxx19199509",time:"2023-11-22 10:34",reply:"1758",comment:"<p>能与角色共情本身就是温柔的一种表现，能遇到让自己共情的角色也是一种幸运，所以说，放声地哭泣吧，把内心所有的感情全部宣泄出来</p>"},{floor:"1786",username:"灰蛇4396",time:"2023-11-22 10:39",reply:"1668",comment:"<p>编剧：我写女女关系和呼吸一样轻松</p>"},{floor:"1805",username:"kngchau",time:"2023-11-22 11:06",reply:"",comment:`<p>大家不要等了啦，楼主现在又是回看live又是看二创的已经快哭崩了，我真的有点心疼啦，今天不打算让她继续看了</p>
    <p>我带她出去散散心啦，今晚可能不播啦，楼给你们闲聊用吧</p>
    <p>笔芯~</p>`},{floor:"1812",username:"Bluelore",time:"2023-11-22 11:10",reply:"1805",comment:"<p>答应我，即便做不了楼主的爱音，也不要做楼主的睦头人好吗</p>"},{floor:"1814",username:"无有我上",time:"2023-11-22 11:12",reply:"",comment:"<p>这就是诗超绊，中间省略，听完就啊啊啊啊啊啊啊啊啊</p>"},{floor:"1816",username:"枞枞那年",time:"2023-11-22 11:12",reply:"1805",comment:"<p>ano酱love</p>"},{floor:"1822",username:"呆毛抱抱我",time:"2023-11-22 11:26",reply:"",comment:"<p>都是你们害的，mygo粉丝全员qb</p>"},{floor:"1830",username:"Bluelore",time:"2023-11-22 11:38",reply:"",comment:"<p>其实大概能猜到，楼主是看到进副歌soyo落泪那瞬间一下子就撑不住了罢</p>"},{floor:"1842",username:"htx18",time:"2023-11-22 12:26",reply:"",comment:`<p>今天看不到冷静分析剧情的美味楼主了</p>
    <p>明明是这么常规的坛友都透露的八九不离十的包饺子剧情，为什么会变成这样呢</p>`},{floor:"1857",username:"异异异47",time:"2023-11-22 15:15",reply:"",comment:`<p>坏了，诗超绊把楼主干沉没了，直接结束今天直播了(我是来结束今天直播的)</p>
    <p>这下真做到一天一集了。</p>`},{floor:"1858",username:"而今听雨",time:"2023-11-22 15:22",reply:"1857",comment:`<p>1-3话的楼主：我能忍住一天一集</p>
    <p>第一天看了6集</p>
    <p>9话的楼主：我怕我忍不住把10-13全看了</p>
    <p>被第10话破防今天只看一集了</p>
    <p>回旋镖，都可以回</p>`},{floor:"1860",username:"takilovee",time:"2023-11-22 15:26",reply:"1858",comment:"<p>搂主也太美味了，专楼还能磕到爱素是没想到的，这不得点一首有点坏</p>"},{floor:"1866",username:"kngchau",time:"2023-11-22 16:43",reply:"1830",comment:`<p>没有啦，其实看到soyo被拉上台就鼻子一酸，后面灯在独白，爱音在帮soyo装背带，给她背上还帮她把头发撩出来就彻底绷不住了</p>
    <p>soyo哭出来的时候我已经哭得像个傻子了……</p>`},{floor:"1869",username:"REMIX1",time:"2023-11-22 16:48",reply:"",comment:"<p>anon的小手不是很干净 撩头发确实让人发昏的</p>"},{floor:"1871",username:"kngchau",time:"2023-11-22 16:51",reply:"1869",comment:"<p>soyo头发是过肩的，应该大概到内衣带那个长度吧，直接给她挂上背带是会压到一些头发的，其实应该帮她把背后的头发也撩一撩，动画动作应该没做这么细</p>"},{floor:"1874",username:"kngchau",time:"2023-11-22 16:53",reply:"",comment:`<p>感觉好多啦，不过今天不回宿舍啦也没带电脑出来，就先不播啦~</p>
    <p>朋友也不放心我，今晚会陪着我的~</p>
    <p>谢谢大家关心~</p>`},{floor:"1878",username:"typeomicron",time:"2023-11-22 16:56",reply:"1866",comment:`<p>抱抱 soyo 楼主诶嘿</p>
    <p>看楼里大家的反应可能会误解些什么，但其实大家都在这里陪着屏幕里的人哭过的哭笑或者说正因如此才会这么喜欢被破防的lz，扭曲怪是这样的</p>`},{floor:"1879",username:"佩特拉城城主",time:"2023-11-22 16:56",reply:"",comment:"<p>好好好，这还能磕爱素糖是没想到的</p>"},{floor:"1881",username:"hejuujur",time:"2023-11-22 16:58",reply:"",comment:"<p>完了，今晚楼主要被她朋友吃干抹净了</p>"},{floor:"1884",username:"kngchau",time:"2023-11-22 17:06",reply:"1881",comment:"<p>胡说，明明是她被吃干抹净</p>"},{floor:"1885",username:"对说你呢",time:"2023-11-22 17:09",reply:"1884",comment:"<p>还会争1，是真的soyorin啊</p>"},{floor:"1886",username:"黑堂隐月",time:"2023-11-22 17:13",reply:"",comment:`<p>？兄弟们我先嗑了嗷</p>
    <p>明天可以报告一下战况吗，谁打赢谁上号</p>`},{floor:"1888",username:"火龙果叉烧肠粉",time:"2023-11-22 17:15",reply:"",comment:`<p>soyo终于缓过来了啊，可喜可贺(我为什么要说soyo)</p>
    <p>虽然我想说……但是……(心虚地爬楼)</p>
    <p>我只是觉得这个时候应该看点这个幻想东西。没有任何意思啊，这只是ansy成了之后ano调戏soyo，在一天晚上给她看当时诗超绊的录像，不曾想soyo直接破防了，于是……</p>
    <p>(我在说ansy二创，你们在说什么(警觉</p>
    <p><del>上色编辑</del></p>
    <p><img src="/image/1888.jpg" style="zoom:50%;" /> </p>`},{floor:"1890",username:"安德森克",time:"2023-11-22 17:17",reply:"",comment:`<p>贴主和坛友的反应真是带感</p>
    <p>简直是天大饥，长颈鹿相食。</p>`},{floor:"1891",username:"空集巨龙",time:"2023-11-22 17:17",reply:"",comment:"<p>这下ano失算了，要是昨晚给了第十话资源，说不定昨天夜里已经拿下了</p>"},{floor:"1892",username:"一虫破万法",time:"2023-11-22 17:18",reply:"1888",comment:"<p>英雄，光速二创suki</p>"},{floor:"1894",username:"vincent2751",time:"2023-11-22 17:20",reply:"1888",comment:"<p>連直播樓也有二創是我怎也想不到的</p>"},{floor:"1897",username:"谷不勤",time:"2023-11-22 17:22",reply:"1894",comment:"<p>直播看mygo是十月新番，给十月番画二创有什么不对(错乱)</p>"},{floor:"1907",username:"八雲之青",time:"2023-11-22 17:36",reply:"1894",comment:"<p>还有高手！？直播楼都能有二创，只要你一声令下，我们立刻簇拥楼主为soyo(NGA.ver)</p>"},{floor:"1908",username:"RereiN",time:"2023-11-22 17:40",reply:"1894",comment:"<p>怎么直播楼都能自己长出二创来，无敌了</p>"},{floor:"1914",username:"Ryodaze",time:"2023-11-22 17:59",reply:"1908",comment:"<p>mujica总有一天会自己从社区里长出来的</p>"},{floor:"1933",username:"fluoria",time:"2023-11-22 19:58",reply:"",comment:`<p>楼主没关系的，每看一遍诗超绊都哭到不行这种事情超正常，每个人都和你一样的哭</p>
    <p>对，说的就是你(转头)わかります～</p>`},{floor:"1940",username:"AREA184",time:"2023-11-22 21:20",reply:"",comment:`<p>这就是mygo的魅力吗</p>
    <p>学长给我推荐了这个直播楼从下班直接看到现在，太恐怖了(赞赏</p>
    <p>感谢楼主和朋友桑，还有楼里的各位长颈鹿</p>
    <p>长颈鹿越多，长颈鹿就越多！</p>`},{floor:"1952",username:"kngchau",time:"2023-11-22 23:01",reply:"",comment:`<p>明天不一定什么时间回去</p>
    <p>大家先不用等我，谢谢大家啦</p>`},{floor:"1954",username:"不存在的竹渊",time:"2023-11-22 23:04",reply:"1952",comment:`<p>众所周知，soyorin嘴很硬，语气也很直白</p>
    <p>而经常有小动作和可爱表情的只有粉毛大狗狗</p>
    <p>所以，爱素是好文明啊好文明</p>
    <p>ps：回看1884，大概已经分出胜负了？</p>`},{floor:"1956",username:"而今听雨",time:"2023-11-22 23:09",reply:"1952",comment:"<p>给来晚了的朋友澄清一下：这楼的内容之前完全不是这样的，这是编辑之后的</p>"},{floor:"1961",username:"typeomicron",time:"2023-11-22 23:15",reply:"",comment:`<p>看见两版不同回复已经晕过去了</p>
    <p>是因为什么晕过去的我不说</p>`},{floor:"1979",username:"xyx6464",time:"2023-11-23 01:53",reply:"",comment:`<p>趁着楼主被吃干抹净的空档</p>
    <p>我终于爬完了楼</p>
    <p>太爽了</p>
    <p>能看出各种细节频出假药的楼主</p>
    <p>起哄配合真真假假的噬血长颈鹿</p>
    <p>略施小计只给九集资源的朋友桑</p>
    <p>出门清算和资源擦肩而过的回旋镖</p>
    <p>朋友顶号ano酱上身还能嗑一手爱素</p>
    <p>这个直播楼我一辈子都不会忘</p>`},{floor:"1986",username:"几只鱼",time:"2023-11-23 06:23",reply:"",comment:`<p>连夜又再次补完了这栋楼，我只能说我愿称之为mygo(nga ver.)</p>
    <p>一时间百感交集，千万言语，仿佛又回到了那个补番的晚上。</p>
    <p>可以说mygo在开播前，所有人都没想到它会这么火，正如这个楼直播的开始，大家都没有想到它会这么火。</p>
    <p>你慢慢发现楼主对很多细节预测惊人地准确，仿佛集合了追番专楼大伙们所有的 惊世智慧 ，你不禁开始期待下一话楼主的反应， 并慢慢带上了嗜血的笑容 。</p>
    <p>但你没想到，比起mygo的剧情和楼主的观感，更大的还在第九话“她只给了我前九话的资源”，楼主 追妻火葬场
      之后，大家逐渐开始感到兴奋，为着从未见过的直播楼现实剧情。但没想到大的竟然还在后面，连mygo的剧情似乎都不再那么重要了。 <del>朋友桑，love～</del> </p>
    <p>此刻回望，mygo特有的回旋镖文化在这个楼里体现的淋漓尽致，不仅是楼主遭了重，极速赶来的长颈鹿们也难逃一劫， <del>那么谁赢到了最后呢？</del> </p>
    <p>真的，多谢款待，为着这前所未有的直播楼，为着这前所未有的舞台，舞台少女每天都在进化，戏里戏外早已不再重要，长颈鹿们也变成了舞台的一部分，为着无限耀眼的闪耀。</p>
    <p>(btw，虽然好像跟完结宣言一样，还是请楼主 和朋友桑一起 继续你 们 的表演。 <del>大伙第二季的预测就靠soyo酱和anon酱了 )</del></p>
    <p>最后，提前为两千楼的诞生送上祝贺的掌声！这注定会是mygo 直播 史上浓墨重彩的一笔。</p>
    <p>我觉得再也不会有这样闪耀的直播楼了。 <del>先自己奶一口，万一呢？没准rikki，tomorin和rana已经在路上了呢？</del></p>`},{floor:"2005",username:"而今听雨",time:"2023-11-23 08:56",reply:"",comment:`<p>恭喜两千楼！！！</p>
    <p>路人坛友别惊讶，这楼就是长颈鹿们在集体发癫，不用在意</p>
    <p>但是！</p>
    <p>如果你看过了MyGO，请务必爬楼试试！</p>
    <p>这里爬楼的体验绝对是独此一家的！(害，我不想剧透，但是高赞楼已经在首页剧透得一干二净了</p>`},{floor:"2015",username:"顾秋声",time:"2023-11-23 10:17",reply:"",comment:`<p>平生不修善果，最爱喷人拱火。</p>
    <p>忽地为鹿作伥，这边扯断狱锁。</p>
    <p>噫！两千楼里爱素来，今日方知我是我！</p>`},{floor:"2032",username:"而今听雨",time:"2023-11-23 11:36",reply:"",comment:"<p>咳咳，没想到这楼还没更新，又有新乐子看了，各位坛友不要声张，乐子自寻哭笑(我真不是故意想当谜语人的，被要求了内绪的</p>"},{floor:"2050",username:"Develde",time:"2023-11-23 13:22",reply:"",comment:`<p>对mygo戒断反应 old</p>
    <p>对直播mygo戒断反应 new</p>`},{floor:"2059",username:"typeomicron",time:"2023-11-23 15:19",reply:"",comment:`<p>所以希望能听我好好向你说明清楚</p>
    <p>要是事先知道我就会阻止了</p>
    <p>直播都结束了，他们却突然开始磕cp</p>
    <p>对不起，没能阻止他们…</p>
    <p>楼主，你一定很生气吧…</p>
    <p>你会生气我觉得是当然的</p>
    <p>但是请你相信我，我们原本真的没有打算磕cp</p>
    <p>真的很对不起</p>
    <p>我保证我不会擅自磕你们两个了</p>
    <p>我也会让其他人以后绝对不要再说些怪话的</p>
    <p>我们可以稍微谈谈吗？</p>`},{floor:"2074",username:"Arthurrrrrrrrr",time:"2023-11-23 16:56",reply:"",comment:`<p>一眼看到今天唯一的更新</p>
    <p>他妈的 嗜血长颈鹿还有什么不满足的了？！</p>`},{floor:"2079",username:"kngchau",time:"2023-11-23 17:31",reply:"",comment:`<p>哇，一天没上NGA怎么这么多回复啦！</p>
    <p>我先看你们的回复呀，谢谢大家</p>`},{floor:"2081",username:"kngchau",time:"2023-11-23 17:34",reply:"",comment:`<p>啊这……</p>
    <p>你们怎么开始拿我俩跟soyo和爱音类比起来了……</p>
    <p>不一样呀！soyo多才多艺的，又会低音提琴，又会加社团，我很宅的！每天就看看剧偶尔看看番，刷刷手机什么的，之前说跟soyo像是性格和经历比较类似吧</p>
    <p>至于我身边这位……</p>
    <p>我不好说……</p>
    <p>我只能说爱音那么可爱大方温柔善良，可不像某人……</p>`},{floor:"2082",username:"蓝全球",time:"2023-11-23 17:35",reply:"",comment:"<p>坏了，楼主醒了回来清算长颈鹿了</p>"},{floor:"2085",username:"kngchau",time:"2023-11-23 17:36",reply:"",comment:`<p>不过大家愿意开我们玩笑的话，反正我旁边这位说她没意见</p>
    <p>那大家也不用拘束啦</p>
    <p>能给大家带来快乐就好呀</p>`},{floor:"2087",username:"kngchau",time:"2023-11-23 17:37",reply:"",comment:"<p>等下等下，我头像怎么换了</p>"},{floor:"2088",username:"黑堂隐月",time:"2023-11-23 17:38",reply:"",comment:"<p>现在说什么都像soyo那张太阳系爆炸都能剩下的硬嘴了</p>"},{floor:"2091",username:"黑堂隐月",time:"2023-11-23 17:38",reply:"2087",comment:"<p>啧，发现得好快</p>"},{floor:"2093",username:"谷不勤",time:"2023-11-23 17:38",reply:"",comment:`<p>楼主回来啦，大家快投降。</p>
    <p>对楼主和友人的不当比喻，完全由mygo贝斯手长崎素世与吉他手千早爱音指使，和我们没有关系呀</p>`},{floor:"2097",username:"不存在的竹渊",time:"2023-11-23 17:39",reply:"",comment:`<p>soyo0的嘴硬，爱音的小心机……</p>
    <p><del>就是本人！就是本人！</del></p>
    <p>啊，发现了</p>
    <p>所以你身边这位为啥对大家调侃没意见呢，为什么呢(望天)</p>`},{floor:"2098",username:"Kfly",time:"2023-11-23 17:39",reply:"2087",comment:"<p>草，原来是被朋友换了？</p>"},{floor:"2100",username:"風見越",time:"2023-11-23 17:40",reply:"",comment:"<p>感觉楼主没看过访谈特此提示：导演在官方访谈中表示，长崎女士因为没有习惯大屏幕所以很少用家里的大型电视看剧看电影，对她来说智能手机这个大小的屏幕刚刚好</p>"},{floor:"2101",username:"巡洋战舰天城",time:"2023-11-23 17:41",reply:"2081",comment:"<p>每天只会刷刷手机，那不更soyo了</p>"},{floor:"2102",username:"typeomicron",time:"2023-11-23 17:41",reply:"",comment:`<p>可 不 像 某 人</p>
    <p>就是本人！就是本人！(多义)</p>`},{floor:"2107",username:"kng黑堂隐月chau",time:"2023-11-23 17:43",reply:"",comment:`<p>100%纯度的ansy互动，美味</p>
    <p>另外 头像这个事是你家朋友桑和叉烧老师合计的(进行一个队友的卖)</p>
    <p>开播之前可以先进行一下线下清算</p>`},{floor:"2110",username:"kngchau",time:"2023-11-23 17:44",reply:"",comment:"<p>啊换头像好麻烦气死了</p>"},{floor:"2113",username:"kngchau",time:"2023-11-23 17:45",reply:"2107",comment:"<p>哈哈哈哈那你们现在已经知道她大号了？她不是说不暴露么</p>"},{floor:"2114",username:"枞枞那年",time:"2023-11-23 17:45",reply:"",comment:"<p>好麻烦啊，于是就不换了是吧</p>"},{floor:"2117",username:"谷不勤",time:"2023-11-23 17:47",reply:"2113",comment:"<p>都是用您的号说的呀</p>"},{floor:"2119",username:"kngchau",time:"2023-11-23 17:49",reply:"2117",comment:`<p>？？NGA能私聊的么，在哪儿？</p>
    <p>我靠她竟然敢用我的号私聊别人！！！</p>`},{floor:"2120",username:"西园寺凹凹子",time:"2023-11-23 17:49",reply:"2110",comment:"<p>现在的楼主正是11话本人吔</p>"},{floor:"2121",username:"ZweiZala",time:"2023-11-23 17:50",reply:"2119",comment:"<p>你看看这号的发帖记录，是不是有些话好像自己没说过</p>"},{floor:"2124",username:"kngchau",time:"2023-11-23 17:51",reply:"2121",comment:"<p>发帖记录在哪儿看啊？只能手机看么？</p>"},{floor:"2127",username:"Ryodaze",time:"2023-11-23 17:55",reply:"",comment:"<p>越磕越真了，怎么回事呢</p>"},{floor:"2129",username:"kngchau",time:"2023-11-23 17:56",reply:"",comment:`<p>果然是拿我的号发的！！！</p>
    <p>她完了！！！！</p>`},{floor:"2130",username:"谷不勤",time:"2023-11-23 17:56",reply:"",comment:`<p>楼主与友人桑</p>
    <p><img src="/image/2130.jpg" style="zoom: 50%;" /> </p>
    <p>住手啊，要把十一集透干净了！</p>`},{floor:"2132",username:"嘉平廿五",time:"2023-11-23 17:57",reply:"",comment:`<p>ano(悄摸摸拿soyorinins跟别人私聊)</p>
    <p>soyo：千早爱音！你现在就滚出我家！！</p>`},{floor:"2133",username:"kngchau",time:"2023-11-23 17:58",reply:"",comment:`<p>话说你们给角色的昵称好腻味啊，soyorin ano酱……</p>
    <p>你们正常点，我害怕.jpg</p>`},{floor:"2135",username:"黑堂隐月",time:"2023-11-23 17:58",reply:"",comment:`<p>事到如今图透已经不是罪业了</p>
    <p>还没看11集</p>
    <p>处处在演11集</p>`},{floor:"2142",username:"枞枞那年",time:"2023-11-23 17:59",reply:"2133",comment:"<p>这不是把11集演完了吗</p>"},{floor:"2144",username:"zxj147576518",time:"2023-11-23 17:59",reply:"",comment:"<p>什么新概念11集</p>"},{floor:"2147",username:"燚龘先生",time:"2023-11-23 17:59",reply:"",comment:"<p>有种soyo一觉睡醒发现自己的号被爱音用来和别人私聊的美</p>"},{floor:"2149",username:"Ryodaze",time:"2023-11-23 17:59",reply:"",comment:"<p>楼主还没看11集，但11集已经自己从直播楼里长出来了</p>"},{floor:"2153",username:"kngchau",time:"2023-11-23 18:00",reply:"",comment:`<p>好吧好吧，不说别的</p>
    <p>这是直播楼啊喂！！</p>
    <p>你们怎么开始拱火了</p>
    <p>我要看第11话了</p>`},{floor:"2154",username:"谷不勤",time:"2023-11-23 18:01",reply:"",comment:"<p>一个路人在第十集突然被拉上舞台，然后直播楼里突然就继续演后面的剧情了，你们有什么头绪吗</p>"},{floor:"2156",username:"ZweiZala",time:"2023-11-23 18:01",reply:"",comment:`<p>楼主在看帖</p>
    <p>谭友看什么？</p>
    <p>谭友在看11集</p>`},{floor:"2158",username:"DarthPPT",time:"2023-11-23 18:03",reply:"",comment:`<p>草 这下真新概念补番了</p>
    <p>怎么直播楼里自己就长了个11集出来</p>`},{floor:"2159",username:"kngchau",time:"2023-11-23 18:05",reply:"",comment:`<p><img src="/image/2159.jpg" style="zoom:33%;" /> </p>
    <p>你们总算还有人记得谢幕……</p>`},{floor:"2163",username:"kngchau",time:"2023-11-23 18:09",reply:"",comment:`<p><img src="/image/2163.jpg" style="zoom:33%;" /> </p>
    <p>唉……</p>
    <p>soyo还是温柔的呀，还在放写不硬不软的狠话</p>
    <p>要是当年的我，恐怕演出结束也不会愿意跟队友好好说话的，估计还得让人来哄我才愿意开口说话</p>
    <p>现在看我好麻烦啊！！</p>
    <p>另外，</p>
    <p>所以我说了我跟soyo不一样的呀你们不要瞎代入……</p>`},{floor:"2168",username:"一虫破万法",time:"2023-11-23 18:10",reply:"2163",comment:`<p>这里感谢还在嘴硬上的飞机</p>
    <p><del>我说soyo</del></p>`},{floor:"2171",username:"Fallenleaf_落叶",time:"2023-11-23 18:11",reply:"2163",comment:"<p>长崎素世在模仿丰川祥子大赛中荣获倒数第一</p>"},{floor:"2174",username:"丹阳YukiKaze",time:"2023-11-23 18:11",reply:"2163",comment:`<p>“要是当年的我”</p>
    <p>“你们不要代入”</p>`},{floor:"2177",username:"kngchau",time:"2023-11-23 18:14",reply:"",comment:`<p><img src="/image/2177.jpg" style="zoom:33%;" /> </p>
    <p>如果这个画面一转回到第一话，一切都是灯做的梦的话就神作了</p>`},{floor:"2182",username:"kngchau",time:"2023-11-23 18:16",reply:"",comment:`<p><img src="/image/2182.jpg" style="zoom:33%;" /> </p>
    <p>咦？这是ave mujica的伏笔么？她俩现在已经是队友了？</p>`},{floor:"2189",username:"kngchau",time:"2023-11-23 18:20",reply:"",comment:`<p><img src="/image/2189.jpg" style="zoom:33%;" /> </p>
    <p>立希，你最好的朋友(之一？)马上要去跟别的女人组乐队了呀！！！</p>
    <p>等下，如果灯跟初华有点什么姐妹关系或者小时候认识，然后海玲又去跟初华组了乐队，很难想象立希会怎么看初华</p>
    <p>有被这假药笑到</p>`},{floor:"2192",username:"kngchau",time:"2023-11-23 18:21",reply:"",comment:`<p><img src="/image/2192.jpg" style="zoom:33%;" /> </p>
    <p>爱音怎么一副跟soyo不熟的样子</p>
    <p>她到现在还觉得soyo是她学姐么</p>
    <p>怎么还叫soyo桑，都是妹子，班里普通同学才叫soyo桑吧，她们的关系已经可以soyo酱了吧</p>`},{floor:"2194",username:"又冷又饿又失智",time:"2023-11-23 18:22",reply:"",comment:`<p>来人，上逐帧假药</p>
    <p><img src="/image/2194-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2194-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2194-3.jpg" style="zoom:33%;" /> </p>`},{floor:"2202",username:"風見越",time:"2023-11-23 18:25",reply:"2192",comment:"<p>唉，看得出来这时候素世女士挺急的</p>"},{floor:"2203",username:"kngchau",time:"2023-11-23 18:25",reply:"",comment:`<p><img src="/image/2203.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈立希这反应也太可爱了</p>`},{floor:"2204",username:"枞枞那年",time:"2023-11-23 18:26",reply:"2192",comment:"<p>原来soyo这里是这么想的吗，果然常看常新呢</p>"},{floor:"2205",username:"索德-莱特",time:"2023-11-23 18:26",reply:"2202",comment:"<p>soyo视角全补上了是吧</p>"},{floor:"2208",username:"kngchau",time:"2023-11-23 18:27",reply:"",comment:`<p><img src="/image/2208.jpg" style="zoom:33%;" /> </p>
    <p>感觉是时候也去恢复一下跟睦的关系了吧？</p>
    <p>唉，不过还得看祥子线什么时候解决一下，这应该是mygo最后一个问题了。估计这两话处理这个问题了。</p>`},{floor:"2210",username:"嘉平廿五",time:"2023-11-23 18:28",reply:"2208",comment:"<p>后面她俩有一段交心，虽然比较短</p>"},{floor:"2216",username:"kngchau",time:"2023-11-23 18:28",reply:"",comment:`<p><img src="/image/2216.jpg" style="zoom:33%;" /> </p>
    <p>“我们几个真厉害”</p>
    <p>不过有一说一，爱音虽然技术菜了点，的确像你们说的，为乐队付出了很多。不嘲笑她了。</p>`},{floor:"2221",username:"kngchau",time:"2023-11-23 18:30",reply:"",comment:`<p><img src="/image/2221.jpg" style="zoom:33%;" /> </p>
    <p>所以乐奈的设定真就是猫猫么，喂个猫条随时随地就能变乖的那种……</p>
    <p>我也想养一只……</p>`},{floor:"2223",username:"UID6092423",time:"2023-11-23 18:31",reply:"",comment:"<p>乐奈的设定在手游里更猫</p>"},{floor:"2227",username:"kngchau",time:"2023-11-23 18:32",reply:"",comment:`<p><img src="/image/2227.jpg" style="zoom:33%;" /> </p>
    <p>哇，乐奈不会情商超高的那种吧……</p>
    <p>这里不会是大家在互相打配合给soyo和灯制造独处空间吧……</p>
    <p>重女们情商果然就是高呀！</p>`},{floor:"2228",username:"嘉平廿五",time:"2023-11-23 18:33",reply:"2221",comment:`<p>手游里ano说猫是野生动物，被rikki强调了是人</p>
    <p>但rikki刚挂掉电话就自言自语说给猫栓个铃铛</p>`},{floor:"2232",username:"kngchau",time:"2023-11-23 18:35",reply:"",comment:`<p><img src="/image/2232.jpg" style="zoom:33%;" /> </p>
    <p>唉，soyo终于忏悔一下过去的自己了吧</p>
    <p>感觉她一直在压迫睦，是在怪睦说那句没开心过，在跟祥子那时候又沉默了吗</p>
    <p>这也不能完全怪睦啊……一来人家就是不喜欢，二来主责还是在祥子那儿啊！</p>
    <p>感觉就是像是那种老公出轨朝着小三撒气一样，不应该你老公主责么？！(什么恶俗比喻</p>
    <p>快去跟睦服个软和好吧！</p>`},{floor:"2237",username:"kngchau",time:"2023-11-23 18:36",reply:"",comment:`<p><img src="/image/2237.jpg" style="zoom:33%;" /> </p>
    <p>爱音真是小女生性子啊</p>
    <p>跟灯和好了又用回人家的创可贴了</p>`},{floor:"2239",username:"kngchau",time:"2023-11-23 18:38",reply:"",comment:`<p><img src="/image/2239.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈果然跟立希和好就是这样的场面啊</p>
    <p>立希爱音也挺好磕的呀！</p>`},{floor:"2240",username:"弦歌不语",time:"2023-11-23 18:38",reply:"",comment:"<p>看出来了，soyorin已经爱堕了，甜甜甜</p>"},{floor:"2243",username:"kngchau",time:"2023-11-23 18:40",reply:"",comment:`<p><img src="/image/2243.jpg" style="zoom:33%;" /> </p>
    <p>有一个贝斯笑话</p>
    <p>算了你们都知道我要说什么</p>
    <p>soyo果然还是没有跟她们好好说话啊，唉，不知道怎么评价</p>`},{floor:"2247",username:"嘉平廿五",time:"2023-11-23 18:41",reply:"2243",comment:`<p>soyo就是最太硬，明明知道自己错了但是拉不下脸还在盐爱音</p>
    <p>不过这别扭的性格也成了诸多二创作者最爱的点</p>`},{floor:"2248",username:"kngchau",time:"2023-11-23 18:41",reply:"",comment:`<p><img src="/image/2248.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈像极了吵架的时候翻旧账的我</p>
    <p>不过演奏春日影就是她们的锅啊！！</p>`},{floor:"2251",username:"燚龘先生",time:"2023-11-23 18:42",reply:"",comment:"<p>有种楼主她朋友拉她看mygo是蓄谋已久的既视感</p>"},{floor:"2256",username:"见机知命",time:"2023-11-23 18:43",reply:"",comment:"<p>感觉楼主的语气越来越像soyo了，应该不是我的错觉</p>"},{floor:"2258",username:"kngchau",time:"2023-11-23 18:44",reply:"",comment:`<p><img src="/image/2258.jpg" style="zoom:33%;" /> </p>
    <p>虽然很想吐槽爱音火烧眉毛了还在想这事</p>
    <p>但是我突然反应过来，她们还没有队名？</p>
    <p>以及，队服不会就是OP那个吧，她们之前一直穿制服live来着？</p>
    <p>好好好，搞快点，OP那套衣服真的好好看</p>`},{floor:"2263",username:"kngchau",time:"2023-11-23 18:47",reply:"",comment:`<p><img src="/image/2263.jpg" style="zoom:33%;" /> </p>
    <p>她们就是吃定你了哭笑</p>
    <p>看soyo发言真的又好气又好笑……</p>`},{floor:"2267",username:"takilovee",time:"2023-11-23 18:48",reply:"2251",comment:`<p>此时楼主朋友的表情</p>
    <p><img src="/image/2267.jpg" style="zoom: 33%;" /> </p>`},{floor:"2273",username:"typeomicron",time:"2023-11-23 18:49",reply:"",comment:`<p>我现在正打算写一个对“直播mygo”这一现象的个人解析帖子</p>
    <p>希望不要赶不上lz完结，求求你更慢一点</p>`},{floor:"2278",username:"明日下山",time:"2023-11-23 18:50",reply:"",comment:`<p>感觉看到动画的某些剧情节点后</p>
    <p>楼主的脸可能会“噌”的一下烧起来</p>`},{floor:"2282",username:"ZweiZala",time:"2023-11-23 18:51",reply:"",comment:"<p>kngchaurin去哪了</p>"},{floor:"2284",username:"kngchau",time:"2023-11-23 18:51",reply:"",comment:`<p><img src="/image/2284.jpg" style="zoom:33%;" /> </p>
    <p>额，本来情绪都到这儿了，我旁边这位还以为我会感动</p>
    <p>虽然也很感动吧……</p>
    <p>但是这昵称真的好腻味</p>
    <p>好破坏情绪啊</p>
    <p>有人给我起这种昵称我会打死她的</p>`},{floor:"2286",username:"eMiRiCo",time:"2023-11-23 18:52",reply:"",comment:"<p>成啦 兄弟</p>"},{floor:"2287",username:"71和EU",time:"2023-11-23 18:52",reply:"2284",comment:"<p>我爱的品味土的可怕</p>"},{floor:"2288",username:"Winter丶act",time:"2023-11-23 18:52",reply:"",comment:"<p>soyorin也是这么想的</p>"},{floor:"2291",username:"風見越",time:"2023-11-23 18:52",reply:"",comment:"<p>唉，爽姐本人</p>"},{floor:"2294",username:"kngchau",time:"2023-11-23 18:53",reply:"",comment:"<p>另外，我发现我好像挨了几个回旋镖</p>"},{floor:"2300",username:"萧萧笙歌纷飞雨",time:"2023-11-23 18:53",reply:"2284",comment:"<p>果然，对土味粉毛拙劣的取名品味的厌恶之情还是站了上风</p>"},{floor:"2308",username:"ZweiZala",time:"2023-11-23 18:56",reply:"",comment:`<p>我得了想起kngchaurin就想笑的病</p>
    <p><del>卧推笑了下差点被压扁了</del></p>`},{floor:"2309",username:"kngchau",time:"2023-11-23 18:56",reply:"",comment:`<p><img src="/image/2309.jpg" style="zoom:33%;" /> </p>
    <p>品味差的人是你吧喂！</p>
    <p>话说一定要用你的名字，我觉得Unknown这个名字还不错啊，我刚看开头的时候就觉得挺妙的，Anon Tokyo是真的好奇怪</p>`},{floor:"2316",username:"枞枞那年",time:"2023-11-23 18:58",reply:"2309",comment:"<p>soyo很喜欢unknown吗</p>"},{floor:"2317",username:"几只鱼",time:"2023-11-23 18:58",reply:"",comment:"<p>坏了，爬楼脑子里一直有个soyorin在说话，楼主你有什么头猪吗</p>"},{floor:"2318",username:"燚龘先生",time:"2023-11-23 18:58",reply:"",comment:"<p>简直是soyo本人上号锐评，笑死我了</p>"},{floor:"2320",username:"顾秋声",time:"2023-11-23 18:59",reply:"2309",comment:`<p>ranA
      aNON
      TOmori
      riKki
      soYO
      这么拼出来的ANON TOKYO</p>`},{floor:"2323",username:"Ryodaze",time:"2023-11-23 19:00",reply:"2316",comment:"<p>soyo的性情总是喜欢调和、折中的，譬如anon说，我们的乐队就叫unknown，soyo一定是不允许的，但anon主张要叫AnonTokyo，soyo就会来调和，愿意叫unknown了</p>"},{floor:"2328",username:"kngchau",time:"2023-11-23 19:02",reply:"",comment:`<p><img src="/image/2328.jpg" style="zoom:33%;" /> </p>
    <p>忍不住了造个假药</p>
    <p>她越说是事发突然，我越觉得像是在掩饰什么</p>
    <p>不会是想用美妆视频把自己的账号带火了，其实想做个音乐UP吧，之后被祥子发掘拉进了ave mujica</p>
    <p>或者那种励志UP主，签约大公司，被迫从事自己不喜欢的美妆博主行业，现在做大了有些话语权了，终于能做点自己喜欢的事情或者夹带点音乐私货了</p>`},{floor:"2331",username:"时咕咕",time:"2023-11-23 19:03",reply:"2328",comment:"<p><del>按照时间线应该是已经进了以后才有这个视频。</del> 假药入脑</p>"},{floor:"2332",username:"kngchau",time:"2023-11-23 19:04",reply:"2331",comment:`<p>哦哦是这样，那就是我瞎说的</p>
    <p>假药嘛，大家看着图一乐就行了</p>`},{floor:"2333",username:"哘雅乐乃",time:"2023-11-23 19:04",reply:"2331",comment:"<p>那没有，祥子明说了就是看到她打鼓的视频才去拉她的</p>"},{floor:"2339",username:"kngchau",time:"2023-11-23 19:07",reply:"",comment:`<p><img src="/image/2339.jpg" style="zoom:33%;" /> </p>
    <p>爱音家原来这么有钱么，全套效果器天啊</p>
    <p>也是，能出国留学的应该经济条件不会太差</p>`},{floor:"2341",username:"kngchau",time:"2023-11-23 19:10",reply:"",comment:`<p><img src="/image/2341.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈哈哈哈哈我笑的好大声！</p>
    <p>soyo憋这句话不知道憋了多久了</p>
    <p>是不是C团时代就憋着这句话了</p>
    <p>就想找机会带着自己喜欢的朋友来自己家玩，让自己冷清的家里热闹热闹</p>
    <p>结果没办法装作温柔地说：“既然立希家不方便，不如来我家吧”</p>
    <p>只能冷着脸，冷着脸天人交战一番，还要说这话</p>
    <p>我笑死</p>`},{floor:"2344",username:"fluoria",time:"2023-11-23 19:10",reply:"",comment:"<p>我看着这个帖子在公共场所露出了爱音做bangdream一样的表情，大家有什么头绪吗(x</p>"},{floor:"2346",username:"瞑り",time:"2023-11-23 19:12",reply:"2341",comment:"<p>原来soyo是这个想法</p>"},{floor:"2347",username:"takilovee",time:"2023-11-23 19:12",reply:"2341",comment:"<p>原来如此，还有憋了半天这一层，真是常看常新</p>"},{floor:"2348",username:"kngchau",time:"2023-11-23 19:12",reply:"",comment:`<p><img src="/image/2348.jpg" style="zoom:33%;" /> </p>
    <p>喂喂喂，你怎么一副女主人姿态啊</p>
    <p>怎么来过一次就不把自己当客人了呢</p>`},{floor:"2351",username:"黑堂隐月",time:"2023-11-23 19:13",reply:"2341",comment:`<p>谢谢楼主，我没想到</p>
    <p>“从以前就很想邀请朋友来家里玩了”</p>
    <p>谢谢你，soyorin</p>
    <p>时至今日还能常看常新</p>`},{floor:"2352",username:"西园寺凹凹子",time:"2023-11-23 19:13",reply:"",comment:`<p>原来是这么想的</p>
    <p>难怪矛盾最深的时候也直接让人跟进家了</p>
    <p>理解理解</p>`},{floor:"2355",username:"谷不勤",time:"2023-11-23 19:14",reply:"",comment:`<p>还有这种理解？</p>
    <p>败了，完全败了，整个nga，什么萌战吧s1b站，都败在长崎素世本人的手下。</p>
    <p>我们便绝无可能，胜过这前无古人的一百万匹素食能量。</p>`},{floor:"2360",username:"索德-莱特",time:"2023-11-23 19:16",reply:"2355",comment:"<p>她对素世的理解更是把大地上的人远远的超越</p>"},{floor:"2362",username:"kngchau",time:"2023-11-23 19:17",reply:"",comment:`<p><img src="/image/2362.jpg" style="zoom:33%;" /> </p>
    <p>交换应援色？</p>`},{floor:"2363",username:"几只鱼",time:"2023-11-23 19:17",reply:"",comment:"<p>此时此刻，我对soyorin的喜爱度前所未有的高</p>"},{floor:"2367",username:"kngchau",time:"2023-11-23 19:19",reply:"",comment:`<p><img src="/image/2367.jpg" style="zoom:33%;" /> </p>
    <p>所以乐奈外婆是前作角色？前作角色跟这里隔了整整两代人？不会吧……那还怎么搞联动啊</p>`},{floor:"2370",username:"明日下山",time:"2023-11-23 19:20",reply:"2352",comment:`<p>照这个理解再深入下去的话，
      爱音暗示既往不咎以后内心恐怕还有些窃喜
      她做出“我来结束它”这种发言以后，恐怕还会背地懊恼自己嘴硬。</p>
    <p>尤其是爱音回家后说不定会突然感到更加空虚寂寞，
      然后回想自己嘴硬下不来台的发言掉小珍珠。</p>
    <p>好美味啊，太美味了这个</p>`},{floor:"2371",username:"几只鱼",time:"2023-11-23 19:20",reply:"2367",comment:"<p>没事，只是DLC，猫猫奶奶是最早的live house老板娘，不是乐队成员</p>"},{floor:"2379",username:"kngchau",time:"2023-11-23 19:21",reply:"",comment:`<p><img src="/image/2379.jpg" style="zoom:33%;" /> </p>
    <p>这种衣服soyo穿只能上乳贴和低腰内裤了，恐怕的确很难接受</p>
    <p>不过有一说一啊，这衣服你爱音穿能好到哪里去，这得有胸有腰有屁股，还得个子高皮肤好加上高跟鞋才能好看的啊</p>
    <p>真是没点b数啊</p>`},{floor:"2381",username:"ZweiZala",time:"2023-11-23 19:23",reply:"2379",comment:"<p>原来是这样想的吗，好…好强的攻击性</p>"},{floor:"2382",username:"明日下山",time:"2023-11-23 19:23",reply:"2379",comment:"<p>在奇怪的地方展露了攻击性，总感觉带着一些私人恩怨</p>"},{floor:"2386",username:"T-N-L",time:"2023-11-23 19:24",reply:"2379",comment:`<p>理解了，原来soyo反对ano酱提出的这种设计表面上是讨厌ano的审美觉得风格不合适，暗地里还是为了不让ano酱自取其辱，磕到ansy了</p>
    <p>常看常新，谢谢lz</p>`},{floor:"2391",username:"kngchau",time:"2023-11-23 19:27",reply:"",comment:`<p><img src="/image/2391-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2391-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2391-3.jpg" style="zoom:33%;" /> </p>
    <p>额……虽然带着三次元眼光评价二次元很有问题</p>
    <p>但是这几套真的好土</p>
    <p>黑色那套，我知道是想把应援色用上，可是尤其是爱音那粉色纱，还有soyo这橘色的蕾丝边，这是什么上个世纪的服装装饰啊！</p>
    <p>下面那套好一些了，可这不就是伴娘装么，哪里适合乐队穿了</p>
    <p>最后爱音自己这个，我只能说专业模特走台穿可能行，乐队妆造……那还是叉出去吧</p>`},{floor:"2393",username:"71和EU",time:"2023-11-23 19:28",reply:"2391",comment:"<p>soyorin:这女人终于疯了.JPG</p>"},{floor:"2396",username:"燚龘先生",time:"2023-11-23 19:30",reply:"",comment:"<p>可能有点冒昧……但能询问一下楼主，你朋友衣服品味怎么样吗？</p>"},{floor:"2398",username:"takilovee",time:"2023-11-23 19:30",reply:"",comment:`<p>第十一集磕疯了</p>
    <p>疯 狂 星 期 四</p>`},{floor:"2399",username:"RereiN",time:"2023-11-23 19:30",reply:"",comment:`<p>第九集第十集还在心疼ano酱的楼主，怎么十一集攻击性这么强呢？</p>
    <p><del>多少有点和动画内同调了，一定是坛友和朋友桑害的</del></p>`},{floor:"2400",username:"kngchau",time:"2023-11-23 19:31",reply:"",comment:`<p><img src="/image/2400-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2400-2.jpg" style="zoom:33%;" /> </p>
    <p>soyo真是对爱音好温柔啊</p>
    <p>第一次我好声好气跟你说我觉得不太好吧，就是在拒绝了</p>
    <p>还说！</p>
    <p>换我我怎么也要吵一架了……</p>
    <p>算了，向soyo学习</p>`},{floor:"2407",username:"一虫破万法",time:"2023-11-23 19:32",reply:"",comment:"<p>已经不装了，开始直球第一人称锐评了</p>"},{floor:"2410",username:"宵暗花火496",time:"2023-11-23 19:32",reply:"",comment:`<p>今天居然是周四！</p>
    <p>mygo第14集更新了</p>
    <p>就是现在，就在此处啊</p>`},{floor:"2422",username:"kngchau",time:"2023-11-23 19:37",reply:"",comment:`<p>啊怎么给图片排序啊……</p>
    <p>算了不重要，这似乎是你们刻在DNA里的句子了，你们还玩过接龙来着是吧</p>
    <p>你们确定今年挺王是soyo么，有这个场面立希不应该完胜soyo么</p>`},{floor:"2423",username:"宵暗花火496",time:"2023-11-23 19:37",reply:"",comment:`<p>我以前看到过一个理论，说是好的作品会在某种程度上深刻影响一个人</p>
    <p>但是十分依赖巧合，就算是托翁这种大师的作品也不一定能精准地命中一个人的心灵</p>
    <p>现在我的眼前是超越了这个理论的现象</p>
    <p>简直就如奇迹一般</p>`},{floor:"2424",username:"celestX",time:"2023-11-23 19:38",reply:"2422",comment:"<p>这个播出的时候挺好萌已经结束力</p>"},{floor:"2430",username:"松鼠之梦",time:"2023-11-23 19:39",reply:"2422",comment:"<p>你好，本届挺好萌在mygo放送期间完结，11话播放后挺好萌特增立希规则</p>"},{floor:"2436",username:"kngchau",time:"2023-11-23 19:39",reply:"",comment:`<p><img src="/image/2436.jpg" style="zoom:33%;" /> </p>
    <p>大家情商都好高啊</p>
    <p>除了立希</p>
    <p>主要是那个“那我呢”问得灯很下不来台啊，灯总不能给你现想一个昵称吧……</p>
    <p>完全可以回头私下里跟灯说，你叫爱音ano酱了呀……然后灯肯定懂得啦，或许就会给你起一个，或许也叫你rikki啦</p>
    <p>爱音看场面这么尴尬马上转移话题了</p>`},{floor:"2441",username:"破虫、",time:"2023-11-23 19:41",reply:"",comment:`<p>在传统挺好败犬的评价框架下立希是硬实力亚军，但是 <del>因为11集播出时候立希早就被第八集soyo淘汰了</del>
      观众对挺王的审美会变的，soyo的出现就如同重新定义了新时代挺王一样，集重力挺好心机败犬于一身，前无古人呀</p>
    <p>(挺王表演赛上和挺武帝步女士打了64开)</p>`},{floor:"2443",username:"谷不勤",time:"2023-11-23 19:41",reply:"",comment:`<p>第四集命爱音为挺</p>
    <p>第十一集命立希为挺</p>
    <p>我明白了，还差一次，这是素世陛下对她一路上对手的三辞三让</p>`},{floor:"2456",username:"kngchau",time:"2023-11-23 19:45",reply:"",comment:`<p><img src="/image/2456.jpg" style="zoom:33%;" /> </p>
    <p>别吧……要不等祥子问题解决了再说呢？</p>
    <p>现在发SNS，不相当于又唱了一遍春日影嘛……</p>
    <p>祥子肯定刷得到吧，如果是有推送机制的那种……</p>
    <p>虽然我觉得早晚得让祥子知道，soyo也不可能再执着于C团了，可是这才几天啊</p>
    <p>总不能让祥子看着前两天刚跪在地上求自己的soyo，转眼又跟新团happy去了吧</p>
    <p>我收回爱音情商高那句话……</p>`},{floor:"2458",username:"kngchau",time:"2023-11-23 19:47",reply:"",comment:"<p>哦，突然想到，爱音应该不知道soyo去求过祥子了，那对不起</p>"},{floor:"2464",username:"燚龘先生",time:"2023-11-23 19:47",reply:"2456",comment:"<p>什么soyo视角的要求</p>"},{floor:"2467",username:"kngchau",time:"2023-11-23 19:48",reply:"",comment:`<p><img src="/image/2467.jpg" style="zoom:33%;" /> </p>
    <p>啊天呐……刚发完上面那句，看见下面这句</p>
    <p>开始心疼soyo了</p>
    <p>肯定想到当年擅自注册C团账号并且一起拍照的人是自己了吧</p>`},{floor:"2468",username:"『VRT』",time:"2023-11-23 19:48",reply:"2456",comment:"<p>祥子可能没太多时间刷推(</p>"},{floor:"2473",username:"意sama",time:"2023-11-23 19:50",reply:"2456",comment:`<p>
      本来祥子对他们组新乐队就不反对，你可以仔细再看看第七集，前面灯唱出来的时候，祥子还是一脸欣慰的表情，而且还在鼓掌，所以她并不是不希望灯soyo她们组新乐队，反而她是希望灯早点走出c团的。但是后面确实被春日影触景生情了，至于为什么触景生情，你先自己看吧
    </p>`},{floor:"2481",username:"ch19930611",time:"2023-11-23 19:51",reply:"",comment:"<p>如果现在乐队的人知道了惊世一跪会怎样</p>"},{floor:"2484",username:"xxx19199509",time:"2023-11-23 19:53",reply:"2481",comment:"<p>别的不清楚，Rikki肯定会狠狠的嘲笑soyo，然后发现大家表情都不对</p>"},{floor:"2486",username:"kngchau",time:"2023-11-23 19:53",reply:"",comment:`<p><img src="/image/2486.jpg" style="zoom:33%;" /> </p>
    <p>你们真是一个会拍照的人都没有</p>
    <p>听到急促的滴滴声赶紧看镜头啊！！</p>
    <p>已经在高血压了</p>
    <p>另外爱音这剪刀手是什么年代的拍照pos了呀</p>`},{floor:"2491",username:"－诸葛南北－",time:"2023-11-23 19:54",reply:"2486",comment:`<p>最正确的五个人！</p>
    <p>其实这里可以看出一些对比，c团的合照很完美最后却支离破碎，这张照片没一个看镜头的，却约好了一辈子迷路。</p>`},{floor:"2497",username:"几只鱼",time:"2023-11-23 19:55",reply:"2486",comment:"<p>最好笑的是，这张照片没删，放到乐队官网上去了</p>"},{floor:"2502",username:"Arthurrrrrrrrr",time:"2023-11-23 19:57",reply:"",comment:"<p>哭笑从来没有想到重新看一遍11集能有这么多新理解 我折服了</p>"},{floor:"2504",username:"秘封海",time:"2023-11-23 19:57",reply:"2486",comment:"<p>这里五个人的表情和动作非常有意思，乐奈神游天外，灯紧张得闭着眼，立希看着灯，爱音想出风头到发光，素世一脸不情愿，可以说是完美表现角色性格了</p>"},{floor:"2510",username:"kngchau",time:"2023-11-23 20:00",reply:"",comment:`<p><img src="/image/2510.jpg" style="zoom:33%;" /> </p>
    <p>女孩子请假的确方便哈</p>`},{floor:"2513",username:"kngchau",time:"2023-11-23 20:01",reply:"",comment:`<p><img src="/image/2513.jpg" style="zoom:33%;" /> </p>
    <p>海玲真的，她什么都懂！</p>
    <p>她好戳我</p>`},{floor:"2518",username:"kngchau",time:"2023-11-23 20:03",reply:"",comment:`<p><img src="/image/2518.jpg" style="zoom:33%;" /> </p>
    <p>不是，你们日本女孩子是个个都会做衣服么？！</p>
    <p>流下了不学无术的泪水.jpg</p>`},{floor:"2520",username:"谷不勤",time:"2023-11-23 20:03",reply:"",comment:"<p>连猫猫都是手工部的镇宅狮子</p>"},{floor:"2521",username:"typeomicron",time:"2023-11-23 20:04",reply:"2510",comment:`<p>我觉得最离谱的地方还是，rikki这哪像不舒服，简直就是赶集</p>
    <p>只能说校风自由了(以及rikki平时真的挺好学生的)</p>`},{floor:"2528",username:"xxx19199509",time:"2023-11-23 20:05",reply:"2521",comment:"<p>花女确实是个校风自由的学校，毕竟还有从三楼窗户直接跳下来都没有任何事情的人在(前作角色，楼主不用在意)</p>"},{floor:"2532",username:"kngchau",time:"2023-11-23 20:08",reply:"",comment:`<p><img src="/image/2532-1.jpg" style="zoom:33%;" /> </p>
    <p>看到这里我倒回去看了一眼OP</p>
    <p>好害怕爱音的审美……很糟糕的话真不如就这么穿</p>
    <p>不过还好还好，做出来真的很好看</p>
    <p>但是……</p>
    <p><img src="/image/2532-2.jpg" style="zoom:33%;" /> </p>
    <p>你们不会裁了一条牛仔裙给两个人穿吧！？</p>
    <p>好看是好看这成本也太大了</p>
    <p>我还以为是画好图纸厂家订做</p>`},{floor:"2539",username:"－诸葛南北－",time:"2023-11-23 20:09",reply:"2532",comment:"<p>啊哈哈，为什么会变成半件呢。。。</p>"},{floor:"2546",username:"kngchau",time:"2023-11-23 20:11",reply:"",comment:`<p><img src="/image/2546.jpg" style="zoom:33%;" /> </p>
    <p>本来想吐槽爱音</p>
    <p>想了想，反正是穿在里面的，没给标在外面有进步了</p>
    <p>算了，她高兴就让她玩吧</p>`},{floor:"2548",username:"ZweiZala",time:"2023-11-23 20:12",reply:"2546",comment:"<p>kngchaurin妈妈好温柔</p>"},{floor:"2549",username:"弦歌不语",time:"2023-11-23 20:12",reply:"2546",comment:"<p>soyorin，别太爱</p>"},{floor:"2554",username:"kngchau",time:"2023-11-23 20:13",reply:"",comment:`<p><img src="/image/2554.jpg" style="zoom:33%;" /> </p>
    <p>不是，真就直接这么裁？不用个尺子什么的？</p>
    <p>乐奈好手艺啊，手剪还能剪的这么笔直？？</p>
    <p>前作乐奈外婆有没有很会做衣服的设定啊？</p>`},{floor:"2561",username:"几只鱼",time:"2023-11-23 20:14",reply:"2554",comment:"<p>soyorin，你有没有意识到这是谁的衣服</p>"},{floor:"2568",username:"kngchau",time:"2023-11-23 20:16",reply:"",comment:`<p><img src="/image/2568.jpg" style="zoom:33%;" /> </p>
    <p>唉，真的鼻子有点酸</p>
    <p>有点想哭了</p>
    <p>soyo应该第一次在这么多人陪伴下入睡吧</p>
    <p>之前每天每天，都是偌大的房间自己一个人孤独地睡</p>
    <p>今天不光有同伴，还不止一个，在周围吵吵闹闹真的很让人安心啊</p>
    <p>睡个好觉吧~晚安soyo</p>`},{floor:"2575",username:"kngchau",time:"2023-11-23 20:18",reply:"",comment:`<p><img src="/image/2575.jpg" style="zoom:33%;" /> </p>
    <p>哦哦哦我反应过来了，乐奈外婆前作是NPC是吧</p>`},{floor:"2577",username:"kngchau",time:"2023-11-23 20:21",reply:"",comment:`<p><img src="/image/2577.jpg" style="zoom:33%;" /> </p>
    <p>我靠这给我说哭了</p>
    <p>妈的我是不是你们看mygo人里泪点最低的了</p>`},{floor:"2580",username:"索德-莱特",time:"2023-11-23 20:22",reply:"2577",comment:"<p>真挚而充沛的情感，谁都会感动。</p>"},{floor:"2582",username:"Seeeven33",time:"2023-11-23 20:23",reply:"",comment:`<p>看心思细腻的人直播真好啊</p>
    <p>不玩梗地说确实好几处都是楼主说了我才会从soyo角度去</p>`},{floor:"2590",username:"typeomicron",time:"2023-11-23 20:26",reply:"2577",comment:`<p>相信我，不是的</p>
    <p>我也控制不住泪腺</p>
    <p>但是我相信楼主在完结之后去别的直播楼里的时候，控制不住的就是你的笑容了，就像现在的我一样</p>`},{floor:"2593",username:"kngchau",time:"2023-11-23 20:29",reply:"",comment:`<p><img src="/image/2593-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2593-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2593-3.jpg" style="zoom:33%;" /> </p>
    <p>想到了一首诗，顾城的《避免》</p>
    <p>你不愿意种花/你说/我不愿看见它/一点点凋落</p>
    <p>是的/为了避免结束/你避免了一切开始</p>
    <p>大家都是这样啊，从灯到soyo，从剧里到剧外，从友情到爱情。每个人都害怕受伤，受伤之后就害怕再次开始，开始之后因为害怕再次受伤就又变得畏首畏尾或者无比沉重。</p>
    <p>所以比起灯，其实soyo更加不堪，她不光不敢开始新的，甚至不愿意结束旧的，哪怕旧的早就已经死了。</p>`},{floor:"2600",username:"燚龘先生",time:"2023-11-23 20:32",reply:"2593",comment:`<p>是不是该上爱音那张图了，就最开始的那个
      “失败过就不敢重新开始的话，人生那么长是会撑不下去的”</p>`},{floor:"2602",username:"kngchau",time:"2023-11-23 20:33",reply:"",comment:`<p><img src="/image/2602.jpg" style="zoom:33%;" /> </p>
    <p>第11话了，你们可算是把乐队名给起出来了，真感人</p>`},{floor:"2604",username:"kngchau",time:"2023-11-23 20:34",reply:"",comment:`<p><img src="/image/2604.jpg" style="zoom:33%;" /> </p>
    <p>从入睡到醒来，都有一群好友陪着，这感觉真的好棒啊</p>
    <p>有点羡慕soyo了</p>`},{floor:"2607",username:"燚龘先生",time:"2023-11-23 20:35",reply:"2604",comment:"<p>你可以和你朋友一起睡(唐突)</p>"},{floor:"2614",username:"kngchau",time:"2023-11-23 20:37",reply:"",comment:`<p><img src="/image/2614.jpg" style="zoom:33%;" /> </p>
    <p>噗哈哈哈哈哈，谢谢你，破涕为笑了</p>
    <p>编剧节奏把控真强，想让人哭就让人哭，想让人笑就让人笑</p>
    <p>所以乐奈剪的这衣服根本不是故意剪的是吧</p>
    <p>哈哈哈哈哈哈哈哈哈哈哈哈无情嘲笑</p>
    <p>不过也还好啦，最终效果很棒哦</p>
    <p>(乐奈手好稳啊，再感叹一次，笔直一条线</p>
    <p>等等，所以</p>
    <p>剪切线是吧</p>
    <p>你们可真行</p>`},{floor:"2616",username:"几只鱼",time:"2023-11-23 20:38",reply:"",comment:`<p>我，堂堂点歌！！！！！[[歌ってみた]キリトリセン(剪切线) covered by そよ-哔哩哔哩] <a href='https://b23.tv/hxJSTul' target='_blank'
        class='url'>https://b23.tv/hxJSTul</a></p>`},{floor:"2617",username:"ZweiZala",time:"2023-11-23 20:38",reply:"2614",comment:`<p>chaurin麻麻真的好温柔</p>
    <p>这样都不生气</p>`},{floor:"2620",username:"kngchau",time:"2023-11-23 20:38",reply:"",comment:`<p>哇这集真是看了好久</p>
    <p>我去整理整理情绪</p>
    <p>今天就一话了哈</p>
    <p>旁边这位看我打字打了俩小时了实在是有点对不起她</p>`},{floor:"2626",username:"风行旅者",time:"2023-11-23 20:39",reply:"2614",comment:`<p>这里我要强调一下，猫猫非常听话，前边ano让她不要剪纸板，剪布，她就把布剪了。
      再往前rikki让她MC后再弹吉他，她就弹了春日影。</p>
    <p>一切如你所愿，这就是猫猫</p>`},{floor:"2633",username:"brokenruler",time:"2023-11-23 20:43",reply:"",comment:`<p>放一个链接在这，不是给楼主的，是给各位长颈鹿用以温习的</p>
    <p>[[mygo填词/爱素对唱]有点坏] <a
        href='https://www.bilibili.com/video/BV1fk4y1w7ha/?share_source=copy_web&amp;vd_source=0a6a9aef7c778fbbdf4ec20456544cdb'
        target='_blank'
        class='url'>https://www.bilibili.com/video/BV1fk4y1w7ha/?share_source=copy_web&vd_source=0a6a9aef7c778fbbdf4ec20456544cdb</a>
    </p>`},{floor:"2634",username:"『VRT』",time:"2023-11-23 20:44",reply:"2620",comment:`<p>醉翁之意不在酒</p>
    <p>让朋友桑好好看着罢(</p>`},{floor:"2639",username:"RereiN",time:"2023-11-23 20:47",reply:"",comment:"<p>楼主，能让朋友桑发句消息吗，一句就行</p>"},{floor:"2641",username:"kngchau",time:"2023-11-23 20:50",reply:"2639",comment:`<p>她在让我好好读你们的回复啦……</p>
    <p>所以你们想问啥，我可以代为转述哦</p>`},{floor:"2642",username:"枞枞那年",time:"2023-11-23 20:52",reply:"",comment:`<p>两个小时怎么一瞬间就过去了</p>
    <p>普通和理所当然～</p>`},{floor:"2644",username:"xxx19199509",time:"2023-11-23 20:55",reply:"2641",comment:"<p>请了几顿饭带了这么多节目效果感觉值不值</p>"},{floor:"2645",username:"RereiN",time:"2023-11-23 20:55",reply:"2641",comment:"<p>问问她看到坛友们和你的反应是什么心情？让你看mygo是她早有预谋的吗？</p>"},{floor:"2648",username:"黑堂隐月",time:"2023-11-23 20:56",reply:"",comment:"<p>那我真的很想问，朋友桑潜伏在群里吗</p>"},{floor:"2649",username:"顾秋声",time:"2023-11-23 20:57",reply:"",comment:`<p>*提问：
      虽然大家擅自将楼主和朋友桑称作soyorin和ano酱，并且在可见的未来也不会改变。
      但是二位除此之外，各自更中意哪个角色呢？</p>`},{floor:"2650",username:"佚名76",time:"2023-11-23 20:57",reply:"",comment:"<p>问问她对一辈子啥看法</p>"},{floor:"2651",username:"kngchau",time:"2023-11-23 20:58",reply:"",comment:"<p>什么读评论环节呀笑死我了~</p>"},{floor:"2653",username:"typeomicron",time:"2023-11-23 20:58",reply:"2641",comment:"<p>想看以你们为捏他的爱素同人吗(唐突)</p>"},{floor:"2654",username:"kngchau",time:"2023-11-23 21:01",reply:"2644",comment:`<p>不值！</p>
    <p>昨天看她哭成那样我真的怕了，我都不打算让她播了，是她说想播完的。</p>
    <p>结果看11话又哭！</p>
    <p>我都把电脑抢走了，她非要看！</p>
    <p>还好今晚我还在，真是的！</p>`},{floor:"2655",username:"xxx19199509",time:"2023-11-23 21:02",reply:"",comment:"<p>亚撒西捏，朋友桑</p>"},{floor:"2658",username:"Xayah0818",time:"2023-11-23 21:02",reply:"2654",comment:"<p>哭包楼主，可爱捏</p>"},{floor:"2659",username:"kngchau",time:"2023-11-23 21:04",reply:"2645",comment:`<p>我之前就觉得她跟素世经历很相似，感觉应该能找到共鸣~</p>
    <p>不过看她能猜对那么剧情我真的有点傻眼</p>
    <p>到后面就有点怕了，还好第10话我过去了直接把人薅走了</p>
    <p>现在，现在我就是个无情的抽纸机……</p>`},{floor:"2661",username:"燚龘先生",time:"2023-11-23 21:05",reply:"",comment:"<p>有种“我可能确实在看爱音和soyo直播看mygo”的错觉</p>"},{floor:"2663",username:"kngchau",time:"2023-11-23 21:06",reply:"2648",comment:"<p>群？什么群？我不造呀~</p>"},{floor:"2665",username:"轻风cc",time:"2023-11-23 21:07",reply:"",comment:"<p>是情报爱音，我好了。</p>"},{floor:"2670",username:"kngchau",time:"2023-11-23 21:11",reply:"2649",comment:`<p>嘛~</p>
    <p>你们怎么称呼我们都没有异议啦~</p>
    <p>本来大家都是网友嘛，网友之间互相起个昵称还不是挺正常哒，我们也挺乐意看大家的互(fa)动(dian)的~</p>
    <p>我们喜欢哪个角色就不说了吧~</p>
    <p>大家看动画肯定都有对某个角色独属于自己的那份热爱呀~</p>`},{floor:"2673",username:"kngchau",time:"2023-11-23 21:15",reply:"2650",comment:"<p>我问了，她让我滚</p>"},{floor:"2674",username:"不存在的竹渊",time:"2023-11-23 21:15",reply:"2654",comment:`<p>啧啧啧，炫耀自家顽皮爱哭小女友是吧</p>
    <p>今晚还在，啊……</p>
    <p>噫！好！我中了！(发癫)</p>`},{floor:"2676",username:"『VRT』",time:"2023-11-23 21:16",reply:"",comment:"<p>楼主桑对拉自己入坑mygo的朋友桑有什么想说的嘛</p>"},{floor:"2679",username:"kngchau",time:"2023-11-23 21:17",reply:"2653",comment:`<p>虽然我们真的都很想说我们跟爱音和素世不一样啦，但是如果大家能看得开心玩得开心，我们不介意大家说什么写什么哒~</p>
    <p>大家来论坛就是为了快乐嘛，只要大家玩得开心就好~</p>`},{floor:"2681",username:"萧萧笙歌纷飞雨",time:"2023-11-23 21:18",reply:"",comment:"<p>从直播看mygo到soyo看mygo再一转迷子集会，下一步是不是直接开始组起乐队搞live了我真不好说</p>"},{floor:"2686",username:"kngchau",time:"2023-11-23 21:21",reply:"2676",comment:`<p>她说明天想吃肠粉~</p>
    <p>好滴~</p>`},{floor:"2689",username:"kngchau",time:"2023-11-23 21:22",reply:"",comment:`<p>好啦朋友们大家聊吧~</p>
    <p>我们先睡了哦~</p>
    <p>提前晚安~</p>`},{floor:"2691",username:"shenyumo",time:"2023-11-23 21:23",reply:"",comment:"<p>去干什么了不敢想</p>"},{floor:"2693",username:"水加热",time:"2023-11-23 21:23",reply:"",comment:"<p>好爽好爽，吃到了现实的爱素糖，纯天然的糖就是比工业糖精带劲啊</p>"},{floor:"2698",username:"枞枞那年",time:"2023-11-23 21:29",reply:"",comment:"<p>检测到早睡，输出：那就要注意身体健康了呢</p>"},{floor:"2716",username:"顾秋声",time:"2023-11-23 22:16",reply:"",comment:`<p>当时mygo云盘上，无畏于遗忘。
      后来mygo泛舟中，万类霜天，迷途竟余生。
      而今mygo新楼里，泪已潸潸也。
      诗绊平生总关情，一世爱恋，交织又天明。</p>`},{floor:"2720",username:"hejuujur",time:"2023-11-23 22:47",reply:"",comment:`<p>有一说一</p>
    <p>两位关系真挺好的</p>
    <p>能互相吃安利，还能互相 <del>吃干抹净</del></p>
    <p>而且听起来楼主朋友还挺知道楼主的经历的</p>
    <p>我靠不会是一路陪到大学的幼驯染吧</p>`},{floor:"2726",username:"roam-nc",time:"2023-11-23 23:05",reply:"",comment:"<p>多么完美的观剧反应与解读与…售后…我此生都不会忘记这个帖子了……</p>"},{floor:"2749",username:"htx18",time:"2023-11-24 01:16",reply:"",comment:"<p>情报爱音和健康素世，对上了</p>"},{floor:"2781",username:"typeomicron",time:"2023-11-24 10:52",reply:"",comment:`<p>拼命地写了我的一些感想。</p>
    <p><a href='https://bbs.nga.cn/read.php?tid=38489268' target='_blank'
        class='url'>https://bbs.nga.cn/read.php?tid=38489268</a></p>
    <p>虽然也可以当成是mygo解析的东西来看吧，没有剧透哦</p>
    <p>chaurin也能看哦</p>`},{floor:"2789",username:"而今听雨",time:"2023-11-24 13:08",reply:"",comment:`<p>虽然我觉得贴在这楼里可能会对楼主和楼主朋友有些冒犯，但是这些话是想说给楼里的坛友听的，并不是真的在评论楼主和朋友酱！</p>
    <p>或许两位楼主(？)可能也会偶尔看到一两句怪话，但是那真的不是绝大多数楼友的想法</p>
    <p>− 楼友请点开，楼主不要点！ ...
      是这样的，关于rpg的问题。</p>
    <p>首先直播帖只要能给大家带来欢乐，情感自然流畅，我们就不应该讨论是不是rpg的问题，因为就算真的是rpg，给我们带来的快乐并不是假的，何不顺势配合呢？况且如果真的不是rpg，我们上来就鉴，反而伤害本人感情</p>
    <p>其次本楼目前可以肯定的是肯定是一个情感丰满、有过一些经历、 泪点很低 的妹子在播(是妹子这点反应在楼主第一时间注意到了男性视角 <del>尤其是你处男版</del> 无论如何都注意不到的点)，就单纯把它当个拉片楼看都很有收获
    </p>
    <p>再者楼里很多假药(四姐妹说之类的)是大家从来没造过的，有很多解析视角(尤其是soyo视角为主)是从追番以来大家想都没想过的，很难想象rpg有能领先当下版本的发言</p>
    <p>所以我不想给大家下结论，但是这楼rpg的概率真的非常非常低</p>
    <p><del>所以大概真的是只有感情非常丰满敏锐的姑娘才能跟独角兽老师完全对上电波</del></p>
    <p>说到节目效果，大概率真的是节目效果。比如第9话错过资源，第11话现场表演这种节目效果，除非好几个楼友都是她们的群演，否则根本整不出来</p>
    <p>至于后面大家开始磕楼主和朋友</p>
    <p>正经发言：大概率就是普通闺蜜的相互调侃，由于不在一个宿舍，但是朋友担心楼主的情绪，就拉她出来住而已。无非是她们对楼友的各种磕糖甚至二创比较放任，并且朋友酱看起来挺喜欢整蛊楼主的 (这还用你说)
      。ansy、百合这些全是大家脑补出来的，人家自己其实一直在否认。</p>
    <p><del>不正经发言：磕有真人基础的糖不比工业糖精强！</del> </p>
    <p>最后，如果大家对直播帖不反感，并且有时间爬楼，请好好享用这将近3k层的美味佳肴，我们好多人已经在n刷这楼了</p>
    <p>这绝对是，独属于坛友的，独一无二的mygo直播体验！</p>
    <p>以上一些在两位楼主看来或许有点冒犯的话说完了</p>
    <p>最后真的感谢两位愿意来NGA为大家献上这么精彩的直播</p>
    <p>相信认真追了几千层楼，从这儿收获了快乐的楼友们都对你们都是只有感谢的！</p>`},{floor:"2795",username:"kngchau",time:"2023-11-24 13:27",reply:"",comment:`<p>代为请假咯~</p>
    <p>今天楼主身体有点不舒服，我觉得她看12话有些勉强，就手机电脑都没收啦~</p>
    <p>抱歉呐大家~</p>
    <p>爱你们哟~</p>`},{floor:"2796",username:"火龙果叉烧肠粉",time:"2023-11-24 13:28",reply:"2795",comment:"<p>没有12集的话，瓦塔西……！</p>"},{floor:"2798",username:"黑堂隐月",time:"2023-11-24 13:31",reply:"2795",comment:`<p>电脑就算了，手机都能没收是吧</p>
    <p>你现在告诉我ちゃうりん被监禁了我都信</p>`},{floor:"2800",username:"顾秋声",time:"2023-11-24 13:33",reply:"",comment:"<p>兄弟们，有没有可能，是家有地下室的睦头人伪装的anon</p>"},{floor:"2804",username:"zxj147576518",time:"2023-11-24 13:39",reply:"",comment:"<p>怎么停播一周也要复刻的啊</p>"},{floor:"2807",username:"枞枞那年",time:"2023-11-24 13:45",reply:"",comment:`<p>ちゃうりん：一天一集
      刚直播：一天一集你也忍得住？
      现在：求求你了一天至少更一集吧</p>`},{floor:"2814",username:"逍浪0126",time:"2023-11-24 14:06",reply:"2800",comment:`<p>如果一个睦头人看起来像anon，做事像anon，心机像anon，甚至连说话都像anon
      那她不就是anon吗</p>`},{floor:"2817",username:"五卅安定",time:"2023-11-24 14:11",reply:"",comment:"<p>我们不会是play的一环吧</p>"},{floor:"2843",username:"kngchau",time:"2023-11-24 16:52",reply:"2789",comment:`<p>刚把她哄睡着，想了想还是回复一下吧~</p>
    <p>我的确没让你们的楼主看这些，但是其实我都翻过了的</p>
    <p>我觉得没什么呀~</p>
    <p>有人质疑就让他们质疑好啦，大家都在互联网冲浪，谁都有说话的权利不是，不用管别人怎么说啦~</p>
    <p>至于我俩</p>
    <p>(你们真的是在磕我俩么，你们不是一直在磕爱素么(爱素我也磕</p>
    <p>
      真要认真问我怎么看的话，老实说，或许可能有点ky，但是楼里磕我俩的，应该绝大部分都是把心里那个美好的爱音和素世的形象投射到我们两个身上来，又希望爱素CP能真的在世界上某个地方有现实的延续，或者说干脆就只是想延续动画里那段美好的爱素关系吧~
    </p>
    <p>但是我们两个就是大千世界里两个普普通通的姑娘而已</p>
    <p>只能说大家愿意在这个热闹的地方聊聊天，并且在这里收获自己的那份快乐，那我们也肯定非常愿意成全大家这份快乐，不会说感觉自己被冒犯这种煞风景的话，也并没有感觉真的被冒犯~</p>
    <p>大家不要因为我们就伤了和气呀~</p>
    <p>吵架是不好哒~</p>
    <p>大家一起开心是最重要的呀！</p>
    <p>爱你们~</p>`},{floor:"2844",username:"西园寺凹凹子",time:"2023-11-24 16:54",reply:"",comment:"<p>爱门</p>"},{floor:"2845",username:"0721-300",time:"2023-11-24 16:54",reply:"2843",comment:"<p>anno酱LOVE！</p>"},{floor:"2846",username:"kngchau",time:"2023-11-24 16:55",reply:"",comment:`<p>至于最近这几页帖子，你们都在脑补什么东西啦喂！</p>
    <p>你们楼主来姨妈了，她的老毛病了，来姨妈就头疼，看手机看电脑就会更严重，都这样了还想看番，不没收她手机电脑怎么行？</p>
    <p>再说12话，我还真有点怕……</p>
    <p>另外，我俩当然是在我自己家呀！我跟楼主不在一个宿舍，但是家在本地，就直接跑回我家住了呀</p>
    <p>你们真是的</p>`},{floor:"2848",username:"『VRT』",time:"2023-11-24 16:57",reply:"",comment:`<p>这是可以说出来的嘛</p>
    <p>爱门，伟大无需多言</p>
    <p>谣言越传越真.jpg</p>`},{floor:"2851",username:"顾秋声",time:"2023-11-24 17:01",reply:"",comment:`<p>这个楼里主要有两种人。
      激进派由长颈鹿构成，希望chaurin和朋友酱尽情贴贴。
      保守派由朋友酱构成，认为长颈鹿们构思的太保守了。</p>
    <p>我不好说.jpg</p>`},{floor:"2853",username:"西园寺凹凹子",time:"2023-11-24 17:04",reply:"",comment:`<p>姨妈的话
      歇一周正好到下周四
      天啊这根本就是mygo</p>`},{floor:"2861",username:"而今听雨",time:"2023-11-24 17:18",reply:"2851",comment:`<p>激进派长颈鹿满脑子都是两人贴贴的时候</p>
    <p>保守派ano酱出来轻描淡写地说：哦，我们在同居呀</p>`},{floor:"2862",username:"乙凌全巳袁史",time:"2023-11-24 17:20",reply:"",comment:"<p>总感觉直播的内容发生了微妙的变化</p>"},{floor:"2863",username:"RandomStar",time:"2023-11-24 17:21",reply:"",comment:"<p>让我们来看看是谁在偷磕楼主S和Friend A</p>"},{floor:"2864",username:"『VRT』",time:"2023-11-24 17:26",reply:"",comment:`<p>虽然很不道德、很不正直、很不合适、很不好、很不正确，甚至还有点下头
      但 <del>爱素同居</del> 日常，好磕;想看</p>`},{floor:"2869",username:"谷不勤",time:"2023-11-24 17:36",reply:"",comment:"<p>发现楼里有人造谣过激贴贴，anon酱立即出面澄清这不是谣言</p>"},{floor:"2876",username:"小号与小小号",time:"2023-11-24 17:58",reply:"",comment:"<p>完蛋了，这个直播楼已经从直播看mygo进化成直播mygo了</p>"},{floor:"2879",username:"黑堂隐月",time:"2023-11-24 18:03",reply:"",comment:`<p>算了
      怪话憋不住了</p>
    <p>虽然我知道朋友间偶尔借住几天很正常
      但是
      你懂的吧，保守派认为激进派太保守了
      那粉毛将楼主打倒在地，定是要...</p>
    <p>个人觉得还是和爱素代餐有所区别的</p>
    <p>要磕爱素大有各种同人可以恰，但</p>
    <p>虚拟与现实的隔阂
      虚拟与现实的重合
      现实中的这亲密关系，也是许多楼友无法复现的吧
      臭男人贴贴个屁嘞</p>
    <p>正是因为现实，正是因为同存于一片青空之下，
      无法触及，因而闪耀。
      わかります。</p>`},{floor:"2927",username:"kngchau",time:"2023-11-25 10:50",reply:"",comment:`<p>呐，所以你们的楼主一早上起来就吵着要看番！</p>
    <p>不过跟她约法三章了也跟大家说一声，今天最多一话，而且如果她不舒服我就来把直播掐了！(什么超管</p>
    <p>正经点哈，楼主才第二天，虽然身体比昨天好多了，但是我还是有点担心她情绪，如果直播断了大家务必见谅呀！</p>
    <p>爱你们~</p>`},{floor:"2928",username:"kngchau",time:"2023-11-25 10:52",reply:"",comment:`<p>额不好意思啊大家，我怕是你们NGA直播mygo播的最慢的一个了……</p>
    <p>今天终于可以看心心念念的12话了！</p>
    <p>如果13话是最终live那么12话应该就是解决祥子、soyo、睦这些角色关系的关键点了，我好期待！！</p>`},{floor:"2933",username:"几只鱼",time:"2023-11-25 10:55",reply:"",comment:"<p>我的11月新番回来啦！</p>"},{floor:"2938",username:"kngchau",time:"2023-11-25 10:56",reply:"",comment:`<p>啊不对不对，我想岔了，11话结尾就是live当天了，那怎么先开live再解决问题啊</p>
    <p>mygo处处透着跟其他人不一样唉</p>`},{floor:"2940",username:"kngchau",time:"2023-11-25 10:58",reply:"",comment:`<p><img src="/image/2940.jpg" style="zoom:33%;" /> </p>
    <p>先解决睦和soyo的关系嘛，也好哦，这个应该好解决，我还是关心soyo和祥子的问题</p>
    <p><del>不过什么前女友来听我的演唱会，有点ptsd了</del></p>`},{floor:"2946",username:"kngchau",time:"2023-11-25 11:00",reply:"",comment:`<p><img src="/image/2946.jpg" style="zoom:33%;" /> </p>
    <p>虽然你们两天写一首新歌真是超人</p>
    <p>但是我还是想ky一句，你们这算个锤子完成，新歌你们最多也就合过一两遍吧</p>`},{floor:"2948",username:"71和EU",time:"2023-11-25 11:01",reply:"2946",comment:"<p>你说得对，但我们mygo玩的就是走钢丝神经刀。暴毙就暴毙了再说，反正又不是第一次丢人</p>"},{floor:"2953",username:"黑堂隐月",time:"2023-11-25 11:04",reply:"",comment:"<p>有一种主播开播粉丝纷纷涌入直播间的既视感</p>"},{floor:"2956",username:"kngchau",time:"2023-11-25 11:05",reply:"",comment:`<p><img src="/image/2956.jpg" style="zoom:33%;" /> </p>
    <p>虽然OP注意到了，但是感觉爱音一直没有耳洞的也没带过耳坠来着？</p>
    <p>所以这是耳夹？live戴耳夹很容易掉的……</p>`},{floor:"2958",username:"黑堂隐月",time:"2023-11-25 11:07",reply:"2956",comment:"<p>邦世界不打耳洞，全是耳夹，不管坠子多大都是耳夹</p>"},{floor:"2961",username:"kngchau",time:"2023-11-25 11:10",reply:"",comment:`<p><img src="/image/2961.jpg" style="zoom:33%;" /> </p>
    <p>这个红色挑染真好看，感觉好像之前也见过她呢，以为是个软妹子没想到是唱摇滚的</p>
    <p>另外，你们这个livehouse背后不是有屏幕嘛！怎么一到mygo就是黑的啊！</p>
    <p>我知道你们应该没时间搞这个，可是找点现成的意义不明的那种素材放上去循环播放就是了！</p>`},{floor:"2962",username:"几只鱼",time:"2023-11-25 11:10",reply:"2961",comment:"<p>高松灯力量型</p>"},{floor:"2966",username:"Develde",time:"2023-11-25 11:12",reply:"",comment:"<p>说实话我知道访谈的时候才知道livehouse有屏幕</p>"},{floor:"2973",username:"kngchau",time:"2023-11-25 11:16",reply:"",comment:`<p><img src="/image/2973.jpg" style="zoom:33%;" /> </p>
    <p>多好看啊！又不露还很有设计感~</p>`},{floor:"2975",username:"黑堂隐月",time:"2023-11-25 11:18",reply:"2973",comment:"<p>↑soyo真心话流出</p>"},{floor:"2977",username:"几只鱼",time:"2023-11-25 11:18",reply:"2973",comment:`<p>大学soyo看高中soyo</p>
    <p>我需要soyoXsoyo的二创，现在就要</p>`},{floor:"2980",username:"kngchau",time:"2023-11-25 11:19",reply:"",comment:`<p><img src="/image/2980.jpg" style="zoom:33%;" /> </p>
    <p>亏你能听懂她在想什么，轮到我出场了不是It&#39;s my turn么，It&#39;s mygo是什么鬼啊</p>
    <p>虽然我知道这是个双关</p>
    <p>但是mygo对まいご真的可以说纯音译了</p>
    <p>爱音果然没什么起名天赋……</p>`},{floor:"2981",username:"typeomicron",time:"2023-11-25 11:19",reply:"2973",comment:`<p>我也觉得很好看</p>
    <p>仔细一看的话每个人的衣服都体现出了“破碎的部分”的理念呢</p>
    <p>该说残破的才是MyGO吧</p>`},{floor:"2989",username:"kngchau",time:"2023-11-25 11:21",reply:"",comment:`<p><img src="/image/2989-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/2989-2.jpg" style="zoom:33%;" /> </p>
    <p>唉soyo呀……</p>
    <p>每天上学穿的是制服，也没有可以约出去穿私服逛街的闺蜜</p>
    <p>恐怕真的是第一次被别人夸衣服好看吧</p>`},{floor:"2992",username:"顾秋声",time:"2023-11-25 11:22",reply:"2989",comment:"<p>还有高手？</p>"},{floor:"2997",username:"typeomicron",time:"2023-11-25 11:24",reply:"2989",comment:`<p>然而这样的衣服居然是自己“讨厌”的ano酱作品……</p>
    <p>口非心是才是soyorin呢</p>`},{floor:"2999",username:"kngchau",time:"2023-11-25 11:25",reply:"",comment:`<p><img src="/image/2999.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈哈哈真的</p>
    <p>你干嘛这里还要阴阳爱音呀！心里很高兴的呀！</p>`},{floor:"3007",username:"kngchau",time:"2023-11-25 11:28",reply:"",comment:`<p><img src="/image/3007.jpg" style="zoom:33%;" /> </p>
    <p>爱音什么败家丫头，换么多钱买了效果器都不好好研究，你不用送我呗哭笑</p>
    <p>话说soyo这袜子真的好土……袜子总不至于也是爱音给你配的吧</p>`},{floor:"3008",username:"几只鱼",time:"2023-11-25 11:29",reply:"2999",comment:`<p>大soyo锐评小soyo</p>
    <p><del>什么soyo呀，真不熟，我们只认识小chau呀</del></p>`},{floor:"3010",username:"几只鱼",time:"2023-11-25 11:30",reply:"3007",comment:"<p>还在拷打还在拷打</p>"},{floor:"3012",username:"kngchau",time:"2023-11-25 11:31",reply:"",comment:`<p><img src="/image/3012.jpg" style="zoom:33%;" /> </p>
    <p>哇原来之前那句话是您说的！乐奈奶奶也是个有故事的人啊！</p>`},{floor:"3016",username:"kngchau",time:"2023-11-25 11:32",reply:"",comment:"<p>听live了哈，听完再回来</p>"},{floor:"3017",username:"xxx19199509",time:"2023-11-25 11:33",reply:"3012",comment:"<p>乐奈奶奶背景设定原来是那种全世界搞巡回演唱会的乐队的吉他手，后来开了livehouse space，是女子乐队的圣地，再后来毕竟年纪大了，干不下去了，所以把space关门了</p>"},{floor:"3028",username:"kngchau",time:"2023-11-25 11:41",reply:"",comment:`<p>一首歌听完啦，感觉完成度很高啊！好好听啊，歌词也很戳！灯光效果也特别好！</p>
    <p>另外，爱音的吉他什么时候弹的这么好了？！！这就是天才么.jpg</p>`},{floor:"3031",username:"Ryodaze",time:"2023-11-25 11:43",reply:"3028",comment:`<p>爱音团没了也一直在练啊</p>
    <p>伟大无需多言</p>`},{floor:"3035",username:"typeomicron",time:"2023-11-25 11:43",reply:"3028",comment:`<p>迷星叫对于mygo这个企划来说其实是第一首歌哦</p>
    <p>或许老观众听到这里会更感慨吧</p>
    <p>“经历了如此繁多的故事，我们终于站在了起点”</p>`},{floor:"3038",username:"kngchau",time:"2023-11-25 11:45",reply:"",comment:`<p><img src="/image/3038.jpg" style="zoom:33%;" /> </p>
    <p>笑死我，爱音真是个小可爱啊</p>
    <p>相信我，也就是你刚买，下次live你就大胆用脚踩了</p>`},{floor:"3042",username:"71和EU",time:"2023-11-25 11:46",reply:"3038",comment:"<p>没事，爱音不踩的东西可以让soyorin代踩</p>"},{floor:"3043",username:"kngchau",time:"2023-11-25 11:47",reply:"",comment:`<p><img src="/image/3043.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈哈笑死</p>
    <p>另外这里伸手挡话筒的细节好自然，制作组用心了</p>`},{floor:"3046",username:"kngchau",time:"2023-11-25 11:51",reply:"",comment:`<p><img src="/image/3046.jpg" style="zoom:33%;" /> </p>
    <p>啊啊，灯真是一点不读空气啊</p>
    <p>你MC的时候说这个是想让soyo哭给你看吗？？</p>
    <p>唉，C团啊……</p>
    <p>分别从灯和soyo两个人的第一视角看过C团的，现在这两个人说这个，真的，那么美好的过去</p>
    <p>有点想哭了</p>
    <p>mygo当然也很好，但是mygo的未来是不确定的，但是C团过去的快乐是真真切切的啊！</p>`},{floor:"3047",username:"几只鱼",time:"2023-11-25 11:52",reply:"3046",comment:"<p>c团终身姨姥</p>"},{floor:"3049",username:"71和EU",time:"2023-11-25 11:52",reply:"3046",comment:`<p>没办法，灯但凡对空气敏感一点，这mc环节都得变味</p>
    <p>但我们就好这口重力</p>`},{floor:"3053",username:"黑堂隐月",time:"2023-11-25 11:55",reply:"",comment:`<p>灯就是这样不读空气</p>
    <p>横冲直撞的以真诚轰入每个人的内心</p>
    <p>正因此mygo才会站在这里</p>`},{floor:"3056",username:"几只鱼",time:"2023-11-25 12:02",reply:"",comment:`<p><img src="/image/3056.jpg" style="zoom: 50%;" /> </p>
    <p>紫薯布丁</p>`},{floor:"3061",username:"kngchau",time:"2023-11-25 12:04",reply:"",comment:"<p>那啥，等会接着更哈~</p>"},{floor:"3062",username:"kngchau",time:"2023-11-25 12:04",reply:"3056",comment:"<p>我要气死了！都快缓过来了，她看见你这图又开始了！</p>"},{floor:"3065",username:"几只鱼",time:"2023-11-25 12:05",reply:"3062",comment:"<p>我的我的，我打的有问题，红豆泥果咩那塞</p>"},{floor:"3071",username:"鬼龙影天",time:"2023-11-25 12:12",reply:"",comment:"<p>几只鱼，这把是不是你打的有问题</p>"},{floor:"3075",username:"几只鱼",time:"2023-11-25 12:14",reply:"",comment:"<p>现在为您播放《几只鱼都做了哪些坏事》，请耐心等待楼主复播</p>"},{floor:"3080",username:"KOKO-RO",time:"2023-11-25 12:19",reply:"",comment:`<p>很好奇楼主是那句呐喊开始破防还是听歌听一半破防</p>
    <p>前者的话我脑子里已经是那个冠军结算的表情了</p>`},{floor:"3084",username:"kngchau",time:"2023-11-25 12:22",reply:"",comment:`<p>好啦大家，抱歉啦，其实没啥好哭的，就是眼泪忍不住</p>
    <p>唉我真的好麻烦</p>`},{floor:"3086",username:"谷不勤",time:"2023-11-25 12:23",reply:"",comment:`<p>发迷路封面，攻击人妇～
      楼主被破防，还敢回复～
      听群友教唆，不堪入目～
      在专楼建立，烤鱼国度～</p>`},{floor:"3088",username:"ALex_bianfu",time:"2023-11-25 12:24",reply:"3084",comment:"<p>感性的小哭包是一种萌点，可爱捏</p>"},{floor:"3097",username:"kngchau",time:"2023-11-25 12:30",reply:"3080",comment:`<p>我是听到灯的那就</p>
    <p>もう何があっても離さない、一生離さないから</p>
    <p>就忍不住了</p>
    <p>灯在说完C团的事之后说这样的话，我错怪了她了，灯很读空气</p>
    <p>灯先告诉soyo，我们在C团的日子很开心，很难忘</p>
    <p>但是C团解散了，因为祥子和睦拆了C团</p>
    <p>但是不要紧，在新团里，我绝对不会离开你，绝对不会离开大家</p>
    <p>我愿意给你这样的承诺，我保证C团的事不会再发生了</p>
    <p>这里就是你新的いばしょ</p>
    <p>这里对应了乐奈上一集的那句话</p>
    <p>いばしょって、また誰かが作るんだ</p>
    <p>现在，灯就为soyo，为乐奈，为一直支持自己的立希，为曾经伤害了又把她挽回的爱音，创造了一个新的いばしょ</p>
    <p>想到这些眼泪就止不住了</p>
    <p>唉</p>
    <p>好了别骂了，我知道我泪点低</p>`},{floor:"3100",username:"kngchau",time:"2023-11-25 12:34",reply:"",comment:`<p><img src="/image/3100.jpg" style="zoom:33%;" /> </p>
    <p>后面soyo终于开心地笑出来了啊</p>
    <p>她终于又有了新的居場所了</p>
    <p>C团过去那么久，她终于有新的，而且向她承诺绝不分开的朋友们了</p>
    <p>啊……</p>
    <p>羡慕</p>`},{floor:"3104",username:"kngchau",time:"2023-11-25 12:39",reply:"3056",comment:`<p>后面这张图真是直接破防我</p>
    <p>没有怪楼友的意思哈，真的很喜欢这张图，但是刚听完这首歌真的有些绷不住眼泪</p>
    <p>这些回复也是边哭边写的</p>
    <p>这图堪比演一集她们美好的乐队生活</p>
    <p>真好啊，成员们坐在一起，互相画像，大家性格不同、爱好不同、画技不同、风格不同，但是大家就是能坐在一起，画出自己心目中那个美好的伙伴的形象</p>
    <p>这图我能看一整天</p>`},{floor:"3105",username:"ALex_bianfu",time:"2023-11-25 12:39",reply:"",comment:`<p>
      感觉可以在这给大伙分享一下发生在我身上的乐子，不过感觉没啥意思，就是以前有个学弟的乐队缺个贝斯手，然后他拉我进他们乐队，那次演出很顺利然后顺理成章的就加进去了，然后过了两个月，这两个月期间就很正常玩的的很好，一起吹水，吃饭，赶场，就是乐队队长一直对我爱答不理的，结果第三个月一直没消息，说合练啊演出啥的，我想着过去看看啥情况，结果发现原来的贝斯手回来了，他们五个人在合练
    </p>`},{floor:"3108",username:"黑堂隐月",time:"2023-11-25 12:41",reply:"3104",comment:`<p>对不起，可能会再次触发泪腺，但既然这么说了</p>
    <p><img src="/image/3108.jpg" style="zoom: 33%;" /> </p>
    <p>看看聚在一起的她们吧</p>`},{floor:"3109",username:"kngchau",time:"2023-11-25 12:41",reply:"",comment:"<p>后面看起来还有一首歌呢，我先听去了哈</p>"},{floor:"3111",username:"Ryodaze",time:"2023-11-25 12:42",reply:"3105",comment:"<p>连个信也没有真的有点过分吧</p>"},{floor:"3116",username:"Ryodaze",time:"2023-11-25 12:43",reply:"3109",comment:"<p>哈哈，碧天伴走又垫咯</p>"},{floor:"3120",username:"kngchau",time:"2023-11-25 12:43",reply:"",comment:`<p>竟然没了！！！！</p>
    <p>浪费我感情！！</p>
    <p>我还做好准备再哭一次了呢</p>`},{floor:"3125",username:"席巴打野太君",time:"2023-11-25 12:47",reply:"",comment:`<p>碧天伴走真是惨</p>
    <p>气氛都到这了，夹断了</p>`},{floor:"3127",username:"kngchau",time:"2023-11-25 12:48",reply:"",comment:`<p><img src="/image/3127.jpg" style="zoom:33%;" /> </p>
    <p>哈哈哈哈日本妹子常用阴阳法</p>
    <p>要是我我可能会说</p>
    <p>あのんちゃらしいね</p>
    <p>反正也就是爱音自己喜欢这些无用的还有点俗套有点小孩子气的小细节</p>`},{floor:"3128",username:"71和EU",time:"2023-11-25 12:50",reply:"3127",comment:"<p>chaurin对爱音的攻击性一如既往呢</p>"},{floor:"3131",username:"kngchau",time:"2023-11-25 12:53",reply:"",comment:`<p><img src="/image/3131.jpg" style="zoom:33%;" /> </p>
    <p>啊，灯和soyo她们两个</p>
    <p>真的好像</p>
    <p>对她们来说C团都像是一束光一样突然闯进了她们的人生，照亮了她们的生活，然后又突然熄灭</p>
    <p>区别在于一开始的灯是踌躇不前，而soyo却在刻意挽回</p>
    <p>但是后来灯冒着再次被伤害的风险勇敢地踏出一步时，soyo还沉醉在过去的美好里，但是其实早就应该知道C团已经不可能回去了</p>
    <p>到后面，虽然大家都是受伤的人，竟然时灯拯救了soyo，率先向她许下永不离开的诺言</p>
    <p>大家现在终于有了新的归宿</p>
    <p>C团就作为一段美好的回忆永远留在心里吧</p>`},{floor:"3137",username:"黑羽仙洛",time:"2023-11-25 12:58",reply:"",comment:`<p>要我说动画里卖灯素的力度真的非常非常强，全剧中最有情绪感染力的台词大多都发生在这两人之间
      但可惜爱音太耀眼了，以至于二创统统变成了爱灯和爱素哭</p>
    <p><del>具体怎么会变成这样的楼主可以问一下旁边的爱音</del></p>`},{floor:"3138",username:"kngchau",time:"2023-11-25 12:58",reply:"",comment:`<p><img src="/image/3138.jpg" style="zoom:33%;" /> </p>
    <p>竟然是睦主动来找soyo示好了啊</p>
    <p>所以祥子的事要拖到13话了？</p>
    <p>不过题外话，睦真是把富家千金人设贯彻到底了啊，装黄瓜找不到塑料袋，随手拿一个看起来很高级的巧克力盒子</p>
    <p>等等，这黄瓜是soyo和睦之前一起浇水的那个吧</p>
    <p>艹，总有种睦怀了soyo的孩子，现在孩子生出来了用这种方法通知她一声的既视感</p>`},{floor:"3142",username:"黑堂隐月",time:"2023-11-25 13:00",reply:"",comment:`<p>这巧克力盒子可是到访谈盖章才确定的事情...</p>
    <p>soyo你就告诉我第二季怎么演吧</p>`},{floor:"3143",username:"安德森克",time:"2023-11-25 13:01",reply:"",comment:`<p>怀孕论之素睦产黄瓜</p>
    <p>那拒绝黄瓜的素世有点渣女了</p>`},{floor:"3146",username:"kngchau",time:"2023-11-25 13:03",reply:"",comment:`<p>我靠，真的，好难过</p>
    <p>不是想哭的那种难过</p>
    <p>就是，心里被人捅了一刀的那种难过</p>
    <p>睦怎么可以这么说soyo呢？？？？</p>`},{floor:"3149",username:"kngchau",time:"2023-11-25 13:04",reply:"",comment:`<p>当然是睦主动送黄瓜来的，睦肯定是好意</p>
    <p>这话应该是无心的</p>
    <p>但是这话攻击性也太强了吧</p>`},{floor:"3152",username:"chr沉凌",time:"2023-11-25 13:04",reply:"",comment:"<p>楼主真是soyo人间体啊</p>"},{floor:"3159",username:"黑堂隐月",time:"2023-11-25 13:06",reply:"",comment:`<p>就是本人，就是本人！</p>
    <p>这边所有人都是：soyo怎么突然这么过分</p>
    <p>楼主：这睦怎么这么过分</p>
    <p>你还说你不是soyo</p>`},{floor:"3163",username:"kngchau",time:"2023-11-25 13:07",reply:"",comment:`<p>我很想知道12话之后有没有起针对睦的节奏</p>
    <p>这个真的应该是无心的吧</p>
    <p>但是也太伤人了，简直就是嘲讽啊</p>
    <p>我觉得这说成是在反击soyo之前PUA她也不为过</p>`},{floor:"3167",username:"黑堂隐月",time:"2023-11-25 13:08",reply:"3163",comment:`<p>反过来了</p>
    <p>大家都在研究为什么soyo突然大变脸</p>`},{floor:"3175",username:"鬼龙影天",time:"2023-11-25 13:09",reply:"3163",comment:`<p>十二话完事讨论了好久才搞清楚为什么soyo炸了</p>
    <p>然后结合游戏剧情得出结论：睦头人你还是别说话了</p>`},{floor:"3181",username:"blanktop",time:"2023-11-25 13:12",reply:"",comment:"<p>只能说确实是soyo本人，包括前面大量剧情和伏笔暗示都是大量讨论甚至访谈盖章后才成为共识的内容lz第一遍看就全懂了，太可怕了，求求你告诉我第二季是怎么演的吧，我什么都会做的</p>"},{floor:"3188",username:"kngchau",time:"2023-11-25 13:17",reply:"",comment:`<p>睦跟其他人不一样啊</p>
    <p>C团解散后睦跟soyo前期的接触比其他所有人都多</p>
    <p>前面soyo每次跟睦对话，说得都是祥子的事，都是C团的事</p>
    <p>后来更是不惜跟睦撕破脸也要让睦带她去找祥子</p>
    <p>然后睦亲眼看见soyo言辞恳切，甚至跪下求祥子回来</p>
    <p>听见soyo说不是真心要组mygo的</p>
    <p>亲眼看见soyo破防那么彻底</p>
    <p>然后soyo刚刚在台上</p>
    <p>估计在对C团的回忆和对mygo的归属感之中挣扎，摇摆</p>
    <p>之后被灯一句话两首歌打动</p>
    <p>决心自己可以在mygo开始新的生活了，这里确实有爱着她，可以永远不用离别的朋友了</p>
    <p>这时候睦也来了，带来了象征她们友情和相处时光的黄瓜</p>
    <p>soyo肯定觉得跟睦的关系也可以和好了</p>
    <p>一切都在变好，soyo是想听听睦说我这次的live是不是还不错</p>
    <p>结果睦这个时候出来一句</p>
    <p>よかったね</p>
    <p>我知道睦应该是无心的！</p>
    <p>但是在soyo听来就是：嚯，心心念念复辟C团，口口声声C团的美好回忆，张嘴就是利用mygo，闭嘴就直接跪下求祥子。这才几天，这就有新欢了？行吧，看起来你现在挺快乐的，那真好~</p>
    <p>刚在台上可能在对C团的回忆和对mygo的归属感之中挣扎的soyo，相当于刚做出归入mygo的决心，就被曾经最好的朋友揭开了伤口</p>
    <p>开始拷问她</p>
    <p>你这就忘记C团了？</p>
    <p>合适吗？</p>
    <p>C团的美好回忆不要了么？</p>
    <p>你配去mygo继续快乐的生活吗？</p>`},{floor:"3202",username:"kngchau",time:"2023-11-25 13:21",reply:"",comment:`<p>我知道睦没有那么坏</p>
    <p>她要是那么坏就不会来当信鸽了</p>
    <p>但是，这话真的非常非常刺耳</p>`},{floor:"3205",username:"RandomStar",time:"2023-11-25 13:22",reply:"",comment:"<p>楼主再现了soyo本人在灯和睦的前后几分钟表现的对比之下瞬间对睦下头这一过程</p>"},{floor:"3208",username:"kngchau",time:"2023-11-25 13:23",reply:"",comment:`<p>前面两首live基本讲的是</p>
    <p>soyo内心复杂，但是终于决心告别过去</p>
    <p>睦这几十秒讲的是</p>
    <p>突然有一个好友站出来，嘲讽一句：哦，你这就告别过去了？</p>
    <p>我真的，真的很难受</p>`},{floor:"3213",username:"一虫破万法",time:"2023-11-25 13:24",reply:"",comment:"<p>太真了，这就是我们nga的soyo啊，你们论坛有没有这样的soyo啊，真是soso又yoyo啊</p>"},{floor:"3214",username:"丹提欧克",time:"2023-11-25 13:24",reply:"",comment:`<p>楼主之于go学大厦
      相当于一群顶尖学者在研究量子力学的时候曼哈顿博士走进来了</p>`},{floor:"3224",username:"kngchau",time:"2023-11-25 13:27",reply:"",comment:`<p>这话换了别人来讲，都不会让soyo觉得在嘲讽啊</p>
    <p>但是睦不一样啊</p>
    <p>睦可是全程直到soyo为了挽回C团做了什么的人啊</p>
    <p>这话别人可以讲</p>
    <p>甚至祥子都可以讲，因为祥子如果这么讲，有可能真的是希望soyo放下C团</p>
    <p>但是祥子没有，祥子骂了soyo一顿，看到这些的睦这么讲了</p>
    <p>那真的怎么听都是嘲讽啊</p>`},{floor:"3226",username:"kngchau",time:"2023-11-25 13:27",reply:"",comment:"<p>我突然发现你们对睦的看法是不是跟我不太一样啊……</p>"},{floor:"3233",username:"kngchau",time:"2023-11-25 13:29",reply:"",comment:`<p>哦哦哦，是翻译的问题是吧</p>
    <p>那确实可能不容易get这个点</p>
    <p>但是懂日语的大佬多得多吧……你们怎么可以攻击soyo呢</p>
    <p>虽然soyo这里做的也不对吧……</p>`},{floor:"3242",username:"kngchau",time:"2023-11-25 13:31",reply:"",comment:`<p>soyo这里做的的确也很糟糕</p>
    <p>她心里应该十分清楚睦不是那种人</p>
    <p>她应该无视掉这句话，然后跟睦说，谢谢你能来，黄瓜，我很喜欢</p>
    <p>之后再慢慢修复跟睦的关系</p>
    <p>但是她live里刚被灯俘获，刚决定放弃C团唉，听到这么刺耳的话，崩溃的确不能完全怪她啊</p>`},{floor:"3251",username:"kngchau",time:"2023-11-25 13:35",reply:"",comment:`<p>原来这句话争议这么大的么</p>
    <p>那我有可能有漏掉的细节哈</p>
    <p>我才看第一遍，你们肯定都N刷了，肯定你们考虑的更多</p>
    <p>我就是抒发一下我第一次看到的情绪</p>
    <p>你们不要真当我是soyo了喂！</p>
    <p>等我看完再去找你们说的go学帖看看现在大家是怎么理解的</p>`},{floor:"3265",username:"kngchau",time:"2023-11-25 13:42",reply:"",comment:`<p><img src="/image/3265.jpg" style="zoom:33%;" /> </p>
    <p>啊等一下</p>
    <p>所以睦不光是去缓和关系，不是单纯去听live的啊</p>
    <p>她竟然也是去告别过去的</p>
    <p>只是她以为是和平分手</p>
    <p>没想到不是</p>
    <p>唉</p>
    <p>感觉心又在痛了</p>`},{floor:"3289",username:"kngchau",time:"2023-11-25 13:50",reply:"",comment:`<p><img src="/image/3289.jpg" style="zoom:33%;" /></p>
    <p>原来睦去找soyo有这么多含义么</p>
    <p>我发现我之前对睦理解得有点太肤浅了</p>
    <p>原来还牵扯到新团ave mujica的问题</p>
    <p>这里是在说她是否决定加入ave mujica？那她不会是被soyo伤到了才决定割舍过去的吧。</p>
    <p>啊这</p>
    <p>别啊</p>
    <p>这不是往那种心绞痛悲剧的方向发展了</p>
    <p>谁也没有错，但是最后达成了最坏的结局</p>
    <p>不过也不能说最坏吧，毕竟长远来看，睦加入新乐队应该也是好的，总比独来独往强</p>
    <p>但是编剧明明可以让她跟soyo恢复关系，却偏偏选了一个最伤人的剧情</p>
    <p>啊，不对</p>
    <p>之前soyo跟睦说过了，新团之后要拉睦的，如果mygo成立了，睦还没有乐队，处境就会比较尴尬，除非soyo真的把睦拉进mygo</p>
    <p>如果睦和soyo闹翻了，那就可以各自加入新乐队了</p>
    <p>编剧你好狠的心啊</p>`},{floor:"3293",username:"kngchau",time:"2023-11-25 13:52",reply:"",comment:`<p>所以第12话后半段开始处理ave mujica的剧情了？？</p>
    <p>这季不是mygo么？</p>`},{floor:"3325",username:"kngchau",time:"2023-11-25 14:08",reply:"",comment:`<p>啊原来ave mujica是祥子发起的？</p>
    <p>后面nyamu跟祥子这段对手戏句句带刺啊</p>
    <p>好刺激</p>
    <p><img src="/image/3325-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3325-2.jpg" style="zoom:33%;" /> </p>
    <p>所以这里是nyamu是想试试祥子的财力和实力，故意选了个高档咖啡店。看祥子穿的很普通，还想刺一下。(不过祥子的确又被刺到</p>
    <p><img src="/image/3325-3.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3325-4.jpg" style="zoom:33%;" /> </p>
    <p>所以之前的假药是真的？</p>
    <p>nyamu有个音乐梦，想用美妆视频引流自己的音乐视频。但是祥子一眼看出了这个半吊子样子肯定不行，毕竟美妆和音乐视频受众不同啊。</p>
    <p>所以祥子希望利用她的美貌和粉丝数。</p>
    <p>还要继续利用睦的家庭背景</p>
    <p>初华再sumimi的人气</p>
    <p>哇，祥子……有种大boss味了哦</p>`},{floor:"3332",username:"晨於羽",time:"2023-11-25 14:11",reply:"3325",comment:"<p>祥子的确是大boss，两支乐队10个人除了猫和爱音。其他人都是她拉的，还个个身手不凡，什么神级伯乐啊。</p>"},{floor:"3338",username:"Ryodaze",time:"2023-11-25 14:13",reply:"",comment:`<p>没人发的话我先来
      [[理性分析]祥子有了高松灯孩子的可能性[MyGO]-哔哩哔哩] <a href='https://b23.tv/eYewWVi' target='_blank'
        class='url'>https://b23.tv/eYewWVi</a></p>
    <p>[[理性分析]祥睦远坂姐妹说[MyGO][图一乐请勿当真]-哔哩哔哩] <a href='https://b23.tv/nNmayTJ' target='_blank'
        class='url'>https://b23.tv/nNmayTJ</a>
      建议关闭弹幕，不看评论区，然后享受</p>`},{floor:"3341",username:"kngchau",time:"2023-11-25 14:13",reply:"",comment:`<p>不过所以从这一话开始，或者从很早开始，编剧就开始研究mygo团和C团人的切割？(又是剪切线？哭笑</p>
    <p>祥子因为春日影破防，选择和过去切割，所以她才对soyo的下跪如此冷漠，她已经决心放下过去了，任何过去的人和事，都会乱了她的心。</p>
    <p>那么这本质上就说明祥子还是没放下，真的放下是可以一笑置之的，对过去的人冷脸以对，故意说难听的话来刺伤以前的人，本质上还是害怕跟她们保持了一个很好的关系自己会心软、会后悔。</p>
    <p>海玲短暂地加入过mygo，发现这里的贝斯位是永远留给soyo的，于是马上离去。</p>
    <p>睦想要回去跟soyo恢复关系，却阴差阳错变成了跟soyo关系更僵</p>
    <p>连nyamu也要告别过去的美妆博主X音乐博主的生活，加入到一个新的团体里去了</p>`},{floor:"3343",username:"谷不勤",time:"2023-11-25 14:15",reply:"3341",comment:"<p>真奈女士：没切割我，我去给茶屋灵拿两个甜甜圈哦</p>"},{floor:"3351",username:"kngchau",time:"2023-11-25 14:20",reply:"",comment:`<p><img src="/image/3351.jpg" style="zoom:33%;" /> </p>
    <p>所以这里又要回扣祥子对soyo的话了</p>
    <p>其实挺对的，祥子已经因为一些变故成长了，但是第8话的soyo没有</p>
    <p>那时的soyo，只是一个一味想着，想回到过去的美好C团而苦苦挽留的孩子，她甚至只是为了自己，而不是为了乐队成员</p>
    <p>口口声声为了大家是幌子</p>
    <p>的确是满脑子都是自己啊……</p>
    <p>但是当时的祥子已经因为某些变故(如果真能合理的话)成长为一个背负着他人命运的人</p>
    <p>祥子认为已经清醒的自己可以背负他人的人生，当时的soyo，当然，显然不行</p>
    <p>我不想指责soyo是错的，因为对于当时的她来说，心心念念忘不掉过去的美好，做出那种事，我完全可以理解</p>
    <p>但是如果祥子真的有了更沉重的经历，那么soyo这番作为的确不配祥子回来。</p>`},{floor:"3357",username:"kngchau",time:"2023-11-25 14:24",reply:"",comment:`<p>好了好了好了，楼主本来今天哭过一场，早就有点头疼啦，她坚持把想说的写完，我现在已经命令她上床啦~</p>
    <p>再说一遍</p>
    <p>大家不要吵架呀！！！</p>
    <p>另外，你们也真的</p>
    <p>不要把楼主直接看成soyo呀！！！</p>
    <p>楼主只是来直播感想的，她是第一次看哎！我什么都没说过，我也没想过这么多~</p>
    <p>你们愿意在楼里讨论剧情我们肯定没有意见啦，观点肯定有差异这些都很正常很正常呀！</p>
    <p>但是请大家语气和善一些呀！</p>
    <p>讨论剧情，为什么要吵架呐！</p>`},{floor:"3370",username:"kngchau",time:"2023-11-25 14:28",reply:"",comment:`<p>今天不许她看13话啦~</p>
    <p>你们不心疼我还心疼呢！</p>
    <p>好啦大家和和气气，想聊什么就聊什么吧~</p>
    <p>只要不吵架聊什么都可以！</p>`},{floor:"3376",username:"eMiRiCo",time:"2023-11-25 14:32",reply:"",comment:`<p>怀孕论是纯搞笑的假药
      姐妹论提出的姐妹(亲人)假说则非常有可能是正确答案
      而姐妹论的提出时间恰好在12结束13播出之间，众人在当时的讨论帖中添砖加瓦，慢慢完成这一学说
      可以说是mygo追番中不可不品的环节
      其论点之惊奇，证据多样且合理，推理之严谨程度，各方面都非常接近最终的答案(私认为整合的视频版本里，fate的设定有点生搬硬套，死人应该不太可能，其他的部分我没意见)
      不论是讨论的还是观看的都觉得自己是不是看了剧透
      而这个学说完成且发酵几天后13话同步播出的那一刻，等待着的所有人的是更多的疯狂</p>
    <p>请务必缓一缓看看姐妹论学说
      ps：虽然可能会入脑，但要记得也是假药
      ps：要入脑节选自不要入脑</p>`},{floor:"3382",username:"Harukireset",time:"2023-11-25 14:47",reply:"",comment:`<p>期待之后楼主看13话，并适度给出对mujica剧情的猜测。
      抛开“就是soyo本人”这个纯调侃性质的评价不谈，楼主确实是mygo完结后众多直播里，情绪最饱满，对剧情里的诸多细节伏笔感知力最强的新观众；在二期动画目前仍“锐意制作中”的当下，长颈鹿们的猜测 假药
      已经进入了瓶颈，迫切需要新鲜血液，楼主此时对整体创作和角色心情的直感或许能给我们这些长颈鹿一些新的思考方向。
      总之，还是很高兴看到楼主成为热爱这部动画的伙伴，请继续对mygo和mujica的未来满怀期待。</p>`},{floor:"3384",username:"KOKO-RO",time:"2023-11-25 15:02",reply:"",comment:`<p>比起调侃soyo，更惊讶于如此心思细腻敏感感性的人愿意这么长时间也详细的在公开论坛分享自己的体验，挺佩服的
      牛的楼主，顺带谢谢楼主朋友，我现在也做了一份只有9话的mygo文件夹用来传教</p>`},{floor:"3404",username:"Arthurrrrrrrrr",time:"2023-11-25 16:33",reply:"",comment:`<p>我要开始继续感叹楼主没有更早一点看我去了</p>
    <p>如果soyorin能早一个月开本直播贴 大伙就会指责mygo监督偷偷上泥潭学习感想编访谈了</p>`},{floor:"3413",username:"枞枞那年",time:"2023-11-25 17:55",reply:"3384",comment:`<p>最好能伪装一下，搞个预览图和时间正确的视频冒充10-13，不然很容易被发现</p>
    <p><del>太恶毒了，好想现在就去做一个</del> </p>`},{floor:"3435",username:"而今听雨",time:"2023-11-25 21:20",reply:"",comment:`<p>来画一下今天播小黄瓜事件楼主态度的重点</p>
    <p>最重要的不是楼主说了什么，而是楼主对睦这句话的情绪反应十分剧烈</p>
    <p>这让我们知道了，至少对于代入了soyo的观众，或者情绪敏感的妹子，是的确很容易被这句话点燃的</p>
    <p><del>楼主站在soyo立场直接爆炸了好长的评论</del> (小作文是吧</p>
    <p>我要发小红书挂你.jpg</p>
    <p>在此之前有很多人对soyo态度的巨大变化没有实感</p>
    <p>但是直播帖直播第一反应，发现真的有人会当场爆炸</p>
    <p>这是小黄瓜事件，这个直播从感性角度给我带来的最大收获</p>`},{floor:"3436",username:"kngchau",time:"2023-11-25 21:38",reply:"",comment:`<p>我靠听旁边这孩子给我讲完姐妹论我睡不着了</p>
    <p>按着她跟我讨论了半个小时了</p>
    <p>现在爬起来翻贴吧和b站了</p>
    <p>太合理了！！！</p>
    <p>惊为天人！！！</p>
    <p>你们太有才了</p>`},{floor:"3438",username:"顾秋声",time:"2023-11-25 21:39",reply:"",comment:"<p>chaurin像是忽然发现自己的两个孩子是姐妹一样激动 <del>什么破烂比喻</del></p>"},{floor:"3439",username:"kngchau",time:"2023-11-25 21:43",reply:"",comment:`<p>啊我没有要继续更新13话的意思哈</p>
    <p>她会打死我的……</p>
    <p>我就上来赞叹一下大家都太有才了</p>
    <p>看mygo的大家果然都是很厉害的人呢！</p>
    <p>大家都注意到好多我完全没发现的细节，所以你们不要再说我看得细我的理解好了，脸红了要</p>
    <p>各位早点睡哦晚安安</p>`},{floor:"3442",username:"松鼠之梦",time:"2023-11-25 21:47",reply:"",comment:`<p>7是独角兽老师对看完1~6的观众的奖励。
      10、12则是7~9的，不过不只是独角兽，而是staff们。</p>
    <p>而姐妹说，是观众们对看完mygo的奖励。</p>`},{floor:"3449",username:"而今听雨",time:"2023-11-25 22:45",reply:"",comment:`<p>楼主：
      按着她跟我讨论了半个小时了</p>
    <p>现在爬起来翻贴吧和b站了</p>
    <p>楼友：
      <strong>按着她</strong>跟我讨论了半个小时了
    </p>
    <p>现在<strong>爬起来</strong>翻贴吧和b站了</p>`},{floor:"3468",username:"kngchau",time:"2023-11-26 11:03",reply:"",comment:`<p>大家中午好呀…~</p>
    <p>我来播最后一话啦~</p>
    <p>听说有live，中间live我不会停下来发帖哦，live部分会完整看完再来跟大家讨论</p>`},{floor:"3473",username:"kngchau",time:"2023-11-26 11:06",reply:"",comment:`<p><img src="/image/3473.jpg" style="zoom:33%;" /> </p>
    <p>开幕雷击！！</p>
    <p>祥子竟然去打工了？！！！</p>
    <p>天呐，所以之前说的破产假药是真的？？</p>
    <p>啊……懵了我</p>
    <p>祥子你这……</p>`},{floor:"3474",username:"kngchau",time:"2023-11-26 11:08",reply:"",comment:`<p><img src="/image/3474.jpg" style="zoom:33%;" /> </p>
    <p>时薪制啊……干多少个小时给多少钱？</p>
    <p>有一说一这兼职还真挺好的 (我也想去了</p>
    <p>所以她这是下班要去ave mujica排练么</p>
    <p>姐姐你不上学的么</p>`},{floor:"3478",username:"kngchau",time:"2023-11-26 11:10",reply:"",comment:`<p><img src="/image/3478.jpg" style="zoom:33%;" /> </p>
    <p>姐姐你这遮阳伞打了个寂寞哭笑</p>
    <p>有一种男朋友给女孩子打伞的美，只遮半边脸，一天下来脸上晒出色差来</p>`},{floor:"3481",username:"kngchau",time:"2023-11-26 11:12",reply:"",comment:`<p><img src="/image/3481.jpg" style="zoom:33%;" /> </p>
    <p>哇哦，睦这段爬格子好帅啊</p>
    <p>睦好强啊</p>
    <p>而且这不是天天在家练琴嘛，跟爱音一样</p>
    <p>啊不对，爱音那个技术还是不要来碰瓷睦了</p>`},{floor:"3482",username:"几只鱼",time:"2023-11-26 11:13",reply:"3481",comment:"<p>还在攻击还在攻击</p>"},{floor:"3484",username:"顾秋声",time:"2023-11-26 11:14",reply:"",comment:`<p>还在迫害，十三集还在迫害爱音！</p>
    <p>开局优化爱音
      中期利用爱音
      和解后阴阳爱音
      看到别人对比爱音</p>`},{floor:"3490",username:"RandomStar",time:"2023-11-26 11:17",reply:"3484",comment:"<p>下午四五点被爱音哄睡</p>"},{floor:"3492",username:"kngchau",time:"2023-11-26 11:18",reply:"",comment:`<p><img src="/image/3492.jpg" style="zoom:33%;" /> </p>
    <p>啊……</p>
    <p>原来是这样！</p>
    <p>祥子邀请睦加入ave mujica，睦一直在犹豫</p>
    <p>她首先还牵挂着soyo，结果被soyo把黄瓜塞回来了</p>
    <p>然后又看到祥子现在已经身心都被处境异化了，所以决定加入ave mujica帮祥子一把</p>
    <p>啊！！好痛啊！</p>
    <p>昨天明天soyo和睦都是好心，都是想恢复关系，可是却变成了这样</p>
    <p>唉，睦真的只是不太会说话不太会读空气而已啊……</p>
    <p>soyo确实是上头了有点做过头了</p>
    <p>唉不说了</p>
    <p>睦真是个温柔的人啊，她能察觉到身边人的情绪，在soyo状态最差、祥子状态最差的时候，她始终在两个人身边</p>
    <p>啊，所以</p>
    <p>睦是说的那句よかったね是真的真心想这么说的，她是真的觉得以前那样的soyo现在有了新的归宿真是太好了，因为她一直放心不下的两个人soyo和祥子，现在soyo有了归宿，就可以安心去陪祥子了</p>
    <p>但是真的很容易误会啊亲爱的……</p>
    <p>尤其是soyo其实没那么容易从C团里走出来，是live才有了归属感和决心的</p>
    <p>唉……</p>`},{floor:"3495",username:"顾秋声",time:"2023-11-26 11:21",reply:"",comment:"<p>《我的忏悔》by soyo，chaurin译</p>"},{floor:"3496",username:"kngchau",time:"2023-11-26 11:21",reply:"",comment:`<p><img src="/image/3496.jpg" style="zoom:33%;" /> </p>
    <p>如果弱小的你真的已经死了</p>
    <p>不会被睦一句真心话刺到</p>
    <p>不会被nyamu一句阴阳你财力的话刺到</p>
    <p>你完完全全是硬撑啊</p>
    <p>睦说得没错，你真的快坏掉了</p>`},{floor:"3498",username:"71和EU",time:"2023-11-26 11:23",reply:"3496",comment:"<p>其实真的死了，有了这一年的事，白祥再怎么都不会活过来了，现在活着的只是一个挣扎的人偶黑祥</p>"},{floor:"3499",username:"kngchau",time:"2023-11-26 11:24",reply:"",comment:`<p><img src="/image/3499.jpg" style="zoom:33%;" /> </p>
    <p>虽然现在说这话怪怪的，但是有点磕到立希和乐奈了心</p>
    <p>以及，女孩子聚餐就是要等菜上齐先拍照啊！</p>`},{floor:"3505",username:"kngchau",time:"2023-11-26 11:26",reply:"",comment:`<p><img src="/image/3505.jpg" style="zoom:33%;" /> </p>
    <p>爱音就是喜欢这些小细节呢(无褒义)</p>
    <p>明明是新曲更重要好吧，给我把新曲放在前面说啊！！</p>`},{floor:"3510",username:"宵暗花火496",time:"2023-11-26 11:28",reply:"",comment:"<p>这种遗憾，即使不会回头的时光裹挟着她们的人生继续向前，但那遗憾始终在她们的身后组成了她们的一生，无法遗忘</p>"},{floor:"3514",username:"kngchau",time:"2023-11-26 11:30",reply:"",comment:`<p><img src="/image/3514-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3514-2.jpg" style="zoom:33%;" /> </p>
    <p>说得太好了，这里表现了灯经历了13话之后对“一辈子乐队”的最新理解吧</p>
    <p>其实很多人在感情里都是这样的</p>
    <p>最先希望白头偕老永远在一起</p>
    <p>但是你有这样的期待和愿望，就会变得非常患得患失，就会因为各种小的问题想得太多郁郁寡欢</p>
    <p>不如立足当下，往脚下看，往眼前看</p>
    <p>只要大家开开心心地在一起过好每一天</p>
    <p>一辈子就真的没有那么遥不可及了</p>`},{floor:"3516",username:"71和EU",time:"2023-11-26 11:32",reply:"3514",comment:"<p>灯积分公式正式提出</p>"},{floor:"3522",username:"kngchau",time:"2023-11-26 11:34",reply:"",comment:`<p><img src="/image/3522-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3522-2.jpg" style="zoom:33%;" /> </p>
    <p>这两句话是说给爱音听的吧哈哈哈哈哈哈</p>
    <p>“可是有人说过，那可是一辈子啊，你们真打算玩乐队玩到死么”</p>
    <p>看看爱音尴尬的小表情好可爱</p>
    <p><img src="/image/3522-3.jpg" style="zoom:33%;" /> </p>
    <p>不过你这句不就是赤裸裸表明自己的态度嘛，掩饰一下啊喂</p>`},{floor:"3523",username:"几只鱼",time:"2023-11-26 11:35",reply:"",comment:"<p>葬送的soyorin</p>"},{floor:"3524",username:"71和EU",time:"2023-11-26 11:36",reply:"3522",comment:"<p>soyorin是这样的，也就嘴比较硬了哭笑顺便一提，这人在游戏里已经开始喝八种蔬菜的混合蔬菜汁保持健康了</p>"},{floor:"3525",username:"kngchau",time:"2023-11-26 11:37",reply:"",comment:`<p><img src="/image/3525.jpg" style="zoom:33%;" /> </p>
    <p>这里应该再多给一个镜头：</p>
    <p>听完爱音说抹茶对身体很好，soyo又冷着脸多吃了一口</p>`},{floor:"3530",username:"kngchau",time:"2023-11-26 11:39",reply:"",comment:`<p><img src="/image/3530.jpg" style="zoom:33%;" /> </p>
    <p>你们也要手牵手互诉衷肠了？</p>
    <p>(第8话之前骗我的楼友们，我还记着呢！</p>`},{floor:"3531",username:"SwimCloud",time:"2023-11-26 11:40",reply:"3530",comment:"<p>这是真的互诉衷肠哦(无欺骗</p>"},{floor:"3538",username:"71和EU",time:"2023-11-26 11:42",reply:"3530",comment:`<p>这里有个很离谱的点，哈是哈女士的杀青词哭笑</p>
    <p>仅以此哈纪念立希女士在挺好萌上的使用哈的优越表现.JPG</p>`},{floor:"3539",username:"kngchau",time:"2023-11-26 11:43",reply:"",comment:`<p><img src="/image/3539.jpg" style="zoom:33%;" /> </p>
    <p>啊 有点破防</p>
    <p>艹有点想哭了</p>
    <p>想起了上中学的时候回家，每天到楼下都要先跑好远挨个楼层数上去，就为了看看家里的窗户有没有亮灯</p>
    <p>有亮灯就高高兴兴回家</p>
    <p>soyo这里肯定想的是同样的事情吧</p>
    <p>别人到了家楼下，抬头一看就有亮着的灯</p>
    <p>但是自己回家，家里永远都是黑的</p>
    <p>啊……要哭了</p>`},{floor:"3541",username:"顾秋声",time:"2023-11-26 11:45",reply:"",comment:`<p>chaurin，我刚跟群友打赌说您今天能挺下来……
      原来是挺王的挺啊</p>`},{floor:"3543",username:"Develde",time:"2023-11-26 11:46",reply:"",comment:"<p>啊，楼主这个描述倒是很能感同身受。之前倒没往这想过，真的是常看常新。</p>"},{floor:"3546",username:"kngchau",time:"2023-11-26 11:48",reply:"",comment:`<p>啊啊啊啊烦死了，怎么都13话了还有泪点</p>
    <p>妈的</p>
    <p>哭成傻子了</p>`},{floor:"3550",username:"kngchau",time:"2023-11-26 11:50",reply:"",comment:"<p>我也永远都忘不了crychic啊</p>"},{floor:"3551",username:"Usamimi",time:"2023-11-26 11:51",reply:"",comment:`<p>看来这季的soyo部分完结了，开始安利邦邦游戏内soyo相关的切片！</p>
    <p>[中翻]长崎爽世自我介绍之一秒开夹[It&#39;s MyGO!!!!!] <a href='https://www.bilibili.com/video/BV1rm4y1N7DK' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1rm4y1N7DK</a>▸
      [MyGO!!!!!]对爱音上传到SNS上的内容如数家珍的长崎爽世 <a href='https://www.bilibili.com/video/BV1JP411b7o9' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1JP411b7o9</a>▸
      [渣翻]拿灯刺激立希的soyo <a href='https://www.bilibili.com/video/BV1Ah4y1e7M1' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1Ah4y1e7M1</a>▸
      [MyGO!!!!!]爽世大小姐想让爱音更换称呼方式~ <a href='https://www.bilibili.com/video/BV1Tu411c7Q9' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1Tu411c7Q9</a>▸
      [渣翻熟肉/mygo!!!!!]soyo：人与人之间理解好难 anon：这话轮得到你来说？[BanGDream!活动剧情] <a
        href='https://www.bilibili.com/video/BV1B94y137yS' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1B94y137yS</a>▸
      [渣翻熟肉/mygo!!!!!]微笑很吓人的爽世小姐<a href='海报对话'>BanGDream!地图对话</a><a href='https://www.bilibili.com/video/BV1RV411w73N'
        target='_blank' class='url'>https://www.bilibili.com/video/BV1RV411w73N</a>▸
      [MyGO!!!!!]大家的“妈妈”长崎爽世锐评乐队成员 <a href='https://www.bilibili.com/video/BV1fz4y1G7Nn' target='_blank'
        class='url'>https://www.bilibili.com/video/BV1fz4y1G7Nn</a>▸</p>
    <p>游戏对话完全可以当后日谈来看，放心食用</p>`},{floor:"3553",username:"kngchau",time:"2023-11-26 11:53",reply:"",comment:`<p><img src="/image/3553.jpg" style="zoom:33%;" /> </p>
    <p>无论发生了什么，祥子对C团的这份爱，绝对不是假的啊</p>`},{floor:"3556",username:"fenggehao",time:"2023-11-26 11:54",reply:"3553",comment:'<p><img src="/image/3556.jpg" style="zoom:50%;" /> </p>'},{floor:"3561",username:"kngchau",time:"2023-11-26 11:59",reply:"",comment:`<p><img src="/image/3561-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3561-2.jpg" style="zoom: 33%;" /> </p>
    <p><img src="/image/3561-3.jpg" style="zoom:33%;" /> </p>
    <p>对啊，原来还有这样的情况在里面</p>
    <p>灯的歌词是内心的呐喊</p>
    <p>也是soyo内心的呐喊</p>
    <p>但是soyo和灯不一样，和祥子不一样，她和C团其他人都不一样，她是一个用面具把自己伪装起来的，甚至都不知道还摘不摘得下来的一个人</p>
    <p>虽然歌词写的是内心的呐喊，但是对soyo来说太赤裸裸了</p>
    <p><del>可是让她来演奏这些歌曲，就仿佛让她穿爱音的那些个衣服一样</del> (对不起爱音，但是玩梗能让我心情好点</p>
    <p>一个主打emo的朋克乐队，其实不适合soyo这样的人吧</p>
    <p>但是她为什么还要在那儿呢</p>
    <p>因为她喜欢的不是乐队和音乐，是乐队成员和乐队生活啊</p>`},{floor:"3563",username:"71和EU",time:"2023-11-26 12:01",reply:"3561",comment:`<p>还在攻击还在攻击</p>
    <p>很难想象楼主到底想攻击谁 </p>`},{floor:"3566",username:"kngchau",time:"2023-11-26 12:09",reply:"",comment:`<p><img src="/image/3566-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3566-2.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3566-3.jpg" style="zoom:33%;" /> </p>
    <p>所以C团的生活对她来说或许也没有那么美好</p>
    <p>她只是刻意不去思考一些事情，刻意不去拷问自己</p>
    <p>只享受，只记住C团的那些美好</p>
    <p>其实有可能C团时光的深夜里</p>
    <p>她也会反复的拷问自己：带着面具，累么？</p>
    <p>带着面具还要演奏那么发自肺腑的歌曲，还要把那些演奏伪装得没有那么直击自己的内心</p>
    <p>一边演唱着完全是自己内心呐喊的曲子，一边又要把自己的内心隐藏起来，带上面具去社交</p>
    <p>累吗？</p>
    <p>如果不真的解决这个问题，那么C团对soyo也绝对不是最终的归宿，只是暂时的歇脚</p>
    <p>mygo才是她真正的归宿，因为在被祥子说了那些话之后，她才真正意识到自己要直面这个问题</p>
    <p>现在她彻底想明白了这个问题，她在mygo才可以快乐地继续生活</p>
    <p>向着一辈子的目标前进</p>`},{floor:"3568",username:"kngchau",time:"2023-11-26 12:11",reply:"",comment:`<p><img src="/image/3568.jpg" style="zoom:33%;" /> </p>
    <p>这个再见，配的好好啊！</p>
    <p>就是这种，soyo在前十几话都没有发出过的，既不夹也不沉重，既不做作也不克制</p>
    <p>完全轻松愉快的 再见</p>
    <p>是那种完全放下了面具，又能轻松面对别人的 再见</p>
    <p>这句真的很戳到我</p>`},{floor:"3572",username:"UID6092423",time:"2023-11-26 12:16",reply:"",comment:"<p>灯宝连续两集给出正确答案才把MyGO!!!!!篇最大boss搞定</p>"},{floor:"3575",username:"kngchau",time:"2023-11-26 12:19",reply:"",comment:`<p><img src="/image/3575.jpg" style="zoom:33%;" /> </p>
    <p>太感动了</p>
    <p>说出这句话不是为了印证soyo忘不掉crychic</p>
    <p>而是为了印证soyo真的放下了crychic</p>
    <p>忘不了C团不用她自己说，大家不瞎都能看出来</p>
    <p>但是能坦率地，在加入mygo之后说出这句话，说明她真的放下了</p>
    <p>可能也是对12话里的灯和睦的回应吧</p>
    <p>我决定加入mygo了，这里是我新的归宿，但是我也不可能忘记C团，因为那里有我的美好回忆</p>
    <p>我不能止步不前了，我决定要带上这份美好回忆，继续前进了</p>`},{floor:"3577",username:"kngchau",time:"2023-11-26 12:20",reply:"",comment:`<p><img src="/image/3577.jpg" style="zoom:33%;" /> </p>
    <p>灯也是一样啊，两个人都是C团解散后迷路的孩子</p>
    <p>只是灯跟soyo不一样，灯是勇敢地走出来，又拯救了soyo的人</p>
    <p>两个人就在这里约好了，带上过去的美好，一起往未来迈进</p>
    <p>太好了，太感动了</p>
    <p>啊……</p>`},{floor:"3579",username:"kngchau",time:"2023-11-26 12:22",reply:"",comment:`<p><img src="/image/3579.jpg" style="zoom:33%;" /> </p>
    <p>喂！你们编剧组是真的明里暗里迫害soyo哇</p>
    <p>前面soyo转头一走，后面切到灯家里，温暖的灯光，和温柔的爸爸</p>
    <p>你这……杀人还要诛心？</p>
    <p>编剧监督可真是坏心眼</p>`},{floor:"3580",username:"中禅寺山彦",time:"2023-11-26 12:23",reply:"",comment:"<p>其实迫害的是另一个人。</p>"},{floor:"3589",username:"overfly48",time:"2023-11-26 12:28",reply:"",comment:"<p>是的，一定是在迫害soyo的单亲家庭(棒读)</p>"},{floor:"3592",username:"1.048596",time:"2023-11-26 12:29",reply:"",comment:`<p>某人的爹跟灯的爹</p>
    <p>某人的家跟灯的家</p>
    <p>但是很微妙的是楼主点出来之后，soyo其实也可以被迫害，因为soyo目前家里没爹，家里也是一片黑</p>
    <p>契科夫之枪一枪双响了()</p>`},{floor:"3597",username:"kngchau",time:"2023-11-26 12:32",reply:"",comment:`<p><img src="/image/3597-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3597-2.jpg" style="zoom:33%;" /> </p>
    <p>祥子这里真是回旋镖啊</p>
    <p>“软弱的我，已经死了”</p>
    <p>软弱的你要是真的死了，第8话那么对soyo，刚才那么对睦，这里这么对灯</p>
    <p>每一个人的出现，仅仅只是出现，就能让祥子乱了阵脚</p>
    <p>软弱的你真的已经死了么？</p>
    <p>现在的你恐怕更软弱吧，见都不敢见，听都不敢听，提都不敢提</p>
    <p>这段剧情完全就是：祥子看见灯来了落荒而逃</p>
    <p>灯写的好像是，以前我不敢直面自己的内心，但是……</p>
    <p>恐怕祥子是不敢看不敢读这些文字的吧</p>
    <p>她怕自己真的读了这些又心软了，破防了，软弱的自己又回来了</p>
    <p>有句话说得好“世上只有一种英雄主义，就是在认清生活真相之后依然热爱生活。”</p>
    <p>祥子已经认清了生活的真相，但并不敢直面生活</p>`},{floor:"3603",username:"kngchau",time:"2023-11-26 12:37",reply:"",comment:`<p><img src="/image/3603.jpg" style="zoom:33%;" /> </p>
    <p>爱音太温柔了呀，大家都是好姑娘</p>`},{floor:"3608",username:"kngchau",time:"2023-11-26 12:42",reply:"",comment:`<p><img src="/image/3608.jpg" style="zoom:33%;" /> </p>
    <p>啊，这一集怎么金句和名场面那么多啊</p>
    <p>你这含金量完全刻意分进两集里啊</p>
    <p>灯和爱音的对手戏句句金句啊，就不一句一句截图了，反正你们肯定记得说了什么</p>
    <p>所以这一段就是绝妙的双关</p>
    <p>开头灯给了爱音创可贴，也给爱音的心贴上了创可贴</p>
    <p>爱音这里给了灯一盒创可贴，又给她的心也贴上了属于爱音的那张创可贴</p>
    <p>话说灯这里的两句はい、よろしくお願います好郑重</p>
    <p>真是重女属性拉满了，我好爱</p>`},{floor:"3615",username:"枞枞那年",time:"2023-11-26 12:48",reply:"",comment:"<p>爱灯越王道，爱素也就越甜啊</p>"},{floor:"3616",username:"狮子卷",time:"2023-11-26 12:48",reply:"",comment:"<p>因为太王道和糖度很高反而意外没有什么额外讨论度的爱灯.jpg</p>"},{floor:"3617",username:"kngchau",time:"2023-11-26 12:50",reply:"",comment:`<p><img src="/image/3617.jpg" style="zoom:33%;" /> </p>
    <p>爱音就是喜欢这种小心思呢(贬义)</p>
    <p>你一个吉他小菜鸡，有什么资格把名字写在乐奈前面！？</p>
    <p>话说你们这糊团哪儿来的26个关注者，抛掉你们五个还有21个呢？？</p>`},{floor:"3624",username:"西园寺凹凹子",time:"2023-11-26 12:52",reply:"",comment:`<p>anon你是队长吗</p>
    <p>我觉得我是</p>`},{floor:"3627",username:"kngchau",time:"2023-11-26 12:52",reply:"",comment:`<p><img src="/image/3627.jpg" style="zoom:33%;" /> </p>
    <p>这里真有意思啊，是不是之前就说过来着，初华其实很关注祥子过去的乐队，灯其实她早就认识</p>
    <p>然后这里暴露了</p>
    <p>说不定刚才那26个粉丝里就有初华小号，这里是拿大号又关注了一遍</p>`},{floor:"3629",username:"RereiN",time:"2023-11-26 12:53",reply:"3617",comment:"<p>还在攻击还在攻击</p>"},{floor:"3634",username:"kngchau",time:"2023-11-26 12:56",reply:"",comment:`<p><img src="/image/3634.jpg" style="zoom:33%;" /> </p>
    <p>没错，小祥的前任</p>`},{floor:"3635",username:"Ryodaze",time:"2023-11-26 12:57",reply:"",comment:`<p>其实我还觉得21个少了啊</p>
    <p>我回回去livehouse都看见他们主唱搞诗朗诵，偶尔有个猫来弹吉他，没过多久就看见猫把前台小妹抓来打鼓，又过了几天她们干脆从台下抓了个人上去即兴，唱完就看见四个人嗷嗷哭</p>
    <p>整这么好的活我反正不介意点个关注的</p>`},{floor:"3641",username:"kngchau",time:"2023-11-26 12:59",reply:"",comment:`<p><img src="/image/3641-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3641-2.jpg" style="zoom:33%;" /> </p>
    <p>这里有点微妙呀，初华的备注是海玲酱，海玲好像在学校在乐队都叫三角桑</p>
    <p>海玲和初华前后桌吧，这种关系的女同学，早就应该叫初华酱了吧</p>
    <p>这跟初华的称呼也太官方了吧，感觉就是把初华当作非常普通的同事关系？</p>
    <p>海玲这个人设有意思起来了</p>`},{floor:"3646",username:"Odd0929",time:"2023-11-26 13:01",reply:"3641",comment:`<p>海鈴應該是故意和所有人都保持距離的</p>
    <p>連立希她都是叫立希さん</p>`},{floor:"3652",username:"萧萧笙歌纷飞雨",time:"2023-11-26 13:03",reply:"3641",comment:`<p>回旋镖式的提问：长发女生在接电话时一般都会把头发拨开吗？不拨开就像初华这样接，耳朵会不会不太舒服？ <del>还是说特意撩开头发接电话本来就是种不太对劲的行为(对比第七集结尾)</del> </p>
    <p>我很好奇，chaurin能给我分析一哈你的看法不~</p>`},{floor:"3654",username:"摸鱼船长",time:"2023-11-26 13:03",reply:"",comment:"<p>顺带一提，初华来看过三次星空，除了第十集那次，她都选的是靠近过道的位置而且明显会放座椅，只能说初华深不可测</p>"},{floor:"3655",username:"kngchau",time:"2023-11-26 13:04",reply:"",comment:`<p><img src="/image/3655.jpg" style="zoom:33%;" /> </p>
    <p>我看不懂了，之前我记得第8话祥子是从家里换了衣服出来的啊</p>
    <p>这里看起来也有这个意思</p>
    <p>可是既然家里没破产为啥要出去打工呢？</p>`},{floor:"3657",username:"kngchau",time:"2023-11-26 13:06",reply:"3652",comment:`<p>隔着头发一样能听得到呀</p>
    <p>这个无所谓吧？我是习惯撩开的，但是如果冬天手机太凉了我就愿意隔着头发，不然冰耳朵</p>`},{floor:"3660",username:"kngchau",time:"2023-11-26 13:08",reply:"",comment:`<p><img src="/image/3660-1.jpg" style="zoom:33%;" /> </p>
    <p><img src="/image/3660-2.jpg" style="zoom:33%;" /> </p>
    <p>哇哦！好大的剧场，那么一大串赞助商，这ave mujica完全不是我mygo小糊团能比的啊</p>`},{floor:"3662",username:"71和EU",time:"2023-11-26 13:10",reply:"3660",comment:"<p>别急别急，谁说网吧队就不是英雄</p>"},{floor:"3665",username:"imfyz",time:"2023-11-26 13:10",reply:"",comment:"<p>饥饿的长颈鹿甚至逐个研究了赞助商名字</p>"},{floor:"3667",username:"kngchau",time:"2023-11-26 13:11",reply:"",comment:`<p><img src="/image/3667.jpg" style="zoom:33%;" /> </p>
    <p>所以ave mujica的世界观类似于V播？</p>
    <p>中之人不能暴露的那种？</p>
    <p>有点意思嗷</p>
    <p>你们说后面会不会有中之人被换的戏码(我瞎说的啊哈哈哈</p>`},{floor:"3669",username:"71和EU",time:"2023-11-26 13:12",reply:"3667",comment:"<p>其实更可能是在炒噱头，等噱头炒够了再自己开盒爆一次大的</p>"},{floor:"3670",username:"萧萧笙歌纷飞雨",time:"2023-11-26 13:12",reply:"3667",comment:"<p>怎么到了mujica还在考虑优化(恼</p>"},{floor:"3671",username:"枞枞那年",time:"2023-11-26 13:12",reply:"3667",comment:"<p>好好好，14话这不就来了吗</p>"},{floor:"3678",username:"kngchau",time:"2023-11-26 13:15",reply:"",comment:`<p><img src="/image/3678.jpg" style="zoom:33%;" /> </p>
    <p>说得好，还有sakiko</p>`},{floor:"3680",username:"几只鱼",time:"2023-11-26 13:16",reply:"3678",comment:"<p>昵称出来只有团长被盒了</p>"},{floor:"3683",username:"iridium945",time:"2023-11-26 13:16",reply:"",comment:"<p>全队都起了外号结果只有老大被捕了.jpg</p>"},{floor:"3685",username:"kngchau",time:"2023-11-26 13:17",reply:"",comment:`<p><img src="/image/3685.jpg" style="zoom:33%;" /> </p>
    <p>不是，所以nyamu的设定不会也是高中生吧</p>
    <p>你们邦邦世界观里就是，UP主、乐队，这些妹子都是高中生是吧</p>
    <p><del>这tm八岁？.jpg</del></p>`},{floor:"3689",username:"kngchau",time:"2023-11-26 13:18",reply:"",comment:"<p>好啦好啦，旁边这位不让我暂停啦，那我先把live看完哦~</p>"},{floor:"3703",username:"kngchau",time:"2023-11-26 13:39",reply:"",comment:`<p>呜哇，看完ave mujica的舞台剧和live了</p>
    <p>这也太太太太大场面了吧</p>
    <p>感受到了3D运镜和这音乐性的结合，真是太完美了！</p>
    <p>彷佛白嫖了一场大剧场真人演出</p>`},{floor:"3706",username:"kngchau",time:"2023-11-26 13:41",reply:"",comment:"<p>之前就看海玲用五弦贝斯，睦拿着七弦吉他，果然是用来玩这种曲风的啊</p>"},{floor:"3707",username:"乙凌全巳袁史",time:"2023-11-26 13:41",reply:"",comment:"<p>恭喜首次看完live没有哭哭</p>"},{floor:"3713",username:"kngchau",time:"2023-11-26 13:44",reply:"",comment:`<p>不过总感觉她们这些代号都是别有深意啊</p>
    <p><img src="/image/3713.jpg" style="zoom:33%;" /> </p>
    <p>这里真的有点心疼睦了，后续编剧下手轻点啊</p>`},{floor:"3715",username:"kngchau",time:"2023-11-26 13:44",reply:"",comment:`<p>另外！！！！</p>
    <p>姐妹说！！！！</p>
    <p>我完全信了！！！</p>
    <p><img src="/image/3715.jpg" style="zoom:33%;" /> </p>
    <p>太真了</p>
    <p>这句出来整个头皮发麻</p>`},{floor:"3716",username:"火龙果叉烧肠粉",time:"2023-11-26 13:47",reply:"3715",comment:"<p>追剧的时候大家看到这一句也癫了</p>"},{floor:"3719",username:"71和EU",time:"2023-11-26 13:48",reply:"3715",comment:"<p>信了对吧，那我跟你说，睦跟祥子出生日期不同，睦比祥子大一个月</p>"},{floor:"3721",username:"柠檬律律子",time:"2023-11-26 13:49",reply:"",comment:"<p>这里祥子在占睦头的便宜 明明睦头比祥子大</p>"},{floor:"3723",username:"kngchau",time:"2023-11-26 13:49",reply:"",comment:`<p><img src="/image/3723.jpg" style="zoom:33%;" /> </p>
    <p>话说我也觉得睦的吉他比初华弹得好吧</p>
    <p>初华还是主唱，按理说把主音吉他和solo都分给睦比较好吧？</p>
    <p>虽然没做过主唱，但是又主音又solo还主唱这也太厉害了吧，还是说邦邦世界观这很寻常？</p>`},{floor:"3727",username:"几只鱼",time:"2023-11-26 13:51",reply:"3723",comment:"<p>看一个up讲过，睦头弹金属的节奏整个谱子铺满了，初华只用solo就行，初华弹节奏那是真忙不过来了</p>"},{floor:"3728",username:"kngchau",time:"2023-11-26 13:53",reply:"",comment:`<p><img src="/image/3728.jpg" style="zoom:33%;" /> </p>
    <p>不是，对初华的震惊+1</p>
    <p>在ave mujica做主唱+主音吉他</p>
    <p>还兼着sumimi？</p>
    <p>我还以为她已经把mana酱剪切了呢</p>`},{floor:"3732",username:"kngchau",time:"2023-11-26 13:55",reply:"",comment:"<p>炸裂</p>"},{floor:"3734",username:"七色。",time:"2023-11-26 13:55",reply:"3728",comment:`<p>惠子，我们分手吧</p>
    <p>初华你在说什么啊？而且我是真奈啊</p>
    <p>啊，没事，真奈也分.jpg</p>`},{floor:"3737",username:"西园寺凹凹子",time:"2023-11-26 13:57",reply:"",comment:`<p>回家之后在明亮的客厅中见到温柔父亲的高松灯
      出列！</p>`},{floor:"3738",username:"kngchau",time:"2023-11-26 13:58",reply:"",comment:`<p>不是</p>
    <p>等一下</p>
    <p>我又被你们耍了？？？？</p>
    <p>这是半年番是吧？</p>
    <p>快把后面的资源给我交出来啊！！！！</p>`},{floor:"3739",username:"Mocalm",time:"2023-11-26 13:58",reply:"",comment:"<p>好了楼主可以开始给我们剧透avemujica讲什么了</p>"},{floor:"3741",username:"hejuujur",time:"2023-11-26 13:58",reply:"3738",comment:"<p>这不是等你写嘛</p>"},{floor:"3747",username:"羽波",time:"2023-11-26 13:59",reply:"3738",comment:"<p>笔给你，现在轮到你写给我们看了</p>"},{floor:"3751",username:"kngchau",time:"2023-11-26 14:01",reply:"",comment:`<p>额，把她打了一顿她给我搜了百科</p>
    <p>真的只有13话啊</p>
    <p>这断章断的……</p>`},{floor:"3752",username:"顾秋声",time:"2023-11-26 14:01",reply:"",comment:"<p>现在，你也是我们了。</p>"},{floor:"3753",username:"Winter丶act",time:"2023-11-26 14:01",reply:"",comment:"<p>世界上又多了一个空虚了人。</p>"},{floor:"3760",username:"Ryodaze",time:"2023-11-26 14:02",reply:"3738",comment:`<p>这可是完结超过两个月的番剧，为什么能有现在这个热度楼主现在应该能体会到了</p>
    <p>&#39;普通&#39;とか&#39;当たり前&#39;ってなんだろう</p>`},{floor:"3762",username:"羽波",time:"2023-11-26 14:03",reply:"",comment:`<p>可以把大祥老师角色曲端上来了
      [[泛式/剧情MAD]祝你幸福，这一次我没有&quot;说谎 &quot;...... (mygo/祥子)] <a
        href='https://www.bilibili.com/video/BV1oG41127aM/?share_source=copy_web&amp;vd_source=27478e7c1aff1a4272075570f639c1b6'
        target='_blank'
        class='url'>https://www.bilibili.com/video/BV1oG41127aM/?share_source=copy_web&vd_source=27478e7c1aff1a4272075570f639c1b6</a>▸
      [[AMV/It&#39;s MyGO]大祥老师新曲《假如有一天我变得很有钱》] <a
        href='https://www.bilibili.com/video/BV16z4y157pq/?share_source=copy_web&amp;vd_source=27478e7c1aff1a4272075570f639c1b6'
        target='_blank'
        class='url'>https://www.bilibili.com/video/BV16z4y157pq/?share_source=copy_web&vd_source=27478e7c1aff1a4272075570f639c1b6</a>▸
    </p>
    <p>然后两首Distance按投稿顺序吧
      [[填词]音Distance -“英国的字我 认不得几个”] <a
        href='https://www.bilibili.com/video/BV1Bc411X7fg/?share_source=copy_web&amp;vd_source=27478e7c1aff1a4272075570f639c1b6'
        target='_blank'
        class='url'>https://www.bilibili.com/video/BV1Bc411X7fg/?share_source=copy_web&vd_source=27478e7c1aff1a4272075570f639c1b6</a>▸
      [[填词]祥Distance -“我兼职客服机构 把青春年华出售”] <a
        href='https://www.bilibili.com/video/BV18C4y1E712/?share_source=copy_web&amp;vd_source=27478e7c1aff1a4272075570f639c1b6'
        target='_blank'
        class='url'>https://www.bilibili.com/video/BV18C4y1E712/?share_source=copy_web&vd_source=27478e7c1aff1a4272075570f639c1b6</a>▸
    </p>`},{floor:"3772",username:"kngchau",time:"2023-11-26 14:07",reply:"",comment:`<p>我外卖到啦，我边吃边看你们回复哦</p>
    <p>一会找时间写个完结感想</p>
    <p>总之先谢谢大家！之前漏掉的回复我都会看的！</p>`},{floor:"3774",username:"几只鱼",time:"2023-11-26 14:08",reply:"",comment:`<p><img src="/image/3774.jpg" style="zoom:90%;" /> </p>
    <p>关于祥子的谜题</p>
    <p>live前海报里很显著的tgw物产正好跟丰川(togawa)对应，说明丰川家应该是没有破产的，那为什么祥子落到这个地步了呢</p>
    <p>(所有细节都是go友挖掘，但是背后的细节迄今为止没有公开)</p>`},{floor:"3781",username:"kngchau",time:"2023-11-26 14:13",reply:"3774",comment:`<p>哇你们真是显微镜看番啊！！</p>
    <p>这都能发现！</p>
    <p>所以祥子家真的没有破产，但是爸爸被赶出来了，但是祥子自己还能回家</p>
    <p>这是，爸妈离婚了？然后爸爸整天酗酒，祥子赚钱养他？</p>
    <p>这还真是在背负别人的人生啊哇</p>`},{floor:"3782",username:"kngchau",time:"2023-11-26 14:14",reply:"",comment:"<p>话说我现在终于被解禁可以看这个论坛的其他帖子了！！开心</p>"},{floor:"3783",username:"乙凌全巳袁史",time:"2023-11-26 14:15",reply:"3782",comment:"<p>答案是此前过度沉迷网上冲浪的soyo在和爱音同居后被爱音进行了冲浪管制</p>"},{floor:"3788",username:"几只鱼",time:"2023-11-26 14:20",reply:"",comment:`<p>欢迎新长颈鹿</p>
    <p>6zsbd
      2zsbd
      2zsbd
      2zsbd
      6zsbd
      3zsbd
      4zsbd
      0zsbd
      5zsbd</p>
    <p>(借chau酱宝地，chau酱也可以来玩)</p>`},{floor:"3789",username:"kngchau",time:"2023-11-26 14:22",reply:"3788",comment:`<p>我知道你们有个群，但是她不让我进</p>
    <p>她说我去了你们聊天会比较拘束</p>
    <p>那就算啦，你们开开心心聊才重要，我就不去给大家添麻烦啦</p>`},{floor:"3790",username:"『VRT』",time:"2023-11-26 14:23",reply:"",comment:`<p>完结撒花!这11月19号开始到如今快4000楼的直播帖要完结了，也不知是该高兴还是伤心，这感觉就像mygo刚结束时那样，狂欢之后只剩空虚 <del>靠二创和假药度日</del> 。在这里跟着chaurin和 爱音
      伥颈鹿们又完成了一次对mygo的“再演”，耀眼的舞台总是那么令人着迷，在这段时间所经历的一切，笑容、感动、泪水 爱素 ，更是让人无法忘怀，希望着能永远停留在这段美好的时光，而面对迷茫的未来，选择止步不前。</p>
    <p>但“就算迷茫，也要前进”再闪耀的舞台终究也会有燃尽的一天，只要愿意寻找，舞台便永远存在 <del>但真的忘不了mygo了</del></p>
    <p>所以Ave_Mujica什么时候开播啊！实在受不了了 <del>要不看下少女歌剧</del> 最后还是感谢chaurin和ano酱以及各位伥颈鹿，带来的这精彩的直播帖</p>`},{floor:"3794",username:"黑堂隐月",time:"2023-11-26 14:26",reply:"",comment:`<p>完结撒花~！</p>
    <p>《一天一集模拟追番》，共计13集，用时7天 哪里不对</p>
    <p>你知道我这一星期是怎么过来的吗？</p>
    <p>我这一星期上班都带着痴笑差点没被同事当神经病</p>
    <p>全新的视角带来了数个新的观点与细节，受益颇丰</p>
    <p>感谢楼主和朋友A这几天为我们带来的快乐</p>
    <p>好像有很多话想说</p>
    <p>但一股脑全吐出来又太过重了</p>
    <p>所以就简单点概括吧——</p>
    <p>chaurin love~</p>
    <p>笔芯~</p>
    <p>现在我又是这世界上最空虚的人了</p>`},{floor:"3795",username:"枞枞那年",time:"2023-11-26 14:27",reply:"",comment:"<p>那赶快把ano酱账号爆出来吧，不然要开始狼人杀了</p>"},{floor:"3797",username:"黑堂隐月",time:"2023-11-26 14:31",reply:"",comment:`<p>行了行了
      人小姑娘都明确拒绝了就别提群的事了</p>
    <p><del>之后可以偷偷进来没人知道谁是谁</del></p>`},{floor:"3810",username:"顾秋声",time:"2023-11-26 14:44",reply:"",comment:`<p>0.这是一场震撼人心的旅程。</p>
    <p>1.在迷子中，我们通常开着一种玩笑：
      “给我一个没看过mygo的脑子吧。”
      但在这里，这不是一句玩笑。
      一天一集的直播，似乎是个常见的噱头，每个人都知道，这样的标题会带来怎样的节目效果。
      于是长颈鹿们本能地涌来，以为这是nga的直播潮里，又一个即将成为伥鬼的受害者。只追逐着新鲜的体验，慰藉自己在mygo完结两月后仍然充盈的空虚。
      很快，事实证明我们错了，错得心甘情愿。</p>
    <p>2.敏感而温柔，遗憾而幸福。跟着楼主chau桑的视角，我们仿佛也成为了长崎素世本人，跟着，用她的角度，来观看这个我们熟悉至极，自以为已经纠缠进我们魂灵的故事。
      就像是在素希灯的心里，反复萦回的crychic的残篇一样。就像是ep3那珍贵至极的高松灯视角一样，我们看到一个全新的长崎素世，一个让人惊讶，陌生，细想下来却丝丝入扣，别无选择的女孩。
      于是我们欢笑，为chau桑每一枚抛出的回旋镖，为她每一次对剧情的精准又不那么精准的判断，为她每一句精致的分析，为她每一次对anon酱的攻击，为楼主桑变成soyorin，最后成为了独一无二的chaurin。
      到了这时，长颈鹿们时时疑惑：这不是在聊x集么？为什么会有x+1集的感觉了？
      给了我一个没看过mygo的脑子。
      在时候，我有了这个想法。
      欢迎收看《bangdream it&#39;s mygo!!!!!》之
      《茶屋少女的呢喃》</p>
    <p>3.故事之外。
      不可否认的是，chaurin和友人桑的互动，就像抹茶芭菲的抹茶酱一样，同样是这故事不可或缺的部分。
      不管是第九集的断章，之后每一天我们看到她们亲昵密切的来往，在chaurin哭泣的时候突然上身和长颈鹿们的互动，都为这 姛 栋直播楼平添三分颜色。
      或许在chaurin和友人桑眼里，是非常平凡的渺小日常吧，但在我们看来，在遥远星辰上的渺小日常，同样闪耀无比。长颈鹿或许寄托了太多怀念，太多羡慕，不自觉地将自己求而不得的东西，擅自投影在两个姑娘的身上。
      因为我们在缥缈虚浮的互联网上，看到的其实都是自己。
      以这虚无的善意，祝chaurin和朋友桑今后会积累更多幸福的瞬间，长颈鹿们也要身体健康啊。</p>
    <p>4.最后，我们铭记感激。
      是她们的大度和善良，容忍了长颈鹿们的狂欢。长颈鹿们也尽量收敛戾气，为了这来之不易的美好。
      一场微缩版的《mygo》，也终于在这初冬时节落下帷幕。
      有人将会记住，在等待《AveMujica》这物料稀少，青黄不接的时节，有一位狡猾可爱的友人桑，用她的一顿饭和一个故事，填满了整个冬天。
      我大概……永远也不会忘记chaurin的直播楼了。</p>`},{floor:"3820",username:"相川陽滝",time:"2023-11-26 15:30",reply:"",comment:`<p>鞋子全都湿透了，但还是淋着雨去见c团的祥子。</p>
    <p>那时候祥子还是初中生，连饮料机都是第一次见的大小姐，第一份简历是怎么投递的？又是怎么被拒绝的？</p>
    <p>雇佣十五六岁女孩子的公司会签正经合同吗？</p>
    <p>乘深夜电车还不坐座位，是害怕自己太疲惫睡着坐过站吗？</p>
    <p>出租屋里除了摆放的酒瓶外都很干净，是她晚上回家了还要收拾吗？</p>
    <p>最后画面的一个小角落里有被褥，祥子就睡在那里吗？</p>
    <p>早饭和午饭的便当，也是她自己起早做的吗，还是便利店买的速食呢？</p>
    <p>在空教室里练钢琴见到爱音，第一句话问“你是管弦部成员吗？”是因为以前被提醒过吗？</p>
    <p>是怎么学会交水电费的呢，会不会直到水电费单子贴到门上才知道有这回事呢？又是怎么拉赞助办乐队的呢？</p>
    <p>祥子，你以后会变得幸福吗。</p>`},{floor:"3821",username:"kngchau",time:"2023-11-26 15:42",reply:"",comment:`<p>完结感言要等你们的友人A不在的时候再写，不让她偷看！</p>
    <p>不过我先发你们的友人A给我总结的几个你们关心的问题啊。</p>
    <p>名字是怎么来的？</p>
    <p>她给我注册的， <del>里面有点无聊的小心思</del> 你们当作滚键盘就好啦！</p>
    <p>预测一下ave mujica剧情？</p>
    <p>这个我就不说啦！我才看了一遍，看了几个帖子感觉大家都是逐帧看了好多遍的，我肯定说得不好，大家去看大佬们的帖子嘛！我这个是直播帖耶，大家在这儿快乐聊天为主嘛！</p>
    <p>我们两个都是直女吗？</p>
    <p>当然都是直女啦！我们两个虽然现在单身，但是我有过男朋友，她虽然还没有过但是 <del>有不少人追</del> ，不愁没法把她嫁出去！</p>
    <p>我们两个在同居吗？</p>
    <p>闺蜜睡在一起犯法嘛！？哼！</p>
    <p>介意楼里磕CP或者二创吗？</p>
    <p>之前说过啦。大家磕我们俩CP其实根本就是在磕爱音和soyo代餐啦！不过只要大家玩得开心，不吵架，大家搞什么我们都不反对啦！</p>
    <p>你们有啥想聊的都可以聊都可以问，我看到觉得不涉及隐私就会回啦！</p>`},{floor:"3823",username:"Develde",time:"2023-11-26 15:43",reply:"",comment:"<p>羡慕楼主mujica开播后会继续直播吗，感觉你的许多视角真的很有趣很独特</p>"},{floor:"3825",username:"kngchau",time:"2023-11-26 15:49",reply:"3823",comment:"<p>可以呀！我也好期待ave mujica的，到时候有时间就来跟大家讨论呀！</p>"},{floor:"3826",username:"kngchau",time:"2023-11-26 15:51",reply:"3810",comment:`<p>谢谢你！好细腻的笔触啊！看得我都有点感动了！</p>
    <p>我们真的就是非常非常普通的两个女孩子，而且我还是个泪点低又别扭啥也做不好的那种，真的没想到来跟大家交流一下观后感会收获大家这么多评论，真的非常受宠若惊！</p>`},{floor:"3827",username:"kngchau",time:"2023-11-26 15:54",reply:"3783",comment:`<p>她说你这个发言有损她形象</p>
    <p>那，的确我也觉得追剧的时候看到其他帖子万一剧透了就不好了</p>
    <p>可是就是她不让我看的嘛！！</p>
    <p>不光不让我看NGA，微博小红书知乎贴吧都不让看，哼！</p>`},{floor:"3830",username:"而今听雨",time:"2023-11-26 16:00",reply:"",comment:`<p>长颈鹿集会！！</p>
    <p>请问楼主第9话的时候后面没了是什么体验</p>
    <p>(哪壶不开提哪壶</p>`},{floor:"3840",username:"kngchau",time:"2023-11-26 16:14",reply:"",comment:`<p>我仔细想了想这个问题</p>
    <p>这里其实是soyo提问提得不好</p>
    <p>睦对于soyo来说是一个很特殊的人，既是C团朋友，又在C团解散之后一直陪她，更是目睹了她挽回C团的过程</p>
    <p>这个时候在她加入mygo之后，问睦live怎么样，睦怎么回答都有可能被误会</p>
    <p>换句话说，睦已经主动来听live，送来黄瓜了，soyo应该很清楚睦在想什么</p>
    <p>这个时候不应该去问live怎么样，应该过去说谢谢，抱抱睦，甚至跟睦道个歉，说之前真的很对不起，如果拉不下脸来道歉，那就抱抱好了！</p>
    <p>如果真的问睦应该怎么回答“live怎么样”这个问题，我觉得要是我可能会说“すごくいいと思う”或者直接“いいと思う”或者“いいよ”，这种说法应该就很难被误会是评价soyo加入mygo了，这是直接评价live才会说的句子</p>
    <p>不过无论如何，这里的问题可能真的出在soyo的问题上，可能是编剧故意设的死局</p>
    <p>不过这其实只是个小误会，soyo不是那种小心眼的姑娘，尤其是她知道这真的只是误会，真的只是她听起来这句话比较刺耳而已，睦没有这个意思，那么后面要修复这段关系其实不难啦</p>`},{floor:"3842",username:"kngchau",time:"2023-11-26 16:22",reply:"3830",comment:`<p>你说这个我就不困了！</p>
    <p>当时我看完她给我打电话说你别看第10集了今晚早点睡吧，明天请你吃饭</p>
    <p>我跟她说了我忍不住了我今晚就要看</p>
    <p>她说那行你看吧明天不管你饭了</p>
    <p>然后我打开写着第10集的文件，里面md还是第9集！后面几集全都是第九集！</p>
    <p>我就来楼里要资源了，结果没人给！</p>
    <p>我就冲到她宿舍把人打了一顿！</p>
    <p>不过她后来的解释是担心我看完第10集会哭，所以不想让我那晚看，她明早来宿舍陪我看。现在看来的确说得有道理。</p>
    <p>我就当是这么回事了。</p>
    <p>你最好是！</p>`},{floor:"3843",username:"今天SBR动画化了吗",time:"2023-11-26 16:26",reply:"",comment:"<p>推荐二创的话怎么少的了同人文呢，首推《沧海行》，《无尽春》和《错身巷》，三篇都是ansy，对于堪比soyo本人下场的楼主来说更是不容错过呀</p>"},{floor:"3853",username:"乙凌全巳袁史",time:"2023-11-26 16:36",reply:"3827",comment:`<p>一想到你家友人A可能就在群里监视 <del>上面的粉丝来稿环节有好几个问题我印象里都没有在楼里公开提出过</del> ，我就不寒而栗，仿佛自己的这层匿名都失去了意义</p>
    <p>顺带一提冲浪soyo的设定来自于监督访谈，访谈里有很多有意思 <del>但不知为何都被你提前预判了</del> 的设定，记得看哦</p>`},{floor:"3854",username:"typeomicron",time:"2023-11-26 16:38",reply:"",comment:`<p>真的，感谢这一段时间的陪伴！chaurin也是大家也是，都辛苦了！</p>
    <p>理性分析的部分在别处做了，这里就用感性来随便说点什么吧</p>
    <p>首先让我狠狠夸一下chaurin和友人A
      这一层楼的直播效果，虽然有偶然的成分，但最重要的还是二位的功劳
      chaurin的敏感细心使得不管是逻辑上还是感情线索上的伏笔都能够轻易察觉
      良好的同理心也让直播楼多出了仿佛本人亲临一样的节目效果
      然后是友人A，作为chaurin的经纪人真的尽心尽责
      本身就很懂节目效果的基础上，也能看得出并不是单纯的坑人，而是真的有着闪耀的友谊
      此外对大家进行三创(？)的宽容也进一步导致了欢乐度极具上升</p>
    <p>可以说，是收获这么多关注和喜爱，是你们应得的事情
      我觉得率直地去接受就好了哦！</p>
    <p>然后再谈谈作为观众这边的视角
      这样一场盛大的舞台剧，每一名观众都是演出的一部分
      长颈鹿群的建立可以说是在恰到好处的时间点上，如果没有这个神秘地下组织存在，这楼的氛围很可能不是现在的样子
      虽然中途也略有不愉快，但最终还是处置得不错
      容我辩解一下，虽然看起来大家都癫了，但本质都是温柔的人
      甚至我还因为这件事认识了新的长颈鹿伙伴，也算是收获颇丰了</p>
    <p>恶意和好意都会互相传递，最终会产生悲剧或是喜剧
      crychic的覆灭是前者，而mygo的成立就是后者了
      而在这里我也看见了大家的好意，chaurin和友人A的好意，如果没有这样的东西，那么这种环境一定是无法成立的</p>
    <p><del>所以我偷偷摸摸地点了chaurin的关注</del>
      这只是因为很开心而已，如果以后在别的地方看见你的话一定也会让心情变好的，我有着这样的期待</p>
    <p>最后是出于私心的安利时间
      作为一个狠狠代入灯的人我写了有关灯的解析(<a href='https://bbs.nga.cn/read.php?tid=37648944' target='_blank'
        class='url'>https://bbs.nga.cn/read.php?tid=37648944</a>)，建议看里面的视频版
      以及，因为这个直播贴的关系进一步写了一篇对mygo和长颈鹿们的解析(<a href='https://bbs.nga.cn/read.php?tid=38489268' target='_blank'
        class='url'>https://bbs.nga.cn/read.php?tid=38489268</a>)，虽然前面已经贴过一次了</p>
    <p>我认为chaurin应该是能够感受到的，所以我也希望将我的想法传达给你，正如同你勇敢地传达给了我一样。</p>
    <p>拨动钟表的发条，让时光回到一圈之前。
      然后重新听着咔嚓咔嚓的鸣响，看着指针再度运转。
      滴答，滴答，指向0点。
      埋藏在昨日的舞会结束了，属于今日的时光才刚刚开始。
      幕布拉下，客人离席，被吹熄的蜡烛融入月光。
      唯独残留下的东西化作一双水晶鞋，温柔地包裹住灰姑娘的趾尖。</p>
    <p>お幸せに。</p>`},{floor:"3858",username:"kngchau",time:"2023-11-26 17:00",reply:"3853",comment:`<p>访谈我看完第一时间友人A就让我去看了</p>
    <p>很震撼，惊讶于制作组的细节掌控</p>
    <p>坦白讲很多东西与其说是我看得仔细不如说是我有这些经历</p>
    <p>比如你们老是说的那个巧克力盒的问题，真的很有既视感</p>
    <p>前段时间买了一箱子橙子给朋友分，但是宿舍没有塑料袋只有垃圾袋，情急之下找了个小香的盒子给朋友装了几个，被她吐槽了你竟然拿小香的盒子装橙子</p>
    <p>访谈很多东西都解释了我之前没注意到的东西，看得很享受！</p>
    <p>很感谢那个翻译帖楼主的翻译！</p>`},{floor:"3866",username:"kngchau",time:"2023-11-26 18:07",reply:"",comment:`<p>好啦，那我要给这个帖暂时画个休止符啦</p>
    <p>很多楼友说度过了快乐的一周，我觉得我过去的这周更是过的无比奇妙和精彩</p>
    <p>像是有很多朋友陪着我，品味了一坛珍藏多年的佳酿</p>
    <p>我感觉遇到了目前为止我人生中感触最深的那部番剧，而这部番剧还是跟论坛里那么多朋友，以及身边这位友人A一起看完的</p>
    <p>
      挺久之前了吧，她就说要给我推荐一个番，最近很火，而且说里面有个角色跟我经历非常像，我第一反应就是不看。我的过去，她陪我经历过一次可能觉得有些波澜，但是放在番剧里就是平平无奇的流水账，顶多就是青春伤痛文学，这种会连载在爱格上的小说看得够多了，能有什么意思呢？说实在的对这种推荐我是有点逆反的。
    </p>
    <p>
      刚好最近比较空闲，她又来软磨硬泡，还得寸进尺说请我吃饭让我来NGA直播。说实话我之前很偶尔会来NGA看看帖子，但是根本没有账号，其实我在互联网可能只有小红书偶尔发点吃的的照片。我身边，包括舍友在内，都不看动漫的，所以也很少跟人聊这些。但是她跟我说账号都帮我注册好了，让我等两天就可以来播了，一天就看一集也花不了多长时间。我冲着她那顿日料就同意了。
    </p>
    <p>其实一开始我也懒得打那么多字，楼里前面有的帖子都是我说了她整理了帮我发的。我不是一个很喜欢在互联网发言的人，平时只看不说。这是我第一次在互联网公开发表这么多言论。</p>
    <p>
      但是没想到坛友人都很好，都很热情友善地跟我互动，我也开始愿意多聊聊我的想法了。再加上，你们忽悠我先看1-3真是阴谋诡计！看到第3话第一视角代入灯那里，沉浸感完全出来了，我真的深深被这部情感细腻的番吸引了。也有可能是它勾起了我的一些回忆，也有可能本身它就能引起任何有类似经历的人共情，总之我完全被这部番俘获了。
    </p>
    <p>在某人的要求下我也写了一些剧情预测，当然绝大部分都没对哈哈哈哈，但是感觉这样边讨论，边看番，边聊天真的很有趣，我其实很少跟那么多人一起聊同一个话题。之前说过了我很宅，没什么太多朋友，除了她基本没有人聊番剧话题。</p>
    <p>
      印象深刻的是楼里三番五次跟我说类似于“手牵手互诉衷肠”之类的话，现在想想真的好好笑。虽然看的时候觉得很震惊，但是看完真的感觉楼友都很有才，也都不是恶意的，大家都是在很友善的开玩笑而已，就越来越喜欢这个楼了，所以后面愿意说的话也越来越多。
    </p>
    <p>
      但是要再跟大家道个歉的就是第10话那里，虽然我泪点低，情绪很不稳定，但是第10话那里真的是哭得不行了，看了live和几个楼里发的二创，又开始想以前的事，越想越想哭，哭但是还想看，看完就更忍不住，前前后后哭了得有一个小时，还好那天上午舍友都有课，只有她在，虽然舍友们人都很好，但是她们应该也不太能理解我看个动漫哭成这样。不过当时真是把她也吓坏了，当时跟我说这个楼就这么鸽了，而且反正也是个小号。后来那一整天情绪都很差，经常想到一些事就开始抹眼泪，她很不放心我，就干脆带我回家住了。当然我这也不是第一次让她担心了，但是这次是因为看动漫属实是没想到。
    </p>
    <p>
      后来大家开始莫名其妙地磕cp，还把我们代入soyo和爱音我着实是没想到哈哈哈。我感觉我们两个就跟其他的闺蜜没有什么区别，两个人都是普通的女孩子，大概因为家都在本地，所以没课的时候经常凑在一起看剧看番逛街或者发呆。虽然两个人都知根知底，所以也经常开一些没底线的玩笑什么的，但是看你们开始磕CP，我实话实说，还是吓了一跳的
    </p>
    <p>不过一来，其实大家本质上只是把我们代入soyo和爱音，还是在磕她们两个，二来大家也都是很友善很善良的人呀。所以我们其实都没有阻止大家的想法。</p>
    <p>如果大家能因为我们，而让自己的生活中多那么一份快乐，那都是一件很让人高兴的事啊。</p>
    <p>因为我们的存在，而让远在千里之外的陌生人，在忙碌的工作、学习和生活里，多一次会心一笑，这件事想想都让我觉得高兴。</p>
    <p>
      大概是像我一样的女孩子都不太可能来实时直播看番想法吧(其实一周之前的我也完全想不到我真的会做这种事)，所以我的很多看法似乎很让大家觉得新奇，当然大家的很多看法我也是让我没想到的。我就觉得MyGO真是一部制作得好精彩的作品，它能让不同性格的人看了，产生那么多迥然不同的体验，而且每个人都只能理解到这部番的一个侧面。只有将大家的理解拼凑起来，才能完整地解读这个故事，我觉得这简直就像是一个拼图游戏，我很高兴能作为参与者之一！
    </p>
    <p>
      当然虽然说了很多次，但是还要再说一次，大家不要觉得我跟soyo想法是一样的，我只是表达我的看法，而且还是第一次看的看法，虽然我也惊讶于竟然会有一个塑造得跟挺相似的角色，但是她也完全不是我，所以我的感受也完全不等于她的感受。我知道你们偷偷叫我soyo楼主，叫她ano酱，这当然没问题，但是这是开玩笑哦！
    </p>
    <p>这个番剧在我意料之外的地方完结了，完结得意料之外，又情理之中。就这样，朋友们陪伴我度过的这段旅途，这段时光，也终于要到终点了。</p>
    <p>
      我一定要发自真心地感谢楼里的每一位朋友，和默默关注这个帖子的每一个坛友。不怕你们笑话，我第一次在那么多人面前说这么多话，哪怕是网上。我也是第一次跟陌生人聊动漫，第一次跟素未谋面的人吐露我的真情实感，甚至第一次让那么多人知道我在哭。
    </p>
    <p>但是大家没有嘲笑我，大家都特别善良，语气都十分柔和，甚至在关心我的身体，关心我的情绪，看得我好几次差点绷不住哭出来。</p>
    <p>在今天这个社会，尤其是戾气那么重的互联网，能看到那么多温柔善良的人，真的好开心好感动。我会珍惜这份来之不易的感动的。</p>
    <p>这个楼的直播内容就到此为止啦，不过我也不想太煽情啦，感觉我又开始多愁善感的毛病了！</p>
    <p>大家如果哪天想起来，还可以回来翻翻这个楼里的快乐，还可以来底下回复，找我聊聊天！MyGO的故事结束啦，但是我们还是共享过同一段旅程同一份快乐的朋友不是吗？</p>
    <p>− 下面是我的小秘密啦，你们就不要看啦！！！ ...
      致某个友人A：</p>
    <p>虽然感觉发在这里很肉麻，但是，恐怕私聊我更不会说这些，我觉得这里是个契机想趁你不在写给你。</p>
    <p>不要指望我会承认我写过这些！！你看完我就要删了！</p>
    <p>我一次都没有跟你说过谢谢，从小到大，感觉我还挺言不由衷的。</p>
    <p>谢谢你。</p>
    <p>其实我都知道，我人生中每一次，每一次挫折、受伤你都在，只要我需要，你都能第一时间出现在我身边，甚至不惜跨越三百公里当晚跑来跟我见面。</p>
    <p>我每次伤心难过能想到的第一个人，恐怕也是唯一一个人也只有你了。</p>
    <p>其实我不太会讲这些煽情的话啦，或许写完这些我今晚马上就会后悔，但是你最好是在我后悔之前把这些看了。</p>
    <p>我真的，真的，很感谢有你的陪伴。</p>`},{floor:"3869",username:"药师寺琉璃",time:"2023-11-26 18:16",reply:"3866",comment:"<p>希望樓主被這個世界溫柔以待</p>"},{floor:"3878",username:"EugeneGen",time:"2023-11-26 18:21",reply:"3866",comment:"<p>座中泣下谁最多，泥潭网友青衫湿</p>"},{floor:"3879",username:"不存在的竹渊",time:"2023-11-26 18:23",reply:"",comment:`<p>完结撒花！</p>
    <p>好动人的告白啊！</p>
    <p>我一定会之后反复细细品读这份真挚闪耀的美好情感啊！</p>
    <p>感谢楼主陪伴大家的这一周！</p>
    <p><del>另：好像已经有不止一位同好留档了嘿嘿</del></p>`},{floor:"3882",username:"Usamimi",time:"2023-11-26 18:24",reply:"",comment:`<p>你这个人也太不会道谢了吧ww！</p>
    <p>虽然这一点也很可爱啦</p>`},{floor:"3885",username:"黑堂隐月",time:"2023-11-26 18:28",reply:"",comment:`<p>嗑晕了
      虽然有点像唱反调，但我还是想提一下哦</p>
    <p>那就是故事里的那五位，也是普通的女性朋友关系吧？她们也只是普普通通的女孩子而已
      网络上的cp定义不会那么严苛，虽然二创里多多少少都会一转那种关系就是了</p>
    <p>另：致友人A的信我截图了</p>`},{floor:"3896",username:"松鼠之梦",time:"2023-11-26 18:50",reply:"",comment:`<p>好像大家都写我也来点。</p>
    <p>起初没人知道这个舞台会有现在的结果。
      老实说我最开始看见这个贴，看了一遍觉得楼主的反应还可以但比较一般。不过迅速冲高还是楼主能一遍过的时候能发现不少细节。(我真的挺建议楼主再看一遍的，毕竟楼主只看到了mygo5人+祥子，睦的很多细节藏在了对白和机位里)</p>
    <p>再加上第八话手牵手互诉衷肠，后面就是舞台越来越大越来越吸引长颈鹿。</p>
    <p>让我们在下一个舞台相遇吧。</p>`},{floor:"3900",username:"typeomicron",time:"2023-11-26 19:02",reply:"",comment:`<p>其他的闺蜜</p>
    <p>普通的女孩子</p>
    <p>普通和理所当然到底是什么呢(疑问句)</p>`},{floor:"3902",username:"轻风cc",time:"2023-11-26 19:05",reply:"",comment:`<p>完结撒花……</p>
    <p>这栋楼里说不定会刷新出后日谈什么的吧？</p>`},{floor:"3912",username:"KalesLV",time:"2023-11-26 19:36",reply:"",comment:`<p>现在大脑里已经自觉播放“普通和理所当然是什么呢”了。</p>
    <p>真好啊，感觉自己也一无所知地重新看了一遍一样，硬要说我自己的补番顺序是挺奇怪的，从第8集看到12集，又重新看第1集到13集，很多只有从头看起才能有的补番体验我是完全没有的。</p>
    <p>但，真好啊，无论是戏里还是戏外，这种美好的感情构建起来的kirakiradokidoki的事物，真好啊。</p>
    <p>要变成无情的真好机器人了(笑)</p>
    <p>总之，非常感谢楼主和友人A带来的美好一周，一瞬一瞬就会变成一生，今后楼主和友人A也一定会度过非常多的美好的一瞬的！</p>
    <p>总而言之……就是这么回事！</p>`},{floor:"3918",username:"甲沙时辰和姬",time:"2023-11-26 19:53",reply:"",comment:`<p>一刻也没有为直播楼的结束而悲哀，赶到现场的是——</p>
    <p>直播楼二创！</p>
    <p>直播看直播！</p>
    <p>直播楼感言！</p>
    <p>直播楼索引！</p>
    <p>除了感言是大家都有 <del>但是一般感言也没这么长，更没带私密告白啊</del>
      其他的二创、叠加直播以及索引……第一次，都是第一次啊
      万分感谢chaurin与友人A，为大家带来了一周的美好
      也感谢一起和谐讨论，营造了这种氛围的伥颈鹿！
      大家，下个闪耀的舞台见！</p>`},{floor:"3919",username:"奥托·阿波斯卡纳",time:"2023-11-26 19:57",reply:"",comment:`<p>完结了……感觉就像mygo完结时一样了……我估计这辈子都不会忘记mygo和直播楼吧</p>
    <p>“普通”とか”あたりまえ”ってなんだろう</p>`},{floor:"3924",username:"宵暗花火496",time:"2023-11-26 20:15",reply:"",comment:`<p>谢谢chaurin的陪伴，差不多要到舞台散场的时候了。</p>
    <p>原定要给chaurin写完结感言的，但是我的话语完全不能描述自己现在的心情和眼前的闪耀。
      但是果然还是想写点什么来纪念这梦幻般的一周。
      前面一位说她要以感性来说些什么，但是那篇文章条理清晰结构明确，可能这就是优等生吧。(笑)
      呼，总之这里就使用差生的思路，想到哪写到哪！</p>
    <p>出色的洞察力，纤细的心灵，以及真正交心的挚友。这些不可多得的条件让chaurin的直播楼注定不同于其他的那些。
      任何美好的事物，都是因人们对其的感受为美，而非将其判断为美。美好事物的真实存在，一直在提醒着人们：多去感受，少做判断。
      恰恰是美好的事物，可以增加人的判断力。
      mygo是如此，chaurin和友人A的真挚感情也是如此。
      能够在日常琐事的纷乱中遇到这样的mygo，遇到这样如呼吸般自然的关怀，包括我在内的很多读者都在无意识间显露了自己的真心。
      说起来，这本就是用真心交换真心的奇迹。</p>
    <p>感谢chaurin和友人A的宽容，也感谢各位读者的精彩发言。
      至于中间的那些小摩擦终会被淡忘的，就像尘埃落定之后soyo和灯回想起crychic的日子，所能忆起的只有美好。
      听故事的人只会记住他希望听到的东西。掌握故事的不是声音，而是耳朵。
      这一周对我而言是非常难忘的体验，我也因此收获了可以倾诉的好友。</p>
    <p>常常会有这样一个时刻，纷乱远去，盛宴结束。
      偌大的一个空间便只剩下几个人，时间就停滞在这一瞬间。
      几乎不敢抬眼多望几下，那刚才喧闹的身影几乎还在，甚至他们的声音、表情、呼吸都处处留下痕迹。
      眼光扫过触及时会引发种种感受，略带伤感，又有着几分激昂，就会沉浸其中，独享这一份独享。
      可是知道很快就会随着时光的流过，新的一幕立刻会上演，绘声绘色，真实到可以触及。
      于是便立即学会了忘却，不假思索，不加留恋的进入其中了。</p>
    <p><strong>祝爱者更爱</strong>
      <strong>不爱者更信赖</strong>
    </p>`},{floor:"3932",username:"火龙果叉烧肠粉",time:"2023-11-26 20:43",reply:"",comment:`<p>真是……美好啊</p>
    <p>
      几曾何时我也以为mygo终究是要过去了，舞台少女总会前往下一个舞台，我也不能在观众席上驻足太久了。但是茶乌灵的直播贴让我短暂的产生了一种错觉，那种大家每周聚在一起其乐融融讨论mygo的时光还没有远去。“在梦里，每一个活著的生命，其实都在玩著精致复杂的游戏，但却同时深信他们自己正是处理日常事务。”迷子们簇拥着一个又一个冉冉升起的火堆，一起为了留住mygo而重复着篝火边的群舞。但是mygo其实从来没有离我们远去，在每一个迷子们的心里，都有一个小小的地方被mygo改变了。就像被大蚱蜢在梦中启示的人们一样，饥饿的迷子们或许就被自己心中的mygo补完了。“我大概永远忘不了mygo吧”——没有离开，所以也不用挂念。
    </p>
    <p><del>那个东西，会有的，都会有的</del></p>`},{floor:"3939",username:"看客之一",time:"2023-11-26 21:20",reply:"",comment:`<p>感谢楼主的分享，能看到这样一份饱含真情实感的观影记录真是幸运。</p>
    <p>楼主有提到说这个帖子里的坛友都很善良很友好，其实也正应了那句话，“真诚是永远的必杀技”，您撰写这个帖子付出的心力与感情是不会说谎的，坛友们投桃报李自然也是顺理成章。</p>
    <p>同样也要感谢陪伴楼主一同走过来的友人A，拥有得以分享共同兴趣与快乐的挚友实在是无上的幸福之事，祝二位友谊地久天长。</p>
    <p>作为一个二次元论坛社区，更希望少些极端、戾气、钓鱼引战、党同伐异与傲慢争端，多一些重拾观看作品的初心，分享发自内心感受的帖子，这才是论坛真正需要与欢迎的内容。</p>
    <p>再次感谢楼主，感谢友人A，也感谢楼内抱有善意与友好回复的每一位坛友。</p>`},{floor:"3940",username:"typeomicron",time:"2023-11-26 21:35",reply:"",comment:`<p>版主出现了！</p>
    <p>我上次看到这样的氛围的帖子还是在贴吧，王子海皇的烈幻入</p>
    <p>那时我还只是因为听说了它的火热而中途加入的普通观众，而且也没有深度参与过</p>
    <p>没想到这次，我居然也投身在火焰之中了，成为了扰动漩涡的一部分</p>
    <p>这实在是太过于幸福了啊</p>
    <p>对于所有人而言，都是这样</p>
    <p>再次谢谢大家</p>`},{floor:"3941",username:"顾秋声",time:"2023-11-26 21:41",reply:"",comment:`<p>不要小看我的情报网！
      你现在因为chaurin的直播楼完结了所以又满足又空虚。
      直到发现帖子加精了才又惊又喜地进来想要重温，对不对？</p>`},{floor:"3951",username:"民风淳朴拉特兰",time:"2023-11-26 23:01",reply:"",comment:`<p>想了很多话</p>
    <p>但是总觉得表达不出自己的感情</p>
    <p>那么最后还是</p>
    <p>有趣的女孩子。</p>
    <p>希望chaurin每天也能开开心心的，有趣的女孩子更应把自己的每一天都点缀的如星星一般闪耀，就像chaurin曾经带给大家那样</p>
    <p><del>第一遍打错名字了，对不起，我自裁</del></p>`},{floor:"3952",username:"无限的星海",time:"2023-11-26 23:31",reply:"",comment:`<p>说实话一开始我是拒绝爱素的，之前只磕素祥，素睦。不明白为什么爱素这么美帝，现在真的是完全懂了，并且加入爱素。</p>
    <p>真的很羡慕楼主能有一个友人a。</p>
    <p>爱音不是素世最初的美好c团的人，不是素世闹别扭后第一个找她的人，甚至不是live现场把素世拉到台下的人。但是第一个进素世家的朋友，是把素世拉上台的人，这就足够了。</p>
    <p>有些真情是不需要自始至终，相濡以沫，谁说半路相逢的不算宿命，谁说只有爱情才能白头到老。</p>
    <p>
      碎碎念:我之前最珍重的发小在我高中的时候背刺了我，我是上大学前的暑假才知道真相。不过我关系最好的高中同学，和我一个大学的，高中到大学这几年也是互损互助(当然主要是他听我碎碎念，我帮他完成一些“作业”)中度过。我从前经常抱怨自己没有从小到大的朋友，不过现在我释怀了。这大概就是上帝给你关上一扇门，一定会给你打开一扇窗吧。
    </p>
    <p>最后用一张soyo图祝福大家吧，就算迷失前路也是一片光明！</p>
    <p><img src="/image/3952.jpg" style="zoom:33%;" /> </p>`},{floor:"3953",username:"丹提欧克",time:"2023-11-26 23:41",reply:"",comment:`<p>一次会心一笑？</p>
    <p>我都要笑到颞颌关节脱臼了。</p>
    <p>谢谢你楼主，谢谢你愿意分享你们真挚的友情。</p>
    <p>好羡慕楼主能有这样的朋友啊。</p>
    <p>另外，我也截图了</p>`},{floor:"3971",username:"半世丶浮华。",time:"2023-11-27 09:56",reply:"",comment:`<p>每当这个时候都会恨自己的语文水平表达不出想表达的意思</p>
    <p>大家总结的都好好我嘴笨就不总结啦</p>
    <p>花了两天时间爬完了整栋楼，体验非常非常非常好我愿将这栋楼和姐妹说并称为使我追mygo体验提升一个大档次的，由各位创造的奇迹</p>
    <p>完结撒花</p>
    <p>感谢chaurin和友人A，也感谢各位坛友</p>
    <p>那我们约好母鸡卡再见啦</p>
    <p><del>(我得了一种看见chaurin这几个字就会开始姨母笑的病)</del></p>`},{floor:"3977",username:"七梓Nazusa",time:"2023-11-27 11:39",reply:"",comment:`<p>看这个直播楼获得的感情完全比得上追MyGO正剧，看soyo和ano直播看MyGO什么的，真的可以让我这个爱素党这么幸运吗。</p>
    <p>彻底追完又有了新的感受，虽然中间一度从楼主身上看到了许许多多soyorin的影子，但是chaurin是chaurin呢，那份与现实交织的悸动，是唯独从chaurin这里才得到的呢。</p>`},{floor:"3994",username:"符文之语：谜团",time:"2023-11-27 16:12",reply:"",comment:`<p>完结撒花！感谢chaurin愿意来分享自己的追番感受(太棒可，我要看的就是这个.jpg)，祝愿chaurin和友人A今后学业和生活一切顺利；</p>
    <p>同时也感谢盖起高楼的伥颈鹿们，接下来，大家又变成世界上最空虚的人了。</p>
    <p>我大概……一辈子也忘不了chaurin直播楼了吧</p>`},{floor:"3996",username:"针刺子",time:"2023-11-27 16:46",reply:"",comment:`<p>
      好不舍得啊，算是开始一路追下来的长颈鹿，可以说楼主这种心思细腻的人是我最喜欢的观众之一了，尤其是初见下来一路预测到后面的发展，像soyo一样别扭和真情流露的时候我只能说我想看到的就是这个啊！别说还有楼主和友人A的甜蜜(？)互动，真的让我这个爱素党爽到升天啊(褒义)。
    </p>
    <p>
      很难想象在mygo完结了一段时间，看访谈和二创都看了这么久这么多的当下还有能让我像当初看mygo的时候那样心里悸动、激动和开心的感觉，初见mygo的时候那闪耀的一瞬，让人无法忘记的耀眼，都在这楼再演了起来，我想我大概一辈子都不会忘记这个直播贴吧，完结的当下心里实在十分空虚十分不舍，列车总会驶向下一站，希望在ave
      mujica里还能再见到chaurin和大家一起追番啊</p>
    <p>另外友人A真的好好，希望chaurin你们之间的友谊可以天长地久(？</p>`},{floor:"4000",username:"而今听雨",time:"2023-11-27 17:34",reply:"",comment:`<p>恭喜4000楼！！</p>
    <p>想了很久，有点不太敢带着感情写一篇感性的完结感言，怕我自己也难绷</p>
    <p>所以决定发一篇理性一点的感想</p>
    <p>其实还是舍不得发的</p>
    <p>只要我的完结感想还没写，对我而言这楼就还没结束</p>
    <p>但是，所有的旅程都有终点，带着美好的过去走下去吧！</p>
    <ol start=''>
      <li>大家一起让中文互联网氛围倒退20年！</li>

    </ol>
    <p>我是个糙汉子，没有楼主那样细腻敏感的神经，但是看到楼主和各位楼友的回复、互动和完结感言，我真的差点没忍住哭出来。</p>
    <p>陌生人之间这样相互理解、相互包容、互相关心、求同存异、语气温和、态度诚恳，大家由衷地互相感谢、互相祝福。</p>
    <p>在中文互联网上，这是多少年前的事了？我想，上一次整体呈现这个氛围的中文互联网大环境，大概要追溯到20年前了。</p>
    <p>这之后每一次互联网上昙花一现的这种气氛，都值得我们珍惜、铭记、享受，最后变成怀念。</p>
    <p>很遗憾，这种为数不多的昙花一现我之前一次都没赶上。</p>
    <p>很幸运，这次我终于亲身参与其中。</p>
    <p>我很荣幸。</p>
    <ol start='2'>
      <li>真诚的态度是应对戾气的良方，细腻的情感是开解浮躁的灵药</li>

    </ol>
    <p>楼主的回复里反复说坛友温柔、平和、善良。</p>
    <p>我扪心自问：我配得上这种“亚萨西”的评价吗？</p>
    <p>我不配。</p>
    <p>我平时纵然能做到不去引战、吵架、骂街，但是我在互联网上的发言怎么配得上温柔、善良这样的评价呢？我是一点就着，求同可以，异是存不了一点。</p>
    <p>但是为什么，在这个楼里，大家真的做到了像楼主说的那样的温柔、善良和亚萨西呢？</p>
    <p>
      是楼主和朋友真诚的态度、细腻的情感。我们经常用“戾气”、“浮躁”来评价互联网环境，其实几乎是评价我们每个人，我们或多或少都被这种环境带动得也变得戾气、浮躁起来。这不是我们的错，但这也是我们的错。楼主和朋友向我们展示了，如果用真心换取真心，用细腻换取理解，我们真的可以实现兼相爱、交相利的理想社会。
    </p>
    <p>也许后排发这些会破坏气氛，但是我真的忍不住想说，针对这个帖子背后，其实隐藏着好几次差点控制不住的发言节奏，楼主chaurin和友人ano酱，尤其是ano酱，其实是一清二楚的。</p>
    <p>包括楼里擅自磕CP，对其实是直女的两个姑娘而言，是不是冒昧呢？(就算真的是橘色的关系，直接开磕不也同样冒昧？)</p>
    <p>楼主妹子也说她吓了一跳。</p>
    <p>但是她说，她察觉到大家不是恶意的，她觉得大家磕CP能得到快乐，她就默许了，她不反对，而且为我们能从她们身上得到快乐而快乐，我真的很感动。</p>
    <p>互联网发言又有谁是真的怀着莫须有的恶意去虚空索敌指向素未谋面的陌生人呢，大家经常是因为语气、立场和误会去争吵，大家都起初都没有恶意，但是察觉到对方没有恶意，就对对方温柔以待的两个姑娘，她们值得我最好的祝福。</p>
    <p>面对这样的两个姑娘，坛友们又怎么好意思不去维持一个和平安逸的讨论氛围呢？</p>
    <p>有一个楼友针对ano酱发言的回复我记忆犹新，他说在当今互联网氛围里，看到ano酱这样正常人的发言就觉得感动。</p>
    <p>我也很感动，但是按照这个标准，不正常的人怕是有点多</p>
    <p>是了，她们真诚的发言让坛友们为之感动，被感动的坛友又会反过来自觉维护这个楼里的和平，这就是这栋楼之所以变成这样的秘诀。</p>
    <ol start='3'>
      <li>可以载入MyGO讨论史的一帖</li>

    </ol>
    <p>如果真的有MyGO史这种东西，那么这一楼和楼友都值得载入史册，写上浓墨重彩的一笔。</p>
    <p>就像楼主说的，不同性格不同经历的人观看mygo，会得到不同的观影体验，而只有将大家的体验拼凑起来，我们才能获得一个完整的mygo。</p>
    <p>在这一周里，在7月番的mygo播出数月之后，马上进入12月份的这一周，我们竟然又获得了一块意想之外的拼图。</p>
    <p>真正情感细腻的女性观众，恐怕绝少愿意来NGA直播自己的想法。</p>
    <p>各位可以想想，如果楼主是大家关系很好的女性朋友，在这帖之前她私底下告诉你想来NGA直播，你会不会惊讶，在惊讶之余又有些担心她。如果是我甚至可能会劝她别来。</p>
    <p>多亏了ano酱，也多亏了最前面几页友善的楼友，我们成功把把握了这样一个千载难逢的机会，成功把情感纤细的楼主留在了论坛里，让她敞开心扉，与我们畅谈。</p>
    <p>是了，独角兽作为一个情感充沛的 (重女) 女编剧，想要与她的作品共情，恐怕一个情感细腻的姑娘的观影体验是必不可少的。</p>
    <p>MyGO直播帖这种东西，本来是长颈鹿们为了近距离第一时间观察楼主被mygo剧烈的意料之外的剧情所震撼，才在nga火起来的。</p>
    <p>然而到了这一楼，变成了长颈鹿们第一时间观察楼主观看mygo，然后自己被楼主意料之外的反应所震撼。</p>
    <p>楼主为我们带了了许多许多，既包含你处男版很少有人注意的女性视角，又包含了共情mygo角色尤其是soyo时角色可能的内心活动。</p>
    <p>我们不知不觉地爱上了这种，开播几个月后出现，却仍然十分新奇的观影视角。</p>
    <p>是两位楼主妹子带我们，从一个全新的视角，获得了一个真的没看过mygo的脑子。</p>
    <p>再长的旅途，终会走到尽头，再不想写完手里这份越来越长的完结感言，也要给它画上句号。</p>
    <p>感谢两位楼主妹子对我们的陪伴，你们的存在何止让我们会心一笑，你们的存在直接成为了我们人生中宝贵的整整一周的快乐，并将一直被我们铭记。</p>
    <p>当然我一定要感谢这一周来一起参与讨论的楼友和群友。没有你们，绝没有这栋楼的快乐、绝没有这样的讨论环境。</p>
    <p>是ano酱将chaurin带来NGA</p>
    <p>但是是你们的温柔将她们留下</p>
    <p>如果这栋楼注定在NGA历史上留下一笔，你我都是见证者、亲历者和参与者。</p>
    <p>这栋来之不易的快乐的直播楼，属于chaurin和ano酱，也属于楼里的每个楼友，更属于从此路过，带来了快乐的每个人。</p>
    <p>感谢所有人共襄盛举，在这初冬时节一起努力，不是释放戾气，而是制造绵绵不绝，能为后来所铭记的快乐。</p>
    <p>我大概，一辈子都不会忘记这座直播楼了。</p>`},{floor:"4007",username:"庚辛尚丑于甄",time:"2023-11-27 17:50",reply:"",comment:`<p>很羡慕能把所想所感撰写成条理清晰而情感饱满的文字的人，这种表达的美大概是我永远触及不到的高峰。感谢楼主以及各位，成就了这无法复刻的奇迹体验。</p>
    <p>网络不过一场萍水相逢；如果再也不能相遇，祝你们早安，午安还有晚安。</p>`},{floor:"4023",username:"三帆达人",time:"2023-11-27 19:23",reply:"",comment:`<p>一直在战吧维护病栋楼，没想到这边还有这么大的乐子。</p>
    <p>本来用惯了贴吧一直没有爬论坛直播楼的习惯，今天被人推荐，摸鱼了一整天把楼爬完了。</p>
    <p>我恐怕活不过明天的进度汇报会了。破罐破摔，剩下的时间都去看二创咯。</p>`},{floor:"4028",username:"kngchau",time:"2023-11-27 23:51",reply:"",comment:`<p>喂喂喂，你们一个个别这样好不好，我边看帖边哭了一晚上了</p>
    <p>你们一个个怎么都那么会煽情！</p>
    <p>干嘛呀！我又不是销号跑路了！真的是！</p>
    <p>嘴上说知道我泪点低，然后一个个都想骗我眼泪！</p>
    <p>你们想我了就回来跟我聊聊天嘛，给我分享点二创，聊聊我没注意到的细节，哪怕纯闲聊，甚至八卦些乱七八糟有的没的都行啊！别搞得好像我人没了一样啊！</p>
    <p>我还是很喜欢这栋楼，很喜欢很喜欢大家的！</p>
    <p>虽然玩NGA不多，但是我会经常回来看啊！</p>`},{floor:"4029",username:"hejuujur",time:"2023-11-28 00:01",reply:"",comment:"<p>真的吗，真的可以八卦些有的没的乱七八糟的吗</p>"},{floor:"4030",username:"顾秋声",time:"2023-11-28 00:02",reply:"",comment:"<p>在chaurin的 <del>追悼会上</del> 完结感言下，她是最先哭出声的</p>"},{floor:"4033",username:"kngchau",time:"2023-11-28 00:06",reply:"4029",comment:"<p>你们随便聊嘛，不愿意聊的我就装作没看见就是啦哈哈哈</p>"},{floor:"4034",username:"kngchau",time:"2023-11-28 00:09",reply:"4030",comment:"<p>我的完结感言我可没哭！</p>"},{floor:"4035",username:"kngchau",time:"2023-11-28 00:12",reply:"",comment:`<p>花火头像的坛友我记得你的回复哦！</p>
    <p>“多去感受，少做判断”就是你的回复的吧！真的很有感触哦！</p>
    <p>回的那张花火的图也很戳到我！</p>
    <p>大家都是很温柔的人呢！</p>`},{floor:"4036",username:"kngchau",time:"2023-11-28 00:14",reply:"",comment:`<p>我怎么半夜翻帖子还有那么多人回复啊！</p>
    <p>不是要一辈子MyGO吗？！快给我好好休息睡觉去呀！</p>`},{floor:"4046",username:"typeomicron",time:"2023-11-28 00:23",reply:"4036",comment:`<p>chaurin晚上好鹿~</p>
    <p>睡不着啊！</p>
    <p>因为chaurin而诞生的故事还在继续着，这种事情简直太棒了！</p>`},{floor:"4047",username:"kngchau",time:"2023-11-28 00:29",reply:"4046",comment:`<p>MyGO已经完结啦，但是它带给大家的感动还在呀</p>
    <p>直播楼已经完结啦，但是因此汇聚起来的大家都还在呀</p>
    <p>大家该继续投入工作学习里去啦，该继续去寻找或者创造别的快乐啦</p>
    <p>但是如果大家想的话，还是可以随时回到大家都其乐融融的这栋楼里，当作暂时歇歇脚的地方</p>
    <p>跟这些素未谋面又可以衷心祝福彼此的网友们聊聊天水水帖</p>
    <p>什么时候休息好了什么时候再上路就好啦！</p>
    <p>我也会经常来楼里转转，看看你们这些素未谋面的好友们的！</p>
    <p>大家都要快乐呀！</p>`},{floor:"4049",username:"顾秋声",time:"2023-11-28 00:35",reply:"",comment:`<p>泪尽孤尘里，犹思在长安。
      举目望明月，垂首惜逝川。
      解忧翻故纸，不意见青衫。
      伊人今又是，灯火正阑珊。</p>
    <p>——见chaurin复归狂喜，奉旨发癫于夜中。</p>`},{floor:"4051",username:"Usamimi",time:"2023-11-28 00:40",reply:"",comment:`<p>看来友人A放松健康管理了嘿嘿，可以偷偷问一下昨天的折叠内容有传达到了吗</p>
    <p>(还是建议能当面说谢谢一定要当面说，虽然剧中的那个ano酱脸皮很厚不怕被盐随便夸一点就能上天，但现实还是更需要更加坦率一点)</p>`},{floor:"4053",username:"3C迷途猫",time:"2023-11-28 01:13",reply:"",comment:`<p>当初楼起时我没有加入进来，因为总感觉看人直播看番好像是单纯的重复</p>
    <p>看到加精很意外，想看看是什么缘由。</p>
    <p>发现楼主确实能挖出很深的细节：住高楼所以不想下楼；发sns相当于再唱一次春日影；邀请大家去房子原来蓄谋已久</p>
    <p>可以说楼主确实是品鉴的好手，mygo本身高质量的美味佳肴在楼主点明后更显精妙之处。</p>
    <p>不过话说回来，品鉴的那么深比起能力我更愿意相信是经历使然，mygo纵然精彩，但能让mygo的直播那么精彩的也只有楼主你。</p>
    <p>合适的人看了合适的剧，在合适的环境引发了合适而精彩的群创。感谢楼主和各位！</p>`},{floor:"4061",username:"kngchau",time:"2023-11-28 10:20",reply:"4051",comment:`<p>谢谢你！传达到了哦！</p>
    <p>具体的……具体的她不让我说了呀</p>
    <p>还来把我的信折叠了</p>
    <p>嘻嘻嘻她害羞啦</p>
    <p>不说了不说了，再说她要打死我了</p>`},{floor:"4064",username:"佚名76",time:"2023-11-28 10:45",reply:"4061",comment:`<p>届到了是吧</p>
    <p>传下去！已经do完了！</p>`},{floor:"4065",username:"蛋挞吞噬者",time:"2023-11-28 10:57",reply:"4061",comment:`<p>好好好！好朋友真的要直接及时的传达情感呀！可能往往反而因为熟悉信任而下意识忽略另一方的某些感受，或者因为不好意思说不出口，导致很多情感没有传达到。</p>
    <p>好朋友之间真诚坦率就是最好的啦~</p>`},{floor:"4079",username:"枞枞那年",time:"2023-11-28 20:46",reply:"",comment:`<p>在楼里也发一下吧，只有前九话的伪装版资源</p>
    <p>使用b站官方字幕版，其中10-13话，保证时长不变，内容全部换成了非关键帧，并且尽力调整到正常大小(2～300m，最麻烦的一步)，以达到最好的伪装。</p>
    <p>链接：<a href='https://pan.baidu.com/s/1CPO_inat661ctoqjjoKpzA?pwd=chau' target='_blank'
        class='url'>https://pan.baidu.com/s/1CPO_inat661ctoqjjoKpzA?pwd=chau</a>
      提取码：chau</p>
    <p><img src="/image/4079.jpg" style="zoom: 67%;" /> </p>`},{floor:"4082",username:"火龙果叉烧肠粉",time:"2023-11-28 23:26",reply:"",comment:`<p>To the next stage~
      感谢黑堂桑提供的构图idea，完结撒花！</p>
    <p><img src="/image/4082.jpg" style="zoom: 20%;" /> </p>
    <p><del>之后还会有小礼物的</del></p>`},{floor:"4083",username:"黑堂隐月",time:"2023-11-28 23:40",reply:"",comment:`<p>哇浪，怎么把我给供出来了</p>
    <p>其实构图的沟通上还是有一点点没传达到的地方的</p>
    <p>没办法两边都是语死早，我又没本事动手画</p>
    <p>感谢叉烧老师顶着无法交流的中文不厌其烦的改稿</p>
    <p>“chaurin~”
      “就算不会一帆风顺，
      今后也一同前进，一起迷路吧~”</p>
    <p>“这是灯的台词吧笨蛋——”</p>
    <p>少女们前往了下一个舞台，
      那么MyGO!!!!!呢？
      我们呢？</p>
    <p><del>叉烧老师好像还有别的贺图在画你们多等等</del></p>`},{floor:"4086",username:"Gonewindlkae",time:"2023-11-29 00:00",reply:"",comment:`<p>mark1900</p>
    <p>woc怎么你们长颈鹿在直播楼都能搞二创的</p>
    <p>前面看到楼主和朋友两个人的互动时还只是会心一笑告诉自己这不过是巧合，看到那个ansy一起看诗超绊蚌埠住了 <del>太可爱了，就算是假的我也要吃一口</del></p>
    <p>潭友过于有能，mygo的前途一片光明啊</p>`},{floor:"4088",username:"甲基晨",time:"2023-11-29 00:57",reply:"",comment:`<p>我居然自己造了个回旋镖，这楼都叠到两百多页了。我也来写写我的感想。</p>
    <p>
      说实话追了不下十个(数不清力)直播贴了，这个贴确实给我印象很深。从楼主开贴追来，跟着看楼主对名场面的反应，造的假药真的很有乐子，让我对mygo的理解更深了，也让我想起来我追番的感受。不得不说楼主相当的敏锐，对人物关系以及每个人的小心思都能猜到一些，可能是我太纯良了(？)，我当初追番的时候都没想那么多，直到第七集我才清楚soyo的目的。七八九集连爆的时候我和楼主的想法很类似：这不是个偶像番吗？这之后该怎么演呢？直到第十集被诗超绊感动流泪。当然楼主的反应激烈很多(因为触景生情了)，楼内还长出了直播楼的二创。也是这个时候这个帖子回复数开始疯长
    </p>
    <p>之后更是让我从不同(soyo)的角度去看待后面的剧情。我其实已经看了正片几遍了，结果没想到还能看到楼主这么多新奇的理解。</p>
    <p>
      长颈鹿们之所以痴迷各种直播楼，是因为想看看不同的人对剧情的理解，对名场面的反应并以此为乐。其实更是去追寻着当初自己第一次看时的心情，对不可预测命运之舞台的期待。虽然现在看第十集的诗超绊我还是会被感动到流泪，但是第一次看的时候那种情绪对我造成冲击是无法复刻的。跟着楼主一起看，似乎能回味到我看番的体验。谢谢楼主，让我再次回到了那个打开mygo的晚上，也很羡慕你有一个好朋友。也谢谢楼内的各位，与楼主良性的互动造就这个直播楼的奇迹。
    </p>`},{floor:"4089",username:"Gonewindlkae",time:"2023-11-29 02:45",reply:"",comment:`<p>mark3000</p>
    <p>一口气追下来，不知不觉都这个时候了</p>
    <p>你们这些长颈鹿到底是在看人家直播mygo还是别的什么，我不好说</p>
    <p>钦佩楼主这么敏锐与细腻的心思，一些只有女孩子才有的独特视点给了我不少茅塞顿开的醍醐体验 <del>不对啊明明我也想到了这方面，可我为什么就不是女孩子！</del></p>
    <p>停更原来是因为生理期，那一定要好好注意身体呀</p>
    <p>最后看了一眼进度，最后一话一集就让长颈鹿水了1000L，这得是何等疯狂的落幕</p>`},{floor:"4091",username:"kngchau",time:"2023-11-29 08:10",reply:"4082",comment:`<p>(来自友人A的回复)</p>
    <p>今天早上醒了收到来自你们楼主几十条微信消息把我吓死了，我还以为出什么事了，结果原来是你的这幅图画好了。实话实说哦，我也没绷住哭</p>
    <p>但是我想着还是早点回复一下画师大佬：真的真的真的非常非常喜欢这张图，实在是太感谢了！</p>
    <p>之后还有很多想说的话，还是心情平复一些再说吧~</p>
    <p>你们楼主看起来哭到后半夜才睡着，先等楼主醒了我去找她~</p>`},{floor:"4092",username:"typeomicron",time:"2023-11-29 09:04",reply:"4091",comment:`<p>几十条微信消息(思索</p>
    <p>自动输入：soyo打字.gif</p>
    <p><del>虽然这话听起来有些缺德，不过chaurin能哭哭说明确实有着真情实感在里面吧，这样子大家也都会很开心的！</del></p>`},{floor:"4094",username:"-÷",time:"2023-11-29 09:27",reply:"4091",comment:`<p>几十条消息....就是soyo就是soyo！</p>
    <p>所以友人A果然也是有这个账号的密码的嘛，我还以为以前都是 <del>悄咪咪</del> 拿chaurin的手机/电脑登账号看消息 <del>以及编辑某些内容</del> 的</p>
    <p>还有还有，一直看下来其实大家都很能分辨chaurin和友人A了吧</p>`},{floor:"4096",username:"谷不勤",time:"2023-11-29 11:42",reply:"",comment:`<p>要素精炼</p>
    <p>chaurin 哭哭 大家 都 很 开心</p>
    <p>精炼完成</p>`},{floor:"4097",username:"kngchau",time:"2023-11-29 13:08",reply:"4082",comment:`<p>你们别听某友人A胡说，我才没有哭那么久。只是这张图真的画的，太触动我了。想到几句特别适合的歌词，各种意义上都很适合：</p>
    <p>黑色的不是夜晚/是漫长的孤单</p>
    <p>看脚下一片黑暗/望头顶星光璀璨</p>
    <p>叹世万物皆可盼/唯真爱最短暂</p>
    <p>失去与永不复返/世守恒而今倍还</p>
    <p>
      其实你们说得对，看第10话的时候，我说当时并没有一个爱音把我拉上台去，所以我的mygo永远留在回忆了。但是的确有一个爱音把我从漫长的黑暗里拉了出来，把我从对过去的执着和悲伤里拉了出来。失去的永不复返，但是我相信幸运是守恒的，我的幸运点可能全都点在了某一个人身上。
    </p>
    <p>谢谢你画师大佬！真的画得太好了！我不太会说感谢人的话啊，但是，真的，我永远都会珍藏这张图的。</p>
    <p>
      不过我总感觉我给你们留下了动不动就哭鼻子的印象了！！会哭不光是因为感动啦，深夜总是会让人患得患失吧，我其实是一个挺依赖别人的人。MyGO里大家总是说一辈子一辈子的，真的能有一辈子的陪伴吗？恐怕没有吧，直到动画最后爱音也只是说一辈子可以试试吧。如果拯救了大家的爱音最后离开了大家，soyo会怎么样呢？灯会怎么样呢？我所依赖的人，会不会也在什么时候也离开了呢。一想到这些我就很害怕，很没有安全感。
    </p>
    <p>写完这些我自己都嫌自己矫情，你们如果愿意嘲笑我笑就好啦，就当认识一下人类的多样性好了</p>`},{floor:"4098",username:"71和EU",time:"2023-11-29 13:13",reply:"4097",comment:"<p>说个很可怕的事，mygo刚完结那两周，主流二创方向是，寿命论</p>"},{floor:"4099",username:"-÷",time:"2023-11-29 13:38",reply:"4097",comment:`<p>为什么会嘲笑你啦</p>
    <p>楼里的大家不正是因为chaurin细腻的感情和极其代入soyo才一路慢慢看下来的嘛， <del>虽然ansy也占其中一部分</del></p>
    <p>关于一辈子嘛，就像灯说的那样，一辈子说起来很长，光想着一辈子会错过很多人和事，开开心心过好每一天，只要将无数个瞬间拼凑起来，就会累积成一辈子啦！</p>`},{floor:"4105",username:"火龙果叉烧肠粉",time:"2023-11-29 16:53",reply:"4097",comment:`<p>非常感谢chaurin和友人A的喜欢！</p>
    <p>时间过得真快啊，转眼间居然mujica也快要成了“今年的动画”了(总不能25年才播吧)想起来当初被大鼻子叔叔骗去看mygo的时候，我还只是把它当作一个看复杂 女同
      关系性的乐子动画。没想到看了之后才发现，这部动画也不简单啊。况且当他播出时，我自己也在经历一些说不清道不明的事情。“即使迷茫也要前进”，我已经不记得当时看到这句台词的时候是什么心情了，直到现在，我时不时还会想起来。mygo确实已经对我的一部分造成了影响，不一定要说“这部动画改变了我的人生”那么宏大，至少我可以问心无愧地说，在我过去的这半年，它确实成为帮助我面对生活的一个重要支柱。我想很多其他长颈鹿也有类似的体验吧，或许这才是我们不懈地寻找再演的舞台的动力，也因此我们在这栋直播楼里结识。
    </p>
    <p>
      刚开始看到这栋楼的时候我的感觉也是这样的，嘿嘿嘿美味的萌新，收藏了。但是随着chaurin细致又真情实感的分析，也让我重温剧情时频频惊呼“原来是这样？”mygo真不愧是一部值得翻来覆去看的动画啊，纵使已经再演过不知道多少次，在跟随chaurin的脚步重温的时候，仿佛真的让我获得了一颗从未看过mygo的大脑。如果说追mygo让我找回了看动画的兴奋，那么追直播楼就是找回了看mygo的兴奋。看到第十话诗超绊的时候，虽然有点不厚道，但是友人A和哭哭chaurin一起塑造出来的节目效果实在太好了。一个抱着哭哭soyo重温诗抄绊的ano的画面深深的刻在我脑子里面挥之不去了，于是就赶快打开板子画下了那个摸鱼。本来或许到这里也就结束了，结果出于某些内绪的原因居然被友人A邀请来整蛊chaurin，于是又诚惶诚恐地把鬼画符一样的摸鱼勉勉强强改成现在的样子。在这个大家共筑的舞台上，也算是让我留下了一些微小的痕迹吧。也是那时想到的，至少看在这段时间看得这么开心的份上，如果直播楼能顺利完结的话，一定要给两位画个正式一点点的贺图。
    </p>
    <p>
      话虽如此，我这十八线三脚猫上次认真的拿笔画点什么也不知道是什么时候了，况且到底是没有什么真功夫，就连贺图差点在构图阶段就胎死腹中了()本来想的是大学版的爱素两人看着动画里的soyo和自己的过去和解，然而苦于怎么也想不出兼具画面感和故事感的构图。这时候黑堂桑一言点醒了我，让友人A的爱音拉着“soyo”的手回到现实，前往下一个舞台。这个想法真是太妙了，我连忙新建文件把这一版画了出来，从友人A和chaurin的反应来看大概也是令人满意的。
      <del>所以其实黑堂桑才是有弄哭chaurin首功</del>
    </p>
    <p>不知不觉写了这么多了，其实我也非常感谢chaurin的直播楼给了我一个再画点什么的契机。这个星期的体验我是不会忘记的，就让我们mujica再见吧！</p>`},{floor:"4110",username:"而今听雨",time:"2023-11-29 22:56",reply:"",comment:`<p>好久没见友人a，想她！</p>
    <p>让她跟大家聊聊天呗！(我们知道你们在一起的吧！)</p>
    <p>比如头像是谁换的呀</p>
    <p>比如……八卦？(这是可以聊的嘛</p>`},{floor:"4111",username:"kngchau",time:"2023-11-29 23:11",reply:"4110",comment:`<p>(手机给本人了，你们聊，以下友人A)</p>
    <p>不是，你们想我干嘛？你们真的不是满脑子都是你们的chaurin 哭哭 么？？</p>
    <p>头像当然是我换的， <del>你们的楼主小笨蛋到现在都不会换头像</del></p>
    <p>我的八卦，我能有啥八卦啊，你不会还想着前面楼主说的追我的人吧……你们不要听风就是雨嗷！</p>
    <p>每一个追我的男孩子我都有认真、诚恳的回绝，我现在真的是一个没有八卦的人</p>
    <p><del>还有想通过我追楼主的我也一并回绝了</del></p>
    <p>哎呀，我在NGA说这些会不会被骂呀</p>
    <p>但是真的是不适合在一起啦，我也都是第一时间婉拒哒~</p>`},{floor:"4112",username:"typeomicron",time:"2023-11-29 23:13",reply:"4111",comment:"<p>A酱真是装糊涂的天才啊</p>"},{floor:"4113",username:"Develde",time:"2023-11-29 23:13",reply:"",comment:"<p>ano酱，你要不要再问一次楼主对一辈子有什么想法(复读</p>"},{floor:"4115",username:"kngchau",time:"2023-11-29 23:32",reply:"4113",comment:"<p>这次没让我滚</p>"},{floor:"4116",username:"谷不勤",time:"2023-11-29 23:36",reply:"",comment:"<p>真可惜(棒读)大家都没看到呢(棒读)</p>"},{floor:"4117",username:"Develde",time:"2023-11-29 23:37",reply:"",comment:"<p>随200</p>"},{floor:"4129",username:"kngchau",time:"2023-11-30 00:02",reply:"",comment:`<p>咳咳，大家这是聊MyGO的楼啦~</p>
    <p>或者大家互相之间聊点别的嘛~</p>
    <p>不要老盯着我俩啦~</p>`},{floor:"4134",username:"typeomicron",time:"2023-11-30 00:04",reply:"",comment:`<p>那我来问个mygo问题好了</p>
    <p>A酱自己在看mygo的时候有看哭或者情绪激烈的时候吗</p>
    <p><del>作为参考诗超绊我捂着被子哭了十来分钟</del></p>`},{floor:"4135",username:"而今听雨",time:"2023-11-30 00:08",reply:"",comment:`<p>就是就是，大家不要聊别的啦，来聊mygo：</p>
    <p>“那可是一辈子哦，一辈子！”</p>
    <p>“我已经决定不退出了，soyorin也不要退出哦！”</p>
    <p>“将无数个一瞬间积攒起来，就能成一辈子”</p>
    <p>“说不出口的话，用诗可以更好地表达”</p>
    <p>“那大家可要多注意身体健康了”</p>
    <p>大家来赏析一下这几句台词吧～</p>`},{floor:"4140",username:"kngchau",time:"2023-11-30 00:18",reply:"4134",comment:`<p>哈哈哈哈，我的话可能比较奇怪</p>
    <p>我前几话情绪比较激烈的是比较共情立希带不动团那里</p>
    <p>感觉血压很高</p>
    <p>后面是爱音被立希的话伤到，然后回忆soyo的走马灯那里~</p>
    <p>之后当然还有诗超绊~</p>
    <p>还有一个比较奇怪的点，是睦对祥子说，祥子快坏掉了那里。因为当时已经吃了很多祥睦假药、破产假药什么的，所以听了这句话还挺触动神经的。</p>`},{floor:"4145",username:"CNSCVN春蘭",time:"2023-11-30 10:05",reply:"",comment:`<p>无言投下</p>
    <p><img src="/image/4145.jpg" style="zoom:33%;" /> </p>
    <p><del>感觉还是太原著了。算了原著就原著。</del></p>`},{floor:"4146",username:"谷不勤",time:"2023-11-30 10:22",reply:"",comment:"<p>对ACha的二创越来越多了，好起来力</p>"},{floor:"4150",username:"kngchau",time:"2023-11-30 22:10",reply:"4145",comment:`<p>天呐！！这个图也太温馨了吧，楼友都好厉害啊(崇拜的眼神)</p>
    <p>好爱！</p>
    <p>两个人戴一副耳机的时候，分别戴到远离对方的那个耳朵上，身体就会不得不贴得特别近，还可以彼此贴着耳朵说悄悄话！我还以为这个小心思只有我知道！</p>
    <p>画师大佬太细腻啦嘻嘻！</p>`},{floor:"4151",username:"kngchau",time:"2023-11-30 22:35",reply:"4105",comment:"<p>哼，我可是从一开始就记你记很清楚！某人拿我的号私聊过的人！！！(记仇)</p>"},{floor:"4152",username:"kngchau",time:"2023-11-30 22:36",reply:"4105",comment:`<p>等等你们怎么又私聊了这么多？？？</p>
    <p>她不是说她发群里？</p>
    <p>她就是这么发群里的？</p>`},{floor:"4153",username:"kngchau",time:"2023-11-30 22:42",reply:"4105",comment:`<p>好啦，某人待会再收拾，先认真回复一下楼友！</p>
    <p>
      真的很感动，在这个楼里，我只是负责发发观后感，跟大家闲聊天，但是真的有很多楼友在认真回复我的感想，认真给我推荐二创，认真在楼里写感想写总结，甚至有像肠粉老师这样的画师大佬在楼里发图，我感觉你们给我带来的感动远远超过我给你们带来的那一点趣味。
    </p>
    <p>只能说大家都在互相投之以桃，报之以李。我很爱大家创造的这样一个地方。</p>
    <p>真的十分谢谢！</p>`},{floor:"4155",username:"不存在的竹渊",time:"2023-11-30 22:54",reply:"4152",comment:`<p><del>所以发了什么</del></p>
    <p>群里问到了，得到了奇妙的情报呢</p>
    <p>你只有这么高，但我有这么高(猫猫比划.jpg)</p>
    <p>姑且问个不知道会不会冒昧的——</p>
    <p>平常是会不会把头放在对方肩膀或者头上呢？</p>`},{floor:"4156",username:"kngchau",time:"2023-11-30 23:08",reply:"4155",comment:`<p>我怎么感觉你这个提问是在内涵我的身高呢？！</p>
    <p>不过这没什么冒昧的呀，坐地铁的时候我挺喜欢把头放她肩膀上的，不过主要是因为她在用的那款洗发露的味道我比较喜欢啦。但是某人太矮了，我靠上去要想脖子不酸她就得挺直</p>
    <p>希望她能再长长， <del>或者我换一个高一点的？</del></p>`},{floor:"4159",username:"kngchau",time:"2023-11-30 23:15",reply:"",comment:`<p>啊不对，楼友不会真的在磕我们真人吧</p>
    <p>我们是很单纯的闺蜜情啊</p>`},{floor:"4160",username:"顾秋声",time:"2023-11-30 23:16",reply:"",comment:"<p>“群友们都是很单纯的，都是为了磕ACfun而生的”</p>"},{floor:"4161",username:"不存在的竹渊",time:"2023-11-30 23:16",reply:"4156",comment:`<p>噫，好，我中了！被翻牌子了！</p>
    <p>诚恳说一声，不是内涵身高，只是觉得“身高差”本身就是 <del>cp</del> 萌点
      像是能把头叠在对方头上啊， <del>或者是踮起脚亲吻啊</del>， 抱在怀里时候正好视线平对啊……
      当然差距不大时候的耳鬓厮磨悄悄话啊，这样靠在对方肩膀上啊也是好的</p>
    <p>原著创造关系性，同人创造……</p>`},{floor:"4162",username:"typeomicron",time:"2023-11-30 23:17",reply:"4159",comment:`<p>chaurin现在才发现吗</p>
    <p>闺蜜情反而更好了，成不了真的CP就是最真的(？)</p>
    <p>而且说好听点，大家只是为自己或是羡慕或是欣喜的人际关系而感动罢了，毕竟像友人A这样的好关系对于大家而言也是不那么常见的，磕一磕怎么了嘛！</p>`},{floor:"4166",username:"kngchau",time:"2023-11-30 23:23",reply:"4161",comment:`<p>喂喂喂，她只比我高3.5cm好嘛？！</p>
    <p>她上次可是直接从我衣柜里顺走了一件我的衣服的！她跟我哪里来的那么多身高差啦！</p>`},{floor:"4167",username:"不存在的竹渊",time:"2023-11-30 23:24",reply:"4159",comment:`<p>哈哈哈哈，有一说一，我不好说……</p>
    <p>咳，正经回答，个人理解的cp，本身重点就是双方的关系和情感
      chaurin和友人A之间的深厚感情，对彼此间的重视都已经在这四千楼里让大家感同身受了
      所以，大家会沉迷于这样美好的关系互动是很正常的</p>
    <p>另外，确实有认识的女孩子们，出门手挽手、甚至能在旁人甚至面前喊对方“女朋友”和“老婆”的
      众所周知，闺蜜或基友间，普通的肢体接触不算什么，只有，啊，有那么些想法的，才会对此比较扭捏害羞
      所以呢，chaurin，拜托了，能不能继续分享点与友人A的和谐日常或者嬉笑打闹？
      拜托了，我什么都……(后略</p>`},{floor:"4168",username:"kngchau",time:"2023-11-30 23:27",reply:"4162",comment:`<p>之前一直觉得你们是代入爱素在磕嘛……</p>
    <p>磕我们真人，emmmm，总感觉怪怪的哭笑</p>
    <p>嘛，算啦，大家开心我都无所谓啦！爱素也好真人也罢，大家工作学习生活都那么辛苦啦，来楼里跟我们聊聊天，开心一笑，能缓解一下疲劳和烦恼的话就再好不过啦，其他的无所谓啦，我不太在意啦</p>`},{floor:"4171",username:"kngchau",time:"2023-11-30 23:35",reply:"4167",comment:`<p>这总给我一种百合营业的感觉</p>
    <p>而且我们大部分时间也都是宅在家里没日没夜地浪费时间，唯一的出门大概可能是从我家去她家的路上这种，我感觉也没什么好分享的呀</p>
    <p>实话实说嘛，昨天你们友人A发在楼里那段话也是我让她删的，她还闹别扭来着</p>
    <p>当然啦，大家如果真的想聊点什么关于我们的话题我当然也不介意的啦</p>`},{floor:"4172",username:"CNSCVN春蘭",time:"2023-11-30 23:41",reply:"4150",comment:`<p>楼主是在是太细心了这个点都能直接get到</p>
    <p>说实话倒不是那种“为了靠的很近故意那么戴”，反过来说是“因为只能那么戴所以醒着的时候就算不想贴也得贴。”</p>
    <p>如果是原著soyo的话在anon醒着的时候大概会不太愿意靠上去吧，但是一方睡着之后另一方就这样搂上去也蛮不错的。</p>
    <p>
      至于“只能那么戴”，在挑选耳机种类的时候也有试过“一起凑近同一副头戴式监听耳机”的动作，不过这样子会有些听不清吧。正好画的是earpod那种耳机(特征是左右耳形状不一样)，是必须左耳配左耳右耳配右耳的类型。也就是说戴在中间两只耳朵上的可能性不存在，尝试给出一种从“没办法凑合着用”逐步变成两个人贴成一团的感觉。
    </p>
    <p><del>然而居然实际上是可以戴的啊啊啊，看来近期骨传导戴多了人傻掉了啊啊啊啊</del></p>
    <p><del>当然如果带入楼主的话想必就是“啊啊啊真没办法呢今天带的是earpods而不是AirPods”的那种小心思啦</del></p>`},{floor:"4178",username:"火龙果叉烧肠粉",time:"2023-12-01 00:00",reply:"4151",comment:`<p>噫，要，要被杀掉了(悲鸣</p>
    <p>ano老大一开始来找我的时候还是很惊讶的，坦白地说在chaurin那么破防的时候这么玩，还是多少让我的良心有一点点受到拷问，真的有一点点啦</p>
    <p>不过她给得实在太多了，反应过来的时候上色的版本已经画完了(</p>
    <p>要是能为chaurin和友人A平凡的生活增加一些乐趣，那也不错啦，毕竟这段时间也在直播楼里玩得很开心</p>
    <p><del>顺带一提还有个小头像被我自己的拖延症折腾了半天总算是快好了(你这人为什么就不能一次性画完全部发出来呢</del></p>`},{floor:"4184",username:"不存在的竹渊",time:"2023-12-01 07:35",reply:"4171",comment:`<p>chaurin，温柔，love！</p>
    <p>感谢昨晚回复时候带来的惊喜</p>
    <p>以及，我稍微，稍微逾越地写了份ansy</p>
    <p>嗯，以上</p>`},{floor:"4186",username:"takilovee",time:"2023-12-01 08:47",reply:"4156",comment:"<p>4千楼了还在优化爱音</p>"},{floor:"4197",username:"不存在的竹渊",time:"2023-12-01 21:26",reply:"",comment:`<p>今日话题：
      大家与朋友间的[距离感]，是在什么范围呢？</p>
    <p>以我自己而言，虽然能和同学很平常地勾肩搭背，但放到了更加熟悉亲近的朋友身上时候，反而是有些畏手畏脚。虽然聊天能正常进行、即使不聊天一起待着也很安心，但想随意地肢体接触反而很困难了。
      除此之外，同学之间很少联系；而朋友间有些常聊有些少见，但每次重逢都还能像从未分开过一样谈笑。</p>
    <p>大家的情况又如何呢？与朋友之间的相处和距离感是怎样的呢？</p>`},{floor:"4198",username:"kngchau",time:"2023-12-02 00:12",reply:"4197",comment:`<p>(总感觉这帖开始变情感话题了)</p>
    <p>其实就是“普通和理所当然，到底是什么呢？”</p>
    <p>
      对我而言就是，普通同学只局限于一个保持距离(心理和物理，各种意义上的)的交流，朋友对我来说就是可以搂搂抱抱挽着手出去逛街的程度(男孩子不要学啊！不然被打了别来找我)，友人A对我来说就是额，这个不好评价，主要是太熟了，上一次我们没见面超过三天我已经不记得是什么时候了……距离感什么的不存在的
    </p>
    <p>我跟前男友也没到这一步哭笑</p>
    <p>其实说起来我也不是很清楚“朋友”到底是什么</p>
    <p>之前这帖名字里说“朋友”来叫我看mygo，她还纠正我说至少也要改成“闺蜜”吧！但是一来我感觉过于强调这个关系也太喧宾夺主了点，二来其实我对朋友的定义可能挺重的。</p>
    <p>
      有的人，我们能在一起吃吃喝喝聊天说笑，但是彼此只是在一个大家很谨慎的范围里交换彼此的开心，这能算得上朋友吗？算，因为她们真的是很nice的人并且给我频繁地带来快乐，却几乎不给我带来负面情绪。但是也不算，因为她们从来没有走进过我的内心，我也没有试图去走进过她们的。一旦由于各种原因没有办法经常见面了，恐怕也会渐渐地再也不联系。
    </p>
    <p>所以我真的能算的上朋友的人大概只有一个吧，所以大概对你的问题实际也没太大参考价值</p>`},{floor:"4200",username:"不存在的竹渊",time:"2023-12-02 00:34",reply:"",comment:`<p>没有参考价值(x)</p>
    <p>完全就是想看的(√)</p>
    <p>chaurin和友人A的关系，真的深厚啊……</p>
    <p>虽然说着“没什么好分享的”，但谈起来的信息，哇哦，频繁的见面、“朋友”的定义，以及……</p>
    <p>[我跟前男友也没到这一步]那想来也是，毕竟肯定当天没有赶三百公里到身边，以及同床共枕擦眼泪(确信)</p>
    <p>[所以我真的能算的上朋友的人大概只有一个吧]至福……</p>
    <p>最后，大声说一句：</p>
    <p>“你怎么知道我写了ansy同人、有好友给我刷礼物，还被翻了四次牌子？”</p>`},{floor:"4204",username:"CNSCVN春蘭",time:"2023-12-02 01:09",reply:"",comment:`<p>− 以下可能是和本楼关系不大的内容，但是大概是致谢吧。我真是个说话别扭的家伙。 ...</p>
    <p>我二刷楼那边进度到#11完结了</p>
    <p>再刷一遍到#9之前真的有一股那种</p>
    <p>“chaurin好，soyo坏”的感觉</p>
    <p><del>我甚至把这句话写上去了</del></p>
    <p>但是楼主确实是我切切实实坐下来对这画面看一遍MyGO的动力了。现在想来我因为各种原因“获得了没有看过mygo的脑子”未必是突出的机会，但是感谢楼主能让我清楚的感受到这究竟是多么出色的一部番剧，并且下定决心去补完画面部分的缺失。
    </p>
    <p><del>以及我嘴了大半楼的soyo请大家不要到楼里观看，我写得还蛮丑陋的。</del></p>`},{floor:"4205",username:"风铃声balabala",time:"2023-12-02 11:51",reply:"",comment:`<p>把楼爬完了</p>
    <p>
      对楼主直播的感想有几个印象很深的点，一个是前面几集看完感觉楼主也太爱c团和祥子了，相反对爱音就不是特别喜欢。比如9集那附近很多观众会有的“爱音发起进攻事情就会变好”好像完全没看到楼主有类似的想法过，结果一结合后面跟soyo的高度共情突然就能理解了，真的是一心c团完全把爱音当外人的视角
      <del>所以10集诗超绊后突然感觉认可爱音了就好好笑，跟soyo真的好像</del>
    </p>
    <p>如果说前面还在长颈鹿看乐子，甚至因为太有节目效果以至于怀疑楼主是不是rpg的话，到了11集12集13集楼主对soyo内心的解读就实在是太超乎想象了</p>
    <p>很多点对我来说都是一次见，以及还有些只有懂日语的人能get到的语境意思。</p>
    <p>特别13集那个“其实或许c团对她也没那么美好”的见地是真的是我从没想到过的。我相信，或者我愿意相信这句解读一定超脱了对mygo中长崎素世的解读，是结合了最切身的感受的才能体会到的。</p>
    <p>真是一个精彩纯粹的动画感想分享楼</p>`},{floor:"4206",username:"琉璃冬单推模拟器",time:"2023-12-02 23:41",reply:"",comment:`<p>我是来朝拜建成的巴别塔的</p>
    <p>大家在面对楼主的时候真的好温柔，楼主独到的细腻分析也很有魅力</p>
    <p><del>chaurin的可爱更是独一档</del></p>
    <p>怎么说呢，这个楼的存在正如我前面的比喻，它的存在正如建成的巴别塔一样毫无疑问是个奇迹。也感谢楼主为我们 这些嗜血长颈鹿 提供了一次美好的旅途。</p>
    <p>
      <del>楼主曾经说过，自己只是普通的女孩子，但是这种普通才是大家感触最深的地方吧。各位迷子肯定对普通和理所当然存在的东西有超出那种程度的珍惜的。用另一个韩游企划的c台本来讲的话，大概就是，我们的每一秒日常，都是无数奇迹的叠加</del>
    </p>`},{floor:"4211",username:"Badutopian",time:"2023-12-03 14:34",reply:"",comment:'<p><img src="/image/4211.jpg" style="zoom: 50%;" /> </p>'},{floor:"4215",username:"谷不勤",time:"2023-12-03 16:00",reply:"",comment:"<p>关注这楼之后，我的币入不敷出了，你们有什么头绪吗？</p>"},{floor:"4216",username:"Badutopian",time:"2023-12-03 16:13",reply:"",comment:`<p>可惜没什么空闲，要不就勾线细化了</p>
    <p><del>等我真正闲下来再画</del></p>`},{floor:"4217",username:"火龙果叉烧肠粉",time:"2023-12-03 17:51",reply:"",comment:`<p>堂堂完结——虽然我想这么说，但是chaurin看完了快两周之后才把计划里的ACha同框加上ansy公仔图端上来的我，实在没有脸面说这是11话之前就想好要画的东西口牙</p>
    <p>不知为何想象中的友人A会是有着浓郁智将感的正经宅女，而chaurin则是长发及腰的温暖女大(要是猜错了请打我)总之祝大家顺利地前往下一个舞台，如果有缘在某处继续相遇的话，我会很开心的！再见啦</p>
    <p><img src="/image/4217.jpg" style="zoom:20%;" /> </p>`},{floor:"4225",username:"kngchau",time:"2023-12-05 23:13",reply:"",comment:`<p>大佬爱您！！！</p>
    <p>没想到几天没上NGA竟然又看到大佬的图了，太感动了！总感觉你是不是见过我们两个，画得真的好神似！靠突然有点怕了，我不会真被熟人盒了吧</p>
    <p>最近这两天有点emo，你们友人A被派出去开会了，一天忙到晚也不见人，每晚都得到半夜才能接我电话，消息也不回，我也被赶回宿舍住了。前两天刚在论坛里立了个FLAG说上次超过三天没见不知道多久了这就真的三天没见了。</p>
    <p>最emo的事情就是，看到你这张图我想换头像。</p>
    <p>可是，怎么换头像呀！！！！</p>
    <p>我找她她不理我！！！</p>
    <p>另外，这次我没哭！！真的！！</p>`},{floor:"4227",username:"火龙果叉烧肠粉",time:"2023-12-05 23:22",reply:"4225",comment:`<p>“我找她她不理我”</p>
    <p>可以试试把头像换在微信上找她(</p>`},{floor:"4230",username:"kngchau",time:"2023-12-10 20:23",reply:"4227",comment:"<p>她前两天出差回来帮我换上啦嘻嘻</p>"},{floor:"4235",username:"kngchau",time:"2023-12-11 14:06",reply:"",comment:`<p>直播楼像日记一样还真的挺好用的</p>
    <p>今天看一个帖子写他自己能够共情初华的一篇帖子，我想回过头来看看自己看这段什么感受，发现自己当时完全就是看乐子心态</p>
    <p>
      MyGO真是个很有趣的番，它一定需要各种经历性格不同的人一起分享自己的体验才能完全理解它。我之前没有翻跟别人聊天记录的习惯，所以完全没理解这里初华的感受。直到看了那个楼主的帖子，我想到我当初也有一个像他说的那个人的一个学姐，看完我就跑去翻跟学姐的聊天记录，越看越想哭，现在真的完全理解初华了。
    </p>
    <p>当时我们去了某个学院的迎新晚会的一个暖场，结束之后学姐就从学院学生会打听到了我的微信，说她们那儿吉他临时有事想让我去顶一下(当时我们贝斯还说到处都听说缺贝斯的头一次听说缺吉他的</p>
    <p>后来跟学姐聊了好多，聊喜欢的诗和小说，聊喜欢的音乐，她还说她要是以后写歌一定要我给她写词。</p>
    <p>她吉他也特别厉害，我去那边，她甚至帮我在谱子上密密麻麻标了指法</p>
    <p>当时我真的好喜欢她，想的全都是，以后我要是能成为她这样的人就好了</p>
    <p>后来她们的吉他手回来了，我也没理由赖在她们那儿了</p>
    <p>再后来我们零零星星地互相推荐些诗、小说和曲子</p>
    <p>最后一条消息是她给我发了一首她新扒的歌的谱子，我说正想找这份谱子呢谢谢学姐。</p>
    <p>很普通很普通的结束，就像我们每次聊天一样，我也以为过不了多久就会有下一次。但是时间越隔越长，慢慢地每次点开跟她的聊天都已经在思考，隔了那么久再找她会不会太突兀了。</p>
    <p>于是就这样，竟然再也不联系了。</p>
    <p>好几年过去了，甚至如果不是最近在NGA看到这个帖子，我都把她忘记了，好在我每次换手机都把微信聊天记录留着，直到今天，我又从头到尾把跟她的一字一句看了一遍，真是怅然若失。</p>
    <p>桃李春风一杯酒，江湖夜雨十年灯。</p>
    <p>不知道她现在在哪儿，又过着怎样的生活呢？</p>
    <p>以及，还记不记得要我给她写词的约定呢？</p>`},{floor:"4238",username:"Usamimi",time:"2023-12-11 15:39",reply:"",comment:`<p>看了chau的新感想，泥潭初华， <del>还有最近长颈鹿群里的遍地高手环节</del> ，再结合note上一些日本人的感想，不由得感慨MyGO动画真是各种意义上的新时代毒电波番</p>
    <p>要是13话下来全是乐子人的状态还好，一旦着了哪个人物其中一面或者几面的迷被拖下水的话......我不好说</p>
    <p>传统意义的二次元电波番的进行更像是和人对暗号，然后给与对上暗号的人很多正反馈
      而mygo这种毒电波番你能对上暗号反而是不幸的事
      编剧太恶意了把观众的现状啊过去的感情全部从观众想要隐藏一辈子的内里翻出来，然后再用最纯挚最原始的歌词像着高压水枪一样冲干净
      虽然方法很毒很暴力，但这一套下来有谁能忍得住不沉迷啊</p>
    <p>很多日本人不接受mygo似乎也与这种往伤疤狠狠戳的真实感有关</p>`},{floor:"4239",username:"宵暗花火496",time:"2023-12-11 16:48",reply:"4235",comment:`<p>其实真正的送别，没有长亭古道，没有劝君更尽一杯酒。</p>
    <p>就是在一个和平时一样的清晨，有的人留在昨天了。</p>`},{floor:"4243",username:"typeomicron",time:"2023-12-11 23:41",reply:"4238",comment:`<p>我在写越轨者那篇文章的时候还只是旁敲侧击一下，但现在看见越来越多大家的感想之后…</p>
    <p>只能说mygo背后的真的是很“纯粹”的感情。</p>
    <p>不添加任何矫饰，就只是原原本本地将少女们曾受的伤痕叙述出来。</p>
    <p>那并不是什么大不了的事情，但也绝非能够一笑而过的琐事。</p>
    <p>独角兽使用的是一种心照不宣的密语，那些明白的人会明白她想传达的东西。</p>
    <p>但那种密语的正体却是伤痕，是不能公之于众的爱与阵痛。</p>
    <p>所以我再发出一些暴言，我认为像这样狂热地喜欢着mygo的人，一定是曾经历过类似的东西的人。</p>
    <p>就像把故事的线索藏在各处一样，mygo同样也把那背后庞大的情绪的线索悄悄藏了起来，形成了一片独属于“知情者”的隐秘花园。</p>
    <p>嘛，也就是在这种没什么人会爬到的楼层才敢说这样的话了</p>
    <p>所以看完mygo，我最喜欢的人其实是独角兽老师，真的能感受到她的灵魂的共鸣和热量。</p>`},{floor:"4244",username:"Develde",time:"2023-12-12 07:51",reply:"",comment:`<p>哇，突然就共情遇见祥子前的灯了。</p>
    <p>看到大家有过留下痕迹的朋友真心感到羡慕。自己经历的离别绝不算少，但同学也好网友也好，甚至是亲人的离世，真的消失了也就消失了。回过头甚至连它结束了的感慨都不会有。</p>
    <p>昨天看到chaurin的故事才猛然想起来，哦，我高中时也有一个非常非常要好的朋友，现在却连他的存在都需要人提醒，他叫什么来着？</p>
    <p>并不是没有那么要好，也不是没有过热烈的情感，但就好像你在享用一顿珍馐时，每一滴快乐都是真实强烈的，用罢也会想要下次再来，但却不会对 这顿饭 本身再抱有过多的感情。</p>
    <p>不过我倒是比灯恶劣的多了，早早就理解并接受了自己的自私冷漠，完全不会因此烦恼，说这番话也是完完全全的自我感动。但我多少能明白一点灯的酸楚了，想要和你们一样，想要成为人类。</p>`},{floor:"4245",username:"kngchau",time:"2023-12-12 12:08",reply:"4244",comment:`<p>“普通和理所当然，是什么呢？”</p>
    <p>没有什么感情是“人类必须有的”，没有什么行为是“人类必须做的”，虽然你们也能看出来，我生活中是个超级感性的人，但是我其实有的时候很讨厌自己这一点，如果敏感的情绪是“人类应该有的”，那我其实不想成为人类(笑</p>
    <p>一来敏感的人只有遇上同样敏感的人才能得到理解，大部分时候得到的评价只能是“矫情”和“作”。二来其实很多时候我哭过一场或者作完之后自己也很讨厌这样的自己，很多时候完全就是自己想太多，陷入了一些很莫名其妙的情绪</p>
    <p>偷偷说，其实我看完之后又回过头去看了第8话soyo和祥子的对手戏，感觉祥子的话就像是在我脸上一个巴掌又一个巴掌地扇</p>
    <p>但是我真的觉得祥子的话是可以引以为戒的，“总是沉浸在过去里真不像样”、“你满脑子都是你自己呢”。</p>
    <p>总是沉浸在过去的经历走不出来不是一件好事，它有时候会变成拿加了滤镜的过去的美好自我感动，这是一种很不好的，有时候甚至是(就像soyo那样的)虚假的、自我为中心的情绪</p>
    <p>
      说了这么多，我是想说，大家做自己就好啦，经历一场别离之后能迅速走出来继续自己的生活，我认为这是一种很出色的能力，而不是“冷漠”，人总要继续生活，那些在我们生命中成为了过客的美好的人，也绝不希望我们因为他们郁郁寡欢甚至停滞不前不是么？
    </p>`},{floor:"4248",username:"追风酱",time:"2023-12-13 08:59",reply:"4159",comment:"<p>百分之八十的百合作品程度也就到这了</p>"},{floor:"4250",username:"kngchau",time:"2023-12-13 23:08",reply:"4248",comment:`<p><del>可以了解一下女性向的真·百合作品的尺度</del></p>
    <p>不过的确像是MyGO这种号称有百合元素的作品其实根本一点都不百合嘛！我真心觉得里面的女女关系都是挺正常的，我感觉我身边就能遇到的或者有切身体会的关系，感觉就是很普通的姑娘之间的爱恨纠葛</p>`},{floor:"4251",username:"枞枞那年",time:"2023-12-13 23:23",reply:"4250",comment:`<p><del>chaurin为何如此了解？</del></p>
    <p>不过真的吗，表界的百合以及泛百合作品我还是看过不少的，包括晋江，大部分确实还是很清水的</p>`},{floor:"4252",username:"nks0_inf",time:"2023-12-13 23:41",reply:"4250",comment:`<p>话说百合真的有女性向吗？感觉一般都是百合男性向耽美女性向 <del>即使有男性向的伪娘以及很多直男喜欢玩基佬梗</del> </p>
    <p>可能是猴区处男多吧，如果是一群男生这么互动他们之间的关系肯定有点不对劲，所以看mygo多少有点超出一般朋友关系的感觉， <del>版里mygo同人很多都是大量重力展开，不是杀就是搞百合</del></p>`},{floor:"4254",username:"kngchau",time:"2023-12-13 23:59",reply:"4251",comment:`<p>坏了，我要被当成奇怪的女孩子了</p>
    <p>啊啊啊</p>
    <p>你们不要误会啊</p>
    <p>我真是直的</p>
    <p>但是，就，emmmm，其实清汤寡水文更考验功底的，女性向作品如果清汤寡水，那笔力需要相当了得才能看得开心吧</p>`},{floor:"4255",username:"kngchau",time:"2023-12-14 00:03",reply:"4252",comment:`<p>如果是一群男生这么搞我磕爆好吧</p>
    <p>其实男生之间的友情我感觉更君子之交淡如水一点，但是闺蜜之间，尤其是国内哦，我感觉真的是什么都可以一起做的程度</p>
    <p>比如我一周至少一半时间跟你们的友人A睡在一起，我感觉闺蜜睡在一起挺正常，但是两个男生睡一张床那铁定是有点啥吧</p>
    <p>别说这了，前两天出去旅游，在景区看到两个男生一起出来旅游我俩都忍不住开磕了</p>
    <p>闺蜜一起出去旅游感觉很正常，男生一起出去旅游住在一起感觉，emmm，不那么常见吧</p>`},{floor:"4256",username:"谷不勤",time:"2023-12-14 00:06",reply:"",comment:`<p>“我一周至少一半时间……”</p>
    <p>随口说出让长颈鹿多吃三大碗饭的话语…</p>
    <p>chaurin，实际宠粉！</p>`},{floor:"4258",username:"hejuujur",time:"2023-12-14 00:09",reply:"",comment:`<p>虽然我不是不知道中国闺蜜</p>
    <p>但你们这</p>
    <p>你知道有个名词叫事实婚姻吗</p>`},{floor:"4261",username:"枞枞那年",time:"2023-12-14 00:16",reply:"",comment:"<p>群友一下就参透了，一半时间，晚上是一半，白天是另一半</p>"},{floor:"4262",username:"a1dehyd3",time:"2023-12-14 01:07",reply:"",comment:`<p>见证巴别塔
      实在是感慨 好青春
      − 可以把这里当留言版吗 ...
      现在半只脚已经踏入社会，但是乐队其他朋友们都要比我小一届或者两届。有时候自己的心情真的就不知道怎么开口，无法和兄弟们分享，可能是因为男生从小被教育要独立，所以很难有像闺蜜那样的关系吧。
      在乐队里我是贝斯手，虽然我们排练的歌里面一般我的部分都是最简单的，但是我也就只能尽可能高水平去完成。看着后辈们水平越来越好，羡慕(自己大二以后才开始练琴
      感觉确实有点迟了orz)，更多的还是开心吧，至少好的技术作为一个基础，他们肯定也能坚持在玩音乐的路上。
      现在想的是，和社团还有乐队的朋友们至少在校园乐队这一阶段不留遗憾。以后的路再慢慢一边走一边看吧。</p>`},{floor:"4264",username:"奥托·爱德华·利奥波德",time:"2023-12-15 15:31",reply:"4255",comment:"<p>我跟我一个同事合租，所以经常一起出入，结果就这居然被单位里的女同事嗑起了cp</p>"},{floor:"4266",username:"kngchau",time:"2023-12-17 09:21",reply:"4264",comment:"<p>那必然磕好吧，不知道你们住一起看你们经常在一起就或许会想磕，知道你们住一起就更想磕了呀</p>"},{floor:"4267",username:"kngchau",time:"2023-12-17 09:24",reply:"4262",comment:`<p>本科时的校园乐队真的是我的青春啊！</p>
    <p>我从小学的是古典吉他，也是想玩乐队改学了电吉他，刚组乐队那会因为缺贝斯还自学了贝斯哭笑现在想想那段时光，真的好美好好怀念啊</p>`},{floor:"4268",username:"kngchau",time:"2023-12-17 09:25",reply:"4261",comment:`<p>你们够了哇</p>
    <p>我俩有课要回学校！没课时间在一起！有课的时候还是要住宿舍的！</p>`},{floor:"4269",username:"fenggehao",time:"2023-12-17 11:45",reply:"4268",comment:`<p>懂了
      只要毕业了就可以即刻同居！</p>`},{floor:"4271",username:"kngchau",time:"2023-12-18 12:50",reply:"4269",comment:`<p>你还真别说，之前我们两家聚餐的时候，家长们就说如果我俩毕业都能在本地找到工作还都没对象，就给我俩买套小户型先住着，省一套房子钱</p>
    <p>不过我觉着是没戏，最近追她的人好多，是继初中以来第二多的一次</p>
    <p>而且有一个是我看了都觉得帅的那种</p>`},{floor:"4272",username:"typeomicron",time:"2023-12-18 12:54",reply:"",comment:`<p>两家聚餐</p>
    <p>一套小户型</p>
    <p><del>虽然这么说很ky……但是……chaurin……你有没有考虑过友人A是……的可能性(((</del></p>`},{floor:"4274",username:"hejuujur",time:"2023-12-18 12:57",reply:"",comment:`<p>呱！是研究生学姐</p>
    <p>学姐，能不能保佑我上个岸QAQ</p>`},{floor:"4275",username:"顾秋声",time:"2023-12-18 13:16",reply:"",comment:"<p>呱！明明是ansy专楼，为什么……为什么我却品到越来越熟悉的海希味道了！</p>"},{floor:"4277",username:"枞枞那年",time:"2023-12-18 13:45",reply:"",comment:`<p>悲，已经素睦化了</p>
    <p><del>某些人甚至急得恨不得上去手操</del></p>`},{floor:"4278",username:"kngchau",time:"2023-12-18 14:24",reply:"",comment:`<p>哈哈哈哈不是，你们在脑补什么呀，我俩就是字面意思的幼馴染，两家人关系超级好，我们两家就是会定期聚餐的啊。我家她家都常备彼此的生活用品的，两家从小都当自己家有两个女儿养的</p>
    <p>而且其实要真论起来，我俩还有点血缘关系的，她得叫我一声表姐</p>
    <p>不过真是直的哈！她就是嫌谈恋爱麻烦， 要不那些个追求者我都心动了</p>
    <p>再说了闺蜜当舍友不是很正常嘛，房价很贵唉，省一套房子好多钱呢！</p>`},{floor:"4279",username:"kngchau",time:"2023-12-18 14:25",reply:"4274",comment:"<p>哇，那这两天就要考试了吧！加油加油，祝你顺利上岸呀！</p>"},{floor:"4286",username:"寅苑庞甲邢涂",time:"2023-12-19 01:22",reply:"4255",comment:`<p>兄弟也逛泥潭，匿了</p>
    <p>一起出去玩，住电竞酒店，甚至特意选择了大床房，方便在床上玩桌游，晚上的时候躺床上把电脑接到酒店电视上一起看番</p>
    <p>
      实际都是直男，就像你说你觉得闺蜜睡一起很正常，我们也都不觉得有什么。你磕男生之间也好，楼里的各位磕女生之间也好，一方面来讲是因为不了解所以用文艺作品中认识到的关系来代入；另一方面来说，大家都会向往纯洁高尚的情谊，不管是友情、爱情还是其他的什么。
    </p>
    <p>我觉得这样的感情也是邦邦这种作品的醍醐味，换句话说，就是キラキラだとか夢だとか</p>`},{floor:"4287",username:"kngchau",time:"2023-12-19 11:46",reply:"4286",comment:`<p>要是放在之前你跟我这么说我肯定觉得你在狡辩(doge)，但是现在我相信了，因为放在一个月之前也想不到会有那么多人磕我们两个</p>
    <p><del>(我昨晚上还把她拽过来问她说对我这么好是不是就是馋我身子，她说帅哥身子那么诱人那么多才不馋我的</del> </p>
    <p>
      哈哈哈哈，所以代入一下似乎就能理解啦，本来身边比较熟的男孩子就比较少，对男孩子之间的关系脑补居多，所以看到关系亲密的男孩子就会忍不住开磕。所以也能理解你们看到我俩为什么想磕啦，是一个道理嘛。大家对这种美好的，キラキラ的亲密关系都会很向往啊！
    </p>
    <p>不过话说回来，磕也不一定只是对爱情才能用的词呀！你和兄弟キラキラ的友情我先磕为敬</p>`},{floor:"4292",username:"宵暗花火496",time:"2023-12-19 12:11",reply:"",comment:"<p>祝爱者更爱，不爱者更信赖</p>"},{floor:"4295",username:"typeomicron",time:"2023-12-19 12:59",reply:"",comment:"<p>chaurin是不是每天有让我们尖叫抓挠的指标啊</p>"},{floor:"4297",username:"万世常青",time:"2023-12-19 22:28",reply:"",comment:`<p>看完mygo的人会伸长脖子看其他直播看mygo的人。
      我愿意称之为一辈子看mygo的循环</p>`},{floor:"4307",username:"kngchau",time:"2023-12-20 21:55",reply:"",comment:`<p>其实那天翻完聊天记录之后又不死心拐弯抹角通过几个朋友打听了一下学姐的情况，还妄想着能不能联系或者偶遇一下。</p>
    <p>据朋友打听到的消息说，她好像本科毕业就去了荷兰，最近好像结婚了。她微信已经很久没有更新状态了，似乎QQ还在用，但是我也不敢问，问了也不敢加。</p>
    <p>果然现实生活还是不可能像小说一样</p>
    <p>算啦</p>
    <p>祝她以后也能永远幸福吧！希望有一天她会想起当年有一个笨手笨脚的小学妹的时候，也能会心一笑就好啦</p>
    <p>🎵但你手如明日便要远离，愿你可以留下，共我曾愉快的记忆
      🎵当世事再没完美，可远在岁月如歌中找你</p>`},{floor:"4311",username:"kngchau",time:"2023-12-20 22:27",reply:"",comment:`<p>姨妈了，大晚上有点emo</p>
    <p>大家早点睡哦！晚安啦</p>`},{floor:"4320",username:"kngchau",time:"2023-12-21 21:49",reply:"",comment:`<p>你们干嘛呀！我不就是姨妈来了emo一下！搞得好像我怎么了一样！</p>
    <p>都给本姑娘开心起来！</p>
    <p>我只许陌生人因为我开心，不许陌生人因为我难过！</p>
    <p>不许！</p>
    <p>哼</p>`},{floor:"4327",username:"RitSu″",time:"2023-12-22 10:16",reply:"",comment:"<p>很幸运在没有被剧透情况下一口气补完了mygo和大部分热门二创，更幸运的是搜ngatag第一眼点进了这个直播楼。花了一天半时间一楼不落的看下来了，酣畅淋漓！带给我完全不亚于看mygo的体验，感谢楼主和各位楼友！</p>"},{floor:"4336",username:"AWGBRTSVA",time:"2023-12-24 22:02",reply:"",comment:`<p>追完了……我现在是世界上最空虚的人了</p>
    <p>情绪有点激动，很难完整说出内心的感受，没能提前几周和大家一起度过那精彩的一周，真的感到很可惜，但最终，我也看到了这闪耀而温柔的故事，也真的很幸运。</p>
    <p>谢谢chaurin，谢谢友人A，谢谢大家。
      最后提前祝大家圣诞节快乐，这或许是我收到的最好的圣诞礼物</p>`},{floor:"4340",username:"cinnaple",time:"2023-12-27 11:22",reply:"",comment:`<p>爬完了，真的超级美味，无论是戏里还是戏外，多谢款待</p>
    <p>第一次感受到用这种细腻的情感去品味一个故事是什么样的体验</p>
    <p>不得不感慨，这栋楼真的是个奇迹呢，由mygo、chaurin、友人A和长颈鹿们一起创造的，独一无二的奇迹</p>
    <p>虽然有点遗憾没能早点参与，但幸好也没错过</p>`},{floor:"4360",username:"kngchau",time:"2024-01-01 17:48",reply:"",comment:`<p>这两天跟友人A和以前的几个朋友久违地见了个面，彻夜长谈去了，一打开NGA看到好多朋友的新年祝福，好感动！</p>
    <p>朋友们大家新年快乐呀！！2023你们带给了我许许多多的快乐，2024大家也要开开心心顺顺利利呀！</p>`},{floor:"4373",username:"kngchau",time:"2024-01-11 13:03",reply:"",comment:`<p>今天终于想通了一个困扰了我们好久的问题，这还要多谢在NGA认识的姐姐的开导！</p>
    <p>从来没有这么轻松的过，开心！</p>
    <p>爱你们哦！</p>`},{floor:"4380",username:"typeomicron",time:"2024-01-11 19:51",reply:"",comment:`<p>恭喜！真的，除了恭喜之外已经没什么好说的了</p>
    <p>在一开始在楼里说出“我反而羡慕你和友人”的时候，我也没想到这个故事会发展到现在这个样子啊
      <del>该说是嗅觉敏锐呢还是奇怪的雷达发动了呢</del>
    </p>
    <p>接下来就是……除了见证和支持你们的旅途之外，还有什么是必要的呢？
      无论如何，如果能够一直看见chaurin和友人A的活跃，如果能够再看见之后的故事的话，那就再好不过了！</p>
    <p>要一直开心啊！</p>`},{floor:"4382",username:"甲沙时辰和姬",time:"2024-01-11 20:44",reply:"",comment:`<p>鼓起勇气做出决定跨出一步
      却发现本以为陌生的、崭新的地方
      早已是两人一同度过的种种日常</p>
    <p>“还没有我们日常甜”</p>
    <p>恭喜，祝福，以及之后有机会再和大家聊聊说说两人间或平淡或嬉闹的日常吧！
      感谢两位为我、为大家带来的快乐和温馨啊</p>`},{floor:"4402",username:"枞枞那年",time:"2024-01-22 12:00",reply:"",comment:`<p>chaurin小心点，你要火了</p>
    <p><img src="/image/4402.jpg" style="zoom: 50%;" /> </p>`},{floor:"4412",username:"少年__A",time:"2024-01-23 03:56",reply:"",comment:`<p>
      台长来的，果然超有意思啊，楼主也好可爱，解读也很细节，不敢想象这是第一遍看，有好多都是我看了好多遍才理解到的，楼主和soyo的共鸣也可以说是点睛之笔了，MyGO的角色确实是相当真实且鲜活的啊，我在最近经历了好几次和朋友闹翻，在金钱上也出了点问题，然后切实体会到了祥子这个角色的真实性
    </p>
    <p>不过要说性格的话，我可能还是最像灯宝吧，是一样感情迟钝但又强烈的人，也许也是因此在N刷MyGO时才彻底理解了第三集的感情，然后没忍住久违地哭了啊(我真的哭的好少，可能一年才会哭个一次)</p>
    <p>
      楼主也让我想到我之前一个的女性朋友，虽是异性但却是曾经最好的朋友了吧，不久前和她冷战然后和好了，但和她的关系却回不到过去的样子了，她也和楼主一样地爱哭一样地感性呢，之前只觉得烦，和她冷战也是因为这个，但楼主却明明这么可爱，也许我真的太迟钝了吧
    </p>`},{floor:"4426",username:"鬼龙影天",time:"2024-01-24 14:32",reply:"",comment:"<p>？后排风向怎么回事，在我不知道的角落我嗑的茶A成真了？</p>"},{floor:"4432",username:"twinglesama",time:"2024-01-25 15:01",reply:"",comment:`<p>
      昨天中午开始看，一天摸鱼爬完全部了，感谢茶屋灵和友人a为我提供了近乎完美的mygo追番体验，甚至这层楼里也充斥着契科夫的军火库，这种与追番时一致的独一无二体验是目前为止唯有mygo和相关延伸能带给我，而楼内较为纯净的讨论氛围也是许久未曾见到过的景象，再度感谢两位有着鲜明性格和独特见解的小姐姐，至福
    </p>`},{floor:"4447",username:"mia的可颂",time:"2024-01-28 02:48",reply:"",comment:`<p>已经很久没有在网上感受到这么丰富的美好了(可能现实中也麻木了很久了)。谢谢楼主，谢谢大家</p>
    <p>几千楼看下来，感觉像是做了一场梦，但这个梦如此真实地摆在我面前。楼主和朋友之间的感情、楼里各位陌生人的善意都像是梦一样，越往后看，越是不敢相信这样的事情真的呈现于今天的互联网上。</p>
    <p>但这些都是真的</p>`},{floor:"4457",username:"GodisaDeadII",time:"2024-01-29 22:50",reply:"",comment:`<p>我妈：你拍这茶叶干嘛</p>
    <p>我：网友们会懂的</p>
    <p><img src="/image/4457.jpg" style="zoom: 40%;" /> </p>`},{floor:"4487",username:"kngchau",time:"2024-02-11 11:41",reply:"",comment:"<p>突然想起来NGA还有个号，新年快乐呀大家！！！</p>"},{floor:"4497",username:"kngchau",time:"2024-02-17 20:54",reply:"",comment:"<p>假期你不要走，你走了我可怎么活啊</p>"},{floor:"4506",username:"枞枞那年",time:"2024-02-17 21:01",reply:"",comment:`<p>总之就是十分离谱</p>
    <p><img src="/image/4506.jpg" style="zoom: 67%;" /> </p>`},{floor:"4510",username:"远坂娅",time:"2024-02-21 13:57",reply:"",comment:`<p>本来从TV2那边吐槽大会过来，还想说只看楼主的把这个帖子看完，毕竟一上来就跟我说4000多楼，我都傻了。</p>
    <p>然后翻了一两页发现还真的一楼一楼的看蔡有意思。断断续续看完了，真有总自己去追了一遍mygo的感觉。</p>
    <p>mygo刚出的时候播了几集就有看一些人推荐，但是我看番喜欢等完结了再连续性的看完。后来完结以后带我入坑的发小也来推荐我看，我就去看了第一集。但当时还是没有补完的冲动。(他动不动推荐含金量稍微低了些)</p>
    <p>后来就发现台长多了一个多小时的吐槽大会。作为12年开始逛b站的老人，台长是我很喜欢的up，这么多年中二电视台看下来，他这老婆罗门要很喜欢的作品才会单独做AMV，这让我好奇mygo到底有多好。</p>
    <p>后面我就工作日晚上第一天1-3集，第二天4-7集，第三天8-13集。说来也是神奇，在毫无剧透的情况下看的这么卡点。</p>`},{floor:"4513",username:"yōu",time:"2024-02-28 00:59",reply:"",comment:`<p>呼 终于是爬到了最后 特意停掉音乐写回复以示致敬(大家的文笔都好好 好羡慕！)</p>
    <p>以前看完mygo只在B站和lofter看过二创 不曾想今日能与这样一份瑰宝撞个满怀 不管是最开始(谁知道前9集的反应加在一起只是个开篇了？！)还是从第十话拉开的盛大帷幕 以及最后的跌宕泪笑 真是和mygo本身有点像呢 不管怎样
      过去了3个月颇有些人走茶凉的架势呢(笑)</p>
    <p>但是我想大家都会像我一样 将路上的果子尽数品尝 深埋在心底的种子也许还能再开出怀恋的花 明年的1月再见了！</p>
    <p>又及： 反正看到这里的都是自己人 大家在lofter上有什么特别喜欢的推荐吗(ansy尤其欢迎)</p>
    <p>我会在高考(嗯？)之后回来挨个看完的！</p>
    <p>又又及：写完才发现写了好多…… 好矫情！</p>`},{floor:"4557",username:"m248149135",time:"2024-08-09 17:14",reply:"",comment:`<p>感慨实多，即使主贴完结这么久了 ，仍忍不住留下感想。正如chaurin所言:&quot;MyGO真是个很有趣的番 ，它一定需要各种经历性格不同的人一起分享自己的体验才能完全理解它。&quot;感觉是道出了这部作品的精髓。
      年近35 ，多年不看新番 ，今年被日推到了《迷星叫》，瞬间就被巨大情感洪流击中 ，一天补完动画，哭成傻逼 <del>老婆评价</del> ，真是多年未有的体验。之后又拉着朋友听他的看法 ，又看各种解析
      ，尤其是Reaction视频。不同经历的人着眼点确实差异很大 ，有组乐队经历的人的Reaction尤其值得一看。</p>
    <p>比如一位国内的up提出，如果乐队只是图一乐那是不必在意许多的，但如果是追求长期稳定的乐队，那&quot;组乐队就是跟每位成员分别谈恋爱&quot;；又如一位日本的up会从专业角度分析每次live过程中的情感变化
      ，或者第六集立希其实有办法不用这样给自己上压力等等 ，都是我们这种外行爱好者难以获取的信息和视角。
      顺带一提，那位日本乐队哥和chaurin一样，对于退黄瓜时soyo面对睦那句话的反应，有着瞬间的共情。果然日语使用者更能理解其中微妙的情感差异。
      而我之前看了不少分析理解了这里，但始终无法共情。恰巧也是看了chaurin这帖子去讨论时，朋友说“拿男女朋友的例子好解释”，想起了一些往事才突然共情了soyo——“唯独不想听你说这个”以及“情绪上头了之后是会忽略掉自己曾经的行为的”。真是常看常新。
    </p>
    <p>虽然这么说，随着品鉴次数增多 ，就像练吉他多了会长茧 、手指不再敏感，内心似乎也变得不那么易感了。哪怕去看第10集都从原来台上台下的5哭1笑变成现在的4哭2笑。或许青春的鼓动和激素消退之后就是这样的吧
      ，曾经的刻骨铭心都会变成漫不经心。
      但是 ，认真地说 ，chaurin的心路历程瞬间让我回到补番的那个下午 <del>重新破了大防 因为太熟了所以看文字就能脑内播放</del> 。
      我还无法很好描述内心感受，但我觉得，让人产生共鸣的并不是“照镜子”，而是从每个人自己的经历，培养出的性格与思维模式，去得出自己的理解，发出内心的呐喊。歌是诗，文字也是诗。正因为chaurin不是soyorin，友人A也不是ano酱，这帖子才显得尤为动人。当种种声音交汇起来，新的诗/歌就诞生了。
      <del>看一辈子mygo之歌</del>
      这帖子我还是上班摸鱼看的 ，流眼泪和平复心情颇费一番功夫。感谢chaurin和友人A的分享 ，让人重新体验到了mygo的魅力。感谢mygo，让人重新找回了青春的鼓动。
      <del>友人A你做得好，你做得好啊.JPG</del>
    </p>`}];Mock.mock("/api/about","get",{code:200,message:"success",data:["本站为我的练手之作，虽然现在的主题为Acha，但以后遇到什么有意思的东西都可能塞进来","一点儿样式都没写（没有美工妹子，摆了，默认的也不错","使用了Vue3+ElementPlus的静态网站，Pinia用于状态管理，Mock.js模拟网络请求（有生之年一定会用SpringBoot写一个配套的后端（确信（所以服务器谁来赞助一下（暗示","部署在GithubPages上，并通过DNS关联了本域名achastory.cn","最后更新时间：2024-10-17"]});Mock.mock("/api/events","get",{code:200,message:"success",data:[{time:"2023/6/29",title:"动画 BanG Dream! It's MyGO!!!!! 正式播出",content:"但此刻debuff拉满的mygo还如同每个季度都会刷新的杂鱼偶像番"},{time:"2023/7/27",title:"为什么要演奏春日影！",content:"第七话的播出正式拉开了mygo动画的“疯狂时代”"},{time:"2023/11/19",title:"天使茶屋降临NGA",content:"用户kngchau在NGA论坛开贴：被朋友拉来直播mygo了……"},{time:"2023/11/21",title:"长颈鹿集会正式成立",content:"没有人会想到，这么一个为了看直播而成立的群聊，会成为chaurin的忠实后援团"},{time:"2024/1/11",title:"chau与群友的私信+1",content:"至此acha第一季堂堂完结"},{time:"2024/2/9",title:"天使茶屋降临长颈鹿集会",content:"令人难忘的新年开始了"},{time:"2024/9/28",title:"AchaStory企划正式开始",content:"起码新建了文件夹"}]});Mock.mock("/api/posts/letters","get",{code:200,message:"success",data:letters});Mock.mock("/api/steps","get",{code:200,message:"success",data:[{title:"step1",description:"不反感3d/乐队/轻百合/女女关系性"},{title:"step2",description:"观看动画BanG Dream! It's MyGO!!!!!并非常喜欢"},{title:"step3",description:"化身长颈鹿四处寻找食物时，找到了NGA茶楼"},{title:"step4",description:"刷完了茶楼并找到了长颈鹿集会"},{title:"step5",description:"补完了‘茶史’(包括但不限于acha第一季/dlc/夏纪rp)"},{title:"step6",description:"最后因缺乏食物天天翘首以盼天使茶屋降临"},{title:"step7",description:"等待Ave Mujica的到来更是折磨"}]});Mock.mock("/api/books","get",{code:200,message:"success",data:books});Mock.mock("/api/posts?id=38725142","get",{code:200,message:"success",data:floorDetail$3});Mock.mock("/api/posts?id=38498128","get",{code:200,message:"success",data:floorDetail$2});Mock.mock("/api/posts?id=38466050","get",{code:200,message:"success",data:floorDetail$1});Mock.mock("/api/posts?id=38447162","get",{code:200,message:"success",data:floorDetail});const app=createApp(_sfc_main);app.use(pinia);app.use(router);app.mount("#app");export{toHandlers as $,reactive as A,provide as B,withDirectives as C,vShow as D,getCurrentInstance as E,Fragment as F,isString as G,isObject as H,toRef as I,resolveComponent as J,createBaseVNode as K,createTextVNode as L,toDisplayString as M,NOOP as N,markRaw as O,toRefs as P,resolveDynamicComponent as Q,withKeys as R,isVNode as S,Transition as T,render as U,hasOwn as V,isFunction as W,renderList as X,isPromise as Y,defineStore as Z,isArray$1 as _,onBeforeUnmount as a,Comment as a0,toRaw as a1,vModelCheckbox as a2,resolveDirective as a3,onBeforeMount as a4,onUpdated as a5,onUnmounted as a6,commonjsGlobal as a7,getDefaultExportFromCjs as a8,isDate as a9,useAttrs as aa,Text as ab,TransitionGroup as ac,onActivated as ad,toRawType as ae,vModelText as af,toHandlerKey as ag,cloneVNode as ah,Teleport as ai,readonly as aj,onDeactivated as ak,shallowReactive as al,getCurrentScope as am,camelize as an,warn as ao,watch as b,computed as c,onScopeDispose as d,defineComponent as e,openBlock as f,createBlock as g,withCtx as h,isRef as i,createElementBlock as j,normalizeClass as k,withModifiers as l,renderSlot as m,normalizeStyle as n,onMounted as o,createVNode as p,createCommentVNode as q,ref as r,shallowRef as s,nextTick as t,unref as u,useSlots as v,watchEffect as w,h as x,mergeProps as y,inject as z};
