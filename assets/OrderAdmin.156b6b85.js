import{Q as U}from"./QSpace.8261e0c9.js";import{a as B,Q as f}from"./QTable.8e6ac948.js";import{F as w,r as D,K as d,L as u,M as i,av as k,a9 as h,N as F,R as t,O as l,aa as m,T as C,ae as b,ac as _,Q as v,ab as V,P as O,ad as Q,ay as E}from"./index.d8b3df7e.js";import{Q as N}from"./QSeparator.87df3f89.js";import{Q as x}from"./QInput.bbaa874a.js";import{Q as I}from"./QImg.0d3437a0.js";import{Q as S}from"./QRadio.7322c0ba.js";import{Q as T}from"./QCard.fe9dec6c.js";import{Q as L}from"./QForm.b3966b2a.js";import{Q as J}from"./QPage.d05c5b3a.js";import"./QList.524ab138.js";import"./use-dark.8a152d4a.js";import"./rtl.4b414a6d.js";import"./use-prevent-scroll.26c04249.js";import"./use-key-composition.d78daa21.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./use-form.71407145.js";import"./QChip.4f91d3c0.js";import"./QItem.1fc91bc2.js";import"./selection.8ee3ca47.js";import"./use-model-toggle.755b5428.js";import"./QDialog.5e69c51f.js";import"./use-timeout.309a8458.js";import"./QCheckbox.bc620241.js";import"./option-sizes.c4df7dec.js";import"./use-fullscreen.5a711c5b.js";const M={class:"container"},R={class:"row q-mt-xl"},K={class:"col-2"},j=t("div",{class:"text-h6"},"\u5F8C\u53F0\u7BA1\u7406",-1),G=t("div",{class:"text-subtitle1 q-my-lg"},"\u4F7F\u7528\u8005\u7BA1\u7406",-1),H=t("div",{class:"text-subtitle1 q-my-lg"},"\u5546\u54C1\u7BA1\u7406",-1),W=t("div",{class:"text-subtitle1 q-my-lg"},"\u5E97\u92EA\u7BA1\u7406",-1),X=t("div",{class:"text-subtitle1 q-my-lg"},"\u8A02\u55AE\u7BA1\u7406",-1),Y=t("div",{class:"text-subtitle1 q-my-lg"},"\u6D3B\u52D5\u7BA1\u7406",-1),Z=t("div",{class:"text-subtitle1 q-my-lg"},"\u767B\u51FA",-1),ee={class:"col-10"},te={class:"flex items-center text-center q-mb-lg"},se={key:0,class:"text-h4 text-weight-medium"},le={key:1,class:"text-h4 text-weight-medium"},oe=t("div",{class:"text-body1 q-mb-md"},"\u7BA1\u7406\u8A02\u55AE\u9801\u9762",-1),ae={key:0},ie={key:1},de={class:"column"},re=b("\u4FEE\u6539"),ne=b("\u522A\u9664"),ce=t("div",{class:"text-h5"},"\u914D\u9001\u8A0A\u606F",-1),me={style:{"max-width":"400px"},class:"q-mb-xl"},ue=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u540D\u5B57:",-1),_e=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u96FB\u8A71:",-1),pe=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u5730\u5740:",-1),ge=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u4FE1\u7BB1:",-1),he=t("div",{class:"text-h5"},"\u5546\u54C1\u8CC7\u8A0A",-1),xe={class:"row"},be={class:"col-8 q-ml-md"},fe={class:"row items-center text-subtitle2 text-weight-medium"},ve=b(" \u5546\u54C1\u984F\u8272: "),ye={class:"text-subtitle2 text-weight-medium"},qe=t("div",{class:"text-subtitle2 text-weight-medium"},"\u6578\u91CF:",-1),we={style:{"max-width":"400px"}},ke={class:"col column reverse"},Ve={class:"row reverse"},Qe={class:"text-subtitle2 text-weight-medium q-mr-md"},Ne={class:"q-my-xxl"},lt={__name:"OrderAdmin",setup(Ue){const c=w([]),$=[{name:"date",align:"left",label:"\u8A02\u55AE\u65E5\u671F",field:"date"},{name:"_id",align:"left",label:"\u8A02\u55AE\u7DE8\u865F",field:"_id"},{name:"userid",align:"left",label:"\u8A02\u8CFC\u4EBA\u7DE8\u865F",field:"userid"},{name:"totalPrice",align:"left",label:"\u7E3D\u50F9\u9322",field:"totalPrice"},{name:"edit",label:"",align:"left",field:"edit"}],o=w({_id:"",date:"",getname:"",getaddress:"",getemail:"",getphone:"",products:[]}),p=D(!1),z=(a,s)=>{o._id=c[s]._id,o.getname=c[s].getname,o.getaddress=c[s].getaddress,o.getemail=c[s].getemail,o.getphone=c[s].getphone,o.products.splice(0,o.products.length),o.products.push(...JSON.parse(JSON.stringify(c[s].products))),p.value=!0},g=w({required(a){return!!a||"\u5FC5\u586B"},price(a){return a>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(a){var s,r,e;return!a||!a.length||((r=(s=a[0])==null?void 0:s.type)==null?void 0:r.includes("image"))&&((e=a[0])==null?void 0:e.size)<1024*1024||"\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),P=async a=>{try{await k.delete("/orders/"+a),await h.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"})}catch(s){h.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError&&s.response.data?s.response.data.message:"\u767C\u751F\u932F\u8AA4"})}},A=async()=>{try{const{data:a}=await k.patch("/orders/"+o._id,o);h.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),o.dialog=!1}catch(a){h.fire({icon:"success",title:"\u5931\u6557",text:a.isAxiosError?a.response.data.message:a.message})}o.submitting=!1};return(async()=>{try{const{data:a}=await k.get("/orders/all");c.push(...a.result.map(s=>(s.totalPrice=s.products.reduce((r,e)=>r+e.product.price*e.quantity,0),s)))}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(a,s)=>{const r=F("router-link");return d(),u(J,null,{default:i(()=>[t("section",M,[t("div",R,[t("div",K,[j,l(r,{to:"/admin/user"},{default:i(()=>[G]),_:1}),l(r,{to:"/admin/product"},{default:i(()=>[H]),_:1}),l(r,{to:"/admin/store"},{default:i(()=>[W]),_:1}),l(r,{to:"/admin/order"},{default:i(()=>[X]),_:1}),Y,Z]),t("div",ee,[t("div",te,[p.value?C("",!0):(d(),m("div",se,"\u8A02\u55AE\u7BA1\u7406")),p.value?(d(),m("div",le,"\u4FEE\u6539\u8A02\u55AE")):C("",!0),l(U)]),oe,p.value?(d(),u(T,{key:1,flat:"",bordered:""},{default:i(()=>[l(L,{onSubmit:E(A,["prevent"]),class:"q-pa-md"},{default:i(()=>[ce,l(N,{class:"q-my-md"}),t("div",me,[ue,l(x,{modelValue:o.getname,"onUpdate:modelValue":s[0]||(s[0]=e=>o.getname=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"]),_e,l(x,{modelValue:o.getphone,"onUpdate:modelValue":s[1]||(s[1]=e=>o.getphone=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"]),pe,l(x,{modelValue:o.getaddress,"onUpdate:modelValue":s[2]||(s[2]=e=>o.getaddress=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"]),ge,l(x,{modelValue:o.getemail,"onUpdate:modelValue":s[3]||(s[3]=e=>o.getemail=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"])]),he,l(N,{class:"q-my-md"}),(d(!0),m(Q,null,V(o.products,e=>(d(),u(T,{flat:"",key:e._id},{default:i(()=>[t("div",xe,[l(I,{class:"col-2",src:e.product.image[0]},null,8,["src"]),t("div",be,[t("div",fe,[ve,l(O,{color:e.color,size:"xs",class:"q-ml-xs"},null,8,["color"])]),(d(!0),m(Q,null,V(e.product.color,(n,y)=>(d(),u(S,{class:"q-my-md",color:"black",modelValue:e.color,"onUpdate:modelValue":q=>e.color=q,val:n,label:n,key:y},null,8,["modelValue","onUpdate:modelValue","val","label"]))),128)),t("div",ye,"\u5546\u54C1\u5C3A\u5BF8: "+_(e.size),1),(d(!0),m(Q,null,V(e.product.size,(n,y)=>(d(),u(S,{class:"q-my-md",color:"black",modelValue:e.size,"onUpdate:modelValue":q=>e.size=q,val:n,label:n,key:y},null,8,["modelValue","onUpdate:modelValue","val","label"]))),128)),qe,t("div",we,[l(x,{modelValue:e.quantity,"onUpdate:modelValue":n=>e.quantity=n,rules:[g.required],color:"black"},null,8,["modelValue","onUpdate:modelValue","rules"])])]),l(U),t("div",ke,[t("div",Ve,[t("div",Qe,"NT$:"+_(e.product.price*e.quantity),1)])])]),l(N,{class:"q-my-md"})]),_:2},1024))),128)),t("div",Ne,[l(v,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",color:"black",label:"\u53D6\u6D88",onClick:s[4]||(s[4]=e=>p.value=!1),disabled:o.submitting},null,8,["disabled"]),l(v,{unelevated:"",class:"q-py-sm q-px-xxl text-subtitle2",type:"submit",color:"black text-white",label:"\u78BA\u5B9A"})])]),_:1},8,["onSubmit"])]),_:1})):(d(),u(B,{key:0,grid:a.$q.screen.xs,flat:"",bordered:"",rows:c,columns:$,"row-key":"name"},{"body-cell-date":i(e=>[l(f,{date:e},{default:i(()=>[b(_(new Date(e.row.date).toLocaleDateString()),1)]),_:2},1032,["date"])]),"body-cell-userid":i(e=>[l(f,{userid:e},{default:i(()=>[b(_(e.row.user._id),1)]),_:2},1032,["userid"])]),"body-cell-totalPrice":i(e=>[l(f,{date:e},{default:i(()=>[e.row.totalPrice<1500?(d(),m("span",ae,"NT$ "+_(e.row.totalPrice+80),1)):(d(),m("span",ie,"NT$ "+_(e.row.totalPrice),1))]),_:2},1032,["date"])]),"body-cell-edit":i(e=>[l(f,{edit:e},{default:i(()=>[t("div",de,[l(v,{class:"q-mb-sm q-px-lg",outline:"",onClick:n=>z(e.row._id,e.rowIndex)},{default:i(()=>[re]),_:2},1032,["onClick"]),l(v,{outline:"",onClick:n=>P(e.row._id)},{default:i(()=>[ne]),_:2},1032,["onClick"])])]),_:2},1032,["edit"])]),_:1},8,["grid","rows"]))])])])]),_:1})}}};export{lt as default};
