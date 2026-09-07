import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Leaf, Beaker, Tag, Rocket, HelpCircle, Check } from 'lucide-react';

interface AyurvedaStageSectionProps {
  onSelectStage: (stageId: string, label: string) => void;
}

export const AyurvedaStageSection: React.FC<AyurvedaStageSectionProps> = ({ onSelectStage }) => {
  const [selectedId, setSelectedId] = useState<string>('idea');

  const stages = [
    {
      id: 'idea',
      icon: Lightbulb,
      title: 'JUST AN IDEA',
      subtitle: 'I know what I want to build.',
      desc: 'You have a visionary product concept or target customer problem. We formulate, design, and build everything from scratch.',
      badge: 'Most Common',
    },
    {
      id: 'ingredient',
      icon: Leaf,
      title: 'INGREDIENT / CONCEPT READY',
      subtitle: 'I already have ingredients or a concept.',
      desc: 'You know your hero botanicals (e.g. Kumkumadi, Ashwagandha) or formulation vision. We turn it into commercial stability and packaging.',
      badge: 'Formulation Focus',
    },
    {
      id: 'product',
      icon: Beaker,
      title: 'PRODUCT READY',
      subtitle: 'I already have the product / formula.',
      desc: 'You have an approved lab sample or home recipe. We scale it into GMP-certified production, amber packaging, and regulatory clearance.',
      badge: 'Scale Phase',
    },
    {
      id: 'brand',
      icon: Tag,
      title: 'BRAND READY',
      subtitle: 'I need manufacturing + launch.',
      desc: 'Your brand name, identity and positioning are ready. You need certified AYUSH batch manufacturing and marketplace listing execution.',
      badge: 'Production Phase',
    },
    {
      id: 'launch',
      icon: Rocket,
      title: 'READY TO LAUNCH',
      subtitle: 'I need the complete execution.',
      desc: 'You want end-to-end acceleration: formulation + custom packaging + Shopify DTC + Amazon / Nykaa onboarding within 45–90 days.',
      badge: 'Turnkey Fastrack',
    },
    {
      id: 'unsure',
      icon: HelpCircle,
      title: 'NOT SURE',
      subtitle: 'Help me figure it out.',
      desc: 'You want an honest, technical feasibility review with our Ayurvedic formulation and brand strategy directors.',
      badge: 'Strategy Session',
    },
  ];

  const handlePick = (id: string, title: string) => {
    setSelectedId(id);
    onSelectStage(id, title);
  };

  return (
    <section id="ayurveda-stage" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              04 — WHAT STAGE ARE YOU AT?
            </span>
          </div>

          <h2
            className="text-[clamp(2.2rem,4.2vw,3.8rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            WHERE ARE YOU IN YOUR JOURNEY?
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Whether you only have an idea in your head or already have an approved recipe, we meet you exactly where you are.
          </p>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((st, idx) => {
            const isSelected = selectedId === st.id;
            return (
              <motion.div
                key={st.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onClick={() => handlePick(st.id, st.title)}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                  isSelected
                    ? 'bg-[#FAFAFA] border-black ring-1 ring-black shadow-sm'
                    : 'bg-white hover:bg-[#FAFAFA] border-zinc-200 hover:border-zinc-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-800"
                    >
                      <st.icon size={20} />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                      {st.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-normal uppercase text-[#111111] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {st.title}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">
                      {st.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2.5 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {st.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    Select Stage
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

export default AyurvedaStageSection;
