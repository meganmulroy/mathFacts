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
  height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 2em;
}
#main {
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 15px solid blue;
  border-radius: 35px;
}
.btn {
  height: 40px;
  padding: 15px 40px;
  color: white;
  background-color: blue;
  text-decoration: none;
}
</style>
