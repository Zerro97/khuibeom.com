export const usePosts = () => useState<any[]>('posts', () => [])
export const useSelectedPosts = () => useState<any[]>('selectedPosts', () => [])

export const useTags = () => useState<{ [key: string]: boolean }>('tags')
export const useCategories = () => useState<{ [key: string]: boolean }>('categories')
export const useSearchWord = () => useState<string>('searchWord', () => '')

export function useFilterPost() {
  const postContainsTag = (post: any) => {
    const tags = useTags()

    // If every tags are not selected, return true
    if (Object.values(tags.value).every(tag => tag === false))
      return true

    // Check if given post contains all of the selected tag
    return Object.entries(tags.value).every(([key, value]) => {
      if (!value)
        return true
      return post.tags.includes(key)
    })
  }

  const postContainsCategory = (post: any) => {
    const categories = useCategories()

    // If every tags are not selected, return true
    if (Object.values(categories.value).every(category => category === false))
      return true

    // Check if given post contains all of the selected tag
    return Object.entries(categories.value).every(([key, value]) => {
      if (!value)
        return true
      return post.categories.includes(key)
    })
  }

  const postContainsSearch = (post: any) => {
    const searchWord = useSearchWord()

    if (!searchWord.value)
      return true
    return post.title.toLowerCase().includes(searchWord.value.toLocaleLowerCase())
      || post.description.toLowerCase().includes(searchWord.value.toLowerCase())
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

    selectedPosts.value = posts.value.filter((post: any) => {
      return postContainsTag(post) && postContainsCategory(post) && postContainsSearch(post)
    })
  }

  /**
   * Extract tags from the post objet
   * @param posts
   * @returns
   */
  const extractTags = (): { [key: string]: boolean } => {
    const posts = usePosts()
    const tags = useTags()

    // Extract tags from the post objet
    tags.value = posts.value.reduce((acc: any, post: any) => {
      post.tags.forEach((tag: string) => {
        acc[tag] = false
      })
      return acc
    }, {})

    return tags.value
  }

  /**
   * Extract categories from the post object
   * @param posts
   * @returns
   */
  const extractCategories = (): { [key: string]: boolean } => {
    const posts = usePosts()
    const categories = useCategories()

    // Extract tags from the post objet
    categories.value = posts.value.reduce((acc: any, post: any) => {
      post.categories.forEach((category: string) => {
        acc[category] = false
      })
      return acc
    }, {})

    return categories.value
  }

  return {
    filter,
    extractTags,
    extractCategories,
  }
}
