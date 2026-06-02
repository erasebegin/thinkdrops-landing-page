# Thinkdrops

Landing page for **Thinkdrops** — a software development company based in Berlin, Germany.

![Screenshot](screenshot.png)

Built with [Astro](https://astro.build), TypeScript, and TailwindCSS.

## Features

- Corporate landing page with blog, about, and contact sections
- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance static site with minimal JavaScript (AlpineJS)
- Full text client-based search via Lunr.js
- RSS feed, sitemap, and robots.txt
- SVG illustrations (unDraw, Hero Patterns, Iconify)
- Code syntax highlighting
- Full SEO support (Open Graph, Twitter Cards, JSON-LD Schema.org)
- Light and dark mode with system preference detection
- Math equations via KaTeX
- Diagrams (Mermaid, Markmap, PlantUML)
- Photo gallery with PhotoSwipe lightbox
- Carousel via Swiper
- Reading time estimates for blog posts
- Lazy-loaded assets per page — no unnecessary bloat

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | [Astro](https://astro.build) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [TailwindCSS](https://tailwindcss.com) |
| Interactivity | [AlpineJS](https://alpinejs.dev) |
| Content | MDX, Markdown |
| Search | [Lunr](https://lunrjs.com) |
| Illustrations | [unDraw](https://undraw.co), [Hero Patterns](https://heropatterns.com), [Iconify](https://iconify.design) |
| Math | [KaTeX](https://katex.org) |
| Diagrams | [Mermaid](https://mermaid.js.org), [Markmap](https://markmap.js.org), [PlantUML](https://plantuml.com) |
| Maps | [Leaflet](https://leafletjs.com) |
| Gallery | [PhotoSwipe](https://photoswipe.com) |
| SEO | Open Graph, Twitter Cards, JSON-LD |

## Project Structure

```
/
├── public/
│   └── screenshot.png
├── src/
│   ├── assets/       # Images, SVGs, illustrations
│   ├── components/   # Astro components
│   ├── content/      # Blog posts, docs, authors, categories
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes
│   └── config.ts     # Site configuration
├── astro.config.mjs
└── package.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run check`   | Type-check the project                      |
| `npm run lint`    | Lint and format source code                 |

## Deployment

Deployed on [Netlify](https://netlify.com). Build command: `npm run build`. Publish directory: `dist`.

## License

MIT
