import { createRouter, createWebHashHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ServerView
  },
  {
    path: '/console',
    name: 'ConsoleView',
    component: () => import('@/views/ConsoleView.vue')
  },
  {
    path: '/options',
    name: 'options',
    component: () => import('@/views/OptionsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
