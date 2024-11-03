<script setup lang="ts"></script>

<template>
  <section class="flex flex-col mt-30 px-20 w-full mt-20">
    <!-- BORDER -->
    <div
      class="absolute -mt-6 right-0 w-full py-3 bg-x-yellow max-w-[71rem] transform -translate-x-20 z-10"
    ></div>
    <div
      class="absolute -mt-6 right-0 w-full py-3 bg-x-blue max-w-[21rem] transform -translate-x-20 z-20"
    ></div>

    <!-- ISI -->
    <section class="px-20 py-32 w-full bg-[#F4F0F8]">
      <div class="flex gap-5 px-5">
        <article class="flex flex-col w-6/12">
          <div class="flex flex-col grow text-base font-bold text-gray-800">
            <h2
              class="self-start font-bold font-inter leading-none uppercase tracking-[3px]"
            >
              ABOUT US
            </h2>
            <h3 class="mt-6 text-4xl tracking-tighter leading-10 max-w-[31rem]">
              We are a community of content writers who share their learnings
            </h3>
            <p class="font-inter mt-4 mr-6 leading-7 font-light text-zinc-500 max-w-[31rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="/AboutUs"
              class="self-start mt-7 text-lg leading-8 text-amber-300"
            >
              Read More &gt;
            </a>
          </div>
        </article>
        <article class="flex flex-col ml-5 w-6/12">
          <div class="flex flex-col items-start text-base text-gray-800">
            <h2 class="font-bold font-inter leading-none uppercase tracking-[3px]">
              Our mision
            </h2>
            <h3 class="mt-6 text-3xl font-bold tracking-tighter leading-10 max-w-[29rem]">
              Creating valuable content for creatives all around the world
            </h3>
            <p class="font-inter self-stretch mt-4 leading-7 text-zinc-500 max-w-[510px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>
