export default defineNuxtPlugin(() => {
  const $apiFetch = $fetch.create({
    baseURL: '/api/3/' as string
  })

  return {
    provide: {
      apiFetch: $apiFetch
    }
  }
})
