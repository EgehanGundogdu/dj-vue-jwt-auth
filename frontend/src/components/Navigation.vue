<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">dj-vue-jwt</span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link
              active-class="active"
              tag="a"
              class="nav-link"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              tag="a"
              class="nav-link"
              :to="{ name: 'register' }"
              >Register</router-link
            >
          </li></template
        >

        <li v-else class="nav-item">
          <a @click="logout()" class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </nav></template
>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logoutRequest"]),
    logout() {
      this.logoutRequest().then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style></style>
