import{Q as c}from"./QInput.bbaa874a.js";import{I as v,r as V,F as f,K as n,L as i,M as d,R as l,O as o,Q as g}from"./index.d8b3df7e.js";import{Q as b}from"./QForm.b3966b2a.js";import{Q as m}from"./QCard.fe9dec6c.js";import{Q as _}from"./QSeparator.87df3f89.js";import{Q as h}from"./QRadio.7322c0ba.js";import{Q as w}from"./QPage.d05c5b3a.js";import"./use-key-composition.d78daa21.js";import"./use-dark.8a152d4a.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./use-form.71407145.js";import"./option-sizes.c4df7dec.js";const y={class:"container"},k={class:"row q-mt-sm q-mt-lg-xl"},Q={class:"col-12 col-lg-6"},z=l("div",{class:"text-h4 text-weight-bold q-mb-xl"},"\u7BA1\u7406\u54E1\u767B\u5165",-1),U=l("div",{class:"text-body1"},"\u7BA1\u7406\u54E1\u5E33\u865F",-1),A=l("div",{class:"text-body1"},"\u7BA1\u7406\u54E1\u5BC6\u78BC",-1),S=l("div",{class:"text-h4 text-weight-bold q-mb-xl"},"\u5E97\u54E1\u767B\u5165",-1),B=l("div",{class:"text-body1"},"\u5E97\u54E1\u5E33\u865F",-1),L=l("div",{class:"text-body1"},"\u5E97\u54E1\u5BC6\u78BC",-1),C={class:"lt-lg col-12 q-my-md"},F={class:"col"},I=l("div",{class:"text-h6 text-weight-bold q-mb-md"},"\u5207\u63DB\u767B\u5165\u6B0A\u9650",-1),N={class:"column"},W={__name:"AdminLogin",setup(P){const p=v(),r=V(!0),t=f({account:"",password:""}),u=f({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),q=()=>{t.role=1,p.login(t)},x=()=>{t.role=2,p.login(t)};return(e,s)=>(n(),i(w,null,{default:d(()=>[l("section",y,[l("div",k,[l("div",Q,[r.value?(n(),i(m,{key:0,flat:"",class:"q-px-none q-px-lg-lg q-pb-lg"},{default:d(()=>[z,o(b,{onSubmit:q,class:"q-gutter-md"},{default:d(()=>[U,o(c,{color:"black",square:"",filled:"",type:"text",modelValue:t.account,"onUpdate:modelValue":s[0]||(s[0]=a=>t.account=a),placeholder:"Admin account","lazy-rules":"",rules:u.account},null,8,["modelValue","rules"]),A,o(c,{color:"black",square:"",filled:"",type:"password",modelValue:t.password,"onUpdate:modelValue":s[1]||(s[1]=a=>t.password=a),placeholder:"Admin password","lazy-rules":"",rules:u.password},null,8,["modelValue","rules"]),l("div",null,[o(g,{outline:"",label:"\u7BA1\u7406\u54E1\u767B\u5165",class:"width-hundred q-py-md text-h6",type:"submit",color:"black"})])]),_:1})]),_:1})):(n(),i(m,{key:1,flat:"",class:"q-px-none q-px-lg-lg q-pb-lg"},{default:d(()=>[S,o(b,{onSubmit:x,class:"q-gutter-md"},{default:d(()=>[B,o(c,{color:"black",square:"",filled:"",type:"text",modelValue:t.account,"onUpdate:modelValue":s[2]||(s[2]=a=>t.account=a),placeholder:"Staff Account","lazy-rules":"",rules:u.account},null,8,["modelValue","rules"]),L,o(c,{color:"black",square:"",filled:"",type:"password",modelValue:t.password,"onUpdate:modelValue":s[3]||(s[3]=a=>t.password=a),placeholder:"Staff Password","lazy-rules":"",rules:u.password},null,8,["modelValue","rules"]),l("div",null,[o(g,{unelevated:"",label:"\u5E97\u54E1\u767B\u5165",class:"width-hundred q-py-md text-h6",type:"submit",color:"black"})])]),_:1})]),_:1}))]),o(_,{vertical:"",class:"gt-md"}),l("div",C,[o(_)]),o(m,{flat:"",class:"col-12 col-lg q-px-none q-px-lg-lg q-pb-lg"},{default:d(()=>[l("div",F,[I,l("div",N,[o(h,{"checked-icon":"fa-solid fa-square-full","keep-color":"","unchecked-icon":"fa-regular fa-square-full",modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=a=>r.value=a),val:!0,label:"\u7BA1\u7406\u54E1\u767B\u5165",color:"black",size:"lg"},null,8,["modelValue"]),o(h,{"checked-icon":"fa-solid fa-square-full","keep-color":"","unchecked-icon":"fa-regular fa-square-full",modelValue:r.value,"onUpdate:modelValue":s[5]||(s[5]=a=>r.value=a),val:!1,label:"\u5E97\u54E1\u767B\u5165",color:"black",size:"lg"},null,8,["modelValue"])])])]),_:1})])])]),_:1}))}};export{W as default};
