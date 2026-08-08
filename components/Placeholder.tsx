export function SunIcon({ className = "ph-sun" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 34" fill="none" aria-hidden="true">
      <g stroke="rgba(67,48,31,.4)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M30 32 A16 16 0 0 1 30 8" />
        <path d="M30 32 A16 16 0 0 0 30 8" />
        <line x1="30" y1="6" x2="30" y2="0" />
        <line x1="18" y1="9" x2="14" y2="4" />
        <line x1="42" y1="9" x2="46" y2="4" />
        <line x1="11" y1="17" x2="4" y2="15" />
        <line x1="49" y1="17" x2="56" y2="15" />
      </g>
    </svg>
  );
}

export function Placeholder({
  label,
  className = "",
  children,
  sun = false,
  src,
  alt = "",
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  sun?: boolean;
  /** Ruta de la imagen dentro de /public (ej. "/img/sobre.jpg"). Vacío = placeholder. */
  src?: string;
  alt?: string;
}) {
  const hasImg = Boolean(src);
  return (
    <div className={`ph ${className}`} data-label={hasImg ? "" : label}>
      {hasImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="ph-fill" src={src} alt={alt} />
      ) : (
        sun && <SunIcon />
      )}
      {children}
    </div>
  );
}
