# Security Review Report — JobConnect Landing

**Date:** 2026-06-02  
**Scope:** Frontend static landing (React + Vite)

## Summary

| Area | Status | Notes |
|------|--------|-------|
| XSS prevention | Pass | No `dangerouslySetInnerHTML`; DOMPurify utility for future UGC |
| URL injection | Pass | `SafeLink` + `getSafeHref()` block dangerous schemes |
| Clickjacking | Documented | See `docs/SECURITY_HEADERS.md` |
| Secrets in bundle | Pass | Store URLs via `VITE_*` env only |
| CSP | Documented | Server-side CSP recommended |
| Asset loading | Pass | `SafeImage` allowlists HTTPS image hosts |
| Form validation | Ready | `src/utils/form.ts` for future forms |
| Dependencies | Pass | Minimal runtime deps; no known hardcoded keys |
| Console leakage | Pass | `esbuild.drop: ['console','debugger']` in production |
| Debug code | Pass | No dev-only UI in production path |

## Implemented Controls

1. **XSS:** Static JSX text only; `sanitizeHtml` / `sanitizeText` in `src/utils/sanitize.ts` for future rich content.
2. **Links:** External links use `rel="noopener noreferrer"` and `target="_blank"` via `SafeLink`.
3. **Images:** `SafeImage` validates host against `VITE_ALLOWED_IMAGE_HOSTS`.
4. **Environment:** `.env.example` documents public variables; `.env` gitignored.
5. **Production build:** Console and debugger statements stripped.

## Residual Risks (Low)

| Risk | Mitigation |
|------|------------|
| Third-party avatars (pravatar.cc) | Allowlist + CSP `img-src`; replace with self-hosted WebP for production |
| Hash-only legal links in footer | Replace with real policy pages before launch |
| Demo phone in mock UI | Illustrative only; not a live API |

## Recommendations Before Go-Live

1. Deploy with CSP and HSTS (see `SECURITY_HEADERS.md`).
2. Host `og-image.png` on your domain (referenced in SEO meta).
3. Replace pravatar URLs with local optimized avatars.
4. Serve site only over HTTPS.
5. Run `npm audit` in CI on each release.

**Security posture:** Suitable for a public marketing landing page when combined with server headers.
