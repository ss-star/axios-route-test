<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <qingqiu /> -->
    
   
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080808;
  margin-top: 60px;
}
.active{
  background: red;
  color: antiquewhite
}
</style>
