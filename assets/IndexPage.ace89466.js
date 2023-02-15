import{j as Z,k as ee,a as te,Q as L}from"./QBtn.d3abd251.js";import{c as oe,a as se,v as ae,w as ne,l as O,r as le,s as re,t as S,q as ie,Q as ue,m as ce,n as P,o as de,p as fe}from"./todolistslist-store.834ed615.js";import{h as A,c as R,e as ve}from"./render.1c6a37f1.js";import{p as C,c as n,a as me,q as pe,h as p,g as z,r as $,a9 as _,B as D,H as N,_ as j,I as x,J as V,M as q,K as f,L as Q,R as F,N as ge,F as he,d as i,Q as be,aa as ke,S as xe}from"./index.f9bad8e1.js";import{Q as ye}from"./QPage.4d51ac22.js";const _e={position:{type:String,default:"bottom-right",validator:t=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(t)},offset:{type:Array,validator:t=>t.length===2},expand:Boolean};function $e(){const{props:t,proxy:{$q:s}}=z(),e=me(pe,C);if(e===C)return console.error("QPageSticky needs to be child of QLayout"),C;const l=n(()=>{const d=t.position;return{top:d.indexOf("top")>-1,right:d.indexOf("right")>-1,bottom:d.indexOf("bottom")>-1,left:d.indexOf("left")>-1,vertical:d==="top"||d==="bottom",horizontal:d==="left"||d==="right"}}),r=n(()=>e.header.offset),u=n(()=>e.right.offset),a=n(()=>e.footer.offset),c=n(()=>e.left.offset),b=n(()=>{let d=0,v=0;const h=l.value,m=s.lang.rtl===!0?-1:1;h.top===!0&&r.value!==0?v=`${r.value}px`:h.bottom===!0&&a.value!==0&&(v=`${-a.value}px`),h.left===!0&&c.value!==0?d=`${m*c.value}px`:h.right===!0&&u.value!==0&&(d=`${-m*u.value}px`);const g={transform:`translate(${d}, ${v})`};return t.offset&&(g.margin=`${t.offset[1]}px ${t.offset[0]}px`),h.vertical===!0?(c.value!==0&&(g[s.lang.rtl===!0?"right":"left"]=`${c.value}px`),u.value!==0&&(g[s.lang.rtl===!0?"left":"right"]=`${u.value}px`)):h.horizontal===!0&&(r.value!==0&&(g.top=`${r.value}px`),a.value!==0&&(g.bottom=`${a.value}px`)),g}),y=n(()=>`q-page-sticky row flex-center fixed-${t.position} q-page-sticky--${t.expand===!0?"expand":"shrink"}`);function I(d){const v=A(d.default);return p("div",{class:y.value,style:b.value},t.expand===!0?v:[p("div",v)])}return{$layout:e,getStickyContent:I}}var Le=R({name:"QPageSticky",props:_e,setup(t,{slots:s}){const{getStickyContent:e}=$e();return()=>e(s)}});function Ve(t,s){const e=$(null),l=n(()=>t.disable===!0?null:p("span",{ref:e,class:"no-outline",tabindex:-1}));function r(u){const a=s.value;u!==void 0&&u.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():e.value!==null&&(u===void 0||a!==null&&a.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:l,refocusTarget:r}}var Ie={xs:30,sm:35,md:40,lg:50,xl:60};const Te={...se,...ee,...ae,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Se=["update:modelValue"];function Ce(t,s){const{props:e,slots:l,emit:r,proxy:u}=z(),{$q:a}=u,c=oe(e,a),b=$(null),{refocusTargetEl:y,refocusTarget:I}=Ve(e,b),d=Z(e,Ie),v=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),h=n(()=>{const o=_(e.val);return v.value===!0?e.modelValue.findIndex(k=>_(k)===o):-1}),m=n(()=>v.value===!0?h.value>-1:_(e.modelValue)===_(e.trueValue)),g=n(()=>v.value===!0?h.value===-1:_(e.modelValue)===_(e.falseValue)),w=n(()=>m.value===!1&&g.value===!1),E=n(()=>e.disable===!0?-1:e.tabindex||0),M=n(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(c.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),K=n(()=>{const o=m.value===!0?"truthy":g.value===!0?"falsy":"indet",k=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?m.value===!0:g.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${o}${k}`}),U=n(()=>{const o={type:"checkbox"};return e.name!==void 0&&Object.assign(o,{".checked":m.value,"^checked":m.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),o}),H=ne(U),J=n(()=>{const o={tabindex:E.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":w.value===!0?"mixed":m.value===!0?"true":"false"};return e.disable===!0&&(o["aria-disabled"]="true"),o});function T(o){o!==void 0&&(D(o),I(o)),e.disable!==!0&&r("update:modelValue",X(),o)}function X(){if(v.value===!0){if(m.value===!0){const o=e.modelValue.slice();return o.splice(h.value,1),o}return e.modelValue.concat([e.val])}if(m.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(g.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function Y(o){(o.keyCode===13||o.keyCode===32)&&D(o)}function G(o){(o.keyCode===13||o.keyCode===32)&&T(o)}const W=s(m,w);return Object.assign(u,{toggle:T}),()=>{const o=W();e.disable!==!0&&H(o,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const k=[p("div",{class:K.value,style:d.value,"aria-hidden":"true"},o)];y.value!==null&&k.push(y.value);const B=e.label!==void 0?ve(l.default,[e.label]):A(l.default);return B!==void 0&&k.push(p("div",{class:`q-${t}__label q-anchor--skip`},B)),p("div",{ref:b,class:M.value,...J.value,onClick:T,onKeydown:Y,onKeyup:G},k)}}const qe=p("div",{key:"svg",class:"q-checkbox__bg absolute"},[p("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[p("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),p("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Qe=R({name:"QCheckbox",props:Te,emits:Se,setup(t){function s(e,l){const r=n(()=>(e.value===!0?t.checkedIcon:l.value===!0?t.indeterminateIcon:t.uncheckedIcon)||null);return()=>r.value!==null?[p("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[p(te,{class:"q-checkbox__icon",name:r.value})])]:[qe]}return Ce("checkbox",s)}});const we=N({name:"TodoList",setup(){const t=O(),s=n(()=>t.currentListId),e=n(()=>t.currentTodoLists);function l(r){console.log("remove id:",r),t.removeTodoFromTodoList(t.currentListId,r)}return console.log("todos: ",e),{store:t,todosList:e,currentListId:s,removeTodoList:l}}}),Be={key:0,class:"text-h6"},Pe={class:"text-h6"};function De(t,s,e,l,r,u){return t.todosList?(x(),q(le,{key:1},{default:f(()=>[Q("div",Pe,F(t.todosList.title),1),(x(!0),V(he,null,ge(t.todosList.todos,a=>(x(),q(re,{key:a.id},{default:f(()=>[i(S,{side:""},{default:f(()=>[i(Qe,{modelValue:a.isFinished,"onUpdate:modelValue":c=>a.isFinished=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),i(S,null,{default:f(()=>[be(F(a.content),1)]),_:2},1024),i(S,{side:""},{default:f(()=>[i(L,{flat:"",round:"",size:"sm",icon:"mdi-delete",onClick:c=>t.removeTodoList(a.id)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(x(),V("div",Be,"Make your Todo List"))}var Fe=j(we,[["render",De]]);const Oe=N({name:"IndexPage",components:{TodoList:Fe},setup(){const t=$(""),s=$(!1),e=$(""),l=O(),r=$(ke());function u(){console.log("indexPage: initialize Dialog----"),e.value=""}function a(){console.log(e.value);const b=parseInt(r.value.params.id),y={id:l.currentTodoLists?l.currentTodoLists.nextTodoId:-1,content:e.value,isFinished:!1};console.log("addTodoList-todoListsId=",b,"_storeCurrentTodoId: ",l.currentListId),l.addTodoIntoTodoList(b,y),s.value=!1}function c(){s.value=!1}return{store:l,showDialog:s,search:t,initDialog:u,addTodoList:a,cancelTodoList:c,prompt,todo:e}}}),Ae={key:0,class:"text-h6"},Re={key:1,class:"col-xs-12"},ze=Q("div",{class:"text-h6"},"Add new ToDo",-1);function Ne(t,s,e,l,r,u){const a=xe("todo-list");return x(),q(ye,{class:"row page-bg"},{default:f(()=>[t.store.currentTodoLists?(x(),V("div",Re,[i(a),i(Le,{position:"bottom-right",offset:[18,18]},{default:f(()=>[i(L,{fab:"",style:{"margin-bottom":"100 px"},class:"q-ml-lg",color:"secondary",icon:"mdi-plus",onClick:s[0]||(s[0]=c=>t.showDialog=!0)}),i(ie,{modelValue:t.showDialog,"onUpdate:modelValue":s[2]||(s[2]=c=>t.showDialog=c),persistent:"",onBeforeShow:t.initDialog},{default:f(()=>[Q("div",null,[i(ue,{onSubmit:t.addTodoList,onReset:t.cancelTodoList},{default:f(()=>[i(ce,{style:{"min-width":"350px"}},{default:f(()=>[i(P,null,{default:f(()=>[ze]),_:1}),i(P,{class:"q-pt-none"},{default:f(()=>[i(de,{dense:"",modelValue:t.todo,"onUpdate:modelValue":s[1]||(s[1]=c=>t.todo=c),autofocus:""},null,8,["modelValue"])]),_:1}),i(fe,{align:"right",class:"text-primary"},{default:f(()=>[i(L,{flat:"",label:"Cancel",type:"reset"}),i(L,{flat:"",label:"Add Todo",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit","onReset"])])]),_:1},8,["modelValue","onBeforeShow"])]),_:1})])):(x(),V("div",Ae," Make your Todo List! "))]),_:1})}var He=j(Oe,[["render",Ne]]);export{He as default};
