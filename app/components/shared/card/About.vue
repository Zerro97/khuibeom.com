<script setup lang="ts">
defineProps<{
  dateFrom: string,
  dateTo: string,
  title: string,
  description: string,
  image: string,
  link: string,
}>()
</script>

<template>
  <div class="flex items-center rounded bg-neutral-900 gap-x-4">
    <div class="p-2 overflow-hidden rounded w-14 h-14 bg-neutral-800">
      <NuxtImg v-if="image" :alt="title" width="40px" :src="image" class="object-contain w-full h-full" />
    </div>
    <div>
      <p class="text-sm text-neutral-400">
        {{ dateFrom }} - {{ dateTo }}
      </p>
      <p class="text-2xl text-white">
        {{ title }}
      </p>
      <NuxtLink v-if="link" :to="link" aria-label="Link to external website" target="_blank" class="flex items-center gap-x-1 text-neutral-200">
        {{ description }}
        <Icon name="uil:external-link-alt" />
      </NuxtLink>
      <p v-else class="text-neutral-200">
        {{ description }} {{ link }}
      </p>
    </div>
  </div>
</template>
