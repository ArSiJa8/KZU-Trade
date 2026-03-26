<template>
  <section id="market" class="section" style="background:#000;border-top:1px solid var(--color-border)">
    <div class="container">
      <div class="flex-between" style="margin-bottom:2.5rem">
        <div>
          <span class="text-label">Live Märkte</span>
          <h2 class="text-h2" style="margin-top:0.5rem">Aktuelle Marktübersicht</h2>
        </div>
        <a href="#contact" class="btn btn--outline btn--sm">Alle Märkte</a>
      </div>

      <!-- Chart placeholder -->
      <div class="chart-container" style="margin-bottom:2rem">
        <div class="chart-container__header">
          <div>
            <div class="trade-card__name">BTC / USD</div>
            <div class="trade-card__pair">Bitcoin · Krypto</div>
          </div>
          <div style="text-align:right">
            <div class="stat-item__value" style="font-size:1.5rem">$67,842.30</div>
            <span class="badge badge--green">▲ +2.41%</span>
          </div>
        </div>
        <!-- Simulated sparkline chart using CSS -->
        <div class="chart-area" style="min-height:160px;display:flex;align-items:flex-end;gap:4px;padding:1rem 0.5rem 0">
          <div
            v-for="(bar, i) in chartBars"
            :key="i"
            :style="{ height: bar + '%', flex: 1, background: 'rgba(0,115,255,0.7)', borderRadius: '3px 3px 0 0', minHeight: '8px', transition: 'height 0.5s ease' }"
          />
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:0.75rem;padding-inline:0.5rem">
          <span class="stat-item__label">24h Tief: $64,210</span>
          <span class="stat-item__label">24h Hoch: $68,920</span>
        </div>
      </div>

      <!-- Trade cards grid -->
      <div class="grid-cols-2 stagger">
        <div v-for="asset in assets" :key="asset.pair" class="trade-card">
          <div class="trade-card__avatar">{{ asset.abbr }}</div>
          <div class="trade-card__info">
            <div class="trade-card__name">{{ asset.name }}</div>
            <div class="trade-card__pair">{{ asset.pair }}</div>
          </div>
          <div class="trade-card__price">
            <div class="trade-card__value">{{ asset.price }}</div>
            <span
              class="trade-card__change"
              :class="asset.change >= 0 ? 'stat-item__change--up' : 'stat-item__change--down'"
            >
              {{ asset.change >= 0 ? '▲' : '▼' }} {{ Math.abs(asset.change) }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const chartBars = [42, 58, 35, 67, 51, 78, 44, 62, 39, 55, 71, 48, 83, 37, 60, 74, 46, 53, 69, 41, 77, 50, 64, 38, 72, 56, 45, 68, 52, 80, 43, 61]

const assets = [
  { abbr: 'BTC', name: 'Bitcoin',    pair: 'BTC/USD', price: '$67,842',  change:  2.41 },
  { abbr: 'ETH', name: 'Ethereum',   pair: 'ETH/USD', price: '$3,512',   change:  1.87 },
  { abbr: 'EUR', name: 'Euro',       pair: 'EUR/USD', price: '1.0832',   change: -0.12 },
  { abbr: 'GBP', name: 'Pfund',      pair: 'GBP/USD', price: '1.2701',   change:  0.34 },
  { abbr: '▲',  name: 'DAX Index',  pair: 'DAX',     price: '18,210',   change: -0.55 },
  { abbr: 'AU',  name: 'Gold',       pair: 'XAU/USD', price: '$2,318',   change:  0.18 },
]
</script>
