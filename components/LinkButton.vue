<script setup lang="ts">
defineProps({
  to: String,
})
</script>

<template>
  <button class="px-4 py-2 border rounded bg-zinc-900 border-zinc-700 hover:bg-zinc-800">
    <NuxtLink :to="to" class="whitespace-nowrap">
      <slot />
    </NuxtLink>
  </button>
</template>
