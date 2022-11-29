<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
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
  },
})
</script>

<template>
  <div class="my-2 rounded bg-zinc-800">
    <div v-if="language" class="relative px-5">
      <div class="px-4 py-0 border border-t-0 rounded w-max border-zinc-700">
        <p class="text-violet-400">
          {{ language }}
        </p>
      </div>
      <ButtonCopy :content="code" />
    </div>
    <div class="px-5 py-2">
      <slot />
    </div>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
