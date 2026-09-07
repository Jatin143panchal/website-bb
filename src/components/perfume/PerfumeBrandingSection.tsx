import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeBrandingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const delivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(
        delivRef.current?.querySelectorAll('.deliverable') ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: delivRef.current, start: 'top 78%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const deliverables = [
    { num: '01', item: 'Brand Name & Naming Strategy', desc: 'Cultural research, trademark viability check, phonaesthetic score.' },
    { num: '02', item: 'Visual Identity System', desc: 'Primary logo, secondary lockup, monogram, and icon in all formats.' },
    { num: '03', item: 'Colour & Typography Palette', desc: 'Brand colours with print CMYK/Pantone, brand typefaces.' },
    { num: '04', item: 'Bottle Label Design', desc: 'Front, back, neck band label. Foil-ready print-ready files.' },
    { num: '05', item: 'Rigid Box Artwork', desc: 'Dieline art, hot stamp & emboss coordinates, production files.' },
    { num: '06', item: 'Brand Story & Copy', desc: 'Olfactory narrative, brand manifesto, tagline, about copy.' },
    { num: '07', item: '3D Visual Renders', desc: 'Photorealistic bottle + box render pack for digital & print.' },
    { num: '08', item: 'Brand Guidelines PDF', desc: '40-page brand bible: usage rules, spacing, tone of voice.' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Branding & Design</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              BUILDING A BRAND
            </h2>
            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
              PEOPLE REMEMBER.
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Fragrance is sensory, but buying decisions are visual. We build the brand identity — from name to box to visual system — so your perfume looks like it belongs at Selfridges before it launches anywhere.
          </p>
        </div>

        {/* Deliverables — editorial list */}
        <div ref={delivRef} className="divide-y divide-zinc-100">
          {deliverables.map((d) => (
            <div key={d.num} className="deliverable flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6">
              <span className="text-xs font-mono text-zinc-400 shrink-0 w-6">{d.num}</span>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-2">
                <h4 className="text-sm font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {d.item}
                </h4>
                <p className="text-sm text-zinc-500" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerfumeBrandingSection;
