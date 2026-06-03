export const SITE_NAME = 'JobConnect';

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://jobconnect.dz';

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ?? 'JobConnect@hotmail.com';

export const GOOGLE_PLAY_URL =
  import.meta.env.VITE_GOOGLE_PLAY_URL ??
  'https://play.google.com/store/apps/details?id=com.jobconnect.app';

export const APK_DOWNLOAD_URL =
  import.meta.env.VITE_APK_DOWNLOAD_URL ??
  'https://github.com/benyaminemilan-art/jobconnect-landing-page/releases/download/v1.0.1/app-release.apk';

export const ALLOWED_IMAGE_HOSTS = (
  import.meta.env.VITE_ALLOWED_IMAGE_HOSTS ?? 'i.pravatar.cc'
)
  .split(',')
  .map((host: string) => host.trim())
  .filter(Boolean);
