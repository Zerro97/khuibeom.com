<script setup lang="ts">
const {
  filter,
  extractTags,
  extractCategories,
} = useFilterPost()

// Original List
const posts = usePosts()
const tags = useTags()
const categories = useCategories()

// Filtered List
const searchWord = useSearchWord()
const selectedTags = useSelectedTags()
const selectedCategories = useSelectedCategories()
const selectedPosts = useSelectedPosts()

// Init Lists
onMounted(async () => {
  posts.value = await queryContent('blog').find()
  extractTags()
  extractCategories()

  searchWord.value = ''
  selectedTags.value = []
  selectedCategories.value = []
  selectedPosts.value = posts.value
})

// Filter Functions
const filterTag = (tag: String) => {
  if (selectedTags.value.includes(tag))
    selectedTags.value = [...selectedTags.value.filter(selectedTag => selectedTag !== tag)]
  else
    selectedTags.value = [...selectedTags.value, tag]
}

const filterCategory = (category: String) => {
  if (selectedTags.value.includes(category))
    selectedCategories.value = [...selectedCategories.value.filter(selectedCategory => selectedCategory !== category)]
  else
    selectedCategories.value = [...selectedCategories.value, category]
}

// Whenever tag, category, search changes, filter the posts
watch([searchWord, selectedTags, selectedCategories], () => {
  filter()
})
</script>

<template>
  <section>
    <h1>Blog</h1>
    <input
      v-model="search"
      class="w-full px-4 py-2 mt-5 border rounded bg-zinc-800 border-zinc-700"
      type="text"
      placeholder="Search"
    >
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
            v-for="tag in tags"
            :key="tag"
            class="px-3 rounded bg-zinc-800 w-max"
            @click="filterTag(tag)"
          >
            {{ tag }}
          </button>
        </HeadlessTabPanel>
        <HeadlessTabPanel class="flex gap-x-2">
          <div
            v-for="category in categories"
            :key="category"
            class="px-3 rounded bg-zinc-800 w-max"
            @click="filterCategory(category)"
          >
            <p>{{ category }}</p>
          </div>
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
      :category="post.category"
      :title="post.title"
      :description="post.description"
      :date="post.date"
      :time="post.time"
      :banner="post.banner"
      :link="post.slug"
    />
  </section>
</template>

