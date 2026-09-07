import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, Layers, Sun, Wind, ArrowRight, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

interface SkincareRoutineBuilderSectionProps {
  onTurnIntoBrand: (routine: { cleanse: string; treat: string; hydrate: string; protect: string }) => void;
}

export const SkincareRoutineBuilderSection: React.FC<SkincareRoutineBuilderSectionProps> = ({ onTurnIntoBrand }) => {
  const [selectedCleanse, setSelectedCleanse] = useState<string>('Salicylic Gel Cleanser');
  const [selectedTreat, setSelectedTreat] = useState<string>('15% Vitamin C Glow Serum');
  const [selectedHydrate, setSelectedHydrate] = useState<string>('5-Ceramide Barrier Cream');
  const [selectedProtect, setSelectedProtect] = useState<string>('Invisible SPF 50+ Fluid');

  const steps = [
    {
      step: '01',
      key: 'cleanse',
      label: 'CLEANSE',
      icon: Wind,
      current: selectedCleanse,
      setter: setSelectedCleanse,
      options: [
        'Salicylic Gel Cleanser',
        'Hydrating Oat Milk Wash',
        'Melt-In Cleansing Balm',
        'Gentle Amino Foam',
      ],
    },
    {
      step: '02',
      key: 'treat',
      label: 'TREAT',
      icon: Droplet,
      current: selectedTreat,
      setter: setSelectedTreat,
      options: [
        '15% Vitamin C Glow Serum',
        '10% Niacinamide + Zinc Serum',
        '2% Hyaluronic Acid Drops',
        '2% Retinoid Night Serum',
      ],
    },
    {
      step: '03',
      key: 'hydrate',
      label: 'HYDRATE',
      icon: Layers,
      current: selectedHydrate,
      setter: setSelectedHydrate,
      options: [
        '5-Ceramide Barrier Cream',
        'Oil-Free Water Gel',
        'Cica Soothing Emulsion',
        'Pure Squalane Face Oil',
      ],
    },
    {
      step: '04',
      key: 'protect',
      label: 'PROTECT',
      icon: Sun,
      current: selectedProtect,
      setter: setSelectedProtect,
      options: [
        'Invisible SPF 50+ Fluid',
        'Tinted Mineral Sunscreen',
        'Matte Daily Sun Gel',
        'Ceramide UV Defense Milk',
      ],
    },
  ];

  return (
    <section id="skincare-routine-builder" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white text-[#111111] select-none border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              12 — Routine Architecture
            </span>
          </div>

          <div className="space-y-0 overflow-hidden">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              WHAT ROUTINE ARE YOU
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
            Click each step below to assemble your coordinated 4-step daily skincare ritual. We engineer the textures to layer seamlessly without pilling.
          </p>
        </div>

        {/* 4 Interactive Routine Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((st) => (
            <div
              key={st.key}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAFAFA] border border-zinc-200 shadow-xs space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-zinc-500">
                    STEP {st.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-[#111111] flex items-center justify-center">
                    <st.icon size={16} />
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-normal tracking-tight text-[#111111] uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {st.label}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500 mt-0.5 truncate">
                    Selected: {st.current}
                  </div>
                </div>

                {/* Option Radios */}
                <div className="space-y-2 pt-1">
                  {st.options.map((opt) => {
                    const isSelected = st.current === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => st.setter(opt)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-white border-black text-[#111111] shadow-xs font-medium'
                            : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600 font-normal'
                        }`}
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      >
                        <span className="truncate pr-2">{opt}</span>
                        {isSelected && <CheckCircle2 size={13} className="text-black shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200 text-[10px] font-mono text-zinc-400">
                Layer Step {st.step}
              </div>
            </div>
          ))}
        </div>

        {/* Live Result Routine Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-black text-white border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>COORDINATED FORMULATION MATRIX</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-normal text-white uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOU'VE BUILT A COMPLETE 4-STEP ROUTINE.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              {selectedCleanse} → {selectedTreat} → {selectedHydrate} → {selectedProtect}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onTurnIntoBrand({
                cleanse: selectedCleanse,
                treat: selectedTreat,
                hydrate: selectedHydrate,
                protect: selectedProtect,
              })
            }
            className="px-8 py-5 rounded-full bg-white hover:bg-zinc-100 text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shrink-0 shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Turn This Into A Brand</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SkincareRoutineBuilderSection;
