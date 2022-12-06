<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  year: String,
  image: String,
  icons: Array,
  repo: String,
  slug: String,
  livelink: String,
})
</script>

<template>
  <div class="flex flex-col justify-between p-4 border rounded border-zinc-700">
    <div class="flex flex-col">
      <div class="flex justify-between">
        <div>
          <p class="text-base text-violet-400">
            {{ year }}
          </p>
          <h4>{{ title }}</h4>
        </div>
        <button v-if="repo" class="flex items-center justify-center w-8 h-8 rounded gap-x-1 hover:bg-zinc-800">
          <NuxtLink>
            <Icon name="mdi:github" class="text-2xl" />
          </NuxtLink>
        </button>
      </div>
      <p class="text-base text-zinc-400">
        {{ description }}
      </p>
    </div>
    <div class="flex flex-wrap mt-4 gap-x-4 gap-y-4">
      <nuxt-img :src="image" class="object-cover object-top w-full h-[150px] rounded" />
      <NuxtLink v-if="slug" class="flex items-center px-4 py-1 rounded w-max gap-x-1 bg-zinc-800 hover:bg-zinc-700" :to="`/project/${slug}`">
        <button class="">
          See More
        </button>
        <Icon name="ic:baseline-subdirectory-arrow-right" />
      </NuxtLink>
      <NuxtLink v-if="livelink" class="flex items-center px-4 py-1 rounded w-max gap-x-1 bg-zinc-800 hover:bg-zinc-700" :to="livelink">
        <button>
          Live Site
        </button>
        <Icon name="mdi:link-variant" />
      </NuxtLink>
    </div>
  </div>
</template>
