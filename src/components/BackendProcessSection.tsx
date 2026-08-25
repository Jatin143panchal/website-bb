import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FlaskConical, PenTool, ClipboardCheck, Award, TrendingUp, ChevronRight, Activity } from 'lucide-react';

export const BackendProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const steps = [
    {
      num: 'STEP 01',
      title: 'PRODUCT DISCOVERY',
      tagline: 'Validate before investing.',
      icon: Search,
      bullets: ['Market research & validation', 'High-margin Category selection', 'Consumer deep-dive', 'Competitor benchmarking'],
      color: 'from-purple-500 to-[#D97706]',
    },
    {
      num: 'STEP 02',
      title: 'PRODUCT DEVELOPMENT',
      tagline: 'Build the right product.',
      icon: FlaskConical,
      bullets: ['Direct manufacturer sourcing', 'Custom formulation', 'Product costing analysis', 'Ingredient verification'],
      color: 'from-[#D97706] to-amber-600',
    },
    {
      num: 'STEP 03',
      title: 'BRAND CREATION',
      tagline: 'Create a memorable identity.',
      icon: PenTool,
      bullets: ['Brand naming & registry', 'Bespoke logo craft', 'Packaging design', 'Typography systems'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      num: 'STEP 04',
      title: 'LAUNCH PREPARATION',
      tagline: 'Prepare for market.',
      icon: ClipboardCheck,
      bullets: ['Trademark filing', 'GST registration', 'Regulatory compliance', 'Supply legalities'],
      color: 'from-red-500 to-rose-600',
    },
    {
      num: 'STEP 05',
      title: 'PRODUCT LAUNCH',
      tagline: 'Go live professionally.',
      icon: Award,
      bullets: ['Shopify checkout setup', 'Marketplace setup', 'Product photography', 'Launch assets'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      num: 'STEP 06',
      title: 'GROWTH & SCALE',
      tagline: 'Build long-term growth.',
      icon: TrendingUp,
      bullets: ['B2B & retail distribution', 'Growth marketing', 'Scale strategies', 'Retention systems'],
      color: 'from-emerald-500 to-teal-600',
    }
  ];

  return (
    <section id="framework-section" className="relative overflow-hidden font-sans min-h-screen">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          preload="none"
        >
          <source src="/assets/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#D97706] flex items-center justify-center gap-2">
            <Activity className="w-3 h-3 animate-pulse" />
            THE SYSTEMATIC FORMULA
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase leading-tight text-white mt-2">
            The 6-Step Product <br />
            <span className="text-[#D97706]">Launch Framework</span>
          </h2>
          <p className="text-xs md:text-sm text-white/70 font-medium max-w-xl mx-auto mt-1 mb-6 md:mb-8">
            A proven process designed to reduce risk and help founders launch with confidence.
          </p>
        </div>

        {/* Two Column Layout - Steps Left | Detail Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Left Column: Steps List - 6/12 */}
          <div className="lg:col-span-6 space-y-1.5">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-3 md:p-4 rounded-xl border transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                    isActive
                      ? 'bg-white/95 text-[#111111] border-white/95 shadow-lg'
                      : 'bg-white/20 text-white border-white/20 hover:bg-white/30 hover:border-[#D97706]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isActive ? 'bg-[#D97706] text-white' : 'bg-white/20 text-white'
                      }`}>
                        {step.num}
                      </span>
                      <div>
                        <h3 className={`text-xs md:text-sm font-black tracking-tight leading-none uppercase ${isActive ? 'text-[#111111]' : 'text-white'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-[8px] mt-0.5 font-bold ${isActive ? 'text-zinc-600' : 'text-white/70'}`}>
                          {step.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5 text-[#D97706]' : 'text-white/50'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detail Card - 6/12 */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-[#D97706]/30 shadow-lg relative overflow-hidden h-full"
              >
                <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${steps[activeStep].color} rounded-full blur-[60px] opacity-20`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-zinc-200 tracking-tighter">
                      {steps[activeStep].num}
                    </span>
                    <div className="p-3 rounded-xl bg-zinc-50/80 border border-zinc-200/50 backdrop-blur-sm">
                      {React.createElement(steps[activeStep].icon, { className: 'w-5 h-5 text-[#D97706]' })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[8px] font-black uppercase text-[#D97706] tracking-[0.3em]">
                      PHASE STRATEGY
                    </span>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase leading-tight text-[#111111] mt-0.5">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-[#666666] font-bold text-xs">
                      {steps[activeStep].tagline}
                    </p>
                  </div>

                  <div className="border-t border-zinc-200/70 pt-4">
                    <p className="text-[7px] font-black uppercase text-zinc-400 tracking-wider">
                      DELIVERABLES:
                    </p>
                    <ul className="grid grid-cols-1 gap-2 mt-2">
                      {steps[activeStep].bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-[#111111] font-semibold text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};