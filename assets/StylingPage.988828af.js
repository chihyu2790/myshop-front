import{Q as m}from"./QSeparator.bc0bc5c0.js";import{Q as p}from"./QImg.de1747d4.js";import{Q as d}from"./QPage.e8bca856.js";import{F as g,H as a,I as _,J as u,ah as x,ai as h,aj as f,S as e,K as r,V as c,W as y,X as k}from"./index.53143171.js";import"./use-dark.efb5c460.js";const v={class:"container"},Q=e("div",{class:"q-mt-xxl"},[e("div",{class:"text-h4 text-weight-bold"},"STYLING BOOK")],-1),S={class:"row"},F={__name:"StylingPage",setup(q){const i=x(),l=s=>{i.push("/styling/"+s)},t=g([]);return(async()=>{try{const{data:s}=await h.get("/stylings/all");t.splice(0,t.length),t.push(...s.result)}catch(s){f.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,B)=>(a(),_(d,{class:"q-mb-xxxl"},{default:u(()=>[e("section",v,[Q,r(m,{class:"q-mt-lg q-mb-sm"}),e("div",S,[(a(!0),c(k,null,y(t,(o,n)=>(a(),c("div",{class:"col-6 col-sm-4 col-lg-3 q-pa-xs pointer",key:n},[r(p,{class:"col-12",src:o.image,ratio:4/5,onClick:I=>l(o._id)},null,8,["src","onClick"])]))),128))])])]),_:1}))}};export{F as default};
