import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/articles',
    name: 'Articles',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Articles.vue')

  },
  {
    path: '/register',
    name: 'Medlem',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Medlem.vue')

  },
  {
    path: '/sendOrder',
    name: 'SendOrder',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/SendOrder.vue')

  },
  {
    path: '/confirmed',
    name: 'MemberConfirmation',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/MemberConfirmation.vue')

  },
  {
    path: '/orderconfirmed',
    name: 'OrderConfirmation',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderConfirmation.vue')

  }
  
]

const router = new VueRouter({
  routes
})

export default router
