<template>
  <section id="services" class="services">
    <div class="container">
      <div class="services__header fade-up">
        <span class="text-label">Unsere Services</span>
        <h2 class="text-h1" style="margin-top:0.75rem">
          Alles, was Sie für erfolgreichen Handel brauchen
        </h2>
        <p class="text-body" style="margin-top:1rem;max-width:560px;margin-inline:auto">
          Von der Marktanalyse bis zur Portfolioverwaltung — wir bieten umfassende
          Dienstleistungen für jeden Handelsbedarf.
        </p>
      </div>

      <div class="grid-cols-3 stagger">
        <div v-for="service in services" :key="service.title" class="card fade-up">
          <div class="card__icon">{{ service.icon }}</div>
          <div class="card__label">{{ service.category }}</div>
          <div class="card__title">{{ service.title }}</div>
          <div class="card__body">{{ service.description }}</div>
          <div class="card__footer">
            <span class="badge badge--blue">{{ service.badge }}</span>
            <a href="#contact" class="btn btn--ghost btn--sm">Mehr →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: '📊',
    category: 'Analyse',
    title: 'Marktanalyse',
    description: 'Tiefgehende technische und fundamentale Analysen der wichtigsten globalen Märkte — täglich und in Echtzeit.',
    badge: 'Täglich',
  },
  {
    icon: '⚡',
    category: 'Handel',
    title: 'Aktiver Handel',
    description: 'Kurzfristige Trade-Setups in Forex, Kryptowährungen, Aktien und Rohstoffen mit klar definierten Ein- und Ausstiegspunkten.',
    badge: 'Live',
  },
  {
    icon: '🛡️',
    category: 'Risiko',
    title: 'Risikomanagement',
    description: 'Professionelle Absicherungsstrategien und Positionsgrößenberechnungen zum Schutz Ihres Kapitals.',
    badge: 'Essentiell',
  },
  {
    icon: '📈',
    category: 'Portfolio',
    title: 'Portfolio-Beratung',
    description: 'Individuelle Portfoliostrategien abgestimmt auf Ihre Risikotoleranz, Anlagehorizont und finanziellen Ziele.',
    badge: 'Individuell',
  },
  {
    icon: '🎓',
    category: 'Bildung',
    title: 'Trading Ausbildung',
    description: 'Praxisnahe Schulungen und Mentoring-Programme für Einsteiger und erfahrene Trader.',
    badge: 'Für alle Level',
  },
  {
    icon: '🤖',
    category: 'Technologie',
    title: 'Algorithmischer Handel',
    description: 'Entwicklung und Implementierung von Trading-Algorithmen und automatisierten Handelssystemen.',
    badge: 'Fortgeschritten',
  },
]
</script>
