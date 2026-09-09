import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AyurvedaCategoriesSectionProps {
  onSelectCategory?: (categoryId: string, label: string) => void;
}

export const AyurvedaCategoriesSection: React.FC<AyurvedaCategoriesSectionProps> = () => {
  const categories = [
    {
      id: 'skincare',
      title: 'HERBAL SKINCARE',
      subtitle: 'Serums, creams, cleansers, oils',
      desc: 'Formulated with active botanicals like Bakuchiol, Kumkumadi, Gotu Kola, and cold-pressed seed lipids.',
      cta: 'BUILD MY SKINCARE',
    },
    {
      id: 'haircare',
      title: 'HAIR & SCALP',
      subtitle: 'Hair oils, shampoos, masks, treatments',
      desc: 'Herbal tailas infused with Bhringraj, Amla, Rosemary extract, and sulfate-free scalp clarifying solutions.',
      cta: 'BUILD MY HAIRCARE',
    },
    {
      id: 'bodycare',
      title: 'BODYCARE',
      subtitle: 'Body oils, washes, scrubs, creams',
      desc: 'Abhyanga ritual oils, Ayurvedic Ubtan body polishes, and barrier-replenishing botanical butters.',
      cta: 'BUILD MY BODYCARE',
    },
    {
      id: 'wellness',
      title: 'WELLNESS',
      subtitle: 'Relevant Ayurvedic & wellness concepts',
      desc: 'Standardized botanical extracts, KSM-66 Ashwagandha elixirs, herbal teas, and traditional Rasayanas.',
      cta: 'BUILD MY WELLNESS BRAND',
    },
    {
      id: 'botanical',
      title: 'HERBAL / BOTANICAL',
      subtitle: 'Botanical-led product concepts',
      desc: 'Specialty cold-pressed single botanical extracts, pure hydrosols, plant actives, and clean herbal elixirs.',
      cta: 'BUILD MY PRODUCT',
    },
    {
      id: 'custom',
      title: 'CUSTOM CONCEPT',
      subtitle: 'Have something different in mind?',
      desc: 'Bespoke hybrid formulations combining modern cosmeceuticals with classical Vedic ingredients.',
      cta: 'TALK TO BANEGA',
    },
  ];

  return (
    <section id="ayurveda-categories" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            CATEGORY CAPABILITIES
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHAT ARE YOU BRINGING <br />
            <span className="text-[#FF5722]">TO MARKET?</span>
          </h2>

          <p
            className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Select your category to explore bespoke formulation profiles, custom packaging molds, and turnkey manufacturing routes.
          </p>
        </div>

        {/* 6 Grid Cards — Sharp corners (rounded-none), Transparent box, No tag boxes, 100% Poppins font */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-none p-7 sm:p-8 bg-transparent hover:bg-zinc-50/50 border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between text-left shadow-xs hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] uppercase group-hover:text-[#FF5722] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {cat.title}
                  </h3>
                  <div
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {cat.subtitle}
                  </div>
                  <p
                    className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1 font-normal"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-zinc-200 mt-6">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-5 rounded-none bg-zinc-100 group-hover:bg-[#FF5722] text-zinc-900 group-hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>{cat.cta}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaCategoriesSection;
