import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CosmeticsProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      stepsRef.current?.querySelectorAll('.process-step').forEach((step) => {
        gsap.fromTo(step, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: step, start: 'top 82%' } });
      });
      const line = sectionRef.current?.querySelector('.progress-line') as HTMLElement | null;
      if (line) gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 2, ease: 'none', scrollTrigger: { trigger: stepsRef.current, start: 'top 80%', end: 'bottom 60%', scrub: 1 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { num: '01', phase: 'CONCEPT', title: 'Product Concept', desc: 'Define what you are creating — product type, audience, positioning, finish and market tier.', duration: 'Week 1' },
    { num: '02', phase: 'FORMULATION', title: 'Formulation Development', desc: 'Develop the product base, texture, application behaviour, and performance profile at the GMP lab.', duration: 'Week 2–3' },
    { num: '03', phase: 'SHADES', title: 'Shade Development', desc: 'Pigment blending and shade testing: develop, test and refine the desired shade range for your brand.', duration: 'Week 3–5' },
    { num: '04', phase: 'PACKAGING', title: 'Packaging & Components', desc: 'Component selection — tubes, compacts, wands, caps — with brand-applied decoration and finish.', duration: 'Week 5–7' },
    { num: '05', phase: 'MANUFACTURING', title: 'Fill, Assembly & QC', desc: 'Approved formula filled, assembled, QC-inspected in 3 stages and batch-certified.', duration: 'Week 8–10' },
    { num: '06', phase: 'LAUNCH', title: 'Brand & Market Activation', desc: 'Shopify D2C, Amazon, Nykaa, Myntra activation. Meta ad sets and influencer seeding launched.', duration: 'Week 10–12' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">From Pigment to Product</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>THE JOURNEY,</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>STEP BY STEP.</h3>
        </div>

        <div ref={stepsRef} className="relative pl-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200">
            <div className="progress-line absolute inset-0 w-full bg-black origin-top" style={{ transformOrigin: 'top' }} />
          </div>
          <div className="space-y-0 divide-y divide-zinc-100">
            {steps.map((s) => (
              <div key={s.num} className="process-step relative py-8 pl-6">
                <div className="absolute left-[-2.15rem] top-9 w-2 h-2 rounded-full bg-black" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{s.phase}</span>
                      <span className="text-[10px] font-mono text-zinc-300">{s.num}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.title}</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{s.desc}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider shrink-0">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsProcessSection;
