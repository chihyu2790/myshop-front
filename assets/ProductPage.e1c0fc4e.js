import{Q as m,a as P}from"./QCarousel.9527f63b.js";import{Q as j}from"./QCard.6ba981a2.js";import{Q as V}from"./QSeparator.ad292846.js";import{Q as B}from"./QImg.10658794.js";import{Q as S}from"./QPage.b8150483.js";import{r as C,F as a,H as c,I as F,J as l,ai as n,aj as d,S as t,K as o,V as i,W as u,X as h}from"./index.9d9d3ab4.js";import{_}from"./ProductCard.dd2855ac.js";import"./use-dark.3ad12e84.js";import"./touch.70a9dd44.js";import"./selection.9b9c8800.js";import"./use-fullscreen.a02a5cb9.js";const T={class:"container"},E={class:"q-pa-0"},H={class:"row fit justify-start items-center no-wrap"},N=t("div",null,[t("div",{class:"text-h5 text-weight-bold"},"\u590F\u5B63\u65B0\u54C1\u63A8\u85A6\uFF0C\u8B93\u60A8\u7684\u7A7F\u642D\u66F4\u6709\u5C64\u6B21"),t("div",{class:"text-body1"},"\u5DE5\u4F5C\u8207\u65E5\u5E38\u90FD\u7686\u53EF\u81EA\u7531\u642D\u914D")],-1),Y={class:"row absolute-full justify-center text-center content-center lt-sm transparent-background text-shadow"},D=t("div",{class:"col-12 text-h4 q-mb-none q-mb-lg-sm text-weight-bold"},"\u590F\u5B63\u65B0\u54C1\u63A8\u85A6",-1),G={class:"col-8"},J=t("div",{class:"col-12 text-body2"},"\u8B93\u60A8\u7684\u7A7F\u642D\u66F4\u6709\u5C64\u6B21",-1),K=t("section",{class:"container"},[t("div",{class:"column q-my-xl items-center justify-center text-center"},[t("div",{class:"q-mx-md text-h2 text-weight-medium q-mb-lg"},"\u767E\u642D\u670D\u98FE"),t("div",{class:"q-mx-md text-h5 text-weight-regular q-mb-sm"},"\u8212\u9069\u6750\u8CEA\u3001\u8CBC\u5FC3\u6A5F\u80FD\u3001\u7CBE\u5FC3\u8A2D\u8A08"),t("div",{class:"q-mx-md text-h5 text-weight-regular"},"\u7D66\u4F60\u7CBE\u5FC3\u8A2D\u8A08\u7684\u7A7F\u642D\u9AD4\u9A57")])],-1),L={class:"container"},O=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"\u6240\u6709\u5546\u54C1")])],-1),U={class:"row"},W={class:"container"},X=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-sm"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"\u77ED\u7248")])])],-1),$={class:"row"},z={class:"container"},A=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-sm"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"5\u5206\u8896")])])],-1),M={class:"row"},R={class:"container"},Z=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-sm"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"\u9577\u8896")])])],-1),tt={class:"row"},ht={__name:"ProductPage",setup(st){const p=C(1),g=a([]),q=a([]),x=a([]),v=a([]),f=a([]),r=a({classify:""}),y=async()=>{try{const{data:s}=await n.get("/products");g.push(...s.result)}catch{d.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}},b=async()=>{try{r.classify="\u5973\u88DD";const{data:s}=await n.post("/products/genre/",r);q.push(...s.result),Q()}catch{d.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}},Q=async()=>{try{r.classify="\u77ED\u7248";const{data:s}=await n.post("/products/genre/",r);x.push(...s.result),k()}catch{d.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}},k=async()=>{try{r.classify="5\u5206\u8896";const{data:s}=await n.post("/products/genre/",r);v.push(...s.result),I()}catch{d.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}},I=async()=>{try{r.classify="\u9577\u8896";const{data:s}=await n.post("/products/genre/",r);f.push(...s.result)}catch{d.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}};return y(),b(),(s,w)=>(c(),F(S,{id:"productPage",class:"q-mb-xxxl"},{default:l(()=>[t("section",T,[t("div",E,[o(P,{animated:"",modelValue:p.value,"onUpdate:modelValue":w[0]||(w[0]=e=>p.value=e),swipeable:"",arrows:"",navigation:"",infinite:""},{default:l(()=>[o(m,{name:1,"img-src":"https://i.imgur.com/5eEHvYI.png"}),o(m,{name:2,"img-src":"https://i.imgur.com/Bu3DY18.png"}),o(m,{name:3,"img-src":"https://i.imgur.com/onIrrST.jpg"}),o(m,{id:"product-slide-4",name:4,class:"column no-wrap"},{default:l(()=>[t("div",H,[o(j,{class:"gt-xs col-6 full-height row items-center justify-center q-pa-sm-md q-pa-lg-sm",flat:"",bordered:""},{default:l(()=>[N]),_:1}),o(B,{src:"https://i.imgur.com/swt5GQc.jpg",class:"col-12 img-unset col-sm-6 full-height"},{default:l(()=>[t("div",Y,[D,t("div",G,[o(V,{class:"q-my-xs bg-white"})]),J])]),_:1})])]),_:1})]),_:1},8,["modelValue"])])]),K,t("section",L,[O,t("div",U,[(c(!0),i(h,null,u(g,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(_,{product:e},null,8,["product"])]))),128))])]),t("section",W,[X,t("div",$,[(c(!0),i(h,null,u(x,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(_,{product:e},null,8,["product"])]))),128))])]),t("section",z,[A,t("div",M,[(c(!0),i(h,null,u(v,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(_,{product:e},null,8,["product"])]))),128))])]),t("section",R,[Z,t("div",tt,[(c(!0),i(h,null,u(f,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(_,{product:e},null,8,["product"])]))),128))])])]),_:1}))}};export{ht as default};