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
          <div class="form-group">
            <label for="password2">Password repeat</label>
            <input
              type="password"
              class="form-control"
              id="password2"
              placeholder="Password repeat"
              v-model="credentials.password2"
            />
          </div>
          <button
            @click="register()"
            type="submit"
            class="btn btn-primary btn-block"
          >
            Register
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
      credentials: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
      error: {
        status: false,
        message: "",
      },
    };
  },
  methods: {
    async register() {
      let payload = { ...this.credentials };
      try {
        await this.$store.dispatch("registerRequest", payload);
      } catch (error) {
        this.error.status = true;
        this.error.message =
          error.response.data ||
          error.response.detail ||
          "Something went wrong!";
      }
    },
  },
};
</script>

<style></style>
