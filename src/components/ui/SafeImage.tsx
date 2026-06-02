import type { ImgHTMLAttributes } from 'react';
import { ALLOWED_IMAGE_HOSTS } from '@/constants/site';
import { isAllowedImageHost } from '@/utils/url';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function SafeImage({ src, alt, className, loading = 'lazy', ...props }: SafeImageProps) {
  const isAllowed = isAllowedImageHost(src, ALLOWED_IMAGE_HOSTS);

  if (!isAllowed) {
    return (
      <span
        className={`inline-flex items-center justify-center bg-slate-200 text-slate-500 ${className ?? ''}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
