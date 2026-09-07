import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AyurvedaBrandingSectionProps {
  onBuildBrand: () => void;
}

export const AyurvedaBrandingSection: React.FC<AyurvedaBrandingSectionProps> = ({ onBuildBrand }) => {
  const steps = [
    { step: '01', title: 'NAME', desc: 'Evocative Sanskrit, Latin, or modern botanical naming with trademark validation.' },
    { step: '02', title: 'POSITIONING', desc: 'Defining your target dosha, wellness ritual, price tier, and competitive whitespace.' },
    { step: '03', title: 'LOGO', desc: 'Timeless typography, botanical crests, and scalable vector icon marks.' },
    { step: '04', title: 'VISUAL IDENTITY', desc: 'Warm earth color palette, typographic system, and tactile paper styling.' },
    { step: '05', title: 'PACKAGING', desc: '3D renders, dielines, foil-block embossing, and regulatory text layouts.' },
    { step: '06', title: 'PRODUCT RANGE', desc: 'Hero SKU + complementary ritual cross-sell architecture.' },
    { step: '07', title: 'WEBSITE', desc: 'High-speed Shopify D2C store with dosha diagnostic quiz and subscription upsell.' },
    { step: '08', title: 'LAUNCH', desc: 'Amazon Brand Registry, Nykaa listing, and Meta ads creative execution.' },
  ];

  return (
    <section id="ayurveda-branding" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                10 — BRANDING &amp; POSITIONING
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              DON'T JUST SELL AYURVEDA. <br />
              <span className="font-light text-zinc-500 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                BUILD A BRAND AROUND IT.
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Commodity herbal sellers compete on low price. True Ayurvedic brands command 70%+ gross margins because they sell an emotional ritual, exquisite aesthetics, and uncompromising quality.
            </p>
          </div>

          <button
            type="button"
            onClick={onBuildBrand}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-sm active:scale-95 cursor-pointer"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>BUILD MY AYURVEDIC BRAND</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 8-Step Branding Linear Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200 hover:border-black hover:bg-white transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-zinc-400 group-hover:text-black transition-colors">
                    PHASE {st.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-black transition-colors" />
                </div>

                <h3
                  className="text-lg font-normal uppercase text-[#111111] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {st.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                <span>Integrated Deliverable</span>
                <CheckCircle2 size={12} className="text-zinc-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaBrandingSection;
