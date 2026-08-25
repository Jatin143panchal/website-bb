import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCtaSection = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden text-white text-center border-t border-[#334155] selection:bg-[#D97706] font-sans">
      
      {/* Background Video - With reduced opacity */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/assets/4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Background ambient light - Kept for visual effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[350px] bg-[#D97706]/20 blur-[130px] rounded-full animate-pulse" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        
        {/* Floating elements */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            FINAL BRAND EXECUTIVE SENTENCE
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight leading-[1] text-white uppercase max-w-4xl mx-auto drop-shadow-lg">
            THE DIFFERENCE BETWEEN AN IDEA AND A BRAND <br />
            <span className="text-[#D97706] italic drop-shadow-lg">IS EXECUTION.</span>
          </h2>
          
          <p className="text-zinc-300 font-bold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Banega Brand helps founders move from uncertainty to market-ready businesses.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Link 
            to="/contact" 
            className="px-10 py-5.5 bg-[#D97706] hover:bg-white hover:text-black text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl active:scale-95 leading-none cursor-pointer"
          >
            LAUNCH MY BRAND
            <ArrowRight size={16} className="text-white group-hover:text-black" />
          </Link>
        </div>

      </div>
    </section>
  );
};