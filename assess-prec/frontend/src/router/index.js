import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
let constantRouterMap;
constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页'}
    }]
  },
  {
    path: '/pms',
    component: Layout,//这个是右侧组件
    redirect: '/pms/product',
    name: 'pms',
    meta: {title: '邻域空间检验方法 (spatial verification FSS) '},
    children: [{
      path: 'productOnceTime',
      name: 'productList',
      component: () => import('@/views/pms/product/OnceTime'),
      meta: {title: '逐小时', icon: 'product-list'}
    },
      {
        path: 'ThreeProduct',
        name: 'ThreeProduct',
        component: () => import('@/views/pms/product/ThreeTime'),
        meta: {title: '3小时', icon: 'product-three'}
      },
      {
        path: 'productSix',
        name: 'productSix',
        component: () => import('@/views/pms/product/SixTime'),
        meta: {title: '6小时', icon: 'product-six'}
      },
      {
        path: 'productTF',
        name: 'productTF',
        component: () => import('@/views/pms/product/TFTime'),
        meta: {title: '24小时', icon: 'product-tf'}
      },
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: {title: '常规技巧评分 (grid-stat for precip) '},
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/OnceTime'),
        meta: {title: '逐小时', icon: 'product-list'}
      },

      {
        path: 'orderThree',
        name: 'orderThree',
        component: () => import('@/views/oms/order/ThreeTime'),
        meta: {title: '3小时', icon: 'order-three'}
      },
      {
        path: 'orderSix',
        name: 'orderSix',
        component: () => import('@/views/oms/order/SixTime'),
        meta: {title: '6小时', icon: 'order-six'}
      },
      {
        path: 'returnReason',
        name: 'returnReason',
        component: () => import('@/views/oms/order/TwentyFour'),
        meta: {title: '24小时', icon: 'order-return-reason'}
      },
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {title: '站点降水检验'},
    children: [
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/sms/flash/index'),
        meta: {title: '降水技巧评分', icon: 'sms-flash'}
      },

      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/sms/coupon/index'),
        meta: {title: '近地面要素', icon: 'sms-coupon'}
      },
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

