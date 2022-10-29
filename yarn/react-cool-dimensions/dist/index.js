"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function r(){return(r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var t=function(r){var t=e.useRef(r);return t.current=r,t},n="💡 react-cool-dimensions: the browser doesn't support Resize Observer, please use polyfill: https://github.com/wellyshen/react-cool-dimensions#resizeobserver-polyfill",o="💡 react-cool-dimensions: the browser doesn't support border-box size, fallback to content-box size. Please see: https://github.com/wellyshen/react-cool-dimensions#border-box-size-measurement";exports.borderBoxWarn=o,exports.default=function(i){var u=void 0===i?{}:i,c=u.useBorderBoxSize,s=u.breakpoints,a=u.updateOnBreakpointChange,l=u.shouldUpdate,f=u.onResize,p=u.polyfill,h=e.useState({currentBreakpoint:"",width:0,height:0}),b=h[0],d=h[1],v=e.useRef({}),w=e.useRef(),k=e.useRef(),y=e.useRef(!1),B=e.useRef(),z=t(f),g=t(l),m=e.useCallback((function(){k.current&&k.current.disconnect()}),[]),R=e.useCallback((function(e){e&&e!==B.current&&(m(),B.current=e),k.current&&B.current&&k.current.observe(B.current)}),[m]);return e.useEffect((function(){if(!("ResizeObserver"in window&&"ResizeObserverEntry"in window||p))return console.error(n),function(){return null};var e=null;return k.current=new(p||ResizeObserver)((function(r){var t=r[0];e=requestAnimationFrame((function(){var e=t.contentBoxSize,r=t.borderBoxSize,n=t.contentRect,i=e;c&&(r?i=r:y.current||(console.warn(o),y.current=!0));var u=(i=Array.isArray(i)?i[0]:i)?i.inlineSize:n.width,l=i?i.blockSize:n.height;if(u!==v.current.width||l!==v.current.height){v.current={width:u,height:l};var f,p,h,b,k={currentBreakpoint:"",width:u,height:l,entry:t,observe:R,unobserve:m};s?(k.currentBreakpoint=(f=s,p=u,h="",b=-1,Object.keys(f).forEach((function(e){var r=f[e];p>=r&&r>b&&(h=e,b=r)})),h),k.currentBreakpoint!==w.current&&(z.current&&z.current(k),w.current=k.currentBreakpoint)):z.current&&z.current(k);var B={currentBreakpoint:k.currentBreakpoint,width:u,height:l,entry:t};g.current&&!g.current(B)||(!g.current&&s&&a?d((function(e){return e.currentBreakpoint!==B.currentBreakpoint?B:e})):d(B))}}))})),R(),function(){m(),e&&cancelAnimationFrame(e)}}),[JSON.stringify(s),c,R,m,a]),r({},b,{observe:R,unobserve:m})},exports.observerErr=n;