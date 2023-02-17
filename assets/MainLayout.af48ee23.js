import{Q as Y,a as Ee}from"./QBtn.80a860c1.js";import{c as V,h as ae,a as ft,b as vt,d as Me,e as mt}from"./render.fde42efc.js";import{c as v,h as _,r as S,j as Ne,o as K,k as G,n as _e,l as ne,g as W,m as we,p as Q,w as C,a as $e,q as ie,P as ht,s as U,t as gt,u as ee,v as ve,x as Ve,y as me,z as Le,A as he,B as pt,C as yt,D as je,E as bt,G as te,b as wt,H as ke,_ as ze,I as M,J as Ce,d as y,K as T,L as xe,F as Ue,M as X,N as Lt,O as Ct,Q as Te,R as Se,S as ge}from"./index.3c045185.js";import{u as Tt,a as St,b as qt,c as _t,d as $t,e as kt,f as zt,g as xt,h as Bt,i as Dt,j as Ot,k as pe,l as Xe,Q as Qt,m as Pt,n as Re,o as Et,p as Mt,q as Vt,r as Ye,s as Ke,t as I}from"./todolistslist-store.3c1659f2.js";var Rt=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const a=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:a.value},ae(n.default))}}),Ht=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const a=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:a.value,role:"toolbar"},ae(n.default))}});function Ft(){const e=S(!Ne.value);return e.value===!1&&K(()=>{e.value=!0}),e}const Ge=typeof ResizeObserver!="undefined",He=Ge===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var qe=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let a=null,s,t={width:-1,height:-1};function o(d){d===!0||e.debounce===0||e.debounce==="0"?l():a===null&&(a=setTimeout(l,e.debounce))}function l(){if(a!==null&&(clearTimeout(a),a=null),s){const{offsetWidth:d,offsetHeight:u}=s;(d!==t.width||u!==t.height)&&(t={width:d,height:u},n("resize",t))}}const{proxy:c}=W();if(Ge===!0){let d;const u=r=>{s=c.$el.parentNode,s?(d=new ResizeObserver(o),d.observe(s),l()):r!==!0&&ne(()=>{u(!0)})};return K(()=>{u()}),G(()=>{a!==null&&clearTimeout(a),d!==void 0&&(d.disconnect!==void 0?d.disconnect():s&&d.unobserve(s))}),_e}else{let r=function(){a!==null&&(clearTimeout(a),a=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",o,we.passive),u=void 0)},L=function(){r(),s&&s.contentDocument&&(u=s.contentDocument.defaultView,u.addEventListener("resize",o,we.passive),l())};const d=Ft();let u;return K(()=>{ne(()=>{s=c.$el,s&&L()})}),G(r),c.trigger=o,()=>{if(d.value===!0)return _("object",{style:He.style,tabindex:-1,type:"text/html",data:He.url,"aria-hidden":"true",onLoad:L})}}}}),At=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:a}){const{proxy:{$q:s}}=W(),t=$e(ie,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const o=S(parseInt(e.heightHint,10)),l=S(!0),c=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||s.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return l.value===!0?o.value:0;const f=o.value-t.scroll.value.position;return f>0?f:0}),u=v(()=>e.modelValue!==!0||c.value===!0&&l.value!==!0),r=v(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),L=v(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=v(()=>{const f=t.rows.value.top,k={};return f[0]==="l"&&t.left.space===!0&&(k[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(k[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function m(f,k){t.update("header",f,k)}function h(f,k){f.value!==k&&(f.value=k)}function B({height:f}){h(o,f),m("size",f)}function $(f){r.value===!0&&h(l,!0),a("focusin",f)}C(()=>e.modelValue,f=>{m("space",f),h(l,!0),t.animate()}),C(d,f=>{m("offset",f)}),C(()=>e.reveal,f=>{f===!1&&h(l,e.modelValue)}),C(l,f=>{t.animate(),a("reveal",f)}),C(t.scroll,f=>{e.reveal===!0&&h(l,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&m("size",o.value),m("space",e.modelValue),m("offset",d.value),G(()=>{t.instances.header===b&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const f=ft(n.default,[]);return e.elevated===!0&&f.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(_(qe,{debounce:0,onResize:B})),_("header",{class:L.value,style:w.value,onFocusin:$},f)}}});const Be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},It=Object.keys(Be);Be.all=!0;function Fe(e){const n={};for(const a of It)e[a]===!0&&(n[a]=!0);return Object.keys(n).length===0?Be:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function Ae(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Wt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ht.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ye(e,n,a){const s=Le(e);let t,o=s.left-n.event.x,l=s.top-n.event.y,c=Math.abs(o),d=Math.abs(l);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?t=o<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=l<0?"up":"down":u.up===!0&&l<0?(t="up",c>d&&(u.left===!0&&o<0?t="left":u.right===!0&&o>0&&(t="right"))):u.down===!0&&l>0?(t="down",c>d&&(u.left===!0&&o<0?t="left":u.right===!0&&o>0&&(t="right"))):u.left===!0&&o<0?(t="left",c<d&&(u.up===!0&&l<0?t="up":u.down===!0&&l>0&&(t="down"))):u.right===!0&&o>0&&(t="right",c<d&&(u.up===!0&&l<0?t="up":u.down===!0&&l>0&&(t="down")));let r=!1;if(t===void 0&&a===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(s.left-=o,c=0,o=0):(s.top-=l,d=0,l=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:s,direction:t,isFirst:n.event.isFirst,isFinal:a===!0,duration:Date.now()-n.event.time,distance:{x:c,y:d},offset:{x:o,y:l},delta:{x:s.left-n.event.lastX,y:s.top-n.event.lastY}}}}let Nt=0;var be=vt({name:"touch-pan",beforeMount(e,{value:n,modifiers:a}){if(a.mouse!==!0&&U.has.touch!==!0)return;function s(o,l){a.mouse===!0&&l===!0?pt(o):(a.stop===!0&&me(o),a.prevent===!0&&Ve(o))}const t={uid:"qvtp_"+Nt++,handler:n,modifiers:a,direction:Fe(a),noop:_e,mouseStart(o){Ae(o,t)&&gt(o)&&(ee(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ae(o,t)){const l=o.target;ee(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,l){if(U.is.firefox===!0&&ve(e,!0),t.lastEvt=o,l===!0||a.stop===!0){if(t.direction.all!==!0&&(l!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Ve(u),o.cancelBubble===!0&&me(u),Object.assign(u,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:u}}me(o)}const{left:c,top:d}=Le(o);t.event={x:c,y:d,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:d}},move(o){if(t.event===void 0)return;const l=Le(o),c=l.left-t.event.x,d=l.top-t.event.y;if(c===0&&d===0)return;t.lastEvt=o;const u=t.event.mouse===!0,r=()=>{s(o,u);let m;a.preserveCursor!==!0&&a.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Wt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),u===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{B(),h()},50):B()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(o,t.event.mouse);const{payload:m,synthetic:h}=ye(o,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(o);return}const L=Math.abs(c),w=Math.abs(d);L!==w&&(t.direction.horizontal===!0&&L>w||t.direction.vertical===!0&&L<w||t.direction.up===!0&&L<w&&d<0||t.direction.down===!0&&L<w&&d>0||t.direction.left===!0&&L>w&&c<0||t.direction.right===!0&&L>w&&c>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,l){if(t.event!==void 0){if(he(t,"temp"),U.is.firefox===!0&&ve(e,!1),l===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ye(o===void 0?t.lastEvt:o,t).payload);const{payload:c}=ye(o===void 0?t.lastEvt:o,t,!0),d=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,a.mouse===!0){const o=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";ee(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}U.has.touch===!0&&ee(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const a=e.__qtouchpan;a!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&a.end(),a.handler=n.value),a.direction=Fe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),he(n,"main"),he(n,"temp"),U.is.firefox===!0&&ve(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function oe(e,n,a){return a<=n?n:Math.min(a,Math.max(n,e))}const Ie=150;var jt=V({name:"QDrawer",inheritAttrs:!1,props:{...Tt,...St,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:n,emit:a,attrs:s}){const t=W(),{proxy:{$q:o}}=t,l=_t(e,o),{preventBodyScroll:c}=xt(),{registerTimeout:d,removeTimeout:u}=$t(),r=$e(ie,Q);if(r===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let L,w=null,m;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=v(()=>e.mini===!0&&h.value!==!0),$=v(()=>B.value===!0?e.miniWidth:e.width),b=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),f=v(()=>e.persistent!==!0&&(h.value===!0||Je.value===!0));function k(i,g){if(R(),i!==!1&&r.animate(),D(0),h.value===!0){const z=r.instances[J.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),P(1),r.isContainer.value!==!0&&c(!0)}else P(0),i!==!1&&de(!1);d(()=>{i!==!1&&de(!0),g!==!0&&a("show",i)},Ie)}function p(i,g){N(),i!==!1&&r.animate(),P(0),D(F.value*$.value),ce(),g!==!0?d(()=>{a("hide",i)},Ie):u()}const{show:q,hide:x}=kt({showing:b,hideOnRouteChange:f,handleShow:k,handleHide:p}),{addToHistory:R,removeFromHistory:N}=zt(b,x,f),H={belowBreakpoint:h,hide:x},O=v(()=>e.side==="right"),F=v(()=>(o.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),De=S(0),A=S(!1),le=S(!1),Oe=S($.value*F.value),J=v(()=>O.value===!0?"left":"right"),re=v(()=>b.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),se=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")>-1||o.platform.is.ios===!0&&r.isContainer.value===!0),j=v(()=>e.overlay===!1&&b.value===!0&&h.value===!1),Je=v(()=>e.overlay===!0&&b.value===!0&&h.value===!1),Ze=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&A.value===!1?" hidden":"")),et=v(()=>({backgroundColor:`rgba(0,0,0,${De.value*.4})`})),Qe=v(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),tt=v(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),ot=v(()=>{const i={};return r.header.space===!0&&Qe.value===!1&&(se.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&tt.value===!1&&(se.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),nt=v(()=>{const i={width:`${$.value}px`,transform:`translateX(${Oe.value}px)`};return h.value===!0?i:Object.assign(i,ot.value)}),at=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),it=v(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(se.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),lt=v(()=>{const i=o.lang.rtl===!0?e.side:J.value;return[[be,dt,void 0,{[i]:!0,mouse:!0}]]}),rt=v(()=>{const i=o.lang.rtl===!0?J.value:e.side;return[[be,Pe,void 0,{[i]:!0,mouse:!0}]]}),st=v(()=>{const i=o.lang.rtl===!0?J.value:e.side;return[[be,Pe,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){ct(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(h,i=>{i===!0?(L=b.value,b.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(b.value===!0?(D(0),P(0),ce()):q(!1))}),C(()=>e.side,(i,g)=>{r.instances[g]===H&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[i]=H,r[i].size=$.value,r[i].space=j.value,r[i].offset=re.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),C(()=>e.behavior+e.breakpoint,ue),C(r.isContainer,i=>{b.value===!0&&c(i!==!0),i===!0&&ue()}),C(r.scrollbarWidth,()=>{D(b.value===!0?0:void 0)}),C(re,i=>{E("offset",i)}),C(j,i=>{a("onLayout",i),E("space",i)}),C(O,()=>{D()}),C($,i=>{D(),fe(e.miniToOverlay,i)}),C(()=>e.miniToOverlay,i=>{fe(i,$.value)}),C(()=>o.lang.rtl,()=>{D()}),C(()=>e.mini,()=>{e.modelValue===!0&&(ut(),r.animate())}),C(B,i=>{a("miniState",i)});function D(i){i===void 0?ne(()=>{i=b.value===!0?0:$.value,D(F.value*i)}):(r.isContainer.value===!0&&O.value===!0&&(h.value===!0||Math.abs(i)===$.value)&&(i+=F.value*r.scrollbarWidth.value),Oe.value=i)}function P(i){De.value=i}function de(i){const g=i===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function ut(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,w=setTimeout(()=>{w=null,le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(i){if(b.value!==!1)return;const g=$.value,z=oe(i.distance.x,0,g);if(i.isFinal===!0){z>=Math.min(75,g)===!0?q():(r.animate(),P(0),D(F.value*g)),A.value=!1;return}D((o.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-z,0):Math.min(0,z-g)),P(oe(z/g,0,1)),i.isFirst===!0&&(A.value=!0)}function Pe(i){if(b.value!==!0)return;const g=$.value,z=i.direction===e.side,Z=(o.lang.rtl===!0?z!==!0:z)?oe(i.distance.x,0,g):0;if(i.isFinal===!0){Math.abs(Z)<Math.min(75,g)===!0?(r.animate(),P(1),D(0)):x(),A.value=!1;return}D(F.value*Z),P(oe(1-Z/g,0,1)),i.isFirst===!0&&(A.value=!0)}function ce(){c(!1),de(!0)}function E(i,g){r.update(e.side,i,g)}function ct(i,g){i.value!==g&&(i.value=g)}function fe(i,g){E("size",i===!0?e.miniWidth:g)}return r.instances[e.side]=H,fe(e.miniToOverlay,$.value),E("space",j.value),E("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),K(()=>{a("onLayout",j.value),a("miniState",B.value),L=e.showIfAbove===!0;const i=()=>{(b.value===!0?k:p)(!1,!0)};if(r.totalWidth.value!==0){ne(i);return}m=C(r.totalWidth,()=>{m(),m=void 0,b.value===!1&&e.showIfAbove===!0&&h.value===!1?q(!1):i()})}),G(()=>{m!==void 0&&m(),w!==null&&(clearTimeout(w),w=null),b.value===!0&&ce(),r.instances[e.side]===H&&(r.instances[e.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const i=[];h.value===!0&&(e.noSwipeOpen===!1&&i.push(yt(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),lt.value)),i.push(Me("div",{ref:"backdrop",class:Ze.value,style:et.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>st.value)));const g=B.value===!0&&n.mini!==void 0,z=[_("div",{...s,key:""+g,class:[at.value,s.class]},g===!0?n.mini():ae(n.default))];return e.elevated===!0&&b.value===!0&&z.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Me("aside",{ref:"content",class:it.value,style:nt.value},z,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>rt.value)),_("div",{class:"q-drawer-container"},i)}}}),Ut=V({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:a}}=W(),s=$e(ie,Q);if(s===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;je(bt,!0);const t=v(()=>{const o={};return s.header.space===!0&&(o.paddingTop=`${s.header.size}px`),s.right.space===!0&&(o[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(o.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(o[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),o});return()=>_("div",{class:"q-page-container",style:t.value},ae(n.default))}});const{passive:We}=we,Xt=["both","horizontal","vertical"];var Yt=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Xt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,t,o;C(()=>e.scrollTarget,()=>{d(),c()});function l(){s!==null&&s();const L=Math.max(0,Dt(t)),w=Ot(t),m={top:L-a.position.top,left:w-a.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";a.position={top:L,left:w},a.directionChanged=a.direction!==h,a.delta=m,a.directionChanged===!0&&(a.direction=h,a.inflectionPoint=a.position),n("scroll",{...a})}function c(){t=Bt(o,e.scrollTarget),t.addEventListener("scroll",u,We),u(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",u,We),t=void 0)}function u(L){if(L===!0||e.debounce===0||e.debounce==="0")l();else if(s===null){const[w,m]=e.debounce?[setTimeout(l,e.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];s=()=>{m(w),s=null}}}const{proxy:r}=W();return C(()=>r.$q.lang.rtl,l),K(()=>{o=r.$el.parentNode,c()}),G(()=>{s!==null&&s(),d()}),Object.assign(r,{trigger:u,getPosition:()=>a}),_e}}),Kt=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:a}){const{proxy:{$q:s}}=W(),t=S(null),o=S(s.screen.height),l=S(e.container===!0?0:s.screen.width),c=S({position:0,direction:"down",inflectionPoint:0}),d=S(0),u=S(Ne.value===!0?0:pe()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=v(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),w=v(()=>u.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=v(()=>u.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function h(p){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};c.value=q,e.onScroll!==void 0&&a("scroll",q)}}function B(p){const{height:q,width:x}=p;let R=!1;o.value!==q&&(R=!0,o.value=q,e.onScrollHeight!==void 0&&a("scrollHeight",q),b()),l.value!==x&&(R=!0,l.value=x),R===!0&&e.onResize!==void 0&&a("resize",p)}function $({height:p}){d.value!==p&&(d.value=p,b())}function b(){if(e.container===!0){const p=o.value>d.value?pe():0;u.value!==p&&(u.value=p)}}let f=null;const k={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:o,containerHeight:d,scrollbarWidth:u,totalWidth:v(()=>l.value+u.value),rows:v(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:c,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,q,x){k[p][q]=x}};if(je(ie,k),pe()>0){let x=function(){p=null,q.classList.remove("hide-scrollbar")},R=function(){if(p===null){if(q.scrollHeight>s.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(x,300)},N=function(H){p!==null&&H==="remove"&&(clearTimeout(p),x()),window[`${H}EventListener`]("resize",R)},p=null;const q=document.body;C(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),wt(()=>{N("remove")})}return()=>{const p=mt(n.default,[_(Yt,{onScroll:h}),_(qe,{onResize:B})]),q=_("div",{class:r.value,style:L.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(qe,{onResize:$}),_("div",{class:"absolute-full",style:w.value},[_("div",{class:"scroll",style:m.value},[q])])]):q}}});const Gt=ke({name:"CreateTodoList",setup(){const e=S(!1),n=S(""),a=Xe();function s(){console.log("initDialog_list"),n.value=""}function t(){console.log("addTodoListsList title:",n.value);const l={id:a.nextListId,title:n.value,todos:[],nextTodoId:0};a.createTodoListsList(l),console.log("todolistslist-length:",a.listCount),e.value=!1}function o(){console.log("cancelTodoListsList"),e.value=!1}return{store:a,showDialog:e,todoListsTitle:n,initDialog:s,createTodoListsList:t,cancelTodoListsList:o}}}),Jt=xe("div",{class:"text-h6"},"Create New ToDo list",-1);function Zt(e,n,a,s,t,o){return M(),Ce(Ue,null,[y(Y,{icon:"mdi-plus",flat:"",round:"",onClick:n[0]||(n[0]=l=>e.showDialog=!0)}),y(Vt,{modelValue:e.showDialog,"onUpdate:modelValue":n[2]||(n[2]=l=>e.showDialog=l),persistent:"",onBeforeShow:e.initDialog},{default:T(()=>[xe("div",null,[y(Qt,{onSubmit:e.createTodoListsList,onReset:e.cancelTodoListsList},{default:T(()=>[y(Pt,{style:{"min-width":"350px"}},{default:T(()=>[y(Re,null,{default:T(()=>[Jt]),_:1}),y(Re,{class:"q-pt-none"},{default:T(()=>[y(Et,{dense:"",modelValue:e.todoListsTitle,"onUpdate:modelValue":n[1]||(n[1]=l=>e.todoListsTitle=l),autofocus:""},null,8,["modelValue"])]),_:1}),y(Mt,{align:"right",class:"text-primary"},{default:T(()=>[y(Y,{flat:"",label:"Cancel",type:"reset"}),y(Y,{flat:"",label:"Create New list",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit","onReset"])])]),_:1},8,["modelValue","onBeforeShow"])],64)}var eo=ze(Gt,[["render",Zt]]);const to=ke({name:"TodoListsList",setup(){const e=S(!1),n=Xe(),a=n.todoListsList,s=Ct(),t=S(-1);function o(c){var d;console.log("removeTItleTodoList_____"),n.deleteTodoListsList(c),t.value===c&&(t.value=(d=n.todoListsList[0])==null?void 0:d.id),n.listCount==0&&s.push({path:"/"})}function l(c){console.log("selectTodoLists: current id= ",c),t.value=c,s.push({path:`/list/${c}`})}return{loading:e,store:n,todoListsList:a,selectedId:t,deleteTitleTodoList:o,selectTodoLists:l}}}),oo={key:0};function no(e,n,a,s,t,o){return e.loading==!0?(M(),Ce("div",oo,"loading")):(M(),X(Ye,{key:1},{default:T(()=>[(M(!0),Ce(Ue,null,Lt(e.todoListsList,l=>(M(),X(Ke,{clickable:"",key:l.id,onClick:c=>e.selectTodoLists(l.id)},{default:T(()=>[l.id===e.selectedId?(M(),X(I,{key:0,side:""},{default:T(()=>[y(Ee,{color:"red-15",name:"mdi-emoticon-excited"})]),_:1})):(M(),X(I,{key:1,side:""},{default:T(()=>[y(Ee,{color:"red-15",name:"mdi-circle-outline"})]),_:1})),y(I,{class:"text-grey-9"},{default:T(()=>[Te(Se(l.title)+" ("+Se(l.todos.length)+") ",1)]),_:2},1024),y(I,{side:""},{default:T(()=>[y(Y,{flat:"",round:"",size:"sm",icon:"mdi-delete",onClick:c=>e.deleteTitleTodoList(l.id)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))}var ao=ze(to,[["render",no]]);const io=ke({name:"MainLayout",components:{CreateTodoListButton:eo,TodoListsList:ao},setup(){const e=S(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function lo(e,n,a,s,t,o){const l=ge("create-todo-list-button"),c=ge("todo-lists-list"),d=ge("router-view");return M(),X(Kt,{view:"hHh Lpr lFf"},{default:T(()=>[y(At,{elevated:""},{default:T(()=>[y(Ht,null,{default:T(()=>[y(Y,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),y(Rt,null,{default:T(()=>[Te(" Quasar App ")]),_:1}),xe("div",null,"Quasar v"+Se(e.$q.version),1)]),_:1})]),_:1}),y(jt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=u=>e.leftDrawerOpen=u),"show-if-above":"",bordered:""},{default:T(()=>[y(Ye,null,{default:T(()=>[y(Ke,{class:"bg-grey-3"},{default:T(()=>[y(I,null,{default:T(()=>[Te(" Todo Lists ")]),_:1}),y(I,{side:""},{default:T(()=>[y(l)]),_:1})]),_:1}),y(c)]),_:1})]),_:1},8,["modelValue"]),y(Ut,null,{default:T(()=>[y(d)]),_:1})]),_:1})}var vo=ze(io,[["render",lo]]);export{vo as default};