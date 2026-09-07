import React from 'react';
import { motion } from 'motion/react';
import { Droplet, Sun, Sparkles, Layers, ArrowRight, ShieldCheck, Eye, Wind, RefreshCw, Feather } from 'lucide-react';

interface SkincareProductCategoriesSectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const SkincareProductCategoriesSection: React.FC<SkincareProductCategoriesSectionProps> = ({ onSelectCategory }) => {
  const products = [
    {
      id: 'serum',
      name: 'SERUM',
      subtitle: 'Active Target Concentrates',
      desc: 'Niacinamide 10%, Vitamin C 15%, Multi-molecular Hyaluronic Acid, Salicylic Acid 2%, and Matrixyl Peptides.',
      cta: 'Build my serum',
      icon: Droplet,
      tag: 'Bestseller Hero SKU',
    },
    {
      id: 'face-cream',
      name: 'FACE CREAM',
      subtitle: 'Barrier & Night Recovery',
      desc: 'Ceramide-complex rich cremes, Bakuchiol gentle anti-ageing creams, and multi-peptide barrier moisturizers.',
      cta: 'Build my face cream',
      icon: Layers,
      tag: 'High Repeat Retention',
    },
    {
      id: 'cleanser',
      name: 'CLEANSER',
      subtitle: 'Gentle & Foaming Formulations',
      desc: 'Salicylic clarifying gel cleansers, hydrating oat cleansers, and double-cleanse cleansing balms.',
      cta: 'Build my cleanser',
      icon: Wind,
      tag: 'Daily Essential',
    },
    {
      id: 'moisturiser',
      name: 'MOISTURISER',
      subtitle: 'Weightless Gel & Emulsions',
      desc: 'Oil-free water gels, cica-soothing daily lotions, and quick-absorbing matte finish daily hydrators.',
      cta: 'Build my moisturiser',
      icon: RefreshCw,
      tag: 'Universal Appeal',
    },
    {
      id: 'sunscreen',
      name: 'SUNSCREEN',
      subtitle: 'In-Vivo Tested SPF 50+ PA++++',
      desc: 'Hybrid mineral/chemical broad-spectrum filters, zero white cast, sweat-resistant, lightweight fluid textures.',
      cta: 'Build my sunscreen',
      icon: Sun,
      tag: 'Fastest Growing Category',
    },
    {
      id: 'toner',
      name: 'TONER & ESSENCE',
      subtitle: 'Hydrating & Exfoliating Mists',
      desc: 'AHA/BHA clarifying toners, fermented rice essences, and soothing Centella barrier mists.',
      cta: 'Build my toner',
      icon: Droplet,
      tag: 'Step-1 Hydration',
    },
    {
      id: 'face-oil',
      name: 'FACE OIL',
      subtitle: '100% Plant Lipids & Squalane',
      desc: 'Cold-pressed Rosehip, pure olive squalane, marula lipid drops, and antioxidant golden facial oils.',
      cta: 'Build my face oil',
      icon: Feather,
      tag: 'Luxury Glow',
    },
    {
      id: 'mask',
      name: 'FACE MASK',
      subtitle: 'Sheet Masks & Clay Peels',
      desc: 'French green clay detox masks, biocellulose peptide sheet masks, and overnight sleeping jelly masques.',
      cta: 'Build my face mask',
      icon: Sparkles,
      tag: 'Self-Care Ritual',
    },
    {
      id: 'eye-care',
      name: 'EYE CARE',
      subtitle: 'Caffeine & Peptide Concentrates',
      desc: 'Cooling roll-on caffeine serums, under-eye brightening peptides, and deep hydration eye cremes.',
      cta: 'Build my eye product',
      icon: Eye,
      tag: 'Targeted High-Margin',
    },
    {
      id: 'complete-range',
      name: 'COMPLETE SKINCARE RANGE',
      subtitle: 'Full 4 to 6 SKU Brand Routine',
      desc: 'Cleanser + Toner + Serum + Moisturizer + Sunscreen coordinated under a unified brand aesthetic.',
      cta: 'Build my range',
      icon: Layers,
      tag: 'Complete Turnkey',
      highlight: true,
    },
    {
      id: 'not-sure',
      name: 'NOT SURE',
      subtitle: 'Whitespace & Formulation Strategy',
      desc: 'Let our skincare product strategists analyze market demand and recommend your high-margin flagship hero SKU.',
      cta: 'Help me choose',
      icon: Sparkles,
      tag: 'Founder Strategy Call',
    },
  ];

  return (
    <section id="skincare-categories" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              02 — Product Direction
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              WHAT ARE YOU
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              BUILDING?
            </h3>
          </div>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Select your product category below to configure custom formulations, active percentages, texture viscosity, and airless packaging.
          </p>
        </div>

        {/* 11 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between text-left group ${
                p.highlight
                  ? 'bg-black text-white border-black shadow-lg'
                  : 'bg-[#FAFAFA] hover:bg-white border-zinc-200 hover:border-black shadow-2xs hover:shadow-xl'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                      p.highlight
                        ? 'bg-white/10 text-white'
                        : 'bg-white border border-zinc-200 text-[#111111] group-hover:bg-black group-hover:text-white group-hover:border-black'
                    }`}
                  >
                    <p.icon size={20} />
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                      p.highlight
                        ? 'bg-white/10 text-zinc-300 border border-white/10'
                        : 'bg-white border border-zinc-200 text-zinc-500'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>

                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-normal tracking-tight uppercase ${
                      p.highlight ? 'text-white' : 'text-[#111111] group-hover:text-black'
                    }`}
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {p.name}
                  </h3>
                  <div
                    className={`text-xs font-mono uppercase tracking-wider mt-1 ${
                      p.highlight ? 'text-zinc-400' : 'text-zinc-500'
                    }`}
                  >
                    {p.subtitle}
                  </div>
                  <p
                    className={`text-sm leading-relaxed mt-3 font-normal ${
                      p.highlight ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>

              <div
                className={`pt-6 mt-6 border-t ${
                  p.highlight ? 'border-white/15' : 'border-zinc-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelectCategory(p.name)}
                  className={`w-full py-3.5 px-5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between cursor-pointer active:scale-98 ${
                    p.highlight
                      ? 'bg-white hover:bg-zinc-100 text-black'
                      : 'bg-black hover:bg-zinc-800 text-white'
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkincareProductCategoriesSection;
