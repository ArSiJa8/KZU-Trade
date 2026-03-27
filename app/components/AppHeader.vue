<script setup lang="ts">
const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="container">
      <a href="/" class="site-logo">KZU Trade</a>
      <ul class="site-nav">
        <li><a href="#wie">Wie es funktioniert</a></li>
        <li><a href="#wann">Wann & Wo</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
      <button class="hamburger" :class="{ 'is-open': menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menü öffnen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu" :class="{ 'is-open': menuOpen }">
    <ul>
      <li><a href="#wie" @click="menuOpen = false">Wie es funktioniert</a></li>
      <li><a href="#wann" @click="menuOpen = false">Wann & Wo</a></li>
      <li><a href="#kontakt" @click="menuOpen = false">Kontakt</a></li>
    </ul>
  </div>
  <div class="mobile-overlay" :class="{ 'is-open': menuOpen }" @click="menuOpen = false" />
</template>
