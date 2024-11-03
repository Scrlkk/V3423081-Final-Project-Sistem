<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import Title from '@/components/BlogReview.vue'
import Post from '@/components/BlogPostReview.vue'
import Card from '@/components/BlogCardReview.vue'
import Join from '@/components/Join.vue'
</script>

<template>
    <MainLayout>
        <Title />
        <Post />
        <Card />
        <Join />
    </MainLayout>
</template>