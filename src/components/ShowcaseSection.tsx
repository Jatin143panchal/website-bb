import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Smartphone, Package, ShieldCheck, ArrowUpRight, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShowcaseCard = ({ 
  title, 
  subtitle, 
  image, 
  video,
  icon: Icon,
  className,
  delay = 0 
}: { 
  title: string; 
  subtitle: string; 
  image?: string; 
  video?: string;
  icon: any; 
  className?: string;
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative rounded-[48px] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-700 ${className}`}
  >
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10" />
    
    {/* Floating Tag */}
    <div className="absolute top-8 left-8 z-20 flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
       <div className="w-8 h-8 rounded-full bg-[#0B0908] text-white flex items-center justify-center">
          <Icon size={16} />
       </div>
       <span className="text-[11px] font-black uppercase tracking-widest text-[#0B0908]">{title}</span>
    </div>

    {/* Media Container */}
    <div className="w-full h-full overflow-hidden">
       {video ? (
         <video 
           src={video}
           autoPlay
           loop
           muted
           playsInline
           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
       ) : (
         <motion.img 
           src={image} 
           alt={title}
           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
           referrerPolicy="no-referrer"
         />
       )}
    </div>
  </motion.div>
);

export const ShowcaseSection = () => {
  return (
    <section className="py-24 md:py-44 px-6 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6505]/5 rounded-full blur-[150px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-32 space-y-8">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-3 px-5 py-2 bg-[#0B0908] text-white rounded-full shadow-2xl"
           >
              <MousePointer2 size={14} className="text-[#FF6505]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]">Interactive Launch Preview</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[48px] md:text-[84px] font-display font-black tracking-tighter leading-[0.9] text-black italic"
           >
             The Ecosystem <br />
             <span className="text-[#FF6505]">Built for Conversion.</span>
           </motion.h2>
           
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl md:text-2xl text-gray-400 font-bold max-w-2xl"
           >
             From the first click to the final unboxing, we craft every touchpoint to be premium and trustworthy.
           </motion.p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[400px] md:auto-rows-[500px]">
          
          {/* Main Website Card */}
          <ShowcaseCard 
            title="Digital Flagship"
            subtitle="Full Home Website"
            icon={Monitor}
            image="/assets/showcase/1.webp"
            className="lg:col-span-8 lg:row-span-1"
          />

          {/* Logo Card */}
          <ShowcaseCard 
            title="Identity"
            subtitle="Core Brand Logo"
            icon={ShieldCheck}
            video="/assets/showcase/core.mp4"
            className="lg:col-span-4 lg:row-span-1"
            delay={0.1}
          />

          {/* Packaging Card */}
          <ShowcaseCard 
            title="Physical World"
            subtitle="Premium Packaging"
            icon={Package}
            video="/assets/showcase/pppp.mp4"
            className="lg:col-span-6 lg:row-span-1"
            delay={0.2}
          />

          {/* Ecommerce Card */}
          <ShowcaseCard 
            title="Conversion Engine"
            subtitle="Sales Landing Page"
            icon={Smartphone}
            video="/assets/showcase/launch_preview.mp4"
            className="lg:col-span-6 lg:row-span-1"
            delay={0.3}
          />
        </div>

        {/* Bottom Stat Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-[#FAFAFA] rounded-[48px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12"
        >
           <div className="flex flex-col gap-2">
              <span className="text-[12px] font-black tracking-[0.3em] text-[#FF6505] uppercase italic">Ready to Scale?</span>
              <h4 className="text-3xl font-black tracking-tight">Your brand identity is just one step away from reality.</h4>
           </div>
           <Link to="/contact" className="px-12 py-7 bg-[#0B0908] text-white rounded-[24px] font-black text-lg hover:bg-[#FF6505] transition-all flex items-center gap-4 group shadow-xl active:scale-95 leading-none shrink-0 text-center">
             Start Production
             <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </Link>
        </motion.div>

      </div>
    </section>
  );
};
