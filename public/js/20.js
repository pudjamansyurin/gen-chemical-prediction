(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"KHd+":function(e,t,r){"use strict";function n(e,t,r,n,o,i,c,a){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),c?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},u._ssrRegister=s):o&&(s=a?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(e,t){return s.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:u}}r.d(t,"a",(function(){return n}))},LEfl:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return j}));var n=r("L2JU"),o=r("ejCs"),i=r.n(o);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={computed:a(a({},Object(n.d)("app",["dark","dense"])),{},{mobile:function(){return this.$vuetify.breakpoint.smAndDown},webview:function(){return i()(window.navigator.userAgent)}})},l=(r("LvDl"),{data:function(){return{showPassword:!1}},computed:{passwordState:function(){return{icon:this.showPassword?"mdi-eye":"mdi-eye-off",type:this.showPassword?"text":"password"}}}}),f=r("sf/U"),d=[{heading:"MENU"},{text:"Dashboard",to:"dashboard",icon:"mdi-currency-usd",roles:"*",bottomNav:!0},{text:"Formula",to:"formula.index",icon:"mdi-dna",roles:"*",bottomNav:!0},{text:"Materials",model:!1,icon:"mdi-palette",bottomNav:!0,children:[{text:"Material",to:"material.index",icon:"mdi-format-color-fill",roles:"*",bottomNav:!0},{text:"Matter",to:"matter.index",icon:"mdi-spray",roles:[f.b.ADMIN]},{text:"Measurement",to:"measurement.index",icon:"mdi-test-tube",roles:[f.b.ADMIN]}]},{text:"User",to:"user.index",icon:"mdi-account-group",roles:[f.b.ADMIN],bottomNav:!0}];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h={computed:{navs:function(){var e=this;return d.reduce((function(t,r){if(r.children){var n=e.convertNavGroup(r);if(n)return t.concat(n)}else{if(!r.to)return t.concat(r);if(e.authorized(r))return t.concat(r)}return t}),[])}},methods:{goto:function(e){this.$inertia.visit(route(e))},active:function(e){return route().current(e)},logout:function(){this.$axios.post(route("logout").url()).then((function(e){return window.location="/"})).catch((function(e){}))},convertNavGroup:function(e){var t=this;e.model=e.children.some((function(e){return e.to===route().current()}));var r=e.children.filter((function(e){return t.authorized(e)}));return r.length>1?p(p({},e),{},{children:r}):1==r.length?r[0]:void 0},authorized:function(e){return!!e.to&&(!!e.roles.includes("*")||!!e.roles.includes(this.$page.profile.role.name))}}},v=r("xgmY"),g=r("qRYQ");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j={data:function(){return{dialogFullscreen:!g.c.get("confirmedFullscreen")}},computed:O(O({},Object(n.d)("app",["fullscreen"])),{},{iconFullscreen:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"}}),methods:O(O({},Object(n.c)("app",[v.i])),{},{toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirmFullscreen:function(e){var t=this;e&&this.toggleFullscreen(),g.c.set("confirmedFullscreen",!0),this.$nextTick((function(){return t.dialogFullscreen=!1}))}})}},MMcg:function(e,t,r){"use strict";var n={mixins:[r("LEfl").a],props:{value:{type:Boolean,default:!1},title:{type:String,default:"Detail Item"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},width:{type:[String,Number],default:600},tabs:{type:Array,default:function(){return[]}},tab:{type:Number,default:0}},data:function(){return{fullscreen:!0}},computed:{cardTextHeight:function(){if(!this.mobile&&!this.fullscreen)return"max-height: 500px;"},iconFullscreen:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"}}},o=r("KHd+"),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile||e.fullscreen,"max-width":e.width,dark:e.dark,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:e.disabled}},[r("v-card-title",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"5"}},[r("span",{staticClass:"headline"},[e._v(e._s(e.title))]),e._v(" "),e.mobile?e._e():r("v-btn",{attrs:{icon:""},on:{click:function(t){e.fullscreen=!e.fullscreen}}},[r("v-icon",[e._v(e._s(e.iconFullscreen))])],1)],1),e._v(" "),e.tabs.length>0?r("v-col",{attrs:{cols:"12",sm:"7"}},[r("v-tabs",{attrs:{value:e.tab,"background-color":"transparent","active-class":"font-weight-bold",height:"30","hide-slider":"",right:""},on:{change:function(t){return e.$emit("update:tab",t)}}},e._l(e.tabs,(function(t){return r("v-tab",{key:t},[e._v("\n                            "+e._s(t)+"\n                        ")])})),1)],1):e._e()],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"py-5",style:e.cardTextHeight},[e.tabs.length>0?r("v-tabs-items",{attrs:{value:e.tab,dark:e.dark,touchless:""},on:{input:function(t){return e.$emit("update:tab",t)}}},e._l(e.tabs,(function(t){return r("v-tab-item",{key:t},[e._t(t)],2)})),1):e._t("default")],2),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n                Cancel\n            ")]),e._v(" "),r("v-spacer"),e._v(" "),e.readonly?e._e():r("v-btn",{attrs:{disabled:e.disabled,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.a=i.exports},QCDZ:function(e,t,r){"use strict";r.r(t);var n=r("LvDl"),o=r("y1zv"),i=r("LEfl"),c=r("MMcg");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={mixins:[i.a],props:{value:{type:Boolean,default:!1},id:{type:Number,default:-1}},components:{TheDialogForm:c.a},data:function(){return{model:"measurement",fetching:!1,form:this.$inertia.form(s({_method:"PUT"},Object(n.cloneDeep)(o.d)),{bag:"measurement_form",resetOnSuccess:!1})}},computed:{creating:function(){return-1===this.id},disabled:function(){return this.form.processing||this.fetching},readonly:function(){return!(this.creating||this.form.authorized)},formTitle:function(){if(!this.readonly){var e=this.creating?"New":"Edit",t=this.model.toUpperCase();return"".concat(e," ").concat(t)}},dialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{fetch:function(){var e=this;this.fetching=!0,this.$axios.get(route("measurement.show",this.id).url()).then((function(t){var r=t.data;Object(n.assign)(e.form,Object(n.pick)(r,Object(n.keys)(o.d)))})).catch((function(t){return e.dialog=!1})).then((function(){return e.fetching=!1}))},reset:function(){delete this.$page.errorBags.measurement_form,Object(n.assign)(this.form,o.d)},method:function(){var e="post",t=route("measurement.store");return this.creating||(e="put",t=route("measurement.update",this.id)),{url:t,method:e}},save:function(){var e=this,t=this.method(),r=t.url,n=t.method;this.form._method=n,this.form.post(r,{preserveScroll:!0,onSuccess:function(t){e.form.hasErrors()||(e.dialog=!1)}})}},watch:{value:{immediate:!0,handler:function(e){e?(this.creating||this.fetch(),this.form.change_password=this.creating):this.reset()}}}},f=r("KHd+"),d=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("the-dialog-form",{attrs:{title:e.formTitle,disabled:e.disabled,readonly:e.readonly},on:{submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{attrs:{disabled:e.disabled||e.readonly},on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("v-text-field",{attrs:{"error-messages":e.form.error("name"),success:!!e.form.error("name"),autofocus:!e.mobile,label:"Measurement name",type:"text",hint:"This should be unique name","persistent-hint":"",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-checkbox",{attrs:{"error-messages":e.form.error("primary"),success:!!e.form.error("primary"),label:"Primary measurement?",hint:"This rule is used when measure formula","persistent-hint":"",outlined:""},model:{value:e.form.primary,callback:function(t){e.$set(e.form,"primary",t)},expression:"form.primary"}}),e._v(" "),e.readonly?e._e():r("v-btn",{staticClass:"d-none",attrs:{disabled:e.disabled,type:"submit"}})],1)],1)}),[],!1,null,null,null);t.default=d.exports},ejCs:function(e,t,r){var n=r("ow63"),o=new RegExp("("+n.join("|")+")","ig");e.exports=function(e){return!!e.match(o)}},ow63:function(e,t){e.exports=["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(wv|.0.0.0)","Linux; U; Android"]}}]);