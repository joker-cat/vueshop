webpackJsonp([6],{"0qNM":function(t,e){},"5K5a":function(t,e,s){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"buttons d-flex justify-content-center mb-4"},[e("router-link",{staticClass:"btn btn-secondary btn-lg m-2",attrs:{to:"/menu/selling",tag:"button","active-class":"active",tabindex:"-1",role:"button","aria-disabled":"true"}},[this._v("熱銷商品")]),this._v(" "),e("router-link",{staticClass:"btn btn-secondary btn-lg m-2",attrs:{to:"/menu/limitedtime",tag:"button",tabindex:"-1",role:"button","aria-disabled":"true"}},[this._v("期間限定")])],1)},staticRenderFns:[]};var a=s("VU/8")({name:"Buttons",data:function(){return{}}},n,!1,function(t){s("aMlI")},null,null);e.a=a.exports},"75l9":function(t,e){t.exports={_from:"axios@^0.21.1",_id:"axios@0.21.2",_inBundle:!1,_integrity:"sha512-87otirqUw3e8CzHTMO+/9kh/FSgXt/eVDvipijwDtEuwbkySWZ9SBm6VEubmJ/kLKEoLQV/POhxXFb66bfekfg==",_location:"/axios",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"axios@^0.21.1",name:"axios",escapedName:"axios",rawSpec:"^0.21.1",saveSpec:null,fetchSpec:"^0.21.1"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/axios/-/axios-0.21.2.tgz",_shasum:"21297d5084b2aeeb422f5d38e7be4fbb82239017",_spec:"axios@^0.21.1",_where:"C:\\Users\\User\\Desktop\\kebu\\vuexdemo",author:{name:"Matt Zabriskie"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},bugs:{url:"https://github.com/axios/axios/issues"},bundleDependencies:!1,bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}],dependencies:{"follow-redirects":"^1.14.0"},deprecated:!1,description:"Promise based HTTP client for the browser and node.js",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},homepage:"https://axios-http.com",jsdelivr:"dist/axios.min.js",keywords:["xhr","http","ajax","promise","node"],license:"MIT",main:"index.js",name:"axios",repository:{type:"git",url:"git+https://github.com/axios/axios.git"},scripts:{build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},typings:"./index.d.ts",unpkg:"dist/axios.min.js",version:"0.21.2"}},"7dfm":function(t,e){},"7rAU":function(t,e){},"9M+g":function(t,e){},GF1B:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=(s("Jmt5"),s("9M+g"),s("C/JF")),o=s("fhbW");a.c.add(o.b,o.a);var r={name:"hellovuex",data:function(){return{}},computed:{getshopcarlength:function(){return this.$store.getters.getshopcarlength}},methods:{shopdom:function(){console.log(1);var t=document.querySelector(".shop");t.classList.add("ani"),setTimeout(function(){t.classList.remove("ani")},550)},finishdom:function(){console.log(2);var t=document.querySelector(".shoplist");t.classList.add("ani"),setTimeout(function(){t.classList.remove("ani")},550)}},watch:{getshopcarlength:function(){this.shopdom()}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-light"},[s("div",{staticClass:"container pl-4 pr-4"},[s("div",[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/sweet"}},[t._v("美味甜品")]),t._v(" "),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/menu"}},[t._v("飲品清單")])],1),t._v(" "),s("div",[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/shop"}},[s("span",[t._v("購物車")]),t._v(" "),s("font-awesome-icon",{staticClass:"shop",attrs:{icon:["fas","shopping-cart"]}})],1),t._v(" "),s("span",{staticClass:"mr-2"},[t._v(t._s(t.getshopcarlength))])],1)])])},staticRenderFns:[]};var c=s("VU/8")(r,i,!1,function(t){s("0qNM")},null,null).exports,l=s("5K5a"),u=s("pt6B"),d={name:"Containergrid",data:function(){return{}},components:{Buttons:l.a,Shop:u.default}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"containergrid container"},[e("div",{staticClass:"row ps-5"},[e("div",{staticClass:"col p-3"},[e("router-view")],1)])])},staticRenderFns:[]};var p={name:"App",data:function(){return{}},created:function(){this.$store.dispatch("getMenuJson").then(function(){console.log("Menu Loading Success")})},mounted:function(){},components:{Navbar:c,Containergrid:s("VU/8")(d,m,!1,function(t){s("S8Oi")},null,null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("Containergrid")],1)},staticRenderFns:[]};var v=s("VU/8")(p,h,!1,function(t){s("7dfm")},null,null).exports,f=s("/ocq");n.default.use(f.a);var g=[{path:"/",redirect:"/sweet"},{path:"/sweet",component:function(){return s.e(1).then(s.bind(null,"nUxO"))}},{path:"/shop",component:function(){return new Promise(function(t){t()}).then(s.bind(null,"pt6B"))}},{path:"/menu",component:function(){return Promise.all([s.e(0),s.e(2)]).then(s.bind(null,"zIkb"))},children:[{path:"/",redirect:"selling"},{path:"selling",component:function(){return Promise.all([s.e(0),s.e(4)]).then(s.bind(null,"j6Wv"))},meta:{title:"熱銷商品"}},{path:"limitedtime",component:function(){return Promise.all([s.e(0),s.e(3)]).then(s.bind(null,"epIS"))},meta:{title:"期間限定"}}]}],_=new f.a({routes:g,mode:"history",linkActiveClass:"active"}),b=s("NYxO"),x=s("mtWM"),k=s.n(x),C=s("DWlv"),w=s.n(C);n.default.use(w.a,k.a);var j={getMenuJson(t){k.a.get("/static/demo.json").then(e=>{console.log(e.data),t.commit("inState",e.data)})}},y={getshopcar(t){if(0==t.shopcar.length)return 0},getshopcarlength:t=>t.shopcar.length>0?t.shopcar.length:0,getfinishlength:t=>t.finish.length>0?t.finish.length:0};var N={inState(t,e){t.menudata=e},pushshopcar(t,e){console.log(e),t.shopcar.push(e)},del(t,e){console.log(e),t.shopcar.splice(e,1)},checkout(t){t.finish.push(t.shopcar),t.shopcar=[]}};n.default.use(b.a);var S=new b.a.Store({state:{menudata:{},shopcar:[],finish:[]},mutations:N,actions:j,getters:y,modules:{}}),F=s("Tqaz"),M=s("1e6/");s("K3J8");n.default.component("font-awesome-icon",M.a),n.default.config.productionTip=!1,n.default.use(w.a,k.a),n.default.use(F.a),new n.default({el:"#app",router:_,store:S,components:{App:v},template:"<App/>"})},S8Oi:function(t,e){},aMlI:function(t,e){},pt6B:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"From",data:function(){return{finalcheck:!1,username:"",userphone:"",useraddress:"",get:"自取"}},methods:{checkout:function(){alert("訂購成功，即將返回"),this.$router.push("/")}},computed:{btnctl:function(){if("請填寫地址"!=this.get)return"自取"==this.get&&(this.useraddress="請填寫地址"),0==this.finalcheck||""==this.username||""==this.userphone||""==this.useraddress||""==this.get}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-4 col-form-label text-left",attrs:{for:"text1"}},[t._v("姓名：")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{id:"text1",name:"text1",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-4 col-form-label text-left",attrs:{for:"text"}},[t._v("電話：")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userphone,expression:"userphone"}],staticClass:"form-control",attrs:{id:"text",name:"text",type:"text"},domProps:{value:t.userphone},on:{input:function(e){e.target.composing||(t.userphone=e.target.value)}}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"外送"==t.get,expression:"get == '外送'"}],staticClass:"form-group row"},[s("label",{staticClass:"col-4 col-form-label text-left",attrs:{for:"text2"}},[t._v("地址：")]),t._v(" "),s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.useraddress,expression:"useraddress"}],staticClass:"form-control",attrs:{id:"text2",name:"text2",type:"text"},domProps:{value:t.useraddress},on:{input:function(e){e.target.composing||(t.useraddress=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row mb-4"},[s("label",{staticClass:"col-4 text-left"},[t._v("取物：")]),t._v(" "),s("div",{staticClass:"col-8"},[s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.get,expression:"get"}],staticClass:"custom-control-input",attrs:{name:"radio",id:"radio_0",type:"radio",value:"自取",checked:"get"},domProps:{checked:t._q(t.get,"自取")},on:{change:function(e){t.get="自取"}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"radio_0"}},[t._v("來店自取")])]),t._v(" "),s("div",{staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.get,expression:"get"}],staticClass:"custom-control-input",attrs:{name:"radio",id:"radio_1",type:"radio",value:"外送"},domProps:{checked:t._q(t.get,"外送")},on:{change:function(e){t.get="外送"}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"radio_1"}},[t._v("外送")])])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-4"}),t._v(" "),s("div",{staticClass:"col-8 text-center"},[s("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.finalcheck,expression:"finalcheck"}],staticClass:"custom-control-input",attrs:{name:"checkbox",id:"checkbox_0",type:"checkbox",value:"rabbit"},domProps:{checked:Array.isArray(t.finalcheck)?t._i(t.finalcheck,"rabbit")>-1:t.finalcheck},on:{change:function(e){var s=t.finalcheck,n=e.target,a=!!n.checked;if(Array.isArray(s)){var o=t._i(s,"rabbit");n.checked?o<0&&(t.finalcheck=s.concat(["rabbit"])):o>-1&&(t.finalcheck=s.slice(0,o).concat(s.slice(o+1)))}else t.finalcheck=a}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"checkbox_0"}},[t._v("本人已確定訂購人資訊及商品詳細。")])])])]),t._v(" "),s("div",{staticClass:"text-right pr-5 frombtn"},[s("button",{staticClass:"btn btn-danger",attrs:{disabled:t.btnctl},on:{click:t.checkout}},[t._v("結帳")])])])},staticRenderFns:[]};var o=s("VU/8")(n,a,!1,function(t){s("GF1B")},null,null).exports,r=s("C/JF"),i=s("fhbW");r.c.add(i.c);var c={name:"Shop",data:function(){return{}},computed:{shopjson:function(){return this.$store.state.shopcar},shopjsonlength:function(){return this.shopjson.length},totalprice:function(){return this.shopjson.map(function(t){return t.price}).reduce(function(t,e){return t+e},0)},totalcount:function(){return this.shopjson.map(function(t){return t.count}).reduce(function(t,e){return t+e},0)}},methods:{del:function(t){this.$store.commit("del",t)}},components:{From:o}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"maxset"},[s("div",{staticClass:"overflowtable mb-3"},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",[t._l(t.shopjson,function(e,n){return s("tr",{key:n},[s("th",{attrs:{scope:"row"}},[t._v(t._s(n+1))]),t._v(" "),s("td",[t._v(t._s(e.name)+"("+t._s(e.size)+")")]),t._v(" "),s("td",[t._v(t._s(e.sweet+e.ice))]),t._v(" "),s("td",[t._v(t._s(e.count))]),t._v(" "),s("td",[t._v(t._s(e.price))]),t._v(" "),s("td",[s("font-awesome-icon",{attrs:{icon:["fas","trash"]},on:{click:function(e){return t.del(n)}}})],1)])}),t._v(" "),0==t.shopjsonlength?s("tr",[t._m(1)]):t._e()],2)])]),t._v(" "),s("div",{staticClass:"text-white text-right pr-5 mb-5 fontsize"},[s("span",{staticClass:"mr-1"},[t._v("商品數量 "+t._s(t.totalcount)+" / ")]),t._v(" "),s("span",[t._v("總價格 "+t._s(t.totalprice))])]),t._v(" "),t.shopjsonlength>0?s("From",{ref:"user"}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("商品")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("比例")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("數量")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("價格")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("刪除")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-white text-center",attrs:{colspan:"6"}},[e("span",[this._v("購物車為空，趕緊購入!!!")])])}]};var u=s("VU/8")(c,l,!1,function(t){s("7rAU")},null,null);e.default=u.exports}},["NHnr"]);
//# sourceMappingURL=app.473478888801e6734083.js.map