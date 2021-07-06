import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/photos/add',
    name: 'AddPhoto',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddPhoto.vue')
  },
  {
    path: '/photos/:id',
    name: 'DetailPhoto',
    component: () => import(/* webpackChunkName: "about" */ '../components/DetailPhoto.vue')
  },
  {
    path: '/photos/:id/edit',
    name: 'UpdatePhoto',
    component: () => import(/* webpackChunkName: "about" */ '../components/UpdatePhoto.vue')
  },
  {
    path: '/albums',
    name: 'Album',
    component: () => import(/* webpackChunkName: "about" */ '../views/Album.vue')
  },
  {
    path: '/albums/add',
    name: 'AddAlbum',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddAlbum.vue')
  },
  {
    path: '/albums/:id',
    name: 'DetailAlbum',
    component: () => import(/* webpackChunkName: "about" */ '../components/DetailAlbum.vue')
  },
  {
    path: '/albums/:id/edit',
    name: 'UpdateAlbum',
    component: () => import(/* webpackChunkName: "about" */ '../components/UpdateAlbum.vue')
  },
  // {
  //   path: '/update/',
  //   name: 'UpdatePage',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/UpdateData.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const access_token = localStorage.getItem('access_token')
//   if(access_token && (to.name === 'Login' || to.name === 'Register')) next('/')
//   else if(!access_token && (to.name !== 'Login' || to.name !== 'Register')) next('/login')
//   else next()
// })

export default router
