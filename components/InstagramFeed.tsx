"use client";
import { useEffect } from "react";
import { site } from "@/lib/site";
import { SunIcon } from "./Placeholder";

export default function InstagramFeed() {
  const hasWidget = Boolean(site.instagramWidgetId);

  useEffect(() => {
    if (!hasWidget) return;
    // Carga el script de la plataforma Elfsight una sola vez.
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
    <section className="band ig" id="instagram">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Síguenos</span>
          <h2 className="section-title">Nuestro día a día en Instagram.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Resultados, novedades y la vida en el estudio. Síguenos en {site.instagramHandle} y no te pierdas
            nada.
          </p>
        </div>

        {hasWidget ? (
          <div className="ig-embed reveal">
            {/* El widget de Elfsight se renderiza aquí a partir de tu ID. */}
            <div className={site.instagramWidgetId} data-elfsight-app-lazy />
          </div>
        ) : (
          <div className="ig-fallback reveal">
            <SunIcon />
            <h3>Feed de Instagram</h3>
            <p>
              Aquí aparecerá tu feed en directo. Crea un widget gratuito en Elfsight o Behold, copia su ID y
              pégalo en <code>lib/site.ts</code> (campo <b>instagramWidgetId</b>).
            </p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver Instagram {site.instagramHandle}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
