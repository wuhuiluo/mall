import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('../views/home.vue'),
    children: [{
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/product.vue')
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
router.beforeEach((to, from, next) => {
  function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
      // console.log(arr);
      return unescape(arr[2]);
    }
    return null;
  }
  const data = getCookie('userId')
  let isLogin = data ? true : false
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router