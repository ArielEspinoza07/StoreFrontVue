import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Stores from '@/components/Store/Index'
import NewStore from '@/components/Store/New'
import EditStore from '@/components/Store/Edit'
import ShowStore from '@/components/Store/Show'

import NewArticle from '@/components/Article/New'
import EditArticle from '@/components/Article/Edit'
import ShowArticle from '@/components/Article/Show'

import Error404 from '@/components/Errors/404'
import Error500 from '@/components/Errors/500'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/store',
      name:'Stores',
      component:Stores
    },
    {
      path:'/store/new',
      name:'new-store',
      component:NewStore
    },
    {
      path:'/store/edit/:id',
      name:'edit-store',
      component:EditStore
    },
    {
      path:'/store/:id',
      name:'show-store',
      component:ShowStore
    },
    {
      path:'/store/:id/article/new',
      name:'new-article',
      component:NewArticle
    },
    {
      path:'/store/:storeId/article/edit/:id',
      name:'edit-article',
      component:EditArticle
    },
    {
      path:'/store/:storeId/article/:id',
      name:'show-article',
      component:ShowArticle
    },
    {
      path:'/404',
      name:'error-404',
      component:Error404
    },
    {
      path:'/500',
      name:'error-500',
      component:Error500
    }
  ],
  mode:'history'
})
