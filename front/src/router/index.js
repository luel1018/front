import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'boardReg',
      path: '/board/reg',
      component: () => import('@/views/board/Reg.vue'),
    },
    {
      name: 'boardList',
      path: '/board/list',
      component: () => import('@/views/board/List.vue'),
    },
    {
      name: 'boardRead',
      path: '/board/read/:boardIdx',
      component: () => import('@/views/board/Read.vue'),
    },
    {
      name: 'boardUpdate',
      path: '/board/update/:boardIdx',
      component: () => import('@/views/board/Update.vue'),
    },
    {
      name: 'userSignup',
      path: '/user/signup',
      component: () => import('@/views/user/Signup.vue'),
    },
  ],
})

export default router