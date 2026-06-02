/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_GOOGLE_PLAY_URL: string;
  readonly VITE_APK_DOWNLOAD_URL: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_ALLOWED_IMAGE_HOSTS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
