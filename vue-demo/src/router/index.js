import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/pages/admin/index'
import Product from '@/components/pages/admin/product'
import News from '@/components/pages/admin/news'
import Setting from '@/components/pages/admin/setting'
import Personal from '@/components/pages/admin/personal'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path:'/404',
      name:'Error',
      component: Error
    },
    {
      path: "*",
      redirect: '/404'
    }
  ]
})
