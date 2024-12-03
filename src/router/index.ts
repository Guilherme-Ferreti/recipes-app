import HomeView from '@/views/HomeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: RecipeView,
    },
  ],
});

export default router;
