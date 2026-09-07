import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeEngineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(
        gridRef.current?.querySelectorAll('.engine-item') ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: gridRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { num: '01', title: 'Fragrance Formulation', desc: '350+ accords. Custom compounding. Bespoke briefs via olfactory profiling.' },
    { num: '02', title: 'Bottle Engineering', desc: 'Heavy flint glass flacon. Zamak collar. Micro-mist crimp pump. OEM glass molds.' },
    { num: '03', title: 'Brand Identity', desc: 'Naming, visual system, typography, label design, and tone of voice.' },
    { num: '04', title: 'Luxury Packaging', desc: 'Rigid magnetic draw boxes, hot stamping, emboss, UV varnish and interior ribbon.' },
    { num: '05', title: 'Manufacturing & QC', desc: 'Automated filling lines. CDSCO batch testing. Tamper ring crimp seal.' },
    { num: '06', title: 'Market Launch', desc: 'D2C Shopify, Amazon, Nykaa, B2B retail, Myntra activation and influencer seeding.' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">What Banega Handles</span>
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            THE COMPLETE
          </h2>
          <h3
            className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
          >
            LAUNCH ENGINE.
          </h3>
        </div>

        {/* 2-col editorial grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 divide-y divide-zinc-100 sm:divide-y-0">
          {services.map((s) => (
            <div key={s.num} className="engine-item py-10 border-b border-zinc-100 last:border-b-0 sm:last:border-b sm:border-b space-y-3">
              <span className="text-xs font-mono text-zinc-400">{s.num}</span>
              <h4
                className="text-lg font-medium text-[#111111] leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {s.title}
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerfumeEngineSection;
