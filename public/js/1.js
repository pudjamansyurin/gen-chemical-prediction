(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,9,11,12],{"/yGT":function(e,t,r){"use strict";var n=r("L2JU"),o=(r("LvDl"),r("qRYQ")),i=r("xgmY"),s=r("LEfl");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={mixins:[s.b,s.a],computed:{darkIcon:function(){return this.darker?"mdi-brightness-1":"mdi-brightness-3"},denseIcon:function(){return this.denser?"mdi-table":"mdi-table-large"}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.c)("app",[i.g,i.f]))},u=r("KHd+"),v=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{"nudge-width":150,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),r("v-card",{attrs:{dark:e.darker}},[r("v-list",{staticClass:"py-0",attrs:{dense:""}},[r("v-list-item",{on:{click:e.TOGGLE_DARKER}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.darkIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                        "+e._s(e.darker?"Lighter":"Darker")+"\n                    ")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),e.webview?e._e():[r("v-list-item",{on:{click:e.toggleFullscreen}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.iconFullscreen))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                            "+e._s(e.fullscreen?"Normal-screen":"Full-screen")+"\n                        ")])],1)],1),e._v(" "),r("v-divider")],e._v(" "),r("v-list-item",{on:{click:e.TOGGLE_DENSER}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.denseIcon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                        "+e._s(e.denser?"Bigger":"Smaller")+"\n                    ")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list-item",{on:{click:function(t){return e.logout()}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-logout")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(" Logout ")])],1)],1)],2)],1)],1)}),[],!1,null,null,null).exports;function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={props:{options:{type:Object,default:function(){return{search:"",mine:!1}}},selected:{type:Array,default:function(){return[]}},pageTitle:{type:String,default:""},mineTab:{type:Boolean,default:!1}},components:{AppTopMenu:v},data:function(){return{searchBox:!1}},computed:p(p({},Object(n.d)("app",["title"])),{},{crud:function(){return!!this.options.page},searchBoxIcon:function(){return this.mobile||this.options.search?"mdi-magnify-close":"mdi-magnify"},search:{get:function(){return this.options.search},set:function(e){this.updateOptions({search:e})}},tab:{get:function(){return Number(this.options.mine)},set:function(e){this.updateOptions({mine:Object(o.a)(e)})}}}),methods:p(p({},Object(n.c)("app",[i.h])),{},{setSearchBox:function(e){!e&&this.search&&(this.search=""),this.searchBox=e},updateOptions:function(e){this.$emit("update:options",p(p(p({},this.options),e),{},{page:1}))}}),mounted:function(){this.options.search&&this.setSearchBox(!0)}},b=Object(u.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("v-app-bar",{attrs:{"collapse-on-scroll":!(e.selected.length>0||e.searchBox||!e.mobile),dense:e.denser,color:"primary",dark:"",app:""},scopedSlots:e._u([e.crud?{key:"extension",fn:function(){return[0===e.selected.length?[r("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("Recent")]),e._v(" "),e.mineTab?r("v-tab",[e._v("Mine")]):e._e()],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green",rounded:"",small:""},on:{click:function(t){return e.$emit("create")}}},[r("v-icon",[e._v("mdi-plus")]),e._v(" "),e.mobile?e._e():[e._v("Create")]],2)]:[r("v-btn",{staticClass:"mr-3",attrs:{color:"primary",rounded:"",small:""},on:{click:function(t){return e.$emit("update:selected",[])}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-toolbar-title",[e._v("\n                    "+e._s(e.selected.length)+" selected\n                ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"red",rounded:"",small:""},on:{click:function(t){return e.$emit("delete")}}},[r("v-icon",[e._v("mdi-delete")]),e._v(" "),e.mobile?e._e():[e._v("Delete")]],2)]]},proxy:!0}:null],null,!0)},[e.searchBox&&e.mobile?e._e():[r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.TOGGLE_DRAWER(t)}}}),e._v(" "),r("v-toolbar-title",[r("inertia-link",{staticClass:"white--text text-decoration-none",attrs:{href:e.route(e.route().current())}},[e._v("\n                    "+e._s(e.pageTitle||e.title)+"\n                ")])],1),e._v(" "),r("v-spacer")],e._v(" "),e.crud?[e.searchBox||!e.mobile?r("v-text-field",{attrs:{"append-icon":e.searchBoxIcon,autofocus:e.mobile,dark:e.darker,label:"Search",dense:"",flat:"","solo-inverted":"","hide-details":""},on:{"click:append":function(t){return e.setSearchBox(!1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()]:e._e(),e._v(" "),e.mobile?e._e():r("v-spacer"),e._v(" "),e.crud?[!e.searchBox&&e.mobile?r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setSearchBox(!0)}}},[r("v-icon",[e._v("mdi-magnify")])],1):e._e()]:e._e(),e._v(" "),r("app-top-menu")],2)],1)}),[],!1,null,null,null);t.a=b.exports},"5aOt":function(e,t,r){"use strict";r.r(t);var n=r("5xhC"),o=r("/yGT"),i=r("pggf"),s=r("tOXh"),a=r("xtbw"),c={layout:n.a,components:{AppTopBar:o.a,UpdateProfileForm:i.default,UpdatePasswordForm:s.default,BrowserSessionsForm:a.default},props:["profile","sessions"]},l=r("KHd+"),u=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("fragment",[t("app-top-bar",{attrs:{"page-title":"Profile"}}),this._v(" "),t("update-profile-form",{attrs:{profile:this.profile}}),this._v(" "),t("update-password-form"),this._v(" "),t("browser-sessions-form",{attrs:{sessions:this.sessions}})],1)}),[],!1,null,null,null);t.default=u.exports},"5xhC":function(e,t,r){"use strict";var n=r("L2JU"),o=r("qRYQ"),i=r("xgmY");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={data:function(){return{snackbar:!1,timeout:2e3}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.d)("app",["message"])),created:function(){var e=this;this.$store.subscribe((function(t,r){t.type===Object(o.d)("app",i.b)&&e.message.text&&(e.snackbar=!0)}))}},l=r("KHd+"),u=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-snackbar",{attrs:{color:e.message.type,timeout:e.timeout,top:"",right:""},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[r("v-btn",e._b({attrs:{icon:"",dark:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[r("v-icon",[e._v("mdi-close-circle")])],1)]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[r("v-icon",[e._v("mdi-bell")]),e._v(" "),r("i",[e._v(e._s(e.message.text))])],1)}),[],!1,null,null,null).exports;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.b)("app",["isLoading"]))},f={components:{AppOverlayIndicator:Object(l.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-overlay",{attrs:{value:this.isLoading,"z-index":"999"}},[t("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"white"}})],1)}),[],!1,null,null,null).exports}},m=Object(l.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-main",{class:this.darker?"black":"grey lighten-3"},[t("v-container",{attrs:{fluid:""}},[this._t("default"),this._v(" "),t("app-overlay-indicator")],2)],1)}),[],!1,null,null,null).exports,b=r("LEfl"),_={mixins:[b.b],computed:{items:function(){return this.navs.filter((function(e){var t=e.bottomNav,r=e.children;return!!t||!!r})).map((function(e){return e.children?e.children.find((function(e){return!!e.bottomNav})):e}))}}},h=Object(l.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-bottom-navigation",{attrs:{dark:e.darker,color:"primary",app:""}},e._l(e.items,(function(t,n){return r("v-btn",{key:n,attrs:{"input-value":e.active(t.to)},on:{click:function(r){return e.goto(t.to)}}},[r("span",[e._v(e._s(t.text))]),e._v(" "),r("v-icon",[e._v(e._s(t.icon))])],1)})),1)}),[],!1,null,null,null).exports;function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={mixins:[b.b],computed:y(y({},Object(n.d)("app",["drawer"])),{},{mini:function(){return!this.drawer&&this.$vuetify.breakpoint.lgAndUp}}),methods:y({},Object(n.c)("app",[i.a]))},x=Object(l.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{value:e.drawer||e.$vuetify.breakpoint.lgAndUp,"mini-variant":e.mini,dark:e.darker,app:""},on:{input:e.SET_DRAWER}},[r("v-list",{staticClass:"py-0"},[e.$page.profile.id>-1?r("v-list-item",{attrs:{"input-value":e.active("profile.show"),color:"red",link:"","two-line":""},on:{click:function(t){return e.goto("profile.show")}}},[r("v-list-item-action",[e.mini?r("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-icon",e._g(e._b({},"v-icon",o,!1),n),[e._v("\n                            mdi-face-profile\n                        ")])]}}],null,!1,1160482933)},[e._v(" "),r("span",[e._v("Profile")])]):r("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v("\n                    "+e._s(e.$page.profile.name)+"\n                ")]),e._v(" "),r("v-list-item-subtitle",[e._v("\n                    "+e._s(e.$page.profile.email)+"\n                ")])],1),e._v(" "),r("v-list-item-action",[r("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.logout()}}},"v-btn",o,!1),n),[r("v-icon",{on:{click:function(t){return t.stopPropagation(),e.logout()}}},[e._v("mdi-logout-variant")])],1)]}}],null,!1,2175860179)},[e._v("\n                    Logout\n                ")])],1)],1):e._e(),e._v(" "),r("v-divider"),e._v(" "),e._l(e.navs,(function(t,n){return[t.heading?[e.drawer?r("v-subheader",{key:n},[e._v("\n                    "+e._s(t.heading)+"\n                ")]):e._e()]:t.divider?r("v-divider",{key:n}):t.children?r("v-list-group",{key:n,attrs:{color:"red"},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-list-item-action",[e.mini?r("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,i=n.attrs;return[r("v-icon",e._g(e._b({},"v-icon",i,!1),o),[e._v("\n                                    "+e._s(t.icon)+"\n                                ")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(t.text))])]):r("v-icon",[e._v("\n                            "+e._s(t.icon)+"\n                        ")])],1),e._v(" "),r("v-list-item-title",[e._v("\n                        "+e._s(t.text)+"\n                    ")])]},proxy:!0}],null,!0),model:{value:t.model,callback:function(r){e.$set(t,"model",r)},expression:"item.model"}},[e._v(" "),e._l(t.children,(function(t,n){return r("v-list-item",{key:n,attrs:{"input-value":e.active(t.to),dark:e.darker,link:""},on:{click:function(r){return e.goto(t.to)}}},[r("v-list-item-action",[e.mini?r("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,i=n.attrs;return[r("v-icon",e._g(e._b({},"v-icon",i,!1),o),[e._v("\n                                    "+e._s(t.icon)+"\n                                ")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(t.text))])]):e._e()],1),e._v(" "),r("v-list-item-title",[e._v("\n                        "+e._s(t.text)+"\n                    ")]),e._v(" "),t.icon?r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1):e._e()],1)}))],2):r("v-list-item",{key:n,attrs:{"input-value":e.active(t.to),color:"red",link:""},on:{click:function(r){return e.goto(t.to)}}},[r("v-list-item-action",[e.mini?r("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,i=n.attrs;return[r("v-icon",e._g(e._b({},"v-icon",i,!1),o),[e._v("\n                                "+e._s(t.icon)+"\n                            ")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(t.text))])]):r("v-icon",[e._v("\n                        "+e._s(t.icon)+"\n                    ")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]}))],2)],1)}),[],!1,null,null,null).exports,k={mixins:[b.a]};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E={components:{AppContainer:m,AppBottomNav:h,AppLeftDrawer:x,TheSnackBar:u,FullscreenConfirmation:Object(l.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.mobile&&!e.webview?r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogFullscreen,callback:function(t){e.dialogFullscreen=t},expression:"dialogFullscreen"}},[r("v-card",{attrs:{dark:e.darker}},[r("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),r("v-card-text",[e._v("\n            You are using small device screen, we can help you navigate\n            easier using fullscreen mode.\n        ")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFullscreen(!1)}}},[e._v("\n                No\n            ")]),e._v(" "),r("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFullscreen(!0)}}},[e._v("\n                Yes\n            ")])],1)],1)],1):e._e()}),[],!1,null,null,null).exports},methods:P(P({},Object(n.c)("app",[i.c,i.b])),{},{onResize:function(){this.SET_SIZE({width:window.innerWidth,height:window.innerHeight})}}),watch:{$page:{immediate:!0,handler:function(e){console.warn("Inertia",e),e.status&&this.SET_MESSAGE({type:"info",text:e.status})}}},mounted:function(){this.onResize()}},D=Object(l.a)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}]},[r("app-left-drawer"),e._v(" "),e.mobile?r("app-bottom-nav"):e._e(),e._v(" "),r("app-container",[e._t("default")],2),e._v(" "),r("the-snack-bar"),e._v(" "),r("fullscreen-confirmation")],1)}),[],!1,null,null,null);t.a=D.exports},"KHd+":function(e,t,r){"use strict";function n(e,t,r,n,o,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:e,options:l}}r.d(t,"a",(function(){return n}))},LEfl:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return b}));r("LvDl");var n={data:function(){return{showPassword:!1}},computed:{passwordState:function(){return{icon:this.showPassword?"mdi-eye":"mdi-eye-off",type:this.showPassword?"text":"password"}}}},o=r("sf/U"),i=[{heading:"MENU"},{text:"Dashboard",to:"dashboard",icon:"mdi-currency-usd",roles:"*",bottomNav:!0},{text:"Formula",to:"formula.index",icon:"mdi-dna",roles:"*",bottomNav:!0},{text:"Materials",model:!1,icon:"mdi-palette",bottomNav:!0,children:[{text:"Material",to:"material.index",icon:"mdi-format-color-fill",roles:"*",bottomNav:!0},{text:"Matter",to:"matter.index",icon:"mdi-spray",roles:[o.b.ADMIN]},{text:"Measurement",to:"measurement.index",icon:"mdi-test-tube",roles:[o.b.ADMIN]}]},{text:"User",to:"user.index",icon:"mdi-account-group",roles:[o.b.ADMIN],bottomNav:!0}];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={computed:{navs:function(){var e=this;return i.reduce((function(t,r){if(r.children){var n=e.convertNavGroup(r);if(n)return t.concat(n)}else{if(!r.to)return t.concat(r);if(e.authorized(r))return t.concat(r)}return t}),[])}},methods:{goto:function(e){this.$inertia.visit(route(e))},active:function(e){return route().current(e)},logout:function(){this.$axios.post(route("logout").url()).then((function(e){return window.location="/"})).catch((function(e){}))},convertNavGroup:function(e){var t=this;e.model=e.children.some((function(e){return e.to===route().current()}));var r=e.children.filter((function(e){return t.authorized(e)}));return r.length>1?a(a({},e),{},{children:r}):1==r.length?r[0]:void 0},authorized:function(e){return!!e.to&&(!!e.roles.includes("*")||!!e.roles.includes(this.$page.profile.role.name))}}},u=r("L2JU"),v=r("xgmY"),d=r("qRYQ");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={data:function(){return{dialogFullscreen:!d.c.get("confirmedFullscreen")}},computed:f(f({},Object(u.d)("app",["fullscreen"])),{},{iconFullscreen:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"}}),methods:f(f({},Object(u.c)("app",[v.i])),{},{toggleFullscreen:function(){this.$fullscreen.toggle(document.body,{callback:this.TOGGLE_FULLSCREEN()})},confirmFullscreen:function(e){var t=this;e&&this.toggleFullscreen(),d.c.set("confirmedFullscreen",!0),this.$nextTick((function(){return t.dialogFullscreen=!1}))}})}},Wxha:function(e,t,r){"use strict";var n={props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{cardTextHeight:function(){return this.mobile?"":"max-height: 400px;"}}},o=r("KHd+"),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile,dark:e.darker,"max-width":"500",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:e.disabled}},[r("v-card-title",[e._t("title")],2),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pt-2",style:e.cardTextHeight},[e._t("content")],2),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n                Cancel\n            ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:e.disabled,color:"red"},on:{click:function(t){return e.$emit("confirmed")}}},[r("span",{staticClass:"white--text"},[e._v("Yes, sure")])])],1)],1)],1)}),[],!1,null,null,null);t.a=i.exports},XXD5:function(e,t,r){"use strict";r.r(t);var n={props:["sessions"]},o=r("KHd+"),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{attrs:{"two-line":""}},[e._l(e.sessions,(function(t,n){return[r("v-list-item",{key:"item-"+n},[r("v-list-item-icon",[r("v-icon",[e._v("\n                    "+e._s(t.agent.is_desktop?"mdi-monitor":"mdi-cellphone-android")+"\n                ")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                    "+e._s(t.agent.platform)+" -\n                    "+e._s(t.agent.browser)+"\n                ")]),e._v(" "),r("v-list-item-subtitle",[e._v("\n                    "+e._s(t.ip_address)+"\n\n                    "),t.is_current_device?r("v-chip",{attrs:{color:"primary",small:""}},[e._v("\n                        This device\n                    ")]):r("v-chip",{attrs:{small:""}},[e._v("\n                        Last active\n                        "+e._s(t.last_active)+"\n                    ")])],1)],1)],1),e._v(" "),r("v-divider",{key:"divider-"+n})]}))],2)}),[],!1,null,null,null);t.default=i.exports},pggf:function(e,t,r){"use strict";r.r(t);var n={props:["profile"],data:function(){return{form:this.$inertia.form({_method:"PUT",name:this.profile.name,email:this.profile.email,role:this.profile.role},{bag:"updateProfileInformation",resetOnSuccess:!1}),verifier:this.$inertia.form()}},methods:{updateProfile:function(){this.form.post(route("user-profile-information.update"),{preserveScroll:!0})},verifyEmail:function(){this.verifier.post(route("verification.send"),{preserveScroll:!0})}}},o=r("KHd+"),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{class:{"white--text":e.darker},attrs:{cols:"12",sm:"4"}},[r("div",{staticClass:"text-h6"},[e._v("\n            Profile Information\n            "),e.profile.verified?e._e():r("v-chip",{attrs:{disabled:e.verifier.processing,color:"primary",small:""},on:{click:e.verifyEmail}},[e._v("\n                "+e._s(e.verifier.processing?"Verifying...":"Verify Email")+"\n            ")])],1),e._v(" "),r("div",{staticClass:"text-caption"},[e._v("\n            Update your account's profile information and email address.\n        ")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-form",{attrs:{disabled:e.form.processing},on:{submit:function(t){return t.preventDefault(),e.updateProfile(t)}}},[r("v-card",{attrs:{loading:e.form.processing,dark:e.darker}},[r("v-card-text",[r("v-text-field",{attrs:{"error-messages":e.form.error("name"),success:!!e.form.error("name"),dense:e.denser,label:"Name",type:"text",hint:"Your profile name","persistent-hint":"",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{"error-messages":e.form.error("email"),success:!!e.form.error("email"),"append-icon":e.profile.verified?"mdi-check-decagram":"",dense:e.denser,label:"E-mail",type:"email",hint:"Your recovery email","persistent-hint":"",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{value:e.form.role.name,dense:e.denser,label:"Role",hint:"Your current role",readonly:"","persistent-hint":"",outlined:""}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("div",[e.form.recentlySuccessful?r("span",{staticClass:"font-italic green--text mr-3"},[e._v("\n                            Saved.\n                        ")]):e._e(),e._v(" "),r("v-btn",{attrs:{disabled:e.form.processing,type:"submit",color:"primary"}},[e._v("\n                            Save\n                        ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports},tOXh:function(e,t,r){"use strict";r.r(t);var n={mixins:[r("LEfl").c],data:function(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""},{bag:"updatePassword"})}},methods:{updatePassword:function(){this.form.put(route("user-password.update"),{preserveScroll:!0})}}},o=r("KHd+"),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{class:{"white--text":e.darker},attrs:{cols:"12",sm:"4"}},[r("div",{staticClass:"text-h6"},[e._v("\n            Update Password\n            "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.showPassword=!e.showPassword}}},[r("v-icon",[e._v("\n                    "+e._s(e.passwordState.icon)+"\n                ")])],1)],1),e._v(" "),r("div",{staticClass:"text-caption"},[e._v("\n            Ensure your account is using a long, random password to stay\n            secure.\n        ")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-form",{attrs:{disabled:e.form.processing},on:{submit:function(t){return t.preventDefault(),e.updatePassword(t)}}},[r("v-card",{attrs:{loading:e.form.processing,dark:e.darker}},[r("v-card-text",[r("v-text-field",{attrs:{type:e.passwordState.type,"error-messages":e.form.error("current_password"),success:!!e.form.error("current_password"),dense:e.denser,label:"Current Password",hint:"Your current password",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},model:{value:e.form.current_password,callback:function(t){e.$set(e.form,"current_password",t)},expression:"form.current_password"}}),e._v(" "),r("v-text-field",{attrs:{type:e.passwordState.type,"error-messages":e.form.error("password"),success:!!e.form.error("password"),dense:e.denser,label:"New Password",hint:"Your new password",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{type:e.passwordState.type,"error-messages":e.form.error("password_confirmation"),success:!!e.form.error("password_confirmation"),dense:e.denser,label:"New Password Confirmation",hint:"Fill again the new password",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("div",[e.form.recentlySuccessful?r("span",{staticClass:"font-italic green--text mr-3"},[e._v("\n                            Saved.\n                        ")]):e._e(),e._v(" "),r("v-btn",{attrs:{disabled:e.form.processing,type:"submit",color:"primary"}},[e._v("\n                            Save\n                        ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports},xtbw:function(e,t,r){"use strict";r.r(t);var n=r("LEfl"),o=r("Wxha"),i=r("XXD5"),s={mixins:[n.c],components:{TheDialogConfirmation:o.a,BrowserSessionsList:i.default},props:["sessions"],data:function(){return{confirmingLogout:!1,form:this.$inertia.form({_method:"DELETE",password:""},{bag:"logoutOtherBrowserSessions"})}},methods:{confirmLogout:function(){this.form.password="",this.confirmingLogout=!0},logoutOtherBrowserSessions:function(){var e=this;this.form.post(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:function(t){e.form.hasErrors()||(e.confirmingLogout=!1)}})}}},a=r("KHd+"),c=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fragment",[r("v-row",[r("v-col",{class:{"white--text":e.darker},attrs:{cols:"12",sm:"4"}},[r("div",{staticClass:"text-h6"},[e._v("Browser Sessions")]),e._v(" "),r("div",{staticClass:"text-caption"},[e._v("\n                Manage and logout your active sessions on other browsers and\n                devices.\n            ")])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-card",{attrs:{loading:e.form.processing,dark:e.darker}},[r("v-card-text",[r("browser-sessions-list",{attrs:{sessions:e.sessions}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("div",[e.form.recentlySuccessful?r("span",{staticClass:"font-italic green--text mr-3"},[e._v("\n                            Loged out.\n                        ")]):e._e(),e._v(" "),r("v-btn",{attrs:{disabled:e.form.processing||1===e.sessions.length,color:"primary"},on:{click:e.confirmLogout}},[e._v("\n                            Logout Other Sessions\n                        ")])],1)],1)],1)],1)],1),e._v(" "),r("the-dialog-confirmation",{attrs:{disabled:e.form.processing},on:{confirmed:e.logoutOtherBrowserSessions},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Logout Other Sessions")]},proxy:!0},{key:"content",fn:function(){return[r("p",[e._v("\n                Please enter your password to confirm you would like to\n                logout of your other browser sessions across all of your\n                devices.\n            ")]),e._v(" "),r("v-text-field",{attrs:{type:e.passwordState.type,"append-icon":e.passwordState.icon,"error-messages":e.form.error("password"),success:!!e.form.error("password"),disabled:e.form.processing,dense:e.denser,label:"Current password",hint:"Your current password",autocomplete:"off","persistent-hint":"",outlined:"",counter:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.logoutOtherBrowserSessions(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})]},proxy:!0}]),model:{value:e.confirmingLogout,callback:function(t){e.confirmingLogout=t},expression:"confirmingLogout"}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);