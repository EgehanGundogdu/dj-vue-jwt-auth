<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <navigation></navigation>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <div class="jumbotron jumbotron">
          <div class="container">
            <h1 class="display-5">Hi {{ userData.username }}!</h1>
            <p class="lead mt-5">Your system group > {{ userData.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Navigation,
  },
  methods: {
    ...mapActions(["getUserData"]),
  },
  created() {
    this.getUserData().catch(() => {});
  },
  computed: {
    ...mapGetters(["userData"]),
  },
};
</script>

<style></style>
