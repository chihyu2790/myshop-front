import{F as o,K as a,aa as e,R as n,ad as i,ab as p,a8 as d,a9 as l,O as _}from"./index.d8b3df7e.js";import{_ as m}from"./ProductCard.ab77332c.js";import"./QImg.0d3437a0.js";import"./QCard.fe9dec6c.js";import"./use-dark.8a152d4a.js";const u={class:"container"},f={class:"row"},F={__name:"BannerPage",setup(h){const c=o({color:"red"}),r=o([]);return(async()=>{try{const{data:t}=await d.post("/products/genre",c);r.push(...t.result)}catch{l.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(t,g)=>(a(),e("section",u,[n("div",f,[(a(!0),e(i,null,p(r,s=>(a(),e("div",{class:"col-3 q-pa-md",key:s._id},[_(m,{product:s},null,8,["product"])]))),128))])]))}};export{F as default};