import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import News from '@/pages/news'
import Parnter from '@/pages/parnter'
import Contact from '@/pages/contact'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/parnter',
      name: 'Parnter',
      component: Parnter
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
