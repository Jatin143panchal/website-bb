import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PerfumeReassuranceSectionProps {
  onOpenWizard: () => void;
}

export const PerfumeReassuranceSection: React.FC<PerfumeReassuranceSectionProps> = ({ onOpenWizard }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current?.querySelectorAll('.reassure-item') ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: innerRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const points = [
    { label: 'No experience required', desc: 'We guide first-time founders through every decision.' },
    { label: 'No creative lock-in', desc: 'Your IP, your formula, your contacts. Always.' },
    { label: 'No 10,000-unit minimums', desc: 'Start from 100 bottles and scale when ready.' },
    { label: 'No 6-month wait', desc: 'Parallel workflows compress launch to 45–90 days.' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 sm:px-12 lg:px-20 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div ref={innerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
          {points.map((p) => (
            <div key={p.label} className="reassure-item px-0 sm:px-8 first:pl-0 last:pr-0 py-6 sm:py-0 space-y-2">
              <h4 className="text-sm font-medium text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {p.label}
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-zinc-500 max-w-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Banega is India's only integrated perfume launch partner — fragrance lab, packaging studio, brand agency, and go-to-market team in one.
          </p>
          <button
            type="button"
            onClick={onOpenWizard}
            className="group inline-flex items-center gap-2 text-xs font-medium text-white hover:text-zinc-300 uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap"
          >
            Start My Launch
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PerfumeReassuranceSection;
