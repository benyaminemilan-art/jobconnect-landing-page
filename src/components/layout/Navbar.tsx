import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { JobConnectLogo } from '@/components/brand/JobConnectLogo';
import { Button } from '@/components/ui/Button';
import { MAIN_NAV_LINKS, MOBILE_NAV_LINKS } from '@/constants/navigation';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

export function Navbar() {
  const isScrolled = useNavbarScroll(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = (): void => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}
        aria-label="التنقل الرئيسي"
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3" aria-label="JobConnect — الصفحة الرئيسية">
            <JobConnectLogo className="w-11 h-11" />
            <span className="text-2.5xl font-extrabold tracking-tight text-slate-900 font-cairo">
              JobConnect
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10 font-bold text-slate-600">
            {MAIN_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sky-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#download"
              className="text-slate-600 font-bold hover:text-sky-600 transition-colors"
            >
              تسجيل الدخول
            </a>
            <Button variant="primary" className="px-5 py-2.5 rounded-xl text-sm">
              تحميل التطبيق
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-slate-800 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4 animate-fadeIn"
          >
            {MOBILE_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold text-slate-700 py-2 border-b border-slate-50"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="w-full mt-4 justify-center"
              onClick={closeMobile}
            >
              تحميل التطبيق مجاناً
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
