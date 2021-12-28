/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 18:05:09
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-27 18:05:21
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
