<template>
    <div>
        <ul>
            <li>
                <router-link exact :to="urldata.helloworld">首页</router-link>
            </li>
            <li>
                <router-link :to="urldata.helloiwen">子页</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'navlist',
    data(){
        return{
            urldata:{
                helloworld:"/",
                helloiwen:'/iwen'
            }
        }
    }
}
</script>
<style scoped>
ul{
    list-style: none;
}
ul li{
    display: inline;
    margin:0 20px;
}
</style>
