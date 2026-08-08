"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  // Al cambiar de página (navegación de Next), volvemos a activar las animaciones.
  const pathname = usePathname();

  useEffect(() => {
    // Pequeño respiro para que el DOM de la nueva página ya esté montado.
    const run = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
      if (!("IntersectionObserver" in window) || els.length === 0) {
        els.forEach((el) => el.classList.add("in"));
        return () => {};
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };

    let cleanup: () => void = () => {};
    const raf = requestAnimationFrame(() => {
      cleanup = run();
    });
    return () => {
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [pathname]);

  return null;
}
