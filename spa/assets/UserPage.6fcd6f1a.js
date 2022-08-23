import{b as g,a as S}from"./QTabs.36f6850d.js";import{Q as D}from"./QSpace.ab544150.js";import{u as E,r as F,q as b,x as m,y as _,z as r,au as q,X as h,A,D as e,B as o,Y as f,F as y,_ as n,E as N,Q as x,ax as $}from"./index.e0af2147.js";import{Q as k}from"./QCard.640219c8.js";import{Q as c}from"./QInput.054029f8.js";import{Q as w}from"./QRadio.b2fc65f0.js";import{Q as P}from"./QForm.c7569b8f.js";import{Q as R}from"./QPage.507b804a.js";import"./use-timeout.4b0f408e.js";import"./rtl.4b414a6d.js";import"./use-dark.f0dbf714.js";import"./use-key-composition.b17fd348.js";import"./uid.42677368.js";import"./use-form.46e8c9be.js";import"./option-sizes.708e7805.js";const T={class:"row lt-lg justify-center border-black bg-grey-2 q-py-xs"},j={class:"container"},z={class:"row q-mt-none q-mt-lg-xl"},I={class:"col-2 gt-md"},L=e("div",{class:"text-h6"},"\u6211\u7684\u5E33\u6236",-1),M=e("div",{class:"text-subtitle1 q-my-lg"},"\u500B\u4EBA\u8CC7\u6599",-1),X=e("div",{class:"text-subtitle1 q-my-lg"},"\u8A02\u55AE\u67E5\u8A62",-1),Y={class:"col-12 col-lg-10"},G={class:"flex items-center text-center q-mb-lg q-mt-lg q-mt-lg-none"},H={key:0,class:"text-h4 text-weight-medium"},J={key:1,class:"text-h4 text-weight-medium"},K=e("div",{class:"text-body1 q-mb-md"},"\u500B\u4EBA\u8CC7\u8A0A\u9801\u9762",-1),O=e("div",{class:"text-subtitle1 text-weight-bold"},"\u540D\u5B57:",-1),W={class:"text-subtitle1 q-mb-md"},Z=e("div",{class:"text-subtitle1 text-weight-bold"},"\u6027\u5225:",-1),ee={class:"text-subtitle1 q-mb-md"},te=e("div",{class:"text-subtitle1 text-weight-bold"},"\u751F\u65E5:",-1),se={class:"text-subtitle1 q-mb-md"},le=e("div",{class:"text-subtitle1 text-weight-bold"},"\u5730\u5740:",-1),oe={class:"text-subtitle1 q-mb-md"},ae=e("div",{class:"text-subtitle1 text-weight-bold"},"\u96FB\u8A71:",-1),ie={class:"text-subtitle1 q-mb-md"},de=e("div",{class:"text-subtitle1 text-weight-bold"},"\u96FB\u5B50\u90F5\u4EF6\u4FE1\u7BB1:",-1),re={class:"text-subtitle1 q-mb-md"},ne={class:"q-my-xxl"},ue=e("div",{class:"text-subtitle1 text-weight-medium"},"\u540D\u5B57:",-1),me=e("div",{class:"text-subtitle1 text-weight-medium"},"\u6027\u5225:",-1),ce={class:"q-my-md"},xe=e("div",{class:"text-subtitle1 text-weight-medium"},"\u751F\u65E5:",-1),be=e("div",{class:"text-subtitle1 text-weight-medium"},"\u5730\u5740:",-1),_e=e("div",{class:"text-subtitle1 text-weight-medium"},"\u624B\u6A5F:",-1),he=e("div",{class:"text-subtitle1 text-weight-medium"},"\u96FB\u5B50\u90F5\u4EF6\u4FE1\u7BB1:",-1),pe={class:"q-my-xxl"},Ae={__name:"UserPage",setup(ve){const V=E(),{logout:Q}=V,d=F(!0),U=()=>{d.value?d.value=!1:d.value=!0},l=b({name:"",sex:2,birthday:"",address:"",phone:"",email:""}),t=b({name:"",sex:2,birthday:"",address:"",phone:"",email:""}),u=b({required(i){return!!i||"\u5FC5\u586B"}}),p=async()=>{try{const{data:i}=await q.get("/users");l.email=i.result.email,l.name=i.result.name,l.sex=i.result.sex,l.birthday=i.result.birthday,l.address=i.result.address,l.phone=i.result.phone}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}},C=()=>{d.value=!1,t.email=l.email,t.name=l.name,t.sex=l.sex,t.birthday=l.birthday,t.address=l.address,t.phone=l.phone},B=async()=>{try{const{data:i}=await q.patch("/users",t);p(),h.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),d.value=!0}catch(i){h.fire({icon:"error",title:"\u5931\u6557",text:i.isAxiosError?i.response.data.message:i.message})}};return p(),(i,s)=>{const v=A("router-link");return m(),_(R,null,{default:r(()=>[e("div",T,[o(S,{"indicator-color":"red",shrink:""},{default:r(()=>[o(g,{exact:"",name:"/user",to:"/user",label:"\u500B\u4EBA\u8CC7\u6599"}),o(g,{exact:"",name:"/order",to:"/order",label:"\u8A02\u55AE\u67E5\u8A62"})]),_:1})]),e("section",j,[e("div",z,[e("div",I,[L,o(v,{to:"/user"},{default:r(()=>[M]),_:1}),o(v,{to:"/order"},{default:r(()=>[X]),_:1})]),e("div",Y,[e("div",G,[d.value?(m(),f("div",H,"\u500B\u4EBA\u8CC7\u6599")):y("",!0),d.value?y("",!0):(m(),f("div",J,"\u4FEE\u6539\u8CC7\u6599")),o(D)]),K,d.value?(m(),_(k,{key:0,flat:"",bordered:"",class:"q-pa-md"},{default:r(()=>[O,e("div",W,n(l.name),1),Z,e("div",ee,n(l.sex),1),te,e("div",se,n(new Date(l.birthday).toLocaleDateString()),1),le,e("div",oe,n(l.address),1),ae,e("div",ie,n(l.phone),1),de,e("div",re,n(l.email),1),e("div",ne,[o(x,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",label:"\u767B\u51FA",color:"black",onClick:N(Q)},null,8,["onClick"]),o(x,{label:"\u4FEE\u6539",class:"q-py-sm q-px-xxl text-subtitle2",unelevated:"",color:"black",onClick:s[0]||(s[0]=a=>C())})])]),_:1})):(m(),_(k,{key:1,flat:"",bordered:"",class:"col-3 row q-pa-md"},{default:r(()=>[o(P,{onSubmit:s[9]||(s[9]=$(a=>B(),["prevent"]))},{default:r(()=>[ue,o(c,{modelValue:t.name,"onUpdate:modelValue":s[1]||(s[1]=a=>t.name=a),rules:[u.required],color:"black"},null,8,["modelValue","rules"]),me,e("div",ce,[o(w,{class:"text-weight-medium",modelValue:t.sex,"onUpdate:modelValue":s[2]||(s[2]=a=>t.sex=a),val:"1",label:"\u7537",color:"black"},null,8,["modelValue"]),o(w,{class:"text-weight-medium",modelValue:t.sex,"onUpdate:modelValue":s[3]||(s[3]=a=>t.sex=a),val:"0",label:"\u5973",color:"black"},null,8,["modelValue"])]),xe,o(c,{modelValue:t.birthday,"onUpdate:modelValue":s[4]||(s[4]=a=>t.birthday=a),rules:[u.required],color:"black"},null,8,["modelValue","rules"]),be,o(c,{modelValue:t.address,"onUpdate:modelValue":s[5]||(s[5]=a=>t.address=a),rules:[u.required],color:"black"},null,8,["modelValue","rules"]),_e,o(c,{modelValue:t.phone,"onUpdate:modelValue":s[6]||(s[6]=a=>t.phone=a),rules:[u.required],color:"black"},null,8,["modelValue","rules"]),he,o(c,{modelValue:t.email,"onUpdate:modelValue":s[7]||(s[7]=a=>t.email=a),rules:[u.required],color:"black"},null,8,["modelValue","rules"]),e("div",pe,[o(x,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",color:"black",label:"\u53D6\u6D88",onClick:s[8]||(s[8]=a=>U())}),o(x,{type:"submit",unelevated:"",class:"q-py-sm q-px-xxl text-subtitle2",color:"black",label:"\u78BA\u5B9A"})])]),_:1})]),_:1}))])])])]),_:1})}}};export{Ae as default};
