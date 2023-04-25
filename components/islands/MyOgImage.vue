<script setup lang="ts">
const props = defineProps({
  title: String,
  content: String,
  backgroundColor: String,
})
</script>

<template>
  <div :class="[backgroundColor]" class="flex items-center justify-center w-full h-full text-white">
    <div class="flex flex-row items-center ml-10 mr-10">
      <img src="/favicon/apple-touch-icon.png" class="mr-8" width="200" height="200">
      <div>
        <h1 :style="{ fontSize: '70px' }" class="m-0">
          {{ title }}
        </h1>
        <p v-if="content" class="mt-4 text-2xl text-zinc-200">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>
