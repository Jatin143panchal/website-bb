import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Package, Rocket, TrendingUp, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const roadmapSteps = [
    { label: 'Idea', icon: Lightbulb, color: 'text-amber-500', bg: 'bg-amber-100' },
    { label: 'Product', icon: Package, color: 'text-[#D97706]', bg: 'bg-[#D97706]/10' },
    { label: 'Brand', icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-100' },
    { label: 'Launch', icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-100' },
    { label: 'Growth', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  ];

  const handleScrollToFramework = () => {
    const el = document.getElementById('framework-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#FAFAFA] pt-32 pb-16 md:py-28 px-6 lg:px-12 overflow-hidden selection:bg-[#D97706] selection:text-white font-sans">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/images/hero-bg-fallback.webp" 
            alt="Background" 
            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Background radial glow & slow grid - Now on top of video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D97706]/10 blur-[160px] rounded-full opacity-60" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#D97706]/5 blur-[130px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Side */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-sm border border-white/20 shadow-sm rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-[#111111] uppercase">
              COMPLETE PRODUCT LAUNCH & MARKETING SOLUTIONS
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-sans font-black leading-[1.05] tracking-tight text-white uppercase">
              India's No.1 Product Launch Company
            </h1>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-sans font-black leading-[1.05] tracking-tight text-[#D97706]">
              Complete Product Launch, Branding & Marketing Solutions
            </h2>
          </div>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed tracking-tight"
          >
            In today's competitive business landscape, launching a product successfully requires much more than manufacturing and distribution. Businesses need a strategic approach that combines branding, marketing, positioning, digital visibility, customer acquisition, and long-term growth planning. This is where Banega Brand stands apart as a trusted Product Launch Company in India.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
          >
            <Link 
              to="/contact"
              className="text-center px-8 py-4 bg-[#D97706] text-white hover:bg-[#111111] rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-md flex items-center justify-center gap-3 cursor-pointer"
            >
              LAUNCH MY BRAND
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            
            <button 
              onClick={handleScrollToFramework}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 shadow-sm rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 hover:border-white/50 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              SEE OUR 6-STEP FRAMEWORK
            </button>
          </motion.div>
        </div>

        {/* Right Premium Animated Visual Side */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-6">
          
          {/* Animated Glowing Roadmap */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="w-[120%] h-[120%] border border-white/20 rounded-full animate-spin [animation-duration:50s] absolute opacity-30" />
            <div className="w-[90%] h-[90%] border border-white/20 rounded-full animate-spin [animation-duration:30s] [animation-direction:reverse] absolute opacity-25" />
          </div>

          <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-[50px] bg-white/95 backdrop-blur-sm border border-white/80 shadow-lg p-6 overflow-hidden flex flex-col justify-between">
            
            {/* Top Indicator */}
            <div className="flex justify-between items-center bg-[#FAFAFA]/80 px-4 py-2 rounded-full border border-zinc-200/50">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#D97706]">
                PRODUCT ROADMAP
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Middle Real Product Mockup Pure CSS */}
            <div className="flex-1 flex justify-center items-center my-6 relative">
              
              {/* Radial Orange Backlight */}
              <div className="absolute w-44 h-44 rounded-full bg-[#D97706]/10 blur-[60px] animate-pulse" />

              {/* Gentle floating pure CSS bottle */}
              <motion.div 
                animate={{ 
                  y: [-12, 12, -12],
                  rotate: [-1, 1, -1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Shiny cap */}
                <div className="w-10 h-10 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-100 rounded-lg shadow-sm border-b border-zinc-200" />
                {/* Golden metallic neck spacer */}
                <div className="w-8 h-2 bg-[#D97706]" />
                {/* Premium glass vessel */}
                <div className="w-24 h-40 bg-zinc-50 border-2 border-zinc-200 p-4 relative flex flex-col justify-end items-center shadow-md rounded-[24px]">
                  {/* Frosted fluid level glow inside */}
                  <div className="absolute inset-x-2 bottom-2 top-14 bg-gradient-to-t from-[#D97706]/10 to-amber-500/5 rounded-[18px] pointer-events-none" />
                  
                  {/* Elegant gold foil brand label */}
                  <div className="w-18 h-20 bg-white border border-zinc-200/80 rounded-xl p-2 z-10 flex flex-col items-center justify-center text-center space-y-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#D97706]" />
                    <p className="text-[6px] font-black uppercase text-[#D97706] tracking-widest">
                      BANEGA
                    </p>
                    <p className="text-[5px] font-bold text-[#666666] uppercase tracking-wider">
                      LABORATORIES
                    </p>
                    <div className="w-4 h-[1px] bg-zinc-200" />
                    <p className="text-[4px] text-zinc-400 italic">
                      ESTM 2024
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Animated Timeline Nodes */}
            <div className="relative border-t border-zinc-200 pt-4">
              <div className="absolute top-[28px] left-[15px] right-[15px] h-[1px] bg-zinc-200 z-0" />
              <div className="grid grid-cols-5 gap-0 relative z-10">
                {roadmapSteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center space-y-2">
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.12, 1],
                          borderColor: ["rgb(228, 228, 231)", "rgba(217, 119, 6, 0.8)", "rgb(228, 228, 231)"] 
                        }}
                        transition={{ 
                          duration: 3, 
                          delay: idx * 0.5, 
                          repeat: Infinity 
                        }}
                        className={`w-8 h-8 rounded-full ${step.bg} border border-zinc-200 flex items-center justify-center shadow-sm`}
                      >
                        <IconComp className={`w-3.5 h-3.5 ${step.color}`} />
                      </motion.div>
                      <span className="text-[8px] font-black tracking-wide text-zinc-400 uppercase">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Background glowing indicator */}
          <div className="absolute -bottom-10 right-2 w-48 h-48 bg-[#D97706]/10 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
};