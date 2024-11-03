<script setup lang="ts"></script>

<template>
  <section class="max-w-[43rem] mx-auto">
    <!-- TITLE -->
    <div class="pt-48 py-6 text-center">
      <h1 class="font-inter font-extrabold tracking-[3px]">CONTACT US</h1>
      <h1 class="mt-1 text-4xl font-bold text-gray-900">
        Let's Start a Conversation
      </h1>
      <p class="font-inter text-sm text-gray-500 mb-7 mt-5 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </div>

    <!-- FORM -->
    <div class="bg-[#FFD050] flex flex-col-2 p-8 gap-10 hover:shadow-lg">
      <div class="ml-7">
        <div
          class="font-inter text-[13px] text-[#4C4C4C] text-opacity-70 pt-2 pb-3 pr-44 border-b border-gray-500 border-opacity-20"
        >
          Working hours
        </div>
        <div class="font-semibold text-lg text-[#4C4C4C] pt-3">
          Monday To Friday
          <br />
          9:00 AM to 8:00 PM
        </div>
        <p class="font-inter text-sm text-[#4C4C4C] text-opacity-70 mb-2">
          Our Support Teams is available 24/7
        </p>
      </div>
      <div>
        <div
          class="font-inter text-[13px] text-[#4C4C4C] text-opacity-70 pt-2 pb-3 pr-40 border-b border-gray-500 border-opacity-20"
        >
          Contact Us
        </div>
        <div class="font-semibold text-lg text-[#4C4C4C] pt-3">
          020 7993 2905
        </div>
        <p class="font-inter text-sm text-[#4C4C4C] text-opacity-70">
          hello@finesweet.com
        </p>
      </div>
    </div>

    <div class="py-7 pb-[6rem]">
      <div class="mb-3">
        <input
          type="text"
          id="name"
          class="font-inter text-sm font-normal w-full p-4 py-5 border border-gray-400 rounded-sm placeholder-opacity-75 focus:outline-none focus:ring-1 focus:ring-black placeholder-black focus:placeholder-opacity-30"
          placeholder="Full Name"
        />
      </div>

      <div class="mb-3">
        <input
          type="email"
          id="email"
          class="font-inter text-sm font-normal w-full p-4 py-5 border border-gray-400 rounded-sm placeholder-opacity-75 focus:outline-none focus:ring-1 focus:ring-black placeholder-black focus:placeholder-opacity-30"
          placeholder="Your Email"
        />
      </div>

      <div class="flex mb-3 gap-4">
        <div class="w-full">
          <select
            id="province"
            class="font-inter w-full text-sm font-normal p-3 py-5 border border-gray-400 rounded-sm"
          >
            <option value="" disabled selected>Province</option>
            <option value="Jawa Barat">Province 1</option>
            <option value="Jawa Barat">Province 2</option>
            <option value="Jawa Barat">Province 3</option>
            <option value="Jawa Barat">Province 4</option>
          </select>
        </div>

        <div class="w-full border border-gray-400 rounded-sm">
          <select
            id="city"
            class="font-inter w-full text-sm font-normal p-3 py-5"
          >
            <option value="" disabled selected>City</option>
            <option value="Jawa Barat">City 1</option>
            <option value="Jawa Barat">City 2</option>
            <option value="Jawa Barat">City 3</option>
            <option value="Jawa Barat">City 4</option>
          </select>
        </div>
      </div>

      <div class="mb-[5px]">
        <textarea
          id="message"
          class="font-inter text-sm font-normal w-full h-32 p-4 py-5 border border-gray-400 rounded-sm placeholder-opacity-65 focus:outline-none focus:ring-1 focus:ring-black placeholder-black focus:placeholder-opacity-30"
          placeholder="Message"
        />
      </div>

      <button
        type="button"
        class="group text-lg block w-full bg-[#075EFD] py-3 mb-10 font-bold hover:bg-yellow-300"
      >
        Send Message
      </button>
    </div>
  </section>
</template>
