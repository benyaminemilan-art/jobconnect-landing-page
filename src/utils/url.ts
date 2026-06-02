const ALLOWED_PROTOCOLS = new Set(['https:', 'http:', 'mailto:']);

/**
 * Validates external URLs before rendering in href attributes.
 * Blocks javascript:, data:, and other dangerous schemes.
 */
export function isValidExternalUrl(url: string): boolean {
  if (!url || url === '#') {
    return false;
  }

  if (url.startsWith('#') || url.startsWith('/')) {
    return true;
  }

  try {
    const parsed = new URL(url, window.location.origin);

    if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
      return false;
    }

    if (parsed.protocol === 'javascript:' || parsed.protocol === 'data:') {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function isValidMailto(email: string): boolean {
  const mailtoPattern = /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  return mailtoPattern.test(email);
}

export function isAllowedImageHost(src: string, allowedHosts: readonly string[]): boolean {
  try {
    const parsed = new URL(src);
    if (parsed.protocol !== 'https:') {
      return false;
    }
    return allowedHosts.some(
      (host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`),
    );
  } catch {
    return false;
  }
}

export function getSafeHref(url: string, fallback = '#'): string {
  if (url.startsWith('#')) {
    return url;
  }

  if (url.startsWith('mailto:')) {
    return isValidMailto(url) ? url : fallback;
  }

  return isValidExternalUrl(url) ? url : fallback;
}
