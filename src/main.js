// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'       //全程querystring库提供 将url中的参数转为对象；将对象转为url参数形式的方法

Vue.prototype.$axios = Axios

Axios.defaults.baseURL = 'http://www.wwtliu.com';          //全局域名
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';    //设置herader

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.methods == "post"){
    config.data = qs.stringify(config.data)
  }
  console.log("我是请求前的数据")
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("我是响应的数据")
  console.log(response);
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
