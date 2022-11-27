<template>
  <ContentDoc v-slot="{ doc }">
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>
