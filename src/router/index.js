import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'      //@寻找根目录
//import HelloWorld from './components/HelloWorld'      读取路由文件路径
import Iwen from '@/components/HelloWIwen'
import demolist from '@/demo-router/demo1'
import demoindex from '@/demo-router/index'
import canshu from '@/demo-router/canshu'

Vue.use(Router)

export default new Router({
  linkActiveClass :'active',
  //history.back()每次只返回一层
  mode:"history",      //记录所有层
  routes: [
    {
      path:'/',                     //浏览器打开连接路径
      name:'HelloWorld',                     //用于传递数据，没有数据时可以省略
      component:HelloWorld
    },
    {
      path:'/iwen',   
      name:'Iwen',                     
      component:Iwen,
      redirect:'/iwen/demolist',                      //默认初始页面
      children:[                         //路由嵌套
        {
          path:'demolist',                     
          name:'demolist',                     
          component:demolist
        },{
          path:'demoindex',                     
          name:'demoindex',                     
          component:demoindex
        },{
          path:'canshu/:count/:type',                     
          name:'canshu',                     
          component:canshu
        }
      ]
    }
  ]
})
