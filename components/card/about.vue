<script setup lang="ts">
const props = defineProps({
  dateFrom: String,
  dateTo: String,
  title: String,
  description: String,
  image: String,
})
</script>

<template>
  <div class="flex items-center rounded bg-zinc-900 gap-x-4">
    <div class="p-2 overflow-hidden rounded w-14 h-14 bg-zinc-800">
      <nuxt-img v-if="image" :src="image" class="object-contain w-full h-full" />
    </div>
    <div>
      <p class="text-sm text-zinc-400">
        {{ dateFrom }} - {{ dateTo }}
      </p>
      <p class="text-2xl text-white">
        {{ title }}
      </p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
