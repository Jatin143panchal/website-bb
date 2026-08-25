import React, { useLayoutEffect, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    // Initialize Lenis with improved defaults for premium feel
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      // @ts-ignore
      normalizeWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
    };

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger on window resize to prevent layout shifts
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};
