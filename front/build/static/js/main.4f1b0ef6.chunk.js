(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c.n(n),s=c(17),r=c.n(s),i=(c(39),c(20)),b=c(5),o=(c(40),c(19)),l=c(70),a=c(71),O=c(72),h=(c(41),c(2));function d(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],j=t[1];return Object(h.jsx)("div",{children:Object(h.jsx)(O.a,{position:"static",children:Object(h.jsxs)(a.a,{value:c,onChange:function(e,t){j(t)},children:[Object(h.jsx)(l.a,{label:"Users"}),Object(h.jsx)(l.a,{label:"Ingredients"}),Object(h.jsx)(l.a,{label:"GroceryLists"}),Object(h.jsx)(l.a,{label:"User_Ingredients"}),Object(h.jsx)(l.a,{label:"GroceryLists_Ingredients"})]})})})}var u=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],j=t[1],s=Object(n.useState)(!1),r=Object(o.a)(s,2),i=r[0],b=r[1],l=Object(n.useState)([]),a=Object(o.a)(l,2),O=a[0],d=a[1];return Object(n.useEffect)((function(){fetch("https://quiet-brook-53041.herokuapp.com/api").then((function(e){return e.json()})).then((function(e){b(!0),d(e)}),(function(e){b(!0),j(e)}))}),[]),c?Object(h.jsxs)("div",{children:["Error: ",c.message]}):i?Object(h.jsxs)("div",{children:["Response from backend: ",O.hello,Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){d("")},children:"Goodbye World!"})})]}):Object(h.jsx)("div",{children:"Loading..."})};function x(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(d,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/testAPI",children:"Test GET request"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/users",children:"Users"})})]})}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/testAPI",children:Object(h.jsx)(u,{})}),Object(h.jsx)(b.a,{path:"/about",children:Object(h.jsx)(p,{})}),Object(h.jsx)(b.a,{path:"/users",children:Object(h.jsx)(v,{})}),Object(h.jsx)(b.a,{path:"/",children:Object(h.jsx)(f,{})})]})]})]})}function f(){return Object(h.jsx)("h2",{children:"Home"})}function p(){return Object(h.jsx)("h2",{children:"About"})}function v(){return Object(h.jsx)("h2",{children:"Users"})}var g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),j(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.4f1b0ef6.chunk.js.map