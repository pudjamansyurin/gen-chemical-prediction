(window.webpackJsonp=window.webpackJsonp||[]).push([[4,20,21,22],{"5xhC":function(e,t,n){"use strict";var r=n("L2JU"),i=n("qRYQ"),o=n("xgmY");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{snackbar:!1,timeout:2e3}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.d)("app",["message"])),created:function(){var e=this;this.$store.subscribe((function(t,n){t.type===Object(i.d)("app",o.b)&&e.message.text&&(e.snackbar=!0)}))}},s=n("KHd+"),u=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{color:e.message.type,timeout:e.timeout,top:"",right:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{icon:"",dark:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[n("v-icon",[e._v("mdi-close-circle")])],1)]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[n("v-icon",[e._v("mdi-bell")]),e._v(" "),n("i",[e._v(e._s(e.message.text))])],1)}),[],!1,null,null,null).exports;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.b)("app",["isLoading"]))},f={components:{AppOverlayIndicator:Object(s.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-overlay",{attrs:{value:this.isLoading,"z-index":"999"}},[t("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"white"}})],1)}),[],!1,null,null,null).exports}},m=Object(s.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-main",{class:this.darker?"black":"grey lighten-3"},[t("v-container",{attrs:{fluid:""}},[this._t("default"),this._v(" "),t("app-overlay-indicator")],2)],1)}),[],!1,null,null,null).exports,_=n("LEfl"),b={mixins:[_.b],computed:{items:function(){return this.navs.filter((function(e){var t=e.bottomNav,n=e.children;return!!t||!!n})).map((function(e){return e.children?e.children.find((function(e){return!!e.bottomNav})):e}))}}},g=Object(s.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{attrs:{dark:e.darker,color:"primary",app:""}},e._l(e.items,(function(t,r){return n("v-btn",{key:r,attrs:{"input-value":e.active(t.to)},on:{click:function(n){return e.goto(t.to)}}},[n("span",[e._v(e._s(t.text))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),1)}),[],!1,null,null,null).exports;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={mixins:[_.b],computed:y(y({},Object(r.d)("app",["drawer"])),{},{mini:function(){return!this.drawer&&this.$vuetify.breakpoint.lgAndUp}}),methods:y({},Object(r.c)("app",[o.a]))},j=Object(s.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{value:e.drawer||e.$vuetify.breakpoint.lgAndUp,"mini-variant":e.mini,dark:e.darker,app:""},on:{input:e.SET_DRAWER}},[n("v-list",{staticClass:"py-0"},[e.$page.profile.id>-1?n("v-list-item",{attrs:{"input-value":e.active("profile.show"),color:"red",link:"","two-line":""},on:{click:function(t){return e.goto("profile.show")}}},[n("v-list-item-action",[e.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-icon",e._g(e._b({},"v-icon",i,!1),r),[e._v("\n                            mdi-face-profile\n                        ")])]}}],null,!1,1160482933)},[e._v(" "),n("span",[e._v("Profile")])]):n("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v("\n                    "+e._s(e.$page.profile.name)+"\n                ")]),e._v(" "),n("v-list-item-subtitle",[e._v("\n                    "+e._s(e.$page.profile.email)+"\n                ")])],1),e._v(" "),n("v-list-item-action",[n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.logout()}}},"v-btn",i,!1),r),[n("v-icon",{on:{click:function(t){return t.stopPropagation(),e.logout()}}},[e._v("mdi-logout-variant")])],1)]}}],null,!1,2175860179)},[e._v("\n                    Logout\n                ")])],1)],1):e._e(),e._v(" "),n("v-divider"),e._v(" "),e._l(e.navs,(function(t,r){return[t.heading?[e.drawer?n("v-subheader",{key:r},[e._v("\n                    "+e._s(t.heading)+"\n                ")]):e._e()]:t.divider?n("v-divider",{key:r}):t.children?n("v-list-group",{key:r,attrs:{color:"red"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-action",[e.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var i=r.on,o=r.attrs;return[n("v-icon",e._g(e._b({},"v-icon",o,!1),i),[e._v("\n                                    "+e._s(t.icon)+"\n                                ")])]}}],null,!0)},[e._v(" "),n("span",[e._v(e._s(t.text))])]):n("v-icon",[e._v("\n                            "+e._s(t.icon)+"\n                        ")])],1),e._v(" "),n("v-list-item-title",[e._v("\n                        "+e._s(t.text)+"\n                    ")])]},proxy:!0}],null,!0),model:{value:t.model,callback:function(n){e.$set(t,"model",n)},expression:"item.model"}},[e._v(" "),e._l(t.children,(function(t,r){return n("v-list-item",{key:r,attrs:{"input-value":e.active(t.to),dark:e.darker,link:""},on:{click:function(n){return e.goto(t.to)}}},[n("v-list-item-action",[e.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var i=r.on,o=r.attrs;return[n("v-icon",e._g(e._b({},"v-icon",o,!1),i),[e._v("\n                                    "+e._s(t.icon)+"\n                                ")])]}}],null,!0)},[e._v(" "),n("span",[e._v(e._s(t.text))])]):e._e()],1),e._v(" "),n("v-list-item-title",[e._v("\n                        "+e._s(t.text)+"\n                    ")]),e._v(" "),t.icon?n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1):e._e()],1)}))],2):n("v-list-item",{key:r,attrs:{"input-value":e.active(t.to),color:"red",link:""},on:{click:function(n){return e.goto(t.to)}}},[n("v-list-item-action",[e.mini?n("v-tooltip",{attrs:{"nudge-right":"12",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var i=r.on,o=r.attrs;return[n("v-icon",e._g(e._b({},"v-icon",o,!1),i),[e._v("\n                                "+e._s(t.icon)+"\n                            ")])]}}],null,!0)},[e._v(" "),n("span",[e._v(e._s(t.text))])]):n("v-icon",[e._v("\n                        "+e._s(t.icon)+"\n                    ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]}))],2)],1)}),[],!1,null,null,null).exports,w={mixins:[_.a]};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S={components:{AppContainer:m,AppBottomNav:g,AppLeftDrawer:j,TheSnackBar:u,FullscreenConfirmation:Object(s.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.mobile&&!e.webview?n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogFullscreen,callback:function(t){e.dialogFullscreen=t},expression:"dialogFullscreen"}},[n("v-card",{attrs:{dark:e.darker}},[n("v-card-title",{staticClass:"headline"},[e._v(" Use fullscreen? ")]),e._v(" "),n("v-card-text",[e._v("\n            You are using small device screen, we can help you navigate\n            easier using fullscreen mode.\n        ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.confirmFullscreen(!1)}}},[e._v("\n                No\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"green",dark:""},on:{click:function(t){return e.confirmFullscreen(!0)}}},[e._v("\n                Yes\n            ")])],1)],1)],1):e._e()}),[],!1,null,null,null).exports},methods:P(P({},Object(r.c)("app",[o.c,o.b])),{},{onResize:function(){this.SET_SIZE({width:window.innerWidth,height:window.innerHeight})}}),watch:{$page:{immediate:!0,handler:function(e){console.warn("Inertia",e),e.status&&this.SET_MESSAGE({type:"info",text:e.status})}}},mounted:function(){this.onResize()}},D=Object(s.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}]},[n("app-left-drawer"),e._v(" "),e.mobile?n("app-bottom-nav"):e._e(),e._v(" "),n("app-container",[e._t("default")],2),e._v(" "),n("the-snack-bar"),e._v(" "),n("fullscreen-confirmation")],1)}),[],!1,null,null,null);t.a=D.exports},"Iz+j":function(e,t,n){"use strict";n.r(t);var r={mixins:[n("mJJU").e],data:function(){return{headers:[{text:"Name",value:"name"},{text:"Type",value:"required"},{text:"Material",value:"materials_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}]}}},i=n("KHd+"),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-data",{attrs:{selected:e.selected,options:e.options,headers:e.headers,total:e.total,items:e.items,loading:e.fetching},on:{"update:selected":function(t){return e.$emit("update:selected",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.chip(r),small:e.denser,dark:""},on:{click:function(t){return e.edit(r)}}},[e._v("\n            "+e._s(r.name)+"\n        ")])]}},{key:"item.required",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n.required?"Required":"Optional")+"\n    ")]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(e._f("moment")(n.updated_at,"from"))+"\n    ")]}},{key:"card",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:e.chip(r),absolute:"",right:"",small:"",tile:"",top:""}},[e._v("\n            "+e._s(r.required?"Required":"Optional")+"\n        ")]),e._v(" "),n("v-card-text",{on:{click:function(t){return e.edit(r)}}},[n("div",{staticClass:"overline"},[e._v("\n                "+e._s(e._f("moment")(r.updated_at,"from"))+"\n            ")]),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                "+e._s(r.user.name)+"\n            ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                "+e._s(r.name)+"\n            ")])])]}}],null,!0)})}),[],!1,null,null,null);t.default=o.exports},Phgr:function(e,t,n){"use strict";n.r(t);var r=n("5xhC"),i=n("mJJU"),o=n("y1zv"),a=n("Iz+j"),l=n("Vvuf"),c=n("WnLS"),s={mixins:[i.d],layout:r.a,components:{MatterList:a.default,MatterForm:l.default,MatterDelete:c.default},data:function(){return{model:o.c}}},u=n("KHd+"),d=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{selected:e.selected,options:e.options,"page-title":e.model.name.toUpperCase(),"mine-tab":""},on:{"update:selected":function(t){e.selected=t},"update:options":function(t){e.options=t},create:e.onCreate,delete:e.onDelete}}),e._v(" "),n("matter-list",{attrs:{selected:e.selected,options:e.options,total:e.total,items:e.items,"mine-tab":""},on:{"update:selected":function(t){e.selected=t},"update:options":function(t){e.options=t},edit:e.onEdit}}),e._v(" "),n("matter-form",{attrs:{model:e.model,id:e.id},model:{value:e.dialogForm,callback:function(t){e.dialogForm=t},expression:"dialogForm"}}),e._v(" "),n("matter-delete",{attrs:{model:e.model,selected:e.selected},on:{"update:selected":function(t){e.selected=t}},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}})],1)}),[],!1,null,null,null);t.default=d.exports},Vvuf:function(e,t,n){"use strict";n.r(t);var r={mixins:[n("mJJU").c]},i=n("KHd+"),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-dialog-form",{attrs:{title:e.formTitle,disabled:e.disabled,readonly:e.readonly},on:{submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-form",{attrs:{disabled:e.disabled||e.readonly},on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("v-text-field",{attrs:{"error-messages":e.form.error("name"),success:!!e.form.error("name"),autofocus:!e.mobile,dense:e.denser,label:"Matter name",type:"text",hint:"This should be unique name","persistent-hint":"",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("v-checkbox",{attrs:{"error-messages":e.form.error("required"),success:!!e.form.error("required"),dense:e.denser,label:"Required matter?",hint:"This rule is used when composing formula","persistent-hint":"",outlined:""},model:{value:e.form.required,callback:function(t){e.$set(e.form,"required",t)},expression:"form.required"}}),e._v(" "),e.readonly?e._e():n("v-btn",{staticClass:"d-none",attrs:{disabled:e.disabled,type:"submit"}})],1)],1)}),[],!1,null,null,null);t.default=o.exports},WnLS:function(e,t,n){"use strict";n.r(t);var r={mixins:[n("mJJU").a]},i=n("KHd+"),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-dialog-confirmation",{attrs:{disabled:e.form.processing},on:{confirmed:e.remove},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Delete confirmation")]},proxy:!0},{key:"content",fn:function(){return[n("p",[e._v("Are you sure to delete?")]),e._v(" "),e._l(e.selected,(function(t){return n("v-chip",{key:t.id,staticClass:"ma-1"},[e._v("\n            "+e._s(t.name)+"\n        ")])}))]},proxy:!0}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})}),[],!1,null,null,null);t.default=o.exports},y1zv:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return l}));var r={name:"user",form:{id:-1,name:"",email:"",role_id:-1,role:{id:-1,name:""},password:"",password_confirmation:"",change_password:null,authorized:null}},i={name:"matter",form:{id:-1,name:"",required:null,authorized:null}},o={name:"material",form:{id:-1,name:"",matter_id:-1,authorized:null}},a={name:"measurement",form:{id:-1,name:"",primary:null,authorized:null}},l={name:"formula",form:{id:-1,name:"",note:"",materials:[],measurements:[],authorized:null}}}}]);