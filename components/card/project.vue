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
        <NuxtLink v-if="repo" aria-label="Link to Github" :to="repo" target="_blank">
          <button aria-label="Github Link" class="flex items-center justify-center w-8 h-8 rounded gap-x-1 hover:bg-zinc-800">
            <Icon name="mdi:github" class="text-2xl" />
          </button>
        </NuxtLink>
      </div>
      <p class="text-base text-zinc-400">
        {{ description }}
      </p>
      <nuxt-img
        :src="image"
        :alt="title"
        :placeholder="[20, 10]"
        provider="cloudinary"
        width="400px"
        height="200px"
        class="object-cover object-top w-full rounded aspect-[4/2] mt-4"
      />
    </div>
    <div class="flex flex-wrap mt-4 gap-x-4 gap-y-2">
      <NuxtLink v-if="slug" aria-label="Read more about this project" class="flex items-center px-4 py-1 rounded w-max gap-x-1 bg-zinc-800 hover:bg-zinc-700" :to="`/project/${slug}`">
        Read More
      </NuxtLink>
      <NuxtLink v-if="livelink" aria-label="Link to live site" target="_blank" class="flex items-center px-4 py-1 rounded w-max gap-x-1 bg-zinc-800 hover:bg-zinc-700" :to="livelink">
        Live Site
      </NuxtLink>
    </div>
  </div>
</template>
