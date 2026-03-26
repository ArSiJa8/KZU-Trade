# Nuxt Website

## Overview
A Nuxt.js 4 web application using Vue 3, @nuxt/ui, and TypeScript.

## Architecture
- **Framework**: Nuxt 4 with Vue 3
- **UI Library**: @nuxt/ui 4.x
- **Package Manager**: pnpm
- **Language**: TypeScript

## Project Structure
- `nuxt.config.ts` - Nuxt configuration (dev server on 0.0.0.0:5000, all hosts allowed)
- `app/` - Application source files
  - `app.vue` - Root Vue component
  - `components/` - Vue components (e.g., AboutMe.vue)
- `public/` - Static assets
- `pnpm-workspace.yaml` - pnpm workspace config

## Development
- Dev server runs on `0.0.0.0:5000`
- Start with: `pnpm run dev`
- All hosts are allowed for Replit proxy compatibility

## Deployment
- Build: `pnpm run build`
- Run: `node .output/server/index.mjs`
- Target: autoscale
