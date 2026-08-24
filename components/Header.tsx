"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { site, wa } from "@/lib/site";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#biquinis", label: "Biquinis" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="brand-logo" aria-label="Sweet Bronze — Inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-light" src="/logo/logo_header_blanco.png" alt="Sweet Bronze" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-dark" src="/logo/logo_header_bronce.png" alt="Sweet Bronze" />
          </Link>
          <nav className="nav-links" aria-label="Navegación principal">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
            Reservar
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn" onClick={() => setOpen(false)}>
          Reservar por WhatsApp
        </a>
      </div>
    </>
  );
}
