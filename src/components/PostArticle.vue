<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="flex flex-col items-start py-10 pr-20 pl-8 hover:bg-amber-100 hover:bg-opacity-50 transition duration-150 ease-in-out"
  >
    <router-link :to="post.route">
      <time class="text-sm font-medium leading-none">
        By <span class="text-amber-300">{{ post.author }}</span> |
        {{ post.date }}
      </time>
      <h3 class="mt-2 text-3xl font-bold leading-8 text-gray-800 max-w-[40rem]">
        {{ post.title }}
      </h3>
    </router-link>
  </article>
</template>
