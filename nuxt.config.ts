export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],

  // Vite-spezifische Konfiguration für den Dev-Server
  vite: {
    server: {
      allowedHosts: [
        'creational-zena-simulatively.ngrok-free.dev'
      ]
    }
  }
})