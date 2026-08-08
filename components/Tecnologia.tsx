const items = [
  { t: "Equipo profesional", d: "Trabajamos con material específico y de calidad para un resultado impecable.", p: "M4 4h16v16H4zM8 9h8M8 13h5", rect: true },
  { t: "Protocolos de higiene", d: "Máxima limpieza y desinfección antes, durante y después de cada sesión.", p: "M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6zM9 12l2 2 4-4" },
  { t: "Preparación de la piel", d: "Cada bronceado empieza con una piel bien preparada para durar más.", p: "M12 3v18M5 8c0 4 3 6 7 6M19 8c0 4-3 6-7 6" },
  { t: "Evaluación personalizada", d: "Estudiamos tu tipo de piel para adaptar el tratamiento a ti.", p: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4-4" },
  { t: "Ambiente profesional", d: "Un espacio boutique, cálido y discreto, diseñado para que te relajes.", p: "M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6" },
  { t: "Seguridad y confianza", d: "Cuidamos cada paso con responsabilidad y transparencia total.", p: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

export default function Tecnologia() {
  return (
    <section className="band band-cream" id="tecnologia">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Tecnología y cuidado</span>
          <h2 className="section-title">Profesionalidad en cada detalle.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Un entorno cuidado, protocolos rigurosos y toda nuestra atención puesta en tu bienestar y tu
            seguridad.
          </p>
        </div>
        <div className="tech-grid">
          {items.map((it, i) => (
            <div className={`tech reveal${i % 3 ? " d" + (i % 3) : ""}`} key={it.t}>
              <div className="tech-ic">
                <svg viewBox="0 0 24 24">
                  <path d={it.p} />
                </svg>
              </div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
