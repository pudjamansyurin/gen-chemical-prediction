(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0bOp":function(e,t,n){"use strict";var r=n("LvDl"),i=n("LEfl"),o=n("L2JU");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={mixins:[i.a],props:{value:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}}},computed:s(s({},Object(o.d)("app",["size"])),{},{selected:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}),methods:{selectedIndex:function(e){return this.selected.findIndex((function(t){return t.id===e.id}))},toggleSelect:function(e){if(e.authorized){var t=this.selectedIndex(e);t>-1?this.selected.splice(t,1):this.selected.splice(0,1,e)}}}},c=n("KHd+"),d=Object(c.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{align:"center",justify:"center",dense:""}},e._l(e.items,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12"}},[n("v-card",{directives:[{name:"longclick",rawName:"v-longclick",value:function(){return e.toggleSelect(t)},expression:"() => toggleSelect(item)"}],key:t.id,attrs:{dark:e.dark,tile:""},on:{click:function(n){e.selected.length>0&&e.toggleSelect(t)}}},[e.selectedIndex(t)>-1?n("v-progress-linear",{attrs:{value:100,dark:e.dark,color:"primary"}}):e._e(),e._v(" "),e._t("default",null,{item:t})],2)],1)})),1)}),[],!1,null,null,null).exports,f={mixins:[i.a],props:{value:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0},loading:{type:Boolean,default:!1}},methods:{getItemValue:function(e,t){return Object(r.get)(e,t.value)}}},p=Object(c.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-data-table",{staticClass:"elevation-1",attrs:{value:e.value,options:e.options,headers:e.headers,items:e.items,"server-items-length":e.total,loading:e.loading,dense:e.dense,dark:e.dark,"footer-props":{itemsPerPageText:"Rows"},"selectable-key":"authorized","sort-by":"updated_at","single-select":"","sort-desc":"","show-select":"","must-sort":""},on:{input:function(t){return e.$emit("input",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,[e._v("\n            "+e._s(e.getItemValue(r,t))+"\n        ")],{item:r})]}}}))],null,!0)})}),[],!1,null,null,null).exports,m={mixins:[i.a],props:{search:{type:String,defautl:""}},computed:{text:function(){return this.search?'No item related to "'.concat(this.search,'".'):"Oops, no data found."}}},v=Object(c.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-alert",{attrs:{dark:this.dark,type:"info",border:"left",outlined:""}},[t("span",[this._v(this._s(this.text))])])}),[],!1,null,null,null).exports,h={mixins:[i.a],props:{selected:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0},loading:{type:Boolean,default:!1}},components:{NoContent:v,TheDataCard:d,TheDataTable:p},methods:{updateOptions:function(e){Object(r.isEqual)(this.options,e)||this.$emit("update:options",e)}}},b=Object(c.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.items.length>0,expression:"items.length > 0"}]},[e.mobile?n("the-data-card",{attrs:{value:e.selected,options:e.options,items:e.items},on:{input:function(t){return e.$emit("update:selected",t)},"update:options":e.updateOptions},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[e._t("card",null,{item:n})]}}],null,!0)}):n("the-data-table",{attrs:{value:e.selected,options:e.options,items:e.items,headers:e.headers,total:e.total,loading:e.loading},on:{input:function(t){return e.$emit("update:selected",t)},"update:options":e.updateOptions},scopedSlots:e._u([e._l(e.headers,(function(t){return{key:"item."+t.value,fn:function(n){var r=n.item;return[e._t("item."+t.value,null,{item:r})]}}}))],null,!0)})],1),e._v(" "),n("no-content",{directives:[{name:"show",rawName:"v-show",value:0==e.items.length,expression:"items.length == 0"}],attrs:{search:e.options.search}})],1)}),[],!1,null,null,null);t.a=b.exports},"Iz+j":function(e,t,n){"use strict";n.r(t);var r=n("LvDl"),i=n("LEfl"),o=n("0bOp"),a={mixins:[i.a],props:{selected:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){return{headers:[{text:"Name",value:"name"},{text:"Required",value:"required",align:"center"},{text:"Material",value:"materials_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}],fetching:!1}},components:{TheData:o.a},methods:{chip:function(e){return e.authorized?"primary":"grey"},edit:function(e){this.$emit("edit",e.id)}},watch:{options:{handler:Object(r.debounce)((function(e){var t=this;this.$inertia.replace(route(route().current(),Object(r.omit)(e,["groupBy","groupDesc","mustSort","multiSort"])),{preserveScroll:!0,onStart:function(e){return t.fetching=!0},onFinish:function(){return t.fetching=!1},only:["status","items","total"]})}),500)}}},s=n("KHd+"),l=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-data",{attrs:{selected:e.selected,options:e.options,headers:e.headers,total:e.total,items:e.items,loading:e.fetching},on:{"update:selected":function(t){return e.$emit("update:selected",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.chip(r),small:e.dense,dark:""},on:{click:function(t){return e.edit(r)}}},[e._v("\n            "+e._s(r.name)+"\n        ")])]}},{key:"item.required",fn:function(t){var r=t.item;return[n("v-icon",{attrs:{color:r.required?"primary":"red"}},[e._v("\n            "+e._s(r.required?"mdi-check":"mdi-window-close")+"\n        ")])]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(e._f("moment")(n.updated_at,"from"))+"\n    ")]}},{key:"card",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:e.chip(r),outlined:"",absolute:"",right:"",small:"",tile:"",top:""}},[e._v("\n            "+e._s(r.required?"Required":"Optional")+"\n        ")]),e._v(" "),n("v-card-text",{on:{click:function(t){return e.edit(r)}}},[n("div",{staticClass:"overline"},[e._v("\n                "+e._s(e._f("moment")(r.updated_at,"from"))+"\n            ")]),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                "+e._s(r.user.name)+"\n            ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                "+e._s(r.name)+"\n            ")])])]}}],null,!0)})}),[],!1,null,null,null);t.default=l.exports},MMcg:function(e,t,n){"use strict";var r={mixins:[n("LEfl").a],props:{value:{type:Boolean,default:!1},title:{type:String,default:"Detail Item"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},width:{type:[String,Number],default:600},tabs:{type:Array,default:function(){return[]}},tab:{type:Number,default:0}},data:function(){return{fullscreen:!0}},computed:{cardTextHeight:function(){if(!this.mobile&&!this.fullscreen)return"max-height: 500px;"},iconFullscreen:function(){return this.fullscreen?"mdi-fullscreen-exit":"mdi-fullscreen"}}},i=n("KHd+"),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile||e.fullscreen,"max-width":e.width,dark:e.dark,persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:e.disabled}},[n("v-card-title",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"5"}},[n("span",{staticClass:"headline"},[e._v(e._s(e.title))]),e._v(" "),e.mobile?e._e():n("v-btn",{attrs:{icon:""},on:{click:function(t){e.fullscreen=!e.fullscreen}}},[n("v-icon",[e._v(e._s(e.iconFullscreen))])],1)],1),e._v(" "),e.tabs.length>0?n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-tabs",{attrs:{value:e.tab,"background-color":"transparent","active-class":"font-weight-bold",height:"30","hide-slider":"",right:""},on:{change:function(t){return e.$emit("update:tab",t)}}},e._l(e.tabs,(function(t){return n("v-tab",{key:t},[e._v("\n                            "+e._s(t)+"\n                        ")])})),1)],1):e._e()],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"py-5",style:e.cardTextHeight},[e.tabs.length>0?n("v-tabs-items",{attrs:{value:e.tab,dark:e.dark,touchless:""},on:{input:function(t){return e.$emit("update:tab",t)}}},e._l(e.tabs,(function(t){return n("v-tab-item",{key:t},[e._t(t)],2)})),1):e._t("default")],2),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n                Cancel\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),e.readonly?e._e():n("v-btn",{attrs:{disabled:e.disabled,color:"primary"},on:{click:function(t){return e.$emit("submit")}}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.a=o.exports},Phgr:function(e,t,n){"use strict";n.r(t);var r=n("2bGR"),i=n("5xhC"),o=n("/yGT"),a=n("Iz+j"),s=n("Vvuf"),l=n("WnLS"),u={layout:i.a,components:{AppTopBar:o.a,MatterList:a.default,MatterForm:s.default,MatterDelete:l.default},props:["items","total"],data:function(){return{model:"matter",id:-1,selected:[],dialogForm:!1,dialogDelete:!1,options:Object(r.b)(r.a)}},methods:{onCreate:function(){this.id=-1,this.dialogForm=!0},onEdit:function(e){0===this.selected.length&&(this.id=e,this.dialogForm=!0)},onDelete:function(){this.dialogDelete=!0}}},c=n("KHd+"),d=Object(c.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("app-top-bar",{attrs:{selected:e.selected,options:e.options,"page-title":e.model.toUpperCase(),"mine-tab":""},on:{"update:selected":function(t){e.selected=t},"update:options":function(t){e.options=t},create:e.onCreate,delete:e.onDelete}}),e._v(" "),n("matter-list",{attrs:{selected:e.selected,options:e.options,total:e.total,items:e.items},on:{"update:selected":function(t){e.selected=t},"update:options":function(t){e.options=t},edit:e.onEdit}}),e._v(" "),n("matter-form",{attrs:{id:e.id},model:{value:e.dialogForm,callback:function(t){e.dialogForm=t},expression:"dialogForm"}}),e._v(" "),n("matter-delete",{attrs:{selected:e.selected},on:{"update:selected":function(t){e.selected=t}},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}})],1)}),[],!1,null,null,null);t.default=d.exports},Vvuf:function(e,t,n){"use strict";n.r(t);var r=n("LvDl"),i=n("y1zv"),o=n("LEfl"),a=n("MMcg");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={mixins:[o.a],props:{value:{type:Boolean,default:!1},id:{type:Number,default:-1}},components:{TheDialogForm:a.a},data:function(){return{model:"matter",fetching:!1,form:this.$inertia.form(l({_method:"PUT"},Object(r.cloneDeep)(i.c)),{bag:"matter_form",resetOnSuccess:!1})}},computed:{creating:function(){return-1===this.id},disabled:function(){return this.form.processing||this.fetching},readonly:function(){return!(this.creating||this.form.authorized)},formTitle:function(){if(!this.readonly){var e=this.creating?"New":"Edit",t=this.model.toUpperCase();return"".concat(e," ").concat(t)}},dialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{fetch:function(){var e=this;this.fetching=!0,this.$axios.get(route("matter.show",this.id).url()).then((function(t){var n=t.data;Object(r.assign)(e.form,Object(r.pick)(n,Object(r.keys)(i.c)))})).catch((function(t){return e.dialog=!1})).then((function(){return e.fetching=!1}))},reset:function(){delete this.$page.errorBags.matter_form,Object(r.assign)(this.form,i.c)},method:function(){var e="post",t=route("matter.store");return this.creating||(e="put",t=route("matter.update",this.id)),{url:t,method:e}},save:function(){var e=this,t=this.method(),n=t.url,r=t.method;this.form._method=r,this.form.post(n,{preserveScroll:!0,onSuccess:function(t){e.form.hasErrors()||(e.dialog=!1)}})}},watch:{value:{immediate:!0,handler:function(e){e?(this.creating||this.fetch(),this.form.change_password=this.creating):this.reset()}}}},d=n("KHd+"),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-dialog-form",{attrs:{title:e.formTitle,disabled:e.disabled,readonly:e.readonly},on:{submit:e.save},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-form",{attrs:{disabled:e.disabled||e.readonly},on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("v-text-field",{attrs:{"error-messages":e.form.error("name"),success:!!e.form.error("name"),autofocus:!e.mobile,label:"Matter name",type:"text",hint:"This should be unique name","persistent-hint":"",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("v-checkbox",{attrs:{"error-messages":e.form.error("required"),success:!!e.form.error("required"),label:"Required matter?",hint:"This rule is used when composing formula","persistent-hint":"",outlined:""},model:{value:e.form.required,callback:function(t){e.$set(e.form,"required",t)},expression:"form.required"}}),e._v(" "),e.readonly?e._e():n("v-btn",{staticClass:"d-none",attrs:{disabled:e.disabled,type:"submit"}})],1)],1)}),[],!1,null,null,null);t.default=f.exports},WnLS:function(e,t,n){"use strict";n.r(t);var r=n("L2JU"),i=n("LEfl"),o=n("xgmY"),a=n("Wxha");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={mixins:[i.a],props:{value:{type:Boolean,default:!1},selected:{type:Array,default:function(){return[]}}},components:{TheDialogConfirmation:a.a},data:function(){return{model:"matter",form:this.$inertia.form({_method:"DELETE",ids:[]},{bag:"matter_delete"})}},computed:{dialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:l(l({},Object(r.c)("app",[o.b])),{},{remove:function(){var e=this;this.form.ids=this.selected.map((function(e){return e.id}))[0],this.form.post(route("matter.destroy",this.form.ids),{preserveScroll:!0,onSuccess:function(t){e.form.hasErrors()?e.SET_MESSAGE({type:"error",text:e.form.error("ids")}):(e.$emit("update:selected",[]),e.dialog=!1)}})}})},d=n("KHd+"),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-dialog-confirmation",{attrs:{disabled:e.form.processing},on:{confirmed:e.remove},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Delete confirmation")]},proxy:!0},{key:"content",fn:function(){return[n("p",[e._v("Are you sure to delete?")]),e._v(" "),e._l(e.selected,(function(t){return n("v-chip",{key:t.id,staticClass:"ma-1"},[e._v("\n            "+e._s(t.name)+"\n        ")])}))]},proxy:!0}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})}),[],!1,null,null,null);t.default=f.exports},Wxha:function(e,t,n){"use strict";var r={mixins:[n("LEfl").a],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{cardTextHeight:function(){return this.mobile?"":"max-height: 400px;"}}},i=n("KHd+"),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,fullscreen:e.mobile,dark:e.dark,"max-width":"500",persistent:"",scrollable:""},on:{input:function(t){return e.$emit("input",t)}}},[n("v-card",{attrs:{loading:e.disabled}},[n("v-card-title",[e._t("title")],2),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pt-2",style:e.cardTextHeight},[e._t("content")],2),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n                Cancel\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{disabled:e.disabled,color:"red"},on:{click:function(t){return e.$emit("confirmed")}}},[n("span",{staticClass:"white--text"},[e._v("Yes, sure")])])],1)],1)],1)}),[],!1,null,null,null);t.a=o.exports}}]);