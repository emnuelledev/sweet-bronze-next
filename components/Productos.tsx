import { Placeholder } from "./Placeholder";
import { images } from "@/lib/images";

const products = [
  { step: "Antes · Preparación", t: "Exfoliante preparador", d: "Renueva y alisa la piel para que el bronceado se fije de forma uniforme y duradera.", tags: ["Piel lisa", "Uniformidad", "Base perfecta"] },
  { step: "Durante · Sesión", t: "Fórmula bronceadora", d: "El corazón del método brasileño: un color cálido, natural y progresivo, sin tonos artificiales.", tags: ["Tono natural", "Sin naranjas", "Alta calidad"] },
  { step: "Después · Fijación", t: "Sellador de color", d: "Protege el resultado recién conseguido y prolonga la intensidad del bronceado.", tags: ["Larga duración", "Protección"] },
  { step: "Mantenimiento", t: "Crema hidratante nutritiva", d: "Mantiene la piel nutrida y luminosa día a día, para que el glow dure mucho más.", tags: ["Hidratación", "Glow diario"] },
  { step: "Realce", t: "Aceite iluminador", d: "Un toque final de luz que realza el dorado y aporta un acabado editorial.", tags: ["Luminosidad", "Acabado seda"] },
  { step: "Cuidado", t: "Bruma refrescante", d: "Calma y refresca la piel tras la sesión, dejándola suave y confortable.", tags: ["Calmante", "Frescor"] },
];

export default function Productos() {
  return (
    <section className="band" id="productos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Productos</span>
          <h2 className="section-title">Cada fórmula, elegida con criterio.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Estos son los cuidados que acompañan tu bronceado. Cada uno tiene un propósito y un momento.
          </p>
        </div>
        <div className="prod-grid">
          {products.map((p, i) => (
            <div className={`prod reveal${i % 3 ? " d" + (i % 3) : ""}`} key={p.t}>
              <Placeholder className="prod-img" label={"Producto · " + p.step.split(" ")[0]} src={images.productos[i] || ""} alt={p.t} />
              <div className="prod-body">
                <span className="step">{p.step}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="prod-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
