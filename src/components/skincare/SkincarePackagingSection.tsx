import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

interface SkincarePackagingSectionProps {
  onDesignSkincare: () => void;
}

interface PackagingFormat {
  id: string;
  name: string;
  subtitle: string;
  bestFor: string;
  finishes: string[];
  options: string[];
  desc: string;
}

const PACKAGING_FORMATS: PackagingFormat[] = [
  {
    id: 'airless',
    name: 'AIRLESS DISPENSER PUMPS',
    subtitle: 'Zero Active Oxidation',
    bestFor: 'Vitamin C serums, Retinols, peptide creams, SPF fluids',
    finishes: ['Matte Soft-Touch', 'Glossy Opal White', 'Frost Dual-Wall', 'Metallic Collar'],
    options: ['15ml Eye', '30ml Serum', '50ml Cream Vacuum Jar', '100ml Body'],
    desc: 'Vacuum piston pump mechanism prevents ambient oxygen from degrading sensitive actives like Vitamin C and retinoids.',
  },
  {
    id: 'dropper',
    name: 'PRECISION DROPPER BOTTLES',
    subtitle: 'Calibrated Micro-Pipettes',
    bestFor: 'Niacinamide serums, Hyaluronic drops, face oils, peeling solutions',
    finishes: ['Heavy Amber Glass', 'Frosted Matte Flint', 'Solid Opaque White', 'Anodized Gold'],
    options: ['15ml Target', '30ml Standard', '50ml Value', 'Push-Button Auto-Fill'],
    desc: 'Medical-grade glass pipettes with calibrated volumetric markings (0.5ml / 1.0ml) for exact active dosing.',
  },
  {
    id: 'pump',
    name: 'TREATMENT & LOTION PUMPS',
    subtitle: 'Controlled Dose Actuators',
    bestFor: 'Daily gel moisturizers, clarifying cleansers, barrier lotions',
    finishes: ['Satin Black', 'Natural Bamboo Collar', 'Gloss Clean White', 'Metallic Rim'],
    options: ['50ml Treatment', '100ml Essence', '150ml Cleanser', 'Foam Aerator'],
    desc: 'Lockable twist-down pumps with metered 0.2ml–1.5ml outputs engineered for leak-free courier transport.',
  },
  {
    id: 'tube',
    name: 'ALUMINUM & SUSTAINABLE PCR TUBES',
    subtitle: 'Hygienic Squeeze Barrier',
    bestFor: 'Daily SPF 50 sunscreens, gentle face washes, barrier salves',
    finishes: ['Aluminum Crimp', 'Soft-Touch Matte PCR', 'High-Gloss Metallic', 'Flip-Top Cap'],
    options: ['50ml Pocket SPF', '100ml Cleanser', '150ml Body', 'Needle-Nose Tip'],
    desc: 'Multi-layer EVOH barrier tubes shielding emulsions from light, air, and humidity breakdown.',
  },
  {
    id: 'jar',
    name: 'DOUBLE-WALL LUXURY JARS',
    subtitle: 'Velvet Creme & Mask Containers',
    bestFor: 'Ceramide night creams, cleansing balms, sleeping jelly masques',
    finishes: ['Heavy Glass Flint', 'Matte Ceramic Stone', 'Foil Stamped Lid', 'Tamper Seal Liner'],
    options: ['30g Eye Cream', '50g Face Cream', '100g Mask', '200g Body Butter'],
    desc: 'Weighted double-wall construction providing an authoritative luxury hand feel on bathroom vanities.',
  },
  {
    id: 'box',
    name: 'RIGID CARTONS & UNBOXING',
    subtitle: 'FSC Certified Luxury Boxes',
    bestFor: 'All flagship hero SKUs, launch sets, influencer PR gifting',
    finishes: ['Debossed Cotton', 'Raised Spot UV', 'Metallic Foil', 'Magnetic Slide-Out'],
    options: ['Tuck Box', 'Slide Drawer', 'Magnetic Book Box', 'Eco Kraft'],
    desc: 'Custom engineered dielines designed for memorable unboxing moments and secure drop protection.',
  },
];

export const SkincarePackagingSection: React.FC<SkincarePackagingSectionProps> = ({ onDesignSkincare }) => {
  const [selectedFormatId, setSelectedFormatId] = useState<string>('airless');
  const [selectedFinish, setSelectedFinish] = useState<string>('Matte Soft-Touch');

  const currentFormat = PACKAGING_FORMATS.find((f) => f.id === selectedFormatId) || PACKAGING_FORMATS[0];

  return (
    <section id="skincare-packaging" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FAFAFA] text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                09 — Packaging Architecture
              </span>
            </div>

            <div className="space-y-0 overflow-hidden">
              <h2
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                THE FORMULA IS WHAT'S INSIDE.
              </h2>
              <h3
                className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
              >
                THE PACKAGING IS WHAT THEY FIRST SEE.
              </h3>
            </div>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed pt-2"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Protect active stability with airless vacuum dispensers, heavy amber droppers, and tactile unboxing cartons.
            </p>
          </div>

          <button
            type="button"
            onClick={onDesignSkincare}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer shadow-sm"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>Design My Skincare</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Packaging Format Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PACKAGING_FORMATS.map((fmt) => {
            const isSelected = fmt.id === selectedFormatId;
            return (
              <button
                key={fmt.id}
                type="button"
                onClick={() => {
                  setSelectedFormatId(fmt.id);
                  setSelectedFinish(fmt.finishes[0]);
                }}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-800'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase ${isSelected ? 'text-zinc-400' : 'text-zinc-400'}`}>
                    {fmt.id}
                  </span>
                  <div className="text-xs sm:text-sm font-normal uppercase leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {fmt.name.split(' ')[0]} {fmt.name.split(' ')[1] || ''}
                  </div>
                </div>
                <span className={`text-[10px] font-mono mt-3 truncate ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {fmt.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Format Spotlight Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Spec Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 border-b border-zinc-100 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                ACTIVE PACKAGING SPECIFICATION
              </span>
              <h3
                className="text-2xl sm:text-3xl font-normal text-[#111111] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {currentFormat.name}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {currentFormat.desc}
              </p>
            </div>

            {/* Capacities */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                AVAILABLE CAPACITIES
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFormat.options.map((opt) => (
                  <span key={opt} className="px-3.5 py-1.5 rounded-full bg-zinc-100 text-xs text-zinc-800 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {opt}
                  </span>
                ))}
              </div>
            </div>

            {/* Finishes Selector */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                SURFACE FINISHES
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFormat.finishes.map((fn) => {
                  const isChecked = selectedFinish === fn;
                  return (
                    <button
                      key={fn}
                      type="button"
                      onClick={() => setSelectedFinish(fn)}
                      className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-black text-white shadow-xs'
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      {fn}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Technical Protection Summary */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-black text-white space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              FORMULA BIO-PROTECTION
            </div>
            
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-white shrink-0 mt-0.5" />
                <span>Zero active oxidation and UV light penetration testing.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-white shrink-0 mt-0.5" />
                <span>Oil-resistant screen printing that won't smudge or peel.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-white shrink-0 mt-0.5" />
                <span>100% Leak and drop-tested for direct courier shipping.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 font-mono">
              Selected: {currentFormat.name} ({selectedFinish})
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkincarePackagingSection;
