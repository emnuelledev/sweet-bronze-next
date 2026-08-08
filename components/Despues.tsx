const cards = [
  { t: "Hidratación diaria", d: "Aplica crema nutritiva cada día para conservar la luminosidad de la piel.", p: "M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" },
  { t: "Evita el calor extremo", d: "Las primeras horas, retrasa duchas muy calientes y saunas para fijar el color.", p: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v3M12 20v3M4 12H1M23 12h-3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" },
  { t: "Productos adecuados", d: "Usa geles suaves y sin alcohol para no arrastrar el bronceado antes de tiempo.", p: "M4 7h16M4 12h16M4 17h10" },
  { t: "Mantén el mimo", d: "Cuida tu piel con constancia y prolongarás ese acabado editorial durante días.", p: "M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" },
  { t: "Reserva tu retoque", d: "Agenda tu siguiente sesión para mantener el tono siempre radiante.", p: "M20 12a8 8 0 1 1-8-8M20 4v5h-5" },
  { t: "Protégete del sol", d: "Aplica protección solar para cuidar tu piel y conservar el bronceado.", p: "M12 8a4 4 0 0 0-4 4c0 4 4 8 4 8s4-4 4-8a4 4 0 0 0-4-4z" },
];

export default function Despues() {
  return (
    <section className="band band-champagne" id="despues">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Después del bronceado</span>
          <h2 className="section-title">Haz que tu dorado dure.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            El cuidado posterior es tan importante como la sesión. Con estos gestos, tu bronceado se mantiene
            bonito durante más tiempo.
          </p>
        </div>
        <div className="care-grid">
          {cards.map((c, i) => (
            <div className={`care reveal${i % 3 ? " d" + (i % 3) : ""}`} key={c.t}>
              <div className="care-ic">
                <svg viewBox="0 0 24 24">
                  <path d={c.p} />
                </svg>
              </div>
              <div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
