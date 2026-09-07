import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, Leaf, Shield, Info } from 'lucide-react';

interface BotanicalIngredient {
  id: string;
  name: string;
  botanicalName: string;
  partUsed: string;
  badge: string;
  summary: string;
  applications: string[];
  formulationConsiderations: string;
  potentialPositioning: string;
  color: string;
}

const INGREDIENTS: BotanicalIngredient[] = [
  {
    id: 'ashwagandha',
    name: 'ASHWAGANDHA',
    botanicalName: 'Withania Somnifera',
    partUsed: 'Root Extract & KSM-66',
    badge: 'Adaptogenic Root',
    summary: 'A celebrated Rasayana botanical traditionally utilized to support holistic resilience and skin vitality.',
    applications: ['Restorative Body Oils', 'Night Barrier Creams', 'Oral Wellness Elixirs', 'Stress-Relief Balms'],
    formulationConsiderations: 'Optimal solubility in oil-based carrier lipids and standardized hydro-alcoholic decoctions without bitter sensory notes.',
    potentialPositioning: '“Adaptogenic Night Renewal” or “Holistic Stress-Defense Body Treatment” for modern wellness enthusiasts.',
    color: '#D97706',
  },
  {
    id: 'kumkumadi',
    name: 'KUMKUMADI & SAFFRON',
    botanicalName: 'Crocus Sativus Complex (26 Herbs)',
    partUsed: 'Stigma, Red Sandalwood & Goat Milk / Sesame Taila',
    badge: 'Luxury Golden Elixir',
    summary: 'Classical Ayurvedic glow formulation crafted via slow copper-pot decoction with pure Kashmiri saffron.',
    applications: ['Radiance Facial Oil (Tailam)', 'Illuminating Night Serums', 'Luxury Under-Eye Concentrates', 'Solid Facial Balms'],
    formulationConsiderations: 'Requires authentic low-temperature Kashayam boiling to preserve crocin and safranal carotenoids without oxidation.',
    potentialPositioning: '“Ancient Vedic Glow Concentrate” positioning at ₹1,800–₹3,500 premium luxury price bands.',
    color: '#F59E0B',
  },
  {
    id: 'tulsi',
    name: 'TULSI (HOLY BASIL)',
    botanicalName: 'Ocimum Sanctum',
    partUsed: 'Whole Leaf Distillate & Extract',
    badge: 'Clarifying Botanical',
    summary: 'A time-honored purifying botanical extract ideal for antioxidant defense and soothing irritated skin barriers.',
    applications: ['Clarifying Facial Cleansers', 'Environmental Defense Face Mists', 'Scalp Balancing Tonics', 'Pore Purifying Serums'],
    formulationConsiderations: 'Volatile eugenol aromatic compounds must be cold-extracted to maintain natural aroma and anti-oxidative strength.',
    potentialPositioning: '“Anti-Pollution Botanical Mist” or “Clarifying Daily Scalp Solution” for urban consumers.',
    color: '#059669',
  },
  {
    id: 'amla',
    name: 'AMLA (INDIAN GOOSEBERRY)',
    botanicalName: 'Phyllanthus Emblica',
    partUsed: 'Fresh Fruit Pulp & Cold-Pressed Seed Oil',
    badge: 'Bioactive Vitamin C',
    summary: 'One of the richest natural sources of polyphenols and stable botanical Vitamin C for hair and skin revitalisation.',
    applications: ['Root-Strengthening Hair Oils', 'Brightening Day Serums', 'Scalp Clarifying Shampoos', 'Antioxidant Body Lotions'],
    formulationConsiderations: 'Tannin complexes require pH stabilization (4.5–5.5) in emulsion formulas to ensure long-term color integrity.',
    potentialPositioning: '“Plant-Powered Vitamin C Complex” offering natural glow without synthetic ascorbic acid irritation.',
    color: '#10B981',
  },
  {
    id: 'neem',
    name: 'NEEM',
    botanicalName: 'Azadirachta Indica',
    partUsed: 'Organic Seed Oil & Leaf Extract',
    badge: 'Deep Clarifying',
    summary: 'A potent bitter botanical traditionally incorporated in blemish-clearing and scalp purifying formulations.',
    applications: ['Blemish Clearing Gel Treatments', 'Anti-Dandruff Scalp Solutions', 'Purifying Foaming Face Washes', 'Herbal Body Bars'],
    formulationConsiderations: 'Micro-encapsulated azadirachtin or deodorized cold-pressed seed oil avoids strong pungent odors in daily beauty products.',
    potentialPositioning: '“Gentle Botanical Blemish Defense” bridging Ayurvedic herbal wisdom with dermatologist testing.',
    color: '#047857',
  },
  {
    id: 'turmeric',
    name: 'TURMERIC & HARIDRA',
    botanicalName: 'Curcuma Longa',
    partUsed: 'Standardized 95% Curcuminoids & Steam Rhizome Distillate',
    badge: 'Golden Bio-Shield',
    summary: 'Renowned for comforting stressed skin and enhancing natural luminosity with powerful polyphenol bio-actives.',
    applications: ['Brightening Face Masks & Lepas', 'Soothing Barrier Creams', 'Post-Sun Herbal Lotions', 'Golden Milk Bath Salts'],
    formulationConsiderations: 'Using colorless tetrahydrocurcuminoids (THC) avoids yellow clothing staining while retaining active benefits.',
    potentialPositioning: '“Zero-Stain Modern Turmeric Elixir” suitable for morning skin routines and high-frequency use.',
    color: '#EAB308',
  },
  {
    id: 'gotu-kola',
    name: 'GOTU KOLA / MANDUKAPARNI (CICA)',
    botanicalName: 'Centella Asiatica Leaf Extract',
    partUsed: 'Standardized Asiaticoside & Madecassoside Triterpenes',
    badge: 'Skin Repair & Soothing',
    summary: 'Accelerates dermal wound repair, stimulates type I and III collagen synthesis, and soothes rosacea, acne, and barrier damage.',
    applications: ['Barrier Repair Cream', 'Blemish Recovery Fluid', 'Centella Calming Mist', 'After-Sun Soothing Gel'],
    formulationConsiderations: 'Excellent synergistic pairing with modern cosmeceuticals (Hyaluronic Acid, Ceramide NP, Niacinamide).',
    potentialPositioning: '“Ayurvedic Cica Calm Complex” fusing modern dermatological barrier science with classical herbology.',
    color: '#10B981',
  },
  {
    id: 'botanical-oils',
    name: 'COLD-PRESSED BOTANICAL OILS',
    botanicalName: 'Sesamum Indicum, Moringa, Rosehip & Jojoba',
    partUsed: 'Virgin Unrefined First Cold-Press Seeds',
    badge: 'Zero Mineral Oil Base',
    summary: 'Nutrient-dense lipid carriers rich in essential fatty acids (Omegas 3, 6, 9) mimicking human sebum.',
    applications: ['Abhyanga Body Ritual Oils', 'Facial Glow Drops', 'Pre-Shampoo Hair Elixirs', 'Beard & Cuticle Care'],
    formulationConsiderations: 'Incorporation of natural Tocopherol (Vitamin E) and rosemary oleoresin for clean shelf-life without synthetic BHT.',
    potentialPositioning: '“100% Raw Botanical Lipids” free from parabens, mineral oils, silicones, and artificial colorants.',
    color: '#F59E0B',
  },
];

