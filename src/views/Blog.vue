<template>
  <div class="textContainer">
    <div @click.prevent="setJune"></div>
    <!-- Replace with better method for picking month -->
    <july-blog></july-blog>
    <june-blog></june-blog>
    <!-- Put July here when ready, use v-if to make months sortable -->
  </div>
</template>

<script>
import June from "@/components/june";
import July from "@/components/july";

export default {
  components: {
    "june-blog": June,
    "july-blog": July,
  },
  data() {},
  methods: {},
};
</script>

<style scoped>
#background {
  width: 100%;
  display: block;
}

.textContainer {
  overflow: scroll;
  background-color: white;
  width: 100%;
  margin-top: 130px;
  margin-bottom: 500px;
  text-align: center;
  border: 5px solid black;
}

.title {
  margin-bottom: 100px;
}
</style>