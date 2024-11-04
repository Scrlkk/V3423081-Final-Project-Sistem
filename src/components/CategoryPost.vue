<script setup lang="ts">
import Post from '@/assets/images/misc/BlogPost2.png'
import { ref } from 'vue'
import CategoryArticle from './CategoryArticle.vue'
const Posts = ref([
  {
    route: '/Author',
    img: Post,
    category: 'BUSINESS',
    title: 'Top 6 free website mockup tools 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
  },
  {
    route: '/Author',
    img: Post,
    category: 'BUSINESS',
    title: 'Step-by-step guide to choosing great font pairs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
  },
  {
    route: '/Author',
    img: Post,
    category: 'BUSINESS',
    title: 'Ten free foogle fonts that you should use',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
  },
  {
    route: '/Author',
    img: Post,
    category: 'BUSINESS',
    title: 'What did I learn from doing 50+ design sprints?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
  },
])
</script>

<template>
  <section class="max-w-[83rem] mx-auto py-16 pt-28">
    <div class="flex">
      <!-- KIRI -->
      <div class="w-full">
        <CategoryArticle
          v-for="(post, index) in Posts"
          :key="index"
          :post="post"
        />
      </div>

      <!-- KANAN -->
      <aside class="w-[27%]">
        <div>
          <h1 class="font-bold text-[33px] tracking-tighter mb-8">
            Categories
          </h1>
        </div>

        <!-- STARTUP -->
        <article
          class="group flex w-full mb-5 hover:bg-[#075EFD] hover:scale-90 transition duration-150 ease-in-out"
        >
          <div
            class="flex grow items-center p-5 w-full border border-solid border-gray-300 gap-4"
          >
            <img
              src="@/assets/Rocket.svg"
              class="bg-[#FBF6EA] p-3 rounded-lg"
            />
            <h3
              class="text-[27px] font-bold tracking-tighter text-gray-800 group-hover:text-white transition-duration-300 ease-in-out"
            >
              Startup
            </h3>
          </div>
        </article>

        <!-- BUSINESS -->
        <article
          class="group flex w-full mb-5 hover:bg-[#075EFD] hover:scale-90 transition duration-150 ease-in-out"
        >
          <div
            class="flex grow items-center p-5 w-full border border-solid border-gray-300 gap-4"
          >
            <img src="@/assets/Business.svg" class="bg-[#FBF6EA] rounded-lg" />
            <h3
              class="text-[27px] font-bold tracking-tighter text-gray-800 group-hover:text-white transition-duration-300 ease-in-out"
            >
              Business
            </h3>
          </div>
        </article>

        <!-- Economy -->
        <article
          class="group flex w-full mb-5 hover:bg-[#075EFD] hover:scale-90 transition duration-150 ease-in-out"
        >
          <div
            class="flex grow items-center p-5 w-full border border-solid border-gray-300 gap-4"
          >
            <img
              src="@/assets/Economy.svg"
              class="bg-[#FBF6EA] rounded-lg p-3 mb-1"
            />
            <h3
              class="text-[27px] font-bold tracking-tighter text-gray-800 group-hover:text-white transition-duration-300 ease-in-out"
            >
              Economy
            </h3>
          </div>
        </article>

        <!-- TECHNOLOGY -->
        <article
          class="group flex w-full mb-5 hover:bg-[#075EFD] hover:scale-90 transition duration-150 ease-in-out"
        >
          <div
            class="flex grow items-center p-5 w-full border border-solid border-gray-300 gap-4"
          >
            <img src="@/assets/Tech.svg" class="bg-[#FBF6EA] rounded-lg p-3" />
            <h3
              class="text-[27px] font-bold tracking-tighter text-gray-800 group-hover:text-white transition-duration-300 ease-in-out"
            >
              Technology
            </h3>
          </div>
        </article>

        <!-- TAGS TITLE -->
        <div class="font-bold text-[33px] tracking-tighter mb-8">All Tags</div>

        <!-- 1 -->
        <div class="flex flex-wrap gap-5">
          <button
            class="font-bold text-sm text-gray-500 flex-grow inline-flex items-center justify-center px-6 py-3 outline outline-gray-400 rounded-full shadow hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-[#075EFD] hover:outline-none hover:outline-1 hover:text-white transition duration-200 ease-in-out"
          >
            Business
          </button>

          <!-- 2 -->
          <button
            class="font-bold text-sm text-gray-500 flex-grow inline-flex items-center justify-center px-6 outline outline-gray-400 rounded-full shadow hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-amber-300 hover:outline-none hover:outline-1 hover:text-white transition duration-200 ease-in-out"
          >
            Experience
          </button>

          <!-- 3 -->
          <button
            class="font-bold text-sm text-gray-500 grow-0 inline-flex items-center justify-center px-6 py-3 outline outline-gray-400 rounded-full shadow hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-amber-300 hover:outline-none hover:outline-1 hover:text-white transition duration-200 ease-in-out"
          >
            Screen
          </button>

          <!-- 4 -->
          <button
            class="font-bold text-sm text-gray-500 flex-grow inline-flex items-center justify-center outline outline-gray-400 rounded-full shadow hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-[#075EFD] hover:outline-none hover:outline-1 hover:text-white transition duration-200 ease-in-out"
          >
            Technology
          </button>

          <!-- 5 -->
          <button
            class="font-bold text-sm text-gray-500 flex-grow inline-flex items-center justify-center px-4 py-2 outline outline-gray-400 rounded-full shadow hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-[#075EFD] hover:outline-none hover:outline-1 hover:text-white transition duration-200 ease-in-out"
          >
            Marketing
          </button>

          <!-- 6 -->
          <button
            class="font-bold text-sm text-gray-500 flex-grow inline-flex items-center justify-center px-7 py-2 outline outline-gray-400 rounded-full shadow hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-amber-300 hover:outline-none hover:outline-1 hover:text-white transition duration-200 ease-in-out"
          >
            Life
          </button>
        </div>
      </aside>
    </div>
  </section>
</template>
