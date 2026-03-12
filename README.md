# AMES - Sitio React + Vite

## Desarrollo local

- `npm install`
- `npm run dev`

## Deploy en amesmutual.com

Este repo ya tiene workflow en [`.github/workflows/deploy-pages.yml`](/home/juampi26/Ames/.github/workflows/deploy-pages.yml) para compilar y publicar en GitHub Pages con dominio custom.

Archivos incluidos para producción:

- `public/CNAME` con `amesmutual.com`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/.htaccess` para hosting Apache/cPanel
- `public/_redirects` para fallback SPA en Netlify

Configuración obligatoria en GitHub:

1. Ir a `Settings > Pages`.
2. En `Source`, seleccionar `GitHub Actions`.
3. En `Custom domain`, configurar `amesmutual.com`.
4. Hacer push a `main`.

La app está configurada para servir desde la raíz `/` del dominio, no desde una subcarpeta.

## Build de producción

- `npm run build`
- `npm run preview`
