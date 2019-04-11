<template>
    <div>
        <navlist/>
        才能对接会被封号吧
         <qingqiu />       
    </div>
</template>
<script>
import qingqiu from './post' 
import navlist from './navlist'    //注入组件
export default {
    name:"iwen",
    components:{
    qingqiu,
    navlist
  },
    data(){
        return{

        }
    }
} 
</script>
<style>

</style>

