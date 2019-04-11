<template>

  <div class="hello">
    <navlist/>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in newsdata">
        <p>{{item.title}}</p>
        <img :src="item.img" alt="">
      </li>
    </ul>
    
  </div>
</template>

<script>
import navlist from './navlist'    //注入组件
export default {
  name: 'HelloWorld',
  components:{
    navlist
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newsdata:[]
    }
  },
  created: function ()  {
    console.log("哈哈哈")
    this.$axios("/sxtstu/blueberrypai/getIndexBanner.php",{
      params:{
        type:"junshi",
        count:30
      }
    })
    .then(res =>{
      console.log(res.data)
      this.newsdata = res.data.banner
      //this.msg = data.
    })
    .catch(error =>{
      console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width: 300px;
  height: 300px;
}
</style>
