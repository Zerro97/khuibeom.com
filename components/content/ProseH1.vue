<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h1 :id="id" class="text-4xl">
    <slot />
  </h1>
</template>
