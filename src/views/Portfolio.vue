<template>
  <div class="textContainer">
    <div class="row">
      <div class="column">
        <div class="card">
          <!-- <img src="img2.jpg" alt="Project2" style="width:100%" /> -->
          <div class="container">
            <h1>Rick and Morty API</h1>
            <img src="@/assets/rnmPortal.png" style="margin-top: -40px; margin-bottom: -40px;"/>
            <p>Search for your favourite Rick and Morty characters by name, species or gender.</p>
            <p class="more">
              <router-link to="/blog" v-scroll-to="'#recordstore'">More</router-link>
            </p>
            <a href="https://github.com/willkn/thewaythenewsgoes" target="_blank">
              <img src="@/assets/githubLogo.png" class="github" />
            </a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <!-- <img src alt="Project1" style="width:100%" /> -->
          <div class="container">
            <h1>Exercise tracker</h1>
            <img src="@/assets/swoosh.png" />
            <p>Exercise tracking app. Keep track of your workouts!</p>
            <!-- Link to the relevant blog post for the app -->
            <p class="more">
              <router-link to="/blog" v-scroll-to="'#recordstore'">More</router-link>
            </p>
            <a href="https://github.com/willkn" target="_blank">
              <img src="@/assets/githubLogo.png" class="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="column" id="last">
      <div class="card">
        <!-- <img src="img2.jpg" alt="Project2" style="width:100%" /> -->
        <div class="container">
          <h1>Recordstore</h1>
          <img src="@/assets/record.jpg" style="height: 300px; width: 300px;"/>
          <p>Keep all your favourite records in one place.</p>
          <p class="more">
            <router-link to="/blog" v-scroll-to="'#recordstore'">More</router-link>
          </p>
          <a href="https://github.com/willkn/recordstore" target="_blank">
            <img src="@/assets/githubLogo.png" class="github" />
          </a>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#background {
  width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: black;
}

.column {
  border-bottom: 1px solid black;
}

.github {
  height: 50px;
  width: 100px;
}

#last {
  border-bottom: none;
  margin-top: none;
}

.more {
  font-weight: bold;
}
</style>