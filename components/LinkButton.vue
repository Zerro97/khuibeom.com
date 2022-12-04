<script setup lang="ts">
defineProps({
  to: String,
})
</script>

<template>
  <button class="bg-zinc-900 border-zinc-700 border hover:bg-zinc-800 transition duration-100 rounded px-4 py-2">
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </button>
</template>
