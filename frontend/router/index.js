import VueRouter from "vue-router";
import Vue from "vue";
import Profile from "@/views/Profile";
import Login from "@/views/Login";
import Register from "@/views/Register";
Vue.use(VueRouter);
const routes = [
  {
    path: "",
    component: Profile,
    name: "profile",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/register",
    component: Register,
    name: "register",
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
