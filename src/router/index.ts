import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/views/index.vue');
const Test1 = () => import('@/views/test1/app.vue');
const Test2 = () => import('@/views/test2/app.vue');
const Test3 = () => import('@/views/test3/app.vue');

Vue.use(Router);

export default new Router({
  mode:  'hash',
  routes: [
    {
      path: '/',
	    name: 'Index',
	    component: Index,
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
    }
  ]
});


