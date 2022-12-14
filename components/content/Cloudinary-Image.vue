<script setup type="lang">
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
    <nuxt-img class="mt-2 rounded" provider="cloudinary" :src="src" :alt="alt" :width="width" :height="height" />
    <figcaption class="text-zinc-500">
      {{ figure }}
    </figcaption>
  </figure>
  <nuxt-img v-else class="mt-2 rounded" provider="cloudinary" :src="src" :alt="alt" :width="width" :height="height" />
</template>
