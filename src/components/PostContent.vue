<script setup lang="ts">
import FeaturedPost from '@/assets/images/misc/featured.png'
import { ref } from 'vue'
import PostArticle from './PostArticle.vue'
const Posts = ref([
  {
    route: '/Blog',
    title: '8 Figma design systems that you can download for free today.',
    author: 'John Doe',
    date: 'Aug 23, 2021',
  },
  {
    route: '/Blog',
    title: '8 Figma design systems that you can download for free today.',
    author: 'John Doe',
    date: 'Aug 23, 2021',
  },
  {
    route: '/Blog',
    title: '8 Figma design systems that you can download for free today.',
    author: 'John Doe',
    date: 'Aug 23, 2021',
  },
  {
    route: '/Blog',
    title: '8 Figma design systems that you can download for free today.',
    author: 'John Doe',
    date: 'Aug 23, 2021',
  },
])
</script>

<template>
  <section class="py-10 flex px-20 w-full mt-20">
    <!-- SEBELAH KIRI -->
    <div class="py-6">
      <h2
        class="tracking-tighter flex text-4xl font-bold leading-none text-gray-800"
      >
        Featured Post
      </h2>

      <article class="mt-8 mb-5 flex flex-col w-[94%] hover:scale-105 transition duration-300 ease-in-out">
        <div
          class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-black-500"
        >
          <img
            loading="lazy"
            :src="FeaturedPost"
            alt="Featured post"
            class="object-contain self-stretch w-full aspect-[1.9]"
          />
          <div class="mt-8 text-sm font-light leading-none font-inter">
            By <span class="text-amber-300">John Doe</span> l May 23, 2022
          </div>
          <h3 class="mt-4 text-3xl tracking-tighter leading-10 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h3>
          <p class="mt-4 font-light font-inter leading-7 text-zinc-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <a
          href="/MyBlog"
            class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out"
          >
            Read More &gt;
          </a>
        </div>
      </article>
    </div>

    <!-- SEBELAH KANAN -->
    <div>
      <div class="flex justify-between py-6 mb-2">
        <h2
          class="tracking-tighter flex text-4xl font-bold leading-none text-gray-800"
        >
          All Posts
        </h2>
        <a href="#" class="my-auto text-base leading-7 text-amber-300"
          >View All</a
        >
      </div>

      <!-- KANAN BAWAH -->
      <div>
        <PostArticle v-for="(post, index) in Posts" :key="index" :post="post" />
      </div>
    </div>
  </section>
</template>
