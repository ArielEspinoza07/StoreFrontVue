import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stores from '@/components/Store/Stores'
import NewStore from '@/components/Store/NewStore'
import EditStore from '@/components/Store/EditStore'
import ShowStore from '@/components/Store/ShowStore'

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
    // {
    //   path:'/store/:id/article/new',
    //   name:'new-article',
    //   component:NewArticle
    // },
    // {
    //   path:'/store/article/edit/:id',
    //   name:'edit-article',
    //   component:EditArticle
    // }
  ],
  mode:'history'
})
