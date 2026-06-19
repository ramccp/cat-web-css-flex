# Flex Interactive — Master CSS Flexbox Layout

An interactive, single-page guide that teaches **CSS Flexbox** from first principles. Each
concept gets its own section with a plain-language explanation, a copyable code snippet, and a
live, browser-rendered demo you can poke at — finishing with a full **Flexbox Playground** where
you control every property and watch the layout respond in real time.

Built by **CAT Studio** for beginner-to-intermediate developers who learn best by seeing and
doing rather than reading the spec.

---

## ✨ Highlights

- **12 focused sections** — from "why Flexbox exists" all the way to per-child properties.
- **Live demos everywhere** — every concept is shown with real, rendered boxes, not screenshots.
- **Interactive Playground** — toggle `flex-direction`, `justify-content`, `align-items`,
  `flex-wrap`, gaps, and child `grow`/`shrink`/`basis` and see the result instantly.
- **Copy-to-clipboard code** — grab any snippet with one click.
- **Scroll-aware navigation** — the header tracks your active section and hides on scroll-down.
- **Polished motion** — scroll-triggered entrances and a staggered hero, powered by Framer Motion.
- **Fully responsive** — works cleanly on phones, tablets, and desktops, with a mobile menu.

## 🧭 What's covered

| # | Section | Concept |
|---|---------|---------|
| 1 | Hero | Intro + animated gradient |
| 2 | Why Flexbox | The problem Flexbox solves |
| 3 | `display: flex` | Turning a container into a flex context |
| 4 | `flex-direction` | Row vs. column |
| 5 | Main vs. Cross Axis | The mental model that makes everything click |
| 6 | `justify-content` | Distribution along the main axis |
| 7 | `align-items` | Alignment along the cross axis |
| 8 | `flex-wrap` | Letting items flow onto multiple lines |
| 9 | `align-content` | Spacing of wrapped lines |
| 10 | `flex-grow` / `flex-shrink` / `flex-basis` | How items size themselves |
| 11 | Child Properties | `order`, `align-self`, and per-item control |
| 12 | Playground | Combine everything in a live sandbox |

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** + **TypeScript**
- **[Vite 7](https://vite.dev/)** — dev server & build
- **[Tailwind CSS 3](https://tailwindcss.com/)** with a custom theme
- **[Framer Motion](https://www.framer.com/motion/)** — animations
- **[shadcn/ui](https://ui.shadcn.com/)** (Radix primitives) — UI component library
- **[lucide-react](https://lucide.dev/)** — icons

## 🚀 Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

### Available scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the Vite dev server with hot-reload |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## 📁 Project Structure

```
app/
├── public/
│   └── assets/            # Images & brand logo
├── src/
│   ├── sections/          # The 12 page sections + Flexbox Playground
│   ├── components/        # Navigation, Footer, CodeBlock, Callout, …
│   │   └── ui/            # shadcn/ui primitives
│   ├── contexts/          # Theme context
│   ├── hooks/             # useActiveSection, useScrollDirection, …
│   ├── lib/               # Shared utilities
│   ├── App.tsx            # Composes all sections into the page
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles & theme tokens
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

## 🏗️ Building for Production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built site
```

The `dist/` folder is static and can be deployed to any static host (Vercel, Netlify, GitHub
Pages, S3, etc.).

---

<sub>Made with ❤️ by CAT Studio.</sub>
