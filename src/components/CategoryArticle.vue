<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <router-link :to="post.route">
    <article
      class="flex flex-coln mb-9 w-[90%] gap-8 hover:bg-amber-100 hover:scale-105 transition duration-150 ease-in-out"
    >
      <!-- GAMBAR -->
      <div class="w-[294px] h-[312px] overflow-hidden">
        <img :src="post.img" class="w-full h-full object-cover" />
      </div>

      <!-- TITLE -->
      <div class="flex flex-col justify-center">
        <h1
          class="font-inter text-xl font-normal text-[#FFD050] py-2 tracking-[3px]"
        >
          {{ post.category }}
        </h1>
        <h2
          class="max-w-[38rem] py-3 text-[38px] font-bold text-gray-900 leading-snug tracking-tighter"
        >
          {{ post.title }}
        </h2>
        <p class="max-w-[34rem] text-lg font-inter leading-7 text-[#6D6E76]">
          {{ post.description }}
        </p>
      </div>
    </article>
  </router-link>
</template>
