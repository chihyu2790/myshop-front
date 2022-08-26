import{Q as C}from"./QSpace.91a09767.js";import{a as D,Q as f}from"./QTable.9e7f7efc.js";import{F as k,r as F,P as I,H as r,I as _,J as i,ay as V,aj as h,S as t,K as l,V as m,U as N,L as b,M as p,Q as v,W as Q,R as E,X as U,aB as J}from"./index.78540292.js";import{Q as S}from"./QSeparator.1933dcbe.js";import{Q as x}from"./QInput.43a27201.js";import{Q as L}from"./QImg.9b3d27f0.js";import{Q as $}from"./QRadio.c36f924f.js";import{Q as z}from"./QCard.626c9880.js";import{Q as O}from"./QForm.1941dbfc.js";import{Q as M}from"./QPage.7f90bc83.js";import"./QList.2eb08b6c.js";import"./use-dark.a9d4335d.js";import"./rtl.4b414a6d.js";import"./use-prevent-scroll.d6c9f1f6.js";import"./focus-manager.d6507951.js";import"./use-key-composition.1bc00443.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./QChip.711d1465.js";import"./QMenu.0de6446a.js";import"./selection.dda69311.js";import"./use-model-toggle.481b63c4.js";import"./use-timeout.881f1876.js";import"./QDialog.1ab6ec01.js";import"./use-form.852ad25a.js";import"./QCheckbox.2e9d67e2.js";import"./option-sizes.95359951.js";import"./use-fullscreen.17fb892c.js";const R={class:"container"},j={class:"row q-mt-xl"},H={class:"col-2"},K=t("div",{class:"text-h6"},"\u5F8C\u53F0\u7BA1\u7406",-1),W=t("div",{class:"text-subtitle1 q-my-lg"},"\u4F7F\u7528\u8005\u7BA1\u7406",-1),X=t("div",{class:"text-subtitle1 q-my-lg"},"\u5546\u54C1\u7BA1\u7406",-1),G=t("div",{class:"text-subtitle1 q-my-lg"},"\u5E97\u92EA\u7BA1\u7406",-1),Y=t("div",{class:"text-subtitle1 q-my-lg"},"\u8A02\u55AE\u7BA1\u7406",-1),Z=t("div",{class:"text-subtitle1 q-my-lg"},"\u6D3B\u52D5\u7BA1\u7406",-1),ee=t("div",{class:"text-subtitle1 q-my-lg"},"\u767B\u51FA",-1),te={class:"col-10"},se={class:"flex items-center text-center q-mb-lg"},le={key:0,class:"text-h4 text-weight-medium"},oe={key:1,class:"text-h4 text-weight-medium"},ae=t("div",{class:"text-body1 q-mb-md"},"\u7BA1\u7406\u8A02\u55AE\u9801\u9762",-1),ie={key:0},re={key:1},de={class:"column"},ne=b("\u4FEE\u6539"),ce=b("\u522A\u9664"),me=t("div",{class:"text-h5"},"\u914D\u9001\u8A0A\u606F",-1),ue={style:{"max-width":"400px"},class:"q-mb-xl"},_e=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u540D\u5B57:",-1),pe=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u96FB\u8A71:",-1),ge=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u5730\u5740:",-1),he=t("div",{class:"text-subtitle1 text-weight-medium"},"\u53D6\u8CA8\u4EBA\u4FE1\u7BB1:",-1),xe=t("div",{class:"text-h5"},"\u5546\u54C1\u8CC7\u8A0A",-1),be={class:"row"},fe={class:"col-8 q-ml-md"},ve={class:"row items-center text-subtitle2 text-weight-medium"},ye=b(" \u5546\u54C1\u984F\u8272: "),qe={class:"text-subtitle2 text-weight-medium"},we=t("div",{class:"text-subtitle2 text-weight-medium"},"\u6578\u91CF:",-1),ke={style:{"max-width":"400px"}},Ve={class:"col column reverse"},Qe={class:"row reverse"},Ue={class:"text-subtitle2 text-weight-medium q-mr-md"},Se={class:"q-my-xxl"},ot={__name:"OrderAdmin",setup(Ce){const d=k([]),B=[{name:"date",align:"left",label:"\u8A02\u55AE\u65E5\u671F",field:"date"},{name:"_id",align:"left",label:"\u8A02\u55AE\u7DE8\u865F",field:"_id"},{name:"userid",align:"left",label:"\u8A02\u8CFC\u4EBA\u7DE8\u865F",field:"userid"},{name:"totalPrice",align:"left",label:"\u7E3D\u50F9\u9322",field:"totalPrice"},{name:"edit",label:"",align:"left",field:"edit"}],o=k({_id:"",date:"",getname:"",getaddress:"",getemail:"",getphone:"",products:[]}),u=F(!1),P=(a,s)=>{o._id=d[s]._id,o.getname=d[s].getname,o.getaddress=d[s].getaddress,o.getemail=d[s].getemail,o.getphone=d[s].getphone,o.products.splice(0,o.products.length),o.products.push(...JSON.parse(JSON.stringify(d[s].products))),u.value=!0},g=k({required(a){return!!a||"\u5FC5\u586B"},price(a){return a>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(a){var s,n,e;return!a||!a.length||((n=(s=a[0])==null?void 0:s.type)==null?void 0:n.includes("image"))&&((e=a[0])==null?void 0:e.size)<1024*1024||"\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),T=async a=>{try{await V.delete("/orders/"+a),await h.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),y()}catch(s){h.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError&&s.response.data?s.response.data.message:"\u767C\u751F\u932F\u8AA4"})}},A=async()=>{try{const{data:a}=await V.patch("/orders/"+o._id,o);h.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),y(),u.value=!1}catch(a){h.fire({icon:"success",title:"\u5931\u6557",text:a.isAxiosError?a.response.data.message:a.message})}o.submitting=!1},y=async()=>{try{const{data:a}=await V.get("/orders/all");d.splice(0,d.length),d.push(...a.result.map(s=>(s.totalPrice=s.products.reduce((n,e)=>n+e.product.price*e.quantity,0),s)))}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}};return y(),(a,s)=>{const n=I("router-link");return r(),_(M,null,{default:i(()=>[t("section",R,[t("div",j,[t("div",H,[K,l(n,{to:"/admin/user"},{default:i(()=>[W]),_:1}),l(n,{to:"/admin/product"},{default:i(()=>[X]),_:1}),l(n,{to:"/admin/store"},{default:i(()=>[G]),_:1}),l(n,{to:"/admin/order"},{default:i(()=>[Y]),_:1}),Z,ee]),t("div",te,[t("div",se,[u.value?N("",!0):(r(),m("div",le,"\u8A02\u55AE\u7BA1\u7406")),u.value?(r(),m("div",oe,"\u4FEE\u6539\u8A02\u55AE")):N("",!0),l(C)]),ae,u.value?(r(),_(z,{key:1,flat:"",bordered:""},{default:i(()=>[l(O,{onSubmit:J(A,["prevent"]),class:"q-pa-md"},{default:i(()=>[me,l(S,{class:"q-my-md"}),t("div",ue,[_e,l(x,{modelValue:o.getname,"onUpdate:modelValue":s[0]||(s[0]=e=>o.getname=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"]),pe,l(x,{modelValue:o.getphone,"onUpdate:modelValue":s[1]||(s[1]=e=>o.getphone=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"]),ge,l(x,{modelValue:o.getaddress,"onUpdate:modelValue":s[2]||(s[2]=e=>o.getaddress=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"]),he,l(x,{modelValue:o.getemail,"onUpdate:modelValue":s[3]||(s[3]=e=>o.getemail=e),rules:[g.required],color:"black"},null,8,["modelValue","rules"])]),xe,l(S,{class:"q-my-md"}),(r(!0),m(U,null,Q(o.products,e=>(r(),_(z,{flat:"",key:e._id},{default:i(()=>[t("div",be,[l(L,{class:"col-2",src:e.product.image[0]},null,8,["src"]),t("div",fe,[t("div",ve,[ye,l(E,{color:e.color,size:"xs",class:"q-ml-xs"},null,8,["color"])]),(r(!0),m(U,null,Q(e.product.color,(c,q)=>(r(),_($,{class:"q-my-md",color:"black",modelValue:e.color,"onUpdate:modelValue":w=>e.color=w,val:c,label:c,key:q},null,8,["modelValue","onUpdate:modelValue","val","label"]))),128)),t("div",qe,"\u5546\u54C1\u5C3A\u5BF8: "+p(e.size),1),(r(!0),m(U,null,Q(e.product.size,(c,q)=>(r(),_($,{class:"q-my-md",color:"black",modelValue:e.size,"onUpdate:modelValue":w=>e.size=w,val:c,label:c,key:q},null,8,["modelValue","onUpdate:modelValue","val","label"]))),128)),we,t("div",ke,[l(x,{modelValue:e.quantity,"onUpdate:modelValue":c=>e.quantity=c,rules:[g.required],color:"black"},null,8,["modelValue","onUpdate:modelValue","rules"])])]),l(C),t("div",Ve,[t("div",Qe,[t("div",Ue,"NT$:"+p(e.product.price*e.quantity),1)])])]),l(S,{class:"q-my-md"})]),_:2},1024))),128)),t("div",Se,[l(v,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",color:"black",label:"\u53D6\u6D88",onClick:s[4]||(s[4]=e=>u.value=!1),disabled:o.submitting},null,8,["disabled"]),l(v,{unelevated:"",class:"q-py-sm q-px-xxl text-subtitle2",type:"submit",color:"black text-white",label:"\u78BA\u5B9A"})])]),_:1},8,["onSubmit"])]),_:1})):(r(),_(D,{key:0,grid:a.$q.screen.xs,flat:"",bordered:"",rows:d,columns:B,"row-key":"name"},{"body-cell-date":i(e=>[l(f,{date:e},{default:i(()=>[b(p(new Date(e.row.date).toLocaleDateString()),1)]),_:2},1032,["date"])]),"body-cell-userid":i(e=>[l(f,{userid:e},{default:i(()=>[b(p(e.row.user._id),1)]),_:2},1032,["userid"])]),"body-cell-totalPrice":i(e=>[l(f,{date:e},{default:i(()=>[e.row.totalPrice<1500?(r(),m("span",ie,"NT$ "+p(e.row.totalPrice+80),1)):(r(),m("span",re,"NT$ "+p(e.row.totalPrice),1))]),_:2},1032,["date"])]),"body-cell-edit":i(e=>[l(f,{edit:e},{default:i(()=>[t("div",de,[l(v,{class:"q-mb-sm q-px-lg",outline:"",onClick:c=>P(e.row._id,e.rowIndex)},{default:i(()=>[ne]),_:2},1032,["onClick"]),l(v,{outline:"",onClick:c=>T(e.row._id)},{default:i(()=>[ce]),_:2},1032,["onClick"])])]),_:2},1032,["edit"])]),_:1},8,["grid","rows"]))])])])]),_:1})}}};export{ot as default};
