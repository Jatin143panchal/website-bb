import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkincareHeroProps {
  onOpenWizard: (options?: { category?: string; format?: string; scope?: string }) => void;
  onScrollToExplore: () => void;
}

export const SkincareHero: React.FC<SkincareHeroProps> = ({ onScrollToExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(line1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
        .fromTo(imgRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1 }, 0.2);

      if (imgRef.current && containerRef.current) {
        gsap.to(imgRef.current, {
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

  const thumbProducts = [
    { label: 'Serum', desc: 'Active Concentrates' },
    { label: 'Moisturiser', desc: 'Ceramide Barrier' },
    { label: 'Sunscreen', desc: 'SPF 50+ In-Vivo' },
    { label: 'Cleanser', desc: 'Gentle pH Balanced' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] overflow-hidden select-none border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Core Statement & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Eyebrow — Removed horizontal line */}
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              CLINICAL SKINCARE &amp; DERMA
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 overflow-hidden">
            <h1
              ref={line1Ref}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-bold uppercase tracking-tight text-[#111111] leading-[1.02]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              YOUR SKINCARE IDEA. <br />
              <span className="text-[#FF5722]">
                YOUR BRAND
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed max-w-xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            From active formulation and texture development to airless packaging, manufacturing, branding and launch — build your skincare brand in 45–90 days.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-9 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Start My Skincare Brand</span>
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
                Days to Market
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>108+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Partner Labs
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>100%</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Active Stability
              </div>
            </div>
          </div>

        </div>

        {/* Right Column — Sharp Container (rounded-none), No rounded overlay badge */}
        <div ref={imgRef} className="lg:col-span-5 space-y-4">
          <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden bg-transparent border border-zinc-200 shadow-2xl">
            <img
              src="/assets/skincare/grevety_skincare_full_collection.jpg"
              alt="Grevety Clinical Skincare Full Collection"
              className="w-full h-full object-cover object-center rounded-none"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== window.location.origin + '/assets/Banner 4.png') {
                  target.src = '/assets/Banner 4.png';
                }
              }}
            />
          </div>

          {/* 4 Clean Sharp Category Badges */}
          <div className="grid grid-cols-4 gap-3">
            {thumbProducts.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-none border border-zinc-200 bg-[#FAFAFA] text-left space-y-0.5"
              >
                <div className="text-xs font-bold text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.label}
                </div>
                <div className="text-[10px] text-zinc-500 truncate" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkincareHero;
