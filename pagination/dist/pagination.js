!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pagination",[],t):"object"==typeof exports?exports.pagination=t():e.pagination=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./dist/",t(t.s=2)}([function(e,t,n){"use strict";t.a={name:"pagination",data:function(){return{pages:{show:!1,centerPages:[],pagesMax:0,startI:!1,endI:!1},current:1}},props:{page:{type:Object,default:function(){return{current:1,size:10,total:0}}},pagerCount:{type:Number,default:7}},components:{},watch:{current:function(){this.current<1&&(this.current=1),this.current>this.pages.pagesMax&&(this.current=this.pages.pagesMax),this.layout()}},created:function(){this.initData()},mounted:function(){},methods:{initData:function(){var e=this.page.total,t=this.page.size;if(e<1)return void(this.pages.show=!1);this.pages.show=!0,this.page.size=t||10,this.current=this.page.current?this.page.current:1,this.pages.pagesMax=Math.ceil(e/this.page.size),this.pagerCount%2==0&&this.pagerCount++,console.log(this.pagerCount),this.layout()},layout:function(){var e=this.pages.pagesMax,t=this.pagerCount,n=this.current;e>t&&(this.pages.startI=n>(t+1)/2,this.pages.endI=n<=e-(t+1)/2),this.pages.centerPages=[];var r=(t-1)/2;if(n+r>=e)for(var a=t-2;a>0;a--)this.pages.centerPages.push(e-a);else if(n-r<=1)for(var i=0;i<t-2;i++)this.pages.centerPages.push(i+2);else if(n-r>1)for(var s=0;s<t-2;s++)this.pages.centerPages.push(n-r+s+1);this.handleEmit()},handleCount:function(e){this.current="minus"===e?this.current-(this.pagerCount-2):this.current+(this.pagerCount-2)},handleEmit:function(){this.page.current=this.current,this.$emit("handlePage",this.current)},handleNumber:function(e){this.current=e},handleStep:function(e){this.current+=e}}}},function(e,t,n){e.exports=n.p+"slh.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.default=r.a},function(e,t,n){"use strict";function r(e){n(4)}var a=n(0),i=n(10),s=n(9),o=r,u=s(a.a,i.a,!1,o,"data-v-4e12fd8a",null);t.a=u.exports},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(7)("2f3a300f",r,!0,{})},function(e,t,n){t=e.exports=n(6)(!1),t.push([e.i,".page-container[data-v-4e12fd8a]{width:100%;font-size:13px}.page-container button[data-v-4e12fd8a]{margin:0 10px;width:30px;height:30px}button>img[data-v-4e12fd8a],li>img[data-v-4e12fd8a]{width:20px}ul.pageNumber[data-v-4e12fd8a]{display:inline-block;vertical-align:middle;padding:0 4px}.pageNumber li[data-v-4e12fd8a]{list-style-type:none;display:inline-block;line-height:24px;border-radius:2px;vertical-align:top;width:24px;height:24px}.pageNumber li+li[data-v-4e12fd8a]{margin-left:6px}.page-container button[data-v-4e12fd8a],.pageNumber li[data-v-4e12fd8a]{padding:5px;background:#f4f4f5;color:#666;border:none;cursor:pointer;text-align:center;vertical-align:middle}.page-container button[data-v-4e12fd8a]:hover,.pageNumber li[data-v-4e12fd8a]:hover{color:#409eff}.pageNumber li.active[data-v-4e12fd8a]{background:#409eff;color:#fff}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=p[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],a=0;a<n.parts.length;a++)s.push(i(n.parts[a]));p[n.id]={id:n.id,refs:1,parts:s}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(b){var i=l++;r=f||(f=a()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=a(),t=o.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function o(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(m,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),p={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,h=!1,g=function(){},v=null,m="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){h=n,v=a||{};var i=c(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a],o=p[s.id];o.refs--,n.push(o)}t?(i=c(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var o=n[a];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete p[o.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],s=i[0],o=i[1],u=i[2],c=i[3],p={id:e+":"+a,css:o,media:u,sourceMap:c};r[s]?r[s].parts.push(p):n.push(r[s]={id:s,parts:[p]})}return n}},function(e,t){e.exports=function(e,t,n,r,a,i){var s,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a);var p;if(i?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=p):r&&(p=r),p){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=p,c.render=function(e,t){return p.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,p):[p]}return{esModule:s,exports:o,options:c}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("span",{staticClass:"item-des"},[e._v("共 "+e._s(e.page.total)+" 条")]),e._v(" "),r("button",{on:{click:function(t){e.handleStep(-1)}}},[r("img",{attrs:{src:n(11)}})]),e._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.pages.show,expression:"pages.show"}],staticClass:"pageNumber"},[r("li",{class:1===e.current?"active":"",on:{click:function(t){e.handleNumber(1)}}},[e._v("1")]),e._v(" "),r("li",{directives:[{name:"show",rawName:"v-show",value:e.pages.startI,expression:"pages.startI"}],on:{click:function(t){e.handleCount("minus")}}},[r("img",{attrs:{src:n(1)}})]),e._v(" "),e._l(e.pages.centerPages,function(t,n){return r("li",{key:n,class:t===e.current?"active":"",on:{click:function(n){e.handleNumber(t)}}},[e._v(e._s(t))])}),e._v(" "),r("li",{directives:[{name:"show",rawName:"v-show",value:e.pages.endI,expression:"pages.endI"}],on:{click:function(t){e.handleCount("add")}}},[r("img",{attrs:{src:n(1)}})]),e._v(" "),r("li",{class:e.pages.pagesMax===e.current?"active":"",on:{click:function(t){e.handleNumber(e.pages.pagesMax)}}},[e._v(e._s(e.pages.pagesMax))])],2),e._v(" "),r("button",{on:{click:function(t){e.handleStep(1)}}},[r("img",{attrs:{src:n(12)}})]),e._v(" "),r("span")])},a=[],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){e.exports=n.p+"syy.png"},function(e,t,n){e.exports=n.p+"xyy.png"}])});
//# sourceMappingURL=pagination.js.map