import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import './plugins/bootstrap-vue'
import './plugins/vee-validate'

Vue.config.productionTip = false

// Vue.config.errorHandler = function (err, vm, info) {
//   // console.log(`Error: ${err.toString()}\nInfo: ${info}`);
// }

// Vue.config.warnHandler = function (msg, vm, trace) {
//   // console.log(`Warn: ${msg}\nTrace: ${trace}`);
// }

axios.defaults.timeout = 5000;
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const vm = new Vue()
  vm.$bvToast.toast(JSON.parse(error.response.request.response)[0].msg, {
    title: `Thông báo lỗi!`,
    variant: 'danger',
  })
  return error;
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers['x-access-token'] = store.dispatch("auth/reNewToken");
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.config.errorHandler = function (err, vm, info) {
  vm.$bvToast.toast('Đã có lỗi sảy ra!', {
    title: `Thông báo lỗi!`,
    variant: 'danger',
  });

  return [err, vm, info]
  // console.log(err, vm, info);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')