import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const EcosystemSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    { name: 'Product Validation', desc: 'Pre-launch validation metrics.' },
    { name: 'Manufacturer Sourcing', desc: 'Access to verified lab facilities.' },
    { name: 'Packaging', desc: 'Bespoke structural box templates.' },
    { name: 'Branding', desc: 'Logos, storytelling, and style sheets.' },
    { name: 'Trademark', desc: 'Class filing and registry securing.' },
    { name: 'GST', desc: 'Fast local and central registration.' },
    { name: 'Compliance', desc: 'Legal clearances and certificates.' },
    { name: 'Photography', desc: 'Bespoke digital media assets.' },
    { name: 'Website', desc: 'Shopify checkout storefront craft.' },
    { name: 'Marketplace', desc: 'Amazon, Nykaa, and Flipkart setup.' },
    { name: 'Distribution', desc: 'Modern retail & trade placement.' },
    { name: 'Growth', desc: 'ROAS optimization & high-scale plan.' }
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden relative border-t border-zinc-200 font-sans">
      
      {/* Dynamic background lights */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[10%] w-60 h-60 bg-[#D97706]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] left-[5%] w-80 h-80 bg-zinc-100 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-left mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
            THE INTEGRATED SERVICE CORE
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
            Everything Required To Launch <br />
            <span className="text-[#D97706]">Under One Roof</span>
          </h2>
          <p className="text-lg text-[#666666] font-bold max-w-xl">
            Skip the fragmentation of hiring multiple agencies. This is a single, bulletproof execution ecosystem handling every step from molecule to market.
          </p>
        </div>

        {/* Modular Presentation: Wheel Layout (Desktop) & Grid Layout (Mobile) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          
          {/* Left/Middle Column (Desktop wheel view, on small screens hidden, fallback to nice grid) */}
          <div className="xl:col-span-8 flex justify-center items-center py-8 relative">
            
            {/* Desktop Wheel structure (hidden below xl, shown at xl) */}
            <div className="hidden xl:flex w-[600px] h-[600px] relative items-center justify-center rounded-full border border-zinc-100 bg-zinc-50/20">
              
              {/* Outer boundary circles */}
              <div className="absolute w-[530px] h-[530px] rounded-full border border-zinc-200/50 border-dashed" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-[#D97706]/10 animate-pulse" />

              {/* Central Core logo element */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                className="absolute w-36 h-36 rounded-full bg-[#111111] border-[4px] border-[#D97706] shadow-[0_20px_50px_rgba(217,119,6,0.15)] flex flex-col items-center justify-center text-center p-4 z-20 group cursor-pointer"
              >
                {/* Visual core content */}
                <div className="absolute inset-0 bg-[#D97706] scale-0 rounded-full group-hover:scale-100 transition-transform duration-500 -z-0" />
                <div className="z-10 group-hover:rotate-12 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-[#D97706] group-hover:text-white" />
                </div>
                <span className="text-[10px] font-black tracking-widest text-white uppercase mt-1 z-10 group-hover:text-[#111111]">
                  BANEGA
                </span>
                <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-wider z-10 group-hover:text-[#111111]">
                  BRAND CORE
                </span>
              </motion.div>

              {/* Surrounding Nodes mapped radially around the circle */}
              {services.map((srv, idx) => {
                const angle = (idx * 360) / services.length;
                const r = 240; // Rad radius in pixels
                const x = r * Math.cos((angle * Math.PI) / 180);
                const y = r * Math.sin((angle * Math.PI) / 180);

                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={idx}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="absolute z-10"
                  >
                    {/* Glowing dynamic connecting line to center when hovered */}
                    {isHovered && (
                      <div 
                        style={{
                          transform: `rotate(${angle + 180}deg)`,
                          transformOrigin: '0% 50%',
                          width: `${r}px`
                        }}
                        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-[#D97706] to-transparent -z-10" 
                      />
                    )}

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`px-4.5 py-3 rounded-2xl border text-center transition-all cursor-pointer whitespace-nowrap select-none font-sans ${
                        isHovered 
                          ? 'bg-[#111111] text-white border-[#111111] shadow-md scale-105' 
                          : 'bg-white text-[#111111] border-zinc-200 shadow-sm'
                      }`}
                    >
                      <span className="font-black text-xs uppercase tracking-wider block">
                        {srv.name}
                      </span>
                    </motion.div>
                  </div>
                );
              })}

            </div>

            {/* Mobile / Tablet Friendly Grid Fallback (shown below xl) */}
            <div className="xl:hidden w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FAFAFA] hover:bg-white hover:border-[#D97706]/40 rounded-2xl border border-zinc-200 shadow-sm transition-all duration-350 group"
                >
                  <div className="flex gap-2 items-center mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    <span className="text-[10px] font-black text-zinc-400 group-hover:text-[#D97706] tracking-wider uppercase">
                      MODULE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-black text-xs uppercase text-[#111111] group-hover:text-[#D97706] tracking-widest leading-none mt-2">
                    {srv.name}
                  </h4>
                  <p className="text-[10px] text-[#666666] font-semibold mt-1 leading-normal">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Console showing hovered/selected service summary (Desktop) or core intro */}
          <div className="xl:col-span-4 flex flex-col justify-between h-full bg-[#FAFAFA] text-[#111111] border border-zinc-200 rounded-[36px] p-8 md:p-10 shadow-sm min-h-[360px]">
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase text-[#D97706] tracking-widest block">
                INTEGRATION MATRIX console
              </span>

              {hoveredIdx !== null ? (
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                    {services[hoveredIdx].name}
                  </h3>
                  <p className="text-sm font-semibold text-[#666666] leading-relaxed">
                    {services[hoveredIdx].desc}
                  </p>
                  <p className="text-xs text-zinc-400 font-extrabold leading-normal">
                    Fully automated with 100% legal backing, ensuring your brand builds on safe foundations.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 font-sans">
                  <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                    INTEGRATED SYSTEM
                  </h3>
                  <p className="text-sm font-semibold text-[#666666] leading-relaxed">
                    Hover over any service in the wheel to inspect its detail core framework.
                  </p>
                  <p className="text-xs text-zinc-400 font-bold leading-relaxed">
                    We manage formulation, trademark, production licensing, and retail expansion under a single coordinate map.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-200 mt-8 flex items-center justify-between text-[10px] uppercase font-black text-zinc-400 tracking-widest font-sans">
              <span>ESTM 2025 BANEGA</span>
              <span className="text-[#D97706] flex items-center gap-1.5">
                SYSTEM VERIFY <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
