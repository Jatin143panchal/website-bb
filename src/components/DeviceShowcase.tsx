import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, Heart, Zap, Star, Shield, 
  Brain, Moon, Sun, Coffee, Book, 
  Droplets, Dumbbell, Wind, PenTool,
  ChevronLeft, ChevronRight, Sparkles,
  Timer, Calculator, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../lib/utils';

// Sub-component for the floating cards
const FloatingCard = ({ 
  children, 
  className, 
  delay = 0,
  yOffset = 20
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number,
  yOffset?: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.to(cardRef.current, {
      y: `+=${yOffset}`,
      duration: 2 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: delay
    });
  }, [yOffset, delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center gap-3 w-40 h-40 shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
};

const ImageCard = ({ src, className, delay = 0, yOffset = 15 }: { src: string, className?: string, delay?: number, yOffset?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      y: `+=${yOffset}`,
      duration: 2.5 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: delay
    });
  }, [yOffset, delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "rounded-[2rem] overflow-hidden shadow-lg w-40 h-40 shrink-0 border-4 border-white",
        className
      )}
    >
      <img src={src} alt="Lifestyle" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
  );
};

export const DeviceShowcase = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative px-6">
        
        {/* Floating Cards - Top Row */}
        <div className="flex justify-center items-end gap-6 mb-12 -translate-x-10">
          <FloatingCard delay={0}>
             <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
               <Dumbbell className="text-blue-500 w-6 h-6" />
             </div>
             <span className="text-sm font-bold text-gray-400">Stretch for<br/>5 minutes</span>
          </FloatingCard>
          
          <ImageCard 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&h=400&auto=format&fit=crop" 
            delay={0.5}
          />

          <FloatingCard delay={0.2} className="hidden md:flex">
             <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center">
               <Moon className="text-cyan-500 w-6 h-6" />
             </div>
             <span className="text-sm font-bold text-gray-400">Phone off<br/>by 10:30</span>
          </FloatingCard>

          <ImageCard 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=400&auto=format&fit=crop" 
            delay={1}
            className="hidden lg:block"
          />

          <FloatingCard delay={0.8} className="hidden xl:flex">
             <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
               <Brain className="w-6 h-6" />
             </div>
             <span className="text-sm font-bold text-gray-400">Focus session</span>
          </FloatingCard>
        </div>

        {/* Center: The Phone Mockup */}
        <div className="relative z-20 flex justify-center py-10 scale-90 md:scale-100">
          <div className="relative w-[340px] h-[680px] bg-[#141414] rounded-[3.5rem] border-[12px] border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col">
            {/* iPhone Notch Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#2a2a2a] rounded-b-2xl z-50 flex items-center justify-center">
               <div className="w-12 h-1 bg-black/20 rounded-full" />
            </div>

            {/* Phone Screen Body */}
            <div className="flex-1 flex flex-col pt-10">
              {/* Top Dashboard (Dark) */}
              <div className="px-6 pb-8">
                <div className="flex items-center justify-between text-white/50 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span>19:02</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 bg-white/20 rounded-sm" />
                    <div className="w-4 h-2 bg-white/50 rounded-sm" />
                  </div>
                </div>

                <h4 className="text-white text-xl font-bold mb-1">Weekly Overview</h4>
                <p className="text-white/40 text-[11px] mb-8">Your progress across the week</p>

                {/* Graph Area */}
                <div className="relative h-32 w-full mt-4">
                  <div className="absolute top-0 right-0 flex items-center gap-2">
                     <span className="text-white/60 text-[10px] font-bold">86% this week</span>
                     <div className="bg-white/10 px-2 py-0.5 rounded-md text-white/40 text-[8px] flex items-center gap-1">
                        Last week <ChevronRight size={8} />
                     </div>
                  </div>
                  
                  {/* Custom SVG Graph */}
                  <svg className="w-full h-full mt-4 overflow-visible" viewBox="0 0 100 40">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,35 Q10,15 20,25 T40,10 T60,20 T80,15 T100,30 L100,40 L0,40 Z" 
                      fill="url(#chartGradient)" 
                    />
                    <path 
                      d="M0,35 Q10,15 20,25 T40,10 T60,20 T80,15 T100,30" 
                      fill="none" 
                      stroke="#FF4D00" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                    <circle cx="45" cy="12" r="2.5" fill="white" stroke="#FF4D00" strokeWidth="1" />
                  </svg>
                  
                  <div className="flex justify-between mt-2 text-[8px] font-bold text-white/30 uppercase tracking-tighter">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                </div>
              </div>

              {/* Bottom White Area */}
              <div className="flex-1 bg-white rounded-t-[2.5rem] p-5">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 border border-gray-100 p-3 rounded-2xl">
                     <span className="text-xl font-black block">12</span>
                     <span className="text-[9px] text-gray-400 font-bold uppercase leading-none">Streaks<br/>completed</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-3 rounded-2xl">
                     <span className="text-xl font-black block">07</span>
                     <span className="text-[9px] text-gray-400 font-bold uppercase leading-none">Focus<br/>sessions</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-bold">Routine Stacks</h5>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><ChevronLeft size={10} /></div>
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><ChevronRight size={10} /></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    <div className="bg-[#E6F4EA] min-w-[130px] p-3 rounded-2xl border border-[#CEEAD6]">
                       <span className="bg-[#34A853] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full inline-block mb-2">3 habits</span>
                       <div className="text-xs font-bold leading-tight mb-1">Morning Start</div>
                       <div className="text-[9px] text-gray-600">Water, stretch, plan</div>
                    </div>
                    <div className="bg-[#E8F0FE] min-w-[130px] p-3 rounded-2xl border border-[#D2E3FC]">
                       <span className="bg-[#4285F4] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full inline-block mb-2">2 habits</span>
                       <div className="text-xs font-bold leading-tight mb-1">Evening Reset</div>
                       <div className="text-[9px] text-gray-600">Review, phone off</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center">
                        <Sparkles className="text-white w-4 h-4 fill-current" />
                     </div>
                     <h5 className="text-sm font-bold">AI Suggestions</h5>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                     <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                        <span className="text-[10px] font-bold">Better Timing</span>
                     </div>
                     <p className="text-[9px] text-gray-500">Your best time for this habit is 8:20 AM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards - Bottom Row */}
        <div className="flex justify-center items-start gap-6 mt-12 translate-x-10">
          <FloatingCard delay={0.4} className="hidden lg:flex">
             <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
               <Sun className="w-6 h-6" />
             </div>
             <span className="text-sm font-bold text-gray-400">Meditate</span>
          </FloatingCard>

          <ImageCard 
            src="https://images.unsplash.com/photo-1545208393-216c7ad81645?q=80&w=400&h=400&auto=format&fit=crop" 
            delay={0.1}
          />

          <FloatingCard delay={0.6}>
             <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
               <Droplets className="w-6 h-6" />
             </div>
             <span className="text-sm font-bold text-gray-400">Track water</span>
          </FloatingCard>

          <ImageCard 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=400&auto=format&fit=crop" 
            delay={0.3}
            className="hidden md:block"
          />

          <FloatingCard delay={0.9} className="hidden xl:flex">
             <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
               <PenTool className="w-6 h-6" />
             </div>
             <span className="text-sm font-bold text-gray-400">Write journal</span>
          </FloatingCard>
        </div>

      </div>
    </section>
  );
};
