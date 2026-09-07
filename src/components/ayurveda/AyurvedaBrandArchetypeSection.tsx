import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Check, Compass, Eye, Shield, Leaf, Heart } from 'lucide-react';

interface AyurvedaBrandArchetypeSectionProps {
  onSelectArchetype: (archetypeId: string, label: string) => void;
}

export const AyurvedaBrandArchetypeSection: React.FC<AyurvedaBrandArchetypeSectionProps> = ({ onSelectArchetype }) => {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('modern-ayurveda');

  const archetypes = [
    {
      id: 'modern-ayurveda',
      title: 'MODERN AYURVEDA',
      tagline: 'Clean. Contemporary. Premium.',
      desc: 'Minimalist amber packaging, sans-serif typography, fast-absorbing textures, and clean ingredient transparency.',
      aesthetic: 'Matte glass, satin gold accents, off-white cotton labels, elegant modern luxury.',
      icon: Sparkles,
    },
    {
      id: 'clinical-botanical',
      title: 'CLINICAL BOTANICAL',
      tagline: 'Ingredient-led. Science-inspired.',
      desc: 'Dermatologist backed, percentage-declared botanical actives, calibrated pipettes, and clinical trial results.',
      aesthetic: 'Apothecary flint vials, clinical white boxes, metric callouts, high-efficacy derma appeal.',
      icon: Eye,
    },
    {
      id: 'heritage-ayurveda',
      title: 'HERITAGE AYURVEDA',
      tagline: 'Traditional. Authentic. Rooted.',
      desc: 'Sanskrit shloka storytelling, classical Taila Paka Vidhi references, brass/copper foil accents, and pure Vedic purity.',
      aesthetic: 'Heavy dark amber flacons, embossed mandala crests, warm terracotta and parchment tones.',
      icon: Shield,
    },
    {
      id: 'premium-wellness',
      title: 'PREMIUM WELLNESS',
      tagline: 'Elevated. Lifestyle-focused.',
      desc: 'Holistic self-care rituals, mood elevation, adaptogenic stress-relief, and high-end vanity shelf aesthetic.',
      aesthetic: 'Frosted neutral bottles, warm sand packaging, sensory unboxing experience.',
      icon: Heart,
    },
    {
      id: 'natural-botanical',
      title: 'NATURAL / BOTANICAL',
      tagline: 'Minimal. Earth-inspired. Ingredient-focused.',
      desc: 'Raw unrefined lipids, 100% plant hydrosols, biodegradable sugarcane cartons, and zero-waste ethos.',
      aesthetic: 'Unbleached Kraft cardstock, forest green foils, clean earth-tone PCR tubes.',
      icon: Leaf,
    },
    {
      id: 'not-sure',
      title: 'NOT SURE YET',
      tagline: 'Help me decide.',
      desc: 'Explore moodboards, competitive whitespace maps, and customer persona archetypes with our creative directors.',
      aesthetic: 'Full creative positioning workshop and tailored design consultation.',
      icon: Compass,
    },
  ];

  const handlePick = (id: string, title: string) => {
    setSelectedArchetype(id);
    onSelectArchetype(id, title);
  };

  return (
    <section id="ayurveda-archetype" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              13 — BRAND ARCHETYPE &amp; MOOD
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHAT SHOULD YOUR BRAND FEEL LIKE?
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Your brand archetype guides every formulation note, bottle selection, color palette, and marketing message we build for you.
          </p>
        </div>

        {/* 6 Archetype Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archetypes.map((arch, idx) => {
            const isSelected = selectedArchetype === arch.id;
            return (
              <motion.div
                key={arch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onClick={() => handlePick(arch.id, arch.title)}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                  isSelected
                    ? 'bg-white border-black ring-1 ring-black shadow-sm'
                    : 'bg-white/80 hover:bg-white border-zinc-200 hover:border-zinc-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800"
                    >
                      <arch.icon size={20} />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                      Archetype {idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal uppercase text-[#111111] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {arch.title}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      {arch.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2.5 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {arch.desc}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-[11px] text-zinc-600 font-mono">
                    <span className="font-semibold text-[#111111] block mb-0.5 uppercase tracking-wider font-mono">Visual Identity:</span>
                    {arch.aesthetic}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    Select Direction
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-400'
                    }`}
                  >
                    {isSelected ? <Check size={14} strokeWidth={2.5} /> : <ArrowRight size={13} />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaBrandArchetypeSection;
