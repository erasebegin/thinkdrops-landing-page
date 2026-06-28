# AGENTS.md

## Project Overview

Thinkdrops education technology landing page — a **Savisoft** product line. AI-powered tools (T-Quiz, T-Class) for educators and students. Statically generated with **Astro 4.16**, **TypeScript**, **TailwindCSS 3**, and **AlpineJS**. Content authored in Markdown, MDX, and Markdoc (`.mdoc`).

Site URL: `https://www.thinkdrops.co.uk`
Parent: [Savisoft](https://savisoft.co.uk)
Repository: `https://github.com/erasebegin/thinkdrops-landing-page`
License: MIT

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run check`   | Type-check via `astro check`                |
| `npm run lint`    | Format (Prettier) + lint (ESLint)           |

## Project Structure

```
/
├── astro.config.mjs          # Astro config (integrations, markdown plugins)
├── markdoc.config.mjs        # Markdoc config (gallery component tag)
├── tailwind.config.cjs       # TailwindCSS config (typography, forms, aspect-ratio)
├── prettier.config.cjs       # Prettier config
├── tsconfig.json             # Extends astro/tsconfigs/strict
├── public/                   # Static assets (favicons, robots.txt, etc.)
├── remark-plugins/           # Custom remark plugins
│   ├── remark-reading-time.mjs
│   └── remark-diagram.mjs
├── src/
│   ├── config.ts             # Site metadata, nav links, PAGE_SIZE, post helpers
│   ├── env.d.ts              # Astro client type references
│   ├── assets/               # Images, SVGs (undraw, astro, thinkdrops, gallery)
│   ├── components/           # Astro components (~25 components)
│   ├── content/              # Content collections
│   │   ├── config.ts         # Zod schemas for all collections
│   │   ├── page/             # Standalone pages (about, privacy)
│   │   └── social/           # Social links (JSON data)
│   ├── layouts/              # Page layouts (base, blog, doc, page)
│   └── pages/                # Route pages
│       ├── index.astro       # Homepage (hand-written, ed-tech brand)
│       ├── [page].astro      # Dynamic content pages (about, privacy)
│       ├── contact.astro     # Contact page
│       ├── terms.astro       # Terms of Service (hand-written)
│       └── 404.astro         # Not found page
```

## Content Collections

All content collections and their Zod schemas are defined in `src/content/config.ts`.

### Blog (`src/content/blog/`)

*Currently empty — add content by creating `YYYY-MM-DD-slug.md` (also supports `.mdx` and `.mdoc`).*

Frontmatter schema:
- `draft` (boolean, optional) — set `true` to exclude from production
- `title` (string, required)
- `description` (string, required)
- `author` (reference to author collection, optional)
- `pubDate` (date, optional)
- `coverSVG` / `coverImage` / `socialImage` (images, optional)
- `images` (image array, optional)
- `gallery` (string, optional) — gallery folder name
- `categories` (reference array to category collection, optional)
- `tags` (string array, optional)
- `extra` (enum array: `math` | `markmap` | `mermaid` | `gallery`, optional) — enable special content features
- `minutesRead` (string, optional) — auto-computed by `remark-reading-time` if absent

### Page (`src/content/page/`)

Standalone pages like About, Privacy. Same schema as blog minus `draft`, `categories`, `extra`, `minutesRead`.

### Doc (`src/content/doc/`)

*Currently empty.* Documentation section. Schema: `draft`, `section`, `weight` (ordering), `title`, `description`, `images`, `gallery`.

### Author (`src/content/author/`)

*Currently empty.* Author profiles. Schema: `title`, `description`, `image`, `contact`.

### Category (`src/content/category/`)

*Currently empty.* Blog categories. Schema: `title`, `description`, `coverSVG`, `socialImage`.

### Social (`src/content/social/`)

JSON data collection. Schema: `name`, `link`, `icon`.

## Key Components

| Component | Purpose |
|-----------|---------|
| `hero.astro` | Homepage hero section |
| `blogroll.astro` | Blog post listing with pagination |
| `blogcard.astro` | Individual blog post card |
| `bloghero.astro` | Blog post header |
| `pagehero.astro` | Page header |
| `seo.astro` | Open Graph, Twitter Cards, JSON-LD |
| `header.astro` | Site navigation header |
| `footer.astro` | Site footer |
| `search.astro` | Lunr.js client-side search |
| `theme.astro` | Dark/light mode toggle |
| `gallery.astro` | PhotoSwipe lightbox gallery |
| `carousel.astro` | Swiper carousel |
| `map.astro` | Leaflet map |
| `cta.astro` | Call-to-action section |
| `features.astro` | Feature highlights |
| `categories.astro` | Category listing |
| `tags.astro` | Tag listing |
| `tableofcontents.astro` | Auto-generated TOC |
| `lightbox.astro` | Image lightbox |
| `images.astro` | Responsive image component |
| `nextprev.astro` | Previous/next post navigation |
| `paginatecontrol.astro` | Pagination controls |
| `leftsidebar.astro` / `rightsidebar.astro` | Sidebar layouts |

## Layouts

- `base.astro` — Root layout (HTML shell, meta, fonts, global scripts)
- `blog.astro` — Blog post layout
- `doc.astro` — Documentation layout
- `page.astro` — Generic page layout

## Styling

- **TailwindCSS 3** with `class`-based dark mode
- Plugins: `@tailwindcss/typography`, `@tailwindcss/forms`, `@tailwindcss/aspect-ratio`
- Code highlighting via **Shiki** (`github-light` theme) in Astro markdown config
- Custom CSS uses Astro's `scopedStyleStrategy: 'where'` for lower specificity

## Key Integrations

| Integration | Config |
|-------------|--------|
| `@astrojs/mdx` | MDX support in `astro.config.mjs` |
| `@astrojs/markdoc` | Markdoc with gallery tag → `src/components/gallery.astro` |
| `@astrojs/alpinejs` | AlpineJS for interactivity |
| `@astrojs/tailwind` | TailwindCSS |
| `@astrojs/sitemap` | Auto-generated sitemap |
| `@astrojs/rss` | RSS feed (`src/pages/rss.xml.js`) |
| `astro-robots-txt` | robots.txt |
| `astro-icon` | Iconify icons (bi, heroicons) |
| `astro-seo` | SEO utilities |
| `lunr` | Client-side full-text search |
| `photoswipe` | Image gallery lightbox |
| `swiper` | Carousel |
| `leaflet` | Interactive maps |
| `katex` | Math equation rendering |
| `mermaid` | Diagram rendering |
| `hero-patterns` | SVG background patterns |

## Markdown Plugins

Configured in `astro.config.mjs`:

| Plugin | Purpose |
|--------|---------|
| `remark-reading-time` | Auto-compute reading time from word count |
| `remark-diagram` | Diagram rendering (Mermaid, Markmap) |
| `remark-math` | Math equation support |
| `remark-plantuml` | PlantUML diagrams |
| `remark-emoji` | Emoji shorthand (`:smile:`) |
| `rehype-katex` | Render math as KaTeX HTML |

## SEO

`src/components/seo.astro` handles:
- Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data via `schema-dts`
- Canonical URLs
- Site metadata centralized in `src/config.ts` (`SiteMetadata` object)

## Configuration

- **`src/config.ts`** — `SiteMetadata`, `NavigationLinks`, `PAGE_SIZE` (6 posts per page), `getPosts()` helper
- **`astro.config.mjs`** — Site URL, integrations, markdown plugins, Vite SSR config
- **`markdoc.config.mjs`** — Registers `Gallery` tag → `src/components/gallery.astro` with `folder` attribute
- **`tailwind.config.cjs`** — Content paths, dark mode strategy, Tailwind plugins
- **`prettier.config.cjs`** — Single quotes, no semicolons, no trailing commas, 100 char width, Astro + TailwindCSS plugins

## Code Style

- **Prettier** for formatting; **ESLint** for linting
- Single quotes, no semicolons, no trailing commas
- 100 character print width
- ESLint plugins: `eslint-plugin-astro`, `eslint-plugin-mdx`, `eslint-plugin-jsx-a11y`
- TypeScript strict mode (extends `astro/tsconfigs/strict`)

## Deployment

- **Platform**: Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist/`
- Static site — no server-side runtime
