import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PerfumeHeroProps {
  onOpenWizard: (options?: { archetype?: string; scope?: string }) => void;
  onScrollToProcess: () => void;
}

export const PerfumeHero: React.FC<PerfumeHeroProps> = ({ onOpenWizard, onScrollToProcess }) => {
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

      // Scroll parallax on hero image
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const thumbBottles = [
    { img: '/assets/perfume/blush_en_bloom_golden.jpg', label: 'Golden Silk', spec: 'Extrait · Rose Flacon' },
    { img: '/assets/perfume/biographey_origin_roses.jpg', label: 'Biographey', spec: 'Origin · Red Roses' },
    { img: '/assets/perfume/drefor_obsidian_botanical.jpg', label: 'Drefor', spec: 'Obsidian · Split Accord' },
    { img: '/assets/perfume/108_luxury_velvet_model.jpg', label: '108 Velvet', spec: 'Velvet Eclipse · Model' },
    { img: '/assets/perfume/blush_en_bloom_trio.jpg', label: 'Blush Trio', spec: 'Cherry Drip Collection' },
  ];

  const [activeImg, setActiveImg] = React.useState(thumbBottles[0].img);
  const [activeSpec, setActiveSpec] = React.useState(thumbBottles[0].spec);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] overflow-hidden"
    >
      {/* Thin horizontal rule under navbar */}
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-100" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left */}
        <div className="space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              Perfume &amp; Fragrance
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
              FRAGRANCE.
            </h2>
            <h2
              ref={line3Ref}
              className="text-[clamp(3rem,6vw,5.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOUR BRAND.
            </h2>
          </div>

          {/* Sub */}
          <p
            ref={subRef}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            From fragrance formulation to bottle, packaging, branding and manufacturing — build your perfume brand with one connected launch partner.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4">
            <button
              type="button"
              onClick={() => onOpenWizard()}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-sm font-medium uppercase tracking-widest transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
            >
              Start My Perfume
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onScrollToProcess}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black uppercase tracking-widest transition-colors cursor-pointer group"
              style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
            >
              See Process
              <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Metrics - clean, no box */}
          <div ref={statsRef} className="pt-8 border-t border-zinc-100 grid grid-cols-3 gap-8">
            {[
              { val: '45–90', label: 'Days to Shelf' },
              { val: '108+', label: 'Certified Labs' },
              { val: '100%', label: 'IFRA Certified' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-black font-mono">{s.val}</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero image + thumbnails */}
        <div className="relative flex flex-col items-center gap-6">
          <div ref={imgRef} className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,155,38,0.12)_0%,transparent_70%)] rounded-full blur-2xl" />
            <img
              key={activeImg}
              src={activeImg}
              alt="Luxury Perfume Flacon by Banega"
              className="relative z-10 w-full object-cover rounded-2xl select-none transition-all duration-500 shadow-2xl"
              style={{ maxHeight: 520, maxWidth: 390, filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.22))' }}
              draggable={false}
            />
            <div className="absolute top-4 right-4 z-20">
              <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-800 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-200 shadow-sm font-medium">
                {activeSpec}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20">
              <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-800 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-200 shadow-sm font-medium">
                45–90 Day Turnkey
              </div>
            </div>
          </div>

          {/* 5-Image Thumbnail Interactive Strip */}
          <div ref={thumbsRef} className="flex items-end justify-center gap-2 sm:gap-3 px-2 w-full max-w-md">
            {thumbBottles.map((t, i) => {
              const isSelected = activeImg === t.img;
              return (
                <div
                  key={i}
                  className="thumb-item flex-1 flex flex-col items-center gap-1.5 cursor-pointer group"
                  onClick={() => {
                    setActiveImg(t.img);
                    setActiveSpec(t.spec);
                  }}
                  onMouseEnter={() => {
                    setActiveImg(t.img);
                    setActiveSpec(t.spec);
                  }}
                >
                  <div className={`w-full aspect-[3/4] relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    isSelected ? 'border-black scale-105 shadow-md ring-2 ring-amber-500/20' : 'border-zinc-200 opacity-70 hover:opacity-100 hover:border-zinc-500'
                  }`}>
                    <img
                      src={t.img}
                      alt={t.label}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <span className={`text-[9px] font-mono uppercase tracking-wider text-center transition-colors truncate max-w-full ${
                    isSelected ? 'text-black font-bold' : 'text-zinc-400 group-hover:text-zinc-800'
                  }`}>
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-zinc-400 animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Scroll</span>
      </div>
    </section>
  );
};

export default PerfumeHero;
