<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import BlogPost from '@/components/BlogPost.vue';
import Post from '@/components/BlogAllPost.vue';
import Category from '@/components/CategoryContent.vue'
import Join from '@/components/Join.vue'
</script>

<template>
    <MainLayout>
        <BlogPost />
        <Post />
        <h1 class="px-24 font-Sen font-bold text-4xl tracking-tighter mt-20">
            All Categories
        </h1>
        <Category />
        <Join />
    </MainLayout>
</template>