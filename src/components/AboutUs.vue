<script setup lang="ts"></script>

<template>
  <section class="pt-36">
    <!-- ATAS -->
    <div class="grid grid-cols-2 content-between px-20 gap-2 space-x-28">
      <div
        class="group max-w-[40rem] translate-x-32 w-full px-14  pt-12 pb-[59px] bg-white z-20 hover:scale-95 hover:bg-[#075EFD] transition duration-300 ease-in-out"
      >
        <div class="pl-5 pr-9">
          <H1 class="font-inter font-normal tracking-[3px] text-lg group-hover:text-white"
            >ABOUT US</H1
          >
          <H1 class="font-bold text-5xl tracking-tight group-hover:text-white leading-tight"
            >We are a team of content writers who share their learnings</H1
          >
        </div>
      </div>
      <div>
        <p class="font-inter mt-16 mr-[89px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

    <!-- GAMBAR -->

    <div class="px-20 h-[500px] w-full overflow-hidden -mt-[68px] z-10">
      <img
        src="@/assets/images/misc/AboutUs1.png"
        class="object-cover w-full h-full object-center"
      />

      <!-- KONTAINER -->
      <div
        class="absolute max-w-[920px] py-4 z-10 bg-amber-400 w-full px-20 translate-x-[115px] -translate-y-[32px]"
      ></div>
      <!-- KONTAINER BIRU -->
      <div
        class="absoulte flex max-w-[670px] z-10 -translate-y-[175px] translate-x-[115px] bg-[#075EFD] p-5 gap-16 pl-12 py-6"
      >
        <div class="flex flex-col leading-tight">
          <h1 class="font-bold text-white text-[60px]">12+</h1>
          <p class="font-inter font-light text-white">Blogs Published</p>
        </div>
        <div class="flex flex-col leading-tight">
          <h1 class="font-bold text-white text-[60px]">18k+</h1>
          <p class="font-inter font-light text-white">Views on Finesweet</p>
        </div>
        <div class="flex flex-col leading-tight">
          <h1 class="font-bold text-white text-[60px]">30k+</h1>
          <p class="font-inter font-light text-white">Total active Users</p>
        </div>
      </div>
    </div>


    <!-- BAWAHNYA -->
    <div class="px-20">

        <!-- 1 -->
      <div class="flex bg-[#F4F0F8] py-20 justify-center gap-32">
          <div class="max-w-md">
            <h1 class="font-inter tracking-widest font-semibold text-gray-700">OUR MISION</h1>
            <h2 class="font-bold tracking-tighter text-3xl text-gray-800 py-3  ">Creating valuable content for creatives all around the world</h2>
            <p class="font-inter text-sm text-zinc-500 max-w-[46rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>

          <!-- 2 -->
          <div class="max-w-md">
            <h1 class="font-inter tracking-widest font-semibold text-gray-700">OUR VISION</h1>
            <h2 class="font-bold tracking-tighter text-3xl text-gray-800 py-3">A platform that empowers individuals to improve</h2>
            <p class="font-inter text-sm text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
      </div>
    </div>
  </section>
</template>
