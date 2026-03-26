<template>
  <section id="contact" class="section" style="background:#000;border-top:1px solid var(--color-border)">
    <div class="container">
      <div class="about__grid" style="gap:4rem">
        <!-- Info -->
        <div class="fade-up">
          <span class="text-label">Kontakt</span>
          <h2 class="text-h1" style="margin-top:0.75rem">Sprechen wir über Ihre Ziele</h2>
          <p class="text-body-lg" style="margin-top:1rem">
            Unser Team steht Ihnen für Fragen, Beratungsgespräche und
            individuelle Angebote gerne zur Verfügung.
          </p>

          <div style="margin-top:2rem;display:flex;flex-direction:column;gap:1.25rem">
            <div class="card card--glass card--flat" style="display:flex;gap:1rem;align-items:center">
              <div class="card__icon" style="margin-bottom:0;flex-shrink:0">📧</div>
              <div>
                <div class="card__label">E-Mail</div>
                <div class="card__title" style="font-size:1rem">info@kzutrade.de</div>
              </div>
            </div>
            <div class="card card--glass card--flat" style="display:flex;gap:1rem;align-items:center">
              <div class="card__icon" style="margin-bottom:0;flex-shrink:0">📞</div>
              <div>
                <div class="card__label">Telefon</div>
                <div class="card__title" style="font-size:1rem">+49 (0) 800 123 456</div>
              </div>
            </div>
            <div class="card card--glass card--flat" style="display:flex;gap:1rem;align-items:center">
              <div class="card__icon" style="margin-bottom:0;flex-shrink:0">📍</div>
              <div>
                <div class="card__label">Standort</div>
                <div class="card__title" style="font-size:1rem">Frankfurt am Main, Deutschland</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="card fade-up" style="transition-delay:100ms">
          <h3 class="text-h3" style="margin-bottom:1.5rem">Nachricht senden</h3>
          <form @submit.prevent="handleSubmit" style="display:flex;flex-direction:column;gap:1.25rem">
            <div class="grid-cols-2" style="gap:1rem">
              <div class="input-group">
                <label class="input-label">Vorname</label>
                <input class="input" type="text" placeholder="Max" v-model="form.firstName" />
              </div>
              <div class="input-group">
                <label class="input-label">Nachname</label>
                <input class="input" type="text" placeholder="Mustermann" v-model="form.lastName" />
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">E-Mail</label>
              <input class="input" type="email" placeholder="max@beispiel.de" v-model="form.email" />
            </div>
            <div class="input-group">
              <label class="input-label">Interesse</label>
              <select class="input select" v-model="form.interest">
                <option value="">Bitte wählen...</option>
                <option value="analysis">Marktanalyse</option>
                <option value="trading">Aktiver Handel</option>
                <option value="portfolio">Portfolio-Beratung</option>
                <option value="education">Trading Ausbildung</option>
                <option value="algo">Algorithmischer Handel</option>
              </select>
            </div>
            <div class="input-group">
              <label class="input-label">Nachricht</label>
              <textarea
                class="input"
                rows="4"
                placeholder="Beschreiben Sie Ihre Anfrage..."
                v-model="form.message"
                style="resize:vertical"
              />
            </div>

            <div v-if="submitted" class="alert alert--success">
              ✓ Vielen Dank! Wir melden uns in Kürze bei Ihnen.
            </div>

            <button type="submit" class="btn btn--primary btn--full">
              Nachricht absenden →
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({ firstName: '', lastName: '', email: '', interest: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    Object.assign(form, { firstName: '', lastName: '', email: '', interest: '', message: '' })
    submitted.value = false
  }, 4000)
}
</script>
