(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background-image: linear-gradient(\n    to bottom,\n    rgb(56, 36, 13),\n    rgb(15, 15, 15)\n  );\n  text-align: center;\n  margin: 0 auto;\n  color: white;\n}\n.heading {\n  background-image: linear-gradient(to bottom, rgb(83, 0, 0), black);\n  font-size: 3rem;\n  padding: 0.3em;\n  font-weight: 900;\n  text-shadow: 2px 2px 2px green;\n}\n.status-bar {\n  background-image: linear-gradient(to bottom, rgb(22, 99, 63), black);\n  padding: 1em;\n  font-weight: 900;\n}\n\n.main-board {\n  color: rgba(255, 255, 255, 0.733);\n  width: max-content;\n  margin: 3rem auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  border: 5px solid black;\n}\n.cell {\n  padding: 1rem;\n  font-size: 5rem;\n  height: 5rem;\n  width: 5rem;\n  border: 5px ridge brown;\n  cursor: pointer;\n  background-image: radial-gradient(rgb(0, 129, 119), black);\n}\n.reset {\n  padding: 1rem;\n  margin-bottom: 3rem;\n  font-size: 1rem;\n  border: 2px solid black;\n  cursor: pointer;\n}\n.cell:hover,\n.reset:hover {\n  transform: scale(1.05);\n  transition: background-color 0.3s;\n  background-color: rgba(255, 0, 0, 0.37);\n}\n\n/* js classses*/\n.hidden {\n  display: none;\n}\n\n.menu {\n  position: absolute;\n  background-color: rgba(100, 148, 237, 0.616);\n  top: 10%;\n  left: 0;\n  right: 0;\n  padding: 3rem;\n  width: 70%;\n  margin: 0 auto;\n  border: 1px solid black;\n}\n.menu h2 {\n  padding-bottom: 4rem;\n}\n.menu button {\n  font-size: 1.5rem;\n  padding: 1rem;\n  margin: 0 2rem;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:p(f,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,g=0;function p(e,n){var t,r,o;if(n.singleton){var i=g++;t=m||(m=l(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(e,n),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=l}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=function(){const e=document.querySelector(".button-accept"),n=document.querySelector(".button-cancel"),t=document.querySelector(".status-bar"),r=document.querySelector(".reset"),o=document.querySelector(".main-board"),i=[...document.querySelectorAll(".cell")],a=document.querySelector(".main");return{AISelectionNo:n,AISelectionYes:e,statusBar:t,resetButton:r,mainBoard:o,mainCells:i,menu:document.querySelector(".menu"),mainBody:a}}(),i=function(){const e=[];for(let n=0;n<9;n++)e.push(null);return{changeCell:function(n,t){e[n]=t},display:function(){for(let n=0;n<9;n++)o.mainCells[n].textContent=e[n]},getWinner:function(){return null}}}(),a=function(){const e="Player X",n="Player O";let t=e,r=null;return o.mainCells.forEach((o=>{o.addEventListener("click",(o=>{r||function(r){const o=r.target;""!=o.textContent||i.getWinner()||(t==e?(i.changeCell(o.getAttribute("data-id"),"*"),t=n):(i.changeCell(o.getAttribute("data-id"),"O"),t=e)),i.display()}(o)}))})),{player1:e,player2:n,setAI:function(e){r=e},setActivePlayer:function(e){t=e}}}();o.AISelectionYes.addEventListener("click",(()=>{o.mainBody.classList.toggle("hidden"),o.menu.classList.toggle("hidden"),a.setAI(!0)})),o.AISelectionNo.addEventListener("click",(()=>{o.mainBody.classList.toggle("hidden"),o.menu.classList.toggle("hidden"),a.setAI(!1)}))})()})();