(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"Iz+j":function(e,t,n){"use strict";n.r(t);var a={mixins:[n("mJJU").e],data:function(){return{headers:[{text:"Name",value:"name"},{text:"Type",value:"required"},{text:"Material",value:"materials_count",align:"center"},{text:"Creator",value:"user.name"},{text:"UpdatedAt",value:"updated_at"}]}}},r=n("KHd+"),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("the-data",{attrs:{selected:e.selected,options:e.options,headers:e.headers,total:e.total,items:e.items,"can-create":e.canCreate,loading:e.fetching},on:{"update:selected":function(t){return e.$emit("update:selected",t)},"update:options":function(t){return e.$emit("update:options",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[n("v-chip",{attrs:{color:e.chip(a),small:e.denser,dark:""},on:{click:function(t){return e.edit(a)}}},[e._v("\n      "+e._s(a.name)+"\n    ")])]}},{key:"item.required",fn:function(t){var n=t.item;return[e._v("\n    "+e._s(n.required?"Required":"Optional")+"\n  ")]}},{key:"item.updated_at",fn:function(t){var n=t.item;return[e._v("\n    "+e._s(e._f("moment")(n.updated_at,"from"))+"\n  ")]}},{key:"card",fn:function(t){var a=t.item;return[n("v-btn",{attrs:{color:e.chip(a),absolute:"",right:"",small:"",tile:"",top:""}},[e._v("\n      "+e._s(a.user.name)+"\n    ")]),e._v(" "),n("v-card-text",{on:{click:function(t){return e.edit(a)}}},[n("div",{staticClass:"overline"},[e._v("\n        "+e._s(e._f("moment")(a.updated_at,"from"))+"\n      ")]),e._v(" "),n("div",{staticClass:"subtitle-2 font-weight-bold"},[e._v("\n        "+e._s(a.name)+"\n      ")])])]}}],null,!0)})}),[],!1,null,null,null);t.default=i.exports}}]);