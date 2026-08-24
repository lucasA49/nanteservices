# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Marketing site for "Nantes Services". Nine services across two tiers: 3 featured core activities (nettoyage
automobile, SOS dépannage, VTC – chauffeur privé) plus 6 general services (ménage, entretien des espaces verts,
petits travaux, déménagement, conciergerie, mécanique auto & moto). Built on a `npm create vite@latest -- --template
react` base. No tests, no state management library, no backend — the contact form sends directly to a third-party
form API from the browser. Git repo, pushed to `github.com/lucasA49/nanteservices`, deployed on Vercel (auto-deploys
on push to `main`).

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the whole project (no test runner is configured)

## Stack

- React 19 + Vite 8, plain JSX (no TypeScript)
- `react-router-dom` for routing (`src/App.jsx`), wrapped in `BrowserRouter` in `src/main.jsx`
- ESLint flat config (`eslint.config.js`) using `@eslint/js` recommended rules plus `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` (Vite preset), scoped to `**/*.{js,jsx}`, with `dist` ignored
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin (registered in `vite.config.js`), imported with `@import "tailwindcss";` at the top of `src/index.css`. Theme tokens (colors, fonts) live in an `@theme` block there — no `tailwind.config.js`/PostCSS config needed (v4 is CSS-first)
- Brand palette is green/yellow (Nantes "Canaris" identity): `--color-primary` #0F5132, `--color-accent` #FCD34D. The accent is a light yellow — buttons on `bg-accent` use dark text (`text-ink`), never `text-white`, or contrast fails
- Contact form (`src/pages/Contact.jsx`) POSTs to the Web3Forms API (no backend of our own). Requires `VITE_WEB3FORMS_ACCESS_KEY` — set in a local `.env` for dev (gitignored; see `.env.example`) and as an environment variable in the Vercel project for production. Without it, the form shows the error state on submit
- `vercel.json` rewrites all paths to `/index.html` — required for React Router's client-side routes (e.g. `/contact`) to work on direct load/refresh on Vercel

## Structure

- `src/main.jsx` — entry point, mounts `<App />` inside `BrowserRouter` + `StrictMode`
- `src/App.jsx` — route table: `Layout` wraps `Home` (`/`), `Contact` (`/contact`), `MentionsLegales` (`/mentions-legales`), `Confidentialite` (`/confidentialite`), `CGU` (`/cgu`)
- `src/components/Layout.jsx` — `Header` + `<Outlet />` + `Footer`; also scrolls to a route's `#hash` (e.g. `/#services`) on navigation
- `src/components/Header.jsx` / `Footer.jsx` / `Logo.jsx` — shared chrome. `Logo.jsx` renders `public/nantesservices.png` (the real logo) alongside the "Nantes Services" wordmark, since the logo's baked-in text is illegible at header/footer size
- `src/components/LegalLayout.jsx` — shared title/section wrapper for the 3 legal pages
- `src/components/icons.jsx` — hand-written inline SVG icon set (Heroicons-outline style); no icon library dependency
- `src/data/services.jsx` — exports `featuredServices` (the 3 core activities), `otherServices` (the 6 general services), and a default `services` (both combined, used for the footer links and the hero preview). Each service carries `ctaLabel`/`ctaHref` (`/contact?type=<id>`, read by `Contact.jsx` to preselect "Type de demande") and an icon component from `icons.jsx`. `featuredServices` and `otherServices` render in separate sections on `Home.jsx` with disjoint `id`s — don't merge them into one mapped list there, it would duplicate DOM ids
- `src/pages/Home.jsx` — hero, featured-activities section (`#nettoyage-auto`, `#sos-depannage`, `#vtc`), trust points, general services grid (`#services`, plus each service's own `id`), about section (`#apropos`), CTA banner
- `src/pages/Contact.jsx` — contact info, logo panel, and the Web3Forms-backed contact form. Reads `?type=` from the URL (mapped via `typeToSubject`) to preselect "Type de demande". Selecting SOS Dépannage / VTC / Nettoyage automobile reveals extra fields specific to that request type, sent to Web3Forms as extra payload keys
- `src/pages/MentionsLegales.jsx` / `Confidentialite.jsx` / `CGU.jsx` — legal pages linked from the footer. Mentions légales has `[à compléter]` placeholders for forme juridique, SIRET, and directeur de publication — real values are needed there before this can be treated as a compliant live site
- `public/` — static assets served as-is, including `nantesservices.png` (the real logo, used as favicon too)
- `index.html` — Vite entry HTML, `lang="fr"`

## Project-specific instructions

- All site copy is in French; all contact/business details are currently fictional placeholders except the real phone (07 59 12 47 48) and email (nantes.services44@gmail.com), which are wired into Header, Footer, and Contact
- Adding a new service: add an entry to `featuredServices` or `otherServices` in `src/data/services.jsx` with a unique `id`, an icon from `icons.jsx` (add one there first if none fits), and `ctaLabel`/`ctaHref`. If it needs its own dynamic contact-form fields, extend `typeToSubject` and the conditional field blocks in `src/pages/Contact.jsx`
