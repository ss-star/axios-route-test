<template>
    <div style="padding-left:30%">
        <div class="left">
            <ul>
               <li> <router-link  to="/iwen/demolist">音乐</router-link></li>
               <li><router-link to="/iwen/demoindex">舞蹈</router-link></li>
               <li><router-link :to="{name:'canshu', params:{count:100,type:obj} }">比赛</router-link></li>
               <li><router-link :to="{path:'/canshu', query:{count:100} }">url传参</router-link></li>
           </ul>
        </div>
      <div class="right">
          <router-view></router-view>
      </div>
    </div>
</template>
<script>
import qs from "qs";
export default {
  name: "qingqiu",
  data() {
    return {
        obj:{
            name:'iwen'
        }
    };
  },
  // created() {
  //   this.$axios
  //     .post(
  //       "/sxtstu/blueberrypai/login.php",
  //       qs.stringify({
  //         user_id: "iwen@qq.com",
  //         password: "iwen123",
  //         verification_code: "crfvw"
  //       })
  //     )
  //     .then(res => {
  //       console.log("请求结果数据" + res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
};
</script>
<style scoped>

ul {
  list-style: none;
  /* margin-left: 30%; */
}
ul li {
  margin: 0 20px;
}
.left, .right{
    float: left;
}
.right{
    margin: 30px 30px;
}
</style>
