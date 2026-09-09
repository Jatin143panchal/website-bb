import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SkincareProductCategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const SkincareProductCategoriesSection: React.FC<SkincareProductCategoriesSectionProps> = () => {
  const products = [
    {
      id: 'serum',
      name: 'SERUM',
      subtitle: 'Active Target Concentrates',
      desc: 'Niacinamide 10%, Vitamin C 15%, Multi-molecular Hyaluronic Acid, Salicylic Acid 2%, and Matrixyl Peptides.',
      cta: 'Build my serum',
    },
    {
      id: 'face-cream',
      name: 'FACE CREAM',
      subtitle: 'Barrier & Night Recovery',
      desc: 'Ceramide-complex rich cremes, Bakuchiol gentle anti-ageing creams, and multi-peptide barrier moisturizers.',
      cta: 'Build my face cream',
    },
    {
      id: 'cleanser',
      name: 'CLEANSER',
      subtitle: 'Gentle & Foaming Formulations',
      desc: 'Salicylic clarifying gel cleansers, hydrating oat cleansers, and double-cleanse cleansing balms.',
      cta: 'Build my cleanser',
    },
    {
      id: 'moisturiser',
      name: 'MOISTURISER',
      subtitle: 'Weightless Gel & Emulsions',
      desc: 'Oil-free water gels, cica-soothing daily lotions, and quick-absorbing matte finish daily hydrators.',
      cta: 'Build my moisturiser',
    },
    {
      id: 'sunscreen',
      name: 'SUNSCREEN',
      subtitle: 'In-Vivo Tested SPF 50+ PA++++',
      desc: 'Hybrid mineral/chemical broad-spectrum filters, zero white cast, sweat-resistant, lightweight fluid textures.',
      cta: 'Build my sunscreen',
    },
    {
      id: 'toner',
      name: 'TONER & ESSENCE',
      subtitle: 'Hydrating & Exfoliating Mists',
      desc: 'AHA/BHA clarifying toners, fermented rice essences, and soothing Centella barrier mists.',
      cta: 'Build my toner',
    },
    {
      id: 'face-oil',
      name: 'FACE OIL',
      subtitle: '100% Plant Lipids & Squalane',
      desc: 'Cold-pressed Rosehip, pure olive squalane, marula lipid drops, and antioxidant golden facial oils.',
      cta: 'Build my face oil',
    },
    {
      id: 'mask',
      name: 'FACE MASK',
      subtitle: 'Sheet Masks & Clay Peels',
      desc: 'French green clay detox masks, biocellulose peptide sheet masks, and overnight sleeping jelly masques.',
      cta: 'Build my face mask',
    },
    {
      id: 'eye-care',
      name: 'EYE CARE',
      subtitle: 'Caffeine & Peptide Concentrates',
      desc: 'Cooling roll-on caffeine serums, under-eye brightening peptides, and deep hydration eye cremes.',
      cta: 'Build my eye product',
    },
  ];

  return (
    <section id="skincare-categories" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
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
            WHAT ARE YOU <br />
            <span className="text-[#FF5722]">BUILDING?</span>
          </h2>

          <p
            className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Select your product category below to configure custom formulations, active percentages, texture viscosity, and airless packaging.
          </p>
        </div>

        {/* 9 Grid Cards — Sharp corners (rounded-none), Transparent box, No tag boxes, 100% Poppins font */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="p-7 sm:p-8 rounded-none border border-zinc-200 hover:border-black bg-transparent hover:bg-zinc-50/50 transition-all duration-300 flex flex-col justify-between text-left group shadow-xs hover:shadow-xl"
            >
              <div className="space-y-4">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#111111] group-hover:text-[#FF5722] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <div
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.subtitle}
                  </div>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mt-2.5 text-zinc-600 font-normal"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-5 rounded-none font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between bg-zinc-100 group-hover:bg-[#FF5722] text-zinc-900 group-hover:text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>{p.cta}</span>
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

export default SkincareProductCategoriesSection;
