import{c as v,a as l,h as o,b as d,a1 as R,a2 as S,r as q,$,u as K,d as D,g as k}from"./index.53143171.js";import{u as _,a as h}from"./use-dark.efb5c460.js";var N=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=l(()=>parseInt(e.lines,10)),u=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),i=l(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>o("div",{style:i.value,class:u.value},d(n.default))}}),T=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:a.value},d(n.default))}}),A=v({name:"QItem",props:{..._,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:u}}=k(),i=h(e,u),{hasRouterLink:y,hasLink:m,linkProps:g,linkClass:B,linkTag:L,navigateToRouterLink:x}=S(),r=q(null),c=q(null),b=l(()=>e.clickable===!0||m.value===!0||e.tag==="label"),s=l(()=>e.disable!==!0&&b.value===!0),C=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?B.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),Q=l(()=>{if(e.insetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function w(t){s.value===!0&&(c.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),y.value===!0&&x(t),a("click",t))}function I(t){if(s.value===!0&&$(t,13)===!0){K(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,r.value.dispatchEvent(f)}a("keyup",t)}function E(){const t=D(n.default,[]);return s.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),t}return()=>{const t={ref:r,class:C.value,style:Q.value,onClick:w,onKeyup:I};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,g.value)):b.value===!0&&(t["aria-disabled"]="true"),o(L.value,t,E())}}}),F=v({name:"QList",props:{..._,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:n}){const a=k(),u=h(e,a.proxy.$q),i=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o("div",{class:i.value},d(n.default))}});export{N as Q,T as a,A as b,F as c};
