import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Feather, CheckCircle2, Shield, Eye, Globe } from 'lucide-react';

interface SkincareBrandingSectionProps {
  onBuildBrand: () => void;
}

export const SkincareBrandingSection: React.FC<SkincareBrandingSectionProps> = ({ onBuildBrand }) => {
  const steps = [
    { step: '01', title: 'NAME', desc: 'Clinical, minimalist or lifestyle skincare naming with trademark registry verification.' },
    { step: '02', title: 'POSITIONING', desc: 'Defining your target skin type, active concentration narrative, and price point.' },
    { step: '03', title: 'LOGO', desc: 'Clean typographic wordmarks, clinical seals, and minimal aesthetic iconography.' },
    { step: '04', title: 'VISUAL IDENTITY', desc: 'Modern dermatological palette, typography hierarchy, and active percentage styling.' },
    { step: '05', title: 'PACKAGING', desc: '3D bottle renders, dielines, regulatory claims, and box carton artwork.' },
    { step: '06', title: 'PRODUCT RANGE', desc: 'Hero active + step-by-step cross-sell routine architecture.' },
    { step: '07', title: 'WEBSITE', desc: 'High-speed Shopify D2C store with AI skin diagnostics quiz and subscription logic.' },
    { step: '08', title: 'SOCIAL LAUNCH', desc: 'Amazon Brand Registry, Nykaa onboarding, and performance UGC video funnels.' },
  ];

  return (
    <section id="skincare-branding" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                10 — Brand Architecture
              </span>
            </div>

            <div className="space-y-0 overflow-hidden">
              <h2
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                DON'T JUST CREATE A PRODUCT.
              </h2>
              <h3
                className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
              >
                CREATE A SKINCARE BRAND.
              </h3>
            </div>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Formula alone doesn't scale. Brands that win combine active scientific credibility with sleek modern aesthetics and obsessive retention funnels.
            </p>
          </div>

          <button
            type="button"
            onClick={onBuildBrand}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-md active:scale-95 cursor-pointer"
          >
            <span>Build My Skincare Brand</span>
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
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200 hover:border-black hover:bg-white shadow-2xs hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-zinc-500">
                    PHASE {st.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-black transition-colors" />
                </div>

                <h3
                  className="text-xl font-normal tracking-tight text-[#111111] uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {st.title}
                </h3>

                <p
                  className="text-xs text-zinc-600 leading-relaxed font-normal"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>Integrated Gate</span>
                <CheckCircle2 size={12} className="text-black" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkincareBrandingSection;
