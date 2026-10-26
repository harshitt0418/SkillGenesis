import { useEffect } from 'react';

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to elements matching `[data-reveal]`
 * and adds `is-revealed` when they enter the viewport.
 * Respects `prefers-reduced-motion` by immediately marking items as revealed.
 */
export function useScrollReveal(options = {}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('[data-reveal]');

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
        threshold: options.threshold || 0.12,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [options.rootMargin, options.threshold]);
}
