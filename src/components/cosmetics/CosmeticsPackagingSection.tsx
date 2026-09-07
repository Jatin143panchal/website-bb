import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CosmeticsPackagingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(rowsRef.current?.querySelectorAll('.pkg-row') ?? [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: rowsRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const categories = [
    { num: '01', cat: 'PRIMARY', title: 'Component', items: [{ spec: 'Lipstick', val: 'Round, square, magnetic, bullet, slim' }, { spec: 'Foundation', val: 'Glass pump, aluminum, airless pump' }, { spec: 'Compact', val: 'Metal pan, magnetic, mirrored lid' }, { spec: 'Mascara', val: 'Straight wand, fibre brush, curved' }, { spec: 'Lip Gloss', val: 'Doe-foot, cushion tip, paddle' }] },
    { num: '02', cat: 'DECORATION', title: 'Finish & Branding', items: [{ spec: 'Printing', val: 'Silk screen, hot stamp, foil transfer' }, { spec: 'Coating', val: 'Matte, gloss, rubberised, pearlised' }, { spec: 'Engraving', val: 'Laser etching, deboss, emboss' }, { spec: 'Material', val: 'ABS, Zamak, aluminium, glass' }, { spec: 'Colour', val: 'Pantone matched, gradient, duo-tone' }] },
    { num: '03', cat: 'SECONDARY', title: 'Outer Packaging', items: [{ spec: 'Carton', val: 'Tuck end, sleeve, rigid box, drawer' }, { spec: 'Finishing', val: 'UV spot, soft-touch lamination, foil' }, { spec: 'Insert', val: 'Satin tray, foam, tissue wrap' }, { spec: 'Label', val: 'BOPP, matte, kraft, holographic' }, { spec: 'Brand card', val: 'Shade story, QR, loyalty code' }] },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Packaging & Components</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>MAKEUP IS VISUAL.</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>MAKE IT YOUR BRAND.</h3>
        </div>

        <div ref={rowsRef} className="divide-y divide-zinc-200">
          {categories.map((c) => (
            <div key={c.num} className="pkg-row py-10">
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12">
                <div>
                  <div className="text-xs font-mono text-zinc-400">{c.num}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">{c.cat}</div>
                  <h4 className="text-2xl font-normal text-[#111111] mt-2 uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{c.title}</h4>
                </div>
                <div className="divide-y divide-zinc-100">
                  {c.items.map((item) => (
                    <div key={item.spec} className="flex items-center justify-between gap-4 py-3">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider w-28 shrink-0">{item.spec}</span>
                      <span className="text-sm text-zinc-700 text-right" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmeticsPackagingSection;
