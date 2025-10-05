import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'goodmoov'
    }
  },
  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [300, 400, 500, 600, 700],
        display: 'swap'
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    accessToken: process.env.NUXT_ACCESS_TOKEN
  }
})
