<script setup lang="ts">
import Post1 from '@/assets/images/misc/MyBlog1.png'
</script>
<template>
  <section class="max-w-[44rem] mx-auto pt-44 pb-16">
    <!-- BARIS FOTO -->
    <div class="flex gap-4">
      <div class="w-12 h-12 overflow-hidden rounded-full mt-1">
        <img :src="Post1" class="shrink-0 w-full h-full object-cover" />
      </div>
      <div class="flex flex-col justify-center leading-7">
        <h1 class="font-semibold text-2xl text-amber-300 tracking-tight">
          Andrew Jonson
        </h1>
        <p class="font-inter text-sm text-zinc-500">
          Posted on 27th January 2022
        </p>
      </div>
    </div>

    <!-- TITLE -->
    <h1 class="font-bold tracking-tighter text-[3rem] py-7">
      Step-by-step guide to choosing great font pairs
    </h1>
    <router-link to="/Category">
      <div
        class="group flex w-[3rem] gap-2 hover:scale-110 transition duration-150 ease-in-out"
      >
        <img src="@/assets/Rocket.svg" />
        <h3
          class="text-2xl font-bold tracking-tighter text-gray-800 group-hover:text-[#075EFD] "
        >
          Startup
        </h3>
      </div>
    </router-link>
  </section>
</template>
