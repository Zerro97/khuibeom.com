<script setup lang="ts">
const {
  filter,
} = useFilterPost()

const searchWord = useSearchWord()
const tags = useTags()
const categories = useCategories()
const tokens = ref<{ [key: string]: 'tag' | 'category' }>({})

onMounted(async () => {
  searchWord.value = ''
})

const createTokens = () => {
  Object.entries(tags.value).forEach(([key, value]) => {
    if (value)
      tokens.value[key] = 'tag'
    else
      delete tokens.value[key]
  })

  Object.entries(categories.value).forEach(([key, value]) => {
    if (value)
      tokens.value[key] = 'category'
    else
      delete tokens.value[key]
  })
}

const deleteToken = (key: string | number, type: 'tag' | 'category') => {
  if (type === 'tag')
    tags.value[key] = false
  else
    categories.value[key] = false

  delete tokens.value[key]
}

watch([searchWord, tags, categories], () => {
  filter()
  createTokens()
}, { deep: true })
</script>

<template>
  <div class="flex items-center w-full mt-5 border rounded bg-zinc-800 border-zinc-700">
    <div :class="`flex ${Object.keys(tokens).length && 'ml-1'} gap-x-1`">
      <InputToken
        v-for="(value, key) in tokens"
        :key="key"
        :type="value"
        @click="deleteToken(key, value)"
      >
        {{ key }}
      </InputToken>
    </div>
    <input
      v-model="searchWord"
      class="w-full h-full px-4 py-2 bg-zinc-800"
      type="text"
      placeholder="Search"
    >
  </div>
</template>
