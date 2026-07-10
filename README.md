# Portfolio

A modern, minimalistic, **config-driven** portfolio website for backend, ML, and full-stack engineers.
Built with React + Vite. Everything you see is rendered from a single
[`src/config.js`](src/config.js) — edit that file and rebuild. The content is bundled
into the app, so it isn't exposed as a separate fetchable file.

## Quick start

```bash
pnpm install
pnpm dev        # start the dev server (http://localhost:5173)
pnpm build      # production build into dist/
pnpm preview    # preview the production build
```

## Editing your content

All content lives in [`src/config.js`](src/config.js). It's bundled into the app at
build time, so edits require a rebuild (`pnpm build`) to take effect.

| Key          | What it controls                                                        |
| ------------ | ----------------------------------------------------------------------- |
| `meta`       | Page title, description, favicon, and the site accent color.            |
| `hero`       | Name, role, tagline, location, availability, résumé link, CTA buttons.  |
| `about`      | About paragraphs and the headline stat highlights.                      |
| `skills`     | Grouped skill categories (languages, backend, AI/ML, data, infra, frontend…). |
| `experience` | Work history timeline with achievements.                                |
| `projects`   | Project cards with tags, links, and an optional `image` thumbnail; `featured: true` highlights a card. |
| `contact`    | Contact headline, body text, and email.                                 |
| `socials`    | Social links shown in contact + footer.                                 |
| `footer`     | Footer text and note.                                                   |

### Notes

- **Accent color:** change `meta.accentColor` (any CSS color) to re-theme the whole site.
- **Sections are optional:** omit or empty any top-level key (e.g. `projects`) and that
  section won't render.
- Drop a `resume.pdf` into `public/` (or point `hero.resumeUrl` elsewhere) to enable
  the résumé link. A placeholder is included — replace it with your own.
- **Project thumbnails:** add `"image": "/projects/your-shot.png"` to any project to show
  a thumbnail on its card. Drop the file in `public/projects/`. Placeholder SVGs are included.
- **Social previews:** `index.html` ships Open Graph + Twitter tags and a `public/og-image.png`.
  Update the `https://alexdoe.dev` URLs in `index.html` to your domain, and replace
  `og-image.png` (1200×630) with your own.

## Project structure

```
src/
  config.js            # ← your content lives here (bundled into the app)
  App.jsx              # imports config.js, renders sections
  components/          # Nav, Section wrapper, particles, command palette…
  sections/            # Hero, About, Skills, Experience, Projects, Contact, Footer
  index.css            # all styling (CSS variables, dark + light themes)
```
