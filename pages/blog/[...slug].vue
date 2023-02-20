<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const route = useRoute()
const page = await queryContent('blog').where({ _path: route.path }).findOne()

const keywords = [...page.tags, ...page.categories].join(',')

useHead({
  meta: [
    { name: 'keywords', content: keywords },
  ],
})

useServerSeoMeta({
  title: page.title,
  description: page.description,
})

defineOgImageStatic({
  component: 'MyOgImage',
  title: page.title,
  description: '',
  background: '#27272a',
})
</script>

<template>
  <NuxtLayout name="main">
    <article>
      <ContentDoc>
        <template #default="{ doc }">
          <section v-if="doc.title" class="flex flex-col mb-6">
            <div class="relative mb-6">
              <nuxt-img
                v-if="doc.banner"
                provider="cloudinary"
                :placeholder="[30, 10]"
                :src="doc.banner"
                width="900px"
                height="300px"
                :alt="doc.title"
                class="w-full aspect-[3/1] object-cover rounded"
              />
              <div v-else class="w-full h-[300px] bg-violet-500 rounded mb-4" />
              <CardIcon size="lg" :logo="doc.icon" class="absolute bottom-0 left-4 translate-y-1/4" />
            </div>
            <h1 class="text-4xl">
              {{ doc.title }}
            </h1>
            <p class="text-zinc-400">
              {{ doc.date && format(parseISO(doc.date), 'MMMM dd, yyyy') }}
            </p>
            <div class="flex items-center mt-4 mb-2 gap-x-4">
              <div class="flex items-center gap-x-2">
                <Icon name="mdi:clock-time-two-outline" />
                <p class="text-base text-zinc-200">
                  {{ doc.time }} min read
                </p>
              </div>
              <div v-for="category in doc.categories" :key="category" class="flex items-center gap-x-2">
                <Icon name="mdi:tag-outline" />
                <p class="text-base text-zinc-200">
                  {{ category }}
                </p>
              </div>
            </div>
            <LineBreak class="mt-1" />
          </section>
          <div class="relative flex gap-x-6 document-article">
            <ContentRenderer class="w-full renderer shrink" :value="doc">
              <template #empty>
                <div class="flex flex-col items-center justify-center w-full py-20">
                  <h1>404</h1>
                  <p>Page Not Found</p>
                </div>
              </template>
            </ContentRenderer>
            <TableOfContent v-if="doc.title" class="hidden md:block" />
          </div>
        </template>
        <template #not-found>
          <h1>404</h1>
          <p>Page Not Found</p>
        </template>
      </ContentDoc>
    </article>
  </NuxtLayout>
</template>

<style>
.renderer h2:first-of-type {
  @apply mt-0;
}
</style>
