import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

// 导入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/* 请求基础值 */
axios.defaults.baseURL = '/mi/'
axios.defaults.timeout = 15000
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true


/* 请求拦截 */
axios.interceptors.request.use(req => {
    NProgress.start();
    req.headers.Authorization = window.sessionStorage.getItem('token');
    req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (req.method === 'post' || req.method === 'put') {
      req.data = qs.stringify({
        ...req.data
      })
    }
    return req;
  })
  
  /* 响应错误拦截 */
  axios.interceptors.response.use(response => {
    NProgress.done();
    let { meta, data } = response.data;
    if (meta.status !== 200) {
      if (meta.status === 403) {
        if (location.hash != '#/index') {
          window.location.href = '/#/login'
        }
      } else {
        Vue.prototype.$message.error(meta.msg)
        return new Promise(() => { })
        // return Promise.reject(meta);
      }
    }
    return data;
  }, (err) => {
    NProgress.done();
    Vue.prototype.$message.error("快滚！快滚！快滚！服务器内部错误，你无法解决！")
    return new Promise(() => { })
    // return Promise.reject(err);
  })

  // 获取导航栏数据
  export function getNavItem() {
      return axios.get('navItem')
  }

  // 获取首页分类列表
  export function getCateList() {
    return axios.get('leftCategory')
  }