import{Q as d}from"./QImg.de1747d4.js";import{N as q,F as m,H as l,I as _,J as n,ax as b,ah as w,ai as u,aj as h,S as t,K as r,R as y,M as a,Y as Q,V as S,W as k,X as B}from"./index.53143171.js";import{Q as C}from"./QSeparator.bc0bc5c0.js";import{Q as D}from"./QCard.2d392d70.js";import{Q as I}from"./QPage.e8bca856.js";import"./use-dark.efb5c460.js";const N={class:"container"},R={class:"row q-mt-lg q-mb-xxxxl"},V={class:"col-12 col-sm-6"},j={class:"q-ml-none q-ml-sm-md q-ml-lg-xl q-mt-lg q-mt-sm-xs col-12 col-sm"},z={class:"row"},F=["src"],L={class:"q-ml-md column justify-center"},P={class:"text-subtitle1 text-weight-bold"},A={class:"row items-center text-center"},E={class:"text-subtitle1"},H={class:"row q-mt-lg"},J={class:"col-12 column"},K={class:"text-body2 text-weight-regular q-mb-lg"},M={class:"text-body2 text-weight-regular"},U=t("div",{class:"text-h5 text-weight-bold q-my-lg"},"\u7A7F\u642D\u55AE\u54C1",-1),W={class:"row q-mb-lg"},X={class:"col-4"},Y={class:"q-ml-md col"},$={class:"text-subtitle1 text-weight-bold q-mb-xs"},G={class:"text-body2 text-weight-thin q-mb-xs"},O={class:"text-body2 text-weight-thin q-mb-xs"},ct={__name:"StylingDetail",setup(T){const g=b(),c=w();q();const e=m({_id:"",staff:"",image:"",nmae:"",description:"",date:"",products:[]}),o=m({_id:"",avatar:"",description:"",height:0,name:"",stores:{name:""}}),x=s=>{c.push("/product/"+s)},f=async()=>{try{const{data:s}=await u.get("/stylings/"+g.params.id);e._id=s.result._id,e.staff=s.result.staff,e.image=s.result.image,e.products=s.result.products,e.name=s.result.name,e.description=s.result.description,e.date=s.result.date,p()}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),c.go(-1)}},p=async()=>{try{const{data:s}=await u.get("/staffs/info/"+e.staff);o._id=s.result._id,o.avatar=s.result.avatar,o.description=s.result.description,o.height=s.result.height,o.name=s.result.name,o.stores=s.result.stores}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5E97\u54E1\u8CC7\u6599\u5931\u6557"}),c.go(-1)}};return f(),(s,Z)=>(l(),_(I,null,{default:n(()=>[t("section",N,[t("div",R,[t("div",V,[r(d,{src:e.image},null,8,["src"])]),t("div",j,[t("div",z,[r(y,{size:"60px"},{default:n(()=>[t("img",{src:o.avatar},null,8,F)]),_:1}),t("div",L,[t("div",P,a(o.name),1),t("div",A,[t("div",E,a(o.stores.name),1),r(Q,{class:"q-ml-xs",name:"fa-solid fa-angle-right"})])])]),t("div",H,[t("div",J,[t("div",K,a(e.description),1),t("div",M,a(new Date(e.date).toLocaleDateString())+" \u66F4\u65B0",1)]),U,(l(!0),S(B,null,k(e.products,(i,v)=>(l(),_(D,{flat:"",class:"col-12 q-mb-lg",key:v},{default:n(()=>[t("div",W,[t("div",X,[r(d,{class:"pointer",src:i.product.image[0],onClick:tt=>x(i.product._id)},null,8,["src","onClick"])]),t("div",Y,[t("div",$,a(i.product.name),1),t("div",G,"\u5C3A\u5BF8:"+a(i.size),1),t("div",O,"\u984F\u8272:"+a(i.color),1)])]),r(C)]),_:2},1024))),128))])])])])]),_:1}))}};export{ct as default};
