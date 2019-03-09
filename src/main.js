import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var axios = require('axios')
//请求路径
axios.defaults.baseURL = 'http://localhost:8801'
Vue.prototype.$axios = axios

/**
 import './assets/bootstrap-4.1.3-dist/css/bootstrap.min.css'  
import './assets/bootstrap-4.1.3-dist/js/bootstrap.min'  
import bootstrap from './bootstrap'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min' */

import './registerServiceWorker'
//import element form './element'

Vue.config.productionTip = false
//Vue.config.baseUrl = "";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
