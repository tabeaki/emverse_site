var n=require("preact"),t=require("preact/hooks");function e(n,t){for(var e in t)n[e]=t[e];return n}function r(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function u(n){this.props=n}function o(t,e){function u(n){var t=this.props.ref,u=t==n.ref;return!u&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!u:r(this.props,n)}function o(e){return this.shouldComponentUpdate=u,n.createElement(t,e)}return o.displayName="Memo("+(t.displayName||t.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(u.prototype=new n.Component).isPureReactComponent=!0,u.prototype.shouldComponentUpdate=function(n,t){return r(this.props,n)||r(this.state,t)};var i=n.options.__b;n.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),i&&i(n)};var c="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function l(n){function t(t){var r=e({},t);return delete r.ref,n(r,t.ref||null)}return t.$$typeof=c,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var f=function(t,e){return null==t?null:n.toChildArray(n.toChildArray(t).map(e))},a={map:f,forEach:f,count:function(t){return t?n.toChildArray(t).length:0},only:function(t){var e=n.toChildArray(t);if(1!==e.length)throw"Children.only";return e[0]},toArray:n.toChildArray},s=n.options.__e;n.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);s(n,t,e,r)};var p=n.options.unmount;function h(n,t,r){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=e({},n)).__c&&(n.__c.__P===r&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return h(n,t,r)})),n}function v(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return v(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function d(){this.__u=0,this.t=null,this.__b=null}function m(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function x(t){var e,r,u;function o(o){if(e||(e=t()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return n.createElement(r,o)}return o.displayName="Lazy",o.__f=!0,o}function b(){this.u=null,this.o=null}n.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),p&&p(n)},(d.prototype=new n.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=m(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c())};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=v(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),u=this.__v.__k[0].__c;this.__v.__k[0]=h(this.__b,r,u.__O=u.__P)}this.__b=null}var o=e.__a&&n.createElement(n.Fragment,null,t.fallback);return o&&(o.__h=null),[n.createElement(n.Fragment,null,e.__a?null:t.children),o]};var _=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function y(n){return this.getChildContext=function(){return n.context},n.children}function g(t){var e=this,r=t.i;e.componentWillUnmount=function(){n.render(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),t.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),n.render(n.createElement(y,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function S(t,e){var r=n.createElement(g,{__v:t,i:e});return r.containerInfo=e,r}(b.prototype=new n.Component).__a=function(n){var t=this,e=m(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),_(t,n,r)):u()};e?e(o):o()}},b.prototype.render=function(t){this.u=null,this.o=new Map;var e=n.toChildArray(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return t.children},b.prototype.componentDidUpdate=b.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){_(n,e,t)})};var C="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,E=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,O="undefined"!=typeof document,w=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function R(t,e,r){return null==e.__k&&(e.textContent=""),n.render(t,e),"function"==typeof r&&r(),t?t.__c:null}function j(t,e,r){return n.hydrate(t,e),"function"==typeof r&&r(),t?t.__c:null}n.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(n.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var N=n.options.event;function k(){}function A(){return this.cancelBubble}function T(){return this.defaultPrevented}n.options.event=function(n){return N&&(n=N(n)),n.persist=k,n.isPropagationStopped=A,n.isDefaultPrevented=T,n.nativeEvent=n};var I,L={configurable:!0,get:function(){return this.class}},U=n.options.vnode;n.options.vnode=function(t){var e=t.type,r=t.props,u=r;if("string"==typeof e){var o=-1===e.indexOf("-");for(var i in u={},r){var c=r[i];O&&"children"===i&&"noscript"===e||"value"===i&&"defaultValue"in r&&null==c||("defaultValue"===i&&"value"in r&&null==r.value?i="value":"download"===i&&!0===c?c="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!w(r.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&E.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===c&&(c=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=c)}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=n.toChildArray(r.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=n.toChildArray(r.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.props=u,r.class!=r.className&&(L.enumerable="className"in r,null!=r.className&&(u.class=r.className),Object.defineProperty(u,"className",L))}t.$$typeof=C,U&&U(t)};var D=n.options.__r;n.options.__r=function(n){D&&D(n),I=n.__c};var F={ReactCurrentDispatcher:{current:{readContext:function(n){return I.__n[n.__c].props.value}}}};function M(t){return n.createElement.bind(null,t)}function V(n){return!!n&&n.$$typeof===C}function W(t){return V(t)?n.cloneElement.apply(null,arguments):t}function P(t){return!!t.__k&&(n.render(null,t),!0)}function $(n){return n&&(n.base||1===n.nodeType&&n)||null}var z=function(n,t){return n(t)},B=function(n,t){return n(t)},q=n.Fragment;function H(n){n()}function Z(n){return n}function Y(){return[!1,H]}var G=t.useLayoutEffect;function J(n,e){var r=e(),u=t.useState({p:{__:r,h:e}}),o=u[0].p,i=u[1];return t.useLayoutEffect(function(){o.__=r,o.h=e,o.__!==e()&&i({p:o})},[n,r,e]),t.useEffect(function(){return o.__!==o.h()&&i({p:o}),n(function(){o.__!==o.h()&&i({p:o})})},[n]),r}var K={useState:t.useState,useId:t.useId,useReducer:t.useReducer,useEffect:t.useEffect,useLayoutEffect:t.useLayoutEffect,useInsertionEffect:G,useTransition:Y,useDeferredValue:Z,useSyncExternalStore:J,startTransition:H,useRef:t.useRef,useImperativeHandle:t.useImperativeHandle,useMemo:t.useMemo,useCallback:t.useCallback,useContext:t.useContext,useDebugValue:t.useDebugValue,version:"17.0.2",Children:a,render:R,hydrate:j,unmountComponentAtNode:P,createPortal:S,createElement:n.createElement,createContext:n.createContext,createFactory:M,cloneElement:W,createRef:n.createRef,Fragment:n.Fragment,isValidElement:V,findDOMNode:$,Component:n.Component,PureComponent:u,memo:o,forwardRef:l,flushSync:B,unstable_batchedUpdates:z,StrictMode:q,Suspense:d,SuspenseList:b,lazy:x,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:F};Object.defineProperty(exports,"Component",{enumerable:!0,get:function(){return n.Component}}),Object.defineProperty(exports,"Fragment",{enumerable:!0,get:function(){return n.Fragment}}),Object.defineProperty(exports,"createContext",{enumerable:!0,get:function(){return n.createContext}}),Object.defineProperty(exports,"createElement",{enumerable:!0,get:function(){return n.createElement}}),Object.defineProperty(exports,"createRef",{enumerable:!0,get:function(){return n.createRef}}),exports.Children=a,exports.PureComponent=u,exports.StrictMode=q,exports.Suspense=d,exports.SuspenseList=b,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,exports.cloneElement=W,exports.createFactory=M,exports.createPortal=S,exports.default=K,exports.findDOMNode=$,exports.flushSync=B,exports.forwardRef=l,exports.hydrate=j,exports.isValidElement=V,exports.lazy=x,exports.memo=o,exports.render=R,exports.startTransition=H,exports.unmountComponentAtNode=P,exports.unstable_batchedUpdates=z,exports.useDeferredValue=Z,exports.useInsertionEffect=G,exports.useSyncExternalStore=J,exports.useTransition=Y,exports.version="17.0.2",Object.keys(t).forEach(function(n){"default"===n||exports.hasOwnProperty(n)||Object.defineProperty(exports,n,{enumerable:!0,get:function(){return t[n]}})});
//# sourceMappingURL=compat.js.map
