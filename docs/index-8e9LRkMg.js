(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var bv={exports:{}},rh={},Dv={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),UI=Symbol.for("react.portal"),BI=Symbol.for("react.fragment"),zI=Symbol.for("react.strict_mode"),$I=Symbol.for("react.profiler"),HI=Symbol.for("react.provider"),WI=Symbol.for("react.context"),qI=Symbol.for("react.forward_ref"),GI=Symbol.for("react.suspense"),KI=Symbol.for("react.memo"),QI=Symbol.for("react.lazy"),gg=Symbol.iterator;function XI(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var Lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Vv={};function Go(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||Lv}Go.prototype.isReactComponent={};Go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mv(){}Mv.prototype=Go.prototype;function Ip(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||Lv}var Sp=Ip.prototype=new Mv;Sp.constructor=Ip;Ov(Sp,Go.prototype);Sp.isPureReactComponent=!0;var yg=Array.isArray,Fv=Object.prototype.hasOwnProperty,Rp={current:null},jv={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Fv.call(e,r)&&!jv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Nl,type:t,key:i,ref:o,props:s,_owner:Rp.current}}function YI(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function JI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _g=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JI(""+t.key):e.toString(36)}function $u(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case UI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+hd(o,0):r,yg(s)?(n="",t!=null&&(n=t.replace(_g,"$&/")+"/"),$u(s,e,n,"",function(c){return c})):s!=null&&(Ap(s)&&(s=YI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(_g,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",yg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+hd(i,l);o+=$u(i,e,n,u,s)}else if(u=XI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+hd(i,l++),o+=$u(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mu(t,e,n){if(t==null)return t;var r=[],s=0;return $u(t,r,"","",function(i){return e.call(n,i,s++)}),r}function ZI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},Hu={transition:null},eS={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:Rp};function Bv(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:mu,forEach:function(t,e,n){mu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mu(t,function(){e++}),e},toArray:function(t){return mu(t,function(e){return e})||[]},only:function(t){if(!Ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=Go;pe.Fragment=BI;pe.Profiler=$I;pe.PureComponent=Ip;pe.StrictMode=zI;pe.Suspense=GI;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;pe.act=Bv;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ov({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Rp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fv.call(e,u)&&!jv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Nl,type:t.type,key:s,ref:i,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:WI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HI,_context:t},t.Consumer=t};pe.createElement=Uv;pe.createFactory=function(t){var e=Uv.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:qI,render:t}};pe.isValidElement=Ap;pe.lazy=function(t){return{$$typeof:QI,_payload:{_status:-1,_result:t},_init:ZI}};pe.memo=function(t,e){return{$$typeof:KI,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Hu.transition;Hu.transition={};try{t()}finally{Hu.transition=e}};pe.unstable_act=Bv;pe.useCallback=function(t,e){return Ut.current.useCallback(t,e)};pe.useContext=function(t){return Ut.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Ut.current.useEffect(t,e)};pe.useId=function(){return Ut.current.useId()};pe.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Ut.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};pe.useRef=function(t){return Ut.current.useRef(t)};pe.useState=function(t){return Ut.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Ut.current.useTransition()};pe.version="18.3.1";Dv.exports=pe;var L=Dv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=L,nS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),sS=Object.prototype.hasOwnProperty,iS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sS.call(e,r)&&!oS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:nS,type:t,key:i,ref:o,props:s,_owner:iS.current}}rh.Fragment=rS;rh.jsx=zv;rh.jsxs=zv;bv.exports=rh;var g=bv.exports,$v={exports:{}},mn={},Hv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,ie){var ue=X.length;X.push(ie);e:for(;0<ue;){var Ee=ue-1>>>1,xe=X[Ee];if(0<s(xe,ie))X[Ee]=ie,X[ue]=xe,ue=Ee;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ie=X[0],ue=X.pop();if(ue!==ie){X[0]=ue;e:for(var Ee=0,xe=X.length,$t=xe>>>1;Ee<$t;){var Ye=2*(Ee+1)-1,Ht=X[Ye],St=Ye+1,Ot=X[St];if(0>s(Ht,ue))St<xe&&0>s(Ot,Ht)?(X[Ee]=Ot,X[St]=ue,Ee=St):(X[Ee]=Ht,X[Ye]=ue,Ee=Ye);else if(St<xe&&0>s(Ot,ue))X[Ee]=Ot,X[St]=ue,Ee=St;else break e}}return ie}function s(X,ie){var ue=X.sortIndex-ie.sortIndex;return ue!==0?ue:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,m=null,p=3,T=!1,k=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(X){for(var ie=n(c);ie!==null;){if(ie.callback===null)r(c);else if(ie.startTime<=X)r(c),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=n(c)}}function O(X){if(P=!1,C(X),!k)if(n(u)!==null)k=!0,zt($);else{var ie=n(c);ie!==null&&Lt(O,ie.startTime-X)}}function $(X,ie){k=!1,P&&(P=!1,_(v),v=-1),T=!0;var ue=p;try{for(C(ie),m=n(u);m!==null&&(!(m.expirationTime>ie)||X&&!x());){var Ee=m.callback;if(typeof Ee=="function"){m.callback=null,p=m.priorityLevel;var xe=Ee(m.expirationTime<=ie);ie=t.unstable_now(),typeof xe=="function"?m.callback=xe:m===n(u)&&r(u),C(ie)}else r(u);m=n(u)}if(m!==null)var $t=!0;else{var Ye=n(c);Ye!==null&&Lt(O,Ye.startTime-ie),$t=!1}return $t}finally{m=null,p=ue,T=!1}}var H=!1,I=null,v=-1,S=5,A=-1;function x(){return!(t.unstable_now()-A<S)}function N(){if(I!==null){var X=t.unstable_now();A=X;var ie=!0;try{ie=I(!0,X)}finally{ie?R():(H=!1,I=null)}}else H=!1}var R;if(typeof w=="function")R=function(){w(N)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,ut=Ce.port2;Ce.port1.onmessage=N,R=function(){ut.postMessage(null)}}else R=function(){D(N,0)};function zt(X){I=X,H||(H=!0,R())}function Lt(X,ie){v=D(function(){X(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){k||T||(k=!0,zt($))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(X){switch(p){case 1:case 2:case 3:var ie=3;break;default:ie=p}var ue=p;p=ie;try{return X()}finally{p=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ue=p;p=X;try{return ie()}finally{p=ue}},t.unstable_scheduleCallback=function(X,ie,ue){var Ee=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ee+ue:Ee):ue=Ee,X){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ue+xe,X={id:d++,callback:ie,priorityLevel:X,startTime:ue,expirationTime:xe,sortIndex:-1},ue>Ee?(X.sortIndex=ue,e(c,X),n(u)===null&&X===n(c)&&(P?(_(v),v=-1):P=!0,Lt(O,ue-Ee))):(X.sortIndex=xe,e(u,X),k||T||(k=!0,zt($))),X},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(X){var ie=p;return function(){var ue=p;p=ie;try{return X.apply(this,arguments)}finally{p=ue}}}})(Wv);Hv.exports=Wv;var aS=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=L,pn=aS;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qv=new Set,rl={};function Li(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(rl[t]=e,t=0;t<e.length;t++)qv.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,uS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vg={},wg={};function cS(t){return Zd.call(wg,t)?!0:Zd.call(vg,t)?!1:uS.test(t)?wg[t]=!0:(vg[t]=!0,!1)}function hS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dS(t,e,n,r){if(e===null||typeof e>"u"||hS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cp=/[\-:]([a-z])/g;function xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cp,xp);Tt[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cp,xp);Tt[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cp,xp);Tt[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kp(t,e,n,r){var s=Tt.hasOwnProperty(e)?Tt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dS(e,n,s,r)&&(n=null),r||s===null?cS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rs=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gu=Symbol.for("react.element"),oo=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),bp=Symbol.for("react.memo"),ms=Symbol.for("react.lazy"),Qv=Symbol.for("react.offscreen"),Eg=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=Eg&&t[Eg]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,dd;function Na(t){if(dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dd=e&&e[1]||""}return`
`+dd+t}var fd=!1;function pd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Na(t):""}function fS(t){switch(t.tag){case 5:return Na(t.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ao:return"Fragment";case oo:return"Portal";case ef:return"Profiler";case Pp:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kv:return(t.displayName||"Context")+".Consumer";case Gv:return(t._context.displayName||"Context")+".Provider";case Np:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bp:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case ms:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function pS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===Pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Us(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(t){var e=Xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yu(t){t._valueTracker||(t._valueTracker=mS(t))}function Yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sf(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Us(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jv(t,e){e=e.checked,e!=null&&kp(t,"checked",e,!1)}function of(t,e){Jv(t,e);var n=Us(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,Us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ba=Array.isArray;function Eo(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Us(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(ba(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Us(n)}}function Zv(t,e){var n=Us(e.value),r=Us(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ew(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ew(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _u,tw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_u=_u||document.createElement("div"),_u.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_u.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){gS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function rw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var yS=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(yS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function Dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,To=null,Io=null;function Ag(t){if(t=Ll(t)){if(typeof ff!="function")throw Error(q(280));var e=t.stateNode;e&&(e=lh(e),ff(t.stateNode,t.type,e))}}function sw(t){To?Io?Io.push(t):Io=[t]:To=t}function iw(){if(To){var t=To,e=Io;if(Io=To=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function ow(t,e){return t(e)}function aw(){}var md=!1;function lw(t,e,n){if(md)return t(e,n);md=!0;try{return ow(t,e,n)}finally{md=!1,(To!==null||Io!==null)&&(aw(),iw())}}function il(t,e){var n=t.stateNode;if(n===null)return null;var r=lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var pf=!1;if(Kr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){pf=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{pf=!1}function _S(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var za=!1,dc=null,fc=!1,mf=null,vS={onError:function(t){za=!0,dc=t}};function wS(t,e,n,r,s,i,o,l,u){za=!1,dc=null,_S.apply(vS,arguments)}function ES(t,e,n,r,s,i,o,l,u){if(wS.apply(this,arguments),za){if(za){var c=dc;za=!1,dc=null}else throw Error(q(198));fc||(fc=!0,mf=c)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(Oi(t)!==t)throw Error(q(188))}function TS(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Cg(s),t;if(i===r)return Cg(s),e;i=i.sibling}throw Error(q(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function cw(t){return t=TS(t),t!==null?hw(t):null}function hw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hw(t);if(e!==null)return e;t=t.sibling}return null}var dw=pn.unstable_scheduleCallback,xg=pn.unstable_cancelCallback,IS=pn.unstable_shouldYield,SS=pn.unstable_requestPaint,Xe=pn.unstable_now,RS=pn.unstable_getCurrentPriorityLevel,Lp=pn.unstable_ImmediatePriority,fw=pn.unstable_UserBlockingPriority,pc=pn.unstable_NormalPriority,AS=pn.unstable_LowPriority,pw=pn.unstable_IdlePriority,sh=null,mr=null;function CS(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(sh,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:PS,xS=Math.log,kS=Math.LN2;function PS(t){return t>>>=0,t===0?32:31-(xS(t)/kS|0)|0}var vu=64,wu=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Da(l):(i&=o,i!==0&&(r=Da(i)))}else o=n&~s,o!==0?r=Da(o):i!==0&&(r=Da(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wn(e),s=1<<n,r|=t[n],e&=~s;return r}function NS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Wn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=NS(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mw(){var t=vu;return vu<<=1,!(vu&4194240)&&(vu=64),t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function DS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Wn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Re=0;function gw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yw,Vp,_w,vw,ww,yf=!1,Eu=[],Cs=null,xs=null,ks=null,ol=new Map,al=new Map,ys=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ks=null;break;case"pointerover":case"pointerout":ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(e.pointerId)}}function Ta(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ll(e),e!==null&&Vp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function OS(t,e,n,r,s){switch(e){case"focusin":return Cs=Ta(Cs,t,e,n,r,s),!0;case"dragenter":return xs=Ta(xs,t,e,n,r,s),!0;case"mouseover":return ks=Ta(ks,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ol.set(i,Ta(ol.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,al.set(i,Ta(al.get(i)||null,t,e,n,r,s)),!0}return!1}function Ew(t){var e=fi(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=uw(n),e!==null){t.blockedOn=e,ww(t.priority,function(){_w(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);df=r,n.target.dispatchEvent(r),df=null}else return e=Ll(n),e!==null&&Vp(e),t.blockedOn=n,!1;e.shift()}return!0}function Pg(t,e,n){Wu(t)&&n.delete(e)}function VS(){yf=!1,Cs!==null&&Wu(Cs)&&(Cs=null),xs!==null&&Wu(xs)&&(xs=null),ks!==null&&Wu(ks)&&(ks=null),ol.forEach(Pg),al.forEach(Pg)}function Ia(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,VS)))}function ll(t){function e(s){return Ia(s,t)}if(0<Eu.length){Ia(Eu[0],t);for(var n=1;n<Eu.length;n++){var r=Eu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cs!==null&&Ia(Cs,t),xs!==null&&Ia(xs,t),ks!==null&&Ia(ks,t),ol.forEach(e),al.forEach(e),n=0;n<ys.length;n++)r=ys[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ys.length&&(n=ys[0],n.blockedOn===null);)Ew(n),n.blockedOn===null&&ys.shift()}var So=rs.ReactCurrentBatchConfig,gc=!0;function MS(t,e,n,r){var s=Re,i=So.transition;So.transition=null;try{Re=1,Mp(t,e,n,r)}finally{Re=s,So.transition=i}}function FS(t,e,n,r){var s=Re,i=So.transition;So.transition=null;try{Re=4,Mp(t,e,n,r)}finally{Re=s,So.transition=i}}function Mp(t,e,n,r){if(gc){var s=_f(t,e,n,r);if(s===null)Ad(t,e,r,yc,n),kg(t,r);else if(OS(s,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<LS.indexOf(t)){for(;s!==null;){var i=Ll(s);if(i!==null&&yw(i),i=_f(t,e,n,r),i===null&&Ad(t,e,r,yc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ad(t,e,r,null,n)}}var yc=null;function _f(t,e,n,r){if(yc=null,t=Dp(r),t=fi(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function Tw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RS()){case Lp:return 1;case fw:return 4;case pc:case AS:return 16;case pw:return 536870912;default:return 16}default:return 16}}var Ss=null,Fp=null,qu=null;function Iw(){if(qu)return qu;var t,e=Fp,n=e.length,r,s="value"in Ss?Ss.value:Ss.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return qu=s.slice(t,1<r?1-r:void 0)}function Gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tu(){return!0}function Ng(){return!1}function gn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tu:Ng,this.isPropagationStopped=Ng,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tu)},persist:function(){},isPersistent:Tu}),e}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=gn(Ko),Dl=ze({},Ko,{view:0,detail:0}),jS=gn(Dl),yd,_d,Sa,ih=ze({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(yd=t.screenX-Sa.screenX,_d=t.screenY-Sa.screenY):_d=yd=0,Sa=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),bg=gn(ih),US=ze({},ih,{dataTransfer:0}),BS=gn(US),zS=ze({},Dl,{relatedTarget:0}),vd=gn(zS),$S=ze({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),HS=gn($S),WS=ze({},Ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qS=gn(WS),GS=ze({},Ko,{data:0}),Dg=gn(GS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function Up(){return YS}var JS=ze({},Dl,{key:function(t){if(t.key){var e=KS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?Gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=gn(JS),e1=ze({},ih,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=gn(e1),t1=ze({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),n1=gn(t1),r1=ze({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=gn(r1),i1=ze({},ih,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=gn(i1),a1=[9,13,27,32],Bp=Kr&&"CompositionEvent"in window,$a=null;Kr&&"documentMode"in document&&($a=document.documentMode);var l1=Kr&&"TextEvent"in window&&!$a,Sw=Kr&&(!Bp||$a&&8<$a&&11>=$a),Og=" ",Vg=!1;function Rw(t,e){switch(t){case"keyup":return a1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function u1(t,e){switch(t){case"compositionend":return Aw(e);case"keypress":return e.which!==32?null:(Vg=!0,Og);case"textInput":return t=e.data,t===Og&&Vg?null:t;default:return null}}function c1(t,e){if(lo)return t==="compositionend"||!Bp&&Rw(t,e)?(t=Iw(),qu=Fp=Ss=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sw&&e.locale!=="ko"?null:e.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h1[t.type]:e==="textarea"}function Cw(t,e,n,r){sw(r),e=_c(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,ul=null;function d1(t){Fw(t,0)}function oh(t){var e=ho(t);if(Yv(e))return t}function f1(t,e){if(t==="change")return e}var xw=!1;if(Kr){var wd;if(Kr){var Ed="oninput"in document;if(!Ed){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Ed=typeof Fg.oninput=="function"}wd=Ed}else wd=!1;xw=wd&&(!document.documentMode||9<document.documentMode)}function jg(){Ha&&(Ha.detachEvent("onpropertychange",kw),ul=Ha=null)}function kw(t){if(t.propertyName==="value"&&oh(ul)){var e=[];Cw(e,ul,t,Dp(t)),lw(d1,e)}}function p1(t,e,n){t==="focusin"?(jg(),Ha=e,ul=n,Ha.attachEvent("onpropertychange",kw)):t==="focusout"&&jg()}function m1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oh(ul)}function g1(t,e){if(t==="click")return oh(e)}function y1(t,e){if(t==="input"||t==="change")return oh(e)}function _1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:_1;function cl(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Zd.call(e,s)||!Gn(t[s],e[s]))return!1}return!0}function Ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=Ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ug(n)}}function Pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nw(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=Nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pw(n.ownerDocument.documentElement,n)){if(r!==null&&zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Bg(n,i);var o=Bg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w1=Kr&&"documentMode"in document&&11>=document.documentMode,uo=null,vf=null,Wa=null,wf=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||uo==null||uo!==hc(r)||(r=uo,"selectionStart"in r&&zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&cl(Wa,r)||(Wa=r,r=_c(vf,"onSelect"),0<r.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=uo)))}function Iu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var co={animationend:Iu("Animation","AnimationEnd"),animationiteration:Iu("Animation","AnimationIteration"),animationstart:Iu("Animation","AnimationStart"),transitionend:Iu("Transition","TransitionEnd")},Td={},bw={};Kr&&(bw=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function ah(t){if(Td[t])return Td[t];if(!co[t])return t;var e=co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bw)return Td[t]=e[n];return t}var Dw=ah("animationend"),Lw=ah("animationiteration"),Ow=ah("animationstart"),Vw=ah("transitionend"),Mw=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qs(t,e){Mw.set(t,e),Li(e,[t])}for(var Id=0;Id<$g.length;Id++){var Sd=$g[Id],E1=Sd.toLowerCase(),T1=Sd[0].toUpperCase()+Sd.slice(1);Qs(E1,"on"+T1)}Qs(Dw,"onAnimationEnd");Qs(Lw,"onAnimationIteration");Qs(Ow,"onAnimationStart");Qs("dblclick","onDoubleClick");Qs("focusin","onFocus");Qs("focusout","onBlur");Qs(Vw,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Hg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ES(r,e,void 0,t),t.currentTarget=null}function Fw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Hg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Hg(s,l,c),i=u}}}if(fc)throw t=mf,fc=!1,mf=null,t}function De(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var r=t+"__bubble";n.has(r)||(jw(e,t,2,!1),n.add(r))}function Rd(t,e,n){var r=0;e&&(r|=4),jw(n,t,r,e)}var Su="_reactListening"+Math.random().toString(36).slice(2);function hl(t){if(!t[Su]){t[Su]=!0,qv.forEach(function(n){n!=="selectionchange"&&(I1.has(n)||Rd(n,!1,t),Rd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Su]||(e[Su]=!0,Rd("selectionchange",!1,e))}}function jw(t,e,n,r){switch(Tw(e)){case 1:var s=MS;break;case 4:s=FS;break;default:s=Mp}n=s.bind(null,e,n,t),s=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ad(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=fi(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}lw(function(){var c=i,d=Dp(n),m=[];e:{var p=Mw.get(t);if(p!==void 0){var T=jp,k=t;switch(t){case"keypress":if(Gu(n)===0)break e;case"keydown":case"keyup":T=ZS;break;case"focusin":k="focus",T=vd;break;case"focusout":k="blur",T=vd;break;case"beforeblur":case"afterblur":T=vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=n1;break;case Dw:case Lw:case Ow:T=HS;break;case Vw:T=s1;break;case"scroll":T=jS;break;case"wheel":T=o1;break;case"copy":case"cut":case"paste":T=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Lg}var P=(e&4)!==0,D=!P&&t==="scroll",_=P?p!==null?p+"Capture":null:p;P=[];for(var w=c,C;w!==null;){C=w;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,_!==null&&(O=il(w,_),O!=null&&P.push(dl(w,O,C)))),D)break;w=w.return}0<P.length&&(p=new T(p,k,null,n,d),m.push({event:p,listeners:P}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",p&&n!==df&&(k=n.relatedTarget||n.fromElement)&&(fi(k)||k[Qr]))break e;if((T||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,T?(k=n.relatedTarget||n.toElement,T=c,k=k?fi(k):null,k!==null&&(D=Oi(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(T=null,k=c),T!==k)){if(P=bg,O="onMouseLeave",_="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Lg,O="onPointerLeave",_="onPointerEnter",w="pointer"),D=T==null?p:ho(T),C=k==null?p:ho(k),p=new P(O,w+"leave",T,n,d),p.target=D,p.relatedTarget=C,O=null,fi(d)===c&&(P=new P(_,w+"enter",k,n,d),P.target=C,P.relatedTarget=D,O=P),D=O,T&&k)t:{for(P=T,_=k,w=0,C=P;C;C=eo(C))w++;for(C=0,O=_;O;O=eo(O))C++;for(;0<w-C;)P=eo(P),w--;for(;0<C-w;)_=eo(_),C--;for(;w--;){if(P===_||_!==null&&P===_.alternate)break t;P=eo(P),_=eo(_)}P=null}else P=null;T!==null&&Wg(m,p,T,P,!1),k!==null&&D!==null&&Wg(m,D,k,P,!0)}}e:{if(p=c?ho(c):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var $=f1;else if(Mg(p))if(xw)$=y1;else{$=m1;var H=p1}else(T=p.nodeName)&&T.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=g1);if($&&($=$(t,c))){Cw(m,$,n,d);break e}H&&H(t,p,c),t==="focusout"&&(H=p._wrapperState)&&H.controlled&&p.type==="number"&&af(p,"number",p.value)}switch(H=c?ho(c):window,t){case"focusin":(Mg(H)||H.contentEditable==="true")&&(uo=H,vf=c,Wa=null);break;case"focusout":Wa=vf=uo=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,zg(m,n,d);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":zg(m,n,d)}var I;if(Bp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else lo?Rw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Sw&&n.locale!=="ko"&&(lo||v!=="onCompositionStart"?v==="onCompositionEnd"&&lo&&(I=Iw()):(Ss=d,Fp="value"in Ss?Ss.value:Ss.textContent,lo=!0)),H=_c(c,v),0<H.length&&(v=new Dg(v,t,null,n,d),m.push({event:v,listeners:H}),I?v.data=I:(I=Aw(n),I!==null&&(v.data=I)))),(I=l1?u1(t,n):c1(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(d=new Dg("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=I))}Fw(m,e)})}function dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=il(t,n),i!=null&&r.unshift(dl(t,i,s)),i=il(t,e),i!=null&&r.push(dl(t,i,s))),t=t.return}return r}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=il(n,i),u!=null&&o.unshift(dl(n,u,l))):s||(u=il(n,i),u!=null&&o.push(dl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(R1,"")}function Ru(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error(q(425))}function vc(){}var Ef=null,Tf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,A1=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,C1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(x1)}:Sf;function x1(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ll(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ll(e)}function Ps(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),fr="__reactFiber$"+Qo,fl="__reactProps$"+Qo,Qr="__reactContainer$"+Qo,Rf="__reactEvents$"+Qo,k1="__reactListeners$"+Qo,P1="__reactHandles$"+Qo;function fi(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qr]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kg(t);t!==null;){if(n=t[fr])return n;t=Kg(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[fr]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function lh(t){return t[fl]||null}var Af=[],fo=-1;function Xs(t){return{current:t}}function Oe(t){0>fo||(t.current=Af[fo],Af[fo]=null,fo--)}function be(t,e){fo++,Af[fo]=t.current,t.current=e}var Bs={},bt=Xs(Bs),Zt=Xs(!1),Ii=Bs;function bo(t,e){var n=t.type.contextTypes;if(!n)return Bs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function en(t){return t=t.childContextTypes,t!=null}function wc(){Oe(Zt),Oe(bt)}function Qg(t,e,n){if(bt.current!==Bs)throw Error(q(168));be(bt,e),be(Zt,n)}function Uw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(q(108,pS(t)||"Unknown",s));return ze({},n,r)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bs,Ii=bt.current,be(bt,t),be(Zt,Zt.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=Uw(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,Oe(Zt),Oe(bt),be(bt,t)):Oe(Zt),be(Zt,n)}var Ur=null,uh=!1,xd=!1;function Bw(t){Ur===null?Ur=[t]:Ur.push(t)}function N1(t){uh=!0,Bw(t)}function Ys(){if(!xd&&Ur!==null){xd=!0;var t=0,e=Re;try{var n=Ur;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ur=null,uh=!1}catch(s){throw Ur!==null&&(Ur=Ur.slice(t+1)),dw(Lp,Ys),s}finally{Re=e,xd=!1}}return null}var po=[],mo=0,Tc=null,Ic=0,Sn=[],Rn=0,Si=null,zr=1,$r="";function ci(t,e){po[mo++]=Ic,po[mo++]=Tc,Tc=t,Ic=e}function zw(t,e,n){Sn[Rn++]=zr,Sn[Rn++]=$r,Sn[Rn++]=Si,Si=t;var r=zr;t=$r;var s=32-Wn(r)-1;r&=~(1<<s),n+=1;var i=32-Wn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,zr=1<<32-Wn(e)+s|n<<s|r,$r=i+t}else zr=1<<i|n<<s|r,$r=t}function $p(t){t.return!==null&&(ci(t,1),zw(t,1,0))}function Hp(t){for(;t===Tc;)Tc=po[--mo],po[mo]=null,Ic=po[--mo],po[mo]=null;for(;t===Si;)Si=Sn[--Rn],Sn[Rn]=null,$r=Sn[--Rn],Sn[Rn]=null,zr=Sn[--Rn],Sn[Rn]=null}var fn=null,cn=null,Me=!1,$n=null;function $w(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=Ps(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:zr,overflow:$r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xf(t){if(Me){var e=cn;if(e){var n=e;if(!Yg(t,e)){if(Cf(t))throw Error(q(418));e=Ps(n.nextSibling);var r=fn;e&&Yg(t,e)?$w(r,n):(t.flags=t.flags&-4097|2,Me=!1,fn=t)}}else{if(Cf(t))throw Error(q(418));t.flags=t.flags&-4097|2,Me=!1,fn=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Au(t){if(t!==fn)return!1;if(!Me)return Jg(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=cn)){if(Cf(t))throw Hw(),Error(q(418));for(;e;)$w(t,e),e=Ps(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Ps(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?Ps(t.stateNode.nextSibling):null;return!0}function Hw(){for(var t=cn;t;)t=Ps(t.nextSibling)}function Do(){cn=fn=null,Me=!1}function Wp(t){$n===null?$n=[t]:$n.push(t)}var b1=rs.ReactCurrentBatchConfig;function Ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Cu(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function Ww(t){function e(_,w){if(t){var C=_.deletions;C===null?(_.deletions=[w],_.flags|=16):C.push(w)}}function n(_,w){if(!t)return null;for(;w!==null;)e(_,w),w=w.sibling;return null}function r(_,w){for(_=new Map;w!==null;)w.key!==null?_.set(w.key,w):_.set(w.index,w),w=w.sibling;return _}function s(_,w){return _=Ls(_,w),_.index=0,_.sibling=null,_}function i(_,w,C){return _.index=C,t?(C=_.alternate,C!==null?(C=C.index,C<w?(_.flags|=2,w):C):(_.flags|=2,w)):(_.flags|=1048576,w)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,w,C,O){return w===null||w.tag!==6?(w=Od(C,_.mode,O),w.return=_,w):(w=s(w,C),w.return=_,w)}function u(_,w,C,O){var $=C.type;return $===ao?d(_,w,C.props.children,O,C.key):w!==null&&(w.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ms&&Zg($)===w.type)?(O=s(w,C.props),O.ref=Ra(_,w,C),O.return=_,O):(O=ec(C.type,C.key,C.props,null,_.mode,O),O.ref=Ra(_,w,C),O.return=_,O)}function c(_,w,C,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=Vd(C,_.mode,O),w.return=_,w):(w=s(w,C.children||[]),w.return=_,w)}function d(_,w,C,O,$){return w===null||w.tag!==7?(w=_i(C,_.mode,O,$),w.return=_,w):(w=s(w,C),w.return=_,w)}function m(_,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Od(""+w,_.mode,C),w.return=_,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case gu:return C=ec(w.type,w.key,w.props,null,_.mode,C),C.ref=Ra(_,null,w),C.return=_,C;case oo:return w=Vd(w,_.mode,C),w.return=_,w;case ms:var O=w._init;return m(_,O(w._payload),C)}if(ba(w)||wa(w))return w=_i(w,_.mode,C,null),w.return=_,w;Cu(_,w)}return null}function p(_,w,C,O){var $=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return $!==null?null:l(_,w,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case gu:return C.key===$?u(_,w,C,O):null;case oo:return C.key===$?c(_,w,C,O):null;case ms:return $=C._init,p(_,w,$(C._payload),O)}if(ba(C)||wa(C))return $!==null?null:d(_,w,C,O,null);Cu(_,C)}return null}function T(_,w,C,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return _=_.get(C)||null,l(w,_,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case gu:return _=_.get(O.key===null?C:O.key)||null,u(w,_,O,$);case oo:return _=_.get(O.key===null?C:O.key)||null,c(w,_,O,$);case ms:var H=O._init;return T(_,w,C,H(O._payload),$)}if(ba(O)||wa(O))return _=_.get(C)||null,d(w,_,O,$,null);Cu(w,O)}return null}function k(_,w,C,O){for(var $=null,H=null,I=w,v=w=0,S=null;I!==null&&v<C.length;v++){I.index>v?(S=I,I=null):S=I.sibling;var A=p(_,I,C[v],O);if(A===null){I===null&&(I=S);break}t&&I&&A.alternate===null&&e(_,I),w=i(A,w,v),H===null?$=A:H.sibling=A,H=A,I=S}if(v===C.length)return n(_,I),Me&&ci(_,v),$;if(I===null){for(;v<C.length;v++)I=m(_,C[v],O),I!==null&&(w=i(I,w,v),H===null?$=I:H.sibling=I,H=I);return Me&&ci(_,v),$}for(I=r(_,I);v<C.length;v++)S=T(I,_,v,C[v],O),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?v:S.key),w=i(S,w,v),H===null?$=S:H.sibling=S,H=S);return t&&I.forEach(function(x){return e(_,x)}),Me&&ci(_,v),$}function P(_,w,C,O){var $=wa(C);if(typeof $!="function")throw Error(q(150));if(C=$.call(C),C==null)throw Error(q(151));for(var H=$=null,I=w,v=w=0,S=null,A=C.next();I!==null&&!A.done;v++,A=C.next()){I.index>v?(S=I,I=null):S=I.sibling;var x=p(_,I,A.value,O);if(x===null){I===null&&(I=S);break}t&&I&&x.alternate===null&&e(_,I),w=i(x,w,v),H===null?$=x:H.sibling=x,H=x,I=S}if(A.done)return n(_,I),Me&&ci(_,v),$;if(I===null){for(;!A.done;v++,A=C.next())A=m(_,A.value,O),A!==null&&(w=i(A,w,v),H===null?$=A:H.sibling=A,H=A);return Me&&ci(_,v),$}for(I=r(_,I);!A.done;v++,A=C.next())A=T(I,_,v,A.value,O),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?v:A.key),w=i(A,w,v),H===null?$=A:H.sibling=A,H=A);return t&&I.forEach(function(N){return e(_,N)}),Me&&ci(_,v),$}function D(_,w,C,O){if(typeof C=="object"&&C!==null&&C.type===ao&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case gu:e:{for(var $=C.key,H=w;H!==null;){if(H.key===$){if($=C.type,$===ao){if(H.tag===7){n(_,H.sibling),w=s(H,C.props.children),w.return=_,_=w;break e}}else if(H.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ms&&Zg($)===H.type){n(_,H.sibling),w=s(H,C.props),w.ref=Ra(_,H,C),w.return=_,_=w;break e}n(_,H);break}else e(_,H);H=H.sibling}C.type===ao?(w=_i(C.props.children,_.mode,O,C.key),w.return=_,_=w):(O=ec(C.type,C.key,C.props,null,_.mode,O),O.ref=Ra(_,w,C),O.return=_,_=O)}return o(_);case oo:e:{for(H=C.key;w!==null;){if(w.key===H)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(_,w.sibling),w=s(w,C.children||[]),w.return=_,_=w;break e}else{n(_,w);break}else e(_,w);w=w.sibling}w=Vd(C,_.mode,O),w.return=_,_=w}return o(_);case ms:return H=C._init,D(_,w,H(C._payload),O)}if(ba(C))return k(_,w,C,O);if(wa(C))return P(_,w,C,O);Cu(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(_,w.sibling),w=s(w,C),w.return=_,_=w):(n(_,w),w=Od(C,_.mode,O),w.return=_,_=w),o(_)):n(_,w)}return D}var Lo=Ww(!0),qw=Ww(!1),Sc=Xs(null),Rc=null,go=null,qp=null;function Gp(){qp=go=Rc=null}function Kp(t){var e=Sc.current;Oe(Sc),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ro(t,e){Rc=t,qp=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(qp!==t)if(t={context:t,memoizedValue:e,next:null},go===null){if(Rc===null)throw Error(q(308));go=t,Rc.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return e}var pi=null;function Qp(t){pi===null?pi=[t]:pi.push(t)}function Gw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Qp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Xr(t,r)}function Xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gs=!1;function Xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ns(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Xr(t,n)}return s=r.interleaved,s===null?(e.next=e,Qp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Xr(t,n)}function Ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Op(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,r){var s=t.updateQueue;gs=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,d=c=u=null,l=i;do{var p=l.lane,T=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(p=e,T=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(T,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,p=typeof k=="function"?k.call(T,m,p):k,p==null)break e;m=ze({},m,p);break e;case 2:gs=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else T={eventTime:T,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=m):d=d.next=T,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=m}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(q(191,s));s.call(r)}}}var Ol={},gr=Xs(Ol),pl=Xs(Ol),ml=Xs(Ol);function mi(t){if(t===Ol)throw Error(q(174));return t}function Yp(t,e){switch(be(ml,e),be(pl,t),be(gr,Ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}Oe(gr),be(gr,e)}function Oo(){Oe(gr),Oe(pl),Oe(ml)}function Qw(t){mi(ml.current);var e=mi(gr.current),n=uf(e,t.type);e!==n&&(be(pl,t),be(gr,n))}function Jp(t){pl.current===t&&(Oe(gr),Oe(pl))}var Ue=Xs(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Zp(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var Qu=rs.ReactCurrentDispatcher,Pd=rs.ReactCurrentBatchConfig,Ri=0,Be=null,ot=null,pt=null,xc=!1,qa=!1,gl=0,D1=0;function At(){throw Error(q(321))}function em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function tm(t,e,n,r,s,i){if(Ri=i,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qu.current=t===null||t.memoizedState===null?M1:F1,t=n(r,s),qa){i=0;do{if(qa=!1,gl=0,25<=i)throw Error(q(301));i+=1,pt=ot=null,e.updateQueue=null,Qu.current=j1,t=n(r,s)}while(qa)}if(Qu.current=kc,e=ot!==null&&ot.next!==null,Ri=0,pt=ot=Be=null,xc=!1,e)throw Error(q(300));return t}function nm(){var t=gl!==0;return gl=0,t}function hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Be.memoizedState=pt=t:pt=pt.next=t,pt}function bn(){if(ot===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=pt===null?Be.memoizedState:pt.next;if(e!==null)pt=e,ot=t;else{if(t===null)throw Error(q(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},pt===null?Be.memoizedState=pt=t:pt=pt.next=t}return pt}function yl(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=bn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=ot,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var d=c.lane;if((Ri&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Be.lanes|=d,Ai|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Gn(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Be.lanes|=i,Ai|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=bn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Gn(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Xw(){}function Yw(t,e){var n=Be,r=bn(),s=e(),i=!Gn(r.memoizedState,s);if(i&&(r.memoizedState=s,Yt=!0),r=r.queue,rm(eE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,_l(9,Zw.bind(null,n,r,s,e),void 0,null),mt===null)throw Error(q(349));Ri&30||Jw(n,e,s)}return s}function Jw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zw(t,e,n,r){e.value=n,e.getSnapshot=r,tE(e)&&nE(t)}function eE(t,e,n){return n(function(){tE(e)&&nE(t)})}function tE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function nE(t){var e=Xr(t,1);e!==null&&qn(e,t,1,-1)}function ny(t){var e=hr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e.queue=t,t=t.dispatch=V1.bind(null,Be,t),[e.memoizedState,t]}function _l(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rE(){return bn().memoizedState}function Xu(t,e,n,r){var s=hr();Be.flags|=t,s.memoizedState=_l(1|e,n,void 0,r===void 0?null:r)}function ch(t,e,n,r){var s=bn();r=r===void 0?null:r;var i=void 0;if(ot!==null){var o=ot.memoizedState;if(i=o.destroy,r!==null&&em(r,o.deps)){s.memoizedState=_l(e,n,i,r);return}}Be.flags|=t,s.memoizedState=_l(1|e,n,i,r)}function ry(t,e){return Xu(8390656,8,t,e)}function rm(t,e){return ch(2048,8,t,e)}function sE(t,e){return ch(4,2,t,e)}function iE(t,e){return ch(4,4,t,e)}function oE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aE(t,e,n){return n=n!=null?n.concat([t]):null,ch(4,4,oE.bind(null,e,t),n)}function sm(){}function lE(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uE(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cE(t,e,n){return Ri&21?(Gn(n,e)||(n=mw(),Be.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function L1(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{Re=n,Pd.transition=r}}function hE(){return bn().memoizedState}function O1(t,e,n){var r=Ds(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dE(t))fE(e,n);else if(n=Gw(t,e,n,r),n!==null){var s=jt();qn(n,t,r,s),pE(n,e,r)}}function V1(t,e,n){var r=Ds(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dE(t))fE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Gn(l,o)){var u=e.interleaved;u===null?(s.next=s,Qp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Gw(t,e,s,r),n!==null&&(s=jt(),qn(n,t,r,s),pE(n,e,r))}}function dE(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function fE(t,e){qa=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Op(t,n)}}var kc={readContext:Nn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},M1={readContext:Nn,useCallback:function(t,e){return hr().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4194308,4,oE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var n=hr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=O1.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=hr();return t={current:t},e.memoizedState=t},useState:ny,useDebugValue:sm,useDeferredValue:function(t){return hr().memoizedState=t},useTransition:function(){var t=ny(!1),e=t[0];return t=L1.bind(null,t[1]),hr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,s=hr();if(Me){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),mt===null)throw Error(q(349));Ri&30||Jw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ry(eE.bind(null,r,i,t),[t]),r.flags|=2048,_l(9,Zw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=hr(),e=mt.identifierPrefix;if(Me){var n=$r,r=zr;n=(r&~(1<<32-Wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F1={readContext:Nn,useCallback:lE,useContext:Nn,useEffect:rm,useImperativeHandle:aE,useInsertionEffect:sE,useLayoutEffect:iE,useMemo:uE,useReducer:Nd,useRef:rE,useState:function(){return Nd(yl)},useDebugValue:sm,useDeferredValue:function(t){var e=bn();return cE(e,ot.memoizedState,t)},useTransition:function(){var t=Nd(yl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Xw,useSyncExternalStore:Yw,useId:hE,unstable_isNewReconciler:!1},j1={readContext:Nn,useCallback:lE,useContext:Nn,useEffect:rm,useImperativeHandle:aE,useInsertionEffect:sE,useLayoutEffect:iE,useMemo:uE,useReducer:bd,useRef:rE,useState:function(){return bd(yl)},useDebugValue:sm,useDeferredValue:function(t){var e=bn();return ot===null?e.memoizedState=t:cE(e,ot.memoizedState,t)},useTransition:function(){var t=bd(yl)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Xw,useSyncExternalStore:Yw,useId:hE,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hh={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),s=Ds(t),i=qr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Ns(t,i,s),e!==null&&(qn(e,t,s,r),Ku(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),s=Ds(t),i=qr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Ns(t,i,s),e!==null&&(qn(e,t,s,r),Ku(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Ds(t),s=qr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Ns(t,s,r),e!==null&&(qn(e,t,r,n),Ku(e,t,r))}};function sy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!cl(n,r)||!cl(s,i):!0}function mE(t,e,n){var r=!1,s=Bs,i=e.contextType;return typeof i=="object"&&i!==null?i=Nn(i):(s=en(e)?Ii:bt.current,r=e.contextTypes,i=(r=r!=null)?bo(t,s):Bs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function iy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hh.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Xp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Nn(i):(i=en(e)?Ii:bt.current,s.context=bo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Pf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&hh.enqueueReplaceState(s,s.state,null),Ac(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",r=e;do n+=fS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function gE(t,e,n){n=qr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nc||(Nc=!0,zf=r),bf(t,e)},n}function yE(t,e,n){n=qr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){bf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new U1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=eR.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qr(-1,1),e.tag=2,Ns(n,e,1))),n.lanes|=1),t)}var B1=rs.ReactCurrentOwner,Yt=!1;function Mt(t,e,n,r){e.child=t===null?qw(e,null,n,r):Lo(e,t.child,n,r)}function uy(t,e,n,r,s){n=n.render;var i=e.ref;return Ro(e,s),r=tm(t,e,n,r,i,s),n=nm(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yr(t,e,s)):(Me&&n&&$p(e),e.flags|=1,Mt(t,e,r,s),e.child)}function cy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!dm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,_E(t,e,i,r,s)):(t=ec(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(o,r)&&t.ref===e.ref)return Yr(t,e,s)}return e.flags|=1,t=Ls(i,r),t.ref=e.ref,t.return=e,e.child=t}function _E(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(cl(i,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,Yr(t,e,s)}return Df(t,e,n,r,s)}function vE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(_o,ln),ln|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,be(_o,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(_o,ln),ln|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,be(_o,ln),ln|=r;return Mt(t,e,s,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Df(t,e,n,r,s){var i=en(n)?Ii:bt.current;return i=bo(e,i),Ro(e,s),n=tm(t,e,n,r,i,s),r=nm(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yr(t,e,s)):(Me&&r&&$p(e),e.flags|=1,Mt(t,e,n,s),e.child)}function hy(t,e,n,r,s){if(en(n)){var i=!0;Ec(e)}else i=!1;if(Ro(e,s),e.stateNode===null)Yu(t,e),mE(e,n,r),Nf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=en(n)?Ii:bt.current,c=bo(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&iy(e,o,r,c),gs=!1;var p=e.memoizedState;o.state=p,Ac(e,r,o,s),u=e.memoizedState,l!==r||p!==u||Zt.current||gs?(typeof d=="function"&&(Pf(e,n,d,r),u=e.memoizedState),(l=gs||sy(e,n,l,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Un(e.type,l),o.props=c,m=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nn(u):(u=en(n)?Ii:bt.current,u=bo(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==u)&&iy(e,o,r,u),gs=!1,p=e.memoizedState,o.state=p,Ac(e,r,o,s);var k=e.memoizedState;l!==m||p!==k||Zt.current||gs?(typeof T=="function"&&(Pf(e,n,T,r),k=e.memoizedState),(c=gs||sy(e,n,c,r,p,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Lf(t,e,n,r,i,s)}function Lf(t,e,n,r,s,i){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Xg(e,n,!1),Yr(t,e,i);r=e.stateNode,B1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lo(e,t.child,null,i),e.child=Lo(e,null,l,i)):Mt(t,e,l,i),e.memoizedState=r.state,s&&Xg(e,n,!0),e.child}function EE(t){var e=t.stateNode;e.pendingContext?Qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qg(t,e.context,!1),Yp(t,e.containerInfo)}function dy(t,e,n,r,s){return Do(),Wp(s),e.flags|=256,Mt(t,e,n,r),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function TE(t,e,n){var r=e.pendingProps,s=Ue.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),be(Ue,s&1),t===null)return xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ph(o,r,0,null),t=_i(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Vf(n),e.memoizedState=Of,t):im(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return z1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ls(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Ls(l,i):(i=_i(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Of,r}return i=t.child,t=i.sibling,r=Ls(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function im(t,e){return e=ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xu(t,e,n,r){return r!==null&&Wp(r),Lo(e,t.child,null,n),t=im(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Dd(Error(q(422))),xu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ph({mode:"visible",children:r.children},s,0,null),i=_i(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Lo(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Of,i);if(!(e.mode&1))return xu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(q(419)),r=Dd(i,r,void 0),xu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Yt||l){if(r=mt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Xr(t,s),qn(r,t,s,-1))}return hm(),r=Dd(Error(q(421))),xu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=tR.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,cn=Ps(s.nextSibling),fn=e,Me=!0,$n=null,t!==null&&(Sn[Rn++]=zr,Sn[Rn++]=$r,Sn[Rn++]=Si,zr=t.id,$r=t.overflow,Si=e),e=im(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function Ld(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function IE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Mt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(be(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ld(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Cc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ld(e,!0,n,null,i);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Ls(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ls(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $1(t,e,n){switch(e.tag){case 3:EE(e),Do();break;case 5:Qw(e);break;case 1:en(e.type)&&Ec(e);break;case 4:Yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;be(Sc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(be(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?TE(t,e,n):(be(Ue,Ue.current&1),t=Yr(t,e,n),t!==null?t.sibling:null);be(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return IE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,vE(t,e,n)}return Yr(t,e,n)}var SE,Mf,RE,AE;SE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};RE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,mi(gr.current);var i=null;switch(n){case"input":s=sf(t,s),r=sf(t,r),i=[];break;case"select":s=ze({},s,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":s=lf(t,s),r=lf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vc)}cf(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rl.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&De("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};AE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Aa(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function H1(t,e,n){var r=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return en(e.type)&&wc(),Ct(e),null;case 3:return r=e.stateNode,Oo(),Oe(Zt),Oe(bt),Zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Wf($n),$n=null))),Mf(t,e),Ct(e),null;case 5:Jp(e);var s=mi(ml.current);if(n=e.type,t!==null&&e.stateNode!=null)RE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Ct(e),null}if(t=mi(gr.current),Au(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[fr]=e,r[fl]=i,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<La.length;s++)De(La[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":Tg(r,i),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},De("invalid",r);break;case"textarea":Sg(r,i),De("invalid",r)}cf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ru(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ru(r.textContent,l,t),s=["children",""+l]):rl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":yu(r),Ig(r,i,!0);break;case"textarea":yu(r),Rg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ew(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fr]=e,t[fl]=r,SE(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,r),n){case"dialog":De("cancel",t),De("close",t),s=r;break;case"iframe":case"object":case"embed":De("load",t),s=r;break;case"video":case"audio":for(s=0;s<La.length;s++)De(La[s],t);s=r;break;case"source":De("error",t),s=r;break;case"img":case"image":case"link":De("error",t),De("load",t),s=r;break;case"details":De("toggle",t),s=r;break;case"input":Tg(t,r),s=sf(t,r),De("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ze({},r,{value:void 0}),De("invalid",t);break;case"textarea":Sg(t,r),s=lf(t,r),De("invalid",t);break;default:s=r}cf(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?rw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&sl(t,u):typeof u=="number"&&sl(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(rl.hasOwnProperty(i)?u!=null&&i==="onScroll"&&De("scroll",t):u!=null&&kp(t,i,u,o))}switch(n){case"input":yu(t),Ig(t,r,!1);break;case"textarea":yu(t),Rg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Us(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Eo(t,!!r.multiple,i,!1):r.defaultValue!=null&&Eo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)AE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=mi(ml.current),mi(gr.current),Au(e)){if(r=e.stateNode,n=e.memoizedProps,r[fr]=e,(i=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ru(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=e,e.stateNode=r}return Ct(e),null;case 13:if(Oe(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&cn!==null&&e.mode&1&&!(e.flags&128))Hw(),Do(),e.flags|=98560,i=!1;else if(i=Au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(q(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[fr]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),i=!1}else $n!==null&&(Wf($n),$n=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?at===0&&(at=3):hm())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return Oo(),Mf(t,e),t===null&&hl(e.stateNode.containerInfo),Ct(e),null;case 10:return Kp(e.type._context),Ct(e),null;case 17:return en(e.type)&&wc(),Ct(e),null;case 19:if(Oe(Ue),i=e.memoizedState,i===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Aa(i,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Aa(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return be(Ue,Ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&Xe()>Mo&&(e.flags|=128,r=!0,Aa(i,!1),e.lanes=4194304)}else{if(!r)if(t=Cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Aa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Me)return Ct(e),null}else 2*Xe()-i.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,r=!0,Aa(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Xe(),e.sibling=null,n=Ue.current,be(Ue,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function W1(t,e){switch(Hp(e),e.tag){case 1:return en(e.type)&&wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),Oe(Zt),Oe(bt),Zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jp(e),null;case 13:if(Oe(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(Ue),null;case 4:return Oo(),null;case 10:return Kp(e.type._context),null;case 22:case 23:return cm(),null;case 24:return null;default:return null}}var ku=!1,Pt=!1,q1=typeof WeakSet=="function"?WeakSet:Set,te=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function Ff(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var py=!1;function G1(t,e){if(Ef=gc,t=Nw(),zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,m=t,p=null;t:for(;;){for(var T;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)p=m,m=T;for(;;){if(m===t)break t;if(p===n&&++c===s&&(l=o),p===i&&++d===r&&(u=o),(T=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},gc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,D=k.memoizedState,_=e.stateNode,w=_.getSnapshotBeforeUpdate(e.elementType===e.type?P:Un(e.type,P),D);_.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(O){Ge(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return k=py,py=!1,k}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ff(e,n,i)}s=s.next}while(s!==r)}}function dh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CE(t){var e=t.alternate;e!==null&&(t.alternate=null,CE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[fl],delete e[Rf],delete e[k1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xE(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var _t=null,Bn=!1;function ds(t,e,n){for(n=n.child;n!==null;)kE(t,e,n),n=n.sibling}function kE(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(sh,n)}catch{}switch(n.tag){case 5:Pt||yo(n,e);case 6:var r=_t,s=Bn;_t=null,ds(t,e,n),_t=r,Bn=s,_t!==null&&(Bn?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Bn?(t=_t,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),ll(t)):Cd(_t,n.stateNode));break;case 4:r=_t,s=Bn,_t=n.stateNode.containerInfo,Bn=!0,ds(t,e,n),_t=r,Bn=s;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ff(n,e,o),s=s.next}while(s!==r)}ds(t,e,n);break;case 1:if(!Pt&&(yo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ge(n,e,l)}ds(t,e,n);break;case 21:ds(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,ds(t,e,n),Pt=r):ds(t,e,n);break;default:ds(t,e,n)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q1),e.forEach(function(r){var s=nR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_t=l.stateNode,Bn=!1;break e;case 3:_t=l.stateNode.containerInfo,Bn=!0;break e;case 4:_t=l.stateNode.containerInfo,Bn=!0;break e}l=l.return}if(_t===null)throw Error(q(160));kE(i,o,s),_t=null,Bn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ge(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PE(e,t),e=e.sibling}function PE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ur(t),r&4){try{Ga(3,t,t.return),dh(3,t)}catch(P){Ge(t,t.return,P)}try{Ga(5,t,t.return)}catch(P){Ge(t,t.return,P)}}break;case 1:Fn(e,t),ur(t),r&512&&n!==null&&yo(n,n.return);break;case 5:if(Fn(e,t),ur(t),r&512&&n!==null&&yo(n,n.return),t.flags&32){var s=t.stateNode;try{sl(s,"")}catch(P){Ge(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Jv(s,i),hf(l,o);var c=hf(l,i);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?rw(s,m):d==="dangerouslySetInnerHTML"?tw(s,m):d==="children"?sl(s,m):kp(s,d,m,c)}switch(l){case"input":of(s,i);break;case"textarea":Zv(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?Eo(s,!!i.multiple,T,!1):p!==!!i.multiple&&(i.defaultValue!=null?Eo(s,!!i.multiple,i.defaultValue,!0):Eo(s,!!i.multiple,i.multiple?[]:"",!1))}s[fl]=i}catch(P){Ge(t,t.return,P)}}break;case 6:if(Fn(e,t),ur(t),r&4){if(t.stateNode===null)throw Error(q(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ge(t,t.return,P)}}break;case 3:if(Fn(e,t),ur(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ll(e.containerInfo)}catch(P){Ge(t,t.return,P)}break;case 4:Fn(e,t),ur(t);break;case 13:Fn(e,t),ur(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(lm=Xe())),r&4&&gy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(c=Pt)||d,Fn(e,t),Pt=c):Fn(e,t),ur(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(te=t,d=t.child;d!==null;){for(m=te=d;te!==null;){switch(p=te,T=p.child,p.tag){case 0:case 11:case 14:case 15:Ga(4,p,p.return);break;case 1:yo(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){Ge(r,n,P)}}break;case 5:yo(p,p.return);break;case 22:if(p.memoizedState!==null){_y(m);continue}}T!==null?(T.return=p,te=T):_y(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nw("display",o))}catch(P){Ge(t,t.return,P)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ge(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Fn(e,t),ur(t),r&4&&gy(t);break;case 21:break;default:Fn(e,t),ur(t)}}function ur(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xE(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(sl(s,""),r.flags&=-33);var i=my(t);Bf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=my(t);Uf(t,l,o);break;default:throw Error(q(161))}}catch(u){Ge(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K1(t,e,n){te=t,NE(t)}function NE(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var s=te,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ku;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Pt;l=ku;var c=Pt;if(ku=o,(Pt=u)&&!c)for(te=s;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?vy(s):u!==null?(u.return=o,te=u):vy(s);for(;i!==null;)te=i,NE(i),i=i.sibling;te=s,ku=l,Pt=c}yy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,te=i):yy(t)}}function yy(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||dh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ty(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&ll(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Pt||e.flags&512&&jf(e)}catch(p){Ge(e,e.return,p)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function _y(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function vy(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dh(4,e)}catch(u){Ge(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ge(e,s,u)}}var i=e.return;try{jf(e)}catch(u){Ge(e,i,u)}break;case 5:var o=e.return;try{jf(e)}catch(u){Ge(e,o,u)}}}catch(u){Ge(e,e.return,u)}if(e===t){te=null;break}var l=e.sibling;if(l!==null){l.return=e.return,te=l;break}te=e.return}}var Q1=Math.ceil,Pc=rs.ReactCurrentDispatcher,om=rs.ReactCurrentOwner,xn=rs.ReactCurrentBatchConfig,Te=0,mt=null,Ze=null,Et=0,ln=0,_o=Xs(0),at=0,vl=null,Ai=0,fh=0,am=0,Ka=null,Qt=null,lm=0,Mo=1/0,Fr=null,Nc=!1,zf=null,bs=null,Pu=!1,Rs=null,bc=0,Qa=0,$f=null,Ju=-1,Zu=0;function jt(){return Te&6?Xe():Ju!==-1?Ju:Ju=Xe()}function Ds(t){return t.mode&1?Te&2&&Et!==0?Et&-Et:b1.transition!==null?(Zu===0&&(Zu=mw()),Zu):(t=Re,t!==0||(t=window.event,t=t===void 0?16:Tw(t.type)),t):1}function qn(t,e,n,r){if(50<Qa)throw Qa=0,$f=null,Error(q(185));bl(t,n,r),(!(Te&2)||t!==mt)&&(t===mt&&(!(Te&2)&&(fh|=n),at===4&&_s(t,Et)),tn(t,r),n===1&&Te===0&&!(e.mode&1)&&(Mo=Xe()+500,uh&&Ys()))}function tn(t,e){var n=t.callbackNode;bS(t,e);var r=mc(t,t===mt?Et:0);if(r===0)n!==null&&xg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xg(n),e===1)t.tag===0?N1(wy.bind(null,t)):Bw(wy.bind(null,t)),C1(function(){!(Te&6)&&Ys()}),n=null;else{switch(gw(r)){case 1:n=Lp;break;case 4:n=fw;break;case 16:n=pc;break;case 536870912:n=pw;break;default:n=pc}n=jE(n,bE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bE(t,e){if(Ju=-1,Zu=0,Te&6)throw Error(q(327));var n=t.callbackNode;if(Ao()&&t.callbackNode!==n)return null;var r=mc(t,t===mt?Et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var s=Te;Te|=2;var i=LE();(mt!==t||Et!==e)&&(Fr=null,Mo=Xe()+500,yi(t,e));do try{J1();break}catch(l){DE(t,l)}while(!0);Gp(),Pc.current=i,Te=s,Ze!==null?e=0:(mt=null,Et=0,e=at)}if(e!==0){if(e===2&&(s=gf(t),s!==0&&(r=s,e=Hf(t,s))),e===1)throw n=vl,yi(t,0),_s(t,r),tn(t,Xe()),n;if(e===6)_s(t,r);else{if(s=t.current.alternate,!(r&30)&&!X1(s)&&(e=Dc(t,r),e===2&&(i=gf(t),i!==0&&(r=i,e=Hf(t,i))),e===1))throw n=vl,yi(t,0),_s(t,r),tn(t,Xe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:hi(t,Qt,Fr);break;case 3:if(_s(t,r),(r&130023424)===r&&(e=lm+500-Xe(),10<e)){if(mc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Sf(hi.bind(null,t,Qt,Fr),e);break}hi(t,Qt,Fr);break;case 4:if(_s(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Wn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){t.timeoutHandle=Sf(hi.bind(null,t,Qt,Fr),r);break}hi(t,Qt,Fr);break;case 5:hi(t,Qt,Fr);break;default:throw Error(q(329))}}}return tn(t,Xe()),t.callbackNode===n?bE.bind(null,t):null}function Hf(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Wf(e)),t}function Wf(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function X1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Gn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _s(t,e){for(e&=~am,e&=~fh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),r=1<<n;t[n]=-1,e&=~r}}function wy(t){if(Te&6)throw Error(q(327));Ao();var e=mc(t,0);if(!(e&1))return tn(t,Xe()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=gf(t);r!==0&&(e=r,n=Hf(t,r))}if(n===1)throw n=vl,yi(t,0),_s(t,e),tn(t,Xe()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Qt,Fr),tn(t,Xe()),null}function um(t,e){var n=Te;Te|=1;try{return t(e)}finally{Te=n,Te===0&&(Mo=Xe()+500,uh&&Ys())}}function Ci(t){Rs!==null&&Rs.tag===0&&!(Te&6)&&Ao();var e=Te;Te|=1;var n=xn.transition,r=Re;try{if(xn.transition=null,Re=1,t)return t()}finally{Re=r,xn.transition=n,Te=e,!(Te&6)&&Ys()}}function cm(){ln=_o.current,Oe(_o)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,A1(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(Hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wc();break;case 3:Oo(),Oe(Zt),Oe(bt),Zp();break;case 5:Jp(r);break;case 4:Oo();break;case 13:Oe(Ue);break;case 19:Oe(Ue);break;case 10:Kp(r.type._context);break;case 22:case 23:cm()}n=n.return}if(mt=t,Ze=t=Ls(t.current,null),Et=ln=e,at=0,vl=null,am=fh=Ai=0,Qt=Ka=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}pi=null}return t}function DE(t,e){do{var n=Ze;try{if(Gp(),Qu.current=kc,xc){for(var r=Be.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xc=!1}if(Ri=0,pt=ot=Be=null,qa=!1,gl=0,om.current=null,n===null||n.return===null){at=1,vl=e,Ze=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=ay(o);if(T!==null){T.flags&=-257,ly(T,o,l,i,e),T.mode&1&&oy(i,c,e),e=T,u=c;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){oy(i,c,e),hm();break e}u=Error(q(426))}}else if(Me&&l.mode&1){var D=ay(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),ly(D,o,l,i,e),Wp(Vo(u,l));break e}}i=u=Vo(u,l),at!==4&&(at=2),Ka===null?Ka=[i]:Ka.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=gE(i,u,e);ey(i,_);break e;case 1:l=u;var w=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(bs===null||!bs.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=yE(i,l,e);ey(i,O);break e}}i=i.return}while(i!==null)}VE(n)}catch($){e=$,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function LE(){var t=Pc.current;return Pc.current=kc,t===null?kc:t}function hm(){(at===0||at===3||at===2)&&(at=4),mt===null||!(Ai&268435455)&&!(fh&268435455)||_s(mt,Et)}function Dc(t,e){var n=Te;Te|=2;var r=LE();(mt!==t||Et!==e)&&(Fr=null,yi(t,e));do try{Y1();break}catch(s){DE(t,s)}while(!0);if(Gp(),Te=n,Pc.current=r,Ze!==null)throw Error(q(261));return mt=null,Et=0,at}function Y1(){for(;Ze!==null;)OE(Ze)}function J1(){for(;Ze!==null&&!IS();)OE(Ze)}function OE(t){var e=FE(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?VE(t):Ze=e,om.current=null}function VE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W1(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,Ze=null;return}}else if(n=H1(n,e,ln),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);at===0&&(at=5)}function hi(t,e,n){var r=Re,s=xn.transition;try{xn.transition=null,Re=1,Z1(t,e,n,r)}finally{xn.transition=s,Re=r}return null}function Z1(t,e,n,r){do Ao();while(Rs!==null);if(Te&6)throw Error(q(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(DS(t,i),t===mt&&(Ze=mt=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pu||(Pu=!0,jE(pc,function(){return Ao(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xn.transition,xn.transition=null;var o=Re;Re=1;var l=Te;Te|=4,om.current=null,G1(t,n),PE(n,t),v1(Tf),gc=!!Ef,Tf=Ef=null,t.current=n,K1(n),SS(),Te=l,Re=o,xn.transition=i}else t.current=n;if(Pu&&(Pu=!1,Rs=t,bc=s),i=t.pendingLanes,i===0&&(bs=null),CS(n.stateNode),tn(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Nc)throw Nc=!1,t=zf,zf=null,t;return bc&1&&t.tag!==0&&Ao(),i=t.pendingLanes,i&1?t===$f?Qa++:(Qa=0,$f=t):Qa=0,Ys(),null}function Ao(){if(Rs!==null){var t=gw(bc),e=xn.transition,n=Re;try{if(xn.transition=null,Re=16>t?16:t,Rs===null)var r=!1;else{if(t=Rs,Rs=null,bc=0,Te&6)throw Error(q(331));var s=Te;for(Te|=4,te=t.current;te!==null;){var i=te,o=i.child;if(te.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(te=c;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:Ga(8,d,i)}var m=d.child;if(m!==null)m.return=d,te=m;else for(;te!==null;){d=te;var p=d.sibling,T=d.return;if(CE(d),d===c){te=null;break}if(p!==null){p.return=T,te=p;break}te=T}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}te=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,te=o;else e:for(;te!==null;){if(i=te,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ga(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,te=_;break e}te=i.return}}var w=t.current;for(te=w;te!==null;){o=te;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,te=C;else e:for(o=w;te!==null;){if(l=te,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dh(9,l)}}catch($){Ge(l,l.return,$)}if(l===o){te=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,te=O;break e}te=l.return}}if(Te=s,Ys(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(sh,t)}catch{}r=!0}return r}finally{Re=n,xn.transition=e}}return!1}function Ey(t,e,n){e=Vo(n,e),e=gE(t,e,1),t=Ns(t,e,1),e=jt(),t!==null&&(bl(t,1,e),tn(t,e))}function Ge(t,e,n){if(t.tag===3)Ey(t,t,n);else for(;e!==null;){if(e.tag===3){Ey(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bs===null||!bs.has(r))){t=Vo(n,t),t=yE(e,t,1),e=Ns(e,t,1),t=jt(),e!==null&&(bl(e,1,t),tn(e,t));break}}e=e.return}}function eR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(Et&n)===n&&(at===4||at===3&&(Et&130023424)===Et&&500>Xe()-lm?yi(t,0):am|=n),tn(t,e)}function ME(t,e){e===0&&(t.mode&1?(e=wu,wu<<=1,!(wu&130023424)&&(wu=4194304)):e=1);var n=jt();t=Xr(t,e),t!==null&&(bl(t,e,n),tn(t,n))}function tR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ME(t,n)}function nR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),ME(t,n)}var FE;FE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,$1(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Me&&e.flags&1048576&&zw(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yu(t,e),t=e.pendingProps;var s=bo(e,bt.current);Ro(e,n),s=tm(null,e,r,t,s,n);var i=nm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(i=!0,Ec(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Xp(e),s.updater=hh,e.stateNode=s,s._reactInternals=e,Nf(e,r,t,n),e=Lf(null,e,r,!0,i,n)):(e.tag=0,Me&&i&&$p(e),Mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=sR(r),t=Un(r,t),s){case 0:e=Df(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=uy(null,e,r,t,n);break e;case 14:e=cy(null,e,r,Un(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Un(r,s),Df(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Un(r,s),hy(t,e,r,s,n);case 3:e:{if(EE(e),t===null)throw Error(q(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Kw(t,e),Ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Vo(Error(q(423)),e),e=dy(t,e,r,n,s);break e}else if(r!==s){s=Vo(Error(q(424)),e),e=dy(t,e,r,n,s);break e}else for(cn=Ps(e.stateNode.containerInfo.firstChild),fn=e,Me=!0,$n=null,n=qw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),r===s){e=Yr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return Qw(e),t===null&&xf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,If(r,s)?o=null:i!==null&&If(r,i)&&(e.flags|=32),wE(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&xf(e),null;case 13:return TE(t,e,n);case 4:return Yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lo(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Un(r,s),uy(t,e,r,s,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,be(Sc,r._currentValue),r._currentValue=o,i!==null)if(Gn(i.value,o)){if(i.children===s.children&&!Zt.current){e=Yr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=qr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),kf(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ro(e,n),s=Nn(s),r=r(s),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,s=Un(r,e.pendingProps),s=Un(r.type,s),cy(t,e,r,s,n);case 15:return _E(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Un(r,s),Yu(t,e),e.tag=1,en(r)?(t=!0,Ec(e)):t=!1,Ro(e,n),mE(e,r,s),Nf(e,r,s,n),Lf(null,e,r,!0,t,n);case 19:return IE(t,e,n);case 22:return vE(t,e,n)}throw Error(q(156,e.tag))};function jE(t,e){return dw(t,e)}function rR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,r){return new rR(t,e,n,r)}function dm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sR(t){if(typeof t=="function")return dm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Np)return 11;if(t===bp)return 14}return 2}function Ls(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")dm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ao:return _i(n.children,s,i,e);case Pp:o=8,s|=8;break;case ef:return t=Cn(12,n,e,s|2),t.elementType=ef,t.lanes=i,t;case tf:return t=Cn(13,n,e,s),t.elementType=tf,t.lanes=i,t;case nf:return t=Cn(19,n,e,s),t.elementType=nf,t.lanes=i,t;case Qv:return ph(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gv:o=10;break e;case Kv:o=9;break e;case Np:o=11;break e;case bp:o=14;break e;case ms:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function _i(t,e,n,r){return t=Cn(7,t,r,e),t.lanes=n,t}function ph(t,e,n,r){return t=Cn(22,t,r,e),t.elementType=Qv,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Vd(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iR(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,r,s,i,o,l,u){return t=new iR(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Cn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xp(i),t}function oR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function UE(t){if(!t)return Bs;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(en(n))return Uw(t,n,e)}return e}function BE(t,e,n,r,s,i,o,l,u){return t=fm(n,r,!0,t,s,i,o,l,u),t.context=UE(null),n=t.current,r=jt(),s=Ds(n),i=qr(r,s),i.callback=e??null,Ns(n,i,s),t.current.lanes=s,bl(t,s,r),tn(t,r),t}function mh(t,e,n,r){var s=e.current,i=jt(),o=Ds(s);return n=UE(n),e.context===null?e.context=n:e.pendingContext=n,e=qr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ns(s,e,o),t!==null&&(qn(t,s,o,i),Ku(t,s,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pm(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function aR(){return null}var zE=typeof reportError=="function"?reportError:function(t){console.error(t)};function mm(t){this._internalRoot=t}gh.prototype.render=mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));mh(t,e,null,null)};gh.prototype.unmount=mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){mh(null,t,null,null)}),e[Qr]=null}};function gh(t){this._internalRoot=t}gh.prototype.unstable_scheduleHydration=function(t){if(t){var e=vw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ys.length&&e!==0&&e<ys[n].priority;n++);ys.splice(n,0,t),n===0&&Ew(t)}};function gm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function lR(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Lc(o);i.call(c)}}var o=BE(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[Qr]=o.current,hl(t.nodeType===8?t.parentNode:t),Ci(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Lc(u);l.call(c)}}var u=fm(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=u,t[Qr]=u.current,hl(t.nodeType===8?t.parentNode:t),Ci(function(){mh(e,u,n,r)}),u}function _h(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Lc(o);l.call(u)}}mh(e,o,t,s)}else o=lR(n,e,t,s,r);return Lc(o)}yw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(Op(e,n|1),tn(e,Xe()),!(Te&6)&&(Mo=Xe()+500,Ys()))}break;case 13:Ci(function(){var r=Xr(t,1);if(r!==null){var s=jt();qn(r,t,1,s)}}),pm(t,1)}};Vp=function(t){if(t.tag===13){var e=Xr(t,134217728);if(e!==null){var n=jt();qn(e,t,134217728,n)}pm(t,134217728)}};_w=function(t){if(t.tag===13){var e=Ds(t),n=Xr(t,e);if(n!==null){var r=jt();qn(n,t,e,r)}pm(t,e)}};vw=function(){return Re};ww=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};ff=function(t,e,n){switch(e){case"input":if(of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=lh(r);if(!s)throw Error(q(90));Yv(r),of(r,s)}}}break;case"textarea":Zv(t,n);break;case"select":e=n.value,e!=null&&Eo(t,!!n.multiple,e,!1)}};ow=um;aw=Ci;var uR={usingClientEntryPoint:!1,Events:[Ll,ho,lh,sw,iw,um]},Ca={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cR={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||aR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{sh=Nu.inject(cR),mr=Nu}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uR;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gm(e))throw Error(q(200));return oR(t,e,null,n)};mn.createRoot=function(t,e){if(!gm(t))throw Error(q(299));var n=!1,r="",s=zE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,r,s),t[Qr]=e.current,hl(t.nodeType===8?t.parentNode:t),new mm(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=cw(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Ci(t)};mn.hydrate=function(t,e,n){if(!yh(e))throw Error(q(200));return _h(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!gm(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=zE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=BE(e,null,t,1,n??null,s,!1,i,o),t[Qr]=e.current,hl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new gh(e)};mn.render=function(t,e,n){if(!yh(e))throw Error(q(200));return _h(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!yh(t))throw Error(q(40));return t._reactRootContainer?(Ci(function(){_h(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1};mn.unstable_batchedUpdates=um;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yh(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return _h(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function $E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($E)}catch(t){console.error(t)}}$E(),$v.exports=mn;var hR=$v.exports,HE,Sy=hR;HE=Sy.createRoot,Sy.hydrateRoot;function dR(t){const n=t.replace(/^\uFEFF/,"").split(/\r?\n/).filter(Boolean);if(!n.length)return[];const r=Ry(n[0]),s=[];for(let i=1;i<n.length;i++){const o=Ry(n[i]),l={};r.forEach((u,c)=>l[u]=o[c]??""),s.push(l)}return s}function Ry(t){const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];if(i==='"'){r&&t[s+1]==='"'?(n+='"',s++):r=!r;continue}if(i===","&&!r){e.push(n),n="";continue}n+=i}return e.push(n),e.map(s=>s.trim())}const fR=t=>{var i,o,l;if(/^https?:\/\//i.test(t))return t;const e=((o=(i=import.meta)==null?void 0:i.env)==null?void 0:o.BASE_URL)||"/",n=e.startsWith("/")?e:`/${e}`,r=n.endsWith("/")?n:`${n}/`,s=typeof window<"u"&&((l=window.location)!=null&&l.origin)?window.location.origin.replace(/\/+$/,""):"";return t.startsWith("/")?s+(r==="/"?t:r+t.replace(/^\/+/,"")):s+r+t.replace(/^\/+/,"")};function pR(t){const e=new Set;for(const n of t){const r=String((n==null?void 0:n.set)??(n==null?void 0:n.series)??(n==null?void 0:n.シリーズ)??(n==null?void 0:n.弾)??"").trim().toUpperCase();r&&e.add(r)}return[...e].sort((n,r)=>{const s=parseInt(n.replace(/\D+/g,""),10),i=parseInt(r.replace(/\D+/g,""),10);return!Number.isNaN(s)&&!Number.isNaN(i)?s-i:n.localeCompare(r,"ja")})}var Pv,Nv;const mR=((Nv=(Pv=import.meta)==null?void 0:Pv.env)==null?void 0:Nv.VITE_CSV_URL)||"cards.sample.csv";function gR(t){const[e,n]=L.useState([]),[r,s]=L.useState(!1),[i,o]=L.useState(null),[l,u]=L.useState(0);L.useEffect(()=>{let m=!1;return(async()=>{try{s(!0),o(null);const p=fR(t||mR),T=await fetch(p,{cache:"no-cache"});if(!T.ok)throw new Error(`CSV fetch failed: ${T.status} ${T.statusText}`);const k=await T.text(),P=dR(k);m||n(P)}catch(p){m||o(p instanceof Error?p:new Error(String(p)))}finally{m||s(!1)}})(),()=>{m=!0}},[t,l]);const c=L.useMemo(()=>pR(e),[e]);return{rows:e,sets:c,loading:r,error:i,reload:()=>u(m=>m+1)}}const yR=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫"];function vo(t){return yR[(t-1)%12]}function _R(t,e){const n=t.filter(i=>i.set_code===e),r={L:{},R:{}};for(const i of n)r[i.cylinder][i.col]=r[i.cylinder][i.col]||[],r[i.cylinder][i.col].push(i);for(const i of["L","R"])for(const o of Object.keys(r[i]))r[i][+o].sort((l,u)=>l.row-u.row);const s=Math.max(0,...n.map(i=>i.row));return{byCyl:r,maxRow:s}}function vR(t,e){if(e.length===0)return-1;e:for(let n=0;n<=t.length-e.length;n++){for(let r=0;r<e.length;r++)if(t[n+r]!==e[r])continue e;return n}return-1}function wR(t){return t!=null&&t.rarity?t.rarity.toUpperCase().startsWith("LR"):!1}function ER(t,e){const n=t.findIndex(s=>s.row===e);if(n<0)return{steps:1/0,hit:void 0};const r=t.length;for(let s=1;s<=r;s++){const i=t[(n+s)%r];if(wR(i))return{steps:s,hit:i}}return{steps:1/0,hit:void 0}}function Ay(t,e,n,r){const{byCyl:s}=_R(t,e),i=s[n]||{},o=[];for(const l of Object.keys(i).map(Number).sort((u,c)=>u-c)){const u=i[l],c=u.map(m=>m.num),d=vR(c,r);if(d>=0){const m=u[d+r.length-1],p=ER(u,m.row);o.push({set:e,cylinder:n,col:l,row:m.row,matched:r,nextLRSteps:Number.isFinite(p.steps)?p.steps:9999,nextLR:p.hit?{row:p.hit.row,rarity:p.hit.rarity,num:p.hit.num,name:p.hit.name}:void 0})}}return o.sort((l,u)=>l.nextLRSteps-u.nextLRSteps||l.row-u.row||l.col-u.col)}const Cy=t=>{try{return JSON.parse(localStorage.getItem(t)||"[]")}catch{return[]}},TR=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};function xy(t){const[e,n]=L.useState(()=>Cy(t));L.useEffect(()=>{n(Cy(t))},[t]);const r=l=>{n(l),TR(t,l)};return{items:e,add:(l,u)=>{if(!l.length)return;const c=[{pattern:l,rev:u,ts:Date.now()},...e].slice(0,50);r(c)},remove:l=>r(e.filter(u=>u.ts!==l)),clear:()=>r([])}}const it=t=>t.replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/　/g," ").replace(/－/g,"-"),qf={LR:"#FF3C3C","LR★":"#A03CFF",CP:"#A0FFA0","CP★":"#FF7F29",SR:"#FFFFA0","SR★":"#FF7F29",R:"#A0FFFF",N:"#FFFFFF"},bu={LRP:"LR★",LR_P:"LR★","LR★":"LR★",SRP:"SR★",SR_P:"SR★","SR★":"SR★",PA:"SR★",CPP:"CP★",CP_P:"CP★","CP★":"CP★",LR:"LR",SR:"SR",R:"R",CP:"CP",N:"N",NORM:"N",NORMAL:"N",0:"N"},IR=/(LR|SR|CP|R)(?:\s*(?:P|★))?/i,Gf=t=>{if(!t)return"N";const e=it(String(t)).toUpperCase().trim(),n=e.replace(/\s+|_/g,"");if(qf[e])return e;if(qf[n])return n;if(bu[e])return bu[e];if(bu[n])return bu[n];const r=e.match(IR);if(r){const s=r[1];return/P|★/i.test(r[0])?s+"★":s}return"N"},zn=t=>qf[Gf(t)];typeof window<"u"&&(window.__rar=window.__rar||{},window.__rar.colorForRarity=zn,window.__rar.normalizeRarity=Gf,window.__rar.toHalf=it,window.debugRarity=t=>{const e=Gf(t);return{input:t,norm:e,color:zn(t)}});function WE(t){const[e,...n]=t.split(/\r?\n/).filter(Boolean),r=e.split(",").map(s=>s.trim());return n.map(s=>{const i=[];let o="",l=!1;for(let c=0;c<s.length;c++){const d=s[c];if(d==='"'){l=!l;continue}if(d===","&&!l){i.push(o),o="";continue}o+=d}i.push(o);const u={};return r.forEach((c,d)=>u[c]=i[d]),u})}async function xa(t){const e=await fetch(t).then(r=>r.text());return WE(e).map(r=>({no:Number(r.no??r.No??r.NO??0),code:String(r.code??""),rarity:String(r.rarity??r.rar??""),name:String(r.name??"")}))}async function Du(t){const e=await fetch(t).then(s=>s.text()),n=WE(e),r=[];for(const s of n){const i=Number(s.no??s.No??s.row??s.Row??s.行??0);if(!i)continue;const o={no:i},l=u=>{if(typeof u=="number")return{nums:[u],tokens:[String(u)]};let c=String(u??"").trim();if(!c)return{nums:[],tokens:[]};if(/^\d+$/.test(c)){const p=Number(c);return{nums:[p],tokens:[String(p)]}}if(/^[\d,\s]+$/.test(c)){const p=c.split(/[^0-9]+/).filter(Boolean);return{nums:p.map(P=>Number(P)),tokens:p}}const d=c.split(/[^0-9Pp]+/).filter(Boolean).map(p=>it(p).toUpperCase());return{nums:d.map(p=>parseInt(p.replace(/[^0-9]/g,""),10)).filter(p=>Number.isFinite(p)),tokens:d}};for(let u=1;u<=12;u++){const c=s[`col${u}`]??s[`c${u}`]??s[String(u)],{nums:d,tokens:m}=l(c);o[`col${u}`]=d,o[`raw${u}`]=m}r.push(o)}return r}const Br=new Set(["03P","09P","37P","3P","9P","37P"]),SR=()=>{};var ky={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},RR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},GE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(p=64)),r.push(n[d],n[m],n[p],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new AR;const p=i<<2|l>>4;if(r.push(p),c!==64){const T=l<<4&240|c>>2;if(r.push(T),m!==64){const k=c<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CR=function(t){const e=qE(t);return GE.encodeByteArray(e,!0)},Oc=function(t){return CR(t).replace(/\./g,"")},KE=function(t){try{return GE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=()=>xR().__FIREBASE_DEFAULTS__,PR=()=>{if(typeof process>"u"||typeof ky>"u")return;const t=ky.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&KE(t[1]);return e&&JSON.parse(e)},vh=()=>{try{return SR()||kR()||PR()||NR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},QE=t=>{var e,n;return(n=(e=vh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ym=t=>{const e=QE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},XE=()=>{var t;return(t=vh())==null?void 0:t.config},YE=t=>{var e;return(e=vh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wh(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Oc(JSON.stringify(n)),Oc(JSON.stringify(o)),""].join(".")}const Xa={};function DR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xa))Xa[e]?t.emulator.push(e):t.prod.push(e);return t}function LR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Py=!1;function Eh(t,e){if(typeof window>"u"||typeof document>"u"||!Rr(window.location.host)||Xa[t]===e||Xa[t]||Py)return;Xa[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=DR().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,T){p.setAttribute("width","24"),p.setAttribute("id",T),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Py=!0,o()},p}function d(p,T){p.setAttribute("id",T),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=LR(r),T=n("text"),k=document.getElementById(T)||document.createElement("span"),P=n("learnmore"),D=document.getElementById(P)||document.createElement("a"),_=n("preprendIcon"),w=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const C=p.element;l(C),d(D,P);const O=c();u(w,_),C.append(w,k,D,O),document.body.appendChild(C)}i?(k.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function VR(){var e;const t=(e=vh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UR(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BR(){return!VR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zR(){try{return typeof indexedDB=="object"}catch{return!1}}function $R(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HR,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vl.prototype.create)}}class Vl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?WR(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Xn(s,l,r)}}function WR(t,e){return t.replace(qR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qR=/\{\$([^}]+)}/g;function GR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ny(i)&&Ny(o)){if(!xi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ny(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KR(t,e){const n=new QR(t,e);return n.subscribe.bind(n)}class QR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Md),s.error===void 0&&(s.error=Md),s.complete===void 0&&(s.complete=Md);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Md(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZR(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JR(t){return t===di?void 0:t}function ZR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const tA={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},nA=ge.INFO,rA={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},sA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _m{constructor(e){this.name=e,this._logLevel=nA,this._logHandler=sA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const iA=(t,e)=>e.some(n=>t instanceof n);let by,Dy;function oA(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aA(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZE=new WeakMap,Kf=new WeakMap,e0=new WeakMap,Fd=new WeakMap,vm=new WeakMap;function lA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Os(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZE.set(n,t)}).catch(()=>{}),vm.set(e,t),e}function uA(t){if(Kf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kf.set(t,e)}let Qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||e0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cA(t){Qf=t(Qf)}function hA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return e0.set(r,e.sort?e.sort():[e]),Os(r)}:aA().includes(t)?function(...e){return t.apply(jd(this),e),Os(ZE.get(this))}:function(...e){return Os(t.apply(jd(this),e))}}function dA(t){return typeof t=="function"?hA(t):(t instanceof IDBTransaction&&uA(t),iA(t,oA())?new Proxy(t,Qf):t)}function Os(t){if(t instanceof IDBRequest)return lA(t);if(Fd.has(t))return Fd.get(t);const e=dA(t);return e!==t&&(Fd.set(t,e),vm.set(e,t)),e}const jd=t=>vm.get(t);function fA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Os(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Os(o.result),u.oldVersion,u.newVersion,Os(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const pA=["get","getKey","getAll","getAllKeys","count"],mA=["put","add","delete","clear"],Ud=new Map;function Ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Ud.set(e,i),i}cA(t=>({...t,get:(e,n,r)=>Ly(e,n)||t.get(e,n,r),has:(e,n)=>!!Ly(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xf="@firebase/app",Oy="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new _m("@firebase/app"),_A="@firebase/app-compat",vA="@firebase/analytics-compat",wA="@firebase/analytics",EA="@firebase/app-check-compat",TA="@firebase/app-check",IA="@firebase/auth",SA="@firebase/auth-compat",RA="@firebase/database",AA="@firebase/data-connect",CA="@firebase/database-compat",xA="@firebase/functions",kA="@firebase/functions-compat",PA="@firebase/installations",NA="@firebase/installations-compat",bA="@firebase/messaging",DA="@firebase/messaging-compat",LA="@firebase/performance",OA="@firebase/performance-compat",VA="@firebase/remote-config",MA="@firebase/remote-config-compat",FA="@firebase/storage",jA="@firebase/storage-compat",UA="@firebase/firestore",BA="@firebase/ai",zA="@firebase/firestore-compat",$A="firebase",HA="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="[DEFAULT]",WA={[Xf]:"fire-core",[_A]:"fire-core-compat",[wA]:"fire-analytics",[vA]:"fire-analytics-compat",[TA]:"fire-app-check",[EA]:"fire-app-check-compat",[IA]:"fire-auth",[SA]:"fire-auth-compat",[RA]:"fire-rtdb",[AA]:"fire-data-connect",[CA]:"fire-rtdb-compat",[xA]:"fire-fn",[kA]:"fire-fn-compat",[PA]:"fire-iid",[NA]:"fire-iid-compat",[bA]:"fire-fcm",[DA]:"fire-fcm-compat",[LA]:"fire-perf",[OA]:"fire-perf-compat",[VA]:"fire-rc",[MA]:"fire-rc-compat",[FA]:"fire-gcs",[jA]:"fire-gcs-compat",[UA]:"fire-fst",[zA]:"fire-fst-compat",[BA]:"fire-vertex","fire-js":"fire-js",[$A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map,qA=new Map,Jf=new Map;function Vy(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(Jf.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;Jf.set(e,t);for(const n of Vc.values())Vy(n,t);for(const n of qA.values())Vy(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vs=new Vl("app","Firebase",GA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=HA;function t0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Yf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vs.create("bad-app-name",{appName:String(s)});if(n||(n=XE()),!n)throw Vs.create("no-options");const i=Vc.get(s);if(i){if(xi(n,i.options)&&xi(r,i.config))return i;throw Vs.create("duplicate-app",{appName:s})}const o=new eA(s);for(const u of Jf.values())o.addComponent(u);const l=new KA(n,r,o);return Vc.set(s,l),l}function Th(t=Yf){const e=Vc.get(t);if(!e&&t===Yf&&XE())return t0();if(!e)throw Vs.create("no-app",{appName:t});return e}function kn(t,e,n){let r=WA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(o.join(" "));return}zs(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firebase-heartbeat-database",XA=1,wl="firebase-heartbeat-store";let Bd=null;function n0(){return Bd||(Bd=fA(QA,XA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vs.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function YA(t){try{const n=(await n0()).transaction(wl),r=await n.objectStore(wl).get(r0(t));return await n.done,r}catch(e){if(e instanceof Xn)Zr.warn(e.message);else{const n=Vs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(n.message)}}}async function My(t,e){try{const r=(await n0()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,r0(t)),await r.done}catch(n){if(n instanceof Xn)Zr.warn(n.message);else{const r=Vs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zr.warn(r.message)}}}function r0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=1024,ZA=30;class eC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ZA){const o=rC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fy(),{heartbeatsToSend:r,unsentEntries:s}=tC(this._heartbeatsCache.heartbeats),i=Oc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Zr.warn(n),""}}}function Fy(){return new Date().toISOString().substring(0,10)}function tC(t,e=JA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zR()?$R().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return My(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return My(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function jy(t){return Oc(JSON.stringify({version:2,heartbeats:t})).length}function rC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){zs(new Jr("platform-logger",e=>new gA(e),"PRIVATE")),zs(new Jr("heartbeat",e=>new eC(e),"PRIVATE")),kn(Xf,Oy,t),kn(Xf,Oy,"esm2020"),kn("fire-js","")}sC("");var iC="firebase",oC="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(iC,oC,"app");function s0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aC=s0,i0=new Vl("auth","Firebase",s0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new _m("@firebase/auth");function lC(t,...e){Mc.logLevel<=ge.WARN&&Mc.warn(`Auth (${Vi}): ${t}`,...e)}function tc(t,...e){Mc.logLevel<=ge.ERROR&&Mc.error(`Auth (${Vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,...e){throw wm(t,...e)}function yr(t,...e){return wm(t,...e)}function o0(t,e,n){const r={...aC(),[e]:n};return new Vl("auth","Firebase",r).create(e,{appName:t.name})}function Ms(t){return o0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return i0.create(t,...e)}function ae(t,e,...n){if(!t)throw wm(e,...n)}function Hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tc(e),new Error(e)}function es(t,e){t||Hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function uC(){return Uy()==="http:"||Uy()==="https:"}function Uy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uC()||FR()||"connection"in navigator)?navigator.onLine:!0}function hC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.shortDelay=e,this.longDelay=n,es(n>e,"Short delay should be less than long delay!"),this.isMobile=OR()||jR()}get(){return cC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e){es(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pC=new jl(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Js(t,e,n,r,s={}){return l0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ml({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return MR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Rr(t.emulatorConfig.host)&&(c.credentials="include"),a0.fetch()(await u0(t,t.config.apiHost,n,l),c)})}async function l0(t,e,n){t._canInitEmulator=!1;const r={...dC,...e};try{const s=new gC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Lu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Lu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Lu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw o0(t,d,c);Kn(t,d)}}catch(s){if(s instanceof Xn)throw s;Kn(t,"network-request-failed",{message:String(s)})}}async function Ih(t,e,n,r,s={}){const i=await Js(t,e,n,r,s);return"mfaPendingCredential"in i&&Kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function u0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Em(t.config,s):`${t.config.apiScheme}://${s}`;return fC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function mC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yr(this.auth,"network-request-failed")),pC.get())})}}function Lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yr(t,e,r);return s.customData._tokenResponse=n,s}function By(t){return t!==void 0&&t.enterprise!==void 0}class yC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _C(t,e){return Js(t,"GET","/v2/recaptchaConfig",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function Fc(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wC(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Tm(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ya(zd(s.auth_time)),issuedAtTime:Ya(zd(s.iat)),expirationTime:Ya(zd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zd(t){return Number(t)*1e3}function Tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const s=KE(n);return s?JSON.parse(s):(tc("Failed to decode base64 JWT payload"),null)}catch(s){return tc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zy(t){const e=Tm(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&EC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await El(t,Fc(e,{idToken:n}));ae(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?c0(s.providerUserInfo):[],o=SC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ep(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function IC(t){const e=Ve(t);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function c0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){const n=await l0(t,{},async()=>{const r=Ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await u0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Rr(t.emulatorConfig.host)&&(u.credentials="include"),a0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AC(t,e){return Js(t,"POST","/v2/accounts:revokeToken",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Co;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new TC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ep(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await El(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wC(this,e)}reload(){return IC(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Ms(this.auth));const e=await this.getIdToken();return await El(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:T,providerData:k,stsTokenManager:P}=n;ae(m&&P,e,"internal-error");const D=Co.fromJSON(this.name,P);ae(typeof m=="string",e,"internal-error"),fs(r,e.name),fs(s,e.name),ae(typeof p=="boolean",e,"internal-error"),ae(typeof T=="boolean",e,"internal-error"),fs(i,e.name),fs(o,e.name),fs(l,e.name),fs(u,e.name),fs(c,e.name),fs(d,e.name);const _=new Hn({uid:m,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:d});return k&&Array.isArray(k)&&(_.providerData=k.map(w=>({...w}))),u&&(_._redirectEventId=u),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Co;s.updateFromServerResponse(n);const i=new Hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?c0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Co;l.updateFromIdToken(r);const u=new Hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ep(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;function Wr(t){es(t instanceof Function,"Expected a class definition");let e=$y.get(t);return e?(es(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$y.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}h0.type="NONE";const Hy=h0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nc(this.userKey,s.apiKey,i),this.fullPersistenceKey=nc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fc(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(Wr(Hy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Wr(Hy);const o=nc(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let m;if(typeof d=="string"){const p=await Fc(e,{idToken:d}).catch(()=>{});if(!p)break;m=await Hn._fromGetAccountInfoResponse(e,p,d)}else m=Hn._fromJSON(e,d);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new xo(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new xo(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y0(e))return"Blackberry";if(_0(e))return"Webos";if(f0(e))return"Safari";if((e.includes("chrome/")||p0(e))&&!e.includes("edge/"))return"Chrome";if(g0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d0(t=Dt()){return/firefox\//i.test(t)}function f0(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p0(t=Dt()){return/crios\//i.test(t)}function m0(t=Dt()){return/iemobile/i.test(t)}function g0(t=Dt()){return/android/i.test(t)}function y0(t=Dt()){return/blackberry/i.test(t)}function _0(t=Dt()){return/webos/i.test(t)}function Im(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CC(t=Dt()){var e;return Im(t)&&!!((e=window.navigator)!=null&&e.standalone)}function xC(){return UR()&&document.documentMode===10}function v0(t=Dt()){return Im(t)||g0(t)||_0(t)||y0(t)||/windows phone/i.test(t)||m0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e=[]){let n;switch(t){case"Browser":n=Wy(Dt());break;case"Worker":n=`${Wy(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e={}){return Js(t,"GET","/v2/passwordPolicy",Mi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=6;class bC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??NC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qy(this),this.idTokenSubscription=new qy(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fc(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Ms(this));const n=e?Ve(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PC(this),n=new bC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&lC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xo(t){return Ve(t)}class qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=KR(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LC(t){Sh=t}function E0(t){return Sh.loadJS(t)}function OC(){return Sh.recaptchaEnterpriseScript}function VC(){return Sh.gapiScript}function MC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class FC{constructor(){this.enterprise=new jC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const UC="recaptcha-enterprise",T0="NO_RECAPTCHA";class BC{constructor(e){this.type=UC,this.auth=Xo(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{_C(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new yC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;By(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(T0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&By(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=OC();u.length!==0&&(u+=l),E0(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Gy(t,e,n,r=!1,s=!1){const i=new BC(t);let o;if(s)o=T0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ky(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Gy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xi(i,e??{}))return s;Kn(s,"already-initialized")}return n.initialize({options:e})}function $C(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HC(t,e,n){const r=Xo(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=I0(e),{host:o,port:l}=WC(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(xi(c,r.config.emulator)&&xi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Rr(o)?(wh(`${i}//${o}${u}`),Eh("Auth",!0)):qC()}function I0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WC(t){const e=I0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qy(o)}}}function Qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hr("not implemented")}_getIdTokenResponse(e){return Hr("not implemented")}_linkToIdToken(e,n){return Hr("not implemented")}_getReauthenticationResolver(e){return Hr("not implemented")}}async function GC(t,e){return Js(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e){return Ih(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return Ih(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function XC(t,e){return Ih(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Sm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Tl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Tl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ky(e,n,"signInWithPassword",KC);case"emailLink":return QC(e,{email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ky(e,r,"signUpPassword",GC);case"emailLink":return XC(e,{idToken:n,email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e){return Ih(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="http://localhost";class ki extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ki(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ko(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ko(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ko(e,n)}buildRequest(){const e={requestUri:YC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ml(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZC(t){const e=Oa(Va(t)).link,n=e?Oa(Va(e)).deep_link_id:null,r=Oa(Va(t)).deep_link_id;return(r?Oa(Va(r)).link:null)||r||n||e||t}class Rm{constructor(e){const n=Oa(Va(e)),r=n.apiKey??null,s=n.oobCode??null,i=JC(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ZC(e);try{return new Rm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,n){return Tl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rm.parseLink(n);return ae(r,"argument-error"),Tl._fromEmailAndCode(e,r.code,r.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends S0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Ul{constructor(){super("facebook.com")}static credential(e){return ki._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";vs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ki._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ws.credential(n,r)}catch{return null}}}ws.GOOGLE_SIGN_IN_METHOD="google.com";ws.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Ul{constructor(){super("github.com")}static credential(e){return ki._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.GITHUB_SIGN_IN_METHOD="github.com";Es.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Ul{constructor(){super("twitter.com")}static credential(e,n){return ki._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ts.credential(n,r)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Hn._fromIdTokenResponse(e,r,s),o=Xy(r);return new Fo({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xy(r);return new Fo({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Xn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uc(e,n,r,s)}}function R0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,i,e,r):i})}async function ex(t,e,n=!1){const r=await El(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Ms(r));const s="reauthenticate";try{const i=await El(t,R0(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Tm(i.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),Fo._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e,n=!1){if(un(t.app))return Promise.reject(Ms(t));const r="signIn",s=await R0(t,r,e),i=await Fo._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nx(t,e){return A0(Xo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t){const e=Xo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function sx(t,e,n){return un(t.app)?Promise.reject(Ms(t)):nx(Ve(t),Yo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rx(t),r})}function ix(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function ox(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function C0(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function x0(t){return Ve(t).signOut()}const Bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=1e3,lx=10;class P0 extends k0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const ux=P0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends k0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N0.type="SESSION";const b0=N0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Rh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await cx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Am("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return window}function dx(t){_r().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(){return typeof _r().WorkerGlobalScope<"u"&&typeof _r().importScripts=="function"}async function fx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function px(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function mx(){return D0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firebaseLocalStorageDb",gx=1,zc="firebaseLocalStorage",O0="fbase_key";class Bl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ah(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function yx(){const t=indexedDB.deleteDatabase(L0);return new Bl(t).toPromise()}function tp(){const t=indexedDB.open(L0,gx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zc,{keyPath:O0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await yx(),e(await tp()))})})}async function Yy(t,e,n){const r=Ah(t,!0).put({[O0]:e,value:n});return new Bl(r).toPromise()}async function _x(t,e){const n=Ah(t,!1).get(e),r=await new Bl(n).toPromise();return r===void 0?null:r.value}function Jy(t,e){const n=Ah(t,!0).delete(e);return new Bl(n).toPromise()}const vx=800,wx=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance(mx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await fx(),!this.activeServiceWorker)return;this.sender=new hx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||px()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tp();return await Yy(e,Bc,"1"),await Jy(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_x(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ah(s,!1).getAll();return new Bl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const Ex=V0;new jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t,e){return e?Wr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ko(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ix(t){return A0(t.auth,new Cm(t),t.bypassAuthState)}function Sx(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),tx(n,new Cm(t),t.bypassAuthState)}async function Rx(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),ex(n,new Cm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ix;case"linkViaPopup":case"linkViaRedirect":return Rx;case"reauthViaPopup":case"reauthViaRedirect":return Sx;default:Kn(this.auth,"internal-error")}}resolve(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=new jl(2e3,1e4);class wo extends M0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){es(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ax.get())};e()}}wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="pendingRedirect",rc=new Map;class xx extends M0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const r=await kx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kx(t,e){const n=bx(e),r=Nx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Px(t,e){rc.set(t._key(),e)}function Nx(t){return Wr(t._redirectPersistence)}function bx(t){return nc(Cx,t.config.apiKey,t.name)}async function Dx(t,e,n=!1){if(un(t.app))return Promise.reject(Ms(t));const r=Xo(t),s=Tx(r,e),o=await new xx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=10*60*1e3;class Ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(yr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jx=/^https?/;async function Ux(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mx(t);for(const n of e)try{if(Bx(n))return}catch{}Kn(t,"unauthorized-domain")}function Bx(t){const e=Zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jx.test(n))return!1;if(Fx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new jl(3e4,6e4);function e_(){const t=_r().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $x(t){return new Promise((e,n)=>{var s,i,o;function r(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(yr(t,"network-request-failed"))},timeout:zx.get()})}if((i=(s=_r().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=_r().gapi)!=null&&o.load)r();else{const l=MC("iframefcb");return _r()[l]=()=>{gapi.load?r():n(yr(t,"network-request-failed"))},E0(`${VC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sc=null,e})}let sc=null;function Hx(t){return sc=sc||$x(t),sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new jl(5e3,15e3),qx="__/auth/iframe",Gx="emulator/auth/iframe",Kx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xx(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Em(e,Gx):`https://${t.config.authDomain}/${qx}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},s=Qx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ml(r).slice(1)}`}async function Yx(t){const e=await Hx(t),n=_r().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Xx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yr(t,"network-request-failed"),l=_r().setTimeout(()=>{i(o)},Wx.get());function u(){_r().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zx=500,ek=600,tk="_blank",nk="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rk(t,e,n,r=Zx,s=ek){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Jx,width:r.toString(),height:s.toString(),top:i,left:o},c=Dt().toLowerCase();n&&(l=p0(c)?tk:n),d0(c)&&(e=e||nk,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[T,k])=>`${p}${T}=${k},`,"");if(CC(c)&&l!=="_self")return sk(e||"",l),new t_(null);const m=window.open(e||"",l,d);ae(m,t,"popup-blocked");try{m.focus()}catch{}return new t_(m)}function sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="__/auth/handler",ok="emulator/auth/handler",ak=encodeURIComponent("fac");async function n_(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:s};if(e instanceof S0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof Ul){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${ak}=${encodeURIComponent(u)}`:"";return`${lk(t)}?${Ml(l).slice(1)}${c}`}function lk({config:t}){return t.emulator?Em(t,ok):`https://${t.authDomain}/${ik}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="webStorageSupport";class uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=Dx,this._overrideRedirectResult=Px}async _openPopup(e,n,r,s){var o;es((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await n_(e,n,r,Zf(),s);return rk(e,i,Am())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await n_(e,n,r,Zf(),s);return dx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(es(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Yx(e),r=new Ox(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($d,{type:$d},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[$d];i!==void 0&&n(!!i),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v0()||f0()||Im()}}const ck=uk;var r_="@firebase/auth",s_="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fk(t){zs(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w0(t)},c=new DC(r,s,i,u);return $C(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new Jr("auth-internal",e=>{const n=Xo(e.getProvider("auth").getImmediate());return(r=>new hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(r_,s_,dk(t)),kn(r_,s_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=5*60,mk=YE("authIdTokenMaxAge")||pk;let i_=null;const gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mk)return;const s=n==null?void 0:n.token;i_!==s&&(i_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function j0(t=Th()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zC(t,{popupRedirectResolver:ck,persistence:[Ex,ux,b0]}),r=YE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gk(i.toString());ox(n,o,()=>o(n.currentUser)),ix(n,l=>o(l))}}const s=QE("auth");return s&&HC(n,`http://${s}`),n}function yk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}LC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yr("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fk("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="firebasestorage.googleapis.com",B0="storageBucket",_k=2*60*1e3,vk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Xn{constructor(e,n,r=0){super(Hd(e),`Firebase Storage: ${n} (${Hd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Hd(t){return"storage/"+t}function xm(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,t)}function wk(t){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ek(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,t)}function Tk(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ik(t){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Sk(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rk(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function Ak(t){return new rt(nt.INVALID_URL,"Invalid URL '"+t+"'.")}function Ck(t){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xk(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+B0+"' property when initializing the app?")}function kk(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Pk(t){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function np(t){return new rt(nt.INVALID_ARGUMENT,t)}function z0(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function Nk(t){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ja(t,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ka(t){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw Ck(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",T=new RegExp(`^https?://${m}/${d}/b/${s}/o${p}`,"i"),k={bucket:1,path:3},P=n===U0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",_=new RegExp(`^https?://${P}/${s}/${D}`,"i"),C=[{regex:l,indices:u,postModify:i},{regex:T,indices:k,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<C.length;O++){const $=C[O],H=$.regex.exec(e);if(H){const I=H[$.indices.bucket];let v=H[$.indices.path];v||(v=""),r=new hn(I,v),$.postModify(r);break}}if(r==null)throw Ak(e);return r}}class bk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...D){c||(c=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,t(T,u())},D)}function p(){i&&clearTimeout(i)}function T(D,..._){if(c){p();return}if(D){p(),d.call(null,D,..._);return}if(u()||o){p(),d.call(null,D,..._);return}r<64&&(r*=2);let C;l===1?(l=2,C=0):C=(r+Math.random())*1e3,m(C)}let k=!1;function P(D){k||(k=!0,p(),!c&&(s!==null?(D||(l=2),clearTimeout(s),m(0)):D||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function Lk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return t!==void 0}function Vk(t){return typeof t=="object"&&!Array.isArray(t)}function $0(t){return typeof t=="string"||t instanceof String}function o_(t){return km()&&t instanceof Blob}function km(){return typeof Blob<"u"}function a_(t,e,n,r){if(r<e)throw np(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw np(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Fk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var vi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vi||(vi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,s,i,o,l,u,c,d,m,p=!0,T=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=m,this.retry=p,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,P)=>{this.resolve_=k,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ou(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===vi.NO_ERROR,u=i.getStatus();if(!l||jk(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===vi.ABORT;r(!1,new Ou(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ou(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Ok(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=xm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?z0():Rk();o(u)}else{const u=Sk();o(u)}};this.canceled_?n(!1,new Ou(!1,null,!0)):this.backoffId_=Dk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Lk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ou{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Bk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $k(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Hk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Wk(t,e,n,r,s,i,o=!0,l=!1){const u=Fk(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return $k(d,e),Bk(d,n),zk(d,i),Hk(d,r),new Uk(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Gk(...t){const e=qk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(km())return new Blob(t);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Kk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){if(typeof atob>"u")throw Pk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wd{constructor(e,n){this.data=e,this.contentType=n||null}}function Xk(t,e){switch(t){case pr.RAW:return new Wd(H0(e));case pr.BASE64:case pr.BASE64URL:return new Wd(W0(t,e));case pr.DATA_URL:return new Wd(Jk(e),Zk(e))}throw xm()}function H0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Yk(t){let e;try{e=decodeURIComponent(t)}catch{throw Ja(pr.DATA_URL,"Malformed data URL.")}return H0(e)}function W0(t,e){switch(t){case pr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ja(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case pr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ja(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Qk(e)}catch(s){throw s.message.includes("polyfill")?s:Ja(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class q0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ja(pr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=eP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Jk(t){const e=new q0(t);return e.base64?W0(pr.BASE64,e.rest):Yk(e.rest)}function Zk(t){return new q0(t).contentType}function eP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){let r=0,s="";o_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(o_(this.data_)){const r=this.data_,s=Kk(r,e,n);return s===null?null:new Is(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Is(r,!0)}}static getBlob(...e){if(km()){const n=e.map(r=>r instanceof Is?r.data_:r);return new Is(Gk.apply(null,n))}else{const n=e.map(o=>$0(o)?Xk(pr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Is(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){let e;try{e=JSON.parse(t)}catch{return null}return Vk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function G0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t,e){return e}class Vt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||sP}}let Vu=null;function iP(t){return!$0(t)||t.length<2?t:G0(t)}function oP(){if(Vu)return Vu;const t=[];t.push(new Vt("bucket")),t.push(new Vt("generation")),t.push(new Vt("metageneration")),t.push(new Vt("name","fullPath",!0));function e(i,o){return iP(o)}const n=new Vt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Vt("size");return s.xform=r,t.push(s),t.push(new Vt("timeCreated")),t.push(new Vt("updated")),t.push(new Vt("md5Hash",null,!0)),t.push(new Vt("cacheControl",null,!0)),t.push(new Vt("contentDisposition",null,!0)),t.push(new Vt("contentEncoding",null,!0)),t.push(new Vt("contentLanguage",null,!0)),t.push(new Vt("contentType",null,!0)),t.push(new Vt("metadata","customMetadata",!0)),Vu=t,Vu}function aP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new hn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function lP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return aP(r,t),r}function uP(t,e,n){const r=tP(e);return r===null?null:lP(t,r,n)}function cP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class hP{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){if(!t)throw xm()}function fP(t,e){function n(r,s){const i=uP(t,s,e);return dP(i!==null),i}return n}function pP(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Tk():s=Ek():n.getStatus()===402?s=wk(t.bucket):n.getStatus()===403?s=Ik(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function gP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=mP(null,e)),r}function yP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let C="";for(let O=0;O<2;O++)C=C+Math.random().toString().slice(2);return C}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=gP(e,r,s),d=cP(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",T=Is.getBlob(m,r,p);if(T===null)throw kk();const k={name:c.fullPath},P=Mk(i,t.host,t._protocol),D="POST",_=t.maxUploadRetryTime,w=new hP(P,D,fP(t,n),_);return w.urlParams=k,w.headers=o,w.body=T.uploadData(),w.errorHandler=pP(e),w}class _P{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ka("cannot .send() more than once");if(Rr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ka("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ka("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ka("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ka("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vP extends _P{initXhr(){this.xhr_.responseType="text"}}function wP(){return new vP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pi(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G0(this._location.path)}get storage(){return this._service}get parent(){const e=nP(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new Pi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Nk(e)}}function EP(t,e,n){t._throwIfRoot("uploadBytes");const r=yP(t.storage,t._location,oP(),new Is(e,!0),n);return t.storage.makeRequestWithTokens(r,wP).then(s=>({metadata:s,ref:t}))}function TP(t,e){const n=rP(t._location.path,e),r=new hn(t._location.bucket,n);return new Pi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){return/^[A-Za-z]+:\/\//.test(t)}function SP(t,e){return new Pi(t,e)}function K0(t,e){if(t instanceof Pm){const n=t;if(n._bucket==null)throw xk();const r=new Pi(n,n._bucket);return e!=null?K0(r,e):r}else return e!==void 0?TP(t,e):t}function RP(t,e){if(e&&IP(e)){if(t instanceof Pm)return SP(t,e);throw np("To use ref(service, url), the first argument must be a Storage instance.")}else return K0(t,e)}function l_(t,e){const n=e==null?void 0:e[B0];return n==null?null:hn.makeFromBucketSpec(n,t)}function AP(t,e,n,r={}){t.host=`${e}:${n}`;const s=Rr(e);s&&(wh(`https://${t.host}/b`),Eh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:JE(i,t.app.options.projectId))}class Pm{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=U0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_k,this._maxUploadRetryTime=vk,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bk(z0());{const o=Wk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const u_="@firebase/storage",c_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="storage";function h_(t,e,n){return t=Ve(t),EP(t,e,n)}function d_(t,e){return t=Ve(t),RP(t,e)}function X0(t=Th(),e){t=Ve(t);const r=Fl(t,Q0).getImmediate({identifier:e}),s=ym("storage");return s&&CP(r,...s),r}function CP(t,e,n,r={}){AP(t,e,n,r)}function xP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Pm(n,r,s,e,Vi)}function kP(){zs(new Jr(Q0,xP,"PUBLIC").setMultipleInstances(!0)),kn(u_,c_,""),kn(u_,c_,"esm2020")}kP();var f_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fs,Y0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function S(){}S.prototype=v.prototype,I.F=v.prototype,I.prototype=new S,I.prototype.constructor=I,I.D=function(A,x,N){for(var R=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)R[Ce-2]=arguments[Ce];return v.prototype[x].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,S){S||(S=0);const A=Array(16);if(typeof v=="string")for(var x=0;x<16;++x)A[x]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(x=0;x<16;++x)A[x]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=I.g[0],S=I.g[1],x=I.g[2];let N=I.g[3],R;R=v+(N^S&(x^N))+A[0]+3614090360&4294967295,v=S+(R<<7&4294967295|R>>>25),R=N+(x^v&(S^x))+A[1]+3905402710&4294967295,N=v+(R<<12&4294967295|R>>>20),R=x+(S^N&(v^S))+A[2]+606105819&4294967295,x=N+(R<<17&4294967295|R>>>15),R=S+(v^x&(N^v))+A[3]+3250441966&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(N^S&(x^N))+A[4]+4118548399&4294967295,v=S+(R<<7&4294967295|R>>>25),R=N+(x^v&(S^x))+A[5]+1200080426&4294967295,N=v+(R<<12&4294967295|R>>>20),R=x+(S^N&(v^S))+A[6]+2821735955&4294967295,x=N+(R<<17&4294967295|R>>>15),R=S+(v^x&(N^v))+A[7]+4249261313&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(N^S&(x^N))+A[8]+1770035416&4294967295,v=S+(R<<7&4294967295|R>>>25),R=N+(x^v&(S^x))+A[9]+2336552879&4294967295,N=v+(R<<12&4294967295|R>>>20),R=x+(S^N&(v^S))+A[10]+4294925233&4294967295,x=N+(R<<17&4294967295|R>>>15),R=S+(v^x&(N^v))+A[11]+2304563134&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(N^S&(x^N))+A[12]+1804603682&4294967295,v=S+(R<<7&4294967295|R>>>25),R=N+(x^v&(S^x))+A[13]+4254626195&4294967295,N=v+(R<<12&4294967295|R>>>20),R=x+(S^N&(v^S))+A[14]+2792965006&4294967295,x=N+(R<<17&4294967295|R>>>15),R=S+(v^x&(N^v))+A[15]+1236535329&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(x^N&(S^x))+A[1]+4129170786&4294967295,v=S+(R<<5&4294967295|R>>>27),R=N+(S^x&(v^S))+A[6]+3225465664&4294967295,N=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(N^v))+A[11]+643717713&4294967295,x=N+(R<<14&4294967295|R>>>18),R=S+(N^v&(x^N))+A[0]+3921069994&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(x^N&(S^x))+A[5]+3593408605&4294967295,v=S+(R<<5&4294967295|R>>>27),R=N+(S^x&(v^S))+A[10]+38016083&4294967295,N=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(N^v))+A[15]+3634488961&4294967295,x=N+(R<<14&4294967295|R>>>18),R=S+(N^v&(x^N))+A[4]+3889429448&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(x^N&(S^x))+A[9]+568446438&4294967295,v=S+(R<<5&4294967295|R>>>27),R=N+(S^x&(v^S))+A[14]+3275163606&4294967295,N=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(N^v))+A[3]+4107603335&4294967295,x=N+(R<<14&4294967295|R>>>18),R=S+(N^v&(x^N))+A[8]+1163531501&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(x^N&(S^x))+A[13]+2850285829&4294967295,v=S+(R<<5&4294967295|R>>>27),R=N+(S^x&(v^S))+A[2]+4243563512&4294967295,N=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(N^v))+A[7]+1735328473&4294967295,x=N+(R<<14&4294967295|R>>>18),R=S+(N^v&(x^N))+A[12]+2368359562&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(S^x^N)+A[5]+4294588738&4294967295,v=S+(R<<4&4294967295|R>>>28),R=N+(v^S^x)+A[8]+2272392833&4294967295,N=v+(R<<11&4294967295|R>>>21),R=x+(N^v^S)+A[11]+1839030562&4294967295,x=N+(R<<16&4294967295|R>>>16),R=S+(x^N^v)+A[14]+4259657740&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(S^x^N)+A[1]+2763975236&4294967295,v=S+(R<<4&4294967295|R>>>28),R=N+(v^S^x)+A[4]+1272893353&4294967295,N=v+(R<<11&4294967295|R>>>21),R=x+(N^v^S)+A[7]+4139469664&4294967295,x=N+(R<<16&4294967295|R>>>16),R=S+(x^N^v)+A[10]+3200236656&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(S^x^N)+A[13]+681279174&4294967295,v=S+(R<<4&4294967295|R>>>28),R=N+(v^S^x)+A[0]+3936430074&4294967295,N=v+(R<<11&4294967295|R>>>21),R=x+(N^v^S)+A[3]+3572445317&4294967295,x=N+(R<<16&4294967295|R>>>16),R=S+(x^N^v)+A[6]+76029189&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(S^x^N)+A[9]+3654602809&4294967295,v=S+(R<<4&4294967295|R>>>28),R=N+(v^S^x)+A[12]+3873151461&4294967295,N=v+(R<<11&4294967295|R>>>21),R=x+(N^v^S)+A[15]+530742520&4294967295,x=N+(R<<16&4294967295|R>>>16),R=S+(x^N^v)+A[2]+3299628645&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(x^(S|~N))+A[0]+4096336452&4294967295,v=S+(R<<6&4294967295|R>>>26),R=N+(S^(v|~x))+A[7]+1126891415&4294967295,N=v+(R<<10&4294967295|R>>>22),R=x+(v^(N|~S))+A[14]+2878612391&4294967295,x=N+(R<<15&4294967295|R>>>17),R=S+(N^(x|~v))+A[5]+4237533241&4294967295,S=x+(R<<21&4294967295|R>>>11),R=v+(x^(S|~N))+A[12]+1700485571&4294967295,v=S+(R<<6&4294967295|R>>>26),R=N+(S^(v|~x))+A[3]+2399980690&4294967295,N=v+(R<<10&4294967295|R>>>22),R=x+(v^(N|~S))+A[10]+4293915773&4294967295,x=N+(R<<15&4294967295|R>>>17),R=S+(N^(x|~v))+A[1]+2240044497&4294967295,S=x+(R<<21&4294967295|R>>>11),R=v+(x^(S|~N))+A[8]+1873313359&4294967295,v=S+(R<<6&4294967295|R>>>26),R=N+(S^(v|~x))+A[15]+4264355552&4294967295,N=v+(R<<10&4294967295|R>>>22),R=x+(v^(N|~S))+A[6]+2734768916&4294967295,x=N+(R<<15&4294967295|R>>>17),R=S+(N^(x|~v))+A[13]+1309151649&4294967295,S=x+(R<<21&4294967295|R>>>11),R=v+(x^(S|~N))+A[4]+4149444226&4294967295,v=S+(R<<6&4294967295|R>>>26),R=N+(S^(v|~x))+A[11]+3174756917&4294967295,N=v+(R<<10&4294967295|R>>>22),R=x+(v^(N|~S))+A[2]+718787259&4294967295,x=N+(R<<15&4294967295|R>>>17),R=S+(N^(x|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+x&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.v=function(I,v){v===void 0&&(v=I.length);const S=v-this.blockSize,A=this.C;let x=this.h,N=0;for(;N<v;){if(x==0)for(;N<=S;)s(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(A[x++]=I.charCodeAt(N++),x==this.blockSize){s(this,A),x=0;break}}else for(;N<v;)if(A[x++]=I[N++],x==this.blockSize){s(this,A),x=0;break}}this.h=x,this.o+=v},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var S=I.length-8;S<I.length;++S)I[S]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,S=0;S<4;++S)for(let A=0;A<32;A+=8)I[v++]=this.g[S]>>>A&255;return I};function i(I,v){var S=l;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=v(I)}function o(I,v){this.h=v;const S=[];let A=!0;for(let x=I.length-1;x>=0;x--){const N=I[x]|0;A&&N==v||(S[x]=N,A=!1)}this.g=S}var l={};function u(I){return-128<=I&&I<128?i(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return D(c(-I));const v=[];let S=1;for(let A=0;I>=S;A++)v[A]=I/S|0,S*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return D(d(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(v,8));let A=m;for(let N=0;N<I.length;N+=8){var x=Math.min(8,I.length-N);const R=parseInt(I.substring(N,N+x),v);x<8?(x=c(Math.pow(v,x)),A=A.j(x).add(c(R))):(A=A.j(S),A=A.add(c(R)))}return A}var m=u(0),p=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();let I=0,v=1;for(let S=0;S<this.g.length;S++){const A=this.i(S);I+=(A>=0?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(P(this))return"-"+D(this).toString(I);const v=c(Math.pow(I,6));var S=this;let A="";for(;;){const x=O(S,v).g;S=_(S,x.j(v));let N=((S.g.length>0?S.g[0]:S.h)>>>0).toString(I);if(S=x,k(S))return N+A;for(;N.length<6;)N="0"+N;A=N+A}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=_(this,I),P(I)?-1:k(I)?0:1};function D(I){const v=I.g.length,S=[];for(let A=0;A<v;A++)S[A]=~I.g[A];return new o(S,~I.h).add(p)}t.abs=function(){return P(this)?D(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),S=[];let A=0;for(let x=0;x<=v;x++){let N=A+(this.i(x)&65535)+(I.i(x)&65535),R=(N>>>16)+(this.i(x)>>>16)+(I.i(x)>>>16);A=R>>>16,N&=65535,R&=65535,S[x]=R<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(I,v){return I.add(D(v))}t.j=function(I){if(k(this)||k(I))return m;if(P(this))return P(I)?D(this).j(D(I)):D(D(this).j(I));if(P(I))return D(this.j(D(I)));if(this.l(T)<0&&I.l(T)<0)return c(this.m()*I.m());const v=this.g.length+I.g.length,S=[];for(var A=0;A<2*v;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(let x=0;x<I.g.length;x++){const N=this.i(A)>>>16,R=this.i(A)&65535,Ce=I.i(x)>>>16,ut=I.i(x)&65535;S[2*A+2*x]+=R*ut,w(S,2*A+2*x),S[2*A+2*x+1]+=N*ut,w(S,2*A+2*x+1),S[2*A+2*x+1]+=R*Ce,w(S,2*A+2*x+1),S[2*A+2*x+2]+=N*Ce,w(S,2*A+2*x+2)}for(I=0;I<v;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=v;I<2*v;I++)S[I]=0;return new o(S,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function C(I,v){this.g=I,this.h=v}function O(I,v){if(k(v))throw Error("division by zero");if(k(I))return new C(m,m);if(P(I))return v=O(D(I),v),new C(D(v.g),D(v.h));if(P(v))return v=O(I,D(v)),new C(D(v.g),v.h);if(I.g.length>30){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var S=p,A=v;A.l(I)<=0;)S=$(S),A=$(A);var x=H(S,1),N=H(A,1);for(A=H(A,2),S=H(S,2);!k(A);){var R=N.add(A);R.l(I)<=0&&(x=x.add(S),N=R),A=H(A,1),S=H(S,1)}return v=_(I,x.j(v)),new C(x,v)}for(x=m;I.l(v)>=0;){for(S=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),N=c(S),R=N.j(v);P(R)||R.l(I)>0;)S-=A,N=c(S),R=N.j(v);k(N)&&(N=p),x=x.add(N),I=_(I,R)}return new C(x,I)}t.B=function(I){return O(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let A=0;A<v;A++)S[A]=this.i(A)&I.i(A);return new o(S,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let A=0;A<v;A++)S[A]=this.i(A)|I.i(A);return new o(S,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let A=0;A<v;A++)S[A]=this.i(A)^I.i(A);return new o(S,this.h^I.h)};function $(I){const v=I.g.length+1,S=[];for(let A=0;A<v;A++)S[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(S,I.h)}function H(I,v){const S=v>>5;v%=32;const A=I.g.length-S,x=[];for(let N=0;N<A;N++)x[N]=v>0?I.i(N+S)>>>v|I.i(N+S+1)<<32-v:I.i(N+S);return new o(x,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Y0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Fs=o}).apply(typeof f_<"u"?f_:typeof self<"u"?self:typeof window<"u"?window:{});var Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var J0,Ma,Z0,ic,rp,eT,tT,nT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mu=="object"&&Mu];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in f))break e;f=f[b]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,b,V){for(var K=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)K[fe-2]=arguments[fe];return h.prototype[b].apply(y,K)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function k(a,h){for(let y=1;y<arguments.length;y++){const b=arguments[y];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const V=b.length||0;a.length=f+V;for(let K=0;K<V;K++)a[f+K]=b[K]}else a.push(b)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function _(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,f){const y=C.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var C=new P(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let $,H=!1,I=new w,v=()=>{const a=Promise.resolve(void 0);$=()=>{a.then(S)}};function S(){for(var a;a=_();){try{a.h.call(a.g)}catch(f){D(f)}var h=C;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}H=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function R(a){return/^[\s\xa0]*$/.test(a)}function Ce(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Ce,x),Ce.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ut="closure_listenable_"+(Math.random()*1e6|0),zt=0;function Lt(a,h,f,y,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=b,this.key=++zt,this.da=this.fa=!1}function X(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ie(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function ue(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ee(a){const h={};for(const f in a)h[f]=a[f];return h}const xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $t(a,h){let f,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(f in y)a[f]=y[f];for(let V=0;V<xe.length;V++)f=xe[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function Ye(a){this.src=a,this.g={},this.h=0}Ye.prototype.add=function(a,h,f,y,b){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const K=St(a,h,y,b);return K>-1?(h=a[K],f||(h.fa=!1)):(h=new Lt(h,this.src,V,!!y,b),h.fa=f,a.push(h)),h};function Ht(a,h){const f=h.type;if(f in a.g){var y=a.g[f],b=Array.prototype.indexOf.call(y,h,void 0),V;(V=b>=0)&&Array.prototype.splice.call(y,b,1),V&&(X(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function St(a,h,f,y){for(let b=0;b<a.length;++b){const V=a[b];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==y)return b}return-1}var Ot="closure_lm_"+(Math.random()*1e6|0),Dn={};function Ln(a,h,f,y,b){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Ln(a,h[V],f,y,b);return null}return f=Jl(f),a&&a[ut]?a.J(h,f,l(y)?!!y.capture:!1,b):Yn(a,h,f,!1,y,b)}function Yn(a,h,f,y,b,V){if(!h)throw Error("Invalid event type");const K=l(b)?!!b.capture:!!b;let fe=Bi(a);if(fe||(a[Ot]=fe=new Ye(a)),f=fe.add(h,f,y,K,V),f.proxy)return f;if(y=Yh(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)N||(b=K),b===void 0&&(b=!1),a.addEventListener(h.toString(),y,b);else if(a.attachEvent)a.attachEvent(Yl(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Yh(){function a(f){return h.call(a.src,a.listener,f)}const h=Jh;return a}function Xl(a,h,f,y,b){if(Array.isArray(h))for(var V=0;V<h.length;V++)Xl(a,h[V],f,y,b);else y=l(y)?!!y.capture:!!y,f=Jl(f),a&&a[ut]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=St(h,f,y,b),f>-1&&(X(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Bi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=St(h,f,y,b)),(f=a>-1?h[a]:null)&&Ui(f))}function Ui(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ut])Ht(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Yl(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Bi(h))?(Ht(f,a),f.h==0&&(f.src=null,h[Ot]=null)):X(a)}}}function Yl(a){return a in Dn?Dn[a]:Dn[a]="on"+a}function Jh(a,h){if(a.da)a=!0;else{h=new Ce(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&Ui(a),a=f.call(y,h)}return a}function Bi(a){return a=a[Ot],a instanceof Ye?a:null}var ra="__closure_events_fn_"+(Math.random()*1e9>>>0);function Jl(a){return typeof a=="function"?a:(a[ra]||(a[ra]=function(h){return a.handleEvent(h)}),a[ra])}function ct(){A.call(this),this.i=new Ye(this),this.M=this,this.G=null}m(ct,A),ct.prototype[ut]=!0,ct.prototype.removeEventListener=function(a,h,f,y){Xl(this,a,h,f,y)};function gt(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var b=h;h=new x(y,a),$t(h,b)}b=!0;let V,K;if(f)for(K=f.length-1;K>=0;K--)V=h.g=f[K],b=Ar(V,y,!0,h)&&b;if(V=h.g=a,b=Ar(V,y,!0,h)&&b,b=Ar(V,y,!1,h)&&b,f)for(K=0;K<f.length;K++)V=h.g=f[K],b=Ar(V,y,!1,h)&&b}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)X(f[y]);delete a.g[h],a.h--}}this.G=null},ct.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},ct.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Ar(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let V=0;V<h.length;++V){const K=h[V];if(K&&!K.da&&K.capture==f){const fe=K.listener,st=K.ha||K.src;K.fa&&Ht(a.i,K),b=fe.call(st,y)!==!1&&b}}return b&&!y.defaultPrevented}function Zl(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function sa(a){a.g=Zl(()=>{a.g=null,a.i&&(a.i=!1,sa(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class eu extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:sa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(a){A.call(this),this.h=a,this.g={}}m(zi,A);var tu=[];function Zh(a){ie(a.g,function(h,f){this.g.hasOwnProperty(f)&&Ui(h)},a),a.g={}}zi.prototype.N=function(){zi.Z.N.call(this),Zh(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ia=o.JSON.stringify,nu=o.JSON.parse,ed=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function oa(){}function ru(){}var $i={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function aa(){x.call(this,"d")}m(aa,x);function su(){x.call(this,"c")}m(su,x);var Cr={},td=null;function Hi(){return td=td||new ct}Cr.Ia="serverreachability";function nd(a){x.call(this,Cr.Ia,a)}m(nd,x);function ni(a){const h=Hi();gt(h,new nd(h))}Cr.STAT_EVENT="statevent";function xr(a,h){x.call(this,Cr.STAT_EVENT,a),this.stat=h}m(xr,x);function ht(a){const h=Hi();gt(h,new xr(h,a))}Cr.Ja="timingevent";function nn(a,h){x.call(this,Cr.Ja,a),this.size=h}m(nn,x);function Rt(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Jn(){this.g=!0}Jn.prototype.ua=function(){this.g=!1};function kr(a,h,f,y,b,V){a.info(function(){if(a.g)if(V){var K="",fe=V.split("&");for(let Pe=0;Pe<fe.length;Pe++){var st=fe[Pe].split("=");if(st.length>1){const dt=st[0];st=st[1];const lr=dt.split("_");K=lr.length>=2&&lr[1]=="type"?K+(dt+"="+st+"&"):K+(dt+"=redacted&")}}}else K=null;else K=V;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+f+`
`+K})}function rd(a,h,f,y,b,V,K){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+f+`
`+V+" "+K})}function Wt(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Pr(a,f)+(y?" "+y:"")})}function sd(a,h){a.info(function(){return"TIMEOUT: "+h})}Jn.prototype.info=function(){};function Pr(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var b=y[0];if(b!="noop"&&b!="stop"&&b!="close")for(let K=1;K<y.length;K++)y[K]=""}}}}return ia(V)}catch{return h}}var Wi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},iu;function On(){}m(On,oa),On.prototype.g=function(){return new XMLHttpRequest},iu=new On;function ri(a){return encodeURIComponent(String(a))}function Nr(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function er(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new zi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tr}function tr(){this.i=null,this.g="",this.h=!1}var ou={},Vn={};function la(a,h,f){a.M=1,a.A=ir(vn(h)),a.u=f,a.R=!0,rn(a,null)}function rn(a,h){a.F=Date.now(),qi(a),a.B=vn(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),id(f.i,"t",y),a.C=0,f=a.j.L,a.h=new tr,a.g=Ie(a.j,f?h:null,!a.u),a.P>0&&(a.O=new eu(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(tu[0]=b.toString()),b=tu);for(let V=0;V<b.length;V++){const K=Ln(f,b[V],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Ee(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ni(),kr(a.i,a.v,a.B,a.l,a.S,a.u)}er.prototype.ba=function(a){a=a.target;const h=this.O;h&&E(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const fe=E(this.g),st=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||M(this.g)))){this.K||fe!=4||st==7||(st==8||Pe<=0?ni(3):ni(2)),si(this);var h=this.g.ca();this.X=h;var f=yn(this);if(this.o=h==200,rd(this.i,this.v,this.B,this.l,this.S,fe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,b=this.g;if((y=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(y)){var V=y;break t}}V=null}if(a=V)Wt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,on(this,a);else{this.o=!1,this.m=3,ht(12),nr(this),ss(this);break e}}if(this.R){a=!0;let dt;for(;!this.K&&this.C<f.length;)if(dt=_n(this,f),dt==Vn){fe==4&&(this.m=4,ht(14),a=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==ou){this.m=4,ht(15),Wt(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Wt(this.i,this.l,dt,null),on(this,dt);if(sn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||f.length!=0||this.h.h||(this.m=1,ht(16),a=!1),this.o=this.o&&a,!a)Wt(this.i,this.l,f,"[Invalid Chunked Response]"),nr(this),ss(this);else if(f.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),He(K),K.P=!0,ht(11))}}else Wt(this.i,this.l,f,null),on(this,f);fe==4&&nr(this),this.o&&!this.K&&(fe==4?ya(this.j,this):(this.o=!1,qi(this)))}else F(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),nr(this),ss(this)}}}catch{}finally{}};function yn(a){if(!sn(a))return a.g.la();const h=M(a.g);if(h==="")return"";let f="";const y=h.length,b=E(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return nr(a),ss(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<y;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(b&&V==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function sn(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function _n(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Vn:(f=Number(h.substring(f,y)),isNaN(f)?ou:(y+=1,y+f>h.length?Vn:(h=h.slice(y,y+f),a.C=y+f,h)))}er.prototype.cancel=function(){this.K=!0,nr(this)};function qi(a){a.T=Date.now()+a.H,au(a,a.H)}function au(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Rt(c(a.aa,a),h)}function si(a){a.D&&(o.clearTimeout(a.D),a.D=null)}er.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sd(this.i,this.B),this.M!=2&&(ni(),ht(17)),nr(this),this.m=2,ss(this)):au(this,this.T-a)};function ss(a){a.j.I==0||a.K||ya(a.j,a)}function nr(a){si(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Zh(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function on(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||is(f.h,a))){if(!a.L&&is(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)an(f),re(f);else break e;ve(f),ht(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Rt(c(f.Va,f),6e3));ha(f.h)<=1&&f.ta&&(f.ta=void 0)}else In(f,11)}else if((a.L||f.g==a)&&an(f),!R(h))for(b=f.Ba.g.parse(h),h=0;h<b.length;h++){let Pe=b[h];const dt=Pe[0];if(!(dt<=f.K))if(f.K=dt,Pe=Pe[1],f.I==2)if(Pe[0]=="c"){f.M=Pe[1],f.ba=Pe[2];const lr=Pe[3];lr!=null&&(f.ka=lr,f.j.info("VER="+f.ka));const ui=Pe[4];ui!=null&&(f.za=ui,f.j.info("SVER="+f.za));const cs=Pe[5];cs!=null&&typeof cs=="number"&&cs>0&&(y=1.5*cs,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const hs=a.g;if(hs){const pu=hs.g?hs.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pu){var V=y.h;V.g||pu.indexOf("spdy")==-1&&pu.indexOf("quic")==-1&&pu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(os(V,V.h),V.h=null))}if(y.G){const cd=hs.g?hs.g.getResponseHeader("X-HTTP-Session-Id"):null;cd&&(y.wa=cd,Ae(y.J,y.G,cd))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var K=a;if(y.na=ud(y,y.L?y.ba:null,y.W),K.L){da(y.h,K);var fe=K,st=y.O;st&&(fe.H=st),fe.D&&(si(fe),qi(fe)),y.g=K}else ne(y);f.i.length>0&&U(f)}else Pe[0]!="stop"&&Pe[0]!="close"||In(f,7);else f.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?In(f,7):W(f):Pe[0]!="noop"&&f.l&&f.l.qa(Pe),f.A=0)}}ni(4)}catch{}}var Mn=class{constructor(a,h){this.g=a,this.map=h}};function ua(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ca(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ha(a){return a.h?1:a.g?a.g.size:0}function is(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function os(a,h){a.g?a.g.add(h):a.h=h}function da(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ua.prototype.cancel=function(){if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fa(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return T(a.i)}var ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gi(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let b,V=null;y>=0?(b=a[f].substring(0,y),V=a[f].substring(y+1)):b=a[f],h(b,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof rr?(this.l=a.l,wn(this,a.j),this.o=a.o,this.g=a.g,En(this,a.u),this.h=a.h,sr(this,od(a.i)),this.m=a.m):a&&(h=String(a).match(ii))?(this.l=!1,wn(this,h[1]||"",!0),this.o=as(h[2]||""),this.g=as(h[3]||"",!0),En(this,h[4]),this.h=as(h[5]||"",!0),sr(this,h[6]||"",!0),this.m=as(h[7]||"")):(this.l=!1,this.i=new oi(null,this.l))}rr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(or(h,pa,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(or(h,pa,!0),"@"),a.push(ri(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(or(f,f.charAt(0)=="/"?lu:br,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",or(f,uu)),a.join("")},rr.prototype.resolve=function(a){const h=vn(this);let f=!!a.j;f?wn(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)En(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var b=h.h.lastIndexOf("/");b!=-1&&(y=h.h.slice(0,b+1)+y)}if(b=y,b==".."||b==".")y="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){y=b.lastIndexOf("/",0)==0,b=b.split("/");const V=[];for(let K=0;K<b.length;){const fe=b[K++];fe=="."?y&&K==b.length&&V.push(""):fe==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),y&&K==b.length&&V.push("")):(V.push(fe),y=!0)}y=V.join("/")}else y=b}return f?h.h=y:f=a.i.toString()!=="",f?sr(h,od(a.i)):f=!!a.m,f&&(h.m=a.m),h};function vn(a){return new rr(a)}function wn(a,h,f){a.j=f?as(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function En(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function sr(a,h,f){h instanceof oi?(a.i=h,ad(a.i,a.l)):(f||(h=or(h,ar)),a.i=new oi(h,a.l))}function Ae(a,h,f){a.i.set(h,f)}function ir(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function as(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function or(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Ki),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ki(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pa=/[#\/\?@]/g,br=/[#\?:]/g,lu=/[#\?]/g,ar=/[#\?@]/g,uu=/#/g;function oi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Dr(a){a.g||(a.g=new Map,a.h=0,a.i&&Gi(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=oi.prototype,t.add=function(a,h){Dr(this),this.i=null,a=Lr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ls(a,h){Dr(a),h=Lr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Qi(a,h){return Dr(a),h=Lr(a,h),a.g.has(h)}t.forEach=function(a,h){Dr(this),this.g.forEach(function(f,y){f.forEach(function(b){a.call(h,b,y,this)},this)},this)};function Xi(a,h){Dr(a);let f=[];if(typeof h=="string")Qi(a,h)&&(f=f.concat(a.g.get(Lr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Dr(this),this.i=null,a=Lr(this,a),Qi(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Xi(this,a),a.length>0?String(a[0]):h):h};function id(a,h,f){ls(a,h),f.length>0&&(a.i=null,a.g.set(Lr(a,h),T(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const b=ri(f);f=Xi(this,f);for(let V=0;V<f.length;V++){let K=b;f[V]!==""&&(K+="="+ri(f[V])),a.push(K)}}return this.i=a.join("&")};function od(a){const h=new oi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Lr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ad(a,h){h&&!a.j&&(Dr(a),a.i=null,a.g.forEach(function(f,y){const b=y.toLowerCase();y!=b&&(ls(this,y),id(this,b,f))},a)),a.j=h}function Yi(a,h){const f=new Jn;if(o.Image){const y=new Image;y.onload=d(qt,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(qt,f,"TestLoadImage: error",!1,h,y),y.onabort=d(qt,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(qt,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function cu(a,h){const f=new Jn,y=new AbortController,b=setTimeout(()=>{y.abort(),qt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(b),V.ok?qt(f,"TestPingServer: ok",!0,h):qt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),qt(f,"TestPingServer: error",!1,h)})}function qt(a,h,f,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(f)}catch{}}function hu(){this.g=new ed}function Tn(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Tn,oa),Tn.prototype.g=function(){return new ai(this.i,this.h)};function ai(a,h){ct.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ai,ct),t=ai.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Vr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ld(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ld(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Or(this):Vr(this),this.readyState==3&&ld(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Or(this))},t.Na=function(a){this.g&&(this.response=a,Or(this))},t.ga=function(){this.g&&Or(this)};function Or(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Vr(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Vr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ji(a){let h="";return ie(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Gt(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Ji(f),typeof a=="string"?f!=null&&ri(f):Ae(a,h,f))}function ke(a){ct.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ke,ct);var du=/^https?$/i,fu=["POST","PUT"];t=ke.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():iu.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){li(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)f.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(fu,h,void 0)>=0)||y||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of f)this.g.setRequestHeader(V,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){li(this,V)}};function li(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ma(a),Zi(a)}function ma(a){a.A||(a.A=!0,gt(a,"complete"),gt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,gt(this,"complete"),gt(this,"abort"),Zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zi(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ga(this):this.Xa())},t.Xa=function(){ga(this)};function ga(a){if(a.h&&typeof i<"u"){if(a.v&&E(a)==4)setTimeout(a.Ca.bind(a),0);else if(gt(a,"readystatechange"),E(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=V===0){let K=String(a.D).match(ii)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),y=!du.test(K?K.toLowerCase():"")}f=y}if(f)gt(a,"complete"),gt(a,"success");else{a.o=6;try{var b=E(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",ma(a)}}finally{Zi(a)}}}}function Zi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||gt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function E(a){return a.g?a.g.readyState:0}t.ca=function(){try{return E(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),nu(h)}};function M(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function F(a){const h={};a=(a.g&&E(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(R(a[y]))continue;var f=Nr(a[y]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[b]||[];h[b]=V,V.push(f)}ue(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function B(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function G(a){this.za=0,this.i=[],this.j=new Jn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=B("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=B("baseRetryDelayMs",5e3,a),this.Za=B("retryDelaySeedMs",1e4,a),this.Ta=B("forwardChannelMaxRetries",2,a),this.va=B("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ua(a&&a.concurrentRequestLimit),this.Ba=new hu,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=G.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){ht(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=ud(this,null,this.W),U(this)};function W(a){if(Q(a),a.I==3){var h=a.V++,f=vn(a.J);if(Ae(f,"SID",a.M),Ae(f,"RID",h),Ae(f,"TYPE","terminate"),oe(a,f),h=new er(a,a.j,h),h.M=2,h.A=ir(vn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Ie(h.j,null),h.g.ea(h.A)),h.F=Date.now(),qi(h)}va(a)}function re(a){a.g&&(He(a),a.g.cancel(),a.g=null)}function Q(a){re(a),a.v&&(o.clearTimeout(a.v),a.v=null),an(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function U(a){if(!ca(a.h)&&!a.m){a.m=!0;var h=a.Ea;$||v(),H||($(),H=!0),I.add(h,a),a.D=0}}function J(a,h){return ha(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Rt(c(a.Ea,a,h),_a(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new er(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Ee(V),$t(V,this.U)):V=this.U),this.u!==null||this.R||(b.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Z(this,b,h),f=vn(this.J),Ae(f,"RID",a),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),oe(this,f),V&&(this.R?h="headers="+ri(Ji(V))+"&"+h:this.u&&Gt(f,this.u,V)),os(this.h,b),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",h),Ae(f,"SID","null"),b.U=!0,la(b,f,null)):la(b,f,h),this.I=2}}else this.I==3&&(a?ce(this,a):this.i.length==0||ca(this.h)||ce(this))};function ce(a,h){var f;h?f=h.l:f=a.V++;const y=vn(a.J);Ae(y,"SID",a.M),Ae(y,"RID",f),Ae(y,"AID",a.K),oe(a,y),a.u&&a.o&&Gt(y,a.u,a.o),f=new er(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Z(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),os(a.h,f),la(f,y,h)}function oe(a,h){a.H&&ie(a.H,function(f,y){Ae(h,y,f)}),a.l&&ie({},function(f,y){Ae(h,y,f)})}function Z(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let fe=-1;for(;;){const st=["count="+f];fe==-1?f>0?(fe=b[0].g,st.push("ofs="+fe)):fe=0:st.push("ofs="+fe);let Pe=!0;for(let dt=0;dt<f;dt++){var V=b[dt].g;const lr=b[dt].map;if(V-=fe,V<0)fe=Math.max(0,b[dt].g-100),Pe=!1;else try{V="req"+V+"_"||"";try{var K=lr instanceof Map?lr:Object.entries(lr);for(const[ui,cs]of K){let hs=cs;l(cs)&&(hs=ia(cs)),st.push(V+ui+"="+encodeURIComponent(hs))}}catch(ui){throw st.push(V+"type="+encodeURIComponent("_badmap")),ui}}catch{y&&y(lr)}}if(Pe){K=st.join("&");break e}}K=void 0}return a=a.i.splice(0,f),h.G=a,K}function ne(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;$||v(),H||($(),H=!0),I.add(h,a),a.A=0}}function ve(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Rt(c(a.Da,a),_a(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,me(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Rt(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),re(this),me(this))};function He(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function me(a){a.g=new er(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=vn(a.na);Ae(h,"RID","rpc"),Ae(h,"SID",a.M),Ae(h,"AID",a.K),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(h,"TO",a.ia),Ae(h,"TYPE","xmlhttp"),oe(a,h),a.u&&a.o&&Gt(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ir(vn(h)),f.u=null,f.R=!0,rn(f,a)}t.Va=function(){this.C!=null&&(this.C=null,re(this),ve(this),ht(19))};function an(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ya(a,h){var f=null;if(a.g==h){an(a),He(a),a.g=null;var y=2}else if(is(a.h,h))f=h.G,da(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;y=Hi(),gt(y,new nn(y,f)),U(a)}else ne(a);else if(b=h.m,b==3||b==0&&h.X>0||!(y==1&&J(a,h)||y==2&&ve(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),b){case 1:In(a,5);break;case 4:In(a,10);break;case 3:In(a,6);break;default:In(a,2)}}}function _a(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function In(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const b=!y;y=new rr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||wn(y,"https"),ir(y),b?Yi(y.toString(),f):cu(y.toString(),f)}else ht(2);a.I=0,a.l&&a.l.pa(h),va(a),Q(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function va(a){if(a.I=0,a.ja=[],a.l){const h=fa(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function ud(a,h,f){var y=f instanceof rr?vn(f):new rr(f);if(y.g!="")h&&(y.g=h+"."+y.g),En(y,y.u);else{var b=o.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const V=new rr(null);y&&wn(V,y),h&&(V.g=h),b&&En(V,b),f&&(V.h=f),y=V}return f=a.G,h=a.wa,f&&h&&Ae(y,f,h),Ae(y,"VER",a.ka),oe(a,y),y}function Ie(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ke(new Tn({ab:f})):new ke(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function We(){}t=We.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fe(){}Fe.prototype.g=function(a,h){return new qe(a,h)};function qe(a,h){ct.call(this),this.g=new G(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!R(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!R(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yt(this)}m(qe,ct),qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){W(this.g)},qe.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ia(a),a=f);h.i.push(new Mn(h.Ya++,a)),h.I==3&&U(h)},qe.prototype.N=function(){this.g.l=null,delete this.j,W(this.g),delete this.g,qe.Z.N.call(this)};function us(a){aa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(us,aa);function Mr(){su.call(this),this.status=1}m(Mr,su);function yt(a){this.g=a}m(yt,We),yt.prototype.ra=function(){gt(this.g,"a")},yt.prototype.qa=function(a){gt(this.g,new us(a))},yt.prototype.pa=function(a){gt(this.g,new Mr)},yt.prototype.oa=function(){gt(this.g,"b")},Fe.prototype.createWebChannel=Fe.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,nT=function(){return new Fe},tT=function(){return Hi()},eT=Cr,rp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,ic=Wi,Zn.COMPLETE="complete",Z0=Zn,ru.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Ma=ru,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,J0=ke}).apply(typeof Mu<"u"?Mu:typeof self<"u"?self:typeof window<"u"?window:{});const p_="@firebase/firestore",m_="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new _m("@firebase/firestore");function no(){return Ni.logLevel}function ee(t,...e){if(Ni.logLevel<=ge.DEBUG){const n=e.map(Nm);Ni.debug(`Firestore (${Jo}): ${t}`,...n)}}function ts(t,...e){if(Ni.logLevel<=ge.ERROR){const n=e.map(Nm);Ni.error(`Firestore (${Jo}): ${t}`,...n)}}function jo(t,...e){if(Ni.logLevel<=ge.WARN){const n=e.map(Nm);Ni.warn(`Firestore (${Jo}): ${t}`,...n)}}function Nm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,rT(t,r,n)}function rT(t,e,n){let r=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ts(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||rT(e,s,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class NP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bP{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new sT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new kt(e)}}class DP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new DP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class g_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new g_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new g_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=VP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function sp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return qd(s)===qd(i)?ye(s,i):qd(s)?1:-1}return ye(t.length,e.length)}const MP=55296,FP=57343;function qd(t){const e=t.charCodeAt(0);return e>=MP&&e<=FP}function Uo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="__name__";class dr{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=dr.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=dr.isNumericId(e),s=dr.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?dr.extractNumericId(e).compare(dr.extractNumericId(n)):sp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fs.fromString(e.substring(4,e.length-2))}}class Ne extends dr{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const jP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends dr{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return jP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===y_}static keyField(){return new wt([y_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ne.fromString(e))}static fromName(e){return new se(Ne.fromString(e).popFirst(5))}static empty(){return new se(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t,e,n){if(!n)throw new Y(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UP(t,e,n,r){if(e===!0&&r===!0)throw new Y(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function __(t){if(!se.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v_(t){if(se.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ch(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ch(t);throw new Y(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function zl(t,e){if(!oT(t))throw new Y(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=-62135596800,E_=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*E_);return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<w_)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/E_}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zl(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-w_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:tt("string",Le._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Le(0,0))}static max(){return new he(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=-1;function BP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new $s(s,se.empty(),e)}function zP(t){return new $s(t.readTime,t.key,Il)}class $s{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $s(he.min(),se.empty(),Il)}static max(){return new $s(he.max(),se.empty(),Il)}}function $P(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==HP)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=-1;function kh(t){return t==null}function $c(t){return t===0&&1/t==-1/0}function GP(t){return typeof t=="number"&&Number.isInteger(t)&&!$c(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="";function KP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=T_(e)),e=QP(t.get(n),e);return T_(e)}function QP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case aT:n+="";break;default:n+=i}}return n}function T_(t){return t+aT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new lt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uT("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const XP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hs(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=XP.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ws(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="server_timestamp",hT="__type__",dT="__previous_value__",fT="__local_write_time__";function Lm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[hT])==null?void 0:r.stringValue)===cT}function Ph(t){const e=t.mapValue.fields[dT];return Lm(e)?Ph(e):e}function Sl(t){const e=Hs(t.mapValue.fields[fT].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r,s,i,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Hc="(default)";class Rl{constructor(e,n){this.projectId=e,this.database=n||Hc}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database===Hc}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="__type__",JP="__max__",ju={mapValue:{}},mT="__vector__",Wc="value";function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:eN(t)?9007199254740991:ZP(t)?10:11:le(28295,{value:t})}function Sr(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hs(s.timestampValue),l=Hs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ws(s.bytesValue).isEqual(Ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?$c(o)===$c(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Uo(t.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(I_(o)!==I_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Sr(o[u],l[u])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function Al(t,e){return(t.values||[]).find(n=>Sr(n,e))!==void 0}function Bo(t,e){if(t===e)return 0;const n=qs(t),r=qs(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),u=Qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return R_(t.timestampValue,e.timestampValue);case 4:return R_(Sl(t),Sl(e));case 5:return sp(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ws(i),u=Ws(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ye(l[c],u[c]);if(d!==0)return d}return ye(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Qe(i.latitude),Qe(o.latitude));return l!==0?l:ye(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return A_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,T,k,P;const l=i.fields||{},u=o.fields||{},c=(p=l[Wc])==null?void 0:p.arrayValue,d=(T=u[Wc])==null?void 0:T.arrayValue,m=ye(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return m!==0?m:A_(c,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ju.mapValue&&o===ju.mapValue)return 0;if(i===ju.mapValue)return 1;if(o===ju.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const p=sp(u[m],d[m]);if(p!==0)return p;const T=Bo(l[u[m]],c[d[m]]);if(T!==0)return T}return ye(u.length,d.length)}(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function R_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Hs(t),r=Hs(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function A_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bo(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function zo(t){return ip(t)}function ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ip(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ip(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function oc(t){switch(qs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ph(t);return e?16+oc(e):16;case 5:return 2*t.stringValue.length;case 6:return Ws(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+oc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Zs(r.fields,(i,o)=>{s+=i.length+oc(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function C_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function op(t){return!!t&&"integerValue"in t}function Om(t){return!!t&&"arrayValue"in t}function x_(t){return!!t&&"nullValue"in t}function k_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ac(t){return!!t&&"mapValue"in t}function ZP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[pT])==null?void 0:r.stringValue)===mT}function Za(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Za(t.arrayValue.values[n]);return e}return{...t}}function eN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===JP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(n)}setAll(e){let n=wt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Za(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ac(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xt(Za(this.value))}}function gT(t){const e=[];return Zs(t.fields,(n,r)=>{const s=new wt([n]);if(ac(r)){const i=gT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,he.min(),he.min(),he.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,s){return new Nt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new Nt(e,2,n,he.min(),he.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,he.min(),he.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.position=e,this.inclusive=n}}function P_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Bo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function N_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n="asc"){this.field=e,this.dir=n}}function tN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{}class et extends yT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rN(e,n,r):n==="array-contains"?new oN(e,r):n==="in"?new aN(e,r):n==="not-in"?new lN(e,r):n==="array-contains-any"?new uN(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sN(e,r):new iN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bo(n,this.value)):n!==null&&qs(this.value)===qs(n)&&this.matchesComparison(Bo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends yT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Qn(e,n)}matches(e){return _T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _T(t){return t.op==="and"}function vT(t){return nN(t)&&_T(t)}function nN(t){for(const e of t.filters)if(e instanceof Qn)return!1;return!0}function ap(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+zo(t.value);if(vT(t))return t.filters.map(e=>ap(e)).join(",");{const e=t.filters.map(n=>ap(n)).join(",");return`${t.op}(${e})`}}function wT(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Sr(r.value,s.value)}(t,e):t instanceof Qn?function(r,s){return s instanceof Qn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&wT(o,s.filters[l]),!0):!1}(t,e):void le(19439)}function ET(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${zo(n.value)}`}(t):t instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(ET).join(" ,")+"}"}(t):"Filter"}class rN extends et{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class sN extends et{constructor(e,n){super(e,"in",n),this.keys=TT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iN extends et{constructor(e,n){super(e,"not-in",n),this.keys=TT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class oN extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Om(n)&&Al(n.arrayValue,this.value)}}class aN extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Al(this.value.arrayValue,n)}}class lN extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Al(this.value.arrayValue,n)}}class uN extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Al(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function b_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new cN(t,e,n,r,s,i,o)}function Vm(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ap(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zo(r)).join(",")),e.Te=n}return e.Te}function Mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N_(t.startAt,e.startAt)&&N_(t.endAt,e.endAt)}function lp(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hN(t,e,n,r,s,i,o,l){return new ta(t,e,n,r,s,i,o,l)}function Nh(t){return new ta(t)}function D_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IT(t){return t.collectionGroup!==null}function el(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(wt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Cl(i,r))}),n.has(wt.keyField().canonicalString())||e.Ie.push(new Cl(wt.keyField(),r))}return e.Ie}function vr(t){const e=de(t);return e.Ee||(e.Ee=dN(e,el(t))),e.Ee}function dN(t,e){if(t.limitType==="F")return b_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Cl(s.field,i)});const n=t.endAt?new qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qc(t.startAt.position,t.startAt.inclusive):null;return b_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function up(t,e){const n=t.filters.concat([e]);return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cp(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bh(t,e){return Mm(vr(t),vr(e))&&t.limitType===e.limitType}function ST(t){return`${Vm(vr(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ET(s)).join(", ")}]`),kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>zo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>zo(s)).join(",")),`Target(${r})`}(vr(t))}; limitType=${t.limitType})`}function Dh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of el(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=P_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,el(r),s)||r.endAt&&!function(o,l,u){const c=P_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,el(r),s))}(t,e)}function fN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const s of el(t)){const i=pN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pN(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Bo(u,c):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new $e(se.comparator);function ns(){return mN}const AT=new $e(se.comparator);function Fa(...t){let e=AT;for(const n of t)e=e.insert(n.key,n);return e}function CT(t){let e=AT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return tl()}function xT(){return tl()}function tl(){return new Fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const gN=new $e(se.comparator),yN=new lt(se.comparator);function _e(...t){let e=yN;for(const n of t)e=e.add(n);return e}const _N=new lt(ye);function vN(){return _N}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function wN(t,e){return GP(e)?kT(e):Fm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this._=void 0}}function EN(t,e,n){return t instanceof xl?function(s,i){const o={fields:{[hT]:{stringValue:cT},[fT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lm(i)&&(i=Ph(i)),i&&(o.fields[dT]=i),{mapValue:o}}(n,e):t instanceof kl?NT(t,e):t instanceof Pl?bT(t,e):function(s,i){const o=PT(s,i),l=L_(o)+L_(s.Ae);return op(o)&&op(s.Ae)?kT(l):Fm(s.serializer,l)}(t,e)}function TN(t,e,n){return t instanceof kl?NT(t,e):t instanceof Pl?bT(t,e):n}function PT(t,e){return t instanceof Gc?function(r){return op(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xl extends Lh{}class kl extends Lh{constructor(e){super(),this.elements=e}}function NT(t,e){const n=DT(e);for(const r of t.elements)n.some(s=>Sr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pl extends Lh{constructor(e){super(),this.elements=e}}function bT(t,e){let n=DT(e);for(const r of t.elements)n=n.filter(s=>!Sr(s,r));return{arrayValue:{values:n}}}class Gc extends Lh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function L_(t){return Qe(t.integerValue||t.doubleValue)}function DT(t){return Om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n){this.field=e,this.transform=n}}function SN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof kl&&s instanceof kl||r instanceof Pl&&s instanceof Pl?Uo(r.elements,s.elements,Sr):r instanceof Gc&&s instanceof Gc?Sr(r.Ae,s.Ae):r instanceof xl&&s instanceof xl}(t.transform,e.transform)}class RN{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oh{}function LT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new VT(t.key,wr.none()):new $l(t.key,t.data,wr.none());{const n=t.data,r=Xt.empty();let s=new lt(wt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ei(t.key,r,new dn(s.toArray()),wr.none())}}function AN(t,e,n){t instanceof $l?function(s,i,o){const l=s.value.clone(),u=V_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(s,i,o){if(!lc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=V_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(OT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function nl(t,e,n,r){return t instanceof $l?function(i,o,l,u){if(!lc(i.precondition,o))return l;const c=i.value.clone(),d=M_(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(i,o,l,u){if(!lc(i.precondition,o))return l;const c=M_(i.fieldTransforms,u,o),d=o.data;return d.setAll(OT(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return lc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function CN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=PT(r.transform,s||null);i!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,i))}return n||null}function O_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Uo(r,s,(i,o)=>SN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $l extends Oh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ei extends Oh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function OT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function V_(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,TN(o,l,n[s]))}return r}function M_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,EN(i,o,e))}return r}class VT extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xN extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=LT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,(n,r)=>O_(n,r))&&Uo(this.baseMutations,e.baseMutations,(n,r)=>O_(n,r))}}class jm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return gN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jm(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,we;function bN(t){switch(t){case j.OK:return le(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function MT(t){if(t===void 0)return ts("GRPC error has no .code"),j.UNKNOWN;switch(t){case Je.OK:return j.OK;case Je.CANCELLED:return j.CANCELLED;case Je.UNKNOWN:return j.UNKNOWN;case Je.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Je.INTERNAL:return j.INTERNAL;case Je.UNAVAILABLE:return j.UNAVAILABLE;case Je.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Je.NOT_FOUND:return j.NOT_FOUND;case Je.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Je.ABORTED:return j.ABORTED;case Je.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Je.DATA_LOSS:return j.DATA_LOSS;default:return le(39323,{code:t})}}(we=Je||(Je={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new Fs([4294967295,4294967295],0);function F_(t){const e=DN().encode(t),n=new Y0;return n.update(e),new Uint8Array(n.digest())}function j_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fs([n,r],0),new Fs([s,i],0)]}class Um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ja(`Invalid padding: ${n}`);if(r<0)throw new ja(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ja(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ja(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Fs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Fs.fromNumber(r)));return s.compare(LN)===1&&(s=new Fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=F_(e),[r,s]=j_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Um(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=F_(e),[r,s]=j_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vh(he.min(),s,new $e(ye),ns(),_e())}}class Hl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hl(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class FT{constructor(e,n){this.targetId=e,this.Ce=n}}class jT{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class U_{constructor(){this.ve=0,this.Fe=B_(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new Hl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=B_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ON{constructor(e){this.Ge=e,this.ze=new Map,this.je=ns(),this.Je=Uu(),this.He=Uu(),this.Ye=new $e(ye)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(lp(i))if(r===0){const o=new se(i.path);this.et(n,o,Nt.newNoDocument(o,he.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ws(r).toUint8Array()}catch(u){if(u instanceof uT)return jo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Um(o,s,i)}catch(u){return jo(u instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&lp(l.target)){const u=new se(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Nt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=_e();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Vh(e,n,this.Ye,this.je,r);return this.je=ns(),this.Je=Uu(),this.He=Uu(),this.Ye=new $e(ye),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new U_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new lt(ye),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new lt(ye),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new U_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Uu(){return new $e(se.comparator)}function B_(){return new $e(se.comparator)}const VN={asc:"ASCENDING",desc:"DESCENDING"},MN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FN={and:"AND",or:"OR"};class jN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hp(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function Kc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UN(t,e){return Kc(t,e.toTimestamp())}function Er(t){return Se(!!t,49232),he.fromTimestamp(function(n){const r=Hs(n);return new Le(r.seconds,r.nanos)}(t))}function Bm(t,e){return dp(t,e).canonicalString()}function dp(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BT(t){const e=Ne.fromString(t);return Se(qT(e),10190,{key:e.toString()}),e}function fp(t,e){return Bm(t.databaseId,e.path)}function Gd(t,e){const n=BT(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se($T(n))}function zT(t,e){return Bm(t.databaseId,e)}function BN(t){const e=BT(t);return e.length===4?Ne.emptyPath():$T(e)}function pp(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $T(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function z_(t,e,n){return{name:fp(t,e),fields:n.value.mapValue.fields}}function zN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(Se(d===void 0||typeof d=="string",58123),It.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),It.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:MT(c.code);return new Y(d,c.message||"")}(o);n=new jT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gd(t,r.document.name),i=Er(r.document.updateTime),o=r.document.createTime?Er(r.document.createTime):he.min(),l=new Xt({mapValue:{fields:r.document.fields}}),u=Nt.newFoundDocument(s,i,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new uc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gd(t,r.document),i=r.readTime?Er(r.readTime):he.min(),o=Nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new uc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gd(t,r.document),i=r.removedTargetIds||[];n=new uc([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new NN(s,i),l=r.targetId;n=new FT(l,o)}}return n}function $N(t,e){let n;if(e instanceof $l)n={update:z_(t,e.key,e.value)};else if(e instanceof VT)n={delete:fp(t,e.key)};else if(e instanceof ei)n={update:z_(t,e.key,e.data),updateMask:JN(e.fieldMask)};else{if(!(e instanceof xN))return le(16599,{Vt:e.type});n={verify:fp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof kl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Gc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw le(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:UN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)}(t,e.precondition)),n}function HN(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Er(s.updateTime):Er(i);return o.isEqual(he.min())&&(o=Er(i)),new RN(o,s.transformResults||[])}(n,e))):[]}function WN(t,e){return{documents:[zT(t,e.path)]}}function qN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zT(t,s);const i=function(c){if(c.length!==0)return WT(Qn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:so(p.field),direction:QN(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function GN(t){let e=BN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(m){const p=HT(m);return p instanceof Qn&&vT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(k){return new Cl(io(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,kh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,T=m.values||[];return new qc(T,p)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const p=!m.before,T=m.values||[];return new qc(T,p)}(n.endAt)),hN(e,s,o,i,l,"F",u,c)}function KN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=io(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=io(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=io(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=io(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(io(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(r=>HT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function QN(t){return VN[t]}function XN(t){return MN[t]}function YN(t){return FN[t]}function so(t){return{fieldPath:t.canonicalString()}}function io(t){return wt.fromServerFormat(t.fieldPath)}function WT(t){return t instanceof et?function(n){if(n.op==="=="){if(k_(n.value))return{unaryFilter:{field:so(n.field),op:"IS_NAN"}};if(x_(n.value))return{unaryFilter:{field:so(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(k_(n.value))return{unaryFilter:{field:so(n.field),op:"IS_NOT_NAN"}};if(x_(n.value))return{unaryFilter:{field:so(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:so(n.field),op:XN(n.op),value:n.value}}}(t):t instanceof Qn?function(n){const r=n.getFilters().map(s=>WT(s));return r.length===1?r[0]:{compositeFilter:{op:YN(n.op),filters:r}}}(t):le(54877,{filter:t})}function JN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,r,s,i=he.min(),o=he.min(),l=It.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new As(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.yt=e}}function eb(t){const e=GN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.Cn=new nb}addToCollectionParentIndex(e,n){return this.Cn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve($s.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve($s.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},GT=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(GT,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new $o(0)}static cr(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="LruGarbageCollector",rb=1048576;function W_([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class sb{constructor(e){this.Ir=e,this.buffer=new lt(W_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();W_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ib{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(H_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ea(n)?ee(H_,"Ignoring IndexedDB error during garbage collection: ",n):await Zo(n)}await this.Vr(3e5)})}}class ob{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(xh.ce);const r=new sb(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve($_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),no()<=ge.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function ab(t,e){return new ob(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.changes=new Fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&nl(r.mutation,s,dn.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=gi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Fa();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=ns();const o=tl(),l=function(){return tl()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof ei)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),nl(d.mutation,c,d.mutation.getFieldMask(),Le.now())):o.set(c.key,dn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new ub(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=tl();let s=new $e((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||dn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const m=(s.get(l.batchId)||_e()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=xT();d.forEach(p=>{if(!i.has(p)){const T=LT(n.get(p),r.get(p));T!==null&&m.set(p,T),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(gi());let l=Il,u=i;return o.next(c=>z.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,_e())).next(d=>({batchId:l,changes:CT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Fa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Fa();return this.indexManager.getCollectionParents(e,i).next(l=>z.forEach(l,u=>{const c=function(m,p){return new ta(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Nt.newInvalidDocument(d)))});let l=Fa();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&nl(d.mutation,c,dn.empty(),Le.now()),Dh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return z.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Er(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:eb(s.bundledQuery),readTime:Er(s.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.overlays=new $e(se.comparator),this.qr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=gi(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=gi(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=gi(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=s)););return z.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PN(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.Qr=new lt(ft.$r),this.Ur=new lt(ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ft(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new se(new Ne([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new se(new Ne([])),r=new ft(n,e),s=new ft(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return se.comparator(e.key,n.key)||ye(e.Yr,n.Yr)}static Kr(e,n){return ye(e.Yr,n.Yr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new lt(ft.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kN(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new ft(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Dm:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(ye);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),z.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new ft(new se(i),0);let l=new lt(ye);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),z.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return z.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ft(n,0),s=this.Zr.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.ri=e,this.docs=function(){return new $e(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=ns();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Nt.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ns();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$P(zP(d),r)<=0||(s.has(d.key)||Dh(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gb(this)}getSize(e){return z.resolve(this.size)}}class gb extends lb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.persistence=e,this.si=new Fi(n=>Vm(n),Mm),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new zm,this.targetCount=0,this.ai=$o.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),z.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new $o(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Pr(n),z.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.ui={},this.overlays={},this.ci=new xh(0),this.li=!1,this.li=!0,this.hi=new fb,this.referenceDelegate=e(this),this.Pi=new yb(this),this.indexManager=new tb,this.remoteDocumentCache=function(s){return new mb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ZN(n),this.Ii=new hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new pb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new _b(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return z.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class _b extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.Ri=new zm,this.Vi=null}static mi(e){return new $m(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,r=>{const s=se.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return z.or([()=>z.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Qc{constructor(e,n){this.persistence=e,this.pi=new Fi(r=>KP(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ab(this,n)}static mi(e,n){return new Qc(e,n)}Ei(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return z.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?z.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),z.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oc(e.data.value)),n}br(e,n,r){return z.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hm(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return BR()?8:qP(Dt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vb;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(no()<=ge.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ro(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(no()<=ge.DEBUG&&ee("QueryEngine","Query:",ro(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(no()<=ge.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ro(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):z.resolve())}ys(e,n){if(D_(n))return z.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=cp(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,cp(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return D_(n)||s.isEqual(he.min())?z.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?z.resolve(null):(no()<=ge.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ro(n)),this.vs(e,o,n,BP(s,Il)).next(l=>l))})}Ds(e,n){let r=new lt(RT(e));return n.forEach((s,i)=>{Dh(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return no()<=ge.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ro(n)),this.ps.getDocumentsMatchingQuery(e,n,$s.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="LocalStore",Eb=3e8;class Tb{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new $e(ye),this.xs=new Fi(i=>Vm(i),Mm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Ib(t,e,n,r){return new Tb(t,e,n,r)}async function QT(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=_e();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Sb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const m=c.batch,p=m.keys();let T=z.resolve();return p.forEach(k=>{T=T.next(()=>d.getEntry(u,k)).next(P=>{const D=c.docVersions.get(k);Se(D!==null,48541),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=_e();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function XT(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Rb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((d,m)=>{const p=s.get(m);if(!p)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m)));let T=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(It.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(m,T),function(P,D,_){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Eb?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,T,d)&&l.push(n.Pi.updateTargetData(i,T))});let u=ns(),c=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Ab(i,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(he.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next(m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return z.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function Ab(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ns();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee(Wm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function Cb(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Dm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xb(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new As(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function mp(t,e,n){const r=de(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ea(o))throw o;ee(Wm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function q_(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const m=de(u),p=m.xs.get(d);return p!==void 0?z.resolve(m.Ms.get(p)):m.Pi.getTargetData(c,d)}(r,o,vr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(l=>(kb(r,fN(e),l),{documents:l,Qs:i})))}function kb(t,e,n){let r=t.Os.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class G_{constructor(){this.activeTargetIds=vN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pb{constructor(){this.Mo=new G_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new G_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="ConnectivityMonitor";class Q_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(K_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(K_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=null;function gp(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="RestConnection",bb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Db{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Hc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=gp(),l=this.zo(e,n.toUriEncodedString());ee(Kd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),d=Rr(c);return this.Jo(e,l,u,r,d).then(m=>(ee(Kd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw jo(Kd,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=bb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class Ob extends Db{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=gp();return new Promise((l,u)=>{const c=new J0;c.setWithCredentials(!0),c.listenOnce(Z0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ic.NO_ERROR:const m=c.getResponseJson();ee(xt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ic.TIMEOUT:ee(xt,`RPC '${e}' ${o} timed out`),u(new Y(j.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const p=c.getStatus();if(ee(xt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const k=T==null?void 0:T.error;if(k&&k.status&&k.message){const P=function(_){const w=_.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(w)>=0?w:j.UNKNOWN}(k.status);u(new Y(P,k.message))}else u(new Y(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new Y(j.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{ee(xt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);ee(xt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,r,15)})}T_(e,n,r){const s=gp(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nT(),l=tT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");ee(xt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const m=o.createWebChannel(d,u);this.I_(m);let p=!1,T=!1;const k=new Lb({Yo:D=>{T?ee(xt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(p||(ee(xt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),ee(xt,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},Zo:()=>m.close()}),P=(D,_,w)=>{D.listen(_,C=>{try{w(C)}catch(O){setTimeout(()=>{throw O},0)}})};return P(m,Ma.EventType.OPEN,()=>{T||(ee(xt,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),P(m,Ma.EventType.CLOSE,()=>{T||(T=!0,ee(xt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(m))}),P(m,Ma.EventType.ERROR,D=>{T||(T=!0,jo(xt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),k.a_(new Y(j.UNAVAILABLE,"The operation could not be completed")))}),P(m,Ma.EventType.MESSAGE,D=>{var _;if(!T){const w=D.data[0];Se(!!w,16349);const C=w,O=(C==null?void 0:C.error)||((_=C[0])==null?void 0:_.error);if(O){ee(xt,`RPC '${e}' stream ${s} received error:`,O);const $=O.status;let H=function(S){const A=Je[S];if(A!==void 0)return MT(A)}($),I=O.message;H===void 0&&(H=j.INTERNAL,I="Unknown error status: "+$+" with message "+O.message),T=!0,k.a_(new Y(H,I)),m.close()}else ee(xt,`RPC '${e}' stream ${s} received:`,w),k.u_(w)}}),P(l,eT.STAT_EVENT,D=>{D.stat===rp.PROXY?ee(xt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===rp.NOPROXY&&ee(xt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){return new jN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="PersistentStream";class JT{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new YT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(X_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(X_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vb extends JT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zN(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?Er(o.readTime):he.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=pp(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=lp(u)?{documents:WN(i,u)}:{query:qN(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=UT(i,o.resumeToken);const c=hp(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Kc(i,o.snapshotVersion.toTimestamp());const c=hp(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=KN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=pp(this.serializer),n.removeTarget=e,this.q_(n)}}class Mb extends JT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=HN(e.writeResults,e.commitTime),r=Er(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=pp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$N(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{}class jb extends Fb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,dp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(j.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,dp(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ub{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ts(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="RemoteStore";class Bb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ji(this)&&(ee(bi,"Restarting streams for network reachability change."),await async function(u){const c=de(u);c.Ea.add(4),await Wl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Fh(c)}(this))})}),this.Ra=new Ub(r,s)}}async function Fh(t){if(ji(t))for(const e of t.da)await e(!0)}async function Wl(t){for(const e of t.da)await e(!1)}function ZT(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Qm(n)?Km(n):na(n).O_()&&Gm(n,e))}function qm(t,e){const n=de(t),r=na(n);n.Ia.delete(e),r.O_()&&eI(n,e),n.Ia.size===0&&(r.O_()?r.L_():ji(n)&&n.Ra.set("Unknown"))}function Gm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}na(t).Y_(e)}function eI(t,e){t.Va.Ue(e),na(t).Z_(e)}function Km(t){t.Va=new ON({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),na(t).start(),t.Ra.ua()}function Qm(t){return ji(t)&&!na(t).x_()&&t.Ia.size>0}function ji(t){return de(t).Ea.size===0}function tI(t){t.Va=void 0}async function zb(t){t.Ra.set("Online")}async function $b(t){t.Ia.forEach((e,n)=>{Gm(t,e)})}async function Hb(t,e){tI(t),Qm(t)?(t.Ra.ha(e),Km(t)):t.Ra.set("Unknown")}async function Wb(t,e,n){if(t.Ra.set("Online"),e instanceof jT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){ee(bi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xc(t,r)}else if(e instanceof uc?t.Va.Ze(e):e instanceof FT?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await XT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(It.EMPTY_BYTE_STRING,d.snapshotVersion)),eI(i,u);const m=new As(d.target,u,c,d.sequenceNumber);Gm(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(bi,"Failed to raise snapshot:",r),await Xc(t,r)}}async function Xc(t,e,n){if(!ea(e))throw e;t.Ea.add(1),await Wl(t),t.Ra.set("Offline"),n||(n=()=>XT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(bi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Fh(t)})}function nI(t,e){return e().catch(n=>Xc(t,n,e))}async function jh(t){const e=de(t),n=Gs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dm;for(;qb(e);)try{const s=await Cb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Gb(e,s)}catch(s){await Xc(e,s)}rI(e)&&sI(e)}function qb(t){return ji(t)&&t.Ta.length<10}function Gb(t,e){t.Ta.push(e);const n=Gs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function rI(t){return ji(t)&&!Gs(t).x_()&&t.Ta.length>0}function sI(t){Gs(t).start()}async function Kb(t){Gs(t).ra()}async function Qb(t){const e=Gs(t);for(const n of t.Ta)e.ea(n.mutations)}async function Xb(t,e,n){const r=t.Ta.shift(),s=jm.from(r,e,n);await nI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await jh(t)}async function Yb(t,e){e&&Gs(t).X_&&await async function(r,s){if(function(o){return bN(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Gs(r).B_(),await nI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await jh(r)}}(t,e),rI(t)&&sI(t)}async function Y_(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee(bi,"RemoteStore received new credentials");const r=ji(n);n.Ea.add(3),await Wl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Fh(n)}async function Jb(t,e){const n=de(t);e?(n.Ea.delete(2),await Fh(n)):e||(n.Ea.add(2),await Wl(n),n.Ra.set("Unknown"))}function na(t){return t.ma||(t.ma=function(n,r,s){const i=de(n);return i.sa(),new Vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:zb.bind(null,t),t_:$b.bind(null,t),r_:Hb.bind(null,t),H_:Wb.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Qm(t)?Km(t):t.Ra.set("Unknown")):(await t.ma.stop(),tI(t))})),t.ma}function Gs(t){return t.fa||(t.fa=function(n,r,s){const i=de(n);return i.sa(),new Mb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Kb.bind(null,t),r_:Yb.bind(null,t),ta:Qb.bind(null,t),na:Xb.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await jh(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(bi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Xm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ym(t,e){if(ts("AsyncQueue",`${e}: ${t}`),ea(t))return new Y(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static emptySet(e){return new Po(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Fa(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.ga=new $e(se.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ho{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ho(e,n,Po.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class e2{constructor(){this.queries=Z_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Z_(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new Y(j.ABORTED,"Firestore shutting down"))}}function Z_(){return new Fi(t=>ST(t),bh)}async function Jm(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Zb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ym(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&eg(n)}async function Zm(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function t2(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&eg(n)}function n2(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function eg(t){t.Ca.forEach(e=>{e.next()})}var yp,ev;(ev=yp||(yp={})).Ma="default",ev.Cache="cache";class tg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.key=e}}class oI{constructor(e){this.key=e}}class r2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=RT(e),this.tu=new Po(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new J_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const p=s.get(d),T=Dh(this.query,m)?m:null,k=!!p&&this.mutatedKeys.has(p.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let D=!1;p&&T?p.data.isEqual(T.data)?k!==P&&(r.track({type:3,doc:T}),D=!0):this.su(p,T)||(r.track({type:2,doc:T}),D=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!p&&T?(r.track({type:0,doc:T}),D=!0):p&&!T&&(r.track({type:1,doc:p}),D=!0,(u||c)&&(l=!0)),D&&(T?(o=o.add(T),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,m)=>function(T,k){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:D})}};return P(T)-P(k)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ho(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new J_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new oI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new iI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ho.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ng="SyncEngine";class s2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class i2{constructor(e){this.key=e,this.hu=!1}}class o2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Fi(l=>ST(l),bh),this.Iu=new Map,this.Eu=new Set,this.du=new $e(se.comparator),this.Au=new Map,this.Ru=new zm,this.Vu={},this.mu=new Map,this.fu=$o.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function a2(t,e,n=!0){const r=dI(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await aI(r,e,n,!0),s}async function l2(t,e){const n=dI(t);await aI(n,e,!0,!1)}async function aI(t,e,n,r){const s=await xb(t.localStore,vr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await u2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ZT(t.remoteStore,s),l}async function u2(t,e,n,r,s){t.pu=(m,p,T)=>async function(P,D,_,w){let C=D.view.ru(_);C.Cs&&(C=await q_(P.localStore,D.query,!1).then(({documents:I})=>D.view.ru(I,C)));const O=w&&w.targetChanges.get(D.targetId),$=w&&w.targetMismatches.get(D.targetId)!=null,H=D.view.applyChanges(C,P.isPrimaryClient,O,$);return nv(P,D.targetId,H.au),H.snapshot}(t,m,p,T);const i=await q_(t.localStore,e,!0),o=new r2(e,i.Qs),l=o.ru(i.documents),u=Hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);nv(t,n,c.au);const d=new s2(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function c2(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!bh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qm(r.remoteStore,s.targetId),_p(r,s.targetId)}).catch(Zo)):(_p(r,s.targetId),await mp(r.localStore,s.targetId,!0))}async function h2(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qm(n.remoteStore,r.targetId))}async function d2(t,e,n){const r=v2(t);try{const s=await function(o,l){const u=de(o),c=Le.now(),d=l.reduce((T,k)=>T.add(k.key),_e());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=ns(),P=_e();return u.Ns.getEntries(T,d).next(D=>{k=D,k.forEach((_,w)=>{w.isValidDocument()||(P=P.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,k)).next(D=>{m=D;const _=[];for(const w of l){const C=CN(w,m.get(w.key).overlayedDocument);C!=null&&_.push(new ei(w.key,C,gT(C.value.mapValue),wr.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,_,l)}).next(D=>{p=D;const _=D.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(T,D.batchId,_)})}).then(()=>({batchId:p.batchId,changes:CT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new $e(ye)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await ql(r,s.changes),await jh(r.remoteStore)}catch(s){const i=Ym(s,"Failed to persist write");n.reject(i)}}async function lI(t,e){const n=de(t);try{const r=await Rb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await ql(n,r,e)}catch(r){await Zo(r)}}function tv(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=de(o);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const p of m.Sa)p.va(l)&&(c=!0)}),c&&eg(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f2(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new $e(se.comparator);o=o.insert(i,Nt.newNoDocument(i,he.min()));const l=_e().add(i),u=new Vh(he.min(),new Map,new $e(ye),o,l);await lI(r,u),r.du=r.du.remove(i),r.Au.delete(e),rg(r)}else await mp(r.localStore,e,!1).then(()=>_p(r,e,n)).catch(Zo)}async function p2(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Sb(n.localStore,e);cI(n,r,null),uI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ql(n,s)}catch(s){await Zo(s)}}async function m2(t,e,n){const r=de(t);try{const s=await function(o,l){const u=de(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Se(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);cI(r,e,n),uI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ql(r,s)}catch(s){await Zo(s)}}function uI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function cI(t,e,n){const r=de(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function _p(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||hI(t,r)})}function hI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(qm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),rg(t))}function nv(t,e,n){for(const r of n)r instanceof iI?(t.Ru.addReference(r.key,e),g2(t,r)):r instanceof oI?(ee(ng,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||hI(t,r.key)):le(19791,{wu:r})}function g2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(ng,"New document in limbo: "+n),t.Eu.add(r),rg(t))}function rg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se(Ne.fromString(e)),r=t.fu.next();t.Au.set(r,new i2(n)),t.du=t.du.insert(n,r),ZT(t.remoteStore,new As(vr(Nh(n.path)),r,"TargetPurposeLimboResolution",xh.ce))}}async function ql(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=Hm.As(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const d=de(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>z.forEach(c,p=>z.forEach(p.Es,T=>d.persistence.referenceDelegate.addReference(m,p.targetId,T)).next(()=>z.forEach(p.ds,T=>d.persistence.referenceDelegate.removeReference(m,p.targetId,T)))))}catch(m){if(!ea(m))throw m;ee(Wm,"Failed to update sequence numbers: "+m)}for(const m of c){const p=m.targetId;if(!m.fromCache){const T=d.Ms.get(p),k=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(k);d.Ms=d.Ms.insert(p,P)}}}(r.localStore,i))}async function y2(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee(ng,"User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new Y(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ql(n,r.Ls)}}function _2(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function dI(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f2.bind(null,e),e.Pu.H_=t2.bind(null,e.eventManager),e.Pu.yu=n2.bind(null,e.eventManager),e}function v2(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=p2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m2.bind(null,e),e}class Yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Ib(this.persistence,new wb,e.initialUser,this.serializer)}Cu(e){return new KT($m.mi,this.serializer)}Du(e){return new Pb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yc.provider={build:()=>new Yc};class w2 extends Yc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof Qc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ib(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new KT(r=>Qc.mi(r,n),this.serializer)}}class vp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y2.bind(null,this.syncEngine),await Jb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e2}()}createDatastore(e){const n=Mh(e.databaseInfo.databaseId),r=function(i){return new Ob(i)}(e.databaseInfo);return function(i,o,l,u){return new jb(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Bb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>tv(this.syncEngine,n,0),function(){return Q_.v()?new Q_:new Nb}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,d){const m=new o2(s,i,o,l,u,c);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);ee(bi,"RemoteStore shutting down."),i.Ea.add(5),await Wl(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}vp.provider={build:()=>new vp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="FirestoreClient";class E2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=bm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Ks,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Ks,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ym(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Ks,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await QT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T2(t);ee(Ks,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Y_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Y_(e.remoteStore,s)),t._onlineComponents=e}async function T2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Ks,"Using user provided OfflineComponentProvider");try{await Xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;jo("Error using user provided cache. Falling back to memory cache: "+n),await Xd(t,new Yc)}}else ee(Ks,"Using default OfflineComponentProvider"),await Xd(t,new w2(void 0));return t._offlineComponents}async function fI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Ks,"Using user provided OnlineComponentProvider"),await rv(t,t._uninitializedComponentsProvider._online)):(ee(Ks,"Using default OnlineComponentProvider"),await rv(t,new vp))),t._onlineComponents}function I2(t){return fI(t).then(e=>e.syncEngine)}async function Jc(t){const e=await fI(t),n=e.eventManager;return n.onListen=a2.bind(null,e.syncEngine),n.onUnlisten=c2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=l2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=h2.bind(null,e.syncEngine),n}function S2(t,e,n={}){const r=new Gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new sg({next:p=>{d.Nu(),o.enqueueAndForget(()=>Zm(i,m));const T=p.docs.has(l);!T&&p.fromCache?c.reject(new Y(j.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&p.fromCache&&u&&u.source==="server"?c.reject(new Y(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new tg(Nh(l.path),d,{includeMetadataChanges:!0,qa:!0});return Jm(i,m)}(await Jc(t),t.asyncQueue,e,n,r)),r.promise}function R2(t,e,n={}){const r=new Gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new sg({next:p=>{d.Nu(),o.enqueueAndForget(()=>Zm(i,m)),p.fromCache&&u.source==="server"?c.reject(new Y(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new tg(l,d,{includeMetadataChanges:!0,qa:!0});return Jm(i,m)}(await Jc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firestore.googleapis.com",iv=!0;class ov{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mI,this.ssl=iv}else this.host=e.host,this.ssl=e.ssl??iv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=GT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rb)throw new Y(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ov({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ov(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PP;switch(r.type){case"firstParty":return new LP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sv.get(n);r&&(ee("ComponentProvider","Removing Datastore"),sv.delete(n),r.terminate())}(this),Promise.resolve()}}function A2(t,e,n,r={}){var c;t=Pn(t,Uh);const s=Rr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(wh(`https://${l}`),Eh("Firestore",!0)),i.host!==mI&&i.host!==l&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!xi(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=kt.MOCK_USER;else{d=JE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Y(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new kt(p)}t._authCredentials=new NP(new sT(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(zl(n,Ke._jsonSchema))return new Ke(e,r||null,new se(Ne.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:tt("string",Ke._jsonSchemaVersion),referencePath:tt("string")};class js extends ti{constructor(e,n,r){super(e,n,Nh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new se(e))}withConverter(e){return new js(this.firestore,e,this._path)}}function gI(t,e,...n){if(t=Ve(t),iT("collection","path",e),t instanceof Uh){const r=Ne.fromString(e,...n);return v_(r),new js(t,null,r)}{if(!(t instanceof Ke||t instanceof js))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return v_(r),new js(t.firestore,null,r)}}function Bh(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=bm.newId()),iT("doc","path",e),t instanceof Uh){const r=Ne.fromString(e,...n);return __(r),new Ke(t,null,new se(r))}{if(!(t instanceof Ke||t instanceof js))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return __(r),new Ke(t.firestore,t instanceof js?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="AsyncQueue";class lv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new YT(this,"async_queue_retry"),this._c=()=>{const r=Qd();r&&ee(av,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ea(e))throw e;ee(av,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ts("INTERNAL UNHANDLED ERROR: ",uv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Xm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:uv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function uv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Di extends Uh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new lv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lv(e),this._firestoreClient=void 0,await e}}}function zh(t,e){const n=typeof t=="object"?t:Th(),r=typeof t=="string"?t:Hc,s=Fl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ym("firestore");i&&A2(s,...i)}return s}function $h(t){if(t._terminated)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||C2(t),t._firestoreClient}function C2(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,d){return new YP(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,pI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new E2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(It.fromBase64String(e))}catch(n){throw new Y(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zl(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:tt("string",An._jsonSchemaVersion),bytes:tt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(zl(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:tt("string",Tr._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zl(e,Ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ir(e.vectorValues);throw new Y(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ir._jsonSchemaVersion="firestore/vectorValue/1.0",Ir._jsonSchema={type:tt("string",Ir._jsonSchemaVersion),vectorValues:tt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=/^__.*__$/;class k2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new $l(e,this.data,n,this.fieldTransforms)}}class yI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ei(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _I(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class ig{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ig({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Zc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(_I(this.Ac)&&x2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class P2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mh(e)}Cc(e,n,r,s=!1){return new ig({Ac:e,methodName:n,Dc:r,path:wt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function og(t){const e=t._freezeSettings(),n=Mh(t._databaseId);return new P2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function N2(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);lg("Data must be an object, but it was:",o,r);const l=vI(r,o);let u,c;if(i.merge)u=new dn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const p=wp(e,m,n);if(!o.contains(p))throw new Y(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);EI(d,p)||d.push(p)}u=new dn(d),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new k2(new Xt(l),u,c)}class qh extends Wh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qh}}class ag extends Wh{_toFieldTransform(e){return new IN(e.path,new xl)}isEqual(e){return e instanceof ag}}function b2(t,e,n,r){const s=t.Cc(1,e,n);lg("Data must be an object, but it was:",s,r);const i=[],o=Xt.empty();Zs(r,(u,c)=>{const d=ug(e,u,n);c=Ve(c);const m=s.yc(d);if(c instanceof qh)i.push(d);else{const p=Gl(c,m);p!=null&&(i.push(d),o.set(d,p))}});const l=new dn(i);return new yI(o,l,s.fieldTransforms)}function D2(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[wp(e,r,n)],u=[s];if(i.length%2!=0)throw new Y(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(wp(e,i[p])),u.push(i[p+1]);const c=[],d=Xt.empty();for(let p=l.length-1;p>=0;--p)if(!EI(c,l[p])){const T=l[p];let k=u[p];k=Ve(k);const P=o.yc(T);if(k instanceof qh)c.push(T);else{const D=Gl(k,P);D!=null&&(c.push(T),d.set(T,D))}}const m=new dn(c);return new yI(d,m,o.fieldTransforms)}function L2(t,e,n,r=!1){return Gl(n,t.Cc(r?4:3,e))}function Gl(t,e){if(wI(t=Ve(t)))return lg("Unsupported field value:",e,t),vI(t,e);if(t instanceof Wh)return function(r,s){if(!_I(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Gl(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:Kc(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kc(s.serializer,i)}}if(r instanceof Tr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:UT(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ir)return function(o,l){return{mapValue:{fields:{[pT]:{stringValue:mT},[Wc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Fm(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ch(r)}`)}(t,e)}function vI(t,e){const n={};return lT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(r,s)=>{const i=Gl(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Tr||t instanceof An||t instanceof Ke||t instanceof Wh||t instanceof Ir)}function lg(t,e,n){if(!wI(n)||!oT(n)){const r=Ch(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function wp(t,e,n){if((e=Ve(e))instanceof Hh)return e._internalPath;if(typeof e=="string")return ug(t,e);throw Zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const O2=new RegExp("[~\\*/\\[\\]]");function ug(t,e,n){if(e.search(O2)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hh(...e.split("."))._internalPath}catch{throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Y(j.INVALID_ARGUMENT,l+t+u)}function EI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class V2 extends TI{data(){return super.data()}}function Gh(t,e){return typeof e=="string"?ug(t,e):e instanceof Hh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cg{}class SI extends cg{}function RI(t,e,...n){let r=[];e instanceof cg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof hg).length,l=i.filter(u=>u instanceof Kh).length;if(o>1||o>0&&l>0)throw new Y(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Kh extends SI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){const n=this._parse(e);return AI(e._query,n),new ti(e.firestore,e.converter,up(e._query,n))}_parse(e){const n=og(e.firestore);return function(i,o,l,u,c,d,m){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){dv(m,d);const k=[];for(const P of m)k.push(hv(u,i,P));p={arrayValue:{values:k}}}else p=hv(u,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||dv(m,d),p=L2(l,o,m,d==="in"||d==="not-in");return et.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function M2(t,e,n){const r=e,s=Gh("where",t);return Kh._create(s,r,n)}class hg extends cg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)AI(o,u),o=up(o,u)}(e._query,n),new ti(e.firestore,e.converter,up(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dg extends SI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dg(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cl(i,o)}(e._query,this._field,this._direction);return new ti(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ta(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function F2(t,e="asc"){const n=e,r=Gh("orderBy",t);return dg._create(r,n)}function hv(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new Y(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IT(e)&&n.indexOf("/")!==-1)throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!se.isDocumentKey(r))throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return C_(t,new se(r))}if(n instanceof Ke)return C_(t,n._key);throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ch(n)}.`)}function dv(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AI(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class j2{convertValue(e,n="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Wc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Qe(o.doubleValue));return new Ir(n)}convertGeoPoint(e){return new Tr(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ph(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const n=Hs(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Se(qT(r),9688,{name:e});const s=new Rl(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||ts(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends TI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:tt("string",wi._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class cc extends wi{data(e={}){return super.data(e)}}class Ei{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ua(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cc(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new cc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ua(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new cc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ua(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:B2(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function B2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t){t=Pn(t,Ke);const e=Pn(t.firestore,Di);return S2($h(e),t._key).then(n=>kI(e,t,n))}Ei._jsonSchemaVersion="firestore/querySnapshot/1.0",Ei._jsonSchema={type:tt("string",Ei._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};class fg extends j2{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function $2(t){t=Pn(t,ti);const e=Pn(t.firestore,Di),n=$h(e),r=new fg(e);return II(t._query),R2(n,t._query).then(s=>new Ei(e,r,t,s))}function CI(t,e,n){t=Pn(t,Ke);const r=Pn(t.firestore,Di),s=U2(t.converter,e,n);return xI(r,[N2(og(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,wr.none())])}function H2(t,e,n,...r){t=Pn(t,Ke);const s=Pn(t.firestore,Di),i=og(s);let o;return o=typeof(e=Ve(e))=="string"||e instanceof Hh?D2(i,"updateDoc",t._key,e,n,r):b2(i,"updateDoc",t._key,e),xI(s,[o.toMutation(t._key,wr.exists(!0))])}function W2(t,...e){var u,c,d;t=Ve(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||cv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(cv(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(c=m.error)==null?void 0:c.bind(m),e[r+2]=(d=m.complete)==null?void 0:d.bind(m)}let i,o,l;if(t instanceof Ke)o=Pn(t.firestore,Di),l=Nh(t._key.path),i={next:m=>{e[r]&&e[r](kI(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Pn(t,ti);o=Pn(m.firestore,Di),l=m._query;const p=new fg(o);i={next:T=>{e[r]&&e[r](new Ei(o,p,m,T))},error:e[r+1],complete:e[r+2]},II(t._query)}return function(p,T,k,P){const D=new sg(P),_=new tg(T,D,k);return p.asyncQueue.enqueueAndForget(async()=>Jm(await Jc(p),_)),()=>{D.Nu(),p.asyncQueue.enqueueAndForget(async()=>Zm(await Jc(p),_))}}($h(o),l,s,i)}function xI(t,e){return function(r,s){const i=new Gr;return r.asyncQueue.enqueueAndForget(async()=>d2(await I2(r),s,i)),i.promise}($h(t),e)}function kI(t,e,n){const r=n.docs.get(e._key),s=new fg(t);return new wi(t,s,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}function eh(){return new ag("serverTimestamp")}(function(e,n=!0){(function(s){Jo=s})(Vi),zs(new Jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Di(new bP(r.getProvider("auth-internal")),new OP(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(c.options.projectId,d)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),kn(p_,m_,e),kn(p_,m_,"esm2020")})();const q2={apiKey:"AIzaSyAd4nxf5zbhxnjLcWcFu06GDOYJaGSSyXE",authDomain:"legends-finder-65557.firebaseapp.com",projectId:"legends-finder-65557",storageBucket:"legends-finder-65557.firebasestorage.app",messagingSenderId:"567906474033",appId:"1:567906474033:web:d73b78dade856c24d8dd10",measurementId:"G-EGZZ1TY6TE"},Qh=t0(q2),Kl=j0(Qh);X0(Qh);const PI=zh(Qh),fv="lf_device_id";function NI(){if(typeof window>"u")return"server";let t=localStorage.getItem(fv);return t||("randomUUID"in crypto?t=crypto.randomUUID():t=Math.random().toString(36).slice(2),localStorage.setItem(fv,t)),t}async function G2(t){const e=zh(),n=NI(),r=Bh(e,"sessions",t.uid);await CI(r,{uid:t.uid,deviceId:n,updatedAt:eh()},{merge:!0})}function K2(t,e){const n=zh(),r=NI(),s=Bh(n,"sessions",t.uid);let i=!1;const o=setInterval(async()=>{if(!i)try{const l=await z2(s);if(!l.exists())return;const c=l.data().deviceId;c&&c!==r&&(i=!0,clearInterval(o),e())}catch(l){console.error("session watcher error",l)}},3*1e3);return()=>{i=!0,clearInterval(o)}}function bI(){const[t,e]=L.useState(null),[n,r]=L.useState(!1);return L.useEffect(()=>{const s=C0(Kl,i=>{e(i),r(!0)});return()=>s()},[]),{user:t,ready:n}}function Q2(t){const e=t.trim();return!e||e.includes("@")?e:e+"@gmail.com"}function pv({onBlocked:t}){const[e,n]=L.useState(""),[r,s]=L.useState(""),[i,o]=L.useState(""),l=async()=>{var u,c;o(""),t==null||t("");try{const d=Q2(e);await sx(Kl,d,r)}catch(d){const m=(u=d==null?void 0:d.message)!=null&&u.includes("auth/invalid-credential")||(c=d==null?void 0:d.message)!=null&&c.includes("auth/invalid-email")?"IDまたはパスワードが違います":(d==null?void 0:d.message)||"ログインに失敗しました";o(m)}};return g.jsxs("div",{style:{maxWidth:360,margin:"40px auto",padding:16,border:"1px solid #e5e7eb",borderRadius:8},children:[g.jsx("h2",{style:{marginTop:0},children:"ログイン"}),g.jsxs("div",{style:{display:"grid",gap:8},children:[g.jsx("input",{placeholder:"ログインID",value:e,onChange:u=>n(u.target.value),style:{height:36,padding:"0 8px",border:"1px solid #d1d5db",borderRadius:6}}),g.jsx("input",{placeholder:"パスワード",type:"password",value:r,onChange:u=>s(u.target.value),style:{height:36,padding:"0 8px",border:"1px solid #d1d5db",borderRadius:6}}),i&&g.jsx("div",{style:{color:"#EF4444",fontSize:12},children:i}),g.jsx("button",{onClick:l,className:"btn btn-blue",children:"ログイン"})]})]})}function X2(){const t=async()=>{await x0(Kl)};return g.jsx("button",{className:"btn btn-gray",onClick:t,children:"サインアウト"})}function DI(t){const[e,n]=L.useState(!1),[r,s]=L.useState(!0);return L.useEffect(()=>{let i=null,o=!1;return t?(n(!0),s(!0),(async()=>{try{if(await G2(t),o)return;i=K2(t,async()=>{alert("他の端末でログインされました。この端末はログアウトします。"),s(!1),n(!1),await x0(Kl)}),n(!1)}catch(l){console.error("useSessionGuard error",l),n(!1),s(!0)}})(),()=>{o=!0,i&&(i(),i=null)}):(n(!1),s(!0),i&&(i(),i=null),()=>{})},[t]),{checking:e,ok:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="type.googleapis.com/google.protobuf.Int64Value",J2="type.googleapis.com/google.protobuf.UInt64Value";function LI(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function th(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>th(e));if(typeof t=="function"||typeof t=="object")return LI(t,e=>th(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Wo(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Y2:case J2:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Wo(e)):typeof t=="function"||typeof t=="object"?LI(t,e=>Wo(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jt extends Xn{constructor(e,n,r){super(`${pg}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Jt.prototype)}}function Z2(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function nh(t,e){let n=Z2(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!mv[o])return new Jt("internal","internal");n=mv[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Wo(s))}}catch{}return n==="ok"?null:new Jt(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,un(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="us-central1",tD=/^data: (.*?)(?:\n|$)/;function nD(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Jt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class rD{constructor(e,n,r,s,i=Ep,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new eD(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Ep}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function sD(t,e,n){const r=Rr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(wh(t.emulatorOrigin+"/backends"),Eh("Functions",!0))}function iD(t,e,n){const r=s=>aD(t,e,s,{});return r.stream=(s,i)=>uD(t,e,s,i),r}function OI(t){return t.emulatorOrigin&&Rr(t.emulatorOrigin)?"include":void 0}async function oD(t,e,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:OI(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function VI(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function aD(t,e,n,r){const s=t._url(e);return lD(t,s,n,r)}async function lD(t,e,n,r){n=th(n);const s={data:n},i=await VI(t,r),o=r.timeout||7e4,l=nD(o),u=await Promise.race([oD(e,s,i,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Jt("cancelled","Firebase Functions instance was deleted.");const c=nh(u.status,u.json);if(c)throw c;if(!u.json)throw new Jt("internal","Response is not valid JSON object.");let d=u.json.data;if(typeof d>"u"&&(d=u.json.result),typeof d>"u")throw new Jt("internal","Response is missing data field.");return{data:Wo(d)}}function uD(t,e,n,r){const s=t._url(e);return cD(t,s,n,r||{})}async function cD(t,e,n,r){var p;n=th(n);const s={data:n},i=await VI(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:OI(t)})}catch(T){if(T instanceof Error&&T.name==="AbortError"){const P=new Jt("cancelled","Request was cancelled.");return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}const k=nh(0,null);return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}let l,u;const c=new Promise((T,k)=>{l=T,u=k});(p=r==null?void 0:r.signal)==null||p.addEventListener("abort",()=>{const T=new Jt("cancelled","Request was cancelled.");u(T)});const d=o.body.getReader(),m=hD(d,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const T=m.getReader();return{async next(){const{value:k,done:P}=await T.read();return{value:k,done:P}},async return(){return await T.cancel(),{done:!0,value:void 0}}}}},data:c}}function hD(t,e,n,r){const s=(o,l)=>{const u=o.match(tD);if(!u)return;const c=u[1];try{const d=JSON.parse(c);if("result"in d){e(Wo(d.result));return}if("message"in d){l.enqueue(Wo(d.message));return}if("error"in d){const m=nh(0,d);l.error(m),n(m);return}}catch(d){if(d instanceof Jt){l.error(d),n(d);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const c=new Jt("cancelled","Request was cancelled");return o.error(c),n(c),Promise.resolve()}try{const{value:c,done:d}=await t.read();if(d){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const p=new Jt("cancelled","Request was cancelled");o.error(p),n(p),await t.cancel();return}l+=i.decode(c,{stream:!0});const m=l.split(`
`);l=m.pop()||"";for(const p of m)p.trim()&&s(p.trim(),o);return u()}catch(c){const d=c instanceof Jt?c:nh(0,null);o.error(d),n(d)}}},cancel(){return t.cancel()}})}const gv="@firebase/functions",yv="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="auth-internal",fD="app-check-internal",pD="messaging-internal";function mD(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(dD),o=n.getProvider(pD),l=n.getProvider(fD);return new rD(s,i,o,l,r)};zs(new Jr(pg,e,"PUBLIC").setMultipleInstances(!0)),kn(gv,yv,t),kn(gv,yv,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t=Th(),e=Ep){const r=Fl(Ve(t),pg).getImmediate({identifier:e}),s=ym("functions");return s&&yD(r,...s),r}function yD(t,e,n){sD(Ve(t),e,n)}function _D(t,e,n){return iD(Ve(t),e)}mD();function vD(){const[t,e]=L.useState("CX5"),[n,r]=L.useState(null),[s,i]=L.useState(null),[o,l]=L.useState(""),[u,c]=L.useState(!1),d=async()=>{if(!t||!n||!s){l("セットIDと2つのCSVを選んでください");return}try{c(!0),l("アップロード中...");const m=X0(),p=t.trim(),T=`cx_sets/${p}/cards.csv`,k=`cx_sets/${p}/positions.csv`;await h_(d_(m,T),n),await h_(d_(m,k),s);const P=Bh(PI,"cx_sets",p);await CI(P,{title:p,setId:p,cardsPath:T,positionsPath:k,enabled:!0,updatedAt:eh(),createdAt:eh()},{merge:!0}),l("アップロード完了！")}catch(m){console.error(m),l("アップロードに失敗しました: "+((m==null?void 0:m.message)||""))}finally{c(!1)}};return g.jsxs("div",{style:{maxWidth:480,margin:"20px auto",padding:16,border:"1px solid #e5e7eb",borderRadius:8},children:[g.jsx("h2",{children:"弾データ CSV アップロード"}),g.jsxs("div",{style:{marginBottom:8},children:[g.jsx("label",{children:"セットID（例: CX5）"}),g.jsx("input",{value:t,onChange:m=>e(m.target.value),style:{width:"100%",padding:4}})]}),g.jsxs("div",{style:{marginBottom:8},children:[g.jsx("label",{children:"cards.csv（カード一覧）"}),g.jsx("input",{type:"file",accept:".csv",onChange:m=>{var p;return r(((p=m.target.files)==null?void 0:p[0])??null)}})]}),g.jsxs("div",{style:{marginBottom:8},children:[g.jsx("label",{children:"positions.csv（配列表）"}),g.jsx("input",{type:"file",accept:".csv",onChange:m=>{var p;return i(((p=m.target.files)==null?void 0:p[0])??null)}})]}),g.jsx("button",{onClick:d,disabled:u,className:"btn btn-blue",children:u?"アップロード中...":"アップロード"}),o&&g.jsx("div",{style:{marginTop:8,fontSize:12},children:o})]})}function wD(t){if(!t)return"-";const e=t.toDate(),n=e.getFullYear(),r=`${e.getMonth()+1}`.padStart(2,"0"),s=`${e.getDate()}`.padStart(2,"0"),i=`${e.getHours()}`.padStart(2,"0"),o=`${e.getMinutes()}`.padStart(2,"0");return`${n}/${r}/${s} ${i}:${o}`}function ED(){var m,p;const t=zh(),n=((p=(m=j0().currentUser)==null?void 0:m.email)==null?void 0:p.toLowerCase())??null,[r,s]=L.useState([]),[i,o]=L.useState(!0),[l,u]=L.useState("");L.useEffect(()=>{const T=RI(gI(t,"users"),F2("createdAt","desc")),k=W2(T,P=>{const D=[];P.forEach(_=>{const w=_.data();D.push({id:_.id,email:w.email,name:w.name,createdBy:w.createdBy,createdAt:w.createdAt??null,enabled:w.enabled??!0})}),s(D),o(!1)});return()=>k()},[t]);const c=L.useMemo(()=>{const T=l.trim().toLowerCase(),k=n&&T===n?"":T;return k?r.filter(P=>[P.email??"",P.name??"",P.id].some(D=>D.toLowerCase().includes(k))):r},[r,l,n]),d=async T=>{console.log("clicked:",T.id,"enabled(before):",T.enabled);try{const k=Bh(t,"users",T.id);await H2(k,{enabled:!T.enabled,updatedAt:eh()})}catch(k){alert("更新に失敗しました。通信状況をご確認ください。"),console.error(k)}};return g.jsxs("div",{style:{maxWidth:640,margin:"24px auto",padding:"0 12px"},children:[g.jsx("h2",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:"ユーザー一覧"}),g.jsx("input",{type:"search",autoComplete:"off",name:"user-filter",placeholder:"メール / 名前 / UID で絞り込み",value:l,onChange:T=>u(T.target.value),style:{width:"100%",padding:"10px 12px",border:"1px solid #e5e7eb",borderRadius:8,marginBottom:10}}),i?g.jsx("div",{style:{padding:12},children:"読み込み中…"}):c.length===0?g.jsx("div",{style:{padding:12,color:"#6b7280"},children:"ユーザーがいません。"}):g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:8},children:c.map(T=>g.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:12,display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center",gap:8},children:[g.jsxs("div",{style:{minWidth:0},children:[g.jsxs("div",{style:{fontWeight:600},children:[T.email??"(no email)"," ",!T.enabled&&g.jsx("span",{style:{fontSize:10,color:"#b45309",border:"1px solid #f59e0b",borderRadius:9999,padding:"2px 6px",marginLeft:6,background:"#fffbeb"},children:"無効"})]}),T.name&&g.jsx("div",{style:{color:"#6b7280",fontSize:12},children:T.name}),g.jsxs("div",{style:{color:"#9ca3af",fontSize:12},children:["UID: ",T.id]}),g.jsxs("div",{style:{color:"#9ca3af",fontSize:12},children:["作成: ",wD(T.createdAt)]})]}),g.jsx("button",{type:"button",onClick:k=>{k.preventDefault(),k.stopPropagation(),d(T)},style:{padding:"8px 12px",borderRadius:9999,border:"1px solid #d1d5db",background:T.enabled?"#10b981":"#ef4444",color:"white",fontSize:12,whiteSpace:"nowrap",cursor:"pointer"},children:T.enabled?"無効にする":"有効にする"})]},T.id))})]})}const TD=[],ID=["yuutodayo222@gmail.com","mikaeru222@gmail.com"],SD=gD(Qh,"asia-northeast1"),RD=_D(SD,"adminCreateUser");function AD(){const{user:t,ready:e}=bI(),{checking:n,ok:r}=DI(t),[s,i]=L.useState(""),[o,l]=L.useState(""),[u,c]=L.useState(""),[d,m]=L.useState(!1),[p,T]=L.useState("");if(!e||n)return g.jsx("div",{style:{padding:16},children:"認証チェック中..."});if(!t||!r)return g.jsx("div",{style:{padding:16},children:"ログインしてください。"});if(!(t.uid&&TD.includes(t.uid)||t.email&&ID.includes(t.email)))return g.jsx("div",{style:{padding:16},children:"権限がありません。"});const P=()=>{const _=window.location.pathname.replace(/\/admin\/?$/,""),w=_.endsWith("/")?_:_+"/";window.location.pathname=w||"/"},D=async()=>{if(!s||!o){T("メールとパスワードは必須です。");return}try{m(!0),T("作成中…");const _=await RD({email:s,password:o,displayName:u}),{uid:w}=_.data??{};T(`作成成功！UID: ${w}`),i(""),l(""),c("")}catch(_){T(`作成失敗: ${(_==null?void 0:_.message)||(_==null?void 0:_.code)||"unknown error"}`),console.error(_)}finally{m(!1)}};return g.jsxs("div",{style:{paddingBottom:32},children:[g.jsx("h1",{style:{textAlign:"center",marginTop:16},children:"管理画面"}),g.jsx("div",{style:{maxWidth:420,margin:"8px auto 16px",padding:"0 16px",textAlign:"right"},children:g.jsx("button",{onClick:P,style:{padding:"4px 12px",borderRadius:9999,border:"1px solid #9ca3af",background:"#ffffff",color:"#4b5563",fontSize:12,cursor:"pointer"},children:"検索ツールへ戻る"})}),g.jsxs("div",{style:{maxWidth:420,margin:"16px auto",padding:16,border:"1px solid #e5e7eb",borderRadius:8},children:[g.jsx("h3",{children:"ユーザー追加（管理者用）"}),g.jsxs("div",{style:{marginTop:8},children:[g.jsx("label",{children:"メールアドレス"}),g.jsx("input",{type:"email",value:s,onChange:_=>i(_.target.value),placeholder:"user@example.com",style:{width:"100%",padding:8,marginTop:4}})]}),g.jsxs("div",{style:{marginTop:8},children:[g.jsx("label",{children:"パスワード"}),g.jsx("input",{type:"password",value:o,onChange:_=>l(_.target.value),placeholder:"8文字以上",style:{width:"100%",padding:8,marginTop:4}})]}),g.jsxs("div",{style:{marginTop:8},children:[g.jsx("label",{children:"任意（名前）"}),g.jsx("input",{value:u,onChange:_=>c(_.target.value),placeholder:"山田 太郎 など",style:{width:"100%",padding:8,marginTop:4}})]}),g.jsx("button",{onClick:D,disabled:d,style:{width:"100%",marginTop:12,padding:10,background:"#2563eb",color:"#fff",borderRadius:6,border:"none",cursor:"pointer"},children:d?"ユーザー作成中…":"ユーザー作成"}),p&&g.jsx("div",{style:{marginTop:8,fontSize:12,color:"#374151"},children:p})]}),g.jsx(vD,{}),g.jsx(ED,{})]})}function CD(){const[t,e]=L.useState([]),[n,r]=L.useState(!0),[s,i]=L.useState(null);return L.useEffect(()=>{async function o(){try{const l=gI(PI,"cx_sets"),u=RI(l,M2("enabled","==",!0)),c=await $2(u),d=[];c.forEach(m=>{const p=m.data();d.push({id:m.id,setId:String(p.setId??m.id),title:String(p.title??""),cardsPath:String(p.cardsPath??""),positionsPath:String(p.positionsPath??""),enabled:!!(p.enabled??!1)})}),console.log("DEBUG useCxSets list:",d),e(d)}catch(l){console.error("useCxSets error:",l),i(l)}finally{r(!1)}}o()},[]),{sets:t,loading:n,error:s}}const xD=["mikaeru222@gmail.com","yuutodayo222@gmail.com"];function kD(){const[t,e]=L.useState(null),[n,r]=L.useState(!0),[s,i]=L.useState(!1);return L.useEffect(()=>{const o=C0(Kl,l=>{e(l),i(!!l&&xD.includes(l.email??"")),r(!1)});return()=>o()},[]),{user:t,loading:n,isAdmin:s}}const PD="https://firebasestorage.googleapis.com/v0/b/legends-finder-65557.firebasestorage.app/o";function cr(t){var e;if(t.startsWith("http://")||t.startsWith("https://"))return t;if(t.startsWith("cx_sets/"))return`${PD}/${encodeURIComponent(t)}?alt=media`;try{const n="/",r=typeof n=="string"&&n.length?n:"/",s=typeof window<"u"&&((e=window.location)!=null&&e.origin)?window.location.origin:"http://localhost",i=r.startsWith("/")?r:"/"+r;return s.replace(/\/+$/,"")+i+String(t).replace(/^\/+/,"")}catch{return"/"+String(t).replace(/^\/+/,"")}}const Ft=86,jr=t=>{const e=String(t).toUpperCase(),n=e.match(/CX[-_]?(\d+)/i);return n?`CX${n[1]}`:e},Tp=new Map,zu=t=>{const e=jr(t);return Tp.get(e)||Tp.get("COMMON")||{rarity:new Map,name:new Map,specialP:new Set}},Pa=(t,e)=>{Tp.set(jr(t),e)},ND=cr("cards.cx3.csv"),_v=4,ps="#1677FF",Yd=(t,e)=>{const n=it(String(t)).toUpperCase(),r=Ti(e||"");if(/^\d+P$/.test(n)){if(r==="LR")return zn("LR★");if(r==="SR")return zn("SR★");if(r==="CP")return zn("CP★")}return Br.has(n)?zn("LR★"):r?zn(r):/^\d+P$/.test(n)?zn("SR★"):zn("N")},Jd=(t,e)=>{const n=it(String(t)).toUpperCase();if(Br.has(n))return!0;const r=Ti(e||"");return r!==""&&r!=="N"},Ti=t=>{const n=it(String(t||"")).toUpperCase().trim().replace(/\s+/g,"").replace(/_/g,"");return n==="LR★"||n==="LRP"?"LR★":n==="SR★"||n==="SRP"||n==="PA"?"SR★":n==="CP★"||n==="CPP"?"CP★":n==="LR"||n==="SR"||n==="CP"||n==="R"?n:n==="N"||n==="NORMAL"||n==="NORM"||n==="0"?"N":n},vv={"①":1,"②":2,"③":3,"④":4,"⑤":5,"⑥":6,"⑦":7,"⑧":8,"⑨":9,"⑩":10,"⑪":11,"⑫":12},wv=t=>{if(t==null)return NaN;const e=String(t).trim();if(e in vv)return vv[e];const r=it(e).replace(/[()（）［］\[\]\s]/g,"").match(/\d+/);return r?parseInt(r[0],10):NaN},bD=t=>{const e=String(t??"").trim();return it(e).toUpperCase().startsWith("R")||e.includes("右")?"R":"L"};function Ev(t){const e={L:{},R:{}};let n=0;for(const r of t){const s=bD(r.cyl??r.シリンダー??r.cyl),i=wv(r.col??r.列??r.col),o=wv(r.row??r.行??r.row);!i||!o||(e[s][i]||(e[s][i]=[]),e[s][i].push({...r,row:o}),o>n&&(n=o))}return["L","R"].forEach(r=>{Object.keys(e[r]).forEach(s=>{e[r][Number(s)].sort((i,o)=>i.row-o.row)})}),{byCyl:e,maxRow:n}}const Tv=()=>{const t=(location.hash||"").replace("#/","");return t==="leftResults"?"leftResults":t==="rightResults"?"rightResults":"home"},jn=t=>{location.hash="/"+t},DD=t=>{if(!t)return"";let n=(r=>r.replace(/[Ａ-Ｚａ-ｚ０-９]/g,s=>String.fromCharCode(s.charCodeAt(0)-65248)).replace(/[－ー―—–]/g,"-").replace(/\s+/g,""))(t).toUpperCase();return n=n.replace(/^XC/,"CX"),n=n.replace(/^CX-?(\d+)$/,"CX$1"),n},LD=t=>{const e=DD(t),n=e.match(/CX\d+/);return n?n[0]:e},je=t=>{const e=LD(t);return/^CX\d+$/.test(e)},MI=(t,e)=>`legends:savedList:${e}:${t}`,Iv=(t,e)=>`legends:savedMemo:${e}:${t}`;function qo(t,e){var n;try{const r=localStorage.getItem(MI(t,e));if(r)return JSON.parse(r).filter(i=>Array.isArray(i.pattern));const s=localStorage.getItem(Iv(t,e));if(s){const i=JSON.parse(s);if((n=i==null?void 0:i.pattern)!=null&&n.length){const o={id:String(i.ts||Date.now()),pattern:i.pattern,memo:i.memo||"",ts:i.ts||Date.now()};return Xh(t,e,[o]),localStorage.removeItem(Iv(t,e)),[o]}}return[]}catch{return[]}}function Xh(t,e,n){try{localStorage.setItem(MI(t,e),JSON.stringify(n))}catch{}}function OD(t,e,n,r,s=!1){const i=qo(t,e),o={id:`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,pattern:[...n],memo:r.slice(0,128),ts:Date.now(),rev:s};Xh(t,e,[o,...i])}function VD(t,e,n,r){const i=qo(t,e).map(o=>o.id===n?{...o,...r,ts:Date.now()}:o);Xh(t,e,i)}function FI(t,e,n){const r=qo(t,e);Xh(t,e,r.filter(s=>s.id!==n))}function MD(t,e,n){return qo(t,e).find(r=>r.id===n)}const jI="legends:savedPairs:v1";function Ql(){try{const t=localStorage.getItem(jI);return t?JSON.parse(t):[]}catch{return[]}}function mg(t){try{localStorage.setItem(jI,JSON.stringify(t))}catch{}}function FD(t,e,n,r,s,i,o){const l={id:`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,left:{set:t,pattern:[...e],rev:!!i},right:{set:n,pattern:[...r],rev:!!o},memo:s.slice(0,128),ts:Date.now()};mg([l,...Ql()])}function jD(t,e){const n=Ql().map(r=>r.id===t?{...r,...e,ts:Date.now()}:r);mg(n)}function UD(t){mg(Ql().filter(e=>e.id!==t))}function BD(){const t=window.location.pathname,e=t==="/admin"||t.endsWith("/admin")||t.includes("/admin/"),{user:n,ready:r}=bI(),{checking:s,ok:i}=DI(n),[o,l]=L.useState("");return!r||s?g.jsx("main",{className:"app",children:g.jsx("header",{className:"header",children:g.jsx("div",{className:"header-inner",children:g.jsx("h1",{children:"ガンバレジェンズ配列表 検索ツール"})})})}):n&&!i?g.jsxs("main",{className:"app",children:[g.jsx("header",{className:"header",children:g.jsx("div",{className:"header-inner",children:g.jsx("h1",{children:"ガンバレジェンズ配列表 検索ツール"})})}),g.jsx(pv,{onBlocked:l}),o&&g.jsx("div",{style:{maxWidth:360,margin:"0 auto",padding:"0 16px",color:"#ef4444",fontSize:12},children:o})]}):n?e?g.jsx(AD,{}):g.jsx(zD,{}):g.jsxs("main",{className:"app",children:[g.jsx("header",{className:"header",children:g.jsx("div",{className:"header-inner",children:g.jsx("h1",{children:"ガンバレジェンズ配列表 検索ツール"})})}),g.jsx(pv,{onBlocked:l}),o&&g.jsx("div",{style:{maxWidth:360,margin:"0 auto",padding:"0 16px",color:"#ef4444",fontSize:12},children:o})]})}function zD(){const{isAdmin:t}=kD(),e=()=>{const E=window.location.pathname.replace(/\/admin\/?$/,""),M=E.endsWith("/")?E.slice(0,-1):E;window.location.pathname=M+"/admin"},{rows:n,sets:r,loading:s,error:i}=gR(ND),{sets:o}=CD(),l=L.useMemo(()=>n.map(E=>({...E,set:String((E==null?void 0:E.set)??(E==null?void 0:E.series)??(E==null?void 0:E.シリーズ))})),[n]),u=L.useMemo(()=>o.map(E=>E.setId),[o]),c=L.useMemo(()=>{const E=[...u];return["CX3","CX4","CX5"].forEach(M=>{E.includes(M)||E.push(M)}),E.sort((M,F)=>{const B=parseInt(M.replace(/\D+/g,""),10),G=parseInt(F.replace(/\D+/g,""),10);return!Number.isNaN(B)&&!Number.isNaN(G)?G-B:F.localeCompare(M,"ja")})},[u]),[d,m]=L.useState(""),[p,T]=L.useState("");L.useEffect(()=>{if(!c.length||!u.length)return;const E=c[0];d||m(E),p||T(E)},[c,u,d,p]);const[k,P]=L.useState([]),[D,_]=L.useState([]),[w,C]=L.useState(Tv()),[O,$]=L.useState("down"),[H,I]=L.useState("down");L.useEffect(()=>{const E=()=>C(Tv());return window.addEventListener("hashchange",E),()=>window.removeEventListener("hashchange",E)},[]);const v=typeof window<"u"?window.matchMedia("(max-width: 640px)").matches:!1,S=L.useMemo(()=>l.filter(E=>E.set===d),[l,d]),A=L.useMemo(()=>l.filter(E=>E.set===p),[l,p]),x=L.useMemo(()=>Ev(S),[S]),N=L.useMemo(()=>Ev(A),[A]),R=L.useMemo(()=>{const E=O==="up"?[...k].reverse():k;return d&&E.length?Ay(l,d,"L",E):[]},[l,d,k,O]),Ce=L.useMemo(()=>{const E=H==="up"?[...D].reverse():D;return p&&E.length?Ay(l,p,"R",E):[]},[l,p,D,H]),ut=xy(`legends:${d}:L`),zt=xy(`legends:${p}:R`),[Lt,X]=L.useState(!1),[ie,ue]=L.useState(!1),[Ee,xe]=L.useState(""),[$t,Ye]=L.useState([]),[Ht,St]=L.useState(""),[Ot,Dn]=L.useState([]),Ln=L.useMemo(()=>$t,[$t]),Yn=L.useMemo(()=>Ot,[Ot]),Yh=()=>Ye(E=>E.slice(0,-1)),Xl=()=>Dn(E=>E.slice(0,-1)),Ui=()=>{Ln.length&&(P(Ln),$("down"),ut.add(Ln,!1),jn("leftResults"))},Yl=()=>{Ln.length&&(P(Ln),$("up"),ut.add(Ln,!0),jn("leftResults"))},Jh=()=>{Ye([]),xe("")},Bi=()=>{Yn.length&&(_(Yn),I("down"),zt.add(Yn,!1),jn("rightResults"))},ra=()=>{Yn.length&&(_(Yn),I("up"),zt.add(Yn,!0),jn("rightResults"))},Jl=()=>{Dn([]),St("")};function ct(E){Ye(E.pattern),xe(""),P(E.pattern),$(E.rev?"up":"down"),jn("leftResults")}function gt(E){Dn(E.pattern),St(""),_(E.pattern),I(E.rev?"up":"down"),jn("rightResults")}const Ar=E=>{const M=(E==="L"?Ee:Ht).trim();if(!M)return;const F=M.match(/^\d{1,3}$/);if(F){const B=parseInt(F[0],10);Number.isNaN(B)||(E==="L"?Ye(G=>[...G,B]):Dn(G=>[...G,B]))}E==="L"?xe(""):St("")},Zl=E=>M=>{const F=M.target.value.replace(/[^\d]/g,"").slice(0,3);E==="L"?xe(F):St(F)},sa=E=>M=>{if(M.key==="Enter"||M.key===" "||M.key===","){M.preventDefault(),Ar(E);return}M.key==="Backspace"&&((E==="L"?Ee:Ht)||(E==="L"?Ye(B=>B.slice(0,-1)):Dn(B=>B.slice(0,-1))))},eu=E=>()=>Ar(E);L.useEffect(()=>{if(!Ee)return;const E=setTimeout(()=>Ar("L"),900);return()=>clearTimeout(E)},[Ee]),L.useEffect(()=>{if(!Ht)return;const E=setTimeout(()=>Ar("R"),900);return()=>clearTimeout(E)},[Ht]);const[zi,tu]=L.useState(new Map),[Zh,ia]=L.useState(new Map),[nu,ed]=L.useState(new Map),[oa,ru]=L.useState(new Map),[$i,aa]=L.useState(new Map),[su,Cr]=L.useState(new Map),[td,Hi]=L.useState(new Map),[nd,ni]=L.useState(new Map),xr=E=>{const M=it(String(E||"")).toUpperCase().trim(),F=new Set;F.add(M);const B=M.match(/(\d{1,3}P?)$/);if(B){const W=B[1].match(/^(\d+)(P)?$/);if(W){const re=String(parseInt(W[1],10)),Q=re.padStart(2,"0");W[2]?(F.add(`${re}P`),F.add(`${Q}P`)):(F.add(re),F.add(Q),F.add(`${re}P`),F.add(`${Q}P`))}}return[...F]},ht=E=>{if(!E||typeof E!="object")return"";const M=Q=>{const U=E[Q];return U==null?"":String(U).trim()},F=M("rarity_base")||M("rarity_bas"),B=M("rarity_mark")||M("rarity_mar");let G="";F&&(G=it(F).toUpperCase().trim());let W=!1;if(B){const Q=it(B).toUpperCase().trim();(Q==="F"||Q==="★")&&(W=!0)}if(G)return G+(W?"★":"");const re=M("rarity")||M("rarity_main")||M("レアリティ")||M("レア");return re?it(re).toUpperCase().trim():""};L.useEffect(()=>{(async()=>{try{const E=new Map,M=new Map,F=new Map,B=new Map,G=new Map,W=new Map,re=new Map,Q=new Map;try{const U=await xa(cr("cards.csv"));for(const J of U){const ce=String(J.code||""),oe=String(J.name||""),Z=String(J.rarity||"");for(const ne of xr(ce))oe&&!M.has(ne)&&M.set(ne,oe),Z&&!E.has(ne)&&E.set(ne,Z)}}catch{}try{const U=await xa(cr("cards.cx3.csv"));for(const J of U){const ce=String(J.code||""),oe=String(J.name||""),Z=String(J.rarity||"");for(const ne of xr(ce))oe&&!B.has(ne)&&B.set(ne,oe),Z&&!F.has(ne)&&F.set(ne,Z)}}catch{}for(const U of["cards.cx4.csv","cx4_cards.csv"])try{const J=await xa(cr(U));for(const ce of J){const oe=String(ce.code||""),Z=String(ce.name||""),ne=String(ce.rarity||"");for(const ve of xr(oe))Z&&!W.has(ve)&&W.set(ve,Z),ne&&!G.has(ve)&&G.set(ve,ne)}}catch{}for(const U of["cards.cx5.csv","cx5_cards.csv","cs5_cards.csv"])try{const J=await xa(cr(U));for(const ce of J){const oe=String(ce.code??""),Z=String(ce.name??""),ne=String(ce.rarity??ce.rarity_base??ce.rarity_main??"");for(const ve of xr(oe))Z&&!Q.has(ve)&&Q.set(ve,Z),ne&&!re.has(ve)&&re.set(ve,ne)}break}catch{}tu(E),ia(M),ed(F),ru(B),aa(G),Cr(W),Hi(re),ni(Q),Pa("COMMON",{rarity:E,name:M,specialP:Br}),Pa("CX3",{rarity:F,name:B,specialP:Br}),Pa("CX4",{rarity:G,name:W,specialP:Br}),Pa("CX5",{rarity:re,name:Q,specialP:Br})}catch(E){console.warn("cards csv 読込失敗:",E)}})()},[]),L.useEffect(()=>{(async()=>{var E;for(const M of o){const F=jr(String(M.setId??""));if(F==="CX3"||F==="CX4"||F==="CX5"||!F)continue;const B=[];M.csvUrl&&B.push(String(M.csvUrl)),M.cardsPath&&B.push(String(M.cardsPath));const G=((E=M.storageBaseName)==null?void 0:E.toString())||F.toLowerCase();B.push(`${G}_cards.csv`),B.push(`cx_sets/${F}/cards.${G}.csv`),B.push(`cx_sets/${F}/cards.csv`);let W=null;for(const oe of B)try{const Z=oe.startsWith("http://")||oe.startsWith("https://")?oe:cr(oe);W=await xa(Z),console.log("extra cards loaded:",F,oe,W.length);break}catch(Z){console.warn("extra cards read fail, try next:",F,oe,Z)}if(!(W!=null&&W.length))continue;console.log("DEBUG CX sample row",F,W[0],Object.keys(W[0]));let re=0;for(const oe of W)ht(oe)&&re++;const Q=W.length,U=W[0];console.log("DEBUG CX rarity scan:",F,{totalRows:Q,nonEmptyRarityCount:re,firstRowRaw:U,firstRowKeys:Object.keys(U??{})}),console.log("DEBUG CX firstRowKeys:",F,Object.keys(U??{})),console.log("DEBUG CX firstRowRaw JSON:",F,JSON.stringify(U??{},null,2));const J=new Map,ce=new Map;for(const oe of W){const Z=String(oe.code??""),ne=String(oe.name??""),ve=ht(oe);ve||console.log("DEBUG CX rarity empty row:",F,{code:oe.code,name:oe.name,rarity:oe.rarity,rarity_base:oe.rarity_base,rarity_mar:oe.rarity_mar,rarity_mark:oe.rarity_mark});const He=xr(Z);for(const me of He)ne&&!ce.has(me)&&ce.set(me,ne),ve&&!J.has(me)&&J.set(me,ve)}Pa(F,{rarity:J,name:ce,specialP:Br}),console.log("DEBUG CX100 dict :",{fam:F,raritySize:J.size,nameSize:ce.size})}})()},[o]);const nn=E=>M=>{const F=it(String(M||"")).toUpperCase().trim(),{rarity:B,specialP:G}=zu(E);if(G.has(F))return"LR★";if(B.has(F))return B.get(F);const W=F.match(/^(\d+)(P)?$/);if(W){const Q=String(parseInt(W[1],10)),U=Q.padStart(2,"0");return W[2]?B.get(`${Q}P`)||B.get(`${U}P`)||void 0:B.get(Q)||B.get(U)||void 0}const{rarity:re}=zu("COMMON");if(re.has(F))return re.get(F)},Rt=E=>M=>{const F=it(String(M||"")).toUpperCase().trim(),{name:B}=zu(E),{name:G}=zu("COMMON");if(B.has(F))return B.get(F);for(const W of xr(F)){const re=B.get(W)||G.get(W);if(re)return re}},Jn=E=>{const M=new Set;for(let F=1;F<=12;F++){let B=0,G=0,W=0;for(const re of E){const Q=re[`col${F}`];B++,Q!=null&&Q.length&&(Q.length===1&&Q[0]===re.no?G++:W++)}B>0&&G/B>=.9&&W===0&&M.add(F)}return M},[kr,rd]=L.useState([]),[Wt,sd]=L.useState(new Set);L.useEffect(()=>{(async()=>{try{const E=await Du(cr("cx3_positions.csv"));rd(E),sd(Jn(E))}catch(E){console.warn("cx3_positions.csv 読込失敗:",E)}})()},[]);const[Pr,Wi]=L.useState([]),[Zn,iu]=L.useState(new Set);L.useEffect(()=>{(async()=>{try{const E=await Du(cr("cx4_positions.csv"));Wi(E),iu(Jn(E))}catch(E){console.warn("cx4_positions.csv 読込失敗:",E)}})()},[]);const[On,ri]=L.useState([]),[Nr,er]=L.useState(new Set);L.useEffect(()=>{(async()=>{try{const E=await Du(cr("cx5_positions.csv"));ri(E),er(Jn(E))}catch(E){console.warn("cx5_positions.csv 読込失敗:",E)}})()},[]);const[tr,ou]=L.useState({}),[Vn,la]=L.useState({});L.useEffect(()=>{(async()=>{var F;const E={},M={};for(const B of o){const G=jr(String(B.setId??""));if(!G||G!=="CX100")continue;const W=[];B.positionsPath&&W.push(String(B.positionsPath));const re=((F=B.storageBaseName)==null?void 0:F.toString())||G.toLowerCase();W.push(`cx_sets/${G}/positions.${re}.csv`),W.push(`cx_sets/${G}/${re}_positions.csv`),W.push(`${re}_positions.csv`),W.push(`cx_sets/${G}/positions.csv`);let Q=null;for(const U of W)try{const J=U.startsWith("http://")||U.startsWith("https://")?U:cr(U);Q=await Du(J),Q&&Q.length>0&&(Q=Q.map(ce=>{const oe={...ce};for(let Z=1;Z<=12;Z++){const ne=oe[`col${Z}`];typeof ne=="number"&&(oe[`col${Z}`]=[ne])}return oe})),console.log("extra positions loaded:",G,U,(Q==null?void 0:Q.length)||0);break}catch(J){console.warn("extra positions 読み込み失敗:",G,U,J)}Q!=null&&Q.length&&(E[G]=Q,M[G]=Jn(Q))}Object.keys(E).length&&(ou(B=>({...B,...E})),la(B=>({...B,...M})))})()},[o]);const rn=L.useMemo(()=>{const E=jr(d);return E?E==="CX3"?kr??[]:E==="CX4"?Pr??[]:E==="CX5"?On??[]:tr[E]??[]:[]},[d,kr,Pr,On,tr]),yn=L.useMemo(()=>{const E=jr(p);return E?E==="CX3"?kr??[]:E==="CX4"?Pr??[]:E==="CX5"?On??[]:tr[E]??[]:[]},[p,kr,Pr,On,tr]),sn=L.useMemo(()=>{const E=jr(d);return E==="CX3"?Wt:E==="CX4"?Zn:E==="CX5"?Nr:Vn[E]||new Set},[d,Wt,Zn,Nr,Vn]),_n=L.useMemo(()=>{const E=jr(p);return E==="CX3"?Wt:E==="CX4"?Zn:E==="CX5"?Nr:Vn[E]||new Set},[p,Wt,Zn,Nr,Vn]);L.useMemo(()=>{const E=Array.from({length:12},(M,F)=>F+1).filter(M=>!sn.has(M));return Array.from({length:E.length},(M,F)=>F+1)},[sn]),L.useMemo(()=>{const E=Array.from({length:12},(M,F)=>F+1).filter(M=>!_n.has(M));return Array.from({length:E.length},(M,F)=>F+1)},[_n]);function qi(E,M){if(!M.length)return[];const F=[];for(let B=0;B<E.length;B++){const G=E[B]||[];if(!G.length||!G.some(U=>U===M[0]))continue;if(M.length===1){F.push([B+1]);continue}let W=B;const re=[B];let Q=!0;for(let U=1;U<M.length;U++){let J=W+1;for(;J<E.length&&!(E[J]&&E[J].length);)J++;if(J>=E.length){Q=!1;break}if(!E[J].some(oe=>oe===M[U])){Q=!1;break}re.push(J),W=J}Q&&F.push(re.map(U=>U+1))}return F}function au(E,M){if(!M.length)return[];const F=[];for(let B=0;B<E.length;B++){const G=E[B]||[];if(!G.length||!G.some(U=>U===M[0]))continue;if(M.length===1){F.push([B+1]);continue}let W=B;const re=[B];let Q=!0;for(let U=1;U<M.length;U++){let J=W-1;for(;J>=0&&!(E[J]&&E[J].length);)J--;if(J<0){Q=!1;break}if(!E[J].some(oe=>oe===M[U])){Q=!1;break}re.push(J),W=J}Q&&F.push(re.map(U=>U+1))}return F}function si(E,M,F,B){if(!M.length||!(E!=null&&E.length))return[];const G=E.slice().sort((Q,U)=>Q.no-U.no),W=Array.from({length:12},()=>[]);for(const Q of G)for(let U=1;U<=12;U++){if(F.has(U)){W[U-1].push([]);continue}const J=Q[`col${U}`],ce=Array.isArray(J)?J:[];W[U-1].push(ce)}const re=[];for(let Q=1;Q<=12;Q++){const U=W[Q-1],J=B==="up"?au(U,M):qi(U,M);for(const ce of J){const oe=B==="down"?ce[ce.length-1]:ce[0];let Z,ne=0;if(B==="down"){const me=ce[ce.length-1],an=U[me]||[];an.length&&(Z=an,ne=1)}else{const me=ce[0]-2,an=U[me]||[];an.length&&(Z=an,ne=1)}let ve=0,He;if(B==="down"){let me=ce[ce.length-1]-1;for(;++me<U.length&&!(U[me]&&U[me].length););me<U.length&&(ve=me-(ce[ce.length-1]-1),He=U[me])}else{let me=ce[0]-2;for(;me>=0&&!(U[me]&&U[me].length);)me--;me>=0&&(ve=ce[0]-1-me,He=U[me])}re.push({col:Q,row:oe,matched:[...M],dir:B,matchedRows:ce,nextLRSteps:ne,nextLRMany:Z!=null&&Z.length?Z:void 0,nextAnySteps:ve,nextAnyMany:He})}}return re.sort((Q,U)=>Q.col-U.col||Q.row-U.row)}const ss=L.useMemo(()=>je(d)?si(rn,k,sn,O):[],[d,rn,k,sn,O]),nr=L.useMemo(()=>je(p)?si(yn,D,_n,H):[],[p,yn,D,_n,H]),on=L.useMemo(()=>ss,[ss]),Mn=L.useMemo(()=>nr,[nr]),ua=L.useMemo(()=>xv(on),[on]),ca=L.useMemo(()=>xv(Mn),[Mn]);function ha(E,M,F){const B=new Set,G=new Set;for(const W of E){const Q=ir(W,M,nn(F),Rt(F)).length>0?B:G;for(const U of W.matchedRows)U>0&&Q.add(`${W.col}:${U}`)}return{good:B,none:G}}const is=L.useMemo(()=>je(d)?ha(on,rn,d):{good:new Set,none:new Set},[d,on,rn]),os=L.useMemo(()=>je(p)?ha(Mn,yn,p):{good:new Set,none:new Set},[p,Mn,yn]),da=(E,M)=>{const F=Array.from({length:12},(G,W)=>W+1).filter(G=>!M.has(G)),B=new Set;for(const G of E){const W=F.indexOf(G.col)+1;W>0&&B.add(W)}return[...B].sort((G,W)=>G-W)},fa=E=>{const M=new Set;for(const F of E)typeof F.col=="number"&&M.add(F.col);return[...M].sort((F,B)=>F-B)},ii=L.useMemo(()=>da(on,sn),[on,sn]),Gi=L.useMemo(()=>da(Mn,_n),[Mn,_n]),rr=L.useMemo(()=>fa(R),[R]),vn=L.useMemo(()=>fa(Ce),[Ce]),wn=L.useMemo(()=>je(d)&&ii.length===1?ii[0]:null,[d,ii]),En=L.useMemo(()=>je(p)&&Gi.length===1?Gi[0]:null,[p,Gi]),[sr,Ae]=L.useState("L");L.useEffect(()=>{sr==="L"&&!wn&&Gt(!1),sr==="R"&&!En&&Gt(!1)},[sr,wn,En]);function ir(E,M,F,B){const G=typeof F=="function"?F:()=>{},W=typeof B=="function"?B:()=>{},re=Ie=>{const We=it(String(Ie)).toUpperCase().trim(),Fe=We.match(/^0*(\d{1,3})(P?)$/);return Fe?String(parseInt(Fe[1],10))+(Fe[2]?"P":""):We},Q=Ie=>{const We=it(String(Ie)).toUpperCase().trim(),Fe=/^\d+P$/.test(We),qe=Fe?We.slice(0,-1):We,us=Ti(G(We)||"").toUpperCase(),Mr=Ti(G(qe)||"").toUpperCase(),yt=Br.has(We),a=yt||us.startsWith("LR")||Mr==="LR",h=Fe&&!yt&&(us==="LR★"||Mr==="LR");return{isLRAny:a,isLRP:h,badge:yt||h||us==="LR★"?"LR★":"LR"}},U=E.col,J=E.row,ce=new Map(M.map(Ie=>[Ie.no,Ie])),oe=M.map(Ie=>Ie.no),Z=oe.length?Math.max(...oe):0,ne=oe.length?Math.min(...oe):1,ve=new Map,He=new Map,me=new Map,an=(Ie,We)=>{const Fe=ce.get(Ie),qe=Fe?Fe[`raw${U}`]:void 0;if(!(!Array.isArray(qe)||qe.length===0))for(const us of qe){const Mr=it(String(us)).toUpperCase().trim(),yt=re(Mr),a=Q(Mr);a.isLRAny&&(ve.has(yt)||ve.set(yt,Math.abs(Ie-We)),He.has(yt)||He.set(yt,{badge:a.badge,isLRP:a.isLRP}),me.has(yt)||me.set(yt,Mr))}};if(E.dir==="down")for(let Ie=J+1;Ie<=Z;Ie++)an(Ie,J);else for(let Ie=J-1;Ie>=ne;Ie--)an(Ie,J);const ya=[];for(const[Ie,We]of ve){const Fe=me.get(Ie),qe=He.get(Ie);ya.push({code:Fe,name:W(Fe)||Fe,dist:We,color:zn(qe.badge==="LR★"?"LR★":"LR"),badge:qe.badge})}const _a=ya.sort((Ie,We)=>Ie.dist-We.dist),In=_a.slice(0,_v),va=Ie=>{var Fe;const We=re(Ie.code);return!!((Fe=He.get(We))!=null&&Fe.isLRP)};if(!In.some(va)){const Ie=_a.find(We=>va(We)&&!In.some(Fe=>re(Fe.code)===re(We.code)));Ie&&In.push(Ie)}return In.slice(0,_v+1)}const as=(E,M,F="down")=>{if(!je(M)||!E.length)return[];const B=jr(M);let G=[],W=new Set;if(B==="CX3"?(G=kr,W=Wt):B==="CX4"?(G=Pr,W=Zn):B==="CX5"?(G=On,W=Nr):(G=tr[B]||[],W=Vn[B]||new Set),!G.length)return[];const Q=si(G,E,W,F).map(Z=>{const ne=ir(Z,G,nn(M),Rt(M)),ve=ne.length?Math.min(...ne.map(He=>He.dist)):Number.POSITIVE_INFINITY;return{h:Z,lines:ne,score:ve}}),U=Q.filter(Z=>Z.lines.length>0).sort((Z,ne)=>Z.score-ne.score||Z.h.col-ne.h.col||Z.h.row-ne.h.row).slice(0,4).map(Z=>({col:Z.h.col,row:Z.h.row,lines:Z.lines}));if(U.length<4){const Z=Q.filter(ne=>ne.lines.length===0).sort((ne,ve)=>{const He=typeof ne.h.nextAnySteps=="number"?ne.h.nextAnySteps:999999,me=typeof ve.h.nextAnySteps=="number"?ve.h.nextAnySteps:999999;return He-me||ne.h.col-ve.h.col||ne.h.row-ve.h.row}).map(ne=>({col:ne.h.col,row:ne.h.row,noHigh:!0,nextAny:ne.h.nextAnySteps}));U.push(...Z.slice(0,4-U.length))}const J=Z=>Array.isArray(Z)&&Z.some(ne=>ne.badge==="LR★"),ce=Q.some(Z=>J(Z.lines)),oe=U.some(Z=>J(Z.lines));if(ce&&!oe){let Z=null;for(const ne of Q){const ve=(ne.lines||[]).filter(me=>me.badge==="LR★");if(!ve.length)continue;const He=Math.min(...ve.map(me=>me.dist));(!Z||He<Z.dist||He===Z.dist&&(ne.h.col<Z.col||ne.h.col===Z.col&&ne.h.row<Z.row))&&(Z={col:ne.h.col,row:ne.h.row,lines:ne.lines,dist:He})}Z&&!U.some(ne=>ne.col===Z.col&&ne.row===Z.row)&&U.push({col:Z.col,row:Z.row,lines:Z.lines})}return U.slice(0,5)},or=L.useMemo(()=>je(d)?as(Ln,d,"down"):[],[d,Ln,kr,Pr,On,Wt,Zn,Nr,tr,Vn,nu,oa]),Ki=L.useMemo(()=>je(p)?as(Yn,p,"down"):[],[p,Yn,kr,Pr,On,Wt,Zn,Nr,tr,Vn,nu,oa]),pa=(E,M,F,B)=>{if(!(E!=null&&E.length))return null;if(M){const W=[];for(const re of E){const Q=ir(re,F||[],void 0,void 0);Q!=null&&Q.length&&W.push(Math.min(...Q.map(U=>U.dist)))}return W.length?Math.min(...W):null}const G=E.map(W=>W==null?void 0:W.nextLRSteps).filter(W=>typeof W=="number"&&W>=0);return G.length?Math.min(...G):null};L.useMemo(()=>pa(je(d)?on:R,je(d),rn),[d,on,R,rn]),L.useMemo(()=>pa(je(p)?Mn:Ce,je(p),yn),[p,Mn,Ce,yn]);const[br,lu]=L.useState({open:!1,side:null,editId:null,rev:!1}),[ar,uu]=L.useState({open:!1,side:null}),[oi,Dr]=L.useState(null),[ls,Qi]=L.useState(null),[Xi,id]=L.useState(null),[od,Lr]=L.useState(1);L.useEffect(()=>{Xi==="R"&&Lr(oi||1),Xi==="L"&&Lr(ls||1)},[Xi]),L.useEffect(()=>{Dr(null),Qi(null)},[d,p,w]);const[ad,Yi]=L.useState({open:!1}),[cu,qt]=L.useState(0),[hu,Tn]=L.useState(!1),[ai,ld]=L.useState(""),[Or,Vr]=L.useState({open:!1,id:null}),[Ji,Gt]=L.useState(!1),[ke,du]=L.useState(null);L.useEffect(()=>{if(!Ji)return;const E=()=>{try{KD()}catch{}},M=requestAnimationFrame(E),F=setTimeout(E,0);return window.addEventListener("resize",E),()=>{cancelAnimationFrame(M),clearTimeout(F),window.removeEventListener("resize",E)}},[Ji,ke,ls,sr]);const fu=E=>!E||!Number.isFinite(E)?1:E%2===0?E-1:E+1,li=E=>{const M=E==="L"?$t:Ot,F=(E==="L"?Ee:Ht).trim(),B=[...M];return/^\d{1,3}$/.test(F)&&B.push(parseInt(F,10)),B};L.useEffect(()=>{},[]);const ma=L.useMemo(()=>Ql(),[cu,hu]),ga=L.useMemo(()=>{const E=ma,M=ai.trim().toLowerCase();return M?E.filter(F=>{const B=new Date(F.ts).toLocaleString("ja-JP"),G=F.left.pattern.join(" "),W=F.right.pattern.join(" ");return(F.memo||"").toLowerCase().includes(M)||F.left.set.toLowerCase().includes(M)||F.right.set.toLowerCase().includes(M)||G.includes(M)||W.includes(M)||B.includes(M)}):E},[ma,ai]);function Zi(E){m(E.left.set),Ye(E.left.pattern),P(E.left.pattern),$(E.left.rev?"up":"down"),T(E.right.set),Dn(E.right.pattern),_(E.right.pattern),I(E.right.rev?"up":"down"),Tn(!1),jn("leftResults")}return g.jsxs("main",{className:"app",children:[g.jsx("header",{className:"header",children:g.jsxs("div",{className:"header-inner",children:[g.jsx("h1",{children:"ガンバレジェンズ配列表 検索ツール"}),g.jsx(X2,{})]})}),t&&g.jsx("div",{style:{maxWidth:960,margin:"8px auto",padding:"4px 16px 0",textAlign:"right"},children:g.jsx("button",{onClick:e,style:{padding:"4px 12px",borderRadius:9999,border:"1px solid #60a5fa",background:"#ffffff",color:"#1d4ed8",fontSize:12,cursor:"pointer"},children:"管理画面へ"})}),w==="home"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"card",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[g.jsx("div",{className:"section-title",style:{margin:0},children:"左シリンダー"}),g.jsx("button",{className:"btn btn-violet",style:{marginLeft:"auto"},onClick:()=>Tn(!0),children:"履歴一覧"})]}),g.jsxs("div",{style:{marginTop:8,fontSize:12,color:"#6b7280"},children:[s&&!(v&&w==="home")&&"読込中…"," ",(()=>{const E=String((i==null?void 0:i.message)||"");return E?/404| Not Found/i.test(E)?null:`エラー: ${E}`:null})()]}),g.jsxs("div",{className:"select-row",style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"center"},children:[g.jsx("div",{className:"select-wrap",children:g.jsx("select",{value:d,onChange:E=>{m(E.target.value),X(!1)},style:{width:Ft,minWidth:Ft,maxWidth:Ft},children:(c.length?c:r.length?r:["CX3"]).map(E=>g.jsx("option",{value:E,children:E},E))})}),g.jsx("input",{value:Ee,onChange:Zl("L"),onKeyDown:sa("L"),onBlur:eu("L"),placeholder:"番号",inputMode:"numeric",style:{width:56,textAlign:"center"}}),g.jsx("button",{className:"btn btn-blue",style:{background:ps,borderColor:ps},onClick:Ui,children:"検索"}),g.jsx("button",{className:"btn btn-pink",onClick:Yl,children:"逆順"})]}),g.jsxs("div",{className:"select-row center-row",style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap",justifyContent:"center"},children:[g.jsx("button",{className:"btn-outline-blue",onClick:Yh,children:"一つ前へ戻る"}),g.jsx("button",{className:"btn btn-gray",onClick:Jh,children:"クリア"})]}),!!$t.length&&g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:6,justifyContent:"center"},children:$t.map((E,M)=>g.jsx("span",{className:"pill pill-num",children:E},M))}),$t.length>0&&or.length===0&&g.jsx("div",{className:"nohits",children:"一致するパターンはありません。"}),!!or.length&&g.jsx("div",{style:{display:"grid",gap:8,marginTop:8},children:or.map((E,M)=>{var B;const F=M===or.length-1;return g.jsxs("div",{style:{background:"#e6f0ff",borderRadius:8,border:"1px solid #cfe0ff",padding:"8px 10px"},children:[g.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:g.jsxs("span",{style:{fontWeight:700,color:"#334155"},children:["ヒット位置: ",vo(E.col)," の ",E.row,"番目"]})}),(B=E.lines)!=null&&B.length?g.jsx("div",{className:"res-lines",style:{marginTop:6},children:E.lines.map(G=>g.jsxs("div",{className:"res-line",style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[g.jsxs("span",{className:"res-dist",children:["（あと ",g.jsx("strong",{children:G.dist})," 回です）"]}),g.jsx("span",{className:"badge",style:{background:G.badge==="LR"?"#EF4444":"#B388FF",color:"#fff",borderRadius:6,padding:"2px 8px",fontWeight:700},children:G.badge}),g.jsxs("span",{className:"res-name",children:[G.code,":",G.name]})]},G.code))}):g.jsxs("div",{style:{marginTop:4,fontSize:12,color:"#6b7280"},children:["この先高レアは封入されておりません。",typeof E.nextAny=="number"&&E.nextAny>=2&&g.jsxs(g.Fragment,{children:["（次に何か出るまで ",g.jsx("strong",{children:E.nextAny})," 回）"]})]}),F&&g.jsx("div",{style:{marginTop:8,display:"flex",justifyContent:"center"},children:g.jsx("button",{className:"btn btn-blue",style:{background:ps,borderColor:ps},onClick:Ui,children:"配列表を確認"})})]},M)})}),Lt&&g.jsx(Sv,{items:ut.items,onRestore:ct,onDelete:E=>ut.remove(E),onClear:ut.clear})]}),g.jsxs("section",{className:"card",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[g.jsx("div",{className:"section-title",style:{margin:0},children:"右シリンダー"}),g.jsx("button",{className:"btn btn-violet",style:{marginLeft:"auto"},onClick:()=>Tn(!0),children:"履歴一覧"})]}),g.jsxs("div",{className:"select-row",style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"center"},children:[g.jsx("div",{className:"select-wrap",children:g.jsx("select",{value:p,onChange:E=>{T(E.target.value),ue(!1)},style:{width:Ft,minWidth:Ft,maxWidth:Ft},children:(c.length?c:r.length?r:["CX3"]).map(E=>g.jsx("option",{value:E,children:E},E))})}),g.jsx("input",{value:Ht,onChange:Zl("R"),onKeyDown:sa("R"),onBlur:eu("R"),placeholder:"番号",inputMode:"numeric",style:{width:56,textAlign:"center"}}),g.jsx("button",{className:"btn btn-blue",style:{background:ps,borderColor:ps},onClick:Bi,children:"検索"}),g.jsx("button",{className:"btn btn-pink",onClick:ra,children:"逆順"})]}),g.jsxs("div",{className:"select-row center-row",style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap",justifyContent:"center"},children:[g.jsx("button",{className:"btn-outline-blue",onClick:Xl,children:"一つ前へ戻る"}),g.jsx("button",{className:"btn btn-gray",onClick:Jl,children:"クリア"})]}),!!Ot.length&&g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:6,justifyContent:"center"},children:Ot.map((E,M)=>g.jsx("span",{className:"pill pill-num",children:E},M))}),Ot.length>0&&Ki.length===0&&g.jsx("div",{className:"nohits",children:"一致するパターンはありません。"}),!!Ki.length&&g.jsx("div",{style:{display:"grid",gap:8,marginTop:8},children:Ki.map((E,M)=>{var B;const F=M===Ki.length-1;return g.jsxs("div",{style:{background:"#e6f0ff",borderRadius:8,border:"1px solid #cfe0ff",padding:"8px 10px"},children:[g.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:g.jsxs("span",{style:{fontWeight:700,color:"#334155"},children:["ヒット位置: ",vo(E.col)," の ",E.row,"番目"]})}),(B=E.lines)!=null&&B.length?g.jsx("div",{className:"res-lines",style:{marginTop:6},children:E.lines.map(G=>g.jsxs("div",{className:"res-line",style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[g.jsxs("span",{className:"res-dist",children:["（あと ",g.jsx("strong",{children:G.dist})," 回です）"]}),g.jsx("span",{className:"badge",style:{background:G.badge==="LR"?"#EF4444":"#B388FF",color:"#fff",borderRadius:6,padding:"2px 8px",fontWeight:700},children:G.badge}),g.jsxs("span",{className:"res-name",children:[G.code,":",G.name]})]},G.code))}):g.jsxs("div",{style:{marginTop:4,fontSize:12,color:"#6b7280"},children:["この先高レアは封入されておりません。",typeof E.nextAny=="number"&&E.nextAny>=2&&g.jsxs(g.Fragment,{children:["（次に何か出るまで ",g.jsx("strong",{children:E.nextAny})," 回）"]})]}),F&&g.jsx("div",{style:{marginTop:8,display:"flex",justifyContent:"center"},children:g.jsx("button",{className:"btn btn-blue",style:{background:ps,borderColor:ps},onClick:Bi,children:"配列表を確認"})})]},M)})}),ie&&g.jsx(Sv,{items:zt.items,onRestore:gt,onDelete:E=>zt.remove(E),onClear:zt.clear})]})]}),w==="leftResults"&&g.jsxs("section",{className:"card",children:[g.jsxs("div",{style:{display:"grid",gap:8,marginBottom:8},children:[g.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:g.jsx("button",{className:"btn btn-gray",onClick:()=>jn("home"),children:"← 戻る"})}),g.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[je(d)&&wn&&g.jsx("button",{className:"btn btn-orange",style:{background:"#F59E0B",borderColor:"#F59E0B",color:"#fff"},onClick:()=>{Ae("L"),du(fu(wn)),Gt(!0)},children:"対の配列の表示"}),g.jsx("button",{className:"btn btn-blue",onClick:()=>Yi({open:!0}),children:"履歴保存"}),g.jsx("button",{className:"btn btn-violet",onClick:()=>Tn(!0),children:"履歴一覧"})]}),g.jsx("div",{children:g.jsxs("strong",{children:["左シリンダー結果",O==="up"?"（逆順）":""]})})]}),!!k.length&&g.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:6},children:k.map((E,M)=>g.jsx("span",{className:"pill pill-num",children:E},M))}),g.jsx(Rv,{hits:je(d)?on:R,getLines:je(d)?E=>ir(E,rn,nn(d),Rt(d)):void 0,isReverse:O==="up"}),g.jsx("div",{style:{marginTop:12},children:je(d)?g.jsx(to,{positions:rn,rowIndexCols:sn,getRarityForKey:nn(d),getNameForKey:Rt(d),highlight:ua,visibleCols:ii,highlightGood:is.good,highlightNone:is.none}):g.jsx(Av,{byCyl:x.byCyl,maxRow:Math.max(x.maxRow,100),highlightCells:kv(R,x.byCyl,"L"),cylinder:"L",visibleCols:rr})})]}),w==="rightResults"&&g.jsxs("section",{className:"card",children:[g.jsxs("div",{style:{display:"grid",gap:8,marginBottom:8},children:[g.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:g.jsx("button",{className:"btn btn-gray",onClick:()=>jn("home"),children:"← 戻る"})}),g.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[je(p)&&En&&g.jsx("button",{className:"btn btn-orange",style:{background:"#F59E0B",borderColor:"#F59E0B",color:"#fff"},onClick:()=>{Ae("R"),Qi(fu(En)),Gt(!0)},children:"対の配列の表示"}),g.jsx("button",{className:"btn btn-blue",onClick:()=>Yi({open:!0}),children:"履歴保存"}),g.jsx("button",{className:"btn btn-violet",onClick:()=>Tn(!0),children:"履歴一覧"})]}),g.jsx("div",{children:g.jsxs("strong",{children:["右シリンダー結果",H==="up"?"（逆順）":""]})})]}),!!D.length&&g.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:6},children:D.map((E,M)=>g.jsx("span",{className:"pill pill-num",children:E},M))}),g.jsx(Rv,{hits:je(p)?Mn:Ce,getLines:je(p)?E=>ir(E,yn,nn(p),Rt(p)):void 0,isReverse:H==="up"}),g.jsx("div",{style:{marginTop:12},children:je(p)?g.jsx(to,{positions:yn,rowIndexCols:_n,getRarityForKey:nn(p),getNameForKey:Rt(p),highlight:ca,visibleCols:Gi,highlightGood:os.good,highlightNone:os.none}):g.jsx(Av,{byCyl:N.byCyl,maxRow:Math.max(N.maxRow,100),highlightCells:kv(Ce,N.byCyl,"R"),cylinder:"R",visibleCols:vn})})]}),ar.open&&ar.side&&g.jsx($D,{side:ar.side,setKey:ar.side==="L"?d:p,version:cu,onClose:()=>uu({open:!1,side:null}),onEdit:E=>{lu({open:!0,side:ar.side,editId:E})},onDelete:E=>{FI(ar.side,ar.side==="L"?d:p,E),qt(M=>M+1)},onApply:(E,M)=>{ar.side==="L"?(Ye(E),P(E),$(M?"up":"down"),jn("leftResults")):(Dn(E),_(E),I(M?"up":"down"),jn("rightResults")),uu({open:!1,side:null})}}),br.open&&br.side&&g.jsx(HD,{side:br.side,setKey:br.side==="L"?d:p,pattern:br.side==="L"?li("L"):li("R"),editId:br.editId??void 0,onSaved:()=>qt(E=>E+1),onClose:()=>lu({open:!1,side:null,editId:null}),revDefault:!!br.rev}),ad.open&&g.jsx(WD,{leftSet:d,rightSet:p,leftPattern:li("L"),rightPattern:li("R"),revL:O==="up",revR:H==="up",onClose:()=>Yi({open:!1}),onSaved:()=>{Yi({open:!1}),qt(E=>E+1)}}),(()=>{if(!(Ji&&(sr==="L"?je(d)&&wn:je(p)&&En)))return null;if(sr==="L"){const M=wn,B=Array.from({length:12},(U,J)=>J+1).filter(U=>!_n.has(U)),W=Array.from({length:12},(U,J)=>B[J]??null).map((U,J)=>U?J+1:null).filter(U=>U!==null),re=ke&&W.includes(ke)?ke:W[0]??null,Q=U=>{const J=parseInt(String(U.target.value),10);du(Number.isFinite(J)?J:null)};return g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:()=>Gt(!1)}),g.jsxs("div",{className:"modal-body",style:{width:"min(860px, 96vw)"},children:[g.jsxs("div",{className:"modal-head",children:[g.jsx("div",{className:"modal-title",children:"対の配列の設定"}),g.jsx("button",{className:"modal-x",onClick:()=>Gt(!1),children:"×"})]}),g.jsxs("div",{className:"modal-content",style:{display:"grid",gap:10},children:[g.jsxs("div",{style:{display:"grid",gap:8},children:[g.jsxs("div",{style:{fontWeight:700},children:["シリーズ: ",p]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("div",{className:"select-wrap",children:g.jsx("select",{value:re??"",onChange:Q,style:{width:86},children:W.map(U=>g.jsx("option",{value:U,children:vo(U)},U))})}),g.jsx("div",{style:{fontSize:12,color:"#64748b"},children:"左は検索で確定した列（ハイライト有）／右は任意列（ハイライト無）"})]})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[g.jsxs("div",{children:[g.jsxs("div",{style:{fontWeight:700,marginBottom:6},children:["左（",d,"）"]}),g.jsx(to,{positions:rn,rowIndexCols:sn,getRarityForKey:nn(d),getNameForKey:Rt(d),highlight:ua,visibleCols:[M],highlightGood:is.good,highlightNone:is.none})]}),g.jsxs("div",{children:[g.jsxs("div",{style:{fontWeight:700,marginBottom:6},children:["右（",p,"）"]}),g.jsx(to,{positions:yn,rowIndexCols:_n,getRarityForKey:nn(p),getNameForKey:Rt(p),highlight:new Set,visibleCols:re?[re]:[],highlightGood:new Set,highlightNone:new Set})]})]})]}),g.jsx("div",{className:"modal-actions",children:g.jsx("button",{className:"btn btn-gray",onClick:()=>Gt(!1),children:"閉じる"})})]})]})}else{const M=En,B=Array.from({length:12},(U,J)=>J+1).filter(U=>!sn.has(U)),W=Array.from({length:12},(U,J)=>B[J]??null).map((U,J)=>U?J+1:null).filter(U=>U!==null),re=ls&&W.includes(ls)?ls:W[0]??null,Q=U=>{const J=parseInt(String(U.target.value),10);Qi(Number.isFinite(J)?J:null)};return g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:()=>Gt(!1)}),g.jsxs("div",{className:"modal-body",style:{width:"min(860px, 96vw)"},children:[g.jsxs("div",{className:"modal-head",children:[g.jsx("div",{className:"modal-title",children:"対の配列の設定"}),g.jsx("button",{className:"modal-x",onClick:()=>Gt(!1),children:"×"})]}),g.jsxs("div",{className:"modal-content",style:{display:"grid",gap:10},children:[g.jsxs("div",{style:{display:"grid",gap:8},children:[g.jsxs("div",{style:{fontWeight:700},children:["シリーズ: ",d]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("div",{className:"select-wrap",children:g.jsx("select",{value:re??"",onChange:Q,style:{width:86},children:W.map(U=>g.jsx("option",{value:U,children:vo(U)},U))})}),g.jsx("div",{style:{fontSize:12,color:"#64748b"},children:"右は検索で確定した列（ハイライト有）／左は任意列（ハイライト無）"})]})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[g.jsxs("div",{children:[g.jsxs("div",{style:{fontWeight:700,marginBottom:6},children:["左（",d,"）"]}),g.jsx(to,{positions:rn,rowIndexCols:sn,getRarityForKey:nn(d),getNameForKey:Rt(d),highlight:new Set,visibleCols:re?[re]:[],highlightGood:new Set,highlightNone:new Set})]}),g.jsxs("div",{children:[g.jsxs("div",{style:{fontWeight:700,marginBottom:6},children:["右（",p,"）"]}),g.jsx(to,{positions:yn,rowIndexCols:_n,getRarityForKey:nn(p),getNameForKey:Rt(p),highlight:ca,visibleCols:[M],highlightGood:os.good,highlightNone:os.none})]})]})]}),g.jsx("div",{className:"modal-actions",children:g.jsx("button",{className:"btn btn-gray",onClick:()=>Gt(!1),children:"閉じる"})})]})]})}})(),hu&&g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:()=>Tn(!1)}),g.jsxs("div",{className:"modal-body",style:{width:"min(720px, 94vw)"},children:[g.jsxs("div",{className:"modal-head",children:[g.jsx("div",{className:"modal-title",children:"保存一覧（左右ペア）"}),g.jsx("button",{className:"modal-x",onClick:()=>Tn(!1),children:"×"})]}),g.jsxs("div",{className:"modal-content",style:{display:"grid",gap:8},children:[ga.length===0&&g.jsx("div",{style:{color:"#6b7280"},children:"まだ保存はありません。"}),ga.map(E=>g.jsx(GD,{pair:E,onApply:Zi,onEdit:M=>Vr({open:!0,id:M}),onDelete:M=>{UD(M),qt(F=>F+1)}},E.id)),Or.open&&Or.id&&g.jsx(qD,{id:Or.id,onClose:()=>Vr({open:!1,id:null}),onSaved:()=>{Vr({open:!1,id:null}),qt(E=>E+1)}})]}),g.jsx("div",{className:"modal-actions",children:g.jsx("button",{className:"btn btn-gray",onClick:()=>Tn(!1),children:"閉じる"})})]})]}),g.jsxs("div",{style:{marginTop:8,fontSize:12,color:"#6b7280"},children:[s&&!(v&&w==="home")&&"読込中…"," ",(()=>{const E=String((i==null?void 0:i.message)||"");return E?/(404|Not\s*Found)|favicon\.ico/i.test(E)?null:`エラー: ${E}`:null})()]}),g.jsx("footer",{className:"site-copy",role:"contentinfo",style:{textAlign:"center"},children:"2023–2025 Copyright All Rights Reserved."})]})}function Sv({items:t,onRestore:e,onDelete:n,onClear:r}){return g.jsxs("div",{className:"history-panel",children:[g.jsxs("div",{className:"history-row",style:{justifyContent:"space-between"},children:[g.jsxs("div",{className:"history-meta",children:["保存件数: ",t.length]}),g.jsx("div",{className:"history-actions",children:g.jsx("button",{className:"history-clear",onClick:r,children:"全消去"})})]}),t.map(s=>g.jsxs("div",{className:"history-row",children:[g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("strong",{children:s.pattern.join(" → ")}),s.rev&&g.jsx("span",{className:"rev-badge",children:"逆順"})]}),g.jsx("div",{className:"history-meta",children:new Date(s.ts).toLocaleString("ja-JP")})]}),g.jsxs("div",{className:"history-actions",children:[g.jsx("button",{className:"history-restore",onClick:()=>e(s),children:"復元"}),g.jsx("button",{className:"history-delete",onClick:()=>n(s.ts),children:"削除"})]})]},s.ts)),!t.length&&g.jsx("div",{className:"history-meta",children:"まだ履歴はありません。"})]})}function Rv({hits:t,getLines:e,isReverse:n=!1}){if(!(t!=null&&t.length))return g.jsx("div",{className:"res-empty",children:"一致はまだありません。"});const r=typeof e=="function",s=t.map(o=>{const l=r?e(o)??[]:void 0,u=r?l.length?Math.min(...l.map(c=>c.dist)):Number.POSITIVE_INFINITY:typeof o.nextLRSteps=="number"?o.nextLRSteps:Number.POSITIVE_INFINITY;return{h:o,lines:l,score:u}}).sort((o,l)=>o.score-l.score||o.h.col-l.h.col||o.h.row-l.h.row);let i;if(!r)i=s.slice(0,4);else{const o=s.filter(c=>c.lines.length>0).slice(0,4);if(o.length<4){const c=s.filter(d=>d.lines.length===0).sort((d,m)=>{const p=typeof d.h.nextAnySteps=="number"?d.h.nextAnySteps:999999,T=typeof m.h.nextAnySteps=="number"?m.h.nextAnySteps:999999;return p-T||d.h.col-m.h.col||d.h.row-m.h.row});o.push(...c.slice(0,4-o.length))}const l=c=>Array.isArray(c)&&c.some(d=>d.badge==="LR★");if(!o.some(c=>l(c.lines))){let c=null;for(const d of s){const m=(d.lines||[]).filter(T=>T.badge==="LR★");if(!m.length)continue;const p=Math.min(...m.map(T=>T.dist));(!c||p<c.dist||p===c.dist&&(d.h.col<c.p.h.col||d.h.col===c.p.h.col&&d.h.row<c.p.h.row))&&(c={p:d,dist:p})}c&&!o.some(d=>d.h.col===c.p.h.col&&d.h.row===c.p.h.row)&&o.push(c.p)}i=o.slice(0,5)}return g.jsxs("div",{className:"res-list",children:[g.jsxs("p",{className:"res-summary",children:[i.length," 件の最短パターンと一致しました。",n&&g.jsx("span",{className:"rev-badge",children:"逆順"})]}),i.map(({h:o,lines:l},u)=>g.jsxs("div",{className:"res-card",children:[g.jsxs("div",{className:"res-head",children:[g.jsxs("div",{className:"pos",children:["ヒット位置: ",g.jsx("strong",{children:vo(o.col)})," の ",g.jsxs("strong",{children:[o.row,"番目"]})]}),n&&g.jsx("span",{className:"rev-badge",children:"逆順"}),!r&&g.jsx("div",{className:"meta",children:Array.isArray(o.nextLRMany)&&o.nextLRMany.length?g.jsxs(g.Fragment,{children:["次: ",g.jsx("strong",{children:o.nextLRMany.join("/")})]}):g.jsxs(g.Fragment,{children:["（あと ",g.jsx("strong",{children:o.nextLRSteps??0})," 回です）"]})})]}),r&&!!(l!=null&&l.length)&&g.jsx("div",{className:"res-lines",children:l.slice().sort((c,d)=>c.dist-d.dist).map(c=>g.jsxs("div",{className:"res-line",children:[g.jsxs("span",{className:"res-dist",children:["（あと ",g.jsx("strong",{children:c.dist})," 回です）"]}),g.jsx("span",{className:`badge ${c.badge==="LR"?"badge-lr":"badge-p"}`,children:c.badge}),g.jsxs("span",{className:"res-name",children:[c.code,":",c.name]})]},c.code))}),r&&!(l!=null&&l.length)&&g.jsx("div",{className:"res-lines",children:g.jsxs("div",{className:"res-line",children:[g.jsx("span",{className:"res-name",children:"この先高レアは封入されておりません。"}),typeof o.nextAnySteps=="number"&&o.nextAnySteps>=2&&g.jsxs("span",{className:"res-dist",children:["（次に何か出るまで ",g.jsx("strong",{children:o.nextAnySteps})," 回）"]})]})})]},u))]})}function Av({byCyl:t,maxRow:e,highlightCells:n,cylinder:r,visibleCols:s}){const i=(t==null?void 0:t[r])||{},o=Array.from({length:12},(c,d)=>d+1),l=new Set(s??[]),u=l.size>0?o.filter(c=>l.has(c)):o;return g.jsx("div",{className:"grid-wrap",children:g.jsxs("table",{className:"grid",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{style:{width:36}}),u.map(c=>g.jsx("th",{children:c},c))]})}),g.jsx("tbody",{children:Array.from({length:e},(c,d)=>d+1).map(c=>g.jsxs("tr",{"data-row":c,children:[g.jsx("td",{className:"rowhead",children:c}),u.map(d=>{var D;const m=(i[d]||[]).find(_=>_.row===c),p=(D=n==null?void 0:n.has)==null?void 0:D.call(n,`${d}:${c}`),T=m==null?void 0:m.num,k=String((m==null?void 0:m.rarity)||"").toUpperCase(),P=k?zn(k):"#FFFFFF";return g.jsx("td",{className:`cell ${p?"hl":""}`,style:{background:P||"#FFFFFF"},children:typeof T=="number"?T:""},d)})]},c))})]})})}function to({positions:t,rowIndexCols:e,getRarityForKey:n,getNameForKey:r,highlight:s,visibleCols:i,highlightGood:o,highlightNone:l}){const u=[...t].sort((D,_)=>D.no-_.no),c=new Set(i??[]),d=c.size>0,p=Array.from({length:12},(D,_)=>_+1).filter(D=>{var _;return!((_=e==null?void 0:e.has)!=null&&_.call(e,D))}),T=Array.from({length:12},(D,_)=>p[_]??null),k=d&&i&&i.length===1?i[0]:null,P=D=>{const _=it(String(D)).toUpperCase(),w=(r==null?void 0:r(_))||"",C=(n==null?void 0:n(_))||"",O=Ti(C).toUpperCase(),H=Br.has(_)?"LR★":O||"N",I=Jd(_,O)?Yd(_,O):"#FFFFFF",v="#111",S=`${D} [${H}]${w?` ${w}`:""}`;return g.jsx("div",{title:S,style:{display:"block",width:"100%",boxSizing:"border-box",background:I,color:v,border:"1px solid rgba(0,0,0,0.10)",borderRadius:4,padding:"2px 6px",whiteSpace:"normal",wordBreak:"break-word",overflowWrap:"anywhere",lineHeight:1.25},children:S})};return g.jsx("div",{className:"grid-wrap",children:g.jsxs("table",{className:"grid",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{style:{width:36}}),T.map((D,_)=>{const w=_+1;return d&&!c.has(w)?null:g.jsx("th",{children:vo(w)},_)})]})}),g.jsx("tbody",{children:u.map(D=>g.jsxs("tr",{"data-row":D.no,children:[g.jsx("td",{className:"rowhead",children:D.no}),T.map((_,w)=>{var Ce,ut,zt;const C=w+1;if(d&&!c.has(C))return null;const O=_?D[`raw${_}`]:void 0,$=Array.isArray(O)?O:[],H=$.length===1,I=$[0],v=H&&typeof n=="function"?n(I):void 0,S=_?`${_}:${D.no}`:"",A=S?((Ce=o==null?void 0:o.has)==null?void 0:Ce.call(o,S))??((ut=s==null?void 0:s.has)==null?void 0:ut.call(s,S))??!1:!1,x=S?((zt=l==null?void 0:l.has)==null?void 0:zt.call(l,S))??!1:!1;if(k&&C===k)return g.jsx("td",{className:"cell",style:{background:"#FFFFFF",padding:2,fontSize:12,lineHeight:1.25,verticalAlign:"middle",boxShadow:A?"inset 0 0 0 3px #ef4444":x?"inset 0 0 0 3px #10B981":void 0,textAlign:"left"},title:$.join(" / "),children:$.length===0?"":g.jsx("div",{style:{display:"grid",gap:2},children:$.map((Lt,X)=>g.jsx("div",{children:P(Lt)},X))})},w);const R={background:(()=>{if(!H)return"#FFFFFF";const Lt=Ti(v||"").toUpperCase();return Jd(I,Lt)?Yd(I,Lt):"#FFFFFF"})(),padding:2,fontSize:H?12:10,lineHeight:1.15,verticalAlign:"middle",whiteSpace:"normal",wordBreak:"break-all",boxShadow:A?"inset 0 0 0 3px #ef4444":x?"inset 0 0 0 3px #10B981":void 0};return g.jsx("td",{className:"cell",style:R,title:$.join("/"),children:H?I??"":g.jsx("div",{style:{display:"grid",gap:2,background:"#FFFFFF",justifyItems:"stretch"},children:$.map((Lt,X)=>{const ie=it(String(Lt)).toUpperCase(),ue=Ti((n==null?void 0:n(ie))||"").toUpperCase(),Ee=Jd(ie,ue)?Yd(ie,ue):"#FFFFFF";return g.jsx("div",{style:{display:"block",padding:"0 2px",borderRadius:3,fontSize:10,lineHeight:1.3,background:Ee,color:"#111",border:"1px solid rgba(0,0,0,0.06)",textAlign:"center",whiteSpace:"normal",wordBreak:"break-word",overflowWrap:"anywhere"},children:Lt},X)})})},w)})]},D.no))})]})})}function $D({side:t,setKey:e,version:n,onClose:r,onApply:s,onEdit:i,onDelete:o}){const[l,u]=L.useState(()=>qo(t,e));return L.useEffect(()=>{u(qo(t,e))},[t,e,n]),g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:r}),g.jsxs("div",{className:"modal-body",style:{width:"min(660px, 94vw)",maxHeight:"90vh",display:"flex",flexDirection:"column"},children:[g.jsxs("div",{className:"modal-head",children:[g.jsxs("div",{className:"modal-title",children:["保存一覧（",t==="L"?"左":"右","シリンダー）"]}),g.jsx("button",{className:"modal-x",onClick:r,children:"×"})]}),g.jsxs("div",{className:"modal-content",style:{display:"grid",gap:8,overflowY:"auto",flex:"1 1 auto"},children:[l.length===0&&g.jsx("div",{style:{color:"#6b7280"},children:"まだ保存はありません。"}),l.map(c=>g.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:8,padding:10,background:"#fafafa"},children:[g.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[g.jsx("strong",{children:c.pattern.join(" → ")}),c.rev&&g.jsx("span",{className:"rev-badge",children:"逆順"}),"   ",g.jsx("span",{style:{marginLeft:"auto",fontSize:12,color:"#64748b"},children:new Date(c.ts).toLocaleString("ja-JP")})]}),c.memo&&g.jsx("div",{style:{marginTop:6,whiteSpace:"pre-wrap"},children:c.memo}),g.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8},children:[g.jsx("button",{className:"btn btn-blue",onClick:()=>s(c.pattern,c.rev),children:"適用"}),g.jsx("button",{className:"btn btn-teal",onClick:()=>i(c.id),children:"編集"}),g.jsx("button",{className:"btn btn-gray",onClick:()=>o(c.id),children:"削除"})]})]},c.id))]}),g.jsx("div",{className:"modal-actions",children:g.jsx("button",{className:"btn btn-gray",onClick:r,children:"閉じる"})})]})]})}function HD({side:t,setKey:e,pattern:n,editId:r,onSaved:s,onClose:i,revDefault:o}){const l=!!r,u=`${l?"履歴編集":"履歴保存"}（${t==="L"?"左":"右"}シリンダー）`,c=l&&MD(t,e,r)||null,[d,m]=L.useState(()=>l?((c==null?void 0:c.pattern)??[]).join(" "):n.join(" ")),[p,T]=L.useState(()=>l?(c==null?void 0:c.memo)??"":""),k=_=>_.split(/[,\s]+/).map(w=>w.trim()).filter(Boolean).map(w=>parseInt(w,10)).filter(w=>Number.isFinite(w)&&w>=0&&w<=999).slice(0,20),P=()=>{const _=k(d);_.length&&(l?VD(t,e,r,{pattern:_,memo:p.slice(0,128)}):OD(t,e,_,p,!!o),s(),i())},D=()=>{l&&(FI(t,e,r),s()),i()};return g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:i}),g.jsxs("div",{className:"modal-body",children:[g.jsxs("div",{className:"modal-head",children:[g.jsx("div",{className:"modal-title",children:u}),g.jsx("button",{className:"modal-x",onClick:i,children:"×"})]}),g.jsxs("div",{className:"modal-content",children:[g.jsx("input",{value:d,onChange:_=>m(_.target.value.replace(/[^\d,\s]/g,"").replace(/\s+/g," ").trimStart()),placeholder:"例: 4 11（スペース/カンマ区切り）",style:{width:"100%",height:32,padding:"2px 8px",border:"1px solid #d1d5db",borderRadius:6,marginBottom:8}}),g.jsx("textarea",{value:p,onChange:_=>T(_.target.value.slice(0,128)),placeholder:"（任意・128文字まで）",rows:4,style:{width:"100%",boxSizing:"border-box",border:"1px solid #d1d5db",borderRadius:8,padding:"8px"}})]}),g.jsxs("div",{className:"modal-actions",children:[g.jsx("div",{style:{marginRight:"auto"},children:l&&g.jsx("button",{className:"btn btn-gray",onClick:D,children:"削除"})}),g.jsx("button",{className:"btn btn-gray",onClick:i,children:"閉じる"}),g.jsx("button",{className:"btn btn-blue",onClick:P,disabled:k(d).length===0,children:"保存"})]})]})]})}function WD({leftSet:t,rightSet:e,leftPattern:n,rightPattern:r,revL:s,revR:i,onClose:o,onSaved:l}){const[u,c]=L.useState(""),d=n.length>0||r.length>0,m=(T,k)=>(k?[...T].slice().reverse():T).join(" → "),p=()=>{d&&(FD(t,n,e,r,u,!!s,!!i),l())};return g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:o}),g.jsxs("div",{className:"modal-body",style:{width:"min(620px, 94vw)"},children:[g.jsxs("div",{className:"modal-head",children:[g.jsx("div",{className:"modal-title",children:"左右まとめて履歴保存"}),g.jsx("button",{className:"modal-x",onClick:o,children:"×"})]}),g.jsxs("div",{className:"modal-content",style:{display:"grid",gap:10},children:[g.jsxs("div",{style:{display:"grid",gap:6},children:[g.jsxs("div",{style:{fontWeight:700},children:["左シリンダー（",t,"）",s&&g.jsx("span",{className:"rev-badge",style:{marginLeft:6},children:"逆順"})]}),g.jsx("div",{style:{padding:"6px 8px",border:"1px solid #e5e7eb",borderRadius:6,background:"#fafafa",whiteSpace:"pre-wrap"},children:n.length?m(n,s):"（未入力）"})]}),g.jsxs("div",{style:{display:"grid",gap:6},children:[g.jsxs("div",{style:{fontWeight:700},children:["右シリンダー（",e,"）",i&&g.jsx("span",{className:"rev-badge",style:{marginLeft:6},children:"逆順"})]}),g.jsx("div",{style:{padding:"6px 8px",border:"1px solid #e5e7eb",borderRadius:6,background:"#fafafa",whiteSpace:"pre-wrap"},children:r.length?m(r,i):"（未入力）"})]}),g.jsx("textarea",{value:u,onChange:T=>c(T.target.value.slice(0,128)),placeholder:"（任意メモ・128文字まで）",rows:4,style:{width:"100%",boxSizing:"border-box",border:"1px solid #d1d5db",borderRadius:8,padding:"8px"}})]}),g.jsxs("div",{className:"modal-actions",children:[g.jsx("div",{style:{marginRight:"auto"}}),g.jsx("button",{className:"btn btn-gray",onClick:o,children:"閉じる"}),g.jsx("button",{className:"btn btn-blue",onClick:p,disabled:!d,children:"保存"})]})]})]})}function qD({id:t,onClose:e,onSaved:n}){const r=Ql().find(_=>_.id===t)||null,[s,i]=L.useState(r?(r.left.pattern||[]).join(" "):""),[o,l]=L.useState(r?(r.right.pattern||[]).join(" "):""),[u,c]=L.useState(r&&r.memo||""),[d,m]=L.useState(!!(r!=null&&r.left.rev)),[p,T]=L.useState(!!(r!=null&&r.right.rev)),k=_=>_.split(/[,\s]+/).map(w=>w.trim()).filter(Boolean).map(w=>parseInt(w,10)).filter(w=>Number.isFinite(w)&&w>=0&&w<=999).slice(0,20),P=k(s).length>0||k(o).length>0,D=()=>{if(!r){e();return}const _=k(s),w=k(o);jD(r.id,{left:{...r.left,pattern:_,rev:!!d},right:{...r.right,pattern:w,rev:!!p},memo:u.slice(0,128)}),n(),e()};return g.jsxs("div",{className:"modal",children:[g.jsx("div",{className:"modal-backdrop",onClick:e}),g.jsxs("div",{className:"modal-body",style:{width:"min(620px, 94vw)"},children:[g.jsxs("div",{className:"modal-head",children:[g.jsx("div",{className:"modal-title",children:"左右ペアを編集"}),g.jsx("button",{className:"modal-x",onClick:e,children:"×"})]}),r?g.jsxs("div",{className:"modal-content",style:{display:"grid",gap:10},children:[g.jsxs("div",{style:{display:"grid",gap:6},children:[g.jsxs("div",{style:{fontWeight:700},children:["左シリンダー（",r.left.set,"）",d&&g.jsx("span",{className:"rev-badge",style:{marginLeft:6},children:"逆順"})]}),g.jsx("input",{value:s,onChange:_=>i(_.target.value.replace(/[^\d,\s]/g,"")),placeholder:"例: 4 11（スペース/カンマ区切り）",style:{width:"100%",height:32,padding:"2px 8px",border:"1px solid #d1d5db",borderRadius:6}}),g.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[g.jsx("input",{type:"checkbox",checked:d,onChange:_=>m(_.target.checked)}),"逆順で保存"]})]}),g.jsxs("div",{style:{display:"grid",gap:6},children:[g.jsxs("div",{style:{fontWeight:700},children:["右シリンダー（",r.right.set,"）",p&&g.jsx("span",{className:"rev-badge",style:{marginLeft:6},children:"逆順"})]}),g.jsx("input",{value:o,onChange:_=>l(_.target.value.replace(/[^\d,\s]/g,"")),placeholder:"例: 7 12（スペース/カンマ区切り）",style:{width:"100%",height:32,padding:"2px 8px",border:"1px solid #d1d5db",borderRadius:6}}),g.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[g.jsx("input",{type:"checkbox",checked:p,onChange:_=>T(_.target.checked)}),"逆順で保存"]})]}),g.jsx("div",{children:g.jsx("textarea",{value:u,onChange:_=>c(_.target.value.slice(0,128)),placeholder:"（任意メモ・128文字まで）",rows:4,style:{width:"100%",boxSizing:"border-box",border:"1px solid #d1d5db",borderRadius:8,padding:"8px"}})})]}):g.jsx("div",{className:"modal-content",children:g.jsx("div",{style:{color:"#EF4444"},children:"対象データが見つかりませんでした。"})}),g.jsxs("div",{className:"modal-actions",children:[g.jsx("button",{className:"btn btn-gray",onClick:e,children:"閉じる"}),g.jsx("button",{className:"btn btn-blue",onClick:D,disabled:!P,children:"保存"})]})]})]})}function Cv({label:t,set:e,pattern:n,rev:r}){const s=(r?[...n].slice().reverse():n).join(" → ");return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[g.jsxs("strong",{children:[t,"（",e,"）",r&&g.jsx("span",{className:"rev-badge",style:{marginLeft:6},children:"逆順"}),"："]}),g.jsx("span",{children:s})]})}function GD({pair:t,onApply:e,onEdit:n,onDelete:r}){return g.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:8,padding:10,background:"#fafafa"},children:[g.jsx(Cv,{label:"左",set:t.left.set,pattern:t.left.pattern,rev:t.left.rev}),g.jsx("div",{style:{marginTop:4},children:g.jsx(Cv,{label:"右",set:t.right.set,pattern:t.right.pattern,rev:t.right.rev})}),t.memo&&g.jsx("div",{style:{marginTop:6,whiteSpace:"pre-wrap"},children:t.memo}),g.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8},children:[g.jsx("button",{className:"btn btn-blue",onClick:()=>e(t),children:"適用"}),g.jsx("button",{className:"btn btn-teal",onClick:()=>n(t.id),children:"編集"}),g.jsx("button",{className:"btn btn-gray",onClick:()=>r(t.id),children:"削除"})]}),g.jsx("div",{style:{marginTop:6,fontSize:12,color:"#64748b"},children:new Date(t.ts).toLocaleString("ja-JP")})]})}function xv(t){const e=new Set;for(const n of t)for(const r of n.matchedRows)r>0&&e.add(`${n.col}:${r}`);return e}function kv(t,e,n){var i;const r=new Set;if(!(t!=null&&t.length))return r;const s=(e==null?void 0:e[n])||{};for(const o of t){const l=s[o.col]||[],u=l.findIndex(m=>m.row===o.row);if(u<0)continue;const c=o.matched.length,d=u-(c-1);for(let m=0;m<c;m++){const p=(i=l[d+m])==null?void 0:i.row;typeof p=="number"&&r.add(`${o.col}:${p}`)}}return r}function KD(){const t=document.querySelector(".modal");if(!t)return;const e=t.querySelectorAll("table.grid tbody");if(e.length<2)return;const[n,r]=Array.from(e),s=Array.from(n.querySelectorAll("tr[data-row]")),i=Array.from(r.querySelectorAll("tr[data-row]")),o=new Map;i.forEach(l=>o.set(l.getAttribute("data-row")||"",l)),s.forEach(l=>{const u=l.getAttribute("data-row")||"",c=o.get(u);if(!c)return;l.style.height="",c.style.height="";const d=Math.max(l.getBoundingClientRect().height,c.getBoundingClientRect().height);l.style.height=d+"px",c.style.height=d+"px"})}(function(){const e="legends-inline-style-v491";let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.head.appendChild(n)),n.textContent=`
/* ---- 共通リセット / 端末対策 ---- */
html, body{ margin:0 !important; padding:0 !important; overflow-x:hidden !important;
  -webkit-text-size-adjust:100% !important; text-size-adjust:100% !important; }
@supports (-webkit-touch-callout:none){ input,select,textarea{ font-size:16px !important; } }

/* ---- ルート変数 ---- */
:root{
  --ctrl-h: 40px !important;
  --btn-minw: 84px !important;
  --btn-padx: 10px !important;
  --btn-label-lg: 18px !important;
  --radius-ctrl: 6px !important;
  --radius-card: 10px !important;
  --radius-modal: 10px !important;
  --radius-badge: 4px !important;
}

main.app{ margin-top:0 !important; padding-top:0 !important; background:#fff !important; }

/* ==== 看板ヘッダー：100vwフルブリード無段差 ==== */
main.app .header{ position:relative !important; margin:0 !important; padding:0 !important; border-radius:0 !important; }
main.app .header::before{
  content:"" !important;
  position:absolute !important; z-index:0 !important; top:0 !important; bottom:0 !important;
  left:  calc(50% - 50vw - 1px) !important;
  right: calc(50% - 50vw - 1px) !important;
  background:linear-gradient(90deg,#2AD6E7 0%,#0BB1DF 50%,#0A9FDE 100%) !important;
}

main.app .header > h1{
  position:relative !important; z-index:1 !important;
  display:block !important;
  width:100% !important;
  margin:0 auto !important;
  padding:22px 14px !important;
  text-align:center !important;
  color:#fff !important; background:transparent !important; border-radius:0 !important;
}

/* ←ここに追加する */
.header .header-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 22px 14px;
  max-width: 1080px;
  margin: 0 auto;
}
.header .header-inner h1 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}
.header .header-actions {
  display: flex;
  gap: 8px;
}

/* ここから元のつづき */
main.app > .header + .card{ margin-top:12px !important; }
@media (min-width:768px){
  main.app > .header + .card{ margin-top:16px !important; }
}

/* スマホ幅のときのヘッダー調整 */
@media (max-width: 520px) {
  .header .header-inner {
    flex-direction: column;     /* タイトルの下にボタンが来る */
    align-items: flex-start;    /* 左寄せにする（中央にしたければ center） */
    gap: 6px;
  }

  .header .header-actions {
    width: 100%;
    justify-content: flex-end;  /* ボタンは右端に寄せる */
  }

  .header .header-inner h1 {
    font-size: 18px;            /* 少し小さくして詰めやすく */
  }
}

/* ==== 行間・フォーム ==== */
.select-row{ display:flex; align-items:center; gap:12px !important; }
.select-row + .select-row{ margin-top:16px !important; }
.card .select-row.center-row{ margin-top:16px !important; margin-bottom:16px !important; }
.card + .card{ margin-top:18px !important; }

/* セレクト幅ガチ固定 */
.select-wrap{
  position:relative; display:inline-flex; align-items:center;
  width:${Ft}px !important; min-width:${Ft}px !important; max-width:${Ft}px !important;
  height:var(--ctrl-h); border:1px solid #d1d5db; border-radius:var(--radius-ctrl);
  background:#fff; overflow:hidden;
}
.select-wrap::after{
  content:""; position:absolute; pointer-events:none; right:6px; top:50%; transform:translateY(-35%);
  width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:6px solid #55667a;
}
.select-row select, .select-wrap select{
  min-width:0 !important; width:${Ft}px !important; max-width:${Ft}px !important;
  height:var(--ctrl-h) !important; font-size:16px !important;
  box-sizing:content-box !important; appearance:none !important; -webkit-appearance:none !important; -moz-appearance:none !important;

  border:0 !important;
  outline:none !important;
  background:transparent !important;
  box-shadow:none !important;

  padding-right: 24px !important;
}
select::-ms-expand{ display:none; }

/* 入力欄 */
.select-row input{
  height:var(--ctrl-h); line-height:calc(var(--ctrl-h) - 2px);
  padding:0 10px; border:1px solid #d1d5db; border-radius:var(--radius-ctrl); font-size:16px !important;
  width:56px; text-align:center;
}

/* ボタン調整 */
.select-row .btn{
  height:var(--ctrl-h) !important; line-height:var(--ctrl-h) !important;
  padding:0 var(--btn-padx) !important; border-radius:var(--radius-ctrl) !important;
  min-width:var(--btn-minw) !important; font-size:16px !important; font-weight:700; white-space:nowrap;
}
.select-row .btn:not(.btn-outline-blue):not(.btn-gray):not(.btn-secondary):not(.btn-outline):not(.btn-violet){
  font-size:var(--btn-label-lg) !important;
}
.select-row .btn-outline-blue, .btn-outline-blue{
  background:#fff !important; color:#1677FF !important; border:2px solid #1677FF !important;
  height:var(--ctrl-h) !important; line-height:var(--ctrl-h) !important;
  padding:0 var(--btn-padx) !important; border-radius:var(--radius-ctrl) !important;
  min-width:var(--btn-minw) !important; font-size:16px !important; font-weight:700 !important;
}
.btn-outline-blue:hover{ filter:brightness(0.95); }
.card .btn-violet, .btn-violet{
  background:#7C3AED !important; border-color:#7C3AED !important; color:#fff !important;
  height:var(--ctrl-h) !important; line-height:var(--ctrl-h) !important;
  padding:0 var(--btn-padx) !important; border-radius:var(--radius-ctrl) !important;
  min-width:var(--btn-minw) !important; font-size:16px !important; font-weight:700 !important;
}

/* === CX セレクトの二重枠を解消 === */
.select-wrap{ border: 0 !important; background: transparent !important; }
.select-wrap > select{
  border: 1px solid #d1d5db !important;
  border-radius: var(--radius-ctrl) !important;
  background: #fff !important;
  box-shadow: none !important;
  outline: none !important;
  padding-right: 24px !important;
}
.select-wrap > select:focus,
.select-wrap > select:focus-visible{ box-shadow: inset 0 0 0 2px rgba(22,119,255,.25) !important; outline: none !important; }
.select-wrap select:focus,
.select-wrap select:focus-visible{ box-shadow: inset 0 0 0 2px rgba(22,119,255,.25) !important; outline: none !important; }

/* --- Homeのセクション見出しを黒の通常文字に --- */
main.app .card .section-title{
  color:#111 !important;
  font-weight:700 !important;
  background:transparent !important;
  text-shadow:none !important;
}

/* ==== 結果表示 ==== */
.rev-badge{
  display:inline-flex; align-items:center; justify-content:center;
  margin-left:6px; padding:2px 6px;
  border-radius:6px;
  background:#10B981;
  color:#fff;
  border:1px solid #059669;
  font-weight:700; font-size:12px; line-height:1;
}

.res-list{ display:grid; gap:10px; margin-top:8px; }
.res-summary{ margin:0; font-size:14px; }
.res-card{ background:#f7fbff; border:1px solid #dfeefe; border-radius:var(--radius-card); padding:10px; }
.res-head{ display:flex; gap:8px; align-items:baseline; }
.res-head .pos{ font-weight:700; }
.res-head .meta{ margin-left:auto; font-size:12px; color:#6b7280; }
.res-dist{ opacity:.85; font-size:14px; }
.res-name{ font-size:15px; }

/* LRバッジ */
.res-lines .res-line .badge, .res-list .res-line .badge{
  display:inline-flex !important; align-items:center !important; justify-content:center !important;
  padding:2px 8px !important; line-height:1 !important; height:auto !important; margin-block:2px !important;
  border-radius:var(--radius-badge); color:#fff; font-weight:700; font-size:14px;
}
.badge-lr{ background:#EF4444; }
.badge-p { background:#B388FF; }

.nohits{ text-align:center; color:#EF4444; font-size:13px; font-weight:700; }

/* pill */
.pill{ display:inline-flex; align-items:center; justify-content:center; gap:.4em;
  min-width:28px; height:28px; padding:0 .8em; border-radius:999px; background:#2EC5FF; color:#fff;
  border:1px solid #9BDCF9; font-size:14px; font-weight:700; line-height:1; }
.pill.pill-num{
  width:34px !important; height:34px !important; padding:0 !important; border-radius:50% !重要;
  box-sizing:border-box !important; display:grid !important; place-items:center !important;
  line-height:1 !important; font-size:22px; font-weight:700;
  font-variant-numeric:tabular-nums; font-feature-settings:"tnum" 1, "lnum" 1;
}

/* ==== グリッド：行番号（1〜100）列の幅を常時ガチ固定 ==== */
.grid-wrap .grid{ table-layout:fixed !important; width:100% !important; border-collapse:collapse !important; }
.grid-wrap .grid th:first-child,
.grid-wrap .grid td.rowhead,
.grid-wrap .grid td:first-child{
  width:32px !important; max-width:32px !important; min-width:28px !important;
  padding-left:4px !important; padding-right:4px !important;
  white-space:nowrap; text-overflow:clip;
  font-variant-numeric:tabular-nums; font-feature-settings:"tnum" 1, "lnum" 1;
  -webkit-text-size-adjust:100% !important; text-size-adjust:100% !重要;
}
@media (max-width:480px){
  .grid-wrap .grid th:first-child,
  .grid-wrap .grid td.rowhead,
  .grid-wrap .grid td:first-child{
    width:24px !important; max-width:30px !important;
  }
}
/* 対の配列の表示ボタンも同じ高さ・丸み・文字サイズでそろえる */
.card .btn.btn-orange {
  height: var(--ctrl-h) !important;
  line-height: var(--ctrl-h) !important;
  padding: 0 var(--btn-padx) !important;
  border-radius: var(--radius-ctrl) !important;
  min-width: var(--btn-minw) !important;
  font-size: 16px !important;
  font-weight: 700 !important;
}

/* 履歴ボタンを同じ幅にする */
.card .btn.btn-blue,
.card .btn.btn-violet {
  min-width: 110px;
  text-align: center;
}
/* 履歴保存（青）と履歴一覧（紫）を同じ見た目にする */
.card .btn.btn-blue {
  height: var(--ctrl-h) !important;
  line-height: var(--ctrl-h) !important;
  padding: 0 var(--btn-padx) !important;
  border-radius: var(--radius-ctrl) !important;
  min-width: var(--btn-minw) !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  text-align: center;
}

/* モーダル（置き換え） */
.modal{ position:fixed; inset:0; z-index:999; }
.modal-backdrop{ position:absolute; inset:0; background:rgba(0,0,0,.35); }

/* ★ ここを変更：高さに上限を付け、ヘッダー/フッター固定・中身だけスクロール */
.modal-body{
  position:absolute; left:50%; top:50%;
  transform:translate(-50%,-50%);
  width:min(620px,94vw);
  max-height:min(92vh, 720px);
  display:flex; flex-direction:column;
  background:#fff; border-radius:var(--radius-modal);
  box-shadow:0 10px 30px rgba(0,0,0,.25);
  overscroll-behavior:contain;
}
.modal-head{ display:flex; align-items:center; padding:12px 14px; border-bottom:1px solid #e5e7eb; }
.modal-title{ font-size:18px; font-weight:700; }
.modal-x{ margin-left:auto; background: transparent; border:0; font-size:22px; line-height:1; cursor:pointer; }

/* ★ ここを変更：本文だけスクロール可能に */
.modal-content{
  padding:12px 14px;
  overflow:auto;
  flex:1 1 auto;
  min-height:0;
}
.modal-actions{
  display:flex; gap:8px; align-items:center; justify-content:flex-end;
  padding:12px 14px; border-top:1px solid #e5e7eb;
  background:#fff;
}
`;const r=()=>{const s=document.querySelector("main.app"),i=s==null?void 0:s.querySelector(".header");if(!s||!i)return;let o=i.parentElement,l=0;for(;o&&o!==document.body;){const u=getComputedStyle(o),c=parseFloat(u.paddingTop)||0;if(c){l=c;break}o=o.parentElement}i.style.marginTop=-l+"px"};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r(),window.addEventListener("resize",r,{passive:!0})})();(function(){const e="legends-select-fix-v2";let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.head.appendChild(n)),n.textContent=`
  /* ラッパーにだけ枠を出す（番号と同じ枠/角丸/高さ） */
  .select-wrap{
    position:relative; display:inline-flex; align-items:center; justify-content:center;
    width:${Ft}px !important; min-width:${Ft}px !important; max-width:${Ft}px !important;
    height:var(--ctrl-h) !important;
    background:#fff !important;
    border:1px solid #d1d5db !important;
    border-radius:var(--radius-ctrl) !important;
    box-shadow:none !important;
    overflow:visible !important;
  }
  .select-wrap::after{
    content:""; position:absolute; pointer-events:none;
    right:6px; top:50%; transform:translateY(-35%);
    width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:6px solid #55667a;
  }
  /* select 本体は枠なし・高さは枠の内側にピッタリ */
  .select-wrap > select{
    display:block !important;
    width:100% !important;
    height:calc(var(--ctrl-h) - 2px) !important;  /* 枠線(1px×上下)ぶんを内側で相殺 */
    margin:0 !important;
    padding:0 24px 0 10px !important;            /* 右は▼の余白 */
    border:0 !important;
    background:transparent !important;
    background-image:none !important;
    box-shadow:none !important;
    outline:none !important;
    appearance:none !important; -webkit-appearance:none !important; -moz-appearance:none !important;
    box-sizing:border-box !important;
    font-size:16px !important;
    line-height:calc(var(--ctrl-h) - 2px) !important;
    text-align:center !important;
    text-align-last:center !important;           /* 表示も中央寄せ */
  }
  .select-wrap > select:focus,
  .select-wrap > select:focus-visible{
    box-shadow:none !important;
    outline:none !important;
  }
  `})();(function(){const e=Ft,n=(s=document)=>{s.querySelectorAll(".select-wrap select").forEach(i=>{i.style.width!==`${e}px`&&i.style.setProperty("width",e+"px","important"),i.style.maxWidth!==`${e}px`&&i.style.setProperty("max-width",e+"px","important"),i.style.minWidth!=="0px"&&i.style.setProperty("min-width","0","important"),i.style.height!=="var(--ctrl-h)"&&i.style.setProperty("height","var(--ctrl-h)","important")}),s.querySelectorAll(".select-wrap").forEach(i=>{i.style.width!==`${e}px`&&i.style.setProperty("width",e+"px","important"),i.style.maxWidth!==`${e}px`&&i.style.setProperty("max-width",e+"px","important"),i.style.minWidth!==`${e}px`&&i.style.setProperty("min-width",e+"px","important"),i.style.height!=="var(--ctrl-h)"&&i.style.setProperty("height","var(--ctrl-h)","important")})},r=()=>n();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r,{once:!0}):r(),new MutationObserver(s=>{for(const i of s)i.addedNodes.forEach(o=>{o instanceof HTMLElement&&n(o)})}).observe(document.body,{subtree:!0,childList:!0})})();(function(){const e=()=>{const n="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover";let r=document.querySelector('meta[name="viewport"]');r||(r=document.createElement("meta"),r.setAttribute("name","viewport"),document.head.appendChild(r)),r.setAttribute("content",n)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e,{once:!0}):e()})();const QD=document.getElementById("root");HE(QD).render(g.jsx(BD,{}));
