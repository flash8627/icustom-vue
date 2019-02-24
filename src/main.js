import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import bootstrap from 'bootstrap/dist/js/bootstrap.js';


var axios = require('axios')
//服务请求路径
//cloud test:axios.defaults.baseURL = 'http://localhost:8801'
axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$axios = axios

import './registerServiceWorker'

import './assets/jquery/themes/icon.css'
import './assets/css/app.css'

//引入公用common/common.js 
import Comjs from './common/common'
//添加到vue属性中
Vue.prototype.$comjs = Comjs
//this.$comjs.title('你点我了');

Vue.config.productionTip = false
//Vue.config.baseUrl = "";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
