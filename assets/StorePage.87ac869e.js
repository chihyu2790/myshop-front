import{b as c,a as m}from"./QTabs.bc754180.js";import{Q as _}from"./QCard.fe9dec6c.js";import{Q as u}from"./QPage.d05c5b3a.js";import{F as h,K as r,L as b,M as o,a8 as g,a9 as p,N as x,R as t,O as e,aa as n,ab as v,ac as a,ad as f}from"./index.d8b3df7e.js";import"./use-timeout.309a8458.js";import"./rtl.4b414a6d.js";import"./use-dark.8a152d4a.js";const q={class:"row lt-lg justify-center border-black bg-grey-2 q-py-xs"},w={class:"container"},y={class:"row q-mt-none q-mt-lg-xl"},k={class:"col-12 gt-md col-lg-2"},Q=t("div",{class:"text-subtitle1 q-my-lg q-pr-md"},"\u95DC\u65BC\u6211\u5011",-1),B=t("div",{class:"text-subtitle1 q-my-lg q-pr-md"},"\u5E38\u898B\u554F\u984C",-1),C=t("div",{class:"text-subtitle1 q-my-lg q-pr-md"},"\u5E97\u92EA\u4E00\u89BD",-1),N={class:"col-12 col-lg-10"},S=t("div",{class:"flex items-center text-center q-mb-xl q-mb-lg-lg q-mt-lg q-mt-lg-none"},[t("div",{class:"text-h4 text-weight-medium"},"\u5E97\u92EA\u4E00\u89BD")],-1),F={class:"row"},L={class:"text-subtitle1 text-weight-bold q-mb-lg"},P={class:"text-subtitle1 text-weight-medium"},R={class:"text-subtitle1 text-weight-medium"},T={class:"text-subtitle1 text-weight-medium"},V={class:"text-subtitle1 text-weight-medium"},I={__name:"StorePage",setup(j){const d=h([]);return(async()=>{try{const{data:l}=await g.get("/stores");d.push(...l.result)}catch{p.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(l,E)=>{const i=x("router-link");return r(),b(u,null,{default:o(()=>[t("div",q,[e(m,{"indicator-color":"red",shrink:""},{default:o(()=>[e(c,{exact:"",name:"/about",to:"/about",label:"\u95DC\u65BC\u6211\u5011"}),e(c,{exact:"",name:"/problem",to:"/problem",label:"\u5E38\u898B\u554F\u984C"}),e(c,{exact:"",name:"/store",to:"/store",label:"\u5E97\u92EA\u4E00\u89BD"})]),_:1})]),t("section",w,[t("div",y,[t("div",k,[e(i,{to:"/about"},{default:o(()=>[Q]),_:1}),e(i,{to:"/problem"},{default:o(()=>[B]),_:1}),e(i,{to:"/store"},{default:o(()=>[C]),_:1})]),t("div",N,[S,t("div",F,[(r(!0),n(f,null,v(d,s=>(r(),n("div",{class:"col-12 col-lg-6 q-pa-sm",key:s._id},[e(_,{flat:"",bordered:"",class:"q-pa-md full-height"},{default:o(()=>[t("div",L,a(s.name),1),t("div",P,a(s.phone),1),t("div",R,"\u5E97\u92EA\u4F4D\u5740: "+a(s.address),1),t("div",T,"\u71DF\u696D\u6642\u9593: "+a(s.time),1),t("div",V,"\u8CA9\u552E\u7CFB\u5217: "+a(s.sells),1)]),_:2},1024)]))),128))])])])])]),_:1})}}};export{I as default};
