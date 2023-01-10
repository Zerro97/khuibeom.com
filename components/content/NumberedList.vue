<script setup lang="ts">
interface Content {
  title: string
  description: string
}

interface Props {
  contents: Content[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-y-2 mt-4">
    <div
      v-for="(content, index) in props.contents"
      :key="index"
      class="flex items-center"
    >
      <div class="rounded flex items-center justify-center w-11 h-11 bg-zinc-800 mr-2">
        <p class="text-xl">
          {{ index }}
        </p>
      </div>
      <div>
        <p class="font-bold text-xl">
          {{ content.title }}
        </p>
        <p class="text-zinc-400 text-sm">
          {{ content.description }}
        </p>
      </div>
    </div>
  </div>
</template>
