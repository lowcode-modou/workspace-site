import{a as C,u as z,R as x,b as W,m as $,O as L}from"./main.4b952cf6.js";import{g as P}from"./router.10782de0.js";import{r as n,j as e,_ as M,l as D,n as N,a as u,F as O,au as V,m as r,S as K}from"./client.fc98b091.js";import{K as G}from"./index.modern.f7f7ec74.js";import{p as S,F as q,M as U,a as J,B as _,W as Q,T as v,D as X,b as j,c as Y,I as Z,l as y,C as ee}from"./AppFactoryContext.c7852a25.js";import{A as R,az as te,aA as f,ay as ae}from"./SettingOutlined.e8c07042.js";import{M as E}from"./index.e90dbef1.js";import{L as F}from"./index.c9004ba0.js";var se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const ne=se;var B=function(s,a){return e(R,{...M(M({},s),{},{ref:a,icon:ne})})};B.displayName="DatabaseOutlined";const re=n.exports.forwardRef(B);var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};const oe=ie;var T=function(s,a){return e(R,{...M(M({},s),{},{ref:a,icon:oe})})};T.displayName="MoreOutlined";const le=n.exports.forwardRef(T);var d=(t=>(t.Page="Page",t.Entity="Entity",t))(d||{});const de=()=>e("div",{children:"ModuleManagerEntity"}),ce=()=>{const t=D(E.pagesSelector);return{addPage:n.exports.useCallback(a=>{t(S(o=>{o.push(a)}))},[t])}},pe=()=>{const t=D(E.pageByIdSelector);return{removePage:n.exports.useCallback(a=>{t(S(o=>{Reflect.deleteProperty(o,a)}))},[t])}},me=({searchVal:t,itemAddRef:s})=>{const{appId:a,pageId:o}=C(),c=z(),l=N(E.pagesSelector).filter(i=>i.name.includes(t)),[m]=q.useForm(),{addPage:g}=ce(),{removePage:b}=pe(),h=i=>e(F.Item,{className:I.listItem,onClick:()=>{c(P(x.PAGE,{appId:a,pageId:i.id}))},children:u("div",{className:I.listItemContent,children:[i.id===o?e(v.Link,{children:i.name}):e(v.Text,{children:i.name}),e(X,{trigger:["hover"],overlay:e(j,{onClick:({key:H})=>{switch(H){case"Delete":b(i.id);break}},items:[{label:e(v.Text,{children:"\u590D\u5236"}),key:"Copy"},{label:e(v.Text,{type:"danger",children:"\u5220\u9664"}),key:"Delete"}]}),children:e(le,{className:`${I.moreAction} mm_p-list_item_more_action`})},i.id)]})});return u(O,{children:[s&&V.exports.createPortal(e(U,{form:m,layout:"horizontal",title:"\u521B\u5EFA\u9875\u9762",modalProps:{mask:!1},onFinish:async i=>(await m.validateFields(),console.log(i),g(J.generateDefaultPage(i.name)),m.resetFields(),!0),trigger:e(_,{type:"text",shape:"circle",size:"small",children:e(te,{})}),children:e(Q,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"}],name:"name",label:"\u9875\u9762\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"})}),s),e(F,{dataSource:l,size:"small",rowKey:"id",renderItem:h})]})},I={listItem:r({name:"19u7x2f",styles:"margin-left:-16px;margin-right:-16px;padding-left:16px;padding-right:16px;border:none!important;cursor:default;&:hover{background-color:rgba(0, 0, 0, 0.1);.mm_p-list_item_more_action{display:block!important;}}"}),listItemContent:r({name:"14rdf5a",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;a{cursor:default!important;}"}),moreAction:r({name:"eivff4",styles:"display:none"})},ue=({visible:t,module:s,onClose:a})=>{const o=G(s).with(d.Page,()=>"\u9875\u9762").with(d.Entity,()=>"\u6570\u636E\u6A21\u578B").otherwise(()=>"");n.exports.useEffect(()=>{p("")},[s]);const[c,p]=n.exports.useState(""),l=n.exports.useRef(null),[m,g]=n.exports.useState(!1);return n.exports.useEffect(()=>{t&&g(!0)},[t]),e("div",{className:A.drawerWrapper,children:e(Y,{title:u("div",{children:[u("div",{className:A.drawerTitleWrapper,children:[e("span",{children:o}),e("span",{ref:l})]}),e(Z,{onChange:b=>p(b.target.value),value:c,allowClear:!0,placeholder:"\u641C\u7D22"})]}),headerStyle:{padding:"16px"},bodyStyle:{padding:"16px"},className:A.drawer,placement:"left",width:288,maskClosable:!0,closable:!1,getContainer:!1,onClose:a,open:t,children:m&&u(O,{children:[s===d.Page&&e(me,{itemAddRef:l.current,searchVal:c}),s===d.Entity&&e(de,{itemAddRef:l.current,searchVal:c})]})})})},A={drawerWrapper:r({name:"1i3648n",styles:"position:absolute;top:0;right:0;bottom:0;left:0"}),drawerTitleWrapper:r({name:"1rfcp9j",styles:"display:flex;justify-content:space-between;align-items:center;padding-bottom:16px"}),drawer:r({name:"a4hmbt",styles:"position:absolute"})},ge=()=>u(f.Header,{className:k.header,children:[e("div",{className:k.headerLogoWrapper,children:e("img",{src:"/modou.svg",alt:""})}),u("div",{className:k.headerRight,children:[e(_,{type:"link",href:"https://runtime.modou.ink",target:"_blank",children:"\u9884\u89C8"}),e(ae,{src:"https://joeschmoe.io/api/v1/random"})]})]}),k={header:r({name:"4drpvl",styles:"height:48px!important;line-height:48px!important;padding:0!important;z-index:999999!important;background-color:white!important;box-shadow:rgba(0, 0, 0, 0) 0 0 0 0,rgba(0, 0, 0, 0) 0 0 0 0,rgba(0, 0, 0, 0.1) 0 4px 6px -1px,rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;display:flex;justify-content:space-between;align-items:center"}),headerLogoWrapper:r({name:"fbvhi9",styles:"width:60px;display:flex;align-items:center;justify-content:center;img{height:32px;}"}),headerRight:r({name:"1syo44g",styles:"padding-right:16px;display:flex;justify-content:flex-end;align-items:center"})},he=()=>{const t=C(),s=z(),a=N(E.appAtom),o=y.exports.isEmpty(a),c=y.exports.isEmpty(a.pages);return n.exports.useEffect(()=>{var p,l;o||(c?y.exports.isEmpty(a.entities)||s(P(x.Entity,{...t,entityId:(l=y.exports.head(a.entities))==null?void 0:l.id}),{replace:!0}):s(P(x.PAGE,{...t,pageId:(p=y.exports.head(a.pages))==null?void 0:p.id}),{replace:!0}))},[a.entities,a.pages,o,c,s,t]),e("div",{className:ye.wrapper,children:e(K,{size:"large"})})},ye={wrapper:r({name:"1ichkjj",styles:"height:100%;display:flex;justify-content:center;align-items:center"})},fe=[{title:"\u9875\u9762",icon:e(ee,{}),key:d.Page},{title:"\u6570\u636E\u6A21\u578B",icon:e(re,{}),key:d.Entity}],Ae=()=>{const t=C(),[s,a]=n.exports.useState(""),o=z(),{pathname:c}=W(),p=n.exports.useCallback(()=>{t.pageId?a(d.Page):t.entityId?a(d.Entity):a("")},[t]);n.exports.useEffect(()=>{p()},[p]);const[l,m]=n.exports.useState(!1),g=({key:h})=>{switch(h){case d.Page:h===s?m(i=>!i):(a(h),m(!0));break;case d.Entity:m(!1),o(P(x.Entities,{appId:t.appId}));break}};return $(x.APP,c)?e(he,{}):u(f,{className:w.layout,children:[e(ge,{}),u(f,{children:[e(f.Sider,{className:w.sider,theme:"light",collapsedWidth:60,width:60,collapsible:!0,collapsed:!l,children:e(j,{className:w.menu,style:{width:"60px"},mode:"inline",selectedKeys:[s],onClick:g,items:fe})}),u(f.Content,{className:w.layoutContent,children:[e(ue,{onClose:()=>{m(!1),p()},module:s,visible:l}),e(L,{})]})]})]})},w={layout:r({name:"13udsys",styles:"height:100%"}),menu:r({name:"13udsys",styles:"height:100%"}),layoutContent:r({name:"bjn8wh",styles:"position:relative"}),sider:r({name:"bg7ya7",styles:"z-index:2000!important;position:relative!important;padding:0!important;font-size:16px!important;.ant-layout-sider-trigger{display:none;}.ant-menu-item{padding:0 calc(50% - 16px / 2)!important;border:1px solid transparent!important;&::after{display:none!important;}}.ant-menu-item-icon{font-size:16px!important;}"})};export{Ae as App};
