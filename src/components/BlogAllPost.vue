<script setup lang="ts">
import BlogPost2 from '@/assets/images/misc/BlogPost2.png'
import BlogPost3 from '@/assets/images/misc/BlogPost3.png'
import BlogPost4 from '@/assets/images/misc/BlogPost4.png'
import BlogPost5 from '@/assets/images/misc/BlogPost5.png'
import { ref } from 'vue'
import BlogArticle from './BlogArticle.vue'
const Posts = ref([
  {
    route: '/MyBlog',
    img: BlogPost2,
    category: 'STARTUP',
    title: 'Design tips for designers that cover everything you need',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    route: '/MyBlog',
    img: BlogPost3,
    category: 'BUSINESS',
    title: 'How to build rapport with your web design clients',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    route: '/MyBlog',
    img: BlogPost4,
    category: 'STARTUP',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    route: '/MyBlog',
    img: BlogPost5,
    category: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    route: '/MyBlog',
    img: BlogPost2,
    category: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
])
</script>

<template>
  <section class="max-w-[83rem] mx-auto pt-20">
    <div
      class="font-sen pb-6 mb-16 font-bold text text-5xl tracking-tight border-b border-gray-400 w-full"
    >
      All posts
    </div>

    <!-- ISI -->
    <div>
      <BlogArticle v-for="(post, index) in Posts" :key="index" :post="post" />
    </div>

    <div class="pt-10 flex justify-center font-bold text-2xl gap-5">
      <a href="" class="text-gray-500">&lt; Prev</a>
      <a href="" class="hover:scale-105">Next &gt;</a>
    </div>
  </section>
</template>
