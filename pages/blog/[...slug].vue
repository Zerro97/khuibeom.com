<script setup lang="ts">
import { format, parseISO } from 'date-fns'
</script>

<template>
  <NuxtLayout>
    <article>
      <ContentDoc v-slot="{ doc }">
        <section class="flex flex-col mb-6">
          <div class="relative mb-6">
            <nuxt-img
              v-if="doc.banner"
              :src="doc.banner"
              sizes="sm:400px md:600px lg:700px"
              class="w-full h-[300px] object-cover rounded"
            />
            <div v-else class="w-full h-[300px] bg-violet-500 rounded mb-4" />
            <CardIcon size="lg" :logo="doc.icon" class="absolute bottom-0 left-4 translate-y-1/4" />
          </div>
          <h1 class="text-4xl">
            {{ doc.title }}
          </h1>
          <p class="text-zinc-400">
            {{ format(parseISO(doc.date), 'MMMM dd, yyyy') }}
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
          <ContentRenderer class="w-full renderer shrink" :value="doc" />
          <TableOfContent />
        </div>
      </ContentDoc>
    </article>
  </NuxtLayout>
</template>

<style>
.renderer h2:first-of-type {
  @apply mt-0;
}
.renderer h3:first-of-type {
  @apply mt-0;
}
.renderer h4:first-of-type {
  @apply mt-0;
}
</style>
