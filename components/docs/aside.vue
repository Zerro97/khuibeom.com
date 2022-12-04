<script setup lang="ts">
const {
  globals,
  navigation,
  surround,
  page,
} = useContent()

const docTree = navigation.value.filter(navNode => navNode._path === '/docs')
</script>

<template>
  <nav>
    <DocsAsideTree v-if="docTree?.length > 0" :links="docTree[0].children" />
  </nav>
</template>
