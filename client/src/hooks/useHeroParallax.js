import { useEffect, useRef } from 'react';

/**
 * useHeroParallax
 * Subtle cursor-driven depth for non-essential decorative elements in the hero.
 * Disabled on touch devices and when prefers-reduced-motion is active.
 */
export function useHeroParallax() {
  const heroRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1025px) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion || !heroRef.current) return;

    const hero = heroRef.current;
    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 16; // Max 8px offset each way
      targetY = y * 16;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      hero.style.setProperty('--hero-px', `${currentX.toFixed(2)}px`);
      hero.style.setProperty('--hero-py', `${currentY.toFixed(2)}px`);

      rafId = requestAnimationFrame(animate);
    };

    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    hero.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return heroRef;
}
