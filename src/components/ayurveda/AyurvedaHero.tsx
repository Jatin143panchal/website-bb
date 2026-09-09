import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AyurvedaHeroProps {
  onOpenWizard: (options?: { category?: string; stage?: string; scope?: string }) => void;
  onScrollToExplore: () => void;
}

export const AyurvedaHero: React.FC<AyurvedaHeroProps> = ({ onScrollToExplore }) => {
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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] overflow-hidden select-none border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Core Statement & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Eyebrow */}
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              AYURVEDA &amp; BOTANICALS BRAND LAUNCH
            </span>
          </div>

          {/* Main Headline */}
          <div ref={headlineRef} className="space-y-1 overflow-hidden">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-bold uppercase tracking-tight text-[#111111] leading-[1.02]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              ANCIENT KNOWLEDGE. <br />
              <span className="text-[#FF5722]">
                MODERN BRANDS
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed max-w-xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Turn Ayurvedic, herbal and botanical product ideas into beautifully designed, clinically vetted, market-ready brands in 45–90 days.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-9 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Start My Ayurvedic Brand</span>
              <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              onClick={onScrollToExplore}
              className="px-8 py-4 rounded-full border-2 border-zinc-900 hover:border-[#FF5722] text-zinc-900 hover:text-[#FF5722] font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 text-center hover:bg-black/5 flex items-center justify-center gap-2 cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>See How It Works</span>
              <ArrowDown size={14} />
            </button>
          </div>

          {/* Metrics bar */}
          <div
            ref={statsRef}
            className="pt-8 border-t border-zinc-200 grid grid-cols-3 gap-6 sm:gap-8 text-left"
          >
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>45–90</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Days to Shelf
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>108+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                AYUSH Labs
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>100%</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Heavy Metal Free
              </div>
            </div>
          </div>

        </div>

        {/* Right Column — Sharp Container (rounded-none), Removed AI icon & overlay badge */}
        <div ref={visualRef} className="lg:col-span-5 relative">
          <div className="relative rounded-none overflow-hidden bg-black p-6 sm:p-8 shadow-2xl border border-zinc-800 text-white space-y-6">
            
            {/* Visual Header Tag */}
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-semibold uppercase tracking-widest text-[#FF5722]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                BOTANICAL EXTRACTION × MODERN PACKAGING
              </span>
            </div>

            {/* Visual Grid: Image with no rounded corners, no AI badge */}
            <div className="relative rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3] flex items-center justify-center group">
              <img
                src="/assets/ayurveda/ayurveda_hero.jpg"
                alt="Modern Ayurvedic Botanical Formulation"
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 rounded-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== window.location.origin + '/assets/Banner 3.png') {
                    target.src = '/assets/Banner 3.png';
                  }
                }}
              />
            </div>

            {/* 4 Value Pillars — Sharp boxes (rounded-none), Poppins font */}
            <div className="grid grid-cols-2 gap-3 text-left pt-1">
              <div className="p-3 rounded-none bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-semibold uppercase text-zinc-400" style={{ fontFamily: "'Poppins', sans-serif" }}>Zero Mineral Oil</div>
                <div className="text-xs font-medium text-white mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>Cold-Pressed Tailas</div>
              </div>
              <div className="p-3 rounded-none bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-semibold uppercase text-zinc-400" style={{ fontFamily: "'Poppins', sans-serif" }}>AYUSH Certified</div>
                <div className="text-xs font-medium text-white mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>GMP Audited Labs</div>
              </div>
              <div className="p-3 rounded-none bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-semibold uppercase text-zinc-400" style={{ fontFamily: "'Poppins', sans-serif" }}>Amber &amp; Flint</div>
                <div className="text-xs font-medium text-white mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>UV-Shield Glass</div>
              </div>
              <div className="p-3 rounded-none bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] font-semibold uppercase text-zinc-400" style={{ fontFamily: "'Poppins', sans-serif" }}>Clean Label</div>
                <div className="text-xs font-medium text-white mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>Global Export Ready</div>
              </div>
            </div>

            {/* Direct Link to Contact */}
            <Link
              to="/contact"
              className="w-full py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Build My Custom Formulation</span>
              <ArrowRight size={15} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaHero;
