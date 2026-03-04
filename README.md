# AMES - Sitio React + Vite

## Desarrollo local

- `npm install`
- `npm run dev`

## Deploy en GitHub Pages

Este repo ya tiene workflow en [`.github/workflows/deploy-pages.yml`](/home/juampi26/Ames/.github/workflows/deploy-pages.yml) para compilar y publicar.

Configuración obligatoria en GitHub:

1. Ir a `Settings > Pages`.
2. En `Source`, seleccionar `GitHub Actions`.
3. Hacer push a `main`.

Si `Source` queda en `Deploy from a branch`, GitHub sirve el `index.html` de desarrollo (`/src/main.jsx`) y la web queda en blanco.

## Build de producción

- `npm run build`
- `npm run preview`
