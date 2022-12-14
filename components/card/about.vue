<script setup lang="ts">
const props = defineProps({
  dateFrom: String,
  dateTo: String,
  title: String,
  description: String,
  image: String,
  link: String,
})
</script>

<template>
  <div class="flex items-center rounded bg-zinc-900 gap-x-4">
    <div class="p-2 overflow-hidden rounded w-14 h-14 bg-zinc-800">
      <nuxt-img v-if="image" provider="cloudinary" :alt="title" width="40px" :src="image" class="object-contain w-full h-full" />
    </div>
    <div>
      <p class="text-sm text-zinc-400">
        {{ dateFrom }} - {{ dateTo }}
      </p>
      <p class="text-2xl text-white">
        {{ title }}
      </p>
      <NuxtLink v-if="link" :to="link" aria-label="Link to external website" target="_blank" class="flex items-center gap-x-1 text-zinc-200">
        {{ description }}
        <Icon name="uil:external-link-alt" />
      </NuxtLink>
      <p v-else class="text-zinc-200">
        {{ description }} {{ link }}
      </p>
    </div>
  </div>
</template>
