<template>
  <footer class="footer">
    <div class="footer__main">
      <!-- Brand -->
      <div class="footer__brand">
        <span class="text-logo">KZU Trade</span>
        <p>
          Ihr professioneller Partner für Trading, Investitionen und
          Finanzstrategie. Zuverlässig, transparent und erfahren.
        </p>
        <div style="margin-top:1.5rem;display:flex;flex-direction:column;gap:0.5rem">
          <span class="text-sm">Reguliert &amp; lizenziert</span>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
            <span class="badge badge--neutral">BaFin-reguliert</span>
            <span class="badge badge--neutral">ISO 27001</span>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div>
        <div class="footer__col-title">Navigation</div>
        <ul class="footer__links">
          <li><a href="#home" class="footer__link">Home</a></li>
          <li><a href="#about" class="footer__link">Über uns</a></li>
          <li><a href="#services" class="footer__link">Services</a></li>
          <li><a href="#market" class="footer__link">Märkte</a></li>
          <li><a href="#contact" class="footer__link">Kontakt</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <div class="footer__col-title">Services</div>
        <ul class="footer__links">
          <li><a href="#services" class="footer__link">Marktanalyse</a></li>
          <li><a href="#services" class="footer__link">Aktiver Handel</a></li>
          <li><a href="#services" class="footer__link">Portfolio-Beratung</a></li>
          <li><a href="#services" class="footer__link">Risikomanagement</a></li>
          <li><a href="#services" class="footer__link">Trading Ausbildung</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <div class="footer__col-title">Rechtliches</div>
        <ul class="footer__links">
          <li><a href="#" class="footer__link">Impressum</a></li>
          <li><a href="#" class="footer__link">Datenschutz</a></li>
          <li><a href="#" class="footer__link">AGB</a></li>
          <li><a href="#" class="footer__link">Risikohinweis</a></li>
          <li><a href="#" class="footer__link">Cookie-Einstellungen</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copy">
        &copy; {{ new Date().getFullYear() }} KZU Trade. Alle Rechte vorbehalten.
        Handeln mit Finanzinstrumenten birgt Risiken.
      </p>
      <div class="footer__socials">
        <button class="footer__social-btn" aria-label="Twitter/X" title="Twitter">X</button>
        <button class="footer__social-btn" aria-label="LinkedIn" title="LinkedIn">in</button>
        <button class="footer__social-btn" aria-label="Telegram" title="Telegram">✈</button>
        <button class="footer__social-btn" aria-label="Instagram" title="Instagram">◯</button>
      </div>
    </div>
  </footer>
</template>
