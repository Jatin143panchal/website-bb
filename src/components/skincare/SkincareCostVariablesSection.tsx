import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SkincareCostVariablesSectionProps {
  onGetLaunchPlan: () => void;
}

export const SkincareCostVariablesSection: React.FC<SkincareCostVariablesSectionProps> = ({ onGetLaunchPlan }) => {
  const variables = [
    {
      num: '01',
      title: 'PRODUCT TYPE',
      desc: 'An anhydrous squalane facial oil differs in compounding from an in-vivo tested SPF 50+ sunscreen fluid.',
    },
    {
      num: '02',
      title: 'FORMULA COMPLEXITY',
      desc: 'Single active serums vs multi-phase active suspensions (e.g. Encapsulated Retinoids + 5 Ceramides).',
    },
    {
      num: '03',
      title: 'ACTIVE INGREDIENTS',
      desc: 'Standard base humectants vs pharmaceutical-grade patented actives (Matrixyl 3000, 3-O-Ethyl Ascorbic).',
    },
    {
      num: '04',
      title: 'PACKAGING SPEC',
      desc: 'Standard dropper bottles vs custom dual-chamber airless vacuum pumps and metallic accents.',
    },
    {
      num: '05',
      title: 'BATCH VOLUME (MOQ)',
      desc: 'Starting pilot batches (250–500 units) for rapid proof-of-concept vs commercial scale runs (2,000+ units).',
    },
    {
      num: '06',
      title: 'NUMBER OF SKUS',
      desc: 'Launching a single flagship hero serum vs a coordinated 4-step routine (Cleanser + Serum + Creme + SPF).',
    },
    {
      num: '07',
      title: 'BRANDING & ASSETS',
      desc: 'Existing packaging files vs complete brand identity, 3D bottle renders, and Shopify flagship build.',
    },
    {
      num: '08',
      title: 'LAUNCH SCOPE',
      desc: 'Self-managed retail sales vs turnkey Amazon Brand Registry, Nykaa onboarding, and performance marketing.',
    },
  ];

  return (
    <section id="skincare-cost" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              14 — TRANSPARENT INVESTMENT MAPPING
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHAT DOES IT TAKE TO <br />
            <span className="font-light text-zinc-400 italic">LAUNCH A SKINCARE BRAND?</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Your unit economics depend on the exact actives, packaging barriers, and batch volumes you choose. Here is the transparent breakdown.
          </p>
        </div>

        {/* 8 Variables - Clean Hairline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {variables.map((v, idx) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="pt-6 border-t border-zinc-200 space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-zinc-400 group-hover:text-black transition-colors">
                  VARIABLE {v.num}
                </span>
              </div>

              <h3
                className="text-base font-normal uppercase text-[#111111] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {v.title}
              </h3>

              <p
                className="text-xs text-zinc-600 leading-relaxed font-normal"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black text-white border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
              CUSTOM LAUNCH COSTING
            </span>
            <h3
              className="text-2xl sm:text-3xl font-normal text-white uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your launch depends on what you're building. Tell us your idea and we'll map the route.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Receive an itemized unit cost breakdown including formula compounding, airless packaging, and CDSCO clearance.
            </p>
          </div>

          <button
            type="button"
            onClick={onGetLaunchPlan}
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shrink-0 active:scale-95 cursor-pointer shadow-sm"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>GET MY LAUNCH PLAN</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SkincareCostVariablesSection;
