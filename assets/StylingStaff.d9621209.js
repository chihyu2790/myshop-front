import{Q as $}from"./QSpace.454c81e3.js";import{r as v,F as q,N as tt,a as et,P as st,H as a,I as f,J as r,ay as h,aj as u,S as o,K as s,V as i,U as k,Q as w,Y as b,aB as A,W as c,M as z,X as m,T as V,R as lt,y as R}from"./index.53143171.js";import{Q}from"./QSeparator.bc0bc5c0.js";import{Q as I}from"./QInput.1f5ba66c.js";import{Q as ot}from"./QFile.bced29e9.js";import{Q as D}from"./QImg.de1747d4.js";import{Q as J}from"./QForm.19bd95a2.js";import{Q as E}from"./QCard.2d392d70.js";import{Q as K}from"./QRadio.6f3ddbc7.js";import{Q as at}from"./QDialog.de88eaef.js";import{Q as it}from"./QPage.e8bca856.js";import{C as L}from"./ClosePopup.ce240280.js";import"./use-dark.efb5c460.js";import"./use-key-composition.58b0f758.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./focus-manager.d6507951.js";import"./use-form.5cf556c4.js";import"./QChip.bc9ec695.js";import"./option-sizes.972ec55c.js";import"./use-prevent-scroll.41286cee.js";import"./use-timeout.ca2312a0.js";import"./use-model-toggle.10549fb7.js";const rt={class:"container"},nt={class:"row q-mt-xl"},dt={class:"col-2"},ut=o("div",{class:"text-h6"},"\u5E97\u54E1\u7BA1\u7406",-1),ct=o("div",{class:"text-subtitle1 q-my-lg"},"\u5E97\u54E1\u8CC7\u6599",-1),mt=o("div",{class:"text-subtitle1 q-my-lg"},"\u7A7F\u642D\u7BA1\u7406",-1),pt={class:"col-10"},xt={class:"flex items-center text-center q-mb-lg"},vt={key:0,class:"text-h4 text-weight-medium"},ft={key:1,class:"text-h4 text-weight-medium"},gt=o("div",{class:"text-body1 q-mb-md"},"\u5E97\u54E1\u7A7F\u642D\u7BA1\u7406\u9801\u9762",-1),_t=o("div",{class:"text-h5 text-weight-medium"},"\u7A7F\u642D\u8CC7\u6599",-1),yt={style:{"max-width":"400px"}},ht=o("div",{class:"text-subtitle1 text-weight-medium"},"\u7A7F\u642D\u540D\u7A31",-1),bt=o("div",{class:"text-subtitle1 text-weight-medium q-mb-lg"},"\u7A7F\u642D\u4E3B\u5716",-1),qt=o("div",{class:"text-subtitle1 text-weight-medium q-mb-lg"},"\u7A7F\u642D\u63CF\u8FF0",-1),kt={class:"row items-center q-pr-md"},wt=o("div",{class:"text-h5"},"\u5546\u54C1\u8CC7\u6599",-1),Vt={class:"col-10 column"},Qt=o("div",{class:"text-subtitle1 text-weight-medium"},"\u5546\u54C1\u540D\u7A31:",-1),Ct={class:"text-subtitle1 text-weight-medium"},St={class:"text-subtitle1 text-weight-medium"},Ut={class:"text-subtitle1 text-weight-medium"},$t={class:"q-mt-xl"},At={class:"row"},zt={class:"row absolute-top text-subtitle1 transparent-background"},Et=o("div",{class:"text-h5"},"\u5546\u54C1\u8CC7\u8A0A",-1),Bt={style:{width:"250px"}},Ft=o("div",{class:"text-subtitle1 text-weight-medium"},"\u5546\u54C1\u540D\u7A31",-1),It={class:"row q-mt-xl"},Dt=["onClick"],Nt={class:"q-mb-xs"},Pt=o("div",{class:"text-subtitle1 text-weight-medium q-my-lg"},"\u5546\u54C1\u984F\u8272",-1),jt={key:0,class:"q-my-lg"},Ht=o("div",{class:"text-subtitle1 text-weight-medium q-my-lg"},"\u5546\u54C1\u5C3A\u5BF8",-1),Mt={key:1},Rt={class:"q-mt-xl"},xe={__name:"StylingStaff",setup(Jt){v(0);const C=v(""),S=v(""),g=v(""),_=q([]),U=q([]),T=tt(),B=v(!1),N=q([]),d=q({name:"",description:"",image:null}),p=v(!0);v("");const P=q({required(l){return!!l||"\u5FC5\u586B"}}),W=()=>{S.value="",C.value="",g.value=""},X=async()=>{await T.addCart({product:y.value[0]._id,quantity:1,color:C.value,size:S.value}),j()},Y=async()=>{p.value=!0;try{await h.patch("/staffs/delete"),_.splice(0,_.length)}catch(l){u.fire({icon:"error",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}},G=async()=>{const l=new FormData;for(const t in d)l.append(t,d[t]);try{const{data:t}=await h.post("/stylings",l);u.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u7A7F\u642D\u6210\u529F"}),p.value=!0}catch(t){u.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}},y=et(()=>N.filter(l=>l.name.includes(g.value))),O=async l=>{try{await h.delete("/stylings/"+l),await u.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),H()}catch(t){u.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError&&t.response.data?t.response.data.message:"\u767C\u751F\u932F\u8AA4"})}},Z=async()=>{try{const{data:l}=await h.get("/products");N.push(...l.result)}catch(l){u.fire({icon:"error",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}},j=async()=>{try{const{data:l}=await h.get("/staffs/cart");_.splice(0,_.length),_.push(...l.result)}catch(l){u.fire({icon:"error",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}},H=async()=>{try{const{data:l}=await h.get("/stylings");U.splice(0,U.length),U.push(...l.result)}catch(l){u.fire({icon:"error",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}};return Z(),j(),H(),(l,t)=>{const M=st("router-link");return a(),f(it,null,{default:r(()=>[o("section",rt,[o("div",nt,[o("div",dt,[ut,s(M,{to:"/staff"},{default:r(()=>[ct]),_:1}),s(M,{to:"/staff/styling"},{default:r(()=>[mt]),_:1})]),o("div",pt,[o("div",xt,[p.value?(a(),i("div",vt,"\u7A7F\u642D\u7BA1\u7406")):k("",!0),p.value?k("",!0):(a(),i("div",ft,"\u7A7F\u642D\u4E0A\u50B3")),s($),p.value?(a(),f(w,{key:2,class:"q-px-xl",outline:"",color:"black",label:"\u65B0\u589E\u7A7F\u642D",onClick:t[0]||(t[0]=e=>p.value=!1)})):k("",!0)]),gt,p.value?(a(),f(E,{key:1,flat:""},{default:r(()=>[s(Q,{class:"q-mb-lg"}),o("div",At,[(a(!0),i(m,null,c(U,(e,n)=>(a(),i("div",{class:"col-3 full-height q-pa-xs",key:n},[s(D,{class:"col-12",src:e.image,ratio:4/5},{default:r(()=>[o("div",zt,[s($),s(b,{name:"fa-solid fa-x",class:"pointer",onClick:x=>O(e._id)},null,8,["onClick"])])]),_:2},1032,["src"])]))),128))])]),_:1})):(a(),f(E,{key:0,flat:"",bordered:"",class:"q-pa-md"},{default:r(()=>[_t,s(Q,{class:"q-my-md"}),s(J,{onSubmit:A(G,["prevent"])},{default:r(()=>[o("div",yt,[ht,s(I,{modelValue:d.name,"onUpdate:modelValue":t[1]||(t[1]=e=>d.name=e),rules:[P.required],color:"black"},null,8,["modelValue","rules"]),bt,s(ot,{modelValue:d.image,"onUpdate:modelValue":t[4]||(t[4]=e=>d.image=e),rules:[P.size],accept:"image/*",filled:"","bottom-slots":"",counter:""},{prepend:r(()=>[s(b,{name:"cloud_upload",onClick:t[2]||(t[2]=A(()=>{},["stop","prevent"]))})]),append:r(()=>[s(b,{name:"close",onClick:t[3]||(t[3]=A(e=>l.model=null,["stop","prevent"])),class:"cursor-pointer"})]),hint:r(()=>[]),_:1},8,["modelValue","rules"]),qt,s(I,{modelValue:d.description,"onUpdate:modelValue":t[5]||(t[5]=e=>d.description=e),class:"q-mb-xl",type:"textarea",filled:"",color:"black"},null,8,["modelValue"])]),o("div",kt,[wt,s($),s(b,{name:"fa-solid fa-plus",size:"xs",class:"pointer",onClick:t[6]||(t[6]=e=>B.value=!0)})]),s(Q,{class:"q-my-md"}),(a(!0),i(m,null,c(_,(e,n)=>(a(),i("div",{class:"row q-mb-md",key:n},[s(D,{class:"col-2 q-mr-sm",src:e.product.image[0],style:{height:"180px","max-width":"150px"}},null,8,["src"]),o("div",Vt,[Qt,o("div",Ct,z(e.product.name),1),s($),o("div",St,"\u5546\u54C1\u984F\u8272:"+z(e.color),1),o("div",Ut,"\u5546\u54C1\u5C3A\u5BF8:"+z(e.size),1)])]))),128)),s(Q),o("div",$t,[s(w,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",color:"black",label:"\u53D6\u6D88",onClick:t[7]||(t[7]=e=>Y())}),s(w,{type:"submit",unelevated:"",color:"black",class:"q-py-sm q-px-xxl text-subtitle2",label:"\u78BA\u5B9A"})])]),_:1},8,["onSubmit"])]),_:1})),s(at,{modelValue:B.value,"onUpdate:modelValue":t[13]||(t[13]=e=>B.value=e),persistent:"",onHide:t[14]||(t[14]=e=>W())},{default:r(()=>[s(E,{style:{"min-width":"800px"},class:"q-pa-md"},{default:r(()=>[s(J,{onSubmit:t[12]||(t[12]=A(e=>X(),["prevent"]))},{default:r(()=>[Et,s(Q,{class:"q-my-md"}),o("div",Bt,[Ft,s(I,{modelValue:g.value,"onUpdate:modelValue":t[9]||(t[9]=e=>g.value=e),color:"black"},{prepend:r(()=>[s(b,{name:"fa-solid fa-magnifying-glass",size:"xs"})]),append:r(()=>[s(b,{name:"close",onClick:t[8]||(t[8]=e=>g.value=""),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),o("div",It,[(a(!0),i(m,null,c(V(y),(e,n)=>(a(),i("div",{class:"col-3 q-pa-sm q-mb-md cursor-pointer",onClick:x=>g.value=e.name,key:n},[s(E,{flat:"",square:"",class:"column justify-between full-height"},{default:r(()=>[o("div",Nt,z(e.name),1),s(D,{src:e.image[0],ratio:1},null,8,["src"])]),_:2},1024)],8,Dt))),128))]),Pt,V(y).length===1?(a(),i("div",jt,[(a(!0),i(m,null,c(V(y),e=>(a(),i("div",{key:e.id},[(a(!0),i(m,null,c(e.color,(n,x)=>(a(),f(lt,{class:"q-mr-xs",color:n,size:"24px",key:x},null,8,["color"]))),128)),(a(!0),i(m,null,c(e.color,(n,x)=>(a(),f(K,{modelValue:C.value,"onUpdate:modelValue":t[10]||(t[10]=F=>C.value=F),color:"black",class:"text-weight-medium",val:n,label:n,key:x},null,8,["modelValue","val","label"]))),128))]))),128))])):k("",!0),Ht,V(y).length===1?(a(),i("div",Mt,[(a(!0),i(m,null,c(V(y),e=>(a(),i("div",{key:e.id},[(a(!0),i(m,null,c(e.size,(n,x)=>(a(),f(K,{modelValue:S.value,"onUpdate:modelValue":t[11]||(t[11]=F=>S.value=F),val:n,color:"black",class:"text-weight-medium",label:n,key:x},null,8,["modelValue","val","label"]))),128))]))),128))])):k("",!0),o("div",Rt,[R(s(w,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",color:"black",label:"\u53D6\u6D88"},null,512),[[L]]),R(s(w,{type:"submit",unelevated:"",class:"q-py-sm q-px-xxl text-subtitle2",color:"black text-white",label:"\u78BA\u5B9A"},null,512),[[L]])])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])])]),_:1})}}};export{xe as default};
