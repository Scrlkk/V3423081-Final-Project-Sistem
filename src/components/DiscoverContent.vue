<script setup lang="ts">
import started from '@/assets/images/misc/started.png'
</script>

<template>
  <section class="pt-4">
    <!-- GAMBAR -->
    <article class="relative w-[1352px] h-[705px] mx-auto">
      <div class="absolute left-0 bottom-0 w-[1020px] h-[740px]">
        <img
          loading="lazy"
          :src="started"
          alt="Group of friends enjoying view"
          class="w-full h-full object-cover object-bottom"
        />
      </div>

      <!-- KONTAINER -->
      <div
        class="absolute right-0 bottom-0 bg-white w-[706px] h-[584px] p-20 shadow-lg z-10 hover:shadow-xl hover:scale-105 transition duration-150 ease-in-out"
      >
        <span
          class="font-inter block text-sm font-semibold uppercase tracking-[3px] text-gray-800"
        >
          WHY WE STARTED
        </span>

        <h2
          class="mt-6 text-5xl font-bold tracking-tighter leading-[64px] text-gray-800"
        >
          It started out as a simple idea and evolved into our passion
        </h2>

        <p class="font-inter mt-6 text-base leading-7 text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        <button
          class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
        >
          Discover our story >
        </button>
      </div>
    </article>
  </section>
</template>
