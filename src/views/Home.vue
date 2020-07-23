<template>
  <div>
    <div class="textContainer" id="intro">
      <h1>Hi, I'm Will</h1>
      <h3>
        <i>Aspiring web dev primarily working with rails and vue.js</i>
      </h3>
    </div>
    <div class="textContainer" style="margin-top: 100px;">
      <h1>About me</h1>
      <p>I'm a 16 year old web dev based in Doncaster, England. I've always enjoyed coding</p>
      <p>and definitely see myself pursuing it as a career, I particularly enjoy web dev as</p>
      <p>I enjoy being creative, and I find designing websites to be an excellent creative outlet.</p>
      <p>I am self taught and have no previous job experience, but I make up for that with ~5</p>
      <p>years experience of building passion projects due to my genuine interest in the subject. </p>
      <p>I have a wide knowledge of the field due to this, as I have explored anything that sparks</p>
      <p>my intrigue - whether that be scripting with python or database management with SQL.</p>
    </div>
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

#intro {
  height: 200px
}

.textContainer {
  overflow: scroll;
  background-color: white;
  width: 100%;
  margin: auto;
  margin-top: 130px;
  margin-bottom: 100px;
  text-align: center;
}
#about {
  margin-top: 10px;
}

p {
  padding: 2px;
}
</style>