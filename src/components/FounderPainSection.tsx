import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, AlertTriangle, ArrowRight, ShieldAlert, BadgeCheck } from 'lucide-react';

export const FounderPainSection = () => {
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null);

  const founderQuestions = [
    { text: 'Will customers buy my product?', detail: 'We eliminate guesswork using rigorous validation studies before tooling up.' },
    { text: 'Am I choosing the right manufacturer?', detail: 'We connect you with vetted, pre-audited manufacturing labs directly.' },
    { text: 'What if I waste my investment?', detail: 'Sampling and precise cost structures guarantee complete financial visibility.' },
    { text: 'How do I compete with established brands?', detail: 'Through high-end structural packaging and supreme brand storytelling.' },
    { text: 'Will I ever be ready to launch?', detail: 'Our structured 6-step roadmap takes you to live operations in 45 days.' }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 px-6 overflow-hidden font-sans border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
            The future success of a business
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-sans font-black text-[#111111] tracking-tight uppercase leading-[0.95]">
            Why Banega Brand <br />
            <span className="text-zinc-700 md:text-3xl  font-light"> Is the Preferred Product Launch Company in India.</span>
          </h2>
        </div>

        {/* Dashboard Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Founder Stressed / Dubious Path (Chaotic Terminal UI) */}
          <div className="lg:col-span-6 bg-white rounded-[40px] p-6 md:p-10 border border-zinc-200 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 right-0 w-44 h-44 bg-red-550/[0.015] rounded-full blur-[80px]" />
            
            <div className="space-y-6">
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-zinc-150 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  <span className="text-[10px] font-black text-[#666666] tracking-wider uppercase">
                    PATH A: THE UNCERTAIN WAY
                  </span>
                </div>
                <div className="px-2.5 py-1 bg-red-50 text-red-600 border border-red-100 rounded text-[9px] font-black uppercase tracking-wider">
                  HIGH SYSTEM RISK
                </div>
              </div>

              {/* Core Stressed Copy & Questions */}
              <div className="space-y-4">
                <p className="text-2xl font-black text-[#00000] uppercase tracking-widest leading-relaxed">
                  Most founders get paralyzed in this cycle of questions:
                </p>

                <div className="space-y-10">
                  {founderQuestions.map((q, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => setHoveredQuestion(idx)}
                      onMouseLeave={() => setHoveredQuestion(null)}
                      className="p-4 bg-[#FAFAFA] rounded-2xl border border-zinc-200/80 hover:border-red-500/20 transition-all cursor-pointer group"
                    >
                      <div className="flex gap-3 items-center">
                        <HelpCircle className="w-4 h-4 text-red-500 shrink-0 group-hover:animate-bounce" />
                        <span className="text-xs font-black text-[#111111] tracking-tight">
                          {q.text}
                        </span>
                      </div>
                      
                      {hoveredQuestion === idx && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-[11px] text-[#666666] font-semibold mt-2 pl-7 leading-relaxed"
                        >
                          {q.detail}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 border-t border-zinc-150 pt-4 flex items-center justify-between">
              <span className="text-[10px] text-[#666666] font-black uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                Doubt is expensive. Delay is fatal.
              </span>
              <span className="text-[11px] text-red-650 font-black">
                STALL ZONE
              </span>
            </div>
          </div>

          {/* Right: Path of Execution (Pristine, Gold Spotlight visual of live products) */}
          <div className="lg:col-span-6 bg-white rounded-[40px] p-6 md:p-10 border-2 border-[#D97706]/20 relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D97706]/5 rounded-full blur-[100px]" />
            
            <div className="space-y-8 relative z-10">
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-zinc-150 pb-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-[#111111] tracking-wider uppercase">
                    PATH B: BANEGA EXECUTION FRAMEWORK
                  </span>
                </div>
                <div className="px-2.5 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded text-[9px] font-black uppercase tracking-wider">
                  MARKET COMPLIANT
                </div>
              </div>
            

              {/* Real Storytelling copy */}
              <div className="space-y-4">
                <h4 className="text-l md:text-1.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-snug">
                 A product launch can determine the future success of a business. Many products fail because of poor positioning, weak branding, inadequate marketing, or lack of market research. 
                </h4>
                <p className="text-[#666666] font-semibold text-sm text-left">
  Businesses choose Banega Brand because we provide:
</p>
<ul className="text-[#666666] font-semibold text-sm text-left list-disc pl-5 space-y-1">
  <li>End-to-End Product Launch Services</li>
  <li>Comprehensive Brand Launch Services</li>
  <li>Professional Product Branding Solutions</li>
  <li>High-Converting Marketing Campaigns</li>
  <li>Digital Product Launch Expertise</li>
  <li>Startup Branding Strategies</li>
  <li>Business Growth Consulting</li>
  <li>Personal Branding Solutions</li>
  <li>Market Research and Validation</li>
  <li>Performance Marketing and Lead Generation</li>
</ul>
              </div>

              {/* Glowing Metric Stats within the Launch Path */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAFAFA] rounded-2xl border border-zinc-200">
                  <span className="text-2xl font-black text-[#D97706]">100%</span>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-1">Sourcing Certainty</p>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-2xl border border-zinc-200">
                  <span className="text-2xl font-black text-emerald-600">45 Days</span>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-1">SLA Launch Target</p>
                </div>
              </div>
            </div>

            {/* CTA action button */}
            <div className="mt-8 pt-6 border-t border-zinc-150 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button 
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-[#D97706] hover:bg-[#111111] text-white transition-all duration-300 font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 group shadow-sm cursor-pointer"
              >
                BOOK A STRATEGY CALL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>
              
              <span className="text-[10px] text-[#666666] font-black uppercase tracking-widest flex items-center gap-1.5 self-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Next Call: Today available
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
