import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue"),
    
  },
  {
    path: "/home",
    name: "home",
    component: ()=>import("../views/HomeView.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: () =>
      import("../views/VideoView.vue"),
  },
  {
    path: "/type",
    name: "type",
    component: () =>
      import("../views/TypeView.vue"),
    beforeEnter(to, from, next) {
      let path = to.path;
      if (to.name == 'type') {
        let token = localStorage.getItem("token")
        if (!token) {
          next({ name: "login" ,params: { id: path }})
        } 
        if (token) {
          next()
        }
      } 
    }
  },
  {
    path: "/talk",
    name: "talk",
    component:()=>import("../views/TalkView.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/MyView.vue"),
    beforeEnter(to, from, next) {
      let path = to.path;
      if (to.name == 'my') {
        let token = localStorage.getItem("token")
        if (!token) {
          next({name:"login",params: { id: path }})
        }
        if(token){
          next()
        }
      }
    }
  },
];

const router = new VueRouter({
  routes,
});
export default router;
