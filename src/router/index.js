import { createRouter, createWebHistory } from 'vue-router'
import Token from '@/modules/token/ObtenerToken.vue'
import Estudiante from '@/modules/estudiante/Estudiante.vue'

const routes = [
  {
    path: '/token',
    name: 'token',
    component: Token
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component:Estudiante

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
