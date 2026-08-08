import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { Placeholder } from "@/components/Placeholder";
import { wa } from "@/lib/site";
import { cover } from "@/lib/images";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return { title: "Artículo no encontrado" };
  return { title: a.title, description: a.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  return (
    <article>
      <header className="article-hero">
        <div className="wrap">
          <span className="cat">{a.category}</span>
          <h1>{a.title}</h1>
          <div className="meta">Sweet Tips · {a.readingTime} de lectura</div>
        </div>
      </header>

      <div className="article-body">
        <Link href="/sweet-tips" className="article-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Todos los Sweet Tips
        </Link>

        <Placeholder className="article-cover" label={a.coverLabel} src={cover(a.slug)} alt={a.title} />

        {a.body.map((block, i) =>
          block.startsWith("## ") ? (
            <h2 key={i}>{block.replace(/^##\s+/, "")}</h2>
          ) : (
            <p key={i}>{block}</p>
          )
        )}

        <div className="article-cta">
          <h3>¿Lista para tu bronceado?</h3>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
