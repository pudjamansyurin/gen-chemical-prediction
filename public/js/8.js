(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0bOp":function(e,t,n){"use strict";var r=n("LvDl"),o=n("LEfl"),i=n("L2JU");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={mixins:[o.a],props:{value:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}}},computed:u(u({},Object(i.d)("app",["size"])),{},{selected:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}),methods:{selectedIndex:function(e){return this.selected.findIndex((function(t){return t.id===e.id}))},toggleSelect:function(e){if(e.authorized){var t=this.selectedIndex(e);t>-1?this.selected.splice(t,1):this.selected.splice(0,1,e)}}}},l=n("KHd+"),d=Object(l.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{align:"center",justify:"center",dense:""}},e._l(e.items,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12"}},[n("v-card",{directives:[{name:"longclick",rawName:"v-longclick",value:function(){return e.toggleSelect(t)},expression:"() => toggleSelect(item)"}],key:t.id,attrs:{dark:e.dark,tile:""},on:{click:function(n){e.selected.length>0&&e.toggleSelect(t)}}},[e.selectedIndex(t)>-1?n("v-progress-linear",{attrs:{value:100,dark:e.dark,color:"primary"}}):e._e(),e._v(" "),e._t("default",null,{item:t})],2)],1)})),1)}),[],!1,null,null,null).exports,f={mixins:[o.a],props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0},loading:{type:Boolean,default:!1}},methods:{getItemValue:function(e,t){return Object(r.get)(e,t.value)}}},p=Object(l.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,options:e.options,headers:e.headers,items:e.items,"server-items-length":e.total,loading:e.loading,dense:e.dense,dark:e.dark,"footer-props":{itemsPerPageText:"Rows"},"selectable-key":"authorized","sort-by":"updated_at","single-select":"","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.getItemValue(r,t))+"\n        ")],{item:r})]}}}))],null,!0)})}),[],!1,null,null,null).exports,m={mixins:[o.a],props:{search:{type:String,defautl:""}},computed:{text:function(){return this.search?'No item related to "'.concat(this.search,'".'):"Oops, no data found."}}},h=Object(l.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-alert",{attrs:{dark:this.dark,type:"info",border:"left",outlined:""}},[t("span",[this._v(this._s(this.text))])])}),[],!1,null,null,null).exports,v={mixins:[o.a],props:{selected:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0},loading:{type:Boolean,default:!1}},components:{NoContent:h,TheDataCard:d,TheDataTable:p},methods:{updateOptions:function(e){Object(r.isEqual)(this.options,e)||this.$emit("update:options",e)}}},b=Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.items.length>0,expression:"items.length > 0"}]},[e.mobile?n("the-data-card",{attrs:{value:e.selected,options:e.options,items:e.items},on:{input:function(t){return e.$emit("update:selected",t)},"update:options":e.updateOptions},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._t("card",null,{item:n})]}}],null,!0)}):n("the-data-table",{attrs:{value:e.selected,options:e.options,items:e.items,headers:e.headers,total:e.total,loading:e.loading},on:{input:function(t){return e.$emit("update:selected",t)},"update:options":e.updateOptions},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,null,{item:r})]}}}))],null,!0)})],1),e._v(" "),n("no-content",{directives:[{name:"show",rawName:"v-show",value:0==e.items.length,expression:"items.length == 0"}],attrs:{search:e.options.search}})],1)}),[],!1,null,null,null);t.a=b.exports},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,u){var c,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var l=s.render;s.render=function(e,t){return c.call(t),l(e,t)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:s}}n.d(t,"a",(function(){return r}))},LEfl:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return _}));var r=n("L2JU"),o=n("ejCs"),i=n.n(o);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={computed:u(u({},Object(r.d)("app",["dark","dense"])),{},{mobile:function(){return this.$vuetify.breakpoint.smAndDown},webview:function(){return i()(window.navigator.userAgent)}})},l=(n("LvDl"),{data:function(){return{showPassword:!1}},computed:{passwordState:function(){return{icon:this.showPassword?"mdi-eye":"mdi-eye-off",type:this.showPassword?"text":"password"}}}}),d=n("sf/U"),f=[{heading:"MENU"},{text:"Dashboard",to:"dashboard",icon:"mdi-currency-usd",roles:"*",bottomNav:!0},{text:"Formula",to:"formula.index",icon:"mdi-dna",roles:"*",bottomNav:!0},{text:"Materials",model:!1,icon:"mdi-palette",bottomNav:!0,children:[{text:"Material",to:"material.index",icon:"mdi-format-color-fill",roles:"*",bottomNav:!0},{text:"Matter",to:"matter.index",icon:"mdi-spray",roles:[d.b.ADMIN]},{text:"Measurement",to:"measurement.index",icon:"mdi-test-tube",roles:[d.b.ADMIN]}]},{text:"User",to:"user.index",icon:"mdi-account-group",roles:[d.b.ADMIN],bottomNav:!0}];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={computed:{navs:function(){var e=this;return f.reduce((function(t,n){if(n.children){var r=e.convertNavGroup(n);if(r)return t.concat(r)}else{if(!n.to)return t.concat(n);if(e.authorized(n))return t.concat(n)}return t}),[])}},methods:{goto:function(e){this.$inertia.visit(route(e))},active:function(e){return route().current(e)},logout:function(){this.$axios.post(route("logout").url()).then((function(e){return window.location="/"})).catch((function(e){}))},convertNavGroup:function(e){var t=this;e.model=e.children.some((function(e){return e.to===route().current()}));var n=e.children.filter((function(e){return t.authorized(e)}));return n.length>1?m(m({},e),{},{children:n}):1==n.length?n[0]:void 0},authorized:function(e){return!!e.to&&(!!e.roles.includes("*")||!!e.roles.includes(this.$page.profile.role.name))}}},b=n("xgmY"),y=n("qRYQ");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={data:function(){return{dialogFullscreen:!y.c.get("confirmedFullscreen")}},computed:O(O({},Object(r.d)("app",["fullscreen"])),{},{iconFullscreen:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"}}),methods:O(O({},Object(r.c)("app",[b.i])),{},{toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirmFullscreen:function(e){var t=this;e&&this.toggleFullscreen(),y.c.set("confirmedFullscreen",!0),this.$nextTick((function(){return t.dialogFullscreen=!1}))}})}},ejCs:function(e,t,n){var r=n("ow63"),o=new RegExp("("+r.join("|")+")","ig");e.exports=function(e){return!!e.match(o)}},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]},tVlB:function(e,t,n){"use strict";n.r(t);var r=n("LvDl"),o=n("LEfl"),i=n("0bOp"),a={mixins:[o.a],props:{selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){return{headers:[{text:"Name",value:"name"},{text:"Matter",value:"matter.name"},{text:"Formula",value:"formulas_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}],fetching:!1}},components:{TheData:i.a},methods:{chip:function(e){return e.authorized?"primary":"grey"},edit:function(e){this.$emit("edit",e.id)}},watch:{options:{handler:Object(r.debounce)((function(e){var t=this;this.$inertia.replace(route(route().current(),Object(r.omit)(e,["groupBy","groupDesc","mustSort","multiSort"])),{preserveScroll:!0,onStart:function(e){return t.fetching=!0},onFinish:function(){return t.fetching=!1},only:["status","items","total"]})}),500)}}},u=n("KHd+"),c=Object(u.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-data",{attrs:{selected:e.selected,options:e.options,headers:e.headers,total:e.total,items:e.items,loading:e.fetching},on:{"update:selected":function(t){return e.$emit("update:selected",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.chip(r),small:e.dense,dark:""},on:{click:function(t){return e.edit(r)}}},[e._v("\n            "+e._s(r.name)+"\n        ")])]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(e._f("moment")(n.updated_at,"from"))+"\n    ")]}},{key:"card",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:e.chip(r),outlined:"",absolute:"",right:"",small:"",tile:"",top:""}},[e._v("\n            SOMETHING\n        ")]),e._v(" "),n("v-card-text",{on:{click:function(t){return e.edit(r)}}},[n("div",{staticClass:"overline"},[e._v("\n                "+e._s(e._f("moment")(r.updated_at,"from"))+"\n            ")]),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                "+e._s(r.user.name)+"\n            ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                "+e._s(r.name)+"\n            ")])])]}}],null,!0)})}),[],!1,null,null,null);t.default=c.exports}}]);