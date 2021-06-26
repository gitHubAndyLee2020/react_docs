(this.webpackJsonpreact_docs=this.webpackJsonpreact_docs||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(4),s=c.n(o),l=(c(9),c(2)),r=(c(10),c(0));function i(e){return Object(r.jsx)("div",{className:"container-list",children:e.docs.map((function(t){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"list",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"doc-title",children:t.title})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn btn-showDoc",onClick:function(){return e.showDoc(t)},children:"View"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn btn-deleteDoc",onClick:function(){return e.deleteDoc(t)},children:"Delete"})})]})})}))})}function j(e){return""!==e.title?Object(r.jsx)("div",{classNamer:"container",children:Object(r.jsxs)("div",{className:"display",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"doc-title",children:e.title})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"doc-content",children:e.content})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn btn-clearDocs",onClick:function(){return e.clearDisplay()},children:"Clear"})})]})}):null}function u(e){var t="",c=Object(n.useState)(""),a=Object(l.a)(c,2),o=a[0],s=a[1],i=Object(n.useState)(""),j=Object(l.a)(i,2),u=j[0],d=j[1],b=Object(n.useState)(""),O=Object(l.a)(b,2),h=O[0],f=O[1],v=Object(n.useState)(""),x=Object(l.a)(v,2),m=x[0],p=x[1],C=Object(n.useState)(""),g=Object(l.a)(C,2),S=g[0],F=g[1],N=Object(n.useState)(!1),k=Object(l.a)(N,2),D=k[0],y=k[1];t+=e.alterFamily,t+=" ",t+=e.alterSize;var w={color:e.alterColor,background:e.alterBackgroundColor};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"styling-bar",children:[Object(r.jsxs)("select",{className:"btn-create drop-down",value:h,onChange:function(t){f(t.target.value),e.setFontFamily(t.target.value)},children:[Object(r.jsx)("option",{value:"sans-serif",children:"Sans-Serif"}),Object(r.jsx)("option",{value:"serif",children:"Serif"}),Object(r.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(r.jsx)("option",{value:"cursive",children:"Cursive"}),Object(r.jsx)("option",{value:"minecraft",children:"Minecraft"})]}),Object(r.jsxs)("select",{className:"btn-create drop-down",value:m,onChange:function(t){p(t.target.value),e.setFontSize(t.target.value)},children:[Object(r.jsx)("option",{value:"s12",children:"12"}),Object(r.jsx)("option",{value:"s14",children:"14"}),Object(r.jsx)("option",{value:"s16",children:"16"}),Object(r.jsx)("option",{value:"s18",children:"18"}),Object(r.jsx)("option",{value:"s24",children:"24"})]}),Object(r.jsx)("input",{className:"btn-create btn-color",type:"color",value:S,onChange:function(t){F(t.target.value),e.setFontColor(t.target.value)}}),Object(r.jsx)("button",{className:"btn-create btn-darkTheme",onClick:function(){D?(e.setFontColor(""!==S?S:"black"),e.setBackgroundColor("white"),y(!1)):(e.setFontColor(""!==S?S:"#FFFF00"),e.setBackgroundColor("#181818"),y(!0))},children:"Dark Theme"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},value:o,style:w,className:t+" title-field"})}),Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{onChange:function(e){return d(e.target.value)},value:u,style:w,className:t+" content-field"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn-control btn-add",onClick:function(){e.uploadDoc({title:o,content:u}),s(""),d("")},children:"Add"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn-control btn-clear",onClick:function(){return e.clearCreateDocs()},children:"Clear"})})]})}function d(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn btn-addCreateDocs",onClick:function(){return e.addCreateDocs()},children:"Create Documentation"})})}u.defaultProps={alterColor:"black",alterSize:12,alterFamily:"sans-serif",alterBackgroundColor:"white"};var b=function(){var e="sans-serif",t=Object(n.useState)({documents:[]}),c=Object(l.a)(t,2),a=c[0],o=c[1],s=Object(n.useState)(""),b=Object(l.a)(s,2),O=b[0],h=b[1],f=Object(n.useState)(""),v=Object(l.a)(f,2),x=v[0],m=v[1],p=Object(n.useState)(!0),C=Object(l.a)(p,2),g=C[0],S=C[1],F=Object(n.useState)(!1),N=Object(l.a)(F,2),k=N[0],D=N[1],y=Object(n.useState)("12"),w=Object(l.a)(y,2),B=w[0],T=w[1],z=Object(n.useState)(""),E=Object(l.a)(z,2),P=E[0],J=E[1],L=Object(n.useState)(e),I=Object(l.a)(L,2),M=I[0],_=I[1],A=Object(n.useState)(""),V=Object(l.a)(A,2),q=V[0],G=V[1];return Object(n.useEffect)((function(){fetch("http://localhost:3000/docs").then((function(e){return e.json()})).then((function(e){return o({documents:e})}))}),[]),Object(r.jsxs)("div",{children:[k?null:Object(r.jsx)(d,{addCreateDocs:function(){D(!0)}}),k?null:Object(r.jsx)(i,{docs:a.documents,showDoc:function(e){S(!0),h(e.title),m(e.content)},deleteDoc:function(e){var t=a.documents;fetch("http://localhost:3000/docs/".concat(e.id),{method:"DELETE"}).then((function(c){if(c.ok){var n=t.indexOf(e);t.splice(n,1),o({documents:t})}}))}}),g&&!k?Object(r.jsx)(j,{title:O,content:x,clearDisplay:function(){S(!1)}}):null,k?Object(r.jsx)(u,{uploadDoc:function(e){var t=a.documents,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:3000/docs",c).then((function(e){return e.json()})).then((function(e){t.push(e),o({documents:t})}))},clearCreateDocs:function(){D(!1),T("12"),_(e),J(""),G("")},setFontSize:T,setFontFamily:_,setFontColor:J,setBackgroundColor:G,alterSize:B,alterFamily:M,alterColor:P,alterBackgroundColor:q}):null]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),O()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.b481dcc3.chunk.js.map