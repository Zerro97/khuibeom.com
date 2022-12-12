<script setup lang="ts">
defineProps({
  to: String,
  label: String,
})
</script>

<template>
  <button
    class="px-4 py-2 border rounded bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
    :aria-label="`Link button for ${label}`"
  >
    <NuxtLink :to="to" :aria-label="`Link to ${label}`" class="whitespace-nowrap">
      <slot />
    </NuxtLink>
  </button>
</template>
