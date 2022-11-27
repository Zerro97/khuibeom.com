<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}asdf</h1>
      <!-- <ContentRenderer :value="doc"> -->
      <slot />
      <!-- </ContentRenderer> -->
    </ContentDoc>
  </main>
</template>
