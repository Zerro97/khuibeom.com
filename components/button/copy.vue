<script setup lang="ts">
const props = defineProps<{
  content: string
}>()

const copyToClip = () => {
  navigator.clipboard.writeText(props.content)
}
</script>

<template>
  <button
    class="absolute px-2 py-1 border rounded top-2 right-2 border-zinc-700 w-max hover:bg-zinc-700 hover:cursor-pointer"
    aria-label="Copy Code"
    @click="copyToClip"
  >
    <Icon name="mdi:content-copy" />
  </button>
</template>
