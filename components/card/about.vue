<script setup lang="ts">
const props = defineProps({
  date: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="rounded bg-zinc-900">
    <p>{{ date }}</p>
    <p>{{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>
