webpackJsonp([4],{dJl4:function(e,t){},j6Wv:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Ol9X"),i=(s("5K5a"),{name:"Menulist",data:function(){return{userclick:{id:0,name:"紅茶",mark:"測試",size:{mid:"10",big:"20"}}}},computed:{getMenu:function(){return this.$store.state.menudata.selling}},methods:{getId:function(e){this.userclick=e,this.$refs.clear.clearchoose()}},components:{Modal:a.a}}),n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"maxset"},[s("ul",{staticClass:"list-group"},[e._l(e.getMenu,function(t){return s("li",{key:t.id,staticClass:"list-group-item m-1",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(s){return e.getId(t)}}},[s("h2",[e._v(e._s(t.name))]),e._v(" "),s("p",[e._v(e._s(t.mark))]),e._v(" "),s("div",{staticClass:"sizes"},[s("span",[e._v("中 "+e._s(t.size.mid))]),e._v(" "),""!=t.size.big?s("span",[e._v("大 "+e._s(t.size.big))]):e._e()])])}),e._v(" "),s("li",[s("Modal",{ref:"clear",attrs:{gettomodal:e.userclick}})],1)],2)])},staticRenderFns:[]};var l=s("VU/8")(i,n,!1,function(e){s("dJl4")},"data-v-0b700b86",null);t.default=l.exports}});
//# sourceMappingURL=4.33319f99af01d3557830.js.map