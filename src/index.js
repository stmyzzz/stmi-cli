/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-26 16:16:04
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-27 17:59:58
 */

import Vue from 'vue'
import App from './App.vue'
import './styles/index.css'
import './styles/index.less'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render:h=> h(App)
}).$mount(root)