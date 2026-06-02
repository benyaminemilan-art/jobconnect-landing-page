import { useEffect } from 'react';

/**
 * Activates .reveal elements on scroll — preserves original landing page animation behavior.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const handleScroll = (): void => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
