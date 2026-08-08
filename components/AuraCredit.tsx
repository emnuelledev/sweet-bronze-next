"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function AuraCredit() {
  const [open, setOpen] = useState(false);
  const b = site.builtBy;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="foot-credit">
        <button
          className="aura-trigger"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${b.label} ${b.name}`}
        >
          <span>{b.label}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.logo} alt={b.name} />
        </button>
      </div>

      <div
        className={`aura-overlay${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={b.name}
        onClick={() => setOpen(false)}
      >
        <div className="aura-card" onClick={(e) => e.stopPropagation()}>
          <button className="aura-close" onClick={() => setOpen(false)} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {open && (
            <>
              <span className="aura-glow" key="glow" />
              <div className="aura-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="aura-logo" src={b.logoDark} alt={b.name} key="logo" />
                <div className="aura-eyebrow">{b.studio}</div>
                <p className="aura-tagline">{b.tagline}</p>
                <p className="aura-desc">{b.desc}</p>
                <div className="aura-actions">
                  {b.url && (
                    <a className="aura-btn primary" href={b.url} target="_blank" rel="noopener noreferrer">
                      Visit website
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  )}
                  {b.email && (
                    <a className="aura-btn ghost" href={`mailto:${b.email}`}>
                      Send email
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M3 6h18v12H3z" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
