<script setup lang="ts">
import type { Collections, BlogCollectionItem } from '@nuxt/content'

useHead({
  meta: [
    { name: 'keywords', content: 'blog, portfolio, tech, dev, web' },
  ],
})

useSeoMeta({
  title: 'Home',
  description: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea. I\'m using this site to document my learnings and share with the world what I have learnt.',
})

const route = useRoute()
const { data: posts } = await useAsyncData('post', () => {
  const collection = 'blog' as keyof Collections

  return queryCollection(collection)
    .order('date', 'DESC')
    .limit(4)
    .all()
})

const { data: projects } = await useAsyncData(`${route.path}_project`, () => {
  const collection = 'project' as keyof Collections

  return queryCollection(collection)
    .order('from_date', 'DESC')
    .limit(4)
    .all()
})
</script>

<template>
  <div class="mt-14 sm:mt-16 md:mt-20">
    <section class="flex flex-col w-full">
      <h1>
        Hi, I'm
        <span class="whitespace-nowrap">Hui Beom</span>
      </h1>
      <p class="mt-6 text-xl">
        Welcome to my site. 👋<br><br>
        I aim to use this site to share and document what I have learnt.<br> Hope you enjoy!
      </p>
      <div class="flex flex-wrap mt-8 gap-y-2 gap-x-4">
        <NuxtLink to="/about" label="about">
          <button class="glass-button">
            Learn more about me
          </button>
        </NuxtLink>
        <NuxtLink to="/blog" label="blog">
          <button class="glass-button">
            Blog
          </button>
        </NuxtLink>
      </div>
    </section>
    <section class="flex flex-col w-full mt-14 sm:mt-16 md:mt-20">
      <div class="flex items-center justify-between">
        <h2>
          Latest Posts
        </h2>
        <NuxtLink to="/blog" label="blog">
          <button class="glass-button">
            View All
          </button>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
        <PostCard
          v-for="(post, index) in posts"
          :key="post.slug"
          :tags="post.tags"
          :categories="post.categories"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :time="post.time"
          :banner="post.banner"
          :icon="post.icon"
          :link="post.slug"
          :class="`translate-x-[${index * 50}px]`"
        />
      </div>
    </section>
    <section class="flex flex-col w-full mt-14 sm:mt-16 md:mt-20">
      <div class="flex items-center justify-between">
        <h2>
          Projects
        </h2>
        <NuxtLink to="/project" label="project">
          <button class="glass-button">
            View All
          </button>
        </NuxtLink>
      </div>
      <div class="grid w-full grid-cols-1 gap-2 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardProject
          v-for="project in projects"
          :key="project.slug"
          :title="project.title"
          :description="project.description"
          :year="project.year"
          :image="project.image"
          :slug="project.slug"
          :livelink="project.livelink"
          :repo="project.repo"
        />
      </div>
    </section>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
