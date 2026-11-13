# Punta Norte — Departamentos corporativos

Web estática en Astro 5 para la unidad de negocio de departamentos para
empresas (mismo grupo que Ayres de Calafate y Ayres Dorados Lodge).

22 departamentos en 3 complejos: **Carmela** (Playas Doradas, 6),
**El Descanso** (Playas Doradas, 8) y **Las Grutas** (Las Grutas, 8).

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Pendientes antes de publicar

1. **`src/data/site.js`** — completar los `TODO`:
   - Dominio real (también en `astro.config.mjs` → `site` y en `public/robots.txt`)
   - Email real
   - **Access key de Web3Forms**: crear gratis en https://web3forms.com con el
     email que recibe las consultas, y pegarla en `web3forms.accessKey`.
     Sin eso el formulario no envía (WhatsApp funciona igual).
2. **Textos** — las descripciones de los complejos en `src/data/complejos.js`
   son un borrador: ajustar capacidades, servicios y datos reales.
3. **Fotos** — ya están las que pasó el cliente, convertidas a WebP en
   `public/img/` (originales en `fotos_originales/`, fuera del deploy).
   Para agregar más: convertir a webp y sumar la ruta en
   `src/data/complejos.js`.

## Estructura

- `src/data/` — datos centralizados (sitio y complejos): tocar acá y se
  actualiza toda la web.
- `src/pages/complejos/[slug].astro` — genera una página estática por
  complejo con JSON-LD `LodgingBusiness` (SEO local).
- Formulario de contacto: Web3Forms vía REST en vanilla JS (sin React,
  sin backend), con honeypot antispam y fallback a WhatsApp.
- Sitemap automático (`@astrojs/sitemap`) + robots.txt + canonicals + OG.
