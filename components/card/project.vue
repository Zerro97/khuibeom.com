<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  date: String,
  image: String,
  icons: Array,
})
</script>

<template>
  <div class="flex flex-col p-3 rounded bg-zinc-800">
    <div class="flex justify-between">
      <div>
        <p class="text-base text-violet-400">
          {{ date }}
        </p>
        <h4>{{ title }}</h4>
      </div>
      <button class="flex items-center justify-center w-8 h-8 rounded gap-x-1 hover:bg-zinc-700">
        <NuxtLink>
          <Icon name="mdi:github" class="text-2xl" />
        </NuxtLink>
      </button>
    </div>
    <div>
      <p class="text-base text-zinc-400">
        {{ description }}
      </p>
      <nuxt-img :src="image" class="object-cover object-top w-full h-[150px] rounded mt-2" />
    </div>
    <!-- <nuxt-img :src="image" /> -->
    <div class="flex flex-wrap mt-4 gap-x-4 gap-y-2">
      <button class="flex items-center px-4 py-1 rounded w-max gap-x-1 bg-zinc-700">
        <NuxtLink>See More</NuxtLink>
        <Icon name="ic:baseline-subdirectory-arrow-right" />
      </button>
      <button class="flex items-center px-4 py-1 rounded w-max gap-x-1 bg-zinc-700">
        <NuxtLink>Live Site</NuxtLink>
        <Icon name="mdi:link-variant" />
      </button>
    </div>
  </div>
</template>
