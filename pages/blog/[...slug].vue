<script setup lang="ts">
import { format, parseISO } from 'date-fns'

definePageMeta({
  layout: 'main',
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (page.value) {
  const keywords = [...page.value?.tags, ...page.value.categories].join(',')

  useHead({
    meta: [
      { name: 'keywords', content: keywords },
    ],
  })

  useSeoMeta({
    title: () => `${page.value?.title} | Hui Beom`,
    ogTitle: () => `${page.value?.title} | Hui Beom`,
    description: () => page.value?.description,
    ogDescription: () => page.value?.description,
  })

  // defineOgImageStatic({
  //   component: 'MyOgImage',
  //   title: 'Blog',
  //   description: '',
  //   background: '#27272a',
  // })
}
</script>

<template>
  <article>
    <template v-if="page">
      <section v-if="page.title" class="flex flex-col mb-6">
        <div class="relative mb-6">
          <nuxt-img
            v-if="page.banner"
            provider="cloudinary"
            :placeholder="[30, 10]"
            :src="page.banner"
            width="900px"
            height="300px"
            :alt="page.title"
            class="w-full aspect-[3/1] object-cover rounded"
          />
          <div v-else class="w-full h-[300px] bg-violet-500 rounded mb-4" />
          <CardIcon size="lg" :logo="page.icon" class="absolute bottom-0 left-4 translate-y-1/4" />
        </div>
        <h1 class="text-3xl sm:text-4xl">
          {{ page.title }}
        </h1>
        <p class="text-zinc-400">
          {{ page.date && format(parseISO(page.date), 'MMMM dd, yyyy') }}
        </p>
        <div class="flex items-center mt-4 mb-2 gap-x-4">
          <div class="flex items-center gap-x-2">
            <Icon name="mdi:clock-time-two-outline" />
            <p class="text-base text-zinc-200">
              {{ page.time }} min read
            </p>
          </div>
          <div v-for="category in page.categories" :key="category" class="flex items-center gap-x-2">
            <Icon name="mdi:tag-outline" />
            <p class="text-base text-zinc-200">
              {{ category }}
            </p>
          </div>
        </div>
        <LineBreak class="mt-1" />
      </section>
      <div class="relative flex gap-x-6 document-article">
        <ContentRenderer class="w-full renderer shrink" :value="page">
          <template #empty>
            <div class="flex flex-col items-center justify-center w-full py-20">
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          </template>
        </ContentRenderer>
        <TableOfContent v-if="page.title" class="hidden md:block" />
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col items-center w-full">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </template>
  </article>
</template>

<style>
.renderer h2:first-of-type {
  @apply mt-0;
}
</style>
