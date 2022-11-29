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
  <NuxtLink :to="`/blog/${link}`" class="flex flex-col w-full overflow-hidden rounded hover:bg-zinc-800 hover:cursor-pointer">
    <div class="relative">
      <img v-if="image" src="">
      <div v-else class="bg-violet-500 w-full h-[110px]" />
      <div class="absolute top-0 mt-2 ml-4">
        <TagPost />
      </div>
      <CardIcon logo="logos:vitest" class="absolute bottom-0 left-4 translate-y-1/4" />
    </div>
    <div class="p-4 mt-1">
      <h5 class="font-bold">
        Introduction to Node.js
      </h5>
      <p class="text-base font-bold text-zinc-500">
        November 8 2022
      </p>
      <div class="flex items-center mt-3 gap-x-1">
        <Icon name="mdi:clock-time-eight-outline" class="text-lg" />
        <p class="text-sm">
          4 min read
        </p>
      </div>
      <p class="mt-3 text-zinc-200">
        Description
      </p>
    </div>
  </NuxtLink>
</template>
