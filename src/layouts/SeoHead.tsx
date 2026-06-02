import { Helmet } from 'react-helmet-async';
import { SEO } from '@/constants/seo';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export function SeoHead() {
  const canonicalUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="keywords" content={SEO.keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={SEO.locale} />
      <meta property="og:image" content={SEO.ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — منصة العمل المرن في الجزائر`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO.twitterHandle} />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.ogImage} />
    </Helmet>
  );
}
