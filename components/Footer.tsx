import Link from "next/link";
import { site, wa } from "@/lib/site";
import AuraCredit from "./AuraCredit";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo_header_blanco.png" alt="Sweet Bronze" />
            <p className="foot-brand-p">
              El auténtico bronceado brasileño en Valencia. Piel radiante, resultados naturales y una
              experiencia hecha a tu medida desde {site.since}.
            </p>
          </div>
          <div>
            <h4>Explora</h4>
            <ul>
              <li><Link href="/#servicios">Servicios</Link></li>
              <li><Link href="/#como-funciona">Cómo funciona</Link></li>
              <li><Link href="/#biquinis">Biquinis</Link></li>
              <li><Link href="/#resultados">Resultados</Link></li>
            </ul>
          </div>
          <div>
            <h4>Reservas</h4>
            <ul>
              <li><Link href="/#contacto">Contacto</Link></li>
              <li><a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><Link href="/sweet-tips">Sweet Tips</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Sweet Bronze · Bronceado Brasileño · Valencia, España</span>
          <div className="foot-social">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
              </svg>
            </a>
            <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.3C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
              </svg>
            </a>
          </div>
        </div>

        <AuraCredit />
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={wa()} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Reservar por WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.3C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm4.6 12.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.2-2.7-.2-.4 0-.4.4-1 .1-.1.1-.3 0-.4l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.7.7-1 1.7-.9 2 .1.3.6 1.5 1.5 2.8 1.5 2.2 3 2.9 4.5 3.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2z" />
      </svg>
    </a>
  );
}
