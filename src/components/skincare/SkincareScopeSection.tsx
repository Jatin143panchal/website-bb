import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Beaker, Package, Feather, Rocket, Check } from 'lucide-react';

interface SkincareScopeSectionProps {
  onSelectScope: (scopeId: string, label: string) => void;
}

export const SkincareScopeSection: React.FC<SkincareScopeSectionProps> = ({ onSelectScope }) => {
  const [selectedScope, setSelectedScope] = useState<string>('end-to-end');

  const scopes = [
    {
      id: 'product-only',
      icon: Beaker,
      title: 'PRODUCT ONLY',
      tagline: 'Formulation + manufacturing',
      desc: 'Active ingredient compounding, stability testing, texture perfection, microbial clearance, and GMP batch production in bulk or filled.',
      cta: 'START PRODUCT',
      badge: 'Formula & Production',
    },
    {
      id: 'product-packaging',
      icon: Package,
      title: 'PRODUCT + PACKAGING',
      tagline: 'Formula + packaging + manufacturing',
      desc: 'Formulation plus airless bottles, amber droppers, ceramic jars, screen-printed labels, and custom unboxing cartons.',
      cta: 'BUILD MY PRODUCT',
      badge: 'Physical Ready',
    },
    {
      id: 'brand-product',
      icon: Feather,
      title: 'BRAND + PRODUCT',
      tagline: 'Product + packaging + branding',
      desc: 'Complete brand naming, visual identity, logo crest, 3D photorealistic bottle renders, formulation compounding, and packaging sourcing.',
      cta: 'BUILD MY BRAND',
      badge: 'Brand & Product',
    },
    {
      id: 'end-to-end',
      icon: Rocket,
      title: 'END-TO-END TURNKEY',
      tagline: 'Product + packaging + brand + ecommerce + launch',
      desc: 'Full turnkey incubation: Formulation R&D + Airless Packaging + Brand Identity + Shopify D2C Flagship + Amazon / Nykaa Onboarding.',
      cta: 'START MY FULL LAUNCH',
      badge: 'Recommended Turnkey',
      highlighted: true,
    },
  ];

  const handlePick = (id: string, title: string) => {
    setSelectedScope(id);
    onSelectScope(id, title);
  };

  return (
    <section id="skincare-scope" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              06 — Launch Scope
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
            Whether you only need cleanroom formulation &amp; batch compounding, or a complete turnkey brand launch from scratch.
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

export default SkincareScopeSection;
