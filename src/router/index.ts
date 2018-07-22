import Vue from "vue"
import Router from "vue-router"

import Index from "../views/index.vue"
import Test1 from "../views/test1/app.vue"
import Test2 from "../views/test2/app.vue"

Vue.use(Router);

// const Index = (resolve: any) => import("@/views/index.vue").then((module:any)=>{
//   resolve(module)
// });
// const Test1 = resolve => require(["@/views/test1/app.vue"], resolve);
// const Test2 = resolve => require(["@/views/test2/app.vue"], resolve);

export default new Router({
  mode:  "history",
  routes: [
    {
      path: "/",
	    name: "Index",
	    component: Index,
    },
	  {
	  	path: "/test1",
		  name: "Test1",
		  component: Test1
	  },
	  {
		  path: "/test2",
		  name: "Test2",
		  component: Test2
	  }
  ]
});


