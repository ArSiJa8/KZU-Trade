<script setup lang="ts">
const menuOpen = ref(false)
</script>

<template>
  <div>

    <!-- Header -->
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

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': menuOpen }">
      <ul>
        <li><a href="#wie" @click="menuOpen = false">Wie es funktioniert</a></li>
        <li><a href="#wann" @click="menuOpen = false">Wann & Wo</a></li>
        <li><a href="#kontakt" @click="menuOpen = false">Kontakt</a></li>
      </ul>
    </div>
    <div class="mobile-overlay" :class="{ 'is-open': menuOpen }" @click="menuOpen = false" />

    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <span class="hero-eyebrow">KZU Trade · Live Event</span>
        <h1 class="hero-title">Bring was mit.<br><span>Nimm was mit.</span></h1>
        <p class="hero-sub">
          Ein Flohmarkt, aber ohne Geld
        </p>
        <div class="hero-actions">
          <a href="#wann" class="btn btn--primary btn--lg">Wann & Wo →</a>
          <a href="#wie" class="btn btn--ghost btn--lg">Wie es funktioniert</a>
        </div>
        <div class="hero-meta">
          <div class="hero-meta-item">
            <strong>18. April</strong>
            <span>Datum</span>
          </div>
          <div class="hero-meta-item">
            <strong>10 – 16 Uhr</strong>
            <span>Uhrzeit</span>
          </div>
          <div class="hero-meta-item">
            <strong>Frankfurt</strong>
            <span>Ort</span>
          </div>
          <div class="hero-meta-item">
            <strong>Kostenlos</strong>
            <span>Eintritt</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Wie es funktioniert -->
    <section id="wie" class="section">
      <div class="container">
        <p class="section-label">Ablauf</p>
        <h2 class="section-title">Wie es funktioniert</h2>
        <p class="section-body">Drei einfache Schritte — kein Geld, kein Aufwand.</p>
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <h3>Mitbringen</h3>
            <p>Bring Sachen mit, die du nicht mehr brauchst — Kleidung, Bücher, Haushaltswaren, Spielzeug, was auch immer.</p>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <h3>Anbieten</h3>
            <p>Stell deine Sachen auf deinem Platz aus. Kein Verkauf, nur Tausch.</p>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <h3>Tauschen</h3>
            <p>Find etwas das dir gefällt und einigt euch direkt. So einfach ist das.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wann & Wo -->
    <section id="wann" class="section">
      <div class="container">
        <p class="section-label">Location</p>
        <h2 class="section-title">Wann & Wo</h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">📅</div>
            <h3>Datum</h3>
            <p>Samstag, 18. April 2026</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🕙</div>
            <h3>Uhrzeit</h3>
            <p>10:00 – 16:00 Uhr</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Ort</h3>
            <p>Stadtpark Frankfurt<br>Eingang Ostseite</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🎟️</div>
            <h3>Eintritt</h3>
            <p>Kostenlos<br>Kein Anmelden nötig</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Regeln -->
    <section class="section">
      <div class="container--narrow">
        <p class="section-label">Spielregeln</p>
        <h2 class="section-title">Ein paar Regeln</h2>
        <ul class="rules">
          <li>Nur Tausch — kein Geld</li>
          <li>Sachen müssen sauber und funktionstüchtig sein</li>
          <li>Jeder räumt seinen Platz am Ende selbst auf</li>
          <li>Respektvoller Umgang miteinander</li>
        </ul>
      </div>
    </section>

    <!-- Kontakt -->
    <section id="kontakt" class="section">
      <div class="container--narrow">
        <p class="section-label">Kontakt</p>
        <h2 class="section-title">Fragen?</h2>
        <div class="contact-box">
          <p>Bei Fragen kannst du uns einfach eine Mail schreiben — wir antworten schnell.</p>
          <a href="mailto:info@kzutrade.de" class="btn btn--primary">info@kzutrade.de</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} KZU Trade · Tauschmarkt Event</p>
        <ul class="footer-links">
          <li><a href="#wie">Ablauf</a></li>
          <li><a href="#wann">Wann & Wo</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </div>
    </footer>

  </div>
</template>
