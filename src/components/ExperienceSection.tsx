import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Rocket, ShieldCheck, Zap, Star, Globe, TrendingUp } from 'lucide-react';

const AnimatedIcon = ({ icon: Icon, color, delay = 0 }: { icon: any, color: string, delay?: number }) => (
  <motion.div
    initial={{ scale: 0, rotate: -20 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delay 
    }}
    whileHover={{ scale: 1.2, rotate: 10 }}
    className="w-14 h-14 rounded-[20px] flex items-center justify-center shadow-lg relative group transition-all duration-500"
    style={{ backgroundColor: color }}
  >
    <Icon size={28} className="text-white relative z-10" />
    <div className="absolute inset-0 bg-white/20 rounded-[20px] scale-0 group-hover:scale-100 transition-transform duration-500" />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 rounded-[20px] bg-inherit blur-md -z-10"
    />
  </motion.div>
);

export const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-44 px-6 bg-white overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#b45309]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 md:gap-24 mb-20 md:mb-32">
          <div className="flex-1 space-y-6 md:space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 text-white rounded-full shadow-2xl shadow-black/10"
            >
               <Zap size={14} className="text-[#b45309] fill-[#b45309]" />
               <span className="text-[11px] font-black uppercase tracking-[0.2em]">Partner-Led Growth</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[44px] md:text-[84px] lg:text-[100px] font-display font-black tracking-tighter leading-[0.85] text-black"
            >
              Zero Experience. <br />
              <span className="text-[#b45309] italic">Infinite Result.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:max-w-md space-y-8 pb-4"
          >
             <p className="text-xl md:text-2xl font-bold text-gray-400 leading-tight tracking-tight">
              We bridge the gap between your dream and your shelf. Full-stack brand building for the modern entrepreneur.
             </p>
             <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-10 py-6 bg-zinc-900 text-white rounded-[24px] font-black text-lg hover:bg-[#b45309] transition-all flex items-center gap-3 group shadow-2xl shadow-black/5 active:scale-95 leading-none">
                  Start Brand Now
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
             </div>
          </motion.div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 bg-[#FAFAFA] rounded-[40px] md:rounded-[60px] relative overflow-hidden group border border-zinc-100/50 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 min-h-[350px] lg:min-h-[600px]"
          >
            <video 
              src="/assets/showcase/launchvid.webm" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(255,101,5,0.04)_0%,transparent_70%)] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* Side Column Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            
            {/* Steps Container - Parallax Roadmap Style */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex-1 bg-[#FAFAFA] rounded-[40px] md:rounded-[60px] p-10 md:p-14 text-black flex flex-col justify-center relative overflow-hidden group border border-zinc-100"
            >
               {/* Roadmap Background Path */}
               <div className="absolute left-[calc(3rem+23px)] top-20 bottom-20 w-[2px] bg-black/5 hidden md:block">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className="w-full bg-[#b45309]"
                  />
               </div>

               <div className="relative z-10 space-y-12">
                  {[
                    { text: "Concept Development", icon: Sparkles, color: "#b45309", step: "01" },
                    { text: "Brand Strategy", icon: Target, color: "#b45309", step: "02" },
                    { text: "Market Launch", icon: Rocket, color: "#b45309", step: "03" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2 }}
                      className="flex items-center gap-6 group/item relative"
                    >
                       {/* Floating Step Number for Parallax effect */}
                       <motion.div 
                         animate={{ y: [0, -10, 0] }}
                         transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                         className="absolute -left-16 text-[70px] font-black text-black/[0.03] pointer-events-none select-none italic"
                       >
                         {item.step}
                       </motion.div>

                       <motion.div 
                         whileHover={{ scale: 1.1, rotate: 10 }}
                         className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-200 shadow-sm relative z-10"
                         style={{ boxShadow: `0 0 20px ${item.color}10` }}
                       >
                          <item.icon size={20} className="text-[#b45309]" />
                       </motion.div>

                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#b45309] opacity-60 group-hover/item:opacity-100 transition-opacity">Phase {item.step}</span>
                          <span className="text-[19px] font-black tracking-tight group-hover/item:translate-x-1 transition-transform">{item.text}</span>
                       </div>
                    </motion.div>
                  ))}
               </div>

               {/* Decorative background star */}
               <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
                  <Star size={160} className="fill-black" />
               </div>
            </motion.div>

            {/* Founders Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#FAFAFA] rounded-[50px] p-10 flex flex-col items-center text-center gap-4 text-black border border-gray-100"
            >
               <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      animate={{ 
                        y: [0, -8, 0],
                      }}
                      transition={{ 
                        opacity: { delay: i * 0.1 },
                        y: { 
                          duration: 3 + i, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: i * 0.2
                        }
                      }}
                      whileHover={{ scale: 1.2, zIndex: 50 }}
                      className="w-14 h-14 bg-white rounded-full border border-gray-100 flex items-center justify-center p-3 shadow-xl transition-colors hover:border-[#b45309]/30 overflow-hidden"
                    >
                       <img 
                        src={`/assets/logos/${i}.webp`} 
                        alt={`Client Logo ${i}`} 
                        className="w-full h-full object-contain" 
                      />
                    </motion.div>
                  ))}
               </div>
               <div className="font-black text-sm uppercase tracking-[0.3em] opacity-30">Trusted by</div>
               <div className="text-[20px] font-black tracking-tighter">120+ Founders Launched</div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}; 
