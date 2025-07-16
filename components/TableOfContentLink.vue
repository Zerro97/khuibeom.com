<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'
import type { PropType } from 'vue'

defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => [],
  },
})

const router = useRouter()
const { activeHeadings, updateHeadings } = useScrollSpy()

if (import.meta.client) {
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
    <li v-for="link in links" :key="link.text" class="relative">
      <template v-if="link.depth < 5">
        <div :class="`${activeHeadings.includes(link.id) ? 'bg-violet-400' : 'bg-zinc-700'} transition absolute left-0 top-[0.35rem] h-5 w-[3px] rounded`" />
        <a
          :href="`#${link.id}`"
          :class="`depth-${link.depth} ${activeHeadings.includes(link.id) ? 'text-violet-300' : 'text-zinc-500'} text-sm`"
          @click.prevent="scrollToHeading(link.id)"
        >
          {{ link.text }}
        </a>
        <TableOfContentLink v-if="link.children" :links="link.children" />
      </template>
    </li>
  </ul>
</template>

<style>
.depth-2 {
  padding-left: 1rem;
}

.depth-3 {
  padding-left: 2rem;
}

.depth-4 {
  padding-left: 3rem;
}
</style>
