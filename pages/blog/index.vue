<script setup lang="ts">
const {
  filter,
  extractTags,
  extractCategories,
} = useFilterPost()

// Post
const posts = usePosts()
const selectedPosts = useSelectedPosts()

// Filter
const tags = useTags()
const categories = useCategories()

// Init Lists
onMounted(async () => {
  posts.value = await queryContent('blog').find()
  selectedPosts.value = posts.value

  extractTags()
  extractCategories()
})

// Filter Functions
const filterTag = (tag: string) => {
  tags.value[tag] = !tags.value[tag]
}

const filterCategory = (category: string) => {
  categories.value[category] = !categories.value[category]
}

// Whenever tag, category, search changes, filter the posts
watch([tags, categories], () => {
  filter()
}, { deep: true })
</script>

<template>
  <NuxtLayout>
    <section>
      <h1>Blog</h1>
      <InputSearch />
      <HeadlessTabGroup>
        <HeadlessTabList class="flex mt-2 mb-3 gap-x-4">
          <HeadlessTab v-slot="{ selected }">
            <p :class="`${selected && 'text-violet-400 border-b-2 border-violet-400'} text-lg`">
              Tags
            </p>
          </HeadlessTab>
          <HeadlessTab v-slot="{ selected }">
            <p :class="`${selected && 'text-violet-400 border-b-2 border-violet-400'} text-lg`">
              Categories
            </p>
          </HeadlessTab>
        </HeadlessTabList>
        <HeadlessTabPanels>
          <HeadlessTabPanel class="flex gap-x-2">
            <button
              v-for="(value, key) in tags"
              :key="key"
              :class="`${value && 'text-violet-400'} bg-zinc-800 px-3 rounded w-max`"
              @click="filterTag(key)"
            >
              {{ key }}
            </button>
          </HeadlessTabPanel>
          <HeadlessTabPanel class="flex gap-x-2">
            <button
              v-for="(value, key) in categories"
              :key="key"
              :class="`${value && 'text-violet-400'} bg-zinc-800 px-3 rounded w-max`"
              @click="filterCategory(key)"
            >
              {{ key }}
            </button>
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
      <LineBreak class="my-4" />
    </section>
    <section class="grid grid-cols-2 gap-4 mt-6">
      <CardPost
        v-for="post in selectedPosts"
        :key="post.slug"
        :tags="post.tags"
        :categories="post.categories"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :time="post.time"
        :banner="post.banner"
        :icon="post.icon"
        :link="post.slug"
      />
    </section>
  </NuxtLayout>
</template>

