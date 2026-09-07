import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CosmeticsManufacturingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(rowsRef.current?.querySelectorAll('.mfg-row') ?? [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: rowsRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const phases = [
    { num: '01', phase: 'FORMULA', title: 'Approved Formula', desc: 'GMP-certified formula locked from sampling round. Batch sheet and SOP prepared.' },
    { num: '02', phase: 'RAW MATERIAL', title: 'Pigments & Base', desc: 'Raw material procurement, pigment QC and colour-match to approved master shade.' },
    { num: '03', phase: 'PRODUCTION', title: 'Manufacturing', desc: 'Mixing, milling, emulsification or compaction as per product type in temperature-controlled GMP facility.' },
    { num: '04', phase: 'FILLING', title: 'Fill & Load', desc: 'Product filled into primary component — tube, bullet, compact pan, mascara vial — at calibrated weight.' },
    { num: '05', phase: 'ASSEMBLY', title: 'Component Assembly', desc: 'Cap fitted, crimp applied, wand inserted. Component assembled and torque-checked.' },
    { num: '06', phase: 'QC', title: 'Quality Control', desc: '3-stage QC: in-process, pre-packing and random AQL sampling. Micro and stability tests per batch.' },
    { num: '07', phase: 'DISPATCH', title: 'Packing & Fulfilment', desc: 'Secondary carton packing, master carton, 3PL handoff. Shiprocket / Delhivery / B2B available.' },
  ];

  const stats = [
    { val: '108+', label: 'GMP Partners' },
    { val: '3-Stage', label: 'QC Inspection' },
    { val: '100 Units', label: 'Min. Batch' },
    { val: 'BIS + GMP', label: 'Certified' },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">Manufacturing</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>FROM FORMULA</h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>TO FINISHED PRODUCT.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16 lg:gap-24">
          <div ref={rowsRef} className="divide-y divide-zinc-100">
            {phases.map((p) => (
              <div key={p.num} className="mfg-row py-7 grid grid-cols-[80px_1fr] gap-4">
                <div>
                  <div className="text-xs font-mono text-zinc-400">{p.num}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">{p.phase}</div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#111111] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{p.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8 self-start pt-4">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-zinc-200 pt-5">
                <div className="text-3xl font-black font-mono text-black">{s.val}</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsManufacturingSection;
