(this["webpackJsonpstore-manager"]=this["webpackJsonpstore-manager"]||[]).push([[0],{303:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(80),c=n.n(a),s=(n(303),n(12)),o=n(177),d=n(64),l=n(2),u=function(){return Object(l.jsxs)("nav",{className:"app__header",children:[Object(l.jsx)(d.b,{to:"listing",children:Object(l.jsx)(o.a,{text:"Listing"})}),Object(l.jsx)(d.b,{to:"visualize",children:Object(l.jsx)(o.a,{text:"Visualize"})})]})},j=n(469),b=n(466),p=n(476),m=n(460),h=n(21),O=n(52),x=n(468),g=n(178),f=n(461),v=n(459),_=n(450),y={main:{maxWidth:450}},k={moveMenuItemText:"Move",closeMenuItemText:"Close",menu:f.a,keepInBounds:!0},N=function(e){var t=e.renderTrigger,n=e.renderPositive,r=e.renderNegative,a=e.title,c=void 0===a?"shared:ooopss":a,s=e.message,d=void 0===s?"":s,u=e.negativeText,j=void 0===u?"Annuler":u,b=e.positiveText,p=void 0===b?"shared:proceed":b,f=e.onPositive,N=Object(v.a)(!0),C=Object(h.a)(N,2),P=C[0],S=C[1].toggle,L=Object(v.a)(!1),F=Object(h.a)(L,1)[0],q=Object(_.a)("dialogLabel"),T=Object(_.a)("subTextLabel"),A=i.a.useMemo((function(){return{titleAriaId:q,subtitleAriaId:T,isBlocking:!1,styles:y,dragOptions:F?k:void 0}}),[F,q,T]),I={type:O.a.close,title:c,closeButtonAriaLabel:j,subText:d};return Object(l.jsx)(l.Fragment,{children:t&&t(S,(function(){return Object(l.jsx)(x.a,{hidden:P,onDismiss:S,dialogContentProps:I,modalProps:A,children:Object(l.jsxs)(g.a,{children:[r?Object(l.jsx)(l.Fragment,{children:r(S)}):Object(l.jsx)(o.a,{onClick:S,text:j}),n?Object(l.jsx)(l.Fragment,{children:n(S)}):Object(l.jsx)(m.a,{style:{backgroundColor:"var(--color-danger)",borderColor:"transparent"},onClick:function(){S(),f&&f()},text:p})]})})}))})},C=n(30),P=n(463),S=n(465),L=n(69),F=n(176),q=n(15),T=n(175),A=n.n(T)()((function(e,t){return{products:[1,2,3,4,5,6,7,8,9,10].map((function(e){return{name:"Name ".concat(e),description:"Long product description goes in here for very long time",price:200*e,quantity_in_stock:40*e,id:"".concat(e)}})),push:function(n){var r=t().products;e({products:[n].concat(Object(q.a)(r))})},update:function(n){var r=t().products.map((function(e){return e.id===n.id?n:e}));e({products:r})},remove:function(n){var r=t().products;e({products:r.filter((function(e){return e.id!==n}))})}}})),I=n(471),w={name:"",description:"",price:0,quantity_in_stock:0,id:""},D=L.b({name:L.c().required("Champ Obligatoire !"),price:L.a().required("Champ Obligatoire !"),quantity_in_stock:L.a().required("Champ Obligatoire !")}),M=function(e){var t=e.renderTrigger,n=e.initialProduct,i=void 0===n?w:n,a=Object(r.useState)(!1),c=Object(h.a)(a,2),s=c[0],d=c[1],u={iconName:"Cancel"},j=function(){return d(!s)},b=A(),O=b.update,x=b.push,g={name:i.name,description:i.description,price:i.price,quantity_in_stock:i.quantity_in_stock,id:i.id},f=Object(F.a)({initialValues:g,onSubmit:function(e,t){t.setSubmitting(!0),i.id&&""!==i.id?O(e):(e.id=I.a(),x(e)),console.log("updated data",e),t.setSubmitting(!1),j()},validationSchema:D});return Object(l.jsx)(l.Fragment,{children:t&&t(j,(function(){return Object(l.jsxs)(P.a,{titleAriaId:"titleId",isOpen:s,onDismiss:j,isBlocking:!1,containerClassName:"modal__container",children:[Object(l.jsxs)("div",{className:"modal__header",children:[i.id&&""!==i.id?Object(l.jsxs)("span",{id:"titleId",className:"ms-fontSize-24 ms-fontWeight-semibold",children:["Editer le produit: ",i.name]}):Object(l.jsx)("span",{id:"titleId",className:"ms-fontSize-24 ms-fontWeight-semibold",children:"Ajouter un produit"}),Object(l.jsx)(p.a,{className:"modal__rot",iconProps:u,ariaLabel:"Close popup modal",onClick:j})]}),Object(l.jsxs)("form",{className:"modal__body na_container",onSubmit:f.handleSubmit,children:[Object(l.jsx)(S.a,Object(C.a)(Object(C.a)({label:"Nom du Product"},f.getFieldProps("name")),{},{value:f.values.name})),Object(l.jsx)(S.a,Object(C.a)(Object(C.a)({multiline:!0,label:"Description du Produit"},f.getFieldProps("description")),{},{value:f.values.description})),Object(l.jsx)(S.a,Object(C.a)(Object(C.a)({label:"Prix",suffix:"XAF",type:"number"},f.getFieldProps("price")),{},{value:f.values.price+""})),Object(l.jsx)(S.a,Object(C.a)(Object(C.a)({label:"Quantit\xe9 en Stock",type:"number"},f.getFieldProps("quantity_in_stock")),{},{value:f.values.quantity_in_stock+""})),Object(l.jsxs)("div",{className:"modal__footer",children:[Object(l.jsx)(o.a,{text:"R\xe9initialiser",onClick:f.handleReset}),Object(l.jsx)(m.a,{text:"Sauvegarder",type:"submit",disabled:!(f.dirty&&f.isValid)||f.isSubmitting})]})]})]})}))})},E=function(e){var t={iconName:"Edit"},n={iconName:"Delete"},r=e.product,i=A().remove,a=function(){console.log({message:"Deleting product"}),i(r.id)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"product__item",children:[Object(l.jsx)(j.a,{variant:"xLarge",children:r.name}),Object(l.jsx)(j.a,{variant:"mediumPlus",children:r.price}),Object(l.jsx)(j.a,{variant:"large",children:r.description}),Object(l.jsxs)("div",{className:"product--stock",style:r.quantity_in_stock<5?{fontWeight:"bold"}:{},children:[Object(l.jsx)("span",{children:"Quantit\xe9 en stock: "}),Object(l.jsx)("span",{children:r.quantity_in_stock})]}),Object(l.jsxs)("div",{className:"product--actions",children:[Object(l.jsx)(M,{renderTrigger:function(e,n){return Object(l.jsxs)(b.a,{content:"Editer",id:"ljsd_edit",children:[n(),Object(l.jsx)(p.a,{iconProps:t,title:"Editer",ariaLabel:"Editer",onClick:e})]})},initialProduct:r}),Object(l.jsx)(N,{title:"Suppression d'un produit",message:"\xcates-vous s\xfbre de vouloir supprimer ce produit? Cette action est irreversible.",renderTrigger:function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{content:"Supprimer",id:"sdoiwe_delete",children:Object(l.jsx)(p.a,{iconProps:n,title:"Supprimer",ariaLabel:"Supprimer",onClick:e})}),t()]})},renderPositive:function(e){return Object(l.jsx)(m.a,{text:"Supprimer",onClick:a})}})]})]})})},R=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(M,{renderTrigger:function(e,t){return Object(l.jsxs)("button",{className:"product__new",onClick:e,children:[t(),Object(l.jsx)(b.a,{content:"Nouveau Produit",id:"lksdoiwe",children:Object(l.jsx)(j.a,{variant:"large",children:"Nouveau Produit"})})]})}})})},z=n(31),B=function(e){for(var t=e.data,n=void 0===t?{a:9,b:20,c:30,d:8,e:12}:t,i=Object.entries(n),a=Object(r.useRef)(null),c=[],s=0;s<e.dataLenght;s++)c=[].concat(Object(q.a)(c),["#"+Math.floor(16777215*Math.random()).toString(16)]);var o=z.g().range(c);return Object(r.useEffect)((function(){var e=Math.min(450,450)/2-40,t=z.i(a.current).append("svg").attr("width",450).attr("height",450).append("g").attr("transform","translate(".concat(225,", ").concat(225,")")),n=z.e().value((function(e){return e[1]}))(i);t.selectAll("whatever").data(n).join("path").attr("d",z.a().innerRadius(0).outerRadius(e)).attr("fill",(function(e){return o(e.data[1])})).attr("stroke","#ccc").style("stroke-width","2px").style("opacity",.7)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Repr\xe9sentation des quantit\xe9s sur les produits."}),Object(l.jsxs)("div",{className:"Chart",children:[Object(l.jsx)("div",{ref:a,children:" "}),Object(l.jsx)("div",{children:i.map((function(e){return Object(l.jsxs)("span",{className:"legend",children:[Object(l.jsx)("div",{style:{backgroundColor:"".concat(o(e[0]))},className:"chart_color"})," ",Object(l.jsxs)("span",{children:[e[0]," (",e[1],")"]})]})}))})]})]})},Q=function(){for(var e=A().products,t=z.d(e,(function(e){return e.price})),n=Object(r.useRef)(null),i=10,a=30,c=30,s=60,o=460-s-a,d=400-i-c,u=[],j=0;j<1e3;j++)u=[].concat(Object(q.a)(u),["#"+Math.floor(16777215*Math.random()).toString(16)]);return Object(r.useEffect)((function(){var r=z.i(n.current).append("svg").attr("width",o+s+a).attr("height",d+i+c).append("g").attr("transform","translate("+s+","+i+")"),l=z.h().domain(e.map((function(e){return e.name}))).range([0,o]);r.append("g").attr("transform","translate(0,"+d+")").call(z.b(l));var u=z.f().domain([0,(t||0)+100]).range([d,0]);r.append("g").call(z.c(u)),r.append("g").selectAll("dot").data(e).enter().append("circle").attr("cx",(function(e){return l(e.name)})).attr("cy",(function(e){return u(e.price)})).attr("r",(function(e){return.05*e.quantity_in_stock})).style("fill","#69b3a2")}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Repr\xe9sentation des produits sur les prix et les quantit\xe9."}),Object(l.jsxs)("div",{className:"Chart",children:[Object(l.jsx)("div",{ref:n,children:" "}),Object(l.jsx)("div",{children:e.map((function(e){return Object(l.jsxs)("span",{className:"legend",children:[Object(l.jsx)("div",{className:"chart_color"})," ",Object(l.jsxs)("span",{children:[e.name," (",e.price,")"]})]})}))})]})]})},W=function(){var e=A().products;return Object(l.jsxs)("div",{className:"product__listing",children:[Object(l.jsx)(R,{}),e.map((function(e){return Object(l.jsx)(E,{product:e},e.id)}))]})},V=n(44),J=function(){var e=A().products,t={};return e.forEach((function(e){return t=Object(C.a)(Object(C.a)({},t),{},Object(V.a)({},e.name,e.quantity_in_stock))})),Object(l.jsxs)("div",{className:"visualizer",children:[Object(l.jsx)(B,{data:t,dataLenght:e.length}),Object(l.jsx)(Q,{})]})};var X=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(u,{}),Object(l.jsx)("main",{className:"app__main",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/visualize",component:J}),Object(l.jsx)(s.b,{path:"/listing",component:W}),Object(l.jsx)(s.a,{to:"listing"})]})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,477)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))},H=n(3),K=Object(H.m)({palette:{themePrimary:"#191919",themeLighterAlt:"#e3e3e3",themeLighter:"#cacaca",themeLight:"#b1b1b1",themeTertiary:"#989898",themeSecondary:"#7e7e7e",themeDarkAlt:"#656565",themeDark:"#4c4c4c",themeDarker:"#333333",neutralLighterAlt:"#eceff3",neutralLighter:"#e8ebef",neutralLight:"#dfe1e5",neutralQuaternaryAlt:"#cfd2d6",neutralQuaternary:"#c6c8cc",neutralTertiaryAlt:"#bec0c4",neutralTertiary:"#8ea4bc",neutralSecondary:"#718ba7",neutralPrimaryAlt:"#577391",neutralPrimary:"#10243a",neutralDark:"#2d4866",black:"#1d3650",white:"#f2f5fa"}}),U=n(462);Object(H.x)(K),Object(U.a)(),c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d.a,{children:Object(l.jsx)(X,{})})}),document.getElementById("root")),G()}},[[409,1,2]]]);
//# sourceMappingURL=main.b34d681f.chunk.js.map