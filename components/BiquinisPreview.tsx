import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

export default function BiquinisPreview() {
  const preview = products.slice(0, 4);
  return (
    <section className="band" id="biquinis">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Biquinis Sweet Bronze</span>
          <h2 className="section-title">Para lucir tu bronceado.</h2>
        </div>
        <div className="prod-grid">
          {preview.map((p, i) => (
            <ProductCard product={p} delay={i % 3} key={p.id} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }} className="reveal">
          <Link href="/biquinis" className="btn btn-ghost">
            Ver todos los biquinis
          </Link>
        </div>
      </div>
    </section>
  );
}
