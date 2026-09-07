import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, Check, Calculator, Sparkles } from 'lucide-react';

interface SkincareRangeBuilderSectionProps {
  onBuildRange: (data: { selectedItems: string[]; totalProducts: number; estimatedSkus: number }) => void;
}

interface ProductItem {
  id: string;
  name: string;
  category: 'cleansing' | 'treatment' | 'moisturising' | 'protection';
  estSkuMultiplier: number;
}

const RANGE_ITEMS: ProductItem[] = [
  // Cleansing
  { id: 'cleanser', name: 'Salicylic Gel Cleanser', category: 'cleansing', estSkuMultiplier: 2 },
  { id: 'cleansing-balm', name: 'Melt-In Cleansing Balm', category: 'cleansing', estSkuMultiplier: 1 },
  { id: 'micellar-water', name: 'Ceramide Micellar Water', category: 'cleansing', estSkuMultiplier: 1 },

  // Treatment
  { id: 'serum-vit-c', name: '15% Vitamin C Glow Serum', category: 'treatment', estSkuMultiplier: 1 },
  { id: 'serum-niacinamide', name: '10% Niacinamide + Zinc Serum', category: 'treatment', estSkuMultiplier: 1 },
  { id: 'serum-ha', name: '2% Hyaluronic Acid Plump Drops', category: 'treatment', estSkuMultiplier: 1 },
  { id: 'essence', name: 'Fermented Rice Skin Essence', category: 'treatment', estSkuMultiplier: 1 },
  { id: 'mask', name: 'Overnight Jelly Recovery Mask', category: 'treatment', estSkuMultiplier: 1 },

  // Moisturising
  { id: 'oil-free-gel', name: 'Oil-Free Water Gel Cream', category: 'moisturising', estSkuMultiplier: 2 },
  { id: 'ceramide-cream', name: '5-Ceramide Barrier Repair Creme', category: 'moisturising', estSkuMultiplier: 2 },
  { id: 'face-oil', name: 'Pure Squalane Glow Face Oil', category: 'moisturising', estSkuMultiplier: 1 },

  // Protection
  { id: 'sunscreen-fluid', name: 'Invisible SPF 50+ PA++++ Fluid', category: 'protection', estSkuMultiplier: 2 },
  { id: 'tinted-spf', name: 'Broad Spectrum Tinted Mineral SPF', category: 'protection', estSkuMultiplier: 3 },
];

export const SkincareRangeBuilderSection: React.FC<SkincareRangeBuilderSectionProps> = ({ onBuildRange }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'cleanser',
    'serum-vit-c',
    'ceramide-cream',
    'sunscreen-fluid',
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
    { key: 'cleansing', title: 'STEP 1: CLEANSING' },
    { key: 'treatment', title: 'STEP 2: TREATMENT & SERUMS' },
    { key: 'moisturising', title: 'STEP 3: MOISTURISING' },
    { key: 'protection', title: 'STEP 4: SUN PROTECTION' },
  ];

  return (
    <section id="skincare-range-builder" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              11 — Range Architecture
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              START WITH ONE PRODUCT.
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              OR BUILD THE WHOLE ROUTINE.
            </h3>
          </div>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Select the formulations you want to launch. Watch your production complexity, estimated SKU count, and routine continuity calculate in real time.
          </p>
        </div>

        {/* 4 Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {categories.map((cat) => (
            <div key={cat.key} className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-medium">
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
                      className={`w-full p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between text-xs font-normal ${
                        isChecked
                          ? 'bg-white border-black text-[#111111] shadow-xs font-medium'
                          : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600'
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
        <div className="p-8 sm:p-10 rounded-2xl bg-black text-white border border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>LIVE RANGE SPECIFICATION</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-6 sm:gap-10">
              <div>
                <span className="text-3xl sm:text-5xl font-normal text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {totalProductsCount}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-mono mt-0.5">
                  Products Selected
                </span>
              </div>

              <div className="border-l border-zinc-800 pl-6 sm:pl-10">
                <span className="text-3xl sm:text-5xl font-normal text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {estimatedSkusCount}
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-mono mt-0.5">
                  Potential SKUs
                </span>
              </div>

              <div className="border-l border-zinc-800 pl-6 sm:pl-10">
                <span className="text-2xl sm:text-3xl font-normal text-zinc-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
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
                ? 'bg-white hover:bg-zinc-100 text-black cursor-pointer active:scale-95'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            <span>Build My Range</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SkincareRangeBuilderSection;
