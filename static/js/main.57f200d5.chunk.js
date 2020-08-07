(this["webpackJsonp@rmariuzzo/calendar"]=this["webpackJsonp@rmariuzzo/calendar"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"@rmariuzzo/calendar","version":"1.0.9","description":"","keywords":[],"main":"src/index.tsx","homepage":"https://rmariuzzo.github.io/calendar","dependencies":{"date-fns":"2.15.0","normalize.css":"^8.0.1","polished":"^3.6.5","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","styled-components":"5.1.1","styled-media-helper":"^2.0.2"},"devDependencies":{"@types/react":"16.9.44","@types/react-dom":"16.9.8","@types/styled-components":"5.1.2","typescript":"3.9.7"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject","postversion":"git push origin && git push origin --tags"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')},24:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);n(25);var r=n(0),o=n.n(r),a=n(14),c=n(6),i=n(4),l=n(22),s=n(15),f=n.n(s),h=n(5);const u={mobile:320,tablet:768,desktop:1240},m={white:"#f8f9fc",gray:"#474b5c",primary:"#3069ed"},d={breakpoints:u,media:f()(u),fontFamily:"'Noto Sans JP', sans-serif",fontWeights:{light:200,normal:400,bold:700},fontSizes:{small:12,normal:16,large:18,larger:24,largest:32},borderWidths:{thin:1,normal:3},borderRadiuses:{small:3,normal:6},unit:20,colors:m,boxShadows:{normal:"0 0 ".concat(20,"px ").concat(-20/3,"px ").concat(Object(h.b)(.75,"#fff",m.gray)),large:"0 0 ".concat(20,"px 0 ").concat(Object(h.b)(.75,"#fff",m.gray))},transitions:{all:"all ease-in-out .25s"}};var b=n(9),p=n(19),g=n(34),O=n(40);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=o.a.createElement("path",{fill:"currentColor",d:"M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"});const v=e=>{let t=e.svgRef,n=e.title,r=y(e,["svgRef","title"]);return o.a.createElement("svg",x({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"chevron-left",className:"svg-inline--fa fa-chevron-left fa-w-8",role:"img",viewBox:"0 0 256 512",ref:t},r),n?o.a.createElement("title",null,n):null,j)},w=o.a.forwardRef((e,t)=>o.a.createElement(v,x({svgRef:t},e)));n.p;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=o.a.createElement("path",{fill:"currentColor",d:"M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"});const k=e=>{let t=e.svgRef,n=e.title,r=z(e,["svgRef","title"]);return o.a.createElement("svg",E({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"chevron-right",className:"svg-inline--fa fa-chevron-right fa-w-8",role:"img",viewBox:"0 0 256 512",ref:t},r),n?o.a.createElement("title",null,n):null,S)},M=o.a.forwardRef((e,t)=>o.a.createElement(k,E({svgRef:t},e)));n.p;function R(){const e=Object(c.a)(["\n  flex: 1 1 auto;\n  padding: 0 ","px;\n  text-align: center;\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n\n  "," {\n    font-size: ","px;\n  }\n\n  "," {\n    font-size: ","px;\n  }\n"]);return R=function(){return e},e}function W(){const e=Object(c.a)(["\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: ","px;\n  border: "," solid ","px;\n  border-radius: ","px;\n  background-color: ",";\n  box-shadow: ",";\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    border-color: ",";\n    box-shadow: ",";\n  }\n\n  & > svg {\n    height: ","px;\n    width: ","px;\n\n    &:first-child {\n      margin-right: ","px;\n    }\n\n    &:last-child {\n      margin-left: ","px;\n    }\n  }\n"]);return W=function(){return e},e}function L(){const e=Object(c.a)(["\n  display: inline-flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 100%;\n  height: ","px;\n  padding-bottom: ","px;\n"]);return L=function(){return e},e}const C=i.d.div(L(),60,20),P=i.d.button(W(),e=>Object(h.b)(.25,"#fff",e.theme.colors.gray),60,e=>Object(h.b)(.75,"#fff",e.theme.colors.gray),e=>e.theme.borderWidths.thin,e=>e.theme.borderRadiuses.normal,e=>e.theme.colors.white,e=>e.theme.boxShadows.normal,e=>e.theme.transitions.all,e=>e.theme.colors.gray,e=>Object(h.b)(.5,"#fff",e.theme.colors.gray),e=>e.theme.boxShadows.large,e=>e.theme.unit,e=>e.theme.unit,e=>e.theme.unit/2,e=>e.theme.unit/2),J=i.d.div(R(),20,e=>e.theme.colors.gray,e=>e.theme.fontSizes.large,e=>e.theme.fontWeights.bold,e=>e.theme.media.up("mobile"),e=>e.theme.fontSizes.larger,e=>e.theme.media.up("tablet"),e=>e.theme.fontSizes.largest),N=e=>{const t=e.value,n=e.onChange,r=Object(b.a)(e,["value","onChange"]);return o.a.createElement(C,r,o.a.createElement(P,{onClick:()=>{n(Object(g.a)(t,1))}},o.a.createElement(w,null)),o.a.createElement(J,null,Object(O.a)(t,"MMMM - yyyy")),o.a.createElement(P,{onClick:()=>{n(Object(p.a)(t,1))}},o.a.createElement(M,null)))};var B=n(11),D=n(21),I=n(42),F=n(35),_=n(36),T=n(41),q=n(37),A=n(38),G=n(43),H=n(39),K=n(20);function Q(){const e=Object(c.a)(["\n  text-align: center;\n  padding-top: ","px;\n  height: ","px;\n  font-size: ","px;\n  text-transform: uppercase;\n  font-weight: ",";\n\n  &, a {\n    color: ",";\n  }\n"]);return Q=function(){return e},e}const U=i.d.div(Q(),20,40,e=>e.theme.fontSizes.small,e=>e.theme.fontWeights.bold,e=>Object(h.b)(.5,"#fff",e.theme.colors.gray)),V=()=>o.a.createElement(U,null,"v",K.version," \u2022 by ",o.a.createElement("a",{href:"https://github.com/rmariuzzo",target:"_blank",rel:"noopener noreferrer"},"@rmariuzzo"));function X(){const e=Object(c.a)(["\n    position: relative;\n    font-weight: ",";\n    background-color: ",";\n    box-shadow: ",";\n\n    &:after {\n      content: '';\n      border: "," solid ","px;\n      border-radius: ","px;\n      position: absolute;\n      left: -2px;\n      right: -2px;\n      top: -2px;\n      bottom: -2px;\n    }\n  "]);return X=function(){return e},e}function Y(){const e=Object(c.a)(["\n  flex: 0 0 ","%;\n  height: calc((100vh - ","px - ","px) / 6);\n  color: ",";\n  text-align: right;\n  background-color: ",";\n  padding: ","px;\n\n  ","\n\n  &:nth-last-child(n+8) {\n    border-bottom: "," solid ","px;\n  }\n\n  &:not(:nth-child(7n)) {\n    border-right: "," solid ","px;\n  }\n"]);return Y=function(){return e},e}function Z(){const e=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border-radius: ","px;\n  box-shadow: ",";\n"]);return Z=function(){return e},e}const $=i.d.ul(Z(),e=>e.theme.unit/2,e=>e.theme.boxShadows.normal),ee=i.d.li(Y(),100/7,100,40,e=>Object(h.b)(e.inMonth?0:.75,"#fff",e.theme.colors.gray),e=>Object(h.a)(e.inMonth?1:0,e.theme.colors.white),10,e=>e.today&&Object(i.c)(X(),e=>e.theme.fontWeights.bold,e=>Object(h.a)(.4,e.theme.colors.primary),e=>e.theme.boxShadows.normal,e=>e.theme.colors.primary,e=>e.theme.borderWidths.normal,e=>e.theme.borderRadiuses.small),e=>Object(h.b)(.75,"#fff",e.theme.colors.gray),e=>e.theme.borderWidths.thin,e=>Object(h.b)(.75,"#fff",e.theme.colors.gray),e=>e.theme.borderWidths.thin),te=e=>{const t=e.month,n=Object(b.a)(e,["month"]),r=new Date,a=Object(B.a)(Object(D.a)(t),{weekStartsOn:1}),c=Object(I.a)(Object(F.a)(Object(_.a)(t),{weekStartsOn:1}),6-Object(T.a)(t,{weekStartsOn:1})),i=Object(q.a)({start:a,end:c});return o.a.createElement($,n,i.map(e=>o.a.createElement(ee,{key:e.getTime(),inMonth:Object(A.a)(e,t),today:Object(G.a)(e,r)},1===Object(H.a)(e)&&"".concat(Object(O.a)(e,"MMM")," "),Object(H.a)(e))))};function ne(){const e=Object(c.a)(["\n  height: 100vh;\n  padding: ","px;\n"]);return ne=function(){return e},e}const re=i.d.div(ne(),20),oe=()=>{const e=Object(r.useState)(new Date),t=Object(l.a)(e,2),n=t[0],a=t[1];return o.a.createElement(re,null,o.a.createElement(N,{value:n,onChange:a}),o.a.createElement(te,{month:n}),o.a.createElement(V,null))};function ae(){const e=Object(c.a)(["\n  html,\n  body {\n    background-color: ",";\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: ",";\n  }\n\n  *:focus {\n    outline: "," auto 1px;\n  }\n"]);return ae=function(){return e},e}const ce=Object(i.b)(ae(),e=>e.theme.colors.white,e=>e.theme.fontFamily,e=>e.theme.colors.primary);function ie(){return o.a.createElement(i.a,{theme:d},o.a.createElement(ce,null),o.a.createElement(oe,null))}const le=document.getElementById("root");Object(a.render)(o.a.createElement(ie,null),le)}},[[24,1,2]]]);
//# sourceMappingURL=main.57f200d5.chunk.js.map