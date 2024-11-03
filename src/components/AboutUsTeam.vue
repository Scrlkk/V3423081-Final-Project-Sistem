<script setup lang="ts"></script>

<template>
  <section class="px-20 mt-24 mb-12">
    <!-- KIRI -->
    <div class="flex items-center justify-between">
      <div class="max-w-xl">
        <h1 class="font-bold text-gray-900 text-4xl">Our team of creatives</h1>
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

      <!-- GAMBAR -->
       
      <div class="h-[480px] w-[624px] overflow-hidden">
        <img
          src="@/assets/images/misc/AboutUs2.png"
          class="object-cover w-full h-full"
        />
      </div>

      <div class="absolute translate-x-[42rem] -translate-y-[5rem] hover:scale-110 transition duration-150 ease-in-out">
        <svg
          width="103"
          height="116"
          viewBox="0 0 103 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 42.8469C0 19.1832 19.4417 0 43.4242 0H103V116H0V42.8469Z"
            fill="#075EFD"
          />
        </svg>
      </div>

    </div>
  </section>
</template>
