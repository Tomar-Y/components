!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("pagePagination",[],e):"object"==typeof exports?exports.pagePagination=e():t.pagePagination=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";var a=n(4);e.a={name:"page-pagination",data:function(){return{totalSize:0,params:{page:{},search:{}}}},watch:{},props:{current:{type:Number,default:1},size:{type:Number,default:10},pagesizes:{type:Array,default:function(){return[10,20,50]}},total:{type:Number,default:0},apis:{type:Object},api:{type:String},mustParams:{type:Object}},components:{},created:function(){console.log("api: ",this.api),this.initData()},mounted:function(){},methods:{initData:function(){this.totalSize=this.total,this.params.page.current=this.current,this.params.page.size=this.size,this.mustParams&&Object.keys(this.mustParams).length>0&&(this.params.search=Object(a.a)(this.mustParams)),this.apis&&Object.keys(this.apis).length>0&&this.api&&this.pageList()},search:function(t){this.params.page.isAnd=t.isAnd,this.params.page.current=1,this.params.page.size=this.size,this.params.search=Object(a.a)(t),this.pageList()},pageList:function(){var t=this;this.apis[this.api](this.params).then(function(e){t.params.page.isAnd=!0,t.totalSize=e.data.data.total,t.$emit("complete",e)}).catch(function(e){t.$message.error(e||"系统异常。")})},refresh:function(){this.pageList()},handleSizeChange:function(t){this.params.page.size=t,this.pageList()},handleCurrentChange:function(t){this.params.page.current=t,this.pageList()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r={install:function(t){console.log("Vue: ",t),"undefined"!=typeof window&&window.Vue&&(t=window.Vue),t.component("page-pagination",a.a)}};e.default=r},function(t,e,n){"use strict";var a=n(0),r=n(5),i=n(3),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e){t.exports=function(t,e,n,a,r,i){var s,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var p;if(i?(p=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=p):a&&(p=a),p){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=p,c.render=function(t,e){return p.call(e),l(t,e)}):c.beforeCreate=l?[].concat(l,p):[p]}return{esModule:s,exports:o,options:c}}},function(t,e,n){"use strict";function a(t,e){if(!t&&"object"!==(void 0===t?"undefined":r(t)))throw new Error("error arguments","shallowClone");var n=e||t.constructor===Array?[]:{};for(var i in t)t.hasOwnProperty(i)&&(t[i]&&"object"===r(t[i])?(n[i]=t[i].constructor===Array?[]:{},n[i]=a(t[i])):n[i]=t[i]);return n}e.a=a;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":t.current,"page-sizes":t.pagesizes,"page-size":t.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i}])});
//# sourceMappingURL=pagination.js.map