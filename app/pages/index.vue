<template>
  <div class="page">

    <!-- Header -->
    <header class="header">
      <div class="container">
        <span class="logo">KZU Trade</span>
        <nav>
          <a href="#wie">Wie es funktioniert</a>
          <a href="#wann">Wann & Wo</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <p class="label">Tauschmarkt · Live Event</p>
        <h1>Tausch mit uns</h1>
        <p class="sub">
          Bring etwas mit, nimm etwas mit. Ein entspannter Markt zum Tauschen von Dingen — offen für alle.
        </p>
        <a href="#wann" class="btn">Wann & Wo →</a>
      </div>
    </section>

    <!-- Wie es funktioniert -->
    <section id="wie" class="section">
      <div class="container">
        <h2>Wie es funktioniert</h2>
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
            <p>Find etwas das dir gefällt und einigt euch direkt mit dem Gegenüber. Fertig.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wann & Wo -->
    <section id="wann" class="section section--alt">
      <div class="container">
        <h2>Wann & Wo</h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">📅</div>
            <h3>Datum</h3>
            <p>Samstag, 18. April 2026<br>10:00 – 16:00 Uhr</p>
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
      <div class="container narrow">
        <h2>Ein paar Regeln</h2>
        <ul class="rules">
          <li>Nur Tausch — kein Geld</li>
          <li>Sachen müssen sauber und funktionstüchtig sein</li>
          <li>Jeder räumt seinen Platz am Ende selbst auf</li>
          <li>Respektvoller Umgang miteinander</li>
        </ul>
      </div>
    </section>

    <!-- Kontakt -->
    <section id="kontakt" class="section section--alt">
      <div class="container narrow">
        <h2>Fragen?</h2>
        <p>Bei Fragen kannst du uns einfach eine Mail schreiben.</p>
        <a href="mailto:info@kzutrade.de" class="btn">info@kzutrade.de</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} KZU Trade · Tauschmarkt Event</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.page {
  font-family: system-ui, sans-serif;
  color: #1a1a1a;
  background: #fff;
  line-height: 1.6;
}

/* Layout */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.container.narrow {
  max-width: 620px;
}

/* Header */
.header {
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
}
.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.logo {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
}
nav {
  display: flex;
  gap: 1.5rem;
}
nav a {
  color: #555;
  text-decoration: none;
  font-size: 0.95rem;
}
nav a:hover { color: #1a1a1a; }

/* Hero */
.hero {
  background: #f5f5f5;
  padding: 5rem 0 4rem;
  text-align: center;
}
.label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #777;
  margin-bottom: 1rem;
}
.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}
.hero .sub {
  font-size: 1.15rem;
  color: #555;
  max-width: 520px;
  margin: 0 auto 2rem;
}

/* Button */
.btn {
  display: inline-block;
  background: #1a1a1a;
  color: #fff;
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.15s;
}
.btn:hover { background: #333; }

/* Sections */
.section {
  padding: 4rem 0;
}
.section--alt {
  background: #f9f9f9;
}
.section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

/* Steps */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
.step {
  padding: 1.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: #fff;
}
.step-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ccc;
  margin-bottom: 0.75rem;
}
.step h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.step p {
  color: #555;
  font-size: 0.95rem;
}

/* Info grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}
.info-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
}
.info-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
.info-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.info-card p {
  color: #555;
  font-size: 0.95rem;
}

/* Rules */
.rules {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.rules li {
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #333;
}
.rules li::before {
  content: '✓ ';
  color: #aaa;
}

/* Kontakt */
#kontakt p {
  color: #555;
  margin-bottom: 1.5rem;
}

/* Footer */
.footer {
  border-top: 1px solid #e5e5e5;
  padding: 1.5rem 0;
  text-align: center;
}
.footer p {
  font-size: 0.875rem;
  color: #999;
}

@media (max-width: 600px) {
  nav { display: none; }
  .hero { padding: 3.5rem 0 3rem; }
}
</style>
