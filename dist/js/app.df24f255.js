(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"065d":function(t,e,a){t.exports=a.p+"img/download_googleplay.a2654dad.svg"},"38f8":function(t,e,a){"use strict";var n=a("bc8d"),r=a.n(n);r.a},"39ab":function(t,e,a){t.exports=a.p+"img/icon-logo-new-2-en.78b7792f.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("99af"),a("d3b7"),a("25f0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"p-0",attrs:{fluid:""}},[n("b-navbar",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"pcenter shadow-sm bg-white rounded",attrs:{toggleable:"lg",sticky:""}},[n("b-navbar-brand",[n("img",{attrs:{src:a("674e"),width:"43",height:"43",alt:"Find my kids"}}),n("img",{attrs:{src:a("39ab"),width:"128",height:"18",alt:"Find my kids"}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{right:""},on:{click:t.clientLogout}},[t._v(" Đăng nhập ")]),n("b-nav-item",{attrs:{right:""},on:{click:t.clientLogout}},[t._v(" Đăng ký ")])],1)],1)],1),n("router-view"),n("b-jumbotron",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"mt-5 mb-0",staticStyle:{padding:"2rem 2rem","border-radius":"0px"}},[n("h5",{staticStyle:{"text-align":"center"}},[t._v("Find My Kids")]),n("h5",{staticStyle:{"text-align":"center"}},[t._v("© Lê Anh - Huỳnh Hậu - 18HCB")])]),n("loading")],1)},s=[],o=a("5530"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:this.isLoading,"can-cancel":!1,"is-full-page":!1,color:"red"},on:{"update:active":function(e){return t.$set(this,"isLoading",e)}}})],1)},c=[],u=a("9062"),l=a.n(u),d=(a("e40d"),a("2f62")),b={components:{Loading:l.a},computed:Object(o["a"])({},Object(d["d"])("loading",{isLoading:function(t){return t.isLoading}}))},g=b,p=a("2877"),m=Object(p["a"])(g,i,c,!1,null,"8ee30eaa",null),f=m.exports,h={data:function(){return{breadcrumb_items:[{text:"Trang chủ",href:"#"}]}},computed:Object(o["a"])({},Object(d["d"])("auth",{isLogin:function(t){return t.isLogin}})),components:{Loading:f},methods:Object(o["a"])({},Object(d["b"])("auth",["logout"]),{clientLogout:function(){this.logout(),this.$router.push("/login")}})},v=h,x=(a("38f8"),a("ff32"),Object(p["a"])(v,r,s,!1,null,"0f238562",null)),w=x.exports,k=a("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"pcenter m-0 mt-5"},[n("b-card",{staticClass:"overflow-hidden border-0 rounded-0",attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("b-card-img",{staticClass:"rounded",attrs:{src:a("e94f")}})],1),n("b-col",{attrs:{md:"6"}},[n("b-card-body",{attrs:{title:"Nhận thông báo về những nơi đã đến thăm của trẻ"}},[n("b-card-text",[t._v(" Nhận thông báo khi trẻ về nhà, đến trường hoặc đến nơi nào đó. Đừng lo lắng về bé và đừng làm phiền trẻ bằng các cuộc gọi thường xuyên ")])],1)],1)],1)],1)],1),n("b-row",{staticClass:"pcenter m-0 mt-5"},[n("b-card",{staticClass:"overflow-hidden border-0 rounded-0",attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("b-card-body",{attrs:{title:"Theo dõi lịch di chuyển của trẻ"}},[n("b-card-text",[t._v("Xem lịch sử chính xác của các hoạt động trong ngày để biết trẻ đi những đâu")])],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-card-img",{staticClass:"rounded",attrs:{src:a("dfcd")}})],1)],1)],1)],1),n("b-row",{staticClass:"m-0 mt-5"},[n("h1",{staticClass:"react-reveal-1 mx-auto",staticStyle:{"text-align":"center"}},[t._v("Cách bắt đầu sử dụng ứng dụng")])]),n("b-row",{staticClass:"m-0"},[n("h2",{staticClass:"react-reveal-2 mx-auto",staticStyle:{"text-align":"center"}},[t._v("Bạn sẽ chỉ cần 3-5 phút, điện thoại của trẻ em")])]),n("b-card-group",{staticClass:"pcenter m-0 mt-5",attrs:{deck:""}},[n("b-card",{staticClass:"border-0 rounded-0",attrs:{align:"center"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("bf14"),width:"350px",height:"350px"}}),n("b-card-text",[t._v("Tải xuống ứng dụng trên điện thoại của bạn")])],1),n("b-card",{staticClass:"border-0 rounded-0",attrs:{align:"center"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("72f2"),width:"350px",height:"350px"}}),n("b-card-text",[t._v("Tải xuống ứng dụng «Trò chuyện với cha mẹ» trên App Store hoặc Google Play trên điện thoại của con bạn")])],1),n("b-card",{staticClass:"border-0 rounded-0",attrs:{align:"center"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("6215"),width:"350px",height:"350px"}}),n("b-card-text",[t._v("Xác nhận quyền truy cập vào thiết bị của con bạn và sử dụng tất cả các tính năng của dịch vụ")])],1)],1),n("b-row",{staticClass:"m-0 mt-5"},[n("h1",{staticClass:"react-reveal-1 mx-auto",staticStyle:{"text-align":"center"}},[t._v("Hàng triệu phụ huynh đã sử dụng «Find My Kids»")])]),n("b-row",{staticClass:"m-0"},[n("h2",{staticClass:"react-reveal-2 mx-auto",staticStyle:{"text-align":"center"}},[t._v("Tải xuống ứng dụng miễn phí cho con bạn")])]),n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("065d"),width:"200px",height:"64px"}})],1)},j=[],O={},_=O,C=(a("cccb"),Object(p["a"])(_,y,j,!1,null,null,null)),T=C.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"observer"},[a("b-form",[a("b-container",{staticClass:"mt-5",staticStyle:{"min-height":"800px"}},[a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{"label-cols-sm":"4","label-align-sm":"right"}},[a("h2",{staticClass:"bv-no-focus-ring",attrs:{id:"form-radio-inputs"}},[a("span",{staticClass:"bd-content-title"},[t._v("Đăng ký tài khoản")])])])],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Tên đăng nhập","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Tên đăng nhập"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.valid,r=e.errors;return[a("b-form-input",{attrs:{state:!r[0]&&(!!n||null),maxlength:"250"},model:{value:t.UserName,callback:function(e){t.UserName="string"===typeof e?e.trim():e},expression:"UserName"}}),a("b-form-invalid-feedback",{attrs:{state:!r[0]&&(!!n||null)}},[t._v(t._s(r[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Mật khẩu","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Mật khẩu"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.valid,r=e.errors;return[a("b-form-input",{attrs:{type:"password",state:!r[0]&&(!!n||null),maxlength:"250"},model:{value:t.PassWord,callback:function(e){t.PassWord="string"===typeof e?e.trim():e},expression:"PassWord"}}),a("b-form-invalid-feedback",{attrs:{state:!r[0]&&(!!n||null)}},[t._v(t._s(r[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Nhập lại mật khẩu","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Nhập lại mật khẩu"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.valid,r=e.errors;return[a("b-form-input",{attrs:{type:"password",state:!r[0]&&(!!n||null),maxlength:"250"},model:{value:t.RePassWord,callback:function(e){t.RePassWord="string"===typeof e?e.trim():e},expression:"RePassWord"}}),a("b-form-invalid-feedback",{attrs:{state:!r[0]&&(!!n||null)}},[t._v(t._s(r[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Họ tên","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.valid,r=e.errors;return[a("b-form-input",{attrs:{state:!r[0]&&(!!n||null),maxlength:"250"},model:{value:t.Name,callback:function(e){t.Name="string"===typeof e?e.trim():e},expression:"Name"}}),a("b-form-invalid-feedback",{attrs:{state:!r[0]&&(!!n||null)}},[t._v(t._s(r[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Email","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.valid,r=e.errors;return[a("b-form-input",{attrs:{state:!r[0]&&(!!n||null),maxlength:"250"},model:{value:t.Email,callback:function(e){t.Email="string"===typeof e?e.trim():e},expression:"Email"}}),a("b-form-invalid-feedback",{attrs:{state:!r[0]&&(!!n||null)}},[t._v(t._s(r[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-cols-sm":"4","label-align-sm":"right","label-for":""}},[a("b-input-group",[a("b-button-group",[a("b-button",{attrs:{variant:"success"},on:{click:t.clientAdd}},[t._v("Đăng ký")]),a("b-button",{attrs:{variant:"light"},on:{click:t.resetForm}},[a("b-icon",{attrs:{icon:"arrow-counterclockwise"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},P=[],S=(a("96cf"),a("1da1")),N=a("7bb1");function R(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Bạn có muốn ".concat(e,"?");return a&&(n=e),t.msgBoxConfirm(n,{title:"Xác nhận!",okVariant:"primary",okTitle:"Đồng ý",cancelTitle:"Đóng"})}var $={data:function(){return{filter:null}},components:{ValidationObserver:N["a"],ValidationProvider:N["b"]},computed:{UserName:{get:function(){return this.$store.state.register.obj.UserName},set:function(t){this.updateObj(["UserName",t])}},PassWord:{get:function(){return this.$store.state.register.obj.PassWord},set:function(t){this.updateObj(["PassWord",t])}},RePassWord:{get:function(){return this.$store.state.register.obj.RePassWord},set:function(t){this.updateObj(["RePassWord",t])}},Email:{get:function(){return this.$store.state.register.obj.Email},set:function(t){this.updateObj(["Email",t])}},Name:{get:function(){return this.$store.state.register.obj.Name},set:function(t){this.updateObj(["Name",t])}}},methods:Object(o["a"])({},Object(d["c"])("loading",["updateIsLoading"]),{},Object(d["b"])("register",["add"]),{},Object(d["c"])("register",["updateObj"]),{clientAdd:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.observer.validate();case 2:if(a=e.sent,a){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,R(t.$bvModal,"đăng ký");case 8:if(!e.sent){e.next=14;break}return t.updateIsLoading(!0),e.next=12,t.add();case 12:n=e.sent,n&&200==n.status&&t.$bvToast.toast("Đăng ký thành công!",{title:"Thông báo!",variant:"success",autoHideDelay:100});case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e["catch"](5),new e.t0;case 19:return e.prev=19,t.updateIsLoading(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[5,16,19,22]])})))()},resetForm:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R(t.$bvModal,"làm mới");case 2:if(!e.sent){e.next=4;break}t.newForm();case 4:case"end":return e.stop()}}),e)})))()},newForm:function(){var t=this;this.updateObj(["UserName",""]),this.updateObj(["PassWord",""]),this.updateObj(["RePassWord",""]),this.updateObj(["Email",""]),requestAnimationFrame((function(){t.$refs.observer.reset()})),this.updateIsLoading(!1)}}),mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateIsLoading(!0),t.newForm(),t.updateIsLoading(!1);case 3:case"end":return e.stop()}}),e)})))()}},I=$,W=Object(p["a"])(I,L,P,!1,null,null,null),E=W.exports;n["default"].use(k["a"]);var M=[{path:"/",name:"Home",component:T},{path:"/register",name:"Register",component:E}],F=new k["a"]({routes:M}),H=F,q=(a("b680"),a("bc3a")),A=a.n(q),U="http://localhost:5000",V=U+"auth",B=U+"/Members",J=a("04e1"),K={siteKey:"6LfrwNEUAAAAAJHcipukpxMxlsSKrlotSv37V_I1",isLogin:!0,user:{username:"123",password:"123",recaptchaToken:""},captchaChecked:!1},D={},X={login:function(t,e){return Object(S["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.recaptchaToken=t.state.recaptchaToken,a.next=3,A.a.post("".concat(V,"/login"),Object(o["a"])({},e));case 3:return n=a.sent,n.data.authenticated&&(A.a.defaults.headers["x-access-token"]=n.data.accessToken,localStorage.setItem("user-token",JSON.stringify(n.data)),t.commit("updateIsLogin",!0)),a.abrupt("return",n.data.authenticated);case 6:case"end":return a.stop()}}),a)})))()},logout:function(t){return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.removeItem("user-token"),t.commit("updateIsLogin",!1);case 2:case"end":return e.stop()}}),e)})))()},reNewToken:function(t){var e=t.state;return Object(S["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isLogin){t.next=9;break}if(a=JSON.parse(localStorage.getItem("user-token").refreshToken),!(J(a.accessToken).exp-240<=(Date.now()/1e3).toFixed(0))){t.next=9;break}return t.next=5,A.a.post("".concat(V,"/renew-token"),Object(o["a"])({},a.refreshToken));case 5:n=t.sent,a.accessToken=n.data.accessToken,localStorage.setItem("user-token",JSON.stringify(a)),A.a.defaults.headers["x-access-token"]=a.accessToken;case 9:case"end":return t.stop()}}),t)})))()}},G={updateUser:function(t,e){t.user=e},updateReCaptchaToken:function(t,e){t.recaptchaToken=e},updateCaptchaChecked:function(t,e){t.captchaChecked=e},updateIsLogin:function(t,e){t.isLogin=e}},z={namespaced:!0,state:K,getters:D,actions:X,mutations:G},Q={isLoading:!1},Y={},Z={},tt={updateIsLoading:function(t,e){t.isLoading=e}},et={namespaced:!0,state:Q,getters:Y,actions:Z,mutations:tt},at=a("ade3"),nt={obj:{ID:"6bc678de-5c10-11ea-bc55-0242ac130003",UserName:"",PassWord:"",RePassWord:"",Email:"",Name:""}},rt={},st={add:function(t){return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(B,Object(o["a"])({},t.state.obj));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},ot={updateObj:function(t,e){Object.assign(t.obj,Object(at["a"])({},e[0],e[1]))}},it={namespaced:!0,state:nt,getters:rt,actions:st,mutations:ot};n["default"].use(d["a"]);var ct=new d["a"].Store({state:{},mutations:{},actions:{},modules:{auth:z,loading:et,register:it}}),ut=a("5f5b"),lt=a("b1e0"),dt=a("104d");a("ab8b"),a("2dd8");n["default"].use(ut["a"]),n["default"].use(lt["a"]),n["default"].use(dt["a"]);var bt=a("4c93");Object(N["c"])("required",Object(o["a"])({},bt["a"],{message:"{_field_} bắt buộc nhập!"})),n["default"].config.productionTip=!1,n["default"].config.errorHandler=function(t,e,a){console.log("Error: ".concat(t.toString(),"\nInfo: ").concat(a))},n["default"].config.warnHandler=function(t,e,a){console.log("Warn: ".concat(t,"\nTrace: ").concat(a))},A.a.defaults.timeout=5e3,A.a.interceptors.response.use((function(t){return t}),(function(t){var e=new n["default"];return e.$bvToast.toast(JSON.parse(t.response.request.response)[0].msg,{title:"Thông báo lỗi!",variant:"danger"}),t})),A.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),n["default"].config.errorHandler=function(t,e,a){e.$bvToast.toast("Đã có lỗi sảy ra!",{title:"Thông báo lỗi!",variant:"danger"}),console.log(t,e,a)},new n["default"]({router:H,store:ct,render:function(t){return t(w)}}).$mount("#app")},"5ced":function(t,e,a){},6215:function(t,e,a){t.exports=a.p+"img/step_chat_watch.b835b366.svg"},"674e":function(t,e,a){t.exports=a.p+"img/icon-logo-new.416d63b5.svg"},"72f2":function(t,e,a){t.exports=a.p+"img/step_start.0557a66a.svg"},a28a:function(t,e,a){},bc8d:function(t,e,a){},bf14:function(t,e,a){t.exports=a.p+"img/step_download.5713a92b.svg"},cccb:function(t,e,a){"use strict";var n=a("5ced"),r=a.n(n);r.a},dfcd:function(t,e,a){t.exports=a.p+"img/opportunity_2.1689f1f7.webp"},e94f:function(t,e,a){t.exports=a.p+"img/opportunity_1.c93db0c9.webp"},ff32:function(t,e,a){"use strict";var n=a("a28a"),r=a.n(n);r.a}});
//# sourceMappingURL=app.df24f255.js.map