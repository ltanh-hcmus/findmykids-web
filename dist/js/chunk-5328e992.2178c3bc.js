(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5328e992"],{"73cf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"observer"},[a("b-form",[a("b-container",{staticClass:"mt-5",staticStyle:{"min-height":"800px"}},[a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{"label-cols-sm":"4","label-align-sm":"right"}},[a("h2",{staticClass:"bv-no-focus-ring",attrs:{id:"form-radio-inputs"}},[a("span",{staticClass:"bd-content-title"},[t._v("Đăng ký tài khoản")])])])],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Tên đăng nhập","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Tên đăng nhập"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,n=e.errors;return[a("b-form-input",{attrs:{state:!n[0]&&(!!r||null),maxlength:"250"},model:{value:t.UserName,callback:function(e){t.UserName="string"===typeof e?e.trim():e},expression:"UserName"}}),a("b-form-invalid-feedback",{attrs:{state:!n[0]&&(!!r||null)}},[t._v(t._s(n[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Mật khẩu","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Mật khẩu",vid:"confirm"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,n=e.errors;return[a("b-form-input",{attrs:{type:"password",state:!n[0]&&(!!r||null),maxlength:"250"},model:{value:t.PassWord,callback:function(e){t.PassWord="string"===typeof e?e.trim():e},expression:"PassWord"}}),a("b-form-invalid-feedback",{attrs:{state:!n[0]&&(!!r||null)}},[t._v(t._s(n[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Nhập lại mật khẩu","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required|password:@confirm",name:"Nhập lại mật khẩu"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,n=e.errors;return[a("b-form-input",{attrs:{type:"password",state:!n[0]&&(!!r||null),maxlength:"250"},model:{value:t.RePassWord,callback:function(e){t.RePassWord="string"===typeof e?e.trim():e},expression:"RePassWord"}}),a("b-form-invalid-feedback",{attrs:{state:!n[0]&&(!!r||null)}},[t._v(t._s(n[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Họ tên","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required",name:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,n=e.errors;return[a("b-form-input",{attrs:{state:!n[0]&&(!!r||null),maxlength:"250"},model:{value:t.Name,callback:function(e){t.Name="string"===typeof e?e.trim():e},expression:"Name"}}),a("b-form-invalid-feedback",{attrs:{state:!n[0]&&(!!r||null)}},[t._v(t._s(n[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Email","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("ValidationProvider",{attrs:{rules:"required|email",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,n=e.errors;return[a("b-form-input",{attrs:{state:!n[0]&&(!!r||null),maxlength:"250"},model:{value:t.Email,callback:function(e){t.Email="string"===typeof e?e.trim():e},expression:"Email"}}),a("b-form-invalid-feedback",{attrs:{state:!n[0]&&(!!r||null)}},[t._v(t._s(n[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Captcha","label-cols-sm":"4","label-align-sm":"right",description:"Bắt buộc nhập!"}},[a("b-form-group",[a("vue-recaptcha",{ref:"recaptcha",attrs:{sitekey:t.siteKey,loadRecaptchaScript:!0},on:{verify:t.onCaptchaVerified,expired:t.onCaptchaExpired}}),a("b-form-invalid-feedback",{attrs:{state:t.isCaptchaChecked}},[t._v("Captcha không được bỏ trống!")])],1)],1)],1)],1),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-cols-sm":"4","label-align-sm":"right","label-for":""}},[a("b-input-group",[a("b-button-group",[a("b-button",{attrs:{variant:"success"},on:{click:t.clientAdd}},[t._v("Đăng ký")]),a("b-button",{attrs:{variant:"light"},on:{click:t.resetForm}},[a("b-icon",{attrs:{icon:"arrow-counterclockwise"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),c=a("7bb1"),l=a("439f"),u=a("e096"),d={data:function(){return{isCaptchaChecked:!0}},components:{ValidationObserver:c["a"],ValidationProvider:c["b"],VueRecaptcha:u["a"]},computed:Object(i["a"])({},Object(o["e"])("register",{siteKey:function(t){return t.siteKey}}),{UserName:{get:function(){return this.$store.state.register.obj.UserName},set:function(t){this.updateObj(["UserName",t])}},PassWord:{get:function(){return this.$store.state.register.obj.PassWord},set:function(t){this.updateObj(["PassWord",t])}},RePassWord:{get:function(){return this.$store.state.register.obj.RePassWord},set:function(t){this.updateObj(["RePassWord",t])}},Email:{get:function(){return this.$store.state.register.obj.Email},set:function(t){this.updateObj(["Email",t])}},Name:{get:function(){return this.$store.state.register.obj.Name},set:function(t){this.updateObj(["Name",t])}}}),methods:Object(i["a"])({onCaptchaVerified:function(t){this.updateCaptchaChecked(!0),this.updateReCaptchaToken(t)},onCaptchaExpired:function(){this.$refs.recaptcha.reset(),this.updateCaptchaChecked(!1),this.updateReCaptchaToken("")}},Object(o["d"])("loading",["updateIsLoading"]),{},Object(o["b"])("register",["add"]),{},Object(o["d"])("register",["updateObj"]),{},Object(o["d"])("register",["updateReCaptchaToken","updateCaptchaChecked"]),{},Object(o["c"])("register",["isCaptcha"]),{clientAdd:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.observer.validate();case 2:if(a=e.sent,t.isCaptchaChecked=t.isCaptcha(),a&&t.isCaptchaChecked){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,e.next=9,Object(l["a"])(t.$bvModal,"đăng ký");case 9:if(!e.sent){e.next=15;break}return t.updateIsLoading(!0),e.next=13,t.add();case 13:r=e.sent,r&&201==r.status&&(t.$bvToast.toast("Đăng ký thành công!",{title:"Thông báo!",variant:"success",autoHideDelay:100}),t.newForm());case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e["catch"](6),new e.t0;case 20:return e.prev=20,t.updateIsLoading(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[6,17,20,23]])})))()},resetForm:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])(t.$bvModal,"làm mới");case 2:if(!e.sent){e.next=4;break}t.newForm();case 4:case"end":return e.stop()}}),e)})))()},newForm:function(){var t=this;this.updateObj(["UserName",null]),this.updateObj(["PassWord",null]),this.updateObj(["RePassWord",null]),this.updateObj(["Email",null]),this.updateObj(["Name",null]),requestAnimationFrame((function(){t.$refs.observer.reset()})),this.isCaptchaChecked=!0,this.$refs.recaptcha.reset()}}),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.updateIsLoading(!0),t.newForm(),t.updateIsLoading(!1);case 3:case"end":return e.stop()}}),e)})))()}},p=d,h=a("2877"),f=Object(h["a"])(p,r,n,!1,null,null,null);e["default"]=f.exports},e096:function(t,e,a){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},r.apply(this,arguments)}var n=function(){var t=!1,e=[],a=function(a){if(!t){t=!0;for(var r=0,n=e.length;r<n;r++)e[r](a)}},r=function(a){t?a():e.push(a)},n={resolved:function(){return t},resolve:a,promise:{then:r}};return n},s=Object.prototype.hasOwnProperty;function i(){var t=n();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(t,e,a){this.wait().then((function(){a(window.grecaptcha.render(t,e))}))},reset:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(t)})))},execute:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(t)})))},checkRecaptchaLoad:function(){s.call(window,"grecaptcha")&&s.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var o=i();"undefined"!==typeof window&&(window.vueRecaptchaApiLoaded=o.notify);var c={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;o.checkRecaptchaLoad();var e=r({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots["default"]?this.$el.children[0]:this.$el;o.render(a,e,(function(e){t.$widgetId=e,t.$emit("render",e)}))},methods:{reset:function(){o.reset(this.$widgetId)},execute:function(){o.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots["default"])}};e["a"]=c}}]);
//# sourceMappingURL=chunk-5328e992.2178c3bc.js.map