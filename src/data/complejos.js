// ════════════════════════════════════════════════════════════════════
// COMPLEJOS — fuente única de datos para cards, páginas y SEO
// Reemplazar las imágenes placeholder por fotos reales en /public/img/
// ════════════════════════════════════════════════════════════════════
export const COMPLEJOS = [
  {
    slug: 'carmela',
    nombre: 'Carmela',
    ubicacion: 'Playas Doradas',
    localidad: 'Sierra Grande, Río Negro',
    departamentos: 6,
    resumen:
      'Seis departamentos equipados en Playas Doradas, a minutos de Sierra Grande y Punta Colorada. Ideal para equipos de trabajo en proyectos de la zona.',
    descripcion:
      'El complejo Carmela cuenta con 6 departamentos completamente equipados en el balneario de Playas Doradas, a 30 km de Sierra Grande. Cada unidad dispone de cocina completa, ropa blanca, calefacción y todo lo necesario para estadías laborales cortas o extendidas. La ubicación permite llegar rápido a los frentes de obra de Sierra Grande y Punta Colorada, con la tranquilidad de alojarse frente al mar.',
    capacidad: 'Hasta 4 personas por departamento',
    mapsQuery: 'Playas Doradas, Río Negro, Argentina',
    imagen: '/img/carmela-1.webp',
    galeria: ['/img/carmela-1.webp', '/img/carmela-2.webp'],
  },
  {
    slug: 'el-descanso',
    nombre: 'El Descanso',
    ubicacion: 'Playas Doradas',
    localidad: 'Sierra Grande, Río Negro',
    departamentos: 8,
    resumen:
      'Ocho departamentos en Playas Doradas pensados para estadías extendidas de personal: espacios amplios, cocina completa y servicios incluidos.',
    descripcion:
      'El Descanso suma 8 departamentos en Playas Doradas, pensados para rotaciones de personal y estadías extendidas. Unidades amplias con cocina completa, ropa blanca y limpieza periódica, a 30 km de Sierra Grande. Junto con Carmela, permite alojar equipos numerosos en un mismo balneario, simplificando la logística de la empresa.',
    capacidad: 'Hasta 4 personas por departamento',
    mapsQuery: 'Playas Doradas, Río Negro, Argentina',
    imagen: '/img/el-descanso-1.webp',
    galeria: [
      '/img/el-descanso-1.webp',
      '/img/el-descanso-2.webp',
      '/img/el-descanso-3.webp',
      '/img/el-descanso-4.webp',
      '/img/el-descanso-5.webp',
    ],
  },
  {
    slug: 'las-grutas',
    nombre: 'Las Grutas',
    ubicacion: 'Las Grutas',
    localidad: 'San Antonio Oeste, Río Negro',
    departamentos: 8,
    resumen:
      'Ocho departamentos en Las Grutas, a minutos de San Antonio Oeste y el puerto de San Antonio Este. Base ideal para operaciones en la zona del Golfo.',
    descripcion:
      'Nuestro complejo en Las Grutas ofrece 8 departamentos equipados a minutos de San Antonio Oeste y del puerto de San Antonio Este. Es la base ideal para empresas con operaciones logísticas, portuarias o de servicios en la zona del Golfo San Matías. Unidades con cocina completa, ropa blanca y todos los servicios, en una ciudad con infraestructura comercial todo el año.',
    capacidad: 'Hasta 4 personas por departamento',
    mapsQuery: 'Las Grutas, Río Negro, Argentina',
    imagen: '/img/las-grutas-1.webp',
    galeria: [
      '/img/las-grutas-1.webp',
      '/img/las-grutas-2.webp',
      '/img/las-grutas-3.webp',
      '/img/las-grutas-4.webp',
      '/img/las-grutas-5.webp',
      '/img/las-grutas-6.webp',
      '/img/las-grutas-7.webp',
    ],
  },
];

export const TOTAL_DEPARTAMENTOS = COMPLEJOS.reduce(
  (sum, c) => sum + c.departamentos,
  0
);
