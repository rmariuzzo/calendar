(this["webpackJsonp@rmariuzzo/calendar"]=this["webpackJsonp@rmariuzzo/calendar"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"@rmariuzzo/calendar","version":"1.0.6","description":"","keywords":[],"main":"src/index.tsx","homepage":"https://rmariuzzo.github.io/calendar","dependencies":{"date-fns":"2.15.0","normalize.css":"^8.0.1","polished":"^3.6.5","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","styled-components":"5.1.1","styled-media-helper":"^2.0.2"},"devDependencies":{"@types/react":"16.9.44","@types/react-dom":"16.9.8","@types/styled-components":"5.1.2","typescript":"3.9.7"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject","postversion":"git push origin && git push origin --tags"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"]}')},24:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);n(25);var r=n(0),a=n.n(r),o=n(14),c=n(5),l=n(4),i=n(22),s=n(15);const u={mobile:320,tablet:768,desktop:1240},d=n.n(s)()(u),h={neutral:"#f8f9fc",neutralDark:"#c3c2c0",neutralDarker:"#474b5c",primary:"#3069ed"},m={breakpoints:u,media:d,fontFamily:"'Noto Sans JP', sans-serif",fontWeights:{light:200,normal:400,bold:700},fontSizes:{small:12,normal:16,large:18,larger:24,largest:32},borderWidths:{thin:1,normal:3},borderRadiuses:{small:3,normal:6},unit:20,colors:h,boxShadows:{neutral:()=>"0 0 ".concat(20,"px ").concat(-20/3,"px ").concat(h.neutral),neutralDark:()=>"0 0 ".concat(20,"px ").concat(-20/3,"px ").concat(h.neutralDark),neutralDarker:()=>"0 0 ".concat(20,"px ").concat(-20/3,"px ").concat(h.neutralDarker)}};var p=n(8),f=n(19),b=n(34),g=n(40);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=a.a.createElement("path",{fill:"currentColor",d:"M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"});const y=e=>{let t=e.svgRef,n=e.title,r=O(e,["svgRef","title"]);return a.a.createElement("svg",x({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"chevron-left",className:"svg-inline--fa fa-chevron-left fa-w-8",role:"img",viewBox:"0 0 256 512",ref:t},r),n?a.a.createElement("title",null,n):null,v)},j=a.a.forwardRef((e,t)=>a.a.createElement(y,x({svgRef:t},e)));n.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=a.a.createElement("path",{fill:"currentColor",d:"M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"});const z=e=>{let t=e.svgRef,n=e.title,r=k(e,["svgRef","title"]);return a.a.createElement("svg",w({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"chevron-right",className:"svg-inline--fa fa-chevron-right fa-w-8",role:"img",viewBox:"0 0 256 512",ref:t},r),n?a.a.createElement("title",null,n):null,E)},S=a.a.forwardRef((e,t)=>a.a.createElement(z,w({svgRef:t},e)));n.p;function D(){const e=Object(c.a)(["\n  flex: 1 1 auto;\n  padding: 0 ","px;\n  text-align: center;\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n\n  "," {\n    font-size: ","px;\n  }\n\n  "," {\n    font-size: ","px;\n  }\n"]);return D=function(){return e},e}function M(){const e=Object(c.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: ","px;\n  border: "," solid ","px;\n  border-radius: ","px;\n  background-color: ",";\n  box-shadow: ",";\n\n  & > svg {\n    height: ","px;\n    width: ","px;\n\n    &:first-child {\n      margin-right: ","px;\n    }\n\n    &:last-child {\n      margin-left: ","px;\n    }\n  }\n"]);return M=function(){return e},e}function R(){const e=Object(c.a)(["\n  display: inline-flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: 100%;\n  height: ","px;\n  padding-bottom: ","px;\n"]);return R=function(){return e},e}const W=l.d.div(R(),60,20),L=l.d.button(M(),60,e=>e.theme.colors.neutralDark,e=>e.theme.borderWidths.thin,e=>e.theme.borderRadiuses.normal,e=>e.theme.colors.neutral,e=>e.theme.boxShadows.neutralDark,e=>e.theme.unit,e=>e.theme.unit,e=>e.theme.unit/2,e=>e.theme.unit/2),C=l.d.div(D(),20,e=>e.theme.colors.neutralDarker,e=>e.theme.fontSizes.large,e=>e.theme.fontWeights.bold,e=>e.theme.media.up("mobile"),e=>e.theme.fontSizes.larger,e=>e.theme.media.up("tablet"),e=>e.theme.fontSizes.largest),P=e=>{const t=e.value,n=e.onChange,r=Object(p.a)(e,["value","onChange"]);return a.a.createElement(W,r,a.a.createElement(L,{onClick:()=>{n(Object(b.a)(t,1))}},a.a.createElement(j,null)),a.a.createElement(C,null,Object(g.a)(t,"MMMM - yyyy")),a.a.createElement(L,{onClick:()=>{n(Object(f.a)(t,1))}},a.a.createElement(S,null)))};var J=n(10),N=n(21),B=n(42),I=n(35),F=n(36),_=n(41),T=n(37),q=n(38),A=n(43),G=n(39),H=n(11),K=n(20);function Q(){const e=Object(c.a)(["\n  text-align: center;\n  padding-top: ","px;\n  height: ","px;\n  font-size: ","px;\n  text-transform: uppercase;\n  font-weight: ",";\n"]);return Q=function(){return e},e}const U=l.d.div(Q(),20,40,e=>e.theme.fontSizes.small,e=>e.theme.fontWeights.bold),V=()=>a.a.createElement(U,null,"v",K.version," \u2022 by ",a.a.createElement("a",{href:"https://github.com/rmariuzzo",target:"_blank",rel:"noopener noreferrer"},"@rmariuzzo"));function X(){const e=Object(c.a)(["\n    position: relative;\n    font-weight: ",";\n    background-color: ",";\n    box-shadow: ",";\n\n    &:after {\n      content: '';\n      border: "," solid ","px;\n      border-radius: ","px;\n      position: absolute;\n      left: -2px;\n      right: -2px;\n      top: -2px;\n      bottom: -2px;\n    }\n  "]);return X=function(){return e},e}function Y(){const e=Object(c.a)(["\n  flex: 0 0 ","%;\n  height: calc((100vh - ","px - ","px) / 6);\n  color: ",";\n  text-align: right;\n  background-color: ",";\n  padding: ","px;\n\n  ","\n\n  &:nth-last-child(n+8) {\n    border-bottom: "," solid ","px;\n  }\n\n  &:not(:nth-child(7n)) {\n    border-right: "," solid ","px;\n  }\n"]);return Y=function(){return e},e}function Z(){const e=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border-radius: ","px;\n  overflow: hidden;\n  box-shadow: ",";\n"]);return Z=function(){return e},e}const $=l.d.ul(Z(),e=>e.theme.unit/2,e=>e.theme.boxShadows.neutralDark),ee=l.d.li(Y(),100/7,100,40,e=>e.inMonth?e.theme.colors.neutralDarker:e.theme.colors.neutralDark,e=>Object(H.a)(e.inMonth?1:0,e.theme.colors.neutral),10,e=>e.today&&Object(l.c)(X(),e=>e.theme.fontWeights.bold,e=>Object(H.a)(.4,e.theme.colors.primary),e=>e.theme.boxShadows.neutralDark,e=>e.theme.colors.primary,e=>e.theme.borderWidths.normal,e=>e.theme.borderRadiuses.small),e=>e.theme.colors.neutralDark,e=>e.theme.borderWidths.thin,e=>e.theme.colors.neutralDark,e=>e.theme.borderWidths.thin),te=e=>{const t=e.month,n=Object(p.a)(e,["month"]),r=new Date,o=Object(J.a)(Object(N.a)(t),{weekStartsOn:1}),c=Object(B.a)(Object(I.a)(Object(F.a)(t),{weekStartsOn:1}),6-Object(_.a)(t,{weekStartsOn:1})),l=Object(T.a)({start:o,end:c});return a.a.createElement($,n,l.map(e=>a.a.createElement(ee,{key:e.getTime(),inMonth:Object(q.a)(e,t),today:Object(A.a)(e,r)},1===Object(G.a)(e)&&"".concat(Object(g.a)(e,"MMM")," "),Object(G.a)(e))))};function ne(){const e=Object(c.a)(["\n  height: 100vh;\n  padding: ","px;\n"]);return ne=function(){return e},e}const re=l.d.div(ne(),20),ae=()=>{const e=Object(r.useState)(new Date),t=Object(i.a)(e,2),n=t[0],o=t[1];return a.a.createElement(re,null,a.a.createElement(P,{value:n,onChange:o}),a.a.createElement(te,{month:n}),a.a.createElement(V,null))};function oe(){const e=Object(c.a)(["\n  html,\n  body {\n    background-color: ",";\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: ",";\n  }\n"]);return oe=function(){return e},e}const ce=Object(l.b)(oe(),e=>e.theme.colors.neutral,e=>e.theme.fontFamily);function le(){return a.a.createElement(l.a,{theme:m},a.a.createElement(ce,null),a.a.createElement(ae,null))}const ie=document.getElementById("root");Object(o.render)(a.a.createElement(le,null),ie)}},[[24,1,2]]]);
//# sourceMappingURL=main.05710077.chunk.js.map