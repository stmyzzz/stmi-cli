/*
 * @Description: 
 * @version: 
 * @Author: dlyan.ding
 * @Date: 2021-12-27 18:05:09
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-12-28 14:35:39
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
