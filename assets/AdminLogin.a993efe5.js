import{Q as c}from"./QInput.bef99052.js";import{u as q,r as v,q as f,x as n,y as i,z as d,D as e,B as s,Q as b}from"./index.0d4fdb09.js";import{Q as h}from"./QForm.ddf020d2.js";import{Q as m}from"./QCard.08b29dcf.js";import{Q as V}from"./QSeparator.d36ff4c0.js";import{Q as _}from"./QRadio.4058e9ee.js";import{Q as w}from"./QPage.ba57bee6.js";import"./use-key-composition.43e9e573.js";import"./use-dark.60ffaa8c.js";import"./uid.42677368.js";import"./use-form.299f2ee0.js";import"./option-sizes.76e9a136.js";const y={class:"container"},k={class:"row q-mt-xl"},Q={class:"col-6"},z=e("div",{class:"text-h4 text-weight-bold q-mb-xl"},"\u7BA1\u7406\u54E1\u767B\u5165",-1),U=e("div",{class:"text-body1"},"\u7BA1\u7406\u54E1\u5E33\u865F",-1),A=e("div",{class:"text-body1"},"\u7BA1\u7406\u54E1\u5BC6\u78BC",-1),S=e("div",{class:"text-h4 text-weight-bold q-mb-xl"},"\u5E97\u54E1\u767B\u5165",-1),B=e("div",{class:"text-body1"},"\u5E97\u54E1\u5E33\u865F",-1),C=e("div",{class:"text-body1"},"\u5E97\u54E1\u5BC6\u78BC",-1),L={class:"col"},N=e("div",{class:"text-h6 text-weight-bold q-mb-md"},"\u5207\u63DB\u767B\u5165\u6B0A\u9650",-1),P={class:"column"},O={__name:"AdminLogin",setup(Z){const p=q(),r=v(!0),o=f({account:"",password:""}),u=f({account:[l=>!!l||"\u5E33\u865F\u5FC5\u586B",l=>l.length>=4&&l.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",l=>/^[a-zA-Z0-9]+$/.test(l)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[l=>!!l||"\u5BC6\u78BC\u5FC5\u586B",l=>l.length>=4&&l.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",l=>/^[a-zA-Z0-9]+$/.test(l)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),g=()=>{o.role=1,p.login(o)},x=()=>{o.role=2,p.login(o)};return(l,t)=>(n(),i(w,null,{default:d(()=>[e("section",y,[e("div",k,[e("div",Q,[r.value?(n(),i(m,{key:0,flat:"",class:"q-px-lg q-pb-lg"},{default:d(()=>[z,s(h,{onSubmit:g,class:"q-gutter-md"},{default:d(()=>[U,s(c,{color:"black",square:"",filled:"",type:"text",modelValue:o.account,"onUpdate:modelValue":t[0]||(t[0]=a=>o.account=a),placeholder:"Admin account","lazy-rules":"",rules:u.account},null,8,["modelValue","rules"]),A,s(c,{color:"black",square:"",filled:"",type:"password",modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=a=>o.password=a),placeholder:"Admin password","lazy-rules":"",rules:u.password},null,8,["modelValue","rules"]),e("div",null,[s(b,{outline:"",label:"\u7BA1\u7406\u54E1\u767B\u5165",class:"width-hundred q-py-md text-h6",type:"submit",color:"black"})])]),_:1})]),_:1})):(n(),i(m,{key:1,flat:"",class:"q-px-lg q-pb-lg"},{default:d(()=>[S,s(h,{onSubmit:x,class:"q-gutter-md"},{default:d(()=>[B,s(c,{color:"black",square:"",filled:"",type:"text",modelValue:o.account,"onUpdate:modelValue":t[2]||(t[2]=a=>o.account=a),placeholder:"Staff Account","lazy-rules":"",rules:u.account},null,8,["modelValue","rules"]),C,s(c,{color:"black",square:"",filled:"",type:"password",modelValue:o.password,"onUpdate:modelValue":t[3]||(t[3]=a=>o.password=a),placeholder:"Staff Password","lazy-rules":"",rules:u.password},null,8,["modelValue","rules"]),e("div",null,[s(b,{unelevated:"",label:"\u5E97\u54E1\u767B\u5165",class:"width-hundred q-py-md text-h6",type:"submit",color:"black"})])]),_:1})]),_:1}))]),s(V,{vertical:""}),s(m,{flat:"",class:"q-px-lg q-pb-lg"},{default:d(()=>[e("div",L,[N,e("div",P,[s(_,{"checked-icon":"fa-solid fa-square-full","keep-color":"","unchecked-icon":"fa-regular fa-square-full",modelValue:r.value,"onUpdate:modelValue":t[4]||(t[4]=a=>r.value=a),val:!0,label:"\u7BA1\u7406\u54E1\u767B\u5165",color:"black",size:"lg"},null,8,["modelValue"]),s(_,{"checked-icon":"fa-solid fa-square-full","keep-color":"","unchecked-icon":"fa-regular fa-square-full",modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=a=>r.value=a),val:!1,label:"\u5E97\u54E1\u767B\u5165",color:"black",size:"lg"},null,8,["modelValue"])])])]),_:1})])])]),_:1}))}};export{O as default};