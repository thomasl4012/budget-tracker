(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(9),r=c.n(a),i=(c(17),c(18),c(19),c(2)),l=c(12),j=c(3),d=c(0),o=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(j.a)(Object(j.a)({},e),{},{expenses:[].concat(Object(l.a)(e.expenses),[t.payload])});case"DELETE":return Object(j.a)(Object(j.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"EDIT":return Object(j.a)(Object(j.a)({},e),{},{budget:t.payload});default:return e}},u={budget:2500,expenses:[{id:123,name:"shopping",cost:40},{id:124,name:"rent",cost:700},{id:125,name:"transportation",cost:75}]},b=Object(s.createContext)(),m=function(e){var t=Object(s.useReducer)(o,u),c=Object(i.a)(t,2),n=c[0],a=c[1];return Object(d.jsx)(b.Provider,{value:{budget:n.budget,expenses:n.expenses,dispatch:a},children:e.children})},x=function(){var e=Object(s.useContext)(b),t=e.budget,c=e.dispatch;return Object(d.jsxs)("div",{className:"alert alert-secondary",children:[Object(d.jsxs)("div",{children:[" Budget : ",t,"\u20ac"]}),Object(d.jsxs)("div",{className:"btn btn-primary",onClick:function(){var e=prompt("Do you want to edit your budget ?");null!=e&&c({type:"EDIT",payload:e})},children:[" ","Edit"]})]})},O=function(){var e=Object(s.useContext)(b),t=e.expenses,c=e.budget,n=t.reduce((function(e,t){return e+t.cost}),0),a=n>c?"alert-danger":"alert-success";return console.log(n),Object(d.jsx)("div",{className:"alert ".concat(a),children:Object(d.jsxs)("span",{children:["Remaining: ",c-n,"\u20ac"]})})},p=function(){var e=Object(s.useContext)(b).expenses.reduce((function(e,t){return e+t.cost}),0);return Object(d.jsx)("div",{className:"alert alert-primary",children:Object(d.jsxs)("span",{children:["Spent so far : ",e,"\u20ac"]})})},h=c(11),v=function(e){var t=e.name,c=e.id,n=e.cost,a=Object(s.useContext)(b).dispatch;return Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[t,Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{className:"badge badge-primary badge-pill mr-3",children:[n,"\u20ac"]}),Object(d.jsx)(h.a,{size:"1.5em",onClick:function(){a({type:"DELETE",payload:c})}})]})]},c)},f=function(){var e=Object(s.useContext)(b).expenses,t=Object(s.useState)(e||[]),c=Object(i.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){a(e)}),[e]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"form-control mb-3 mr-sm-3",type:"Search",placeholder:"Search expenses",onChange:function(t){var c=t.target.value,s=e.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));a(s)}}),Object(d.jsx)("ul",{className:"list-group",children:n.map((function(e){var t=e.id,c=e.name,s=e.cost;return Object(d.jsx)(v,{id:t,name:c,cost:s},t)}))})]})},N=c(10),g=function(){var e=Object(s.useContext)(b).dispatch,t=Object(s.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),j=l[0],o=l[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={name:n,cost:parseInt(j),id:Object(N.v4)()};e({type:"ADD_EXPENSE",payload:c})},children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm col-lg-4",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{required:"required",type:"text",className:"form-control",id:"name",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"col-sm col-lg-4",children:[Object(d.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(d.jsx)("input",{required:"required",type:"text",className:"form-control",id:"cost",value:j,onChange:function(e){return o(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add expense"})})})]})};var y=function(){return Object(d.jsx)(m,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"mt-3",children:"Budget planner"}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(x,{})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(O,{})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(p,{})})]})]}),Object(d.jsx)("h3",{className:"mt-3",children:" Expenses"}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsxs)("div",{className:"col-sm",children:[Object(d.jsx)(f,{})," "]})}),Object(d.jsx)("h3",{className:"mt-3",children:" Add expense"}),Object(d.jsx)("div",{className:" mt-3",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(g,{})})})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2a22631a.chunk.js.map