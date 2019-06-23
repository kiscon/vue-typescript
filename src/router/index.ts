// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import Router from 'vue-router'
Vue.use(Router)

const Login = () => import('@/views/login/index.vue')
const TsUse = () => import('@/views/ts-use/index.vue')
const AmapPage = () => import('@/views/amap-page/index.vue')

export default new Router({
  mode:  'hash',
  routes: [
    {
      path: '/',
	    name: 'Login',
	    component: Login,
    },
    {
      path: '/ts-use',
      name: 'TsUse',
      component: TsUse
    },
    {
      path: '/amap-page',
      name: 'AmapPage',
      component: AmapPage
    }
  ]
})


