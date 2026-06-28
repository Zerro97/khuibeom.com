<script setup lang="ts">
const props = defineProps({
  type: String,
})
</script>

<template>
  <div class="w-full px-4 py-2 rounded border-l-5 bg-neutral-800 border-neutral-700">
    <div class="flex">
      <Icon name="openmoji:warning" class="text-2xl" />
      <p class="ml-2">
        Note
      </p>
    </div>
    <p class="mt-0.5 text-neutral-400">
      <slot />
    </p>
  </div>
</template>
