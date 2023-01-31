import Vue from 'vue'
import VueRouter from 'vue-router'

import products from "../views/productsPage.vue";
import productDetails from '../views/productsDetailsPage.vue'
import cart from '../views/cart.vue'
import notFoundPage from '../views/notFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'products',
    component: products
  }, {
    path: '/products/:id',
    name: 'productDeatails',
    component: productDetails
  }, {
    path: '/cart',
    name: 'cart',
    component: cart,
  }, {
    path: '/',
    redirect: '/products'
  }, {
    path: '*',
    component: notFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
