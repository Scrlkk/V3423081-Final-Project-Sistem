<script setup lang="ts">
import CoverImage from '@/assets/images/misc/cover.png'
</script>

<template>
  <div
    class="flex relative flex-col self-stretch w-full text-base font-bold text-white pt-9"
  >
    <div
      class="absolute inset-0 z-10"
      style="
        background: radial-gradient(
          circle at 150% 30%,
          rgba(0, 0, 0, 0.4) 70%,
          rgba(0, 0, 0, 1) 100%
        );
      "
    ></div>
    <img
      loading="lazy"
      :src="CoverImage"
      alt="Cover Image"
      class="object-cover absolute inset-0 w-full h-full"
    />
    <div
      class="flex relative flex-col items-start px-20 py-40 w-full font-light"
    >
      <p
        class="font-semibold font-inter leading-none uppercase tracking-[3px] z-20"
      >
        <span class="font-normal">Posted on </span>
        <span class="font-black">startup</span>
      </p>
      <h1
        class="mt-6 font-bold text-6xl tracking-tighter leading-[64px] w-[900px] z-20"
      >
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="mt-6 leading-7 z-20">
        By <a class="text-blue-600">James West</a> |
        <time datetime="2022-05-23"> May 23, 2022</time>
      </p>
      <p class="mt-4 font-inter leading-7 w-[599px] z-20">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <a
        href="/Blog"
        class="gap-3 px-12 py-5 mt-12 mb-0 text-lg leading-none font-bold bg-blue-600 text-white hover:bg-x-yellow transition duration-150 ease-in-out z-20"
      >
        Read More &gt;
      </a>
    </div>
  </div>
</template>
