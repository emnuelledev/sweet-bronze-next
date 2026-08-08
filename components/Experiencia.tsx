const items = [
  { n: "01", t: "Técnica profesional", d: "Manos expertas que conocen cada piel y cada matiz del bronceado." },
  { n: "02", t: "Confianza y glow", d: "Sales sintiéndote radiante, segura y luminosa de la cabeza a los pies." },
  { n: "03", t: "Relajación total", d: "Un espacio calmado para desconectar y regalarte un momento solo tuyo." },
  { n: "04", t: "Detalle absoluto", d: "Cuidamos cada línea, cada zona y cada acabado. Nada se deja al azar." },
];

export default function Experiencia() {
  return (
    <section className="band exp" id="experiencia">
      <div className="wrap">
        <span className="eyebrow reveal">La experiencia Sweet Bronze</span>
        <h2 className="section-title reveal d1">
          No vendemos bronceado.
          <br />Cuidamos cómo te sientes.
        </h2>
        <p className="exp-lead reveal d2">
          Cuando cruzas nuestra puerta no vienes a por una sesión: vienes a reencontrarte con tu mejor
          versión. Lo demás —el dorado, el glow, la luz en la piel— llega solo.
        </p>
        <div className="exp-grid">
          {items.map((it, i) => (
            <div className={`exp-item reveal${i ? " d" + i : ""}`} key={it.n}>
              <span className="en">{it.n}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
