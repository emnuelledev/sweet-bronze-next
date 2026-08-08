const items = [
  {
    t: "Especialistas en bronceado brasileño",
    d: "La técnica auténtica, dominada al detalle y adaptada a cada tipo de piel.",
    p: "M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
    circle: true,
  },
  {
    t: "Atención personalizada",
    d: "Escuchamos, evaluamos y diseñamos cada sesión pensando solo en ti.",
    p: "M20 21a8 8 0 0 0-16 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  },
  {
    t: "Resultados naturales",
    d: "Un dorado luminoso y uniforme, sin tonos anaranjados ni artificiales.",
    p: "M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 14.6 7 18.2l1.9-5.8L4 8.8h6.1z",
  },
  {
    t: "Productos seleccionados",
    d: "Solo fórmulas de calidad, elegidas una a una para cuidar tu piel.",
    p: "M4 7h16M4 12h16M4 17h10",
  },
  {
    t: "Protocolos profesionales",
    d: "Procesos rigurosos de higiene y aplicación en cada visita.",
    p: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  },
  {
    t: "Experiencia premium",
    d: "Un ambiente boutique donde cada detalle está pensado para tu bienestar.",
    p: "M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z",
  },
  {
    t: "Excelente valoración",
    d: "5.0 sobre 5 en Google, con 19 reseñas de clientas encantadas.",
    p: "M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z",
  },
  {
    t: "En el corazón de Valencia",
    d: "Un estudio cercano y acogedor, tuyo desde 2023.",
    p: "M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10zM12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  },
];

export default function Ventajas() {
  return (
    <section className="band band-cream" id="ventajas">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">¿Por qué elegir Sweet Bronze?</span>
          <h2 className="section-title">
            Ocho razones para confiar
            <br />tu piel en nosotras.
          </h2>
        </div>
        <div className="feat-grid">
          {items.map((it, i) => (
            <div className={`feat reveal${i % 4 ? " d" + (i % 4) : ""}`} key={it.t}>
              <div className="feat-ic">
                <svg viewBox="0 0 24 24">
                  {it.circle && <circle cx="12" cy="12" r="4" />}
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
