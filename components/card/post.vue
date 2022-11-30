<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  categories: Array,
  date: String,
  time: Number,
  banner: String,
  link: String,
})
</script>

<template>
  <NuxtLink :to="`/blog/${link}`" class="flex flex-col w-full overflow-hidden border rounded border-zinc-700 hover:bg-zinc-800 hover:cursor-pointer">
    <div class="relative">
      <nuxt-img v-if="banner" :src="banner" class="object-cover w-full h-[140px]" />
      <div v-else class="bg-violet-500 w-full h-[140px]" />
      <div class="absolute top-0 flex mt-2 ml-4 gap-x-1">
        <TagPost v-for="tag in tags" :key="tag">
          {{ tag }}
        </TagPost>
      </div>
      <CardIcon logo="logos:vitest" class="absolute bottom-0 left-4 translate-y-1/4" />
    </div>
    <div class="p-4 mt-1">
      <h5 class="font-bold">
        {{ title }}
      </h5>
      <p class="text-base font-medium text-zinc-400">
        {{ format(parseISO(date), 'MMMM dd, yyyy') }}
      </p>
      <div class="flex mt-1 gap-x-3">
        <div class="flex items-center gap-x-1">
          <Icon name="mdi:clock-time-eight-outline" class="text-lg" />
          <p class="text-sm">
            {{ time }} min read
          </p>
        </div>
        <div v-for="category in categories" :key="category" class="flex items-center gap-x-1">
          <Icon name="mdi:tag-outline" class="text-lg" />
          <p class="text-sm">
            {{ category }}
          </p>
        </div>
      </div>
      <p class="mt-3 text-base text-zinc-400">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
