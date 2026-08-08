import { site, wa } from "@/lib/site";

export default function Contacto() {
  const mapSrc =
    site.mapEmbedUrl ||
    `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`;

  return (
    <section className="band contacto" id="contacto">
      <div className="wrap">
        <div className="sec-head reveal" style={{ maxWidth: 560 }}>
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">Tu sol personal te espera.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.9)", marginTop: 16 }}>
            Reserva tu cita, resuelve tus dudas o ven a conocernos. Estaremos encantadas de recibirte en
            Valencia.
          </p>
        </div>
        <div className="contact-grid">
          <div className="reveal d1">
            <div className="contact-cards">
              <div className="cc">
                <div className="cc-ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3a9 9 0 0 0-8 13l-1 5 5-1a9 9 0 1 0 4-17z" />
                  </svg>
                </div>
                <h3>WhatsApp</h3>
                <p>
                  <a href={wa()} target="_blank" rel="noopener noreferrer">
                    Escríbenos y reserva
                  </a>
                  <br />
                  <small>Respuesta rápida</small>
                </p>
              </div>
              <div className="cc">
                <div className="cc-ic">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
                  </svg>
                </div>
                <h3>Instagram</h3>
                <p>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    {site.instagramHandle}
                  </a>
                  <br />
                  <small>Síguenos e inspírate</small>
                </p>
              </div>
              <div className="cc">
                <div className="cc-ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </div>
                <h3>Dirección</h3>
                <p>
                  {site.address}
                  <br />
                  <small>{site.addressNote}</small>
                </p>
              </div>
              <div className="cc">
                <div className="cc-ic">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3>Horario</h3>
                <p>
                  {site.hours}
                  <br />
                  <small>{site.languages}</small>
                </p>
              </div>
            </div>
            <div className="contact-cta">
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 18, height: 18 }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.3C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                Reservar por WhatsApp
              </a>
            </div>
          </div>
          <div className="map-embed reveal d2">
            <iframe
              title="Ubicación de Sweet Bronze en Valencia"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
