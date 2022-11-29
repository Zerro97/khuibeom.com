export const useFilterPost = () => {
  const sortByDate = () => {

  }

  const filterByTag = (articles, tag) => {
    const temp = articles
    const temp2 = tag
    return [temp, temp2]
  }

  const filterByCategory = (articles, category) => {
    const temp = articles
    const temp2 = category
    return [temp, temp2]
  }

  const filterBySearch = (articles, search) => {
    const temp = articles
    const temp2 = search
    return [temp, temp2]
  }

  const getTags = (articles): String[] => {
    // Extract tags from the article objet
    const tagSet = articles.reduce((acc, article) => {
      article.tags.forEach((tag: String) => {
        acc.add(tag)
      })
      return acc
    }, new Set())

    // Convert tag set to tag array
    const tags: String[] = Array.from(tagSet)
    return tags.sort()
  }

  const getCategories = (articles) => {
    // Extract tags from the article objet
    const categorySet = articles.reduce((acc, article) => {
      acc.add(article.category)
      return acc
    }, new Set())

    // Convert tag set to tag array
    const categories = Array.from(categorySet)
    return categories.sort()
  }

  return {
    sortByDate,
    filterByTag,
    filterByCategory,
    filterBySearch,
    getTags,
    getCategories,
  }
}
