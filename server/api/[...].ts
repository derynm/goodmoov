import { defineEventHandler, proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const targetUrl = config.apiUrl

  const path = event.path.replace(/^\/api/, '')

  return proxyRequest(event, `${targetUrl}${path}`, {
    headers: {
      ...event.headers,
      Authorization: `Bearer ${config.accessToken}`
    }
  })
})
