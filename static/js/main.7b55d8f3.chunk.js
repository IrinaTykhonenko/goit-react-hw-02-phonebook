(this["webpackJsonpgoit-react-hw-02-phonebook-1"]=this["webpackJsonpgoit-react-hw-02-phonebook-1"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},26:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=n(12),s=n(3),u=n(4),l=n(5),d=n(7),b=n(6),h=n(0),m=function(e){var t=e.name,n=e.number,a=e.id,r=e.onDeleteContact;return Object(h.jsxs)("li",{children:[t,":",n,Object(h.jsx)("button",{type:"submit",onClick:function(){return r(a)},children:"Delete contact"})]})},j=function(e){var t=e.findContact,n=e.onDeleteContact;return Object(h.jsx)("ul",{children:t().map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsx)(m,{id:t,name:a,number:r,onDeleteContact:n},t)}))})},f=n(9),C=n.n(f),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.id=C.a.generate(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,number:e.state.number,id:C.a.generate()};e.props.onSubmit(n),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{htmlFor:this.id,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.id,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"}),")"]})}}]),n}(a.Component),p=function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},v=n(11),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:v,filter:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.hasContacts=function(t){return e.state.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},e.addContact=function(t){e.hasContacts(t.name)?alert("".concat(t.name," is already in contacts")):e.setState((function(e){var n=e.contacts;return{contacts:[t].concat(Object(o.a)(n))}}))},e.findContact=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLocaleLowerCase();return n.length?a.filter((function(e){return e.name.toLowerCase().includes(r)})):a},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{onSubmit:this.addContact})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(p,{value:this.state.filter,onChange:this.handleChange}),Object(h.jsx)(j,{findContact:this.findContact,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.7b55d8f3.chunk.js.map