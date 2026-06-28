<script setup lang="ts">
defineProps({
  to: String,
  label: String,
  target: String,
})
</script>

<template>
  <NuxtLink :to="to" :aria-label="`Link to ${label}`" :target="target" class="flex items-center whitespace-nowrap gap-x-2">
    <button
      class="transition px-4 py-2 border border-neutral-700 rounded bg-neutral-900 hover:bg-neutral-800"
      :aria-label="`Link button for ${label}`"
    >
      <slot />
    </button>
  </NuxtLink>
</template>
