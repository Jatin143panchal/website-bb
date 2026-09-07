import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Droplets, Wind, Sun, CheckCircle2, ShieldCheck, Feather } from 'lucide-react';

interface SkincareTextureSectionProps {
  onBuildFormula: () => void;
}

interface TextureItem {
  id: string;
  name: string;
  absorption: string;
  finish: string;
  bestFor: string;
  desc: string;
  color: string;
}

const TEXTURES: TextureItem[] = [
  {
    id: 'lightweight',
    name: 'LIGHTWEIGHT FLUID',
    absorption: 'Instant (3–5 seconds)',
    finish: 'Natural matte / zero residue',
    bestFor: 'Niacinamide serums, BHA toners, liquid sunscreens',
    desc: 'Ultra-thin, fast-penetrating aqueous fluid that sinks into the skin without weight or tackiness. Ideal for layering under makeup.',
    color: '#0284C7',
  },
  {
    id: 'gel',
    name: 'WATER-BREAK GEL',
    absorption: 'Rapid (5–10 seconds)',
    finish: 'Dewy & cooling burst',
    bestFor: 'Hyaluronic acid hydrators, cica soothing gels, eye gels',
    desc: 'Refreshing hydrogel matrix that transforms into a quenching water veil on contact with skin heat. Zero oiliness.',
    color: '#06B6D4',
  },
  {
    id: 'cream',
    name: 'VELVET EMULSION CREAM',
    absorption: 'Medium (15–30 seconds)',
    finish: 'Silky soft-touch cushion',
    bestFor: 'Daily barrier moisturizers, brightening day creams',
    desc: 'Classic oil-in-water micro-emulsion delivering deep all-day hydration with a non-greasy cashmere dry-down.',
    color: '#3B82F6',
  },
  {
    id: 'rich',
    name: 'RICH BARRIER BUTTER',
    absorption: 'Gradual deep envelope',
    finish: 'Protective lipid barrier sheen',
    bestFor: 'Ceramide night creams, winter repair cremes, dry skin',
    desc: 'High-density lipid emulsion enriched with shea, kokum, and bio-fermented ceramides to seal damaged skin barriers overnight.',
    color: '#6366F1',
  },
  {
    id: 'oil',
    name: 'DRY BOTANICAL OIL',
    absorption: 'Fast slip (10–15 seconds)',
    finish: 'Luminous golden glow',
    bestFor: 'Pure squalane drops, rosehip face oils, glow elixirs',
    desc: 'Non-comedogenic lipid blend that cushions the skin without clogging pores or leaving a heavy film.',
    color: '#F59E0B',
  },
  {
    id: 'milky',
    name: 'MILKY ESSENCE',
    absorption: 'Rapid quenching',
    finish: 'Plump, glass-skin dewy finish',
    bestFor: 'Ceramide toners, barrier mists, gentle hydrating milks',
    desc: 'Ultra-fine micro-fluid suspension of ceramides and oat milk providing immediate post-cleanse barrier relief.',
    color: '#EC4899',
  },
  {
    id: 'balm',
    name: 'MELT-IN SOLID BALM',
    absorption: 'Transformative contact melt',
    finish: 'Silky cleansing oil or occlusive seal',
    bestFor: 'Cleansing balms, lip rescue treatments, overnight salves',
    desc: 'Solid balm that melts effortlessly upon finger contact into a luxurious oil slip that emulsifies cleanly with water.',
    color: '#8B5CF6',
  },
  {
    id: 'foam',
    name: 'MICRO-AIR FOAM',
    absorption: 'Rinse-off cleansing',
    finish: 'Clean, non-stripped skin feel',
    bestFor: 'Sulfate-free face washes, clarifying amino acid foams',
    desc: 'Dense, cushiony micro-bubble foam generated via self-foaming pump or amino acid surfactants preserving natural pH.',
    color: '#10B981',
  },
];

export const SkincareTextureSection: React.FC<SkincareTextureSectionProps> = ({ onBuildFormula }) => {
  const [activeTextureId, setActiveTextureId] = useState<string>('lightweight');

  const selectedTexture = TEXTURES.find((t) => t.id === activeTextureId) || TEXTURES[0];

  return (
    <section id="skincare-texture" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                08 — Sensory Texture Lab
              </span>
            </div>

            <div className="space-y-0 overflow-hidden">
              <h2
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                HOW SHOULD YOUR
              </h2>
              <h3
                className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
              >
                SKINCARE FEEL?
              </h3>
            </div>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Texture is 50% of your customer's repeat purchase decision. We engineer exact sensory dry-downs, water-break bursts, and velvety non-greasy finishes.
            </p>
          </div>

          <button
            type="button"
            onClick={onBuildFormula}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-md active:scale-95 cursor-pointer"
          >
            <span>Build My Formula</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 8 Textures Interactive Chips Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {TEXTURES.map((t) => {
            const isSelected = t.id === activeTextureId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTextureId(t.id)}
                className={`p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-between shadow-2xs ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-md scale-102'
                    : 'bg-[#FAFAFA] hover:bg-white border-zinc-200 text-zinc-700'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-white/10 text-white' : 'bg-white border border-zinc-200 text-[#111111]'
                  }`}
                >
                  <Droplets size={14} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider leading-tight" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {t.name.split(' ')[0]}
                </span>
                <span className={`text-[9px] font-mono mt-1 ${isSelected ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  {t.id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Texture Deep Dive Sensory Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTexture.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-2xl bg-black text-white border border-zinc-800 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                  SENSORY TEXTURE SPECIFICATION
                </span>
                <span className="text-xs font-mono text-zinc-400">{selectedTexture.name}</span>
              </div>

              <div>
                <h3
                  className="text-3xl sm:text-4xl font-normal text-white uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {selectedTexture.name}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mt-2 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {selectedTexture.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Absorption Speed</div>
                  <div className="text-xs font-medium text-white mt-0.5">{selectedTexture.absorption}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Skin Finish</div>
                  <div className="text-xs font-medium text-white mt-0.5">{selectedTexture.finish}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Layering</div>
                  <div className="text-xs font-medium text-white mt-0.5">Zero Pilling Tested</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                RECOMMENDED PRODUCT TYPES
              </div>
              <div className="text-sm text-zinc-200 font-medium" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {selectedTexture.bestFor}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/10 font-normal">
                Texture is formulated in pilot sample vials and couriered for founder tactile sign-off before production.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Photorealistic Lab Macro Texture Banner */}
        <div className="rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-xl relative">
          <div className="w-full aspect-[21/9] max-h-[380px] overflow-hidden relative">
            <img
              src="/assets/skincare/skincare_textures.jpg"
              alt="Sensory Skincare Textures — Cream, Gel, Oil and Balm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div className="text-left space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  TACTILE SENSORY LAB
                </span>
                <div className="text-sm sm:text-base font-normal uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Velvet Creams · Water-Break Gels · Pure Squalane Oils · Soothing Balms
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shrink-0">
                Zero Pilling Guaranteed
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkincareTextureSection;
