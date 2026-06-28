export default defineNuxtRouteMiddleware((to) => {
  switch (to.path) {
    case '/notes': {
      return navigateTo('/notes/introduction')
    }
  }
})
