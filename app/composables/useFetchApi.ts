import type { UseFetchOptions } from 'nuxt/app'

export function useFetchApi<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const { $apiFetch } = useNuxtApp()

  return useFetch(url, {
    ...options,
    $fetch: $apiFetch
  })
}
