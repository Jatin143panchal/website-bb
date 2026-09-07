import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeInvestmentSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(
        tiersRef.current?.querySelectorAll('.tier-col') ?? [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: tiersRef.current, start: 'top 78%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const tiers = [
    {
      id: 'starter',
      label: 'STARTER',
      price: '₹1.8L',
      priceNote: 'Onwards',
      qty: '100–250 Bottles',
      scope: 'Product Only',
      includes: [
        'Custom fragrance formulation',
        'IFRA certification',
        'Glass bottle & pump',
        'Your label applied',
        'Batch QC report',
      ],
    },
    {
      id: 'brand',
      label: 'BRAND',
      price: '₹4.5L',
      priceNote: 'Onwards',
      qty: '250–500 Bottles',
      scope: 'Brand + Product',
      featured: true,
      includes: [
        'Custom fragrance formulation',
        'Brand identity design',
        'Custom label + rigid box',
        'Heavy flint flacon & zamak cap',
        'IFRA + CDSCO certified',
        '3D product renders',
        'Batch QC report',
      ],
    },
    {
      id: 'launch',
      label: 'LAUNCH',
      price: '₹9L+',
      priceNote: 'Custom',
      qty: '500+ Bottles',
      scope: 'End-to-End',
      includes: [
        'Everything in Brand tier',
        'Custom bottle OEM mold',
        'Shopify D2C store',
        'Amazon / Nykaa activation',
        'Meta ad strategy & creative',
        'Influencer seeding kit',
        'Full launch management',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Investment</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            WHAT DOES IT
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
            ACTUALLY COST?
          </h3>
        </div>

        {/* 3-tier columns — vertical rule separators, no box borders */}
        <div ref={tiersRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-zinc-200">
          {tiers.map((t) => (
            <div key={t.id} className={`tier-col space-y-6 px-0 lg:px-10 first:pl-0 last:pr-0 py-6 lg:py-0 border-t lg:border-t-0 border-zinc-100`}>

              {t.featured && (
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">— Most Popular</div>
              )}

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">{t.label}</div>
                <div className="text-xs font-mono text-zinc-400 mb-3">{t.scope} · {t.qty}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-mono text-black">{t.price}</span>
                  <span className="text-xs text-zinc-400 font-mono">{t.priceNote}</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                    <div className="w-3 h-px bg-zinc-400 mt-2.5 shrink-0" />
                    <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-zinc-400 text-center" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
          Pricing varies by MOQ, formulation complexity, glass specification, and packaging finishing. All quotes include GST where applicable.
        </p>

      </div>
    </section>
  );
};

export default PerfumeInvestmentSection;
