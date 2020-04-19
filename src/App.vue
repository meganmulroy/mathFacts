<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-size: 2em;
}
#main {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 10px solid blue;
  height: 100vh;
}
.btn {
  height: 40px;
  padding: 15px 40px;
  color: white;
  background-color: blue;
  text-decoration: none;
}
</style>
