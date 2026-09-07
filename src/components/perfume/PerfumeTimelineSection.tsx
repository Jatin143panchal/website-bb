import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeTimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });

      // Animate the horizontal track line
      const track = trackRef.current?.querySelector('.track-line') as HTMLElement | null;
      if (track) {
        gsap.fromTo(track, { scaleX: 0 }, {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: trackRef.current, start: 'top 75%' },
        });
      }

      gsap.fromTo(
        trackRef.current?.querySelectorAll('.milestone') ?? [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: trackRef.current, start: 'top 70%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const milestones = [
    { week: 'Week 1', label: 'Brief &\nProfiling' },
    { week: 'Week 2–3', label: 'Lab\nSampling' },
    { week: 'Week 3–4', label: 'Accord\nLock' },
    { week: 'Week 5–7', label: 'Packaging\nDevelopment' },
    { week: 'Week 8–10', label: 'Fill,\nCrimp & QC' },
    { week: 'Week 10–12', label: 'Market\nActivation' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Launch Timeline</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              45–90 DAYS
            </h2>
            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
              TO SHELF.
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-sm" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            We run formulation, packaging, and brand in parallel — not sequentially. That's how we compress 6-month industry timelines to 45–90 days for standard launches.
          </p>
        </div>

        {/* Horizontal milestone track */}
        <div ref={trackRef} className="relative overflow-x-auto">
          <div className="min-w-[600px] relative py-8">

            {/* Track line */}
            <div className="absolute top-[52px] left-0 right-0 h-px bg-zinc-200">
              <div className="track-line absolute inset-0 h-full bg-black origin-left" style={{ transformOrigin: 'left' }} />
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-6 gap-2">
              {milestones.map((m, i) => (
                <div key={m.week} className="milestone flex flex-col items-center text-center">
                  {/* Dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-black border-2 border-white shadow relative z-10 mb-6" />
                  {/* Label */}
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1 whitespace-pre-line">{m.label}</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1">{m.week}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Note */}
        <p className="mt-8 text-xs text-zinc-400" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
          Timeline assumes standard glass from existing molds. Custom OEM bottle molds add 3–4 weeks. End-to-end brand launches are 90 days.
        </p>

      </div>
    </section>
  );
};

export default PerfumeTimelineSection;
