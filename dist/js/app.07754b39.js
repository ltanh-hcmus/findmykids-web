(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],u=0,b=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b2739":"a0d6e776","chunk-2d0ba51d":"1a003737","chunk-2d0be29f":"36355bdb","chunk-2d0dd0c8":"906d9bed","chunk-2d0e1f9c":"4fc163bb","chunk-5328e992":"d4469173","chunk-cab976c0":"8449023a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(e);var l=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"065d":function(e,t,a){e.exports=a.p+"img/download_googleplay.a2654dad.svg"},"38f8":function(e,t,a){"use strict";var n=a("bc8d"),r=a.n(n);r.a},"39ab":function(e,t,a){e.exports=a.p+"img/icon-logo-new-2-en.78b7792f.svg"},"439f":function(e,t,a){"use strict";function n(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Bạn có muốn ".concat(t,"?");return a&&(n=t),e.msgBoxConfirm(n,{title:"Xác nhận!",okVariant:"primary",okTitle:"Đồng ý",cancelTitle:"Đóng"})}a.d(t,"a",(function(){return n}))},"56d7":function(e,t,a){"use strict";a.r(t);a("d3b7"),a("96cf");var n=a("1da1"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"p-0",attrs:{fluid:""}},[n("b-navbar",{staticClass:"pcenter shadow-sm bg-white rounded",attrs:{toggleable:"lg",sticky:""}},[n("b-navbar-brand",[n("b-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("674e"),width:"43",height:"43",alt:"Find my kids"}}),n("img",{attrs:{src:a("39ab"),width:"128",height:"18",alt:"Find my kids"}})])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],staticClass:"ml-auto"},[n("b-nav-item",{attrs:{right:""},on:{click:e.clientLogin}},[e._v("Đăng nhập")]),n("b-nav-item",{attrs:{right:""},on:{click:e.clientRegister}},[e._v("Đăng ký")])],1),n("b-navbar-nav",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}],staticClass:"ml-auto"},[n("b-nav-item",{attrs:{right:""}},[e._v("Xin chào, "+e._s(this.getName()))]),n("b-nav-item",{attrs:{right:""},on:{click:e.clientLogout}},[n("b-icon",{attrs:{icon:"power"}}),e._v("Đăng xuất ")],1)],1)],1)],1),n("router-view"),n("b-jumbotron",{staticClass:"mt-5 mb-0",staticStyle:{padding:"2rem 2rem","border-radius":"0px"}},[n("h5",{staticStyle:{"text-align":"center"}},[e._v("Find My Kids")]),n("h5",{staticStyle:{"text-align":"center"}},[e._v("© Lê Anh - Huỳnh Hậu - 18HCB")])]),n("loading")],1)},i=[],c=(a("b0c0"),a("5530")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loading",{attrs:{active:this.isLoading,"can-cancel":!1,"is-full-page":!1,color:"red"},on:{"update:active":function(t){return e.$set(this,"isLoading",t)}}})],1)},l=[],u=a("9062"),d=a.n(u),b=(a("e40d"),a("2f62")),p={components:{Loading:d.a},computed:Object(c["a"])({},Object(b["e"])("loading",{isLoading:function(e){return e.isLoading}}))},m=p,g=a("2877"),h=Object(g["a"])(m,o,l,!1,null,"8ee30eaa",null),f=h.exports,v={data:function(){return{breadcrumb_items:[{text:"Trang chủ",href:"#"}]}},computed:Object(c["a"])({},Object(b["e"])("auth",{isLogin:function(e){return e.isLogin},name:function(e){return e.Name}})),components:{Loading:f},methods:Object(c["a"])({},Object(b["b"])("auth",["logout"]),{},Object(b["c"])("auth",["getName"]),{clientLogout:function(){this.logout(),this.$router.push("/").catch((function(e){if("NavigationDuplicated"!=e.name)throw e}))},clientRegister:function(){this.$router.push("/register").catch((function(e){if("NavigationDuplicated"!=e.name)throw e}))},clientLogin:function(){this.$router.push("/login").catch((function(e){if("NavigationDuplicated"!=e.name)throw e}))}})},k=v,w=(a("38f8"),a("a2e6"),Object(g["a"])(k,s,i,!1,null,"60115c5b",null)),y=w.exports,x=a("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"pcenter m-0 mt-5"},[n("b-card",{staticClass:"overflow-hidden border-0 rounded-0",attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("b-card-img",{staticClass:"rounded",attrs:{src:a("e94f")}})],1),n("b-col",{attrs:{md:"6"}},[n("b-card-body",{attrs:{title:"Nhận thông báo về những nơi đã đến thăm của trẻ"}},[n("b-card-text",[e._v(" Nhận thông báo khi trẻ về nhà, đến trường hoặc đến nơi nào đó. Đừng lo lắng về bé và đừng làm phiền trẻ bằng các cuộc gọi thường xuyên ")])],1)],1)],1)],1)],1),n("b-row",{staticClass:"pcenter m-0 mt-5"},[n("b-card",{staticClass:"overflow-hidden border-0 rounded-0",attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("b-card-body",{attrs:{title:"Theo dõi lịch di chuyển của trẻ"}},[n("b-card-text",[e._v("Xem lịch sử chính xác của các hoạt động trong ngày để biết trẻ đi những đâu")])],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-card-img",{staticClass:"rounded",attrs:{src:a("dfcd")}})],1)],1)],1)],1),n("b-row",{staticClass:"m-0 mt-5"},[n("h1",{staticClass:"react-reveal-1 mx-auto",staticStyle:{"text-align":"center"}},[e._v("Cách bắt đầu sử dụng ứng dụng")])]),n("b-row",{staticClass:"m-0"},[n("h2",{staticClass:"react-reveal-2 mx-auto",staticStyle:{"text-align":"center"}},[e._v("Bạn sẽ chỉ cần 3-5 phút, điện thoại của trẻ em")])]),n("b-card-group",{staticClass:"pcenter m-0 mt-5",attrs:{deck:""}},[n("b-card",{staticClass:"border-0 rounded-0",attrs:{align:"center"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("bf14"),width:"350px",height:"350px"}}),n("b-card-text",[e._v("Tải xuống ứng dụng trên điện thoại của bạn")])],1),n("b-card",{staticClass:"border-0 rounded-0",attrs:{align:"center"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("72f2"),width:"350px",height:"350px"}}),n("b-card-text",[e._v("Tải xuống ứng dụng «Trò chuyện với cha mẹ» trên App Store hoặc Google Play trên điện thoại của con bạn")])],1),n("b-card",{staticClass:"border-0 rounded-0",attrs:{align:"center"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("6215"),width:"350px",height:"350px"}}),n("b-card-text",[e._v("Xác nhận quyền truy cập vào thiết bị của con bạn và sử dụng tất cả các tính năng của dịch vụ")])],1)],1),n("b-row",{staticClass:"m-0 mt-5"},[n("h1",{staticClass:"react-reveal-1 mx-auto",staticStyle:{"text-align":"center"}},[e._v("Hàng triệu phụ huynh đã sử dụng «Find My Kids»")])]),n("b-row",{staticClass:"m-0"},[n("h2",{staticClass:"react-reveal-2 mx-auto",staticStyle:{"text-align":"center"}},[e._v("Tải xuống ứng dụng miễn phí cho con bạn")])]),n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("065d"),width:"200px",height:"64px"}})],1)},j=[],O={},_=O,T=(a("cccb"),Object(g["a"])(_,C,j,!1,null,null,null)),N=T.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"observer"},[a("b-container",{staticClass:"mt-3",attrs:{fluid:""}},[a("h1",{staticClass:"bv-no-focus-ring",attrs:{tabindex:"-1"}},[a("span",{staticClass:"bd-content-title"},[e._v("Quản lý người đăng ký và giấy phép dịch vụ")])]),a("div",[a("b-alert",{attrs:{show:"",variant:"success"}},[a("h4",{staticClass:"alert-heading"},[e._v("Thống kê")]),a("b-list-group",[a("b-list-group-item",[e._v("Tổng số người đăng ký: 1000 người.")]),a("b-list-group-item",[e._v("Tổng số người được theo dõi (trẻ em): 2050 người.")]),a("b-list-group-item",[e._v("Tổng số người đang sử dụng dịch vụ: 901 người.")])],1)],1)],1),a("b-alert",{attrs:{show:"",variant:"light"}},[a("div",{staticStyle:{"min-height":"800px"}},[a("b-row",{staticClass:"mt-4"}),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Tên đăng nhập","label-cols-sm":"3","label-align-sm":"right","label-for":"filterInput"}},[a("b-form-input",{attrs:{maxlength:"250",type:"search",id:"userName"},model:{value:e.UserName,callback:function(t){e.UserName="string"===typeof t?t.trim():t},expression:"UserName"}})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Họ tên","label-cols-sm":"3","label-align-sm":"right","label-for":"filterInput"}},[a("b-form-input",{attrs:{maxlength:"250",type:"search",id:"filterInput"},model:{value:e.FullName,callback:function(t){e.FullName="string"===typeof t?t.trim():t},expression:"FullName"}})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Email","label-cols-sm":"3","label-align-sm":"right","label-for":"filterInput",outlined:!1,borderless:!0,"head-variant":"dark",responsive:"sm"}},[a("b-form-input",{attrs:{maxlength:"250",type:"search",id:"filterInput"},model:{value:e.Email,callback:function(t){e.Email="string"===typeof t?t.trim():t},expression:"Email"}})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Ngày lập từ","label-cols-sm":"3","label-align-sm":"right","label-for":"filterInput",outlined:!1,borderless:!0,"head-variant":"dark",responsive:"sm"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker"},model:{value:e.value33,callback:function(t){e.value33=t},expression:"value33"}})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Ngày lập đến","label-cols-sm":"3","label-align-sm":"right","label-for":"filterInput",outlined:!1,borderless:!0,"head-variant":"dark",responsive:"sm"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker33"},model:{value:e.value33,callback:function(t){e.value33=t},expression:"value33"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Trạng thái giấy phép","label-cols-sm":"3","label-align-sm":"right"}},[a("b-input-group",[a("b-form-select",{attrs:{name:"Trạng thái giấy phép",options:e.licenses},model:{value:e.license,callback:function(t){e.license="string"===typeof t?t.trim():t},expression:"license"}})],1)],1)],1)],1),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{attrs:{"label-cols-sm":"3"}},[a("b-input-group",[a("b-button-group",[a("b-button",{attrs:{variant:"success"},on:{click:e.submitForm}},[e._v("Tìm kiếm")]),a("b-button",{attrs:{variant:"light"},on:{click:e.resetForm}},[a("b-icon",{attrs:{icon:"arrow-counterclockwise"}})],1)],1)],1)],1)],1)],1),a("b-alert",{attrs:{show:"",variant:"danger"}},[a("p",{staticClass:"mb-0"},[e._v(" Số lượng kết quả tìm kiếm "),a("span",{staticClass:"alert-link"},[e._v("10")]),e._v(" dòng. ")])]),a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("b-table",{attrs:{borderless:!0,"current-page":e.currentPage,fields:e.fields,filter:e.filter,items:e.items,outlined:!1,"per-page":e.perPage,striped:!0,"head-variant":"dark",responsive:"sm",selectable:"","selected-variant":"warning","select-mode":"single",hover:""},scopedSlots:e._u([{key:"cell(state)",fn:function(t){return[a("b-form-checkbox",{attrs:{"button-variant":"warning",switch:"",size:"lg"},model:{value:t.state,callback:function(a){e.$set(t,"state",a)},expression:"row.state"}})]}},{key:"cell(plans)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary"},on:{click:t.toggleDetails}},[e._v(e._s(t.detailsShowing?"Ẩn":"Hiện")+" chi tiết")])]}},{key:"row-details",fn:function(t){return[a("div",{staticClass:"alert alert-light"},[a("p",{staticClass:"mb-2"},[a("span",{staticClass:"alert-link"},[e._v("Danh sách trẻ")])]),a("b-table",{attrs:{borderless:!0,fields:e.fieldsChidren,items:t.item.children,outlined:!1,"per-page":e.perPage,striped:!0,"head-variant":"dark",responsive:"sm",selectable:"","selected-variant":"warning","select-mode":"single",hover:""}})],1),a("div",{staticClass:"alert alert-light"},[a("p",{staticClass:"mb-2"},[a("span",{staticClass:"alert-link"},[e._v("Giấy phép sử dụng dịch vụ")]),e._v(" (Ngày hết hạn: "),a("span",{staticClass:"alert-link"},[e._v(e._s(t.item.duedate))]),e._v(" ) ")]),a("b-table",{attrs:{borderless:!0,fields:e.fieldsDetail,items:t.item.plans,outlined:!1,"per-page":e.perPage,striped:!0,"head-variant":"dark",responsive:"sm",selectable:"","selected-variant":"warning","select-mode":"single",hover:""}})],1),a("b-form-group",[a("b-input-group",[a("b-button-group",[a("b-button",{attrs:{variant:"success"},on:{click:e.submitForm}},[e._v("Xác thực Mã subcriber")]),a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.toggleDetails}},[e._v("Ẩn chi tiết")]),a("b-button",{attrs:{variant:"light"},on:{click:e.resetForm}},[a("b-icon",{attrs:{icon:"arrow-counterclockwise"}})],1)],1)],1)],1)]}}])})],1)],1),a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("b-pagination",{directives:[{name:"show",rawName:"v-show",value:e.hasData,expression:"hasData"}],attrs:{"total-rows":e.totalRows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)])],1)],1)},P=[],L=a("439f"),R=a("7bb1"),F={components:{ValidationObserver:R["a"]},data:function(){return{filter:null,checked1:!0,fieldsDetail:[{key:"id",label:"Mã subcriber",sortable:!0},{key:"name",label:"Giấy phép",sortable:!0},{key:"status",label:"Trạng thái",sortable:!0},{key:"price",label:"Giá",sortable:!0},{key:"description",label:"Mô tả",sortable:!0},{key:"create_time",label:"Ngày tạo",sortable:!0}],fieldsChidren:[{key:"id",label:"Mã trẻ",sortable:!0},{key:"name",label:"Tên trẻ",sortable:!0}],licenses:[{text:"Không sử dụng",value:1},{text:"Có sử dụng và còn hạn",value:0},{text:"Có sử dụng và hết hạn",value:0}]}},computed:Object(c["a"])({},Object(b["e"])("service",{fields:function(e){return e.fields},items:function(e){return e.items},hasData:function(e){return e.hasData},filterOn:function(e){return e.filterOn},totalRows:function(e){return e.totalRows},perPage:function(e){return e.perPage},currentPageTemp:function(e){return e.currentPage},selectMode:function(e){return e.selectMode},selected:function(e){return e.selected},selectedvariant:function(e){return e.selectedvariant}}),{UserName:{get:function(){return this.$store.state.service.service.UserName},set:function(e){this.updateService(["UserName",e])}},FullName:{get:function(){return this.$store.state.service.service.FullName},set:function(e){this.updateService(["FullName",e])}},Email:{get:function(){return this.$store.state.service.service.Email},set:function(e){this.updateService(["Email",e])}},currentPage:{get:function(){return this.currentPageTemp},set:function(e){this.updateCurrentPage(e)}}}),methods:Object(c["a"])({},Object(b["d"])("loading",["updateIsLoading"]),{},Object(b["d"])("service",["updateService","updateCurrentPage"]),{},Object(b["b"])("service",["getListServiceRegister"]),{resetForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(L["a"])(e.$bvModal,"làm mới");case 2:if(!t.sent){t.next=4;break}e.newForm();case 4:case"end":return t.stop()}}),t)})))()},newForm:function(){var e=this;this.updateService(["UserName",""]),this.updateService(["FullName",""]),this.updateService(["Email",""]),requestAnimationFrame((function(){e.$refs.observer.reset()}))},submitForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""==e.UserName&&""==e.FullName&&e.Email;case 1:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.updateIsLoading(!0),t.next=3,e.getListServiceRegister();case 3:e.updateIsLoading(!1);case 4:case"end":return t.stop()}}),t)})))()}},A=F,I=Object(g["a"])(A,S,P,!1,null,"cdc85f80",null),E=I.exports;r["default"].use(x["a"]);var $=[{path:"/",name:"Home",component:N},{path:"/login",name:"Login",component:function(){return a.e("chunk-cab976c0").then(a.bind(null,"83c9"))}},{path:"/register",name:"Register",component:function(){return a.e("chunk-5328e992").then(a.bind(null,"73cf"))}},{path:"/service",name:"Service",component:E},{path:"/qr",name:"QR",component:function(){return a.e("chunk-2d0ba51d").then(a.bind(null,"3769"))}},{path:"/payment",name:"Payment",component:function(){return a.e("chunk-2d0dd0c8").then(a.bind(null,"8071"))}},{path:"/payment/onemoth",name:"PaymentOneMoth",component:function(){return a.e("chunk-2d0be29f").then(a.bind(null,"2ea7"))}},{path:"/payment/oneyear",name:"PaymentForOne Yer",component:function(){return a.e("chunk-2d0b2739").then(a.bind(null,"23bd"))}},{path:"/payment/threemonth",name:"PaymentForforever",component:function(){return a.e("chunk-2d0e1f9c").then(a.bind(null,"7d70"))}}],M=new x["a"]({routes:$}),D=M,U=(a("99af"),a("b680"),a("ade3")),H=a("bc3a"),q=a.n(H),J="http://54.169.14.7:5000",K=J+"/members",z=J+"/MembersManager/manager/members",B=a("04e1"),X={obj:{UserName:"",PassWord:"",recaptchaToken:""},captchaChecked:!1,siteKey:"6Lco3dQUAAAAAKaK0-lubZia99rc2AEgE_3_a6As",isLogin:localStorage.getItem("user-token"),Name:""},G={isCaptcha:function(e){return e.captchaChecked},getName:function(e){if(e.isLogin)return JSON.parse(localStorage.getItem("user-token")).name}},V={login:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(c["a"])({},e.state.obj),n=a.recaptchaToken,delete a.recaptchaToken,t.next=5,q.a.post("".concat(K,"/login"),Object(c["a"])({},a),{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",recaptchaToken:n}});case 5:return r=t.sent,r.data.authenticated&&(q.a.defaults.headers["Authorization"]="Bearer "+r.data.accessToken,localStorage.setItem("user-token",JSON.stringify(r.data)),e.commit("updateIsLogin",!0),e.commit("updateName",r.data.name)),t.abrupt("return",r.data.authenticated);case 8:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:X.isLogin&&(localStorage.removeItem("user-token"),e.commit("updateIsLogin",!1));case 1:case"end":return t.stop()}}),t)})))()},reNewToken:function(e){var t=e.state;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLogin){e.next=7;break}if(a=JSON.parse(localStorage.getItem("user-token").refreshToken),!(B(a.accessToken).exp-240<=(Date.now()/1e3).toFixed(0))){e.next=7;break}return e.next=5,q.a.post("".concat(K,"/").concat(a.id,"/renew-token/").concat(a.refreshToken));case 5:n=e.sent,n.data.authenticated&&(a.accessToken=n.data.accessToken,localStorage.setItem("user-token",JSON.stringify(a)),q.a.defaults.headers["Authorization"]="Bearer "+a.accessToken);case 7:case"end":return e.stop()}}),e)})))()}},W={updateName:function(e,t){e.Name=t},updateIsLogin:function(e,t){e.isLogin=t},updateObj:function(e,t){Object.assign(e.obj,Object(U["a"])({},t[0],t[1]))},updateReCaptchaToken:function(e,t){e.obj.recaptchaToken=t},updateCaptchaChecked:function(e,t){e.captchaChecked=t}},Q={namespaced:!0,state:X,getters:G,actions:V,mutations:W},Z={isLoading:!1},Y={},ee={},te={updateIsLoading:function(e,t){e.isLoading=t}},ae={namespaced:!0,state:Z,getters:Y,actions:ee,mutations:te},ne={obj:{ID:"",UserName:"",PassWord:"",RePassWord:"",Email:"",Name:"",recaptchaToken:""},captchaChecked:!1,siteKey:"6LfrwNEUAAAAAJHcipukpxMxlsSKrlotSv37V_I1"},re={isCaptcha:function(e){return e.captchaChecked}},se={add:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(c["a"])({},e.state.obj),n=a.recaptchaToken,delete a.recaptchaToken,delete a.RePassWord,t.next=6,q.a.post(void 0,Object(c["a"])({},a),{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",recaptchaToken:n}});case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))()}},ie={updateObj:function(e,t){Object.assign(e.obj,Object(U["a"])({},t[0],t[1]))},updateReCaptchaToken:function(e,t){e.obj.recaptchaToken=t},updateCaptchaChecked:function(e,t){e.captchaChecked=t}},ce={namespaced:!0,state:ne,getters:re,actions:se,mutations:ie},oe=a("2909"),le={fields:[{key:"userName",label:"Tên đăng nhập",sortable:!0},{key:"name",label:"Họ tên",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"date",label:"Ngày lập",sortable:!0},{key:"state",label:"Trạng thái",sortable:!0},{key:"plans",label:"Chi tiết",sortable:!0}],items:[],selectedvariant:"warning",hasData:!0,totalRows:1,perPage:10,service:{UserName:"",FullName:"",Email:"",Page:1}},ue={getListServiceRegister:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.a.get(z);case 2:a=t.sent,e.commit("updateItems",a.data);case 4:case"end":return t.stop()}}),t)})))()},filterService:function(e,t,a){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.a.post.apply(q.a,[z].concat(Object(oe["a"])(t),[a]));case 2:case"end":return e.stop()}}),e)})))()}},de={},be={updateService:function(e,t){Object.assign(e.service,Object(U["a"])({},t[0],t[1]))},updateItems:function(e,t){e.items=t,e.totalRows=t.length},updateCurrentPage:function(e,t){e.currentPage=t}},pe={namespaced:!0,state:le,getters:de,actions:ue,mutations:be},me=a("5cec"),ge=a.n(me);r["default"].use(b["a"]);var he=new b["a"].Store({state:{},mutations:{},actions:{},modules:{auth:Q,loading:ae,register:ce,service:pe,token:ge.a}}),fe=a("5f5b"),ve=a("b1e0"),ke=a("104d");a("ab8b"),a("2dd8");r["default"].use(fe["a"]),r["default"].use(ve["a"]),r["default"].use(ke["a"]);var we=a("4c93");Object(R["c"])("required",Object(c["a"])({},we["a"],{message:"{_field_} bắt buộc nhập!"})),Object(R["c"])("password",{params:["target"],validate:function(e,t){var a=t.target;return e===a},message:"Mật khẩu không trùng khớp!"}),Object(R["c"])("email",(function(e){var t=/^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;return!!t.test(e)||"Email không hợp lệ!"})),r["default"].config.productionTip=!1,q.a.defaults.timeout=5e3,q.a.interceptors.response.use((function(e){return e}),function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(401===t.response.status){e.next=4;break}return a=new r["default"],a.$bvToast.toast(JSON.parse(t.response.request.response)[0].msg,{title:"Thông báo lỗi!",variant:"danger"}),e.abrupt("return",new Promise((function(e,a){a(t)})));case 4:return e.next=6,this.$store.dispatch("auth/reNewToken");case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),q.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].config.errorHandler=function(e,t){return t.$bvToast.toast("Đã có lỗi xảy ra!",{title:"Thông báo lỗi!",variant:"danger"}),Promise.reject(e)},new r["default"]({router:D,store:he,render:function(e){return e(y)}}).$mount("#app")},"5cec":function(e,t){},"5ced":function(e,t,a){},6215:function(e,t,a){e.exports=a.p+"img/step_chat_watch.b835b366.svg"},"674e":function(e,t,a){e.exports=a.p+"img/icon-logo-new.416d63b5.svg"},"72f2":function(e,t,a){e.exports=a.p+"img/step_start.0557a66a.svg"},a2e6:function(e,t,a){"use strict";var n=a("ea56"),r=a.n(n);r.a},bc8d:function(e,t,a){},bf14:function(e,t,a){e.exports=a.p+"img/step_download.5713a92b.svg"},cccb:function(e,t,a){"use strict";var n=a("5ced"),r=a.n(n);r.a},dfcd:function(e,t,a){e.exports=a.p+"img/opportunity_2.1689f1f7.webp"},e94f:function(e,t,a){e.exports=a.p+"img/opportunity_1.c93db0c9.webp"},ea56:function(e,t,a){}});
//# sourceMappingURL=app.07754b39.js.map