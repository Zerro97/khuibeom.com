<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  date: String,
  time: Number,
  image: String,
  link: String,
})
</script>

<template>
  <NuxtLink :to="`/blog/${link}`" class="w-full rounded flex flex-col hover:bg-zinc-800 hover:cursor-pointer overflow-hidden">
    <div class="relative">
      <img v-if="image" src="">
      <div v-else class="bg-violet-500 w-full h-[110px]" />
      <div class="absolute top-0 ml-4 mt-2">
        <TagPost />
      </div>
      <div class="absolute bottom-0 bg-zinc-800 rounded p-2 ml-4 translate-y-1/4 border border-zinc-700">
        <Icon name="logos:vitest" class="text-3xl" />
      </div>
    </div>
    <div class="p-4 mt-1">
      <h5 class="font-bold">
        Introduction to Node.js
      </h5>
      <p class="font-bold text-zinc-500 text-base">
        November 8 2022
      </p>
      <div class="flex items-center gap-x-1 mt-3">
        <Icon name="mdi:clock-time-eight-outline" class="text-lg" />
        <p class="text-sm">
          4 min read
        </p>
      </div>
      <p class="text-zinc-200 mt-3">
        Description
      </p>
    </div>
  </NuxtLink>
</template>
