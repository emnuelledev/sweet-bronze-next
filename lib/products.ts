// ============================================================
//  BIQUINIS SWEET BRONZE — catálogo (vitrina, sin checkout)
//  Para añadir/editar/quitar un modelo, edita este array.
//  1) Pon la foto en:  public/img/bikinis/
//  2) Escribe la ruta empezando por "/img/..."  (sin "public")
//  3) Deja "" para mostrar el recuadro placeholder
// ============================================================

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "aurora", name: "Aurora", price: 39, image: "" },
  { id: "coral", name: "Coral", price: 42, image: "" },
  { id: "valencia", name: "Valencia", price: 45, image: "" },
  { id: "sol-dorado", name: "Sol Dorado", price: 39, image: "" },
];
