import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

interface AyurvedaPackagingSectionProps {
  onDesignProduct: () => void;
}

export const AyurvedaPackagingSection: React.FC<AyurvedaPackagingSectionProps> = ({ onDesignProduct }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('bottle');
  const [comparisonMode, setComparisonMode] = useState<'modern' | 'traditional'>('modern');

  const formats = [
    {
      id: 'bottle',
      name: 'APOTHECARY BOTTLE',
      subtitle: 'Heavy Amber / Flint Glass',
      specs: '30ml, 50ml, 100ml, 200ml UV protection flacons',
      bestFor: 'Taila oils, hair elixirs, clarifying tonics, body washes',
      finishes: 'Matte frosted, amber tint, embossed base, pump or dropper neck',
    },
    {
      id: 'jar',
      name: 'DOUBLE-WALL LUXURY JAR',
      subtitle: 'Glass & Ceramic Finishes',
      specs: '50g, 100g, 200g wide-mouth cream jars',
      bestFor: 'Night cremes, ubtan lepas, body butters, herbal masks',
      finishes: 'Bamboo lid, gold hot-stamping, matte stone texture, tamper seal',
    },
    {
      id: 'dropper',
      name: 'PRECISION DROPPER',
      subtitle: 'Calibrated Glass Pipettes',
      specs: '15ml, 30ml, 50ml micro-dosing droppers',
      bestFor: 'Kumkumadi facial elixirs, active botanical serums, scalp drops',
      finishes: 'Gold/bronze anodized aluminum collar, matte black nitrile bulb',
    },
    {
      id: 'tube',
      name: 'SUSTAINABLE TUBES',
      subtitle: 'Recyclable Aluminum & PCR',
      specs: '50ml, 100ml, 150ml squeeze tubes',
      bestFor: 'Gentle facial cleansers, foot salves, herbal hand creams',
      finishes: 'Retro aluminum crimp, earth-tone matte soft-touch, octagonal cap',
    },
    {
      id: 'box',
      name: 'RIGID UNBOXING BOX',
      subtitle: 'FSC Certified Luxury Cartons',
      specs: 'Custom die-cut slide-out or magnetic book boxes',
      bestFor: 'Gift sets, hero flagship SKUs, launch collection kits',
      finishes: 'Textured unbleached Kraft, gold foil embossing, velvet insert',
    },
    {
      id: 'label',
      name: 'LABEL & FINISHING',
      subtitle: 'Waterproof Tactile Cotton Paper',
      specs: 'High-adhesion oil-resistant synthetic or cotton stock',
      bestFor: 'All botanical products exposed to oils and shower moisture',
      finishes: 'Debossing, raised spot UV, micro-etched Sanskrit motifs, metallic foil',
    },
  ];

  const currentFormat = formats.find((f) => f.id === selectedFormat) || formats[0];

  return (
    <section id="ayurveda-packaging" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                09 — PACKAGING ARCHITECTURE
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              AYURVEDA DOESN'T <br />
              <span className="font-light text-zinc-500 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                HAVE TO LOOK OLD.
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Tactile materials, UV-shielding pharmaceutical glass, and bespoke unboxing cartons that communicate luxury before the bottle is even opened.
            </p>
          </div>

          <button
            type="button"
            onClick={onDesignProduct}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-sm active:scale-95 cursor-pointer"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>DESIGN MY PRODUCT</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {formats.map((fmt) => {
            const isSelected = fmt.id === selectedFormat;
            return (
              <button
                key={fmt.id}
                type="button"
                onClick={() => setSelectedFormat(fmt.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-white hover:bg-[#FAFAFA] border-zinc-200 text-[#111111]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono uppercase ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      {fmt.id}
                    </span>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div className="text-xs sm:text-sm font-normal uppercase tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {fmt.name}
                  </div>
                </div>

                <div className={`text-[10px] font-mono mt-3 truncate ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {fmt.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Format Spotlight + Traditional vs Modern Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Selected Format Specification */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200 space-y-6 text-left shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                  SPECIFICATION DETAILS
                </span>
                <span className="text-xs font-mono text-zinc-400">Verified Sourcing</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {currentFormat.name}
                </h3>
                <div className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                  {currentFormat.subtitle}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Available Capacities &amp; Molds</div>
                  <div className="text-xs sm:text-sm font-normal text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{currentFormat.specs}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Recommended Formulations</div>
                  <div className="text-xs sm:text-sm font-normal text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{currentFormat.bestFor}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Finishes &amp; Customization</div>
                  <div className="text-xs sm:text-sm font-normal text-[#111111]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>{currentFormat.finishes}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-zinc-500 font-mono">
              <Shield size={14} className="text-zinc-400" />
              <span>100% Oil-resistant, UV-blocking and leak-tested closures.</span>
            </div>
          </div>

          {/* Right: Traditional vs Modern Comparative Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-black text-white border border-zinc-800 space-y-6 text-left shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  POSITIONING COMPARISON
                </span>
                
                {/* Toggle */}
                <div className="flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setComparisonMode('modern')}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      comparisonMode === 'modern' ? 'bg-white text-black font-semibold' : 'text-zinc-400'
                    }`}
                  >
                    Modern
                  </button>
                  <button
                    type="button"
                    onClick={() => setComparisonMode('traditional')}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      comparisonMode === 'traditional' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400'
                    }`}
                  >
                    Old Cliché
                  </button>
                </div>
              </div>

              {comparisonMode === 'modern' ? (
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    THE BANEGA MODERN AYURVEDA APPROACH
                  </div>
                  <h4 className="text-xl sm:text-2xl font-normal text-white uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Minimalist Elegance &amp; Clear Active Potency
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-white shrink-0 mt-0.5" />
                      <span>Single or dual-hero botanical callouts with standardized percentage.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-white shrink-0 mt-0.5" />
                      <span>Weighted amber flint glass with soft-touch satin gold metallics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-white shrink-0 mt-0.5" />
                      <span>Zero medical-style clutter or generic leaf stock clipart.</span>
                    </li>
                  </ul>
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
                    Target Shelf: Premium Sephora / Nykaa Luxe / D2C Vanity placement.
                  </div>
                </div>
              ) : (
                <div className="space-y-4 opacity-75">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    THE 1990s OLD-FASHIONED HERBAL MISTAKE
                  </div>
                  <h4 className="text-xl sm:text-2xl font-normal text-white/80 uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Cluttered Green Plastic &amp; Unverified Claims
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-500 font-bold">✕</span>
                      <span>Generic green plastic HDPE bottles that leak oils and degrade quickly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-500 font-bold">✕</span>
                      <span>15 different fonts with busy herbal illustrations and crowded copy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-zinc-500 font-bold">✕</span>
                      <span>Unregulated “cure-all” claims that fail digital ad compliance on Meta &amp; Google.</span>
                    </li>
                  </ul>
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
                    Result: Discounted shelf price (₹199), low retention, difficult ad scaling.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Same formulation concept, 10x higher brand equity.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AyurvedaPackagingSection;
