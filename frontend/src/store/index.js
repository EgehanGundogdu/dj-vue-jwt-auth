import Vue from "vue";
import Vuex from "vuex";
import userService from "../services/user-service";

Vue.use(Vuex);

const initialUser = () => {
  let token = localStorage.getItem("accessToken");
  if (token)
    return { loggedIn: true, username: "", role: "", accessToken: token };
  else return { loggedIn: false, username: "", role: "", accessToken: null };
};

export default new Vuex.Store({
  state: {
    user: initialUser(),
  },
  getters: {
    isLoggedIn: (state) => state.user.loggedIn,
    userData: (state) => state.user,
  },
  mutations: {
    loginSuccessfull(state, token) {
      state.user.loggedIn = true;
      state.user.accessToken = token;
      localStorage.setItem("accessToken", token);
    },
    logout(state) {
      (state.user.loggedIn = false), localStorage.removeItem("accessToken");
    },
    setUserData(state, userInfo) {
      (state.user.role = userInfo.group),
        (state.user.username = userInfo.username);
    },
  },
  actions: {
    loginRequest(context, credentials) {
      return userService
        .login(credentials)
        .then((res) => {
          context.commit("loginSuccessfull", res.data.access);
          return Promise.resolve(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    registerRequest(context, payload) {
      return userService
        .register(payload)
        .then((res) => {
          return Promise.resolve(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    getUserData(context) {
      return userService
        .userDetail()
        .then((res) => {
          context.commit("setUserData", res.data);
          return Promise.resolve(res.data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    logoutRequest(context) {
      return new Promise((resolve) => {
        context.commit("logout");
        resolve();
      });
    },
  },
});
