import{Q as d}from"./QImg.075186d9.js";import{u as q,q as m,x as l,y as _,z as n,at as b,V as w,W as u,X as h,D as t,B as r,C as y,_ as a,G as Q,Y as S,Z as k,$ as B}from"./index.e0af2147.js";import{Q as C}from"./QSeparator.8cd11d49.js";import{Q as D}from"./QCard.640219c8.js";import{Q as z}from"./QPage.507b804a.js";import"./use-dark.f0dbf714.js";const I={class:"container"},V={class:"row q-mt-lg q-mb-xxxxl"},L={class:"col-12 col-sm-6"},N={class:"q-ml-none q-ml-sm-md q-ml-lg-xl q-mt-lg q-mt-sm-xs col-12 col-sm"},P={class:"row"},R=["src"],$={class:"q-ml-md column justify-center"},j={class:"text-subtitle1 text-weight-bold"},A={class:"row items-center text-center"},E={class:"text-subtitle1"},F={class:"row q-mt-lg"},G={class:"col-12 column"},U={class:"text-body2 text-weight-regular q-mb-lg"},W={class:"text-body2 text-weight-regular"},X=t("div",{class:"text-h5 text-weight-bold q-my-lg"},"\u7A7F\u642D\u55AE\u54C1",-1),Y={class:"row q-mb-lg"},Z={class:"col-4"},H={class:"q-ml-md col"},J={class:"text-subtitle1 text-weight-bold q-mb-xs"},K={class:"text-body2 text-weight-thin q-mb-xs"},M={class:"text-body2 text-weight-thin q-mb-xs"},ct={__name:"StylingDetail",setup(O){const g=b(),c=w();q();const e=m({_id:"",staff:"",image:"",nmae:"",description:"",date:"",products:[]}),o=m({_id:"",avatar:"",description:"",height:0,name:"",stores:{name:""}}),x=s=>{c.push("/product/"+s)},f=async()=>{try{const{data:s}=await u.get("/stylings/"+g.params.id);e._id=s.result._id,e.staff=s.result.staff,e.image=s.result.image,e.products=s.result.products,e.name=s.result.name,e.description=s.result.description,e.date=s.result.date,p()}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),c.go(-1)}},p=async()=>{try{const{data:s}=await u.get("/staffs/info/"+e.staff);o._id=s.result._id,o.avatar=s.result.avatar,o.description=s.result.description,o.height=s.result.height,o.name=s.result.name,o.stores=s.result.stores}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5E97\u54E1\u8CC7\u6599\u5931\u6557"}),c.go(-1)}};return f(),(s,T)=>(l(),_(z,null,{default:n(()=>[t("section",I,[t("div",V,[t("div",L,[r(d,{src:e.image},null,8,["src"])]),t("div",N,[t("div",P,[r(y,{size:"60px"},{default:n(()=>[t("img",{src:o.avatar},null,8,R)]),_:1}),t("div",$,[t("div",j,a(o.name),1),t("div",A,[t("div",E,a(o.stores.name),1),r(Q,{class:"q-ml-xs",name:"fa-solid fa-angle-right"})])])]),t("div",F,[t("div",G,[t("div",U,a(e.description),1),t("div",W,a(new Date(e.date).toLocaleDateString())+" \u66F4\u65B0",1)]),X,(l(!0),S(B,null,k(e.products,(i,v)=>(l(),_(D,{flat:"",class:"col-12 q-mb-lg",key:v},{default:n(()=>[t("div",Y,[t("div",Z,[r(d,{class:"pointer",src:i.product.image[0],onClick:tt=>x(i.product._id)},null,8,["src","onClick"])]),t("div",H,[t("div",J,a(i.product.name),1),t("div",K,"\u5C3A\u5BF8:"+a(i.size),1),t("div",M,"\u984F\u8272:"+a(i.color),1)])]),r(C)]),_:2},1024))),128))])])])])]),_:1}))}};export{ct as default};
