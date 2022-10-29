!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact"),require("preact/hooks")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks"],t):t((n||self).preactCompat={},n.preact,n.preactHooks)}(this,function(n,t,e){function r(n,t){for(var e in t)n[e]=t[e];return n}function u(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function i(n){this.props=n}function o(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:u(this.props,n)}function i(e){return this.shouldComponentUpdate=r,t.createElement(n,e)}return i.displayName="Memo("+(n.displayName||n.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(i.prototype=new t.Component).isPureReactComponent=!0,i.prototype.shouldComponentUpdate=function(n,t){return u(this.props,n)||u(this.state,t)};var c=t.options.__b;t.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),c&&c(n)};var f="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function l(n){function t(t){var e=r({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=f,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var a=function(n,e){return null==n?null:t.toChildArray(t.toChildArray(n).map(e))},s={map:a,forEach:a,count:function(n){return n?t.toChildArray(n).length:0},only:function(n){var e=t.toChildArray(n);if(1!==e.length)throw"Children.only";return e[0]},toArray:t.toChildArray},h=t.options.__e;t.options.__e=function(n,t,e,r){if(n.then)for(var u,i=t;i=i.__;)if((u=i.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);h(n,t,e,r)};var d=t.options.unmount;function v(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=r({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return v(n,t,e)})),n}function p(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return p(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function m(){this.__u=0,this.t=null,this.__b=null}function b(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function y(n){var e,r,u;function i(i){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return t.createElement(r,i)}return i.displayName="Lazy",i.__f=!0,i}function _(){this.u=null,this.i=null}t.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),d&&d(n)},(m.prototype=new t.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=b(r.__v),i=!1,o=function(){i||(i=!0,e.__R=null,u?u(c):c())};e.__R=o;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=p(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(o,o)},m.prototype.componentWillUnmount=function(){this.t=[]},m.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),u=this.__v.__k[0].__c;this.__v.__k[0]=v(this.__b,r,u.__O=u.__P)}this.__b=null}var i=e.__a&&t.createElement(t.Fragment,null,n.fallback);return i&&(i.__h=null),[t.createElement(t.Fragment,null,e.__a?null:n.children),i]};var g=function(n,t,e){if(++e[1]===e[0]&&n.i.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.i.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function S(n){return this.getChildContext=function(){return n.context},n.children}function C(n){var e=this,r=n.o;e.componentWillUnmount=function(){t.render(null,e.l),e.l=null,e.o=null},e.o&&e.o!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.o=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.o.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.o.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.o.removeChild(n)}}),t.render(t.createElement(S,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function E(n,e){var r=t.createElement(C,{__v:n,o:e});return r.containerInfo=e,r}(_.prototype=new t.Component).__a=function(n){var t=this,e=b(t.__v),r=t.i.get(n);return r[0]++,function(u){var i=function(){t.props.revealOrder?(r.push(u),g(t,n,r)):u()};e?e(i):i()}},_.prototype.render=function(n){this.u=null,this.i=new Map;var e=t.toChildArray(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.i.set(e[r],this.u=[1,0,this.u]);return n.children},_.prototype.componentDidUpdate=_.prototype.componentDidMount=function(){var n=this;this.i.forEach(function(t,e){g(n,e,t)})};var O="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,w=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,R="undefined"!=typeof document,x=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function j(n,e,r){return null==e.__k&&(e.textContent=""),t.render(n,e),"function"==typeof r&&r(),n?n.__c:null}function N(n,e,r){return t.hydrate(n,e),"function"==typeof r&&r(),n?n.__c:null}t.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(t.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var T=t.options.event;function k(){}function A(){return this.cancelBubble}function I(){return this.defaultPrevented}t.options.event=function(n){return T&&(n=T(n)),n.persist=k,n.isPropagationStopped=A,n.isDefaultPrevented=I,n.nativeEvent=n};var L,U={configurable:!0,get:function(){return this.class}},D=t.options.vnode;t.options.vnode=function(n){var e=n.type,r=n.props,u=r;if("string"==typeof e){var i=-1===e.indexOf("-");for(var o in u={},r){var c=r[o];R&&"children"===o&&"noscript"===e||"value"===o&&"defaultValue"in r&&null==c||("defaultValue"===o&&"value"in r&&null==r.value?o="value":"download"===o&&!0===c?c="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!x(r.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&w.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===c&&(c=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),u[o]&&(o="oninputCapture")),u[o]=c)}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=t.toChildArray(r.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=t.toChildArray(r.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),n.props=u,r.class!=r.className&&(U.enumerable="className"in r,null!=r.className&&(u.class=r.className),Object.defineProperty(u,"className",U))}n.$$typeof=O,D&&D(n)};var F=t.options.__r;t.options.__r=function(n){F&&F(n),L=n.__c};var M={ReactCurrentDispatcher:{current:{readContext:function(n){return L.__n[n.__c].props.value}}}},V="17.0.2";function W(n){return t.createElement.bind(null,n)}function P(n){return!!n&&n.$$typeof===O}function $(n){return P(n)?t.cloneElement.apply(null,arguments):n}function z(n){return!!n.__k&&(t.render(null,n),!0)}function B(n){return n&&(n.base||1===n.nodeType&&n)||null}var q=function(n,t){return n(t)},H=function(n,t){return n(t)},Z=t.Fragment;function Y(n){n()}function G(n){return n}function J(){return[!1,Y]}var K=e.useLayoutEffect;function Q(n,t){var r=t(),u=e.useState({h:{__:r,v:t}}),i=u[0].h,o=u[1];return e.useLayoutEffect(function(){i.__=r,i.v=t,i.__!==t()&&o({h:i})},[n,r,t]),e.useEffect(function(){return i.__!==i.v()&&o({h:i}),n(function(){i.__!==i.v()&&o({h:i})})},[n]),r}var X={useState:e.useState,useId:e.useId,useReducer:e.useReducer,useEffect:e.useEffect,useLayoutEffect:e.useLayoutEffect,useInsertionEffect:K,useTransition:J,useDeferredValue:G,useSyncExternalStore:Q,startTransition:Y,useRef:e.useRef,useImperativeHandle:e.useImperativeHandle,useMemo:e.useMemo,useCallback:e.useCallback,useContext:e.useContext,useDebugValue:e.useDebugValue,version:V,Children:s,render:j,hydrate:N,unmountComponentAtNode:z,createPortal:E,createElement:t.createElement,createContext:t.createContext,createFactory:W,cloneElement:$,createRef:t.createRef,Fragment:t.Fragment,isValidElement:P,findDOMNode:B,Component:t.Component,PureComponent:i,memo:o,forwardRef:l,flushSync:H,unstable_batchedUpdates:q,StrictMode:Z,Suspense:m,SuspenseList:_,lazy:y,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M};Object.defineProperty(n,"Component",{enumerable:!0,get:function(){return t.Component}}),Object.defineProperty(n,"Fragment",{enumerable:!0,get:function(){return t.Fragment}}),Object.defineProperty(n,"createContext",{enumerable:!0,get:function(){return t.createContext}}),Object.defineProperty(n,"createElement",{enumerable:!0,get:function(){return t.createElement}}),Object.defineProperty(n,"createRef",{enumerable:!0,get:function(){return t.createRef}}),n.Children=s,n.PureComponent=i,n.StrictMode=Z,n.Suspense=m,n.SuspenseList=_,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.cloneElement=$,n.createFactory=W,n.createPortal=E,n.default=X,n.findDOMNode=B,n.flushSync=H,n.forwardRef=l,n.hydrate=N,n.isValidElement=P,n.lazy=y,n.memo=o,n.render=j,n.startTransition=Y,n.unmountComponentAtNode=z,n.unstable_batchedUpdates=q,n.useDeferredValue=G,n.useInsertionEffect=K,n.useSyncExternalStore=Q,n.useTransition=J,n.version=V,Object.keys(e).forEach(function(t){"default"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})});
//# sourceMappingURL=compat.umd.js.map