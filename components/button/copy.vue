<script setup lang="ts">
const props = defineProps<{
  content: string
}>()

const isClicked = ref(false)

const revertBackIcon = useDebounce(() => {
  isClicked.value = false
}, 1500)

// Copy the contents of the code block to clipboard
const copyToClip = () => {
  navigator.clipboard.writeText(props.content)

  isClicked.value = true
  // Every time copy button is clicked, transform the icon to checked icon
  revertBackIcon()
}
</script>

<template>
  <button
    class="absolute px-2 py-1 border rounded top-2 right-2 border-zinc-700 w-max hover:bg-zinc-700 hover:cursor-pointer"
    aria-label="Copy Code"
    @click="copyToClip"
  >
    <Icon :name="`${isClicked ? 'mdi:check' : 'mdi:content-copy'}`" :class="`${isClicked && 'text-green-400'}`" />
  </button>
</template>
