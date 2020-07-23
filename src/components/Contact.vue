<template>
  <div class="textContainer">
    <h1 id="contact">CONTACT</h1>
    <p>click an icon to be taken to a contact point</p>
    <ul>
      <div class="contact">
          <li>
            <a href="https://github.com/willkn" target="_blank">
              <img src="@/assets/githubLogo.png" style="height: 60px; width: 120px;" />
            </a>
            <p>willkn</p>
          </li>
      </div>
      <div class="contact">
        <li>
          <a href="mailto:william.knott00@gmail.com">
            <img src="@/assets/email.png" style="height: 60px; width: 60px;" />
          </a>
          <p>william.knott00@gmail.com</p>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.textContainer {
  overflow: scroll;
  background-color: white;
  width: 100%;
  margin: auto;
  margin-top: 130px;
  text-align: center;
  align-content: center;
}

a {
  text-align: center;
}

.contact {
  margin: auto;
}

ul {
  list-style-type: none;
}
</style>