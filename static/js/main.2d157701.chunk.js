(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),r=n.n(l),c=(n(11),n(5)),i=n(1),u=n(4),d=n.n(u),s=Object(a.createContext)(),m=function(e){var t=Object(a.useState)((function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]})),n=Object(i.a)(t,2),l=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(l))}),[l]),o.a.createElement("div",null,o.a.createElement(s.Provider,{value:{todos:l,addTodo:function(e,t){r([].concat(Object(c.a)(l),[{title:e,date:t,id:d()()}]))},removeTodo:function(e){r(l.filter((function(t){return t.id!==e})))}}},e.children))},v=function(){var e=Object(a.useContext)(s).todos;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,'"To-Code" List'),o.a.createElement("p",null,"You currently have ",1===e.length?"".concat(e.length," thing "):"".concat(e.length," things "),"left to do."))},f=function(e){var t=e.todo,n=Object(a.useContext)(s).removeTodo;return o.a.createElement("div",null,o.a.createElement("li",{onClick:function(){return n(t.id)}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"date"},t.date)))},E=function(){var e=Object(a.useContext)(s).todos;return o.a.createElement("div",{className:"todo-list"},e.length?o.a.createElement("div",null,o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(f,{key:e.id,todo:e})})))):o.a.createElement("div",{className:"empty"},"Nothing left to code, refactor, review, test? AwesomeSAUCE!"))},h=function(){var e=Object(a.useContext)(s).addTodo,t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],r=n[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),d=u[0],m=u[1];return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(l,d),r(""),m("")}},o.a.createElement("input",{type:"text",placeholder:"Well, you could...",value:l,onChange:function(e){return r(e.target.value)},required:!0}),o.a.createElement("input",{type:"text",placeholder:"Additional Notes/Due Date",value:d,onChange:function(e){return m(e.target.value)}}),o.a.createElement("input",{type:"submit",value:"Add"})))};var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null,o.a.createElement(v,null),o.a.createElement(E,null),o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.2d157701.chunk.js.map