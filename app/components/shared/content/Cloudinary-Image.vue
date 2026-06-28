<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  figure: {
    type: String,
  },
})
</script>

<template>
  <figure v-if="figure">
    <NuxtImg class="mt-2 rounded" :src="src" :alt="alt" :width="width" :height="height" />
    <figcaption class="text-neutral-500">
      {{ figure }}
    </figcaption>
  </figure>
  <NuxtImg v-else class="mt-2 rounded" :src="src" :alt="alt" :width="width" :height="height" />
</template>
