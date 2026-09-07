import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Compass, Beaker, CheckCircle2, Package, Factory, Rocket } from 'lucide-react';

interface AyurvedaProcessSectionProps {
  onStartProduct: () => void;
}

export const AyurvedaProcessSection: React.FC<AyurvedaProcessSectionProps> = ({ onStartProduct }) => {
  const steps = [
    {
      num: '01',
      title: 'CONCEPT',
      tagline: 'Define the product, audience & purpose',
      desc: 'We map out your target customer, dosage format, desired sensory feel, and brand positioning whitespace before writing a single formula.',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'INGREDIENT DIRECTION',
      tagline: 'Identify botanical & Ayurvedic actives',
      desc: 'Selecting clean, ethically harvested botanical extracts, organic essential oils, carrier lipids, and time-tested Ayurvedic herbs with verified COAs.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'FORMULATION',
      tagline: 'Develop concept into workable formula',
      desc: 'Our Ayurvedic Vaidyas and cosmetic chemists compound stable laboratory pilot batches balancing classical recipes with modern skin bio-compatibility.',
      icon: Beaker,
    },
    {
      num: '04',
      title: 'TEST & REFINE',
      tagline: 'Evaluate samples & refine viscosity',
      desc: 'We send you physical sample lab vials for aroma, skin-feel, spreadability, and absorption feedback until your signature benchmark is approved.',
      icon: CheckCircle2,
    },
    {
      num: '05',
      title: 'PACKAGING',
      tagline: 'Create the physical product experience',
      desc: 'Source UV-blocking amber apothecary flacons, luxury dropper pipettes, FSC unbleached cartons, and foil-embossed labels that command premium shelf appeal.',
      icon: Package,
    },
    {
      num: '06',
      title: 'MANUFACTURE',
      tagline: 'Move approved product into GMP production',
      desc: 'Compounding in audited AYUSH-certified facilities with heavy metal screening, microbial safety clearance, and batch quality documentation.',
      icon: Factory,
    },
    {
      num: '07',
      title: 'BRAND & LAUNCH',
      tagline: 'Build the brand & take it to market',
      desc: 'High-converting Shopify flagship creation, product photography renders, Amazon Brand Registry, and launch day campaign execution.',
      icon: Rocket,
    },
  ];

  return (
    <section id="ayurveda-process" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                06 — 7-STEP LAUNCH PROCESS
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              FROM INGREDIENT <br />
              <span className="font-light text-zinc-500 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                TO FINISHED PRODUCT.
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              A systematic 7-phase methodology that eliminates technical risk, vendor fragmentation, and launch delays.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProduct}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-sm active:scale-95 cursor-pointer"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>START MY PRODUCT</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 7-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <motion.div
              key={st.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between group ${
                idx === 6
                  ? 'md:col-span-2 lg:col-span-1 bg-black text-white border-zinc-800'
                  : 'bg-[#FAFAFA] border-zinc-200 hover:border-black hover:bg-white'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-2xl font-mono ${
                      idx === 6 ? 'text-white' : 'text-zinc-300 group-hover:text-black'
                    }`}
                  >
                    {st.num}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      idx === 6 ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-200 text-zinc-800'
                    }`}
                  >
                    <st.icon size={18} />
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-lg font-normal uppercase tracking-tight ${idx === 6 ? 'text-white' : 'text-[#111111]'}`}
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {st.title}
                  </h3>
                  <div
                    className={`text-xs font-mono uppercase tracking-wider mt-1 ${
                      idx === 6 ? 'text-zinc-400' : 'text-zinc-500'
                    }`}
                  >
                    {st.tagline}
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mt-2.5 font-normal ${
                      idx === 6 ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {st.desc}
                  </p>
                </div>
              </div>

              <div
                className={`pt-5 mt-5 border-t flex items-center justify-between text-[11px] font-mono uppercase tracking-wider ${
                  idx === 6 ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-400'
                }`}
              >
                <span>Phase {st.num} of 07</span>
                <span className={idx === 6 ? 'text-white' : 'group-hover:text-black'}>Verified Step</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaProcessSection;
