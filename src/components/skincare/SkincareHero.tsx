import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkincareHeroProps {
  onOpenWizard: (options?: { category?: string; format?: string; scope?: string }) => void;
  onScrollToExplore: () => void;
}

export const SkincareHero: React.FC<SkincareHeroProps> = ({ onOpenWizard, onScrollToExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(line1Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(line2Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.7')
        .fromTo(line3Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.7')
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo(imgRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }, 0.2)
        .fromTo(
          thumbsRef.current?.querySelectorAll('.thumb-item') ?? [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' },
          0.8
        );

      if (imgRef.current && containerRef.current) {
        gsap.to(imgRef.current, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.8,
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
      className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] overflow-hidden select-none border-b border-zinc-100"
    >
      {/* Thin horizontal rule under navbar */}
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-100" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column — Core Statement & CTAs */}
        <div className="space-y-8 text-left">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              Skincare &amp; Clinical Derma
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-0 overflow-hidden">
            <h1
              ref={line1Ref}
              className="text-[clamp(3rem,6vw,5.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOUR
            </h1>
            <h2
              ref={line2Ref}
              className="text-[clamp(3rem,6vw,5.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.0] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              SKINCARE IDEA.
            </h2>
            <h2
              ref={line3Ref}
              className="text-[clamp(3rem,6vw,5.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOUR BRAND.
            </h2>
          </div>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg font-normal"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            From product development and formulation to packaging, manufacturing, branding and launch — build your skincare brand with one connected launch partner.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4">
            <button
              type="button"
              onClick={() => onOpenWizard()}
              className="group inline-flex items-center gap-3 bg-black hover:bg-zinc-800 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 transition-all duration-300 rounded-full cursor-pointer"
            >
              <span>Start My Skincare</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onScrollToExplore}
              className="inline-flex items-center gap-2 border border-zinc-200 hover:border-black text-xs uppercase tracking-wider text-zinc-600 hover:text-black px-6 py-4 transition-all rounded-full cursor-pointer"
            >
              <span>See How It Works</span>
              <ArrowDown size={13} />
            </button>
          </div>

          {/* Stats Bar */}
          <div
            ref={statsRef}
            className="pt-8 border-t border-zinc-100 grid grid-cols-3 gap-8"
          >
            <div>
              <div className="text-2xl font-normal text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>45–90</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">Days to Shelf</div>
            </div>
            <div>
              <div className="text-2xl font-normal text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>108+</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">Partner Labs</div>
            </div>
            <div>
              <div className="text-2xl font-normal text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">Active Stability</div>
            </div>
          </div>

        </div>

        {/* Right Column — Editorial Product Flacon Showcase */}
        <div className="space-y-4">
          <div
            ref={imgRef}
            className="relative w-full aspect-[4/5] max-h-[580px] rounded-2xl overflow-hidden bg-[#FAFAFA] border border-zinc-100"
          >
            <img
              src="/assets/skincare/grevety_skincare_full_collection.jpg"
              alt="Grevety Clinical Skincare Full Collection"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== window.location.origin + '/assets/Banner 4.png') {
                  target.src = '/assets/Banner 4.png';
                }
              }}
            />
            {/* Subtle editorial bottom label */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-zinc-100 text-left flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Clinical Formulation Flow</div>
                <div className="text-xs font-semibold text-[#111111] mt-0.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  IDEA → FORMULA → PRODUCT → BRAND → LAUNCH
                </div>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2.5 py-1 rounded">
                Turnkey
              </span>
            </div>
          </div>

          {/* 4 Clean Editorial Category Badges */}
          <div ref={thumbsRef} className="grid grid-cols-4 gap-3">
            {thumbProducts.map((item, idx) => (
              <div
                key={idx}
                className="thumb-item p-3 rounded-xl border border-zinc-100 bg-[#FAFAFA] text-left space-y-0.5"
              >
                <div className="text-xs font-medium text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {item.label}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 truncate">
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
