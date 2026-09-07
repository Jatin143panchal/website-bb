import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Info } from 'lucide-react';

interface ActiveIngredient {
  id: string;
  name: string;
  chemicalName: string;
  category: string;
  badge: string;
  summary: string;
  formats: string[];
  texture: string;
  positioning: string;
  formulationConsiderations: string;
}

const ACTIVE_INGREDIENTS: ActiveIngredient[] = [
  {
    id: 'niacinamide',
    name: 'NIACINAMIDE',
    chemicalName: 'Vitamin B3 (5% – 10%)',
    category: 'Pore & Sebum Refining',
    badge: 'High Repeat Star',
    summary: 'A versatile water-soluble vitamin that helps refine the appearance of pores, balance skin oiliness, and improve overall skin texture.',
    formats: ['Water-based serums', 'Clarifying daily gel moisturizers', 'Balancing toners'],
    texture: 'Fast-absorbing, non-tacky water fluid with silky dry-down.',
    positioning: '“Everyday 10% Blemish Clarifying Serum” for oily, combination and congested skin.',
    formulationConsiderations: 'Optimal formulation pH range of 5.5–6.5. Avoid combining in same formula with acidic low-pH ascorbic acid to prevent nicotinic acid flushing.',
  },
  {
    id: 'hyaluronic-acid',
    name: 'HYALURONIC ACID COMPLEX',
    chemicalName: 'Multi-Molecular Sodium Hyaluronate (2%)',
    category: 'Deep Epidermal Hydration',
    badge: 'Universal Essential',
    summary: 'A multi-weight humectant blend (High, Medium, Low & Oligo-HA) holding up to 1,000x its weight in water for plump-looking hydration.',
    formats: ['Plumping face serums', 'Water-break gel creams', 'Overnight jelly masks'],
    texture: 'Cushiony, weightless hydrogel with instant quenching feel.',
    positioning: '“Multi-Depth Plumping Moisture Drops” suitable for all skin types and post-cleanse routines.',
    formulationConsiderations: 'Cross-linked sodium hyaluronate combined with Polyglutamic Acid (PGA) provides longer lasting surface moisture retention without pilling.',
  },
  {
    id: 'vitamin-c',
    name: 'VITAMIN C',
    chemicalName: '3-O-Ethyl Ascorbic Acid / Ascorbyl Glucoside (10%–15%)',
    category: 'Radiance & Antioxidant',
    badge: 'Glow Standard',
    summary: 'A modern, highly stable Vitamin C derivative that brightens the appearance of dull skin and protects against environmental oxidative stress.',
    formats: ['Morning antioxidant serums', 'Radiance day lotions', 'Illuminating eye creams'],
    texture: 'Lightweight fluid emulsion with zero sticky residue.',
    positioning: '“15% Active Brightening Glow Concentrate” for daily AM environmental protection.',
    formulationConsiderations: 'Utilizing 3-O-Ethyl Ascorbic Acid eliminates the rapid yellow oxidation and metallic smell typical of unstable L-ascorbic acid.',
  },
  {
    id: 'ceramides',
    name: 'CERAMIDE COMPLEX (5-NP/AP/EOP)',
    chemicalName: 'Bio-Identical Sphingolipids + Cholesterol',
    category: 'Skin Barrier Repair',
    badge: 'Barrier Hero',
    summary: 'Essential lipid building blocks that reinforce the skin moisture barrier and prevent trans-epidermal water loss (TEWL).',
    formats: ['Rich barrier repair creams', 'Comforting milky essences', 'Recovery balms'],
    texture: 'Velvety, rich nourishing cream with a protective soft-touch cushion.',
    positioning: '“Intensive Barrier Restorative Creme” for sensitized, dry or over-exfoliated skin routines.',
    formulationConsiderations: 'Formulated in optimal 3:1:1 physiological ratio with fatty acids and cholesterol for maximum barrier mimicking synergy.',
  },
  {
    id: 'peptides',
    name: 'MULTI-PEPTIDE COMPLEX',
    chemicalName: 'Matrixyl 3000 + Copper Tripeptide-1 + Argireline',
    category: 'Firming & Texture Smoothness',
    badge: 'Advanced Derma',
    summary: 'Signal peptides that support cellular communication, promoting the appearance of firmer, smoother, and revitalized skin.',
    formats: ['Anti-ageing treatment serums', 'Firming neck creams', 'Under-eye peptide elixirs'],
    texture: 'Silky, fluid lotion with zero drag and fast dermal affinity.',
    positioning: '“Firming Multi-Peptide Youth Concentrate” positioned in premium ₹999–₹1,999 price tiers.',
    formulationConsiderations: 'Peptide chains are heat-sensitive and must be introduced below 40°C during the cool-down phase of compounding.',
  },
  {
    id: 'retinoids',
    name: 'GRANACTIVE RETINOID / BAKUCHIOL',
    chemicalName: 'Hydroxypinacolone Retinoate (2%) & 1% Bakuchiol',
    category: 'Cellular Renewal & Anti-Ageing',
    badge: 'Zero Irritation Retinol',
    summary: 'Next-generation direct-acting retinoid ester combined with Ayurvedic Babchi seed extract for smooth, renewed-looking skin without flaking.',
    formats: ['Night renewal face serums', 'Retinol eye balms', 'Resurfacing night cremes'],
    texture: 'Luxurious silky oil-in-water or squalane fluid.',
    positioning: '“Gentle Night Renewal Serum” safe for sensitive skin and beginner retinol users.',
    formulationConsiderations: 'Granactive Retinoid binds directly to retinoid receptors without requiring metabolic conversion, avoiding erythema.',
  },
  {
    id: 'salicylic-acid',
    name: 'SALICYLIC ACID (BHA)',
    chemicalName: 'Encapsulated Salicylic Acid (2%)',
    category: 'Pore Clarifying',
    badge: 'Blemish Defense',
    summary: 'An oil-soluble beta-hydroxy acid that penetrates into pores to clear dead cell buildup and excess sebum.',
    formats: ['Exfoliating clarifying cleansers', 'Targeted spot gels', 'Leave-on 2% BHA toners'],
    texture: 'Clear refreshing liquid or foaming wash.',
    positioning: '“2% BHA Pore Clarifying Solution” for breakout-prone and texture-troubled skin.',
    formulationConsiderations: 'Micro-encapsulated slow-release salicylic acid reduces tingling and dry irritation while extending active duration.',
  },
  {
    id: 'aloe-botanicals',
    name: 'CENTELLA & ORGANIC BOTANICALS',
    chemicalName: 'Centella Asiatica (Madecassoside) & Aloe Barbadensis',
    category: 'Soothing Botanical Base',
    badge: 'Clean Base',
    summary: 'Ultra-pure soothing plant hydrosols and cold-pressed botanical extracts to comfort sensitized skin.',
    formats: ['Cica calming emulsions', 'Hydrating face mists', 'After-sun recovery gels'],
    texture: 'Refreshing, dewy water-burst gel.',
    positioning: '“Calming Cica Barrier Recovery Fluid” for daily environmental rescue.',
    formulationConsiderations: 'Standardized madecassoside and decolorized aloe inner fillet leaf juice ensures crystal-clear aesthetics.',
  },
];

