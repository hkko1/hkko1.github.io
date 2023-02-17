import{c as Ze,h as Ve,a as Ac}from"./render.5a2d5cab.js";import{c as M,h as U,r as J,V as ja,B as gn,g as Me,k as at,X as Eo,w as fe,o as _n,l as Fe,s as ze,m as ht,Y as kc,Z as Ns,a as _c,$ as Ha,a0 as Dc,a1 as pr,a2 as xc,a3 as Ka,j as Nc,x as en,W as Fi,a4 as Rc,y as bo,D as Lc,a5 as To,b as Mc,a6 as Oc,a7 as Fc}from"./index.35872052.js";import{u as Vc,b as qc,v as Pc,c as Co,g as Bc,d as yr,a as So,e as Uc,f as $c,h as jc,i as Hc}from"./QBtn.ac023505.js";var Iy=Ze({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=M(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>U("div",{class:n.value},Ve(e.default))}});const Rs={dark:{type:Boolean,default:null}};function Ls(t,e){return M(()=>t.dark===null?e.dark.isActive:t.dark)}var Ay=Ze({name:"QItem",props:{...Rs,...Vc,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:s}}=Me(),i=Ls(t,s),{hasLink:r,linkAttrs:o,linkClass:a,linkTag:u,navigateOnClick:l}=qc(),c=J(null),h=J(null),f=M(()=>t.clickable===!0||r.value===!0||t.tag==="label"),d=M(()=>t.disable!==!0&&f.value===!0),g=M(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(r.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),w=M(()=>{if(t.insetLevel===void 0)return null;const A=s.lang.rtl===!0?"Right":"Left";return{["padding"+A]:16+t.insetLevel*56+"px"}});function E(A){d.value===!0&&(h.value!==null&&(A.qKeyEvent!==!0&&document.activeElement===c.value?h.value.focus():document.activeElement===h.value&&c.value.focus()),l(A))}function F(A){if(d.value===!0&&ja(A,13)===!0){gn(A),A.qKeyEvent=!0;const B=new MouseEvent("click",A);B.qKeyEvent=!0,c.value.dispatchEvent(B)}n("keyup",A)}function S(){const A=Ac(e.default,[]);return d.value===!0&&A.unshift(U("div",{class:"q-focus-helper",tabindex:-1,ref:h})),A}return()=>{const A={ref:c,class:g.value,style:w.value,role:"listitem",onClick:E,onKeyup:F};return d.value===!0?(A.tabindex=t.tabindex||"0",Object.assign(A,o.value)):f.value===!0&&(A["aria-disabled"]="true"),U(u.value,A,S())}}}),ky=Ze({name:"QList",props:{...Rs,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Me(),s=Ls(t,n.proxy.$q),i=M(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>U(t.tag,{class:i.value},Ve(e.default))}});function Kc(t,e,n){let s;function i(){s!==void 0&&(Eo.remove(s),s=void 0)}return at(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){s={condition:()=>n.value===!0,handler:e},Eo.add(s)}}}const zc={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Gc=["beforeShow","show","beforeHide","hide"];function Qc({showing:t,canShow:e,hideOnRouteChange:n,handleShow:s,handleHide:i,processOnMount:r}){const o=Me(),{props:a,emit:u,proxy:l}=o;let c;function h(S){t.value===!0?g(S):f(S)}function f(S){if(a.disable===!0||S!==void 0&&S.qAnchorHandled===!0||e!==void 0&&e(S)!==!0)return;const A=a["onUpdate:modelValue"]!==void 0;A===!0&&(u("update:modelValue",!0),c=S,Fe(()=>{c===S&&(c=void 0)})),(a.modelValue===null||A===!1)&&d(S)}function d(S){t.value!==!0&&(t.value=!0,u("beforeShow",S),s!==void 0?s(S):u("show",S))}function g(S){if(a.disable===!0)return;const A=a["onUpdate:modelValue"]!==void 0;A===!0&&(u("update:modelValue",!1),c=S,Fe(()=>{c===S&&(c=void 0)})),(a.modelValue===null||A===!1)&&w(S)}function w(S){t.value!==!1&&(t.value=!1,u("beforeHide",S),i!==void 0?i(S):u("hide",S))}function E(S){a.disable===!0&&S===!0?a["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):S===!0!==t.value&&(S===!0?d:w)(c)}fe(()=>a.modelValue,E),n!==void 0&&Pc(o)===!0&&fe(()=>l.$route.fullPath,()=>{n.value===!0&&t.value===!0&&g()}),r===!0&&_n(()=>{E(a.modelValue)});const F={show:f,hide:g,toggle:h};return Object.assign(l,F),F}const Wc=[null,document,document.body,document.scrollingElement,document.documentElement];function _y(t,e){let n=Bc(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return Wc.includes(n)?window:n}function Xc(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Yc(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let zn;function Dy(){if(zn!==void 0)return zn;const t=document.createElement("p"),e=document.createElement("div");Co(t,{width:"100%",height:"200px"}),Co(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let s=t.offsetWidth;return n===s&&(s=e.clientWidth),e.remove(),zn=n-s,zn}function Jc(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}let tn=0,gi,pi,sn,yi=!1,Io,Ao,ko,dt=null;function Zc(t){eh(t)&&gn(t)}function eh(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=kc(t),n=t.shiftKey&&!t.deltaX,s=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||s?t.deltaY:t.deltaX;for(let r=0;r<e.length;r++){const o=e[r];if(Jc(o,s))return s?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function _o(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Gn(t){yi!==!0&&(yi=!0,requestAnimationFrame(()=>{yi=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:s}=document.scrollingElement;(sn===void 0||e!==window.innerHeight)&&(sn=n-e,document.scrollingElement.scrollTop=s),s>sn&&(document.scrollingElement.scrollTop-=Math.ceil((s-sn)/8))}))}function Do(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:s,overflowX:i}=window.getComputedStyle(e);gi=Yc(window),pi=Xc(window),Io=e.style.left,Ao=e.style.top,ko=window.location.href,e.style.left=`-${gi}px`,e.style.top=`-${pi}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),s!=="hidden"&&(s==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,ze.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Gn,ht.passiveCapture),window.visualViewport.addEventListener("scroll",Gn,ht.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",_o,ht.passiveCapture))}ze.is.desktop===!0&&ze.is.mac===!0&&window[`${t}EventListener`]("wheel",Zc,ht.notPassive),t==="remove"&&(ze.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Gn,ht.passiveCapture),window.visualViewport.removeEventListener("scroll",Gn,ht.passiveCapture)):window.removeEventListener("scroll",_o,ht.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=Io,e.style.top=Ao,window.location.href===ko&&window.scrollTo(gi,pi),sn=void 0)}function th(t){let e="add";if(t===!0){if(tn++,dt!==null){clearTimeout(dt),dt=null;return}if(tn>1)return}else{if(tn===0||(tn--,tn>0))return;if(e="remove",ze.is.ios===!0&&ze.is.nativeMobile===!0){dt!==null&&clearTimeout(dt),dt=setTimeout(()=>{Do(e),dt=null},100);return}}Do(e)}function nh(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,th(e))}}}function sh(){let t=null;const e=Me();function n(){t!==null&&(clearTimeout(t),t=null)}return Ns(n),at(n),{removeTimeout:n,registerTimeout(s,i){n(),yr(e)===!1&&(t=setTimeout(s,i))}}}var xy=Ze({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=M(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>U(t.tag,{class:n.value},Ve(e.default))}});function ih({validate:t,resetValidation:e,requiresQForm:n}){const s=_c(Ha,!1);if(s!==!1){const{props:i,proxy:r}=Me();Object.assign(r,{validate:t,resetValidation:e}),fe(()=>i.disable,o=>{o===!0?(typeof e=="function"&&e(),s.unbindComponent(r)):s.bindComponent(r)}),_n(()=>{i.disable!==!0&&s.bindComponent(r)}),at(()=>{i.disable!==!0&&s.unbindComponent(r)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const xo=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,No=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ro=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Qn=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Wn=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,vi={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>xo.test(t),hexaColor:t=>No.test(t),hexOrHexaColor:t=>Ro.test(t),rgbColor:t=>Qn.test(t),rgbaColor:t=>Wn.test(t),rgbOrRgbaColor:t=>Qn.test(t)||Wn.test(t),hexOrRgbColor:t=>xo.test(t)||Qn.test(t),hexaOrRgbaColor:t=>No.test(t)||Wn.test(t),anyColor:t=>Ro.test(t)||Qn.test(t)||Wn.test(t)},rh=[!0,!1,"ondemand"],oh={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:t=>rh.includes(t)}};function ah(t,e){const{props:n,proxy:s}=Me(),i=J(!1),r=J(null),o=J(null);ih({validate:g,resetValidation:d});let a=0,u;const l=M(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),c=M(()=>n.disable!==!0&&l.value===!0),h=M(()=>n.error===!0||i.value===!0),f=M(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:r.value);fe(()=>n.modelValue,()=>{w()}),fe(()=>n.reactiveRules,F=>{F===!0?u===void 0&&(u=fe(()=>n.rules,()=>{w(!0)})):u!==void 0&&(u(),u=void 0)},{immediate:!0}),fe(t,F=>{F===!0?o.value===null&&(o.value=!1):o.value===!1&&(o.value=!0,c.value===!0&&n.lazyRules!=="ondemand"&&e.value===!1&&E())});function d(){a++,e.value=!1,o.value=null,i.value=!1,r.value=null,E.cancel()}function g(F=n.modelValue){if(c.value!==!0)return!0;const S=++a,A=e.value!==!0?()=>{o.value=!0}:()=>{},B=(p,b)=>{p===!0&&A(),i.value=p,r.value=b||null,e.value=!1},H=[];for(let p=0;p<n.rules.length;p++){const b=n.rules[p];let C;if(typeof b=="function"?C=b(F,vi):typeof b=="string"&&vi[b]!==void 0&&(C=vi[b](F)),C===!1||typeof C=="string")return B(!0,C),!1;C!==!0&&C!==void 0&&H.push(C)}return H.length===0?(B(!1),!0):(e.value=!0,Promise.all(H).then(p=>{if(p===void 0||Array.isArray(p)===!1||p.length===0)return S===a&&B(!1),!0;const b=p.find(C=>C===!1||typeof C=="string");return S===a&&B(b!==void 0,b),b===void 0},p=>(S===a&&(console.error(p),B(!0)),!1)))}function w(F){c.value===!0&&n.lazyRules!=="ondemand"&&(o.value===!0||n.lazyRules!==!0&&F!==!0)&&E()}const E=Dc(g,0);return at(()=>{u!==void 0&&u(),E.cancel()}),Object.assign(s,{resetValidation:d,validate:g}),pr(s,"hasError",()=>h.value),{isDirtyModel:o,hasRules:l,hasError:h,errorMessage:f,validate:g,resetValidation:d}}const Lo=/^on[A-Z]/;function uh(t,e){const n={listeners:J({}),attributes:J({})};function s(){const i={},r={};for(const o in t)o!=="class"&&o!=="style"&&Lo.test(o)===!1&&(i[o]=t[o]);for(const o in e.props)Lo.test(o)===!0&&(r[o]=e.props[o]);n.attributes.value=i,n.listeners.value=r}return xc(s),s(),n}let wi,Xn=0;const ge=new Array(256);for(let t=0;t<256;t++)ge[t]=(t+256).toString(16).substring(1);const lh=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let s=e;s>0;s--)n.push(Math.floor(Math.random()*256));return n}})(),Mo=4096;function ch(){(wi===void 0||Xn+16>Mo)&&(Xn=0,wi=lh(Mo));const t=Array.prototype.slice.call(wi,Xn,Xn+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,ge[t[0]]+ge[t[1]]+ge[t[2]]+ge[t[3]]+"-"+ge[t[4]]+ge[t[5]]+"-"+ge[t[6]]+ge[t[7]]+"-"+ge[t[8]]+ge[t[9]]+"-"+ge[t[10]]+ge[t[11]]+ge[t[12]]+ge[t[13]]+ge[t[14]]+ge[t[15]]}let mt=[],pn=[];function za(t){pn=pn.filter(e=>e!==t)}function hh(t){za(t),pn.push(t)}function Oo(t){za(t),pn.length===0&&mt.length>0&&(mt[mt.length-1](),mt=[])}function Ms(t){pn.length===0?t():mt.push(t)}function dh(t){mt=mt.filter(e=>e!==t)}function Vi(t){return t===void 0?`f_${ch()}`:t}function qi(t){return t!=null&&(""+t).length>0}const fh={...Rs,...oh,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},mh=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function gh(){const{props:t,attrs:e,proxy:n,vnode:s}=Me();return{isDark:Ls(t,n.$q),editable:M(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:J(!1),focused:J(!1),hasPopupOpen:!1,splitAttrs:uh(e,s),targetUid:J(Vi(t.for)),rootRef:J(null),targetRef:J(null),controlRef:J(null)}}function ph(t){const{props:e,emit:n,slots:s,attrs:i,proxy:r}=Me(),{$q:o}=r;let a=null;t.hasValue===void 0&&(t.hasValue=M(()=>qi(e.modelValue))),t.emitValue===void 0&&(t.emitValue=v=>{n("update:modelValue",v)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:x,onFocusout:N}),Object.assign(t,{clearValue:_,onControlFocusin:x,onControlFocusout:N,focus:b}),t.computedCounter===void 0&&(t.computedCounter=M(()=>{if(e.counter!==!1){const v=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,L=e.maxlength!==void 0?e.maxlength:e.maxValues;return v+(L!==void 0?" / "+L:"")}}));const{isDirtyModel:u,hasRules:l,hasError:c,errorMessage:h,resetValidation:f}=ah(t.focused,t.innerLoading),d=t.floatingLabel!==void 0?M(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):M(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),g=M(()=>e.bottomSlots===!0||e.hint!==void 0||l.value===!0||e.counter===!0||e.error!==null),w=M(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),E=M(()=>`q-field row no-wrap items-start q-field--${w.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(d.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(c.value===!0?" q-field--error":"")+(c.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&g.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),F=M(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(c.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),S=M(()=>e.labelSlot===!0||e.label!==void 0),A=M(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&c.value!==!0?` text-${e.labelColor}`:"")),B=M(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:d.value,modelValue:e.modelValue,emitValue:t.emitValue})),H=M(()=>{const v={for:t.targetUid.value};return e.disable===!0?v["aria-disabled"]="true":e.readonly===!0&&(v["aria-readonly"]="true"),v});fe(()=>e.for,v=>{t.targetUid.value=Vi(v)});function p(){const v=document.activeElement;let L=t.targetRef!==void 0&&t.targetRef.value;L&&(v===null||v.id!==t.targetUid.value)&&(L.hasAttribute("tabindex")===!0||(L=L.querySelector("[tabindex]")),L&&L!==v&&L.focus({preventScroll:!0}))}function b(){Ms(p)}function C(){dh(p);const v=document.activeElement;v!==null&&t.rootRef.value.contains(v)&&v.blur()}function x(v){a!==null&&(clearTimeout(a),a=null),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",v))}function N(v,L){a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,!(document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1))&&(t.focused.value===!0&&(t.focused.value=!1,n("blur",v)),L!==void 0&&L())})}function _(v){gn(v),o.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),n("clear",e.modelValue),Fe(()=>{f(),o.platform.is.mobile!==!0&&(u.value=!1)})}function G(){const v=[];return s.prepend!==void 0&&v.push(U("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:en},s.prepend())),v.push(U("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},$())),c.value===!0&&e.noErrorIcon===!1&&v.push(we("error",[U(So,{name:o.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?v.push(we("inner-loading-append",s.loading!==void 0?s.loading():[U(Uc,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&v.push(we("inner-clearable-append",[U(So,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:_})])),s.append!==void 0&&v.push(U("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:en},s.append())),t.getInnerAppend!==void 0&&v.push(we("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&v.push(t.getControlChild()),v}function $(){const v=[];return e.prefix!==void 0&&e.prefix!==null&&v.push(U("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&v.push(t.getShadowControl()),t.getControl!==void 0?v.push(t.getControl()):s.rawControl!==void 0?v.push(s.rawControl()):s.control!==void 0&&v.push(U("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},s.control(B.value))),S.value===!0&&v.push(U("div",{class:A.value},Ve(s.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&v.push(U("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),v.concat(Ve(s.default))}function X(){let v,L;c.value===!0?h.value!==null?(v=[U("div",{role:"alert"},h.value)],L=`q--slot-error-${h.value}`):(v=Ve(s.error),L="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(v=[U("div",e.hint)],L=`q--slot-hint-${e.hint}`):(v=Ve(s.hint),L="q--slot-hint"));const he=e.counter===!0||s.counter!==void 0;if(e.hideBottomSpace===!0&&he===!1&&v===void 0)return;const be=U("div",{key:L,class:"q-field__messages col"},v);return U("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:en},[e.hideBottomSpace===!0?be:U(Fi,{name:"q-transition--field-message"},()=>be),he===!0?U("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():t.computedCounter.value):null])}function we(v,L){return L===null?null:U("div",{key:v,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},L)}let Ee=!1;return Ns(()=>{Ee=!0}),Ka(()=>{Ee===!0&&e.autofocus===!0&&r.focus()}),_n(()=>{Nc.value===!0&&e.for===void 0&&(t.targetUid.value=Vi()),e.autofocus===!0&&r.focus()}),at(()=>{a!==null&&clearTimeout(a)}),Object.assign(r,{focus:b,blur:C}),function(){const L=t.getControl===void 0&&s.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...H.value}:H.value;return U("label",{ref:t.rootRef,class:[E.value,i.class],style:i.style,...L},[s.before!==void 0?U("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:en},s.before()):null,U("div",{class:"q-field__inner relative-position col self-stretch"},[U("div",{ref:t.controlRef,class:F.value,tabindex:-1,...t.controlEvents},G()),g.value===!0?X():null]),s.after!==void 0?U("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:en},s.after()):null])}}const Fo={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},hs={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleLowerCase()}},Ga=Object.keys(hs);Ga.forEach(t=>{hs[t].regex=new RegExp(hs[t].pattern)});const yh=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ga.join("")+"])|(.)","g"),Vo=/[.*+?^${}()|[\]\\]/g,ae=String.fromCharCode(1),vh={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function wh(t,e,n,s){let i,r,o,a;const u=J(null),l=J(h());function c(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}fe(()=>t.type+t.autogrow,d),fe(()=>t.mask,p=>{if(p!==void 0)g(l.value,!0);else{const b=B(l.value);d(),t.modelValue!==b&&e("update:modelValue",b)}}),fe(()=>t.fillMask+t.reverseFillMask,()=>{u.value===!0&&g(l.value,!0)}),fe(()=>t.unmaskedValue,()=>{u.value===!0&&g(l.value)});function h(){if(d(),u.value===!0){const p=S(B(t.modelValue));return t.fillMask!==!1?H(p):p}return t.modelValue}function f(p){if(p<i.length)return i.slice(-p);let b="",C=i;const x=C.indexOf(ae);if(x>-1){for(let N=p-C.length;N>0;N--)b+=ae;C=C.slice(0,x)+b+C.slice(x)}return C}function d(){if(u.value=t.mask!==void 0&&t.mask.length>0&&c(),u.value===!1){a=void 0,i="",r="";return}const p=Fo[t.mask]===void 0?t.mask:Fo[t.mask],b=typeof t.fillMask=="string"&&t.fillMask.length>0?t.fillMask.slice(0,1):"_",C=b.replace(Vo,"\\$&"),x=[],N=[],_=[];let G=t.reverseFillMask===!0,$="",X="";p.replace(yh,(L,he,be,T,ne)=>{if(T!==void 0){const se=hs[T];_.push(se),X=se.negate,G===!0&&(N.push("(?:"+X+"+)?("+se.pattern+"+)?(?:"+X+"+)?("+se.pattern+"+)?"),G=!1),N.push("(?:"+X+"+)?("+se.pattern+")?")}else if(be!==void 0)$="\\"+(be==="\\"?"":be),_.push(be),x.push("([^"+$+"]+)?"+$+"?");else{const se=he!==void 0?he:ne;$=se==="\\"?"\\\\\\\\":se.replace(Vo,"\\\\$&"),_.push(se),x.push("([^"+$+"]+)?"+$+"?")}});const we=new RegExp("^"+x.join("")+"("+($===""?".":"[^"+$+"]")+"+)?"+($===""?"":"["+$+"]*")+"$"),Ee=N.length-1,v=N.map((L,he)=>he===0&&t.reverseFillMask===!0?new RegExp("^"+C+"*"+L):he===Ee?new RegExp("^"+L+"("+(X===""?".":X)+"+)?"+(t.reverseFillMask===!0?"$":C+"*")):new RegExp("^"+L));o=_,a=L=>{const he=we.exec(t.reverseFillMask===!0?L:L.slice(0,_.length));he!==null&&(L=he.slice(1).join(""));const be=[],T=v.length;for(let ne=0,se=L;ne<T;ne++){const Be=v[ne].exec(se);if(Be===null)break;se=se.slice(Be.shift().length),be.push(...Be)}return be.length>0?be.join(""):L},i=_.map(L=>typeof L=="string"?L:ae).join(""),r=i.split(ae).join(b)}function g(p,b,C){const x=s.value,N=x.selectionEnd,_=x.value.length-N,G=B(p);b===!0&&d();const $=S(G),X=t.fillMask!==!1?H($):$,we=l.value!==X;x.value!==X&&(x.value=X),we===!0&&(l.value=X),document.activeElement===x&&Fe(()=>{if(X===r){const v=t.reverseFillMask===!0?r.length:0;x.setSelectionRange(v,v,"forward");return}if(C==="insertFromPaste"&&t.reverseFillMask!==!0){const v=N-1;E.right(x,v,v);return}if(["deleteContentBackward","deleteContentForward"].indexOf(C)>-1){const v=t.reverseFillMask===!0?N===0?X.length>$.length?1:0:Math.max(0,X.length-(X===r?0:Math.min($.length,_)+1))+1:N;x.setSelectionRange(v,v,"forward");return}if(t.reverseFillMask===!0)if(we===!0){const v=Math.max(0,X.length-(X===r?0:Math.min($.length,_+1)));v===1&&N===1?x.setSelectionRange(v,v,"forward"):E.rightReverse(x,v,v)}else{const v=X.length-_;x.setSelectionRange(v,v,"backward")}else if(we===!0){const v=Math.max(0,i.indexOf(ae),Math.min($.length,N)-1);E.right(x,v,v)}else{const v=N-1;E.right(x,v,v)}});const Ee=t.unmaskedValue===!0?B(X):X;String(t.modelValue)!==Ee&&n(Ee,!0)}function w(p,b,C){const x=S(B(p.value));b=Math.max(0,i.indexOf(ae),Math.min(x.length,b)),p.setSelectionRange(b,C,"forward")}const E={left(p,b,C,x){const N=i.slice(b-1).indexOf(ae)===-1;let _=Math.max(0,b-1);for(;_>=0;_--)if(i[_]===ae){b=_,N===!0&&b++;break}if(_<0&&i[b]!==void 0&&i[b]!==ae)return E.right(p,0,0);b>=0&&p.setSelectionRange(b,x===!0?C:b,"backward")},right(p,b,C,x){const N=p.value.length;let _=Math.min(N,C+1);for(;_<=N;_++)if(i[_]===ae){C=_;break}else i[_-1]===ae&&(C=_);if(_>N&&i[C-1]!==void 0&&i[C-1]!==ae)return E.left(p,N,N);p.setSelectionRange(x?b:C,C,"forward")},leftReverse(p,b,C,x){const N=f(p.value.length);let _=Math.max(0,b-1);for(;_>=0;_--)if(N[_-1]===ae){b=_;break}else if(N[_]===ae&&(b=_,_===0))break;if(_<0&&N[b]!==void 0&&N[b]!==ae)return E.rightReverse(p,0,0);b>=0&&p.setSelectionRange(b,x===!0?C:b,"backward")},rightReverse(p,b,C,x){const N=p.value.length,_=f(N),G=_.slice(0,C+1).indexOf(ae)===-1;let $=Math.min(N,C+1);for(;$<=N;$++)if(_[$-1]===ae){C=$,C>0&&G===!0&&C--;break}if($>N&&_[C-1]!==void 0&&_[C-1]!==ae)return E.leftReverse(p,N,N);p.setSelectionRange(x===!0?b:C,C,"forward")}};function F(p){if(e("keydown",p),Rc(p)===!0)return;const b=s.value,C=b.selectionStart,x=b.selectionEnd;if(p.keyCode===37||p.keyCode===39){const N=E[(p.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];p.preventDefault(),N(b,C,x,p.shiftKey)}else p.keyCode===8&&t.reverseFillMask!==!0&&C===x?E.left(b,C,x,!0):p.keyCode===46&&t.reverseFillMask===!0&&C===x&&E.rightReverse(b,C,x,!0)}function S(p){if(p==null||p==="")return"";if(t.reverseFillMask===!0)return A(p);const b=o;let C=0,x="";for(let N=0;N<b.length;N++){const _=p[C],G=b[N];if(typeof G=="string")x+=G,_===G&&C++;else if(_!==void 0&&G.regex.test(_))x+=G.transform!==void 0?G.transform(_):_,C++;else return x}return x}function A(p){const b=o,C=i.indexOf(ae);let x=p.length-1,N="";for(let _=b.length-1;_>=0&&x>-1;_--){const G=b[_];let $=p[x];if(typeof G=="string")N=G+N,$===G&&x--;else if($!==void 0&&G.regex.test($))do N=(G.transform!==void 0?G.transform($):$)+N,x--,$=p[x];while(C===_&&$!==void 0&&G.regex.test($));else return N}return N}function B(p){return typeof p!="string"||a===void 0?typeof p=="number"?a(""+p):p:a(p)}function H(p){return r.length-p.length<=0?p:t.reverseFillMask===!0&&p.length>0?r.slice(0,-p.length)+p:p+r.slice(p.length)}return{innerValue:l,hasMask:u,moveCursorForPaste:w,updateMaskValue:g,onMaskedKeydown:F}}const Eh={name:String};function Ny(t={}){return(e,n,s)=>{e[n](U("input",{class:"hidden"+(s||""),...t.value}))}}function bh(t){return M(()=>t.name||t.for)}function Th(t,e){function n(){const s=t.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(r=>{i.items.add(r)}),{files:i.files}}catch{return{files:void 0}}}return e===!0?M(()=>{if(t.type==="file")return n()}):M(n)}const Ch=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Sh=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ih=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ah=/[a-z0-9_ -]$/i;function kh(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(ze.is.firefox===!0?Ah.test(n.data)===!1:Ch.test(n.data)===!0||Sh.test(n.data)===!0||Ih.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var Ry=Ze({name:"QInput",inheritAttrs:!1,props:{...fh,...vh,...Eh,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...mh,"paste","change","keydown","animationend"],setup(t,{emit:e,attrs:n}){const{proxy:s}=Me(),{$q:i}=s,r={};let o=NaN,a,u,l=null,c;const h=J(null),f=bh(t),{innerValue:d,hasMask:g,moveCursorForPaste:w,updateMaskValue:E,onMaskedKeydown:F}=wh(t,e,we,h),S=Th(t,!0),A=M(()=>qi(d.value)),B=kh($),H=gh(),p=M(()=>t.type==="textarea"||t.autogrow===!0),b=M(()=>p.value===!0||["text","search","url","tel","password"].includes(t.type)),C=M(()=>{const T={...H.splitAttrs.listeners.value,onInput:$,onPaste:G,onChange:v,onBlur:L,onFocus:bo};return T.onCompositionstart=T.onCompositionupdate=T.onCompositionend=B,g.value===!0&&(T.onKeydown=F),t.autogrow===!0&&(T.onAnimationend=X),T}),x=M(()=>{const T={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:f.value,...H.splitAttrs.attributes.value,id:H.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return p.value===!1&&(T.type=t.type),t.autogrow===!0&&(T.rows=1),T});fe(()=>t.type,()=>{h.value&&(h.value.value=t.modelValue)}),fe(()=>t.modelValue,T=>{if(g.value===!0){if(u===!0&&(u=!1,String(T)===o))return;E(T)}else d.value!==T&&(d.value=T,t.type==="number"&&r.hasOwnProperty("value")===!0&&(a===!0?a=!1:delete r.value));t.autogrow===!0&&Fe(Ee)}),fe(()=>t.autogrow,T=>{T===!0?Fe(Ee):h.value!==null&&n.rows>0&&(h.value.style.height="auto")}),fe(()=>t.dense,()=>{t.autogrow===!0&&Fe(Ee)});function N(){Ms(()=>{const T=document.activeElement;h.value!==null&&h.value!==T&&(T===null||T.id!==H.targetUid.value)&&h.value.focus({preventScroll:!0})})}function _(){h.value!==null&&h.value.select()}function G(T){if(g.value===!0&&t.reverseFillMask!==!0){const ne=T.target;w(ne,ne.selectionStart,ne.selectionEnd)}e("paste",T)}function $(T){if(!T||!T.target)return;if(t.type==="file"){e("update:modelValue",T.target.files);return}const ne=T.target.value;if(T.target.qComposing===!0){r.value=ne;return}if(g.value===!0)E(ne,!1,T.inputType);else if(we(ne),b.value===!0&&T.target===document.activeElement){const{selectionStart:se,selectionEnd:Be}=T.target;se!==void 0&&Be!==void 0&&Fe(()=>{T.target===document.activeElement&&ne.indexOf(T.target.value)===0&&T.target.setSelectionRange(se,Be)})}t.autogrow===!0&&Ee()}function X(T){e("animationend",T),Ee()}function we(T,ne){c=()=>{l=null,t.type!=="number"&&r.hasOwnProperty("value")===!0&&delete r.value,t.modelValue!==T&&o!==T&&(o=T,ne===!0&&(u=!0),e("update:modelValue",T),Fe(()=>{o===T&&(o=NaN)})),c=void 0},t.type==="number"&&(a=!0,r.value=T),t.debounce!==void 0?(l!==null&&clearTimeout(l),r.value=T,l=setTimeout(c,t.debounce)):c()}function Ee(){requestAnimationFrame(()=>{const T=h.value;if(T!==null){const ne=T.parentNode.style,{overflow:se}=T.style;i.platform.is.firefox!==!0&&(T.style.overflow="hidden"),ne.marginBottom=T.scrollHeight-1+"px",T.style.height="1px",T.style.height=T.scrollHeight+"px",T.style.overflow=se,ne.marginBottom=""}})}function v(T){B(T),l!==null&&(clearTimeout(l),l=null),c!==void 0&&c(),e("change",T.target.value)}function L(T){T!==void 0&&bo(T),l!==null&&(clearTimeout(l),l=null),c!==void 0&&c(),a=!1,u=!1,delete r.value,t.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=d.value!==void 0?d.value:"")})}function he(){return r.hasOwnProperty("value")===!0?r.value:d.value!==void 0?d.value:""}at(()=>{L()}),_n(()=>{t.autogrow===!0&&Ee()}),Object.assign(H,{innerValue:d,fieldClass:M(()=>`q-${p.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length>0),inputRef:h,emitValue:we,hasValue:A,floatingLabel:M(()=>A.value===!0||qi(t.displayValue)),getControl:()=>U(p.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,...x.value,...C.value,...t.type!=="file"?{value:he()}:S.value}),getShadowControl:()=>U("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(p.value===!0?"":" text-no-wrap")},[U("span",{class:"invisible"},he()),U("span",t.shadowText)])});const be=ph(H);return Object.assign(s,{focus:N,select:_,getNativeElement:()=>h.value}),pr(s,"nativeEl",()=>h.value),be}}),Ly=Ze({name:"QCardActions",props:{...$c,vertical:Boolean},setup(t,{slots:e}){const n=jc(t),s=M(()=>`q-card__actions ${n.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>U("div",{class:s.value},Ve(e.default))}}),My=Ze({name:"QCard",props:{...Rs,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Me(),s=Ls(t,n),i=M(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>U(t.tag,{class:i.value},Ve(e.default))}}),Oy=Ze({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:e,emit:n}){const s=Me(),i=J(null);let r=0;const o=[];function a(d){const g=typeof d=="boolean"?d:t.noErrorFocus!==!0,w=++r,E=(A,B)=>{n("validation"+(A===!0?"Success":"Error"),B)},F=A=>{const B=A.validate();return typeof B.then=="function"?B.then(H=>({valid:H,comp:A}),H=>({valid:!1,comp:A,err:H})):Promise.resolve({valid:B,comp:A})};return(t.greedy===!0?Promise.all(o.map(F)).then(A=>A.filter(B=>B.valid!==!0)):o.reduce((A,B)=>A.then(()=>F(B).then(H=>{if(H.valid===!1)return Promise.reject(H)})),Promise.resolve()).catch(A=>[A])).then(A=>{if(A===void 0||A.length===0)return w===r&&E(!0),!0;if(w===r){const{comp:B,err:H}=A[0];if(H!==void 0&&console.error(H),E(!1,B),g===!0){const p=A.find(({comp:b})=>typeof b.focus=="function"&&yr(b.$)===!1);p!==void 0&&p.comp.focus()}}return!1})}function u(){r++,o.forEach(d=>{typeof d.resetValidation=="function"&&d.resetValidation()})}function l(d){d!==void 0&&gn(d);const g=r+1;a().then(w=>{g===r&&w===!0&&(t.onSubmit!==void 0?n("submit",d):d!==void 0&&d.target!==void 0&&typeof d.target.submit=="function"&&d.target.submit())})}function c(d){d!==void 0&&gn(d),n("reset"),Fe(()=>{u(),t.autofocus===!0&&t.noResetFocus!==!0&&h()})}function h(){Ms(()=>{if(i.value===null)return;const d=i.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),g=>g.tabIndex>-1);d!=null&&d.focus({preventScroll:!0})})}Lc(Ha,{bindComponent(d){o.push(d)},unbindComponent(d){const g=o.indexOf(d);g>-1&&o.splice(g,1)}});let f=!1;return Ns(()=>{f=!0}),Ka(()=>{f===!0&&t.autofocus===!0&&h()}),_n(()=>{t.autofocus===!0&&h()}),Object.assign(s.proxy,{validate:a,resetValidation:u,submit:l,reset:c,focus:h,getValidationComponents:()=>o}),()=>U("form",{class:"q-form",ref:i,onSubmit:l,onReset:c},Ve(e.default))}});function _h(){let t;const e=Me();function n(){t=void 0}return Ns(n),at(n),{removeTick:n,registerTick(s){t=s,Fe(()=>{t===s&&(yr(e)===!1&&t(),t=void 0)})}}}const Dh={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function xh(t,e=()=>{},n=()=>{}){return{transitionProps:M(()=>{const s=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:M(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}let Nh=1,Rh=document.body;function Lh(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${Nh++}`:t,To.globalNodes!==void 0){const s=To.globalNodes.class;s!==void 0&&(n.className=s)}return Rh.appendChild(n),n}function Mh(t){t.remove()}const Ei=[];function Oh(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Fh(t,e,n,s){const i=J(!1),r=J(!1);let o=null;const a={},u=s==="dialog"&&Oh(t);function l(h){if(h===!0){Oo(a),r.value=!0;return}r.value=!1,i.value===!1&&(u===!1&&o===null&&(o=Lh(!1,s)),i.value=!0,Ei.push(t.proxy),hh(a))}function c(h){if(r.value=!1,h!==!0)return;Oo(a),i.value=!1;const f=Ei.indexOf(t.proxy);f!==-1&&Ei.splice(f,1),o!==null&&(Mh(o),o=null)}return Mc(()=>{c(!0)}),t.proxy.__qPortal=!0,pr(t.proxy,"contentEl",()=>e.value),{showPortal:l,hidePortal:c,portalIsActive:i,portalIsAccessible:r,renderPortal:()=>u===!0?n():i.value===!0?[U(Oc,{to:o},n())]:void 0}}const vt=[];let Vt;function Vh(t){Vt=t.keyCode===27}function qh(){Vt===!0&&(Vt=!1)}function Ph(t){Vt===!0&&(Vt=!1,ja(t,27)===!0&&vt[vt.length-1](t))}function Qa(t){window[t]("keydown",Vh),window[t]("blur",qh),window[t]("keyup",Ph),Vt=!1}function Bh(t){ze.is.desktop===!0&&(vt.push(t),vt.length===1&&Qa("addEventListener"))}function qo(t){const e=vt.indexOf(t);e>-1&&(vt.splice(e,1),vt.length===0&&Qa("removeEventListener"))}const wt=[];function Wa(t){wt[wt.length-1](t)}function Uh(t){ze.is.desktop===!0&&(wt.push(t),wt.length===1&&document.body.addEventListener("focusin",Wa))}function Po(t){const e=wt.indexOf(t);e>-1&&(wt.splice(e,1),wt.length===0&&document.body.removeEventListener("focusin",Wa))}let Yn=0;const $h={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Bo={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Fy=Ze({name:"QDialog",inheritAttrs:!1,props:{...zc,...Dh,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Gc,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:s}){const i=Me(),{proxy:{$q:r}}=i,o=J(null),a=J(!1),u=J(!1);let l=null,c=null,h,f;const d=M(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:g}=nh(),{registerTimeout:w}=sh(),{registerTick:E,removeTick:F}=_h(),{transitionProps:S,transitionStyle:A}=xh(t,()=>Bo[t.position][0],()=>Bo[t.position][1]),{showPortal:B,hidePortal:H,portalIsAccessible:p,renderPortal:b}=Fh(i,o,Ic,"dialog"),{hide:C}=Qc({showing:a,hideOnRouteChange:d,handleShow:we,handleHide:Ee,processOnMount:!0}),{addToHistory:x,removeFromHistory:N}=Kc(a,C,d),_=M(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${$h[t.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),G=M(()=>a.value===!0&&t.seamless!==!0),$=M(()=>t.autoClose===!0?{onClick:ne}:{}),X=M(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${G.value===!0?"modal":"seamless"}`,s.class]);fe(()=>t.maximized,z=>{a.value===!0&&T(z)}),fe(G,z=>{g(z),z===!0?(Uh(Be),Bh(he)):(Po(Be),qo(he))});function we(z){x(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,T(t.maximized),B(),u.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),E(v)):F(),w(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:Te,bottom:fi}=document.activeElement.getBoundingClientRect(),{innerHeight:wo}=window,mi=window.visualViewport!==void 0?window.visualViewport.height:wo;Te>0&&fi>mi/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-mi,fi>=wo?1/0:Math.ceil(document.scrollingElement.scrollTop+fi-mi/2))),document.activeElement.scrollIntoView()}f=!0,o.value.click(),f=!1}B(!0),u.value=!1,n("show",z)},t.transitionDuration)}function Ee(z){F(),N(),be(!0),u.value=!0,H(),c!==null&&(((z&&z.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),w(()=>{H(!0),u.value=!1,n("hide",z)},t.transitionDuration)}function v(z){Ms(()=>{let Te=o.value;Te===null||Te.contains(document.activeElement)===!0||(Te=(z!==""?Te.querySelector(z):null)||Te.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||Te.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||Te.querySelector("[autofocus], [data-autofocus]")||Te,Te.focus({preventScroll:!0}))})}function L(z){z&&typeof z.focus=="function"?z.focus({preventScroll:!0}):v(),n("shake");const Te=o.value;Te!==null&&(Te.classList.remove("q-animate--scale"),Te.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,o.value!==null&&(Te.classList.remove("q-animate--scale"),v())},170))}function he(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&L():(n("escapeKey"),C()))}function be(z){l!==null&&(clearTimeout(l),l=null),(z===!0||a.value===!0)&&(T(!1),t.seamless!==!0&&(g(!1),Po(Be),qo(he))),z!==!0&&(c=null)}function T(z){z===!0?h!==!0&&(Yn<1&&document.body.classList.add("q-body--dialog"),Yn++,h=!0):h===!0&&(Yn<2&&document.body.classList.remove("q-body--dialog"),Yn--,h=!1)}function ne(z){f!==!0&&(C(z),n("click",z))}function se(z){t.persistent!==!0&&t.noBackdropDismiss!==!0?C(z):t.noShake!==!0&&L(z.relatedTarget)}function Be(z){t.allowFocusOutside!==!0&&p.value===!0&&Hc(o.value,z.target)!==!0&&v('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:v,shake:L,__updateRefocusTarget(z){c=z||null}}),at(be);const Sc=r.platform.is.ios===!0||r.platform.is.safari?"onClick":"onFocusin";function Ic(){return U("div",{role:"dialog","aria-modal":G.value===!0?"true":"false",...s,class:X.value},[U(Fi,{name:"q-transition--fade",appear:!0},()=>G.value===!0?U("div",{class:"q-dialog__backdrop fixed-full",style:A.value,"aria-hidden":"true",tabindex:-1,[Sc]:se}):null),U(Fi,S.value,()=>a.value===!0?U("div",{ref:o,class:_.value,style:A.value,tabindex:-1,...$.value},Ve(e.default)):null)])}return b}});/**
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
 */const Xa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;u||(d=64,o||(f=64)),s.push(n[c],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hh=function(t){const e=Xa(t);return Ya.encodeByteArray(e,!0)},ds=function(t){return Hh(t).replace(/\./g,"")},Kh=function(t){try{return Ya.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zh(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gh=()=>zh().__FIREBASE_DEFAULTS__,Qh=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wh=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kh(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return Gh()||Qh()||Wh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xh=t=>{var e,n;return(n=(e=Ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yh=t=>{const e=Xh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jh=()=>{var t;return(t=Ja())===null||t===void 0?void 0:t.config};/**
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
 */class Zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ed(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ds(JSON.stringify(n)),ds(JSON.stringify(o)),a].join(".")}function td(){try{return typeof indexedDB=="object"}catch{return!1}}function nd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const sd="FirebaseError";class Qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sd,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?id(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,s)}}function id(t,e){return t.replace(rd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rd=/\{\$([^}]+)}/g;function Pi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Uo(r)&&Uo(o)){if(!Pi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Uo(t){return t!==null&&typeof t=="object"}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ft="[DEFAULT]";/**
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
 */class od{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Zh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ud(e))try{this.getOrInitializeService({instanceIdentifier:ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ft){return this.instances.has(e)}getOptions(e=ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ad(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ft){return this.component?this.component.multipleInstances?e:ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ad(t){return t===ft?void 0:t}function ud(t){return t.instantiationMode==="EAGER"}/**
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
 */class ld{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new od(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const cd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},hd=Q.INFO,dd={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},fd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=hd,this._logHandler=fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const md=(t,e)=>e.some(n=>t instanceof n);let $o,jo;function gd(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pd(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Bi=new WeakMap,nu=new WeakMap,bi=new WeakMap,vr=new WeakMap;function yd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(et(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tu.set(n,t)}).catch(()=>{}),vr.set(e,t),e}function vd(t){if(Bi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Bi.set(t,e)}let Ui={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wd(t){Ui=t(Ui)}function Ed(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ti(this),e,...n);return nu.set(s,e.sort?e.sort():[e]),et(s)}:pd().includes(t)?function(...e){return t.apply(Ti(this),e),et(tu.get(this))}:function(...e){return et(t.apply(Ti(this),e))}}function bd(t){return typeof t=="function"?Ed(t):(t instanceof IDBTransaction&&vd(t),md(t,gd())?new Proxy(t,Ui):t)}function et(t){if(t instanceof IDBRequest)return yd(t);if(bi.has(t))return bi.get(t);const e=bd(t);return e!==t&&(bi.set(t,e),vr.set(e,t)),e}const Ti=t=>vr.get(t);function Td(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=et(o);return s&&o.addEventListener("upgradeneeded",u=>{s(et(o.result),u.oldVersion,u.newVersion,et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Cd=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],Ci=new Map;function Ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Cd.includes(n)))return;const r=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Ci.set(e,r),r}wd(t=>({...t,get:(e,n,s)=>Ho(e,n)||t.get(e,n,s),has:(e,n)=>!!Ho(e,n)||t.has(e,n)}));/**
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
 */class Id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ad(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ad(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $i="@firebase/app",Ko="0.9.3";/**
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
 */const Tt=new eu("@firebase/app"),kd="@firebase/app-compat",_d="@firebase/analytics-compat",Dd="@firebase/analytics",xd="@firebase/app-check-compat",Nd="@firebase/app-check",Rd="@firebase/auth",Ld="@firebase/auth-compat",Md="@firebase/database",Od="@firebase/database-compat",Fd="@firebase/functions",Vd="@firebase/functions-compat",qd="@firebase/installations",Pd="@firebase/installations-compat",Bd="@firebase/messaging",Ud="@firebase/messaging-compat",$d="@firebase/performance",jd="@firebase/performance-compat",Hd="@firebase/remote-config",Kd="@firebase/remote-config-compat",zd="@firebase/storage",Gd="@firebase/storage-compat",Qd="@firebase/firestore",Wd="@firebase/firestore-compat",Xd="firebase",Yd="9.17.1";/**
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
 */const ji="[DEFAULT]",Jd={[$i]:"fire-core",[kd]:"fire-core-compat",[Dd]:"fire-analytics",[_d]:"fire-analytics-compat",[Nd]:"fire-app-check",[xd]:"fire-app-check-compat",[Rd]:"fire-auth",[Ld]:"fire-auth-compat",[Md]:"fire-rtdb",[Od]:"fire-rtdb-compat",[Fd]:"fire-fn",[Vd]:"fire-fn-compat",[qd]:"fire-iid",[Pd]:"fire-iid-compat",[Bd]:"fire-fcm",[Ud]:"fire-fcm-compat",[$d]:"fire-perf",[jd]:"fire-perf-compat",[Hd]:"fire-rc",[Kd]:"fire-rc-compat",[zd]:"fire-gcs",[Gd]:"fire-gcs-compat",[Qd]:"fire-fst",[Wd]:"fire-fst-compat","fire-js":"fire-js",[Xd]:"fire-js-all"};/**
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
 */const fs=new Map,Hi=new Map;function Zd(t,e){try{t.container.addComponent(e)}catch(n){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(Hi.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,t);for(const n of fs.values())Zd(n,t);return!0}function ef(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new Za("app","Firebase",tf);/**
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
 */class nf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
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
 */const sf=Yd;function su(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ji,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw tt.create("bad-app-name",{appName:String(i)});if(n||(n=Jh()),!n)throw tt.create("no-options");const r=fs.get(i);if(r){if(Pi(n,r.options)&&Pi(s,r.config))return r;throw tt.create("duplicate-app",{appName:i})}const o=new ld(i);for(const u of Hi.values())o.addComponent(u);const a=new nf(n,s,o);return fs.set(i,a),a}function rf(t=ji){const e=fs.get(t);if(!e&&t===ji)return su();if(!e)throw tt.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let i=(s=Jd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}ms(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const of="firebase-heartbeat-database",af=1,vn="firebase-heartbeat-store";let Si=null;function iu(){return Si||(Si=Td(of,af,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vn)}}}).catch(t=>{throw tt.create("idb-open",{originalErrorMessage:t.message})})),Si}async function uf(t){try{return(await iu()).transaction(vn).objectStore(vn).get(ru(t))}catch(e){if(e instanceof Qt)Tt.warn(e.message);else{const n=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(n.message)}}}async function zo(t,e){try{const s=(await iu()).transaction(vn,"readwrite");return await s.objectStore(vn).put(e,ru(t)),s.done}catch(n){if(n instanceof Qt)Tt.warn(n.message);else{const s=tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tt.warn(s.message)}}}function ru(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lf=1024,cf=30*24*60*60*1e3;class hf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ff(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=cf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Go(),{heartbeatsToSend:n,unsentEntries:s}=df(this._heartbeatsCache.heartbeats),i=ds(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Go(){return new Date().toISOString().substring(0,10)}function df(t,e=lf){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qo(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ff{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return td()?nd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qo(t){return ds(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mf(t){ms(new yn("platform-logger",e=>new Id(e),"PRIVATE")),ms(new yn("heartbeat",e=>new hf(e),"PRIVATE")),Mt($i,Ko,t),Mt($i,Ko,"esm2017"),Mt("fire-js","")}mf("");var gf="firebase",pf="9.17.1";/**
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
 */Mt(gf,pf,"app");var yf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k,wr=wr||{},V=yf||self;function gs(){}function Os(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Dn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vf(t){return Object.prototype.hasOwnProperty.call(t,Ii)&&t[Ii]||(t[Ii]=++wf)}var Ii="closure_uid_"+(1e9*Math.random()>>>0),wf=0;function Ef(t,e,n){return t.call.apply(t.bind,arguments)}function bf(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=Ef:Ae=bf,Ae.apply(null,arguments)}function Jn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ut(){this.s=this.s,this.o=this.o}var Tf=0;ut.prototype.s=!1;ut.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Tf!=0)&&vf(this)};ut.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ou=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Er(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Wo(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Os(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Cf=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",gs,e),V.removeEventListener("test",gs,e)}catch{}return t}();function ps(t){return/^[\s\xa0]*$/.test(t)}var Xo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ai(t,e){return t<e?-1:t>e?1:0}function Fs(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function $e(t){return Fs().indexOf(t)!=-1}function br(t){return br[" "](t),t}br[" "]=gs;function Sf(t){var e=kf;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var If=$e("Opera"),qt=$e("Trident")||$e("MSIE"),au=$e("Edge"),Ki=au||qt,uu=$e("Gecko")&&!(Fs().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge"))&&!($e("Trident")||$e("MSIE"))&&!$e("Edge"),Af=Fs().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge");function lu(){var t=V.document;return t?t.documentMode:void 0}var ys;e:{var ki="",_i=function(){var t=Fs();if(uu)return/rv:([^\);]+)(\)|;)/.exec(t);if(au)return/Edge\/([\d\.]+)/.exec(t);if(qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Af)return/WebKit\/(\S+)/.exec(t);if(If)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_i&&(ki=_i?_i[1]:""),qt){var Di=lu();if(Di!=null&&Di>parseFloat(ki)){ys=String(Di);break e}}ys=ki}var kf={};function _f(){return Sf(function(){let t=0;const e=Xo(String(ys)).split("."),n=Xo("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ai(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ai(i[2].length==0,r[2].length==0)||Ai(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var zi;if(V.document&&qt){var Yo=lu();zi=Yo||parseInt(ys,10)||void 0}else zi=void 0;var Df=zi;function wn(t,e){if(ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uu){e:{try{br(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wn.X.h.call(this)}}ve(wn,ke);var xf={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Nf=0;function Rf(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Nf,this.ba=this.ea=!1}function Vs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Tr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cu(t){const e={};for(const n in t)e[n]=t[n];return e}const Jo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Jo.length;r++)n=Jo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qs(t){this.src=t,this.g={},this.h=0}qs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Qi(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Rf(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Gi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=ou(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Vs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qi(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),xi={};function du(t,e,n,s,i){if(s&&s.once)return mu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)du(t,e[r],n,s,i);return null}return n=Ar(n),t&&t[xn]?t.N(e,n,Dn(s)?!!s.capture:!!s,i):fu(t,e,n,!1,s,i)}function fu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Dn(i)?!!i.capture:!!i,a=Ir(t);if(a||(t[Cr]=a=new qs(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Lf(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Cf||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(pu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lf(){function t(n){return e.call(t.src,t.listener,n)}const e=Mf;return t}function mu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)mu(t,e[r],n,s,i);return null}return n=Ar(n),t&&t[xn]?t.O(e,n,Dn(s)?!!s.capture:!!s,i):fu(t,e,n,!0,s,i)}function gu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)gu(t,e[r],n,s,i);else s=Dn(s)?!!s.capture:!!s,n=Ar(n),t&&t[xn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Qi(r,n,s,i),-1<n&&(Vs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ir(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qi(e,n,s,i)),(n=-1<t?e[t]:null)&&Sr(n))}function Sr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xn])Gi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ir(e))?(Gi(n,t),n.h==0&&(n.src=null,e[Cr]=null)):Vs(t)}}}function pu(t){return t in xi?xi[t]:xi[t]="on"+t}function Mf(t,e){if(t.ba)t=!0;else{e=new wn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Sr(t),t=n.call(s,e)}return t}function Ir(t){return t=t[Cr],t instanceof qs?t:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ar(t){return typeof t=="function"?t:(t[Ni]||(t[Ni]=function(e){return t.handleEvent(e)}),t[Ni])}function me(){ut.call(this),this.i=new qs(this),this.P=this,this.I=null}ve(me,ut);me.prototype[xn]=!0;me.prototype.removeEventListener=function(t,e,n,s){gu(this,t,e,n,s)};function ye(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ke(e,t);else if(e instanceof ke)e.target=e.target||t;else{var i=e;e=new ke(s,t),hu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zn(o,s,!0,e)&&i}if(o=e.g=t,i=Zn(o,s,!0,e)&&i,i=Zn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zn(o,s,!1,e)&&i}me.prototype.M=function(){if(me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vs(n[s]);delete t.g[e],t.h--}}this.I=null};me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Gi(t.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var kr=V.JSON.stringify;function Of(){var t=wu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ff{constructor(){this.h=this.g=null}add(e,n){const s=yu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var yu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vf,t=>t.reset());class Vf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qf(t){V.setTimeout(()=>{throw t},0)}function vu(t,e){Wi||Pf(),Xi||(Wi(),Xi=!0),wu.add(t,e)}var Wi;function Pf(){var t=V.Promise.resolve(void 0);Wi=function(){t.then(Bf)}}var Xi=!1,wu=new Ff;function Bf(){for(var t;t=Of();){try{t.h.call(t.g)}catch(n){qf(n)}var e=yu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xi=!1}function Ps(t,e){me.call(this),this.h=t||1,this.g=e||V,this.j=Ae(this.lb,this),this.l=Date.now()}ve(Ps,me);k=Ps.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ye(this,"tick"),this.ca&&(_r(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _r(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}k.M=function(){Ps.X.M.call(this),_r(this),delete this.g};function Dr(t,e,n){if(typeof t=="function")n&&(t=Ae(t,n));else if(t&&typeof t.handleEvent=="function")t=Ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function Eu(t){t.g=Dr(()=>{t.g=null,t.i&&(t.i=!1,Eu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Uf extends ut{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Eu(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(t){ut.call(this),this.h=t,this.g={}}ve(En,ut);var Zo=[];function bu(t,e,n,s){Array.isArray(n)||(n&&(Zo[0]=n.toString()),n=Zo);for(var i=0;i<n.length;i++){var r=du(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Tu(t){Tr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sr(e)},t),t.g={}}En.prototype.M=function(){En.X.M.call(this),Tu(this)};En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bs(){this.g=!0}Bs.prototype.Aa=function(){this.g=!1};function $f(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jf(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Lt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kf(t,n)+(s?" "+s:"")})}function Hf(t,e){t.info(function(){return"TIMEOUT: "+e})}Bs.prototype.info=function(){};function Kf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kr(n)}catch{return e}}var It={},ea=null;function Us(){return ea=ea||new me}It.Pa="serverreachability";function Cu(t){ke.call(this,It.Pa,t)}ve(Cu,ke);function bn(t){const e=Us();ye(e,new Cu(e))}It.STAT_EVENT="statevent";function Su(t,e){ke.call(this,It.STAT_EVENT,t),this.stat=e}ve(Su,ke);function De(t){const e=Us();ye(e,new Su(e,t))}It.Qa="timingevent";function Iu(t,e){ke.call(this,It.Qa,t),this.size=e}ve(Iu,ke);function Nn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var $s={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Au={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xr(){}xr.prototype.h=null;function ta(t){return t.h||(t.h=t.i())}function ku(){}var Rn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Nr(){ke.call(this,"d")}ve(Nr,ke);function Rr(){ke.call(this,"c")}ve(Rr,ke);var Yi;function js(){}ve(js,xr);js.prototype.g=function(){return new XMLHttpRequest};js.prototype.i=function(){return{}};Yi=new js;function Ln(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new En(this),this.O=zf,t=Ki?125:void 0,this.T=new Ps(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var zf=45e3,Ji={},vs={};k=Ln.prototype;k.setTimeout=function(t){this.O=t};function Zi(t,e,n){t.K=1,t.v=Ks(We(e)),t.s=n,t.P=!0,Du(t,null)}function Du(t,e){t.F=Date.now(),Mn(t),t.A=We(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Vu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _u,t.g=il(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Uf(Ae(t.La,t,t.g),t.N)),bu(t.S,t.g,"readystatechange",t.ib),e=t.H?cu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),bn(),$f(t.j,t.u,t.A,t.m,t.U,t.s)}k.ib=function(t){t=t.target;const e=this.L;e&&Ge(t)==3?e.l():this.La(t)};k.La=function(t){try{if(t==this.g)e:{const c=Ge(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Ki||this.g&&(this.h.h||this.g.fa()||ra(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?bn(3):bn(2)),Hs(this);var n=this.g.aa();this.Y=n;t:if(xu(this)){var s=ra(this.g);t="";var i=s.length,r=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){gt(this),cn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,jf(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ps(a)){var l=a;break t}}l=null}if(n=l)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,er(this,n);else{this.i=!1,this.o=3,De(12),gt(this),cn(this);break e}}this.P?(Nu(this,c,o),Ki&&this.i&&c==3&&(bu(this.S,this.T,"tick",this.hb),this.T.start())):(Lt(this.j,this.m,o,null),er(this,o)),c==4&&gt(this),this.i&&!this.I&&(c==4?el(this.l,this):(this.i=!1,Mn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),gt(this),cn(this)}}}catch{}finally{}};function xu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Nu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Gf(t,n),i==vs){e==4&&(t.o=4,De(14),s=!1),Lt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ji){t.o=4,De(15),Lt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Lt(t.j,t.m,i,null),er(t,i);xu(t)&&i!=vs&&i!=Ji&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,De(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pr(e),e.K=!0,De(11))):(Lt(t.j,t.m,n,"[Invalid Chunked Response]"),gt(t),cn(t))}k.hb=function(){if(this.g){var t=Ge(this.g),e=this.g.fa();this.C<e.length&&(Hs(this),Nu(this,t,e),this.i&&t!=4&&Mn(this))}};function Gf(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?vs:(n=Number(e.substring(n,s)),isNaN(n)?Ji:(s+=1,s+n>e.length?vs:(e=e.substr(s,n),t.C=s+n,e)))}k.cancel=function(){this.I=!0,gt(this)};function Mn(t){t.V=Date.now()+t.O,Ru(t,t.O)}function Ru(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nn(Ae(t.gb,t),e)}function Hs(t){t.B&&(V.clearTimeout(t.B),t.B=null)}k.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Hf(this.j,this.A),this.K!=2&&(bn(),De(17)),gt(this),this.o=2,cn(this)):Ru(this,this.V-t)};function cn(t){t.l.G==0||t.I||el(t.l,t)}function gt(t){Hs(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_r(t.T),Tu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function er(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tr(n.h,t))){if(!t.J&&tr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)bs(n),Qs(n);else break e;qr(n),De(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Nn(Ae(n.cb,n),6e3));if(1>=Bu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else pt(n,11)}else if((t.J||n.g==t)&&bs(n),!ps(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Lr(r,r.h),r.h=null))}if(s.D){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,ee(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=sl(s,s.H?s.ka:null,s.V),o.J){Uu(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(Hs(a),Mn(a)),s.g=o}else Ju(s);0<n.i.length&&Ws(n)}else l[0]!="stop"&&l[0]!="close"||pt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?pt(n,7):Vr(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}bn(4)}catch{}}function Qf(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Os(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Wf(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Os(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Lu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Os(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Wf(t),s=Qf(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Et(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Et){this.h=e!==void 0?e:t.h,ws(this,t.j),this.s=t.s,this.g=t.g,Es(this,t.m),this.l=t.l,e=t.i;var n=new Tn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),na(this,n),this.o=t.o}else t&&(n=String(t).match(Mu))?(this.h=!!e,ws(this,n[1]||"",!0),this.s=rn(n[2]||""),this.g=rn(n[3]||"",!0),Es(this,n[4]),this.l=rn(n[5]||"",!0),na(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.h=!!e,this.i=new Tn(null,this.h))}Et.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,sa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(on(e,sa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(on(n,n.charAt(0)=="/"?Zf:Jf,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,tm)),t.join("")};function We(t){return new Et(t)}function ws(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Es(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function na(t,e,n){e instanceof Tn?(t.i=e,nm(t.i,t.h)):(n||(e=on(e,em)),t.i=new Tn(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function Ks(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Yf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Yf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sa=/[#\/\?@]/g,Jf=/[#\?:]/g,Zf=/[#\?]/g,em=/[#\?@]/g,tm=/#/g;function Tn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lt(t){t.g||(t.g=new Map,t.h=0,t.i&&Xf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Tn.prototype;k.add=function(t,e){lt(this),this.i=null,t=Wt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ou(t,e){lt(t),e=Wt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fu(t,e){return lt(t),e=Wt(t,e),t.g.has(e)}k.forEach=function(t,e){lt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};k.oa=function(){lt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};k.W=function(t){lt(this);let e=[];if(typeof t=="string")Fu(this,t)&&(e=e.concat(this.g.get(Wt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return lt(this),this.i=null,t=Wt(this,t),Fu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Vu(t,e,n){Ou(t,e),0<n.length&&(t.i=null,t.g.set(Wt(t,e),Er(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Wt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nm(t,e){e&&!t.j&&(lt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ou(this,s),Vu(this,i,n))},t)),t.j=e}var sm=class{constructor(t,e){this.h=t,this.g=e}};function qu(t){this.l=t||im,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var im=10;function Pu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bu(t){return t.h?1:t.g?t.g.size:0}function tr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lr(t,e){t.g?t.g.add(e):t.h=e}function Uu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qu.prototype.cancel=function(){if(this.i=$u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $u(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Er(t.i)}function Mr(){}Mr.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Mr.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function rm(){this.g=new Mr}function om(t,e,n){const s=n||"";try{Lu(t,function(i,r){let o=i;Dn(i)&&(o=kr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function am(t,e){const n=new Bs;if(V.Image){const s=new Image;s.onload=Jn(es,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jn(es,n,s,"TestLoadImage: error",!1,e),s.onabort=Jn(es,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jn(es,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function es(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function On(t){this.l=t.ac||null,this.j=t.jb||!1}ve(On,xr);On.prototype.g=function(){return new zs(this.l,this.j)};On.prototype.i=function(t){return function(){return t}}({});function zs(t,e){me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Or,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ve(zs,me);var Or=0;k=zs.prototype;k.open=function(t,e){if(this.readyState!=Or)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=Or};k.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ju(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ju(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}k.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Cn(this),this.readyState==3&&ju(this)}};k.Va=function(t){this.g&&(this.response=this.responseText=t,Fn(this))};k.Ua=function(t){this.g&&(this.response=t,Fn(this))};k.ga=function(){this.g&&Fn(this)};function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var um=V.JSON.parse;function te(t){me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hu,this.K=this.L=!1}ve(te,me);var Hu="",lm=/^https?$/i,cm=["POST","PUT"];k=te.prototype;k.Ka=function(t){this.L=t};k.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yi.g(),this.C=this.u?ta(this.u):ta(Yi),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ia(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=ou(cm,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gu(this),0<this.B&&((this.K=hm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Dr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ia(this,r)}};function hm(t){return qt&&_f()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.qa=function(){typeof wr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function ia(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ku(t),Gs(t)}function Ku(t){t.D||(t.D=!0,ye(t,"complete"),ye(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ye(this,"complete"),ye(this,"abort"),Gs(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gs(this,!0)),te.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?zu(this):this.fb())};k.fb=function(){zu(this)};function zu(t){if(t.h&&typeof wr!="undefined"&&(!t.C[1]||Ge(t)!=4||t.aa()!=2)){if(t.v&&Ge(t)==4)Dr(t.Ha,0,t);else if(ye(t,"readystatechange"),Ge(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Mu)[1]||null;if(!i&&V.self&&V.self.location){var r=V.self.location.protocol;i=r.substr(0,r.length-1)}s=!lm.test(i?i.toLowerCase():"")}n=s}if(n)ye(t,"complete"),ye(t,"success");else{t.m=6;try{var o=2<Ge(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ku(t)}}finally{Gs(t)}}}}function Gs(t,e){if(t.g){Gu(t);const n=t.g,s=t.C[0]?gs:null;t.g=null,t.C=null,e||ye(t,"ready");try{n.onreadystatechange=s}catch{}}}function Gu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Ge(t){return t.g?t.g.readyState:0}k.aa=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),um(e)}};function ra(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qu(t){let e="";return Tr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Fr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Qu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wu(t){this.Ca=0,this.i=[],this.j=new Bs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=nn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=nn("baseRetryDelayMs",5e3,t),this.bb=nn("retryDelaySeedMs",1e4,t),this.$a=nn("forwardChannelMaxRetries",2,t),this.ta=nn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new qu(t&&t.concurrentRequestLimit),this.Fa=new rm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=Wu.prototype;k.ma=8;k.G=1;function Vr(t){if(Xu(t),t.G==3){var e=t.U++,n=We(t.F);ee(n,"SID",t.I),ee(n,"RID",e),ee(n,"TYPE","terminate"),Vn(t,n),e=new Ln(t,t.j,e,void 0),e.K=2,e.v=Ks(We(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=il(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mn(e)}nl(t)}function Qs(t){t.g&&(Pr(t),t.g.cancel(),t.g=null)}function Xu(t){Qs(t),t.u&&(V.clearTimeout(t.u),t.u=null),bs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Ws(t){Pu(t.h)||t.m||(t.m=!0,vu(t.Ja,t),t.C=0)}function dm(t,e){return Bu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Nn(Ae(t.Ja,t,e),tl(t,t.C)),t.C++,!0)}k.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ln(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=cu(r),hu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yu(this,i,e),n=We(this.F),ee(n,"RID",t),ee(n,"CVER",22),this.D&&ee(n,"X-HTTP-Session-Id",this.D),Vn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Qu(r)))+"&"+e:this.o&&Fr(n,this.o,r)),Lr(this.h,i),this.Ya&&ee(n,"TYPE","init"),this.O?(ee(n,"$req",e),ee(n,"SID","null"),i.Z=!0,Zi(i,n,null)):Zi(i,n,e),this.G=2}}else this.G==3&&(t?oa(this,t):this.i.length==0||Pu(this.h)||oa(this))};function oa(t,e){var n;e?n=e.m:n=t.U++;const s=We(t.F);ee(s,"SID",t.I),ee(s,"RID",n),ee(s,"AID",t.T),Vn(t,s),t.o&&t.s&&Fr(s,t.o,t.s),n=new Ln(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Lr(t.h,n),Zi(n,s,e)}function Vn(t,e){t.ia&&Tr(t.ia,function(n,s){ee(e,s,n)}),t.l&&Lu({},function(n,s){ee(e,s,n)})}function Yu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ae(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),a=!1;else try{om(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ju(t){t.g||t.u||(t.Z=1,vu(t.Ia,t),t.A=0)}function qr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Nn(Ae(t.Ia,t),tl(t,t.A)),t.A++,!0)}k.Ia=function(){if(this.u=null,Zu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Nn(Ae(this.eb,this),t)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,De(10),Qs(this),Zu(this))};function Pr(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function Zu(t){t.g=new Ln(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=We(t.sa);ee(e,"RID","rpc"),ee(e,"SID",t.I),ee(e,"CI",t.L?"0":"1"),ee(e,"AID",t.T),ee(e,"TYPE","xmlhttp"),Vn(t,e),t.o&&t.s&&Fr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ks(We(e)),n.s=null,n.P=!0,Du(n,t)}k.cb=function(){this.v!=null&&(this.v=null,Qs(this),qr(this),De(19))};function bs(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function el(t,e){var n=null;if(t.g==e){bs(t),Pr(t),t.g=null;var s=2}else if(tr(t.h,e))n=e.D,Uu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Us(),ye(s,new Iu(s,n)),Ws(t)}else Ju(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&dm(t,e)||s==2&&qr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:pt(t,5);break;case 4:pt(t,10);break;case 3:pt(t,6);break;default:pt(t,2)}}}function tl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function pt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ae(t.kb,t);n||(n=new Et("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||ws(n,"https"),Ks(n)),am(n.toString(),s)}else De(2);t.G=0,t.l&&t.l.va(e),nl(t),Xu(t)}k.kb=function(t){t?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function nl(t){if(t.G=0,t.la=[],t.l){const e=$u(t.h);(e.length!=0||t.i.length!=0)&&(Wo(t.la,e),Wo(t.la,t.i),t.h.i.length=0,Er(t.i),t.i.length=0),t.l.ua()}}function sl(t,e,n){var s=n instanceof Et?We(n):new Et(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Es(s,s.m);else{var i=V.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Et(null,void 0);s&&ws(r,s),e&&(r.g=e),i&&Es(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ee(s,n,e),ee(s,"VER",t.ma),Vn(t,s),s}function il(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new te(new On({jb:!0})):new te(t.ra),e.Ka(t.H),e}function rl(){}k=rl.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function Ts(){if(qt&&!(10<=Number(Df)))throw Error("Environmental error: no available transport.")}Ts.prototype.g=function(t,e){return new Le(t,e)};function Le(t,e){me.call(this),this.g=new Wu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ps(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ps(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xt(this)}ve(Le,me);Le.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;De(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=sl(t,null,t.V),Ws(t)};Le.prototype.close=function(){Vr(this.g)};Le.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kr(t),t=n);e.i.push(new sm(e.ab++,t)),e.G==3&&Ws(e)};Le.prototype.M=function(){this.g.l=null,delete this.j,Vr(this.g),delete this.g,Le.X.M.call(this)};function ol(t){Nr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ve(ol,Nr);function al(){Rr.call(this),this.status=1}ve(al,Rr);function Xt(t){this.g=t}ve(Xt,rl);Xt.prototype.xa=function(){ye(this.g,"a")};Xt.prototype.wa=function(t){ye(this.g,new ol(t))};Xt.prototype.va=function(t){ye(this.g,new al)};Xt.prototype.ua=function(){ye(this.g,"b")};Ts.prototype.createWebChannel=Ts.prototype.g;Le.prototype.send=Le.prototype.u;Le.prototype.open=Le.prototype.m;Le.prototype.close=Le.prototype.close;$s.NO_ERROR=0;$s.TIMEOUT=8;$s.HTTP_ERROR=6;Au.COMPLETE="complete";ku.EventType=Rn;Rn.OPEN="a";Rn.CLOSE="b";Rn.ERROR="c";Rn.MESSAGE="d";me.prototype.listen=me.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var fm=function(){return new Ts},mm=function(){return Us()},Ri=$s,gm=Au,pm=It,aa={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ym=On,ts=ku,vm=te;const ua="@firebase/firestore";/**
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
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let Yt="9.17.1";/**
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
 */const Ct=new eu("@firebase/firestore");function la(){return Ct.logLevel}function D(t,...e){if(Ct.logLevel<=Q.DEBUG){const n=e.map(Br);Ct.debug(`Firestore (${Yt}): ${t}`,...n)}}function Xe(t,...e){if(Ct.logLevel<=Q.ERROR){const n=e.map(Br);Ct.error(`Firestore (${Yt}): ${t}`,...n)}}function nr(t,...e){if(Ct.logLevel<=Q.WARN){const n=e.map(Br);Ct.warn(`Firestore (${Yt}): ${t}`,...n)}}function Br(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${Yt}) INTERNAL ASSERTION FAILED: `+t;throw Xe(e),new Error(e)}function Y(t,e){t||O()}function P(t,e){return t}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ul{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class Em{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bm{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Y(typeof s.accessToken=="string"),new ul(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ce(e)}}class Tm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Cm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Tm(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Im{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new Sm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Am(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ll{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Am(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function W(t,e){return t<e?-1:t>e?1:0}function Pt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Sn{constructor(e,n,s){n===void 0?n=0:n>e.length&&O(),s===void 0?s=e.length-n:s>e.length-n&&O(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends Sn{construct(e,n,s){return new Z(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Sn{construct(e,n,s){return new Ie(e,n,s)}static isValidIdentifier(e){return km.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
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
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(Z.fromString(e))}static fromName(e){return new R(Z.fromString(e).popFirst(5))}static empty(){return new R(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new Z(e.slice()))}}function _m(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new ue(n+1,0):new ue(n,s));return new st(i,R.empty(),e)}function Dm(t){return new st(t.readTime,t.key,-1)}class st{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new st(q.min(),R.empty(),-1)}static max(){return new st(q.max(),R.empty(),-1)}}function xm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
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
 */const Nm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qn(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Nm)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Pn(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ur{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ur.at=-1;/**
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
 */class Lm{constructor(e,n,s,i,r,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class In{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new In("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof In&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ca(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function At(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Xs(t){return t==null}function Cs(t){return t===0&&1/t==-1/0}function Mm(t){return typeof t=="number"&&Number.isInteger(t)&&!Cs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _e(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new _e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const Om=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function it(t){if(Y(!!t),typeof t=="string"){let e=0;const n=Om.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:re(t.seconds),nanos:re(t.nanos)}}function re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bt(t){return typeof t=="string"?_e.fromBase64String(t):_e.fromUint8Array(t)}/**
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
 */function hl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dl(t){const e=t.mapValue.fields.__previous_value__;return hl(e)?dl(e):e}function An(t){const e=it(t.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */const ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hl(t)?4:Fm(t)?9007199254740991:10:O()}function Ke(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return An(t).isEqual(An(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=it(s.timestampValue),o=it(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=re(s.doubleValue),o=re(i.doubleValue);return r===o?Cs(r)===Cs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Pt(t.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ca(r)!==ca(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ke(r[a],o[a])))return!1;return!0}(t,e);default:return O()}}function kn(t,e){return(t.values||[]).find(n=>Ke(n,e))!==void 0}function Ut(t,e){if(t===e)return 0;const n=St(t),s=St(e);if(n!==s)return W(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=re(i.integerValue||i.doubleValue),a=re(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ha(t.timestampValue,e.timestampValue);case 4:return ha(An(t),An(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=W(o[u],a[u]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=W(re(i.latitude),re(r.latitude));return o!==0?o:W(re(i.longitude),re(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ut(o[u],a[u]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ns.mapValue&&r===ns.mapValue)return 0;if(i===ns.mapValue)return 1;if(r===ns.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=W(a[c],l[c]);if(h!==0)return h;const f=Ut(o[a[c]],u[l[c]]);if(f!==0)return f}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function ha(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=it(t),s=it(e),i=W(n.seconds,s.seconds);return i!==0?i:W(n.nanos,s.nanos)}function $t(t){return sr(t)}function sr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=it(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=sr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${sr(s.fields[a])}`;return r+"}"}(t.mapValue):O();var e,n}function da(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ir(t){return!!t&&"integerValue"in t}function $r(t){return!!t&&"arrayValue"in t}function fa(t){return!!t&&"nullValue"in t}function ma(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function as(t){return!!t&&"mapValue"in t}function hn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return At(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ss{constructor(e,n){this.position=e,this.inclusive=n}}function ga(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=R.comparator(R.fromName(o.referenceValue),n.key):s=Ut(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function pa(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ke(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fl{}class oe extends fl{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qm(e,n,s):n==="array-contains"?new Um(e,s):n==="in"?new $m(e,s):n==="not-in"?new jm(e,s):n==="array-contains-any"?new Hm(e,s):new oe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Pm(e,s):new Bm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ut(n,this.value)):n!==null&&St(this.value)===St(n)&&this.matchesComparison(Ut(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pe extends fl{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pe(e,n)}matches(e){return ml(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ml(t){return t.op==="and"}function gl(t){return Vm(t)&&ml(t)}function Vm(t){for(const e of t.filters)if(e instanceof Pe)return!1;return!0}function rr(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+$t(t.value);if(gl(t))return t.filters.map(e=>rr(e)).join(",");{const e=t.filters.map(n=>rr(n)).join(",");return`${t.op}(${e})`}}function pl(t,e){return t instanceof oe?function(n,s){return s instanceof oe&&n.op===s.op&&n.field.isEqual(s.field)&&Ke(n.value,s.value)}(t,e):t instanceof Pe?function(n,s){return s instanceof Pe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&pl(r,s.filters[o]),!0):!1}(t,e):void O()}function yl(t){return t instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${$t(e.value)}`}(t):t instanceof Pe?function(e){return e.op.toString()+" {"+e.getFilters().map(yl).join(" ,")+"}"}(t):"Filter"}class qm extends oe{constructor(e,n,s){super(e,n,s),this.key=R.fromName(s.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pm extends oe{constructor(e,n){super(e,"in",n),this.keys=vl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bm extends oe{constructor(e,n){super(e,"not-in",n),this.keys=vl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>R.fromName(s.referenceValue))}class Um extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $r(n)&&kn(n.arrayValue,this.value)}}class $m extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&kn(this.value.arrayValue,n)}}class jm extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!kn(this.value.arrayValue,n)}}class Hm extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$r(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>kn(this.value.arrayValue,s))}}/**
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
 */class dn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Km(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ce{constructor(e,n){this.comparator=e,this.root=n||pe.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ss(this.root,e,this.comparator,!0)}}class ss{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:pe.RED,this.left=i!=null?i:pe.EMPTY,this.right=r!=null?r:pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new pe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ya(this.data.getIterator())}getIteratorFrom(e){return new ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Re{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Re([])}unionWith(e){let n=new le(Ie.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Re(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!as(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hn(n)}setAll(e){let n=Ie.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=hn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());as(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];as(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){At(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ne(hn(this.value))}}function wl(t){const e=[];return At(t.fields,(n,s)=>{const i=new Ie([n]);if(as(s)){const r=wl(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Re(e)}/**
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
 */class Se{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Se(e,0,q.min(),q.min(),q.min(),Ne.empty(),0)}static newFoundDocument(e,n,s,i){return new Se(e,1,n,q.min(),s,i,0)}static newNoDocument(e,n){return new Se(e,2,n,q.min(),q.min(),Ne.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,q.min(),q.min(),Ne.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function va(t,e=null,n=[],s=[],i=null,r=null,o=null){return new zm(t,e,n,s,i,r,o)}function jr(t){const e=P(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>rr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$t(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$t(s)).join(",")),e.ft=n}return e.ft}function Hr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Km(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pa(t.startAt,e.startAt)&&pa(t.endAt,e.endAt)}function or(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Gm(t,e,n,s,i,r,o,a){return new Bn(t,e,n,s,i,r,o,a)}function Ys(t){return new Bn(t)}function wa(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function El(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function bl(t){return t.collectionGroup!==null}function Ot(t){const e=P(t);if(e.dt===null){e.dt=[];const n=Kr(e),s=El(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new dn(n)),e.dt.push(new dn(Ie.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new dn(Ie.keyField(),r))}}}return e.dt}function Ye(t){const e=P(t);if(!e._t)if(e.limitType==="F")e._t=va(e.path,e.collectionGroup,Ot(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ot(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new dn(r.field,o))}const s=e.endAt?new Ss(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ss(e.startAt.position,e.startAt.inclusive):null;e._t=va(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function ar(t,e){e.getFirstInequalityField(),Kr(t);const n=t.filters.concat([e]);return new Bn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ur(t,e,n){return new Bn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Js(t,e){return Hr(Ye(t),Ye(e))&&t.limitType===e.limitType}function Tl(t){return`${jr(Ye(t))}|lt:${t.limitType}`}function lr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>yl(s)).join(", ")}]`),Xs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$t(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$t(s)).join(",")),`Target(${n})`}(Ye(t))}; limitType=${t.limitType})`}function Zs(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):R.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ot(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ga(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ot(n),s)||n.endAt&&!function(i,r,o){const a=ga(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ot(n),s))}(t,e)}function Qm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cl(t){return(e,n)=>{let s=!1;for(const i of Ot(t)){const r=Wm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Wm(t,e,n){const s=t.field.isKeyField()?R.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ut(a,u):O()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
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
 */function Sl(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cs(e)?"-0":e}}function Il(t){return{integerValue:""+t}}function Xm(t,e){return Mm(e)?Il(e):Sl(t,e)}/**
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
 */class ei{constructor(){this._=void 0}}function Ym(t,e,n){return t instanceof Is?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof jt?kl(t,e):t instanceof Ht?_l(t,e):function(s,i){const r=Al(s,i),o=Ea(r)+Ea(s.gt);return ir(r)&&ir(s.gt)?Il(o):Sl(s.yt,o)}(t,e)}function Jm(t,e,n){return t instanceof jt?kl(t,e):t instanceof Ht?_l(t,e):n}function Al(t,e){return t instanceof As?ir(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Is extends ei{}class jt extends ei{constructor(e){super(),this.elements=e}}function kl(t,e){const n=Dl(e);for(const s of t.elements)n.some(i=>Ke(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ht extends ei{constructor(e){super(),this.elements=e}}function _l(t,e){let n=Dl(e);for(const s of t.elements)n=n.filter(i=>!Ke(i,s));return{arrayValue:{values:n}}}class As extends ei{constructor(e,n){super(),this.yt=e,this.gt=n}}function Ea(t){return re(t.integerValue||t.doubleValue)}function Dl(t){return $r(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class xl{constructor(e,n){this.field=e,this.transform=n}}function Zm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof jt&&s instanceof jt||n instanceof Ht&&s instanceof Ht?Pt(n.elements,s.elements,Ke):n instanceof As&&s instanceof As?Ke(n.gt,s.gt):n instanceof Is&&s instanceof Is}(t.transform,e.transform)}class eg{constructor(e,n){this.version=e,this.transformResults=n}}class qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ti{}function Nl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zr(t.key,qe.none()):new Un(t.key,t.data,qe.none());{const n=t.data,s=Ne.empty();let i=new le(Ie.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ct(t.key,s,new Re(i.toArray()),qe.none())}}function tg(t,e,n){t instanceof Un?function(s,i,r){const o=s.value.clone(),a=Ta(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ct?function(s,i,r){if(!us(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ta(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Rl(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function fn(t,e,n,s){return t instanceof Un?function(i,r,o,a){if(!us(i.precondition,r))return o;const u=i.value.clone(),l=Ca(i.fieldTransforms,a,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof ct?function(i,r,o,a){if(!us(i.precondition,r))return o;const u=Ca(i.fieldTransforms,a,r),l=r.data;return l.setAll(Rl(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(i,r,o){return us(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function ng(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Al(s.transform,i||null);r!=null&&(n===null&&(n=Ne.empty()),n.set(s.field,r))}return n||null}function ba(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pt(n,s,(i,r)=>Zm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Un extends ti{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ct extends ti{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Rl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ta(t,e,n){const s=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Jm(o,a,n[i]))}return s}function Ca(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ym(r,o,e))}return s}class zr extends ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sg extends ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ig{constructor(e){this.count=e}}/**
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
 */var ie,K;function rg(t){switch(t){default:return O();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Ll(t){if(t===void 0)return Xe("GRPC error has no .code"),m.UNKNOWN;switch(t){case ie.OK:return m.OK;case ie.CANCELLED:return m.CANCELLED;case ie.UNKNOWN:return m.UNKNOWN;case ie.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ie.INTERNAL:return m.INTERNAL;case ie.UNAVAILABLE:return m.UNAVAILABLE;case ie.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ie.NOT_FOUND:return m.NOT_FOUND;case ie.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ie.ABORTED:return m.ABORTED;case ie.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ie.DATA_LOSS:return m.DATA_LOSS;default:return O()}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Jt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){At(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return cl(this.inner)}size(){return this.innerSize}}/**
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
 */const og=new ce(R.comparator);function Je(){return og}const Ml=new ce(R.comparator);function an(...t){let e=Ml;for(const n of t)e=e.insert(n.key,n);return e}function Ol(t){let e=Ml;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function yt(){return mn()}function Fl(){return mn()}function mn(){return new Jt(t=>t.toString(),(t,e)=>t.isEqual(e))}const ag=new ce(R.comparator),ug=new le(R.comparator);function j(...t){let e=ug;for(const n of t)e=e.add(n);return e}const lg=new le(W);function Vl(){return lg}/**
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
 */class ni{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,$n.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ni(q.min(),i,Vl(),Je(),j())}}class $n{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $n(s,n,j(),j(),j())}}/**
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
 */class ls{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class ql{constructor(e,n){this.targetId=e,this.Et=n}}class Pl{constructor(e,n,s=_e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Sa{constructor(){this.At=0,this.Rt=Aa(),this.bt=_e.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=j(),n=j(),s=j();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:O()}}),new $n(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Aa()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class cg{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Je(),this.qt=Ia(),this.Ut=new le(W)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(or(r))if(s===0){const o=new R(r.path);this.Qt(n,o,Se.newNoDocument(o,q.min()))}else Y(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&or(a.target)){const u=new R(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Se.newNoDocument(u,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=j();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new ni(e,n,this.Ut,this.Lt,s);return this.Lt=Je(),this.qt=Ia(),this.Ut=new le(W),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Sa,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new le(W),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Sa),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Ia(){return new ce(R.comparator)}function Aa(){return new ce(R.comparator)}/**
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
 */const hg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fg=(()=>({and:"AND",or:"OR"}))();class mg{constructor(e,n){this.databaseId=e,this.wt=n}}function ks(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bl(t,e){return t.wt?e.toBase64():e.toUint8Array()}function gg(t,e){return ks(t,e.toTimestamp())}function je(t){return Y(!!t),q.fromTimestamp(function(e){const n=it(e);return new ue(n.seconds,n.nanos)}(t))}function Gr(t,e){return function(n){return new Z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ul(t){const e=Z.fromString(t);return Y(Kl(e)),e}function cr(t,e){return Gr(t.databaseId,e.path)}function Li(t,e){const n=Ul(e);if(n.get(1)!==t.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R($l(n))}function hr(t,e){return Gr(t.databaseId,e)}function pg(t){const e=Ul(t);return e.length===4?Z.emptyPath():$l(e)}function dr(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $l(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ka(t,e,n){return{name:cr(t,e),fields:n.value.mapValue.fields}}function yg(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,l){return u.wt?(Y(l===void 0||typeof l=="string"),_e.fromBase64String(l||"")):(Y(l===void 0||l instanceof Uint8Array),_e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:Ll(u.code);return new I(l,u.message||"")}(o);n=new Pl(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Li(t,s.document.name),r=je(s.document.updateTime),o=s.document.createTime?je(s.document.createTime):q.min(),a=new Ne({mapValue:{fields:s.document.fields}}),u=Se.newFoundDocument(i,r,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new ls(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Li(t,s.document),r=s.readTime?je(s.readTime):q.min(),o=Se.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ls([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Li(t,s.document),r=s.removedTargetIds||[];n=new ls([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ig(i),o=s.targetId;n=new ql(o,r)}}return n}function vg(t,e){let n;if(e instanceof Un)n={update:ka(t,e.key,e.value)};else if(e instanceof zr)n={delete:cr(t,e.key)};else if(e instanceof ct)n={update:ka(t,e.key,e.data),updateMask:kg(e.fieldMask)};else{if(!(e instanceof sg))return O();n={verify:cr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Is)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ht)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof As)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw O()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function wg(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?je(s.updateTime):je(i);return r.isEqual(q.min())&&(r=je(i)),new eg(r,s.transformResults||[])}(n,e))):[]}function Eg(t,e){return{documents:[hr(t,e.path)]}}function bg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=hr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return Hl(Pe.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Nt(c.field),direction:Sg(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,l){return u.wt||Xs(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Tg(t){let e=pg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Y(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=function(c){const h=jl(c);return h instanceof Pe&&gl(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new dn(Rt(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Xs(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,f=c.values||[];return new Ss(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,f=c.values||[];return new Ss(f,h)}(n.endAt)),Gm(e,i,o,r,a,"F",u,l)}function Cg(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function jl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rt(e.unaryFilter.field);return oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Rt(e.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rt(e.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rt(e.unaryFilter.field);return oe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return oe.create(Rt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pe.create(e.compositeFilter.filters.map(n=>jl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function Sg(t){return hg[t]}function Ig(t){return dg[t]}function Ag(t){return fg[t]}function Nt(t){return{fieldPath:t.canonicalString()}}function Rt(t){return Ie.fromServerFormat(t.fieldPath)}function Hl(t){return t instanceof oe?function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NAN"}};if(fa(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NOT_NAN"}};if(fa(e.value))return{unaryFilter:{field:Nt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(e.field),op:Ig(e.op),value:e.value}}}(t):t instanceof Pe?function(e){const n=e.getFilters().map(s=>Hl(s));return n.length===1?n[0]:{compositeFilter:{op:Ag(e.op),filters:n}}}(t):O()}function kg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _g{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&tg(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Fl();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Nl(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Pt(this.mutations,e.mutations,(n,s)=>ba(n,s))&&Pt(this.baseMutations,e.baseMutations,(n,s)=>ba(n,s))}}class Qr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Y(e.mutations.length===s.length);let i=ag;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Qr(e,n,s,i)}}/**
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
 */class Dg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bt{constructor(e,n,s,i,r=q.min(),o=q.min(),a=_e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class xg{constructor(e){this.ie=e}}function Ng(t){const e=Tg({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ur(e,e.limit,"L"):e}/**
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
 */class Rg{constructor(){this.Je=new Lg}addToCollectionParentIndex(e,n){return this.Je.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(st.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(st.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class Lg{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new le(Z.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new le(Z.comparator)).toArray()}}/**
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
 */class Kt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Kt(0)}static vn(){return new Kt(-1)}}/**
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
 */class Mg{constructor(){this.changes=new Jt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Og{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Fg{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&fn(s.mutation,i,Re.empty(),ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const i=yt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=an();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=yt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Je();const o=mn(),a=mn();return n.forEach((u,l)=>{const c=s.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof ct)?r=r.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),fn(c.mutation,l,c.mutation.getFieldMask(),ue.now())):o.set(l.key,Re.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Og(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=mn();let i=new ce((o,a)=>o-a),r=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||Re.empty();c=a.applyToLocalView(l,c),s.set(u,c);const h=(i.get(a.batchId)||j()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Fl();c.forEach(f=>{if(!r.has(f)){const d=Nl(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return R.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bl(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(yt());let a=-1,u=r;return o.next(l=>y.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(c)?y.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,u,l,j())).next(c=>({batchId:a,changes:Ol(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(s=>{let i=an();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=an();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const u=function(l,c){return new Bn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(l=>{l.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,u)=>{const l=u.getKey();r.get(l)===null&&(r=r.insert(l,Se.newInvalidDocument(l)))});let o=an();return r.forEach((a,u)=>{const l=i.get(a);l!==void 0&&fn(l.mutation,u,Re.empty(),ue.now()),Zs(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class Vg{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:je(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Ng(s.bundledQuery),readTime:je(s.readTime)}}(n)),y.resolve()}}/**
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
 */class qg{constructor(){this.overlays=new ce(R.comparator),this.es=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=yt();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=yt(),r=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ce((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=r.get(l.largestBatchId);c===null&&(c=yt(),r=r.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=yt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return y.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Dg(n,s));let r=this.es.get(n);r===void 0&&(r=j(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class Wr{constructor(){this.ns=new le(de.ss),this.rs=new le(de.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new de(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new de(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new R(new Z([])),s=new de(n,e),i=new de(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new R(new Z([])),s=new de(n,e),i=new de(n,e+1);let r=j();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new de(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class de{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return R.comparator(e.key,n.key)||W(e._s,n._s)}static os(e,n){return W(e._s,n._s)||R.comparator(e.key,n.key)}}/**
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
 */class Pg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new le(de.ss)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _g(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new de(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new de(n,0),i=new de(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new le(W);return n.forEach(i=>{const r=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),y.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;R.isDocumentKey(r)||(r=r.child(""));const o=new de(new R(r),0);let a=new le(W);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),y.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return y.forEach(n.mutations,i=>{const r=new de(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new de(n,0),i=this.gs.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Bg{constructor(e){this.Es=e,this.docs=new ce(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let s=Je();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Se.newInvalidDocument(i))}),y.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Je();const o=n.path,a=new R(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||xm(Dm(c),s)<=0||(i.has(c.key)||Zs(n,c))&&(r=r.insert(c.key,c.mutableCopy()))}return y.resolve(r)}getAllFromCollectionGroup(e,n,s,i){O()}As(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Ug(this)}getSize(e){return y.resolve(this.size)}}class Ug extends Mg{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class $g{constructor(e){this.persistence=e,this.Rs=new Jt(n=>jr(n),Hr),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wr,this.targetCount=0,this.vs=Kt.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),y.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Kt(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Dn(n),y.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.Ps.containsKey(n))}}/**
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
 */class jg{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ur(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new $g(this),this.indexManager=new Rg,this.remoteDocumentCache=function(s){return new Bg(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new xg(n),this.Ns=new Vg(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Pg(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const i=new Hg(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return y.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Hg extends Rm{constructor(e){super(),this.currentSequenceNumber=e}}class Xr{constructor(e){this.persistence=e,this.Fs=new Wr,this.$s=null}static Bs(e){return new Xr(e)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),y.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Ls,s=>{const i=R.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return y.or([()=>y.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Yr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=j(),i=j();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Yr(e,n.fromCache,s,i)}}/**
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
 */class Kg{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(wa(n))return y.resolve(null);let s=Ye(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ur(n,null,"F"),s=Ye(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=j(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,ur(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,s,i){return wa(n)||i.isEqual(q.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(la()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(n)),this.Bi(e,o,n,_m(i,-1)))})}Fi(e,n){let s=new le(Cl(e));return n.forEach((i,r)=>{Zs(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return la()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",lr(n)),this.Ni.getDocumentsMatchingQuery(e,n,st.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class zg{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new ce(W),this.Ui=new Jt(r=>jr(r),Hr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fg(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Gg(t,e,n,s){return new zg(t,e,n,s)}async function zl(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=j();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of r){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Qg(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(g=>{const w=u.docVersions.get(d);Y(w!==null),g.version.compareTo(w)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Gl(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Wg(t,e){const n=P(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,c.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(_e.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,s)),i=i.insert(h,d),function(g,w,E){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,d,c)&&a.push(n.Cs.updateTargetData(r,d))});let u=Je(),l=j();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(Xg(r,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!s.isEqual(q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.qi=i,r))}function Xg(t,e,n){let s=j(),i=j();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Je();return n.forEach((a,u)=>{const l=r.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function Yg(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Jg(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new bt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function fr(t,e,n){const s=P(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pn(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function _a(t,e,n){const s=P(t);let i=q.min(),r=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=P(a),h=c.Ui.get(l);return h!==void 0?y.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(s,o,Ye(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?r:j())).next(a=>(Zg(s,Qm(e),a),{documents:a,Hi:r})))}function Zg(t,e,n){let s=t.Ki.get(e)||q.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Da{constructor(){this.activeTargetIds=Vl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ep{constructor(){this.Lr=new Da,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Da,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tp{Ur(e){}shutdown(){}}/**
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
 */class xa{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const np={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sp{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class ip extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);D("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(u=>(D("RestConnection","Received: ",u),u),u=>{throw nr("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=np[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new vm;a.setWithCredentials(!0),a.listenOnce(gm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ri.NO_ERROR:const l=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Ri.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(w)>=0?w:m.UNKNOWN}(f.status);o(new I(d,f.message))}else o(new I(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(m.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=fm(),o=mm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ym({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");D("Connection","Creating WebChannel: "+u,a);const l=r.createWebChannel(u,a);let c=!1,h=!1;const f=new sp({Hr:g=>{h?D("Connection","Not sending because WebChannel is closed:",g):(c||(D("Connection","Opening WebChannel transport."),l.open(),c=!0),D("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),d=(g,w,E)=>{g.listen(w,F=>{try{E(F)}catch(S){setTimeout(()=>{throw S},0)}})};return d(l,ts.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),d(l,ts.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),f.io())}),d(l,ts.EventType.ERROR,g=>{h||(h=!0,nr("Connection","WebChannel transport errored:",g),f.io(new I(m.UNAVAILABLE,"The operation could not be completed")))}),d(l,ts.EventType.MESSAGE,g=>{var w;if(!h){const E=g.data[0];Y(!!E);const F=E,S=F.error||((w=F[0])===null||w===void 0?void 0:w.error);if(S){D("Connection","WebChannel received error:",S);const A=S.status;let B=function(p){const b=ie[p];if(b!==void 0)return Ll(b)}(A),H=S.message;B===void 0&&(B=m.INTERNAL,H="Unknown error status: "+A+" with message "+S.message),h=!0,f.io(new I(B,H)),l.close()}else D("Connection","WebChannel received:",E),f.ro(E)}}),d(o,pm.STAT_EVENT,g=>{g.stat===aa.PROXY?D("Connection","Detected buffering proxy"):g.stat===aa.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Mi(){return typeof document!="undefined"?document:null}/**
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
 */function si(t){return new mg(t,!0)}class Ql{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Wl{constructor(e,n,s,i,r,o,a,u){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ql(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new I(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rp extends Wl{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=yg(this.yt,e),s=function(i){if(!("targetChange"in i))return q.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?q.min():r.readTime?je(r.readTime):q.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=dr(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=or(a)?{documents:Eg(i,a)}:{query:bg(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Bl(i,r.resumeToken):r.snapshotVersion.compareTo(q.min())>0&&(o.readTime=ks(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Cg(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=dr(this.yt),n.removeTarget=e,this.Bo(n)}}class op extends Wl{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=wg(e.writeResults,e.commitTime),s=je(e.commitTime);return this.listener.Zo(s,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=dr(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>vg(this.yt,s))};this.Bo(n)}}/**
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
 */class ap extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(m.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class up{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Xe(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class lp{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{kt(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=P(a);u._u.add(4),await jn(u),u.gu.set("Unknown"),u._u.delete(4),await ii(u)}(this))})}),this.gu=new up(s,i)}}async function ii(t){if(kt(t))for(const e of t.wu)await e(!0)}async function jn(t){for(const e of t.wu)await e(!1)}function Xl(t,e){const n=P(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),eo(n)?Zr(n):Zt(n).ko()&&Jr(n,e))}function Yl(t,e){const n=P(t),s=Zt(n);n.du.delete(e),s.ko()&&Jl(n,e),n.du.size===0&&(s.ko()?s.Fo():kt(n)&&n.gu.set("Unknown"))}function Jr(t,e){t.yu.Ot(e.targetId),Zt(t).zo(e)}function Jl(t,e){t.yu.Ot(e),Zt(t).Ho(e)}function Zr(t){t.yu=new cg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Zt(t).start(),t.gu.uu()}function eo(t){return kt(t)&&!Zt(t).No()&&t.du.size>0}function kt(t){return P(t)._u.size===0}function Zl(t){t.yu=void 0}async function cp(t){t.du.forEach((e,n)=>{Jr(t,e)})}async function hp(t,e){Zl(t),eo(t)?(t.gu.hu(e),Zr(t)):t.gu.set("Unknown")}async function dp(t,e,n){if(t.gu.set("Online"),e instanceof Pl&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _s(t,s)}else if(e instanceof ls?t.yu.Kt(e):e instanceof ql?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(q.min()))try{const s=await Gl(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(_e.EMPTY_BYTE_STRING,u.snapshotVersion)),Jl(i,a);const l=new bt(u.target,a,1,u.sequenceNumber);Jr(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){D("RemoteStore","Failed to raise snapshot:",s),await _s(t,s)}}async function _s(t,e,n){if(!Pn(e))throw e;t._u.add(1),await jn(t),t.gu.set("Offline"),n||(n=()=>Gl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ii(t)})}function ec(t,e){return e().catch(n=>_s(t,n,e))}async function ri(t){const e=P(t),n=rt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;fp(e);)try{const i=await Yg(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,mp(e,i)}catch(i){await _s(e,i)}tc(e)&&nc(e)}function fp(t){return kt(t)&&t.fu.length<10}function mp(t,e){t.fu.push(e);const n=rt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function tc(t){return kt(t)&&!rt(t).No()&&t.fu.length>0}function nc(t){rt(t).start()}async function gp(t){rt(t).eu()}async function pp(t){const e=rt(t);for(const n of t.fu)e.Xo(n.mutations)}async function yp(t,e,n){const s=t.fu.shift(),i=Qr.from(s,e,n);await ec(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ri(t)}async function vp(t,e){e&&rt(t).Yo&&await async function(n,s){if(i=s.code,rg(i)&&i!==m.ABORTED){const r=n.fu.shift();rt(n).Mo(),await ec(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ri(n)}var i}(t,e),tc(t)&&nc(t)}async function Na(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=kt(n);n._u.add(3),await jn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ii(n)}async function wp(t,e){const n=P(t);e?(n._u.delete(2),await ii(n)):e||(n._u.add(2),await jn(n),n.gu.set("Unknown"))}function Zt(t){return t.pu||(t.pu=function(e,n,s){const i=P(e);return i.su(),new rp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:cp.bind(null,t),Zr:hp.bind(null,t),Wo:dp.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),eo(t)?Zr(t):t.gu.set("Unknown")):(await t.pu.stop(),Zl(t))})),t.pu}function rt(t){return t.Iu||(t.Iu=function(e,n,s){const i=P(e);return i.su(),new op(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:gp.bind(null,t),Zr:vp.bind(null,t),tu:pp.bind(null,t),Zo:yp.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ri(t)):(await t.Iu.stop(),t.fu.length>0&&(D("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class to{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new to(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function no(t,e){if(Xe("AsyncQueue",`${e}: ${t}`),Pn(t))return new I(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ft{constructor(e){this.comparator=e?(n,s)=>e(n,s)||R.comparator(n.key,s.key):(n,s)=>R.comparator(n.key,s.key),this.keyedMap=an(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Ft(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ft;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ra{constructor(){this.Tu=new ce(R.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):O():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class zt{constructor(e,n,s,i,r,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zt(e,n,Ft.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Js(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Ep{constructor(){this.Au=void 0,this.listeners=[]}}class bp{constructor(){this.queries=new Jt(e=>Tl(e),Js),this.onlineState="Unknown",this.Ru=new Set}}async function so(t,e){const n=P(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ep),i)try{r.Au=await n.onListen(s)}catch(o){const a=no(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&ro(n)}async function io(t,e){const n=P(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Tp(t,e){const n=P(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&ro(n)}function Cp(t,e,n){const s=P(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ro(t){t.Ru.forEach(e=>{e.next()})}class oo{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new zt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class sc{constructor(e){this.key=e}}class ic{constructor(e){this.key=e}}class Sp{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=j(),this.mutatedKeys=j(),this.Gu=Cl(e),this.Qu=new Ft(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Ra,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),d=Zs(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),w=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let E=!1;f&&d?f.data.isEqual(d.data)?g!==w&&(s.track({type:3,doc:d}),E=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),E=!0,(u&&this.Gu(d,u)>0||l&&this.Gu(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),E=!0):f&&!d&&(s.track({type:1,doc:f}),E=!0,(u||l)&&(a=!0)),E&&(d?(o=o.add(d),r=w?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,c)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return d(h)-d(f)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new zt(this.query,e.Qu,i,r,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ra,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=j(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ic(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new sc(s))}),n}tc(e){this.qu=e.Hi,this.Ku=j();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return zt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Ip{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ap{constructor(e){this.key=e,this.nc=!1}}class kp{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Jt(a=>Tl(a),Js),this.rc=new Map,this.oc=new Set,this.uc=new ce(R.comparator),this.cc=new Map,this.ac=new Wr,this.hc={},this.lc=new Map,this.fc=Kt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function _p(t,e){const n=qp(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Jg(n.localStore,Ye(e));n.isPrimaryClient&&Xl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Dp(n,e,s,a==="current",o.resumeToken)}return i}async function Dp(t,e,n,s,i){t._c=(h,f,d)=>async function(g,w,E,F){let S=w.view.Wu(E);S.$i&&(S=await _a(g.localStore,w.query,!1).then(({documents:H})=>w.view.Wu(H,S)));const A=F&&F.targetChanges.get(w.targetId),B=w.view.applyChanges(S,g.isPrimaryClient,A);return Ma(g,w.targetId,B.Xu),B.snapshot}(t,h,f,d);const r=await _a(t.localStore,e,!0),o=new Sp(e,r.Hi),a=o.Wu(r.documents),u=$n.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Ma(t,n,l.Xu);const c=new Ip(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function xp(t,e){const n=P(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Js(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Yl(n.remoteStore,s.targetId),mr(n,s.targetId)}).catch(qn)):(mr(n,s.targetId),await fr(n.localStore,s.targetId,!0))}async function Np(t,e,n){const s=Pp(t);try{const i=await function(r,o){const a=P(r),u=ue.now(),l=o.reduce((f,d)=>f.add(d.key),j());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Je(),g=j();return a.Gi.getEntries(f,l).next(w=>{d=w,d.forEach((E,F)=>{F.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(w=>{c=w;const E=[];for(const F of o){const S=ng(F,c.get(F.key).overlayedDocument);S!=null&&E.push(new ct(F.key,S,wl(S.value.mapValue),qe.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(f,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Ol(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new ce(W)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Hn(s,i.changes),await ri(s.remoteStore)}catch(i){const r=no(i,"Failed to persist write");n.reject(r)}}async function rc(t,e){const n=P(t);try{const s=await Wg(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Y(o.nc):i.removedDocuments.size>0&&(Y(o.nc),o.nc=!1))}),await Hn(n,s,e)}catch(s){await qn(s)}}function La(t,e,n){const s=P(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=P(r);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&ro(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Rp(t,e,n){const s=P(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ce(R.comparator);o=o.insert(r,Se.newNoDocument(r,q.min()));const a=j().add(r),u=new ni(q.min(),new Map,new le(W),o,a);await rc(s,u),s.uc=s.uc.remove(r),s.cc.delete(e),ao(s)}else await fr(s.localStore,e,!1).then(()=>mr(s,e,n)).catch(qn)}async function Lp(t,e){const n=P(t),s=e.batch.batchId;try{const i=await Qg(n.localStore,e);ac(n,s,null),oc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hn(n,i)}catch(i){await qn(i)}}async function Mp(t,e,n){const s=P(t);try{const i=await function(r,o){const a=P(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(Y(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,e);ac(s,e,n),oc(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hn(s,i)}catch(i){await qn(i)}}function oc(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ac(t,e,n){const s=P(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function mr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||uc(t,s)})}function uc(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Yl(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ao(t))}function Ma(t,e,n){for(const s of n)s instanceof sc?(t.ac.addReference(s.key,e),Op(t,s)):s instanceof ic?(D("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||uc(t,s.key)):O()}function Op(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(D("SyncEngine","New document in limbo: "+n),t.oc.add(s),ao(t))}function ao(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new R(Z.fromString(e)),s=t.fc.next();t.cc.set(s,new Ap(n)),t.uc=t.uc.insert(n,s),Xl(t.remoteStore,new bt(Ye(Ys(n.path)),s,2,Ur.at))}}async function Hn(t,e,n){const s=P(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Yr.Ci(u.targetId,l);r.push(c)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const l=P(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>y.forEach(u,h=>y.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>y.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Pn(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const f=l.qi.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);l.qi=l.qi.insert(h,g)}}}(s.localStore,r))}async function Fp(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await zl(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new I(m.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hn(n,s.ji)}}function Vp(t,e){const n=P(t),s=n.cc.get(e);if(s&&s.nc)return j().add(s.key);{let i=j();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function qp(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rp.bind(null,e),e.sc.Wo=Tp.bind(null,e.eventManager),e.sc.wc=Cp.bind(null,e.eventManager),e}function Pp(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mp.bind(null,e),e}class Bp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=si(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Gg(this.persistence,new Kg,e.initialUser,this.yt)}yc(e){return new jg(Xr.Bs,this.yt)}gc(e){return new ep}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Up{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>La(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fp.bind(null,this.syncEngine),await wp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bp}createDatastore(e){const n=si(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ip(i));var i;return function(r,o,a,u){return new ap(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>La(this.syncEngine,a,0),o=xa.C()?new xa:new tp,new lp(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,u,l){const c=new kp(s,i,r,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await jn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function lc(t,e,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $p(t,e,n,s){if(e===!0&&s===!0)throw new I(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Oa(t){if(!R.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fa(t){if(R.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function Oe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oi(t);throw new I(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Va=new Map;class qa{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$p("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ai{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qa(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wm;switch(n.type){case"gapi":const s=n.client;return new Cm(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Va.get(e);n&&(D("ComponentProvider","Removing Datastore"),Va.delete(e),n.terminate())}(this),Promise.resolve()}}function jp(t,e,n,s={}){var i;const r=(t=Oe(t,ai))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&nr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ce.MOCK_USER;else{o=ed(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ce(u)}t._authCredentials=new Em(new ul(o,a))}}/**
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
 */class xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class _t{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _t(this.firestore,e,this._query)}}class nt extends _t{constructor(e,n,s){super(e,n,Ys(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new R(e))}withConverter(e){return new nt(this.firestore,e,this._path)}}function xt(t,e,...n){if(t=He(t),lc("collection","path",e),t instanceof ai){const s=Z.fromString(e,...n);return Fa(s),new nt(t,null,s)}{if(!(t instanceof xe||t instanceof nt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Z.fromString(e,...n));return Fa(s),new nt(t.firestore,null,s)}}function un(t,e,...n){if(t=He(t),arguments.length===1&&(e=ll.R()),lc("doc","path",e),t instanceof ai){const s=Z.fromString(e,...n);return Oa(s),new xe(t,null,new R(s))}{if(!(t instanceof xe||t instanceof nt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Z.fromString(e,...n));return Oa(s),new xe(t.firestore,t instanceof nt?t.converter:null,new R(s))}}/**
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
 */class uo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Hp{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=ll.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{D("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(D("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=no(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Kp(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gp(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Na(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Na(e.remoteStore,r)),t.onlineComponents=e}async function Gp(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await Kp(t,new Bp)),t.offlineComponents}async function cc(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await zp(t,new Up)),t.onlineComponents}function Qp(t){return cc(t).then(e=>e.syncEngine)}async function Ds(t){const e=await cc(t),n=e.eventManager;return n.onListen=_p.bind(null,e.syncEngine),n.onUnlisten=xp.bind(null,e.syncEngine),n}function Wp(t,e,n={}){const s=new Qe;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new uo({next:h=>{r.enqueueAndForget(()=>io(i,c));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new I(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new oo(Ys(o.path),l,{includeMetadataChanges:!0,Nu:!0});return so(i,c)}(await Ds(t),t.asyncQueue,e,n,s)),s.promise}function Xp(t,e,n={}){const s=new Qe;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new uo({next:h=>{r.enqueueAndForget(()=>io(i,c)),h.fromCache&&a.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new oo(o,l,{includeMetadataChanges:!0,Nu:!0});return so(i,c)}(await Ds(t),t.asyncQueue,e,n,s)),s.promise}class Yp{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ql(this,"async_queue_retry"),this.Wc=()=>{const n=Mi();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Qe;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Pn(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Xe("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=to.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Pa(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ot extends ai{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Yp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hc(this),this._firestoreClient.terminate()}}function Jp(t,e){const n=typeof t=="object"?t:rf(),s=typeof t=="string"?t:e||"(default)",i=ef(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Yh("firestore");r&&jp(i,...r)}return i}function ui(t){return t._firestoreClient||hc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hc(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Lm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Hp(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(_e.fromBase64String(e))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class li{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kn{constructor(e){this._methodName=e}}/**
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
 */class lo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */const Zp=/^__.*__$/;class ey{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ct(e,this.data,this.fieldMask,n,this.fieldTransforms):new Un(e,this.data,n,this.fieldTransforms)}}class dc{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ct(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ci{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ci(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return xs(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(fc(this.sa)&&Zp.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ty{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||si(e)}da(e,n,s,i=!1){return new ci({sa:e,methodName:n,fa:s,path:Ie.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function co(t){const e=t._freezeSettings(),n=si(t._databaseId);return new ty(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ny(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);ho("Data must be an object, but it was:",o,s);const a=gc(s,o);let u,l;if(r.merge)u=new Re(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const f=gr(e,h,n);if(!o.contains(f))throw new I(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);yc(c,f)||c.push(f)}u=new Re(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new ey(new Ne(a),u,l)}class hi extends Kn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hi}}function mc(t,e,n){return new ci({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class sy extends Kn{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=mc(this,e,!0),s=this._a.map(r=>Dt(r,n)),i=new jt(s);return new xl(e.path,i)}isEqual(e){return this===e}}class iy extends Kn{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=mc(this,e,!0),s=this._a.map(r=>Dt(r,n)),i=new Ht(s);return new xl(e.path,i)}isEqual(e){return this===e}}function ry(t,e,n,s){const i=t.da(1,e,n);ho("Data must be an object, but it was:",i,s);const r=[],o=Ne.empty();At(s,(u,l)=>{const c=fo(e,u,n);l=He(l);const h=i.ca(c);if(l instanceof hi)r.push(c);else{const f=Dt(l,h);f!=null&&(r.push(c),o.set(c,f))}});const a=new Re(r);return new dc(o,a,i.fieldTransforms)}function oy(t,e,n,s,i,r){const o=t.da(1,e,n),a=[gr(e,s,n)],u=[i];if(r.length%2!=0)throw new I(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(gr(e,r[f])),u.push(r[f+1]);const l=[],c=Ne.empty();for(let f=a.length-1;f>=0;--f)if(!yc(l,a[f])){const d=a[f];let g=u[f];g=He(g);const w=o.ca(d);if(g instanceof hi)l.push(d);else{const E=Dt(g,w);E!=null&&(l.push(d),c.set(d,E))}}const h=new Re(l);return new dc(c,h,o.fieldTransforms)}function ay(t,e,n,s=!1){return Dt(n,t.da(s?4:3,e))}function Dt(t,e){if(pc(t=He(t)))return ho("Unsupported field value:",e,t),gc(t,e);if(t instanceof Kn)return function(n,s){if(!fc(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Dt(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xm(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ue.fromDate(n);return{timestampValue:ks(s.yt,i)}}if(n instanceof ue){const i=new ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ks(s.yt,i)}}if(n instanceof lo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gt)return{bytesValue:Bl(s.yt,n._byteString)};if(n instanceof xe){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${oi(n)}`)}(t,e)}function gc(t,e){const n={};return cl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):At(t,(s,i)=>{const r=Dt(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function pc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof lo||t instanceof Gt||t instanceof xe||t instanceof Kn)}function ho(t,e,n){if(!pc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oi(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function gr(t,e,n){if((e=He(e))instanceof li)return e._internalPath;if(typeof e=="string")return fo(t,e);throw xs("Field path arguments must be of type string or ",t,!1,void 0,n)}const uy=new RegExp("[~\\*/\\[\\]]");function fo(t,e,n){if(e.search(uy)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new li(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xs(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new I(m.INVALID_ARGUMENT,a+t+u)}function yc(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vc{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ly(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ly extends vc{data(){return super.data()}}function mo(t,e){return typeof e=="string"?fo(t,e):e instanceof li?e._internalPath:e._delegate._internalPath}/**
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
 */function wc(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class go{}class cy extends go{}function is(t,e,...n){let s=[];e instanceof go&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof po).length,o=i.filter(a=>a instanceof di).length;if(r>1||r>0&&o>0)throw new I(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class di extends cy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new di(e,n,s)}_apply(e){const n=this._parse(e);return Ec(e._query,n),new _t(e.firestore,e.converter,ar(e._query,n))}_parse(e){const n=co(e.firestore);return function(i,r,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ua(c,l);const f=[];for(const d of c)f.push(Ba(a,i,d));h={arrayValue:{values:f}}}else h=Ba(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ua(c,l),h=ay(o,r,c,l==="in"||l==="not-in");return oe.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rs(t,e,n){const s=e,i=mo("where",t);return di._create(i,s,n)}class po extends go{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new po(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Ec(r,a),r=ar(r,a)}(e._query,n),new _t(e.firestore,e.converter,ar(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ba(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new I(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bl(e)&&n.indexOf("/")!==-1)throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Z.fromString(n));if(!R.isDocumentKey(s))throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return da(t,new R(s))}if(n instanceof xe)return da(t,n._key);throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oi(n)}.`)}function Ua(t,e){if(!Array.isArray(t)||t.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ec(t,e){if(e.isInequality()){const s=Kr(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new I(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=El(t);r!==null&&hy(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function hy(t,e,n){if(!n.isEqual(e))throw new I(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dy{convertValue(e,n="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const s={};return At(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new lo(re(e.latitude),re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=dl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(An(e));default:return null}}convertTimestamp(e){const n=it(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Z.fromString(e);Y(Kl(s));const i=new In(s.get(1),s.get(3)),r=new R(s.popFirst(5));return i.isEqual(n)||Xe(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function fy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ln{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bc extends vc{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(mo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class cs extends bc{data(e={}){return super.data(e)}}class Tc{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ln(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new cs(this._firestore,this._userDataWriter,s.key,s,new ln(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ln(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new cs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ln(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:my(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function my(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function $a(t){t=Oe(t,xe);const e=Oe(t.firestore,ot);return Wp(ui(e),t._key).then(n=>Cc(e,t,n))}class yo extends dy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function os(t){t=Oe(t,_t);const e=Oe(t.firestore,ot),n=ui(e),s=new yo(e);return wc(t._query),Xp(n,t._query).then(i=>new Tc(e,s,t,i))}function Oi(t,e,n,...s){t=Oe(t,xe);const i=Oe(t.firestore,ot),r=co(i);let o;return o=typeof(e=He(e))=="string"||e instanceof li?oy(r,"updateDoc",t._key,e,n,s):ry(r,"updateDoc",t._key,e),vo(i,[o.toMutation(t._key,qe.exists(!0))])}function gy(t){return vo(Oe(t.firestore,ot),[new zr(t._key,qe.none())])}function py(t,e){const n=Oe(t.firestore,ot),s=un(t),i=fy(t.converter,e);return vo(n,[ny(co(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,qe.exists(!1))]).then(()=>s)}function yy(t,...e){var n,s,i;t=He(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Pa(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Pa(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof xe)l=Oe(t.firestore,ot),c=Ys(t._key.path),u={next:h=>{e[o]&&e[o](Cc(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Oe(t,_t);l=Oe(h.firestore,ot),c=h._query;const f=new yo(l);u={next:d=>{e[o]&&e[o](new Tc(l,f,h,d))},error:e[o+1],complete:e[o+2]},wc(t._query)}return function(h,f,d,g){const w=new uo(g),E=new oo(f,w,d);return h.asyncQueue.enqueueAndForget(async()=>so(await Ds(h),E)),()=>{w.bc(),h.asyncQueue.enqueueAndForget(async()=>io(await Ds(h),E))}}(ui(l),c,a,u)}function vo(t,e){return function(n,s){const i=new Qe;return n.asyncQueue.enqueueAndForget(async()=>Np(await Qp(n),s,i)),i.promise}(ui(t),e)}function Cc(t,e,n){const s=n.docs.get(e._key),i=new yo(t);return new bc(t,i,e._key,s,new ln(n.hasPendingWrites,n.fromCache),e.converter)}function vy(...t){return new sy("arrayUnion",t)}function wy(...t){return new iy("arrayRemove",t)}(function(t,e=!0){(function(n){Yt=n})(sf),ms(new yn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ot(new bm(n.getProvider("auth-internal")),new Im(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(ua,"3.8.3",t),Mt(ua,"3.8.3","esm2017")})();const Ey={apiKey:"AIzaSyBcJK_Ocx60_ZeEgNVJMGfpcWJrAe7iKE0",authDomain:"quasartodolist.firebaseapp.com",projectId:"quasartodolist",storageBucket:"quasartodolist.appspot.com",messagingSenderId:"1011463570363",appId:"1:1011463570363:web:ef02b610f336d0fc8c7a9e",measurementId:"G-TQZ7YENRT0"},by=su(Ey),Ue=Jp(by),Vy=Fc("todoListsList",()=>{const t=J(0),e=J([]);J(!1);const n=M(()=>{var l;return(l=e.value)==null?void 0:l.length});async function s(){console.log("load data from db"),yy(xt(Ue,"todoListsList"),l=>{const c=l.docs.map(h=>(t.value<=h.data().id&&(t.value=h.data().id+1),h.data()));console.log("onShapshot--inside"),e.value=c}),console.log("---todoListsList: ",e.value),e.value.forEach(l=>{console.log("todoList:",l)})}s();async function i(l){t.value++,console.log("createTodoListsList",l),e.value.push(l);try{const c=await py(xt(Ue,"todoListsList"),l);console.log("[Create List] Document written with ID: ",c.id)}catch(c){console.error("Error adding document",c)}}async function r(l){console.log("store_deleteTodoListsList: id=",l);const c=e.value.findIndex(g=>g.id===l);e.value.splice(c,1),console.log("deleteTodoListsList_before db query");const h=xt(Ue,"todoListsList"),f=is(h,rs("id","==",l));console.log("deleteTodoListsList_q:",f);const d=await os(f);if(d.empty)console.log("deleteTodoListsList_ no db data");else{const g=un(Ue,"todoListsList",d.docs[0].id);console.log("id:",d.docs[0].id),console.log("deleteTodoListsList_docRef:",g),await gy(g).then(()=>{console.log("Document has been deleted successfully.")}).catch(w=>{console.log(w)})}}async function o(l,c){const h=e.value.findIndex(w=>w.id===l);e.value[h].todos.push(c),e.value[h].nextTodoId++;const f=xt(Ue,"todoListsList"),d=is(f,rs("id","==",l));console.log("deleteTodoListsList_q:",d);const g=await os(d);if(g.empty)console.log("addTodoIntoTodoList_ no db data");else{const w=un(Ue,"todoListsList",g.docs[0].id);console.log("id:",g.docs[0].id),console.log("addTodoIntoTodoList_docRef:",w),await Oi(w,{todos:vy(c),nextTodoId:e.value[h].nextTodoId}).then(()=>{console.log("Document has been updated successfully.")}).catch(E=>{console.log(E)})}}async function a(l,c){const h=e.value.findIndex(E=>E.id===l),f=e.value[h].todos.findIndex(E=>E.id===c);e.value[h].todos.splice(f,1);const d=xt(Ue,"todoListsList"),g=is(d,rs("id","==",l));console.log("deleteTodoListsList_q:",g);const w=await os(g);if(w.empty)console.log("removeTodoFromTodoList_ no db data");else{const E=un(Ue,"todoListsList",w.docs[0].id);console.log("id:",w.docs[0].id),console.log("addTodoIntoTodoList_docRef:",E),await $a(E).then(F=>{if(F.exists()){const S=F.data();Oi(E,{todos:wy(S.todos.find(A=>A.id===c))}).then(()=>{console.log("(remove) Document has been updated successfully.")}).catch(A=>{console.log(A)})}})}}async function u(l,c,h){console.log(`Store_toggleCheckBox: listId=${l} todoId=${c} isFinished=${h}`),e.value.forEach(w=>{w.id==l&&w.todos.forEach(E=>{E.id==c&&(E.isFinished=h)})});const f=xt(Ue,"todoListsList"),d=is(f,rs("id","==",l)),g=await os(d);if(!g.empty){const w=un(Ue,"todoListsList",g.docs[0].id);console.log("id:",g.docs[0].id),console.log("toggleCheckBox_docRef:",w),await $a(w).then(E=>{var F;E.exists()&&Oi(w,{todos:(F=e.value.find(S=>S.id==l))==null?void 0:F.todos}).then(()=>{console.log("(Update)) Document has been updated successfully.")}).catch(S=>{console.log("toggleCheckBox_error:",S)})})}}return{nextListId:t,todoListsList:e,listCount:n,loadTodoListsFromDb:s,createTodoListsList:i,deleteTodoListsList:r,addTodoIntoTodoList:o,removeTodoFromTodoList:a,toggleCheckBox:u}});export{Oy as Q,Rs as a,Gc as b,Ls as c,sh as d,Qc as e,Kc as f,nh as g,_y as h,Xc as i,Yc as j,Dy as k,Vy as l,My as m,xy as n,Ry as o,Ly as p,Fy as q,ky as r,Ay as s,Iy as t,zc as u,Eh as v,Ny as w};
