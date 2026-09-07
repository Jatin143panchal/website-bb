import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AyurvedaHeroProps {
  onOpenWizard: (options?: { category?: string; stage?: string; scope?: string }) => void;
  onScrollToExplore: () => void;
}

export const AyurvedaHero: React.FC<AyurvedaHeroProps> = ({ onOpenWizard, onScrollToExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current?.children ?? [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 }
      )
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
        .fromTo(visualRef.current, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1 }, 0.2);

      // Parallax scroll on visual container
      if (visualRef.current && containerRef.current) {
        gsap.to(visualRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-24 sm:pt-32 pb-16 px-4 sm:px-8 lg:px-16 bg-[#FAFAF8] text-[#111111] overflow-hidden select-none border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Core Statement & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              Ayurveda &amp; Botanicals Brand Launch
            </span>
          </div>

          {/* Main Headline */}
          <div ref={headlineRef} className="space-y-0 overflow-hidden">
            <h1
              className="text-[clamp(2.8rem,5.5vw,5.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ANCIENT KNOWLEDGE.
            </h1>
            <h2
              className="text-[clamp(2.8rem,5.5vw,5.2rem)] font-light tracking-[0.04em] text-zinc-500 leading-[1.0] uppercase italic"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              MODERN BRANDS.
            </h2>
          </div>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl font-normal"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Turn Ayurvedic, herbal and botanical product ideas into beautifully designed, clinically vetted, market-ready brands.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenWizard()}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              <span>START MY AYURVEDIC BRAND</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onScrollToExplore}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-zinc-300 hover:border-black text-zinc-800 hover:text-black text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer bg-white"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              <span>SEE HOW IT WORKS</span>
              <ArrowDown size={14} />
            </button>
          </div>

          {/* Metrics bar */}
          <div
            ref={statsRef}
            className="pt-8 border-t border-zinc-200 grid grid-cols-3 gap-6 sm:gap-8"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-normal text-[#111111] font-mono">45–90</div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5 font-mono" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Days to Shelf
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-normal text-[#111111] font-mono">108+</div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5 font-mono" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                AYUSH Labs
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-normal text-[#111111] font-mono">100%</div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5 font-mono" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Heavy Metal Free
              </div>
            </div>
          </div>

        </div>

        {/* Right Column — Modern Aesthetic Product + Natural Botanical Showcase */}
        <div ref={visualRef} className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-black p-7 sm:p-9 shadow-2xl border border-zinc-800 text-white space-y-6">
            
            {/* Visual Header Tag */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                BOTANICAL EXTRACTION × MODERN PACKAGING
              </span>
              <div className="w-2 h-2 rounded-full bg-zinc-400" />
            </div>

            {/* Visual Grid: Ingredient -> Formula -> Product -> Brand */}
            <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3] flex items-center justify-center group">
              <img
                src="/assets/ayurveda/ayurveda_hero.jpg"
                alt="Modern Ayurvedic Botanical Formulation"
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== window.location.origin + '/assets/Banner 3.png') {
                    target.src = '/assets/Banner 3.png';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-left">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={12} className="text-zinc-300" />
                  <span>The Real Alchemy</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-white mt-0.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  Ingredient → Formula → Product → Brand
                </div>
              </div>
            </div>

            {/* 4 Value Pillars */}
            <div className="grid grid-cols-2 gap-3 text-left pt-1">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Zero Mineral Oil</div>
                <div className="text-xs font-normal text-zinc-200 mt-0.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>Cold-Pressed Tailas</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">AYUSH Certified</div>
                <div className="text-xs font-normal text-zinc-200 mt-0.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>GMP Audited Labs</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Amber &amp; Flint</div>
                <div className="text-xs font-normal text-zinc-200 mt-0.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>UV-Shield Glass</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Clean Label</div>
                <div className="text-xs font-normal text-zinc-200 mt-0.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>Global Export Ready</div>
              </div>
            </div>

            {/* Direct Trigger */}
            <button
              type="button"
              onClick={() => onOpenWizard()}
              className="w-full py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              <span>Build My Custom Formulation</span>
              <ArrowRight size={14} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaHero;
