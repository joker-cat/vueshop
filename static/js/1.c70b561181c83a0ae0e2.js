webpackJsonp([1],{R1Oy:function(t,a){},ehzg:function(t,a){},nUxO:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"Sweetmodal",data:function(){return{count:1}},props:{gettomodal:{Type:Object,default:function(){return{id:0,name:"蛋糕",mark:"測試",size:10}}}},methods:{joinshop:function(){this.$store.commit("pushshopcar",{name:this.objinfo.name,size:"一般",ice:"---",sweet:"---",count:this.count,price:this.totalprice})},clearchoose:function(){this.count=1}},computed:{objinfo:function(){return this.gettomodal},boola:function(){return this.count<=1},boolb:function(){return this.count>=5},totalprice:function(){return this.count*this.objinfo.size},joinbtnctl:function(){},shopjsonlength:function(){return this.$store.state.shopcar.length}},watch:{}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.objinfo.name))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"imgsize"},[s("img",{attrs:{src:"../../static/cakeimg/"+t.objinfo.id+".jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"fontsize"},[s("p",[t._v(t._s(t.objinfo.mark))])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("span",{staticClass:"mr-3"},[t._v("售價："+t._s(t.objinfo.size))]),t._v(" "),s("span",[t._v("數量：")]),t._v(" "),s("div",{staticClass:"mr-3",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:t.boola},on:{click:function(a){t.count--}}},[t._v("\n            -\n          ")]),t._v(" "),s("button",{staticClass:"btn text-dark",attrs:{type:"button",disabled:""}},[t._v("\n            "+t._s(t.count)+"\n          ")]),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:t.boolb},on:{click:function(a){t.count++}}},[t._v("\n            +\n          ")])]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.joinshop}},[t._v("\n          加入購物車\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var i=s("VU/8")(e,n,!1,function(t){s("ehzg")},"data-v-6ef63f0c",null).exports,o=(s("5K5a"),{name:"Menulist",data:function(){return{userclick:{}}},computed:{getMenu:function(){return this.$store.state.menudata.sweet}},methods:{getId:function(t){this.userclick=t,this.$refs.clear.clearchoose()}},components:{Sweetmodal:i}}),c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"maxset"},[t._l(t.getMenu,function(a){return s("div",{key:a.id,staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{"data-toggle":"modal","data-target":"#exampleModal",src:"./static/cakeimg/"+a.id+".jpg"},on:{click:function(s){return t.getId(a)}}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(a.mark))]),t._v(" "),s("p",{staticClass:"card-size"},[t._v("售價："+t._s(a.size))])])])}),t._v(" "),s("Sweetmodal",{ref:"clear",attrs:{gettomodal:t.userclick}})],2)},staticRenderFns:[]};var r=s("VU/8")(o,c,!1,function(t){s("R1Oy")},"data-v-0b92d365",null);a.default=r.exports}});
//# sourceMappingURL=1.c70b561181c83a0ae0e2.js.map