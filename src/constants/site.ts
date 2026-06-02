export const SITE_NAME = 'JobConnect';

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://jobconnect.dz';

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ?? 'JobConnect@hotmail.com';

export const GOOGLE_PLAY_URL =
  import.meta.env.VITE_GOOGLE_PLAY_URL ?? '#download';

export const APK_DOWNLOAD_URL =
  import.meta.env.VITE_APK_DOWNLOAD_URL ?? '#download';

export const ALLOWED_IMAGE_HOSTS = (
  import.meta.env.VITE_ALLOWED_IMAGE_HOSTS ?? 'i.pravatar.cc'
)
  .split(',')
  .map((host: string) => host.trim())
  .filter(Boolean);
