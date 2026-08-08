// ============================================================
//  IMÁGENES DEL SITIO — edita solo este archivo
//  1) Pon tus fotos en:  public/img/
//  2) Escribe la ruta empezando por "/img/..."  (sin "public")
//  3) Deja "" para mantener el recuadro placeholder
// ============================================================

export const images = {
  // Aún sin foto → se muestra el placeholder
  sobre: "",
  metodo: "",
  productos: ["", "", "", "", "", ""],

  // Foto del tratamiento estrella
  tratamientoBikini: "/img/bikini-principal.jpg",

  // Galería de "Resultados"
  gallery: [
    "/img/resultado-1.jpg",
    "/img/resultado-2.jpg",
    "/img/resultado-3.jpg",
    "/img/resultado-4.jpg",
    "/img/resultado-5.jpg",
    "/img/resultado-6.jpg",
  ],
};

// Portadas de los artículos (por slug). "" = placeholder.
export const articleCovers: Record<string, string> = {
  "preparar-la-piel": "",
  "hacer-durar-el-bronceado": "",
  "bikini-o-cinta": "/img/bikini-cinta.jpg",
  "errores-comunes": "",
  "primera-sesion": "",
  "glow-de-vacaciones": "",
};

export function cover(slug: string) {
  return articleCovers[slug] || "";
}
