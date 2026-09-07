import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  Zap, 
  Sparkles, 
  Boxes, 
  Truck, 
  Clock, 
  ArrowRight,
  Cpu,
  Check
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MfgPhase {
  num: string;
  phase: string;
  title: string;
  subtitle: string;
  desc: string;
  equipment: string;
  tolerance: string;
  icon: React.ComponentType<{ className?: string }>;
  specs: string[];
}

export const PerfumeManufacturingSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(
        rowsRef.current?.querySelectorAll('.mfg-step-card') ?? [],
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: rowsRef.current, start: 'top 78%' } }
      );
      gsap.fromTo(
        sideRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sideRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const phases: MfgPhase[] = [
    {
      num: '01',
      phase: 'COMPOUNDING & FILLING',
      title: 'Automated Sterile Volumetric Filling',
      subtitle: 'Viscosity-calibrated gravity & servo-piston lines',
      desc: 'Compounded under inert nitrogen blanket in Class 100,000 cleanroom. Dual-head servo piston lines calibrated precisely to your fragrance oil density.',
      equipment: 'Class 100k Cleanroom · Dual-Head Servo Fillers',
      tolerance: '±0.1ml Precision · 0% Air Entrapment',
      icon: Gauge,
      specs: [
        'Batch accuracy calibrated to ±0.1ml per flacon',
        'Alcohol-denatured USP grade matrix filtration (0.2μm)',
        'Maceration monitoring with chilled maturation tanks'
      ],
    },
    {
      num: '02',
      phase: 'CRIMP SEALING',
      title: 'Hermetic FEA 15 Pneumatic Crimping',
      subtitle: 'Zero-evaporation seal with 100% vacuum verification',
      desc: 'FEA 15 pump collars securely crimped with calibrated pneumatic torque. Every bottle undergoes vacuum-pressure chamber inspection to guarantee zero leakage.',
      equipment: 'Pneumatic Crimper · Vacuum Leak Chamber',
      tolerance: '100% Post-Crimp Pressure Checked',
      icon: Zap,
      specs: [
        'Precise crimp diameter & height calibration',
        'Zero alcohol vapor evaporation over 36+ months',
        'Invisible dip tube alignment & tension check'
      ],
    },
    {
      num: '03',
      phase: 'ANALYTICAL QC',
      title: 'GC/MS Analysis & Batch Testing',
      subtitle: 'Rigorous chemical profiling & organoleptic stability',
      desc: 'Gas chromatography-mass spectrometry (GC/MS) tests fingerprint every batch. pH balance, spray plume symmetry, and CDSCO compliance records documented.',
      equipment: 'Agilent GC/MS Spectrometer · Spray Plume Analyzer',
      tolerance: 'IFRA 51st Amendment & CDSCO Compliant',
      icon: Activity,
      specs: [
        '3-Stage QC: Raw Material, Post-Maceration, Finished Product',
        'CDSCO Batch Manufacturing Record (BMR) maintained',
        'Sensory panel scent profile validation against master sample'
      ],
    },
    {
      num: '04',
      phase: 'PACKAGING ASSEMBLY',
      title: 'Rigid Presentation & Velvet Seating',
      subtitle: 'Dust-free assembly with tamper-evident seal',
      desc: 'Flacons gently seated into custom velvet EVA cavities. Inclusion of perfumer narrative card, ribbon pull setup, and tamper-evident heat-shrink barrier.',
      equipment: 'Dust-Free White Glove Assembly · Shrink Tunnel',
      tolerance: 'Zero Scuffing · Holographic Security Seal',
      icon: Boxes,
      specs: [
        'High-density CNC velvet flocking for scratch protection',
        'Brand story cards, batch stickers & QR code inserts',
        'Tamper-evident shrink film or tear-strip wrap'
      ],
    },
    {
      num: '05',
      phase: 'DISPATCH & LOGISTICS',
      title: 'Outer Master Carton & B2B Fulfilment',
      subtitle: 'Drop-tested corrugated boxing & 3PL direct handoff',
      desc: 'Palletized in 5-ply corrugated export-grade master cartons. Direct API-linked dispatch to Shiprocket, Delhivery, or Amazon FBA / Myntra B2B warehouses.',
      equipment: '5-Ply Master Cartons · Automated Barcode EDI',
      tolerance: 'Drop-Tested (ISTA-1A Certified Packaging)',
      icon: Truck,
      specs: [
        'E-commerce drop-tested protective shippers',
        'Automated barcode generation & CDSCO batch labeling',
        'Integrated logistics handoff across 24,000+ PIN codes'
      ],
    },
  ];

  const stats = [
    { val: '10,000+', label: 'Daily Automated Capacity', sub: 'Units per day' },
    { val: '±0.1ml', label: 'Volumetric Batch Accuracy', sub: 'Servo calibrated' },
    { val: '100%', label: 'Hermetic Leak Tested', sub: 'Zero evaporation' },
    { val: '3-Stage', label: 'Analytical QC & GC/MS', sub: 'Batch certified' },
  ];

  const certifications = [
    'ISO 22716 GMP Certified',
    'IFRA 51st Compliant',
    'CDSCO Licensed Lab',
    '100% Cruelty Free'
  ];

  const active = phases[activePhase];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-200/80 relative overflow-hidden">
      {/* Background Subtle Tech Grid Motif */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div ref={headRef} className="mb-14 sm:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-[0.28em] text-zinc-500">Sterile GMP Facility &amp; Compounding</span>
            <span className="px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
              ● Class 100,000 Cleanroom
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.04] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                FROM LIQUID
              </h2>
              <h3 className="text-[clamp(1.9rem,3.8vw,3.3rem)] font-light tracking-[0.03em] text-[#71717A] leading-[1.04] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
                TO SHELF-READY PRECISION.
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed font-light">
              Every drop is blended, macerated, and filled in an ISO 22716 GMP cleanroom with servo-precision dosing, 100% vacuum-tested crimp seals, and CDSCO batch trace.
            </p>
          </div>
        </div>

        {/* Pipeline Layout: Left Process Steps & Right High-Tech Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: 5-Stage Interactive Manufacturing Pipeline (7 cols) */}
          <div ref={rowsRef} className="lg:col-span-7 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center justify-between">
              <span>Production Pipeline Stages</span>
              <span className="text-emerald-700 font-semibold">Click stage to inspect QC details</span>
            </div>

            {phases.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePhase === idx;

              return (
                <div
                  key={p.num}
                  onClick={() => setActivePhase(idx)}
                  className={`mfg-step-card p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-zinc-950 text-white border-zinc-900 shadow-xl shadow-black/10 ring-1 ring-emerald-500/30'
                      : 'bg-[#FAFAFA] hover:bg-white hover:border-zinc-300 text-zinc-800 border-zinc-200/80 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number & Pulse Node */}
                    <div className="shrink-0 flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                          : 'bg-zinc-200 text-zinc-700'
                      }`}>
                        {p.num}
                      </div>
                      {idx < phases.length - 1 && (
                        <div className={`w-0.5 h-6 my-1 ${isSelected ? 'bg-emerald-500/40' : 'bg-zinc-200'}`} />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className={`text-[10px] font-mono uppercase tracking-widest font-semibold ${
                          isSelected ? 'text-emerald-400' : 'text-zinc-500'
                        }`}>
                          {p.phase}
                        </div>
                        <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                          isSelected 
                            ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                            : 'bg-white text-zinc-600 border-zinc-200'
                        }`}>
                          {p.tolerance}
                        </span>
                      </div>

                      <h4 className={`text-base sm:text-lg font-medium mt-1 leading-snug ${
                        isSelected ? 'text-white' : 'text-zinc-900'
                      }`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {p.title}
                      </h4>

                      <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed font-light ${
                        isSelected ? 'text-zinc-300' : 'text-zinc-600'
                      }`} style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        {p.desc}
                      </p>

                      {/* Expandable Specifications (Shown when selected) */}
                      {isSelected && (
                        <div className="mt-4 pt-3.5 border-t border-zinc-800 space-y-2">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" /> {p.equipment}
                          </div>
                          <div className="grid grid-cols-1 gap-1.5 pt-1">
                            {p.specs.map((s, sIdx) => (
                              <div key={sIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{s}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Facility Visual & Production Control Center (5 cols) */}
          <div ref={sideRef} className="lg:col-span-5 sticky top-28 space-y-5">
            
            {/* Real Automated GMP Facility Photography Card */}
            <div className="rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-xl shadow-zinc-100/80 group relative">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-900">
                <img
                  src="/assets/perfume/perfume_manufacturing_line.jpg"
                  alt="Automated Perfume Cleanroom Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Status Badges Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live GMP Production Line
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">Cleanroom Infrastructure</div>
                  <div className="text-sm font-medium">Automatic Dual-Head Piston Lines · Ahmedabad &amp; Baddi</div>
                </div>
              </div>

              {/* Active Phase Live Inspection Telemetry */}
              <div className="p-5 sm:p-6 bg-zinc-950 text-white space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-[11px] font-mono uppercase tracking-wider">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" /> Inspected Stage:
                  </span>
                  <span className="text-emerald-400 font-bold">Phase {active.num} · {active.phase}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-zinc-300 flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[11px]">Primary Tolerance:</span>
                    <span className="font-mono text-white text-xs font-semibold">{active.tolerance}</span>
                  </div>
                  <div className="text-xs text-zinc-300 flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[11px]">Cleanroom Standard:</span>
                    <span className="font-mono text-white text-xs">ISO 22716 Class 100k</span>
                  </div>
                  <div className="text-xs text-zinc-300 flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[11px]">Regulatory Compliance:</span>
                    <span className="font-mono text-emerald-400 text-xs">CDSCO Batch Logged</span>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Impact Stat Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="p-4 sm:p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 hover:border-zinc-300 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-zinc-950 tracking-tight">
                    {s.val}
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Regulatory & Lab Certifications Ribbon */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 space-y-2.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Quality &amp; Safety Compliance
              </div>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((c) => (
                  <div key={c} className="flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[11px] truncate">{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PerfumeManufacturingSection;
