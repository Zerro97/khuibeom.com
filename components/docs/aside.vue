<script setup lang="ts">
const {
  globals,
  navigation,
  surround,
  page,
} = useContent()

console.log(globals.value, navigation.value, surround.value, page.value)
</script>

<template>
  <nav>
    <DocsAsideTree v-if="navigation?.length > 0" :links="navigation" />
  </nav>
</template>
