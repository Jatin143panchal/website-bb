import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, Check, Sparkles, Calculator } from 'lucide-react';

interface AyurvedaRangeBuilderSectionProps {
  onBuildRange: (data: { selectedItems: string[]; totalProducts: number; estimatedSkus: number }) => void;
}

interface ProductItem {
  id: string;
  name: string;
  category: 'skincare' | 'haircare' | 'bodycare' | 'wellness';
  estSkuMultiplier: number;
}

const RANGE_ITEMS: ProductItem[] = [
  // Skincare
  { id: 'face-serum', name: 'Face Serum', category: 'skincare', estSkuMultiplier: 1 },
  { id: 'face-cream', name: 'Face Cream', category: 'skincare', estSkuMultiplier: 1 },
  { id: 'cleanser', name: 'Botanical Cleanser', category: 'skincare', estSkuMultiplier: 2 },
  { id: 'face-oil', name: 'Kumkumadi Face Oil', category: 'skincare', estSkuMultiplier: 2 },
  { id: 'mask', name: 'Herbal Clay Mask / Lepa', category: 'skincare', estSkuMultiplier: 1 },

  // Haircare
  { id: 'hair-oil', name: 'Herbal Taila Hair Oil', category: 'haircare', estSkuMultiplier: 2 },
  { id: 'shampoo', name: 'Sulfate-Free Shampoo', category: 'haircare', estSkuMultiplier: 2 },
  { id: 'conditioner', name: 'Botanical Conditioner', category: 'haircare', estSkuMultiplier: 1 },
  { id: 'hair-mask', name: 'Deep Restorative Hair Mask', category: 'haircare', estSkuMultiplier: 1 },

  // Bodycare
  { id: 'body-oil', name: 'Abhyanga Body Oil', category: 'bodycare', estSkuMultiplier: 2 },
  { id: 'body-wash', name: 'Ayurvedic Body Wash', category: 'bodycare', estSkuMultiplier: 2 },
  { id: 'body-scrub', name: 'Ubtan Body Scrub', category: 'bodycare', estSkuMultiplier: 1 },
  { id: 'body-lotion', name: 'Hydrating Body Lotion', category: 'bodycare', estSkuMultiplier: 2 },

  // Wellness
  { id: 'ashwagandha-elixir', name: 'KSM-66 Ashwagandha Drops', category: 'wellness', estSkuMultiplier: 1 },
  { id: 'herbal-kwatha', name: 'Herbal Kwatha Infusion', category: 'wellness', estSkuMultiplier: 2 },
  { id: 'shilajit-resin', name: 'Purified Shilajit Gold', category: 'wellness', estSkuMultiplier: 1 },
];

export const AyurvedaRangeBuilderSection: React.FC<AyurvedaRangeBuilderSectionProps> = ({ onBuildRange }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'face-serum',
    'face-oil',
    'hair-oil',
    'body-oil',
  ]);

  const toggleItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedProducts = RANGE_ITEMS.filter((item) => selectedIds.includes(item.id));
  const totalProductsCount = selectedProducts.length;
  const estimatedSkusCount = selectedProducts.reduce((acc, curr) => acc + curr.estSkuMultiplier, 0);

  const categories = [
    { key: 'skincare', title: 'HERBAL SKINCARE' },
    { key: 'haircare', title: 'HAIR & SCALP' },
    { key: 'bodycare', title: 'BODYCARE RITUALS' },
    { key: 'wellness', title: 'WELLNESS & EXTRACTS' },
  ];

  return (
    <section id="ayurveda-range-builder" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              12 — RANGE BUILDER &amp; SKU CALCULATOR
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            BUILD YOUR PRODUCT RANGE <br />
            <span className="text-zinc-400 italic">IN REAL TIME.</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Select the hero formulas and complementary ritual products you want to launch. Watch your SKU matrix and production scope calculate in real time.
          </p>
        </div>

        {/* Categories Grid Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {categories.map((cat) => (
            <div key={cat.key} className="p-6 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-800">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-400">
                  {RANGE_ITEMS.filter((i) => i.category === cat.key && selectedIds.includes(i.id)).length} selected
                </span>
              </div>

              <div className="space-y-2.5">
                {RANGE_ITEMS.filter((i) => i.category === cat.key).map((item) => {
                  const isChecked = selectedIds.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className={`w-full p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between text-xs font-medium ${
                        isChecked
                          ? 'bg-[#FAFAFA] border-black text-black shadow-2xs font-semibold'
                          : 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-600'
                      }`}
                      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-black text-white' : 'border border-zinc-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check size={11} strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Calculation Output Dashboard */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black text-white border border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <Calculator size={14} />
              <span>LIVE RANGE SPECIFICATION</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-6 sm:gap-10">
              <div>
                <span className="text-3xl sm:text-5xl font-normal font-mono text-white">
                  {totalProductsCount}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-mono mt-0.5">
                  Products Selected
                </span>
              </div>

              <div className="border-l border-zinc-800 pl-6 sm:pl-10">
                <span className="text-3xl sm:text-5xl font-normal font-mono text-white">
                  {estimatedSkusCount}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-mono mt-0.5">
                  Potential SKUs (Sizes/Variants)
                </span>
              </div>

              <div className="border-l border-zinc-800 pl-6 sm:pl-10">
                <span className="text-2xl sm:text-3xl font-normal font-mono text-white">
                  45–90
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-mono mt-0.5">
                  Turnkey Launch Days
                </span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 font-mono pt-1">
              Active Selection: {selectedProducts.map((p) => p.name).join(', ') || 'None selected'}
            </div>
          </div>

          <button
            type="button"
            disabled={totalProductsCount === 0}
            onClick={() =>
              onBuildRange({
                selectedItems: selectedProducts.map((p) => p.name),
                totalProducts: totalProductsCount,
                estimatedSkus: estimatedSkusCount,
              })
            }
            className={`px-8 py-5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shrink-0 shadow-lg ${
              totalProductsCount > 0
                ? 'bg-white hover:bg-zinc-200 text-black cursor-pointer active:scale-95'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            <span>BUILD MY RANGE</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaRangeBuilderSection;
