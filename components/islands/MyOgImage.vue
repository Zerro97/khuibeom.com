<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  backgroundColor: String,
})
</script>

<template>
  <div :class="[backgroundColor]" class="w-full h-full flex text-white items-center justify-center">
    <div class="flex items-center ml-20 mr-20">
      <NuxtImg src="/favicon/apple-touch-icon.png" class="mr-8" />
      <div class="flex flex-col">
        <h1 :style="{ fontSize: '70px' }" class="m-0">
          {{ title }}
        </h1>
        <p v-if="description" class="text-zinc-200 text-2xl mt-4">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
