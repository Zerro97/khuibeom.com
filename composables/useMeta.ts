interface Meta {
  title: string
  description: string
  url: string
  keywords?: string
}

const getDocumentMeta = (document: any) => {
  document.value.head = {
    meta: [
      { name: 'title', content: document.value.title },
      { name: 'description', content: document.value.description },
      { name: 'keywords', content: [...document.value.tags, ...document.value.categories].join(',') },
      { name: 'og:title', content: document.value.title },
      { name: 'og:description', content: document.value.description },
      { name: 'og:url', content: `https://khuibeom.com/${document.value._path}` },
      { name: 'twitter:title', content: document.value.title },
      { name: 'twitter:description', content: document.value.description },
      { name: 'twitter:url', content: `https://khuibeom.com/${document.value._path}` },
    ],
  }
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
