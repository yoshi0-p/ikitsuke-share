import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Top from "../views/Top.vue";

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
  },
  
  {
    path: "/",
    name: "top",
    component: Top,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;