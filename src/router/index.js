import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { title: 'イキツケSHARE　使い方',desc: '「お店を紹介したい人」と「新しくお店を開拓したい人」をつなげるwebサービスです。'}
  },
 {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: 'イキツケSHARE', desc: '「お店を紹介したい人」と「新しくお店を開拓したい人」をつなげるwebサービスです。' }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;