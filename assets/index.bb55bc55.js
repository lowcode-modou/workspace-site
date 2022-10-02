import{r as f,C as Oe,c as S,d as G,j as c,l as Se,m as Pe,n as ue,e as O,k as Me,J as ce,p as fe,F as Ve,f as ke,o as He,h as Be,g as Te,b as _,w as tt,a as Fe,q as nt,K as Ke,O as rt}from"./index.bcc5710d.js";import{t as ot,b as at,j as it,k as lt,w as Ee,P as st,l as ct,e as Le,K as ge,g as $e,C as dt,A as ut}from"./index.eb4728cd.js";import{N as ft,C as vt,B as mt}from"./CopyOutlined.d9fab805.js";import{D as pt,M as ht,S as Ge,u as Ct,b as gt,c as Ue,E as yt,a as bt,L as te,A as xt}from"./index.bf409e87.js";var Nt=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r},kt=function(o){var r=o.prefixCls,t=o.className,n=o.dashed,a=Nt(o,["prefixCls","className","dashed"]),i=f.exports.useContext(Oe),l=i.getPrefixCls,s=l("menu",r),d=S(G({},"".concat(s,"-item-divider-dashed"),!!n),t);return c(pt,{className:d,...a})};const Xe=kt;var wt=f.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});const de=wt;var Ot=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r},_e=function(e){Se(r,e);var o=Pe(r);function r(){var t;return ue(this,r),t=o.apply(this,arguments),t.renderItem=function(n){var a,i=n.siderCollapsed,l,s=t.context,d=s.prefixCls,u=s.firstLevel,v=s.inlineCollapsed,g=s.direction,m=s.disableMenuItemTitleTooltip,k=t.props,P=k.className,y=k.children,I=t.props,M=I.title,b=I.icon,j=I.danger,T=Ot(I,["title","icon","danger"]),E=M;typeof M>"u"?E=u?y:"":M===!1&&(E="");var D={title:E};!i&&!v&&(D.title=null,D.visible=!1);var L=ot(y).length,$=O(ht,{...T,className:S((a={},G(a,"".concat(d,"-item-danger"),j),G(a,"".concat(d,"-item-only-child"),(b?L+1:L)===1),a),P),title:typeof M=="string"?M:void 0,children:[Me(b,{className:S(ce(b)?(l=b.props)===null||l===void 0?void 0:l.className:"","".concat(d,"-item-icon"))}),t.renderItemChildren(v)]});return m||($=c(at,{...D,placement:g==="rtl"?"left":"right",overlayClassName:"".concat(d,"-inline-collapsed-tooltip"),children:$})),$},t}return fe(r,[{key:"renderItemChildren",value:function(n){var a=this.context,i=a.prefixCls,l=a.firstLevel,s=this.props,d=s.icon,u=s.children,v=c("span",{className:"".concat(i,"-title-content"),children:u});return(!d||ce(u)&&u.type==="span")&&u&&n&&l&&typeof u=="string"?c("div",{className:"".concat(i,"-inline-collapsed-noicon"),children:u.charAt(0)}):v}},{key:"render",value:function(){return c(Ge.Consumer,{children:this.renderItem})}}]),r}(f.exports.Component);_e.contextType=de;function Ye(e){var o,r=e.popupClassName,t=e.icon,n=e.title,a=e.theme,i=f.exports.useContext(de),l=i.prefixCls,s=i.inlineCollapsed,d=i.antdMenuTheme,u=Ct(),v;if(!t)v=s&&!u.length&&n&&typeof n=="string"?c("div",{className:"".concat(l,"-inline-collapsed-noicon"),children:n.charAt(0)}):c("span",{className:"".concat(l,"-title-content"),children:n});else{var g=ce(n)&&n.type==="span";v=O(Ve,{children:[Me(t,{className:S(ce(t)?(o=t.props)===null||o===void 0?void 0:o.className:"","".concat(l,"-item-icon"))}),g?n:c("span",{className:"".concat(l,"-title-content"),children:n})]})}var m=f.exports.useMemo(function(){return ke(ke({},i),{firstLevel:!1})},[i]);return c(de.Provider,{value:m,children:c(gt,{...He(e,["icon"]),title:v,popupClassName:S(l,"".concat(l,"-").concat(a||d),r)})})}var St=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};function we(e){return(e||[]).map(function(o,r){if(o&&Be(o)==="object"){var t=o,n=t.label,a=t.children,i=t.key,l=t.type,s=St(t,["label","children","key","type"]),d=i!=null?i:"tmp-".concat(r);return a||l==="group"?l==="group"?c(Ue,{...s,title:n,children:we(a)},d):c(Ye,{...s,title:n,children:we(a)},d):l==="divider"?c(Xe,{...s},d):c(_e,{...s,children:n},d)}return null}).filter(function(o){return o})}function Pt(e){return f.exports.useMemo(function(){return e&&we(e)},[e])}globalThis&&globalThis.__rest;var Mt=f.exports.createContext(null);const je=Mt;var _t=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r},It=f.exports.forwardRef(function(e,o){var r,t=f.exports.useContext(je)||{},n=f.exports.useContext(Oe),a=n.getPrefixCls,i=n.getPopupContainer,l=n.direction,s=a(),d=e.prefixCls,u=e.className,v=e.theme,g=v===void 0?"light":v,m=e.expandIcon,k=e._internalDisableMenuItemTitleTooltip,P=e.inlineCollapsed,y=e.siderCollapsed,I=e.items,M=e.children,b=e.mode,j=e.selectable,T=e.onClick,E=_t(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),D=He(E,["collapsedWidth"]),L=Pt(I)||M;(r=t.validator)===null||r===void 0||r.call(t,{mode:b});var $=it(function(){var F;T==null||T.apply(void 0,arguments),(F=t==null?void 0:t.onClick)===null||F===void 0||F.call(t)}),V=t.mode||b,H=j!=null?j:t.selectable,B=f.exports.useMemo(function(){return y!==void 0?y:P},[P,y]),R={horizontal:{motionName:"".concat(s,"-slide-up")},inline:lt,other:{motionName:"".concat(s,"-zoom-big")}},N=a("menu",d||t.prefixCls),U=S("".concat(N,"-").concat(g),u),W;typeof m=="function"?W=m:W=Me(m||t.expandIcon,{className:"".concat(N,"-submenu-expand-icon")});var h=f.exports.useMemo(function(){return{prefixCls:N,inlineCollapsed:B||!1,antdMenuTheme:g,direction:l,firstLevel:!0,disableMenuItemTitleTooltip:k}},[N,B,g,l,k]);return c(je.Provider,{value:null,children:c(de.Provider,{value:h,children:c(yt,{getPopupContainer:i,overflowedIndicator:c(bt,{}),overflowedIndicatorPopupClassName:"".concat(N,"-").concat(g),mode:V,selectable:H,onClick:$,...D,inlineCollapsed:B,className:U,prefixCls:N,direction:l,defaultMotions:R,expandIcon:W,ref:o,children:L})})})}),oe=function(e){Se(r,e);var o=Pe(r);function r(){var t;return ue(this,r),t=o.apply(this,arguments),t.focus=function(n){var a;(a=t.menu)===null||a===void 0||a.focus(n)},t}return fe(r,[{key:"render",value:function(){var n=this;return c(Ge.Consumer,{children:function(a){return c(It,{ref:function(l){n.menu=l},...n.props,...a})}})}}]),r}(f.exports.Component);oe.Divider=Xe;oe.Item=_e;oe.SubMenu=Ye;oe.ItemGroup=Ue;const Tt=oe;var ye;function qe(e){if(typeof document>"u")return 0;if(e||ye===void 0){var o=document.createElement("div");o.style.width="100%",o.style.height="200px";var r=document.createElement("div"),t=r.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",r.appendChild(o),document.body.appendChild(r);var n=o.offsetWidth;r.style.overflow="scroll";var a=o.offsetWidth;n===a&&(a=r.clientWidth),document.body.removeChild(r),ye=n-a}return ye}function Q(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e)return{};var r=o.element,t=r===void 0?document.body:r,n={},a=Object.keys(e);return a.forEach(function(i){n[i]=t.style[i]}),a.forEach(function(i){t.style[i]=e[i]}),n}function Et(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var be={};const De=function(e){if(!(!Et()&&!e)){var o="ant-scrolling-effect",r=new RegExp("".concat(o),"g"),t=document.body.className;if(e){if(!r.test(t))return;Q(be),be={},document.body.className=t.replace(r,"").trim();return}var n=qe();if(n&&(be=Q({position:"relative",width:"calc(100% - ".concat(n,"px)")}),!r.test(t))){var a="".concat(t," ").concat(o);document.body.className=a.trim()}}};var Lt=0,w=[],Je="ant-scrolling-effect",xe=new RegExp("".concat(Je),"g"),Ne=new Map,$t=fe(function e(o){var r=this;ue(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var t;return(t=r.options)===null||t===void 0?void 0:t.container},this.reLock=function(t){var n=w.find(function(a){var i=a.target;return i===r.lockTarget});n&&r.unLock(),r.options=t,n&&(n.options=t,r.lock())},this.lock=function(){var t;if(!w.some(function(s){var d=s.target;return d===r.lockTarget})){if(w.some(function(s){var d,u=s.options;return(u==null?void 0:u.container)===((d=r.options)===null||d===void 0?void 0:d.container)})){w=[].concat(Te(w),[{target:r.lockTarget,options:r.options}]);return}var n=0,a=((t=r.options)===null||t===void 0?void 0:t.container)||document.body;(a===document.body&&window.innerWidth-document.documentElement.clientWidth>0||a.scrollHeight>a.clientHeight)&&(n=qe());var i=a.className;if(w.filter(function(s){var d,u=s.options;return(u==null?void 0:u.container)===((d=r.options)===null||d===void 0?void 0:d.container)}).length===0&&Ne.set(a,Q({width:n!==0?"calc(100% - ".concat(n,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:a})),!xe.test(i)){var l="".concat(i," ").concat(Je);a.className=l.trim()}w=[].concat(Te(w),[{target:r.lockTarget,options:r.options}])}},this.unLock=function(){var t,n=w.find(function(l){var s=l.target;return s===r.lockTarget});if(w=w.filter(function(l){var s=l.target;return s!==r.lockTarget}),!(!n||w.some(function(l){var s,d=l.options;return(d==null?void 0:d.container)===((s=n.options)===null||s===void 0?void 0:s.container)}))){var a=((t=r.options)===null||t===void 0?void 0:t.container)||document.body,i=a.className;!xe.test(i)||(Q(Ne.get(a),{element:a}),Ne.delete(a),a.className=a.className.replace(xe,"").trim())}},this.lockTarget=Lt++,this.options=o}),A=0,ne=ct(),le={},J=function(o){if(!ne)return null;if(o){if(typeof o=="string")return document.querySelectorAll(o)[0];if(typeof o=="function")return o();if(Be(o)==="object"&&o instanceof window.HTMLElement)return o}return document.body},jt=function(e){Se(r,e);var o=Pe(r);function r(t){var n;return ue(this,r),n=o.call(this,t),n.container=void 0,n.componentRef=f.exports.createRef(),n.rafId=void 0,n.scrollLocker=void 0,n.renderComponent=void 0,n.updateScrollLocker=function(a){var i=a||{},l=i.visible,s=n.props,d=s.getContainer,u=s.visible;u&&u!==l&&ne&&J(d)!==n.scrollLocker.getContainer()&&n.scrollLocker.reLock({container:J(d)})},n.updateOpenCount=function(a){var i=a||{},l=i.visible,s=i.getContainer,d=n.props,u=d.visible,v=d.getContainer;u!==l&&ne&&J(v)===document.body&&(u&&!l?A+=1:a&&(A-=1));var g=typeof v=="function"&&typeof s=="function";(g?v.toString()!==s.toString():v!==s)&&n.removeCurrentContainer()},n.attachToParent=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(a||n.container&&!n.container.parentNode){var i=J(n.props.getContainer);return i?(i.appendChild(n.container),!0):!1}return!0},n.getContainer=function(){return ne?(n.container||(n.container=document.createElement("div"),n.attachToParent(!0)),n.setWrapperClassName(),n.container):null},n.setWrapperClassName=function(){var a=n.props.wrapperClassName;n.container&&a&&a!==n.container.className&&(n.container.className=a)},n.removeCurrentContainer=function(){var a,i;(a=n.container)===null||a===void 0||(i=a.parentNode)===null||i===void 0||i.removeChild(n.container)},n.switchScrollingEffect=function(){A===1&&!Object.keys(le).length?(De(),le=Q({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):A||(Q(le),le={},De(!0))},n.scrollLocker=new $t({container:J(t.getContainer)}),n}return fe(r,[{key:"componentDidMount",value:function(){var n=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=Ee(function(){n.forceUpdate()}))}},{key:"componentDidUpdate",value:function(n){this.updateOpenCount(n),this.updateScrollLocker(n),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var n=this.props,a=n.visible,i=n.getContainer;ne&&J(i)===document.body&&(A=a&&A?A-1:A),this.removeCurrentContainer(),Ee.cancel(this.rafId)}},{key:"render",value:function(){var n=this.props,a=n.children,i=n.forceRender,l=n.visible,s=null,d={getOpenCount:function(){return A},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(i||l||this.componentRef.current)&&(s=c(st,{getContainer:this.getContainer,ref:this.componentRef,children:a(d)})),s}}]),r}(f.exports.Component),Dt=function(o){var r=o.prefixCls,t=o.className,n=o.style,a=o.children,i=o.containerRef;return c(Ve,{children:c("div",{className:S("".concat(r,"-content"),t),style:_({},n),"aria-modal":"true",role:"dialog",ref:i,children:a})})},Re=f.exports.createContext(null);function We(e){return typeof e=="string"&&String(Number(e))===e?(tt(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ze={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Ae(e){var o,r,t,n,a=e.prefixCls,i=e.open,l=e.placement,s=e.inline,d=e.push,u=e.forceRender,v=e.autoFocus,g=e.keyboard,m=e.scrollLocker,k=e.rootClassName,P=e.rootStyle,y=e.zIndex,I=e.className,M=e.style,b=e.motion,j=e.width,T=e.height,E=e.children,D=e.contentWrapperStyle,L=e.mask,$=e.maskClosable,V=e.maskMotion,H=e.maskClassName,B=e.maskStyle,R=e.afterOpenChange,N=e.onClose,U=f.exports.useRef(),W=f.exports.useRef(),h=f.exports.useRef(),F=function(x){var Y=x.keyCode,q=x.shiftKey;switch(Y){case ge.TAB:{if(Y===ge.TAB){if(!q&&document.activeElement===h.current){var he;(he=W.current)===null||he===void 0||he.focus({preventScroll:!0})}else if(q&&document.activeElement===W.current){var Ce;(Ce=h.current)===null||Ce===void 0||Ce.focus({preventScroll:!0})}}break}case ge.ESC:{N&&g&&N(x);break}}};f.exports.useEffect(function(){if(i&&v){var p;(p=U.current)===null||p===void 0||p.focus({preventScroll:!0})}},[i,v]);var ve=f.exports.useState(!1),ae=Fe(ve,2),me=ae[0],ie=ae[1],C=f.exports.useContext(Re),X;d===!1?X={distance:0}:d===!0?X={}:X=d||{};var z=(o=(r=(t=X)===null||t===void 0?void 0:t.distance)!==null&&r!==void 0?r:C==null?void 0:C.pushDistance)!==null&&o!==void 0?o:180,pe=f.exports.useMemo(function(){return{pushDistance:z,push:function(){ie(!0)},pull:function(){ie(!1)}}},[z]);f.exports.useEffect(function(){if(i){var p;C==null||(p=C.push)===null||p===void 0||p.call(C)}else{var x;C==null||(x=C.pull)===null||x===void 0||x.call(C)}},[i]),f.exports.useEffect(function(){i&&L&&(m==null||m.lock())},[i,L]),f.exports.useEffect(function(){return function(){var p;m==null||m.unLock(),C==null||(p=C.pull)===null||p===void 0||p.call(C)}},[]);var Z=L&&c(Le,{...V,visible:i,children:function(p,x){var Y=p.className,q=p.style;return c("div",{className:S("".concat(a,"-mask"),Y,H),style:_(_({},q),B),onClick:$?N:void 0,ref:x})}},"mask"),ee=typeof b=="function"?b(l):b,K={};if(me&&z)switch(l){case"top":K.transform="translateY(".concat(z,"px)");break;case"bottom":K.transform="translateY(".concat(-z,"px)");break;case"left":K.transform="translateX(".concat(z,"px)");break;default:K.transform="translateX(".concat(-z,"px)");break}l==="left"||l==="right"?K.width=We(j):K.height=We(T);var et=c(Le,{...ee,visible:i,forceRender:u,onVisibleChanged:function(x){R==null||R(x),x||m==null||m.unLock()},removeOnLeave:!1,leavedClassName:"".concat(a,"-content-wrapper-hidden"),children:function(p,x){var Y=p.className,q=p.style;return c("div",{className:S("".concat(a,"-content-wrapper"),Y),style:_(_(_({},K),q),D),children:c(Dt,{containerRef:x,prefixCls:a,className:I,style:M,children:E})})}},"panel"),Ie=_({},P);return y&&(Ie.zIndex=y),c(Re.Provider,{value:pe,children:O("div",{className:S(a,"".concat(a,"-").concat(l),k,(n={},G(n,"".concat(a,"-open"),i),G(n,"".concat(a,"-inline"),s),n)),style:Ie,tabIndex:-1,ref:U,onKeyDown:F,children:[Z,c("div",{tabIndex:0,ref:W,style:ze,"aria-hidden":"true","data-sentinel":"start"}),et,c("div",{tabIndex:0,ref:h,style:ze,"aria-hidden":"true","data-sentinel":"end"})]})})}var Rt=function(){return document.body},Qe=function(o){var r=o.open,t=o.getContainer,n=o.forceRender,a=o.wrapperClassName,i=o.prefixCls,l=o.afterOpenChange,s=o.destroyOnClose,d=f.exports.useState(!1),u=Fe(d,2),v=u[0],g=u[1],m=function(y){g(y),l==null||l(y)};if(!n&&!v&&!r&&s)return null;var k=_(_({},o),{},{prefixCls:i,afterOpenChange:m});return t===!1?c(Ae,{...k,inline:!0}):c(jt,{visible:r,forceRender:n,getContainer:t,wrapperClassName:a,children:function(P){var y=P.scrollLocker;return c(Ae,{...k,scrollLocker:y})}})};Qe.defaultProps={open:!1,getContainer:Rt,prefixCls:"rc-drawer",placement:"right",autoFocus:!0,keyboard:!0,width:378,mask:!0,maskClosable:!0};var Wt=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};nt("default","large");var zt={distance:180};function At(e){var o=e.width,r=e.height,t=e.size,n=t===void 0?"default":t,a=e.closable,i=a===void 0?!0:a,l=e.mask,s=l===void 0?!0:l,d=e.push,u=d===void 0?zt:d,v=e.closeIcon,g=v===void 0?c(dt,{}):v,m=e.bodyStyle,k=e.drawerStyle,P=e.className,y=e.visible,I=e.children,M=e.style,b=e.title,j=e.headerStyle,T=e.onClose,E=e.footer,D=e.footerStyle,L=e.prefixCls,$=e.getContainer,V=e.extra,H=e.afterVisibleChange,B=Wt(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange"]),R=f.exports.useContext(Oe),N=R.getPopupContainer,U=R.getPrefixCls,W=R.direction,h=U("drawer",L),F=$===void 0&&N?function(){return N(document.body)}:$,ve=i&&c("button",{type:"button",onClick:T,"aria-label":"Close",className:"".concat(h,"-close"),children:g});function ae(){return!b&&!i?null:O("div",{className:S("".concat(h,"-header"),G({},"".concat(h,"-header-close-only"),i&&!b&&!V)),style:j,children:[O("div",{className:"".concat(h,"-header-title"),children:[ve,b&&c("div",{className:"".concat(h,"-title"),children:b})]}),V&&c("div",{className:"".concat(h,"-extra"),children:V})]})}function me(){if(!E)return null;var Z="".concat(h,"-footer");return c("div",{className:Z,style:D,children:E})}var ie=S(G({"no-mask":!s},"".concat(h,"-rtl"),W==="rtl"),P),C=f.exports.useMemo(function(){return o!=null?o:n==="large"?736:378},[o,n]),X=f.exports.useMemo(function(){return r!=null?r:n==="large"?736:378},[r,n]),z={motionName:$e(h,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0},pe=function(ee){return{motionName:$e(h,"panel-motion-".concat(ee)),motionAppear:!0,motionEnter:!0,motionLeave:!0}};return c(ft,{status:!0,override:!0,children:c(Qe,{prefixCls:h,onClose:T,...B,open:y,mask:s,push:u,width:C,height:X,rootClassName:ie,getContainer:F,afterOpenChange:function(ee){H==null||H(ee)},maskMotion:z,motion:pe,rootStyle:M,children:O("div",{className:"".concat(h,"-wrapper-body"),style:ke({},k),children:[ae(),c("div",{className:"".concat(h,"-body"),style:m,children:I}),me()]})})})}var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const Ht=Vt;var Ze=function(o,r){return c(ut,{..._(_({},o),{},{ref:r,icon:Ht})})};Ze.displayName="DatabaseOutlined";const Bt=f.exports.forwardRef(Ze),Ft="_header_pe6i3_1",Kt="_headerLogoWrapper_pe6i3_8",Gt="_headerRight_pe6i3_18",Ut="_sider_pe6i3_22",se={header:Ft,headerLogoWrapper:Kt,headerRight:Gt,sider:Ut},Xt=({visible:e,module:o,onClose:r})=>{const t=Ke();return c("div",{className:"absolute inset-0",children:O(At,{className:"absolute",placement:"left",maskClosable:!0,closable:!1,getContainer:!1,onClose:r,visible:e,children:[o,"-",JSON.stringify(t)]})})};var re=(e=>(e.Page="Page",e.Entity="Entity",e))(re||{});const Zt=()=>{const e=Ke(),[o,r]=f.exports.useState(""),t=f.exports.useCallback(()=>{e.pageId?r(re.Page):e.entityId?r(re.Entity):r("")},[e]);f.exports.useEffect(()=>{t()},[t]);const n=[{label:"\u9875\u9762",icon:c(vt,{}),key:re.Page},{label:"\u6570\u636E\u6A21\u578B",icon:c(Bt,{}),key:re.Entity}],[a,i]=f.exports.useState(!1),l=({key:s,keyPath:d})=>{s===o?i(u=>!u):(r(s),i(!0))};return O(te,{className:"h-full",children:[O(te.Header,{className:`${se.header} bg-white shadow-md flex justify-between items-center h-full`,children:[c("div",{className:se.headerLogoWrapper,children:c("img",{src:"/modou.svg",alt:""})}),O("div",{className:`flex justify-end items-center ${se.headerRight}`,children:[c(mt,{type:"link",href:"https://runtime.modou.ink",target:"_blank",children:"\u9884\u89C8"}),c(xt,{src:"https://joeschmoe.io/api/v1/random"})]})]}),O(te,{children:[c(te.Sider,{className:se.sider,theme:"light",collapsedWidth:60,collapsible:!0,collapsed:!0,children:c(Tt,{mode:"inline",selectedKeys:[o],onClick:l,items:n})}),O(te.Content,{className:"relative",children:[c(Xt,{onClose:()=>{i(!1),t()},module:o,visible:a}),c(rt,{})]})]})]})};export{Zt as App};
