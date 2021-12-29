/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-26 16:16:04
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-29 10:43:32
 */

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.less'
const data = {
  res:[]
}

console.log(`data.res`, data?.res)

Vue.config.productionTip = false 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')