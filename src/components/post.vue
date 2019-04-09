<template>
    <div>
pokfgkgjg
    </div>
</template>
<script>
import qs from 'qs'
export default {
    name:"qingqiu",
    data(){
        return{

        }
    },
    created(){
        this.$axios.post("/sxtstu/blueberrypai/login.php",qs.stringify({
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code:"crfvw"
        })).then(res => {
            console.log("请求结果数据"+res.data)
        }).catch(error =>{
            console.log(error)
        })
    }
}
</script>
<style>

</style>
