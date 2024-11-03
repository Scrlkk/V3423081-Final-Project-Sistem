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
      class="flex mb-12 gap-9 hover:bg-amber-100 hover:scale-105 transition duration-150 ease-in-out"
    >
      <!-- GAMBAR -->
      <div>
        <img :src="post.img" class="w-[33rem]" />
      </div>

      <!-- TITLE -->
      <div class="flex flex-col justify-center">
        <h1
          class="font-inter text-sm font-semibold text-[#FFD050] py-2 tracking-[3px]"
        >
          {{ post.category }}
        </h1>
        <h2
          class="max-w-[38rem] py-3 font-sen text-[33px] font-bold text-gray-900 leading-snug tracking-tighter"
        >
          {{ post.title }}
        </h2>
        <p
          class="max-w-[38rem] text-md tracking-tight font-inter leading-6 text-[#6D6E76]"
        >
          {{ post.description }}
        </p>
      </div>
    </article>
  </router-link>
</template>
