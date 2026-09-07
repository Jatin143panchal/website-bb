import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, X, ArrowRight, ShieldCheck, Flame, Cpu, Leaf } from 'lucide-react';

export const AyurvedaTraditionModernSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'tradition' | 'modern'>('both');

  return (
    <section id="ayurveda-tradition-modern" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#059669]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#059669]">
              08 — TRADITION × MODERN PRODUCT
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ROOTED IN TRADITION. <br />
            <span className="text-[#059669] italic">DESIGNED FOR TODAY.</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Most Ayurvedic products in India suffer from outdated 1990s packaging and muddy textures. We engineer brands that preserve genuine Vedic authenticity with contemporary shelf-stopping luxury.
          </p>
        </div>

        {/* Comparative Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: ANCIENT TRADITION (Root) */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-[#FAF8F5] border border-[#E8DFC0] space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFE8D6] text-[#78350F] text-xs font-bold uppercase tracking-wider">
                  <Leaf size={14} className="text-[#059669]" />
                  <span>THE FOUNDATION</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">5,000-Year Heritage</span>
              </div>

              <div>
                <h3
                  className="text-3xl font-bold text-[#2A221B]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  TRADITION
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Classical botanical principles and time-tested extraction methods.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {[
                  { title: 'Vedic Herbology & Dosha Balance', desc: 'Sanskrit textual decoction processes (Taila Paka Vidhi, Kwatha, Lepas).' },
                  { title: 'Ethical Botanical Sourcing', desc: 'Wildcrafted and organic smallholder Indian farm harvesting.' },
                  { title: 'Whole-Plant Synergy', desc: 'Combining multiple complementary herbs to amplify biological assimilation.' },
                  { title: 'Natural Pure Lipids', desc: 'Cold-pressed sesame, coconut, mustard, and therapeutic unrefined seed oils.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-[#E5DDD2] space-y-1">
                    <div className="text-sm font-bold text-[#111111] flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-zinc-500 pl-3.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5DDD2] text-xs font-mono uppercase tracking-wider text-[#78350F] font-bold">
              Pure Authentic Heritage
            </div>
          </div>

          {/* Column 2: MODERN BRAND (Today's Execution) */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-[#1C1814] text-white border border-[#3A3127] space-y-6 text-left flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#059669] text-xs font-bold uppercase tracking-wider border border-white/10">
                  <Cpu size={14} />
                  <span>THE EXECUTION</span>
                </div>
                <span className="text-xs font-mono text-zinc-400">2026 Ready</span>
              </div>

              <div>
                <h3
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  MODERN BRAND
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                  Clean cosmetic chemistry, tactile luxury packaging, and digital conversion.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {[
                  { title: 'Modern Formulation & Texture', desc: 'Quick-absorbing, non-sticky, non-greasy textures suitable for daily wear under makeup.' },
                  { title: 'Contemporary Packaging Aesthetics', desc: 'Heavy amber flint glass, matte droppers, minimal serif typography, zero 1990s clutter.' },
                  { title: 'Clinical Testing & AYUSH Stability', desc: 'Dermatologist tested, heavy metal tested, microbial screening, and 24-month stability.' },
                  { title: 'Digital-First Flagship Store', desc: 'High-speed Shopify store, dosha diagnostics quiz, Meta ads, and Amazon Brand Registry.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-zinc-300 pl-3.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-wider text-[#059669] font-bold">
              Contemporary Commercial Power
            </div>
          </div>

        </div>

        {/* The Big Highlight Result Banner with Photorealistic Collection Image */}
        <div className="rounded-[32px] overflow-hidden bg-gradient-to-r from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] border border-[#E0D7CA] text-center shadow-lg">
          <div className="w-full aspect-[21/9] max-h-[440px] overflow-hidden relative">
            <img
              src="/assets/ayurveda/ayurveda_collection.jpg"
              alt="Modern Ayurvedic Collection — Real Formulation & Packaging"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-white space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97706] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                TRADITION × CONTEMPORARY PACKAGING
              </span>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#059669]">
              THE RESULT?
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1A1613] tracking-tight max-w-4xl mx-auto"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A PRODUCT THAT FEELS AUTHENTIC WITHOUT LOOKING OLD-FASHIONED.
            </h3>
            <p className="text-sm text-zinc-600 max-w-2xl mx-auto font-normal">
              We help you build an Ayurvedic brand that looks at home on premium bathroom vanities, Sephora shelves, and high-converting Instagram reels.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaTraditionModernSection;
