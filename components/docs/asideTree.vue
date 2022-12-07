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
})

const route = useRoute()

const isActive = (link: any) => {
  return route.path === link._path
}

const collapsedMap = useState(`docs-collapsed-${props.parent?._path || '/'}`, () => {
  if (props.level === 0)
    return {}

  return props.links
    .filter(link => !!link.children)
    .reduce((map, link) => {
      map[link._path] = true
      return map
    }, {})
})

const isCollapsed = (link) => {
  if (link.children) {
    // Directory has been toggled manually, use its state
    if (typeof collapsedMap.value[link._path] !== 'undefined')
      return collapsedMap.value[link._path]

    // Return value grabbed from the link
    if (link?.collapsed)
      return link?.collapsed
  }

  return false
}

const toggleCollapse = (link) => {
  collapsedMap.value[link._path] = !isCollapsed(link)
}

const hasNesting = computed(() => props.links.some((link: any) => link.children))
</script>

<template>
  <ul class="my-1 list-none">
    <li
      v-for="link in links"
      :key="link._path"
      :class="[
        { 'pl-4 border-l': level > 0 },
        isActive(link) ? 'border-l-violet-400' : 'border-l-zinc-800 hover:border-l-zinc-700',
      ]"
    >
      <button v-if="link.children" class="flex justify-between w-full py-1" @click="toggleCollapse(link)">
        <span class="text-xl flex items-center justify-start">
          <Icon v-if="link?.navigation?.icon || link.icon" :name="link?.navigation?.icon || link.icon" class="mr-2 grayscale" />
          <span class="text-left">{{ link?.navigation?.title || link.title || link._path }}</span>
        </span>
        <span>
          <Icon :name="isCollapsed(link) ? 'lucide:chevrons-up-down' : 'lucide:chevrons-down-up'" class="text-zinc-500" />
        </span>
      </button>
      <NuxtLink
        v-else
        :to="link.redirect ? link.redirect : link._path"
        class="link"
        :exact="link.exact"
      >
        <span :class="`text-base ${isActive(link) ? 'text-violet-400' : 'text-zinc-500 hover:text-zinc-400'}`">
          <Icon v-if="link?.navigation?.icon || link.icon" :name="link?.navigation?.icon || link.icon" class="icon" />
          <span>{{ link?.navigation?.title || link.title || link._path }}</span>
        </span>
      </NuxtLink>
      <DocsAsideTree
        v-show="!isCollapsed(link)"
        v-if="link.children?.length"
        :links="link.children"
        :level="level + 1"
        :parent="link"
      />
    </li>
  </ul>
</template>
