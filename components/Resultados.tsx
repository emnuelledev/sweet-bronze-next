import { Placeholder } from "./Placeholder";
import { images } from "@/lib/images";

const shots = [
  { c: "g1", l: "Antes / Después" },
  { c: "g2", l: "Detalle glow" },
  { c: "g3", l: "Bronceado bikini" },
  { c: "g4", l: "Piel dorada" },
  { c: "g5", l: "Editorial" },
  { c: "g6", l: "Resultado natural" },
];

export default function Resultados() {
  return (
    <section className="band band-cream" id="resultados">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Resultados</span>
          <h2 className="section-title">La luz habla por sí sola.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Una galería editorial de nuestro trabajo.
          </p>
        </div>
        <div className="gallery reveal">
          {shots.map((s, i) => (
            <Placeholder key={s.c} className={s.c} label={s.l} src={images.gallery[i] || ""} alt={s.l} />
          ))}
        </div>
      </div>
    </section>
  );
}
