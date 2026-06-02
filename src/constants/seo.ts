import { SITE_NAME, SITE_URL } from './site';

export const SEO = {
  title: `${SITE_NAME} — فرص العمل المرنة في الجزائر | وظائف وعمل جزئي`,
  description:
    'JobConnect — أول منصة جزائرية للعمل المرن. وظائف، عمل جزئي للطلبة، فرص للمتقاعدون، وتوظيف مرن لأصحاب العمل. حمّل التطبيق مجاناً.',
  keywords: [
    'وظائف',
    'عمل جزئي',
    'طلبة',
    'متقاعدون',
    'فرص عمل',
    'JobConnect',
    'الجزائر',
    'عمل مرن',
  ].join(', '),
  locale: 'ar_DZ',
  ogImage: `${SITE_URL}/og-image.png`,
  twitterHandle: '@JobConnectDZ',
} as const;
