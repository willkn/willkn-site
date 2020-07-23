<template>
  <div class="home">
    <div class="header">
      <router-link to="/">
        <div class="name">willkn</div>
      </router-link>
      <div class="menu">
        <router-link to="/skills" class="link">
          skills
          <div class="bar"></div>
        </router-link>
        <router-link to="/blog" class="link">
          blog
          <div class="bar"></div>
        </router-link>
        <router-link to="/portfolio" class="link">
          portfolio
          <div class="bar"></div>
        </router-link>
        <a href="#contact" class="link">
          contact
          <div class="bar"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap");

html,
body {
  font-family: "Dosis";
  font-weight: 300;
}

.header {
  width: 100%;
  border-bottom: 5px solid black;
  text-align: right;
  position: fixed;
  top: 0;
  font-family: "Lexend Tera", sans-serif;
  background: white;
}

.name {
  position: absolute;
  font-size: 32px;
  font-weight: 100;
  padding: 14px;
  border: 5px solid black;
  text-decoration: none;
  color: black;
  margin-left: 15px;
  margin-top: 5px;
}

.link {
  display: inline-block;
  padding: 15px 10px;
  margin: 15px 25px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: #0f0f0f;
  font-weight: 800;
  font-size: 24px;
  border-right: 5px solid black;
}

.bar {
  width: 100%;
  display: inline-block;
  border-bottom: 5px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 300ms;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
