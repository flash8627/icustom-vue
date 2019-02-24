import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/system-manager',
      name: 'system-manager',
      component: () => import(/* webpackChunkName: "about" */ './views/SystemManager.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "about" */ './views/Blog.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "about" */ './views/Product.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import(/* webpackChunkName: "about" */ './views/Shopping.vue')
    }
  ],// 路由接口代理配置
  proxyTable: {
    '/api': {
      target: 'http://localhost:8801',
      changeOrigin: true,
      pathRewrite: {
          '^/api': ''
      }
    },
    '/service': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
          '^/service': ''
      }
    }
  }
})
