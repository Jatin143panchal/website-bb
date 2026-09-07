import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

interface AyurvedaFinalCtaSectionProps {
  onStartLaunch: () => void;
  onTalkSpecialist: () => void;
}

export const AyurvedaFinalCtaSection: React.FC<AyurvedaFinalCtaSectionProps> = ({
  onStartLaunch,
  onTalkSpecialist,
}) => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-black text-white select-none relative overflow-hidden text-center">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono uppercase tracking-widest">
          <Leaf size={14} />
          <span>START YOUR AYURVEDIC JOURNEY TODAY</span>
        </div>

        {/* Main Big Ending Headline */}
        <div className="space-y-4">
          <h2
            className="text-[clamp(2.8rem,6vw,5.5rem)] font-normal text-white leading-[1.04] tracking-tight uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ROOTED IN AN IDEA. <br />
            <span className="text-zinc-400 italic">BUILT FOR THE MODERN MARKET.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            Now let's build your product. Turn your botanical vision into a shelf-ready brand in 45–90 days.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onStartLaunch}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl active:scale-95 cursor-pointer"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            <span>START MY AYURVEDIC LAUNCH</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={onTalkSpecialist}
            className="w-full sm:w-auto px-8 py-5 rounded-full bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 border border-zinc-700 cursor-pointer"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            <Phone size={15} />
            <span>TALK TO A LAUNCH SPECIALIST</span>
          </button>
        </div>

        {/* Reassurance Trust Ticker */}
        <div className="pt-10 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>100% AYUSH Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Low Pilot MOQs (250+ units)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Turnkey 45–90 Day Incubation</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaFinalCtaSection;
