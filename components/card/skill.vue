<script setup lang="ts">
const props = defineProps({
  maxLevel: { type: Number, default: 10 },
  curLevel: { type: Number, default: 5 },
  logo: String,
  name: String,
})

const levelPercent = computed(() => props.curLevel / props.maxLevel * 100.0)
</script>

<template>
  <div class="flex w-full py-2 px-5 rounded gap-x-5 bg-zinc-800 hover:bg-zinc-700">
    <Icon :name="logo" class="h-full text-4xl rounded aspect-square" />
    <div class="flex flex-col w-full">
      <h4>{{ name }}</h4>
      <div class="w-full mt-1">
        <div class="w-full h-5 rounded overflow-hidden bg-zinc-900 relative">
          <div class="h-full bg-violet-500 absolute flex justify-center items-center" :style="{ width: `${levelPercent}%` }" />
          <p class="text-sm text-zinc-300 absolute text-center w-full whitespace-nowrap font-semibold">
            {{ curLevel }} / {{ maxLevel }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
