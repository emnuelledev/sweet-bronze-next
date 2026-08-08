import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { Placeholder } from "@/components/Placeholder";
import { cover } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sweet Tips — Consejos de bronceado brasileño",
  description:
    "La revista del glow de Sweet Bronze: consejos para preparar tu piel, hacer durar el bronceado y lucir radiante todo el año.",
};

export default function SweetTipsIndex() {
  return (
    <>
      <section className="tips-index-hero">
        <div className="wrap">
          <span className="eyebrow center">Sweet Tips</span>
          <h1>Nuestra revista del glow.</h1>
          <p>Consejos, secretos y pequeñas lecciones de belleza brasileña para lucir tu piel todo el año.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="tips-grid">
            {articles.map((a, i) => (
              <Link
                href={`/sweet-tips/${a.slug}`}
                className={`tip reveal${i % 3 ? " d" + (i % 3) : ""}`}
                key={a.slug}
              >
                <Placeholder className="tip-img" label={a.coverLabel} src={cover(a.slug)} alt={a.title}>
                  <span className="tip-cat">{a.category}</span>
                </Placeholder>
                <div className="tip-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="tip-read">
                    Leer artículo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
