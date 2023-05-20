import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import AboutPage from '../views/AboutPage.vue';
import PostById from '../views/PostById.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/post/:id',
    component: PostById,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
