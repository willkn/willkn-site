import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '@/views/Skills'
import Portfolio from '@/views/Portfolio'
import Blog from '@/views/Blog'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return {x: 0, y: 0}
  }
  
})

export default router
