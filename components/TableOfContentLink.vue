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
  let header1: NodeListOf<HTMLHeadingElement>
  let header2: NodeListOf<HTMLHeadingElement>
  let header3: NodeListOf<HTMLHeadingElement>
  let header4: NodeListOf<HTMLHeadingElement>

  const intervalId = setInterval(() => {
    header1 = document.querySelectorAll('.document-article h1')
    header2 = document.querySelectorAll('.document-article h2')
    header3 = document.querySelectorAll('.document-article h3')
    header4 = document.querySelectorAll('.document-article h4')

    if (header1.length !== 0 || header2.length !== 0 || header3.length !== 0 || header4.length !== 0) {
      updateHeadings([
        ...header1,
        ...header2,
        ...header3,
        ...header4,
      ])

      clearInterval(intervalId)
    }
  }, 100)
}

function scrollToHeading(id: string) {
  router.push(`#${id}`)
}
</script>

<template>
  <ul class="list-none">
    <li v-for="link in links" :key="link.text" :class="`${link.depth !== 2 && 'pl-4'}`">
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
