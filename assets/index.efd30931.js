import{a as re,u as oe,R as D,b as nt,m as it,O as rt}from"./main.74edb39c.js";import{g as V}from"./router.ba4dfc0f.js";import{r as p,H as ce,t as se,a as y,j as o,v as a,W as ot,E as ct,G as st,K as j,O as lt,y as dt,z as ee,q as Se,S as Ce,_ as q,l as Pe,n as Ie,F as we,au as mt,m as b}from"./client.a2305a63.js";import{K as pt}from"./index.modern.f7f7ec74.js";import{P as gt,d as ut,p as Me,F as ht,M as ft,a as xt,B as ze,W as yt,T as X,D as vt,b as Ee,c as St,I as bt,l as _,C as Ct}from"./AppFactoryContext.040895f6.js";import{C as Pt,N as It,aC as be,R as wt,A as Ne,az as Mt,aA as $,ay as zt}from"./SettingOutlined.4d1860b2.js";import{M as J}from"./index.ef1ae116.js";var Ae=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r},Et=function(e){var r=e.prefixCls,n=e.className,s=e.avatar,c=e.title,l=e.description,d=Ae(e,["prefixCls","className","avatar","title","description"]),i=p.exports.useContext(ce),u=i.getPrefixCls,g=u("list",r),m=se("".concat(g,"-item-meta"),n),C=y("div",{className:"".concat(g,"-item-meta-content"),children:[c&&o("h4",{className:"".concat(g,"-item-meta-title"),children:c}),l&&o("div",{className:"".concat(g,"-item-meta-description"),children:l})]});return y("div",{...d,className:m,children:[s&&o("div",{className:"".concat(g,"-item-meta-avatar"),children:s}),(c||l)&&C]})},Nt=function(e,r){var n=e.prefixCls,s=e.children,c=e.actions,l=e.extra,d=e.className,i=e.colStyle,u=Ae(e,["prefixCls","children","actions","extra","className","colStyle"]),g=p.exports.useContext(le),m=g.grid,C=g.itemLayout,h=p.exports.useContext(ce),w=h.getPrefixCls,N=function(){var I;return p.exports.Children.forEach(s,function(T){typeof T=="string"&&(I=!0)}),I&&p.exports.Children.count(s)>1},R=function(){return C==="vertical"?!!l:!N()},P=w("list",n),A=c&&c.length>0&&o("ul",{className:"".concat(P,"-item-action"),children:c.map(function(S,I){return y("li",{children:[S,I!==c.length-1&&o("em",{className:"".concat(P,"-item-action-split")})]},"".concat(P,"-item-action-").concat(I))})},"actions"),L=m?"div":"li",B=o(L,{...u,...m?{}:{ref:r},className:se("".concat(P,"-item"),a({},"".concat(P,"-item-no-flex"),!R()),d),children:C==="vertical"&&l?[y("div",{className:"".concat(P,"-item-main"),children:[s,A]},"content"),o("div",{className:"".concat(P,"-item-extra"),children:l},"extra")]:[s,A,ot(l,{key:"extra"})]});return m?o(Pt,{ref:r,flex:1,style:i,children:B}):B},Oe=p.exports.forwardRef(Nt);Oe.Meta=Et;const At=Oe;var Ot=function(e){var r,n,s=e.listBorderedCls,c=e.componentCls,l=e.paddingLG,d=e.margin,i=e.padding,u=e.listItemPaddingSM,g=e.marginLG,m=e.radiusLG;return n={},a(n,"".concat(s),(r={border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:m},a(r,"".concat(c,"-header,").concat(c,"-footer,").concat(c,"-item"),{paddingInline:l}),a(r,"".concat(c,"-pagination"),{margin:"".concat(d,"px ").concat(g,"px")}),r)),a(n,"".concat(s).concat(c,"-sm"),a({},"".concat(c,"-item,").concat(c,"-header,").concat(c,"-footer"),{padding:u})),a(n,"".concat(s).concat(c,"-lg"),a({},"".concat(c,"-item,").concat(c,"-header,").concat(c,"-footer"),{padding:"".concat(i,"px ").concat(l,"px")})),n},Lt=function(e){var r,n,s,c,l=e.componentCls,d=e.screenSM,i=e.screenMD,u=e.marginLG,g=e.marginSM,m=e.margin;return c={},a(c,"@media screen and (max-width:".concat(i,")"),(r={},a(r,"".concat(l),a({},"".concat(l,"-item"),a({},"".concat(l,"-item-action"),{marginInlineStart:u}))),a(r,"".concat(l,"-vertical"),a({},"".concat(l,"-item"),a({},"".concat(l,"-item-extra"),{marginInlineStart:u}))),r)),a(c,"@media screen and (max-width: ".concat(d,")"),(s={},a(s,"".concat(l),a({},"".concat(l,"-item"),a({flexWrap:"wrap"},"".concat(l,"-action"),{marginInlineStart:g}))),a(s,"".concat(l,"-vertical"),a({},"".concat(l,"-item"),(n={flexWrap:"wrap-reverse"},a(n,"".concat(l,"-item-main"),{minWidth:e.contentWidth}),a(n,"".concat(l,"-item-extra"),{margin:"auto auto ".concat(m,"px")}),n))),s)),c},Bt=function(e){var r,n,s,c,l,d,i=e.componentCls,u=e.antCls,g=e.controlHeight,m=e.minHeight,C=e.paddingSM,h=e.marginLG,w=e.padding,N=e.listItemPadding,R=e.colorPrimary,P=e.listItemPaddingSM,A=e.listItemPaddingLG,L=e.paddingXS,B=e.margin,S=e.colorText,I=e.colorTextDescription,T=e.motionDurationSlow,U=e.lineWidth;return d={},a(d,"".concat(i),j(j({},lt(e)),(c={position:"relative","*":{outline:"none"}},a(c,"".concat(i,"-header, ").concat(i,"-footer"),{background:"transparent",paddingBlock:C}),a(c,"".concat(i,"-pagination"),a({marginBlockStart:h,textAlign:"end"},"".concat(u,"-pagination-options"),{textAlign:"start"})),a(c,"".concat(i,"-spin"),{minHeight:m,textAlign:"center"}),a(c,"".concat(i,"-items"),{margin:0,padding:0,listStyle:"none"}),a(c,"".concat(i,"-item"),(s={display:"flex",alignItems:"center",justifyContent:"space-between",padding:N,color:S},a(s,"".concat(i,"-item-meta"),(r={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},a(r,"".concat(i,"-item-meta-avatar"),{marginInlineEnd:w}),a(r,"".concat(i,"-item-meta-content"),{flex:"1 0",width:0,color:S}),a(r,"".concat(i,"-item-meta-title"),{marginBottom:e.marginXXS,color:S,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":a({color:S,transition:"all ".concat(T)},"&:hover",{color:R})}),a(r,"".concat(i,"-item-meta-description"),{color:I,fontSize:e.fontSize,lineHeight:e.lineHeight}),r)),a(s,"".concat(i,"-item-action"),(n={flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none"},a(n,"& > li",a({position:"relative",display:"inline-block",padding:"0 ".concat(L,"px"),color:I,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),a(n,"".concat(i,"-item-action-split"),{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:U,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}),n)),s)),a(c,"".concat(i,"-empty"),{padding:"".concat(w,"px 0"),color:I,fontSize:e.fontSizeSM,textAlign:"center"}),a(c,"".concat(i,"-empty-text"),{padding:w,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"}),a(c,"".concat(i,"-item-no-flex"),{display:"block"}),c))),a(d,"".concat(i,"-grid ").concat(u,"-col > ").concat(i,"-item"),{display:"block",maxWidth:"100%",marginBlockEnd:B,paddingBlock:0,borderBlockEnd:"none"}),a(d,"".concat(i,"-vertical ").concat(i,"-item"),(l={alignItems:"initial"},a(l,"".concat(i,"-item-main"),{display:"block",flex:1}),a(l,"".concat(i,"-item-extra"),{marginInlineStart:h}),a(l,"".concat(i,"-item-meta"),a({marginBlockEnd:w},"".concat(i,"-item-meta-title"),{marginBlockEnd:C,color:S,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),a(l,"".concat(i,"-item-action"),{marginBlockStart:w,marginInlineStart:"auto","> li":a({padding:"0 ".concat(w,"px")},"&:first-child",{paddingInlineStart:0})}),l)),a(d,"".concat(i,"-split ").concat(i,"-item"),a({borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.controlLineType," ").concat(e.colorSplit)},"&:last-child",{borderBlockEnd:"none"})),a(d,"".concat(i,"-split ").concat(i,"-header"),{borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),a(d,"".concat(i,"-split").concat(i,"-empty ").concat(i,"-footer"),{borderTop:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),a(d,"".concat(i,"-loading ").concat(i,"-spin-nested-loading"),{minHeight:g}),a(d,"".concat(i,"-split").concat(i,"-something-after-last-item ").concat(u,"-spin-container > ").concat(i,"-items > ").concat(i,"-item:last-child"),{borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),a(d,"".concat(i,"-lg ").concat(i,"-item"),{padding:A}),a(d,"".concat(i,"-sm ").concat(i,"-item"),{padding:P}),a(d,"".concat(i,":not(").concat(i,"-vertical)"),a({},"".concat(i,"-item-no-flex"),a({},"".concat(i,"-item-action"),{float:"right"}))),d};const Tt=ct("List",function(t){var e=st(t,{listBorderedCls:"".concat(t.componentCls,"-bordered"),minHeight:t.controlHeightLG,listItemPadding:"".concat(t.paddingSM,"px 0"),listItemPaddingSM:"".concat(t.paddingXS,"px ").concat(t.padding,"px"),listItemPaddingLG:"".concat(t.padding,"px ").concat(t.paddingLG,"px")});return[Bt(e),Ot(e),Lt(e)]},{contentWidth:220});var Ht=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r},le=p.exports.createContext({});le.Consumer;function ie(t){var e,r=t.pagination,n=r===void 0?!1:r,s=t.prefixCls,c=t.bordered,l=c===void 0?!1:c,d=t.split,i=d===void 0?!0:d,u=t.className,g=t.children,m=t.itemLayout,C=t.loadMore,h=t.grid,w=t.dataSource,N=w===void 0?[]:w,R=t.size,P=t.header,A=t.footer,L=t.loading,B=L===void 0?!1:L,S=t.rowKey,I=t.renderItem,T=t.locale,U=Ht(t,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),de=n&&dt(n)==="object"?n:{},Te=p.exports.useState(de.defaultCurrent||1),me=ee(Te,2),He=me[0],Re=me[1],_e=p.exports.useState(de.defaultPageSize||10),pe=ee(_e,2),$e=pe[0],je=pe[1],Y=p.exports.useContext(ce),De=Y.getPrefixCls,We=Y.renderEmpty,Fe=Y.direction,Ge={current:1,total:0},ge={},ue=function(x){return function(O,E){Re(O),je(E),n&&n[x]&&n[x](O,E)}},Xe=ue("onChange"),Ke=ue("onShowSizeChange"),Ve=function(x,O){if(!I)return null;var E;return typeof S=="function"?E=S(x):S?E=x[S]:E=x.key,E||(E="list-item-".concat(O)),ge[O]=E,I(x,O)},qe=function(){return!!(C||n||A)},Je=function(x,O){return o("div",{className:"".concat(x,"-empty-text"),children:T&&T.emptyText||O("List")})},v=De("list",s),Ue=Tt(v),he=ee(Ue,2),Ye=he[0],Qe=he[1],H=B;typeof H=="boolean"&&(H={spinning:H});var Q=H&&H.spinning,W="";switch(R){case"large":W="lg";break;case"small":W="sm";break}var Ze=se(v,(e={},a(e,"".concat(v,"-vertical"),m==="vertical"),a(e,"".concat(v,"-").concat(W),W),a(e,"".concat(v,"-split"),i),a(e,"".concat(v,"-bordered"),l),a(e,"".concat(v,"-loading"),Q),a(e,"".concat(v,"-grid"),!!h),a(e,"".concat(v,"-something-after-last-item"),qe()),a(e,"".concat(v,"-rtl"),Fe==="rtl"),e),u,Qe),M=j(j(j({},Ge),{total:N.length,current:He,pageSize:$e}),n||{}),fe=Math.ceil(M.total/M.pageSize);M.current>fe&&(M.current=fe);var xe=n?o("div",{className:"".concat(v,"-pagination"),children:o(gt,{...M,onChange:Xe,onShowSizeChange:Ke})}):null,Z=Se(N);n&&N.length>(M.current-1)*M.pageSize&&(Z=Se(N).splice((M.current-1)*M.pageSize,M.pageSize));var ke=Object.keys(h||{}).some(function(f){return["xs","sm","md","lg","xl","xxl"].includes(f)}),ye=It(ke),F=p.exports.useMemo(function(){for(var f=0;f<be.length;f+=1){var x=be[f];if(ye[x])return x}},[ye]),et=p.exports.useMemo(function(){if(!!h){var f=F&&h[F]?h[F]:h.column;if(f)return{width:"".concat(100/f,"%"),maxWidth:"".concat(100/f,"%")}}},[h==null?void 0:h.column,F]),k=Q&&o("div",{style:{minHeight:53}});if(Z.length>0){var ve=Z.map(function(f,x){return Ve(f,x)}),tt=p.exports.Children.map(ve,function(f,x){return o("div",{style:et,children:f},ge[x])});k=h?o(wt,{gutter:h.gutter,children:tt}):o("ul",{className:"".concat(v,"-items"),children:ve})}else!g&&!Q&&(k=Je(v,We||ut));var G=M.position||"bottom",at=p.exports.useMemo(function(){return{grid:h,itemLayout:m}},[JSON.stringify(h),m]);return Ye(o(le.Provider,{value:at,children:y("div",{className:Ze,...U,children:[(G==="top"||G==="both")&&xe,P&&o("div",{className:"".concat(v,"-header"),children:P}),y(Ce,{...H,children:[k,g]}),A&&o("div",{className:"".concat(v,"-footer"),children:A}),C||(G==="bottom"||G==="both")&&xe]})}))}ie.Item=At;var Rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const _t=Rt;var Le=function(e,r){return o(Ne,{...q(q({},e),{},{ref:r,icon:_t})})};Le.displayName="DatabaseOutlined";const $t=p.exports.forwardRef(Le);var jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};const Dt=jt;var Be=function(e,r){return o(Ne,{...q(q({},e),{},{ref:r,icon:Dt})})};Be.displayName="MoreOutlined";const Wt=p.exports.forwardRef(Be);var z=(t=>(t.Page="Page",t.Entity="Entity",t))(z||{});const Ft=()=>o("div",{children:"ModuleManagerEntity"}),Gt=()=>{const t=Pe(J.pagesSelector);return{addPage:p.exports.useCallback(r=>{t(Me(n=>{n.push(r)}))},[t])}},Xt=()=>{const t=Pe(J.pageByIdSelector);return{removePage:p.exports.useCallback(r=>{t(Me(n=>{Reflect.deleteProperty(n,r)}))},[t])}},Kt=({searchVal:t,itemAddRef:e})=>{const{appId:r,pageId:n}=re(),s=oe(),l=Ie(J.pagesSelector).filter(m=>m.name.includes(t)),[d]=ht.useForm(),{addPage:i}=Gt(),{removePage:u}=Xt(),g=m=>o(ie.Item,{className:te.listItem,onClick:()=>{s(V(D.PAGE,{appId:r,pageId:m.id}))},children:y("div",{className:te.listItemContent,children:[m.id===n?o(X.Link,{children:m.name}):o(X.Text,{children:m.name}),o(vt,{trigger:["hover"],overlay:o(Ee,{onClick:({key:C})=>{switch(C){case"Delete":u(m.id);break}},items:[{label:o(X.Text,{children:"\u590D\u5236"}),key:"Copy"},{label:o(X.Text,{type:"danger",children:"\u5220\u9664"}),key:"Delete"}]}),children:o(Wt,{className:`${te.moreAction} mm_p-list_item_more_action`})},m.id)]})});return y(we,{children:[e&&mt.exports.createPortal(o(ft,{form:d,layout:"horizontal",title:"\u521B\u5EFA\u9875\u9762",modalProps:{mask:!1},onFinish:async m=>(await d.validateFields(),console.log(m),i(xt.generateDefaultPage(m.name)),d.resetFields(),!0),trigger:o(ze,{type:"text",shape:"circle",size:"small",children:o(Mt,{})}),children:o(yt,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"}],name:"name",label:"\u9875\u9762\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"})}),e),o(ie,{dataSource:l,size:"small",rowKey:"id",renderItem:g})]})},te={listItem:b({name:"19u7x2f",styles:"margin-left:-16px;margin-right:-16px;padding-left:16px;padding-right:16px;border:none!important;cursor:default;&:hover{background-color:rgba(0, 0, 0, 0.1);.mm_p-list_item_more_action{display:block!important;}}"}),listItemContent:b({name:"14rdf5a",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;a{cursor:default!important;}"}),moreAction:b({name:"eivff4",styles:"display:none"})},Vt=({visible:t,module:e,onClose:r})=>{const n=pt(e).with(z.Page,()=>"\u9875\u9762").with(z.Entity,()=>"\u6570\u636E\u6A21\u578B").otherwise(()=>"");p.exports.useEffect(()=>{c("")},[e]);const[s,c]=p.exports.useState(""),l=p.exports.useRef(null),[d,i]=p.exports.useState(!1);return p.exports.useEffect(()=>{t&&i(!0)},[t]),o("div",{className:ae.drawerWrapper,children:o(St,{title:y("div",{children:[y("div",{className:ae.drawerTitleWrapper,children:[o("span",{children:n}),o("span",{ref:l})]}),o(bt,{onChange:u=>c(u.target.value),value:s,allowClear:!0,placeholder:"\u641C\u7D22"})]}),headerStyle:{padding:"16px"},bodyStyle:{padding:"16px"},className:ae.drawer,placement:"left",width:288,maskClosable:!0,closable:!1,getContainer:!1,onClose:r,open:t,children:d&&y(we,{children:[e===z.Page&&o(Kt,{itemAddRef:l.current,searchVal:s}),e===z.Entity&&o(Ft,{itemAddRef:l.current,searchVal:s})]})})})},ae={drawerWrapper:b({name:"1i3648n",styles:"position:absolute;top:0;right:0;bottom:0;left:0"}),drawerTitleWrapper:b({name:"1rfcp9j",styles:"display:flex;justify-content:space-between;align-items:center;padding-bottom:16px"}),drawer:b({name:"a4hmbt",styles:"position:absolute"})},qt=()=>y($.Header,{className:ne.header,children:[o("div",{className:ne.headerLogoWrapper,children:o("img",{src:"/modou.svg",alt:""})}),y("div",{className:ne.headerRight,children:[o(ze,{type:"link",href:"https://runtime.modou.ink",target:"_blank",children:"\u9884\u89C8"}),o(zt,{src:"https://joeschmoe.io/api/v1/random"})]})]}),ne={header:b({name:"4drpvl",styles:"height:48px!important;line-height:48px!important;padding:0!important;z-index:999999!important;background-color:white!important;box-shadow:rgba(0, 0, 0, 0) 0 0 0 0,rgba(0, 0, 0, 0) 0 0 0 0,rgba(0, 0, 0, 0.1) 0 4px 6px -1px,rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;display:flex;justify-content:space-between;align-items:center"}),headerLogoWrapper:b({name:"fbvhi9",styles:"width:60px;display:flex;align-items:center;justify-content:center;img{height:32px;}"}),headerRight:b({name:"1syo44g",styles:"padding-right:16px;display:flex;justify-content:flex-end;align-items:center"})},Jt=()=>{const t=re(),e=oe(),r=Ie(J.appAtom),n=_.exports.isEmpty(r),s=_.exports.isEmpty(r.pages);return p.exports.useEffect(()=>{var c,l;n||(s?_.exports.isEmpty(r.entities)||e(V(D.Entity,{...t,entityId:(l=_.exports.head(r.entities))==null?void 0:l.id}),{replace:!0}):e(V(D.PAGE,{...t,pageId:(c=_.exports.head(r.pages))==null?void 0:c.id}),{replace:!0}))},[r.entities,r.pages,n,s,e,t]),o("div",{className:Ut.wrapper,children:o(Ce,{size:"large"})})},Ut={wrapper:b({name:"1ichkjj",styles:"height:100%;display:flex;justify-content:center;align-items:center"})},Yt=[{title:"\u9875\u9762",icon:o(Ct,{}),key:z.Page},{title:"\u6570\u636E\u6A21\u578B",icon:o($t,{}),key:z.Entity}],ia=()=>{const t=re(),[e,r]=p.exports.useState(""),n=oe(),{pathname:s}=nt(),c=p.exports.useCallback(()=>{t.pageId?r(z.Page):t.entityId?r(z.Entity):r("")},[t]);p.exports.useEffect(()=>{c()},[c]);const[l,d]=p.exports.useState(!1),i=({key:g})=>{switch(g){case z.Page:g===e?d(m=>!m):(r(g),d(!0));break;case z.Entity:d(!1),n(V(D.Entities,{appId:t.appId}));break}};return it(D.APP,s)?o(Jt,{}):y($,{className:K.layout,children:[o(qt,{}),y($,{children:[o($.Sider,{className:K.sider,theme:"light",collapsedWidth:60,width:60,collapsible:!0,collapsed:!l,children:o(Ee,{className:K.menu,style:{width:"60px"},mode:"inline",selectedKeys:[e],onClick:i,items:Yt})}),y($.Content,{className:K.layoutContent,children:[o(Vt,{onClose:()=>{d(!1),c()},module:e,visible:l}),o(rt,{})]})]})]})},K={layout:b({name:"13udsys",styles:"height:100%"}),menu:b({name:"13udsys",styles:"height:100%"}),layoutContent:b({name:"bjn8wh",styles:"position:relative"}),sider:b({name:"bg7ya7",styles:"z-index:2000!important;position:relative!important;padding:0!important;font-size:16px!important;.ant-layout-sider-trigger{display:none;}.ant-menu-item{padding:0 calc(50% - 16px / 2)!important;border:1px solid transparent!important;&::after{display:none!important;}}.ant-menu-item-icon{font-size:16px!important;}"})};export{ia as App};