export const SkincareActiveIngredientsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ceramides');

  const selectedItem = ACTIVE_INGREDIENTS.find((i) => i.id === activeId) || ACTIVE_INGREDIENTS[0];

  return (
    <section id="skincare-actives" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              05 — Active Direction
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              WHAT SHOULD GO
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              INTO YOUR FORMULA?
            </h3>
          </div>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Explore clinically vetted actives, bio-identical ceramides, and stabilized vitamins formulated in certified cleanroom laboratories.
          </p>
        </div>

        {/* 2-Column Interactive Actives Grid & Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Actives Chips */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ACTIVE_INGREDIENTS.map((item) => {
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer shadow-2xs flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-black ring-1 ring-black shadow-md'
                      : 'bg-[#FAFAFA] hover:bg-white border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        {item.badge}
                      </span>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </div>
                    <h3 className="text-base font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {item.name}
                    </h3>
                    <div className="text-[11px] font-mono text-zinc-500 truncate">
                      {item.chemicalName}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-600">
                    <span>Active Dossier</span>
                    <ChevronRight size={13} className={isSelected ? 'text-black translate-x-0.5 transition-transform' : 'text-zinc-400'} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Active Profile Showcase */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-2xl bg-black text-white border border-zinc-800 shadow-2xl space-y-6 text-left"
              >
                {/* Header Profile */}
                <div className="space-y-2 border-b border-zinc-800 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                      {selectedItem.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{selectedItem.chemicalName}</span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {selectedItem.name}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed pt-1 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {selectedItem.summary}
                  </p>
                </div>

                {/* Section 1: Formats & Texture */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                    <span>TYPICAL PRODUCT FORMATS &amp; TEXTURE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedItem.formats.map((fmt) => (
                      <div key={fmt} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-200">
                        <CheckCircle2 size={13} className="text-zinc-400 shrink-0" />
                        <span>{fmt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                    <span className="font-semibold text-white font-mono block text-[10px] uppercase mb-0.5">Texture Experience:</span>
                    {selectedItem.texture}
                  </div>
                </div>

                {/* Section 2: Formulation Considerations */}
                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Info size={13} />
                    <span>FORMULATION &amp; STABILITY</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {selectedItem.formulationConsiderations}
                  </p>
                </div>

                {/* Section 3: Consumer Positioning */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    RECOMMENDED BRAND POSITIONING
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-white bg-white/5 p-3 rounded-xl border border-white/10 italic">
                    {selectedItem.positioning}
                  </div>
                </div>

                {/* Compliance Note */}
                <div className="pt-2 flex items-center gap-2 text-[10px] text-zinc-400 font-mono border-t border-zinc-800">
                  <ShieldCheck size={12} className="text-zinc-400" />
                  <span>Compliant cosmetic claim verification and safety assessment included.</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkincareActiveIngredientsSection;
