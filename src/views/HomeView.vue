<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CoverContent from '@/components/CoverContent.vue'
import PostContent from '@/components/PostContent.vue'
import AboutUs from '@/components/AboutUsContent.vue'
import CategoryContent from '@/components/CategoryContent.vue'
import DiscoverContent from '@/components/DiscoverContent.vue'
import ListAuthor from '@/components/ListAuthor.vue'
import FeatureIn from '@/components/FeatureIn.vue'
import Testimonial from '@/components/Testimonial.vue'
import Join from '@/components/Join.vue'
</script>

<template>
  <MainLayout>
    <CoverContent />
    <PostContent />
    <AboutUs />
    <h1
      class="text-center mt-32   mb-3 px-20 w-full mx-auto text-4xl font-bold tracking-tighter leading-none text-gray-800"
    >
      Choose A Category
    </h1>
    <CategoryContent />
    <DiscoverContent />
    <ListAuthor />
    <FeatureIn />
    <Testimonial />
    <Join />
  </MainLayout>
</template>
