import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeWhyBanegaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(
        reasonsRef.current?.querySelectorAll('.reason-row') ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: reasonsRef.current, start: 'top 78%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      num: '01',
      title: 'One Partner. Zero Gaps.',
      desc: 'No coordinating between separate fragrance labs, packaging studios, and brand agencies. We own every step — formulation through shelf — under one SLA.',
    },
    {
      num: '02',
      title: 'European Quality. Indian Price.',
      desc: '108+ certified compounding labs. International quality standards at manufacturing economics only India can offer.',
    },
    {
      num: '03',
      title: 'From 100 Units.',
      desc: 'We are built for founder brands. No 10,000 unit MOQ gatekeeping. Start lean, validate, then scale with the same partner.',
    },
    {
      num: '04',
      title: '45–90 Day Shelf Date.',
      desc: 'Compressed timelines without cutting corners. Parallel-tracked formulation, sourcing, and brand — not sequential.',
    },
    {
      num: '05',
      title: 'Channel-Ready From Day One.',
      desc: 'Shopify D2C, Amazon Seller Central, Nykaa, Myntra, B2B retail — we configure your channel strategy before you ship a single bottle.',
    },
    {
      num: '06',
      title: 'IP Is Yours. Always.',
      desc: 'Your fragrance formula, brand identity, and supplier contacts are yours. We don\'t lock you in. We earn repeat business through results.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Why Banega</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            THE CASE
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
            FOR ONE PARTNER.
          </h3>
        </div>

        {/* Reasons — 2-column editorial */}
        <div ref={reasonsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-x-16 divide-y sm:divide-y-0">
          <div className="divide-y divide-zinc-100">
            {reasons.slice(0, 3).map((r) => (
              <div key={r.num} className="reason-row py-8 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-zinc-400">{r.num}</span>
                  <h4 className="text-lg font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {r.title}
                  </h4>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-7" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="divide-y divide-zinc-100">
            {reasons.slice(3).map((r) => (
              <div key={r.num} className="reason-row py-8 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-zinc-400">{r.num}</span>
                  <h4 className="text-lg font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {r.title}
                  </h4>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-7" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerfumeWhyBanegaSection;
