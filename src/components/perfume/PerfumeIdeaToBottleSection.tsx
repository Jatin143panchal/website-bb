import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeIdeaToBottleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
      );

      const steps = stepsRef.current?.querySelectorAll('.process-step') ?? [];
      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 80%' },
          }
        );
      });

      // Animate the vertical progress line
      const line = sectionRef.current?.querySelector('.progress-line') as HTMLElement | null;
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 2,
            ease: 'none',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 80%', end: 'bottom 60%', scrub: 1 },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      phase: 'DISCOVERY',
      num: '01',
      title: 'Brief & Olfactory Profiling',
      desc: 'You describe your audience, mood, and references. We define the fragrance brief — top, heart, and base accord direction.',
      duration: 'Week 1',
    },
    {
      phase: 'FORMULATION',
      num: '02',
      title: 'Lab Sampling',
      desc: 'Our perfumers create 3–5 initial samples at the referenced IFRA concentration. You evaluate via mailed tester vials.',
      duration: 'Week 2–3',
    },
    {
      phase: 'REFINEMENT',
      num: '03',
      title: 'Accord Lock & Stability Test',
      desc: 'Preferred accord is refined, passed through IFRA stability & skin-safe testing. CDSCO documentation prepared.',
      duration: 'Week 3–4',
    },
    {
      phase: 'PACKAGING',
      num: '04',
      title: 'Bottle & Box Engineering',
      desc: 'Glass flacon, collar, pump, and rigid carton are sourced, custom finished, and sample-submitted for your approval.',
      duration: 'Week 5–7',
    },
    {
      phase: 'MANUFACTURING',
      num: '05',
      title: 'Fill, Crimp & QC',
      desc: 'Automated filling, crimp sealing, 3-batch QC inspection, tamper band application, and warehouse dispatch.',
      duration: 'Week 8–10',
    },
    {
      phase: 'LAUNCH',
      num: '06',
      title: 'Market Activation',
      desc: 'Go-live on Shopify, Amazon and Nykaa. Meta ad sets activated. Influencer seeding kits dispatched.',
      duration: 'Week 10–12',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">From Idea to Bottle</span>
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            THE JOURNEY,
          </h2>
          <h3
            className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
          >
            STEP BY STEP.
          </h3>
        </div>

        {/* Process — editorial vertical timeline */}
        <div ref={stepsRef} className="relative pl-12">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200">
            <div
              className="progress-line absolute inset-0 w-full bg-black origin-top"
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-0 divide-y divide-zinc-100">
            {steps.map((s) => (
              <div key={s.num} className="process-step relative py-8 pl-6">
                {/* Dot on timeline */}
                <div className="absolute left-[-2.15rem] top-9 w-2 h-2 rounded-full bg-black" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{s.phase}</span>
                      <span className="text-[10px] font-mono text-zinc-300">{s.num}</span>
                    </div>
                    <h4
                      className="text-lg sm:text-xl font-medium text-[#111111]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {s.title}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{s.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerfumeIdeaToBottleSection;
