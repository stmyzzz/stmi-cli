<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-26 16:12:55
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-27 18:06:08
-->
<template>
  <div id="app">
    <p>{{txt}}</p>
    <img class="img" :src="img" alt="">
    <p>num:{{num}}</p>
    <button>vue-router</button>
  </div>

</template>

<script>
import img from  './assets/ganda.jpeg'
  export default {
    name: '',
    data() {
      return {
        txt:'vue',
        num:0,
        img,
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>
 #app{
   color: rgb(110, 74, 74);
 }
 .img{
   width: 300px;
   height: 200px;
 }
</style>