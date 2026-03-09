# MagnaCare Access: Landing Page

Production-quality Next.js implementation of the MagnaCare Access landing page.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## File Structure

```
/
├── app/
│   ├── globals.css             # Tailwind + custom utility classes
│   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   └── page.tsx                # Page composition (server component)
├── components/
│   ├── About.tsx               # "Nationwide access" section with map
│   ├── AnnouncementBar.tsx     # Top notification banner
│   ├── Container.tsx           # Responsive max-width wrapper
│   ├── CTAForm.tsx             # Email lead-capture (client component)
│   ├── DecorativeElements.tsx  # Dot grid, plus cross (CSS/SVG)
│   ├── Header.tsx              # Logo + hamburger nav trigger
│   ├── Hero.tsx                # "Choose Your ACCESS" hero section
│   ├── SlideMenu.tsx           # Mobile/global navigation overlay
│   └── USMapIllustration.tsx   # SVG/Image US map with markers
├── public/
│   ├── fonts/                  # Drop licensed Messina Sans .woff2 here
│   └── images/
│       ├── hero-doctor-tablet.jpg
│       ├── hero-doctor-child.jpg
│       └── feature-nurse.jpg
├── .husky/                     # Git hooks for pre-commit linting
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Architecture & Tooling

| Concern           | Detail                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rendering**     | Server-first — only `CTAForm` and `Header` are client components. Everything else renders on the server for minimal JS and full SEO crawlability. |
| **Code Quality**  | ESLint + [Perfectionist](https://eslint-plugin-perfectionist.azat.io/) enforces consistent sorting of imports, object keys, and interfaces.       |
| **Git Hooks**     | Husky automates linting and type-checking on commit, preventing degraded code from reaching the repository.                                       |
| **Fonts**         | Krona One via `next/font/google`. Messina Sans configured as a `localFont`.                                                                       |
| **Images**        | Healthcare photography via `next/image` with `priority` on hero assets to optimize LCP.                                                           |
| **Responsive**    | `clamp()` for fluid typography; Tailwind breakpoints for layout shifts.                                                                           |
| **Accessibility** | Correct heading hierarchy, `aria-hidden` on decorative elements, `role="img"` on complex illustrations.                                           |

---

## Assumptions

1. **Messina Sans** — Commercial typeface, defaults to Helvetica Neue/Arial fallback. Uncomment `localFont` in `layout.tsx` once licensed files are available.
2. **Form submission** — Currently simulated. Wire to your actual lead-capture endpoint.
3. **Navigation** — Hamburger is presentational; needs a client-side drawer in production.
4. **Spacing** — Inferred from the design PDF; matched to the closest Tailwind scale values.
