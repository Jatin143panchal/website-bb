import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CosmeticsFormulationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(leftRef.current?.querySelectorAll('.form-row') ?? [], { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: leftRef.current, start: 'top 78%' } });
      gsap.fromTo(rightRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: rightRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const attributes = [
    { category: 'FORMULA', items: ['Emulsion Base', 'Anhydrous / Water-based', 'Gel / Wax matrix', 'Long-wear polymers', 'Film-forming agents'] },
    { category: 'TEXTURE', items: ['Lightweight', 'Whipped', 'Buttery', 'Powder-pressed', 'Fluid / Serum'] },
    { category: 'FINISH', items: ['Matte', 'Satin', 'Glossy', 'Shimmer', 'Natural / Skin-like'] },
    { category: 'COVERAGE', items: ['Sheer', 'Buildable', 'Medium', 'Full', 'Skin-finish'] },
  ];

  const sequence = ['BRIEF', 'FIRST SAMPLE', 'SHADE TESTING', 'REFINEMENT', 'FINAL PRODUCT'];
  const specs = [
    { label: 'Shade Range', val: '1 to 40+ shades per product' },
    { label: 'Certification', val: 'Dermatologically tested, Cruelty-free' },
    { label: 'Lab Standards', val: 'GMP, BIS, EU Cosmetics compliant' },
    { label: 'Sampling', val: '3–5 shade iterations per brief' },
    { label: 'MOQ', val: 'From 100 units per shade' },
    { label: 'Stability', val: '24-month accelerated shelf-life test' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Formulation & Shade Development</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>COLOUR ISN'T</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>JUST A COLOUR.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div ref={leftRef} className="divide-y divide-zinc-100">
            {attributes.map((a) => (
              <div key={a.category} className="form-row py-5 flex items-start gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 shrink-0 mt-1 w-20">{a.category}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {a.items.map((n) => (
                    <span key={n} className="text-sm text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{n}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Sample sequence */}
            <div className="py-8">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">Sample Sequence</div>
              <div className="flex items-center flex-wrap gap-0">
                {sequence.map((s, i) => (
                  <React.Fragment key={s}>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600">{s}</span>
                    {i < sequence.length - 1 && <span className="mx-2 text-zinc-300">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div ref={rightRef} className="space-y-0 divide-y divide-zinc-100 self-start">
            <p className="text-sm text-zinc-500 leading-relaxed pb-6" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Colour is the product. It's the first thing customers see, the reason they repurchase, and the clearest signal of your brand's quality. We develop every shade from brief to final approval — pigment selection, opacity testing, and skin-tone evaluation across all undertones.
            </p>
            {specs.map((s) => (
              <div key={s.label} className="py-4 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-sm text-[#111111] text-right" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsFormulationSection;
