import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Author from '../views/AuthorView.vue'
import Blog from '../views/BlogView.vue'
import Privacy from '@/components/Privacy.vue'
import Contact from '@/components/ContactUs.vue'
import Category from '../views/CategoryView.vue' 
import BlogView from '../views/MyBlogView.vue' 
import About from '../views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/Privacy-Policy',
      component: Privacy,
    },

    {
      path: '/Contact',
      component: Contact,
    },

    {
      path: '/Author',
      component: Author,
    },
    {
      path: '/Blog',
      component: Blog,
    },
    {
      path: '/Category',
      component: Category,
    },
    {
      path: '/MyBlog',
      component: BlogView,
    },
    {
      path: '/AboutUs',
      component: About,
    },
  ],
})

export default router
