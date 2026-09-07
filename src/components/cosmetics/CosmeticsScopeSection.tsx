import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CosmeticsScopeSectionProps {
  onSelectScope: (scope: string) => void;
}

export const CosmeticsScopeSection: React.FC<CosmeticsScopeSectionProps> = ({ onSelectScope }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(colsRef.current?.querySelectorAll('.scope-col') ?? [], { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: colsRef.current, start: 'top 75%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scopes = [
    {
      id: 'product_only', num: '01', label: 'PRODUCT ONLY', title: 'Formulation\n+ Manufacturing',
      desc: 'You bring brand identity and labels. We formulate, develop shades, source components, and manufacture the finished product.',
      items: ['Custom formulation', 'Shade development & testing', 'Component sourcing', 'GMP manufacturing & QC'],
      cta: 'Start Product',
    },
    {
      id: 'product_packaging', num: '02', label: 'PRODUCT + PACKAGING', title: 'Formula + Brand\nPackaging',
      desc: 'Everything in Product Only, plus custom packaging design: cartons, tubes, compacts, labels and finish.',
      items: ['Full formulation & shades', 'Component + packaging design', 'Label & carton artwork', 'Brand-ready finished product'],
      cta: 'Build My Product',
      featured: true,
    },
    {
      id: 'complete_brand', num: '03', label: 'COMPLETE BRAND', title: 'End-to-End\nBeauty Brand',
      desc: 'The complete beauty launch: formulation, shade range, brand identity, packaging, Shopify D2C, Amazon/Nykaa, and go-to-market.',
      items: ['Everything in Product + Packaging', 'Complete brand identity', 'High-converting D2C store', 'Nykaa / Amazon / Myntra launch'],
      cta: 'Full Launch',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Launch Scope</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>HOW MUCH DO YOU</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>WANT US TO HANDLE?</h3>
        </div>

        <div ref={colsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-zinc-200">
          {scopes.map((sc) => (
            <div key={sc.id} className="scope-col space-y-6 px-0 lg:px-10 first:pl-0 last:pr-0 py-6 lg:py-0 border-t lg:border-t-0 border-zinc-100">
              {sc.featured && <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">— Most Popular</div>}
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">{sc.label}</div>
                <h4 className="text-2xl sm:text-3xl font-normal text-[#111111] mt-2 uppercase whitespace-pre-line" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{sc.title}</h4>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{sc.desc}</p>
              <ul className="space-y-2">
                {sc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-500">
                    <div className="w-3 h-px bg-zinc-400 mt-2 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => onSelectScope(sc.id)} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-all cursor-pointer text-zinc-500 hover:text-black group">
                {sc.cta}<ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmeticsScopeSection;
