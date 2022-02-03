import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'
import AuthUser from "@/store/entities/AuthUser";

const routes = [
  {
    path: '/',
    name: 'controlDevices',
    meta: { layout: 'MainLayout', auth: true },
    component: () => import( '../views/ControlDevices.vue')
  },
  {
    path: '/user-profile',
    name: 'userProfile',
    meta: { layout: 'MainLayout', auth: true },
    component: () => import( '../views/UserProfile.vue')
  },
  {
    path: '/translation',
    name: 'translation',
    meta: { layout: 'MainLayout', auth: true },
    component: () => import( '../views/Translations.vue')
  },
  {
    path: '/playlist',
    name: 'playlist',
    meta: { layout: 'MainLayout', auth: true },
    component: () => import( '../views/Playlists.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { layout: 'EmptyLayout', auth: false },
    component: () => import( '../views/Auth.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( async (to, from, next) => {
  const authUser = store.$db().model(AuthUser).query().first()
  to.meta.auth && !authUser ? next('/auth') : next()
})

export default router
