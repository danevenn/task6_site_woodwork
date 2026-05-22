# Carpintería Los Artesanos · Task6 — Sitio Corporativo Next.js

Sitio web corporativo de una carpintería artesanal, construido como práctica de la fase 6 del módulo DAW (curso 2025/26).

**Demo en producción:** _por desplegar en Vercel_

## Stack

- **Next.js 16** · App Router · React 19 · TypeScript
- **Tailwind CSS 4** + **shadcn/ui** (base `stone`)
- **next/font** — Playfair Display (titulares) + Inter (cuerpo)
- **Zod** para validación de Server Actions
- **Sonner** para toasts
- **Lucide React** para iconografía

## Arquitectura demostrada

| Requisito                                | Dónde se ve                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| Server Components + datos asíncronos     | `src/app/proyectos/page.tsx`, `src/components/site/recent-projects.tsx`         |
| ISR (revalidate)                         | `export const revalidate = 3600` en `src/app/proyectos/page.tsx`                |
| Rutas dinámicas + `generateStaticParams` | `src/app/proyectos/[slug]/page.tsx`                                             |
| `generateMetadata` (SEO dinámico)        | mismo archivo, OG + Twitter cards por proyecto                                  |
| Server Action + validación + estados     | `src/app/contacto/actions.ts` + `contact-form.tsx` (`useActionState`)           |
| `next/image` con `priority` y `blur`     | Hero en `src/app/page.tsx`, `ProjectCard`, detalle                              |
| Streaming + Suspense + skeletons         | Home y galería; `src/app/loading.tsx`                                           |
| Error boundary personalizado             | `src/app/error.tsx`, `src/app/not-found.tsx`                                    |
| Proxy (antes middleware)                 | `src/proxy.ts` (cabeceras de seguridad)                                         |
| `next/font` (sin CLS)                    | `src/app/layout.tsx` con `display: "swap"` y variables CSS                      |
| Metadata API                             | `metadataBase`, `title.template`, OpenGraph, robots, sitemap                    |

## Estructura

```
src/
├── app/
│   ├── layout.tsx             # Header + Footer + fuentes + Toaster
│   ├── page.tsx               # Home con Hero + servicios + recientes
│   ├── loading.tsx            # Skeleton global
│   ├── error.tsx              # Error boundary
│   ├── not-found.tsx          # 404
│   ├── robots.ts, sitemap.ts  # SEO técnico
│   ├── sobre-nosotros/
│   ├── proyectos/
│   │   ├── page.tsx           # Galería (ISR)
│   │   └── [slug]/page.tsx    # Detalle dinámico
│   └── contacto/
│       ├── page.tsx
│       ├── contact-form.tsx   # Client Component (useActionState)
│       └── actions.ts         # Server Action validada con Zod
├── components/
│   ├── ui/                    # shadcn primitives
│   └── site/                  # Header, Footer, ProjectCard, skeletons
├── data/projects.ts           # Data layer (slugs, materiales, gallery)
├── lib/utils.ts
└── proxy.ts              # Cabeceras de seguridad
```

## Scripts

```bash
npm run dev      # arranca en http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
npm run lint
```

## Auditoría sugerida

1. **Lighthouse** (DevTools) — objetivo >90 en Performance, Accessibility, Best Practices y SEO.
2. **Network → Doc/Fetch** — verificar que las páginas de proyectos sirven el payload RSC y no JS innecesario.
3. **Hidratación** — la app evita `new Date()` en Server Components donde sería problemático y usa `suppressHydrationWarning` solo en `<html>`.
