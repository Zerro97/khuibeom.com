interface Meta {
  title: string
  description: string
  url: string
  keywords?: string
}

const getDocumentMeta = (document: any) => {
  return document
}

const getMeta = (meta: Meta) => {
  return [
    { name: 'title', content: meta.title },
    { name: 'description', content: meta.description },
    { name: 'keywords', content: meta.keywords },
    { name: 'og:title', content: meta.title },
    { name: 'og:description', content: meta.description },
    { name: 'og:url', content: meta.url },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
    { name: 'twitter:url', content: meta.url },
  ]
}

export const useMeta = () => {
  return {
    getDocumentMeta,
    getMeta,
  }
}
