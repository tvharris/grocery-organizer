(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{369:function(e,t,c){},370:function(e,t,c){},433:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(18),j=c.n(a),b=(c(369),c(41)),f=c(5),o=c(353),O=(c(370),c(332)),i=c(464),u=c(466),s=c(463),d=c(105),l=c(247),x=c(17),w=c(58),h=c.n(w),R=c(465),m=c(66),p=c.n(m),v=c(76),g=c.n(v),P=c(67),C=c.n(P),S=c(74),D=c.n(S),E=c(35),k=c.n(E),F=c(34),y=c.n(F),A=c(68),I=c.n(A),T=c(69),U=c.n(T),L=c(71),G=c.n(L),N=c(72),V=c.n(N),W=c(73),J=c.n(W),M=c(77),_=c.n(M),B=c(70),q=c.n(B),z=c(75),H=c.n(z),K=c(78),Q=c.n(K),X=c(7),Y={Add:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function Z(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/users").then((function(e){return e.json()})).then((function(e){return n(Object(x.a)(e))}))}),[]);return Object(X.jsx)("div",{children:Object(X.jsx)(R.a,{maxWidth:"sm",children:Object(X.jsx)(h.a,{title:"Users",columns:[{title:"id",field:"id",hidden:!0},{title:"Email",field:"email"},{title:"Username",field:"username"}],data:c,icons:Y,editable:{onRowUpdate:function(e,t){return new Promise((function(c){!function(e,t,c){fetch("http://0.0.0.0:5000/users",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.log("Error:",e)}));var r=Object(x.a)(e);r[t.tableData.id]=e,n(Object(x.a)(r)),c()}(e,t,c)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){fetch("http://0.0.0.0:5000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.log("Error:",e)}));var c=Object(x.a)(e);c.push(e),n(c),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){fetch("http://0.0.0.0:5000/users",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.log("Error:",e)}));var r=Object(x.a)(c),a=e.tableData.id;r.splice(a,1),n(Object(x.a)(r)),t()}(e,t)}))}}})})})}var $={Add:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ee(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/grocery_lists").then((function(e){return e.json()})).then((function(e){return n(Object(x.a)(e))}))}),[]);return Object(X.jsx)("div",{children:Object(X.jsx)(R.a,{maxWidth:"sm",children:Object(X.jsx)(h.a,{title:"Grocery Lists",columns:[{title:"id",field:"listID",hidden:!0},{title:"Username",field:"username"},{title:"Date",field:"listDate",type:"date"}],data:c,icons:$,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var a=Object(x.a)(c);a[t.tableData.id]=e,n(Object(x.a)(a)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c);r.push(e),n(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c),a=e.tableData.id;r.splice(a,1),n(Object(x.a)(r)),t()}(e,t)}))}}})})})}var te={Add:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ce(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/ingredients").then((function(e){return e.json()})).then((function(e){return n(Object(x.a)(e))})),console.log(c)}),[]);return Object(X.jsx)("div",{children:Object(X.jsx)(R.a,{maxWidth:"sm",children:Object(X.jsx)(h.a,{title:"Ingredients",columns:[{title:"id",field:"foodGroupID",hidden:!0},{title:"Ingredient",field:"name"},{title:"Food Group",field:"FoodGroups.name"}],data:c,icons:te,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var a=Object(x.a)(c);a[t.tableData.id]=e,n(Object(x.a)(a)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c);r.push(e),n(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c),a=e.tableData.id;r.splice(a,1),n(Object(x.a)(r)),t()}(e,t)}))}}})})})}var re={Add:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ne(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/food_group").then((function(e){return e.json()})).then((function(e){return n(Object(x.a)(e))}))}),[]);return Object(X.jsx)("div",{children:Object(X.jsx)(R.a,{maxWidth:"sm",children:Object(X.jsx)(h.a,{title:"Food Groups",columns:[{title:"id",field:"foodGroupID",hidden:!0},{title:"Food Group",field:"name"}],data:c,icons:re,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var a=Object(x.a)(c);a[t.tableData.id]=e,n(Object(x.a)(a)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c);r.push(e),n(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c),a=e.tableData.id;r.splice(a,1),n(Object(x.a)(r)),t()}(e,t)}))}}})})})}var ae=c(253),je=c(320),be=c(252),fe=c(255),oe=Object(O.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function Oe(){var e=oe(),t=Object(r.useState)([]),c=Object(b.a)(t,2),n=c[0],a=c[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/users").then((function(e){return e.json()})).then((function(e){return a(Object(x.a)(e))})),console.log(n)}),[]);return Object(X.jsx)("div",{children:Object(X.jsxs)(be.a,{className:e.formControl,children:[Object(X.jsx)(ae.a,{id:"demo-simple-select-label",children:"Select User"}),Object(X.jsx)(fe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:function(e){a(e.target.value)},children:n.map((function(e){return Object(X.jsx)(je.a,{value:e.userID,children:e.username})}))})]})})}var ie={Add:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function ue(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/user_ingredients").then((function(e){return e.json()})).then((function(e){return n(Object(x.a)(e))})),console.log(c)}));return Object(X.jsx)("div",{children:Object(X.jsxs)(R.a,{maxWidth:"sm",children:[Object(X.jsx)(Oe,{}),Object(X.jsx)("br",{}),Object(X.jsx)(h.a,{title:"User Ingredients",columns:[{title:"id",field:"id",hidden:!0},{title:"Ingredient",field:"name",lookup:{Carrots:"Carrots",Cilantro:"Cilantro",Milk:"Milk"}}],data:c,icons:ie,editable:{onRowUpdate:function(e,t){return new Promise((function(r){!function(e,t,r){var a=Object(x.a)(c);a[t.tableData.id]=e,n(Object(x.a)(a)),r()}(e,t,r)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c);r.push(e),n(r),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var r=Object(x.a)(c),a=e.tableData.id;r.splice(a,1),n(Object(x.a)(r)),t()}(e,t)}))}}})]})})}var se=c(461),de={Add:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(C.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(I.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(X.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function le(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){fetch("http://0.0.0.0:5000/grocery_lists").then((function(e){return e.json()})).then((function(e){return n(Object(x.a)(e))}))}),[]);var a=Object(r.useState)([{id:1,name:"Carrots"},{id:2,name:"Cilantro"}]),j=Object(b.a)(a,2),f=j[0],o=j[1];return Object(X.jsx)("div",{children:Object(X.jsx)(R.a,{children:Object(X.jsxs)(se.a,{container:!0,spacing:3,children:[Object(X.jsx)(se.a,{item:!0,xs:6,children:Object(X.jsx)(h.a,{title:"Select a Grocery List",columns:[{title:"id",field:"listID",hidden:!0},{title:"Username",field:"username"},{title:"Date",field:"listDate",type:"date"}],data:c,icons:de,actions:[{icon:">",onClick:function(e,t){}}]})}),Object(X.jsx)(se.a,{item:!0,xs:6,children:Object(X.jsx)(h.a,{title:"Selected List",columns:[{title:"id",field:"id",hidden:!0},{title:"Ingredient",field:"name",lookup:{Carrots:"Carrots",Cilantro:"Cilantro",Milk:"Milk"}}],data:f,icons:de,editable:{onRowUpdate:function(e,t){return new Promise((function(c){!function(e,t,c){var r=Object(x.a)(f);r[t.tableData.id]=e,o(Object(x.a)(r)),c()}(e,t,c)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var c=Object(x.a)(f);c.push(e),o(c),t()}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){var c=Object(x.a)(f),r=e.tableData.id;c.splice(r,1),o(Object(x.a)(c)),t()}(e,t)}))}}})})]})})})}var xe=["children","value","index"];function we(e){var t=e.children,c=e.value,r=e.index,n=Object(o.a)(e,xe);return Object(X.jsx)("div",Object(f.a)(Object(f.a)({role:"tabpanel",hidden:c!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:c===r&&Object(X.jsx)(l.a,{p:3,children:Object(X.jsx)(d.a,{children:t})})}))}function he(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Re=Object(O.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function me(){var e=Re(),t=n.a.useState(0),c=Object(b.a)(t,2),r=c[0],a=c[1];return Object(X.jsxs)("div",{className:e.root,children:[Object(X.jsx)(i.a,{position:"static",children:Object(X.jsxs)(u.a,{value:r,onChange:function(e,t){a(t)},"aria-label":"simple tabs example",children:[Object(X.jsx)(s.a,Object(f.a)({label:"Users"},he(0))),Object(X.jsx)(s.a,Object(f.a)({label:"Grocery Lists"},he(1))),Object(X.jsx)(s.a,Object(f.a)({label:"Ingredients"},he(2))),Object(X.jsx)(s.a,Object(f.a)({label:"Food Groups"},he(3))),Object(X.jsx)(s.a,Object(f.a)({label:"User Ingredients"},he(4))),Object(X.jsx)(s.a,Object(f.a)({label:"Grocery-List Ingredients"},he(5)))]})}),Object(X.jsx)(we,{value:r,index:0,children:Object(X.jsx)(Z,{})}),Object(X.jsx)(we,{value:r,index:1,children:Object(X.jsx)(ee,{})}),Object(X.jsx)(we,{value:r,index:2,children:Object(X.jsx)(ce,{})}),Object(X.jsx)(we,{value:r,index:3,children:Object(X.jsx)(ne,{})}),Object(X.jsx)(we,{value:r,index:4,children:Object(X.jsx)(ue,{})}),Object(X.jsx)(we,{value:r,index:5,children:Object(X.jsx)(le,{})})]})}var pe=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,841)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),r(e),n(e),a(e),j(e)}))};j.a.render(Object(X.jsx)(n.a.StrictMode,{children:Object(X.jsx)(me,{})}),document.getElementById("root")),pe()}},[[433,1,3]]]);
//# sourceMappingURL=main.90fcd5b8.chunk.js.map