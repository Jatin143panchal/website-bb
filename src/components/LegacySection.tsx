// import React from 'react';
// import { motion } from 'motion/react';
// import { Sparkles, Milestone } from 'lucide-react';

// export const LegacySection = () => {
//   const handleScrollToContact = () => {
//     const el = document.getElementById('consultation');
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="bg-[#FAFAFA] py-24 md:py-36 px-6 overflow-hidden relative text-[#111111] border-t border-zinc-200 font-sans">
      
//       {/* Background ambient lighting */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-[#D97706]/5 blur-[135px] rounded-full opacity-60 animate-pulse" />
//         <div className="absolute bottom-0 right-[5%] w-[400px] h-[300px] bg-[#D97706]/2 blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
//         {/* Left Side: Massive Editorial Typography */}
//         <div className="lg:col-span-7 space-y-8 text-left">
          
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 shadow-sm rounded-full font-black text-[10px] uppercase tracking-[0.3em] text-[#D97706]">
//             <Milestone className="w-3.5 h-3.5" />
//             THE EXECUTIVE MOMENTUM
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#111111]">
//               YOU'RE NOT BUILDING <br />
//               <span className="text-zinc-400 font-light">A PRODUCT.</span>
//             </h2>
//             <h3 className="text-4xl md:text-7xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#D97706] italic font-serif font-light lowercase">
//               you're building a legacy.
//             </h3>
//           </div>

//           {/* Subtext description list */}
//           <div className="space-y-6 max-w-2xl font-semibold text-[#666666] text-lg leading-relaxed">
//             <p>
//               The next five years of your business will be shaped by the decisions you make today.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200">
//               <div className="space-y-1">
//                 <span className="text-xs font-black text-[#D97706] tracking-widest uppercase block">01 / CERTAINTY</span>
//                 <p className="text-sm font-black text-[#111111] uppercase tracking-tight">Launch correctly.</p>
//               </div>
//               <div className="space-y-1">
//                 <span className="text-xs font-black text-[#D97706] tracking-widest uppercase block">02 / DOMINANCE</span>
//                 <p className="text-sm font-black text-[#111111] uppercase tracking-tight">Scale confidently.</p>
//               </div>
//               <div className="space-y-1">
//                 <span className="text-[#D97706] text-xs font-black tracking-widest uppercase block">03 / ENDURANCE</span>
//                 <p className="text-sm font-black text-[#111111] uppercase tracking-tight">Build something meaningful.</p>
//               </div>
//             </div>
//           </div>

//           {/* CTA Link */}
//           <div className="pt-4">
//             <button
//               onClick={handleScrollToContact}
//               className="px-10 py-5 bg-[#D97706] hover:bg-[#111111] text-white transition-all duration-300 font-black text-xs uppercase tracking-widest rounded-2xl inline-flex items-center gap-2 shadow-md active:scale-95 cursor-pointer leading-none"
//             >
//               BOOK A FREE STRATEGY CALL
//             </button>
//           </div>

//         </div>

//         {/* Right Side: Luxury Kinetic Graphical Vector Art */}
//         <div className="lg:col-span-5 relative flex justify-center items-center py-6">
//           <div className="w-full max-w-[400px] aspect-[1/1] rounded-[48px] bg-white border border-zinc-200 shadow-md p-8 flex flex-col justify-between relative overflow-hidden">
//             {/* Spotlight shimmer */}
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.04),transparent_50%)] pointer-events-none" />

//             <div className="flex justify-between items-center border-b border-zinc-150 pb-4">
//               <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">
//                 LEGACY INDEX COHORT
//               </span>
//               <Sparkles className="w-4 h-4 text-[#D97706]" />
//             </div>

//             {/* Continuous equity curve made using inline SVG */}
//             <div className="py-8 text-center flex-1 flex flex-col justify-center">
//               <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 50">
//                 {/* Grid guidelines */}
//                 <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(0,0,0,0.03)" strokeDasharray="3,3" />
//                 <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(0,0,0,0.03)" strokeDasharray="3,3" />
//                 <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(0,0,0,0.03)" strokeDasharray="3,3" />

//                 {/* Vector Gradient path */}
//                 <defs>
//                   <linearGradient id="glow-grad-legacy" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#D97706" stopOpacity="0.2" />
//                     <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//                 <path
//                   d="M0 45 Q 25 35, 50 25 T 100 5 L 100 50 L 0 50 Z"
//                   fill="url(#glow-grad-legacy)"
//                 />
//                 <motion.path
//                   initial={{ pathLength: 0 }}
//                   animate={{ pathLength: 1 }}
//                   transition={{ duration: 3, delay: 0.5 }}
//                   d="M0 45 Q 25 35, 50 25 T 100 5"
//                   fill="none"
//                   stroke="#D97706"
//                   strokeWidth="2.5"
//                 />
//                 {/* Core pulse points */}
//                 <circle cx="100" cy="5" r="2.5" fill="#D97706" />
//                 <circle cx="100" cy="5" r="5" fill="none" stroke="#D97706" strokeWidth="1" className="animate-ping" />
//               </svg>
//             </div>

//             {/* Simulated premium metric parameters */}
//             <div className="grid grid-cols-2 gap-4 border-t border-zinc-150 pt-4 mt-2">
//               <div>
//                 <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest block">BRAND VALUE</span>
//                 <span className="text-lg font-black tracking-tighter text-[#111111]">EXECUTIVE</span>
//               </div>
//               <div>
//                 <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest block">LAUNCH PRESTIGE</span>
//                 <span className="text-lg font-black tracking-tighter text-[#D97706]">GUARANTEED</span>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };
