import{Q as _}from"./QImg.ae13762b.js";import{Q as l}from"./QSeparator.b1bf199b.js";import{Q as h}from"./QSpace.66f19284.js";import{u as b,q,a as p,x as r,y as g,z as d,au as Q,X as k,D as t,B as o,Y as C,Z as j,_ as c,G as B,$ as z,E as n,Q as S}from"./index.a2b03e35.js";import{Q as x}from"./QCard.f8756602.js";import{Q as P}from"./QPage.6e7da592.js";import"./use-dark.dbe5cfd8.js";const F={class:"container"},N={class:"row q-mb-lg-xl"},$={class:"col-12"},D=t("div",{class:"text-h5 text-weight-medium q-my-md"},"\u8CFC\u7269\u8ECA",-1),E={class:"col-12 col-lg-8 q-pr-none q-pr-lg-md"},G=t("div",{class:"text-h5 text-weight-medium"},"\u5546\u54C1\u8CC7\u8A0A",-1),I={class:"row"},V={class:"col-7 column q-ml-xs q-ml-lg-md"},A={class:"text-h6 over-2line"},L={class:"text-subtitle1 text-weight-medium"},T={class:"text-subtitle1 text-weight-medium over-1line"},U={class:"text-subtitle1 text-weight-medium"},X={class:"col column items-end"},Y={class:"text-subtitle1 text-weight-medium"},Z={class:"col-12 col-lg-4"},H={class:"row justify-between"},J=t("div",{class:"text-subtitle1 text-weight-medium"},"\u7E3D\u91D1\u984D",-1),K={class:"text-subtitle1 text-weight-regular"},M={class:"row justify-between"},O=t("div",{class:"text-subtitle1 text-weight-medium"},"\u5546\u54C1\u91D1\u984D",-1),R={class:"text-subtitle1 text-weight-regular"},W=t("div",{class:"row justify-between"},[t("div",{class:"text-subtitle1 text-weight-medium"},"\u904B\u8CBB"),t("div",{class:"text-subtitle1 text-weight-regular"},"80")],-1),tt={class:"row justify-between"},st=t("div",{class:"text-subtitle1 text-weight-medium"},"\u7E3D\u91D1\u984D",-1),et={class:"text-subtitle1 text-weight-regular"},mt={__name:"CartPage",setup(ot){const v=b(),i=q([]),w=p(()=>i.reduce((a,e)=>a+e.product.price*e.quantity,0)),u=p(()=>{const s=i.reduce((a,e)=>a+e.product.price*e.quantity,0);return s===0?0:s>=1500?s:s+80}),f=async s=>{await v.deleteCart({product:i[s].product._id,color:i[s].color,size:i[s].size}),m()},m=async()=>{try{const{data:s}=await Q.get("/users/cart");i.splice(0,i.length),i.push(...s.result)}catch(s){console.log(s),k.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}};return m(),(s,a)=>(r(),g(P,null,{default:d(()=>[t("section",F,[t("div",N,[t("div",$,[o(_,{src:"https://i.imgur.com/hFiccGF.jpg",class:"pointer object-top",ratio:7/1}),D,o(l,{class:"q-my-sm"})]),t("div",E,[G,(r(!0),C(z,null,j(i,(e,y)=>(r(),g(x,{flat:"",class:"q-my-md",key:e._id},{default:d(()=>[t("div",I,[o(_,{class:"col-2 col-sm-3",src:e.product.image[0]},null,8,["src"]),t("div",V,[t("div",A,c(e.product.name),1),o(h),t("div",L,"\u5546\u54C1\u5C3A\u5BF8:"+c(e.size),1),t("div",T,"\u5546\u54C1\u984F\u8272:"+c(e.color),1),t("div",U,"\u6578\u91CF:"+c(e.quantity),1)]),t("div",X,[t("div",null,[o(B,{name:"fa-solid fa-x",size:"sm",class:"pointer",onClick:it=>f(y)},null,8,["onClick"])]),o(h),t("div",Y,"NT$:"+c(e.product.price*e.quantity),1)])]),o(l,{class:"q-my-md"})]),_:2},1024))),128))]),t("div",Z,[o(x,{flat:"",square:"",class:"column bg-grey-2 q-pa-md q-mb-md q-mt-sm"},{default:d(()=>[t("div",H,[J,t("div",K,c(n(u)),1)]),o(l,{class:"q-my-md"}),t("div",M,[O,t("div",R,c(n(w)),1)]),W,o(l,{class:"q-my-md"}),t("div",tt,[st,t("div",et,c(n(u)),1)])]),_:1}),o(S,{outline:"",color:"black",class:"full-width q-py-sm text-subtitle1 text-weight-medium",label:"\u5546\u54C1\u7D50\u5E33",to:"/place"})])])])]),_:1}))}};export{mt as default};
