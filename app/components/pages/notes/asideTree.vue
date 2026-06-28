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

function isActive(link: any) {
  return route.path === link.path
}

const collapsedMap = useState(`notes-collapsed-${props.parent?.path || '/'}`, () => {
  if (props.level === 0)
    return {}

  return props.links
    .filter(link => !!link.children)
    .reduce((map, link) => {
      map[link.path] = true
      return map
    }, {})
})

function isCollapsed(link) {
  if (link.children) {
    // Directory has been toggled manually, use its state
    if (typeof collapsedMap.value[link.path] !== 'undefined')
      return collapsedMap.value[link.path]

    // Return value grabbed from the link
    if (link?.collapsed)
      return link?.collapsed
  }

  return false
}

function toggleCollapse(link) {
  collapsedMap.value[link.path] = !isCollapsed(link)
}

// const hasNesting = computed(() => props.links.some((link: any) => link.children))
</script>

<template>
  <ul class="my-1 list-none">
    <li
      v-for="link in links"
      :key="link.path"
      class="flex flex-col"
      :class="[
        { 'pl-3 ml-2 border-l-2': level > 0 },
        isActive(link) ? 'border-l-primary-400 font-medium' : 'border-l-neutral-800 hover:border-l-neutral-700',
      ]"
    >
      <button v-if="link.children" aria-label="Navigation Header" class="flex justify-between w-full py-1" @click="toggleCollapse(link)">
        <span class="flex items-center justify-start text-xl">
          <Icon v-if="link?.navigation?.icon || link.icon" :name="link?.navigation?.icon || link.icon" class="mr-2 grayscale" />
          <span class="text-left">{{ link?.navigation?.title || link.title || link.path }}</span>
        </span>
        <span>
          <Icon :name="isCollapsed(link) ? 'lucide:chevrons-up-down' : 'lucide:chevrons-down-up'" class="text-neutral-500" />
        </span>
      </button>
      <NuxtLink
        v-else
        :to="link.redirect ? link.redirect : link.path"
        :exact="link.exact"
        class="flex"
      >
        <span :class="`text-base w-full py-0.5 ${isActive(link) ? 'text-primary-400' : 'text-neutral-500 hover:text-neutral-400'}`">
          <Icon v-if="link?.navigation?.icon || link.icon" :name="link?.navigation?.icon || link.icon" class="icon" />
          <span>{{ link?.navigation?.title || link.title || link.path }}</span>
        </span>
      </NuxtLink>
      <NotesAsideTree
        v-show="!isCollapsed(link)"
        v-if="link.children?.length"
        :links="link.children"
        :level="level + 1"
        :parent="link"
      />
    </li>
  </ul>
</template>
