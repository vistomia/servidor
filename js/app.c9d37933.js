(function(){"use strict";var e={1768:function(e,t,n){var r=n(5130),o=n(6768);function a(e,t,n,r,a,s){const i=(0,o.g2)("AppNav"),u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(i),t[0]||(t[0]=(0,o.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,o.Lk)("br",null,null,-1)),(0,o.bF)(u)],64)}const s={class:"navbar navbar-expand-lg navbar-dark bg-dark","aria-label":"Eighth navbar example"},i={class:"container"},u={class:"collapse navbar-collapse"},c={class:"navbar-nav me-auto mb-2 mb-lg-0"},l={class:"nav-item"},f={class:"nav-item"},d={class:"nav-item"};function v(e,t,n,r,a,v){const p=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",s,[(0,o.Lk)("div",i,[(0,o.bF)(p,{class:"navbar-brand",to:"/"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Servidor")]))),_:1}),t[4]||(t[4]=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,o.Lk)("div",u,[(0,o.Lk)("ul",c,[(0,o.Lk)("li",l,[(0,o.bF)(p,{class:"nav-link",to:"/"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("li",f,[(0,o.bF)(p,{class:"nav-link",to:"/console"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Console")]))),_:1})]),(0,o.Lk)("li",d,[(0,o.bF)(p,{class:"nav-link",to:"/options"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("Options")]))),_:1})])])])])])}var p={data(){return{title:"Headera"}},computed:{upperTitle(){return this.title.toUpperCase()}},beforeUnmount(){console.log("Headera beforeUnmount")},methods:{onClick(){alert("Headera")}}},h=n(1241);const b=(0,h.A)(p,[["render",v]]);var m=b,g={components:{AppNav:m}};const k=(0,h.A)(g,[["render",a]]);var y=k,C=n(1387);function S(e,t,n,r,a,s){const i=(0,o.g2)("AppServer");return(0,o.uX)(),(0,o.Wv)(i)}const E={class:"server"},w={key:0,class:"server-status no-conection container text-center",id:"server-status"},O={key:1,class:"server-status offline container text-center",id:"server-status"},L={key:2,class:"server-status online container text-center",id:"server-status"},A={key:3,class:"server-status container loading text-center",id:"server-status"},x={class:"text-center mt-4"},j={key:2,class:"btn btn-warn",disabled:""};function N(e,t,n,r,a,s){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",E,[t[2]||(t[2]=(0,o.Lk)("div",{class:"server-title container text-center"},[(0,o.Lk)("span",null,"servidor.teste.me")],-1)),"no-connection"===e.serverStatus?((0,o.uX)(),(0,o.CE)("div",w," No conection ")):"offline"===e.serverStatus?((0,o.uX)(),(0,o.CE)("div",O," Offline ")):"online"===e.serverStatus?((0,o.uX)(),(0,o.CE)("div",L," Online ")):((0,o.uX)(),(0,o.CE)("div",A," Loading... "))]),(0,o.Lk)("div",x,["offline"===e.serverStatus?((0,o.uX)(),(0,o.CE)("button",{key:0,id:"button",type:"button",class:"btn btn-success",onClick:t[0]||(t[0]=(...e)=>s.OnClick&&s.OnClick(...e))},"Start")):"online"===e.serverStatus?((0,o.uX)(),(0,o.CE)("button",{key:1,id:"button",type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=(...e)=>s.OnClick&&s.OnClick(...e))},"Stop")):((0,o.uX)(),(0,o.CE)("button",j,"Loading"))])],64)}const T="http://localhost:3000/api";var F={data:()=>({serverStatus:"loading"}),created(){this.getStatus(),setInterval(this.getStatus,2e3)},watch:{serverStatus(){console.log("serverStatus changed",this.serverStatus)}},methods:{OnClick(){"online"===this.serverStatus?this.postAction({action:"stop"}):"offline"===this.serverStatus&&this.postAction({action:"start"})},getStatus(){fetch(T+"/status").then((e=>e.json())).then((e=>{if(console.log(this.serverStatus),void 0===e.status)throw new Error("no connection");this.serverStatus=e.status})).catch((()=>{this.serverStatus="no-connection"}))},postAction(e){fetch(T+"/action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log("Sucesso:",e)})).catch((e=>{console.error("Erro:",e)}))}}};const X=(0,h.A)(F,[["render",N]]);var _=X,P={name:"ServerView",components:{AppServer:_}};const B=(0,h.A)(P,[["render",S]]);var H=B;const W=[{path:"/",name:"home",component:H},{path:"/console",name:"ConsoleView",component:()=>n.e(219).then(n.bind(n,9219))},{path:"/options",name:"options",component:()=>n.e(31).then(n.bind(n,31))}],U=(0,C.aE)({history:(0,C.Bt)(),routes:W});var K=U;(0,r.Ef)(y).use(K).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{31:"5198d0ee",219:"7027432a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{31:"6d1e8fdc",219:"254d3663"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var i,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){i=f;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var i=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=i,s.parentNode&&s.parentNode.removeChild(s),a(u)}};return s.onerror=s.onload=i,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return o();e(r,i,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={31:1,219:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(t),i=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1768)}));r=n.O(r)})();
//# sourceMappingURL=app.c9d37933.js.map