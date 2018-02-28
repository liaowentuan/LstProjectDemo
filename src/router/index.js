import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import detail from '@/components/detail'
import main from '@/components/main'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  // { path: '', redirect: '/home' },
  {
    path: '/home',
    component: home,
    redirect: '/home/detail',
    children: [
      {
        path: '/home/detail',
        component: detail
      },
      {
        path: '/home/main',
        component: main
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
