<script setup lang="ts">
const props = defineProps<{
  logo: String
  size: 'lg' | 'base'
}>()
</script>

<template>
  <div class="p-2 border rounded w-max bg-zinc-800 border-zinc-700">
    <Icon :name="logo" :class="`${size === 'lg' ? 'text-4xl' : 'text-2xl'}`" />
  </div>
</template>