export const AyurvedaIngredientStorySection: React.FC = () => {
  const [activeIngredientId, setActiveIngredientId] = useState<string>('kumkumadi');

  const selectedItem = INGREDIENTS.find((i) => i.id === activeIngredientId) || INGREDIENTS[0];

  return (
    <section id="ayurveda-ingredients" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              07 — INGREDIENT &amp; FORMULATION STORY
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHAT GOES INTO YOUR PRODUCT?
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Explore the clinically vetted botanicals, cold-pressed seed oils, and certified Ayurvedic herbs we source and compound into high-performing formulations.
          </p>
        </div>

        {/* Interactive 2-Column Split: Ingredient List + Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Chips / Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {INGREDIENTS.map((item) => {
              const isSelected = item.id === activeIngredientId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIngredientId(item.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-black ring-1 ring-black shadow-sm'
                      : 'bg-white/80 hover:bg-white border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        {item.badge}
                      </span>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </div>
                    <h3 className="text-base font-normal uppercase text-[#111111] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {item.name}
                    </h3>
                    <div className="text-[11px] font-mono italic text-zinc-500 truncate">
                      {item.botanicalName}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold text-zinc-700" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    <span>View Profile</span>
                    <ChevronRight size={14} className={isSelected ? 'text-black' : 'text-zinc-400'} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Ingredient Profile Showcase */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-2xl bg-black text-white border border-zinc-800 shadow-2xl space-y-7 text-left"
              >
                {/* Header Profile */}
                <div className="space-y-2 border-b border-zinc-800 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {selectedItem.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{selectedItem.partUsed}</span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-normal text-white uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {selectedItem.name}
                  </h3>
                  <div className="text-xs font-mono italic text-zinc-400">
                    Botanical Nomenclature: {selectedItem.botanicalName}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed pt-2 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {selectedItem.summary}
                  </p>
                </div>

                {/* Section 1: Product Applications */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 flex items-center gap-2">
                    <Sparkles size={14} />
                    <span>IDEAL PRODUCT APPLICATIONS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedItem.applications.map((app) => (
                      <div key={app} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        <CheckCircle2 size={13} className="text-zinc-400 shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Formulation Considerations */}
                <div className="space-y-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Info size={13} />
                    <span>FORMULATION &amp; STABILITY CONSIDERATIONS</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {selectedItem.formulationConsiderations}
                  </p>
                </div>

                {/* Section 3: Potential Positioning */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    POTENTIAL CONSUMER POSITIONING
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-white bg-black/60 p-3 rounded-xl border border-zinc-800 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {selectedItem.potentialPositioning}
                  </div>
                </div>

                {/* Non-Medicinal Responsibility Note */}
                <div className="pt-2 flex items-center gap-2 text-[10px] text-zinc-500 font-mono border-t border-zinc-800">
                  <Shield size={12} className="text-zinc-400" />
                  <span>Ethical non-medicinal cosmetic &amp; wellness claim formulation standards.</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AyurvedaIngredientStorySection;
