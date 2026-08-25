import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Droplets, Pill, ShieldCheck, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const industries = [
    {
      id: 0,
      name: 'Luxury Perfume',
      desc: 'Formulation, premium crystal bottles, French atomizers, magnet caps, and bespoke packaging.',
      ingredients: ['French Essential Oils', 'Custom Molecule Blends', 'SDA 40B Carrier Matrix'],
      accent: 'from-amber-500/10 to-orange-500/5',
      icon: FlameIcon,
      productName: 'EAU DE LUXE',
      productImage: '/assets/perfume.webp'
    },
    {
      id: 1,
      name: 'Modern Ayurveda',
      desc: 'Bridging ancient alchemy with modern compliance. GMP laboratory sourcing and clean labeling.',
      ingredients: ['Organic Adaptogens', 'Cold-Pressed Herbs', 'Bio-Active Phytoextracts'],
      accent: 'from-emerald-500/10 to-teal-500/5',
      icon: Leaf,
      productName: 'VEDA ELIXIR',
      productImage: '/assets/ayurveda.webp'
    },
    {
      id: 2,
      name: 'Cosmetics',
      desc: 'High-pigment makeup, serums, matte lip glosses, custom foundations, and elegant tubes.',
      ingredients: ['Hyaluronic Spheres', 'Organic Phyto-Pigments', 'Matte Finish Sealers'],
      accent: 'from-rose-500/10 to-pink-500/5',
      icon: Droplets,
      productName: 'MATTE COUTURE',
      productImage: '/assets/cosmetics.webp'
    },
    {
      id: 3,
      name: 'Nutraceuticals',
      desc: 'Collagen matrices, biotic gummies, performance powders, clean packaging, and FSSAI audits.',
      ingredients: ['Marine Collagen Peptides', 'Lactobacillus Probiotics', 'Complex Amino Blends'],
      accent: 'from-purple-500/10 to-indigo-500/5',
      icon: Pill,
      productName: 'HYPER GLOW',
      productImage: '/assets/nutraceuticals.webp'
    
    }
  ];

  return (
    <section id="industries-section" className="py-24 md:py-32 px-6 bg-[#FAFAFA] overflow-hidden relative border-t border-zinc-200 font-sans">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D97706]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="max-w-4xl mb-16 md:mb-24 space-y-4 text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
            THE STRATEGIC MARKETS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7.5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
            Built Across <br />
            <span className="text-[#D97706]">High-Growth Categories</span>
          </h2>
        </div>

        {/* Categories Tab Layout for rich desktop / mobile view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Area: 6 Industry Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              const isActive = activeCategory === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveCategory(ind.id)}
                  className={`w-full text-left p-6 rounded-[28px] border transition-all duration-300 flex items-center justify-between font-sans ${
                    isActive 
                      ? 'bg-[#111111] text-white border-[#111111] shadow-md scale-[1.01]' 
                      : 'bg-white text-[#111111] border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-350 ${isActive ? 'bg-[#D97706] text-white' : 'bg-zinc-100 text-[#D97706]'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-wider text-zinc-400 block uppercase">
                        CATEGORY 0{idx + 1}
                      </span>
                      <span className="text-base font-black tracking-tight uppercase block leading-none mt-1">
                        {ind.name}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#D97706]' : 'text-zinc-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Area: Premium interactive product design blueprint sheet */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[40px] border-2 border-[#D97706]/10 p-8 md:p-12 shadow-sm h-full flex flex-col justify-between overflow-hidden relative"
              >
                <div className="space-y-8">
                  
                  {/* Category Card Header */}
                  <div className="flex justify-between items-center border-b border-zinc-150 pb-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-[#D97706] tracking-widest block">
                        LAUNCH BLUEPRINT
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111111] leading-none">
                        {industries[activeCategory].name}
                      </h3>
                    </div>
                    
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                      [ SECURE FORMULA ]
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#666666] font-bold leading-relaxed max-w-xl">
                    {industries[activeCategory].desc}
                  </p>

                  {/* Formulations specifications pure CSS visual */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    
                    {/* Ingredients detail */}
                    <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-zinc-250">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">
                        CERTIFIED INGREDIENT MATRIX
                      </p>
                      <ul className="space-y-2">
                        {industries[activeCategory].ingredients.map((ing, k) => (
                          <li key={k} className="text-xs font-bold text-[#111111] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#D97706] rounded-full" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Product Image Container */}
                    <div className="bg-[#FAFAFA] rounded-2xl p-4 border border-zinc-200 relative overflow-hidden flex flex-col justify-between items-center text-center shadow-inner">
                      <div className={`absolute inset-0 bg-gradient-to-br ${industries[activeCategory].accent} opacity-40`} />
                      
                      {/* Product Image */}
                      <div className="relative z-10 w-full h-48 flex items-center justify-center">
                        <img 
                          src={industries[activeCategory].productImage} 
                          alt={industries[activeCategory].productName}
                          className="w-full h-full object-contain rounded-xl"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="14" fill="%23999999" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>

                      <span className="relative z-10 text-[9px] font-black text-zinc-400 tracking-widest uppercase mt-2">
                        PRODUCT: {industries[activeCategory].productName}
                      </span>
                    </div>

                  </div>

                </div>

                {/* Footer Section */}
                <div className="mt-12 pt-6 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 font-sans">
                  <span className="text-xs font-black text-[#666666] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D97706] animate-spin [animation-duration:10s]" />
                    GMP & ISO compliance audited lab network
                  </span>

                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto text-center px-8 py-4.5 bg-[#D97706] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-sm leading-none"
                  >
                    EXPLORE INDUSTRIES
                    <ArrowRight size={16} className="text-white" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

// Simple visual components
function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}