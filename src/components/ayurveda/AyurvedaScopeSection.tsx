import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AyurvedaScopeSectionProps {
  onSelectScope: (scopeId: string, label: string) => void;
}

export const AyurvedaScopeSection: React.FC<AyurvedaScopeSectionProps> = ({ onSelectScope }) => {
  const [selectedScope, setSelectedScope] = useState<string>('end-to-end');

  const scopes = [
    {
      id: 'product-only',
      title: 'PRODUCT ONLY',
      tagline: 'Formulation + manufacturing',
      desc: 'Herbal actives selection, classical decoction R&D, AYUSH compliance sheets, and GMP batch production.',
      cta: 'START PRODUCT',
    },
    {
      id: 'product-packaging',
      title: 'PRODUCT + PACKAGING',
      tagline: 'Formula + packaging + production',
      desc: 'Formulation plus amber UV flacons, bamboo/metal droppers, embossed labels, and unboxing cartons.',
      cta: 'BUILD MY PRODUCT',
    },
    {
      id: 'brand-product',
      title: 'BRAND + PRODUCT',
      tagline: 'Brand narrative + product + packaging',
      desc: 'Ayurvedic brand naming, heritage narrative, luxury logo crest, 3D renders, and formula compounding.',
      cta: 'BUILD MY BRAND',
    },
    {
      id: 'end-to-end',
      title: 'END-TO-END TURNKEY',
      tagline: 'Product + packaging + brand + launch',
      desc: 'Full turnkey incubation: R&D + Packaging + AYUSH Licensing + Shopify Flagship + Amazon / Nykaa Launch.',
      cta: 'START MY FULL LAUNCH',
      highlighted: true,
    },
  ];

  const handlePick = (id: string, title: string) => {
    setSelectedScope(id);
    onSelectScope(id, title);
  };

  return (
    <section id="ayurveda-scope" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              05 — Launch Scope
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              HOW MUCH DO YOU
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              WANT US TO HANDLE?
            </h3>
          </div>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Whether you need certified AYUSH batch compounding, or a complete turnkey botanical brand launch.
          </p>
        </div>

        {/* 4 Scope Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-zinc-200">
          {scopes.map((item, idx) => {
            const isSelected = selectedScope === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onClick={() => handlePick(item.id, item.title)}
                className={`scope-col group px-0 lg:px-6 py-6 lg:py-0 border-t border-b-0 border-zinc-100 lg:border-t-0 space-y-6 flex flex-col justify-between cursor-pointer first:pl-0 last:pr-0 ${
                  item.highlighted ? 'relative' : ''
                }`}
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-zinc-400">
                      0{idx + 1}
                    </span>
                    {item.highlighted && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-normal tracking-tight text-[#111111] uppercase"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      {item.tagline}
                    </div>
                    <p
                      className="text-sm text-zinc-600 leading-relaxed mt-3 font-normal"
                      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    type="button"
                    className={`w-full py-3 px-5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      item.highlighted || isSelected
                        ? 'bg-black hover:bg-zinc-800 text-white'
                        : 'border border-zinc-200 hover:border-black text-zinc-700 hover:text-black bg-white'
                    }`}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaScopeSection;
