export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const $apiFetch = $fetch.create({
    baseURL: (config.apiUrl + '/3/') as string,
    onRequest({ options }) {
      options.headers.set('Authorization', `Bearer ${config.accessToken}`)
    }
  })

  return {
    provide: {
      apiFetch: $apiFetch
    }
  }
})
