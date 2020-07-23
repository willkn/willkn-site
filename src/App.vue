<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view />
    <app-contact></app-contact>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Contact from "@/components/Contact";

export default {
  name: "Willkn",
  components: {
    "app-navbar": Navbar,
    "app-contact": Contact
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-family: "Lexend Tera", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-image: url("assets/geo.jpg");
}
</style>
