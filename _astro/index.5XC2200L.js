var b={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),V=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),F=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function p(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||C}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=p.prototype;function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||C}var S=v.prototype=new O;S.constructor=v;x(S,p.prototype);S.isPureReactComponent=!0;var R=Array.isArray,g=Object.prototype.hasOwnProperty,E={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var o,u={},f=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(f=""+t.key),t)g.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+2];u.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)u[o]===void 0&&(u[o]=i[o]);return{$$typeof:y,type:e,key:f,ref:s,props:u,_owner:E.current}}function H(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function W(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $=/\/+/g;function m(e,t){return typeof e=="object"&&e!==null&&e.key!=null?W(""+e.key):t.toString(36)}function _(e,t,n,o,u){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(f){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case y:case V:s=!0}}if(s)return s=e,u=u(s),e=o===""?"."+m(s,0):o,R(u)?(n="",e!=null&&(n=e.replace($,"$&/")+"/"),_(u,t,n,"",function(a){return a})):u!=null&&(k(u)&&(u=H(u,n+(!u.key||s&&s.key===u.key?"":(""+u.key).replace($,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=o===""?".":o+":",R(e))for(var i=0;i<e.length;i++){f=e[i];var c=o+m(f,i);s+=_(f,t,n,c,u)}else if(c=B(e),typeof c=="function")for(e=c.call(e),i=0;!(f=e.next()).done;)f=f.value,c=o+m(f,i++),s+=_(f,t,n,c,u);else if(f==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function d(e,t,n){if(e==null)return e;var o=[],u=0;return _(e,o,"","",function(f){return t.call(n,f,u++)}),o}function G(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},h={transition:null},J={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:E};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=A;r.Profiler=U;r.PureComponent=v;r.StrictMode=D;r.Suspense=M;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J;r.act=T;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x({},e.props),u=e.key,f=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(f=t.ref,s=E.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)g.call(t,c)&&!P.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var a=0;a<c;a++)i[a]=arguments[a+2];o.children=i}return{$$typeof:y,type:e.type,key:u,ref:f,props:o,_owner:s}};r.createContext=function(e){return e={$$typeof:F,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q,_context:e},e.Consumer=e};r.createElement=I;r.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:L,render:e}};r.isValidElement=k;r.lazy=function(e){return{$$typeof:z,_payload:{_status:-1,_result:e},_init:G}};r.memo=function(e,t){return{$$typeof:N,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};r.unstable_act=T;r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.3.1";b.exports=r;var K=b.exports;export{K as r};