import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer, { WhatsAppFloat } from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sweetbronze.es"),
  title: {
    default: "Sweet Bronze | Bronceado Brasileño en Valencia · Tu Sol Personal",
    template: "%s | Sweet Bronze",
  },
  description:
    "Sweet Bronze — estudio de bronceado brasileño en Valencia desde 2023. Bronceado con bikini y con cinta, resultados naturales, atención personalizada y experiencia premium. Reserva por WhatsApp.",
  keywords: [
    "bronceado brasileño Valencia",
    "bronceado Valencia",
    "bronceado con cinta Valencia",
    "bronceado profesional Valencia",
    "bronceado bikini Valencia",
    "Sweet Bronze Valencia",
  ],
  authors: [{ name: "Sweet Bronze" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Sweet Bronze",
    title: "Sweet Bronze | Bronceado Brasileño en Valencia",
    description:
      "El auténtico bronceado brasileño llega a Valencia. Resultados naturales, experiencia premium y atención personalizada. Reserva por WhatsApp.",
    url: "https://www.sweetbronze.es/",
    images: ["/logo/06_logo_fondo_coral.png"],
  },
  alternates: { canonical: "https://www.sweetbronze.es/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Sweet Bronze",
  description:
    "Estudio de bronceado brasileño en Valencia. Bronceado con bikini y con cinta, resultados naturales y experiencia premium.",
  image: "https://www.sweetbronze.es/logo/06_logo_fondo_coral.png",
  priceRange: "€€",
  address: { "@type": "PostalAddress", addressLocality: "Valencia", addressCountry: "ES" },
  areaServed: "Valencia",
  foundingDate: "2023",
  slogan: "Tu sol personal",
  sameAs: [site.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.reviews.rating,
    reviewCount: site.reviews.count,
    bestRating: "5",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollReveal />
      </body>
    </html>
  );
}
