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
    path: '/Cadastrar',
    name: 'Cadastrar',
    component: () => import('../views/Cadastrar.vue')
  },
  {
    path: '/editar',
    name: 'Remover',
    component: () => import('../views/Remover.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
