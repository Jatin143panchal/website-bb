import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AyurvedaEmotionalBannerSectionProps {
  onHelpStart: () => void;
}

export const AyurvedaEmotionalBannerSection: React.FC<AyurvedaEmotionalBannerSectionProps> = ({ onHelpStart }) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#111111] text-white select-none border-b border-zinc-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3">
          <div className="w-8 h-px bg-zinc-600" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
            ZERO PREVIOUS EXPERIENCE REQUIRED
          </span>
          <div className="w-8 h-px bg-zinc-600" />
        </div>

        {/* Main Emotional Headline */}
        <div className="space-y-4">
          <h2
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal text-white leading-[1.05] tracking-tight uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            YOU DON'T NEED TO HAVE <br />
            <span className="font-light text-zinc-400 italic">THE FORMULA READY.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Maybe all you have is an aspiration:{' '}
            <span className="text-white italic">
              “I want to build a modern Ayurvedic ritual brand.”
            </span>{' '}
            That's all you need to start.
          </p>
        </div>

        {/* Clean open list with minimal hairline styling */}
        <div className="pt-8 border-t border-zinc-800 max-w-2xl mx-auto space-y-6 text-left">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 text-center">
            WE HANDLE EVERY TECHNICAL & REGULATORY STEP
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs text-zinc-300">
            {[
              'Classical text sourcing & modern herb extraction',
              'Decoction ratios & stability preservation',
              'Amber UV glass flacons & custom neck threads',
              'AYUSH certified clean manufacturing facilities',
              'Microbial testing & heavy metal clearance',
              'E-commerce setup & marketplace launch support',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-1.5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Big Punchline & CTA */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <div
              className="text-xl sm:text-2xl font-normal tracking-tight text-white uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              START WITH THE IDEA.
            </div>
            <div
              className="text-xl sm:text-2xl font-light text-zinc-400 italic uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              WE'LL HELP YOU BUILD THE REST.
            </div>
          </div>

          <button
            type="button"
            onClick={onHelpStart}
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3 active:scale-95 cursor-pointer shadow-sm"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>HELP ME START</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaEmotionalBannerSection;
