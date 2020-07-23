<template>
  <div>
    <h1 class="title">JUNE</h1>
    <h2>Recordstore</h2>
    <h5>06/06/2020</h5>
    <a href="https://github.com/willkn/recordstore" target="_blank">
      <img src="@/assets/githubLogo.png" style="height: 40px; width=40px;" />
    </a>
    <br />
    <div>
      <img src="@/assets/record.jpg" style="height: 200px; width: 200px;" />
      <pre>
      Recordstore is a simple app that focuses on demonstrating CRUD actions.
      I decided to do this project because I thought it was a good way to begin
      working with a full tech stack, using rails as a backend API alongside SQLite
      with VueJS handling the frontend. Getting them to communicate was a first for me,
      which initally proved challenging as I was new to using Axios. Setting up the
      routes was also difficult but led me to gain a deeper understanding of how
      routing works in Rails.
      <img
  height="400px"
  width="600px"
  src="@/assets/railsSS.jpg"
/>
      These routes are set up as RESTful API to catch the HTTP requests made
      from the frontend, allowing data to be transferred. I used this functionality
      for managing records and users by taking the data from forms using v-model,
      sending them to the backend.
      The interesting thing about this project is that it has JWT based authentication
      for its users. I tried to implement this sans-devise to get a better understanding of
      how it works.</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.title {
  font-size: 80px;
}

pre {
  font-size: 19px;
}
</style>