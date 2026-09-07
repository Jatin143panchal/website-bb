import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Beaker, CheckCircle2, Sliders, Package, Factory, Rocket } from 'lucide-react';

interface SkincareProcessSectionProps {
  onStartSkincare: () => void;
}

export const SkincareProcessSection: React.FC<SkincareProcessSectionProps> = ({ onStartSkincare }) => {
  const steps = [
    {
      num: '01',
      title: 'PRODUCT CONCEPT',
      tagline: 'Define product, audience & positioning',
      desc: 'Identifying your target skin concern, hero active focus, texture benchmark, and retail pricing category.',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'FORMULATION',
      tagline: 'Develop custom laboratory formula',
      desc: 'Our cosmetic chemists compound stable laboratory pilot batches balancing active potency with luxurious skin feel.',
      icon: Beaker,
    },
    {
      num: '03',
      title: 'SAMPLING',
      tagline: 'Evaluate physical trial vials',
      desc: 'We send physical lab sample bottles to your doorstep for sensory testing, aroma review, and absorption evaluation.',
      icon: CheckCircle2,
    },
    {
      num: '04',
      title: 'REFINE',
      tagline: 'Adjust texture & performance',
      desc: 'Iterating viscosity, slip, dry-down time, and active concentration until you sign off on the gold-standard batch.',
      icon: Sliders,
    },
    {
      num: '05',
      title: 'PACKAGING',
      tagline: 'Bottle, jar, tube, pump, label & box',
      desc: 'Custom airless dispensers, heavy flint glass droppers, screen-printed artwork, and FSC unboxing cartons.',
      icon: Package,
    },
    {
      num: '06',
      title: 'MANUFACTURE',
      tagline: 'Move approved product into production',
      desc: 'Sterile compounding in GMP-certified facilities, microbial safety testing, in-vivo SPF certification, and batch COAs.',
      icon: Factory,
    },
    {
      num: '07',
      title: 'LAUNCH',
      tagline: 'Build brand & take to market',
      desc: 'Shopify flagship launch, Amazon Brand Registry onboarding, Nykaa activation, and performance ad creative funnels.',
      icon: Rocket,
    },
  ];

  return (
    <section id="skincare-process" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                07 — Formulation Methodology
              </span>
            </div>

            <div className="space-y-0 overflow-hidden">
              <h2
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                FROM IDEA TO FORMULA
              </h2>
              <h3
                className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
              >
                TO SHELF.
              </h3>
            </div>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              A clean, structured formulation journey that eliminates technical failure, formula instability, and launch delays.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartSkincare}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-md active:scale-95 cursor-pointer"
          >
            <span>Start My Skincare</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-8 sm:pl-12 text-left">
          
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-zinc-200" />

          <div className="space-y-0 divide-y divide-zinc-100">
            {steps.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="relative py-8 pl-6 sm:pl-8 group"
              >
                {/* Dot on timeline */}
                <div className="absolute left-[-1.55rem] sm:left-[-2.15rem] top-9 w-2 h-2 rounded-full bg-black" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Phase</span>
                      <span className="text-[10px] font-mono font-medium text-zinc-600">{s.num}</span>
                    </div>
                    <h4
                      className="text-xl sm:text-2xl font-normal text-[#111111] uppercase tracking-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {s.title}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-xl font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{s.tagline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkincareProcessSection;
