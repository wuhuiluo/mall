import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('../views/home.vue'),
    children: [
       {
         path: '/index',
         name: 'index',
         component: () => import('../views/index.vue')
       }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
