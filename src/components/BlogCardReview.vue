<script setup lang="ts">
import Post1 from '@/assets/images/misc/BlogPost2.png'
import Post2 from '@/assets/images/misc/BlogPost3.png'
import Post3 from '@/assets/images/misc/BlogPost4.png'
</script>

<template>
  <section class="px-20 py-20 mb-14">
    <!-- TITLE -->
    <div class="font-bold text-[38px] tracking-tighter mb-12">
      What to read next
    </div>

    <div class="flex justify-between w-full border-b border-gray-400">
      <!-- Card 1 -->
      <div
        class="hover:shadow-xl hover:bg-amber-100 hover:scale-90 transititon duration-150 ease-in-out px-6 py-5 mb-9"
      >
        <router-link to="/Blog">
          <div class="flex-1 max-w-[405px]">
            <div class="w-full h-[318px] overflow-hidden mb-3">
              <img
                :src="Post1"
                class="object-cover w-full h-full -object-[12px]"
              />
            </div>
            <div>
              <a class="text-sm font-thin leading-none tracking-wide">
                By <span class="text-amber-300">Jhon Doe</span> | Aug 23, 2021
              </a>
              <h1 class="font-bold text-2xl mb-3 mt-3">
                A UX Case Study Creating a Studious Environment for Students:
              </h1>
              <p class="font-inter text-zinc-500 max-w-[380px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Card 2 -->
      <div
        class="hover:shadow-xl hover:bg-amber-100 hover:scale-90 transititon duration-150 ease-in-out px-6 py-5 mb-9"
      >
        <router-link to="/Blog">
          <div class="flex-1 max-w-[405px]">
            <div class="w-full h-[318px] overflow-hidden mb-3">
              <img
                :src="Post2"
                class="object-cover w-full h-full -object-[12px]"
              />
            </div>
            <div>
              <a class="text-sm font-thin leading-none tracking-wide">
                By <span class="text-amber-300">Jhon Doe</span> | Aug 23, 2021
              </a>
              <h1 class="font-bold text-2xl mb-3 mt-3">
                A UX Case Study Creating a Studious Environment for Students:
              </h1>
              <p class="font-inter text-zinc-500 max-w-[380px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Card 3 -->
      <div
        class="hover:shadow-xl hover:bg-amber-100 hover:scale-90 transititon duration-150 ease-in-out px-6 py-5 mb-9"
      >
        <router-link to="/Blog">
          <div class="flex-1 max-w-[405px]">
            <div class="w-full h-[318px] overflow-hidden mb-3">
              <img
                :src="Post3"
                class="object-cover w-full h-full -object-[12px]"
              />
            </div>
            <div>
              <a class="text-sm font-thin leading-none tracking-wide">
                By <span class="text-amber-300">Jhon Doe</span> | Aug 23, 2021
              </a>
              <h1 class="font-bold text-2xl mb-3 mt-3">
                A UX Case Study Creating a Studious Environment for Students:
              </h1>
              <p class="font-inter text-zinc-500 max-w-[380px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
