<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <span class="nav__logo-text text-logo">KZU Trade</span>
      </a>

      <nav aria-label="Main navigation">
        <ul class="nav__links">
          <li><a href="#home" class="nav__link nav__link--active">Home</a></li>
          <li><a href="#about" class="nav__link">Über uns</a></li>
          <li><a href="#services" class="nav__link">Services</a></li>
          <li><a href="#market" class="nav__link">Märkte</a></li>
          <li><a href="#contact" class="nav__link">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav__actions">
        <a href="#contact" class="btn btn--outline btn--sm">Anmelden</a>
        <a href="#contact" class="btn btn--primary btn--sm">Jetzt starten</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 40
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
