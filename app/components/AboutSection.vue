<template>
  <section id="about" class="about section--lg">
    <div class="about__grid">
      <!-- Text column -->
      <div class="about__text fade-up">
        <span class="text-label">Über uns</span>
        <h2 class="text-h1">
          Ihr zuverlässiger Partner im modernen Handel
        </h2>
        <p class="text-body-lg">
          KZU Trade steht für präzise Marktanalysen, fundierte Handelsstrategien
          und persönliche Beratung auf höchstem Niveau. Wir begleiten Privatanleger
          und Institutionen auf ihrem Weg zu nachhaltigem Anlageerfolg.
        </p>
        <p class="text-body">
          Mit jahrelanger Erfahrung an den globalen Finanzmärkten entwickeln wir
          individuelle Lösungen — von kurzfristigen Trade-Setups bis hin zu
          langfristigen Portfoliostrategien.
        </p>

        <div class="grid-cols-2" style="margin-top:0.5rem">
          <div class="card card--glass card--flat">
            <div class="card__title" style="font-size:2rem;color:#0073ff">10+</div>
            <div class="card__body">Jahre Markterfahrung</div>
          </div>
          <div class="card card--glass card--flat">
            <div class="card__title" style="font-size:2rem;color:#0073ff">500+</div>
            <div class="card__body">Zufriedene Kunden</div>
          </div>
          <div class="card card--glass card--flat">
            <div class="card__title" style="font-size:2rem;color:#0073ff">24/7</div>
            <div class="card__body">Marktbeobachtung</div>
          </div>
          <div class="card card--glass card--flat">
            <div class="card__title" style="font-size:2rem;color:#0073ff">98%</div>
            <div class="card__body">Kundenzufriedenheit</div>
          </div>
        </div>

        <div style="display:flex;gap:1rem;flex-wrap:wrap">
          <a href="#services" class="btn btn--primary">Unsere Services</a>
          <a href="#contact" class="btn btn--outline">Kontakt aufnehmen</a>
        </div>
      </div>

      <!-- Image column -->
      <div class="about__image-wrap fade-up" style="transition-delay:120ms">
        <div
          class="about__image"
          style="background: linear-gradient(135deg,#0073ff 0%,#003d8f 100%);display:flex;align-items:center;justify-content:center;min-height:380px;border-radius:var(--radius-xl)"
        >
          <div style="text-align:center;padding:2rem">
            <div class="text-display" style="font-size:8rem;color:rgba(255,255,255,0.12)">KZU</div>
            <div class="badge badge--neutral" style="margin-top:1rem">Professioneller Handel</div>
          </div>
        </div>

        <div class="about__image-badge">
          <div class="about__image-badge-number">10+</div>
          <div class="about__image-badge-text">Jahre Erfahrung</div>
        </div>
      </div>
    </div>
  </section>
</template>
