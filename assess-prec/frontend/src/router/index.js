import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/MainHome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHome',
      component: MainHome
    },
  ]
})
