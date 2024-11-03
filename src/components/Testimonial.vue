<script setup lang="ts">
import Post1 from '@/assets/images/misc/MyBlog1.png'
</script>

<template>
  <section class="mb-36">
    <div
      class="custom-container max-w-7xl mx-auto grid grid-cols-2 gap-5 p-24 shadow-lg bg-[#FBF6EA] hover:scale-105 transition duration-150 ease-in-out"
    >
      <!-- KIRI -->
      <article
        class="flex flex-col items-start text-base text-gray-800 mr-20 border-r border-gray-300"
      >
        <h2
          class="font-semibold leading-none uppercase tracking-widest text-gray-600 text-xl"
        >
          TESTIMONIALS
        </h2>
        <h3
          class="mt-2 text-5xl font-bold tracking-tighter leading-snug text-gray-900"
        >
          What people say about our blog
        </h3>
        <p class="font-inter mt-4 text-gray-500 leading-relaxed text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </article>

      <!-- KANAN -->
      <article class="flex flex-col">
        <blockquote class="text-3xl font-semibold leading-9 text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </blockquote>

        <!-- PROFILE -->
        <footer class="flex justify-between items-center">
          <div class="flex items-center gap-6 mt-8">
            <div class="w-12 h-12 overflow-hidden rounded-full mt-1">
              <img :src="Post1" class="shrink-0 w-full h-full object-cover" />
            </div>
            <div>
              <cite class="text-2xl font-semibold text-gray-800 not-italic">
                Jonathan Vallem
              </cite>
              <p class="font-inter text-base leading-tight text-gray-500">
                New york, USA
              </p>
            </div>
          </div>

          <!-- NAVIGASI -->
          <div class="flex gap-4 mt-9">
            <button class="bg-white rounded-full p-3 aspect-square hover:scale-90 hover:shadow-lg transition duration-150 ease-in-out">
              <svg
                width="28"
                height="19"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2852 9C21.8374 9 22.2852 8.55228 22.2852 8C22.2852 7.44772 21.8374 7 21.2852 7L21.2852 9ZM0.449017 7.29289C0.0584927 7.68342 0.0584926 8.31658 0.449017 8.7071L6.81298 15.0711C7.2035 15.4616 7.83667 15.4616 8.22719 15.0711C8.61772 14.6805 8.61772 14.0474 8.22719 13.6569L2.57034 8L8.22719 2.34314C8.61772 1.95262 8.61772 1.31946 8.22719 0.928931C7.83667 0.538407 7.2035 0.538407 6.81298 0.928931L0.449017 7.29289ZM21.2852 7L1.15612 7L1.15612 9L21.2852 9L21.2852 7Z"
                  fill="#232536"
                />
              </svg>
            </button>

            <button class="bg-[#232536] rounded-full p-3 aspect-square hover:scale-90 hover:shadow-lg transition duration-150 ease-in-out">
              <svg
                width="28"
                height="13"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM1 9H27V7H1V9Z"
                  fill="#F4F4F4"
                />
              </svg>
            </button>
          </div>
        </footer>
      </article>
    </div>
  </section>
</template>
