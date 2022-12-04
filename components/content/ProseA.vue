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
  <NuxtLink :href="href" class="underline decoration-violet-400 decoration-2 text-violet-300">
    <slot />
  </NuxtLink>
</template>
