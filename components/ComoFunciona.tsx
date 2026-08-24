import { Placeholder } from "./Placeholder";
import { images } from "@/lib/images";

const pasos = [
  { t: "Elige tu bronceado", d: "Bikini propio o cinta, según lo que buscas." },
  { t: "Escríbenos por WhatsApp", d: "Te ayudamos a encontrar el mejor horario." },
  { t: "Ven a tu sesión", d: "Y sal con tu glow perfecto." },
];

export default function ComoFunciona() {
  return (
    <section className="band band-champagne" id="como-funciona">
      <div className="wrap metodo-grid">
        <Placeholder className="metodo-img reveal" label="Cómo funciona" sun src={images.metodo} alt="Cómo funciona Sweet Bronze" />
        <div className="reveal d1">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="section-title">En 3 pasos, tan fácil como suena.</h2>
          <ul className="metodo-list">
            {pasos.map((s, i) => (
              <li key={s.t}>
                <span className="mn">{i + 1}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
