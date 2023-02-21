import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomepageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/homeinsurance',
      name: 'homeinsurance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeinsurancepageView.vue')
    },
    {
      path: '/autoinsurance',
      name: 'autoinsurance',
      component: () => import('../views/AutoView.vue')

    },
    {
      path: '/floodinsurance',
      name: 'floodinsurance',
      component: () => import('../views/FloodinsurancepageView.vue')

    },
    {
      path: '/lifeinsurance',
      name: 'lifeinsurance',
      component: () => import('../views/LifeinsurancepageView.vue')

    },
    {
      path: '/medicare',
      name: 'medicare',
      component: () => import('../views/MedicarepageView.vue')

    },
    {
      path: '/commercialinsurance',
      name: 'commercialinsurance',
      component: () => import('../views/CommercialView.vue')

    },
    {
      path: '/recreationalinsurance',
      name: 'recreationalinsurance',
      component: () => import('../views/RecreationalinsurancepageView.vue')

    },
    {
      path: '/umbrellainsurance',
      name: 'umbrellainsurance',
      component: () => import('../views/UmbrellainsurancepageView.vue')

    },
    {
      path: '/chooseproducts',
      name: 'chooseproducts',
      component: () => import('../views/ChooseproductsView.vue')

    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/aboutusView.vue')

    },
    {
      path: '/homequote',
      name: 'homequote',
      component: () => import('../views/HomeinsurancequoteView.vue')

    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/ContactusView.vue')

    },
    {
      path: '/autoquote',
      name: 'autoquote',
      component: () => import('../views/AutoquoteView.vue')
    },
    {
      path: '/lifequote',
      name: 'lifequote',
      component: () => import('../views/LifeinsurancequoteView.vue')
    },
    {
      path: '/commercialquote',
      name: 'commercialquote',
      component: () => import('../views/CommercialquoteView.vue')
    },
    {
      path: '/petquote',
      name: 'petquote',
      component: () => import('../views/PetinsurancequoteView.vue')
    },
    {
      path: '/form/:key',
      name: 'form-test',
      component: () => import('../views/FormView.vue')
    },
    
    
    
  ]
})

export default router
