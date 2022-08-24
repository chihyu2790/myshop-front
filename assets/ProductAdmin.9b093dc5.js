import{Q as $}from"./QSpace.8261e0c9.js";import{r as w,F as p,a as F,K as m,L as b,M as t,av as z,a9 as g,N as A,R as i,O as s,aa as q,T as v,Q as V,S as B,U,P as M,ac as n,ab as N,ae as Q,ad as T,ay as h}from"./index.d8b3df7e.js";import{Q as k}from"./QInput.bbaa874a.js";import{a as D,Q as S}from"./QTable.8e6ac948.js";import{Q as E}from"./QChip.4f91d3c0.js";import{Q as a}from"./QCheckbox.bc620241.js";import{Q as I}from"./QFile.7d6d2135.js";import{Q as P}from"./QForm.b3966b2a.js";import{Q as K}from"./QCard.fe9dec6c.js";import{Q as O}from"./QPage.d05c5b3a.js";import{u as R}from"./use-quasar.e2e31380.js";import"./use-key-composition.d78daa21.js";import"./use-dark.8a152d4a.js";import"./format.2a3572e1.js";import"./uid.42677368.js";import"./use-form.71407145.js";import"./QSeparator.87df3f89.js";import"./QList.524ab138.js";import"./rtl.4b414a6d.js";import"./use-prevent-scroll.26c04249.js";import"./QItem.1fc91bc2.js";import"./selection.8ee3ca47.js";import"./use-model-toggle.755b5428.js";import"./QDialog.5e69c51f.js";import"./use-timeout.309a8458.js";import"./use-fullscreen.5a711c5b.js";import"./option-sizes.c4df7dec.js";const j={class:"container"},G={class:"row q-mt-xl"},H={class:"col-2"},J=i("div",{class:"text-h6"},"\u5F8C\u53F0\u7BA1\u7406",-1),W=i("div",{class:"text-subtitle1 q-my-lg"},"\u4F7F\u7528\u8005\u7BA1\u7406",-1),Y=i("div",{class:"text-subtitle1 q-my-lg"},"\u5546\u54C1\u7BA1\u7406",-1),Z=i("div",{class:"text-subtitle1 q-my-lg"},"\u5E97\u92EA\u7BA1\u7406",-1),ee=i("div",{class:"text-subtitle1 q-my-lg"},"\u8A02\u55AE\u7BA1\u7406",-1),le=i("div",{class:"text-subtitle1 q-my-lg"},"\u6D3B\u52D5\u7BA1\u7406",-1),oe=i("div",{class:"text-subtitle1 q-my-lg"},"\u767B\u51FA",-1),se={class:"col-10"},ae={class:"flex items-center text-center q-mb-lg"},de={key:0,class:"text-h4 text-weight-medium"},ie={key:1,class:"text-h4 text-weight-medium"},te={key:2,class:"text-h4 text-weight-medium"},ce=i("div",{class:"text-body1 q-mb-md"},"\u7BA1\u7406\u5546\u54C1\u9801\u9762",-1),re=["src"],me={class:"column"},ne=Q("\u4FEE\u6539"),ue=Q("\u4E0B\u67B6"),fe={style:{"max-width":"400px"}},pe={class:"text-subtitle1 text-weight-medium"},be={class:"text-subtitle1 text-weight-medium"},Ve={class:"text-subtitle1 text-weight-medium q-mb-sm"},ke={class:"text-subtitle1 text-weight-medium q-mb-lg"},ge={class:"text-subtitle1 text-weight-medium q-mb-lg"},qe={class:"text-subtitle1 text-weight-medium q-mb-lg"},ve={class:"text-subtitle1 text-weight-medium q-mb-md"},ye={class:"row"},xe={class:"text-subtitle1 text-weight-medium q-my-md"},we={class:"q-my-xxl"},Ze={__name:"ProductAdmin",setup(ze){w(!1);const y=w(""),X=R(),u=w("");p(["\u8863\u670D","\u5305\u5305"]),p([]);const e=p({_id:"",name:"",price:0,category:"",sell:!1,image:[],color:[],size:[],classify:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),f=p({required(d){return!!d||"\u5FC5\u586B"},price(d){return d>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(d){var l,c,o;return!d||!d.length||((c=(l=d[0])==null?void 0:l.type)==null?void 0:c.includes("image"))&&((o=d[0])==null?void 0:o.size)<1024*1024||"\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}});e.classify=F(()=>u.value.split(/\s+/));const C=(d,l)=>{e._id=d,l>-1?(e.name=r[l].name,e.price=r[l].price,e.category=r[l].category,e.sell=r[l].sell,e.description=r[l].description,e.size=r[l].size,e.color=r[l].color,u.value=r[l].classify.toString().replace(/,/g," ")):(e.name="",e.price=0,e.category="",e.sell=!1,e.description="",e.image=[],e.color=[],e.size=[],u.value=""),e.idx=l,e.dialog=!0,e.valid=!1,e.submitting=!1,e.classify.splice(0,e.classify.length)},_=async()=>{e.submitting=!0;const d=new FormData;for(const l in e)if(!["_id","idx","dialog","valid","submitting"].includes(l))if(l==="image")for(const c of e.image)d.append(l,c);else if(l==="color")for(const c of e.color)d.append(l,c);else if(l==="size")for(const c of e.size)d.append(l,c);else if(l==="classify")for(const c of e.classify)d.append(l,c);else d.append(l,e[l]);try{if(e._id.length===0){const{data:l}=await z.post("/products",d);r.push(l.result),g.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await z.patch("/products/"+e._id,d);r[e.idx]=l.result,g.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(l){g.fire({icon:"success",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}e.submitting=!1},L=[{name:"image",align:"left",label:"",field:"image"},{name:"_id",align:"left",label:"id",field:"_id"},{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:d=>d.name,format:d=>`${d}`},{name:"edit",label:"\u5546\u54C1\u64CD\u4F5C",align:"left"}],r=p([]);return(async()=>{try{const{data:d}=await z.get("/products/all");r.push(...d.result)}catch(d){g.fire({icon:"error",title:"\u5931\u6557",text:d.isAxiosError?d.response.data.message:d.message})}})(),(d,l)=>{const c=A("router-link");return m(),b(O,null,{default:t(()=>[i("section",j,[i("div",G,[i("div",H,[J,s(c,{to:"/admin/user"},{default:t(()=>[W]),_:1}),s(c,{to:"/admin/product"},{default:t(()=>[Y]),_:1}),s(c,{to:"/admin/store"},{default:t(()=>[Z]),_:1}),s(c,{to:"/admin/order"},{default:t(()=>[ee]),_:1}),le,oe]),i("div",se,[i("div",ae,[e.dialog?v("",!0):(m(),q("div",de,"\u5546\u54C1\u7BA1\u7406")),e.dialog&&e._id==""?(m(),q("div",ie,"\u65B0\u589E\u5546\u54C1")):v("",!0),e.dialog&&e._id!=""?(m(),q("div",te,"\u7DE8\u8F2F\u5546\u54C1")):v("",!0),s($),e.dialog?v("",!0):(m(),b(V,{key:3,class:"q-px-xl",outline:"",color:"black",label:"\u65B0\u589E\u5546\u54C1",onClick:l[0]||(l[0]=o=>C("",-1))}))]),ce,e.dialog?(m(),b(K,{key:1,flat:"",bordered:"",modelValue:e.dialog,"onUpdate:modelValue":l[44]||(l[44]=o=>e.dialog=o)},{default:t(()=>[s(P,{onSubmit:h(_,["prevent"]),class:"q-pa-md"},{default:t(()=>[i("div",fe,[i("div",pe,"\u540D\u7A31:"+n(e.name),1),s(k,{modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=o=>e.name=o),rules:[f.required],color:"black"},null,8,["modelValue","rules"]),i("div",be,"\u50F9\u683C:"+n(e.price),1),s(k,{modelValue:e.price,"onUpdate:modelValue":l[3]||(l[3]=o=>e.price=o),modelModifiers:{number:!0},min:"0",type:"number",rules:[f.required,f.price],color:"black"},null,8,["modelValue","rules"]),i("div",Ve,"\u985E\u5225:"+n(e.classify),1),s(k,{color:"black",modelValue:u.value,"onUpdate:modelValue":l[4]||(l[4]=o=>u.value=o),rules:[f.required]},null,8,["modelValue","rules"]),(m(!0),q(T,null,N(e.classify,(o,x)=>(m(),b(E,{key:x},{default:t(()=>[Q(n(o),1)]),_:2},1024))),128)),i("div",ke,"\u4E0A\u67B6:"+n(e.sell),1),s(a,{modelValue:e.sell,"onUpdate:modelValue":l[5]||(l[5]=o=>e.sell=o),color:"black",class:"q-mb-md"},null,8,["modelValue"]),i("div",ge,"\u5546\u54C1\u5716\u7247"+n(e.image),1),s(I,{modelValue:e.image,"onUpdate:modelValue":l[8]||(l[8]=o=>e.image=o),multiple:"",rules:[f.size],accept:"image/*",filled:"","bottom-slots":"",counter:""},{prepend:t(()=>[s(U,{name:"cloud_upload",onClick:l[6]||(l[6]=h(()=>{},["stop","prevent"]))})]),append:t(()=>[s(U,{name:"close",onClick:l[7]||(l[7]=h(o=>d.model=null,["stop","prevent"])),class:"cursor-pointer"})]),hint:t(()=>[]),_:1},8,["modelValue","rules"]),i("div",qe,"\u5546\u54C1\u63CF\u8FF0"+n(e.description),1),s(k,{class:"q-mb-lg",modelValue:e.description,"onUpdate:modelValue":l[9]||(l[9]=o=>e.description=o),type:"textarea",filled:"",color:"black"},null,8,["modelValue"])]),i("div",ve,"\u5546\u54C1\u984F\u8272"+n(e.color),1),i("div",ye,[s(a,{modelValue:e.color,"onUpdate:modelValue":l[10]||(l[10]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1 text-body2",label:"black",val:"black",color:"black"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[11]||(l[11]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",val:"white",label:"white",color:"white"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[12]||(l[12]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",val:"grey",label:"grey",color:"grey"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[13]||(l[13]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",val:"grey-1",label:"grey-1",color:"grey-1"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[14]||(l[14]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",val:"grey-8",label:"grey-8",color:"grey-8"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[15]||(l[15]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",val:"grey-14",label:"grey-14",color:"grey-14"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[16]||(l[16]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1 text-caption",label:"yellow-10",val:"yellow-10",color:"yellow-10"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[17]||(l[17]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"orange-3",val:"orange-3",color:"orange-3"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[18]||(l[18]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"orange-6",val:"orange-6",color:"orange-6"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[19]||(l[19]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"orange-11",val:"orange-11",color:"orange-11"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[20]||(l[20]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"brown-1",val:"brown-1",color:"brown-1"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[21]||(l[21]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"brown-2",val:"brown-2",color:"brown-2"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[22]||(l[22]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"brown-9",val:"brown-9",color:"brown-9"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[23]||(l[23]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"brown-12",val:"brown-12",color:"brown-12"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[24]||(l[24]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"brown",val:"brown",color:"brown"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[25]||(l[25]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"blue-grey-3",val:"blue-grey-3",color:"blue-grey-3"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[26]||(l[26]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"blue-grey-7",val:"blue-grey-7",color:"blue-grey-7"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[27]||(l[27]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"blue-2",val:"blue-2",color:"blue-2"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[28]||(l[28]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"blue-9",val:"blue-9",color:"blue-9"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[29]||(l[29]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"blue-11",val:"blue-11",color:"blue-11"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[30]||(l[30]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"blue-12",val:"blue-12",color:"blue-12"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[31]||(l[31]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"indigo-10",val:"indigo-10",color:"indigo-10"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[32]||(l[32]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"deep-purple-2",val:"deep-purple-2",color:"deep-purple-2"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[33]||(l[33]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"pink-7",val:"pink-7",color:"pink-7"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[34]||(l[34]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"pink-10",val:"pink-10",color:"pink-10"},null,8,["modelValue"]),s(a,{modelValue:e.color,"onUpdate:modelValue":l[35]||(l[35]=o=>e.color=o),"checked-icon":"fa-solid fa-circle-dot","keep-color":"",dense:"","unchecked-icon":"fa-solid fa-circle",size:"md",class:"q-mr-sm q-mb-sm col-1",label:"red-10",val:"red-10",color:"red-10"},null,8,["modelValue"])]),i("div",xe,"\u5546\u54C1\u5C3A\u5BF8"+n(e.size),1),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[36]||(l[36]=o=>e.size=o),class:"text-weight-medium",val:"XXS",label:"XXS"},null,8,["modelValue"]),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[37]||(l[37]=o=>e.size=o),class:"text-weight-medium",val:"XS",label:"XS"},null,8,["modelValue"]),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[38]||(l[38]=o=>e.size=o),class:"text-weight-medium",val:"S",label:"S"},null,8,["modelValue"]),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[39]||(l[39]=o=>e.size=o),class:"text-weight-medium",val:"M",label:"M"},null,8,["modelValue"]),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[40]||(l[40]=o=>e.size=o),class:"text-weight-medium",val:"L",label:"L"},null,8,["modelValue"]),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[41]||(l[41]=o=>e.size=o),class:"text-weight-medium",val:"XL",label:"XL"},null,8,["modelValue"]),s(a,{color:"black",modelValue:e.size,"onUpdate:modelValue":l[42]||(l[42]=o=>e.size=o),class:"text-weight-medium",val:"XXL",label:"XXL"},null,8,["modelValue"]),i("div",we,[s(V,{outline:"",class:"q-py-sm q-px-xxl text-subtitle2 q-mr-md",color:"black",label:"\u53D6\u6D88",onClick:l[43]||(l[43]=o=>e.dialog=!1),disabled:e.submitting},null,8,["disabled"]),s(V,{unelevated:"",class:"q-py-sm q-px-xxl text-subtitle2",type:"submit",color:"black text-white",label:"\u78BA\u5B9A"})])]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"])):(m(),b(D,{key:0,grid:B(X).screen.xs,flat:"",bordered:"",rows:r,columns:L,"row-key":"name",filter:y.value},{"top-right":t(()=>[s(k,{borderless:"",dense:"",debounce:"300",modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=o=>y.value=o),placeholder:"Search"},{append:t(()=>[s(U,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-image":t(o=>[s(S,null,{default:t(()=>[s(M,{square:"",size:"100px"},{default:t(()=>[i("img",{src:o.row.image[0],alt:"",class:"q-mb-xl"},null,8,re)]),_:2},1024)]),_:2},1024)]),"body-cell-edit":t(o=>[s(S,{edit:o},{default:t(()=>[i("div",me,[s(V,{class:"q-mb-sm",onClick:x=>C(o.row._id,o.rowIndex),outline:""},{default:t(()=>[ne]),_:2},1032,["onClick"]),s(V,{onClick:x=>d.updateCart(o.row._id),outline:""},{default:t(()=>[ue]),_:2},1032,["onClick"])])]),_:2},1032,["edit"])]),_:1},8,["grid","rows","filter"]))])])])]),_:1})}}};export{Ze as default};
