import{c as A,a as d,h as L,b as Se,r as T,w,o as se,d as it,i as ue,l as G,g as U,e as nt,f as X,n as Fe,j as rt,k as te,p as ge,m as $e,s as ye,q as Ce,t as pe,u as st,v as Re,x as Qe,y as oe,z as Oe,A as Ae,B as ut,C as We,D as Ie,E as ct,F as K,G as dt,H as Q,I as V,J as k,K as y,L as J,M as ft,N as vt,O as mt,P as ht,Q as N,R as bt,S as _,T as R,U as Pe,V as gt,W as yt,X as pt,Y as we,Z as wt}from"./index.53143171.js";import{Q as re,a as xt,b as j}from"./QTabs.b31c03d1.js";import{Q as qt}from"./QSpace.454c81e3.js";import{Q as le,a as ie,b as ne,c as xe}from"./QList.f6c04eb6.js";import{Q as _t}from"./QMenu.46b104ad.js";import{Q as kt}from"./QSeparator.bc0bc5c0.js";import{u as Ct,a as St,g as zt,b as Tt,c as Lt,d as qe}from"./use-prevent-scroll.41286cee.js";import{u as Bt,a as $t,b as Qt}from"./use-model-toggle.10549fb7.js";import{u as Ot}from"./use-timeout.ca2312a0.js";import{u as Pt,a as Vt}from"./use-dark.efb5c460.js";import{g as Ve,s as Ee}from"./touch.70a9dd44.js";import{c as Et}from"./selection.019f0881.js";import{b as ae}from"./format.2a3572e1.js";import{C as Me}from"./ClosePopup.ce240280.js";import"./rtl.4b414a6d.js";import"./focus-manager.d6507951.js";var Mt=A({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:c}){const i=d(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:i.value},Se(c.default))}}),Ht=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:c,emit:i}){const{proxy:{$q:u}}=U(),e=ue(G,()=>{console.error("QHeader needs to be child of QLayout")}),o=T(parseInt(t.heightHint,10)),n=T(!0),v=d(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||u.platform.is.ios&&e.isContainer.value===!0),m=d(()=>{if(t.modelValue!==!0)return 0;if(v.value===!0)return n.value===!0?o.value:0;const f=o.value-e.scroll.value.position;return f>0?f:0}),a=d(()=>t.modelValue!==!0||v.value===!0&&n.value!==!0),S=d(()=>t.modelValue===!0&&a.value===!0&&t.reveal===!0),C=d(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),x=d(()=>{const f=e.rows.value.top,B={};return f[0]==="l"&&e.left.space===!0&&(B[u.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),f[2]==="r"&&e.right.space===!0&&(B[u.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),B});function r(f,B){e.update("header",f,B)}function p(f,B){f.value!==B&&(f.value=B)}function q({height:f}){p(o,f),r("size",f)}function g(f){S.value===!0&&p(n,!0),i("focusin",f)}w(()=>t.modelValue,f=>{r("space",f),p(n,!0),e.animate()}),w(m,f=>{r("offset",f)}),w(()=>t.reveal,f=>{f===!1&&p(n,t.modelValue)}),w(n,f=>{e.animate(),i("reveal",f)}),w(e.scroll,f=>{t.reveal===!0&&p(n,f.direction==="up"||f.position<=t.revealOffset||f.position-f.inflectionPoint<100)});const E={};return e.instances.header=E,t.modelValue===!0&&r("size",o.value),r("space",t.modelValue),r("offset",m.value),se(()=>{e.instances.header===E&&(e.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const f=it(c.default,[]);return t.elevated===!0&&f.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(L(re,{debounce:0,onResize:q})),L("header",{class:C.value,style:x.value,onFocusin:g},f)}}});function _e(t,c,i){const u=Ce(t);let e,o=u.left-c.event.x,n=u.top-c.event.y,v=Math.abs(o),m=Math.abs(n);const a=c.direction;a.horizontal===!0&&a.vertical!==!0?e=o<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?e=n<0?"up":"down":a.up===!0&&n<0?(e="up",v>m&&(a.left===!0&&o<0?e="left":a.right===!0&&o>0&&(e="right"))):a.down===!0&&n>0?(e="down",v>m&&(a.left===!0&&o<0?e="left":a.right===!0&&o>0&&(e="right"))):a.left===!0&&o<0?(e="left",v<m&&(a.up===!0&&n<0?e="up":a.down===!0&&n>0&&(e="down"))):a.right===!0&&o>0&&(e="right",v<m&&(a.up===!0&&n<0?e="up":a.down===!0&&n>0&&(e="down")));let S=!1;if(e===void 0&&i===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};e=c.event.lastDir,S=!0,e==="left"||e==="right"?(u.left-=o,v=0,o=0):(u.top-=n,m=0,n=0)}return{synthetic:S,payload:{evt:t,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:u,direction:e,isFirst:c.event.isFirst,isFinal:i===!0,duration:Date.now()-c.event.time,distance:{x:v,y:m},offset:{x:o,y:n},delta:{x:u.left-c.event.lastX,y:u.top-c.event.lastY}}}}let Dt=0;var ke=nt({name:"touch-pan",beforeMount(t,{value:c,modifiers:i}){if(i.mouse!==!0&&X.has.touch!==!0)return;function u(o,n){i.mouse===!0&&n===!0?st(o):(i.stop===!0&&ye(o),i.prevent===!0&&$e(o))}const e={uid:"qvtp_"+Dt++,handler:c,modifiers:i,direction:Ve(i),noop:Fe,mouseStart(o){Ee(o,e)&&rt(o)&&(te(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(o,!0))},touchStart(o){if(Ee(o,e)){const n=o.target;te(e,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),e.start(o)}},start(o,n){if(X.is.firefox===!0&&ge(t,!0),e.lastEvt=o,n===!0||i.stop===!0){if(e.direction.all!==!0&&(n!==!0||e.modifiers.mouseAllDir!==!0)){const a=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&$e(a),o.cancelBubble===!0&&ye(a),Object.assign(a,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[e.uid]:o.qClonedBy.concat(e.uid)}),e.initialEvent={target:o.target,event:a}}ye(o)}const{left:v,top:m}=Ce(o);e.event={x:v,y:m,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:m}},move(o){if(e.event===void 0)return;const n=Ce(o),v=n.left-e.event.x,m=n.top-e.event.y;if(v===0&&m===0)return;e.lastEvt=o;const a=e.event.mouse===!0,S=()=>{u(o,a),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Et(),e.styleCleanup=r=>{if(e.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};r!==void 0?setTimeout(()=>{p(),r()},50):p()}else r!==void 0&&r()}};if(e.event.detected===!0){e.event.isFirst!==!0&&u(o,e.event.mouse);const{payload:r,synthetic:p}=_e(o,e,!1);r!==void 0&&(e.handler(r)===!1?e.end(o):(e.styleCleanup===void 0&&e.event.isFirst===!0&&S(),e.event.lastX=r.position.left,e.event.lastY=r.position.top,e.event.lastDir=p===!0?void 0:r.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||a===!0&&e.modifiers.mouseAllDir===!0){S(),e.event.detected=!0,e.move(o);return}const C=Math.abs(v),x=Math.abs(m);C!==x&&(e.direction.horizontal===!0&&C>x||e.direction.vertical===!0&&C<x||e.direction.up===!0&&C<x&&m<0||e.direction.down===!0&&C<x&&m>0||e.direction.left===!0&&C>x&&v<0||e.direction.right===!0&&C>x&&v>0?(e.event.detected=!0,e.move(o)):e.end(o,!0))},end(o,n){if(e.event!==void 0){if(pe(e,"temp"),X.is.firefox===!0&&ge(t,!1),n===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(_e(o===void 0?e.lastEvt:o,e).payload);const{payload:v}=_e(o===void 0?e.lastEvt:o,e,!0),m=()=>{e.handler(v)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};t.__qtouchpan=e,i.mouse===!0&&te(e,"main",[[t,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),X.has.touch===!0&&te(e,"main",[[t,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,c){const i=t.__qtouchpan;i!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&i.end(),i.handler=c.value),i.direction=Ve(c.modifiers))},beforeUnmount(t){const c=t.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),pe(c,"main"),pe(c,"temp"),X.is.firefox===!0&&ge(t,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete t.__qtouchpan)}});const He=150;var Ft=A({name:"QDrawer",inheritAttrs:!1,props:{...Bt,...Pt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...$t,"on-layout","mini-state"],setup(t,{slots:c,emit:i,attrs:u}){const e=U(),{proxy:{$q:o}}=e,n=Vt(t,o),{preventBodyScroll:v}=St(),{registerTimeout:m}=Ot(),a=ue(G,()=>{console.error("QDrawer needs to be child of QLayout")});let S,C,x;const r=T(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),p=d(()=>t.mini===!0&&r.value!==!0),q=d(()=>p.value===!0?t.miniWidth:t.width),g=T(t.showIfAbove===!0&&r.value===!1?!0:t.modelValue===!0),E=d(()=>t.persistent!==!0&&(r.value===!0||Ne.value===!0));function f(l,b){if(z(),l!==!1&&a.animate(),P(0),r.value===!0){const $=a.instances[Z.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),D(1),a.isContainer.value!==!0&&v(!0)}else D(0),l!==!1&&me(!1);m(()=>{l!==!1&&me(!0),b!==!0&&i("show",l)},He)}function B(l,b){M(),l!==!1&&a.animate(),D(0),P(W.value*q.value),he(),b!==!0&&m(()=>{i("hide",l)},He)}const{show:h,hide:s}=Qt({showing:g,hideOnRouteChange:E,handleShow:f,handleHide:B}),{addToHistory:z,removeFromHistory:M}=Ct(g,s,E),H={belowBreakpoint:r,hide:s},O=d(()=>t.side==="right"),W=d(()=>(o.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),ze=T(0),I=T(!1),ce=T(!1),Te=T(q.value*W.value),Z=d(()=>O.value===!0?"left":"right"),de=d(()=>g.value===!0&&r.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:q.value:0),fe=d(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(O.value?"R":"L")>-1||o.platform.is.ios===!0&&a.isContainer.value===!0),Y=d(()=>t.overlay===!1&&g.value===!0&&r.value===!1),Ne=d(()=>t.overlay===!0&&g.value===!0&&r.value===!1),Ue=d(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&I.value===!1?" hidden":"")),Ye=d(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),Le=d(()=>O.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Xe=d(()=>O.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),je=d(()=>{const l={};return a.header.space===!0&&Le.value===!1&&(fe.value===!0?l.top=`${a.header.offset}px`:a.header.space===!0&&(l.top=`${a.header.size}px`)),a.footer.space===!0&&Xe.value===!1&&(fe.value===!0?l.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(l.bottom=`${a.footer.size}px`)),l}),Ke=d(()=>{const l={width:`${q.value}px`,transform:`translateX(${Te.value}px)`};return r.value===!0?l:Object.assign(l,je.value)}),Ge=d(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Je=d(()=>`q-drawer q-drawer--${t.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(r.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(fe.value===!0||Y.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),Ze=d(()=>{const l=o.lang.rtl===!0?t.side:Z.value;return[[ke,ot,void 0,{[l]:!0,mouse:!0}]]}),et=d(()=>{const l=o.lang.rtl===!0?Z.value:t.side;return[[ke,Be,void 0,{[l]:!0,mouse:!0}]]}),tt=d(()=>{const l=o.lang.rtl===!0?Z.value:t.side;return[[ke,Be,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){lt(r,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}w(r,l=>{l===!0?(S=g.value,g.value===!0&&s(!1)):t.overlay===!1&&t.behavior!=="mobile"&&S!==!1&&(g.value===!0?(P(0),D(0),he()):h(!1))}),w(()=>t.side,(l,b)=>{a.instances[b]===H&&(a.instances[b]=void 0,a[b].space=!1,a[b].offset=0),a.instances[l]=H,a[l].size=q.value,a[l].space=Y.value,a[l].offset=de.value}),w(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),w(()=>t.behavior+t.breakpoint,ve),w(a.isContainer,l=>{g.value===!0&&v(l!==!0),l===!0&&ve()}),w(a.scrollbarWidth,()=>{P(g.value===!0?0:void 0)}),w(de,l=>{F("offset",l)}),w(Y,l=>{i("on-layout",l),F("space",l)}),w(O,()=>{P()}),w(q,l=>{P(),be(t.miniToOverlay,l)}),w(()=>t.miniToOverlay,l=>{be(l,q.value)}),w(()=>o.lang.rtl,()=>{P()}),w(()=>t.mini,()=>{t.modelValue===!0&&(at(),a.animate())}),w(p,l=>{i("mini-state",l)});function P(l){l===void 0?Qe(()=>{l=g.value===!0?0:q.value,P(W.value*l)}):(a.isContainer.value===!0&&O.value===!0&&(r.value===!0||Math.abs(l)===q.value)&&(l+=W.value*a.scrollbarWidth.value),Te.value=l)}function D(l){ze.value=l}function me(l){const b=l===!0?"remove":a.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function at(){clearTimeout(C),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,C=setTimeout(()=>{ce.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(l){if(g.value!==!1)return;const b=q.value,$=ae(l.distance.x,0,b);if(l.isFinal===!0){$>=Math.min(75,b)===!0?h():(a.animate(),D(0),P(W.value*b)),I.value=!1;return}P((o.lang.rtl===!0?O.value!==!0:O.value)?Math.max(b-$,0):Math.min(0,$-b)),D(ae($/b,0,1)),l.isFirst===!0&&(I.value=!0)}function Be(l){if(g.value!==!0)return;const b=q.value,$=l.direction===t.side,ee=(o.lang.rtl===!0?$!==!0:$)?ae(l.distance.x,0,b):0;if(l.isFinal===!0){Math.abs(ee)<Math.min(75,b)===!0?(a.animate(),D(1),P(0)):s(),I.value=!1;return}P(W.value*ee),D(ae(1-ee/b,0,1)),l.isFirst===!0&&(I.value=!0)}function he(){v(!1),me(!0)}function F(l,b){a.update(t.side,l,b)}function lt(l,b){l.value!==b&&(l.value=b)}function be(l,b){F("size",l===!0?t.miniWidth:b)}return a.instances[t.side]=H,be(t.miniToOverlay,q.value),F("space",Y.value),F("offset",de.value),t.showIfAbove===!0&&t.modelValue!==!0&&g.value===!0&&t["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),Re(()=>{i("on-layout",Y.value),i("mini-state",p.value),S=t.showIfAbove===!0;const l=()=>{(g.value===!0?f:B)(!1,!0)};if(a.totalWidth.value!==0){Qe(l);return}x=w(a.totalWidth,()=>{x(),x=void 0,g.value===!1&&t.showIfAbove===!0&&r.value===!1?h(!1):l()})}),se(()=>{x!==void 0&&x(),clearTimeout(C),g.value===!0&&he(),a.instances[t.side]===H&&(a.instances[t.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const l=[];r.value===!0&&(t.noSwipeOpen===!1&&l.push(oe(L("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ze.value)),l.push(Oe("div",{ref:"backdrop",class:Ue.value,style:Ye.value,"aria-hidden":"true",onClick:s},void 0,"backdrop",t.noSwipeBackdrop!==!0&&g.value===!0,()=>tt.value)));const b=p.value===!0&&c.mini!==void 0,$=[L("div",{...u,key:""+b,class:[Ge.value,u.class]},b===!0?c.mini():Se(c.default))];return t.elevated===!0&&g.value===!0&&$.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Oe("aside",{ref:"content",class:Je.value,style:Ke.value},$,"contentclose",t.noSwipeClose!==!0&&r.value===!0,()=>et.value)),L("div",{class:"q-drawer-container"},l)}}}),Rt=A({name:"QPageContainer",setup(t,{slots:c}){const{proxy:{$q:i}}=U(),u=ue(G,()=>{console.error("QPageContainer needs to be child of QLayout")});Ae(ut,!0);const e=d(()=>{const o={};return u.header.space===!0&&(o.paddingTop=`${u.header.size}px`),u.right.space===!0&&(o[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(o.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(o[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),o});return()=>L("div",{class:"q-page-container",style:e.value},Se(c.default))}}),At=A({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:c,emit:i}){const{proxy:{$q:u}}=U(),e=ue(G,()=>{console.error("QFooter needs to be child of QLayout")}),o=T(parseInt(t.heightHint,10)),n=T(!0),v=T(We.value===!0||e.isContainer.value===!0?0:window.innerHeight),m=d(()=>t.reveal===!0||e.view.value.indexOf("F")>-1||u.platform.is.ios&&e.isContainer.value===!0),a=d(()=>e.isContainer.value===!0?e.containerHeight.value:v.value),S=d(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return n.value===!0?o.value:0;const s=e.scroll.value.position+a.value+o.value-e.height.value;return s>0?s:0}),C=d(()=>t.modelValue!==!0||m.value===!0&&n.value!==!0),x=d(()=>t.modelValue===!0&&C.value===!0&&t.reveal===!0),r=d(()=>"q-footer q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(C.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(m.value!==!0?" hidden":""):"")),p=d(()=>{const s=e.rows.value.bottom,z={};return s[0]==="l"&&e.left.space===!0&&(z[u.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),s[2]==="r"&&e.right.space===!0&&(z[u.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),z});function q(s,z){e.update("footer",s,z)}function g(s,z){s.value!==z&&(s.value=z)}function E({height:s}){g(o,s),q("size",s)}function f(){if(t.reveal!==!0)return;const{direction:s,position:z,inflectionPoint:M}=e.scroll.value;g(n,s==="up"||z-M<100||e.height.value-a.value-z-o.value<300)}function B(s){x.value===!0&&g(n,!0),i("focusin",s)}w(()=>t.modelValue,s=>{q("space",s),g(n,!0),e.animate()}),w(S,s=>{q("offset",s)}),w(()=>t.reveal,s=>{s===!1&&g(n,t.modelValue)}),w(n,s=>{e.animate(),i("reveal",s)}),w([o,e.scroll,e.height],f),w(()=>u.screen.height,s=>{e.isContainer.value!==!0&&g(v,s)});const h={};return e.instances.footer=h,t.modelValue===!0&&q("size",o.value),q("space",t.modelValue),q("offset",S.value),se(()=>{e.instances.footer===h&&(e.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const s=Ie(c.default,[L(re,{debounce:0,onResize:E})]);return t.elevated===!0&&s.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),L("footer",{class:r.value,style:p.value,onFocusin:B},s)}}});const{passive:De}=ct,Wt=["both","horizontal","vertical"];var It=A({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Wt.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:c}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,e,o;w(()=>t.scrollTarget,()=>{m(),v()});function n(){u!==null&&u();const C=Math.max(0,Tt(e)),x=Lt(e),r={top:C-i.position.top,left:x-i.position.left};if(t.axis==="vertical"&&r.top===0||t.axis==="horizontal"&&r.left===0)return;const p=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";i.position={top:C,left:x},i.directionChanged=i.direction!==p,i.delta=r,i.directionChanged===!0&&(i.direction=p,i.inflectionPoint=i.position),c("scroll",{...i})}function v(){e=zt(o,t.scrollTarget),e.addEventListener("scroll",a,De),a(!0)}function m(){e!==void 0&&(e.removeEventListener("scroll",a,De),e=void 0)}function a(C){if(C===!0||t.debounce===0||t.debounce==="0")n();else if(u===null){const[x,r]=t.debounce?[setTimeout(n,t.debounce),clearTimeout]:[requestAnimationFrame(n),cancelAnimationFrame];u=()=>{r(x),u=null}}}const S=U();return Re(()=>{o=S.proxy.$el.parentNode,v()}),se(()=>{u!==null&&u(),m()}),Object.assign(S.proxy,{trigger:a,getPosition:()=>i}),Fe}}),Nt=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:c,emit:i}){const{proxy:{$q:u}}=U(),e=T(null),o=T(u.screen.height),n=T(t.container===!0?0:u.screen.width),v=T({position:0,direction:"down",inflectionPoint:0}),m=T(0),a=T(We.value===!0?0:qe()),S=d(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),C=d(()=>t.container===!1?{minHeight:u.screen.height+"px"}:null),x=d(()=>a.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),r=d(()=>a.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function p(h){if(t.container===!0||document.qScrollPrevented!==!0){const s={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};v.value=s,t.onScroll!==void 0&&i("scroll",s)}}function q(h){const{height:s,width:z}=h;let M=!1;o.value!==s&&(M=!0,o.value=s,t.onScrollHeight!==void 0&&i("scroll-height",s),E()),n.value!==z&&(M=!0,n.value=z),M===!0&&t.onResize!==void 0&&i("resize",h)}function g({height:h}){m.value!==h&&(m.value=h,E())}function E(){if(t.container===!0){const h=o.value>m.value?qe():0;a.value!==h&&(a.value=h)}}let f;const B={instances:{},view:d(()=>t.view),isContainer:d(()=>t.container),rootRef:e,height:o,containerHeight:m,scrollbarWidth:a,totalWidth:d(()=>n.value+a.value),rows:d(()=>{const h=t.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:K({size:0,offset:0,space:!1}),right:K({size:300,offset:0,space:!1}),footer:K({size:0,offset:0,space:!1}),left:K({size:300,offset:0,space:!1}),scroll:v,animate(){f!==void 0?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),f=void 0},155)},update(h,s,z){B[h][s]=z}};if(Ae(G,B),qe()>0){let z=function(){h=null,s.classList.remove("hide-scrollbar")},M=function(){if(h===null){if(s.scrollHeight>u.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(z,300)},H=function(O){h!==null&&O==="remove"&&(clearTimeout(h),z()),window[`${O}EventListener`]("resize",M)},h=null;const s=document.body;w(()=>t.container!==!0?"add":"remove",H),t.container!==!0&&H("add"),dt(()=>{H("remove")})}return()=>{const h=Ie(c.default,[L(It,{onScroll:p}),L(re,{onResize:q})]),s=L("div",{class:S.value,style:C.value,ref:t.container===!0?void 0:e,tabindex:-1},h);return t.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:e},[L(re,{onResize:g}),L("div",{class:"absolute-full",style:x.value},[L("div",{class:"scroll",style:r.value},[s])])]):s}}});const Ut={__name:"EssentialLink",props:["link"],setup(t){return(c,i)=>(Q(),V(ne,{clickable:"",tag:"a",exact:"","active-class":"my-menu-link",to:t.link.link},{default:k(()=>[y(ie,null,{default:k(()=>[y(le,null,{default:k(()=>[J(ft(t.link.title),1)]),_:1})]),_:1})]),_:1},8,["to"]))}},Yt=_("img",{src:"https://source.boringavatars.com/beam/200/chih2790",alt:""},null,-1),Xt=J("\u6703\u54E1\u7BA1\u7406"),jt=J("\u500B\u4EBA\u6A94\u6848"),Kt=J("\u767B\u51FA"),Gt=J("\u767B\u51FA"),Jt={class:"container"},Zt={class:"row q-my-xxl"},ea=_("div",{class:"col-3"},[_("div",{class:"text-h5 q-mb-lg"},"\u95DC\u65BC\u6211\u5011"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u54C1\u724C\u6545\u4E8B"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u5E97\u92EA\u8CC7\u8A0A"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u96B1\u79C1\u6B0A\u53CA\u7DB2\u7AD9\u4F7F\u7528\u689D\u6B3E")],-1),ta=_("div",{class:"col-3"},[_("div",{class:"text-h5 q-mb-lg"},"\u8CFC\u7269\u8AAA\u660E"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u8CFC\u7269\u6307\u5357(\u8CFC\u524D\u8072\u660E)"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u4ED8\u6B3E\u65B9\u5F0F"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u552E\u5F8C\u670D\u52D9\u8AAA\u660E"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u904B\u9001\u65B9\u5F0F")],-1),aa=_("div",{class:"col-3"},[_("div",{class:"text-h5 q-mb-lg"},"\u5BA2\u670D\u8CC7\u8A0A"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u5E38\u898B\u554F\u984C"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u806F\u7D61\u6211\u5011"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u9632\u8A50\u9A19\u5BA3\u5C0E"),_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u6703\u54E1\u6B0A\u76CA")],-1),oa={class:"col-3"},la={class:"q-mb-lg"},ia=_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u5BA2\u670D\u96FB\u8A71 : 02-1234-5678",-1),na=_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"\u670D\u52D9\u6642\u9593 : \u9031\u4E00\u81F3\u9031\u4E94\uFF0C09:30-18:00",-1),ra=_("div",{class:"text-body1 text-weight-thin q-mb-sm"},"aaa1234567@gmail.com",-1),Ca={__name:"MainLayout",setup(t){const c=vt(),{logout:i}=c,{isLogin:u,isAdmin:e,cart:o,isStaff:n}=mt(c),v=T(!1);T("");const m=K([{title:"TOP",link:"/"},{title:"SHOP",link:"/product"},{title:"STORE",link:"/store"},{title:"ABOUT",link:"/about"},{title:"STYLING",link:"/styling"}]),a=T(m),S=()=>{v.value=!v.value};return(C,x)=>{const r=ht("router-view");return Q(),V(Nt,{view:"lHh Lpr lff"},{default:k(()=>[y(Ht,{bordered:"",class:"bg-white text-black"},{default:k(()=>[y(Mt,{class:"q-py-md container q-px-none"},{default:k(()=>[y(N,{class:"lt-lg",flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:S}),y(bt,{class:"gt-md q-mr-md"},{default:k(()=>[Yt]),_:1}),y(xt,{class:"gt-md",shrink:"","indicator-color":"red"},{default:k(()=>[y(j,{exact:"",name:"/",to:"/",label:"TOP"}),y(j,{exact:"",name:"/product",to:"/product",label:"SHOP"}),y(j,{exact:"",name:"/store",to:"/store",label:"STORE"}),y(j,{exact:"",name:"/about",to:"/about",label:"ABOUT"}),y(j,{exact:"",name:"/styling",to:"/styling",label:"STYLING"})]),_:1}),y(qt),_("div",null,[R(u)?(Q(),V(N,{key:0,flat:"",round:"","no-icon-animation":"",icon:"fa-solid fa-user",size:"sm",color:"black"},{default:k(()=>[y(_t,{class:"no-shadow border-all-black",square:"",anchor:"bottom end",self:"top right","auto-close":"",offset:[2,4]},{default:k(()=>[y(xe,null,{default:k(()=>[oe((Q(),V(ne,{color:"black",clickable:"",to:"/login"},{default:k(()=>[y(ie,null,{default:k(()=>[R(e)?(Q(),V(le,{key:0},{default:k(()=>[Xt]),_:1})):(Q(),V(le,{key:1},{default:k(()=>[jt]),_:1}))]),_:1})]),_:1})),[[Me]]),oe((Q(),V(ne,{clickable:"",onClick:R(i)},{default:k(()=>[y(ie,null,{default:k(()=>[y(le,null,{default:k(()=>[Kt]),_:1})]),_:1})]),_:1},8,["onClick"])),[[Me]])]),_:1})]),_:1})]),_:1})):(Q(),V(N,{key:1,flat:"",round:"",color:"black",icon:"fa-solid fa-user",to:"/login",size:"sm"})),!R(e)&&!R(n)?(Q(),V(N,{key:2,class:"q-ml-sm",flat:"",round:"",color:"black",icon:"fa-solid fa-cart-shopping",to:"/cart",size:"sm"})):Pe("",!0),R(e)?(Q(),V(N,{key:3,flat:"",round:"",class:"q-ml-sm",color:"black",icon:"fa-solid fa-wrench",to:"/admin/user",size:"sm"})):Pe("",!0)])]),_:1})]),_:1}),y(Ft,{modelValue:v.value,"onUpdate:modelValue":x[0]||(x[0]=p=>v.value=p),overlay:"",bordered:"",class:"bg-white","show-if-above":""},{default:k(()=>[y(N,{class:"q-py-md",flat:"",icon:"fa-solid fa-xmark","aria-label":"Menu",color:"dark",onClick:S}),y(xe,null,{default:k(()=>[(Q(!0),gt(pt,null,yt(a.value,p=>(Q(),V(Ut,{key:p.title,link:p},null,8,["link"]))),128))]),_:1}),y(kt,{inset:""}),y(xe,{class:"q-mt-md"},{default:k(()=>[oe((Q(),V(ne,{clickable:""},{default:k(()=>[y(ie,{class:"text-body1 text-weight-regular",onClick:R(i)},{default:k(()=>[Gt]),_:1},8,["onClick"])]),_:1})),[[wt]])]),_:1})]),_:1},8,["modelValue"]),y(Rt,null,{default:k(()=>[y(r)]),_:1}),y(At,{bordered:"",class:"bg-grey-1 text-black gt-md"},{default:k(()=>[_("section",Jt,[_("div",Zt,[ea,ta,aa,_("div",oa,[_("div",la,[y(we,{class:"q-mr-sm",name:"fa-brands fa-instagram",size:"md"}),y(we,{class:"q-mr-sm",name:"fa-brands fa-twitter",size:"md"}),y(we,{class:"q-mr-sm",name:"fa-brands fa-facebook",size:"md"})]),ia,na,ra])])])]),_:1})]),_:1})}}};export{Ca as default};
