import{Q as d,a as k}from"./QCarousel.3a357899.js";import{Q as j}from"./QCard.2d392d70.js";import{Q as V}from"./QImg.de1747d4.js";import{Q as B}from"./QPage.e8bca856.js";import{r as C,F as a,H as c,I as S,J as m,ai as l,aj as n,S as t,K as o,V as i,W as u,X as h}from"./index.53143171.js";import{_ as p}from"./ProductCard.5264c6be.js";import"./use-dark.efb5c460.js";import"./touch.70a9dd44.js";import"./selection.019f0881.js";import"./use-fullscreen.cd840da1.js";const F={class:"container"},T={class:"q-pa-0"},E={class:"row fit justify-start items-center no-wrap"},H=t("div",null,[t("div",{class:"text-h5 text-weight-bold"},"\u590F\u5B63\u65B0\u54C1\u63A8\u85A6\uFF0C\u8B93\u60A8\u7684\u7A7F\u642D\u66F4\u6709\u5C64\u6B21"),t("div",{class:"text-body1"},"\u5DE5\u4F5C\u8207\u65E5\u5E38\u90FD\u7686\u53EF\u81EA\u7531\u642D\u914D")],-1),N=t("section",{class:"container"},[t("div",{class:"column q-my-xl items-center justify-center"},[t("div",{class:"q-mx-md text-h2 text-weight-medium q-mb-lg"},"\u767E\u642D\u670D\u98FE"),t("div",{class:"q-mx-md text-h5 text-weight-regular q-mb-sm"},"\u8212\u9069\u6750\u8CEA\u3001\u8CBC\u5FC3\u6A5F\u80FD\u3001\u7CBE\u5FC3\u8A2D\u8A08"),t("div",{class:"q-mx-md text-h5 text-weight-regular"},"\u7D66\u4F60\u7CBE\u5FC3\u8A2D\u8A08\u7684\u7A7F\u642D\u9AD4\u9A57")])],-1),U={class:"container"},Y=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"\u6240\u6709\u5546\u54C1")])],-1),D={class:"row"},J={class:"container"},K=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-sm"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"\u77ED\u7248")])])],-1),L={class:"row"},O={class:"container"},W=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-sm"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"5\u5206\u8896")])])],-1),X={class:"row"},$={class:"container"},z=t("div",{class:"row"},[t("div",{class:"col q-mt-md q-mb-sm"},[t("div",{class:"col q-mt-md q-mb-lg"},[t("div",{class:"q-mx-md text-h4 text-weight-medium"},"\u9577\u8896")])])],-1),A={class:"row"},at={__name:"ProductPage",setup(G){const _=C(1),q=a([]),g=a([]),v=a([]),x=a([]),f=a([]),r=a({classify:""}),y=async()=>{try{const{data:s}=await l.get("/products");q.push(...s.result)}catch{n.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}},b=async()=>{try{r.classify="\u5973\u88DD";const{data:s}=await l.post("/products/genre/",r);g.push(...s.result),Q()}catch{n.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}},Q=async()=>{try{r.classify="\u77ED\u7248";const{data:s}=await l.post("/products/genre/",r);v.push(...s.result),I()}catch{n.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}},I=async()=>{try{r.classify="5\u5206\u8896";const{data:s}=await l.post("/products/genre/",r);x.push(...s.result),P()}catch{n.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}},P=async()=>{try{r.classify="\u9577\u8896";const{data:s}=await l.post("/products/genre/",r);f.push(...s.result)}catch{n.fire({icon:"error",title:"\u5931\u6557",text:"\u5973\u88DD\u5206\u985E\u6293\u53D6\u932F\u8AA4"})}};return y(),b(),(s,w)=>(c(),S(B,{id:"productPage",class:"q-mb-xxxl"},{default:m(()=>[t("section",F,[t("div",T,[o(k,{animated:"",modelValue:_.value,"onUpdate:modelValue":w[0]||(w[0]=e=>_.value=e),arrows:"",navigation:"",infinite:""},{default:m(()=>[o(d,{name:1,"img-src":"https://i.imgur.com/5eEHvYI.png"}),o(d,{name:2,"img-src":"https://i.imgur.com/Bu3DY18.png"}),o(d,{name:3,"img-src":"https://i.imgur.com/onIrrST.jpg"}),o(d,{name:4,class:"column no-wrap"},{default:m(()=>[t("div",E,[o(j,{class:"col-6 full-height row items-center justify-center q-pa-sm",flat:"",bordered:""},{default:m(()=>[H]),_:1}),o(V,{class:"img-unset col-6 full-height",src:"https://i.imgur.com/U950qCi.jpg"})])]),_:1})]),_:1},8,["modelValue"])])]),N,t("section",U,[Y,t("div",D,[(c(!0),i(h,null,u(g,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(p,{product:e},null,8,["product"])]))),128))])]),t("section",J,[K,t("div",L,[(c(!0),i(h,null,u(v,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(p,{product:e},null,8,["product"])]))),128))])]),t("section",O,[W,t("div",X,[(c(!0),i(h,null,u(x,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(p,{product:e},null,8,["product"])]))),128))])]),t("section",$,[z,t("div",A,[(c(!0),i(h,null,u(f,e=>(c(),i("div",{class:"col-6 col-sm-4 col-2-4",key:e._id},[o(p,{product:e},null,8,["product"])]))),128))])])]),_:1}))}};export{at as default};
