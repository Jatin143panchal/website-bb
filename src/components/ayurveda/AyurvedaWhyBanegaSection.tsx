import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AyurvedaWhyBanegaSectionProps {
  onStartJourney: () => void;
}

export const AyurvedaWhyBanegaSection: React.FC<AyurvedaWhyBanegaSectionProps> = ({ onStartJourney }) => {
  const pillars = [
    {
      num: '01',
      title: 'PRODUCT + BRAND TOGETHER',
      tagline: 'Formulation and positioning developed as one',
      desc: 'Classical texts, active herb extraction, and contemporary bottle design engineered in parallel.',
    },
    {
      num: '02',
      title: 'MODERN POSITIONING',
      tagline: 'Traditional herbs for modern lifestyles',
      desc: 'Replacing dated herbal tropes with clean typography, tactile luxury unboxing, and clear benefits.',
    },
    {
      num: '03',
      title: 'END-TO-END EXECUTION',
      tagline: 'From raw concept to certified launch',
      desc: 'AYUSH licensing, amber glass sourcing, stability testing, Shopify build, and Amazon/Nykaa listings.',
    },
    {
      num: '04',
      title: 'SCALABLE PRODUCTION',
      tagline: 'From hero pilot to full catalog',
      desc: 'Low MOQ pilot batches (250–500 units) to validate demand, scaling to thousands with formula continuity.',
    },
  ];

  return (
    <section id="why-banega-ayurveda" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
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
            WHY BUILD YOUR AYURVEDIC BRAND <br />
            <span className="font-light text-zinc-400 italic">WITH BANEGA?</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            We remove the complexity, risk, and vendor chaos from launching a modern, certified botanical brand.
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

        {/* The 8 Vendors vs 1 Connected Partner Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black text-white border border-zinc-800 text-center space-y-6">
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
              THE CRUCIAL FOUNDER INSIGHT
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOU DON'T NEED 8 DIFFERENT VENDORS. <br />
              <span className="font-light text-zinc-400 italic">YOU NEED ONE TEAM THAT CAN CONNECT THE JOURNEY.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              Skip managing separate chemists, bottle suppliers, box printers, trademark lawyers, AYUSH auditors, and Shopify coders.
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

export default AyurvedaWhyBanegaSection;
