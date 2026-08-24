# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Marketing site for "Nantes Services" (fictional home & business services company: ménage, entretien des espaces verts, petits travaux, déménagement, conciergerie). Built on a `npm create vite@latest -- --template react` base. No tests, no state management library, no backend — the contact form sends directly to a third-party form API from the browser. Not yet a git repository.

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
- Contact form (`src/pages/Contact.jsx`) POSTs to the Web3Forms API (no backend of our own). Requires `VITE_WEB3FORMS_ACCESS_KEY` in a local `.env` (gitignored; see `.env.example`) — get a free key at web3forms.com tied to nantes.services44@gmail.com. Without it, the form shows the error state on submit

## Structure

- `src/main.jsx` — entry point, mounts `<App />` inside `BrowserRouter` + `StrictMode`
- `src/App.jsx` — route table: `Layout` wraps `Home` (`/`) and `Contact` (`/contact`)
- `src/components/Layout.jsx` — `Header` + `<Outlet />` + `Footer`; also scrolls to a route's `#hash` (e.g. `/#services`) on navigation
- `src/components/Header.jsx` / `Footer.jsx` / `Logo.jsx` — shared chrome. `Logo.jsx` is a placeholder monogram badge; swap in a real logo file there when one exists
- `src/components/icons.jsx` — hand-written inline SVG icon set (Heroicons-outline style); no icon library dependency
- `src/data/services.jsx` — the 5 services shown on the homepage and linked from the footer, each paired with an icon component from `icons.jsx`
- `src/pages/Home.jsx` — hero, services grid (`#services`), about section (`#apropos`), CTA banner
- `src/pages/Contact.jsx` — contact info + the Web3Forms-backed contact form
- `public/` — static assets served as-is
- `index.html` — Vite entry HTML, `lang="fr"`

## Project-specific instructions

- All site copy is in French; all contact/business details are currently fictional placeholders except the real phone (07 59 12 47 48) and email (nantes.services44@gmail.com), which are wired into Header, Footer, and Contact
