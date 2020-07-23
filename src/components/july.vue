<template>
  <div>
    <h1 class="title">JULY</h1>
    <h2>Dijsktra's algorithm</h2>
    <h5>06/06/2020</h5>
    <a href="https://github.com/willkn/recordstore" target="_blank">
      <img src="@/assets/githubLogo.png" style="height: 40px; width=40px;" />
    </a>
    <br />
    <div>
      <img src="@/assets/pythonLogo.jpg" style="height: 200px; width: 200px;" />
      <pre>
            Dijsktra's algorithm is a pathfinding algorithm that is used for finding the
            shortest possible path from one node to the next. A graph is constructed of 
            nodes which is made decipherable through a adjacency matrix. The nodes are
            called "vertices" and are connected through "edges", the shortest path from
            one the two most distant vertices is called the diameter of the graph.

        </pre>
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