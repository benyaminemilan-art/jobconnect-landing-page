# Security Headers — JobConnect Landing

Configure these headers on your CDN or web server (Nginx, Apache, Cloudflare, Vercel, Netlify).

## Recommended Headers

```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## Content-Security-Policy (starter)

Adjust hosts for your production domain and analytics if added later.

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' https://i.pravatar.cc data:;
  connect-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
```

## Clickjacking

- `X-Frame-Options: DENY` or `SAMEORIGIN`
- CSP `frame-ancestors 'none'`

## Notes

- Remove `'unsafe-inline'` from `style-src` only if you migrate all styles to external CSS without inline attributes.
- Google Fonts require `fonts.googleapis.com` and `fonts.gstatic.com` in CSP.
- Update `img-src` when hosting images on your own CDN instead of pravatar.cc.
