<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <navigation></navigation>
      </div>
    </div>
    <div v-if="error.status" class="row mt-5">
      <div class="col d-flex justify-content-center">
        <div class="alert alert-danger">
          {{ error.message }}
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col d-flex justify-content-center">
        <form @submit.prevent>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              v-model="credentials.username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="credentials.password"
            />
          </div>

          <button
            @click="login()"
            type="submit"
            class="btn btn-primary btn-block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      error: {
        status: false,
        message: "",
      },
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      let payload = { ...this.credentials };
      try {
        await this.$store.dispatch("loginRequest", payload);
        this.$router.push({ name: "profile" });
      } catch (err) {
        this.error.status = true;
        this.error.message =
          err.response.data ||
          err.response.detail ||
          "Unable to login with given credentials";
      }
    },
  },
};
</script>

<style></style>
