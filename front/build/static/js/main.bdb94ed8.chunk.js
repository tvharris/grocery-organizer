(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{369:function(e,t,c){},370:function(e,t,c){},433:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(18),j=c.n(n),b=(c(369),c(29)),f=c(5),O=c(353),o=(c(370),c(332)),i=c(464),u=c(466),s=c(463),d=c(105),l=c(247),x=c(7);var w=c(17),R=c(58),h=c.n(R),m=c(465),p=c(66),v=c.n(p),P=c(76),g=c.n(P),C=c(67),D=c.n(C),S=c(74),k=c.n(S),E=c(36),F=c.n(E),A=c(35),I=c.n(A),U=c(68),L=c.n(U),G=c(69),y=c.n(G),T=c(71),_=c.n(T),N=c(72),V=c.n(N),W=c(73),M=c.n(W),B=c(77),J=c.n(B),q=c(70),z=c.n(q),H=c(75),K=c.n(H),Q=c(78),X=c.n(Q),Y={Add:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(K.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function Z(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/users").then((function(e){return e.json()})).then((function(e){return a(Object(w.a)(e))}))}),[]);return Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{maxWidth:"sm",children:Object(x.jsx)(h.a,{title:"Users",columns:[{title:"id",field:"id",hidden:!0},{title:"Email",field:"email"},{title:"Username",field:"username"}],data:c,icons:Y,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var n=Object(w.a)(c);n[t.tableData.id]=e,a(Object(w.a)(n)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c);r.push(e),a(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c),n=e.tableData.id;r.splice(n,1),a(Object(w.a)(r)),t()}(e,t)}))}}})})})}var $={Add:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(K.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ee(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/grocery_lists").then((function(e){return e.json()})).then((function(e){return a(Object(w.a)(e))}))}),[]);return Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{maxWidth:"sm",children:Object(x.jsx)(h.a,{title:"Grocery Lists",columns:[{title:"id",field:"listID",hidden:!0},{title:"Username",field:"username"},{title:"Date",field:"listDate",type:"date"}],data:c,icons:$,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var n=Object(w.a)(c);n[t.tableData.id]=e,a(Object(w.a)(n)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c);r.push(e),a(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c),n=e.tableData.id;r.splice(n,1),a(Object(w.a)(r)),t()}(e,t)}))}}})})})}var te={Add:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(K.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ce(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/ingredients").then((function(e){return e.json()})).then((function(e){return a(Object(w.a)(e))})),console.log(c)}));return Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{maxWidth:"sm",children:Object(x.jsx)(h.a,{title:"Ingredients",columns:[{title:"id",field:"foodGroupID",hidden:!0},{title:"Ingredient",field:"name"},{title:"Food Group",field:"FoodGroups.name"}],data:c,icons:te,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var n=Object(w.a)(c);n[t.tableData.id]=e,a(Object(w.a)(n)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c);r.push(e),a(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c),n=e.tableData.id;r.splice(n,1),a(Object(w.a)(r)),t()}(e,t)}))}}})})})}var re={Add:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(K.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ae(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/food_group").then((function(e){return e.json()})).then((function(e){return a(Object(w.a)(e))}))}),[]);return Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{maxWidth:"sm",children:Object(x.jsx)(h.a,{title:"Food Groups",columns:[{title:"id",field:"foodGroupID",hidden:!0},{title:"Food Group",field:"name"}],data:c,icons:re,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var n=Object(w.a)(c);n[t.tableData.id]=e,a(Object(w.a)(n)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c);r.push(e),a(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c),n=e.tableData.id;r.splice(n,1),a(Object(w.a)(r)),t()}(e,t)}))}}})})})}var ne=c(253),je=c(320),be=c(252),fe=c(255),Oe=Object(o.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function oe(){var e=Oe(),t=Object(r.useState)([]),c=Object(b.a)(t,2),a=c[0],n=c[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/users").then((function(e){return e.json()})).then((function(e){return n(Object(w.a)(e))})),console.log(a)}),[]);return Object(x.jsx)("div",{children:Object(x.jsxs)(be.a,{className:e.formControl,children:[Object(x.jsx)(ne.a,{id:"demo-simple-select-label",children:"Select User"}),Object(x.jsxs)(fe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:function(e){n(e.target.value)},children:[Object(x.jsx)(je.a,{value:"test",children:"Test"}),a.map((function(e){return Object(x.jsx)(je.a,{value:e.userID,children:e.username})}))]})]})})}var ie={Add:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(K.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ue(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/user_ingredients").then((function(e){return e.json()})).then((function(e){return a(Object(w.a)(e))})),console.log(c)}));return Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{maxWidth:"sm",children:[Object(x.jsx)(oe,{}),Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{title:"User Ingredients",columns:[{title:"id",field:"id",hidden:!0},{title:"Ingredient",field:"name",lookup:{Carrots:"Carrots",Cilantro:"Cilantro",Milk:"Milk"}}],data:c,icons:ie,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var n=Object(w.a)(c);n[t.tableData.id]=e,a(Object(w.a)(n)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c);r.push(e),a(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(w.a)(c),n=e.tableData.id;r.splice(n,1),a(Object(w.a)(r)),t()}(e,t)}))}}})]})})}var se=c(461),de={Add:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(K.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(x.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function le(){var e=Object(r.useState)([{id:1,username:"john_doe",date:"12/2/2012"},{id:2,username:"jane_doe",date:"9/9/1999"}]),t=Object(b.a)(e,2),c=t[0],a=(t[1],Object(r.useState)([{id:1,name:"Carrots"},{id:2,name:"Cilantro"}])),n=Object(b.a)(a,2),j=n[0],f=n[1];return Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(se.a,{container:!0,spacing:3,children:[Object(x.jsx)(se.a,{item:!0,xs:6,children:Object(x.jsx)(h.a,{title:"Select a Grocery List",columns:[{title:"id",field:"id",hidden:!0},{title:"Username",field:"username",lookup:{john_doe:"john_doe",jane_doe:"jane_doe"}},{title:"Date",field:"date",type:"date"}],data:c,icons:de,actions:[{icon:">",onClick:function(e,t){}}]})}),Object(x.jsx)(se.a,{item:!0,xs:6,children:Object(x.jsx)(h.a,{title:"Selected List",columns:[{title:"id",field:"id",hidden:!0},{title:"Ingredient",field:"name",lookup:{Carrots:"Carrots",Cilantro:"Cilantro",Milk:"Milk"}}],data:j,icons:de,editable:{onRowUpdate:function(e,t){return new Promise((function(c){!function(e,t,c){var r=Object(w.a)(j);r[t.tableData.id]=e,f(Object(w.a)(r)),c()}(e,t,c)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var c=Object(w.a)(j);c.push(e),f(c),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var c=Object(w.a)(j),r=e.tableData.id;c.splice(r,1),f(Object(w.a)(c)),t()}(e,t)}))}}})})]})})})}var xe=["children","value","index"];function we(e){var t=e.children,c=e.value,r=e.index,a=Object(O.a)(e,xe);return Object(x.jsx)("div",Object(f.a)(Object(f.a)({role:"tabpanel",hidden:c!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},a),{},{children:c===r&&Object(x.jsx)(l.a,{p:3,children:Object(x.jsx)(d.a,{children:t})})}))}function Re(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var he=Object(o.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function me(){var e=he(),t=a.a.useState(0),c=Object(b.a)(t,2),r=c[0],n=c[1];return Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)(i.a,{position:"static",children:Object(x.jsxs)(u.a,{value:r,onChange:function(e,t){n(t)},"aria-label":"simple tabs example",children:[Object(x.jsx)(s.a,Object(f.a)({label:"Users"},Re(0))),Object(x.jsx)(s.a,Object(f.a)({label:"Grocery Lists"},Re(1))),Object(x.jsx)(s.a,Object(f.a)({label:"Ingredients"},Re(2))),Object(x.jsx)(s.a,Object(f.a)({label:"Food Groups"},Re(3))),Object(x.jsx)(s.a,Object(f.a)({label:"User Ingredients"},Re(4))),Object(x.jsx)(s.a,Object(f.a)({label:"Grocery-List Ingredients"},Re(5)))]})}),Object(x.jsx)(we,{value:r,index:0,children:Object(x.jsx)(Z,{})}),Object(x.jsx)(we,{value:r,index:1,children:Object(x.jsx)(ee,{})}),Object(x.jsx)(we,{value:r,index:2,children:Object(x.jsx)(ce,{})}),Object(x.jsx)(we,{value:r,index:3,children:Object(x.jsx)(ae,{})}),Object(x.jsx)(we,{value:r,index:4,children:Object(x.jsx)(ue,{})}),Object(x.jsx)(we,{value:r,index:5,children:Object(x.jsx)(le,{})})]})}var pe=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,841)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,j=t.getTTFB;c(e),r(e),a(e),n(e),j(e)}))};j.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(me,{})}),document.getElementById("root")),pe()}},[[433,1,3]]]);
//# sourceMappingURL=main.bdb94ed8.chunk.js.map