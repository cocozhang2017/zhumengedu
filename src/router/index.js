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
import contact_mb from '@/pages_mb/contact_mb'
Vue.use(Router)
let router = new Router({
    mode: 'hash',
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
        {
            path: '/contact_mb',
            name: 'contact_mb',
            component: contact_mb
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path == '/' || to.path == ''){
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            next('/home_mb')
        }else{
            next('/home')
        }
    }else{
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            if(!to.path.endsWith('mb')){
                let tar = to.path + '_mb';
                next(tar)
            }
            next()
        }else{
            if(to.path.endsWith('mb')){
                let tar = to.path.substring(0,-3);
                next(tar)
            }
            next()
        }
    }

})

export default router
