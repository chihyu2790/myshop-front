import{Q as c}from"./QInput.bbaa874a.js";import{I as h,r as g,F as i,K as x,L as b,M as a,R as e,O as s,Q as n}from"./index.d8b3df7e.js";import{Q as f}from"./QForm.b3966b2a.js";import{Q as m}from"./QCard.fe9dec6c.js";import{Q as u}from"./QSeparator.87df3f89.js";import{Q as q}from"./QPage.d05c5b3a.js";import"./use-key-composition.d78daa21.js";import"./use-dark.8a152d4a.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./use-form.71407145.js";const v={class:"container"},y={class:"row q-mt-sm q-mt-lg-xl"},w={class:"col-12 col-lg"},Q=e("div",{class:"text-h4 text-weight-bold q-mb-xl"},"\u6703\u54E1\u767B\u5165",-1),V=e("div",{class:"text-body1"},"\u6703\u54E1\u5E33\u865F",-1),k=e("div",{class:"text-body1"},"\u6703\u54E1\u5BC6\u78BC",-1),B=e("div",{class:"text-subtitle1 text-grey-6"},"\u5C1A\u672A\u52A0\u5165\u6703\u54E1/\u8ACB\u5148\u8A3B\u518A\u6703\u54E1",-1),z={class:"lt-lg col-12 q-my-md"},S={class:"col-12 col-lg"},U=e("div",{class:"text-h4 text-weight-bold q-mb-xl"},"\u6703\u54E1\u8A3B\u518A",-1),A=e("div",{class:"text-body1 q-mb-lg"},"\u6240\u6709\u7684\u8CFC\u8CB7\u529F\u80FD\uFF0C\u5305\u542B\u8A02\u8CFC\u5546\u54C1\u3001\u5546\u54C1\u8A55\u8AD6\u7B49\uFF0C\u7686\u9808\u8981\u767B\u5165\u6703\u54E1\uFF0C\u5982\u6C92\u6709\u52A0\u5165\u6703\u54E1\uFF0C\u8ACB\u5148\u8A3B\u518A\u6703\u54E1[\u514D\u8CBB]\u3002",-1),C=e("div",{class:"text-body1 q-mb-xl"},"\u9EDE\u64CA\u300C\u6703\u54E1\u8A3B\u518A\u300D\u5F8C\u958B\u59CB\u9032\u884C\u8A3B\u518A\u3002",-1),D={__name:"LoginPage",setup(F){const p=h();g(!1);const l=i({account:"",password:""}),r=i({account:[t=>!!t||"\u5E33\u865F\u5FC5\u586B",t=>t.length>=4&&t.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",t=>/^[a-zA-Z0-9]+$/.test(t)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[t=>!!t||"\u5BC6\u78BC\u5FC5\u586B",t=>t.length>=4&&t.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",t=>/^[a-zA-Z0-9]+$/.test(t)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),_=()=>{l.role=0,p.login(l)};return(t,o)=>(x(),b(q,null,{default:a(()=>[e("section",v,[e("div",y,[e("div",w,[s(m,{class:"q-px-none q-px-lg-lg q-pb-lg",flat:""},{default:a(()=>[Q,s(f,{onSubmit:_,class:"q-gutter-md"},{default:a(()=>[V,s(c,{color:"black",square:"",filled:"",type:"text",modelValue:l.account,"onUpdate:modelValue":o[0]||(o[0]=d=>l.account=d),placeholder:"\u6703\u54E1\u5E33\u865F\u8F38\u5165",rules:r.account},null,8,["modelValue","rules"]),k,s(c,{color:"black",square:"",filled:"",type:"password",modelValue:l.password,"onUpdate:modelValue":o[1]||(o[1]=d=>l.password=d),placeholder:"\u8ACB\u8F38\u5165\u5BC6\u78BC","lazy-rules":"",rules:r.password},null,8,["modelValue","rules"]),B,e("div",null,[s(n,{unelevated:"",label:"\u6703\u54E1\u767B\u5165",class:"width-hundred q-py-md text-h6",type:"submit",color:"red"})])]),_:1})]),_:1})]),s(u,{vertical:"",class:"gt-md"}),e("div",z,[s(u)]),e("div",S,[s(m,{class:"q-px-none q-px-lg-lg q-pb-lg",style:{height:"500px"},flat:""},{default:a(()=>[U,A,C,s(n,{unelevated:"",color:"red",class:"width-hundred q-py-md text-h6",label:"\u6703\u54E1\u8A3B\u518A",to:"/register/"})]),_:1})])])])]),_:1}))}};export{D as default};