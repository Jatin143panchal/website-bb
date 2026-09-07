import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

interface SkincareCaseStudiesSectionProps {
  onStartSkincare: () => void;
}

interface CaseStudy {
  id: string;
  categoryFilter: 'serums' | 'creams' | 'cleansers' | 'ranges';
  brand: string;
  category: string;
  badge: string;
  product: string;
  handledSummary: string;
  result: string;
  tag: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'derma-active',
    categoryFilter: 'serums',
    brand: 'BIOGRAPHEY CLINICAL',
    category: 'Active Serum Line',
    badge: '₹38L First 60 Days',
    product: '10% Niacinamide + 2% Zinc Serum & 15% Vitamin C Glow Concentrates in calibrated amber droppers.',
    handledSummary: 'Formulation stability R&D, amber glass sourcing, clinical patch testing, and Shopify flagship build.',
    result: '4.8/5 Average rating with 32% repeat customer rate within 45 days.',
    tag: 'Serum Hero',
  },
  {
    id: 'cica-barrier',
    categoryFilter: 'creams',
    brand: 'CERACICA LABS',
    category: 'Skin Barrier Recovery',
    badge: 'Nykaa Best Newcomer',
    product: '5-Ceramide Barrier Repair Creme + Cica Soothing Emulsion in airless vacuum jars.',
    handledSummary: 'Multi-ceramide bio-lipid compounding, dual-wall airless jars, and dermatologist sensitive-skin trials.',
    result: 'Over 8,200 units sold in first 90 days with 4.1x Meta ROAS.',
    tag: 'Barrier Cream',
  },
  {
    id: 'pore-clear',
    categoryFilter: 'cleansers',
    brand: 'PORECLEAR BOTANICALS',
    category: 'Gentle Clarifying Line',
    badge: 'Amazon Top 3',
    product: '2% Encapsulated Salicylic Acid Foaming Cleanser + Clarifying BHA Toner.',
    handledSummary: 'Slow-release BHA formulation, micro-foaming pump bottles, and automated sterile GMP filling.',
    result: 'Ranked Top 3 on Amazon in Blemish Cleansers in first month.',
    tag: 'Cleansing Hero',
  },
  {
    id: 'full-routine',
    categoryFilter: 'ranges',
    brand: 'VENOTINE DERMA',
    category: 'Complete 4-Step Routine',
    badge: '₹1.1Cr Run-Rate',
    product: 'Full 4-Step Routine: Gentle Cleanser + Glow Serum + Barrier Creme + Invisible SPF 50+ Sunscreen.',
    handledSummary: 'Layer-compatible multi-SKU chemistry, coordinated matte packaging, and Amazon/Nykaa onboarding.',
    result: 'High bundle AOV (₹2,250) with exceptional customer repeat retention.',
    tag: 'Full 4-Step Routine',
  },
];

export const SkincareCaseStudiesSection: React.FC<SkincareCaseStudiesSectionProps> = ({ onStartSkincare }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredStudies =
    activeFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.categoryFilter === activeFilter);

  const filters = [
    { key: 'all', label: 'ALL LAUNCHES' },
    { key: 'serums', label: 'SERUMS' },
    { key: 'creams', label: 'CREAMS' },
    { key: 'cleansers', label: 'CLEANSERS' },
    { key: 'ranges', label: 'COMPLETE RANGES' },
  ];

  return (
    <section id="skincare-case-studies" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
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
              SKINCARE BRANDS <br />
              <span className="font-light text-zinc-400 italic">WE'VE HELPED BUILD.</span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              See how we turned founder concepts into high-retention, clinically tested skincare brands across India.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isSelected = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200'
                  }`}
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((cs, idx) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {cs.tag}
                    </span>
                    <span className="text-xs font-mono font-medium text-zinc-800 flex items-center gap-1.5">
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
                    <div className="text-xs font-mono text-zinc-400 mt-0.5 uppercase tracking-wider">
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

                  {/* Clean Result Highlight */}
                  <div className="p-3.5 rounded-xl bg-black text-white text-xs font-normal space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Star size={11} fill="#ffffff" className="text-white" />
                      <span>LAUNCH PERFORMANCE</span>
                    </div>
                    <div className="text-zinc-200 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{cs.result}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onStartSkincare}
                    className="w-full py-3.5 px-4 rounded-full bg-zinc-100 group-hover:bg-black text-zinc-800 group-hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    <span>Build Something Like This</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SkincareCaseStudiesSection;
