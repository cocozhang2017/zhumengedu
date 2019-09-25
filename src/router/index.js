import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import News from '@/pages/news'
import partner from '@/pages/partner'
import Contact from '@/pages/contact'
import LeavingMessage from '@/pages/LeavingMessage'
import home_mb from '@/pages_mb/home_mb'
import news_mb from '@/pages_mb/news_mb'
import partner_mb from '@/pages_mb/partner_mb'



Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: '/',
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
            path: '/partner',
            name: 'partner',
            component: partner
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/LeavingMessage',
            name: 'LeavingMessage',
            component: LeavingMessage
        },
        {
            path: '/home_mb',
            name: 'home_mb',
            component: home_mb
        },
        {
            path: '/news_mb',
            name: 'news_mb',
            component: news_mb
        },
        {
            path: '/partner_mb',
            name: 'partner_mb',
            component: partner_mb
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path == '/'){
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            next('/home_mb')
        }else{
            next('/home')
        }
    }
    next()
})

export default router
