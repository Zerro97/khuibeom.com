<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  links: {
    type: Array as PropType<any>,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: null,
  },
  parent: {
    type: Object as PropType<any>,
    default: null,
  },
})

const route = useRoute()

const isActive = (link: any) => {
  return route.path === link._path
}
</script>

<template>
  <ul class="docs-aside-tree">
    <li
      v-for="link in links"
      :key="link._path"
      :class="{
        'has-children': level > 0 && link.children,
        'active': isActive(link),
      }"
    >
      <NuxtLink
        :to="link.redirect ? link.redirect : link._path"
        class="link"
        :exact="link.exact"
      >
        <span class="content">
          <Icon v-if="link?.navigation?.icon || link.icon" :name="link?.navigation?.icon || link.icon" class="icon" />
          <span>{{ link?.navigation?.title || link.title || link._path }}</span>
        </span>
      </NuxtLink>
      <DocsAsideTree
        v-if="link.children?.length && (max === null || level + 1 < max)"
        :links="link.children"
        :level="level + 1"
        :parent="link"
        :max="max"
      />
    </li>
  </ul>
</template>

<style scoped>
.active {
  color: #8b5cf6;
}
</style>
