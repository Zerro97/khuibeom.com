<template>
  <NuxtLayout name="docs">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer class="" :value="doc" />
    </ContentDoc>
  </NuxtLayout>
</template>
