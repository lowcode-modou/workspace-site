import{c as C,_ as c,j as d,a as s,g as ga,m as ua,K as La,r as b,C as L,b as R,o as K,d as la,e as Ea,f as T,h as Ma,i as va,k as X,l as $a,S as Oa,u as Ra}from"./index.8c2286fa.js";import{T as Ga,L as ea,S as Wa,E as Da,A as ja}from"./SettingOutlined.f25d4880.js";import{A as Fa,R as ha,C as ma,E as qa}from"./EditOutlined.cacd016f.js";var Ka=function(a){var e,t,r=a.prefixCls,i=a.className,o=a.style,l=a.size,g=a.shape,u=C((e={},c(e,"".concat(r,"-lg"),l==="large"),c(e,"".concat(r,"-sm"),l==="small"),e)),v=C((t={},c(t,"".concat(r,"-circle"),g==="circle"),c(t,"".concat(r,"-square"),g==="square"),c(t,"".concat(r,"-round"),g==="round"),t)),h=typeof l=="number"?{width:l,height:l,lineHeight:"".concat(l,"px")}:{};return d("span",{className:C(r,u,v,i),style:s(s({},h),o)})};const V=Ka;var Xa=new La("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),J=function(a){return{height:a,lineHeight:"".concat(a,"px")}},O=function(a){return s({width:a},J(a))},Va=function(a){return{position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:a.skeletonLoadingBackground,animationName:Xa,animationDuration:a.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}},Y=function(a){return s({width:a*5,minWidth:a*5},J(a))},Ja=function(a){var e,t=a.skeletonAvatarCls,r=a.color,i=a.controlHeight,o=a.controlHeightLG,l=a.controlHeightSM;return e={},c(e,"".concat(t),s({display:"inline-block",verticalAlign:"top",background:r},O(i))),c(e,"".concat(t).concat(t,"-circle"),{borderRadius:"50%"}),c(e,"".concat(t).concat(t,"-lg"),s({},O(o))),c(e,"".concat(t).concat(t,"-sm"),s({},O(l))),e},Qa=function(a){var e,t=a.controlHeight,r=a.skeletonInputCls,i=a.controlHeightLG,o=a.controlHeightSM,l=a.color;return e={},c(e,"".concat(r),s({display:"inline-block",verticalAlign:"top",background:l},Y(t))),c(e,"".concat(r,"-lg"),s({},Y(i))),c(e,"".concat(r,"-sm"),s({},Y(o))),e},da=function(a){return s({width:a},J(a))},Ua=function(a){var e,t,r=a.skeletonImageCls,i=a.imageSizeBase,o=a.color;return t={},c(t,"".concat(r),s(s({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:o},da(i*2)),(e={},c(e,"".concat(r,"-path"),{fill:"#bfbfbf"}),c(e,"".concat(r,"-svg"),s(s({},da(i)),{maxWidth:i*4,maxHeight:i*4})),c(e,"".concat(r,"-svg").concat(r,"-svg-circle"),{borderRadius:"50%"}),e))),c(t,"".concat(r).concat(r,"-circle"),{borderRadius:"50%"}),t},Z=function(a,e,t){var r,i=a.skeletonButtonCls;return r={},c(r,"".concat(t).concat(i,"-circle"),{width:e,minWidth:e,borderRadius:"50%"}),c(r,"".concat(t).concat(i,"-round"),{borderRadius:e}),r},k=function(a){return s({width:a*2,minWidth:a*2},J(a))},Ya=function(a){var e=a.radiusSM,t=a.skeletonButtonCls,r=a.controlHeight,i=a.controlHeightLG,o=a.controlHeightSM,l=a.color;return s(s(s(s(s(c({},"".concat(t),s({display:"inline-block",verticalAlign:"top",background:l,borderRadius:e,width:r*2,minWidth:r*2},k(r))),Z(a,r,t)),c({},"".concat(t,"-lg"),s({},k(i)))),Z(a,i,"".concat(t,"-lg"))),c({},"".concat(t,"-sm"),s({},k(o)))),Z(a,o,"".concat(t,"-sm")))},Za=function(a){var e,t,r,i,o,l=a.componentCls,g=a.skeletonAvatarCls,u=a.skeletonTitleCls,v=a.skeletonParagraphCls,h=a.skeletonButtonCls,m=a.skeletonInputCls,S=a.skeletonImageCls,x=a.controlHeight,f=a.controlHeightLG,N=a.controlHeightSM,y=a.color,M=a.padding,$=a.marginSM,w=a.borderRadius,z=a.skeletonTitleHeight,P=a.skeletonBlockRadius,H=a.skeletonParagraphLineHeight,I=a.controlHeightXS,B=a.skeletonParagraphMarginTop;return o={},c(o,"".concat(l),(r={display:"table",width:"100%"},c(r,"".concat(l,"-header"),(e={display:"table-cell",paddingInlineEnd:M,verticalAlign:"top"},c(e,"".concat(g),s({display:"inline-block",verticalAlign:"top",background:y},O(x))),c(e,"".concat(g,"-circle"),{borderRadius:"50%"}),c(e,"".concat(g,"-lg"),s({},O(f))),c(e,"".concat(g,"-sm"),s({},O(N))),e)),c(r,"".concat(l,"-content"),(t={display:"table-cell",width:"100%",verticalAlign:"top"},c(t,"".concat(u),c({width:"100%",height:z,background:y,borderRadius:P},"+ ".concat(v),{marginBlockStart:N})),c(t,"".concat(v),{padding:0,"> li":{width:"100%",height:H,listStyle:"none",background:y,borderRadius:P,"+ li":{marginBlockStart:I}}}),c(t,"".concat(v,"> li:last-child:not(:first-child):not(:nth-child(2))"),{width:"61%"}),t)),c(r,"&-round ".concat(l,"-content"),c({},"".concat(u,", ").concat(v," > li"),{borderRadius:w})),r)),c(o,"".concat(l,"-with-avatar ").concat(l,"-content"),c({},"".concat(u),c({marginBlockStart:$},"+ ".concat(v),{marginBlockStart:B}))),c(o,"".concat(l).concat(l,"-element"),s(s(s(s({display:"inline-block",width:"auto"},Ya(a)),Ja(a)),Qa(a)),Ua(a))),c(o,"".concat(l).concat(l,"-block"),(i={width:"100%"},c(i,"".concat(h),{width:"100%"}),c(i,"".concat(m),{width:"100%"}),i)),c(o,"".concat(l).concat(l,"-active"),c({},`
        `.concat(u,`,
        `).concat(v,` > li,
        `).concat(g,`,
        `).concat(h,`,
        `).concat(m,`,
        `).concat(S,`
      `),s({},Va(a)))),o};const j=ga("Skeleton",function(n){var a=n.componentCls,e=ua(n,{skeletonAvatarCls:"".concat(a,"-avatar"),skeletonTitleCls:"".concat(a,"-title"),skeletonParagraphCls:"".concat(a,"-paragraph"),skeletonButtonCls:"".concat(a,"-button"),skeletonInputCls:"".concat(a,"-input"),skeletonImageCls:"".concat(a,"-image"),imageSizeBase:n.controlHeight*1.5,skeletonTitleHeight:n.controlHeight/2,skeletonBlockRadius:n.radiusSM,skeletonParagraphLineHeight:n.controlHeight/2,skeletonParagraphMarginTop:n.marginLG+n.marginXXS,borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(n.color," 25%, ").concat(n.colorGradientEnd," 37%, ").concat(n.color," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[Za(e)]},function(n){var a=n.colorFillContent,e=n.colorFill;return{color:a,colorGradientEnd:e}});var fa=function(a){var e=a.prefixCls,t=a.className,r=a.active,i=b.exports.useContext(L),o=i.getPrefixCls,l=o("skeleton",e),g=j(l),u=R(g,2),v=u[0],h=u[1],m=K(a,["prefixCls","className"]),S=C(l,"".concat(l,"-element"),c({},"".concat(l,"-active"),r),t,h);return v(d("div",{className:S,children:d(V,{prefixCls:"".concat(l,"-avatar"),...m})}))};fa.defaultProps={size:"default",shape:"circle"};const ka=fa;var pa=function(a){var e,t=a.prefixCls,r=a.className,i=a.active,o=a.block,l=o===void 0?!1:o,g=b.exports.useContext(L),u=g.getPrefixCls,v=u("skeleton",t),h=j(v),m=R(h,2),S=m[0],x=m[1],f=K(a,["prefixCls"]),N=C(v,"".concat(v,"-element"),(e={},c(e,"".concat(v,"-active"),i),c(e,"".concat(v,"-block"),l),e),r,x);return S(d("div",{className:N,children:d(V,{prefixCls:"".concat(v,"-button"),...f})}))};pa.defaultProps={size:"default"};const ae=pa;var ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const te=ee;var Sa=function(a,e){return d(Fa,{...la(la({},a),{},{ref:e,icon:te})})};Sa.displayName="DotChartOutlined";const ne=b.exports.forwardRef(Sa);var re=function(a){var e,t=a.prefixCls,r=a.className,i=a.style,o=a.active,l=b.exports.useContext(L),g=l.getPrefixCls,u=g("skeleton",t),v=C(u,"".concat(u,"-element"),c({},"".concat(u,"-active"),o),r),h=(e=a.children)!==null&&e!==void 0?e:d(ne,{});return d("div",{className:v,children:d("div",{className:C("".concat(u,"-image"),r),style:i,children:h})})};const ce=re;var oe="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",ie=function(a){var e=a.prefixCls,t=a.className,r=a.style,i=a.active,o=b.exports.useContext(L),l=o.getPrefixCls,g=l("skeleton",e),u=j(g),v=R(u,2),h=v[0],m=v[1],S=C(g,"".concat(g,"-element"),c({},"".concat(g,"-active"),i),t,m);return h(d("div",{className:S,children:d("div",{className:C("".concat(g,"-image"),t),style:r,children:d("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(g,"-image-svg"),children:d("path",{d:oe,className:"".concat(g,"-image-path")})})})}))};const le=ie;var Ca=function(a){var e,t=a.prefixCls,r=a.className,i=a.active,o=a.block,l=b.exports.useContext(L),g=l.getPrefixCls,u=g("skeleton",t),v=j(u),h=R(v,2),m=h[0],S=h[1],x=K(a,["prefixCls"]),f=C(u,"".concat(u,"-element"),(e={},c(e,"".concat(u,"-active"),i),c(e,"".concat(u,"-block"),o),e),r,S);return m(d("div",{className:f,children:d(V,{prefixCls:"".concat(u,"-input"),...x})}))};Ca.defaultProps={size:"default"};const de=Ca;var se=function(a){var e=function(u){var v=a.width,h=a.rows,m=h===void 0?2:h;if(Array.isArray(v))return v[u];if(m-1===u)return v},t=a.prefixCls,r=a.className,i=a.style,o=a.rows,l=Ea(Array(o)).map(function(g,u){return d("li",{style:{width:e(u)}},u)});return d("ul",{className:C(t,r),style:i,children:l})};const ge=se;var ue=function(a){var e=a.prefixCls,t=a.className,r=a.width,i=a.style;return d("h3",{className:C(e,t),style:s({width:r},i)})};const ve=ue;function aa(n){return n&&Ma(n)==="object"?n:{}}function he(n,a){return n&&!a?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function me(n,a){return!n&&a?{width:"38%"}:n&&a?{width:"50%"}:{}}function fe(n,a){var e={};return(!n||!a)&&(e.width="61%"),!n&&a?e.rows=3:e.rows=2,e}var E=function(a){var e=a.prefixCls,t=a.loading,r=a.className,i=a.style,o=a.children,l=a.avatar,g=a.title,u=a.paragraph,v=a.active,h=a.round,m=b.exports.useContext(L),S=m.getPrefixCls,x=m.direction,f=S("skeleton",e),N=j(f),y=R(N,2),M=y[0],$=y[1];if(t||!("loading"in a)){var w,z=!!l,P=!!g,H=!!u,I;if(z){var B=s(s({prefixCls:"".concat(f,"-avatar")},he(P,H)),aa(l));I=d("div",{className:"".concat(f,"-header"),children:d(V,{...B})})}var G;if(P||H){var W;if(P){var Q=s(s({prefixCls:"".concat(f,"-title")},me(z,H)),aa(g));W=d(ve,{...Q})}var F;if(H){var U=s(s({prefixCls:"".concat(f,"-paragraph")},fe(z,P)),aa(u));F=d(ge,{...U})}G=T("div",{className:"".concat(f,"-content"),children:[W,F]})}var q=C(f,(w={},c(w,"".concat(f,"-with-avatar"),z),c(w,"".concat(f,"-active"),v),c(w,"".concat(f,"-rtl"),x==="rtl"),c(w,"".concat(f,"-round"),h),w),r,$);return M(T("div",{className:q,style:i,children:[I,G]}))}return typeof o<"u"?o:null};E.defaultProps={avatar:!1,title:!0,paragraph:!0};E.Button=ae;E.Avatar=ka;E.Input=de;E.Image=le;E.Node=ce;const pe=E;var Se=globalThis&&globalThis.__rest||function(n,a){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(e[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(e[t[r]]=n[t[r]]);return e},Ce=function(a){var e=a.prefixCls,t=a.className,r=a.hoverable,i=r===void 0?!0:r,o=Se(a,["prefixCls","className","hoverable"]);return d(va,{children:function(l){var g=l.getPrefixCls,u=g("card",e),v=C("".concat(u,"-grid"),t,c({},"".concat(u,"-grid-hoverable"),i));return d("div",{...o,className:v})}})};const xa=Ce;var xe=function(a){var e=a.antCls,t=a.componentCls,r=a.cardHeadHeight,i=a.cardHeadPadding,o=a.cardPaddingBase,l=a.cardHeadTabsMarginBottom;return s(s({minHeight:r,marginBottom:-1,padding:"0 ".concat(o,"px"),color:a.colorTextHeading,fontWeight:a.fontWeightStrong,fontSize:a.fontSizeLG,background:"transparent",borderBottom:"".concat(a.controlLineWidth,"px ").concat(a.controlLineType," ").concat(a.colorBorderSecondary),borderRadius:"".concat(a.radiusLG,"px ").concat(a.radiusLG,"px 0 0")},X()),c({"&-wrapper":{display:"flex",alignItems:"center"},"&-title":c({display:"inline-block",flex:1,padding:"".concat(i,"px 0"),overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},`
          > `.concat(t,`-typography,
          > `).concat(t,`-typography-edit-content
        `),{insetInlineStart:0,marginTop:0,marginBottom:0})},"".concat(e,"-tabs-top"),{clear:"both",marginBottom:l,color:a.colorText,fontWeight:"normal",fontSize:a.fontSizeBase,"&-bar":{borderBottom:"".concat(a.controlLineWidth,"px ").concat(a.controlLineType," ").concat(a.colorBorderSecondary)}}))},be=function(a){var e=a.cardPaddingBase,t=a.colorBorderSecondary,r=a.cardShadow,i=a.lineWidth;return{width:"33.33%",padding:e,border:0,borderRadius:0,boxShadow:`
      `.concat(i,"px 0 0 0 ").concat(t,`,
      0 `).concat(i,"px 0 0 ").concat(t,`,
      `).concat(i,"px ").concat(i,"px 0 0 ").concat(t,`,
      `).concat(i,"px 0 0 0 ").concat(t,` inset,
      0 `).concat(i,"px 0 0 ").concat(t,` inset;
    `),transition:"all ".concat(a.motionDurationFast),"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:r}}},ye=function(a){var e,t=a.componentCls,r=a.iconCls,i=a.cardActionsLiMargin,o=a.cardActionsIconSize,l=a.colorBorderSecondary;return s(s({margin:0,padding:0,listStyle:"none",background:a.colorBgContainer,borderTop:"".concat(a.controlLineWidth,"px ").concat(a.controlLineType," ").concat(l),display:"flex"},X()),{"& > li":{margin:i,color:a.colorTextDescription,textAlign:"center","> span":(e={position:"relative",display:"block",minWidth:a.cardActionsIconSize*2,fontSize:a.fontSize,lineHeight:a.lineHeight,cursor:"pointer","&:hover":{color:a.colorPrimary,transition:"color ".concat(a.motionDurationFast)}},c(e,"a:not(".concat(t,"-btn), > ").concat(r),{display:"inline-block",width:"100%",color:a.colorTextDescription,lineHeight:"".concat(a.fontSize*a.lineHeight,"px"),transition:"color ".concat(a.motionDurationFast),"&:hover":{color:a.colorPrimary}}),c(e,"> ".concat(r),{fontSize:o,lineHeight:"".concat(o*a.lineHeight,"px")}),e),"&:not(:last-child)":{borderInlineEnd:"".concat(a.controlLineWidth,"px ").concat(a.controlLineType," ").concat(l)}}})},we=function(a){return s(s({margin:"-".concat(a.marginXXS,"px 0"),display:"flex"},X()),{"&-avatar":{paddingInlineEnd:a.padding},"&-detail":{overflow:"hidden","> div:not(:last-child)":{marginBottom:a.marginXS}},"&-title":{overflow:"hidden",color:a.colorTextHeading,fontWeight:a.fontWeightStrong,fontSize:a.fontSizeLG,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&-description":{color:a.colorTextDescription}})},Pe=function(a){var e,t=a.componentCls,r=a.cardPaddingBase,i=a.colorFillAlter,o=a.cardInnerHeadPadding;return e={},c(e,"".concat(t,"-head"),{padding:"0 ".concat(r,"px"),background:i,"&-title":{padding:"".concat(o,"px 0"),fontSize:a.fontSizeBase}}),c(e,"".concat(t,"-body"),{padding:"".concat(a.padding,"px ").concat(r,"px")}),c(e,"".concat(t,"-extra"),{padding:"".concat(o+1.5,"px 0")}),e},He=function(a){var e=a.componentCls;return c({overflow:"hidden"},"".concat(e,"-body"),{userSelect:"none"})},Be=function(a){var e,t,r,i,o=a.componentCls,l=a.cardShadow,g=a.cardHeadHeight,u=a.cardHeadPadding,v=a.cardPaddingBase,h=a.colorBorderSecondary,m=a.boxShadow;return i={},c(i,o,s(s({},$a(a)),(e={position:"relative",background:a.colorBgContainer,borderRadius:a.radiusLG},c(e,"&:not(".concat(o,"-bordered)"),{boxShadow:m}),c(e,"".concat(o,"-head"),xe(a)),c(e,"".concat(o,"-extra"),{marginInlineStart:"auto",padding:"",color:"",fontWeight:"normal",fontSize:a.fontSizeBase}),c(e,"".concat(o,"-body"),s({padding:v},X())),c(e,"".concat(o,"-grid"),be(a)),c(e,"".concat(o,"-cover"),{"> *":{display:"block",width:"100%"},img:{borderRadius:"".concat(a.radiusLG,"px ").concat(a.radiusLG,"px 0 0")}}),c(e,"".concat(o,"-actions"),ye(a)),c(e,"".concat(o,"-meta"),we(a)),e))),c(i,"".concat(o,"-bordered"),c({border:"".concat(a.controlLineWidth,"px ").concat(a.controlLineType," ").concat(h)},"".concat(o,"-cover"),{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1})),c(i,"".concat(o,"-hoverable"),{cursor:"pointer",transition:"box-shadow ".concat(a.motionDurationFast,", border-color ").concat(a.motionDurationFast),"&:hover":{borderColor:"transparent",boxShadow:l}}),c(i,"".concat(o,"-contain-grid"),(t={},c(t,"".concat(o,"-body"),{display:"flex",flexWrap:"wrap"}),c(t,"&:not(".concat(o,"-loading) ").concat(o,"-body"),{marginBlockStart:-a.lineWidth,marginInlineStart:-a.lineWidth,padding:0}),t)),c(i,"".concat(o,"-contain-tabs"),c({},"> ".concat(o,"-head"),(r={},c(r,"".concat(o,"-head-title"),{minHeight:g-u,paddingBottom:0}),c(r,"".concat(o,"-extra"),{paddingBottom:0}),r))),c(i,"".concat(o,"-type-inner"),Pe(a)),c(i,"".concat(o,"-loading"),He(a)),c(i,"".concat(o,"-rtl"),{direction:"rtl"}),i},Ne=function(a){var e,t,r=a.componentCls,i=a.cardPaddingBase,o=a.cardHeadPadding,l=i/2,g=o/2;return c({},"".concat(r,"-small"),(t={},c(t,"> ".concat(r,"-head"),c({minHeight:g*2+a.fontSize,padding:"0 ".concat(l,"px"),fontSize:a.fontSize},"> ".concat(r,"-head-wrapper"),(e={},c(e,"> ".concat(r,"-head-title"),{padding:"".concat(g,"px 0")}),c(e,"> ".concat(r,"-extra"),{padding:"".concat(g,"px 0"),fontSize:a.fontSize}),e))),c(t,"> ".concat(r,"-body"),{padding:l}),t))};const ze=ga("Card",function(n){var a=n.padding,e=ua(n,{cardShadow:n.boxShadowCard,cardHeadHeight:n.fontSizeLG+a*2,cardHeadPadding:a,cardPaddingBase:n.paddingLG,cardHeadTabsMarginBottom:-n.padding-n.lineWidth,cardInnerHeadPadding:n.paddingSM,cardActionsLiMargin:"".concat(n.paddingSM,"px 0"),cardActionsIconSize:n.fontSize});return[Be(e),Ne(e)]});var Ie=globalThis&&globalThis.__rest||function(n,a){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(e[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(e[t[r]]=n[t[r]]);return e};function _e(n){var a=n.map(function(e,t){return d("li",{style:{width:"".concat(100/n.length,"%")},children:d("span",{children:e})},"action-".concat(t))});return a}var Te=b.exports.forwardRef(function(n,a){var e,t,r=b.exports.useContext(L),i=r.getPrefixCls,o=r.direction,l=b.exports.useContext(Oa),g=function(_){var A;(A=n.onTabChange)===null||A===void 0||A.call(n,_)},u=function(){var _;return b.exports.Children.forEach(n.children,function(A){A&&A.type&&A.type===xa&&(_=!0)}),_},v=n.prefixCls,h=n.className,m=n.extra,S=n.headStyle,x=S===void 0?{}:S,f=n.bodyStyle,N=f===void 0?{}:f,y=n.title,M=n.loading,$=n.bordered,w=$===void 0?!0:$,z=n.size,P=n.type,H=n.cover,I=n.actions,B=n.tabList,G=n.children,W=n.activeTabKey,Q=n.defaultActiveTabKey,F=n.tabBarExtraContent,U=n.hoverable,q=n.tabProps,ba=q===void 0?{}:q,ya=Ie(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),p=i("card",v),wa=ze(p),na=R(wa,2),Pa=na[0],Ha=na[1],Ba=d(pe,{loading:!0,active:!0,paragraph:{rows:4},title:!1,children:G}),ra=W!==void 0,Na=s(s({},ba),(e={},c(e,ra?"activeKey":"defaultActiveKey",ra?W:Q),c(e,"tabBarExtraContent",F),e)),ca,oa=B&&B.length?d(Ga,{size:"large",...Na,className:"".concat(p,"-head-tabs"),onChange:g,items:B.map(function(D){var _;return{label:D.tab,key:D.key,disabled:(_=D.disabled)!==null&&_!==void 0?_:!1}})}):null;(y||m||oa)&&(ca=T("div",{className:"".concat(p,"-head"),style:x,children:[T("div",{className:"".concat(p,"-head-wrapper"),children:[y&&d("div",{className:"".concat(p,"-head-title"),children:y}),m&&d("div",{className:"".concat(p,"-extra"),children:m})]}),oa]}));var za=H?d("div",{className:"".concat(p,"-cover"),children:H}):null,Ia=d("div",{className:"".concat(p,"-body"),style:N,children:M?Ba:G}),_a=I&&I.length?d("ul",{className:"".concat(p,"-actions"),children:_e(I)}):null,Ta=K(ya,["onTabChange"]),ia=z||l,Aa=C(p,(t={},c(t,"".concat(p,"-loading"),M),c(t,"".concat(p,"-bordered"),w),c(t,"".concat(p,"-hoverable"),U),c(t,"".concat(p,"-contain-grid"),u()),c(t,"".concat(p,"-contain-tabs"),B&&B.length),c(t,"".concat(p,"-").concat(ia),ia),c(t,"".concat(p,"-type-").concat(P),!!P),c(t,"".concat(p,"-rtl"),o==="rtl"),t),h,Ha);return Pa(T("div",{ref:a,...Ta,className:Aa,children:[ca,za,Ia,_a]}))});const Ae=Te;var Le=globalThis&&globalThis.__rest||function(n,a){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(e[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(e[t[r]]=n[t[r]]);return e},Ee=function(a){return d(va,{children:function(e){var t=e.getPrefixCls,r=a.prefixCls,i=a.className,o=a.avatar,l=a.title,g=a.description,u=Le(a,["prefixCls","className","avatar","title","description"]),v=t("card",r),h=C("".concat(v,"-meta"),i),m=o?d("div",{className:"".concat(v,"-meta-avatar"),children:o}):null,S=l?d("div",{className:"".concat(v,"-meta-title"),children:l}):null,x=g?d("div",{className:"".concat(v,"-meta-description"),children:g}):null,f=S||x?T("div",{className:"".concat(v,"-meta-detail"),children:[S,x]}):null;return T("div",{...u,className:h,children:[m,f]})}})};const Me=Ee;var ta=Ae;ta.Grid=xa;ta.Meta=Me;const sa=ta,$e=()=>d(ea.Header,{className:"!bg-white shadow-md z-50",children:d(ha,{align:"middle",className:"h-full",children:d(ma,{children:d("img",{src:"/modou.svg",className:"h-10",alt:""})})})}),Oe=()=>{const n=Ra();return d(ea.Content,{className:"bg-white w-full",children:d(ha,{gutter:[0,0],children:Array(13).fill(1).map((a,e)=>d(ma,{className:"flex justify-center p-2",xs:{span:24},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:4},xxl:{span:4},span:4,children:d(sa,{onClick:()=>n("/app/appId/page/pageId"),className:"shadow-2xl m-1 w-full",actions:[d(Wa,{},"setting"),d(qa,{},"edit"),d(Da,{},"ellipsis")],children:d(sa.Meta,{avatar:d(ja,{shape:"square",src:`https://joeschmoe.io/api/v1/random?${e}`}),title:"APP NAME",description:"\u6211\u662F APP \u63CF\u8FF0"})})},e))})})},De=()=>T(ea,{className:"h-full",children:[d($e,{}),d(Oe,{})]});export{De as Apps};
