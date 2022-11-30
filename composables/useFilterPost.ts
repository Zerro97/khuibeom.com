export const usePosts = () => useState<any[]>('posts', () => [])
export const useTags = () => useState<String[]>('tags', () => [])
export const useCategories = () => useState<String[]>('categories', () => [])

export const useSelectedPosts = () => useState<any[]>('selectedPosts', () => [])
export const useSelectedTags = () => useState<String[]>('selectedTags', () => [])
export const useSelectedCategories = () => useState<String[]>('selectedCategories', () => [])
export const useSearchWord = () => useState<String>('searchWord', () => '')

export const useFilterPost = () => {
  const postContainsTag = (post: any) => {
    const selectedTags = useSelectedTags()

    if (!selectedTags.value.length)
      return true

    return selectedTags.value.every(tag => post.tags.includes(tag))
  }

  const postContainsCategory = (post: any) => {
    const selectedCategories = useSelectedCategories()

    if (!selectedCategories.value.length)
      return true
    return selectedCategories.value.every(category => post.categories.includes(category))
  }

  const postContainsSearch = (post: any) => {
    const searchWord = useSearchWord()

    if (!searchWord.value)
      return true
    return post.title.includes(searchWord.value) || post.description.includes(searchWord.value)
  }

  /**
   * Filter posts using tag, category and search
   * @param posts
   * @param tags
   * @param categories
   * @param search
   * @returns
   */
  const filter = () => {
    const posts = usePosts()
    const selectedPosts = useSelectedPosts()

    selectedPosts.value = posts.value.filter((post) => {
      return postContainsTag(post) && postContainsCategory(post) && postContainsSearch(post)
    })
  }

  /**
   * Extract tags from the post objet
   * @param posts
   * @returns
   */
  const extractTags = (): String[] => {
    const posts = usePosts()
    const tags = useTags()

    // Extract tags from the post objet
    const tagSet = posts.value.reduce((acc, post) => {
      post.tags.forEach((tag: String) => {
        acc.add(tag)
      })
      return acc
    }, new Set())

    // Convert tag set to tag array
    const tagArray: String[] = Array.from(tagSet)
    tags.value = tagArray.sort()

    return tags.value
  }

  /**
   * Extract categories from the post object
   * @param posts
   * @returns
   */
  const extractCategories = (): String[] => {
    const posts = usePosts()
    const categories = useCategories()

    // Extract category from the post objet
    const categorySet = posts.value.reduce((acc, post) => {
      post.categories.forEach((category: String) => {
        acc.add(category)
      })
      return acc
    }, new Set())

    // Convert category set to category array
    const categoryArray: String[] = Array.from(categorySet)
    categories.value = categoryArray.sort()

    return categories.value
  }

  return {
    filter,
    extractTags,
    extractCategories,
  }
}
