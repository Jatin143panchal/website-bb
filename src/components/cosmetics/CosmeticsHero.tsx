import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CosmeticsHeroProps {
  onOpenWizard: () => void;
  onScrollToProducts: () => void;
}

export const CosmeticsHero: React.FC<CosmeticsHeroProps> = ({ onOpenWizard, onScrollToProducts }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(line1Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(line2Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.7')
        .fromTo(line3Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.7')
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
        .fromTo(imgRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }, 0.2);

      // Journey words stagger
      gsap.fromTo(
        journeyRef.current?.querySelectorAll('.journey-word') ?? [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power2.out', delay: 1.2 }
      );

      // Parallax
      gsap.to(imgRef.current, {
        y: -50, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.8 },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const journey = ['IDEA', 'FORMULA', 'SHADE', 'PACKAGING', 'PRODUCT', 'BRAND', 'LAUNCH'];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-100" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Color Cosmetics Launch</span>
          </div>

          <div className="overflow-hidden space-y-0">
            <h1 ref={line1Ref} className="text-[clamp(3rem,6vw,5.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>YOUR SHADE.</h1>
            <h2 ref={line2Ref} className="text-[clamp(3rem,6vw,5.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.0] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>YOUR PRODUCT.</h2>
            <h2 ref={line3Ref} className="text-[clamp(3rem,6vw,5.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>YOUR BRAND.</h2>
          </div>

          <p ref={subRef} className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            From formulation and shade development to packaging, manufacturing, branding and launch — build your colour cosmetics brand with one partner.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4">
            <button type="button" onClick={onOpenWizard} className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-sm font-medium uppercase tracking-widest transition-all cursor-pointer">
              Start My Makeup Launch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button type="button" onClick={onScrollToProducts} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black uppercase tracking-widest transition-colors cursor-pointer group">
              See How It Works
              <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div ref={statsRef} className="pt-8 border-t border-zinc-100 grid grid-cols-3 gap-8">
            {[{ val: '200+', label: 'Shade Options' }, { val: '50+', label: 'Product Types' }, { val: '100 MOQ', label: 'Per SKU' }].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-black font-mono">{s.val}</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex flex-col items-center gap-8">
          <div ref={imgRef} className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,transparent_70%)]" />
            <img
              src="/assets/solutions/cosmetic.jpg"
              alt="Color Cosmetics Launch"
              className="relative z-10 w-full object-cover object-center rounded-2xl select-none"
              style={{ maxHeight: 480, maxWidth: 420, filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.12))' }}
              draggable={false}
            />
            <div className="absolute top-4 right-4 z-20">
              <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">Dermatologically Tested</div>
            </div>
          </div>

          {/* Journey strip */}
          <div ref={journeyRef} className="flex items-center flex-wrap gap-0 justify-center">
            {journey.map((w, i) => (
              <React.Fragment key={w}>
                <span className="journey-word text-[10px] font-mono uppercase tracking-widest text-zinc-500">{w}</span>
                {i < journey.length - 1 && <span className="journey-word mx-2 text-zinc-300 text-[10px]">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-zinc-400 animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Scroll</span>
      </div>
    </section>
  );
};

export default CosmeticsHero;
