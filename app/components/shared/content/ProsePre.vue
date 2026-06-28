<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const languageMap: Record<string, string> = {
  js: 'JavaScript',
  ts: 'TypeScript',
  jsx: 'JSX',
  tsx: 'TSX',
  html: 'HTML',
  css: 'CSS',
  scss: 'SCSS',
  json: 'JSON',
  md: 'Markdown',
  yaml: 'YAML',
  yml: 'YAML',
  sh: 'Shell',
  bash: 'Bash',
  zsh: 'Shell',
  py: 'Python',
  python: 'Python',
  java: 'Java',
  rb: 'Ruby',
  go: 'Go',
  rs: 'Rust',
  sql: 'SQL',
  graphql: 'GraphQL',
  vue: 'Vue',
  svelte: 'Svelte',
  xml: 'XML',
  c: 'C',
  cpp: 'C++',
  cs: 'C#',
  php: 'PHP',
  swift: 'Swift',
  kt: 'Kotlin',
  dart: 'Dart',
}

const displayLanguage = computed(() => {
  if (props.filename) return props.filename
  if (!props.language) return null
  return languageMap[props.language] || props.language.toUpperCase()
})
</script>

<template>
  <div class="prose-pre w-full my-5 overflow-hidden rounded-lg bg-neutral-800/40">
    <div v-if="displayLanguage" class="w-full px-4 py-1.5 border-b border-neutral-700/30">
      <span class="text-xs font-medium tracking-wide text-neutral-400 uppercase">
        {{ displayLanguage }}
      </span>
    </div>
    <pre :class="$props.class" class="px-4 py-4 overflow-x-auto text-sm leading-relaxed"><slot /></pre>
  </div>
</template>

<style>
.prose-pre pre {
  margin: 0;
}

.prose-pre .line {
  display: block;
  white-space: pre;
}
</style>
