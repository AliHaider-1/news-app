(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(7),r=c.n(a),i=(c(13),c(6)),o=c.n(i),l=c(8),j=c(4),h=(c(15),c(1)),b=function(e){var t=e.handleButton;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"search",id:"input",placeholder:"Search News Articles"}),Object(h.jsx)("button",{type:"submit",onClick:t,children:"Search"})]})})},d=c(3);var u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("Top 10 Headlines of US"),r=Object(j.a)(a,2),i=r[0],u=r[1],p=document.getElementById("input"),O=Object(s.useState)(!0),x=Object(j.a)(O,2),f=x[0],g=x[1],m=Object(s.useState)("https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce1a4e5cf594ca7bd6ae27af898c3a1"),v=Object(j.a)(m,2),w=v[0],y=v[1],S=Object(s.useState)(""),k=Object(j.a)(S,2),N=k[0],B=k[1];Object(s.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(w);case 3:if(void 0!==(t=e.sent)){e.next=8;break}g(!0),e.next=19;break;case 8:if(!(t.status>=400)){e.next=13;break}g(!0),n(t.status+" Bad Request "),e.next=19;break;case 13:return e.next=15,t.json();case 15:c=e.sent,B(c.articles),console.log(c),g(!1);case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),n(e.t0.message),console.log(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}})()()}),[w]);var T=N.slice(0,10);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:"https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg",className:"App-logo",alt:"logo"}),Object(h.jsx)("h2",{children:"Search News articles"})]}),Object(h.jsxs)("section",{className:"App-section",children:[Object(h.jsx)("h1",{children:"BT React Code Test - by John Doe - #/01/21"}),Object(h.jsx)("h4",{children:i}),Object(h.jsx)(b,{handleButton:function(e){e.preventDefault(),y("https://newsapi.org/v2/everything?q=".concat(p.value,"&apiKey=533137d100fe476da2cf7915337b04a3")),u("Showing news articles related to ".concat(p.value)),console.log(p.value)}}),f?Object(h.jsxs)("div",{children:["Loading ...",Object(h.jsxs)("h3",{children:[" ERROR:_ ",c," "]})]}):Object(h.jsx)("div",{className:"row m-3 p-2",children:T.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)(d.a,{style:{width:"20rem",height:"40rem"},children:[Object(h.jsx)(d.a.Img,{variant:"top",src:e.urlToImage,style:{height:"12rem"},alt:e.title}),Object(h.jsx)(d.a.Title,{children:Object(h.jsx)("strong",{children:e.title})}),Object(h.jsx)(d.a.Body,{children:Object(h.jsx)(d.a.Text,{children:e.description})}),Object(h.jsx)("a",{href:e.url,className:"btn btn-primary",children:"Goto Official Page"})]})},t)}))})]}),Object(h.jsx)("div",{className:"extraSpace"}),Object(h.jsx)("footer",{className:"App-footer",children:Object(h.jsx)("h5",{children:" \xa9 BT 2021"})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.bb8a29ac.chunk.js.map