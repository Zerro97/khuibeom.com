<script setup lang="ts">
import { format, parseISO } from 'date-fns'

definePageMeta({
  layout: 'main',
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('project').path(route.path).first()
})

if (page.value) {
  useHead({
    meta: [
      { name: 'keywords', content: page.value.keywords },
    ],
  })

  useSeoMeta({
    title: () => `${page.value?.title}`,
    ogTitle: () => `${page.value?.title}`,
    description: () => page.value?.description,
    ogDescription: () => page.value?.description,
  })

  // defineOgImageStatic({
  //   component: 'MyOgImage',
  //   title: 'Project',
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
          <div v-else class="w-full aspect-[3/1] bg-violet-500 rounded" />
          <CardIcon size="lg" :logo="page.icon" class="absolute bottom-0 left-4 translate-y-1/4" />
        </div>
        <NuxtLink v-if="page.livelink" target="_blank" :to="page.livelink" class="flex items-center gap-x-2">
          <h1 class="text-3xl sm:text-4xl">
            {{ page.title }}
          </h1>
          <Icon name="uil:external-link-alt" class="text-2xl" />
        </NuxtLink>
        <h1 v-else class="text-3xl sm:text-4xl">
          {{ page.title }}
        </h1>
        <p class="text-zinc-400">
          {{ format(parseISO(page.from_date), 'MMMM yyyy') }}
          ~
          {{ page.to_date.toLowerCase() === 'present' ? page.to_date : format(parseISO(page.to_date), 'MMMM yyyy') }}
        </p>
        <div class="flex items-center gap-x-4">
          <div class="flex items-center mt-1 mb-2 gap-x-1">
            <Icon name="mdi:human-male-male" />
            <p class="text-base text-zinc-200">
              {{ page.team }} contributor
            </p>
          </div>
          <div v-if="page.repo">
            <NuxtLink :to="page.repo" target="_blank" class="flex items-center mt-1 mb-2 gap-x-1">
              <Icon name="mdi:github" />
              <p class="underline decoration-violet-400 decoration-2 text-violet-300">
                Source Code
              </p>
            </NuxtLink>
          </div>
        </div>
        <LineBreak class="mt-1" />
      </section>
      <div class="flex gap-x-6 document-article">
        <ContentRenderer class="w-full renderer first:m-0" :value="page">
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
