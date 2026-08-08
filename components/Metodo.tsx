import { Placeholder } from "./Placeholder";
import { images } from "@/lib/images";

const steps = [
  { t: "Evaluación profesional", d: "Analizamos tu piel para elegir la intensidad y el enfoque perfectos." },
  { t: "Bronceado con bikini", d: "Las líneas clásicas y favorecedoras que definen el estilo brasileño." },
  { t: "Bronceado con cinta (fita)", d: "Diseñamos marcas personalizadas con la técnica de la cinta." },
  { t: "Exposición personalizada", d: "Ajustamos cada paso a tu tono, tu ritmo y el resultado que buscas." },
  { t: "Resultado natural", d: "Un acabado dorado, luminoso y sin artificios. Tu sol, tu piel." },
];

export default function Metodo() {
  return (
    <section className="band band-champagne" id="metodo">
      <div className="wrap metodo-grid">
        <Placeholder className="metodo-img reveal" label="El método brasileño" sun src={images.metodo} alt="El método brasileño de Sweet Bronze" />
        <div className="reveal d1">
          <span className="eyebrow">El método brasileño</span>
          <h2 className="section-title">
            El bronceado tal y como
            <br />lo entienden en Brasil.
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Más que un tono: una forma de cuidar la piel para que luzca cálida, uniforme y natural. Esto es lo
            que hace único al método brasileño.
          </p>
          <ul className="metodo-list">
            {steps.map((s, i) => (
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
