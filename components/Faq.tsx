"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué debo llevar a mi cita?",
    a: "Recomendamos venir con ropa cómoda y oscura, y tu bikini favorito para diseñar las líneas de tu bronceado. Ven con la piel limpia, sin cremas, aceites ni maquillaje corporal.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: "Una sesión suele durar entre 45 y 60 minutos aproximadamente, según el tratamiento y las necesidades de tu piel. Nos tomamos el tiempo necesario para cuidar cada detalle.",
  },
  {
    q: "¿Cómo preparo mi piel antes?",
    a: "Exfolia suavemente tu piel dos o tres días antes e hidrátala bien la víspera. El día de la cita, ven con la piel limpia y libre de productos. Encontrarás la guía completa en la sección «Antes de tu cita».",
  },
  {
    q: "¿Qué diferencia hay entre bikini y cinta?",
    a: "El bronceado con bikini crea las líneas clásicas y naturales de una prenda de baño. El bronceado con cinta (fita) permite diseñar marcas totalmente personalizadas. En tu evaluación te ayudamos a elegir la opción ideal para ti.",
  },
  {
    q: "Es mi primera vez, ¿en qué consiste?",
    a: "¡Bienvenida! Empezamos con una evaluación de tu piel para personalizar la sesión, te explicamos cada paso y diseñamos juntas el resultado que buscas. Todo se hace con calma y en un ambiente relajado.",
  },
  {
    q: "¿Cómo puedo reservar?",
    a: "Reservar es muy fácil: escríbenos por WhatsApp con el botón «Reservar por WhatsApp» y te ayudamos a encontrar el mejor momento para tu cita. También puedes contactarnos por Instagram.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="band" id="faq">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Preguntas frecuentes</span>
          <h2 className="section-title">Todo lo que quieres saber.</h2>
        </div>
        <div className="faq reveal d1">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={i}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  {f.q}
                  <span className="faq-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? 300 : 0 }}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
