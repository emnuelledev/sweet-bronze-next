const cards = [
  { when: "2–3 días antes", t: "Exfolia tu piel", d: "Una exfoliación suave elimina células muertas y prepara una base uniforme." },
  { when: "La víspera", t: "Hidrata bien", d: "Una piel hidratada absorbe mejor el color y lo mantiene por más tiempo." },
  { when: "El mismo día", t: "Piel limpia y libre", d: "Ven sin cremas, aceites ni maquillaje corporal para un resultado óptimo." },
  { when: "Qué traer", t: "Ropa cómoda y oscura", d: "Prendas holgadas y tu bikini favorito para diseñar tus líneas ideales." },
];

export default function Antes() {
  return (
    <section className="band" id="antes">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Antes de tu cita</span>
          <h2 className="section-title">Prepara tu piel para el mejor glow.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Unos pequeños gestos marcan la diferencia. Sigue esta guía para que tu bronceado luzca perfecto y
            dure más.
          </p>
        </div>
        <div className="timeline">
          {cards.map((c, i) => (
            <div className={`tl-card reveal${i ? " d" + i : ""}`} key={c.t}>
              <span className="tl-num">{i + 1}</span>
              <span className="tl-when">{c.when}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
