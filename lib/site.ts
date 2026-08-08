// ============================================================
//  Configuración central de Sweet Bronze
//  Edita aquí los datos de contacto — se usan en toda la web.
// ============================================================

export const site = {
  name: "Sweet Bronze",
  tagline: "Tu sol personal",
  city: "Valencia, España",
  since: "2023",

  // Numero WhatsApp
  whatsappNumber: "34647462847",

  instagram: "https://www.instagram.com/sweetbronzevlc/",
  instagramHandle: "@sweetbronzevlc",

  // 👉 Rellena con los datos reales
  hours: "Lun – Sáb · Con cita previa",
  address: "Valencia, España",
  addressNote: "Dirección exacta al confirmar tu reserva",
  languages: "Atención en español y português",
  priceFrom: "desde 70€",

  reviews: { rating: "5.0", count: "19" },

  // 👉 Enlace a tu perfil de Google (botón "Ver más reseñas").
  //    Puedes cambiarlo por tu enlace corto de «Compartir» de Google Maps.
  googleReviewsUrl:
    "https://www.google.com/maps/place/Sweet+Bronze+%7C+Bronceado+Brasile%C3%B1o/@39.4518977,-0.3756861,17z",

  // 👉 Reseñas reales (edita / añade aquí). Para una nueva, copia un bloque {}.
  testimonials: [
    {
      text: "Adorei a experiência, sou brasileira e estava procurando bronze brasileiro! Ela é uma profissional excelente, muito simpática, atenciosa e me deixou super à vontade durante todo o procedimento. O bronze ficou lindo, com um resultado natural e uniforme. Recomendo de olhos fechados.",
      who: "Luísa Martins",
      when: "Google · hace 1 mes",
    },
    {
      text: "Me encantó, súper atentos a los detalles y la atención fue genial. Mi bronceado quedó increíble, súper recomendable ✨🥰",
      who: "Gabriela Costa",
      when: "Google · hace 6 meses",
    },
    {
      text: "Bronze brasileiro incrível, atendimento excelente, com certeza voltarei mais vezes! 💗",
      who: "Daniela Maxi",
      when: "Google · hace 1 año",
    },
    {
      text: "Sou brasileira e turista aqui em Valencia e fiquei super feliz de encontrar bronze com essa brasileira que faz sensacional. Perfecto trabajo y bronce muy bonito, buen atendimiento.",
      who: "Mari V.",
      when: "Google · hace 3 meses",
    },
  ],

  // 👉 Pega aquí el ID de tu widget de Elfsight (o Behold) cuando lo tengas.
  //    Ej.: "elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  instagramWidgetId: "elfsight-app-4c6577e8-0b9e-47ff-aaed-bac632e8df29",

  mapQuery: "Sweet Bronze Bronceado Brasileño, Valencia, España",
  mapEmbedUrl: "",

  // 👉 (Opcional) Reseñas reales de Google en la sección "Reseñas".
  //    Crea un widget de "Google Reviews" en Elfsight y pega aquí SOLO el ID
  //    (la clase "elfsight-app-..."). Vacío = se muestra el carrusel manual.
  googleReviewsWidgetId: "",

  // 👉 Crédito de la agencia (pie de página) + popup con la identidad de Aura.
  builtBy: {
    name: "Aura Digital",
    label: "Website crafted by",
    studio: "Creative Studio · Valencia, Spain",
    tagline: "Designing brands. Building digital presence.",
    desc: "A boutique creative studio for brand identity, websites and digital design.",
    url: "", // 👉 web de Aura Digital (deja "" para ocultar el botón)
    email: "hola@auradigital.com", // 👉 cámbialo por el email real
    logo: "/logo/aura-digital.png", // pie de página (cálido)
    logoDark: "/logo/aura-digital-blanco.png", // popup (blanco sobre obsidiana)
  },
};

export function wa(message = "Hola Sweet Bronze, me gustaría reservar una cita") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
