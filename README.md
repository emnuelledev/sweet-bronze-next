# Sweet Bronze — Sitio web (Next.js)

Sitio web premium para **Sweet Bronze · Bronceado Brasileño (Valencia)**.
Next.js 14 (App Router) + TypeScript. Diseño cálido "hora dorada", en español, optimizado para SEO local y reservas por WhatsApp.

---

## 🚀 Cómo arrancarlo

Necesitas **Node.js 18.18+** instalado.

```bash
npm install      # instala dependencias
npm run dev      # arranca en http://localhost:3000
```

Para producción:

```bash
npm run build
npm run start
```

---

## ☁️ Publicar en Vercel (recomendado, gratis)

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra en [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Next.js solo. Pulsa **Deploy**. Listo.

---

## ✏️ Qué editar (sin tocar el diseño)

Casi todo lo editable está en **`lib/`**:

### `lib/site.ts` — datos de contacto
- `whatsappNumber` → tu número real (formato internacional, sin `+` ni espacios). Ej.: `34612345678`.
- `instagram` / `instagramHandle` → ya configurado como **@sweetbronzevlc**.
- `hours`, `address`, `addressNote`, `languages`, `priceFrom` → rellena con los datos reales.
- `reviews` → nota y nº de reseñas de Google.
- `instagramWidgetId` → ver sección Instagram más abajo.

### `lib/articles.ts` — Sweet Tips (artículos)
Cada artículo es un objeto del array. Para **añadir uno nuevo**, copia un bloque y cambia:
- `slug` (define la URL: `/sweet-tips/mi-slug`)
- `title`, `category`, `excerpt`, `readingTime`, `coverLabel`
- `body`: array de párrafos. Un bloque que empiece por `## ` se muestra como subtítulo.

Las páginas de artículo se generan solas a partir de este archivo.

---

## 📸 Instagram — feed automático

El sitio incluye un hueco listo para un **widget automático** (Elfsight o Behold), que se actualiza solo.

1. Crea un widget de Instagram gratuito en [Elfsight](https://elfsight.com/instagram-feed-instagram-widget/) o [Behold.so](https://behold.so).
2. Copia el identificador del widget (Elfsight da algo como `elfsight-app-xxxxxxxx-...`).
3. Pégalo en `lib/site.ts` → `instagramWidgetId`.

Mientras esté vacío, se muestra un bloque elegante con enlace directo a tu perfil (nada roto).

---

## 🖼️ Añadir tus fotos (las zonas en blanco)

Todo se controla desde **un solo archivo**: `lib/images.ts`.

1. Copia tus fotos dentro de **`public/img/`**.
2. Abre **`lib/images.ts`** y escribe la ruta de cada foto empezando por `/img/...`
   (sin la palabra `public`). Deja `""` en las que quieras dejar como placeholder.

```ts
sobre: "/img/estudio.jpg",
tratamientoBikini: "/img/bikini.jpg",
productos: ["/img/prod1.jpg", "/img/prod2.jpg", ...],
```

Las portadas de los artículos se ponen en el mismo archivo (`articleCovers`, por slug).
Proporciones ideales (se recortan al centro si usas otra):
- Sobre → vertical 4:5 · Tratamiento → 5:4 · Método → 1:1
- Productos → 4:3 · Galería → variada · Portadas de artículo → 16:9

Los logos ya están en `public/logo/` en varias versiones (blanco, coral, bronce, con fondo, etc.).

---

## 🎨 Colores y tipografías

- Paleta y tipos están como variables CSS en `app/globals.css` (`:root`).
- Tipografías: Playfair Display, Cormorant Garamond y Manrope (Google Fonts).

---

## 📂 Estructura

```
app/
  layout.tsx              → SEO, header, footer, JSON-LD
  page.tsx                → home (todas las secciones)
  globals.css             → estilos y tokens de diseño
  sweet-tips/
    page.tsx              → índice de artículos
    [slug]/page.tsx       → artículo individual
components/                → cada sección de la web
lib/
  site.ts                 → datos de contacto (edítalo)
  articles.ts             → contenido de Sweet Tips (edítalo)
public/logo/              → versiones del logo
```
