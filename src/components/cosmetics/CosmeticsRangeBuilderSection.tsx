import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CosmeticsRangeBuilderSectionProps {
  onOpenWizard: () => void;
}

export const CosmeticsRangeBuilderSection: React.FC<CosmeticsRangeBuilderSectionProps> = ({ onOpenWizard }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set(['lipstick']));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  const products = [
    { id: 'lipstick', label: 'Lipstick', skus: 3 },
    { id: 'lip_gloss', label: 'Lip Gloss', skus: 2 },
    { id: 'foundation', label: 'Foundation', skus: 4 },
    { id: 'concealer', label: 'Concealer', skus: 3 },
    { id: 'blush', label: 'Blush', skus: 2 },
    { id: 'compact', label: 'Compact / Powder', skus: 2 },
    { id: 'mascara', label: 'Mascara', skus: 2 },
    { id: 'eyeshadow', label: 'Eyeshadow', skus: 4 },
  ];

  const totalProducts = selected.size;
  const totalSKUs = products.filter((p) => selected.has(p.id)).reduce((sum, p) => sum + p.skus, 0);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Range Builder</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>BUILD YOUR</h2>
            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>BEAUTY RANGE.</h3>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-md" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Select the products you want to launch. We'll configure formulation, shade development, packaging and unit economics for your entire range.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          {/* Product checklist */}
          <div className="divide-y divide-zinc-100">
            {products.map((p) => {
              const isOn = selected.has(p.id);
              return (
                <div key={p.id} onClick={() => toggle(p.id)} className="group flex items-center justify-between py-5 cursor-pointer hover:pl-2 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${isOn ? 'bg-black border-black' : 'border-zinc-300 group-hover:border-zinc-500'}`}>
                      {isOn && <Check size={11} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-base font-medium transition-colors ${isOn ? 'text-black' : 'text-zinc-500 group-hover:text-black'}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{p.label}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{p.skus} SKUs avg</span>
                </div>
              );
            })}
          </div>

          {/* Live summary */}
          <div className="self-start space-y-8 pt-2">
            <div className="space-y-6">
              <div className="border-t border-zinc-200 pt-5">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Your Collection</div>
                <div className="text-5xl font-black font-mono text-black">{totalProducts}</div>
                <div className="text-sm text-zinc-500 mt-1">Products selected</div>
              </div>
              <div className="border-t border-zinc-200 pt-5">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Est. SKUs</div>
                <div className="text-5xl font-black font-mono text-black">{totalSKUs}</div>
                <div className="text-sm text-zinc-500 mt-1">Potential SKUs</div>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenWizard}
              disabled={totalProducts === 0}
              className="w-full py-3.5 px-6 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-medium uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-30"
            >
              Build My Collection <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsRangeBuilderSection;
