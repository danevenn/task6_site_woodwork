export type Project = {
  slug: string;
  title: string;
  category: "Muebles a medida" | "Restauración" | "Carpintería estructural";
  shortDescription: string;
  description: string;
  image: string;
  blurDataURL: string;
  gallery: string[];
  materials: string[];
  year: number;
  client: string;
  durationWeeks: number;
};

const PROJECTS: Project[] = [
  {
    slug: "mesa-roble-macizo",
    title: "Mesa de Roble Macizo",
    category: "Muebles a medida",
    shortDescription:
      "Mesa de comedor de 240 cm tallada a mano en roble francés con acabado de aceite duro.",
    description:
      "Pieza central diseñada para una vivienda en el Empordà. Tablero compuesto por tres tablas seleccionadas de roble francés de origen sostenible, unidas con espigas pasantes de fresno y acabado mediante tres capas de aceite duro Osmo. Las patas trapezoidales en acero negro mate fueron forjadas por un herrero local para integrar tradición y diseño contemporáneo.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABT/2Q==",
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1600&q=80",
    ],
    materials: ["Roble francés FSC", "Fresno macizo", "Acero negro forjado", "Aceite duro Osmo"],
    year: 2025,
    client: "Vivienda particular · Empordà",
    durationWeeks: 8,
  },
  {
    slug: "reforma-loft-industrial",
    title: "Reforma Loft Industrial",
    category: "Carpintería estructural",
    shortDescription:
      "Estructura de altillo en madera laminada y peldaños en abeto antiguo recuperado.",
    description:
      "Intervención integral sobre un antiguo taller textil del Poblenou. Se diseñó una estructura de altillo en madera laminada de pino para soportar la zona de descanso, manteniendo las cerchas originales del edificio a la vista. Los peldaños se construyeron con tarima antigua recuperada de una masía catalana, restaurada cepillo a cepillo en el taller.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABT/2Q==",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
    ],
    materials: ["Pino laminado estructural", "Abeto antiguo recuperado", "Tornillería Spax", "Aceite cera natural"],
    year: 2024,
    client: "Loft Poblenou · Barcelona",
    durationWeeks: 14,
  },
  {
    slug: "biblioteca-nogal-suspendida",
    title: "Biblioteca de Nogal Suspendida",
    category: "Muebles a medida",
    shortDescription:
      "Estantería de pared con módulos de nogal americano y soportes ocultos de acero.",
    description:
      "Composición modular pensada para acoger 600 volúmenes en un despacho doméstico. Cada balda se talla en una sola pieza de nogal americano de 35 mm para garantizar la rigidez sin necesidad de refuerzos visibles. Los soportes se atornillan directamente al muro con varilla métrica oculta, dando la sensación de que la biblioteca flota.",
    image:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=1600&q=80",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABT/2Q==",
    gallery: [
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=1600&q=80",
    ],
    materials: ["Nogal americano", "Varilla roscada M10", "Tapón ciego de latón", "Cera natural de abeja"],
    year: 2025,
    client: "Despacho profesional · Sant Gervasi",
    durationWeeks: 5,
  },
  {
    slug: "restauracion-armario-modernista",
    title: "Restauración Armario Modernista",
    category: "Restauración",
    shortDescription:
      "Recuperación integral de un armario modernista de 1908 con marquetería original.",
    description:
      "Pieza familiar de finales del siglo XIX heredada durante cuatro generaciones. El trabajo incluyó decapado manual, sustitución de tres piezas de marquetería de palosanto, reparación estructural de los travesaños inferiores y aplicación de goma laca a muñequilla en seis manos. Se mantuvieron intactos los herrajes de bronce originales tras una limpieza con bicarbonato y aceite de linaza.",
    image:
      "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?auto=format&fit=crop&w=1600&q=80",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABT/2Q==",
    gallery: [
      "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?auto=format&fit=crop&w=1600&q=80",
    ],
    materials: ["Palosanto (marquetería)", "Goma laca", "Bronce original", "Aceite de linaza"],
    year: 2024,
    client: "Colección privada · Gràcia",
    durationWeeks: 12,
  },
  {
    slug: "escritorio-fresno-curvo",
    title: "Escritorio de Fresno Curvo",
    category: "Muebles a medida",
    shortDescription:
      "Escritorio de 180 cm con frente curvado mediante laminado al vapor.",
    description:
      "Diseñado para un estudio de arquitectura, el frente curvado se obtuvo laminando ocho chapas de fresno de 1.5 mm sobre un molde de MDF, presionadas durante 48 horas y posteriormente cepilladas a mano. La superficie se trató con un acabado de poliuretano al agua mate para resistir el uso intensivo sin alterar el tono claro de la madera.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1600&q=80",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABT/2Q==",
    gallery: [
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1600&q=80",
    ],
    materials: ["Fresno europeo", "Cola de urea-formaldehído", "Poliuretano al agua", "Patas de acero inoxidable"],
    year: 2025,
    client: "Estudio Casals & Partners",
    durationWeeks: 7,
  },
  {
    slug: "porche-cedro-vivienda-rural",
    title: "Porche de Cedro · Vivienda Rural",
    category: "Carpintería estructural",
    shortDescription:
      "Estructura cubierta de 36 m² en madera de cedro rojo del oeste americano.",
    description:
      "Porche de gran envergadura para una casa rehabilitada en el Berguedà. Toda la estructura — pilares, jácenas y correas — se ejecutó en cedro rojo del oeste por su excepcional resistencia natural a la intemperie sin necesidad de tratamientos químicos. Los ensambles principales se realizaron con caja y espiga reforzada, manteniendo la imagen artesanal sin recurrir a herrajes visibles.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABT/2Q==",
    gallery: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
    ],
    materials: ["Cedro rojo del oeste", "Conectores Simpson Strong-Tie", "Aceite teca exterior"],
    year: 2024,
    client: "Masía rehabilitada · Berguedà",
    durationWeeks: 10,
  },
];

export async function getAllProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((p) => p.slug === slug);
}

export async function getRecentProjects(limit = 3): Promise<Project[]> {
  return [...PROJECTS].sort((a, b) => b.year - a.year).slice(0, limit);
}
