"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// Reseñas reales, editables en lib/site.ts
const reviews = site.testimonials;

export default function Resenas() {
  // Si pegas el ID del widget de Google Reviews (Elfsight) en lib/site.ts,
  // se muestran tus reseñas vía widget. Si no, se ve el carrusel manual.
  const hasWidget = Boolean(site.googleReviewsWidgetId);

  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = reviews.length;
  const go = (i: number) => setIdx(((i % n) + n) % n);

  const start = () => {
    stop();
    timer.current = setInterval(() => setIdx((v) => (v + 1) % n), 6000);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    if (hasWidget) return;
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWidget]);

  useEffect(() => {
    if (!hasWidget) return;
    const id = "elfsight-platform";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [hasWidget]);

  return (
    <section className="band rev" id="resenas">
      <div className="wrap">
        <div className="rev-head reveal">
          <span className="eyebrow center">Reseñas</span>
          <h2 className="section-title">Lo que dicen nuestras clientas.</h2>
          <div className="rev-score">
            <span className="big">{site.reviews.rating}</span>
            <div>
              <div className="stars">★★★★★</div>
              <div className="rs-txt">{site.reviews.count} reseñas en Google</div>
            </div>
          </div>
        </div>

        {hasWidget ? (
          <div className="reviews-embed reveal d1">
            <div className={site.googleReviewsWidgetId} data-elfsight-app-lazy />
          </div>
        ) : (
          <div className="slider reveal d1" onMouseEnter={stop} onMouseLeave={start}>
            <div className="slides">
              <div className="slides-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {reviews.map((r, i) => (
                  <div className="slide" key={i}>
                    <div className="quote">
                      <span className="qmark">&ldquo;</span>
                      <div className="stars">★★★★★</div>
                      <p>{r.text}</p>
                      <div className="who">{r.who}</div>
                      <div className="whn">{r.when}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-nav">
              <button aria-label="Reseña anterior" onClick={() => go(idx - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="dots">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Reseña ${i + 1}`}
                    className={i === idx ? "active" : ""}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
              <button aria-label="Siguiente reseña" onClick={() => go(idx + 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="rev-more reveal d2">
          <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 18, height: 18 }}>
              <path d="M12 2l2.6 6.9H22l-5.9 4.4 2.2 7L12 16.9 5.7 20.3l2.2-7L2 8.9h7.4z" />
            </svg>
            Ver más reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
