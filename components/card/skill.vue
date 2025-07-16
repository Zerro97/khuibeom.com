<script setup lang="ts">
const props = defineProps<{
  experienced: boolean
  maxLevel: { type: number, default: 10 }
  curLevel: { type: number, default: 5 }
  logo: string
  name: string
}>()

const levelPercent = computed(() => props.curLevel / props.maxLevel * 100.0)
// const curPercent = setTimeout(() => {
// }, 1000)
</script>

<template>
  <div :class="`flex items-center w-full px-5 py-2 rounded gap-x-5 group border-2 ${experienced ? 'bg-zinc-600/40 border-zinc-700' : 'bg-zinc-800/50 border-zinc-800'}`">
    <Icon :name="logo" class="min-h-[40px] min-w-[40px] max-w-[40px] text-4xl rounded" />
    <div class="flex flex-col w-full">
      <h4 :class="`${experienced ? 'text-purple-50' : 'text-zinc-400'}`">
        {{ name }}
      </h4>
      <div class="w-full mt-1">
        <div class="relative w-full h-5 overflow-hidden rounded bg-zinc-900">
          <div class="absolute flex items-center justify-center h-full bg-violet-500" :style="{ width: `${levelPercent}%` }" />
          <p class="absolute w-full text-sm font-semibold text-center text-zinc-300 whitespace-nowrap">
            {{ curLevel }} / {{ maxLevel }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes progress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
