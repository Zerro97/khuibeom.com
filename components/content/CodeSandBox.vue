<script setup type="lang">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <iframe
    :src="src"
    class="w-full h-[600px] rounded mt-4"
  />
</template>
