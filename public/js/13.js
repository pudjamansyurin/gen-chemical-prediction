(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,o){var s,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},l._ssrRegister=s):i&&(s=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(e,t){return s.call(t),c(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},MYbW:function(e,t,n){"use strict";var r={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},height:{type:[Number,String],default:null}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-simple-table",{attrs:{height:e.height,"fixed-header":!!e.height,dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",e._l(e.headers,(function(t){return n("th",{key:t.value,class:"text-"+t.align,style:t.width&&"width: "+t.width+"px"},[e._v("\n                    "+e._s(t.text)+"\n                ")])})),0)]),e._v(" "),n("tbody",[0==e.items.length?n("tr",[n("td",{attrs:{colspan:e.headers.length}},[e._v("\n                    No related records.\n                ")])]):e._l(e.items,(function(t,r){return n("tr",{key:t.id},e._l(e.headers,(function(i){return n("td",{key:i.value,class:"text-"+i.align},[e._t("item."+i.value,[e._v("\n                            "+e._s(t[i.value])+"\n                        ")],{item:t,index:r})],2)})),0)})),e._v(" "),e._t("footer")],2)]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.a=a.exports},ZeTO:function(e,t,n){"use strict";n.r(t);var r=n("LvDl"),i=n("MYbW");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={props:{numRows:{type:Number,default:0},numColumns:{type:Number,default:0},requiredMaterials:{type:Array,default:function(){return[]}}},components:{TheSimpleTable:i.a},data:function(){return{headers:[{text:"No",value:"no",align:"center",width:50},{text:"Column",value:"column",align:"left"},{text:"Median",value:"median",align:"right",round:!0},{text:"Max",value:"max",align:"right",round:!0},{text:"Mean",value:"mean",align:"right",round:!0},{text:"Variance",value:"variance",align:"right",round:!0},{text:"Std. Deviation",value:"std_dev",align:"right",round:!0},{text:"Distinct",value:"distinct",align:"right"},{text:"Count",value:"count",align:"right"}],items:[]}},methods:{getFeature:function(e){return Object(r.get)(this.$page,"flash.features.".concat(e.column))},getFeatureName:function(e){return Object(r.get)(this.getFeature(e),"name","")},getFeatureNumeric:function(e,t){return Object(r.get)(this.getFeature(e),t,0)},readonly:function(e){var t=this.getFeature(e);return this.requiredMaterials.includes(t.id)},remove:function(e,t){var n=this.getFeature(e);this.items.splice(t,1),this.$emit("remove",n.id)},parseItems:function(e){var t=this;return e.map((function(e){t.getFeature(e);var n=t.headers.map((function(e){return e.value}));return Object(r.keys)(e).filter((function(e){return n.includes(e)})).reduce((function(n,r){var i=e[r],a=t.headers.find((function(e){return e.value==r}));return u(u({},n),{},o({},r,a.round?i.toFixed(2):i))}),{})}))}},watch:{"$page.flash.dataset":{deep:!0,immediate:!0,handler:function(e){this.items=this.parseItems(e)}}}},l=n("KHd+"),c=Object(l.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("the-simple-table",{attrs:{headers:e.headers,items:e.items,height:"200"},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(r){var i=r.item,a=r.index;return[e._t("item."+t.value,["no"==t.value?[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){return[!t.hover||e.readonly(i)?n("span",[e._v(e._s(a+1))]):n("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.remove(i,a)}}},[e._v("\n                            mdi-close-circle-outline\n                        ")])]}}],null,!0)})]:"column"==t.value?[e._v("\n                    "+e._s(e.getFeatureName(i))+"\n                ")]:"count"==t.value?[e._v("\n                    "+e._s(e.getFeatureNumeric(i,"count"))+"\n                ")]:"distinct"==t.value?[e._v("\n                    "+e._s(e.getFeatureNumeric(i,"distinct"))+"\n                ")]:e._e()],{item:i,index:a})]}}}))],null,!0)}),e._v(" "),n("v-sheet",{staticClass:"my-5"},[n("span",[e._v("Summary: ")]),e._v(" "),n("v-chip",{attrs:{small:""}},[e._v("Used columns: "+e._s(e.numColumns))]),e._v(" "),n("v-chip",{attrs:{small:""}},[e._v("Used rows: "+e._s(e.numRows))])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);