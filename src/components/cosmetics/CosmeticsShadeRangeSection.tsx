import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CosmeticsShadeRangeSectionProps {
  onOpenWizard: () => void;
}

export const CosmeticsShadeRangeSection: React.FC<CosmeticsShadeRangeSectionProps> = ({ onOpenWizard }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const swatchRef = useRef<HTMLDivElement>(null);
  const [activeRange, setActiveRange] = useState<string>('core');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(swatchRef.current?.querySelectorAll('.swatch') ?? [], { y: 30, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out', scrollTrigger: { trigger: swatchRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const shades = [
    '#F5E6D3', '#F0D5BA', '#E8C4A0', '#DEB080', '#D09C6A', '#C28A55',
    '#B37840', '#9E6535', '#8A5228', '#7A4020', '#6B3018', '#5C2210',
  ];

  const ranges = [
    { id: 'hero', label: 'HERO SHADE', desc: 'One signature product. Maximum focus, maximum storytelling.', shades: '1–3' },
    { id: 'core', label: 'CORE RANGE', desc: 'A focused selection that serves key skin tones and occasions.', shades: '4–8' },
    { id: 'complete', label: 'COMPLETE RANGE', desc: 'A wider shade collection that covers the full audience.', shades: '12+' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-14 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Shade Range</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>HOW MANY SHADES</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>WILL YOUR BRAND OWN?</h3>
        </div>

        {/* Animated shade swatch strip */}
        <div ref={swatchRef} className="flex gap-3 mb-12 flex-wrap">
          {shades.map((color, i) => (
            <div key={i} className="swatch flex flex-col items-center gap-1.5">
              <div className="w-10 h-16 sm:w-12 sm:h-20 rounded-lg shadow-sm" style={{ backgroundColor: color }} />
              <span className="text-[9px] font-mono text-zinc-400">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>

        {/* Range selector — no boxes, horizontal rule dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:divide-x divide-zinc-200 mb-10">
          {ranges.map((r) => (
            <div
              key={r.id}
              onClick={() => setActiveRange(r.id)}
              className={`sm:px-8 first:pl-0 last:pr-0 py-6 sm:py-0 border-t sm:border-t-0 border-zinc-100 cursor-pointer transition-all space-y-2 group ${activeRange === r.id ? '' : 'opacity-50 hover:opacity-80'}`}
            >
              <div className="flex items-baseline gap-3">
                <h4 className="text-sm font-medium text-black uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{r.label}</h4>
                <span className={`text-xs font-mono transition-colors ${activeRange === r.id ? 'text-black' : 'text-zinc-400'}`}>{r.shades} shades</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{r.desc}</p>
              <div className={`h-px transition-all duration-300 ${activeRange === r.id ? 'bg-black w-full' : 'bg-zinc-200 w-8 group-hover:w-16'}`} />
            </div>
          ))}
        </div>

        <button type="button" onClick={onOpenWizard} className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black uppercase tracking-widest transition-colors cursor-pointer">
          Build My Shade Range <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CosmeticsShadeRangeSection;
