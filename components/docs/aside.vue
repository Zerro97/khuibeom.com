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
  <DocsAsideTree v-if="docTree?.length > 0" :links="docTree[0].children" class="sticky top-0 py-0 pr-2 pb-6 md:pb-0 h-[calc(100vh-48px)] md:h-screen md:py-4 overflow-auto bg-zinc-900" />
</template>
