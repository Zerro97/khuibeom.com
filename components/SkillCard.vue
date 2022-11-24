<script setup lang="ts">
const props = defineProps({
  maxLevel: Number,
  curLevel: Number,
  logo: String,
  name: String,
})
</script>

<template>
  <div class="flex w-full p-2 rounded gap-x-4 bg-zinc-800">
    <Icon name="logos:javascript" class="h-full text-4xl rounded aspect-square" />
    <div class="flex flex-col w-full">
      <h4>{{ name }}</h4>
      <div class="grid w-full grid-cols-6 gap-x-1">
        <div v-for="n in maxLevel" :key="n" class="w-full h-3 rounded bg-zinc-900" />
      </div>
    </div>
  </div>
</template>
