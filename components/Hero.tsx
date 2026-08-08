import { site, wa } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" />
      <div className="wrap hero-inner">
        <span className="kicker reveal in">
          Bronceado Brasileño · {site.city.split(",")[0]} · Desde {site.since}
        </span>
        <h1 className="reveal in d1">
          El último sol dorado,
          <br />
          <em>hecho a tu medida.</em>
        </h1>
        <p className="sub reveal in d2">
          Bienvenida a Sweet Bronze, el estudio donde el auténtico bronceado brasileño se vive como una
          experiencia de lujo. Piel radiante, resultados naturales y una atención pensada solo para ti.
        </p>
        <div className="hero-cta reveal in d3">
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.3C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
            </svg>
            Reservar por WhatsApp
          </a>
          <a href="/#tratamientos" className="btn btn-ghost">
            Ver tratamientos
          </a>
        </div>
        <div className="reviews-badge reveal in d4">
          <div>
            <div className="stars">★★★★★</div>
            <b>{site.reviews.rating}</b>
          </div>
          <div className="divider" />
          <div className="rb-txt">
            Valoración en Google
            <br />
            {site.reviews.count} reseñas · Desde {site.since}
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Descubre</span>
        <span className="dot" />
      </div>
    </section>
  );
}
