import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { getSafeHref } from '@/utils/url';

interface SafeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export function SafeLink({
  href,
  children,
  external,
  className,
  ...props
}: SafeLinkProps) {
  const safeHref = getSafeHref(href);
  const isHashOrRelative = safeHref.startsWith('#') || safeHref.startsWith('/');
  const isExternal =
    external ?? (!isHashOrRelative && !safeHref.startsWith('mailto:'));

  return (
    <a
      href={safeHref}
      className={className}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      {...props}
    >
      {children}
    </a>
  );
}
