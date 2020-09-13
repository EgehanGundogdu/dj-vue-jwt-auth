import VueRouter from "vue-router";
import Vue from "vue";
import Profile from "@/views/Profile";
import Login from "@/views/Login";
import Register from "@/views/Register";
import store from "../store";

Vue.use(VueRouter);
const routes = [
  {
    path: "",
    component: Profile,
    name: "profile",
    meta: {
      requiresAuth: true,
    },
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

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.user.loggedIn) next({ name: "login" });
    else next();
  }
  next();
});

export default router;
