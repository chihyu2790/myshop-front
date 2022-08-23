import{Q as m}from"./QCheckbox.90a3c216.js";import{c as w,aK as B,aL as $,a as y,h as A,b as U,q as c,r as v,x as p,y as V,z as t,W as q,X as S,D as n,a0 as Q,_ as g,B as l,Q as f,aM as D,Y as K,Z as N,E as P,$ as h}from"./index.a2b03e35.js";import{Q as k}from"./QCardSection.5b766b5f.js";import{Q as C}from"./QInput.4e2565b1.js";import{Q as z}from"./QCard.f8756602.js";import{Q as E}from"./QDialog.47244a69.js";import{Q as L}from"./QChip.cd3bf68f.js";import{Q as T}from"./QPage.6e7da592.js";import"./use-dark.dbe5cfd8.js";import"./option-sizes.8cfdc71b.js";import"./use-form.3b0c811f.js";import"./use-key-composition.12b6fd52.js";import"./uid.42677368.js";import"./use-timeout.89e79e2b.js";import"./use-model-toggle.09f48a42.js";import"./scroll.2858db06.js";var Y=w({name:"QCardActions",props:{...B,vertical:Boolean},setup(u,{slots:a}){const i=$(u),d=y(()=>`q-card__actions ${i.value} q-card__actions--${u.vertical===!0?"vert column":"horiz row"}`);return()=>A("div",{class:d.value},U(a.default))}});const F={class:"container"},I={class:"row"},M={class:"col"},W={class:"col"},X=n("div",{class:"text-h6"},"Your address",-1),Z={class:"col"},me={__name:"TestPage",setup(u){const a=c({color:[]}),i=c([]),d=v(""),s=v(!1),b=y(()=>d.value.split(/\s+/)),_=c({classify:"\u5973\u88DD"});return(async()=>{try{const{data:r}=await q.post("/products/genre/",_);i.push(...r.result),console.log(i)}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(r,e)=>(p(),V(T,null,{default:t(()=>[n("section",F,[n("div",I,[n("div",M,[Q(g(a.color)+" ",1),l(m,{modelValue:a.color,"onUpdate:modelValue":e[0]||(e[0]=o=>a.color=o),val:"black",color:"black"},null,8,["modelValue"]),l(m,{modelValue:a.color,"onUpdate:modelValue":e[1]||(e[1]=o=>a.color=o),val:"red",color:"red"},null,8,["modelValue"]),l(m,{modelValue:a.color,"onUpdate:modelValue":e[2]||(e[2]=o=>a.color=o),val:"grey",color:"grey"},null,8,["modelValue"])]),n("div",W,[l(f,{label:"Alert",color:"black",onClick:e[3]||(e[3]=o=>s.value=!0)}),l(E,{modelValue:s.value,"onUpdate:modelValue":e[8]||(e[8]=o=>s.value=o),persistent:""},{default:t(()=>[l(z,{style:{"min-width":"600px"}},{default:t(()=>[l(k,null,{default:t(()=>[X]),_:1}),l(k,{class:"q-pt-none"},{default:t(()=>[l(C,{modelValue:r.address,"onUpdate:modelValue":e[4]||(e[4]=o=>r.address=o),color:"black",onKeyup:e[5]||(e[5]=D(o=>s.value=!1,["enter"]))},null,8,["modelValue"])]),_:1}),l(Y,{align:"right",class:"text-black"},{default:t(()=>[l(f,{flat:"",label:"Cancel",onClick:e[6]||(e[6]=o=>s.value=!1)}),l(f,{flat:"",label:"Add address",onClick:e[7]||(e[7]=o=>s.value=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),n("div",Z,[l(C,{modelValue:d.value,"onUpdate:modelValue":e[9]||(e[9]=o=>d.value=o)},null,8,["modelValue"]),(p(!0),K(h,null,N(P(b),(o,x)=>(p(),V(L,{key:x},{default:t(()=>[Q(g(o),1)]),_:2},1024))),128))])])])]),_:1}))}};export{me as default};