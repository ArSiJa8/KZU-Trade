export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],

  devServer: {
    host: '0.0.0.0',
    port: 5000
  },

  vite: {
    server: {
      allowedHosts: true
    }
  }
})
