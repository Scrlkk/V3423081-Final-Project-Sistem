<script setup lang="ts"></script>

<template>
  <section class="px-20 mt-40 mb-12">
    <div class="flex items-center gap-20">
      <!-- GAMBAR -->
      <div class="h-[480px] w-[624px] overflow-hidden">
        <img
          src="@/assets/images/misc/AboutUs3.png"
          class="object-cover w-full h-full"
        />
      </div>

      <!-- KANAN -->
      <div class="max-w-xl">
        <h1 class="font-bold text-gray-900 text-4xl">
          Why we started this Blog
        </h1>
        <h2 class="font-bold text-gray-900 text-3xl leading-9 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h2>
        <p class="font-inter font-light text-zinc-800 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>

      <!-- SVG -->
      <div class="absolute p-9 bg-amber-300 rounded-full translate-x-[7rem] translate-y-[15rem] hover:scale-125 transition duration-150 ease-in-out"></div>
    </div>
  </section>
</template>
