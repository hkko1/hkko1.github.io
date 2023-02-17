import{c as Ze,h as Fe,a as Tc}from"./render.fde42efc.js";import{c as M,h as U,r as J,V as Fa,B as pn,g as Me,k as ot,X as mo,w as fe,o as Dn,l as Oe,s as He,m as ct,Y as Sc,Z as xs,a as Cc,$ as Va,a0 as Ic,a1 as fr,a2 as Ac,a3 as qa,j as kc,x as en,W as Li,a4 as _c,y as go,D as Dc,a5 as po,b as xc,a6 as Nc,a7 as Rc}from"./index.3c045185.js";import{u as Lc,b as Mc,v as Oc,c as yo,g as Fc,d as mr,a as vo,e as Vc,f as qc,h as Pc,i as Bc}from"./QBtn.80a860c1.js";var Sy=Ze({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=M(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>U("div",{class:n.value},Fe(e.default))}});const Ns={dark:{type:Boolean,default:null}};function Rs(t,e){return M(()=>t.dark===null?e.dark.isActive:t.dark)}var Cy=Ze({name:"QItem",props:{...Ns,...Lc,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:s}}=Me(),i=Rs(t,s),{hasLink:r,linkAttrs:o,linkClass:a,linkTag:u,navigateOnClick:l}=Mc(),c=J(null),h=J(null),f=M(()=>t.clickable===!0||r.value===!0||t.tag==="label"),d=M(()=>t.disable!==!0&&f.value===!0),g=M(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(r.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),w=M(()=>{if(t.insetLevel===void 0)return null;const A=s.lang.rtl===!0?"Right":"Left";return{["padding"+A]:16+t.insetLevel*56+"px"}});function E(A){d.value===!0&&(h.value!==null&&(A.qKeyEvent!==!0&&document.activeElement===c.value?h.value.focus():document.activeElement===h.value&&c.value.focus()),l(A))}function F(A){if(d.value===!0&&Fa(A,13)===!0){pn(A),A.qKeyEvent=!0;const B=new MouseEvent("click",A);B.qKeyEvent=!0,c.value.dispatchEvent(B)}n("keyup",A)}function C(){const A=Tc(e.default,[]);return d.value===!0&&A.unshift(U("div",{class:"q-focus-helper",tabindex:-1,ref:h})),A}return()=>{const A={ref:c,class:g.value,style:w.value,role:"listitem",onClick:E,onKeyup:F};return d.value===!0?(A.tabindex=t.tabindex||"0",Object.assign(A,o.value)):f.value===!0&&(A["aria-disabled"]="true"),U(u.value,A,C())}}}),Iy=Ze({name:"QList",props:{...Ns,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Me(),s=Rs(t,n.proxy.$q),i=M(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>U(t.tag,{class:i.value},Fe(e.default))}});function Uc(t,e,n){let s;function i(){s!==void 0&&(mo.remove(s),s=void 0)}return ot(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){s={condition:()=>n.value===!0,handler:e},mo.add(s)}}}const $c={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},jc=["beforeShow","show","beforeHide","hide"];function Hc({showing:t,canShow:e,hideOnRouteChange:n,handleShow:s,handleHide:i,processOnMount:r}){const o=Me(),{props:a,emit:u,proxy:l}=o;let c;function h(C){t.value===!0?g(C):f(C)}function f(C){if(a.disable===!0||C!==void 0&&C.qAnchorHandled===!0||e!==void 0&&e(C)!==!0)return;const A=a["onUpdate:modelValue"]!==void 0;A===!0&&(u("update:modelValue",!0),c=C,Oe(()=>{c===C&&(c=void 0)})),(a.modelValue===null||A===!1)&&d(C)}function d(C){t.value!==!0&&(t.value=!0,u("beforeShow",C),s!==void 0?s(C):u("show",C))}function g(C){if(a.disable===!0)return;const A=a["onUpdate:modelValue"]!==void 0;A===!0&&(u("update:modelValue",!1),c=C,Oe(()=>{c===C&&(c=void 0)})),(a.modelValue===null||A===!1)&&w(C)}function w(C){t.value!==!1&&(t.value=!1,u("beforeHide",C),i!==void 0?i(C):u("hide",C))}function E(C){a.disable===!0&&C===!0?a["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):C===!0!==t.value&&(C===!0?d:w)(c)}fe(()=>a.modelValue,E),n!==void 0&&Oc(o)===!0&&fe(()=>l.$route.fullPath,()=>{n.value===!0&&t.value===!0&&g()}),r===!0&&Dn(()=>{E(a.modelValue)});const F={show:f,hide:g,toggle:h};return Object.assign(l,F),F}const Kc=[null,document,document.body,document.scrollingElement,document.documentElement];function Ay(t,e){let n=Fc(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return Kc.includes(n)?window:n}function zc(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Gc(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let Gn;function ky(){if(Gn!==void 0)return Gn;const t=document.createElement("p"),e=document.createElement("div");yo(t,{width:"100%",height:"200px"}),yo(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let s=t.offsetWidth;return n===s&&(s=e.clientWidth),e.remove(),Gn=n-s,Gn}function Qc(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}let tn=0,di,fi,rn,mi=!1,wo,Eo,bo,ht=null;function Wc(t){Xc(t)&&pn(t)}function Xc(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=Sc(t),n=t.shiftKey&&!t.deltaX,s=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||s?t.deltaY:t.deltaX;for(let r=0;r<e.length;r++){const o=e[r];if(Qc(o,s))return s?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function To(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Qn(t){mi!==!0&&(mi=!0,requestAnimationFrame(()=>{mi=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:s}=document.scrollingElement;(rn===void 0||e!==window.innerHeight)&&(rn=n-e,document.scrollingElement.scrollTop=s),s>rn&&(document.scrollingElement.scrollTop-=Math.ceil((s-rn)/8))}))}function So(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:s,overflowX:i}=window.getComputedStyle(e);di=Gc(window),fi=zc(window),wo=e.style.left,Eo=e.style.top,bo=window.location.href,e.style.left=`-${di}px`,e.style.top=`-${fi}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,He.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Qn,ct.passiveCapture),window.visualViewport.addEventListener("scroll",Qn,ct.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",To,ct.passiveCapture))}He.is.desktop===!0&&He.is.mac===!0&&window[`${t}EventListener`]("wheel",Wc,ct.notPassive),t==="remove"&&(He.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Qn,ct.passiveCapture),window.visualViewport.removeEventListener("scroll",Qn,ct.passiveCapture)):window.removeEventListener("scroll",To,ct.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=wo,e.style.top=Eo,window.location.href===bo&&window.scrollTo(di,fi),rn=void 0)}function Yc(t){let e="add";if(t===!0){if(tn++,ht!==null){clearTimeout(ht),ht=null;return}if(tn>1)return}else{if(tn===0||(tn--,tn>0))return;if(e="remove",He.is.ios===!0&&He.is.nativeMobile===!0){ht!==null&&clearTimeout(ht),ht=setTimeout(()=>{So(e),ht=null},100);return}}So(e)}function Jc(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,Yc(e))}}}function Zc(){let t=null;const e=Me();function n(){t!==null&&(clearTimeout(t),t=null)}return xs(n),ot(n),{removeTimeout:n,registerTimeout(s,i){n(),mr(e)===!1&&(t=setTimeout(s,i))}}}var _y=Ze({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=M(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>U(t.tag,{class:n.value},Fe(e.default))}});function eh({validate:t,resetValidation:e,requiresQForm:n}){const s=Cc(Va,!1);if(s!==!1){const{props:i,proxy:r}=Me();Object.assign(r,{validate:t,resetValidation:e}),fe(()=>i.disable,o=>{o===!0?(typeof e=="function"&&e(),s.unbindComponent(r)):s.bindComponent(r)}),Dn(()=>{i.disable!==!0&&s.bindComponent(r)}),ot(()=>{i.disable!==!0&&s.unbindComponent(r)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const Co=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Io=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ao=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Wn=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Xn=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,gi={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>Co.test(t),hexaColor:t=>Io.test(t),hexOrHexaColor:t=>Ao.test(t),rgbColor:t=>Wn.test(t),rgbaColor:t=>Xn.test(t),rgbOrRgbaColor:t=>Wn.test(t)||Xn.test(t),hexOrRgbColor:t=>Co.test(t)||Wn.test(t),hexaOrRgbaColor:t=>Io.test(t)||Xn.test(t),anyColor:t=>Ao.test(t)||Wn.test(t)||Xn.test(t)},th=[!0,!1,"ondemand"],nh={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:t=>th.includes(t)}};function sh(t,e){const{props:n,proxy:s}=Me(),i=J(!1),r=J(null),o=J(null);eh({validate:g,resetValidation:d});let a=0,u;const l=M(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),c=M(()=>n.disable!==!0&&l.value===!0),h=M(()=>n.error===!0||i.value===!0),f=M(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:r.value);fe(()=>n.modelValue,()=>{w()}),fe(()=>n.reactiveRules,F=>{F===!0?u===void 0&&(u=fe(()=>n.rules,()=>{w(!0)})):u!==void 0&&(u(),u=void 0)},{immediate:!0}),fe(t,F=>{F===!0?o.value===null&&(o.value=!1):o.value===!1&&(o.value=!0,c.value===!0&&n.lazyRules!=="ondemand"&&e.value===!1&&E())});function d(){a++,e.value=!1,o.value=null,i.value=!1,r.value=null,E.cancel()}function g(F=n.modelValue){if(c.value!==!0)return!0;const C=++a,A=e.value!==!0?()=>{o.value=!0}:()=>{},B=(p,b)=>{p===!0&&A(),i.value=p,r.value=b||null,e.value=!1},H=[];for(let p=0;p<n.rules.length;p++){const b=n.rules[p];let S;if(typeof b=="function"?S=b(F,gi):typeof b=="string"&&gi[b]!==void 0&&(S=gi[b](F)),S===!1||typeof S=="string")return B(!0,S),!1;S!==!0&&S!==void 0&&H.push(S)}return H.length===0?(B(!1),!0):(e.value=!0,Promise.all(H).then(p=>{if(p===void 0||Array.isArray(p)===!1||p.length===0)return C===a&&B(!1),!0;const b=p.find(S=>S===!1||typeof S=="string");return C===a&&B(b!==void 0,b),b===void 0},p=>(C===a&&(console.error(p),B(!0)),!1)))}function w(F){c.value===!0&&n.lazyRules!=="ondemand"&&(o.value===!0||n.lazyRules!==!0&&F!==!0)&&E()}const E=Ic(g,0);return ot(()=>{u!==void 0&&u(),E.cancel()}),Object.assign(s,{resetValidation:d,validate:g}),fr(s,"hasError",()=>h.value),{isDirtyModel:o,hasRules:l,hasError:h,errorMessage:f,validate:g,resetValidation:d}}const ko=/^on[A-Z]/;function ih(t,e){const n={listeners:J({}),attributes:J({})};function s(){const i={},r={};for(const o in t)o!=="class"&&o!=="style"&&ko.test(o)===!1&&(i[o]=t[o]);for(const o in e.props)ko.test(o)===!0&&(r[o]=e.props[o]);n.attributes.value=i,n.listeners.value=r}return Ac(s),s(),n}let pi,Yn=0;const ge=new Array(256);for(let t=0;t<256;t++)ge[t]=(t+256).toString(16).substring(1);const rh=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let s=e;s>0;s--)n.push(Math.floor(Math.random()*256));return n}})(),_o=4096;function oh(){(pi===void 0||Yn+16>_o)&&(Yn=0,pi=rh(_o));const t=Array.prototype.slice.call(pi,Yn,Yn+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,ge[t[0]]+ge[t[1]]+ge[t[2]]+ge[t[3]]+"-"+ge[t[4]]+ge[t[5]]+"-"+ge[t[6]]+ge[t[7]]+"-"+ge[t[8]]+ge[t[9]]+"-"+ge[t[10]]+ge[t[11]]+ge[t[12]]+ge[t[13]]+ge[t[14]]+ge[t[15]]}let ft=[],yn=[];function Pa(t){yn=yn.filter(e=>e!==t)}function ah(t){Pa(t),yn.push(t)}function Do(t){Pa(t),yn.length===0&&ft.length>0&&(ft[ft.length-1](),ft=[])}function Ls(t){yn.length===0?t():ft.push(t)}function uh(t){ft=ft.filter(e=>e!==t)}function Mi(t){return t===void 0?`f_${oh()}`:t}function Oi(t){return t!=null&&(""+t).length>0}const lh={...Ns,...nh,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ch=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function hh(){const{props:t,attrs:e,proxy:n,vnode:s}=Me();return{isDark:Rs(t,n.$q),editable:M(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:J(!1),focused:J(!1),hasPopupOpen:!1,splitAttrs:ih(e,s),targetUid:J(Mi(t.for)),rootRef:J(null),targetRef:J(null),controlRef:J(null)}}function dh(t){const{props:e,emit:n,slots:s,attrs:i,proxy:r}=Me(),{$q:o}=r;let a=null;t.hasValue===void 0&&(t.hasValue=M(()=>Oi(e.modelValue))),t.emitValue===void 0&&(t.emitValue=v=>{n("update:modelValue",v)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:x,onFocusout:N}),Object.assign(t,{clearValue:_,onControlFocusin:x,onControlFocusout:N,focus:b}),t.computedCounter===void 0&&(t.computedCounter=M(()=>{if(e.counter!==!1){const v=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,L=e.maxlength!==void 0?e.maxlength:e.maxValues;return v+(L!==void 0?" / "+L:"")}}));const{isDirtyModel:u,hasRules:l,hasError:c,errorMessage:h,resetValidation:f}=sh(t.focused,t.innerLoading),d=t.floatingLabel!==void 0?M(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):M(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),g=M(()=>e.bottomSlots===!0||e.hint!==void 0||l.value===!0||e.counter===!0||e.error!==null),w=M(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),E=M(()=>`q-field row no-wrap items-start q-field--${w.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(d.value===!0?" q-field--float":"")+(C.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(c.value===!0?" q-field--error":"")+(c.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&g.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),F=M(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(c.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),C=M(()=>e.labelSlot===!0||e.label!==void 0),A=M(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&c.value!==!0?` text-${e.labelColor}`:"")),B=M(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:d.value,modelValue:e.modelValue,emitValue:t.emitValue})),H=M(()=>{const v={for:t.targetUid.value};return e.disable===!0?v["aria-disabled"]="true":e.readonly===!0&&(v["aria-readonly"]="true"),v});fe(()=>e.for,v=>{t.targetUid.value=Mi(v)});function p(){const v=document.activeElement;let L=t.targetRef!==void 0&&t.targetRef.value;L&&(v===null||v.id!==t.targetUid.value)&&(L.hasAttribute("tabindex")===!0||(L=L.querySelector("[tabindex]")),L&&L!==v&&L.focus({preventScroll:!0}))}function b(){Ls(p)}function S(){uh(p);const v=document.activeElement;v!==null&&t.rootRef.value.contains(v)&&v.blur()}function x(v){a!==null&&(clearTimeout(a),a=null),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",v))}function N(v,L){a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,!(document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1))&&(t.focused.value===!0&&(t.focused.value=!1,n("blur",v)),L!==void 0&&L())})}function _(v){pn(v),o.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),n("clear",e.modelValue),Oe(()=>{f(),o.platform.is.mobile!==!0&&(u.value=!1)})}function G(){const v=[];return s.prepend!==void 0&&v.push(U("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:en},s.prepend())),v.push(U("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},$())),c.value===!0&&e.noErrorIcon===!1&&v.push(we("error",[U(vo,{name:o.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?v.push(we("inner-loading-append",s.loading!==void 0?s.loading():[U(Vc,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&v.push(we("inner-clearable-append",[U(vo,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:_})])),s.append!==void 0&&v.push(U("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:en},s.append())),t.getInnerAppend!==void 0&&v.push(we("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&v.push(t.getControlChild()),v}function $(){const v=[];return e.prefix!==void 0&&e.prefix!==null&&v.push(U("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&v.push(t.getShadowControl()),t.getControl!==void 0?v.push(t.getControl()):s.rawControl!==void 0?v.push(s.rawControl()):s.control!==void 0&&v.push(U("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},s.control(B.value))),C.value===!0&&v.push(U("div",{class:A.value},Fe(s.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&v.push(U("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),v.concat(Fe(s.default))}function X(){let v,L;c.value===!0?h.value!==null?(v=[U("div",{role:"alert"},h.value)],L=`q--slot-error-${h.value}`):(v=Fe(s.error),L="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(v=[U("div",e.hint)],L=`q--slot-hint-${e.hint}`):(v=Fe(s.hint),L="q--slot-hint"));const he=e.counter===!0||s.counter!==void 0;if(e.hideBottomSpace===!0&&he===!1&&v===void 0)return;const be=U("div",{key:L,class:"q-field__messages col"},v);return U("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:en},[e.hideBottomSpace===!0?be:U(Li,{name:"q-transition--field-message"},()=>be),he===!0?U("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():t.computedCounter.value):null])}function we(v,L){return L===null?null:U("div",{key:v,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},L)}let Ee=!1;return xs(()=>{Ee=!0}),qa(()=>{Ee===!0&&e.autofocus===!0&&r.focus()}),Dn(()=>{kc.value===!0&&e.for===void 0&&(t.targetUid.value=Mi()),e.autofocus===!0&&r.focus()}),ot(()=>{a!==null&&clearTimeout(a)}),Object.assign(r,{focus:b,blur:S}),function(){const L=t.getControl===void 0&&s.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...H.value}:H.value;return U("label",{ref:t.rootRef,class:[E.value,i.class],style:i.style,...L},[s.before!==void 0?U("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:en},s.before()):null,U("div",{class:"q-field__inner relative-position col self-stretch"},[U("div",{ref:t.controlRef,class:F.value,tabindex:-1,...t.controlEvents},G()),g.value===!0?X():null]),s.after!==void 0?U("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:en},s.after()):null])}}const xo={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},hs={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleLowerCase()}},Ba=Object.keys(hs);Ba.forEach(t=>{hs[t].regex=new RegExp(hs[t].pattern)});const fh=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ba.join("")+"])|(.)","g"),No=/[.*+?^${}()|[\]\\]/g,ae=String.fromCharCode(1),mh={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function gh(t,e,n,s){let i,r,o,a;const u=J(null),l=J(h());function c(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}fe(()=>t.type+t.autogrow,d),fe(()=>t.mask,p=>{if(p!==void 0)g(l.value,!0);else{const b=B(l.value);d(),t.modelValue!==b&&e("update:modelValue",b)}}),fe(()=>t.fillMask+t.reverseFillMask,()=>{u.value===!0&&g(l.value,!0)}),fe(()=>t.unmaskedValue,()=>{u.value===!0&&g(l.value)});function h(){if(d(),u.value===!0){const p=C(B(t.modelValue));return t.fillMask!==!1?H(p):p}return t.modelValue}function f(p){if(p<i.length)return i.slice(-p);let b="",S=i;const x=S.indexOf(ae);if(x>-1){for(let N=p-S.length;N>0;N--)b+=ae;S=S.slice(0,x)+b+S.slice(x)}return S}function d(){if(u.value=t.mask!==void 0&&t.mask.length>0&&c(),u.value===!1){a=void 0,i="",r="";return}const p=xo[t.mask]===void 0?t.mask:xo[t.mask],b=typeof t.fillMask=="string"&&t.fillMask.length>0?t.fillMask.slice(0,1):"_",S=b.replace(No,"\\$&"),x=[],N=[],_=[];let G=t.reverseFillMask===!0,$="",X="";p.replace(fh,(L,he,be,T,ne)=>{if(T!==void 0){const se=hs[T];_.push(se),X=se.negate,G===!0&&(N.push("(?:"+X+"+)?("+se.pattern+"+)?(?:"+X+"+)?("+se.pattern+"+)?"),G=!1),N.push("(?:"+X+"+)?("+se.pattern+")?")}else if(be!==void 0)$="\\"+(be==="\\"?"":be),_.push(be),x.push("([^"+$+"]+)?"+$+"?");else{const se=he!==void 0?he:ne;$=se==="\\"?"\\\\\\\\":se.replace(No,"\\\\$&"),_.push(se),x.push("([^"+$+"]+)?"+$+"?")}});const we=new RegExp("^"+x.join("")+"("+($===""?".":"[^"+$+"]")+"+)?"+($===""?"":"["+$+"]*")+"$"),Ee=N.length-1,v=N.map((L,he)=>he===0&&t.reverseFillMask===!0?new RegExp("^"+S+"*"+L):he===Ee?new RegExp("^"+L+"("+(X===""?".":X)+"+)?"+(t.reverseFillMask===!0?"$":S+"*")):new RegExp("^"+L));o=_,a=L=>{const he=we.exec(t.reverseFillMask===!0?L:L.slice(0,_.length));he!==null&&(L=he.slice(1).join(""));const be=[],T=v.length;for(let ne=0,se=L;ne<T;ne++){const Pe=v[ne].exec(se);if(Pe===null)break;se=se.slice(Pe.shift().length),be.push(...Pe)}return be.length>0?be.join(""):L},i=_.map(L=>typeof L=="string"?L:ae).join(""),r=i.split(ae).join(b)}function g(p,b,S){const x=s.value,N=x.selectionEnd,_=x.value.length-N,G=B(p);b===!0&&d();const $=C(G),X=t.fillMask!==!1?H($):$,we=l.value!==X;x.value!==X&&(x.value=X),we===!0&&(l.value=X),document.activeElement===x&&Oe(()=>{if(X===r){const v=t.reverseFillMask===!0?r.length:0;x.setSelectionRange(v,v,"forward");return}if(S==="insertFromPaste"&&t.reverseFillMask!==!0){const v=N-1;E.right(x,v,v);return}if(["deleteContentBackward","deleteContentForward"].indexOf(S)>-1){const v=t.reverseFillMask===!0?N===0?X.length>$.length?1:0:Math.max(0,X.length-(X===r?0:Math.min($.length,_)+1))+1:N;x.setSelectionRange(v,v,"forward");return}if(t.reverseFillMask===!0)if(we===!0){const v=Math.max(0,X.length-(X===r?0:Math.min($.length,_+1)));v===1&&N===1?x.setSelectionRange(v,v,"forward"):E.rightReverse(x,v,v)}else{const v=X.length-_;x.setSelectionRange(v,v,"backward")}else if(we===!0){const v=Math.max(0,i.indexOf(ae),Math.min($.length,N)-1);E.right(x,v,v)}else{const v=N-1;E.right(x,v,v)}});const Ee=t.unmaskedValue===!0?B(X):X;String(t.modelValue)!==Ee&&n(Ee,!0)}function w(p,b,S){const x=C(B(p.value));b=Math.max(0,i.indexOf(ae),Math.min(x.length,b)),p.setSelectionRange(b,S,"forward")}const E={left(p,b,S,x){const N=i.slice(b-1).indexOf(ae)===-1;let _=Math.max(0,b-1);for(;_>=0;_--)if(i[_]===ae){b=_,N===!0&&b++;break}if(_<0&&i[b]!==void 0&&i[b]!==ae)return E.right(p,0,0);b>=0&&p.setSelectionRange(b,x===!0?S:b,"backward")},right(p,b,S,x){const N=p.value.length;let _=Math.min(N,S+1);for(;_<=N;_++)if(i[_]===ae){S=_;break}else i[_-1]===ae&&(S=_);if(_>N&&i[S-1]!==void 0&&i[S-1]!==ae)return E.left(p,N,N);p.setSelectionRange(x?b:S,S,"forward")},leftReverse(p,b,S,x){const N=f(p.value.length);let _=Math.max(0,b-1);for(;_>=0;_--)if(N[_-1]===ae){b=_;break}else if(N[_]===ae&&(b=_,_===0))break;if(_<0&&N[b]!==void 0&&N[b]!==ae)return E.rightReverse(p,0,0);b>=0&&p.setSelectionRange(b,x===!0?S:b,"backward")},rightReverse(p,b,S,x){const N=p.value.length,_=f(N),G=_.slice(0,S+1).indexOf(ae)===-1;let $=Math.min(N,S+1);for(;$<=N;$++)if(_[$-1]===ae){S=$,S>0&&G===!0&&S--;break}if($>N&&_[S-1]!==void 0&&_[S-1]!==ae)return E.leftReverse(p,N,N);p.setSelectionRange(x===!0?b:S,S,"forward")}};function F(p){if(e("keydown",p),_c(p)===!0)return;const b=s.value,S=b.selectionStart,x=b.selectionEnd;if(p.keyCode===37||p.keyCode===39){const N=E[(p.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];p.preventDefault(),N(b,S,x,p.shiftKey)}else p.keyCode===8&&t.reverseFillMask!==!0&&S===x?E.left(b,S,x,!0):p.keyCode===46&&t.reverseFillMask===!0&&S===x&&E.rightReverse(b,S,x,!0)}function C(p){if(p==null||p==="")return"";if(t.reverseFillMask===!0)return A(p);const b=o;let S=0,x="";for(let N=0;N<b.length;N++){const _=p[S],G=b[N];if(typeof G=="string")x+=G,_===G&&S++;else if(_!==void 0&&G.regex.test(_))x+=G.transform!==void 0?G.transform(_):_,S++;else return x}return x}function A(p){const b=o,S=i.indexOf(ae);let x=p.length-1,N="";for(let _=b.length-1;_>=0&&x>-1;_--){const G=b[_];let $=p[x];if(typeof G=="string")N=G+N,$===G&&x--;else if($!==void 0&&G.regex.test($))do N=(G.transform!==void 0?G.transform($):$)+N,x--,$=p[x];while(S===_&&$!==void 0&&G.regex.test($));else return N}return N}function B(p){return typeof p!="string"||a===void 0?typeof p=="number"?a(""+p):p:a(p)}function H(p){return r.length-p.length<=0?p:t.reverseFillMask===!0&&p.length>0?r.slice(0,-p.length)+p:p+r.slice(p.length)}return{innerValue:l,hasMask:u,moveCursorForPaste:w,updateMaskValue:g,onMaskedKeydown:F}}const ph={name:String};function Dy(t={}){return(e,n,s)=>{e[n](U("input",{class:"hidden"+(s||""),...t.value}))}}function yh(t){return M(()=>t.name||t.for)}function vh(t,e){function n(){const s=t.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(r=>{i.items.add(r)}),{files:i.files}}catch{return{files:void 0}}}return e===!0?M(()=>{if(t.type==="file")return n()}):M(n)}const wh=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Eh=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,bh=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Th=/[a-z0-9_ -]$/i;function Sh(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(He.is.firefox===!0?Th.test(n.data)===!1:wh.test(n.data)===!0||Eh.test(n.data)===!0||bh.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var xy=Ze({name:"QInput",inheritAttrs:!1,props:{...lh,...mh,...ph,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ch,"paste","change","keydown","animationend"],setup(t,{emit:e,attrs:n}){const{proxy:s}=Me(),{$q:i}=s,r={};let o=NaN,a,u,l=null,c;const h=J(null),f=yh(t),{innerValue:d,hasMask:g,moveCursorForPaste:w,updateMaskValue:E,onMaskedKeydown:F}=gh(t,e,we,h),C=vh(t,!0),A=M(()=>Oi(d.value)),B=Sh($),H=hh(),p=M(()=>t.type==="textarea"||t.autogrow===!0),b=M(()=>p.value===!0||["text","search","url","tel","password"].includes(t.type)),S=M(()=>{const T={...H.splitAttrs.listeners.value,onInput:$,onPaste:G,onChange:v,onBlur:L,onFocus:go};return T.onCompositionstart=T.onCompositionupdate=T.onCompositionend=B,g.value===!0&&(T.onKeydown=F),t.autogrow===!0&&(T.onAnimationend=X),T}),x=M(()=>{const T={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:f.value,...H.splitAttrs.attributes.value,id:H.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return p.value===!1&&(T.type=t.type),t.autogrow===!0&&(T.rows=1),T});fe(()=>t.type,()=>{h.value&&(h.value.value=t.modelValue)}),fe(()=>t.modelValue,T=>{if(g.value===!0){if(u===!0&&(u=!1,String(T)===o))return;E(T)}else d.value!==T&&(d.value=T,t.type==="number"&&r.hasOwnProperty("value")===!0&&(a===!0?a=!1:delete r.value));t.autogrow===!0&&Oe(Ee)}),fe(()=>t.autogrow,T=>{T===!0?Oe(Ee):h.value!==null&&n.rows>0&&(h.value.style.height="auto")}),fe(()=>t.dense,()=>{t.autogrow===!0&&Oe(Ee)});function N(){Ls(()=>{const T=document.activeElement;h.value!==null&&h.value!==T&&(T===null||T.id!==H.targetUid.value)&&h.value.focus({preventScroll:!0})})}function _(){h.value!==null&&h.value.select()}function G(T){if(g.value===!0&&t.reverseFillMask!==!0){const ne=T.target;w(ne,ne.selectionStart,ne.selectionEnd)}e("paste",T)}function $(T){if(!T||!T.target)return;if(t.type==="file"){e("update:modelValue",T.target.files);return}const ne=T.target.value;if(T.target.qComposing===!0){r.value=ne;return}if(g.value===!0)E(ne,!1,T.inputType);else if(we(ne),b.value===!0&&T.target===document.activeElement){const{selectionStart:se,selectionEnd:Pe}=T.target;se!==void 0&&Pe!==void 0&&Oe(()=>{T.target===document.activeElement&&ne.indexOf(T.target.value)===0&&T.target.setSelectionRange(se,Pe)})}t.autogrow===!0&&Ee()}function X(T){e("animationend",T),Ee()}function we(T,ne){c=()=>{l=null,t.type!=="number"&&r.hasOwnProperty("value")===!0&&delete r.value,t.modelValue!==T&&o!==T&&(o=T,ne===!0&&(u=!0),e("update:modelValue",T),Oe(()=>{o===T&&(o=NaN)})),c=void 0},t.type==="number"&&(a=!0,r.value=T),t.debounce!==void 0?(l!==null&&clearTimeout(l),r.value=T,l=setTimeout(c,t.debounce)):c()}function Ee(){requestAnimationFrame(()=>{const T=h.value;if(T!==null){const ne=T.parentNode.style,{overflow:se}=T.style;i.platform.is.firefox!==!0&&(T.style.overflow="hidden"),ne.marginBottom=T.scrollHeight-1+"px",T.style.height="1px",T.style.height=T.scrollHeight+"px",T.style.overflow=se,ne.marginBottom=""}})}function v(T){B(T),l!==null&&(clearTimeout(l),l=null),c!==void 0&&c(),e("change",T.target.value)}function L(T){T!==void 0&&go(T),l!==null&&(clearTimeout(l),l=null),c!==void 0&&c(),a=!1,u=!1,delete r.value,t.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=d.value!==void 0?d.value:"")})}function he(){return r.hasOwnProperty("value")===!0?r.value:d.value!==void 0?d.value:""}ot(()=>{L()}),Dn(()=>{t.autogrow===!0&&Ee()}),Object.assign(H,{innerValue:d,fieldClass:M(()=>`q-${p.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length>0),inputRef:h,emitValue:we,hasValue:A,floatingLabel:M(()=>A.value===!0||Oi(t.displayValue)),getControl:()=>U(p.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,...x.value,...S.value,...t.type!=="file"?{value:he()}:C.value}),getShadowControl:()=>U("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(p.value===!0?"":" text-no-wrap")},[U("span",{class:"invisible"},he()),U("span",t.shadowText)])});const be=dh(H);return Object.assign(s,{focus:N,select:_,getNativeElement:()=>h.value}),fr(s,"nativeEl",()=>h.value),be}}),Ny=Ze({name:"QCardActions",props:{...qc,vertical:Boolean},setup(t,{slots:e}){const n=Pc(t),s=M(()=>`q-card__actions ${n.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>U("div",{class:s.value},Fe(e.default))}}),Ry=Ze({name:"QCard",props:{...Ns,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Me(),s=Rs(t,n),i=M(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>U(t.tag,{class:i.value},Fe(e.default))}}),Ly=Ze({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:e,emit:n}){const s=Me(),i=J(null);let r=0;const o=[];function a(d){const g=typeof d=="boolean"?d:t.noErrorFocus!==!0,w=++r,E=(A,B)=>{n("validation"+(A===!0?"Success":"Error"),B)},F=A=>{const B=A.validate();return typeof B.then=="function"?B.then(H=>({valid:H,comp:A}),H=>({valid:!1,comp:A,err:H})):Promise.resolve({valid:B,comp:A})};return(t.greedy===!0?Promise.all(o.map(F)).then(A=>A.filter(B=>B.valid!==!0)):o.reduce((A,B)=>A.then(()=>F(B).then(H=>{if(H.valid===!1)return Promise.reject(H)})),Promise.resolve()).catch(A=>[A])).then(A=>{if(A===void 0||A.length===0)return w===r&&E(!0),!0;if(w===r){const{comp:B,err:H}=A[0];if(H!==void 0&&console.error(H),E(!1,B),g===!0){const p=A.find(({comp:b})=>typeof b.focus=="function"&&mr(b.$)===!1);p!==void 0&&p.comp.focus()}}return!1})}function u(){r++,o.forEach(d=>{typeof d.resetValidation=="function"&&d.resetValidation()})}function l(d){d!==void 0&&pn(d);const g=r+1;a().then(w=>{g===r&&w===!0&&(t.onSubmit!==void 0?n("submit",d):d!==void 0&&d.target!==void 0&&typeof d.target.submit=="function"&&d.target.submit())})}function c(d){d!==void 0&&pn(d),n("reset"),Oe(()=>{u(),t.autofocus===!0&&t.noResetFocus!==!0&&h()})}function h(){Ls(()=>{if(i.value===null)return;const d=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),g=>g.tabIndex>-1);d!=null&&d.focus({preventScroll:!0})})}Dc(Va,{bindComponent(d){o.push(d)},unbindComponent(d){const g=o.indexOf(d);g>-1&&o.splice(g,1)}});let f=!1;return xs(()=>{f=!0}),qa(()=>{f===!0&&t.autofocus===!0&&h()}),Dn(()=>{t.autofocus===!0&&h()}),Object.assign(s.proxy,{validate:a,resetValidation:u,submit:l,reset:c,focus:h,getValidationComponents:()=>o}),()=>U("form",{class:"q-form",ref:i,onSubmit:l,onReset:c},Fe(e.default))}});function Ch(){let t;const e=Me();function n(){t=void 0}return xs(n),ot(n),{removeTick:n,registerTick(s){t=s,Oe(()=>{t===s&&(mr(e)===!1&&t(),t=void 0)})}}}const Ih={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ah(t,e=()=>{},n=()=>{}){return{transitionProps:M(()=>{const s=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:M(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}let kh=1,_h=document.body;function Dh(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${kh++}`:t,po.globalNodes!==void 0){const s=po.globalNodes.class;s!==void 0&&(n.className=s)}return _h.appendChild(n),n}function xh(t){t.remove()}const yi=[];function Nh(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Rh(t,e,n,s){const i=J(!1),r=J(!1);let o=null;const a={},u=s==="dialog"&&Nh(t);function l(h){if(h===!0){Do(a),r.value=!0;return}r.value=!1,i.value===!1&&(u===!1&&o===null&&(o=Dh(!1,s)),i.value=!0,yi.push(t.proxy),ah(a))}function c(h){if(r.value=!1,h!==!0)return;Do(a),i.value=!1;const f=yi.indexOf(t.proxy);f!==-1&&yi.splice(f,1),o!==null&&(xh(o),o=null)}return xc(()=>{c(!0)}),t.proxy.__qPortal=!0,fr(t.proxy,"contentEl",()=>e.value),{showPortal:l,hidePortal:c,portalIsActive:i,portalIsAccessible:r,renderPortal:()=>u===!0?n():i.value===!0?[U(Nc,{to:o},n())]:void 0}}const yt=[];let Ot;function Lh(t){Ot=t.keyCode===27}function Mh(){Ot===!0&&(Ot=!1)}function Oh(t){Ot===!0&&(Ot=!1,Fa(t,27)===!0&&yt[yt.length-1](t))}function Ua(t){window[t]("keydown",Lh),window[t]("blur",Mh),window[t]("keyup",Oh),Ot=!1}function Fh(t){He.is.desktop===!0&&(yt.push(t),yt.length===1&&Ua("addEventListener"))}function Ro(t){const e=yt.indexOf(t);e>-1&&(yt.splice(e,1),yt.length===0&&Ua("removeEventListener"))}const vt=[];function $a(t){vt[vt.length-1](t)}function Vh(t){He.is.desktop===!0&&(vt.push(t),vt.length===1&&document.body.addEventListener("focusin",$a))}function Lo(t){const e=vt.indexOf(t);e>-1&&(vt.splice(e,1),vt.length===0&&document.body.removeEventListener("focusin",$a))}let Jn=0;const qh={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Mo={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var My=Ze({name:"QDialog",inheritAttrs:!1,props:{...$c,...Ih,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...jc,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:s}){const i=Me(),{proxy:{$q:r}}=i,o=J(null),a=J(!1),u=J(!1);let l=null,c=null,h,f;const d=M(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:g}=Jc(),{registerTimeout:w}=Zc(),{registerTick:E,removeTick:F}=Ch(),{transitionProps:C,transitionStyle:A}=Ah(t,()=>Mo[t.position][0],()=>Mo[t.position][1]),{showPortal:B,hidePortal:H,portalIsAccessible:p,renderPortal:b}=Rh(i,o,bc,"dialog"),{hide:S}=Hc({showing:a,hideOnRouteChange:d,handleShow:we,handleHide:Ee,processOnMount:!0}),{addToHistory:x,removeFromHistory:N}=Uc(a,S,d),_=M(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${qh[t.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),G=M(()=>a.value===!0&&t.seamless!==!0),$=M(()=>t.autoClose===!0?{onClick:ne}:{}),X=M(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${G.value===!0?"modal":"seamless"}`,s.class]);fe(()=>t.maximized,z=>{a.value===!0&&T(z)}),fe(G,z=>{g(z),z===!0?(Vh(Pe),Fh(he)):(Lo(Pe),Ro(he))});function we(z){x(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,T(t.maximized),B(),u.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),E(v)):F(),w(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:Te,bottom:ci}=document.activeElement.getBoundingClientRect(),{innerHeight:fo}=window,hi=window.visualViewport!==void 0?window.visualViewport.height:fo;Te>0&&ci>hi/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-hi,ci>=fo?1/0:Math.ceil(document.scrollingElement.scrollTop+ci-hi/2))),document.activeElement.scrollIntoView()}f=!0,o.value.click(),f=!1}B(!0),u.value=!1,n("show",z)},t.transitionDuration)}function Ee(z){F(),N(),be(!0),u.value=!0,H(),c!==null&&(((z&&z.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),w(()=>{H(!0),u.value=!1,n("hide",z)},t.transitionDuration)}function v(z){Ls(()=>{let Te=o.value;Te===null||Te.contains(document.activeElement)===!0||(Te=(z!==""?Te.querySelector(z):null)||Te.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||Te.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||Te.querySelector("[autofocus], [data-autofocus]")||Te,Te.focus({preventScroll:!0}))})}function L(z){z&&typeof z.focus=="function"?z.focus({preventScroll:!0}):v(),n("shake");const Te=o.value;Te!==null&&(Te.classList.remove("q-animate--scale"),Te.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,o.value!==null&&(Te.classList.remove("q-animate--scale"),v())},170))}function he(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&L():(n("escapeKey"),S()))}function be(z){l!==null&&(clearTimeout(l),l=null),(z===!0||a.value===!0)&&(T(!1),t.seamless!==!0&&(g(!1),Lo(Pe),Ro(he))),z!==!0&&(c=null)}function T(z){z===!0?h!==!0&&(Jn<1&&document.body.classList.add("q-body--dialog"),Jn++,h=!0):h===!0&&(Jn<2&&document.body.classList.remove("q-body--dialog"),Jn--,h=!1)}function ne(z){f!==!0&&(S(z),n("click",z))}function se(z){t.persistent!==!0&&t.noBackdropDismiss!==!0?S(z):t.noShake!==!0&&L(z.relatedTarget)}function Pe(z){t.allowFocusOutside!==!0&&p.value===!0&&Bc(o.value,z.target)!==!0&&v('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:v,shake:L,__updateRefocusTarget(z){c=z||null}}),ot(be);const Ec=r.platform.is.ios===!0||r.platform.is.safari?"onClick":"onFocusin";function bc(){return U("div",{role:"dialog","aria-modal":G.value===!0?"true":"false",...s,class:X.value},[U(Li,{name:"q-transition--fade",appear:!0},()=>G.value===!0?U("div",{class:"q-dialog__backdrop fixed-full",style:A.value,"aria-hidden":"true",tabindex:-1,[Ec]:se}):null),U(Li,C.value,()=>a.value===!0?U("div",{ref:o,class:_.value,style:A.value,tabindex:-1,...$.value},Fe(e.default)):null)])}return b}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ph=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;u||(d=64,o||(f=64)),s.push(n[c],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ph(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bh=function(t){const e=ja(t);return Ha.encodeByteArray(e,!0)},ds=function(t){return Bh(t).replace(/\./g,"")},Uh=function(t){try{return Ha.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=()=>$h().__FIREBASE_DEFAULTS__,Hh=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kh=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uh(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return jh()||Hh()||Kh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zh=t=>{var e,n;return(n=(e=Ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gh=t=>{const e=zh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qh=()=>{var t;return(t=Ka())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ds(JSON.stringify(n)),ds(JSON.stringify(o)),a].join(".")}function Yh(){try{return typeof indexedDB=="object"}catch{return!1}}function Jh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="FirebaseError";class zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zh,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ed(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,s)}}function ed(t,e){return t.replace(td,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const td=/\{\$([^}]+)}/g;function Fi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Oo(r)&&Oo(o)){if(!Fi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Oo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(id(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sd(t){return t===dt?void 0:t}function id(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const od={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ad=Q.INFO,ud={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},ld=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ud[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=ad,this._logHandler=ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const cd=(t,e)=>e.some(n=>t instanceof n);let Fo,Vo;function hd(){return Fo||(Fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dd(){return Vo||(Vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qa=new WeakMap,Vi=new WeakMap,Wa=new WeakMap,vi=new WeakMap,gr=new WeakMap;function fd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(et(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qa.set(n,t)}).catch(()=>{}),gr.set(e,t),e}function md(t){if(Vi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vi.set(t,e)}let qi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gd(t){qi=t(qi)}function pd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wi(this),e,...n);return Wa.set(s,e.sort?e.sort():[e]),et(s)}:dd().includes(t)?function(...e){return t.apply(wi(this),e),et(Qa.get(this))}:function(...e){return et(t.apply(wi(this),e))}}function yd(t){return typeof t=="function"?pd(t):(t instanceof IDBTransaction&&md(t),cd(t,hd())?new Proxy(t,qi):t)}function et(t){if(t instanceof IDBRequest)return fd(t);if(vi.has(t))return vi.get(t);const e=yd(t);return e!==t&&(vi.set(t,e),gr.set(e,t)),e}const wi=t=>gr.get(t);function vd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=et(o);return s&&o.addEventListener("upgradeneeded",u=>{s(et(o.result),u.oldVersion,u.newVersion,et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wd=["get","getKey","getAll","getAllKeys","count"],Ed=["put","add","delete","clear"],Ei=new Map;function qo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ei.get(e))return Ei.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ed.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wd.includes(n)))return;const r=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Ei.set(e,r),r}gd(t=>({...t,get:(e,n,s)=>qo(e,n)||t.get(e,n,s),has:(e,n)=>!!qo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Td(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Td(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pi="@firebase/app",Po="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Ga("@firebase/app"),Sd="@firebase/app-compat",Cd="@firebase/analytics-compat",Id="@firebase/analytics",Ad="@firebase/app-check-compat",kd="@firebase/app-check",_d="@firebase/auth",Dd="@firebase/auth-compat",xd="@firebase/database",Nd="@firebase/database-compat",Rd="@firebase/functions",Ld="@firebase/functions-compat",Md="@firebase/installations",Od="@firebase/installations-compat",Fd="@firebase/messaging",Vd="@firebase/messaging-compat",qd="@firebase/performance",Pd="@firebase/performance-compat",Bd="@firebase/remote-config",Ud="@firebase/remote-config-compat",$d="@firebase/storage",jd="@firebase/storage-compat",Hd="@firebase/firestore",Kd="@firebase/firestore-compat",zd="firebase",Gd="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="[DEFAULT]",Qd={[Pi]:"fire-core",[Sd]:"fire-core-compat",[Id]:"fire-analytics",[Cd]:"fire-analytics-compat",[kd]:"fire-app-check",[Ad]:"fire-app-check-compat",[_d]:"fire-auth",[Dd]:"fire-auth-compat",[xd]:"fire-rtdb",[Nd]:"fire-rtdb-compat",[Rd]:"fire-fn",[Ld]:"fire-fn-compat",[Md]:"fire-iid",[Od]:"fire-iid-compat",[Fd]:"fire-fcm",[Vd]:"fire-fcm-compat",[qd]:"fire-perf",[Pd]:"fire-perf-compat",[Bd]:"fire-rc",[Ud]:"fire-rc-compat",[$d]:"fire-gcs",[jd]:"fire-gcs-compat",[Hd]:"fire-fst",[Kd]:"fire-fst-compat","fire-js":"fire-js",[zd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Map,Ui=new Map;function Wd(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(Ui.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Ui.set(e,t);for(const n of fs.values())Wd(n,t);return!0}function Xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new za("app","Firebase",Yd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=Gd;function Xa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw tt.create("bad-app-name",{appName:String(i)});if(n||(n=Qh()),!n)throw tt.create("no-options");const r=fs.get(i);if(r){if(Fi(n,r.options)&&Fi(s,r.config))return r;throw tt.create("duplicate-app",{appName:i})}const o=new rd(i);for(const u of Ui.values())o.addComponent(u);const a=new Jd(n,s,o);return fs.set(i,a),a}function ef(t=Bi){const e=fs.get(t);if(!e&&t===Bi)return Xa();if(!e)throw tt.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let i=(s=Qd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}ms(new vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="firebase-heartbeat-database",nf=1,wn="firebase-heartbeat-store";let bi=null;function Ya(){return bi||(bi=vd(tf,nf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wn)}}}).catch(t=>{throw tt.create("idb-open",{originalErrorMessage:t.message})})),bi}async function sf(t){try{return(await Ya()).transaction(wn).objectStore(wn).get(Ja(t))}catch(e){if(e instanceof zt)bt.warn(e.message);else{const n=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}async function Bo(t,e){try{const s=(await Ya()).transaction(wn,"readwrite");return await s.objectStore(wn).put(e,Ja(t)),s.done}catch(n){if(n instanceof zt)bt.warn(n.message);else{const s=tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(s.message)}}}function Ja(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=1024,of=30*24*60*60*1e3;class af{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=of}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uo(),{heartbeatsToSend:n,unsentEntries:s}=uf(this._heartbeatsCache.heartbeats),i=ds(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uo(){return new Date().toISOString().substring(0,10)}function uf(t,e=rf){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$o(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$o(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yh()?Jh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $o(t){return ds(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){ms(new vn("platform-logger",e=>new bd(e),"PRIVATE")),ms(new vn("heartbeat",e=>new af(e),"PRIVATE")),Rt(Pi,Po,t),Rt(Pi,Po,"esm2017"),Rt("fire-js","")}cf("");var hf="firebase",df="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(hf,df,"app");var ff=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k,pr=pr||{},V=ff||self;function gs(){}function Ms(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mf(t){return Object.prototype.hasOwnProperty.call(t,Ti)&&t[Ti]||(t[Ti]=++gf)}var Ti="closure_uid_"+(1e9*Math.random()>>>0),gf=0;function pf(t,e,n){return t.call.apply(t.bind,arguments)}function yf(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=pf:Ae=yf,Ae.apply(null,arguments)}function Zn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function at(){this.s=this.s,this.o=this.o}var vf=0;at.prototype.s=!1;at.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vf!=0)&&mf(this)};at.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Za=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function jo(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ms(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var wf=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",gs,e),V.removeEventListener("test",gs,e)}catch{}return t}();function ps(t){return/^[\s\xa0]*$/.test(t)}var Ho=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Si(t,e){return t<e?-1:t>e?1:0}function Os(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function Ue(t){return Os().indexOf(t)!=-1}function vr(t){return vr[" "](t),t}vr[" "]=gs;function Ef(t){var e=Sf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var bf=Ue("Opera"),Ft=Ue("Trident")||Ue("MSIE"),eu=Ue("Edge"),$i=eu||Ft,tu=Ue("Gecko")&&!(Os().toLowerCase().indexOf("webkit")!=-1&&!Ue("Edge"))&&!(Ue("Trident")||Ue("MSIE"))&&!Ue("Edge"),Tf=Os().toLowerCase().indexOf("webkit")!=-1&&!Ue("Edge");function nu(){var t=V.document;return t?t.documentMode:void 0}var ys;e:{var Ci="",Ii=function(){var t=Os();if(tu)return/rv:([^\);]+)(\)|;)/.exec(t);if(eu)return/Edge\/([\d\.]+)/.exec(t);if(Ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Tf)return/WebKit\/(\S+)/.exec(t);if(bf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ii&&(Ci=Ii?Ii[1]:""),Ft){var Ai=nu();if(Ai!=null&&Ai>parseFloat(Ci)){ys=String(Ai);break e}}ys=Ci}var Sf={};function Cf(){return Ef(function(){let t=0;const e=Ho(String(ys)).split("."),n=Ho("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Si(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Si(i[2].length==0,r[2].length==0)||Si(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var ji;if(V.document&&Ft){var Ko=nu();ji=Ko||parseInt(ys,10)||void 0}else ji=void 0;var If=ji;function En(t,e){if(ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tu){e:{try{vr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Af[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&En.X.h.call(this)}}ve(En,ke);var Af={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),kf=0;function _f(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++kf,this.ba=this.ea=!1}function Fs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function su(t){const e={};for(const n in t)e[n]=t[n];return e}const zo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<zo.length;r++)n=zo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Vs(t){this.src=t,this.g={},this.h=0}Vs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ki(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _f(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Hi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Za(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Fs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ki(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),ki={};function ru(t,e,n,s,i){if(s&&s.once)return au(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ru(t,e[r],n,s,i);return null}return n=Sr(n),t&&t[Nn]?t.N(e,n,xn(s)?!!s.capture:!!s,i):ou(t,e,n,!1,s,i)}function ou(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=xn(i)?!!i.capture:!!i,a=Tr(t);if(a||(t[Er]=a=new Vs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Df(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)wf||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(lu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Df(){function t(n){return e.call(t.src,t.listener,n)}const e=xf;return t}function au(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)au(t,e[r],n,s,i);return null}return n=Sr(n),t&&t[Nn]?t.O(e,n,xn(s)?!!s.capture:!!s,i):ou(t,e,n,!0,s,i)}function uu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)uu(t,e[r],n,s,i);else s=xn(s)?!!s.capture:!!s,n=Sr(n),t&&t[Nn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ki(r,n,s,i),-1<n&&(Fs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ki(e,n,s,i)),(n=-1<t?e[t]:null)&&br(n))}function br(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Nn])Hi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(lu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Tr(e))?(Hi(n,t),n.h==0&&(n.src=null,e[Er]=null)):Fs(t)}}}function lu(t){return t in ki?ki[t]:ki[t]="on"+t}function xf(t,e){if(t.ba)t=!0;else{e=new En(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&br(t),t=n.call(s,e)}return t}function Tr(t){return t=t[Er],t instanceof Vs?t:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sr(t){return typeof t=="function"?t:(t[_i]||(t[_i]=function(e){return t.handleEvent(e)}),t[_i])}function me(){at.call(this),this.i=new Vs(this),this.P=this,this.I=null}ve(me,at);me.prototype[Nn]=!0;me.prototype.removeEventListener=function(t,e,n,s){uu(this,t,e,n,s)};function ye(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ke(e,t);else if(e instanceof ke)e.target=e.target||t;else{var i=e;e=new ke(s,t),iu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=es(o,s,!0,e)&&i}if(o=e.g=t,i=es(o,s,!0,e)&&i,i=es(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=es(o,s,!1,e)&&i}me.prototype.M=function(){if(me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fs(n[s]);delete t.g[e],t.h--}}this.I=null};me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function es(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Hi(t.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Cr=V.JSON.stringify;function Nf(){var t=du;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rf{constructor(){this.h=this.g=null}add(e,n){const s=cu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var cu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lf,t=>t.reset());class Lf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mf(t){V.setTimeout(()=>{throw t},0)}function hu(t,e){zi||Of(),Gi||(zi(),Gi=!0),du.add(t,e)}var zi;function Of(){var t=V.Promise.resolve(void 0);zi=function(){t.then(Ff)}}var Gi=!1,du=new Rf;function Ff(){for(var t;t=Nf();){try{t.h.call(t.g)}catch(n){Mf(n)}var e=cu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gi=!1}function qs(t,e){me.call(this),this.h=t||1,this.g=e||V,this.j=Ae(this.lb,this),this.l=Date.now()}ve(qs,me);k=qs.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ye(this,"tick"),this.ca&&(Ir(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ir(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}k.M=function(){qs.X.M.call(this),Ir(this),delete this.g};function Ar(t,e,n){if(typeof t=="function")n&&(t=Ae(t,n));else if(t&&typeof t.handleEvent=="function")t=Ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function fu(t){t.g=Ar(()=>{t.g=null,t.i&&(t.i=!1,fu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Vf extends at{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fu(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(t){at.call(this),this.h=t,this.g={}}ve(bn,at);var Go=[];function mu(t,e,n,s){Array.isArray(n)||(n&&(Go[0]=n.toString()),n=Go);for(var i=0;i<n.length;i++){var r=ru(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function gu(t){wr(t.g,function(e,n){this.g.hasOwnProperty(n)&&br(e)},t),t.g={}}bn.prototype.M=function(){bn.X.M.call(this),gu(this)};bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ps(){this.g=!0}Ps.prototype.Aa=function(){this.g=!1};function qf(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Pf(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Nt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Uf(t,n)+(s?" "+s:"")})}function Bf(t,e){t.info(function(){return"TIMEOUT: "+e})}Ps.prototype.info=function(){};function Uf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cr(n)}catch{return e}}var Ct={},Qo=null;function Bs(){return Qo=Qo||new me}Ct.Pa="serverreachability";function pu(t){ke.call(this,Ct.Pa,t)}ve(pu,ke);function Tn(t){const e=Bs();ye(e,new pu(e))}Ct.STAT_EVENT="statevent";function yu(t,e){ke.call(this,Ct.STAT_EVENT,t),this.stat=e}ve(yu,ke);function De(t){const e=Bs();ye(e,new yu(e,t))}Ct.Qa="timingevent";function vu(t,e){ke.call(this,Ct.Qa,t),this.size=e}ve(vu,ke);function Rn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Us={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},wu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function kr(){}kr.prototype.h=null;function Wo(t){return t.h||(t.h=t.i())}function Eu(){}var Ln={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _r(){ke.call(this,"d")}ve(_r,ke);function Dr(){ke.call(this,"c")}ve(Dr,ke);var Qi;function $s(){}ve($s,kr);$s.prototype.g=function(){return new XMLHttpRequest};$s.prototype.i=function(){return{}};Qi=new $s;function Mn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new bn(this),this.O=$f,t=$i?125:void 0,this.T=new qs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new bu}function bu(){this.i=null,this.g="",this.h=!1}var $f=45e3,Wi={},vs={};k=Mn.prototype;k.setTimeout=function(t){this.O=t};function Xi(t,e,n){t.K=1,t.v=Hs(Qe(e)),t.s=n,t.P=!0,Tu(t,null)}function Tu(t,e){t.F=Date.now(),On(t),t.A=Qe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),xu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new bu,t.g=Yu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Vf(Ae(t.La,t,t.g),t.N)),mu(t.S,t.g,"readystatechange",t.ib),e=t.H?su(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Tn(),qf(t.j,t.u,t.A,t.m,t.U,t.s)}k.ib=function(t){t=t.target;const e=this.L;e&&Ke(t)==3?e.l():this.La(t)};k.La=function(t){try{if(t==this.g)e:{const c=Ke(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||$i||this.g&&(this.h.h||this.g.fa()||Zo(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Tn(3):Tn(2)),js(this);var n=this.g.aa();this.Y=n;t:if(Su(this)){var s=Zo(this.g);t="";var i=s.length,r=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){mt(this),hn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Pf(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ps(a)){var l=a;break t}}l=null}if(n=l)Nt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yi(this,n);else{this.i=!1,this.o=3,De(12),mt(this),hn(this);break e}}this.P?(Cu(this,c,o),$i&&this.i&&c==3&&(mu(this.S,this.T,"tick",this.hb),this.T.start())):(Nt(this.j,this.m,o,null),Yi(this,o)),c==4&&mt(this),this.i&&!this.I&&(c==4?Gu(this.l,this):(this.i=!1,On(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),mt(this),hn(this)}}}catch{}finally{}};function Su(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Cu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=jf(t,n),i==vs){e==4&&(t.o=4,De(14),s=!1),Nt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wi){t.o=4,De(15),Nt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Nt(t.j,t.m,i,null),Yi(t,i);Su(t)&&i!=vs&&i!=Wi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,De(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fr(e),e.K=!0,De(11))):(Nt(t.j,t.m,n,"[Invalid Chunked Response]"),mt(t),hn(t))}k.hb=function(){if(this.g){var t=Ke(this.g),e=this.g.fa();this.C<e.length&&(js(this),Cu(this,t,e),this.i&&t!=4&&On(this))}};function jf(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?vs:(n=Number(e.substring(n,s)),isNaN(n)?Wi:(s+=1,s+n>e.length?vs:(e=e.substr(s,n),t.C=s+n,e)))}k.cancel=function(){this.I=!0,mt(this)};function On(t){t.V=Date.now()+t.O,Iu(t,t.O)}function Iu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rn(Ae(t.gb,t),e)}function js(t){t.B&&(V.clearTimeout(t.B),t.B=null)}k.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Bf(this.j,this.A),this.K!=2&&(Tn(),De(17)),mt(this),this.o=2,hn(this)):Iu(this,this.V-t)};function hn(t){t.l.G==0||t.I||Gu(t.l,t)}function mt(t){js(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ir(t.T),gu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ji(n.h,t))){if(!t.J&&Ji(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)bs(n),Gs(n);else break e;Or(n),De(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Rn(Ae(n.cb,n),6e3));if(1>=Lu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gt(n,11)}else if((t.J||n.g==t)&&bs(n),!ps(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(xr(r,r.h),r.h=null))}if(s.D){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,ee(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Xu(s,s.H?s.ka:null,s.V),o.J){Mu(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(js(a),On(a)),s.g=o}else Ku(s);0<n.i.length&&Qs(n)}else l[0]!="stop"&&l[0]!="close"||gt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?gt(n,7):Mr(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Tn(4)}catch{}}function Hf(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ms(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Kf(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Ms(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Au(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ms(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Kf(t),s=Hf(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wt){this.h=e!==void 0?e:t.h,ws(this,t.j),this.s=t.s,this.g=t.g,Es(this,t.m),this.l=t.l,e=t.i;var n=new Sn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xo(this,n),this.o=t.o}else t&&(n=String(t).match(ku))?(this.h=!!e,ws(this,n[1]||"",!0),this.s=on(n[2]||""),this.g=on(n[3]||"",!0),Es(this,n[4]),this.l=on(n[5]||"",!0),Xo(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.h=!!e,this.i=new Sn(null,this.h))}wt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(an(e,Yo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(an(e,Yo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(an(n,n.charAt(0)=="/"?Wf:Qf,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",an(n,Yf)),t.join("")};function Qe(t){return new wt(t)}function ws(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Es(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xo(t,e,n){e instanceof Sn?(t.i=e,Jf(t.i,t.h)):(n||(e=an(e,Xf)),t.i=new Sn(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function Hs(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function an(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Gf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yo=/[#\/\?@]/g,Qf=/[#\?:]/g,Wf=/[#\?]/g,Xf=/[#\?@]/g,Yf=/#/g;function Sn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ut(t){t.g||(t.g=new Map,t.h=0,t.i&&zf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Sn.prototype;k.add=function(t,e){ut(this),this.i=null,t=Gt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _u(t,e){ut(t),e=Gt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Du(t,e){return ut(t),e=Gt(t,e),t.g.has(e)}k.forEach=function(t,e){ut(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};k.oa=function(){ut(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};k.W=function(t){ut(this);let e=[];if(typeof t=="string")Du(this,t)&&(e=e.concat(this.g.get(Gt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return ut(this),this.i=null,t=Gt(this,t),Du(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xu(t,e,n){_u(t,e),0<n.length&&(t.i=null,t.g.set(Gt(t,e),yr(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jf(t,e){e&&!t.j&&(ut(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(_u(this,s),xu(this,i,n))},t)),t.j=e}var Zf=class{constructor(t,e){this.h=t,this.g=e}};function Nu(t){this.l=t||em,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var em=10;function Ru(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lu(t){return t.h?1:t.g?t.g.size:0}function Ji(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xr(t,e){t.g?t.g.add(e):t.h=e}function Mu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nu.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ou(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yr(t.i)}function Nr(){}Nr.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Nr.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function tm(){this.g=new Nr}function nm(t,e,n){const s=n||"";try{Au(t,function(i,r){let o=i;xn(i)&&(o=Cr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function sm(t,e){const n=new Ps;if(V.Image){const s=new Image;s.onload=Zn(ts,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zn(ts,n,s,"TestLoadImage: error",!1,e),s.onabort=Zn(ts,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zn(ts,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ts(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fn(t){this.l=t.ac||null,this.j=t.jb||!1}ve(Fn,kr);Fn.prototype.g=function(){return new Ks(this.l,this.j)};Fn.prototype.i=function(t){return function(){return t}}({});function Ks(t,e){me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ve(Ks,me);var Rr=0;k=Ks.prototype;k.open=function(t,e){if(this.readyState!=Rr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=Rr};k.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Fu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}k.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vn(this):Cn(this),this.readyState==3&&Fu(this)}};k.Va=function(t){this.g&&(this.response=this.responseText=t,Vn(this))};k.Ua=function(t){this.g&&(this.response=t,Vn(this))};k.ga=function(){this.g&&Vn(this)};function Vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var im=V.JSON.parse;function te(t){me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vu,this.K=this.L=!1}ve(te,me);var Vu="",rm=/^https?$/i,om=["POST","PUT"];k=te.prototype;k.Ka=function(t){this.L=t};k.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qi.g(),this.C=this.u?Wo(this.u):Wo(Qi),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Jo(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=Za(om,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bu(this),0<this.B&&((this.K=am(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Ar(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Jo(this,r)}};function am(t){return Ft&&Cf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.qa=function(){typeof pr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function Jo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qu(t),zs(t)}function qu(t){t.D||(t.D=!0,ye(t,"complete"),ye(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ye(this,"complete"),ye(this,"abort"),zs(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zs(this,!0)),te.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?Pu(this):this.fb())};k.fb=function(){Pu(this)};function Pu(t){if(t.h&&typeof pr!="undefined"&&(!t.C[1]||Ke(t)!=4||t.aa()!=2)){if(t.v&&Ke(t)==4)Ar(t.Ha,0,t);else if(ye(t,"readystatechange"),Ke(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ku)[1]||null;if(!i&&V.self&&V.self.location){var r=V.self.location.protocol;i=r.substr(0,r.length-1)}s=!rm.test(i?i.toLowerCase():"")}n=s}if(n)ye(t,"complete"),ye(t,"success");else{t.m=6;try{var o=2<Ke(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qu(t)}}finally{zs(t)}}}}function zs(t,e){if(t.g){Bu(t);const n=t.g,s=t.C[0]?gs:null;t.g=null,t.C=null,e||ye(t,"ready");try{n.onreadystatechange=s}catch{}}}function Bu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Ke(t){return t.g?t.g.readyState:0}k.aa=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),im(e)}};function Zo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uu(t){let e="";return wr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Lr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Uu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $u(t){this.Ca=0,this.i=[],this.j=new Ps,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=nn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=nn("baseRetryDelayMs",5e3,t),this.bb=nn("retryDelaySeedMs",1e4,t),this.$a=nn("forwardChannelMaxRetries",2,t),this.ta=nn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Nu(t&&t.concurrentRequestLimit),this.Fa=new tm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=$u.prototype;k.ma=8;k.G=1;function Mr(t){if(ju(t),t.G==3){var e=t.U++,n=Qe(t.F);ee(n,"SID",t.I),ee(n,"RID",e),ee(n,"TYPE","terminate"),qn(t,n),e=new Mn(t,t.j,e,void 0),e.K=2,e.v=Hs(Qe(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Yu(e.l,null),e.g.da(e.v)),e.F=Date.now(),On(e)}Wu(t)}function Gs(t){t.g&&(Fr(t),t.g.cancel(),t.g=null)}function ju(t){Gs(t),t.u&&(V.clearTimeout(t.u),t.u=null),bs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Qs(t){Ru(t.h)||t.m||(t.m=!0,hu(t.Ja,t),t.C=0)}function um(t,e){return Lu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Rn(Ae(t.Ja,t,e),Qu(t,t.C)),t.C++,!0)}k.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Mn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=su(r),iu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hu(this,i,e),n=Qe(this.F),ee(n,"RID",t),ee(n,"CVER",22),this.D&&ee(n,"X-HTTP-Session-Id",this.D),qn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Uu(r)))+"&"+e:this.o&&Lr(n,this.o,r)),xr(this.h,i),this.Ya&&ee(n,"TYPE","init"),this.O?(ee(n,"$req",e),ee(n,"SID","null"),i.Z=!0,Xi(i,n,null)):Xi(i,n,e),this.G=2}}else this.G==3&&(t?ea(this,t):this.i.length==0||Ru(this.h)||ea(this))};function ea(t,e){var n;e?n=e.m:n=t.U++;const s=Qe(t.F);ee(s,"SID",t.I),ee(s,"RID",n),ee(s,"AID",t.T),qn(t,s),t.o&&t.s&&Lr(s,t.o,t.s),n=new Mn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Hu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xr(t.h,n),Xi(n,s,e)}function qn(t,e){t.ia&&wr(t.ia,function(n,s){ee(e,s,n)}),t.l&&Au({},function(n,s){ee(e,s,n)})}function Hu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ae(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),a=!1;else try{nm(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ku(t){t.g||t.u||(t.Z=1,hu(t.Ia,t),t.A=0)}function Or(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Rn(Ae(t.Ia,t),Qu(t,t.A)),t.A++,!0)}k.Ia=function(){if(this.u=null,zu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Rn(Ae(this.eb,this),t)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,De(10),Gs(this),zu(this))};function Fr(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function zu(t){t.g=new Mn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Qe(t.sa);ee(e,"RID","rpc"),ee(e,"SID",t.I),ee(e,"CI",t.L?"0":"1"),ee(e,"AID",t.T),ee(e,"TYPE","xmlhttp"),qn(t,e),t.o&&t.s&&Lr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Hs(Qe(e)),n.s=null,n.P=!0,Tu(n,t)}k.cb=function(){this.v!=null&&(this.v=null,Gs(this),Or(this),De(19))};function bs(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Gu(t,e){var n=null;if(t.g==e){bs(t),Fr(t),t.g=null;var s=2}else if(Ji(t.h,e))n=e.D,Mu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Bs(),ye(s,new vu(s,n)),Qs(t)}else Ku(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&um(t,e)||s==2&&Or(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:gt(t,5);break;case 4:gt(t,10);break;case 3:gt(t,6);break;default:gt(t,2)}}}function Qu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function gt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ae(t.kb,t);n||(n=new wt("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||ws(n,"https"),Hs(n)),sm(n.toString(),s)}else De(2);t.G=0,t.l&&t.l.va(e),Wu(t),ju(t)}k.kb=function(t){t?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Wu(t){if(t.G=0,t.la=[],t.l){const e=Ou(t.h);(e.length!=0||t.i.length!=0)&&(jo(t.la,e),jo(t.la,t.i),t.h.i.length=0,yr(t.i),t.i.length=0),t.l.ua()}}function Xu(t,e,n){var s=n instanceof wt?Qe(n):new wt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Es(s,s.m);else{var i=V.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new wt(null,void 0);s&&ws(r,s),e&&(r.g=e),i&&Es(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ee(s,n,e),ee(s,"VER",t.ma),qn(t,s),s}function Yu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new te(new Fn({jb:!0})):new te(t.ra),e.Ka(t.H),e}function Ju(){}k=Ju.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function Ts(){if(Ft&&!(10<=Number(If)))throw Error("Environmental error: no available transport.")}Ts.prototype.g=function(t,e){return new Le(t,e)};function Le(t,e){me.call(this),this.g=new $u(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ps(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ps(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qt(this)}ve(Le,me);Le.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;De(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xu(t,null,t.V),Qs(t)};Le.prototype.close=function(){Mr(this.g)};Le.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cr(t),t=n);e.i.push(new Zf(e.ab++,t)),e.G==3&&Qs(e)};Le.prototype.M=function(){this.g.l=null,delete this.j,Mr(this.g),delete this.g,Le.X.M.call(this)};function Zu(t){_r.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ve(Zu,_r);function el(){Dr.call(this),this.status=1}ve(el,Dr);function Qt(t){this.g=t}ve(Qt,Ju);Qt.prototype.xa=function(){ye(this.g,"a")};Qt.prototype.wa=function(t){ye(this.g,new Zu(t))};Qt.prototype.va=function(t){ye(this.g,new el)};Qt.prototype.ua=function(){ye(this.g,"b")};Ts.prototype.createWebChannel=Ts.prototype.g;Le.prototype.send=Le.prototype.u;Le.prototype.open=Le.prototype.m;Le.prototype.close=Le.prototype.close;Us.NO_ERROR=0;Us.TIMEOUT=8;Us.HTTP_ERROR=6;wu.COMPLETE="complete";Eu.EventType=Ln;Ln.OPEN="a";Ln.CLOSE="b";Ln.ERROR="c";Ln.MESSAGE="d";me.prototype.listen=me.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var lm=function(){return new Ts},cm=function(){return Bs()},Di=Us,hm=wu,dm=Ct,ta={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fm=Fn,ns=Eu,mm=te;const na="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Ga("@firebase/firestore");function sa(){return Tt.logLevel}function D(t,...e){if(Tt.logLevel<=Q.DEBUG){const n=e.map(Vr);Tt.debug(`Firestore (${Wt}): ${t}`,...n)}}function We(t,...e){if(Tt.logLevel<=Q.ERROR){const n=e.map(Vr);Tt.error(`Firestore (${Wt}): ${t}`,...n)}}function Zi(t,...e){if(Tt.logLevel<=Q.WARN){const n=e.map(Vr);Tt.warn(`Firestore (${Wt}): ${t}`,...n)}}function Vr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function Y(t,e){t||O()}function P(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Se.UNAUTHENTICATED))}shutdown(){}}class pm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ym{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Y(typeof s.accessToken=="string"),new tl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Se(e)}}class vm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new vm(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Em{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new Em(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Tm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function W(t,e){return t<e?-1:t>e?1:0}function Vt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new ue(0,0))}static max(){return new q(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return In.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof In?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends In{construct(e,n,s){return new Z(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const Sm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends In{construct(e,n,s){return new Ie(e,n,s)}static isValidIdentifier(e){return Sm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(Z.fromString(e))}static fromName(e){return new R(Z.fromString(e).popFirst(5))}static empty(){return new R(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new Z(e.slice()))}}function Cm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new ue(n+1,0):new ue(n,s));return new st(i,R.empty(),e)}function Im(t){return new st(t.readTime,t.key,-1)}class st{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new st(q.min(),R.empty(),-1)}static max(){return new st(q.max(),R.empty(),-1)}}function Am(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _m{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==km)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Bn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}qr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,s,i,r,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class An{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof An&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function It(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){return t==null}function Ss(t){return t===0&&1/t==-1/0}function xm(t){return typeof t=="number"&&Number.isInteger(t)&&!Ss(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _e(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new _e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const Nm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function it(t){if(Y(!!t),typeof t=="string"){let e=0;const n=Nm.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:re(t.seconds),nanos:re(t.nanos)}}function re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qt(t){return typeof t=="string"?_e.fromBase64String(t):_e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rl(t){const e=t.mapValue.fields.__previous_value__;return il(e)?rl(e):e}function kn(t){const e=it(t.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?il(t)?4:Rm(t)?9007199254740991:10:O()}function je(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kn(t).isEqual(kn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=it(s.timestampValue),o=it(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=re(s.doubleValue),o=re(i.doubleValue);return r===o?Ss(r)===Ss(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Vt(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ia(r)!==ia(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!je(r[a],o[a])))return!1;return!0}(t,e);default:return O()}}function _n(t,e){return(t.values||[]).find(n=>je(n,e))!==void 0}function Pt(t,e){if(t===e)return 0;const n=St(t),s=St(e);if(n!==s)return W(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=re(i.integerValue||i.doubleValue),a=re(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ra(t.timestampValue,e.timestampValue);case 4:return ra(kn(t),kn(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,r){const o=qt(i),a=qt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=W(o[u],a[u]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=W(re(i.latitude),re(r.latitude));return o!==0?o:W(re(i.longitude),re(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Pt(o[u],a[u]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ss.mapValue&&r===ss.mapValue)return 0;if(i===ss.mapValue)return 1;if(r===ss.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=W(a[c],l[c]);if(h!==0)return h;const f=Pt(o[a[c]],u[l[c]]);if(f!==0)return f}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function ra(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=it(t),s=it(e),i=W(n.seconds,s.seconds);return i!==0?i:W(n.nanos,s.nanos)}function Bt(t){return er(t)}function er(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=it(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=er(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${er(s.fields[a])}`;return r+"}"}(t.mapValue):O();var e,n}function oa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tr(t){return!!t&&"integerValue"in t}function Pr(t){return!!t&&"arrayValue"in t}function aa(t){return!!t&&"nullValue"in t}function ua(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function as(t){return!!t&&"mapValue"in t}function dn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return It(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=dn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.position=e,this.inclusive=n}}function la(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=R.comparator(R.fromName(o.referenceValue),n.key):s=Pt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ca(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{}class oe extends ol{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Mm(e,n,s):n==="array-contains"?new Vm(e,s):n==="in"?new qm(e,s):n==="not-in"?new Pm(e,s):n==="array-contains-any"?new Bm(e,s):new oe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Om(e,s):new Fm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pt(n,this.value)):n!==null&&St(this.value)===St(n)&&this.matchesComparison(Pt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qe extends ol{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new qe(e,n)}matches(e){return al(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function al(t){return t.op==="and"}function ul(t){return Lm(t)&&al(t)}function Lm(t){for(const e of t.filters)if(e instanceof qe)return!1;return!0}function nr(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+Bt(t.value);if(ul(t))return t.filters.map(e=>nr(e)).join(",");{const e=t.filters.map(n=>nr(n)).join(",");return`${t.op}(${e})`}}function ll(t,e){return t instanceof oe?function(n,s){return s instanceof oe&&n.op===s.op&&n.field.isEqual(s.field)&&je(n.value,s.value)}(t,e):t instanceof qe?function(n,s){return s instanceof qe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ll(r,s.filters[o]),!0):!1}(t,e):void O()}function cl(t){return t instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Bt(e.value)}`}(t):t instanceof qe?function(e){return e.op.toString()+" {"+e.getFilters().map(cl).join(" ,")+"}"}(t):"Filter"}class Mm extends oe{constructor(e,n,s){super(e,n,s),this.key=R.fromName(s.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class Om extends oe{constructor(e,n){super(e,"in",n),this.keys=hl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Fm extends oe{constructor(e,n){super(e,"not-in",n),this.keys=hl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>R.fromName(s.referenceValue))}class Vm extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pr(n)&&_n(n.arrayValue,this.value)}}class qm extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_n(this.value.arrayValue,n)}}class Pm extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_n(this.value.arrayValue,n)}}class Bm extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_n(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Um(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||pe.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:pe.RED,this.left=i!=null?i:pe.EMPTY,this.right=r!=null?r:pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new pe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(e){return new ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Re([])}unionWith(e){let n=new le(Ie.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Re(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!as(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dn(n)}setAll(e){let n=Ie.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=dn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());as(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];as(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){It(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new xe(dn(this.value))}}function dl(t){const e=[];return It(t.fields,(n,s)=>{const i=new Ie([n]);if(as(s)){const r=dl(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Re(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),q.min(),xe.empty(),0)}static newFoundDocument(e,n,s,i){return new Ce(e,1,n,q.min(),s,i,0)}static newNoDocument(e,n){return new Ce(e,2,n,q.min(),q.min(),xe.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,q.min(),q.min(),xe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function da(t,e=null,n=[],s=[],i=null,r=null,o=null){return new $m(t,e,n,s,i,r,o)}function Br(t){const e=P(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>nr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ws(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bt(s)).join(",")),e.ft=n}return e.ft}function Ur(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Um(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ll(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ca(t.startAt,e.startAt)&&ca(t.endAt,e.endAt)}function sr(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function jm(t,e,n,s,i,r,o,a){return new Un(t,e,n,s,i,r,o,a)}function $r(t){return new Un(t)}function fa(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ml(t){return t.collectionGroup!==null}function Lt(t){const e=P(t);if(e.dt===null){e.dt=[];const n=jr(e),s=fl(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new fn(n)),e.dt.push(new fn(Ie.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new fn(Ie.keyField(),r))}}}return e.dt}function Xe(t){const e=P(t);if(!e._t)if(e.limitType==="F")e._t=da(e.path,e.collectionGroup,Lt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Lt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new fn(r.field,o))}const s=e.endAt?new Cs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Cs(e.startAt.position,e.startAt.inclusive):null;e._t=da(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function ir(t,e){e.getFirstInequalityField(),jr(t);const n=t.filters.concat([e]);return new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rr(t,e,n){return new Un(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xs(t,e){return Ur(Xe(t),Xe(e))&&t.limitType===e.limitType}function gl(t){return`${Br(Xe(t))}|lt:${t.limitType}`}function or(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>cl(s)).join(", ")}]`),Ws(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bt(s)).join(",")),`Target(${n})`}(Xe(t))}; limitType=${t.limitType})`}function Ys(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):R.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Lt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=la(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Lt(n),s)||n.endAt&&!function(i,r,o){const a=la(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Lt(n),s))}(t,e)}function Hm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pl(t){return(e,n)=>{let s=!1;for(const i of Lt(t)){const r=Km(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Km(t,e,n){const s=t.field.isKeyField()?R.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Pt(a,u):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ss(e)?"-0":e}}function vl(t){return{integerValue:""+t}}function zm(t,e){return xm(e)?vl(e):yl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this._=void 0}}function Gm(t,e,n){return t instanceof Is?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ut?El(t,e):t instanceof $t?bl(t,e):function(s,i){const r=wl(s,i),o=ma(r)+ma(s.gt);return tr(r)&&tr(s.gt)?vl(o):yl(s.yt,o)}(t,e)}function Qm(t,e,n){return t instanceof Ut?El(t,e):t instanceof $t?bl(t,e):n}function wl(t,e){return t instanceof As?tr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Is extends Js{}class Ut extends Js{constructor(e){super(),this.elements=e}}function El(t,e){const n=Tl(e);for(const s of t.elements)n.some(i=>je(i,s))||n.push(s);return{arrayValue:{values:n}}}class $t extends Js{constructor(e){super(),this.elements=e}}function bl(t,e){let n=Tl(e);for(const s of t.elements)n=n.filter(i=>!je(i,s));return{arrayValue:{values:n}}}class As extends Js{constructor(e,n){super(),this.yt=e,this.gt=n}}function ma(t){return re(t.integerValue||t.doubleValue)}function Tl(t){return Pr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.field=e,this.transform=n}}function Wm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ut&&s instanceof Ut||n instanceof $t&&s instanceof $t?Vt(n.elements,s.elements,je):n instanceof As&&s instanceof As?je(n.gt,s.gt):n instanceof Is&&s instanceof Is}(t.transform,e.transform)}class Xm{constructor(e,n){this.version=e,this.transformResults=n}}class Ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zs{}function Cl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hr(t.key,Ve.none()):new $n(t.key,t.data,Ve.none());{const n=t.data,s=xe.empty();let i=new le(Ie.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new lt(t.key,s,new Re(i.toArray()),Ve.none())}}function Ym(t,e,n){t instanceof $n?function(s,i,r){const o=s.value.clone(),a=pa(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof lt?function(s,i,r){if(!us(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=pa(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Il(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function mn(t,e,n,s){return t instanceof $n?function(i,r,o,a){if(!us(i.precondition,r))return o;const u=i.value.clone(),l=ya(i.fieldTransforms,a,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof lt?function(i,r,o,a){if(!us(i.precondition,r))return o;const u=ya(i.fieldTransforms,a,r),l=r.data;return l.setAll(Il(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(i,r,o){return us(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Jm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=wl(s.transform,i||null);r!=null&&(n===null&&(n=xe.empty()),n.set(s.field,r))}return n||null}function ga(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vt(n,s,(i,r)=>Wm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $n extends Zs{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lt extends Zs{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Il(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pa(t,e,n){const s=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Qm(o,a,n[i]))}return s}function ya(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Gm(r,o,e))}return s}class Hr extends Zs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zm extends Zs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,K;function tg(t){switch(t){default:return O();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Al(t){if(t===void 0)return We("GRPC error has no .code"),m.UNKNOWN;switch(t){case ie.OK:return m.OK;case ie.CANCELLED:return m.CANCELLED;case ie.UNKNOWN:return m.UNKNOWN;case ie.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ie.INTERNAL:return m.INTERNAL;case ie.UNAVAILABLE:return m.UNAVAILABLE;case ie.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ie.NOT_FOUND:return m.NOT_FOUND;case ie.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ie.ABORTED:return m.ABORTED;case ie.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ie.DATA_LOSS:return m.DATA_LOSS;default:return O()}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){It(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return sl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new ce(R.comparator);function Ye(){return ng}const kl=new ce(R.comparator);function un(...t){let e=kl;for(const n of t)e=e.insert(n.key,n);return e}function _l(t){let e=kl;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function pt(){return gn()}function Dl(){return gn()}function gn(){return new Xt(t=>t.toString(),(t,e)=>t.isEqual(e))}const sg=new ce(R.comparator),ig=new le(R.comparator);function j(...t){let e=ig;for(const n of t)e=e.add(n);return e}const rg=new le(W);function xl(){return rg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,jn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ei(q.min(),i,xl(),Ye(),j())}}class jn{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new jn(s,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Nl{constructor(e,n){this.targetId=e,this.Et=n}}class Rl{constructor(e,n,s=_e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class va{constructor(){this.At=0,this.Rt=Ea(),this.bt=_e.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=j(),n=j(),s=j();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:O()}}),new jn(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Ea()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class og{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ye(),this.qt=wa(),this.Ut=new le(W)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(sr(r))if(s===0){const o=new R(r.path);this.Qt(n,o,Ce.newNoDocument(o,q.min()))}else Y(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&sr(a.target)){const u=new R(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Ce.newNoDocument(u,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=j();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new ei(e,n,this.Ut,this.Lt,s);return this.Lt=Ye(),this.qt=wa(),this.Ut=new le(W),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new va,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new le(W),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new va),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function wa(){return new ce(R.comparator)}function Ea(){return new ce(R.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ug=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lg=(()=>({and:"AND",or:"OR"}))();class cg{constructor(e,n){this.databaseId=e,this.wt=n}}function ks(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ll(t,e){return t.wt?e.toBase64():e.toUint8Array()}function hg(t,e){return ks(t,e.toTimestamp())}function $e(t){return Y(!!t),q.fromTimestamp(function(e){const n=it(e);return new ue(n.seconds,n.nanos)}(t))}function Kr(t,e){return function(n){return new Z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ml(t){const e=Z.fromString(t);return Y(ql(e)),e}function ar(t,e){return Kr(t.databaseId,e.path)}function xi(t,e){const n=Ml(e);if(n.get(1)!==t.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(Ol(n))}function ur(t,e){return Kr(t.databaseId,e)}function dg(t){const e=Ml(t);return e.length===4?Z.emptyPath():Ol(e)}function lr(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ol(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ba(t,e,n){return{name:ar(t,e),fields:n.value.mapValue.fields}}function fg(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,l){return u.wt?(Y(l===void 0||typeof l=="string"),_e.fromBase64String(l||"")):(Y(l===void 0||l instanceof Uint8Array),_e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:Al(u.code);return new I(l,u.message||"")}(o);n=new Rl(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=xi(t,s.document.name),r=$e(s.document.updateTime),o=s.document.createTime?$e(s.document.createTime):q.min(),a=new xe({mapValue:{fields:s.document.fields}}),u=Ce.newFoundDocument(i,r,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new ls(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=xi(t,s.document),r=s.readTime?$e(s.readTime):q.min(),o=Ce.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ls([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=xi(t,s.document),r=s.removedTargetIds||[];n=new ls([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new eg(i),o=s.targetId;n=new Nl(o,r)}}return n}function mg(t,e){let n;if(e instanceof $n)n={update:ba(t,e.key,e.value)};else if(e instanceof Hr)n={delete:ar(t,e.key)};else if(e instanceof lt)n={update:ba(t,e.key,e.data),updateMask:Sg(e.fieldMask)};else{if(!(e instanceof Zm))return O();n={verify:ar(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Is)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ut)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $t)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof As)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function gg(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?$e(s.updateTime):$e(i);return r.isEqual(q.min())&&(r=$e(i)),new Xm(r,s.transformResults||[])}(n,e))):[]}function pg(t,e){return{documents:[ur(t,e.path)]}}function yg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ur(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ur(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return Vl(qe.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Dt(c.field),direction:Eg(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,l){return u.wt||Ws(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function vg(t){let e=dg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Y(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=function(c){const h=Fl(c);return h instanceof qe&&ul(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new fn(xt(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ws(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,f=c.values||[];return new Cs(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,f=c.values||[];return new Cs(f,h)}(n.endAt)),jm(e,i,o,r,a,"F",u,l)}function wg(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xt(e.unaryFilter.field);return oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=xt(e.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xt(e.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=xt(e.unaryFilter.field);return oe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return oe.create(xt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return qe.create(e.compositeFilter.filters.map(n=>Fl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function Eg(t){return ag[t]}function bg(t){return ug[t]}function Tg(t){return lg[t]}function Dt(t){return{fieldPath:t.canonicalString()}}function xt(t){return Ie.fromServerFormat(t.fieldPath)}function Vl(t){return t instanceof oe?function(e){if(e.op==="=="){if(ua(e.value))return{unaryFilter:{field:Dt(e.field),op:"IS_NAN"}};if(aa(e.value))return{unaryFilter:{field:Dt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ua(e.value))return{unaryFilter:{field:Dt(e.field),op:"IS_NOT_NAN"}};if(aa(e.value))return{unaryFilter:{field:Dt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dt(e.field),op:bg(e.op),value:e.value}}}(t):t instanceof qe?function(e){const n=e.getFilters().map(s=>Vl(s));return n.length===1?n[0]:{compositeFilter:{op:Tg(e.op),filters:n}}}(t):O()}function Sg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ql(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Ym(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=mn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=mn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Dl();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Cl(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Vt(this.mutations,e.mutations,(n,s)=>ga(n,s))&&Vt(this.baseMutations,e.baseMutations,(n,s)=>ga(n,s))}}class zr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Y(e.mutations.length===s.length);let i=sg;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new zr(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,s,i,r=q.min(),o=q.min(),a=_e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.ie=e}}function kg(t){const e=vg({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.Je=new Dg}addToCollectionParentIndex(e,n){return this.Je.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(st.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(st.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Dg{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new le(Z.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new le(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new jt(0)}static vn(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.changes=new Xt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&mn(s.mutation,i,Re.empty(),ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const i=pt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=un();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=pt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ye();const o=gn(),a=gn();return n.forEach((u,l)=>{const c=s.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof lt)?r=r.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),mn(c.mutation,l,c.mutation.getFieldMask(),ue.now())):o.set(l.key,Re.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Ng(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=gn();let i=new ce((o,a)=>o-a),r=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||Re.empty();c=a.applyToLocalView(l,c),s.set(u,c);const h=(i.get(a.batchId)||j()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Dl();c.forEach(f=>{if(!r.has(f)){const d=Cl(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return R.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ml(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(pt());let a=-1,u=r;return o.next(l=>y.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(c)?y.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,u,l,j())).next(c=>({batchId:a,changes:_l(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(s=>{let i=un();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=un();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const u=function(l,c){return new Un(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(l=>{l.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,u)=>{const l=u.getKey();r.get(l)===null&&(r=r.insert(l,Ce.newInvalidDocument(l)))});let o=un();return r.forEach((a,u)=>{const l=i.get(a);l!==void 0&&mn(l.mutation,u,Re.empty(),ue.now()),Ys(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:$e(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:kg(s.bundledQuery),readTime:$e(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.overlays=new ce(R.comparator),this.es=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=pt();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=pt(),r=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ce((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=r.get(l.largestBatchId);c===null&&(c=pt(),r=r.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=pt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return y.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ig(n,s));let r=this.es.get(n);r===void 0&&(r=j(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.ns=new le(de.ss),this.rs=new le(de.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new de(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new de(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new R(new Z([])),s=new de(n,e),i=new de(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new R(new Z([])),s=new de(n,e),i=new de(n,e+1);let r=j();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new de(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class de{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return R.comparator(e.key,n.key)||W(e._s,n._s)}static os(e,n){return W(e._s,n._s)||R.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new le(de.ss)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cg(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new de(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new de(n,0),i=new de(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new le(W);return n.forEach(i=>{const r=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),y.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;R.isDocumentKey(r)||(r=r.child(""));const o=new de(new R(r),0);let a=new le(W);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),y.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return y.forEach(n.mutations,i=>{const r=new de(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new de(n,0),i=this.gs.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.Es=e,this.docs=new ce(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let s=Ye();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ce.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ye();const o=n.path,a=new R(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Am(Im(c),s)<=0||(i.has(c.key)||Ys(n,c))&&(r=r.insert(c.key,c.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){O()}As(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Vg(this)}getSize(e){return y.resolve(this.size)}}class Vg extends xg{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.persistence=e,this.Rs=new Xt(n=>Br(n),Ur),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Gr,this.targetCount=0,this.vs=jt.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),y.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new jt(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Dn(n),y.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new qr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new qg(this),this.indexManager=new _g,this.remoteDocumentCache=function(s){return new Fg(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Ag(n),this.Ns=new Lg(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Mg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Og(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const i=new Bg(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return y.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Bg extends _m{constructor(e){super(),this.currentSequenceNumber=e}}class Qr{constructor(e){this.persistence=e,this.Fs=new Gr,this.$s=null}static Bs(e){return new Qr(e)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),y.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ls,s=>{const i=R.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return y.or([()=>y.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=j(),i=j();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Wr(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(fa(n))return y.resolve(null);let s=Xe(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rr(n,null,"F"),s=Xe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=j(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,rr(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,s,i){return fa(n)||i.isEqual(q.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(sa()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),or(n)),this.Bi(e,o,n,Cm(i,-1)))})}Fi(e,n){let s=new le(pl(e));return n.forEach((i,r)=>{Ys(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return sa()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",or(n)),this.Ni.getDocumentsMatchingQuery(e,n,st.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new ce(W),this.Ui=new Xt(r=>Br(r),Ur),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rg(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function jg(t,e,n,s){return new $g(t,e,n,s)}async function Pl(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=j();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of r){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Hg(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(g=>{const w=u.docVersions.get(d);Y(w!==null),g.version.compareTo(w)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Bl(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Kg(t,e){const n=P(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,c.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(_e.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,s)),i=i.insert(h,d),function(g,w,E){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,d,c)&&a.push(n.Cs.updateTargetData(r,d))});let u=Ye(),l=j();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(zg(r,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!s.isEqual(q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.qi=i,r))}function zg(t,e,n){let s=j(),i=j();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ye();return n.forEach((a,u)=>{const l=r.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function Gg(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Qg(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Et(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function cr(t,e,n){const s=P(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bn(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Ta(t,e,n){const s=P(t);let i=q.min(),r=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=P(a),h=c.Ui.get(l);return h!==void 0?y.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(s,o,Xe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?r:j())).next(a=>(Wg(s,Hm(e),a),{documents:a,Hi:r})))}function Wg(t,e,n){let s=t.Ki.get(e)||q.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Sa{constructor(){this.activeTargetIds=xl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xg{constructor(){this.Lr=new Sa,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Sa,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);D("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(u=>(D("RestConnection","Received: ",u),u),u=>{throw Zi("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Jg[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new mm;a.setWithCredentials(!0),a.listenOnce(hm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Di.NO_ERROR:const l=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Di.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(w)>=0?w:m.UNKNOWN}(f.status);o(new I(d,f.message))}else o(new I(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(m.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=lm(),o=cm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fm({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");D("Connection","Creating WebChannel: "+u,a);const l=r.createWebChannel(u,a);let c=!1,h=!1;const f=new Zg({Hr:g=>{h?D("Connection","Not sending because WebChannel is closed:",g):(c||(D("Connection","Opening WebChannel transport."),l.open(),c=!0),D("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),d=(g,w,E)=>{g.listen(w,F=>{try{E(F)}catch(C){setTimeout(()=>{throw C},0)}})};return d(l,ns.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),d(l,ns.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),f.io())}),d(l,ns.EventType.ERROR,g=>{h||(h=!0,Zi("Connection","WebChannel transport errored:",g),f.io(new I(m.UNAVAILABLE,"The operation could not be completed")))}),d(l,ns.EventType.MESSAGE,g=>{var w;if(!h){const E=g.data[0];Y(!!E);const F=E,C=F.error||((w=F[0])===null||w===void 0?void 0:w.error);if(C){D("Connection","WebChannel received error:",C);const A=C.status;let B=function(p){const b=ie[p];if(b!==void 0)return Al(b)}(A),H=C.message;B===void 0&&(B=m.INTERNAL,H="Unknown error status: "+A+" with message "+C.message),h=!0,f.io(new I(B,H)),l.close()}else D("Connection","WebChannel received:",E),f.ro(E)}}),d(o,dm.STAT_EVENT,g=>{g.stat===ta.PROXY?D("Connection","Detected buffering proxy"):g.stat===ta.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Ni(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return new cg(t,!0)}class Ul{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,s,i,r,o,a,u){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ul(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new I(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tp extends $l{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=fg(this.yt,e),s=function(i){if(!("targetChange"in i))return q.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?q.min():r.readTime?$e(r.readTime):q.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=lr(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=sr(a)?{documents:pg(i,a)}:{query:yg(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ll(i,r.resumeToken):r.snapshotVersion.compareTo(q.min())>0&&(o.readTime=ks(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=wg(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=lr(this.yt),n.removeTarget=e,this.Bo(n)}}class np extends $l{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=gg(e.writeResults,e.commitTime),s=$e(e.commitTime);return this.listener.Zo(s,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=lr(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>mg(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(m.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class ip{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(We(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{At(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=P(a);u._u.add(4),await Hn(u),u.gu.set("Unknown"),u._u.delete(4),await ni(u)}(this))})}),this.gu=new ip(s,i)}}async function ni(t){if(At(t))for(const e of t.wu)await e(!0)}async function Hn(t){for(const e of t.wu)await e(!1)}function jl(t,e){const n=P(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jr(n)?Yr(n):Yt(n).ko()&&Xr(n,e))}function Hl(t,e){const n=P(t),s=Yt(n);n.du.delete(e),s.ko()&&Kl(n,e),n.du.size===0&&(s.ko()?s.Fo():At(n)&&n.gu.set("Unknown"))}function Xr(t,e){t.yu.Ot(e.targetId),Yt(t).zo(e)}function Kl(t,e){t.yu.Ot(e),Yt(t).Ho(e)}function Yr(t){t.yu=new og({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Yt(t).start(),t.gu.uu()}function Jr(t){return At(t)&&!Yt(t).No()&&t.du.size>0}function At(t){return P(t)._u.size===0}function zl(t){t.yu=void 0}async function op(t){t.du.forEach((e,n)=>{Xr(t,e)})}async function ap(t,e){zl(t),Jr(t)?(t.gu.hu(e),Yr(t)):t.gu.set("Unknown")}async function up(t,e,n){if(t.gu.set("Online"),e instanceof Rl&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _s(t,s)}else if(e instanceof ls?t.yu.Kt(e):e instanceof Nl?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(q.min()))try{const s=await Bl(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(_e.EMPTY_BYTE_STRING,u.snapshotVersion)),Kl(i,a);const l=new Et(u.target,a,1,u.sequenceNumber);Xr(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){D("RemoteStore","Failed to raise snapshot:",s),await _s(t,s)}}async function _s(t,e,n){if(!Bn(e))throw e;t._u.add(1),await Hn(t),t.gu.set("Offline"),n||(n=()=>Bl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ni(t)})}function Gl(t,e){return e().catch(n=>_s(t,n,e))}async function si(t){const e=P(t),n=rt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;lp(e);)try{const i=await Gg(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,cp(e,i)}catch(i){await _s(e,i)}Ql(e)&&Wl(e)}function lp(t){return At(t)&&t.fu.length<10}function cp(t,e){t.fu.push(e);const n=rt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ql(t){return At(t)&&!rt(t).No()&&t.fu.length>0}function Wl(t){rt(t).start()}async function hp(t){rt(t).eu()}async function dp(t){const e=rt(t);for(const n of t.fu)e.Xo(n.mutations)}async function fp(t,e,n){const s=t.fu.shift(),i=zr.from(s,e,n);await Gl(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await si(t)}async function mp(t,e){e&&rt(t).Yo&&await async function(n,s){if(i=s.code,tg(i)&&i!==m.ABORTED){const r=n.fu.shift();rt(n).Mo(),await Gl(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await si(n)}var i}(t,e),Ql(t)&&Wl(t)}async function Ia(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=At(n);n._u.add(3),await Hn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ni(n)}async function gp(t,e){const n=P(t);e?(n._u.delete(2),await ni(n)):e||(n._u.add(2),await Hn(n),n.gu.set("Unknown"))}function Yt(t){return t.pu||(t.pu=function(e,n,s){const i=P(e);return i.su(),new tp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:op.bind(null,t),Zr:ap.bind(null,t),Wo:up.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Jr(t)?Yr(t):t.gu.set("Unknown")):(await t.pu.stop(),zl(t))})),t.pu}function rt(t){return t.Iu||(t.Iu=function(e,n,s){const i=P(e);return i.su(),new np(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:hp.bind(null,t),Zr:mp.bind(null,t),tu:dp.bind(null,t),Zo:fp.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await si(t)):(await t.Iu.stop(),t.fu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Zr(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eo(t,e){if(We("AsyncQueue",`${e}: ${t}`),Bn(t))return new I(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||R.comparator(n.key,s.key):(n,s)=>R.comparator(n.key,s.key),this.keyedMap=un(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Mt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.Tu=new ce(R.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):O():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ht{constructor(e,n,s,i,r,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ht(e,n,Mt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.Au=void 0,this.listeners=[]}}class yp{constructor(){this.queries=new Xt(e=>gl(e),Xs),this.onlineState="Unknown",this.Ru=new Set}}async function Xl(t,e){const n=P(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new pp),i)try{r.Au=await n.onListen(s)}catch(o){const a=eo(o,`Initialization of query '${or(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&to(n)}async function Yl(t,e){const n=P(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function vp(t,e){const n=P(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&to(n)}function wp(t,e,n){const s=P(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function to(t){t.Ru.forEach(e=>{e.next()})}class Jl{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ht(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ht.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.key=e}}class ec{constructor(e){this.key=e}}class Ep{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=j(),this.mutatedKeys=j(),this.Gu=pl(e),this.Qu=new Mt(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Aa,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),d=Ys(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),w=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let E=!1;f&&d?f.data.isEqual(d.data)?g!==w&&(s.track({type:3,doc:d}),E=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),E=!0,(u&&this.Gu(d,u)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),E=!0):f&&!d&&(s.track({type:1,doc:f}),E=!0,(u||l)&&(a=!0)),E&&(d?(o=o.add(d),r=w?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,c)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return d(h)-d(f)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new Ht(this.query,e.Qu,i,r,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Aa,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=j(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ec(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Zl(s))}),n}tc(e){this.qu=e.Hi,this.Ku=j();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ht.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class bp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Tp{constructor(e){this.key=e,this.nc=!1}}class Sp{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Xt(a=>gl(a),Xs),this.rc=new Map,this.oc=new Set,this.uc=new ce(R.comparator),this.cc=new Map,this.ac=new Gr,this.hc={},this.lc=new Map,this.fc=jt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Cp(t,e){const n=Mp(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Qg(n.localStore,Xe(e));n.isPrimaryClient&&jl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ip(n,e,s,a==="current",o.resumeToken)}return i}async function Ip(t,e,n,s,i){t._c=(h,f,d)=>async function(g,w,E,F){let C=w.view.Wu(E);C.$i&&(C=await Ta(g.localStore,w.query,!1).then(({documents:H})=>w.view.Wu(H,C)));const A=F&&F.targetChanges.get(w.targetId),B=w.view.applyChanges(C,g.isPrimaryClient,A);return _a(g,w.targetId,B.Xu),B.snapshot}(t,h,f,d);const r=await Ta(t.localStore,e,!0),o=new Ep(e,r.Hi),a=o.Wu(r.documents),u=jn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);_a(t,n,l.Xu);const c=new bp(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Ap(t,e){const n=P(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Xs(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await cr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Hl(n.remoteStore,s.targetId),hr(n,s.targetId)}).catch(Pn)):(hr(n,s.targetId),await cr(n.localStore,s.targetId,!0))}async function kp(t,e,n){const s=Op(t);try{const i=await function(r,o){const a=P(r),u=ue.now(),l=o.reduce((f,d)=>f.add(d.key),j());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Ye(),g=j();return a.Gi.getEntries(f,l).next(w=>{d=w,d.forEach((E,F)=>{F.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(w=>{c=w;const E=[];for(const F of o){const C=Jm(F,c.get(F.key).overlayedDocument);C!=null&&E.push(new lt(F.key,C,dl(C.value.mapValue),Ve.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(f,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:_l(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new ce(W)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Kn(s,i.changes),await si(s.remoteStore)}catch(i){const r=eo(i,"Failed to persist write");n.reject(r)}}async function tc(t,e){const n=P(t);try{const s=await Kg(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Y(o.nc):i.removedDocuments.size>0&&(Y(o.nc),o.nc=!1))}),await Kn(n,s,e)}catch(s){await Pn(s)}}function ka(t,e,n){const s=P(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=P(r);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&to(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _p(t,e,n){const s=P(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ce(R.comparator);o=o.insert(r,Ce.newNoDocument(r,q.min()));const a=j().add(r),u=new ei(q.min(),new Map,new le(W),o,a);await tc(s,u),s.uc=s.uc.remove(r),s.cc.delete(e),no(s)}else await cr(s.localStore,e,!1).then(()=>hr(s,e,n)).catch(Pn)}async function Dp(t,e){const n=P(t),s=e.batch.batchId;try{const i=await Hg(n.localStore,e);sc(n,s,null),nc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Kn(n,i)}catch(i){await Pn(i)}}async function xp(t,e,n){const s=P(t);try{const i=await function(r,o){const a=P(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(Y(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,e);sc(s,e,n),nc(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Kn(s,i)}catch(i){await Pn(i)}}function nc(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function sc(t,e,n){const s=P(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function hr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||ic(t,s)})}function ic(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Hl(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),no(t))}function _a(t,e,n){for(const s of n)s instanceof Zl?(t.ac.addReference(s.key,e),Np(t,s)):s instanceof ec?(D("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||ic(t,s.key)):O()}function Np(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(D("SyncEngine","New document in limbo: "+n),t.oc.add(s),no(t))}function no(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new R(Z.fromString(e)),s=t.fc.next();t.cc.set(s,new Tp(n)),t.uc=t.uc.insert(n,s),jl(t.remoteStore,new Et(Xe($r(n.path)),s,2,qr.at))}}async function Kn(t,e,n){const s=P(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Wr.Ci(u.targetId,l);r.push(c)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const l=P(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>y.forEach(u,h=>y.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>y.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Bn(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const f=l.qi.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);l.qi=l.qi.insert(h,g)}}}(s.localStore,r))}async function Rp(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await Pl(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new I(m.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Kn(n,s.ji)}}function Lp(t,e){const n=P(t),s=n.cc.get(e);if(s&&s.nc)return j().add(s.key);{let i=j();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Mp(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_p.bind(null,e),e.sc.Wo=vp.bind(null,e.eventManager),e.sc.wc=wp.bind(null,e.eventManager),e}function Op(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xp.bind(null,e),e}class Fp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ti(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return jg(this.persistence,new Ug,e.initialUser,this.yt)}yc(e){return new Pg(Qr.Bs,this.yt)}gc(e){return new Xg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ka(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rp.bind(null,this.syncEngine),await gp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yp}createDatastore(e){const n=ti(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ep(i));var i;return function(r,o,a,u){return new sp(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ka(this.syncEngine,a,0),o=Ca.C()?new Ca:new Yg,new rp(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,u,l){const c=new Sp(s,i,r,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Hn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qp(t,e,n,s){if(e===!0&&s===!0)throw new I(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Da(t){if(!R.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xa(t){if(R.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ii(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function Je(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ii(t);throw new I(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;class Ra{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,qp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gm;switch(n.type){case"gapi":const s=n.client;return new wm(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Na.get(e);n&&(D("ComponentProvider","Removing Datastore"),Na.delete(e),n.terminate())}(this),Promise.resolve()}}function Pp(t,e,n,s={}){var i;const r=(t=Je(t,ri))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Zi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Se.MOCK_USER;else{o=Xh(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Se(u)}t._authCredentials=new pm(new tl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class Jt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class nt extends Jt{constructor(e,n,s){super(e,n,$r(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new R(e))}withConverter(e){return new nt(this.firestore,e,this._path)}}function _t(t,e,...n){if(t=Ge(t),rc("collection","path",e),t instanceof ri){const s=Z.fromString(e,...n);return xa(s),new nt(t,null,s)}{if(!(t instanceof Ne||t instanceof nt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Z.fromString(e,...n));return xa(s),new nt(t.firestore,null,s)}}function ln(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=nl.R()),rc("doc","path",e),t instanceof ri){const s=Z.fromString(e,...n);return Da(s),new Ne(t,null,new R(s))}{if(!(t instanceof Ne||t instanceof nt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Z.fromString(e,...n));return Da(s),new Ne(t.firestore,t instanceof nt?t.converter:null,new R(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=nl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{D("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(D("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=eo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Up(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Pl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jp(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Ia(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ia(e.remoteStore,r)),t.onlineComponents=e}async function jp(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await Up(t,new Fp)),t.offlineComponents}async function ac(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await $p(t,new Vp)),t.onlineComponents}function Hp(t){return ac(t).then(e=>e.syncEngine)}async function uc(t){const e=await ac(t),n=e.eventManager;return n.onListen=Cp.bind(null,e.syncEngine),n.onUnlisten=Ap.bind(null,e.syncEngine),n}function Kp(t,e,n={}){const s=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new oc({next:h=>{r.enqueueAndForget(()=>Yl(i,c));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new I(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Jl($r(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Xl(i,c)}(await uc(t),t.asyncQueue,e,n,s)),s.promise}function zp(t,e,n={}){const s=new ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new oc({next:h=>{r.enqueueAndForget(()=>Yl(i,c)),h.fromCache&&a.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Jl(o,l,{includeMetadataChanges:!0,Nu:!0});return Xl(i,c)}(await uc(t),t.asyncQueue,e,n,s)),s.promise}class Gp{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ul(this,"async_queue_retry"),this.Wc=()=>{const n=Ni();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ni();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ni();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ze;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Bn(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw We("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Zr.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Zt extends ri{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Gp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lc(this),this._firestoreClient.terminate()}}function Qp(t,e){const n=typeof t=="object"?t:ef(),s=typeof t=="string"?t:e||"(default)",i=Xd(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Gh("firestore");r&&Pp(i,...r)}return i}function so(t){return t._firestoreClient||lc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lc(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Dm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Bp(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(_e.fromBase64String(e))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^__.*__$/;class Xp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new lt(e,this.data,this.fieldMask,n,this.fieldTransforms):new $n(e,this.data,n,this.fieldTransforms)}}class cc{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new lt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ai{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ai(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ds(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(hc(this.sa)&&Wp.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Yp{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ti(e)}da(e,n,s,i=!1){return new ai({sa:e,methodName:n,fa:s,path:Ie.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ro(t){const e=t._freezeSettings(),n=ti(t._databaseId);return new Yp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jp(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);oo("Data must be an object, but it was:",o,s);const a=fc(s,o);let u,l;if(r.merge)u=new Re(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const f=dr(e,h,n);if(!o.contains(f))throw new I(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gc(c,f)||c.push(f)}u=new Re(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Xp(new xe(a),u,l)}class ui extends zn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ui}}function dc(t,e,n){return new ai({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Zp extends zn{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=dc(this,e,!0),s=this._a.map(r=>kt(r,n)),i=new Ut(s);return new Sl(e.path,i)}isEqual(e){return this===e}}class ey extends zn{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=dc(this,e,!0),s=this._a.map(r=>kt(r,n)),i=new $t(s);return new Sl(e.path,i)}isEqual(e){return this===e}}function ty(t,e,n,s){const i=t.da(1,e,n);oo("Data must be an object, but it was:",i,s);const r=[],o=xe.empty();It(s,(u,l)=>{const c=ao(e,u,n);l=Ge(l);const h=i.ca(c);if(l instanceof ui)r.push(c);else{const f=kt(l,h);f!=null&&(r.push(c),o.set(c,f))}});const a=new Re(r);return new cc(o,a,i.fieldTransforms)}function ny(t,e,n,s,i,r){const o=t.da(1,e,n),a=[dr(e,s,n)],u=[i];if(r.length%2!=0)throw new I(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(dr(e,r[f])),u.push(r[f+1]);const l=[],c=xe.empty();for(let f=a.length-1;f>=0;--f)if(!gc(l,a[f])){const d=a[f];let g=u[f];g=Ge(g);const w=o.ca(d);if(g instanceof ui)l.push(d);else{const E=kt(g,w);E!=null&&(l.push(d),c.set(d,E))}}const h=new Re(l);return new cc(c,h,o.fieldTransforms)}function sy(t,e,n,s=!1){return kt(n,t.da(s?4:3,e))}function kt(t,e){if(mc(t=Ge(t)))return oo("Unsupported field value:",e,t),fc(t,e);if(t instanceof zn)return function(n,s){if(!hc(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=kt(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zm(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ue.fromDate(n);return{timestampValue:ks(s.yt,i)}}if(n instanceof ue){const i=new ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ks(s.yt,i)}}if(n instanceof io)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kt)return{bytesValue:Ll(s.yt,n._byteString)};if(n instanceof Ne){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ii(n)}`)}(t,e)}function fc(t,e){const n={};return sl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):It(t,(s,i)=>{const r=kt(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function mc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof io||t instanceof Kt||t instanceof Ne||t instanceof zn)}function oo(t,e,n){if(!mc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ii(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function dr(t,e,n){if((e=Ge(e))instanceof oi)return e._internalPath;if(typeof e=="string")return ao(t,e);throw Ds("Field path arguments must be of type string or ",t,!1,void 0,n)}const iy=new RegExp("[~\\*/\\[\\]]");function ao(t,e,n){if(e.search(iy)>=0)throw Ds(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oi(...e.split("."))._internalPath}catch{throw Ds(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ds(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new I(m.INVALID_ARGUMENT,a+t+u)}function gc(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ry(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ry extends pc{data(){return super.data()}}function uo(t,e){return typeof e=="string"?ao(t,e):e instanceof oi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lo{}class ay extends lo{}function rs(t,e,...n){let s=[];e instanceof lo&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof co).length,o=i.filter(a=>a instanceof li).length;if(r>1||r>0&&o>0)throw new I(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class li extends ay{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new li(e,n,s)}_apply(e){const n=this._parse(e);return yc(e._query,n),new Jt(e.firestore,e.converter,ir(e._query,n))}_parse(e){const n=ro(e.firestore);return function(i,r,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ma(c,l);const f=[];for(const d of c)f.push(La(a,i,d));h={arrayValue:{values:f}}}else h=La(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ma(c,l),h=sy(o,r,c,l==="in"||l==="not-in");return oe.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function os(t,e,n){const s=e,i=uo("where",t);return li._create(i,s,n)}class co extends lo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new co(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:qe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)yc(r,a),r=ir(r,a)}(e._query,n),new Jt(e.firestore,e.converter,ir(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function La(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new I(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ml(e)&&n.indexOf("/")!==-1)throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Z.fromString(n));if(!R.isDocumentKey(s))throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return oa(t,new R(s))}if(n instanceof Ne)return oa(t,n._key);throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ii(n)}.`)}function Ma(t,e){if(!Array.isArray(t)||t.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function yc(t,e){if(e.isInequality()){const s=jr(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new I(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=fl(t);r!==null&&uy(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function uy(t,e,n){if(!n.isEqual(e))throw new I(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ly{convertValue(e,n="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return It(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new io(re(e.latitude),re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kn(e));default:return null}}convertTimestamp(e){const n=it(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Z.fromString(e);Y(ql(s));const i=new An(s.get(1),s.get(3)),r=new R(s.popFirst(5));return i.isEqual(n)||We(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vc extends pc{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(uo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class cs extends vc{data(e={}){return super.data(e)}}class hy{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new cs(this._firestore,this._userDataWriter,s.key,s,new cn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:dy(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){t=Je(t,Ne);const e=Je(t.firestore,Zt);return Kp(so(e),t._key).then(n=>gy(e,t,n))}class wc extends ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function sn(t){t=Je(t,Jt);const e=Je(t.firestore,Zt),n=so(e),s=new wc(e);return oy(t._query),zp(n,t._query).then(i=>new hy(e,s,t,i))}function Ri(t,e,n,...s){t=Je(t,Ne);const i=Je(t.firestore,Zt),r=ro(i);let o;return o=typeof(e=Ge(e))=="string"||e instanceof oi?ny(r,"updateDoc",t._key,e,n,s):ty(r,"updateDoc",t._key,e),ho(i,[o.toMutation(t._key,Ve.exists(!0))])}function fy(t){return ho(Je(t.firestore,Zt),[new Hr(t._key,Ve.none())])}function my(t,e){const n=Je(t.firestore,Zt),s=ln(t),i=cy(t.converter,e);return ho(n,[Jp(ro(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ve.exists(!1))]).then(()=>s)}function ho(t,e){return function(n,s){const i=new ze;return n.asyncQueue.enqueueAndForget(async()=>kp(await Hp(n),s,i)),i.promise}(so(t),e)}function gy(t,e,n){const s=n.docs.get(e._key),i=new wc(t);return new vc(t,i,e._key,s,new cn(n.hasPendingWrites,n.fromCache),e.converter)}function py(...t){return new Zp("arrayUnion",t)}function yy(...t){return new ey("arrayRemove",t)}(function(t,e=!0){(function(n){Wt=n})(Zd),ms(new vn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Zt(new ym(n.getProvider("auth-internal")),new bm(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rt(na,"3.8.3",t),Rt(na,"3.8.3","esm2017")})();const vy={apiKey:"AIzaSyBcJK_Ocx60_ZeEgNVJMGfpcWJrAe7iKE0",authDomain:"quasartodolist.firebaseapp.com",projectId:"quasartodolist",storageBucket:"quasartodolist.appspot.com",messagingSenderId:"1011463570363",appId:"1:1011463570363:web:ef02b610f336d0fc8c7a9e",measurementId:"G-TQZ7YENRT0"},wy=Xa(vy),Be=Qp(wy),Oy=Rc("todoListsList",()=>{const t=J(0),e=J([]);J(!1);const n=M(()=>{var l;return(l=e.value)==null?void 0:l.length});async function s(){console.log("load data from db"),await new Promise(c=>setTimeout(c,50)),(await sn(_t(Be,"todoListsList"))).forEach(c=>{console.log(`${c.id} => ${JSON.stringify(c.data())}`),t.value<=c.data().id&&(t.value=c.data().id+1);const h={id:c.data().id,title:c.data().title,todos:[],nextTodoId:c.data().nextTodoId};c.data().todos.forEach(f=>{const d={id:f.id,content:f.content,isFinished:f.isFinished};h.todos.push(d)}),e.value.push(h)})}s();async function i(l){t.value++,console.log("createTodoListsList",l),e.value.push(l);try{const c=await my(_t(Be,"todoListsList"),l);console.log("[Create List] Document written with ID: ",c.id)}catch(c){console.error("Error adding document",c)}}async function r(l){console.log("store_deleteTodoListsList: id=",l);const c=e.value.findIndex(g=>g.id===l);e.value.splice(c,1),console.log("deleteTodoListsList_before db query");const h=_t(Be,"todoListsList"),f=rs(h,os("id","==",l));console.log("deleteTodoListsList_q:",f);const d=await sn(f);if(d.empty)console.log("deleteTodoListsList_ no db data");else{const g=ln(Be,"todoListsList",d.docs[0].id);console.log("id:",d.docs[0].id),console.log("deleteTodoListsList_docRef:",g),await fy(g).then(()=>{console.log("Document has been deleted successfully.")}).catch(w=>{console.log(w)})}}async function o(l,c){const h=e.value.findIndex(w=>w.id===l);e.value[h].todos.push(c),e.value[h].nextTodoId++;const f=_t(Be,"todoListsList"),d=rs(f,os("id","==",l));console.log("deleteTodoListsList_q:",d);const g=await sn(d);if(g.empty)console.log("addTodoIntoTodoList_ no db data");else{const w=ln(Be,"todoListsList",g.docs[0].id);console.log("id:",g.docs[0].id),console.log("addTodoIntoTodoList_docRef:",w),await Ri(w,{todos:py(c),nextTodoId:e.value[h].nextTodoId}).then(()=>{console.log("Document has been updated successfully.")}).catch(E=>{console.log(E)})}}async function a(l,c){const h=e.value.findIndex(E=>E.id===l),f=e.value[h].todos.findIndex(E=>E.id===c);e.value[h].todos.splice(f,1);const d=_t(Be,"todoListsList"),g=rs(d,os("id","==",l));console.log("deleteTodoListsList_q:",g);const w=await sn(g);if(w.empty)console.log("removeTodoFromTodoList_ no db data");else{const E=ln(Be,"todoListsList",w.docs[0].id);console.log("id:",w.docs[0].id),console.log("addTodoIntoTodoList_docRef:",E),await Oa(E).then(F=>{if(F.exists()){const C=F.data();Ri(E,{todos:yy(C.todos.find(A=>A.id===c))}).then(()=>{console.log("(remove) Document has been updated successfully.")}).catch(A=>{console.log(A)})}})}}async function u(l,c,h){console.log(`Store_toggleCheckBox: listId=${l} todoId=${c} isFinished=${h}`),e.value.forEach(w=>{w.id==l&&w.todos.forEach(E=>{E.id==c&&(E.isFinished=h)})});const f=_t(Be,"todoListsList"),d=rs(f,os("id","==",l)),g=await sn(d);if(!g.empty){const w=ln(Be,"todoListsList",g.docs[0].id);console.log("id:",g.docs[0].id),console.log("toggleCheckBox_docRef:",w),await Oa(w).then(E=>{var F;E.exists()&&Ri(w,{todos:(F=e.value.find(C=>C.id==l))==null?void 0:F.todos}).then(()=>{console.log("(Update)) Document has been updated successfully.")}).catch(C=>{console.log("toggleCheckBox_error:",C)})})}}return{nextListId:t,todoListsList:e,listCount:n,loadTodoListsFromDb:s,createTodoListsList:i,deleteTodoListsList:r,addTodoIntoTodoList:o,removeTodoFromTodoList:a,toggleCheckBox:u}});export{Ly as Q,Ns as a,jc as b,Rs as c,Zc as d,Hc as e,Uc as f,Jc as g,Ay as h,zc as i,Gc as j,ky as k,Oy as l,Ry as m,_y as n,xy as o,Ny as p,My as q,Iy as r,Cy as s,Sy as t,$c as u,ph as v,Dy as w};
