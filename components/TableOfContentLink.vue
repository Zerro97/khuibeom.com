<script setup lang="ts">
import type { PropType } from 'vue'
import type { TocLink } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => [],
  },
})

const router = useRouter()
const { activeHeadings, updateHeadings } = useScrollSpy()

if (process.client) {
  setTimeout(() => {
    console.log(document.querySelectorAll('.document-article h1'))
    console.log(document.querySelectorAll('.document-article h2'))
    updateHeadings([
      ...document.querySelectorAll('.document-article h1'),
      ...document.querySelectorAll('.document-article h2'),
      ...document.querySelectorAll('.document-article h3'),
      ...document.querySelectorAll('.document-article h4'),
    ])
  }, 300)
}

function scrollToHeading(id: string) {
  router.push(`#${id}`)
}
</script>

<template>
  <ul class="list-none">
    <li v-for="link in links" :key="link.text" :class="`depth-${link.depth}`">
      <template v-if="link.depth < 5">
        <a
          :href="`#${link.id}`"
          :class="`${activeHeadings.includes(link.id) ? 'text-violet-300' : 'text-zinc-500'} text-sm`"
          @click.prevent="scrollToHeading(link.id)"
        >
          {{ link.text }}
        </a>
        <TableOfContentLink v-if="link.children" :links="link.children" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.depth-2 {
    padding-left: 0.75rem;
}
.depth-3 {
    padding-left: 1.5rem;
}
.depth-4 {
    padding-left: 2.25rem;
}
</style>
