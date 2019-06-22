// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import Router from 'vue-router'

const Index = () => import('@/views/index.vue')
const Test1 = () => import('@/views/test1/index.vue')
const Test2 = () => import('@/views/test2/index.vue')
const Test3 = () => import('@/views/test3/index.vue')
const Login = () => import('@/views/login/index.vue')
const amapMap = () => import('@/views/amap-map/index.vue')

Vue.use(Router)

export default new Router({
  mode:  'hash',
  routes: [
    {
      path: '/',
	    name: 'Login',
	    component: Login,
    },
	  {
	  	path: '/test1',
		  name: 'Test1',
		  component: Test1
	  },
	  {
		  path: '/test2',
		  name: 'Test2',
		  component: Test2
	  },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/amap-map',
      name: 'amapMap',
      component: amapMap
    }
  ]
})


