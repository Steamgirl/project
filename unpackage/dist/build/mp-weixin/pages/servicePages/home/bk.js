(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/servicePages/home/bk"],{"203e":function(t,n,e){},"28ef":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:[{text:"diyi",value:1}],exam:"",unit:{text:"请选择",value:null},station:"",stationList:[{text:"岗位",value:1}]}},onShow:function(){console.log(this.$store.state.agent)},mounted:function(){},methods:{submitForm:function(){t.navigateTo({url:"./bkList"})},checkDetail:function(){t.navigateTo({url:"./detail"})},valueChange:function(t){this.exam=t.detail.value},stationValueChange:function(t){this.station=t.detail.value},selectUnit:function(){t.navigateTo({url:"./units"})}}};n.default=e}).call(this,e("543d")["default"])},"5af0":function(t,n,e){"use strict";e.r(n);var a=e("8be7"),u=e("cf32");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("d36a");var o,c=e("f0c5"),f=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"754abb74",null,!1,a["a"],o);n["default"]=f.exports},"67cf":function(t,n,e){"use strict";(function(t){e("a466"),e("921b");a(e("66fd"));var n=a(e("5af0"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"8be7":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}))},cf32:function(t,n,e){"use strict";e.r(n);var a=e("28ef"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},d36a:function(t,n,e){"use strict";var a=e("203e"),u=e.n(a);u.a}},[["67cf","common/runtime","common/vendor"]]]);