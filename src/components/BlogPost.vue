<script setup lang="ts">
import BlogPost1 from '@/assets/images/misc/BlogPost1.png'
</script>

<template>
  <section class="pt-40 pb-20 bg-[#F4F0F8]">
    <div class="flex mx-auto justify-between max-w-[83rem] gap-12">
      <div class="flex flex-col pt-4 justify-center max-w-[45rem]">
        <h1 class="font-inter text-m tracking-[2px]">FEATURED POST</h1>
        <h2 class="font-bold text-[40px] leading-tight tracking-tighter py-4">
          Step-by-step guide to choosing great font pairs
        </h2>
        <h3 class="font-inter mb-4 font-normal">
          By <a href="#" class="text-amber-300 pr-[5px]">John Doe </a> |
          <time class="pl-[5px]"> May 23, 2022</time>
        </h3>
        <p class="font-inter text-lg leading-7 text-[#6D6E76]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>

        <router-link to="/MyBlog" class="py-12">
          <a
          href="/MyBlog"
            class="p-5 px-[60px] mt-9 ml-1 w-full text-lg leading-none font-bold bg-blue-600 text-white hover:bg-x-yellow transition duration-150 ease-in-out z-20"
          >
            Read More &gt;
          </a>
        </router-link>
      </div>

      <div class="pl-2 flex shrink-0">
        <img
          :src="BlogPost1"
          class="object-cover h-full hover:scale-105 transition duration-150 ease-in-out"
        />
      </div>
    </div>
  </section>
</template>
