import{w as M,af as T,k as U,g as x,O as g}from"./index.0d4fdb09.js";const A={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},H=["before-show","show","before-hide","hide"];function P({showing:o,canShow:s,hideOnRouteChange:f,handleShow:i,handleHide:d,processOnMount:h}){const n=x(),{props:l,emit:u,proxy:c}=n;let a;function y(e){o.value===!0?r(e):p(e)}function p(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const t=l["onUpdate:modelValue"]!==void 0;t===!0&&(u("update:modelValue",!0),a=e,g(()=>{a===e&&(a=void 0)})),(l.modelValue===null||t===!1)&&m(e)}function m(e){o.value!==!0&&(o.value=!0,u("before-show",e),i!==void 0?i(e):u("show",e))}function r(e){if(l.disable===!0)return;const t=l["onUpdate:modelValue"]!==void 0;t===!0&&(u("update:modelValue",!1),a=e,g(()=>{a===e&&(a=void 0)})),(l.modelValue===null||t===!1)&&V(e)}function V(e){o.value!==!1&&(o.value=!1,u("before-hide",e),d!==void 0?d(e):u("hide",e))}function b(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):e===!0!==o.value&&(e===!0?m:V)(a)}M(()=>l.modelValue,b),f!==void 0&&T(n)===!0&&M(()=>c.$route.fullPath,()=>{f.value===!0&&o.value===!0&&r()}),h===!0&&U(()=>{b(l.modelValue)});const v={show:p,hide:r,toggle:y};return Object.assign(c,v),v}export{H as a,P as b,A as u};