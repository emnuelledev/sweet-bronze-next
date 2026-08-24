import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Biquinis Sweet Bronze",
  description: "Vitrina de biquinis Sweet Bronze. Consulta disponibilidad y precio por WhatsApp.",
};

export default function BiquinisPage() {
  return (
    <>
      <section className="tips-index-hero">
        <div className="wrap">
          <span className="eyebrow center">Biquinis Sweet Bronze</span>
          <h1>Nuestra vitrina de biquinis.</h1>
          <p>Elige tu modelo favorito y escríbenos por WhatsApp para consultar disponibilidad.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="prod-grid">
            {products.map((p, i) => (
              <ProductCard product={p} delay={i % 3} key={p.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
