import{Q as m}from"./QImg.48281946.js";import{Q as a}from"./QSeparator.b4ec3817.js";import{Q as _}from"./QSpace.cea86bf3.js";import{u as y,q as b,a as h,x as r,y as p,z as d,au as q,X as Q,D as t,B as o,Y as k,Z as C,_ as c,G as j,$ as B,E as n,Q as z}from"./index.e2a6403e.js";import{Q as g}from"./QCard.9fb0c437.js";import{Q as S}from"./QPage.83a53fdc.js";import"./use-dark.fc16fcef.js";const P={class:"container"},F={class:"row q-mb-lg-xl"},N={class:"col-12"},$=t("div",{class:"text-h5 text-weight-medium q-my-md"},"\u8CFC\u7269\u8ECA",-1),D={class:"col-12 col-lg-8 q-pr-none q-pr-lg-md"},E=t("div",{class:"text-h5 text-weight-medium"},"\u5546\u54C1\u8CC7\u8A0A",-1),G={class:"row"},I={class:"col-7 column q-ml-xs q-ml-lg-md"},V={class:"text-h6 over-2line"},A={class:"text-subtitle1 text-weight-medium"},L={class:"text-subtitle1 text-weight-medium over-1line"},T={class:"text-subtitle1 text-weight-medium"},U={class:"col column items-end"},X={class:"text-subtitle1 text-weight-medium"},Y={class:"col-12 col-lg-4"},Z={class:"row justify-between"},H=t("div",{class:"text-subtitle1 text-weight-medium"},"\u7E3D\u91D1\u984D",-1),J={class:"text-subtitle1 text-weight-regular"},K={class:"row justify-between"},M=t("div",{class:"text-subtitle1 text-weight-medium"},"\u5546\u54C1\u91D1\u984D",-1),O={class:"text-subtitle1 text-weight-regular"},R=t("div",{class:"row justify-between"},[t("div",{class:"text-subtitle1 text-weight-medium"},"\u904B\u8CBB"),t("div",{class:"text-subtitle1 text-weight-regular"},"80")],-1),W={class:"row justify-between"},tt=t("div",{class:"text-subtitle1 text-weight-medium"},"\u7E3D\u91D1\u984D",-1),st={class:"text-subtitle1 text-weight-regular"},mt={__name:"CartPage",setup(et){const x=y(),i=b([]),v=h(()=>i.reduce((l,e)=>l+e.product.price*e.quantity,0)),u=h(()=>{const s=i.reduce((l,e)=>l+e.product.price*e.quantity,0);return s===0?0:s>=1500?s:s+80}),w=async s=>{await x.deleteCart({product:i[s].product._id,color:i[s].color,size:i[s].size})};return(async()=>{try{const{data:s}=await q.get("/users/cart");i.splice(0,i.length),i.push(...s.result),console.log(i)}catch(s){console.log(s),Q.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(s,l)=>(r(),p(S,null,{default:d(()=>[t("section",P,[t("div",F,[t("div",N,[o(m,{src:"https://i.imgur.com/hFiccGF.jpg",class:"pointer object-top",ratio:7/1}),$,o(a,{class:"q-my-sm"})]),t("div",D,[E,(r(!0),k(B,null,C(i,(e,f)=>(r(),p(g,{flat:"",class:"q-my-md",key:e._id},{default:d(()=>[t("div",G,[o(m,{class:"col-2 col-sm-3",src:e.product.image[0]},null,8,["src"]),t("div",I,[t("div",V,c(e.product.name),1),o(_),t("div",A,"\u5546\u54C1\u5C3A\u5BF8:"+c(e.size),1),t("div",L,"\u5546\u54C1\u984F\u8272:"+c(e.color),1),t("div",T,"\u6578\u91CF:"+c(e.quantity),1)]),t("div",U,[t("div",null,[o(j,{name:"fa-solid fa-x",size:"sm",class:"pointer",onClick:it=>w(f)},null,8,["onClick"])]),o(_),t("div",X,"NT$:"+c(e.product.price*e.quantity),1)])]),o(a,{class:"q-my-md"})]),_:2},1024))),128))]),t("div",Y,[o(g,{flat:"",square:"",class:"column bg-grey-2 q-pa-md q-mb-md q-mt-sm"},{default:d(()=>[t("div",Z,[H,t("div",J,c(n(u)),1)]),o(a,{class:"q-my-md"}),t("div",K,[M,t("div",O,c(n(v)),1)]),R,o(a,{class:"q-my-md"}),t("div",W,[tt,t("div",st,c(n(u)),1)])]),_:1}),o(z,{outline:"",color:"black",class:"full-width q-py-sm text-subtitle1 text-weight-medium",label:"\u5546\u54C1\u7D50\u5E33",to:"/place"})])])])]),_:1}))}};export{mt as default};
