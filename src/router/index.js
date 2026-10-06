import { createRouter, createWebHistory } from 'vue-router'
import BuscadorPelis from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BuscadorPelis,
    },
  ],
})

export default router
