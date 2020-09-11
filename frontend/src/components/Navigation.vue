<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">dj-vue-jwt</span>
    <!-- <router-link class="navbar-brand" :to="{ name: 'profile' }">Todo+</router-link> -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <template>
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

        <li class="nav-item">
          <a class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </nav></template
>

<script>
export default {};
</script>

<style></style>
