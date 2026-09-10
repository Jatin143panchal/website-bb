import React, { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    // Initialize Lenis with improved defaults for premium feel
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
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
