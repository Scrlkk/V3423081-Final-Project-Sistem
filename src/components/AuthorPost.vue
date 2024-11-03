<script setup lang="ts">
import Post1 from '@/assets/images/misc/MyPost1.png'
import Post2 from '@/assets/images/misc/MyPost2.png'
</script>

<template>
  <section class="max-w-5xl mx-auto">
    <!-- TITLE -->
    <div
      class="font-sen text-5xl font-bold text-gray-900 leading-snug tracking-tight py-16 mt-10"
    >
      My Posts
    </div>

    <!-- POST1 -->
    <div class="flex flex-col gap-y-16 mb-[8rem]">
      <router-link to="/Category">
        <div
          class="flex gap-7 hover:bg-[#FBF6EA] hover:scale-105 transition duration-150 in-ease-out"
        >
          <!-- GAMBAR -->
          <div>
            <img :src="Post1" class="w-[27rem]" />
          </div>

          <!-- KETERANGAN -->
          <div class="flex flex-col justify-center">
            <h1
              class="font-inter font-semibold text-[#FFD050] py-2 tracking-[3px]"
            >
              BUSINESS
            </h1>
            <h2
              class="max-w-[29rem] py-3 font-sen text-[29px] font-bold text-gray-900 leading-snug tracking-tight"
            >
              Font sizes in UI design: The complete guide to follow
            </h2>
            <p class="max-w-lg text-sm font-inter leading-6 text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </router-link>

      <!-- POST2 -->
      <router-link to="/Category">
        <div
          class="flex gap-7 hover:bg-[#FBF6EA] hover:scale-105 transition duration-150 in-ease-out"
        >
          <!-- GAMBAR -->
          <div>
            <img :src="Post2" class="w-[27rem]" />
          </div>

          <!-- KETERANGAN -->
          <div class="flex flex-col justify-center">
            <h1
              class="font-inter font-semibold text-[#FFD050] py-2 tracking-[3px]"
            >
              ECONOMY
            </h1>
            <h2
              class="max-w-[29rem] py-3 font-sen text-[29px] font-bold text-gray-900 leading-snug tracking-tight"
            >
              How to build rapport with your web design clients
            </h2>
            <p class="max-w-lg text-sm font-inter leading-6 text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>
