export default defineNuxtRouteMiddleware((to) => {
  switch (to.path) {
    case '/docs': {
      return navigateTo('/docs/introduction')
    }
  }
})
