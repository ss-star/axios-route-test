<template>
  <div id="app">
    <img src="./assets/logo.png">
    <qingqiu />
  </div>
</template>

<script>

import qingqiu from './components/post'

export default {
  name: 'App',
  components:{
    
    qingqiu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
