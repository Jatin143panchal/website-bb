import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Droplet, Sun, HeartHandshake, Leaf, Feather } from 'lucide-react';

interface AyurvedaCategoriesSectionProps {
  onSelectCategory: (categoryId: string, label: string) => void;
}

export const AyurvedaCategoriesSection: React.FC<AyurvedaCategoriesSectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'skincare',
      title: 'HERBAL SKINCARE',
      subtitle: 'Serums, creams, cleansers, oils.',
      desc: 'Formulated with active botanicals like Bakuchiol, Kumkumadi, Gotu Kola, and cold-pressed seed lipids.',
      cta: 'BUILD MY SKINCARE',
      icon: Droplet,
      tag: 'High Repeat Rate',
    },
    {
      id: 'haircare',
      title: 'HAIR & SCALP',
      subtitle: 'Hair oils, shampoos, masks, treatments.',
      desc: 'Herbal tailas infused with Bhringraj, Amla, Rosemary extract, and sulfate-free scalp clarifying solutions.',
      cta: 'BUILD MY HAIRCARE',
      icon: Feather,
      tag: 'Bestseller Category',
    },
    {
      id: 'bodycare',
      title: 'BODYCARE',
      subtitle: 'Body oils, washes, scrubs, creams.',
      desc: 'Abhyanga ritual oils, Ayurvedic Ubtan body polishes, and barrier-replenishing botanical butters.',
      cta: 'BUILD MY BODYCARE',
      icon: Sun,
      tag: 'Luxury Rituals',
    },
    {
      id: 'wellness',
      title: 'WELLNESS',
      subtitle: 'Relevant Ayurvedic / wellness concepts.',
      desc: 'Standardized botanical extracts, KSM-66 Ashwagandha elixirs, herbal teas, and traditional Rasayanas.',
      cta: 'BUILD MY WELLNESS BRAND',
      icon: HeartHandshake,
      tag: 'Rapid Market Growth',
    },
    {
      id: 'botanical',
      title: 'HERBAL / BOTANICAL',
      subtitle: 'Botanical-led product concepts.',
      desc: 'Specialty cold-pressed single botanical extracts, pure hydrosols, plant actives, and clean herbal elixirs.',
      cta: 'BUILD MY PRODUCT',
      icon: Leaf,
      tag: 'Clean Formulation',
    },
    {
      id: 'custom',
      title: 'CUSTOM CONCEPT',
      subtitle: 'Have something different in mind?',
      desc: 'Bespoke hybrid formulations combining modern cosmeceuticals with classical Vedic ingredients.',
      cta: 'TALK TO BANEGA',
      icon: Sparkles,
      tag: 'Turnkey Tailored',
    },
  ];

  return (
    <section id="ayurveda-categories" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              02 — WHAT DO YOU WANT TO BUILD?
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHAT ARE YOU BRINGING <br />
            <span className="font-light text-zinc-500 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              TO MARKET?
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Select your category to explore bespoke formulation profiles, custom packaging molds, and turnkey manufacturing routes.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl p-7 sm:p-8 bg-[#FAFAFA] hover:bg-white border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between text-left"
            >
              {/* Top Tag & Icon */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:bg-black group-hover:text-white transition-all shadow-xs">
                    <cat.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600">
                    {cat.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3
                    className="text-xl sm:text-2xl font-normal tracking-tight text-[#111111] uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {cat.title}
                  </h3>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {cat.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-zinc-200 mt-6">
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat.id, cat.title)}
                  className="w-full py-3.5 px-5 rounded-full bg-zinc-100 group-hover:bg-black text-zinc-900 group-hover:text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  <span>{cat.cta}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaCategoriesSection;
