import{Q as m}from"./QImg.f9af7805.js";import{N as y,F as _,H as n,I as u,J as d,ax as Q,ah as S,ai as h,aj as g,S as s,K as c,R as k,M as i,Y as C,V as B,W as D,X as I}from"./index.34a9c747.js";import{Q as N}from"./QSeparator.a5f1724a.js";import{Q as R}from"./QCard.f4c18fa6.js";import{Q as V}from"./QPage.68bd7ebf.js";import"./use-dark.cd2d25a8.js";const $={class:"container"},j={class:"row q-mt-lg q-mb-xxxxl"},z={class:"col-12 col-sm-6"},F={class:"q-ml-none q-ml-sm-md q-ml-lg-xl q-mt-lg q-mt-sm-xs col-12 col-sm"},L={class:"row"},P=["src"],A={class:"q-ml-md column justify-center"},E={class:"text-subtitle1 text-weight-bold"},H={class:"row items-center text-center"},J={class:"row q-mt-lg"},K={class:"col-12 column"},M={class:"text-body2 text-weight-regular q-mb-lg"},U={class:"text-body2 text-weight-regular"},W=s("div",{class:"text-h5 text-weight-bold q-my-lg"},"\u7A7F\u642D\u55AE\u54C1",-1),X={class:"row q-mb-lg"},Y={class:"col-4"},G={class:"q-ml-md col"},O={class:"text-subtitle1 text-weight-bold q-mb-xs"},T={class:"text-body2 text-weight-thin q-mb-xs"},Z={class:"text-body2 text-weight-thin q-mb-xs"},lt={__name:"StylingDetail",setup(tt){const p=Q(),r=S();y();const e=_({_id:"",staff:"",image:"",nmae:"",description:"",date:"",products:[]}),o=_({_id:"",avatar:"",description:"",height:0,name:"",stores:{name:""}}),x=t=>{r.push("/product/"+t)},f=()=>{r.push("/store")},v=t=>{r.push("/clerk/"+t)},q=async()=>{try{const{data:t}=await h.get("/stylings/"+p.params.id);e._id=t.result._id,e.staff=t.result.staff,e.image=t.result.image,e.products=t.result.products,e.name=t.result.name,e.description=t.result.description,e.date=t.result.date,b()}catch{g.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),r.go(-1)}},b=async()=>{try{const{data:t}=await h.get("/staffs/info/"+e.staff);o._id=t.result._id,o.avatar=t.result.avatar,o.description=t.result.description,o.height=t.result.height,o.name=t.result.name,o.stores=t.result.stores}catch{g.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5E97\u54E1\u8CC7\u6599\u5931\u6557"}),r.go(-1)}};return q(),(t,l)=>(n(),u(V,null,{default:d(()=>[s("section",$,[s("div",j,[s("div",z,[c(m,{src:e.image},null,8,["src"])]),s("div",F,[s("div",L,[c(k,{size:"60px"},{default:d(()=>[s("img",{src:o.avatar,class:"cursor-pointer",onClick:l[0]||(l[0]=a=>v(o._id))},null,8,P)]),_:1}),s("div",A,[s("div",E,i(o.name),1),s("div",H,[s("div",{class:"text-subtitle1 cursor-pointer",onClick:l[1]||(l[1]=a=>f())},i(o.stores.name),1),c(C,{class:"q-ml-xs",name:"fa-solid fa-angle-right"})])])]),s("div",J,[s("div",K,[s("div",M,i(e.description),1),s("div",U,i(new Date(e.date).toLocaleDateString())+" \u66F4\u65B0",1)]),W,(n(!0),B(I,null,D(e.products,(a,w)=>(n(),u(R,{flat:"",class:"col-12 q-mb-lg",key:w},{default:d(()=>[s("div",X,[s("div",Y,[c(m,{class:"pointer",src:a.product.image[0],onClick:st=>x(a.product._id)},null,8,["src","onClick"])]),s("div",G,[s("div",O,i(a.product.name),1),s("div",T,"\u5C3A\u5BF8:"+i(a.size),1),s("div",Z,"\u984F\u8272:"+i(a.color),1)])]),c(N)]),_:2},1024))),128))])])])])]),_:1}))}};export{lt as default};
