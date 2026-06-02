# JobConnect Landing Page

Production-ready React landing page for **JobConnect** — flexible jobs platform in Algeria.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- ESLint + Prettier
- react-helmet-async (SEO)

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/
├── components/     # UI, sections, layout, brand
├── constants/        # SEO, navigation, content
├── hooks/
├── layouts/          # MainLayout, SeoHead
├── pages/            # HomePage
├── services/         # env helpers
├── styles/           # globals.css (theme + animations)
├── types/
├── utils/            # url, sanitize, form validation
├── App.tsx
└── main.tsx
public/
├── robots.txt
├── sitemap.xml
└── favicon.svg
docs/
├── SECURITY_HEADERS.md
├── SECURITY_REVIEW.md
├── PERFORMANCE_REPORT.md
└── DEPLOYMENT_CHECKLIST.md
```

## Environment variables

See `.env.example`. All `VITE_*` variables are public in the client bundle.

## Documentation

- [Security review](docs/SECURITY_REVIEW.md)
- [Performance report](docs/PERFORMANCE_REPORT.md)
- [Deployment checklist](docs/DEPLOYMENT_CHECKLIST.md)
- [Security headers](docs/SECURITY_HEADERS.md)

## Original design

Visual identity preserved from `jobconnect_premium_landing_page.tsx` (reference file, not used in build).
