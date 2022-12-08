<template>
  <NuxtLayout name="docs">
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer class="" :value="doc" />
      </template>
      <template #not-found>
        <h1>404</h1>
        <p>Page Not Found</p>
      </template>
      <template #empty>
        <TheAlert class="">
          I will be working on this shortly. Stay tuned!
        </TheAlert>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
