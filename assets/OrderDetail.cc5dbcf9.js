import{b as u,a as y}from"./QTabs.e8789249.js";import{Q as l}from"./QSpace.ab43215f.js";import{Q as n}from"./QSeparator.d36ff4c0.js";import{Q as q}from"./QImg.d88c2cdb.js";import{Q as _}from"./QCard.08b29dcf.js";import{Q as f}from"./QPage.ba57bee6.js";import{u as Q,q as k,a as h,x as m,y as g,z as d,at as S,V as B,au as D,X as j,A as C,D as t,B as o,_ as i,Y as N,Z as P,$ as R,E as x}from"./index.0d4fdb09.js";import"./use-timeout.dfa2929f.js";import"./rtl.4b414a6d.js";import"./use-dark.60ffaa8c.js";const T={class:"row lt-lg justify-center border-black bg-grey-2 q-py-xs"},V={class:"container"},z={class:"row q-mt-none q-mt-lg-xl"},A={class:"col-2 gt-md"},E=t("div",{class:"text-h6"},"\u6211\u7684\u5E33\u6236",-1),L=t("div",{class:"text-subtitle1 q-my-lg"},"\u500B\u4EBA\u8CC7\u6599",-1),$=t("div",{class:"text-subtitle1 q-my-lg"},"\u8A02\u55AE\u67E5\u8A62",-1),F={class:"col-12 col-lg-10"},I={class:"flex items-center text-center q-mb-lg q-mt-lg q-mt-lg-none"},O=t("div",{class:"text-h4 text-weight-medium"},"\u8A02\u55AE\u8A73\u7D30",-1),U=t("div",{class:"text-body1 q-mb-md"},"\u8A02\u55AE\u8A73\u7D30\u9801\u9762",-1),X=t("div",{class:"text-h5 q-mb-md"},"\u8A02\u55AE\u8A0A\u606F",-1),Y={class:"text-body2 text-weight-regular q-mb-xs"},Z={class:"text-body2 text-weight-regular"},G=t("div",{class:"text-h5 q-mb-md"},"\u5546\u54C1\u8CC7\u8A0A",-1),H={class:"row"},J={class:"col-7 column q-ml-md"},K={class:"text-h6"},M={class:"text-subtitle1 text-weight-medium"},W={class:"text-subtitle1 text-weight-medium"},tt={class:"text-subtitle1 text-weight-medium"},et={class:"col column items-end"},st={class:"text-subtitle1 text-weight-medium"},ot=t("div",{class:"text-h5 q-mb-xl"},"\u914D\u9001\u8A0A\u606F",-1),it={class:"text-body2 text-weight-regular q-mb-xs"},at={class:"text-body2 text-weight-regular q-mb-xs"},rt={class:"text-body2 text-weight-regular q-mb-xs"},dt={class:"text-body2 text-weight-regular q-mb-xs"},ct={class:"col-12 col-lg-2 q-mt-lg-xl"},lt={class:"row justify-between"},nt=t("div",{class:"text-subtitle1 text-weight-medium"},"\u5546\u54C1\u91D1\u984D",-1),_t={class:"text-subtitle1 text-weight-regular"},mt=t("div",{class:"row justify-between"},[t("div",{class:"text-subtitle1 text-weight-medium"},"\u904B\u8CBB"),t("div",{class:"text-subtitle1 text-weight-regular"},"80")],-1),ut={class:"row justify-between"},ht=t("div",{class:"text-subtitle1 text-weight-medium"},"\u7E3D\u91D1\u984D",-1),gt={class:"text-subtitle1 text-weight-regular"},Dt={__name:"OrderDetail",setup(xt){const b=S(),v=B();Q();const e=k({_id:"",date:"",getaddress:"",getemail:"",getname:"",getphone:"",getway:0,products:[]}),p=h(()=>e.products.reduce((c,a)=>c+a.product.price*a.quantity,0)),w=h(()=>{const s=e.products.reduce((c,a)=>c+a.product.price*a.quantity,0);return s===0?0:s>=1500?s:s+80});return(async()=>{try{const{data:s}=await D.get("/orders/"+b.params.id);e._id=s.result._id,e.date=s.result.date,e.getaddress=s.result.getaddress,e.getemail=s.result.getemail,e.getname=s.result.getname,e.getphone=s.result.getphone,e.getway=s.result.getway,e.products=s.result.products}catch{j.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u8CC7\u6599\u5931\u6557"}),v.go(-1)}})(),(s,c)=>{const a=C("router-link");return m(),g(f,null,{default:d(()=>[t("div",T,[o(y,{"indicator-color":"red",shrink:""},{default:d(()=>[o(u,{exact:"",name:"/user",to:"/user",label:"\u500B\u4EBA\u8CC7\u6599"}),o(u,{exact:"",name:"/order",to:"/order",label:"\u8A02\u55AE\u67E5\u8A62"})]),_:1})]),t("section",V,[t("div",z,[t("div",A,[E,o(a,{to:"/user"},{default:d(()=>[L]),_:1}),o(a,{to:"/order"},{default:d(()=>[$]),_:1})]),t("div",F,[t("div",I,[O,o(l)]),U,o(_,{flat:"",bordered:"",class:"q-pa-md q-mb-xxxl"},{default:d(()=>[X,t("div",Y,"\u6210\u7ACB\u6642\u9593:"+i(new Date(e.date).toLocaleDateString()),1),t("div",Z,"\u8A02\u55AE\u7DE8\u865F:"+i(e._id),1),o(n,{class:"q-my-md"}),G,(m(!0),N(R,null,P(e.products,r=>(m(),g(_,{class:"my-card",key:r._id},{default:d(()=>[t("div",H,[o(q,{class:"col-2",src:r.product.image[0]},null,8,["src"]),t("div",J,[t("div",K,i(r.product.name),1),o(l),t("div",M,"\u5546\u54C1\u984F\u8272:"+i(r.color),1),t("div",W,"\u5546\u54C1\u6578\u91CF:"+i(r.quantity),1),t("div",tt,"\u5546\u54C1\u5C3A\u5BF8:"+i(r.size),1)]),t("div",et,[o(l),t("div",st,"NT$:"+i(r.product.price*r.quantity),1)])]),o(n,{class:"q-my-md"})]),_:2},1024))),128)),ot,t("div",it,"\u53D6\u8CA8\u4EBA\u540D\u5B57:"+i(e.getname),1),t("div",at,"\u53D6\u8CA8\u4EBA\u96FB\u8A71:"+i(e.getphone),1),t("div",rt,"\u53D6\u8CA8\u4EBA\u5730\u5740:"+i(e.getaddress),1),t("div",dt,"\u53D6\u8CA8\u4EBA\u4FE1\u7BB1:"+i(e.getemail),1),o(n,{class:"q-my-md"}),o(_,{class:"row reverse my-card q-mt-sm q-mt-lg-xl"},{default:d(()=>[t("div",ct,[t("div",lt,[nt,t("div",_t,i(x(p)),1)]),mt,t("div",ut,[ht,t("div",gt,i(x(w)),1)])])]),_:1})]),_:1})])])])]),_:1})}}};export{Dt as default};