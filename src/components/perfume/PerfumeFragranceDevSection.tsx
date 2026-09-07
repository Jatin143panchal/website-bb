import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeFragranceDevSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const accordsRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(
        accordsRef.current?.querySelectorAll('.accord-row') ?? [],
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: accordsRef.current, start: 'top 78%' } }
      );
      gsap.fromTo(specRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: specRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const accords = [
    { family: 'FLORAL', notes: ['Rose de Mai', 'Jasmine Grandiflorum', 'Tuberose', 'Iris', 'Violet Leaf'] },
    { family: 'ORIENTAL', notes: ['Oud Al Misri', 'Amber', 'Vanilla', 'Musk', 'Benzoin'] },
    { family: 'WOODY', notes: ['Cedarwood', 'Sandalwood', 'Vetiver', 'Patchouli', 'Guaiac'] },
    { family: 'FRESH', notes: ['Bergamot', 'Yuzu', 'Sea Accord', 'Green Tea', 'Grapefruit'] },
    { family: 'GOURMAND', notes: ['Tonka Bean', 'Caramel', 'Praline', 'Dark Chocolate', 'Coffee'] },
    { family: 'FOUGÈRE', notes: ['Lavender', 'Oakmoss', 'Coumarin', 'Geranium', 'Cardamom'] },
  ];

  const specs = [
    { label: 'Concentrations', val: 'EDP 15–20%, Extrait 25–30%' },
    { label: 'Certification', val: 'IFRA 51st Amendment, CDSCO' },
    { label: 'Lab Partners', val: '108+ IFRA Certified Labs' },
    { label: 'Sampling Rounds', val: '3–5 Variants per Brief' },
    { label: 'Stability Testing', val: 'Accelerated 4-week shelf life' },
    { label: 'MOQ', val: 'From 100 bottles per SKU' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Fragrance Development</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            THE SCENT
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
            LIBRARY.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Accord Families */}
          <div ref={accordsRef} className="divide-y divide-zinc-100">
            {accords.map((a) => (
              <div key={a.family} className="accord-row py-5 flex items-start gap-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 shrink-0 mt-1 w-20">{a.family}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {a.notes.map((n) => (
                    <span key={n} className="text-sm text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right — Specs, stacked with real lab photography */}
          <div ref={specRef} className="space-y-0 divide-y divide-zinc-100 self-start">
            <p className="text-sm text-zinc-500 leading-relaxed pb-4" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Every fragrance starts with your brief — your brand's mood, audience, and reference palette. Our perfumers translate this into an olfactory architecture across top, heart, and base layers, before compounding at IFRA-certified labs.
            </p>

            {/* Real Perfume Compounding Lab Photography */}
            <div className="py-4">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-100 shadow-sm group">
                <img
                  src="/assets/perfume/perfume_compounding_lab.jpg"
                  alt="Grasse Perfume Compounding Laboratory"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-mono uppercase tracking-widest text-zinc-600">
                  Compounding Lab · Grasse
                </div>
              </div>
            </div>

            {specs.map((s) => (
              <div key={s.label} className="py-3.5 flex items-center justify-between gap-4">
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

export default PerfumeFragranceDevSection;
