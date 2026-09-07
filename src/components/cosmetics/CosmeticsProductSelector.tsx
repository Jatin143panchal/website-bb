import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CosmeticsProductSelectorProps {
  onSelectProduct: (product: string) => void;
}

export const CosmeticsProductSelector: React.FC<CosmeticsProductSelectorProps> = ({ onSelectProduct }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(listRef.current?.querySelectorAll('.product-row') ?? [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: listRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const products = [
    { id: 'lipstick', num: '01', title: 'LIPSTICK', sub: 'Matte, Satin, Glossy, Cream, Metallic' },
    { id: 'lip_gloss', num: '02', title: 'LIP GLOSS', sub: 'High shine, tinted, plumping, moisturising' },
    { id: 'foundation', num: '03', title: 'FOUNDATION', sub: 'Liquid, stick, powder, serum foundation' },
    { id: 'concealer', num: '04', title: 'CONCEALER', sub: 'Full coverage, buildable, colour-correcting' },
    { id: 'blush', num: '05', title: 'BLUSH', sub: 'Powder, cream, liquid — matte to shimmer' },
    { id: 'compact', num: '06', title: 'COMPACT / POWDER', sub: 'Setting, finishing, pressed or loose' },
    { id: 'mascara', num: '07', title: 'MASCARA', sub: 'Volumising, lengthening, waterproof, tubing' },
    { id: 'eyeshadow', num: '08', title: 'EYESHADOW', sub: 'Singles, quads, palettes — pressed or loose' },
    { id: 'complete_range', num: '09', title: 'COMPLETE MAKEUP RANGE', sub: 'Multi-product launch — lips + face + eyes' },
    { id: 'not_sure', num: '—', title: 'NOT SURE YET', sub: "Tell us your audience and we'll recommend the right product" },
  ];

  return (
    <section ref={sectionRef} id="cosmetics-products" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">What Are You Building</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>CHOOSE YOUR</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>PRODUCT.</h3>
        </div>

        <div ref={listRef} className="divide-y divide-zinc-100">
          {products.map((p) => (
            <div key={p.id} className="product-row group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 cursor-pointer hover:pl-2 transition-all duration-300" onClick={() => onSelectProduct(p.id)}>
              <span className="text-xs font-mono text-zinc-400 shrink-0 w-8">{p.num}</span>
              <div className="flex-1 space-y-0.5">
                <h4 className="text-2xl sm:text-3xl font-normal text-[#111111] uppercase group-hover:tracking-wide transition-all duration-500" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{p.title}</h4>
                <p className="text-sm text-zinc-500" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{p.sub}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover:text-black transition-colors uppercase tracking-widest whitespace-nowrap">
                <span>Build This</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmeticsProductSelector;
