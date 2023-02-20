<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  backgroundColor: String,
})
</script>

<template>
  <div :class="[backgroundColor]" class="flex items-center justify-center w-full h-full text-white">
    <div class="flex items-center ml-20 mr-20">
      <img src="/favicon/apple-touch-icon.png" class="mr-8" width="200" height="200">
      <div class="flex flex-col">
        <h1 :style="{ fontSize: '70px' }" class="m-0">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-4 text-2xl text-zinc-200">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
