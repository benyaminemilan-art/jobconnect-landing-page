# Deployment Checklist — JobConnect Landing

## Pre-deploy

- [ ] Copy `.env.example` to `.env` and set production values
- [ ] Set `VITE_SITE_URL` to production domain
- [ ] Set `VITE_GOOGLE_PLAY_URL` and `VITE_APK_DOWNLOAD_URL`
- [ ] Add `public/og-image.png` (1200×630)
- [ ] Update `public/sitemap.xml` and `robots.txt` Sitemap URL if domain differs
- [ ] Run `npm ci` and `npm run build` without errors
- [ ] Run `npm run lint`

## Server / CDN

- [ ] Enable HTTPS and HTTP→HTTPS redirect
- [ ] Apply headers from `docs/SECURITY_HEADERS.md`
- [ ] Configure SPA fallback: all routes → `index.html`
- [ ] Set cache: long cache for `/assets/*`, short/no cache for `index.html`
- [ ] Enable Brotli or gzip compression

## DNS & SEO

- [ ] Point domain to hosting
- [ ] Verify canonical URL and Open Graph in production HTML
- [ ] Submit sitemap to Google Search Console
- [ ] Test `robots.txt` and `sitemap.xml` URLs

## Post-deploy smoke test

- [ ] Homepage loads RTL with correct Cairo font
- [ ] Anchor navigation works (#problem, #faq, etc.)
- [ ] Mobile menu opens/closes
- [ ] FAQ accordion keyboard accessible
- [ ] Download links open correct store/APK URLs
- [ ] No console errors in production
- [ ] Lighthouse run (Performance, A11y, SEO, Best Practices)

## CI suggestion

```yaml
- run: npm ci
- run: npm run lint
- run: npm run build
```
