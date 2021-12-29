<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-26 16:12:55
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-29 15:03:25
-->
<template>
  <div id="app">
    <p>{{title}}</p>
    <p>{{introduction}}</p>
    <img class="img" :src="img" alt="">
    <router-view></router-view>
    <div class="nav">
      <router-link to='/home'>home</router-link>
      <router-link to='/about'>about</router-link>
    </div>
  </div>
</template>

<script>
import img from  '@/assets/ganda.jpeg'
  export default {
    name: '',
    data() {
      return {
        title:'stmi-cli',
        introduction:'🎉 webpack5 vue2 cli',
        img,
      }
    },
    methods:{
      
    }
  }
</script>

<style lang='less' scoped>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  >p:nth-of-type(1){
    font-size: 50px;
  }
  >p:nth-of-type(2){
    font-size: 30px;
  }
}
 .img{
   width: 850px;
   height: 500px;
 }
</style>