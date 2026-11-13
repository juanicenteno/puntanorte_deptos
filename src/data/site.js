// ════════════════════════════════════════════════════════════════════
// DATOS DEL SITIO — completar los TODO antes de publicar
// ════════════════════════════════════════════════════════════════════
export const SITE = {
  name: 'Punta Norte',
  legalName: 'Punta Norte Departamentos',
  tagline: 'Departamentos corporativos en la Costa Atlántica de Río Negro',
  description:
    'Punta Norte Departamentos — 22 departamentos equipados para empresas en Playas Doradas y Las Grutas, Río Negro. Estadías extendidas, convenios corporativos y facturación para personal en comisión y proyectos.',
  url: 'https://puntanorte.com.ar', // TODO: dominio real (también en astro.config.mjs)
  whatsapp: '5493764804006',
  whatsappDisplay: '+54 9 3764 80-4006',
  email: 'contacto@puntanorte.com.ar', // TODO: email real
  instagram: '', // TODO: si tienen, URL completa

  // Web3Forms (https://web3forms.com): la access key vive en .env
  // (PUBLIC_WEB3FORMS_ACCESS_KEY). Ver .env.example.
  web3forms: {
    accessKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY,
  },
};
