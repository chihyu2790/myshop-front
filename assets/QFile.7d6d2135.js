import{Q as w}from"./QChip.4f91d3c0.js";import{u as B,e as K,a as T,g as U,b as G,h as H,c as J,f as y}from"./use-key-composition.d78daa21.js";import{u as M,a as W}from"./use-form.71407145.js";import{u as X}from"./QInput.bbaa874a.js";import{c as Y,r as h,a as n,h as r,g as Z,m as ee}from"./index.d8b3df7e.js";import{h as te}from"./format.2a3572e1.js";var oe=Y({name:"QFile",inheritAttrs:!1,props:{...B,...M,...K,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...T,...U],setup(e,{slots:o,emit:C,attrs:x}){const{proxy:V}=Z(),u=G(),s=h(null),f=h(!1),S=W(e),{pickFiles:p,onDragover:A,onDragleave:j,processFiles:I,getDndNode:P}=H({editable:u.editable,dnd:f,getFileInput:z,addFilesToQueue:F}),q=X(e),l=n(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),v=n(()=>y(l.value)),N=n(()=>l.value.map(t=>t.name).join(", ")),g=n(()=>te(l.value.reduce((t,a)=>t+a.size,0))),O=n(()=>({totalSize:g.value,filesNumber:l.value.length,maxFiles:e.maxFiles})),Q=n(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:S.value,...x,id:u.targetUid.value,disabled:u.editable.value!==!0})),_=n(()=>"q-file q-field--auto-height"+(f.value===!0?" q-file--dnd":"")),b=n(()=>e.multiple===!0&&e.append===!0);function d(t){const a=l.value.slice();a.splice(t,1),m(a)}function k(t){const a=l.value.findIndex(t);a>-1&&d(a)}function m(t){C("update:modelValue",e.multiple===!0?t:t[0])}function D(t){t.keyCode===13&&ee(t)}function L(t){(t.keyCode===13||t.keyCode===32)&&p(t)}function z(){return s.value}function F(t,a){const i=I(t,a,l.value,b.value);i!==void 0&&((e.multiple===!0?e.modelValue&&i.every($=>l.value.includes($)):e.modelValue===i[0])||m(b.value===!0?l.value.concat(i):i))}function c(){return[r("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function E(){if(o.file!==void 0)return l.value.length===0?c():l.value.map((a,i)=>o.file({index:i,file:a,ref:this}));if(o.selected!==void 0)return l.value.length===0?c():o.selected({files:l.value,ref:this});if(e.useChips===!0)return l.value.length===0?c():l.value.map((a,i)=>r(w,{key:"file-"+i,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{d(i)}},()=>r("span",{class:"ellipsis",textContent:a.name})));const t=e.displayValue!==void 0?e.displayValue:N.value;return t.length>0?[r("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:c()}function R(){const t={ref:s,...Q.value,...q.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:F};return e.multiple===!0&&(t.multiple=!0),r("input",t)}return Object.assign(u,{fieldClass:_,emitValue:m,hasValue:v,inputRef:s,innerValue:l,floatingLabel:n(()=>v.value===!0||y(e.displayValue)),computedCounter:n(()=>{if(e.counterLabel!==void 0)return e.counterLabel(O.value);const t=e.maxFiles;return`${l.value.length}${t!==void 0?" / "+t:""} (${g.value})`}),getControlChild:()=>P("file"),getControl:()=>{const t={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(t,{onDragover:A,onDragleave:j,onKeydown:D,onKeyup:L}),r("div",t,[R()].concat(E()))}}),Object.assign(V,{removeAtIndex:d,removeFile:k,getNativeElement:()=>s.value}),J(u)}});export{oe as Q};