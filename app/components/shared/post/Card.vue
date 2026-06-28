<script setup lang="ts">
import { format, parseISO } from 'date-fns'

defineProps<{
  title: string,
  description: string,
  tags: string[],
  categories: string[],
  date: string,
  time: number,
  banner: string,
  icon: string,
  link: string,
}>()
</script>

<template>
  <NuxtLink :to="`/blog/${link}`" aria-label="Link to article" class="transition flex flex-col w-full overflow-hidden border rounded aspect-auto border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:cursor-pointer">
    <div class="relative">
      <NuxtImg
        v-if="banner"
        :alt="title"
        :placeholder="[30, 10]"
        width="600px"
        height="200px"
        :src="banner"
        class="object-cover w-full h-full aspect-[6/2]"
      />
      <div v-else class="w-full h-full bg-primary-500" />
      <div class="absolute top-0 flex mt-2 ml-4 gap-x-1">
        <PostTag v-for="tag in tags" :key="tag">
          {{ tag }}
        </PostTag>
      </div>
      <CardIcon :logo="icon" class="absolute bottom-0 left-4 translate-y-1/4" />
    </div>
    <div class="p-4 mt-1 min-h-max">
      <h4>
        {{ title }}
      </h4>
      <p class="text-base text-neutral-400 font-medium">
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
      <p class="mt-3 text-base text-neutral-400">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
