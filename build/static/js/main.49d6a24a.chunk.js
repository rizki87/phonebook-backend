(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),o=t(14),r=t.n(o),u=t(3),i=function(e){var n=e.filteredList,t=e.handleDelete;return Object(c.jsx)("ul",{children:n.map((function(e,n){return Object(c.jsxs)("li",{children:[e.name," ",e.number,Object(c.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},n)}))})},l=function(e){return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:e.value,onChange:e.onChange})]})},s=function(e){return Object(c.jsxs)("form",{onSubmit:e.onSubmitForm,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},d=t(4),b=t.n(d),j="/api/persons",f={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data}))},deletePerson:function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e}))},replace:function(e,n){return b.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))}},h=function(e){var n=e.message,t=e.type;return null===n?null:Object(c.jsx)("div",{className:t,children:n})},m=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),d=Object(u.a)(r,2),b=d[0],j=d[1],m=Object(a.useState)(""),O=Object(u.a)(m,2),v=O[0],p=O[1],x=Object(a.useState)(""),g=Object(u.a)(x,2),w=g[0],C=g[1],N=Object(a.useState)(null),S=Object(u.a)(N,2),k=S[0],y=S[1],A=Object(a.useState)(""),D=Object(u.a)(A,2),I=D[0],P=D[1];Object(a.useEffect)((function(){console.log("effect"),f.getAll().then((function(e){o(e)}))}),[]);var T=w?t.filter((function(e){return e.name.includes(w)})):t;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(h,{message:k,type:I}),Object(c.jsx)(l,{value:w,onChange:function(e){C(e.target.value)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(s,{onSubmitForm:function(e){e.preventDefault();var n={name:b,number:v},c=t.findIndex((function(e){return e.name===b})),a=t.find((function(e){return e.name===b}));-1!==c?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one"))&&f.replace(a.id,n).then((function(e){t[c]=e;var n=t.map((function(e){return e}));o(n),y("Added ".concat(e.name)),P("success"),setTimeout((function(){y(null)}),5e3)})).catch((function(e){console.log(e)})):f.create(n).then((function(e){o(t.concat(e)),j(""),p(""),y("Added ".concat(e.name)),P("success"),setTimeout((function(){y(null)}),5e3)}))},newName:b,handleNameChange:function(e){j(e.target.value)},newNumber:v,handleNumberChange:function(e){p(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(i,{filteredList:T,handleDelete:function(e){var n=t.filter((function(n){return n.id!==e.id}));window.confirm("Delete ".concat(e.name))&&f.deletePerson(e.id).then((function(e){o(n)})).catch((function(t){console.log(t),y("Information of ".concat(e.name," has already been removed from server")),P("error"),setTimeout((function(){y(null)}),5e3),o(n)}))}})]})};t(37);r.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.49d6a24a.chunk.js.map