import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, Droplets, Layers, ShieldCheck } from 'lucide-react';

interface SkincareProductBuilderSectionProps {
  onProceed: (data: { productType: string; kind: string; format: string }) => void;
}

const PRODUCT_TYPES = [
  'SERUM',
  'MOISTURISER / CREAM',
  'CLEANSER',
  'SUNSCREEN',
  'FACE OIL',
  'TONER / ESSENCE',
];

const KINDS = [
  { id: 'hydrating', title: 'Hydrating', desc: 'Plumping hydration with multi-weight Hyaluronic Acid & Polyglutamic acid.' },
  { id: 'brightening', title: 'Brightening', desc: 'Radiant-looking appearance with Vitamin C, Alpha Arbutin & Kojic dipalmitate.' },
  { id: 'oil-control', title: 'Oil-control', desc: 'Pore clarifying with Niacinamide 10% + Zinc PCA & Salicylic Acid.' },
  { id: 'barrier-focused', title: 'Barrier-focused', desc: 'Skin barrier replenishment with 5-Ceramide complex & Centella Asiatica.' },
  { id: 'anti-ageing', title: 'Anti-ageing / appearance-focused', desc: 'Smooth texture and fine-line appearance with Matrixyl 3000 & Bakuchiol.' },
  { id: 'other', title: 'Other / Custom Purpose', desc: 'Have a proprietary active synergy or specialized routine concept.' },
  { id: 'not-sure', title: 'Not sure', desc: 'Let our skincare cosmetic chemists recommend the ideal formulation focus.' },
];

const FORMATS = [
  { id: 'water-based', title: 'Water-based', desc: 'Fast-absorbing, non-sticky water essence texture.' },
  { id: 'gel', title: 'Gel', desc: 'Cooling, oil-free gel texture ideal for humid climates.' },
  { id: 'oil', title: 'Oil', desc: 'Rich, non-comedogenic squalane or seed lipid blend.' },
  { id: 'cream', title: 'Cream', desc: 'Deeply moisturizing velvety cream emulsion.' },
  { id: 'not-sure', title: 'Not sure', desc: 'Let Banega chemists formulate the optimal texture for your active.' },
];

export const SkincareProductBuilderSection: React.FC<SkincareProductBuilderSectionProps> = ({ onProceed }) => {
  const [selectedType, setSelectedType] = useState<string>('SERUM');
  const [selectedKind, setSelectedKind] = useState<string>('Hydrating');
  const [selectedFormat, setSelectedFormat] = useState<string>('Water-Based (Fluid)');

  return (
    <section id="skincare-builder" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              03 — Interactive Builder
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              LET'S BUILD YOUR {selectedType}.
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              CUSTOM FORMULATION.
            </h3>
          </div>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Select your product category, choose the targeted benefit profile, and pick the sensory texture.
          </p>
        </div>

        {/* Step 1: Product Category Switcher */}
        <div className="space-y-3 text-left">
          <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Step 1: Base Category
          </label>
          <div className="flex flex-wrap gap-2.5">
            {PRODUCT_TYPES.map((type) => {
              const isSelected = selectedType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid: What Kind + What Format */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Column 1: WHAT KIND? */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-medium">
                Step 2: Primary Benefit
              </span>
              <span className="text-xs font-mono text-zinc-400">Compliant Cosmetic Focus</span>
            </div>

            <div className="space-y-3">
              {KINDS.map((k) => {
                const isSelected = selectedKind === k.title;
                return (
                  <div
                    key={k.id}
                    onClick={() => setSelectedKind(k.title)}
                    className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between shadow-2xs ${
                      isSelected
                        ? 'bg-white border-black ring-1 ring-black shadow-md'
                        : 'bg-white hover:bg-zinc-50 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    <div className="space-y-1 pr-4">
                      <div className="text-base font-medium text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        {k.title}
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                        {k.desc}
                      </p>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-black text-white' : 'border border-zinc-300 bg-zinc-50'
                      }`}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: WHAT FORMAT & TEXTURE? */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-medium">
                Step 3: Texture &amp; Format
              </span>
              <span className="text-xs font-mono text-zinc-400">Sensory Feel</span>
            </div>

            <div className="space-y-3">
              {FORMATS.map((f) => {
                const isSelected = selectedFormat === f.title;
                return (
                  <div
                    key={f.id}
                    onClick={() => setSelectedFormat(f.title)}
                    className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between shadow-2xs ${
                      isSelected
                        ? 'bg-white border-black ring-1 ring-black shadow-md'
                        : 'bg-white hover:bg-zinc-50 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    <div className="space-y-1 pr-4">
                      <div className="text-sm font-medium text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        {f.title}
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                        {f.desc}
                      </p>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-black text-white' : 'border border-zinc-300 bg-zinc-50'
                      }`}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-600 space-y-1">
              <div className="font-semibold text-[#111111] flex items-center gap-1.5">
                <span>Compliance &amp; Dermatological Safety</span>
              </div>
              <p className="text-zinc-500 text-[11px] leading-relaxed">
                All formulated actives adhere strictly to non-medical cosmetic claims with human patch testing clearance.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic Live Bar & Next Action */}
        <div className="p-8 rounded-2xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span>SPECIFICATION SUMMARY</span>
            </div>
            <div className="text-sm sm:text-base font-normal text-zinc-300" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              <span className="font-semibold text-white">{selectedType}</span> · Benefit:{' '}
              <span className="text-white font-medium">{selectedKind}</span> · Texture:{' '}
              <span className="text-zinc-300">{selectedFormat}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onProceed({
                productType: selectedType,
                kind: selectedKind,
                format: selectedFormat,
              })
            }
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-100 text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shrink-0 shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Configure This Product</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SkincareProductBuilderSection;
