<!--
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 18:06:44
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-29 11:51:02
-->
<template>
  <div class="about">{{title}}</div>
</template>

<script>
import '@/styles/about.less'
export default {
  name:'about',
  data(){
    return {
      title:'webpack babel'
    }
  },
}
</script>

<style scoped>
.log{
  color: red;
}
</style>