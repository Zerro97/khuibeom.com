<script setup lang="ts">
const {
  experienced = false,
  maxLevel = 8,
  curLevel = 4,
  logo,
  name
} = defineProps<{
  experienced?: boolean
  maxLevel?: number
  curLevel?: number
  logo: string
  name: string
}>()

const levelPercent = computed(() => curLevel / maxLevel * 100.0)
// const curPercent = setTimeout(() => {
// }, 1000)
</script>

<template>
  <div :class="`flex items-center w-full px-5 py-2 rounded gap-x-5 group border-2 ${experienced ? 'bg-neutral-600/40 border-neutral-700' : 'bg-neutral-800/50 border-neutral-800'}`">
    <Icon :name="logo" class="min-h-[40px] min-w-[40px] max-w-[40px] text-4xl rounded" />
    <div class="flex flex-col w-full">
      <h4 :class="`${experienced ? 'text-primary-50' : 'text-neutral-400'}`">
        {{ name }}
      </h4>
      <div class="w-full mt-1">
        <div class="relative w-full h-5 overflow-hidden rounded bg-neutral-900">
          <div class="absolute flex items-center justify-center h-full bg-primary-500" :style="{ width: `${levelPercent}%` }" />
          <p class="absolute w-full text-sm font-semibold text-center text-neutral-300 whitespace-nowrap">
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
