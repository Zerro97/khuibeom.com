<script setup lang="ts">
defineProps<{
  logo?: string
  size?: 'lg' | 'base'
}>()
</script>

<template>
  <div
    :class="`${size === 'lg' ? 'w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]' : 'w-[46px] h-[46px]'}`"
    class="flex items-center justify-center border rounded bg-zinc-800 border-zinc-700"
  >
    <Icon :name="logo" :class="`${size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-2xl'}`" />
  </div>
</template>
