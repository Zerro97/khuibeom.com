<script setup lang="ts">
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
    class="w-full h-[350px] sm:h-[500px] md:h-[600px] rounded mt-4"
  />
</template>
