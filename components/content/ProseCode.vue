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

function copy() {
  navigator.clipboard.writeText('TEST')
}

function alert() {
  alert('test')
}
</script>

<template>
  <div class="my-2 rounded bg-zinc-800">
    <div v-if="language" class="relative px-5">
      <div class="px-4 py-0 border border-t-0 rounded w-max border-zinc-700">
        <p class="text-violet-400">
          {{ language }}
        </p>
      </div>
      <button
        class="absolute px-2 py-1 border rounded top-2 right-2 border-zinc-700 w-max hover:bg-zinc-700 hover:cursor-pointer"
        @click="alert"
      >
        <Icon name="mdi:content-copy" />
      </button>
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
