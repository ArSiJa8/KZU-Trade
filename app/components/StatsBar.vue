<template>
  <div class="stats-bar">
    <div class="stats-bar__inner">
      <div v-for="item in stats" :key="item.symbol" class="stat-item">
        <span class="stat-item__label">{{ item.symbol }}</span>
        <span class="stat-item__value">{{ item.value }}</span>
        <span
          class="stat-item__change"
          :class="item.change >= 0 ? 'stat-item__change--up' : 'stat-item__change--down'"
        >
          {{ item.change >= 0 ? '+' : '' }}{{ item.change }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { symbol: 'BTC/USD', value: '67,842.30', change: 2.41 },
  { symbol: 'ETH/USD', value: '3,512.80',  change: 1.87 },
  { symbol: 'EUR/USD', value: '1.0832',    change: -0.12 },
  { symbol: 'GBP/USD', value: '1.2701',    change: 0.34 },
  { symbol: 'DAX',     value: '18,210.40', change: -0.55 },
  { symbol: 'S&P 500', value: '5,248.90',  change: 0.72 },
  { symbol: 'GOLD',    value: '2,318.50',  change: 0.18 },
  { symbol: 'OIL',     value: '82.34',     change: -1.24 },
]
</script>
