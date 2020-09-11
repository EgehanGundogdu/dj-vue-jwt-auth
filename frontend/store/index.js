import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "",
      role: "",
      accessToken: localStorage.getItem("token") || null,
    },
  },
  //   mutations: {
  //     setToken(state, token) {},
  //     removeToken(state) {},
  //     setUserData(state, userInfo) {},
  //   },
  //   actions: {
  //     loginRequest(context, credentials) {},
  //     getUserData(context) {},
  //   },
});
