(this["webpackJsonpincome-tracker-react"]=this["webpackJsonpincome-tracker-react"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),i=c.n(a),s=(c(12),c(5)),o=c(0);var u=function(e){var t=e.totalIncome;return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Income Tracker"}),Object(o.jsxs)("div",{className:"total-income",children:["$",t]})]})},l=c(7);var j=function(e){var t=e.income,c=e.setIncome,r=Object(n.useRef)(null),a=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(o.jsx)("form",{className:"income-form",onSubmit:function(e){e.preventDefault();var n=a.current.value.split("-"),s=new Date(n[0],n[1],n[2]);c([].concat(Object(l.a)(t),[{desc:r.current.value,price:i.current.value,date:s.getTime()}])),r.current.value="",i.current.value=null,a.current.value=null},children:Object(o.jsxs)("div",{className:"form-inner",children:[Object(o.jsx)("input",{type:"text",name:"desc",id:"desc",placeholder:"Income Description...",ref:r}),Object(o.jsx)("input",{type:"number",name:"price",id:"price",placeholder:"Price...",ref:i}),Object(o.jsx)("input",{type:"date",name:"date",id:"date",placeholder:"Income date...",ref:a}),Object(o.jsx)("input",{type:"submit",value:"Add Income"})]})})};var m=function(e){var t=e.income,c=e.index,n=e.removeIncome,r=new Date(t.date),a=r.getDate(),i=r.getMonth()+1,s=r.getFullYear();return Object(o.jsxs)("div",{className:"income-item",children:[Object(o.jsx)("button",{className:"remove-item",onClick:function(){n(c)},children:"x"}),Object(o.jsx)("div",{className:"desc",children:t.desc}),Object(o.jsxs)("div",{className:"price",children:["$",t.price]}),Object(o.jsx)("div",{className:"date",children:i+"/"+a+"/"+s})]})};var d=function(e){var t=e.income,c=e.setIncome,n=function(e){var n=t.filter((function(t,c){return c!=e}));c(n)};return Object(o.jsx)("div",{className:"income-list",children:t.sort((function(e,t){return e.date-t.date})).map((function(e,t){return Object(o.jsx)(m,{income:e,index:t,removeIncome:n},t)}))})};var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),i=Object(s.a)(a,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){for(var e=0,t=0;t<c.length;t++)e+=parseInt(c[t].price);m(e)}),[c]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{totalIncome:l}),Object(o.jsx)(j,{income:c,setIncome:r}),Object(o.jsx)(d,{income:c,setIncome:r})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.77c8d683.chunk.js.map