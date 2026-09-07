import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PerfumeFinalCtaSectionProps {
  onOpenWizard: () => void;
}

export const PerfumeFinalCtaSection: React.FC<PerfumeFinalCtaSectionProps> = ({ onOpenWizard }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] border-t border-zinc-100 overflow-hidden relative"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Text & CTA */}
        <div ref={contentRef} className="lg:col-span-7 space-y-8 text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              Start Your Launch
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h2
              className="text-[clamp(2.8rem,5.5vw,5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.0] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOUR PERFUME
            </h2>
            <h3
              className="text-[clamp(2.4rem,4.8vw,4.5rem)] font-light tracking-[0.02em] text-[#777777] leading-[1.0] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              BRAND STARTS HERE.
            </h3>
          </div>

          <p className="text-base text-zinc-600 max-w-lg leading-relaxed font-light">
            One conversation. One brief. We map your fragrance archetype, compounding coordinates, bottle molds, and launch budget — then build your private label fragrance brand from idea to shelf.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenWizard}
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-medium uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md"
            >
              <span>Start My Perfume Launch</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/918796755169?text=Hi!%20I%20want%20to%20launch%20my%20perfume%20brand%20with%20Banega."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-600 text-xs font-medium uppercase tracking-widest transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Metrics Row */}
          <div className="pt-8 border-t border-zinc-100 grid grid-cols-3 gap-6 max-w-md">
            {[
              { val: '45–90', label: 'Days to Market' },
              { val: '100', label: 'Min. Bottles' },
              { val: '100%', label: 'Turnkey GMP' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black font-mono text-black">{s.val}</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Real Luxury Flacon Image Card */}
        <div ref={imgRef} className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-full max-w-[380px] p-6 rounded-3xl bg-[#F9F9F9] border border-zinc-100 shadow-sm flex flex-col items-center">
            
            {/* Soft gold glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,155,38,0.12)_0%,transparent_70%)] rounded-3xl pointer-events-none" />

            <div className="w-full flex justify-between items-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest pb-4 border-b border-zinc-200/60">
              <span>Haute Parfumerie</span>
              <span>30% Extrait</span>
            </div>

            <img
              src="/assets/perfume/venotine_ruby_midnight.jpg"
              alt="Venotine Haute Parfumerie Flacon"
              className="w-full object-cover my-4 rounded-2xl"
              style={{
                maxHeight: '360px',
                filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.12))',
              }}
              draggable={false}
            />

            <div className="w-full pt-4 border-t border-zinc-200/60 flex justify-between items-baseline">
              <div>
                <div
                  className="text-sm font-medium text-black uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Banega Flacon Spec
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Custom Glass Tooling & Zamak</div>
              </div>
              <button
                type="button"
                onClick={onOpenWizard}
                className="text-[10px] font-mono uppercase tracking-wider text-black font-medium hover:underline cursor-pointer"
              >
                Configure →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerfumeFinalCtaSection;
