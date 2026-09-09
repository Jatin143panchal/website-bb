import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeCaseStudiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(
        casesRef.current?.querySelectorAll('.case-row') ?? [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: casesRef.current, start: 'top 78%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cases = [
    {
      num: '01',
      brand: 'VELVETINE',
      type: 'Luxury EDP Launch',
      result: '₹2.8CR',
      resultLabel: 'Revenue · 6 Months',
      detail: '5-SKU luxury collection, Extrait 28% concentration, custom heavy glass flacon, hand-stamped rigid box. D2C Shopify + Nykaa Luxe launch.',
      scope: ['Fragrance', 'Bottle', 'Branding', 'D2C'],
      img: '/assets/perfume/108_luxury_velvet_model.jpg',
    },
    {
      num: '02',
      brand: 'RAAZ',
      type: 'Niche Oud Launch',
      result: '4,200',
      resultLabel: 'Units · 90 Days',
      detail: 'Complex Oud-Amber accord, Arabic calligraphy inspired typographic label, collector presentation box. Positioned at ₹3,500–₹5,500.',
      scope: ['Fragrance', 'Branding', 'Packaging'],
      img: '/assets/perfume/drefor_obsidian_botanical.jpg',
    },
    {
      num: '03',
      brand: 'LIBRE HOMME',
      type: 'Everyday Premium D2C',
      result: '40%',
      resultLabel: 'Repeat Rate · 3 SKUs',
      detail: 'High-velocity everyday EDP for men. ₹999 retail, 20% concentration. Amazon top-10 in Men\'s Fragrance within 60 days of launch.',
      scope: ['Fragrance', 'Manufacturing', 'Amazon'],
      img: '/assets/perfume/biographey_origin_roses.jpg',
    },
    {
      num: '04',
      brand: 'FLORA & CO',
      type: 'Feminine Collection',
      result: '1.2×',
      resultLabel: 'ROAS on Meta Ads',
      detail: 'Floral-Gourmand EDP range, signature ribbon unboxing experience, influencer micro-seeding strategy. Launched on Myntra + own D2C store.',
      scope: ['End-to-End'],
      img: '/assets/perfume/blush_en_bloom_golden.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Real Launches</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            BRANDS WE
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
            BROUGHT TO LIFE.
          </h3>
        </div>

        {/* Cases — editorial table */}
        <div ref={casesRef} className="divide-y divide-zinc-100">
          {cases.map((c) => (
            <div key={c.num} className="case-row py-10 grid grid-cols-1 lg:grid-cols-[80px_1fr_160px_160px_160px] gap-6 lg:gap-10 items-center">

              {/* Number */}
              <span className="text-xs font-mono text-zinc-400">{c.num}</span>

              {/* Brand + detail */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-4">
                  <h4 className="text-2xl sm:text-3xl font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {c.brand}
                  </h4>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{c.type}</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-xl" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {c.detail}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {c.scope.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="lg:text-right">
                <div className="text-4xl font-black font-mono text-black">{c.result}</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">{c.resultLabel}</div>
              </div>

              {/* Product Image */}
              <div className="hidden lg:block rounded-none overflow-hidden border border-zinc-100 shadow-sm aspect-[3/4]">
                <img
                  src={c.img}
                  alt={c.brand}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerfumeCaseStudiesSection;
