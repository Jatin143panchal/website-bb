import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Droplets, Sparkles, Shield, Sun, RefreshCw, Heart, Check, ArrowRight, Layers } from 'lucide-react';

interface SkincarePurposeSectionProps {
  onSelectPurpose: (purposeName: string) => void;
}

export const SkincarePurposeSection: React.FC<SkincarePurposeSectionProps> = ({ onSelectPurpose }) => {
  const [selectedPurpose, setSelectedPurpose] = useState<string>('HYDRATION');

  const purposes = [
    {
      id: 'hydration',
      title: 'HYDRATION',
      subtitle: 'For a moisturised, comfortable skin feel.',
      desc: 'Formulated with multi-weight Hyaluronic Acid, Polyglutamic Acid, and Marine Algae extracts to lock in deep epidermal water.',
      icon: Droplets,
      color: '#0284C7',
    },
    {
      id: 'brightening',
      title: 'BRIGHTER-LOOKING SKIN',
      subtitle: 'For a more radiant-looking appearance.',
      desc: 'Formulated with stabilized 15% 3-O-Ethyl Ascorbic Acid, Alpha Arbutin 2%, and Licorice Root to enhance natural luminosity.',
      icon: Sparkles,
      color: '#F59E0B',
    },
    {
      id: 'barrier',
      title: 'SKIN BARRIER',
      subtitle: 'For barrier-focused skincare positioning.',
      desc: 'Formulated with a 5-Ceramide complex (EOP, NP, AP, AS, NS), phytosphingosine, and Centella Asiatica for lipid recovery.',
      icon: Shield,
      color: '#10B981',
    },
    {
      id: 'oil-control',
      title: 'OIL CONTROL',
      subtitle: 'For products designed around oily-skin routines.',
      desc: 'Formulated with Niacinamide 10%, Zinc PCA 1%, and encapsulated Salicylic Acid 2% for gentle sebum balance.',
      icon: RefreshCw,
      color: '#06B6D4',
    },
    {
      id: 'anti-ageing',
      title: 'ANTI-AGEING',
      subtitle: 'For products positioned around signs of ageing.',
      desc: 'Formulated with gentle Granactive Retinoid, Bakuchiol 1%, Matrixyl Synthe-6 peptides, and Copper tripeptides.',
      icon: Layers,
      color: '#8B5CF6',
    },
    {
      id: 'sensitive',
      title: 'SENSITIVE-SKIN FOCUS',
      subtitle: 'For a gentle skincare positioning.',
      desc: 'Fragrance-free, essential-oil free, formulated with colloidal oatmeal, madecassoside, and soothing bisabolol.',
      icon: Heart,
      color: '#EC4899',
    },
    {
      id: 'daily',
      title: 'DAILY ESSENTIAL',
      subtitle: 'Simple everyday skincare.',
      desc: 'Reliable, universal daily moisturizers, gentle gel cleansers, and invisible finish daily SPF 50 hydrators.',
      icon: Sun,
      color: '#64748B',
    },
    {
      id: 'custom',
      title: 'NOT SURE',
      subtitle: 'Help me define the concept.',
      desc: 'Collaborate with our cosmetic R&D lab to identify the target consumer whitespace and unique active USP.',
      icon: Sparkles,
      color: '#0F172A',
    },
  ];

  const handlePick = (title: string) => {
    setSelectedPurpose(title);
    onSelectPurpose(title);
  };

  return (
    <section id="skincare-purpose" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              04 — Product Intent
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              WHAT IS YOUR
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              PRODUCT'S PURPOSE?
            </h3>
          </div>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            A high-converting skincare brand starts with a crystal-clear customer promise. Pick the primary benefit you want your flagship product to deliver.
          </p>
        </div>

        {/* 8 Purpose Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((p, idx) => {
            const isSelected = selectedPurpose === p.title;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                onClick={() => handlePick(p.title)}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                  isSelected
                    ? 'bg-white border-black ring-1 ring-black shadow-lg scale-101'
                    : 'bg-[#FAFAFA] hover:bg-white border-zinc-200 hover:border-black shadow-2xs'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 text-[#111111] flex items-center justify-center">
                      <p.icon size={18} />
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-black text-white' : 'border border-zinc-300 bg-zinc-50'
                      }`}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-lg font-normal tracking-tight text-[#111111] uppercase"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {p.title}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      {p.subtitle}
                    </div>
                    <p
                      className="text-xs text-zinc-600 leading-relaxed mt-2.5 font-normal"
                      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Build This Product
                  </span>
                  <ArrowRight size={13} className={isSelected ? 'text-black translate-x-1 transition-transform' : 'text-zinc-400'} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkincarePurposeSection;
