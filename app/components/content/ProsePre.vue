<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="w-full my-4 border border-zinc-700 overflow-hidden rounded-xl bg-zinc-800">
    <div v-if="language" class="flex justify-between items-center w-full px-5 py-1 bg-zinc-900">
      <p class="text-violet-400">
        {{ language }}
      </p>
      <ButtonCopy :content="code" />
    </div>
    <pre :class="$props.class" class="px-5 pt-3 whitespace-pre-line overflow-x-auto">
      <slot />
    </pre>
  </div>
</template>

<style>
.line {
  display: block;
  white-space: pre-wrap;
}
</style>
