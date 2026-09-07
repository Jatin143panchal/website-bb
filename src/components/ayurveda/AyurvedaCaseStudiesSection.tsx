import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

interface AyurvedaCaseStudiesSectionProps {
  onStartBrand: () => void;
}

export const AyurvedaCaseStudiesSection: React.FC<AyurvedaCaseStudiesSectionProps> = ({ onStartBrand }) => {
  const caseStudies = [
    {
      id: 'vedasutra',
      brand: 'VEDASUTRA BOTANICALS',
      category: 'Luxury Skincare & Hair Rituals',
      badge: '₹42L First 90 Days',
      product: 'Kumkumadi 26-Herb Glow Tailam + Bhringraj Kshirpak Hair Serum in heavy UV-amber flint droppers.',
      handledSummary: 'Vedic extraction R&D, pharmaceutical amber glass, AYUSH licensing, and Nykaa Onboarding.',
      finalMetric: '4.9/5 Average rating with 38% repeat customer rate in 60 days.',
      tag: 'Turnkey Skincare',
    },
    {
      id: 'auraveda',
      brand: 'AURAVEDA WELLNESS',
      category: 'Adaptogenic Wellness & Elixirs',
      badge: 'Amazon Top New Release',
      product: 'Standardized sublingual herbal drops, calming chamomile-tulsi sleep tinctures, and brass-cap roll-ons.',
      handledSummary: 'Organic KSM-66 standardization, accelerated stability testing, and Amazon Brand Registry.',
      finalMetric: 'Over 6,500 units sold in first quarter with zero ad policy rejections.',
      tag: 'Wellness Incubation',
    },
    {
      id: 'ayurglow',
      brand: 'AYURGLOW CLINICAL',
      category: 'Clean Derma-Ayurvedic Hybrid',
      badge: 'Sephora Clean Standard',
      product: 'Plant-derived Bakuchiol 2% alternative cream and soothing cica-neem barrier repair emulsion.',
      handledSummary: 'Clean hybrid compounding, dermatologist patch testing, and high-converting Meta funnels.',
      finalMetric: 'Featured in leading clean beauty media with 4.2x Meta ad ROAS.',
      tag: 'Hybrid Derma',
    },
  ];

  return (
    <section id="ayurveda-case-studies" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                15 — REAL FOUNDER LAUNCHES
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              BRANDS BUILT AROUND <br />
              <span className="text-zinc-400 italic">PRODUCT + PURPOSE.</span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              See how we turned raw founder concepts into category-defining Ayurvedic brands generating high repeat revenue and authentic consumer love.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartBrand}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-lg active:scale-95 cursor-pointer"
          >
            <span>START MY AYURVEDIC BRAND</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 hover:border-black shadow-xs hover:shadow-2xl transition-all duration-300 text-left flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {cs.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-600 flex items-center gap-1">
                    <TrendingUp size={13} />
                    <span>{cs.badge}</span>
                  </span>
                </div>

                <div>
                  <h3
                    className="text-2xl font-normal tracking-tight text-[#111111] uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {cs.brand}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">
                    {cs.category}
                  </div>
                </div>

                <p className="text-sm text-zinc-700 font-normal leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {cs.product}
                </p>

                <div className="text-xs text-zinc-500 font-normal leading-relaxed pt-2 border-t border-zinc-100" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">Handled End-to-End:</span>
                  {cs.handledSummary}
                </div>

                {/* Metric Highlight */}
                <div className="p-3.5 rounded-xl bg-black text-white text-xs font-medium space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <Star size={11} fill="#34D399" />
                    <span>VERIFIED LAUNCH RESULT</span>
                  </div>
                  <div className="text-zinc-300 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{cs.finalMetric}</div>
                </div>

              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onStartBrand}
                  className="w-full py-3.5 px-4 rounded-full bg-zinc-100 group-hover:bg-black text-zinc-900 group-hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  <span>Build Something Like This</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaCaseStudiesSection;
