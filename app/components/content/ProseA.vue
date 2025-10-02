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
  <NuxtLink :href="href" target="_blank" class="underline decoration-violet-400 decoration-2 text-violet-300">
    <slot />
  </NuxtLink>
</template>
