(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),m=t(8),i=t(1),u=(t(24),function(){return l.a.createElement("h1",null,"HOME")}),s=t(18),d=t(10),o=t.n(d),E=t(16),p=function(){var e=Object(E.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/react_people-table/api",e.next=3,fetch("".concat("https://mate-academy.github.io/react_people-table/api","/people.json")).then((function(e){return e.json()}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var a=e.name,t=e.sex,n=e.born,r=e.died,c=e.mother,m=e.father;return l.a.createElement("tr",{className:"Person",key:a},l.a.createElement("td",{className:"m"===t?"man":"woman"},a),l.a.createElement("td",{className:"m"===t?"man":"woman"},"m"===t?"  MAN":" WOMAN"),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",{className:"woman"},c),l.a.createElement("td",{className:"man"},m))},N=function(e){var a=e.people;return l.a.createElement("table",{className:"PeopleTable"},l.a.createElement("thead",{className:"PeopleTable-header"},l.a.createElement("tr",null,l.a.createElement("td",null," NAME "),l.a.createElement("td",null," SEX "),l.a.createElement("td",null," BORN "),l.a.createElement("td",null," DIE "),l.a.createElement("td",null," MOTHER "),l.a.createElement("td",null," FATHER "))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement(T,{name:e.name,sex:e.sex,born:e.born,died:e.died,mother:e.motherName,father:e.fatherName})}))))},g=(t(26),function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){p().then(r)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"People Page"),0===t.length?l.a.createElement("div",{id:"inTurnFadingTextG"},l.a.createElement("div",{id:"inTurnFadingTextG_1",className:"inTurnFadingTextG"},"\u0417"),l.a.createElement("div",{id:"inTurnFadingTextG_2",className:"inTurnFadingTextG"},"\u0430"),l.a.createElement("div",{id:"inTurnFadingTextG_3",className:"inTurnFadingTextG"},"\u0433"),l.a.createElement("div",{id:"inTurnFadingTextG_4",className:"inTurnFadingTextG"},"\u0440"),l.a.createElement("div",{id:"inTurnFadingTextG_5",className:"inTurnFadingTextG"},"\u0443"),l.a.createElement("div",{id:"inTurnFadingTextG_6",className:"inTurnFadingTextG"},"\u0437"),l.a.createElement("div",{id:"inTurnFadingTextG_7",className:"inTurnFadingTextG"},"\u043a"),l.a.createElement("div",{id:"inTurnFadingTextG_8",className:"inTurnFadingTextG"},"\u0430")):l.a.createElement(N,{people:t}))}),x=function(){return l.a.createElement("div",{className:"NotFoundPage"},l.a.createElement("div",{className:"error"},"404"),l.a.createElement("h1",{className:"notFound"},"Page not found!"))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("ul",{className:"navlist"},l.a.createElement("li",{className:"navlist__item"},l.a.createElement(m.b,{to:"/",exact:!0,className:"navlist__link"},"Home")),l.a.createElement("li",{className:"navlist__item"},l.a.createElement(m.b,{to:"/people",exact:!0,className:"navlist__link"},"People Page")))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:u}),l.a.createElement(i.a,{path:"/people",exact:!0,component:g}),l.a.createElement("div",null,l.a.createElement(x,null))))};c.a.render(l.a.createElement(m.a,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e99e15a0.chunk.js.map