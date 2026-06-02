import type { ReactNode } from 'react';
import { SeoHead } from '@/layouts/SeoHead';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SeoHead />
      {children}
    </>
  );
}
