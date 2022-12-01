<script setup type="ts">
const props = defineProps({
  renderer: Object,
  post: Object,
})

// console.log(props.renderer.value)

// Current post that the user is viewing
// const post = null

const observerOptions = {
//   root: props.renderer.value,
  threshold: 0,
}

const postElements = props.post.body.children
const headingIds = postElements.reduce((acc, post) => {

}, [])

// Observer for
// const observer =
// onMounted(() => {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id')

    // if (entry.isIntersecting)
    //   currentlyActiveToc = id
  })
}, observerOptions)
// })

// Track all sections that have an `id` applied
// document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
//   this.observer.observe(section)
// })

// const activeSection = ref()

// const onSectionClick = (link) => {
//   this.currentlyActiveToc = link.id
// }
</script>

<template>
  <aside ref="toc" class="col-span-1 lg:flex lg:flex-col">
    <!-- <div class="sticky top-16">
      <h2
        class="text-lg tracking-wider text-black uppercase font-h2 lg:mt-16"
      >
        Table of contents
      </h2>
      <nav class="mt-4">
        <ul>
          <li
            v-for="link of post.toc"
            :key="link.id"
            :class="{
              'pl-4': link.depth === 3,
            }"
            class="toc-list"
            @click="tableOfContentsHeadingClick(link)"
          >
            <NuxtLink
              role="button"
              class="block mb-2 text-base transition-colors duration-75"
              :to="`#${link.id}`"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div> -->
  </aside>
</template>
