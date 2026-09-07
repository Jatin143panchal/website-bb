import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SkincareWhyBanegaSectionProps {
  onStartJourney: () => void;
}

export const SkincareWhyBanegaSection: React.FC<SkincareWhyBanegaSectionProps> = ({ onStartJourney }) => {
  const pillars = [
    {
      num: '01',
      title: 'PRODUCT + BRAND TOGETHER',
      tagline: 'Formulation and positioning developed as one',
      desc: 'Active chemistry, claims, skin feel, and packaging dielines are engineered in parallel from Day 1.',
    },
    {
      num: '02',
      title: 'FORMULATION STABILITY',
      tagline: 'Turn raw active ideas into stable shelf formulas',
      desc: 'In-house cosmetic chemists solve Vitamin C oxidation and Retinol degradation before full compounding.',
    },
    {
      num: '03',
      title: 'PACKAGING COMPATIBILITY',
      tagline: 'Physical dispensers matched to active pH',
      desc: 'Airless vacuum pumps, UV amber glass, and EVOH barriers chosen specifically for zero active degradation.',
    },
    {
      num: '04',
      title: 'END-TO-END TURNKEY',
      tagline: 'Concept → R&D → manufacturing → launch',
      desc: 'One unified team managing pilot sampling, CDSCO clearance, Shopify flagship, and Amazon/Nykaa listings.',
    },
  ];

  return (
    <section id="why-banega-skincare" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              16 — CATEGORY ADVANTAGE
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHY BUILD YOUR SKINCARE BRAND <br />
            <span className="font-light text-zinc-400 italic">WITH BANEGA?</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            We eliminate the technical risks of active instability, packaging leaks, and vendor handoff chaos.
          </p>
        </div>

        {/* 4 Pillars - Clean Open Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {pillars.map((pil, idx) => (
            <motion.div
              key={pil.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="pt-8 border-t border-zinc-200 space-y-3 group"
            >
              <div className="text-3xl font-normal font-mono text-zinc-300 group-hover:text-black transition-colors">
                {pil.num}
              </div>

              <h3
                className="text-lg font-normal uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {pil.title}
              </h3>

              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {pil.tagline}
              </div>

              <p
                className="text-xs text-zinc-600 leading-relaxed font-normal"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                {pil.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The 8 Vendors vs 1 Connected Partner Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black text-white border border-zinc-800 text-center space-y-6">
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
              THE KEY FOUNDER ADVANTAGE
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              DON'T MANAGE 8 DIFFERENT VENDORS. <br />
              <span className="font-light text-zinc-400 italic">BUILD WITH ONE CONNECTED LAUNCH PARTNER.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Skip juggling chemists, bottle suppliers, box printers, trademark agents, and developers.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartJourney}
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2 active:scale-95 cursor-pointer shadow-sm"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>Start With One Partner</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SkincareWhyBanegaSection;
