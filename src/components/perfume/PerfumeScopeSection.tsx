import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PerfumeScopeSectionProps {
  onSelectScope: (scopeId: string) => void;
}

export const PerfumeScopeSection: React.FC<PerfumeScopeSectionProps> = ({ onSelectScope }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(
        colsRef.current?.querySelectorAll('.scope-col') ?? [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: colsRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scopes = [
    {
      id: 'product',
      num: '01',
      title: 'PRODUCT\nONLY',
      desc: 'You bring the brand identity and labels. We formulate the custom fragrance, procure flint glass bottles, crimp atomizers, and execute batch manufacturing.',
      items: ['Custom Fragrance Compounding', 'IFRA & CDSCO Certification', 'Glass Bottle & Pump Sourcing', 'Automated Filling & QC'],
      cta: 'Start Product',
    },
    {
      id: 'brand_product',
      num: '02',
      title: 'BRAND +\nPRODUCT',
      desc: 'We formulate the fragrance, design the visual brand identity, engineer luxury unboxing cartons, curate the glass flacon, and deliver complete retail packaging.',
      items: ['All Formulation & Compounding', 'Brand Naming, Logo & Visual System', 'Bespoke Bottle & Rigid Box', '3D Renders & Foil Cartons'],
      cta: 'Build My Brand',
    },
    {
      id: 'end_to_end',
      num: '03',
      title: 'END-TO-\nEND',
      desc: 'The complete turnkey venture builder: fragrance formulation, custom bottle mold, luxury packaging, brand identity, Shopify D2C store, Amazon/Nykaa launch, and ad growth funnels.',
      items: ['Turnkey Manufacturing', 'Complete Brand & Packaging', 'High-Converting Shopify', 'Meta / Amazon / Nykaa Launch'],
      cta: 'Full Launch',
      featured: true,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Launch Scope</span>
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            HOW MUCH DO YOU
          </h2>
          <h3
            className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
          >
            WANT US TO HANDLE?
          </h3>
        </div>

        {/* 3 Column Editorial — no box, use vertical rules */}
        <div ref={colsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-zinc-200">
          {scopes.map((sc) => (
            <div
              key={sc.id}
              className={`scope-col group px-0 lg:px-10 first:pl-0 last:pr-0 py-4 lg:py-0 border-t border-b-0 border-zinc-100 lg:border-t-0 space-y-6 ${
                sc.featured ? 'relative' : ''
              }`}
            >
              {sc.featured && (
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                  — Recommended
                </div>
              )}

              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400">{sc.num}</span>
                <h4
                  className="text-2xl sm:text-3xl font-normal tracking-[-0.01em] text-[#111111] leading-tight uppercase whitespace-pre-line"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {sc.title}
                </h4>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">{sc.desc}</p>

              <ul className="space-y-2">
                {sc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-500">
                    <div className="w-3 h-px bg-zinc-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onSelectScope(sc.id)}
                className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-all cursor-pointer group-hover:gap-4 ${
                  sc.featured ? 'text-black' : 'text-zinc-500 hover:text-black'
                }`}
              >
                {sc.cta}
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerfumeScopeSection;
