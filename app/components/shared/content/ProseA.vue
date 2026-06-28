<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLink :href="href" target="_blank" class="underline decoration-primary-400 decoration-2 text-primary-300">
    <slot />
  </NuxtLink>
</template>
