import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AyurvedaCostVariablesSectionProps {
  onGetLaunchPlan: () => void;
}

export const AyurvedaCostVariablesSection: React.FC<AyurvedaCostVariablesSectionProps> = ({ onGetLaunchPlan }) => {
  const variables = [
    {
      num: '01',
      title: 'PRODUCT TYPE',
      desc: 'An anhydrous Kumkumadi facial oil has different compounding dynamics than a botanical clarifying shampoo.',
    },
    {
      num: '02',
      title: 'DECOCTION COMPLEXITY',
      desc: 'Single cold-pressed carrier oils vs 26-herb classical copper-pot decoction (Taila Paka Vidhi).',
    },
    {
      num: '03',
      title: 'BOTANICAL INGREDIENTS',
      desc: 'Farm-grade herbs vs Grade-A Kashmiri saffron, organic KSM-66 Ashwagandha, and pure Centella.',
    },
    {
      num: '04',
      title: 'PACKAGING SPEC',
      desc: 'Standard amber bottles vs heavy flint glass flacons, weighted metal caps, and debossed labels.',
    },
    {
      num: '05',
      title: 'BATCH VOLUME (MOQ)',
      desc: 'Starting pilot validation batches (250–500 units) vs commercial scale production runs (2,000+ units).',
    },
    {
      num: '06',
      title: 'NUMBER OF SKUS',
      desc: 'Launching a single flagship hero oil vs a coordinated 4-step ritual range (Cleanser + Oil + Serum + Cream).',
    },
    {
      num: '07',
      title: 'BRANDING & CREATIVE',
      desc: 'Existing artwork files vs complete Vedic brand identity, trademark clearance, and Shopify store.',
    },
    {
      num: '08',
      title: 'LAUNCH SCOPE',
      desc: 'Self-managed retail sales vs turnkey Amazon Brand Registry, Nykaa onboarding, and performance marketing.',
    },
  ];

  return (
    <section id="ayurveda-cost" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              14 — TRANSPARENT INVESTMENT VARIABLES
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHAT DOES IT TAKE TO LAUNCH <br />
            <span className="text-zinc-400 italic">AN AYURVEDIC BRAND?</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Instead of arbitrary package prices, we break down the 8 real variables that determine your formula cost, packaging tooling, and launch budget.
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
                className="text-base font-normal uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {v.title}
              </h3>

              <p className="text-xs text-zinc-600 leading-relaxed font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Callout Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black text-white border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              TAILORED COST MAPPING
            </span>
            <h3
              className="text-2xl sm:text-3xl font-normal text-white uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Every product is different. Tell us what you're building and we'll map the right launch route.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Get an itemized unit economics breakdown including formula compounding, packaging sourcing, and AYUSH licensing.
            </p>
          </div>

          <button
            type="button"
            onClick={onGetLaunchPlan}
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shrink-0 active:scale-95 cursor-pointer shadow-sm"
          >
            <span>GET MY LAUNCH PLAN</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaCostVariablesSection;
