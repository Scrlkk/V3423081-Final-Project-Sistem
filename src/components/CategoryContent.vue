<script setup lang="ts"></script>
<template>
  <section class="flex flex-col px-20 w-full mb-36">
    <!-- KATEGORI -->
    <div class="mt-12">
      <div class="flex gap-5">
        <!-- BUSINESS -->
        <article
          class="group flex flex-col w-3/12 hover:shadow-xl hover:bg-[#075EFD] hover:scale-105 transition duration-150 ease-in-out"
        >
          <router-link to="/Category">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-gray-300 group-hover:border-none"
            >
              <img
                src="@/assets/Business.svg"
                class="bg-[#FBF6EA] rounded-lg"
              />
              <h3
                class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white transition-duration-150 ease-in-out"
              >
                Business
              </h3>
              <p
                class="self-stretch mt-2 text-base font-inter leading-7 text-zinc-500 group-hover:text-white transition duration-150 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </router-link>
        </article>

        <!-- STARTUP -->
        <article
          class="group flex flex-col w-3/12 hover:bg-[#075EFD] hover:shadow-xl hover:scale-105 transition duration-150 ease-in-out"
        >
          <router-link to="/Category">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-gray-300 group-hover:border-none"
            >
              <img
                src="@/assets/Rocket.svg"
                class="bg-[#FBF6EA] p-3 rounded-lg"
              />
              <h3
                class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white transition-duration-150 ease-in-out"
              >
                Startup
              </h3>
              <p
                class="font-inter self-stretch mt-2 text-base leading-7 text-zinc-500 group-hover:text-white transition duration-150 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </router-link>
        </article>

        <!-- ECONOMY -->
        <article
          class="group flex flex-col w-3/12 hover:bg-[#075EFD] hover:shadow-xl hover:scale-105 transition duration-150 ease-in-out"
        >
          <router-link to="/Category">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-gray-300 group-hover:border-none"
            >
              <img
                src="@/assets/Economy.svg"
                class="bg-[#FBF6EA] p-3 rounded-lg mb-1"
              />
              <h3
                class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white transition-duration-150 ease-in-out"
              >
                Economy
              </h3>
              <p
                class="font-inter self-stretch mt-1 text-base leading-7 text-zinc-500 group-hover:text-white transition duration-150 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </router-link>
        </article>

        <!-- TECHNOLOGY -->
        <article
          class="group flex flex-col w-3/12 hover:bg-[#075EFD] hover:shadow-xl hover:scale-105 transition duration-150 ease-in-out"
        >
          <router-link to="/Category">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-gray-300 group-hover:border-none"
            >
              <img
                src="@/assets/Tech.svg"
                class="bg-[#FBF6EA] p-3 rounded-lg mb-1"
              />
              <h3
                class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white transition-duration-150 ease-in-out"
              >
                Technology
              </h3>
              <p
                class="font-inter self-stretch mt-1 text-base leading-7 text-zinc-500 group-hover:text-white transition duration-150 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>
