import{b as O,a as Z}from"./QTabs.36f6850d.js";import{c as A,o as V,h as n,a8 as ee,av as te,M as G,r as H,a as x,w as P,g as ie,H as oe,aw as ae,b as ne,G as D,L as se,as as le,x as re,y as ue,z as a,A as de,D as c,B as o,a0 as C}from"./index.e0af2147.js";import{Q as ce,b as $,a as N}from"./QItem.d9390d54.js";import{Q as R}from"./QSeparator.8cd11d49.js";import{u as me,a as ge}from"./use-dark.f0dbf714.js";import{u as fe,a as he,b as be}from"./use-model-toggle.cf58b817.js";import{u as ve}from"./uid.42677368.js";import{Q as k}from"./QCardSection.c193de3b.js";import{Q}from"./QCard.640219c8.js";import{Q as _e}from"./QList.f667dcfe.js";import{Q as xe}from"./QPage.507b804a.js";import"./use-timeout.4b0f408e.js";import"./rtl.4b414a6d.js";var pe=A({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:q,emit:m}){let g=!1,v,s,_,S,r,l;function u(){v&&v(),v=null,g=!1,clearTimeout(_),clearTimeout(S),s!==void 0&&s.removeEventListener("transitionend",r),r=null}function T(i,d,f){i.style.overflowY="hidden",d!==void 0&&(i.style.height=`${d}px`),i.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,g=!0,v=f}function I(i,d){i.style.overflowY=null,i.style.height=null,i.style.transition=null,u(),d!==l&&m(d)}function y(i,d){let f=0;s=i,g===!0?(u(),f=i.offsetHeight===i.scrollHeight?0:void 0):l="hide",T(i,f,d),_=setTimeout(()=>{i.style.height=`${i.scrollHeight}px`,r=h=>{(Object(h)!==h||h.target===i)&&I(i,"show")},i.addEventListener("transitionend",r),S=setTimeout(r,e.duration*1.1)},100)}function B(i,d){let f;s=i,g===!0?u():(l="show",f=i.scrollHeight),T(i,f,d),_=setTimeout(()=>{i.style.height=0,r=h=>{(Object(h)!==h||h.target===i)&&I(i,"hide")},i.addEventListener("transitionend",r),S=setTimeout(r,e.duration*1.1)},100)}return V(()=>{g===!0&&u()}),()=>n(ee,{css:!1,appear:e.appear,onEnter:y,onLeave:B},q.default)}});const p=te({}),qe=Object.keys(G);var w=A({name:"QExpansionItem",props:{...G,...fe,...me,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...he,"click","after-show","after-hide"],setup(e,{slots:q,emit:m}){const{proxy:{$q:g}}=ie(),v=ge(e,g),s=H(e.modelValue!==null?e.modelValue:e.defaultOpened),_=H(null),{hide:S,toggle:r}=be({showing:s});let l,u;const T=x(()=>`q-expansion-item q-item-type q-expansion-item--${s.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),I=x(()=>{if(e.contentInsetLevel===void 0)return null;const t=g.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),y=x(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),B=x(()=>{const t={};return qe.forEach(b=>{t[b]=e[b]}),t}),i=x(()=>y.value===!0||e.expandIconToggle!==!0),d=x(()=>e.expandedIcon!==void 0&&s.value===!0?e.expandedIcon:e.expandIcon||g.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),f=x(()=>e.disable!==!0&&(y.value===!0||e.expandIconToggle===!0));P(()=>e.group,t=>{u!==void 0&&u(),t!==void 0&&E()});function h(t){y.value!==!0&&r(t),m("click",t)}function M(t){t.keyCode===13&&j(t,!0)}function j(t,b){b!==!0&&_.value!==null&&_.value.focus(),r(t),se(t)}function K(){m("after-show")}function z(){m("after-hide")}function E(){l===void 0&&(l=ve()),s.value===!0&&(p[e.group]=l);const t=P(s,L=>{L===!0?p[e.group]=l:p[e.group]===l&&delete p[e.group]}),b=P(()=>p[e.group],(L,X)=>{X===l&&L!==void 0&&L!==l&&S()});u=()=>{t(),b(),p[e.group]===l&&delete p[e.group],u=void 0}}function F(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},b=[n(D,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&s.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:d.value})];return f.value===!0&&(Object.assign(t,{tabindex:0,onClick:j,onKeyup:M}),b.unshift(n("div",{ref:_,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(N,t,()=>b)}function Y(){let t;return q.header!==void 0?t=[].concat(q.header()):(t=[n(N,()=>[n($,{lines:e.labelLines},()=>e.label||""),e.caption?n($,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(N,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(D,{name:e.icon})))),e.disable!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](F()),t}function U(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:v.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return i.value===!0&&(t.clickable=!0,t.onClick=h,y.value===!0&&Object.assign(t,B.value)),n(ce,t,Y)}function J(){return oe(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:I.value},ne(q.default)),[[ae,s.value]])}function W(){const t=[U(),n(pe,{duration:e.duration,onShow:K,onHide:z},J)];return e.expandSeparator===!0&&t.push(n(R,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:v.value}),n(R,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:v.value})),t}return e.group!==void 0&&E(),V(()=>{u!==void 0&&u()}),()=>n("div",{class:T.value},[n("div",{class:"q-expansion-item__container relative-position"},W())])}});const ye={},Se={class:"row lt-lg justify-center border-black bg-grey-2 q-py-xs"},we={class:"container"},Te={class:"row q-mt-none q-mt-lg-xl"},Ie={class:"col-12 gt-md col-lg-2"},Le=c("div",{class:"text-subtitle1 q-my-lg"},"\u95DC\u65BC\u6211\u5011",-1),ke=c("div",{class:"text-subtitle1 q-my-lg"},"\u5E38\u898B\u554F\u984C",-1),Qe=c("div",{class:"text-subtitle1 q-my-lg"},"\u5E97\u92EA\u4E00\u89BD",-1),Ce={class:"col-12 col-lg-10"},Be=c("div",{class:"flex items-center text-center q-mb-xl q-mb-lg-lg q-mt-lg q-mt-lg-none"},[c("div",{class:"text-h4 text-weight-medium"},"\u5E38\u898B\u554F\u984C")],-1),Oe=C(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. "),Pe=C(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. "),Ne=C(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. "),je=C(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. ");function Ee(e,q){const m=de("router-link");return re(),ue(xe,{id:"problemPage"},{default:a(()=>[c("div",Se,[o(Z,{"indicator-color":"red",shrink:""},{default:a(()=>[o(O,{exact:"",name:"/about",to:"/about",label:"\u95DC\u65BC\u6211\u5011"}),o(O,{exact:"",name:"/problem",to:"/problem",label:"\u5E38\u898B\u554F\u984C"}),o(O,{exact:"",name:"/store",to:"/store",label:"\u5E97\u92EA\u4E00\u89BD"})]),_:1})]),c("section",we,[c("div",Te,[c("div",Ie,[o(m,{to:"/about"},{default:a(()=>[Le]),_:1}),o(m,{to:"/"},{default:a(()=>[ke]),_:1}),o(m,{to:"/store"},{default:a(()=>[Qe]),_:1})]),c("div",Ce,[Be,c("div",null,[o(_e,{bordered:""},{default:a(()=>[o(w,{label:"\u5206\u985E\u641C\u7D22\u554F\u984C","header-class":"text-h5 text-weight-medium bg-grey-2 q-py-lg","expand-icon-class":"text-white"}),o(w,{"expand-separator":"","header-class":"text-h5 text-weight-medium q-py-lg",label:"\u7DB2\u8DEF\u5546\u5E97\u8A02\u55AE\u53CA\u76F8\u95DC\u554F\u984C"},{default:a(()=>[o(Q,null,{default:a(()=>[o(k,null,{default:a(()=>[Oe]),_:1})]),_:1})]),_:1}),o(w,{"expand-separator":"","header-class":"text-h5 text-weight-medium q-py-lg",label:"\u5BE6\u9AD4\u9580\u5E02\u4F4D\u7F6E\u53CA\u76F8\u95DC\u554F\u984C"},{default:a(()=>[o(Q,null,{default:a(()=>[o(k,null,{default:a(()=>[Pe]),_:1})]),_:1})]),_:1}),o(w,{"expand-separator":"","header-class":"text-h5 text-weight-medium",label:"Drafts"},{default:a(()=>[o(Q,null,{default:a(()=>[o(k,null,{default:a(()=>[Ne]),_:1})]),_:1})]),_:1}),o(w,{label:"Disabled"},{default:a(()=>[o(Q,null,{default:a(()=>[o(k,null,{default:a(()=>[je]),_:1})]),_:1})]),_:1})]),_:1})])])])])]),_:1})}var Je=le(ye,[["render",Ee]]);export{Je as default};
