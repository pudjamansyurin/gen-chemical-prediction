(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"U/gR":function(e,t,n){"use strict";n.r(t);var a=n("LEfl"),i={mixins:[n("mJJU").e,a.c],data:function(){return{headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Role",value:"role.name",sortable:!1},{text:"UpdatedAt",value:"updated_at"}]}}},r=n("KHd+"),o=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-data",{attrs:{selected:e.selected,options:e.options,headers:e.headers,total:e.total,items:e.items,loading:e.fetching},on:{"update:selected":function(t){return e.$emit("update:selected",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[n("v-chip",{attrs:{color:e.chip(a),small:e.denser,dark:""},on:{click:function(t){return e.edit(a)}}},[e._v("\n            "+e._s(a.name)+"\n        ")])]}},{key:"item.email",fn:function(t){var a=t.item;return[e._v("\n        "+e._s(a.email)+"\n        "),a.verified?n("v-icon",{attrs:{color:"green"}},[e._v("\n            mdi-check-decagram\n        ")]):e._e()]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(e._f("moment")(n.updated_at,"from"))+"\n    ")]}},{key:"card",fn:function(t){var a=t.item;return[n("v-btn",{attrs:{color:e.chip(a),absolute:"",right:"",small:"",tile:"",top:""}},[e._v("\n            "+e._s(a.authorized?a.role.name:"ME")+"\n        ")]),e._v(" "),n("v-card-text",{on:{click:function(t){return e.edit(a)}}},[n("div",{staticClass:"overline"},[e._v("\n                "+e._s(e._f("moment")(a.updated_at,"from"))+"\n            ")]),e._v(" "),n("div",{staticClass:"overline"},[e._v("\n                "+e._s(a.name)+"\n            ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n                "+e._s(a.email)+"\n                "),a.verified?n("v-icon",{attrs:{color:"green"}},[e._v("\n                    mdi-check-decagram\n                ")]):e._e()],1)])]}}],null,!0)})}),[],!1,null,null,null);t.default=o.exports}}]);