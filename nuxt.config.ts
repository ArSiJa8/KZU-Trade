export default defineNuxtConfig({
  // Aktiviert den Nuxt 4 Modus und die neue Verzeichnisstruktur
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  // Nuxt UI v4 basiert auf Tailwind CSS v4
  modules: [
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt' // Nutze das Nuxt-Modul für bessere Integration
  ],

  // In Nuxt 4/UI v4 ist CSS oft über die main.css mit @import "tailwindcss" geregelt
  css: ['~/assets/css/main.css'],

  devServer: {
    host: '0.0.0.0',
    port: 5000
  },

  vite: {
    server: {
      // In aktuellen Vite-Versionen innerhalb Nuxt 4
      // ist 'allowedHosts: true' korrekt für Proxy/Tunnel-Setups
      allowedHosts: true
    }
  }
})