var E=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var M=n=>E(n,"__esModule",{value:!0});var m=(n,i)=>{for(var o in i)E(n,o,{get:i[o],enumerable:!0})},t=(n,i,o,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let a of x(i))!c.call(n,a)&&(o||a!=="default")&&E(n,a,{get:()=>i[a],enumerable:!(e=g(i,a))||e.enumerable});return n};var p=(n=>(i,o)=>n&&n.get(i)||(o=t(M({}),i,1),n&&n.set(i,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var s={};m(s,{Extension:()=>r.Extension,ExtensionError:()=>r.MagicExtensionError,ExtensionWarning:()=>r.MagicExtensionWarning,RPCError:()=>r.MagicRPCError,SDKError:()=>r.MagicSDKError,SDKWarning:()=>r.MagicSDKWarning,isPromiEvent:()=>r.isPromiEvent});var r=require("@magic-sdk/provider");t(s,require("@magic-sdk/types"));module.exports=p(s);
//# sourceMappingURL=index.js.map