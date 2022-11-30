class PostStore {
  #posts = []
  #tags = []
  #categories = []
  #search = null

  static Builder = class {
    #posts = []
    #tags = []
    #categories = []
    #search = null

    setPosts(posts) {
      this.#posts = posts
      return this
    }

    setTags(tags) {
      this.#tags = tags
      return this
    }

    setCategories(categories) {
      this.#categories = categories
      return this
    }

    setSearch(search) {
      this.#search = search
      return this
    }

    #postContainsTag(post) {
      if (!this.#tags.length)
        return true

      return this.#tags.every(tag => post.tags.includes(tag))
    }

    #postContainsCategory(post) {
      if (!this.#categories.length)
        return true
      return this.#categories.every(category => post.categories.includes(category))
    }

    #postContainsSearch(post) {
      if (!this.#search)
        return true
      return post.title.includes(this.#search) || post.description.includes(this.#search)
    }

    build() {
      return this.#posts.filter((post) => {
        return this.#postContainsTag(post) && this.#postContainsCategory(post) && this.#postContainsSearch(post)
      })
    }
  }
}

export const useFilterPost = () => {
  /**
   * Filter given posts using tag, category and search
   * @param posts
   * @param tags
   * @param categories
   * @param search
   * @returns
   */
  const filter = (posts: any, tags?: String[], categories?: String[], search?: String) => {
    return new PostStore.Builder()
      .setPosts(posts)
      .setTags(tags)
      .setCategories(categories)
      .setSearch(search)
      .build()
  }

  /**
   * Extract tags from the post objet
   * @param posts
   * @returns
   */
  const getTags = (posts: any[]): String[] => {
    // Extract tags from the post objet
    const tagSet = posts.reduce((acc, post) => {
      post.tags.forEach((tag: String) => {
        acc.add(tag)
      })
      return acc
    }, new Set())

    // Convert tag set to tag array
    const tags: String[] = Array.from(tagSet)
    return tags.sort()
  }

  /**
   * Extract categories from the post object
   * @param posts
   * @returns
   */
  const getCategories = (posts: any[]): String[] => {
    // Extract category from the post objet
    const categorySet = posts.reduce((acc, post) => {
      post.categories.forEach((category: String) => {
        acc.add(category)
      })
      return acc
    }, new Set())

    // Convert category set to category array
    const categories: String[] = Array.from(categorySet)
    return categories.sort()
  }

  return {
    filter,
    getTags,
    getCategories,
  }
}
