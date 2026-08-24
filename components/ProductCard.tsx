import { Placeholder } from "./Placeholder";
import { wa, waMessages } from "@/lib/site";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <div className={`prod reveal${delay ? " d" + delay : ""}`}>
      <Placeholder className="prod-img" label={"Biquini · " + product.name} src={product.image} alt={product.name} />
      <div className="prod-body">
        <h3>{product.name}</h3>
        <p className="prod-price">{product.price}€</p>
        <a
          href={wa(waMessages.product(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost prod-btn"
        >
          Tengo interés
        </a>
      </div>
    </div>
  );
}
