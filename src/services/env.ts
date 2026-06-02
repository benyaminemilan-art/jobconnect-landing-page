/**
 * Typed access to public environment variables (VITE_*).
 * Never store secrets here — only values safe for the browser bundle.
 */
export const env = {
  siteUrl: import.meta.env.VITE_SITE_URL as string | undefined,
  googlePlayUrl: import.meta.env.VITE_GOOGLE_PLAY_URL as string | undefined,
  apkDownloadUrl: import.meta.env.VITE_APK_DOWNLOAD_URL as string | undefined,
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL as string | undefined,
  allowedImageHosts: import.meta.env.VITE_ALLOWED_IMAGE_HOSTS as string | undefined,
} as const;

export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
