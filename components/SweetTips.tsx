import Link from "next/link";
import { articles } from "@/lib/articles";
import { Placeholder } from "./Placeholder";
import { cover } from "@/lib/images";

export default function SweetTips() {
  const preview = articles.slice(0, 6);
  return (
    <section className="band" id="tips">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Sweet Tips</span>
          <h2 className="section-title">Nuestra revista del glow.</h2>
          <p className="lead" style={{ margin: "16px auto 0" }}>
            Consejos, secretos y pequeñas lecciones de belleza brasileña para lucir tu piel todo el año.
          </p>
        </div>
        <div className="tips-grid">
          {preview.map((a, i) => (
            <Link href={`/sweet-tips/${a.slug}`} className={`tip reveal${i % 3 ? " d" + (i % 3) : ""}`} key={a.slug}>
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
        <div style={{ textAlign: "center", marginTop: 48 }} className="reveal">
          <Link href="/sweet-tips" className="btn btn-ghost" style={{ background: "var(--white-soft)" }}>
            Ver todos los Sweet Tips
          </Link>
        </div>
      </div>
    </section>
  );
}
