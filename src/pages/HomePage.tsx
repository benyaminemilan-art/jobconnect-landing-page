import { lazy, Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { UsersSection } from '@/components/sections/UsersSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ScreenshotsSection = lazy(() =>
  import('@/components/sections/ScreenshotsSection').then((m) => ({
    default: m.ScreenshotsSection,
  })),
);

const TestimonialsSection = lazy(() =>
  import('@/components/sections/TestimonialsSection').then((m) => ({
    default: m.TestimonialsSection,
  })),
);

const FaqSection = lazy(() =>
  import('@/components/sections/FaqSection').then((m) => ({ default: m.FaqSection })),
);

const DownloadSection = lazy(() =>
  import('@/components/sections/DownloadSection').then((m) => ({
    default: m.DownloadSection,
  })),
);

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden />;
}

export function HomePage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-sky-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        تخطي إلى المحتوى الرئيسي
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UsersSection />
        <FeaturesSection />

        <Suspense fallback={<SectionFallback />}>
          <ScreenshotsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <DownloadSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
