<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const print = (test) => {
  // console.log(test)
}
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <section class="flex flex-col mb-6">
        <div class="relative mb-6">
          <nuxt-img
            v-if="doc.banner"
            src="/images/banners/post-1.jpg"
            sizes="sm:400px md:600px lg:700px"
            class="w-full h-[300px] object-cover rounded"
          />
          <div v-else class="w-full h-[300px] bg-violet-500 rounded mb-4" />
          <CardIcon size="lg" logo="logos:vitest" class="absolute bottom-0 left-4 translate-y-1/4" />
        </div>
        <h1 class="text-4xl">
          {{ doc.title }}
        </h1>
        <p class="text-zinc-400">
          {{ format(parseISO(doc.date), 'MMMM dd, yyyy') }}
        </p>
        <div class="flex items-center mt-4 mb-2 gap-x-2">
          <Icon name="mdi:clock-time-two-outline" />
          <p class="text-base text-zinc-200">
            {{ doc.time }} min read
          </p>
        </div>
        <LineBreak class="mt-1" />
      </section>
      <ContentRenderer class="first:m-0" :value="doc" />
    </ContentDoc>
  </article>
</template>
