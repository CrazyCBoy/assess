import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import HighChartsColumnRange from "../charts/HighChartsColumnRange";

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
    path: '/range',
    component: HighChartsColumnRange,
    //redirect: '/charts/HighChartsColumnRange',
    name: 'HighChartsColumnRange',
    meta: {title: '图 '},
  },
  {
    path: '/spatial',
    component: Layout,//这个是右侧组件
    redirect: '/spatial/SpatialVerificationFSS',
    name: 'spatial',
    meta: {title: '邻域空间检验方法 (spatial verification FSS) '},
    children: [{
      path: 'hourly',
      name: 'spatialhourly',
      component: () => import('@/views/spatial/SpatialVerificationFSS/SpatialHourly'),
      meta: {title: '逐小时', icon: 'product-list'}
    },
      {
        path: 'ThreeProduct',
        name: 'ThreeProduct',
        component: () => import('@/views/spatial/SpatialVerificationFSS/ThreeTime'),
        meta: {title: '3小时', icon: 'product-three'}
      },
      {
        path: 'productSix',
        name: 'productSix',
        component: () => import('@/views/spatial/SpatialVerificationFSS/SixTime'),
        meta: {title: '6小时', icon: 'product-six'}
      },
      {
        path: 'productTF',
        name: 'productTF',
        component: () => import('@/views/spatial/SpatialVerificationFSS/TFTime'),
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
    meta: {title: '降水技巧评分(Rainfall Skills Score)', icon: 'sms'},
    children: [
      {
        path: 'couponSix',
        name: 'couponSix',
        component: () => import('@/views/sms/coupon/SixTime'),
        meta: {title: '6hr', icon: 'coupon-six'}
      },
      {
        path: 'couponTF',
        name: 'couponTF',
        component: () => import('@/views/sms/coupon/TFTime'),
        meta: {title: '24hr', icon: 'coupon-TF'},
      }
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/flash',
    name: 'sm',
    meta: {title: '近地面要素检验(surface verification)', icon: 'sms'},
    children: [
      {
        path: 'flashRMSE',
        name: 'flashRMSE',
        component: () => import('@/views/sms/flash/RMSE'),
        meta: {title: 'RMSE', icon: 'flash-RMSE'}
      },{
        path: 'flashRelative',
        name: 'flashRelative',
        component: () => import('@/views/sms/flash/relative'),
        meta: {title: '相对误差',icon: 'flash-relative'},
      },{
        path: 'flashAbsolutely',
        name: 'flashAbsolutely',
        component: () => import('@/views/sms/flash/absolutely'),
        meta: {title: '绝对误差',icon: 'flash-absolutely'},
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

