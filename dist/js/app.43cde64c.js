(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({demos:"demos"}[e]||e)+"."+{demos:"2573b773"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={demos:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({demos:"demos"}[e]||e)+"."+{demos:"5d58ec48"}[e]+".css",a=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0962":function(e,t,r){"use strict";var n=r("ab84"),o=r.n(n);o.a},"1b14":function(e,t,r){},"49f8":function(e,t,r){var n={"./en.json":"edd4"};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="49f8"},"57f4":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"picture"},[n("img",{class:{circle:this.circle,noShadow:this.noShadow},attrs:{src:r("7584")("./"+this.url),alt:e.altText}})])},o=[],a={name:"Picture",props:{url:{type:String,required:!0},altText:{type:String,required:!0},circle:{type:Boolean,required:!1,default:!1},noShadow:{type:Boolean,required:!1,default:!1}}},i=a,s=(r("6ac1"),r("2877")),u=Object(s["a"])(i,n,o,!1,null,"704e5a90",null);t["a"]=u.exports},"6ac1":function(e,t,r){"use strict";var n=r("cece"),o=r.n(n);o.a},7556:function(e,t,r){e.exports=r.p+"img/octocat.9ac279f9.png"},7584:function(e,t,r){var n={"./backgrounds/colorado_bg1.jpg":"e3a3","./demos/minesweeper.png":"7697","./demos/octocat.png":"7556","./demos/weather.png":"a593","./profile_pictures/istanbul_profile_pic1.jpg":"e242"};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="7584"},7697:function(e,t,r){e.exports=r.p+"img/minesweeper.056ac9dc.png"},8190:function(e,t,r){},a167:function(e,t,r){},a39a:function(e,t,r){"use strict";var n=r("1b14"),o=r.n(n);o.a},a593:function(e,t,r){e.exports=r.p+"img/weather.687c0d72.png"},ab84:function(e,t,r){},ba00:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("nav",{staticClass:"nav"},[r("h4",[r("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("header.home")))]),e._v(" | ")],1),r("h4",[r("router-link",{attrs:{to:"/demos"}},[e._v(e._s(e.$t("header.demos")))])],1)])])},s=[],u={name:"Header"},c=u,l=(r("0962"),r("2877")),f=Object(l["a"])(c,i,s,!1,null,"655bed54",null),p=f.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("h6",[e._v(" "+e._s(e.$t("footer.copyright"))+" ")])])},m=[],h={name:"Footer"},v=h,g=(r("e0e6"),Object(l["a"])(v,d,m,!1,null,"2d67f72a",null)),b=g.exports,_=(r("8190"),r("ba00"),{name:"App",components:{Header:p,Footer:b}}),w=_,y=Object(l["a"])(w,o,a,!1,null,null,null),x=y.exports,O=(r("d3b7"),r("8c4f")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-view"},[r("main",[r("div",{staticClass:"profile-picture-container"},[r("Picture",{attrs:{url:"profile_pictures/istanbul_profile_pic1.jpg",altText:"Ethan Ozelius Istanbul skull and crossbones profile picture",circle:!0}})],1),r("LegoViewTitle",{attrs:{title:e.$t("home.title"),"sub-title":e.$t("home.subTitle")}})],1)])},j=[],E=r("eee5"),T=r("57f4"),S={name:"Home",components:{LegoViewTitle:E["a"],Picture:T["a"]}},C=S,L=Object(l["a"])(C,k,j,!1,null,null,null),P=L.exports;n["a"].use(O["a"]);var $=[{path:"/",name:"Home",component:P,meta:{title:"Ethan Oz"}},{path:"/demos",name:"Demos",component:function(){return r.e("demos").then(r.bind(null,"07bf"))},meta:{title:"Ethan Oz - Demos"}}],q=new O["a"]({mode:"history",base:"/",routes:$}),A=q,D=r("2f62");n["a"].use(D["a"]);var N=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=(r("4160"),r("ac1f"),r("466d"),r("159b"),r("ddb0"),r("a925"));function M(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var n=r.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var o=n[1];t[o]=e(r)}})),t}n["a"].use(z["a"]);var H=new z["a"]({locale:"en",fallbackLocale:"en",messages:M()});n["a"].config.productionTip=!1,new n["a"]({router:A,store:N,i18n:H,render:function(e){return e(x)}}).$mount("#app")},cece:function(e,t,r){},e0e6:function(e,t,r){"use strict";var n=r("a167"),o=r.n(n);o.a},e242:function(e,t,r){e.exports=r.p+"img/istanbul_profile_pic1.eeb1d2d8.jpg"},e3a3:function(e,t,r){e.exports=r.p+"img/colorado_bg1.23ff732b.jpg"},edd4:function(e){e.exports=JSON.parse('{"header":{"home":"Home","demos":"Demos"},"footer":{"copyright":"copyright © 2020 Ethan Ozelius"},"home":{"title":"Ethan Ozelius","subTitle":"Just a drifting computer hacker trying to get some sunshine."},"demos":{"title":"Demos","subTitle":"Passion projects and demos","text":"Link github repos","githubLink":"https://github.com/eozelius","minesweeper":{"title":"Minesweeeper","minesweeperLinkAltText":"Minesweeper demo link"},"weather":{"title":"5 day weather forcast - now with more freezing rain","weatherLinkAltText":"5 day weather forecast demo link"}}}')},eee5:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lego-view-title"},[r("h1",{staticClass:"view-title-h1"},[e._v(e._s(e.title))]),r("h3",{staticClass:"view-sub-title-h3"},[e._v(e._s(e.subTitle))]),e.text?r("div",{staticClass:"optional-text-block-container"},[e.textLink?r("a",{attrs:{href:e.textLink,target:"_blank"}},[r("p",[e._v(e._s(e.text))])]):r("p",[e._v(e._s(e.text))])]):e._e()])},o=[],a={name:"LegoViewTitle",props:{title:{type:String,required:!0},subTitle:{type:String,required:!0},text:{type:String,required:!1,default:""},textLink:{type:String,required:!1,default:""}}},i=a,s=(r("a39a"),r("2877")),u=Object(s["a"])(i,n,o,!1,null,"ffcc9fc6",null);t["a"]=u.exports}});
//# sourceMappingURL=app.43cde64c.js.map