(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(7),r=c.n(a),i=(c(13),c(6)),o=c.n(i),l=c(8),j=c(4),h=(c(15),c(1)),d=function(e){var t=e.handleInput,c=e.handleButton;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"search",id:"input",placeholder:"Search News Articles",onChange:t}),Object(h.jsx)("button",{type:"submit",onClick:c,children:"Search"}),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{})})]})})},u=c(3);var b=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=(t[0],t[1]),s=document.getElementById("input"),a=Object(n.useState)(!0),r=Object(j.a)(a,2),i=r[0],b=r[1],p=Object(n.useState)(""),O=Object(j.a)(p,2),x=O[0],g=O[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce1a4e5cf594ca7bd6ae27af898c3a1",{method:"get",headers:new Headers({"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":origin})});case 3:if(void 0!==(t=e.sent)){e.next=8;break}b(!0),e.next=14;break;case 8:return e.next=10,t.json();case 10:c=e.sent,g(c.articles),console.log(c),b(!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:"https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg",className:"App-logo",alt:"logo"}),Object(h.jsx)("h2",{children:"Search News articles"})]}),Object(h.jsxs)("section",{className:"App-section",children:[Object(h.jsx)("h1",{children:"BT React Code Test - by John Doe - #/01/21"}),Object(h.jsx)(d,{handleInput:function(e){c(e.target.value),console.log(e.target.value)},handleButton:function(e){e.preventDefault(),c(s.value),console.log(s.value)}}),i?Object(h.jsx)("div",{children:"Loading ..."}):Object(h.jsx)("div",{className:"row m-3 p-2",children:x.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(u.a,{style:{width:"20rem",height:"40rem"},children:[Object(h.jsx)(u.a.Img,{variant:"top",src:e.urlToImage,style:{height:"12rem"}}),Object(h.jsx)(u.a.Title,{children:Object(h.jsx)("strong",{children:e.title})}),Object(h.jsx)(u.a.Body,{children:Object(h.jsx)(u.a.Text,{children:e.description})}),Object(h.jsx)("a",{href:e.url,className:"btn btn-primary",children:"Goto Official Page"})]})})}))})]}),Object(h.jsx)("div",{className:"extraSpace"}),Object(h.jsx)("footer",{className:"App-footer",children:Object(h.jsx)("h5",{children:" \xa9 BT 2021"})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.d9b4e2bf.chunk.js.map