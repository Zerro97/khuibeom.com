<script setup lang="ts">
const {
  getTags,
  getCategories,
  filterByCategory,
  filterBySearch,
  filterByTag,
} = useFilterPost()

// Original List
const articles = await queryContent('blog').find()
const tags: String[] = getTags(articles)
const categories = getCategories(articles)

// Filter Ref
const search = ref()
const selectedTag = ref()
const selectedCategory = ref()
const selectedArticle = ref()

// Filter Functions
const filterTag = (tag: String) => {
  selectedTag.value = tag
  selectedArticle.value = filterByTag(articles, tag)
}
const filterCategory = ref()
const filterArticle = ref()
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
          <button :class="`${selected && 'text-violet-400'} text-lg`">
            Tags
          </button>
        </HeadlessTab>
        <HeadlessTab v-slot="{ selected }">
          <button :class="`${selected && 'text-violet-400'} text-lg`">
            Categories
          </button>
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
      v-for="article in articles"
      :key="article.slug"
      :tags="article.tags"
      :category="article.category"
      :title="article.title"
      :description="article.description"
      :date="article.date"
      :time="article.time"
      :banner="article.banner"
      :link="article.slug"
    />
  </section>
</template>

