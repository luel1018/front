import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'boardReg',
      path: '/board/reg',
      component: () => import('@/views/board/Reg.vue'),
    },
  ],
})

export default router
