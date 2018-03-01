import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import realTime from '@/components/realTime'
import statistics from '@/components/statistics'
import personnel from '@/components/personnel'
import auditing from '@/components/auditing'
import traffic from '@/components/traffic'
import release from '@/components/release'
import sysModule from '@/components/sysModule'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    component: home,
    redirect: '/home/realTime',
    children: [
      {
        path: '/home/realTime',
        component: realTime
      },
      {
        path: '/home/traffic',
        component: traffic
      },
      {
        path: '/home/statistics',
        component: statistics
      },
      {
        path: '/home/personnel',
        component: personnel
      },
      {
        path: '/home/auditing',
        component: auditing
      },
      {
        path: '/home/release',
        component: release
      },
      {
        path: '/home/sysModule',
        component: sysModule
      }
    ]
  }
]

const router = new Router({
  history: true,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/')
  } else {
    next()
  }
})

export default router
