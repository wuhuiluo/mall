import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload' 
import VueCookies from 'vue-cookies'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueCookies)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')