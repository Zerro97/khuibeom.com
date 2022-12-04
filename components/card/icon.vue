<script setup lang="ts">
const props = defineProps<{
  logo?: String
  size?: 'lg' | 'base'
}>()
</script>

<template>
  <div
    :class="`${size === 'lg' ? 'w-[60px] h-[60px]' : 'w-[46px] h-[46px]'}`"
    class="flex items-center justify-center border rounded bg-zinc-800 border-zinc-700"
  >
    <Icon :name="logo" :class="`${size === 'lg' ? 'text-4xl' : 'text-2xl'}`" />
  </div>
</template>
