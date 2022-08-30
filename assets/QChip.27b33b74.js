import{c as C,aq as _,ar as x,a as l,z as y,h as i,Y as o,as as B,Z as R,u as z,g as I}from"./index.eea27d61.js";import{u as w,a as D}from"./use-dark.a2cfe63f.js";const Q={xs:8,sm:10,md:14,lg:20,xl:24};var $=C({name:"QChip",props:{...w,..._,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:d,emit:a}){const{proxy:{$q:n}}=I(),h=D(e,n),v=x(e,Q),b=l(()=>e.selected===!0||e.icon!==void 0),m=l(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),f=l(()=>e.iconRemove||n.iconSet.chip.remove),c=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),q=l(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(h.value===!0?" q-chip--dark q-dark":"")}),u=l(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function g(t){t.keyCode===13&&s(t)}function s(t){e.disable||(a("update:selected",!e.selected),a("click",t))}function r(t){(t.keyCode===void 0||t.keyCode===13)&&(z(t),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function S(){const t=[];c.value===!0&&t.push(i("div",{class:"q-focus-helper"})),b.value===!0&&t.push(i(o,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const k=e.label!==void 0?[i("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(i("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},B(d.default,k))),e.iconRight&&t.push(i(o,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(i(o,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:f.value,...u.value,onClick:r,onKeyup:r})),t}return()=>{if(e.modelValue===!1)return;const t={class:q.value,style:v.value};return c.value===!0&&Object.assign(t,u.value,{onClick:s,onKeyup:g}),y("div",t,S(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[R,e.ripple]])}}});export{$ as Q};